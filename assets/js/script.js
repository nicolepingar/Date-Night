var videoGameApiKey = "8e16f8ff07d448cca1ccbdac1846964d"
var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d"
var glassSelection = $(".glass-select")
var mealSelect = $(".meal-select")
var cuisineSelect = $(".cuisine-select")
var genreSelect = $(".genre-select")
var formSubmitButton = $(".button")



console.log(glassSelection.val());
console.log(mealSelect.val());
console.log(cuisineSelect.val());
console.log(genreSelect.val());
// fetching full games list database


// make array for genre and for platform options


// fetch video game Api data by game ID by digits and store in local storage

// fetch drink Api data and store in local storage

// fetch recipe/restaurant api data and store in local storage

// function to change display properties of cards from hidden to visible 



function FormSubmit(event) {
    event.preventDefault();
    var glass = glassSelection.val();
    var meal = mealSelect.val()
    var cuisine = cuisineSelect.val();
    var genre = genreSelect.val();

    selectionValues(glass, meal, cuisine, genre)

}

function selectionValues(glass, meal, cuisine, genre) {
    var drinkDB = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g"
    function getDrink(drinkDB) {
        fetch(drinkDB)
            .then(function (response) {

                return response.json();
            })
            .then(function (data) {
                for (var i = 0; i < data.drinks.length; i++) {
                    console.log(data.drinks[i].strGlass);
                }
            })
    }
    getDrink(drinkDB);
}


formSubmitButton.on("click", FormSubmit)




// var mealDB = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
// function getMeal(mealDB) {
//     fetch(mealDB)
//         .then(function (response) {

//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             // for (var i = 0; i < data.meals.length; i++) {
//             //     console.log(data.meals[i].strArea);
//             // }
//         })
// }
// getMeal(mealDB);




// var videoGame = "https://api.rawg.io/api/genres?key=8e16f8ff07d448cca1ccbdac1846964d"
// function getVid(videoGame) {
//     fetch(videoGame)
//         .then(function (response) {

//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);

//             for (var i = 0; i < data.results.length; i++) {
//                 console.log(data.results[i].name);
//             }

//         })
// }
// getVid(videoGame);







// var glassOptions = [
//     "Cocktail glass",
//     "Shot glass",
//     "Martini Glass",
//     "Highball Glass",
//     "Collins Glass",
//     "Old-fashioned glass",
//     "Whiskey sour glass",
//     "Champagne Flute",
//     "Margarita glass",
//     "Beer pilsner",
//     "Pint glass",
//     "Coupe Glass",
//     "Beer mug"]

// var mealOptions = [
//     "Beef",
//     "Vegetarian",
//     "Chicken",
//     "Seafood",
//     "Dessert",
//     "Pork",
//     "Pasta",
// ]

// var cuisineOptions = [
//     "British",
//     "Indian",
//     "American",
//     "Mexican",
//     "French",
//     "Chinese",
//     "Italian",
//     "Dutch",
// ]