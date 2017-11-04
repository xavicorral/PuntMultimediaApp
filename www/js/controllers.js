angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.nombre = 'Xavi';
})

.controller('ChatsCtrl', function($scope, Chats) {

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

});
