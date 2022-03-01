console.log('Vue ok', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        albums: []
    },
    mounted() {
        axios.get('http://localhost/esercizi_php/php-ajax-dischi/api/albums').then(res => {
            this.albums = res.data;
        }).catch(err => { console.error(err) })
    }
});