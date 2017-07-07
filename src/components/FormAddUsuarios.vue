<template>
	<main>
	    <div class="page-header">
			<div class="container">
				<h1 class="">Novo Usuário</h1>
			</div>
		</div>
	    <div class="container">

			<Alert v-if="alert" v-bind:message="alert"></Alert>

			<div class="box">
				<form method="post" v-on:submit="addUsuario">
					<!-- <p>Detalhes do usuário</p> -->
					<div class="form-group">
						<label for="user">Nome</label>
						<input id="user" type="text" class="form-control" placeholder="Nome do usuário" v-model="usuario.nome">
					</div>
					<button type="submit" class="btn btn-primary" name="button">
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
	name: 'FrmCadastroUsuario',
	data: () => ({
		usuario: {},
		errors: [],
		alert: ''
	}),
	methods: {
		addUsuario(e) {
			if (!this.usuario.nome) {
				this.alert = 'Campo nome Obrigatório';
			} else {

				let novoUsuario = {
					nome: this.usuario.nome
				}

				axios.post('http://localhost:3000/api/usuarios/', novoUsuario)
					.then(response => {
						 this.$router.push({path: '/', query: {alert: 'Usuário cadastrado com sucesso'}});
					})
					.catch(e => {
						this.errors.push(e)
					})
				e.preventDefault();
			}
			e.preventDefault();
		}
	},
	components: {
		Alert
	}
}
</script>
<style scoped>

</style>