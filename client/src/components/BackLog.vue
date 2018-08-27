<template>
  <div
    id="e3"
    style="max-width: 300px; margin: auto;margin-top: 50px; text-align: center;margin-left: auto;margin-right: auto"
    class="grey lighten-3"
  >
    <v-toolbar
      color="red"
      dark
    >
      <v-toolbar-title>Back Log</v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <SubCard :tasks="dataBackLogs"/>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SubCard from '@/components/SubCard.vue'

export default {
  data() {
    return {
      tasks: []
    }
  },
  props: ['dataBackLogs'],
  components: {
    SubCard
  },
  created() {
    console.log(this.dataBackLog);
  },
}
</script>

<style>
</style>
