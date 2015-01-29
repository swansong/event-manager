'use strict';

eventManager.controller('EventController',
  function EventController($scope){

    $scope.event = {
      name: 'Sample Event 1',
      date: '1/1/2015',
      time: '12:00pm',
      location: {
        address: 'The house of ur mom',
        city: "Seattle",
        state: 'WA'
      },
      image: {
        url: '/img/event_management.jpg'
      },
      sessions: [
        {
          name: 'Testy1',
          creator: 'Bob Saget',
          duration: '1 hour',
          level: 'Babby',
          upvotes: 0,
          abstract: 'How to sample the right wine'
        },
        {
          name: 'Testy2',
          creator: 'Bob Saget',
          duration: '1 hour',
          level: 'Intermeidate',
          upvotes: 0,
          abstract: 'How to sample a Daft Punk Song'
        },
        {
          name: 'Testy3',
          creator: 'Bob Saget',
          duration: '1 hour',
          level: 'Advanced',
          upvotes: 0,
          abstract: 'How to sample a new partner each night'
        }
      ],
    };

    $scope.upvoteSession = function(session){
        session.upvotes++;
    };
    $scope.downvoteSession = function(session){
      session.upvotes--;
    };
    
  }
);
