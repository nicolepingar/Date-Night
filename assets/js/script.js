var videoGameApiKey = "8e16f8ff07d448cca1ccbdac1846964d"
var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d"
var glassSelection = $(".glass-select")
var mealSelect = $(".meal-select")
var genreSelect = $(".genre-select")
var formSubmitButton = $(".submit-button")
var drinkResult = $(".drink-result")
var mealResult = $(".meal-result")
var gameResult = $(".game-result")


function FormSubmit(event) {
    event.preventDefault();
    var glass = glassSelection.val().replace(" ", "_");
    var meal = mealSelect.val();
    var genre = genreSelect.val().replace(" ", "-");

    selectionValues(glass, meal, genre);
}


function selectionValues(glass, meal, genre) {
    $(".glass-select option:eq(0)").prop("selected", true);
    $(".meal-select option:eq(0)").prop("selected", true);
    $(".genre-select option:eq(0)").prop("selected", true);
    var drinkDB = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass
    function getDrink(drinkDB) {
        localStorage.setItem("glassSelectValue", glass);
        fetch(drinkDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexDrink = Math.floor(Math.random() * data.drinks.length)
                var drinkName = data.drinks[indexDrink].strDrink
                // $(".drink-result-name").text('')
                $(".drink-result-name").text(drinkName)
                var drinkPic = data.drinks[indexDrink].strDrinkThumb
                $(".drink-pic").attr({ src: drinkPic, id: "drinkId", width: 150, height: 150 })

                localStorage.setItem("generatedDrink", drinkName);
            })
    }
    var mealDB = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + meal
    function getMeal(mealDB) {
        localStorage.setItem("mealSelectValue", meal);
        fetch(mealDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexMeal = Math.floor(Math.random() * data.meals.length)
                var mealID = data.meals[indexMeal].idMeal
                console.log(mealID);
                var mealIDUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
                fetch(mealIDUrl) // second fetch for new api
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                        var mealName = data.meals[0].strMeal
                        $(".meal-result-name").text(mealName)
                        $(".meal-recipe").text("Please click the picture for the full recipe.")
                        var mealPic = data.meals[0].strMealThumb
                        $(".meal-pic").attr({ src: mealPic, id: "mealId", width: 150, height: 150 })
                        var recipeLink = data.meals[0].strSource
                        // var mealPicEl = $("<img>", { src: mealPic, id: "mealId", width: 150, height: 150 })
                        $(".a-tag-recipe").attr("href", recipeLink)
                        $(".a-tag-recipe").attr("target", "_blank")

                        localStorage.setItem("generatedMeal", mealName);
                        localStorage.setItem("generatedRecipe", recipeLink);
                    })

            })
    }
    var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d&genres=" + genre.toLowerCase();
    function getVid(videoGame) {
        localStorage.setItem("genreSelectValue", genre);
        fetch(videoGame)
            .then(function (response) {

                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var indexGames = Math.ceil(Math.random() * 19)
                var gameName = data.results[indexGames].name;
                $(".game-result-name").text(gameName)
                var gamePic = data.results[indexGames].background_image;
                $(".game-pic").attr({ src: gamePic, id: "gameId", width: 150, height: 150 })

                localStorage.setItem("generatedGame", gameName);
            })
    }
    getDrink(drinkDB);
    getMeal(mealDB);
    getVid(videoGame);
    return;

}
formSubmitButton.on("click", FormSubmit)

// mail button js

$('#mail-button').on('click', function() {
    var email = $('#user-email-input-field').val();
    var subject = "Your Date Night Reccomendations"
    var body = "Hello from Date Night! Your reccomendations for tonight are: Drink:"
    + localStorage.getItem("generatedDrink") + ". Meal: "
    + localStorage.getItem("generatedMeal") + ", find the recipe at:"
    + localStorage.getItem("generatedRecipe") + ". Game: "
    + localStorage.getItem("generatedGame") + ". Enjoy!"
    window.open('mailto:' + email +"?subject=" + subject + "&body=" + body);
})

// card js THIS
const card = $(".card__container");

card.on('click', '.card__inner', function () {
    $(this).toggleClass('is-flipped');
})
