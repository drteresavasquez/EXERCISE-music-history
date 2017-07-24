console.log("songs.js, yo!");

// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.

let output = document.getElementById("songs");
let songName = document.getElementById("songName");
let artist = document.getElementById("artist");
let albumName = document.getElementById("albumName");
let submitSong = document.getElementById("submitSong");
let genre = document.getElementById("genre");

var songs = [];

songs.push({
	Name: "Legs",
	Artist: "ZZTop",
	Album: "Eliminator",
	Genre: "Rock"
});
songs.push({
	Name: "The Logical Song",
	Artist: "Supertramp",
	Album: "Breakfast in America",
	Genre: "Rock"
});
songs.push({
	Name: "Another Brick in the Wall",
	Artist: "Pink Floyd",
	Album: "The Wall",
	Genre: "Rock"
});
songs.push({
	Name: "Welcome to the Jungle ",
	Artist: "Guns & Roses",
	Album: "Appetite for Destruction",
	Genre: "Rock"
});
songs.push({
	Name: "Ironic",
	Artist: "Alanis Morisette",
	Album: "Jagged Little Pill",
	Genre: "Rock"
});
songs.unshift({
	Name: "Lose Yourself",
	Artist: "Eminem",
	Album: "Curtain Call",
	Genre: "Rock"
});
songs.push({
	Name: "Cherish the day",
	Artist: "Sade",
	Album: "Cherish",
	Genre: "Rock"
});

songs.forEach((song) => {
	output.innerHTML += `<h1>${song.Name}</h1>
			<p>${song.Artist} | ${song.Album} | ${song.Genre}</p>`
	});


submitSong.addEventListener("click", addSong);

function addSong(userInput){
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

	output.innerHTML += `<h1>${userSong}</h1>
			<p>${userArtist} | ${userAlbum} | ${userGenre}</p>`

};




// //this loop goes through the entire array and replaces funky characters with either another character or just takes it out completely.
// 	for (let i = 0; i < songs.length; i++){
// 	let fixSongs = songs[i].replace("*", "").replace("@", "").replace("!", "").replace("(", "").replace(">", "-");
// 	//this line was an experiment for me to see if I can split a string based on a word, character, etc. I was able to...the number tells the JS how many strings to put in the array it creates.
// 	let title = fixSongs.split("-", 1);

// 	//this outputs to the HTML how i want it to look. I haven't figured out how to slice up the item so that I can separate it into the various needs for the listing in the DOM.
// 		output.innerHTML += `<h1>${title}</h1>
// 			<p>${fixSongs}</p>`


// 	console.log("replace", fixSongs);
// 	}