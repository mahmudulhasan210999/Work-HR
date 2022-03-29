<template>
  <div>
    <!-- top design -->
    <div class="flex justify-between m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Payslip</h2>
        <p class="">Dashboard / Payslip</p>
      </div>
      
      <div class="mt-2">
        <span class="p-buttonset">
          <Button label="CSV" icon="" />
          <Button label="PDF" icon="" />
          <Button label="Print" icon="pi pi-print" />
        </span>
      </div>
    </div>

    <!-- payslip box -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
      <p class="text-center text-xl underline underline-offset-4">PAYSLIP FOR THE MONTH OF MER 2022</p>
      </div>

      <div class="flex justify-between pt-4">
        <div>
          <img class="rounded-full h-32 w-32" :src="employee.img" alt="">
          <div class="pt-4">
            <p>Dreamguy's Technologies</p>
            <p>3864 Quiet Valley Lane</p>
            <p>Sherman Oaks, CA 91403</p>
          </div>
        </div>
        <div>
          <p class="text-2xl">PAYSLIP #45454</p>
          <p>Salary Month: March, 2022</p>
        </div>
      </div>

      <div v-if="employee" class="mt-6">
        <div>
          <p class="font-bold">{{ employee.name }}</p>
          <p>{{ employee.work }}</p>
          <p class="text-sm">Employee ID: {{ employee.e_id }}</p>
          <p>Joining Date: {{ employee.j_date }}</p>
        </div>

        <div class="flex mt-8">
          <div class="w-1/2 pr-4">
            <p class="font-bold pb-2">Earnings</p>

            <div class="border divide-y">
              <div class="flex justify-between p-2">
                <p>Basic Salary</p>
                <p>$ {{ employee.basic_salary }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>House Rent Allowance (H.R.A)</p>
                <p>$ {{ employee.house_rent }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Conveyance</p>
                <p>$ {{ employee.conveyance }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Other Allowance</p>
                <p>$ {{ employee.other_allowance }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Total Earnings</p>
                <p>$ {{ totalEarning }}</p>
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-4">
            <p class="font-bold pb-2">Deductions</p>

            <div class="border divide-y">
              <div class="flex justify-between p-2">
                <p>Tax Deducted at Source (T.D.S.)</p>
                <p>$ {{ employee.tax_deducted }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Provident Fund</p>
                <p>$ {{ employee.provident_fund }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>ESI</p>
                <p>$ {{ employee.esi }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Loan</p>
                <p>$ {{ employee.loan }}</p>
              </div>
              <div class="flex justify-between p-2">
                <p>Total Deductions</p>
                <p>$ {{  }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p>Net Salary: $5464684 (halkshf)</p>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  components: {
    Button
  },
  computed: {
    employee() {
      return this.$store.getters.employee(this.$route.params.id);
    },

    totalEarning() { 
      return this.$store.state.totalEarning;
    },
  },
}
</script>

<style>

</style>