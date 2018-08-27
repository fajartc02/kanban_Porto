<template>
  <div class="home">
    <Navbar/>
    <v-layout row wrap>
      <v-flex xs3>
        <BackLog :dataBackLogs="tasks.Backlog"/>
      </v-flex>
      <v-flex xs3>
        <ToDo :dataTodo="tasks.Todo"/>
      </v-flex>
      <v-flex xs3>
        <Doing :dataDoing="tasks.Doing"/>
      </v-flex>
      <v-flex xs3>
        <Done :dataDone="tasks.Done"/>
      </v-flex>
    </v-layout>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import BackLog from '@/components/BackLog.vue'
import ToDo from '@/components/ToDo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'
import ModalAddTask from '@/components/ModalAddTask.vue'
import { mapActions, mapState } from 'vuex'
import db from '../firebase.js'

export default {
  name: 'home',
  data() {
    return {
      backLog: [],
      toDo: [],
      doing: [],
      done: []
    }
  },
  computed: {
    ...mapState([
      'tasks'
    ])
  },
  components: {
    HelloWorld,
    Navbar,
    BackLog,
    ToDo,
    Doing,
    Done,
    ModalAddTask
  },
  methods: {
    ...mapActions([
      'getTasks'
    ]),
    getDataBackLog() {
      this.getTasks()
    }
  },
  created() {
    this.getDataBackLog()
  },
}
</script>
