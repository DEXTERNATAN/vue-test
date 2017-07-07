<template>
	<main>
        <div class="page-header">
            <div class="container">
				<h1 class="">Detalhes do usuário</h1>
			</div>
		</div>
        <div class="container">
            <div class="box">
				<ul class="list-group">
					<li class="list-group-item">
						<span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{usuario.nome}}</li>
				</ul>
				<router-link class="btn btn-default" to="/">
					<span class="fa fa-chevron-left" aria-hidden="true"></span>
					Voltar
				</router-link>
				<router-link class="btn btn-primary" v-bind:to="'/editarUsuario/' + usuario.id">
					<span class="fa fa-person" aria-hidden="true"></span>
					Editar
				</router-link>
				<button class="btn btn-danger" v-on:click="DeletaUsuario(usuario.id)">
					<span class="fa fa-times" aria-hidden="true"></span>
					Apagar
				</button>
			</div>
		</div>
	</main>
</template>

<script>

import axios from 'axios';
export default {
	name: 'detalheUsuario',
	data: () => ({	
			usuario: '',
			errors: []
	}),
	methods: {
		BuscaUsuario(id) {
			axios.get('http://localhost:3000/api/usuarios/' + id)
				.then(response => {
					this.usuario = response.data;
				})
				.catch(e => {
					this.errors.push(e)
				})
		},
		DeletaUsuario() {
			axios.delete('http://localhost:3000/api/usuarios/' + this.$route.params.id).then(response => {
				console.log(response.data);
				this.$router.push({ path: '/', query: {alert: 'Usuário excluído com sucesso!'} });
			});
		},
	},
	created() {
		this.BuscaUsuario(this.$route.params.id);
	}

}
</script>
<style scoped>
</style>