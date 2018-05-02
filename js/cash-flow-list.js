Vue.use(httpVueLoader);

new Vue({
    el: '#app_change_account_history',
    components: {
        'cash-flow-list': 'url:./js/components/cash-flow-list.vue', 
    }
});

