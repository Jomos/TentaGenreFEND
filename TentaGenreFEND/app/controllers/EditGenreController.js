function EditGenreController($scope, $http, $location, $routeParams) {
    var gen = "/odata/Genres(" + $routeParams.GenreID + ")";
    $http.get(gen)
    .success(function (data) {
        $scope.Genre = data;
    });
    $scope.SaveGenre = function () {
        $http.put("/odata/Genres(" + $scope.Genre.GenreId + ")", $scope.Genre)
        .success(function () {
            $location.path('/').replace();
        });
    };
}
