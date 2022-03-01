console.log('Vue ok', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        albums: []
    },
    mounted() {

    }
});