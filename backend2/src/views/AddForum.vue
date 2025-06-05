<script setup>
import { ref, onMounted, watch } from "vue";
import store from "../store";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();

const router = useRouter();

const DEFAULT_FORUM = {
  id: "",
  title: "",
  image: "",
  images: [],
  content: "",
  button_1: "",
  link_1: "",
  button_2: "",
  link_2: "",
  button_3: "",
  link_3: "",
  button_4: "",
  link_4: "",
  button_5: "",
  link_5: "",
  hidden: false,
};
const image_url = ref("");
const images_url = ref([]);

const randerLoading = ref(false);

const loading = ref(false);
const previewLoading = ref(false);
const previewsLoading = ref(false);
const previewImg = ref(null);
const prviews = ref(null);
const isPreview = ref(false);
const errorMsg = ref(null);
const successMsg = ref(null);
const forum = ref({ ...DEFAULT_FORUM });
const isCreate = ref(false);
onMounted(() => {
  const forumId = route.params.id;
  if (forumId === "create") {
    randerLoading.value = true;
    forum.value.id = forumId;
    isCreate.value = true;
    return;
  }
  store
    .dispatch("isExistForum", forumId)
    .then((res) => {
      if (res.data) {
        store
          .dispatch("getForum", forumId)
          .then((res) => {
            forum.value = res.data;
            image_url.value = res.data.image_url;
            if (res.data.images_url == "" || res.data.images_url == null) {
              images_url.value = null;
            } else {
              images_url.value = res.data.images_url.split(",");
            }
            if (image_url.value) {
              isPreview.value = true;
            }
            randerLoading.value = true;

            forum.value.title = forum.value.title == "null" ? "" : forum.value.title;
            forum.value.content =
              forum.value.content == "null" ? "" : forum.value.content;
            forum.value.button_1 =
              forum.value.button_1 == "null" ? "" : forum.value.button_1;
            forum.value.link_1 = forum.value.link_1 == "null" ? "" : forum.value.link_1;
            forum.value.button_2 =
              forum.value.button_2 == "null" ? "" : forum.value.button_2;
            forum.value.link_2 = forum.value.link_2 == "null" ? "" : forum.value.link_2;
            forum.value.button_3 =
              forum.value.button_3 == "null" ? "" : forum.value.button_3;
            forum.value.link_3 = forum.value.link_3 == "null" ? "" : forum.value.link_3;
            forum.value.button_4 =
              forum.value.button_4 == "null" ? "" : forum.value.button_4;
            forum.value.link_4 = forum.value.link_4 == "null" ? "" : forum.value.link_4;
            forum.value.button_5 =
              forum.value.button_5 == "null" ? "" : forum.value.button_5;
            forum.value.link_5 = forum.value.link_5 == "null" ? "" : forum.value.link_5;
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
    forum.value.image = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImg.value.src = e.target.result;
    };
    reader.readAsDataURL(ev.target.files[0]);
  }
  previewLoading.value = false;
  isPreview.value = true;
};
const uploadImages = (ev) => {
  previewsLoading.value = true;
  if (ev.target.files && ev.target.files[0]) {
    Array.from(ev.target.files).forEach((file) => {
      forum.value.images.push(file);
    });
    for (let i = 0; i < ev.target.files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        prviews.value.appendChild(img);
      };
      reader.readAsDataURL(ev.target.files[i]);
    }
  }
  previewsLoading.value = false;
};
const deleteImg = (idx) => {
  if (confirm("確定要刪除此圖片嗎?")) {
    images_url.value.splice(idx, 1);
  }
};
const onSubmit = () => {
  loading.value = true;
  if (isCreate.value) {
    store
      .dispatch("createForum", forum.value)
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
    forum.value["ori_images"] = images_url.value;
    store
      .dispatch("updateForum", forum.value)
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
</script>

<template>
  <div class="addForum">
    <h1 v-if="isCreate">新增碳材料論壇</h1>
    <h1 v-else>編輯碳材料論壇</h1>
    <div class="card">
      <div class="card-title">
        <h2>Basic Information</h2>
      </div>
      <form v-if="randerLoading" action="" @submit.prevent="onSubmit()">
        <div class="form-group">
          <label for="">論壇標題</label>
          <input type="text" v-model="forum.title" />
        </div>
        <div class="form-group">
          <label for="">論壇內容</label>
          <textarea id="editor1" name="editor1" v-model="forum.content"></textarea>
        </div>
        <div class="form-group">
          <label for="">文章圖片</label>
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
        <div class="form-group">
          <label for="">論壇其他圖片</label>
          <label for="imagefiles" class="imagefileFor">
            <svg
              v-if="previewsLoading"
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
            <div v-if="true">
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
              <span>單擊此處以上傳多張圖片。</span>
            </div>
          </label>
          <input
            type="file"
            id="imagefiles"
            multiple
            hidden
            @change="uploadImages($event)"
          />
        </div>
        <div class="form-group">
          <label for="">預覽圖片</label>
          <div class="prviews mb-3" ref="prviews"></div>
          <div class="prviews">
            <div class="imgbox" v-for="(img, idx) in images_url" :key="img">
              <img :src="img" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                @click="deleteImg(idx)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">相關連結1(可選)</label>
          <div class="flex">
            <div class="form-group w-[50%] mr-2">
              <label for="">按鈕名稱</label>
              <input type="text" v-model="forum.button_1" />
            </div>
            <div class="form-group w-[50%] ml-2">
              <label for="">網址連結</label>
              <input type="text" v-model="forum.link_1" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">相關連結2(可選)</label>
          <div class="flex">
            <div class="form-group w-[50%] mr-2">
              <label for="">按鈕名稱</label>
              <input type="text" v-model="forum.button_2" />
            </div>
            <div class="form-group w-[50%] ml-2">
              <label for="">網址連結</label>
              <input type="text" v-model="forum.link_2" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">相關連結3(可選)</label>
          <div class="flex">
            <div class="form-group w-[50%] mr-2">
              <label for="">按鈕名稱</label>
              <input type="text" v-model="forum.button_3" />
            </div>
            <div class="form-group w-[50%] ml-2">
              <label for="">網址連結</label>
              <input type="text" v-model="forum.link_3" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">相關連結4(可選)</label>
          <div class="flex">
            <div class="form-group w-[50%] mr-2">
              <label for="">按鈕名稱</label>
              <input type="text" v-model="forum.button_4" />
            </div>
            <div class="form-group w-[50%] ml-2">
              <label for="">網址連結</label>
              <input type="text" v-model="forum.link_4" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">相關連結5(可選)</label>
          <div class="flex">
            <div class="form-group w-[50%] mr-2">
              <label for="">按鈕名稱</label>
              <input type="text" v-model="forum.button_5" />
            </div>
            <div class="form-group w-[50%] ml-2">
              <label for="">網址連結</label>
              <input type="text" v-model="forum.link_5" />
            </div>
          </div>
        </div>
        <div class="chkbox-group">
          <div class="form-group">
            <label for="">隱藏</label>
            <input type="checkbox" v-model="forum.hidden" />
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
          <button class="pre" type="button" @click="router.push({ name: 'app.forums' })">
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
.addForum {
  display: flex;
  flex-direction: column;
  > h1 {
    font-weight: 900;
    color: #fff;
  }
  > .card {
    background-color: #242a30;
    border-radius: 12px;
    padding: 1.5rem 4rem 1.5rem 2.5rem;
    margin-top: 25px;
    > .card-title {
      border-bottom: 1px #2d343c solid;
      padding-bottom: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        color: #fff;
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
          background-color: #1c84ee;
          color: #fff;
          border-radius: 25px;
          padding: 10px 23px;
          transition: 0.3s;
          font-size: 13px;
          margin-left: 16px;
          &:hover {
            background-color: #1870ca;
            border-color: #1870ca;
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
      .prviews {
        display: grid;
        grid-template-columns: repeat(7, 13%);
        grid-column-gap: 15px;
        grid-row-gap: 1em;
        > .imgbox {
          width: 100%;
          position: relative;
          > img {
            width: 100%;
          }
          svg {
            position: absolute;
            top: 0;
            right: 0px;
            cursor: pointer;
            color: #544;
          }
        }
      }
      span.successMsg {
        margin-top: 15px;
        background-color: rgb(0, 190, 48);
        color: #fff;
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
          color: #ced4da;
        }
        > .imagefileFor {
          width: 100%;
          height: 140px;
          background-color: #282f36;
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
              color: #fff;
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
          background-color: #282f36;
          color: #adb5bd;
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
          background-color: #282f36;
          color: #adb5bd;
          border: 1px #30373f solid;
          height: 140px;
          font-size: 14px;
          resize: none;
          resize: vertical;
        }
        > button,
        .pre {
          color: #f6f6f6;
          background-color: #1c84ee;
          border-color: #1c84ee;
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
            background-color: #1870ca;
            border-color: #1870ca;
          }
          &.loading {
            cursor: not-allowed;
            background-color: #1870ca;
            border-color: #1870ca;
          }
          > svg {
            text-align: center;
          }
        }
        .pre {
          background-color: #74788d;
          color: #f6f6f6;
          margin-left: 10px;
          &:hover {
            background-color: #636678;
            border-color: #5d6071;
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
