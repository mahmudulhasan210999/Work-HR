<template>
  <div>
    <!-- Top design -->
    <div class="flex justify-between m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Employee Salary</h2>
        <p class="">Dashboard / Salary</p>
      </div>
      
      <!-- add salary button -->
      <div>
        <Button label="+ Add Salary" class="p-button-rounded" @click="openAddsalary" />
        <Dialog header="Add Client" v-model:visible="displayAddsalary" :style="{width: '42vw'}">
          <div class="grid grid-cols-2" >
            <div class="mr-3">
              <p class="py-1 mt-1">Select Staff</p>
              <Dropdown v-model="selectedStaff" class="w-full" :options="staffs" placeholder="Select a Staff" />
            </div>

            <div class="ml-3">
              <p class="py-1 mt-1">Net Salary</p>
              <InputText type="text" class="w-full" v-model="firstname" />
              <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
            </div>

            <!-- for earnings left portion -->
            <div class="mr-3 mt-3">
              <p class="font-bold text-green-500">Earnings</p>
              <div>
                <p class="py-1 mt-1">Basic</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">DA (40%)</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">HRA (15%)</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Conveyance</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Allowance</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Medical Allowance</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Others</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
            </div>

            <!-- for deductions right portion -->
            <div class="ml-3 pt-3">
              <p class="font-bold text-green-500">Deductions</p>
              <div>
                <p class="py-1 mt-1">TDS</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">ESI</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">PF</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Leave</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div class="">
                <p class="py-1 mt-1">Prof. Tax</p>
                <InputText type="text" class="w-full" v-model="firstname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Labour Welfare</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
              <div>
                <p class="py-1 mt-1">Others</p>
                <InputText type="text" class="w-full" v-model="lastname" />
                <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
              </div>
            </div> 
          </div>
          <div class="flex justify-center mt-6">
            <Button label="Submit" class="p-button-success w-1/4" />
          </div>
        </Dialog>
      </div>
    </div>

    <!-- Search boxes -->
    <div class="grid grid-cols-6 m-8">
      <div class="pr-4">
        <h5>Employee Name</h5>
        <InputText class="w-full" type="text" v-model="n_value1" />
        <span :style="{marginLeft: '.5em'}">{{n_value1}}</span>
      </div>
      <div class="px-4">
        <h5>Role</h5>
        <Dropdown class="w-full" v-model="selectRole" :options="roles" placeholder="-- Select --" />
      </div>
      <div class="px-4">
        <h5>Leave Status</h5>
        <Dropdown class="w-full" v-model="selectStatus" :options="statuses" placeholder="-- Select --" />
      </div>
      <div class="px-4">
        <h5>From</h5>
        <div class="p-fluid grid formgrid field col-12 md:col-4">
          <Calendar id="icon" v-model="date1" :showIcon="true" />
        </div>
      </div>
      <div class="px-4">
        <h5>To</h5>
        <div class="p-fluid grid formgrid field col-12 md:col-4">
          <Calendar id="icon" v-model="date2" :showIcon="true" />
        </div>
      </div>
      <div class="mt-6 pl-4">
        <Button label="SEARCH" class="p-button-success w-full" />
      </div>
    </div>

    <!-- Employees Table -->
    <div>
      <div class="m-8">
      <DataTable ref="dt" :value="employees" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">

        <Column :exportable="false" header="Name" :sortable="true" style="min-width:12rem">
          <template #body="{data}">
            <div class="flex">
              <img class="rounded-full h-12 w-12" :src="data.img" alt="">
              <div class="ml-4">
                <p>{{ data.name }}</p>
                <p>{{ data.work }}</p>
              </div>
            </div>
          </template>
        </Column>

        <Column field="e_id" header="Employee ID" :sortable="true" style="min-width:8rem"></Column>

        <Column field="email" header="Email" :sortable="true" style="min-width:10rem"></Column>

        <Column field="j_date" header="Join Date" :sortable="true" style="min-width:8rem"></Column>

        <Column field="role" header="Role" :sortable="true" style="min-width:8rem"></Column>

        <Column field="salary" header="Salary" :sortable="true" style="min-width:8rem"></Column>

        <Column :exportable="false" header="Payslip" style="min-width:8rem">
          <template #body="{data}">
            <router-link :to="{ name: 'payslip', params: { id: data.e_id }}">
            <Button label="Generate Slip" class="p-button-warning" />
            </router-link>
          </template>
        </Column>

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
        <label for="e_id">Employee ID</label>
        <InputText id="name" v-model.trim="employee.e_id" required="true" autofocus :class="{'p-invalid': submitted && !employee.e_id}" />
        <small class="p-error" v-if="submitted && !employee.e_id">ID is required.</small>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <InputText id="email" v-model.trim="employee.email" required="true" autofocus :class="{'p-invalid': submitted && !employee.email}" />
        <small class="p-error" v-if="submitted && !employee.email">Email is required.</small>
      </div>

      <div class="field">
        <label for="j_date">Join Date</label>
        <InputText id="j_date" v-model.trim="employee.j_date" required="true" autofocus :class="{'p-invalid': submitted && !employee.email}" />
        <small class="p-error" v-if="submitted && !employee.email">Email is required.</small>
      </div>

      <div class="field">
        <label for="work" class="mb-3">Role</label>
        <Dropdown v-model="employee.work" class="w-full" :options="roles" placeholder="Select a Role" />
      </div>

      <div class="field">
        <label for="salary">Salary</label>
        <InputText id="email" v-model.trim="employee.salary" required="true" autofocus :class="{'p-invalid': submitted && !employee.salary}" />
        <small class="p-error" v-if="submitted && !employee.salary">Salary number is required.</small>
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
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    Button,
    InputText,
    Dropdown,
    Calendar,
    Dialog,
    DataTable,
    Column
  },
  mounted() {

  },
  computed: {
    employees() {
      return this.$store.getters.employees;
    }
  },
  data() {
    return {
      selectedStaff: null,
      staffs: [
        'One dot',
        'Two dot',
        'Three dot'
      ],
      
      displayAddsalary: false,

      selectRole: null,
      roles: [
        'Employee',
        'Manager'
      ],
      selectStatus: null,
      statuses: [
        'Pending',
        'Approved',
        'Rejected'
      ],

      date1: null,
      date2: null,

      employeeDialog: false,
      deleteEmployeeDialog: false,
      submitted: false,
      employee: {},
    }
  },
  methods: {
    openAddsalary() {
      this.displayAddsalary = true;
    },
    closeAddsalary() {
      this.displayAddsalary = false;
    },

    // Edit employee
    editEmployee(employee) {
      this.employee = employee;
      this.employeeDialog = true;
      this.submitted = true;
    },
    saveEmployee(employee) {
      this.employee = employee;
      this.$store.dispatch("editEmp", this.employee);
      this.hideDialog();
    },
    hideDialog() {
      this.employeeDialog = false;
      this.submitted = false;
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
  }
}
</script>

<style>

</style>