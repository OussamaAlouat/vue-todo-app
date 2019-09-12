import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: []
  },
  mutations: {
    addActivity(state, activity) {
      state.activities.push(activity);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },

    deleteActivity(state, activity) {
      state.activities = state.activities.filter((val) => val.id !== activity.id);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },

    changeActivityState(state, activity) {
      state.activities.map((val)=> {
        if (val.id === activity.id ) {
          const aux = !val.completed;
          val.completed = aux;
        }

        return val;
      });

      localStorage.setItem('activities',JSON.stringify(state.activities));
    }
  },
  actions: {
    addActivity({commit}, {activity}) {
      commit('addActivity', activity)
    },
    deleteActivity({commit}, {activity}) {
      commit('deleteActivity', activity)

    },
    changeActivityState({commit}, {activity}){
      commit('changeActivityState', activity)
    }
  },
  getters: {
    getActivities(state) {
      const activities = JSON.parse(localStorage.getItem('activities'));
      if (activities && activities.length > 0) {
        state.activities = activities;
      }
  
      return state.activities;
    }
  }
})
