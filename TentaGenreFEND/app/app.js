var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/app/partials/ListGenres.html",
            controller: "ListGenresController"
        })
        .when('/Add',
        {
            templateUrl: "/app/partials/NewGenre.html",
            controller: "NewGenreController"
        })
    .when('/Edit/:GenreID',
        {
            templateUrl: "/app/partials/EditGenre.html",
            controller: "EditGenreController"
        });
});
app.controller('ListGenresController', ListGenresController)
    .controller('NewGenreController', NewGenreController)
.controller('EditGenreController', EditGenreController);