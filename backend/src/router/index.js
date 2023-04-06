import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue"
import Dashboard from "../views/Dashboard.vue";
import Articles from "../views/Articles.vue";
import AddArticle from "../views/AddArticle.vue";
import Banners from "../views/Banners.vue";
import AddBanner from "../views/AddBanner.vue";
import Chairman from "../views/Chairman.vue";
import AddChairman from "../views/AddChairman.vue";
import Awardprogram from "../views/Awardprogram.vue";
import AddAwardprogram from "../views/AddAwardprogram.vue";
import Letters from "../views/Letters.vue";
import AddLetter from "../views/AddLetter.vue";
import CstDatabase from "../views/CstDatabase.vue";
import AddCstDatabase from "../views/AddCstDatabase.vue";
import CstSeminar from "../views/CstSeminar.vue";
import AddCstSeminar from "../views/AddCstSeminar.vue";
import Oversea from "../views/Oversea.vue";
import AddOversea from "../views/AddOversea.vue";
import Login from "../views/Login.vue";
import store from "../store";

const routes = [
    {
        path:'/',
        name:'app',
        component:AppLayout,
        meta:{
            requiresAuth:true,
        },
        children:[
            {
                path:'',
                name:'app.dashboard',
                component:Dashboard,
            },
            {
                path:'articles',
                name:'app.articles',
                component:Articles,
            },
            {
                path:'add-articles/:id',
                name:'app.add-article',
                component:AddArticle,
            },
            {
                path:'banners',
                name:'app.banners',
                component:Banners,
            },
            {
                path:'add-banner/:id',
                name:'app.add-banner',
                component:AddBanner,
            },
            {
                path:'chairmans',
                name:'app.chairmans',
                component:Chairman,
            },
            {
                path:'add-chairman/:id',
                name:'app.add-chairman',
                component:AddChairman,
            },
            {
                path:'award-program',
                name:'app.award-program',
                component:Awardprogram,
            },
            {
                path:'add-award-program/:id',
                name:'app.add-award-program',
                component:AddAwardprogram,
            },
            {
                path:'letter',
                name:'app.letters',
                component:Letters,
            },
            {
                path:'add-letter/:id',
                name:'app.add-letter',
                component:AddLetter,
            },
            {
                path:'cst-database',
                name:'app.cst-database',
                component:CstDatabase,
            },
            {
                path:'add-cst-database/:id',
                name:'app.add-cst-database',
                component:AddCstDatabase,
            },
            {
                path:'cst-seminar',
                name:'app.cst-seminar',
                component:CstSeminar,
            },
            {
                path:'add-cst-seminar/:id',
                name:'app.add-cst-seminar',
                component:AddCstSeminar,
            },
            {
                path:'overseas',
                name:'app.overseas',
                component:Oversea,
            },
            {
                path:'add-oversea/:id',
                name:'app.add-oversea',
                component:AddOversea,
            },
            
        ]
    },
   {
    path:'/login',
    name:'login',
    component:Login,
    meta:{
        requiresGuest:true,
    },
   },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next)=>{
    if(to.meta.requiresAuth && !store.state.user.token){
        next({name:'login'})
    }else if(to.meta.requiresGuest && store.state.user.token){
        next({name:'app.dashboard'});
    }else{
        next();
    }
})


export default router;