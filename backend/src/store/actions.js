import axiosClient from "../axios";

export function login({commit}, data){
    return axiosClient.post('login', data).then(res=>{
        commit('setUser', res.data.user);
        commit('setToken', res.data.token);
        return data;
    })
}

export function logout({commit}){
    return axiosClient.post('logout').then(res=>{
        commit('setToken', null);
        return res;
    })
}