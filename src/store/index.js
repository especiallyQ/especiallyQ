import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: '',
        edit: "",
        text: ''
    },
    mutations: {
        DEPOSIT(state, value) {
            state.user = value
        },
        EDIT(state, value) {
            state.edit = value
        },
        TEXT(state, value) {
            state.text = value
        }

    },
    actions: {
        deposit(context, value) {
            context.commit('DEPOSIT', value)
        },
        edit(context, value) {
            context.commit('EDIT', value)
        },
        text(context, value) {
            context.commit('TEXT', value)
        }

    },
    getters: {
    }
})