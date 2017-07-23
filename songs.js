console.log("songs.js, yo!");

// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.

let output = document.getElementById("songs");

var songs = [];

// songs.push({
// 	Name: "Legs",
// 	Artist: "Z*ZTop",
// 	Album: "Eliminator"
// });

songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//adding songs to the list
songs.unshift("Lose Yourself - by Eminem");
songs.push("Cherish the day - by Sade");

//this loop goes through the entire array and replaces funky characters with either another character or just takes it out completely.
	for (let i = 0; i < songs.length; i++){
	let fixSongs = songs[i].replace("*", "").replace("@", "").replace("!", "").replace("(", "").replace(">", "-");
	//this line was an experiment for me to see if I can split a string based on a word, character, etc. I was able to...the number tells the JS how many strings to put in the array it creates.
	let title = fixSongs.split("-", 1);

	//this outputs to the HTML how i want it to look. I haven't figured out how to slice up the item so that I can separate it into the various needs for the listing in the DOM.
		output.innerHTML += `<h1>${title}</h1>
			<p>${fixSongs}</p>`


	console.log("replace", fixSongs);
	}