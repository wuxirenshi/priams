const user = {
    state: {
        name: '',
        email: '',
        code: '',
        roles: [],
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        },
        SET_CODE: (state, code) => {
            state.code = code
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        LoginByUserName({commit}, userInfo){
            return new Promise((resolve, reject) => {
                commit('SET_NAME', userInfo.name);
                commit('SET_EMAIL', userInfo.email);
                commit('SET_ROLES', userInfo.roles);
                resolve()
            })
        },
        GetUserInfo({commit, state}){
            return new Promise((resolve, reject) => {
                resolve(state)
            }).catch(error => {
                reject(error)
            })
        }
    }
};

export default user;

