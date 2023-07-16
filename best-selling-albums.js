let bestSellingAlbums = [
  {
      artist: "Michael Jackson",
      title: "Thriller",
      year: 1982,
      genres: ["pop", "post-disco", "funk", "rock"],
      sale: 70000000,
  },
  {
      artist: "AC/DC",
      title: "Back in Black",
      year: 1980,
      genres: ["hard rock"],
      sale: 50000000,
  },
  {
      artist: "Whitney Houston",
      title: "The Bodyguard",
      year: 1992,
      genres: ["r&b", "soul", "pop", "soundtrack"],
      sale: 45000000,
  },
  {
      artist: "Pink Floyd",
      title: "The Dark Side of the Moon",
      year: 1973,
      genres: ["progressive rock"],
      sale: 45000000,
  },
  {
      artist: "Eagles",
      title: "Their Greatest Hits (1971 - 1975)",
      year: 1976,
      genres: ["country rock", "soft rock", "folk rock"],
      sale: 44000000,
  },
  {
      artist: "Eagles",
      title: "Hotel California",
      year: 1976,
      genres: ["soft rock"],
      sale: 42000000,
  },
  {
      artist: "Shania Twain",
      title: "Come On Over",
      year: 1997,
      genres: ["country", "pop"],
      sale: 40000000,
  },
  {
      artist: "Fleetwood Mac",
      title: "Rumours",
      year: 1977,
      genres: ["soft rock"],
      sale: 40000000,
  },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE

// task 1 average sale
let averageSale = 0;
for (let i of bestSellingAlbums) {
    averageSale += i.sale;
}
averageSale /= bestSellingAlbums.length;
console.log(averageSale);

let currentYear = new Date().getFullYear();
// task 2 average age
let averageAge = 0;
for (let i of bestSellingAlbums) {
    averageAge += currentYear - i.year;
}
averageAge /= bestSellingAlbums.length;
console.log(averageAge);

// task 3 
let newestAlbum;
let oldestAlbum;
let newestYear = bestSellingAlbums[0].year;
let oldestYear = bestSellingAlbums[0].year;
for (let i of bestSellingAlbums) {
    if (i.year > newestYear) {
        newestAlbum = i;
        newestYear = i.year
    }
    if (i.year < oldestYear) {
        oldestAlbum = i;
        oldestYear = i.year;
    }
}
console.log("Newest album is: " + newestAlbum.title + ", and the oldest album is: " + oldestAlbum.title);

// shorter code 
// let newestAlbum = bestSellingAlbums.reduce((a, b) => (a.year > b.year) ? a : b);
// let oldestAlbum = bestSellingAlbums.reduce((a, b) => (a.year < b.year) ? a : b);

// task 4 albums of eagles
let albumsOfEagles = {};
albumsOfEagles["isBothSoftRock"] = true;
let sales = 0;
for (let i of bestSellingAlbums) {
    if (i.artist === "Eagles") {
        sales += i.sale;
    if (!i.genres.includes("soft rock") && albumsOfEagles.isBothSoftRock) {
        albumsOfEagles.isBothSoftRock = false;
    }
    }
}
albumsOfEagles["sales"] = sales;
console.log(albumsOfEagles);


// task 5 ilikeit
for (let i of bestSellingAlbums){
    if (i.year > 1976) {
        i["iLikeIt"] = true;
    } else {
        i["iLikeIt"] = false;
    }
}


// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
  {name: "averageSale", content: averageSale, type: "number"},
    {name: "averageAge", content: averageAge, type: "number"},
    {name: "newestAlbum", content: newestAlbum, type: "object"},
    {name: "oldestAlbum", content: oldestAlbum, type: "object"},
    {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
  ]
} catch (error) {
  toExport = {error: error.message}
}

export {toExport};
