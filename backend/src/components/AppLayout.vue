<script setup>
import { ref, onMounted, computed } from "vue";
import store from "../store";
import Loading from "./Loading.vue";
import Sidebar from "./SideBar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
const sideBarOpen = ref(false);
onMounted(() => {
  store.dispatch("getUser");
});
const currentUser = computed(() => store.state.user.data);
const toggleSideBar = () => {
  sideBarOpen.value = !sideBarOpen.value;
};
const openSideBar = () => {
  sideBarOpen.value = false;
};
</script>

<template>
  <div class="app" v-if="currentUser.id">
    <Sidebar v-model="sideBarOpen" @openSideBar="openSideBar" />
    <div class="main">
      <Header @openSideBar="toggleSideBar" :userName="currentUser.name" />
      <main>
        <router-view></router-view>
      </main>
      <Footer text="Carbon" />
    </div>
  </div>
  <div class="loading" v-else>
    <Loading />
    <span>LOADING...</span>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #191e22;
  width: 100%;
  height: 100vh;
  span {
    color: #fff;
    margin-top: 20px;
    letter-spacing: 2.6px;
  }
}
.app {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #191e22;
  color: #aaa;
  display: flex;
  > .main {
    width: 100%;
    height: auto;
    min-height: 100vh;
    > main {
      padding: 20px 25px;
      min-height: calc(100vh - 151px);
      height: auto;
    }
  }
}
</style>
