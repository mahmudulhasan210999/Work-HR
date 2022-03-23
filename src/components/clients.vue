<template>
  <div>
    <!-- top design -->
    <div class="flex justify-between m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Clients</h2>
        <p class="">Dashboard / Clients</p>
      </div>
      
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
            <Dialog header="Add Client" v-model:visible="displayBasic" :style="{width: '50vw'}">
              <div class="grid grid-cols-2">
                <div class="">
                  <p>First Name</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Last Name</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Username</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Email</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Password</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Confirm Password</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Client ID</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Phone</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
                <div>
                  <p>Company Name</p>
                  <InputText type="text" class="w-5/6" v-model="value1" />
                  <span :style="{marginLeft: '.5em'}">{{text_value1}}</span>
                </div>
              </div>
              <div class="mt-6">
                <Button label="Submit" class="p-button-success w-1/4" />
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

    <!-- Employee loop -->
    <div class="m-6">
      <div class="grid grid-cols-4">
        <div class="flex flex-col items-center m-2 border-2" v-for="employee in employees" :key="employee">
          
          <div class="flex ml-80 mt-3">
            <div class=""><Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" @click="editEmployee(slotProps.data)" /></div>
            <div class="ml-2"><Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteEmployee(slotProps.data)" /></div>
          </div>
          
          <router-link :to="{ name: 'profile', params: { id: employee.e_id }}" class="w-20 h-20">
          <img class="rounded-full" :src="employee.img" alt=""></router-link>

          <div class="m-4">
            <p class="text-xl">{{ employee.work }}</p>
            <p class="text-xl">{{ employee.name }}</p>
            <p class="text-xm">{{ employee.post }}</p>
          </div>

          <div class="flex mb-4"> 
            <div class="mr-2"><Button label="Message" class="p-button-outlined p-button-secondary w-25 h-8"/></div>
            <div class="ml-2">
              <router-link :to="{ name: 'profile', params: { id: employee.e_id }}">
                <Button label="View Profile" class="p-button-outlined p-button-secondary w-25 h-8"/>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    Button,
    Dialog,
    InputText,
    Dropdown
  },
  mounted() {
    const route = useRoute();
    console.warn("route", route.params.name);
  },
  computed: {
    employees() {
      return this.$store.getters.employees;
    }
  },
  data() {
    return {
      text_value1: null,
      n_value1: null,
      displayBasic: false,
      displayBtn: false,
      selectCompany: null,
      companys: [
        {name: 'Catch'},
        {name: 'AIUB'},
        {name: 'Coke'}
      ],
    }
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },

    openBtn() {
      this.displayBtn = true;
    },
    closeBtn() {
      this.displayBtn = false;
    },
  }
}
</script>

<style>

</style>