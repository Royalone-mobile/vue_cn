new Vue({
    el: '#app_personal_report',
    components: {
        'bet-log-list': httpVueLoader('./src/components/BetLog/bet-log-list.vue') 
    }
});

