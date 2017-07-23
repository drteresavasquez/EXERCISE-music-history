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

songs.unshift("Lose Yourself - by Eminem");
songs.push("Cherish the day - by Sade");


	for (let i = 0; i < songs.length; i++){
	let fixSongs = songs[i].replace("*", "").replace("@", "").replace("!", "").replace("(", "").replace(">", "-");
	let title = fixSongs.split("-", 1);

		output.innerHTML += `<h1>${title}</h1>
			<p>${fixSongs}</p>`


	console.log("replace", fixSongs);
	}