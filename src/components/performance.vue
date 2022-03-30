<template>
  <div class="w-full">
    <!-- top design -->
    <div class="m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Performance</h2>
        <p class="">Dashboard / Performance</p>
      </div>
    </div>

    <!-- 1st, Employee Basic Information -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Employee Basic Information</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="w-1/3 pr-4">
          <div class="border divide-y">
            <div class="p-2">
              <p class="p-1">Name</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">Department</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">Designatiom</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">Qualification</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
        <div class="w-1/3 px-2">
          <div class="border divide-y">
            <div class="p-2">
              <p class="p-1">Emp ID</p>
              <Dropdown class="w-full" v-model="selectEmpId" :options="EmpId" placeholder="Select Employee ID" />
            </div>
            <div class="p-2">
              <p class="p-1">Date of Join</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">Date of Confirmation</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">Previous years of Exp</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
        <div class="w-1/3 pl-4">
          <div class="border divide-y">
            <div class="p-2">
              <p class="p-1">RO's Name</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
            <div class="p-2">
              <p class="p-1">RO Designatiom:</p>
              <InputText type="text" class="w-full" v-model="name" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2nd, Professional Excellence -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Professional Excellence</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-5/12">
          <div class="w-2/12">
            <div class="border divide-y w-28">
              <div class="p-2">
                <p class="h-12 pt-2 text-center">#</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">1</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">2</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">3</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">4</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">5</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Key Result Area</p>
              </div>
              <div class="p-2">
                <p class="h-10">Production</p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
              <div class="p-2">
                <p class="h-10">Process Improvement</p>
              </div>
              <div class="p-2">
                <p class="h-10">Team Management</p>
              </div>
              <div class="p-2">
                <p class="h-10">Knowledge Sharing</p>
              </div>
              <div class="p-2">
                <p class="h-10">Reporting and Communication</p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
            </div>
          </div>
          <div class="w-6/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Key Performance Indicators</p>
              </div>
              <div class="p-2">
                <p class="h-10">Quality</p>
              </div>
              <div class="p-2">
                <p class="h-10">TAT (turn around time)</p>
              </div>
              <div class="p-2">
                <p class="h-10">PMS, New Ideas</p>
              </div>
              <div class="p-2">
                <p class="h-10">Team Productivity,dynaics,attendance,attrition</p>
              </div>
              <div class="p-2">
                <p class="h-10">Sharing the knowledge for team productivity</p>
              </div>
              <div class="p-2">
                <p class="h-10">Emails/Calls/Reports and Other Communication</p>
              </div>
              <div class="p-2">
                <p class="h-10">Total</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-7/12">
          <div class="w-1/5">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Weightage</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="30" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="30" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="10" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="5" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="5" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="5" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="85" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Percentage achieved</p>
                <p>( self Score )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Points Scored</p>
                <p>( self )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Percentage achieved</p>
                <p>( RO's Score )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Points Scored</p>
                <p>( RO )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd, Professional Excellence -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Professional Excellence</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-5/12">
          <div class="w-2/12">
            <div class="border divide-y w-28">
              <div class="p-2">
                <p class="h-12 pt-2 text-center">#</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">1</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">2</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">3</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">4</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center">5</p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
              <div class="p-2">
                <p class="h-10 pt-2 text-center"></p>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Personal Attributes</p>
              </div>
              <div class="p-2">
                <p class="h-10">Attendance</p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
              <div class="p-2">
                <p class="h-10">Attitude and Behavior</p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
              <div class="p-2">
                <p class="h-10">Policy and Procedures</p>
              </div>
              <div class="p-2">
                <p class="h-10">Initiatives</p>
              </div>
              <div class="p-2">
                <p class="h-10">Continuous Skill Improvement</p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
              <div class="p-2">
                <p class="h-10"></p>
              </div>
            </div>
          </div>
          <div class="w-6/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Key Indicators</p>
              </div>
              <div class="p-2">
                <p class="h-10">Planned or Unplanned Leaves</p>
              </div>
              <div class="p-2">
                <p class="h-10">Time Consciousness</p>
              </div>
              <div class="p-2">
                <p class="h-10">Team Collaboration</p>
              </div>
              <div class="p-2">
                <p class="h-10">Professionalism and Responsiveness</p>
              </div>
              <div class="p-2">
                <p class="h-10">Adherence to policies and procedures</p>
              </div>
              <div class="p-2">
                <p class="h-10">Special Efforts, Suggestions,Ideas,etc.</p>
              </div>
              <div class="p-2">
                <p class="h-10">Preparedness to move to next level and Training utilization</p>
              </div>
              <div class="p-2">
                <p class="h-10 text-center">Total</p>
              </div>
              <div class="p-2">
                <p class="h-10 text-center">Total Percentage (%)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-7/12">
          <div class="w-1/5">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Weightage</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="2" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="3" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="15" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Percentage achieved</p>
                <p>( self Score )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="--" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Points Scored</p>
                <p>( self )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="--" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Percentage achieved</p>
                <p>( RO's Score )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="--" disabled />
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="border divide-y w-full">
              <div class="p-2">
                <p>Points Scored</p>
                <p>( RO )</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="0" disabled />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" placeholder="--" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grade dection -->
      <div class="text-center">
        <p class="text-xl m-2">Grade</p>
        <div class="flex">
          <p class="text-red-700 border-solid border-2 border-red-300 bg-red-200 p-1 m-1 w-full">Below 65 Poor</p>
          <p class="text-amber-700 border-solid border-2 border-amber-300 bg-amber-200 p-1 m-1 w-full">65-74 Average</p>
          <p class="text-cyan-700 border-solid border-2 border-cyan-300 bg-cyan-200 p-1 m-1 w-full">75-84 Satisfactory</p>
          <p class="text-blue-700 border-solid border-2 border-blue-300 bg-blue-200 p-1 m-1 w-full">85-92 Good</p>
          <p class="text-green-700 border-solid border-2 border-green-300 bg-green-200 p-1 m-1 w-full">Above 92 Excellent</p>
        </div>
      </div>
    </div>

    <!-- 4th, Special Initiatives, Achievements, contributions if any -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Special Initiatives, Achievements, Contributions if any</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
            </div>
          </div>
        </div>
        <div class="flex w-11/12">
          <div class="w-1/3 pr-4">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">By Self</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
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
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
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
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>Area's for Improvement</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7th, Appraisee's Strengths and Areas for Improvement perceived by the Reporting officer -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Appraisee's Strengths and Areas for Improvement perceived by the Reporting officer</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>Area's for Improvement</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 8th, Appraisee's Strengths and Areas for Improvement perceived by the Head of the Department -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Appraisee's Strengths and Areas for Improvement perceived by the Head of the Department</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>Area's for Improvement</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 9th, Personal Goals -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Personal Goals</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/2 pl-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>Area's for Improvement</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 10th, Personal Updates -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">Personal Updates</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-12 pt-2 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
          </div>
        </div>

        <div class="flex w-6/12">
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Last Year</p>
              </div>
              <div class="p-2">
                <p class="h-10">Married/Engaged?</p>
              </div>
              <div class="p-2">
                <p class="h-10">Higher Studies/Certifications?</p>
              </div>
              <div class="p-2">
                <p class="h-10">Health Issues?</p>
              </div>
              <div class="p-2">
                <p class="h-10">Others</p>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Yes/No</p>
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_1" :options="p_yesno1" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_2" :options="p_yesno2" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_3" :options="p_yesno3" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_4" :options="p_yesno4" placeholder="Select" />
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Details</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-5/12">
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Current Year</p>
              </div>
              <div class="p-2">
                <p class="h-10">Marriage Plans</p>
              </div>
              <div class="p-2">
                <p class="h-10">Plans For Higher Study</p>
              </div>
              <div class="p-2">
                <p class="h-10">Certification Plans</p>
              </div>
              <div class="p-2">
                <p class="h-10">Others</p>
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Yes/No</p>
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_5" :options="p_yesno5" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_6" :options="p_yesno6" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_7" :options="p_yesno7" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="p_YesNo_8" :options="p_yesno8" placeholder="Select" />
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-12">Details</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 11th, Professional Goals Achieved for last year -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Professional Goals Achieved for last year</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 12th, Professional Goals for the forthcoming year -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Professional Goals for the forthcoming year</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 13th, Training Requirements -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Training Requirements</p>
        <p class="text-center text-sm">if any to achieve the Performance Standard Targets completely</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
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
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 14th, Any other general comments, observations, suggestions etc. -->
    <div class="m-8 mt-10 border-2 p-4">
      <div>
        <p class="text-center text-2xl">Any other general comments, observations, suggestions etc.</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="flex w-1/12">
          <div class="border divide-y w-32">
            <div class="p-2">
              <p class="h-6 text-center">#</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">1</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">2</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">3</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">4</p>
            </div>
            <div class="p-2">
              <p class="h-10 pt-2 text-center">5</p>
            </div>
          </div>
        </div>
        <div class="flex w-11/12">
          <div class="w-1/3 pr-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>Self</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 px-2">
            <div class="border divide-y">
              <div class="p-2">
                <p>RO</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
          <div class="w-1/3 pl-4">
            <div class="border divide-y">
              <div class="p-2">
                <p>HOD</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full h-10" v-model="name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 15th, For RO's Use Only -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">For RO's Use Only</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="w-1/2">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6"></p>
            </div>
            <div class="p-2">
              <p class="h-10">The Team member has Work related Issues</p>
            </div>
            <div class="p-2">
              <p class="h-10">The Team member has Leave Issues</p>
            </div>
            <div class="p-2">
              <p class="h-10">The team member has Stability Issues</p>
            </div>
            <div class="p-2">
              <p class="h-10">The Team member exhibits non-supportive attitude</p>
            </div>
            <div class="p-2">
              <p class="h-10">Any other points in specific to note about the team member</p>
            </div>
            <div class="p-2">
              <p class="h-10">Overall Comment /Performance of the team member</p>
            </div>
          </div>
        </div>

        <div class="flex w-1/2">
          <div class="w-5/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">Yes/No</p>
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_1" :options="r_yesno1" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_2" :options="r_yesno2" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_3" :options="r_yesno3" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_4" :options="r_yesno4" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_5" :options="r_yesno5" placeholder="Select" />
              </div>
              <div class="p-2">
                <Dropdown class="w-full h-10" v-model="r_YesNo_6" :options="r_yesno6" placeholder="Select" />
              </div>
            </div>
          </div>
          <div class="w-7/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">If Yes - Details</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 16th, For HRD's Use Only -->
    <div class="m-8 mt-10 border-2 p-4">
      <div >
        <p class="text-center text-2xl">For HRD's Use Only</p>
        <p class="text-center text-sm">Lorem ipsum dollar</p>
      </div>

      <div class="flex mt-8">
        <div class="w-7/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6">Overall Parameters</p>
            </div>
            <div class="p-2">
              <p class="h-10">KRAs Target Achievement Points (will be considered from the overall score specified in this document by the Reporting officer)</p>
            </div>
            <div class="p-2">
              <p class="h-10">Professional Skills Scores(RO's Points furnished in the skill & attitude assessment sheet will be considered)</p>
            </div>
            <div class="p-2">
              <p class="h-10">Personal Skills Scores(RO's Points furnished in the skill & attitude assessment sheet will be considered)</p>
            </div>
            <div class="p-2">
              <p class="h-10">Special Achievements Score (HOD to furnish)</p>
            </div>
            <div class="p-2">
              <p class="h-10">Overall Total Score</p>
            </div>
          </div>
        </div>

        <div class="flex w-5/12">
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">Available Points</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">Points Scored</p>
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="number" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
          <div class="w-4/12">
            <div class="border divide-y">
              <div class="p-2">
                <p class="h-6">RO's Comment</p>
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
              <div class="p-2">
                <InputText type="text" class="w-full text-center h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 17th, Without Title -->
    <div class="m-8 mt-10 border-2 p-4">

      <div class="flex">
        <div class="w-3/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6"></p>
            </div>
            <div class="p-2">
              <p class="h-10">Employee</p>
            </div>
            <div class="p-2">
              <p class="h-10">Reporting Officer</p>
            </div>
            <div class="p-2">
              <p class="h-10">HOD</p>
            </div>
            <div class="p-2">
              <p class="h-10">HRD</p>
            </div>
          </div>
        </div>     
        <div class="w-3/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6">Name</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
          </div>
        </div>
        <div class="w-3/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6">Signature</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
          </div>
        </div>
        <div class="w-3/12">
          <div class="border divide-y">
            <div class="p-2">
              <p class="h-6">Date</p>
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
            <div class="p-2">
              <InputText type="text" class="w-full text-center h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    InputText,
    DataTable,
    Column,
    Dropdown,
  },
  data() {
    return {
      selectEmpId: null,
      EmpId: [
        '1', '2', '3', '4'
      ],

      // Personal Updates Table
      p_YesNo_1: null,
      p_yesno1: [
        'Yes',
        'No'
      ],
      p_YesNo_2: null,
      p_yesno2: [
        'Yes',
        'No'
      ],
      p_YesNo_3: null,
      p_yesno3: [
        'Yes',
        'No'
      ],
      p_YesNo_4: null,
      p_yesno4: [
        'Yes',
        'No'
      ],
      p_YesNo_5: null,
      p_yesno5: [
        'Yes',
        'No'
      ],
      p_YesNo_6: null,
      p_yesno6: [
        'Yes',
        'No'
      ],
      p_YesNo_7: null,
      p_yesno7: [
        'Yes',
        'No'
      ],
      p_YesNo_8: null,
      p_yesno8: [
        'Yes',
        'No'
      ],

      // For RO's Use Only Table
      r_YesNo_1: null,
      r_yesno1: [
        'Yes',
        'No'
      ],
      r_YesNo_2: null,
      r_yesno2: [
        'Yes',
        'No'
      ],
      r_YesNo_3: null,
      r_yesno3: [
        'Yes',
        'No'
      ],
      r_YesNo_4: null,
      r_yesno4: [
        'Yes',
        'No'
      ],
      r_YesNo_5: null,
      r_yesno5: [
        'Yes',
        'No'
      ],
      r_YesNo_6: null,
      r_yesno6: [
        'Yes',
        'No'
      ],
    }
  }
}
</script>

<style>

</style>