// WRITE YOUR CODE BELOW THIS LINE
let favoriteBooks = [
    {"title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "isNewerThan2000":false,
    "age":74,
    "characters": ["Winston Smith", "Julia", "O'Brian", "Emmanuel Goldstein"]
    },
    {"title": "Lord of the Flies",
    "author": "William Golding",
    "year": 1954,
    "isNewerThan2000":false,
    "age":69,
    "characters": ["Jack", "Ralph", "Piggy", "Simon"]
    }];

// display titles
for (let i=0; i < favoriteBooks.length; i++) {
	console.log(favoriteBooks[i].title);
}

// display authors
for (let i=0; i < favoriteBooks.length; i++) {
	console.log(favoriteBooks[i].author);
}

// display title of the first book if the "isNewerThan2000" is true
if (favoriteBooks[0].isNewerThan2000) {
	console.log(favoriteBooks[0].title);
}

if (favoriteBooks[1].isNewerThan2000) {
	console.log(favoriteBooks[0].title);
}

// display title if the book is never than 2000
for (let i=0; i<favoriteBooks.length; i++){
	if (favoriteBooks[i].isNewerThan2000) {
		console.log("This book is newer than 2000: " + favoriteBooks[i].title);
	} else {
		console.log("This book is older than 2000: " + favoriteBooks[i].title);
	}
}

// alternative forEach solution

// favoriteBooks.forEach(book => {
//     let message = book.isNewerThan2000
//         ? `This book is newer than 2000: ${book.title}`
//         : `This book is older than 2000: ${book.title}`;
//     console.log(message);
// });

// check reverse situation

for (let i=0; i<favoriteBooks.length; i++){
	if (!favoriteBooks[i].isNewerThan2000) {
		console.log("This book is older than 2000: " + favoriteBooks[i].title);
	} else {
		console.log("This book is newer than 2000: " + favoriteBooks[i].title);
	}
}

// check that the year is greater than 2000

for (let i=0; i<favoriteBooks.length; i++){
	if (favoriteBooks[i].year > 2000) {
		console.log("This book is newer than 2000: " + favoriteBooks[i].title);
	} else {
		console.log("This book is older than 2000: " + favoriteBooks[i].title);
	}
}

// using for of loop 

for (let i of favoriteBooks){
	if (i.year > 2000) {
		console.log("This book is newer than 2000: " + i.title);
	} else {
		console.log("This book is older than 2000: " + i.title);
	}
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favoriteBooks", content: favoriteBooks, type: "array"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
