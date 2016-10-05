/**
 * Created by jeffrey.dinh on 10/5/2016.
 */

(function () {
    "use strict";

    var module = angular.module("psMovies");

    module.component("accordion", {
        transclude: true,
        template: "<div class='panel-group' ng-transclude></div>",
        // building an internal api to expand/collapse accordion
        controller: function() {
            var vm = this;
            var panels = [];

            vm.selectPanel = function(panel) {
                for(var i in panels) {
                    if (panel === panels[i]) {
                        panels[i].turnOn();
                    } else {
                        panels[i].turnOff();
                    }
                }
            };

            vm.addPanel = function(panel) {
                panels.push(panel);
                if(panels.length > 0) {
                    panels[0].turnOn();
                }
            };

        }
    });

    module.component("accordionPanel", {
        bindings: {
            "heading": "@"
        },
        // inside of a custom directive, we can have a require definition and the list of things that we would require got passed into the link function
        // require an accordion controller as a parent (what the carrot indicates), it goes looking up accordion hierarchy until it finds an accordion controller
        // once it find the parent, it will take the controller instance associated with this component and set a property on my child controller
        // Name of that property is: "Parent"
        require: {
            "parent": "^accordion"
        },
        controllerAs: "vm",
        controller: function() {
            var vm = this;
            vm.selected = false;

            vm.$onInit = function() {
                vm.parent.addPanel(vm);
            };

            vm.turnOn = function() {
                vm.selected = true;
            }

            vm.turnOff = function() {
                vm.selected = false;
            }

            vm.select = function() {
                vm.parent.selectPanel(vm);
            };
        },
        transclude: true,
        template: "<div class='panel panel-default'>" +
        "<div class='panel-heading' ng-click='vm.select()'>" +
        "<h4 class='panel-title'>{{vm.heading}}</h4>" +
        "</div>" +
        "<div ng-if='vm.selected' class='panel-body' ng-transclude>" +
        "</div>" +
        "</div>"
    });

}());