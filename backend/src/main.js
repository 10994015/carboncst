import { createApp } from 'vue'
import './style.css'
import store from './store'
// import { createPinia } from 'pinia'
import router from "./router"
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import App from './App.vue'

const app = createApp(App);

app.use(store).use(router)
.use(CKEditor, {
    editors: {
      classic: ClassicEditor
    }
  })
app.mount('#app')
