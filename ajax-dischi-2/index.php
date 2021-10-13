<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <div id="root">
        <header class="header">
            <div class="logo__img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Spotify_icon.png" alt="logo spotify">
            </div>
            <div class="selection">
                <select name="selection__genre" id="selectionGenre">
                    <option value="All">All</option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                </select> 
            </div>
        </header>
    
        <main class="main">
            <div  class="container clearfix">
                <div class='card' v-for="(album, index) in songs" :key="index">
                    <div class='card__img'>
                        <img :src='album.poster' alt=' '>
                    </div>
                    <div class='card__info'>
                        <div class='card__title'>
                            <h3>{{album.title}}</h3>
                        </div>
                        <div class='card__author'>
                            <h4>{{album.author}}</h4>
                            <h4>{{album.year}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    


    
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"></script>
    <script src="./main.js"></script>
</body>
</html>