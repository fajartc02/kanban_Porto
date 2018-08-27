<template>
  <div
    id="e3"
    style="max-width: 300px; margin: auto;margin-top: 50px; text-align: center;margin-left: auto;margin-right: auto"
    class="grey lighten-3"
  >
    <v-toolbar
      color="yellow"
      dark
    >
      <v-toolbar-title>Doing</v-toolbar-title>
    </v-toolbar>

    <!-- <v-card> -->
      <v-container
        fluid
        grid-list-lg
      >
        <SubCard :tasks="dataDoing"/>
      </v-container>
    <!-- </v-card> -->
  </div>
</template>

<script>
import SubCard from '@/components/SubCard.vue'

export default {
  components: {
    SubCard
  },
  props: ['dataDoing']
}
</script>

<style>
</style>
