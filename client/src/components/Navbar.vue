<template>
<div>
  <v-toolbar fixed>
    <v-toolbar-title >Kanban</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn data-toggle="modal" data-target="#inputModal">Add Task</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <ModalAddTask/>
</div>
</template>

<script>
import ModalAddTask from '@/components/ModalAddTask.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    ModalAddTask
  }
}
</script>

<style>

</style>
