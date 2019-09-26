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

var _measure = require('../../utils/measure');

var _measure2 = _interopRequireDefault(_measure);

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
            item: null,
            value: '',
            departmentName: '',
            personCount: 0,
            manager: '',
            persons: [],
            posts: [],
            balance: 0,
            id_level: 0,
            name_level: 0,
            job_level: 0,
            media_level: 0,
            email_level: 0,

            errorMessage: '',
            errorvisible: true,
            refreshing: true,
            loading: false
        }, _this.setPostitems = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var items;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            items = [];
                            _context2.next = 3;
                            return (0, _measure2.default)('get all posts content from IPFS', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, post, descriptionHTML;

                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _iteratorNormalCompletion = true;
                                                _didIteratorError = false;
                                                _iteratorError = undefined;
                                                _context.prev = 3;
                                                _iterator = (0, _getIterator3.default)(_this.state.posts);

                                            case 5:
                                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                                    _context.next = 15;
                                                    break;
                                                }

                                                post = _step.value;

                                                console.log(post.hash);
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
                                                            lineNumber: 87
                                                        }
                                                    }),
                                                    fluid: true,
                                                    extra: _react2.default.createElement('span', {
                                                        __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 92
                                                        }
                                                    }, post.time),
                                                    style: { overflowX: 'scroll' }
                                                });

                                            case 12:
                                                _iteratorNormalCompletion = true;
                                                _context.next = 5;
                                                break;

                                            case 15:
                                                _context.next = 21;
                                                break;

                                            case 17:
                                                _context.prev = 17;
                                                _context.t0 = _context['catch'](3);
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
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this2, [[3, 17, 21, 29], [22,, 24, 28]]);
                            })));

                        case 3:

                            console.log('items', items);
                            _this.setState({ items: items, refreshing: false });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _this.Contribute = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
                var department, accounts;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                console.log("ya");
                                event.preventDefault();

                                department = (0, _department2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });

                                _context4.prev = 4;
                                _context4.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context4.sent;
                                _context4.next = 10;
                                return (0, _measure2.default)('contribute!', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    _context3.next = 2;
                                                    return department.methods.contribute().send({
                                                        from: accounts[0],
                                                        value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                                    });

                                                case 2:
                                                case 'end':
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _callee3, _this2);
                                })));

                            case 10:

                                _routes.Router.pushRoute('/departments/' + _this.props.address);
                                _context4.next = 17;
                                break;

                            case 13:
                                _context4.prev = 13;
                                _context4.t0 = _context4['catch'](4);

                                _this.setState({ errorMessage: _context4.t0.message });
                                _this.setState({ errorvisible: false });

                            case 17:

                                _this.setState({ loading: false, value: '' });

                            case 18:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'componentDidMount',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
                var _this3 = this;

                var department, summary, persons, posts;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                department = (0, _department2.default)(this.props.address);
                                _context6.next = 3;
                                return (0, _measure2.default)('get Department Summary', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
                                    return _regenerator2.default.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    _context5.next = 2;
                                                    return department.methods.getSummary().call();

                                                case 2:
                                                    return _context5.abrupt('return', _context5.sent);

                                                case 3:
                                                case 'end':
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _callee5, _this3);
                                })));

                            case 3:
                                summary = _context6.sent;
                                _context6.next = 6;
                                return _promise2.default.all(Array(parseInt(summary[7])).fill().map(function (element, index) {
                                    return department.methods.persons(index).call();
                                }));

                            case 6:
                                persons = _context6.sent;
                                _context6.next = 9;
                                return _promise2.default.all(Array(parseInt(summary[8])).fill().map(function (element, index) {
                                    return department.methods.posts(index).call();
                                }));

                            case 9:
                                posts = _context6.sent;

                                this.setState({
                                    departmentName: summary[0],
                                    personCount: summary[7],
                                    manager: summary[9],
                                    persons: persons,
                                    posts: posts,
                                    balance: _web2.default.utils.fromWei(summary[1], 'ether'),
                                    id_level: summary[2],
                                    name_level: summary[3],
                                    job_level: summary[4],
                                    media_level: summary[5],
                                    email_level: summary[6]
                                });
                                this.setPostitems();

                            case 12:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function componentDidMount() {
                return _ref6.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'renderPost',
        value: function renderPost() {

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: this.state.items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            });
        }
    }, {
        key: 'renderRow',
        value: function renderRow() {
            var _this4 = this;

            return this.state.persons.map(function (person, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    id: index,
                    key: index,
                    person: person,
                    address: _this4.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 137
                    }
                });
            });
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var _state = this.state,
                manager = _state.manager,
                departmentName = _state.departmentName,
                personCount = _state.personCount;

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

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, itemsPerRow: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, 'Department Show'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, { doubling: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { color: 'red', header: this.state.id_level, meta: '\u5B78\u865F\u7B49\u7D1A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { color: 'orange', header: this.state.email_level, meta: 'email\u7B49\u7D1A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, { doubling: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { color: 'red', header: this.state.name_level, meta: '\u59D3\u540D\u7B49\u7D1A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { color: 'orange', header: this.state.media_level, meta: '\u793E\u7FA4\u5A92\u9AD4\u7B49\u7D1A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, { doubling: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { color: 'red', header: this.state.job_level, meta: '\u8077\u7A31\u7B49\u7D1A', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { color: 'orange', header: this.state.balance, meta: '\u6821\u53CB\u6350\u737B(eth)', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            })))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.refreshing, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            }, 'Loading Posts')), this.renderPost()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }, _react2.default.createElement(_semanticUiReact.Card, { color: 'yellow', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement(_semanticUiReact.CardContent, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, '\u8D0A\u52A9\u7CFB\u6240'), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            }, '\u56DE\u994B\u4F60\u6700\u611B\u7684\u6BCD\u6821')), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { size: 'mini', type: 'text', placeholder: 'Put...',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this5.setState({ value: event.target.value });
                },
                action: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, _react2.default.createElement('input', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }), _react2.default.createElement(_semanticUiReact.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            }, 'eth'), _react2.default.createElement(_semanticUiReact.Button, { size: 'mini', type: 'submit', primary: true, onClick: this.Contribute, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                }
            }, 'Contribute!')), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', hidden: this.state.errorvisible, content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }, _react2.default.createElement(_routes.Link, { route: '/departments/' + this.props.address + '/persons/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, 'New Person!')))))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, '\u5B78\u865F'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }, '\u540D\u5B57'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, '\u8077\u7A31'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, '\u793E\u7FA4\u5A92\u9AD4'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, 'Email'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            }, 'Update'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 260
                }
            }, 'Approve'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                }
            }, this.renderRow())));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(props) {
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.abrupt('return', { address: props.query.address });

                            case 1:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function getInitialProps(_x2) {
                return _ref8.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9yZWYiLCJfdGhpczIiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX19wcm90b19fIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJpdGVtIiwidmFsdWUiLCJkZXBhcnRtZW50TmFtZSIsInBlcnNvbkNvdW50IiwibWFuYWdlciIsInBlcnNvbnMiLCJwb3N0cyIsImJhbGFuY2UiLCJpZF9sZXZlbCIsIm5hbWVfbGV2ZWwiLCJqb2JfbGV2ZWwiLCJtZWRpYV9sZXZlbCIsImVtYWlsX2xldmVsIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3J2aXNpYmxlIiwicmVmcmVzaGluZyIsImxvYWRpbmciLCJzZXRQb3N0aXRlbXMiLCJtYXJrIiwiX2NhbGxlZTIiLCJpdGVtcyIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsIl9jYWxsZWUiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvciIsIl9zdGVwIiwicG9zdCIsImRlc2NyaXB0aW9uSFRNTCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ1bmRlZmluZWQiLCJkb25lIiwiY29uc29sZSIsImxvZyIsImhhc2giLCJjYXQiLCJzZW50IiwicHVzaCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlRWxlbWVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidG9TdHJpbmciLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImZsdWlkIiwiZXh0cmEiLCJ0aW1lIiwic3R5bGUiLCJvdmVyZmxvd1giLCJ0MCIsInJldHVybiIsImZpbmlzaCIsInN0b3AiLCJzZXRTdGF0ZSIsIkNvbnRyaWJ1dGUiLCJfcmVmNCIsIl9jYWxsZWU0IiwiZXZlbnQiLCJkZXBhcnRtZW50IiwiYWNjb3VudHMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJfeCIsImtleSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfdGhpczMiLCJzdW1tYXJ5IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZXRTdW1tYXJ5IiwiYWJydXB0IiwiYWxsIiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiZnJvbVdlaSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyUG9zdCIsIkdyb3VwIiwicmVuZGVyUm93IiwiX3RoaXM0IiwicGVyc29uIiwiaWQiLCJyZW5kZXJDYXJkcyIsIl9zdGF0ZSIsIm1ldGEiLCJvdmVyZmxvd1dyYXAiLCJpdGVtc1BlclJvdyIsInJlbmRlciIsIl90aGlzNSIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiQ29sdW1uIiwid2lkdGgiLCJkb3VibGluZyIsImNvbG9yIiwiYWN0aXZlIiwiaW52ZXJ0ZWQiLCJNZXRhIiwiQ29udGVudCIsInNpemUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsImFjdGlvbiIsInByaW1hcnkiLCJvbkNsaWNrIiwiZXJyb3IiLCJoaWRkZW4iLCJjb250ZW50Iiwicm91dGUiLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwicXVlcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJfeDIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFYQSxJQUFJQSxlQUFlLDREQUFuQjtBQU1BOzs7QUFPQSxJQUFJQyxlQUFlLFVBQVVDLFVBQVYsRUFBc0I7QUFDckMsNEJBQVVELFlBQVYsRUFBd0JDLFVBQXhCOztBQUVBLGFBQVNELFlBQVQsR0FBd0I7QUFDcEIsWUFBSUUsSUFBSjtBQUFBLFlBQ0lDLFNBQVMsSUFEYjs7QUFHQSxZQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLHNDQUFnQixJQUFoQixFQUFzQk4sWUFBdEI7O0FBRUEsYUFBSyxJQUFJTyxPQUFPQyxVQUFVQyxNQUFyQixFQUE2QkMsT0FBT0MsTUFBTUosSUFBTixDQUFwQyxFQUFpREssT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0wsSUFBdkUsRUFBNkVLLE1BQTdFLEVBQXFGO0FBQ2pGRixpQkFBS0UsSUFBTCxJQUFhSixVQUFVSSxJQUFWLENBQWI7QUFDSDs7QUFFRCxlQUFPTixRQUFRRixTQUFTQyxRQUFRLHlDQUEyQixJQUEzQixFQUFpQyxDQUFDSCxPQUFPRixhQUFhYSxTQUFiLElBQTBCLDhCQUF1QmIsWUFBdkIsQ0FBbEMsRUFBd0VjLElBQXhFLENBQTZFQyxLQUE3RSxDQUFtRmIsSUFBbkYsRUFBeUYsQ0FBQyxJQUFELEVBQU9jLE1BQVAsQ0FBY04sSUFBZCxDQUF6RixDQUFqQyxDQUFSLEVBQXlKTCxLQUFsSyxHQUEwS0EsTUFBTVksS0FBTixHQUFjO0FBQ25NQyxrQkFBTSxJQUQ2TDtBQUVuTUMsbUJBQU8sRUFGNEw7QUFHbk1DLDRCQUFnQixFQUhtTDtBQUluTUMseUJBQWEsQ0FKc0w7QUFLbk1DLHFCQUFTLEVBTDBMO0FBTW5NQyxxQkFBUyxFQU4wTDtBQU9uTUMsbUJBQU8sRUFQNEw7QUFRbk1DLHFCQUFTLENBUjBMO0FBU25NQyxzQkFBVSxDQVR5TDtBQVVuTUMsd0JBQVksQ0FWdUw7QUFXbk1DLHVCQUFXLENBWHdMO0FBWW5NQyx5QkFBYSxDQVpzTDtBQWFuTUMseUJBQWEsQ0Fic0w7O0FBZW5NQywwQkFBYyxFQWZxTDtBQWdCbk1DLDBCQUFjLElBaEJxTDtBQWlCbk1DLHdCQUFZLElBakJ1TDtBQWtCbk1DLHFCQUFTO0FBbEIwTCxTQUF4TCxFQW1CWjdCLE1BQU04QixZQUFOLEdBQXFCLGlDQUFtQixhQUFhLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU0MsUUFBVCxHQUFvQjtBQUNqRyxnQkFBSUMsS0FBSjtBQUNBLG1CQUFPLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFDMUQsdUJBQU8sQ0FBUCxFQUFVO0FBQ04sNEJBQVFBLFVBQVVDLElBQVYsR0FBaUJELFVBQVVFLElBQW5DO0FBQ0ksNkJBQUssQ0FBTDtBQUNJTCxvQ0FBUSxFQUFSO0FBQ0FHLHNDQUFVRSxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsbUNBQU8sdUJBQVEsaUNBQVIsRUFBMkMsaUNBQW1CLGFBQWEsc0JBQW9CUCxJQUFwQixDQUF5QixTQUFTUSxPQUFULEdBQW1CO0FBQzFILG9DQUFJQyx5QkFBSixFQUErQkMsaUJBQS9CLEVBQWtEQyxjQUFsRCxFQUFrRUMsU0FBbEUsRUFBNkVDLEtBQTdFLEVBQW9GQyxJQUFwRixFQUEwRkMsZUFBMUY7O0FBRUEsdUNBQU8sc0JBQW9CWixJQUFwQixDQUF5QixTQUFTYSxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4RCwyQ0FBTyxDQUFQLEVBQVU7QUFDTixnREFBUUEsU0FBU1gsSUFBVCxHQUFnQlcsU0FBU1YsSUFBakM7QUFDSSxpREFBSyxDQUFMO0FBQ0lFLDRFQUE0QixJQUE1QjtBQUNBQyxvRUFBb0IsS0FBcEI7QUFDQUMsaUVBQWlCTyxTQUFqQjtBQUNBRCx5REFBU1gsSUFBVCxHQUFnQixDQUFoQjtBQUNBTSw0REFBWSwyQkFBYTNDLE1BQU1ZLEtBQU4sQ0FBWU8sS0FBekIsQ0FBWjs7QUFFSixpREFBSyxDQUFMO0FBQ0ksb0RBQUlxQiw0QkFBNEIsQ0FBQ0ksUUFBUUQsVUFBVUwsSUFBVixFQUFULEVBQTJCWSxJQUEzRCxFQUFpRTtBQUM3REYsNkRBQVNWLElBQVQsR0FBZ0IsRUFBaEI7QUFDQTtBQUNIOztBQUVETyx1REFBT0QsTUFBTTlCLEtBQWI7O0FBRUFxQyx3REFBUUMsR0FBUixDQUFZUCxLQUFLUSxJQUFqQjtBQUNBTCx5REFBU1YsSUFBVCxHQUFnQixFQUFoQjtBQUNBLHVEQUFPLGVBQUtnQixHQUFMLENBQVNULEtBQUtRLElBQWQsQ0FBUDs7QUFFSixpREFBSyxFQUFMO0FBQ0lQLGtFQUFrQkUsU0FBU08sSUFBM0I7O0FBRUF0QixzREFBTXVCLElBQU4sQ0FBVztBQUNQQyw0REFBUSxJQUREO0FBRVBDLGlFQUFhLGdCQUFNQyxhQUFOLENBQW9CLEtBQXBCLEVBQTJCO0FBQ3BDQyxpRkFBeUIsRUFBRUMsUUFBUWYsZ0JBQWdCZ0IsUUFBaEIsRUFBVixFQURXO0FBRXBDQyxrRUFBVTtBQUNOQyxzRUFBVXRFLFlBREo7QUFFTnVFLHdFQUFZO0FBRk47QUFGMEIscURBQTNCLENBRk47QUFTUEMsMkRBQU8sSUFUQTtBQVVQQywyREFBTyxnQkFBTVIsYUFBTixDQUNILE1BREcsRUFFSDtBQUNJSSxrRUFBVTtBQUNOQyxzRUFBVXRFLFlBREo7QUFFTnVFLHdFQUFZO0FBRk47QUFEZCxxREFGRyxFQVFIcEIsS0FBS3VCLElBUkYsQ0FWQTtBQW9CUEMsMkRBQU8sRUFBRUMsV0FBVyxRQUFiO0FBcEJBLGlEQUFYOztBQXVCSixpREFBSyxFQUFMO0FBQ0k5Qiw0RUFBNEIsSUFBNUI7QUFDQVEseURBQVNWLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQTs7QUFFSixpREFBSyxFQUFMO0FBQ0lVLHlEQUFTVixJQUFULEdBQWdCLEVBQWhCO0FBQ0E7O0FBRUosaURBQUssRUFBTDtBQUNJVSx5REFBU1gsSUFBVCxHQUFnQixFQUFoQjtBQUNBVyx5REFBU3VCLEVBQVQsR0FBY3ZCLFNBQVMsT0FBVCxFQUFrQixDQUFsQixDQUFkO0FBQ0FQLG9FQUFvQixJQUFwQjtBQUNBQyxpRUFBaUJNLFNBQVN1QixFQUExQjs7QUFFSixpREFBSyxFQUFMO0FBQ0l2Qix5REFBU1gsSUFBVCxHQUFnQixFQUFoQjtBQUNBVyx5REFBU1gsSUFBVCxHQUFnQixFQUFoQjs7QUFFQSxvREFBSSxDQUFDRyx5QkFBRCxJQUE4QkcsVUFBVTZCLE1BQTVDLEVBQW9EO0FBQ2hEN0IsOERBQVU2QixNQUFWO0FBQ0g7O0FBRUwsaURBQUssRUFBTDtBQUNJeEIseURBQVNYLElBQVQsR0FBZ0IsRUFBaEI7O0FBRUEsb0RBQUksQ0FBQ0ksaUJBQUwsRUFBd0I7QUFDcEJPLDZEQUFTVixJQUFULEdBQWdCLEVBQWhCO0FBQ0E7QUFDSDs7QUFFRCxzREFBTUksY0FBTjs7QUFFSixpREFBSyxFQUFMO0FBQ0ksdURBQU9NLFNBQVN5QixNQUFULENBQWdCLEVBQWhCLENBQVA7O0FBRUosaURBQUssRUFBTDtBQUNJLHVEQUFPekIsU0FBU3lCLE1BQVQsQ0FBZ0IsRUFBaEIsQ0FBUDs7QUFFSixpREFBSyxFQUFMO0FBQ0EsaURBQUssS0FBTDtBQUNJLHVEQUFPekIsU0FBUzBCLElBQVQsRUFBUDtBQXZGUjtBQXlGSDtBQUNKLGlDQTVGTSxFQTRGSm5DLE9BNUZJLEVBNEZLekMsTUE1RkwsRUE0RmEsQ0FBQyxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosQ0FBRCxFQUFrQixDQUFDLEVBQUQsR0FBTSxFQUFOLEVBQVUsRUFBVixDQUFsQixDQTVGYixDQUFQO0FBNkZILDZCQWhHaUYsQ0FBaEMsQ0FBM0MsQ0FBUDs7QUFrR0osNkJBQUssQ0FBTDs7QUFFSXFELG9DQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQm5CLEtBQXJCO0FBQ0FqQyxrQ0FBTTJFLFFBQU4sQ0FBZSxFQUFFMUMsT0FBT0EsS0FBVCxFQUFnQkwsWUFBWSxLQUE1QixFQUFmOztBQUVKLDZCQUFLLENBQUw7QUFDQSw2QkFBSyxLQUFMO0FBQ0ksbUNBQU9RLFVBQVVzQyxJQUFWLEVBQVA7QUE3R1I7QUErR0g7QUFDSixhQWxITSxFQWtISjFDLFFBbEhJLEVBa0hNbEMsTUFsSE4sQ0FBUDtBQW1ISCxTQXJIdUQsQ0FBaEMsQ0FuQlQsRUF3SVZFLE1BQU00RSxVQUFOLEdBQW1CLFlBQVk7QUFDaEMsZ0JBQUlDLFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9COUMsSUFBcEIsQ0FBeUIsU0FBUytDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQzFGLG9CQUFJQyxVQUFKLEVBQWdCQyxRQUFoQjtBQUNBLHVCQUFPLHNCQUFvQi9DLElBQXBCLENBQXlCLFNBQVNnRCxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUMxRCwyQkFBTyxDQUFQLEVBQVU7QUFDTixnQ0FBUUEsVUFBVTlDLElBQVYsR0FBaUI4QyxVQUFVN0MsSUFBbkM7QUFDSSxpQ0FBSyxDQUFMO0FBQ0lhLHdDQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBMkIsc0NBQU1LLGNBQU47O0FBRUFKLDZDQUFhLDBCQUFXaEYsTUFBTXFGLEtBQU4sQ0FBWUMsT0FBdkIsQ0FBYjs7QUFHQXRGLHNDQUFNMkUsUUFBTixDQUFlLEVBQUU5QyxTQUFTLElBQVgsRUFBaUJILGNBQWMsRUFBL0IsRUFBZjs7QUFFQXlELDBDQUFVOUMsSUFBVixHQUFpQixDQUFqQjtBQUNBOEMsMENBQVU3QyxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsdUNBQU8sY0FBS2lELEdBQUwsQ0FBU0MsV0FBVCxFQUFQOztBQUVKLGlDQUFLLENBQUw7QUFDSVAsMkNBQVdFLFVBQVU1QixJQUFyQjtBQUNBNEIsMENBQVU3QyxJQUFWLEdBQWlCLEVBQWpCO0FBQ0EsdUNBQU8sdUJBQVEsYUFBUixFQUF1QixpQ0FBbUIsYUFBYSxzQkFBb0JQLElBQXBCLENBQXlCLFNBQVMwRCxRQUFULEdBQW9CO0FBQ3ZHLDJDQUFPLHNCQUFvQnZELElBQXBCLENBQXlCLFNBQVN3RCxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUMxRCwrQ0FBTyxDQUFQLEVBQVU7QUFDTixvREFBUUEsVUFBVXRELElBQVYsR0FBaUJzRCxVQUFVckQsSUFBbkM7QUFDSSxxREFBSyxDQUFMO0FBQ0lxRCw4REFBVXJELElBQVYsR0FBaUIsQ0FBakI7QUFDQSwyREFBTzBDLFdBQVdZLE9BQVgsQ0FBbUJDLFVBQW5CLEdBQWdDQyxJQUFoQyxDQUFxQztBQUN4Q0MsOERBQU1kLFNBQVMsQ0FBVCxDQURrQztBQUV4Q25FLCtEQUFPLGNBQUtrRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJqRyxNQUFNWSxLQUFOLENBQVlFLEtBQTdCLEVBQW9DLE9BQXBDO0FBRmlDLHFEQUFyQyxDQUFQOztBQUtKLHFEQUFLLENBQUw7QUFDQSxxREFBSyxLQUFMO0FBQ0ksMkRBQU82RSxVQUFVakIsSUFBVixFQUFQO0FBVlI7QUFZSDtBQUNKLHFDQWZNLEVBZUplLFFBZkksRUFlTTNGLE1BZk4sQ0FBUDtBQWdCSCxpQ0FqQjZELENBQWhDLENBQXZCLENBQVA7O0FBbUJKLGlDQUFLLEVBQUw7O0FBRUksK0NBQU9vRyxTQUFQLENBQWlCLGtCQUFrQmxHLE1BQU1xRixLQUFOLENBQVlDLE9BQS9DO0FBQ0FILDBDQUFVN0MsSUFBVixHQUFpQixFQUFqQjtBQUNBOztBQUVKLGlDQUFLLEVBQUw7QUFDSTZDLDBDQUFVOUMsSUFBVixHQUFpQixFQUFqQjtBQUNBOEMsMENBQVVaLEVBQVYsR0FBZVksVUFBVSxPQUFWLEVBQW1CLENBQW5CLENBQWY7O0FBRUFuRixzQ0FBTTJFLFFBQU4sQ0FBZSxFQUFFakQsY0FBY3lELFVBQVVaLEVBQVYsQ0FBYTRCLE9BQTdCLEVBQWY7QUFDQW5HLHNDQUFNMkUsUUFBTixDQUFlLEVBQUVoRCxjQUFjLEtBQWhCLEVBQWY7O0FBRUosaUNBQUssRUFBTDs7QUFFSTNCLHNDQUFNMkUsUUFBTixDQUFlLEVBQUU5QyxTQUFTLEtBQVgsRUFBa0JmLE9BQU8sRUFBekIsRUFBZjs7QUFFSixpQ0FBSyxFQUFMO0FBQ0EsaUNBQUssS0FBTDtBQUNJLHVDQUFPcUUsVUFBVVQsSUFBVixFQUFQO0FBdkRSO0FBeURIO0FBQ0osaUJBNURNLEVBNERKSSxRQTVESSxFQTRETWhGLE1BNUROLEVBNERjLENBQUMsQ0FBQyxDQUFELEVBQUksRUFBSixDQUFELENBNURkLENBQVA7QUE2REgsYUEvRDJDLENBQWhDLENBQVo7O0FBaUVBLG1CQUFPLFVBQVVzRyxFQUFWLEVBQWM7QUFDakIsdUJBQU92QixNQUFNbkUsS0FBTixDQUFZLElBQVosRUFBa0JQLFNBQWxCLENBQVA7QUFDSCxhQUZEO0FBR0gsU0FyRXVCLEVBeElULEVBNk1WSixLQTdNRSxHQTZNTSx5Q0FBMkJDLEtBQTNCLEVBQWtDQyxJQUFsQyxDQTdNYjtBQThNSDs7QUFFRCwrQkFBYU4sWUFBYixFQUEyQixDQUFDO0FBQ3hCMEcsYUFBSyxtQkFEbUI7QUFFeEJ2RixlQUFPLFlBQVk7QUFDZixnQkFBSXdGLFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CdkUsSUFBcEIsQ0FBeUIsU0FBU3dFLFFBQVQsR0FBb0I7QUFDckYsb0JBQUlDLFNBQVMsSUFBYjs7QUFFQSxvQkFBSXhCLFVBQUosRUFBZ0J5QixPQUFoQixFQUF5QnZGLE9BQXpCLEVBQWtDQyxLQUFsQztBQUNBLHVCQUFPLHNCQUFvQmUsSUFBcEIsQ0FBeUIsU0FBU3dFLFNBQVQsQ0FBbUJDLFNBQW5CLEVBQThCO0FBQzFELDJCQUFPLENBQVAsRUFBVTtBQUNOLGdDQUFRQSxVQUFVdEUsSUFBVixHQUFpQnNFLFVBQVVyRSxJQUFuQztBQUNJLGlDQUFLLENBQUw7QUFDSTBDLDZDQUFhLDBCQUFXLEtBQUtLLEtBQUwsQ0FBV0MsT0FBdEIsQ0FBYjtBQUNBcUIsMENBQVVyRSxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsdUNBQU8sdUJBQVEsd0JBQVIsRUFBa0MsaUNBQW1CLGFBQWEsc0JBQW9CUCxJQUFwQixDQUF5QixTQUFTNkUsUUFBVCxHQUFvQjtBQUNsSCwyQ0FBTyxzQkFBb0IxRSxJQUFwQixDQUF5QixTQUFTMkUsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEI7QUFDMUQsK0NBQU8sQ0FBUCxFQUFVO0FBQ04sb0RBQVFBLFVBQVV6RSxJQUFWLEdBQWlCeUUsVUFBVXhFLElBQW5DO0FBQ0kscURBQUssQ0FBTDtBQUNJd0UsOERBQVV4RSxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsMkRBQU8wQyxXQUFXWSxPQUFYLENBQW1CbUIsVUFBbkIsR0FBZ0N0RyxJQUFoQyxFQUFQOztBQUVKLHFEQUFLLENBQUw7QUFDSSwyREFBT3FHLFVBQVVFLE1BQVYsQ0FBaUIsUUFBakIsRUFBMkJGLFVBQVV2RCxJQUFyQyxDQUFQOztBQUVKLHFEQUFLLENBQUw7QUFDQSxxREFBSyxLQUFMO0FBQ0ksMkRBQU91RCxVQUFVcEMsSUFBVixFQUFQO0FBVlI7QUFZSDtBQUNKLHFDQWZNLEVBZUprQyxRQWZJLEVBZU1KLE1BZk4sQ0FBUDtBQWdCSCxpQ0FqQndFLENBQWhDLENBQWxDLENBQVA7O0FBbUJKLGlDQUFLLENBQUw7QUFDSUMsMENBQVVFLFVBQVVwRCxJQUFwQjtBQUNBb0QsMENBQVVyRSxJQUFWLEdBQWlCLENBQWpCO0FBQ0EsdUNBQU8sa0JBQVMyRSxHQUFULENBQWEzRyxNQUFNNEcsU0FBU1QsUUFBUSxDQUFSLENBQVQsQ0FBTixFQUE0QlUsSUFBNUIsR0FBbUNDLEdBQW5DLENBQXVDLFVBQVVDLE9BQVYsRUFBbUJDLEtBQW5CLEVBQTBCO0FBQ2pGLDJDQUFPdEMsV0FBV1ksT0FBWCxDQUFtQjFFLE9BQW5CLENBQTJCb0csS0FBM0IsRUFBa0M3RyxJQUFsQyxFQUFQO0FBQ0gsaUNBRm1CLENBQWIsQ0FBUDs7QUFJSixpQ0FBSyxDQUFMO0FBQ0lTLDBDQUFVeUYsVUFBVXBELElBQXBCO0FBQ0FvRCwwQ0FBVXJFLElBQVYsR0FBaUIsQ0FBakI7QUFDQSx1Q0FBTyxrQkFBUzJFLEdBQVQsQ0FBYTNHLE1BQU00RyxTQUFTVCxRQUFRLENBQVIsQ0FBVCxDQUFOLEVBQTRCVSxJQUE1QixHQUFtQ0MsR0FBbkMsQ0FBdUMsVUFBVUMsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDakYsMkNBQU90QyxXQUFXWSxPQUFYLENBQW1CekUsS0FBbkIsQ0FBeUJtRyxLQUF6QixFQUFnQzdHLElBQWhDLEVBQVA7QUFDSCxpQ0FGbUIsQ0FBYixDQUFQOztBQUlKLGlDQUFLLENBQUw7QUFDSVUsd0NBQVF3RixVQUFVcEQsSUFBbEI7O0FBR0EscUNBQUtvQixRQUFMLENBQWM7QUFDVjVELG9EQUFnQjBGLFFBQVEsQ0FBUixDQUROO0FBRVZ6RixpREFBYXlGLFFBQVEsQ0FBUixDQUZIO0FBR1Z4Riw2Q0FBU3dGLFFBQVEsQ0FBUixDQUhDO0FBSVZ2Riw2Q0FBU0EsT0FKQztBQUtWQywyQ0FBT0EsS0FMRztBQU1WQyw2Q0FBUyxjQUFLNEUsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQmQsUUFBUSxDQUFSLENBQW5CLEVBQStCLE9BQS9CLENBTkM7QUFPVnBGLDhDQUFVb0YsUUFBUSxDQUFSLENBUEE7QUFRVm5GLGdEQUFZbUYsUUFBUSxDQUFSLENBUkY7QUFTVmxGLCtDQUFXa0YsUUFBUSxDQUFSLENBVEQ7QUFVVmpGLGlEQUFhaUYsUUFBUSxDQUFSLENBVkg7QUFXVmhGLGlEQUFhZ0YsUUFBUSxDQUFSO0FBWEgsaUNBQWQ7QUFhQSxxQ0FBSzNFLFlBQUw7O0FBRUosaUNBQUssRUFBTDtBQUNBLGlDQUFLLEtBQUw7QUFDSSx1Q0FBTzZFLFVBQVVqQyxJQUFWLEVBQVA7QUExRFI7QUE0REg7QUFDSixpQkEvRE0sRUErREo2QixRQS9ESSxFQStETSxJQS9ETixDQUFQO0FBZ0VILGFBcEUyQyxDQUFoQyxDQUFaOztBQXNFQSxxQkFBU2lCLGlCQUFULEdBQTZCO0FBQ3pCLHVCQUFPbEIsTUFBTTVGLEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU9xSCxpQkFBUDtBQUNILFNBNUVNO0FBRmlCLEtBQUQsRUErRXhCO0FBQ0NuQixhQUFLLFlBRE47QUFFQ3ZGLGVBQU8sU0FBUzJHLFVBQVQsR0FBc0I7O0FBRXpCLG1CQUFPLGdCQUFNOUQsYUFBTixDQUFvQixzQkFBSytELEtBQXpCLEVBQWdDLEVBQUV6RixPQUFPLEtBQUtyQixLQUFMLENBQVdxQixLQUFwQixFQUEyQjhCLFVBQVU7QUFDcEVDLDhCQUFVdEUsWUFEMEQ7QUFFcEV1RSxnQ0FBWTtBQUZ3RDtBQUFyQyxhQUFoQyxDQUFQO0FBS0g7QUFURixLQS9Fd0IsRUF5RnhCO0FBQ0NvQyxhQUFLLFdBRE47QUFFQ3ZGLGVBQU8sU0FBUzZHLFNBQVQsR0FBcUI7QUFDeEIsZ0JBQUlDLFNBQVMsSUFBYjs7QUFFQSxtQkFBTyxLQUFLaEgsS0FBTCxDQUFXTSxPQUFYLENBQW1Ca0csR0FBbkIsQ0FBdUIsVUFBVVMsTUFBVixFQUFrQlAsS0FBbEIsRUFBeUI7QUFDbkQsdUJBQU8sZ0JBQU0zRCxhQUFOLHVCQUFnQztBQUNuQ21FLHdCQUFJUixLQUQrQjtBQUVuQ2pCLHlCQUFLaUIsS0FGOEI7QUFHbkNPLDRCQUFRQSxNQUgyQjtBQUluQ3ZDLDZCQUFTc0MsT0FBT3ZDLEtBQVAsQ0FBYUMsT0FKYTtBQUtuQ3ZCLDhCQUFVO0FBQ05DLGtDQUFVdEUsWUFESjtBQUVOdUUsb0NBQVk7QUFGTjtBQUx5QixpQkFBaEMsQ0FBUDtBQVVILGFBWE0sQ0FBUDtBQVlIO0FBakJGLEtBekZ3QixFQTJHeEI7QUFDQ29DLGFBQUssYUFETjtBQUVDdkYsZUFBTyxTQUFTaUgsV0FBVCxHQUF1QjtBQUMxQixnQkFBSUMsU0FBUyxLQUFLcEgsS0FBbEI7QUFBQSxnQkFDSUssVUFBVStHLE9BQU8vRyxPQURyQjtBQUFBLGdCQUVJRixpQkFBaUJpSCxPQUFPakgsY0FGNUI7QUFBQSxnQkFHSUMsY0FBY2dILE9BQU9oSCxXQUh6Qjs7QUFNQSxnQkFBSWlCLFFBQVEsQ0FBQztBQUNUd0Isd0JBQVF4QyxPQURDO0FBRVRnSCxzQkFBTSxtQkFGRztBQUdUdkUsNkJBQWEsZ0RBSEo7QUFJVFcsdUJBQU8sRUFBRTZELGNBQWMsWUFBaEI7QUFKRSxhQUFELEVBS1Q7QUFDQ3pFLHdCQUFRMUMsY0FEVDtBQUVDa0gsc0JBQU0sSUFGUDtBQUdDdkUsNkJBQWE7QUFIZCxhQUxTLEVBU1Q7QUFDQ0Qsd0JBQVF6QyxXQURUO0FBRUNpSCxzQkFBTSxrQkFGUDtBQUdDdkUsNkJBQWE7QUFIZCxhQVRTLENBQVo7O0FBZUEsbUJBQU8sZ0JBQU1DLGFBQU4sQ0FBb0Isc0JBQUsrRCxLQUF6QixFQUFnQyxFQUFFekYsT0FBT0EsS0FBVCxFQUFnQmtHLGFBQWEsQ0FBN0IsRUFBZ0NwRSxVQUFVO0FBQ3pFQyw4QkFBVXRFLFlBRCtEO0FBRXpFdUUsZ0NBQVk7QUFGNkQ7QUFBMUMsYUFBaEMsQ0FBUDtBQUtIO0FBN0JGLEtBM0d3QixFQXlJeEI7QUFDQ29DLGFBQUssUUFETjtBQUVDdkYsZUFBTyxTQUFTc0gsTUFBVCxHQUFrQjtBQUNyQixnQkFBSUMsU0FBUyxJQUFiOztBQUVBLGdCQUFJQyxTQUFTLHVCQUFNQSxNQUFuQjtBQUFBLGdCQUNJQyxNQUFNLHVCQUFNQSxHQURoQjtBQUFBLGdCQUVJQyxhQUFhLHVCQUFNQSxVQUZ2QjtBQUFBLGdCQUdJQyxPQUFPLHVCQUFNQSxJQUhqQjs7QUFNQSxtQkFBTyxnQkFBTTlFLGFBQU4sbUJBRUg7QUFDSUksMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGRyxFQVFILGdCQUFNTixhQUFOLENBQ0ksSUFESixFQUVJO0FBQ0lJLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxpQkFSSixDQVJHLEVBa0JILGdCQUFNTixhQUFOLHdCQUVJO0FBQ0lJLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLNEUsR0FEVCxFQUVJO0FBQ0l4RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksZ0JBQU1OLGFBQU4sQ0FDSSxzQkFBSytFLE1BRFQsRUFFSSxFQUFFQyxPQUFPLEVBQVQsRUFBYTVFLFVBQVU7QUFDZkMsOEJBQVV0RSxZQURLO0FBRWZ1RSxnQ0FBWTtBQUZHO0FBQXZCLGFBRkosRUFPSSxLQUFLOEQsV0FBTCxFQVBKLENBUkosRUFpQkksZ0JBQU1wRSxhQUFOLENBQ0ksc0JBQUsrRSxNQURULEVBRUksRUFBRUMsT0FBTyxDQUFULEVBQVk1RSxVQUFVO0FBQ2RDLDhCQUFVdEUsWUFESTtBQUVkdUUsZ0NBQVk7QUFGRTtBQUF0QixhQUZKLEVBT0ksZ0JBQU1OLGFBQU4sQ0FDSSxzQkFBSytELEtBRFQsRUFFSSxFQUFFa0IsVUFBVSxJQUFaLEVBQWtCN0UsVUFBVTtBQUNwQkMsOEJBQVV0RSxZQURVO0FBRXBCdUUsZ0NBQVk7QUFGUTtBQUE1QixhQUZKLEVBT0ksZ0JBQU1OLGFBQU4sd0JBQTBCLEVBQUVrRixPQUFPLEtBQVQsRUFBZ0JwRixRQUFRLEtBQUs3QyxLQUFMLENBQVdTLFFBQW5DLEVBQTZDNEcsTUFBTSwwQkFBbkQsRUFBK0VsRSxVQUFVO0FBQzNHQyw4QkFBVXRFLFlBRGlHO0FBRTNHdUUsZ0NBQVk7QUFGK0Y7QUFBekYsYUFBMUIsQ0FQSixFQVlJLGdCQUFNTixhQUFOLHdCQUEwQixFQUFFa0YsT0FBTyxRQUFULEVBQW1CcEYsUUFBUSxLQUFLN0MsS0FBTCxDQUFXYSxXQUF0QyxFQUFtRHdHLE1BQU0sbUJBQXpELEVBQThFbEUsVUFBVTtBQUMxR0MsOEJBQVV0RSxZQURnRztBQUUxR3VFLGdDQUFZO0FBRjhGO0FBQXhGLGFBQTFCLENBWkosQ0FQSixDQWpCSixFQTJDSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLK0UsTUFEVCxFQUVJLEVBQUVDLE9BQU8sQ0FBVCxFQUFZNUUsVUFBVTtBQUNkQyw4QkFBVXRFLFlBREk7QUFFZHVFLGdDQUFZO0FBRkU7QUFBdEIsYUFGSixFQU9JLGdCQUFNTixhQUFOLENBQ0ksc0JBQUsrRCxLQURULEVBRUksRUFBRWtCLFVBQVUsSUFBWixFQUFrQjdFLFVBQVU7QUFDcEJDLDhCQUFVdEUsWUFEVTtBQUVwQnVFLGdDQUFZO0FBRlE7QUFBNUIsYUFGSixFQU9JLGdCQUFNTixhQUFOLHdCQUEwQixFQUFFa0YsT0FBTyxLQUFULEVBQWdCcEYsUUFBUSxLQUFLN0MsS0FBTCxDQUFXVSxVQUFuQyxFQUErQzJHLE1BQU0sMEJBQXJELEVBQWlGbEUsVUFBVTtBQUM3R0MsOEJBQVV0RSxZQURtRztBQUU3R3VFLGdDQUFZO0FBRmlHO0FBQTNGLGFBQTFCLENBUEosRUFZSSxnQkFBTU4sYUFBTix3QkFBMEIsRUFBRWtGLE9BQU8sUUFBVCxFQUFtQnBGLFFBQVEsS0FBSzdDLEtBQUwsQ0FBV1ksV0FBdEMsRUFBbUR5RyxNQUFNLHNDQUF6RCxFQUFpR2xFLFVBQVU7QUFDN0hDLDhCQUFVdEUsWUFEbUg7QUFFN0h1RSxnQ0FBWTtBQUZpSDtBQUEzRyxhQUExQixDQVpKLENBUEosQ0EzQ0osRUFxRUksZ0JBQU1OLGFBQU4sQ0FDSSxzQkFBSytFLE1BRFQsRUFFSSxFQUFFQyxPQUFPLENBQVQsRUFBWTVFLFVBQVU7QUFDZEMsOEJBQVV0RSxZQURJO0FBRWR1RSxnQ0FBWTtBQUZFO0FBQXRCLGFBRkosRUFPSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLK0QsS0FEVCxFQUVJLEVBQUVrQixVQUFVLElBQVosRUFBa0I3RSxVQUFVO0FBQ3BCQyw4QkFBVXRFLFlBRFU7QUFFcEJ1RSxnQ0FBWTtBQUZRO0FBQTVCLGFBRkosRUFPSSxnQkFBTU4sYUFBTix3QkFBMEIsRUFBRWtGLE9BQU8sS0FBVCxFQUFnQnBGLFFBQVEsS0FBSzdDLEtBQUwsQ0FBV1csU0FBbkMsRUFBOEMwRyxNQUFNLDBCQUFwRCxFQUFnRmxFLFVBQVU7QUFDNUdDLDhCQUFVdEUsWUFEa0c7QUFFNUd1RSxnQ0FBWTtBQUZnRztBQUExRixhQUExQixDQVBKLEVBWUksZ0JBQU1OLGFBQU4sd0JBQTBCLEVBQUVrRixPQUFPLFFBQVQsRUFBbUJwRixRQUFRLEtBQUs3QyxLQUFMLENBQVdRLE9BQXRDLEVBQStDNkcsTUFBTSwrQkFBckQsRUFBc0ZsRSxVQUFVO0FBQ2xIQyw4QkFBVXRFLFlBRHdHO0FBRWxIdUUsZ0NBQVk7QUFGc0c7QUFBaEcsYUFBMUIsQ0FaSixDQVBKLENBckVKLENBUkosRUF3R0ksZ0JBQU1OLGFBQU4sQ0FDSSxzQkFBSzRFLEdBRFQsRUFFSTtBQUNJeEUsMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLGdCQUFNTixhQUFOLENBQ0ksc0JBQUsrRSxNQURULEVBRUksRUFBRUMsT0FBTyxFQUFULEVBQWE1RSxVQUFVO0FBQ2ZDLDhCQUFVdEUsWUFESztBQUVmdUUsZ0NBQVk7QUFGRztBQUF2QixhQUZKLEVBT0ksZ0JBQU1OLGFBQU4sMEJBRUksRUFBRW1GLFFBQVEsS0FBS2xJLEtBQUwsQ0FBV2dCLFVBQXJCLEVBQWlDbUgsVUFBVSxJQUEzQyxFQUFpRGhGLFVBQVU7QUFDbkRDLDhCQUFVdEUsWUFEeUM7QUFFbkR1RSxnQ0FBWTtBQUZ1QztBQUEzRCxhQUZKLEVBT0ksZ0JBQU1OLGFBQU4sMEJBRUk7QUFDSUksMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLGVBUkosQ0FQSixDQVBKLEVBeUJJLEtBQUt3RCxVQUFMLEVBekJKLENBUkosRUFtQ0ksZ0JBQU05RCxhQUFOLENBQ0ksc0JBQUsrRSxNQURULEVBRUksRUFBRUMsT0FBTyxDQUFULEVBQVk1RSxVQUFVO0FBQ2RDLDhCQUFVdEUsWUFESTtBQUVkdUUsZ0NBQVk7QUFGRTtBQUF0QixhQUZKLEVBT0ksZ0JBQU1OLGFBQU4sd0JBRUksRUFBRWtGLE9BQU8sUUFBVCxFQUFtQjlFLFVBQVU7QUFDckJDLDhCQUFVdEUsWUFEVztBQUVyQnVFLGdDQUFZO0FBRlM7QUFBN0IsYUFGSixFQU9JLGdCQUFNTixhQUFOLCtCQUVJO0FBQ0lJLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLMkUsTUFEVCxFQUVJO0FBQ0l2RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksMEJBUkosQ0FSSixFQWtCSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLcUYsSUFEVCxFQUVJO0FBQ0lqRiwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksa0RBUkosQ0FsQkosQ0FQSixFQW9DSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLc0YsT0FEVCxFQUVJLEVBQUU5RSxPQUFPLElBQVQsRUFBZUosVUFBVTtBQUNqQkMsOEJBQVV0RSxZQURPO0FBRWpCdUUsZ0NBQVk7QUFGSztBQUF6QixhQUZKLEVBT0ksZ0JBQU1OLGFBQU4seUJBRUksRUFBRXVGLE1BQU0sTUFBUixFQUFnQkMsTUFBTSxNQUF0QixFQUE4QkMsYUFBYSxRQUEzQztBQUNJdEksdUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxLQUR0QjtBQUVJdUksMEJBQVUsU0FBU0EsUUFBVCxDQUFrQnRFLEtBQWxCLEVBQXlCO0FBQy9CLDJCQUFPc0QsT0FBTzFELFFBQVAsQ0FBZ0IsRUFBRTdELE9BQU9pRSxNQUFNdUUsTUFBTixDQUFheEksS0FBdEIsRUFBaEIsQ0FBUDtBQUNILGlCQUpMO0FBS0l5SSx3QkFBUSxJQUxaLEVBS2tCeEYsVUFBVTtBQUNwQkMsOEJBQVV0RSxZQURVO0FBRXBCdUUsZ0NBQVk7QUFGUTtBQUw1QixhQUZKLEVBWUksZ0JBQU1OLGFBQU4sQ0FBb0IsT0FBcEIsRUFBNkI7QUFDekJJLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURlLGFBQTdCLENBWkosRUFrQkksZ0JBQU1OLGFBQU4seUJBRUk7QUFDSUksMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLEtBUkosQ0FsQkosRUE0QkksZ0JBQU1OLGFBQU4sMEJBRUksRUFBRXVGLE1BQU0sTUFBUixFQUFnQkMsTUFBTSxRQUF0QixFQUFnQ0ssU0FBUyxJQUF6QyxFQUErQ0MsU0FBUyxLQUFLN0UsVUFBN0QsRUFBeUUvQyxTQUFTLEtBQUtqQixLQUFMLENBQVdpQixPQUE3RixFQUFzR2tDLFVBQVU7QUFDeEdDLDhCQUFVdEUsWUFEOEY7QUFFeEd1RSxnQ0FBWTtBQUY0RjtBQUFoSCxhQUZKLEVBT0ksYUFQSixDQTVCSixDQVBKLEVBNkNJLGdCQUFNTixhQUFOLDJCQUE2QixFQUFFK0YsT0FBTyxJQUFULEVBQWVqRyxRQUFRLE9BQXZCLEVBQWdDa0csUUFBUSxLQUFLL0ksS0FBTCxDQUFXZSxZQUFuRCxFQUFpRWlJLFNBQVMsS0FBS2hKLEtBQUwsQ0FBV2MsWUFBckYsRUFBbUdxQyxVQUFVO0FBQ2xJQyw4QkFBVXRFLFlBRHdIO0FBRWxJdUUsZ0NBQVk7QUFGc0g7QUFBN0csYUFBN0IsQ0E3Q0osQ0FwQ0osQ0FQSixDQW5DSixDQXhHSixFQTRPSSxnQkFBTU4sYUFBTixDQUNJLHNCQUFLNEUsR0FEVCxFQUVJO0FBQ0l4RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksZ0JBQU1OLGFBQU4sQ0FDSSxzQkFBSytFLE1BRFQsRUFFSTtBQUNJM0UsMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLGdCQUFNTixhQUFOLGVBRUksRUFBRWtHLE9BQU8sa0JBQWtCLEtBQUt4RSxLQUFMLENBQVdDLE9BQTdCLEdBQXVDLGNBQWhELEVBQWdFdkIsVUFBVTtBQUNsRUMsOEJBQVV0RSxZQUR3RDtBQUVsRXVFLGdDQUFZO0FBRnNEO0FBQTFFLGFBRkosRUFPSSxnQkFBTU4sYUFBTixDQUNJLEdBREosRUFFSTtBQUNJSSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksZ0JBQU1OLGFBQU4sMEJBRUksRUFBRTZGLFNBQVMsSUFBWCxFQUFpQnpGLFVBQVU7QUFDbkJDLDhCQUFVdEUsWUFEUztBQUVuQnVFLGdDQUFZO0FBRk87QUFBM0IsYUFGSixFQU9JLGFBUEosQ0FSSixDQVBKLENBUkosQ0FSSixDQTVPSixDQWxCRyxFQTJTSCxnQkFBTU4sYUFBTix5QkFFSTtBQUNJSSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksZ0JBQU1OLGFBQU4sQ0FDSTJFLE1BREosRUFFSTtBQUNJdkUsMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLGdCQUFNTixhQUFOLENBQ0k0RSxHQURKLEVBRUk7QUFDSXhFLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksY0FSSixDQVJKLEVBa0JJLGdCQUFNTixhQUFOLENBQ0k2RSxVQURKLEVBRUk7QUFDSXpFLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxjQVJKLENBbEJKLEVBNEJJLGdCQUFNTixhQUFOLENBQ0k2RSxVQURKLEVBRUk7QUFDSXpFLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSxjQVJKLENBNUJKLEVBc0NJLGdCQUFNTixhQUFOLENBQ0k2RSxVQURKLEVBRUk7QUFDSXpFLDBCQUFVO0FBQ05DLDhCQUFVdEUsWUFESjtBQUVOdUUsZ0NBQVk7QUFGTjtBQURkLGFBRkosRUFRSSwwQkFSSixDQXRDSixFQWdESSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksT0FSSixDQWhESixFQTBESSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksUUFSSixDQTFESixFQW9FSSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksU0FSSixDQXBFSixDQVJKLENBUkosRUFnR0ksZ0JBQU1OLGFBQU4sQ0FDSThFLElBREosRUFFSTtBQUNJMUUsMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLEtBQUswRCxTQUFMLEVBUkosQ0FoR0osQ0EzU0csQ0FBUDtBQXVaSDtBQWxhRixLQXpJd0IsQ0FBM0IsRUE0aUJJLENBQUM7QUFDRHRCLGFBQUssaUJBREo7QUFFRHZGLGVBQU8sWUFBWTtBQUNmLGdCQUFJZ0osUUFBUSxpQ0FBbUIsYUFBYSxzQkFBb0IvSCxJQUFwQixDQUF5QixTQUFTZ0ksUUFBVCxDQUFrQjFFLEtBQWxCLEVBQXlCO0FBQzFGLHVCQUFPLHNCQUFvQm5ELElBQXBCLENBQXlCLFNBQVM4SCxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUMxRCwyQkFBTyxDQUFQLEVBQVU7QUFDTixnQ0FBUUEsVUFBVTVILElBQVYsR0FBaUI0SCxVQUFVM0gsSUFBbkM7QUFDSSxpQ0FBSyxDQUFMO0FBQ0ksdUNBQU8ySCxVQUFVakQsTUFBVixDQUFpQixRQUFqQixFQUEyQixFQUFFMUIsU0FBU0QsTUFBTTZFLEtBQU4sQ0FBWTVFLE9BQXZCLEVBQTNCLENBQVA7O0FBRUosaUNBQUssQ0FBTDtBQUNBLGlDQUFLLEtBQUw7QUFDSSx1Q0FBTzJFLFVBQVV2RixJQUFWLEVBQVA7QUFOUjtBQVFIO0FBQ0osaUJBWE0sRUFXSnFGLFFBWEksRUFXTSxJQVhOLENBQVA7QUFZSCxhQWIyQyxDQUFoQyxDQUFaOztBQWVBLHFCQUFTSSxlQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUMxQix1QkFBT04sTUFBTXBKLEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU9nSyxlQUFQO0FBQ0gsU0FyQk07QUFGTixLQUFELENBNWlCSjs7QUFza0JBLFdBQU94SyxZQUFQO0FBQ0gsQ0F0eUJrQixrQkFBbkI7O2tCQXd5QmVBLFkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfUHJvbWlzZSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZSc7XG5pbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfZ2V0SXRlcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvcic7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InO1xuaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9Vc2Vycy9saXR0bGV3aGl0ZS9OQ1Vjb2luL3BhZ2VzL2RlcGFydG1lbnRzL3Nob3cuanM/ZW50cnknO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiwgVGFibGUsIERpbW1lciwgTG9hZGVyLCBJbnB1dCwgQ2FyZENvbnRlbnQsIExhYmVsLCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGVwYXJ0bWVudCBmcm9tICcuLi8uLi9ldGhlcmV1bS9kZXBhcnRtZW50JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuLy9pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5pbXBvcnQgaXBmcyBmcm9tICcuLi8uLi91dGlscy9pcGZzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgbWVhc3VyZSBmcm9tICcuLi8uLi91dGlscy9tZWFzdXJlJztcblxudmFyIENhbXBhaWduU2hvdyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENhbXBhaWduU2hvdywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDYW1wYWlnblNob3coKSB7XG4gICAgICAgIHZhciBfcmVmLFxuICAgICAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1wYWlnblNob3cpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENhbXBhaWduU2hvdy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDYW1wYWlnblNob3cpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW06IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBkZXBhcnRtZW50TmFtZTogJycsXG4gICAgICAgICAgICBwZXJzb25Db3VudDogMCxcbiAgICAgICAgICAgIG1hbmFnZXI6ICcnLFxuICAgICAgICAgICAgcGVyc29uczogW10sXG4gICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICBiYWxhbmNlOiAwLFxuICAgICAgICAgICAgaWRfbGV2ZWw6IDAsXG4gICAgICAgICAgICBuYW1lX2xldmVsOiAwLFxuICAgICAgICAgICAgam9iX2xldmVsOiAwLFxuICAgICAgICAgICAgbWVkaWFfbGV2ZWw6IDAsXG4gICAgICAgICAgICBlbWFpbF9sZXZlbDogMCxcblxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGVycm9ydmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlZnJlc2hpbmc6IHRydWUsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9LCBfdGhpcy5zZXRQb3N0aXRlbXMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMigpIHtcbiAgICAgICAgICAgIHZhciBpdGVtcztcbiAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZWFzdXJlKCdnZXQgYWxsIHBvc3RzIGNvbnRlbnQgZnJvbSBJUEZTJywgX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24sIF9kaWRJdGVyYXRvckVycm9yLCBfaXRlcmF0b3JFcnJvciwgX2l0ZXJhdG9yLCBfc3RlcCwgcG9zdCwgZGVzY3JpcHRpb25IVE1MO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yID0gX2dldEl0ZXJhdG9yKF90aGlzLnN0YXRlLnBvc3RzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdC5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpcGZzLmNhdChwb3N0Lmhhc2gpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkhUTUwgPSBfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwi5YWs5ZGKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBkZXNjcmlwdGlvbkhUTUwudG9TdHJpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1g6ICdzY3JvbGwnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBfY29udGV4dC50MDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDI0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goMjEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzMsIDE3LCAyMSwgMjldLCBbMjIsLCAyNCwgMjhdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW1zJywgaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXRlbXM6IGl0ZW1zLCByZWZyZXNoaW5nOiBmYWxzZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIF9jYWxsZWUyLCBfdGhpczIpO1xuICAgICAgICB9KSksIF90aGlzLkNvbnRyaWJ1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXBhcnRtZW50LCBhY2NvdW50cztcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50ID0gRGVwYXJ0bWVudChfdGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQucHJldiA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQ0LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZWFzdXJlKCdjb250cmlidXRlIScsIF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXBhcnRtZW50Lm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkoX3RoaXMuc3RhdGUudmFsdWUsICdldGhlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBfY2FsbGVlMywgX3RoaXMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnL2RlcGFydG1lbnRzLycgKyBfdGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQucHJldiA9IDEzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDQudDAgPSBfY29udGV4dDRbJ2NhdGNoJ10oNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0NC50MC5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9ydmlzaWJsZTogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNCwgX3RoaXMyLCBbWzQsIDEzXV0pO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWY0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KCksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYW1wYWlnblNob3csIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfcmVmNiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRlcGFydG1lbnQsIHN1bW1hcnksIHBlcnNvbnMsIHBvc3RzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50ID0gRGVwYXJ0bWVudCh0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZWFzdXJlKCdnZXQgRGVwYXJ0bWVudCBTdW1tYXJ5JywgX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlcGFydG1lbnQubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoJ3JldHVybicsIF9jb250ZXh0NS5zZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWU1LCBfdGhpczMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5ID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLmFsbChBcnJheShwYXJzZUludChzdW1tYXJ5WzddKSkuZmlsbCgpLm1hcChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXBhcnRtZW50Lm1ldGhvZHMucGVyc29ucyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbnMgPSBfY29udGV4dDYuc2VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX1Byb21pc2UuYWxsKEFycmF5KHBhcnNlSW50KHN1bW1hcnlbOF0pKS5maWxsKCkubWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlcGFydG1lbnQubWV0aG9kcy5wb3N0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzID0gX2NvbnRleHQ2LnNlbnQ7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnROYW1lOiBzdW1tYXJ5WzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uQ291bnQ6IHN1bW1hcnlbN10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uczogcGVyc29ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzOiBwb3N0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IHdlYjMudXRpbHMuZnJvbVdlaShzdW1tYXJ5WzFdLCAnZXRoZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2xldmVsOiBzdW1tYXJ5WzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV9sZXZlbDogc3VtbWFyeVszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYl9sZXZlbDogc3VtbWFyeVs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhX2xldmVsOiBzdW1tYXJ5WzVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxfbGV2ZWw6IHN1bW1hcnlbNl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zdGl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgX2NhbGxlZTYsIHRoaXMpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudERpZE1vdW50O1xuICAgICAgICB9KClcbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclBvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUG9zdCgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZC5Hcm91cCwgeyBpdGVtczogdGhpcy5zdGF0ZS5pdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTMxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclJvdycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJSb3coKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGVyc29ucy5tYXAoZnVuY3Rpb24gKHBlcnNvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZXF1ZXN0Um93LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgcGVyc29uOiBwZXJzb24sXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IF90aGlzNC5wcm9wcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzN1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyQ2FyZHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtYW5hZ2VyID0gX3N0YXRlLm1hbmFnZXIsXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudE5hbWUgPSBfc3RhdGUuZGVwYXJ0bWVudE5hbWUsXG4gICAgICAgICAgICAgICAgcGVyc29uQ291bnQgPSBfc3RhdGUucGVyc29uQ291bnQ7XG5cblxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gW3tcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgICAgICAgICAgbWV0YTogJ0FkZHJlc3Mgb2YgTW5hZ2VyJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBtYW5hZ2VyIGNyZWF0ZSB0aGlzIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3QnLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGRlcGFydG1lbnROYW1lLFxuICAgICAgICAgICAgICAgIG1ldGE6ICfns7vntJonLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5ZOq5LiA5bm05ZOq5LiA57SaJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogcGVyc29uQ291bnQsXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBwZXJzb24nLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5pyJ5aSa5bCR5Lq6J1xuICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuR3JvdXAsIHsgaXRlbXM6IGl0ZW1zLCBpdGVtc1BlclJvdzogMywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTc1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIEhlYWRlciA9IFRhYmxlLkhlYWRlcixcbiAgICAgICAgICAgICAgICBSb3cgPSBUYWJsZS5Sb3csXG4gICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCA9IFRhYmxlLkhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgQm9keSA9IFRhYmxlLkJvZHk7XG5cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxODJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2gzJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4M1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnRGVwYXJ0bWVudCBTaG93J1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgR3JpZCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE4NFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTg1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTg2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMiwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxODlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZC5Hcm91cCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkb3VibGluZzogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQsIHsgY29sb3I6ICdyZWQnLCBoZWFkZXI6IHRoaXMuc3RhdGUuaWRfbGV2ZWwsIG1ldGE6ICdcXHU1Qjc4XFx1ODY1RlxcdTdCNDlcXHU3RDFBJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5MVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IGNvbG9yOiAnb3JhbmdlJywgaGVhZGVyOiB0aGlzLnN0YXRlLmVtYWlsX2xldmVsLCBtZXRhOiAnZW1haWxcXHU3QjQ5XFx1N0QxQScsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE5NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJkLkdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvdWJsaW5nOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTk3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBjb2xvcjogJ3JlZCcsIGhlYWRlcjogdGhpcy5zdGF0ZS5uYW1lX2xldmVsLCBtZXRhOiAnXFx1NTlEM1xcdTU0MERcXHU3QjQ5XFx1N0QxQScsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOThcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBjb2xvcjogJ29yYW5nZScsIGhlYWRlcjogdGhpcy5zdGF0ZS5tZWRpYV9sZXZlbCwgbWV0YTogJ1xcdTc5M0VcXHU3RkE0XFx1NUE5MlxcdTlBRDRcXHU3QjQ5XFx1N0QxQScsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIwMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJkLkdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRvdWJsaW5nOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FyZCwgeyBjb2xvcjogJ3JlZCcsIGhlYWRlcjogdGhpcy5zdGF0ZS5qb2JfbGV2ZWwsIG1ldGE6ICdcXHU4MDc3XFx1N0EzMVxcdTdCNDlcXHU3RDFBJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIwNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLCB7IGNvbG9yOiAnb3JhbmdlJywgaGVhZGVyOiB0aGlzLnN0YXRlLmJhbGFuY2UsIG1ldGE6ICdcXHU2ODIxXFx1NTNDQlxcdTYzNTBcXHU3MzdCKGV0aCknLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogMTAsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpbW1lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhY3RpdmU6IHRoaXMuc3RhdGUucmVmcmVzaGluZywgaW52ZXJ0ZWQ6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMTNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0xvYWRpbmcgUG9zdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUG9zdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLkNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIxN1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNvbG9yOiAneWVsbG93JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIxOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZC5IZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIyMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1OEQwQVxcdTUyQTlcXHU3Q0ZCXFx1NjI0MCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcmQuTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjIxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU1NkRFXFx1OTk0QlxcdTRGNjBcXHU2NzAwXFx1NjExQlxcdTc2ODRcXHU2QkNEXFx1NjgyMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcmQuQ29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXh0cmE6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIyM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2l6ZTogJ21pbmknLCB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAnUHV0Li4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjMwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXRoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNpemU6ICdtaW5pJywgdHlwZTogJ3N1Ym1pdCcsIHByaW1hcnk6IHRydWUsIG9uQ2xpY2s6IHRoaXMuQ29udHJpYnV0ZSwgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjMyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250cmlidXRlISdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXNzYWdlLCB7IGVycm9yOiB0cnVlLCBoZWFkZXI6ICdPb3BzIScsIGhpZGRlbjogdGhpcy5zdGF0ZS5lcnJvcnZpc2libGUsIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMzRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjQwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JpZC5Db2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0MVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJvdXRlOiAnL2RlcGFydG1lbnRzLycgKyB0aGlzLnByb3BzLmFkZHJlc3MgKyAnL3BlcnNvbnMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0MlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0M1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByaW1hcnk6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjQ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdOZXcgUGVyc29uISdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgVGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNTFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI1M1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjU0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU1Qjc4XFx1ODY1RidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlckNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcdTU0MERcXHU1QjU3J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI1NlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFx1ODA3N1xcdTdBMzEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjU3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXHU3OTNFXFx1N0ZBNFxcdTVBOTJcXHU5QUQ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZGVyQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI1OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjU5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVcGRhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkZXJDZWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjYwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBcHByb3ZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjYzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUm93KClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfcmVmOCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU3KHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlNyQoX2NvbnRleHQ3KSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ny5wcmV2ID0gX2NvbnRleHQ3Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDcuYWJydXB0KCdyZXR1cm4nLCB7IGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ny5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBfY2FsbGVlNywgdGhpcyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcyhfeDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlZjguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICAgICAgfSgpXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhbXBhaWduU2hvdztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25TaG93IiwiX0NvbXBvbmVudCIsIl9yZWYiLCJfdGhpczIiLCJfdGVtcCIsIl90aGlzIiwiX3JldCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX19wcm90b19fIiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJpdGVtIiwidmFsdWUiLCJkZXBhcnRtZW50TmFtZSIsInBlcnNvbkNvdW50IiwibWFuYWdlciIsInBlcnNvbnMiLCJwb3N0cyIsImJhbGFuY2UiLCJpZF9sZXZlbCIsIm5hbWVfbGV2ZWwiLCJqb2JfbGV2ZWwiLCJtZWRpYV9sZXZlbCIsImVtYWlsX2xldmVsIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3J2aXNpYmxlIiwicmVmcmVzaGluZyIsImxvYWRpbmciLCJzZXRQb3N0aXRlbXMiLCJtYXJrIiwiX2NhbGxlZTIiLCJpdGVtcyIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsIl9jYWxsZWUiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvciIsIl9zdGVwIiwicG9zdCIsImRlc2NyaXB0aW9uSFRNTCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ1bmRlZmluZWQiLCJkb25lIiwiY29uc29sZSIsImxvZyIsImhhc2giLCJjYXQiLCJzZW50IiwicHVzaCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiY3JlYXRlRWxlbWVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwidG9TdHJpbmciLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImZsdWlkIiwiZXh0cmEiLCJ0aW1lIiwic3R5bGUiLCJvdmVyZmxvd1giLCJ0MCIsInJldHVybiIsImZpbmlzaCIsInN0b3AiLCJzZXRTdGF0ZSIsIkNvbnRyaWJ1dGUiLCJfcmVmNCIsIl9jYWxsZWU0IiwiZXZlbnQiLCJkZXBhcnRtZW50IiwiYWNjb3VudHMiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJfeCIsImtleSIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfdGhpczMiLCJzdW1tYXJ5IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZXRTdW1tYXJ5IiwiYWJydXB0IiwiYWxsIiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiZnJvbVdlaSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyUG9zdCIsIkdyb3VwIiwicmVuZGVyUm93IiwiX3RoaXM0IiwicGVyc29uIiwiaWQiLCJyZW5kZXJDYXJkcyIsIl9zdGF0ZSIsIm1ldGEiLCJvdmVyZmxvd1dyYXAiLCJpdGVtc1BlclJvdyIsInJlbmRlciIsIl90aGlzNSIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwiQ29sdW1uIiwid2lkdGgiLCJkb3VibGluZyIsImNvbG9yIiwiYWN0aXZlIiwiaW52ZXJ0ZWQiLCJNZXRhIiwiQ29udGVudCIsInNpemUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsImFjdGlvbiIsInByaW1hcnkiLCJvbkNsaWNrIiwiZXJyb3IiLCJoaWRkZW4iLCJjb250ZW50Iiwicm91dGUiLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwicXVlcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJf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QTBESSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksUUFSSixDQTFESixFQW9FSSxnQkFBTU4sYUFBTixDQUNJNkUsVUFESixFQUVJO0FBQ0l6RSwwQkFBVTtBQUNOQyw4QkFBVXRFLFlBREo7QUFFTnVFLGdDQUFZO0FBRk47QUFEZCxhQUZKLEVBUUksU0FSSixDQXBFSixDQVJKLENBUkosRUFnR0ksZ0JBQU1OLGFBQU4sQ0FDSThFLElBREosRUFFSTtBQUNJMUUsMEJBQVU7QUFDTkMsOEJBQVV0RSxZQURKO0FBRU51RSxnQ0FBWTtBQUZOO0FBRGQsYUFGSixFQVFJLEtBQUswRCxTQUFMLEVBUkosQ0FoR0osQ0EzU0csQ0FBUDtBQXVaSDtBQWxhRixLQXpJd0IsQ0FBM0IsRUE0aUJJLENBQUM7QUFDRHRCLGFBQUssaUJBREo7QUFFRHZGLGVBQU8sWUFBWTtBQUNmLGdCQUFJZ0osUUFBUSxpQ0FBbUIsYUFBYSxzQkFBb0IvSCxJQUFwQixDQUF5QixTQUFTZ0ksUUFBVCxDQUFrQjFFLEtBQWxCLEVBQXlCO0FBQzFGLHVCQUFPLHNCQUFvQm5ELElBQXBCLENBQXlCLFNBQVM4SCxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUMxRCwyQkFBTyxDQUFQLEVBQVU7QUFDTixnQ0FBUUEsVUFBVTVILElBQVYsR0FBaUI0SCxVQUFVM0gsSUFBbkM7QUFDSSxpQ0FBSyxDQUFMO0FBQ0ksdUNBQU8ySCxVQUFVakQsTUFBVixDQUFpQixRQUFqQixFQUEyQixFQUFFMUIsU0FBU0QsTUFBTTZFLEtBQU4sQ0FBWTVFLE9BQXZCLEVBQTNCLENBQVA7O0FBRUosaUNBQUssQ0FBTDtBQUNBLGlDQUFLLEtBQUw7QUFDSSx1Q0FBTzJFLFVBQVV2RixJQUFWLEVBQVA7QUFOUjtBQVFIO0FBQ0osaUJBWE0sRUFXSnFGLFFBWEksRUFXTSxJQVhOLENBQVA7QUFZSCxhQWIyQyxDQUFoQyxDQUFaOztBQWVBLHFCQUFTSSxlQUFULENBQXlCQyxHQUF6QixFQUE4QjtBQUMxQix1QkFBT04sTUFBTXBKLEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0g7O0FBRUQsbUJBQU9nSyxlQUFQO0FBQ0gsU0FyQk07QUFGTixLQUFELENBNWlCSjs7QUFza0JBLFdBQU94SyxZQUFQO0FBQ0gsQ0F0eUJrQixrQkFBbkI7O2tCQXd5QmVBLFkiLCJmaWxlIjoidW5rbm93biJ9