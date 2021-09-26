// global variables 
var glassSelection = $(".glass-select")
var mealSelect = $(".meal-select")
var genreSelect = $(".genre-select")
var formSubmitButton = $(".submit-button")
// when the form is submitted, the values are set as params in sectionValues function 
function FormSubmit(event) {
    event.preventDefault();
    var glass = glassSelection.val().replace(" ", "_"); // spaces are replaced with an underscore because api url format
    var meal = mealSelect.val();
    var genre = genreSelect.val().replace(" ", "-"); // spaces are replaced with a dash because api url format
    selectionValues(glass, meal, genre);
    glow();
    glowOnSubmitAnimation();
}
// function passes through all the dropbox values and creates card values 
function selectionValues(glass, meal, genre) {
    formSubmitButton.text("Reroll") // when form is submitted, button text changes to reroll with dice
    var dice = $("<i>").addClass("fas fa-dice")
    formSubmitButton.append(dice)
    var drinkDB = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" + glass
    function getDrink(drinkDB) {
        localStorage.setItem("glassSelectValue", glass); // sets drink input values to local storage 
        // random drink name and picture generation function 
        fetch(drinkDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var indexDrink = Math.floor(Math.random() * data.drinks.length) // random number based on number of drinks in data 
                var drinkName = data.drinks[indexDrink].strDrink
                $(".drink-result-name").text(drinkName)
                localStorage.setItem("generatedDrink", drinkName); // sets drink name to local storage 
                var drinkPic = data.drinks[indexDrink].strDrinkThumb
                // $(".drink-pic").attr({ src: drinkPic, id: "drinkId", width: 150, height: 150 })
                $(".drink-pic").css('background-image', 'url(' + drinkPic + ')');
                localStorage.setItem("generatedDrink", drinkName);
            })
    }
    var mealDB = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + meal
    function getMeal(mealDB) {
        localStorage.setItem("mealSelectValue", meal); // sets meal input values to local storage 
        fetch(mealDB)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // random meal name, picture and recipe link generation function 
                var indexMeal = Math.floor(Math.random() * data.meals.length) // random number based on number of meals in data 
                var mealID = data.meals[indexMeal].idMeal
                var mealIDUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID
                fetch(mealIDUrl) // second fetch for new api based on meal id number
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var mealName = data.meals[0].strMeal
                        $(".meal-result-name").text(mealName)
                        localStorage.setItem("generatedMeal", mealName); // sets meal name to local storage 
                        $(".meal-recipe").text("Please click the picture for the full recipe.") // recipe url is linked in picture
                        var mealPic = data.meals[0].strMealThumb
                        // $(".meal-pic").attr({ src: mealPic, id: "mealId", width: 150, height: 150 })
                        $(".meal-pic").css('background-image', 'url(' + mealPic + ')');
                        var recipeLink = data.meals[0].strSource
                        $(".a-tag-recipe").attr("href", recipeLink)
                        $(".a-tag-recipe").attr("target", "_blank")

                        localStorage.setItem("generatedMeal", mealName);
                        localStorage.setItem("generatedRecipe", recipeLink);
                    })
            })
    }
    var videoGame = "https://api.rawg.io/api/games?key=8e16f8ff07d448cca1ccbdac1846964d&genres=" + genre.toLowerCase();
    function getVid(videoGame) {
        localStorage.setItem("genreSelectValue", genre); // sets game input values to local storage 
        fetch(videoGame)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // random game name and picture generation function 
                var indexGames = Math.ceil(Math.random() * 19) // random number based on the amount of games that are available (19)
                var gameName = data.results[indexGames].name;
                $(".game-result-name").text(gameName)
                localStorage.setItem("generatedGame", gameName); // sets game name to local storage 
                var gamePic = data.results[indexGames].background_image;
                // $(".game-pic").attr({ src: gamePic, id: "gameId", width: 150, height: 150 })
                console.log(gamePic);
                $(".game-pic").css('background-image', 'url(' + gamePic + ')');

                localStorage.setItem("generatedGame", gameName);
            })
    }
    // calls each function on click of form submit 
    // save checkpoint for images
    getDrink(drinkDB);
    getMeal(mealDB);
    getVid(videoGame);
    return;
}
// on form submit button "click", formSubmit is called
formSubmitButton.on("click", FormSubmit)
// allows the user to email their results to themselves
$('#user-email-input-field').on('change', function () {
    $('#mail-button').attr('disabled', true);
    if ($(this).val().length != 0 && $(this).val().includes("@") && $(this).val().includes(".com"))
        $('#mail-button').attr('disabled', false);
    else
        $('#mail-button').attr('disabled', true);
    $('#mail-button').on('click', function () {
        var email = $('#user-email-input-field').val();
        var subject = "Your Date Night Reccomendations"
        var body = "Hello from Date Night! Your reccomendations for tonight are: Drink:"
            + localStorage.getItem("generatedDrink") + ". Meal: "
            + localStorage.getItem("generatedMeal") + ", find the recipe at:"
            + localStorage.getItem("generatedRecipe") + ". Game: "
            + localStorage.getItem("generatedGame") + ". Enjoy!"
        window.open('mailto:' + email + "?subject=" + subject + "&body=" + body);
    });
});
// card flip function 
const card = $(".card__container");
card.on('click', '.card__inner', function () {
    $(this).toggleClass('is-flipped');
})
// card glow animation
function glowOnSubmitAnimation() {
    let start = Date.now();
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        if (timePassed >= 2000) {
            clearInterval(timer); // finishes the animation after 2 seconds
            stopGlow();
            return;
        }
        // draws the animation at the moment timePassed
    }, 1000);
}
// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function glow() {
    $(".card__face--front").css('box-shadow', ' 0 10px 35px #8B76C2');
    $(".card__face--front").css('transition', ' box-shadow 2s ease-in-out')
}
function stopGlow() {
    $(".card__face--front").css('box-shadow', '0px 0px 0px #888')
}