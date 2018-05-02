new Vue({
    el: '#root-app',
    components: {
        'home': httpVueLoader('./src/containers/Home/home.vue')
    }
});
