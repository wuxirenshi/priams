const getters = {
  permission_routers: state => state.permission.routers,
  name: state => state.user.name,
  role: state => state.user.role,
  show: state => state.user.show,
};
export default getters;
