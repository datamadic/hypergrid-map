'use strict';

/**
 * @ngdoc directive
 * @name gridApp.directive:gridView
 * @description
 * # gridView
 */
angular.module('gridApp')
  .directive('gridView', function (seedData) {
    return {
      templateUrl: './views/grid-view.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        document.addEventListener('polymer-ready', function() {
          console.log('READYYYYY')
        });

        //setup random data for the JSON tab example
        function init (){

            var data = seedData.getCurrentDataSet();
            var editorTypes = ['choice','textfield','spinner','date','choice','choice','choice','textfield','textfield'];


            setTimeout(function(){
              //get ahold of our json grid example
                var jsonGrid = document.querySelector('#json-example');

                //get it's table model
                var jsonModel = jsonGrid.getBehavior();

                //get the cell cellProvider for altering cell renderers
                var cellProvider = jsonModel.getCellProvider();

                //set the header labels
                jsonModel.setHeaders(seedData.getHeaders());

                //set the fields found on the row objects
                jsonModel.setFields(seedData.getFields());

                //set the actual json row objects
                jsonModel.setData(data);

                //sort ascending on the first column (first name)
    //            jsonModel.toggleSort(0);

                //all formatting and rendering per cell can be overridden in here
                cellProvider.getCell = function(config) {
                    var renderer = cellProvider.cellCache.simpleCellRenderer;
                    config.halign = 'left';
                    var x = config.x;
                    if (x === 2) {
                        config.halign = 'center';
                    } else if (x === 3) {
                        config.halign = 'center';
                    } else if (x === 6) {
                        config.halign = 'center';
                    } else if (x === 7) {
                        var travel = 60 + Math.round(config.value*150/100000);
                        var bcolor = travel.toString(16);
                        config.halign = 'right';
                        config.bgColor = '#00' + bcolor + '00';
                        config.fgColor = '#FFFFFF';
                        config.value = accounting.formatMoney(config.value);
                    } else if (x === 8) {
                        var travel = 105 + Math.round(config.value*150/1000);
                        var bcolor = travel.toString(16);
                        config.halign = 'right';
                        config.bgColor = '#' + bcolor+ '0000';
                        config.fgColor = '#FFFFFF';
                        config.value = accounting.formatMoney(config.value, "€", 2, ".", ",");
                    }

                    renderer.config = config;
                    return renderer;
                };

                //lets override the cell editors, and configure the drop down lists
                jsonModel.getCellEditorAt = function(x, y) {
                    var type = editorTypes[x];
                    var cellEditor = this.grid.cellEditors[type];
                    if (x === 0) {
                        cellEditor.items = lastNames;
                    } else if (x === 4 || x === 5) {
                        cellEditor.items = states;
                    } else if (x === 6) {
                        cellEditor.items = [true, false];
                    }
                    return cellEditor;
                };
            },3)

        };

        // hacky way to find out about if polymer is ready
        $(function(){
          init();
        });

      },//end link
      controller: function($scope, $rootScope){
        $rootScope.$on('flip', function(payload){

          var fronts = document.querySelectorAll('.front'),
              backs = document.querySelectorAll('.back');

          [].forEach.call(fronts, function(node){
            node.classList.remove('front');
            node.classList.add('back');
          });

          [].forEach.call(backs, function(node){
            node.classList.remove('back');
            node.classList.add('front');
          });
        })
      }
    };
  });
