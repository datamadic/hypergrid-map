'use strict';

/**
 * @ngdoc directive
 * @name gridApp.directive:map
 * @description
 * # map
 */
angular.module('gridApp')
  .directive('mapView', function (seedData, stateMap) {
    return {
      template: '<div id="mapcontainer" style="position: relative; width: 700px; height: 500px;"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var data = seedData
            .getCurrentDataSet()
            .reduce(function(prev, me){
              var abbr = stateMap.getMap().filter(function(item){
                  return item.name === me.residencestate
                })[0].abbreviation;

              if (abbr in prev){
                prev[abbr].residents++;
              }
              else {
                prev[abbr] = {residents: 1};
              }
              return prev
            },{});

        setTimeout(function(){

          var election = new Datamap({

            element: document.querySelector('#mapcontainer'),
            scope: 'usa',
            geographyConfig: {
              highlightBorderColor: '#bada55',
             popupTemplate: function(geography, data) {
                return '<div class="hoverinfo">' +'Residents:' +  data.residents + ' '
              },
              highlightBorderWidth: 3
            },

            fills: {
            defaultFill: '#ccc'
          },
          data: data
          });
          election.labels();

        },2);

      }
    };
  });
