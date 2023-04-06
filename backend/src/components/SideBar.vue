<script setup>
import { computed, ref, watch } from "vue";
import CloseText from "./shared/CloseText.vue";

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["openSideBar"]);
const isAbout = ref(false);
const isAwards = ref(false);
const isInfo = ref(false);
const sideBarOpen = computed(() => props.modelValue);
const closeItems = () => {
  isAbout.value = false;
  isAwards.value = false;
  isInfo.value = false;
};
watch(sideBarOpen, (val) => {
  if (val) {
    closeItems();
  }
});
const openList = (name) => {
  emit("openSideBar");
  if (name === "about") return (isAbout.value = !isAbout.value);
  if (name === "awards") return (isAwards.value = !isAwards.value);
  if (name === "info") return (isInfo.value = !isInfo.value);
};
</script>

<template>
  <div :class="['sideBar', { close: sideBarOpen }]">
    <router-link to="/" class="logo">
      <img src="/images/logo-sm.svg" />
      <CloseText textName="Carbon" v-model="sideBarOpen" />
    </router-link>
    <ul>
      <router-link :to="{ name: 'app.dashboard' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
        <CloseText textName="首頁" v-model="sideBarOpen" />
      </router-link>
      <router-link :to="{ name: 'app.articles' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
        <CloseText textName="最新消息" v-model="sideBarOpen" />
      </router-link>
      <router-link :to="{ name: 'app.banners' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <CloseText textName="首頁輪播圖" v-model="sideBarOpen" />
      </router-link>
      <a href="javascript:;" @click="openList('about')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
        <CloseText textName="關於學會" v-model="sideBarOpen" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="['w-3', 'h-3', 'ml-auto', { active: isAbout }]"
          v-show="!sideBarOpen"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <ol :class="{ open: isAbout }">
        <router-link :to="{ name: 'app.chairmans' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="理事長的話" v-model="sideBarOpen" />
        </router-link>
      </ol>
      <a href="javascript:;" @click="openList('awards')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
          />
        </svg>

        <CloseText textName="學會獎項" v-model="sideBarOpen" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="['w-3', 'h-3', 'ml-auto', { active: isAwards }]"
          v-show="!sideBarOpen"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <ol :class="{ open: isAwards }">
        <router-link :to="{ name: 'app.award-program' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="獎項項目" v-model="sideBarOpen" />
        </router-link>
        <router-link :to="{ name: 'app.letters' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="推薦書下載" v-model="sideBarOpen" />
        </router-link>
      </ol>
      <router-link :to="{ name: 'app.cst-database' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
        <CloseText textName="碳才資料庫" v-model="sideBarOpen" />
      </router-link>
      <a href="javascript:;" @click="openList('info')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        <CloseText textName="論壇&研討會資訊" v-model="sideBarOpen" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="['w-3', 'h-3', 'ml-auto', { active: isInfo }]"
          v-show="!sideBarOpen"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </a>
      <ol :class="{ open: isInfo }">
        <router-link :to="{ name: 'app.cst-seminar' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="臺灣碳材料學術研討會" v-model="sideBarOpen" />
        </router-link>
        <router-link :to="{ name: 'app.overseas' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="國內外研討會" v-model="sideBarOpen" />
        </router-link>
        <router-link :to="{ name: 'app.banners' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>

          <CloseText textName="碳材料論壇" v-model="sideBarOpen" />
        </router-link>
      </ol>
      <router-link :to="{ name: 'app.dashboard' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
          />
        </svg>

        <CloseText textName="Email" v-model="sideBarOpen" />
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.sideBar {
  min-width: 250px;
  width: 250px;
  min-height: 100vh;
  height: auto;
  background-color: #242a30;
  padding: 20px 10px;
  transition: 0.3s;
  &.close {
    width: 70px;
    min-width: 70px;
  }
  > .logo {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #fff;
    font-weight: 900;
    padding: 12px;
    > img {
      color: #ff9898;
      margin-right: 5px;
      min-width: 30px;
      width: 30px;
    }
    > span {
      letter-spacing: 1.6px;
      font-size: 21px;
      transition: 0.3s;
      &:hover {
        color: #bbb;
      }
    }
  }
  > ul {
    margin-top: 40px;
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 6px;
      padding: 12px 15px;
      border-radius: 25px;
      transition: 0.3s;
      &:hover {
        background-color: rgba($color: #000, $alpha: 0.3);
        color: #fff;
      }
      &.active {
        color: #fff;
      }
      svg {
        margin-right: 10px;
        min-width: 20px;
        width: 20px;
      }
    }
    ol {
      margin-left: 10px;
      height: 0;
      overflow: hidden;
      &.open {
        height: auto;
      }
      > a {
        border-bottom: 1px #333 solid;
        border-radius: 0;
        padding: 10px 15px;
      }
    }
    svg.active {
      transform: rotate(180deg);
    }
  }
}
</style>
