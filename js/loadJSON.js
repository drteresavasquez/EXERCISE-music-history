console.log("loadJSON.js, YO!");
{
var songData = {};
var songID = "";

function getJSON(url){
    return new Promise(function(resolve, reject){
        var loadSongs = new XMLHttpRequest();

        loadSongs.addEventListener("load", loadSongsComplete);
        loadSongs.addEventListener("error", loadSongsFailed);

        function loadSongsComplete(event){
            console.log("event", event);
            if (event.target.status === 200) {
            console.log("The data loaded, Yo!");
            songData = JSON.parse(event.target.responseText);
            // console.log("The Data", songData);
            Songs.showSongs(songData);
            }else {
                console.log("Check the spelling of your file, Yo!");
            }
        };

        function loadSongsFailed(event){
            console.log("Yo! Your data failed!");
        };

        loadSongs.open("GET", url);
        loadSongs.send();
 });
};

getJSON("data/music1.json")
    .then(Songs.showSongs)
    .catch(function(e){
        console.log(e);
    });

    let songsDiv = document.getElementById("songs");
    
    Songs.showSongs = (songs, item) => {
        indSongs = Object.keys(songData.songs);
        // console.log(indSongs);
        indSongs.forEach((id, index) => {
            songsDiv.innerHTML += 
                    `<div id="song--${index}" class="oneSong"><h1>${songData.songs[id].Name}</h1>
                    <p>${songData.songs[id].Artist} | ${songData.songs[id].Album} | ${songData.songs[id].Genre}</p>
                    <button id="delBtn--${index}">DELETE</button>
                    </div>`
            })

};

Songs.deleteSong = function(id) {
    delete `song--[id]`;
    // return songData;
  };

  songsDiv.addEventListener('click', function(event) {
   
    Songs.deleteSong(event.target.id);
    songsDiv.innerHTML = '';
    // Chatty.rewriteMessagesAfterDelete(Chatty.getAllMessages());
  });









//     Songs.waitForDOM = (input) => {
// 		for (var i = 0 ; i < input.length; i++){
//             input[i].addEventListener("click", () => {
//                 songID = event.currentTarget.id;
// 			});
//         };
//     };
}