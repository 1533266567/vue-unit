<template>
	<div>
		<h1>
			{{message}}
		</h1>	
		<router-link to="/event" class="padding">事件监测</router-link>   
		<router-link to="/vuexevent" class="padding">Vuex事件监测</router-link>
		<router-link to="/asyncevent">异步行为监测</router-link>
	</div>
</template>
<style lang="css" scoped>
	.padding {
		padding-right: 20px;
	}
</style>
<script>
	export default {
		data() {
			return {
				message: 'My First UnitTest'
			}
		},	
	}
</script>