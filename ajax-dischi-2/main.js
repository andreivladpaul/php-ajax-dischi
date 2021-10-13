Vue.config.devtools = true;

const app = new Vue({
    el: '#root',

    data:  {
        url: 'http://localhost/php-ajax-dischi/ajax-dischi-2/server.php',
        songs: [],
        genres: []
        
    },
    created() {
        axios
            .get(this.url)
            .then (res => {
                this.songs = res.data;
                console.log(this.songs);
            })
    }
    
});
