<template>
<div class="inner">
	<div>network-only : <p>{{ hello }}</p></div>
	<div>cache-only : <p>{{ world }}</p></div>
	<div class="console">
		<p>console in my brower: </p><br/>
		hello call result<br/>
		world call result<br/>
    	world call result<br/>
    </div>
</div>
</template>
<script>
	import gql from 'graphql-tag';
	export default {
		data(){return {
			hello:'loading...',
			world:'loading...'
		}},
		apollo:{
			hello: {query: gql`{hello{content}}`, fetchPolicy:'network-only', 
				result(){
					console.log('hello call result')
					this.reqformcache();
				}
			}
		},
		methods:{
      		reqformcache: function() {
      			this.$apollo.option('world', {query:gql`{world:hello{content}}`, fetchPolicy: 'cache-only', 
      				result(data){
      					console.log('world call result')
      				}
      			});
      		}
		}
	}
</script>

