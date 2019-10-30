import { Store } from 'vuex';

interface RootState {
  history: any[]
}

const store: Store<RootState> = new Store({

  state: {
    history: [],
  },

  mutations: {

    pushOperationToHistory(state: RootState, data : { operation: string, result: string }) {
      state.history.push(data);
    },

    cleanHistory(state) {
      state.history.splice(0, state.history.length);
    },

  },

});

export default store;
