angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Cursos', function() {

  var llistaCursos = [
      {
        id: 3953,
        titol: 'Aprofundeix amb les eines i mòduls de Photoshop',
        horari: 'dilluns de 19  a 21 h',
        dates: 'del 9 d’octubre al 20 de novembre (14 hores)',
        professor: 'Marc Carmona'
      },
      {
        id: 3950,
        titol: 'Crea apps mòbil amb html 5 i Iònic',
        horari: 'dimecres i divendres de 19  a 21 h',
        dates: 'del 8 al 29 de novembre (14 hores)',
        professor: 'Xavi Corral'
      },
      {
        id: 3957,
        titol: 'Aprèn WordPress per crear webs professionals',
        horari: 'dilluns de 19  a 21 h',
        dates: 'del 20 de novembre a l’11 de desembre (8 hores)',
        professor: 'Oriol Blas'
      }
  ];

  var metodos = {
    all: function () {
        return llistaCursos;
    },
    get: function (cursId) {
      for(var i=0; i < llistaCursos.length; i++) {
        if (llistaCursos[i].id == cursId) {
          return llistaCursos[i];
        }
      }
    }
  };

  return metodos;
});
