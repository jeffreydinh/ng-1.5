/**
 * Created by jeffrey.dinh on 10/5/2016.
 */

(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>"
    });

    module.component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        controllerAs: "vm",
        transclude: true,
        template: "<div class='panel panel-default'>" +
            "<div class='panel-heading'>" +
            "<h4 class='panel-title'>{{vm.heading}}</h4>" +
        "</div>" +
        "<div class='panel-body' ng-transclude>" +
        "</div>" +
        "</div>"
    });

}());