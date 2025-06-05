<script setup>

</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #aaa;
  border-radius: 5px;
  width: 16px;
  height: 16px;
  outline: none;
  cursor: pointer;
  position: relative; /* 讓勾選圖示相對定位 */
}
/* 未選中時的樣式 */
input[type="checkbox"]:not(:checked) {
  background-color: #fff;
}

/* 選中時的樣式 */
input[type="checkbox"]:checked {
  background-color: #2196f3;
}

/* 鼠標懸停時的樣式 */
input[type="checkbox"]:hover {
  border-color: #555;
}

/* 勾選圖示樣式 */
input[type="checkbox"]:checked::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 5px;
  height: 10px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
}
</style>
