/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');


        console.log('Received Event: ' + id);

    },
    VibrateDevice: function() {
        navigator.vibrate(3000);
    }

};


var AnalyticsApp = angular.module('AnalyticsSolutionsApp', ['angularTreeview', 'nvd3']);
AnalyticsApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

AnalyticsApp.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });

        return output;
    };
});


AnalyticsApp.controller('MainController', function($scope, $log, $http, geolocation) {
  console.log('ANGULAR CALLED');
  
  /*geolocation.getCurrentPositfindContactsion(function (position) {
    alert('Latitude: '              + position.coords.latitude          + '\n' +
          'Longitude: '             + position.coords.longitude         + '\n' +
          'Altitude: '              + position.coords.altitude          + '\n' +
          'Accuracy: '              + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '               + position.coords.heading           + '\n' +
          'Speed: '                 + position.coords.speed             + '\n' +
          'Timestamp: '             + position.timestamp                + '\n');
  });*/
    
  $scope.onDeviceReady= function() {
      $scope.receivedEvent('deviceready');
      navigator.notification.vibrate(3000);
      $scope.GetDeviceInfo();
      $scope.FindContact('Vikki');
      $scope.record();
  };
    // Received Event
  $scope.receivedEvent= function(id) {
    console.log('Received Event: ' + id);

  };
  
  $scope.GetDeviceInfo= function() {
    console.log('Device: ' + device.model);

  };
    
  $scope.FindContact= function(ContactName) {
   // find all contacts with 'Bob' in any name field
   var options = new ContactFindOptions();
   options.filter = ContactName;
   var fields = ["displayName", "name"];
   navigator.contacts.find(fields, ContactOnSuccess, ContactOnError, options);
      
   function ContactOnSuccess(contacts) {
     for (var i = 0; i < contacts.length; i++) {
         console.log("Display Name = " + contacts[i].displayName);
      }
   }

   // onError: Failed to get the contacts

   function ContactOnError(contactError) {
       alert('onError!');
   }
      
      

  };
    
  $scope.record = function() {
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
      if (event.results.length > 0) {
        $scope.STT = event.results[0][0].transcript;
        console.log($scope.STT);
      }
    }
  };
    
  $scope.STT ='Txt will show here';
  document.addEventListener('deviceready', $scope.onDeviceReady, false);         

});

// phonegap ready service - listens to deviceready
AnalyticsApp.factory('phonegapReady', function() {
    return function(fn) {
        var queue = [];
        var impl = function() {
            queue.push(Array.prototype.slice.call(arguments));
        };

        document.addEventListener('deviceready', function() {
            queue.forEach(function(args) {
                fn.apply(this, args);
            });
            impl = fn;
        }, false);

        return function() {
            return impl.apply(this, arguments);
        };
    };
});

AnalyticsApp.factory('geolocation', function($rootScope, phonegapReady) {
    return {
        getCurrentPosition: function(onSuccess, onError, options) {
            navigator.geolocation.getCurrentPosition(function() {
                    var that = this,
                        args = arguments;

                    if (onSuccess) {
                        $rootScope.$apply(function() {
                            onSuccess.apply(that, args);
                        });
                    }
                }, function() {
                    var that = this,
                        args = arguments;

                    if (onError) {
                        $rootScope.$apply(function() {
                            onError.apply(that, args);
                        });
                    }
                },
                options);
        }
    };
});

AnalyticsApp.factory('accelerometer', function($rootScope, phonegapReady) {
    return {
        getCurrentAcceleration: phonegapReady(function(onSuccess, onError) {
            navigator.accelerometer.getCurrentAcceleration(function() {
                var that = this,
                    args = arguments;

                if (onSuccess) {
                    $rootScope.$apply(function() {
                        onSuccess.apply(that, args);
                    });
                }
            }, function() {
                var that = this,
                    args = arguments;

                if (onError) {
                    $rootScope.$apply(function() {
                        onError.apply(that, args);
                    });
                }
            });
        })
    };
});

