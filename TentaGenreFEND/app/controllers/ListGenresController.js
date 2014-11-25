function ListGenresController($scope, $http, $route, $location) {
    $http.get("/odata/Genres")
    .success(function (data) {
        $scope.Genres = data.value;
    });
    $scope.DeleteGenre = function (key) {
        var gen = "/odata/Genres(" + key + ")";
        $http.delete(gen)
        .success(function () {
            $route.reload();
            });
    };
    $scope.UpdateGenre = function (id) {
        //$scope.Genre = $scope.Genres[index];
        var path = '/Edit/' + id;
        $location.path(path).replace();
    };
}