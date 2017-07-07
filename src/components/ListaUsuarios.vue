<template>
    <main>
        <div class="page-header">
            <div class="container">
                <div class="pull-right">
                    <router-link to="/novo" class="btn btn-primary">
                        <span class="fa fa-plus" aria-hidden="true"></span>
                        Novo Usuário
                    </router-link>
                </div>
                <h1 class="">Gerenciamento de usuários</h1>
            </div>
        </div>
        <div class="container">
    
            <Alert v-if="alert" v-bind:message="alert"></Alert>
    
            <div class="box">
                <div class="form-group">
                    <label for="search" class="sr-only">Pesquisar</label>
                    <input id="search" class="form-control" placeholder="Pesquisar usuário" v-model="SearchFilter">
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(us, index) in filterBy(orderedUsers, SearchFilter)" v-bind:key="index">
                            <td>{{us.nome}}</td>
                            <td class="is-icon">
                                <router-link class="btn btn-link" v-bind:to="'/detalhe/'+us.id" title="Visualizar">
                                    <i class="fa fa-lg fa-eye" aria-hidden="true"></i>
                                    </i>
                                </router-link>
                                <router-link class="btn btn-link" v-bind:to="'/editarUsuario/' + us.id">
                                    <i class="fa fa-lg fa-pencil" aria-hidden="true"></i>
                                    </i>
                                </router-link>
                                <a class="btn btn-link" v-on:click="DeletaUsuario(us.id)">
                                    <span class="fa fa-lg fa-trash" aria-hidden="true"></span>
                                </a>
    
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
<script>

import axios from 'axios';
import _ from 'lodash'
import Alert from '../components/Alert.vue'

export default {
    data: () => ({
        usuarios: [],
        errors: [],
        alert: '',
        SearchFilter: ''
    }),
    methods: {
        BuscaUsuario: function () {
            axios.get('http://localhost:3000/api/usuarios/')
                .then(response => {
                    this.usuarios = response.data;
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }, DeletaUsuario(id) {
            axios.delete('http://localhost:3000/api/usuarios/' + id).then(response => {
                console.log(id);
                this.alert = 'Usuário excluído com sucesso!';
                this.type = 'success';
            });
        },
        filterBy(list, value) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
            return list.filter(function (usuario) {
                return usuario.nome.indexOf(value) > -1;
            });
        }
    },
    created: function () {
        if (this.$route.query.alert) {
            this.alert = this.$route.query.alert;
        }
        this.BuscaUsuario();
    },
    updated: function () {
        this.BuscaUsuario();
    },
    computed: {
        orderedUsers: function () {
            return _.orderBy(this.usuarios, 'nome')
        }
    },
    components: {
        Alert
    }
}
</script>
<style scoped>

</style>