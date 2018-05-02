
//import bet_log_list from './components/bet_log_list.vue'


// Vue.component('bet_log_list', require('components/bet_log_list'))
// new Vue({
//     bet_log_list,
// });

// Vue.component('bet_log_list', bet_log_list);

// Vue.component('bet-log-list', {
//     template: "<h1>12323</h1>",
// });

// var one = new Vue({
//     el: '#app_personal_report'
// });

Vue.use(httpVueLoader);

new Vue({
    el: '#app_personal_report',
    components: {
        'bet-log-list': 'url:./js/components/bet-log-list.vue', 
    }
});

