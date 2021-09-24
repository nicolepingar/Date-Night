var videoGameApiKey = "8e16f8ff07d448cca1ccbdac1846964d"
var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d"
var glassSelection = $(".glass-select")
var mealSelect = $(".meal-select")
var genreSelect = $(".genre-select")
var formSubmitButton = $(".button")
var drinkResult = $(".drink-result")
var mealResult = $(".meal-result")
var gameResult = $(".game-result")

function FormSubmit(event) {
    event.preventDefault();
    
    var glass = glassSelection.val().replace(" ", "_");
    var meal = mealSelect.val();
    var genre = genreSelect.val();
    
    selectionValues(glass, meal, genre);
}

function selectionValues(glass, meal, genre) {
    // if (glass.val("Select dropdown") || meal.val("Select dropdown") || genre.val("Select dropdown")) {
    //     // FormSubmit();
    //     alert("Please select from each dropdown menu.")
    //     }       

    $(".glass-select option:eq(0)").prop("selected", true);
    $(".meal-select option:eq(0)").prop("selected", true);
    $(".genre-select option:eq(0)").prop("selected", true);
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
              $(".drink-result-name").text(drinkName)
                var drinkPic = data.drinks[indexDrink].strDrinkThumb
                var drinkPicEl = $("<img>", { src: drinkPic, id: "drinkId", width: 150, height: 150 })
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
                        var recipeLink = data.meals[0].strSource
                        var mealPicEl = $("<img>", { src: mealPic, id: "mealId", width: 150, height: 150 })
                        $(".a-tag-recipe").attr("href", recipeLink)
                        $(".a-tag-recipe").attr("target", "_blank")
                       $(".a-tag-recipe").append(mealPicEl)
                    })

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
                    $(".game-result-name").text(gameName)
                    var gamePic = data.results[indexGames].background_image;
                    var gamePicEl = $("<img>", { src: gamePic, id: "gameId", width: 150, height: 150 })
                    gameResult.append(gamePicEl)

                })
        }
        getDrink(drinkDB);
        getMeal(mealDB);
        getVid(videoGame);
  
}
    formSubmitButton.on("click", FormSubmit)



    // card js THIS
    const card = $(".card__container");

    card.on('click', '.card__inner', function () {
        $(this).toggleClass('is-flipped');
    })
