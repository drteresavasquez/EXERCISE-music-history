console.log("ShowMoreButton.js, yo!");

let showMore = document.getElementById("showMore-btn");

showMore.addEventListener("click", function(){
    getJSON("data/music2.json")
    .then(Songs.showSongs)
    .catch(function(e){
    console.log(e);
    })
});


    
   