AnalyticsApp.factory('notification', function($rootScope, phonegapReady) {
    return {
        alert: phonegapReady(function(message, alertCallback, title, buttonName) {
            navigator.notification.alert(message, function() {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function() {
                    alertCallback.apply(that, args);
                });
            }, title, buttonName);
        }),
        confirm: phonegapReady(function(message, confirmCallback, title, buttonLabels) {
            navigator.notification.confirm(message, function() {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function() {
                    confirmCallback.apply(that, args);
                });
            }, title, buttonLabels);
        }),
        beep: function(times) {
            navigator.notification.beep(times);
        },
        vibrate: function(milliseconds) {
            navigator.notification.vibrate(milliseconds);
        }
    };
});

AnalyticsApp.factory('navSvc', function($navigate) {
    return {
        slidePage: function(path, type) {
            $navigate.go(path, type);
        },
        back: function() {
            $navigate.back();
        }
    }
});

AnalyticsApp.factory('compass', function($rootScope, phonegapReady) {
    return {
        getCurrentHeading: phonegapReady(function(onSuccess, onError) {
            navigator.compass.getCurrentHeading(function() {
                var that = this,
                    args = arguments;

                if (onSuccess) {
                    $rootScope.$apply(function() {
                        onSuccess.apply(that, args);
                    });
                }
            }, function() {
                var that = this,
                    args = arguments;

                if (onError) {
                    $rootScope.$apply(function() {
                        onError.apply(that, args);
                    });
                }
            });
        })
    };
});

