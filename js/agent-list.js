Vue.use(httpVueLoader);

new Vue({
    el: '#app_offline_proxy_report',
    components: {
        'agent-list': 'url:./js/components/agent-list.vue', 
    }
});

