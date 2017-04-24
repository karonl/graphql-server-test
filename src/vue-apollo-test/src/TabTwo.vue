<template>
<div class="inner">{{ loadword }}</div>
</template>
<script>
	import gql from 'graphql-tag';
	export default {
		data(){return {
			loadword:'loading...'
		}},
		apollo: {
			loadword: gql`{loadword:hello{content}}` // 可以从tab2进入，读取并且缓存到全局，再切入tab1
		},
		activated(){
			console.log('two');

		}
	}
</script>
<style scoped>
	
</style>