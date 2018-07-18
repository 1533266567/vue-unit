<template>
	<div>
		<h1>
			事件监测
		</h1>
		<button @click="buttonClick">点击</button>
		<input v-model="value" name="">
	</div>
</template>
<script>
	export default {
		data() {
			return {
				message: '事件点击测试',
				value: 1
			}
		},	
		methods:{
			buttonClick() {
				this.value++;
			}
		}
	}
</script>