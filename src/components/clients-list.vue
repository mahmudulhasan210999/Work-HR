<template>
  <div>
    <!-- Top design -->
    <div class="flex justify-between m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Clients</h2>
        <p class="">Dashboard / Clients</p>
      </div>
      
      <!-- grid & list view + add client button -->
      <div class="">
        <div class="pt-2 flex">
          <!-- grid and list view -->
          <div>
            <router-link class="" to="/" ><i class="pi pi-th-large p-2 text-sm px-3 bg-slate-300 rounded-lg m-1"></i></router-link>
            <router-link class="" to="/clients-list" ><i class="pi pi-list p-2 text-sm px-3 bg-slate-300 rounded-lg m-1"></i></router-link>
          </div>
          <!-- add client button -->
          <div>
            <Button label="+ Add Client" class="p-button-rounded" @click="openBasic" />
            <Dialog header="Add Client" v-model:visible="displayBasic" :style="{width: '42vw'}">
              <div class="grid grid-cols-2" @submit.prevent="addClient">
                <!-- for leftt portion -->
                <div class="mr-3">
                  <div class="">
                    <p class="py-1 mt-1">First Name</p>
                    <InputText type="text" class="w-full" v-model="firstname" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Username</p>
                    <InputText type="text" class="w-full" v-model="uname" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Password</p>
                    <InputText type="text" class="w-full" v-model="password" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Client ID</p>
                    <InputText type="text" class="w-full" v-model="id" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Company Name</p>
                    <InputText type="text" class="w-full" v-model="c_name" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                </div>

                <!-- for right portion -->
                <div class="ml-3">
                  <div>
                    <p class="py-1 mt-1">Last Name</p>
                    <InputText type="text" class="w-full" v-model="lastname" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Email</p>
                    <InputText type="text" class="w-full" v-model="email" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Confirm Password</p>
                    <InputText type="text" class="w-full" v-model="password2" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                  <div>
                    <p class="py-1 mt-1">Phone</p>
                    <InputText type="text" class="w-full" v-model="phone" />
                    <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center mt-6">
                <Button label="Submit" class="p-button-success w-1/4 object-center" />
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </div>

    <!-- Search boxes -->
    <div class="grid grid-cols-4 m-8">
      <div class="pr-4">
        <h5>Client ID</h5>
        <InputText class="w-full" type="text" v-model="n_value1" />
        <span :style="{marginLeft: '.5em'}">{{n_value1}}</span>
      </div>
      <div class="px-4">
        <h5>Client Name</h5>
        <InputText class="w-full" type="text" v-model="n_value1" />
        <span :style="{marginLeft: '.5em'}">{{n_value1}}</span>
      </div>
      <div class="px-4">
        <h5>Company</h5>
        <Dropdown class="w-full" v-model="selectCompany" :options="companys" optionLabel="name" placeholder="Select a Company" />
      </div>
      <div class="mt-6 pl-4">
        <Button label="SEARCH" class="p-button-success w-full" />
      </div>
    </div>

    <!-- Employees Table -->
    <div class="m-8">
      <DataTable ref="dt" :value="clients" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">

        <Column field="name" header="Name" :sortable="true" style="min-width:12rem"></Column>

        <Column field="c_id" header="Client ID" :sortable="true" style="min-width:8rem"></Column>

        <Column field="work" header="Working Place" :sortable="true" style="min-width:16rem">
            <!-- <template #body="slotProps">
                {{formatCurrency(slotProps.data.price)}}
            </template> -->
        </Column>

        <Column field="email" header="Email" :sortable="true" style="min-width:10rem"></Column>

        <Column field="phone" header="Mobile" :sortable="true" style="min-width:12rem">
            <!-- <template #body="slotProps">
                <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
            </template> -->
        </Column>

        <Column field="address" header="Address" :sortable="true" style="min-width:12rem"></Column>

        <Column header="Action" :exportable="false" style="min-width:8rem">
          <template #body="slotProps">
            <div class="flex">
              <div class=""><Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editEmployee(slotProps.data)" /></div>
              <div class="ml-2"><Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteEmployee(slotProps.data)" /></div>
            </div>
          </template>
        </Column>
      </DataTable>
    </div>

    <Dialog v-model:visible="employeeDialog" :style="{width: '450px'}" header="Employee Details" :modal="true" class="p-fluid">
      <div class="field">
        <label for="name">Name</label>
        <InputText id="name" v-model.trim="employee.name" required="true" autofocus :class="{'p-invalid': submitted && !employee.name}" />
        <small class="p-error" v-if="submitted && !employee.name">Name is required.</small>
      </div>

      <div class="field">
        <label for="c_id">Client ID</label>
        <InputText id="name" v-model.trim="employee.c_id" required="true" autofocus :class="{'p-invalid': submitted && !employee.c_id}" />
        <small class="p-error" v-if="submitted && !employee.c_id">ID is required.</small>
      </div>

      <div class="field">
        <label for="work" class="mb-3">Working Place</label>
        <Dropdown id="id" v-model="employee.work" :options="company" placeholder="Select a Company">
          <template #value="slotProps">
            <div v-if="slotProps.value && slotProps.value.value">
              <span :class="'product-badge status-' +slotProps.value.value">{{slotProps.value.label}}</span>
            </div>
            <div v-else-if="slotProps.value && !slotProps.value.value">
              <span :class="'product-badge status-' +slotProps.value.toLowerCase()">{{slotProps.value}}</span>
            </div>
            <span v-else>
              {{slotProps.placeholder}}
            </span>
          </template>
        </Dropdown>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <InputText id="email" v-model.trim="employee.email" required="true" autofocus :class="{'p-invalid': submitted && !employee.email}" />
        <small class="p-error" v-if="submitted && !employee.email">Email is required.</small>
      </div>

      <div class="field">
        <label for="phone">Phone Number</label>
        <InputText id="email" v-model.trim="employee.phone" required="true" autofocus :class="{'p-invalid': submitted && !employee.phone}" />
        <small class="p-error" v-if="submitted && !employee.phone">Phone number is required.</small>
      </div>

      <div class="field">
        <label for="address">Address</label>
        <InputText id="address" v-model.trim="employee.address" required="true" autofocus :class="{'p-invalid': submitted && !employee.address}" />
        <small class="p-error" v-if="submitted && !employee.address">Mobile is required.</small>
      </div>

      <template #footer>
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
        <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveEmployee" />
      </template>
    </Dialog>

    <Dialog v-model:visible="deleteEmployeeDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="employee">Are you sure you want to delete <b>{{employee.name}}</b>?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteEmployeeDialog = false"/>
        <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteEmployee" />
      </template>
    </Dialog>

  </div>
