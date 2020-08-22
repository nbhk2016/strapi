<template>
	<Layout>
		<div>
			<h1>{{user.nickname}}</h1>
			<p>
				<span>Имя:</span>
				<span>{{user.name}}</span>
			</p>
			<p>
				<span>Email:</span>
				<span>{{user.email}}</span>
			</p>
			<p>
				<span>Тип аккаунта:</span>
				<span>{{user.role}}</span>
			</p>
		</div>
		<div>
			<h2>Мои объявления</h2>
			<publication-item></publication-item>
			
		</div>
	</Layout>
</template>

<script>
	import axios from 'axios'
	import PublicationItem from '~/components/PublicationItem.vue'

	export default {
		mounted() {
			axios.get('http://localhost:1337/users/me', {
      			headers: {
        			Authorization: `Bearer ${localStorage.jwt}`,
      			}
    		})
    			.then(res => this.user = res.data.user)
		},

		data: () => ({
			user: new Object()
		}),

		components: {

		}
		
	}
</script>