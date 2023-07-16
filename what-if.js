// WRITE YOUR CODE BELOW THIS LINE

let favMovies = [{
	"title":"The Godfather",
	"year":1972,
	"rating":9.2,
	"description":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
	"directors":["Francis Ford Coppola"],
	"writers":["Mario Puzo", "Francis Ford Coppola"],
	"stars":["Marlon Brando", "Al Pacino", "James Caan"],
	"genres":["Crime", "Drama"]
},
{
	"title":"Fight Club",
	"year":1999,
	"rating":8.8,
	"description":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
	"directors":["David Fincher"],
	"writers":["Chuck Palahniuk", "Jim Uhls"],
	"stars":["Brad Pitt", "Edward Norton", "Meat Loaf"],
	"genres":["Drama"]
},
{
	"title":"Se7en",
	"year":1995,
	"rating":8.6,
	"description":"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
	"directors":["David Fincher"],
	"writers":["Andrew Kevin Walker"],
	"stars":["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
	"genres":["Crime", "Drama", "Mystery"]
},
{
	"title":"American Psycho",
	"year":2000,
	"rating":7.6,
	"description":"A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
	"directors":["Mary Harron"],
	"writers":["Bret Easton", "EllisMary Harron", "Guinevere Turner"],
	"stars":["Christian Bale", "Justin Theroux", "Josh Lucas"],
	"genres":["Crime", "Drama", "Horror"]
}]

// task 1 using for of loop
for (let i of favMovies) {
	console.log(i.title);
}

// task 2 using for loop
for (let i=0; i<favMovies.length; i++) {
	console.log(favMovies[i].title);
}

// task 3 average rate
let totalRate = 0;
for (let i of favMovies) {
	totalRate += i.rating;
}
let averageRate = totalRate / favMovies.length;
console.log(totalRate);

// task 4 newest movie
let newestMovie = favMovies[0];
for (let i of favMovies) {
	if (i.year > newestMovie.year) {
		newestMovie = i;
	}
}
console.log(newestMovie);

// task 5 add all titles and stars into a the string
let starsByMovies = "";
for (let i of favMovies){
	starsByMovies += " Title: " + i.title;
	for (let y of i.stars) {
		starsByMovies += " " + y;
	}
}
console.log(starsByMovies);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
