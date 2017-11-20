angular.module('starter.controllers', [])

.constant('apiUrl','http://www.puntmultimedia.org/nova/wp-json/wp/v2/posts?categories=71')

.controller('DashCtrl', function($scope) {

    $scope.nombre = 'Xavi';

    $scope.contacto = {
        horario: 'de 5 a 9',
        telefono: '93 456 78 78',
        idCentroCivico: 345
    };

})

.controller('CursosCtrl', function($scope, $http, apiUrl) {

    $http.get(apiUrl).then(
        function(response) {
            console.log('Ha ido todo bien!');
            console.log(response);
            $scope.cursos = response.data;
        },
        function(error) {
            console.log('OJORRR ha fallado!!');
            console.log(error);
        }
    );



  /*  $scope.cursos = [];

    $http.get(apiUrl).then(
        function (response) {
            console.log(response.data);
            $scope.cursos = response.data;
        }
    );


    console.log($scope.cursos);

    //$scope.cursos = Cursos.all();
*/

  /*
  $scope.cursos = [
      {
        id: 3950,
        titol: 'Crea apps mòbil amb html 5 i Iònic',
        horari: 'dimecres i divendres de 19  a 21 h',
        dates: 'del 8 al 29 de novembre (14 hores)',
        professor: 'Xavi Corral'
      },
      {
        id: 3953,
        titol: 'Aprofundeix amb les eines i mòduls de Photoshop',
        horari: 'dilluns de 19  a 21 h',
        dates: 'del 9 d’octubre al 20 de novembre (14 hores)',
        professor: 'Marc Carmona'
      }
  ];
  */

  /*
  $scope.cursos = Cursos.all();
   */
})

.controller('CursDetailCtrl', function($scope, $stateParams, Cursos) {
    console.log('getting curs ' + $stateParams.cursId);
    $scope.curs = Cursos.get($stateParams.cursId);
    console.log($scope.curs);
})

.controller('ConfiguracioCtrl', function($scope) {
  $scope.opcio = 'ES';
})

/*
.controller('ProvaCtrl', function($scope,$ionicBackdrop,$timeout) {
    $scope.saludo = 'Xavi';

    $scope.action = function() {
        $ionicBackdrop.retain();
        $timeout(this.release,3000);
    };

    $scope.release = function() {
        $ionicBackdrop.release();
    }

    // Execute action on backdrop disappearing
    $scope.$on('backdrop.hidden', function() {
        console.log('hidden');
    });

    // Execute action on backdrop appearing
    $scope.$on('backdrop.shown', function() {
        console.log('hidden');
    });

})*/
;
