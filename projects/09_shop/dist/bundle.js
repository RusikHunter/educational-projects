/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Product.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/Product.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
var _Product_brand = /*#__PURE__*/new WeakSet();
var Product = /*#__PURE__*/_createClass(function Product(ID, title, description, category, price, count) {
  _classCallCheck(this, Product);
  _classPrivateMethodInitSpec(this, _Product_brand);
  this.id = ID, this.title = title, this.description = description, this.category = category, this.price = price, this.count = count, this.totalPrice = price * count, this.isPurchased = false, this.html = "<div class=\"shop__product product\" data-js-product>\n        <span class=\"product__id\">ID: ".concat(this.id, "</span>\n        <h6 class=\"product__title\">").concat(this.title, "</h6>\n        <p class=\"product__description\">Description: ").concat(this.description, "</p>\n        <span class=\"product__category\">Category: ").concat(this.category, "</span>\n\n        <span class=\"product__price\">Price: ").concat(this.price, "$</span>\n        <span class=\"product__count\">Count: ").concat(this.count, "</span>\n        <span class=\"product__price--total\">Total price: ").concat(this.totalPrice, "$</span>\n\n        <div class=\"product__wrap--is-purchased\">\n            <label for=\"product123\">Purchased:</label>\n            <input type=\"checkbox\" data-js-checkbox-is-purchased=\"").concat(this.id, "\"\n                class=\"product__checkbox--is-purchased\">\n        </div>\n        <div class=\"product__wrap--buttons\">\n            <button class=\"product__button--edit\" data-js-button-edit=\"").concat(this.id, "\">Edit product</button>\n            <button class=\"product__button--remove\" data-js-button-remove=\"").concat(this.id, "\">Remove product</button>\n        </div>\n        </div>");
});
function _getElements() {}
function _setEvents() {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./src/scripts/components/ShoppingListHandler.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/ShoppingListHandler.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./src/scripts/components/Product.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var _ShoppingListHandler_brand = /*#__PURE__*/new WeakSet();
var ShoppingListHandler = /*#__PURE__*/_createClass(function ShoppingListHandler() {
  _classCallCheck(this, ShoppingListHandler);
  // methods of constructor
  _classPrivateMethodInitSpec(this, _ShoppingListHandler_brand);
  this.elements = [];
  this.sortingType = 'nothing';
  _assertClassBrand(_ShoppingListHandler_brand, this, _getElements).call(this);
  _assertClassBrand(_ShoppingListHandler_brand, this, _setEvents).call(this);
  _assertClassBrand(_ShoppingListHandler_brand, this, _renderProductsList).call(this);
});
function _getElements() {
  // add product form
  this.elements.addFormElement = document.querySelector('[data-js-form-add]');
  this.elements.addFormSubmitElement = document.querySelector('[data-js-form-add-submit]');

  // list of products

  this.elements.listElement = document.querySelector('[data-js-list]');

  // button clearing list and storage

  this.elements.clearButtonElement = document.querySelector('[data-js-button-clear]');

  // select sort type

  this.elements.sortingTypeSelectElement = document.querySelector('[data-js-select-sort-type]');

  // edit product form

  this.elements.editProductDialogElement = document.querySelector('[data-js-dialog-edit-product]');
  this.elements.editProductFormElement = document.querySelector('[data-js-form-edit-product]');
  this.elements.editProductFormCloseButtonElement = document.querySelector('[data-js-button-change-close]');
  this.elements.editProductFormIDElement = document.querySelector('[data-js-form-edit-id]');
  this.elements.editProductFormTitleElement = document.querySelector('[data-js-form-edit-title]');
  this.elements.editProductFormSubmitButtonElement = document.querySelector('[data-js-form-edit-submit]');
}
function _setEvents() {
  var _this = this;
  // add product
  this.elements.addFormSubmitElement.addEventListener('click', function (event) {
    event.preventDefault();
    _assertClassBrand(_ShoppingListHandler_brand, _this, _addProduct).call(_this);
  });

  // clear storage and list
  this.elements.clearButtonElement.addEventListener('click', function () {
    window.localStorage.clear();
    _assertClassBrand(_ShoppingListHandler_brand, _this, _clearProductsList).call(_this);
  });

  // change sort type
  this.elements.sortingTypeSelectElement.addEventListener('change', function (event) {
    var sortingType = event.target.value;
    _this.sortingType = sortingType;
    _assertClassBrand(_ShoppingListHandler_brand, _this, _renderProductsList).call(_this);
  });
  this.elements.editProductFormCloseButtonElement.addEventListener('click', function () {
    _this.elements.editProductDialogElement.removeAttribute('open');
  });
  this.elements.editProductFormSubmitButtonElement.addEventListener('click', function (event) {
    event.preventDefault();
    var formData = new FormData(_this.elements.editProductFormElement);
    var product = JSON.parse(window.localStorage.getItem(_this.elements.editProductDialogElement.getAttribute('data-js-dialog-edit-product')));
    var productProperties = [];
    var _iterator = _createForOfIteratorHelper(formData.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];
        if (product.hasOwnProperty(key)) {
          if (value.trim() !== '') {
            productProperties.push(value);
          } else {
            productProperties.push(product[key]);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var newProduct = new _Product__WEBPACK_IMPORTED_MODULE_0__["default"](product.id, productProperties[0], productProperties[1], productProperties[2], productProperties[3], productProperties[4]);
    window.localStorage.setItem(product.id, JSON.stringify(newProduct));
    _this.elements.editProductDialogElement.removeAttribute('open');
    _assertClassBrand(_ShoppingListHandler_brand, _this, _renderProductsList).call(_this);
  });
}
// basic methods
//method adds new product to localstorage and to product elements list
function _addProduct() {
  return _addProduct2.apply(this, arguments);
}
function _addProduct2() {
  _addProduct2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var formOfAddingProduct, ID, title, description, category, response, price, count, product;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          formOfAddingProduct = new FormData(this.elements.addFormElement); // product values
          _context.prev = 1;
          ID = Date.now();
          title = formOfAddingProduct.get('title');
          description = formOfAddingProduct.get('description');
          category = formOfAddingProduct.get('category');
          _context.next = 8;
          return fetch("https://dummyjson.com/products/".concat(Math.floor(Math.random() * 100)));
        case 8:
          response = _context.sent;
          _context.next = 11;
          return response.json();
        case 11:
          price = _context.sent.price;
          count = formOfAddingProduct.get('count');
          if (!(!title || !description || !count)) {
            _context.next = 15;
            break;
          }
          throw new Error("Cant add product without full data");
        case 15:
          product = new _Product__WEBPACK_IMPORTED_MODULE_0__["default"](ID, title, description, category, price, count);
          window.localStorage.setItem(ID, JSON.stringify(product)); // adding product to localStorage

          _assertClassBrand(_ShoppingListHandler_brand, this, _renderProductsList).call(this);
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, this, [[1, 20]]);
  }));
  return _addProduct2.apply(this, arguments);
}
// method renders all product elements list (based on the sort type)
function _renderProductsList() {
  var _this2 = this;
  // at first cleaning previous list of products
  _assertClassBrand(_ShoppingListHandler_brand, this, _clearProductsList).call(this);

  // rendering products ...

  switch (this.sortingType) {
    case 'nothing':
      console.log('nothing');
      var keys = Object.keys(window.localStorage).sort();
      var _iterator2 = _createForOfIteratorHelper(keys),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          var value = localStorage.getItem(key);
          var product = JSON.parse(value);
          this.elements.listElement.insertAdjacentHTML('beforeend', product.html);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      break;
    case 'category':
      var items = Object.keys(window.localStorage).map(function (key) {
        var parsedObject = JSON.parse(window.localStorage.getItem(key));
        return {
          key: key,
          category: parsedObject.category
        };
      });
      items.sort(function (a, b) {
        if (a.category < b.category) return -1;
        if (a.category > b.category) return 1;
        return 0;
      });
      for (var i = 0; i < window.localStorage.length; ++i) {
        var _value = localStorage.getItem(items[i].key);
        var _product = JSON.parse(_value);
        this.elements.listElement.insertAdjacentHTML('beforeend', _product.html);
      }
      break;
    case 'purchased':
      var purchasedKeys = Object.keys(window.localStorage).map(function (key) {
        return JSON.parse(window.localStorage.getItem(key));
      }).sort();
      var purchasedProducts = purchasedKeys.filter(function (item) {
        return item.isPurchased === true;
      });
      var _iterator3 = _createForOfIteratorHelper(purchasedProducts),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _product2 = _step3.value;
          this.elements.listElement.insertAdjacentHTML('beforeend', _product2.html);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      break;
    case 'notPurchased':
      var notPurchasedKeys = Object.keys(window.localStorage).map(function (key) {
        return JSON.parse(window.localStorage.getItem(key));
      }).sort();
      var notPurchasedProducts = notPurchasedKeys.filter(function (item) {
        return item.isPurchased === false;
      });
      var _iterator4 = _createForOfIteratorHelper(notPurchasedProducts),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _product3 = _step4.value;
          this.elements.listElement.insertAdjacentHTML('beforeend', _product3.html);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      break;
  }

  // adding event listeners to all rendered remove-buttons
  var removeButtons = document.querySelectorAll('[data-js-button-remove]');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var id = button.getAttribute('data-js-button-remove');
      window.localStorage.removeItem(id);
      _assertClassBrand(_ShoppingListHandler_brand, _this2, _renderProductsList).call(_this2);
    });
  });

  // add event listeners to all rendered edit-buttons

  var editButton = document.querySelectorAll('[data-js-button-edit]');
  editButton.forEach(function (button) {
    button.addEventListener('click', function () {
      var id = button.getAttribute('data-js-button-edit');
      _this2.elements.editProductDialogElement.setAttribute('open', '');
      var product = JSON.parse(window.localStorage.getItem(id));
      _this2.elements.editProductFormIDElement.textContent = "ID: ".concat(product.id);
      _this2.elements.editProductDialogElement.setAttribute('data-js-dialog-edit-product', product.id);
      _this2.elements.editProductFormTitleElement.textContent = product.title;

      // this.#_renderProductsList()
    });
  });

  // adding event listeners to all rendered remove-buttons
  var checkboxes = document.querySelectorAll('[data-js-checkbox-is-purchased]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function (event) {
      var id = checkbox.getAttribute('data-js-checkbox-is-purchased');
      var product = JSON.parse(window.localStorage.getItem(id));
      console.log(product);
      product.isPurchased = !product.isPurchased;
      window.localStorage.setItem(id, JSON.stringify(product));
      _assertClassBrand(_ShoppingListHandler_brand, _this2, _renderProductsList).call(_this2);
    });
    var updatedId = checkbox.getAttribute('data-js-checkbox-is-purchased');
    var updatedProduct = JSON.parse(window.localStorage.getItem(updatedId));
    checkbox.checked = (updatedProduct === null || updatedProduct === void 0 ? void 0 : updatedProduct.isPurchased) || false;
  });
}
// method removes all product elements list
function _clearProductsList() {
  var _this3 = this;
  var products = document.querySelectorAll('[data-js-product]');
  products.forEach(function (product) {
    _this3.elements.listElement.removeChild(product);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShoppingListHandler);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/remove.png */ "./src/images/remove.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cross.png */ "./src/images/cross.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*

normalize - файл с нормализацией стилей для стандартных селекторов

ссылка на источник - https://github.com/aleksanderlamkov/positivus/blob/main/styles/_normalize.scss


*/
/**
  Нормализация блочной модели
 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/**
   Убираем внутренние отступы слева тегам списков,
   у которых есть атрибут class
  */
:where(ul, ol):where([class]) {
  padding-left: 0;
}

/**
   Убираем внешние отступы body и двум другим тегам,
   у которых есть атрибут class
  */
body,
:where(blockquote, figure):where([class]) {
  margin: 0;
}

/**
   Убираем внешние отступы вертикали нужным тегам,
   у которых есть атрибут class
  */
:where(h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
dl):where([class]) {
  margin-block: 0;
}

:where(dd[class]) {
  margin-left: 0;
}

:where(fieldset[class]) {
  margin-left: 0;
  padding: 0;
  border: none;
}

/**
   Убираем стандартный маркер маркированному списку,
   у которого есть атрибут class
  */
:where(ul[class]) {
  list-style: none;
}

/**
   Обнуляем вертикальные внешние отступы параграфа,
   объявляем локальную переменную для внешнего отступа вниз,
   чтобы избежать взаимодействие с более сложным селектором
  */
p {
  --paragraphMarginBottom: 24px;
  margin-block: 0;
}

/**
   Внешний отступ вниз для параграфа без атрибута class,
   который расположен не последним среди своих соседних элементов
  */
p:where(:not([class]):not(:last-child)) {
  margin-bottom: var(--paragraphMarginBottom);
}

/**
   Упрощаем работу с изображениями
  */
img {
  display: block;
  max-width: 100%;
}

/**
   Наследуем свойства шрифт для полей ввода
  */
input,
textarea,
select,
button {
  font: inherit;
}

html {
  /**
   Пригодится в большинстве ситуаций
   (когда, например, нужно будет "прижать" футер к низу сайта)
  */
  height: 100%;
  /**
   Плавный скролл
  */
  scroll-behavior: smooth;
}

body {
  /**
   Пригодится в большинстве ситуаций
   (когда, например, нужно будет "прижать" футер к низу сайта)
  */
  min-height: 100%;
  /**
   Унифицированный интерлиньяж
  */
  line-height: 1.5;
}

/**
   Приводим к единому цвету svg-элементы
  */
svg *[fill] {
  fill: currentColor;
}

svg *[stroke] {
  stroke: currentColor;
}

/**
   Чиним баг задержки смены цвета при взаимодействии с svg-элементами
  */
svg * {
  transition-property: fill, stroke;
}

/**
   Удаляем все анимации и переходы для людей,
   которые предпочитают их не использовать
  */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
* {
  font-family: Arial, Helvetica, sans-serif;
}

:root {
  --background-color: #F0F0F0;
  --interface-color: #C4C4C4;
  --element-color: #ABABAB;
  --text-color: #000000;
  --border-color: #000000;
}

.shop {
  background-color: var(--background-color);
}
.shop__container {
  width: 1440px;
  height: 100vh;
  display: flex;
  margin-inline: auto;
}
.shop__row {
  width: 100%;
  display: flex;
  justify-content: center;
}
.shop__column {
  width: 40%;
  display: flex;
  flex-direction: column;
}
.shop__shop {
  display: flex;
  flex-direction: column;
  margin-top: 1.5vh;
  background-color: var(--interface-color);
  border-radius: 20px;
}
.shop__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--element-color);
  padding: 30px;
  border-radius: 20px 20px 0 0;
}

