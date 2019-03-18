'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/littlewhite/NCUcoin/components/Layout.js';

exports.default = function (props) {
    return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }), props.children);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxpREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVSixZQURzSDtBQUVoSUssd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL2xpdHRsZXdoaXRlL05DVWNvaW4vY29tcG9uZW50cy9MYXlvdXQuanMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvZGlzdC9saWIvaGVhZC5qcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBDb250YWluZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBIZWFkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGluaycsIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6ICcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjMuMy9zZW1hbnRpYy5taW4uY3NzJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICk7XG59KTsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZWwiLCJocmVmIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxpREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUg7QUFDSUMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURkLEtBRkcsRUFRSCxnQkFBTUgsYUFBTixpQkFFSTtBQUNJQyxrQkFBVTtBQUNOQyxzQkFBVUosWUFESjtBQUVOSyx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSCxhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVJLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVSixZQURzSDtBQUVoSUssd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVJHLEVBc0JILGdCQUFNSCxhQUFOLG1CQUE0QjtBQUN4QkMsa0JBQVU7QUFDTkMsc0JBQVVKLFlBREo7QUFFTkssd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBdEJHLEVBNEJISixNQUFNTyxRQTVCSCxDQUFQO0FBOEJILEMiLCJmaWxlIjoidW5rbm93biJ9