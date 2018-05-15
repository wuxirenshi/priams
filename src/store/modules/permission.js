import {constantRoutes, permissionRoutes} from '@/router/routes'

function filterAsyncRouter(routes, roles) {
    const result = [];
    routes.forEach(route => {
        const meta = route.meta;
        if (meta && meta.roles) {
            const isInclude = meta.roles.some(role => roles.includes(role));
            if (isInclude) {
                if (route.children) {
                    route.children = filterAsyncRouter(route.children, roles);
                }
                result.push(route)
            }
            return;
        }
        result.push(route);
    });
    return result;
}


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
                const {roles} = data;
                let accessedRouters;
                if (roles.indexOf('admin') >= 0) {
                    accessedRouters = permissionRoutes;
                } else {
                    accessedRouters = filterAsyncRouter(permissionRoutes, roles)
                }
                commit('SET_ROUTERS', accessedRouters);
                resolve()
            })
        }
    },
};

export default permission;
