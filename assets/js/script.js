var videoGameApiKey = "8e16f8ff07d448cca1ccbdac1846964d"
var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d"

// fetching full games list database
fetch("https://rawg-video-games-database.p.rapidapi.com/games?key=8e16f8ff07d448cca1ccbdac1846964d", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "219a7681ffmshc09cafc76d4e5bcp1a22eejsn08134a22ca7e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

function getVid(videoGame) {
    fetch(videoGame)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
            console.log(data[i].platforms);
            console.log(data[i].genre);
        }
        });
}
getVid(videoGame);


// fetching genre list database
// fetch("https://rawg-video-games-database.p.rapidapi.com/genres?key=8e16f8ff07d448cca1ccbdac1846964d", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
// 		"x-rapidapi-key": "219a7681ffmshc09cafc76d4e5bcp1a22eejsn08134a22ca7e"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// fetching platform list database
// fetch("https://rawg-video-games-database.p.rapidapi.com/platforms?key=8e16f8ff07d448cca1ccbdac1846964d", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
// 		"x-rapidapi-key": "219a7681ffmshc09cafc76d4e5bcp1a22eejsn08134a22ca7e"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// make array for genre and for platform options


// fetch video game Api data by game ID by digits and store in local storage

// fetch drink Api data and store in local storage

// fetch recipe/restaurant api data and store in local storage

// function to change display properties of cards from hidden to visible 

