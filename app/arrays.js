if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(p,c){
          return p + c;
        }, 0);
    },

    remove : function(arr, item) {
      var index = arr.indexOf(item);
      arr.splice(index, 1);
      return arr;
    },

    append : function(arr, item) {
      return arr.concat(item);
    },

    truncate : function(arr) {
      arr.pop()
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.filter(function(e){
        return e === item;
      }).length;
    },

    duplicates : function(arr) {
      var duplicates = [],
          elementsMap = {};

      arr.filter(function(element, index, array){
        if(array.indexOf(element) != array.lastIndexOf(element)){
          if(duplicates.indexOf(element) < 0){
            duplicates.push(element);
          }
        }
      });
      
      return duplicates;
    },

    square : function(arr) {
      return arr.map(function(e){
        return e * e;
      });
    },

    findAllOccurrences : function(arr, target) {
      var continueSearch = true,
          fromIndex = 0,
          ocurrenceIndex = null,
          ocurrences = [];

      for(;;){

        ocurrenceIndex = arr.indexOf(target, fromIndex);

        if(ocurrenceIndex >= 0){
          fromIndex = ocurrenceIndex;
          ocurrences.push(ocurrenceIndex);
        }

        if(fromIndex >= arr.length){
          break;
        }else{
          fromIndex++;
        }
      }

      return ocurrences;
    }
  };
});
