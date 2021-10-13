Vue.config.devtools = true;

const app = new Vue({
    el: '#root',

    data:  {
        url: '/php-ajax-dischi/ajax-dischi-2/server.php',
        songs: [],
        genres: [],
        genre: '',
        
    },
    created() {
        axios
            .get(this.url)
            .then (res => {
                this.songs = res.data;
            });
    }
    
});
