import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, payload) {

    },
    GET_TASKS(state, payload) {
      state.tasks = payload
    }

  },
  actions: {
    addTask(context, data) {
      db.ref(`tasks/${data.status}`).push({
        title: data.title,
        description: data.description,
        point: data.point,
        assignedTo: data.assignedTo,
        status: data.status
      })
    },
    getTasks({ commit }) {
      db.ref(`tasks/`).on('value', function(snapshoot) {
        commit('GET_TASKS', snapshoot.val())
      })
    },
    updateTask({commit}, data) {
      // console.log(data) //data.id, data.task
      db.ref(`tasks/${data.task.status}/${data.id}`).set(data.task)
    }, 
    removeTask({commit}, data) {
      // console.log(data)
      db.ref(`tasks/${data.task.status}/${data.id}`).remove()
    }
  }
})
