'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pydioHttpApi = require('pydio/http/api');

var _pydioHttpApi2 = _interopRequireDefault(_pydioHttpApi);

var _pydioHttpRestApi = require('pydio/http/rest-api');

var _jointjs = require('jointjs');

var _graphJobInput = require('./graph/JobInput');

var _graphJobInput2 = _interopRequireDefault(_graphJobInput);

var _graphFilter = require("./graph/Filter");

var _graphFilter2 = _interopRequireDefault(_graphFilter);

var _graphLink = require("./graph/Link");

var _graphLink2 = _interopRequireDefault(_graphLink);

var _graphAction = require("./graph/Action");

var _graphAction2 = _interopRequireDefault(_graphAction);

var _dagre = require('dagre');

var _dagre2 = _interopRequireDefault(_dagre);

var _graphlib = require('graphlib');

var _graphlib2 = _interopRequireDefault(_graphlib);

var _graphSelector = require("./graph/Selector");

var _graphSelector2 = _interopRequireDefault(_graphSelector);

var _materialUi = require('material-ui');

var _builderFormPanel = require("./builder/FormPanel");

var _builderFormPanel2 = _interopRequireDefault(_builderFormPanel);

var _builderTriggers = require("./builder/Triggers");

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actionsEditor = require("./actions/editor");

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _builderFilters = require("./builder/Filters");

var _builderFilters2 = _interopRequireDefault(_builderFilters);

var _graphTemplates = require("./graph/Templates");

var _graphTemplates2 = _interopRequireDefault(_graphTemplates);

var style = '\ntext[joint-selector="icon"] tspan, text[joint-selector="filter-icon"] tspan , text[joint-selector="selector-icon"] tspan {\n    font: normal normal normal 24px/1 "Material Design Icons";\n    font-size: 24px;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n}\ntext[joint-selector="filter-icon"] tspan, text[joint-selector="selector-icon"] tspan{\n    font-size: 18px;\n}\n';

var mapStateToProps = function mapStateToProps(state) {
    console.log(state);
    return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onToggleEdit: function onToggleEdit() {
            var on = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
            var layout = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

            dispatch((0, _actionsEditor.toggleEditAction)(on, layout));
        },
        onPaperBind: function onPaperBind(element, graph, events) {
            dispatch((0, _actionsEditor.bindPaperAction)(element, graph, events));
        },
        onPaperResize: function onPaperResize(width, height) {
            dispatch((0, _actionsEditor.resizePaperAction)(width, height));
        },
        onEmptyModel: function onEmptyModel(model) {
            dispatch((0, _actionsEditor.emptyModelAction)(model));
        },
        onAttachModel: function onAttachModel(link) {
            dispatch((0, _actionsEditor.attachModelAction)(link));
        },
        onDetachModel: function onDetachModel(linkView, toolView, originalTarget) {
            dispatch((0, _actionsEditor.detachModelAction)(linkView, toolView, originalTarget));
        },
        onRemoveModel: function onRemoveModel(model, parentModel) {
            dispatch((0, _actionsEditor.removeModelAction)(model, parentModel));
        },
        onDropFilter: function onDropFilter(target, dropped, filterOrSelector, objectType) {
            dispatch((0, _actionsEditor.dropFilterAction)(target, dropped, filterOrSelector, objectType));
        },
        onRemoveFilter: function onRemoveFilter(target, filter, filterOrSelector, objectType) {
            dispatch((0, _actionsEditor.removeFilterAction)(target, filter, filterOrSelector, objectType));
        },
        onTriggerChange: function onTriggerChange(triggerType, triggerData) {
            dispatch((0, _actionsEditor.changeTriggerAction)(triggerType, triggerData));
        },
        onSelectionClear: function onSelectionClear() {
            dispatch((0, _actionsEditor.clearSelectionAction)());
        },
        onSelectionSet: function onSelectionSet(type, model) {
            dispatch((0, _actionsEditor.setSelectionAction)(type, model));
        }
    };
};

function storeStateToState(store) {
    return _extends({}, mapStateToProps(store.getState()), mapDispatchToProps(store.dispatch));
}

