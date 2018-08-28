'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexItem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  order: 0;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 1;\n  display: block;\n  ', ';\n  ', ';\n  ', ';\n  /********************************** order **********************************/\n  /****************** http://cssreference.io/property/order ******************/\n  ', ';\n  /******************************** flex-basis ********************************/\n  /**************** http://cssreference.io/property/flex-basis ****************/\n  ', ';\n  /******************************** flex-grow ********************************/\n  /**************** http://cssreference.io/property/flex-grow ****************/\n  ', ';\n  /******************************* flex-shrink *******************************/\n  /*************** http://cssreference.io/property/flex-shrink ***************/\n  ', ';\n  ', ';\n'], ['\n  order: 0;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 1;\n  display: block;\n  ', ';\n  ', ';\n  ', ';\n  /********************************** order **********************************/\n  /****************** http://cssreference.io/property/order ******************/\n  ', ';\n  /******************************** flex-basis ********************************/\n  /**************** http://cssreference.io/property/flex-basis ****************/\n  ', ';\n  /******************************** flex-grow ********************************/\n  /**************** http://cssreference.io/property/flex-grow ****************/\n  ', ';\n  /******************************* flex-shrink *******************************/\n  /*************** http://cssreference.io/property/flex-shrink ***************/\n  ', ';\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-block;\n  '], ['\n    display: inline-block;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline-flex;\n  '], ['\n    display: inline-flex;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    display: flex;\n  '], ['\n    display: flex;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    order: ', ';\n  '], ['\n    order: ', ';\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    flex-basis: ', ';\n  '], ['\n    flex-basis: ', ';\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    flex-grow: ', ';\n  '], ['\n    flex-grow: ', ';\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    flex-shrink: ', ';\n  '], ['\n    flex-shrink: ', ';\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    flex-shrink: 0;\n  '], ['\n    flex-shrink: 0;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  /********************************* display *********************************/\n  /***************** http://cssreference.io/property/display *****************/\n  ', ';\n  /******************************** direction ********************************/\n  /************** http://cssreference.io/property/flex-direction **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /*********************************** wrap ***********************************/\n  /**************** http://cssreference.io/property/flex-wrap ****************/\n  ', ';\n  ', ';\n  ', ';\n  /***************************** justify-content *****************************/\n  /************* http://cssreference.io/property/justify-content *************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /****************************** align-content ******************************/\n  /************** http://cssreference.io/property/align-content **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************* align-items *******************************/\n  /*************** http://cssreference.io/property/align-items ***************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************** utilities ********************************/\n  ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  /********************************* display *********************************/\n  /***************** http://cssreference.io/property/display *****************/\n  ', ';\n  /******************************** direction ********************************/\n  /************** http://cssreference.io/property/flex-direction **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /*********************************** wrap ***********************************/\n  /**************** http://cssreference.io/property/flex-wrap ****************/\n  ', ';\n  ', ';\n  ', ';\n  /***************************** justify-content *****************************/\n  /************* http://cssreference.io/property/justify-content *************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /****************************** align-content ******************************/\n  /************** http://cssreference.io/property/align-content **************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************* align-items *******************************/\n  /*************** http://cssreference.io/property/align-items ***************/\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  ', ';\n  /******************************** utilities ********************************/\n  ', ';\n  ', ';\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n    flex-direction: row; /* default */\n  '], ['\n    flex-direction: row; /* default */\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    flex-direction: row-reverse;\n  '], ['\n    flex-direction: row-reverse;\n  ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    flex-direction: column;\n  '], ['\n    flex-direction: column;\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    flex-direction: column-reverse;\n  '], ['\n    flex-direction: column-reverse;\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n    flex-wrap: nowrap; /* default */\n  '], ['\n    flex-wrap: nowrap; /* default */\n  ']),
    _templateObject16 = _taggedTemplateLiteral(['\n    flex-wrap: wrap;\n  '], ['\n    flex-wrap: wrap;\n  ']),
    _templateObject17 = _taggedTemplateLiteral(['\n    flex-wrap: wrap-reverse;\n  '], ['\n    flex-wrap: wrap-reverse;\n  ']),
    _templateObject18 = _taggedTemplateLiteral(['\n    justify-content: flex-start; /* default */\n  '], ['\n    justify-content: flex-start; /* default */\n  ']),
    _templateObject19 = _taggedTemplateLiteral(['\n    justify-content: flex-end;\n  '], ['\n    justify-content: flex-end;\n  ']),
    _templateObject20 = _taggedTemplateLiteral(['\n    justify-content: center;\n  '], ['\n    justify-content: center;\n  ']),
    _templateObject21 = _taggedTemplateLiteral(['\n    justify-content: space-between;\n  '], ['\n    justify-content: space-between;\n  ']),
    _templateObject22 = _taggedTemplateLiteral(['\n    justify-content: space-around;\n  '], ['\n    justify-content: space-around;\n  ']),
    _templateObject23 = _taggedTemplateLiteral(['\n    align-content: flex-start;\n  '], ['\n    align-content: flex-start;\n  ']),
    _templateObject24 = _taggedTemplateLiteral(['\n    align-content: flex-end;\n  '], ['\n    align-content: flex-end;\n  ']),
    _templateObject25 = _taggedTemplateLiteral(['\n    align-content: center;\n  '], ['\n    align-content: center;\n  ']),
    _templateObject26 = _taggedTemplateLiteral(['\n    align-content: space-between;\n  '], ['\n    align-content: space-between;\n  ']),
    _templateObject27 = _taggedTemplateLiteral(['\n    align-content: space-around;\n  '], ['\n    align-content: space-around;\n  ']),
    _templateObject28 = _taggedTemplateLiteral(['\n    align-content: stretch; /* default */\n  '], ['\n    align-content: stretch; /* default */\n  ']),
    _templateObject29 = _taggedTemplateLiteral(['\n    align-items: flex-start;\n  '], ['\n    align-items: flex-start;\n  ']),
    _templateObject30 = _taggedTemplateLiteral(['\n    align-items: flex-end;\n  '], ['\n    align-items: flex-end;\n  ']),
    _templateObject31 = _taggedTemplateLiteral(['\n    align-items: center;\n  '], ['\n    align-items: center;\n  ']),
    _templateObject32 = _taggedTemplateLiteral(['\n    align-items: baseline;\n  '], ['\n    align-items: baseline;\n  ']),
    _templateObject33 = _taggedTemplateLiteral(['\n    align-items: stretch;\n  '], ['\n    align-items: stretch;\n  ']),
    _templateObject34 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  '], ['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  ']),
    _templateObject35 = _taggedTemplateLiteral(['\n    align-items: center;\n    justify-content: center;\n  '], ['\n    align-items: center;\n    justify-content: center;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledIs = require('styled-is');

var _styledIs2 = _interopRequireDefault(_styledIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexItem = exports.FlexItem = _styledComponents2.default.div(_templateObject, (0, _styledIs2.default)('inlineBlock')(_templateObject2), (0, _styledIs2.default)('inlineFlex')(_templateObject3), (0, _styledIs2.default)('flex')(_templateObject4), (0, _styledIs2.default)('order')(_templateObject5, function (props) {
  return props.order;
}), (0, _styledIs2.default)('basis')(_templateObject6, function (props) {
  return props.basis;
}), (0, _styledIs2.default)('grow')(_templateObject7, function (props) {
  return props.grow;
}), (0, _styledIs2.default)('shrink')(_templateObject8, function (props) {
  return props.shrink;
}), (0, _styledIs2.default)('noShrink')(_templateObject9));

var Flex = _styledComponents2.default.div(_templateObject10, (0, _styledIs2.default)('inline')(_templateObject3), (0, _styledIs2.default)('row')(_templateObject11), (0, _styledIs2.default)('rowReverse')(_templateObject12), (0, _styledIs2.default)('column')(_templateObject13), (0, _styledIs2.default)('columnReverse')(_templateObject14), (0, _styledIs2.default)('nowrap')(_templateObject15), (0, _styledIs2.default)('wrap')(_templateObject16), (0, _styledIs2.default)('wrapReverse')(_templateObject17), (0, _styledIs2.default)('justifyStart')(_templateObject18), (0, _styledIs2.default)('justifyEnd')(_templateObject19), (0, _styledIs2.default)('justifyCenter')(_templateObject20), (0, _styledIs2.default)('justifyBetween')(_templateObject21), (0, _styledIs2.default)('justifyAround')(_templateObject22), (0, _styledIs2.default)('contentStart')(_templateObject23), (0, _styledIs2.default)('contentEnd')(_templateObject24), (0, _styledIs2.default)('contentCenter')(_templateObject25), (0, _styledIs2.default)('contentSpaceBetween')(_templateObject26), (0, _styledIs2.default)('contentSpaceAround')(_templateObject27), (0, _styledIs2.default)('contentStretch')(_templateObject28), (0, _styledIs2.default)('alignStart')(_templateObject29), (0, _styledIs2.default)('alignEnd')(_templateObject30), (0, _styledIs2.default)('alignCenter')(_templateObject31), (0, _styledIs2.default)('alignBaseline')(_templateObject32), (0, _styledIs2.default)('alignStretch')(_templateObject33), (0, _styledIs2.default)('full')(_templateObject34), (0, _styledIs2.default)('center')(_templateObject35));

exports.default = Flex;