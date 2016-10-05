(function() {
    "use strict";

    var module = angular.module("psMovies");

    // movieDetails has id in endpoint
    module.component("movieDetails", {
        templateUrl: "./ps-movies/movie-details.component.html",
        // $routeConfig: { match this path, load this component, friendly name of route }
        $routeConfig: [
            // path: "/details/someid/overview"
            { path: "/overview", component: "movieOverview", name: "Overview" },
            { path: "/cast", component: "movieCast", name: "Cast" },
            { path: "/director", component: "movieDirector", name: "Director" }
        ],
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

    // in real world - separate these components into different files
    module.component("movieOverview", {
        template: "This is the overview"
    });

    module.component("movieCast", {
        template: "This is info about the cast"
    });

    module.component("movieDirector", {
        template: "This is info about the director"
    });

}());