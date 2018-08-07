import {constantRoutes} from '@/router/routes'

const permission = {
    state: {
        routers: constantRoutes,
        addRouters: [],
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers;
            state.routers = constantRoutes.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}, data) {
            return new Promise(resolve => {
                commit('SET_ROUTERS', []);
                resolve()
            })
        }
    },
};

export default permission;
