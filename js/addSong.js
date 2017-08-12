console.log("addSongs.js, YO!");

{
let submitSong = document.getElementById("submitSong");
let songName = document.getElementById("songName");
let artist = document.getElementById("artist");
let albumName = document.getElementById("albumName");
let genre = document.getElementById("genre");
let songsDiv = document.getElementById("ulSongs");

submitSong.addEventListener("click", addSong);
    
    var addedSongs = [];
        function addSong(userInput) {
            let userSong = songName.value;
            let userArtist = artist.value;
            let userAlbum = albumName.value;
            let userGenre = genre.value;
            
            addedSongs.push({
                Name: userSong,
                Artist: userArtist,
                Album: userAlbum,
                Genre: userGenre
            });
            console.log("addedSongs", addedSongs);
    
            addedSongs.forEach(function(id, index){
                songsDiv.innerHTML += 
                                    `<li><div id="${index}" class="oneSong">
                                    <h1>${userSong}</h1>
                                    <p>${userArtist} | ${userAlbum} | ${userGenre}</p>
                                    <button id="delBtn--${index}">DELETE</button>
                                    </div></li>`
    
            })
            
        };


}