<template>
	<div>
		<h1>
			Vuex监测
		</h1>
		<button @click="buttonClick">点击事件</button>
		<span>{{count}}</span>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				
			}
		},	
		computed: mapGetters([
		    'count',
		]),
		mounted() {

		},
		methods:{
			buttonClick() {
				this.$store.commit('increment');
			}
		}
	}
</script>