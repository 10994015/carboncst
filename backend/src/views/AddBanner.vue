<script setup>
import { ref, onMounted, watch } from "vue";
import store from "../store";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();

const router = useRouter();

const DEFAULT_BANNER = {
  id: "",
  image: "",
  url: "",
  hidden: false,
};
const image_url = ref("");

const randerLoading = ref(false);

const loading = ref(false);
const previewLoading = ref(false);
const previewImg = ref(null);
const isPreview = ref(false);
const errorMsg = ref(null);
const successMsg = ref(null);
const banner = ref({ ...DEFAULT_BANNER });
const isCreate = ref(false);

onMounted(() => {
  const bannerId = route.params.id;
  if (bannerId === "create") {
    randerLoading.value = true;
    banner.value.id = bannerId;
    isCreate.value = true;
    return;
  }
  store
    .dispatch("isExistBanner", bannerId)
    .then((res) => {
      if (res.data) {
        store
          .dispatch("getBanner", bannerId)
          .then((res) => {
            banner.value = res.data;
            image_url.value = res.data.image_url;
            isPreview.value = true;
            randerLoading.value = true;

            banner.value.url = banner.value.url == "null" ? "" : banner.value.url;
          })
          .then(() => {
            if (image_url.value != "") {
              previewImg.value.src = image_url.value;
            }
          });
      } else {
        router.push({ path: "/notfound" });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

const previewImage = (ev) => {
  previewLoading.value = true;
  if (ev.target.files && ev.target.files[0]) {
    banner.value.image = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.value.src = e.target.result;
    };
    reader.readAsDataURL(ev.target.files[0]);
  }
  previewLoading.value = false;
  isPreview.value = true;
};
const onSubmit = () => {
  loading.value = true;
  if (isCreate.value) {
    store
      .dispatch("createBanner", banner.value)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          successMsg.value = "上傳成功！";
          errorMsg.value = null;
        }
        loading.value = false;
      })
      .catch((err) => {
        loading.value = false;
        errorMsg.value = err.response.data.errors;
      });
  } else {
    store
      .dispatch("updateBanner", banner.value)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          successMsg.value = "更新成功！";
          errorMsg.value = null;
        }
        loading.value = false;
      })
      .catch((err) => {
        loading.value = false;
        errorMsg.value = err.response.data.errors;
      });
  }
};
watch(
  () => banner.value,
  (val) => {
    successMsg.value = null;
  },
  { deep: true }
);
</script>

