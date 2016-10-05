(function() {
    "use strict";

    // tell angular I have a dependency on the route module - ngComponentRouter
    var module = angular.module("psMovies", ["ngComponentRouter", "ngAnimate"]);

    // inject service $routerRootComponent. component name: movieApp
    // now component router knows top level routing and navigation rules - root component is movieApp / movie-app
    module.value("$routerRootComponent", "movieApp");

    // original router *, load to templates instead of components
    // new router loads directly to components
    // module.config(function($routeProvider) {
    //     $routeProvider
    //         // use a template to load a component (movie-list)
    //         .when("/list", { template: "<movie-list></movie-list>" })
    //         .when("/about", { template: "<app-about></app-about>" })
    //         .otherwise({ redirectTo: "/list" });
    // });


    // appAbout component
    module.component("appAbout", {
        // in-line template
        template: "This is the about page"
    });

}());