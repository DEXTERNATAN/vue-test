<template>
    <main>
        <div class="page-header">
            <div class="container">
                <h1 class="">Editar usuário</h1>
            </div>
        </div>
        <div class="container">

            <Alert v-if="alert" v-bind:message="alert"></Alert>

            <div class="box">
                <form v-on:submit="editarUsuario">
                    <div class="form-group">
                        <label for="user">Nome</label>
                        <input id="user" class="form-control" placeholder="Nome do usuário" type="text" v-model="usuario.nome">
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Enviar
                        <span class="fa fa-check" aria-hidden="true"></span>
                    </button>
                </form>
            </div>
        </div>
    </main>
</template>
<script>

import axios from 'axios';
import Alert from '../components/Alert.vue'
export default {
    name: 'editarUsuario',
    data() {
        return {
            usuario: {},
            alert: ''
        }
    },
    methods: {
        carregarUsuario(id) {
            axios.get('http://localhost:3000/api/usuarios/' + id)
                .then(response => {
                    this.usuario = response.data;
                    console.log('x', this.usuario);
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        editarUsuario(e) {
            if (!this.usuario.nome) {
                this.alert = 'Campo nome obrigatório'
            } else {
                let updUsuario = {
                    nome: this.usuario.nome
                }

                axios.put('http://localhost:3000/api/usuarios/' + this.$route.params.id, updUsuario)
                    .then(response => {
                        this.$router.push({ path: '/' , query: { alert: 'Usuário atualizado com sucesso!' }})
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    created: function () {
        this.carregarUsuario(this.$route.params.id);
    },
    components:{
        Alert
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>