<template>
  <div class="addBanner">
    <h1 v-if="isCreate">新增輪播圖</h1>
    <h1 v-else>編輯輪播圖</h1>
    <div class="card">
      <div class="card-title">
        <h2>Basic Information</h2>
      </div>
      <form v-if="randerLoading" action="" @submit.prevent="onSubmit()">
        <div class="form-group">
          <label for="">輪播圖連結</label>
          <input type="text" v-model="banner.url" />
        </div>
        <div class="form-group">
          <label for="">輪播圖上傳</label>
          <label for="imagefile" class="imagefileFor">
            <svg
              v-if="previewLoading"
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <div v-if="!isPreview">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mb-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <span>將文件拖放到此處或單擊以上傳。</span>
            </div>
            <div v-else class="isPreview">
              <img src="" ref="previewImg" id="previewImg" />
            </div>
          </label>
          <input type="file" id="imagefile" hidden @change="previewImage($event)" />
        </div>
        <div class="chkbox-group">
          <div class="form-group">
            <label for="">隱藏圖片</label>
            <input type="checkbox" v-model="banner.hidden" />
          </div>
        </div>
        <span v-if="successMsg" class="successMsg">{{ successMsg }}</span>
        <div class="form-group btn-group mt-10">
          <button type="submit" :class="{ loading: loading }">
            <svg
              v-if="loading"
              class="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span v-else>保存更改</span>
          </button>
          <button class="pre" type="button" @click="router.push({ name: 'app.banners' })">
            回列表
          </button>
        </div>
      </form>
      <div v-else class="flex items-center justify-center py-10">
        <svg
          class="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div class="errorMsg" v-if="errorMsg">
        <span v-for="(error, i) in errorMsg" :key="i"> {{ error[0] }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.addBanner {
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 900;
    color: #2d343c;
  }
  > .card {
    background-color: #fff;
    border-radius: 12px;
    padding: 1.5rem 4rem 1.5rem 2.5rem;
    margin-top: 25px;
    border:1px #2d343c solid;
    > .card-title {
      border-bottom: 1px #ddd solid;
      padding-bottom: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        color: #2d343c;
        font-size: 17px;
        font-weight: 800;
      }
      p {
        margin-top: 5px;
        margin-bottom: 15px;
      }
      > .categoryBtn {
        margin-left: auto;
        button {
          background-color: #43B883;
          color: #fff;
          border-radius: 25px;
          padding: 10px 23px;
          transition: 0.3s;
          font-size: 13px;
          margin-left: 16px;
          &:hover {
            background-color: #399b6f;
            border-color: #399b6f;
          }
          > i {
            margin-right: 3px;
          }
        }
      }
    }
    > form {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 100%);
      grid-column-gap: 30px;
      .chkbox-group {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      span.successMsg {
        margin-top: 15px;
        background-color: rgb(0, 190, 48);
        color: #2d343c;
        border-radius: 3px;
        padding: 10px 20px;
        font-size: 13px;
        max-width: 120px;
        text-align: center;
      }
      .form-group {
        display: flex;
        flex-direction: column;
        padding: 12px 0;
        &.btn-group {
          flex-direction: row;
        }
        > label {
          margin-bottom: 10px;
          font-weight: 900;
          font-size: 13px;
          color: #2d343c;
        }
        > .imagefileFor {
          width: 100%;
          height: 140px;
          background-color: #fff;
          border: 2px #30373f dashed;
          cursor: pointer;
          > div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 15px;
            position: relative;
            width: 100%;
            height: 100%;
            &.isPreview > svg {
              position: absolute;
              top: 8px;
              right: 15px;
              color: #2d343c;
              cursor: pointer;
            }
            > img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 100%;
              object-fit: contain;
            }
          }
        }
        input[type="text"],
        input[type="number"],
        select {
          border: none;
          outline: none;
          border-radius: 5px;
          padding: 0 12px;
          background-color: #fff;
          color: #2d343c;
          border: 1px #30373f solid;
          height: 36px;
          font-size: 14px;
        }
        > .input-group {
          display: flex;
          align-items: center;
          width: 100%;
          .icon {
            background-color: hsla(0, 0%, 100%, 0.1);
            width: 36px;
            height: 36px;
            border: none;
            padding: 7.5px 0 7.5px 9px;
            border-radius: 5px 0 0 5px;
            margin-right: 0;
          }

          input {
            margin-left: 0;
            width: calc(100% - 36px);
          }
        }
        > textarea {
          border: none;
          outline: none;
          border-radius: 5px;
          padding: 8px 12px;
          background-color: #fff;
          color: #2d343c;
          border: 1px #30373f solid;
          height: 140px;
          font-size: 14px;
          resize: none;
          resize: vertical;
        }
        > button,
        .pre {
          color: #fff;
          background-color: #43B883;
          border-color: #43B883;
          border-radius: 5px;
          height: 38px;
          font-size: 13px;
          font-weight: 500;
          width: auto;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
          &:hover {
            background-color: #399b6f;
            border-color: #399b6f;
          }
          &.loading {
            cursor: not-allowed;
            background-color: #399b6f;
            border-color: #399b6f;
          }
          > svg {
            text-align: center;
          }
        }
        .pre {
          background-color: #fff;
          color: #2d343c;
          margin-left: 10px;
          &:hover {
            background-color: #636678;
            border-color: #5d6071;
            color:#fff;
          }
        }
      }
    }
    > .errorMsg {
      display: flex;
      flex-direction: column;
      > span {
        color: rgb(180, 0, 0);
        margin-top: 4px;
      }
    }
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

input[type="checkbox"],
input[type="radio"] {
  position: relative;
  width: 50px;
  height: 25px;
  outline: none;
  background: linear-gradient(to right, #bbb, #999);
  -webkit-appearance: none;
  cursor: pointer;
  border-radius: 20px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 50%;
    transform: scale(0.98, 0.96);
    transition: 0.5s;
  }
  &:checked {
    background: linear-gradient(to right, #1c84ee, #185cc9);
    &::before {
      left: 25px;
    }
  }
  &::after {
    content: "";
  }
}
</style>
