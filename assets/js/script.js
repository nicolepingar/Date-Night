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



// card js THIS
const card = $(".card__container");

card.on('click', '.card__inner', function (){
    $(this).toggleClass('is-flipped');
});