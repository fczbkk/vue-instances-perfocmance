import { createApp } from 'vue'
import App from './App.vue'

const INSTANCE_COUNT = 100000

for (let i = 0; i < INSTANCE_COUNT; i++) {
  const element = document.body.appendChild(document.createElement('div'))
  createApp(App).mount(element)
}