.list {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 37vh;
  overflow-y: auto;
}
.list__button--clear {
  position: absolute;
  top: 0px;
  right: 5px;
  width: 20px;
  height: 20px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.list::-webkit-scrollbar {
  display: none;
}

.product {
  display: flex;
  flex-direction: column;
  background-color: var(--element-color);
  padding: 7px;
  border-radius: 5px;
}
.product__title {
  font-size: 24px;
}
.product__description {
  font-size: 12px;
}
.product__category {
  font-size: 12px;
}
.product__price {
  font-size: 12px;
}
.product__count {
  font-size: 12px;
}
.product__price--total {
  font-size: 12px;
}
.product__wrap--is-purchased {
  display: flex;
  align-items: center;
}
.product__wrap--is-purchased label {
  font-size: 12px;
}
.product__checkbox--is-purchased {
  display: inline;
  width: 12px;
}
.product__wrap--buttons {
  display: flex;
  width: 100%;
  gap: 10px;
}
.product__button--edit {
  width: 50%;
}
.product__button--remove {
  width: 50%;
}

.control {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 0 0 20px 20px;
  background-color: var(--element-color);
}
.control__title {
  font-size: 18px;
}

.form {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  gap: 10px;
}
.form input {
  width: 50%;
}
.form__wrap-content {
  position: relative;
}
.form__wrap-content input,
.form__wrap-content select {
  position: absolute;
  left: 100px;
}
.form__input--submit {
  margin-inline: auto;
  width: 100% !important;
  margin-top: 10px;
}

.dialog {
  position: absolute;
  top: 0;
  left: 0;
  margin-inline: auto;
  margin-top: 30vh;
  background-color: var(--background-color);
  border: 3px solid var(--border-color);
  width: 20%;
}
.dialog--wide {
  width: 30%;
}

.total__wrap {
  display: flex;
  flex-direction: column;
  position: relative;
}
.total__button--close {
  width: 16px;
  height: 16px;
  background-color: var(--background-color);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  border: 0;
  outline: 0;
  position: absolute;
  top: 0;
  right: 0;
}

.change__wrap {
  display: flex;
  flex-direction: column;
  position: relative;
}
.change__title {
  font-size: 24px;
}
.change__button--close {
  width: 16px;
  height: 16px;
  background-color: var(--background-color);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  border: 0;
  outline: 0;
  position: absolute;
  top: 0;
  right: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.scss","webpack://./src/styles/_normalize.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/cross.png":
/*!******************************!*\
  !*** ./src/images/cross.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26d6bb0d832bc902de68.png";

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c0c20f3fde7ef66b735.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _components_ShoppingListHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ShoppingListHandler */ "./src/scripts/components/ShoppingListHandler.js");


new _components_ShoppingListHandler__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3SUFBd0ksWUFBWSxLQUFLLE1BQU0sS0FBSyxPQUFPLFdBQVcsTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sT0FBTyxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxjQUFjLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxLQUFLLEtBQUssV0FBVyxNQUFNLFFBQVEsS0FBSyxLQUFLLFdBQVcsVUFBVSxNQUFNLE9BQU8sS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssUUFBUSxVQUFVLE1BQU0sS0FBSyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FB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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDcUM7QUFFbEUsSUFBSUEsdUVBQW1CLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDlfc2hvcC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8wOV9zaG9wLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9TaG9wcGluZ0xpc3RIYW5kbGVyLmpzIiwid2VicGFjazovLzA5X3Nob3AvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzA5X3Nob3AvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly8wOV9zaG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzA5X3Nob3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLzA5X3Nob3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8wOV9zaG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzA5X3Nob3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMDlfc2hvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8wOV9zaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8wOV9zaG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vMDlfc2hvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzA5X3Nob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8wOV9zaG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLzA5X3Nob3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vMDlfc2hvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vMDlfc2hvcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByb2R1Y3Qge1xyXG4gICAgY29uc3RydWN0b3IoSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIHByaWNlLCBjb3VudCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBJRCxcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeSxcclxuICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlLFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQsXHJcbiAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSA9IHByaWNlICogY291bnQsXHJcbiAgICAgICAgICAgIHRoaXMuaXNQdXJjaGFzZWQgPSBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaHRtbCA9IGA8ZGl2IGNsYXNzPVwic2hvcF9fcHJvZHVjdCBwcm9kdWN0XCIgZGF0YS1qcy1wcm9kdWN0PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9faWRcIj5JRDogJHt0aGlzLmlkfTwvc3Bhbj5cclxuICAgICAgICA8aDYgY2xhc3M9XCJwcm9kdWN0X190aXRsZVwiPiR7dGhpcy50aXRsZX08L2g2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdF9fZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2R1Y3RfX2NhdGVnb3J5XCI+Q2F0ZWdvcnk6ICR7dGhpcy5jYXRlZ29yeX08L3NwYW4+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcHJpY2VcIj5QcmljZTogJHt0aGlzLnByaWNlfSQ8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0X19jb3VudFwiPkNvdW50OiAke3RoaXMuY291bnR9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdF9fcHJpY2UtLXRvdGFsXCI+VG90YWwgcHJpY2U6ICR7dGhpcy50b3RhbFByaWNlfSQ8L3NwYW4+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0X193cmFwLS1pcy1wdXJjaGFzZWRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3QxMjNcIj5QdXJjaGFzZWQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRhdGEtanMtY2hlY2tib3gtaXMtcHVyY2hhc2VkPVwiJHt0aGlzLmlkfVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInByb2R1Y3RfX2NoZWNrYm94LS1pcy1wdXJjaGFzZWRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdF9fd3JhcC0tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvZHVjdF9fYnV0dG9uLS1lZGl0XCIgZGF0YS1qcy1idXR0b24tZWRpdD1cIiR7dGhpcy5pZH1cIj5FZGl0IHByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2R1Y3RfX2J1dHRvbi0tcmVtb3ZlXCIgZGF0YS1qcy1idXR0b24tcmVtb3ZlPVwiJHt0aGlzLmlkfVwiPlJlbW92ZSBwcm9kdWN0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICAgICNfZ2V0RWxlbWVudHMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNfc2V0RXZlbnRzKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdCIsImltcG9ydCBQcm9kdWN0IGZyb20gXCIuL1Byb2R1Y3RcIlxyXG5cclxuY2xhc3MgU2hvcHBpbmdMaXN0SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW11cclxuXHJcbiAgICAgICAgdGhpcy5zb3J0aW5nVHlwZSA9ICdub3RoaW5nJ1xyXG5cclxuICAgICAgICB0aGlzLiNfZ2V0RWxlbWVudHMoKVxyXG4gICAgICAgIHRoaXMuI19zZXRFdmVudHMoKVxyXG4gICAgICAgIHRoaXMuI19yZW5kZXJQcm9kdWN0c0xpc3QoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ldGhvZHMgb2YgY29uc3RydWN0b3JcclxuXHJcbiAgICAjX2dldEVsZW1lbnRzKCkge1xyXG4gICAgICAgIC8vIGFkZCBwcm9kdWN0IGZvcm1cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmFkZEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtZm9ybS1hZGRdJylcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmFkZEZvcm1TdWJtaXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtZm9ybS1hZGQtc3VibWl0XScpXHJcblxyXG4gICAgICAgIC8vIGxpc3Qgb2YgcHJvZHVjdHNcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWxpc3RdJylcclxuXHJcbiAgICAgICAgLy8gYnV0dG9uIGNsZWFyaW5nIGxpc3QgYW5kIHN0b3JhZ2VcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5jbGVhckJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1idXR0b24tY2xlYXJdJylcclxuXHJcbiAgICAgICAgLy8gc2VsZWN0IHNvcnQgdHlwZVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnNvcnRpbmdUeXBlU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLXNlbGVjdC1zb3J0LXR5cGVdJylcclxuXHJcbiAgICAgICAgLy8gZWRpdCBwcm9kdWN0IGZvcm1cclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdERpYWxvZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcy1kaWFsb2ctZWRpdC1wcm9kdWN0XScpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtZm9ybS1lZGl0LXByb2R1Y3RdJylcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0Rm9ybUNsb3NlQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWJ1dHRvbi1jaGFuZ2UtY2xvc2VdJylcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0Rm9ybUlERWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzLWZvcm0tZWRpdC1pZF0nKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuZWRpdFByb2R1Y3RGb3JtVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtZm9ybS1lZGl0LXRpdGxlXScpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdEZvcm1TdWJtaXRCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanMtZm9ybS1lZGl0LXN1Ym1pdF0nKVxyXG4gICAgfVxyXG5cclxuICAgICNfc2V0RXZlbnRzKCkge1xyXG4gICAgICAgIC8vIGFkZCBwcm9kdWN0XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5hZGRGb3JtU3VibWl0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLiNfYWRkUHJvZHVjdCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgc3RvcmFnZSBhbmQgbGlzdFxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuY2xlYXJCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI19jbGVhclByb2R1Y3RzTGlzdCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY2hhbmdlIHNvcnQgdHlwZVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuc29ydGluZ1R5cGVTZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0aW5nVHlwZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3J0aW5nVHlwZSA9IHNvcnRpbmdUeXBlXHJcblxyXG4gICAgICAgICAgICB0aGlzLiNfcmVuZGVyUHJvZHVjdHNMaXN0KClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0Rm9ybUNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdERpYWxvZ0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdvcGVuJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0Rm9ybVN1Ym1pdEJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdEZvcm1FbGVtZW50KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZWxlbWVudHMuZWRpdFByb2R1Y3REaWFsb2dFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1kaWFsb2ctZWRpdC1wcm9kdWN0JykpKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByb3BlcnRpZXMgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFByb3BlcnRpZXMucHVzaCh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UHJvcGVydGllcy5wdXNoKHByb2R1Y3Rba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdChwcm9kdWN0LmlkLCBwcm9kdWN0UHJvcGVydGllc1swXSwgcHJvZHVjdFByb3BlcnRpZXNbMV0sIHByb2R1Y3RQcm9wZXJ0aWVzWzJdLCBwcm9kdWN0UHJvcGVydGllc1szXSwgcHJvZHVjdFByb3BlcnRpZXNbNF0pXHJcblxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvZHVjdC5pZCwgSlNPTi5zdHJpbmdpZnkobmV3UHJvZHVjdCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0RGlhbG9nRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jX3JlbmRlclByb2R1Y3RzTGlzdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBiYXNpYyBtZXRob2RzXHJcblxyXG4gICAgLy9tZXRob2QgYWRkcyBuZXcgcHJvZHVjdCB0byBsb2NhbHN0b3JhZ2UgYW5kIHRvIHByb2R1Y3QgZWxlbWVudHMgbGlzdFxyXG4gICAgYXN5bmMgI19hZGRQcm9kdWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1PZkFkZGluZ1Byb2R1Y3QgPSBuZXcgRm9ybURhdGEodGhpcy5lbGVtZW50cy5hZGRGb3JtRWxlbWVudClcclxuXHJcbiAgICAgICAgLy8gcHJvZHVjdCB2YWx1ZXNcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBJRCA9IERhdGUubm93KClcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtT2ZBZGRpbmdQcm9kdWN0LmdldCgndGl0bGUnKVxyXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1PZkFkZGluZ1Byb2R1Y3QuZ2V0KCdkZXNjcmlwdGlvbicpXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZm9ybU9mQWRkaW5nUHJvZHVjdC5nZXQoJ2NhdGVnb3J5JylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cy8ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCl9YClcclxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5wcmljZVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSBmb3JtT2ZBZGRpbmdQcm9kdWN0LmdldCgnY291bnQnKVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aXRsZSB8fCAhZGVzY3JpcHRpb24gfHwgIWNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbnQgYWRkIHByb2R1Y3Qgd2l0aG91dCBmdWxsIGRhdGFgKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3QoSUQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIHByaWNlLCBjb3VudClcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJRCwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpIC8vIGFkZGluZyBwcm9kdWN0IHRvIGxvY2FsU3RvcmFnZVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jX3JlbmRlclByb2R1Y3RzTGlzdCgpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1ldGhvZCByZW5kZXJzIGFsbCBwcm9kdWN0IGVsZW1lbnRzIGxpc3QgKGJhc2VkIG9uIHRoZSBzb3J0IHR5cGUpXHJcblxyXG4gICAgI19yZW5kZXJQcm9kdWN0c0xpc3QoKSB7XHJcbiAgICAgICAgLy8gYXQgZmlyc3QgY2xlYW5pbmcgcHJldmlvdXMgbGlzdCBvZiBwcm9kdWN0c1xyXG4gICAgICAgIHRoaXMuI19jbGVhclByb2R1Y3RzTGlzdCgpXHJcblxyXG4gICAgICAgIC8vIHJlbmRlcmluZyBwcm9kdWN0cyAuLi5cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNvcnRpbmdUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ25vdGhpbmcnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGhpbmcnKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLnNvcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMubGlzdEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBwcm9kdWN0Lmh0bWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICdjYXRlZ29yeSc6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHBhcnNlZE9iamVjdC5jYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuY2F0ZWdvcnkgPCBiLmNhdGVnb3J5KSByZXR1cm4gLTFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS5jYXRlZ29yeSA+IGIuY2F0ZWdvcnkpIHJldHVybiAxXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtc1tpXS5rZXkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxpc3RFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdC5odG1sKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAncHVyY2hhc2VkJzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHB1cmNoYXNlZEtleXMgPSBPYmplY3Qua2V5cyh3aW5kb3cubG9jYWxTdG9yYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVyY2hhc2VkUHJvZHVjdHMgPSBwdXJjaGFzZWRLZXlzLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNQdXJjaGFzZWQgPT09IHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHB1cmNoYXNlZFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5saXN0RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHByb2R1Y3QuaHRtbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ25vdFB1cmNoYXNlZCc6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBub3RQdXJjaGFzZWRLZXlzID0gT2JqZWN0LmtleXMod2luZG93LmxvY2FsU3RvcmFnZSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnNvcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vdFB1cmNoYXNlZFByb2R1Y3RzID0gbm90UHVyY2hhc2VkS2V5cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzUHVyY2hhc2VkID09PSBmYWxzZSlcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2Ygbm90UHVyY2hhc2VkUHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxpc3RFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgcHJvZHVjdC5odG1sKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gYWxsIHJlbmRlcmVkIHJlbW92ZS1idXR0b25zXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWJ1dHRvbi1yZW1vdmVdJylcclxuICAgICAgICByZW1vdmVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWpzLWJ1dHRvbi1yZW1vdmUnKVxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShpZClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiNfcmVuZGVyUHJvZHVjdHNMaXN0KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGFsbCByZW5kZXJlZCBlZGl0LWJ1dHRvbnNcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWJ1dHRvbi1lZGl0XScpXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1qcy1idXR0b24tZWRpdCcpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lZGl0UHJvZHVjdERpYWxvZ0VsZW1lbnQuc2V0QXR0cmlidXRlKCdvcGVuJywgJycpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKSlcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmVkaXRQcm9kdWN0Rm9ybUlERWxlbWVudC50ZXh0Q29udGVudCA9IGBJRDogJHtwcm9kdWN0LmlkfWBcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZWRpdFByb2R1Y3REaWFsb2dFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1kaWFsb2ctZWRpdC1wcm9kdWN0JywgcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZWRpdFByb2R1Y3RGb3JtVGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvZHVjdC50aXRsZVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuI19yZW5kZXJQcm9kdWN0c0xpc3QoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gYWxsIHJlbmRlcmVkIHJlbW92ZS1idXR0b25zXHJcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWpzLWNoZWNrYm94LWlzLXB1cmNoYXNlZF0nKVxyXG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtY2hlY2tib3gtaXMtcHVyY2hhc2VkJylcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuaXNQdXJjaGFzZWQgPSAhcHJvZHVjdC5pc1B1cmNoYXNlZFxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4jX3JlbmRlclByb2R1Y3RzTGlzdCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSWQgPSBjaGVja2JveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtY2hlY2tib3gtaXMtcHVyY2hhc2VkJylcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFByb2R1Y3QgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh1cGRhdGVkSWQpKVxyXG5cclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHVwZGF0ZWRQcm9kdWN0Py5pc1B1cmNoYXNlZCB8fCBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWV0aG9kIHJlbW92ZXMgYWxsIHByb2R1Y3QgZWxlbWVudHMgbGlzdFxyXG5cclxuICAgICNfY2xlYXJQcm9kdWN0c0xpc3QoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcy1wcm9kdWN0XScpXHJcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5saXN0RWxlbWVudC5yZW1vdmVDaGlsZChwcm9kdWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BwaW5nTGlzdEhhbmRsZXIiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3JlbW92ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvY3Jvc3MucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcblxubm9ybWFsaXplIC0g0YTQsNC50Lsg0YEg0L3QvtGA0LzQsNC70LjQt9Cw0YbQuNC10Lkg0YHRgtC40LvQtdC5INC00LvRjyDRgdGC0LDQvdC00LDRgNGC0L3Ri9GFINGB0LXQu9C10LrRgtC+0YDQvtCyXG5cbtGB0YHRi9C70LrQsCDQvdCwINC40YHRgtC+0YfQvdC40LogLSBodHRwczovL2dpdGh1Yi5jb20vYWxla3NhbmRlcmxhbWtvdi9wb3NpdGl2dXMvYmxvYi9tYWluL3N0eWxlcy9fbm9ybWFsaXplLnNjc3NcblxuXG4qL1xuLyoqXG4gINCd0L7RgNC80LDQu9C40LfQsNGG0LjRjyDQsdC70L7Rh9C90L7QuSDQvNC+0LTQtdC70LhcbiAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyoqXG4gICDQo9Cx0LjRgNCw0LXQvCDQstC90YPRgtGA0LXQvdC90LjQtSDQvtGC0YHRgtGD0L/RiyDRgdC70LXQstCwINGC0LXQs9Cw0Lwg0YHQv9C40YHQutC+0LIsXG4gICDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuOndoZXJlKHVsLCBvbCk6d2hlcmUoW2NsYXNzXSkge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdC10YjQvdC40LUg0L7RgtGB0YLRg9C/0YsgYm9keSDQuCDQtNCy0YPQvCDQtNGA0YPQs9C40Lwg0YLQtdCz0LDQvCxcbiAgINGDINC60L7RgtC+0YDRi9GFINC10YHRgtGMINCw0YLRgNC40LHRg9GCIGNsYXNzXG4gICovXG5ib2R5LFxuOndoZXJlKGJsb2NrcXVvdGUsIGZpZ3VyZSk6d2hlcmUoW2NsYXNzXSkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICAg0KPQsdC40YDQsNC10Lwg0LLQvdC10YjQvdC40LUg0L7RgtGB0YLRg9C/0Ysg0LLQtdGA0YLQuNC60LDQu9C4INC90YPQttC90YvQvCDRgtC10LPQsNC8LFxuICAg0YMg0LrQvtGC0L7RgNGL0YUg0LXRgdGC0Ywg0LDRgtGA0LjQsdGD0YIgY2xhc3NcbiAgKi9cbjp3aGVyZShoMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxudWwsXG5vbCxcbmRsKTp3aGVyZShbY2xhc3NdKSB7XG4gIG1hcmdpbi1ibG9jazogMDtcbn1cblxuOndoZXJlKGRkW2NsYXNzXSkge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuOndoZXJlKGZpZWxkc2V0W2NsYXNzXSkge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKipcbiAgINCj0LHQuNGA0LDQtdC8INGB0YLQsNC90LTQsNGA0YLQvdGL0Lkg0LzQsNGA0LrQtdGAINC80LDRgNC60LjRgNC+0LLQsNC90L3QvtC80YMg0YHQv9C40YHQutGDLFxuICAg0YMg0LrQvtGC0L7RgNC+0LPQviDQtdGB0YLRjCDQsNGC0YDQuNCx0YPRgiBjbGFzc1xuICAqL1xuOndoZXJlKHVsW2NsYXNzXSkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKipcbiAgINCe0LHQvdGD0LvRj9C10Lwg0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C1INCy0L3QtdGI0L3QuNC1INC+0YLRgdGC0YPQv9GLINC/0LDRgNCw0LPRgNCw0YTQsCxcbiAgINC+0LHRitGP0LLQu9GP0LXQvCDQu9C+0LrQsNC70YzQvdGD0Y4g0L/QtdGA0LXQvNC10L3QvdGD0Y4g0LTQu9GPINCy0L3QtdGI0L3QtdCz0L4g0L7RgtGB0YLRg9C/0LAg0LLQvdC40LcsXG4gICDRh9GC0L7QsdGLINC40LfQsdC10LbQsNGC0Ywg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQtSDRgSDQsdC+0LvQtdC1INGB0LvQvtC20L3Ri9C8INGB0LXQu9C10LrRgtC+0YDQvtC8XG4gICovXG5wIHtcbiAgLS1wYXJhZ3JhcGhNYXJnaW5Cb3R0b206IDI0cHg7XG4gIG1hcmdpbi1ibG9jazogMDtcbn1cblxuLyoqXG4gICDQktC90LXRiNC90LjQuSDQvtGC0YHRgtGD0L8g0LLQvdC40Lcg0LTQu9GPINC/0LDRgNCw0LPRgNCw0YTQsCDQsdC10Lcg0LDRgtGA0LjQsdGD0YLQsCBjbGFzcyxcbiAgINC60L7RgtC+0YDRi9C5INGA0LDRgdC/0L7Qu9C+0LbQtdC9INC90LUg0L/QvtGB0LvQtdC00L3QuNC8INGB0YDQtdC00Lgg0YHQstC+0LjRhSDRgdC+0YHQtdC00L3QuNGFINGN0LvQtdC80LXQvdGC0L7QslxuICAqL1xucDp3aGVyZSg6bm90KFtjbGFzc10pOm5vdCg6bGFzdC1jaGlsZCkpIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFyYWdyYXBoTWFyZ2luQm90dG9tKTtcbn1cblxuLyoqXG4gICDQo9C/0YDQvtGJ0LDQtdC8INGA0LDQsdC+0YLRgyDRgSDQuNC30L7QsdGA0LDQttC10L3QuNGP0LzQuFxuICAqL1xuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyoqXG4gICDQndCw0YHQu9C10LTRg9C10Lwg0YHQstC+0LnRgdGC0LLQsCDRiNGA0LjRhNGCINC00LvRjyDQv9C+0LvQtdC5INCy0LLQvtC00LBcbiAgKi9cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgLyoqXG4gICDQn9GA0LjQs9C+0LTQuNGC0YHRjyDQsiDQsdC+0LvRjNGI0LjQvdGB0YLQstC1INGB0LjRgtGD0LDRhtC40LlcbiAgICjQutC+0LPQtNCwLCDQvdCw0L/RgNC40LzQtdGALCDQvdGD0LbQvdC+INCx0YPQtNC10YIgXCLQv9GA0LjQttCw0YLRjFwiINGE0YPRgtC10YAg0Log0L3QuNC30YMg0YHQsNC50YLQsClcbiAgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKipcbiAgINCf0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuICAqL1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIC8qKlxuICAg0J/RgNC40LPQvtC00LjRgtGB0Y8g0LIg0LHQvtC70YzRiNC40L3RgdGC0LLQtSDRgdC40YLRg9Cw0YbQuNC5XG4gICAo0LrQvtCz0LTQsCwg0L3QsNC/0YDQuNC80LXRgCwg0L3Rg9C20L3QviDQsdGD0LTQtdGCIFwi0L/RgNC40LbQsNGC0YxcIiDRhNGD0YLQtdGAINC6INC90LjQt9GDINGB0LDQudGC0LApXG4gICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIC8qKlxuICAg0KPQvdC40YTQuNGG0LjRgNC+0LLQsNC90L3Ri9C5INC40L3RgtC10YDQu9C40L3RjNGP0LZcbiAgKi9cbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyoqXG4gICDQn9GA0LjQstC+0LTQuNC8INC6INC10LTQuNC90L7QvNGDINGG0LLQtdGC0YMgc3ZnLdGN0LvQtdC80LXQvdGC0YtcbiAgKi9cbnN2ZyAqW2ZpbGxdIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5zdmcgKltzdHJva2VdIHtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG59XG5cbi8qKlxuICAg0KfQuNC90LjQvCDQsdCw0LMg0LfQsNC00LXRgNC20LrQuCDRgdC80LXQvdGLINGG0LLQtdGC0LAg0L/RgNC4INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40Lgg0YEgc3ZnLdGN0LvQtdC80LXQvdGC0LDQvNC4XG4gICovXG5zdmcgKiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGZpbGwsIHN0cm9rZTtcbn1cblxuLyoqXG4gICDQo9C00LDQu9GP0LXQvCDQstGB0LUg0LDQvdC40LzQsNGG0LjQuCDQuCDQv9C10YDQtdGF0L7QtNGLINC00LvRjyDQu9GO0LTQtdC5LFxuICAg0LrQvtGC0L7RgNGL0LUg0L/RgNC10LTQv9C+0YfQuNGC0LDRjtGCINC40YUg0L3QtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YxcbiAgKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICoge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAtLWludGVyZmFjZS1jb2xvcjogI0M0QzRDNDtcbiAgLS1lbGVtZW50LWNvbG9yOiAjQUJBQkFCO1xuICAtLXRleHQtY29sb3I6ICMwMDAwMDA7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc2hvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuLnNob3BfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxNDQwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG4uc2hvcF9fcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNob3BfX2NvbHVtbiB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2hvcF9fc2hvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEuNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnRlcmZhY2UtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnNob3BfX2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudC1jb2xvcik7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG59XG5cbi5saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGhlaWdodDogMzd2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5saXN0X19idXR0b24tLWNsZWFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvZHVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtY29sb3IpO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wcm9kdWN0X190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5wcm9kdWN0X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0X19jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0X19wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0X19jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0X19wcmljZS0tdG90YWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdF9fd3JhcC0taXMtcHVyY2hhc2VkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0X193cmFwLS1pcy1wdXJjaGFzZWQgbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdF9fY2hlY2tib3gtLWlzLXB1cmNoYXNlZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDEycHg7XG59XG4ucHJvZHVjdF9fd3JhcC0tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDEwcHg7XG59XG4ucHJvZHVjdF9fYnV0dG9uLS1lZGl0IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5wcm9kdWN0X19idXR0b24tLXJlbW92ZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtY29sb3IpO1xufVxuLmNvbnRyb2xfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBnYXA6IDEwcHg7XG59XG4uZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uZm9ybV9fd3JhcC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm1fX3dyYXAtY29udGVudCBpbnB1dCxcbi5mb3JtX193cmFwLWNvbnRlbnQgc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDBweDtcbn1cbi5mb3JtX19pbnB1dC0tc3VibWl0IHtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpYWxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgd2lkdGg6IDIwJTtcbn1cbi5kaWFsb2ctLXdpZGUge1xuICB3aWR0aDogMzAlO1xufVxuXG4udG90YWxfX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG90YWxfX2J1dHRvbi0tY2xvc2Uge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jaGFuZ2VfX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhbmdlX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jaGFuZ2VfX2J1dHRvbi0tY2xvc2Uge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX25vcm1hbGl6ZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztDQUFBO0FBU0E7O0VBQUE7QUFHQTs7O0VBR0ksc0JBQUE7QURDSjs7QUNFQTs7O0dBQUE7QUFJQTtFQUNJLGVBQUE7QURDSjs7QUNFQTs7O0dBQUE7QUFJQTs7RUFFSSxTQUFBO0FEQ0o7O0FDRUE7OztHQUFBO0FBSUE7Ozs7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STtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQXVJUjs7QUFuSUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0FBc0lKO0FBL0hBO0VBQ0ksVUFBQTtBQWlJSjs7QUE3SEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWdJUjtBQTdISTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQStIUjs7QUExSEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQTZIUjtBQTFISTtFQUNJLGVBQUE7QUE0SFI7QUF6SEk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUEySFJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnXHJcbmltcG9ydCBTaG9wcGluZ0xpc3RIYW5kbGVyIGZyb20gJy4vY29tcG9uZW50cy9TaG9wcGluZ0xpc3RIYW5kbGVyJ1xyXG5cclxubmV3IFNob3BwaW5nTGlzdEhhbmRsZXIoKSJdLCJuYW1lcyI6WyJQcm9kdWN0IiwiX2NyZWF0ZUNsYXNzIiwiSUQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJwcmljZSIsImNvdW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX1Byb2R1Y3RfYnJhbmQiLCJpZCIsInRvdGFsUHJpY2UiLCJpc1B1cmNoYXNlZCIsImh0bWwiLCJjb25jYXQiLCJfZ2V0RWxlbWVudHMiLCJfc2V0RXZlbnRzIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX24iLCJGIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiX2RlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24iLCJhZGQiLCJoYXMiLCJfYXNzZXJ0Q2xhc3NCcmFuZCIsIl9TaG9wcGluZ0xpc3RIYW5kbGVyX2JyYW5kIiwiV2Vha1NldCIsIlNob3BwaW5nTGlzdEhhbmRsZXIiLCJlbGVtZW50cyIsInNvcnRpbmdUeXBlIiwiX3JlbmRlclByb2R1Y3RzTGlzdCIsImFkZEZvcm1FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRm9ybVN1Ym1pdEVsZW1lbnQiLCJsaXN0RWxlbWVudCIsImNsZWFyQnV0dG9uRWxlbWVudCIsInNvcnRpbmdUeXBlU2VsZWN0RWxlbWVudCIsImVkaXRQcm9kdWN0RGlhbG9nRWxlbWVudCIsImVkaXRQcm9kdWN0Rm9ybUVsZW1lbnQiLCJlZGl0UHJvZHVjdEZvcm1DbG9zZUJ1dHRvbkVsZW1lbnQiLCJlZGl0UHJvZHVjdEZvcm1JREVsZW1lbnQiLCJlZGl0UHJvZHVjdEZvcm1UaXRsZUVsZW1lbnQiLCJlZGl0UHJvZHVjdEZvcm1TdWJtaXRCdXR0b25FbGVtZW50IiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIl9hZGRQcm9kdWN0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJfY2xlYXJQcm9kdWN0c0xpc3QiLCJ0YXJnZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicHJvZHVjdCIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJwcm9kdWN0UHJvcGVydGllcyIsIl9pdGVyYXRvciIsImVudHJpZXMiLCJfc3RlcCIsIl9zdGVwJHZhbHVlIiwidHJpbSIsImVyciIsIm5ld1Byb2R1Y3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiX2FkZFByb2R1Y3QyIiwiX2NhbGxlZSIsImZvcm1PZkFkZGluZ1Byb2R1Y3QiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJEYXRlIiwibm93IiwiZ2V0IiwiZmV0Y2giLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJqc29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwiX3RoaXMyIiwic29ydCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpdGVtcyIsIm1hcCIsInBhcnNlZE9iamVjdCIsImIiLCJwdXJjaGFzZWRLZXlzIiwicHVyY2hhc2VkUHJvZHVjdHMiLCJmaWx0ZXIiLCJpdGVtIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIm5vdFB1cmNoYXNlZEtleXMiLCJub3RQdXJjaGFzZWRQcm9kdWN0cyIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJyZW1vdmVCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInJlbW92ZUl0ZW0iLCJlZGl0QnV0dG9uIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJ1cGRhdGVkSWQiLCJ1cGRhdGVkUHJvZHVjdCIsImNoZWNrZWQiLCJfdGhpczMiLCJwcm9kdWN0cyIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==