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
        },

        deleteActivity(state, activity) {
            state.activities = state.activities.filter((val) => val !== activity);
        }
    },
    actions: {
        addActivity({commit}, {activity}) {
            commit('addActivity', activity)
        },
        deleteActivity({commit}, {activity}) {
            commit('deleteActivity', activity)

        }
    },
    getters: {
        getActivities(state) {
            return state.activities;
        }
    }
})
