console.log("ShowMoreButton.js, yo!");

$("#showMore-btn").on("click", function(){
    getJSON("data/music2.json")
    .then(Songs.showSongs)
    .catch(function(e){
    console.log(e);
    })
});


    
   
