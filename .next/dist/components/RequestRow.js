'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _department = require('../ethereum/department');

var _department2 = _interopRequireDefault(_department);

var _ipfs = require('../utils/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _routes = require('../routes');

var _measure = require('../utils/measure');

var _measure2 = _interopRequireDefault(_measure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/littlewhite/NCUcoin/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            id: '',
            name: '',
            job: '',
            media: '',
            email: '',
            updateloading: false,
            errorMessage: ''
        }, _this.onUpdate = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var department, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log("ya");
                            department = (0, _department2.default)(_this.props.address);

                            _this.setState({ updateloading: true, errorMessage: '' });
                            _context2.prev = 3;
                            _context2.next = 6;
                            return _web2.default.eth.getAccounts();

                        case 6:
                            accounts = _context2.sent;
                            _context2.next = 9;
                            return (0, _measure2.default)('update person', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return department.methods.updatePerson(_this.props.id, _this.state.id, _this.state.name, _this.state.job, _this.state.media, _this.state.email).send({
                                                    from: accounts[0]
                                                });

                                            case 2:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this2);
                            })));

                        case 9:
                            _routes.Router.pushRoute('/');
                            _context2.next = 15;
                            break;

                        case 12:
                            _context2.prev = 12;
                            _context2.t0 = _context2['catch'](3);

                            _this.setState({ errorMessage: _context2.t0.message });

                        case 15:

                            _this.setState({ updateloading: false });

                        case 16:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[3, 12]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'componentDidMount',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var person = this.props.person;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, person.id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, person.name), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, person.job), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, person.media), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, person.email), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, !person.isApproved ? _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Update') : _react2.default.createElement(_semanticUiReact.Popup, {
                trigger: _react2.default.createElement(_semanticUiReact.Button, { color: 'green', loading: this.state.updateloading, basic: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    }
                }, 'Update'),
                content: _react2.default.createElement(_semanticUiReact.Grid, { centered: true, divided: true, columns: 6, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                }, _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    }
                }, '\u5B78\u865F'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    }
                }, person.id), _react2.default.createElement(_semanticUiReact.Input, { size: 'mini',
                    value: this.state.id,
                    onChange: function onChange(event) {
                        return _this3.setState({ id: event.target.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                    }
                })), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 83
                    }
                }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, '\u540D\u5B57'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }, person.name), _react2.default.createElement(_semanticUiReact.Input, { size: 'mini',
                    value: this.state.name,
                    onChange: function onChange(event) {
                        return _this3.setState({ name: event.target.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                })), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    }
                }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                    }
                }, '\u8077\u7A31'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 93
                    }
                }, person.job), _react2.default.createElement(_semanticUiReact.Input, { size: 'mini',
                    value: this.state.job,
                    onChange: function onChange(event) {
                        return _this3.setState({ job: event.target.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                })), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 99
                    }
                }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                    }
                }, '\u793E\u7FA4\u5A92\u9AD4'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                    }
                }, person.media), _react2.default.createElement(_semanticUiReact.Input, { size: 'mini',
                    value: this.state.media,
                    onChange: function onChange(event) {
                        return _this3.setState({ media: event.target.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                    }
                })), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                    }
                }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                    }
                }, 'Email'), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109
                    }
                }, person.email), _react2.default.createElement(_semanticUiReact.Input, { size: 'mini',
                    value: this.state.email,
                    onChange: function onChange(event) {
                        return _this3.setState({ email: event.target.value });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    }
                })), _react2.default.createElement(_semanticUiReact.Grid.Column, { textAlign: 'center', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 115
                    }
                }, _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 116
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.updateloading, onClick: this.onUpdate, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 117
                    }
                }, 'Update'))),
                on: 'click',
                flowing: true, hoverable: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, person.isApproved ? _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, 'Approved') : _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, 'Approving')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
                var _props$query, person, id, address;

                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _props$query = props.query, person = _props$query.person, id = _props$query.id, address = _props$query.address;
                                return _context4.abrupt('return', { person: person, id: id, address: address });

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getInitialProps(_x) {
                return _ref5.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiaWQiLCJuYW1lIiwiam9iIiwibWVkaWEiLCJlbWFpbCIsInVwZGF0ZWxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblVwZGF0ZSIsIm1hcmsiLCJfY2FsbGVlMiIsImRlcGFydG1lbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibWV0aG9kcyIsInVwZGF0ZVBlcnNvbiIsInNlbmQiLCJmcm9tIiwic3RvcCIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsImtleSIsInZhbHVlIiwiX3JlZjQiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiX3RoaXMzIiwiUm93IiwiQ2VsbCIsInBlcnNvbiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImlzQXBwcm92ZWQiLCJjb2xvciIsImJhc2ljIiwiZGlzYWJsZWQiLCJ0cmlnZ2VyIiwibG9hZGluZyIsImNvbnRlbnQiLCJjZW50ZXJlZCIsImRpdmlkZWQiLCJjb2x1bW5zIiwiQ29sdW1uIiwidGV4dEFsaWduIiwiYXMiLCJzaXplIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInByaW1hcnkiLCJvbkNsaWNrIiwib24iLCJmbG93aW5nIiwiaG92ZXJhYmxlIiwiX3JlZjUiLCJfY2FsbGVlNCIsIl9wcm9wcyRxdWVyeSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBUEEsSUFBSUEsZUFBZSxxREFBbkI7OztBQVNBLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNuQyw0QkFBVUQsVUFBVixFQUFzQkMsVUFBdEI7O0FBRUEsYUFBU0QsVUFBVCxHQUFzQjtBQUNsQixZQUFJRSxJQUFKO0FBQUEsWUFDSUMsU0FBUyxJQURiOztBQUdBLFlBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsc0NBQWdCLElBQWhCLEVBQXNCTixVQUF0Qjs7QUFFQSxhQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDakZGLGlCQUFLRSxJQUFMLElBQWFKLFVBQVVJLElBQVYsQ0FBYjtBQUNIOztBQUVELGVBQU9OLFFBQVFGLFNBQVNDLFFBQVEseUNBQTJCLElBQTNCLEVBQWlDLENBQUNILE9BQU9GLFdBQVdhLFNBQVgsSUFBd0IsOEJBQXVCYixVQUF2QixDQUFoQyxFQUFvRWMsSUFBcEUsQ0FBeUVDLEtBQXpFLENBQStFYixJQUEvRSxFQUFxRixDQUFDLElBQUQsRUFBT2MsTUFBUCxDQUFjTixJQUFkLENBQXJGLENBQWpDLENBQVIsRUFBcUpMLEtBQTlKLEdBQXNLQSxNQUFNWSxLQUFOLEdBQWM7QUFDL0xDLGdCQUFJLEVBRDJMO0FB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QTZkZUEsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAnYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9Vc2Vycy9saXR0bGV3aGl0ZS9OQ1Vjb2luL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiwgUG9wdXAsIEdyaWQsIEhlYWRlciwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBEZXBhcnRtZW50IGZyb20gJy4uL2V0aGVyZXVtL2RlcGFydG1lbnQnO1xuaW1wb3J0IGlwZnMgZnJvbSAnLi4vdXRpbHMvaXBmcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IG1lYXN1cmUgZnJvbSAnLi4vdXRpbHMvbWVhc3VyZSc7XG5cbnZhciBSZXF1ZXN0Um93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmVxdWVzdFJvdywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZXF1ZXN0Um93KCkge1xuICAgICAgICB2YXIgX3JlZixcbiAgICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdFJvdyk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVxdWVzdFJvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZXF1ZXN0Um93KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGpvYjogJycsXG4gICAgICAgICAgICBtZWRpYTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB1cGRhdGVsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICAgICAgfSwgX3RoaXMub25VcGRhdGUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgICAgICAgIHZhciBkZXBhcnRtZW50LCBhY2NvdW50cztcbiAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCA9IERlcGFydG1lbnQoX3RoaXMucHJvcHMuYWRkcmVzcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdXBkYXRlbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dDIuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lYXN1cmUoJ3VwZGF0ZSBwZXJzb24nLCBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVwYXJ0bWVudC5tZXRob2RzLnVwZGF0ZVBlcnNvbihfdGhpcy5wcm9wcy5pZCwgX3RoaXMuc3RhdGUuaWQsIF90aGlzLnN0YXRlLm5hbWUsIF90aGlzLnN0YXRlLmpvYiwgX3RoaXMuc3RhdGUubWVkaWEsIF90aGlzLnN0YXRlLmVtYWlsKS5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLnQwID0gX2NvbnRleHQyWydjYXRjaCddKDMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0Mi50MC5tZXNzYWdlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB1cGRhdGVsb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyLCBbWzMsIDEyXV0pO1xuICAgICAgICB9KSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSZXF1ZXN0Um93LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUzLCB0aGlzKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnREaWRNb3VudDtcbiAgICAgICAgfSgpXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBSb3cgPSBUYWJsZS5Sb3csXG4gICAgICAgICAgICAgICAgQ2VsbCA9IFRhYmxlLkNlbGw7XG4gICAgICAgICAgICB2YXIgcGVyc29uID0gdGhpcy5wcm9wcy5wZXJzb247XG5cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUm93LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2MlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uLmlkXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uLm5hbWVcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIENlbGwsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2NVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwZXJzb24uam9iXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjZcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uLm1lZGlhXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uLmVtYWlsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgIXBlcnNvbi5pc0FwcHJvdmVkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29sb3I6ICdncmVlbicsIGJhc2ljOiB0cnVlLCBkaXNhYmxlZDogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY29sb3I6ICdncmVlbicsIGxvYWRpbmc6IHRoaXMuc3RhdGUudXBkYXRlbG9hZGluZywgYmFzaWM6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1VwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjZW50ZXJlZDogdHJ1ZSwgZGl2aWRlZDogdHJ1ZSwgY29sdW1uczogNiwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3NFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXM6ICdoNCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDc2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU1Qjc4XFx1ODY1RidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3N1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBzaXplOiAnbWluaScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0U3RhdGUoeyBpZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDc4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogODNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXM6ICdoNCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU1NDBEXFx1NUI1NydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24ubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHNpemU6ICdtaW5pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXM6ICdoNCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDkyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU4MDc3XFx1N0EzMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA5M1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24uam9iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgc2l6ZTogJ21pbmknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuam9iLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IGpvYjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDk0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXM6ICdoNCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1NzkzRVxcdTdGQTRcXHU1QTkyXFx1OUFENCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uLm1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgc2l6ZTogJ21pbmknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUubWVkaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgbWVkaWE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRleHRBbGlnbjogJ2NlbnRlcicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXM6ICdoNCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEwOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTA5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbi5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHNpemU6ICdtaW5pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTE1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3AnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTE2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBsb2FkaW5nOiB0aGlzLnN0YXRlLnVwZGF0ZWxvYWRpbmcsIG9uQ2xpY2s6IHRoaXMub25VcGRhdGUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDExN1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVXBkYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiAnY2xpY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvd2luZzogdHJ1ZSwgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBDZWxsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTI2XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBlcnNvbi5pc0FwcHJvdmVkID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29sb3I6ICd0ZWFsJywgYmFzaWM6IHRydWUsIGRpc2FibGVkOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FwcHJvdmVkJ1xuICAgICAgICAgICAgICAgICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29sb3I6ICdyZWQnLCBiYXNpYzogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTI4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdBcHByb3ZpbmcnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNChwcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBfcHJvcHMkcXVlcnksIHBlcnNvbiwgaWQsIGFkZHJlc3M7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3Byb3BzJHF1ZXJ5ID0gcHJvcHMucXVlcnksIHBlcnNvbiA9IF9wcm9wcyRxdWVyeS5wZXJzb24sIGlkID0gX3Byb3BzJHF1ZXJ5LmlkLCBhZGRyZXNzID0gX3Byb3BzJHF1ZXJ5LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KCdyZXR1cm4nLCB7IHBlcnNvbjogcGVyc29uLCBpZDogaWQsIGFkZHJlc3M6IGFkZHJlc3MgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNCwgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhfeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICB9KClcbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVxdWVzdFJvdztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdFJvdyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiaWQiLCJuYW1lIiwiam9iIiwibWVkaWEiLCJlbWFpbCIsInVwZGF0ZWxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblVwZGF0ZSIsIm1hcmsiLCJfY2FsbGVlMiIsImRlcGFydG1lbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwibWV0aG9kcyIsInVwZGF0ZVBlcnNvbiIsInNlbmQiLCJmcm9tIiwic3RvcCIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsImtleSIsInZhbHVlIiwiX3JlZjQiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiX3RoaXMzIiwiUm93IiwiQ2VsbCIsInBlcnNvbiIsImNyZWF0ZUVsZW1lbnQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImlzQXBwcm92ZWQiLCJjb2xvciIsImJhc2ljIiwiZGlzYWJsZWQiLCJ0cmlnZ2VyIiwibG9hZGluZyIsImNvbnRlbnQiLCJjZW50ZXJlZCIsImRpdmlkZWQiLCJjb2x1bW5zIiwiQ29sdW1uIiwidGV4dEFsaWduIiwiYXMiLCJzaXplIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInByaW1hcnkiLCJvbkNsaWNrIiwib24iLCJmbG93aW5nIiwiaG92ZXJhYmxlIiwiX3JlZjUiLCJfY2FsbGVlNCIsIl9wcm9wcyRxdWVyeSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBUEEsSUFBSUEsZUFBZSxxREFBbkI7OztBQVNBLElBQUlDLGFBQWEsVUFBVUMsVUFBVixFQUFzQjtBQUNuQyw0QkFBVUQsVUFBVixFQUFzQkMsVUFBdEI7O0FBRUEsYUFBU0QsVUFBVCxHQUFzQjtBQUNsQixZQUFJRSxJQUFKO0FBQUEsWUFDSUMsU0FBUyxJQURiOztBQUdBLFlBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsc0NBQWdCLElBQWhCLEVBQXNCTixVQUF0Qjs7QUFFQSxhQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDakZGLGlCQUFLRSxJQUFMLElBQWFKLFVBQVVJLElBQVYsQ0FBYjtBQUNIOztBQUVELGVBQU9OLFFBQVFGLFNBQVNDLFFBQVEseUNBQTJCLElBQTNCLEVBQWlDLENBQUNILE9BQU9GLFdBQVdhLFNBQVgsSUFBd0IsOEJBQXVCYixVQUF2QixDQUFoQyxFQUFvRWMsSUFBcEUsQ0FBeUVDLEtBQXpFLENBQStFYixJQUEvRSxFQUFxRixDQUFDLElBQUQsRUFBT2MsTUFBUCxDQUFjTixJQUFkLENBQXJGLENBQWpDLENBQVIsRUFBcUpMLEtBQTlKLEdBQXNLQSxNQUFNWSxLQUFOLEdBQWM7QUFDL0xDLGdCQUFJLEVBRDJMO0FB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