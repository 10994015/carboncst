<script setup>
import { ref, onMounted, watch } from "vue";
import store from "../store";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();

const router = useRouter();

const DEFAULT_ARTICLE = {
  id: "",
  year: new Date().getFullYear(),
  award_name: "",
  name: "",
  link: "",
  units: "",
  file: "",
  file_name: "",
  hidden: false,
};
const file_url = ref("");

const randerLoading = ref(false);

const loading = ref(false);
const previewLoading = ref(false);
const previewImg = ref(null);
const previewFi = ref(null);
const isPreview = ref(false);
const errorMsg = ref(null);
const successMsg = ref(null);
const awardprogram = ref({ ...DEFAULT_ARTICLE });
const isCreate = ref(false);
onMounted(() => {
  const awardprogramId = route.params.id;
  if (awardprogramId === "create") {
    randerLoading.value = true;
    awardprogram.value.id = awardprogramId;
    isCreate.value = true;
    return;
  }
  store
    .dispatch("isExistAwardprogram", awardprogramId)
    .then((res) => {
      if (res.data) {
        store
          .dispatch("getAwardprogram", awardprogramId)
          .then((res) => {
            awardprogram.value = res.data;
            file_url.value = res.data.file_url;
            isPreview.value = true;
            randerLoading.value = true;

            awardprogram.value.title =
              awardprogram.value.title == null ? "" : awardprogram.value.title;
            awardprogram.value.content =
              awardprogram.value.content == null ? "" : awardprogram.value.content;
          })
          .then(() => {
            if (file_url.value != "") {
              previewFi.value.innerText = file_url.value;
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
const previewFile = (ev) => {
  previewLoading.value = true;
  if (ev.target.files && ev.target.files[0]) {
    awardprogram.value.file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      console.log(previewFi.value.innerText);
      previewFi.value.innerText = e.target.result;
    };
    reader.readAsDataURL(ev.target.files[0]);
  }
  previewLoading.value = false;
  isPreview.value = true;
};
const deleteFile = () => {
  awardprogram.value.file = "";
  previewFi.value.innerText = "";
  isPreview.value = false;
};
const onSubmit = () => {
  loading.value = true;
  if (isCreate.value) {
    store
      .dispatch("createAwardprogram", awardprogram.value)
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
      .dispatch("updateAwardprogram", awardprogram.value)
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
  <div class="addAwardprogram">
    <h1 v-if="isCreate">新增獎項</h1>
    <h1 v-else>編輯獎項</h1>
    <div class="card">
      <div class="card-title">
        <h2>Basic Information</h2>
      </div>
      <form v-if="randerLoading" action="" @submit.prevent="onSubmit()">
        <div class="form-group">
          <label for="">年度</label>
          <select v-model="awardprogram.year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">獎項名稱</label>
          <input type="text" v-model="awardprogram.award_name" />
        </div>
        <div class="form-group">
          <label for="">獲獎者抬頭</label>
          <input type="text" v-model="awardprogram.name" />
        </div>
        <div class="form-group">
          <label for="">服務單位</label>
          <input type="text" v-model="awardprogram.units" />
        </div>
        <div class="form-group">
          <label for="">服務單位連結</label>
          <input type="text" v-model="awardprogram.link" />
        </div>
        <div class="form-group">
          <label for="">檔案名稱</label>
          <input type="text" v-model="awardprogram.file_name" />
        </div>
        <div class="form-group">
          <label for="">檔案上傳</label>
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
            <div v-if="!isPreview || !awardprogram.file_url">
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
              <a href="javascript:;" class="deleteFileBtn" @click="deleteFile()">X</a>
              <p ref="previewFi" class="w-[200px]"></p>
              <!-- <img src="" ref="previewImg" id="previewImg" /> -->
            </div>
          </label>
          <input type="file" id="imagefile" hidden @change="previewFile($event)" />
        </div>
        <div class="chkbox-group">
          <div class="form-group">
            <label for="">隱藏</label>
            <input type="checkbox" v-model="awardprogram.hidden" />
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
          <button
            class="pre"
            type="button"
            @click="router.push({ name: 'app.award-program' })"
          >
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
.addAwardprogram {
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
    > .card-title {
      border-bottom: 1px #2d343c solid;
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
          background-color: #43b883;
          color: #2d343c;
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
            &.isPreview {
              position: relative;
              > .deleteFileBtn {
                position: absolute;
                top: 10px;
                right: 15px;
              }
              > svg {
                position: absolute;
                top: 8px;
                right: 15px;
                color: #2d343c;
                cursor: pointer;
              }
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
          background-color: #43b883;
          border-color: #43b883;
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
            color: #fff;
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
    background: linear-gradient(to right, #43b883, #185cc9);
    &::before {
      left: 25px;
    }
  }
  &::after {
    content: "";
  }
}
</style>
