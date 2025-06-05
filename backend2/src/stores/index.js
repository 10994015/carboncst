import { defineStore } from "pinia";
import { ref } from "vue";
import axiosClient from "../axios";

// export const useAppStore = defineStore({
//     id:"app",
//     state:()=>({
//         user:{
//             token:null,
//             data:{}
//         }
//     }),
//     getters:{

//     },
//     actions:{
//         async login(user){
//             console.log(user);
            
//         },
//     }
// })

export const useAppStore = defineStore("app", ()=>{
    const user = ref({
        token:'',
        data:{},
    });

    const login = (user)=>{
        return axiosClient.post('/login', user).then(res=>{
            user.value.token = res.data.token;
            user.value.user = res.data.user;

            return res.data
        })
    }
   
    return {
        user,
        login,
    }
});