angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {

            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);
            StatusBar.hide();


            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })


    .controller('servicioMovieCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=peliculasold"
            , {cache: true})
            .then(function (response) {
                $scope.peliculas = {};
                $scope.peliculas = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioSerialCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=series"
            , {cache: true})
            .then(function (response) {
                $scope.series = {};
                $scope.series = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioNewCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=novedades"
            , {cache: true})
            .then(function (response) {
                $scope.news = {};
                $scope.news = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioTrailerCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=trailer"
            , {cache: true})
            .then(function (response) {
                $scope.trailers = {};
                $scope.trailers = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioActionCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=peliculas"
            , {cache: true})
            .then(function (response) {
                $scope.actions = {};
                $scope.actions = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioLibraryCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=cienciaficcion"
            , {cache: true})
            .then(function (response) {
                $scope.cfs = {};
                $scope.cfs = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioDocCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=documentales"
            , {cache: true})
            .then(function (response) {
                $scope.docs = {};
                $scope.docs = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioShortCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=cortos"
            , {cache: true})
            .then(function (response) {
                $scope.shorts = {};
                $scope.shorts = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioMusicCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=musica"
            , {cache: true})
            .then(function (response) {
                $scope.musics = {};
                $scope.musics = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioExploraCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=libros"
            , {cache: true})
            .then(function (response) {
                $scope.books = {};
                $scope.books = response.data;
                console.log(response.data[0].titulo);
            });


    })

    .controller('servicioSoccerCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=futbol"
            , {cache: true})
            .then(function (response) {
                $scope.soccers = {};
                $scope.soccers = response.data;
                console.log(response.data[0].titulo);
            });


    })


    .controller('servicioKidCtrl', function ($scope, $http) {
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=kids"
            , {cache: true})
            .then(function (response) {
                $scope.kids = {};
                $scope.kids = response.data;
                console.log(response.data[0].titulo);
            });


    })


    .controller('LoginCtrl', function($scope){
        $scope.data = {};

        $scope.login = function(){
            console.log("LOG COD: " + $scope.data.password);
        }
    })  





    .controller('PlaylistCtrl', function ($scope, $stateParams) {
        //console.log($stateParams.playlistTitulo);
        $scope.titulo = $stateParams.playlistTitulo;
        $scope.descripcion = $stateParams.playlistDescripcion;
        console.log($scope.descripcion);
        console.log($scope.titulo);
        $scope.url = encodeURI("http://172.16.10.3/playcenter/media/" + $scope.titulo + "_trailer.mp4");
        console.log($scope.url);
        $scope.goVideo = function(){
            location.url('#/app/playlistsMovie/playMovie/' + $scope.titulo);
        };

    })

    .controller('PlayMovie', function ($scope, $stateParams) {
        //console.log($stateParams.playlistTitulo);
        $scope.movie = $stateParams.movie;
        //$scope.descripcion = $stateParams.playlistDescripcion;
        //console.log($scope.descripcion);
        console.log($scope.titulo);
        $scope.url = encodeURI("http://172.16.10.3/playcenter/media/" + $scope.movie + ".mp4");
        console.log($scope.url);
        $scope.goVideo = function(){
            location.url('#/app/playlistsMovie/playMovie/{{titulo}}');
        };

    })



    .filter('trusted', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);