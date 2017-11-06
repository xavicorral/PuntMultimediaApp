angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.nombre = 'Xavi';
})

.controller('ChatsCtrl', function($scope) {

  $scope.cursos = [
      {
        'id': 1,
        'titol': 'Crea apps mòbil amb html 5 i Iònic',
        'horari': 'dimecres i divendres de 19  a 21 h',
        'dates': 'del 8 al 29 de novembre (14 hores)',
        'professor': 'Xavi Corral'
      },
      {
        'id': 2,
        'titol': 'Aprofundeix amb les eines i mòduls de Photoshop',
        'horari': 'dilluns de 19  a 21 h',
        'dates': 'del 9 d’octubre al 20 de novembre (14 hores)',
        'professor': 'Marc Carmona'
      }
  ];

/*  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ConfiguracioCtrl', function($scope) {
  $scope.opcio = 'ES';
})

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

})
;