</template>

<script>
import {useRoute} from 'vue-router';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


export default {
  components: {
    Button,
    InputText,
    Dropdown,
    Dialog,
    DataTable,
    Column,
  },
  mounted() {
    const route = useRoute();
    console.warn("route", route.params.name);
  },
  computed: {
    employees() {
      return this.$store.getters.employees;
    },

    clients() {
      return this.$store.getters.clients;
    }
  },
  data() {
    return {
      displayBasic: false,
      
      employeeDialog: false,
      deleteEmployeeDialog: false,
      employee: {},
      submitted: false,
      statuses: [],

      selectCompany: null,
      companys: [
        {name: 'Catch'},
        {name: 'AIUB'},
        {name: 'Coke'}
      ],

      company: [
        "Catch",
        "Bangladesh"
      ]
    }
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
    
    hideDialog() {
      this.employeeDialog = false;
      this.submitted = false;
    },
    saveProduct() {
      this.submitted = true;
    },
    
    editEmployee(employee) {
      this.employee = employee;
      this.employeeDialog = true;
      this.submitted = true;
    },
    confirmDeleteEmployee(employee) {
      this.employee = employee;
      this.deleteEmployeeDialog = true;
    },
    deleteEmployee() {
      this.$store.dispatch("deleteEmp", this.employee);
      this.deleteEmployeeDialog = false;
      this.employee = {};
    },
    saveEmployee() {
      this.$store.dispatch("saveEmp", this.employee);
      this.employeeDialog = false;
      this.submitted = false;
    }
  }
}
</script>

<style scoped>

</style>