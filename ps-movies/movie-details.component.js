(function() {
    "use strict";

    var module = angular.module("psMovies");

    // movieDetails has id in endpoint
    module.component("movieDetails", {
        templateUrl: "./ps-movies/movie-details.component.html",
        controllerAs: "model",
        controller: function() {
            var vm = this;

            // Component router lifecycle hooks
            vm.$routerOnActivate = function(next) {
                console.log(next);
                vm.id = next.params.id;
            };
        }
    });

}());