var JobGraph = (function (_React$Component) {
    _inherits(JobGraph, _React$Component);

    function JobGraph(props) {
        var _this2 = this;

        _classCallCheck(this, JobGraph);

        _get(Object.getPrototypeOf(JobGraph.prototype), 'constructor', this).call(this, props);
        this.store = (0, _redux.createStore)(_reducers2['default'], { job: props.job });
        this.state = storeStateToState(this.store);
        this.store.subscribe(function () {
            _this2.setState(storeStateToState(_this2.store));
        });
    }

    //JobGraph = connect(mapStateToProps, mapDispatchToProps)(JobGraph);

    _createClass(JobGraph, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDescriptions();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextProps.random !== this.props.random) {
                return false;
            }
            return true;
        }
    }, {
        key: 'loadDescriptions',
        value: function loadDescriptions() {
            var _this3 = this;

            var api = new _pydioHttpRestApi.ConfigServiceApi(_pydioHttpApi2['default'].getRestClient());
            api.schedulerActionsDiscovery().then(function (data) {
                _this3.setState({ descriptions: data.Actions }, function () {
                    _this3.graphFromJob();
                    _this3.drawGraph();
                });
            })['catch'](function () {
                _this3.graphFromJob();
                _this3.drawGraph();
            });
        }
    }, {
        key: 'chainActions',
        value: function chainActions(graph, actions, inputId) {
            var _this4 = this;

            var hasData = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
            var descriptions = this.state.descriptions;

            actions.forEach(function (action) {
                var crtInput = inputId;
                var hasChain = action.ChainedActions && action.ChainedActions.length;
                var shape = new _graphAction2['default'](descriptions, action, hasChain);
                shape.addTo(graph);
                var link = new _graphLink2['default'](crtInput, 'output', shape.id, 'input', hasData);
                link.addTo(graph);
                if (hasChain) {
                    _this4.chainActions(graph, action.ChainedActions, shape.id);
                }
            });
        }
    }, {
        key: 'graphFromJob',
        value: function graphFromJob() {
            var job = this.props.job;
            var graph = this.state.graph;

            if (!job || !job.Actions || !job.Actions.length) {
                return;
            }

            var shapeIn = new _graphJobInput2['default'](job);
            shapeIn.addTo(graph);

            var actionsInput = shapeIn.id;
            var firstLinkHasData = !!job.EventNames;

            this.chainActions(graph, job.Actions, actionsInput, firstLinkHasData);
        }
    }, {
        key: 'reLayout',
        value: function reLayout(editMode) {
            var _state = this.state;
            var graph = _state.graph;
            var paper = _state.paper;
            var onPaperResize = _state.onPaperResize;

            // Relayout graph and return bounding box
            // Find JobInput and apply graph on this one ?
            var inputs = graph.getCells().filter(function (c) {
                return !c.isTemplate;
            });
            var bbox = _jointjs.layout.DirectedGraph.layout(inputs, {
                nodeSep: 48,
                edgeSep: 48,
                rankSep: 128,
                rankDir: "LR",
                marginX: editMode ? 160 : 32,
                marginY: 32,
                dagre: _dagre2['default'],
                graphlib: _graphlib2['default']
            });
            bbox.width += 80;
            bbox.height += 80;
            if (editMode) {
                bbox.height = Math.max(400, bbox.height);
                bbox.width += 200;
            }
            if (paper) {
                paper.setDimensions(bbox.width, bbox.height);
            } else {
                onPaperResize(bbox.width, bbox.height);
            }
        }
    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            var graph = this.state.graph;

            graph.getCells().filter(function (c) {
                return c.clearSelection;
            }).forEach(function (c) {
                return c.clearSelection();
            });
            this.setState({
                selectionType: null,
                selectionModel: null
            });
        }
    }, {
        key: 'select',
        value: function select(model) {
            var s = {
                selectionModel: model
            };
            if (model instanceof _graphAction2['default']) {
                s.selectionType = 'action';
            } else if (model instanceof _graphSelector2['default']) {
                s.selectionType = 'selector';
            } else if (model instanceof _graphFilter2['default']) {
                s.selectionType = 'filter';
            } else if (model instanceof _graphJobInput2['default']) {
                s.selectionType = 'trigger';
            }
            this.setState(s);
        }
    }, {
        key: 'insertOutput',
        value: function insertOutput(source, toInsert) {
            var graph = this.state.graph;

            var outLinks = graph.getConnectedLinks(source).filter(function (link) {
                return link.getSourceCell() === source;
            });
            var link = new _graphLink2['default'](source.id, 'output', toInsert.id, 'input', true);
            link.addTo(graph);
            outLinks.forEach(function (link) {
                link.source({ id: toInsert.id, port: 'output' });
            });
        }
    }, {
        key: 'insertInput',
        value: function insertInput(target, toInsert) {
            var graph = this.state.graph;

            // retarget existing links
            graph.getConnectedLinks(target).filter(function (link) {
                return link.getTargetCell() === target;
            }).forEach(function (link) {
                link.target({ id: toInsert.id, port: 'input' });
            });
            var link = new _graphLink2['default'](toInsert.id, 'output', target.id, 'input');
            link.addTo(graph);
        }
    }, {
        key: 'clearHighlight',
        value: function clearHighlight() {
            var _state2 = this.state;
            var graph = _state2.graph;
            var paper = _state2.paper;

            graph.getCells().forEach(function (c) {
                c.findView(paper).unhighlight();
            });
        }
    }, {
        key: 'drawGraph',
        value: function drawGraph() {
            var _this5 = this;

            var removeLinkTool = function removeLinkTool() {
                return new _jointjs.linkTools.Remove({
                    action: function action(evt, linkView, toolView) {
                        onDetachModel(linkView, toolView);
                    }
                });
            };
            var _state3 = this.state;
            var graph = _state3.graph;
            var job = _state3.job;
            var onPaperBind = _state3.onPaperBind;
            var onAttachModel = _state3.onAttachModel;
            var onDetachModel = _state3.onDetachModel;
            var onDropFilter = _state3.onDropFilter;
            var editMode = _state3.editMode;

            var _this = this;

            var templates = new _graphTemplates2['default'](graph);
            templates.addTo(graph);

            onPaperBind(_reactDom2['default'].findDOMNode(this.refs.placeholder), graph, {
                'element:pointerdown': function elementPointerdown(elementView, event) {
                    event.data = elementView.model.position();
                    var model = elementView.model;

                    if (_this.state.editMode && !model.isTemplate) {
                        if (model instanceof _graphAction2['default'] || model instanceof _graphSelector2['default'] || model instanceof _graphFilter2['default'] || model instanceof _graphJobInput2['default']) {
                            _this5.clearSelection();
                            model.select();
                            _this5.select(model);
                        }
                    } else if (model.isTemplate && model !== templates) {
                        // Start dragging new model and duplicate
                        templates.replicate(model, graph);
                        model.toFront();
                    }
                },
                'element:filter:pointerdown': function elementFilterPointerdown(elementView, event) {
                    var model = elementView.model;

                    if (_this.state.editMode) {
                        _this5.clearSelection();
                        model.selectFilter();
                        if (model instanceof _graphJobInput2['default']) {
                            _this5.setState({ selectionModel: job, selectionType: 'filter' });
                        } else if (model instanceof _graphAction2['default']) {
                            _this5.setState({ selectionModel: model.getJobsAction(), selectionType: 'filter' });
                        }
                        event.stopPropagation();
                    }
                },
                'element:selector:pointerdown': function elementSelectorPointerdown(elementView, event) {
                    var model = elementView.model;

                    if (_this.state.editMode) {
                        _this5.clearSelection();
                        model.selectSelector();
                        if (model instanceof _graphJobInput2['default']) {
                            _this5.setState({ selectionModel: job, selectionType: 'selector' });
                        } else if (model instanceof _graphAction2['default']) {
                            _this5.setState({ selectionModel: model.getJobsAction(), selectionType: 'selector' });
                        }
                        event.stopPropagation();
                    }
                },
                'element:nomove': function elementNomove(elementView, event) {
                    event.stopPropagation();
                },
                'element:pointerup': function elementPointerup(elementView, evt, x, y) {
                    var elementAbove = elementView.model;
                    var isFilter = elementAbove instanceof _graphFilter2['default'] || elementAbove instanceof _graphSelector2['default'];
                    _this.clearHighlight();
                    var coordinates = new _jointjs.g.Point(x, y);
                    var elementBelow = this.model.findModelsFromPoint(coordinates).find(function (el) {
                        return el.id !== elementAbove.id;
                    });
                    // If the two elements are connected already, don't
                    // connect them again (this is application-specific though).
                    if (isFilter && elementBelow && graph.getNeighbors(elementBelow).indexOf(elementAbove) === -1) {
                        // Move the element to the position before dragging.
                        // elementAbove.position(evt.data.x, evt.data.y);
                        if (elementBelow instanceof _graphJobInput2['default'] || elementBelow instanceof _graphAction2['default']) {
                            if (elementAbove instanceof _graphFilter2['default']) {
                                if (elementBelow instanceof _graphJobInput2['default']) {
                                    onDropFilter(job, elementAbove.getFilter(), 'filter', elementAbove.getFilterType());
                                    _this.setState({ selectionModel: job, selectionType: 'filter' });
                                } else if (elementBelow instanceof _graphAction2['default']) {
                                    onDropFilter(elementBelow.getJobsAction(), elementAbove.getFilter(), 'filter', elementAbove.getFilterType());
                                    _this.setState({ selectionModel: elementBelow.getJobsAction(), selectionType: 'filter' });
                                }
                                elementBelow.selectFilter();
                            } else {
                                if (elementBelow instanceof _graphJobInput2['default']) {
                                    onDropFilter(job, elementAbove.getSelector(), 'selector', elementAbove.getSelectorType());
                                    _this.setState({ selectionModel: job, selectionType: 'selector' });
                                } else if (elementBelow instanceof _graphAction2['default']) {
                                    onDropFilter(elementBelow.getJobsAction(), elementAbove.getSelector(), 'selector', elementAbove.getSelectorType());
                                    _this.setState({ selectionModel: elementBelow.getJobsAction(), selectionType: 'selector' });
                                }
                                elementBelow.selectSelector();
                            }

                            elementAbove.remove();
                            return;
                        }
                    }
                    if (isFilter && elementAbove.isTemplate) {
                        elementAbove.remove();
                    }
                },
                'element:pointermove': function elementPointermove(elementView, evt, x, y) {
                    var elementAbove = elementView.model;
                    var isFilter = elementAbove instanceof _graphFilter2['default'] || elementAbove instanceof _graphSelector2['default'];
                    _this.clearHighlight();
                    var coordinates = new _jointjs.g.Point(x, y);
                    var elementBelow = this.model.findModelsFromPoint(coordinates).find(function (el) {
                        return el.id !== elementAbove.id;
                    });
                    // If the two elements are connected already, don't
                    // connect them again (this is application-specific though).
                    if (isFilter && elementBelow && graph.getNeighbors(elementBelow).indexOf(elementAbove) === -1) {
                        if (elementBelow instanceof _graphJobInput2['default'] || elementBelow instanceof _graphAction2['default']) {
                            elementBelow.findView(this).highlight();
                        }
                    }
                },
                'link:connect': function linkConnect(linkView, event) {
                    //console.log('connect => link', linkView);
                    linkView.addTools(new _jointjs.dia.ToolsView({ tools: [removeLinkTool()] }));
                    onAttachModel(linkView);
                },
                'link:disconnect': function linkDisconnect(linkView, event, elementView) {
                    //console.log('disconnect => remove linkView from original', elementView);
                    onDetachModel(linkView, null, elementView);
                },
                'link:remove': removeLinkTool
            });
            this.reLayout(editMode);
        }
    }, {
        key: 'deleteButton',
        value: function deleteButton() {
            var _state4 = this.state;
            var selectionModel = _state4.selectionModel;
            var paper = _state4.paper;
            var graph = _state4.graph;
            var onRemoveModel = _state4.onRemoveModel;

            var parentModel = undefined;
            graph.getConnectedLinks(selectionModel).forEach(function (link) {
                var linkView = link.findView(paper);
                if (linkView.targetView.model === selectionModel) {
                    parentModel = linkView.sourceView.model;
                }
            });
            onRemoveModel(selectionModel, parentModel);
            this.clearSelection();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var selBlock = undefined;
            var _state5 = this.state;
            var selectionType = _state5.selectionType;
            var descriptions = _state5.descriptions;
            var selectionModel = _state5.selectionModel;
            var onTriggerChange = _state5.onTriggerChange;
            var createNewAction = _state5.createNewAction;
            var onRemoveFilter = _state5.onRemoveFilter;

            // Redux store stuff - should be on props!
            var _state6 = this.state;
            var onToggleEdit = _state6.onToggleEdit;
            var onEmptyModel = _state6.onEmptyModel;
            var editMode = _state6.editMode;

            var blockProps = { onDismiss: function onDismiss() {
                    _this6.clearSelection();
                } };
            if (createNewAction) {
                selBlock = _react2['default'].createElement(_builderFormPanel2['default'], {
                    actions: descriptions,
                    action: _pydioHttpRestApi.JobsAction.constructFromObject({ ID: _actionsEditor.JOB_ACTION_EMPTY }),
                    onChange: function (newAction) {
                        onEmptyModel(new _graphAction2['default'](descriptions, newAction, true));
                    },
                    create: true,
                    onDismiss: function () {
                        _this6.setState({ createNewAction: false });
                    }
                });
            } else if (selectionModel) {
                if (selectionType === 'action') {
                    var action = selectionModel.getJobsAction();
                    selBlock = _react2['default'].createElement(_builderFormPanel2['default'], _extends({
                        actions: descriptions,
                        actionInfo: descriptions[action.ID],
                        action: action }, blockProps, {
                        onChange: function (newAction) {
                            return console.log(newAction);
                        }
                    }));
                } else if (selectionType === 'selector' || selectionType === 'filter') {
                    if (selectionModel instanceof _pydioHttpRestApi.JobsJob) {
                        selBlock = _react2['default'].createElement(_builderFilters2['default'], _extends({ job: selectionModel, type: selectionType }, blockProps, { onRemoveFilter: onRemoveFilter }));
                    } else {
                        selBlock = _react2['default'].createElement(_builderFilters2['default'], _extends({ action: selectionModel, type: selectionType }, blockProps, { onRemoveFilter: onRemoveFilter }));
                    }
                } else if (selectionType === 'trigger') {
                    var job = this.state.job;

                    selBlock = _react2['default'].createElement(_builderTriggers.Triggers, _extends({ job: job }, blockProps, { onChange: onTriggerChange }));
                }
            }

            var headerStyle = {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'whitesmoke',
                borderBottom: '1px solid #e0e0e0',
                height: 48,
                color: '#9e9e9e',
                fontSize: 12,
                fontWeight: 500
            };

            return _react2['default'].createElement(
                _materialUi.Paper,
                { zDepth: 1, style: { margin: 20 } },
                _react2['default'].createElement(
                    'div',
                    { style: headerStyle },
                    _react2['default'].createElement(
                        'span',
                        { style: { flex: 1, padding: '14px 24px' } },
                        'Job Workflow - click on boxes to show details'
                    ),
                    editMode && _react2['default'].createElement(_materialUi.FlatButton, { disabled: !selectionModel || selectionModel instanceof _graphJobInput2['default'], onTouchTap: function () {
                            _this6.deleteButton();
                        }, label: "Remove" }),
                    editMode && _react2['default'].createElement(_materialUi.FlatButton, { onTouchTap: function () {
                            _this6.setState({ createNewAction: true });
                        }, label: "+ Action" }),
                    editMode && _react2['default'].createElement(_materialUi.FlatButton, { onTouchTap: function () {
                            _this6.reLayout(editMode);
                        }, label: "Layout" }),
                    _react2['default'].createElement(_materialUi.FlatButton, { onTouchTap: function () {
                            return onToggleEdit(!editMode, _this6.reLayout.bind(_this6));
                        }, label: editMode ? 'Close' : 'Edit' })
                ),
                _react2['default'].createElement(
                    'div',
                    { style: { position: 'relative', display: 'flex', minHeight: editMode ? 400 : null } },
                    _react2['default'].createElement(
                        'div',
                        { style: { flex: 1, overflowX: 'auto' }, ref: 'scroller' },
                        _react2['default'].createElement('div', { id: 'playground', ref: 'placeholder' })
                    ),
                    _react2['default'].createElement(
                        _materialUi.Paper,
                        { zDepth: 0, style: { width: selBlock ? 300 : 0 } },
                        selBlock
                    )
                ),
                _react2['default'].createElement('style', { type: "text/css", dangerouslySetInnerHTML: { __html: style } })
            );
        }
    }]);

    return JobGraph;
})(_react2['default'].Component);

exports['default'] = JobGraph;
module.exports = exports['default'];
