import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    RootViewComponentDisplay: false,
    SavedItemDisplay: false,
    IntermineDisplay: false
  },
  mutations: {
    drawerToggleMutation(state, payload) {
      state.drawer = payload;
    },
    HideAllScreensMutation(state, payload) {
      state.RootViewComponentDisplay = payload;
      state.SavedItemDisplay = payload;
      state.IntermineDisplay = payload;
    },
    RootViewComponentDisplayMutation(state, payload) {
      state.RootViewComponentDisplay = payload;
    },
    SavedItemDisplayMutation(state, payload) {
      state.SavedItemDisplay = payload;
    },
    IntermineDisplayMutation(state, payload) {
      state.IntermineDisplay = payload;
    }
  },
  actions: {
    drawerToggleAction({ commit }, payload) {
      commit("drawerToggleMutation", payload);
    },
    HideAllScreensAction({ commit }, payload) {
      commit("HideAllScreensMutation", payload);
    },
    RootViewComponentDisplayAction({ commit }, payload) {
      commit("RootViewComponentDisplayMutation", payload);
    },
    SavedItemDisplayAction({ commit }, payload) {
      commit("SavedItemDisplayMutation", payload);
    },
    IntermineDisplayAction({ commit }, payload) {
      commit("IntermineDisplayMutation", payload);
    }
  },
  getters: {
    drawerToggleGetter(state) {
      return state.drawer;
    },
    RootViewComponentGetter(state) {
      return state.RootViewComponentDisplay;
    },
    SavedItemGetter(state) {
      return state.SavedItemDisplay;
    },
    IntermineGetter(state) {
      return state.IntermineDisplay;
    }
  },
  plugins: [createPersistedState()]
});
