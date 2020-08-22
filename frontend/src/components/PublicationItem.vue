<template>
	<div class="card">
		<h3><a v-bind:href="href">{{pub.id}}.{{pub.title}}</a></h3>
		<p>{{pub.description}}</p>
		<p>Откликов: {{pub.responds_amount}}</p>
		<p style="color: lightgray;">{{pub.owner}}</p>
	</div>
</template>

<script>
	export default{
		name: 'publication-item',
		props: ['pub']
	}
</script>