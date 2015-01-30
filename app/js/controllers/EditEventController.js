'use strict';

eventManager.controller('EditEventController',
  function EditEventController($scope){
    $scope.saveEvent = function (event){
      $scope.event = event;
    }; 
    $scope.cancel = function () {
      window.location = '/EventDetails.html';
    };
  }
);
