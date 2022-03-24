<template>
  <div>
    <div class="m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Payroll Items</h2>
        <p class="">Dashboard / Payroll Items</p>
      </div>
    </div>

    <div class="m-8">
      <TabView ref="tabview2">
        <TabPanel header="Additions">
          <!-- add addition button -->
          <div class="mt-4 flex justify-end">
            <Button label="+ Add Addition" class="p-button-rounded" @click="openAddition" />
          </div>

          <!-- additions table -->
          <div>
            <div class="m-8">
              <DataTable ref="dt" :value="additions" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">             

                <Column field="name" header="Name" style="min-width:12rem"></Column>

                <Column field="category" header="Category" style="min-width:8rem"></Column>

                <Column field="u_amount" header="Default / Unit Amount"  style="min-width:12rem"></Column>

                <Column header="Action" :exportable="false" style="min-width:8rem">
                  <template #body="slotProps">
                    <div class="flex">
                      <div class=""><Button icon="pi pi-pencil" class="p-button-rounded p-button-success" @click="editAddition(slotProps.data)" /></div>
                      <div class="ml-2"><Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteAddition(slotProps.data)" /></div>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>

            <Dialog v-model:visible="additionDialog" :style="{width: '450px'}" header="Additions" :modal="true" class="p-fluid">
              <div class="field">
                <p class="py-2 mt-2">Name</p>
                <InputText id="name" v-model.trim="temp_addition.name" required="true" autofocus :class="{'p-invalid': submitted && !temp_addition.name}" />
                <small class="p-error" v-if="submitted && !temp_addition.name">Name is required.</small>
              </div>

              <div class="field">
                <p class="py-2 mt-2">Category</p>
                <Dropdown v-model="temp_addition.category" class="w-full" :options="categories" placeholder="Select a Category" />
              </div>

              <div class="field">
                <div class="grid p-fluid">
                  <p class="py-2 mt-2">Unit Amount</p>
                  <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">$</span>
                    <InputText placeholder="Price" v-model.trim="temp_addition.u_amount" />
                      <span class="p-inputgroup-addon">.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveAddition" />
              </template>
            </Dialog>

            <Dialog v-model:visible="deleteAdditionDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
              <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="temp_addition">Are you sure you want to delete <b>{{temp_addition.name}}</b>?</span>
              </div>
              <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteAdditionDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteAddition" />
              </template>
            </Dialog>
          </div>
        </TabPanel>

        <TabPanel header="Overtime">
          <!-- add overtime button -->
          <div class="mt-4 flex justify-end">
            <Button label="+ Add Overtime" class="p-button-rounded" @click="openOvertime" />
          </div>
          
          <!-- overtime table -->
          <div>
            <div class="m-8">
              <DataTable ref="dt" :value="overtimes" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">             

                <Column field="name" header="Name" style="min-width:12rem"></Column>

                <Column field="r_type" header="Rate Type" style="min-width:8rem"></Column>

                <Column field="rate" header="Rate" style="min-width:8rem"></Column>

                <Column header="Action" :exportable="false" style="min-width:8rem">
                  <template #body="slotProps">
                    <div class="flex">
                      <div class=""><Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editOvertime(slotProps.data)" /></div>
                      <div class="ml-2"><Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteOvertime(slotProps.data)" /></div>
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>

            <Dialog v-model:visible="overtimeDialog" :style="{width: '450px'}" header="Overtime" :modal="true" class="p-fluid">
              <div class="field">
                <p class="py-2 mt-2">Name</p>
                <InputText id="name" v-model.trim="temp_overtime.name" required="true" autofocus :class="{'p-invalid': submitted && !temp_overtime.name}" />
                <small class="p-error" v-if="submitted && !temp_overtime.name">Name is required.</small>
              </div>

              <div class="field">
                <p class="py-2 mt-2">Rate Type</p>
                <Dropdown v-model="temp_overtime.r_type" class="w-full" :options="rates" placeholder="Select a Rate type" />
              </div>

              <div class="field">
                <div class="grid p-fluid">
                  <p class="py-2 mt-2">Rate</p>
                  <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">$</span>
                    <InputText placeholder="Price" v-model.trim="temp_overtime.rate" />
                      <span class="p-inputgroup-addon">.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialogOver"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveOvertime" />
              </template>
            </Dialog>

            <Dialog v-model:visible="deleteOvertimeDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
              <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="temp_payroll">Are you sure you want to delete <b>{{temp_overtime.name}}</b>?</span>
              </div>
              <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteOvertimeDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteOvertime" />
              </template>
            </Dialog>
          </div>
        </TabPanel>

        <TabPanel header="Deductions">
          <!-- add deduction button -->
          <div class="mt-4 flex justify-end">
            <Button label="+ Add Deduction" class="p-button-rounded" @click="openDeduction" />
          </div>

          <!-- Deductions table -->
          <div>
            <div class="m-8">
            <DataTable ref="dt" :value="deductions" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">             

              <Column field="name" header="Name" style="min-width:12rem"></Column>

              <Column field="u_amount" header="Default / Unit Amount" style="min-width:8rem"></Column>

              <Column header="Action" :exportable="false" style="min-width:8rem">
                <template #body="slotProps">
                  <div class="flex">
                    <div class=""><Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editDeduction(slotProps.data)" /></div>
                    <div class="ml-2"><Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteDeduction(slotProps.data)" /></div>
                  </div>
                </template>
              </Column>
            </DataTable>
          </div>

          <Dialog v-model:visible="deductionDialog" :style="{width: '450px'}" header="Deductions" :modal="true" class="p-fluid">
              <div class="field">
                <p class="py-2 mt-2">Name</p>
                <InputText id="name" v-model.trim="temp_deduction.name" required="true" autofocus :class="{'p-invalid': submitted && !temp_deduction.name}" />
                <small class="p-error" v-if="submitted && !temp_deduction.name">Name is required.</small>
              </div>

              <div class="field">
                <div class="grid p-fluid">
                  <p class="py-2 mt-2">Unit Ammount</p>
                  <div class="col-12 md:col-4">
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">$</span>
                    <InputText placeholder="Price" v-model.trim="temp_deduction.u_amount" />
                      <span class="p-inputgroup-addon">.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialogDed"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveDeduction" />
              </template>
            </Dialog>

            <Dialog v-model:visible="deleteDeductionDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
              <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="temp_payroll">Are you sure you want to delete <b>{{temp_deduction.name}}</b>?</span>
              </div>
              <template #footer>
                <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteDeductionDialog = false"/>
                <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteDeduction" />
              </template>
            </Dialog>
          </div>
        </TabPanel>
      </TabView>
    </div>

  </div>
