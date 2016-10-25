// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

    .controller('DemoCtrl',function($scope, $ionicSlideBoxDelegate) {

      $scope.images = [
          "../img/pic1.jpg"
      ]


      $scope.slideVisible = function(index){
        if(  index < $ionicSlideBoxDelegate.currentIndex() -1
            || index > $ionicSlideBoxDelegate.currentIndex() + 1){
          return false;
        }

        return true;
      }


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
                controller: 'DemoCtrl'
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
                controller: 'LoginCtrl'
              }
            }
          })

          .state('app.search', {
            url: '/search',
            views: {
              'menuContent': {
                templateUrl: 'templates/search.html'
              }
            }
          })

          .state('app.browse', {
            url: '/browse',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html'
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
          .state('app.playlistsNew', {
            url: '/playlistsNew',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsNew.html',
                controller: "servicioNewCtrl"
              }
            }
          })

          .state('app.playlistsTrailer', {
            url: '/playlistsTrailer',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsTrailer.html',
                controller: "servicioTrailerCtrl"
              }
            }
          })

          .state('app.playlistsAction', {
            url: '/playlistsAction',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsAction.html',
                controller: "servicioActionCtrl"
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

          .state('app.playlistsSerial', {
            url: '/playlistsSerial',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsSerial.html',
                controller: "servicioSerialCtrl"
              }
            }
          })

          .state('app.playlistsDoc', {
            url: '/playlistsDoc',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsDoc.html',
                controller: "servicioDocCtrl"
              }
            }
          })

          .state('app.playlistsShort', {
            url: '/playlistsShort',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsShort.html',
                controller: "servicioShortCtrl"
              }
            }
          })

          .state('app.playlistsMusic', {
            url: '/playlistsMusic',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsMusic.html',
                controller: "servicioMusicCtrl"
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

          .state('app.playlistsSoccer', {
            url: '/playlistsSoccer',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsSoccer.html',
                controller: "servicioSoccerCtrl"
              }
            }
          })

          .state('app.playlistsKid', {
            url: '/playlistsKid',
            views: {
              'menuContent': {
                templateUrl: 'templates/playlistsKid.html',
                controller: "servicioKidCtrl"
              }
            }
          })

          .state('app.asdf', {
            url: '/asdf',
            views: {
              'menuContent': {
                templateUrl: 'templates/search.html',
                //controller: "servicioasdfCtrl"
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


          .state('app.single', {
            url: '/playlistsMovie/:playlistTitulo',
            views: {
              'menuContent': {
                templateUrl: 'templates/browse.html',
                controller: 'PlaylistCtrl'
              }
            }
          })

          .state('app.playmovie', {
            url: '/playlistsMovie/playMovie/:movie',
            views: {
              'menuContent': {
                templateUrl: 'templates/Movieplay.html',
                controller: 'PlayMovie'
              }
            }
          })

      angular.module('starter', ['ionic'])

          .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
              // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
              // for form inputs)
              if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              }
              if (window.StatusBar) {
                StatusBar.styleDefault();
              }
            });
          })

          .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('noMenu', {
                  "url" : "/noMenu",
                  abstract : true,
                  templateUrl : "noMenuState.html"
                })

                .state("noMenu.simplePage", {
                  "url" : "/simplePage",
                  views : {
                    "noMenuView" : {
                      templateUrl : "simplePage"
                    }
                  }
                })


                .state("noMenu.simplePage2", {
                  "url" : "/simplePage2",
                  views : {
                    "noMenuView" : {
                      templateUrl : "simplePage2"
                    }
                  }
                })
                .state('app', {
                  url: "/app",
                  abstract: true,
                  templateUrl: "main.html"
                })


                .state('app.state1', {
                  url: "/state1",
                  views: {
                    'menuContent' :{
                      templateUrl: "state-1-center.html",
                    },
                    'right-menu' : {
                      templateUrl : "state-1-right.html"
                    }
                  }
                })

                .state('app.state2', {
                  url: "/state2",
                  views: {
                    'menuContent' :{
                      templateUrl: "state-2-center.html"
                    },
                    'right-menu' : {
                      templateUrl : "state-2-right.html"
                    }
                  }
                })

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/state1');
          })

          .controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
            console.log('MainCtrl');

            $scope.toggleLeft = function() {
              $ionicSideMenuDelegate.toggleLeft();
            };

            $scope.data=["JavaScript","Java","Ruby","Python"];
          })

          .directive('searchBar', [function () {
            return {
              scope: {
                ngModel: '='
              },
              require: ['^ionNavBar', '?ngModel'],
              restrict: 'E',
              replace: true,
              template: '<ion-nav-buttons side="right">'+
              '<div class="searchBar">'+
              '<div class="searchTxt" ng-show="ngModel.show">'+
              '<div class="bgdiv"></div>'+
              '<div class="bgtxt">'+
              '<input type="text" placeholder="Procurar..." ng-model="ngModel.txt">'+
              '</div>'+
              '</div>'+
              '<i class="icon placeholder-icon" ng-click="ngModel.txt=\'\';ngModel.show=!ngModel.show"></i>'+
              '</div>'+
              '</ion-nav-buttons>',

              compile: function (element, attrs) {
                var icon=attrs.icon
                    || (ionic.Platform.isAndroid() && 'ion-android-search')
                    || (ionic.Platform.isIOS()     && 'ion-ios7-search')
                    || 'ion-search';
                angular.element(element[0].querySelector('.icon')).addClass(icon);

                return function($scope, $element, $attrs, ctrls) {
                  var navBarCtrl = ctrls[0];
                  $scope.navElement = $attrs.side === 'right' ? navBarCtrl.rightButtonsElement : navBarCtrl.leftButtonsElement;

                };
              },
              controller: ['$scope','$ionicNavBarDelegate', function($scope,$ionicNavBarDelegate){
                var title, definedClass;
                $scope.$watch('ngModel.show', function(showing, oldVal, scope) {
                  if(showing!==oldVal) {
                    if(showing) {
                      if(!definedClass) {
                        var numicons=$scope.navElement.children().length;
                        angular.element($scope.navElement[0].querySelector('.searchBar')).addClass('numicons'+numicons);
                      }

                      title = $ionicNavBarDelegate.getTitle();
                      $ionicNavBarDelegate.setTitle('');
                    } else {
                      $ionicNavBarDelegate.setTitle(title);
                    }
                  } else if (!title) {
                    title = $ionicNavBarDelegate.getTitle();
                  }
                });
              }]
            };
          }])



      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/inicio');
    });
