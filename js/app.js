import Bet_log_list from 'components/bet_log_list.vue'


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

new Vue({
    'el': '#app_personal_report',
    'template': Bet_log_list,
    'components': { Bet_log_list }
});