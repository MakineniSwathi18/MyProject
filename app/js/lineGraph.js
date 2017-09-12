angular.module('myApp')
    .directive('lineChart', [function () {
        return {
            restrict: 'E',
            template: '<div><canvas></canvas></div>',
            scope: {
                graphData: '='
            },
            replace: true,
            link: function (scope, element, attrs, carouselCtrl) {
                scope.id = new Date().getTime();
                var dayLineChart = element.find("canvas");
                dayLineChart[0].width = 300;
                dayLineChart[0].height = 150;
                var lineChart = new Chart(dayLineChart, {
                    type: 'line',
                    data: scope.graphData,

                    options: {
                          scaleShowGridLines : false,
                        legend: {
                            display: false,                                                     
                        },
                        scales: {
                            tooltips: {
                                enabled: false,
                            },
                            xAxes: [{                                
                                gridLines: {
                                    display: false
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: 250,
                                    display: false,
                                       drawBorder: false,
                                        zeroLineWidth: 0,
                                },
                                scaleLineColor: 'transparent',
                                gridLines: {
                                    display: false
                                }
                            }]
                        }
                    }
                  
                });

                //    lineChart.options.legend.display = false; 
            }
        };
    }]);
