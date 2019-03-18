'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _department = require('../../ethereum/department');

var _department2 = _interopRequireDefault(_department);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _RequestRow = require('../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _ipfs = require('../../utils/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/littlewhite/NCUcoin/pages/departments/show.js?entry';
//import ContributeForm from '../../components/ContributeForm';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            item: null
        }, _this.setPostitems = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post, descriptionHTML;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            items = [];
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = (0, _getIterator3.default)(_this.props.posts);

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 15;
                                break;
                            }

                            post = _step.value;
                            _context.next = 10;
                            return _ipfs2.default.cat(post.hash);

                        case 10:
                            descriptionHTML = _context.sent;

                            items.push({
                                header: "公告",
                                description: _react2.default.createElement('div', {
                                    dangerouslySetInnerHTML: { __html: descriptionHTML.toString() },
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 55
                                    }
                                }),
                                fluid: true,
                                extra: _react2.default.createElement('span', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 60
                                    }
                                }, post.time),
                                style: { overflowX: 'scroll' }
                            });

                        case 12:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 15:
                            _context.next = 21;
                            break;

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 21:
                            _context.prev = 21;
                            _context.prev = 22;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 24:
                            _context.prev = 24;

                            if (!_didIteratorError) {
                                _context.next = 27;
                                break;
                            }

                            throw _iteratorError;

                        case 27:
                            return _context.finish(24);

                        case 28:
                            return _context.finish(21);

                        case 29:
                            console.log('items', items);
                            _this.setState({ items: items });

                        case 31:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[4, 17, 21, 29], [22,, 24, 28]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.setPostitems();

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderPost',
        value: function renderPost() {

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.state.items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            });
        }
    }, {
        key: 'renderRow',
        value: function renderRow() {
            var _this3 = this;

            return this.props.persons.map(function (person, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    person: person,
                    address: _this3.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                });
            });
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                manager = _props.manager,
                departmentName = _props.departmentName,
                personCount = _props.personCount;

            var items = [{
                header: manager,
                meta: 'Address of Mnager',
                description: 'the manager create this and can create request',
                style: { overflowWrap: 'break-word' }
            }, {
                header: departmentName,
                meta: '系級',
                description: '哪一年哪一級'
            }, {
                header: personCount,
                meta: 'Number of person',
                description: '有多少人'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Department Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 15, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement(_routes.Link, { route: '/departments/' + this.props.address + '/persons/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, 'New Person!'))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, this.renderPost()))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, '\u5B78\u865F'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, '\u540D\u5B57'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, '\u8077\u7A31'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, '\u793E\u7FA4\u5A92\u9AD4'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, 'Email'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, 'Update'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'Approve'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, this.renderRow())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
                var department, summary, count, persons, posts;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                department = (0, _department2.default)(props.query.address);
                                _context3.next = 3;
                                return department.methods.getSummary().call();

                            case 3:
                                summary = _context3.sent;
                                _context3.next = 6;
                                return department.methods.getPersonCount().call();

                            case 6:
                                count = _context3.sent;
                                _context3.next = 9;
                                return _promise2.default.all(Array(parseInt(count)).fill().map(function (element, index) {
                                    return department.methods.persons(index).call();
                                }));

                            case 9:
                                persons = _context3.sent;
                                _context3.next = 12;
                                return _promise2.default.all(Array(parseInt(count)).fill().map(function (element, index) {
                                    return department.methods.posts(index).call();
                                }));

                            case 12:
                                posts = _context3.sent;
                                return _context3.abrupt('return', {
                                    address: props.query.address,
                                    departmentName: summary[0],
                                    personCount: count,
                                    manager: summary[2],
                                    persons: persons,
                                    posts: posts
                                });

                            case 14:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getInitialProps(_x) {
                return _ref4.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9yZWYiLCJfdGhpczIiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX19wcm90b19fIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJpdGVtIiwic2V0UG9zdGl0ZW1zIiwibWFyayIsIl9jYWxsZWUiLCJpdGVtcyIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJwb3N0IiwiZGVzY3JpcHRpb25IVE1MIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInVuZGVmaW5lZCIsInByb3BzIiwicG9zdHMiLCJkb25lIiwidmFsdWUiLCJjYXQiLCJoYXNoIiwic2VudCIsInB1c2giLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRvU3RyaW5nIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJmbHVpZCIsImV4dHJhIiwidGltZSIsInN0eWxlIiwib3ZlcmZsb3dYIiwidDAiLCJyZXR1cm4iLCJmaW5pc2giLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzdG9wIiwia2V5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyUG9zdCIsIkdyb3VwIiwicmVuZGVyUm93IiwiX3RoaXMzIiwicGVyc29ucyIsIm1hcCIsInBlcnNvbiIsImluZGV4IiwiYWRkcmVzcyIsInJlbmRlckNhcmRzIiwiX3Byb3BzIiwibWFuYWdlciIsImRlcGFydG1lbnROYW1lIiwicGVyc29uQ291bnQiLCJtZXRhIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJDb2x1bW4iLCJ3aWR0aCIsInJvdXRlIiwicHJpbWFyeSIsIl9yZWY0IiwiX2NhbGxlZTMiLCJkZXBhcnRtZW50Iiwic3VtbWFyeSIsImNvdW50IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImdldFBlcnNvbkNvdW50IiwiYWxsIiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImFicnVwdCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQVRBLElBQUlBLGVBQWUsNERBQW5CO0FBTUE7OztBQUtBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUNyQyw0QkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsYUFBU0QsWUFBVCxHQUF3QjtBQUNwQixZQUFJRSxJQUFKO0FBQUEsWUFDSUMsU0FBUyxJQURiOztBQUdBLFlBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsc0NBQWdCLElBQWhCLEVBQXNCTixZQUF0Qjs7QUFFQSxhQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDakZGLGlCQUFLRSxJQUFMLElBQWFKLFVBQVVJLElBQVYsQ0FBYjtBQUNIOztBQUVELGVBQU9OLFFBQVFGLFNBQVNDLFFBQVEseUNBQTJC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LENBQXlCeUMsS0FBekIsRUFBZ0NoRSxJQUFoQyxFQUFQO0FBQ0gsaUNBRm1CLENBQWIsQ0FBUDs7QUFJSixpQ0FBSyxFQUFMO0FBQ0l1Qix3Q0FBUWlFLFVBQVU1RCxJQUFsQjtBQUNBLHVDQUFPNEQsVUFBVVMsTUFBVixDQUFpQixRQUFqQixFQUEyQjtBQUM5QmhDLDZDQUFTM0MsTUFBTW1FLEtBQU4sQ0FBWXhCLE9BRFM7QUFFOUJJLG9EQUFnQmdCLFFBQVEsQ0FBUixDQUZjO0FBRzlCZixpREFBYWdCLEtBSGlCO0FBSTlCbEIsNkNBQVNpQixRQUFRLENBQVIsQ0FKcUI7QUFLOUJ4Qiw2Q0FBU0EsT0FMcUI7QUFNOUJ0QywyQ0FBT0E7QUFOdUIsaUNBQTNCLENBQVA7O0FBU0osaUNBQUssRUFBTDtBQUNBLGlDQUFLLEtBQUw7QUFDSSx1Q0FBT2lFLFVBQVV0QyxJQUFWLEVBQVA7QUF0Q1I7QUF3Q0g7QUFDSixpQkEzQ00sRUEyQ0ppQyxRQTNDSSxFQTJDTSxJQTNDTixDQUFQO0FBNENILGFBOUMyQyxDQUFoQyxDQUFaOztBQWdEQSxxQkFBU2UsZUFBVCxDQUF5QkMsRUFBekIsRUFBNkI7QUFDekIsdUJBQU9qQixNQUFNakYsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDSDs7QUFFRCxtQkFBT3dHLGVBQVA7QUFDSCxTQXRETTtBQUZOLEtBQUQsQ0FwVEo7O0FBK1dBLFdBQU9oSCxZQUFQO0FBQ0gsQ0F2ZWtCLGtCQUFuQjs7a0JBeWVlQSxZIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX1Byb21pc2UgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UnO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2dldEl0ZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvVXNlcnMvbGl0dGxld2hpdGUvTkNVY29pbi9wYWdlcy9kZXBhcnRtZW50cy9zaG93LmpzP2VudHJ5JztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGVwYXJ0bWVudCBmcm9tICcuLi8uLi9ldGhlcmV1bS9kZXBhcnRtZW50JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuLy9pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5pbXBvcnQgaXBmcyBmcm9tICcuLi8uLi91dGlscy9pcGZzJztcblxudmFyIENhbXBhaWduU2hvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENhbXBhaWduU2hvdywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDYW1wYWlnblNob3coKSB7XG4gICAgICAgIHZhciBfcmVmLFxuICAgICAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1wYWlnblNob3cpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENhbXBhaWduU2hvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDYW1wYWlnblNob3cpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW06IG51bGxcbiAgICAgICAgfSwgX3RoaXMuc2V0UG9zdGl0ZW1zID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcywgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiwgX2RpZEl0ZXJhdG9yRXJyb3IsIF9pdGVyYXRvckVycm9yLCBfaXRlcmF0b3IsIF9zdGVwLCBwb3N0LCBkZXNjcmlwdGlvbkhUTUw7XG5cbiAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvciA9IF9nZXRJdGVyYXRvcihfdGhpcy5wcm9wcy5wb3N0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpcGZzLmNhdChwb3N0Lmhhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSFRNTCA9IF9jb250ZXh0LnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIuWFrOWRilwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBkZXNjcmlwdGlvbkhUTUwudG9TdHJpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93WDogJ3Njcm9sbCcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSg0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBfY29udGV4dC50MDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW1zJywgaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXRlbXM6IGl0ZW1zIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzQsIDE3LCAyMSwgMjldLCBbMjIsLCAyNCwgMjhdXSk7XG4gICAgICAgIH0pKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhbXBhaWduU2hvdywgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0UG9zdGl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMiwgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50RGlkTW91bnQ7XG4gICAgICAgIH0oKVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQb3N0KCkge1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiB0aGlzLnN0YXRlLml0ZW1zLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJSb3cnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUm93KCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnBlcnNvbnMubWFwKGZ1bmN0aW9uIChwZXJzb24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVxdWVzdFJvdywge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBwZXJzb246IHBlcnNvbixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogX3RoaXMzLnByb3BzLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckNhcmRzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNhcmRzKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbWFuYWdlciA9IF9wcm9wcy5tYW5hZ2VyLFxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnROYW1lID0gX3Byb3BzLmRlcGFydG1lbnROYW1lLFxuICAgICAgICAgICAgICAgIHBlcnNvbkNvdW50ID0gX3Byb3BzLnBlcnNvbkNvdW50O1xuXG5cbiAgICAgICAgICAgIHZhciBpdGVtcyA9IFt7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICAgICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIE1uYWdlcicsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgbWFuYWdlciBjcmVhdGUgdGhpcyBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBkZXBhcnRtZW50TmFtZSxcbiAgICAgICAgICAgICAgICBtZXRhOiAn57O757SaJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+WTquS4gOW5tOWTquS4gOe0midcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHBlcnNvbkNvdW50LFxuICAgICAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgcGVyc29uJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+acieWkmuWwkeS6uidcbiAgICAgICAgICAgIH1dO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTEyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgSGVhZGVyID0gVGFibGUuSGVhZGVyLFxuICAgICAgICAgICAgICAgIFJvdyA9IFRhYmxlLlJvdyxcbiAgICAgICAgICAgICAgICBIZWFkZXJDZWxsID0gVGFibGUuSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICBCb2R5ID0gVGFibGUuQm9keTtcblxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMYXlvdXQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExOVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTIwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICdEZXBhcnRtZW50IFNob3cnXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBHcmlkLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTIxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkLlJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxNSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYXJkcygpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBHcmlkLlJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTI5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcm91dGU6ICcvZGVwYXJ0bWVudHMvJyArIHRoaXMucHJvcHMuYWRkcmVzcyArICcvcGVyc29ucy9uZXcnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTMxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ05ldyBQZXJzb24hJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTM4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBvc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBUYWJsZSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTQ3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTVCNzhcXHU4NjVGJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1NTQwRFxcdTVCNTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU4MDc3XFx1N0EzMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTc5M0VcXHU3RkE0XFx1NUE5MlxcdTlBRDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTUyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdFbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcHJvdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNTdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSb3coKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWY0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMocHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVwYXJ0bWVudCwgc3VtbWFyeSwgY291bnQsIHBlcnNvbnMsIHBvc3RzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50ID0gRGVwYXJ0bWVudChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVwYXJ0bWVudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnkgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVwYXJ0bWVudC5tZXRob2RzLmdldFBlcnNvbkNvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfUHJvbWlzZS5hbGwoQXJyYXkocGFyc2VJbnQoY291bnQpKS5maWxsKCkubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlcGFydG1lbnQubWV0aG9kcy5wZXJzb25zKGluZGV4KS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29ucyA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKEFycmF5KHBhcnNlSW50KGNvdW50KSkuZmlsbCgpLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXBhcnRtZW50Lm1ldGhvZHMucG9zdHMoaW5kZXgpLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHMgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoJ3JldHVybicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50TmFtZTogc3VtbWFyeVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbkNvdW50OiBjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXI6IHN1bW1hcnlbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb25zOiBwZXJzb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHBvc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUzLCB0aGlzKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHM7XG4gICAgICAgIH0oKVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYW1wYWlnblNob3c7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9yZWYiLCJfdGhpczIiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX19wcm90b19fIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJpdGVtIiwic2V0UG9zdGl0ZW1zIiwibWFyayIsIl9jYWxsZWUiLCJpdGVtcyIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJwb3N0IiwiZGVzY3JpcHRpb25IVE1MIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInVuZGVmaW5lZCIsInByb3BzIiwicG9zdHMiLCJkb25lIiwidmFsdWUiLCJjYXQiLCJoYXNoIiwic2VudCIsInB1c2giLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRvU3RyaW5nIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJmbHVpZCIsImV4dHJhIiwidGltZSIsInN0eWxlIiwib3ZlcmZsb3dYIiwidDAiLCJyZXR1cm4iLCJmaW5pc2giLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzdG9wIiwia2V5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyUG9zdCIsIkdyb3VwIiwicmVuZGVyUm93IiwiX3RoaXMzIiwicGVyc29ucyIsIm1hcCIsInBlcnNvbiIsImluZGV4IiwiYWRkcmVzcyIsInJlbmRlckNhcmRzIiwiX3Byb3BzIiwibWFuYWdlciIsImRlcGFydG1lbnROYW1lIiwicGVyc29uQ291bnQiLCJtZXRhIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJDb2x1bW4iLCJ3aWR0aCIsInJvdXRlIiwicHJpbWFyeSIsIl9yZWY0IiwiX2NhbGxlZTMiLCJkZXBhcnRtZW50Iiwic3VtbWFyeSIsImNvdW50IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImdldFBlcnNvbkNvdW50IiwiYWxsIiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImFicnVwdCIsImdldEluaXRpYWxQcm9wcyIsIl94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQVRBLElBQUlBLGVBQWUsNERBQW5CO0FBTUE7OztBQUtBLElBQUlDLGVBQWUsVUFBVUMsVUFBVixFQUFzQjtBQUNyQyw0QkFBVUQsWUFBVixFQUF3QkMsVUFBeEI7O0FBRUEsYUFBU0QsWUFBVCxHQUF3QjtBQUNwQixZQUFJRSxJQUFKO0FBQUEsWUFDSUMsU0FBUyxJQURiOztBQUdBLFlBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsc0NBQWdCLElBQWhCLEVBQXNCTixZQUF0Qjs7QUFFQSxhQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDakZGLGlCQUFLRSxJQUFMLElBQWFKLFVBQVVJLElBQVYsQ0FBYjtBQUNIOztBQUVELGVBQU9OLFFBQVFGLFNBQVNDLFFBQVEseUNBQTJC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