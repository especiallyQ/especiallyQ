"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _elementUi = require("element-ui");

var _resetMessage = _interopRequireDefault(require("../resetMessage"));

var _home = _interopRequireDefault(require("../views/home.vue"));

var _Carousel = _interopRequireDefault(require("../views/Carousel .vue"));

var _Help = _interopRequireDefault(require("../views/Help.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: _home["default"],
  children: [{
    path: '/',
    component: _Carousel["default"]
  }, {
    path: 'carousel',
    name: 'carousel',
    component: _Carousel["default"]
  }, {
    path: 'variety',
    name: 'variety',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Variety.vue'));
      });
    }
  }, {
    path: 'select',
    name: 'select',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Select.vue'));
      });
    }
  }, {
    path: 'news',
    name: 'news',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/News.vue'));
      });
    }
  }, {
    path: 'help',
    name: 'help',
    component: _Help["default"]
  }, {
    path: 'deal',
    name: 'deal',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Deal.vue'));
      });
    }
  }, {
    path: 'callme',
    name: 'callme',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/CallMe.vue'));
      });
    }
  }]
}, {
  path: '/login',
  name: 'login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Login.vue'));
    });
  }
}, {
  path: '/register',
  name: 'register',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Register.vue'));
    });
  }
}, {
  path: '/new1',
  name: 'new1',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/New1.vue'));
    });
  }
}, {
  path: '/new2',
  name: 'new2',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/New2.vue'));
    });
  }
}, {
  path: '/new3',
  name: 'new3',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/New3.vue'));
    });
  }
}, {
  path: '/new4',
  name: 'new4',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/New4.vue'));
    });
  }
}, {
  path: '/new5',
  name: 'new5',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/New5.vue'));
    });
  }
}, {
  path: '/person',
  name: 'person',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/Person.vue'));
    });
  }
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
}); //前置路由守卫

router.beforeEach(function (to, from, next) {
  var isLogin = sessionStorage.eleToken ? true : false;

  if (to.path === '/person') {
    if (isLogin) {
      next();
    } else {
      if (from.path === '/login') {
        (0, _resetMessage["default"])({
          message: "请先登录",
          type: "warning",
          duration: 1000
        });
      } else {
        router.push('/login');
        (0, _elementUi.Message)({
          message: "请先登录",
          type: "warning",
          duration: 1000
        });
      }
    }
  } else {
    next();
  }
});

_vue["default"].use(_vueRouter["default"]);

var _default = router;
exports["default"] = _default;