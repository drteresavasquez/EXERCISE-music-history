console.log("addSongs.js, YO!");

{

$("#submitSong").on("click", addSong);

        var addedSongs = [];

        function addSong(userInput) {
            addedSongsHTML.innerHTML = "";
            let userSong = $('#songName').val();
            let userArtist = $('#artist').val();
            let userAlbum = $('#albumName').val();
            let userGenre = $('#genre').val();
            
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