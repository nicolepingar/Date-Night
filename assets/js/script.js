var videoGameApiKey = "8e16f8ff07d448cca1ccbdac1846964d"
var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d"
var glassSelection = $(".glass-select")
var mealSelect = $(".meal-select")
var cuisineSelect = $(".cuisine-select")
var genreSelect = $(".genre-select")
var formSubmitButton = $(".button")
var drinkResult = $(".drink-result")
var mealResult = $(".meal-result")
var gameResult = $(".game-result")


// var mealDB = "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
// function getMeal(mealDB) {
//     fetch(mealDB)
//         .then(function (response) {

//             return response.json();
//         })
//         .then(function (data) {
//             // console.log(data);

//             for (var i = 0; i < data.meals.length; i++) {
//                 console.log(data.meals[i].strArea);
//             }
//         })
// }
// getMeal(mealDB);


// var mealDB = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side"
// function getMeal(mealDB) {
//     fetch(mealDB)
//         .then(function (response) {

//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })

// }
// getMeal(mealDB);

//     for (var i = 0; i < data.meals.length; i++) {
//         //console.log(data.meals[i].strArea);

//         if (data.meals[i].strArea === "British" && data.meals[i].strCategory === "Beef") {
//         console.log(data.meals[i].strMeal);
//     }

//     }
// })

function FormSubmit(event) {
    event.preventDefault();
    var glass = glassSelection.val();
    var glass_ = glass.replace(" ", "_");
    var meal = mealSelect.val();
    var cuisine = cuisineSelect.val();
    var genre = genreSelect.val();

    selectionValues(glass_, meal, cuisine, genre);
}

function selectionValues(glass_, meal, cuisine, genre) {
    var drinkDB = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass_
    function getDrink(drinkDB) {
        fetch(drinkDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexDrink = Math.floor(Math.random() * data.drinks.length)
                var drinkName = data.drinks[indexDrink].strDrink
                var drinkNameEl = $("<h4>")
                drinkNameEl.text(drinkName)
                drinkResult.append(drinkNameEl)
                var drinkPic = data.drinks[indexDrink].strDrinkThumb
                var drinkPicEl = $("<img>", { src: drinkPic, id: "drinkId", width: 250 })
                drinkResult.append(drinkPicEl)
            })
    }

    var mealDB = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + meal
    function getMeal(mealDB) {
        fetch(mealDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexMeal = Math.floor(Math.random() * data.meals.length)
                var mealID = data.meals[indexMeal].idMeal
                console.log(mealID);
            })

    }
    





    var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d&genres=" + genre.toLowerCase();
    function getVid(videoGame) {
        fetch(videoGame)
            .then(function (response) {

                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexGames = Math.ceil(Math.random() * 19)
                var gameName = data.results[indexGames].name;
                var gameNameEl = $("<h4>")
                gameNameEl.text(gameName)
                gameResult.append(gameNameEl)
                var gamePic = data.results[indexGames].background_image;
                var gamePicEl = $("<img>", { src: gamePic, id: "gameId", width: 100 })
                gameResult.append(gamePicEl)

            })
    }
    getDrink(drinkDB);
    getMeal(mealDB);
    getVid(videoGame);
}
formSubmitButton.on("click", FormSubmit)





const card = document.querySelector('.card__inner');

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});