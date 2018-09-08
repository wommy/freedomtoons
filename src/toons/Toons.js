(function(){
    'use strict';

    // Prepare the 'toons' module for subsequent registration of controllers and delegates
    var app = angular.module('toons', [ 'ngMaterial', 'ngRoute', 'youtube-embed']);

    app.config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'src/toons/view/toonsGrid.html',
            controller:'ToonController',
            controllerAs: 'tc'
        });

        $routeProvider.when('/about',{
            templateUrl:'src/toons/view/about-freedomtoons.html',
            controller:'ToonController',
        });

        $routeProvider.when('/freedom-links',{
            templateUrl:'src/toons/view/liberty-links.html',
            controller:'FreedomLinksController',
            controllerAs:'flc'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
})();