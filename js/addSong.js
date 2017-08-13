console.log("addSongs.js, YO!");

{
let submitSong = document.getElementById("submitSong");
let songName = document.getElementById("songName");
let artist = document.getElementById("artist");
let albumName = document.getElementById("albumName");
let genre = document.getElementById("genre");
let addedSongsHTML = document.getElementById("addedSongs");

submitSong.addEventListener("click", addSong);
        var addedSongs = [];

        function addSong(userInput) {
            addedSongsHTML.innerHTML = "";
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
                addedSongsHTML.innerHTML += 
                                    `<li>
                                    <div id="${index}" class="oneSong">
                                    <h1>${userSong}</h1>
                                    <p>${userArtist} | ${userAlbum} | ${userGenre}</p>
                                    <button class="delBtn">DELETE</button>
                                    </div></li>`
    
            })
            $(".delBtn").on("click", function(){
                $(this).parent().parent().remove()
            });
            
        };


}