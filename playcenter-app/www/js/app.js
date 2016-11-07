// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })


    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider

          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
          })

          .state('app.masvistas', {
            url: '/masvistas',
            views: {
              'menuContent': {
                templateUrl: 'templates/masvistas.html',
                controller: 'servicioMasvistoCtrl'
              }
            }
          })

          .state('app.pathToLibrary', {
            url: '/pathToLibrary',
            views: {
              'menuContent': {
                templateUrl: 'templates/pathToLibrary.html'
              }
            }
          })


          .state('app.inicio', {
            url: '/inicio',
            views: {
              'menuContent': {
                templateUrl: 'templates/login.html',
              }
            }
          })

          .state('app.browse', {
            url: '/browse',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: "myCtrl"
              }
            }
          })

          .state('app.playlistsMovie', {
            url: '/playlistsMovie',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsMovie.html',
                controller: "servicioMovieCtrl"
              }
            }
          })


          .state('app.playlistsLibrary', {
            url: '/playlistsLibrary',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsLibrary.html',
                controller: "servicioLibraryCtrl"
              }
            }
          })


          .state('app.playlistsDoc', {
            url: '/playlistsDoc',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsMovie.html',
                controller: "servicioDocCtrl"
              }
            }
          })

          .state('app.playlistsShort', {
            url: '/playlistsShort',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsMovie.html',
                controller: "servicioShortCtrl"
              }
            }
          })



          .state('app.playlistsExplora', {
            url: '/playlistsExplora',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsExplora.html',
                controller: "servicioExploraCtrl"
              }
            }
          })



          .state('app.playlistsKid', {
            url: '/playlistsKid',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsMovie.html',
                controller: "servicioKidCtrl"
              }
            }
          })




          /* .state('app.playlists', {
           url: '/playlists',
           views: {
           'menuContent': {
           templateUrl: 'templates/playlists.html',
           controller: 'PlaylistsCtrl'
           }
           }
           })*/


          .state('app.singleMovie', {
            url: '/playlistsMovie/:id',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'playlistMovieCtrl'
              }
            }
          })

          .state('app.singleDoc', {
            url: '/playlistsDoc/:id',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'playlistDocCtrl'
              }
            }
          })

          .state('app.singleShort', {
            url: '/playlistsShort/:id',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'playlistShortCtrl'
              }
            }
          })

          .state('app.singleKid', {
            url: '/playlistsKid/:id',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'playlistKidCtrl'
              }
            }
          })

          .state('app.playmovie', {
            url: '/playlistsMovie/playMovie/:id',
            views: {
              'menuContent': {
                templateUrl: 'templates/Movieplay.html',
                controller: 'PlayMovie'
              }
            }
          })


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('app/inicio');
    });
