'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _department = require('../../ethereum/department');

var _department2 = _interopRequireDefault(_department);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _Editor = require('../../components/Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _ipfs = require('../../utils/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/littlewhite/NCUcoin/pages/manage/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            address: '',
            newperson: '',
            posthtml: '',
            post: '',
            errorMessage: '',
            errorvisible: true,
            loading: false
        }, _this.addPerson = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ errorvisible: true });
                                _this.setState({ loading: true, errorMessage: '' });
                                console.log((0, _typeof3.default)(_this.state.newperson));
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return _token2.default.methods.addMinter(_this.state.newperson).send({
                                    from: accounts[0]
                                });

                            case 10:

                                _routes.Router.pushRoute('/');
                                _context.next = 17;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorvisible: false });
                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onHTMLChange = function (html) {
            _this.setState({ posthtml: html.toHTML() });
            console.log(_this.state.posthtml.toString());
        }, _this.getipfsHash = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var buffer, ipfsResult, contentHash;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return Buffer.from(_this.state.posthtml.toString());

                        case 3:
                            buffer = _context2.sent;

                            console.log(_this.state.posthtml.toString());
                            // add file to ipfs
                            _context2.next = 7;
                            return _ipfs2.default.add(buffer);

                        case 7:
                            ipfsResult = _context2.sent;
                            contentHash = ipfsResult[0].hash;

                            console.log('ya');
                            console.log(contentHash);
                            _this.setState({ post: contentHash });
                            _context2.next = 17;
                            break;

                        case 14:
                            _context2.prev = 14;
                            _context2.t0 = _context2['catch'](0);

                            _this.setState({ errorMessage: _context2.t0.message });

                        case 17:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[0, 14]]);
        })), _this.addPost = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var department, _this$state, id, name, job, media, email, accounts;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();
                                _context3.next = 3;
                                return _this.getipfsHash();

                            case 3:
                                department = (0, _department2.default)(_this.props.address);
                                _this$state = _this.state, id = _this$state.id, name = _this$state.name, job = _this$state.job, media = _this$state.media, email = _this$state.email;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context3.prev = 6;
                                _context3.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context3.sent;
                                _context3.next = 12;
                                return department.methods.createPost(id, name, job, media, email).send({ from: accounts[0] });

                            case 12:

                                _routes.Router.pushRoute("/manage/index");
                                _context3.next = 18;
                                break;

                            case 15:
                                _context3.prev = 15;
                                _context3.t0 = _context3['catch'](6);

                                _this.setState({ errorMessage: _context3.t0.message });

                            case 18:

                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[6, 15]]);
            }));

            return function (_x2) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                var address;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _factory2.default.methods.tokenAddress().call();

                            case 2:
                                address = _context4.sent;

                                this.setState({ address: address });

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function componentDidMount() {
                return _ref5.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var _this3 = this;

            var items = this.props.campaigns.map(function (address, index) {

                return {
                    header: _this3.props.names[index],
                    description: _react2.default.createElement(_routes.Link, { route: '/manage/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    }, 'View Department')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.addPerson, loading: this.state.loading, floated: 'right', content: '\u65B0\u589E\u6821\u53CB', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.newperson,
                onChange: function onChange(event) {
                    return _this4.setState({ newperson: event.target.value });
                },
                fluid: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, hidden: this.state.errorvisible, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }), _react2.default.createElement('h4', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, 'Token Address ', this.state.address), _react2.default.createElement(_routes.Link, { route: '/departments/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: '\u65B0\u589E\u7CFB\u7D1A',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                var _this5 = this;

                var campaigns, names;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return _factory2.default.methods.getDeployedDepartments().call();

                            case 2:
                                campaigns = _context6.sent;
                                _context6.next = 5;
                                return _promise2.default.all(campaigns.map(function () {
                                    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(address) {
                                        var department, summary;
                                        return _regenerator2.default.wrap(function _callee5$(_context5) {
                                            while (1) {
                                                switch (_context5.prev = _context5.next) {
                                                    case 0:
                                                        department = (0, _department2.default)(address);
                                                        _context5.next = 3;
                                                        return department.methods.getSummary().call();

                                                    case 3:
                                                        summary = _context5.sent;
                                                        return _context5.abrupt('return', summary[0]);

                                                    case 5:
                                                    case 'end':
                                                        return _context5.stop();
                                                }
                                            }
                                        }, _callee5, _this5);
                                    }));

                                    return function (_x3) {
                                        return _ref7.apply(this, arguments);
                                    };
                                }()));

                            case 5:
                                names = _context6.sent;
                                return _context6.abrupt('return', { campaigns: campaigns, names: names });

                            case 7:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getInitialProps() {
                return _ref6.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiYWRkcmVzcyIsIm5ld3BlcnNvbiIsInBvc3RodG1sIiwicG9zdCIsImVycm9yTWVzc2FnZSIsImVycm9ydmlzaWJsZSIsImxvYWRpbmciLCJhZGRQZXJzb24iLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwiZXZlbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJhZGRNaW50ZXIiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsIm9uSFRNTENoYW5nZSIsImh0bWwiLCJ0b0hUTUwiLCJ0b1N0cmluZyIsImdldGlwZnNIYXNoIiwiX2NhbGxlZTIiLCJidWZmZXIiLCJpcGZzUmVzdWx0IiwiY29udGVudEhhc2giLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJCdWZmZXIiLCJhZGQiLCJoYXNoIiwiYWRkUG9zdCIsIl9yZWY0IiwiX2NhbGxlZTMiLCJkZXBhcnRtZW50IiwiX3RoaXMkc3RhdGUiLCJpZCIsIm5hbWUiLCJqb2IiLCJtZWRpYSIsImVtYWlsIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicHJvcHMiLCJjcmVhdGVQb3N0IiwiX3gyIiwia2V5IiwidmFsdWUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwidG9rZW5BZGRyZXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJfdGhpczMiLCJpdGVtcyIsImNhbXBhaWducyIsIm1hcCIsImluZGV4IiwiaGVhZGVyIiwibmFtZXMiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsIl90aGlzNCIsIm9uQ2xpY2siLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJlcnJvciIsImhpZGRlbiIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfdGhpczUiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJnZXREZXBsb3llZERlcGFydG1lbnRzIiwiYWxsIiwiX3JlZjciLCJfY2FsbGVlNSIsInN1bW1hcnkiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZXRTdW1tYXJ5IiwiYWJydXB0IiwiX3gzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFYQSxJQUFJQSxlQUFlLHdEQUFuQjs7O0FBYUEsSUFBSUMsZ0JBQWdCLFVBQVVDLFVBQVYsRUFBc0I7QUFDdEMsNEJBQVVELGFBQVYsRUFBeUJDLFVBQXpCOztBQUVBLGFBQVNELGFBQVQsR0FBeUI7QUFDckIsWUFBSUUsSUFBSjtBQUFBLFlBQ0lDLFNBQVMsSUFEYjs7QUFHQSxZQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLHNDQUFnQixJQUFoQixFQUFzQk4sYUFBdEI7O0FBRUEsYUFBSyxJQUFJTyxPQUFPQyxVQUFV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VUUsVUFBVXJGLElBQXBCO0FBQ0EsK0RBQU9xRixVQUFVRSxNQUFWLENBQWlCLFFBQWpCLEVBQTJCSixRQUFRLENBQVIsQ0FBM0IsQ0FBUDs7QUFFSix5REFBSyxDQUFMO0FBQ0EseURBQUssS0FBTDtBQUNJLCtEQUFPRSxVQUFVN0UsSUFBVixFQUFQO0FBWlI7QUFjSDtBQUNKLHlDQWpCTSxFQWlCSjBFLFFBakJJLEVBaUJNTixNQWpCTixDQUFQO0FBa0JILHFDQXBCMkMsQ0FBaEMsQ0FBWjs7QUFzQkEsMkNBQU8sVUFBVVksR0FBVixFQUFlO0FBQ2xCLCtDQUFPUCxNQUFNNUcsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDSCxxQ0FGRDtBQUdILGlDQTFCaUMsRUFBZCxDQUFiLENBQVA7O0FBNEJKLGlDQUFLLENBQUw7QUFDSXdGLHdDQUFRd0IsVUFBVTlFLElBQWxCO0FBQ0EsdUNBQU84RSxVQUFVUyxNQUFWLENBQWlCLFFBQWpCLEVBQTJCLEVBQUVyQyxXQUFXQSxTQUFiLEVBQXdCSSxPQUFPQSxLQUEvQixFQUEzQixDQUFQOztBQUVKLGlDQUFLLENBQUw7QUFDQSxpQ0FBSyxLQUFMO0FBQ0ksdUNBQU93QixVQUFVdEUsSUFBVixFQUFQO0FBMUNSO0FBNENIO0FBQ0osaUJBL0NNLEVBK0NKbUUsUUEvQ0ksRUErQ00sSUEvQ04sQ0FBUDtBQWdESCxhQXBEMkMsQ0FBaEMsQ0FBWjs7QUFzREEscUJBQVNjLGVBQVQsR0FBMkI7QUFDdkIsdUJBQU9mLE1BQU1yRyxLQUFOLENBQVksSUFBWixFQUFrQlAsU0FBbEIsQ0FBUDtBQUNIOztBQUVELG1CQUFPMkgsZUFBUDtBQUNILFNBNURNO0FBRk4sS0FBRCxDQTdKSjs7QUE4TkEsV0FBT25JLGFBQVA7QUFDSCxDQTVZbUIsa0JBQXBCOztrQkE4WWVBLGEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfUHJvbWlzZSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZSc7XG5pbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvVXNlcnMvbGl0dGxld2hpdGUvTkNVY29pbi9wYWdlcy9tYW5hZ2UvaW5kZXguanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgRGVwYXJ0bWVudCBmcm9tICcuLi8uLi9ldGhlcmV1bS9kZXBhcnRtZW50JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHRva2VuIGZyb20gJy4uLy4uL2V0aGVyZXVtL3Rva2VuJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRWRpdG9yJztcbmltcG9ydCBpcGZzIGZyb20gJy4uLy4uL3V0aWxzL2lwZnMnO1xuXG52YXIgQ2FtcGFpZ25JbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENhbXBhaWduSW5kZXgsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2FtcGFpZ25JbmRleCgpIHtcbiAgICAgICAgdmFyIF9yZWYsXG4gICAgICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhbXBhaWduSW5kZXgpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENhbXBhaWduSW5kZXguX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQ2FtcGFpZ25JbmRleCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICBuZXdwZXJzb246ICcnLFxuICAgICAgICAgICAgcG9zdGh0bWw6ICcnLFxuICAgICAgICAgICAgcG9zdDogJycsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgZXJyb3J2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSwgX3RoaXMuYWRkUGVyc29uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBhY2NvdW50cztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9ydmlzaWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdHlwZW9mKF90aGlzLnN0YXRlLm5ld3BlcnNvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuLm1ldGhvZHMuYWRkTWludGVyKF90aGlzLnN0YXRlLm5ld3BlcnNvbikuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3J2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzQsIDEzXV0pO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCksIF90aGlzLm9uSFRNTENoYW5nZSA9IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHBvc3RodG1sOiBodG1sLnRvSFRNTCgpIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coX3RoaXMuc3RhdGUucG9zdGh0bWwudG9TdHJpbmcoKSk7XG4gICAgICAgIH0sIF90aGlzLmdldGlwZnNIYXNoID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgICAgICB2YXIgYnVmZmVyLCBpcGZzUmVzdWx0LCBjb250ZW50SGFzaDtcbiAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKF90aGlzLnN0YXRlLnBvc3RodG1sLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gX2NvbnRleHQyLnNlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5zdGF0ZS5wb3N0aHRtbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgZmlsZSB0byBpcGZzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpcGZzLmFkZChidWZmZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXBmc1Jlc3VsdCA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIYXNoID0gaXBmc1Jlc3VsdFswXS5oYXNoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3lhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudEhhc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgcG9zdDogY29udGVudEhhc2ggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDE0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi50MCA9IF9jb250ZXh0MlsnY2F0Y2gnXSgwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBfY29udGV4dDIudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBfY2FsbGVlMiwgX3RoaXMyLCBbWzAsIDE0XV0pO1xuICAgICAgICB9KSksIF90aGlzLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXBhcnRtZW50LCBfdGhpcyRzdGF0ZSwgaWQsIG5hbWUsIGpvYiwgbWVkaWEsIGVtYWlsLCBhY2NvdW50cztcblxuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRpcGZzSGFzaCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50ID0gRGVwYXJ0bWVudChfdGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSwgaWQgPSBfdGhpcyRzdGF0ZS5pZCwgbmFtZSA9IF90aGlzJHN0YXRlLm5hbWUsIGpvYiA9IF90aGlzJHN0YXRlLmpvYiwgbWVkaWEgPSBfdGhpcyRzdGF0ZS5tZWRpYSwgZW1haWwgPSBfdGhpcyRzdGF0ZS5lbWFpbDtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDMucHJldiA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQzLnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXBhcnRtZW50Lm1ldGhvZHMuY3JlYXRlUG9zdChpZCwgbmFtZSwgam9iLCBtZWRpYSwgZW1haWwpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShcIi9tYW5hZ2UvaW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLnByZXYgPSAxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLnQwID0gX2NvbnRleHQzWydjYXRjaCddKDYpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBfY29udGV4dDMudDAubWVzc2FnZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMywgX3RoaXMyLCBbWzYsIDE1XV0pO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSgpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2FtcGFpZ25JbmRleCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWY1ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhY3RvcnkubWV0aG9kcy50b2tlbkFkZHJlc3MoKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBfY29udGV4dDQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzczogYWRkcmVzcyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU0LCB0aGlzKTtcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnREaWRNb3VudDtcbiAgICAgICAgfSgpXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJDYW1wYWlnbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChmdW5jdGlvbiAoYWRkcmVzcywgaW5kZXgpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogX3RoaXMzLnByb3BzLm5hbWVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyByb3V0ZTogJy9tYW5hZ2UvJyArIGFkZHJlc3MsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVmlldyBEZXBhcnRtZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogaXRlbXMsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjhcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgb25DbGljazogdGhpcy5hZGRQZXJzb24sIGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZywgZmxvYXRlZDogJ3JpZ2h0JywgY29udGVudDogJ1xcdTY1QjBcXHU1ODlFXFx1NjgyMVxcdTUzQ0InLCBpY29uOiAnYWRkIGNpcmNsZScsIHByaW1hcnk6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMjlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdmFsdWU6IHRoaXMuc3RhdGUubmV3cGVyc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5zZXRTdGF0ZSh7IG5ld3BlcnNvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoaWRkZW46IHRoaXMuc3RhdGUuZXJyb3J2aXNpYmxlLCBoZWFkZXI6ICdPb3BzIScsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTM0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG9rZW4gQWRkcmVzcyAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyByb3V0ZTogJy9kZXBhcnRtZW50cy9uZXcnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFx1NjVCMFxcdTU4OUVcXHU3Q0ZCXFx1N0QxQScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdhZGQgY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FtcGFpZ25zKClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNigpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBjYW1wYWlnbnMsIG5hbWVzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWREZXBhcnRtZW50cygpLmNhbGwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FtcGFpZ25zID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLmFsbChjYW1wYWlnbnMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmNyA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1KGFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVwYXJ0bWVudCwgc3VtbWFyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudCA9IERlcGFydG1lbnQoYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlcGFydG1lbnQubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5ID0gX2NvbnRleHQ1LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KCdyZXR1cm4nLCBzdW1tYXJ5WzBdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU1LCBfdGhpczUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmNy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KCdyZXR1cm4nLCB7IGNhbXBhaWduczogY2FtcGFpZ25zLCBuYW1lczogbmFtZXMgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNiwgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICAgICAgfSgpXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbXBhaWduSW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiYWRkcmVzcyIsIm5ld3BlcnNvbiIsInBvc3RodG1sIiwicG9zdCIsImVycm9yTWVzc2FnZSIsImVycm9ydmlzaWJsZSIsImxvYWRpbmciLCJhZGRQZXJzb24iLCJfcmVmMiIsIm1hcmsiLCJfY2FsbGVlIiwiZXZlbnQiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImV0aCIsImdldEFjY291bnRzIiwic2VudCIsIm1ldGhvZHMiLCJhZGRNaW50ZXIiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsInQwIiwibWVzc2FnZSIsInN0b3AiLCJfeCIsIm9uSFRNTENoYW5nZSIsImh0bWwiLCJ0b0hUTUwiLCJ0b1N0cmluZyIsImdldGlwZnNIYXNoIiwiX2NhbGxlZTIiLCJidWZmZXIiLCJpcGZzUmVzdWx0IiwiY29udGVudEhhc2giLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJCdWZmZXIiLCJhZGQiLCJoYXNoIiwiYWRkUG9zdCIsIl9yZWY0IiwiX2NhbGxlZTMiLCJkZXBhcnRtZW50IiwiX3RoaXMkc3RhdGUiLCJpZCIsIm5hbWUiLCJqb2IiLCJtZWRpYSIsImVtYWlsIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicHJvcHMiLCJjcmVhdGVQb3N0IiwiX3gyIiwia2V5IiwidmFsdWUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwidG9rZW5BZGRyZXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXJDYW1wYWlnbnMiLCJfdGhpczMiLCJpdGVtcyIsImNhbXBhaWducyIsIm1hcCIsImluZGV4IiwiaGVhZGVyIiwibmFtZXMiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsIl90aGlzNCIsIm9uQ2xpY2siLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJlcnJvciIsImhpZGRlbiIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfdGhpczUiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJnZXREZXBsb3llZERlcGFydG1lbnRzIiwiYWxsIiwiX3JlZjciLCJfY2FsbGVlNSIsInN1bW1hcnkiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZXRTdW1tYXJ5IiwiYWJydXB0IiwiX3gzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7Ozs7QUFYQSxJQUFJQSxlQUFlLHdEQUFuQjs7O0FBYUEsSUFBSUMsZ0JBQWdCLFVBQVVDLFVBQVYsRUFBc0I7QUFDdEMsNEJBQVVELGFBQVYsRUFBeUJDLFVBQXpCOztBQUVBLGFBQVNELGFBQVQsR0FBeUI7QUFDckIsWUFBSUUsSUFBSjtBQUFBLFlBQ0lDLFNBQVMsSUFEYjs7QUFHQSxZQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLHNDQUFnQixJQUFoQixFQUFzQk4sYUFBdEI7O0FBRUEsYUFBSyxJQUFJTyxPQUFPQyxVQUFV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