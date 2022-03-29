<template>
  <div> 
    <div class="flex m-8 mt-10">
      <div class="">
        <h2 class="text-3xl">Profile</h2>
        <p class="">Dashboard / Profile</p>
      </div>
    </div>

    <div v-if="client">
      <div class="grid grid-cols-2 gap-0 p-8">
        <div class="flex border-r-4">
          <div class="h-48 w-48 p-6">
            <img class="rounded-full h-32 w-32" :src="client.img" alt="">
          </div>
          <div class="pl-10 m-4 w-96">
            <p class="text-3xl">{{ client.work }}</p>
            <p class="text-xl">{{ client.name }}</p>
            <p>{{ client.post }}</p>
            <p class="text-sm">Client ID: {{ client.c_id }}</p>
            <div class="pt-4">
              <Button label="Send Message" class="p-button-success w-1/2" />
            </div>
          </div>
        </div>
        <div class="ml-10">
          <div class="p-2 m-4">
            <div class="flex p-1">
              <p class="w-28">Phone: </p>
              <p>{{ client.phone }}</p>
            </div>
            <div class="flex p-1">
              <p class="w-28">Email: </p>
              <p>{{ client.email }}</p>
            </div>
            <div class="flex p-1">
              <p class="w-28">Birthday: </p>
              <p>{{ client.birthday }}</p>
            </div>
            <div class="flex p-1">
              <p class="w-28">Address: </p>
              <p>{{ client.address }}</p>
            </div>
            <div class="flex p-1">
              <p class="w-28">Gender: </p>
              <p>{{ client.gender }}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="m-8">
          <TabView ref="tabview1">
            <TabPanel header="Projects">
              <div class=" ">
                <div class="grid grid-cols-4">
                  <div class="flex flex-col border-2 m-2" v-for="(project, index) in client.projects" :key="index">
                    <div class="m-4">
                      <p class="text-2xl my-2">{{ project.title }}</p>
                      <p class="text-sm my-2">{{ project.open_task }} open tasks, {{ project.com_task }} tasks completed</p>
                      <p>{{ project.text }}</p>
                      <p class="text-xl my-2">Deadline:</p><p>{{ project.deadline }}</p>
                      <p class="text-xl my-2">Project Leader:</p>
                      <img class="rounded-full h-8 w-8" :src="project.img" alt="">
                      <p class="text-xl my-2">Team:</p>
                        <div class="flex">
                          <img class="rounded-full h-8 w-8" :src="project.img" alt="">
                          <img class="rounded-full h-8 w-8" :src="project.img" alt="">
                          <img class="rounded-full h-8 w-8" :src="project.img" alt="">
                        </div>
                      <p class="text-xl my-2">Progress:</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="Tasks">
              <TabView ref="tabview2">
                <TabPanel header="All Tasks">
                  <div class="field-checkbox">
                    <Checkbox id="city1" name="city" value="Chicago" v-model="cities" />
                    <label for="city1">Patient appoitment booking</label>
                  </div>
                  <div class="field-checkbox">
                    <Checkbox id="city2" name="city" value="Los Angeles" v-model="cities" />
                    <label for="city2">Payment getway</label>
                  </div>
                  <div class="field-checkbox">
                    <Checkbox id="city3" name="city" value="New York" v-model="cities" />
                    <label for="city3">Patient and Doctor</label>
                  </div>
                  <div class="field-checkbox">
                    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4">Private chat module</label>
                  </div>
                  <div class="field-checkbox">
                    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4">Public chat module</label>
                  </div>
                  <div class="field-checkbox">
                    <Checkbox id="city4" name="city" value="San Francisco" v-model="cities" />
                    <label for="city4">Profile add</label>
                  </div>
                </TabPanel>
                <TabPanel header="Pending Tasks">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper ui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                </TabPanel>
                <TabPanel header="Completed Tasks">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper ui ratione voluptatem sequi nesciunt.  ia non numquam eius modi.</p>
                </TabPanel>
              </TabView>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import Button from 'primevue/button';

import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Checkbox from 'primevue/checkbox';

export default {
  components: {
    Button,
    TabView,
    TabPanel,
    Checkbox
  },

  computed: {
    client() {
      return this.$store.getters.client(this.$route.params.id);
    },
    clients() {
      return this.$store.state.clients;
    }
  },

  data() {
    return {
      checked: false,
      cities: [],
    }
  },

  methods: {
    
  }
}
</script>

<style>

</style>