new Vue({
    el: '#app_change_account_history',
    components: {
        'cash-flow-list': httpVueLoader('./src/components/CashFlow/cash-flow-list.vue') 
    }
});

