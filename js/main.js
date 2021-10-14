Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        filter: [],
        selected: 'All',
        genre: [
            'All',
            'Jaxx',
            'Metal',
            'Pop',
            'Rock'
        ]
    },
    created: function() {
        this.getGenre();
    },
    methods: {
        getGenre() {
            axios.get('api/server.php?genre=' + this.selected). //se lo scrivo direttamente come api/server faccio una chiamata relativa infatti api/server sta sullo stesso livello del mio index
            then((res) => {
                return this.filter = res.data;
            })
        }
    },
    
});
