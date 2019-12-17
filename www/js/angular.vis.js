var app = angular.module('AnalyticsSolutionsApp', ['ngAnimate']);


   app.controller('MainController', function($scope,$log) {
        var mainController = this;
        mainController.currentPage = 1;
        mainController.currentFrame = 1;
        $scope.Health = 32;
        $scope.DialData = 40;
        $scope.DynamicTreeType = 'tree';
       
        $scope.showWatson = false;
        $scope.timelineToShow = 'original';
        $scope.Option1Confidence  = 98;  
        $scope.Option2Confidence  = 66;  

        $scope.dataFile = '100';
        $scope.scatterdataFile  = '500';

        $scope.dataFile1 = '100';
        $scope.dataFile2 = '200';
        $scope.dataFile3 = '300';
        $scope.chartToShow = 'option2';

        $scope.EarningValue = '200';
        $scope.ExpenseValue = '150';
        $scope.SavingValue = '50';
     
        $scope.tabToShow = 'profile';
     
      
        //LoadJTree();       
        //createGauges();
        //StartWebSocket();
        $scope.ChangeTab = function(){
          $('#goalsTab').click();
          $('#goalsImg').attr('style','max-width: 300px');
        }     
     
     
     
        mainController.toPage = function(toPage){
            mainController.currentPage = toPage;
            
            if(toPage == 2)
            {
                     //LoadJTree();
                LoadFillDials();
                   
            }

        };

        mainController.toFrame = function(toFrame){
            mainController.currentFrame = toFrame;

        };

       $scope.showData = function(d) {
           if(d.IH && d.MH)
           {
            $scope.Health = d.IH;
            $scope.DialData = d.MH;
            $scope.$apply();
            //alert('D passed');                   
           }else
           {
            $scope.Health = Math.random() * (76 - 45) + 45;
            $scope.DialData = Math.random() * (60 - 15) + 15;
            $scope.$apply();
                   
           }

        };              
       
       
        $scope.masterData = {
            "tenant":[
                {
                    "tenant_cd":"ESP",
                    "tenant_name":"ESP",
                    "isdefault": "false"
                }
            ],
            "event_type":[
                {
                    "event_type_cd":"-NA-",
                    "event_type_name":"Not Applicable"
                }
            ],
            "location":[
                {
                    "location_cd":"-NA-",
                    "location_name":"Not Applicable",
                    "Isactive":"true"
                }
            ],
            "measurement_type":[
            ],
            "resource_type":[
            ],
            "source_system":[
                {
                    "source_system_cd":"-NA-",
                    "source_system_name":"Not Applicable",
                    "isactive":"true"
                }
            ],
            "value_type":[
            ],
            "resource":[
                {
                    "resource_cd1":"-NA-",
                    "resource_name":"Not Applicable",
                    "resource_type_cd":"ASSET",
                    "mfg_date":"2011-06-01",
                    "Isactive":"true"
                }
            ]
        };
       
 
        $scope.treeData2 = [{
            name: 'flare',
            children: [
                {
                    name: 'analytics',
                    children: [
                        {
                            name: 'cluster',
                            children: [
                                {
                                    name: 'AgglomerativeCluster',
                                    size: 3938
                                },
                                {
                                    name: 'CommunityStructure',
                                    size: 3812
                                },
                                {
                                    name: 'HierarchicalCluster',
                                    size: 6714
                                },
                                {
                                    name: 'MergeEdge',
                                    size: 743
                                }
                            ]
                        },
                        {
                            name: 'graph',
                            children: [
                                {
                                    name: 'BetweennessCentrality',
                                    size: 3534
                                },
                                {
                                    name: 'LinkDistance',
                                    size: 5731
                                },
                                {
                                    name: 'MaxFlowMinCut',
                                    size: 7840
                                },
                                {
                                    name: 'ShortestPaths',
                                    size: 5914
                                },
                                {
                                    name: 'SpanningTree',
                                    size: 3416
                                }
                            ]
                        },
                        {
                            name: 'optimization',
                            children: [{
                                    name: 'AspectRatioBanker',
                                    size: 7074
                                }]
                        }
                    ]
                },
                {
                    name: 'animate',
                    children: [
                        {
                            name: 'Easing',
                            size: 17010
                        },
                        {
                            name: 'FunctionSequence',
                            size: 5842
                        },
                        {
                            name: 'interpolate',
                            children: [
                                {
                                    name: 'ArrayInterpolator',
                                    size: 1983
                                },
                                {
                                    name: 'ColorInterpolator',
                                    size: 2047
                                },
                                {
                                    name: 'DateInterpolator',
                                    size: 1375
                                },
                                {
                                    name: 'Interpolator',
                                    size: 8746
                                },
                                {
                                    name: 'MatrixInterpolator',
                                    size: 2202
                                },
                                {
                                    name: 'NumberInterpolator',
                                    size: 1382
                                },
                                {
                                    name: 'ObjectInterpolator',
                                    size: 1629
                                },
                                {
                                    name: 'PointInterpolator',
                                    size: 1675
                                },
                                {
                                    name: 'RectangleInterpolator',
                                    size: 2042
                                }
                            ]
                        },
                        {
                            name: 'ISchedulable',
                            size: 1041
                        },
                        {
                            name: 'Parallel',
                            size: 5176
                        },
                        {
                            name: 'Pause',
                            size: 449
                        },
                        {
                            name: 'Scheduler',
                            size: 5593
                        },
                        {
                            name: 'Sequence',
                            size: 5534
                        },
                        {
                            name: 'Transition',
                            size: 9201
                        },
                        {
                            name: 'Transitioner',
                            size: 19975
                        },
                        {
                            name: 'TransitionEvent',
                            size: 1116
                        },
                        {
                            name: 'Tween',
                            size: 6006
                        }
                    ]
                },
                {
                    name: 'data',
                    children: [
                        {
                            name: 'converters',
                            children: [
                                {
                                    name: 'Converters',
                                    size: 721
                                },
                                {
                                    name: 'DelimitedTextConverter',
                                    size: 4294
                                },
                                {
                                    name: 'GraphMLConverter',
                                    size: 9800
                                },
                                {
                                    name: 'IDataConverter',
                                    size: 1314
                                },
                                {
                                    name: 'JSONConverter',
                                    size: 2220
                                }
                            ]
                        },
                        {
                            name: 'DataField',
                            size: 1759
                        },
                        {
                            name: 'DataSchema',
                            size: 2165
                        },
                        {
                            name: 'DataSet',
                            size: 586
                        },
                        {
                            name: 'DataSource',
                            size: 3331
                        },
                        {
                            name: 'DataTable',
                            size: 772
                        },
                        {
                            name: 'DataUtil',
                            size: 3322
                        }
                    ]
                },
                {
                    name: 'display',
                    children: [
                        {
                            name: 'DirtySprite',
                            size: 8833
                        },
                        {
                            name: 'LineSprite',
                            size: 1732
                        },
                        {
                            name: 'RectSprite',
                            size: 3623
                        },
                        {
                            name: 'TextSprite',
                            size: 10066
                        }
                    ]
                },
                {
                    name: 'flex',
                    children: [{
                            name: 'FlareVis',
                            size: 4116
                        }]
                },
                {
                    name: 'physics',
                    children: [
                        {
                            name: 'DragForce',
                            size: 1082
                        },
                        {
                            name: 'GravityForce',
                            size: 1336
                        },
                        {
                            name: 'IForce',
                            size: 319
                        },
                        {
                            name: 'NBodyForce',
                            size: 10498
                        },
                        {
                            name: 'Particle',
                            size: 2822
                        },
                        {
                            name: 'Simulation',
                            size: 9983
                        },
                        {
                            name: 'Spring',
                            size: 2213
                        },
                        {
                            name: 'SpringForce',
                            size: 1681
                        }
                    ]
                },
                {
                    name: 'query',
                    children: [
                        {
                            name: 'AggregateExpression',
                            size: 1616
                        },
                        {
                            name: 'And',
                            size: 1027
                        },
                        {
                            name: 'Arithmetic',
                            size: 3891
                        },
                        {
                            name: 'Average',
                            size: 891
                        },
                        {
                            name: 'BinaryExpression',
                            size: 2893
                        },
                        {
                            name: 'Comparison',
                            size: 5103
                        },
                        {
                            name: 'CompositeExpression',
                            size: 3677
                        },
                        {
                            name: 'Count',
                            size: 781
                        },
                        {
                            name: 'DateUtil',
                            size: 4141
                        },
                        {
                            name: 'Distinct',
                            size: 933
                        },
                        {
                            name: 'Expression',
                            size: 5130
                        },
                        {
                            name: 'ExpressionIterator',
                            size: 3617
                        },
                        {
                            name: 'Fn',
                            size: 3240
                        },
                        {
                            name: 'If',
                            size: 2732
                        },
                        {
                            name: 'IsA',
                            size: 2039
                        },
                        {
                            name: 'Literal',
                            size: 1214
                        },
                        {
                            name: 'Match',
                            size: 3748
                        },
                        {
                            name: 'Maximum',
                            size: 843
                        },
                        {
                            name: 'methods',
                            children: [
                                {
                                    name: 'add',
                                    size: 593
                                },
                                {
                                    name: 'and',
                                    size: 330
                                },
                                {
                                    name: 'average',
                                    size: 287
                                },
                                {
                                    name: 'count',
                                    size: 277
                                },
                                {
                                    name: 'distinct',
                                    size: 292
                                },
                                {
                                    name: 'div',
                                    size: 595
                                },
                                {
                                    name: 'eq',
                                    size: 594
                                },
                                {
                                    name: 'fn',
                                    size: 460
                                },
                                {
                                    name: 'gt',
                                    size: 603
                                },
                                {
                                    name: 'gte',
                                    size: 625
                                },
                                {
                                    name: 'iff',
                                    size: 748
                                },
                                {
                                    name: 'isa',
                                    size: 461
                                },
                                {
                                    name: 'lt',
                                    size: 597
                                },
                                {
                                    name: 'lte',
                                    size: 619
                                },
                                {
                                    name: 'max',
                                    size: 283
                                },
                                {
                                    name: 'min',
                                    size: 283
                                },
                                {
                                    name: 'mod',
                                    size: 591
                                },
                                {
                                    name: 'mul',
                                    size: 603
                                },
                                {
                                    name: 'neq',
                                    size: 599
                                },
                                {
                                    name: 'not',
                                    size: 386
                                },
                                {
                                    name: 'or',
                                    size: 323
                                },
                                {
                                    name: 'orderby',
                                    size: 307
                                },
                                {
                                    name: 'range',
                                    size: 772
                                },
                                {
                                    name: 'select',
                                    size: 296
                                },
                                {
                                    name: 'stddev',
                                    size: 363
                                },
                                {
                                    name: 'sub',
                                    size: 600
                                },
                                {
                                    name: 'sum',
                                    size: 280
                                },
                                {
                                    name: 'update',
                                    size: 307
                                },
                                {
                                    name: 'variance',
                                    size: 335
                                },
                                {
                                    name: 'where',
                                    size: 299
                                },
                                {
                                    name: 'xor',
                                    size: 354
                                },
                                {
                                    name: '_',
                                    size: 264
                                }
                            ]
                        },
                        {
                            name: 'Minimum',
                            size: 843
                        },
                        {
                            name: 'Not',
                            size: 1554
                        },
                        {
                            name: 'Or',
                            size: 970
                        },
                        {
                            name: 'Query',
                            size: 13896
                        },
                        {
                            name: 'Range',
                            size: 1594
                        },
                        {
                            name: 'StringUtil',
                            size: 4130
                        },
                        {
                            name: 'Sum',
                            size: 791
                        },
                        {
                            name: 'Variable',
                            size: 1124
                        },
                        {
                            name: 'Variance',
                            size: 1876
                        },
                        {
                            name: 'Xor',
                            size: 1101
                        }
                    ]
                },
                {
                    name: 'scale',
                    children: [
                        {
                            name: 'IScaleMap',
                            size: 2105
                        },
                        {
                            name: 'LinearScale',
                            size: 1316
                        },
                        {
                            name: 'LogScale',
                            size: 3151
                        },
                        {
                            name: 'OrdinalScale',
                            size: 3770
                        },
                        {
                            name: 'QuantileScale',
                            size: 2435
                        },
                        {
                            name: 'QuantitativeScale',
                            size: 4839
                        },
                        {
                            name: 'RootScale',
                            size: 1756
                        },
                        {
                            name: 'Scale',
                            size: 4268
                        },
                        {
                            name: 'ScaleType',
                            size: 1821
                        },
                        {
                            name: 'TimeScale',
                            size: 5833
                        }
                    ]
                },
                {
                    name: 'util',
                    children: [
                        {
                            name: 'Arrays',
                            size: 8258
                        },
                        {
                            name: 'Colors',
                            size: 10001
                        },
                        {
                            name: 'Dates',
                            size: 8217
                        },
                        {
                            name: 'Displays',
                            size: 12555
                        },
                        {
                            name: 'Filter',
                            size: 2324
                        },
                        {
                            name: 'Geometry',
                            size: 10993
                        },
                        {
                            name: 'heap',
                            children: [
                                {
                                    name: 'FibonacciHeap',
                                    size: 9354
                                },
                                {
                                    name: 'HeapNode',
                                    size: 1233
                                }
                            ]
                        },
                        {
                            name: 'IEvaluable',
                            size: 335
                        },
                        {
                            name: 'IPredicate',
                            size: 383
                        },
                        {
                            name: 'IValueProxy',
                            size: 874
                        },
                        {
                            name: 'math',
                            children: [
                                {
                                    name: 'DenseMatrix',
                                    size: 3165
                                },
                                {
                                    name: 'IMatrix',
                                    size: 2815
                                },
                                {
                                    name: 'SparseMatrix',
                                    size: 3366
                                }
                            ]
                        },
                        {
                            name: 'Maths',
                            size: 17705
                        },
                        {
                            name: 'Orientation',
                            size: 1486
                        },
                        {
                            name: 'palette',
                            children: [
                                {
                                    name: 'ColorPalette',
                                    size: 6367
                                },
                                {
                                    name: 'Palette',
                                    size: 1229
                                },
                                {
                                    name: 'ShapePalette',
                                    size: 2059
                                },
                                {
                                    name: 'SizePalette',
                                    size: 2291
                                }
                            ]
                        },
                        {
                            name: 'Property',
                            size: 5559
                        },
                        {
                            name: 'Shapes',
                            size: 19118
                        },
                        {
                            name: 'Sort',
                            size: 6887
                        },
                        {
                            name: 'Stats',
                            size: 6557
                        },
                        {
                            name: 'Strings',
                            size: 22026
                        }
                    ]
                },
                {
                    name: 'vis',
                    children: [
                        {
                            name: 'axis',
                            children: [
                                {
                                    name: 'Axes',
                                    size: 1302
                                },
                                {
                                    name: 'Axis',
                                    size: 24593
                                },
                                {
                                    name: 'AxisGridLine',
                                    size: 652
                                },
                                {
                                    name: 'AxisLabel',
                                    size: 636
                                },
                                {
                                    name: 'CartesianAxes',
                                    size: 6703
                                }
                            ]
                        },
                        {
                            name: 'controls',
                            children: [
                                {
                                    name: 'AnchorControl',
                                    size: 2138
                                },
                                {
                                    name: 'ClickControl',
                                    size: 3824
                                },
                                {
                                    name: 'Control',
                                    size: 1353
                                },
                                {
                                    name: 'ControlList',
                                    size: 4665
                                },
                                {
                                    name: 'DragControl',
                                    size: 2649
                                },
                                {
                                    name: 'ExpandControl',
                                    size: 2832
                                },
                                {
                                    name: 'HoverControl',
                                    size: 4896
                                },
                                {
                                    name: 'IControl',
                                    size: 763
                                },
                                {
                                    name: 'PanZoomControl',
                                    size: 5222
                                },
                                {
                                    name: 'SelectionControl',
                                    size: 7862
                                },
                                {
                                    name: 'TooltipControl',
                                    size: 8435
                                }
                            ]
                        },
                        {
                            name: 'data',
                            children: [
                                {
                                    name: 'Data',
                                    size: 20544
                                },
                                {
                                    name: 'DataList',
                                    size: 19788
                                },
                                {
                                    name: 'DataSprite',
                                    size: 10349
                                },
                                {
                                    name: 'EdgeSprite',
                                    size: 3301
                                },
                                {
                                    name: 'NodeSprite',
                                    size: 19382
                                },
                                {
                                    name: 'render',
                                    children: [
                                        {
                                            name: 'ArrowType',
                                            size: 698
                                        },
                                        {
                                            name: 'EdgeRenderer',
                                            size: 5569
                                        },
                                        {
                                            name: 'IRenderer',
                                            size: 353
                                        },
                                        {
                                            name: 'ShapeRenderer',
                                            size: 2247
                                        }
                                    ]
                                },
                                {
                                    name: 'ScaleBinding',
                                    size: 11275
                                },
                                {
                                    name: 'Tree',
                                    size: 7147
                                },
                                {
                                    name: 'TreeBuilder',
                                    size: 9930
                                }
                            ]
                        },
                        {
                            name: 'events',
                            children: [
                                {
                                    name: 'DataEvent',
                                    size: 2313
                                },
                                {
                                    name: 'SelectionEvent',
                                    size: 1880
                                },
                                {
                                    name: 'TooltipEvent',
                                    size: 1701
                                },
                                {
                                    name: 'VisualizationEvent',
                                    size: 1117
                                }
                            ]
                        },
                        {
                            name: 'legend',
                            children: [
                                {
                                    name: 'Legend',
                                    size: 20859
                                },
                                {
                                    name: 'LegendItem',
                                    size: 4614
                                },
                                {
                                    name: 'LegendRange',
                                    size: 10530
                                }
                            ]
                        },
                        {
                            name: 'operator',
                            children: [
                                {
                                    name: 'distortion',
                                    children: [
                                        {
                                            name: 'BifocalDistortion',
                                            size: 4461
                                        },
                                        {
                                            name: 'Distortion',
                                            size: 6314
                                        },
                                        {
                                            name: 'FisheyeDistortion',
                                            size: 3444
                                        }
                                    ]
                                },
                                {
                                    name: 'encoder',
                                    children: [
                                        {
                                            name: 'ColorEncoder',
                                            size: 3179
                                        },
                                        {
                                            name: 'Encoder',
                                            size: 4060
                                        },
                                        {
                                            name: 'PropertyEncoder',
                                            size: 4138
                                        },
                                        {
                                            name: 'ShapeEncoder',
                                            size: 1690
                                        },
                                        {
                                            name: 'SizeEncoder',
                                            size: 1830
                                        }
                                    ]
                                },
                                {
                                    name: 'filter',
                                    children: [
                                        {
                                            name: 'FisheyeTreeFilter',
                                            size: 5219
                                        },
                                        {
                                            name: 'GraphDistanceFilter',
                                            size: 3165
                                        },
                                        {
                                            name: 'VisibilityFilter',
                                            size: 3509
                                        }
                                    ]
                                },
                                {
                                    name: 'IOperator',
                                    size: 1286
                                },
                                {
                                    name: 'label',
                                    children: [
                                        {
                                            name: 'Labeler',
                                            size: 9956
                                        },
                                        {
                                            name: 'RadialLabeler',
                                            size: 3899
                                        },
                                        {
                                            name: 'StackedAreaLabeler',
                                            size: 3202
                                        }
                                    ]
                                },
                                {
                                    name: 'layout',
                                    children: [
                                        {
                                            name: 'AxisLayout',
                                            size: 6725
                                        },
                                        {
                                            name: 'BundledEdgeRouter',
                                            size: 3727
                                        },
                                        {
                                            name: 'CircleLayout',
                                            size: 9317
                                        },
                                        {
                                            name: 'CirclePackingLayout',
                                            size: 12003
                                        },
                                        {
                                            name: 'DendrogramLayout',
                                            size: 4853
                                        },
                                        {
                                            name: 'ForceDirectedLayout',
                                            size: 8411
                                        },
                                        {
                                            name: 'IcicleTreeLayout',
                                            size: 4864
                                        },
                                        {
                                            name: 'IndentedTreeLayout',
                                            size: 3174
                                        },
                                        {
                                            name: 'Layout',
                                            size: 7881
                                        },
                                        {
                                            name: 'NodeLinkTreeLayout',
                                            size: 12870
                                        },
                                        {
                                            name: 'PieLayout',
                                            size: 2728
                                        },
                                        {
                                            name: 'RadialTreeLayout',
                                            size: 12348
                                        },
                                        {
                                            name: 'RandomLayout',
                                            size: 870
                                        },
                                        {
                                            name: 'StackedAreaLayout',
                                            size: 9121
                                        },
                                        {
                                            name: 'TreeMapLayout',
                                            size: 9191
                                        }
                                    ]
                                },
                                {
                                    name: 'Operator',
                                    size: 2490
                                },
                                {
                                    name: 'OperatorList',
                                    size: 5248
                                },
                                {
                                    name: 'OperatorSequence',
                                    size: 4190
                                },
                                {
                                    name: 'OperatorSwitch',
                                    size: 2581
                                },
                                {
                                    name: 'SortOperator',
                                    size: 2023
                                }
                            ]
                        },
                        {
                            name: 'Visualization',
                            size: 16540
                        }
                    ]
                }
            ]
        }];
      
       
        $scope.pubs =
        {
            "name": "ESP Solution",
            "children": [
                {
                    "name": "Location 1","children": [
                        {"name": "Well 11","children": [
                            {"name": "ESP 111"},
                            {"name": "ESP 112"}
                        ]},
                        {"name": "Well 12","children": [
                            {"name": "ESP 121"}
                        ]},
                        {"name": "Well 13","children": [
                            {"name": "ESP 131"},
                            {"name": "ESP 132"}
                        ]},
                        {"name": "Well 14","children": [
                            {"name": "ESP 141"}
                        ]}
                    ]
                },
                {
                    "name": "Location 2","children": [
                        {"name": "Well 21"},
                        {"name": "Well 22"},
                        {"name": "Well 23"},
                        {"name": "Well 24"},
                        {"name": "Well 25"},
                        {"name": "Well 26"},
                        {"name": "Well 27"},
                        {"name": "Well 28","children":[
                            {"name": "ESP 281"},
                            {"name": "ESP 282"},
                            {"name": "ESP 283"},
                            {"name": "ESP 284"},
                            {"name": "ESP 285"},
                            {"name": "ESP 286"}
                        ]}
                    ]
                },
                {"name": "Location 3"},
                {
                    "name": "Location 4","children": [
                        {"name": "Well 41"},
                        {"name": "Well 42"},
                        {"name": "Well 43","children": [
                            {"name": "ESP 431"},
                            {"name": "ESP 432"},
                            {"name": "ESP 433"},
                            {"name": "ESP 434","children":[
                                {"name": "Motor  4341"},
                                {"name": "Motor  4342"},
                            ]}
                        ]},
                        {"name": "Well 44"}
                    ]
                },
                {
                    "name": "Location 5","children": [
                        {"name": "Well 51","children":[
                            {"name": "ESP 511"},
                            {"name": "ESP 512"},
                            {"name": "ESP 513"},
                            {"name": "ESP 514"},
                            {"name": "ESP 515"},
                            {"name": "ESP 516"}
                        ]},
                        {"name": "Well 52"},
                        {"name": "Well 53"},
                        {"name": "Well 54"},
                        {"name": "Well 55","children":[
                            {"name": "ESP 551"},
                            {"name": "ESP 552"},
                            {"name": "ESP 553"},
                            {"name": "ESP 554"}
                        ]},
                        {"name": "Well 56"},
                        {"name": "Well 57"},
                        {"name": "Well 58"},
                        {"name": "Well 59"},
                        {"name": "Well 591"},
                        {"name": "Well 592"},
                        {"name": "Well 593"},
                        {"name": "Well 594"},
                        {"name": "Well 595"},
                        {"name": "Well 596"}
                    ]
                },
                {
                    "name": "Location 6","children": [
                      {"name": "Well 61","children":[
                          {"name": "ESP 611"},
                          {"name": "ESP 612"},
                          {"name": "ESP 613"},
                          {"name": "ESP 614","children":[
                              {"name": "Motor  6141"},
                              {"name": "Motor  6142"},
                          ]}
                      ]},
                      {"name": "Well 62"},
                      {"name": "Well 63"},
                      {"name": "Well 64"},
                      {"name": "Well 65"},
                      {"name": "Well 66"},
                      {"name": "Well 67"},
                      {"name": "Well 68"},
                      {"name": "Well 69"}
                    ]
                }
            ]
        };       
       
       
        $scope.addNew = function(dataType){
            if($("#"+dataType+" .ng-invalid").length == 0){
                $scope.masterData[dataType].push(this["new"+dataType]);
                this["new"+dataType] = {};
            }
        };
    
        $scope.remove = function(dataType, index){
            $scope.masterData[dataType].splice(index, 1);
        };
    
        $scope.done = function(){
            // Simple POST request example (passing data) :
            $http.post('http://9.109.42.172:7080/masterdata', $scope.masterData).
              then(function(response) {
                alert('success');
              }, function(response) {
                alert('failure');
              });
            console.log($scope.masterData);
        };
       
        $scope.myData = [10,20,30,40,60];
        $scope.treeData = [
            { id : 'ajson1', parent : '#', text : 'ESP Solution', state: { opened: true} },
            { id : 'ajson2', parent : '#', text : 'Location', state: { opened: true} },
            { id : 'ajson3', parent : 'ajson2', text : 'Well', state: { opened: true} },
            { id : 'ajson4', parent : 'ajson2', text : 'Pump' , state: { opened: true}}
        ];
             
        $scope.treeConfig = {
            core : {
                multiple : false,
                animation: true,
                error : function(error) {
                    $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
                },
                check_callback : true,
                worker : true
            },
            types : {
                default : {
                    icon : 'glyphicon glyphicon-flash'
                },
                star : {
                    icon : 'glyphicon glyphicon-star'
                },
                cloud : {
                    icon : 'glyphicon glyphicon-cloud'
                }
            },
            version : 1,
            plugins : ['contextmenu','dnd','massload','search','state','types','unique','wholerow','changed']
        };
             
        $scope.readyCB = function() {
            $log.info('ready called');
        };

        $scope.changeCB = function() {
            $log.info('change called');
        };

        $scope.createNodeCB = function(e,item) {
            $log.info('create_node called');
        };
                       
    });

    var gauges = [];

    app.directive('barsChart', function () { // Angular Directive
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         //our data source would be an array
         //passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           //in D3, any selection[0] contains the group
           //selection[0][0] is the DOM node
           //but we won't need that this time
           var chart = d3.select(element[0]);
           //to our original directive markup bars-chart
           //we add a div with out chart stling and bind each
           //data entry to the chart
            chart.append("div").attr("class", "barchart")
             .selectAll('div')
             .data(scope.data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
           //a little of magic: setting it's width based
           //on the data value (d) 
           //and text all with a smooth transition
         } 
      };
      return directiveDefinitionObject;
        
    });    

    app.directive('dChart', function () { // Angular Directive
        return { restrict: 'E', 
        scope: { data: '=chartData',
                 width: '=chartWidth',
                 height: '=chartHeight'},
        link: function(scope, element) {
            var data = scope.data;
            var height = scope.height;
            var width = scope.width;
          
            var dialGauge;
            x3d = d3.select(element[0])
                    .append("x3d")
                    .attr( "height", "200px" )
                    .attr( "width", "800px" )
                    ;
            var scene = x3d.append("scene");
            scene.append("viewpoint")
                 .attr( "centerOfRotation", "3.75 0 10")
                 .attr( "position", "13.742265188709691 -27.453522975182366 16.816062840792625" )
                 .attr( "orientation", "0.962043810961999 0.1696342804961945 0.21376603254551874 1.379433089729343" )
                 ;

            function refresh( data ) {
              shapes = scene.selectAll("transform").data( data );
              shapesEnter = shapes
                   .enter()
                   .append( "transform" )
                   .append( "shape" )
                   ;
              // Enter and update
              shapes.transition()
                    .attr("translation", function(d,i) { return i*1.5 + " 0.0 " + d/2.0; } )
                    .attr("scale", function(d) { return "1.0 1.0 " + d; } )
                    ;

              shapesEnter
                  .append("appearance")
                    .append("material")
                    .attr("diffuseColor", "steelblue" );

              shapesEnter.append( "box" )
                .attr( "size", "1.0 1.0 1.0" );
            }

            refresh( randomData() )
            setInterval(
              function(){
                refresh( randomData() );
              },
              2500);
          
          function randomData() {
            return d3.range(6).map( function() { return Math.random()*20; } )
          };
            
        }};
        
    });    

    app.directive('groupedbarsChart', function () { // Angular Directive
        return { replace: true,
                 restrict: 'AE', 
        scope: { width: '=chartWidth',
                 height: '=chartHeight',
                 file: '=chartFile'},
        link: function(scope, element) {
            var dataFile = scope.file;
            var chartheight = scope.height;
            var chartwidth = scope.width;
            
              /***************************
                GRAPH container
              ****************************/          
            var margin = {top: 20, right: 180, bottom: 30, left: 50},
                width = chartwidth - margin.left - margin.right,
                height = chartheight - margin.top - margin.bottom;
              /***************************
                SCALE
              ****************************/
            var x0 = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var x1 = d3.scale.ordinal();

            var y = d3.scale.linear()
                .range([height, 0]);
              /***************************
                COLORS
              ****************************/
            var color = d3.scale.ordinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
              /***************************
                AXIS
              ****************************/
            var xAxis = d3.svg.axis()
                .scale(x0)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left")
                .tickFormat(d3.format(".2s"));
             /***************************
                SVG
              ****************************/
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
             /***************************
                Shadows styling
              ****************************/            
            // filters go in defs element
            var defs = svg.append("defs");

            // create filter with id #drop-shadow
            // height=130% so that the shadow is not clipped
            var filter = defs.append("filter")
                .attr("id", "drop-shadow")
                .attr("height", "130%");

            // SourceAlpha refers to opacity of graphic that this filter will be applied to
            // convolve that with a Gaussian with standard deviation 3 and store result
            // in blur
            filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 1.5)
                .attr("result", "blur");

            // translate output of Gaussian blur to the right and downwards with 2px
            // store result in offsetBlur
            filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 2.5)
                .attr("dy", 2)
                .attr("result", "offsetBlur");

            // overlay original SourceGraphic over translated blurred opacity by using
            // feMerge filter. Order of specifying inputs is important!
            var feMerge = filter.append("feMerge");

            feMerge.append("feMergeNode")
                .attr("in", "offsetBlur")
            feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");            

             /***************************
                Draw Bars
              ****************************/            
            function CreateBars(data,update)
            {
                    if(fileName == '100')
                    {
                        var  data = [
                                              {
                                                "Category":1,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":54750
                                              },
                                              {
                                                "Category":2,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":109500
                                              },
                                              {
                                                "Category":3,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":164250
                                              },
                                              {
                                                "Category":4,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":219000
                                              },
                                              {
                                                "Category":5,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":273750
                                              },
                                              {
                                                "Category":6,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Cumulative Savings":28500
                                              },
                                              {
                                                "Category":7,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":83250
                                              },
                                              {
                                                "Category":8,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Cumulative Savings":162000
                                              },
                                              {
                                                "Category":9,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":107250
                                              },
                                              {
                                                "Category":10,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":52500
                                              },
                                              {
                                                "Category":11,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":2250
                                              },
                                              {
                                                "Category":12,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":57000
                                              },
                                              {
                                                "Category":13,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":111750
                                              }
                                            ]  ; 
                        update = false;
                    }else if (fileName == '200')
                    {
                        var  data = [
                              {
                                "Category":1,
                                "Income":127750,
                                "Loan":15000,
                                "Goal Expense":15000,
                                "EMI Expense":9720,
                                "Cumulative Savings":118030
                              },
                              {
                                "Category":2,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Cumulative Savings":236060
                              },
                              {
                                "Category":3,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Cumulative Savings":354090
                              },
                              {
                                "Category":4,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":481840
                              },
                              {
                                "Category":5,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":609590
                              },
                              {
                                "Category":6,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Cumulative Savings":437340
                              },
                              {
                                "Category":7,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":565090
                              },
                              {
                                "Category":8,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Cumulative Savings":392840
                              },
                              {
                                "Category":9,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":520590
                              },
                              {
                                "Category":10,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":648340
                              },
                              {
                                "Category":11,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":776090
                              },
                              {
                                "Category":12,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":903840
                              },
                              {
                                "Category":13,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Cumulative Savings":1031590
                              }
                            ] ;     
                        update = true;                            
                    }else if (fileName == '300')
                    {
                        var  data = [
                                              {
                                                "Category":1,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":54750
                                              },
                                              {
                                                "Category":2,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":109500
                                              },
                                              {
                                                "Category":3,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":164250
                                              },
                                              {
                                                "Category":4,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":219000
                                              },
                                              {
                                                "Category":5,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":273750
                                              },
                                              {
                                                "Category":6,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Cumulative Savings":28500
                                              },
                                              {
                                                "Category":7,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":83250
                                              },
                                              {
                                                "Category":8,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Cumulative Savings":162000
                                              },
                                              {
                                                "Category":9,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":107250
                                              },
                                              {
                                                "Category":10,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":52500
                                              },
                                              {
                                                "Category":11,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":2250
                                              },
                                              {
                                                "Category":12,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":57000
                                              },
                                              {
                                                "Category":13,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Cumulative Savings":111750
                                              }
                                            ]  ;     
                          update = true;                          
                    }

                      var SubCategory = d3.keys(data[0]).filter(function(key) { return key !== "Category"; });

                      data.forEach(function(d) {
                        d.subcategory = SubCategory.map(function(name) { return {name: name, value: +d[name]}; });

                      });

                      x0.domain(data.map(function(d) { return d.Category; }));
                      x1.domain(SubCategory).rangeRoundBands([0, x0.rangeBand()]);
                      y.domain([0, d3.max(data, function(d) { return d3.max(d.subcategory, function(d) { return d.value; }); })]);

                      /* Remove X axis */
                      svg.select(".x.axis").remove();
                
                      svg.append("g")
                          .attr("class", "x axis")
                          .attr("transform", "translate(0," + height + ")")
                          .call(xAxis);
                      /* Remove Y axis */
                      svg.select(".y.axis").remove();

                      svg.append("g")
                          .attr("class", "y axis")
                          .call(yAxis)
                          .append("text")
                          .attr("transform", "rotate(-90)")
                          .attr("y", 6)
                          .attr("dy", ".71em")
                          .style("text-anchor", "end");
              
                      var Cat = svg.selectAll(".Category")
                          .data(data)
                          .enter().append("g")
                          .attr("class", "Category")
                          .attr("transform", function(d) { return "translate(" + x0(d.Category) + ",0)"; });
              
                      /* rectangles */  
                      var rects = Cat.selectAll("rect")
                          .data(function(d) { return d.subcategory; });
                
                      if (update) {
                          svg.selectAll("rect").transition().duration(750).attr("height", 0).attr("width", 0).remove();
                          
                          rects.enter().append("rect")
                            .attr("width", 0)
                            .attr("x", function(d) { return x1(d.name); })
                            .attr("y", function(d) { return y(d.value); })
                            .attr("height", 0)
                            .style("filter", "url(#drop-shadow)")                    
                            .style("fill", function(d) { return color(d.name); });
                            /* Show and hide tip on mouse events */
                            //.on('mouseover', tip.show)
                            //.on('mouseout', tip.hide); 
                          rects.exit().transition().duration(750).attr("height", 0).attr("width", 0).remove();
                          rects.transition().duration(750)
                            .attr("y", function(d) { return y(d.value); })
                            .attr("height", function(d) { return height - y(d.value); })
                            .attr("width", x1.rangeBand());                          
                      } else {
                          rects.enter().append("rect")
                            .transition().duration(750)
                            .attr("width", x1.rangeBand())
                            .attr("x", function(d) { return x1(d.name); })
                            .attr("y", function(d) { return y(d.value); })
                            .attr("height", function(d) { return height - y(d.value); })
                            .style("filter", "url(#drop-shadow)")                                              
                            .style("fill", function(d) { return color(d.name); });
                         rects.exit().remove();
                      } 

                
                      var legend = svg.selectAll(".legend")
                          .data(SubCategory.slice().reverse())
                          .enter().append("g")
                          .attr("class", "legend")
                          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                      legend.append("rect")
                          .attr("x", width )
                          .attr("width", 18)
                          .attr("height", 18)
                          .style("fill", color);

                      legend.append("text")
                          .attr("x", width + 25)
                          .attr("y", 9)
                          .attr("dy", ".35em")
                          .style("text-anchor", "start")
                          .text(function(d) { return d; });

            }
            
            scope.$watchCollection("file", function(newValue, oldValue) { 
                    alert("comes here");
                    if(newValue == '100')
                    {                alert("then here")

                      d3.csv("data-column.csv", function(error, data) {
                        CreateBars(data, false);
                      });               
                    }else if (newValue = '200')
                    {
                      d3.csv("data.csv", function(error, data) {
                        CreateBars(data, true);
                      });                    
                    }
            });
            
        }};
        
    });    

    app.directive('groupbarsChart', function () { // Angular Directive
        return { replace: true,
                 restrict: 'AE', 
        scope: { width: '=chartWidth',
                 height: '=chartHeight',
                 file: '=chartFile'},
        link: function(scope, element) {
            var dataFile = scope.file;
            var chartheight = scope.height;
            var chartwidth = scope.width;
          

                /***************************
                  GRAPH container
                ****************************/
                var margin = {top: 20, right: 180, bottom: 30, left: 50},
                    width = chartwidth - margin.left - margin.right,
                    height = chartheight - margin.top - margin.bottom;

                /***************************
                  SCALE
                ****************************/

                var x0 = d3.scale.ordinal()
                    .rangeRoundBands([10, width-50], .3); // (interval[, padding])  // interval: distance from point 0 // padding distance of categories from each other

                var x1 = d3.scale.ordinal();

                var y = d3.scale.linear()
                    .range([height, 0]);

                /***************************
                  COLORS
                ****************************/

                var color = d3.scale.ordinal()
                    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

                /***************************
                  AXIS
                ****************************/

                var xAxis = d3.svg.axis() // set scale + orient
                    .scale(x0)
                    .orient("bottom");

                var yAxis = d3.svg.axis() // set scale + orient
                    .scale(y)
                    .orient("left")
                    .tickFormat(d3.format(".2s")); // scale number format

                /***************************
                  SVG
                ****************************/

                var svg = d3.select(element[0]).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                   /***************************
                      Shadows styling
                    ****************************/            
                  // filters go in defs element
                  var defs = svg.append("defs");

                  // create filter with id #drop-shadow
                  // height=130% so that the shadow is not clipped
                  var filter = defs.append("filter")
                      .attr("id", "drop-shadow")
                      .attr("height", "130%");

                  // SourceAlpha refers to opacity of graphic that this filter will be applied to
                  // convolve that with a Gaussian with standard deviation 3 and store result
                  // in blur
                  filter.append("feGaussianBlur")
                      .attr("in", "SourceAlpha")
                      .attr("stdDeviation", 1.5)
                      .attr("result", "blur");

                  // translate output of Gaussian blur to the right and downwards with 2px
                  // store result in offsetBlur
                  filter.append("feOffset")
                      .attr("in", "blur")
                      .attr("dx", 2.5)
                      .attr("dy", 2)
                      .attr("result", "offsetBlur");

                  // overlay original SourceGraphic over translated blurred opacity by using
                  // feMerge filter. Order of specifying inputs is important!
                  var feMerge = filter.append("feMerge");

                  feMerge.append("feMergeNode")
                      .attr("in", "offsetBlur")
                  feMerge.append("feMergeNode")
                      .attr("in", "SourceGraphic");            

                  // Define the div for the tooltip
                  var div = d3.select(element[0]).append("div")	
                      .attr("class", "tooltip")				
                      .style("opacity", 0);
          
                /***************************
                  CSV
                ****************************/


                function drawGraph(data, update) {
                  var genderNames = d3.keys(data[0]).filter(function(key) { return key !== "Category"; }); // get list of column variables : age ranges

                  data.forEach(function(d) {
                    d.genders = genderNames.map(function(name) { return {name: name, value: +d[name]}; }); // get the name of each category filter and its value
                  });


                  x0.domain(data.map(function(d) { return d.Category; })); // state names in X axis
                  x1.domain(genderNames).rangeRoundBands([0, x0.rangeBand()]); // set separation settings between x values
                  y.domain([-10000, d3.max(data, function(d) { return d3.max(d.genders, function(d) { return d.value; }); })]); // ages in y axis

                  /* X axis */
                  svg.select(".x.axis").remove();

                  svg.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + height + ")")
                      .call(xAxis);

                  /* Y axis */
                  svg.select(".y.axis").remove();
                  svg.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)

                    // Y axis title
                    .append("text") 
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end");

/*var area = d3.svg.area()
    .x(function(d) { return x0(d.Category); })
    .y0(height)
    .y1(function(d) { return y(d.Savings); });
  svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);*/
                                                     
                  /* data */

                  var category = svg.selectAll(".category")
                      .data(data)
                    .enter().append("g")
                      .attr("class", "g")
                      .attr("transform", function(d) { return "translate(" + x0(d.Category) + ",0)"; });

                  /* Initialize tooltip */
                  //tip = d3.tip().html(function(d) { return d.name +" "+ d.value; });

                  /* Invoke the tip in the context of your visualization */
                  //category.call(tip);

                  /* rectangles */  
                  var rects = category.selectAll("rect")
                      .data(function(d) { return d.genders; });

                  if (update) {
                    svg.selectAll(".g").selectAll("rect").transition().duration(750).attr("height", 0).attr("width", 0).remove();
                    rects.enter().append("rect")
                      .attr("width", 0)
                      .attr("x", function(d) { return x1(d.name); })
                      .attr("y", function(d) { return y(d.value); })
                      .attr("height", 0)
                      .style("filter", "url(#drop-shadow)")                                        
                      .style("fill", function(d) { return color(d.name); })
                      /* Show and hide tip on mouse events */
                      .on("mouseover", function(d) {		
                          div.transition()		
                              .duration(200)		
                              .style("opacity", .9);		
                        div	.html(d.name + ': '+d.value)	
                              .style("left", (d3.event.pageX - 5) + "px")		
                              .style("top", (d3.event.pageY - 110) + "px");	
                          })					
                      .on("mouseout", function(d) {		
                          div.transition()		
                              .duration(500)		
                              .style("opacity", 0);	
                      });
                      rects.exit().transition().duration(750).attr("height", 0).attr("width", 0).remove();
                      rects
                      .transition().duration(750)
                          .attr("y", function(d) { return y(d.value); })
                          .attr("height", function(d) { return height - y(d.value); })
                          .attr("width", x1.rangeBand());
                  } else {
                    rects.enter().append("rect")
                      .attr("width", x1.rangeBand())
                      .attr("x", function(d) { return x1(d.name); })
                      .attr("y", function(d) { return y(d.value); })
                      .attr("height", function(d) { return height - y(d.value); })
                      .style("filter", "url(#drop-shadow)")                                        
                      .style("fill", function(d) { return color(d.name); })
                      /* Show and hide tip on mouse events */
                      .on("mouseover", function(d) {		
                          div.transition()		
                              .duration(200)		
                              .style("opacity", .9);		
                        div	.html(d.name + ': '+d.value)	
                              .style("left", (d3.event.pageX - 5) + "px")		
                              .style("top", (d3.event.pageY - 110) + "px");	
                          })					
                      .on("mouseout", function(d) {		
                          div.transition()		
                              .duration(500)		
                              .style("opacity", 0);	
                      });
                      rects.exit().remove();
                                                                                                  
                  } 
                  
                  
                  var legend = svg.selectAll(".legend")
                      .data(genderNames.slice().reverse());

                  var legendEnter = legend.enter().append("g")
                      .attr("class", "legend")
                      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                  legendEnter.append("rect")
                      .attr("width", 18)
                      .attr("height", 18);

                  legendEnter.append("text")
                      .attr("y", 9)
                      .attr("dy", ".35em")
                      .style("text-anchor", "start");

                  legend.select("rect")
                      .attr("x", width )   
                      .style("fill", color);        

                  legend.select("text")
                      .attr("x", width + 25)
                      .text(function(d) { return d; });

                  legend.exit().remove();
                                    
                }

                scope.$watchCollection("file", function(newValue, oldValue) { 
                  //alert(newValue);
                    if(newValue == '100')
                    {              
                      //d3.csv("data-column.csv", function(error, data) {
                      
                      var data1 = [
                          {
                            "Category": 1,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 54750
                          },
                          {
                            "Category": 2,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 109500
                          },
                          {
                            "Category": 3,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 164250
                          },
                          {
                            "Category": 4,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 219000
                          },
                          {
                            "Category": 5,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 273750
                          },
                          {
                            "Category": 6,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 300000,
                            "EMI Expense": 0,
                            "Savings": 28500
                          },
                          {
                            "Category": 7,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 83250
                          },
                          {
                            "Category": 8,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 300000,
                            "EMI Expense": 0,
                            "Savings": -162000
                          },
                          {
                            "Category": 9,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": -107250
                          },
                          {
                            "Category": 10,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": -52500
                          },
                          {
                            "Category": 11,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 2250
                          },
                          {
                            "Category": 12,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 57000
                          },
                          {
                            "Category": 13,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 111750
                          }
                        ];
                      
                      drawGraph(data1, false);
                      //});               
                    }else if (newValue == '200')
                    {
                      //d3.csv("200", function(error, data) {
                        var  data2 = [
                              {
                                "Category":1,
                                "Income":127750,
                                "Loan":15000,
                                "Goal Expense":15000,
                                "EMI Expense":9720,
                                "Savings":118030
                              },
                              {
                                "Category":2,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Savings":236060
                              },
                              {
                                "Category":3,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Savings":354090
                              },
                              {
                                "Category":4,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":481840
                              },
                              {
                                "Category":5,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":609590
                              },
                              {
                                "Category":6,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Savings":437340
                              },
                              {
                                "Category":7,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":565090
                              },
                              {
                                "Category":8,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Savings":392840
                              },
                              {
                                "Category":9,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":520590
                              },
                              {
                                "Category":10,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":648340
                              },
                              {
                                "Category":11,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":776090
                              },
                              {
                                "Category":12,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":903840
                              },
                              {
                                "Category":13,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":1031590
                              }
                            ] ;     
                      
                        drawGraph(data2, true);
                      //});                    
                    }else if (newValue == '300')
                    {
                        var  data3 = [
                            {
                              "Category": 1,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 54750
                            },
                            {
                              "Category": 2,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 109500
                            },
                            {
                              "Category": 3,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 164250
                            },
                            {
                              "Category": 4,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 219000
                            },
                            {
                              "Category": 5,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 273750
                            },
                            {
                              "Category": 6,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 300000,
                              "EMI Expense": 0,
                              "Savings": 28500
                            },
                            {
                              "Category": 7,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 0,
                              "Savings": 83250
                            },
                            {
                              "Category": 8,
                              "Income": 54750,
                              "Loan": 250000,
                              "Goal Expense": 300000,
                              "EMI Expense": 55956,
                              "Savings": 32044
                            },
                            {
                              "Category": 9,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 55956,
                              "Savings": 30838
                            },
                            {
                              "Category": 10,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 55956,
                              "Savings": 29632
                            },
                            {
                              "Category": 11,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 55956,
                              "Savings": 28426
                            },
                            {
                              "Category": 12,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 55956,
                              "Savings": 27220
                            },
                            {
                              "Category": 13,
                              "Income": 54750,
                              "Loan": 0,
                              "Goal Expense": 0,
                              "EMI Expense": 55956,
                              "Savings": 26014
                            }
                          ] ; 
                      
                        drawGraph(data3, true);                        
                    }else if (newValue == '400')
                    {
                      var data4 = [
                          {
                            "Category": 1,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 54750
                          },
                          {
                            "Category": 2,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 109500
                          },
                          {
                            "Category": 3,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 164250
                          },
                          {
                            "Category": 4,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 219000
                          },
                          {
                            "Category": 5,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 273750
                          },
                          {
                            "Category": 6,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 300000,
                            "EMI Expense": 0,
                            "Savings": 28500
                          },
                          {
                            "Category": 7,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 83250
                          },
                          {
                            "Category": 8,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 300000,
                            "EMI Expense": 0,
                            "Savings": 162000
                          },
                          {
                            "Category": 9,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 107250
                          },
                          {
                            "Category": 10,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 52500
                          },
                          {
                            "Category": 11,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 2250
                          },
                          {
                            "Category": 12,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 57000
                          },
                          {
                            "Category": 13,
                            "Income": 54750,
                            "Loan": 0,
                            "Goal Expense": 0,
                            "EMI Expense": 0,
                            "Savings": 111750
                          }
                        ];
                      
                        drawGraph(data4, true);                        
                    }
                  
                });
            
        }};
        
    }); 

    app.directive('conceptChart', function () { // Angular Directive
        return { replace: true,
                 restrict: 'AE', 
        scope: { width: '=chartWidth',
                 height: '=chartHeight',
                 file: '=chartFile'},
        link: function(scope, element) {
            var dataFile = scope.file;
            var chartheight = scope.height;
            var chartwidth = scope.width;


                var data = [["Lakshmi", ["Age","No of Children","Skills","Region","First Loan Amount","Mother_Tongue", "Length of stay @ Location", "Education", "Occupation", "Income vs Non Earning members", "Type of Residence", "Length of business", "Loan Purpose","Net Cash Flow","Income to Installment Ratio","Age","Two Wheeler"]],
                 ["Phoola", ["Age","No of Children","Skills","Region","First Loan Amount","Mother_Tongue", "Length of stay @ Location", "Education", "Occupation", "Income vs Non Earning members","Overdue Amount from Loan","Change in Loan Balance vs EMI","Vehicle Ownership","House Ownership","Durable ownership","Total Asset Value","Total Earning Members"]], 
                ["Rani", ["Age","No of Children","Skills","Region","First Loan Amount","No of Non Earning Members", "Last Loan Type", "Last Loan Tenure", "Marital Status", "No of Current Loans"]], 
                ["Preeti", ["Age","No of Children","Skills","Region","First Loan Amount","Years in Current City", "EMI Delays", "Delays in Last Loan", "Delays in 6 months", "Type of Business", "Type of locality","Education","Electronics Owned"]], 
                ["Anita", ["Age","No of Children","Skills","Region","First Loan Amount","Technical Knowledge area", "Industry of Current Occupation", "No of Dependents", "Is Ex-serviceman"]], 
                ["Suman", ["Age","No of Children","Skills","Region","First Loan Amount","Any Initial Deposit", "Income Frequency", "Zone of residence", "Blacklisted", "Opted for Prepaid", "Propensity Score", "Churn Score"]]];

                // transform the data into a useful representation
                // 1 is inner, 2, is outer

                // need: inner, outer, links
                //
                // inner: 
                // links: { inner: outer: }


                var outer = d3.map();
                var inner = [];
                var links = [];

                var outerId = [0];

                data.forEach(function(d){

                  if (d == null)
                    return;

                  i = { id: 'i' + inner.length, name: d[0], related_links: [] };
                  i.related_nodes = [i.id];
                  inner.push(i);

                  if (!Array.isArray(d[1]))
                    d[1] = [d[1]];

                  d[1].forEach(function(d1){

                    o = outer.get(d1);

                    if (o == null)
                    {
                      o = { name: d1,	id: 'o' + outerId[0], related_links: [] };
                      o.related_nodes = [o.id];
                      outerId[0] = outerId[0] + 1;	

                      outer.set(d1, o);
                    }

                    // create the links
                    l = { id: 'l-' + i.id + '-' + o.id, inner: i, outer: o }
                    links.push(l);

                    // and the relationships
                    i.related_nodes.push(o.id);
                    i.related_links.push(l.id);
                    o.related_nodes.push(i.id);
                    o.related_links.push(l.id);
                  });
                });

                data = {
                  inner: inner,
                  outer: outer.values(),
                  links: links
                }

                // sort the data -- TODO: have multiple sort options
                outer = data.outer;
                data.outer = Array(outer.length);


                var i1 = 0;
                var i2 = outer.length - 1;

                for (var i = 0; i < data.outer.length; ++i)
                {
                  if (i % 2 == 1)
                    data.outer[i2--] = outer[i];
                  else
                    data.outer[i1++] = outer[i];
                }

                //console.log(data.outer.reduce(function(a,b) { return a + b.related_links.length; }, 0) / data.outer.length);


                // from d3 colorbrewer: 
                // This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
                var colors = ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
                var color = d3.scale.linear()
                    .domain([60, 220])
                    .range([colors.length-1, 0])
                    .clamp(true);

                var diameter = 600;
                var rect_width = 80;
                var rect_height = 20;

                var link_width = "1.5px"; 

                var il = data.inner.length;
                var ol = data.outer.length;

                var inner_y = d3.scale.linear()
                    .domain([0, il])
                    .range([-(il * rect_height)/2, (il * rect_height)/2]);

                mid = (data.outer.length/2.0)
                var outer_x = d3.scale.linear()
                    .domain([0, mid, mid, data.outer.length])
                    .range([15, 170, 190 ,355]);

                var outer_y = d3.scale.linear()
                    .domain([0, data.outer.length])
                    .range([0, diameter / 2 - 120]);


                // setup positioning
                data.outer = data.outer.map(function(d, i) { 
                    d.x = outer_x(i);
                    d.y = diameter/3;
                    return d;
                });

                data.inner = data.inner.map(function(d, i) { 
                    d.x = -(rect_width / 2);
                    d.y = inner_y(i);
                    return d;
                });


                function get_color(name)
                {
                    var c = Math.round(color(name));
                    if (isNaN(c))
                        return '#000000';	// fallback color

                    return colors[c];
                }

                // Can't just use d3.svg.diagonal because one edge is in normal space, the
                // other edge is in radial space. Since we can't just ask d3 to do projection
                // of a single point, do it ourselves the same way d3 would do it.  


                function projectX(x)
                {
                    return ((x - 90) / 180 * Math.PI) - (Math.PI/2);
                }

                var diagonal = d3.svg.diagonal()
                    .source(function(d) { return {"x": d.outer.y * Math.cos(projectX(d.outer.x)), 
                                                  "y": -d.outer.y * Math.sin(projectX(d.outer.x))}; })            
                    .target(function(d) { return {"x": d.inner.y + rect_height/2,
                                                  "y": d.outer.x > 180 ? d.inner.x : d.inner.x + rect_width}; })
                    .projection(function(d) { return [d.y, d.x]; });


                var svg = d3.select(element[0]).append("svg")
                    .attr("width", diameter)
                    .attr("height", diameter)
                    .append("g")
                    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");


                // links
                var link = svg.append('g').attr('class', 'links').selectAll(".link")
                    .data(data.links)
                    .enter().append('path')
                    .attr('class', 'link')
                    .attr('id', function(d) { return d.id })
                    .attr("d", diagonal)
                    .attr('stroke', '#AAA')//function(d) { return get_color(d.inner.name); })
                    .attr('stroke-width', link_width);

                // outer nodes

                var onode = svg.append('g').selectAll(".outer_node")
                    .data(data.outer)
                    .enter().append("g")
                    .attr("class", "outer_node")
                    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout);

                onode.append("circle")
                    .attr('id', function(d) { return d.id })
                    .attr("r", 4.5);

                onode.append("circle")
                    .attr('r', 20)
                    .attr('visibility', 'hidden');

                onode.append("text")
                    .attr('id', function(d) { return d.id + '-txt'; })
                    .attr("dy", ".31em")
                    .attr('font-size', '14px')                
                    .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
                    .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
                    .text(function(d) { return d.name; });

                // inner nodes

                var inode = svg.append('g').selectAll(".inner_node")
                    .data(data.inner)
                  .enter().append("g")
                    .attr("class", "inner_node")
                    .attr("transform", function(d, i) { return "translate(" + d.x + "," + d.y + ")"})
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout);

                inode.append('rect')
                    .attr('width', rect_width)
                    .attr('height', rect_height)
                    .attr('id', function(d) { return d.id; })
                    .attr('stroke', '#FFF')
                    ;

                inode.append("text")
                    .attr('id', function(d) { return d.id + '-txt'; })
                    .attr('text-anchor', 'middle')
                    .attr("transform", "translate(" + rect_width/2 + ", " + rect_height * .75 + ")")
                    .attr('stroke', '#FFF')
                    .attr('stroke-width', '1px')
                    .attr('font-size', '12px')
                    .text(function(d) { return d.name; });

                // need to specify x/y/etc

                d3.select(self.frameElement).style("height", diameter - 150 + "px");

                function mouseover(d)
                {
                  // bring to front
                  d3.selectAll('.links .link').sort(function(a, b){ return d.related_links.indexOf(a.id); });	

                    for (var i = 0; i < d.related_nodes.length; i++)
                    {
                        d3.select('#' + d.related_nodes[i]).classed('highlight', true);
                        d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'bold');
                    }

                    for (var i = 0; i < d.related_links.length; i++)
                        d3.select('#' + d.related_links[i]).attr('stroke-width', '5px');
                        d3.select('#' + d.related_links[i]).attr('stroke', '#CCC');
                    
                }

                function mouseout(d)
                {   	
                    for (var i = 0; i < d.related_nodes.length; i++)
                    {
                        d3.select('#' + d.related_nodes[i]).classed('highlight', false);
                        d3.select('#' + d.related_nodes[i] + '-txt').attr("font-weight", 'normal');
                    }

                    for (var i = 0; i < d.related_links.length; i++)
                        d3.select('#' + d.related_links[i]).attr('stroke-width', link_width);
                }
            
            
        }};
        
    });    

    app.directive('scatterChart', function () { // Angular Directive
        return { replace: true,
                 restrict: 'AE', 
        scope: { width: '=chartWidth',
                 height: '=chartHeight',
                 file: '=chartFile'},
        link: function(scope, element) {
            var dataFile = scope.file;
            var chartheight = scope.height;
            var chartwidth = scope.width;
            
              /***************************
                GRAPH container
              ****************************/          
            var margin = {top: 20, right: 180, bottom: 30, left: 50},
                width = chartwidth - margin.left - margin.right,
                height = chartheight - margin.top - margin.bottom;
              /***************************
                SCALE
              ****************************/
            var x = d3.scale.linear()
                .range([0, width]);

            var y = d3.scale.linear()
                .range([height, 0]);
            
            var r = d3.scale.linear()
                .range([height, 0]);
            
              /***************************
                COLORS
              ****************************/
            var color = d3.scale.category10();
              /***************************
                AXIS
              ****************************/
            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");
                        
             /***************************
                SVG
              ****************************/
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            // add the tooltip area to the webpage
            var tooltip = d3.select(element[0]).append("div")
                .attr("class", "tooltip")
                .style("opacity", 0);
            
             /***************************
                Shadows styling
              ****************************/            
            // filters go in defs element
            var defs = svg.append("defs");

            // create filter with id #drop-shadow
            // height=130% so that the shadow is not clipped
            var filter = defs.append("filter")
                .attr("id", "drop-shadow")
                .attr("height", "130%");

            // SourceAlpha refers to opacity of graphic that this filter will be applied to
            // convolve that with a Gaussian with standard deviation 3 and store result
            // in blur
            filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 1.5)
                .attr("result", "blur");

            // translate output of Gaussian blur to the right and downwards with 2px
            // store result in offsetBlur
            filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 2.5)
                .attr("dy", 2)
                .attr("result", "offsetBlur");

            // overlay original SourceGraphic over translated blurred opacity by using
            // feMerge filter. Order of specifying inputs is important!
            var feMerge = filter.append("feMerge");

            feMerge.append("feMergeNode")
                .attr("in", "offsetBlur")
            feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");            

             /***************************
                Draw Scatters
              ****************************/            
            function CreateScatters(fileName,update)
            {
                    if(fileName == '500')
                    {
                        var  data =[
                          {
                            "sepalLength":100,
                            "sepalWidth":10000,
                            "petalLength":70,
                            "petalWidth":0.2,
                            "species":"Option1 (Communication Setup)"
                          },
                          {
                            "sepalLength":200,
                            "sepalWidth":15000,
                            "petalLength":100,
                            "petalWidth":0.2,
                            "species":"Option2 (Games Renting)"
                          },
                          {
                            "sepalLength":500,
                            "sepalWidth":100000,
                            "petalLength":33,
                            "petalWidth":0.2,
                            "species":"Option3 (GroceryStore)"
                          },
                          {
                            "sepalLength":200,
                            "sepalWidth":25000,
                            "petalLength":55,
                            "petalWidth":0.2,
                            "species":"Option4 (Carpentry)"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":25000,
                            "petalLength":50,
                            "petalWidth":0.2,
                            "species":"Option5 (Tailoring)"
                          },
                          {
                            "sepalLength":1000,
                            "sepalWidth":100000,
                            "petalLength":40,
                            "petalWidth":0.4,
                            "species":"Option6 (Mechanic)"
                          },
                          {
                            "sepalLength":800,
                            "sepalWidth":80000,
                            "petalLength":35,
                            "petalWidth":0.3,
                            "species":"Option7 (Catering)"
                          },
                          {
                            "sepalLength":600,
                            "sepalWidth":40000,
                            "petalLength":28,
                            "petalWidth":0.2,
                            "species":"Option8 (Beauty Parlor)"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":65000,
                            "petalLength":38,
                            "petalWidth":0.2,
                            "species":"Option9 (Packing)"
                          },
                          {
                            "sepalLength":100,
                            "sepalWidth":85000,
                            "petalLength":26,
                            "petalWidth":0.2,
                            "species":"Option10 (Stationary)"
                          },
                          {
                            "sepalLength":400,
                            "sepalWidth":45000,
                            "petalLength":32,
                            "petalWidth":0.2,
                            "species":"Option11 (Music Classes)"
                          },
                          {
                            "sepalLength":250,
                            "sepalWidth":35000,
                            "petalLength":57,
                            "petalWidth":0.1,
                            "species":"Option12 (Weaving)"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":55000,
                            "petalLength":31,
                            "petalWidth":0.1,
                            "species":"Option13 (Creche)"
                          },
                          {
                            "sepalLength":700,
                            "sepalWidth":75000,
                            "petalLength":21,
                            "petalWidth":0.2,
                            "species":"Option14 (Tution Center)"
                          }
                        ]; 
                        update = false;
                    }else if (fileName == '200')
                    {
                        var  data = [
                              {
                                "Category":1,
                                "Income":127750,
                                "Loan":15000,
                                "Goal Expense":15000,
                                "EMI Expense":9720,
                                "Savings":118030
                              },
                              {
                                "Category":2,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Savings":236060
                              },
                              {
                                "Category":3,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":9720,
                                "Savings":354090
                              },
                              {
                                "Category":4,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":481840
                              },
                              {
                                "Category":5,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":609590
                              },
                              {
                                "Category":6,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Savings":437340
                              },
                              {
                                "Category":7,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":565090
                              },
                              {
                                "Category":8,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":300000,
                                "EMI Expense":null,
                                "Savings":392840
                              },
                              {
                                "Category":9,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":520590
                              },
                              {
                                "Category":10,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":648340
                              },
                              {
                                "Category":11,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":776090
                              },
                              {
                                "Category":12,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":903840
                              },
                              {
                                "Category":13,
                                "Income":127750,
                                "Loan":null,
                                "Goal Expense":null,
                                "EMI Expense":null,
                                "Savings":1031590
                              }
                            ] ;     
                        update = true;                            
                    }else if (fileName == '300')
                    {
                        var  data = [
                                              {
                                                "Category":1,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":54750
                                              },
                                              {
                                                "Category":2,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":109500
                                              },
                                              {
                                                "Category":3,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":164250
                                              },
                                              {
                                                "Category":4,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":219000
                                              },
                                              {
                                                "Category":5,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":273750
                                              },
                                              {
                                                "Category":6,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Savings":28500
                                              },
                                              {
                                                "Category":7,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":83250
                                              },
                                              {
                                                "Category":8,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":300000,
                                                "EMI Expense":"",
                                                "Savings":162000
                                              },
                                              {
                                                "Category":9,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":107250
                                              },
                                              {
                                                "Category":10,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":52500
                                              },
                                              {
                                                "Category":11,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":2250
                                              },
                                              {
                                                "Category":12,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":57000
                                              },
                                              {
                                                "Category":13,
                                                "Income":54750,
                                                "Loan":"",
                                                "Goal Expense":null,
                                                "EMI Expense":"",
                                                "Savings":111750
                                              }
                                            ]  ;     
                          update = true;                          
                    }
                
                  data.forEach(function(d) {
                    d.sepalLength = +d.sepalLength;
                    d.sepalWidth = +d.sepalWidth;
                  });

                  // don't want dots overlapping axis, so add in buffer to data domain
                 x.domain([d3.min(data, function(d) { return d.sepalWidth; })-10000, d3.max(data, function(d) { return d.sepalWidth; })+100]);
                 y.domain([d3.min(data, function(d) { return d.sepalLength; })-100, d3.max(data, function(d) { return d.sepalLength; })+100]);
                 var rScale = d3.scale.linear().domain([0, d3.max(data, function(d) {return d.petalLength;})]).range([5, 30]);
                 /***************************
                    Color gradient styling
                  ****************************/            
              
                  var grads = svg.append("defs").selectAll("radialGradient")
                      .data(data)
                     .enter()
                      .append("radialGradient")
                      .attr("gradientUnits", "objectBoundingBox")
                      .attr("cx", 0)
                      .attr("cy", 0)
                      .attr("r", "100%")
                      .attr("id", function(d, i) { return "grad" + i; });

                  grads.append("stop")
                      .attr("offset", "0%")
                      .style("stop-color", "white");

                  grads.append("stop")
                      .attr("offset", "100%")
                      .style("stop-color",  function(d) { return color(d.species); });   
              
                  svg.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + height + ")")
                      .call(xAxis)
                    .append("text")
                      .attr("class", "label")
                      .attr("x", width)
                      .attr("y", -6)
                      .style("text-anchor", "end")
                      .text("Setup Cost");

                  svg.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)
                    .append("text")
                      .attr("class", "label")
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("Profit")

                  svg.selectAll(".dot")
                      .data(data)
                    .enter().append("circle")
                      .attr("class", "dot")
                      .attr("r", function(d) {
                       return rScale(d.petalLength);
                       })
                      .attr("cx", function(d) { return x(d.sepalWidth); })
                      .attr("cy", function(d) { return y(d.sepalLength); })
                      .attr('fill', 'url(#drop-shadow)')
                      .style("fill", function(d, i) {
                          return "url(#grad" + i + ")";
                      })
                  
                      //.style("fill", function(d) { return color(d.species); })
                      .on("mouseover", function(d) {
                          tooltip.transition()
                               .duration(200)
                               .style("opacity", .9);
                          tooltip.html(d.species + "<br/> (" + d.sepalWidth 
                          + ", " + d.sepalLength + ", "+d.petalLength+")")
                               .style("left", (d3.event.pageX + 5) + "px")
                               .style("top", (d3.event.pageY - 150) + "px");
                      })
                      .on("mouseout", function(d) {
                          tooltip.transition()
                               .duration(500)
                               .style("opacity", 0);
                      });

                  var legend = svg.selectAll(".legend")
                      .data(color.domain())
                    .enter().append("g")
                      .attr("class", "legend")
                      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

                  legend.append("rect")
                      .attr("x", width + 50 )
                      .attr("width", 18)
                      .attr("height", 18)
                      .style("fill", color);

                  legend.append("text")
                      .attr("x", width + 75)
                      .attr("y", 9)
                      .attr("dy", ".35em")
                      .style("text-anchor", "start")
                      .text(function(d) { return d; });

            }
                    
            function UpdateScatters(fileName)
            {
              
                    if(fileName == '600')
                    {
                        var  dataset =[
                          {
                            "sepalLength":100,
                            "sepalWidth":10000,
                            "petalLength":70,
                            "petalWidth":0.2,
                            "species":"PCO"
                          },
                          {
                            "sepalLength":200,
                            "sepalWidth":15000,
                            "petalLength":100,
                            "petalWidth":0.2,
                            "species":"Playstation"
                          },
                          {
                            "sepalLength":500,
                            "sepalWidth":100000,
                            "petalLength":33,
                            "petalWidth":0.2,
                            "species":"GroceryStore"
                          }
                        ]; 
                        update = false;
                    }else if (fileName == '500')
                    {
                        var  dataset =[
                          {
                            "sepalLength":100,
                            "sepalWidth":10000,
                            "petalLength":70,
                            "petalWidth":0.2,
                            "species":"PCO"
                          },
                          {
                            "sepalLength":200,
                            "sepalWidth":15000,
                            "petalLength":100,
                            "petalWidth":0.2,
                            "species":"Playstation"
                          },
                          {
                            "sepalLength":500,
                            "sepalWidth":100000,
                            "petalLength":33,
                            "petalWidth":0.2,
                            "species":"GroceryStore"
                          },
                          {
                            "sepalLength":200,
                            "sepalWidth":25000,
                            "petalLength":55,
                            "petalWidth":0.2,
                            "species":"Carpentry"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":25000,
                            "petalLength":1.4,
                            "petalWidth":0.2,
                            "species":"Tailoring"
                          },
                          {
                            "sepalLength":1000,
                            "sepalWidth":100000,
                            "petalLength":1.7,
                            "petalWidth":0.4,
                            "species":"Mechanic"
                          },
                          {
                            "sepalLength":800,
                            "sepalWidth":80000,
                            "petalLength":1.4,
                            "petalWidth":0.3,
                            "species":"Catering"
                          },
                          {
                            "sepalLength":600,
                            "sepalWidth":40000,
                            "petalLength":1.5,
                            "petalWidth":0.2,
                            "species":"Beauty Parlor"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":65000,
                            "petalLength":1.4,
                            "petalWidth":0.2,
                            "species":"Packing"
                          },
                          {
                            "sepalLength":100,
                            "sepalWidth":85000,
                            "petalLength":1.5,
                            "petalWidth":0.2,
                            "species":"Stationary"
                          },
                          {
                            "sepalLength":400,
                            "sepalWidth":45000,
                            "petalLength":1.6,
                            "petalWidth":0.2,
                            "species":"Music Classes"
                          },
                          {
                            "sepalLength":250,
                            "sepalWidth":35000,
                            "petalLength":1.4,
                            "petalWidth":0.1,
                            "species":"Weaving"
                          },
                          {
                            "sepalLength":300,
                            "sepalWidth":55000,
                            "petalLength":1.1,
                            "petalWidth":0.1,
                            "species":"Creche"
                          },
                          {
                            "sepalLength":700,
                            "sepalWidth":75000,
                            "petalLength":1.2,
                            "petalWidth":0.2,
                            "species":"Tution Center"
                          }
                        ]; 
                    }
              
                    var numValues = dataset.length;  // Get original dataset's length
                    var maxRange = Math.random() * 1000;  // Get max range of new values

                    // Update scale domains
                     x.domain([d3.min(dataset, function(d) { return d.sepalWidth; })-10000, d3.max(dataset, function(d) { return d.sepalWidth; })+100]);
                     y.domain([d3.min(dataset, function(d) { return d.sepalLength; })-100, d3.max(dataset, function(d) { return d.sepalLength; })+100]);
                     var rScale = d3.scale.linear().domain([0, d3.max(dataset, function(d) {return d.petalLength;})]).range([5, 30]);

                     /***************************
                        Color gradient styling
                      ****************************/            

                      var grads = svg.append("defs").selectAll("radialGradient")
                          .data(dataset)
                         .enter()
                          .append("radialGradient")
                          .attr("gradientUnits", "objectBoundingBox")
                          .attr("cx", 0)
                          .attr("cy", 0)
                          .attr("r", "100%")
                          .attr("id", function(d, i) { return "grad" + i; });

                      grads.append("stop")
                          .attr("offset", "0%")
                          .style("stop-color", "white");

                      grads.append("stop")
                          .attr("offset", "100%")
                          .style("stop-color",  function(d) { return color(d.species); });   
                      /* Remove X axis */
                      //svg.select(".x.axis").remove();                
                      /* Remove Y axis */
                      //svg.select(".y.axis").remove();

                      /*svg.append("g")
                          .attr("class", "x axis")
                          .attr("transform", "translate(0," + height + ")")
                          .call(xAxis)
                        .append("text")
                          .attr("class", "label")
                          .attr("x", width)
                          .attr("y", -6)
                          .style("text-anchor", "end")
                          .text("Setup Cost");

                      svg.append("g")
                          .attr("class", "y axis")
                          .call(yAxis)
                        .append("text")
                          .attr("class", "label")
                          .attr("transform", "rotate(-90)")
                          .attr("y", 6)
                          .attr("dy", ".71em")
                          .style("text-anchor", "end")
                          .text("Profit")*/
                      
                    svg.selectAll("circle").transition().duration(750).attr("cx", 0).attr("cx", 0).attr("r", 0).remove();                            
                    // Update circles
                    svg.selectAll("circle")
                        .data(dataset)  // Update with new data
                        .transition()  // Transition from old to new
                        .duration(1000)  // Length of animation
                        .each("start", function() {  // Start animation
                            d3.select(this)  // 'this' means the current element
                                .attr("fill", "red")  // Change color
                                .attr("r", 5);  // Change size
                        })
                        .delay(function(d, i) {
                            return i / dataset.length * 500;  // Dynamic delay (i.e. each item delays a little longer)
                        })
                        //.ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
                        .attr("cx", function(d) { return x(d.sepalWidth); })
                        .attr("cy", function(d) { return y(d.sepalLength); })
                        .each("end", function() {  // End animation
                            d3.select(this)  // 'this' means the current element
                                .transition()
                                .duration(500)
                                .attr('fill', 'url(#drop-shadow)')
                                .attr("fill", function(d, i) {
                                    return "url(#grad" + i + ")";
                                })                           
                                .attr("r", function(d) {
                                 return rScale(d.petalLength);
                                 });  // Change radius
                        });
                                  
            }
          
            scope.$watchCollection("file", function(newValue, oldValue) {
                if(newValue == '500')
                {
                  CreateScatters(newValue,false);                    
                }else if (newValue == '600')
                {
                  UpdateScatters(newValue)                    
                }
            });
            CreateScatters('500',false);            
        }};
        
    });    

    app.directive('fillDial', function () { // Angular Directive
        return { restrict: 'E', 
        scope: { data: '=dialValue',
                 width: '=dialWidth',
                 height: '=dialHeight',                
                 dialType: '=dialType',
                 dialMinValue: '=MinValue',                
                 dialMaxValue: '=MaxValue',},
        link: function(scope, element) {
            var data = scope.data;
            var dialGauge;
            if(scope.dialType == 1)
            {
                var config = liquidFillGaugeDefaultSettings();
                config.textVertPosition = 0.8;
                config.textSize = 0.75;
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data,config);
                    
                    
            }else if (scope.dialType == 2)
            {
                var config1 = liquidFillGaugeDefaultSettings();
                config1.circleColor = "#FF7777";
                config1.textColor = "#FF4444";
                config1.textSize = 0.75;                
                config1.waveTextColor = "#FFAAAA";
                config1.waveColor = "#FFDDDD";
                config1.circleThickness = 0.2;
                config1.textVertPosition = 0.8;
                config1.waveAnimateTime = 1000;
                
                dialGauge= loadLiquidFillGauge(element[0].childNodes[1].id, data, config1);
                    
            }else if (scope.dialType == 3)
            {
                var config2 = liquidFillGaugeDefaultSettings();
                config2.circleColor = "#D4AB6A";
                config2.textColor = "#553300";
                config2.waveTextColor = "#805615";
                config2.waveColor = "#AA7D39";
                config2.circleThickness = 0.1;
                config2.circleFillGap = 0.2;
                config2.textVertPosition = 0.8;
                config2.waveAnimateTime = 2000;
                config2.waveHeight = 0.3;
                config2.waveCount = 1;
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config2);
                    
            }else if (scope.dialType == 4)
            {
                var config3 = liquidFillGaugeDefaultSettings();
                config3.textVertPosition = 0.8;
                config3.waveAnimateTime = 5000;
                config3.waveHeight = 0.15;
                config3.waveAnimate = false;
                config3.waveOffset = 0.25;
                config3.valueCountUp = false;
                config3.displayPercent = false;
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config3);
                    
            }else if (scope.dialType == 5)
            {
                var config4 = liquidFillGaugeDefaultSettings();
                config4.circleThickness = 0.15;
                config4.circleColor = "#808015";
                config4.textColor = "#555500";
                config4.waveTextColor = "#FFFFAA";
                config4.waveColor = "#AAAA39";
                config4.textVertPosition = 0.8;
                config4.waveAnimateTime = 1000;
                config4.waveHeight = 0.05;
                config4.waveAnimate = true;
                config4.waveRise = false;
                config4.waveHeightScaling = false;
                config4.waveOffset = 0.25;
                config4.textSize = 0.75;
                config4.waveCount = 3;
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config4);
                
                    
            }else if (scope.dialType == 6)
            {
                var config5 = liquidFillGaugeDefaultSettings();
                config5.circleThickness = 0.4;
                config5.circleColor = "#6DA398";
                config5.textColor = "#0E5144";
                config5.waveTextColor = "#6DA398";
                config5.waveColor = "#246D5F";
                config5.textVertPosition = 0.8;
                config5.waveAnimateTime = 5000;
                config5.waveHeight = 0;
                config5.waveAnimate = false;
                config5.waveCount = 2;
                config5.waveOffset = 0.25;
                config5.textSize = 1.2;
                config5.minValue = 30;
                config5.maxValue = 150
                config5.displayPercent = false;
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config5);

                
            }else if (scope.dialType == 7)
            {
                var config6 = liquidFillGaugeDefaultSettings();
                config6.circleColor = "#FF7777";
                config6.textColor = "#FF4444";
                config6.textSize = 0.75;                
                config6.waveTextColor = "#FFAAAA";
                config6.waveColor = "#FFDDDD";
                config6.circleThickness = 0.2;
                config6.textVertPosition = 0.8;
                config6.waveAnimateTime = 1000;
                if(scope.dialMinValue)
                {
                    config6.minValue = scope.dialMinValue;
                }else
                {
                    config6.minValue = 0;
                }
              
                if(scope.dialMaxValue)
                {
                    config6.maxValue = scope.dialMaxValue;
                }else
                {
                    config6.maxValue = 500;
                }
                config6.displayPercent = false;
                
                dialGauge= loadLiquidFillGauge(element[0].childNodes[1].id, data, config6);
                    
            }else if (scope.dialType == 8)
            {
                var config7 = liquidFillGaugeDefaultSettings();
                config7.textVertPosition = 0.8;
                config7.waveAnimateTime = 5000;
                config7.waveHeight = 0.15;
                config7.waveAnimate = true;
                config7.waveOffset = 0.25;
                config7.valueCountUp = false;
                config7.displayPercent = false;
                if(scope.dialMinValue)
                {
                    config7.minValue = scope.dialMinValue;
                }else
                {
                    config7.minValue = 0;
                }
              
                if(scope.dialMaxValue)
                {
                    config7.maxValue = scope.dialMaxValue;
                }else
                {
                    config7.maxValue = 500;
                }
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config7);
                    
            }else if (scope.dialType == 9)
            {
                var config8 = liquidFillGaugeDefaultSettings();
                config8.circleThickness = 0.15;
                config8.circleColor = "#808015";
                config8.textColor = "#555500";
                config8.waveTextColor = "#FFFFAA";
                config8.waveColor = "#AAAA39";
                config8.textVertPosition = 0.8;
                config8.waveAnimateTime = 1000;
                config8.waveHeight = 0.05;
                config8.waveAnimate = true;
                config8.waveRise = false;
                config8.waveHeightScaling = false;
                config8.waveOffset = 0.25;
                config8.textSize = 0.75;
                config8.waveCount = 3;
                config8.displayPercent = false;
                if(scope.dialMinValue)
                {
                    config8.minValue = scope.dialMinValue;
                }else
                {
                    config8.minValue = 0;
                }
              
                if(scope.dialMaxValue)
                {
                    config8.maxValue = scope.dialMaxValue;
                }else
                {
                    config8.maxValue = 500;
                }
                
                dialGauge = loadLiquidFillGauge(element[0].childNodes[1].id, data, config8);
                
                    
            }                

            scope.$watchCollection("data", function(newValue, oldValue) {
                dialGauge.update(newValue);
            });
            
            
            
            
        }};
        
    });    

    app.directive('donutChart', function() {
        return { restrict: 'E', 
        scope: { data: '=chartData'},
        link: function(scope, element) {
          var data = scope.data;
          // the D3 bits...
          var color = d3.scale.category10();
          var width = 250;
          var height = 250;
          var pie = d3.layout.pie().sort(null);
          var arc = d3.svg.arc()
            .outerRadius(width / 2 * 0.9)
            .innerRadius(width / 2 * 0.5);
            
            
                        
          var svg = d3.select(element[0]).append('svg')
            .attr({width: width, height: height})
            .append('g')
              .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
            
            // filters go in defs element
            var defs = svg.append("defs");

            // create filter with id #drop-shadow
            // height=130% so that the shadow is not clipped
            var filter = defs.append("filter")
                .attr("id", "drop-shadow")
                .attr("height", "130%");

            // SourceAlpha refers to opacity of graphic that this filter will be applied to
            // convolve that with a Gaussian with standard deviation 3 and store result
            // in blur
            filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 3.5)
                .attr("result", "blur");

            // translate output of Gaussian blur to the right and downwards with 2px
            // store result in offsetBlur
            filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 2)
                .attr("dy", 2)
                .attr("result", "offsetBlur");

            // overlay original SourceGraphic over translated blurred opacity by using
            // feMerge filter. Order of specifying inputs is important!
            var feMerge = filter.append("feMerge");

            feMerge.append("feMergeNode")
                .attr("in", "offsetBlur")
            feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");            
            
          // add the <path>s for each arc slice
          svg.selectAll('path').data(pie(data)) // our data
             .enter().append('path')
              .style('stroke', 'white')
              .style("filter", "url(#drop-shadow)")
              .attr('d', arc)
              .transition().duration(1000).attrTween("d", tweenPie)
              .attr('fill', function(d, i){ return color(i) });
            
                function tweenPie(finish) {
                var start = {
                        startAngle: 0,
                        endAngle: 0
                    };
                var i = d3.interpolate(start, finish);
                return function(d) { return arc(i(d)); };
               }

        }};
     });

    app.directive('networkChart', function() {
        return { restrict: 'E', 
        scope: { data: '=chartData'},
        link: function(scope, element) {
          var treeData = scope.data;
          // the D3 bits...
            
            window.current_nodes = [];
            update = function (source) {
                var link, links, node, nodeEnter, nodeExit, nodeUpdate, nodes;
                nodes = tree.nodes(root).reverse();
                links = tree.links(nodes);
                nodes.forEach(function (d) {
                    return d.y = d.depth * 80;
                });
                node = svg.selectAll('g.node').data(nodes, function (d) {
                    return d.id || (d.id = ++i);
                });
                nodeEnter = node.enter().append('g').attr('class', 'node').attr('transform', function (d) {
                }, {}, 'translate(' + source.y0 + ',' + source.x0 + ')').on('mouseover', function (d) {
                }).on('click', function (d) {
                    var clicked_same_node;
                    clicked_same_node = false;
                    if (window.current_nodes.length > 0) {
                        if (d.id === window.current_nodes[window.current_nodes.length - 1][0].id) {
                            clicked_same_node = true;
                            d3.event.stopPropagation();
                        }
                    }
                    if (!clicked_same_node) {
                        return store_and_update(d);
                    }
                });
                nodeEnter.append('circle').attr('r', 0.000001).style('fill', function (d) {
                    if (d._children) {
                        return 'lightsteelblue';
                    } else {
                        return '#fff';
                    }
                });
                nodeEnter.append('text').attr('dy', '.31em').attr('text-anchor', function (d) {
                    if (d.x < 180) {
                        return 'start';
                    } else {
                        return 'end';
                    }
                }).attr('transform', function (d) {
                    if (d.x < 180) {
                        return 'translate(8)';
                    } else {
                        return 'rotate(180)translate(-8)';
                    }
                }).text(function (d) {
                    return d.name;
                });
                nodeUpdate = node.transition().duration(duration).attr('transform', function (d) {
                    return 'rotate(' + (d.x - 90) + ')translate(' + d.y + ')';
                });
                nodeUpdate.select('circle').attr('r', 10).style('fill', function (d) {
                    if (d._children) {
                        return 'black';
                    } else {
                        return 'black';
                    }
                });
                nodeUpdate.select('text').style('fill-opacity', 1).attr('dy', '.31em').attr('text-anchor', function (d) {
                    if (d.x < 180) {
                        return 'start';
                    } else {
                        return 'end';
                    }
                }).attr('transform', function (d) {
                    if (d.x < 180) {
                        return 'translate(8)';
                    } else {
                        return 'rotate(180)translate(-8)';
                    }
                });
                nodeExit = node.exit().transition().duration(duration).attr('transform', function (d) {
                    return 'translate(' + source.y + ',' + source.x + ')';
                }).remove();
                nodeExit.select('circle').attr('r', 0.000001);
                nodeExit.select('text').style('fill-opacity', 0.000001);
                link = svg.selectAll('path.link').data(links, function (d) {
                    return d.target.id;
                });
                link.enter().insert('path', 'g').attr('class', 'link').attr('d', function (d) {
                    var o;
                    o = {
                        x: source.x0,
                        y: source.y0
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                });
                link.transition().duration(duration).attr('d', diagonal);
                link.exit().transition().duration(duration).attr('d', function (d) {
                    var o;
                    o = {
                        x: source.x,
                        y: source.y
                    };
                    return diagonal({
                        source: o,
                        target: o
                    });
                }).remove();
                return nodes.forEach(function (d) {
                    d.x0 = d.x;
                    return d.y0 = d.y;
                });
            };
            construct_generations = function (d) {
                var c, generations;
                c = d;
                generations = [];
                while (c.parent) {
                    //if (window.CP.shouldStopExecution(1)) {
                    //    break;
                    //}
                    generations.push(c.parent.children);
                    c = c.parent;
                }
                //window.CP.exitedLoop(1);
                return generations;
            };
            reform_focus = function () {
                var count, d, set;
                if (window.current_nodes.length > 0) {
                    set = window.current_nodes.pop();
                    d = set[0];
                    count = 0;
                    d.parent._children = set[1];
                    if (d.parent._children) {
                        while (d.parent) {
                            if (window.CP.shouldStopExecution(2)) {
                                break;
                            }
                            d.parent.children = set[1][count];
                            count++;
                            d = d.parent;
                        }
                        return update(d);
                        //window.CP.exitedLoop(2);
                    }
                }
            };
            store_and_update = function (d) {
                window.current_nodes.push([
                    d,
                    construct_generations(d)
                ]);
                while (d.parent) {
                    //if (window.CP.shouldStopExecution(3)) {
                    //    break;
                    //}
                    d.parent._children = d.parent.children;
                    d.parent.children = [_.find(d.parent.children, function (e) {
                            return e.name === d.name;
                        })];
                    d = d.parent;
                }
                //window.CP.exitedLoop(3);
                d3.event.stopPropagation();
                return update(d);
            };
            reconstruct_ancestors = function (n, generations) {
                var count;
                count = generations.length - 1;
                while (n.parent) {
                    if (window.CP.shouldStopExecution(4)) {
                        break;
                    }
                    n.parent.children = generations[count];
                    count -= 1;
                    n = n.parent;
                }
                //window.CP.exitedLoop(4);
                return n;
            };
            $('body').click(function () {
                return reform_focus();
            });
            
            diameter = 720;
            height = diameter - 150;
            radius = diameter / 2;
            root = void 0;
            tree = d3.layout.tree().size([
                360,
                radius - 120
            ]);
            i = 0;
            duration = 2000;
            diagonal = d3.svg.diagonal.radial().projection(function (d) {
                return [
                    d.y,
                    d.x / 180 * Math.PI
                ];
            });
            zoom = function () {
                return svg.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
            };
            div = d3.select(element[0]);
            svg = div.insert('svg').attr('viewbox', '0 0 ' + diameter / 2 + ',' + diameter / 2).attr('width', '900px').attr('height', '100%').append('g').attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')').append('g').call(d3.behavior.zoom().scaleExtent([
                1,
                8
            ]).on('zoom', zoom));
            root = treeData[0];
            root.x0 = height / 2;
            root.y0 = 0;
            update(root);

                        

        }};
     });

    app.directive('hierarchyChart', function() {
        return { restrict: 'E', 
        scope: { data: '=chartData'},
        link: function(scope, element) {
          var treeData = scope.data;
          // the D3 bits...
            
            var diameter = 500;

            var margin = {top: 20, right: 120, bottom: 20, left: 120},
                width = diameter,
                height = diameter;
                //width = window.innerWidth, height = window.innerHeight;

            var i = 0,
                duration = 750,
                root;

            var VHtree = d3.layout.tree()
                .size([height, width - 160]);

            var cluster = d3.layout.cluster()
                .size([height, width - 160]);

            var diagonal = d3.svg.diagonal()
                .projection(function (d) {
                return [d.y, d.x];
            });

            var verticalDiagonal = d3.svg.diagonal()
                .projection(function (d) { 
                    return [d.x, d.y]; 
                });

            var radialTree = d3.layout.tree()
                .size([360, diameter / 2 ])
                .separation(function(a, b) {
                    return (a.parent == b.parent ? 1 : 2) / a.depth;
                });

            var radialCluster = d3.layout.cluster()
                .size([360, diameter / 2 ])
                .separation(function(a, b) {
                    return (a.parent == b.parent ? 1 : 2) / a.depth;
                });

            var radialDiagonal = d3.svg.diagonal.radial()
                .projection(function(d) {
                    return [d.y, d.x / 180 * Math.PI];
                });
          
          
            var tree = d3.layout.tree()
                .size([360, diameter / 2 - 80])
                .separation(function(a, b) { return (a.parent == b.parent ? 1 : 10) / a.depth; });

            var diagonal = d3.svg.diagonal.radial()
                .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

            var svg = d3.select(element[0]).append("svg")
                .attr("width", width )
                .attr("height", height )
                .append("g")
                .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

            root = treeData;
            root.x0 = height / 2;
            root.y0 = 0;

            root.children.forEach(collapse); // start with all children collapsed
            update(root);

            d3.select(self.frameElement).style("height", "800px");

            function update(source) {

            var gradient = svg.append("svg:defs")
              .append("svg:linearGradient")
                .attr("id", "gradient")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "100%")
                .attr("spreadMethod", "pad");

            gradient.append("svg:stop")
                .attr("offset", "0%")
                .attr("stop-color", "#0c0")
                .attr("stop-opacity", 1);

            gradient.append("svg:stop")
                .attr("offset", "100%")
                .attr("stop-color", "#c00")
                .attr("stop-opacity", 1);
                            
              // Compute the new tree layout.
              var nodes = tree.nodes(root),
                  links = tree.links(nodes);

              // Normalize for fixed-depth.
              nodes.forEach(function(d) { d.y = d.depth * 80; });

              // Update the nodes…
              var node = svg.selectAll("g.node")
                  .data(nodes, function(d) { return d.id || (d.id = ++i); });

              // Enter any new nodes at the parent's previous position.
              var nodeEnter = node.enter().append("g")
                  .attr("class", "node")
                  //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
                  .on("click", click);

              nodeEnter.append("circle")
                  .attr("r", 1e-6)
                  .style("stroke", function(d) { return d._children ? "green" : "red"; })
                  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

              nodeEnter.append("text")
                  .attr("x", 10)
                  .attr("dy", ".35em")
                  .attr("text-anchor", "start")
                  //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
                  .text(function(d) { return d.name; })
                  .style("fill-opacity", 1e-6);

              // Transition nodes to their new position.
              var nodeUpdate = node.transition()
                  .duration(duration)
                  .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

              nodeUpdate.select("circle")
                  .attr("r", 10)
                  .style("fill", "url(#gradient)")
                  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

              nodeUpdate.select("text")
                  .style("fill-opacity", 1)
                  .attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50)  + ")"; });

              // TODO: appropriate transform
              var nodeExit = node.exit().transition()
                  .duration(duration)
                  //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
                  .remove();

              nodeExit.select("circle")
                  .attr("r", 1e-6);

              nodeExit.select("text")
                  .style("fill-opacity", 1e-6);

              
              // Update the links…
              var link = svg.selectAll("path.link")
                  .data(links, function(d) { return d.target.id; });


              // Enter any new links at the parent's previous position.
              link.enter().insert("path", "g")
                  .attr("class", "link")
                  .attr("d", function(d) {
                    var o = {x: source.x0, y: source.y0};
                    return diagonal({source: o, target: o});
                  });

              // Transition links to their new position.
              link.transition()
                  .duration(duration)
                  .attr("d", diagonal);

              // Transition exiting nodes to the parent's new position.
              link.exit().transition()
                  .duration(duration)
                  .attr("d", function(d) {
                    var o = {x: source.x, y: source.y};
                    return diagonal({source: o, target: o});
                  })
                  .remove();

              // Stash the old positions for transition.
              nodes.forEach(function(d) {
                d.x0 = d.x;
                d.y0 = d.y;
              });
            }

            // Toggle children on click.
            function click(d) {
              if (d.children) {
                d._children = d.children;
                d.children = null;
              } else {
                d.children = d._children;
                d._children = null;
              }

              update(d);
            }

            // Collapse nodes
            function collapse(d) {
              if (d.children) {
                  d._children = d.children;
                  d._children.forEach(collapse);
                  d.children = null;
                }
            }
                        

        }};
     });

    app.directive('dynamicTree', function() {
        return { restrict: 'E', 
        scope: { data: '=chartData',
                chartType: '=chartType',
                onClick: '&'},
        link: function(scope, element) {
          var treeData = scope.data;
          var treeType = scope.chartType;

            scope.$watchCollection("chartType", function(newValue, oldValue) {
                change(newValue);
            });
                       
           
            // the D3 bits...
            
            var margin = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            width = window.innerWidth - margin.right - margin.left,
            height = window.innerHeight*0.5 - margin.top - margin.bottom;

            var diameter = window.innerWidth*0.5;
            var duration = 1500;

            var i = 0, root;

            function change(charttype) {
                if (charttype === "radialtree")
                    transitionToRadialTree();
                else if (charttype === "radialcluster")
                    transitionToRadialCluster();
                else if (charttype === "tree")
                    transitionToTree();
                else if (charttype === "treevertical")
                    transitionToTreeVertical();
                else
                    transitionToCluster();
            };

            function transitionToRadialTree() {

                var nodes = radialTree.nodes(root), // recalculate layout
                    links = radialTree.links(nodes);

                svg.transition().duration(duration)
                    .attr("transform", "translate(" + (width/2) + "," +
                                                      (height/2) + ")");
                    // set appropriate translation (origin in middle of svg)

                link.data(links)
                    .transition()
                    .duration(duration)
                    .style("stroke", "#fc8d62")
                    .attr("d", radialDiagonal); //get the new radial path

                node.data(nodes)
                    .transition()
                    .duration(duration)
                    .attr("transform", function(d) {
                        return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
                    });

                node.select("circle")
                    .transition()
                    .duration(duration)
                    .style("stroke", function(d) { return d.children ? "green" : "red"; })
                    .style("fill", function(d) { return d.children ? "lightsteelblue" : "#fff"; });

                node.select("text")
                    .attr("dx", function (d) { return d.children ? -8 : 8; })
                    .attr("dy", 3)
                    .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                    .attr("transform", "rotate(0)" )    
                    .text(function (d) { return d.name; });

            };

            function transitionToRadialCluster() {

                var nodes = radialCluster.nodes(root), // recalculate layout
                    links = radialCluster.links(nodes);

                svg.transition().duration(duration)
                    .attr("transform", "translate(" + (width/2) + "," +
                                                      (height/2) + ")");
                    // set appropriate translation (origin in middle of svg)

                link.data(links)
                    .transition()
                    .duration(duration)
                    .style("stroke", "#66c2a5")
                    .attr("d", radialDiagonal); //get the new radial path

                node.data(nodes)
                    .transition()
                    .duration(duration)
                    .attr("transform", function(d) {
                        return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
                    });

                node.select("circle")
                    .transition()
                    .duration(duration)
                    .style("stroke", function(d) { return d.children ? "green" : "red"; })
                    .style("fill", function(d) { return d.children ? "lightsteelblue" : "#fff"; });

                node.select("text")
                    .attr("dx", function (d) { return d.children ? -8 : 8; })
                    .attr("dy", 3)
                    .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                    .attr("transform", "rotate(0)" )    
                    .text(function (d) { return d.name; });

            };

            function transitionToTree() {

                var nodes = tree.nodes(root), //recalculate layout
                    links = tree.links(nodes);

                svg.transition().duration(duration)
                    .attr("transform", "translate(40,0)");    

                link.data(links)
                    .transition()
                    .duration(duration)
                    .style("stroke", "#e78ac3")
                    .attr("d", diagonal); // get the new tree path

                node.data(nodes)
                    .transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    });

                node.select("circle")
                    .transition()
                    .duration(duration)
                    .style("stroke", function(d) { return d.children ? "green" : "red"; })
                    .style("fill", function(d) { return d.children ? "lightsteelblue" : "#fff"; });

                node.select("text")
                    .attr("dx", function (d) { return d.children ? -8 : 8; })
                    .attr("dy", 3)
                    .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                    .attr("transform", "rotate(0)" )    
                    .text(function (d) { return d.name; });

            };

            function transitionToTreeVertical() {

                var nodes = tree.nodes(root), //recalculate layout
                    links = tree.links(nodes);

                svg.transition().duration(duration)
                    .attr("transform", "translate(40,0)");

                link.data(links)
                    .transition()
                    .duration(duration)
                    .style("stroke", "green")
                    .attr("d", diagonalVertical); // get the new tree path

                node.data(nodes)
                    .transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.x + "," + d.y + ")";
                    });

                node.select("circle")
                    .transition()
                    .duration(duration)
                    .style("stroke", function(d) { return d._children ? "green" : "red"; })
                    .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

                node.select("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-90)" )
                        .text(function (d) { return d.name; });


            };

            function transitionToCluster() {

                var nodes = cluster.nodes(root), //recalculate layout
                    links = cluster.links(nodes);

                svg.transition().duration(duration)
                    .attr("transform", "translate(40,0)");

                link.data(links)
                    .transition()
                    .duration(duration)
                    .style("stroke", "#8da0cb")
                    .attr("d", diagonal); //get the new cluster path

                node.data(nodes)
                    .transition()
                    .duration(duration)
                    .attr("transform", function (d) {
                        return "translate(" + d.y + "," + d.x + ")";
                    });

                node.select("circle")
                    .transition()
                    .duration(duration)
                    .style("stroke", function(d) { return d.children ? "green" : "red"; })
                    .style("fill", function(d) { return d.children ? "lightsteelblue" : "#fff"; });

                node.select("text")
                    .attr("dx", function (d) { return d.children ? -8 : 8; })
                    .attr("dy", 3)
                    .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                    .attr("transform", "rotate(0)" )    
                    .text(function (d) { return d.name; });

            };

            function getData() {
                return         {
                        "name": "ESP Solution",
                        "children": [
                            {
                                "name": "Location 1","IH":"40","MH":"60","children": [
                                    {"name": "Well 11","children": [
                                        {"name": "ESP 111"},
                                        {"name": "ESP 112"}
                                    ]},
                                    {"name": "Well 12","children": [
                                        {"name": "ESP 121"}
                                    ]},
                                    {"name": "Well 13","children": [
                                        {"name": "ESP 131"},
                                        {"name": "ESP 132"}
                                    ]},
                                    {"name": "Well 14","children": [
                                        {"name": "ESP 141"}
                                    ]}
                                ]
                            },
                            {
                                "name": "Location 2","children": [
                                    {"name": "Well 21"},
                                    {"name": "Well 22"},
                                    {"name": "Well 23"},
                                    {"name": "Well 24"},
                                    {"name": "Well 25"},
                                    {"name": "Well 26"},
                                    {"name": "Well 27"},
                                    {"name": "Well 28","children":[
                                        {"name": "ESP 281"},
                                        {"name": "ESP 282"},
                                        {"name": "ESP 283"},
                                        {"name": "ESP 284"},
                                        {"name": "ESP 285"},
                                        {"name": "ESP 286"}
                                    ]}
                                ]
                            },
                            {"name": "Location 3"},
                            {
                                "name": "Location 4","children": [
                                    {"name": "Well 41"},
                                    {"name": "Well 42"},
                                    {"name": "Well 43","children": [
                                        {"name": "ESP 431"},
                                        {"name": "ESP 432"},
                                        {"name": "ESP 433"},
                                        {"name": "ESP 434","children":[
                                            {"name": "Motor  4341"},
                                            {"name": "Motor  4342"},
                                        ]}
                                    ]},
                                    {"name": "Well 44"}
                                ]
                            },
                            {
                                "name": "Location 5","children": [
                                    {"name": "Well 51","children":[
                                        {"name": "ESP 511"},
                                        {"name": "ESP 512"},
                                        {"name": "ESP 513"},
                                        {"name": "ESP 514"},
                                        {"name": "ESP 515"},
                                        {"name": "ESP 516"}
                                    ]},
                                    {"name": "Well 52"},
                                    {"name": "Well 53"},
                                    {"name": "Well 54"},
                                    {"name": "Well 55","children":[
                                        {"name": "ESP 551"},
                                        {"name": "ESP 552"},
                                        {"name": "ESP 553"},
                                        {"name": "ESP 554"}
                                    ]},
                                    {"name": "Well 56"},
                                    {"name": "Well 57"},
                                    {"name": "Well 58"},
                                    {"name": "Well 59"},
                                    {"name": "Well 591"},
                                    {"name": "Well 592"},
                                    {"name": "Well 593"},
                                    {"name": "Well 594"},
                                    {"name": "Well 595"},
                                    {"name": "Well 596"}
                                ]
                            },
                            {
                                "name": "Location 6","children": [
                                  {"name": "Well 61","children":[
                                      {"name": "ESP 611"},
                                      {"name": "ESP 612"},
                                      {"name": "ESP 613"},
                                      {"name": "ESP 614","children":[
                                          {"name": "Motor  6141"},
                                          {"name": "Motor  6142"},
                                      ]}
                                  ]},
                                  {"name": "Well 62"},
                                  {"name": "Well 63"},
                                  {"name": "Well 64"},
                                  {"name": "Well 65"},
                                  {"name": "Well 66"},
                                  {"name": "Well 67"},
                                  {"name": "Well 68"},
                                  {"name": "Well 69"}
                                ]
                            }
                        ]
                    }; 
            }
                        
            // Toggle children on click.
            function click(d) {
              /*if (d.children) {
                d._children = d.children;
                d.children = null;
              } else {
                d.children = d._children;
                d._children = null;
              }*/
              //alert('Tree Clicked');
              //change(treeType);
            }

            // Collapse nodes
            function collapse(d) {
              if (d.children) {
                  d._children = d.children;
                  d._children.forEach(collapse);
                  d.children = null;
                }
            }

            var tree = d3.layout.tree()
                .size([height, width - 160]);

            var cluster = d3.layout.cluster()
                .size([height, width - 160]);

            var diagonal = d3.svg.diagonal()
                .projection(function (d) {
                return [d.y, d.x];
            });
                                    
            var diagonalVertical = d3.svg.diagonal()
                .projection(function (d) { 
                    return [d.x, d.y]; 
                });

            var radialTree = d3.layout.tree()
                .size([360, diameter / 2 ])
                .separation(function(a, b) {
                    return (a.parent == b.parent ? 1 : 2) / a.depth;
                });

            var radialCluster = d3.layout.cluster()
                .size([360, diameter / 2 ])
                .separation(function(a, b) {
                    return (a.parent == b.parent ? 1 : 2) / a.depth;
                });

            var radialDiagonal = d3.svg.diagonal.radial()
                .projection(function(d) {
                    return [d.y, d.x / 180 * Math.PI];
                });
            
            var svg = d3.select(element[0]).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(40,0)");

            var root = getData();
            //root.children.forEach(collapse); // start with all children collapsed
                
            var nodes = cluster.nodes(root),
                links = cluster.links(nodes);

            var link = svg.selectAll(".link")
                .data(links)
                .enter()
                .append("path")
                .attr("class", "link")
                .style("stroke", "#8da0cb")
                .attr("d", diagonal);

            var node = svg.selectAll(".node")
                .data(nodes)
                .enter()
                .append("g")
                .attr("class", "node")
                .on("click",function(d) {
                    return scope.onClick({item: d});
                })
                .attr("transform", function (d) {
                    return "translate(" + d.y + "," + d.x + ")";
                })

            node.append("circle")
                .attr("r", 4.5);

            node.append("text")
                .attr("dx", function (d) { return d.children ? -8 : 8; })
                .attr("dy", 3)
                .style("text-anchor", function (d) { return d.children ? "end" : "start"; })
                .text(function (d) { return d.name; });
            
                                                            

        }};
     });
