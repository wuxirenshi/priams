import {constantRoutes} from '@/router/routes'
import {getUser} from '../../api/api'

const user = {
  state: {
    name: '',
    role: '',
    show: true,
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_SHOW: (state, show) => {
      state.show = show;
    }
  },
  actions: {
    updateUser({commit}, token) {
      getUser(token).then(res => {
        commit('SET_NAME', res.account);
        commit('SET_ROLE', res.role);
        commit('SET_SHOW', false)
      })
    },
    clearUser({commit}) {
      commit('SET_NAME', '');
      commit('SET_ROLE', '');
      commit('SET_SHOW', true)
    }
  },
};

export default user;