AnalyticsApp.factory('contacts', function($rootScope, phonegapReady) {
    return {
        findContacts: phonegapReady(function(onSuccess, onError) {
            var options = new ContactFindOptions();
            options.filter = "";
            options.multiple = true;
            var fields = ["displayName", "name"];
            navigator.contacts.find(fields, function(r) {
                console.log("Success" + r.length);
                var that = this,
                    args = arguments;
                if (onSuccess) {
                    $rootScope.$apply(function() {
                        onSuccess.apply(that, args);
                    });
                }
            }, function() {
                var that = this,
                    args = arguments;

                if (onError) {
                    $rootScope.$apply(function() {
                        onError.apply(that, args);
                    });
                }
            }, options)
        })
    }
});




      (function(l){l.module("angularTreeview",[]).directive("treeModel",function($compile){return{restrict:"A",link:function(a,g,c){var e=c.treeModel,h=c.nodeLabel||"label",d=c.nodeChildren||"children",k='<ul><li data-ng-repeat="node in '+e+'"><i class="collapsed zmdi zmdi-wrench" data-ng-show="node.'+d+'.length && node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="expanded zmdi zmdi-wrench" data-ng-show="node.'+d+'.length && !node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="normal zmdi zmdi-account" data-ng-hide="node.'+
      d+'.length"></i> <span id="[[node.'+c.nodeId+']]" data-ng-class="node.selected" data-ng-click="selectNodeLabel(node, $event)">[[node.'+h+']]</span><div data-ng-hide="node.collapsed" data-tree-model="node.'+d+'" data-node-id='+(c.nodeId||"id")+" data-node-label="+h+" data-node-children="+d+"></div></li></ul>";e&&e.length&&(c.angularTreeview?(a.$watch(e,function(m,b){g.empty().html($compile(k)(a))},!1),a.selectNodeHead=a.selectNodeHead||function(a,b){b.stopPropagation&&b.stopPropagation();b.preventDefault&&b.preventDefault();b.cancelBubble=
      !0;b.returnValue=!1;a.collapsed=!a.collapsed},a.selectNodeLabel=a.selectNodeLabel||function(c,b){b.stopPropagation&&b.stopPropagation();b.preventDefault&&b.preventDefault();b.cancelBubble=!0;b.returnValue=!1;a.currentNode&&a.currentNode.selected&&(a.currentNode.selected=void 0);c.selected="selected";a.currentNode=c}):g.html($compile(k)(a)))}}})})(angular);

      !function(){"use strict";angular.module("nvd3",[]).directive("nvd3",["nvd3Utils",function(nvd3Utils){return{restrict:"AE",scope:{data:"=",options:"=",api:"=?",events:"=?",config:"=?",onReady:"&?"},link:function(scope,element,attrs){function configure(chart,options,chartType){chart&&options&&angular.forEach(chart,function(value,key){"_"===key[0]||("dispatch"===key?(void 0!==options[key]&&null!==options[key]||scope._config.extended&&(options[key]={}),configureEvents(value,options[key])):"tooltip"===key?(void 0!==options[key]&&null!==options[key]||scope._config.extended&&(options[key]={}),configure(chart[key],options[key],chartType)):"contentGenerator"===key?options[key]&&chart[key](options[key]):-1===["axis","clearHighlights","defined","highlightPoint","nvPointerEventsClass","options","rangeBand","rangeBands","scatter","open","close","node"].indexOf(key)&&(void 0===options[key]||null===options[key]?scope._config.extended&&(options[key]=value()):chart[key](options[key])))})}function configureEvents(dispatch,options){dispatch&&options&&angular.forEach(dispatch,function(value,key){void 0===options[key]||null===options[key]?scope._config.extended&&(options[key]=value.on):dispatch.on(key+"._",options[key])})}function configureWrapper(name){var _=nvd3Utils.deepExtend(defaultWrapper(name),scope.options[name]||{});scope._config.extended&&(scope.options[name]=_);var wrapElement=angular.element("<div></div>").html(_.html||"").addClass(name).addClass(_.className).removeAttr("style").css(_.css);_.html||wrapElement.text(_.text),_.enable&&("title"===name?element.prepend(wrapElement):"subtitle"===name?angular.element(element[0].querySelector(".title")).after(wrapElement):"caption"===name&&element.append(wrapElement))}function configureStyles(){var _=nvd3Utils.deepExtend(defaultStyles(),scope.options.styles||{});scope._config.extended&&(scope.options.styles=_),angular.forEach(_.classes,function(value,key){value?element.addClass(key):element.removeClass(key)}),element.removeAttr("style").css(_.css)}function defaultWrapper(_){switch(_){case"title":return{enable:!1,text:"Write Your Title",className:"h4",css:{width:scope.options.chart.width+"px",textAlign:"center"}};case"subtitle":return{enable:!1,text:"Write Your Subtitle",css:{width:scope.options.chart.width+"px",textAlign:"center"}};case"caption":return{enable:!1,text:"Figure 1. Write Your Caption text.",css:{width:scope.options.chart.width+"px",textAlign:"center"}}}}function defaultStyles(){return{classes:{"with-3d-shadow":!0,"with-transitions":!0,gallery:!1},css:{}}}function dataWatchFn(newData,oldData){newData!==oldData&&(scope._config.disabled||(scope._config.refreshDataOnly?scope.api.update():scope.api.refresh()))}var defaultConfig={extended:!1,visible:!0,disabled:!1,refreshDataOnly:!0,deepWatchOptions:!0,deepWatchData:!0,deepWatchDataDepth:2,debounce:10,debounceImmediate:!0};scope.isReady=!1,scope._config=angular.extend(defaultConfig,scope.config),scope.api={refresh:function(){scope.api.updateWithOptions(scope.options),scope.isReady=!0},refreshWithTimeout:function(t){setTimeout(function(){scope.api.refresh()},t)},update:function(){scope.chart&&scope.svg?scope.svg.datum(scope.data).call(scope.chart):scope.api.refresh()},updateWithTimeout:function(t){setTimeout(function(){scope.api.update()},t)},updateWithOptions:function(options){scope.api.clearElement(),angular.isDefined(options)!==!1&&scope._config.visible&&(scope.chart=nv.models[options.chart.type](),scope.chart.id=Math.random().toString(36).substr(2,15),angular.forEach(scope.chart,function(value,key){"_"===key[0]||["clearHighlights","highlightPoint","id","options","resizeHandler","state","open","close","tooltipContent"].indexOf(key)>=0||("dispatch"===key?(void 0!==options.chart[key]&&null!==options.chart[key]||scope._config.extended&&(options.chart[key]={}),configureEvents(scope.chart[key],options.chart[key])):["bars","bars1","bars2","boxplot","bullet","controls","discretebar","distX","distY","interactiveLayer","legend","lines","lines1","lines2","multibar","pie","scatter","scatters1","scatters2","sparkline","stack1","stack2","sunburst","tooltip","x2Axis","xAxis","y1Axis","y2Axis","y3Axis","y4Axis","yAxis","yAxis1","yAxis2"].indexOf(key)>=0||"stacked"===key&&"stackedAreaChart"===options.chart.type?(void 0!==options.chart[key]&&null!==options.chart[key]||scope._config.extended&&(options.chart[key]={}),configure(scope.chart[key],options.chart[key],options.chart.type)):"focusHeight"===key&&"lineChart"===options.chart.type||"focusHeight"===key&&"lineWithFocusChart"===options.chart.type||("xTickFormat"!==key&&"yTickFormat"!==key||"lineWithFocusChart"!==options.chart.type)&&("tooltips"===key&&"boxPlotChart"===options.chart.type||("tooltipXContent"!==key&&"tooltipYContent"!==key||"scatterChart"!==options.chart.type)&&("x"!==key&&"y"!==key||"forceDirectedGraph"!==options.chart.type)&&(void 0===options.chart[key]||null===options.chart[key]?scope._config.extended&&("barColor"===key?options.chart[key]=value()():options.chart[key]=value()):scope.chart[key](options.chart[key]))))}),"sunburstChart"===options.chart.type?scope.api.updateWithData(angular.copy(scope.data)):scope.api.updateWithData(scope.data),(options.title||scope._config.extended)&&configureWrapper("title"),(options.subtitle||scope._config.extended)&&configureWrapper("subtitle"),(options.caption||scope._config.extended)&&configureWrapper("caption"),(options.styles||scope._config.extended)&&configureStyles(),nv.addGraph(function(){return scope.chart?(scope.chart.resizeHandler&&scope.chart.resizeHandler.clear(),scope.chart.resizeHandler=nv.utils.windowResize(function(){scope.chart&&scope.chart.update&&scope.chart.update()}),void 0!==options.chart.zoom&&["scatterChart","lineChart","candlestickBarChart","cumulativeLineChart","historicalBarChart","ohlcBarChart","stackedAreaChart"].indexOf(options.chart.type)>-1&&nvd3Utils.zoom(scope,options),scope.chart):void 0},options.chart.callback))},updateWithData:function(data){if(data){d3.select(element[0]).select("svg").remove();var h,w;scope.svg=d3.select(element[0]).append("svg"),(h=scope.options.chart.height)&&(isNaN(+h)||(h+="px"),scope.svg.attr("height",h).style({height:h})),(w=scope.options.chart.width)?(isNaN(+w)||(w+="px"),scope.svg.attr("width",w).style({width:w})):scope.svg.attr("width","100%").style({width:"100%"}),scope.svg.datum(data).call(scope.chart)}},clearElement:function(){if(element.find(".title").remove(),element.find(".subtitle").remove(),element.find(".caption").remove(),element.empty(),scope.chart&&scope.chart.tooltip&&scope.chart.tooltip.id&&d3.select("#"+scope.chart.tooltip.id()).remove(),nv.graphs&&scope.chart)for(var i=nv.graphs.length-1;i>=0;i--)nv.graphs[i]&&nv.graphs[i].id===scope.chart.id&&nv.graphs.splice(i,1);nv.tooltip&&nv.tooltip.cleanup&&nv.tooltip.cleanup(),scope.chart&&scope.chart.resizeHandler&&scope.chart.resizeHandler.clear(),scope.chart=null},getScope:function(){return scope},getElement:function(){return element}},scope._config.deepWatchOptions&&scope.$watch("options",nvd3Utils.debounce(function(newOptions){scope._config.disabled||scope.api.refresh()},scope._config.debounce,scope._config.debounceImmediate),!0),scope._config.deepWatchData&&(1===scope._config.deepWatchDataDepth?scope.$watchCollection("data",dataWatchFn):scope.$watch("data",dataWatchFn,2===scope._config.deepWatchDataDepth)),scope.$watch("config",function(newConfig,oldConfig){newConfig!==oldConfig&&(scope._config=angular.extend(defaultConfig,newConfig),scope.api.refresh())},!0),scope._config.deepWatchOptions||scope._config.deepWatchData||scope.api.refresh(),angular.forEach(scope.events,function(eventHandler,event){scope.$on(event,function(e,args){return eventHandler(e,scope,args)})}),element.on("$destroy",function(){scope.api.clearElement()}),scope.$watch("isReady",function(isReady){isReady&&scope.onReady&&"function"==typeof scope.onReady()&&scope.onReady()(scope,element)})}}}]).factory("nvd3Utils",function(){return{debounce:function(func,wait,immediate){var timeout;return function(){var context=this,args=arguments,later=function(){timeout=null,immediate||func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout),timeout=setTimeout(later,wait),callNow&&func.apply(context,args)}},deepExtend:function(dst){var me=this;return angular.forEach(arguments,function(obj){obj!==dst&&angular.forEach(obj,function(value,key){dst[key]&&dst[key].constructor&&dst[key].constructor===Object?me.deepExtend(dst[key],value):dst[key]=value})}),dst},zoom:function(scope,options){var zoom=options.chart.zoom,enabled="undefined"==typeof zoom.enabled||null===zoom.enabled?!0:zoom.enabled;if(enabled){var fixDomain,d3zoom,zoomed,unzoomed,zoomend,xScale=scope.chart.xAxis.scale(),yScale=scope.chart.yAxis.scale(),xDomain=scope.chart.xDomain||xScale.domain,yDomain=scope.chart.yDomain||yScale.domain,x_boundary=xScale.domain().slice(),y_boundary=yScale.domain().slice(),scale=zoom.scale||1,translate=zoom.translate||[0,0],scaleExtent=zoom.scaleExtent||[1,10],useFixedDomain=zoom.useFixedDomain||!1,useNiceScale=zoom.useNiceScale||!1,horizontalOff=zoom.horizontalOff||!1,verticalOff=zoom.verticalOff||!1,unzoomEventType=zoom.unzoomEventType||"dblclick.zoom";useNiceScale&&(xScale.nice(),yScale.nice()),fixDomain=function(domain,boundary){return domain[0]=Math.min(Math.max(domain[0],boundary[0]),boundary[1]-boundary[1]/scaleExtent[1]),domain[1]=Math.max(boundary[0]+boundary[1]/scaleExtent[1],Math.min(domain[1],boundary[1])),domain},zoomed=function(){if(void 0!==zoom.zoomed){var domains=zoom.zoomed(xScale.domain(),yScale.domain());horizontalOff||xDomain([domains.x1,domains.x2]),verticalOff||yDomain([domains.y1,domains.y2])}else horizontalOff||xDomain(useFixedDomain?fixDomain(xScale.domain(),x_boundary):xScale.domain()),verticalOff||yDomain(useFixedDomain?fixDomain(yScale.domain(),y_boundary):yScale.domain());scope.chart.update()},unzoomed=function(){if(void 0!==zoom.unzoomed){var domains=zoom.unzoomed(xScale.domain(),yScale.domain());horizontalOff||xDomain([domains.x1,domains.x2]),verticalOff||yDomain([domains.y1,domains.y2])}else horizontalOff||xDomain(x_boundary),verticalOff||yDomain(y_boundary);d3zoom.scale(scale).translate(translate),scope.chart.update()},zoomend=function(){void 0!==zoom.zoomend&&zoom.zoomend()},d3zoom=d3.behavior.zoom().x(xScale).y(yScale).scaleExtent(scaleExtent).on("zoom",zoomed).on("zoomend",zoomend),scope.svg.call(d3zoom),d3zoom.scale(scale).translate(translate).event(scope.svg),"none"!==unzoomEventType&&scope.svg.on(unzoomEventType,unzoomed)}}}})}();
