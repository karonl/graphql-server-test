<template>
	<div>
		<div class="tools">
			<router-link class="tab" to="/tabs/one">tabOne</router-link>
			<router-link class="tab" to="/tabs/two">tabTwo</router-link>
		</div>
		<div class="content">
	
		    	<keep-alive>
		        	<router-view></router-view>
		    	</keep-alive>
	    </div>
    </div>
</template><!--公用-->
<style type="text/css">
	.no-mode-fade-enter-active, .no-mode-fade-leave-active {
        transition: all 0.2s;
    }
    .no-mode-fade-enter, .no-mode-fade-leave-active {
        opacity: 0;
    }
    .no-mode-fade-enter {
        opacity: 0;
    }
    .no-mode-fade-leave-active {
        opacity: 1;
    }
	* {
		margin: 0;
		padding: 0;
	}
	.tools {
		overflow: hidden;
		width: 100%;
		background: #f2f2f2;
	}
	.tools .tab {
		float: left;
		color: #212121;
		height: 40px;
		line-height: 40px;
		width: 100px;
		text-align: center;
	}
	.inner {
		padding: 30px 80px;
	}
	p {
		color: #ffa726;
		display: inline;
	}
	.console {
		margin-top: 10px;
		padding: 5px;
		border: 1px solid #FF9800;
	}
</style>