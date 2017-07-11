import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Detalhe from './components/Detalhe.vue'
import EditarUsuario from './components/EditarUsuario.vue'
import ListaUsuarios from './components/ListaUsuarios.vue'
import FormAddUsuarios from './components/FormAddUsuarios.vue'
import Ajuda from './components/Ajuda.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  //base: _dirname,
  routes: [
    { path: '/', component: ListaUsuarios },
    { path: '/novo', component: FormAddUsuarios },
    { path: '/Ajuda', component: Ajuda },
    { path: '/detalhe/:id', component: Detalhe },
    { path: '/editarUsuario/:id', component: EditarUsuario },
    { path: '/deletarUsuario/:id', component: ListaUsuarios }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')