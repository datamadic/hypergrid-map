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
              if (me.residencestate in prev){
                prev[me.residencestate].count++;
              }
              else {
                prev[me.residencestate] = {name: me.residencestate, count: 1};
              }
              return prev
            },{})

        var getResidents = function(abriv){

          var filteredStateNames = stateMap.getMap().filter(function(obj){
            return obj.abbreviation === abriv
          }),
          stateName = filteredStateNames[0].name || '';

          var residents = data[stateName] || {
            count: 0
          }

          return residents.count
        };


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
            // 'Republican': '#CC4731',
            // 'Democrat': '#306596',
            // 'Heavy Democrat': '#667FAF',
            // 'Light Democrat': '#A9C0DE',
            // 'Heavy Republican': '#CA5E5B',
            // 'Light Republican': '#EAA9A8',
            defaultFill: '#ccc'
          },
          data:{
            "AZ": {
                "fillKey": "Republican",
                "residents": getResidents("AZ")
            },
            "CO": {
                "fillKey": "Light Democrat",
                "residents": getResidents('CO')
            },
            "DE": {
                "fillKey": "Democrat",
                "residents": getResidents('DE')
            },
            "FL": {
                "fillKey": "UNDECIDED",
                "residents": getResidents('FL')
            },
            "GA": {
                "fillKey": "Republican",
                "residents": getResidents('GA')
            },
            "HI": {
                "fillKey": "Democrat",
                "residents": getResidents('HI')
            },
            "ID": {
                "fillKey": "Republican",
                "residents": getResidents('ID')
            },
            "IL": {
                "fillKey": "Democrat",
                "residents": getResidents('IL')
            },
            "IN": {
                "fillKey": "Republican",
                "residents": getResidents('IN')
            },
            "IA": {
                "fillKey": "Light Democrat",
                "residents": getResidents('IA')
            },
            "KS": {
                "fillKey": "Republican",
                "residents": getResidents('KS')
            },
            "KY": {
                "fillKey": "Republican",
                "residents": getResidents('KY')
            },
            "LA": {
                "fillKey": "Republican",
                "residents": getResidents('LA')
            },
            "MD": {
                "fillKey": "Democrat",
                "residents": getResidents('MD')
            },
            "ME": {
                "fillKey": "Democrat",
                "residents": getResidents('ME')
            },
            "MA": {
                "fillKey": "Democrat",
                "residents": getResidents('MA')
            },
            "MN": {
                "fillKey": "Democrat",
                "residents": getResidents('MN')
            },
            "MI": {
                "fillKey": "Democrat",
                "residents": getResidents('MI')
            },
            "MS": {
                "fillKey": "Republican",
                "residents": getResidents('MS')
            },
            "MO": {
                "fillKey": "Republican",
                "residents": getResidents('MO')
            },
            "MT": {
                "fillKey": "Republican",
                "residents": getResidents('MT')
            },
            "NC": {
                "fillKey": "Light Republican",
                "residents": getResidents('NC')
            },
            "NE": {
                "fillKey": "Republican",
                "residents": getResidents('NE')
            },
            "NV": {
                "fillKey": "Heavy Democrat",
                "residents": getResidents('NV')
            },
            "NH": {
                "fillKey": "Light Democrat",
                "residents": getResidents('NH')
            },
            "NJ": {
                "fillKey": "Democrat",
                "residents": getResidents('NJ')
            },
            "NY": {
                "fillKey": "Democrat",
                "residents": getResidents('NY')
            },
            "ND": {
                "fillKey": "Republican",
                "residents": getResidents('ND')
            },
            "NM": {
                "fillKey": "Democrat",
                "residents": getResidents('NM')
            },
            "OH": {
                "fillKey": "UNDECIDED",
                "residents": getResidents('OH')
            },
            "OK": {
                "fillKey": "Republican",
                "residents": getResidents('OK')
            },
            "OR": {
                "fillKey": "Democrat",
                "residents": getResidents('OR')
            },
            "PA": {
                "fillKey": "Democrat",
                "residents": getResidents('PA')
            },
            "RI": {
                "fillKey": "Democrat",
                "residents": getResidents('RI')
            },
            "SC": {
                "fillKey": "Republican",
                "residents": getResidents('SC')
            },
            "SD": {
                "fillKey": "Republican",
                "residents": getResidents('SD')
            },
            "TN": {
                "fillKey": "Republican",
                "residents": getResidents('TN')
            },
            "TX": {
                "fillKey": "Republican",
                "residents": getResidents('TX')
            },
            "UT": {
                "fillKey": "Republican",
                "residents": getResidents('UT')
            },
            "WI": {
                "fillKey": "Democrat",
                "residents": getResidents('WI')
            },
            "VA": {
                "fillKey": "Light Democrat",
                "residents": getResidents('VA')
            },
            "VT": {
                "fillKey": "Democrat",
                "residents": getResidents('VT')
            },
            "WA": {
                "fillKey": "Democrat",
                "residents": getResidents('WA')
            },
            "WV": {
                "fillKey": "Republican",
                "residents": getResidents('WV')
            },
            "WY": {
                "fillKey": "Republican",
                "residents": getResidents('WY')
            },
            "CA": {
                "fillKey": "Democrat",
                "residents": getResidents('CA')
            },
            "CT": {
                "fillKey": "Democrat",
                "residents": getResidents('CT')
            },
            "AK": {
                "fillKey": "Republican",
                "residents": getResidents('AK')
            },
            "AR": {
                "fillKey": "Republican",
                "residents": getResidents('AR')
            },
            "AL": {
                "fillKey": "Republican",
                "residents": getResidents('AL')
            }
          }
          });
          election.labels();

        },2);

      }
    };
  });
