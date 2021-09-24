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
    // localStorage.clear();

    var glass = glassSelection.val().replace(" ", "_");
    var meal = mealSelect.val();
    var cuisine = cuisineSelect.val();
    var genre = genreSelect.val();
// set values to local storage
    localStorage.setItem("glassSelectValue", glass);
    localStorage.setItem("mealSelectValue", meal);
    localStorage.setItem("cuisineSelectValue", cuisine);
    localStorage.setItem("genreSelectValue", genre);
// removed params for selectionVal because were storing and geting from storage instead
    // check();
    selectionValues();
    return;
}


// glassSelection.on( "change", function() {
//         var glass = glassSelection.val().replace(" ", "_"); 
//         console.log(glass);
//         localStorage.setItem("glassSelectValue", glass);
//         return;});
    
// mealSelect.on( "change", function() {
//         var meal = mealSelect.val();
//         localStorage.setItem("mealSelectValue", meal);
//         return;});
    
// cuisineSelect.on( "change", function() {
//         var cuisine = cuisineSelect.val();
//         localStorage.setItem("cuisineSelectValue", cuisine);
//         return;});
    
// genreSelect.on( "change", function() {
//         var genre = genreSelect.val();
//         localStorage.setItem("genreSelectValue", genre);
//         return;});

// function check() {
//     console.log(glassSelection.value)
//     console.log(mealSelect.value)
//     console.log(cuisineSelect.value)
//     console.log(genreSelect.value)
        
//     localStorage.setItem("glassSelectValue", glass);
//     localStorage.setItem("mealSelectValue", meal);
//     localStorage.setItem("cuisineSelectValue", cuisine);
//     localStorage.setItem("genreSelectValue", genre);
// }    

function selectionValues() {
    // added in local storage get
    var glass = localStorage.getItem("glassSelectValue");
    var drinkDB = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass
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
                return;
            })
    }

     // added in local storage get
    var meal = localStorage.getItem("mealSelectValue");
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
                return;
            })

    }
    



 // added in local storage get
    var genre = localStorage.getItem("genreSelectValue");
    if (genre) {
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
                return;

            })
    }
    getDrink(drinkDB);
    getMeal(mealDB);
    getVid(videoGame);}
}
formSubmitButton.on("click", FormSubmit)



// card js THIS
const card = $(".card__container");

card.on('click', '.card__inner', function (){
    $(this).toggleClass('is-flipped');
});
