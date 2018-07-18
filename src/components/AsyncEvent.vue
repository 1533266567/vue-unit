<template>
	<div>
		<h1>
			异步行为监测
		</h1>
		<button @click="buttonClick">点击增加</button>
		<span>{{value}}</span>
		<p>一秒后增加</p>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value: 0
			}
		},	
		methods:{
			buttonClick() {
				setTimeout(()=>{
					this.value++;
				},1000)
			}
		}
	}
</script>