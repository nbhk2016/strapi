<template>
	<Layout>
		<div>
			<h1>Вход</h1>
			<p><input type="text" placeholder="Логин" v-model="login.identifier"></p>
			<p><input type="password" placeholder="Пароль" v-model="login.password"></p>
			<p><button @click="sendAuth">Войти</button></p>
			<p v-if="loginError">Неправильный логин или пароль.</p>
		</div>
	</Layout>
</template>

<script>
	import axios from 'axios'
	export default {
		data: () => ({
			login: {
				identifier: null,
				password: null,
			},

			loginError: false
		}),

		methods: {
			sendAuth(){
				axios.post('http://localhost:1337/login', this.login)
					.then(res => {
						localStorage.setItem('username', response.data.user.username)
						localStorage.setItem('jwt', response.data.jwt)

						location.href = '/personal/'
					})
					.catch(error => {
						this.loginError = true
					})
			}
		},

		mounted(){
			if (localStorage.jwt) 
				location.href = '/personal/'
		}
	}
</script>