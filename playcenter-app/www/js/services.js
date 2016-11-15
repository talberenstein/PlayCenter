angular.module('starter.services', [])

    .service('masvistos', function ($log, $q, $http, $rootScope) {
        var masvistos = this;
        masvistos.lista = {};

        masvistos.getAllMasvistos = function() {
            var defer = $q.defer();
            console.log("getAllMasvistos");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=peliculasold"
                , {cache: true})
                .then(function (response) {
                    masvistos.lista = [
                        {
                            id: "4",
                            ext: "mp4",
                            titulo: "House M.D.",
                            url_movie: "http://172.16.10.3/playcenter/media/DrH_T01x01.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/DrH_T01",
                            url_trailer: "http://172.16.10.3/playcenter/media/DrH_T01x01_trailer.mp4",
                            star_rating: 2,
                            descripcion: "House M. D. es una serie de televisión estadounidense estrenada en el año 2004 por la cadena FOX y finalizada en 2012."
                        },
                        {
                            id:"3",
                            ext: "mp4",
                            titulo: "Batman The Dark Knight Rises",
                            url_movie: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/Batman The Dark Knight Rises",
                            url_trailer: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises_trailer.mp4",
                            star_rating: 5,
                            descripcion: "Director: Christopher Nolan Año: 2012 Duracion: 165min"
                        },
                        {
                            id: "5",
                            ext: "mp4",
                            titulo: "SinFiltro",
                            url_movie: "http://172.16.10.3/playcenter/media/SinFiltro.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/SinFiltro",
                            url_trailer: "http://172.16.10.3/playcenter/media/SinFiltro_trailer.mp4",
                            star_rating: 2,
                            descripcion: "Duración: 100 minuntos\n2016\nDirección: Nicolás López\n\nPía, es una agobiada mujer moderna de 37 años que vive en el estresado Santiago del 2015. Día a día es pasada a llevar por su jefe, su novio, su hijastro y su mejor amiga, siendo incapaz de hacer algo al respecto. Ella tiene un dolor constante en el pecho que no la deja vivir y un día, luego de sentir mucho dolor, decide someterse a un milenario tratamiento de acupuntura oriental impartido por un extraño doctor chino. Este tratamiento, sin que ella lo quiera, soltará todo lo que Pía se guardaba dentro y la llevarán por un viaje de liberación personal. Sin embargo, con el tiempo, se dará cuenta que decir todo lo que piensa, no siempre traerá buenas consecuencias. Teniendo así, que aprender a lidiar con sus emociones y pensamientos."
                        }
                    ];

                    //masvistos.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };

        masvistos.getMasvistoById = function(id) {
            console.log(id);
            var defer = $q.defer();
            console.log("Estoy en getMasvistoById");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=peliculasold" /*+ /id*/
                , {cache: true})
                .then(function (response) {
                    masvistos.lista = [
                        {
                            id:"3",
                            ext: "mp4",
                            titulo: "Batman The Dark Knight Rises",
                            url_movie: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/Batman The Dark Knight Rises",
                            url_trailer: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises_trailer.mp4",
                            star_rating: 5,
                            descripcion: "Director: Christopher Nolan Año: 2012 Duracion: 165min                                                                       Hace ocho años que Batman desapareció, dejando de ser un héroe para convertirse en un fugitivo. Al asumir la culpa por la muerte del fiscal del distrito Harvey Dent, el Caballero Oscuro decidió sacrificarlo todo por lo que consideraba, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. Pero todo cambia con la llegada de una astuta gata ladrona que pretende llevar a cabo un misterioso plan. Sin embargo, mucho más peligrosa es la aparición en escena de Bane, un terrorista enmascarado cuyos despiadados planes obligan a Bruce a regresar de su voluntario exilio."
                        }
                    ];

                    //masvistos.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(masvistos.lista);
                    defer.resolve(response);
                });

            return defer.promise;
        };
        return masvistos; })


    .service('categorias', function ($log, $q, $http, $rootScope) {
        var categorias = this;
        categorias.lista = {};

        categorias.getAllCategorias = function() {
            var defer = $q.defer();
            console.log("getAllCategorias");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=peliculasold"
                , {cache: true})
                .then(function (response) {
                    categorias.lista = [
                        {
                            id: "10000",
                            titulo: "DESCUBRE",
                            url_cover: "../img/explora-descubre.gif"
                            },
                        {
                            id:"10003",
                            titulo: "ESTRENOS",
                            url_cover: "../img/explora-estrenos.gif"

                        },                        {
                            id:"10004",
                            titulo: "NIÑOS",
                            url_cover: "../img/explora-ninos.gif"

                        },                        {
                            id:"10007",
                            titulo: "PREMIADOS POR LA CRITICA",
                            url_cover: "../img/explora-premiados.gif"

                        },                        {
                            id:"10008",
                            titulo: "CHILE INDEPENDIENTE",
                            url_cover: "../img/explora-chile-independiente.gif"

                        },                        {
                            id:"10002",
                            titulo: "PARA REIR",
                            url_cover: "../img/explora-reir.gif"

                        },                        {
                            id:"10006",
                            titulo: "REFLEXIONA",
                            url_cover: "../img/explora-reflexiona.gif"

                        },                        {
                            id:"10003",
                            titulo: "EMOCIONATE",
                            url_cover: "../img/explora-emocionate.gif"

                        }
                    ];

                    //categorias.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };

        categorias.getCategoriaById = function(id) {
            console.log(id);
            var defer = $q.defer();
            console.log("Estoy en getCategoriaById");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=app&category=" + id
                , {cache: true})
                .then(function (response) {
                   /* categorias.lista = [
                        {
                            id:"3",
                            ext: "mp4",
                            titulo: "Batman The Dark Knight Rises",
                            url_movie: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/Batman The Dark Knight Rises",
                            url_trailer: "http://172.16.10.3/playcenter/media/Batman The Dark Knight Rises_trailer.mp4",
                            star_rating: 5,
                            descripcion: "Director: Christopher Nolan Año: 2012 Duracion: 165min                                                                       Hace ocho años que Batman desapareció, dejando de ser un héroe para convertirse en un fugitivo. Al asumir la culpa por la muerte del fiscal del distrito Harvey Dent, el Caballero Oscuro decidió sacrificarlo todo por lo que consideraba, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. Pero todo cambia con la llegada de una astuta gata ladrona que pretende llevar a cabo un misterioso plan. Sin embargo, mucho más peligrosa es la aparición en escena de Bane, un terrorista enmascarado cuyos despiadados planes obligan a Bruce a regresar de su voluntario exilio."
                        },

                        {
                            id: "5",
                            ext: "mp4",
                            titulo: "SinFiltro",
                            url_movie: "http://172.16.10.3/playcenter/media/SinFiltro.mp4",
                            url_cover: "http://172.16.10.3/playcenter/covers/SinFiltro",
                            url_trailer: "http://172.16.10.3/playcenter/media/SinFiltro_trailer.mp4",
                            star_rating: 2,
                            descripcion: "Duración: 100 minuntos\n2016\nDirección: Nicolás López\n\nPía, es una agobiada mujer moderna de 37 años que vive en el estresado Santiago del 2015. Día a día es pasada a llevar por su jefe, su novio, su hijastro y su mejor amiga, siendo incapaz de hacer algo al respecto. Ella tiene un dolor constante en el pecho que no la deja vivir y un día, luego de sentir mucho dolor, decide someterse a un milenario tratamiento de acupuntura oriental impartido por un extraño doctor chino. Este tratamiento, sin que ella lo quiera, soltará todo lo que Pía se guardaba dentro y la llevarán por un viaje de liberación personal. Sin embargo, con el tiempo, se dará cuenta que decir todo lo que piensa, no siempre traerá buenas consecuencias. Teniendo así, que aprender a lidiar con sus emociones y pensamientos."
                        }
                    ];*/

                    categorias.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };
        return categorias; })

.service('movies', function ($log, $q, $http, $rootScope) {
    var movies = this;
    movies.lista = {};

    movies.getAllMovies = function() {
        var defer = $q.defer();
        console.log("getAllMovies");
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=app&category=10000"
            , {cache: true})
            .then(function (response) {
                /*movies.lista = [
                    { 
                    id:"1",
                    ext: "mp4",
                    titulo: "El Secreto de sus ojos",
                    url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                    url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                    url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                    star_rating: 4,
                    descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años." 

                    },
                    {
                        id: "2",
                        ext: "mp4",
                        titulo: "El Hombre de Acero",
                        url_movie: "http://172.16.10.3/playcenter/media/El Hombre de Acero.mp4",
                        url_cover: "http://172.16.10.3/playcenter/covers/El%20Hombre%20de%20Acero",
                        url_trailer: "http://172.16.10.3/playcenter/media/El%20Hombre%20de%20Acero_trailer.mp4",
                        star_rating: 2,
                        descripcion: "Director: Zack Snyder Año: 2013 Duración: 143 min                                                                         Desde Krypton, un lejano planeta muy avanzado tecnológicamente, un bebé es enviado en una cápsula a través del espacio a la Tierra para que viva entre los humanos. Educado en una granja en Kansas en los valores de sus padres adoptivos, Martha (Diane Lane) y Jonathan Kent (Kevin Costner), el joven Clark Kent (Henry Cavill) comienza desde niño a desarrollar poderes sobrehumanos, y al llegar a la edad adulta llega a la conclusión de que esos poderes le exigen grandes responsabilidades, para proteger no sólo a los que quiere, sino también para representar una esperanza para el mundo."
                    }
                        ];*/

                movies.lista = (response.data);  // response.data debe mantener formato JSON
                console.log(response);
                defer.resolve(response);
            });

        return defer.promise;
    };

    movies.getMovieById = function(id) {
        console.log(id);
        var defer = $q.defer();
        console.log("Estoy en getMovieById");
        $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=appId&id="  +id
            , {cache: true})
            .then(function (response) {
                /*movies.lista = [
                    {
                        id:"1",
                        ext: "mp4",
                        titulo: "El Secreto de sus ojos",
                        url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                        url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                        url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                        star_rating: 2,
                        descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años."
                        ,descripcion_short: "Description shoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooort"
                    }
                ];*/

                movies.lista = (response.data);  // response.data debe mantener formato JSON
                console.log(response);
                defer.resolve(response);
            });

        return defer.promise;
    };
    return movies; })


    .service('documentales', function ($log, $q, $http, $rootScope) {
        var documentales = this;
        documentales.lista = {};

        documentales.getAllDocumentales = function() {
            var defer = $q.defer();
            console.log("getAllDocumentales");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=app&category=10007"
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     { 
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 4,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años." 

                     },
                     {
                     id: "2",
                     ext: "mp4",
                     titulo: "El Hombre de Acero",
                     url_movie: "http://172.16.10.3/playcenter/media/El Hombre de Acero.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Hombre%20de%20Acero",
                     url_trailer: "http://172.16.10.3/playcenter/media/El%20Hombre%20de%20Acero_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Zack Snyder Año: 2013 Duración: 143 min                                                                         Desde Krypton, un lejano planeta muy avanzado tecnológicamente, un bebé es enviado en una cápsula a través del espacio a la Tierra para que viva entre los humanos. Educado en una granja en Kansas en los valores de sus padres adoptivos, Martha (Diane Lane) y Jonathan Kent (Kevin Costner), el joven Clark Kent (Henry Cavill) comienza desde niño a desarrollar poderes sobrehumanos, y al llegar a la edad adulta llega a la conclusión de que esos poderes le exigen grandes responsabilidades, para proteger no sólo a los que quiere, sino también para representar una esperanza para el mundo."
                     }
                     ];*/

                    documentales.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };

       documentales.getDocumentalById = function(id) {
            console.log(id);
            var defer = $q.defer();
            console.log("Estoy en getDocumentalById");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=appId&id="  +id
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     {
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años."
                     ,descripcion_short: "Description shoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooort"
                     }
                     ];*/

                    documentales.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };
        return documentales; })

    .service('shorts', function ($log, $q, $http, $rootScope) {
        var shorts = this;
        shorts.lista = {};

        shorts.getAllShorts = function() {
            var defer = $q.defer();
            console.log("getAllShorts");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=app&category=10005"
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     { 
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 4,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años." 

                     },
                     {
                     id: "2",
                     ext: "mp4",
                     titulo: "El Hombre de Acero",
                     url_movie: "http://172.16.10.3/playcenter/media/El Hombre de Acero.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Hombre%20de%20Acero",
                     url_trailer: "http://172.16.10.3/playcenter/media/El%20Hombre%20de%20Acero_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Zack Snyder Año: 2013 Duración: 143 min                                                                         Desde Krypton, un lejano planeta muy avanzado tecnológicamente, un bebé es enviado en una cápsula a través del espacio a la Tierra para que viva entre los humanos. Educado en una granja en Kansas en los valores de sus padres adoptivos, Martha (Diane Lane) y Jonathan Kent (Kevin Costner), el joven Clark Kent (Henry Cavill) comienza desde niño a desarrollar poderes sobrehumanos, y al llegar a la edad adulta llega a la conclusión de que esos poderes le exigen grandes responsabilidades, para proteger no sólo a los que quiere, sino también para representar una esperanza para el mundo."
                     }
                     ];*/

                    shorts.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };

        shorts.getShortById = function(id) {
            console.log(id);
            var defer = $q.defer();
            console.log("Estoy en getShortById");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=appId&id="  +id
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     {
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años."
                     ,descripcion_short: "Description shoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooort"
                     }
                     ];*/

                    shorts.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };
        return shorts; })

    .service('kids', function ($log, $q, $http, $rootScope) {
        var kids = this;
        kids.lista = {};

        kids.getAllKids = function() {
            var defer = $q.defer();
            console.log("getAllKids");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=app&category=10011"
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     { 
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 4,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años." 

                     },
                     {
                     id: "2",
                     ext: "mp4",
                     titulo: "El Hombre de Acero",
                     url_movie: "http://172.16.10.3/playcenter/media/El Hombre de Acero.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Hombre%20de%20Acero",
                     url_trailer: "http://172.16.10.3/playcenter/media/El%20Hombre%20de%20Acero_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Zack Snyder Año: 2013 Duración: 143 min                                                                         Desde Krypton, un lejano planeta muy avanzado tecnológicamente, un bebé es enviado en una cápsula a través del espacio a la Tierra para que viva entre los humanos. Educado en una granja en Kansas en los valores de sus padres adoptivos, Martha (Diane Lane) y Jonathan Kent (Kevin Costner), el joven Clark Kent (Henry Cavill) comienza desde niño a desarrollar poderes sobrehumanos, y al llegar a la edad adulta llega a la conclusión de que esos poderes le exigen grandes responsabilidades, para proteger no sólo a los que quiere, sino también para representar una esperanza para el mundo."
                     }
                     ];*/

                    kids.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };

       kids.getKidById = function(id) {
            console.log(id);
            var defer = $q.defer();
            console.log("Estoy en getKidById");
            $http.get("http://172.16.10.3/playcenter/mediacenter/classes/media.php?op=appId&id="  +id
                , {cache: true})
                .then(function (response) {
                    /*movies.lista = [
                     {
                     id:"1",
                     ext: "mp4",
                     titulo: "El Secreto de sus ojos",
                     url_movie: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos.mp4",
                     url_cover: "http://172.16.10.3/playcenter/covers/El%20Secreto%20de%20sus%20ojos",
                     url_trailer: "http://172.16.10.3/playcenter/media/El Secreto de sus ojos_trailer.mp4",
                     star_rating: 2,
                     descripcion: "Director: Juan José Campanella  Año: 2009 Duración:126                                                              Argentina. Benjamín Espósito es oficial de un Juzgado de Instrucción de Buenos Aires recién retirado. Obsesionado por un brutal asesinato ocurrido veinticinco años antes, en 1974, decide escribir una novela sobre el caso, del cual fue testigo y protagonista. Reviviendo el pasado, viene también a su memoria el recuerdo de una mujer, a quien ha amado en silencio durante todos esos años."
                     ,descripcion_short: "Description shoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooort"
                     }
                     ];*/

                    kids.lista = (response.data);  // response.data debe mantener formato JSON
                    console.log(response);
                    defer.resolve(response);
                });

            return defer.promise;
        };
        return kids; })

;