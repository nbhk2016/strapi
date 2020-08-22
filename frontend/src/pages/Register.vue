<template>
	<Layout>
		<div>
			<h1>Регистрация</h1>
			<p><input type="text" placeholder="Логин" v-model="reg.username"></p>
			<p><input type="text" placeholder="Имя" v-model="reg.name"></p>
			<p><input type="text" placeholder="Email" v-model="reg.email"></p>
			<p><input type="password" placeholder="Пароль" v-model="reg.password"></p>
			<p>
				<label>
    				Пчеловод
    				<input type="radio" name="role" value="beekeeper" v-model="reg.role">
   				</label>
   			</p>
   			<p>
   				<label>
   					Фермер
   					<input type="radio" name="role" value="farmer" v-model="reg.role">
   				</label>
   			</p>

   			<p v-if="reg.role == 'beekeeper'">
   				<input 
   					type="text"
   					placeholder="Количество улеев" 
   					v-model="reg.hive_amount">
   			</p>
			<p><button @click="sendAuth">Регистрация</button></p>
			<p v-if="regError">Что-то пошло не так.</p>
		</div>
	</Layout>
</template>

<script>
	import axios from 'axios'
	export default {
		data: () => ({
			reg: {
				username: null,
				name: null,
				email: null,
				password: null,
				role: null,
				hive_amount: null
			},

			regError: false
		}),

		methods: {
			sendAuth(){
				axios.post('http://localhost:1337/register', this.reg)
					.then(res => {
						localStorage.setItem('username', res.data.user.nickname)
						localStorage.setItem('jwt', res.data.jwt)

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