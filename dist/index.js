import * as S from "react";
import V, { useState as G, useMemo as Z, useRef as I, useCallback as X, useEffect as ie, useLayoutEffect as pn, createContext as pe, useContext as re, forwardRef as Lo, Fragment as be, isValidElement as Do, cloneElement as No, createElement as _o, useId as We, useReducer as gr, useSyncExternalStore as Ho, memo as mn } from "react";
import * as wt from "react-dom";
import { createPortal as Wo, flushSync as rt } from "react-dom";
var Jt = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Bo() {
  if (zn) return et;
  zn = 1;
  var e = V, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, a, f) {
    var u, m = {}, p = null, c = null;
    f !== void 0 && (p = "" + f), a.key !== void 0 && (p = "" + a.key), a.ref !== void 0 && (c = a.ref);
    for (u in a) r.call(a, u) && !i.hasOwnProperty(u) && (m[u] = a[u]);
    if (s && s.defaultProps) for (u in a = s.defaultProps, a) m[u] === void 0 && (m[u] = a[u]);
    return { $$typeof: t, type: s, key: p, ref: c, props: m, _owner: o.current };
  }
  return et.Fragment = n, et.jsx = l, et.jsxs = l, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function Vo() {
  return Kn || (Kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = V, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), c = Symbol.for("react.offscreen"), h = Symbol.iterator, g = "@@iterator";
    function b(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = h && d[h] || d[g];
      return typeof x == "function" ? x : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(d) {
      {
        for (var x = arguments.length, T = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
          T[F - 1] = arguments[F];
        y("error", d, T);
      }
    }
    function y(d, x, T) {
      {
        var F = w.ReactDebugCurrentFrame, H = F.getStackAddendum();
        H !== "" && (x += "%s", T = T.concat([H]));
        var B = T.map(function(j) {
          return String(j);
        });
        B.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, B);
      }
    }
    var R = !1, C = !1, A = !1, P = !1, W = !1, q;
    q = Symbol.for("react.module.reference");
    function N(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === r || d === i || W || d === o || d === f || d === u || P || d === c || R || C || A || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === m || d.$$typeof === l || d.$$typeof === s || d.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === q || d.getModuleId !== void 0));
    }
    function O(d, x, T) {
      var F = d.displayName;
      if (F)
        return F;
      var H = x.displayName || x.name || "";
      return H !== "" ? T + "(" + H + ")" : T;
    }
    function Y(d) {
      return d.displayName || "Context";
    }
    function _(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            var x = d;
            return Y(x) + ".Consumer";
          case l:
            var T = d;
            return Y(T._context) + ".Provider";
          case a:
            return O(d, d.render, "ForwardRef");
          case m:
            var F = d.displayName || null;
            return F !== null ? F : _(d.type) || "Memo";
          case p: {
            var H = d, B = H._payload, j = H._init;
            try {
              return _(j(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, Q = 0, z, ee, $, L, K, ge, we;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Dt() {
      {
        if (Q === 0) {
          z = console.log, ee = console.info, $ = console.warn, L = console.error, K = console.group, ge = console.groupCollapsed, we = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        Q++;
      }
    }
    function Me() {
      {
        if (Q--, Q === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, d, {
              value: z
            }),
            info: k({}, d, {
              value: ee
            }),
            warn: k({}, d, {
              value: $
            }),
            error: k({}, d, {
              value: L
            }),
            group: k({}, d, {
              value: K
            }),
            groupCollapsed: k({}, d, {
              value: ge
            }),
            groupEnd: k({}, d, {
              value: we
            })
          });
        }
        Q < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qe = w.ReactCurrentDispatcher, je;
    function Re(d, x, T) {
      {
        if (je === void 0)
          try {
            throw Error();
          } catch (H) {
            var F = H.stack.trim().match(/\n( *(at )?)/);
            je = F && F[1] || "";
          }
        return `
` + je + d;
      }
    }
    var Se = !1, mt;
    {
      var po = typeof WeakMap == "function" ? WeakMap : Map;
      mt = new po();
    }
    function An(d, x) {
      if (!d || Se)
        return "";
      {
        var T = mt.get(d);
        if (T !== void 0)
          return T;
      }
      var F;
      Se = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = Qe.current, Qe.current = null, Dt();
      try {
        if (x) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (Ce) {
              F = Ce;
            }
            Reflect.construct(d, [], j);
          } else {
            try {
              j.call();
            } catch (Ce) {
              F = Ce;
            }
            d.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            F = Ce;
          }
          d();
        }
      } catch (Ce) {
        if (Ce && F && typeof Ce.stack == "string") {
          for (var M = Ce.stack.split(`
`), ue = F.stack.split(`
`), J = M.length - 1, ne = ue.length - 1; J >= 1 && ne >= 0 && M[J] !== ue[ne]; )
            ne--;
          for (; J >= 1 && ne >= 0; J--, ne--)
            if (M[J] !== ue[ne]) {
              if (J !== 1 || ne !== 1)
                do
                  if (J--, ne--, ne < 0 || M[J] !== ue[ne]) {
                    var me = `
` + M[J].replace(" at new ", " at ");
                    return d.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", d.displayName)), typeof d == "function" && mt.set(d, me), me;
                  }
                while (J >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Qe.current = B, Me(), Error.prepareStackTrace = H;
      }
      var Ue = d ? d.displayName || d.name : "", Yn = Ue ? Re(Ue) : "";
      return typeof d == "function" && mt.set(d, Yn), Yn;
    }
    function mo(d, x, T) {
      return An(d, !1);
    }
    function ho(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function ht(d, x, T) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return An(d, ho(d));
      if (typeof d == "string")
        return Re(d);
      switch (d) {
        case f:
          return Re("Suspense");
        case u:
          return Re("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            return mo(d.render);
          case m:
            return ht(d.type, x, T);
          case p: {
            var F = d, H = F._payload, B = F._init;
            try {
              return ht(B(H), x, T);
            } catch {
            }
          }
        }
      return "";
    }
    var gt = Object.prototype.hasOwnProperty, Mn = {}, jn = w.ReactDebugCurrentFrame;
    function vt(d) {
      if (d) {
        var x = d._owner, T = ht(d.type, d._source, x ? x.type : null);
        jn.setExtraStackFrame(T);
      } else
        jn.setExtraStackFrame(null);
    }
    function go(d, x, T, F, H) {
      {
        var B = Function.call.bind(gt);
        for (var j in d)
          if (B(d, j)) {
            var M = void 0;
            try {
              if (typeof d[j] != "function") {
                var ue = Error((F || "React class") + ": " + T + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              M = d[j](x, j, F, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              M = J;
            }
            M && !(M instanceof Error) && (vt(H), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", T, j, typeof M), vt(null)), M instanceof Error && !(M.message in Mn) && (Mn[M.message] = !0, vt(H), E("Failed %s type: %s", T, M.message), vt(null));
          }
      }
    }
    var vo = Array.isArray;
    function Nt(d) {
      return vo(d);
    }
    function bo(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, T = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return T;
      }
    }
    function xo(d) {
      try {
        return In(d), !1;
      } catch {
        return !0;
      }
    }
    function In(d) {
      return "" + d;
    }
    function kn(d) {
      if (xo(d))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bo(d)), In(d);
    }
    var Ln = w.ReactCurrentOwner, yo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dn, Nn;
    function wo(d) {
      if (gt.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Eo(d) {
      if (gt.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function $o(d, x) {
      typeof d.ref == "string" && Ln.current;
    }
    function To(d, x) {
      {
        var T = function() {
          Dn || (Dn = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Ro(d, x) {
      {
        var T = function() {
          Nn || (Nn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        T.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var So = function(d, x, T, F, H, B, j) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: T,
        props: j,
        // Record the component responsible for creating this element.
        _owner: B
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Co(d, x, T, F, H) {
      {
        var B, j = {}, M = null, ue = null;
        T !== void 0 && (kn(T), M = "" + T), Eo(x) && (kn(x.key), M = "" + x.key), wo(x) && (ue = x.ref, $o(x, H));
        for (B in x)
          gt.call(x, B) && !yo.hasOwnProperty(B) && (j[B] = x[B]);
        if (d && d.defaultProps) {
          var J = d.defaultProps;
          for (B in J)
            j[B] === void 0 && (j[B] = J[B]);
        }
        if (M || ue) {
          var ne = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          M && To(j, ne), ue && Ro(j, ne);
        }
        return So(d, M, ue, H, F, Ln.current, j);
      }
    }
    var _t = w.ReactCurrentOwner, _n = w.ReactDebugCurrentFrame;
    function Ve(d) {
      if (d) {
        var x = d._owner, T = ht(d.type, d._source, x ? x.type : null);
        _n.setExtraStackFrame(T);
      } else
        _n.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Wt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Hn() {
      {
        if (_t.current) {
          var d = _(_t.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Po(d) {
      return "";
    }
    var Wn = {};
    function Fo(d) {
      {
        var x = Hn();
        if (!x) {
          var T = typeof d == "string" ? d : d.displayName || d.name;
          T && (x = `

Check the top-level render call using <` + T + ">.");
        }
        return x;
      }
    }
    function Bn(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var T = Fo(x);
        if (Wn[T])
          return;
        Wn[T] = !0;
        var F = "";
        d && d._owner && d._owner !== _t.current && (F = " It was passed a child from " + _(d._owner.type) + "."), Ve(d), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, F), Ve(null);
      }
    }
    function Vn(d, x) {
      {
        if (typeof d != "object")
          return;
        if (Nt(d))
          for (var T = 0; T < d.length; T++) {
            var F = d[T];
            Wt(F) && Bn(F, x);
          }
        else if (Wt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var H = b(d);
          if (typeof H == "function" && H !== d.entries)
            for (var B = H.call(d), j; !(j = B.next()).done; )
              Wt(j.value) && Bn(j.value, x);
        }
      }
    }
    function Oo(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var T;
        if (typeof x == "function")
          T = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === m))
          T = x.propTypes;
        else
          return;
        if (T) {
          var F = _(x);
          go(T, d.props, "prop", F, d);
        } else if (x.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var H = _(x);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ao(d) {
      {
        for (var x = Object.keys(d.props), T = 0; T < x.length; T++) {
          var F = x[T];
          if (F !== "children" && F !== "key") {
            Ve(d), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Ve(null);
            break;
          }
        }
        d.ref !== null && (Ve(d), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
      }
    }
    function Un(d, x, T, F, H, B) {
      {
        var j = N(d);
        if (!j) {
          var M = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = Po();
          ue ? M += ue : M += Hn();
          var J;
          d === null ? J = "null" : Nt(d) ? J = "array" : d !== void 0 && d.$$typeof === t ? (J = "<" + (_(d.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : J = typeof d, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, M);
        }
        var ne = Co(d, x, T, H, B);
        if (ne == null)
          return ne;
        if (j) {
          var me = x.children;
          if (me !== void 0)
            if (F)
              if (Nt(me)) {
                for (var Ue = 0; Ue < me.length; Ue++)
                  Vn(me[Ue], d);
                Object.freeze && Object.freeze(me);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vn(me, d);
        }
        return d === r ? Ao(ne) : Oo(ne), ne;
      }
    }
    function Mo(d, x, T) {
      return Un(d, x, T, !0);
    }
    function jo(d, x, T) {
      return Un(d, x, T, !1);
    }
    var Io = jo, ko = Mo;
    tt.Fragment = r, tt.jsx = Io, tt.jsxs = ko;
  }()), tt;
}
process.env.NODE_ENV === "production" ? Jt.exports = Bo() : Jt.exports = Vo();
var v = Jt.exports;
function Uo(e) {
  const { name: t, id: n, variant: r, selected: o, size: i = "medium", icon: l, className: s, ...a } = e, f = {
    standard: "bg-default-transparent text-neutral-detail-bold",
    filled: "bg-primary-main text-default-white",
    tonal: "bg-controls-highlight-palest text-neutral-detail-bold",
    outline: "border text-neutral-detail-bold border-neutral-detail-bold"
  }, u = {
    standard: "bg-controls-highlight-palest text-controls-highlight",
    filled: "bg-primary-paler text-primary-bold",
    tonal: "bg-controls-highlight-palest text-neutral-detail-bold",
    outline: "border bg-controls-highlight-palest border-controls-highlight text-controls-highlight"
  }, m = {
    standard: "hover:bg-controls-highlight-palest",
    filled: "hover:bg-primary-pale",
    tonal: "hover:bg-controls-highlight-paler hover:text-neutral-detail-bolder",
    outline: "hover:shadow-inner-button hover:shadow-controls-highlight-pale"
  }, p = {
    standard: "hover:bg-controls-highlight-paler hover:text-controls-highlight",
    filled: "hover:bg-primary-pale hover:text-primary-bolder",
    tonal: "hover:bg-controls-highlight-pale hover:text-controls-highlight-bold",
    outline: "hover:bg-controls-highlight-paler hover:text-controls-highlight-bold hover:border-controls-highlight-bold"
  }, c = {
    standard: "focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:bg-controls-highlight-palest",
    filled: "focus-visible:outline focus-visible:outline-primary-main focus-visible:bg-primary-main",
    tonal: "focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bolder",
    outline: "focus-visible:outline focus-visible:outline-neutral-detail-bold focus-visible:[box-shadow:none]"
  }, h = {
    standard: "focus-visible:outline focus-visible:outline-controls-highlight focus-visible:bg-controls-highlight-palest",
    filled: "focus-visible:outline focus-visible:outline-primary-paler focus-visible:bg-primary-paler focus-visible:text-primary-bolder",
    tonal: "focus-visible:outline focus-visible:outline-controls-highlight-paler focus-visible:bg-controls-highlight-paler focus-visible:text-neutral-detail-bold",
    outline: "focus-visible:outline focus-visible:outline-controls-highlight focus-visible:bg-controls-highlight-palest focus-visible:text-controls-highlight"
  }, g = {
    standard: "active:bg-controls-highlight-paler active:text-neutral-detail-bolder",
    filled: "active:bg-primary-accent",
    tonal: "active:bg-controls-highlight-pale active:text-neutral-detail-bolder",
    outline: "active:shadow-inner-button active:shadow-controls-highlight-pale"
  }, b = {
    standard: "active:bg-controls-highlight-pale active:text-controls-highlight-bold",
    filled: "active:bg-primary-accent active:text-default-white",
    tonal: "active:bg-controls-highlight-paler active:text-controls-highlight-bold",
    outline: "active:bg-controls-highlight-pale active:text-controls-highlight-bold active:border-highlight-bold"
  }, w = {
    standard: "disabled:bg-neutral-layer-1 disabled:text-neutral-detail-paler",
    filled: "disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled",
    tonal: "disabled:bg-controls-bg-disabled disabled:text-controls-content-disabled",
    outline: "disabled:border-neutral-detail-paler disabled:text-neutral-detail-paler disabled:[box-shadow:none]"
  }, E = {
    xsmall: "rounded",
    small: "rounded",
    medium: "rounded-md",
    large: "rounded-lg"
  }, y = { xsmall: "m-1", small: "m-2.5", medium: "m-3", large: "m-3.5" }, R = { xsmall: "m-0.5", small: "m-2", medium: "m-2.5", large: "m-3" }, C = { xsmall: "text-sm", small: "text-lg", medium: "text-xl", large: "text-2xl" };
  return /* @__PURE__ */ v.jsx("button", { type: "button", id: n || t, name: t, className: `flex items-center justify-center outline-2 outline-offset-2 outline-default-transparent transition ${E[i]} ${r === "outline" ? "p-px" : "p-0"} ${(o ? u : f)[r]} ${(o ? p : m)[r]} ${(o ? h : c)[r]} ${(o ? b : g)[r]} ${w[r]} disabled:cursor-not-allowed ${s}`, ...a, children: /* @__PURE__ */ v.jsx("i", { className: `fi ${l} ${C[i]} ${(r === "outline" ? R : y)[i]} flex items-center justify-center` }) });
}
function Yo(e) {
  const { name: t, id: n, variant: r = "outline", state: o = "default", type: i = "text", disabled: l, icon: s, prefix: a, suffix: f, className: u, autoComplete: m = "off", ...p } = e, [c, h] = G(!1), g = {
    default: {
      outline: "border-controls-border",
      tonal: "border-default-transparent bg-controls-bg-unselected"
    },
    warning: {
      outline: "border-states-warning",
      tonal: "border-states-warning bg-controls-bg-unselected"
    },
    error: {
      outline: "border-states-error",
      tonal: "border-states-error bg-controls-bg-unselected"
    }
  }, b = {
    default: "hover:outline-neutral-detail-paler",
    warning: "hover:border-states-warning hover:outline-states-warning-paler",
    error: "hover:border-states-error hover:outline-states-error-paler"
  }, w = {
    default: "focus-within:border-controls-highlight hover:focus-within:outline-controls-highlight focus-within:outline-controls-highlight",
    warning: "focus-within:outline-states-warning hover:focus-within:outline-states-warning",
    error: "focus-within:outline-states-error hover:focus-within:outline-states-error"
  }, E = i === "password", y = {
    ...p,
    autoComplete: m
  };
  return /* @__PURE__ */ v.jsxs("span", { className: `flex rounded-md border ${E ? "py-1.5 pe-1 ps-3" : "p-3"} text-controls-placeholder-text outline outline-2 outline-offset-2 outline-default-transparent transition has-[:disabled]:border-neutral-detail-paler has-[:disabled]:bg-neutral-layer-1 has-[:disabled]:text-controls-content-disabled has-[:disabled]:outline-0 ${b[o]} ${g[o][r]} ${w[o]}`, children: [
    a && /* @__PURE__ */ v.jsx("span", { className: "flex items-center pe-1 paragraph-sm-heavier", children: a }),
    s && /* @__PURE__ */ v.jsx("i", { className: `fi ${s} flex items-center pe-2.5 text-neutral-detail-bold` }),
    /* @__PURE__ */ v.jsx("input", { id: n || t, name: t, type: c ? "text" : i, disabled: l, ...y, className: `w-full rounded bg-default-transparent text-neutral-body paragraph-sm-lighter placeholder:text-controls-placeholder-text placeholder:text-opacity-60 focus:placeholder:text-default-transparent focus-visible:outline-0 disabled:cursor-not-allowed disabled:bg-neutral-layer-1 disabled:text-opacity-60 disabled:placeholder:text-controls-content-disabled disabled:placeholder:text-opacity-60 [&::-ms-reveal]:hidden ${u}` }),
    f && /* @__PURE__ */ v.jsx("span", { className: "flex items-center pe-2.5 paragraph-sm-heavier", children: f }),
    o === "warning" && /* @__PURE__ */ v.jsx("i", { className: "fi fi-rr-triangle-warning flex items-center ps-3 text-states-warning" }),
    o === "error" && /* @__PURE__ */ v.jsx("i", { className: "fi fi-rr-exclamation flex items-center ps-3 text-states-error" }),
    E && /* @__PURE__ */ v.jsx(Uo, { name: "reveal", variant: "standard", size: "xsmall", icon: c ? "fi-rr-eye-crossed" : "fi-rr-eye", "aria-label": c ? "Hide password" : "Reveal password", disabled: l, onClick: () => h(!c), className: "my-px p-1" })
  ] });
}
function zo({
  children: e,
  className: t,
  variant: n = "primary",
  size: r = "medium",
  as: o = "button"
}) {
  const i = {
    primary: "text-primary-text-1 border-0 bg-primary-main outline outline-1 outline-offset-2 outline-default-transparent hover:outline-primary-main focus-visible:outline-primary-main",
    outline: "bg-default-transparent border border-neutral-detail-boldest text-neutral-detail-bold hover:border-neutral-detail-bold focus-visible:border-neutral-detail-bold",
    ghost: "bg-default-transparent border-2 border-default-transparent text-neutral-detail-boldest hover:text-neutral-detail-bold focus-visible:text-neutral-detail-bold"
  }, l = {
    small: "heading-xs-heavier size-8",
    medium: "heading-xs-heavier size-10",
    large: "heading-md-heavier size-12"
  };
  return /* @__PURE__ */ v.jsx(o, { className: `inline-flex items-center justify-center overflow-hidden rounded-full ${i[n]} ${l[r]} ${t}`, children: e });
}
function Ko() {
  return /* @__PURE__ */ v.jsxs("svg", { "data-testid": "company-logo-expanded", height: "40", xmlns: "http://www.w3.org/2000/svg", version: "1.1", viewBox: "0 0 87.75 34", children: [
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M15.45,6.65V2.4H2.05v29.2h13.4v-4.25c-2.74,0-5.38-1.09-7.32-3.03-1.94-1.94-3.03-4.57-3.03-7.32s1.09-5.38,3.03-7.32c1.94-1.94,4.57-3.03,7.32-3.03h0Z" }),
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M15.45,6.65v20.7c2.74,0,5.38-1.09,7.32-3.03s3.03-4.57,3.03-7.32-1.09-5.38-3.03-7.32c-1.94-1.94-4.57-3.03-7.32-3.03h0Z" }),
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M82.67,12.04c1.21,0,2.2-.98,2.2-2.2s-.99-2.2-2.2-2.2-2.2.98-2.2,2.2.98,2.2,2.2,2.2Z" }),
    /* @__PURE__ */ v.jsxs("g", { children: [
      /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M29.56,22.76l3.95-12.91h3.64l3.95,12.91h-2.51l-3.52-11.39h.47l-3.46,11.39h-2.51ZM31.93,20.07v-2.28h6.81v2.28h-6.81Z" }),
      /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M46.98,23.03c-1,0-1.86-.22-2.58-.67-.72-.45-1.27-1.06-1.65-1.83-.38-.77-.57-1.64-.57-2.61s.2-1.86.6-2.63.96-1.38,1.68-1.82c.72-.44,1.58-.66,2.57-.66,1.14,0,2.1.29,2.87.87.77.58,1.27,1.36,1.48,2.36l-2.44.65c-.14-.5-.39-.89-.75-1.17s-.76-.42-1.21-.42c-.51,0-.94.12-1.26.37-.33.25-.57.59-.73,1.01s-.23.91-.23,1.45c0,.84.19,1.53.56,2.05.37.52.93.78,1.66.78.55,0,.97-.13,1.26-.38s.5-.61.65-1.08l2.49.52c-.28,1.03-.8,1.82-1.56,2.38-.76.56-1.71.83-2.83.83Z" }),
      /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M53.15,22.76v-9.68h2.15v3.21h.31v6.47h-2.46ZM58.99,22.76v-5.72c0-.64-.15-1.14-.45-1.49-.3-.36-.72-.53-1.25-.53s-.92.18-1.22.52-.46.8-.46,1.36l-1.02-.72c0-.63.16-1.2.48-1.7s.74-.9,1.28-1.19c.54-.29,1.14-.44,1.8-.44.76,0,1.38.16,1.87.48s.85.75,1.08,1.29c.23.54.35,1.13.35,1.78v6.37h-2.44ZM64.82,22.76v-5.72c0-.64-.15-1.14-.45-1.49-.3-.36-.72-.53-1.25-.53-.34,0-.64.08-.89.24s-.45.38-.59.66c-.14.28-.21.61-.21.98l-1.02-.68c0-.66.16-1.25.47-1.76.31-.51.74-.9,1.27-1.19.53-.28,1.12-.43,1.76-.43,1.11,0,1.94.33,2.51.98s.85,1.51.85,2.57v6.37h-2.44Z" }),
      /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M73.92,23.03c-.99,0-1.87-.21-2.62-.64-.76-.43-1.35-1.02-1.78-1.77s-.64-1.61-.64-2.58c0-1.06.21-1.98.63-2.76s1-1.39,1.73-1.83c.73-.43,1.58-.65,2.54-.65,1.02,0,1.88.24,2.59.72.71.48,1.24,1.15,1.58,2.02.34.87.46,1.89.36,3.06h-2.41v-.9c0-.99-.16-1.7-.47-2.13s-.83-.65-1.54-.65c-.83,0-1.44.25-1.83.76-.39.51-.59,1.25-.59,2.24,0,.9.2,1.6.59,2.09.39.49.97.74,1.73.74.48,0,.89-.1,1.23-.31.34-.21.6-.51.78-.91l2.44.7c-.36.88-.94,1.57-1.73,2.06s-1.64.74-2.58.74ZM70.71,18.6v-1.81h6.42v1.81h-6.42Z" })
    ] })
  ] });
}
function Go() {
  return /* @__PURE__ */ v.jsxs("svg", { "data-testid": "company-logo-collapsed", height: "40", xmlns: "http://www.w3.org/2000/svg", version: "1.1", viewBox: "0 0 34 34", children: [
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M16.2,6.41V2.16H2.8v29.2h13.4v-4.25c-2.74,0-5.38-1.09-7.32-3.03-1.94-1.94-3.03-4.57-3.03-7.32s1.09-5.38,3.03-7.32c1.94-1.94,4.57-3.03,7.32-3.03h0Z" }),
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M16.2,6.41v20.7c2.74,0,5.38-1.09,7.32-3.03s3.03-4.57,3.03-7.32-1.09-5.38-3.03-7.32c-1.94-1.94-4.57-3.03-7.32-3.03h0Z" }),
    /* @__PURE__ */ v.jsx("path", { className: "fill-primary-main", strokeWidth: "0", d: "M28.75,11.81c1.21,0,2.2-.98,2.2-2.2s-.99-2.2-2.2-2.2-2.2.98-2.2,2.2.98,2.2,2.2,2.2Z" })
  ] });
}
function qo({ isNavExpanded: e }) {
  return /* @__PURE__ */ v.jsx("div", { className: "m-4 flex h-10 flex-row items-center gap-3 overflow-hidden", children: e ? /* @__PURE__ */ v.jsx(Ko, {}) : /* @__PURE__ */ v.jsx(Go, {}) });
}
function Xo() {
  return Z(
    () => ({
      t: (e) => e
    }),
    []
  );
}
function Zo() {
  return /* @__PURE__ */ v.jsxs("svg", { className: "group-hover:stroke-controls-highlight", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "data-testid": "collapse-icon", children: [
    /* @__PURE__ */ v.jsx("path", { d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 8L8 12L12 16", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ v.jsx("path", { d: "M16 12H8", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function Jo() {
  return /* @__PURE__ */ v.jsxs("svg", { className: "group-hover:stroke-controls-highlight", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", "data-testid": "expand-icon", children: [
    /* @__PURE__ */ v.jsx("path", { d: "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ v.jsx("path", { d: "M8 12H16", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 16L16 12L12 8", stroke: "#9BA9B8", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function Qo() {
  return /* @__PURE__ */ v.jsxs("svg", { "data-testid": "platform-icon", width: "40", height: "40", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", children: [
    /* @__PURE__ */ v.jsx("defs", { children: /* @__PURE__ */ v.jsxs("linearGradient", { id: "linear-gradient", x1: "-3656.48", y1: "11365.57", x2: "-3646.59", y2: "11365.57", gradientTransform: "translate(11380.57 3670.32) rotate(90)", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ v.jsx("stop", { offset: "0", stopColor: "#525252" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".11", stopColor: "#777" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".25", stopColor: "#a0a0a0" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".39", stopColor: "#c2c2c2" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".54", stopColor: "#ddd" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".68", stopColor: "#f0f0f0" }),
      /* @__PURE__ */ v.jsx("stop", { offset: ".84", stopColor: "#fbfbfb" }),
      /* @__PURE__ */ v.jsx("stop", { offset: "1", stopColor: "#fff" })
    ] }) }),
    /* @__PURE__ */ v.jsx("rect", { className: "fill-primary-main", strokeWidth: "0", x: "0", y: "0", width: "30", height: "30", rx: "3.67", ry: "3.67" }),
    /* @__PURE__ */ v.jsxs("g", { children: [
      /* @__PURE__ */ v.jsx("path", { fill: "url(#linear-gradient)", strokeWidth: "0", d: "M10.45,20.57c1.36-2.52,4.53-3.5,7.05-2.14,1.95,1.05,2.94,3.19,2.67,5.27l4,.03c.27-3.51-1.5-7.01-4.8-8.79-4.46-2.41-10.04-.74-12.44,3.72-.85,1.57-1.19,3.28-1.08,4.94l4.02.03c-.11-1.02.07-2.09.59-3.07Z" }),
      /* @__PURE__ */ v.jsx("path", { className: "fill-default-white", strokeWidth: "0", d: "M19.55,9.43c-1.36,2.52-4.53,3.5-7.05,2.14-1.95-1.05-2.94-3.19-2.67-5.27l-4-.03c-.27,3.51,1.5,7.01,4.8,8.79,4.46,2.41,10.04.74,12.44-3.72.85-1.57,1.19-3.28,1.08-4.94l-4.02-.03c.11,1.02-.07,2.09-.59,3.07Z" })
    ] })
  ] });
}
function ei({ isNavExpanded: e, toggleNavExpanded: t }) {
  const { t: n } = Xo();
  return /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ v.jsx("button", { title: n(e ? "Collapse" : "Expand"), className: "absolute right-0 -translate-y-1/2 translate-x-1/2 bg-neutral-layer-1 hover:fill-controls-highlight", onClick: t, children: e ? /* @__PURE__ */ v.jsx(Zo, {}) : /* @__PURE__ */ v.jsx(Jo, {}) }),
    /* @__PURE__ */ v.jsx("div", { className: "flex items-center gap-3 overflow-hidden p-4", children: /* @__PURE__ */ v.jsx("i", { className: "inline-block", children: /* @__PURE__ */ v.jsx(Qo, {}) }) })
  ] });
}
const vr = typeof document < "u" ? V.useLayoutEffect : () => {
};
function ti(e) {
  const t = I(null);
  return vr(() => {
    t.current = e;
  }, [
    e
  ]), X((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const ut = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, ke = (e) => e && "window" in e && e.window === e ? e : ut(e).defaultView || window;
function ni(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function ri(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function br(e) {
  let t = null;
  return () => (t == null && (t = e()), t);
}
const oi = br(function() {
  return ri(/^Mac/i);
}), ii = br(function() {
  return ni(/Android/i);
});
function li(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : ii() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class si {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function xr(e) {
  let t = I({
    isFocused: !1,
    observer: null
  });
  vr(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ti((r) => {
    e == null || e(r);
  });
  return X((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new si("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function ai(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = X((a) => {
    if (a.target === a.currentTarget)
      return r && r(a), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = xr(i), s = X((a) => {
    const f = ut(a.target);
    a.target === a.currentTarget && f.activeElement === a.target && (n && n(a), o && o(!0), l(a));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let ct = null, Qt = /* @__PURE__ */ new Set(), ot = /* @__PURE__ */ new Map(), Ne = !1, en = !1;
const ui = {
  Tab: !0,
  Escape: !0
};
function hn(e, t) {
  for (let n of Qt) n(e, t);
}
function ci(e) {
  return !(e.metaKey || !oi() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Et(e) {
  Ne = !0, ci(e) && (ct = "keyboard", hn("keyboard", e));
}
function he(e) {
  ct = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ne = !0, hn("pointer", e));
}
function yr(e) {
  li(e) && (Ne = !0, ct = "virtual");
}
function wr(e) {
  e.target === window || e.target === document || (!Ne && !en && (ct = "virtual", hn("virtual", e)), Ne = !1, en = !1);
}
function Er() {
  Ne = !1, en = !0;
}
function tn(e) {
  if (typeof window > "u" || ot.get(ke(e))) return;
  const t = ke(e), n = ut(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ne = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Et, !0), n.addEventListener("keyup", Et, !0), n.addEventListener("click", yr, !0), t.addEventListener("focus", wr, !0), t.addEventListener("blur", Er, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", he, !0), n.addEventListener("pointermove", he, !0), n.addEventListener("pointerup", he, !0)) : (n.addEventListener("mousedown", he, !0), n.addEventListener("mousemove", he, !0), n.addEventListener("mouseup", he, !0)), t.addEventListener("beforeunload", () => {
    $r(e);
  }, {
    once: !0
  }), ot.set(t, {
    focus: r
  });
}
const $r = (e, t) => {
  const n = ke(e), r = ut(e);
  t && r.removeEventListener("DOMContentLoaded", t), ot.has(n) && (n.HTMLElement.prototype.focus = ot.get(n).focus, r.removeEventListener("keydown", Et, !0), r.removeEventListener("keyup", Et, !0), r.removeEventListener("click", yr, !0), n.removeEventListener("focus", wr, !0), n.removeEventListener("blur", Er, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", he, !0), r.removeEventListener("pointermove", he, !0), r.removeEventListener("pointerup", he, !0)) : (r.removeEventListener("mousedown", he, !0), r.removeEventListener("mousemove", he, !0), r.removeEventListener("mouseup", he, !0)), ot.delete(n));
};
function fi(e) {
  const t = ut(e);
  let n;
  return t.readyState !== "loading" ? tn(e) : (n = () => {
    tn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => $r(e, n);
}
typeof document < "u" && fi();
function Tr() {
  return ct !== "pointer";
}
const di = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function pi(e, t, n) {
  var r;
  const o = typeof window < "u" ? ke(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? ke(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? ke(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? ke(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !di.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !ui[n.key]);
}
function mi(e, t, n) {
  tn(), ie(() => {
    let r = (o, i) => {
      pi(!!(n != null && n.isTextInput), o, i) && e(Tr());
    };
    return Qt.add(r), () => {
      Qt.delete(r);
    };
  }, t);
}
function hi(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = I({
    isFocusWithin: !1
  }), l = X((f) => {
    i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, n && n(f), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = xr(l), a = X((f) => {
    !i.current.isFocusWithin && document.activeElement === f.target && (r && r(f), o && o(!0), i.current.isFocusWithin = !0, s(f));
  }, [
    r,
    o,
    s
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: a,
      onBlur: l
    }
  };
}
let $t = !1, Bt = 0;
function nn() {
  $t = !0, setTimeout(() => {
    $t = !1;
  }, 50);
}
function Gn(e) {
  e.pointerType === "touch" && nn();
}
function gi() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Gn) : document.addEventListener("touchend", nn), Bt++, () => {
      Bt--, !(Bt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Gn) : document.removeEventListener("touchend", nn));
    };
}
function vi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = G(!1), s = I({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ie(gi, []);
  let { hoverProps: a, triggerHoverEnd: f } = Z(() => {
    let u = (c, h) => {
      if (s.pointerType = h, o || h === "touch" || s.isHovered || !c.currentTarget.contains(c.target)) return;
      s.isHovered = !0;
      let g = c.currentTarget;
      s.target = g, t && t({
        type: "hoverstart",
        target: g,
        pointerType: h
      }), n && n(!0), l(!0);
    }, m = (c, h) => {
      if (s.pointerType = "", s.target = null, h === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let g = c.currentTarget;
      r && r({
        type: "hoverend",
        target: g,
        pointerType: h
      }), n && n(!1), l(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (c) => {
      $t && c.pointerType === "mouse" || u(c, c.pointerType);
    }, p.onPointerLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && m(c, c.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (c) => {
      !s.ignoreEmulatedMouseEvents && !$t && u(c, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && m(c, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return ie(() => {
    o && f({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: a,
    isHovered: i
  };
}
function bi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = I({
    isFocused: !1,
    isFocusVisible: t || Tr()
  }), [i, l] = G(!1), [s, a] = G(() => o.current.isFocused && o.current.isFocusVisible), f = X(() => a(o.current.isFocused && o.current.isFocusVisible), []), u = X((c) => {
    o.current.isFocused = c, l(c), f();
  }, [
    f
  ]);
  mi((c) => {
    o.current.isFocusVisible = c, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = ai({
    isDisabled: r,
    onFocusChange: u
  }), { focusWithinProps: p } = hi({
    isDisabled: !r,
    onFocusWithinChange: u
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? p : m
  };
}
var xi = Object.defineProperty, yi = (e, t, n) => t in e ? xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vt = (e, t, n) => (yi(e, typeof t != "symbol" ? t + "" : t, n), n);
let wi = class {
  constructor() {
    Vt(this, "current", this.detect()), Vt(this, "handoffState", "pending"), Vt(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, De = new wi();
function Ge(e) {
  return De.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Rr(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function $e() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Rr(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = $e();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function ft() {
  let [e] = G($e);
  return ie(() => () => e.dispose(), [e]), e;
}
let U = (e, t) => {
  De.isServer ? ie(e, t) : pn(e, t);
};
function qe(e) {
  let t = I(e);
  return U(() => {
    t.current = e;
  }, [e]), t;
}
let D = function(e) {
  let t = qe(e);
  return V.useCallback((...n) => t.current(...n), [t]);
};
function Ei(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function $i(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Ti({ disabled: e = !1 } = {}) {
  let t = I(null), [n, r] = G(!1), o = ft(), i = D(() => {
    t.current = null, r(!1), o.dispose();
  }), l = D((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let a = Ge(s.currentTarget);
        o.addEventListener(a, "pointerup", i, !1), o.addEventListener(a, "pointermove", (f) => {
          if (t.current) {
            let u = Ei(f);
            r($i(u, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(a, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Ri = pe(void 0);
function Sr() {
  return re(Ri);
}
function rn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Be(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Be), r;
}
var Tt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Tt || {}), Pe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Pe || {});
function fe() {
  let e = Ci();
  return X((t) => Si({ mergeRefs: e, ...t }), [e]);
}
function Si({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? Pi;
  let a = Cr(t, e);
  if (i) return bt(a, n, r, l, s);
  let f = o ?? 0;
  if (f & 2) {
    let { static: u = !1, ...m } = a;
    if (u) return bt(m, n, r, l, s);
  }
  if (f & 1) {
    let { unmount: u = !0, ...m } = a;
    return Be(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return bt({ ...m, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return bt(a, n, r, l, s);
}
function bt(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...a } = Ut(e, ["unmount", "static"]), f = e.ref !== void 0 ? { [s]: e.ref } : {}, u = typeof l == "function" ? l(t) : l;
  "className" in a && a.className && typeof a.className == "function" && (a.className = a.className(t)), a["aria-labelledby"] && a["aria-labelledby"] === a.id && (a["aria-labelledby"] = void 0);
  let m = {};
  if (t) {
    let p = !1, c = [];
    for (let [h, g] of Object.entries(t)) typeof g == "boolean" && (p = !0), g === !0 && c.push(h.replace(/([A-Z])/g, (b) => `-${b.toLowerCase()}`));
    if (p) {
      m["data-headlessui-state"] = c.join(" ");
      for (let h of c) m[`data-${h}`] = "";
    }
  }
  if (i === be && (Object.keys(Ie(a)).length > 0 || Object.keys(Ie(m)).length > 0)) if (!Do(u) || Array.isArray(u) && u.length > 1) {
    if (Object.keys(Ie(a)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Ie(a)).concat(Object.keys(Ie(m))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = u.props, c = p == null ? void 0 : p.className, h = typeof c == "function" ? (...w) => rn(c(...w), a.className) : rn(c, a.className), g = h ? { className: h } : {}, b = Cr(u.props, Ie(Ut(a, ["ref"])));
    for (let w in m) w in b && delete m[w];
    return No(u, Object.assign({}, b, m, f, { ref: o(u.ref, f.ref) }, g));
  }
  return _o(i, Object.assign({}, Ut(a, ["ref"]), i !== be && f, i !== be && m), u);
}
function Ci() {
  let e = I([]), t = X((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function Pi(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Cr(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let l = n[r];
    for (let s of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      s(o, ...i);
    }
  } });
  return t;
}
function Pr(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let l of i) l == null || l(...o);
  } });
  return t;
}
function ce(e) {
  var t;
  return Object.assign(Lo(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Ie(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ut(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let Fi = pe(void 0);
function Oi() {
  return re(Fi);
}
function Ai(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Mi(n) ? !1 : r;
}
function Mi(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Fr = Symbol();
function ji(e, t = !0) {
  return Object.assign(e, { [Fr]: t });
}
function ye(...e) {
  let t = I(e);
  ie(() => {
    t.current = e;
  }, [e]);
  let n = D((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Fr])) ? void 0 : n;
}
let gn = pe(null);
gn.displayName = "DescriptionContext";
function Or() {
  let e = re(gn);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Or), t;
  }
  return e;
}
function Ii() {
  let [e, t] = G([]);
  return [e.length > 0 ? e.join(" ") : void 0, Z(() => function(n) {
    let r = D((i) => (t((l) => [...l, i]), () => t((l) => {
      let s = l.slice(), a = s.indexOf(i);
      return a !== -1 && s.splice(a, 1), s;
    }))), o = Z(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return V.createElement(gn.Provider, { value: o }, n.children);
  }, [t])];
}
let ki = "p";
function Li(e, t) {
  let n = We(), r = Sr(), { id: o = `headlessui-description-${n}`, ...i } = e, l = Or(), s = ye(t);
  U(() => l.register(o), [o, l.register]);
  let a = r || !1, f = Z(() => ({ ...l.slot, disabled: a }), [l.slot, a]), u = { ref: s, ...l.props, id: o };
  return fe()({ ourProps: u, theirProps: i, slot: f, defaultTag: ki, name: l.name || "Description" });
}
let Di = ce(Li);
Object.assign(Di, {});
var oe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(oe || {});
let Pt = pe(null);
Pt.displayName = "LabelContext";
function vn() {
  let e = re(Pt);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, vn), t;
  }
  return e;
}
function Ni(e) {
  var t, n, r;
  let o = (n = (t = re(Pt)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = void 0) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Ar({ inherit: e = !1 } = {}) {
  let t = Ni(), [n, r] = G([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, Z(() => function(i) {
    let l = D((a) => (r((f) => [...f, a]), () => r((f) => {
      let u = f.slice(), m = u.indexOf(a);
      return m !== -1 && u.splice(m, 1), u;
    }))), s = Z(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return V.createElement(Pt.Provider, { value: s }, i.children);
  }, [r])];
}
let _i = "label";
function Hi(e, t) {
  var n;
  let r = We(), o = vn(), i = Oi(), l = Sr(), { id: s = `headlessui-label-${r}`, htmlFor: a = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: f = !1, ...u } = e, m = ye(t);
  U(() => o.register(s), [s, o.register]);
  let p = D((b) => {
    let w = b.currentTarget;
    if (w instanceof HTMLLabelElement && b.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(b), w instanceof HTMLLabelElement) {
      let E = document.getElementById(w.htmlFor);
      if (E) {
        let y = E.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let R = E.getAttribute("aria-disabled");
        if (R === "true" || R === "") return;
        (E instanceof HTMLInputElement && (E.type === "radio" || E.type === "checkbox") || E.role === "radio" || E.role === "checkbox" || E.role === "switch") && E.click(), E.focus({ preventScroll: !0 });
      }
    }
  }), c = l || !1, h = Z(() => ({ ...o.slot, disabled: c }), [o.slot, c]), g = { ref: m, ...o.props, id: s, htmlFor: a, onClick: p };
  return f && ("onClick" in g && (delete g.htmlFor, delete g.onClick), "onClick" in u && delete u.onClick), fe()({ ourProps: g, theirProps: u, slot: h, defaultTag: a ? _i : "div", name: o.name || "Label" });
}
let Wi = ce(Hi);
Object.assign(Wi, {});
function Bi(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Vi(e, t = !1) {
  let [n, r] = gr(() => ({}), {}), o = Z(() => Bi(e), [e, n]);
  return U(() => {
    if (!e) return;
    let i = new ResizeObserver(r);
    return i.observe(e), () => {
      i.disconnect();
    };
  }, [e]), t ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let Ui = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function Mr(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function jr(e) {
  return Ho(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Yi = new Ui(() => Mr(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function bn(e, t) {
  let n = Yi.get(t), r = We(), o = jr(n);
  if (U(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let on = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map();
function qn(e) {
  var t;
  let n = (t = it.get(e)) != null ? t : 0;
  return it.set(e, n + 1), n !== 0 ? () => Xn(e) : (on.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Xn(e));
}
function Xn(e) {
  var t;
  let n = (t = it.get(e)) != null ? t : 1;
  if (n === 1 ? it.delete(e) : it.set(e, n - 1), n !== 1) return;
  let r = on.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, on.delete(e));
}
function zi(e, { allowed: t, disallowed: n } = {}) {
  let r = bn(e, "inert-others");
  U(() => {
    var o, i;
    if (!r) return;
    let l = $e();
    for (let a of (o = n == null ? void 0 : n()) != null ? o : []) a && l.add(qn(a));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let a of s) {
      if (!a) continue;
      let f = Ge(a);
      if (!f) continue;
      let u = a.parentElement;
      for (; u && u !== f.body; ) {
        for (let m of u.children) s.some((p) => m.contains(p)) || l.add(qn(m));
        u = u.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function Ki(e, t, n) {
  let r = qe((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  ie(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = $e();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let ln = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Gi = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var sn = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(sn || {}), qi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(qi || {}), Xi = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xi || {});
function Ir(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ln)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Zi(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Gi)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var xn = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(xn || {});
function yn(e, t = 0) {
  var n;
  return e === ((n = Ge(e)) == null ? void 0 : n.body) ? !1 : Be(t, { 0() {
    return e.matches(ln);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(ln)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function kr(e) {
  let t = Ge(e);
  $e().nextFrame(() => {
    t && !yn(t.activeElement, 0) && Qi(e);
  });
}
var Ji = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Ji || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Qi(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let el = ["textarea", "input"].join(",");
function tl(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, el)) != null ? n : !1;
}
function Lr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function nl(e, t) {
  return rl(Ir(), t, { relativeTo: e });
}
function rl(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? Lr(e) : e : t & 64 ? Zi(e) : Ir(e);
  o.length > 0 && l.length > 1 && (l = l.filter((c) => !o.some((h) => h != null && "current" in h ? (h == null ? void 0 : h.current) === c : h === c))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, u = 0, m = l.length, p;
  do {
    if (u >= m || u + m <= 0) return 0;
    let c = a + u;
    if (t & 16) c = (c + m) % m;
    else {
      if (c < 0) return 3;
      if (c >= m) return 1;
    }
    p = l[c], p == null || p.focus(f), u += s;
  } while (p !== i.activeElement);
  return t & 6 && tl(p) && p.select(), 2;
}
function Dr() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function ol() {
  return /Android/gi.test(window.navigator.userAgent);
}
function il() {
  return Dr() || ol();
}
function nt(e, t, n, r) {
  let o = qe(n);
  ie(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ll(e, t, n, r) {
  let o = qe(n);
  ie(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Zn = 30;
function sl(e, t, n) {
  let r = bn(e, "outside-click"), o = qe(n), i = X(function(a, f) {
    if (a.defaultPrevented) return;
    let u = f(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let m = function p(c) {
      return typeof c == "function" ? p(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(t);
    for (let p of m) if (p !== null && (p.contains(u) || a.composed && a.composedPath().includes(p))) return;
    return !yn(u, xn.Loose) && u.tabIndex !== -1 && a.preventDefault(), o.current(a, u);
  }, [o, t]), l = I(null);
  nt(r, "pointerdown", (a) => {
    var f, u;
    l.current = ((u = (f = a.composedPath) == null ? void 0 : f.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), nt(r, "mousedown", (a) => {
    var f, u;
    l.current = ((u = (f = a.composedPath) == null ? void 0 : f.call(a)) == null ? void 0 : u[0]) || a.target;
  }, !0), nt(r, "click", (a) => {
    il() || l.current && (i(a, () => l.current), l.current = null);
  }, !0);
  let s = I({ x: 0, y: 0 });
  nt(r, "touchstart", (a) => {
    s.current.x = a.touches[0].clientX, s.current.y = a.touches[0].clientY;
  }, !0), nt(r, "touchend", (a) => {
    let f = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(f.x - s.current.x) >= Zn || Math.abs(f.y - s.current.y) >= Zn)) return i(a, () => a.target instanceof HTMLElement ? a.target : null);
  }, !0), ll(r, "blur", (a) => i(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function wn(...e) {
  return Z(() => Ge(...e), [...e]);
}
function al(e, t) {
  return Z(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function ul() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function cl() {
  return Dr() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = $e();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let a = s.target.closest("a");
          if (!a) return;
          let { hash: f } = new URL(a.href), u = e.querySelector(f);
          u && !r(u) && (l = u);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let a = s.target;
          for (; a.parentElement && r(a.parentElement); ) a = a.parentElement;
          t.style(a, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let a = s.target;
            for (; a.parentElement && a.dataset.headlessuiPortal !== "" && !(a.scrollHeight > a.clientHeight || a.scrollWidth > a.clientWidth); ) a = a.parentElement;
            a.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let a = (s = window.scrollY) != null ? s : window.pageYOffset;
        i !== a && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function fl() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function dl(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Le = Mr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: $e(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: dl(n) }, o = [cl(), ul(), fl()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Le.subscribe(() => {
  let e = Le.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Le.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Le.dispatch("TEARDOWN", n);
  }
});
function pl(e, t, n = () => ({ containers: [] })) {
  let r = jr(Le), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return U(() => {
    if (!(!t || !e)) return Le.dispatch("PUSH", t, n), () => Le.dispatch("POP", t, n);
  }, [e, t]), i;
}
function ml(e, t, n = () => [document.body]) {
  let r = bn(e, "scroll-lock");
  pl(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Jn(e) {
  return [e.screenX, e.screenY];
}
function hl() {
  let e = I([-1, -1]);
  return { wasMoved(t) {
    let n = Jn(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Jn(t);
  } };
}
function gl(e = 0) {
  let [t, n] = G(e), r = X((a) => n(a), [t]), o = X((a) => n((f) => f | a), [t]), i = X((a) => (t & a) === a, [t]), l = X((a) => n((f) => f & ~a), [n]), s = X((a) => n((f) => f ^ a), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Qn, er;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Qn = process == null ? void 0 : process.env) == null ? void 0 : Qn.NODE_ENV) === "test" && typeof ((er = Element == null ? void 0 : Element.prototype) == null ? void 0 : er.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var vl = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(vl || {});
function Nr(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function _r(e, t, n, r) {
  let [o, i] = G(n), { hasFlag: l, addFlag: s, removeFlag: a } = gl(e && o ? 3 : 0), f = I(!1), u = I(!1), m = ft();
  return U(() => {
    var p;
    if (e) {
      if (n && i(!0), !t) {
        n && s(3);
        return;
      }
      return (p = r == null ? void 0 : r.start) == null || p.call(r, n), bl(t, { inFlight: f, prepare() {
        u.current ? u.current = !1 : u.current = f.current, f.current = !0, !u.current && (n ? (s(3), a(4)) : (s(4), a(2)));
      }, run() {
        u.current ? n ? (a(3), s(4)) : (a(4), s(3)) : n ? a(1) : s(1);
      }, done() {
        var c;
        u.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (f.current = !1, a(7), n || i(!1), (c = r == null ? void 0 : r.end) == null || c.call(r, n));
      } });
    }
  }, [e, n, t, m]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function bl(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = $e();
  return yl(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(xl(e, r));
    });
  }), i.dispose;
}
function xl(e, t) {
  var n, r;
  let o = $e();
  if (!e) return o.dispose;
  let i = !1;
  o.add(() => {
    i = !0;
  });
  let l = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((s) => s instanceof CSSTransition)) != null ? r : [];
  return l.length === 0 ? (t(), o.dispose) : (Promise.allSettled(l.map((s) => s.finished)).then(() => {
    i || t();
  }), o.dispose);
}
function yl(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function wl(e, { container: t, accept: n, walk: r }) {
  let o = I(n), i = I(r);
  ie(() => {
    o.current = n, i.current = r;
  }, [n, r]), U(() => {
    if (!t || !e) return;
    let l = Ge(t);
    if (!l) return;
    let s = o.current, a = i.current, f = Object.assign((m) => s(m), { acceptNode: s }), u = l.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, f, !1);
    for (; u.nextNode(); ) a(u.currentNode);
  }, [t, e, o, i]);
}
function Ft() {
  return typeof window < "u";
}
function Xe(e) {
  return Hr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function de(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Te(e) {
  var t;
  return (t = (Hr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hr(e) {
  return Ft() ? e instanceof Node || e instanceof de(e).Node : !1;
}
function ae(e) {
  return Ft() ? e instanceof Element || e instanceof de(e).Element : !1;
}
function Ee(e) {
  return Ft() ? e instanceof HTMLElement || e instanceof de(e).HTMLElement : !1;
}
function tr(e) {
  return !Ft() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof de(e).ShadowRoot;
}
function dt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = xe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function El(e) {
  return ["table", "td", "th"].includes(Xe(e));
}
function Ot(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function En(e) {
  const t = $n(), n = ae(e) ? xe(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function $l(e) {
  let t = Fe(e);
  for (; Ee(t) && !ze(t); ) {
    if (En(t))
      return t;
    if (Ot(t))
      return null;
    t = Fe(t);
  }
  return null;
}
function $n() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ze(e) {
  return ["html", "body", "#document"].includes(Xe(e));
}
function xe(e) {
  return de(e).getComputedStyle(e);
}
function At(e) {
  return ae(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Fe(e) {
  if (Xe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    tr(e) && e.host || // Fallback.
    Te(e)
  );
  return tr(t) ? t.host : t;
}
function Wr(e) {
  const t = Fe(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ee(t) && dt(t) ? t : Wr(t);
}
function lt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Wr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = de(o);
  if (i) {
    const s = an(l);
    return t.concat(l, l.visualViewport || [], dt(o) ? o : [], s && n ? lt(s) : []);
  }
  return t.concat(o, lt(o, [], n));
}
function an(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tl() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Ke = Math.min, le = Math.max, st = Math.round, xt = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), Rl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Sl = {
  start: "end",
  end: "start"
};
function nr(e, t, n) {
  return le(e, Ke(t, n));
}
function Ze(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ae(e) {
  return e.split("-")[0];
}
function pt(e) {
  return e.split("-")[1];
}
function Br(e) {
  return e === "x" ? "y" : "x";
}
function Vr(e) {
  return e === "y" ? "height" : "width";
}
function _e(e) {
  return ["top", "bottom"].includes(Ae(e)) ? "y" : "x";
}
function Ur(e) {
  return Br(_e(e));
}
function Cl(e, t, n) {
  n === void 0 && (n = !1);
  const r = pt(e), o = Ur(e), i = Vr(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = Rt(l)), [l, Rt(l)];
}
function Pl(e) {
  const t = Rt(e);
  return [un(e), t, un(t)];
}
function un(e) {
  return e.replace(/start|end/g, (t) => Sl[t]);
}
function Fl(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function Ol(e, t, n, r) {
  const o = pt(e);
  let i = Fl(Ae(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(un)))), i;
}
function Rt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rl[t]);
}
function Al(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ml(e) {
  return typeof e != "number" ? Al(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function St(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function rr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = _e(t), l = Ur(t), s = Vr(l), a = Ae(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let c;
  switch (a) {
    case "top":
      c = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      c = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      c = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      c = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      c = {
        x: r.x,
        y: r.y
      };
  }
  switch (pt(t)) {
    case "start":
      c[l] -= p * (n && f ? -1 : 1);
      break;
    case "end":
      c[l] += p * (n && f ? -1 : 1);
      break;
  }
  return c;
}
const jl = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let f = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: m
  } = rr(f, r, a), p = r, c = {}, h = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: w
    } = s[g], {
      x: E,
      y,
      data: R,
      reset: C
    } = await w({
      x: u,
      y: m,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: c,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = E ?? u, m = y ?? m, c = {
      ...c,
      [b]: {
        ...c[b],
        ...R
      }
    }, C && h <= 50 && (h++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (f = C.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: m
    } = rr(f, p, a)), g = -1);
  }
  return {
    x: u,
    y: m,
    placement: p,
    strategy: o,
    middlewareData: c
  };
};
async function Mt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: a
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: c = 0
  } = Ze(t, e), h = Ml(c), b = s[p ? m === "floating" ? "reference" : "floating" : m], w = St(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: a
  })), E = m === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), R = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = St(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: E,
    offsetParent: y,
    strategy: a
  }) : E);
  return {
    top: (w.top - C.top + h.top) / R.y,
    bottom: (C.bottom - w.bottom + h.bottom) / R.y,
    left: (w.left - C.left + h.left) / R.x,
    right: (C.right - w.right + h.right) / R.x
  };
}
const Il = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: a,
        elements: f
      } = t, {
        mainAxis: u = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...b
      } = Ze(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ae(o), E = _e(s), y = Ae(s) === s, R = await (a.isRTL == null ? void 0 : a.isRTL(f.floating)), C = p || (y || !g ? [Rt(s)] : Pl(s)), A = h !== "none";
      !p && A && C.push(...Ol(s, g, h, R));
      const P = [s, ...C], W = await Mt(t, b), q = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && q.push(W[w]), m) {
        const k = Cl(o, l, R);
        q.push(W[k[0]], W[k[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: q
      }], !q.every((k) => k <= 0)) {
        var O, Y;
        const k = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, Q = P[k];
        if (Q)
          return {
            data: {
              index: k,
              overflows: N
            },
            reset: {
              placement: Q
            }
          };
        let z = (Y = N.filter((ee) => ee.overflows[0] <= 0).sort((ee, $) => ee.overflows[1] - $.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!z)
          switch (c) {
            case "bestFit": {
              var _;
              const ee = (_ = N.filter(($) => {
                if (A) {
                  const L = _e($.placement);
                  return L === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((L) => L > 0).reduce((L, K) => L + K, 0)]).sort(($, L) => $[1] - L[1])[0]) == null ? void 0 : _[0];
              ee && (z = ee);
              break;
            }
            case "initialPlacement":
              z = s;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
async function kl(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Ae(n), s = pt(n), a = _e(n) === "y", f = ["left", "top"].includes(l) ? -1 : 1, u = i && a ? -1 : 1, m = Ze(t, e);
  let {
    mainAxis: p,
    crossAxis: c,
    alignmentAxis: h
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return s && typeof h == "number" && (c = s === "end" ? h * -1 : h), a ? {
    x: c * u,
    y: p * f
  } : {
    x: p * f,
    y: c * u
  };
}
const Ll = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, a = await kl(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: l
        }
      };
    }
  };
}, Dl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: w,
              y: E
            } = b;
            return {
              x: w,
              y: E
            };
          }
        },
        ...a
      } = Ze(e, t), f = {
        x: n,
        y: r
      }, u = await Mt(t, a), m = _e(Ae(o)), p = Br(m);
      let c = f[p], h = f[m];
      if (i) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", E = c + u[b], y = c - u[w];
        c = nr(E, c, y);
      }
      if (l) {
        const b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", E = h + u[b], y = h - u[w];
        h = nr(E, h, y);
      }
      const g = s.fn({
        ...t,
        [p]: c,
        [m]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [p]: i,
            [m]: l
          }
        }
      };
    }
  };
}, Nl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: l,
        elements: s
      } = t, {
        apply: a = () => {
        },
        ...f
      } = Ze(e, t), u = await Mt(t, f), m = Ae(o), p = pt(o), c = _e(o) === "y", {
        width: h,
        height: g
      } = i.floating;
      let b, w;
      m === "top" || m === "bottom" ? (b = m, w = p === (await (l.isRTL == null ? void 0 : l.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (w = m, b = p === "end" ? "top" : "bottom");
      const E = g - u.top - u.bottom, y = h - u.left - u.right, R = Ke(g - u[b], E), C = Ke(h - u[w], y), A = !t.middlewareData.shift;
      let P = R, W = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = y), (r = t.middlewareData.shift) != null && r.enabled.y && (P = E), A && !p) {
        const N = le(u.left, 0), O = le(u.right, 0), Y = le(u.top, 0), _ = le(u.bottom, 0);
        c ? W = h - 2 * (N !== 0 || O !== 0 ? N + O : le(u.left, u.right)) : P = g - 2 * (Y !== 0 || _ !== 0 ? Y + _ : le(u.top, u.bottom));
      }
      await a({
        ...t,
        availableWidth: W,
        availableHeight: P
      });
      const q = await l.getDimensions(s.floating);
      return h !== q.width || g !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Yr(e) {
  const t = xe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Ee(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = st(n) !== i || st(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Tn(e) {
  return ae(e) ? e : e.contextElement;
}
function Ye(e) {
  const t = Tn(e);
  if (!Ee(t))
    return Oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Yr(t);
  let l = (i ? st(n.width) : n.width) / r, s = (i ? st(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const _l = /* @__PURE__ */ Oe(0);
function zr(e) {
  const t = de(e);
  return !$n() || !t.visualViewport ? _l : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hl(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== de(e) ? !1 : t;
}
function He(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Tn(e);
  let l = Oe(1);
  t && (r ? ae(r) && (l = Ye(r)) : l = Ye(e));
  const s = Hl(i, n, r) ? zr(i) : Oe(0);
  let a = (o.left + s.x) / l.x, f = (o.top + s.y) / l.y, u = o.width / l.x, m = o.height / l.y;
  if (i) {
    const p = de(i), c = r && ae(r) ? de(r) : r;
    let h = p, g = an(h);
    for (; g && r && c !== h; ) {
      const b = Ye(g), w = g.getBoundingClientRect(), E = xe(g), y = w.left + (g.clientLeft + parseFloat(E.paddingLeft)) * b.x, R = w.top + (g.clientTop + parseFloat(E.paddingTop)) * b.y;
      a *= b.x, f *= b.y, u *= b.x, m *= b.y, a += y, f += R, h = de(g), g = an(h);
    }
  }
  return St({
    width: u,
    height: m,
    x: a,
    y: f
  });
}
function Wl(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = Te(r), s = t ? Ot(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Oe(1);
  const u = Oe(0), m = Ee(r);
  if ((m || !m && !i) && ((Xe(r) !== "body" || dt(l)) && (a = At(r)), Ee(r))) {
    const p = He(r);
    f = Ye(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - a.scrollLeft * f.x + u.x,
    y: n.y * f.y - a.scrollTop * f.y + u.y
  };
}
function Bl(e) {
  return Array.from(e.getClientRects());
}
function cn(e, t) {
  const n = At(e).scrollLeft;
  return t ? t.left + n : He(Te(e)).left + n;
}
function Vl(e) {
  const t = Te(e), n = At(e), r = e.ownerDocument.body, o = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + cn(e);
  const s = -n.scrollTop;
  return xe(r).direction === "rtl" && (l += le(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Ul(e, t) {
  const n = de(e), r = Te(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, a = 0;
  if (o) {
    i = o.width, l = o.height;
    const f = $n();
    (!f || f && t === "fixed") && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function Yl(e, t) {
  const n = He(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Ee(e) ? Ye(e) : Oe(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, a = o * i.x, f = r * i.y;
  return {
    width: l,
    height: s,
    x: a,
    y: f
  };
}
function or(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ul(e, n);
  else if (t === "document")
    r = Vl(Te(e));
  else if (ae(t))
    r = Yl(t, n);
  else {
    const o = zr(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return St(r);
}
function Kr(e, t) {
  const n = Fe(e);
  return n === t || !ae(n) || ze(n) ? !1 : xe(n).position === "fixed" || Kr(n, t);
}
function zl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = lt(e, [], !1).filter((s) => ae(s) && Xe(s) !== "body"), o = null;
  const i = xe(e).position === "fixed";
  let l = i ? Fe(e) : e;
  for (; ae(l) && !ze(l); ) {
    const s = xe(l), a = En(l);
    !a && s.position === "fixed" && (o = null), (i ? !a && !o : !a && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || dt(l) && !a && Kr(e, l)) ? r = r.filter((u) => u !== l) : o = s, l = Fe(l);
  }
  return t.set(e, r), r;
}
function Kl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? Ot(t) ? [] : zl(t, this._c) : [].concat(n), r], s = l[0], a = l.reduce((f, u) => {
    const m = or(t, u, o);
    return f.top = le(m.top, f.top), f.right = Ke(m.right, f.right), f.bottom = Ke(m.bottom, f.bottom), f.left = le(m.left, f.left), f;
  }, or(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Gl(e) {
  const {
    width: t,
    height: n
  } = Yr(e);
  return {
    width: t,
    height: n
  };
}
function ql(e, t, n) {
  const r = Ee(t), o = Te(t), i = n === "fixed", l = He(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Oe(0);
  if (r || !r && !i)
    if ((Xe(t) !== "body" || dt(o)) && (s = At(t)), r) {
      const c = He(t, !0, i, t);
      a.x = c.x + t.clientLeft, a.y = c.y + t.clientTop;
    } else o && (a.x = cn(o));
  let f = 0, u = 0;
  if (o && !r && !i) {
    const c = o.getBoundingClientRect();
    u = c.top + s.scrollTop, f = c.left + s.scrollLeft - // RTL <body> scrollbar.
    cn(o, c);
  }
  const m = l.left + s.scrollLeft - a.x - f, p = l.top + s.scrollTop - a.y - u;
  return {
    x: m,
    y: p,
    width: l.width,
    height: l.height
  };
}
function Yt(e) {
  return xe(e).position === "static";
}
function ir(e, t) {
  if (!Ee(e) || xe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Te(e) === n && (n = n.ownerDocument.body), n;
}
function Gr(e, t) {
  const n = de(e);
  if (Ot(e))
    return n;
  if (!Ee(e)) {
    let o = Fe(e);
    for (; o && !ze(o); ) {
      if (ae(o) && !Yt(o))
        return o;
      o = Fe(o);
    }
    return n;
  }
  let r = ir(e, t);
  for (; r && El(r) && Yt(r); )
    r = ir(r, t);
  return r && ze(r) && Yt(r) && !En(r) ? n : r || $l(e) || n;
}
const Xl = async function(e) {
  const t = this.getOffsetParent || Gr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ql(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Zl(e) {
  return xe(e).direction === "rtl";
}
const Jl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Wl,
  getDocumentElement: Te,
  getClippingRect: Kl,
  getOffsetParent: Gr,
  getElementRects: Xl,
  getClientRects: Bl,
  getDimensions: Gl,
  getScale: Ye,
  isElement: ae,
  isRTL: Zl
};
function Ql(e, t) {
  let n = null, r;
  const o = Te(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const {
      left: f,
      top: u,
      width: m,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !m || !p)
      return;
    const c = xt(u), h = xt(o.clientWidth - (f + m)), g = xt(o.clientHeight - (u + p)), b = xt(f), E = {
      rootMargin: -c + "px " + -h + "px " + -g + "px " + -b + "px",
      threshold: le(0, Ke(1, a)) || 1
    };
    let y = !0;
    function R(C) {
      const A = C[0].intersectionRatio;
      if (A !== a) {
        if (!y)
          return l();
        A ? l(!1, A) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...E,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, E);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function es(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, f = Tn(e), u = o || i ? [...f ? lt(f) : [], ...lt(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const m = f && s ? Ql(f, n) : null;
  let p = -1, c = null;
  l && (c = new ResizeObserver((w) => {
    let [E] = w;
    E && E.target === f && c && (c.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = c) == null || y.observe(t);
    })), n();
  }), f && !a && c.observe(f), c.observe(t));
  let h, g = a ? He(e) : null;
  a && b();
  function b() {
    const w = He(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    u.forEach((E) => {
      o && E.removeEventListener("scroll", n), i && E.removeEventListener("resize", n);
    }), m == null || m(), (w = c) == null || w.disconnect(), c = null, a && cancelAnimationFrame(h);
  };
}
const zt = Mt, ts = Ll, ns = Dl, rs = Il, os = Nl, is = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Jl,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return jl(e, t, {
    ...o,
    platform: i
  });
};
var yt = typeof document < "u" ? pn : ie;
function Ct(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ct(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ct(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lr(e, t) {
  const n = qr(e);
  return Math.round(t * n) / n;
}
function Kt(e) {
  const t = S.useRef(e);
  return yt(() => {
    t.current = e;
  }), t;
}
function ls(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: f
  } = e, [u, m] = S.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, c] = S.useState(r);
  Ct(p, r) || c(r);
  const [h, g] = S.useState(null), [b, w] = S.useState(null), E = S.useCallback(($) => {
    $ !== A.current && (A.current = $, g($));
  }, []), y = S.useCallback(($) => {
    $ !== P.current && (P.current = $, w($));
  }, []), R = i || h, C = l || b, A = S.useRef(null), P = S.useRef(null), W = S.useRef(u), q = a != null, N = Kt(a), O = Kt(o), Y = Kt(f), _ = S.useCallback(() => {
    if (!A.current || !P.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: p
    };
    O.current && ($.platform = O.current), is(A.current, P.current, $).then((L) => {
      const K = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      k.current && !Ct(W.current, K) && (W.current = K, wt.flushSync(() => {
        m(K);
      }));
    });
  }, [p, t, n, O, Y]);
  yt(() => {
    f === !1 && W.current.isPositioned && (W.current.isPositioned = !1, m(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [f]);
  const k = S.useRef(!1);
  yt(() => (k.current = !0, () => {
    k.current = !1;
  }), []), yt(() => {
    if (R && (A.current = R), C && (P.current = C), R && C) {
      if (N.current)
        return N.current(R, C, _);
      _();
    }
  }, [R, C, _, N, q]);
  const Q = S.useMemo(() => ({
    reference: A,
    floating: P,
    setReference: E,
    setFloating: y
  }), [E, y]), z = S.useMemo(() => ({
    reference: R,
    floating: C
  }), [R, C]), ee = S.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return $;
    const L = lr(z.floating, u.x), K = lr(z.floating, u.y);
    return s ? {
      ...$,
      transform: "translate(" + L + "px, " + K + "px)",
      ...qr(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: K
    };
  }, [n, s, z.floating, u.x, u.y]);
  return S.useMemo(() => ({
    ...u,
    update: _,
    refs: Q,
    elements: z,
    floatingStyles: ee
  }), [u, _, Q, z, ee]);
}
const Xr = (e, t) => ({
  ...ts(e),
  options: [e, t]
}), ss = (e, t) => ({
  ...ns(e),
  options: [e, t]
}), as = (e, t) => ({
  ...rs(e),
  options: [e, t]
}), us = (e, t) => ({
  ...os(e),
  options: [e, t]
}), Zr = {
  ...S
}, cs = Zr.useInsertionEffect, fs = cs || ((e) => e());
function Jr(e) {
  const t = S.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return fs(() => {
    t.current = e;
  }), S.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var fn = typeof document < "u" ? pn : ie;
let sr = !1, ds = 0;
const ar = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ds++
);
function ps() {
  const [e, t] = S.useState(() => sr ? ar() : void 0);
  return fn(() => {
    e == null && t(ar());
  }, []), S.useEffect(() => {
    sr = !0;
  }, []), e;
}
const ms = Zr.useId, hs = ms || ps;
let at;
process.env.NODE_ENV !== "production" && (at = /* @__PURE__ */ new Set());
function gs() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = at) != null && e.has(o))) {
    var i;
    (i = at) == null || i.add(o), console.warn(o);
  }
}
function vs() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = at) != null && e.has(o))) {
    var i;
    (i = at) == null || i.add(o), console.error(o);
  }
}
function bs() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const xs = /* @__PURE__ */ S.createContext(null), ys = /* @__PURE__ */ S.createContext(null), ws = () => {
  var e;
  return ((e = S.useContext(xs)) == null ? void 0 : e.id) || null;
}, Es = () => S.useContext(ys), $s = "data-floating-ui-focusable";
function Ts(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = hs(), i = S.useRef({}), [l] = S.useState(() => bs()), s = ws() != null;
  if (process.env.NODE_ENV !== "production") {
    const c = r.reference;
    c && !ae(c) && vs("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [a, f] = S.useState(r.reference), u = Jr((c, h, g) => {
    i.current.openEvent = c ? h : void 0, l.emit("openchange", {
      open: c,
      event: h,
      reason: g,
      nested: s
    }), n == null || n(c, h, g);
  }), m = S.useMemo(() => ({
    setPositionReference: f
  }), []), p = S.useMemo(() => ({
    reference: a || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [a, r.reference, r.floating]);
  return S.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: p,
    events: l,
    floatingId: o,
    refs: m
  }), [t, u, p, l, o, m]);
}
function Rs(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Ts({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = S.useState(null), [s, a] = S.useState(null), u = (o == null ? void 0 : o.reference) || i, m = S.useRef(null), p = Es();
  fn(() => {
    u && (m.current = u);
  }, [u]);
  const c = ls({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), h = S.useCallback((y) => {
    const R = ae(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    a(R), c.refs.setReference(R);
  }, [c.refs]), g = S.useCallback((y) => {
    (ae(y) || y === null) && (m.current = y, l(y)), (ae(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !ae(y)) && c.refs.setReference(y);
  }, [c.refs]), b = S.useMemo(() => ({
    ...c.refs,
    setReference: g,
    setPositionReference: h,
    domReference: m
  }), [c.refs, g, h]), w = S.useMemo(() => ({
    ...c.elements,
    domReference: u
  }), [c.elements, u]), E = S.useMemo(() => ({
    ...c,
    ...r,
    refs: b,
    elements: w,
    nodeId: t
  }), [c, b, w, t, r]);
  return fn(() => {
    r.dataRef.current.floatingContext = E;
    const y = p == null ? void 0 : p.nodesRef.current.find((R) => R.id === t);
    y && (y.context = E);
  }), S.useMemo(() => ({
    ...c,
    context: E,
    refs: b,
    elements: w
  }), [c, b, w, E]);
}
const ur = "active", cr = "selected";
function Gt(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [ur]: l,
      [cr]: s,
      ...a
    } = e;
    i = a;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [$s]: ""
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((a) => {
      let [f, u] = a;
      if (!(o && [ur, cr].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof u == "function") {
            var m;
            (m = r.get(f)) == null || m.push(u), l[f] = function() {
              for (var p, c = arguments.length, h = new Array(c), g = 0; g < c; g++)
                h[g] = arguments[g];
              return (p = r.get(f)) == null ? void 0 : p.map((b) => b(...h)).find((b) => b !== void 0);
            };
          }
        } else
          l[f] = u;
    }), l), {})
  };
}
function Ss(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = S.useCallback(
    (s) => Gt(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = S.useCallback(
    (s) => Gt(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = S.useCallback(
    (s) => Gt(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return S.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
function fr(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const Cs = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: a = 0,
      scrollRef: f,
      ...u
    } = Ze(e, t), {
      rects: m,
      elements: {
        floating: p
      }
    } = t, c = n.current[l], h = (f == null ? void 0 : f.current) || p, g = p.clientTop || h.clientTop, b = p.clientTop !== 0, w = h.clientTop !== 0, E = p === h;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || gs('`placement` side must be "bottom" when using the `inner`', "middleware.")), !c)
      return {};
    const y = {
      ...t,
      ...await Xr(-c.offsetTop - p.clientTop - m.reference.height / 2 - c.offsetHeight / 2 - i).fn(t)
    }, R = await zt(fr(y, h.scrollHeight + g + p.clientTop), u), C = await zt(y, {
      ...u,
      elementContext: "reference"
    }), A = le(0, R.top), P = y.y + A, W = h.scrollHeight > h.clientHeight, N = (W ? (O) => O : st)(le(0, h.scrollHeight + (b && E || w ? g * 2 : 0) - A - le(0, R.bottom)));
    if (h.style.maxHeight = N + "px", h.scrollTop = A, o) {
      const O = W && h.offsetHeight < c.offsetHeight * s - 1 || C.top >= -a || C.bottom >= -a;
      wt.flushSync(() => o(O));
    }
    return r && (r.current = await zt(fr({
      ...y,
      y: P
    }, h.offsetHeight + g + p.clientTop), u)), {
      y: P
    };
  }
});
function Ps(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, a = Jr(s), f = S.useRef(!1), u = S.useRef(null), m = S.useRef(null);
  S.useEffect(() => {
    if (!o) return;
    function c(g) {
      if (g.ctrlKey || !h || i.current == null)
        return;
      const b = g.deltaY, w = i.current.top >= -0.5, E = i.current.bottom >= -0.5, y = h.scrollHeight - h.clientHeight, R = b < 0 ? -1 : 1, C = b < 0 ? "max" : "min";
      h.scrollHeight <= h.clientHeight || (!w && b > 0 || !E && b < 0 ? (g.preventDefault(), wt.flushSync(() => {
        a((A) => A + Math[C](b, y * R));
      })) : /firefox/i.test(Tl()) && (h.scrollTop += b));
    }
    const h = (l == null ? void 0 : l.current) || r.floating;
    if (n && h)
      return h.addEventListener("wheel", c), requestAnimationFrame(() => {
        u.current = h.scrollTop, i.current != null && (m.current = {
          ...i.current
        });
      }), () => {
        u.current = null, m.current = null, h.removeEventListener("wheel", c);
      };
  }, [o, n, r.floating, i, l, a]);
  const p = S.useMemo(() => ({
    onKeyDown() {
      f.current = !0;
    },
    onWheel() {
      f.current = !1;
    },
    onPointerMove() {
      f.current = !1;
    },
    onScroll() {
      const c = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !c || !f.current)) {
        if (u.current !== null) {
          const h = c.scrollTop - u.current;
          (i.current.bottom < -0.5 && h < -1 || i.current.top < -0.5 && h > 1) && wt.flushSync(() => a((g) => g + h));
        }
        requestAnimationFrame(() => {
          u.current = c.scrollTop;
        });
      }
    }
  }), [r.floating, a, i, l]);
  return S.useMemo(() => o ? {
    floating: p
  } : {}, [o, p]);
}
let Je = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Je.displayName = "FloatingContext";
let Rn = pe(null);
Rn.displayName = "PlacementContext";
function Fs(e) {
  return Z(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Os() {
  return re(Je).setReference;
}
function As() {
  return re(Je).getReferenceProps;
}
function Ms() {
  let { getFloatingProps: e, slot: t } = re(Je);
  return X((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function js(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = re(Rn), n = Z(() => e, [JSON.stringify(e, (o, i) => {
    var l;
    return (l = i == null ? void 0 : i.outerHTML) != null ? l : i;
  })]);
  U(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = re(Je);
  return Z(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let dr = 4;
function Is({ children: e, enabled: t = !0 }) {
  let [n, r] = G(null), [o, i] = G(0), l = I(null), [s, a] = G(null);
  ks(s);
  let f = t && n !== null && s !== null, { to: u = "bottom", gap: m = 0, offset: p = 0, padding: c = 0, inner: h } = Ls(n, s), [g, b = "center"] = u.split(" ");
  U(() => {
    f && i(0);
  }, [f]);
  let { refs: w, floatingStyles: E, context: y } = Rs({ open: f, placement: g === "selection" ? b === "center" ? "bottom" : `bottom-${b}` : b === "center" ? `${g}` : `${g}-${b}`, strategy: "absolute", transform: !1, middleware: [Xr({ mainAxis: g === "selection" ? 0 : m, crossAxis: p }), ss({ padding: c }), g !== "selection" && as({ padding: c }), g === "selection" && h ? Cs({ ...h, padding: c, overflowRef: l, offset: o, minItemsVisible: dr, referenceOverflowThreshold: c, onFallbackChange(O) {
    var Y, _;
    if (!O) return;
    let k = y.elements.floating;
    if (!k) return;
    let Q = parseFloat(getComputedStyle(k).scrollPaddingBottom) || 0, z = Math.min(dr, k.childElementCount), ee = 0, $ = 0;
    for (let L of (_ = (Y = y.elements.floating) == null ? void 0 : Y.childNodes) != null ? _ : []) if (L instanceof HTMLElement) {
      let K = L.offsetTop, ge = K + L.clientHeight + Q, we = k.scrollTop, te = we + k.clientHeight;
      if (K >= we && ge <= te) z--;
      else {
        $ = Math.max(0, Math.min(ge, te) - Math.max(K, we)), ee = L.clientHeight;
        break;
      }
    }
    z >= 1 && i((L) => {
      let K = ee * z - $ + Q;
      return L >= K ? L : K;
    });
  } }) : null, us({ padding: c, apply({ availableWidth: O, availableHeight: Y, elements: _ }) {
    Object.assign(_.floating.style, { overflow: "auto", maxWidth: `${O}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${Y}px)` });
  } })].filter(Boolean), whileElementsMounted: es }), [R = g, C = b] = y.placement.split("-");
  g === "selection" && (R = "selection");
  let A = Z(() => ({ anchor: [R, C].filter(Boolean).join(" ") }), [R, C]), P = Ps(y, { overflowRef: l, onChange: i }), { getReferenceProps: W, getFloatingProps: q } = Ss([P]), N = D((O) => {
    a(O), w.setFloating(O);
  });
  return S.createElement(Rn.Provider, { value: r }, S.createElement(Je.Provider, { value: { setFloating: N, setReference: w.setReference, styles: E, getReferenceProps: W, getFloatingProps: q, slot: A } }, e));
}
function ks(e) {
  U(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Ls(e, t) {
  var n, r, o;
  let i = qt((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = qt((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = qt((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function qt(e, t, n = void 0) {
  let r = ft(), o = D((a, f) => {
    if (a == null) return [n, null];
    if (typeof a == "number") return [a, null];
    if (typeof a == "string") {
      if (!f) return [n, null];
      let u = pr(a, f);
      return [u, (m) => {
        let p = Qr(a);
        {
          let c = p.map((h) => window.getComputedStyle(f).getPropertyValue(h));
          r.requestAnimationFrame(function h() {
            r.nextFrame(h);
            let g = !1;
            for (let [w, E] of p.entries()) {
              let y = window.getComputedStyle(f).getPropertyValue(E);
              if (c[w] !== y) {
                c[w] = y, g = !0;
                break;
              }
            }
            if (!g) return;
            let b = pr(a, f);
            u !== b && (m(b), u = b);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = Z(() => o(e, t)[0], [e, t]), [l = i, s] = G();
  return U(() => {
    let [a, f] = o(e, t);
    if (s(a), !!f) return f(s);
  }, [e, t]), l;
}
function Qr(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Qr(o)] : [r];
  }
  return [];
}
function pr(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
let Sn = pe(null);
Sn.displayName = "OpenClosedContext";
var ve = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ve || {});
function Cn() {
  return re(Sn);
}
function eo({ value: e, children: t }) {
  return V.createElement(Sn.Provider, { value: e }, t);
}
function Ds(e) {
  throw new Error("Unexpected object: " + e);
}
var se = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(se || {});
function Xt(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Ds(e);
  }
}
function Ns(e) {
  let t = D(e), n = I(!1);
  ie(() => (n.current = !1, () => {
    n.current = !0, Rr(() => {
      n.current && t();
    });
  }), [t]);
}
function _s() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in S ? ((t) => t.useSyncExternalStore)(S)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Pn() {
  let e = _s(), [t, n] = S.useState(De.isHandoffComplete);
  return t && De.isHandoffComplete === !1 && n(!1), S.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), S.useEffect(() => De.handoff(), []), e ? !1 : t;
}
let Hs = pe(!1);
function Ws() {
  return re(Hs);
}
function Bs(e) {
  let t = Ws(), n = re(no), r = wn(e), [o, i] = G(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (De.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let a = r.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(a);
  });
  return ie(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), ie(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let to = be, Vs = ce(function(e, t) {
  let n = e, r = I(null), o = ye(ji((m) => {
    r.current = m;
  }), t), i = wn(r), l = Bs(r), [s] = G(() => {
    var m;
    return De.isServer ? null : (m = i == null ? void 0 : i.createElement("div")) != null ? m : null;
  }), a = re(Ks), f = Pn();
  U(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), U(() => {
    if (s && a) return a.register(s);
  }, [a, s]), Ns(() => {
    var m;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((m = l.parentElement) == null || m.removeChild(l)));
  });
  let u = fe();
  return f ? !l || !s ? null : Wo(u({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: to, name: "Portal" }), s) : null;
});
function Us(e, t) {
  let n = ye(t), { enabled: r = !0, ...o } = e, i = fe();
  return r ? V.createElement(Vs, { ...o, ref: n }) : i({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: to, name: "Portal" });
}
let Ys = be, no = pe(null);
function zs(e, t) {
  let { target: n, ...r } = e, o = { ref: ye(t) }, i = fe();
  return V.createElement(no.Provider, { value: n }, i({ ourProps: o, theirProps: r, defaultTag: Ys, name: "Popover.Group" }));
}
let Ks = pe(null), Gs = ce(Us), qs = ce(zs), Xs = Object.assign(Gs, { Group: qs });
function Zs() {
  let e = I(!1);
  return U(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ro(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : io) !== be || V.Children.count(e.children) === 1;
}
let jt = pe(null);
jt.displayName = "TransitionContext";
var Js = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Js || {});
function Qs() {
  let e = re(jt);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function ea() {
  let e = re(It);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let It = pe(null);
It.displayName = "NestingContext";
function kt(e) {
  return "children" in e ? kt(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function oo(e, t) {
  let n = qe(e), r = I([]), o = Zs(), i = ft(), l = D((c, h = Pe.Hidden) => {
    let g = r.current.findIndex(({ el: b }) => b === c);
    g !== -1 && (Be(h, { [Pe.Unmount]() {
      r.current.splice(g, 1);
    }, [Pe.Hidden]() {
      r.current[g].state = "hidden";
    } }), i.microTask(() => {
      var b;
      !kt(r) && o.current && ((b = n.current) == null || b.call(n));
    }));
  }), s = D((c) => {
    let h = r.current.find(({ el: g }) => g === c);
    return h ? h.state !== "visible" && (h.state = "visible") : r.current.push({ el: c, state: "visible" }), () => l(c, Pe.Unmount);
  }), a = I([]), f = I(Promise.resolve()), u = I({ enter: [], leave: [] }), m = D((c, h, g) => {
    a.current.splice(0), t && (t.chains.current[h] = t.chains.current[h].filter(([b]) => b !== c)), t == null || t.chains.current[h].push([c, new Promise((b) => {
      a.current.push(b);
    })]), t == null || t.chains.current[h].push([c, new Promise((b) => {
      Promise.all(u.current[h].map(([w, E]) => E)).then(() => b());
    })]), h === "enter" ? f.current = f.current.then(() => t == null ? void 0 : t.wait.current).then(() => g(h)) : g(h);
  }), p = D((c, h, g) => {
    Promise.all(u.current[h].splice(0).map(([b, w]) => w)).then(() => {
      var b;
      (b = a.current.shift()) == null || b();
    }).then(() => g(h));
  });
  return Z(() => ({ children: r, register: s, unregister: l, onStart: m, onStop: p, wait: f, chains: u }), [s, l, r, m, p, u, f]);
}
let io = be, lo = Tt.RenderStrategy;
function ta(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: a, enter: f, enterFrom: u, enterTo: m, entered: p, leave: c, leaveFrom: h, leaveTo: g, ...b } = e, [w, E] = G(null), y = I(null), R = ro(e), C = ye(...R ? [y, t, E] : t === null ? [] : [t]), A = (n = b.unmount) == null || n ? Pe.Unmount : Pe.Hidden, { show: P, appear: W, initial: q } = Qs(), [N, O] = G(P ? "visible" : "hidden"), Y = ea(), { register: _, unregister: k } = Y;
  U(() => _(y), [_, y]), U(() => {
    if (A === Pe.Hidden && y.current) {
      if (P && N !== "visible") {
        O("visible");
        return;
      }
      return Be(N, { hidden: () => k(y), visible: () => _(y) });
    }
  }, [N, y, _, k, P, A]);
  let Q = Pn();
  U(() => {
    if (R && Q && N === "visible" && y.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, N, Q, R]);
  let z = q && !W, ee = W && P && q, $ = I(!1), L = oo(() => {
    $.current || (O("hidden"), k(y));
  }, Y), K = D((je) => {
    $.current = !0;
    let Re = je ? "enter" : "leave";
    L.onStart(y, Re, (Se) => {
      Se === "enter" ? i == null || i() : Se === "leave" && (s == null || s());
    });
  }), ge = D((je) => {
    let Re = je ? "enter" : "leave";
    $.current = !1, L.onStop(y, Re, (Se) => {
      Se === "enter" ? l == null || l() : Se === "leave" && (a == null || a());
    }), Re === "leave" && !kt(L) && (O("hidden"), k(y));
  });
  ie(() => {
    R && o || (K(P), ge(P));
  }, [P, R, o]);
  let we = !(!o || !R || !Q || z), [, te] = _r(we, w, P, { start: K, end: ge }), Dt = Ie({ ref: C, className: ((r = rn(b.className, ee && f, ee && u, te.enter && f, te.enter && te.closed && u, te.enter && !te.closed && m, te.leave && c, te.leave && !te.closed && h, te.leave && te.closed && g, !te.transition && P && p)) == null ? void 0 : r.trim()) || void 0, ...Nr(te) }), Me = 0;
  N === "visible" && (Me |= ve.Open), N === "hidden" && (Me |= ve.Closed), te.enter && (Me |= ve.Opening), te.leave && (Me |= ve.Closing);
  let Qe = fe();
  return V.createElement(It.Provider, { value: L }, V.createElement(eo, { value: Me }, Qe({ ourProps: Dt, theirProps: b, defaultTag: io, features: lo, visible: N === "visible", name: "Transition.Child" })));
}
function na(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = I(null), s = ro(e), a = ye(...s ? [l, t] : t === null ? [] : [t]);
  Pn();
  let f = Cn();
  if (n === void 0 && f !== null && (n = (f & ve.Open) === ve.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [u, m] = G(n ? "visible" : "hidden"), p = oo(() => {
    n || m("hidden");
  }), [c, h] = G(!0), g = I([n]);
  U(() => {
    c !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n), h(!1));
  }, [g, n]);
  let b = Z(() => ({ show: n, appear: r, initial: c }), [n, r, c]);
  U(() => {
    n ? m("visible") : !kt(p) && l.current !== null && m("hidden");
  }, [n, p]);
  let w = { unmount: o }, E = D(() => {
    var C;
    c && h(!1), (C = e.beforeEnter) == null || C.call(e);
  }), y = D(() => {
    var C;
    c && h(!1), (C = e.beforeLeave) == null || C.call(e);
  }), R = fe();
  return V.createElement(It.Provider, { value: p }, V.createElement(jt.Provider, { value: b }, R({ ourProps: { ...w, as: be, children: V.createElement(so, { ref: a, ...w, ...i, beforeEnter: E, beforeLeave: y }) }, theirProps: {}, defaultTag: be, features: lo, visible: u === "visible", name: "Transition" })));
}
function ra(e, t) {
  let n = re(jt) !== null, r = Cn() !== null;
  return V.createElement(V.Fragment, null, !n && r ? V.createElement(dn, { ref: t, ...e }) : V.createElement(so, { ref: t, ...e }));
}
let dn = ce(na), so = ce(ta), oa = ce(ra), ao = Object.assign(dn, { Child: oa, Root: dn });
function ia(e, t) {
  let n = I({ left: 0, top: 0 });
  if (U(() => {
    if (!t) return;
    let o = t.getBoundingClientRect();
    o && (n.current = o);
  }, [e, t]), t == null || !e || t === document.activeElement) return !1;
  let r = t.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let mr = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function hr(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return r;
  let i = !1;
  for (let s of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), i = !0;
  let l = i ? (n = o.innerText) != null ? n : "" : r;
  return mr.test(l) && (l = l.replace(mr, "")), l;
}
function la(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let i = document.getElementById(o);
      if (i) {
        let l = i.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : hr(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return hr(e).trim();
}
function sa(e) {
  let t = I(""), n = I("");
  return D(() => {
    let r = e.current;
    if (!r) return "";
    let o = r.innerText;
    if (t.current === o) return n.current;
    let i = la(r).trim().toLowerCase();
    return t.current = o, n.current = i, i;
  });
}
var aa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(aa || {}), ua = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(ua || {}), ca = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e[e.SetButtonElement = 7] = "SetButtonElement", e[e.SetItemsElement = 8] = "SetItemsElement", e))(ca || {});
function Zt(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = Lr(t(e.items.slice()), (i) => i.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { items: r, activeItemIndex: o };
}
let fa = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, t) => {
  var n, r, o, i, l;
  if (e.menuState === 1) return e;
  let s = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === se.Nothing) return { ...s, activeItemIndex: null };
  if (t.focus === se.Specific) return { ...s, activeItemIndex: e.items.findIndex((u) => u.id === t.id) };
  if (t.focus === se.Previous) {
    let u = e.activeItemIndex;
    if (u !== null) {
      let m = e.items[u].dataRef.current.domRef, p = Xt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
      if (p !== null) {
        let c = e.items[p].dataRef.current.domRef;
        if (((r = m.current) == null ? void 0 : r.previousElementSibling) === c.current || ((o = c.current) == null ? void 0 : o.previousElementSibling) === null) return { ...s, activeItemIndex: p };
      }
    }
  } else if (t.focus === se.Next) {
    let u = e.activeItemIndex;
    if (u !== null) {
      let m = e.items[u].dataRef.current.domRef, p = Xt(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
      if (p !== null) {
        let c = e.items[p].dataRef.current.domRef;
        if (((i = m.current) == null ? void 0 : i.nextElementSibling) === c.current || ((l = c.current) == null ? void 0 : l.nextElementSibling) === null) return { ...s, activeItemIndex: p };
      }
    }
  }
  let a = Zt(e), f = Xt(t, { resolveItems: () => a.items, resolveActiveIndex: () => a.activeItemIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled });
  return { ...s, ...a, activeItemIndex: f };
}, 3: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((l) => {
    var s;
    return ((s = l.dataRef.current.textValue) == null ? void 0 : s.startsWith(r)) && !l.dataRef.current.disabled;
  }), i = o ? e.items.indexOf(o) : -1;
  return i === -1 || i === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: i, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, t) => {
  let n = Zt(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, 6: (e, t) => {
  let n = Zt(e, (r) => {
    let o = r.findIndex((i) => i.id === t.id);
    return o !== -1 && r.splice(o, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
}, 7: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 8: (e, t) => e.itemsElement === t.element ? e : { ...e, itemsElement: t.element } }, Fn = pe(null);
Fn.displayName = "MenuContext";
function Lt(e) {
  let t = re(Fn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Lt), n;
  }
  return t;
}
function da(e, t) {
  return Be(t.type, fa, e, t);
}
let pa = be;
function ma(e, t) {
  let { __demoMode: n = !1, ...r } = e, o = gr(da, { __demoMode: n, menuState: n ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i, itemsElement: l, buttonElement: s }, a] = o, f = ye(t);
  sl(i === 0, [s, l], (h, g) => {
    a({ type: 1 }), yn(g, xn.Loose) || (h.preventDefault(), s == null || s.focus());
  });
  let u = D(() => {
    a({ type: 1 });
  }), m = Z(() => ({ open: i === 0, close: u }), [i, u]), p = { ref: f }, c = fe();
  return V.createElement(Is, null, V.createElement(Fn.Provider, { value: o }, V.createElement(eo, { value: Be(i, { 0: ve.Open, 1: ve.Closed }) }, c({ ourProps: p, theirProps: r, slot: m, defaultTag: pa, name: "Menu" }))));
}
let ha = "button";
function ga(e, t) {
  var n;
  let r = We(), { id: o = `headlessui-menu-button-${r}`, disabled: i = !1, autoFocus: l = !1, ...s } = e, [a, f] = Lt("Menu.Button"), u = As(), m = ye(t, Os(), D((P) => f({ type: 7, element: P }))), p = D((P) => {
    switch (P.key) {
      case oe.Space:
      case oe.Enter:
      case oe.ArrowDown:
        P.preventDefault(), P.stopPropagation(), rt(() => f({ type: 0 })), f({ type: 2, focus: se.First });
        break;
      case oe.ArrowUp:
        P.preventDefault(), P.stopPropagation(), rt(() => f({ type: 0 })), f({ type: 2, focus: se.Last });
        break;
    }
  }), c = D((P) => {
    switch (P.key) {
      case oe.Space:
        P.preventDefault();
        break;
    }
  }), h = D((P) => {
    var W;
    if (Ai(P.currentTarget)) return P.preventDefault();
    i || (a.menuState === 0 ? (rt(() => f({ type: 1 })), (W = a.buttonElement) == null || W.focus({ preventScroll: !0 })) : (P.preventDefault(), f({ type: 0 })));
  }), { isFocusVisible: g, focusProps: b } = bi({ autoFocus: l }), { isHovered: w, hoverProps: E } = vi({ isDisabled: i }), { pressed: y, pressProps: R } = Ti({ disabled: i }), C = Z(() => ({ open: a.menuState === 0, active: y || a.menuState === 0, disabled: i, hover: w, focus: g, autofocus: l }), [a, w, g, y, i, l]), A = Pr(u(), { ref: m, id: o, type: al(e, a.buttonElement), "aria-haspopup": "menu", "aria-controls": (n = a.itemsElement) == null ? void 0 : n.id, "aria-expanded": a.menuState === 0, disabled: i || void 0, autoFocus: l, onKeyDown: p, onKeyUp: c, onClick: h }, b, E, R);
  return fe()({ ourProps: A, theirProps: s, slot: C, defaultTag: ha, name: "Menu.Button" });
}
let va = "div", ba = Tt.RenderStrategy | Tt.Static;
function xa(e, t) {
  var n, r;
  let o = We(), { id: i = `headlessui-menu-items-${o}`, anchor: l, portal: s = !1, modal: a = !0, transition: f = !1, ...u } = e, m = Fs(l), [p, c] = Lt("Menu.Items"), [h, g] = js(m), b = Ms(), [w, E] = G(null), y = ye(t, m ? h : null, D(($) => c({ type: 8, element: $ })), E), R = wn(p.itemsElement);
  m && (s = !0);
  let C = Cn(), [A, P] = _r(f, w, C !== null ? (C & ve.Open) === ve.Open : p.menuState === 0);
  Ki(A, p.buttonElement, () => {
    c({ type: 1 });
  });
  let W = p.__demoMode ? !1 : a && p.menuState === 0;
  ml(W, R);
  let q = p.__demoMode ? !1 : a && p.menuState === 0;
  zi(q, { allowed: X(() => [p.buttonElement, p.itemsElement], [p.buttonElement, p.itemsElement]) });
  let N = p.menuState !== 0, O = ia(N, p.buttonElement) ? !1 : A;
  ie(() => {
    let $ = p.itemsElement;
    $ && p.menuState === 0 && $ !== (R == null ? void 0 : R.activeElement) && $.focus({ preventScroll: !0 });
  }, [p.menuState, p.itemsElement, R]), wl(p.menuState === 0, { container: p.itemsElement, accept($) {
    return $.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : $.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk($) {
    $.setAttribute("role", "none");
  } });
  let Y = ft(), _ = D(($) => {
    var L, K, ge;
    switch (Y.dispose(), $.key) {
      case oe.Space:
        if (p.searchQuery !== "") return $.preventDefault(), $.stopPropagation(), c({ type: 3, value: $.key });
      case oe.Enter:
        if ($.preventDefault(), $.stopPropagation(), c({ type: 1 }), p.activeItemIndex !== null) {
          let { dataRef: we } = p.items[p.activeItemIndex];
          (K = (L = we.current) == null ? void 0 : L.domRef.current) == null || K.click();
        }
        kr(p.buttonElement);
        break;
      case oe.ArrowDown:
        return $.preventDefault(), $.stopPropagation(), c({ type: 2, focus: se.Next });
      case oe.ArrowUp:
        return $.preventDefault(), $.stopPropagation(), c({ type: 2, focus: se.Previous });
      case oe.Home:
      case oe.PageUp:
        return $.preventDefault(), $.stopPropagation(), c({ type: 2, focus: se.First });
      case oe.End:
      case oe.PageDown:
        return $.preventDefault(), $.stopPropagation(), c({ type: 2, focus: se.Last });
      case oe.Escape:
        $.preventDefault(), $.stopPropagation(), rt(() => c({ type: 1 })), (ge = p.buttonElement) == null || ge.focus({ preventScroll: !0 });
        break;
      case oe.Tab:
        $.preventDefault(), $.stopPropagation(), rt(() => c({ type: 1 })), nl(p.buttonElement, $.shiftKey ? sn.Previous : sn.Next);
        break;
      default:
        $.key.length === 1 && (c({ type: 3, value: $.key }), Y.setTimeout(() => c({ type: 4 }), 350));
        break;
    }
  }), k = D(($) => {
    switch ($.key) {
      case oe.Space:
        $.preventDefault();
        break;
    }
  }), Q = Z(() => ({ open: p.menuState === 0 }), [p.menuState]), z = Pr(m ? b() : {}, { "aria-activedescendant": p.activeItemIndex === null || (n = p.items[p.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = p.buttonElement) == null ? void 0 : r.id, id: i, onKeyDown: _, onKeyUp: k, role: "menu", tabIndex: p.menuState === 0 ? 0 : void 0, ref: y, style: { ...u.style, ...g, "--button-width": Vi(p.buttonElement, !0).width }, ...Nr(P) }), ee = fe();
  return V.createElement(Xs, { enabled: s ? e.static || A : !1 }, ee({ ourProps: z, theirProps: u, slot: Q, defaultTag: va, features: ba, visible: O, name: "Menu.Items" }));
}
let ya = be;
function wa(e, t) {
  let n = We(), { id: r = `headlessui-menu-item-${n}`, disabled: o = !1, ...i } = e, [l, s] = Lt("Menu.Item"), a = l.activeItemIndex !== null ? l.items[l.activeItemIndex].id === r : !1, f = I(null), u = ye(t, f);
  U(() => {
    if (!l.__demoMode && l.menuState === 0 && a && l.activationTrigger !== 0) return $e().requestAnimationFrame(() => {
      var O, Y;
      (Y = (O = f.current) == null ? void 0 : O.scrollIntoView) == null || Y.call(O, { block: "nearest" });
    });
  }, [l.__demoMode, f, a, l.menuState, l.activationTrigger, l.activeItemIndex]);
  let m = sa(f), p = I({ disabled: o, domRef: f, get textValue() {
    return m();
  } });
  U(() => {
    p.current.disabled = o;
  }, [p, o]), U(() => (s({ type: 5, id: r, dataRef: p }), () => s({ type: 6, id: r })), [p, r]);
  let c = D(() => {
    s({ type: 1 });
  }), h = D((O) => {
    if (o) return O.preventDefault();
    s({ type: 1 }), kr(l.buttonElement);
  }), g = D(() => {
    if (o) return s({ type: 2, focus: se.Nothing });
    s({ type: 2, focus: se.Specific, id: r });
  }), b = hl(), w = D((O) => {
    b.update(O), !o && (a || s({ type: 2, focus: se.Specific, id: r, trigger: 0 }));
  }), E = D((O) => {
    b.wasMoved(O) && (o || a || s({ type: 2, focus: se.Specific, id: r, trigger: 0 }));
  }), y = D((O) => {
    b.wasMoved(O) && (o || a && s({ type: 2, focus: se.Nothing }));
  }), [R, C] = Ar(), [A, P] = Ii(), W = Z(() => ({ active: a, focus: a, disabled: o, close: c }), [a, o, c]), q = { id: r, ref: u, role: "menuitem", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-labelledby": R, "aria-describedby": A, disabled: void 0, onClick: h, onFocus: g, onPointerEnter: w, onMouseEnter: w, onPointerMove: E, onMouseMove: E, onPointerLeave: y, onMouseLeave: y }, N = fe();
  return V.createElement(C, null, V.createElement(P, null, N({ ourProps: q, theirProps: i, slot: W, defaultTag: ya, name: "Menu.Item" })));
}
let Ea = "div";
function $a(e, t) {
  let [n, r] = Ar(), o = e, i = { ref: t, "aria-labelledby": n, role: "group" }, l = fe();
  return V.createElement(r, null, l({ ourProps: i, theirProps: o, slot: {}, defaultTag: Ea, name: "Menu.Section" }));
}
let Ta = "header";
function Ra(e, t) {
  let n = We(), { id: r = `headlessui-menu-heading-${n}`, ...o } = e, i = vn();
  U(() => i.register(r), [r, i.register]);
  let l = { id: r, ref: t, role: "presentation", ...i.props };
  return fe()({ ourProps: l, theirProps: o, slot: {}, defaultTag: Ta, name: "Menu.Heading" });
}
let Sa = "div";
function Ca(e, t) {
  let n = e, r = { ref: t, role: "separator" };
  return fe()({ ourProps: r, theirProps: n, slot: {}, defaultTag: Sa, name: "Menu.Separator" });
}
let Pa = ce(ma), Fa = ce(ga), Oa = ce(xa), Aa = ce(wa), Ma = ce($a), ja = ce(Ra), Ia = ce(Ca), ka = Object.assign(Pa, { Button: Fa, Items: Oa, Item: Aa, Section: Ma, Heading: ja, Separator: Ia });
const La = mn(({ isListExpanded: e }) => /* @__PURE__ */ v.jsx("i", { "data-testid": "chevron", className: `fi fi-sr-angle-small-${e ? "up" : "down"} leading-3.5 block size-3.5 text-sm text-neutral-detail-paler` })), uo = mn(({ details: e, isNavExpanded: t, isListExpanded: n }) => {
  const { icon: r, label: o, subItems: i, enabled: l } = e;
  return /* @__PURE__ */ v.jsxs("div", { className: "flex w-full gap-3", children: [
    r && /* @__PURE__ */ v.jsx("i", { className: `${r} ml-0.5 mt-0.5 ${l ? "text-neutral-detail" : "text-controls-content-disabled"}`, "data-testid": r }),
    /* @__PURE__ */ v.jsxs(ao, { as: "div", show: t, enter: "ease-in duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", className: "flex flex-1 items-center", children: [
      /* @__PURE__ */ v.jsx("div", { className: `flex-1 text-nowrap text-left ${l ? "text-neutral-body" : "text-controls-content-disabled"}`, children: o }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-none", children: (i == null ? void 0 : i.length) && /* @__PURE__ */ v.jsx(La, { isListExpanded: n }) })
    ] })
  ] });
}), co = mn(({ url: e, onNavigate: t, menuItemDetails: n, isNavExpanded: r, shouldShowSubItems: o, isContentVisible: i }) => {
  const { label: l, subItems: s } = n;
  return /* @__PURE__ */ v.jsxs(ao, { enter: "ease-in duration-300", enterFrom: "transform opacity-0 max-h-0", enterTo: "transform opacity-100 max-h-96", leave: "ease-out duration-300", leaveFrom: "transform opacity-100 max-h-96", leaveTo: "transform opacity-0 max-h-0", show: i, as: "div", className: `${r ? "" : "absolute left-10 bg-neutral-layer-1 shadow-md rounded-md z-10 border border-neutral-detail-palest p-3"} ml-7 flex flex-col gap-3 pt-3`, children: [
    !r && /* @__PURE__ */ v.jsx("h2", { className: "text-neutral-body", children: l }),
    (s == null ? void 0 : s.length) && o && /* @__PURE__ */ v.jsx("ol", { className: "pl-5", children: s.map((f) => /* @__PURE__ */ v.jsx(fo, { url: e, onNavigate: t, details: f, isNavExpanded: r }, f.id)) })
  ] });
}), On = (e, t) => {
  if (!e || !t) return !1;
  const n = (r) => new URL(r, "http://placeholder.com").pathname.replace(/\/$/, "");
  return n(e) === n(t);
};
function fo({ url: e, details: t, isNavExpanded: n, isTopLevel: r, isContentVisible: o, onNavigate: i }) {
  const { link: l = "", label: s, enabled: a } = t, f = On(l, e);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsxs("div", { className: "menuItem relative", children: [
      !r && /* @__PURE__ */ v.jsx("div", { "data-testid": "menu-branch", className: "branch" }),
      /* @__PURE__ */ v.jsx("a", { href: a ? l : "", className: `${a ? "text-neutral-body" : "pointer-events-none text-controls-content-disabled"} ${f && "bg-controls-element-tonal"} link selected:bg-controls-element-tonal flex min-h-5 w-full items-center rounded-md px-3 py-2.5 hover:bg-controls-element-tonal-hover focus-visible:border-controls-highlight`, "aria-label": s, onClick: i, children: r ? /* @__PURE__ */ v.jsx(uo, { details: t, isNavExpanded: n }) : s })
    ] }),
    r && /* @__PURE__ */ v.jsx(co, { url: e, menuItemDetails: t, isContentVisible: r && o, shouldShowSubItems: !0, isNavExpanded: n })
  ] });
}
function Da({ url: e, details: t, onClick: n, isListExpanded: r, isNavExpanded: o, isContentVisible: i, onNavigate: l }) {
  const { label: s, subItems: a } = t, f = e && (a == null ? void 0 : a.find((p) => On(p.link, e))), m = o || r && !o;
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("button", { onClick: n, name: s, "aria-label": s, className: `${f ? "bg-controls-element-tonal" : ""} flex min-h-5 w-full items-center gap-3 rounded-md px-3 py-2.5 text-neutral-body hover:bg-controls-element-tonal-hover focus-visible:border-controls-highlight`, children: /* @__PURE__ */ v.jsx(uo, { details: t, isNavExpanded: o, isListExpanded: r }) }),
    /* @__PURE__ */ v.jsx(co, { url: e, menuItemDetails: t, isContentVisible: i, shouldShowSubItems: m, isNavExpanded: o, onNavigate: l })
  ] });
}
function Na({ url: e, menuItemDetails: t, isListExpanded: n, collapseSubItemsExcept: r, isNavExpanded: o }) {
  const [i, l] = G(!1), { id: s, subItems: a } = t, f = X(() => {
    r(n ? "" : s);
  }, [r, s, n]), u = X(() => {
    o || (r(""), l(!1));
  }, [o, r, l]), m = () => l(!0), p = () => l(!1), c = n || !o && i;
  return /* @__PURE__ */ v.jsx("li", { className: "flex flex-col justify-between", onFocus: m, onMouseOver: m, onBlur: p, onMouseOut: p, children: a ? /* @__PURE__ */ v.jsx(Da, { url: e, details: t, isNavExpanded: o, onClick: f, isListExpanded: n, isContentVisible: c, onNavigate: u }) : /* @__PURE__ */ v.jsx(fo, { url: e, onNavigate: u, details: t, isNavExpanded: o, isTopLevel: !0, isContentVisible: c }) });
}
const _a = "min-w-72", Ha = "min-w-20";
function Wa({ url: e, menuItems: t }) {
  var f;
  const n = e && ((f = t == null ? void 0 : t.find((u) => {
    var m;
    return (m = u.subItems) == null ? void 0 : m.find((p) => On(p.link, e));
  })) == null ? void 0 : f.id), [r, o] = G(!0), [i, l] = G(n || ""), s = X((u) => l(u || ""), []), a = X(() => {
    r && l(""), o(!r);
  }, [r]);
  return /* @__PURE__ */ v.jsxs("nav", { id: "main-nav", "aria-label": "Main", className: `flex h-full flex-col divide-y divide-neutral-detail-palest duration-300 ease-in-out ${r ? _a : Ha}`, children: [
    /* @__PURE__ */ v.jsx(qo, { isNavExpanded: r }),
    /* @__PURE__ */ v.jsx("ol", { className: "grow flex-col gap-3 overflow-hidden p-4", children: t == null ? void 0 : t.map((u) => /* @__PURE__ */ v.jsx(Na, { url: e, menuItemDetails: u, isListExpanded: u.id === i, collapseSubItemsExcept: s, isNavExpanded: r }, u.id)) }),
    /* @__PURE__ */ v.jsx(ei, { isNavExpanded: r, toggleNavExpanded: a })
  ] });
}
const Ba = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/dashboard",
    icon: "fi-rr-bullseye-arrow",
    enabled: !0
  },
  {
    id: "my-work",
    label: "My work",
    link: "/my-work",
    icon: "fi-rr-completed",
    enabled: !0
  },
  {
    id: "moves",
    label: "Moves",
    icon: "fi-rr-track",
    enabled: !0,
    subItems: [
      {
        id: "cases",
        label: "Cases",
        link: "/cases",
        enabled: !0
      },
      {
        id: "scenarios",
        label: "Scenarios",
        link: "/scenarios",
        enabled: !0
      }
    ]
  },
  {
    id: "talent",
    label: "Talent",
    link: "/talent",
    icon: "fi-rr-user",
    enabled: !0
  },
  {
    id: "discovery",
    label: "Discovery",
    link: "/discovery",
    icon: "fi-rr-search",
    enabled: !0
  },
  {
    id: "company",
    label: "Company",
    link: "/company",
    icon: "fi-rr-building",
    enabled: !0
  }
];
function Ka({ children: e }) {
  return /* @__PURE__ */ v.jsxs("div", { className: "flex h-screen flex-col", children: [
    /* @__PURE__ */ v.jsxs("header", { className: "flex h-16 items-center justify-between border-b border-neutral-detail-palest bg-neutral-layer-2 px-4", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ v.jsx("span", { className: "text-neutral-body", children: "Moves" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-neutral-detail-pale", children: "/" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-neutral-body", children: "Cases" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-neutral-detail-pale", children: "/" }),
        /* @__PURE__ */ v.jsx("span", { className: "text-neutral-body", children: "Case ID" })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ v.jsx(
          Yo,
          {
            name: "search",
            placeholder: "Search",
            icon: "fi-rr-search",
            variant: "tonal"
          }
        ),
        /* @__PURE__ */ v.jsx("button", { className: "rounded-full p-2 hover:bg-neutral-detail-palest", children: /* @__PURE__ */ v.jsx("i", { className: "fi fi-rr-settings flex text-neutral-detail-bold" }) }),
        /* @__PURE__ */ v.jsx("button", { className: "rounded-full p-2 hover:bg-neutral-detail-palest", children: /* @__PURE__ */ v.jsx("i", { className: "fi fi-rr-bell flex text-neutral-detail-bold" }) }),
        /* @__PURE__ */ v.jsx(zo, { children: "GM" })
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
      /* @__PURE__ */ v.jsx(Wa, { menuItems: Ba, url: "/cases" }),
      /* @__PURE__ */ v.jsx("main", { className: "flex-1 overflow-auto bg-neutral-layer-1 p-6", children: e })
    ] })
  ] });
}
function Ga({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ v.jsx(ka, { as: "div", className: `inline-block ${e}`, ...n, children: t });
}
export {
  zo as Avatar,
  Ka as MainLayout,
  Ga as Menu,
  Wa as NavigationMenu,
  Wa as SideMenu,
  Ka as TopBar
};
