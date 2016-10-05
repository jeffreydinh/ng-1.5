(function() {
    "use strict";

    var module = angular.module("psMovies");

    function buildEntries(value, max) {
        var entries = [];

        for(var i=1; i<=max; i++) {
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }

        return entries;
    }

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
            // max "<" is also an input
            value: "<",
            max: "<"
        },
        controllerAs: "vm",
        controller: function() {
            var vm = this;

            vm.$onInit = function() {
                vm.entries = buildEntries(vm.value, vm.max);
            };

            // $onChanges - This hook is invoked with no arguments; if detecting changes, you must store the previous value(s) for comparison to the current values.
            vm.$onChanges = function() {
                vm.entries = buildEntries(vm.value, vm.max);
            };
        }
    });

}());