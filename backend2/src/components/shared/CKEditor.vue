<script setup>
import { onMounted, ref, watch } from "vue";

const content = ref(props.content);
let ckEditor;
const props = defineProps({
  content: String,
});
const emit = defineEmits(["sendContent"]);
onMounted(() => {
  ckEditor = window.CKEDITOR.replace("editor1", {
    language: "fr",
  });
  ckEditor.setData(content.value);
  ckEditor.on("change", () => {
    emit("sendContent", ckEditor.getData());
  });
});
watch(content, () => {
  if (content.value !== ckEditor.getData()) {
    ckEditor.setData(content.value);
  }
});
</script>

<template>
  <textarea id="editor1" name="editor1"></textarea>
</template>

<style lang="scss" scoped>
#cke_editor1 {
  background-color: #333;
}
</style>
