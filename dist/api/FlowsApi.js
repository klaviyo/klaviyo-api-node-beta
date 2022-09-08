"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowsApi = void 0;

var _ApiClient = require("../ApiClient.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Flows service.
* @module api/FlowsApi
* @version 2022-09-07.pre
*/
var FlowsApi = /*#__PURE__*/_createClass(
/**
* Constructs a new FlowsApi. 
* @alias module:api/FlowsApi
* @class
* @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
* default to {@link module:ApiClient#instance} if unspecified.
*/
function FlowsApi(apiClient) {
  var _this = this;

  _classCallCheck(this, FlowsApi);

  _defineProperty(this, "apiClient", void 0);

  _defineProperty(this, "getFlow", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlow");

            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv'),
                'fields[flow]': _this.apiClient.buildCollectionParam(opts['fieldsFlow'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context.abrupt("return", _this.apiClient.callApi('/api/flows/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowAction", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context2.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlowAction");

            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv'),
                'fields[flow-message]': _this.apiClient.buildCollectionParam(opts['fieldsFlowMessage'], 'csv'),
                'fields[flow]': _this.apiClient.buildCollectionParam(opts['fieldsFlow'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context2.abrupt("return", _this.apiClient.callApi('/api/flow-actions/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowActionFlow", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(actionId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'actionId' is set

              if (!(actionId === undefined || actionId === null)) {
                _context3.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'actionId' when calling getFlowActionFlow");

            case 4:
              pathParams = {
                'action_id': actionId
              };
              queryParams = {
                'fields[flow]': _this.apiClient.buildCollectionParam(opts['fieldsFlow'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context3.abrupt("return", _this.apiClient.callApi('/api/flow-actions/{action_id}/flow/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowActionMessages", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(actionId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'actionId' is set

              if (!(actionId === undefined || actionId === null)) {
                _context4.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'actionId' when calling getFlowActionMessages");

            case 4:
              pathParams = {
                'action_id': actionId
              };
              queryParams = {
                'fields[flow-message]': _this.apiClient.buildCollectionParam(opts['fieldsFlowMessage'], 'csv'),
                'filter': opts['filter'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context4.abrupt("return", _this.apiClient.callApi('/api/flow-actions/{action_id}/flow-messages/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowActionRelationships", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id, relatedResource, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context5.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlowActionRelationships");

            case 4:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context5.next = 6;
                break;
              }

              throw new Error("Missing the required parameter 'relatedResource' when calling getFlowActionRelationships");

            case 6:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {
                'filter': opts['filter'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context5.abrupt("return", _this.apiClient.callApi('/api/flow-actions/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x9, _x10, _x11) {
      return _ref5.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowFlowActions", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(flowId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'flowId' is set

              if (!(flowId === undefined || flowId === null)) {
                _context6.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'flowId' when calling getFlowFlowActions");

            case 4:
              pathParams = {
                'flow_id': flowId
              };
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv'),
                'filter': opts['filter'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context6.abrupt("return", _this.apiClient.callApi('/api/flows/{flow_id}/flow-actions/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x12, _x13) {
      return _ref6.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowMessage", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context7.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlowMessage");

            case 4:
              pathParams = {
                'id': id
              };
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv'),
                'fields[flow-message]': _this.apiClient.buildCollectionParam(opts['fieldsFlowMessage'], 'csv'),
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context7.abrupt("return", _this.apiClient.callApi('/api/flow-messages/{id}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x14, _x15) {
      return _ref7.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowMessageAction", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(messageId, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'messageId' is set

              if (!(messageId === undefined || messageId === null)) {
                _context8.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'messageId' when calling getFlowMessageAction");

            case 4:
              pathParams = {
                'message_id': messageId
              };
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv')
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context8.abrupt("return", _this.apiClient.callApi('/api/flow-messages/{message_id}/flow-action/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 13:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function (_x16, _x17) {
      return _ref8.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowMessageRelationships", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id, relatedResource) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context9.next = 3;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlowMessageRelationships");

            case 3:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context9.next = 5;
                break;
              }

              throw new Error("Missing the required parameter 'relatedResource' when calling getFlowMessageRelationships");

            case 5:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context9.abrupt("return", _this.apiClient.callApi('/api/flow-messages/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 14:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function (_x18, _x19) {
      return _ref9.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlowRelationships", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id, relatedResource, opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              opts = opts || {};
              postBody = null; // verify the required parameter 'id' is set

              if (!(id === undefined || id === null)) {
                _context10.next = 4;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling getFlowRelationships");

            case 4:
              if (!(relatedResource === undefined || relatedResource === null)) {
                _context10.next = 6;
                break;
              }

              throw new Error("Missing the required parameter 'relatedResource' when calling getFlowRelationships");

            case 6:
              pathParams = {
                'id': id,
                'related_resource': relatedResource
              };
              queryParams = {
                'filter': opts['filter'],
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context10.abrupt("return", _this.apiClient.callApi('/api/flows/{id}/relationships/{related_resource}/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 15:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function (_x20, _x21, _x22) {
      return _ref10.apply(this, arguments);
    };
  }());

  _defineProperty(this, "getFlows", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(opts) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              opts = opts || {};
              postBody = null;
              pathParams = {};
              queryParams = {
                'fields[flow-action]': _this.apiClient.buildCollectionParam(opts['fieldsFlowAction'], 'csv'),
                'fields[flow]': _this.apiClient.buildCollectionParam(opts['fieldsFlow'], 'csv'),
                'filter': opts['filter'],
                'include': _this.apiClient.buildCollectionParam(opts['include'], 'csv'),
                'sort': opts['sort']
              };
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = [];
              accepts = ['application/json'];
              returnType = Object;
              return _context11.abrupt("return", _this.apiClient.callApi('/api/flows/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 11:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x23) {
      return _ref11.apply(this, arguments);
    };
  }());

  _defineProperty(this, "updateFlow", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(body, id) {
      var postBody, pathParams, queryParams, headerParams, formParams, authNames, contentTypes, accepts, returnType;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              postBody = body; // verify the required parameter 'body' is set

              if (!(body === undefined || body === null)) {
                _context12.next = 3;
                break;
              }

              throw new Error("Missing the required parameter 'body' when calling updateFlow");

            case 3:
              if (!(id === undefined || id === null)) {
                _context12.next = 5;
                break;
              }

              throw new Error("Missing the required parameter 'id' when calling updateFlow");

            case 5:
              pathParams = {
                'id': id
              };
              queryParams = {};
              headerParams = {};
              formParams = {};
              authNames = ['Klaviyo-API-Key'];
              contentTypes = ['application/json'];
              accepts = ['application/json'];
              returnType = Object;
              return _context12.abrupt("return", _this.apiClient.callApi('/api/flows/{id}/', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
                return response_and_data.data;
              }));

            case 14:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function (_x24, _x25) {
      return _ref12.apply(this, arguments);
    };
  }());

  this.apiClient = apiClient || _ApiClient.ApiClient.instance;
}
/**
 * Get Flow
 * Get a flow by id&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;3/s&#x60;&lt;br&gt;Steady: &#x60;60/m&#x60;
 * @param {<&vendorExtensions.x-jsdoc-type>} id 
 * @param {Object} opts Optional parameters
 * @param {Array.<module:model/String>} opts.fieldsFlowAction For more information please visit https://developers.klaviyo.com/en/v2022-09-07.pre/reference/api-overview#filtering
 * @param {Array.<module:model/String>} opts.fieldsFlow For more information please visit https://developers.klaviyo.com/en/v2022-09-07.pre/reference/api-overview#filtering
 * @param {Array.<module:model/String>} opts.include For more information please visit https://developers.klaviyo.com/en/v2022-09-07.pre/reference/api-overview#relationships
 * @return {Promise} a {@link https://www.promisejs.org/|Promise}
 */
);

exports.FlowsApi = FlowsApi;