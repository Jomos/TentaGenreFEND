function NewGenreController($scope, $http,$location) {
    $scope.SaveNewGenre = function () {
        $http.post("/odata/Genres", $scope.NewGenre)
        .success(function () {
            $location.path('/').replace();
        });
    };
}
