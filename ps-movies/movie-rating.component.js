(function() {
    "use strict";

    var module = angular.module("psMovies");

    module.component("movieRating", {
        templateUrl: "./ps-movies/movie-rating.component.html",
    /*
        instead of setting up scopes, set up bindings
        "I need to bind some properties in my controller instance to the outside world"
        By default, we're gonna have an isolated scope
        we can bind values on our controller's instance with values from the outside world by specifying bindings
     */
        bindings: {
            // word "value" is chosen arbitrary
            // "<" tells angular that this is an input - this value will be given to me from the outside world
            value: "<"
        },
        transclude: true, // shows by default if there
        controllerAs: "vm",
        controller: function() {
            var vm = this;

            var entries = [];

            vm.$onInit = function() {
                vm.entries = new Array(vm.value);
            };

            // $onChanges - This hook is invoked with no arguments; if detecting changes, you must store the previous value(s) for comparison to the current values.
            vm.$onChanges = function() {
                vm.entries = new Array(vm.value);
            };
        }
    });

}());