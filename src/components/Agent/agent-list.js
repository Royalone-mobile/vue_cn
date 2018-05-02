new Vue({
    el: '#app_offline_proxy_report',
    components: {
        'agent-list': httpVueLoader('./src/components/Agent/agent-list.vue')
    }
});
