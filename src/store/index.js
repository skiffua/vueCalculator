import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        history: [],
    },

    mutations: {

        pushOperationToHistory (state, { operation, result } ) {
            state.history.push({ operation, result })
        },

        cleanHistory (state) {
            state.history.splice(0, state.history.length);
        }

    }

})