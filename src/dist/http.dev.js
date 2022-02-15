"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadingInstance = ''; //开始加载动画

function startLoading() {
  loadingInstance = _elementUi.Loading.service({
    //是否显示动画
    lock: true,
    //显示文字
    text: '拼命加载中......',
    background: 'rgba(0,0,0,7)'
  });
} //关闭加载动画


function endLoading() {
  loadingInstance.close();
} //请求拦截


_axios["default"].interceptors.request.use(function (config) {
  _nprogress["default"].start(); //开始加载动画


  startLoading(); //判断是否存有token，如果有将其放入请求头的Authorization字段发送至服务端进行验证

  if (sessionStorage.eleToken) {
    config.headers.Authorization = sessionStorage.eleToken;
  }

  return config;
}), function (error) {
  //关闭加载动画
  endLoading();
  return Promise.reject(error);
}; //响应拦截

_axios["default"].interceptors.response.use(function (response) {
  _nprogress["default"].done(); //关闭加载动画


  endLoading();
  return response;
}), function (error) {
  endLoading();

  _elementUi.Message.error(error.response.data);

  return Promise.reject(error);
};
var _default = _axios["default"];
exports["default"] = _default;