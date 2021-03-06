/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../06-ui-router/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../jinge-framework/lib/components/class.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/class.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");




function loopOperateClass(el, isAddOperate, domClass) {
    if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(el)) {
        el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(ce => loopOperateClass(ce, isAddOperate, domClass));
    }
    else if (isAddOperate) {
        el.classList.add(domClass);
    }
    else {
        el.classList.remove(domClass);
    }
}
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(attrs.class)) {
        throw new Error('<toggle-class> component require "class" attribute to be Object.');
      }
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.domClass = attrs.class;
      };
      fn_2_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class', fn_2_c3fa96703a3c);
      const fn_3_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.transition = !!attrs.transition;
      };
      fn_3_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_3_c3fa96703a3c);
      __vm_c3fa96703a3c._t = null;
      __vm_c3fa96703a3c._i = -1;
      __vm_c3fa96703a3c[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class.**', () => {
        __vm_c3fa96703a3c.__updateIfNeed();
      });
    }
    __render() {
        const rr = super.__render();
        this.__update(true);
        return rr;
    }
    __beforeDestroy() {
        this._t = null; // maybe unnecessary
    }
    __update(first) {
        const el = this.transition ? this.__transitionDOM : null;
        if (el && el.nodeType !== Node.ELEMENT_NODE) {
            // ignore comment or text-node
            return;
        }
        if (this.transition && !this._t) {
            this._t = new Map();
        }
        const cs = this.domClass;
        Object.keys(cs).forEach(k => {
            const v = cs[k];
            if (!this.transition) {
                loopOperateClass(this, !!v, k);
                return;
            }
            if (first) {
                this._t.set(k, [
                    v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                    null // saved onEnd callback
                ]);
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const t = this._t.get(k);
            if (!t) {
                // eslint-disable-next-line no-console
                console.error('Unsupport <toogle-class> attribute. see https://todo');
                return;
            }
            const s = t[0];
            if ((v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) || (!v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING)) {
                return;
            }
            if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING)) {
                el.classList.remove(k + (v ? '-leave-active' : '-enter-active'));
                el.classList.remove(k + (v ? '-leave' : '-enter'));
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', t[1]);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', t[1]);
                t[1] = null;
                this.__notify('transition', v ? 'leave-cancelled' : 'enter-cancelled', k, el);
            }
            const classOfStart = k + (v ? '-enter' : '-leave');
            const classOfActive = k + (v ? '-enter-active' : '-leave-active');
            el.classList.add(classOfStart);
            // force render by calling getComputedStyle
            Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            el.classList.add(classOfActive);
            const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            if (!tsEndName) {
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const onEnd = () => {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', onEnd);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', onEnd);
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[1] = null;
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                this.__notify('transition', v ? 'after-enter' : 'after-leave', k, el);
            };
            t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
            t[1] = onEnd;
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
            this.__notify('transition', v ? 'before-enter' : 'before-leave', k, el);
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
                this.__notify('transition', v ? 'enter' : 'leave', k, el);
            });
        });
    }
}
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/dynamic.js":
/*!**************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/dynamic.js ***!
  \**************************************************************************************/
/*! exports provided: DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return DynamicRenderComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(component) {
    const Clazz = component._r._component;
    const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs;
    const attrs = Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context
        }
    });
    for (const attrName in pAttrs) {
        attrs[attrName] = pAttrs[attrName];
    }
    component._currentAttrs = attrs;
    const el = new Clazz(attrs);
    const parentStyleIds = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(attrs.render) || !Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(attrs.render._component)) {
        throw new Error('<dynamic> component require "render" attribute to be object with "_component" property.');
      }
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c3fa96703a3c._currentAttrs = null;
      const fn_3_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.render = attrs.render;
      };
      fn_3_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('render', fn_3_c3fa96703a3c);
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('*', prop => {
        __vm_c3fa96703a3c._currentAttrs[prop[0]] = __vm_c3fa96703a3c[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs[prop[0]];
      });
    }
    get render() {
        return this._r;
    }
    set render(v) {
        if (this._r === v || this._r._component === v._component)
            return;
        this.__updateIfNeed();
    }
    __render() {
        const el = createEl(this);
        return el.__render();
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const el = roots[0];
        const fd = el.__firstDOM;
        const pa = fd.parentNode;
        const newEl = createEl(this);
        roots[0] = newEl;
        const nels = newEl.__render();
        pa.insertBefore(nels.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(nels) : nels[0], fd);
        el.__destroy();
        newEl.__handleAfterRender();
    }
}
//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/for.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/for.js ***!
  \**********************************************************************************/
/*! exports provided: ForEachComponent, ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return ForEachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, item, index, isLast) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(item)) {
        __vm_c3fa96703a3c.each = item;
      } else {
        __vm_c3fa96703a3c._e = item;
      }
      __vm_c3fa96703a3c.index = index;
      __vm_c3fa96703a3c.isFirst = index === 0;
      __vm_c3fa96703a3c.isLast = isLast;
    }
    get each() {
        return this._e;
    }
    set each(v) {
        this._e = v;
    }
    __render() {
        return this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots.default(this);
    }
}
function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
    const el = new ForEachComponent(Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context,
            slots: {
                default: itemRenderFn
            }
        }
    }), item, i, isLast);
    if (cstyPid) {
        el.__addStylePid(cstyPid);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
    const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
    roots.push(el);
    return el.__render();
}
// function _assertVm(item, i) {
//   if (isObject(item) && !isInnerObj(item) && !(VM_ATTRS in item)) {
//     throw new Error(`loop item [${i}] of <for> component must be ViewModel.`);
//   }
// }
function _prepareKey(item, i, keyMap, keyName) {
    const key = keyName === 'each' ? item : keyName(item);
    if (keyMap.has(key)) {
        // eslint-disable-next-line no-console
        console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
    }
    keyMap.set(key, i);
    return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context, cstyPid) {
    const result = [];
    const tmpKeyMap = new Map();
    items.forEach((item, i) => {
        // _assertVm(item, i);
        if (keyName !== 'index') {
            keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
        }
        result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, cstyPid));
    });
    return result;
}
function loopAppend($parent, el) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(node => {
        if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(node)) {
            loopAppend($parent, node);
        }
        else {
            $parent.appendChild(node);
        }
    });
}
function updateEl(el, i, items) {
    if (el.isFirst !== (i === 0)) {
        el.isFirst = i === 0;
    }
    if (el.isLast !== (i === items.length - 1)) {
        el.isLast = (i === items.length - 1);
    }
    if (el.index !== i) {
        el.index = i;
    }
    if (el.each !== items[i]) {
        el.each = items[i];
    }
}
function _parseIndexPath(p) {
    return (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(p) && p !== 'length' && /^\d+$/.test(p)) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
        throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
      }
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(attrs.loop)) {
        __vm_c3fa96703a3c.loop = attrs.loop;
      } else {
        __vm_c3fa96703a3c._l = attrs.loop;
      }
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop', () => {
        __vm_c3fa96703a3c.loop = attrs.loop;
      });
      const kn = attrs.key || 'index';
      __vm_c3fa96703a3c._keyName = kn;
      __vm_c3fa96703a3c._length = 0;
      __vm_c3fa96703a3c._keys = null;
      __vm_c3fa96703a3c._waitingUpdate = false;
      if (kn !== 'index' && kn !== 'each') {
        __vm_c3fa96703a3c._keyName = new Function('each', `return ${ kn }`);
        const propCount = kn.split('.').length + 1;
        __vm_c3fa96703a3c[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*.' + kn.slice(5), propPath => {
          if (propPath.length !== propCount || __vm_c3fa96703a3c._waitingUpdate) {
            return;
          }
          const items = __vm_c3fa96703a3c.loop;
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0)
            return;
          const p = _parseIndexPath(propPath[1]);
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p) || p >= items.length) {
            return;
          }
          __vm_c3fa96703a3c._keys[p] = __vm_c3fa96703a3c._keyName(items[p]);
        });
      }
      __vm_c3fa96703a3c[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*', propPath => {
        if (__vm_c3fa96703a3c[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"].RENDERED || propPath.length !== 2 || __vm_c3fa96703a3c._waitingUpdate) {
          return;
        }
        const p = _parseIndexPath(propPath[1]);
        if (p === 'length') {
          __vm_c3fa96703a3c._waitingUpdate = true;
          __vm_c3fa96703a3c.__updateIfNeed();
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p)) {
          __vm_c3fa96703a3c._updateItem(p);
        }
      });
    }
    get loop() {
        return this._l;
    }
    set loop(v) {
        // console.log('set loop');
        this._l = v;
        this._waitingUpdate = true;
        this.__updateIfNeed();
    }
    __render() {
        var _a;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        const items = this.loop;
        const keyName = this._keyName;
        if (keyName !== 'index')
            this._keys = [];
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        this._length = items.length;
        return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
    }
    _updateItem(index) {
        var _a;
        const items = this.loop;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || index >= roots.length)
            return;
        const keys = this._keys;
        const item = items[index];
        const oldEl = roots[index];
        if (oldEl.each === item) {
            return;
        }
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        // console.log('update item:', index);
        const keyName = this._keyName;
        if (keyName !== 'index') {
            const newKey = keyName === 'each' ? item : keyName(item);
            const oldKey = keys[index];
            if (newKey !== oldKey) {
                const $fd = oldEl.__firstDOM;
                const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
                const rr = Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"])(newEl.__render());
                $fd.parentNode.insertBefore(rr.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rr) : rr[0], $fd);
                oldEl.__destroy();
                roots[index] = newEl;
                keys[index] = newKey;
                newEl.__handleAfterRender();
                // console.log('update item render:', index);
            }
            else {
                oldEl.each = item;
            }
        }
        else {
            oldEl.each = item;
        }
    }
    __update() {
        var _a;
        this._waitingUpdate = false;
        // console.log('for update');
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.loop) ? this.loop : [];
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const nl = newItems.length;
        const ol = this._length;
        // nothing changed, return directly.
        if (nl === 0 && ol === 0)
            return;
        const keyName = this._keyName;
        // if new length equal 0, clear & render comment.
        if (nl === 0 && ol > 0) {
            const fd = roots[0].__firstDOM;
            const $cmt = document.createComment('empty');
            fd.parentNode.insertBefore($cmt, fd);
            for (let i = 0; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.length = 1;
            roots[0] = $cmt;
            if (keyName !== 'index') {
                this._keys.length = 0;
            }
            this._length = 0;
            return;
        }
        this._length = nl;
        const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context;
        const cstyPid = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
        const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
        const $parent = (ol === 0 ? firstEl : firstEl.__firstDOM).parentNode;
        if (keyName === 'index') {
            let $f = null;
            if (ol === 0)
                roots.length = 0;
            for (let i = 0; i < nl; i++) {
                if (i < ol) {
                    updateEl(roots[i], i, newItems);
                }
                else {
                    if (!$f)
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid).forEach(el => {
                        $f.appendChild(el);
                    });
                }
            }
            if ($f) {
                const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
                Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, $f, $le);
                for (let i = ol; i < nl; i++) {
                    roots[i].__handleAfterRender();
                }
            }
            if (ol === 0) {
                $parent.removeChild(firstEl);
            }
            if (nl >= ol)
                return;
            for (let i = nl; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.splice(nl);
            return;
        }
        const oldKeys = this._keys;
        if (ol === 0) {
            roots.length = 0;
            const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
            Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rs), firstEl);
            $parent.removeChild(firstEl);
            roots.forEach(el => el.__handleAfterRender());
            return;
        }
        const oldKeyMap = new Map();
        oldKeys.forEach((k, i) => {
            oldKeyMap.set(k, i);
        });
        const newKeys = [];
        const newKeyMap = new Map();
        newItems.forEach((item, i) => {
            // _assertVm(item, i);
            newKeys.push(_prepareKey(item, i, newKeyMap, keyName));
        });
        let oi = 0;
        let ni = 0;
        let $lastS = null;
        const newRoots = [];
        const oldTags = new Uint8Array(ol);
        while (oi < ol || ni < nl) {
            while (oi < ol) {
                if (oldTags[oi] !== 0) {
                    oi++;
                }
                else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    break;
                }
                else {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    roots[oi].__destroy();
                    oi++;
                }
            }
            if (oi >= ol) {
                let $f = null;
                const cei = newRoots.length;
                for (; ni < nl; ni++) {
                    const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    if (!$f)
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    el.__render().forEach($n => $f.appendChild($n));
                    newRoots.push(el);
                }
                if ($f) {
                    if ($lastS) {
                        $parent.insertBefore($f, $lastS);
                    }
                    else {
                        $parent.appendChild($f);
                    }
                    for (let i = cei; i < newRoots.length; i++) {
                        newRoots[i].__handleAfterRender();
                    }
                }
                break;
            }
            const oldKey = oldKeys[oi];
            let $f = null;
            let $nes = null;
            while (ni < nl) {
                const newKey = newKeys[ni];
                if (newKey === oldKey)
                    break;
                let reuseEl = null;
                if (oldKeyMap.has(newKey)) {
                    const oldIdx = oldKeyMap.get(newKey);
                    if (oldIdx > oi && oldTags[oldIdx] === 0) {
                        reuseEl = roots[oldIdx];
                        oldTags[oldIdx] = 1;
                    }
                }
                if (!$f)
                    $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                if (!reuseEl) {
                    reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    reuseEl.__render().forEach($n => $f.appendChild($n));
                    if (!$nes)
                        $nes = [];
                    $nes.push(reuseEl);
                }
                else {
                    loopAppend($f, reuseEl);
                    updateEl(reuseEl, ni, newItems);
                }
                newRoots.push(reuseEl);
                ni++;
            }
            if (ni >= nl) {
                throw new Error('unimpossible?!');
            }
            const el = roots[oi];
            $f && $parent.insertBefore($f, el.__firstDOM);
            $nes && $nes.forEach(el => el.__handleAfterRender());
            updateEl(el, ni, newItems);
            newRoots.push(el);
            oi++;
            ni++;
        }
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newRoots;
        this._keys = newKeys;
    }
}
//# sourceMappingURL=for.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/hide.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/hide.js ***!
  \***********************************************************************************/
/*! exports provided: HideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return HideComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");



class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_2__["ToggleClassComponent"] {
    constructor(attrs) {
        attrs.class = Object(_vm_index__WEBPACK_IMPORTED_MODULE_1__["vm"])({
            'jg-hide': attrs.test
        });
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', () => {
            if (attrs.class['jg-hide'] !== attrs.test) {
                attrs.class['jg-hide'] = attrs.test;
            }
        });
        super(attrs);
    }
}
//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/html.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/html.js ***!
  \***********************************************************************************/
/*! exports provided: BindHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return BindHtmlComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");


function renderHtml(content) {
    const $d = document.createElement('div');
    $d.innerHTML = content || '';
    let cn = $d.childNodes;
    if (cn.length === 0) {
        cn = [document.createComment('empty')];
    }
    else {
        cn = [].slice.call(cn); // convert NodeList to Array.
    }
    return cn;
}
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!('content' in attrs))
        throw new Error('<bind-html/> require "content" attribute');
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.content = attrs.content;
      };
      fn_2_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('content', fn_2_c3fa96703a3c);
    }
    get content() {
        return this._c;
    }
    set content(v) {
        if (this._c === v)
            return;
        this._c = v;
        this.__updateIfNeed();
    }
    __render() {
        return (this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = renderHtml(this._c));
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const oldFirstEl = roots[0];
        const $p = oldFirstEl.parentNode;
        const newEls = renderHtml(this._c);
        $p.insertBefore(newEls.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])(newEls) : newEls[0], oldFirstEl);
        roots.forEach(oldEl => $p.removeChild(oldEl));
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newEls;
    }
}
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/i18n.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/i18n.js ***!
  \***********************************************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, renderKey, renderVms) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c3fa96703a3c._key = renderKey;
      __vm_c3fa96703a3c._vms = renderVms;
      __vm_c3fa96703a3c.__i18nWatch(__vm_c3fa96703a3c._onchange);
    }
    __render() {
        const renderFn = _core_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].__r(this._key, 'components');
        return renderFn(this, ...this._vms);
    }
    _onchange() {
        this.__updateIfNeed();
    }
    __update() {
        if (this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related) {
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.clear();
        }
        let $el = this.__lastDOM;
        const $parentEl = $el.parentNode;
        $el = $el.nextSibling;
        /*
         * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
         */
        this.__handleBeforeDestroy(true);
        /*
         * 将新的元素替换到原来的旧的元素的位置。
         */
        const els = this.__render();
        if ($el) {
            $parentEl.insertBefore(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0], $el);
        }
        else {
            $parentEl.appendChild(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0]);
        }
        /**
         * 对切换后渲染的组件触发 AFTER_RENDER 生命周期。
         */
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(n => {
            if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(n))
                n.__handleAfterRender();
        });
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].nonRootCompNodes.forEach(n => {
            n.__handleAfterRender();
        });
    }
    __beforeDestroy() {
        this._vms = null; // unlink vms, maybe not necessary
    }
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/if.js":
/*!*********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/if.js ***!
  \*********************************************************************************/
/*! exports provided: IfComponent, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return IfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(renderFn, context, parentStyleIds) {
    const el = new _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"](Object(_vm__WEBPACK_IMPORTED_MODULE_1__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]]: {
            context,
            slots: {
                default: renderFn
            }
        }
    }));
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function renderSwitch(component) {
    const value = component._currentValue;
    const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
    if (component.transition && acs) {
        component._transitionMap = new Map();
        for (const k in acs) {
            component._transitionMap.set(k, [
                k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                null // element
            ]);
        }
        component._previousValue = value;
        component._onEndHandler = component.onTransitionEnd.bind(component);
    }
    const renderFn = acs ? acs[value] : null;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    if (!renderFn) {
        roots.push(document.createComment('empty'));
        return roots;
    }
    const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
    roots.push(el);
    return el.__render();
}
function doUpdate(component) {
    var _a;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    const el = roots[0];
    const isComp = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(el);
    const firstDOM = (isComp ? el.__firstDOM : el);
    const parentDOM = (isComp ? firstDOM : el).parentNode;
    const renderFn = (_a = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots) === null || _a === void 0 ? void 0 : _a[component._currentValue];
    if (renderFn) {
        const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
        const nodes = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["assertRenderResults"])(newEl.__render());
        parentDOM.insertBefore(nodes.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["createFragment"])(nodes) : nodes[0], firstDOM);
        roots[0] = newEl;
    }
    else {
        roots[0] = document.createComment('empty');
        parentDOM.insertBefore(roots[0], firstDOM);
    }
    if (isComp) {
        el.__destroy();
    }
    else {
        parentDOM.removeChild(firstDOM);
    }
    renderFn && roots[0].__handleAfterRender();
    component.__notify('branch-switched', component._branch);
}
function cancelTs(t, tn, e, component) {
    const el = t[1];
    if (el.nodeType !== Node.ELEMENT_NODE) {
        return;
    }
    const onEnd = component._onEndHandler;
    el.classList.remove(tn + (e ? '-enter' : '-leave'));
    el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', onEnd);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', onEnd);
    component.__notify('transition', e ? 'enter-cancelled' : 'leave-cancelled', el);
}
function startTs(t, tn, e, component) {
    const el = t[1];
    const onEnd = component._onEndHandler;
    if (el.nodeType !== Node.ELEMENT_NODE) {
        onEnd();
        return;
    }
    const classOfStart = tn + (e ? '-enter' : '-leave');
    const classOfActive = tn + (e ? '-enter-active' : '-leave-active');
    el.classList.add(classOfStart);
    // force render by calling getComputedStyle
    Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    el.classList.add(classOfActive);
    const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    if (!tsEndName) {
        onEnd();
        return;
    }
    t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["addEvent"])(el, tsEndName, onEnd);
    component.__notify('transition', e ? 'before-enter' : 'before-leave', el);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["setImmediate"])(() => {
        component.__notify('transition', e ? 'enter' : 'leave', el);
    });
}
function updateSwitchWithTransition(component) {
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    let pt = component._transitionMap.get(pv);
    if (!pt) {
        pt = [
            pv === 'else' ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED,
            null // element
        ];
        component._transitionMap.set(pv, pt);
    }
    // debugger;
    if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING) {
        if (value === pv)
            return;
        cancelTs(pt, tn, true, component);
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING) {
        if (value !== pv)
            return;
        cancelTs(pt, tn, false, component);
        startTs(pt, tn, true, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, true, component);
    }
}
function updateSwitch(component) {
    if (!Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes[0]) && (!component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots[component._currentValue])) {
        return;
    }
    if (component._transitionMap) {
        updateSwitchWithTransition(component);
        return;
    }
    doUpdate(component);
}
function updateSwitchOnTransitionEnd(component) {
    // console.log('on end')
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    const pt = component._transitionMap.get(pv);
    const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING;
    const el = pt[1];
    if (el.nodeType === Node.ELEMENT_NODE) {
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
        el.classList.remove(tn + (e ? '-enter' : '-leave'));
        el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
        component.__notify('transition', e ? 'after-enter' : 'after-leave');
    }
    pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
    if (e)
        return;
    doUpdate(component);
    component._previousValue = value;
    const ct = component._transitionMap.get(value);
    if (!ct) {
        return;
    }
    const fd = component.__transitionDOM;
    if (fd.nodeType !== Node.ELEMENT_NODE) {
        ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED;
        return;
    }
    ct[1] = fd;
    startTs(ct, tn, true, component);
}
function destroySwitch(component) {
    if (component._transitionMap) {
        component._transitionMap.forEach(ts => {
            const el = ts[1];
            if (el) {
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
            }
        });
        component._transitionMap = null;
    }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c3fa96703a3c._currentValue = 'default';
      __vm_c3fa96703a3c._onEndHandler = null;
      __vm_c3fa96703a3c._transitionMap = null;
      __vm_c3fa96703a3c._previousValue = null;
      const fn_5_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.expect = attrs.expect;
      };
      fn_5_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('expect', fn_5_c3fa96703a3c);
      const fn_6_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.transition = attrs.transition;
      };
      fn_6_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_c3fa96703a3c);
    }
    get expect() {
        return this._currentValue === 'default';
    }
    set expect(value) {
        const v = value ? 'default' : 'else';
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.expect;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c3fa96703a3c._onEndHandler = null;
      __vm_c3fa96703a3c._transitionMap = null;
      __vm_c3fa96703a3c._previousValue = null;
      __vm_c3fa96703a3c._currentValue = null;
      const fn_5_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.test = attrs.test;
      };
      fn_5_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', fn_5_c3fa96703a3c);
      const fn_6_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.transition = attrs.transition;
      };
      fn_6_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_c3fa96703a3c);
    }
    get test() {
        return this._currentValue;
    }
    set test(v) {
        const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
        if (!acs || !(v in acs)) {
            v = 'default';
        }
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.test;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/index.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/index.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge-framework/lib/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForComponent"]; });

/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge-framework/lib/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["HideComponent"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge-framework/lib/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["BindHtmlComponent"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge-framework/lib/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/lib/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge-framework/lib/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_6__["LogComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });

/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic */ "../../jinge-framework/lib/components/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _dynamic__WEBPACK_IMPORTED_MODULE_8__["DynamicRenderComponent"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/log.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/log.js ***!
  \**********************************************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");

/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_1_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.msg = attrs.msg;
      };
      fn_1_c3fa96703a3c();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('msg', fn_1_c3fa96703a3c);
    }
    set msg(v) {
        // eslint-disable-next-line no-console
        console.log(v);
        this._msg = v;
    }
    get msg() {
        return this._msg;
    }
    __render() {
        return [document.createComment('log placeholder')];
    }
}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/parameter.js":
/*!****************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/parameter.js ***!
  \****************************************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, params) {
      super(attrs);
      const __vm_c3fa96703a3c = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      params.forEach(p => {
        __vm_c3fa96703a3c[p] = attrs[p];
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(p, () => {
          __vm_c3fa96703a3c[p] = attrs[p];
        });
      });
    }
}
//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/bootstrap.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/bootstrap.js ***!
  \**********************************************************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
function bootstrap(ComponentClazz, dom, attrs) {
    ComponentClazz.create(attrs).__renderToDOM(dom, dom !== document.body);
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/component.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/component.js ***!
  \**********************************************************************************/
/*! exports provided: ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return ComponentStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return ContextStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
var _a;






var ComponentStates;
(function (ComponentStates) {
    ComponentStates[ComponentStates["INITIALIZE"] = 0] = "INITIALIZE";
    ComponentStates[ComponentStates["RENDERED"] = 1] = "RENDERED";
    ComponentStates[ComponentStates["WILLDESTROY"] = 2] = "WILLDESTROY";
    ComponentStates[ComponentStates["DESTROIED"] = 3] = "DESTROIED";
})(ComponentStates || (ComponentStates = {}));
var ContextStates;
(function (ContextStates) {
    ContextStates[ContextStates["UNTOUCH"] = 0] = "UNTOUCH";
    ContextStates[ContextStates["TOUCHED"] = 1] = "TOUCHED";
    ContextStates[ContextStates["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
    ContextStates[ContextStates["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
})(ContextStates || (ContextStates = {}));
const __ = Symbol('__');
/** Bellow is utility functions **/
function isComponent(v) {
    return __ in v;
}
function assertRenderResults(renderResults) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(renderResults) || renderResults.length === 0) {
        throw new Error('Render results of component is empty');
    }
    return renderResults;
}
class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"] {
    /**
     * ATTENTION!!!
     *
     * Don't use constructor directly, use static factory method `create(attrs)` instead.
     */
    constructor(attrs) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            throw new Error('Attributes passed to Component constructor must be ViewModel. See https://[todo]');
        }
        const compilerAttrs = attrs[__] || {};
        super(compilerAttrs.listeners);
        Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(this);
        this[__] = {
            passedAttrs: attrs,
            context: compilerAttrs.context,
            contextState: ContextStates.UNTOUCH,
            slots: compilerAttrs.slots,
            state: ComponentStates.INITIALIZE,
            rootNodes: [],
            nonRootCompNodes: [],
            refs: null,
            relatedRefs: null,
            updateNextMap: null,
            compStylePid: null,
            deregDOM: null,
            deregI18N: null
        };
    }
    static create(attrs) {
        attrs = attrs || Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])({});
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            attrs = Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])(attrs || {});
        }
        return (new this(attrs))[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
    }
    /**
     * Helper function to add i18n LOCALE_CHANGE listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @param {Function} listener listener bind to LOCALE_CHANGE event.
     * @param {Boolean} immediate call listener immediately, useful for component property initialize
     * @returns {Function} deregister function to remove listener
     */
    __i18nWatch(listener, immediate) {
        let deregs = this[__].deregI18N;
        if (!deregs) {
            this[__].deregI18N = deregs = [];
        }
        const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].watch(() => {
            // bind component to listener's function context.
            listener.call(this);
        }, immediate);
        const deregister = () => {
            unwatcher();
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
        };
        deregs.push(deregister);
        return deregister;
    }
    /**
     * Helper function to add dom event listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @param {Boolean|Object} capture
     * @returns {Function} deregister function to remove listener
     */
    __domAddListener($el, eventName, listener, capture) {
        let deregs = this[__].deregDOM;
        if (!deregs) {
            this[__].deregDOM = deregs = [];
        }
        const lisDeregister = Object(_util__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])($el, eventName, $event => {
            // bind component to listener's function context.
            listener.call(this, $event);
        }, capture);
        const deregister = () => {
            lisDeregister();
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
        };
        deregs.push(deregister);
        return deregister;
    }
    __domPassListeners(ignoredEventNames, targetEl) {
        if (this[__].state !== ComponentStates.RENDERED) {
            throw new Error('domPassListeners must be applied to component which is rendered.');
        }
        const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]];
        if (!lis || lis.size === 0) {
            return;
        }
        if (ignoredEventNames && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ignoredEventNames)) {
            targetEl = ignoredEventNames;
            ignoredEventNames = null;
        }
        else if (!targetEl) {
            targetEl = this.__firstDOM;
        }
        if (targetEl.nodeType !== Node.ELEMENT_NODE) {
            return;
        }
        lis.forEach((handlers, eventName) => {
            if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
                return;
            }
            handlers.forEach(handler => {
                const { opts, fn } = handler;
                this.__domAddListener(targetEl, eventName, (handler.opts && (handler.opts.stop || handler.opts.prevent)
                    ? function ($evt) {
                        opts.stop && $evt.stopPropagation();
                        opts.prevent && $evt.preventDefault();
                        // this.domAddListener 会将 this 变成当前组件。所以需要显式地使用 fn.call(this) 来传递组件。
                        fn.call(this, $evt);
                    } : fn), handler.opts);
            });
        });
    }
    /**
     * Get rendered DOM Node which should be apply transition.
     *
     * 返回在 transition 动画时应该被应用到的 DOM 节点。
     */
    get __transitionDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__transitionDOM : el;
    }
    /**
     * Get first rendered DOM Node after Component is rendered.
     *
     * 按从左往右从上到下的深度遍历，找到的第一个 DOM 节点。
     */
    get __firstDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__firstDOM : el;
    }
    /**
     * Get last rendered DOM Node after Component is rendered.
     *
     * 按从右往左，从上到下的深度遍历，找到的第一个 DOM 节点（相对于从左到右的顺序是最后一个 DOM 节点）。
     */
    get __lastDOM() {
        const rns = this[__].rootNodes;
        const el = rns[rns.length - 1];
        return isComponent(el) ? el.__lastDOM : el;
    }
    /**
     * 对模板进行渲染的函数，也可能是渲染编译器传递进来的默认渲染函数。
     * 如果子组件需要进行自定义的渲染行为，需要重载该函数。
     */
    __render() {
        const Clazz = this.constructor;
        let renderFn = Clazz.template; // jinge-loader 已经将 string 转成了 RenderFn，此处强制转换类型以绕开 typescript.
        if (!renderFn && this[__].slots) {
            renderFn = this[__].slots.default;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderFn)) {
            throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
        }
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].add(Clazz.style); // jinge-loader 已经将 string 转成了 ComponentStyle，此处强制转换类型以绕开 typescript.
        return renderFn(this);
    }
    /**
     * Render Component to HTMLElement.
     * This method is usually used to render the entire application.
     * See the `bootstrap()` function in `./bootstrap.js`.
     *
     * By default, the target element will be replaced(that means deleted).
     * But you can disable it by pass `replaceMode`=`false`,
     * which means component append to target as it's children.
     */
    __renderToDOM(targetEl, replaceMode = true) {
        if (this[__].state !== ComponentStates.INITIALIZE) {
            throw new Error('component has already been rendered.');
        }
        const rr = assertRenderResults(this.__render());
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].attch();
        if (replaceMode) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChildren"])(targetEl.parentNode, rr, targetEl);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(targetEl, rr);
        }
        this.__handleAfterRender();
    }
    __destroy(removeDOM = true) {
        const comp = this[__];
        if (comp.state > ComponentStates.WILLDESTROY)
            return;
        comp.state = ComponentStates.WILLDESTROY;
        /*
         * once component is being destroied,
         *   we mark component and it's passed-attrs un-notifiable to ignore
         *   possible messeges occurs in BEFORE_DESTROY lifecycle callback.
         */
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
        // notify before destroy lifecycle
        // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
        //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
        this.__notify('before-destroy');
        this.__beforeDestroy();
        // destroy children(include child component and html nodes)
        this.__handleBeforeDestroy(removeDOM);
        // clear messenger listeners.
        super.__off();
        // remove component style
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].remove(this.constructor.style);
        // destroy attrs passed to constructor
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        comp.passedAttrs = null;
        // destroy view model
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        // clear next tick update setImmediate
        if (comp.updateNextMap) {
            comp.updateNextMap.forEach(imm => {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(imm);
            });
            comp.updateNextMap = null;
        }
        // destroy related refs:
        if (comp.relatedRefs) {
            comp.relatedRefs.forEach(info => {
                const refs = info.origin[__].refs;
                if (!refs)
                    return;
                const rns = refs.get(info.ref);
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(rns)) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(rns, info.node || this);
                }
                else {
                    refs.delete(info.ref);
                }
            });
            comp.relatedRefs = null;
        }
        // clear all dom event listener and i18n watcher
        if (comp.deregDOM) {
            comp.deregDOM.forEach(deregFn => deregFn());
            comp.deregDOM = null;
        }
        if (comp.deregI18N) {
            comp.deregI18N.forEach(deregFn => deregFn());
            comp.deregI18N = null;
        }
        // clear properties
        comp.state = ComponentStates.DESTROIED;
        // unlink all symbol properties. maybe unnecessary.
        comp.rootNodes = comp.nonRootCompNodes =
            comp.refs = comp.slots = comp.context = null;
    }
    __handleBeforeDestroy(removeDOM = false) {
        this[__].nonRootCompNodes.forEach(component => {
            // it's not necessary to remove dom when destroy non-root component,
            // because those dom nodes will be auto removed when their parent dom is removed.
            component.__destroy(false);
        });
        let $parent;
        this[__].rootNodes.forEach(node => {
            if (isComponent(node)) {
                node.__destroy(removeDOM);
            }
            else if (removeDOM) {
                if (!$parent) {
                    $parent = node.parentNode;
                }
                $parent.removeChild(node);
            }
        });
    }
    __handleAfterRender() {
        /*
         * Set NOTIFIABLE=true to enable ViewModel notify.
         * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
         */
        this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[__].rootNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].nonRootCompNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].state = ComponentStates.RENDERED;
        this[__].contextState = this[__].contextState === ContextStates.TOUCHED ? ContextStates.TOUCHED_FREEZED : ContextStates.UNTOUCH_FREEZED; // has been rendered, can't modify context
        this.__afterRender();
        this.__notify('after-render');
    }
    __updateIfNeed(handler, nextTick = true) {
        if (this[__].state !== ComponentStates.RENDERED) {
            return;
        }
        if (handler === false) {
            return this.__update();
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handler)) {
            handler = this.__update;
        }
        if (!nextTick) {
            handler.call(this);
            return;
        }
        let ntMap = this[__].updateNextMap;
        if (!ntMap)
            ntMap = this[__].updateNextMap = new Map();
        if (ntMap.has(handler)) {
            // already in queue.
            return;
        }
        ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
            ntMap.delete(handler);
            handler.call(this);
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __update(first) {
        // by default, do nothing.
    }
    __setContext(key, value, forceOverride = false) {
        if (this[__].contextState === ContextStates.UNTOUCH_FREEZED || this[__].contextState === ContextStates.TOUCHED_FREEZED) {
            throw new Error('Can\'t setContext after component has been rendered. Try put setContext code into constructor.');
        }
        if (this[__].contextState === ContextStates.UNTOUCH) {
            // we copy context to make sure child component do not modify context passed from parent.
            // we do not copy it by default until setContext function is called, because it unnecessary to waste memory if
            // child component do not modify the context.
            this[__].context = Object.assign({}, this[__].context);
            this[__].contextState = ContextStates.TOUCHED; // has been copied.
        }
        if (key in this[__].context) {
            // override exist may case hidden bug hard to debug.
            // so we force programmer to pass third argument to
            //   tell us he/she know what he/she is doing.
            if (!forceOverride) {
                throw new Error(`Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`);
            }
        }
        this[__].context[key] = value;
    }
    __getContext(key) {
        return this[__].context ? this[__].context[key] : null;
    }
    /**
     * This method is used for compiler generated code.
     * Do not use it manually.
     */
    __setRef(ref, el, relatedComponent) {
        let rns = this[__].refs;
        if (!rns) {
            this[__].refs = rns = new Map();
        }
        let elOrArr = rns.get(ref);
        if (!elOrArr) {
            rns.set(ref, el);
        }
        else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elOrArr)) {
            elOrArr.push(el);
        }
        else {
            elOrArr = [elOrArr, el];
            rns.set(ref, elOrArr);
        }
        const isComp = isComponent(el);
        if (!isComp && this === relatedComponent) {
            return;
        }
        /**
         * 如果被 ref: 标记的元素（el）本身就是组件（Component）节点，
         *   那么 el 自身就是关联组件，el 自身在被销毁时可以执行删除关联 refs 的操作；
         * 如果 el 是 DOM 节点，则必须将它添加到关联组件（比如 <if>） relatedComponent 里，
         *   在 relatedComponent 被销毁时执行关联 refs 的删除。
         */
        let rbs = (isComp ? el : relatedComponent)[__].relatedRefs;
        if (!rbs) {
            (isComp ? el : relatedComponent)[__].relatedRefs = rbs = [];
        }
        rbs.push({
            origin: this,
            ref,
            node: isComp ? null : el
        });
    }
    /**
     * Get child node(or nodes) marked by 'ref:' attribute in template
     */
    __getRef(ref) {
        if (this[__].state !== ComponentStates.RENDERED) {
            // eslint-disable-next-line no-console
            console.warn(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
        }
        return this[__].refs ? this[__].refs.get(ref) : null;
    }
    __addStylePid(inheritIds, styleId) {
        if (!inheritIds && !styleId)
            return;
        let ids = this[__].compStylePid;
        if (!ids) {
            ids = this[__].compStylePid = Object.create(null);
        }
        if (inheritIds) {
            Object.assign(ids, inheritIds);
        }
        if (styleId) {
            ids[styleId] = '';
        }
    }
    /**
     * lifecycle hook, called after rendered.
     */
    __afterRender() {
        // lifecycle hook, default do nothing.
    }
    /**
     * lifecycle hook, called before destroy.
     */
    __beforeDestroy() {
        // lifecycle hook, default do nothing.
    }
}
_a = __;
Component[_a] = true;
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/i18n.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/i18n.js ***!
  \*****************************************************************************/
/*! exports provided: compile, i18n, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");


const DEFAULT_FILENAME = 'dist/locale.[locale].js';
/**
 * convert i18n text template to function
 * @param {String} text i18n formatted text template
 */
function compile(text) {
    // eslint-disable-next-line no-new-func
    return new Function('__ctx', `return \`${text.replace(/`/g, '\\`').replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
        return '${ __ctx.' + n + ' }';
    })}\`;`);
}
function defaultFetchFn(locale, filename) {
    return window.fetch(filename.replace('[locale]', locale)).then(res => res.text());
}
class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
    constructor() {
        super();
        this.__deps = null;
        this.__data = null;
        this.__cache = new Map();
        this.__key = null;
        this.__regLoc(window.JINGE_I18N_DATA);
    }
    get locale() {
        return this.__data.locale;
    }
    /**
     * Register i18n render depedent.
     * This method will be called by compiler generated code, don't call it manully.
     */
    __regDep(idx, depent) {
        if (!this.__deps)
            this.__deps = [];
        if (!this.__deps[idx])
            throw new Error(`conflict at ${idx}`);
        this.__deps[idx] = depent;
    }
    /**
     * Register locale data, will be called in locale resource script.
     * Usually you don't need call this method manully.
     */
    __regLoc(data) {
        if (!data || this.__cache.has(data.locale)) {
            return;
        }
        this.__cache.set(data.locale, data);
        if (!this.__data) {
            this.__data = data;
        }
    }
    /**
     * switch to another locale/language
     * @param {string} locale locale to swtiched
     * @param {string | Function} filename filename of locale script with full path, or function fetch locale script.
     */
    switch(locale, filename = DEFAULT_FILENAME) {
        if (this.__data.locale === locale) {
            return;
        }
        const data = this.__cache.get(locale);
        if (!data) {
            const key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])();
            this.__key = key;
            (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(filename) ? filename(locale) : defaultFetchFn(locale, filename)).then((code) => {
                // eslint-disable-next-line no-new-func
                (new Function('jinge', code))({
                    i18n: this
                });
                if (this.__key !== key || this.__data.locale === locale) {
                    /*
                      * ignore if callback has been expired.
                      * 使用闭包的技巧来检测当前回调是否已经过期，
                      * 即，是否已经有新的 fetchFn 函数的调用。
                      */
                    return;
                }
                const data = this.__cache.get(locale);
                this.__data = data;
                this.__notify('i18n-change', this.locale);
            });
        }
        else {
            this.__data = data;
            this.__notify('i18n-change', this.locale);
        }
    }
    __t(key, params) {
        const dict = this.__data.dictionary;
        if (!(key in dict)) {
            return 'i18n_missing';
        }
        let text = dict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
            // text.startsWith("«") means reference to another key
            if (text.charCodeAt(0) === 171) {
                text = dict[text.substring(1)];
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
                    text = compile(text);
                }
            }
            else {
                text = compile(text);
            }
            dict[key] = text;
        }
        return text(params);
    }
    __r(key, type) {
        const render = this.__data.render;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(render)) {
            if (!this.__deps) {
                throw new Error('missing render depedents');
            }
            this.__data.render = render(...this.__deps);
        }
        const renderDict = render[type];
        if (!(key in renderDict)) {
            throw new Error(`missing i18n ${type} for key: ${key}`);
        }
        let fn = renderDict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(fn)) {
            // if fn is string, it's a reference to another key.
            renderDict[key] = fn = renderDict[fn];
        }
        return fn;
    }
    /**
     * Bind listener to LOCALE_CHANGE event,
     * return a function auto remove this listener
     * @param {Function} handler a listener bind to change event
     * @param {Boolean} immediate call listener immediately, default is false.
     * @returns {Function} a function auto remove listener
     */
    watch(listener, immediate) {
        this.__on('change', listener);
        if (immediate) {
            listener(this.locale);
        }
        return () => {
            this.__off('change', listener);
        };
    }
}
/* Singleton */
const i18n = new I18nService();
/**
 * Compiler helper function, the first parameter will be convert to i18n dictionary key,
 * and the whole function will be transform to `i18nService._t(key, params)`
 *
 * But after i18n locale resource script had been written, compiler won't transform it,
 * the function will work as text parse util.
 *
 * @param {String|Object} text
 * @param {Object} params
 */
function _t(text, params) {
    return params ? compile(text)(params) : text;
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/index.js ***!
  \******************************************************************************/
/*! exports provided: bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/lib/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["_t"]; });

/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge-framework/lib/core/render_fns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["i18nRenderFn"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["manager"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDuration"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/messenger.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/messenger.js ***!
  \**********************************************************************************/
/*! exports provided: MESSENGER_LISTENERS, Messenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return MESSENGER_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
const MESSENGER_LISTENERS = Symbol('listeners');
class Messenger {
    constructor(templateListeners) {
        this[MESSENGER_LISTENERS] = null;
        if (templateListeners) {
            for (const eventName in templateListeners) {
                const handler = templateListeners[eventName];
                this.__on(eventName, handler.fn, handler.opts);
            }
        }
    }
    __notify(eventName, ...args) {
        if (!this[MESSENGER_LISTENERS])
            return;
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        listeners.forEach(handler => {
            handler.fn(...args);
        });
    }
    __on(eventName, eventListener, options) {
        if (!this[MESSENGER_LISTENERS]) {
            this[MESSENGER_LISTENERS] = new Map();
        }
        let listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners) {
            this[MESSENGER_LISTENERS].set(eventName, listeners = []);
        }
        if (listeners.findIndex(it => {
            return it.fn === eventListener;
        }) >= 0) {
            // eslint-disable-next-line no-console
            console.warn('dulplicated messenger listener', eventName, eventListener);
            return;
        }
        if (options && options.once) {
            const onceListener = (...args) => {
                eventListener(...args);
                this.__off(eventName, eventListener);
            };
            listeners.push({
                fn: onceListener,
                opts: options
            });
        }
        else {
            listeners.push({
                fn: eventListener,
                opts: options
            });
        }
    }
    __off(eventName, eventListener) {
        if (!this[MESSENGER_LISTENERS])
            return;
        if (!eventName) {
            this[MESSENGER_LISTENERS].clear();
            return;
        }
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        if (!eventListener) {
            listeners.length = 0;
            return;
        }
        const idx = listeners.findIndex(it => {
            return it.fn === eventListener;
        });
        listeners.splice(idx, 1);
    }
}
//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/render_fns.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/render_fns.js ***!
  \***********************************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");



function emptyRenderFn(component) {
    const el = document.createComment('empty');
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function errorRenderFn(component) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'color: red !important;'
    });
    el.textContent = 'template parsing failed! please check webpack log.';
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function textRenderFn(component, txtContent) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])(txtContent);
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function i18nRenderFn(component, key, isRoot = false) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
    const fn = () => {
        el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].__t(key);
    };
    fn();
    component.__i18nWatch(fn);
    isRoot && component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/style.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/style.js ***!
  \******************************************************************************/
/*! exports provided: manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return manager; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

function isHideCssExists() {
    const $e = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'position:absolute;left:-10000px;',
        class: 'jg-hide'
    });
    document.body.appendChild($e);
    const exist = getComputedStyle($e).getPropertyValue('display') === 'none';
    document.body.removeChild($e);
    return exist;
}
class ComponentStyleManager {
    constructor() {
        this.m = new Map();
        this.s = 0;
    }
    create(sty) {
        if (this.s === 0)
            return;
        const $style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('style', {
            type: 'text/css',
            id: sty.dom
        });
        document.head.appendChild($style);
        if ($style.styleSheet) {
            $style.styleSheet.cssText = sty.css;
        }
        else {
            $style.textContent = sty.css;
        }
    }
    add(sty) {
        if (!sty)
            return;
        const styleMap = this.m;
        let info = styleMap.get(sty.id);
        if (info) {
            info.refs++;
            return;
        }
        info = {
            id: sty.id,
            css: sty.css,
            dom: `__${sty.id}__`,
            refs: 1
        };
        styleMap.set(sty.id, info);
        this.create(info);
    }
    attch() {
        if (this.s !== 0) {
            // eslint-disable-next-line no-console
            console.warn('component styles already attached.');
            return;
        }
        this.s = 1;
        if (!isHideCssExists()) {
            this.create({
                dom: `__jgsty_${Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])()}__`,
                css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}'
            });
        }
        this.m.forEach(info => {
            this.create(info);
        });
    }
    remove(sty) {
        if (!sty)
            return;
        const info = this.m.get(sty.id);
        if (!info)
            return;
        info.refs--;
        if (info.refs > 0) {
            return;
        }
        this.m.delete(info.id);
        if (this.s === 0) {
            return;
        }
        document.head.removeChild(document.getElementById(info.dom));
    }
}
// singleton
const manager = new ComponentStyleManager();
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/transition.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/transition.js ***!
  \***********************************************************************************/
/*! exports provided: TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return TransitionStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
var TransitionStates;
(function (TransitionStates) {
    TransitionStates[TransitionStates["ENTERING"] = 1] = "ENTERING";
    TransitionStates[TransitionStates["ENTERED"] = 2] = "ENTERED";
    TransitionStates[TransitionStates["LEAVING"] = 3] = "LEAVING";
    TransitionStates[TransitionStates["LEAVED"] = 4] = "LEAVED";
})(TransitionStates || (TransitionStates = {}));
function getDurationType(el) {
    const cst = getComputedStyle(el);
    if (cst.getPropertyValue('transition-duration') !== '0s') {
        return 'transitionend';
    }
    else if (cst.getPropertyValue('animation-duration') !== '0s') {
        return 'animationend';
    }
    return null;
}
function parseDuration(v) {
    if (/ms$/.test(v)) {
        return parseInt(v);
    }
    else if (/s$/.test(v)) {
        return parseFloat(v) * 1000;
    }
    else {
        return 0;
    }
}
function getDuration(el) {
    const cst = getComputedStyle(el);
    let dur = cst.getPropertyValue('transition-duration');
    if (dur !== '0s') {
        return {
            type: 'transitionend',
            time: parseDuration(dur)
        };
    }
    dur = cst.getPropertyValue('animation-duration');
    if (dur !== '0s') {
        return {
            type: 'animationend',
            time: parseDuration(dur)
        };
    }
    return {
        type: null,
        time: 0
    };
}
//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge-framework/lib/index.js":
/*!*************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/index.js ***!
  \*************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent, bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration, typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent, $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BindHtmlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["I18nComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DynamicRenderComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18nRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDuration"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/lib/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["registerEvent"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["shiftParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ViewModelCoreImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopClearNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["unwatch"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/array.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/array.js ***!
  \******************************************************************************/
/*! exports provided: arrayRemove, arrayPushIfNotExist, arrayEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return arrayPushIfNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
function arrayRemove(array, item) {
    const idx = array.indexOf(item);
    if (idx < 0)
        return false;
    array.splice(idx, 1);
    return true;
}
function arrayPushIfNotExist(array, item) {
    const idx = array.indexOf(item);
    if (idx >= 0)
        return;
    array.push(item);
}
function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/common.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/common.js ***!
  \*******************************************************************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
let UID_INC = 0;
function uid() {
    return Date.now().toString(32) + '-' + Math.floor(Math.random() * 0xffffff).toString(32) + '-' + (UID_INC++).toString(32);
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/dom.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/dom.js ***!
  \****************************************************************************/
/*! exports provided: setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return createElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return createSVGElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return createElementWithChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return registerEvent; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");

function setText($element, text) {
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
        text = JSON.stringify(text);
    }
    $element.textContent = text;
}
function createTextNode(text = '') {
    return document.createTextNode(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
    const f = document.createDocumentFragment();
    children && children.forEach(n => {
        f.appendChild(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(n) ? document.createTextNode(n) : n);
    });
    return f;
}
function appendChildren($parent, children) {
    $parent.appendChild(createFragment(children));
}
function replaceChildren($parent, children, oldNode) {
    $parent.replaceChild(createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
    if (!attrName)
        return;
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
        for (const attrN in attrName) {
            removeAttribute($ele, attrN);
        }
        return;
    }
    return $ele.removeAttribute(attrName);
}
function setAttribute($ele, attrName, attrValue) {
    if (!attrName)
        return;
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
        for (const attrN in attrName) {
            setAttribute($ele, attrN, attrName[attrN]);
        }
        return;
    }
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
        removeAttribute($ele, attrName);
    }
    else {
        $ele.setAttribute(attrName, attrValue);
    }
}
function _createEl($el, attrs, children) {
    if (attrs) {
        for (const an in attrs) {
            if (an && !Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
                setAttribute($el, an, attrs[an]);
            }
        }
    }
    appendChildren($el, children);
    return $el;
}
function createElement(tag, attrs, ...children) {
    return _createEl(document.createElement(tag), attrs, children);
}
function createElementWithoutAttrs(tag, ...children) {
    return createElement(tag, null, ...children);
}
function createSVGElement(tag, attrs, ...children) {
    return _createEl(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children);
}
function createSVGElementWithoutAttrs(tag, ...children) {
    return createSVGElement(tag, null, ...children);
}
function createElementWithChild(tag, attrs, child) {
    const $e = createElement(tag, attrs);
    $e.appendChild(child);
    return $e;
}
function insertAfter($parent, newNode, referenceNode) {
    const rn = referenceNode.nextSibling;
    if (!rn) {
        $parent.appendChild(newNode);
    }
    else {
        $parent.insertBefore(newNode, rn);
    }
}
// export function hasClass($ele: Element, className: string): boolean {
//   return $ele.classList.contains(className);
// }
// export function toggleClass($ele: Element, className: string, force?: boolean): boolean {
//   return $ele.classList.toggle(className, force);
// }
// export function addClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, true);
// }
// export function removeClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, false);
// }
// export function replaceClass($ele: Element, oldClass: string, newClass: string): void {
//   return $ele.classList.replace(oldClass, newClass);
// }
function addEvent($element, eventName, handler, capture) {
    Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(capture) && (capture = eventName.startsWith('touch') ? {
        capture: false,
        passive: true
    } : false);
    $element.addEventListener(eventName, handler, capture);
}
function removeEvent($element, eventName, handler) {
    $element.removeEventListener(eventName, handler);
}
/**
 * Add event to DOM element, similar as addEventListener,
 * but return deregister function which will call removeEventListener.
 *
 * @returns {Function} deregister function which will removeEventListener
 */
function registerEvent($element, eventName, handler, capture) {
    addEvent($element, eventName, handler, capture);
    return function deregister() {
        removeEvent($element, eventName, handler);
    };
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/index.js ***!
  \******************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge-framework/lib/util/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/lib/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["clearImmediate"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/lib/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["registerEvent"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/setimm.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/setimm.js ***!
  \*******************************************************************************/
/*! exports provided: setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
/**
 * setImmediate polyfill only for modern browsers
 * Copied from https://github.com/YuzuJS/setImmediate/blob/master/setImmediate.js
 * Simplified by Yuhang-Ge<abeyuhang@gmail.com>
 */

let autoIncrement = 0;
let nextHandle = 1; // Spec says greater than zero
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(callback) || arguments.length > 1) {
        throw new Error('setImmediate require callback function.');
    }
    tasksByHandle.set(nextHandle, callback);
    registerImmediate(nextHandle);
    // console.log('siiii', callback);
    return nextHandle++;
}
function clearImmediateFallback(handle) {
    tasksByHandle.delete(handle);
}
function runIfPresent(handle) {
    // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // 'too much recursion' error.
        setTimeout(runIfPresent, 0, handle);
        return;
    }
    const callback = tasksByHandle.get(handle);
    // console.log('stttt', handle, callback);
    if (!callback)
        return;
    currentlyRunningATask = true;
    try {
        callback();
    }
    finally {
        clearImmediateFallback(handle);
        currentlyRunningATask = false;
    }
}
if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.setImmediate)) {
    tasksByHandle = new Map();
    const messagePrefix = 'setImmediate$' + (autoIncrement++).toString(32) + '$';
    window.addEventListener('message', event => {
        if (event.source === window &&
            Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(event.data) &&
            event.data.startsWith(messagePrefix)) {
            runIfPresent(Number(event.data.slice(messagePrefix.length)));
        }
    }, false);
    registerImmediate = function (handle) {
        window.postMessage(messagePrefix + handle, '*');
    };
}
const setImmediate = window.setImmediate || setImmediateFallback;
const clearImmediate = window.clearImmediate || clearImmediateFallback;
//# sourceMappingURL=setimm.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/type.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/type.js ***!
  \*****************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
function typeOf(v) {
    return typeof v;
}
function isObject(v) {
    return v !== null && typeOf(v) === 'object';
}
function isString(v) {
    return typeOf(v) === 'string';
}
function isNumber(v) {
    return typeOf(v) === 'number' && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
    return typeOf(v) === 'undefined';
}
function isArray(v) {
    return Array.isArray(v);
}
function isBoolean(v) {
    return typeof v === 'boolean' || (v instanceof Boolean);
}
function isFunction(v) {
    return typeOf(v) === 'function';
}
function isPromise(obj) {
    return isObject(obj) && isFunction(obj.then);
}
//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/common.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/common.js ***!
  \*****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return isPublicProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return getPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return parsePropertyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return addParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return removeParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return shiftParent; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

const $$ = Symbol('$$');
function isInnerObj(v) {
    const clazz = v.constructor;
    return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && ($$ in v);
}
function isPublicProperty(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && v.charCodeAt(0) !== 95;
}
function getPropertyName(v) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) {
        return v;
    }
    if (v === null) {
        return 'null';
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(v)) {
        return 'undefined';
    }
    return v.toString();
}
function parsePropertyPath(propertyPath) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(propertyPath) ? (propertyPath.indexOf('.') > 0 ? propertyPath.split('.') : [propertyPath]) : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath) ? propertyPath : [propertyPath]);
}
function addParent(child, parent, property) {
    if (!child.__parents) {
        child.__parents = [];
    }
    child.__parents.push({
        core: parent,
        prop: property
    });
}
function removeParent(child, parent, property) {
    if (!child.__parents) {
        return;
    }
    const idx = child.__parents.findIndex(item => {
        return item.core === parent && item.prop === property;
    });
    if (idx >= 0) {
        child.__parents.splice(idx, 1);
    }
}
function shiftParent(child, parent, property, delta) {
    if (!child.__parents)
        return;
    const item = child.__parents.find(it => {
        return it.core === parent && it.prop === property;
    });
    if (item) {
        item.prop += delta;
    }
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/core.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/core.js ***!
  \***************************************************************************/
/*! exports provided: ViewModelCoreImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return ViewModelCoreImpl; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");




class ViewModelCoreImpl {
    /**
     * Don't use the constructor. Use createViewModel instead.
     */
    constructor(target) {
        this.__notifiable = true;
        this.__parents = null;
        this.__listeners = null;
        this.__related = null;
        this.__setters = null;
        this.target = target;
        this.proxy = null;
        Object.defineProperty(target, _common__WEBPACK_IMPORTED_MODULE_1__["$$"], {
            value: this,
            writable: false,
            configurable: true,
            enumerable: false
        });
    }
    __watch(propertyPath, handler, related) {
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        const dbStarIdx = propertyPath.indexOf('**');
        if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
            /**
             * 'a.b.**' is good.
             * 'a.b.**.c' is bad.
             */
            throw new Error('wizard "**" must be last element in path.');
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"])(this, propertyPath);
        if (!node.__handlers) {
            node.__handlers = [];
        }
        if (node.__handlers.indexOf(handler) < 0) {
            node.__handlers.push(handler);
        }
        if (related && related !== this) {
            /**
             * If some child of this component is passed as argument(ie.
             * use arg:pass attribute) like ng-tranclude in angular 1.x,
             * the child may contain some messenger listeners not belong to
             * this component but belong to outer parent.
             *
             * When destroy this component, we should also remove messenger listeners
             *   belong to outer parent to prevent memory leak.
             * To implement this goal, we maitain VM_RELATED_LISTENERS.
             * When render view-tree, any messenger listeners belong to outer
             * parent, will be also linked under VM_RELATED_LISTENERS, then
             * when we destroy this component, the listeners can also be clear.
             *
             * For examle:
             *
             * <!-- outer parent: RootApp -->
             * <div>
             * <if expect="show">
             * <Tooltip>
             * <argument arg:pass="default">
             * <p>hello, world. my name is ${name}</p>
             * </argument>
             * </Tooltip>
             * </if>
             * </div>
             *
             * when the `show` variable changed from true to false, the
             * Tooltip component will be destroy. The messenger listener belong
             * to the outer parent RootApp which watch `name` variable should
             * also be removed.
             */
            related.__addRelated(this, propertyPath, handler);
        }
    }
    __unwatch(propertyPath, handler, related) {
        if (!propertyPath) {
            Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
            return;
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"])(this, Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath));
        if (!node) {
            return;
        }
        const handlers = node.__handlers;
        if (!handlers) {
            return;
        }
        if (!handler) { // remove all if second parameter is not provided
            handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]);
            handlers.length = 0;
        }
        else {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"])(handler);
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(handlers, handler);
        }
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"])(node);
        if (related && related !== this) {
            related.__rmRelated(this, propertyPath, handler);
        }
    }
    __notify(propertyPath, immediate = false) {
        if (!this.__notifiable) {
            return;
        }
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        if (this.__listeners) {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"])(this, propertyPath, immediate);
        }
        const parents = this.__parents;
        parents && parents.forEach(ps => {
            const vm = ps.core;
            if (!vm) {
                // eslint-disable-next-line no-console
                console.error('dev-warn-unexpected: parent of ViewModelCore has been destroied but not unlink.');
                return;
            }
            vm.__notify([ps.prop].concat(propertyPath), immediate);
        });
    }
    __destroy() {
        this.__notifiable = false;
        this.__parents = null;
        // clear listeners
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
        // unlink wrapper proxy
        this.proxy = null;
        if (this.__related) {
            this.__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this.__related = null;
        }
        const target = this.target;
        /*
         * 解除 ViewModel 之间的 VM_PARENTS 关联。
         * 使用 getOwnPropertyNames 可以获取所有属性，但无法获取 setter 函数定义的属性。
         */
        const sfm = this.__setters;
        if (sfm) {
            sfm.forEach((fn, prop) => {
                if (fn === null) {
                    return;
                }
                const v = target[prop];
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                    return;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
            });
            this.__setters = null;
        }
        Object.getOwnPropertyNames(target).forEach(prop => {
            const v = target[prop];
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                return;
            }
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
        });
        // unlink vm target
        delete target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]];
        this.target = null;
    }
    __addRelated(origin, propertyPath, handler) {
        if (!this.__related)
            this.__related = new Map();
        let hook = this.__related.get(origin);
        if (!hook) {
            this.__related.set(origin, hook = []);
        }
        hook.push({
            prop: propertyPath,
            handler
        });
    }
    __rmRelated(origin, propertyPath, handler) {
        if (!this.__related)
            return;
        const hook = this.__related.get(origin);
        if (!hook)
            return;
        const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath);
        const i = hook.findIndex(it => {
            return handler === it.handler &&
                (isPropArray
                    ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayEqual"])(propertyPath, it.prop)
                    : propertyPath === it.prop);
        });
        if (i >= 0) {
            hook.splice(i, 1);
        }
    }
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/index.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/index.js ***!
  \****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["shiftParent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelCoreImpl"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"]; });

/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["unwatch"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/node.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/node.js ***!
  \***************************************************************************/
/*! exports provided: loopCreateNode, loopGetNode, deleteNode, loopClearNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return loopCreateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return loopGetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return deleteNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return loopClearNode; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");


function loopCreateNode(parentNode, propertyPath, level = 0) {
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
    if (!parentNode.__listeners) {
        parentNode.__listeners = new Map();
    }
    let node = parentNode.__listeners.get(propertyName);
    if (!node) {
        node = {
            __parent: parentNode,
            __property: propertyName,
            __handlers: null,
            __listeners: null
        };
        parentNode.__listeners.set(propertyName, node);
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopCreateNode(node, propertyPath, level + 1);
    }
}
function loopGetNode(parentNode, propertyPath, level = 0) {
    var _a;
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
    if (!propertyName) {
        return null;
    }
    const node = (_a = parentNode.__listeners) === null || _a === void 0 ? void 0 : _a.get(propertyName);
    if (!node) {
        return null;
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopGetNode(node, propertyPath, level + 1);
    }
}
function deleteNode(node) {
    if ((node && node.__handlers && node.__handlers.length > 0) ||
        (node.__listeners && node.__listeners.size > 0)) {
        return null;
    }
    /**
     * if one node don't have any listener or child, delete it.
     */
    const parent = node.__parent;
    const property = node.__property;
    node.__parent = null; // unlink parent.
    parent.__listeners.delete(property);
    return parent;
}
function loopClearNode(node) {
    const listeners = node.__listeners;
    if (listeners) {
        // loop clear all child nodes
        listeners.forEach(sn => loopClearNode(sn));
        node.__listeners = null;
    }
    // destroy all handlers
    const handlers = node.__handlers;
    if (handlers) {
        // clear handler waiting to execute
        handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__["handleCancel"]);
        node.__handlers = null;
    }
    // unlink parent
    node.__parent = null;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/notify.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/notify.js ***!
  \*****************************************************************************/
/*! exports provided: handleCancel, handleOnce, loopHandle, loopNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return handleCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return handleOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return loopHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return loopNotify; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");


const handleTasks = new Map();
function handleCancel(handler) {
    const t = handleTasks.get(handler);
    if (t) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(t.immediate);
        handleTasks.delete(handler);
    }
}
function handleOnce(handler, propertyPath) {
    if (handleTasks.has(handler)) {
        return;
    }
    const imm = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
        const arg = handleTasks.get(handler);
        try {
            handler(arg.propertyPath);
        }
        finally {
            handleTasks.delete(handler);
        }
    });
    handleTasks.set(handler, {
        immediate: imm,
        propertyPath: propertyPath
    });
}
function loopHandle(propertyPath, node, immediate) {
    const handlers = node.__handlers;
    handlers && handlers.forEach(handler => {
        if (immediate) {
            handler(propertyPath);
        }
        else {
            handleOnce(handler, propertyPath);
        }
    });
    const listeners = node.__listeners;
    listeners && listeners.forEach(c => {
        loopHandle(propertyPath, c, immediate);
    });
}
function loopNotify(vm, propertyPath, immediate, level = 0) {
    const listeners = vm.__listeners;
    if (!listeners) {
        return;
    }
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPropertyName"])(propertyPath[level]);
    if (!propertyName) {
        return;
    }
    let node = listeners.get(propertyName);
    if (node) {
        if (propertyPath.length - 1 === level) {
            // loopHandle(props, node, config[CFG_VM_DEBUG] ? null : imms);
            loopHandle(propertyPath, node, immediate);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('*');
    if (node) {
        if (propertyPath.length - 1 === level) {
            loopHandle(propertyPath, node, true);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('**');
    if (node) {
        loopHandle(propertyPath, node, true);
    }
}
//# sourceMappingURL=notify.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/proxy.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/proxy.js ***!
  \****************************************************************************/
/*! exports provided: ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return createViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return createAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return vm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return unwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");



/**
 * check if property named "prop" is setter of instance "obj",
 * if it's setter, return setter function, otherwise return null.
 * @param {Object} obj
 * @param {String} prop
 *
 * 检测名称为 "prop" 的属性是否是 setter，如果是，返回该 setter 函数，
 * 否则，返回 null。
 * 由于 obj 可能是有继承关系的类的实例，因此需要向上检测继承的类的 prototype。
 */
function getSetterFnIfPropIsSetter(obj, prop) {
    let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters;
    if (!map) {
        obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters = map = new Map();
    }
    if (!map.has(prop)) {
        let clazz = obj.constructor;
        let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
        let fn;
        if (desc) {
            fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
            map.set(prop, fn);
            return fn;
        }
        // lookup to check parent classes
        clazz = Object.getPrototypeOf(clazz);
        while (clazz && clazz.prototype) {
            desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
            if (desc) {
                fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
                map.set(prop, fn);
                return fn;
            }
            clazz = Object.getPrototypeOf(clazz);
        }
        map.set(prop, null);
        return null;
    }
    else {
        return map.get(prop);
    }
}
function notifyPropChanged(vm, prop) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(prop)) {
        /**
         * 如果不强制转成 string，typescript 会报：Type 'symbol' cannot be used as an index type
         */
        target[prop] = value;
        return true;
    }
    const oldVal = target[prop];
    if (oldVal === value && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
        return true;
    }
    let newValIsVM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value);
    if (newValIsVM) {
        newValIsVM = _common__WEBPACK_IMPORTED_MODULE_1__["$$"] in value;
        if (assertVM && !newValIsVM) {
            throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
        }
    }
    // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(oldVal) && (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in oldVal)) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(oldVal[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
    }
    setFn(target, prop, value);
    if (newValIsVM) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(value[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
    }
    notifyPropChanged(target, prop);
    return true;
}
function __objectPropSetFn(target, prop, value) {
    target[prop] = value;
}
function __componentPropSetFn(target, prop, value) {
    /**
     * we must ensure `this` in setter function to be `Proxy`
     *
     * 首先判断当前赋值的变量名，是否对应了一个 setter 函数，
     * 如果是 setter 函数，则应该显式地调用，
     *   并将 `this` 设置为该 target 的包装 Proxy，
     *   这样才能保正 setter 函数中其它赋值语句能触发 notify。
     * 如果不是 setter 函数，则简单地使用 target\[prop\] 赋值即可。
     */
    const setterFn = getSetterFnIfPropIsSetter(target, prop);
    if (setterFn) {
        setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy, value);
    }
    else {
        target[prop] = value;
    }
}
function objectPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // eslint-disable-next-line no-console
        console.warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
        return true;
    }
    return __propSetHandler(target, prop, value, __componentPropSetFn);
}
function arrayNotifyItems(target, idxStart, idxEnd) {
    let i = idxStart;
    if (idxStart > idxEnd) {
        i = idxEnd;
        idxEnd = idxStart;
    }
    for (; i < idxEnd; i++) {
        // console.log('npc', i);
        notifyPropChanged(target, i);
    }
}
function arrayLengthSetHandler(target, value) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)) {
        throw new Error('bad argument. array length must be validate number.');
    }
    const oldLen = target.length;
    if (oldLen > value) {
        for (let i = value; i < oldLen; i++) {
            const v = target[i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
        }
    }
    target.length = value;
    // console.log('set .length from', oldLen, 'to', value);
    if (oldLen !== value) {
        notifyPropChanged(target, 'length');
        arrayNotifyItems(target, oldLen, value);
    }
    return true;
}
function arrayPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        return true;
    }
    if (prop === 'length') {
        return arrayLengthSetHandler(target, value);
    }
    /**
     * 即便是 arr[0] 这样的取值，在 Proxy 的 set 里面，传递的 property 也是 string 类型，即 "0"。
     * 因此，对数组也使用和对象一致的 objectPropSetHandler 来处理。
     */
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
const ObjectProxyHandler = {
    set: objectPropSetHandler
};
const PromiseProxyHandler = {
    get(target, prop) {
        if (prop === 'then' || prop === 'catch') {
            const v = target[prop];
            return function (...args) {
                return v.call(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: objectPropSetHandler
};
function _arrayReverseSort(target, fn, arg) {
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    target[fn](arg);
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    arrayNotifyItems(target, 0, target.length);
    // return wrapper proxy to ensure `arr.reverse() === arr`
    return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const rtn = wrapProxy(arr, true);
    // handleVMDebug(arr);
    arr.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
        else if (wrapEachItem) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            arr[i] = createViewModel(it);
        }
    });
    return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
    arr.forEach((el, i) => {
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el))
            return;
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
    });
}
function _argAssert(arg, fn) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(arg)) {
        if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in arg)) {
            throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
const ArrayFns = {
    splice(target, idx, delCount, ...args) {
        if (idx < 0)
            idx = 0;
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'splice')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        });
        for (let i = 0; i < delCount; i++) {
            if (idx + i >= target.length)
                break;
            const el = target[idx + i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        }
        const delta = args.length - delCount;
        if (delta !== 0) {
            for (let i = idx + delCount; i < target.length; i++) {
                const el = target[i];
                if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                    continue;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
            }
        }
        const rtn = wrapSubArray(target.splice(idx, delCount, ...args));
        if (delta !== 0) {
            notifyPropChanged(target, 'length');
            for (let i = idx; i < target.length; i++) {
                notifyPropChanged(target, i);
            }
        }
        return rtn;
    },
    shift(target) {
        if (target.length === 0)
            return target.shift();
        _arrayShiftOrUnshiftProp(target, -1);
        const el = target.shift();
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], -1);
        }
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length + 1; i++) {
            notifyPropChanged(target, i);
        }
        return el;
    },
    unshift(target, ...args) {
        if (args.length === 0)
            return target.unshift();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'unshift')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
        });
        _arrayShiftOrUnshiftProp(target, args.length);
        const rtn = target.unshift(...args);
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    pop(target) {
        if (target.length === 0) {
            return target.pop();
        }
        const el = target.pop();
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length);
        }
        notifyPropChanged(target, 'length');
        notifyPropChanged(target, target.length);
        return el;
    },
    push(target, ...args) {
        if (args.length === 0)
            return target.push();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'push')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length + i);
            }
        });
        const rtn = target.push(...args);
        notifyPropChanged(target, 'length');
        for (let i = target.length - 1 - args.length; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    fill(target, v) {
        _argAssert(v, 'fill');
        target.forEach((it, i) => {
            if (it === v && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(it)) {
                return;
            }
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            target[i] = v;
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            notifyPropChanged(target, i);
        });
        return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
    },
    reverse(target) {
        return _arrayReverseSort(target, 'reverse');
    },
    sort(target, fn) {
        return _arrayReverseSort(target, 'sort', fn);
    },
    concat(target, arr) {
        _argAssert(arr, 'concat');
        return wrapSubArray(target.concat(arr));
    },
    filter(target, fn) {
        return wrapSubArray(target.filter(fn));
    },
    slice(target, si, ei) {
        return wrapSubArray(target.slice(si, ei));
    },
    map(target, fn) {
        return wrapSubArray(target.map(fn), true);
    }
};
const ArrayProxyHandler = {
    get(target, prop) {
        if (prop in ArrayFns) {
            const fn = ArrayFns[prop];
            return function (...args) {
                return fn(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: arrayPropSetHandler
};
function wrapProxy(target, isArr) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](target);
    return vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(target) ? PromiseProxyHandler : ObjectProxyHandler));
}
function wrapProp(parent, child, property) {
    // const v = vm[property];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(child) || Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(child)) {
        return;
    }
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in child)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        parent[property] = child = createViewModel(child);
    }
    Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(child[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], parent[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], property);
}
function createViewModel(target) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(target) || (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
            return target;
        }
        const isArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target);
        const rtn = wrapProxy(target, isArr);
        if (isArr) {
            for (let i = 0; i < target.length; i++) {
                wrapProp(target, target[i], i);
            }
        }
        else {
            for (const k in target) {
                if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(k)) {
                    wrapProp(target, target[k], k);
                }
            }
        }
        return rtn;
    }
    else {
        return target;
    }
}
function createAttributes(attributes) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](attributes);
    // 初始化时默认的 notifiable 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return (vmCore.proxy = new Proxy(attributes, {
        set: attrsPropSetHandler
    }));
}
// function handleVMDebug(vm) {
//   if (!config[CFG_VM_DEBUG]) {
//     return;
//   }
//   let _di = window._VM_DEBUG;
//   if (!_di) {
//     _di = window._VM_DEBUG = {
//       id: 0, vms: []
//     };
//   }
//   vm[VM_DEBUG_ID] = _di.id++;
//   // if (isComponent(vm) && !(VM_DEBUG_NAME in vm)) {
//   //   vm[VM_DEBUG_NAME] = `<${vm.constructor.name}>`;
//   // }
//   _di.vms.push(vm);
// }
function createComponent(component) {
    if (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in component) {
        throw new Error('component has alreay been wrapped.');
    }
    // handleVMDebug(component);
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](component);
    // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return vmCore.proxy = new Proxy(component, {
        set: componentPropSetHandler
    });
}
function vm(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        throw new Error('vm() target must be object or array.');
    }
    return createViewModel(target);
}
function attrs(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target) || Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
        throw new Error('attrs() traget must be plain object.');
    }
    return createAttributes(target);
}
function watch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__watch(propertyPath, handler);
}
function unwatch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__unwatch(propertyPath, handler);
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/index.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/components/index.js ***!
  \************************************************************************************/
/*! exports provided: UIViewComponent, UISrefComponent, UIRouterComponent, UIRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/components/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIViewComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_0__["UIViewComponent"]; });

/* harmony import */ var _sref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sref */ "../../jinge-ui-router/lib/components/sref.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISrefComponent", function() { return _sref__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/lib/components/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterComponent", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["UIRouterComponent"]; });

/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect */ "../../jinge-ui-router/lib/components/redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return _redirect__WEBPACK_IMPORTED_MODULE_3__["UIRedirect"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/redirect.js":
/*!***************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/components/redirect.js ***!
  \***************************************************************************************/
/*! exports provided: UIRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return UIRedirect; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/components/view.js");


class UIRedirect extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static get template() {
        return function(component) {
          const vm_0 = component;
          return [
          ...(() => {
            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
              [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                debugName: "attrs_of_<UIViewComponent>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
              },
            });
            const el = _view__WEBPACK_IMPORTED_MODULE_1__["UIViewComponent"].create(attrs);
            el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
          })()
          ];
        };
    }
}
//# sourceMappingURL=redirect.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/router.js":
/*!*************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/components/router.js ***!
  \*************************************************************************************/
/*! exports provided: UIRouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouterComponent", function() { return UIRouterComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");


class UIRouterComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      let coreRouter;
      if (!(attrs.router instanceof _core__WEBPACK_IMPORTED_MODULE_1__["BaseRouter"])) {
        if (attrs.router === 'hash') {
          coreRouter = new _core__WEBPACK_IMPORTED_MODULE_1__["HashRouter"]();
        } else {
          coreRouter = new _core__WEBPACK_IMPORTED_MODULE_1__["Html5Router"]();
        }
      } else {
        coreRouter = attrs.router;
      }
      if (attrs.plugins) {
        attrs.plugins.forEach(plugin => coreRouter.plugin(plugin));
      }
      if (attrs.states) {
        attrs.states.forEach(state => coreRouter.register(state));
      }
      if (attrs.otherwise) {
        coreRouter.otherwise(attrs.otherwise);
      }
      super(attrs);
      const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c3fa96703a3c._router = coreRouter;
      __vm_c3fa96703a3c.__setContext('ui-router', coreRouter);
    }
    get baseHref() {
        return this._router.baseHref;
    }
    // set baseHref(v: string) {
    //   this._router.baseHref = v;
    // }
    __afterRender() {
        this._router.start();
    }
    __beforeDestroy() {
        this._router.dispose();
    }
}
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/sref.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/components/sref.js ***!
  \***********************************************************************************/
/*! exports provided: UISrefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UISrefComponent", function() { return UISrefComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");



const SUPPORTED_TARGETS = ['_blank', '_self'];
class UISrefComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      var _a;
      if (attrs.params && !Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs.params)) {
        throw new Error('<ui-sref> attribute "params" require object.');
      }
      if (attrs.target && SUPPORTED_TARGETS.indexOf(attrs.target) < 0) {
        throw new Error(`<ui-sref> attribute "target" only accept one of ${ JSON.stringify(SUPPORTED_TARGETS) }`);
      }
      super(attrs);
      const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const router = __vm_c3fa96703a3c.__getContext('ui-router');
      if (!router || !(router instanceof _core__WEBPACK_IMPORTED_MODULE_1__["BaseRouter"])) {
        throw new Error('<ui-sref/> must be used under <ui-router/>');
      }
      __vm_c3fa96703a3c._router = router;
      __vm_c3fa96703a3c._el = null;
      __vm_c3fa96703a3c._dereg = null;
      __vm_c3fa96703a3c._tag = ((_a = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default) ? 0 : -1;
      __vm_c3fa96703a3c._clickHandler = __vm_c3fa96703a3c._onClick.bind(__vm_c3fa96703a3c);
      __vm_c3fa96703a3c.isActive = false;
      const fn_12_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.to = attrs.to;
      };
      fn_12_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('to', fn_12_c3fa96703a3c);
      const fn_13_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.params = attrs.params;
      };
      fn_13_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('params', fn_13_c3fa96703a3c);
      const fn_14_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.active = attrs.active;
      };
      fn_14_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('active', fn_14_c3fa96703a3c);
      const fn_15_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.location = 'location' in attrs ? attrs.location : true;
      };
      fn_15_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('location', fn_15_c3fa96703a3c);
      const fn_16_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.reload = !!attrs.reload;
      };
      fn_16_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('reload', fn_16_c3fa96703a3c);
      const fn_17_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.text = attrs.text || '';
      };
      fn_17_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('text', fn_17_c3fa96703a3c);
      const fn_18_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.target = attrs.target || '_self';
      };
      fn_18_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('target', fn_18_c3fa96703a3c);
      const fn_19_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.className = attrs.class;
      };
      fn_19_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class', fn_19_c3fa96703a3c);
      const fn_20_c3fa96703a3c = () => {
        __vm_c3fa96703a3c.style = attrs.style;
      };
      fn_20_c3fa96703a3c();
      attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('style', fn_20_c3fa96703a3c);
      __vm_c3fa96703a3c.__i18nWatch(__vm_c3fa96703a3c._updateHref);
    }
    static get template() {
        return function(component) {
          const vm_0 = component;
          return [
          ...(() => {
            const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].slots;
            const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
              return [
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "a",
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                    const fn_0 = () => {
                      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.text);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["text"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                    return el;
                  })()
                );
                const fn_0 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "class", !vm_0.className && !(vm_0.isActive && vm_0.active) ? vm_0._udef : (vm_0.className || '') + (vm_0.isActive && vm_0.active ? (vm_0.className ? ' ' : '') + vm_0.active : ''));
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["className"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["isActive"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["active"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                const fn_1 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "style", vm_0.style);
                };
                fn_1();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["style"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                return el;
              })()
              ];
            };
            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
              [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                debugName: "attrs_of_<parameter>",      
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                slots: {
                  default: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__["emptyRenderFn"]
                }
              }
            });
            const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"](attrs, []);
            el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
          })()
          ];
        };
    }
    get target() {
        return this._target;
    }
    set target(v) {
        if (this._target === v)
            return;
        this._target = v;
        this.__updateIfNeed(this._updateTarget);
    }
    get to() {
        return this._to;
    }
    set to(v) {
        if (this._to === v)
            return;
        this._to = v;
        this.__updateIfNeed(this._updateHref);
    }
    get params() {
        return this._params;
    }
    set params(v) {
        this._params = v;
        this.__updateIfNeed(this._updateHref);
    }
    get active() {
        return this._active;
    }
    set active(v) {
        if (this._active === v)
            return;
        if (this._tag >= 0 && this._active && this._el) {
            this._el.classList.remove(this._active); // remove previous active class
        }
        this._active = v;
        this.__updateIfNeed(this._updateActive);
    }
    _onClick(e) {
        if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
            return;
        }
        if (this._tag <= 0) {
            e.preventDefault(); // prevent default <a> jump
        }
        const router = this._router;
        const parent = this.__getContext('ui-router-parent');
        const parentContext = (parent && parent.context) || router.stateRegistry.root();
        if (this._target === '_blank') {
            const href = router.href(this._to, this._params, {
                relative: parentContext,
                inherit: true
            });
            window.open(href);
        }
        else {
            router.go(this._to, this._params, {
                relative: parentContext,
                inherit: true,
                location: this.location,
                reload: this.reload
            });
        }
    }
    __afterRender() {
        const el = this.__firstDOM;
        if (this._tag >= 0) {
            this._tag = el.tagName === 'A' ? 0 : 1;
        }
        this._el = el;
        this._dereg = this._router.transitionService.onSuccess({}, () => this._updateActive());
        this._updateTarget();
        this._updateHref();
        this._updateActive();
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', this._clickHandler);
    }
    __beforeDestroy() {
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeEvent"])(this._el, 'click', this._clickHandler);
        this._dereg();
    }
    _updateTarget() {
        if (this._tag <= 0) {
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this._el, 'target', this._target);
        }
    }
    _updateHref() {
        const router = this._router;
        this.isActive = router.includes(this._to, this._params);
        if (this._tag <= 0) {
            const parent = this.__getContext('ui-router-parent');
            const parentContext = (parent && parent.context) || router.stateRegistry.root();
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this._el, 'href', router.href(this._to, this._params, {
                relative: parentContext,
                inherit: true
            }));
        }
    }
    _updateActive() {
        this.isActive = this._router.includes(this._to, this._params);
        if (!this._active || this._tag < 0)
            return;
        if (this.isActive) {
            this._el.classList.add(this._active);
        }
        else {
            this._el.classList.remove(this._active);
        }
    }
}
//# sourceMappingURL=sref.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/components/view.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/components/view.js ***!
  \***********************************************************************************/
/*! exports provided: UIViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIViewComponent", function() { return UIViewComponent; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/lib/core.js");



const TransitionPropCollisionError = new Error('`transition` cannot be used as resolve token. Please rename your resolve to avoid conflicts with the router transition.');
const EXCLUDES = ['$transition$', '$stateParams', '$state$'];
let AUTO_INC_ID = 0;
function createEl(ComponentClass, resolves, context) {
    const attrs = {
        [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
            context
        }
    };
    if (resolves) {
        Object.assign(attrs, resolves);
    }
    return ComponentClass.create(attrs);
}
class UIViewComponent extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const router = __vm_c3fa96703a3c.__getContext('ui-router');
      if (!router || !(router instanceof _core__WEBPACK_IMPORTED_MODULE_2__["BaseRouter"])) {
        throw new Error('<ui-view/> must be used under <ui-router/>');
      }
      __vm_c3fa96703a3c._router = router;
      const parent = __vm_c3fa96703a3c.__getContext('ui-router-parent') || {
        fqn: '',
        context: __vm_c3fa96703a3c._router.stateRegistry.root()
      };
      const name = attrs.name || 'default';
      const uiViewData = {
        $type: 'jinge',
        id: ++AUTO_INC_ID,
        name: name,
        fqn: parent.fqn ? parent.fqn + '.' + name : name,
        creationContext: parent.context,
        configUpdated: __vm_c3fa96703a3c._onCfgUpdate.bind(__vm_c3fa96703a3c),
        config: undefined
      };
      const uiViewAddress = {
        fqn: uiViewData.fqn,
        context: undefined
      };
      __vm_c3fa96703a3c.__setContext('ui-router-parent', uiViewAddress, true);
      __vm_c3fa96703a3c._viewComp = null;
      __vm_c3fa96703a3c._viewRes = null;
      __vm_c3fa96703a3c._viewAddr = uiViewAddress;
      __vm_c3fa96703a3c._viewData = uiViewData;
      __vm_c3fa96703a3c._viewDereg = __vm_c3fa96703a3c._router.viewService.registerUIView(uiViewData);
    }
    __render() {
        const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes;
        const componentClass = this._viewComp;
        if (!componentClass) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        const el = createEl(componentClass, this._viewRes, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context);
        roots.push(el);
        return el.__render();
    }
    _onCfgUpdate(newConfig) {
        var _a;
        // console.log('cfg', newConfig, this[UIVIEW_DATA].id);
        const uiViewData = this._viewData;
        if (uiViewData.config === newConfig)
            return;
        // console.log('update:', this[UIVIEW_DATA].id);
        let resolves = null;
        if (newConfig) {
            this._viewAddr.context = newConfig.viewDecl && newConfig.viewDecl.$context;
            const resolveContext = new _uirouter_core__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](newConfig.path);
            const injector = resolveContext.injector();
            const stringTokens = resolveContext.getTokens().filter(t => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(t) && EXCLUDES.indexOf(t) < 0);
            if (stringTokens.indexOf('transition') !== -1) {
                throw TransitionPropCollisionError;
            }
            if (stringTokens.length > 0) {
                resolves = {};
                stringTokens.forEach(token => {
                    resolves[token] = injector.get(token);
                });
            }
        }
        uiViewData.config = newConfig;
        this._viewComp = (_a = newConfig === null || newConfig === void 0 ? void 0 : newConfig.viewDecl) === null || _a === void 0 ? void 0 : _a.component;
        this._viewRes = resolves;
        this.__updateIfNeed(false);
    }
    __update() {
        const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes;
        const preEl = roots[0];
        const isC = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(preEl);
        const newComponent = this._viewComp;
        if (!newComponent && !isC) {
            return;
        }
        const el = newComponent ? createEl(newComponent, this._viewRes, this[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context) : document.createComment('empty');
        const fd = isC ? preEl.__firstDOM : preEl;
        const pa = fd.parentNode;
        if (newComponent) {
            /**
             * 如果 newComponent 中有子 <ui-view/>，并且其兄弟状态也有 <ui-view/>，
             * `el[RENDER]()` 执行时，会触发 `preEl[DESTROY]()` 从而导致
             * `fd` 这个元素被从 DOM 中删除。临时的解决方案是，
             * 在执行 `el[RENDER]()` 之前，插入一个游标元素。
             */
            const cursorCmt = document.createComment('ui-view-cursor');
            pa.insertBefore(cursorCmt, fd);
            const nels = el.__render();
            pa.replaceChild(nels.length > 1 ? Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createFragment"])(nels) : nels[0], cursorCmt);
        }
        else {
            pa.insertBefore(el, fd);
        }
        if (isC) {
            preEl.__destroy();
        }
        else {
            pa.removeChild(fd);
        }
        roots[0] = el;
        newComponent && el.__handleAfterRender();
    }
    __beforeDestroy() {
        this._viewDereg();
    }
}
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/core.js":
/*!************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/core.js ***!
  \************************************************************************/
/*! exports provided: BaseRouter, HashRouter, Html5Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRouter", function() { return BaseRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5Router", function() { return Html5Router; });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/view.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/redirect */ "../../jinge-ui-router/lib/components/redirect.js");



function viewConfigFactory(path, decl) {
    return new _view__WEBPACK_IMPORTED_MODULE_1__["JingeViewConfig"](path, decl);
}
class BaseRouter extends _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["UIRouter"] {
    constructor(locationPlugin, options) {
        super();
        this.viewService._pluginapi._viewConfigFactory('jinge', viewConfigFactory);
        this.stateRegistry.decorator('views', _view__WEBPACK_IMPORTED_MODULE_1__["jingeViewsBuilder"]);
        this._started = false;
        if (options === null || options === void 0 ? void 0 : options.trace)
            this.trace.enable(1);
        this.plugin(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["servicesPlugin"]);
        this.plugin(locationPlugin);
    }
    register(...stateDefines) {
        stateDefines.forEach(stateDef => {
            if (stateDef.redirectTo && !stateDef.component) {
                stateDef.component = _components_redirect__WEBPACK_IMPORTED_MODULE_2__["UIRedirect"];
            }
            this.stateRegistry.register(stateDef);
        });
        return this;
    }
    /**
     * @param {String} stateName name of target state
     */
    otherwise(stateName) {
        this.urlRouter.otherwise({
            state: stateName
        });
        return this;
    }
    start() {
        if (this._started)
            throw new Error('has been started');
        this.urlService.listen();
        this.urlService.sync();
        this._started = true;
    }
    includes(stateOrName, params, options) {
        return this.stateService.includes(stateOrName, params, options);
    }
    href(stateOrName, params, options) {
        return this.stateService.href(stateOrName, params, options);
    }
    go(to, params, options) {
        return this.stateService.go(to, params, options);
    }
    get params() {
        return this.stateService.params;
    }
    get transition() {
        return this.stateService.transition;
    }
    get current() {
        return this.stateService.$current;
    }
    get baseHref() {
        return this.locationConfig.baseHref();
    }
}
class HashRouter extends BaseRouter {
    constructor(options) {
        super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["hashLocationPlugin"], options);
    }
}
class Html5Router extends BaseRouter {
    constructor(options) {
        super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["pushStateLocationPlugin"], options);
    }
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/index.js":
/*!*************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/index.js ***!
  \*************************************************************************/
/*! exports provided: UIViewComponent, UISrefComponent, UIRouterComponent, UIRedirect, BaseRouter, HashRouter, Html5Router, jingeViewsBuilder, JingeViewConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-ui-router/lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIViewComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISrefComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UISrefComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIRouterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIRedirect"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-ui-router/lib/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRouter", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["BaseRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HashRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5Router", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Html5Router"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/lib/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jingeViewsBuilder", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["jingeViewsBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JingeViewConfig", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["JingeViewConfig"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/lib/view.js":
/*!************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/lib/view.js ***!
  \************************************************************************/
/*! exports provided: jingeViewsBuilder, JingeViewConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jingeViewsBuilder", function() { return jingeViewsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingeViewConfig", function() { return JingeViewConfig; });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/**
 * Copied from https://github.com/ui-router/react/blob/master/src/reactViews.tsx
 * Modified by Yuhang Ge
 */

function jingeViewsBuilder(state) {
    const views = {};
    let viewsDefinitionObject;
    if (!state.views) {
        viewsDefinitionObject = {
            'default': {
                component: state.component
            }
        };
    }
    else {
        viewsDefinitionObject = Object.fromEntries(Object.keys(state.views).map(k => {
            const _decl = state.views[k];
            if (_decl.component) {
                return [k, _decl];
            }
            return [k, {
                    component: _decl
                }];
        }));
    }
    for (const name in viewsDefinitionObject) {
        const config = viewsDefinitionObject[name];
        if (Object.keys(config).length === 0)
            continue;
        config.$type = 'jinge';
        config.$context = state;
        config.$name = name || 'default';
        const normalized = _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["ViewService"].normalizeUIViewTarget(config.$context, config.$name);
        config.$uiViewName = normalized.uiViewName;
        config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
        views[config.$name] = config;
    }
    return views;
}
let AUTO_INC_ID = 0;
class JingeViewConfig {
    constructor(path, viewDecl) {
        this.loaded = true;
        this.$id = AUTO_INC_ID++;
        this.path = path;
        this.viewDecl = viewDecl;
        // console.log('new config', this.$id, viewDecl);
    }
    load() {
        return _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["services"].$q.when(this);
    }
}
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js ***!
  \*****************************************************************************************************************/
/*! exports provided: root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return fromJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return toJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return createProxyFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return removeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _removeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return pushTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _pushTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return deregAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return mergeR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return ancestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return mapObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return allTrueR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return anyTrueR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return unnestR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return flattenR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return pushR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return uniqR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return unnest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return assertPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return assertMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return assertFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return arrayTuples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return applyPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return silenceUncaughtInPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return silentRejection; });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Random utility functions used in the UI-Router code
 *
 * These functions are exported, but are subject to change without notice.
 *
 * @preferred @publicapi @module common
 */ /** */



var root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    undefined;
var angular = root.angular || {};
var fromJson = angular.fromJson || JSON.parse.bind(JSON);
var toJson = angular.toJson || JSON.stringify.bind(JSON);
var forEach = angular.forEach || _forEach;
var extend = Object.assign || _extend;
var equals = angular.equals || _equals;
function identity(x) {
    return x;
}
function noop() { }
/**
 * Builds proxy functions on the `to` object which pass through to the `from` object.
 *
 * For each key in `fnNames`, creates a proxy function on the `to` object.
 * The proxy function calls the real function on the `from` object.
 *
 *
 * #### Example:
 * This example creates an new class instance whose functions are prebound to the new'd object.
 * ```js
 * class Foo {
 *   constructor(data) {
 *     // Binds all functions from Foo.prototype to 'this',
 *     // then copies them to 'this'
 *     bindFunctions(Foo.prototype, this, this);
 *     this.data = data;
 *   }
 *
 *   log() {
 *     console.log(this.data);
 *   }
 * }
 *
 * let myFoo = new Foo([1,2,3]);
 * var logit = myFoo.log;
 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
 * ```
 *
 * #### Example:
 * This example creates a bound version of a service function, and copies it to another object
 * ```
 *
 * var SomeService = {
 *   this.data = [3, 4, 5];
 *   this.log = function() {
 *     console.log(this.data);
 *   }
 * }
 *
 * // Constructor fn
 * function OtherThing() {
 *   // Binds all functions from SomeService to SomeService,
 *   // then copies them to 'this'
 *   bindFunctions(SomeService, this, SomeService);
 * }
 *
 * let myOtherThing = new OtherThing();
 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
 * ```
 *
 * @param source A function that returns the source object which contains the original functions to be bound
 * @param target A function that returns the target object which will receive the bound functions
 * @param bind A function that returns the object which the functions will be bound to
 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
 */
function createProxyFunctions(source, target, bind, fnNames, latebind) {
    if (latebind === void 0) { latebind = false; }
    var bindFunction = function (fnName) { return source()[fnName].bind(bind()); };
    var makeLateRebindFn = function (fnName) {
        return function lateRebindFunction() {
            target[fnName] = bindFunction(fnName);
            return target[fnName].apply(null, arguments);
        };
    };
    fnNames = fnNames || Object.keys(source());
    return fnNames.reduce(function (acc, name) {
        acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
        return acc;
    }, target);
}
/**
 * prototypal inheritance helper.
 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
 */
var inherit = function (parent, extra) { return extend(Object.create(parent), extra); };
/** Given an array, returns true if the object is found in the array, (using indexOf) */
var inArray = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_inArray);
function _inArray(array, obj) {
    return array.indexOf(obj) !== -1;
}
/**
 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
 * The same array is returned
 */
var removeFrom = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_removeFrom);
function _removeFrom(array, obj) {
    var idx = array.indexOf(obj);
    if (idx >= 0)
        array.splice(idx, 1);
    return array;
}
/** pushes a values to an array and returns the value */
var pushTo = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_pushTo);
function _pushTo(arr, val) {
    return arr.push(val), val;
}
/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
var deregAll = function (functions) {
    return functions.slice().forEach(function (fn) {
        typeof fn === 'function' && fn();
        removeFrom(functions, fn);
    });
};
/**
 * Applies a set of defaults to an options object.  The options object is filtered
 * to only those properties of the objects in the defaultsList.
 * Earlier objects in the defaultsList take precedence when applying defaults.
 */
function defaults(opts) {
    var defaultsList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultsList[_i - 1] = arguments[_i];
    }
    var defaultVals = extend.apply(void 0, __spreadArrays([{}], defaultsList.reverse()));
    return extend(defaultVals, pick(opts || {}, Object.keys(defaultVals)));
}
/** Reduce function that merges each element of the list into a single object, using extend */
var mergeR = function (memo, item) { return extend(memo, item); };
/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
    var path = [];
    // tslint:disable-next-line:forin
    for (var n in first.path) {
        if (first.path[n] !== second.path[n])
            break;
        path.push(first.path[n]);
    }
    return path;
}
/**
 * Return a copy of the object only containing the whitelisted properties.
 *
 * #### Example:
 * ```
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the whitelisted property names
 */
function pick(obj, propNames) {
    var objCopy = {};
    for (var _prop in obj) {
        if (propNames.indexOf(_prop) !== -1) {
            objCopy[_prop] = obj[_prop];
        }
    }
    return objCopy;
}
/**
 * Return a copy of the object omitting the blacklisted properties.
 *
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, ['a', 'b']); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the blacklisted property names
 */
function omit(obj, propNames) {
    return Object.keys(obj)
        .filter(Object(_hof__WEBPACK_IMPORTED_MODULE_1__["not"])(inArray(propNames)))
        .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
}
/**
 * Maps an array, or object to a property (by name)
 */
function pluck(collection, propName) {
    return map(collection, Object(_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])(propName));
}
/** Filters an Array or an Object's properties based on a predicate */
function filter(collection, callback) {
    var arr = Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection), result = arr ? [] : {};
    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return (result[key] = x); };
    forEach(collection, function (item, i) {
        if (callback(item, i))
            accept(item, i);
    });
    return result;
}
/** Finds an object from an array, or a property of an object, that matches a predicate */
function find(collection, callback) {
    var result;
    forEach(collection, function (item, i) {
        if (result)
            return;
        if (callback(item, i))
            result = item;
    });
    return result;
}
/** Given an object, returns a new object, where each property is transformed by the callback function */
var mapObj = map;
/** Maps an array or object properties using a callback function */
function map(collection, callback, target) {
    target = target || (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection) ? [] : {});
    forEach(collection, function (item, i) { return (target[i] = callback(item, i)); });
    return target;
}
/**
 * Given an object, return its enumerable property values
 *
 * @example
 * ```
 *
 * let foo = { a: 1, b: 2, c: 3 }
 * let vals = values(foo); // [ 1, 2, 3 ]
 * ```
 */
var values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
/**
 * Reduce function that returns true if all of the values are truthy.
 *
 * @example
 * ```
 *
 * let vals = [ 1, true, {}, "hello world"];
 * vals.reduce(allTrueR, true); // true
 *
 * vals.push(0);
 * vals.reduce(allTrueR, true); // false
 * ```
 */
var allTrueR = function (memo, elem) { return memo && elem; };
/**
 * Reduce function that returns true if any of the values are truthy.
 *
 *  * @example
 * ```
 *
 * let vals = [ 0, null, undefined ];
 * vals.reduce(anyTrueR, true); // false
 *
 * vals.push("hello world");
 * vals.reduce(anyTrueR, true); // true
 * ```
 */
var anyTrueR = function (memo, elem) { return memo || elem; };
/**
 * Reduce function which un-nests a single level of arrays
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnestR = function (memo, elem) { return memo.concat(elem); };
/**
 * Reduce function which recursively un-nests all arrays
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flattenR = function (memo, elem) {
    return Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
};
/**
 * Reduce function that pushes an object to an array, then returns the array.
 * Mostly just for [[flattenR]] and [[uniqR]]
 */
function pushR(arr, obj) {
    arr.push(obj);
    return arr;
}
/** Reduce function that filters out duplicates */
var uniqR = function (acc, token) { return (inArray(acc, token) ? acc : pushR(acc, token)); };
/**
 * Return a new array with a single level of arrays unnested.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnest = function (arr) { return arr.reduce(unnestR, []); };
/**
 * Return a completely flattened version of an array.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flatten = function (arr) { return arr.reduce(flattenR, []); };
/**
 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
 * @example
 * ```
 *
 * let isNumber = (obj) => typeof(obj) === 'number';
 * let allNumbers = [ 1, 2, 3, 4, 5 ];
 * allNumbers.filter(assertPredicate(isNumber)); //OK
 *
 * let oneString = [ 1, 2, 3, 4, "5" ];
 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
 * ```
 */
var assertPredicate = assertFn;
/**
 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
 * @example
 * ```
 *
 * var data = { foo: 1, bar: 2 };
 *
 * let keys = [ 'foo', 'bar' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // values is [1, 2]
 *
 * let keys = [ 'foo', 'bar', 'baz' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // throws Error("Key not found")
 * ```
 */
var assertMap = assertFn;
function assertFn(predicateOrMap, errMsg) {
    if (errMsg === void 0) { errMsg = 'assert failure'; }
    return function (obj) {
        var result = predicateOrMap(obj);
        if (!result) {
            throw new Error(Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(errMsg) ? errMsg(obj) : errMsg);
        }
        return result;
    };
}
/**
 * Like _.pairs: Given an object, returns an array of key/value pairs
 *
 * @example
 * ```
 *
 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
 * ```
 */
var pairs = function (obj) { return Object.keys(obj).map(function (key) { return [key, obj[key]]; }); };
/**
 * Given two or more parallel arrays, returns an array of tuples where
 * each tuple is composed of [ a[i], b[i], ... z[i] ]
 *
 * @example
 * ```
 *
 * let foo = [ 0, 2, 4, 6 ];
 * let bar = [ 1, 3, 5, 7 ];
 * let baz = [ 10, 30, 50, 70 ];
 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
 * ```
 */
function arrayTuples() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0)
        return [];
    var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
    var result = [];
    var _loop_1 = function (i) {
        // This is a hot function
        // Unroll when there are 1-4 arguments
        switch (args.length) {
            case 1:
                result.push([args[0][i]]);
                break;
            case 2:
                result.push([args[0][i], args[1][i]]);
                break;
            case 3:
                result.push([args[0][i], args[1][i], args[2][i]]);
                break;
            case 4:
                result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                break;
            default:
                result.push(args.map(function (array) { return array[i]; }));
                break;
        }
    };
    for (var i = 0; i < maxArrayLen; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * Reduce function which builds an object from an array of [key, value] pairs.
 *
 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
 *
 * Each keyValueTuple should be an array with values [ key: string, value: any ]
 *
 * @example
 * ```
 *
 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
 *
 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 *
 * // Or, more simply:
 * var pairsToObj = pairs.reduce(applyPairs, {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 * ```
 */
function applyPairs(memo, keyValTuple) {
    var key, value;
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(keyValTuple))
        key = keyValTuple[0], value = keyValTuple[1];
    if (!Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(key))
        throw new Error('invalid parameters to applyPairs');
    memo[key] = value;
    return memo;
}
/** Get the last element of an array */
function tail(arr) {
    return (arr.length && arr[arr.length - 1]) || undefined;
}
/**
 * shallow copy from src to dest
 */
function copy(src, dest) {
    if (dest)
        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
    if (!dest)
        dest = {};
    return extend(dest, src);
}
/** Naive forEach implementation works with Objects or Arrays */
function _forEach(obj, cb, _this) {
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj))
        return obj.forEach(cb, _this);
    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
}
function _extend(toObj) {
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj)
            continue;
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; j++) {
            toObj[keys[j]] = obj[keys[j]];
        }
    }
    return toObj;
}
function _equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2;
    if (t1 !== t2 || t1 !== 'object')
        return false;
    var tup = [o1, o2];
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(tup))
        return _arraysEq(o1, o2);
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isDate"])(tup))
        return o1.getTime() === o2.getTime();
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(tup))
        return o1.toString() === o2.toString();
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(tup))
        return true; // meh
    var predicates = [_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isDate"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]];
    if (predicates.map(_hof__WEBPACK_IMPORTED_MODULE_1__["any"]).reduce(function (b, fn) { return b || !!fn(tup); }, false))
        return false;
    var keys = {};
    // tslint:disable-next-line:forin
    for (var key in o1) {
        if (!_equals(o1[key], o2[key]))
            return false;
        keys[key] = true;
    }
    for (var key in o2) {
        if (!keys[key])
            return false;
    }
    return true;
}
function _arraysEq(a1, a2) {
    if (a1.length !== a2.length)
        return false;
    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
}
// issue #2676
var silenceUncaughtInPromise = function (promise) { return promise.catch(function (e) { return 0; }) && promise; };
var silentRejection = function (error) { return silenceUncaughtInPromise(_coreservices__WEBPACK_IMPORTED_MODULE_2__["services"].$q.reject(error)); };
//# sourceMappingURL=common.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../jinge-demos/00-hello-world/node_modules/webpack/buildin/global.js */ "../00-hello-world/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js ***!
  \***********************************************************************************************************************/
/*! exports provided: makeStub, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return makeStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
var noImpl = function (fnname) { return function () {
    throw new Error("No implementation for " + fnname + ". The framework specific code did not implement this method.");
}; };
var makeStub = function (service, methods) {
    return methods.reduce(function (acc, key) { return ((acc[key] = noImpl(service + "." + key + "()")), acc); }, {});
};
var services = {
    $q: undefined,
    $injector: undefined,
};

//# sourceMappingURL=coreservices.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js":
/*!***************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js ***!
  \***************************************************************************************************************/
/*! exports provided: Glob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return Glob; });
/** @publicapi @module core */
/**
 * Matches state names using glob-like pattern strings.
 *
 * Globs can be used in specific APIs including:
 *
 * - [[StateService.is]]
 * - [[StateService.includes]]
 * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
 *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
 *
 * A `Glob` string is a pattern which matches state names.
 * Nested state names are split into segments (separated by a dot) when processing.
 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
 *
 * Globs work according to the following rules:
 *
 * ### Exact match:
 *
 * The glob `'A.B'` matches the state named exactly `'A.B'`.
 *
 * | Glob        |Matches states named|Does not match state named|
 * |:------------|:--------------------|:---------------------|
 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
 *
 * ### Single star (`*`)
 *
 * A single star (`*`) is a wildcard that matches exactly one segment.
 *
 * | Glob        |Matches states named  |Does not match state named |
 * |:------------|:---------------------|:--------------------------|
 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
 *
 * ### Double star (`**`)
 *
 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
 *
 * | Glob        |Matches states named                           |Does not match state named         |
 * |:------------|:----------------------------------------------|:----------------------------------|
 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
 *
 */
var Glob = /** @class */ (function () {
    function Glob(text) {
        this.text = text;
        this.glob = text.split('.');
        var regexpString = this.text
            .split('.')
            .map(function (seg) {
            if (seg === '**')
                return '(?:|(?:\\.[^.]*)*)';
            if (seg === '*')
                return '\\.[^.]*';
            return '\\.' + seg;
        })
            .join('');
        this.regexp = new RegExp('^' + regexpString + '$');
    }
    /** Returns true if the string has glob-like characters in it */
    Glob.is = function (text) {
        return !!/[!,*]+/.exec(text);
    };
    /** Returns a glob from the string, or null if the string isn't Glob-like */
    Glob.fromString = function (text) {
        return Glob.is(text) ? new Glob(text) : null;
    };
    Glob.prototype.matches = function (name) {
        return this.regexp.test('.' + name);
    };
    return Glob;
}());

//# sourceMappingURL=glob.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js":
/*!**************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js ***!
  \**************************************************************************************************************/
/*! exports provided: curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return propEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/**
 * Higher order functions
 *
 * These utility functions are exported, but are subject to change without notice.
 *
 * @module common_hof
 */ /** */
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
 *
 * Given a function with N parameters, returns a new function that supports partial application.
 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
 * accept more parameters until all N parameters have been supplied.
 *
 *
 * This contrived example uses a partially applied function as an predicate, which returns true
 * if an object is found in both arrays.
 * @example
 * ```
 * // returns true if an object is in both of the two arrays
 * function inBoth(array1, array2, object) {
 *   return array1.indexOf(object) !== -1 &&
 *          array2.indexOf(object) !== 1;
 * }
 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
 * let foos = [obj1, obj3]
 * let bars = [obj3, obj4, obj5]
 *
 * // A curried "copy" of inBoth
 * let curriedInBoth = curry(inBoth);
 * // Partially apply both the array1 and array2
 * let inFoosAndBars = curriedInBoth(foos, bars);
 *
 * // Supply the final argument; since all arguments are
 * // supplied, the original inBoth function is then called.
 * let obj1InBoth = inFoosAndBars(obj1); // false
 *
 * // Use the inFoosAndBars as a predicate.
 * // Filter, on each iteration, supplies the final argument
 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
 *
 * ```
 *
 * @param fn
 * @returns {*|function(): (*|any)}
 */
function curry(fn) {
    return function curried() {
        if (arguments.length >= fn.length) {
            return fn.apply(this, arguments);
        }
        var args = Array.prototype.slice.call(arguments);
        return curried.bind.apply(curried, __spreadArrays([this], args));
    };
}
/**
 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
 * given: f(x), g(x), h(x)
 * let composed = compose(f,g,h)
 * then, composed is: f(g(h(x)))
 */
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start, result = args[start].apply(this, arguments);
        while (i--)
            result = args[i].call(this, result);
        return result;
    };
}
/**
 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
 * given: f(x), g(x), h(x)
 * let piped = pipe(f,g,h);
 * then, piped is: h(g(f(x)))
 */
function pipe() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return compose.apply(null, [].slice.call(arguments).reverse());
}
/**
 * Given a property name, returns a function that returns that property from an object
 * let obj = { foo: 1, name: "blarg" };
 * let getName = prop("name");
 * getName(obj) === "blarg"
 */
var prop = function (name) { return function (obj) { return obj && obj[name]; }; };
/**
 * Given a property name and a value, returns a function that returns a boolean based on whether
 * the passed object has a property that matches the value
 * let obj = { foo: 1, name: "blarg" };
 * let getName = propEq("name", "blarg");
 * getName(obj) === true
 */
var propEq = curry(function (name, _val, obj) { return obj && obj[name] === _val; });
/**
 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
 * let getName = prop("nestedObj.name");
 * getName(obj) === "blarg"
 * let propNotFound = prop("this.property.doesnt.exist");
 * propNotFound(obj) === undefined
 */
var parse = function (name) { return pipe.apply(null, name.split('.').map(prop)); };
/**
 * Given a function that returns a truthy or falsey value, returns a
 * function that returns the opposite (falsey or truthy) value given the same inputs
 */
var not = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return !fn.apply(null, args);
}; };
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if both functions return truthy for the given arguments
 */
function and(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) && fn2.apply(null, args);
    };
}
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if at least one of the functions returns truthy for the given arguments
 */
function or(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) || fn2.apply(null, args);
    };
}
/**
 * Check if all the elements of an array match a predicate function
 *
 * @param fn1 a predicate function `fn1`
 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
 */
var all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
// tslint:disable-next-line:variable-name
var any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
/** Given a class, returns a Predicate function that returns true if the object is of that class */
var is = function (ctor) { return function (obj) {
    return (obj != null && obj.constructor === ctor) || obj instanceof ctor;
}; };
/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
var eq = function (value) { return function (other) { return value === other; }; };
/** Given a value, returns a function which returns the value */
var val = function (v) { return function () { return v; }; };
function invoke(fnName, args) {
    return function (obj) { return obj[fnName].apply(obj, args); };
}
/**
 * Sorta like Pattern Matching (a functional programming conditional construct)
 *
 * See http://c2.com/cgi/wiki?PatternMatching
 *
 * This is a conditional construct which allows a series of predicates and output functions
 * to be checked and then applied.  Each predicate receives the input.  If the predicate
 * returns truthy, then its matching output function (mapping function) is provided with
 * the input and, then the result is returned.
 *
 * Each combination (2-tuple) of predicate + output function should be placed in an array
 * of size 2: [ predicate, mapFn ]
 *
 * These 2-tuples should be put in an outer array.
 *
 * @example
 * ```
 *
 * // Here's a 2-tuple where the first element is the isString predicate
 * // and the second element is a function that returns a description of the input
 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
 *
 * // Second tuple: predicate "isNumber", mapfn returns a description
 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
 *
 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
 *
 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
 *
 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
 *
 * console.log(descriptionOf(undefined)); // 'notdefined'
 * console.log(descriptionOf(55)); // '(55) That's a number!'
 * console.log(descriptionOf("foo")); // 'Here's your string foo'
 * ```
 *
 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
 * with a Predicate and a mapping/output function
 * @returns {function(any): *}
 */
function pattern(struct) {
    return function (x) {
        for (var i = 0; i < struct.length; i++) {
            if (struct[i][0](x))
                return struct[i][1](x);
        }
    };
}
//# sourceMappingURL=hof.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection, makeStub, services, Glob, curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern, isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise, Queue, maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR, Category, Trace, trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["fromJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["toJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["deregAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["mergeR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["ancestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["mapObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["anyTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["unnestR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["flattenR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pushR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["uniqR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["unnest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"]; });

/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return _coreservices__WEBPACK_IMPORTED_MODULE_1__["makeStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _coreservices__WEBPACK_IMPORTED_MODULE_1__["services"]; });

/* harmony import */ var _glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return _glob__WEBPACK_IMPORTED_MODULE_2__["Glob"]; });

/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["curry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["propEq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "val", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["val"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["pattern"]; });

/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isPromise"]; });

/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _queue__WEBPACK_IMPORTED_MODULE_5__["Queue"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["maxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["padString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["kebobString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["functionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["fnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["beforeAfterSubstr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["hostRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["stripLastPathElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["trimHashVal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitOnDelim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["joinNeighborsR"]; });

/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["Trace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["trace"]; });

/** @publicapi @module common */ /** */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js ***!
  \*********************************************************************************************************************/
/*! exports provided: isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return isInjectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** Predicates
 *
 * These predicates return true/false based on the input.
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_predicates
 */ /** */

var toStr = Object.prototype.toString;
var tis = function (t) { return function (x) { return typeof x === t; }; };
var isUndefined = tis('undefined');
var isDefined = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isUndefined);
var isNull = function (o) { return o === null; };
var isNullOrUndefined = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["or"])(isNull, isUndefined);
var isFunction = tis('function');
var isNumber = tis('number');
var isString = tis('string');
var isObject = function (x) { return x !== null && typeof x === 'object'; };
var isArray = Array.isArray;
var isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
var isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
/**
 * Predicate which checks if a value is injectable
 *
 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
 * where all the elements in the array are Strings, except the last one, which is a Function
 */
function isInjectable(val) {
    if (isArray(val) && val.length) {
        var head = val.slice(0, -1), tail = val.slice(-1);
        return !(head.filter(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isString)).length || tail.filter(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isFunction)).length);
    }
    return isFunction(val);
}
/**
 * Predicate which checks if a value looks like a Promise
 *
 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
 */
var isPromise = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["and"])(isObject, Object(_hof__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["prop"])('then'), isFunction));
//# sourceMappingURL=predicates.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js ***!
  \****************************************************************************************************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** @publicapi @module common */ /** */

var Queue = /** @class */ (function () {
    function Queue(_items, _limit) {
        if (_items === void 0) { _items = []; }
        if (_limit === void 0) { _limit = null; }
        this._items = _items;
        this._limit = _limit;
        this._evictListeners = [];
        this.onEvict = Object(_common__WEBPACK_IMPORTED_MODULE_0__["pushTo"])(this._evictListeners);
    }
    Queue.prototype.enqueue = function (item) {
        var items = this._items;
        items.push(item);
        if (this._limit && items.length > this._limit)
            this.evict();
        return item;
    };
    Queue.prototype.evict = function () {
        var item = this._items.shift();
        this._evictListeners.forEach(function (fn) { return fn(item); });
        return item;
    };
    Queue.prototype.dequeue = function () {
        if (this.size())
            return this._items.splice(0, 1)[0];
    };
    Queue.prototype.clear = function () {
        var current = this._items;
        this._items = [];
        return current;
    };
    Queue.prototype.size = function () {
        return this._items.length;
    };
    Queue.prototype.remove = function (item) {
        var idx = this._items.indexOf(item);
        return idx > -1 && this._items.splice(idx, 1)[0];
    };
    Queue.prototype.peekTail = function () {
        return this._items[this._items.length - 1];
    };
    Queue.prototype.peekHead = function () {
        if (this.size())
            return this._items[0];
    };
    return Queue;
}());

//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/safeConsole.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/safeConsole.js ***!
  \**********************************************************************************************************************/
/*! exports provided: safeConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeConsole", function() { return safeConsole; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** workaround for missing console object in IE9 when dev tools haven't been opened o_O */
/* tslint:disable:no-console */

var noopConsoleStub = { log: _common__WEBPACK_IMPORTED_MODULE_0__["noop"], error: _common__WEBPACK_IMPORTED_MODULE_0__["noop"], table: _common__WEBPACK_IMPORTED_MODULE_0__["noop"] };
function ie9Console(console) {
    var bound = function (fn) { return Function.prototype.bind.call(fn, console); };
    return {
        log: bound(console.log),
        error: bound(console.log),
        table: bound(console.log),
    };
}
function fallbackConsole(console) {
    var log = console.log.bind(console);
    var error = console.error ? console.error.bind(console) : log;
    var table = console.table ? console.table.bind(console) : log;
    return { log: log, error: error, table: table };
}
function getSafeConsole() {
    // @ts-ignore
    var isIE9 = typeof document !== 'undefined' && document.documentMode && document.documentMode === 9;
    if (isIE9) {
        return window && window.console ? ie9Console(window.console) : noopConsoleStub;
    }
    else if (!console.table || !console.error) {
        return fallbackConsole(console);
    }
    else {
        return console;
    }
}
var safeConsole = getSafeConsole();
//# sourceMappingURL=safeConsole.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js ***!
  \******************************************************************************************************************/
/*! exports provided: maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return padString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return kebobString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return functionToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return fnToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return beforeAfterSubstr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return hostRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return stripLastPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return splitHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return splitQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return splitEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return trimHashVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return splitOnDelim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return joinNeighborsR; });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/**
 * Functions that manipulate strings
 *
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_strings
 */ /** */




/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + '...';
}
/**
 * Returns a string, with spaces added to the end, up to a desired str length
 *
 * If the string is already longer than the desired length, return the string.
 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
 *
 * @param length the desired length of the string to return
 * @param str the input string
 */
function padString(length, str) {
    while (str.length < length)
        str += ' ';
    return str;
}
function kebobString(camelCase) {
    return camelCase
        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
        .replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); }); // replace rest
}
function functionToString(fn) {
    var fnStr = fnToString(fn);
    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
    var fnName = fn['name'] || '';
    if (fnName && toStr.match(/function \(/)) {
        return 'function ' + fnName + toStr.substr(9);
    }
    return toStr;
}
function fnToString(fn) {
    var _fn = Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fn) ? fn.slice(-1)[0] : fn;
    return (_fn && _fn.toString()) || 'undefined';
}
var isRejection = _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__["Rejection"].isRejectionPromise;
var hasToString = function (obj) {
    return Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj) && !Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) && obj.constructor !== Object && Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj.toString);
};
var stringifyPattern = Object(_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('undefined')],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isNull"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('null')],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isPromise"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('[Promise]')],
    [isRejection, function (x) { return x._transitionRejection.toString(); }],
    [hasToString, function (x) { return x.toString(); }],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isInjectable"], functionToString],
    [Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])(true), _common__WEBPACK_IMPORTED_MODULE_2__["identity"]],
]);
function stringify(o) {
    var seen = [];
    function format(value) {
        if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
            if (seen.indexOf(value) !== -1)
                return '[circular ref]';
            seen.push(value);
        }
        return stringifyPattern(value);
    }
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(o)) {
        // Workaround for IE & Edge Spec incompatibility where replacer function would not be called when JSON.stringify
        // is given `undefined` as value. To work around that, we simply detect `undefined` and bail out early by
        // manually stringifying it.
        return format(o);
    }
    return JSON.stringify(o, function (key, value) { return format(value); }).replace(/\\"/g, '"');
}
/** Returns a function that splits a string on a character or substring */
var beforeAfterSubstr = function (char) { return function (str) {
    if (!str)
        return ['', ''];
    var idx = str.indexOf(char);
    if (idx === -1)
        return [str, ''];
    return [str.substr(0, idx), str.substr(idx + 1)];
}; };
var hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
var stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
var splitHash = beforeAfterSubstr('#');
var splitQuery = beforeAfterSubstr('?');
var splitEqual = beforeAfterSubstr('=');
var trimHashVal = function (str) { return (str ? str.replace(/^#/, '') : ''); };
/**
 * Splits on a delimiter, but returns the delimiters in the array
 *
 * #### Example:
 * ```js
 * var splitOnSlashes = splitOnDelim('/');
 * splitOnSlashes("/foo"); // ["/", "foo"]
 * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
 * ```
 */
function splitOnDelim(delim) {
    var re = new RegExp('(' + delim + ')', 'g');
    return function (str) { return str.split(re).filter(_common__WEBPACK_IMPORTED_MODULE_2__["identity"]); };
}
/**
 * Reduce fn that joins neighboring strings
 *
 * Given an array of strings, returns a new array
 * where all neighboring strings have been joined.
 *
 * #### Example:
 * ```js
 * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
 * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
 * ```
 */
function joinNeighborsR(acc, x) {
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(Object(_common__WEBPACK_IMPORTED_MODULE_2__["tail"])(acc)) && Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(x))
        return acc.slice(0, -1).concat(Object(_common__WEBPACK_IMPORTED_MODULE_2__["tail"])(acc) + x);
    return Object(_common__WEBPACK_IMPORTED_MODULE_2__["pushR"])(acc, x);
}
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js ***!
  \****************************************************************************************************************/
/*! exports provided: Category, Trace, trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _safeConsole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeConsole */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/safeConsole.js");
/**
 * # Transition tracing (debug)
 *
 * Enable transition tracing to print transition information to the console,
 * in order to help debug your application.
 * Tracing logs detailed information about each Transition to your console.
 *
 * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
 *
 * ### ES6
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
 * ```
 *
 * ### CJS
 * ```js
 * let trace = require("@uirouter/core").trace;
 * trace.enable("TRANSITION", "VIEWCONFIG");
 * ```
 *
 * ### Globals
 * ```js
 * let trace = window["@uirouter/core"].trace;
 * trace.enable(); // Trace everything (very verbose)
 * ```
 *
 * ### Angular 1:
 * ```js
 * app.run($trace => $trace.enable());
 * ```
 *
 * @publicapi @module trace
 */




/** @hidden */
function uiViewString(uiview) {
    if (!uiview)
        return 'ui-view (defunct)';
    var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
    return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
}
/** @hidden */
var viewConfigString = function (viewConfig) {
    var view = viewConfig.viewDecl;
    var state = view.$context.name || '(root)';
    return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
};
/** @hidden */
function normalizedCat(input) {
    return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(input) ? Category[input] : Category[Category[input]];
}
/**
 * Trace categories Enum
 *
 * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
 *
 * `trace.enable(Category.TRANSITION)`
 *
 * These can also be provided using a matching string, or position ordinal
 *
 * `trace.enable("TRANSITION")`
 *
 * `trace.enable(1)`
 */
var Category;
(function (Category) {
    Category[Category["RESOLVE"] = 0] = "RESOLVE";
    Category[Category["TRANSITION"] = 1] = "TRANSITION";
    Category[Category["HOOK"] = 2] = "HOOK";
    Category[Category["UIVIEW"] = 3] = "UIVIEW";
    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(Category || (Category = {}));

/** @hidden */
var _tid = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('$id');
/** @hidden */
var _rid = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('router.$id');
/** @hidden */
var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
/**
 * Prints UI-Router Transition trace information to the console.
 */
var Trace = /** @class */ (function () {
    /** @hidden */
    function Trace() {
        /** @hidden */
        this._enabled = {};
        this.approximateDigests = 0;
    }
    /** @hidden */
    Trace.prototype._set = function (enabled, categories) {
        var _this = this;
        if (!categories.length) {
            categories = Object.keys(Category)
                .map(function (k) { return parseInt(k, 10); })
                .filter(function (k) { return !isNaN(k); })
                .map(function (key) { return Category[key]; });
        }
        categories.map(normalizedCat).forEach(function (category) { return (_this._enabled[category] = enabled); });
    };
    Trace.prototype.enable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(true, categories);
    };
    Trace.prototype.disable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(false, categories);
    };
    /**
     * Retrieves the enabled stateus of a [[Category]]
     *
     * ```js
     * trace.enabled("VIEWCONFIG"); // true or false
     * ```
     *
     * @returns boolean true if the category is enabled
     */
    Trace.prototype.enabled = function (category) {
        return !!this._enabled[normalizedCat(category)];
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionStart = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ": Started  -> " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionIgnored = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ": Ignored  <> " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookInvocation = function (step, trans, options) {
        if (!this.enabled(Category.HOOK))
            return;
        var event = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.hookType')(options) || 'internal', context = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.context.state.name')(options) || Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.context')(options) || 'unknown', name = Object(_strings__WEBPACK_IMPORTED_MODULE_2__["functionToString"])(step.registeredHook.callback);
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, name));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
        if (!this.enabled(Category.HOOK))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ":   <- Hook returned: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(hookResult)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvePath = function (path, when, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(resolvable.data)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceError = function (reason, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ": <- Rejected " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans) + ", reason: " + reason);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceSuccess = function (finalState, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log(transLbl(trans) + ": <- Success  " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans) + ", final state: " + finalState.name);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
        if (extra === void 0) { extra = ''; }
        if (!this.enabled(Category.UIVIEW))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log("ui-view: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["padString"])(30, event) + " " + uiViewString(viewData) + extra);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Updating', viewData, " with ViewConfig from context='" + context + "'");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewFill = function (viewData, html) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Fill', viewData, " with: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, html));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewSync = function (pairs) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        var uivheader = 'uiview component fqn';
        var cfgheader = 'view config state (view name)';
        var mapping = pairs
            .map(function (_a) {
            var _b;
            var uiView = _a.uiView, viewConfig = _a.viewConfig;
            var uiv = uiView && uiView.fqn;
            var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": (" + viewConfig.viewDecl.$name + ")";
            return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
        })
            .sort(function (a, b) { return (a[uivheader] || '').localeCompare(b[uivheader] || ''); });
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].table(mapping);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        _safeConsole__WEBPACK_IMPORTED_MODULE_3__["safeConsole"].log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
    };
    return Trace;
}());

/**
 * The [[Trace]] singleton
 *
 * #### Example:
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5);
 * ```
 */
var trace = new Trace();

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js":
/*!***********************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js ***!
  \***********************************************************************************************************/
/*! exports provided: UIRouterGlobals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouterGlobals", function() { return UIRouterGlobals; });
/* harmony import */ var _params_stateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params/stateParams */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/** @publicapi @module core */ /** */


/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
var UIRouterGlobals = /** @class */ (function () {
    function UIRouterGlobals() {
        /**
         * Current parameter values
         *
         * The parameter values from the latest successful transition
         */
        this.params = new _params_stateParams__WEBPACK_IMPORTED_MODULE_0__["StateParams"]();
        /** @internalapi */
        this.lastStartedTransitionId = -1;
        /** @internalapi */
        this.transitionHistory = new _common_queue__WEBPACK_IMPORTED_MODULE_1__["Queue"]([], 1);
        /** @internalapi */
        this.successfulTransitions = new _common_queue__WEBPACK_IMPORTED_MODULE_1__["Queue"]([], 1);
    }
    UIRouterGlobals.prototype.dispose = function () {
        this.transitionHistory.clear();
        this.successfulTransitions.clear();
        this.transition = null;
    };
    return UIRouterGlobals;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js ***!
  \*************************************************************************************************************************/
/*! exports provided: registerAddCoreResolvables, treeChangesCleanup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAddCoreResolvables", function() { return registerAddCoreResolvables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeChangesCleanup", function() { return treeChangesCleanup; });
/* harmony import */ var _transition_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolve */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module hooks */ /** */




function addCoreResolvables(trans) {
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(_router__WEBPACK_IMPORTED_MODULE_1__["UIRouter"], trans.router), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(_transition_transition__WEBPACK_IMPORTED_MODULE_0__["Transition"], trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$transition$', trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$stateParams', trans.params()), '');
    trans.entering().forEach(function (state) {
        trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$state$', state), state);
    });
}
var registerAddCoreResolvables = function (transitionService) {
    return transitionService.onCreate({}, addCoreResolvables);
};
var TRANSITION_TOKENS = ['$transition$', _transition_transition__WEBPACK_IMPORTED_MODULE_0__["Transition"]];
var isTransition = Object(_common__WEBPACK_IMPORTED_MODULE_3__["inArray"])(TRANSITION_TOKENS);
// References to Transition in the treeChanges pathnodes makes all
// previous Transitions reachable in memory, causing a memory leak
// This function removes resolves for '$transition$' and `Transition` from the treeChanges.
// Do not use this on current transitions, only on old ones.
var treeChangesCleanup = function (trans) {
    var nodes = Object(_common__WEBPACK_IMPORTED_MODULE_3__["values"])(trans.treeChanges())
        .reduce(_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], [])
        .reduce(_common__WEBPACK_IMPORTED_MODULE_3__["uniqR"], []);
    // If the resolvable is a Transition, return a new resolvable with null data
    var replaceTransitionWithNull = function (r) {
        return isTransition(r.token) ? _resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(r.token, null) : r;
    };
    nodes.forEach(function (node) {
        node.resolvables = node.resolvables.map(replaceTransitionWithNull);
    });
};
//# sourceMappingURL=coreResolvables.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js ***!
  \***************************************************************************************************************************/
/*! exports provided: registerIgnoredTransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIgnoredTransitionHook", function() { return registerIgnoredTransitionHook; });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/** @internalapi @module hooks */ /** */


/**
 * A [[TransitionHookFn]] that skips a transition if it should be ignored
 *
 * This hook is invoked at the end of the onBefore phase.
 *
 * If the transition should be ignored (because no parameter or states changed)
 * then the transition is ignored and not processed.
 */
function ignoredHook(trans) {
    var ignoredReason = trans._ignoredReason();
    if (!ignoredReason)
        return;
    _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceTransitionIgnored(trans);
    var pending = trans.router.globals.transition;
    // The user clicked a link going back to the *current state* ('A')
    // However, there is also a pending transition in flight (to 'B')
    // Abort the transition to 'B' because the user now wants to be back at 'A'.
    if (ignoredReason === 'SameAsCurrent' && pending) {
        pending.abort();
    }
    return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__["Rejection"].ignored().toPromise();
}
var registerIgnoredTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, ignoredHook, { priority: -9999 });
};
//# sourceMappingURL=ignoredTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js ***!
  \***************************************************************************************************************************/
/*! exports provided: registerInvalidTransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInvalidTransitionHook", function() { return registerInvalidTransitionHook; });
/** @internalapi @module hooks */ /** */
/**
 * A [[TransitionHookFn]] that rejects the Transition if it is invalid
 *
 * This hook is invoked at the end of the onBefore phase.
 * If the transition is invalid (for example, param values do not validate)
 * then the transition is rejected.
 */
function invalidTransitionHook(trans) {
    if (!trans.valid()) {
        throw new Error(trans.error().toString());
    }
}
var registerInvalidTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, invalidTransitionHook, { priority: -10000 });
};
//# sourceMappingURL=invalidTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js ***!
  \******************************************************************************************************************/
/*! exports provided: registerLazyLoadHook, lazyLoadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLazyLoadHook", function() { return registerLazyLoadHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadState", function() { return lazyLoadState; });
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");

/**
 * A [[TransitionHookFn]] that performs lazy loading
 *
 * When entering a state "abc" which has a `lazyLoad` function defined:
 * - Invoke the `lazyLoad` function (unless it is already in process)
 *   - Flag the hook function as "in process"
 *   - The function should return a promise (that resolves when lazy loading is complete)
 * - Wait for the promise to settle
 *   - If the promise resolves to a [[LazyLoadResult]], then register those states
 *   - Flag the hook function as "not in process"
 * - If the hook was successful
 *   - Remove the `lazyLoad` function from the state declaration
 * - If all the hooks were successful
 *   - Retry the transition (by returning a TargetState)
 *
 * ```
 * .state('abc', {
 *   component: 'fooComponent',
 *   lazyLoad: () => import('./fooComponent')
 *   });
 * ```
 *
 * See [[StateDeclaration.lazyLoad]]
 */
var lazyLoadHook = function (transition) {
    var router = transition.router;
    function retryTransition() {
        if (transition.originalTransition().options().source !== 'url') {
            // The original transition was not triggered via url sync
            // The lazy state should be loaded now, so re-try the original transition
            var orig = transition.targetState();
            return router.stateService.target(orig.identifier(), orig.params(), orig.options());
        }
        // The original transition was triggered via url sync
        // Run the URL rules and find the best match
        var $url = router.urlService;
        var result = $url.match($url.parts());
        var rule = result && result.rule;
        // If the best match is a state, redirect the transition (instead
        // of calling sync() which supersedes the current transition)
        if (rule && rule.type === 'STATE') {
            var state = rule.state;
            var params = result.match;
            return router.stateService.target(state, params, transition.options());
        }
        // No matching state found, so let .sync() choose the best non-state match/otherwise
        router.urlService.sync();
    }
    var promises = transition
        .entering()
        .filter(function (state) { return !!state.$$state().lazyLoad; })
        .map(function (state) { return lazyLoadState(transition, state); });
    return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q.all(promises).then(retryTransition);
};
var registerLazyLoadHook = function (transitionService) {
    return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
};
/**
 * Invokes a state's lazy load function
 *
 * @param transition a Transition context
 * @param state the state to lazy load
 * @returns A promise for the lazy load result
 */
function lazyLoadState(transition, state) {
    var lazyLoadFn = state.$$state().lazyLoad;
    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
    var promise = lazyLoadFn['_promise'];
    if (!promise) {
        var success = function (result) {
            delete state.lazyLoad;
            delete state.$$state().lazyLoad;
            delete lazyLoadFn['_promise'];
            return result;
        };
        var error = function (err) {
            delete lazyLoadFn['_promise'];
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q.reject(err);
        };
        promise = lazyLoadFn['_promise'] = _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q
            .when(lazyLoadFn(transition, state))
            .then(updateStateRegistry)
            .then(success, error);
    }
    /** Register any lazy loaded state definitions */
    function updateStateRegistry(result) {
        if (result && Array.isArray(result.states)) {
            result.states.forEach(function (_state) { return transition.router.stateRegistry.register(_state); });
        }
        return result;
    }
    return promise;
}
//# sourceMappingURL=lazyLoad.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js ***!
  \***************************************************************************************************************************/
/*! exports provided: registerOnExitHook, registerOnRetainHook, registerOnEnterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnExitHook", function() { return registerOnExitHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnRetainHook", function() { return registerOnRetainHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnEnterHook", function() { return registerOnEnterHook; });
/**
 * A factory which creates an onEnter, onExit or onRetain transition hook function
 *
 * The returned function invokes the (for instance) state.onEnter hook when the
 * state is being entered.
 *
 * @hidden
 */
function makeEnterExitRetainHook(hookName) {
    return function (transition, state) {
        var _state = state.$$state();
        var hookFn = _state[hookName];
        return hookFn(transition, state);
    };
}
/**
 * The [[TransitionStateHookFn]] for onExit
 *
 * When the state is being exited, the state's .onExit function is invoked.
 *
 * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
 *
 * See: [[IHookRegistry.onExit]]
 */
var onExitHook = makeEnterExitRetainHook('onExit');
var registerOnExitHook = function (transitionService) {
    return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
};
/**
 * The [[TransitionStateHookFn]] for onRetain
 *
 * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
 *
 * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
 *
 * See: [[IHookRegistry.onRetain]]
 */
var onRetainHook = makeEnterExitRetainHook('onRetain');
var registerOnRetainHook = function (transitionService) {
    return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
};
/**
 * The [[TransitionStateHookFn]] for onEnter
 *
 * When the state is being entered, the state's .onEnter function is invoked.
 *
 * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
 *
 * See: [[IHookRegistry.onEnter]]
 */
var onEnterHook = makeEnterExitRetainHook('onEnter');
var registerOnEnterHook = function (transitionService) {
    return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
};
//# sourceMappingURL=onEnterExitRetain.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js":
/*!********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js ***!
  \********************************************************************************************************************/
/*! exports provided: registerRedirectToHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRedirectToHook", function() { return registerRedirectToHook; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/** @internalapi @module hooks */ /** */



/**
 * A [[TransitionHookFn]] that redirects to a different state or params
 *
 * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
 *
 * See [[StateDeclaration.redirectTo]]
 */
var redirectToHook = function (trans) {
    var redirect = trans.to().redirectTo;
    if (!redirect)
        return;
    var $state = trans.router.stateService;
    function handleResult(result) {
        if (!result)
            return;
        if (result instanceof _state_targetState__WEBPACK_IMPORTED_MODULE_2__["TargetState"])
            return result;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(result))
            return $state.target(result, trans.params(), trans.options());
        if (result['state'] || result['params'])
            return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
    }
    if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(redirect)) {
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(redirect(trans)).then(handleResult);
    }
    return handleResult(redirect);
};
var registerRedirectToHook = function (transitionService) {
    return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
};
//# sourceMappingURL=redirectTo.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js ***!
  \*****************************************************************************************************************/
/*! exports provided: RESOLVE_HOOK_PRIORITY, registerEagerResolvePath, registerLazyResolveState, registerResolveRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_HOOK_PRIORITY", function() { return RESOLVE_HOOK_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEagerResolvePath", function() { return registerEagerResolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLazyResolveState", function() { return registerLazyResolveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerResolveRemaining", function() { return registerResolveRemaining; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @internalapi @module hooks */ /** */



var RESOLVE_HOOK_PRIORITY = 1000;
/**
 * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
 *
 * Registered using `transitionService.onStart({}, eagerResolvePath, { priority: 1000 });`
 *
 * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var eagerResolvePath = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to).resolvePath('EAGER', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerEagerResolvePath = function (transitionService) {
    return transitionService.onStart({}, eagerResolvePath, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
 *
 * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState, { priority: 1000 });`
 *
 * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var lazyResolveState = function (trans, state) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to)
        .subContext(state.$$state())
        .resolvePath('LAZY', trans)
        .then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerLazyResolveState = function (transitionService) {
    return transitionService.onEnter({ entering: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["val"])(true) }, lazyResolveState, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves any dynamically added (LAZY or EAGER) Resolvables.
 *
 * Registered using `transitionService.onFinish({}, eagerResolvePath, { priority: 1000 });`
 *
 * After all entering states have been entered, this hook resolves any remaining Resolvables.
 * These are typically dynamic resolves which were added by some Transition Hook using [[Transition.addResolvable]].
 *
 * See [[StateDeclaration.resolve]]
 */
var resolveRemaining = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to).resolvePath('LAZY', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerResolveRemaining = function (transitionService) {
    return transitionService.onFinish({}, resolveRemaining, { priority: RESOLVE_HOOK_PRIORITY });
};
//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js ***!
  \***********************************************************************************************************************/
/*! exports provided: registerUpdateGlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUpdateGlobalState", function() { return registerUpdateGlobalState; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");

/**
 * A [[TransitionHookFn]] which updates global UI-Router state
 *
 * Registered using `transitionService.onBefore({}, updateGlobalState);`
 *
 * Before a [[Transition]] starts, updates the global value of "the current transition" ([[Globals.transition]]).
 * After a successful [[Transition]], updates the global values of "the current state"
 * ([[Globals.current]] and [[Globals.$current]]) and "the current param values" ([[Globals.params]]).
 *
 * See also the deprecated properties:
 * [[StateService.transition]], [[StateService.current]], [[StateService.params]]
 */
var updateGlobalState = function (trans) {
    var globals = trans.router.globals;
    var transitionSuccessful = function () {
        globals.successfulTransitions.enqueue(trans);
        globals.$current = trans.$to();
        globals.current = globals.$current.self;
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["copy"])(trans.params(), globals.params);
    };
    var clearCurrentTransition = function () {
        // Do not clear globals.transition if a different transition has started in the meantime
        if (globals.transition === trans)
            globals.transition = null;
    };
    trans.onSuccess({}, transitionSuccessful, { priority: 10000 });
    trans.promise.then(clearCurrentTransition, clearCurrentTransition);
};
var registerUpdateGlobalState = function (transitionService) {
    return transitionService.onCreate({}, updateGlobalState);
};
//# sourceMappingURL=updateGlobals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js ***!
  \*************************************************************************************************************/
/*! exports provided: registerUpdateUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUpdateUrl", function() { return registerUpdateUrl; });
/**
 * A [[TransitionHookFn]] which updates the URL after a successful transition
 *
 * Registered using `transitionService.onSuccess({}, updateUrl);`
 */
var updateUrl = function (transition) {
    var options = transition.options();
    var $state = transition.router.stateService;
    var $urlRouter = transition.router.urlRouter;
    // Dont update the url in these situations:
    // The transition was triggered by a URL sync (options.source === 'url')
    // The user doesn't want the url to update (options.location === false)
    // The destination state, and all parents have no navigable url
    if (options.source !== 'url' && options.location && $state.$current.navigable) {
        var urlOptions = { replace: options.location === 'replace' };
        $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
    }
    $urlRouter.update(true);
};
var registerUpdateUrl = function (transitionService) {
    return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js":
/*!***************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js ***!
  \***************************************************************************************************************/
/*! exports provided: registerLoadEnteringViews, registerActivateViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLoadEnteringViews", function() { return registerLoadEnteringViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerActivateViews", function() { return registerActivateViews; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @internalapi @module hooks */ /** */


/**
 * A [[TransitionHookFn]] which waits for the views to load
 *
 * Registered using `transitionService.onStart({}, loadEnteringViews);`
 *
 * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
 * In angular 1, this includes loading the templates.
 */
var loadEnteringViews = function (transition) {
    var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q;
    var enteringViews = transition.views('entering');
    if (!enteringViews.length)
        return;
    return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerLoadEnteringViews = function (transitionService) {
    return transitionService.onFinish({}, loadEnteringViews);
};
/**
 * A [[TransitionHookFn]] which activates the new views when a transition is successful.
 *
 * Registered using `transitionService.onSuccess({}, activateViews);`
 *
 * After a transition is complete, this hook deactivates the old views from the previous state,
 * and activates the new views from the destination state.
 *
 * See [[ViewService]]
 */
var activateViews = function (transition) {
    var enteringViews = transition.views('entering');
    var exitingViews = transition.views('exiting');
    if (!enteringViews.length && !exitingViews.length)
        return;
    var $view = transition.router.viewService;
    exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
    enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
    $view.sync();
};
var registerActivateViews = function (transitionService) {
    return transitionService.onSuccess({}, activateViews);
};
//# sourceMappingURL=views.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection, makeStub, services, Glob, curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern, isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise, Queue, maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR, Category, Trace, trace, DefType, Param, ParamTypes, StateParams, ParamType, PathNode, PathUtils, resolvePolicies, defaultResolvePolicy, Resolvable, NATIVE_INJECTOR_TOKEN, ResolveContext, resolvablesBuilder, StateBuilder, StateObject, StateMatcher, StateQueueManager, StateRegistry, StateService, TargetState, TransitionHookPhase, TransitionHookScope, HookBuilder, matchState, RegisteredHook, makeEvent, RejectType, Rejection, Transition, TransitionHook, TransitionEventType, defaultTransOpts, TransitionService, UrlMatcher, ParamFactory, UrlMatcherFactory, UrlRouter, UrlRuleFactory, BaseUrlRule, UrlService, UrlRules, UrlConfig, ViewService, UIRouterGlobals, UIRouter, $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin, UIRouterPluginBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["fromJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["toJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["deregAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["mergeR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["ancestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["mapObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["allTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["anyTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["unnestR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["flattenR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pushR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["uniqR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["unnest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["applyPairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["silentRejection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["makeStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["services"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Glob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["curry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["propEq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "val", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["val"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["maxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["padString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["kebobString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["functionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["fnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["beforeAfterSubstr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["hostRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["stripLastPathElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["trimHashVal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitOnDelim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["joinNeighborsR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Trace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony import */ var _params_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["DefType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["ParamTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["StateParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["ParamType"]; });

/* harmony import */ var _path_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return _path_index__WEBPACK_IMPORTED_MODULE_2__["PathNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return _path_index__WEBPACK_IMPORTED_MODULE_2__["PathUtils"]; });

/* harmony import */ var _resolve_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["resolvePolicies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["defaultResolvePolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["Resolvable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["NATIVE_INJECTOR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["ResolveContext"]; });

/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["resolvablesBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateQueueManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["TargetState"]; });

/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHookPhase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHookScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["HookBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["matchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["RegisteredHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["makeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["RejectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["Rejection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["defaultTransOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionService"]; });

/* harmony import */ var _url_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["ParamFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlMatcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRuleFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["BaseUrlRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlConfig"]; });

/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return _view_index__WEBPACK_IMPORTED_MODULE_7__["ViewService"]; });

/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterGlobals", function() { return _globals__WEBPACK_IMPORTED_MODULE_8__["UIRouterGlobals"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_9__["UIRouter"]; });

/* harmony import */ var _vanilla__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vanilla */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["$q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["$injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["BaseLocationServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["HashLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["MemoryLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["PushStateLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["MemoryLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["BrowserLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["locationPluginFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["memoryLocationPlugin"]; });

/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterPluginBase", function() { return _interface__WEBPACK_IMPORTED_MODULE_11__["UIRouterPluginBase"]; });

/** @publicapi @module common */ /** */












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js ***!
  \*************************************************************************************************************/
/*! exports provided: UIRouterPluginBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouterPluginBase", function() { return UIRouterPluginBase; });
/**
 * # Core classes and interfaces
 *
 * The classes and interfaces that are core to ui-router and do not belong
 * to a more specific subsystem (such as resolve).
 *
 * @preferred @publicapi @module core
 */ /** */
/** @internalapi */
var UIRouterPluginBase = /** @class */ (function () {
    function UIRouterPluginBase() {
    }
    UIRouterPluginBase.prototype.dispose = function (router) { };
    return UIRouterPluginBase;
}());

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: DefType, Param, ParamTypes, StateParams, ParamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _param__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return _param__WEBPACK_IMPORTED_MODULE_0__["DefType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _param__WEBPACK_IMPORTED_MODULE_0__["Param"]; });

/* harmony import */ var _paramTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paramTypes */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return _paramTypes__WEBPACK_IMPORTED_MODULE_1__["ParamTypes"]; });

/* harmony import */ var _stateParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateParams */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return _stateParams__WEBPACK_IMPORTED_MODULE_2__["StateParams"]; });

/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return _paramType__WEBPACK_IMPORTED_MODULE_3__["ParamType"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js ***!
  \****************************************************************************************************************/
/*! exports provided: DefType, Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return DefType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/** @publicapi @module params */ /** */





/** @hidden */
var hasOwn = Object.prototype.hasOwnProperty;
/** @hidden */
var isShorthand = function (cfg) {
    return ['value', 'type', 'squash', 'array', 'dynamic'].filter(hasOwn.bind(cfg || {})).length === 0;
};
/** @internalapi */
var DefType;
(function (DefType) {
    DefType[DefType["PATH"] = 0] = "PATH";
    DefType[DefType["SEARCH"] = 1] = "SEARCH";
    DefType[DefType["CONFIG"] = 2] = "CONFIG";
})(DefType || (DefType = {}));

/** @internalapi */
function getParamDeclaration(paramName, location, state) {
    var noReloadOnSearch = (state.reloadOnSearch === false && location === DefType.SEARCH) || undefined;
    var dynamic = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])([state.dynamic, noReloadOnSearch], _common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"]);
    var defaultConfig = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(dynamic) ? { dynamic: dynamic } : {};
    var paramConfig = unwrapShorthand(state && state.params && state.params[paramName]);
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(defaultConfig, paramConfig);
}
/** @hidden */
function unwrapShorthand(cfg) {
    cfg = isShorthand(cfg) ? { value: cfg } : cfg;
    getStaticDefaultValue['__cacheable'] = true;
    function getStaticDefaultValue() {
        return cfg.value;
    }
    var $$fn = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isInjectable"])(cfg.value) ? cfg.value : getStaticDefaultValue;
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(cfg, { $$fn: $$fn });
}
/** @hidden */
function getType(cfg, urlType, location, id, paramTypes) {
    if (cfg.type && urlType && urlType.name !== 'string')
        throw new Error("Param '" + id + "' has two type configurations.");
    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
        return paramTypes.type(cfg.type);
    if (urlType)
        return urlType;
    if (!cfg.type) {
        var type = location === DefType.CONFIG
            ? 'any'
            : location === DefType.PATH
                ? 'path'
                : location === DefType.SEARCH
                    ? 'query'
                    : 'string';
        return paramTypes.type(type);
    }
    return cfg.type instanceof _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"] ? cfg.type : paramTypes.type(cfg.type);
}
/**
 * @internalapi
 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
 */
function getSquashPolicy(config, isOptional, defaultPolicy) {
    var squash = config.squash;
    if (!isOptional || squash === false)
        return false;
    if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(squash) || squash == null)
        return defaultPolicy;
    if (squash === true || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
        return squash;
    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
}
/** @internalapi */
function getReplace(config, arrayMode, isOptional, squash) {
    var defaultPolicy = [
        { from: '', to: isOptional || arrayMode ? undefined : '' },
        { from: null, to: isOptional || arrayMode ? undefined : '' },
    ];
    var replace = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(config.replace) ? config.replace : [];
    if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
        replace.push({ from: squash, to: undefined });
    var configuredKeys = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(replace, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('from'));
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["filter"])(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
}
/** @internalapi */
var Param = /** @class */ (function () {
    function Param(id, type, location, urlConfig, state) {
        var config = getParamDeclaration(id, location, state);
        type = getType(config, type, location, id, urlConfig.paramTypes);
        var arrayMode = getArrayMode();
        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
        var isOptional = config.value !== undefined || location === DefType.SEARCH;
        var dynamic = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.dynamic) ? !!config.dynamic : !!type.dynamic;
        var raw = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.raw) ? !!config.raw : !!type.raw;
        var squash = getSquashPolicy(config, isOptional, urlConfig.defaultSquashPolicy());
        var replace = getReplace(config, arrayMode, isOptional, squash);
        var inherit = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.inherit) ? !!config.inherit : !!type.inherit;
        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
        function getArrayMode() {
            var arrayDefaults = { array: location === DefType.SEARCH ? 'auto' : false };
            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(arrayDefaults, arrayParamNomenclature, config).array;
        }
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit, array: arrayMode, config: config });
    }
    Param.values = function (params, values) {
        if (values === void 0) { values = {}; }
        var paramValues = {};
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            paramValues[param.id] = param.value(values[param.id]);
        }
        return paramValues;
    };
    /**
     * Finds [[Param]] objects which have different param values
     *
     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
     *
     * @param params: The list of Param objects to filter
     * @param values1: The first set of parameter values
     * @param values2: the second set of parameter values
     *
     * @returns any Param objects whose values were different between values1 and values2
     */
    Param.changed = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
    };
    /**
     * Checks if two param value objects are equal (for a set of [[Param]] objects)
     *
     * @param params The list of [[Param]] objects to check
     * @param values1 The first set of param values
     * @param values2 The second set of param values
     *
     * @returns true if the param values in values1 and values2 are equal
     */
    Param.equals = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return Param.changed(params, values1, values2).length === 0;
    };
    /** Returns true if a the parameter values are valid, according to the Param definitions */
    Param.validates = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"], true);
    };
    Param.prototype.isDefaultValue = function (value) {
        return this.isOptional && this.type.equals(this.value(), value);
    };
    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    Param.prototype.value = function (value) {
        var _this = this;
        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        var getDefaultValue = function () {
            if (_this._defaultValueCache)
                return _this._defaultValueCache.defaultValue;
            if (!_common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector)
                throw new Error('Injectable functions cannot be called at configuration time');
            var defaultValue = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector.invoke(_this.config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
            if (_this.config.$$fn['__cacheable']) {
                _this._defaultValueCache = { defaultValue: defaultValue };
            }
            return defaultValue;
        };
        var replaceSpecialValues = function (val) {
            for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                var tuple = _a[_i];
                if (tuple.from === val)
                    return tuple.to;
            }
            return val;
        };
        value = replaceSpecialValues(value);
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value) ? getDefaultValue() : this.type.$normalize(value);
    };
    Param.prototype.isSearch = function () {
        return this.location === DefType.SEARCH;
    };
    Param.prototype.validates = function (value) {
        // There was no parameter value, but the param is optional
        if ((Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value) || value === null) && this.isOptional)
            return true;
        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
        var normalized = this.type.$normalize(value);
        if (!this.type.is(normalized))
            return false;
        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
        var encoded = this.type.encode(normalized);
        return !(Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(encoded) && !this.type.pattern.exec(encoded));
    };
    Param.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
    };
    return Param;
}());

//# sourceMappingURL=param.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js":
/*!********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js ***!
  \********************************************************************************************************************/
/*! exports provided: ParamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return ParamType; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @publicapi @module params */ /** */


/**
 * An internal class which implements [[ParamTypeDefinition]].
 *
 * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
 * When a param type definition is registered, an instance of this class is created internally.
 *
 * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
 *
 * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
 *
 * #### Example:
 * ```js
 * var paramTypeDef = {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 *
 * var paramType = new ParamType(paramTypeDef);
 * ```
 * @internalapi
 */
var ParamType = /** @class */ (function () {
    /**
     * @param def  A configuration object which contains the custom type definition.  The object's
     *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
     * @returns a new ParamType object
     */
    function ParamType(def) {
        /** @inheritdoc */
        this.pattern = /.*/;
        /** @inheritdoc */
        this.inherit = true;
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, def);
    }
    // consider these four methods to be "abstract methods" that should be overridden
    /** @inheritdoc */
    ParamType.prototype.is = function (val, key) {
        return true;
    };
    /** @inheritdoc */
    ParamType.prototype.encode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.decode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.equals = function (a, b) {
        // tslint:disable-next-line:triple-equals
        return a == b;
    };
    ParamType.prototype.$subPattern = function () {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
    };
    ParamType.prototype.toString = function () {
        return "{ParamType:" + this.name + "}";
    };
    /** Given an encoded string, or a decoded object, returns a decoded object */
    ParamType.prototype.$normalize = function (val) {
        return this.is(val) ? val : this.decode(val);
    };
    /**
     * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
     * e.g.:
     * - urlmatcher pattern "/path?{queryParam[]:int}"
     * - url: "/path?queryParam=1&queryParam=2
     * - $stateParams.queryParam will be [1, 2]
     * if `mode` is "auto", then
     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
     */
    ParamType.prototype.$asArray = function (mode, isSearch) {
        if (!mode)
            return this;
        if (mode === 'auto' && !isSearch)
            throw new Error("'auto' array mode is for query parameters only");
        return new ArrayType(this, mode);
    };
    return ParamType;
}());

/**
 * Wraps up a `ParamType` object to handle array values.
 * @internalapi
 */
function ArrayType(type, mode) {
    var _this = this;
    // Wrap non-array value as array
    function arrayWrap(val) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(val) ? val : Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(val) ? [val] : [];
    }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
        switch (val.length) {
            case 0:
                return undefined;
            case 1:
                return mode === 'auto' ? val[0] : val;
            default:
                return val;
        }
    }
    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
        return function handleArray(val) {
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(val) && val.length === 0)
                return val;
            var arr = arrayWrap(val);
            var result = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(arr, callback);
            return allTruthyMode === true ? Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["filter"])(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
        };
    }
    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
        return function handleArray(val1, val2) {
            var left = arrayWrap(val1), right = arrayWrap(val2);
            if (left.length !== right.length)
                return false;
            for (var i = 0; i < left.length; i++) {
                if (!callback(left[i], right[i]))
                    return false;
            }
            return true;
        };
    }
    ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
        var paramTypeFn = type[name].bind(type);
        var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
        _this[name] = wrapperFn(paramTypeFn);
    });
    Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, {
        dynamic: type.dynamic,
        name: type.name,
        pattern: type.pattern,
        inherit: type.inherit,
        raw: type.raw,
        is: arrayHandler(type.is.bind(type), true),
        $arrayMode: mode,
    });
}
//# sourceMappingURL=paramType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js ***!
  \*********************************************************************************************************************/
/*! exports provided: ParamTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return ParamTypes; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/** @publicapi @module params */ /** */





/**
 * A registry for parameter types.
 *
 * This registry manages the built-in (and custom) parameter types.
 *
 * The built-in parameter types are:
 *
 * - [[string]]
 * - [[path]]
 * - [[query]]
 * - [[hash]]
 * - [[int]]
 * - [[bool]]
 * - [[date]]
 * - [[json]]
 * - [[any]]
 *
 * To register custom parameter types, use [[UrlConfig.type]], i.e.,
 *
 * ```js
 * router.urlService.config.type(customType)
 * ```
 */
var ParamTypes = /** @class */ (function () {
    /** @internalapi */
    function ParamTypes() {
        /** @hidden */
        this.enqueue = true;
        /** @hidden */
        this.typeQueue = [];
        /** @internalapi */
        this.defaultTypes = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["pick"])(ParamTypes.prototype, [
            'hash',
            'string',
            'query',
            'path',
            'int',
            'bool',
            'date',
            'json',
            'any',
        ]);
        // Register default types. Store them in the prototype of this.types.
        var makeType = function (definition, name) { return new _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"](Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ name: name }, definition)); };
        this.types = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(this.defaultTypes, makeType), {});
    }
    /** @internalapi */
    ParamTypes.prototype.dispose = function () {
        this.types = {};
    };
    /**
     * Registers a parameter type
     *
     * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
     */
    ParamTypes.prototype.type = function (name, definition, definitionFn) {
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(definition))
            return this.types[name];
        if (this.types.hasOwnProperty(name))
            throw new Error("A type named '" + name + "' has already been defined.");
        this.types[name] = new _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"](Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ name: name }, definition));
        if (definitionFn) {
            this.typeQueue.push({ name: name, def: definitionFn });
            if (!this.enqueue)
                this._flushTypeQueue();
        }
        return this;
    };
    /** @internalapi */
    ParamTypes.prototype._flushTypeQueue = function () {
        while (this.typeQueue.length) {
            var type = this.typeQueue.shift();
            if (type.pattern)
                throw new Error("You cannot override a type's .pattern at runtime.");
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.types[type.name], _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector.invoke(type.def));
        }
    };
    return ParamTypes;
}());

/** @hidden */
function initDefaultTypes() {
    var makeDefaultType = function (def) {
        var valToString = function (val) { return (val != null ? val.toString() : val); };
        var defaultTypeBase = {
            encode: valToString,
            decode: valToString,
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(String),
            pattern: /.*/,
            // tslint:disable-next-line:triple-equals
            equals: function (a, b) { return a == b; },
        };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, defaultTypeBase, def);
    };
    // Default Parameter Type Definitions
    Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(ParamTypes.prototype, {
        string: makeDefaultType({}),
        path: makeDefaultType({
            pattern: /[^/]*/,
        }),
        query: makeDefaultType({}),
        hash: makeDefaultType({
            inherit: false,
        }),
        int: makeDefaultType({
            decode: function (val) { return parseInt(val, 10); },
            is: function (val) {
                return !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(val) && this.decode(val.toString()) === val;
            },
            pattern: /-?\d+/,
        }),
        bool: makeDefaultType({
            encode: function (val) { return (val && 1) || 0; },
            decode: function (val) { return parseInt(val, 10) !== 0; },
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Boolean),
            pattern: /0|1/,
        }),
        date: makeDefaultType({
            encode: function (val) {
                return !this.is(val)
                    ? undefined
                    : [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join('-');
            },
            decode: function (val) {
                if (this.is(val))
                    return val;
                var match = this.capture.exec(val);
                return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
            },
            is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
            equals: function (l, r) {
                return ['getFullYear', 'getMonth', 'getDate'].reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
        }),
        json: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__["toJson"],
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__["fromJson"],
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Object),
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__["equals"],
            pattern: /[^/]*/,
        }),
        // does not encode/decode
        any: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
            is: function () { return true; },
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__["equals"],
        }),
    });
}
initDefaultTypes();
//# sourceMappingURL=paramTypes.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js ***!
  \**********************************************************************************************************************/
/*! exports provided: StateParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return StateParams; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** @publicapi @module params */ /** */

/** @internalapi */
var StateParams = /** @class */ (function () {
    function StateParams(params) {
        if (params === void 0) { params = {}; }
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, params);
    }
    /**
     * Merges a set of parameters with all parameters inherited between the common parents of the
     * current state and a given destination state.
     *
     * @param {Object} newParams The set of parameters which will be composited with inherited params.
     * @param {Object} $current Internal definition of object representing the current state.
     * @param {Object} $to Internal definition of object representing state to transition to.
     */
    StateParams.prototype.$inherit = function (newParams, $current, $to) {
        var parentParams;
        var parents = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["ancestors"])($current, $to), inherited = {}, inheritList = [];
        for (var i in parents) {
            if (!parents[i] || !parents[i].params)
                continue;
            parentParams = Object.keys(parents[i].params);
            if (!parentParams.length)
                continue;
            for (var j in parentParams) {
                if (inheritList.indexOf(parentParams[j]) >= 0)
                    continue;
                inheritList.push(parentParams[j]);
                inherited[parentParams[j]] = this[parentParams[j]];
            }
        }
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, inherited, newParams);
    };
    return StateParams;
}());

//# sourceMappingURL=stateParams.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: PathNode, PathUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return _pathNode__WEBPACK_IMPORTED_MODULE_0__["PathNode"]; });

/* harmony import */ var _pathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return _pathUtils__WEBPACK_IMPORTED_MODULE_1__["PathUtils"]; });

/** @internalapi @module path */ /** */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js ***!
  \*****************************************************************************************************************/
/*! exports provided: PathNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return PathNode; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/** @internalapi @module path */ /** */



/**
 * A node in a [[TreeChanges]] path
 *
 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
 * Each PathNode corresponds to a state being entered, exited, or retained.
 * The stateful information includes parameter values and resolve data.
 */
var PathNode = /** @class */ (function () {
    function PathNode(stateOrNode) {
        if (stateOrNode instanceof PathNode) {
            var node = stateOrNode;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrNode;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
    PathNode.prototype.clone = function () {
        return new PathNode(this);
    };
    /** Sets [[paramValues]] for the node, from the values of an object hash */
    PathNode.prototype.applyRawParams = function (params) {
        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"])(memo, getParamVal(pDef)); }, {});
        return this;
    };
    /** Gets a specific [[Param]] metadata that belongs to the node */
    PathNode.prototype.parameter = function (name) {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this.paramSchema, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', name));
    };
    /**
     * @returns true if the state and parameter values for another PathNode are
     * equal to the state and param values for this PathNode
     */
    PathNode.prototype.equals = function (node, paramsFn) {
        var diff = this.diff(node, paramsFn);
        return diff && diff.length === 0;
    };
    /**
     * Finds Params with different parameter values on another PathNode.
     *
     * Given another node (of the same state), finds the parameter values which differ.
     * Returns the [[Param]] (schema objects) whose parameter values differ.
     *
     * Given another node for a different state, returns `false`
     *
     * @param node The node to compare to
     * @param paramsFn A function that returns which parameters should be compared.
     * @returns The [[Param]]s which differ, or null if the two nodes are for different states
     */
    PathNode.prototype.diff = function (node, paramsFn) {
        if (this.state !== node.state)
            return false;
        var params = paramsFn ? paramsFn(this) : this.paramSchema;
        return _params_param__WEBPACK_IMPORTED_MODULE_2__["Param"].changed(params, this.paramValues, node.paramValues);
    };
    /**
     * Returns a clone of the PathNode
     * @deprecated use instance method `node.clone()`
     */
    PathNode.clone = function (node) { return node.clone(); };
    return PathNode;
}());

//# sourceMappingURL=pathNode.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js ***!
  \******************************************************************************************************************/
/*! exports provided: PathUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return PathUtils; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/** @internalapi @module path */ /** */




/**
 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
 */
var PathUtils = /** @class */ (function () {
    function PathUtils() {
    }
    /** Given a PathNode[], create an TargetState */
    PathUtils.makeTargetState = function (registry, path) {
        var state = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(path).state;
        return new _state_targetState__WEBPACK_IMPORTED_MODULE_2__["TargetState"](registry, state, path.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["mergeR"], {}), {});
    };
    PathUtils.buildPath = function (targetState) {
        var toParams = targetState.params();
        return targetState.$state().path.map(function (state) { return new _pathNode__WEBPACK_IMPORTED_MODULE_3__["PathNode"](state).applyRawParams(toParams); });
    };
    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
    PathUtils.buildToPath = function (fromPath, targetState) {
        var toPath = PathUtils.buildPath(targetState);
        if (targetState.options().inherit) {
            return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
        }
        return toPath;
    };
    /**
     * Creates ViewConfig objects and adds to nodes.
     *
     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
     */
    PathUtils.applyViewConfigs = function ($view, path, states) {
        // Only apply the viewConfigs to the nodes for the given states
        path
            .filter(function (node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(states, node.state); })
            .forEach(function (node) {
            var viewDecls = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(node.state.views || {});
            var subPath = PathUtils.subPath(path, function (n) { return n === node; });
            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
            node.views = viewConfigs.reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []);
        });
    };
    /**
     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
     *
     * For a parameter in a node to be inherited from the from path:
     * - The toPath's node must have a matching node in the fromPath (by state).
     * - The parameter name must not be found in the toKeys parameter array.
     *
     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
     * it is not inherited from the fromPath.
     */
    PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
        if (toKeys === void 0) { toKeys = []; }
        function nodeParamVals(path, state) {
            var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(path, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('state', state));
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, node && node.paramValues);
        }
        var noInherit = fromPath
            .map(function (node) { return node.paramSchema; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (param) { return !param.inherit; })
            .map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('id'));
        /**
         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
         */
        function makeInheritedParamsNode(toNode) {
            // All param values for the node (may include default key/vals, when key was not found in toParams)
            var toParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, toNode && toNode.paramValues);
            // limited to only those keys found in toParams
            var incomingParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["pick"])(toParamVals, toKeys);
            toParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(toParamVals, toKeys);
            var fromParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
            var ownParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(toParamVals, fromParamVals, incomingParamVals);
            return new _pathNode__WEBPACK_IMPORTED_MODULE_3__["PathNode"](toNode.state).applyRawParams(ownParamVals);
        }
        // The param keys specified by the incoming toParams
        return toPath.map(makeInheritedParamsNode);
    };
    /**
     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
     */
    PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
        var max = Math.min(fromPath.length, toPath.length);
        var keep = 0;
        var nodesMatch = function (node1, node2) { return node1.equals(node2, PathUtils.nonDynamicParams); };
        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
            keep++;
        }
        /** Given a retained node, return a new node which uses the to node's param values */
        function applyToParams(retainedNode, idx) {
            var cloned = retainedNode.clone();
            cloned.paramValues = toPath[idx].paramValues;
            return cloned;
        }
        var from, retained, exiting, entering, to;
        from = fromPath;
        retained = from.slice(0, keep);
        exiting = from.slice(keep);
        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
        var retainedWithToParams = retained.map(applyToParams);
        entering = toPath.slice(keep);
        to = retainedWithToParams.concat(entering);
        return { from: from, to: to, retained: retained, retainedWithToParams: retainedWithToParams, exiting: exiting, entering: entering };
    };
    /**
     * Returns a new path which is: the subpath of the first path which matches the second path.
     *
     * The new path starts from root and contains any nodes that match the nodes in the second path.
     * It stops before the first non-matching node.
     *
     * Nodes are compared using their state property and their parameter values.
     * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
     *
     * @param pathA the first path
     * @param pathB the second path
     * @param paramsFn a function which returns the parameters to consider when comparing
     *
     * @returns an array of PathNodes from the first path which match the nodes in the second path
     */
    PathUtils.matching = function (pathA, pathB, paramsFn) {
        var done = false;
        var tuples = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(pathA, pathB);
        return tuples.reduce(function (matching, _a) {
            var nodeA = _a[0], nodeB = _a[1];
            done = done || !nodeA.equals(nodeB, paramsFn);
            return done ? matching : matching.concat(nodeA);
        }, []);
    };
    /**
     * Returns true if two paths are identical.
     *
     * @param pathA
     * @param pathB
     * @param paramsFn a function which returns the parameters to consider when comparing
     * @returns true if the the states and parameter values for both paths are identical
     */
    PathUtils.equals = function (pathA, pathB, paramsFn) {
        return pathA.length === pathB.length && PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
    };
    /**
     * Return a subpath of a path, which stops at the first matching node
     *
     * Given an array of nodes, returns a subset of the array starting from the first node,
     * stopping when the first node matches the predicate.
     *
     * @param path a path of [[PathNode]]s
     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
     * @returns a subpath up to the matching node, or undefined if no match is found
     */
    PathUtils.subPath = function (path, predicate) {
        var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(path, predicate);
        var elementIdx = path.indexOf(node);
        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
    };
    PathUtils.nonDynamicParams = function (node) {
        return node.state.parameters({ inherit: false }).filter(function (param) { return !param.dynamic; });
    };
    /** Gets the raw parameter values from a path */
    PathUtils.paramValues = function (path) { return path.reduce(function (acc, node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(acc, node.paramValues); }, {}); };
    return PathUtils;
}());

//# sourceMappingURL=pathUtils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: resolvePolicies, defaultResolvePolicy, Resolvable, NATIVE_INJECTOR_TOKEN, ResolveContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["resolvePolicies"]; });

/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return _resolvable__WEBPACK_IMPORTED_MODULE_1__["defaultResolvePolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return _resolvable__WEBPACK_IMPORTED_MODULE_1__["Resolvable"]; });

/* harmony import */ var _resolveContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return _resolveContext__WEBPACK_IMPORTED_MODULE_2__["NATIVE_INJECTOR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return _resolveContext__WEBPACK_IMPORTED_MODULE_2__["ResolveContext"]; });

/** @publicapi @module resolve */ /** */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js ***!
  \*********************************************************************************************************************/
/*! exports provided: resolvePolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return resolvePolicies; });
/** @internalapi */
var resolvePolicies = {
    when: {
        LAZY: 'LAZY',
        EAGER: 'EAGER',
    },
    async: {
        WAIT: 'WAIT',
        NOWAIT: 'NOWAIT',
    },
};
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js ***!
  \**********************************************************************************************************************/
/*! exports provided: defaultResolvePolicy, Resolvable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return defaultResolvePolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return Resolvable; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @publicapi @module resolve */ /** */






// TODO: explicitly make this user configurable
var defaultResolvePolicy = {
    when: 'LAZY',
    async: 'WAIT',
};
/**
 * The basic building block for the resolve system.
 *
 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
 * and the unwrapped-when-complete (.data) result of the resolveFn.
 *
 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
 * resolveFn) and returns the resulting promise.
 *
 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
 * parameter to those fns.
 */
var Resolvable = /** @class */ (function () {
    function Resolvable(arg1, resolveFn, deps, policy, data) {
        this.resolved = false;
        this.promise = undefined;
        if (arg1 instanceof Resolvable) {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, arg1);
        }
        else if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(resolveFn)) {
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(arg1))
                throw new Error('new Resolvable(): token argument is required');
            if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(resolveFn))
                throw new Error('new Resolvable(): resolveFn argument must be a function');
            this.token = arg1;
            this.policy = policy;
            this.resolveFn = resolveFn;
            this.deps = deps || [];
            this.data = data;
            this.resolved = data !== undefined;
            this.promise = this.resolved ? _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(this.data) : undefined;
        }
        else if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(arg1) && arg1.token && (arg1.hasOwnProperty('resolveFn') || arg1.hasOwnProperty('data'))) {
            var literal = arg1;
            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
        }
    }
    Resolvable.prototype.getPolicy = function (state) {
        var thisPolicy = this.policy || {};
        var statePolicy = (state && state.resolvePolicy) || {};
        return {
            when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
            async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async,
        };
    };
    /**
     * Asynchronously resolve this Resolvable's data
     *
     * Given a ResolveContext that this Resolvable is found in:
     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
     * and update the Resolvable's state
     */
    Resolvable.prototype.resolve = function (resolveContext, trans) {
        var _this = this;
        var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q;
        // Gets all dependencies from ResolveContext and wait for them to be resolved
        var getResolvableDependencies = function () {
            return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) { return resolvable.get(resolveContext, trans); }));
        };
        // Invokes the resolve function passing the resolved dependencies as arguments
        var invokeResolveFn = function (resolvedDeps) { return _this.resolveFn.apply(null, resolvedDeps); };
        var node = resolveContext.findNode(this);
        var state = node && node.state;
        var asyncPolicy = this.getPolicy(state).async;
        var customAsyncPolicy = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(asyncPolicy) ? asyncPolicy : _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"];
        // After the final value has been resolved, update the state of the Resolvable
        var applyResolvedValue = function (resolvedValue) {
            _this.data = resolvedValue;
            _this.resolved = true;
            _this.resolveFn = null;
            _common_trace__WEBPACK_IMPORTED_MODULE_2__["trace"].traceResolvableResolved(_this, trans);
            return _this.data;
        };
        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
        return (this.promise = $q
            .when()
            .then(getResolvableDependencies)
            .then(invokeResolveFn)
            .then(customAsyncPolicy)
            .then(applyResolvedValue));
    };
    /**
     * Gets a promise for this Resolvable's data.
     *
     * Fetches the data and returns a promise.
     * Returns the existing promise if it has already been fetched once.
     */
    Resolvable.prototype.get = function (resolveContext, trans) {
        return this.promise || this.resolve(resolveContext, trans);
    };
    Resolvable.prototype.toString = function () {
        return "Resolvable(token: " + Object(_common_strings__WEBPACK_IMPORTED_MODULE_3__["stringify"])(this.token) + ", requires: [" + this.deps.map(_common_strings__WEBPACK_IMPORTED_MODULE_3__["stringify"]) + "])";
    };
    Resolvable.prototype.clone = function () {
        return new Resolvable(this);
    };
    Resolvable.fromData = function (token, data) { return new Resolvable(token, function () { return data; }, null, null, data); };
    return Resolvable;
}());

//# sourceMappingURL=resolvable.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js ***!
  \**************************************************************************************************************************/
/*! exports provided: NATIVE_INJECTOR_TOKEN, ResolveContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return NATIVE_INJECTOR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return ResolveContext; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module resolve */ /** */









var whens = _interface__WEBPACK_IMPORTED_MODULE_4__["resolvePolicies"].when;
var ALL_WHENS = [whens.EAGER, whens.LAZY];
var EAGER_WHENS = [whens.EAGER];
// tslint:disable-next-line:no-inferrable-types
var NATIVE_INJECTOR_TOKEN = 'Native Injector';
/**
 * Encapsulates Dependency Injection for a path of nodes
 *
 * UI-Router states are organized as a tree.
 * A nested state has a path of ancestors to the root of the tree.
 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
 *
 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
 */
var ResolveContext = /** @class */ (function () {
    function ResolveContext(_path) {
        this._path = _path;
    }
    /** Gets all the tokens found in the resolve context, de-duplicated */
    ResolveContext.prototype.getTokens = function () {
        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["uniqR"], []);
    };
    /**
     * Gets the Resolvable that matches the token
     *
     * Gets the last Resolvable that matches the token in this context, or undefined.
     * Throws an error if it doesn't exist in the ResolveContext
     */
    ResolveContext.prototype.getResolvable = function (token) {
        var matching = this._path
            .map(function (node) { return node.resolvables; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (r) { return r.token === token; });
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(matching);
    };
    /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
    ResolveContext.prototype.getPolicy = function (resolvable) {
        var node = this.findNode(resolvable);
        return resolvable.getPolicy(node.state);
    };
    /**
     * Returns a ResolveContext that includes a portion of this one
     *
     * Given a state, this method creates a new ResolveContext from this one.
     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
     *
     * #### Why
     *
     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
     * This method is used to create a narrower context when injecting ancestor nodes.
     *
     * @example
     * `let ABCD = new ResolveContext([A, B, C, D]);`
     *
     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
     * However, `B` should only be able to access resolvables from `A`, `B`.
     *
     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
     * `let AB = ABCD.subcontext(a)`
     */
    ResolveContext.prototype.subContext = function (state) {
        return new ResolveContext(_path_pathUtils__WEBPACK_IMPORTED_MODULE_6__["PathUtils"].subPath(this._path, function (node) { return node.state === state; }));
    };
    /**
     * Adds Resolvables to the node that matches the state
     *
     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
     * The resolvable is added to the node matching the `state` parameter.
     *
     * These new resolvables are not automatically fetched.
     * The calling code should either fetch them, fetch something that depends on them,
     * or rely on [[resolvePath]] being called when some state is being entered.
     *
     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
     *
     * @param newResolvables the new Resolvables
     * @param state Used to find the node to put the resolvable on
     */
    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
        var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this._path, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('state', state));
        var keys = newResolvables.map(function (r) { return r.token; });
        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
    };
    /**
     * Returns a promise for an array of resolved path Element promises
     *
     * @param when
     * @param trans
     * @returns {Promise<any>|any}
     */
    ResolveContext.prototype.resolvePath = function (when, trans) {
        var _this = this;
        if (when === void 0) { when = 'LAZY'; }
        // This option determines which 'when' policy Resolvables we are about to fetch.
        var whenOption = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(ALL_WHENS, when) ? when : 'LAZY';
        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
        var matchedWhens = whenOption === _interface__WEBPACK_IMPORTED_MODULE_4__["resolvePolicies"].when.EAGER ? EAGER_WHENS : ALL_WHENS;
        // get the subpath to the state argument, if provided
        _common_trace__WEBPACK_IMPORTED_MODULE_2__["trace"].traceResolvePath(this._path, when, trans);
        var matchesPolicy = function (acceptedVals, whenOrAsync) { return function (resolvable) {
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
        }; };
        // Trigger all the (matching) Resolvables in the path
        // Reduce all the "WAIT" Resolvables into an array
        var promises = this._path.reduce(function (acc, node) {
            var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
            var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
            var wait = nodeResolvables.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["not"])(matchesPolicy(['NOWAIT'], 'async')));
            // For the matching Resolvables, start their async fetch process.
            var subContext = _this.subContext(node.state);
            var getResult = function (r) {
                return r
                    .get(subContext, trans)
                    // Return a tuple that includes the Resolvable's token
                    .then(function (value) { return ({ token: r.token, value: value }); });
            };
            nowait.forEach(getResult);
            return acc.concat(wait.map(getResult));
        }, []);
        // Wait for all the "WAIT" resolvables
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.all(promises);
    };
    ResolveContext.prototype.injector = function () {
        return this._injector || (this._injector = new UIInjectorImpl(this));
    };
    ResolveContext.prototype.findNode = function (resolvable) {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this._path, function (node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(node.resolvables, resolvable); });
    };
    /**
     * Gets the async dependencies of a Resolvable
     *
     * Given a Resolvable, returns its dependencies as a Resolvable[]
     */
    ResolveContext.prototype.getDependencies = function (resolvable) {
        var _this = this;
        var node = this.findNode(resolvable);
        // Find which other resolvables are "visible" to the `resolvable` argument
        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
        var subPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__["PathUtils"].subPath(this._path, function (x) { return x === node; }) || this._path;
        var availableResolvables = subPath
            .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) // all of subpath's resolvables
            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
        var getDependency = function (token) {
            var matching = availableResolvables.filter(function (r) { return r.token === token; });
            if (matching.length)
                return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(matching);
            var fromInjector = _this.injector().getNative(token);
            if (Object(_common__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(fromInjector)) {
                throw new Error('Could not find Dependency Injection token: ' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_7__["stringify"])(token));
            }
            return new _resolvable__WEBPACK_IMPORTED_MODULE_5__["Resolvable"](token, function () { return fromInjector; }, [], fromInjector);
        };
        return resolvable.deps.map(getDependency);
    };
    return ResolveContext;
}());

/** @internalapi */
var UIInjectorImpl = /** @class */ (function () {
    function UIInjectorImpl(context) {
        this.context = context;
        this.native = this.get(NATIVE_INJECTOR_TOKEN) || _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector;
    }
    UIInjectorImpl.prototype.get = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable) {
            if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                return resolvable.get(this.context);
            }
            if (!resolvable.resolved) {
                throw new Error('Resolvable async .get() not complete:' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_7__["stringify"])(resolvable.token));
            }
            return resolvable.data;
        }
        return this.getNative(token);
    };
    UIInjectorImpl.prototype.getAsync = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable)
            return resolvable.get(this.context);
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(this.native.get(token));
    };
    UIInjectorImpl.prototype.getNative = function (token) {
        return this.native && this.native.get(token);
    };
    return UIInjectorImpl;
}());
//# sourceMappingURL=resolveContext.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js":
/*!**********************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js ***!
  \**********************************************************************************************************/
/*! exports provided: UIRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouter", function() { return UIRouter; });
/* harmony import */ var _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url/urlMatcherFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony import */ var _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url/urlRouter */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition/transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js");
/* harmony import */ var _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/stateRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony import */ var _state_stateService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/stateService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _url_urlService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url/urlService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module core */ /** */












/** @hidden */
var _routerInstance = 0;
/** @hidden */
var locSvcFns = ['url', 'path', 'search', 'hash', 'onChange'];
/** @hidden */
var locCfgFns = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'];
/** @hidden */
var locationServiceStub = Object(_common__WEBPACK_IMPORTED_MODULE_11__["makeStub"])('LocationServices', locSvcFns);
/** @hidden */
var locationConfigStub = Object(_common__WEBPACK_IMPORTED_MODULE_11__["makeStub"])('LocationConfig', locCfgFns);
/**
 * The master class used to instantiate an instance of UI-Router.
 *
 * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
 * This class instantiates and wires the UI-Router services together.
 *
 * After a new instance of the UIRouter class is created, it should be configured for your app.
 * For instance, app states should be registered with the [[UIRouter.stateRegistry]].
 *
 * ---
 *
 * Normally the framework code will bootstrap UI-Router.
 * If you are bootstrapping UIRouter manually, tell it to monitor the URL by calling
 * [[UrlService.listen]] then [[UrlService.sync]].
 */
var UIRouter = /** @class */ (function () {
    /**
     * Creates a new `UIRouter` object
     *
     * @param locationService a [[LocationServices]] implementation
     * @param locationConfig a [[LocationConfig]] implementation
     * @internalapi
     */
    function UIRouter(locationService, locationConfig) {
        if (locationService === void 0) { locationService = locationServiceStub; }
        if (locationConfig === void 0) { locationConfig = locationConfigStub; }
        this.locationService = locationService;
        this.locationConfig = locationConfig;
        /** @hidden */ this.$id = _routerInstance++;
        /** @hidden */ this._disposed = false;
        /** @hidden */ this._disposables = [];
        /** Provides trace information to the console */
        this.trace = _common_trace__WEBPACK_IMPORTED_MODULE_10__["trace"];
        /** Provides services related to ui-view synchronization */
        this.viewService = new _view_view__WEBPACK_IMPORTED_MODULE_3__["ViewService"](this);
        /** Global router state */
        this.globals = new _globals__WEBPACK_IMPORTED_MODULE_6__["UIRouterGlobals"]();
        /** Provides services related to Transitions */
        this.transitionService = new _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__["TransitionService"](this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlMatcherFactory = new _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__["UrlMatcherFactory"](this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlRouter = new _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__["UrlRouter"](this);
        /** Provides services related to the URL */
        this.urlService = new _url_urlService__WEBPACK_IMPORTED_MODULE_9__["UrlService"](this);
        /** Provides a registry for states, and related registration services */
        this.stateRegistry = new _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"](this);
        /** Provides services related to states */
        this.stateService = new _state_stateService__WEBPACK_IMPORTED_MODULE_5__["StateService"](this);
        /** @hidden plugin instances are registered here */
        this._plugins = {};
        this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
        this.globals.$current = this.stateRegistry.root();
        this.globals.current = this.globals.$current.self;
        this.disposable(this.globals);
        this.disposable(this.stateService);
        this.disposable(this.stateRegistry);
        this.disposable(this.transitionService);
        this.disposable(this.urlService);
        this.disposable(locationService);
        this.disposable(locationConfig);
    }
    /** Registers an object to be notified when the router is disposed */
    UIRouter.prototype.disposable = function (disposable) {
        this._disposables.push(disposable);
    };
    /**
     * Disposes this router instance
     *
     * When called, clears resources retained by the router by calling `dispose(this)` on all
     * registered [[disposable]] objects.
     *
     * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
     *
     * @param disposable (optional) the disposable to dispose
     */
    UIRouter.prototype.dispose = function (disposable) {
        var _this = this;
        if (disposable && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(disposable.dispose)) {
            disposable.dispose(this);
            return undefined;
        }
        this._disposed = true;
        this._disposables.slice().forEach(function (d) {
            try {
                typeof d.dispose === 'function' && d.dispose(_this);
                Object(_common_common__WEBPACK_IMPORTED_MODULE_7__["removeFrom"])(_this._disposables, d);
            }
            catch (ignored) { }
        });
    };
    /**
     * Adds a plugin to UI-Router
     *
     * This method adds a UI-Router Plugin.
     * A plugin can enhance or change UI-Router behavior using any public API.
     *
     * #### Example:
     * ```js
     * import { MyCoolPlugin } from "ui-router-cool-plugin";
     *
     * var plugin = router.addPlugin(MyCoolPlugin);
     * ```
     *
     * ### Plugin authoring
     *
     * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
     *
     * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
     * For example, it may configure router options or add a Transition Hook.
     *
     * The plugin can then be published as a separate module.
     *
     * #### Example:
     * ```js
     * export class MyAuthPlugin implements UIRouterPlugin {
     *   constructor(router: UIRouter, options: any) {
     *     this.name = "MyAuthPlugin";
     *     let $transitions = router.transitionService;
     *     let $state = router.stateService;
     *
     *     let authCriteria = {
     *       to: (state) => state.data && state.data.requiresAuth
     *     };
     *
     *     function authHook(transition: Transition) {
     *       let authService = transition.injector().get('AuthService');
     *       if (!authService.isAuthenticated()) {
     *         return $state.target('login');
     *       }
     *     }
     *
     *     $transitions.onStart(authCriteria, authHook);
     *   }
     * }
     * ```
     *
     * @param plugin one of:
     *        - a plugin class which implements [[UIRouterPlugin]]
     *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
     *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
     * @param options options to pass to the plugin class/factory
     * @returns the registered plugin instance
     */
    UIRouter.prototype.plugin = function (plugin, options) {
        if (options === void 0) { options = {}; }
        var pluginInstance = new plugin(this, options);
        if (!pluginInstance.name)
            throw new Error('Required property `name` missing on plugin: ' + pluginInstance);
        this._disposables.push(pluginInstance);
        return (this._plugins[pluginInstance.name] = pluginInstance);
    };
    UIRouter.prototype.getPlugin = function (pluginName) {
        return pluginName ? this._plugins[pluginName] : Object(_common_common__WEBPACK_IMPORTED_MODULE_7__["values"])(this._plugins);
    };
    return UIRouter;
}());

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js ***!
  \***************************************************************************************************************/
/*! exports provided: resolvablesBuilder, StateBuilder, StateObject, StateMatcher, StateQueueManager, StateRegistry, StateService, TargetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return _stateBuilder__WEBPACK_IMPORTED_MODULE_0__["resolvablesBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return _stateBuilder__WEBPACK_IMPORTED_MODULE_0__["StateBuilder"]; });

/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return _stateObject__WEBPACK_IMPORTED_MODULE_1__["StateObject"]; });

/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return _stateMatcher__WEBPACK_IMPORTED_MODULE_2__["StateMatcher"]; });

/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return _stateQueueManager__WEBPACK_IMPORTED_MODULE_3__["StateQueueManager"]; });

/* harmony import */ var _stateRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return _stateRegistry__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"]; });

/* harmony import */ var _stateService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _stateService__WEBPACK_IMPORTED_MODULE_5__["StateService"]; });

/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return _targetState__WEBPACK_IMPORTED_MODULE_6__["TargetState"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js ***!
  \**********************************************************************************************************************/
/*! exports provided: resolvablesBuilder, StateBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return resolvablesBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return StateBuilder; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @publicapi @module state */ /** */






var parseUrl = function (url) {
    if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(url))
        return false;
    var root = url.charAt(0) === '^';
    return { val: root ? url.substring(1) : url, root: root };
};
function nameBuilder(state) {
    return state.name;
}
function selfBuilder(state) {
    state.self.$$state = function () { return state; };
    return state.self;
}
function dataBuilder(state) {
    if (state.parent && state.parent.data) {
        state.data = state.self.data = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(state.parent.data, state.data);
    }
    return state.data;
}
var getUrlBuilder = function ($urlMatcherFactoryProvider, root) {
    return function urlBuilder(stateObject) {
        var stateDec = stateObject.self;
        // For future states, i.e., states whose name ends with `.**`,
        // match anything that starts with the url prefix
        if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
            var newStateDec = {};
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["copy"])(stateDec, newStateDec);
            newStateDec.url += '{remainder:any}'; // match any path (.*)
            stateDec = newStateDec;
        }
        var parent = stateObject.parent;
        var parsed = parseUrl(stateDec.url);
        var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, { state: stateDec });
        if (!url)
            return null;
        if (!$urlMatcherFactoryProvider.isMatcher(url))
            throw new Error("Invalid url '" + url + "' in state '" + stateObject + "'");
        return parsed && parsed.root ? url : ((parent && parent.navigable) || root()).url.append(url);
    };
};
var getNavigableBuilder = function (isRoot) {
    return function navigableBuilder(state) {
        return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
    };
};
var getParamsBuilder = function (paramFactory) {
    return function paramsBuilder(state) {
        var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, state.self); };
        var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
        var nonUrlParams = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["mapObj"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(state.params || {}, urlParams.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('id'))), makeConfigParam));
        return urlParams
            .concat(nonUrlParams)
            .map(function (p) { return [p.id, p]; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"], {});
    };
};
function pathBuilder(state) {
    return state.parent ? state.parent.path.concat(state) : /*root*/ [state];
}
function includesBuilder(state) {
    var includes = state.parent ? Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, state.parent.includes) : {};
    includes[state.name] = true;
    return includes;
}
/**
 * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
 * validates the `resolve` property and converts it to a [[Resolvable]] array.
 *
 * resolve: input value can be:
 *
 * {
 *   // analyzed but not injected
 *   myFooResolve: function() { return "myFooData"; },
 *
 *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
 *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
 *
 *   // Array split; "DependencyName" dep as string
 *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
 *
 *   // Array split; DependencyType dep as token (compared using ===)
 *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
 *
 *   // val.$inject used as deps
 *   // where:
 *   //     corgeResolve.$inject = ["DependencyName"];
 *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
 *   // then "DependencyName" dep as string
 *   myCorgeResolve: corgeResolve,
 *
 *  // inject service by name
 *  // When a string is found, desugar creating a resolve that injects the named service
 *   myGraultResolve: "SomeService"
 * }
 *
 * or:
 *
 * [
 *   new Resolvable("myFooResolve", function() { return "myFooData" }),
 *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
 *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
 * ]
 */
function resolvablesBuilder(state) {
    /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
    var objects2Tuples = function (resolveObj, resolvePolicies) {
        return Object.keys(resolveObj || {}).map(function (token) { return ({
            token: token,
            val: resolveObj[token],
            deps: undefined,
            policy: resolvePolicies[token],
        }); });
    };
    /** fetch DI annotations from a function or ng1-style array */
    var annotate = function (fn) {
        var $injector = _common_coreservices__WEBPACK_IMPORTED_MODULE_5__["services"].$injector;
        // ng1 doesn't have an $injector until runtime.
        // If the $injector doesn't exist, use "deferred" literal as a
        // marker indicating they should be annotated when runtime starts
        return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || 'deferred';
    };
    /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
    var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
    /** true if the object looks like a provide literal, or a ng2 Provider */
    var isLikeNg2Provider = function (obj) {
        return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
    };
    /** true if the object looks like a tuple from obj2Tuples */
    var isTupleFromObj = function (obj) {
        return !!(obj && obj.val && (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(obj.val) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(obj.val) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(obj.val)));
    };
    /** extracts the token from a Provider or provide literal */
    var getToken = function (p) { return p.provide || p.token; };
    // prettier-ignore: Given a literal resolve or provider object, returns a Resolvable
    var literal2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('resolveFn'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), p.resolveFn, p.deps, p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useFactory'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), p.useFactory, p.deps || p.dependencies, p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useClass'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), function () { return new p.useClass(); }, [], p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useValue'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useExisting'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"], [p.useExisting], p.policy); }],
    ]);
    // prettier-ignore
    var tuple2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"], [tuple.val], tuple.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
    ]);
    // prettier-ignore
    var item2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"]), function (r) { return r; }],
        [isResolveLiteral, literal2Resolvable],
        [isLikeNg2Provider, literal2Resolvable],
        [isTupleFromObj, tuple2Resolvable],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["val"])(true), function (obj) { throw new Error('Invalid resolve value: ' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(obj)); },],
    ]);
    // If resolveBlock is already an array, use it as-is.
    // Otherwise, assume it's an object and convert to an Array of tuples
    var decl = state.resolve;
    var items = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
    return items.map(item2Resolvable);
}
/**
 * @internalapi A internal global service
 *
 * StateBuilder is a factory for the internal [[StateObject]] objects.
 *
 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
 * [[StateObject]] object, which has an API and is used internally.
 *
 * Custom properties or API may be added to the internal [[StateObject]] object by registering a decorator function
 * using the [[builder]] method.
 */
var StateBuilder = /** @class */ (function () {
    function StateBuilder(matcher, urlMatcherFactory) {
        this.matcher = matcher;
        var self = this;
        var root = function () { return matcher.find(''); };
        var isRoot = function (state) { return state.name === ''; };
        function parentBuilder(state) {
            if (isRoot(state))
                return null;
            return matcher.find(self.parentName(state)) || root();
        }
        this.builders = {
            name: [nameBuilder],
            self: [selfBuilder],
            parent: [parentBuilder],
            data: [dataBuilder],
            // Build a URLMatcher if necessary, either via a relative or absolute URL
            url: [getUrlBuilder(urlMatcherFactory, root)],
            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
            navigable: [getNavigableBuilder(isRoot)],
            params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
            // Each framework-specific ui-router implementation should define its own `views` builder
            // e.g., src/ng1/statebuilders/views.ts
            views: [],
            // Keep a full path from the root down to this state as this is needed for state activation.
            path: [pathBuilder],
            // Speed up $state.includes() as it's used a lot
            includes: [includesBuilder],
            resolvables: [resolvablesBuilder],
        };
    }
    /**
     * Registers a [[BuilderFunction]] for a specific [[StateObject]] property (e.g., `parent`, `url`, or `path`).
     * More than one BuilderFunction can be registered for a given property.
     *
     * The BuilderFunction(s) will be used to define the property on any subsequently built [[StateObject]] objects.
     *
     * @param name The name of the State property being registered for.
     * @param fn The BuilderFunction which will be used to build the State property
     * @returns a function which deregisters the BuilderFunction
     */
    StateBuilder.prototype.builder = function (name, fn) {
        var builders = this.builders;
        var array = builders[name] || [];
        // Backwards compat: if only one builder exists, return it, else return whole arary.
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(name) && !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(fn))
            return array.length > 1 ? array : array[0];
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(name) || !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(fn))
            return;
        builders[name] = array;
        builders[name].push(fn);
        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
    };
    /**
     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
     * properties and API built.
     *
     * @param state an uninitialized State object
     * @returns the built State object
     */
    StateBuilder.prototype.build = function (state) {
        var _a = this, matcher = _a.matcher, builders = _a.builders;
        var parent = this.parentName(state);
        if (parent && !matcher.find(parent, undefined, false)) {
            return null;
        }
        for (var key in builders) {
            if (!builders.hasOwnProperty(key))
                continue;
            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, _common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
            state[key] = chain(state);
        }
        return state;
    };
    StateBuilder.prototype.parentName = function (state) {
        // name = 'foo.bar.baz.**'
        var name = state.name || '';
        // segments = ['foo', 'bar', 'baz', '.**']
        var segments = name.split('.');
        // segments = ['foo', 'bar', 'baz']
        var lastSegment = segments.pop();
        // segments = ['foo', 'bar'] (ignore .** segment for future states)
        if (lastSegment === '**')
            segments.pop();
        if (segments.length) {
            if (state.parent) {
                throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
            }
            // 'foo.bar'
            return segments.join('.');
        }
        if (!state.parent)
            return '';
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(state.parent) ? state.parent : state.parent.name;
    };
    StateBuilder.prototype.name = function (state) {
        var name = state.name;
        if (name.indexOf('.') !== -1 || !state.parent)
            return name;
        var parentName = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(state.parent) ? state.parent : state.parent.name;
        return parentName ? parentName + '.' + name : name;
    };
    return StateBuilder;
}());

//# sourceMappingURL=stateBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js ***!
  \**********************************************************************************************************************/
/*! exports provided: StateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return StateMatcher; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_safeConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/safeConsole */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/safeConsole.js");
/** @publicapi @module state */ /** */



var StateMatcher = /** @class */ (function () {
    function StateMatcher(_states) {
        this._states = _states;
    }
    StateMatcher.prototype.isRelative = function (stateName) {
        stateName = stateName || '';
        return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
    };
    StateMatcher.prototype.find = function (stateOrName, base, matchGlob) {
        if (matchGlob === void 0) { matchGlob = true; }
        if (!stateOrName && stateOrName !== '')
            return undefined;
        var isStr = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(stateOrName);
        var name = isStr ? stateOrName : stateOrName.name;
        if (this.isRelative(name))
            name = this.resolvePath(name, base);
        var state = this._states[name];
        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
            return state;
        }
        else if (isStr && matchGlob) {
            var _states = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["values"])(this._states);
            var matches = _states.filter(function (_state) { return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name); });
            if (matches.length > 1) {
                _common_safeConsole__WEBPACK_IMPORTED_MODULE_2__["safeConsole"].error("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
            }
            return matches[0];
        }
        return undefined;
    };
    StateMatcher.prototype.resolvePath = function (name, base) {
        if (!base)
            throw new Error("No reference point given for path '" + name + "'");
        var baseState = this.find(base);
        var splitName = name.split('.');
        var pathLength = splitName.length;
        var i = 0, current = baseState;
        for (; i < pathLength; i++) {
            if (splitName[i] === '' && i === 0) {
                current = baseState;
                continue;
            }
            if (splitName[i] === '^') {
                if (!current.parent)
                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
                current = current.parent;
                continue;
            }
            break;
        }
        var relName = splitName.slice(i).join('.');
        return current.name + (current.name && relName ? '.' : '') + relName;
    };
    return StateMatcher;
}());

//# sourceMappingURL=stateMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js ***!
  \*********************************************************************************************************************/
/*! exports provided: StateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return StateObject; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");




/**
 * Internal representation of a UI-Router state.
 *
 * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
 *
 * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[StateObject]] object.
 *
 * This class prototypally inherits from the corresponding [[StateDeclaration]].
 * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
 */
var StateObject = /** @class */ (function () {
    /** @deprecated use State.create() */
    function StateObject(config) {
        return StateObject.create(config || {});
    }
    /**
     * Create a state object to put the private/internal implementation details onto.
     * The object's prototype chain looks like:
     * (Internal State Object) -> (Copy of State.prototype) -> (State Declaration object) -> (State Declaration's prototype...)
     *
     * @param stateDecl the user-supplied State Declaration
     * @returns {StateObject} an internal State object
     */
    StateObject.create = function (stateDecl) {
        stateDecl = StateObject.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
        var state = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(stateDecl, StateObject.prototype));
        stateDecl.$$state = function () { return state; };
        state.self = stateDecl;
        state.__stateObjectCache = {
            nameGlob: _common_glob__WEBPACK_IMPORTED_MODULE_2__["Glob"].fromString(state.name),
        };
        return state;
    };
    /**
     * Returns true if the provided parameter is the same state.
     *
     * Compares the identity of the state against the passed value, which is either an object
     * reference to the actual `State` instance, the original definition object passed to
     * `$stateProvider.state()`, or the fully-qualified name.
     *
     * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
     * @returns Returns `true` if `ref` matches the current `State` instance.
     */
    StateObject.prototype.is = function (ref) {
        return this === ref || this.self === ref || this.fqn() === ref;
    };
    /**
     * @deprecated this does not properly handle dot notation
     * @returns Returns a dot-separated name of the state.
     */
    StateObject.prototype.fqn = function () {
        if (!this.parent || !(this.parent instanceof this.constructor))
            return this.name;
        var name = this.parent.fqn();
        return name ? name + '.' + this.name : this.name;
    };
    /**
     * Returns the root node of this state's tree.
     *
     * @returns The root of this state's tree.
     */
    StateObject.prototype.root = function () {
        return (this.parent && this.parent.root()) || this;
    };
    /**
     * Gets the state's `Param` objects
     *
     * Gets the list of [[Param]] objects owned by the state.
     * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] objects.
     * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
     *
     * @param opts options
     */
    StateObject.prototype.parameters = function (opts) {
        opts = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(opts, { inherit: true, matchingKeys: null });
        var inherited = (opts.inherit && this.parent && this.parent.parameters()) || [];
        return inherited
            .concat(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.params))
            .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
    };
    /**
     * Returns a single [[Param]] that is owned by the state
     *
     * If `opts.inherit` is true, it also searches the ancestor states` [[Param]]s.
     * @param id the name of the [[Param]] to return
     * @param opts options
     */
    StateObject.prototype.parameter = function (id, opts) {
        if (opts === void 0) { opts = {}; }
        return ((this.url && this.url.parameter(id, opts)) ||
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.params), Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', id)) ||
            (opts.inherit && this.parent && this.parent.parameter(id)));
    };
    StateObject.prototype.toString = function () {
        return this.fqn();
    };
    /** Predicate which returns true if the object is an class with @State() decorator */
    StateObject.isStateClass = function (stateDecl) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(stateDecl) && stateDecl['__uiRouterState'] === true;
    };
    /** Predicate which returns true if the object is an internal [[StateObject]] object */
    StateObject.isState = function (obj) { return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isObject"])(obj['__stateObjectCache']); };
    return StateObject;
}());

//# sourceMappingURL=stateObject.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js ***!
  \***************************************************************************************************************************/
/*! exports provided: StateQueueManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return StateQueueManager; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/** @publicapi @module state */ /** */


/** @internalapi */
var StateQueueManager = /** @class */ (function () {
    function StateQueueManager(router, states, builder, listeners) {
        this.router = router;
        this.states = states;
        this.builder = builder;
        this.listeners = listeners;
        this.queue = [];
    }
    /** @internalapi */
    StateQueueManager.prototype.dispose = function () {
        this.queue = [];
    };
    StateQueueManager.prototype.register = function (stateDecl) {
        var queue = this.queue;
        var state = _stateObject__WEBPACK_IMPORTED_MODULE_1__["StateObject"].create(stateDecl);
        var name = state.name;
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(name))
            throw new Error('State must have a valid name');
        if (this.states.hasOwnProperty(name) || Object(_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(queue.map(Object(_common__WEBPACK_IMPORTED_MODULE_0__["prop"])('name')), name))
            throw new Error("State '" + name + "' is already defined");
        queue.push(state);
        this.flush();
        return state;
    };
    StateQueueManager.prototype.flush = function () {
        var _this = this;
        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
        var registered = [], // states that got registered
        orphans = [], // states that don't yet have a parent registered
        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
        var getState = function (name) { return _this.states.hasOwnProperty(name) && _this.states[name]; };
        var notifyListeners = function () {
            if (registered.length) {
                _this.listeners.forEach(function (listener) { return listener('registered', registered.map(function (s) { return s.self; })); });
            }
        };
        while (queue.length > 0) {
            var state = queue.shift();
            var name_1 = state.name;
            var result = builder.build(state);
            var orphanIdx = orphans.indexOf(state);
            if (result) {
                var existingState = getState(name_1);
                if (existingState && existingState.name === name_1) {
                    throw new Error("State '" + name_1 + "' is already defined");
                }
                var existingFutureState = getState(name_1 + '.**');
                if (existingFutureState) {
                    // Remove future state of the same name
                    this.router.stateRegistry.deregister(existingFutureState);
                }
                states[name_1] = state;
                this.attachRoute(state);
                if (orphanIdx >= 0)
                    orphans.splice(orphanIdx, 1);
                registered.push(state);
                continue;
            }
            var prev = previousQueueLength[name_1];
            previousQueueLength[name_1] = queue.length;
            if (orphanIdx >= 0 && prev === queue.length) {
                // Wait until two consecutive iterations where no additional states were dequeued successfully.
                // throw new Error(`Cannot register orphaned state '${name}'`);
                queue.push(state);
                notifyListeners();
                return states;
            }
            else if (orphanIdx < 0) {
                orphans.push(state);
            }
            queue.push(state);
        }
        notifyListeners();
        return states;
    };
    StateQueueManager.prototype.attachRoute = function (state) {
        if (state.abstract || !state.url)
            return;
        var rulesApi = this.router.urlService.rules;
        rulesApi.rule(rulesApi.urlRuleFactory.create(state));
    };
    return StateQueueManager;
}());

//# sourceMappingURL=stateQueueManager.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js ***!
  \***********************************************************************************************************************/
/*! exports provided: StateRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return StateRegistry; });
/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module state */ /** */





var StateRegistry = /** @class */ (function () {
    /** @internalapi */
    function StateRegistry(router) {
        this.router = router;
        this.states = {};
        this.listeners = [];
        this.matcher = new _stateMatcher__WEBPACK_IMPORTED_MODULE_0__["StateMatcher"](this.states);
        this.builder = new _stateBuilder__WEBPACK_IMPORTED_MODULE_1__["StateBuilder"](this.matcher, router.urlMatcherFactory);
        this.stateQueue = new _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__["StateQueueManager"](router, this.states, this.builder, this.listeners);
        this._registerRoot();
    }
    /** @internalapi */
    StateRegistry.prototype._registerRoot = function () {
        var rootStateDef = {
            name: '',
            url: '^',
            views: null,
            params: {
                '#': { value: null, type: 'hash', dynamic: true },
            },
            abstract: true,
        };
        var _root = (this._root = this.stateQueue.register(rootStateDef));
        _root.navigable = null;
    };
    /** @internalapi */
    StateRegistry.prototype.dispose = function () {
        var _this = this;
        this.stateQueue.dispose();
        this.listeners = [];
        this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
    };
    /**
     * Listen for a State Registry events
     *
     * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
     *
     * #### Example:
     * ```js
     * let allStates = registry.get();
     *
     * // Later, invoke deregisterFn() to remove the listener
     * let deregisterFn = registry.onStatesChanged((event, states) => {
     *   switch(event) {
     *     case: 'registered':
     *       states.forEach(state => allStates.push(state));
     *       break;
     *     case: 'deregistered':
     *       states.forEach(state => {
     *         let idx = allStates.indexOf(state);
     *         if (idx !== -1) allStates.splice(idx, 1);
     *       });
     *       break;
     *   }
     * });
     * ```
     *
     * @param listener a callback function invoked when the registered states changes.
     *        The function receives two parameters, `event` and `state`.
     *        See [[StateRegistryListener]]
     * @return a function that deregisters the listener
     */
    StateRegistry.prototype.onStatesChanged = function (listener) {
        this.listeners.push(listener);
        return function deregisterListener() {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["removeFrom"])(this.listeners)(listener);
        }.bind(this);
    };
    /**
     * Gets the implicit root state
     *
     * Gets the root of the state tree.
     * The root state is implicitly created by UI-Router.
     * Note: this returns the internal [[StateObject]] representation, not a [[StateDeclaration]]
     *
     * @return the root [[StateObject]]
     */
    StateRegistry.prototype.root = function () {
        return this._root;
    };
    /**
     * Adds a state to the registry
     *
     * Registers a [[StateDeclaration]] or queues it for registration.
     *
     * Note: a state will be queued if the state's parent isn't yet registered.
     *
     * @param stateDefinition the definition of the state to register.
     * @returns the internal [[StateObject]] object.
     *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
     *          If the state was only queued, then the object is not fully built.
     */
    StateRegistry.prototype.register = function (stateDefinition) {
        return this.stateQueue.register(stateDefinition);
    };
    /** @hidden */
    StateRegistry.prototype._deregisterTree = function (state) {
        var _this = this;
        var all = this.get().map(function (s) { return s.$$state(); });
        var getChildren = function (states) {
            var _children = all.filter(function (s) { return states.indexOf(s.parent) !== -1; });
            return _children.length === 0 ? _children : _children.concat(getChildren(_children));
        };
        var children = getChildren([state]);
        var deregistered = [state].concat(children).reverse();
        deregistered.forEach(function (_state) {
            var rulesApi = _this.router.urlService.rules;
            // Remove URL rule
            rulesApi
                .rules()
                .filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["propEq"])('state', _state))
                .forEach(function (rule) { return rulesApi.removeRule(rule); });
            // Remove state from registry
            delete _this.states[_state.name];
        });
        return deregistered;
    };
    /**
     * Removes a state from the registry
     *
     * This removes a state from the registry.
     * If the state has children, they are are also removed from the registry.
     *
     * @param stateOrName the state's name or object representation
     * @returns {StateObject[]} a list of removed states
     */
    StateRegistry.prototype.deregister = function (stateOrName) {
        var _state = this.get(stateOrName);
        if (!_state)
            throw new Error("Can't deregister state; not found: " + stateOrName);
        var deregisteredStates = this._deregisterTree(_state.$$state());
        this.listeners.forEach(function (listener) { return listener('deregistered', deregisteredStates.map(function (s) { return s.self; })); });
        return deregisteredStates;
    };
    StateRegistry.prototype.get = function (stateOrName, base) {
        var _this = this;
        if (arguments.length === 0)
            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
        var found = this.matcher.find(stateOrName, base);
        return (found && found.self) || null;
    };
    StateRegistry.prototype.decorator = function (name, func) {
        return this.builder.builder(name, func);
    };
    return StateRegistry;
}());

//# sourceMappingURL=stateRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js ***!
  \**********************************************************************************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _path_pathNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../path/pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transition/transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module state */ /** */














/**
 * Provides state related service functions
 *
 * This class provides services related to ui-router states.
 * An instance of this class is located on the global [[UIRouter]] object.
 */
var StateService = /** @class */ (function () {
    /** @internalapi */
    function StateService(/** @hidden */ router) {
        this.router = router;
        /** @internalapi */
        this.invalidCallbacks = [];
        /** @hidden */
        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
            if ($error$ instanceof Error && $error$.stack) {
                console.error($error$);
                console.error($error$.stack);
            }
            else if ($error$ instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"]) {
                console.error($error$.toString());
                if ($error$.detail && $error$.detail.stack)
                    console.error($error$.detail.stack);
            }
            else {
                console.error($error$);
            }
        };
        var getters = ['current', '$current', 'params', 'transition'];
        var boundFns = Object.keys(StateService.prototype).filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["not"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(getters)));
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["val"])(StateService.prototype), this, Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["val"])(this), boundFns);
    }
    Object.defineProperty(StateService.prototype, "transition", {
        /**
         * The [[Transition]] currently in progress (or null)
         *
         * This is a passthrough through to [[UIRouterGlobals.transition]]
         */
        get: function () {
            return this.router.globals.transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "params", {
        /**
         * The latest successful state parameters
         *
         * This is a passthrough through to [[UIRouterGlobals.params]]
         */
        get: function () {
            return this.router.globals.params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "current", {
        /**
         * The current [[StateDeclaration]]
         *
         * This is a passthrough through to [[UIRouterGlobals.current]]
         */
        get: function () {
            return this.router.globals.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "$current", {
        /**
         * The current [[StateObject]]
         *
         * This is a passthrough through to [[UIRouterGlobals.$current]]
         */
        get: function () {
            return this.router.globals.$current;
        },
        enumerable: true,
        configurable: true
    });
    /** @internalapi */
    StateService.prototype.dispose = function () {
        this.defaultErrorHandler(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
        this.invalidCallbacks = [];
    };
    /**
     * Handler for when [[transitionTo]] is called with an invalid state.
     *
     * Invokes the [[onInvalid]] callbacks, in natural order.
     * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
     * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
     *
     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
     *
     * @internalapi
     */
    StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
        var _this = this;
        var fromState = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__["PathUtils"].makeTargetState(this.router.stateRegistry, fromPath);
        var globals = this.router.globals;
        var latestThing = function () { return globals.transitionHistory.peekTail(); };
        var latest = latestThing();
        var callbackQueue = new _common_queue__WEBPACK_IMPORTED_MODULE_2__["Queue"](this.invalidCallbacks.slice());
        var injector = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__["ResolveContext"](fromPath).injector();
        var checkForRedirect = function (result) {
            if (!(result instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"])) {
                return;
            }
            var target = result;
            // Recreate the TargetState, in case the state is now defined.
            target = _this.target(target.identifier(), target.params(), target.options());
            if (!target.valid()) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].invalid(target.error()).toPromise();
            }
            if (latestThing() !== latest) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].superseded().toPromise();
            }
            return _this.transitionTo(target.identifier(), target.params(), target.options());
        };
        function invokeNextCallback() {
            var nextCallback = callbackQueue.dequeue();
            if (nextCallback === undefined)
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].invalid(toState.error()).toPromise();
            var callbackResult = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(nextCallback(toState, fromState, injector));
            return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
        }
        return invokeNextCallback();
    };
    /**
     * Registers an Invalid State handler
     *
     * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
     * has been called with an invalid state reference parameter
     *
     * Example:
     * ```js
     * stateService.onInvalid(function(to, from, injector) {
     *   if (to.name() === 'foo') {
     *     let lazyLoader = injector.get('LazyLoadService');
     *     return lazyLoader.load('foo')
     *         .then(() => stateService.target('foo'));
     *   }
     * });
     * ```
     *
     * @param {function} callback invoked when the toState is invalid
     *   This function receives the (invalid) toState, the fromState, and an injector.
     *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
     *   If one is returned, it is treated as a redirect.
     *
     * @returns a function which deregisters the callback
     */
    StateService.prototype.onInvalid = function (callback) {
        this.invalidCallbacks.push(callback);
        return function deregisterListener() {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(this.invalidCallbacks)(callback);
        }.bind(this);
    };
    /**
     * Reloads the current state
     *
     * A method that force reloads the current state, or a partial state hierarchy.
     * All resolves are re-resolved, and components reinstantiated.
     *
     * #### Example:
     * ```js
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * ```
     *
     * Note: `reload()` is just an alias for:
     *
     * ```js
     * $state.transitionTo($state.current, $state.params, {
     *   reload: true, inherit: false
     * });
     * ```
     *
     * @param reloadState A state name or a state object.
     *    If present, this state and all its children will be reloaded, but ancestors will not reload.
     *
     * #### Example:
     * ```js
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
     * //and current state is 'contacts.detail.item'
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * ```
     *
     * @returns A promise representing the state of the new transition. See [[StateService.go]]
     */
    StateService.prototype.reload = function (reloadState) {
        return this.transitionTo(this.current, this.params, {
            reload: Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(reloadState) ? reloadState : true,
            inherit: false,
            notify: false,
        });
    };
    /**
     * Transition to a different state and/or parameters
     *
     * Convenience method for transitioning to a new state.
     *
     * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
     * `{ location: true, inherit: true, relative: router.globals.$current, notify: true }`.
     * This allows you to use either an absolute or relative `to` argument (because of `relative: router.globals.$current`).
     * It also allows you to specify * only the parameters you'd like to update, while letting unspecified parameters
     * inherit from the current parameter values (because of `inherit: true`).
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to Absolute state name, state object, or relative state path (relative to current state).
     *
     * Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to the parent state
     * - `$state.go('^.sibling')` - if current state is `home.child`, will go to the `home.sibling` state
     * - `$state.go('.child.grandchild')` - if current state is home, will go to the `home.child.grandchild` state
     *
     * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
     *
     *    Any parameters that are not specified will be inherited from current parameter values (because of `inherit: true`).
     *    This allows, for example, going to a sibling state that shares parameters defined by a parent state.
     *
     * @param options Transition options
     *
     * @returns {promise} A promise representing the state of the new transition.
     */
    StateService.prototype.go = function (to, params, options) {
        var defautGoOpts = { relative: this.$current, inherit: true };
        var transOpts = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, defautGoOpts, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__["defaultTransOpts"]);
        return this.transitionTo(to, params, transOpts);
    };
    /**
     * Creates a [[TargetState]]
     *
     * This is a factory method for creating a TargetState
     *
     * This may be returned from a Transition Hook to redirect a transition, for example.
     */
    StateService.prototype.target = function (identifier, params, options) {
        if (options === void 0) { options = {}; }
        // If we're reloading, find the state object to reload from
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isObject"])(options.reload) && !options.reload.name)
            throw new Error('Invalid reload state object');
        var reg = this.router.stateRegistry;
        options.reloadState =
            options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
        if (options.reload && !options.reloadState)
            throw new Error("No such reload state '" + (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(options.reload) ? options.reload : options.reload.name) + "'");
        return new _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"](this.router.stateRegistry, identifier, params, options);
    };
    StateService.prototype.getCurrentPath = function () {
        var _this = this;
        var globals = this.router.globals;
        var latestSuccess = globals.successfulTransitions.peekTail();
        var rootPath = function () { return [new _path_pathNode__WEBPACK_IMPORTED_MODULE_5__["PathNode"](_this.router.stateRegistry.root())]; };
        return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
    };
    /**
     * Low-level method for transitioning to a new state.
     *
     * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to State name or state object.
     * @param toParams A map of the parameters that will be sent to the state,
     *      will populate $stateParams.
     * @param options Transition options
     *
     * @returns A promise representing the state of the new transition. See [[go]]
     */
    StateService.prototype.transitionTo = function (to, toParams, options) {
        var _this = this;
        if (toParams === void 0) { toParams = {}; }
        if (options === void 0) { options = {}; }
        var router = this.router;
        var globals = router.globals;
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__["defaultTransOpts"]);
        var getCurrent = function () { return globals.transition; };
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(options, { current: getCurrent });
        var ref = this.target(to, toParams, options);
        var currentPath = this.getCurrentPath();
        if (!ref.exists())
            return this._handleInvalidTargetState(currentPath, ref);
        if (!ref.valid())
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"])(ref.error());
        if (options.supercede === false && getCurrent()) {
            return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].ignored('Another transition is in progress and supercede has been set to false in TransitionOptions for the transition. So the transition was ignored in favour of the existing one in progress.').toPromise();
        }
        /**
         * Special handling for Ignored, Aborted, and Redirected transitions
         *
         * The semantics for the transition.run() promise and the StateService.transitionTo()
         * promise differ. For instance, the run() promise may be rejected because it was
         * IGNORED, but the transitionTo() promise is resolved because from the user perspective
         * no error occurred.  Likewise, the transition.run() promise may be rejected because of
         * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
         */
        var rejectedTransitionHandler = function (trans) { return function (error) {
            if (error instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"]) {
                var isLatest = router.globals.lastStartedTransitionId <= trans.$id;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].IGNORED) {
                    isLatest && router.urlRouter.update();
                    // Consider ignored `Transition.run()` as a successful `transitionTo`
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(globals.current);
                }
                var detail = error.detail;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].SUPERSEDED && error.redirected && detail instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"]) {
                    // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
                    // by returning the promise for the new (redirect) `Transition.run()`.
                    var redirect = trans.redirect(detail);
                    return redirect.run().catch(rejectedTransitionHandler(redirect));
                }
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].ABORTED) {
                    isLatest && router.urlRouter.update();
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.reject(error);
                }
            }
            var errorHandler = _this.defaultErrorHandler();
            errorHandler(error);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.reject(error);
        }; };
        var transition = this.router.transitionService.create(currentPath, ref);
        var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"])(transitionToPromise); // issue #2676
        // Return a promise for the transition, which also has the transition object on it.
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(transitionToPromise, { transition: transition });
    };
    /**
     * Checks if the current state *is* the provided state
     *
     * Similar to [[includes]] but only checks for the full state name.
     * If params is supplied then it will be tested for strict equality against the current
     * active params object, so all params must match with none missing and no extras.
     *
     * #### Example:
     * ```js
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     * ```
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * ```html
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * ```
     *
     * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns Returns true if it is the state.
     */
    StateService.prototype.is = function (stateOrName, params, options) {
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, { relative: this.$current });
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return undefined;
        if (this.$current !== state)
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].values(schema, params), this.params);
    };
    /**
     * Checks if the current state *includes* the provided state
     *
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * #### Example when `$state.$current.name === 'contacts.details.item'`
     * ```js
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * ```
     *
     * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
     * ```js
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * ```
     *
     * @param stateOrName A partial name, relative name, glob pattern,
     *   or state object to be searched for within the current state name.
     * @param params A param object, e.g. `{sectionId: section.id}`,
     *   that you'd like to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    StateService.prototype.includes = function (stateOrName, params, options) {
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, { relative: this.$current });
        var glob = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(stateOrName) && _common_glob__WEBPACK_IMPORTED_MODULE_10__["Glob"].fromString(stateOrName);
        if (glob) {
            if (!glob.matches(this.$current.name))
                return false;
            stateOrName = this.$current.name;
        }
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return undefined;
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(include[state.name]))
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].values(schema, params), this.params);
    };
    /**
     * Generates a URL for a state and parameters
     *
     * Returns the url for the given state populated with the given params.
     *
     * #### Example:
     * ```js
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * ```
     *
     * @param stateOrName The state name or state object you'd like to generate a url from.
     * @param params An object of parameter values to fill the state's required parameters.
     * @param options Options object. The options are:
     *
     * @returns {string} compiled state url
     */
    StateService.prototype.href = function (stateOrName, params, options) {
        var defaultHrefOpts = {
            lossy: true,
            inherit: true,
            absolute: false,
            relative: this.$current,
        };
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, defaultHrefOpts);
        params = params || {};
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return null;
        if (options.inherit)
            params = this.params.$inherit(params, this.$current, state);
        var nav = state && options.lossy ? state.navigable : state;
        if (!nav || nav.url === undefined || nav.url === null) {
            return null;
        }
        return this.router.urlRouter.href(nav.url, params, { absolute: options.absolute });
    };
    /**
     * Sets or gets the default [[transitionTo]] error handler.
     *
     * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
     * This includes errors caused by resolves and transition hooks.
     *
     * Note:
     * This handler does not receive certain Transition rejections.
     * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
     *
     * The built-in default error handler logs the error to the console.
     *
     * You can provide your own custom handler.
     *
     * #### Example:
     * ```js
     * stateService.defaultErrorHandler(function() {
     *   // Do not log transitionTo errors
     * });
     * ```
     *
     * @param handler a global error handler function
     * @returns the current global error handler
     */
    StateService.prototype.defaultErrorHandler = function (handler) {
        return (this._defaultErrorHandler = handler || this._defaultErrorHandler);
    };
    StateService.prototype.get = function (stateOrName, base) {
        var reg = this.router.stateRegistry;
        if (arguments.length === 0)
            return reg.get();
        return reg.get(stateOrName, base || this.$current);
    };
    /**
     * Lazy loads a state
     *
     * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
     *
     * @param stateOrName the state that should be lazy loaded
     * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
     * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
     * This noop transition is not actually run.
     *
     * @returns a promise to lazy load
     */
    StateService.prototype.lazyLoad = function (stateOrName, transition) {
        var state = this.get(stateOrName);
        if (!state || !state.lazyLoad)
            throw new Error('Can not lazy load ' + stateOrName);
        var currentPath = this.getCurrentPath();
        var target = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__["PathUtils"].makeTargetState(this.router.stateRegistry, currentPath);
        transition = transition || this.router.transitionService.create(currentPath, target);
        return Object(_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__["lazyLoadState"])(transition, state);
    };
    return StateService;
}());

//# sourceMappingURL=stateService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js ***!
  \*********************************************************************************************************************/
/*! exports provided: TargetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return TargetState; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module state */ /** */



/**
 * Encapsulate the target (destination) state/params/options of a [[Transition]].
 *
 * This class is frequently used to redirect a transition to a new destination.
 *
 * See:
 *
 * - [[HookResult]]
 * - [[TransitionHookFn]]
 * - [[TransitionService.onStart]]
 *
 * To create a `TargetState`, use [[StateService.target]].
 *
 * ---
 *
 * This class wraps:
 *
 * 1) an identifier for a state
 * 2) a set of parameters
 * 3) and transition options
 * 4) the registered state object (the [[StateDeclaration]])
 *
 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
 * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
 * The `TargetState` class normalizes those options.
 *
 * A `TargetState` may be valid (the state being targeted exists in the registry)
 * or invalid (the state being targeted is not registered).
 */
var TargetState = /** @class */ (function () {
    /**
     * The TargetState constructor
     *
     * Note: Do not construct a `TargetState` manually.
     * To create a `TargetState`, use the [[StateService.target]] factory method.
     *
     * @param _stateRegistry The StateRegistry to use to look up the _definition
     * @param _identifier An identifier for a state.
     *    Either a fully-qualified state name, or the object used to define the state.
     * @param _params Parameters for the target state
     * @param _options Transition options.
     *
     * @internalapi
     */
    function TargetState(_stateRegistry, _identifier, _params, _options) {
        this._stateRegistry = _stateRegistry;
        this._identifier = _identifier;
        this._identifier = _identifier;
        this._params = Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _params || {});
        this._options = Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _options || {});
        this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
    }
    /** The name of the state this object targets */
    TargetState.prototype.name = function () {
        return (this._definition && this._definition.name) || this._identifier;
    };
    /** The identifier used when creating this TargetState */
    TargetState.prototype.identifier = function () {
        return this._identifier;
    };
    /** The target parameter values */
    TargetState.prototype.params = function () {
        return this._params;
    };
    /** The internal state object (if it was found) */
    TargetState.prototype.$state = function () {
        return this._definition;
    };
    /** The internal state declaration (if it was found) */
    TargetState.prototype.state = function () {
        return this._definition && this._definition.self;
    };
    /** The target options */
    TargetState.prototype.options = function () {
        return this._options;
    };
    /** True if the target state was found */
    TargetState.prototype.exists = function () {
        return !!(this._definition && this._definition.self);
    };
    /** True if the object is valid */
    TargetState.prototype.valid = function () {
        return !this.error();
    };
    /** If the object is invalid, returns the reason why */
    TargetState.prototype.error = function () {
        var base = this.options().relative;
        if (!this._definition && !!base) {
            var stateName = base.name ? base.name : base;
            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
        }
        if (!this._definition)
            return "No such state '" + this.name() + "'";
        if (!this._definition.self)
            return "State '" + this.name() + "' has an invalid definition";
    };
    TargetState.prototype.toString = function () {
        return "'" + this.name() + "'" + Object(_common_strings__WEBPACK_IMPORTED_MODULE_1__["stringify"])(this.params());
    };
    /**
     * Returns a copy of this TargetState which targets a different state.
     * The new TargetState has the same parameter values and transition options.
     *
     * @param state The new state that should be targeted
     */
    TargetState.prototype.withState = function (state) {
        return new TargetState(this._stateRegistry, state, this._params, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified parameter values.
     *
     * @param params the new parameter values to use
     * @param replace When false (default) the new parameter values will be merged with the current values.
     *                When true the parameter values will be used instead of the current values.
     */
    TargetState.prototype.withParams = function (params, replace) {
        if (replace === void 0) { replace = false; }
        var newParams = replace ? params : Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this._params, params);
        return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified Transition Options.
     *
     * @param options the new options to use
     * @param replace When false (default) the new options will be merged with the current options.
     *                When true the options will be used instead of the current options.
     */
    TargetState.prototype.withOptions = function (options, replace) {
        if (replace === void 0) { replace = false; }
        var newOpts = replace ? options : Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this._options, options);
        return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
    };
    /** Returns true if the object has a state property that might be a state or state name */
    TargetState.isDef = function (obj) { return obj && obj.state && (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj.state) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj.state.name)); };
    return TargetState;
}());

//# sourceMappingURL=targetState.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js ***!
  \**************************************************************************************************************************/
/*! exports provided: HookBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return HookBuilder; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/** @publicapi @module transition */ /** */




/**
 * This class returns applicable TransitionHooks for a specific Transition instance.
 *
 * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
 * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
 * determined by the type of hook)
 *
 * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
 *
 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
 * in the Transition class, so we must also provide the Transition's _treeChanges)
 *
 */
var HookBuilder = /** @class */ (function () {
    function HookBuilder(transition) {
        this.transition = transition;
    }
    HookBuilder.prototype.buildHooksForPhase = function (phase) {
        var _this = this;
        var $transitions = this.transition.router.transitionService;
        return $transitions._pluginapi
            ._getEvents(phase)
            .map(function (type) { return _this.buildHooks(type); })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__["identity"]);
    };
    /**
     * Returns an array of newly built TransitionHook objects.
     *
     * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
     * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
     * - For each of the [[PathNode]]s, creates a TransitionHook
     *
     * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
     */
    HookBuilder.prototype.buildHooks = function (hookType) {
        var transition = this.transition;
        var treeChanges = transition.treeChanges();
        // Find all the matching registered hooks for a given hook type
        var matchingHooks = this.getMatchingHooks(hookType, treeChanges, transition);
        if (!matchingHooks)
            return [];
        var baseHookOptions = {
            transition: transition,
            current: transition.options().current,
        };
        var makeTransitionHooks = function (hook) {
            // Fetch the Nodes that caused this hook to match.
            var matches = hook.matches(treeChanges, transition);
            // Select the PathNode[] that will be used as TransitionHook context objects
            var matchingNodes = matches[hookType.criteriaMatchPath.name];
            // Return an array of HookTuples
            return matchingNodes.map(function (node) {
                var _options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({
                    bind: hook.bind,
                    traceData: { hookType: hookType.name, context: node },
                }, baseHookOptions);
                var state = hookType.criteriaMatchPath.scope === _interface__WEBPACK_IMPORTED_MODULE_2__["TransitionHookScope"].STATE ? node.state.self : null;
                var transitionHook = new _transitionHook__WEBPACK_IMPORTED_MODULE_3__["TransitionHook"](transition, state, hook, _options);
                return { hook: hook, node: node, transitionHook: transitionHook };
            });
        };
        return matchingHooks
            .map(makeTransitionHooks)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .sort(tupleSort(hookType.reverseSort))
            .map(function (tuple) { return tuple.transitionHook; });
    };
    /**
     * Finds all RegisteredHooks from:
     * - The Transition object instance hook registry
     * - The TransitionService ($transitions) global hook registry
     *
     * which matched:
     * - the eventType
     * - the matchCriteria (to, from, exiting, retained, entering)
     *
     * @returns an array of matched [[RegisteredHook]]s
     */
    HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges, transition) {
        var isCreate = hookType.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_2__["TransitionHookPhase"].CREATE;
        // Instance and Global hook registries
        var $transitions = this.transition.router.transitionService;
        var registries = isCreate ? [$transitions] : [this.transition, $transitions];
        return registries
            .map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
            .filter(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"])(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"], "broken event named: " + hookType.name)) // Sanity check
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
            .filter(function (hook) { return hook.matches(treeChanges, transition); }); // Only those satisfying matchCriteria
    };
    return HookBuilder;
}());

/**
 * A factory for a sort function for HookTuples.
 *
 * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
 * the EventHook priority.
 *
 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
 * @returns a tuple sort function
 */
function tupleSort(reverseDepthSort) {
    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
    return function nodeDepthThenPriority(l, r) {
        var factor = reverseDepthSort ? -1 : 1;
        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
    };
}
//# sourceMappingURL=hookBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js ***!
  \***************************************************************************************************************************/
/*! exports provided: matchState, RegisteredHook, makeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return matchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return RegisteredHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return makeEvent; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/** @publicapi @module transition */ /** */


/**
 * Determines if the given state matches the matchCriteria
 *
 * @hidden
 *
 * @param state a State Object to test against
 * @param criterion
 * - If a string, matchState uses the string as a glob-matcher against the state name
 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
 *   and returns a positive match if any of the globs match.
 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
 * @returns {boolean}
 */
function matchState(state, criterion, transition) {
    var toMatch = Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(criterion) ? [criterion] : criterion;
    function matchGlobs(_state) {
        var globStrings = toMatch;
        for (var i = 0; i < globStrings.length; i++) {
            var glob = new _common__WEBPACK_IMPORTED_MODULE_0__["Glob"](globStrings[i]);
            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                return true;
            }
        }
        return false;
    }
    var matchFn = (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(toMatch) ? toMatch : matchGlobs);
    return !!matchFn(state, transition);
}
/**
 * @internalapi
 * The registration data for a registered transition hook
 */
var RegisteredHook = /** @class */ (function () {
    function RegisteredHook(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
        if (options === void 0) { options = {}; }
        this.tranSvc = tranSvc;
        this.eventType = eventType;
        this.callback = callback;
        this.matchCriteria = matchCriteria;
        this.removeHookFromRegistry = removeHookFromRegistry;
        this.invokeCount = 0;
        this._deregistered = false;
        this.priority = options.priority || 0;
        this.bind = options.bind || null;
        this.invokeLimit = options.invokeLimit;
    }
    /**
     * Gets the matching [[PathNode]]s
     *
     * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
     * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
     *
     * Returning `null` is significant to distinguish between the default
     * "match-all criterion value" of `true` compared to a `() => true` function,
     * when the nodes is an empty array.
     *
     * This is useful to allow a transition match criteria of `entering: true`
     * to still match a transition, even when `entering === []`.  Contrast that
     * with `entering: (state) => true` which only matches when a state is actually
     * being entered.
     */
    RegisteredHook.prototype._matchingNodes = function (nodes, criterion, transition) {
        if (criterion === true)
            return nodes;
        var matching = nodes.filter(function (node) { return matchState(node.state, criterion, transition); });
        return matching.length ? matching : null;
    };
    /**
     * Gets the default match criteria (all `true`)
     *
     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
     *
     * ```js
     * {
     *   to: true,
     *   from: true,
     *   entering: true,
     *   exiting: true,
     *   retained: true,
     * }
     */
    RegisteredHook.prototype._getDefaultMatchCriteria = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["mapObj"])(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
    };
    /**
     * Gets matching nodes as [[IMatchingNodes]]
     *
     * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
     *
     * ```js
     * let matches: IMatchingNodes = {
     *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
     *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
     *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
     *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
     *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
     * };
     * ```
     */
    RegisteredHook.prototype._getMatchingNodes = function (treeChanges, transition) {
        var _this = this;
        var criteria = Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this._getDefaultMatchCriteria(), this.matchCriteria);
        var paths = Object(_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.tranSvc._pluginapi._getPathTypes());
        return paths.reduce(function (mn, pathtype) {
            // STATE scope criteria matches against every node in the path.
            // TRANSITION scope criteria matches against only the last node in the path
            var isStateHook = pathtype.scope === _interface__WEBPACK_IMPORTED_MODULE_1__["TransitionHookScope"].STATE;
            var path = treeChanges[pathtype.name] || [];
            var nodes = isStateHook ? path : [Object(_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(path)];
            mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name], transition);
            return mn;
        }, {});
    };
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    RegisteredHook.prototype.matches = function (treeChanges, transition) {
        var matches = this._getMatchingNodes(treeChanges, transition);
        // Check if all the criteria matched the TreeChanges object
        var allMatched = Object(_common__WEBPACK_IMPORTED_MODULE_0__["values"])(matches).every(_common__WEBPACK_IMPORTED_MODULE_0__["identity"]);
        return allMatched ? matches : null;
    };
    RegisteredHook.prototype.deregister = function () {
        this.removeHookFromRegistry(this);
        this._deregistered = true;
    };
    return RegisteredHook;
}());

/** @hidden Return a registration function of the requested type. */
function makeEvent(registry, transitionService, eventType) {
    // Create the object which holds the registered transition hooks.
    var _registeredHooks = (registry._registeredHooks = registry._registeredHooks || {});
    var hooks = (_registeredHooks[eventType.name] = []);
    var removeHookFn = Object(_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(hooks);
    // Create hook registration function on the IHookRegistry for the event
    registry[eventType.name] = hookRegistrationFn;
    function hookRegistrationFn(matchObject, callback, options) {
        if (options === void 0) { options = {}; }
        var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
        hooks.push(registeredHook);
        return registeredHook.deregister.bind(registeredHook);
    }
    return hookRegistrationFn;
}
//# sourceMappingURL=hookRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js ***!
  \********************************************************************************************************************/
/*! exports provided: TransitionHookPhase, TransitionHookScope, HookBuilder, matchState, RegisteredHook, makeEvent, RejectType, Rejection, Transition, TransitionHook, TransitionEventType, defaultTransOpts, TransitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"]; });

/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return _hookBuilder__WEBPACK_IMPORTED_MODULE_1__["HookBuilder"]; });

/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["matchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["RegisteredHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["makeEvent"]; });

/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return _rejectFactory__WEBPACK_IMPORTED_MODULE_3__["RejectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return _rejectFactory__WEBPACK_IMPORTED_MODULE_3__["Rejection"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _transition__WEBPACK_IMPORTED_MODULE_4__["Transition"]; });

/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return _transitionHook__WEBPACK_IMPORTED_MODULE_5__["TransitionHook"]; });

/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return _transitionEventType__WEBPACK_IMPORTED_MODULE_6__["TransitionEventType"]; });

/* harmony import */ var _transitionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return _transitionService__WEBPACK_IMPORTED_MODULE_7__["defaultTransOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return _transitionService__WEBPACK_IMPORTED_MODULE_7__["TransitionService"]; });

/**
 * # Transition subsystem
 *
 * This module contains APIs related to a Transition.
 *
 * See:
 * - [[TransitionService]]
 * - [[Transition]]
 * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
 *
 * @preferred @publicapi @module transition
 */ /** */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js":
/*!************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js ***!
  \************************************************************************************************************************/
/*! exports provided: TransitionHookPhase, TransitionHookScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return TransitionHookPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return TransitionHookScope; });
var TransitionHookPhase;
(function (TransitionHookPhase) {
    TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
    TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
    TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
    TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
    TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
})(TransitionHookPhase || (TransitionHookPhase = {}));
var TransitionHookScope;
(function (TransitionHookScope) {
    TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
    TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
})(TransitionHookScope || (TransitionHookScope = {}));

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js ***!
  \****************************************************************************************************************************/
/*! exports provided: RejectType, Rejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return RejectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return Rejection; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module transition */ /** */




var RejectType;
(function (RejectType) {
    /**
     * A new transition superseded this one.
     *
     * While this transition was running, a new transition started.
     * This transition is cancelled because it was superseded by new transition.
     */
    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
    /**
     * The transition was aborted
     *
     * The transition was aborted by a hook which returned `false`
     */
    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
    /**
     * The transition was invalid
     *
     * The transition was never started because it was invalid
     */
    RejectType[RejectType["INVALID"] = 4] = "INVALID";
    /**
     * The transition was ignored
     *
     * The transition was ignored because it would have no effect.
     *
     * Either:
     *
     * - The transition is targeting the current state and parameter values
     * - The transition is targeting the same state and parameter values as the currently running transition.
     */
    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
    /**
     * The transition errored.
     *
     * This generally means a hook threw an error or returned a rejected promise
     */
    RejectType[RejectType["ERROR"] = 6] = "ERROR";
})(RejectType || (RejectType = {}));

/** @hidden */
var id = 0;
var Rejection = /** @class */ (function () {
    function Rejection(type, message, detail) {
        /** @hidden */
        this.$id = id++;
        this.type = type;
        this.message = message;
        this.detail = detail;
    }
    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
    Rejection.isRejectionPromise = function (obj) {
        return obj && typeof obj.then === 'function' && Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Rejection)(obj._transitionRejection);
    };
    /** Returns a Rejection due to transition superseded */
    Rejection.superseded = function (detail, options) {
        var message = 'The transition has been superseded by a different transition';
        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
        if (options && options.redirected) {
            rejection.redirected = true;
        }
        return rejection;
    };
    /** Returns a Rejection due to redirected transition */
    Rejection.redirected = function (detail) {
        return Rejection.superseded(detail, { redirected: true });
    };
    /** Returns a Rejection due to invalid transition */
    Rejection.invalid = function (detail) {
        var message = 'This transition is invalid';
        return new Rejection(RejectType.INVALID, message, detail);
    };
    /** Returns a Rejection due to ignored transition */
    Rejection.ignored = function (detail) {
        var message = 'The transition was ignored';
        return new Rejection(RejectType.IGNORED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.aborted = function (detail) {
        var message = 'The transition has been aborted';
        return new Rejection(RejectType.ABORTED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.errored = function (detail) {
        var message = 'The transition errored';
        return new Rejection(RejectType.ERROR, message, detail);
    };
    /**
     * Returns a Rejection
     *
     * Normalizes a value as a Rejection.
     * If the value is already a Rejection, returns it.
     * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
     *
     * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
     */
    Rejection.normalize = function (detail) {
        return Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Rejection)(detail) ? detail : Rejection.errored(detail);
    };
    Rejection.prototype.toString = function () {
        var detailString = function (d) { return (d && d.toString !== Object.prototype.toString ? d.toString() : Object(_common_strings__WEBPACK_IMPORTED_MODULE_1__["stringify"])(d)); };
        var detail = detailString(this.detail);
        var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
        return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
    };
    Rejection.prototype.toPromise = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"])(this), { _transitionRejection: this });
    };
    return Rejection;
}());

//# sourceMappingURL=rejectFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module transition */ /** */






 // has or is using









/** @hidden */
var stateSelf = Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('self');
/**
 * Represents a transition between two states.
 *
 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
 *
 * This object contains all contextual information about the to/from states, parameters, resolves.
 * It has information about all states being entered and exited as a result of the transition.
 */
var Transition = /** @class */ (function () {
    /**
     * Creates a new Transition object.
     *
     * If the target state is not valid, an error is thrown.
     *
     * @internalapi
     *
     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
     *        encapsulates the "from state".
     * @param targetState The target state and parameters being transitioned to (also, the transition options)
     * @param router The [[UIRouter]] instance
     */
    function Transition(fromPath, targetState, router) {
        var _this = this;
        /** @hidden */
        this._deferred = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.defer();
        /**
         * This promise is resolved or rejected based on the outcome of the Transition.
         *
         * When the transition is successful, the promise is resolved
         * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
         */
        this.promise = this._deferred.promise;
        /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
        this._registeredHooks = {};
        /** @hidden */
        this._hookBuilder = new _hookBuilder__WEBPACK_IMPORTED_MODULE_9__["HookBuilder"](this);
        /** Checks if this transition is currently active/running. */
        this.isActive = function () { return _this.router.globals.transition === _this; };
        this.router = router;
        this._targetState = targetState;
        if (!targetState.valid()) {
            throw new Error(targetState.error());
        }
        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
        this._options = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["extend"])({ current: Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["val"])(this) }, targetState.options());
        this.$id = router.transitionService._transitionCount++;
        var toPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].buildToPath(fromPath, targetState);
        this._treeChanges = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].treeChanges(fromPath, toPath, this._options.reloadState);
        this.createTransitionHookRegFns();
        var onCreateHooks = this._hookBuilder.buildHooksForPhase(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].CREATE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(onCreateHooks, function () { return null; });
        this.applyViewConfigs(router);
    }
    /** @hidden */
    Transition.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /** @hidden
     * Creates the transition-level hook registration functions
     * (which can then be used to register hooks)
     */
    Transition.prototype.createTransitionHookRegFns = function () {
        var _this = this;
        this.router.transitionService._pluginapi
            ._getEvents()
            .filter(function (type) { return type.hookPhase !== _interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].CREATE; })
            .forEach(function (type) { return Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["makeEvent"])(_this, _this.router.transitionService, type); });
    };
    /** @internalapi */
    Transition.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    Transition.prototype.applyViewConfigs = function (router) {
        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
        _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
    };
    /**
     * @internalapi
     *
     * @returns the internal from [State] object
     */
    Transition.prototype.$from = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["tail"])(this._treeChanges.from).state;
    };
    /**
     * @internalapi
     *
     * @returns the internal to [State] object
     */
    Transition.prototype.$to = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["tail"])(this._treeChanges.to).state;
    };
    /**
     * Returns the "from state"
     *
     * Returns the state that the transition is coming *from*.
     *
     * @returns The state declaration object for the Transition's ("from state").
     */
    Transition.prototype.from = function () {
        return this.$from().self;
    };
    /**
     * Returns the "to state"
     *
     * Returns the state that the transition is going *to*.
     *
     * @returns The state declaration object for the Transition's target state ("to state").
     */
    Transition.prototype.to = function () {
        return this.$to().self;
    };
    /**
     * Gets the Target State
     *
     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
     *
     * @returns the [[TargetState]] of this Transition
     */
    Transition.prototype.targetState = function () {
        return this._targetState;
    };
    /**
     * Determines whether two transitions are equivalent.
     * @deprecated
     */
    Transition.prototype.is = function (compare) {
        if (compare instanceof Transition) {
            // TODO: Also compare parameters
            return this.is({ to: compare.$to().name, from: compare.$from().name });
        }
        return !((compare.to && !Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["matchState"])(this.$to(), compare.to, this)) ||
            (compare.from && !Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["matchState"])(this.$from(), compare.from, this)));
    };
    Transition.prototype.params = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return Object.freeze(this._treeChanges[pathname].map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["mergeR"], {}));
    };
    Transition.prototype.paramsChanged = function () {
        var fromParams = this.params('from');
        var toParams = this.params('to');
        // All the parameters declared on both the "to" and "from" paths
        var allParamDescriptors = []
            .concat(this._treeChanges.to)
            .concat(this._treeChanges.from)
            .map(function (pathNode) { return pathNode.paramSchema; })
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__["flattenR"], [])
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__["uniqR"], []);
        var changedParamDescriptors = _params_param__WEBPACK_IMPORTED_MODULE_11__["Param"].changed(allParamDescriptors, fromParams, toParams);
        return changedParamDescriptors.reduce(function (changedValues, descriptor) {
            changedValues[descriptor.id] = toParams[descriptor.id];
            return changedValues;
        }, {});
    };
    /**
     * Creates a [[UIInjector]] Dependency Injector
     *
     * Returns a Dependency Injector for the Transition's target state (to state).
     * The injector provides resolve values which the target state has access to.
     *
     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
     *
     * #### Example:
     * ```js
     * .onEnter({ entering: 'myState' }, trans => {
     *   var myResolveValue = trans.injector().get('myResolve');
     *   // Inject a global service from the global/native injector (if it exists)
     *   var MyService = trans.injector().get('MyService');
     * })
     * ```
     *
     * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
     * You can use [[UIInjector.getAsync]] to get a promise for the data.
     * #### Example:
     * ```js
     * .onBefore({}, trans => {
     *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
     *     return myResolveValue !== 'ABORT';
     *   });
     * });
     * ```
     *
     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
     * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
     * #### Example:
     * ```js
     * .onEnter({ to: 'foo.bar' }, trans => {
     *   // returns result of `foo` state's `myResolve` resolve
     *   // even though `foo.bar` also has a `myResolve` resolve
     *   var fooData = trans.injector('foo').get('myResolve');
     * });
     * ```
     *
     * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
     * The resolve data from the `from` path will be returned.
     * #### Example:
     * ```js
     * .onExit({ exiting: 'foo.bar' }, trans => {
     *   // Gets the resolve value of `myResolve` from the state being exited
     *   var fooData = trans.injector(null, 'from').get('myResolve');
     * });
     * ```
     *
     *
     * @param state Limits the resolves provided to only the resolves the provided state has access to.
     * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
     *
     * @returns a [[UIInjector]]
     */
    Transition.prototype.injector = function (state, pathName) {
        if (pathName === void 0) { pathName = 'to'; }
        var path = this._treeChanges[pathName];
        if (state)
            path = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].subPath(path, function (node) { return node.state === state || node.state.name === state; });
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](path).injector();
    };
    /**
     * Gets all available resolve tokens (keys)
     *
     * This method can be used in conjunction with [[injector]] to inspect the resolve values
     * available to the Transition.
     *
     * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
     * in the Transition's [[TreeChanges.to]] path.
     *
     * #### Example:
     * This example logs all resolve values
     * ```js
     * let tokens = trans.getResolveTokens();
     * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
     * ```
     *
     * #### Example:
     * This example creates promises for each resolve value.
     * This triggers fetches of resolves (if any have not yet been fetched).
     * When all promises have all settled, it logs the resolve values.
     * ```js
     * let tokens = trans.getResolveTokens();
     * let promise = tokens.map(token => trans.injector().getAsync(token));
     * Promise.all(promises).then(values => console.log("Resolved values: " + values));
     * ```
     *
     * Note: Angular 1 users whould use `$q.all()`
     *
     * @param pathname resolve context's path name (e.g., `to` or `from`)
     *
     * @returns an array of resolve tokens (keys)
     */
    Transition.prototype.getResolveTokens = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](this._treeChanges[pathname]).getTokens();
    };
    /**
     * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
     *
     * Allows a transition hook to dynamically add a Resolvable to this Transition.
     *
     * Use the [[Transition.injector]] to retrieve the resolved data in subsequent hooks ([[UIInjector.get]]).
     *
     * If a `state` argument is provided, the Resolvable is processed when that state is being entered.
     * If no `state` is provided then the root state is used.
     * If the given `state` has already been entered, the Resolvable is processed when any child state is entered.
     * If no child states will be entered, the Resolvable is processed during the `onFinish` phase of the Transition.
     *
     * The `state` argument also scopes the resolved data.
     * The resolved data is available from the injector for that `state` and any children states.
     *
     * #### Example:
     * ```js
     * transitionService.onBefore({}, transition => {
     *   transition.addResolvable({
     *     token: 'myResolve',
     *     deps: ['MyService'],
     *     resolveFn: myService => myService.getData()
     *   });
     * });
     * ```
     *
     * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
     */
    Transition.prototype.addResolvable = function (resolvable, state) {
        if (state === void 0) { state = ''; }
        resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["is"])(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__["Resolvable"])(resolvable) ? resolvable : new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__["Resolvable"](resolvable);
        var stateName = typeof state === 'string' ? state : state.name;
        var topath = this._treeChanges.to;
        var targetNode = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["find"])(topath, function (node) { return node.state.name === stateName; });
        var resolveContext = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](topath);
        resolveContext.addResolvables([resolvable], targetNode.state);
    };
    /**
     * Gets the transition from which this transition was redirected.
     *
     * If the current transition is a redirect, this method returns the transition that was redirected.
     *
     * #### Example:
     * ```js
     * let transitionA = $state.go('A').transition
     * transitionA.onStart({}, () => $state.target('B'));
     * $transitions.onSuccess({ to: 'B' }, (trans) => {
     *   trans.to().name === 'B'; // true
     *   trans.redirectedFrom() === transitionA; // true
     * });
     * ```
     *
     * @returns The previous Transition, or null if this Transition is not the result of a redirection
     */
    Transition.prototype.redirectedFrom = function () {
        return this._options.redirectedFrom || null;
    };
    /**
     * Gets the original transition in a redirect chain
     *
     * A transition might belong to a long chain of multiple redirects.
     * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
     *
     * #### Example:
     * ```js
     * // states
     * registry.register({ name: 'A', redirectTo: 'B' });
     * registry.register({ name: 'B', redirectTo: 'C' });
     * registry.register({ name: 'C', redirectTo: 'D' });
     * registry.register({ name: 'D' });
     *
     * let transitionA = $state.go('A').transition
     *
     * $transitions.onSuccess({ to: 'D' }, (trans) => {
     *   trans.to().name === 'D'; // true
     *   trans.redirectedFrom().to().name === 'C'; // true
     *   trans.originalTransition() === transitionA; // true
     *   trans.originalTransition().to().name === 'A'; // true
     * });
     * ```
     *
     * @returns The original Transition that started a redirect chain
     */
    Transition.prototype.originalTransition = function () {
        var rf = this.redirectedFrom();
        return (rf && rf.originalTransition()) || this;
    };
    /**
     * Get the transition options
     *
     * @returns the options for this Transition.
     */
    Transition.prototype.options = function () {
        return this._options;
    };
    /**
     * Gets the states being entered.
     *
     * @returns an array of states that will be entered during this transition.
     */
    Transition.prototype.entering = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.entering, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state')).map(stateSelf);
    };
    /**
     * Gets the states being exited.
     *
     * @returns an array of states that will be exited during this transition.
     */
    Transition.prototype.exiting = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.exiting, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state'))
            .map(stateSelf)
            .reverse();
    };
    /**
     * Gets the states being retained.
     *
     * @returns an array of states that are already entered from a previous Transition, that will not be
     *    exited during this Transition
     */
    Transition.prototype.retained = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.retained, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state')).map(stateSelf);
    };
    /**
     * Get the [[ViewConfig]]s associated with this Transition
     *
     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
     *
     * @param pathname the name of the path to fetch views for:
     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
     *
     * @returns a list of ViewConfig objects for the given path.
     */
    Transition.prototype.views = function (pathname, state) {
        if (pathname === void 0) { pathname = 'entering'; }
        var path = this._treeChanges[pathname];
        path = !state ? path : path.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["propEq"])('state', state));
        return path
            .map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('views'))
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_3__["identity"])
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], []);
    };
    Transition.prototype.treeChanges = function (pathname) {
        return pathname ? this._treeChanges[pathname] : this._treeChanges;
    };
    /**
     * Creates a new transition that is a redirection of the current one.
     *
     * This transition can be returned from a [[TransitionService]] hook to
     * redirect a transition to a new state and/or set of parameters.
     *
     * @internalapi
     *
     * @returns Returns a new [[Transition]] instance.
     */
    Transition.prototype.redirect = function (targetState) {
        var redirects = 1, trans = this;
        // tslint:disable-next-line:no-conditional-assignment
        while ((trans = trans.redirectedFrom()) != null) {
            if (++redirects > 20)
                throw new Error("Too many consecutive Transition redirects (20+)");
        }
        var redirectOpts = { redirectedFrom: this, source: 'redirect' };
        // If the original transition was caused by URL sync, then use { location: 'replace' }
        // on the new transition (unless the target state explicitly specifies location: false).
        // This causes the original url to be replaced with the url for the redirect target
        // so the original url disappears from the browser history.
        if (this.options().source === 'url' && targetState.options().location !== false) {
            redirectOpts.location = 'replace';
        }
        var newOptions = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["extend"])({}, this.options(), targetState.options(), redirectOpts);
        targetState = targetState.withOptions(newOptions, true);
        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
        var originalEnteringNodes = this._treeChanges.entering;
        var redirectEnteringNodes = newTransition._treeChanges.entering;
        // --- Re-use resolve data from original transition ---
        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
        // (because of the redirect), the resolves fetched by the original transition are still valid in the
        // redirected transition.
        //
        // This allows you to define a redirect on a parent state which depends on an async resolve value.
        // You can wait for the resolve, then redirect to a child state based on the result.
        // The redirected transition does not have to re-fetch the resolve.
        // ---------------------------------------------------------
        var nodeIsReloading = function (reloadState) { return function (node) {
            return reloadState && node.state.includes[reloadState.name];
        }; };
        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
        var matchingEnteringNodes = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].matching(redirectEnteringNodes, originalEnteringNodes, _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].nonDynamicParams).filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["not"])(nodeIsReloading(targetState.options().reloadState)));
        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
        matchingEnteringNodes.forEach(function (node, idx) {
            node.resolvables = originalEnteringNodes[idx].resolvables;
        });
        return newTransition;
    };
    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
    Transition.prototype._changedParams = function () {
        var tc = this._treeChanges;
        /** Return undefined if it's not a "dynamic" transition, for the following reasons */
        // If user explicitly wants a reload
        if (this._options.reload)
            return undefined;
        // If any states are exiting or entering
        if (tc.exiting.length || tc.entering.length)
            return undefined;
        // If to/from path lengths differ
        if (tc.to.length !== tc.from.length)
            return undefined;
        // If the to/from paths are different
        var pathsDiffer = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["arrayTuples"])(tc.to, tc.from)
            .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["anyTrueR"], false);
        if (pathsDiffer)
            return undefined;
        // Find any parameter values that differ
        var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
        var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
        var tuples = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["arrayTuples"])(nodeSchemas, toValues, fromValues);
        return tuples.map(function (_a) {
            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
            return _params_param__WEBPACK_IMPORTED_MODULE_11__["Param"].changed(schema, toVals, fromVals);
        }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], []);
    };
    /**
     * Returns true if the transition is dynamic.
     *
     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
     *
     * @returns true if the Transition is dynamic
     */
    Transition.prototype.dynamic = function () {
        var changes = this._changedParams();
        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["anyTrueR"], false);
    };
    /**
     * Returns true if the transition is ignored.
     *
     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
     *
     * @returns true if the Transition is ignored.
     */
    Transition.prototype.ignored = function () {
        return !!this._ignoredReason();
    };
    /** @hidden */
    Transition.prototype._ignoredReason = function () {
        var pending = this.router.globals.transition;
        var reloadState = this._options.reloadState;
        var same = function (pathA, pathB) {
            if (pathA.length !== pathB.length)
                return false;
            var matching = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].matching(pathA, pathB);
            return pathA.length === matching.filter(function (node) { return !reloadState || !node.state.includes[reloadState.name]; }).length;
        };
        var newTC = this.treeChanges();
        var pendTC = pending && pending.treeChanges();
        if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting))
            return 'SameAsPending';
        if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to))
            return 'SameAsCurrent';
    };
    /**
     * Runs the transition
     *
     * This method is generally called from the [[StateService.transitionTo]]
     *
     * @internalapi
     *
     * @returns a promise for a successful transition.
     */
    Transition.prototype.run = function () {
        var _this = this;
        var runAllHooks = _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].runAllHooks;
        // Gets transition hooks array for the given phase
        var getHooksFor = function (phase) { return _this._hookBuilder.buildHooksForPhase(phase); };
        // When the chain is complete, then resolve or reject the deferred
        var transitionSuccess = function () {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceSuccess(_this.$to(), _this);
            _this.success = true;
            _this._deferred.resolve(_this.to());
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].SUCCESS));
        };
        var transitionError = function (reason) {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceError(reason, _this);
            _this.success = false;
            _this._deferred.reject(reason);
            _this._error = reason;
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].ERROR));
        };
        var runTransition = function () {
            // Wait to build the RUN hook chain until the BEFORE hooks are done
            // This allows a BEFORE hook to dynamically add additional RUN hooks via the Transition object.
            var allRunHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].RUN);
            var done = function () { return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(undefined); };
            return _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(allRunHooks, done);
        };
        var startTransition = function () {
            var globals = _this.router.globals;
            globals.lastStartedTransitionId = _this.$id;
            globals.transition = _this;
            globals.transitionHistory.enqueue(_this);
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceTransitionStart(_this);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(undefined);
        };
        var allBeforeHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].BEFORE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(allBeforeHooks, startTransition)
            .then(runTransition)
            .then(transitionSuccess, transitionError);
        return this.promise;
    };
    /**
     * Checks if the Transition is valid
     *
     * @returns true if the Transition is valid
     */
    Transition.prototype.valid = function () {
        return !this.error() || this.success !== undefined;
    };
    /**
     * Aborts this transition
     *
     * Imperative API to abort a Transition.
     * This only applies to Transitions that are not yet complete.
     */
    Transition.prototype.abort = function () {
        // Do not set flag if the transition is already complete
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(this.success)) {
            this._aborted = true;
        }
    };
    /**
     * The Transition error reason.
     *
     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
     *
     * @returns a transition rejection explaining why the transition is invalid, or the reason the transition failed.
     */
    Transition.prototype.error = function () {
        var state = this.$to();
        if (state.self.abstract) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__["Rejection"].invalid("Cannot transition to abstract state '" + state.name + "'");
        }
        var paramDefs = state.parameters();
        var values = this.params();
        var invalidParams = paramDefs.filter(function (param) { return !param.validates(values[param.id]); });
        if (invalidParams.length) {
            var invalidValues = invalidParams.map(function (param) { return "[" + param.id + ":" + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(values[param.id]) + "]"; }).join(', ');
            var detail = "The following parameter values are not valid for state '" + state.name + "': " + invalidValues;
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__["Rejection"].invalid(detail);
        }
        if (this.success === false)
            return this._error;
    };
    /**
     * A string representation of the Transition
     *
     * @returns A string representation of the Transition
     */
    Transition.prototype.toString = function () {
        var fromStateOrName = this.from();
        var toStateOrName = this.to();
        var avoidEmptyHash = function (params) {
            return params['#'] !== null && params['#'] !== undefined ? params : Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["omit"])(params, ['#']);
        };
        // (X) means the to state is invalid.
        var id = this.$id, from = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(avoidEmptyHash(this._treeChanges.from.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["mergeR"], {}))), toValid = this.valid() ? '' : '(X) ', to = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(avoidEmptyHash(this.params()));
        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
    };
    /** @hidden */
    Transition.diToken = Transition;
    return Transition;
}());

//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: TransitionEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return TransitionEventType; });
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");

/**
 * This class defines a type of hook, such as `onBefore` or `onEnter`.
 * Plugins can define custom hook types, such as sticky states does for `onInactive`.
 *
 * @interalapi
 */
var TransitionEventType = /** @class */ (function () {
    /* tslint:disable:no-inferrable-types */
    function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__["TransitionHook"].HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__["TransitionHook"].REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        this.name = name;
        this.hookPhase = hookPhase;
        this.hookOrder = hookOrder;
        this.criteriaMatchPath = criteriaMatchPath;
        this.reverseSort = reverseSort;
        this.getResultHandler = getResultHandler;
        this.getErrorHandler = getErrorHandler;
        this.synchronous = synchronous;
    }
    return TransitionEventType;
}());

//# sourceMappingURL=transitionEventType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: TransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return TransitionHook; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/** @publicapi @module transition */ /** */









var defaultOptions = {
    current: _common_common__WEBPACK_IMPORTED_MODULE_1__["noop"],
    transition: null,
    traceData: {},
    bind: null,
};
/** @hidden */
var TransitionHook = /** @class */ (function () {
    function TransitionHook(transition, stateContext, registeredHook, options) {
        var _this = this;
        this.transition = transition;
        this.stateContext = stateContext;
        this.registeredHook = registeredHook;
        this.options = options;
        this.isSuperseded = function () { return _this.type.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"].RUN && !_this.options.transition.isActive(); };
        this.options = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["defaults"])(options, defaultOptions);
        this.type = registeredHook.eventType;
    }
    /**
     * Chains together an array of TransitionHooks.
     *
     * Given a list of [[TransitionHook]] objects, chains them together.
     * Each hook is invoked after the previous one completes.
     *
     * #### Example:
     * ```js
     * var hooks: TransitionHook[] = getHooks();
     * let promise: Promise<any> = TransitionHook.chain(hooks);
     *
     * promise.then(handleSuccess, handleError);
     * ```
     *
     * @param hooks the list of hooks to chain together
     * @param waitFor if provided, the chain is `.then()`'ed off this promise
     * @returns a `Promise` for sequentially invoking the hooks (in order)
     */
    TransitionHook.chain = function (hooks, waitFor) {
        // Chain the next hook off the previous
        var createHookChainR = function (prev, nextHook) { return prev.then(function () { return nextHook.invokeHook(); }); };
        return hooks.reduce(createHookChainR, waitFor || _common_coreservices__WEBPACK_IMPORTED_MODULE_6__["services"].$q.when());
    };
    /**
     * Invokes all the provided TransitionHooks, in order.
     * Each hook's return value is checked.
     * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
     * If no hook returns a promise, then all hooks are processed synchronously.
     *
     * @param hooks the list of TransitionHooks to invoke
     * @param doneCallback a callback that is invoked after all the hooks have successfully completed
     *
     * @returns a promise for the async result, or the result of the callback
     */
    TransitionHook.invokeHooks = function (hooks, doneCallback) {
        for (var idx = 0; idx < hooks.length; idx++) {
            var hookResult = hooks[idx].invokeHook();
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(hookResult)) {
                var remainingHooks = hooks.slice(idx + 1);
                return TransitionHook.chain(remainingHooks, hookResult).then(doneCallback);
            }
        }
        return doneCallback();
    };
    /**
     * Run all TransitionHooks, ignoring their return value.
     */
    TransitionHook.runAllHooks = function (hooks) {
        hooks.forEach(function (hook) { return hook.invokeHook(); });
    };
    TransitionHook.prototype.logError = function (err) {
        this.transition.router.stateService.defaultErrorHandler()(err);
    };
    TransitionHook.prototype.invokeHook = function () {
        var _this = this;
        var hook = this.registeredHook;
        if (hook._deregistered)
            return;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        var options = this.options;
        _common_trace__WEBPACK_IMPORTED_MODULE_5__["trace"].traceHookInvocation(this, this.transition, options);
        var invokeCallback = function () { return hook.callback.call(options.bind, _this.transition, _this.stateContext); };
        var normalizeErr = function (err) { return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err).toPromise(); };
        var handleError = function (err) { return hook.eventType.getErrorHandler(_this)(err); };
        var handleResult = function (result) { return hook.eventType.getResultHandler(_this)(result); };
        try {
            var result = invokeCallback();
            if (!this.type.synchronous && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result)) {
                return result.catch(normalizeErr).then(handleResult, handleError);
            }
            else {
                return handleResult(result);
            }
        }
        catch (err) {
            // If callback throws (synchronously)
            return handleError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err));
        }
        finally {
            if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                hook.deregister();
            }
        }
    };
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false (cancel), a TargetState (redirect),
     * or a promise (which may later resolve to false or a redirect)
     *
     * This also handles "transition superseded" -- when a new transition
     * was started while the hook was still running
     */
    TransitionHook.prototype.handleHookResult = function (result) {
        var _this = this;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        // Hook returned a promise
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result)) {
            // Wait for the promise, then reprocess with the resulting value
            return result.then(function (val) { return _this.handleHookResult(val); });
        }
        _common_trace__WEBPACK_IMPORTED_MODULE_5__["trace"].traceHookResult(result, this.transition, this.options);
        // Hook returned false
        if (result === false) {
            // Abort this Transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted('Hook aborted transition').toPromise();
        }
        var isTargetState = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["is"])(_state_targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"]);
        // hook returned a TargetState
        if (isTargetState(result)) {
            // Halt the current Transition and redirect (a new Transition) to the TargetState.
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].redirected(result).toPromise();
        }
    };
    /**
     * Return a Rejection promise if the transition is no longer current due
     * to a stopped router (disposed), or a new transition has started and superseded this one.
     */
    TransitionHook.prototype.getNotCurrentRejection = function () {
        var router = this.transition.router;
        // The router is stopped
        if (router._disposed) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
        }
        if (this.transition._aborted) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted().toPromise();
        }
        // This transition is no longer current.
        // Another transition started while this hook was still running.
        if (this.isSuperseded()) {
            // Abort this transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].superseded(this.options.current()).toPromise();
        }
    };
    TransitionHook.prototype.toString = function () {
        var _a = this, options = _a.options, registeredHook = _a.registeredHook;
        var event = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.hookType')(options) || 'internal', context = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.context.state.name')(options) || Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.context')(options) || 'unknown', name = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["fnToString"])(registeredHook.callback);
        return event + " context: " + context + ", " + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, name);
    };
    /**
     * These GetResultHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
        return hook.handleHookResult(result);
    }; };
    /**
     * If the result is a promise rejection, log it.
     * Otherwise, ignore the result.
     */
    TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
        Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result) && result.catch(function (err) { return hook.logError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err)); });
        return undefined;
    }; };
    /**
     * These GetErrorHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.LOG_ERROR = function (hook) { return function (error) { return hook.logError(error); }; };
    TransitionHook.REJECT_ERROR = function (hook) { return function (error) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["silentRejection"])(error); }; };
    TransitionHook.THROW_ERROR = function (hook) { return function (error) {
        throw error;
    }; };
    return TransitionHook;
}());

//# sourceMappingURL=transitionHook.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js ***!
  \********************************************************************************************************************************/
/*! exports provided: defaultTransOpts, TransitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return defaultTransOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return TransitionService; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/coreResolvables */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js");
/* harmony import */ var _hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/redirectTo */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js");
/* harmony import */ var _hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/onEnterExitRetain */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js");
/* harmony import */ var _hooks_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/resolve */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js");
/* harmony import */ var _hooks_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/views */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js");
/* harmony import */ var _hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/updateGlobals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js");
/* harmony import */ var _hooks_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/url */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/ignoredTransition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js");
/* harmony import */ var _hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/invalidTransition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js");
/** @publicapi @module transition */ /** */


















/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
var defaultTransOpts = {
    location: true,
    relative: null,
    inherit: false,
    notify: true,
    reload: false,
    supercede: true,
    custom: {},
    current: function () { return null; },
    source: 'unknown',
};
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 */
var TransitionService = /** @class */ (function () {
    /** @hidden */
    function TransitionService(_router) {
        /** @hidden */
        this._transitionCount = 0;
        /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
        this._eventTypes = [];
        /** @hidden The registered transition hooks */
        this._registeredHooks = {};
        /** @hidden The  paths on a criteria object */
        this._criteriaPaths = {};
        this._router = _router;
        this.$view = _router.viewService;
        this._deregisterHookFns = {};
        this._pluginapi = (Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["createProxyFunctions"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_15__["val"])(this), {}, Object(_common_hof__WEBPACK_IMPORTED_MODULE_15__["val"])(this), [
            '_definePathType',
            '_defineEvent',
            '_getPathTypes',
            '_getEvents',
            'getHooks',
        ]));
        this._defineCorePaths();
        this._defineCoreEvents();
        this._registerCoreTransitionHooks();
        _router.globals.successfulTransitions.onEvict(_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__["treeChangesCleanup"]);
    }
    /**
     * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
     *
     * Registers a transition lifecycle hook, which is invoked during transition construction.
     *
     * This low level hook should only be used by plugins.
     * This can be a useful time for plugins to add resolves or mutate the transition as needed.
     * The Sticky States plugin uses this hook to modify the treechanges.
     *
     * ### Lifecycle
     *
     * `onCreate` hooks are invoked *while a transition is being constructed*.
     *
     * ### Return value
     *
     * The hook's return value is ignored
     *
     * @internalapi
     * @param criteria defines which Transitions the Hook should be invoked for.
     * @param callback the hook function which will be invoked.
     * @param options the registration options
     * @returns a function which deregisters the hook.
     */
    TransitionService.prototype.onCreate = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /**
     * dispose
     * @internalapi
     */
    TransitionService.prototype.dispose = function (router) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["values"])(this._registeredHooks).forEach(function (hooksArray) {
            return hooksArray.forEach(function (hook) {
                hook._deregistered = true;
                Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["removeFrom"])(hooksArray, hook);
            });
        });
    };
    /**
     * Creates a new [[Transition]] object
     *
     * This is a factory function for creating new Transition objects.
     * It is used internally by the [[StateService]] and should generally not be called by application code.
     *
     * @param fromPath the path to the current state (the from state)
     * @param targetState the target state (destination)
     * @returns a Transition
     */
    TransitionService.prototype.create = function (fromPath, targetState) {
        return new _transition__WEBPACK_IMPORTED_MODULE_1__["Transition"](fromPath, targetState, this._router);
    };
    /** @hidden */
    TransitionService.prototype._defineCoreEvents = function () {
        var Phase = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"];
        var TH = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"];
        var paths = this._criteriaPaths;
        var NORMAL_SORT = false, REVERSE_SORT = true;
        var SYNCHRONOUS = true;
        this._defineEvent('onCreate', Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
        this._defineEvent('onBefore', Phase.BEFORE, 0, paths.to);
        this._defineEvent('onStart', Phase.RUN, 0, paths.to);
        this._defineEvent('onExit', Phase.RUN, 100, paths.exiting, REVERSE_SORT);
        this._defineEvent('onRetain', Phase.RUN, 200, paths.retained);
        this._defineEvent('onEnter', Phase.RUN, 300, paths.entering);
        this._defineEvent('onFinish', Phase.RUN, 400, paths.to);
        this._defineEvent('onSuccess', Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
        this._defineEvent('onError', Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
    };
    /** @hidden */
    TransitionService.prototype._defineCorePaths = function () {
        var STATE = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"].STATE, TRANSITION = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"].TRANSITION;
        this._definePathType('to', TRANSITION);
        this._definePathType('from', TRANSITION);
        this._definePathType('exiting', STATE);
        this._definePathType('retained', STATE);
        this._definePathType('entering', STATE);
    };
    /** @hidden */
    TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"].HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"].REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        var eventType = new _transitionEventType__WEBPACK_IMPORTED_MODULE_11__["TransitionEventType"](name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
        this._eventTypes.push(eventType);
        Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_2__["makeEvent"])(this, this, eventType);
    };
    /** @hidden */
    // tslint:disable-next-line
    TransitionService.prototype._getEvents = function (phase) {
        var transitionHookTypes = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_13__["isDefined"])(phase)
            ? this._eventTypes.filter(function (type) { return type.hookPhase === phase; })
            : this._eventTypes.slice();
        return transitionHookTypes.sort(function (l, r) {
            var cmpByPhase = l.hookPhase - r.hookPhase;
            return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
        });
    };
    /**
     * Adds a Path to be used as a criterion against a TreeChanges path
     *
     * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
     * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
     * Each state in the exiting path is checked against the criteria and returned as part of the match.
     *
     * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
     * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
     * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
     *
     * @hidden
     */
    TransitionService.prototype._definePathType = function (name, hookScope) {
        this._criteriaPaths[name] = { name: name, scope: hookScope };
    };
    /** * @hidden */
    // tslint:disable-next-line
    TransitionService.prototype._getPathTypes = function () {
        return this._criteriaPaths;
    };
    /** @hidden */
    TransitionService.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    /** @hidden */
    TransitionService.prototype._registerCoreTransitionHooks = function () {
        var fns = this._deregisterHookFns;
        fns.addCoreResolves = Object(_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__["registerAddCoreResolvables"])(this);
        fns.ignored = Object(_hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__["registerIgnoredTransitionHook"])(this);
        fns.invalid = Object(_hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__["registerInvalidTransitionHook"])(this);
        // Wire up redirectTo hook
        fns.redirectTo = Object(_hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__["registerRedirectToHook"])(this);
        // Wire up onExit/Retain/Enter state hooks
        fns.onExit = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnExitHook"])(this);
        fns.onRetain = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnRetainHook"])(this);
        fns.onEnter = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnEnterHook"])(this);
        // Wire up Resolve hooks
        fns.eagerResolve = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerEagerResolvePath"])(this);
        fns.lazyResolve = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerLazyResolveState"])(this);
        fns.resolveAll = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerResolveRemaining"])(this);
        // Wire up the View management hooks
        fns.loadViews = Object(_hooks_views__WEBPACK_IMPORTED_MODULE_7__["registerLoadEnteringViews"])(this);
        fns.activateViews = Object(_hooks_views__WEBPACK_IMPORTED_MODULE_7__["registerActivateViews"])(this);
        // Updates global state after a transition
        fns.updateGlobals = Object(_hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__["registerUpdateGlobalState"])(this);
        // After globals.current is updated at priority: 10000
        fns.updateUrl = Object(_hooks_url__WEBPACK_IMPORTED_MODULE_9__["registerUpdateUrl"])(this);
        // Lazy load state trees
        fns.lazyLoad = Object(_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__["registerLazyLoadHook"])(this);
    };
    return TransitionService;
}());

//# sourceMappingURL=transitionService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: UrlMatcher, ParamFactory, UrlMatcherFactory, UrlRouter, UrlRuleFactory, BaseUrlRule, UrlService, UrlRules, UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return _urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"]; });

/* harmony import */ var _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcherFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__["ParamFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__["UrlMatcherFactory"]; });

/* harmony import */ var _urlRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlRouter */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return _urlRouter__WEBPACK_IMPORTED_MODULE_2__["UrlRouter"]; });

/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return _urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return _urlRule__WEBPACK_IMPORTED_MODULE_3__["BaseUrlRule"]; });

/* harmony import */ var _urlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return _urlService__WEBPACK_IMPORTED_MODULE_4__["UrlService"]; });

/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return _urlRules__WEBPACK_IMPORTED_MODULE_5__["UrlRules"]; });

/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return _urlConfig__WEBPACK_IMPORTED_MODULE_6__["UrlConfig"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js ***!
  \*****************************************************************************************************************/
/*! exports provided: UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return UrlConfig; });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");


/**
 * An API to customize the URL behavior and retrieve URL configuration
 *
 * This API is used to customize the behavior of the URL.
 * This includes optional trailing slashes ([[strictMode]]), case sensitivity ([[caseInsensitive]]),
 * and custom parameter encoding (custom [[type]]).
 *
 * It also has information about the location (url) configuration such as [[port]] and [[baseHref]].
 * This information can be used to build absolute URLs, such as
 * `https://example.com:443/basepath/state/substate?param1=a#hashvalue`;
 *
 * This API is a property of [[UrlService]] as [[UrlService.config]].
 */
var UrlConfig = /** @class */ (function () {
    /** @hidden */ function UrlConfig(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this.paramTypes = new _params__WEBPACK_IMPORTED_MODULE_0__["ParamTypes"]();
        /** @hidden */ this._isCaseInsensitive = false;
        /** @hidden */ this._isStrictMode = true;
        /** @hidden */ this._defaultSquashPolicy = false;
        /** @internalapi */ this.dispose = function () { return _this.paramTypes.dispose(); };
        // Delegate these calls to the current LocationConfig implementation
        /**
         * Gets the base Href, e.g., `http://localhost/approot/`
         *
         * @return the application's base href
         */
        this.baseHref = function () { return _this.router.locationConfig.baseHref(); };
        /**
         * Gets or sets the hashPrefix
         *
         * This only applies when not running in [[html5Mode]] (pushstate mode)
         *
         * If the current url is `http://localhost/app#!/uirouter/path/#anchor`, it returns `!` which is the prefix for the "hashbang" portion.
         *
         * @return the hash prefix
         */
        this.hashPrefix = function (newprefix) { return _this.router.locationConfig.hashPrefix(newprefix); };
        /**
         * Gets the host, e.g., `localhost`
         *
         * @return the protocol
         */
        this.host = function () { return _this.router.locationConfig.host(); };
        /**
         * Returns true when running in pushstate mode
         *
         * @return true when running in html5 mode (pushstate mode).
         */
        this.html5Mode = function () { return _this.router.locationConfig.html5Mode(); };
        /**
         * Gets the port, e.g., `80`
         *
         * @return the port number
         */
        this.port = function () { return _this.router.locationConfig.port(); };
        /**
         * Gets the protocol, e.g., `http`
         *
         * @return the protocol
         */
        this.protocol = function () { return _this.router.locationConfig.protocol(); };
    }
    /**
     * Defines whether URL matching should be case sensitive (the default behavior), or not.
     *
     * #### Example:
     * ```js
     * // Allow case insensitive url matches
     * urlService.config.caseInsensitive(true);
     * ```
     *
     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
     * @returns the current value of caseInsensitive
     */
    UrlConfig.prototype.caseInsensitive = function (value) {
        return (this._isCaseInsensitive = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._isCaseInsensitive);
    };
    /**
     * Sets the default behavior when generating or matching URLs with default parameter values.
     *
     * #### Example:
     * ```js
     * // Remove default parameter values from the url
     * urlService.config.defaultSquashPolicy(true);
     * ```
     *
     * @param value A string that defines the default parameter URL squashing behavior.
     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
     *      parameter is surrounded by slashes, squash (remove) one slash from the URL
     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
     *      the parameter value from the URL and replace it with this string.
     * @returns the current value of defaultSquashPolicy
     */
    UrlConfig.prototype.defaultSquashPolicy = function (value) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) && value !== true && value !== false && !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isString"])(value))
            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
        return (this._defaultSquashPolicy = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._defaultSquashPolicy);
    };
    /**
     * Defines whether URLs should match trailing slashes, or not (the default behavior).
     *
     * #### Example:
     * ```js
     * // Allow optional trailing slashes
     * urlService.config.strictMode(false);
     * ```
     *
     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
     * @returns the current value of strictMode
     */
    UrlConfig.prototype.strictMode = function (value) {
        return (this._isStrictMode = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._isStrictMode);
    };
    /**
     * Creates and registers a custom [[ParamType]] object
     *
     * A custom parameter type can be used to generate URLs with typed parameters or custom encoding/decoding.
     *
     * #### Note: Register custom types *before using them* in a state definition.
     *
     * #### Example:
     * ```js
     * // Encode object parameter as JSON string
     * urlService.config.type('myjson', {
     *   encode: (obj) => JSON.stringify(obj),
     *   decode: (str) => JSON.parse(str),
     *   is: (val) => typeof(val) === 'object',
     *   pattern: /[^/]+/,
     *   equals: (a, b) => _.isEqual(a, b),
     * });
     * ```
     *
     * See [[ParamTypeDefinition]] for more examples
     *
     * @param name The type name.
     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
     * @param definitionFn A function that is injected before the app runtime starts.
     *        The result of this function should be a [[ParamTypeDefinition]].
     *        The result is merged into the existing `definition`.
     *        See [[ParamType]] for information on the values accepted.
     *
     * @returns if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
     */
    UrlConfig.prototype.type = function (name, definition, definitionFn) {
        var type = this.paramTypes.type(name, definition, definitionFn);
        return !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(definition) ? type : this;
    };
    return UrlConfig;
}());

//# sourceMappingURL=urlConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js ***!
  \******************************************************************************************************************/
/*! exports provided: UrlMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return UrlMatcher; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module url */ /** */






/** @hidden */
function quoteRegExp(str, param) {
    var surroundPattern = ['', ''], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
    if (!param)
        return result;
    switch (param.squash) {
        case false:
            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
            break;
        case true:
            result = result.replace(/\/$/, '');
            surroundPattern = ['(?:/(', ')|/)?'];
            break;
        default:
            surroundPattern = ["(" + param.squash + "|", ')?'];
            break;
    }
    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
}
/** @hidden */
var memoizeTo = function (obj, _prop, fn) { return (obj[_prop] = obj[_prop] || fn()); };
/** @hidden */
var splitOnSlash = Object(_common_strings__WEBPACK_IMPORTED_MODULE_4__["splitOnDelim"])('/');
/** @hidden */
var defaultConfig = {
    state: { params: {} },
    strict: true,
    caseInsensitive: true,
};
/**
 * Matches URLs against patterns.
 *
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL.
 *
 * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
 * parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by [[UrlMatcher.exec]].
 *
 * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
 * or colon placeholders (`/somePath/:param`).
 *
 * - *A parameter RegExp* may be defined for a param after a colon
 * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
 * The regexp must match for the url to be matched.
 * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
 *
 * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
 *   See [[UrlMatcherFactory.type]] for more information.
 *
 * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
 *   A catch-all * parameter value will contain the remainder of the URL.
 *
 * ---
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters).
 * A path parameter matches any number of characters other than '/'. For catch-all
 * placeholders the path parameter matches any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 */
var UrlMatcher = /** @class */ (function () {
    /**
     * @param pattern The pattern to compile into a matcher.
     * @param paramTypes The [[ParamTypes]] registry
     * @param paramFactory A [[ParamFactory]] object
     * @param config  A [[UrlMatcherCompileConfig]] configuration object
     */
    function UrlMatcher(pattern, paramTypes, paramFactory, config) {
        var _this = this;
        /** @hidden */
        this._cache = { path: [this] };
        /** @hidden */
        this._children = [];
        /** @hidden */
        this._params = [];
        /** @hidden */
        this._segments = [];
        /** @hidden */
        this._compiled = [];
        this.config = config = Object(_common__WEBPACK_IMPORTED_MODULE_5__["defaults"])(config, defaultConfig);
        this.pattern = pattern;
        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
        //   '*' name
        //   ':' name
        //   '{' name '}'
        //   '{' name ':' regexp '}'
        // The regular expression is somewhat complicated due to the need to allow curly braces
        // inside the regular expression. The placeholder regexp breaks down as follows:
        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
        //    [^{}\\]+                       - anything other than curly braces or backslash
        //    \\.                            - a backslash escape
        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var patterns = [];
        var last = 0;
        var matchArray;
        var checkParamErrors = function (id) {
            if (!UrlMatcher.nameValidator.test(id))
                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if (Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(_this._params, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', id)))
                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
        };
        // Split into static segments separated by path parameter placeholders.
        // The number of segments is always 1 more than the number of parameters.
        var matchDetails = function (m, isSearch) {
            // IE[78] returns '' for unmatched groups instead of null
            var id = m[2] || m[3];
            var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '[\\s\\S]*' : null);
            var makeRegexpType = function (str) {
                return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(paramTypes.type(isSearch ? 'query' : 'path'), {
                    pattern: new RegExp(str, _this.config.caseInsensitive ? 'i' : undefined),
                });
            };
            return {
                id: id,
                regexp: regexp,
                segment: pattern.substring(last, m.index),
                type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp),
            };
        };
        var details;
        var segment;
        // tslint:disable-next-line:no-conditional-assignment
        while ((matchArray = placeholder.exec(pattern))) {
            details = matchDetails(matchArray, false);
            if (details.segment.indexOf('?') >= 0)
                break; // we're into the search part
            checkParamErrors(details.id);
            this._params.push(paramFactory.fromPath(details.id, details.type, config.state));
            this._segments.push(details.segment);
            patterns.push([details.segment, Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(this._params)]);
            last = placeholder.lastIndex;
        }
        segment = pattern.substring(last);
        // Find any search parameter names and remove them from the last segment
        var i = segment.indexOf('?');
        if (i >= 0) {
            var search = segment.substring(i);
            segment = segment.substring(0, i);
            if (search.length > 0) {
                last = 0;
                // tslint:disable-next-line:no-conditional-assignment
                while ((matchArray = searchPlaceholder.exec(search))) {
                    details = matchDetails(matchArray, true);
                    checkParamErrors(details.id);
                    this._params.push(paramFactory.fromSearch(details.id, details.type, config.state));
                    last = placeholder.lastIndex;
                    // check if ?&
                }
            }
        }
        this._segments.push(segment);
        this._compiled = patterns.map(function (_pattern) { return quoteRegExp.apply(null, _pattern); }).concat(quoteRegExp(segment));
    }
    /** @hidden */
    UrlMatcher.encodeDashes = function (str) {
        // Replace dashes with encoded "\-"
        return encodeURIComponent(str).replace(/-/g, function (c) {
            return "%5C%" + c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase();
        });
    };
    /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
    UrlMatcher.pathSegmentsAndParams = function (matcher) {
        var staticSegments = matcher._segments;
        var pathParams = matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__["DefType"].PATH; });
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(staticSegments, pathParams.concat(undefined))
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (x) { return x !== '' && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(x); });
    };
    /** @hidden Given a matcher, return an array with the matcher's query params */
    UrlMatcher.queryParams = function (matcher) {
        return matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__["DefType"].SEARCH; });
    };
    /**
     * Compare two UrlMatchers
     *
     * This comparison function converts a UrlMatcher into static and dynamic path segments.
     * Each static path segment is a static string between a path separator (slash character).
     * Each dynamic segment is a path parameter.
     *
     * The comparison function sorts static segments before dynamic ones.
     */
    UrlMatcher.compare = function (a, b) {
        /**
         * Turn a UrlMatcher and all its parent matchers into an array
         * of slash literals '/', string literals, and Param objects
         *
         * This example matcher matches strings like "/foo/:param/tail":
         * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
         * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
         *
         * Caches the result as `matcher._cache.segments`
         */
        var segments = function (matcher) {
            return (matcher._cache.segments =
                matcher._cache.segments ||
                    matcher._cache.path
                        .map(UrlMatcher.pathSegmentsAndParams)
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
                        .reduce(_common_strings__WEBPACK_IMPORTED_MODULE_4__["joinNeighborsR"], [])
                        .map(function (x) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x) ? splitOnSlash(x) : x); })
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []));
        };
        /**
         * Gets the sort weight for each segment of a UrlMatcher
         *
         * Caches the result as `matcher._cache.weights`
         */
        var weights = function (matcher) {
            return (matcher._cache.weights =
                matcher._cache.weights ||
                    segments(matcher).map(function (segment) {
                        // Sort slashes first, then static strings, the Params
                        if (segment === '/')
                            return 1;
                        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(segment))
                            return 2;
                        if (segment instanceof _params_param__WEBPACK_IMPORTED_MODULE_3__["Param"])
                            return 3;
                    }));
        };
        /**
         * Pads shorter array in-place (mutates)
         */
        var padArrays = function (l, r, padVal) {
            var len = Math.max(l.length, r.length);
            while (l.length < len)
                l.push(padVal);
            while (r.length < len)
                r.push(padVal);
        };
        var weightsA = weights(a), weightsB = weights(b);
        padArrays(weightsA, weightsB, 0);
        var _pairs = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(weightsA, weightsB);
        var cmp, i;
        for (i = 0; i < _pairs.length; i++) {
            cmp = _pairs[i][0] - _pairs[i][1];
            if (cmp !== 0)
                return cmp;
        }
        return 0;
    };
    /**
     * Creates a new concatenated UrlMatcher
     *
     * Builds a new UrlMatcher by appending another UrlMatcher to this one.
     *
     * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
     */
    UrlMatcher.prototype.append = function (url) {
        this._children.push(url);
        url._cache = {
            path: this._cache.path.concat(url),
            parent: this,
            pattern: null,
        };
        return url;
    };
    /** @hidden */
    UrlMatcher.prototype.isRoot = function () {
        return this._cache.path[0] === this;
    };
    /** Returns the input pattern string */
    UrlMatcher.prototype.toString = function () {
        return this.pattern;
    };
    /**
     * Tests the specified url/path against this matcher.
     *
     * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
     * parameter values.  Returns null if the path does not match.
     *
     * The returned object contains the values
     * of any search parameters that are mentioned in the pattern, but their value may be null if
     * they are not present in `search`. This means that search parameters are always treated
     * as optional.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
     *   x: '1', q: 'hello'
     * });
     * // returns { id: 'bob', q: 'hello', r: null }
     * ```
     *
     * @param path    The URL path to match, e.g. `$location.path()`.
     * @param search  URL search parameters, e.g. `$location.search()`.
     * @param hash    URL hash e.g. `$location.hash()`.
     * @param options
     *
     * @returns The captured parameter values.
     */
    UrlMatcher.prototype.exec = function (path, search, hash, options) {
        var _this = this;
        if (search === void 0) { search = {}; }
        if (options === void 0) { options = {}; }
        var match = memoizeTo(this._cache, 'pattern', function () {
            return new RegExp([
                '^',
                Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnest"])(_this._cache.path.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('_compiled'))).join(''),
                _this.config.strict === false ? '/?' : '',
                '$',
            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
        }).exec(path);
        if (!match)
            return null;
        // options = defaults(options, { isolate: false });
        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
        if (nPathSegments !== match.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
        function decodePathArray(paramVal) {
            var reverseString = function (str) {
                return str
                    .split('')
                    .reverse()
                    .join('');
            };
            var unquoteDashes = function (str) { return str.replace(/\\-/g, '-'); };
            var split = reverseString(paramVal).split(/-(?!\\)/);
            var allReversed = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(split, reverseString);
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(allReversed, unquoteDashes).reverse();
        }
        for (var i = 0; i < nPathSegments; i++) {
            var param = pathParams[i];
            var value = match[i + 1];
            // if the param value matches a pre-replace pair, replace the value before decoding.
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            if (value && param.array === true)
                value = decodePathArray(value);
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(value))
                value = param.type.decode(value);
            values[param.id] = param.value(value);
        }
        searchParams.forEach(function (param) {
            var value = search[param.id];
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(value))
                value = param.type.decode(value);
            values[param.id] = param.value(value);
        });
        if (hash)
            values['#'] = hash;
        return values;
    };
    /**
     * @hidden
     * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
     *
     * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
     *    pattern has no parameters, an empty array is returned.
     */
    UrlMatcher.prototype.parameters = function (opts) {
        if (opts === void 0) { opts = {}; }
        if (opts.inherit === false)
            return this._params;
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnest"])(this._cache.path.map(function (matcher) { return matcher._params; }));
    };
    /**
     * @hidden
     * Returns a single parameter from this UrlMatcher by id
     *
     * @param id
     * @param opts
     * @returns {T|Param|any|boolean|UrlMatcher|null}
     */
    UrlMatcher.prototype.parameter = function (id, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        var findParam = function () {
            for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
                var param = _a[_i];
                if (param.id === id)
                    return param;
            }
        };
        var parent = this._cache.parent;
        return findParam() || (opts.inherit !== false && parent && parent.parameter(id, opts)) || null;
    };
    /**
     * Validates the input parameter values against this UrlMatcher
     *
     * Checks an object hash of parameters to validate their correctness according to the parameter
     * types of this `UrlMatcher`.
     *
     * @param params The object hash of parameters to validate.
     * @returns Returns `true` if `params` validates, otherwise `false`.
     */
    UrlMatcher.prototype.validates = function (params) {
        var validParamVal = function (param, val) { return !param || param.validates(val); };
        params = params || {};
        // I'm not sure why this checks only the param keys passed in, and not all the params known to the matcher
        var paramSchema = this.parameters().filter(function (paramDef) { return params.hasOwnProperty(paramDef.id); });
        return paramSchema.map(function (paramDef) { return validParamVal(paramDef, params[paramDef.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"], true);
    };
    /**
     * Given a set of parameter values, creates a URL from this UrlMatcher.
     *
     * Creates a URL that matches this pattern by substituting the specified values
     * for the path and search parameters.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
     * // returns '/user/bob?q=yes'
     * ```
     *
     * @param values  the values to substitute for the parameters in this pattern.
     * @returns the formatted URL (path and optionally search part).
     */
    UrlMatcher.prototype.format = function (values) {
        if (values === void 0) { values = {}; }
        // Build the full path of UrlMatchers (including all parent UrlMatchers)
        var urlMatchers = this._cache.path;
        // Extract all the static segments and Params (processed as ParamDetails)
        // into an ordered array
        var pathSegmentsAndParams = urlMatchers
            .map(UrlMatcher.pathSegmentsAndParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .map(function (x) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x) ? x : getDetails(x)); });
        // Extract the query params into a separate array
        var queryParams = urlMatchers
            .map(UrlMatcher.queryParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .map(getDetails);
        var isInvalid = function (param) { return param.isValid === false; };
        if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
            return null;
        }
        /**
         * Given a Param, applies the parameter value, then returns detailed information about it
         */
        function getDetails(param) {
            // Normalize to typed value
            var value = param.value(values[param.id]);
            var isValid = param.validates(value);
            var isDefaultValue = param.isDefaultValue(value);
            // Check if we're in squash mode for the parameter
            var squash = isDefaultValue ? param.squash : false;
            // Allow the Parameter's Type to encode the value
            var encoded = param.type.encode(value);
            return { param: param, value: value, isValid: isValid, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
        }
        // Build up the path-portion from the list of static segments and parameters
        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
            // The element is a static segment (a raw string); just append it
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x))
                return acc + x;
            // Otherwise, it's a ParamDetails.
            var squash = x.squash, encoded = x.encoded, param = x.param;
            // If squash is === true, try to remove a slash from the path
            if (squash === true)
                return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
            // If squash is a string, use the string for the param value
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
                return acc + squash;
            if (squash !== false)
                return acc; // ?
            if (encoded == null)
                return acc;
            // If this parameter value is an array, encode the value using encodeDashes
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(encoded))
                return acc + Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(encoded, UrlMatcher.encodeDashes).join('-');
            // If the parameter type is "raw", then do not encodeURIComponent
            if (param.raw)
                return acc + encoded;
            // Encode the value
            return acc + encodeURIComponent(encoded);
        }, '');
        // Build the query string by applying parameter values (array or regular)
        // then mapping to key=value, then flattening and joining using "&"
        var queryString = queryParams
            .map(function (paramDetails) {
            var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
            if (encoded == null || (isDefaultValue && squash !== false))
                return;
            if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(encoded))
                encoded = [encoded];
            if (encoded.length === 0)
                return;
            if (!param.raw)
                encoded = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(encoded, encodeURIComponent);
            return encoded.map(function (val) { return param.id + "=" + val; });
        })
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__["identity"])
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .join('&');
        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
        return pathString + (queryString ? "?" + queryString : '') + (values['#'] ? '#' + values['#'] : '');
    };
    /** @hidden */
    UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
    return UrlMatcher;
}());

//# sourceMappingURL=urlMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js ***!
  \*************************************************************************************************************************/
/*! exports provided: ParamFactory, UrlMatcherFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return ParamFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return UrlMatcherFactory; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** @publicapi @module url */ /** */



/** @internalapi */
var ParamFactory = /** @class */ (function () {
    function ParamFactory(router) {
        this.router = router;
    }
    ParamFactory.prototype.fromConfig = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].CONFIG, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromPath = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].PATH, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromSearch = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].SEARCH, this.router.urlService.config, state);
    };
    return ParamFactory;
}());

/**
 * Factory for [[UrlMatcher]] instances.
 *
 * The factory is available to ng1 services as
 * `$urlMatcherFactory` or ng1 providers as `$urlMatcherFactoryProvider`.
 *
 * @internalapi
 */
var UrlMatcherFactory = /** @class */ (function () {
    // TODO: move implementations to UrlConfig (urlService.config)
    function UrlMatcherFactory(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @internalapi Creates a new [[Param]] for a given location (DefType) */
        this.paramFactory = new ParamFactory(this.router);
        /** @deprecated use [[UrlConfig.caseInsensitive]] */
        this.caseInsensitive = function (value) { return _this.router.urlService.config.caseInsensitive(value); };
        /** @deprecated use [[UrlConfig.defaultSquashPolicy]] */
        this.defaultSquashPolicy = function (value) { return _this.router.urlService.config.defaultSquashPolicy(value); };
        /** @deprecated use [[UrlConfig.strictMode]] */
        this.strictMode = function (value) { return _this.router.urlService.config.strictMode(value); };
        /** @deprecated use [[UrlConfig.type]] */
        this.type = function (name, definition, definitionFn) {
            return _this.router.urlService.config.type(name, definition, definitionFn) || _this;
        };
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, { UrlMatcher: _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"], Param: _params__WEBPACK_IMPORTED_MODULE_2__["Param"] });
    }
    /**
     * Creates a [[UrlMatcher]] for the specified pattern.
     *
     * @param pattern  The URL pattern.
     * @param config  The config object hash.
     * @returns The UrlMatcher.
     */
    UrlMatcherFactory.prototype.compile = function (pattern, config) {
        var urlConfig = this.router.urlService.config;
        // backward-compatible support for config.params -> config.state.params
        var params = config && !config.state && config.params;
        config = params ? __assign({ state: { params: params } }, config) : config;
        var globalConfig = { strict: urlConfig._isStrictMode, caseInsensitive: urlConfig._isCaseInsensitive };
        return new _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"](pattern, urlConfig.paramTypes, this.paramFactory, Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(globalConfig, config));
    };
    /**
     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
     *
     * @param object  The object to perform the type check against.
     * @returns `true` if the object matches the `UrlMatcher` interface, by
     *          implementing all the same methods.
     */
    UrlMatcherFactory.prototype.isMatcher = function (object) {
        // TODO: typeof?
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object))
            return false;
        var result = true;
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["forEach"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"].prototype, function (val, name) {
            if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(val))
                result = result && (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(object[name]) && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(object[name]));
        });
        return result;
    };
    /** @hidden */
    UrlMatcherFactory.prototype.$get = function () {
        var urlConfig = this.router.urlService.config;
        urlConfig.paramTypes.enqueue = false;
        urlConfig.paramTypes._flushTypeQueue();
        return this;
    };
    return UrlMatcherFactory;
}());

//# sourceMappingURL=urlMatcherFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js ***!
  \*****************************************************************************************************************/
/*! exports provided: UrlRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");
/** @publicapi @module url */ /** */


/** @hidden */
function appendBasePath(url, isHtml5, absolute, baseHref) {
    if (baseHref === '/')
        return url;
    if (isHtml5)
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["stripLastPathElement"])(baseHref) + url;
    if (absolute)
        return baseHref.slice(1) + url;
    return url;
}
/**
 * Updates URL and responds to URL changes
 *
 * ### Deprecation warning:
 * This class is now considered to be an internal API
 * Use the [[UrlService]] instead.
 * For configuring URL rules, use the [[UrlRules]] which can be found as [[UrlService.rules]].
 *
 * @internalapi
 */
var UrlRouter = /** @class */ (function () {
    /** @hidden */
    function UrlRouter(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        // Delegate these calls to [[UrlService]]
        /** @deprecated use [[UrlService.sync]]*/
        this.sync = function (evt) { return _this.router.urlService.sync(evt); };
        /** @deprecated use [[UrlService.listen]]*/
        this.listen = function (enabled) { return _this.router.urlService.listen(enabled); };
        /** @deprecated use [[UrlService.deferIntercept]]*/
        this.deferIntercept = function (defer) { return _this.router.urlService.deferIntercept(defer); };
        /** @deprecated use [[UrlService.match]]*/
        this.match = function (urlParts) { return _this.router.urlService.match(urlParts); };
        // Delegate these calls to [[UrlRules]]
        /** @deprecated use [[UrlRules.initial]]*/
        this.initial = function (handler) {
            return _this.router.urlService.rules.initial(handler);
        };
        /** @deprecated use [[UrlRules.otherwise]]*/
        this.otherwise = function (handler) {
            return _this.router.urlService.rules.otherwise(handler);
        };
        /** @deprecated use [[UrlRules.removeRule]]*/
        this.removeRule = function (rule) { return _this.router.urlService.rules.removeRule(rule); };
        /** @deprecated use [[UrlRules.rule]]*/
        this.rule = function (rule) { return _this.router.urlService.rules.rule(rule); };
        /** @deprecated use [[UrlRules.rules]]*/
        this.rules = function () { return _this.router.urlService.rules.rules(); };
        /** @deprecated use [[UrlRules.sort]]*/
        this.sort = function (compareFn) { return _this.router.urlService.rules.sort(compareFn); };
        /** @deprecated use [[UrlRules.when]]*/
        this.when = function (matcher, handler, options) { return _this.router.urlService.rules.when(matcher, handler, options); };
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_1__["UrlRuleFactory"](router);
    }
    /**
     * Internal API.
     * @internalapi
     */
    UrlRouter.prototype.update = function (read) {
        var $url = this.router.locationService;
        if (read) {
            this.location = $url.url();
            return;
        }
        if ($url.url() === this.location)
            return;
        $url.url(this.location, true);
    };
    /**
     * Internal API.
     *
     * Pushes a new location to the browser history.
     *
     * @internalapi
     * @param urlMatcher
     * @param params
     * @param options
     */
    UrlRouter.prototype.push = function (urlMatcher, params, options) {
        var replace = options && !!options.replace;
        this.router.urlService.url(urlMatcher.format(params || {}), replace);
    };
    /**
     * Builds and returns a URL with interpolated parameters
     *
     * #### Example:
     * ```js
     * matcher = $umf.compile("/about/:person");
     * params = { person: "bob" };
     * $bob = $urlRouter.href(matcher, params);
     * // $bob == "/about/bob";
     * ```
     *
     * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
     * @param params An object of parameter values to fill the matcher's required parameters.
     * @param options Options object. The options are:
     *
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     *
     * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
     */
    UrlRouter.prototype.href = function (urlMatcher, params, options) {
        var url = urlMatcher.format(params);
        if (url == null)
            return null;
        options = options || { absolute: false };
        var cfg = this.router.urlService.config;
        var isHtml5 = cfg.html5Mode();
        if (!isHtml5 && url !== null) {
            url = '#' + cfg.hashPrefix() + url;
        }
        url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
        if (!options.absolute || !url) {
            return url;
        }
        var slash = !isHtml5 && url ? '/' : '';
        var cfgPort = cfg.port();
        var port = (cfgPort === 80 || cfgPort === 443 ? '' : ':' + cfgPort);
        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
    };
    Object.defineProperty(UrlRouter.prototype, "interceptDeferred", {
        /** @deprecated use [[UrlService.interceptDeferred]]*/
        get: function () {
            return this.router.urlService.interceptDeferred;
        },
        enumerable: true,
        configurable: true
    });
    return UrlRouter;
}());

//# sourceMappingURL=urlRouter.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js":
/*!***************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js ***!
  \***************************************************************************************************************/
/*! exports provided: UrlRuleFactory, BaseUrlRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return UrlRuleFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return BaseUrlRule; });
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_stateObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/** @publicapi @module url */ /** */





/**
 * Creates a [[UrlRule]]
 *
 * Creates a [[UrlRule]] from a:
 *
 * - `string`
 * - [[UrlMatcher]]
 * - `RegExp`
 * - [[StateObject]]
 * @internalapi
 */
var UrlRuleFactory = /** @class */ (function () {
    function UrlRuleFactory(router) {
        this.router = router;
    }
    UrlRuleFactory.prototype.compile = function (str) {
        return this.router.urlMatcherFactory.compile(str);
    };
    UrlRuleFactory.prototype.create = function (what, handler) {
        var _this = this;
        var isState = _state_stateObject__WEBPACK_IMPORTED_MODULE_4__["StateObject"].isState;
        var makeRule = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"], function (_what) { return makeRule(_this.compile(_what)); }],
            [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"]), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
            [isState, function (_what) { return _this.fromState(_what, _this.router); }],
            [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"], function (_what) { return new BaseUrlRule(_what, handler); }],
        ]);
        var rule = makeRule(what);
        if (!rule)
            throw new Error("invalid 'what' in when()");
        return rule;
    };
    /**
     * A UrlRule which matches based on a UrlMatcher
     *
     * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     *
     * ## Handler as UrlMatcher
     *
     * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
     * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
     * The url is replaced with the result.
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var handler = $umf.compile("/home/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, handler);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     */
    UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
        var _handler = handler;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(handler))
            handler = this.router.urlMatcherFactory.compile(handler);
        if (Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"])(handler))
            _handler = function (match) { return handler.format(match); };
        function matchUrlParamters(url) {
            var params = urlMatcher.exec(url.path, url.search, url.hash);
            return urlMatcher.validates(params) && params;
        }
        // Prioritize URLs, lowest to highest:
        // - Some optional URL parameters, but none matched
        // - No optional parameters in URL
        // - Some optional parameters, some matched
        // - Some optional parameters, all matched
        function matchPriority(params) {
            var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
            if (!optional.length)
                return 0.000001;
            var matched = optional.filter(function (param) { return params[param.id]; });
            return matched.length / optional.length;
        }
        var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: 'URLMATCHER' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(new BaseUrlRule(matchUrlParamters, _handler), details);
    };
    /**
     * A UrlRule which matches a state by its url
     *
     * #### Example:
     * ```js
     * var rule = factory.fromState($state.get('foo'), router);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match);
     * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
     * ```
     */
    UrlRuleFactory.prototype.fromState = function (state, router) {
        /**
         * Handles match by transitioning to matched state
         *
         * First checks if the router should start a new transition.
         * A new transition is not required if the current state's URL
         * and the new URL are already identical
         */
        var handler = function (match) {
            var $state = router.stateService;
            var globals = router.globals;
            if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
                $state.transitionTo(state, match, { inherit: true, source: 'url' });
            }
        };
        var details = { state: state, type: 'STATE' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.fromUrlMatcher(state.url, handler), details);
    };
    /**
     * A UrlRule which matches based on a regular expression
     *
     * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - regexp match array (from `regexp`)
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     *
     * ## Handler as string
     *
     * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
     * The string is first interpolated using `string.replace()` style pattern.
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     */
    UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
        if (regexp.global || regexp.sticky)
            throw new Error('Rule RegExp must not be global or sticky');
        /**
         * If handler is a string, the url will be replaced by the string.
         * If the string has any String.replace() style variables in it (like `$2`),
         * they will be replaced by the captures from [[match]]
         */
        var redirectUrlTo = function (match) {
            // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
            return handler.replace(/\$(\$|\d{1,2})/, function (m, what) { return match[what === '$' ? 0 : Number(what)]; });
        };
        var _handler = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(handler) ? redirectUrlTo : handler;
        var matchParamsFromRegexp = function (url) { return regexp.exec(url.path); };
        var details = { regexp: regexp, type: 'REGEXP' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
    };
    UrlRuleFactory.isUrlRule = function (obj) { return obj && ['type', 'match', 'handler'].every(function (key) { return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(obj[key]); }); };
    return UrlRuleFactory;
}());

/**
 * A base rule which calls `match`
 *
 * The value from the `match` function is passed through to the `handler`.
 * @internalapi
 */
var BaseUrlRule = /** @class */ (function () {
    function BaseUrlRule(match, handler) {
        var _this = this;
        this.match = match;
        this.type = 'RAW';
        this.matchPriority = function (match) { return 0 - _this.$id; };
        this.handler = handler || _common_common__WEBPACK_IMPORTED_MODULE_2__["identity"];
    }
    return BaseUrlRule;
}());

//# sourceMappingURL=urlRule.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js ***!
  \****************************************************************************************************************/
/*! exports provided: UrlRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return UrlRules; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");




/** @hidden */
var prioritySort = function (a, b) { return (b.priority || 0) - (a.priority || 0); };
/** @hidden */
var typeSort = function (a, b) {
    var weights = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
    return (weights[a.type] || 0) - (weights[b.type] || 0);
};
/** @hidden */
var urlMatcherSort = function (a, b) {
    return !a.urlMatcher || !b.urlMatcher ? 0 : _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"].compare(a.urlMatcher, b.urlMatcher);
};
/** @hidden */
var idSort = function (a, b) {
    // Identically sorted STATE and URLMATCHER best rule will be chosen by `matchPriority` after each rule matches the URL
    var useMatchPriority = { STATE: true, URLMATCHER: true };
    var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
    return equal ? 0 : (a.$id || 0) - (b.$id || 0);
};
/**
 * Default rule priority sorting function.
 *
 * Sorts rules by:
 *
 * - Explicit priority (set rule priority using [[UrlRules.when]])
 * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
 * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
 * - Rule registration order (for rule types other than STATE and URLMATCHER)
 *   - Equally sorted State and UrlMatcher rules will each match the URL.
 *     Then, the *best* match is chosen based on how many parameter values were matched.
 *
 * @publicapi
 */
var defaultRuleSortFn;
defaultRuleSortFn = function (a, b) {
    var cmp = prioritySort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = typeSort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = urlMatcherSort(a, b);
    if (cmp !== 0)
        return cmp;
    return idSort(a, b);
};
/** @hidden */
function getHandlerFn(handler) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(handler) && !Object(_common__WEBPACK_IMPORTED_MODULE_2__["isString"])(handler) && !Object(_common__WEBPACK_IMPORTED_MODULE_2__["is"])(_state__WEBPACK_IMPORTED_MODULE_0__["TargetState"])(handler) && !_state__WEBPACK_IMPORTED_MODULE_0__["TargetState"].isDef(handler)) {
        throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
    }
    return Object(_common__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(handler) ? handler : Object(_common__WEBPACK_IMPORTED_MODULE_2__["val"])(handler);
}
/**
 * API for managing URL rules
 *
 * This API is used to create and manage URL rules.
 * URL rules are a mechanism to respond to specific URL patterns.
 *
 * The most commonly used methods are [[otherwise]] and [[when]].
 *
 * This API is a property of [[UrlService]] as [[UrlService.rules]]
 *
 * @publicapi
 */
var UrlRules = /** @class */ (function () {
    /** @hidden */
    function UrlRules(/** @hidden */ router) {
        this.router = router;
        /** @hidden */ this._sortFn = defaultRuleSortFn;
        /** @hidden */ this._rules = [];
        /** @hidden */ this._id = 0;
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"](router);
    }
    /** @hidden */
    UrlRules.prototype.dispose = function (router) {
        this._rules = [];
        delete this._otherwiseFn;
    };
    /**
     * Defines the initial state, path, or behavior to use when the app starts.
     *
     * This rule defines the initial/starting state for the application.
     *
     * This rule is triggered the first time the URL is checked (when the app initially loads).
     * The rule is triggered only when the url matches either `""` or `"/"`.
     *
     * Note: The rule is intended to be used when the root of the application is directly linked to.
     * When the URL is *not* `""` or `"/"` and doesn't match other rules, the [[otherwise]] rule is triggered.
     * This allows 404-like behavior when an unknown URL is deep-linked.
     *
     * #### Example:
     * Start app at `home` state.
     * ```js
     * .initial({ state: 'home' });
     * ```
     *
     * #### Example:
     * Start app at `/home` (by url)
     * ```js
     * .initial('/home');
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .initial((matchValue, url, router) => {
     *   console.log('initial state');
     *   return { state: 'home' };
     * })
     * ```
     *
     * @param handler The initial state or url path, or a function which returns the state or url path (or performs custom logic).
     */
    UrlRules.prototype.initial = function (handler) {
        var handlerFn = getHandlerFn(handler);
        var matchFn = function (urlParts, router) {
            return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
        };
        this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
    };
    /**
     * Defines the state, url, or behavior to use when no other rule matches the URL.
     *
     * This rule is matched when *no other rule* matches.
     * It is generally used to handle unknown URLs (similar to "404" behavior, but on the client side).
     *
     * - If `handler` a string, it is treated as a url redirect
     *
     * #### Example:
     * When no other url rule matches, redirect to `/index`
     * ```js
     * .otherwise('/index');
     * ```
     *
     * - If `handler` is an object with a `state` property, the state is activated.
     *
     * #### Example:
     * When no other url rule matches, redirect to `home` and provide a `dashboard` parameter value.
     * ```js
     * .otherwise({ state: 'home', params: { dashboard: 'default' } });
     * ```
     *
     * - If `handler` is a function, the function receives the current url ([[UrlParts]]) and the [[UIRouter]] object.
     *   The function can perform actions, and/or return a value.
     *
     * #### Example:
     * When no other url rule matches, manually trigger a transition to the `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   router.stateService.go('home');
     * });
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   return { state: 'home' };
     * });
     * ```
     *
     * @param handler The url path to redirect to, or a function which returns the url path (or performs custom logic).
     */
    UrlRules.prototype.otherwise = function (handler) {
        var handlerFn = getHandlerFn(handler);
        this._otherwiseFn = this.urlRuleFactory.create(Object(_common__WEBPACK_IMPORTED_MODULE_2__["val"])(true), handlerFn);
        this._sorted = false;
    };
    /**
     * Remove a rule previously registered
     *
     * @param rule the matcher rule that was previously registered using [[rule]]
     */
    UrlRules.prototype.removeRule = function (rule) {
        Object(_common__WEBPACK_IMPORTED_MODULE_2__["removeFrom"])(this._rules, rule);
    };
    /**
     * Manually adds a URL Rule.
     *
     * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
     * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
     * Rules can be created using [[urlRuleFactory]], or created manually as simple objects.
     *
     * A rule should have a `match` function which returns truthy if the rule matched.
     * It should also have a `handler` function which is invoked if the rule is the best match.
     *
     * @return a function that deregisters the rule
     */
    UrlRules.prototype.rule = function (rule) {
        var _this = this;
        if (!_urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"].isUrlRule(rule))
            throw new Error('invalid rule');
        rule.$id = this._id++;
        rule.priority = rule.priority || 0;
        this._rules.push(rule);
        this._sorted = false;
        return function () { return _this.removeRule(rule); };
    };
    /**
     * Gets all registered rules
     *
     * @returns an array of all the registered rules
     */
    UrlRules.prototype.rules = function () {
        this.ensureSorted();
        return this._rules.concat(this._otherwiseFn ? [this._otherwiseFn] : []);
    };
    /**
     * Defines URL Rule priorities
     *
     * More than one rule ([[UrlRule]]) might match a given URL.
     * This `compareFn` is used to sort the rules by priority.
     * Higher priority rules should sort earlier.
     *
     * The [[defaultRuleSortFn]] is used by default.
     *
     * You only need to call this function once.
     * The `compareFn` will be used to sort the rules as each is registered.
     *
     * If called without any parameter, it will re-sort the rules.
     *
     * ---
     *
     * Url rules may come from multiple sources: states's urls ([[StateDeclaration.url]]), [[when]], and [[rule]].
     * Each rule has a (user-provided) [[UrlRule.priority]], a [[UrlRule.type]], and a [[UrlRule.$id]]
     * The `$id` is is the order in which the rule was registered.
     *
     * The sort function should use these data, or data found on a specific type
     * of [[UrlRule]] (such as [[StateRule.state]]), to order the rules as desired.
     *
     * #### Example:
     * This compare function prioritizes rules by the order in which the rules were registered.
     * A rule registered earlier has higher priority.
     *
     * ```js
     * function compareFn(a, b) {
     *   return a.$id - b.$id;
     * }
     * ```
     *
     * @param compareFn a function that compares to [[UrlRule]] objects.
     *    The `compareFn` should abide by the `Array.sort` compare function rules.
     *    Given two rules, `a` and `b`, return a negative number if `a` should be higher priority.
     *    Return a positive number if `b` should be higher priority.
     *    Return `0` if the rules are identical.
     *
     *    See the [mozilla reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)
     *    for details.
     */
    UrlRules.prototype.sort = function (compareFn) {
        var sorted = this.stableSort(this._rules, (this._sortFn = compareFn || this._sortFn));
        // precompute _sortGroup values and apply to each rule
        var group = 0;
        for (var i = 0; i < sorted.length; i++) {
            sorted[i]._group = group;
            if (i < sorted.length - 1 && this._sortFn(sorted[i], sorted[i + 1]) !== 0) {
                group++;
            }
        }
        this._rules = sorted;
        this._sorted = true;
    };
    /** @hidden */
    UrlRules.prototype.ensureSorted = function () {
        this._sorted || this.sort();
    };
    /** @hidden */
    UrlRules.prototype.stableSort = function (arr, compareFn) {
        var arrOfWrapper = arr.map(function (elem, idx) { return ({ elem: elem, idx: idx }); });
        arrOfWrapper.sort(function (wrapperA, wrapperB) {
            var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
            return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
        });
        return arrOfWrapper.map(function (wrapper) { return wrapper.elem; });
    };
    /**
     * Registers a `matcher` and `handler` for custom URLs handling.
     *
     * The `matcher` can be:
     *
     * - a [[UrlMatcher]]: See: [[UrlMatcherFactory.compile]]
     * - a `string`: The string is compiled to a [[UrlMatcher]]
     * - a `RegExp`: The regexp is used to match the url.
     *
     * The `handler` can be:
     *
     * - a string: The url is redirected to the value of the string.
     * - a function: The url is redirected to the return value of the function.
     *
     * ---
     *
     * When the `handler` is a `string` and the `matcher` is a `UrlMatcher` (or string), the redirect
     * string is interpolated with parameter values.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when("/foo/:param1", "/bar/:param1")
     * ```
     *
     * ---
     *
     * When the `handler` is a string and the `matcher` is a `RegExp`, the redirect string is
     * interpolated with capture groups from the RegExp.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), "/bar/$1");
     * ```
     *
     * ---
     *
     * When the handler is a function, it receives the matched value, the current URL, and the `UIRouter` object (See [[UrlRuleHandlerFn]]).
     * The "matched value" differs based on the `matcher`.
     * For [[UrlMatcher]]s, it will be the matched state params.
     * For `RegExp`, it will be the match array from `regexp.exec()`.
     *
     * If the handler returns a string, the URL is redirected to the string.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), match => "/bar/" + match[1]);
     * ```
     *
     * Note: the `handler` may also invoke arbitrary code, such as `$state.go()`
     *
     * @param matcher A pattern `string` to match, compiled as a [[UrlMatcher]], or a `RegExp`.
     * @param handler The path to redirect to, or a function that returns the path.
     * @param options `{ priority: number }`
     *
     * @return the registered [[UrlRule]]
     */
    UrlRules.prototype.when = function (matcher, handler, options) {
        var rule = this.urlRuleFactory.create(matcher, handler);
        if (Object(_common__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(options && options.priority))
            rule.priority = options.priority;
        this.rule(rule);
        return rule;
    };
    return UrlRules;
}());

//# sourceMappingURL=urlRules.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js ***!
  \******************************************************************************************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");




/** API for URL management */
var UrlService = /** @class */ (function () {
    /** @hidden */
    function UrlService(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this.interceptDeferred = false;
        /**
         * The nested [[UrlRules]] API for managing URL rules and rewrites
         *
         * See: [[UrlRules]] for details
         */
        this.rules = new _urlRules__WEBPACK_IMPORTED_MODULE_1__["UrlRules"](this.router);
        /**
         * The nested [[UrlConfig]] API to configure the URL and retrieve URL information
         *
         * See: [[UrlConfig]] for details
         */
        this.config = new _urlConfig__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"](this.router);
        // Delegate these calls to the current LocationServices implementation
        /**
         * Gets the current url, or updates the url
         *
         * ### Getting the current URL
         *
         * When no arguments are passed, returns the current URL.
         * The URL is normalized using the internal [[path]]/[[search]]/[[hash]] values.
         *
         * For example, the URL may be stored in the hash ([[HashLocationServices]]) or
         * have a base HREF prepended ([[PushStateLocationServices]]).
         *
         * The raw URL in the browser might be:
         *
         * ```
         * http://mysite.com/somepath/index.html#/internal/path/123?param1=foo#anchor
         * ```
         *
         * or
         *
         * ```
         * http://mysite.com/basepath/internal/path/123?param1=foo#anchor
         * ```
         *
         * then this method returns:
         *
         * ```
         * /internal/path/123?param1=foo#anchor
         * ```
         *
         *
         * #### Example:
         * ```js
         * locationServices.url(); // "/some/path?query=value#anchor"
         * ```
         *
         * ### Updating the URL
         *
         * When `newurl` arguments is provided, changes the URL to reflect `newurl`
         *
         * #### Example:
         * ```js
         * locationServices.url("/some/path?query=value#anchor", true);
         * ```
         *
         * @param newurl The new value for the URL.
         *               This url should reflect only the new internal [[path]], [[search]], and [[hash]] values.
         *               It should not include the protocol, site, port, or base path of an absolute HREF.
         * @param replace When true, replaces the current history entry (instead of appending it) with this new url
         * @param state The history's state object, i.e., pushState (if the LocationServices implementation supports it)
         *
         * @return the url (after potentially being processed)
         */
        this.url = function (newurl, replace, state) {
            return _this.router.locationService.url(newurl, replace, state);
        };
        /**
         * Gets the path part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `/some/path`
         *
         * @return the path portion of the url
         */
        this.path = function () { return _this.router.locationService.path(); };
        /**
         * Gets the search part of the current url as an object
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `{ query: 'value' }`
         *
         * @return the search (query) portion of the url, as an object
         */
        this.search = function () { return _this.router.locationService.search(); };
        /**
         * Gets the hash part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `anchor`
         *
         * @return the hash (anchor) portion of the url
         */
        this.hash = function () { return _this.router.locationService.hash(); };
        /**
         * @internalapi
         *
         * Registers a low level url change handler
         *
         * Note: Because this is a low level handler, it's not recommended for general use.
         *
         * #### Example:
         * ```js
         * let deregisterFn = locationServices.onChange((evt) => console.log("url change", evt));
         * ```
         *
         * @param callback a function that will be called when the url is changing
         * @return a function that de-registers the callback
         */
        this.onChange = function (callback) { return _this.router.locationService.onChange(callback); };
    }
    /** @hidden */
    UrlService.prototype.dispose = function () {
        this.listen(false);
        this.rules.dispose();
    };
    /**
     * Gets the current URL parts
     *
     * This method returns the different parts of the current URL (the [[path]], [[search]], and [[hash]]) as a [[UrlParts]] object.
     */
    UrlService.prototype.parts = function () {
        return { path: this.path(), search: this.search(), hash: this.hash() };
    };
    /**
     * Activates the best rule for the current URL
     *
     * Checks the current URL for a matching [[UrlRule]], then invokes that rule's handler.
     * This method is called internally any time the URL has changed.
     *
     * This effectively activates the state (or redirect, etc) which matches the current URL.
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   // Find the matching URL and invoke the handler.
     *   urlService.sync();
     * });
     * ```
     */
    UrlService.prototype.sync = function (evt) {
        if (evt && evt.defaultPrevented)
            return;
        var _a = this.router, urlService = _a.urlService, stateService = _a.stateService;
        var url = { path: urlService.path(), search: urlService.search(), hash: urlService.hash() };
        var best = this.match(url);
        var applyResult = Object(_common__WEBPACK_IMPORTED_MODULE_0__["pattern"])([
            [_common__WEBPACK_IMPORTED_MODULE_0__["isString"], function (newurl) { return urlService.url(newurl, true); }],
            [_state__WEBPACK_IMPORTED_MODULE_3__["TargetState"].isDef, function (def) { return stateService.go(def.state, def.params, def.options); }],
            [Object(_common__WEBPACK_IMPORTED_MODULE_0__["is"])(_state__WEBPACK_IMPORTED_MODULE_3__["TargetState"]), function (target) { return stateService.go(target.state(), target.params(), target.options()); }],
        ]);
        applyResult(best && best.rule.handler(best.match, url, this.router));
    };
    /**
     * Starts or stops listening for URL changes
     *
     * Call this sometime after calling [[deferIntercept]] to start monitoring the url.
     * This causes UI-Router to start listening for changes to the URL, if it wasn't already listening.
     *
     * If called with `false`, UI-Router will stop listening (call listen(true) to start listening again).
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   // Start responding to URL changes
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param enabled `true` or `false` to start or stop listening to URL changes
     */
    UrlService.prototype.listen = function (enabled) {
        var _this = this;
        if (enabled === false) {
            this._stopListeningFn && this._stopListeningFn();
            delete this._stopListeningFn;
        }
        else {
            return (this._stopListeningFn = this._stopListeningFn || this.router.urlService.onChange(function (evt) { return _this.sync(evt); }));
        }
    };
    /**
     * Disables monitoring of the URL.
     *
     * Call this method before UI-Router has bootstrapped.
     * It will stop UI-Router from performing the initial url sync.
     *
     * This can be useful to perform some asynchronous initialization before the router starts.
     * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
     *
     * #### Example:
     * ```js
     * // Prevent UI-Router from automatically intercepting URL changes when it starts;
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param defer Indicates whether to defer location change interception.
     *        Passing no parameter is equivalent to `true`.
     */
    UrlService.prototype.deferIntercept = function (defer) {
        if (defer === undefined)
            defer = true;
        this.interceptDeferred = defer;
    };
    /**
     * Matches a URL
     *
     * Given a URL (as a [[UrlParts]] object), check all rules and determine the best matching rule.
     * Return the result as a [[MatchResult]].
     */
    UrlService.prototype.match = function (url) {
        var _this = this;
        url = Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ path: '', search: {}, hash: '' }, url);
        var rules = this.rules.rules();
        // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
        var checkRule = function (rule) {
            var match = rule.match(url, _this.router);
            return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
        };
        // The rules are pre-sorted.
        // - Find the first matching rule.
        // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
        // - Choose the rule with the highest match weight.
        var best;
        for (var i = 0; i < rules.length; i++) {
            // Stop when there is a 'best' rule and the next rule sorts differently than it.
            if (best && best.rule._group !== rules[i]._group)
                break;
            var current = checkRule(rules[i]);
            // Pick the best MatchResult
            best = !best || (current && current.weight > best.weight) ? current : best;
        }
        return best;
    };
    return UrlService;
}());

//# sourceMappingURL=urlService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js":
/*!***********************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js ***!
  \***********************************************************************************************************/
/*! exports provided: $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vanilla_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vanilla/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["$q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["$injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["HashLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["MemoryLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["PushStateLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["MemoryLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["locationPluginFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["memoryLocationPlugin"]; });

/** @internalapi @module vanilla */ /** */

//# sourceMappingURL=vanilla.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: BaseLocationServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return BaseLocationServices; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/** @internalapi @module vanilla */ /** */


/** A base `LocationServices` */
var BaseLocationServices = /** @class */ (function () {
    function BaseLocationServices(router, fireAfterUpdate) {
        var _this = this;
        this.fireAfterUpdate = fireAfterUpdate;
        this._listeners = [];
        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
        this.hash = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).hash; };
        this.path = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).path; };
        this.search = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getParams"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).search); };
        this._location = _common__WEBPACK_IMPORTED_MODULE_0__["root"].location;
        this._history = _common__WEBPACK_IMPORTED_MODULE_0__["root"].history;
    }
    BaseLocationServices.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = true; }
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(url) && url !== this._get()) {
            this._set(null, null, url, replace);
            if (this.fireAfterUpdate) {
                this._listeners.forEach(function (cb) { return cb({ url: url }); });
            }
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])(this);
    };
    BaseLocationServices.prototype.onChange = function (cb) {
        var _this = this;
        this._listeners.push(cb);
        return function () { return Object(_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(_this._listeners, cb); };
    };
    BaseLocationServices.prototype.dispose = function (router) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["deregAll"])(this._listeners);
    };
    return BaseLocationServices;
}());

//# sourceMappingURL=baseLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: BrowserLocationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return BrowserLocationConfig; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @internalapi @module vanilla */
/** */

/** A `LocationConfig` that delegates to the browser's `location` object */
var BrowserLocationConfig = /** @class */ (function () {
    function BrowserLocationConfig(router, _isHtml5) {
        if (_isHtml5 === void 0) { _isHtml5 = false; }
        this._isHtml5 = _isHtml5;
        this._baseHref = undefined;
        this._hashPrefix = '';
    }
    BrowserLocationConfig.prototype.port = function () {
        if (location.port) {
            return Number(location.port);
        }
        return this.protocol() === 'https' ? 443 : 80;
    };
    BrowserLocationConfig.prototype.protocol = function () {
        return location.protocol.replace(/:/g, '');
    };
    BrowserLocationConfig.prototype.host = function () {
        return location.hostname;
    };
    BrowserLocationConfig.prototype.html5Mode = function () {
        return this._isHtml5;
    };
    BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(newprefix) ? (this._hashPrefix = newprefix) : this._hashPrefix;
    };
    BrowserLocationConfig.prototype.baseHref = function (href) {
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(href))
            this._baseHref = href;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this._baseHref))
            this._baseHref = this.getBaseHref();
        return this._baseHref;
    };
    BrowserLocationConfig.prototype.getBaseHref = function () {
        var baseTag = document.getElementsByTagName('base')[0];
        if (baseTag && baseTag.href) {
            return baseTag.href.replace(/^([^/:]*:)?\/\/[^/]*/, '');
        }
        return this._isHtml5 ? '/' : location.pathname || '/';
    };
    BrowserLocationConfig.prototype.dispose = function () { };
    return BrowserLocationConfig;
}());

//# sourceMappingURL=browserLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: HashLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return HashLocationService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @internalapi @module vanilla */ /** */


/** A `LocationServices` that uses the browser hash "#" to get/set the current location */
var HashLocationService = /** @class */ (function (_super) {
    __extends(HashLocationService, _super);
    function HashLocationService(router) {
        var _this = _super.call(this, router, false) || this;
        _common__WEBPACK_IMPORTED_MODULE_0__["root"].addEventListener('hashchange', _this._listener, false);
        return _this;
    }
    HashLocationService.prototype._get = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["trimHashVal"])(this._location.hash);
    };
    HashLocationService.prototype._set = function (state, title, url, replace) {
        this._location.hash = url;
    };
    HashLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_0__["root"].removeEventListener('hashchange', this._listener);
    };
    return HashLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_1__["BaseLocationServices"]));

//# sourceMappingURL=hashLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _q__WEBPACK_IMPORTED_MODULE_0__["$q"]; });

/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["$injector"]; });

/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _baseLocationService__WEBPACK_IMPORTED_MODULE_2__["BaseLocationServices"]; });

/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _hashLocationService__WEBPACK_IMPORTED_MODULE_3__["HashLocationService"]; });

/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__["MemoryLocationService"]; });

/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _pushStateLocationService__WEBPACK_IMPORTED_MODULE_5__["PushStateLocationService"]; });

/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_6__["MemoryLocationConfig"]; });

/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _browserLocationConfig__WEBPACK_IMPORTED_MODULE_7__["BrowserLocationConfig"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["locationPluginFactory"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["memoryLocationPlugin"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js":
/*!********************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js ***!
  \********************************************************************************************************************/
/*! exports provided: $injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return $injector; });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

// globally available injectables
var globals = {};
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
/**
 * A basic angular1-like injector api
 *
 * This object implements four methods similar to the
 * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This object provides a naive implementation of a globally scoped dependency injection system.
 * It supports the following DI approaches:
 *
 * ### Function parameter names
 *
 * A function's `.toString()` is called, and the parameter names are parsed.
 * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
 *
 * ```js
 * function injectedFunction(FooService, BarService) {
 *   // FooService and BarService are injected
 * }
 * ```
 *
 * ### Function annotation
 *
 * A function may be annotated with an array of dependency names as the `$inject` property.
 *
 * ```js
 * injectedFunction.$inject = [ 'FooService', 'BarService' ];
 * function injectedFunction(fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }
 * ```
 *
 * ### Array notation
 *
 * An array provides the names of the dependencies to inject (as strings).
 * The function is the last element of the array.
 *
 * ```js
 * [ 'FooService', 'BarService', function (fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }]
 * ```
 *
 * @type {$InjectorLike}
 */
var $injector = {
    /** Gets an object from DI based on a string token */
    get: function (name) { return globals[name]; },
    /** Returns true if an object named `name` exists in global DI */
    has: function (name) { return $injector.get(name) != null; },
    /**
     * Injects a function
     *
     * @param fn the function to inject
     * @param context the function's `this` binding
     * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
     */
    invoke: function (fn, context, locals) {
        var all = Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, globals, locals || {});
        var params = $injector.annotate(fn);
        var ensureExist = Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"])(function (key) { return all.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
        var args = params.filter(ensureExist).map(function (x) { return all[x]; });
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(fn))
            return fn.apply(context, args);
        else
            return fn.slice(-1)[0].apply(context, args);
    },
    /**
     * Returns a function's dependencies
     *
     * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
     * @return an array of `string`s
     */
    annotate: function (fn) {
        if (!Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isInjectable"])(fn))
            throw new Error("Not an injectable function: " + fn);
        if (fn && fn.$inject)
            return fn.$inject;
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fn))
            return fn.slice(0, -1);
        var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        return result || [];
    },
};
//# sourceMappingURL=injector.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js ***!
  \********************************************************************************************************************************/
/*! exports provided: MemoryLocationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return MemoryLocationConfig; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");


/** A `LocationConfig` mock that gets/sets all config from an in-memory object */
var MemoryLocationConfig = /** @class */ (function () {
    function MemoryLocationConfig() {
        var _this = this;
        this.dispose = _common_common__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._baseHref = '';
        this._port = 80;
        this._protocol = 'http';
        this._host = 'localhost';
        this._hashPrefix = '';
        this.port = function () { return _this._port; };
        this.protocol = function () { return _this._protocol; };
        this.host = function () { return _this._host; };
        this.baseHref = function () { return _this._baseHref; };
        this.html5Mode = function () { return false; };
        this.hashPrefix = function (newval) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(newval) ? (_this._hashPrefix = newval) : _this._hashPrefix); };
    }
    return MemoryLocationConfig;
}());

//# sourceMappingURL=memoryLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: MemoryLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return MemoryLocationService; });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @internalapi @module vanilla */ /** */

/** A `LocationServices` that gets/sets the current location from an in-memory object */
var MemoryLocationService = /** @class */ (function (_super) {
    __extends(MemoryLocationService, _super);
    function MemoryLocationService(router) {
        return _super.call(this, router, true) || this;
    }
    MemoryLocationService.prototype._get = function () {
        return this._url;
    };
    MemoryLocationService.prototype._set = function (state, title, url, replace) {
        this._url = url;
    };
    return MemoryLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]));

//# sourceMappingURL=memoryLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js ***!
  \*******************************************************************************************************************/
/*! exports provided: servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return servicesPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return hashLocationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return pushStateLocationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return memoryLocationPlugin; });
/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @internalapi @module vanilla */ /** */









function servicesPlugin(router) {
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__["services"].$injector = _injector__WEBPACK_IMPORTED_MODULE_6__["$injector"];
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__["services"].$q = _q__WEBPACK_IMPORTED_MODULE_7__["$q"];
    return { name: 'vanilla.services', $q: _q__WEBPACK_IMPORTED_MODULE_7__["$q"], $injector: _injector__WEBPACK_IMPORTED_MODULE_6__["$injector"], dispose: function () { return null; } };
}
/** A `UIRouterPlugin` uses the browser hash to get/set the current location */
var hashLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.hashBangLocation', false, _hashLocationService__WEBPACK_IMPORTED_MODULE_1__["HashLocationService"], _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]);
/** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
var pushStateLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.pushStateLocation', true, _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__["PushStateLocationService"], _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]);
/** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
var memoryLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.memoryLocation', false, _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__["MemoryLocationService"], _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__["MemoryLocationConfig"]);
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js ***!
  \************************************************************************************************************************************/
/*! exports provided: PushStateLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return PushStateLocationService; });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
 *
 * Uses `history.pushState` and `history.replaceState`
 */
var PushStateLocationService = /** @class */ (function (_super) {
    __extends(PushStateLocationService, _super);
    function PushStateLocationService(router) {
        var _this = _super.call(this, router, true) || this;
        _this._config = router.urlService.config;
        _common__WEBPACK_IMPORTED_MODULE_1__["root"].addEventListener('popstate', _this._listener, false);
        return _this;
    }
    /**
     * Gets the base prefix without:
     * - trailing slash
     * - trailing filename
     * - protocol and hostname
     *
     * If <base href='/base/'>, this returns '/base'.
     * If <base href='/foo/base/'>, this returns '/foo/base'.
     * If <base href='/base/index.html'>, this returns '/base'.
     * If <base href='http://localhost:8080/base/index.html'>, this returns '/base'.
     * If <base href='/base'>, this returns ''.
     * If <base href='http://localhost:8080'>, this returns ''.
     * If <base href='http://localhost:8080/'>, this returns ''.
     *
     * See: https://html.spec.whatwg.org/dev/semantics.html#the-base-element
     */
    PushStateLocationService.prototype._getBasePrefix = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_1__["stripLastPathElement"])(this._config.baseHref());
    };
    PushStateLocationService.prototype._get = function () {
        var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
        search = Object(_common__WEBPACK_IMPORTED_MODULE_1__["splitQuery"])(search)[1]; // strip ? if found
        hash = Object(_common__WEBPACK_IMPORTED_MODULE_1__["splitHash"])(hash)[1]; // strip # if found
        var basePrefix = this._getBasePrefix();
        var exactBaseHrefMatch = pathname === this._config.baseHref();
        var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
        pathname = exactBaseHrefMatch ? '/' : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
        return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
    };
    PushStateLocationService.prototype._set = function (state, title, url, replace) {
        var basePrefix = this._getBasePrefix();
        var slash = url && url[0] !== '/' ? '/' : '';
        var fullUrl = url === '' || url === '/' ? this._config.baseHref() : basePrefix + slash + url;
        if (replace) {
            this._history.replaceState(state, title, fullUrl);
        }
        else {
            this._history.pushState(state, title, fullUrl);
        }
    };
    PushStateLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_1__["root"].removeEventListener('popstate', this._listener);
    };
    return PushStateLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]));

//# sourceMappingURL=pushStateLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js ***!
  \*************************************************************************************************************/
/*! exports provided: $q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return $q; });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

/**
 * An angular1-like promise api
 *
 * This object implements four methods similar to the
 * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This API provides native ES6 promise support wrapped as a $q-like API.
 * Internally, UI-Router uses this $q object to perform promise operations.
 * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
 *
 * $q-like promise api
 */
var $q = {
    /** Normalizes a value as a promise */
    when: function (val) { return new Promise(function (resolve, reject) { return resolve(val); }); },
    /** Normalizes a value as a promise rejection */
    reject: function (val) {
        return new Promise(function (resolve, reject) {
            reject(val);
        });
    },
    /** @returns a deferred object, which has `resolve` and `reject` functions */
    defer: function () {
        var deferred = {};
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    },
    /** Like Promise.all(), but also supports object key/promise notation like $q */
    all: function (promises) {
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"])(promises)) {
            return Promise.all(promises);
        }
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(promises)) {
            // Convert promises map to promises array.
            // When each promise resolves, map it to a tuple { key: key, val: val }
            var chain = Object.keys(promises).map(function (key) { return promises[key].then(function (val) { return ({ key: key, val: val }); }); });
            // Then wait for all promises to resolve, and convert them back to an object
            return $q.all(chain).then(function (values) {
                return values.reduce(function (acc, tuple) {
                    acc[tuple.key] = tuple.val;
                    return acc;
                }, {});
            });
        }
    },
};
//# sourceMappingURL=q.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js ***!
  \*****************************************************************************************************************/
/*! exports provided: keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return keyValsToObjectR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return locationPluginFactory; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

var keyValsToObjectR = function (accum, _a) {
    var key = _a[0], val = _a[1];
    if (!accum.hasOwnProperty(key)) {
        accum[key] = val;
    }
    else if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(accum[key])) {
        accum[key].push(val);
    }
    else {
        accum[key] = [accum[key], val];
    }
    return accum;
};
var getParams = function (queryString) {
    return queryString
        .split('&')
        .filter(_common__WEBPACK_IMPORTED_MODULE_0__["identity"])
        .map(_common__WEBPACK_IMPORTED_MODULE_0__["splitEqual"])
        .reduce(keyValsToObjectR, {});
};
function parseUrl(url) {
    var orEmptyString = function (x) { return x || ''; };
    var _a = Object(_common__WEBPACK_IMPORTED_MODULE_0__["splitHash"])(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
    var _b = Object(_common__WEBPACK_IMPORTED_MODULE_0__["splitQuery"])(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
    return { path: path, search: search, hash: hash, url: url };
}
var buildUrl = function (loc) {
    var path = loc.path();
    var searchObject = loc.search();
    var hash = loc.hash();
    var search = Object.keys(searchObject)
        .map(function (key) {
        var param = searchObject[key];
        var vals = Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(param) ? param : [param];
        return vals.map(function (val) { return key + '=' + val; });
    })
        .reduce(_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
        .join('&');
    return path + (search ? '?' + search : '') + (hash ? '#' + hash : '');
};
function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
    return function (uiRouter) {
        var service = (uiRouter.locationService = new serviceClass(uiRouter));
        var configuration = (uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5));
        function dispose(router) {
            router.dispose(service);
            router.dispose(configuration);
        }
        return { name: name, service: service, configuration: configuration, dispose: dispose };
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js":
/*!**************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return _view__WEBPACK_IMPORTED_MODULE_0__["ViewService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js ***!
  \*************************************************************************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/** @publicapi @module view */ /** */




/**
 * The View service
 *
 * This service pairs existing `ui-view` components (which live in the DOM)
 * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
 *
 * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
 *   The views from exited states are deactivated via [[deactivateViewConfig]].
 *   (See: the [[registerActivateViews]] Transition Hook)
 *
 * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
 *
 * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
 * are configured with the matching [[ViewConfig]](s)
 *
 */
var ViewService = /** @class */ (function () {
    /** @hidden */
    function ViewService(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this._uiViews = [];
        /** @hidden */ this._viewConfigs = [];
        /** @hidden */ this._viewConfigFactories = {};
        /** @hidden */ this._listeners = [];
        /** @internalapi */
        this._pluginapi = {
            _rootViewContext: this._rootViewContext.bind(this),
            _viewConfigFactory: this._viewConfigFactory.bind(this),
            _registeredUIView: function (id) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(_this._uiViews, function (view) { return _this.router.$id + "." + view.id === id; }); },
            _registeredUIViews: function () { return _this._uiViews; },
            _activeViewConfigs: function () { return _this._viewConfigs; },
            _onSync: function (listener) {
                _this._listeners.push(listener);
                return function () { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(_this._listeners, listener); };
            },
        };
    }
    /**
     * Normalizes a view's name from a state.views configuration block.
     *
     * This should be used by a framework implementation to calculate the values for
     * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
     *
     * @param context the context object (state declaration) that the view belongs to
     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
     *
     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
     */
    ViewService.normalizeUIViewTarget = function (context, rawViewName) {
        if (rawViewName === void 0) { rawViewName = ''; }
        // TODO: Validate incoming view name with a regexp to allow:
        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
        var viewAtContext = rawViewName.split('@');
        var uiViewName = viewAtContext[0] || '$default'; // default to unnamed view
        var uiViewContextAnchor = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(viewAtContext[1]) ? viewAtContext[1] : '^'; // default to parent context
        // Handle relative view-name sugar syntax.
        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
        if (relativeViewNameSugar) {
            // Clobbers existing contextAnchor (rawViewName validation will fix this)
            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
        }
        if (uiViewName.charAt(0) === '!') {
            uiViewName = uiViewName.substr(1);
            uiViewContextAnchor = ''; // target absolutely from root
        }
        // handle parent relative targeting "^.^.^"
        var relativeMatch = /^(\^(?:\.\^)*)$/;
        if (relativeMatch.exec(uiViewContextAnchor)) {
            var anchorState = uiViewContextAnchor.split('.').reduce(function (anchor, x) { return anchor.parent; }, context);
            uiViewContextAnchor = anchorState.name;
        }
        else if (uiViewContextAnchor === '.') {
            uiViewContextAnchor = context.name;
        }
        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
    };
    /** @hidden */
    ViewService.prototype._rootViewContext = function (context) {
        return (this._rootContext = context || this._rootContext);
    };
    /** @hidden */
    ViewService.prototype._viewConfigFactory = function (viewType, factory) {
        this._viewConfigFactories[viewType] = factory;
    };
    ViewService.prototype.createViewConfig = function (path, decl) {
        var cfgFactory = this._viewConfigFactories[decl.$type];
        if (!cfgFactory)
            throw new Error('ViewService: No view config factory registered for type ' + decl.$type);
        var cfgs = cfgFactory(path, decl);
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(cfgs) ? cfgs : [cfgs];
    };
    /**
     * Deactivates a ViewConfig.
     *
     * This function deactivates a `ViewConfig`.
     * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
     *
     * @param viewConfig The ViewConfig view to deregister.
     */
    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceEvent('<- Removing', viewConfig);
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(this._viewConfigs, viewConfig);
    };
    ViewService.prototype.activateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceEvent('-> Registering', viewConfig);
        this._viewConfigs.push(viewConfig);
    };
    ViewService.prototype.sync = function () {
        var _this = this;
        var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"], {});
        // Return a weighted depth value for a uiView.
        // The depth is the nesting depth of ui-views (based on FQN; times 10,000)
        // plus the depth of the state that is populating the uiView
        function uiViewDepth(uiView) {
            var stateDepth = function (context) { return (context && context.parent ? stateDepth(context.parent) + 1 : 1); };
            return uiView.fqn.split('.').length * 10000 + stateDepth(uiView.creationContext);
        }
        // Return the ViewConfig's context's depth in the context tree.
        function viewConfigDepth(config) {
            var context = config.viewDecl.$context, count = 0;
            while (++count && context.parent)
                context = context.parent;
            return count;
        }
        // Given a depth function, returns a compare function which can return either ascending or descending order
        var depthCompare = Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
        var matchingConfigPair = function (uiView) {
            var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
            if (matchingConfigs.length > 1) {
                // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
                // Sort by depth and return the match from the deepest child
                // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
                matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
            }
            return { uiView: uiView, viewConfig: matchingConfigs[0] };
        };
        var configureUIView = function (tuple) {
            // If a parent ui-view is reconfigured, it could destroy child ui-views.
            // Before configuring a child ui-view, make sure it's still in the active uiViews array.
            if (_this._uiViews.indexOf(tuple.uiView) !== -1)
                tuple.uiView.configUpdated(tuple.viewConfig);
        };
        // Sort views by FQN and state depth. Process uiviews nearest the root first.
        var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
        var matchedViewConfigs = uiViewTuples.map(function (tuple) { return tuple.viewConfig; });
        var unmatchedConfigTuples = this._viewConfigs
            .filter(function (config) { return !Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(matchedViewConfigs, config); })
            .map(function (viewConfig) { return ({ uiView: undefined, viewConfig: viewConfig }); });
        uiViewTuples.forEach(configureUIView);
        var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
        this._listeners.forEach(function (cb) { return cb(allTuples); });
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewSync(allTuples);
    };
    /**
     * Registers a `ui-view` component
     *
     * When a `ui-view` component is created, it uses this method to register itself.
     * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
     *
     * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
     * and what the view's state context is.
     *
     * Note: There is no corresponding `deregisterUIView`.
     *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
     *
     * @param uiView The metadata for a UIView
     * @return a de-registration function used when the view is destroyed.
     */
    ViewService.prototype.registerUIView = function (uiView) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('-> Registering', uiView);
        var uiViews = this._uiViews;
        var fqnAndTypeMatches = function (uiv) { return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type; };
        if (uiViews.filter(fqnAndTypeMatches).length)
            _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('!!!! duplicate uiView named:', uiView);
        uiViews.push(uiView);
        this.sync();
        return function () {
            var idx = uiViews.indexOf(uiView);
            if (idx === -1) {
                _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('Tried removing non-registered uiView', uiView);
                return;
            }
            _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('<- Deregistering', uiView);
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(uiViews)(uiView);
        };
    };
    /**
     * Returns the list of views currently available on the page, by fully-qualified name.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.available = function () {
        return this._uiViews.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('fqn'));
    };
    /**
     * Returns the list of views on the page containing loaded content.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.active = function () {
        return this._uiViews.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('$config')).map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('name'));
    };
    /**
     * Given a ui-view and a ViewConfig, determines if they "match".
     *
     * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
     * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
     *
     * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
     * can be a segmented ui-view path, describing a portion of a ui-view fqn.
     *
     * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
     *
     * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
     * - the ui-view's name matches the ViewConfig's target name
     * - the ui-view's context matches the ViewConfig's anchor
     *
     * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
     * - There exists a parent ui-view where:
     *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
     *    - the parent ui-view's context matches the ViewConfig's anchor
     * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
     *
     * Example:
     *
     * DOM:
     * <ui-view>                        <!-- created in the root context (name: "") -->
     *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
     *     <ui-view>                    <!-- created in the context named: "A.B"    -->
     *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
     *       </ui-view>
     *     </ui-view>
     *   </ui-view>
     * </ui-view>
     *
     * uiViews: [
     *  { fqn: "$default",                  creationContext: { name: "" } },
     *  { fqn: "$default.foo",              creationContext: { name: "A" } },
     *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
     *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
     * ]
     *
     * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
     *
     * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
     * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
     * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
     * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
     *
     * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
     * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
     * - There exists a parent ui-view (which has fqn: "$default.foo") where:
     *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
     *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
     * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
     *   the tail of the ui-view's fqn "default.bar"
     *
     * @internalapi
     */
    ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
        // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
        if (uiView.$type !== viewConfig.viewDecl.$type)
            return false;
        // Split names apart from both viewConfig and uiView into segments
        var vc = viewConfig.viewDecl;
        var vcSegments = vc.$uiViewName.split('.');
        var uivSegments = uiView.fqn.split('.');
        // Check if the tails of the segment arrays match. ex, these arrays' tails match:
        // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
        if (!Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(vcSegments, uivSegments.slice(0 - vcSegments.length)))
            return false;
        // Now check if the fqn ending at the first segment of the viewConfig matches the context:
        // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
        var negOffset = 1 - vcSegments.length || undefined;
        var fqnToFirstSegment = uivSegments.slice(0, negOffset).join('.');
        var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
        return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
    }; };
    return ViewService;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../00-hello-world/node_modules/webpack/buildin/global.js":
/*!****************************************************************!*\
  !*** ../00-hello-world/node_modules/webpack/buildin/global.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../06-ui-router/app.html":
/*!********************************!*\
  !*** ../06-ui-router/app.html ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      "UI-Router"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      "jinge framework does't implement router. we use ui-router."
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  ...(() => {
    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
      [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
        debugName: "attrs_of_<ui-router>",
        context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
        slots: {
          'default': function(component) {
        return [
        (() => {
          const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "div",
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
              "div",
              {
                style: "border-bottom: 1px solid blue; margin-bottom: 10px;"
              },
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "h3",
                "Top Menu Area"
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "p",
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                  "label",
                  "Open new tab:"
                ),
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "input",
                    {
                      type: "checkbox"
                    },
                  );
                  const fn_0 = () => {
                    el.checked = !!(vm_0.newTab);
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'change', function(...args) {vm_0.newTab = args[0].target.checked})
                  return el;
                })()
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "p",
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-sref>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    target: null,
                    class: "xx",
                    style: "margin-right: 8px;",
                    text: "Hello",
                    to: "hello",
                    active: "active"
                  });
                  const fn_0 = () => {
                    attrs.target = vm_0.newTab ? '_black' : '_self';
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })(),
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-sref>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                      slots: {
                        'default': function(component) {
                      return [
                      (() => {
                        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                          "a",
                          Object.assign({
                            style: "margin: 20px;"
                          }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
                          "About"
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                    }
                    },
                    target: null,
                    to: "about",
                    active: "active"
                  });
                  const fn_0 = () => {
                    attrs.target = vm_0.newTab ? '_blank' : '_self';
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })(),
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-sref>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    to: "redirect",
                    active: "active",
                    text: "Redirect"
                  });
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })(),
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-sref>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                      slots: {
                        'default': function(component) {
                      return [
                      (() => {
                        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                          "button",
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
                          "People"
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                        return el;
                      })()
                      ];
                    }
                    }
                    },
                    target: null,
                    to: "people",
                    active: "active"
                  });
                  const fn_0 = () => {
                    attrs.target = vm_0.newTab ? '_blank' : '_self';
                  };
                  fn_0();
                  vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["newTab"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })(),
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-sref>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                    params: null,
                    style: "margin-left: 8px;",
                    text: "Person-2",
                    to: "people.person",
                    active: "active"
                  });
                  const fn_0 = () => {
                    attrs.params = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({ personId: '002' });
                  };
                  fn_0();
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })(),
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "a",
                  {
                    style: "margin-left: 20px;",
                    href: "#/about"
                  },
                  "bug-test"
                )
              )
            ),
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
              "div",
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "h3",
                "Content Area"
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                "div",
                {
                  class: "content"
                },
                ...(() => {
                  const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                      debugName: "attrs_of_<ui-view>",
                      context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    },
                  });
                  const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIViewComponent"].create(attrs);
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                  return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                })()
              )
            )
          );
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
          return el;
        })()
        ];
      }
      }
      },
      states: null,
      plugins: null,
      router: "hash",
      otherwise: "hello"
    });
    const fn_0 = () => {
      attrs.states = vm_0._states;
    };
    fn_0();
    const fn_1 = () => {
      attrs.plugins = vm_0._plugins;
    };
    fn_1();
    const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIRouterComponent"].create(attrs);
    el.__addStylePid(component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
  })()
  ];
});

/***/ }),

/***/ "../06-ui-router/components/about.js":
/*!*******************************************!*\
  !*** ../06-ui-router/components/about.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");



class About extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "About"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "jinge is a Messenger, Proxy and Compiler based MVVM framework"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })()
      ];
    };
  }
}

/***/ }),

/***/ "../06-ui-router/components/hello.js":
/*!*******************************************!*\
  !*** ../06-ui-router/components/hello.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hello; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");



class Hello extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "Hello"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "hello, jinge!"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })()
      ];
    };
  }
  __afterRender() {
    const router = this.__getContext('ui-router');
    const transition = router.transitionService;

    this._des = transition.onExit({
      from: 'hello.**'
    }, trans => {
      /*
       * 如果直接使用浏览器前进后退，或者直接在浏览器地址栏手动改变 url，
       * 会导致虽然跳转能被阻止，但仍然在历史中产生了记录，从而无法再后退。
       * 
       * TODO: track bug of ui-router v1.0
       * https://stackoverflow.com/questions/44896070/ui-router-browser-back-button-changes-url-even-abort-transition-is-called
       * https://github.com/angular-ui/ui-router/issues/3416
       */
      return confirm('确认要退出？');
    });
  }
  __beforeDestroy() {
    this._des();
    console.log('Hello component will be destroy');
  }
}

/***/ }),

/***/ "../06-ui-router/components/people.js":
/*!********************************************!*\
  !*** ../06-ui-router/components/people.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");





class People extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(attrs) {
    super(attrs);
    const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    const fn_1_c3fa96703a3c = () => {
      __vm_c3fa96703a3c.people = attrs.people;
    };
    fn_1_c3fa96703a3c();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('people', fn_1_c3fa96703a3c);
  }
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          Object.assign({
            style: "display:flex;flex-direction:row;"
          }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "div",
            {
              style: "margin-right: 20px;"
            },
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
              "h4",
              "Some People:"
            ),
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
              "ul",
              ...(() => {
                const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                  [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                    debugName: "attrs_of_<for>",
                    context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                    slots: {
                      'default': function(component) {
                    const vm_1 = component;
                    return [
                    (() => {
                      const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                        "li",
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
                        ...(() => {
                          const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                            [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                              debugName: "attrs_of_<ui-sref>",
                              context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                            },
                            text: null,
                            params: null,
                            to: "people.person",
                            active: "active"
                          });
                          const fn_0 = () => {
                            attrs.text = function () {
                              let _0;
                              return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.name;
                          }();
                          };
                          fn_0();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["each","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                          const fn_1 = () => {
                            attrs.params = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])({
                              personId: function () {
                                  let _0;
                                  return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.id;
                              }()
                          });
                          };
                          fn_1();
                          vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["each","id"], fn_1, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                          const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                          return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
                        })()
                      );
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                      return el;
                    })()
                    ];
                  }
                  }
                  },
                  loop: null,
                  key: "each.id"
                });
                const fn_0 = () => {
                  attrs.loop = vm_0.people;
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["people"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
                const el = jinge__WEBPACK_IMPORTED_MODULE_0__["ForComponent"].create(attrs);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
                return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
              })()
            )
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            ...(() => {
              const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
                [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                  debugName: "attrs_of_<ui-view>",
                  context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                },
              });
              const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIViewComponent"].create(attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
              return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
            })()
          )
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })()
      ];
    }
  }
}

/***/ }),

/***/ "../06-ui-router/components/person.js":
/*!********************************************!*\
  !*** ../06-ui-router/components/person.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/lib/index.js");




class Person extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "h4",
            "A person!"
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Name: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.name;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["person","name"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Id: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.id;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["person","id"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Company: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.company;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["person","company"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Email: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.email;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["person","email"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Address: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.address;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(["person","address"], fn_0, component[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]]);
              return el;
            })()
          ),
          ...(() => {
            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["attrs"])({
              [jinge__WEBPACK_IMPORTED_MODULE_0__["__"]]: {
                debugName: "attrs_of_<ui-sref>",
                context: component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].context,
                slots: {
                  'default': function(component) {
                return [
                (() => {
                  const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "button",
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
                    "Close"
                  );
                  component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
                  return el;
                })()
                ];
              }
              }
              },
              to: "people"
            });
            const el = jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISrefComponent"].create(attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].nonRootCompNodes.push(el);
            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el.__render());
          })()
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })()
      ];
    }
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    super(attrs);
    const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    const fn_2_c3fa96703a3c = () => {
      __vm_c3fa96703a3c.person = attrs.person;
    };
    fn_2_c3fa96703a3c();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('person', fn_2_c3fa96703a3c);
  }
  __beforeDestroy() {
    console.log(`person: ${this.person.id} will be destroy.`);
  }
}

/***/ }),

/***/ "../06-ui-router/components/redirect.js":
/*!**********************************************!*\
  !*** ../06-ui-router/components/redirect.js ***!
  \**********************************************/
/*! exports provided: RedirectDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectDetail", function() { return RedirectDetail; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");



class RedirectDetail extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "Redirect"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
          "here is child detail redirect from parent."
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
        return el;
      })()
      ];
    };
  }
}

/***/ }),

/***/ "../06-ui-router/index.js":
/*!********************************!*\
  !*** ../06-ui-router/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var _uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/visualizer */ "../06-ui-router/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js");
/* harmony import */ var _uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.html */ "../06-ui-router/app.html");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about */ "../06-ui-router/components/about.js");
/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hello */ "../06-ui-router/components/hello.js");
/* harmony import */ var _components_people__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people */ "../06-ui-router/components/people.js");
/* harmony import */ var _components_person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person */ "../06-ui-router/components/person.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/redirect */ "../06-ui-router/components/redirect.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/api */ "../06-ui-router/service/api.js");












const uiStates = [{
  name: 'hello',
  url: '/hello',
  component: _components_hello__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'about',
  url: '/about',
  component: _components_about__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'redirect',
  url: '/redirect',
  redirectTo: 'redirect.detail'
}, {
  name: 'redirect.detail',
  url: '/detail',
  component: _components_redirect__WEBPACK_IMPORTED_MODULE_7__["RedirectDetail"]
}, {
  name: 'people',
  url: '/people',
  component: _components_people__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolve: {
    people: () => Object(_service_api__WEBPACK_IMPORTED_MODULE_8__["getAllPersons"])().then(result => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])(result))
  }
}, {
  name: 'people.person',
  url: '/:personId',
  component: _components_person__WEBPACK_IMPORTED_MODULE_6__["default"],
  /*
   * resolve can be object or array.
   * if it's array, same as usage of @uirouter/react.
   *   see: https://ui-router.github.io/react/tutorial/hellosolarsystem
   * if it's object, it will be convert to array.
   */
  resolve: {
    someFn: () => 'hello2',
    someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
    /* 
     * if resolve value is array, last item must be function, 
     * non-last items are deps. see https://ui-router.github.io/react/tutorial/hellosolarsystem
     */
    person: ['$transition$', 'people', (trans, people) => {
      console.log('inherited resove people:', people);
      const id = trans.params().personId;
      return Object(_service_api__WEBPACK_IMPORTED_MODULE_8__["getPersonById"])(id).then(result => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["vm"])(result));
    }]
  }
}];

class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_c3fa96703a3c = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_c3fa96703a3c._states = uiStates;
    __vm_c3fa96703a3c._plugins = [_uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__["Visualizer"]];
    __vm_c3fa96703a3c.newTab = false;
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "../06-ui-router/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js":
/*!******************************************************************************************!*\
  !*** ../06-ui-router/node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(window,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/_bundles/",e(e.s=12)}([function(n,t,e){"use strict";e.r(t),e.d(t,"h",function(){return s}),e.d(t,"createElement",function(){return s}),e.d(t,"cloneElement",function(){return A}),e.d(t,"createRef",function(){return P}),e.d(t,"Component",function(){return z}),e.d(t,"render",function(){return j}),e.d(t,"rerender",function(){return f}),e.d(t,"options",function(){return i});var r=function(){},i={},o=[],a=[];function s(n,t){var e,s,u,l,c=a;for(l=arguments.length;l-- >2;)o.push(arguments[l]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((s=o.pop())&&void 0!==s.pop)for(l=s.length;l--;)o.push(s[l]);else"boolean"==typeof s&&(s=null),(u="function"!=typeof n)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(u=!1)),u&&e?c[c.length-1]+=s:c===a?c=[s]:c.push(s),e=u;var A=new r;return A.nodeName=n,A.children=c,A.attributes=null==t?void 0:t,A.key=null==t?void 0:t.key,void 0!==i.vnode&&i.vnode(A),A}function u(n,t){for(var e in t)n[e]=t[e];return n}function l(n,t){null!=n&&("function"==typeof n?n(t):n.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function A(n,t){return s(n.nodeName,u(u({},n.attributes),t),arguments.length>2?[].slice.call(arguments,2):n.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,d=[];function h(n){!n._dirty&&(n._dirty=!0)&&1==d.push(n)&&(i.debounceRendering||c)(f)}function f(){for(var n;n=d.pop();)n._dirty&&M(n)}function m(n,t){return n.normalizedNodeName===t||n.nodeName.toLowerCase()===t.toLowerCase()}function g(n){var t=u({},n.attributes);t.children=n.children;var e=n.nodeName.defaultProps;if(void 0!==e)for(var r in e)void 0===t[r]&&(t[r]=e[r]);return t}function y(n){var t=n.parentNode;t&&t.removeChild(n)}function v(n,t,e,r,i){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)l(e,null),l(r,n);else if("class"!==t||i)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof e||(n.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof e)for(var o in e)o in r||(n.style[o]="");for(var o in r)n.style[o]="number"==typeof r[o]&&!1===p.test(o)?r[o]+"px":r[o]}}else if("dangerouslySetInnerHTML"===t)r&&(n.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?e||n.addEventListener(t,C,a):n.removeEventListener(t,C,a),(n._listeners||(n._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!i&&t in n){try{n[t]=null==r?"":r}catch(n){}null!=r&&!1!==r||"spellcheck"==t||n.removeAttribute(t)}else{var s=i&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?n.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):n.removeAttribute(t):"function"!=typeof r&&(s?n.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):n.setAttribute(t,r))}else n.className=r||""}function C(n){return this._listeners[n.type](i.event&&i.event(n)||n)}var b=[],B=0,_=!1,w=!1;function x(){for(var n;n=b.shift();)i.afterMount&&i.afterMount(n),n.componentDidMount&&n.componentDidMount()}function I(n,t,e,r,i,o){B++||(_=null!=i&&void 0!==i.ownerSVGElement,w=null!=n&&!("__preactattr_"in n));var a=T(n,t,e,r,o);return i&&a.parentNode!==i&&i.appendChild(a),--B||(w=!1,o||x()),a}function T(n,t,e,r,i){var o=n,a=_;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return n&&void 0!==n.splitText&&n.parentNode&&(!n._component||i)?n.nodeValue!=t&&(n.nodeValue=t):(o=document.createTextNode(t),n&&(n.parentNode&&n.parentNode.replaceChild(o,n),V(n,!0))),o.__preactattr_=!0,o;var s,u,l=t.nodeName;if("function"==typeof l)return function(n,t,e,r){var i=n&&n._component,o=i,a=n,s=i&&n._componentConstructor===t.nodeName,u=s,l=g(t);for(;i&&!u&&(i=i._parentComponent);)u=i.constructor===t.nodeName;i&&u&&(!r||i._component)?(O(i,l,3,e,r),n=i.base):(o&&!s&&(N(o),n=a=null),i=S(t.nodeName,l,e),n&&!i.nextBase&&(i.nextBase=n,a=null),O(i,l,1,e,r),n=i.base,a&&n!==a&&(a._component=null,V(a,!1)));return n}(n,t,e,r);if(_="svg"===l||"foreignObject"!==l&&_,l=String(l),(!n||!m(n,l))&&(s=l,(u=_?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,o=u,n)){for(;n.firstChild;)o.appendChild(n.firstChild);n.parentNode&&n.parentNode.replaceChild(o,n),V(n,!0)}var c=o.firstChild,A=o.__preactattr_,p=t.children;if(null==A){A=o.__preactattr_={};for(var d=o.attributes,h=d.length;h--;)A[d[h].name]=d[h].value}return!w&&p&&1===p.length&&"string"==typeof p[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=p[0]&&(c.nodeValue=p[0]):(p&&p.length||null!=c)&&function(n,t,e,r,i){var o,a,s,u,l,c=n.childNodes,A=[],p={},d=0,h=0,f=c.length,g=0,v=t?t.length:0;if(0!==f)for(var C=0;C<f;C++){var b=c[C],B=b.__preactattr_,_=v&&B?b._component?b._component.__key:B.key:null;null!=_?(d++,p[_]=b):(B||(void 0!==b.splitText?!i||b.nodeValue.trim():i))&&(A[g++]=b)}if(0!==v)for(var C=0;C<v;C++){u=t[C],l=null;var _=u.key;if(null!=_)d&&void 0!==p[_]&&(l=p[_],p[_]=void 0,d--);else if(h<g)for(o=h;o<g;o++)if(void 0!==A[o]&&(w=a=A[o],I=i,"string"==typeof(x=u)||"number"==typeof x?void 0!==w.splitText:"string"==typeof x.nodeName?!w._componentConstructor&&m(w,x.nodeName):I||w._componentConstructor===x.nodeName)){l=a,A[o]=void 0,o===g-1&&g--,o===h&&h++;break}l=T(l,u,e,r),s=c[C],l&&l!==n&&l!==s&&(null==s?n.appendChild(l):l===s.nextSibling?y(s):n.insertBefore(l,s))}var w,x,I;if(d)for(var C in p)void 0!==p[C]&&V(p[C],!1);for(;h<=g;)void 0!==(l=A[g--])&&V(l,!1)}(o,p,e,r,w||null!=A.dangerouslySetInnerHTML),function(n,t,e){var r;for(r in e)t&&null!=t[r]||null==e[r]||v(n,r,e[r],e[r]=void 0,_);for(r in t)"children"===r||"innerHTML"===r||r in e&&t[r]===("value"===r||"checked"===r?n[r]:e[r])||v(n,r,e[r],e[r]=t[r],_)}(o,t.attributes,A),_=a,o}function V(n,t){var e=n._component;e?N(e):(null!=n.__preactattr_&&l(n.__preactattr_.ref,null),!1!==t&&null!=n.__preactattr_||y(n),k(n))}function k(n){for(n=n.lastChild;n;){var t=n.previousSibling;V(n,!0),n=t}}var E=[];function S(n,t,e){var r,i=E.length;for(n.prototype&&n.prototype.render?(r=new n(t,e),z.call(r,t,e)):((r=new z(t,e)).constructor=n,r.render=D);i--;)if(E[i].constructor===n)return r.nextBase=E[i].nextBase,E.splice(i,1),r;return r}function D(n,t,e){return this.constructor(n,e)}function O(n,t,e,r,o){n._disable||(n._disable=!0,n.__ref=t.ref,n.__key=t.key,delete t.ref,delete t.key,void 0===n.constructor.getDerivedStateFromProps&&(!n.base||o?n.componentWillMount&&n.componentWillMount():n.componentWillReceiveProps&&n.componentWillReceiveProps(t,r)),r&&r!==n.context&&(n.prevContext||(n.prevContext=n.context),n.context=r),n.prevProps||(n.prevProps=n.props),n.props=t,n._disable=!1,0!==e&&(1!==e&&!1===i.syncComponentUpdates&&n.base?h(n):M(n,1,o)),l(n.__ref,n))}function M(n,t,e,r){if(!n._disable){var o,a,s,l=n.props,c=n.state,A=n.context,p=n.prevProps||l,d=n.prevState||c,h=n.prevContext||A,f=n.base,m=n.nextBase,y=f||m,v=n._component,C=!1,_=h;if(n.constructor.getDerivedStateFromProps&&(c=u(u({},c),n.constructor.getDerivedStateFromProps(l,c)),n.state=c),f&&(n.props=p,n.state=d,n.context=h,2!==t&&n.shouldComponentUpdate&&!1===n.shouldComponentUpdate(l,c,A)?C=!0:n.componentWillUpdate&&n.componentWillUpdate(l,c,A),n.props=l,n.state=c,n.context=A),n.prevProps=n.prevState=n.prevContext=n.nextBase=null,n._dirty=!1,!C){o=n.render(l,c,A),n.getChildContext&&(A=u(u({},A),n.getChildContext())),f&&n.getSnapshotBeforeUpdate&&(_=n.getSnapshotBeforeUpdate(p,d));var w,T,k=o&&o.nodeName;if("function"==typeof k){var E=g(o);(a=v)&&a.constructor===k&&E.key==a.__key?O(a,E,1,A,!1):(w=a,n._component=a=S(k,E,A),a.nextBase=a.nextBase||m,a._parentComponent=n,O(a,E,0,A,!1),M(a,1,e,!0)),T=a.base}else s=y,(w=v)&&(s=n._component=null),(y||1===t)&&(s&&(s._component=null),T=I(s,o,A,e||!f,y&&y.parentNode,!0));if(y&&T!==y&&a!==v){var D=y.parentNode;D&&T!==D&&(D.replaceChild(T,y),w||(y._component=null,V(y,!1)))}if(w&&N(w),n.base=T,T&&!r){for(var z=n,j=n;j=j._parentComponent;)(z=j).base=T;T._component=z,T._componentConstructor=z.constructor}}for(!f||e?b.push(n):C||(n.componentDidUpdate&&n.componentDidUpdate(p,d,_),i.afterUpdate&&i.afterUpdate(n));n._renderCallbacks.length;)n._renderCallbacks.pop().call(n);B||r||x()}}function N(n){i.beforeUnmount&&i.beforeUnmount(n);var t=n.base;n._disable=!0,n.componentWillUnmount&&n.componentWillUnmount(),n.base=null;var e=n._component;e?N(e):t&&(null!=t.__preactattr_&&l(t.__preactattr_.ref,null),n.nextBase=t,y(t),E.push(n),k(t)),l(n.__ref,null)}function z(n,t){this._dirty=!0,this.context=t,this.props=n,this.state=this.state||{},this._renderCallbacks=[]}function j(n,t,e){return I(e,n,{},!1,t,!1)}function P(){return{}}u(z.prototype,{setState:function(n,t){this.prevState||(this.prevState=this.state),this.state=u(u({},this.state),"function"==typeof n?n(this.state,this.props):n),t&&this._renderCallbacks.push(t),h(this)},forceUpdate:function(n){n&&this._renderCallbacks.push(n),M(this,2)},render:function(){}});var R={h:s,createElement:s,cloneElement:A,createRef:P,Component:z,render:j,rerender:f,options:i};t.default=R},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.easing={easeInOutQuad:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInOutCubic:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInOutQuart:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInOutQuint:function(n,t,e,r){return(n/=r/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInOutSine:function(n,t,e,r){return-e/2*(Math.cos(Math.PI*n/r)-1)+t},easeInOutExpo:function(n,t,e,r){return 0==n?t:n==r?t+e:(n/=r/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(2-Math.pow(2,-10*--n))+t},easeInOutCirc:function(n,t,e,r){return(n/=r/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,r){var i=1.70158,o=0,a=e;if(0==n)return t;if(1==(n/=r))return t+e;if(o||(o=.3*r),a<Math.abs(e)){a=e;i=o/4}else i=o/(2*Math.PI)*Math.asin(e/a);return-a*Math.pow(2,10*(n-=1))*Math.sin((n*r-i)*(2*Math.PI)/o)+t},easeOutElastic:function(n,t,e,r){var i=1.70158,o=0,a=e;if(0==n)return t;if(1==(n/=r))return t+e;if(o||(o=.3*r),a<Math.abs(e)){a=e;i=o/4}else i=o/(2*Math.PI)*Math.asin(e/a);return a*Math.pow(2,-10*n)*Math.sin((n*r-i)*(2*Math.PI)/o)+e+t},easeInOutElastic:function(n,t,e,r){var i=1.70158,o=0,a=e;if(0==n)return t;if(2==(n/=r/2))return t+e;if(o||(o=r*(.3*1.5)),a<Math.abs(e)){a=e;i=o/4}else i=o/(2*Math.PI)*Math.asin(e/a);return n<1?a*Math.pow(2,10*(n-=1))*Math.sin((n*r-i)*(2*Math.PI)/o)*-.5+t:a*Math.pow(2,-10*(n-=1))*Math.sin((n*r-i)*(2*Math.PI)/o)*.5+e+t},easeInOutBack:function(n,t,e,r,i){return null==i&&(i=1.70158),(n/=r/2)<1?e/2*(n*n*((1+(i*=1.525))*n-i))+t:e/2*((n-=2)*n*((1+(i*=1.525))*n+i)+2)+t}}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0),i=e(53);t.RENDERER_PRESETS={Tree:{layoutFn:u,sortNodesFn:s,labelRenderFn:d,edgeRenderFn:f},Cluster:{layoutFn:l,sortNodesFn:s,labelRenderFn:d,edgeRenderFn:f},Radial:{layoutFn:c,sortNodesFn:a,labelRenderFn:p,edgeRenderFn:h}};var o=t.RENDERER_PRESETS.Tree;function a(n,t){var e=t.layoutY-n.layoutY;return 0!==e?e:n.layoutX-t.layoutX}function s(n,t){var e=n.layoutY-t.layoutY;return 0!==e?e:n.layoutX-t.layoutX}function u(n){var t=i.hierarchy(n);return A(i.tree()(t))}function l(n){var t=i.hierarchy(n);return A(i.cluster()(t))}function c(n){var t=i.hierarchy(n);i.cluster().size([360,.4]).separation(function(n,t){return(n.parent==t.parent?1:2)/n.depth})(t).each(function(n){var t,e,r,i,o=(t=n.x,e=n.y,r=(t-90)/180*Math.PI,{x:.5+(i=e)*Math.cos(r),y:.5+i*Math.sin(r)}),a=n.data;a.layoutX=n.x,a.layoutY=n.y,a.x=o.x,a.y=o.y})}function A(n){return n.each(function(n){n.data.layoutX=n.data.x=n.x,n.data.layoutY=n.data.y=n.y}),n}function p(n,t,e,i){var o=i.baseFontSize,a=i.zoom,s=o*a,u=e.name.split("."),l=u.pop();"**"==l&&(l=u.pop()+".**");var c=e.layoutX||0,A=c<180==!!e.children?"start":"end",p="rotate("+(c<180?c-90:c+90)+"),translate("+("start"===A?15:-15)*a+", 0)";return r.h("text",{className:"name","text-anchor":A,transform:p,"font-size":s}," ",l," ")}function d(n,t,e,i){i.baseRadius;var o=i.baseFontSize,a=(i.baseStrokeWidth,i.baseNodeStrokeWidth,i.zoom),s=o*a,u=e.name.split("."),l=u.pop();"**"==l&&(l=u.pop()+".**");var c="rotate(-15),translate(0, "+-15*a+")";return r.h("text",{className:"name","text-anchor":"middle",transform:c,"font-size":s}," ",l," ")}function h(n,t){var e=t.baseStrokeWidth*t.zoom;return r.h("path",{d:function(n){return"M"+[n.animX,n.animY]+" "+[n._parent.animX,n._parent.animY]}(n),"stroke-width":e,className:"link"})}function f(n,t){var e=t.baseStrokeWidth*t.zoom;return r.h("path",{d:function(n){var t=n.animX,e=n.animY,r=n._parent.animX,i=n._parent.animY,o=(e+i)/2;return"M "+t+" "+e+" C "+t+" "+o+", "+r+" "+o+", "+r+" "+i}(n),"stroke-width":e,className:"link"})}t.DEFAULT_RENDERER={baseRadius:10,baseFontSize:12,baseStrokeWidth:2,baseNodeStrokeWidth:2,zoom:1,layoutFn:o.layoutFn,sortNodesFn:o.sortNodesFn,labelRenderFn:o.labelRenderFn,edgeRenderFn:o.edgeRenderFn},t.BOTTOM_TO_TOP_SORT=a,t.TOP_TO_BOTTOM_SORT=s,t.TREE_LAYOUT=u,t.CLUSTER_LAYOUT=l,t.RADIAL_LAYOUT=c,t.RADIAL_TEXT=p,t.SLANTED_TEXT=d,t.RADIAL_EDGE=h,t.TREE_EDGE=f},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxLength=function(n,t){return t.length<=n?t:t.substr(0,n-3)+"..."},t.stringify=function(n){var t=[];return JSON.stringify(n,function(n,e){return function(n){if("object"==typeof n){if(-1!==t.indexOf(n))return"[circular ref]";t.push(n)}return void 0===(e=n)?"undefined":null===e?"null":"object"==typeof e&&"function"==typeof e.then?"[Promise]":e;var e}(e)}).replace(/\\"/g,'"')}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={current:null,states:[],deregisterFn:null},t.selectState=function(n){var e=t.props.router.stateService,r=n.target.value;r&&e.go(r)},t}return i(t,n),t.prototype.componentDidMount=function(){var n=this,t=this.props.router,e=function(){return n.setState({states:t.stateRegistry.get().map(function(n){return n.name})})};t.stateRegistry.onStatesChanged&&(this.deregisterStateListenerFn=t.stateRegistry.onStatesChanged(e));var r=t.transitionService.onSuccess({},function(t){return n.setState({current:t.to().name})});this.setState({current:t.globals.current.name,states:[],deregisterFn:r}),e()},t.prototype.componentWillUnmount=function(){this.state.deregisterFn&&this.state.deregisterFn(),this.deregisterStateListenerFn&&this.deregisterStateListenerFn()},t.prototype.render=function(){return o.h("select",{value:this.state.current||"",onChange:this.selectState,style:{maxWidth:120}},o.h("option",{value:""},"Choose a state"),this.state.states.map(function(n){return o.h("option",{key:n,value:n},n)}))},t}(o.Component);t.StateSelector=a},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hasClass=function(n){return function(t){return!!new RegExp("\\b"+n+"\\b").exec(t.className)}},t.addClass=function(n){return function(t){return t.className=t.className+" "+n}},t.removeClass=function(n){return function(t){return t.className=t.className.replace(new RegExp("\\b"+n+"\\b","g"),"")}},t.toggleClass=function(n){return function(e){t.hasClass(n)(e)?t.removeClass(n)(e):t.addClass(n)(e)}}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),o=this&&this.__assign||function(){return(o=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),s=e(16),u=e(7),l=e(1),c=e(2),A=e(17),p={label:"",highlight:!1,active:!1,future:!1,retained:!1,entered:!1,exited:!1,inactive:!0},d=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={nodes:[],layout:{}},t.nodes=[],t.unmounted=!1,t.cancelCurrentAnimation=function(){return null},t.doLayoutAnimation=function(){t.cancelCurrentAnimation();var n=t.getNodes();if(n.length){var e=n.filter(function(n){return""===n.name})[0];t.props.renderer.layoutFn(e),n.filter(function(n){return!n.visible}).forEach(function(n){for(var t=n._parent;t&&!t.visible;)t=t._parent;t&&(n.x=t.x,n.y=t.y)});var r=t.dimensions(),i=n.map(function(n){return{x:n.animX||t.props.width/2,y:n.animY||t.props.height/2}}).map(function(n){return[n.x,n.y]}).reduce(function(n,t){return n.concat(t)},[]),o=n.map(function(n){return[(e=n.x,e*r.scaleX+r.offsetX),(t=n.y,t*r.scaleY+r.offsetY)];var t,e}).reduce(function(n,t){return n.concat(t)},[]);t.cancelCurrentAnimation=u.animatePath(o,i,500,function(e){for(var r=e.length/2,i=0;i<r&&i<n.length;i++){var o=n[i];o.animX=e[2*i],o.animY=e[2*i+1]}t.setState({nodes:n})},function(){return null},l.easing.easeInOutExpo)}},t.nodeForState=function(n,t){return n.filter(function(n){return n.name===t.name})[0]},t.updateStates=function(){var n=t.props.router.stateService.get().map(function(n){return n.$$state()}),e=t.nodes.map(Object.getPrototypeOf),r=n.filter(function(n){return-1===e.indexOf(n)}),i=e.filter(function(t){return-1===n.indexOf(t)}),o=t.nodes=t.nodes.slice();(r.length||i.length)&&(r.map(function(n){return A.createStateVisNode(n)}).forEach(function(n){return o.push(n)}),i.map(function(n){return o.filter(function(t){return n.isPrototypeOf(t)})}).reduce(function(n,t){return n.concat(t)},[]).forEach(function(n){return o.splice(o.indexOf(n),1)}),o.forEach(function(n){return n._children=[]}),o.forEach(function(n){if(n&&n.parent){var e=t.nodeForState(o,n.parent);e&&(e._children.push(n),n._parent=e)}}),o.forEach(function(n){return n.future=!!n.lazyLoad})),t.unmounted||t.deregisterStateListenerFn||setTimeout(t.updateStates,1e3),t.setState({nodes:o},t.doLayoutAnimation)},t.updateNodes=function(n){if(t.nodes.map(function(n){return Object.assign(n,p)}).forEach(function(n){return n.future=!!n.lazyLoad}),n){var e=n.treeChanges(),r=function(n){return t.nodeForState(t.nodes,n.state)};e.retained.concat(e.entering).map(r).filter(function(n){return n}).forEach(function(n){return n.entered=!0}),e.retained.map(r).filter(function(n){return n}).forEach(function(n){return n.retained=!0}),e.exiting.map(r).filter(function(n){return n}).forEach(function(n){return n.exited=!0}),e.to.slice(-1).map(r).filter(function(n){return n}).forEach(function(n){n.active=!0,n.label="active"})}t.setState({nodes:t.nodes},t.doLayoutAnimation)},t}return i(t,n),t.create=function(n,e,r){void 0===r&&(r={}),e||((e=document.createElement("div")).id="uirStateTree");var i=o({},r,{router:n}),s=function(){document.body.appendChild(e),a.render(a.h(t,i),e)};return"interactive"===document.readyState||"complete"===document.readyState?s():document.addEventListener("DOMContentLoaded",s,!1),e},t.prototype.componentDidMount=function(){var n=this,t=this.props.router.stateRegistry,e=this.props.router.transitionService;t.onStatesChanged&&(this.deregisterStateListenerFn=t.onStatesChanged(function(){return n.updateStates()})),this.updateStates(),this.deregisterHookFn=e.onSuccess({},function(t){return n.updateNodes(t)}),this.updateNodes();var r=this.props.router.globals.successfulTransitions.peekTail();r&&this.updateNodes(r);var i=this.props.router.globals.transition;i&&i.promise.then(function(){return n.updateNodes(i)})},t.prototype.componentWillReceiveProps=function(){var n=this.state.nodes;this.setState({nodes:n},this.updateStates)},t.prototype.dimensions=function(){var n={},t=this.props.height||500,e=this.props.width||500;return{radius:15,offsetX:0,offsetY:30,scaleX:n.scaleX||e-0,scaleY:n.scaleY||t-60}},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.deregisterHookFn&&this.deregisterHookFn()},t.prototype.getNodes=function(){return this.nodes.slice().sort(this.props.renderer.sortNodesFn)},t.prototype.render=function(){var n=this,t=this.props.renderer,e=this.getNodes().filter(function(n){return n.visible&&n.animX&&n.animY});return a.h("div",{className:"statevis"},a.h("svg",{width:this.props.width,height:this.props.height},e.filter(function(n){return!!n.parent}).map(function(n){return t.edgeRenderFn(n,t)}),e.map(function(t){return a.h(s.StateNode,{key:t.name,node:t,router:n.props.router,renderer:n.props.renderer,doLayout:n.doLayoutAnimation.bind(n),x:t.animX,y:t.animY})})))},t.defaultProps={height:350,width:250,renderer:c.DEFAULT_RENDERER},t}(a.Component);t.StateTree=d},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1),i=e(52);t.animatePath=function(n,t,e,o,a,s){void 0===a&&(a=function(){}),void 0===s&&(s=r.easing.easeOutElastic);var u=null,l=i.interpolateArray(t,n),c=function(n){if(-1===e)return a();null==u&&(u=n);var t=n-u,r=1;t<e&&(requestAnimationFrame(c),r=s(t,0,1,e)),o(l(r))};return requestAnimationFrame(c),function(){e=-1}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),u=null,l=0,c=[],A=e(28);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,e);e.insertBefore(t,i)}}function f(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return g(t,n.attrs),h(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function y(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var a=l++;e=u||(u=m(t)),r=b.bind(null,e,a,!1),i=b.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=A(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),i=function(){f(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){f(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var a=e[i];(s=o[a.id]).refs--,r.push(s)}n&&p(d(n,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var v,C=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function b(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=C(t,i);else{var o=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(o,a[t]):n.appendChild(o)}}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(11),s=e(34),u=e(3),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.render=function(){var n=this.props,t=n.tuple,e=t.key,r=t.val,i=n.classes,l=n.modalTitle,c=function(){return a.Modal.show(l,e,r,s.ResolveData)};return o.h("div",{className:i.div},o.h("div",{className:i.key},e,":"),o.h("div",{className:i.val},void 0===r?o.h("span",{className:"uirTranVis_code"},"undefined"):null===r?o.h("span",{className:"uirTranVis_code"},"null"):"string"==typeof r?o.h("span",{className:"uirTranVis_code"},'"',u.maxLength(100,r),'"'):"number"==typeof r?o.h("span",{className:"uirTranVis_code"},r.toString()):"boolean"==typeof r?o.h("span",{className:"uirTranVis_code"},r.toString()):Array.isArray(r)?o.h("span",{className:"link",onClick:c},"[Array]"):"object"==typeof r?o.h("span",{className:"link",onClick:c},"[Object]"):"function"==typeof r.toString?o.h("span",null,u.maxLength(100,r.toString())):void 0))},t}(o.Component);t.KeyValueRow=l;var c=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={collapseFalsy:!0},t}return i(t,n),t.prototype.makeBuckets=function(n,t){var e=n.map(function(n){return{label:n.label,is:function(t){return t===n.value},value:n.value,count:0,data:{}}}).concat({label:"default",is:function(){return!0},count:0,data:{}});return Object.keys(t).forEach(function(n){var r=e.find(function(e){return e.is(t[n])});r.data[n]=t[n],r.value=t[n],r.count++}),e},t.prototype.render=function(){var n=this,e=this.props,r=e.data,i=e.classes,a=e.modalTitle,s=this.props.groupedValues||t.falsyGroupDefinitions,u=this.props.enableGroupToggle||!1,c=this.state.collapseFalsy,A=this.makeBuckets(s,r),p=A.find(function(n){return"default"===n.label}),d=A.filter(function(n){return!!n.count&&n!==p}),h=d.reduce(function(n,t){return n+t.count},0),f=Object.keys(p.data).map(function(n){return{key:n,val:p.data[n]}}),m=d.map(function(n){return{key:Object.keys(n.data).sort().join(", "),val:n.value}}),g=u&&h>1;return o.h("div",{className:"uirTranVis_keysAndValues"},f.map(function(n){return o.h(l,{key:n.key,tuple:n,classes:i,modalTitle:a})}),g&&!!m.length&&o.h("a",{href:"javascript:void(0)",onClick:function(){return n.setState({collapseFalsy:!c})},className:"uirTranVis_keyValue"},c?"show":"hide"," ",h," ",d.map(function(n){return n.label}).join(" or ")," ","parameter values"),(!g||!this.state.collapseFalsy)&&m.map(function(n){return o.h(l,{key:n.key,tuple:n,classes:i,modalTitle:a})}))},t.falsyGroupDefinitions=[{value:void 0,label:"undefined"},{value:null,label:"null"},{value:"",label:"empty string"}],t}(o.Component);t.KeysAndValues=c},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.componentDidMount=function(){var n=this._ref;setTimeout(function(){var t=n.getElementsByClassName("uir-fade");[].slice.apply(t).forEach(function(n){return n.className+=" in"})},35)},t.prototype.render=function(){var n=this;return o.h("div",{ref:function(t){return n._ref=t}},o.h("div",{className:"uirTranVis_modal-backdrop uir-fade",style:{zIndex:1040}}),o.h("div",{tabIndex:-1,className:"uirTranVis_modal uir-fade",style:{zIndex:1050,display:"block"}},o.h("div",{className:"uirTranVis_modal-dialog modal-lg"},o.h("div",{className:"uirTranVis_modal-content"},this.props.children))))},t.show=function(n,t,e,r){var i=document.body.querySelector("#uirTranVis_modal");i||((i=document.createElement("div")).id="uirTranVis_modal",document.body.appendChild(i));var a=function(){return null};o.render(o.h(r,{close:function(){return o.render(o.h(a,null),document.body,i)},modalTitle:n,id:t,value:e}),i)},t}(o.Component);t.Modal=a},function(n,t,e){n.exports=e(13)},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0),i=e(4);t.StateSelector=i.StateSelector;var o=e(14);t.StateVisualizer=o.StateVisualizer;var a=e(6);t.StateTree=a.StateTree;var s=e(29);t.TransitionVisualizer=s.TransitionVisualizer;function u(n){r.render(r.h(function(){return null},null),document.body,n)}t.visualizer=function(n){return new c(n,{})};var l={state:!0,transition:!0},c=function(){function n(n,t){this.router=n,this.name="visualizer",(t=Object.assign({},l,t)).state&&(this.stateVisualizerEl=o.StateVisualizer.create(n)),t.transition&&(this.transitionVisualizerEl=s.TransitionVisualizer.create(n))}return n.prototype.dispose=function(n){this.stateVisualizerEl&&u(this.stateVisualizerEl),this.transitionVisualizerEl&&u(this.transitionVisualizerEl),this.stateVisualizerEl=null,this.transitionVisualizerEl=null},n}();t.Visualizer=c},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(15),s=e(6),u=e(18),l=e(25),c=e(2);e(26);var A=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={height:null,width:null,renderer:c.DEFAULT_RENDERER,minimized:!1},t.deregisterFns=[],t.svgWidth=function(){return t.props.width||t.state.width||350},t.svgHeight=function(){return(t.props.height||t.state.height||250)-25},t}return i(t,n),t.create=function(n,e,r){void 0===r&&(r={}),e||((e=document.createElement("div")).id="uirStateVisualizer");var i=Object.assign({},r,{router:n,minimizeAfter:2500}),a=function(){document.body.appendChild(e),o.render(o.h(t,i),e)};return"interactive"===document.readyState||"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",a,!1),e},t.prototype.dispose=function(){o.render(o.h(function(){return null},null),document.body,this.el)},t.prototype.handleRendererChange=function(n){this.setState({renderer:n})},t.prototype.cancelAutoMinimize=function(n){this.minimizeTimeout&&(clearTimeout(this.minimizeTimeout),this.minimizeTimeout=null)},t.prototype.componentWillUnmount=function(){this.deregisterFns.forEach(function(n){return n()})},t.prototype.draggable=function(n){var t=this.windowEl.querySelector(".uirStateVisControls"),e=this.windowEl.querySelector(".statevis");this.deregisterFns.push(a.draggable(t,a.dragActions.move(this.windowEl))),this.deregisterFns.push(a.draggable(e,a.dragActions.move(this.windowEl)))},t.prototype.componentDidMount=function(){var n=this;if(this.draggable(!0),this.props.minimizeAfter){this.minimizeTimeout=setTimeout(function(){return n.setState({minimized:!0})},this.props.minimizeAfter)}},t.prototype.render=function(){var n=this,t=this.state.minimized;return o.h("div",{ref:function(t){return n.el=t},onMouseDown:this.cancelAutoMinimize.bind(this),onMouseEnter:this.cancelAutoMinimize.bind(this)},o.h(l.StateVisWindow,{minimized:this.state.minimized,ref:function(t){return n.windowEl=t&&t.el||n.windowEl},onResize:function(t){var e=t.width,r=t.height;return n.setState({width:e,height:r})}},o.h("div",{onClick:function(){return n.setState({minimized:!1})},className:"uirStateVisWindowOverlay "+(t?"minimized":"")}),o.h(u.Controls,{router:this.props.router,onRendererChange:this.handleRendererChange.bind(this),onMinimize:function(){return n.setState({minimized:!0})},onClose:function(){return n.dispose()}}),o.h(s.StateTree,{router:this.props.router,width:this.svgWidth(),height:this.svgHeight(),renderer:this.state.renderer})))},t}(o.Component);t.StateVisualizer=A},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(5);t.dragActions={move:function(n){return function(t,e,r){r.initialClientX,r.initialClientY;var i=r.lastClientX,o=r.lastClientY,a=r.newClientX,s=r.newClientY,u=n,l=u.getBoundingClientRect(),c=l.left,A=l.top,p=a-i,d=s-o;u.style.right="auto",u.style.bottom="auto",u.style.left=c+p+"px",u.style.top=A+d+"px"}}},t.draggable=function(n,t){var e=!1,i=0,o=0,a=0,s=0,u=function(r){e=!0,a=i=r.clientX,s=o=r.clientY;var u=function(r){if(e){r.preventDefault();var u=r.clientX,l=r.clientY;t(n,r,{initialClientX:i,initialClientY:o,lastClientX:a,lastClientY:s,newClientX:u,newClientY:l}),a=u,s=l}},l=function(n){e=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",l)};return r.addClass("draggable")(n),n.addEventListener("mousedown",u),function(){return n.removeEventListener("mousedown",u)}}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.goTimeout=null,t.handleCollapseClicked=function(n){clearTimeout(t.goTimeout),t.props.node._collapsed=!t.props.node._collapsed,t.props.doLayout()},t.handleGoClicked=function(n){clearTimeout(t.goTimeout);var e=t.props.node.name;e=e.replace(/\.\*\*$/,""),t.goTimeout=setTimeout(function(){return t.props.router.stateService.go(e)},200)},t}return i(t,n),t.prototype.render=function(){var n=this.props.renderer,t=this.props,e=t.node,r=t.x,i=t.y,a=n.baseRadius,s=n.baseFontSize,u=n.baseNodeStrokeWidth,l=n.zoom,c=a*l,A=s*l,p=u*(e.entered?1.5:1)*l,d=["entered","retained","exited","active","inactive","future","highlight","collapsed"].reduce(function(n,t){return n+(e[t]?" "+t+" ":"")},""),h=e.collapsed?e.totalDescendents:0;return o.h("g",{transform:"translate("+r+", "+i+")",onClick:this.handleGoClicked,onDblClick:this.handleCollapseClicked},o.h("circle",{className:d,"stroke-width":p,r:c}),e.collapsed?o.h("text",{className:"label","text-anchor":"middle","font-size":A*(h<10?1:.8)},"(",h,")"):"",n.labelRenderFn(r,i,e,n),o.h("text",{className:"label","text-anchor":"middle","font-size":A,transform:"translate(0, "+2*c+")"},e.label))},t}(o.Component);t.StateNode=a},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStateVisNode=function(n){var t=Object.create(n);return Object.defineProperty(t,"visible",{get:function(){return!!this.entered||!(this._parent&&(this._parent.collapsed||!this._parent.visible))}}),Object.defineProperty(t,"children",{get:function(){return this._children.filter(function(n){return n.visible})}}),Object.defineProperty(t,"totalDescendents",{get:function(){return this._children.reduce(function(n,t){return n+t.totalDescendents},this._children.length)}}),Object.defineProperty(t,"collapsed",{get:function(){return!this.entered&&this._collapsed&&this._children.length}}),t}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(4),s=e(19),u=e(20),l=e(21),c=e(22),A=e(23),p=(e(24),function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={showRendererPrefs:!1},t}return i(t,n),t.prototype.render=function(){return o.h("div",{style:{width:"100%"}},o.h("div",{className:"uirStateVisControls"},o.h(a.StateSelector,{router:this.props.router}),o.h("div",{style:{marginLeft:"auto",cursor:"pointer"},className:"uirStateVisIcons"},o.h("span",{className:"uirStateVisHover"},o.h(A.Help,{size:"16px"}),o.h("div",{className:"hoverBlock"},o.h("ul",null,o.h("li",null,"Click a node to activate that state."),o.h("li",null,"Select a state from the dropdown to activate that state."),o.h("li",null,"Double click a node to auto-collapse that section of the tree when inactive. Collapsed nodes are displayed with a dotted outline and the count of collapsed children."),o.h("li",null,"Lazy loaded states (including future states) are displayed with a dashed outline.")))),o.h("span",{className:"uirStateVisHover"},o.h(c.Gear,{size:"16px"}),o.h("div",{className:"hoverBlock"},o.h(s.LayoutPrefs,{onRendererChange:this.props.onRendererChange}))),o.h("span",{className:"uirStateVisHover",onClick:this.props.onMinimize},o.h(u.ChevronDown,{size:"16px"}),o.h("div",null,o.h("span",{style:{float:"right"}},"Minimize")),o.h("div",null,"Minimize")),o.h("span",{className:"uirStateVisHover",onClick:this.props.onClose},o.h(l.Close,{size:"16px"}),o.h("div",null,o.h("span",{style:{float:"right"}},"Close"))))))},t}(o.Component));t.Controls=p},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),o=this&&this.__assign||function(){return(o=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=e(0),s=e(2),u=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={renderer:s.DEFAULT_RENDERER,presetName:"Tree"},t}return i(t,n),t.prototype.componentDidMount=function(){this.props.onRendererChange(this.state.renderer)},t.prototype.handleZoom=function(n){var t=n.target,e=parseFloat(t.value),r=o({},this.state.renderer,{zoom:e});this.setState({renderer:r}),this.props.onRendererChange(r)},t.prototype.handleLayout=function(n){var t=n.target.value,e=s.RENDERER_PRESETS[t],r=o({},this.state.renderer,e);this.setState({renderer:r,presetName:t}),this.props.onRendererChange(r)},t.prototype.render=function(){return a.h("div",{className:"uirStateVisLayoutPrefs",style:{display:"flex",flexFlow:"column nowrap"},onMouseDown:function(n){return n.stopPropagation()}},a.h("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"row nowrap",alignItems:"center"}},a.h("div",null,"Layout:"),a.h("select",{style:{marginLeft:"auto",maxWidth:"100px"},onChange:this.handleLayout.bind(this),value:this.state.presetName},Object.keys(s.RENDERER_PRESETS).map(function(n){return a.h("option",{value:n},n)}))),a.h("div",{style:{flex:"1 1 auto",display:"flex",flexFlow:"row nowrap",alignItems:"center"}},a.h("span",null,"Node size:"),a.h("input",{style:{marginLeft:"auto"},value:""+this.state.renderer.zoom,type:"range",min:"0.3",max:"3.0",step:"0.1",onInput:this.handleZoom.bind(this)}),a.h("span",null,this.state.renderer.zoom,"x")))},t}(a.Component);t.LayoutPrefs=u},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0);t.ChevronDown=function(n){var t=n.size;return r.h("svg",{width:t,height:t,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.h("path",{d:"M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"}))}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0);t.Close=function(n){var t=n.size;return r.h("svg",{width:t,height:t,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.h("path",{d:"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"}))}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0);t.Gear=function(n){var t=n.size;return r.h("svg",{width:t,height:t,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.h("path",{d:"M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z"}))}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(0);t.Help=function(n){var t=n.size;return r.h("svg",{width:t,height:t,viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},r.h("path",{d:"M1008 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zm256-496q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zm-368-448q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"}))}},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAeklEQVQ4je2PwQmAMBAEpwuJLfkSJQ+txBKsT0RsxQj6uUAMXkTx4cOF+2R39i7w61X1wACYRMZIpo+NDthkJqXEiOdzXWiWgEuUxLAT5qAaWILQDORABozB+wq02h/tySXxZqvB2iXh5uYK1kpuwV6VlDyCvQqZD2sHTn0xdO0A9D4AAAAASUVORK5CYII="},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(5),s=function(n){function t(t){var e=n.call(this,t)||this;return e.deregisterFns=[],e.minimize=function(){var n=e.el,t=n.getBoundingClientRect();e.top=t.top+"px",e.left=t.left+"px",e.right=window.innerWidth-t.right+"px",e.bottom=window.innerHeight-t.bottom+"px",n.style.top="auto",n.style.left="auto",n.style.right=e.right,n.style.bottom=e.bottom;var r=function(){n.style.top="auto",n.style.left="auto",n.style.right=e.right,n.style.bottom=e.bottom,a.toggleClass("minimized")(n),n.removeEventListener("click",r);var t=function(e){var r=n.getBoundingClientRect();n.style.top=r.top+"px",n.style.left=r.left+"px",n.style.right="auto",n.style.bottom="auto",n.removeEventListener("transitionend",t)};n.addEventListener("transitionend",t)};return a.addClass("minimized")(n),setTimeout(function(){return n.style.right=n.style.bottom="0"},50),r},e.state={unminimize:null},e}return i(t,n),t.prototype.componentWillReceiveProps=function(n){if(this.props.minimized!==n.minimized){var t=this.state.unminimize;t?this.setState({unminimize:null},function(){return t()}):this.setState({unminimize:this.minimize()})}},t.prototype.componentWillUnmount=function(){this.deregisterFns.forEach(function(n){return n()})},t.prototype.componentDidMount=function(){"function"==typeof MutationObserver&&this.monitorResizeEvents()},t.prototype.monitorResizeEvents=function(){var n=this,t=this.el.style.width,e=this.el.style.height,r=new MutationObserver(function(r){r.forEach(function(r){if("style"==r.attributeName){var i=r.target,o=i.style.width,a=i.style.height;if(o!==t||a!==e){t=o,e=a;var s=parseInt(o.replace(/px$/,"")),u=parseInt(a.replace(/px$/,""));n.props.onResize({width:s,height:u})}}})});r.observe(this.el,{attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["style"]}),this.deregisterFns.push(function(){return r.disconnect()})},t.prototype.render=function(){var n=this;return o.h("div",{className:"uirStateVisContainer",ref:function(t){return n.el=t}},this.props.children)},t}(o.Component);t.StateVisWindow=s},function(n,t,e){var r=e(27);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!1,attrs:{nonce:"uiroutervisualizer"},transform:void 0,insertInto:void 0};e(9)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(8)(!0)).push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n#uirStateVisualizer {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: normal;\n    vertical-align: baseline;\n    line-height: 1;\n    display: block;\n    box-sizing: content-box;\n}\n#uirStateVisualizer svg {\n    box-sizing: content-box;\n}\n\n.uirStateVisContainer {\n    z-index: 3;\n    position: fixed;\n    right: 32px;\n    bottom: 64px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    transform: scale(1);\n    transform-origin: right bottom;\n    transition: right 0.5s ease, bottom 0.5s ease, transform 0.5s ease;\n    overflow: hidden;\n    resize: both;\n}\n\n.uirStateVisContainer.minimized {\n    cursor: pointer;\n    transform: scale(0.25);\n    z-index: 60;\n}\n\n.uirStateVisContainer:hover {\n    outline: 2px solid rgba(0,0,0,0.35)\n}\n\n.uirStateVisContainer:hover .uirStateVisControls {\n    visibility: visible;\n}\n\n.uirStateVisContainer .uirStateVisControls {\n    visibility: hidden;\n    display: flex;\n    width: 100%;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    flex: 1 0 auto;\n    z-index: 1;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span svg {\n    padding: 3px;\n    fill: #777777;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span:hover svg {\n    fill: black;\n}\n\n.uirStateVisHover > div {\n    transition: opacity 500ms ease;\n    opacity: 0;\n    height: 0;\n    padding: 0;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n\n    margin-top: 26px;\n    font-size: 14px;\n}\n\n.uirStateVisHover > div.hoverBlock {\n    left: 0;\n    border-bottom: none;\n    background: white;\n}\n\n.uirStateVisHover:hover > div.hoverBlock {\n    border-bottom: 2px solid lightgrey;\n}\n\n\n.uirStateVisHover:hover > div {\n    opacity: 1;\n    height: auto;\n}\n\n.uirStateVisHover .uirStateVisLayoutPrefs {\n    padding: 12px 24px;\n}\n\n.uirStateVisContainer .statevis {\n    flex: 1 1 auto;\n    transition: all 1s ease;\n}\n\n.uirStateVisWindowOverlay {\n    display: none;\n}\n\n.minimized .uirStateVisWindowOverlay {\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0; \n    top: 0;\n    bottom: 0;\n    z-index: 10;\n}\n  \n.statevis circle {\n    /*r: 10;*/\n    fill: #fff;\n    stroke: grey;\n    /*stroke-width: 3px;*/\n\n    transition-property: r, fill, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n\n    cursor: pointer;\n}\n\n.statevis text {\n    transition-property: x, y, font-size, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n}\n\n.statevis circle.future {\n    /*r: 10;*/\n    stroke: grey;\n    stroke-dasharray: 7,5;\n    /*stroke-width: 1px;*/\n}\n\n.statevis circle.entered {\n    /*r: 10;*/\n    stroke: black;\n    fill: lightgreen;\n}\n\n.statevis circle.entered:after {\n    content: "<text>Entered</text>"\n}\n\n.statevis circle.active {\n    /*r: 15;*/\n    fill: green;\n    stroke: black;\n}\n\n.statevis circle.collapsed {\n    stroke-dasharray: 2, 2\n}\n\n.statevis text {\n    font-family: sans-serif;\n}\n\n.statevis .link {\n    fill: none;\n    stroke: #ccc;\n    /*stroke-width: 2px;*/\n}\n\n.statevis text.label {\n    fill: grey;\n    alignment-baseline: middle;\n}\n\n\n.draggable {\n    cursor: move;\n}\n\n/*.draggable:hover {*/\n    /*outline: 3px solid rgba(0,0,0,0.15)*/\n/*}*/\n',"",{version:3,sources:["/Users/cthielen/projects/uirouter/visualizer/src/statevis/statevis.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,cAAc;IACd,cAAc;IACd,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,0CAA0C;IAC1C,mBAAmB;IACnB,8BAA8B;IAC9B,kEAAkE;IAClE,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI;AACJ;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,qBAAqB;IACrB,8BAA8B;IAC9B,cAAc;IACd,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,UAAU;IACV,SAAS;IACT,UAAU;;IAEV,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,gBAAgB;;IAEhB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;AACtC;;;AAGA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,WAAW;AACf;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,qBAAqB;;IAErB,kDAAkD;IAClD,0BAA0B;IAC1B,uCAAuC;;IAEvC,eAAe;AACnB;;AAEA;IACI,0DAA0D;IAC1D,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI;AACJ;;AAEA;IACI,SAAS;IACT,WAAW;IACX,aAAa;AACjB;;AAEA;IACI;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,0BAA0B;AAC9B;;;AAGA;IACI,YAAY;AAChB;;AAEA,qBAAqB;IACjB,sCAAsC;AAC1C,IAAI",file:"statevis.css",sourcesContent:['/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n#uirStateVisualizer {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: normal;\n    vertical-align: baseline;\n    line-height: 1;\n    display: block;\n    box-sizing: content-box;\n}\n#uirStateVisualizer svg {\n    box-sizing: content-box;\n}\n\n.uirStateVisContainer {\n    z-index: 3;\n    position: fixed;\n    right: 32px;\n    bottom: 64px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    transform: scale(1);\n    transform-origin: right bottom;\n    transition: right 0.5s ease, bottom 0.5s ease, transform 0.5s ease;\n    overflow: hidden;\n    resize: both;\n}\n\n.uirStateVisContainer.minimized {\n    cursor: pointer;\n    transform: scale(0.25);\n    z-index: 60;\n}\n\n.uirStateVisContainer:hover {\n    outline: 2px solid rgba(0,0,0,0.35)\n}\n\n.uirStateVisContainer:hover .uirStateVisControls {\n    visibility: visible;\n}\n\n.uirStateVisContainer .uirStateVisControls {\n    visibility: hidden;\n    display: flex;\n    width: 100%;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    flex: 1 0 auto;\n    z-index: 1;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span svg {\n    padding: 3px;\n    fill: #777777;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span:hover svg {\n    fill: black;\n}\n\n.uirStateVisHover > div {\n    transition: opacity 500ms ease;\n    opacity: 0;\n    height: 0;\n    padding: 0;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n\n    margin-top: 26px;\n    font-size: 14px;\n}\n\n.uirStateVisHover > div.hoverBlock {\n    left: 0;\n    border-bottom: none;\n    background: white;\n}\n\n.uirStateVisHover:hover > div.hoverBlock {\n    border-bottom: 2px solid lightgrey;\n}\n\n\n.uirStateVisHover:hover > div {\n    opacity: 1;\n    height: auto;\n}\n\n.uirStateVisHover .uirStateVisLayoutPrefs {\n    padding: 12px 24px;\n}\n\n.uirStateVisContainer .statevis {\n    flex: 1 1 auto;\n    transition: all 1s ease;\n}\n\n.uirStateVisWindowOverlay {\n    display: none;\n}\n\n.minimized .uirStateVisWindowOverlay {\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0; \n    top: 0;\n    bottom: 0;\n    z-index: 10;\n}\n  \n.statevis circle {\n    /*r: 10;*/\n    fill: #fff;\n    stroke: grey;\n    /*stroke-width: 3px;*/\n\n    transition-property: r, fill, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n\n    cursor: pointer;\n}\n\n.statevis text {\n    transition-property: x, y, font-size, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n}\n\n.statevis circle.future {\n    /*r: 10;*/\n    stroke: grey;\n    stroke-dasharray: 7,5;\n    /*stroke-width: 1px;*/\n}\n\n.statevis circle.entered {\n    /*r: 10;*/\n    stroke: black;\n    fill: lightgreen;\n}\n\n.statevis circle.entered:after {\n    content: "<text>Entered</text>"\n}\n\n.statevis circle.active {\n    /*r: 15;*/\n    fill: green;\n    stroke: black;\n}\n\n.statevis circle.collapsed {\n    stroke-dasharray: 2, 2\n}\n\n.statevis text {\n    font-family: sans-serif;\n}\n\n.statevis .link {\n    fill: none;\n    stroke: #ccc;\n    /*stroke-width: 2px;*/\n}\n\n.statevis text.label {\n    fill: grey;\n    alignment-baseline: middle;\n}\n\n\n.draggable {\n    cursor: move;\n}\n\n/*.draggable:hover {*/\n    /*outline: 3px solid rgba(0,0,0,0.15)*/\n/*}*/\n'],sourceRoot:""}])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(30),s=e(1),u=e(7);e(41);var l=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.deregisterFns=[],t.state={transitions:[],pointerEvents:"auto"},t.cancelPreviousAnim=null,t.onMouseMove=function(n){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0)-n.clientY<65?"auto":"none";t.state.pointerEvents!=e&&t.setState({pointerEvents:e})},t}return i(t,n),t.create=function(n,e,r){void 0===r&&(r={}),e||((e=document.createElement("div")).id="uirTransitionVisualizer");var i=Object.assign({},r,{router:n}),a=function(){document.body.appendChild(e),o.render(o.h(t,i),e)};return"interactive"===document.readyState||"complete"===document.readyState?a():document.addEventListener("DOMContentLoaded",a,!1),e},t.prototype.componentDidMount=function(){var n=this,t=this.props.router.transitionService.onBefore({},function(t){n.setState({transitions:n.state.transitions.concat(t)});var e=n._div.children[0];setTimeout(function(){var t=e.scrollWidth-e.clientWidth+200;n.cancelPreviousAnim&&n.cancelPreviousAnim();var r=[t],i=[e.scrollLeft],o=n.props.maximumTransitions;n.cancelPreviousAnim=u.animatePath(r,i,750,function(n){return e.scrollLeft=n[0]},function(){var t=n.state.transitions;t.length<=o||n.setState({transitions:t.slice(t.length-o)})},s.easing.easeInOutCubic)},25)});this.deregisterFns.push(t),document.body.addEventListener("mousemove",this.onMouseMove),this.deregisterFns.push(function(){return document.body.removeEventListener("mousemove",n.onMouseMove)})},t.prototype.componentWillUnmount=function(){for(;this.deregisterFns.length;)this.deregisterFns.pop()()},t.prototype.render=function(){var n=this,t=this.state.pointerEvents;return o.h("div",{ref:function(t){return n._div=t}},o.h("div",{className:"uirTranVis_history",style:{pointerEvents:t}},this.state.transitions.map(function(n){return o.h("div",{key:n.$id,className:"uirTranVis_transition"},o.h(a.TransitionView,{transition:n}),o.h("div",{style:{minWidth:"18em",border:"1px solid transparent"}}))}),o.h("div",{style:{width:"200px",height:"1px"}})))},t.defaultProps={router:null,maximumTransitions:15},t}(o.Component);t.TransitionVisualizer=l},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(31),s=e(39),u=e(3),l=e(40),c=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.transitionPromise=null,t.state={status:"running",message:null,rejection:null,pinned:!1,expanded:!1,open:!1,deregisterFunctions:[]},t.togglePin=function(){return t.setState({pinned:!t.state.pinned})},t.toggleExpand=function(){return t.setState({expanded:!t.state.expanded})},t.open=function(){return t.setState({open:!0})},t.close=function(){return t.setState({open:!1})},t}return i(t,n),t.prototype.componentDidMount=function(){var n=this,t=this.props.transition,e=function(t){n.transitionPromise.isCanceled||n.setState({message:t})},r=function(n){return n.name||"(root)"},i=[];i.push(t.onStart({},function(){return e("Starting...")},{priority:1e4})),i.push(t.onExit({},function(n,t){return e("Exiting "+r(t))},{priority:1e4})),i.push(t.onRetain({},function(n,t){return e("Retained "+r(t))},{priority:1e4})),i.push(t.onEnter({},function(n,t){return e("Entering "+r(t))},{priority:1e4})),i.push(t.onFinish({},function(){return e("Finishing...")})),this.setState({deregisterFunctions:i});this.transitionPromise=l.makeCancelable(t.promise),this.transitionPromise.promise.then(function(){return n.setState({status:"success",message:null})},function(t){if(!t||!t.isCanceled){var e="error",r=null;if(t){r=t&&t.message;var i=t&&t.type;if(2==i&&!0===t.redirected){e="redirected";var o=t.detail,a=o.name(),s=JSON.stringify(o.params());r=u.maxLength(100,a+"("+s)+")"}5==i&&(e="ignored",r="All states and parameters in the To and From paths are identical.")}n.setState({status:e,rejection:r,message:null})}})},t.prototype.componentWillUnmount=function(){this.transitionPromise.cancel(),this.state.deregisterFunctions&&this.state.deregisterFunctions.forEach(function(n){return n()})},t.prototype.render=function(){return o.h("div",{onMouseEnter:this.open,onMouseLeave:this.close},o.h(a.TransitionPopover,{transition:this.props.transition,status:this.state.status,rejection:this.state.rejection,pinned:this.state.pinned,expanded:this.state.expanded,open:this.state.open,togglePinned:this.togglePin,toggleExpand:this.toggleExpand}),o.h(s.BreadcrumbArrow,{transition:this.props.transition,status:this.state.status,message:this.state.message,toggleExpand:this.toggleExpand}))},t}(o.Component);t.TransitionView=c},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(32),s=e(33),u=e(36),l=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.render=function(){var n=this;if(!this.props.open&&!this.props.pinned)return null;return o.h("div",{className:"uirTranVis_transitionDetail uirTranVis_panel panel-default "+(n.props.pinned?"pin ":"")+(n.props.expanded?"expand ":"")+(n.props.open?"showDetail ":"")},o.h(a.PopoverHeading,{transition:this.props.transition,pinned:this.props.pinned,expanded:this.props.expanded,togglePinned:this.props.togglePinned,toggleExpand:this.props.toggleExpand}),o.h("div",{className:"uirTranVis_panelBody"},o.h(s.TransSummary,{trans:this.props.transition,status:this.props.status,rejection:this.props.rejection}),o.h("hr",null),o.h(u.NodePaths,{transition:this.props.transition})),o.h("div",{className:"uirTranVis_downArrow"}))},t}(o.Component);t.TransitionPopover=l},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.render=function(){var n=this;return o.h("div",{className:"uirTranVis_panelHeading uirTranVis_heading"},o.h("div",{style:{cursor:"pointer"},onClick:this.props.togglePinned},o.h("i",{className:"uir-icon uir-icon-thumb-tack "+(n.props.pinned?"":"uir-rotate-35")})),o.h("h3",{className:"uirTranVis_panelTitle"},"Transition #",this.props.transition.$id),o.h("div",{style:{cursor:"pointer"},onClick:this.props.toggleExpand},o.h("i",{className:"uir-icon uirTranVis_tooltipRight "+(n.props.expanded?"uir-icon-toggle-on":"uir-icon-toggle-off")})))},t}(o.Component);t.PopoverHeading=a},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(10),s=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.render=function(){return o.h("div",{className:"uirTranVis_transSummary"},o.h("div",{className:"uirTranVis_summaryData"},o.h("span",null,"From:"),o.h("strong",null,this.props.trans.from().name||"(root)")),o.h("div",{className:"uirTranVis_summaryData"},o.h("span",null,"To:"),o.h("strong",null,this.props.trans.to().name||"(root)")),o.h("div",{className:"uirTranVis_summaryData"},o.h("span",null,"Result:"),o.h("div",null,o.h("strong",null,this.props.status),this.props.rejection?o.h("span",null,": ",this.props.rejection):null)),o.h("div",{className:"uirTranVis_summaryHeading"},"Parameter Values:"),o.h("div",null,o.h(a.KeysAndValues,{groupedValues:a.KeysAndValues.falsyGroupDefinitions,enableGroupToggle:!0,data:this.props.trans.params(),modalTitle:"Parameter value",classes:{div:"uirTranVis_keyValue",key:"",val:""}})))},t}(o.Component);t.TransSummary=s},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(11),s=e(35),u=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.close=function(){return t.props.close()},t}return i(t,n),t.prototype.render=function(){return o.h("div",null,o.h(a.Modal,null,o.h("div",{className:"uirTranVis_modal-header uir-resolve-header"},o.h("div",{style:{fontSize:"20px"}},this.props.modalTitle,": ",this.props.id),o.h("button",{className:"uirTranVis_btn uirTranVis_btnXs uirTranVis_btnPrimary",onClick:this.close},o.h("i",{className:"uir-icon uir-iconw-close"}))),o.h("div",{className:"uirTranVis_modalBody"},o.h(s.Pretty,{data:this.props.value})),o.h("div",{className:"uirTranVis_modalFooter"},o.h("button",{className:"uirTranVis_btn uirTranVis_btnPrimary",onClick:this.close},"Close"))))},t}(o.Component);t.ResolveData=u},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.preStyle={display:"block",padding:"10px 30px",margin:"0"},t.state={show:!0},t}return i(t,n),t.prototype.toggle=function(){this.setState({show:!this.state.show})},t.prototype.render=function(){return o.h("div",null,!!this.state.show&&o.h("pre",{style:this.preStyle},JSON.stringify(this.props.data,null,2)))},t}(o.Component);t.Pretty=a},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(37),s=e(38),u=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.state={retained:[],enterExit:[]},t}return i(t,n),t.prototype.componentDidMount=function(){var n=this.props.transition,t=Object.assign({},n.treeChanges());["entering","exiting","retained"].forEach(function(n){return t[n]=t[n].filter(function(n){return!!n.state.name})});for(var e=function(n,e){var r=t[n][e];return r?r.state.name:""},r=function(t,r,i){return n.$id+"."+e(t,i)+"-"+e(r,i)},i=t.retained.map(function(n,t){return{key:r("retained","retained",t),to:n,toType:"retain",from:n,fromType:"retain"}}),o=[],a=Math.max(t.exiting.length,t.entering.length),s=0;s<a;s++)o.push({key:r("exiting","entering",s),to:t.entering[s],toType:t.entering[s]&&"enter",from:t.exiting[s],fromType:t.exiting[s]&&"exit"});this.setState({retained:i,enterExit:o})},t.prototype.render=function(){var n=this,t=this.state.retained||[],e=this.state.enterExit||[],r=e.filter(function(n){return!!n.toType}).length-1;return o.h("table",{className:"uirTranVis_paths"},o.h("thead",null,o.h("tr",null,o.h("th",null,"From Path"),o.h("th",null,"To Path"))),o.h("tbody",null,t.map(function(t){return o.h("tr",{key:t.key},o.h("td",{className:t.fromType,colSpan:2},o.h(a.NodeDetail,{trans:n.props.transition,node:t.from,type:t.fromType})))}),e.map(function(t,e){return o.h("tr",{key:t.key},o.h("td",{colSpan:2},o.h("div",{className:"uirTranVis_Row"},o.h("div",{className:""+t.fromType},t.fromType?o.h("div",{className:"uirTranVis_nodeContent"},o.h(a.NodeDetail,{trans:n.props.transition,node:t.from,type:t.fromType}),o.h(s.FlowArrow,{bottom:"V",top:e?"V":t.toType?"RU":"AU"})):null),o.h("div",{className:""+t.toType},t.toType?o.h("div",{className:"uirTranVis_nodeContent"},o.h(s.FlowArrow,{top:e?"V":t.fromType?"RD":"V",bottom:e==r?"AD":"V"}),o.h(a.NodeDetail,{trans:n.props.transition,node:t.to,type:t.toType})):null))))})))},t}(o.Component);t.NodePaths=u},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=e(3),s=e(10),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.prototype.stateName=function(){var n=this.props.node,t=n&&n.state&&n.state.name;return""===t&&(t="(root)"),t&&t.split(".").reverse()[0]},t.prototype.params=function(){var n=this.props.node;return n&&n.paramSchema.reduce(function(t,e){return t[e.id]=n.paramValues[e.id],t},{})},t.prototype.resolves=function(){var n=this.props.node,t=["$stateParams","$transition$","$state$",this.props.trans.constructor];return n&&n.resolvables.filter(function(n){return-1===t.indexOf(n.token)}).reduce(function(n,t){var e;return n[(e=t.token,"string"==typeof e?e:a.maxLength(30,a.stringify(e)))]=t.data,n},{})},t.prototype.render=function(){if(!this.props.node)return null;var n=this.params(),t=this.resolves();return this.props.node?o.h("div",{className:"uirTranVis_nodeDetail"},o.h("div",{className:"uirTranVis_heading"},o.h("div",{className:"uirTranVis_nowrap uirTranVis_deemphasize"},"(",this.props.type," state)"),o.h("div",{className:"uirTranVis_stateName"},this.stateName())),!!Object.keys(n).length&&o.h("div",{className:"params"},o.h("div",{className:"uirTranVis_paramsLabel uirTranVis_deemphasize"},"Parameter values"),o.h(s.KeysAndValues,{data:this.params(),classes:{div:"uirTranVis_keyValue"},modalTitle:"Parameter value"})),!!Object.keys(t).length&&o.h("div",{className:"params resolve"},o.h("div",{className:"uirTranVis_resolveLabel uirTranVis_deemphasize"},"Resolved data"),o.h(s.KeysAndValues,{data:this.resolves(),classes:{div:"uirTranVis_keyValue"},modalTitle:"Resolved value"}))):null},t}(o.Component);t.NodeDetail=u},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.height=1e3,t.renderCurve=function(){return o.h("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 "+t.height+" V 70 Q50 20, 100 20 Q150 20, 150 70 V "+t.height})},t.renderVerticalLine=function(){return o.h("svg",{viewBox:"0 70 100 "+(t.height-70),className:"flowArrowSvg"},t.renderCurve())},t.renderCurveRU=function(){return o.h("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg top"},t.renderCurve())},t.renderCurveRD=function(){return o.h("svg",{viewBox:"100 0 100 "+t.height,className:"flowArrowSvg top"},t.renderCurve())},t.renderArrowU=function(){return o.h("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg top"},o.h("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 "+t.height+" V 20 "}),o.h("polygon",{fill:"white",stroke:"white","stroke-width":"20",points:"50,20 35,40 65,40"}))},t.renderArrowD=function(){return o.h("svg",{viewBox:"0 0 100 "+t.height,className:"flowArrowSvg bottom"},o.h("path",{stroke:"white","stroke-width":"20",fill:"none",d:"M50 0 V "+(t.height-20)}),o.h("polygon",{fill:"white",stroke:"white","stroke-width":"20",points:"50,"+(t.height-20)+" 35,"+(t.height-40)+" 65,"+(t.height-40)}))},t}return i(t,n),t.prototype.render=function(){var n=this,t=function(t){switch(t){case"V":return n.renderVerticalLine();case"RU":return n.renderCurveRU();case"RD":return n.renderCurveRD();case"AU":return n.renderArrowU();case"AD":return n.renderArrowD();default:return null}};return o.h("div",{className:"flowArrowCell"},o.h("div",{style:{overflow:"hidden",position:"relative",flex:"1"}},t(this.props.top)),o.h("div",{style:{overflow:"hidden",position:"relative",flex:"1"}},t(this.props.bottom)))},t}(o.Component);t.FlowArrow=a},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),a=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.handleClick=function(){return t.props.toggleExpand()},t}return i(t,n),t.prototype.iconClass=function(){return{running:"uir-icon uir-spin uir-iconw-spinner",success:"uir-icon uir-iconw-check",redirected:"uir-icon uir-iconw-share",ignored:"uir-icon uir-iconw-circle-o",error:"uir-icon uir-iconw-close"}[this.props.status]},t.prototype.render=function(){return this.props.transition?o.h("div",{className:this.props.status+" uirTranVis_historyEntry",onClick:this.handleClick},o.h("div",{className:"uirTranVis_historyEntrySummary"},o.h("div",{className:"uirTranVis_transId"},this.props.transition.$id),o.h("div",{className:"uirTranVis_status"},this.props.status,this.props.message?o.h("span",null,": ",this.props.message):null),o.h("div",{className:"uirTranVis_transName"},o.h("i",{className:this.iconClass()}),o.h("span",null,this.props.transition.to().name)))):null},t}(o.Component);t.BreadcrumbArrow=a},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makeCancelable=function(n){var t=!1,e={promise:new Promise(function(e,r){n.then(function(n){return t?r({isCanceled:!0}):e(n)},function(n){return r(t?{isCanceled:!0}:n)})}),isCanceled:!1,cancel:function(){e.isCanceled=t=!0}};return e}},function(n,t,e){var r=e(42);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!1,attrs:{nonce:"uiroutervisualizer"},transform:void 0,insertInto:void 0};e(9)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){t=n.exports=e(8)(!0);var r=e(43),i=r(e(44)),o=r(e(45)),a=r(e(46)),s=r(e(47)),u=r(e(48)),l=r(e(49)),c=r(e(50)),A=r(e(51));t.push([n.i,"/*\n    .uirTranVis_history is the breadcrumbs and transition details block.\n    It fills the footer of the screen, and scrolls horizontally.\n    Mouse clicks should pass through to the elements underneath.\n*/\n\n.uirTranVis_history {\n    display: flex;\n    align-items: flex-end;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 16px;\n    overflow-x: scroll;\n    z-index: 50;\n    /* disable mouse clicks, hover, etc, for the overall div */\n    pointer-events: none;\n}\n\n.uirTranVis_history > * {\n    /* Enable mouse for any sub-elements (the breadcrumb elemetns and detail elements) */\n    pointer-events: all;\n    flex: 0 0 auto;\n}\n\n/*  workaround for modal screen, and chrome and safari not allowing it to be\n    visible outside the .uirTranVis_history overflow while the .uirTranVis_history div is scrolled */\n.fullScreen .uirTranVis_history {\n    top: 0;\n}\n\n/* A single history entry (breadcrumb) arrow looking thing */\n.uirTranVis_history .uirTranVis_historyEntry {\n    position: relative;\n    text-align: center;\n    padding: 12px 30px;\n    margin-bottom: 6px;\n    margin-right: 6px;\n    color: #000;\n    cursor: pointer;\n}\n\n\n/* History entry arrow CSS */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    content: '';\n    position: absolute;\n    background: darkgrey;\n    left: 0;\n    height: 50.2%; /* +0.2% so firefox doesn't render a white line down the center */\n    width: 100%;\n    border: 1px solid black;\n    box-sizing: border-box;\n    z-index: -1;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:before {\n    top: 0;\n    border-bottom: 0;\n    -webkit-transform: skew(40deg, 0deg);\n    -ms-transform: skew(40deg, 0deg);\n    transform: skew(40deg, 0deg);\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:after {\n    bottom: 0;\n    border-top: 0;\n    -webkit-transform: skew(-40deg, 0deg);\n    -ms-transform: skew(-40deg, 0deg);\n    transform: skew(-40deg, 0deg);\n}\n\n/*.uirTranVis_historyEntry::before height: 51% (|| ::after) */\n\n/* Styling for breadcrumb contents */\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary {\n    color: white;\n    white-space: nowrap;\n    font-size: small;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transId {\n    position: absolute;\n    top: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_status {\n    position: absolute;\n    bottom: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName {\n    font-weight: bold;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_transSummary {\n    margin: 8px 0;\n}\n.uirTranVis_transSummary .uirTranVis_summaryHeading {\n    background-color: #f5f5f5;\n    margin: 8px -16px;\n    padding: 4px 16px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: baseline;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData span {\n    min-width: 60px;\n    text-align: right;\n    padding-right: 6px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_history .uirTranVis_code {\n    padding: 0px 2px;\n    color: black;\n    background: #e6e6e6;\n    margin: 0;\n    font-family: monospace;\n}\n\n/* breadcrumb/history entry color coding */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    background: #737373;\n}\n.uirTranVis_history .uirTranVis_historyEntry:hover:before,.uirTranVis_historyEntry:hover:after {\n    background: #a6a6a6;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.success:before,.uirTranVis_historyEntry.success:after {\n    background: #45803b;\n}\n.uirTranVis_history .uirTranVis_historyEntry.success:hover:before,.uirTranVis_historyEntry.success:hover:after {\n    background: #19a600;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.error:before,.uirTranVis_historyEntry.error:after {\n    background: #bf1f1d;\n}\n.uirTranVis_history .uirTranVis_historyEntry.error:hover:before,.uirTranVis_historyEntry.error:hover:after {\n    background: #e62622;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.ignored:before,.uirTranVis_historyEntry.ignored:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.ignored:hover:before,.uirTranVis_historyEntry.ignored:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.redirected:before,.uirTranVis_historyEntry.redirected:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.redirected:hover:before,.uirTranVis_historyEntry.redirected:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_keyValue {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_history .uirTranVis_keyValue + .uirTranVis_keyValue {\n    margin-top: 3px;\n}\n\n\n\n\n/* The transition detail popover (when hovering over a breadcrumb) */\n.uirTranVis_transitionDetail {\n    border: 1px solid lightgrey;\n    font-size: small;\n    transition: box-shadow 0.5s ease,  border 1.0s ease\n}\n\n/* Pointer element points from the uirTranVis_transitionDetail to the breadcrumb */\n.uirTranVis_transitionDetail .uirTranVis_downArrow {\n    position: relative;\n    width: 100%;\n    bottom: -10px;\n    margin-bottom: 10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before, .uirTranVis_transitionDetail .uirTranVis_downArrow:after {\n    content: \"\";\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before {\n    border-top: 10px solid lightgray;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:after{\n    border-top: 10px solid white;\n    margin-top: -1px;\n    z-index: 1;\n}\n\n\n/* The layout and styling of the transition detail popover */\n/*.uirTranVis_transitionDetail .panel-heading {*/\n    /*text-align: center;*/\n/*}*/\n\n.uirTranVis_transitionDetail table {\n    border-collapse: collapse;\n}\n\n.uirTranVis_transitionDetail th {\n    text-align: center;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > *  {\n    flex: 0 1 auto;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > * i {\n    transition: all 0.5s ease;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths {\n    width: 100%;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths td {\n    color: white;\n    border: 0;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_transSummary .uirTranVis_keyValue > div:nth-child(2){\n    padding-left: 8px;\n    font-weight: normal;\n}\n\n\n.uirTranVis_transitionDetail td {\n    padding: 0;\n}\n\n.uirTranVis_transitionDetail td .flowArrowCell {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n    justify-content: space-between;\n    width: 12px;\n    transition: width 0.25s ease;\n    height: auto;\n    flex: 0 0 auto;\n}\n.uirTranVis_transitionDetail.expand td .flowArrowCell { width: 24px; }\n\n.uirTranVis_transitionDetail .exit  .flowArrowSvg          { right: 0; }\n.uirTranVis_transitionDetail .enter .flowArrowSvg          { left: 0; }\n.uirTranVis_transitionDetail        .flowArrowSvg.bottom   { bottom: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg.top      { top: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg {\n    position: absolute;\n    width: 100%;\n    height: auto;\n    transition: width 0.25s ease;\n}\n\n/* color code path elements by retained/exited/entered */\n.uirTranVis_transitionDetail .retain {\n    background-color: #737273;\n}\n\n.uirTranVis_transitionDetail .exit {\n    background-color: #7c1010;\n}\n\n.uirTranVis_transitionDetail .enter {\n    background-color: #31592a;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_deemphasize {\n    color: #eaeaea;\n    font-size: x-small;\n}\n\n/* Styling for parameter values and resolve values */\n.uirTranVis_transitionDetail .params {\n    background-color: rgba(255,255,255,0.15);\n    padding: 0;\n    opacity: 0;\n    overflow: hidden;\n    transition: opacity 1s ease;\n    max-height: 0;\n}\n\n.uirTranVis_transitionDetail.expand .params {\n    display: block;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px black;\n    padding: 8px;\n    max-height: 250px;\n    overflow-y: auto;\n    opacity: 1;\n    margin: 8px 0;\n}\n\n.uirTranVis_transitionDetail.pin {\n    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);\n    border: 1px solid black;\n}\n\n.uirTranVis_transitionDetail.pin .uirTranVis_downArrow:before {\n    border-top-color: black;\n}\n\n\n/* When showing expanded details, put space between path elements */\n.uirTranVis_transitionDetail.expand table.uirTranVis_paths td {\n    max-height: 100px;\n    vertical-align: top;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: stretch;\n    min-width: 400px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row > div {\n    flex: 1 0 50%;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeContent {\n    display: flex;\n    flex-flow: row nowrap;\n    min-height: 16px;\n    transition: min-height 0.25s ease;\n}\n\n.uirTranVis_transitionDetail.expand .uirTranVis_nodeContent {\n    height: 100%;\n    min-height: 65px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeDetail {\n    flex: 1 1 auto;\n    padding: 3px 7px;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_stateName {\n    font-weight: bolder;\n    margin-right: 16px;\n    margin-left: 0;\n}\n.uirTranVis_transitionDetail .enter .uirTranVis_stateName {\n    margin-right: 0;\n    margin-left: 16px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nowrap {\n    white-space: nowrap;\n}\n\n.uirTranVis_history .uirTranVis_paramsLabel,\n.uirTranVis_history .uirTranVis_resolveLabel {\n    color: white;\n    margin-top: -8px;\n    text-align: center;\n    font-weight: bold;\n}\n\n\nspan.link {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n\n.uirTranVis_tooltipRight {\n    display: inline;\n    position: relative;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:after {\n    color: rgba(0,0,0,0);\n    text-decoration: none;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:hover:after {\n    bottom: 0;\n    color: rgba(0,0,0,0.5);\n    content: attr(title);\n    display: block;\n    position: absolute;\n    white-space: nowrap;\n    font-size: smaller;\n}\n\n\n\n/* Bootstrap stuff */\n\n.uirTranVis_modal .uirTranVis_btnPrimary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n\n.uirTranVis_modal .uirTranVis_btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n\n.uirTranVis_modal .uirTranVis_btnXs, .uirTranVis_btnGroupXs > .uirTranVis_btn {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n\n.uirTranVis_transition {\n    max-width: 550px;\n}\n\n.uirTranVis_transitionDetail span.link {\n    color: white;\n}\n\n.uirTranVis_history *:not(.fa):not(pre):not(.uirTranVis_code) {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.uirTranVis_transitionDetail .enter .uirTranVis_heading {\n    flex-flow: row nowrap;\n}\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .retain .uirTranVis_heading {\n    justify-content: center;\n}\n\n.uirTranVis_panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.uirTranVis_panelHeading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n\n    padding: 10px 16px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n\n.uirTranVis_panelTitle {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n.uirTranVis_panelBody {\n    padding: 0 16px;\n}\n\n\n\n\n\n/* Styles go here */\n.uir-fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n.uir-fade.in {\n    opacity: 1;\n}\n\n.uirTranVis_modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n\n.uirTranVis_modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n\n.uirTranVis_modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: block;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n\n.uirTranVis_modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n\n.uirTranVis_modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n\n.uirTranVis_modal-header {\n    padding: 16px;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.uir-resolve-header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    background-color: cornflowerblue;\n}\n\n.uirTranVis_modalBody {\n    color: black;\n    position: relative;\n    padding: 16px;\n}\n\n.uirTranVis_modalFooter {\n    padding: 16px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n\n.uir-icon {\n    display: inline-block;\n    height: 16px; width: 16px;\n    margin: 4px;\n    background-size: cover;\n    background-position: 0 0;\n}\n\n.uir-spin {\n    animation: uirspin 2s infinite;\n    transform: rotate(0deg);\n}\n\n.uir-rotate-35 {\n    transform: rotate(35deg);\n    opacity: 0.5;\n}\n\n@keyframes uirspin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n\n.uir-iconw-spinner       { background-image: url("+i+"); }\n.uir-iconw-check         { background-image: url("+o+"); }\n.uir-iconw-circle-o      { background-image: url("+a+"); }\n.uir-iconw-share         { background-image: url("+s+"); }\n.uir-iconw-close         { background-image: url("+u+"); }\n\n.uir-icon-thumb-tack     { background-image: url("+l+"); }\n.uir-icon-toggle-on      { background-image: url("+c+"); }\n.uir-icon-toggle-off     { background-image: url("+A+"); }\n","",{version:3,sources:["/Users/cthielen/projects/uirouter/visualizer/src/transition/transitionVisualizer.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;IACI,aAAa;IACb,qBAAqB;IACrB,eAAe;IACf,OAAO;IACP,SAAS;IACT,QAAQ;IACR,eAAe;IACf,kBAAkB;IAClB,WAAW;IACX,0DAA0D;IAC1D,oBAAoB;AACxB;;AAEA;IACI,oFAAoF;IACpF,mBAAmB;IACnB,cAAc;AAClB;;AAEA;oGACoG;AACpG;IACI,MAAM;AACV;;AAEA,4DAA4D;AAC5D;IACI,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,eAAe;AACnB;;;AAGA,4BAA4B;AAC5B;IACI,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,OAAO;IACP,aAAa,EAAE,iEAAiE;IAChF,WAAW;IACX,uBAAuB;IACvB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,MAAM;IACN,gBAAgB;IAChB,oCAAoC;IACpC,gCAAgC;IAChC,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,aAAa;IACb,qCAAqC;IACrC,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA,6DAA6D;;AAE7D,oCAAoC;AACpC;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB;AACJ;AACA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,sBAAsB;AAC1B;;AAEA,0CAA0C;AAC1C;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;;AAGA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;;AAGA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;;;;AAKA,oEAAoE;AACpE;IACI,2BAA2B;IAC3B,gBAAgB;IAChB;AACJ;;AAEA,kFAAkF;AAClF;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,mCAAmC;IACnC,oCAAoC;IACpC,SAAS;IACT,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,UAAU;AACd;;;AAGA,4DAA4D;AAC5D,gDAAgD;IAC5C,sBAAsB;AAC1B,IAAI;;AAEJ;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;;AAGA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,oBAAoB;IACpB,8BAA8B;IAC9B,WAAW;IACX,4BAA4B;IAC5B,YAAY;IACZ,cAAc;AAClB;AACA,wDAAwD,WAAW,EAAE;;AAErE,6DAA6D,QAAQ,EAAE;AACvE,6DAA6D,OAAO,EAAE;AACtE,6DAA6D,UAAU;AACvE,6DAA6D,OAAO;AACpE;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,4BAA4B;AAChC;;AAEA,wDAAwD;AACxD;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA,oDAAoD;AACpD;IACI,wCAAwC;IACxC,UAAU;IACV,UAAU;IACV,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,wCAAwC;IACxC,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;;AAGA,mEAAmE;AACnE;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,0BAA0B;AAC9B;;;AAGA;IACI,eAAe;IACf,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,sBAAsB;IACtB,oBAAoB;IACpB,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;;;AAIA,oBAAoB;;AAEpB;IACI,WAAW;IACX,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,8BAA8B;IAC9B,0BAA0B;IAC1B,eAAe;IACf,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;IACtB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,gDAAgD;IAChD,wCAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,kBAAkB;;IAElB,kBAAkB;IAClB,oCAAoC;IACpC,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;;;;;AAMA,mBAAmB;AACnB;IACI,UAAU;IACV,uCAAuC;IACvC,kCAAkC;IAClC,+BAA+B;AACnC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;IACf,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;IACb,cAAc;IACd,gBAAgB;IAChB,iCAAiC;IACjC,UAAU;AACd;;;AAGA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,oCAAoC;IACpC,4BAA4B;IAC5B,sBAAsB;IACtB,mCAAmC;IACnC,kBAAkB;IAClB,UAAU;IACV,+CAA+C;IAC/C,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,YAAY,EAAE,WAAW;IACzB,WAAW;IACX,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;AACtC;;;AAGA,2BAA2B,+CAAsD,EAAE;AACnF,2BAA2B,+CAAoD,EAAE;AACjF,2BAA2B,+CAAuD,EAAE;AACpF,2BAA2B,+CAAoD,EAAE;AACjF,2BAA2B,+CAAoD,EAAE;;AAEjF,2BAA2B,+CAAuD,EAAE;AACpF,2BAA2B,+CAAsD,EAAE;AACnF,2BAA2B,+CAAuD,EAAE",file:"transitionVisualizer.css",sourcesContent:['/*\n    .uirTranVis_history is the breadcrumbs and transition details block.\n    It fills the footer of the screen, and scrolls horizontally.\n    Mouse clicks should pass through to the elements underneath.\n*/\n\n.uirTranVis_history {\n    display: flex;\n    align-items: flex-end;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 16px;\n    overflow-x: scroll;\n    z-index: 50;\n    /* disable mouse clicks, hover, etc, for the overall div */\n    pointer-events: none;\n}\n\n.uirTranVis_history > * {\n    /* Enable mouse for any sub-elements (the breadcrumb elemetns and detail elements) */\n    pointer-events: all;\n    flex: 0 0 auto;\n}\n\n/*  workaround for modal screen, and chrome and safari not allowing it to be\n    visible outside the .uirTranVis_history overflow while the .uirTranVis_history div is scrolled */\n.fullScreen .uirTranVis_history {\n    top: 0;\n}\n\n/* A single history entry (breadcrumb) arrow looking thing */\n.uirTranVis_history .uirTranVis_historyEntry {\n    position: relative;\n    text-align: center;\n    padding: 12px 30px;\n    margin-bottom: 6px;\n    margin-right: 6px;\n    color: #000;\n    cursor: pointer;\n}\n\n\n/* History entry arrow CSS */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    content: \'\';\n    position: absolute;\n    background: darkgrey;\n    left: 0;\n    height: 50.2%; /* +0.2% so firefox doesn\'t render a white line down the center */\n    width: 100%;\n    border: 1px solid black;\n    box-sizing: border-box;\n    z-index: -1;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:before {\n    top: 0;\n    border-bottom: 0;\n    -webkit-transform: skew(40deg, 0deg);\n    -ms-transform: skew(40deg, 0deg);\n    transform: skew(40deg, 0deg);\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:after {\n    bottom: 0;\n    border-top: 0;\n    -webkit-transform: skew(-40deg, 0deg);\n    -ms-transform: skew(-40deg, 0deg);\n    transform: skew(-40deg, 0deg);\n}\n\n/*.uirTranVis_historyEntry::before height: 51% (|| ::after) */\n\n/* Styling for breadcrumb contents */\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary {\n    color: white;\n    white-space: nowrap;\n    font-size: small;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transId {\n    position: absolute;\n    top: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_status {\n    position: absolute;\n    bottom: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName {\n    font-weight: bold;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_transSummary {\n    margin: 8px 0;\n}\n.uirTranVis_transSummary .uirTranVis_summaryHeading {\n    background-color: #f5f5f5;\n    margin: 8px -16px;\n    padding: 4px 16px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: baseline;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData span {\n    min-width: 60px;\n    text-align: right;\n    padding-right: 6px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_history .uirTranVis_code {\n    padding: 0px 2px;\n    color: black;\n    background: #e6e6e6;\n    margin: 0;\n    font-family: monospace;\n}\n\n/* breadcrumb/history entry color coding */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    background: #737373;\n}\n.uirTranVis_history .uirTranVis_historyEntry:hover:before,.uirTranVis_historyEntry:hover:after {\n    background: #a6a6a6;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.success:before,.uirTranVis_historyEntry.success:after {\n    background: #45803b;\n}\n.uirTranVis_history .uirTranVis_historyEntry.success:hover:before,.uirTranVis_historyEntry.success:hover:after {\n    background: #19a600;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.error:before,.uirTranVis_historyEntry.error:after {\n    background: #bf1f1d;\n}\n.uirTranVis_history .uirTranVis_historyEntry.error:hover:before,.uirTranVis_historyEntry.error:hover:after {\n    background: #e62622;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.ignored:before,.uirTranVis_historyEntry.ignored:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.ignored:hover:before,.uirTranVis_historyEntry.ignored:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.redirected:before,.uirTranVis_historyEntry.redirected:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.redirected:hover:before,.uirTranVis_historyEntry.redirected:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_keyValue {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_history .uirTranVis_keyValue + .uirTranVis_keyValue {\n    margin-top: 3px;\n}\n\n\n\n\n/* The transition detail popover (when hovering over a breadcrumb) */\n.uirTranVis_transitionDetail {\n    border: 1px solid lightgrey;\n    font-size: small;\n    transition: box-shadow 0.5s ease,  border 1.0s ease\n}\n\n/* Pointer element points from the uirTranVis_transitionDetail to the breadcrumb */\n.uirTranVis_transitionDetail .uirTranVis_downArrow {\n    position: relative;\n    width: 100%;\n    bottom: -10px;\n    margin-bottom: 10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before, .uirTranVis_transitionDetail .uirTranVis_downArrow:after {\n    content: "";\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before {\n    border-top: 10px solid lightgray;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:after{\n    border-top: 10px solid white;\n    margin-top: -1px;\n    z-index: 1;\n}\n\n\n/* The layout and styling of the transition detail popover */\n/*.uirTranVis_transitionDetail .panel-heading {*/\n    /*text-align: center;*/\n/*}*/\n\n.uirTranVis_transitionDetail table {\n    border-collapse: collapse;\n}\n\n.uirTranVis_transitionDetail th {\n    text-align: center;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > *  {\n    flex: 0 1 auto;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > * i {\n    transition: all 0.5s ease;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths {\n    width: 100%;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths td {\n    color: white;\n    border: 0;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_transSummary .uirTranVis_keyValue > div:nth-child(2){\n    padding-left: 8px;\n    font-weight: normal;\n}\n\n\n.uirTranVis_transitionDetail td {\n    padding: 0;\n}\n\n.uirTranVis_transitionDetail td .flowArrowCell {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n    justify-content: space-between;\n    width: 12px;\n    transition: width 0.25s ease;\n    height: auto;\n    flex: 0 0 auto;\n}\n.uirTranVis_transitionDetail.expand td .flowArrowCell { width: 24px; }\n\n.uirTranVis_transitionDetail .exit  .flowArrowSvg          { right: 0; }\n.uirTranVis_transitionDetail .enter .flowArrowSvg          { left: 0; }\n.uirTranVis_transitionDetail        .flowArrowSvg.bottom   { bottom: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg.top      { top: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg {\n    position: absolute;\n    width: 100%;\n    height: auto;\n    transition: width 0.25s ease;\n}\n\n/* color code path elements by retained/exited/entered */\n.uirTranVis_transitionDetail .retain {\n    background-color: #737273;\n}\n\n.uirTranVis_transitionDetail .exit {\n    background-color: #7c1010;\n}\n\n.uirTranVis_transitionDetail .enter {\n    background-color: #31592a;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_deemphasize {\n    color: #eaeaea;\n    font-size: x-small;\n}\n\n/* Styling for parameter values and resolve values */\n.uirTranVis_transitionDetail .params {\n    background-color: rgba(255,255,255,0.15);\n    padding: 0;\n    opacity: 0;\n    overflow: hidden;\n    transition: opacity 1s ease;\n    max-height: 0;\n}\n\n.uirTranVis_transitionDetail.expand .params {\n    display: block;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px black;\n    padding: 8px;\n    max-height: 250px;\n    overflow-y: auto;\n    opacity: 1;\n    margin: 8px 0;\n}\n\n.uirTranVis_transitionDetail.pin {\n    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);\n    border: 1px solid black;\n}\n\n.uirTranVis_transitionDetail.pin .uirTranVis_downArrow:before {\n    border-top-color: black;\n}\n\n\n/* When showing expanded details, put space between path elements */\n.uirTranVis_transitionDetail.expand table.uirTranVis_paths td {\n    max-height: 100px;\n    vertical-align: top;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: stretch;\n    min-width: 400px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row > div {\n    flex: 1 0 50%;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeContent {\n    display: flex;\n    flex-flow: row nowrap;\n    min-height: 16px;\n    transition: min-height 0.25s ease;\n}\n\n.uirTranVis_transitionDetail.expand .uirTranVis_nodeContent {\n    height: 100%;\n    min-height: 65px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeDetail {\n    flex: 1 1 auto;\n    padding: 3px 7px;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_stateName {\n    font-weight: bolder;\n    margin-right: 16px;\n    margin-left: 0;\n}\n.uirTranVis_transitionDetail .enter .uirTranVis_stateName {\n    margin-right: 0;\n    margin-left: 16px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nowrap {\n    white-space: nowrap;\n}\n\n.uirTranVis_history .uirTranVis_paramsLabel,\n.uirTranVis_history .uirTranVis_resolveLabel {\n    color: white;\n    margin-top: -8px;\n    text-align: center;\n    font-weight: bold;\n}\n\n\nspan.link {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n\n.uirTranVis_tooltipRight {\n    display: inline;\n    position: relative;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:after {\n    color: rgba(0,0,0,0);\n    text-decoration: none;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:hover:after {\n    bottom: 0;\n    color: rgba(0,0,0,0.5);\n    content: attr(title);\n    display: block;\n    position: absolute;\n    white-space: nowrap;\n    font-size: smaller;\n}\n\n\n\n/* Bootstrap stuff */\n\n.uirTranVis_modal .uirTranVis_btnPrimary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n\n.uirTranVis_modal .uirTranVis_btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n\n.uirTranVis_modal .uirTranVis_btnXs, .uirTranVis_btnGroupXs > .uirTranVis_btn {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n\n.uirTranVis_transition {\n    max-width: 550px;\n}\n\n.uirTranVis_transitionDetail span.link {\n    color: white;\n}\n\n.uirTranVis_history *:not(.fa):not(pre):not(.uirTranVis_code) {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.uirTranVis_transitionDetail .enter .uirTranVis_heading {\n    flex-flow: row nowrap;\n}\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .retain .uirTranVis_heading {\n    justify-content: center;\n}\n\n.uirTranVis_panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.uirTranVis_panelHeading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n\n    padding: 10px 16px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n\n.uirTranVis_panelTitle {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n.uirTranVis_panelBody {\n    padding: 0 16px;\n}\n\n\n\n\n\n/* Styles go here */\n.uir-fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n.uir-fade.in {\n    opacity: 1;\n}\n\n.uirTranVis_modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n\n.uirTranVis_modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n\n.uirTranVis_modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: block;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n\n.uirTranVis_modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n\n.uirTranVis_modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n\n.uirTranVis_modal-header {\n    padding: 16px;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.uir-resolve-header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    background-color: cornflowerblue;\n}\n\n.uirTranVis_modalBody {\n    color: black;\n    position: relative;\n    padding: 16px;\n}\n\n.uirTranVis_modalFooter {\n    padding: 16px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n\n.uir-icon {\n    display: inline-block;\n    height: 16px; width: 16px;\n    margin: 4px;\n    background-size: cover;\n    background-position: 0 0;\n}\n\n.uir-spin {\n    animation: uirspin 2s infinite;\n    transform: rotate(0deg);\n}\n\n.uir-rotate-35 {\n    transform: rotate(35deg);\n    opacity: 0.5;\n}\n\n@keyframes uirspin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n\n.uir-iconw-spinner       { background-image: url("../../images/w/16/spinner.png"); }\n.uir-iconw-check         { background-image: url("../../images/w/16/check.png"); }\n.uir-iconw-circle-o      { background-image: url("../../images/w/16/circle-o.png"); }\n.uir-iconw-share         { background-image: url("../../images/w/16/share.png"); }\n.uir-iconw-close         { background-image: url("../../images/w/16/close.png"); }\n\n.uir-icon-thumb-tack     { background-image: url("../../images/16/thumb-tack.png"); }\n.uir-icon-toggle-on      { background-image: url("../../images/16/toggle-on.png"); }\n.uir-icon-toggle-off     { background-image: url("../../images/16/toggle-off.png"); }\n'],sourceRoot:""}])},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABCElEQVQ4ja2SMU4CYRCF34Db6RISmi04gCZacgDuYElDYcFZLLWx1c4b6BE0sbaysBEh0aCdm3w2szKQ/1cTmGSz+795897Mzm/KBGCSjv14bWbkuDmBCcuY5HitUNAGxsDQoSrwKuAAeATegVHKcexuX0AFdIELf7rAVejoranbCRpPkmpJU0kfZvYp6SQYvARu/F7pogJ2M7k94BS4BPbXkwYUSdW0WOFb+gFugVeg94/iHjADbqTlFlh7/6mzwt14hK0E0AHugbNfOOfAHVA2WLwHpaRDhdman2pmc4cGko4kdSQtUg79Rt3nnPl2CsdKoB9rYgcys+dwrCU9eEe15xdJ503iGzoj4fOiDj0FAAAAAElFTkSuQmCC"},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAc0lEQVQ4jeXQuwmAQBCE4SvEOwOtwjK0KEEQDOzORyD28Rt4wnLoPYwEJ935Jlil/hUgB0agfItXzuyAScFG4Cu1WyqAAdARuHOxBjZ7nIFM4MWLbbFxShNQRWEx0uJPH/Osp5Ew9ozE45uRdCxGdLj1hRzpQwNP2Cwv6wAAAABJRU5ErkJggg=="},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAzElEQVQ4jaWTPQ7CMAyFnzkL7IUNRtoDlPugSkxciwlWFrr0CHCGfgw4qGrTFBVLUST7+fnnJdKfZjEnYJLWkpbuaiTdzYxJRuAA1AytBsqp5BPQesIFOPu5uK8FqlTlFngCeSSeAy/HlP2gddreJzrMHfPwPX0Dm9B2csYPNoyTSdLC/WHb1ykCSTe/V12C2RYIGr93P+RsezmDJQ4U6OCK6BI9GGR8jchYjMrYAVU/PKRjckCg9Bb79ohVjn4mJ8rkUklqzOyerDzX3pD9HgkYdWTVAAAAAElFTkSuQmCC"},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVQ4jb2SvQ4BQRSFz/WXSESF0G6j8g7iAXQa4QE0ai+ip9ZIRDTeQUGjUJJ4BUs+hdlkbVixEqeZyZ05352ZM9K/BCyAzi+AA3AFuuF65s3mvKSqpLKkoivnJaUlTQHfzGZRUw4YAGvgQrz8p+sAFWDzwfQK0gwAyy/NAEfAE+AlNNeD7r3IscZAC6gB2UgKz2aXQsnNb5LaZraKSfMkqWVm+/AD9h15HmMUMAp3Di80HGAYB3inlJltJe0knRMB3DjR45clE1AAvMSAX3QHLbpPOaoNWa0AAAAASUVORK5CYII="},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAlElEQVQ4jd3QMQqDQBhEYU8kpBZio41pTBov5B31IEFEhC+NkkU2a7pABrYZeI+dP8v+L7ggj/Q5LmdwgxkT6qCvt25GkxKM3pk2cIf3jClBi+UgCeEF7dmM2/bVYxbck3Ag6SOC/lv4imdEMKE6g6vI5uNNPkswHODH9kLJkBJ0WHc46HfJiu5sRoki0hcok/BP8gJcS0AygPBo+gAAAABJRU5ErkJggg=="},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAArElEQVQ4jbXSPQ5BQRiF4cdfZQWXpdgBW1LZjaugsgoqDdFfKpVEQ2huMcb9E3GSU8yXM2/OZD5+VKtglmCMTjR/YI1THTTFs8TzJq0myHDBLbic5c0aKc29CQBpUbDdlFimvwJ6ub9SHyvcff7AHcs8U6pZwcXYs6onjBq0fMvEm5hgEJwXOGAazDLBNnYjwMn7qu5wxLasTgyItce5KlAHOOBak6lUgmFV4AV5rTJf7ROKuAAAAABJRU5ErkJggg=="},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApUlEQVQ4jcXSPQrCQBQE4E9B8Rg2gmW0UvEyegQP41XsDWirheDPIbQRtBAtTEACu4opMrDFsjPvvZl9VI1a4d5BF60A/4Y9TsWHPtZ4Bs4DG6Q4Y4VeLh7hGhEv0P5o1sQsKzSQjRMSL9EI2JngKCJ+YhwQ885vFytwRz1SAObfCD+htIVYiKlwiFMcYKjkN0LivRyxRdpmE10ybpL7+MTfq1wdXiIXWWLHZLTUAAAAAElFTkSuQmCC"},function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4UlEQVQ4jcXSsUoDURAF0JPFDWmsrOxshBQKwcqI+Re3ttLCT/AP9FsEI2gW0wqSJUEb/YKk0ybEYp+wbHbXwiIXXvFm7p2Zd+exabRK93100anhf2OG93KBI9wE8QTbOESEZ3wFXgcHmOIcL3CCOS7QLnTbwx0eEBfibVwGzbEwTlIzcowRripyCd4gs+5FEaf4rIi3kEV4xKqhwBi72CnFV3iKGoTFTo346wkDfNQUziK5q2c14hjXuK3IJdiCvuY1Dn+JAWtrhJ7crAVSvGIpNyrFfThp4IyD5v9fefP4AeEQL7aw+eK/AAAAAElFTkSuQmCC"},function(n,t,e){"use strict";e.r(t);var r=function(n,t,e){n.prototype=t.prototype=e,e.constructor=n};function i(n,t){var e=Object.create(n.prototype);for(var r in t)e[r]=t[r];return e}function o(){}var a="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",u="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3})$/,c=/^#([0-9a-f]{6})$/,A=new RegExp("^rgb\\("+[a,a,a]+"\\)$"),p=new RegExp("^rgb\\("+[u,u,u]+"\\)$"),d=new RegExp("^rgba\\("+[a,a,a,s]+"\\)$"),h=new RegExp("^rgba\\("+[u,u,u,s]+"\\)$"),f=new RegExp("^hsl\\("+[s,u,u]+"\\)$"),m=new RegExp("^hsla\\("+[s,u,u,s]+"\\)$"),g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function y(n){var t;return n=(n+"").trim().toLowerCase(),(t=l.exec(n))?new _((t=parseInt(t[1],16))>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):(t=c.exec(n))?v(parseInt(t[1],16)):(t=A.exec(n))?new _(t[1],t[2],t[3],1):(t=p.exec(n))?new _(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=d.exec(n))?C(t[1],t[2],t[3],t[4]):(t=h.exec(n))?C(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=f.exec(n))?w(t[1],t[2]/100,t[3]/100,1):(t=m.exec(n))?w(t[1],t[2]/100,t[3]/100,t[4]):g.hasOwnProperty(n)?v(g[n]):"transparent"===n?new _(NaN,NaN,NaN,0):null}function v(n){return new _(n>>16&255,n>>8&255,255&n,1)}function C(n,t,e,r){return r<=0&&(n=t=e=NaN),new _(n,t,e,r)}function b(n){return n instanceof o||(n=y(n)),n?new _((n=n.rgb()).r,n.g,n.b,n.opacity):new _}function B(n,t,e,r){return 1===arguments.length?b(n):new _(n,t,e,null==r?1:r)}function _(n,t,e,r){this.r=+n,this.g=+t,this.b=+e,this.opacity=+r}function w(n,t,e,r){return r<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new I(n,t,e,r)}function x(n,t,e,r){return 1===arguments.length?function(n){if(n instanceof I)return new I(n.h,n.s,n.l,n.opacity);if(n instanceof o||(n=y(n)),!n)return new I;if(n instanceof I)return n;var t=(n=n.rgb()).r/255,e=n.g/255,r=n.b/255,i=Math.min(t,e,r),a=Math.max(t,e,r),s=NaN,u=a-i,l=(a+i)/2;return u?(s=t===a?(e-r)/u+6*(e<r):e===a?(r-t)/u+2:(t-e)/u+4,u/=l<.5?a+i:2-a-i,s*=60):u=l>0&&l<1?0:s,new I(s,u,l,n.opacity)}(n):new I(n,t,e,null==r?1:r)}function I(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}function T(n,t,e){return 255*(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)}r(o,y,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),r(_,B,i(o,{brighter:function(n){return n=null==n?1/.7:Math.pow(1/.7,n),new _(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=null==n?.7:Math.pow(.7,n),new _(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===n?")":", "+n+")")}})),r(I,x,i(o,{brighter:function(n){return n=null==n?1/.7:Math.pow(1/.7,n),new I(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?.7:Math.pow(.7,n),new I(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+360*(this.h<0),t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*t,i=2*e-r;return new _(T(n>=240?n-240:n+120,i,r),T(n,i,r),T(n<120?n+240:n-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var V=Math.PI/180,k=180/Math.PI,E=.95047,S=1,D=1.08883,O=4/29,M=6/29,N=3*M*M,z=M*M*M;function j(n){if(n instanceof R)return new R(n.l,n.a,n.b,n.opacity);if(n instanceof W){var t=n.h*V;return new R(n.l,Math.cos(t)*n.c,Math.sin(t)*n.c,n.opacity)}n instanceof _||(n=b(n));var e=L(n.r),r=L(n.g),i=L(n.b),o=U((.4124564*e+.3575761*r+.1804375*i)/E),a=U((.2126729*e+.7151522*r+.072175*i)/S);return new R(116*a-16,500*(o-a),200*(a-U((.0193339*e+.119192*r+.9503041*i)/D)),n.opacity)}function P(n,t,e,r){return 1===arguments.length?j(n):new R(n,t,e,null==r?1:r)}function R(n,t,e,r){this.l=+n,this.a=+t,this.b=+e,this.opacity=+r}function U(n){return n>z?Math.pow(n,1/3):n/N+O}function q(n){return n>M?n*n*n:N*(n-O)}function F(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function L(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Y(n,t,e,r){return 1===arguments.length?function(n){if(n instanceof W)return new W(n.h,n.c,n.l,n.opacity);n instanceof R||(n=j(n));var t=Math.atan2(n.b,n.a)*k;return new W(t<0?t+360:t,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}(n):new W(n,t,e,null==r?1:r)}function W(n,t,e,r){this.h=+n,this.c=+t,this.l=+e,this.opacity=+r}r(R,P,i(o,{brighter:function(n){return new R(this.l+18*(null==n?1:n),this.a,this.b,this.opacity)},darker:function(n){return new R(this.l-18*(null==n?1:n),this.a,this.b,this.opacity)},rgb:function(){var n=(this.l+16)/116,t=isNaN(this.a)?n:n+this.a/500,e=isNaN(this.b)?n:n-this.b/200;return n=S*q(n),new _(F(3.2404542*(t=E*q(t))-1.5371385*n-.4985314*(e=D*q(e))),F(-.969266*t+1.8760108*n+.041556*e),F(.0556434*t-.2040259*n+1.0572252*e),this.opacity)}})),r(W,Y,i(o,{brighter:function(n){return new W(this.h,this.c,this.l+18*(null==n?1:n),this.opacity)},darker:function(n){return new W(this.h,this.c,this.l-18*(null==n?1:n),this.opacity)},rgb:function(){return j(this).rgb()}}));var Q=-.14861,X=1.78277,H=-.29227,G=-.90649,J=1.97294,K=J*G,Z=J*X,$=X*H-G*Q;function nn(n,t,e,r){return 1===arguments.length?function(n){if(n instanceof tn)return new tn(n.h,n.s,n.l,n.opacity);n instanceof _||(n=b(n));var t=n.r/255,e=n.g/255,r=n.b/255,i=($*r+K*t-Z*e)/($+K-Z),o=r-i,a=(J*(e-i)-H*o)/G,s=Math.sqrt(a*a+o*o)/(J*i*(1-i)),u=s?Math.atan2(a,o)*k-120:NaN;return new tn(u<0?u+360:u,s,i,n.opacity)}(n):new tn(n,t,e,null==r?1:r)}function tn(n,t,e,r){this.h=+n,this.s=+t,this.l=+e,this.opacity=+r}function en(n,t,e,r,i){var o=n*n,a=o*n;return((1-3*n+3*o-a)*t+(4-6*o+3*a)*e+(1+3*n+3*o-3*a)*r+a*i)/6}r(tn,nn,i(o,{brighter:function(n){return n=null==n?1/.7:Math.pow(1/.7,n),new tn(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?.7:Math.pow(.7,n),new tn(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*V,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),r=Math.cos(n),i=Math.sin(n);return new _(255*(t+e*(Q*r+X*i)),255*(t+e*(H*r+G*i)),255*(t+e*(J*r)),this.opacity)}}));var rn=function(n){var t=n.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),i=n[r],o=n[r+1],a=r>0?n[r-1]:2*i-o,s=r<t-1?n[r+2]:2*o-i;return en((e-r/t)*t,a,i,o,s)}},on=function(n){var t=n.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*t),i=n[(r+t-1)%t],o=n[r%t],a=n[(r+1)%t],s=n[(r+2)%t];return en((e-r/t)*t,i,o,a,s)}},an=function(n){return function(){return n}};function sn(n,t){return function(e){return n+e*t}}function un(n,t){var e=t-n;return e?sn(n,e>180||e<-180?e-360*Math.round(e/360):e):an(isNaN(n)?t:n)}function ln(n){return 1==(n=+n)?cn:function(t,e){return e-t?function(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(r){return Math.pow(n+r*t,e)}}(t,e,n):an(isNaN(t)?e:t)}}function cn(n,t){var e=t-n;return e?sn(n,e):an(isNaN(n)?t:n)}var An=function n(t){var e=ln(t);function r(n,t){var r=e((n=B(n)).r,(t=B(t)).r),i=e(n.g,t.g),o=e(n.b,t.b),a=cn(n.opacity,t.opacity);return function(t){return n.r=r(t),n.g=i(t),n.b=o(t),n.opacity=a(t),n+""}}return r.gamma=n,r}(1);function pn(n){return function(t){var e,r,i=t.length,o=new Array(i),a=new Array(i),s=new Array(i);for(e=0;e<i;++e)r=B(t[e]),o[e]=r.r||0,a[e]=r.g||0,s[e]=r.b||0;return o=n(o),a=n(a),s=n(s),r.opacity=1,function(n){return r.r=o(n),r.g=a(n),r.b=s(n),r+""}}}var dn=pn(rn),hn=pn(on),fn=function(n,t){var e,r=t?t.length:0,i=n?Math.min(r,n.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=In(n[e],t[e]);for(;e<r;++e)a[e]=t[e];return function(n){for(e=0;e<i;++e)a[e]=o[e](n);return a}},mn=function(n,t){var e=new Date;return t-=n=+n,function(r){return e.setTime(n+t*r),e}},gn=function(n,t){return t-=n=+n,function(e){return n+t*e}},yn=function(n,t){var e,r={},i={};for(e in null!==n&&"object"==typeof n||(n={}),null!==t&&"object"==typeof t||(t={}),t)e in n?r[e]=In(n[e],t[e]):i[e]=t[e];return function(n){for(e in r)i[e]=r[e](n);return i}},vn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cn=new RegExp(vn.source,"g");var bn,Bn,_n,wn,xn=function(n,t){var e,r,i,o=vn.lastIndex=Cn.lastIndex=0,a=-1,s=[],u=[];for(n+="",t+="";(e=vn.exec(n))&&(r=Cn.exec(t));)(i=r.index)>o&&(i=t.slice(o,i),s[a]?s[a]+=i:s[++a]=i),(e=e[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,u.push({i:a,x:gn(e,r)})),o=Cn.lastIndex;return o<t.length&&(i=t.slice(o),s[a]?s[a]+=i:s[++a]=i),s.length<2?u[0]?function(n){return function(t){return n(t)+""}}(u[0].x):function(n){return function(){return n}}(t):(t=u.length,function(n){for(var e,r=0;r<t;++r)s[(e=u[r]).i]=e.x(n);return s.join("")})},In=function(n,t){var e,r=typeof t;return null==t||"boolean"===r?an(t):("number"===r?gn:"string"===r?(e=y(t))?(t=e,An):xn:t instanceof y?An:t instanceof Date?mn:Array.isArray(t)?fn:"function"!=typeof t.valueOf&&"function"!=typeof t.toString||isNaN(t)?yn:gn)(n,t)},Tn=function(n){var t=n.length;return function(e){return n[Math.max(0,Math.min(t-1,Math.floor(e*t)))]}},Vn=function(n,t){var e=un(+n,+t);return function(n){var t=e(n);return t-360*Math.floor(t/360)}},kn=function(n,t){return t-=n=+n,function(e){return Math.round(n+t*e)}},En=180/Math.PI,Sn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Dn=function(n,t,e,r,i,o){var a,s,u;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(u=n*e+t*r)&&(e-=n*u,r-=t*u),(s=Math.sqrt(e*e+r*r))&&(e/=s,r/=s,u/=s),n*r<t*e&&(n=-n,t=-t,u=-u,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(t,n)*En,skewX:Math.atan(u)*En,scaleX:a,scaleY:s}};function On(n,t,e,r){function i(n){return n.length?n.pop()+" ":""}return function(o,a){var s=[],u=[];return o=n(o),a=n(a),function(n,r,i,o,a,s){if(n!==i||r!==o){var u=a.push("translate(",null,t,null,e);s.push({i:u-4,x:gn(n,i)},{i:u-2,x:gn(r,o)})}else(i||o)&&a.push("translate("+i+t+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,s,u),function(n,t,e,o){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:gn(n,t)})):t&&e.push(i(e)+"rotate("+t+r)}(o.rotate,a.rotate,s,u),function(n,t,e,o){n!==t?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:gn(n,t)}):t&&e.push(i(e)+"skewX("+t+r)}(o.skewX,a.skewX,s,u),function(n,t,e,r,o,a){if(n!==e||t!==r){var s=o.push(i(o)+"scale(",null,",",null,")");a.push({i:s-4,x:gn(n,e)},{i:s-2,x:gn(t,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,s,u),o=a=null,function(n){for(var t,e=-1,r=u.length;++e<r;)s[(t=u[e]).i]=t.x(n);return s.join("")}}}var Mn=On(function(n){return"none"===n?Sn:(bn||(bn=document.createElement("DIV"),Bn=document.documentElement,_n=document.defaultView),bn.style.transform=n,n=_n.getComputedStyle(Bn.appendChild(bn),null).getPropertyValue("transform"),Bn.removeChild(bn),n=n.slice(7,-1).split(","),Dn(+n[0],+n[1],+n[2],+n[3],+n[4],+n[5]))},"px, ","px)","deg)"),Nn=On(function(n){return null==n?Sn:(wn||(wn=document.createElementNS("http://www.w3.org/2000/svg","g")),wn.setAttribute("transform",n),(n=wn.transform.baseVal.consolidate())?(n=n.matrix,Dn(n.a,n.b,n.c,n.d,n.e,n.f)):Sn)},", ",")",")"),zn=Math.SQRT2;function jn(n){return((n=Math.exp(n))+1/n)/2}var Pn=function(n,t){var e,r,i=n[0],o=n[1],a=n[2],s=t[0],u=t[1],l=t[2],c=s-i,A=u-o,p=c*c+A*A;if(p<1e-12)r=Math.log(l/a)/zn,e=function(n){return[i+n*c,o+n*A,a*Math.exp(zn*n*r)]};else{var d=Math.sqrt(p),h=(l*l-a*a+4*p)/(2*a*2*d),f=(l*l-a*a-4*p)/(2*l*2*d),m=Math.log(Math.sqrt(h*h+1)-h),g=Math.log(Math.sqrt(f*f+1)-f);r=(g-m)/zn,e=function(n){var t,e=n*r,s=jn(m),u=a/(2*d)*(s*(t=zn*e+m,((t=Math.exp(2*t))-1)/(t+1))-function(n){return((n=Math.exp(n))-1/n)/2}(m));return[i+u*c,o+u*A,a*s/jn(zn*e+m)]}}return e.duration=1e3*r,e};function Rn(n){return function(t,e){var r=n((t=x(t)).h,(e=x(e)).h),i=cn(t.s,e.s),o=cn(t.l,e.l),a=cn(t.opacity,e.opacity);return function(n){return t.h=r(n),t.s=i(n),t.l=o(n),t.opacity=a(n),t+""}}}var Un=Rn(un),qn=Rn(cn);function Fn(n,t){var e=cn((n=P(n)).l,(t=P(t)).l),r=cn(n.a,t.a),i=cn(n.b,t.b),o=cn(n.opacity,t.opacity);return function(t){return n.l=e(t),n.a=r(t),n.b=i(t),n.opacity=o(t),n+""}}function Ln(n){return function(t,e){var r=n((t=Y(t)).h,(e=Y(e)).h),i=cn(t.c,e.c),o=cn(t.l,e.l),a=cn(t.opacity,e.opacity);return function(n){return t.h=r(n),t.c=i(n),t.l=o(n),t.opacity=a(n),t+""}}}var Yn=Ln(un),Wn=Ln(cn);function Qn(n){return function t(e){function r(t,r){var i=n((t=nn(t)).h,(r=nn(r)).h),o=cn(t.s,r.s),a=cn(t.l,r.l),s=cn(t.opacity,r.opacity);return function(n){return t.h=i(n),t.s=o(n),t.l=a(Math.pow(n,e)),t.opacity=s(n),t+""}}return e=+e,r.gamma=t,r}(1)}var Xn=Qn(un),Hn=Qn(cn);function Gn(n,t){for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return function(n){var t=Math.max(0,Math.min(r-1,Math.floor(n*=r)));return o[t](n-t)}}var Jn=function(n,t){for(var e=new Array(t),r=0;r<t;++r)e[r]=n(r/(t-1));return e};e.d(t,"interpolate",function(){return In}),e.d(t,"interpolateArray",function(){return fn}),e.d(t,"interpolateBasis",function(){return rn}),e.d(t,"interpolateBasisClosed",function(){return on}),e.d(t,"interpolateDate",function(){return mn}),e.d(t,"interpolateDiscrete",function(){return Tn}),e.d(t,"interpolateHue",function(){return Vn}),e.d(t,"interpolateNumber",function(){return gn}),e.d(t,"interpolateObject",function(){return yn}),e.d(t,"interpolateRound",function(){return kn}),e.d(t,"interpolateString",function(){return xn}),e.d(t,"interpolateTransformCss",function(){return Mn}),e.d(t,"interpolateTransformSvg",function(){return Nn}),e.d(t,"interpolateZoom",function(){return Pn}),e.d(t,"interpolateRgb",function(){return An}),e.d(t,"interpolateRgbBasis",function(){return dn}),e.d(t,"interpolateRgbBasisClosed",function(){return hn}),e.d(t,"interpolateHsl",function(){return Un}),e.d(t,"interpolateHslLong",function(){return qn}),e.d(t,"interpolateLab",function(){return Fn}),e.d(t,"interpolateHcl",function(){return Yn}),e.d(t,"interpolateHclLong",function(){return Wn}),e.d(t,"interpolateCubehelix",function(){return Xn}),e.d(t,"interpolateCubehelixLong",function(){return Hn}),e.d(t,"piecewise",function(){return Gn}),e.d(t,"quantize",function(){return Jn})},function(n,t,e){"use strict";function r(n,t){return n.parent===t.parent?1:2}function i(n,t){return n+t.x}function o(n,t){return Math.max(n,t.y)}e.r(t);var a=function(){var n=r,t=1,e=1,a=!1;function s(r){var s,u=0;r.eachAfter(function(t){var e=t.children;e?(t.x=function(n){return n.reduce(i,0)/n.length}(e),t.y=function(n){return 1+n.reduce(o,0)}(e)):(t.x=s?u+=n(t,s):0,t.y=0,s=t)});var l=function(n){for(var t;t=n.children;)n=t[0];return n}(r),c=function(n){for(var t;t=n.children;)n=t[t.length-1];return n}(r),A=l.x-n(l,c)/2,p=c.x+n(c,l)/2;return r.eachAfter(a?function(n){n.x=(n.x-r.x)*t,n.y=(r.y-n.y)*e}:function(n){n.x=(n.x-A)/(p-A)*t,n.y=(1-(r.y?n.y/r.y:1))*e})}return s.separation=function(t){return arguments.length?(n=t,s):n},s.size=function(n){return arguments.length?(a=!1,t=+n[0],e=+n[1],s):a?null:[t,e]},s.nodeSize=function(n){return arguments.length?(a=!0,t=+n[0],e=+n[1],s):a?[t,e]:null},s};function s(n){var t=0,e=n.children,r=e&&e.length;if(r)for(;--r>=0;)t+=e[r].value;else t=1;n.value=t}function u(n,t){var e,r,i,o,a,s=new p(n),u=+n.value&&(s.value=n.value),c=[s];for(null==t&&(t=l);e=c.pop();)if(u&&(e.value=+e.data.value),(i=t(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)c.push(r=e.children[o]=new p(i[o])),r.parent=e,r.depth=e.depth+1;return s.eachBefore(A)}function l(n){return n.children}function c(n){n.data=n.data.data}function A(n){var t=0;do{n.height=t}while((n=n.parent)&&n.height<++t)}function p(n){this.data=n,this.depth=this.height=0,this.parent=null}p.prototype=u.prototype={constructor:p,count:function(){return this.eachAfter(s)},each:function(n){var t,e,r,i,o=this,a=[o];do{for(t=a.reverse(),a=[];o=t.pop();)if(n(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(n){for(var t,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),t=i.children)for(e=0,r=t.length;e<r;++e)o.push(t[e]);for(;i=a.pop();)n(i);return this},eachBefore:function(n){for(var t,e,r=this,i=[r];r=i.pop();)if(n(r),t=r.children)for(e=t.length-1;e>=0;--e)i.push(t[e]);return this},sum:function(n){return this.eachAfter(function(t){for(var e=+n(t.data)||0,r=t.children,i=r&&r.length;--i>=0;)e+=r[i].value;t.value=e})},sort:function(n){return this.eachBefore(function(t){t.children&&t.children.sort(n)})},path:function(n){for(var t=this,e=function(n,t){if(n===t)return n;var e=n.ancestors(),r=t.ancestors(),i=null;for(n=e.pop(),t=r.pop();n===t;)i=n,n=e.pop(),t=r.pop();return i}(t,n),r=[t];t!==e;)t=t.parent,r.push(t);for(var i=r.length;n!==e;)r.splice(i,0,n),n=n.parent;return r},ancestors:function(){for(var n=this,t=[n];n=n.parent;)t.push(n);return t},descendants:function(){var n=[];return this.each(function(t){n.push(t)}),n},leaves:function(){var n=[];return this.eachBefore(function(t){t.children||n.push(t)}),n},links:function(){var n=this,t=[];return n.each(function(e){e!==n&&t.push({source:e.parent,target:e})}),t},copy:function(){return u(this).eachBefore(c)}};var d=Array.prototype.slice;var h=function(n){for(var t,e,r=0,i=(n=function(n){for(var t,e,r=n.length;r;)e=Math.random()*r--|0,t=n[r],n[r]=n[e],n[e]=t;return n}(d.call(n))).length,o=[];r<i;)t=n[r],e&&g(e,t)?++r:(e=v(o=f(o,t)),r=0);return e};function f(n,t){var e,r;if(y(t,n))return[t];for(e=0;e<n.length;++e)if(m(t,n[e])&&y(C(n[e],t),n))return[n[e],t];for(e=0;e<n.length-1;++e)for(r=e+1;r<n.length;++r)if(m(C(n[e],n[r]),t)&&m(C(n[e],t),n[r])&&m(C(n[r],t),n[e])&&y(b(n[e],n[r],t),n))return[n[e],n[r],t];throw new Error}function m(n,t){var e=n.r-t.r,r=t.x-n.x,i=t.y-n.y;return e<0||e*e<r*r+i*i}function g(n,t){var e=n.r-t.r+1e-6,r=t.x-n.x,i=t.y-n.y;return e>0&&e*e>r*r+i*i}function y(n,t){for(var e=0;e<t.length;++e)if(!g(n,t[e]))return!1;return!0}function v(n){switch(n.length){case 1:return{x:(t=n[0]).x,y:t.y,r:t.r};case 2:return C(n[0],n[1]);case 3:return b(n[0],n[1],n[2])}var t}function C(n,t){var e=n.x,r=n.y,i=n.r,o=t.x,a=t.y,s=t.r,u=o-e,l=a-r,c=s-i,A=Math.sqrt(u*u+l*l);return{x:(e+o+u/A*c)/2,y:(r+a+l/A*c)/2,r:(A+i+s)/2}}function b(n,t,e){var r=n.x,i=n.y,o=n.r,a=t.x,s=t.y,u=t.r,l=e.x,c=e.y,A=e.r,p=r-a,d=r-l,h=i-s,f=i-c,m=u-o,g=A-o,y=r*r+i*i-o*o,v=y-a*a-s*s+u*u,C=y-l*l-c*c+A*A,b=d*h-p*f,B=(h*C-f*v)/(2*b)-r,_=(f*m-h*g)/b,w=(d*v-p*C)/(2*b)-i,x=(p*g-d*m)/b,I=_*_+x*x-1,T=2*(o+B*_+w*x),V=B*B+w*w-o*o,k=-(I?(T+Math.sqrt(T*T-4*I*V))/(2*I):V/T);return{x:r+B+_*k,y:i+w+x*k,r:k}}function B(n,t,e){var r,i,o,a,s=n.x-t.x,u=n.y-t.y,l=s*s+u*u;l?(i=t.r+e.r,i*=i,a=n.r+e.r,i>(a*=a)?(r=(l+a-i)/(2*l),o=Math.sqrt(Math.max(0,a/l-r*r)),e.x=n.x-r*s-o*u,e.y=n.y-r*u+o*s):(r=(l+i-a)/(2*l),o=Math.sqrt(Math.max(0,i/l-r*r)),e.x=t.x+r*s-o*u,e.y=t.y+r*u+o*s)):(e.x=t.x+e.r,e.y=t.y)}function _(n,t){var e=n.r+t.r-1e-6,r=t.x-n.x,i=t.y-n.y;return e>0&&e*e>r*r+i*i}function w(n){var t=n._,e=n.next._,r=t.r+e.r,i=(t.x*e.r+e.x*t.r)/r,o=(t.y*e.r+e.y*t.r)/r;return i*i+o*o}function x(n){this._=n,this.next=null,this.previous=null}function I(n){if(!(i=n.length))return 0;var t,e,r,i,o,a,s,u,l,c,A;if((t=n[0]).x=0,t.y=0,!(i>1))return t.r;if(e=n[1],t.x=-e.r,e.x=t.r,e.y=0,!(i>2))return t.r+e.r;B(e,t,r=n[2]),t=new x(t),e=new x(e),r=new x(r),t.next=r.previous=e,e.next=t.previous=r,r.next=e.previous=t;n:for(s=3;s<i;++s){B(t._,e._,r=n[s]),r=new x(r),u=e.next,l=t.previous,c=e._.r,A=t._.r;do{if(c<=A){if(_(u._,r._)){e=u,t.next=e,e.previous=t,--s;continue n}c+=u._.r,u=u.next}else{if(_(l._,r._)){(t=l).next=e,e.previous=t,--s;continue n}A+=l._.r,l=l.previous}}while(u!==l.next);for(r.previous=t,r.next=e,t.next=e.previous=e=r,o=w(t);(r=r.next)!==e;)(a=w(r))<o&&(t=r,o=a);e=t.next}for(t=[e._],r=e;(r=r.next)!==e;)t.push(r._);for(r=h(t),s=0;s<i;++s)(t=n[s]).x-=r.x,t.y-=r.y;return r.r}var T=function(n){return I(n),n};function V(n){if("function"!=typeof n)throw new Error;return n}function k(){return 0}var E=function(n){return function(){return n}};function S(n){return Math.sqrt(n.value)}var D=function(){var n=null,t=1,e=1,r=k;function i(i){return i.x=t/2,i.y=e/2,n?i.eachBefore(O(n)).eachAfter(M(r,.5)).eachBefore(N(1)):i.eachBefore(O(S)).eachAfter(M(k,1)).eachAfter(M(r,i.r/Math.min(t,e))).eachBefore(N(Math.min(t,e)/(2*i.r))),i}return i.radius=function(t){return arguments.length?(n=null==(e=t)?null:V(e),i):n;var e},i.size=function(n){return arguments.length?(t=+n[0],e=+n[1],i):[t,e]},i.padding=function(n){return arguments.length?(r="function"==typeof n?n:E(+n),i):r},i};function O(n){return function(t){t.children||(t.r=Math.max(0,+n(t)||0))}}function M(n,t){return function(e){if(r=e.children){var r,i,o,a=r.length,s=n(e)*t||0;if(s)for(i=0;i<a;++i)r[i].r+=s;if(o=I(r),s)for(i=0;i<a;++i)r[i].r-=s;e.r=o+s}}}function N(n){return function(t){var e=t.parent;t.r*=n,e&&(t.x=e.x+n*t.x,t.y=e.y+n*t.y)}}var z=function(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)},j=function(n,t,e,r,i){for(var o,a=n.children,s=-1,u=a.length,l=n.value&&(r-t)/n.value;++s<u;)(o=a[s]).y0=e,o.y1=i,o.x0=t,o.x1=t+=o.value*l},P=function(){var n=1,t=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=n,i.y1=t/o,i.eachBefore(function(n,t){return function(r){r.children&&j(r,r.x0,n*(r.depth+1)/t,r.x1,n*(r.depth+2)/t);var i=r.x0,o=r.y0,a=r.x1-e,s=r.y1-e;a<i&&(i=a=(i+a)/2),s<o&&(o=s=(o+s)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=s}}(t,o)),r&&i.eachBefore(z),i}return i.round=function(n){return arguments.length?(r=!!n,i):r},i.size=function(e){return arguments.length?(n=+e[0],t=+e[1],i):[n,t]},i.padding=function(n){return arguments.length?(e=+n,i):e},i},R="$",U={depth:-1},q={};function F(n){return n.id}function L(n){return n.parentId}var Y=function(){var n=F,t=L;function e(e){var r,i,o,a,s,u,l,c=e.length,d=new Array(c),h={};for(i=0;i<c;++i)r=e[i],s=d[i]=new p(r),null!=(u=n(r,i,e))&&(u+="")&&(h[l=R+(s.id=u)]=l in h?q:s);for(i=0;i<c;++i)if(s=d[i],null!=(u=t(e[i],i,e))&&(u+="")){if(!(a=h[R+u]))throw new Error("missing: "+u);if(a===q)throw new Error("ambiguous: "+u);a.children?a.children.push(s):a.children=[s],s.parent=a}else{if(o)throw new Error("multiple roots");o=s}if(!o)throw new Error("no root");if(o.parent=U,o.eachBefore(function(n){n.depth=n.parent.depth+1,--c}).eachBefore(A),o.parent=null,c>0)throw new Error("cycle");return o}return e.id=function(t){return arguments.length?(n=V(t),e):n},e.parentId=function(n){return arguments.length?(t=V(n),e):t},e};function W(n,t){return n.parent===t.parent?1:2}function Q(n){var t=n.children;return t?t[0]:n.t}function X(n){var t=n.children;return t?t[t.length-1]:n.t}function H(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function G(n,t,e){return n.a.parent===t.parent?n.a:e}function J(n,t){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}J.prototype=Object.create(p.prototype);var K=function(){var n=W,t=1,e=1,r=null;function i(i){var u=function(n){for(var t,e,r,i,o,a=new J(n,0),s=[a];t=s.pop();)if(r=t._.children)for(t.children=new Array(o=r.length),i=o-1;i>=0;--i)s.push(e=t.children[i]=new J(r[i],i)),e.parent=t;return(a.parent=new J(null,0)).children=[a],a}(i);if(u.eachAfter(o),u.parent.m=-u.z,u.eachBefore(a),r)i.eachBefore(s);else{var l=i,c=i,A=i;i.eachBefore(function(n){n.x<l.x&&(l=n),n.x>c.x&&(c=n),n.depth>A.depth&&(A=n)});var p=l===c?1:n(l,c)/2,d=p-l.x,h=t/(c.x+p+d),f=e/(A.depth||1);i.eachBefore(function(n){n.x=(n.x+d)*h,n.y=n.depth*f})}return i}function o(t){var e=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null;if(e){!function(n){for(var t,e=0,r=0,i=n.children,o=i.length;--o>=0;)(t=i[o]).z+=e,t.m+=e,e+=t.s+(r+=t.c)}(t);var o=(e[0].z+e[e.length-1].z)/2;i?(t.z=i.z+n(t._,i._),t.m=t.z-o):t.z=o}else i&&(t.z=i.z+n(t._,i._));t.parent.A=function(t,e,r){if(e){for(var i,o=t,a=t,s=e,u=o.parent.children[0],l=o.m,c=a.m,A=s.m,p=u.m;s=X(s),o=Q(o),s&&o;)u=Q(u),(a=X(a)).a=t,(i=s.z+A-o.z-l+n(s._,o._))>0&&(H(G(s,t,r),t,i),l+=i,c+=i),A+=s.m,l+=o.m,p+=u.m,c+=a.m;s&&!X(a)&&(a.t=s,a.m+=A-c),o&&!Q(u)&&(u.t=o,u.m+=l-p,r=t)}return r}(t,i,t.parent.A||r[0])}function a(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function s(n){n.x*=t,n.y=n.depth*e}return i.separation=function(t){return arguments.length?(n=t,i):n},i.size=function(n){return arguments.length?(r=!1,t=+n[0],e=+n[1],i):r?null:[t,e]},i.nodeSize=function(n){return arguments.length?(r=!0,t=+n[0],e=+n[1],i):r?[t,e]:null},i},Z=function(n,t,e,r,i){for(var o,a=n.children,s=-1,u=a.length,l=n.value&&(i-e)/n.value;++s<u;)(o=a[s]).x0=t,o.x1=r,o.y0=e,o.y1=e+=o.value*l},$=(1+Math.sqrt(5))/2;function nn(n,t,e,r,i,o){for(var a,s,u,l,c,A,p,d,h,f,m,g=[],y=t.children,v=0,C=0,b=y.length,B=t.value;v<b;){u=i-e,l=o-r;do{c=y[C++].value}while(!c&&C<b);for(A=p=c,m=c*c*(f=Math.max(l/u,u/l)/(B*n)),h=Math.max(p/m,m/A);C<b;++C){if(c+=s=y[C].value,s<A&&(A=s),s>p&&(p=s),m=c*c*f,(d=Math.max(p/m,m/A))>h){c-=s;break}h=d}g.push(a={value:c,dice:u<l,children:y.slice(v,C)}),a.dice?j(a,e,r,i,B?r+=l*c/B:o):Z(a,e,r,B?e+=u*c/B:i,o),B-=c,v=C}return g}var tn=function n(t){function e(n,e,r,i,o){nn(t,n,e,r,i,o)}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}($),en=function(){var n=tn,t=!1,e=1,r=1,i=[0],o=k,a=k,s=k,u=k,l=k;function c(n){return n.x0=n.y0=0,n.x1=e,n.y1=r,n.eachBefore(A),i=[0],t&&n.eachBefore(z),n}function A(t){var e=i[t.depth],r=t.x0+e,c=t.y0+e,A=t.x1-e,p=t.y1-e;A<r&&(r=A=(r+A)/2),p<c&&(c=p=(c+p)/2),t.x0=r,t.y0=c,t.x1=A,t.y1=p,t.children&&(e=i[t.depth+1]=o(t)/2,r+=l(t)-e,c+=a(t)-e,(A-=s(t)-e)<r&&(r=A=(r+A)/2),(p-=u(t)-e)<c&&(c=p=(c+p)/2),n(t,r,c,A,p))}return c.round=function(n){return arguments.length?(t=!!n,c):t},c.size=function(n){return arguments.length?(e=+n[0],r=+n[1],c):[e,r]},c.tile=function(t){return arguments.length?(n=V(t),c):n},c.padding=function(n){return arguments.length?c.paddingInner(n).paddingOuter(n):c.paddingInner()},c.paddingInner=function(n){return arguments.length?(o="function"==typeof n?n:E(+n),c):o},c.paddingOuter=function(n){return arguments.length?c.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):c.paddingTop()},c.paddingTop=function(n){return arguments.length?(a="function"==typeof n?n:E(+n),c):a},c.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:E(+n),c):s},c.paddingBottom=function(n){return arguments.length?(u="function"==typeof n?n:E(+n),c):u},c.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:E(+n),c):l},c},rn=function(n,t,e,r,i){var o,a,s=n.children,u=s.length,l=new Array(u+1);for(l[0]=a=o=0;o<u;++o)l[o+1]=a+=s[o].value;!function n(t,e,r,i,o,a,u){if(t>=e-1){var c=s[t];return c.x0=i,c.y0=o,c.x1=a,void(c.y1=u)}var A=l[t],p=r/2+A,d=t+1,h=e-1;for(;d<h;){var f=d+h>>>1;l[f]<p?d=f+1:h=f}p-l[d-1]<l[d]-p&&t+1<d&&--d;var m=l[d]-A,g=r-m;if(a-i>u-o){var y=(i*g+a*m)/r;n(t,d,m,i,o,y,u),n(d,e,g,y,o,a,u)}else{var v=(o*g+u*m)/r;n(t,d,m,i,o,a,v),n(d,e,g,i,v,a,u)}}(0,u,n.value,t,e,r,i)},on=function(n,t,e,r,i){(1&n.depth?Z:j)(n,t,e,r,i)},an=function n(t){function e(n,e,r,i,o){if((a=n._squarify)&&a.ratio===t)for(var a,s,u,l,c,A=-1,p=a.length,d=n.value;++A<p;){for(u=(s=a[A]).children,l=s.value=0,c=u.length;l<c;++l)s.value+=u[l].value;s.dice?j(s,e,r,i,r+=(o-r)*s.value/d):Z(s,e,r,e+=(i-e)*s.value/d,o),d-=s.value}else n._squarify=a=nn(t,n,e,r,i,o),a.ratio=t}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}($);e.d(t,"cluster",function(){return a}),e.d(t,"hierarchy",function(){return u}),e.d(t,"pack",function(){return D}),e.d(t,"packSiblings",function(){return T}),e.d(t,"packEnclose",function(){return h}),e.d(t,"partition",function(){return P}),e.d(t,"stratify",function(){return Y}),e.d(t,"tree",function(){return K}),e.d(t,"treemap",function(){return en}),e.d(t,"treemapBinary",function(){return rn}),e.d(t,"treemapDice",function(){return j}),e.d(t,"treemapSlice",function(){return Z}),e.d(t,"treemapSliceDice",function(){return on}),e.d(t,"treemapSquarify",function(){return tn}),e.d(t,"treemapResquarify",function(){return an})}])});
//# sourceMappingURL=ui-router-visualizer.js.map

/***/ }),

/***/ "../06-ui-router/service/api.js":
/*!**************************************!*\
  !*** ../06-ui-router/service/api.js ***!
  \**************************************/
/*! exports provided: getAllPersons, getPersonById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPersons", function() { return getAllPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonById", function() { return getPersonById; });
function getAllPersons() {
  return new Promise(res => {
    setTimeout(() => {
      res([{id: '001', name: 'xiaoge_001'}, {id: '002', name: 'xiaoge_002'}]);
    }, 100);
  });
}
function getPersonById(id) {
  // simulate api fetch
  return new Promise(res => {
    setTimeout(() => {
      res({
        id,
        name: `xiaoge_${id}`,
        company: 'hansight',
        email: 'abeyuhang@gmail.com',
        address: 'Chengdu, Sichuan, China'
      });
    }, 100);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map