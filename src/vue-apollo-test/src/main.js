import Vue from 'vue'
import VueRouter from 'vue-router';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import VueApollo from 'vue-apollo';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:1081/graphql',
    transportBatching: true,
});

const apolloClient = new ApolloClient({
	addTypename: true,
    connectToDevTools: true,
    networkInterface: networkInterface,
    dataIdFromObject: r => r.id,
    queryDeduplication: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);

const TabOne = resolve => { require.ensure(['./TabOne.vue'], () => {
    resolve(require('./TabOne.vue')); },'group-tabs')};
const TabTwo = resolve => { require.ensure(['./TabTwo.vue'], () => {
    resolve(require('./TabTwo.vue')); },'group-tabs')};
const TabController = resolve => { require.ensure(['./TabController.vue'], () => {
    resolve(require('./TabController.vue')); },'group-tabs')};

const router = new VueRouter({ // 二级路由
	routes :[
	    { path: '/', redirect: '/tabs/one'},
	    { path: '/tabs', component: TabController, redirect: '/tabs/one', children: [
	    	{ path: 'one', component: TabOne },
	    	{ path: 'two', component: TabTwo },
	    ]}
	]
});

Vue.use(VueRouter);
new Vue({router, apolloProvider}).$mount('#app');