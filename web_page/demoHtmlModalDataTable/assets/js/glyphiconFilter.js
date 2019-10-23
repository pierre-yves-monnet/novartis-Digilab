angular.module('bonitasoft.ui.filters').
  filter('pieceJointe', function() {
    return function(input,label) {
      console.log( "filter:");
      console.log( "%j",input);
      
      if (input === true){
         // works only with custom table widget that supports html 
         // not possible with defaults widgets 
         return '<span class="glyphicon '+label+' center"></span>';
      }
      return '';
    };
  });