</template>

<script>
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    Button,
    TabView,
    TabPanel,
    Dialog,
    InputText,
    Dropdown,
    DataTable,
    Column
  },

  computed: {
    additions() {
      return this.$store.getters.additions;
    },
    overtimes() {
      return this.$store.getters.overtimes;
    },
    deductions() {
      return this.$store.getters.deductions;
    }
  },

  data() {
    return {
      displayAddition: false,
      displayOvertime: false,
      displayDeductions: false,

      categories: [
        'Monthly remuncration',
        'Additional remuncration'
      ],

      rates: [
        'Daily rate',
        'Hourly rate'
      ],

      submitted: false,

      additionDialog: false,
      deleteAdditionDialog: false,
      addition: {},
      temp_addition: {},

      overtimeDialog: false,
      deleteOvertimeDialog: false,
      overtime: {},
      temp_overtime: {},

      deductionDialog: false,
      deleteDeductionDialog: false,
      deduction: {},
      temp_deduction: {},
    }
  },
  methods: {
    // For Additions tab
    openAddition() {
      this.temp_addition = {};
      this.submitted = false;
      this.additionDialog = true;
    },
    editAddition(addition) {
      this.temp_addition = addition;
      this.additionDialog = true;
      this.submitted = true;
    },
    saveAddition(addition) {
      this.temp_addition = addition;
      this.$store.dispatch("editAdd", this.temp_addition);
      this.hideDialog();
    },
    hideDialog() {
      this.additionDialog = false;
      this.submitted = false;
    },
    confirmDeleteAddition(addition) {
      this.temp_addition = addition;
      this.deleteAdditionDialog = true;
    },
    deleteAddition() {
      this.$store.dispatch("deleteAdd", this.temp_addition);
      this.deleteAdditionDialog = false;
      this.addition = {};
    },

    // For Overtime tab
    openOvertime() {
      this.temp_overtime = {};
      this.submitted = false;
      this.overtimeDialog = true;
    },
    editOvertime(overtime) {
      this.temp_overtime = overtime;
      this.overtimeDialog = true;
      this.submitted = true;
    },
    saveOvertime(overtime) {
      this.temp_overtime = overtime;
      this.$store.dispatch("editOver", this.temp_overtime);
      this.hideDialogOver();
    },
    hideDialogOver() {
      this.overtimeDialog = false;
      this.submitted = false;
    },
    confirmDeleteOvertime(overtime) {
      this.temp_overtime = overtime;
      this.deleteOvertimeDialog = true;
    },
    deleteOvertime() {
      this.$store.dispatch("deleteOver", this.temp_overtime);
      this.deleteOvertimeDialog = false;
      this.overtime = {};
    },

    // For Deductions tab
    openDeduction() {
      this.temp_deduction = {};
      this.submitted = false;
      this.deductionDialog = true;
    },
    editDeduction(deduction) {
      this.temp_deduction = deduction;
      this.deductionDialog = true;
      this.submitted = true;
    },
    saveDeduction(deduction) {
      this.temp_deduction = deduction;
      this.$store.dispatch("editDed", this.temp_deduction);
      this.hideDialogDed();
    },
    hideDialogDed() {
      this.deductionDialog = false;
      this.submitted = false;
    },
    confirmDeleteDeduction(deduction) {
      this.temp_deduction = deduction;
      this.deleteDeductionDialog = true;
    },
    deleteDeduction() {
      this.$store.dispatch("deleteDed", this.temp_deduction);
      this.deleteDeductionDialog = false;
      this.deduction = {};
    }
  }
}
</script>

<style>

</style>