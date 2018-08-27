<template>
  <div
    id="e3"
    style="max-width: 300px; margin: auto;margin-top: 50px; text-align: center;margin-left: auto;margin-right: auto;border: 2px solid black"
    class="grey lighten-3"
  >
    <v-toolbar
      color="green"
      dark
    >
      <v-toolbar-title>Done</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <SubCard :tasks="dataDone"/>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SubCard from '@/components/SubCard.vue'

export default {
  components: {
    SubCard
  },
  props: ['dataDone']
}
</script>

<style>
</style>
