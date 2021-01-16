import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const INSTANCE_COUNT = 100000

for (let i = 0; i < INSTANCE_COUNT; i++) {
  const element = document.body.appendChild(document.createElement('div'))
  new Vue({render: h=> h(App)}).$mount(element)
}
