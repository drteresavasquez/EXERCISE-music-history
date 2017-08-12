console.log("songs.js, yo!");

let output = document.getElementById("songs");
let songName = document.getElementById("songName");
let artist = document.getElementById("artist");
let albumName = document.getElementById("albumName");
let submitSong = document.getElementById("submitSong");
let genre = document.getElementById("genre");
let showMore = document.getElementById("showMore-btn");

submitSong.addEventListener("click", Songs.addSong);
showMore.addEventListener("click", function(){
        getJSON("data/music2.json")
        .then(Songs.showSongs)
        .catch(function(e){
        console.log(e);
        })
    });