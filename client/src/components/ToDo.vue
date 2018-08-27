<template>
  <div
    id="e3"
    style="max-width: 300px; margin: auto;margin-top: 50px; text-align: center;margin-left: auto;margin-right: auto"
    class="grey lighten-3"
  >
    <v-toolbar
      color="orange"
      dark
    >
      <v-toolbar-title>To-Do</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <SubCard :tasks="dataTodo"/>
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
  props: ['dataTodo']
}
</script>

<style>
</style>
