{
    var songs = [];
    
    Songs.addSong = (userInput) => {
        let userSong = songName.value;
        let userArtist = artist.value;
        let userAlbum = albumName.value;
        let userGenre = genre.value;
    
        songs.push({
            Name: userSong,
            Artist: userArtist,
            Album: userAlbum,
            Genre: "Rock"
        });
        console.log("songs", songs);
    
        output.innerHTML += 
                `
                <h1>${userSong}</h1>
                <p>${userArtist} | ${userAlbum} | ${userGenre}</p>
                `
    
    };

// <div id="song--${index}">
// <button id="button--${index}">DELETE</button>
//                 </div>


}