<script setup>
import { computed } from "vue";
import CloseText from "./shared/CloseText.vue"

const props = defineProps({
    modelValue : Boolean,
});
const sideBarOpen = computed(()=> props.modelValue);
</script>

<template>
    <div :class="['sideBar', {'close':sideBarOpen}]">
        <router-link to="/" class="logo">
            <img src="/images/logo-sm.svg" />
            <CloseText textName="Carbon" v-model="sideBarOpen" />
        </router-link>
        <ul>
            <router-link :to="{name:'app.dashboard'}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <CloseText textName="首頁" v-model="sideBarOpen" />
            </router-link>
            <router-link :to="{name:'app.dashboard'}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <CloseText textName="最新消息" v-model="sideBarOpen" />
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
 .sideBar{
        min-width:250px;
        width:250px;
        min-height: 100vh;
        height: auto;
        background-color: #242A30;
        padding: 20px 10px;
        transition: .3s;
        &.close{
            width:70px;
            min-width:70px;
        }
        >.logo{
            display: flex;
            align-items: center;
            font-size: 22px;
            color:#fff;
            font-weight: 900;
            padding: 12px;
            >img{
                color: #FF9898;
                margin-right: 5px;
                min-width:30px;
                width: 30px;
            }
            >span{
                letter-spacing: 1.6px;
                font-size: 21px;
                transition: .3s;
                &:hover{
                    color:#bbbs;
                }
            }
        }
        >ul{
            margin-top: 40px;
            a{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-bottom: 6px;
                padding: 12px 15px;
                border-radius: 25px;
                transition: .3s;
                &:hover{
                    background-color: rgba($color: #000, $alpha: .3);
                    color:#fff;
                }
                &.active{
                    color:#fff;
                }
                svg{
                    margin-right: 10px;
                    min-width: 20px;
                    width:20px;
                }
            }
        }
    }
</style>