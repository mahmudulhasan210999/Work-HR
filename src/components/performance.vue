<template>
  <div>
    <!-- top design -->
    <div class="m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Performance</h2>
        <p class="">Dashboard / Performance</p>
      </div>
    </div>

    <!-- 1st, Employee Basic Information -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Employee Basic Information</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="w-1/3 pr-4">
          <div class="border divide-y">
            <div class="p-2">
              <p>Name</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Department</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Designatiom</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Qualification</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
        <div class="w-1/3 px-2">
          <div class="border divide-y">
            <div class="p-2">
              <p>Emp ID</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Date of Join</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Date of Confirmation</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>Previous years of Exp</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
        <div class="w-1/3 pl-4">
          <div class="border divide-y">
            <div class="p-2">
              <p>RO's Name</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p>RO Designatiom:</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 1.1, Employee Basic Information -->
    <!-- <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Employee Basic Information</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="card">
         <DataTable :value="products1" editMode="cell" @cell-edit-complete="onCellEditComplete" class="editable-cells-table" responsiveLayout="scroll">

          <Column v-for="col of columns" field="col.field" :header="col.header" :key="col.field" style="width:25%">
            <template #editor="{ data, field }">
              <InputText v-model="data[field]" autofocus />
            </template>
          </Column>
        </DataTable>
      </div>
    </div> -->

    <!-- 2nd, Professional Excellence -->
    <!-- <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Professional Excellence</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-3/8">
          <div class="w-2/10">
            <div class="h-24 border divide-y">
              <div class="p-2">
                <p>#</p>
              </div>
              <div class="p-2">
                <p>1</p>
              </div>
              <div class="p-2">
                <p>2</p>
              </div>
              <div class="p-2">
                <p>3</p>
              </div>
            </div>
          </div>
          <div class="w-4/10">
            <div class="border divide-y">
              <div class="p-2">
                <p>Key Result Area</p>
              </div>
              <div class="p-2">
                <p>Production</p>
              </div>
              <div class="p-2">
                <p></p>
              </div>
              <div class="p-2">
                <p>Process Improvement</p>
              </div>
            </div>
          </div>
          <div class="w-6/10">
            <div class="border divide-y">
              <div class="p-2">
                <p>#sdrgadrg</p>
              </div>
              <div class="p-2">
                <p>1asdgar</p>
              </div>
              <div class="p-2">
                <p>2agfra</p>
              </div>
              <div class="p-2">
                <p>3afga</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-5/8">
          <div class="w-1/5">
            <div class="border divide-y">
              <div class="p-2">
                <p>Weightage</p>
              </div>
              <div class="p-2">
                <p>30</p>
              </div>
              <div class="p-2">
                <p>30</p>
              </div>
              <div class="p-2">
                <p>30</p>
              </div>
            </div>
          </div>
           <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Key Result Area</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
           <div class="w-1/5">
            <div class="border divide-y">
              <div class="p-2">
                <p>Key Result Area</p>
              </div>
              <div class="p-2">
                <p>Production</p>
              </div>
              <div class="p-2">
                <p>Process Improvement</p>
              </div>
              <div class="p-2">
                <p>Team Management</p>
              </div>
            </div>
          </div>
           <div class="w-1/5">
            <div class="border divide-y">
              <div class="p-2">
                <p>Key Result Area</p>
              </div>
              <div class="p-2">
                <p>Production</p>
              </div>
              <div class="p-2">
                <p>Process Improvement</p>
              </div>
              <div class="p-2">
                <p>Team Management</p>
              </div>
            </div>
          </div>
           <div class="w-1/5">
            <div class="w-full border divide-y">
              <div class="p-2">
                <p>Key Result Area</p>
              </div>
              <div class="p-2">
                <p>Production</p>
              </div>
              <div class="p-2">
                <p>Process Improvement</p>
              </div>
              <div class="p-2">
                <p>Team Managementxfhdthdtjdyzdrgvrgsdrgsdhsrtjdyjdyjyujfuyjkgfjcgjyjdyjbdykid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 4th, Special Initiatives, ..... -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Special Initiatives, Achievements, Contributions if any</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div  class="flex w-1/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="pl-3">#</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="1" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="2" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="3" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="4" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="5" disabled />
            </div>
          </div>
        </div>
        <div class="flex w-11/12">
          <div class="w-1/3 pr-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>By Self</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5th, Comments on the role -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Comments on the role</p>
        <p class="text-center text-sm">alterations if any requirred like addition/deletion of responsibilities</p>
      </div>

      <div class="flex mt-8">
        <div  class="flex w-1/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="pl-3">#</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="1" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="2" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="3" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="4" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="5" disabled />
            </div>
          </div>
        </div>
        <div class="flex w-11/12">
          <div class="w-1/3 pr-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>By Self</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 6th, Comments on the role -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Comments on the role</p>
        <p class="text-center text-sm">alterations if any requirred like addition/deletion of responsibilities</p>
      </div>

      <div class="flex mt-8">
        <div  class="flex w-1/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="pl-3">#</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="1" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="2" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="3" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="4" disabled />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-28" placeholder="5" disabled />
            </div>
          </div>
        </div>
        <div class="flex w-11/12">
          <div class="w-1/2 pr-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>Strengths</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/2 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>Area's for Improvement</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- *th, Special Initiatives, ..... -->
    <!-- <div class="m-8 mt-10 border-2 p-4">
      <table class="border divide-y">
        <td class="border divide-y">
          <tr class="h-8"><div class="p-2">
              <p>4</p>
            </div></tr>
          <tr class="h-8"><div class="p-2">
              <p>4</p>
            </div></tr>
          <tr class="h-8"><div class="p-2">
              <p class="p-1">4</p>
            </div></tr>
        </td>
        <td class="border divide-y">
          <tr class="h-8"><div class="p-1">
                <InputText type="text" class="w-full" v-model="name" />
              </div></tr>
          <tr class="h-8"><div class="p-1">
                <InputText type="text" class="w-full" v-model="name" />
              </div></tr>
          <tr class="h-8"><div class="p-1">
                <InputText type="text" class="w-full" v-model="name" />
              </div></tr>
        </td>
        <td>
          <tr><InputText type="text" class="w-full" v-model="name" /></tr>
          <tr><InputText type="text" class="w-full" v-model="name" /></tr>
          <tr><InputText type="text" class="w-full" v-model="name" /></tr>
        </td>
      </table>
    </div> -->
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  components: {
    InputText,
    DataTable,
    Column,
  },
  data() {
    return {
      columns: null,
      products1: null,
      products1: [
        {code: '1', name: '123', quantity: '456'},
        {code: '2', name: '123', quantity: '456'},
        {code: '3', name: '123', quantity: '456'},
      ],
    }
  },
  created() {
    this.columns = [
      {field: 'code', header: 'Code'},
      {field: 'name', header: 'Name'},
      {field: 'quantity', header: 'Quantity'},
      {field: 'price', header: 'Price'}
    ];
  },
  methods: {
    onCellEditComplete(event) {
      let { data, newValue, field } = event;

      switch (field) {
        case 'quantity':
        case 'price':
          if (this.isPositiveInteger(newValue))
            data[field] = newValue;
          else
            event.preventDefault();
        break;

        default:
          if (newValue.trim().length > 0)
            data[field] = newValue;
          else
            event.preventDefault();
        break;
      }
    }
  },
  
}
</script>

<style>

</style>