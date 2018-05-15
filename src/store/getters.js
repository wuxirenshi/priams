const getters = {
    permission_routers: state => state.permission.routers,
    addRouters: state => state.permission.addRouters,
    name: state => state.user.name,
    roles: state => state.user.roles,
};
export default getters;
