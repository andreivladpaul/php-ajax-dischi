Vue.config.devtools = true;

const app = new Vue({
    el: '#root',

    data:  {
        url: 'http://localhost/php-ajax-dischi/ajax-dischi-2/server.php',
        songs: [],
        genres: [],
        genre: '',
        
    },
    created() {
        axios
            .get(this.url)
            .then (res => {
                this.songs = res.data;
                for(let i = 0; i < res.data.length; i++) {
                    this.genre = res.data[i].genre;
                    if(!this.genres.includes(this.genre))
                    this.genres.push(this.genre);
                }
            });
    }
    
});
