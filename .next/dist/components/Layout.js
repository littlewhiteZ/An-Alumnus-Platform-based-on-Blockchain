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
    return _react2.default.createElement(_semanticUiReact.Container, { fluid: true, __source: {
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
    }), _react2.default.createElement(_semanticUiReact.Container, { style: { width: '80%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, props.children));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiZmx1aWQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsInJlbCIsImhyZWYiLCJzdHlsZSIsIndpZHRoIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxpREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUgsRUFBRUMsT0FBTyxJQUFULEVBQWVDLFVBQVU7QUFDakJDLHNCQUFVTCxZQURPO0FBRWpCTSx3QkFBWTtBQUZLO0FBQXpCLEtBRkcsRUFPSCxnQkFBTUosYUFBTixpQkFFSTtBQUNJRSxrQkFBVTtBQUNOQyxzQkFBVUwsWUFESjtBQUVOTSx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSixhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVLLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVTCxZQURzSDtBQUVoSU0sd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVBHLEVBcUJILGdCQUFNSixhQUFOLG1CQUE0QjtBQUN4QkUsa0JBQVU7QUFDTkMsc0JBQVVMLFlBREo7QUFFTk0sd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBckJHLEVBMkJILGdCQUFNSixhQUFOLDZCQUVJLEVBQUVPLE9BQU8sRUFBRUMsT0FBTyxLQUFULEVBQVQsRUFBMkJOLFVBQVU7QUFDN0JDLHNCQUFVTCxZQURtQjtBQUU3Qk0sd0JBQVk7QUFGaUI7QUFBckMsS0FGSixFQU9JTCxNQUFNVSxRQVBWLENBM0JHLENBQVA7QUFxQ0gsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9qc3hGaWxlTmFtZSA9ICcvVXNlcnMvbGl0dGxld2hpdGUvTkNVY29pbi9jb21wb25lbnRzL0xheW91dC5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9kaXN0L2xpYi9oZWFkLmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRhaW5lcixcbiAgICAgICAgeyBmbHVpZDogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEhlYWQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogOVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaW5rJywgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogJy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4zL3NlbWFudGljLm1pbi5jc3MnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBDb250YWluZXIsXG4gICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiAnODAlJyB9LCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgKTtcbn0pOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiZmx1aWQiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsInJlbCIsImhyZWYiLCJzdHlsZSIsIndpZHRoIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBSkEsSUFBSUEsZUFBZSxpREFBbkI7O2tCQU1nQixVQUFVQyxLQUFWLEVBQWlCO0FBQzdCLFdBQU8sZ0JBQU1DLGFBQU4sNkJBRUgsRUFBRUMsT0FBTyxJQUFULEVBQWVDLFVBQVU7QUFDakJDLHNCQUFVTCxZQURPO0FBRWpCTSx3QkFBWTtBQUZLO0FBQXpCLEtBRkcsRUFPSCxnQkFBTUosYUFBTixpQkFFSTtBQUNJRSxrQkFBVTtBQUNOQyxzQkFBVUwsWUFESjtBQUVOTSx3QkFBWTtBQUZOO0FBRGQsS0FGSixFQVFJLGdCQUFNSixhQUFOLENBQW9CLE1BQXBCLEVBQTRCLEVBQUVLLEtBQUssWUFBUCxFQUFxQkMsTUFBTSxxRUFBM0IsRUFBa0dKLFVBQVU7QUFDaElDLHNCQUFVTCxZQURzSDtBQUVoSU0sd0JBQVk7QUFGb0g7QUFBNUcsS0FBNUIsQ0FSSixDQVBHLEVBcUJILGdCQUFNSixhQUFOLG1CQUE0QjtBQUN4QkUsa0JBQVU7QUFDTkMsc0JBQVVMLFlBREo7QUFFTk0sd0JBQVk7QUFGTjtBQURjLEtBQTVCLENBckJHLEVBMkJILGdCQUFNSixhQUFOLDZCQUVJLEVBQUVPLE9BQU8sRUFBRUMsT0FBTyxLQUFULEVBQVQsRUFBMkJOLFVBQVU7QUFDN0JDLHNCQUFVTCxZQURtQjtBQUU3Qk0sd0JBQVk7QUFGaUI7QUFBckMsS0FGSixFQU9JTCxNQUFNVSxRQVBWLENBM0JHLENBQVA7QUFxQ0gsQyIsImZpbGUiOiJ1bmtub3duIn0=