(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieApp", {
        templateUrl: "./ps-movies/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component: "movieList", name: "List" },
            { path: "/about", component: "appAbout", name: "About" },
            // adds id to endpoint
            // ... means terminal path. Once component is loaded, it will provide routing cofigs that needs to be inspected and matched against the URL
            // Because this movie-details.component will load some component. "..." is something we need on the parent routing config
            { path: "/detail/:id/...", component: "movieDetails", name: "Details" },
            { path: "/**", redirectTo: ["List"] }
        ]
    });

}());

/** Composition
 * The ability to have route that will load components, those components can also define routes that load subcomponents
 * can build amazingly complex UI while at the same time providing history support in the browser
 * ability to deep link into a specific feature of the application
 */