function Qy(i, o) {
  for (var d = 0; d < o.length; d++) {
    const s = o[d];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const b in s)
        if (b !== "default" && !(b in i)) {
          const O = Object.getOwnPropertyDescriptor(s, b);
          O && Object.defineProperty(i, b, O.get ? O : {
            enumerable: !0,
            get: () => s[b]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var wv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function a0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var zc = { exports: {} }, et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function jy() {
  if (Cd) return et;
  Cd = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), p = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), H = Symbol.iterator;
  function N(h) {
    return h === null || typeof h != "object" ? null : (h = H && h[H] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, Z = {};
  function V(h, U, G) {
    this.props = h, this.context = U, this.refs = Z, this.updater = G || q;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(h, U) {
    if (typeof h != "object" && typeof h != "function" && h != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, h, U, "setState");
  }, V.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function $() {
  }
  $.prototype = V.prototype;
  function P(h, U, G) {
    this.props = h, this.context = U, this.refs = Z, this.updater = G || q;
  }
  var w = P.prototype = new $();
  w.constructor = P, C(w, V.prototype), w.isPureReactComponent = !0;
  var K = Array.isArray, j = { H: null, A: null, T: null, S: null, V: null }, tt = Object.prototype.hasOwnProperty;
  function nt(h, U, G, X, J, st) {
    return G = st.ref, {
      $$typeof: i,
      type: h,
      key: U,
      ref: G !== void 0 ? G : null,
      props: st
    };
  }
  function vt(h, U) {
    return nt(
      h.type,
      U,
      void 0,
      void 0,
      void 0,
      h.props
    );
  }
  function zt(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function Rt(h) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(G) {
      return U[G];
    });
  }
  var Dt = /\/+/g;
  function dt(h, U) {
    return typeof h == "object" && h !== null && h.key != null ? Rt("" + h.key) : U.toString(36);
  }
  function _t() {
  }
  function bt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (typeof h.status == "string" ? h.then(_t, _t) : (h.status = "pending", h.then(
          function(U) {
            h.status === "pending" && (h.status = "fulfilled", h.value = U);
          },
          function(U) {
            h.status === "pending" && (h.status = "rejected", h.reason = U);
          }
        )), h.status) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function At(h, U, G, X, J) {
    var st = typeof h;
    (st === "undefined" || st === "boolean") && (h = null);
    var I = !1;
    if (h === null) I = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case i:
            case o:
              I = !0;
              break;
            case z:
              return I = h._init, At(
                I(h._payload),
                U,
                G,
                X,
                J
              );
          }
      }
    if (I)
      return J = J(h), I = X === "" ? "." + dt(h, 0) : X, K(J) ? (G = "", I != null && (G = I.replace(Dt, "$&/") + "/"), At(J, U, G, "", function(te) {
        return te;
      })) : J != null && (zt(J) && (J = vt(
        J,
        G + (J.key == null || h && h.key === J.key ? "" : ("" + J.key).replace(
          Dt,
          "$&/"
        ) + "/") + I
      )), U.push(J)), 1;
    I = 0;
    var ll = X === "" ? "." : X + ":";
    if (K(h))
      for (var Ot = 0; Ot < h.length; Ot++)
        X = h[Ot], st = ll + dt(X, Ot), I += At(
          X,
          U,
          G,
          st,
          J
        );
    else if (Ot = N(h), typeof Ot == "function")
      for (h = Ot.call(h), Ot = 0; !(X = h.next()).done; )
        X = X.value, st = ll + dt(X, Ot++), I += At(
          X,
          U,
          G,
          st,
          J
        );
    else if (st === "object") {
      if (typeof h.then == "function")
        return At(
          bt(h),
          U,
          G,
          X,
          J
        );
      throw U = String(h), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function E(h, U, G) {
    if (h == null) return h;
    var X = [], J = 0;
    return At(h, X, "", "", function(st) {
      return U.call(G, st, J++);
    }), X;
  }
  function B(h) {
    if (h._status === -1) {
      var U = h._result;
      U = U(), U.then(
        function(G) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = G);
        },
        function(G) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = G);
        }
      ), h._status === -1 && (h._status = 0, h._result = U);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(h) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
        error: h
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", h);
      return;
    }
    console.error(h);
  };
  function lt() {
  }
  return et.Children = {
    map: E,
    forEach: function(h, U, G) {
      E(
        h,
        function() {
          U.apply(this, arguments);
        },
        G
      );
    },
    count: function(h) {
      var U = 0;
      return E(h, function() {
        U++;
      }), U;
    },
    toArray: function(h) {
      return E(h, function(U) {
        return U;
      }) || [];
    },
    only: function(h) {
      if (!zt(h))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return h;
    }
  }, et.Component = V, et.Fragment = d, et.Profiler = b, et.PureComponent = P, et.StrictMode = s, et.Suspense = R, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(h) {
      return j.H.useMemoCache(h);
    }
  }, et.cache = function(h) {
    return function() {
      return h.apply(null, arguments);
    };
  }, et.cloneElement = function(h, U, G) {
    if (h == null)
      throw Error(
        "The argument must be a React element, but you passed " + h + "."
      );
    var X = C({}, h.props), J = h.key, st = void 0;
    if (U != null)
      for (I in U.ref !== void 0 && (st = void 0), U.key !== void 0 && (J = "" + U.key), U)
        !tt.call(U, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && U.ref === void 0 || (X[I] = U[I]);
    var I = arguments.length - 2;
    if (I === 1) X.children = G;
    else if (1 < I) {
      for (var ll = Array(I), Ot = 0; Ot < I; Ot++)
        ll[Ot] = arguments[Ot + 2];
      X.children = ll;
    }
    return nt(h.type, J, void 0, void 0, st, X);
  }, et.createContext = function(h) {
    return h = {
      $$typeof: p,
      _currentValue: h,
      _currentValue2: h,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, h.Provider = h, h.Consumer = {
      $$typeof: O,
      _context: h
    }, h;
  }, et.createElement = function(h, U, G) {
    var X, J = {}, st = null;
    if (U != null)
      for (X in U.key !== void 0 && (st = "" + U.key), U)
        tt.call(U, X) && X !== "key" && X !== "__self" && X !== "__source" && (J[X] = U[X]);
    var I = arguments.length - 2;
    if (I === 1) J.children = G;
    else if (1 < I) {
      for (var ll = Array(I), Ot = 0; Ot < I; Ot++)
        ll[Ot] = arguments[Ot + 2];
      J.children = ll;
    }
    if (h && h.defaultProps)
      for (X in I = h.defaultProps, I)
        J[X] === void 0 && (J[X] = I[X]);
    return nt(h, st, void 0, void 0, null, J);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(h) {
    return { $$typeof: x, render: h };
  }, et.isValidElement = zt, et.lazy = function(h) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: h },
      _init: B
    };
  }, et.memo = function(h, U) {
    return {
      $$typeof: m,
      type: h,
      compare: U === void 0 ? null : U
    };
  }, et.startTransition = function(h) {
    var U = j.T, G = {};
    j.T = G;
    try {
      var X = h(), J = j.S;
      J !== null && J(G, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(lt, Y);
    } catch (st) {
      Y(st);
    } finally {
      j.T = U;
    }
  }, et.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, et.use = function(h) {
    return j.H.use(h);
  }, et.useActionState = function(h, U, G) {
    return j.H.useActionState(h, U, G);
  }, et.useCallback = function(h, U) {
    return j.H.useCallback(h, U);
  }, et.useContext = function(h) {
    return j.H.useContext(h);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(h, U) {
    return j.H.useDeferredValue(h, U);
  }, et.useEffect = function(h, U, G) {
    var X = j.H;
    if (typeof G == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return X.useEffect(h, U);
  }, et.useId = function() {
    return j.H.useId();
  }, et.useImperativeHandle = function(h, U, G) {
    return j.H.useImperativeHandle(h, U, G);
  }, et.useInsertionEffect = function(h, U) {
    return j.H.useInsertionEffect(h, U);
  }, et.useLayoutEffect = function(h, U) {
    return j.H.useLayoutEffect(h, U);
  }, et.useMemo = function(h, U) {
    return j.H.useMemo(h, U);
  }, et.useOptimistic = function(h, U) {
    return j.H.useOptimistic(h, U);
  }, et.useReducer = function(h, U, G) {
    return j.H.useReducer(h, U, G);
  }, et.useRef = function(h) {
    return j.H.useRef(h);
  }, et.useState = function(h) {
    return j.H.useState(h);
  }, et.useSyncExternalStore = function(h, U, G) {
    return j.H.useSyncExternalStore(
      h,
      U,
      G
    );
  }, et.useTransition = function() {
    return j.H.useTransition();
  }, et.version = "19.1.0", et;
}
var Xd;
function Cc() {
  return Xd || (Xd = 1, zc.exports = jy()), zc.exports;
}
var Xt = Cc();
const Zy = /* @__PURE__ */ a0(Xt), Kv = /* @__PURE__ */ Qy({
  __proto__: null,
  default: Zy
}, [Xt]);
var Rc = { exports: {} }, Na = {}, Mc = { exports: {} }, Dc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;
function Ly() {
  return Gd || (Gd = 1, function(i) {
    function o(E, B) {
      var Y = E.length;
      E.push(B);
      t: for (; 0 < Y; ) {
        var lt = Y - 1 >>> 1, h = E[lt];
        if (0 < b(h, B))
          E[lt] = B, E[Y] = h, Y = lt;
        else break t;
      }
    }
    function d(E) {
      return E.length === 0 ? null : E[0];
    }
    function s(E) {
      if (E.length === 0) return null;
      var B = E[0], Y = E.pop();
      if (Y !== B) {
        E[0] = Y;
        t: for (var lt = 0, h = E.length, U = h >>> 1; lt < U; ) {
          var G = 2 * (lt + 1) - 1, X = E[G], J = G + 1, st = E[J];
          if (0 > b(X, Y))
            J < h && 0 > b(st, X) ? (E[lt] = st, E[J] = Y, lt = J) : (E[lt] = X, E[G] = Y, lt = G);
          else if (J < h && 0 > b(st, Y))
            E[lt] = st, E[J] = Y, lt = J;
          else break t;
        }
      }
      return B;
    }
    function b(E, B) {
      var Y = E.sortIndex - B.sortIndex;
      return Y !== 0 ? Y : E.id - B.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var O = performance;
      i.unstable_now = function() {
        return O.now();
      };
    } else {
      var p = Date, x = p.now();
      i.unstable_now = function() {
        return p.now() - x;
      };
    }
    var R = [], m = [], z = 1, H = null, N = 3, q = !1, C = !1, Z = !1, V = !1, $ = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
    function K(E) {
      for (var B = d(m); B !== null; ) {
        if (B.callback === null) s(m);
        else if (B.startTime <= E)
          s(m), B.sortIndex = B.expirationTime, o(R, B);
        else break;
        B = d(m);
      }
    }
    function j(E) {
      if (Z = !1, K(E), !C)
        if (d(R) !== null)
          C = !0, tt || (tt = !0, dt());
        else {
          var B = d(m);
          B !== null && At(j, B.startTime - E);
        }
    }
    var tt = !1, nt = -1, vt = 5, zt = -1;
    function Rt() {
      return V ? !0 : !(i.unstable_now() - zt < vt);
    }
    function Dt() {
      if (V = !1, tt) {
        var E = i.unstable_now();
        zt = E;
        var B = !0;
        try {
          t: {
            C = !1, Z && (Z = !1, P(nt), nt = -1), q = !0;
            var Y = N;
            try {
              l: {
                for (K(E), H = d(R); H !== null && !(H.expirationTime > E && Rt()); ) {
                  var lt = H.callback;
                  if (typeof lt == "function") {
                    H.callback = null, N = H.priorityLevel;
                    var h = lt(
                      H.expirationTime <= E
                    );
                    if (E = i.unstable_now(), typeof h == "function") {
                      H.callback = h, K(E), B = !0;
                      break l;
                    }
                    H === d(R) && s(R), K(E);
                  } else s(R);
                  H = d(R);
                }
                if (H !== null) B = !0;
                else {
                  var U = d(m);
                  U !== null && At(
                    j,
                    U.startTime - E
                  ), B = !1;
                }
              }
              break t;
            } finally {
              H = null, N = Y, q = !1;
            }
            B = void 0;
          }
        } finally {
          B ? dt() : tt = !1;
        }
      }
    }
    var dt;
    if (typeof w == "function")
      dt = function() {
        w(Dt);
      };
    else if (typeof MessageChannel < "u") {
      var _t = new MessageChannel(), bt = _t.port2;
      _t.port1.onmessage = Dt, dt = function() {
        bt.postMessage(null);
      };
    } else
      dt = function() {
        $(Dt, 0);
      };
    function At(E, B) {
      nt = $(function() {
        E(i.unstable_now());
      }, B);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, i.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : vt = 0 < E ? Math.floor(1e3 / E) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, i.unstable_next = function(E) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = N;
      }
      var Y = N;
      N = B;
      try {
        return E();
      } finally {
        N = Y;
      }
    }, i.unstable_requestPaint = function() {
      V = !0;
    }, i.unstable_runWithPriority = function(E, B) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var Y = N;
      N = E;
      try {
        return B();
      } finally {
        N = Y;
      }
    }, i.unstable_scheduleCallback = function(E, B, Y) {
      var lt = i.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? lt + Y : lt) : Y = lt, E) {
        case 1:
          var h = -1;
          break;
        case 2:
          h = 250;
          break;
        case 5:
          h = 1073741823;
          break;
        case 4:
          h = 1e4;
          break;
        default:
          h = 5e3;
      }
      return h = Y + h, E = {
        id: z++,
        callback: B,
        priorityLevel: E,
        startTime: Y,
        expirationTime: h,
        sortIndex: -1
      }, Y > lt ? (E.sortIndex = Y, o(m, E), d(R) === null && E === d(m) && (Z ? (P(nt), nt = -1) : Z = !0, At(j, Y - lt))) : (E.sortIndex = h, o(R, E), C || q || (C = !0, tt || (tt = !0, dt()))), E;
    }, i.unstable_shouldYield = Rt, i.unstable_wrapCallback = function(E) {
      var B = N;
      return function() {
        var Y = N;
        N = B;
        try {
          return E.apply(this, arguments);
        } finally {
          N = Y;
        }
      };
    };
  }(Dc)), Dc;
}
var Qd;
function Vy() {
  return Qd || (Qd = 1, Mc.exports = Ly()), Mc.exports;
}
var _c = { exports: {} }, Wt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function wy() {
  if (jd) return Wt;
  jd = 1;
  var i = Cc();
  function o(R) {
    var m = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        m += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return "Minified React error #" + R + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d() {
  }
  var s = {
    d: {
      f: d,
      r: function() {
        throw Error(o(522));
      },
      D: d,
      C: d,
      L: d,
      m: d,
      X: d,
      S: d,
      M: d
    },
    p: 0,
    findDOMNode: null
  }, b = Symbol.for("react.portal");
  function O(R, m, z) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: H == null ? null : "" + H,
      children: R,
      containerInfo: m,
      implementation: z
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(R, m) {
    if (R === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Wt.createPortal = function(R, m) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(o(299));
    return O(R, m, null, z);
  }, Wt.flushSync = function(R) {
    var m = p.T, z = s.p;
    try {
      if (p.T = null, s.p = 2, R) return R();
    } finally {
      p.T = m, s.p = z, s.d.f();
    }
  }, Wt.preconnect = function(R, m) {
    typeof R == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, s.d.C(R, m));
  }, Wt.prefetchDNS = function(R) {
    typeof R == "string" && s.d.D(R);
  }, Wt.preinit = function(R, m) {
    if (typeof R == "string" && m && typeof m.as == "string") {
      var z = m.as, H = x(z, m.crossOrigin), N = typeof m.integrity == "string" ? m.integrity : void 0, q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      z === "style" ? s.d.S(
        R,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: H,
          integrity: N,
          fetchPriority: q
        }
      ) : z === "script" && s.d.X(R, {
        crossOrigin: H,
        integrity: N,
        fetchPriority: q,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, Wt.preinitModule = function(R, m) {
    if (typeof R == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var z = x(
            m.as,
            m.crossOrigin
          );
          s.d.M(R, {
            crossOrigin: z,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && s.d.M(R);
  }, Wt.preload = function(R, m) {
    if (typeof R == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var z = m.as, H = x(z, m.crossOrigin);
      s.d.L(R, z, {
        crossOrigin: H,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, Wt.preloadModule = function(R, m) {
    if (typeof R == "string")
      if (m) {
        var z = x(m.as, m.crossOrigin);
        s.d.m(R, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: z,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else s.d.m(R);
  }, Wt.requestFormReset = function(R) {
    s.d.r(R);
  }, Wt.unstable_batchedUpdates = function(R, m) {
    return R(m);
  }, Wt.useFormState = function(R, m, z) {
    return p.H.useFormState(R, m, z);
  }, Wt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Wt.version = "19.1.0", Wt;
}
var Zd;
function n0() {
  if (Zd) return _c.exports;
  Zd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), _c.exports = wy(), _c.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ld;
function Ky() {
  if (Ld) return Na;
  Ld = 1;
  var i = Vy(), o = Cc(), d = n0();
  function s(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function O(t) {
    var l = t, e = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (O(t) !== t)
      throw Error(s(188));
  }
  function R(t) {
    var l = t.alternate;
    if (!l) {
      if (l = O(t), l === null) throw Error(s(188));
      return l !== t ? null : t;
    }
    for (var e = t, u = l; ; ) {
      var a = e.return;
      if (a === null) break;
      var n = a.alternate;
      if (n === null) {
        if (u = a.return, u !== null) {
          e = u;
          continue;
        }
        break;
      }
      if (a.child === n.child) {
        for (n = a.child; n; ) {
          if (n === e) return x(a), t;
          if (n === u) return x(a), l;
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== u.return) e = a, u = n;
      else {
        for (var f = !1, c = a.child; c; ) {
          if (c === e) {
            f = !0, e = a, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = a, e = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === e) {
              f = !0, e = n, u = a;
              break;
            }
            if (c === u) {
              f = !0, u = n, e = a;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (e.alternate !== u) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? t : l;
  }
  function m(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = m(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var z = Object.assign, H = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), P = Symbol.for("react.consumer"), w = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), zt = Symbol.for("react.activity"), Rt = Symbol.for("react.memo_cache_sentinel"), Dt = Symbol.iterator;
  function dt(t) {
    return t === null || typeof t != "object" ? null : (t = Dt && t[Dt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var _t = Symbol.for("react.client.reference");
  function bt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === _t ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case C:
        return "Fragment";
      case V:
        return "Profiler";
      case Z:
        return "StrictMode";
      case j:
        return "Suspense";
      case tt:
        return "SuspenseList";
      case zt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case q:
          return "Portal";
        case w:
          return (t.displayName || "Context") + ".Provider";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case K:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case nt:
          return l = t.displayName || null, l !== null ? l : bt(t.type) || "Memo";
        case vt:
          l = t._payload, t = t._init;
          try {
            return bt(t(l));
          } catch {
          }
      }
    return null;
  }
  var At = Array.isArray, E = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, lt = [], h = -1;
  function U(t) {
    return { current: t };
  }
  function G(t) {
    0 > h || (t.current = lt[h], lt[h] = null, h--);
  }
  function X(t, l) {
    h++, lt[h] = t.current, t.current = l;
  }
  var J = U(null), st = U(null), I = U(null), ll = U(null);
  function Ot(t, l) {
    switch (X(I, l), X(st, t), X(J, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? rd(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = rd(l), t = dd(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(J), X(J, t);
  }
  function te() {
    G(J), G(st), G(I);
  }
  function of(t) {
    t.memoizedState !== null && X(ll, t);
    var l = J.current, e = dd(l, t.type);
    l !== e && (X(st, t), X(J, e));
  }
  function Ca(t) {
    st.current === t && (G(J), G(st)), ll.current === t && (G(ll), Da._currentValue = Y);
  }
  var rf = Object.prototype.hasOwnProperty, df = i.unstable_scheduleCallback, hf = i.unstable_cancelCallback, S0 = i.unstable_shouldYield, b0 = i.unstable_requestPaint, Ml = i.unstable_now, A0 = i.unstable_getCurrentPriorityLevel, Vc = i.unstable_ImmediatePriority, wc = i.unstable_UserBlockingPriority, Xa = i.unstable_NormalPriority, T0 = i.unstable_LowPriority, Kc = i.unstable_IdlePriority, E0 = i.log, O0 = i.unstable_setDisableYieldValue, Yu = null, el = null;
  function le(t) {
    if (typeof E0 == "function" && O0(t), el && typeof el.setStrictMode == "function")
      try {
        el.setStrictMode(Yu, t);
      } catch {
      }
  }
  var ul = Math.clz32 ? Math.clz32 : R0, p0 = Math.log, z0 = Math.LN2;
  function R0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (p0(t) / z0 | 0) | 0;
  }
  var Ga = 256, Qa = 4194304;
  function Me(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ja(t, l, e) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var a = 0, n = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? a = Me(u) : (f &= c, f !== 0 ? a = Me(f) : e || (e = c & ~t, e !== 0 && (a = Me(e))))) : (c = u & ~n, c !== 0 ? a = Me(c) : f !== 0 ? a = Me(f) : e || (e = u & ~t, e !== 0 && (a = Me(e)))), a === 0 ? 0 : l !== 0 && l !== a && (l & n) === 0 && (n = a & -a, e = l & -l, n >= e || n === 32 && (e & 4194048) !== 0) ? l : a;
  }
  function Cu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function M0(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Jc() {
    var t = Ga;
    return Ga <<= 1, (Ga & 4194048) === 0 && (Ga = 256), t;
  }
  function Wc() {
    var t = Qa;
    return Qa <<= 1, (Qa & 62914560) === 0 && (Qa = 4194304), t;
  }
  function yf(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Xu(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function D0(t, l, e, u, a, n) {
    var f = t.pendingLanes;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
    var c = t.entanglements, r = t.expirationTimes, S = t.hiddenUpdates;
    for (e = f & ~e; 0 < e; ) {
      var M = 31 - ul(e), _ = 1 << M;
      c[M] = 0, r[M] = -1;
      var A = S[M];
      if (A !== null)
        for (S[M] = null, M = 0; M < A.length; M++) {
          var T = A[M];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~_;
    }
    u !== 0 && $c(t, u, 0), n !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(f & ~l));
  }
  function $c(t, l, e) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - ul(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | e & 4194090;
  }
  function kc(t, l) {
    var e = t.entangledLanes |= l;
    for (t = t.entanglements; e; ) {
      var u = 31 - ul(e), a = 1 << u;
      a & l | t[u] & l && (t[u] |= l), e &= ~a;
    }
  }
  function vf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function mf(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fc() {
    var t = B.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ud(t.type));
  }
  function _0(t, l) {
    var e = B.p;
    try {
      return B.p = t, l();
    } finally {
      B.p = e;
    }
  }
  var ee = Math.random().toString(36).slice(2), Kt = "__reactFiber$" + ee, kt = "__reactProps$" + ee, Je = "__reactContainer$" + ee, gf = "__reactEvents$" + ee, x0 = "__reactListeners$" + ee, U0 = "__reactHandles$" + ee, Pc = "__reactResources$" + ee, Gu = "__reactMarker$" + ee;
  function Sf(t) {
    delete t[Kt], delete t[kt], delete t[gf], delete t[x0], delete t[U0];
  }
  function We(t) {
    var l = t[Kt];
    if (l) return l;
    for (var e = t.parentNode; e; ) {
      if (l = e[Je] || e[Kt]) {
        if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
          for (t = md(t); t !== null; ) {
            if (e = t[Kt]) return e;
            t = md(t);
          }
        return l;
      }
      t = e, e = t.parentNode;
    }
    return null;
  }
  function $e(t) {
    if (t = t[Kt] || t[Je]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Qu(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(s(33));
  }
  function ke(t) {
    var l = t[Pc];
    return l || (l = t[Pc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Gt(t) {
    t[Gu] = !0;
  }
  var Ic = /* @__PURE__ */ new Set(), ts = {};
  function De(t, l) {
    Fe(t, l), Fe(t + "Capture", l);
  }
  function Fe(t, l) {
    for (ts[t] = l, t = 0; t < l.length; t++)
      Ic.add(l[t]);
  }
  var H0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ls = {}, es = {};
  function N0(t) {
    return rf.call(es, t) ? !0 : rf.call(ls, t) ? !1 : H0.test(t) ? es[t] = !0 : (ls[t] = !0, !1);
  }
  function Za(t, l, e) {
    if (N0(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function La(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Yl(t, l, e, u) {
    if (u === null) t.removeAttribute(e);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + u);
    }
  }
  var bf, us;
  function Pe(t) {
    if (bf === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        bf = l && l[1] || "", us = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + bf + t + us;
  }
  var Af = !1;
  function Tf(t, l) {
    if (!t || Af) return "";
    Af = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (T) {
                  var A = T;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (T) {
                  A = T;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                A = T;
              }
              (_ = t()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (T) {
            if (T && A && typeof T.stack == "string")
              return [T.stack, A.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var r = f.split(`
`), S = c.split(`
`);
        for (a = u = 0; u < r.length && !r[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; a < S.length && !S[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (u === r.length || a === S.length)
          for (u = r.length - 1, a = S.length - 1; 1 <= u && 0 <= a && r[u] !== S[a]; )
            a--;
        for (; 1 <= u && 0 <= a; u--, a--)
          if (r[u] !== S[a]) {
            if (u !== 1 || a !== 1)
              do
                if (u--, a--, 0 > a || r[u] !== S[a]) {
                  var M = `
` + r[u].replace(" at new ", " at ");
                  return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                }
              while (1 <= u && 0 <= a);
            break;
          }
      }
    } finally {
      Af = !1, Error.prepareStackTrace = e;
    }
    return (e = t ? t.displayName || t.name : "") ? Pe(e) : "";
  }
  function q0(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pe(t.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 15:
        return Tf(t.type, !1);
      case 11:
        return Tf(t.type.render, !1);
      case 1:
        return Tf(t.type, !0);
      case 31:
        return Pe("Activity");
      default:
        return "";
    }
  }
  function as(t) {
    try {
      var l = "";
      do
        l += q0(t), t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  function hl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ns(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function B0(t) {
    var l = ns(t) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), u = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var a = e.get, n = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(t, l, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Va(t) {
    t._valueTracker || (t._valueTracker = B0(t));
  }
  function fs(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(), u = "";
    return t && (u = ns(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== e ? (l.setValue(t), !0) : !1;
  }
  function wa(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Y0 = /[\n"\\]/g;
  function yl(t) {
    return t.replace(
      Y0,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ef(t, l, e, u, a, n, f, c) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), l != null ? f === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + hl(l)) : t.value !== "" + hl(l) && (t.value = "" + hl(l)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), l != null ? Of(t, f, hl(l)) : e != null ? Of(t, f, hl(e)) : u != null && t.removeAttribute("value"), a == null && n != null && (t.defaultChecked = !!n), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + hl(c) : t.removeAttribute("name");
  }
  function is(t, l, e, u, a, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || l != null))
        return;
      e = e != null ? "" + hl(e) : "", l = l != null ? "" + hl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? a, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = c ? t.checked : !!u, t.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f);
  }
  function Of(t, l, e) {
    l === "number" && wa(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
  }
  function Ie(t, l, e, u) {
    if (t = t.options, l) {
      l = {};
      for (var a = 0; a < e.length; a++)
        l["$" + e[a]] = !0;
      for (e = 0; e < t.length; e++)
        a = l.hasOwnProperty("$" + t[e].value), t[e].selected !== a && (t[e].selected = a), a && u && (t[e].defaultSelected = !0);
    } else {
      for (e = "" + hl(e), l = null, a = 0; a < t.length; a++) {
        if (t[a].value === e) {
          t[a].selected = !0, u && (t[a].defaultSelected = !0);
          return;
        }
        l !== null || t[a].disabled || (l = t[a]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function cs(t, l, e) {
    if (l != null && (l = "" + hl(l), l !== t.value && (t.value = l), e == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + hl(e) : "";
  }
  function ss(t, l, e, u) {
    if (l == null) {
      if (u != null) {
        if (e != null) throw Error(s(92));
        if (At(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        e = u;
      }
      e == null && (e = ""), l = e;
    }
    e = hl(l), t.defaultValue = e, u = t.textContent, u === e && u !== "" && u !== null && (t.value = u);
  }
  function tu(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var C0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function os(t, l, e) {
    var u = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, e) : typeof e != "number" || e === 0 || C0.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
  }
  function rs(t, l, e) {
    if (l != null && typeof l != "object")
      throw Error(s(62));
    if (t = t.style, e != null) {
      for (var u in e)
        !e.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "");
      for (var a in l)
        u = l[a], l.hasOwnProperty(a) && e[a] !== u && os(t, a, u);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && os(t, n, l[n]);
  }
  function pf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var X0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), G0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ka(t) {
    return G0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var zf = null;
  function Rf(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var lu = null, eu = null;
  function ds(t) {
    var l = $e(t);
    if (l && (t = l.stateNode)) {
      var e = t[kt] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Ef(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), l = e.name, e.type === "radio" && l != null) {
            for (e = t; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + yl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < e.length; l++) {
              var u = e[l];
              if (u !== t && u.form === t.form) {
                var a = u[kt] || null;
                if (!a) throw Error(s(90));
                Ef(
                  u,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (l = 0; l < e.length; l++)
              u = e[l], u.form === t.form && fs(u);
          }
          break t;
        case "textarea":
          cs(t, e.value, e.defaultValue);
          break t;
        case "select":
          l = e.value, l != null && Ie(t, !!e.multiple, l, !1);
      }
    }
  }
  var Mf = !1;
  function hs(t, l, e) {
    if (Mf) return t(l, e);
    Mf = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (Mf = !1, (lu !== null || eu !== null) && (Hn(), lu && (l = lu, t = eu, eu = lu = null, ds(l), t)))
        for (l = 0; l < t.length; l++) ds(t[l]);
    }
  }
  function ju(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var u = e[kt] || null;
    if (u === null) return null;
    e = u[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function")
      throw Error(
        s(231, l, typeof e)
      );
    return e;
  }
  var Cl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Df = !1;
  if (Cl)
    try {
      var Zu = {};
      Object.defineProperty(Zu, "passive", {
        get: function() {
          Df = !0;
        }
      }), window.addEventListener("test", Zu, Zu), window.removeEventListener("test", Zu, Zu);
    } catch {
      Df = !1;
    }
  var ue = null, _f = null, Ja = null;
  function ys() {
    if (Ja) return Ja;
    var t, l = _f, e = l.length, u, a = "value" in ue ? ue.value : ue.textContent, n = a.length;
    for (t = 0; t < e && l[t] === a[t]; t++) ;
    var f = e - t;
    for (u = 1; u <= f && l[e - u] === a[n - u]; u++) ;
    return Ja = a.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Wa(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function $a() {
    return !0;
  }
  function vs() {
    return !1;
  }
  function Ft(t) {
    function l(e, u, a, n, f) {
      this._reactName = e, this._targetInst = a, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in t)
        t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? $a : vs, this.isPropagationStopped = vs, this;
    }
    return z(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = $a);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = $a);
      },
      persist: function() {
      },
      isPersistent: $a
    }), l;
  }
  var _e = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ka = Ft(_e), Lu = z({}, _e, { view: 0, detail: 0 }), Q0 = Ft(Lu), xf, Uf, Vu, Fa = z({}, Lu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Vu && (Vu && t.type === "mousemove" ? (xf = t.screenX - Vu.screenX, Uf = t.screenY - Vu.screenY) : Uf = xf = 0, Vu = t), xf);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Uf;
    }
  }), ms = Ft(Fa), j0 = z({}, Fa, { dataTransfer: 0 }), Z0 = Ft(j0), L0 = z({}, Lu, { relatedTarget: 0 }), Hf = Ft(L0), V0 = z({}, _e, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), w0 = Ft(V0), K0 = z({}, _e, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), J0 = Ft(K0), W0 = z({}, _e, { data: 0 }), gs = Ft(W0), $0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, k0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, F0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function P0(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = F0[t]) ? !!l[t] : !1;
  }
  function Nf() {
    return P0;
  }
  var I0 = z({}, Lu, {
    key: function(t) {
      if (t.key) {
        var l = $0[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Wa(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? k0[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nf,
    charCode: function(t) {
      return t.type === "keypress" ? Wa(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Wa(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), th = Ft(I0), lh = z({}, Fa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Ss = Ft(lh), eh = z({}, Lu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nf
  }), uh = Ft(eh), ah = z({}, _e, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nh = Ft(ah), fh = z({}, Fa, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ih = Ft(fh), ch = z({}, _e, {
    newState: 0,
    oldState: 0
  }), sh = Ft(ch), oh = [9, 13, 27, 32], qf = Cl && "CompositionEvent" in window, wu = null;
  Cl && "documentMode" in document && (wu = document.documentMode);
  var rh = Cl && "TextEvent" in window && !wu, bs = Cl && (!qf || wu && 8 < wu && 11 >= wu), As = " ", Ts = !1;
  function Es(t, l) {
    switch (t) {
      case "keyup":
        return oh.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Os(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var uu = !1;
  function dh(t, l) {
    switch (t) {
      case "compositionend":
        return Os(l);
      case "keypress":
        return l.which !== 32 ? null : (Ts = !0, As);
      case "textInput":
        return t = l.data, t === As && Ts ? null : t;
      default:
        return null;
    }
  }
  function hh(t, l) {
    if (uu)
      return t === "compositionend" || !qf && Es(t, l) ? (t = ys(), Ja = _f = ue = null, uu = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return bs && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var yh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ps(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!yh[t.type] : l === "textarea";
  }
  function zs(t, l, e, u) {
    lu ? eu ? eu.push(u) : eu = [u] : lu = u, l = Xn(l, "onChange"), 0 < l.length && (e = new ka(
      "onChange",
      "change",
      null,
      e,
      u
    ), t.push({ event: e, listeners: l }));
  }
  var Ku = null, Ju = null;
  function vh(t) {
    fd(t, 0);
  }
  function Pa(t) {
    var l = Qu(t);
    if (fs(l)) return t;
  }
  function Rs(t, l) {
    if (t === "change") return l;
  }
  var Ms = !1;
  if (Cl) {
    var Bf;
    if (Cl) {
      var Yf = "oninput" in document;
      if (!Yf) {
        var Ds = document.createElement("div");
        Ds.setAttribute("oninput", "return;"), Yf = typeof Ds.oninput == "function";
      }
      Bf = Yf;
    } else Bf = !1;
    Ms = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function _s() {
    Ku && (Ku.detachEvent("onpropertychange", xs), Ju = Ku = null);
  }
  function xs(t) {
    if (t.propertyName === "value" && Pa(Ju)) {
      var l = [];
      zs(
        l,
        Ju,
        t,
        Rf(t)
      ), hs(vh, l);
    }
  }
  function mh(t, l, e) {
    t === "focusin" ? (_s(), Ku = l, Ju = e, Ku.attachEvent("onpropertychange", xs)) : t === "focusout" && _s();
  }
  function gh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Pa(Ju);
  }
  function Sh(t, l) {
    if (t === "click") return Pa(l);
  }
  function bh(t, l) {
    if (t === "input" || t === "change")
      return Pa(l);
  }
  function Ah(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var al = typeof Object.is == "function" ? Object.is : Ah;
  function Wu(t, l) {
    if (al(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var e = Object.keys(t), u = Object.keys(l);
    if (e.length !== u.length) return !1;
    for (u = 0; u < e.length; u++) {
      var a = e[u];
      if (!rf.call(l, a) || !al(t[a], l[a]))
        return !1;
    }
    return !0;
  }
  function Us(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Hs(t, l) {
    var e = Us(t);
    t = 0;
    for (var u; e; ) {
      if (e.nodeType === 3) {
        if (u = t + e.textContent.length, t <= l && u >= l)
          return { node: e, offset: l - t };
        t = u;
      }
      t: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Us(e);
    }
  }
  function Ns(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Ns(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function qs(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = wa(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = wa(t.document);
    }
    return l;
  }
  function Cf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Th = Cl && "documentMode" in document && 11 >= document.documentMode, au = null, Xf = null, $u = null, Gf = !1;
  function Bs(t, l, e) {
    var u = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Gf || au == null || au !== wa(u) || (u = au, "selectionStart" in u && Cf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), $u && Wu($u, u) || ($u = u, u = Xn(Xf, "onSelect"), 0 < u.length && (l = new ka(
      "onSelect",
      "select",
      null,
      l,
      e
    ), t.push({ event: l, listeners: u }), l.target = au)));
  }
  function xe(t, l) {
    var e = {};
    return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
  }
  var nu = {
    animationend: xe("Animation", "AnimationEnd"),
    animationiteration: xe("Animation", "AnimationIteration"),
    animationstart: xe("Animation", "AnimationStart"),
    transitionrun: xe("Transition", "TransitionRun"),
    transitionstart: xe("Transition", "TransitionStart"),
    transitioncancel: xe("Transition", "TransitionCancel"),
    transitionend: xe("Transition", "TransitionEnd")
  }, Qf = {}, Ys = {};
  Cl && (Ys = document.createElement("div").style, "AnimationEvent" in window || (delete nu.animationend.animation, delete nu.animationiteration.animation, delete nu.animationstart.animation), "TransitionEvent" in window || delete nu.transitionend.transition);
  function Ue(t) {
    if (Qf[t]) return Qf[t];
    if (!nu[t]) return t;
    var l = nu[t], e;
    for (e in l)
      if (l.hasOwnProperty(e) && e in Ys)
        return Qf[t] = l[e];
    return t;
  }
  var Cs = Ue("animationend"), Xs = Ue("animationiteration"), Gs = Ue("animationstart"), Eh = Ue("transitionrun"), Oh = Ue("transitionstart"), ph = Ue("transitioncancel"), Qs = Ue("transitionend"), js = /* @__PURE__ */ new Map(), jf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  jf.push("scrollEnd");
  function El(t, l) {
    js.set(t, l), De(l, [t]);
  }
  var Zs = /* @__PURE__ */ new WeakMap();
  function vl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = Zs.get(t);
      return e !== void 0 ? e : (l = {
        value: t,
        source: l,
        stack: as(l)
      }, Zs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: as(l)
    };
  }
  var ml = [], fu = 0, Zf = 0;
  function Ia() {
    for (var t = fu, l = Zf = fu = 0; l < t; ) {
      var e = ml[l];
      ml[l++] = null;
      var u = ml[l];
      ml[l++] = null;
      var a = ml[l];
      ml[l++] = null;
      var n = ml[l];
      if (ml[l++] = null, u !== null && a !== null) {
        var f = u.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a;
      }
      n !== 0 && Ls(e, a, n);
    }
  }
  function tn(t, l, e, u) {
    ml[fu++] = t, ml[fu++] = l, ml[fu++] = e, ml[fu++] = u, Zf |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Lf(t, l, e, u) {
    return tn(t, l, e, u), ln(t);
  }
  function iu(t, l) {
    return tn(t, null, null, l), ln(t);
  }
  function Ls(t, l, e) {
    t.lanes |= e;
    var u = t.alternate;
    u !== null && (u.lanes |= e);
    for (var a = !1, n = t.return; n !== null; )
      n.childLanes |= e, u = n.alternate, u !== null && (u.childLanes |= e), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (a = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, a && l !== null && (a = 31 - ul(e), t = n.hiddenUpdates, u = t[a], u === null ? t[a] = [l] : u.push(l), l.lane = e | 536870912), n) : null;
  }
  function ln(t) {
    if (50 < Aa)
      throw Aa = 0, $i = null, Error(s(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var cu = {};
  function zh(t, l, e, u) {
    this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nl(t, l, e, u) {
    return new zh(t, l, e, u);
  }
  function Vf(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xl(t, l) {
    var e = t.alternate;
    return e === null ? (e = nl(
      t.tag,
      l,
      t.key,
      t.mode
    ), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
  }
  function Vs(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function en(t, l, e, u, a, n) {
    var f = 0;
    if (u = t, typeof t == "function") Vf(t) && (f = 1);
    else if (typeof t == "string")
      f = My(
        t,
        e,
        J.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case zt:
          return t = nl(31, e, l, a), t.elementType = zt, t.lanes = n, t;
        case C:
          return He(e.children, a, n, l);
        case Z:
          f = 8, a |= 24;
          break;
        case V:
          return t = nl(12, e, l, a | 2), t.elementType = V, t.lanes = n, t;
        case j:
          return t = nl(13, e, l, a), t.elementType = j, t.lanes = n, t;
        case tt:
          return t = nl(19, e, l, a), t.elementType = tt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case $:
              case w:
                f = 10;
                break t;
              case P:
                f = 9;
                break t;
              case K:
                f = 11;
                break t;
              case nt:
                f = 14;
                break t;
              case vt:
                f = 16, u = null;
                break t;
            }
          f = 29, e = Error(
            s(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = nl(f, e, l, a), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function He(t, l, e, u) {
    return t = nl(7, t, u, l), t.lanes = e, t;
  }
  function wf(t, l, e) {
    return t = nl(6, t, null, l), t.lanes = e, t;
  }
  function Kf(t, l, e) {
    return l = nl(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = e, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var su = [], ou = 0, un = null, an = 0, gl = [], Sl = 0, Ne = null, Gl = 1, Ql = "";
  function qe(t, l) {
    su[ou++] = an, su[ou++] = un, un = t, an = l;
  }
  function ws(t, l, e) {
    gl[Sl++] = Gl, gl[Sl++] = Ql, gl[Sl++] = Ne, Ne = t;
    var u = Gl;
    t = Ql;
    var a = 32 - ul(u) - 1;
    u &= ~(1 << a), e += 1;
    var n = 32 - ul(l) + a;
    if (30 < n) {
      var f = a - a % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, a -= f, Gl = 1 << 32 - ul(l) + a | e << a | u, Ql = n + t;
    } else
      Gl = 1 << n | e << a | u, Ql = t;
  }
  function Jf(t) {
    t.return !== null && (qe(t, 1), ws(t, 1, 0));
  }
  function Wf(t) {
    for (; t === un; )
      un = su[--ou], su[ou] = null, an = su[--ou], su[ou] = null;
    for (; t === Ne; )
      Ne = gl[--Sl], gl[Sl] = null, Ql = gl[--Sl], gl[Sl] = null, Gl = gl[--Sl], gl[Sl] = null;
  }
  var $t = null, xt = null, rt = !1, Be = null, Dl = !1, $f = Error(s(519));
  function Ye(t) {
    var l = Error(s(418, ""));
    throw Pu(vl(l, t)), $f;
  }
  function Ks(t) {
    var l = t.stateNode, e = t.type, u = t.memoizedProps;
    switch (l[Kt] = t, l[kt] = u, e) {
      case "dialog":
        it("cancel", l), it("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Ea.length; e++)
          it(Ea[e], l);
        break;
      case "source":
        it("error", l);
        break;
      case "img":
      case "image":
      case "link":
        it("error", l), it("load", l);
        break;
      case "details":
        it("toggle", l);
        break;
      case "input":
        it("invalid", l), is(
          l,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), Va(l);
        break;
      case "select":
        it("invalid", l);
        break;
      case "textarea":
        it("invalid", l), ss(l, u.value, u.defaultValue, u.children), Va(l);
    }
    e = u.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || u.suppressHydrationWarning === !0 || od(l.textContent, e) ? (u.popover != null && (it("beforetoggle", l), it("toggle", l)), u.onScroll != null && it("scroll", l), u.onScrollEnd != null && it("scrollend", l), u.onClick != null && (l.onclick = Gn), l = !0) : l = !1, l || Ye(t);
  }
  function Js(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          Dl = !1;
          return;
        case 27:
        case 3:
          Dl = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function ku(t) {
    if (t !== $t) return !1;
    if (!rt) return Js(t), rt = !0, !1;
    var l = t.tag, e;
    if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || rc(t.type, t.memoizedProps)), e = !e), e && xt && Ye(t), Js(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (e = t.data, e === "/$") {
              if (l === 0) {
                xt = pl(t.nextSibling);
                break t;
              }
              l--;
            } else
              e !== "$" && e !== "$!" && e !== "$?" || l++;
          t = t.nextSibling;
        }
        xt = null;
      }
    } else
      l === 27 ? (l = xt, be(t.type) ? (t = vc, vc = null, xt = t) : xt = l) : xt = $t ? pl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Fu() {
    xt = $t = null, rt = !1;
  }
  function Ws() {
    var t = Be;
    return t !== null && (tl === null ? tl = t : tl.push.apply(
      tl,
      t
    ), Be = null), t;
  }
  function Pu(t) {
    Be === null ? Be = [t] : Be.push(t);
  }
  var kf = U(null), Ce = null, jl = null;
  function ae(t, l, e) {
    X(kf, l._currentValue), l._currentValue = e;
  }
  function Zl(t) {
    t._currentValue = kf.current, G(kf);
  }
  function Ff(t, l, e) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === e) break;
      t = t.return;
    }
  }
  function Pf(t, l, e, u) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var n = a.dependencies;
      if (n !== null) {
        var f = a.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = a;
          for (var r = 0; r < l.length; r++)
            if (c.context === l[r]) {
              n.lanes |= e, c = n.alternate, c !== null && (c.lanes |= e), Ff(
                n.return,
                e,
                t
              ), u || (f = null);
              break t;
            }
          n = c.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(s(341));
        f.lanes |= e, n = f.alternate, n !== null && (n.lanes |= e), Ff(f, e, t), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function Iu(t, l, e, u) {
    t = null;
    for (var a = l, n = !1; a !== null; ) {
      if (!n) {
        if ((a.flags & 524288) !== 0) n = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(s(387));
        if (f = f.memoizedProps, f !== null) {
          var c = a.type;
          al(a.pendingProps.value, f.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (a === ll.current) {
        if (f = a.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Da) : t = [Da]);
      }
      a = a.return;
    }
    t !== null && Pf(
      l,
      t,
      e,
      u
    ), l.flags |= 262144;
  }
  function nn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!al(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Xe(t) {
    Ce = t, jl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Jt(t) {
    return $s(Ce, t);
  }
  function fn(t, l) {
    return Ce === null && Xe(t), $s(t, l);
  }
  function $s(t, l) {
    var e = l._currentValue;
    if (l = { context: l, memoizedValue: e, next: null }, jl === null) {
      if (t === null) throw Error(s(308));
      jl = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else jl = jl.next = l;
    return e;
  }
  var Rh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(e, u) {
        t.push(u);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(e) {
        return e();
      });
    };
  }, Mh = i.unstable_scheduleCallback, Dh = i.unstable_NormalPriority, Yt = {
    $$typeof: w,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function If() {
    return {
      controller: new Rh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ta(t) {
    t.refCount--, t.refCount === 0 && Mh(Dh, function() {
      t.controller.abort();
    });
  }
  var la = null, ti = 0, ru = 0, du = null;
  function _h(t, l) {
    if (la === null) {
      var e = la = [];
      ti = 0, ru = ec(), du = {
        status: "pending",
        value: void 0,
        then: function(u) {
          e.push(u);
        }
      };
    }
    return ti++, l.then(ks, ks), l;
  }
  function ks() {
    if (--ti === 0 && la !== null) {
      du !== null && (du.status = "fulfilled");
      var t = la;
      la = null, ru = 0, du = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function xh(t, l) {
    var e = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        e.push(a);
      }
    };
    return t.then(
      function() {
        u.status = "fulfilled", u.value = l;
        for (var a = 0; a < e.length; a++) (0, e[a])(l);
      },
      function(a) {
        for (u.status = "rejected", u.reason = a, a = 0; a < e.length; a++)
          (0, e[a])(void 0);
      }
    ), u;
  }
  var Fs = E.S;
  E.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && _h(t, l), Fs !== null && Fs(t, l);
  };
  var Ge = U(null);
  function li() {
    var t = Ge.current;
    return t !== null ? t : Et.pooledCache;
  }
  function cn(t, l) {
    l === null ? X(Ge, Ge.current) : X(Ge, l.pool);
  }
  function Ps() {
    var t = li();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var ea = Error(s(460)), Is = Error(s(474)), sn = Error(s(542)), ei = { then: function() {
  } };
  function to(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function on() {
  }
  function lo(t, l, e) {
    switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(on, on), l = e), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, uo(t), t;
      default:
        if (typeof l.status == "string") l.then(on, on);
        else {
          if (t = Et, t !== null && 100 < t.shellSuspendCounter)
            throw Error(s(482));
          t = l, t.status = "pending", t.then(
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "fulfilled", a.value = u;
              }
            },
            function(u) {
              if (l.status === "pending") {
                var a = l;
                a.status = "rejected", a.reason = u;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, uo(t), t;
        }
        throw ua = l, ea;
    }
  }
  var ua = null;
  function eo() {
    if (ua === null) throw Error(s(459));
    var t = ua;
    return ua = null, t;
  }
  function uo(t) {
    if (t === ea || t === sn)
      throw Error(s(483));
  }
  var ne = !1;
  function ui(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ai(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function fe(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(t, l, e) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ht & 2) !== 0) {
      var a = u.pending;
      return a === null ? l.next = l : (l.next = a.next, a.next = l), u.pending = l, l = ln(t), Ls(t, null, e), l;
    }
    return tn(t, u, l, e), ln(t);
  }
  function aa(t, l, e) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, kc(t, e);
    }
  }
  function ni(t, l) {
    var e = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, e === u)) {
      var a = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var f = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? a = n = f : n = n.next = f, e = e.next;
        } while (e !== null);
        n === null ? a = n = l : n = n.next = l;
      } else a = n = l;
      e = {
        baseState: u.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, t.updateQueue = e;
      return;
    }
    t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
  }
  var fi = !1;
  function na() {
    if (fi) {
      var t = du;
      if (t !== null) throw t;
    }
  }
  function fa(t, l, e, u) {
    fi = !1;
    var a = t.updateQueue;
    ne = !1;
    var n = a.firstBaseUpdate, f = a.lastBaseUpdate, c = a.shared.pending;
    if (c !== null) {
      a.shared.pending = null;
      var r = c, S = r.next;
      r.next = null, f === null ? n = S : f.next = S, f = r;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, c = M.lastBaseUpdate, c !== f && (c === null ? M.firstBaseUpdate = S : c.next = S, M.lastBaseUpdate = r));
    }
    if (n !== null) {
      var _ = a.baseState;
      f = 0, M = S = r = null, c = n;
      do {
        var A = c.lane & -536870913, T = A !== c.lane;
        if (T ? (ct & A) === A : (u & A) === A) {
          A !== 0 && A === ru && (fi = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var F = t, W = c;
            A = l;
            var St = e;
            switch (W.tag) {
              case 1:
                if (F = W.payload, typeof F == "function") {
                  _ = F.call(St, _, A);
                  break t;
                }
                _ = F;
                break t;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = W.payload, A = typeof F == "function" ? F.call(St, _, A) : F, A == null) break t;
                _ = z({}, _, A);
                break t;
              case 2:
                ne = !0;
            }
          }
          A = c.callback, A !== null && (t.flags |= 64, T && (t.flags |= 8192), T = a.callbacks, T === null ? a.callbacks = [A] : T.push(A));
        } else
          T = {
            lane: A,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, M === null ? (S = M = T, r = _) : M = M.next = T, f |= A;
        if (c = c.next, c === null) {
          if (c = a.shared.pending, c === null)
            break;
          T = c, c = T.next, T.next = null, a.lastBaseUpdate = T, a.shared.pending = null;
        }
      } while (!0);
      M === null && (r = _), a.baseState = r, a.firstBaseUpdate = S, a.lastBaseUpdate = M, n === null && (a.shared.lanes = 0), ve |= f, t.lanes = f, t.memoizedState = _;
    }
  }
  function ao(t, l) {
    if (typeof t != "function")
      throw Error(s(191, t));
    t.call(l);
  }
  function no(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++)
        ao(e[t], l);
  }
  var hu = U(null), rn = U(0);
  function fo(t, l) {
    t = $l, X(rn, t), X(hu, l), $l = t | l.baseLanes;
  }
  function ii() {
    X(rn, $l), X(hu, hu.current);
  }
  function ci() {
    $l = rn.current, G(hu), G(rn);
  }
  var ce = 0, ut = null, mt = null, qt = null, dn = !1, yu = !1, Qe = !1, hn = 0, ia = 0, vu = null, Uh = 0;
  function Ht() {
    throw Error(s(321));
  }
  function si(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!al(t[e], l[e])) return !1;
    return !0;
  }
  function oi(t, l, e, u, a, n) {
    return ce = n, ut = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, E.H = t === null || t.memoizedState === null ? Vo : wo, Qe = !1, n = e(u, a), Qe = !1, yu && (n = co(
      l,
      e,
      u,
      a
    )), io(t), n;
  }
  function io(t) {
    E.H = bn;
    var l = mt !== null && mt.next !== null;
    if (ce = 0, qt = mt = ut = null, dn = !1, ia = 0, vu = null, l) throw Error(s(300));
    t === null || Qt || (t = t.dependencies, t !== null && nn(t) && (Qt = !0));
  }
  function co(t, l, e, u) {
    ut = t;
    var a = 0;
    do {
      if (yu && (vu = null), ia = 0, yu = !1, 25 <= a) throw Error(s(301));
      if (a += 1, qt = mt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      E.H = Xh, n = l(e, u);
    } while (yu);
    return n;
  }
  function Hh() {
    var t = E.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? ca(l) : l, t = t.useState()[0], (mt !== null ? mt.memoizedState : null) !== t && (ut.flags |= 1024), l;
  }
  function ri() {
    var t = hn !== 0;
    return hn = 0, t;
  }
  function di(t, l, e) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
  }
  function hi(t) {
    if (dn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      dn = !1;
    }
    ce = 0, qt = mt = ut = null, yu = !1, ia = hn = 0, vu = null;
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return qt === null ? ut.memoizedState = qt = t : qt = qt.next = t, qt;
  }
  function Bt() {
    if (mt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = mt.next;
    var l = qt === null ? ut.memoizedState : qt.next;
    if (l !== null)
      qt = l, mt = t;
    else {
      if (t === null)
        throw ut.alternate === null ? Error(s(467)) : Error(s(310));
      mt = t, t = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null
      }, qt === null ? ut.memoizedState = qt = t : qt = qt.next = t;
    }
    return qt;
  }
  function yi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ca(t) {
    var l = ia;
    return ia += 1, vu === null && (vu = []), t = lo(vu, t, l), l = ut, (qt === null ? l.memoizedState : qt.next) === null && (l = l.alternate, E.H = l === null || l.memoizedState === null ? Vo : wo), t;
  }
  function yn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ca(t);
      if (t.$$typeof === w) return Jt(t);
    }
    throw Error(s(438, String(t)));
  }
  function vi(t) {
    var l = null, e = ut.updateQueue;
    if (e !== null && (l = e.memoCache), l == null) {
      var u = ut.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), e === null && (e = yi(), ut.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
      for (e = l.data[l.index] = Array(t), u = 0; u < t; u++)
        e[u] = Rt;
    return l.index++, e;
  }
  function Ll(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function vn(t) {
    var l = Bt();
    return mi(l, mt, t);
  }
  function mi(t, l, e) {
    var u = t.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = e;
    var a = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = n.next, n.next = f;
      }
      l.baseQueue = a = n, u.pending = null;
    }
    if (n = t.baseState, a === null) t.memoizedState = n;
    else {
      l = a.next;
      var c = f = null, r = null, S = l, M = !1;
      do {
        var _ = S.lane & -536870913;
        if (_ !== S.lane ? (ct & _) === _ : (ce & _) === _) {
          var A = S.revertLane;
          if (A === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }), _ === ru && (M = !0);
          else if ((ce & A) === A) {
            S = S.next, A === ru && (M = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: S.revertLane,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, r === null ? (c = r = _, f = n) : r = r.next = _, ut.lanes |= A, ve |= A;
          _ = S.action, Qe && e(n, _), n = S.hasEagerState ? S.eagerState : e(n, _);
        } else
          A = {
            lane: _,
            revertLane: S.revertLane,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, r === null ? (c = r = A, f = n) : r = r.next = A, ut.lanes |= _, ve |= _;
        S = S.next;
      } while (S !== null && S !== l);
      if (r === null ? f = n : r.next = c, !al(n, t.memoizedState) && (Qt = !0, M && (e = du, e !== null)))
        throw e;
      t.memoizedState = n, t.baseState = f, t.baseQueue = r, u.lastRenderedState = n;
    }
    return a === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function gi(t) {
    var l = Bt(), e = l.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = t;
    var u = e.dispatch, a = e.pending, n = l.memoizedState;
    if (a !== null) {
      e.pending = null;
      var f = a = a.next;
      do
        n = t(n, f.action), f = f.next;
      while (f !== a);
      al(n, l.memoizedState) || (Qt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), e.lastRenderedState = n;
    }
    return [n, u];
  }
  function so(t, l, e) {
    var u = ut, a = Bt(), n = rt;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = l();
    var f = !al(
      (mt || a).memoizedState,
      e
    );
    f && (a.memoizedState = e, Qt = !0), a = a.queue;
    var c = ho.bind(null, u, a, t);
    if (sa(2048, 8, c, [t]), a.getSnapshot !== l || f || qt !== null && qt.memoizedState.tag & 1) {
      if (u.flags |= 2048, mu(
        9,
        mn(),
        ro.bind(
          null,
          u,
          a,
          e,
          l
        ),
        null
      ), Et === null) throw Error(s(349));
      n || (ce & 124) !== 0 || oo(u, l, e);
    }
    return e;
  }
  function oo(t, l, e) {
    t.flags |= 16384, t = { getSnapshot: l, value: e }, l = ut.updateQueue, l === null ? (l = yi(), ut.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t));
  }
  function ro(t, l, e, u) {
    l.value = e, l.getSnapshot = u, yo(l) && vo(t);
  }
  function ho(t, l, e) {
    return e(function() {
      yo(l) && vo(t);
    });
  }
  function yo(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !al(t, e);
    } catch {
      return !0;
    }
  }
  function vo(t) {
    var l = iu(t, 2);
    l !== null && ol(l, t, 2);
  }
  function Si(t) {
    var l = Pt();
    if (typeof t == "function") {
      var e = t;
      if (t = e(), Qe) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ll,
      lastRenderedState: t
    }, l;
  }
  function mo(t, l, e, u) {
    return t.baseState = e, mi(
      t,
      mt,
      typeof u == "function" ? u : Ll
    );
  }
  function Nh(t, l, e, u, a) {
    if (Sn(t)) throw Error(s(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      E.T !== null ? e(!0) : n.isTransition = !1, u(n), e = l.pending, e === null ? (n.next = l.pending = n, go(l, n)) : (n.next = e.next, l.pending = e.next = n);
    }
  }
  function go(t, l) {
    var e = l.action, u = l.payload, a = t.state;
    if (l.isTransition) {
      var n = E.T, f = {};
      E.T = f;
      try {
        var c = e(a, u), r = E.S;
        r !== null && r(f, c), So(t, l, c);
      } catch (S) {
        bi(t, l, S);
      } finally {
        E.T = n;
      }
    } else
      try {
        n = e(a, u), So(t, l, n);
      } catch (S) {
        bi(t, l, S);
      }
  }
  function So(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(u) {
        bo(t, l, u);
      },
      function(u) {
        return bi(t, l, u);
      }
    ) : bo(t, l, e);
  }
  function bo(t, l, e) {
    l.status = "fulfilled", l.value = e, Ao(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, go(t, e)));
  }
  function bi(t, l, e) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = e, Ao(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Ao(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function To(t, l) {
    return l;
  }
  function Eo(t, l) {
    if (rt) {
      var e = Et.formState;
      if (e !== null) {
        t: {
          var u = ut;
          if (rt) {
            if (xt) {
              l: {
                for (var a = xt, n = Dl; a.nodeType !== 8; ) {
                  if (!n) {
                    a = null;
                    break l;
                  }
                  if (a = pl(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break l;
                  }
                }
                n = a.data, a = n === "F!" || n === "F" ? a : null;
              }
              if (a) {
                xt = pl(
                  a.nextSibling
                ), u = a.data === "F!";
                break t;
              }
            }
            Ye(u);
          }
          u = !1;
        }
        u && (l = e[0]);
      }
    }
    return e = Pt(), e.memoizedState = e.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: To,
      lastRenderedState: l
    }, e.queue = u, e = jo.bind(
      null,
      ut,
      u
    ), u.dispatch = e, u = Si(!1), n = pi.bind(
      null,
      ut,
      !1,
      u.queue
    ), u = Pt(), a = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = a, e = Nh.bind(
      null,
      ut,
      a,
      n,
      e
    ), a.dispatch = e, u.memoizedState = t, [l, e, !1];
  }
  function Oo(t) {
    var l = Bt();
    return po(l, mt, t);
  }
  function po(t, l, e) {
    if (l = mi(
      t,
      l,
      To
    )[0], t = vn(Ll)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = ca(l);
      } catch (f) {
        throw f === ea ? sn : f;
      }
    else u = l;
    l = Bt();
    var a = l.queue, n = a.dispatch;
    return e !== l.memoizedState && (ut.flags |= 2048, mu(
      9,
      mn(),
      qh.bind(null, a, e),
      null
    )), [u, n, t];
  }
  function qh(t, l) {
    t.action = l;
  }
  function zo(t) {
    var l = Bt(), e = mt;
    if (e !== null)
      return po(l, e, t);
    Bt(), l = l.memoizedState, e = Bt();
    var u = e.queue.dispatch;
    return e.memoizedState = t, [l, u, !1];
  }
  function mu(t, l, e, u) {
    return t = { tag: t, create: e, deps: u, inst: l, next: null }, l = ut.updateQueue, l === null && (l = yi(), ut.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (u = e.next, e.next = t, t.next = u, l.lastEffect = t), t;
  }
  function mn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Ro() {
    return Bt().memoizedState;
  }
  function gn(t, l, e, u) {
    var a = Pt();
    u = u === void 0 ? null : u, ut.flags |= t, a.memoizedState = mu(
      1 | l,
      mn(),
      e,
      u
    );
  }
  function sa(t, l, e, u) {
    var a = Bt();
    u = u === void 0 ? null : u;
    var n = a.memoizedState.inst;
    mt !== null && u !== null && si(u, mt.memoizedState.deps) ? a.memoizedState = mu(l, n, e, u) : (ut.flags |= t, a.memoizedState = mu(
      1 | l,
      n,
      e,
      u
    ));
  }
  function Mo(t, l) {
    gn(8390656, 8, t, l);
  }
  function Do(t, l) {
    sa(2048, 8, t, l);
  }
  function _o(t, l) {
    return sa(4, 2, t, l);
  }
  function xo(t, l) {
    return sa(4, 4, t, l);
  }
  function Uo(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function() {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Ho(t, l, e) {
    e = e != null ? e.concat([t]) : null, sa(4, 4, Uo.bind(null, l, t), e);
  }
  function Ai() {
  }
  function No(t, l) {
    var e = Bt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    return l !== null && si(l, u[1]) ? u[0] : (e.memoizedState = [t, l], t);
  }
  function qo(t, l) {
    var e = Bt();
    l = l === void 0 ? null : l;
    var u = e.memoizedState;
    if (l !== null && si(l, u[1]))
      return u[0];
    if (u = t(), Qe) {
      le(!0);
      try {
        t();
      } finally {
        le(!1);
      }
    }
    return e.memoizedState = [u, l], u;
  }
  function Ti(t, l, e) {
    return e === void 0 || (ce & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Cr(), ut.lanes |= t, ve |= t, e);
  }
  function Bo(t, l, e, u) {
    return al(e, l) ? e : hu.current !== null ? (t = Ti(t, e, u), al(t, l) || (Qt = !0), t) : (ce & 42) === 0 ? (Qt = !0, t.memoizedState = e) : (t = Cr(), ut.lanes |= t, ve |= t, l);
  }
  function Yo(t, l, e, u, a) {
    var n = B.p;
    B.p = n !== 0 && 8 > n ? n : 8;
    var f = E.T, c = {};
    E.T = c, pi(t, !1, l, e);
    try {
      var r = a(), S = E.S;
      if (S !== null && S(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var M = xh(
          r,
          u
        );
        oa(
          t,
          l,
          M,
          sl(t)
        );
      } else
        oa(
          t,
          l,
          u,
          sl(t)
        );
    } catch (_) {
      oa(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: _ },
        sl()
      );
    } finally {
      B.p = n, E.T = f;
    }
  }
  function Bh() {
  }
  function Ei(t, l, e, u) {
    if (t.tag !== 5) throw Error(s(476));
    var a = Co(t).queue;
    Yo(
      t,
      a,
      l,
      Y,
      e === null ? Bh : function() {
        return Xo(t), e(u);
      }
    );
  }
  function Co(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ll,
        lastRenderedState: Y
      },
      next: null
    };
    var e = {};
    return l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ll,
        lastRenderedState: e
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function Xo(t) {
    var l = Co(t).next.queue;
    oa(t, l, {}, sl());
  }
  function Oi() {
    return Jt(Da);
  }
  function Go() {
    return Bt().memoizedState;
  }
  function Qo() {
    return Bt().memoizedState;
  }
  function Yh(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = sl();
          t = fe(e);
          var u = ie(l, t, e);
          u !== null && (ol(u, l, e), aa(u, l, e)), l = { cache: If() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Ch(t, l, e) {
    var u = sl();
    e = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sn(t) ? Zo(l, e) : (e = Lf(t, l, e, u), e !== null && (ol(e, t, u), Lo(e, l, u)));
  }
  function jo(t, l, e) {
    var u = sl();
    oa(t, l, e, u);
  }
  function oa(t, l, e, u) {
    var a = {
      lane: u,
      revertLane: 0,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Sn(t)) Zo(l, a);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var f = l.lastRenderedState, c = n(f, e);
          if (a.hasEagerState = !0, a.eagerState = c, al(c, f))
            return tn(t, l, a, 0), Et === null && Ia(), !1;
        } catch {
        } finally {
        }
      if (e = Lf(t, l, a, u), e !== null)
        return ol(e, t, u), Lo(e, l, u), !0;
    }
    return !1;
  }
  function pi(t, l, e, u) {
    if (u = {
      lane: 2,
      revertLane: ec(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Sn(t)) {
      if (l) throw Error(s(479));
    } else
      l = Lf(
        t,
        e,
        u,
        2
      ), l !== null && ol(l, t, 2);
  }
  function Sn(t) {
    var l = t.alternate;
    return t === ut || l !== null && l === ut;
  }
  function Zo(t, l) {
    yu = dn = !0;
    var e = t.pending;
    e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
  }
  function Lo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, e |= u, l.lanes = e, kc(t, e);
    }
  }
  var bn = {
    readContext: Jt,
    use: yn,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht
  }, Vo = {
    readContext: Jt,
    use: yn,
    useCallback: function(t, l) {
      return Pt().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Jt,
    useEffect: Mo,
    useImperativeHandle: function(t, l, e) {
      e = e != null ? e.concat([t]) : null, gn(
        4194308,
        4,
        Uo.bind(null, l, t),
        e
      );
    },
    useLayoutEffect: function(t, l) {
      return gn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      gn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var e = Pt();
      l = l === void 0 ? null : l;
      var u = t();
      if (Qe) {
        le(!0);
        try {
          t();
        } finally {
          le(!1);
        }
      }
      return e.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, e) {
      var u = Pt();
      if (e !== void 0) {
        var a = e(l);
        if (Qe) {
          le(!0);
          try {
            e(l);
          } finally {
            le(!1);
          }
        }
      } else a = l;
      return u.memoizedState = u.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, u.queue = t, t = t.dispatch = Ch.bind(
        null,
        ut,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = Pt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Si(t);
      var l = t.queue, e = jo.bind(null, ut, l);
      return l.dispatch = e, [t.memoizedState, e];
    },
    useDebugValue: Ai,
    useDeferredValue: function(t, l) {
      var e = Pt();
      return Ti(e, t, l);
    },
    useTransition: function() {
      var t = Si(!1);
      return t = Yo.bind(
        null,
        ut,
        t.queue,
        !0,
        !1
      ), Pt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, e) {
      var u = ut, a = Pt();
      if (rt) {
        if (e === void 0)
          throw Error(s(407));
        e = e();
      } else {
        if (e = l(), Et === null)
          throw Error(s(349));
        (ct & 124) !== 0 || oo(u, l, e);
      }
      a.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return a.queue = n, Mo(ho.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, mu(
        9,
        mn(),
        ro.bind(
          null,
          u,
          n,
          e,
          l
        ),
        null
      ), e;
    },
    useId: function() {
      var t = Pt(), l = Et.identifierPrefix;
      if (rt) {
        var e = Ql, u = Gl;
        e = (u & ~(1 << 32 - ul(u) - 1)).toString(32) + e, l = "«" + l + "R" + e, e = hn++, 0 < e && (l += "H" + e.toString(32)), l += "»";
      } else
        e = Uh++, l = "«" + l + "r" + e.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Oi,
    useFormState: Eo,
    useActionState: Eo,
    useOptimistic: function(t) {
      var l = Pt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = e, l = pi.bind(
        null,
        ut,
        !0,
        e
      ), e.dispatch = l, [t, l];
    },
    useMemoCache: vi,
    useCacheRefresh: function() {
      return Pt().memoizedState = Yh.bind(
        null,
        ut
      );
    }
  }, wo = {
    readContext: Jt,
    use: yn,
    useCallback: No,
    useContext: Jt,
    useEffect: Do,
    useImperativeHandle: Ho,
    useInsertionEffect: _o,
    useLayoutEffect: xo,
    useMemo: qo,
    useReducer: vn,
    useRef: Ro,
    useState: function() {
      return vn(Ll);
    },
    useDebugValue: Ai,
    useDeferredValue: function(t, l) {
      var e = Bt();
      return Bo(
        e,
        mt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = vn(Ll)[0], l = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : ca(t),
        l
      ];
    },
    useSyncExternalStore: so,
    useId: Go,
    useHostTransitionStatus: Oi,
    useFormState: Oo,
    useActionState: Oo,
    useOptimistic: function(t, l) {
      var e = Bt();
      return mo(e, mt, t, l);
    },
    useMemoCache: vi,
    useCacheRefresh: Qo
  }, Xh = {
    readContext: Jt,
    use: yn,
    useCallback: No,
    useContext: Jt,
    useEffect: Do,
    useImperativeHandle: Ho,
    useInsertionEffect: _o,
    useLayoutEffect: xo,
    useMemo: qo,
    useReducer: gi,
    useRef: Ro,
    useState: function() {
      return gi(Ll);
    },
    useDebugValue: Ai,
    useDeferredValue: function(t, l) {
      var e = Bt();
      return mt === null ? Ti(e, t, l) : Bo(
        e,
        mt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = gi(Ll)[0], l = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : ca(t),
        l
      ];
    },
    useSyncExternalStore: so,
    useId: Go,
    useHostTransitionStatus: Oi,
    useFormState: zo,
    useActionState: zo,
    useOptimistic: function(t, l) {
      var e = Bt();
      return mt !== null ? mo(e, mt, t, l) : (e.baseState = t, [t, e.queue.dispatch]);
    },
    useMemoCache: vi,
    useCacheRefresh: Qo
  }, gu = null, ra = 0;
  function An(t) {
    var l = ra;
    return ra += 1, gu === null && (gu = []), lo(gu, t, l);
  }
  function da(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function Tn(t, l) {
    throw l.$$typeof === H ? Error(s(525)) : (t = Object.prototype.toString.call(l), Error(
      s(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function Ko(t) {
    var l = t._init;
    return l(t._payload);
  }
  function Jo(t) {
    function l(v, y) {
      if (t) {
        var g = v.deletions;
        g === null ? (v.deletions = [y], v.flags |= 16) : g.push(y);
      }
    }
    function e(v, y) {
      if (!t) return null;
      for (; y !== null; )
        l(v, y), y = y.sibling;
      return null;
    }
    function u(v) {
      for (var y = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
      return y;
    }
    function a(v, y) {
      return v = Xl(v, y), v.index = 0, v.sibling = null, v;
    }
    function n(v, y, g) {
      return v.index = g, t ? (g = v.alternate, g !== null ? (g = g.index, g < y ? (v.flags |= 67108866, y) : g) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
    }
    function f(v) {
      return t && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, y, g, D) {
      return y === null || y.tag !== 6 ? (y = wf(g, v.mode, D), y.return = v, y) : (y = a(y, g), y.return = v, y);
    }
    function r(v, y, g, D) {
      var Q = g.type;
      return Q === C ? M(
        v,
        y,
        g.props.children,
        D,
        g.key
      ) : y !== null && (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === vt && Ko(Q) === y.type) ? (y = a(y, g.props), da(y, g), y.return = v, y) : (y = en(
        g.type,
        g.key,
        g.props,
        null,
        v.mode,
        D
      ), da(y, g), y.return = v, y);
    }
    function S(v, y, g, D) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== g.containerInfo || y.stateNode.implementation !== g.implementation ? (y = Kf(g, v.mode, D), y.return = v, y) : (y = a(y, g.children || []), y.return = v, y);
    }
    function M(v, y, g, D, Q) {
      return y === null || y.tag !== 7 ? (y = He(
        g,
        v.mode,
        D,
        Q
      ), y.return = v, y) : (y = a(y, g), y.return = v, y);
    }
    function _(v, y, g) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = wf(
          "" + y,
          v.mode,
          g
        ), y.return = v, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case N:
            return g = en(
              y.type,
              y.key,
              y.props,
              null,
              v.mode,
              g
            ), da(g, y), g.return = v, g;
          case q:
            return y = Kf(
              y,
              v.mode,
              g
            ), y.return = v, y;
          case vt:
            var D = y._init;
            return y = D(y._payload), _(v, y, g);
        }
        if (At(y) || dt(y))
          return y = He(
            y,
            v.mode,
            g,
            null
          ), y.return = v, y;
        if (typeof y.then == "function")
          return _(v, An(y), g);
        if (y.$$typeof === w)
          return _(
            v,
            fn(v, y),
            g
          );
        Tn(v, y);
      }
      return null;
    }
    function A(v, y, g, D) {
      var Q = y !== null ? y.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return Q !== null ? null : c(v, y, "" + g, D);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case N:
            return g.key === Q ? r(v, y, g, D) : null;
          case q:
            return g.key === Q ? S(v, y, g, D) : null;
          case vt:
            return Q = g._init, g = Q(g._payload), A(v, y, g, D);
        }
        if (At(g) || dt(g))
          return Q !== null ? null : M(v, y, g, D, null);
        if (typeof g.then == "function")
          return A(
            v,
            y,
            An(g),
            D
          );
        if (g.$$typeof === w)
          return A(
            v,
            y,
            fn(v, g),
            D
          );
        Tn(v, g);
      }
      return null;
    }
    function T(v, y, g, D, Q) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return v = v.get(g) || null, c(y, v, "" + D, Q);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case N:
            return v = v.get(
              D.key === null ? g : D.key
            ) || null, r(y, v, D, Q);
          case q:
            return v = v.get(
              D.key === null ? g : D.key
            ) || null, S(y, v, D, Q);
          case vt:
            var at = D._init;
            return D = at(D._payload), T(
              v,
              y,
              g,
              D,
              Q
            );
        }
        if (At(D) || dt(D))
          return v = v.get(g) || null, M(y, v, D, Q, null);
        if (typeof D.then == "function")
          return T(
            v,
            y,
            g,
            An(D),
            Q
          );
        if (D.$$typeof === w)
          return T(
            v,
            y,
            g,
            fn(y, D),
            Q
          );
        Tn(y, D);
      }
      return null;
    }
    function F(v, y, g, D) {
      for (var Q = null, at = null, L = y, k = y = 0, Zt = null; L !== null && k < g.length; k++) {
        L.index > k ? (Zt = L, L = null) : Zt = L.sibling;
        var ot = A(
          v,
          L,
          g[k],
          D
        );
        if (ot === null) {
          L === null && (L = Zt);
          break;
        }
        t && L && ot.alternate === null && l(v, L), y = n(ot, y, k), at === null ? Q = ot : at.sibling = ot, at = ot, L = Zt;
      }
      if (k === g.length)
        return e(v, L), rt && qe(v, k), Q;
      if (L === null) {
        for (; k < g.length; k++)
          L = _(v, g[k], D), L !== null && (y = n(
            L,
            y,
            k
          ), at === null ? Q = L : at.sibling = L, at = L);
        return rt && qe(v, k), Q;
      }
      for (L = u(L); k < g.length; k++)
        Zt = T(
          L,
          v,
          k,
          g[k],
          D
        ), Zt !== null && (t && Zt.alternate !== null && L.delete(
          Zt.key === null ? k : Zt.key
        ), y = n(
          Zt,
          y,
          k
        ), at === null ? Q = Zt : at.sibling = Zt, at = Zt);
      return t && L.forEach(function(pe) {
        return l(v, pe);
      }), rt && qe(v, k), Q;
    }
    function W(v, y, g, D) {
      if (g == null) throw Error(s(151));
      for (var Q = null, at = null, L = y, k = y = 0, Zt = null, ot = g.next(); L !== null && !ot.done; k++, ot = g.next()) {
        L.index > k ? (Zt = L, L = null) : Zt = L.sibling;
        var pe = A(v, L, ot.value, D);
        if (pe === null) {
          L === null && (L = Zt);
          break;
        }
        t && L && pe.alternate === null && l(v, L), y = n(pe, y, k), at === null ? Q = pe : at.sibling = pe, at = pe, L = Zt;
      }
      if (ot.done)
        return e(v, L), rt && qe(v, k), Q;
      if (L === null) {
        for (; !ot.done; k++, ot = g.next())
          ot = _(v, ot.value, D), ot !== null && (y = n(ot, y, k), at === null ? Q = ot : at.sibling = ot, at = ot);
        return rt && qe(v, k), Q;
      }
      for (L = u(L); !ot.done; k++, ot = g.next())
        ot = T(L, v, k, ot.value, D), ot !== null && (t && ot.alternate !== null && L.delete(ot.key === null ? k : ot.key), y = n(ot, y, k), at === null ? Q = ot : at.sibling = ot, at = ot);
      return t && L.forEach(function(Gy) {
        return l(v, Gy);
      }), rt && qe(v, k), Q;
    }
    function St(v, y, g, D) {
      if (typeof g == "object" && g !== null && g.type === C && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case N:
            t: {
              for (var Q = g.key; y !== null; ) {
                if (y.key === Q) {
                  if (Q = g.type, Q === C) {
                    if (y.tag === 7) {
                      e(
                        v,
                        y.sibling
                      ), D = a(
                        y,
                        g.props.children
                      ), D.return = v, v = D;
                      break t;
                    }
                  } else if (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === vt && Ko(Q) === y.type) {
                    e(
                      v,
                      y.sibling
                    ), D = a(y, g.props), da(D, g), D.return = v, v = D;
                    break t;
                  }
                  e(v, y);
                  break;
                } else l(v, y);
                y = y.sibling;
              }
              g.type === C ? (D = He(
                g.props.children,
                v.mode,
                D,
                g.key
              ), D.return = v, v = D) : (D = en(
                g.type,
                g.key,
                g.props,
                null,
                v.mode,
                D
              ), da(D, g), D.return = v, v = D);
            }
            return f(v);
          case q:
            t: {
              for (Q = g.key; y !== null; ) {
                if (y.key === Q)
                  if (y.tag === 4 && y.stateNode.containerInfo === g.containerInfo && y.stateNode.implementation === g.implementation) {
                    e(
                      v,
                      y.sibling
                    ), D = a(y, g.children || []), D.return = v, v = D;
                    break t;
                  } else {
                    e(v, y);
                    break;
                  }
                else l(v, y);
                y = y.sibling;
              }
              D = Kf(g, v.mode, D), D.return = v, v = D;
            }
            return f(v);
          case vt:
            return Q = g._init, g = Q(g._payload), St(
              v,
              y,
              g,
              D
            );
        }
        if (At(g))
          return F(
            v,
            y,
            g,
            D
          );
        if (dt(g)) {
          if (Q = dt(g), typeof Q != "function") throw Error(s(150));
          return g = Q.call(g), W(
            v,
            y,
            g,
            D
          );
        }
        if (typeof g.then == "function")
          return St(
            v,
            y,
            An(g),
            D
          );
        if (g.$$typeof === w)
          return St(
            v,
            y,
            fn(v, g),
            D
          );
        Tn(v, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, y !== null && y.tag === 6 ? (e(v, y.sibling), D = a(y, g), D.return = v, v = D) : (e(v, y), D = wf(g, v.mode, D), D.return = v, v = D), f(v)) : e(v, y);
    }
    return function(v, y, g, D) {
      try {
        ra = 0;
        var Q = St(
          v,
          y,
          g,
          D
        );
        return gu = null, Q;
      } catch (L) {
        if (L === ea || L === sn) throw L;
        var at = nl(29, L, null, v.mode);
        return at.lanes = D, at.return = v, at;
      } finally {
      }
    };
  }
  var Su = Jo(!0), Wo = Jo(!1), bl = U(null), _l = null;
  function se(t) {
    var l = t.alternate;
    X(Ct, Ct.current & 1), X(bl, t), _l === null && (l === null || hu.current !== null || l.memoizedState !== null) && (_l = t);
  }
  function $o(t) {
    if (t.tag === 22) {
      if (X(Ct, Ct.current), X(bl, t), _l === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (_l = t);
      }
    } else oe();
  }
  function oe() {
    X(Ct, Ct.current), X(bl, bl.current);
  }
  function Vl(t) {
    G(bl), _l === t && (_l = null), G(Ct);
  }
  var Ct = U(0);
  function En(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || yc(e)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function zi(t, l, e, u) {
    l = t.memoizedState, e = e(u, l), e = e == null ? l : z({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
  }
  var Ri = {
    enqueueSetState: function(t, l, e) {
      t = t._reactInternals;
      var u = sl(), a = fe(u);
      a.payload = l, e != null && (a.callback = e), l = ie(t, a, u), l !== null && (ol(l, t, u), aa(l, t, u));
    },
    enqueueReplaceState: function(t, l, e) {
      t = t._reactInternals;
      var u = sl(), a = fe(u);
      a.tag = 1, a.payload = l, e != null && (a.callback = e), l = ie(t, a, u), l !== null && (ol(l, t, u), aa(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var e = sl(), u = fe(e);
      u.tag = 2, l != null && (u.callback = l), l = ie(t, u, e), l !== null && (ol(l, t, e), aa(l, t, e));
    }
  };
  function ko(t, l, e, u, a, n, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, f) : l.prototype && l.prototype.isPureReactComponent ? !Wu(e, u) || !Wu(a, n) : !0;
  }
  function Fo(t, l, e, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, u), l.state !== t && Ri.enqueueReplaceState(l, l.state, null);
  }
  function je(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var u in l)
        u !== "ref" && (e[u] = l[u]);
    }
    if (t = t.defaultProps) {
      e === l && (e = z({}, e));
      for (var a in t)
        e[a] === void 0 && (e[a] = t[a]);
    }
    return e;
  }
  var On = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function Po(t) {
    On(t);
  }
  function Io(t) {
    console.error(t);
  }
  function tr(t) {
    On(t);
  }
  function pn(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function lr(t, l, e) {
    try {
      var u = t.onCaughtError;
      u(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Mi(t, l, e) {
    return e = fe(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      pn(t, l);
    }, e;
  }
  function er(t) {
    return t = fe(t), t.tag = 3, t;
  }
  function ur(t, l, e, u) {
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var n = u.value;
      t.payload = function() {
        return a(n);
      }, t.callback = function() {
        lr(l, e, u);
      };
    }
    var f = e.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      lr(l, e, u), typeof a != "function" && (me === null ? me = /* @__PURE__ */ new Set([this]) : me.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Gh(t, l, e, u, a) {
    if (e.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = e.alternate, l !== null && Iu(
        l,
        e,
        a,
        !0
      ), e = bl.current, e !== null) {
        switch (e.tag) {
          case 13:
            return _l === null ? Fi() : e.alternate === null && Ut === 0 && (Ut = 3), e.flags &= -257, e.flags |= 65536, e.lanes = a, u === ei ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), Ii(t, u, a)), !1;
          case 22:
            return e.flags |= 65536, u === ei ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : e.add(u)), Ii(t, u, a)), !1;
        }
        throw Error(s(435, e.tag));
      }
      return Ii(t, u, a), Fi(), !1;
    }
    if (rt)
      return l = bl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = a, u !== $f && (t = Error(s(422), { cause: u }), Pu(vl(t, e)))) : (u !== $f && (l = Error(s(423), {
        cause: u
      }), Pu(
        vl(l, e)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, u = vl(u, e), a = Mi(
        t.stateNode,
        u,
        a
      ), ni(t, a), Ut !== 4 && (Ut = 2)), !1;
    var n = Error(s(520), { cause: u });
    if (n = vl(n, e), ba === null ? ba = [n] : ba.push(n), Ut !== 4 && (Ut = 2), l === null) return !0;
    u = vl(u, e), e = l;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, t = a & -a, e.lanes |= t, t = Mi(e.stateNode, u, t), ni(e, t), !1;
        case 1:
          if (l = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (me === null || !me.has(n))))
            return e.flags |= 65536, a &= -a, e.lanes |= a, a = er(a), ur(
              a,
              t,
              e,
              u
            ), ni(e, a), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var ar = Error(s(461)), Qt = !1;
  function Lt(t, l, e, u) {
    l.child = t === null ? Wo(l, null, e, u) : Su(
      l,
      t.child,
      e,
      u
    );
  }
  function nr(t, l, e, u, a) {
    e = e.render;
    var n = l.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Xe(l), u = oi(
      t,
      l,
      e,
      f,
      n,
      a
    ), c = ri(), t !== null && !Qt ? (di(t, l, a), wl(t, l, a)) : (rt && c && Jf(l), l.flags |= 1, Lt(t, l, u, a), l.child);
  }
  function fr(t, l, e, u, a) {
    if (t === null) {
      var n = e.type;
      return typeof n == "function" && !Vf(n) && n.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = n, ir(
        t,
        l,
        n,
        u,
        a
      )) : (t = en(
        e.type,
        null,
        u,
        l,
        l.mode,
        a
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !Bi(t, a)) {
      var f = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Wu, e(f, u) && t.ref === l.ref)
        return wl(t, l, a);
    }
    return l.flags |= 1, t = Xl(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function ir(t, l, e, u, a) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Wu(n, u) && t.ref === l.ref)
        if (Qt = !1, l.pendingProps = u = n, Bi(t, a))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else
          return l.lanes = t.lanes, wl(t, l, a);
    }
    return Di(
      t,
      l,
      e,
      u,
      a
    );
  }
  function cr(t, l, e) {
    var u = l.pendingProps, a = u.children, n = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | e : e, t !== null) {
          for (a = l.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          l.childLanes = n & ~u;
        } else l.childLanes = 0, l.child = null;
        return sr(
          t,
          l,
          u,
          e
        );
      }
      if ((e & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && cn(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? fo(l, n) : ii(), $o(l);
      else
        return l.lanes = l.childLanes = 536870912, sr(
          t,
          l,
          n !== null ? n.baseLanes | e : e,
          e
        );
    } else
      n !== null ? (cn(l, n.cachePool), fo(l, n), oe(), l.memoizedState = null) : (t !== null && cn(l, null), ii(), oe());
    return Lt(t, l, a, e), l.child;
  }
  function sr(t, l, e, u) {
    var a = li();
    return a = a === null ? null : { parent: Yt._currentValue, pool: a }, l.memoizedState = {
      baseLanes: e,
      cachePool: a
    }, t !== null && cn(l, null), ii(), $o(l), t !== null && Iu(t, l, u, !0), null;
  }
  function zn(t, l) {
    var e = l.ref;
    if (e === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(s(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function Di(t, l, e, u, a) {
    return Xe(l), e = oi(
      t,
      l,
      e,
      u,
      void 0,
      a
    ), u = ri(), t !== null && !Qt ? (di(t, l, a), wl(t, l, a)) : (rt && u && Jf(l), l.flags |= 1, Lt(t, l, e, a), l.child);
  }
  function or(t, l, e, u, a, n) {
    return Xe(l), l.updateQueue = null, e = co(
      l,
      u,
      e,
      a
    ), io(t), u = ri(), t !== null && !Qt ? (di(t, l, n), wl(t, l, n)) : (rt && u && Jf(l), l.flags |= 1, Lt(t, l, e, n), l.child);
  }
  function rr(t, l, e, u, a) {
    if (Xe(l), l.stateNode === null) {
      var n = cu, f = e.contextType;
      typeof f == "object" && f !== null && (n = Jt(f)), n = new e(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ri, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, ui(l), f = e.contextType, n.context = typeof f == "object" && f !== null ? Jt(f) : cu, n.state = l.memoizedState, f = e.getDerivedStateFromProps, typeof f == "function" && (zi(
        l,
        e,
        f,
        u
      ), n.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Ri.enqueueReplaceState(n, n.state, null), fa(l, u, n, a), na(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, r = je(e, c);
      n.props = r;
      var S = n.context, M = e.contextType;
      f = cu, typeof M == "object" && M !== null && (f = Jt(M));
      var _ = e.getDerivedStateFromProps;
      M = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, M || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || S !== f) && Fo(
        l,
        n,
        u,
        f
      ), ne = !1;
      var A = l.memoizedState;
      n.state = A, fa(l, u, n, a), na(), S = l.memoizedState, c || A !== S || ne ? (typeof _ == "function" && (zi(
        l,
        e,
        _,
        u
      ), S = l.memoizedState), (r = ne || ko(
        l,
        e,
        r,
        u,
        A,
        S,
        f
      )) ? (M || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = S), n.props = u, n.state = S, n.context = f, u = r) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, ai(t, l), f = l.memoizedProps, M = je(e, f), n.props = M, _ = l.pendingProps, A = n.context, S = e.contextType, r = cu, typeof S == "object" && S !== null && (r = Jt(S)), c = e.getDerivedStateFromProps, (S = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== _ || A !== r) && Fo(
        l,
        n,
        u,
        r
      ), ne = !1, A = l.memoizedState, n.state = A, fa(l, u, n, a), na();
      var T = l.memoizedState;
      f !== _ || A !== T || ne || t !== null && t.dependencies !== null && nn(t.dependencies) ? (typeof c == "function" && (zi(
        l,
        e,
        c,
        u
      ), T = l.memoizedState), (M = ne || ko(
        l,
        e,
        M,
        u,
        A,
        T,
        r
      ) || t !== null && t.dependencies !== null && nn(t.dependencies)) ? (S || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, T, r), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        T,
        r
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = T), n.props = u, n.state = T, n.context = r, u = M) : (typeof n.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (l.flags |= 1024), u = !1);
    }
    return n = u, zn(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, e = u && typeof e.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = Su(
      l,
      t.child,
      null,
      a
    ), l.child = Su(
      l,
      null,
      e,
      a
    )) : Lt(t, l, e, a), l.memoizedState = n.state, t = l.child) : t = wl(
      t,
      l,
      a
    ), t;
  }
  function dr(t, l, e, u) {
    return Fu(), l.flags |= 256, Lt(t, l, e, u), l.child;
  }
  var _i = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xi(t) {
    return { baseLanes: t, cachePool: Ps() };
  }
  function Ui(t, l, e) {
    return t = t !== null ? t.childLanes & ~e : 0, l && (t |= Al), t;
  }
  function hr(t, l, e) {
    var u = l.pendingProps, a = !1, n = (l.flags & 128) !== 0, f;
    if ((f = n) || (f = t !== null && t.memoizedState === null ? !1 : (Ct.current & 2) !== 0), f && (a = !0, l.flags &= -129), f = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (rt) {
        if (a ? se(l) : oe(), rt) {
          var c = xt, r;
          if (r = c) {
            t: {
              for (r = c, c = Dl; r.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break t;
                }
                if (r = pl(
                  r.nextSibling
                ), r === null) {
                  c = null;
                  break t;
                }
              }
              c = r;
            }
            c !== null ? (l.memoizedState = {
              dehydrated: c,
              treeContext: Ne !== null ? { id: Gl, overflow: Ql } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, r = nl(
              18,
              null,
              null,
              0
            ), r.stateNode = c, r.return = l, l.child = r, $t = l, xt = null, r = !0) : r = !1;
          }
          r || Ye(l);
        }
        if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return yc(c) ? l.lanes = 32 : l.lanes = 536870912, null;
        Vl(l);
      }
      return c = u.children, u = u.fallback, a ? (oe(), a = l.mode, c = Rn(
        { mode: "hidden", children: c },
        a
      ), u = He(
        u,
        a,
        e,
        null
      ), c.return = l, u.return = l, c.sibling = u, l.child = c, a = l.child, a.memoizedState = xi(e), a.childLanes = Ui(
        t,
        f,
        e
      ), l.memoizedState = _i, u) : (se(l), Hi(l, c));
    }
    if (r = t.memoizedState, r !== null && (c = r.dehydrated, c !== null)) {
      if (n)
        l.flags & 256 ? (se(l), l.flags &= -257, l = Ni(
          t,
          l,
          e
        )) : l.memoizedState !== null ? (oe(), l.child = t.child, l.flags |= 128, l = null) : (oe(), a = u.fallback, c = l.mode, u = Rn(
          { mode: "visible", children: u.children },
          c
        ), a = He(
          a,
          c,
          e,
          null
        ), a.flags |= 2, u.return = l, a.return = l, u.sibling = a, l.child = u, Su(
          l,
          t.child,
          null,
          e
        ), u = l.child, u.memoizedState = xi(e), u.childLanes = Ui(
          t,
          f,
          e
        ), l.memoizedState = _i, l = a);
      else if (se(l), yc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var S = f.dgst;
        f = S, u = Error(s(419)), u.stack = "", u.digest = f, Pu({ value: u, source: null, stack: null }), l = Ni(
          t,
          l,
          e
        );
      } else if (Qt || Iu(t, l, e, !1), f = (e & t.childLanes) !== 0, Qt || f) {
        if (f = Et, f !== null && (u = e & -e, u = (u & 42) !== 0 ? 1 : vf(u), u = (u & (f.suspendedLanes | e)) !== 0 ? 0 : u, u !== 0 && u !== r.retryLane))
          throw r.retryLane = u, iu(t, u), ol(f, t, u), ar;
        c.data === "$?" || Fi(), l = Ni(
          t,
          l,
          e
        );
      } else
        c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = r.treeContext, xt = pl(
          c.nextSibling
        ), $t = l, rt = !0, Be = null, Dl = !1, t !== null && (gl[Sl++] = Gl, gl[Sl++] = Ql, gl[Sl++] = Ne, Gl = t.id, Ql = t.overflow, Ne = l), l = Hi(
          l,
          u.children
        ), l.flags |= 4096);
      return l;
    }
    return a ? (oe(), a = u.fallback, c = l.mode, r = t.child, S = r.sibling, u = Xl(r, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = r.subtreeFlags & 65011712, S !== null ? a = Xl(S, a) : (a = He(
      a,
      c,
      e,
      null
    ), a.flags |= 2), a.return = l, u.return = l, u.sibling = a, l.child = u, u = a, a = l.child, c = t.child.memoizedState, c === null ? c = xi(e) : (r = c.cachePool, r !== null ? (S = Yt._currentValue, r = r.parent !== S ? { parent: S, pool: S } : r) : r = Ps(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: r
    }), a.memoizedState = c, a.childLanes = Ui(
      t,
      f,
      e
    ), l.memoizedState = _i, u) : (se(l), e = t.child, t = e.sibling, e = Xl(e, {
      mode: "visible",
      children: u.children
    }), e.return = l, e.sibling = null, t !== null && (f = l.deletions, f === null ? (l.deletions = [t], l.flags |= 16) : f.push(t)), l.child = e, l.memoizedState = null, e);
  }
  function Hi(t, l) {
    return l = Rn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function Rn(t, l) {
    return t = nl(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function Ni(t, l, e) {
    return Su(l, t.child, null, e), t = Hi(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function yr(t, l, e) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Ff(t.return, l, e);
  }
  function qi(t, l, e, u, a) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: e,
      tailMode: a
    } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = e, n.tailMode = a);
  }
  function vr(t, l, e) {
    var u = l.pendingProps, a = u.revealOrder, n = u.tail;
    if (Lt(t, l, u.children, e), u = Ct.current, (u & 2) !== 0)
      u = u & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && yr(t, e, l);
          else if (t.tag === 19)
            yr(t, e, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      u &= 1;
    }
    switch (X(Ct, u), a) {
      case "forwards":
        for (e = l.child, a = null; e !== null; )
          t = e.alternate, t !== null && En(t) === null && (a = e), e = e.sibling;
        e = a, e === null ? (a = l.child, l.child = null) : (a = e.sibling, e.sibling = null), qi(
          l,
          !1,
          a,
          e,
          n
        );
        break;
      case "backwards":
        for (e = null, a = l.child, l.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && En(t) === null) {
            l.child = a;
            break;
          }
          t = a.sibling, a.sibling = e, e = a, a = t;
        }
        qi(
          l,
          !0,
          e,
          null,
          n
        );
        break;
      case "together":
        qi(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function wl(t, l, e) {
    if (t !== null && (l.dependencies = t.dependencies), ve |= l.lanes, (e & l.childLanes) === 0)
      if (t !== null) {
        if (Iu(
          t,
          l,
          e,
          !1
        ), (e & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(s(153));
    if (l.child !== null) {
      for (t = l.child, e = Xl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; )
        t = t.sibling, e = e.sibling = Xl(t, t.pendingProps), e.return = l;
      e.sibling = null;
    }
    return l.child;
  }
  function Bi(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && nn(t)));
  }
  function Qh(t, l, e) {
    switch (l.tag) {
      case 3:
        Ot(l, l.stateNode.containerInfo), ae(l, Yt, t.memoizedState.cache), Fu();
        break;
      case 27:
      case 5:
        of(l);
        break;
      case 4:
        Ot(l, l.stateNode.containerInfo);
        break;
      case 10:
        ae(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (se(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? hr(t, l, e) : (se(l), t = wl(
            t,
            l,
            e
          ), t !== null ? t.sibling : null);
        se(l);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (u = (e & l.childLanes) !== 0, u || (Iu(
          t,
          l,
          e,
          !1
        ), u = (e & l.childLanes) !== 0), a) {
          if (u)
            return vr(
              t,
              l,
              e
            );
          l.flags |= 128;
        }
        if (a = l.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), X(Ct, Ct.current), u) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, cr(t, l, e);
      case 24:
        ae(l, Yt, t.memoizedState.cache);
    }
    return wl(t, l, e);
  }
  function mr(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Qt = !0;
      else {
        if (!Bi(t, e) && (l.flags & 128) === 0)
          return Qt = !1, Qh(
            t,
            l,
            e
          );
        Qt = (t.flags & 131072) !== 0;
      }
    else
      Qt = !1, rt && (l.flags & 1048576) !== 0 && ws(l, an, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType, a = u._init;
          if (u = a(u._payload), l.type = u, typeof u == "function")
            Vf(u) ? (t = je(u, t), l.tag = 1, l = rr(
              null,
              l,
              u,
              t,
              e
            )) : (l.tag = 0, l = Di(
              null,
              l,
              u,
              t,
              e
            ));
          else {
            if (u != null) {
              if (a = u.$$typeof, a === K) {
                l.tag = 11, l = nr(
                  null,
                  l,
                  u,
                  t,
                  e
                );
                break t;
              } else if (a === nt) {
                l.tag = 14, l = fr(
                  null,
                  l,
                  u,
                  t,
                  e
                );
                break t;
              }
            }
            throw l = bt(u) || u, Error(s(306, l, ""));
          }
        }
        return l;
      case 0:
        return Di(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 1:
        return u = l.type, a = je(
          u,
          l.pendingProps
        ), rr(
          t,
          l,
          u,
          a,
          e
        );
      case 3:
        t: {
          if (Ot(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(s(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          a = n.element, ai(t, l), fa(l, u, null, e);
          var f = l.memoizedState;
          if (u = f.cache, ae(l, Yt, u), u !== n.cache && Pf(
            l,
            [Yt],
            e,
            !0
          ), na(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = dr(
                t,
                l,
                u,
                e
              );
              break t;
            } else if (u !== a) {
              a = vl(
                Error(s(424)),
                l
              ), Pu(a), l = dr(
                t,
                l,
                u,
                e
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (xt = pl(t.firstChild), $t = l, rt = !0, Be = null, Dl = !0, e = Wo(
                l,
                null,
                u,
                e
              ), l.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (Fu(), u === a) {
              l = wl(
                t,
                l,
                e
              );
              break t;
            }
            Lt(
              t,
              l,
              u,
              e
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return zn(t, l), t === null ? (e = Ad(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = e : rt || (e = l.type, t = l.pendingProps, u = Qn(
          I.current
        ).createElement(e), u[Kt] = l, u[kt] = t, wt(u, e, t), Gt(u), l.stateNode = u) : l.memoizedState = Ad(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return of(l), t === null && rt && (u = l.stateNode = gd(
          l.type,
          l.pendingProps,
          I.current
        ), $t = l, Dl = !0, a = xt, be(l.type) ? (vc = a, xt = pl(
          u.firstChild
        )) : xt = a), Lt(
          t,
          l,
          l.pendingProps.children,
          e
        ), zn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && rt && ((a = u = xt) && (u = yy(
          u,
          l.type,
          l.pendingProps,
          Dl
        ), u !== null ? (l.stateNode = u, $t = l, xt = pl(
          u.firstChild
        ), Dl = !1, a = !0) : a = !1), a || Ye(l)), of(l), a = l.type, n = l.pendingProps, f = t !== null ? t.memoizedProps : null, u = n.children, rc(a, n) ? u = null : f !== null && rc(a, f) && (l.flags |= 32), l.memoizedState !== null && (a = oi(
          t,
          l,
          Hh,
          null,
          null,
          e
        ), Da._currentValue = a), zn(t, l), Lt(t, l, u, e), l.child;
      case 6:
        return t === null && rt && ((t = e = xt) && (e = vy(
          e,
          l.pendingProps,
          Dl
        ), e !== null ? (l.stateNode = e, $t = l, xt = null, t = !0) : t = !1), t || Ye(l)), null;
      case 13:
        return hr(t, l, e);
      case 4:
        return Ot(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = Su(
          l,
          null,
          u,
          e
        ) : Lt(
          t,
          l,
          u,
          e
        ), l.child;
      case 11:
        return nr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 7:
        return Lt(
          t,
          l,
          l.pendingProps,
          e
        ), l.child;
      case 8:
        return Lt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 12:
        return Lt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 10:
        return u = l.pendingProps, ae(l, l.type, u.value), Lt(
          t,
          l,
          u.children,
          e
        ), l.child;
      case 9:
        return a = l.type._context, u = l.pendingProps.children, Xe(l), a = Jt(a), u = u(a), l.flags |= 1, Lt(t, l, u, e), l.child;
      case 14:
        return fr(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 15:
        return ir(
          t,
          l,
          l.type,
          l.pendingProps,
          e
        );
      case 19:
        return vr(t, l, e);
      case 31:
        return u = l.pendingProps, e = l.mode, u = {
          mode: u.mode,
          children: u.children
        }, t === null ? (e = Rn(
          u,
          e
        ), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Xl(t.child, u), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
      case 22:
        return cr(t, l, e);
      case 24:
        return Xe(l), u = Jt(Yt), t === null ? (a = li(), a === null && (a = Et, n = If(), a.pooledCache = n, n.refCount++, n !== null && (a.pooledCacheLanes |= e), a = n), l.memoizedState = {
          parent: u,
          cache: a
        }, ui(l), ae(l, Yt, a)) : ((t.lanes & e) !== 0 && (ai(t, l), fa(l, null, null, e), na()), a = t.memoizedState, n = l.memoizedState, a.parent !== u ? (a = { parent: u, cache: u }, l.memoizedState = a, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = a), ae(l, Yt, u)) : (u = n.cache, ae(l, Yt, u), u !== a.cache && Pf(
          l,
          [Yt],
          e,
          !0
        ))), Lt(
          t,
          l,
          l.pendingProps.children,
          e
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(s(156, l.tag));
  }
  function Kl(t) {
    t.flags |= 4;
  }
  function gr(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !zd(l)) {
      if (l = bl.current, l !== null && ((ct & 4194048) === ct ? _l !== null : (ct & 62914560) !== ct && (ct & 536870912) === 0 || l !== _l))
        throw ua = ei, Is;
      t.flags |= 8192;
    }
  }
  function Mn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Wc() : 536870912, t.lanes |= l, Eu |= l);
  }
  function ha(t, l) {
    if (!rt)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; )
            l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var u = null; e !== null; )
            e.alternate !== null && (u = e), e = e.sibling;
          u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
      }
  }
  function Mt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, e = 0, u = 0;
    if (l)
      for (var a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags & 65011712, u |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        e |= a.lanes | a.childLanes, u |= a.subtreeFlags, u |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= u, t.childLanes = e, l;
  }
  function jh(t, l, e) {
    var u = l.pendingProps;
    switch (Wf(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(l), null;
      case 1:
        return Mt(l), null;
      case 3:
        return e = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Zl(Yt), te(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (ku(l) ? Kl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ws())), Mt(l), null;
      case 26:
        return e = l.memoizedState, t === null ? (Kl(l), e !== null ? (Mt(l), gr(l, e)) : (Mt(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Kl(l), Mt(l), gr(l, e)) : (Mt(l), l.flags &= -16777217) : (t.memoizedProps !== u && Kl(l), Mt(l), l.flags &= -16777217), null;
      case 27:
        Ca(l), e = I.current;
        var a = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== u && Kl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Mt(l), null;
          }
          t = J.current, ku(l) ? Ks(l) : (t = gd(a, u, e), l.stateNode = t, Kl(l));
        }
        return Mt(l), null;
      case 5:
        if (Ca(l), e = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Kl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(s(166));
            return Mt(l), null;
          }
          if (t = J.current, ku(l))
            Ks(l);
          else {
            switch (a = Qn(
              I.current
            ), t) {
              case 1:
                t = a.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                t = a.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    t = a.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    t = a.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    t = a.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof u.is == "string" ? a.createElement("select", { is: u.is }) : a.createElement("select"), u.multiple ? t.multiple = !0 : u.size && (t.size = u.size);
                    break;
                  default:
                    t = typeof u.is == "string" ? a.createElement(e, { is: u.is }) : a.createElement(e);
                }
            }
            t[Kt] = l, t[kt] = u;
            t: for (a = l.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6)
                t.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === l) break t;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === l)
                  break t;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
            l.stateNode = t;
            t: switch (wt(t, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!u.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Kl(l);
          }
        }
        return Mt(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && Kl(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(s(166));
          if (t = I.current, ku(l)) {
            if (t = l.stateNode, e = l.memoizedProps, u = null, a = $t, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  u = a.memoizedProps;
              }
            t[Kt] = l, t = !!(t.nodeValue === e || u !== null && u.suppressHydrationWarning === !0 || od(t.nodeValue, e)), t || Ye(l);
          } else
            t = Qn(t).createTextNode(
              u
            ), t[Kt] = l, l.stateNode = t;
        }
        return Mt(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = ku(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(s(318));
              if (a = l.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[Kt] = l;
            } else
              Fu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Mt(l), a = !1;
          } else
            a = Ws(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return l.flags & 256 ? (Vl(l), l) : (Vl(l), null);
        }
        if (Vl(l), (l.flags & 128) !== 0)
          return l.lanes = e, l;
        if (e = u !== null, t = t !== null && t.memoizedState !== null, e) {
          u = l.child, a = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (a = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== a && (u.flags |= 2048);
        }
        return e !== t && e && (l.child.flags |= 8192), Mn(l, l.updateQueue), Mt(l), null;
      case 4:
        return te(), t === null && fc(l.stateNode.containerInfo), Mt(l), null;
      case 10:
        return Zl(l.type), Mt(l), null;
      case 19:
        if (G(Ct), a = l.memoizedState, a === null) return Mt(l), null;
        if (u = (l.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) ha(a, !1);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = En(t), n !== null) {
                  for (l.flags |= 128, ha(a, !1), t = n.updateQueue, l.updateQueue = t, Mn(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; )
                    Vs(e, t), e = e.sibling;
                  return X(
                    Ct,
                    Ct.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Ml() > xn && (l.flags |= 128, u = !0, ha(a, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = En(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, Mn(l, t), ha(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !rt)
                return Mt(l), null;
            } else
              2 * Ml() - a.renderingStartTime > xn && e !== 536870912 && (l.flags |= 128, u = !0, ha(a, !1), l.lanes = 4194304);
          a.isBackwards ? (n.sibling = l.child, l.child = n) : (t = a.last, t !== null ? t.sibling = n : l.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Ml(), l.sibling = null, t = Ct.current, X(Ct, u ? t & 1 | 2 : t & 1), l) : (Mt(l), null);
      case 22:
      case 23:
        return Vl(l), ci(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Mt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Mt(l), e = l.updateQueue, e !== null && Mn(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== e && (l.flags |= 2048), t !== null && G(Ge), null;
      case 24:
        return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Zl(Yt), Mt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, l.tag));
  }
  function Zh(t, l) {
    switch (Wf(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Zl(Yt), te(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Ca(l), null;
      case 13:
        if (Vl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(s(340));
          Fu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return G(Ct), null;
      case 4:
        return te(), null;
      case 10:
        return Zl(l.type), null;
      case 22:
      case 23:
        return Vl(l), ci(), t !== null && G(Ge), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Zl(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Sr(t, l) {
    switch (Wf(l), l.tag) {
      case 3:
        Zl(Yt), te();
        break;
      case 26:
      case 27:
      case 5:
        Ca(l);
        break;
      case 4:
        te();
        break;
      case 13:
        Vl(l);
        break;
      case 19:
        G(Ct);
        break;
      case 10:
        Zl(l.type);
        break;
      case 22:
      case 23:
        Vl(l), ci(), t !== null && G(Ge);
        break;
      case 24:
        Zl(Yt);
    }
  }
  function ya(t, l) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var a = u.next;
        e = a;
        do {
          if ((e.tag & t) === t) {
            u = void 0;
            var n = e.create, f = e.inst;
            u = n(), f.destroy = u;
          }
          e = e.next;
        } while (e !== a);
      }
    } catch (c) {
      Tt(l, l.return, c);
    }
  }
  function re(t, l, e) {
    try {
      var u = l.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, a = l;
              var r = e, S = c;
              try {
                S();
              } catch (M) {
                Tt(
                  a,
                  r,
                  M
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (M) {
      Tt(l, l.return, M);
    }
  }
  function br(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        no(l, e);
      } catch (u) {
        Tt(t, t.return, u);
      }
    }
  }
  function Ar(t, l, e) {
    e.props = je(
      t.type,
      t.memoizedProps
    ), e.state = t.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (u) {
      Tt(t, l, u);
    }
  }
  function va(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof e == "function" ? t.refCleanup = e(u) : e.current = u;
      }
    } catch (a) {
      Tt(t, l, a);
    }
  }
  function xl(t, l) {
    var e = t.ref, u = t.refCleanup;
    if (e !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (a) {
          Tt(t, l, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (a) {
          Tt(t, l, a);
        }
      else e.current = null;
  }
  function Tr(t) {
    var l = t.type, e = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && u.focus();
          break t;
        case "img":
          e.src ? u.src = e.src : e.srcSet && (u.srcset = e.srcSet);
      }
    } catch (a) {
      Tt(t, t.return, a);
    }
  }
  function Yi(t, l, e) {
    try {
      var u = t.stateNode;
      sy(u, t.type, e, l), u[kt] = l;
    } catch (a) {
      Tt(t, t.return, a);
    }
  }
  function Er(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && be(t.type) || t.tag === 4;
  }
  function Ci(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Er(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && be(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xi(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Gn));
    else if (u !== 4 && (u === 27 && be(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
      for (Xi(t, l, e), t = t.sibling; t !== null; )
        Xi(t, l, e), t = t.sibling;
  }
  function Dn(t, l, e) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
    else if (u !== 4 && (u === 27 && be(t.type) && (e = t.stateNode), t = t.child, t !== null))
      for (Dn(t, l, e), t = t.sibling; t !== null; )
        Dn(t, l, e), t = t.sibling;
  }
  function Or(t) {
    var l = t.stateNode, e = t.memoizedProps;
    try {
      for (var u = t.type, a = l.attributes; a.length; )
        l.removeAttributeNode(a[0]);
      wt(l, u, e), l[Kt] = t, l[kt] = e;
    } catch (n) {
      Tt(t, t.return, n);
    }
  }
  var Jl = !1, Nt = !1, Gi = !1, pr = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function Lh(t, l) {
    if (t = t.containerInfo, sc = Kn, t = qs(t), Cf(t)) {
      if ("selectionStart" in t)
        var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var u = e.getSelection && e.getSelection();
          if (u && u.rangeCount !== 0) {
            e = u.anchorNode;
            var a = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              e.nodeType, n.nodeType;
            } catch {
              e = null;
              break t;
            }
            var f = 0, c = -1, r = -1, S = 0, M = 0, _ = t, A = null;
            l: for (; ; ) {
              for (var T; _ !== e || a !== 0 && _.nodeType !== 3 || (c = f + a), _ !== n || u !== 0 && _.nodeType !== 3 || (r = f + u), _.nodeType === 3 && (f += _.nodeValue.length), (T = _.firstChild) !== null; )
                A = _, _ = T;
              for (; ; ) {
                if (_ === t) break l;
                if (A === e && ++S === a && (c = f), A === n && ++M === u && (r = f), (T = _.nextSibling) !== null) break;
                _ = A, A = _.parentNode;
              }
              _ = T;
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (oc = { focusedElem: t, selectionRange: e }, Kn = !1, jt = l; jt !== null; )
      if (l = jt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, jt = t;
      else
        for (; jt !== null; ) {
          switch (l = jt, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, e = l, a = n.memoizedProps, n = n.memoizedState, u = e.stateNode;
                try {
                  var F = je(
                    e.type,
                    a,
                    e.elementType === e.type
                  );
                  t = u.getSnapshotBeforeUpdate(
                    F,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = t;
                } catch (W) {
                  Tt(
                    e,
                    e.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                  hc(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, jt = t;
            break;
          }
          jt = l.return;
        }
  }
  function zr(t, l, e) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        de(t, e), u & 4 && ya(5, e);
        break;
      case 1:
        if (de(t, e), u & 4)
          if (t = e.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Tt(e, e.return, f);
            }
          else {
            var a = je(
              e.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Tt(
                e,
                e.return,
                f
              );
            }
          }
        u & 64 && br(e), u & 512 && va(e, e.return);
        break;
      case 3:
        if (de(t, e), u & 64 && (t = e.updateQueue, t !== null)) {
          if (l = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            no(t, l);
          } catch (f) {
            Tt(e, e.return, f);
          }
        }
        break;
      case 27:
        l === null && u & 4 && Or(e);
      case 26:
      case 5:
        de(t, e), l === null && u & 4 && Tr(e), u & 512 && va(e, e.return);
        break;
      case 12:
        de(t, e);
        break;
      case 13:
        de(t, e), u & 4 && Dr(t, e), u & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Ph.bind(
          null,
          e
        ), my(t, e))));
        break;
      case 22:
        if (u = e.memoizedState !== null || Jl, !u) {
          l = l !== null && l.memoizedState !== null || Nt, a = Jl;
          var n = Nt;
          Jl = u, (Nt = l) && !n ? he(
            t,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : de(t, e), Jl = a, Nt = n;
        }
        break;
      case 30:
        break;
      default:
        de(t, e);
    }
  }
  function Rr(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Rr(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && Sf(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var pt = null, It = !1;
  function Wl(t, l, e) {
    for (e = e.child; e !== null; )
      Mr(t, l, e), e = e.sibling;
  }
  function Mr(t, l, e) {
    if (el && typeof el.onCommitFiberUnmount == "function")
      try {
        el.onCommitFiberUnmount(Yu, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Nt || xl(e, l), Wl(
          t,
          l,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Nt || xl(e, l);
        var u = pt, a = It;
        be(e.type) && (pt = e.stateNode, It = !1), Wl(
          t,
          l,
          e
        ), pa(e.stateNode), pt = u, It = a;
        break;
      case 5:
        Nt || xl(e, l);
      case 6:
        if (u = pt, a = It, pt = null, Wl(
          t,
          l,
          e
        ), pt = u, It = a, pt !== null)
          if (It)
            try {
              (pt.nodeType === 9 ? pt.body : pt.nodeName === "HTML" ? pt.ownerDocument.body : pt).removeChild(e.stateNode);
            } catch (n) {
              Tt(
                e,
                l,
                n
              );
            }
          else
            try {
              pt.removeChild(e.stateNode);
            } catch (n) {
              Tt(
                e,
                l,
                n
              );
            }
        break;
      case 18:
        pt !== null && (It ? (t = pt, vd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          e.stateNode
        ), Ha(t)) : vd(pt, e.stateNode));
        break;
      case 4:
        u = pt, a = It, pt = e.stateNode.containerInfo, It = !0, Wl(
          t,
          l,
          e
        ), pt = u, It = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Nt || re(2, e, l), Nt || re(4, e, l), Wl(
          t,
          l,
          e
        );
        break;
      case 1:
        Nt || (xl(e, l), u = e.stateNode, typeof u.componentWillUnmount == "function" && Ar(
          e,
          l,
          u
        )), Wl(
          t,
          l,
          e
        );
        break;
      case 21:
        Wl(
          t,
          l,
          e
        );
        break;
      case 22:
        Nt = (u = Nt) || e.memoizedState !== null, Wl(
          t,
          l,
          e
        ), Nt = u;
        break;
      default:
        Wl(
          t,
          l,
          e
        );
    }
  }
  function Dr(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ha(t);
      } catch (e) {
        Tt(l, l.return, e);
      }
  }
  function Vh(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new pr()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new pr()), l;
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Qi(t, l) {
    var e = Vh(t);
    l.forEach(function(u) {
      var a = Ih.bind(null, t, u);
      e.has(u) || (e.add(u), u.then(a, a));
    });
  }
  function fl(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var a = e[u], n = t, f = l, c = f;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (be(c.type)) {
                pt = c.stateNode, It = !1;
                break t;
              }
              break;
            case 5:
              pt = c.stateNode, It = !1;
              break t;
            case 3:
            case 4:
              pt = c.stateNode.containerInfo, It = !0;
              break t;
          }
          c = c.return;
        }
        if (pt === null) throw Error(s(160));
        Mr(n, f, a), pt = null, It = !1, n = a.alternate, n !== null && (n.return = null), a.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        _r(l, t), l = l.sibling;
  }
  var Ol = null;
  function _r(t, l) {
    var e = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fl(l, t), il(t), u & 4 && (re(3, t, t.return), ya(3, t), re(5, t, t.return));
        break;
      case 1:
        fl(l, t), il(t), u & 512 && (Nt || e === null || xl(e, e.return)), u & 64 && Jl && (t = t.updateQueue, t !== null && (u = t.callbacks, u !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? u : e.concat(u))));
        break;
      case 26:
        var a = Ol;
        if (fl(l, t), il(t), u & 512 && (Nt || e === null || xl(e, e.return)), u & 4) {
          var n = e !== null ? e.memoizedState : null;
          if (u = t.memoizedState, e === null)
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  u = t.type, e = t.memoizedProps, a = a.ownerDocument || a;
                  l: switch (u) {
                    case "title":
                      n = a.getElementsByTagName("title")[0], (!n || n[Gu] || n[Kt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = a.createElement(u), a.head.insertBefore(
                        n,
                        a.querySelector("head > title")
                      )), wt(n, u, e), n[Kt] = t, Gt(n), u = n;
                      break t;
                    case "link":
                      var f = Od(
                        "link",
                        "href",
                        a
                      ).get(u + (e.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            f.splice(c, 1);
                            break l;
                          }
                      }
                      n = a.createElement(u), wt(n, u, e), a.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Od(
                        "meta",
                        "content",
                        a
                      ).get(u + (e.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            f.splice(c, 1);
                            break l;
                          }
                      }
                      n = a.createElement(u), wt(n, u, e), a.head.appendChild(n);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  n[Kt] = t, Gt(n), u = n;
                }
                t.stateNode = u;
              } else
                pd(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Ed(
                a,
                u,
                t.memoizedProps
              );
          else
            n !== u ? (n === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : n.count--, u === null ? pd(
              a,
              t.type,
              t.stateNode
            ) : Ed(
              a,
              u,
              t.memoizedProps
            )) : u === null && t.stateNode !== null && Yi(
              t,
              t.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        fl(l, t), il(t), u & 512 && (Nt || e === null || xl(e, e.return)), e !== null && u & 4 && Yi(
          t,
          t.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (fl(l, t), il(t), u & 512 && (Nt || e === null || xl(e, e.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            tu(a, "");
          } catch (T) {
            Tt(t, t.return, T);
          }
        }
        u & 4 && t.stateNode != null && (a = t.memoizedProps, Yi(
          t,
          a,
          e !== null ? e.memoizedProps : a
        )), u & 1024 && (Gi = !0);
        break;
      case 6:
        if (fl(l, t), il(t), u & 4) {
          if (t.stateNode === null)
            throw Error(s(162));
          u = t.memoizedProps, e = t.stateNode;
          try {
            e.nodeValue = u;
          } catch (T) {
            Tt(t, t.return, T);
          }
        }
        break;
      case 3:
        if (Ln = null, a = Ol, Ol = jn(l.containerInfo), fl(l, t), Ol = a, il(t), u & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ha(l.containerInfo);
          } catch (T) {
            Tt(t, t.return, T);
          }
        Gi && (Gi = !1, xr(t));
        break;
      case 4:
        u = Ol, Ol = jn(
          t.stateNode.containerInfo
        ), fl(l, t), il(t), Ol = u;
        break;
      case 12:
        fl(l, t), il(t);
        break;
      case 13:
        fl(l, t), il(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Ki = Ml()), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Qi(t, u)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, S = Jl, M = Nt;
        if (Jl = S || a, Nt = M || r, fl(l, t), Nt = M, Jl = S, il(t), u & 8192)
          t: for (l = t.stateNode, l._visibility = a ? l._visibility & -2 : l._visibility | 1, a && (e === null || r || Jl || Nt || Ze(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                r = e = l;
                try {
                  if (n = r.stateNode, a)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = r.stateNode;
                    var _ = r.memoizedProps.style, A = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (T) {
                  Tt(r, r.return, T);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                r = l;
                try {
                  r.stateNode.nodeValue = a ? "" : r.memoizedProps;
                } catch (T) {
                  Tt(r, r.return, T);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
        u & 4 && (u = t.updateQueue, u !== null && (e = u.retryQueue, e !== null && (u.retryQueue = null, Qi(t, e))));
        break;
      case 19:
        fl(l, t), il(t), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, Qi(t, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fl(l, t), il(t);
    }
  }
  function il(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, u = t.return; u !== null; ) {
          if (Er(u)) {
            e = u;
            break;
          }
          u = u.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var a = e.stateNode, n = Ci(t);
            Dn(t, n, a);
            break;
          case 5:
            var f = e.stateNode;
            e.flags & 32 && (tu(f, ""), e.flags &= -33);
            var c = Ci(t);
            Dn(t, c, f);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, S = Ci(t);
            Xi(
              t,
              S,
              r
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (M) {
        Tt(t, t.return, M);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function xr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        xr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function de(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        zr(t, l.alternate, l), l = l.sibling;
  }
  function Ze(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          re(4, l, l.return), Ze(l);
          break;
        case 1:
          xl(l, l.return);
          var e = l.stateNode;
          typeof e.componentWillUnmount == "function" && Ar(
            l,
            l.return,
            e
          ), Ze(l);
          break;
        case 27:
          pa(l.stateNode);
        case 26:
        case 5:
          xl(l, l.return), Ze(l);
          break;
        case 22:
          l.memoizedState === null && Ze(l);
          break;
        case 30:
          Ze(l);
          break;
        default:
          Ze(l);
      }
      t = t.sibling;
    }
  }
  function he(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate, a = t, n = l, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          he(
            a,
            n,
            e
          ), ya(4, n);
          break;
        case 1:
          if (he(
            a,
            n,
            e
          ), u = n, a = u.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (S) {
              Tt(u, u.return, S);
            }
          if (u = n, a = u.updateQueue, a !== null) {
            var c = u.stateNode;
            try {
              var r = a.shared.hiddenCallbacks;
              if (r !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < r.length; a++)
                  ao(r[a], c);
            } catch (S) {
              Tt(u, u.return, S);
            }
          }
          e && f & 64 && br(n), va(n, n.return);
          break;
        case 27:
          Or(n);
        case 26:
        case 5:
          he(
            a,
            n,
            e
          ), e && u === null && f & 4 && Tr(n), va(n, n.return);
          break;
        case 12:
          he(
            a,
            n,
            e
          );
          break;
        case 13:
          he(
            a,
            n,
            e
          ), e && f & 4 && Dr(a, n);
          break;
        case 22:
          n.memoizedState === null && he(
            a,
            n,
            e
          ), va(n, n.return);
          break;
        case 30:
          break;
        default:
          he(
            a,
            n,
            e
          );
      }
      l = l.sibling;
    }
  }
  function ji(t, l) {
    var e = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && ta(e));
  }
  function Zi(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ta(t));
  }
  function Ul(t, l, e, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ur(
          t,
          l,
          e,
          u
        ), l = l.sibling;
  }
  function Ur(t, l, e, u) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && ya(9, l);
        break;
      case 1:
        Ul(
          t,
          l,
          e,
          u
        );
        break;
      case 3:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && ta(t)));
        break;
      case 12:
        if (a & 2048) {
          Ul(
            t,
            l,
            e,
            u
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (r) {
            Tt(l, l.return, r);
          }
        } else
          Ul(
            t,
            l,
            e,
            u
          );
        break;
      case 13:
        Ul(
          t,
          l,
          e,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, f = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ul(
          t,
          l,
          e,
          u
        ) : ma(t, l) : n._visibility & 2 ? Ul(
          t,
          l,
          e,
          u
        ) : (n._visibility |= 2, bu(
          t,
          l,
          e,
          u,
          (l.subtreeFlags & 10256) !== 0
        )), a & 2048 && ji(f, l);
        break;
      case 24:
        Ul(
          t,
          l,
          e,
          u
        ), a & 2048 && Zi(l.alternate, l);
        break;
      default:
        Ul(
          t,
          l,
          e,
          u
        );
    }
  }
  function bu(t, l, e, u, a) {
    for (a = a && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, f = l, c = e, r = u, S = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          bu(
            n,
            f,
            c,
            r,
            a
          ), ya(8, f);
          break;
        case 23:
          break;
        case 22:
          var M = f.stateNode;
          f.memoizedState !== null ? M._visibility & 2 ? bu(
            n,
            f,
            c,
            r,
            a
          ) : ma(
            n,
            f
          ) : (M._visibility |= 2, bu(
            n,
            f,
            c,
            r,
            a
          )), a && S & 2048 && ji(
            f.alternate,
            f
          );
          break;
        case 24:
          bu(
            n,
            f,
            c,
            r,
            a
          ), a && S & 2048 && Zi(f.alternate, f);
          break;
        default:
          bu(
            n,
            f,
            c,
            r,
            a
          );
      }
      l = l.sibling;
    }
  }
  function ma(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var e = t, u = l, a = u.flags;
        switch (u.tag) {
          case 22:
            ma(e, u), a & 2048 && ji(
              u.alternate,
              u
            );
            break;
          case 24:
            ma(e, u), a & 2048 && Zi(u.alternate, u);
            break;
          default:
            ma(e, u);
        }
        l = l.sibling;
      }
  }
  var ga = 8192;
  function Au(t) {
    if (t.subtreeFlags & ga)
      for (t = t.child; t !== null; )
        Hr(t), t = t.sibling;
  }
  function Hr(t) {
    switch (t.tag) {
      case 26:
        Au(t), t.flags & ga && t.memoizedState !== null && _y(
          Ol,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Au(t);
        break;
      case 3:
      case 4:
        var l = Ol;
        Ol = jn(t.stateNode.containerInfo), Au(t), Ol = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = ga, ga = 16777216, Au(t), ga = l) : Au(t));
        break;
      default:
        Au(t);
    }
  }
  function Nr(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function Sa(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          jt = u, Br(
            u,
            t
          );
        }
      Nr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        qr(t), t = t.sibling;
  }
  function qr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Sa(t), t.flags & 2048 && re(9, t, t.return);
        break;
      case 3:
        Sa(t);
        break;
      case 12:
        Sa(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, _n(t)) : Sa(t);
        break;
      default:
        Sa(t);
    }
  }
  function _n(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var u = l[e];
          jt = u, Br(
            u,
            t
          );
        }
      Nr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          re(8, l, l.return), _n(l);
          break;
        case 22:
          e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, _n(l));
          break;
        default:
          _n(l);
      }
      t = t.sibling;
    }
  }
  function Br(t, l) {
    for (; jt !== null; ) {
      var e = jt;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          re(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var u = e.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          ta(e.memoizedState.cache);
      }
      if (u = e.child, u !== null) u.return = e, jt = u;
      else
        t: for (e = t; jt !== null; ) {
          u = jt;
          var a = u.sibling, n = u.return;
          if (Rr(u), u === e) {
            jt = null;
            break t;
          }
          if (a !== null) {
            a.return = n, jt = a;
            break t;
          }
          jt = n;
        }
    }
  }
  var wh = {
    getCacheForType: function(t) {
      var l = Jt(Yt), e = l.data.get(t);
      return e === void 0 && (e = t(), l.data.set(t, e)), e;
    }
  }, Kh = typeof WeakMap == "function" ? WeakMap : Map, ht = 0, Et = null, ft = null, ct = 0, yt = 0, cl = null, ye = !1, Tu = !1, Li = !1, $l = 0, Ut = 0, ve = 0, Le = 0, Vi = 0, Al = 0, Eu = 0, ba = null, tl = null, wi = !1, Ki = 0, xn = 1 / 0, Un = null, me = null, Vt = 0, ge = null, Ou = null, pu = 0, Ji = 0, Wi = null, Yr = null, Aa = 0, $i = null;
  function sl() {
    if ((ht & 2) !== 0 && ct !== 0)
      return ct & -ct;
    if (E.T !== null) {
      var t = ru;
      return t !== 0 ? t : ec();
    }
    return Fc();
  }
  function Cr() {
    Al === 0 && (Al = (ct & 536870912) === 0 || rt ? Jc() : 536870912);
    var t = bl.current;
    return t !== null && (t.flags |= 32), Al;
  }
  function ol(t, l, e) {
    (t === Et && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (zu(t, 0), Se(
      t,
      ct,
      Al,
      !1
    )), Xu(t, e), ((ht & 2) === 0 || t !== Et) && (t === Et && ((ht & 2) === 0 && (Le |= e), Ut === 4 && Se(
      t,
      ct,
      Al,
      !1
    )), Hl(t));
  }
  function Xr(t, l, e) {
    if ((ht & 6) !== 0) throw Error(s(327));
    var u = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Cu(t, l), a = u ? $h(t, l) : Pi(t, l, !0), n = u;
    do {
      if (a === 0) {
        Tu && !u && Se(t, l, 0, !1);
        break;
      } else {
        if (e = t.current.alternate, n && !Jh(e)) {
          a = Pi(t, l, !1), n = !1;
          continue;
        }
        if (a === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            l = f;
            t: {
              var c = t;
              a = ba;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (zu(c, f).flags |= 256), f = Pi(
                c,
                f,
                !1
              ), f !== 2) {
                if (Li && !r) {
                  c.errorRecoveryDisabledLanes |= n, Le |= n, a = 4;
                  break t;
                }
                n = tl, tl = a, n !== null && (tl === null ? tl = n : tl.push.apply(
                  tl,
                  n
                ));
              }
              a = f;
            }
            if (n = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          zu(t, 0), Se(t, l, 0, !0);
          break;
        }
        t: {
          switch (u = t, n = a, n) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Se(
                u,
                l,
                Al,
                !ye
              );
              break t;
            case 2:
              tl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((l & 62914560) === l && (a = Ki + 300 - Ml(), 10 < a)) {
            if (Se(
              u,
              l,
              Al,
              !ye
            ), ja(u, 0, !0) !== 0) break t;
            u.timeoutHandle = hd(
              Gr.bind(
                null,
                u,
                e,
                tl,
                Un,
                wi,
                l,
                Al,
                Le,
                Eu,
                ye,
                n,
                2,
                -0,
                0
              ),
              a
            );
            break t;
          }
          Gr(
            u,
            e,
            tl,
            Un,
            wi,
            l,
            Al,
            Le,
            Eu,
            ye,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hl(t);
  }
  function Gr(t, l, e, u, a, n, f, c, r, S, M, _, A, T) {
    if (t.timeoutHandle = -1, _ = l.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (Ma = { stylesheets: null, count: 0, unsuspend: Dy }, Hr(l), _ = xy(), _ !== null)) {
      t.cancelPendingCommit = _(
        Kr.bind(
          null,
          t,
          l,
          n,
          e,
          u,
          a,
          f,
          c,
          r,
          M,
          1,
          A,
          T
        )
      ), Se(t, n, f, !S);
      return;
    }
    Kr(
      t,
      l,
      n,
      e,
      u,
      a,
      f,
      c,
      r
    );
  }
  function Jh(t) {
    for (var l = t; ; ) {
      var e = l.tag;
      if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var u = 0; u < e.length; u++) {
          var a = e[u], n = a.getSnapshot;
          a = a.value;
          try {
            if (!al(n(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = l.child, l.subtreeFlags & 16384 && e !== null)
        e.return = l, l = e;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Se(t, l, e, u) {
    l &= ~Vi, l &= ~Le, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var a = l; 0 < a; ) {
      var n = 31 - ul(a), f = 1 << n;
      u[n] = -1, a &= ~f;
    }
    e !== 0 && $c(t, e, l);
  }
  function Hn() {
    return (ht & 6) === 0 ? (Ta(0), !1) : !0;
  }
  function ki() {
    if (ft !== null) {
      if (yt === 0)
        var t = ft.return;
      else
        t = ft, jl = Ce = null, hi(t), gu = null, ra = 0, t = ft;
      for (; t !== null; )
        Sr(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function zu(t, l) {
    var e = t.timeoutHandle;
    e !== -1 && (t.timeoutHandle = -1, ry(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ki(), Et = t, ft = e = Xl(t.current, null), ct = l, yt = 0, cl = null, ye = !1, Tu = Cu(t, l), Li = !1, Eu = Al = Vi = Le = ve = Ut = 0, tl = ba = null, wi = !1, (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var a = 31 - ul(u), n = 1 << a;
        l |= t[a], u &= ~n;
      }
    return $l = l, Ia(), e;
  }
  function Qr(t, l) {
    ut = null, E.H = bn, l === ea || l === sn ? (l = eo(), yt = 3) : l === Is ? (l = eo(), yt = 4) : yt = l === ar ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, cl = l, ft === null && (Ut = 1, pn(
      t,
      vl(l, t.current)
    ));
  }
  function jr() {
    var t = E.H;
    return E.H = bn, t === null ? bn : t;
  }
  function Zr() {
    var t = E.A;
    return E.A = wh, t;
  }
  function Fi() {
    Ut = 4, ye || (ct & 4194048) !== ct && bl.current !== null || (Tu = !0), (ve & 134217727) === 0 && (Le & 134217727) === 0 || Et === null || Se(
      Et,
      ct,
      Al,
      !1
    );
  }
  function Pi(t, l, e) {
    var u = ht;
    ht |= 2;
    var a = jr(), n = Zr();
    (Et !== t || ct !== l) && (Un = null, zu(t, l)), l = !1;
    var f = Ut;
    t: do
      try {
        if (yt !== 0 && ft !== null) {
          var c = ft, r = cl;
          switch (yt) {
            case 8:
              ki(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              bl.current === null && (l = !0);
              var S = yt;
              if (yt = 0, cl = null, Ru(t, c, r, S), e && Tu) {
                f = 0;
                break t;
              }
              break;
            default:
              S = yt, yt = 0, cl = null, Ru(t, c, r, S);
          }
        }
        Wh(), f = Ut;
        break;
      } catch (M) {
        Qr(t, M);
      }
    while (!0);
    return l && t.shellSuspendCounter++, jl = Ce = null, ht = u, E.H = a, E.A = n, ft === null && (Et = null, ct = 0, Ia()), f;
  }
  function Wh() {
    for (; ft !== null; ) Lr(ft);
  }
  function $h(t, l) {
    var e = ht;
    ht |= 2;
    var u = jr(), a = Zr();
    Et !== t || ct !== l ? (Un = null, xn = Ml() + 500, zu(t, l)) : Tu = Cu(
      t,
      l
    );
    t: do
      try {
        if (yt !== 0 && ft !== null) {
          l = ft;
          var n = cl;
          l: switch (yt) {
            case 1:
              yt = 0, cl = null, Ru(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (to(n)) {
                yt = 0, cl = null, Vr(l);
                break;
              }
              l = function() {
                yt !== 2 && yt !== 9 || Et !== t || (yt = 7), Hl(t);
              }, n.then(l, l);
              break t;
            case 3:
              yt = 7;
              break t;
            case 4:
              yt = 5;
              break t;
            case 7:
              to(n) ? (yt = 0, cl = null, Vr(l)) : (yt = 0, cl = null, Ru(t, l, n, 7));
              break;
            case 5:
              var f = null;
              switch (ft.tag) {
                case 26:
                  f = ft.memoizedState;
                case 5:
                case 27:
                  var c = ft;
                  if (!f || zd(f)) {
                    yt = 0, cl = null;
                    var r = c.sibling;
                    if (r !== null) ft = r;
                    else {
                      var S = c.return;
                      S !== null ? (ft = S, Nn(S)) : ft = null;
                    }
                    break l;
                  }
              }
              yt = 0, cl = null, Ru(t, l, n, 5);
              break;
            case 6:
              yt = 0, cl = null, Ru(t, l, n, 6);
              break;
            case 8:
              ki(), Ut = 6;
              break t;
            default:
              throw Error(s(462));
          }
        }
        kh();
        break;
      } catch (M) {
        Qr(t, M);
      }
    while (!0);
    return jl = Ce = null, E.H = u, E.A = a, ht = e, ft !== null ? 0 : (Et = null, ct = 0, Ia(), Ut);
  }
  function kh() {
    for (; ft !== null && !S0(); )
      Lr(ft);
  }
  function Lr(t) {
    var l = mr(t.alternate, t, $l);
    t.memoizedProps = t.pendingProps, l === null ? Nn(t) : ft = l;
  }
  function Vr(t) {
    var l = t, e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = or(
          e,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ct
        );
        break;
      case 11:
        l = or(
          e,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ct
        );
        break;
      case 5:
        hi(l);
      default:
        Sr(e, l), l = ft = Vs(l, $l), l = mr(e, l, $l);
    }
    t.memoizedProps = t.pendingProps, l === null ? Nn(t) : ft = l;
  }
  function Ru(t, l, e, u) {
    jl = Ce = null, hi(l), gu = null, ra = 0;
    var a = l.return;
    try {
      if (Gh(
        t,
        a,
        l,
        e,
        ct
      )) {
        Ut = 1, pn(
          t,
          vl(e, t.current)
        ), ft = null;
        return;
      }
    } catch (n) {
      if (a !== null) throw ft = a, n;
      Ut = 1, pn(
        t,
        vl(e, t.current)
      ), ft = null;
      return;
    }
    l.flags & 32768 ? (rt || u === 1 ? t = !0 : Tu || (ct & 536870912) !== 0 ? t = !1 : (ye = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = bl.current, u !== null && u.tag === 13 && (u.flags |= 16384))), wr(l, t)) : Nn(l);
  }
  function Nn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        wr(
          l,
          ye
        );
        return;
      }
      t = l.return;
      var e = jh(
        l.alternate,
        l,
        $l
      );
      if (e !== null) {
        ft = e;
        return;
      }
      if (l = l.sibling, l !== null) {
        ft = l;
        return;
      }
      ft = l = t;
    } while (l !== null);
    Ut === 0 && (Ut = 5);
  }
  function wr(t, l) {
    do {
      var e = Zh(t.alternate, t);
      if (e !== null) {
        e.flags &= 32767, ft = e;
        return;
      }
      if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = e;
    } while (t !== null);
    Ut = 6, ft = null;
  }
  function Kr(t, l, e, u, a, n, f, c, r) {
    t.cancelPendingCommit = null;
    do
      qn();
    while (Vt !== 0);
    if ((ht & 6) !== 0) throw Error(s(327));
    if (l !== null) {
      if (l === t.current) throw Error(s(177));
      if (n = l.lanes | l.childLanes, n |= Zf, D0(
        t,
        e,
        n,
        f,
        c,
        r
      ), t === Et && (ft = Et = null, ct = 0), Ou = l, ge = t, pu = e, Ji = n, Wi = a, Yr = u, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, ty(Xa, function() {
        return Fr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
        u = E.T, E.T = null, a = B.p, B.p = 2, f = ht, ht |= 4;
        try {
          Lh(t, l, e);
        } finally {
          ht = f, B.p = a, E.T = u;
        }
      }
      Vt = 1, Jr(), Wr(), $r();
    }
  }
  function Jr() {
    if (Vt === 1) {
      Vt = 0;
      var t = ge, l = Ou, e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        e = E.T, E.T = null;
        var u = B.p;
        B.p = 2;
        var a = ht;
        ht |= 4;
        try {
          _r(l, t);
          var n = oc, f = qs(t.containerInfo), c = n.focusedElem, r = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Ns(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && Cf(c)) {
              var S = r.start, M = r.end;
              if (M === void 0 && (M = S), "selectionStart" in c)
                c.selectionStart = S, c.selectionEnd = Math.min(
                  M,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, A = _ && _.defaultView || window;
                if (A.getSelection) {
                  var T = A.getSelection(), F = c.textContent.length, W = Math.min(r.start, F), St = r.end === void 0 ? W : Math.min(r.end, F);
                  !T.extend && W > St && (f = St, St = W, W = f);
                  var v = Hs(
                    c,
                    W
                  ), y = Hs(
                    c,
                    St
                  );
                  if (v && y && (T.rangeCount !== 1 || T.anchorNode !== v.node || T.anchorOffset !== v.offset || T.focusNode !== y.node || T.focusOffset !== y.offset)) {
                    var g = _.createRange();
                    g.setStart(v.node, v.offset), T.removeAllRanges(), W > St ? (T.addRange(g), T.extend(y.node, y.offset)) : (g.setEnd(y.node, y.offset), T.addRange(g));
                  }
                }
              }
            }
            for (_ = [], T = c; T = T.parentNode; )
              T.nodeType === 1 && _.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var D = _[c];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          Kn = !!sc, oc = sc = null;
        } finally {
          ht = a, B.p = u, E.T = e;
        }
      }
      t.current = l, Vt = 2;
    }
  }
  function Wr() {
    if (Vt === 2) {
      Vt = 0;
      var t = ge, l = Ou, e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        e = E.T, E.T = null;
        var u = B.p;
        B.p = 2;
        var a = ht;
        ht |= 4;
        try {
          zr(t, l.alternate, l);
        } finally {
          ht = a, B.p = u, E.T = e;
        }
      }
      Vt = 3;
    }
  }
  function $r() {
    if (Vt === 4 || Vt === 3) {
      Vt = 0, b0();
      var t = ge, l = Ou, e = pu, u = Yr;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, Ou = ge = null, kr(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (me = null), mf(e), l = l.stateNode, el && typeof el.onCommitFiberRoot == "function")
        try {
          el.onCommitFiberRoot(
            Yu,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        l = E.T, a = B.p, B.p = 2, E.T = null;
        try {
          for (var n = t.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          E.T = l, B.p = a;
        }
      }
      (pu & 3) !== 0 && qn(), Hl(t), a = t.pendingLanes, (e & 4194090) !== 0 && (a & 42) !== 0 ? t === $i ? Aa++ : (Aa = 0, $i = t) : Aa = 0, Ta(0);
    }
  }
  function kr(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, ta(l)));
  }
  function qn(t) {
    return Jr(), Wr(), $r(), Fr();
  }
  function Fr() {
    if (Vt !== 5) return !1;
    var t = ge, l = Ji;
    Ji = 0;
    var e = mf(pu), u = E.T, a = B.p;
    try {
      B.p = 32 > e ? 32 : e, E.T = null, e = Wi, Wi = null;
      var n = ge, f = pu;
      if (Vt = 0, Ou = ge = null, pu = 0, (ht & 6) !== 0) throw Error(s(331));
      var c = ht;
      if (ht |= 4, qr(n.current), Ur(
        n,
        n.current,
        f,
        e
      ), ht = c, Ta(0, !1), el && typeof el.onPostCommitFiberRoot == "function")
        try {
          el.onPostCommitFiberRoot(Yu, n);
        } catch {
        }
      return !0;
    } finally {
      B.p = a, E.T = u, kr(t, l);
    }
  }
  function Pr(t, l, e) {
    l = vl(e, l), l = Mi(t.stateNode, l, 2), t = ie(t, l, 2), t !== null && (Xu(t, 2), Hl(t));
  }
  function Tt(t, l, e) {
    if (t.tag === 3)
      Pr(t, t, e);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Pr(
            l,
            t,
            e
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (me === null || !me.has(u))) {
            t = vl(e, t), e = er(2), u = ie(l, e, 2), u !== null && (ur(
              e,
              u,
              l,
              t
            ), Xu(u, 2), Hl(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function Ii(t, l, e) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new Kh();
      var a = /* @__PURE__ */ new Set();
      u.set(l, a);
    } else
      a = u.get(l), a === void 0 && (a = /* @__PURE__ */ new Set(), u.set(l, a));
    a.has(e) || (Li = !0, a.add(e), t = Fh.bind(null, t, l, e), l.then(t, t));
  }
  function Fh(t, l, e) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, Et === t && (ct & e) === e && (Ut === 4 || Ut === 3 && (ct & 62914560) === ct && 300 > Ml() - Ki ? (ht & 2) === 0 && zu(t, 0) : Vi |= e, Eu === ct && (Eu = 0)), Hl(t);
  }
  function Ir(t, l) {
    l === 0 && (l = Wc()), t = iu(t, l), t !== null && (Xu(t, l), Hl(t));
  }
  function Ph(t) {
    var l = t.memoizedState, e = 0;
    l !== null && (e = l.retryLane), Ir(t, e);
  }
  function Ih(t, l) {
    var e = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, a = t.memoizedState;
        a !== null && (e = a.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(l), Ir(t, e);
  }
  function ty(t, l) {
    return df(t, l);
  }
  var Bn = null, Mu = null, tc = !1, Yn = !1, lc = !1, Ve = 0;
  function Hl(t) {
    t !== Mu && t.next === null && (Mu === null ? Bn = Mu = t : Mu = Mu.next = t), Yn = !0, tc || (tc = !0, ey());
  }
  function Ta(t, l) {
    if (!lc && Yn) {
      lc = !0;
      do
        for (var e = !1, u = Bn; u !== null; ) {
          if (t !== 0) {
            var a = u.pendingLanes;
            if (a === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - ul(42 | t) + 1) - 1, n &= a & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, ud(u, n));
          } else
            n = ct, n = ja(
              u,
              u === Et ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Cu(u, n) || (e = !0, ud(u, n));
          u = u.next;
        }
      while (e);
      lc = !1;
    }
  }
  function ly() {
    td();
  }
  function td() {
    Yn = tc = !1;
    var t = 0;
    Ve !== 0 && (oy() && (t = Ve), Ve = 0);
    for (var l = Ml(), e = null, u = Bn; u !== null; ) {
      var a = u.next, n = ld(u, l);
      n === 0 ? (u.next = null, e === null ? Bn = a : e.next = a, a === null && (Mu = e)) : (e = u, (t !== 0 || (n & 3) !== 0) && (Yn = !0)), u = a;
    }
    Ta(t);
  }
  function ld(t, l) {
    for (var e = t.suspendedLanes, u = t.pingedLanes, a = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ul(n), c = 1 << f, r = a[f];
      r === -1 ? ((c & e) === 0 || (c & u) !== 0) && (a[f] = M0(c, l)) : r <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = Et, e = ct, e = ja(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, e === 0 || t === l && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && hf(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((e & 3) === 0 || Cu(t, e)) {
      if (l = e & -e, l === t.callbackPriority) return l;
      switch (u !== null && hf(u), mf(e)) {
        case 2:
        case 8:
          e = wc;
          break;
        case 32:
          e = Xa;
          break;
        case 268435456:
          e = Kc;
          break;
        default:
          e = Xa;
      }
      return u = ed.bind(null, t), e = df(e, u), t.callbackPriority = l, t.callbackNode = e, l;
    }
    return u !== null && u !== null && hf(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function ed(t, l) {
    if (Vt !== 0 && Vt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var e = t.callbackNode;
    if (qn() && t.callbackNode !== e)
      return null;
    var u = ct;
    return u = ja(
      t,
      t === Et ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (Xr(t, u, l), ld(t, Ml()), t.callbackNode != null && t.callbackNode === e ? ed.bind(null, t) : null);
  }
  function ud(t, l) {
    if (qn()) return null;
    Xr(t, l, !0);
  }
  function ey() {
    dy(function() {
      (ht & 6) !== 0 ? df(
        Vc,
        ly
      ) : td();
    });
  }
  function ec() {
    return Ve === 0 && (Ve = Jc()), Ve;
  }
  function ad(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ka("" + t);
  }
  function nd(t, l) {
    var e = l.ownerDocument.createElement("input");
    return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
  }
  function uy(t, l, e, u, a) {
    if (l === "submit" && e && e.stateNode === a) {
      var n = ad(
        (a[kt] || null).action
      ), f = u.submitter;
      f && (l = (l = f[kt] || null) ? ad(l.formAction) : f.getAttribute("formAction"), l !== null && (n = l, f = null));
      var c = new ka(
        "action",
        "action",
        null,
        u,
        a
      );
      t.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (Ve !== 0) {
                  var r = f ? nd(a, f) : new FormData(a);
                  Ei(
                    e,
                    {
                      pending: !0,
                      data: r,
                      method: a.method,
                      action: n
                    },
                    null,
                    r
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), r = f ? nd(a, f) : new FormData(a), Ei(
                  e,
                  {
                    pending: !0,
                    data: r,
                    method: a.method,
                    action: n
                  },
                  n,
                  r
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var uc = 0; uc < jf.length; uc++) {
    var ac = jf[uc], ay = ac.toLowerCase(), ny = ac[0].toUpperCase() + ac.slice(1);
    El(
      ay,
      "on" + ny
    );
  }
  El(Cs, "onAnimationEnd"), El(Xs, "onAnimationIteration"), El(Gs, "onAnimationStart"), El("dblclick", "onDoubleClick"), El("focusin", "onFocus"), El("focusout", "onBlur"), El(Eh, "onTransitionRun"), El(Oh, "onTransitionStart"), El(ph, "onTransitionCancel"), El(Qs, "onTransitionEnd"), Fe("onMouseEnter", ["mouseout", "mouseover"]), Fe("onMouseLeave", ["mouseout", "mouseover"]), Fe("onPointerEnter", ["pointerout", "pointerover"]), Fe("onPointerLeave", ["pointerout", "pointerover"]), De(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), De(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), De("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), De(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), De(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), De(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ea = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ea)
  );
  function fd(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var u = t[e], a = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], r = c.instance, S = c.currentTarget;
            if (c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = S;
            try {
              n(a);
            } catch (M) {
              On(M);
            }
            a.currentTarget = null, n = r;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], r = c.instance, S = c.currentTarget, c = c.listener, r !== n && a.isPropagationStopped())
              break t;
            n = c, a.currentTarget = S;
            try {
              n(a);
            } catch (M) {
              On(M);
            }
            a.currentTarget = null, n = r;
          }
      }
    }
  }
  function it(t, l) {
    var e = l[gf];
    e === void 0 && (e = l[gf] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    e.has(u) || (id(l, t, 2, !1), e.add(u));
  }
  function nc(t, l, e) {
    var u = 0;
    l && (u |= 4), id(
      e,
      t,
      u,
      l
    );
  }
  var Cn = "_reactListening" + Math.random().toString(36).slice(2);
  function fc(t) {
    if (!t[Cn]) {
      t[Cn] = !0, Ic.forEach(function(e) {
        e !== "selectionchange" && (fy.has(e) || nc(e, !1, t), nc(e, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Cn] || (l[Cn] = !0, nc("selectionchange", !1, l));
    }
  }
  function id(t, l, e, u) {
    switch (Ud(l)) {
      case 2:
        var a = Ny;
        break;
      case 8:
        a = qy;
        break;
      default:
        a = Ac;
    }
    e = a.bind(
      null,
      l,
      e,
      t
    ), a = void 0, !Df || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (a = !0), u ? a !== void 0 ? t.addEventListener(l, e, {
      capture: !0,
      passive: a
    }) : t.addEventListener(l, e, !0) : a !== void 0 ? t.addEventListener(l, e, {
      passive: a
    }) : t.addEventListener(l, e, !1);
  }
  function ic(t, l, e, u, a) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === a) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var r = f.tag;
              if ((r === 3 || r === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = We(c), f === null) return;
            if (r = f.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              u = n = f;
              continue t;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    hs(function() {
      var S = n, M = Rf(e), _ = [];
      t: {
        var A = js.get(t);
        if (A !== void 0) {
          var T = ka, F = t;
          switch (t) {
            case "keypress":
              if (Wa(e) === 0) break t;
            case "keydown":
            case "keyup":
              T = th;
              break;
            case "focusin":
              F = "focus", T = Hf;
              break;
            case "focusout":
              F = "blur", T = Hf;
              break;
            case "beforeblur":
            case "afterblur":
              T = Hf;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = Z0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = uh;
              break;
            case Cs:
            case Xs:
            case Gs:
              T = w0;
              break;
            case Qs:
              T = nh;
              break;
            case "scroll":
            case "scrollend":
              T = Q0;
              break;
            case "wheel":
              T = ih;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = J0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Ss;
              break;
            case "toggle":
            case "beforetoggle":
              T = sh;
          }
          var W = (l & 4) !== 0, St = !W && (t === "scroll" || t === "scrollend"), v = W ? A !== null ? A + "Capture" : null : A;
          W = [];
          for (var y = S, g; y !== null; ) {
            var D = y;
            if (g = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || g === null || v === null || (D = ju(y, v), D != null && W.push(
              Oa(y, D, g)
            )), St) break;
            y = y.return;
          }
          0 < W.length && (A = new T(
            A,
            F,
            null,
            e,
            M
          ), _.push({ event: A, listeners: W }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (A = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", A && e !== zf && (F = e.relatedTarget || e.fromElement) && (We(F) || F[Je]))
            break t;
          if ((T || A) && (A = M.window === M ? M : (A = M.ownerDocument) ? A.defaultView || A.parentWindow : window, T ? (F = e.relatedTarget || e.toElement, T = S, F = F ? We(F) : null, F !== null && (St = O(F), W = F.tag, F !== St || W !== 5 && W !== 27 && W !== 6) && (F = null)) : (T = null, F = S), T !== F)) {
            if (W = ms, D = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (W = Ss, D = "onPointerLeave", v = "onPointerEnter", y = "pointer"), St = T == null ? A : Qu(T), g = F == null ? A : Qu(F), A = new W(
              D,
              y + "leave",
              T,
              e,
              M
            ), A.target = St, A.relatedTarget = g, D = null, We(M) === S && (W = new W(
              v,
              y + "enter",
              F,
              e,
              M
            ), W.target = g, W.relatedTarget = St, D = W), St = D, T && F)
              l: {
                for (W = T, v = F, y = 0, g = W; g; g = Du(g))
                  y++;
                for (g = 0, D = v; D; D = Du(D))
                  g++;
                for (; 0 < y - g; )
                  W = Du(W), y--;
                for (; 0 < g - y; )
                  v = Du(v), g--;
                for (; y--; ) {
                  if (W === v || v !== null && W === v.alternate)
                    break l;
                  W = Du(W), v = Du(v);
                }
                W = null;
              }
            else W = null;
            T !== null && cd(
              _,
              A,
              T,
              W,
              !1
            ), F !== null && St !== null && cd(
              _,
              St,
              F,
              W,
              !0
            );
          }
        }
        t: {
          if (A = S ? Qu(S) : window, T = A.nodeName && A.nodeName.toLowerCase(), T === "select" || T === "input" && A.type === "file")
            var Q = Rs;
          else if (ps(A))
            if (Ms)
              Q = bh;
            else {
              Q = gh;
              var at = mh;
            }
          else
            T = A.nodeName, !T || T.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? S && pf(S.elementType) && (Q = Rs) : Q = Sh;
          if (Q && (Q = Q(t, S))) {
            zs(
              _,
              Q,
              e,
              M
            );
            break t;
          }
          at && at(t, A, S), t === "focusout" && S && A.type === "number" && S.memoizedProps.value != null && Of(A, "number", A.value);
        }
        switch (at = S ? Qu(S) : window, t) {
          case "focusin":
            (ps(at) || at.contentEditable === "true") && (au = at, Xf = S, $u = null);
            break;
          case "focusout":
            $u = Xf = au = null;
            break;
          case "mousedown":
            Gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gf = !1, Bs(_, e, M);
            break;
          case "selectionchange":
            if (Th) break;
          case "keydown":
          case "keyup":
            Bs(_, e, M);
        }
        var L;
        if (qf)
          t: {
            switch (t) {
              case "compositionstart":
                var k = "onCompositionStart";
                break t;
              case "compositionend":
                k = "onCompositionEnd";
                break t;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break t;
            }
            k = void 0;
          }
        else
          uu ? Es(t, e) && (k = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (k = "onCompositionStart");
        k && (bs && e.locale !== "ko" && (uu || k !== "onCompositionStart" ? k === "onCompositionEnd" && uu && (L = ys()) : (ue = M, _f = "value" in ue ? ue.value : ue.textContent, uu = !0)), at = Xn(S, k), 0 < at.length && (k = new gs(
          k,
          t,
          null,
          e,
          M
        ), _.push({ event: k, listeners: at }), L ? k.data = L : (L = Os(e), L !== null && (k.data = L)))), (L = rh ? dh(t, e) : hh(t, e)) && (k = Xn(S, "onBeforeInput"), 0 < k.length && (at = new gs(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          M
        ), _.push({
          event: at,
          listeners: k
        }), at.data = L)), uy(
          _,
          t,
          S,
          e,
          M
        );
      }
      fd(_, l);
    });
  }
  function Oa(t, l, e) {
    return {
      instance: t,
      listener: l,
      currentTarget: e
    };
  }
  function Xn(t, l) {
    for (var e = l + "Capture", u = []; t !== null; ) {
      var a = t, n = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || n === null || (a = ju(t, e), a != null && u.unshift(
        Oa(t, a, n)
      ), a = ju(t, l), a != null && u.push(
        Oa(t, a, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function Du(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function cd(t, l, e, u, a) {
    for (var n = l._reactName, f = []; e !== null && e !== u; ) {
      var c = e, r = c.alternate, S = c.stateNode;
      if (c = c.tag, r !== null && r === u) break;
      c !== 5 && c !== 26 && c !== 27 || S === null || (r = S, a ? (S = ju(e, n), S != null && f.unshift(
        Oa(e, S, r)
      )) : a || (S = ju(e, n), S != null && f.push(
        Oa(e, S, r)
      ))), e = e.return;
    }
    f.length !== 0 && t.push({ event: l, listeners: f });
  }
  var iy = /\r\n?/g, cy = /\u0000|\uFFFD/g;
  function sd(t) {
    return (typeof t == "string" ? t : "" + t).replace(iy, `
`).replace(cy, "");
  }
  function od(t, l) {
    return l = sd(l), sd(t) === l;
  }
  function Gn() {
  }
  function gt(t, l, e, u, a, n) {
    switch (e) {
      case "children":
        typeof u == "string" ? l === "body" || l === "textarea" && u === "" || tu(t, u) : (typeof u == "number" || typeof u == "bigint") && l !== "body" && tu(t, "" + u);
        break;
      case "className":
        La(t, "class", u);
        break;
      case "tabIndex":
        La(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        La(t, e, u);
        break;
      case "style":
        rs(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          La(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = Ka("" + u), t.setAttribute(e, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (l !== "input" && gt(t, l, "name", a.name, a, null), gt(
            t,
            l,
            "formEncType",
            a.formEncType,
            a,
            null
          ), gt(
            t,
            l,
            "formMethod",
            a.formMethod,
            a,
            null
          ), gt(
            t,
            l,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (gt(t, l, "encType", a.encType, a, null), gt(t, l, "method", a.method, a, null), gt(t, l, "target", a.target, a, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(e);
          break;
        }
        u = Ka("" + u), t.setAttribute(e, u);
        break;
      case "onClick":
        u != null && (t.onclick = Gn);
        break;
      case "onScroll":
        u != null && it("scroll", t);
        break;
      case "onScrollEnd":
        u != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(s(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        e = Ka("" + u), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "" + u) : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        u === !0 ? t.setAttribute(e, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(e, u) : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(e) : t.setAttribute(e, u);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), Za(t, "popover", u);
        break;
      case "xlinkActuate":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Yl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Yl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Za(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = X0.get(e) || e, Za(t, e, u));
    }
  }
  function cc(t, l, e, u, a, n) {
    switch (e) {
      case "style":
        rs(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(s(61));
          if (e = u.__html, e != null) {
            if (a.children != null) throw Error(s(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof u == "string" ? tu(t, u) : (typeof u == "number" || typeof u == "bigint") && tu(t, "" + u);
        break;
      case "onScroll":
        u != null && it("scroll", t);
        break;
      case "onScrollEnd":
        u != null && it("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = Gn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ts.hasOwnProperty(e))
          t: {
            if (e[0] === "o" && e[1] === "n" && (a = e.endsWith("Capture"), l = e.slice(2, a ? e.length - 7 : void 0), n = t[kt] || null, n = n != null ? n[e] : null, typeof n == "function" && t.removeEventListener(l, n, a), typeof u == "function")) {
              typeof n != "function" && n !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, u, a);
              break t;
            }
            e in t ? t[e] = u : u === !0 ? t.setAttribute(e, "") : Za(t, e, u);
          }
    }
  }
  function wt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", t), it("load", t);
        var u = !1, a = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var f = e[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, l));
                default:
                  gt(t, l, n, f, e, null);
              }
          }
        a && gt(t, l, "srcSet", e.srcSet, e, null), u && gt(t, l, "src", e.src, e, null);
        return;
      case "input":
        it("invalid", t);
        var c = n = f = a = null, r = null, S = null;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var M = e[u];
            if (M != null)
              switch (u) {
                case "name":
                  a = M;
                  break;
                case "type":
                  f = M;
                  break;
                case "checked":
                  r = M;
                  break;
                case "defaultChecked":
                  S = M;
                  break;
                case "value":
                  n = M;
                  break;
                case "defaultValue":
                  c = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(s(137, l));
                  break;
                default:
                  gt(t, l, u, M, e, null);
              }
          }
        is(
          t,
          n,
          c,
          r,
          S,
          f,
          a,
          !1
        ), Va(t);
        return;
      case "select":
        it("invalid", t), u = f = n = null;
        for (a in e)
          if (e.hasOwnProperty(a) && (c = e[a], c != null))
            switch (a) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                gt(t, l, a, c, e, null);
            }
        l = n, e = f, t.multiple = !!u, l != null ? Ie(t, !!u, l, !1) : e != null && Ie(t, !!u, e, !0);
        return;
      case "textarea":
        it("invalid", t), n = a = u = null;
        for (f in e)
          if (e.hasOwnProperty(f) && (c = e[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                a = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                gt(t, l, f, c, e, null);
            }
        ss(t, u, a, n), Va(t);
        return;
      case "option":
        for (r in e)
          if (e.hasOwnProperty(r) && (u = e[r], u != null))
            switch (r) {
              case "selected":
                t.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                gt(t, l, r, u, e, null);
            }
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Ea.length; u++)
          it(Ea[u], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (S in e)
          if (e.hasOwnProperty(S) && (u = e[S], u != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, l));
              default:
                gt(t, l, S, u, e, null);
            }
        return;
      default:
        if (pf(l)) {
          for (M in e)
            e.hasOwnProperty(M) && (u = e[M], u !== void 0 && cc(
              t,
              l,
              M,
              u,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (u = e[c], u != null && gt(t, l, c, u, e, null));
  }
  function sy(t, l, e, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, n = null, f = null, c = null, r = null, S = null, M = null;
        for (T in e) {
          var _ = e[T];
          if (e.hasOwnProperty(T) && _ != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = _;
              default:
                u.hasOwnProperty(T) || gt(t, l, T, null, u, _);
            }
        }
        for (var A in u) {
          var T = u[A];
          if (_ = e[A], u.hasOwnProperty(A) && (T != null || _ != null))
            switch (A) {
              case "type":
                n = T;
                break;
              case "name":
                a = T;
                break;
              case "checked":
                S = T;
                break;
              case "defaultChecked":
                M = T;
                break;
              case "value":
                f = T;
                break;
              case "defaultValue":
                c = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(s(137, l));
                break;
              default:
                T !== _ && gt(
                  t,
                  l,
                  A,
                  T,
                  u,
                  _
                );
            }
        }
        Ef(
          t,
          f,
          c,
          r,
          S,
          M,
          n,
          a
        );
        return;
      case "select":
        T = f = c = A = null;
        for (n in e)
          if (r = e[n], e.hasOwnProperty(n) && r != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                T = r;
              default:
                u.hasOwnProperty(n) || gt(
                  t,
                  l,
                  n,
                  null,
                  u,
                  r
                );
            }
        for (a in u)
          if (n = u[a], r = e[a], u.hasOwnProperty(a) && (n != null || r != null))
            switch (a) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== r && gt(
                  t,
                  l,
                  a,
                  n,
                  u,
                  r
                );
            }
        l = c, e = f, u = T, A != null ? Ie(t, !!e, A, !1) : !!u != !!e && (l != null ? Ie(t, !!e, l, !0) : Ie(t, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        T = A = null;
        for (c in e)
          if (a = e[c], e.hasOwnProperty(c) && a != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                gt(t, l, c, null, u, a);
            }
        for (f in u)
          if (a = u[f], n = e[f], u.hasOwnProperty(f) && (a != null || n != null))
            switch (f) {
              case "value":
                A = a;
                break;
              case "defaultValue":
                T = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== n && gt(t, l, f, a, u, n);
            }
        cs(t, A, T);
        return;
      case "option":
        for (var F in e)
          if (A = e[F], e.hasOwnProperty(F) && A != null && !u.hasOwnProperty(F))
            switch (F) {
              case "selected":
                t.selected = !1;
                break;
              default:
                gt(
                  t,
                  l,
                  F,
                  null,
                  u,
                  A
                );
            }
        for (r in u)
          if (A = u[r], T = e[r], u.hasOwnProperty(r) && A !== T && (A != null || T != null))
            switch (r) {
              case "selected":
                t.selected = A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                gt(
                  t,
                  l,
                  r,
                  A,
                  u,
                  T
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in e)
          A = e[W], e.hasOwnProperty(W) && A != null && !u.hasOwnProperty(W) && gt(t, l, W, null, u, A);
        for (S in u)
          if (A = u[S], T = e[S], u.hasOwnProperty(S) && A !== T && (A != null || T != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, l));
                break;
              default:
                gt(
                  t,
                  l,
                  S,
                  A,
                  u,
                  T
                );
            }
        return;
      default:
        if (pf(l)) {
          for (var St in e)
            A = e[St], e.hasOwnProperty(St) && A !== void 0 && !u.hasOwnProperty(St) && cc(
              t,
              l,
              St,
              void 0,
              u,
              A
            );
          for (M in u)
            A = u[M], T = e[M], !u.hasOwnProperty(M) || A === T || A === void 0 && T === void 0 || cc(
              t,
              l,
              M,
              A,
              u,
              T
            );
          return;
        }
    }
    for (var v in e)
      A = e[v], e.hasOwnProperty(v) && A != null && !u.hasOwnProperty(v) && gt(t, l, v, null, u, A);
    for (_ in u)
      A = u[_], T = e[_], !u.hasOwnProperty(_) || A === T || A == null && T == null || gt(t, l, _, A, u, T);
  }
  var sc = null, oc = null;
  function Qn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function rd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dd(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function rc(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var dc = null;
  function oy() {
    var t = window.event;
    return t && t.type === "popstate" ? t === dc ? !1 : (dc = t, !0) : (dc = null, !1);
  }
  var hd = typeof setTimeout == "function" ? setTimeout : void 0, ry = typeof clearTimeout == "function" ? clearTimeout : void 0, yd = typeof Promise == "function" ? Promise : void 0, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof yd < "u" ? function(t) {
    return yd.resolve(null).then(t).catch(hy);
  } : hd;
  function hy(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function be(t) {
    return t === "head";
  }
  function vd(t, l) {
    var e = l, u = 0, a = 0;
    do {
      var n = e.nextSibling;
      if (t.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$") {
          if (0 < u && 8 > u) {
            e = u;
            var f = t.ownerDocument;
            if (e & 1 && pa(f.documentElement), e & 2 && pa(f.body), e & 4)
              for (e = f.head, pa(e), f = e.firstChild; f; ) {
                var c = f.nextSibling, r = f.nodeName;
                f[Gu] || r === "SCRIPT" || r === "STYLE" || r === "LINK" && f.rel.toLowerCase() === "stylesheet" || e.removeChild(f), f = c;
              }
          }
          if (a === 0) {
            t.removeChild(n), Ha(l);
            return;
          }
          a--;
        } else
          e === "$" || e === "$?" || e === "$!" ? a++ : u = e.charCodeAt(0) - 48;
      else u = 0;
      e = n;
    } while (e);
    Ha(l);
  }
  function hc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var e = l;
      switch (l = l.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          hc(e), Sf(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function yy(t, l, e, u) {
    for (; t.nodeType === 1; ) {
      var a = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (u) {
        if (!t[Gu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = pl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function vy(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function yc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function my(t, l) {
    var e = t.ownerDocument;
    if (t.data !== "$?" || e.readyState === "complete")
      l();
    else {
      var u = function() {
        l(), e.removeEventListener("DOMContentLoaded", u);
      };
      e.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function pl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var vc = null;
  function md(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?") {
          if (l === 0) return t;
          l--;
        } else e === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function gd(t, l, e) {
    switch (l = Qn(e), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function pa(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Sf(t);
  }
  var Tl = /* @__PURE__ */ new Map(), Sd = /* @__PURE__ */ new Set();
  function jn(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var kl = B.d;
  B.d = {
    f: gy,
    r: Sy,
    D: by,
    C: Ay,
    L: Ty,
    m: Ey,
    X: py,
    S: Oy,
    M: zy
  };
  function gy() {
    var t = kl.f(), l = Hn();
    return t || l;
  }
  function Sy(t) {
    var l = $e(t);
    l !== null && l.tag === 5 && l.type === "form" ? Xo(l) : kl.r(t);
  }
  var _u = typeof document > "u" ? null : document;
  function bd(t, l, e) {
    var u = _u;
    if (u && typeof l == "string" && l) {
      var a = yl(l);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof e == "string" && (a += '[crossorigin="' + e + '"]'), Sd.has(a) || (Sd.add(a), t = { rel: t, crossOrigin: e, href: l }, u.querySelector(a) === null && (l = u.createElement("link"), wt(l, "link", t), Gt(l), u.head.appendChild(l)));
    }
  }
  function by(t) {
    kl.D(t), bd("dns-prefetch", t, null);
  }
  function Ay(t, l) {
    kl.C(t, l), bd("preconnect", t, l);
  }
  function Ty(t, l, e) {
    kl.L(t, l, e);
    var u = _u;
    if (u && t && l) {
      var a = 'link[rel="preload"][as="' + yl(l) + '"]';
      l === "image" && e && e.imageSrcSet ? (a += '[imagesrcset="' + yl(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (a += '[imagesizes="' + yl(
        e.imageSizes
      ) + '"]')) : a += '[href="' + yl(t) + '"]';
      var n = a;
      switch (l) {
        case "style":
          n = xu(t);
          break;
        case "script":
          n = Uu(t);
      }
      Tl.has(n) || (t = z(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        },
        e
      ), Tl.set(n, t), u.querySelector(a) !== null || l === "style" && u.querySelector(za(n)) || l === "script" && u.querySelector(Ra(n)) || (l = u.createElement("link"), wt(l, "link", t), Gt(l), u.head.appendChild(l)));
    }
  }
  function Ey(t, l) {
    kl.m(t, l);
    var e = _u;
    if (e && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", a = 'link[rel="modulepreload"][as="' + yl(u) + '"][href="' + yl(t) + '"]', n = a;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Uu(t);
      }
      if (!Tl.has(n) && (t = z({ rel: "modulepreload", href: t }, l), Tl.set(n, t), e.querySelector(a) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(Ra(n)))
              return;
        }
        u = e.createElement("link"), wt(u, "link", t), Gt(u), e.head.appendChild(u);
      }
    }
  }
  function Oy(t, l, e) {
    kl.S(t, l, e);
    var u = _u;
    if (u && t) {
      var a = ke(u).hoistableStyles, n = xu(t);
      l = l || "default";
      var f = a.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          za(n)
        ))
          c.loading = 5;
        else {
          t = z(
            { rel: "stylesheet", href: t, "data-precedence": l },
            e
          ), (e = Tl.get(n)) && mc(t, e);
          var r = f = u.createElement("link");
          Gt(r), wt(r, "link", t), r._p = new Promise(function(S, M) {
            r.onload = S, r.onerror = M;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Zn(f, l, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, a.set(n, f);
      }
    }
  }
  function py(t, l) {
    kl.X(t, l);
    var e = _u;
    if (e && t) {
      var u = ke(e).hoistableScripts, a = Uu(t), n = u.get(a);
      n || (n = e.querySelector(Ra(a)), n || (t = z({ src: t, async: !0 }, l), (l = Tl.get(a)) && gc(t, l), n = e.createElement("script"), Gt(n), wt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function zy(t, l) {
    kl.M(t, l);
    var e = _u;
    if (e && t) {
      var u = ke(e).hoistableScripts, a = Uu(t), n = u.get(a);
      n || (n = e.querySelector(Ra(a)), n || (t = z({ src: t, async: !0, type: "module" }, l), (l = Tl.get(a)) && gc(t, l), n = e.createElement("script"), Gt(n), wt(n, "link", t), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(a, n));
    }
  }
  function Ad(t, l, e, u) {
    var a = (a = I.current) ? jn(a) : null;
    if (!a) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (l = xu(e.href), e = ke(
          a
        ).hoistableStyles, u = e.get(l), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          t = xu(e.href);
          var n = ke(
            a
          ).hoistableStyles, f = n.get(t);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, f), (n = a.querySelector(
            za(t)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Tl.has(t) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Tl.set(t, e), n || Ry(
            a,
            t,
            e,
            f.state
          ))), l && u === null)
            throw Error(s(528, ""));
          return f;
        }
        if (l && u !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Uu(e), e = ke(
          a
        ).hoistableScripts, u = e.get(l), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, t));
    }
  }
  function xu(t) {
    return 'href="' + yl(t) + '"';
  }
  function za(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Td(t) {
    return z({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Ry(t, l, e, u) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? u.loading = 1 : (l = t.createElement("link"), u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    }), wt(l, "link", e), Gt(l), t.head.appendChild(l));
  }
  function Uu(t) {
    return '[src="' + yl(t) + '"]';
  }
  function Ra(t) {
    return "script[async]" + t;
  }
  function Ed(t, l, e) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + yl(e.href) + '"]'
          );
          if (u)
            return l.instance = u, Gt(u), u;
          var a = z({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), Gt(u), wt(u, "style", a), Zn(u, e.precedence, t), l.instance = u;
        case "stylesheet":
          a = xu(e.href);
          var n = t.querySelector(
            za(a)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Gt(n), n;
          u = Td(e), (a = Tl.get(a)) && mc(u, a), n = (t.ownerDocument || t).createElement("link"), Gt(n);
          var f = n;
          return f._p = new Promise(function(c, r) {
            f.onload = c, f.onerror = r;
          }), wt(n, "link", u), l.state.loading |= 4, Zn(n, e.precedence, t), l.instance = n;
        case "script":
          return n = Uu(e.src), (a = t.querySelector(
            Ra(n)
          )) ? (l.instance = a, Gt(a), a) : (u = e, (a = Tl.get(n)) && (u = z({}, e), gc(u, a)), t = t.ownerDocument || t, a = t.createElement("script"), Gt(a), wt(a, "link", u), t.head.appendChild(a), l.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, Zn(u, e.precedence, t));
    return l.instance;
  }
  function Zn(t, l, e) {
    for (var u = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = u.length ? u[u.length - 1] : null, n = a, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === l) n = c;
      else if (n !== a) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
  }
  function mc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function gc(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var Ln = null;
  function Od(t, l, e) {
    if (Ln === null) {
      var u = /* @__PURE__ */ new Map(), a = Ln = /* @__PURE__ */ new Map();
      a.set(e, u);
    } else
      a = Ln, u = a.get(e), u || (u = /* @__PURE__ */ new Map(), a.set(e, u));
    if (u.has(t)) return u;
    for (u.set(t, null), e = e.getElementsByTagName(t), a = 0; a < e.length; a++) {
      var n = e[a];
      if (!(n[Gu] || n[Kt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(l) || "";
        f = t + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function pd(t, l, e) {
    t = t.ownerDocument || t, t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function My(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function zd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Ma = null;
  function Dy() {
  }
  function _y(t, l, e) {
    if (Ma === null) throw Error(s(475));
    var u = Ma;
    if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = xu(e.href), n = t.querySelector(
          za(a)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (u.count++, u = Vn.bind(u), t.then(u, u)), l.state.loading |= 4, l.instance = n, Gt(n);
          return;
        }
        n = t.ownerDocument || t, e = Td(e), (a = Tl.get(a)) && mc(e, a), n = n.createElement("link"), Gt(n);
        var f = n;
        f._p = new Promise(function(c, r) {
          f.onload = c, f.onerror = r;
        }), wt(n, "link", e), l.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (u.count++, l = Vn.bind(u), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function xy() {
    if (Ma === null) throw Error(s(475));
    var t = Ma;
    return t.stylesheets && t.count === 0 && Sc(t, t.stylesheets), 0 < t.count ? function(l) {
      var e = setTimeout(function() {
        if (t.stylesheets && Sc(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(e);
      };
    } : null;
  }
  function Vn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Sc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var wn = null;
  function Sc(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, wn = /* @__PURE__ */ new Map(), l.forEach(Uy, t), wn = null, Vn.call(t));
  }
  function Uy(t, l) {
    if (!(l.state.loading & 4)) {
      var e = wn.get(t);
      if (e) var u = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), wn.set(t, e);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < a.length; n++) {
          var f = a[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (e.set(f.dataset.precedence, f), u = f);
        }
        u && e.set(null, u);
      }
      a = l.instance, f = a.getAttribute("data-precedence"), n = e.get(f) || u, n === u && e.set(null, a), e.set(f, a), this.count++, u = Vn.bind(this), a.addEventListener("load", u), a.addEventListener("error", u), n ? n.parentNode.insertBefore(a, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), l.state.loading |= 4;
    }
  }
  var Da = {
    $$typeof: w,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function Hy(t, l, e, u, a, n, f, c) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yf(0), this.hiddenUpdates = yf(null), this.identifierPrefix = u, this.onUncaughtError = a, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rd(t, l, e, u, a, n, f, c, r, S, M, _) {
    return t = new Hy(
      t,
      l,
      e,
      f,
      c,
      r,
      S,
      _
    ), l = 1, n === !0 && (l |= 24), n = nl(3, null, null, l), t.current = n, n.stateNode = t, l = If(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: e,
      cache: l
    }, ui(n), t;
  }
  function Md(t) {
    return t ? (t = cu, t) : cu;
  }
  function Dd(t, l, e, u, a, n) {
    a = Md(a), u.context === null ? u.context = a : u.pendingContext = a, u = fe(l), u.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (u.callback = n), e = ie(t, u, l), e !== null && (ol(e, t, l), aa(e, t, l));
  }
  function _d(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function bc(t, l) {
    _d(t, l), (t = t.alternate) && _d(t, l);
  }
  function xd(t) {
    if (t.tag === 13) {
      var l = iu(t, 67108864);
      l !== null && ol(l, t, 67108864), bc(t, 67108864);
    }
  }
  var Kn = !0;
  function Ny(t, l, e, u) {
    var a = E.T;
    E.T = null;
    var n = B.p;
    try {
      B.p = 2, Ac(t, l, e, u);
    } finally {
      B.p = n, E.T = a;
    }
  }
  function qy(t, l, e, u) {
    var a = E.T;
    E.T = null;
    var n = B.p;
    try {
      B.p = 8, Ac(t, l, e, u);
    } finally {
      B.p = n, E.T = a;
    }
  }
  function Ac(t, l, e, u) {
    if (Kn) {
      var a = Tc(u);
      if (a === null)
        ic(
          t,
          l,
          u,
          Jn,
          e
        ), Hd(t, u);
      else if (Yy(
        a,
        t,
        l,
        e,
        u
      ))
        u.stopPropagation();
      else if (Hd(t, u), l & 4 && -1 < By.indexOf(t)) {
        for (; a !== null; ) {
          var n = $e(a);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Me(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var r = 1 << 31 - ul(f);
                      c.entanglements[1] |= r, f &= ~r;
                    }
                    Hl(n), (ht & 6) === 0 && (xn = Ml() + 500, Ta(0));
                  }
                }
                break;
              case 13:
                c = iu(n, 2), c !== null && ol(c, n, 2), Hn(), bc(n, 2);
            }
          if (n = Tc(u), n === null && ic(
            t,
            l,
            u,
            Jn,
            e
          ), n === a) break;
          a = n;
        }
        a !== null && u.stopPropagation();
      } else
        ic(
          t,
          l,
          u,
          null,
          e
        );
    }
  }
  function Tc(t) {
    return t = Rf(t), Ec(t);
  }
  var Jn = null;
  function Ec(t) {
    if (Jn = null, t = We(t), t !== null) {
      var l = O(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (t = p(l), t !== null) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Jn = t, null;
  }
  function Ud(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (A0()) {
          case Vc:
            return 2;
          case wc:
            return 8;
          case Xa:
          case T0:
            return 32;
          case Kc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oc = !1, Ae = null, Te = null, Ee = null, _a = /* @__PURE__ */ new Map(), xa = /* @__PURE__ */ new Map(), Oe = [], By = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ae = null;
        break;
      case "dragenter":
      case "dragleave":
        Te = null;
        break;
      case "mouseover":
      case "mouseout":
        Ee = null;
        break;
      case "pointerover":
      case "pointerout":
        _a.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xa.delete(l.pointerId);
    }
  }
  function Ua(t, l, e, u, a, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: e,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [a]
    }, l !== null && (l = $e(l), l !== null && xd(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, a !== null && l.indexOf(a) === -1 && l.push(a), t);
  }
  function Yy(t, l, e, u, a) {
    switch (l) {
      case "focusin":
        return Ae = Ua(
          Ae,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "dragenter":
        return Te = Ua(
          Te,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "mouseover":
        return Ee = Ua(
          Ee,
          t,
          l,
          e,
          u,
          a
        ), !0;
      case "pointerover":
        var n = a.pointerId;
        return _a.set(
          n,
          Ua(
            _a.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
      case "gotpointercapture":
        return n = a.pointerId, xa.set(
          n,
          Ua(
            xa.get(n) || null,
            t,
            l,
            e,
            u,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Nd(t) {
    var l = We(t.target);
    if (l !== null) {
      var e = O(l);
      if (e !== null) {
        if (l = e.tag, l === 13) {
          if (l = p(e), l !== null) {
            t.blockedOn = l, _0(t.priority, function() {
              if (e.tag === 13) {
                var u = sl();
                u = vf(u);
                var a = iu(e, u);
                a !== null && ol(a, e, u), bc(e, u);
              }
            });
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var e = Tc(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var u = new e.constructor(
          e.type,
          e
        );
        zf = u, e.target.dispatchEvent(u), zf = null;
      } else
        return l = $e(e), l !== null && xd(l), t.blockedOn = e, !1;
      l.shift();
    }
    return !0;
  }
  function qd(t, l, e) {
    Wn(t) && e.delete(l);
  }
  function Cy() {
    Oc = !1, Ae !== null && Wn(Ae) && (Ae = null), Te !== null && Wn(Te) && (Te = null), Ee !== null && Wn(Ee) && (Ee = null), _a.forEach(qd), xa.forEach(qd);
  }
  function $n(t, l) {
    t.blockedOn === l && (t.blockedOn = null, Oc || (Oc = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Cy
    )));
  }
  var kn = null;
  function Bd(t) {
    kn !== t && (kn = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        kn === t && (kn = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], u = t[l + 1], a = t[l + 2];
          if (typeof u != "function") {
            if (Ec(u || e) === null)
              continue;
            break;
          }
          var n = $e(e);
          n !== null && (t.splice(l, 3), l -= 3, Ei(
            n,
            {
              pending: !0,
              data: a,
              method: e.method,
              action: u
            },
            u,
            a
          ));
        }
      }
    ));
  }
  function Ha(t) {
    function l(r) {
      return $n(r, t);
    }
    Ae !== null && $n(Ae, t), Te !== null && $n(Te, t), Ee !== null && $n(Ee, t), _a.forEach(l), xa.forEach(l);
    for (var e = 0; e < Oe.length; e++) {
      var u = Oe[e];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < Oe.length && (e = Oe[0], e.blockedOn === null); )
      Nd(e), e.blockedOn === null && Oe.shift();
    if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
      for (u = 0; u < e.length; u += 3) {
        var a = e[u], n = e[u + 1], f = a[kt] || null;
        if (typeof n == "function")
          f || Bd(e);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (a = n, f = n[kt] || null)
              c = f.formAction;
            else if (Ec(a) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? e[u + 1] = c : (e.splice(u, 3), u -= 3), Bd(e);
        }
      }
  }
  function pc(t) {
    this._internalRoot = t;
  }
  Fn.prototype.render = pc.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(s(409));
    var e = l.current, u = sl();
    Dd(e, u, t, l, null, null);
  }, Fn.prototype.unmount = pc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      Dd(t.current, 2, null, t, null, null), Hn(), l[Je] = null;
    }
  };
  function Fn(t) {
    this._internalRoot = t;
  }
  Fn.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Fc();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < Oe.length && l !== 0 && l < Oe[e].priority; e++) ;
      Oe.splice(e, 0, t), e === 0 && Nd(t);
    }
  };
  var Yd = o.version;
  if (Yd !== "19.1.0")
    throw Error(
      s(
        527,
        Yd,
        "19.1.0"
      )
    );
  B.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = R(l), t = t !== null ? m(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Xy = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pn.isDisabled && Pn.supportsFiber)
      try {
        Yu = Pn.inject(
          Xy
        ), el = Pn;
      } catch {
      }
  }
  return Na.createRoot = function(t, l) {
    if (!b(t)) throw Error(s(299));
    var e = !1, u = "", a = Po, n = Io, f = tr, c = null;
    return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (a = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = Rd(
      t,
      1,
      !1,
      null,
      null,
      e,
      u,
      a,
      n,
      f,
      c,
      null
    ), t[Je] = l.current, fc(t), new pc(l);
  }, Na.hydrateRoot = function(t, l, e) {
    if (!b(t)) throw Error(s(299));
    var u = !1, a = "", n = Po, f = Io, c = tr, r = null, S = null;
    return e != null && (e.unstable_strictMode === !0 && (u = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (r = e.unstable_transitionCallbacks), e.formState !== void 0 && (S = e.formState)), l = Rd(
      t,
      1,
      !0,
      l,
      e ?? null,
      u,
      a,
      n,
      f,
      c,
      r,
      S
    ), l.context = Md(null), e = l.current, u = sl(), u = vf(u), a = fe(u), a.callback = null, ie(e, a, u), e = u, l.current.lanes = e, Xu(l, e), Hl(l), t[Je] = l.current, fc(t), new Fn(l);
  }, Na.version = "19.1.0", Na;
}
var Vd;
function Jy() {
  if (Vd) return Rc.exports;
  Vd = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), Rc.exports = Ky(), Rc.exports;
}
var Jv = Jy(), xc = { exports: {} }, qa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function Wy() {
  if (wd) return qa;
  wd = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function d(s, b, O) {
    var p = null;
    if (O !== void 0 && (p = "" + O), b.key !== void 0 && (p = "" + b.key), "key" in b) {
      O = {};
      for (var x in b)
        x !== "key" && (O[x] = b[x]);
    } else O = b;
    return b = O.ref, {
      $$typeof: i,
      type: s,
      key: p,
      ref: b !== void 0 ? b : null,
      props: O
    };
  }
  return qa.Fragment = o, qa.jsx = d, qa.jsxs = d, qa;
}
var Kd;
function $y() {
  return Kd || (Kd = 1, xc.exports = Wy()), xc.exports;
}
var Wv = $y(), f0 = n0();
const $v = /* @__PURE__ */ a0(f0), ky = ["top", "right", "bottom", "left"], ze = Math.min, rl = Math.max, lf = Math.round, In = Math.floor, ql = (i) => ({
  x: i,
  y: i
}), Fy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qc(i, o, d) {
  return rl(i, ze(o, d));
}
function Fl(i, o) {
  return typeof i == "function" ? i(o) : i;
}
function Pl(i) {
  return i.split("-")[0];
}
function qu(i) {
  return i.split("-")[1];
}
function Xc(i) {
  return i === "x" ? "y" : "x";
}
function Gc(i) {
  return i === "y" ? "height" : "width";
}
function Nl(i) {
  const o = i[0];
  return o === "t" || o === "b" ? "y" : "x";
}
function Qc(i) {
  return Xc(Nl(i));
}
function Py(i, o, d) {
  d === void 0 && (d = !1);
  const s = qu(i), b = Qc(i), O = Gc(b);
  let p = b === "x" ? s === (d ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return o.reference[O] > o.floating[O] && (p = ef(p)), [p, ef(p)];
}
function Iy(i) {
  const o = ef(i);
  return [Bc(i), o, Bc(o)];
}
function Bc(i) {
  return i.includes("start") ? i.replace("start", "end") : i.replace("end", "start");
}
const Jd = ["left", "right"], Wd = ["right", "left"], tv = ["top", "bottom"], lv = ["bottom", "top"];
function ev(i, o, d) {
  switch (i) {
    case "top":
    case "bottom":
      return d ? o ? Wd : Jd : o ? Jd : Wd;
    case "left":
    case "right":
      return o ? tv : lv;
    default:
      return [];
  }
}
function uv(i, o, d, s) {
  const b = qu(i);
  let O = ev(Pl(i), d === "start", s);
  return b && (O = O.map((p) => p + "-" + b), o && (O = O.concat(O.map(Bc)))), O;
}
function ef(i) {
  const o = Pl(i);
  return Fy[o] + i.slice(o.length);
}
function av(i) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...i
  };
}
function i0(i) {
  return typeof i != "number" ? av(i) : {
    top: i,
    right: i,
    bottom: i,
    left: i
  };
}
function uf(i) {
  const {
    x: o,
    y: d,
    width: s,
    height: b
  } = i;
  return {
    width: s,
    height: b,
    top: d,
    left: o,
    right: o + s,
    bottom: d + b,
    x: o,
    y: d
  };
}
function $d(i, o, d) {
  let {
    reference: s,
    floating: b
  } = i;
  const O = Nl(o), p = Qc(o), x = Gc(p), R = Pl(o), m = O === "y", z = s.x + s.width / 2 - b.width / 2, H = s.y + s.height / 2 - b.height / 2, N = s[x] / 2 - b[x] / 2;
  let q;
  switch (R) {
    case "top":
      q = {
        x: z,
        y: s.y - b.height
      };
      break;
    case "bottom":
      q = {
        x: z,
        y: s.y + s.height
      };
      break;
    case "right":
      q = {
        x: s.x + s.width,
        y: H
      };
      break;
    case "left":
      q = {
        x: s.x - b.width,
        y: H
      };
      break;
    default:
      q = {
        x: s.x,
        y: s.y
      };
  }
  switch (qu(o)) {
    case "start":
      q[p] -= N * (d && m ? -1 : 1);
      break;
    case "end":
      q[p] += N * (d && m ? -1 : 1);
      break;
  }
  return q;
}
async function nv(i, o) {
  var d;
  o === void 0 && (o = {});
  const {
    x: s,
    y: b,
    platform: O,
    rects: p,
    elements: x,
    strategy: R
  } = i, {
    boundary: m = "clippingAncestors",
    rootBoundary: z = "viewport",
    elementContext: H = "floating",
    altBoundary: N = !1,
    padding: q = 0
  } = Fl(o, i), C = i0(q), V = x[N ? H === "floating" ? "reference" : "floating" : H], $ = uf(await O.getClippingRect({
    element: (d = await (O.isElement == null ? void 0 : O.isElement(V))) == null || d ? V : V.contextElement || await (O.getDocumentElement == null ? void 0 : O.getDocumentElement(x.floating)),
    boundary: m,
    rootBoundary: z,
    strategy: R
  })), P = H === "floating" ? {
    x: s,
    y: b,
    width: p.floating.width,
    height: p.floating.height
  } : p.reference, w = await (O.getOffsetParent == null ? void 0 : O.getOffsetParent(x.floating)), K = await (O.isElement == null ? void 0 : O.isElement(w)) ? await (O.getScale == null ? void 0 : O.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, j = uf(O.convertOffsetParentRelativeRectToViewportRelativeRect ? await O.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: x,
    rect: P,
    offsetParent: w,
    strategy: R
  }) : P);
  return {
    top: ($.top - j.top + C.top) / K.y,
    bottom: (j.bottom - $.bottom + C.bottom) / K.y,
    left: ($.left - j.left + C.left) / K.x,
    right: (j.right - $.right + C.right) / K.x
  };
}
const fv = 50, iv = async (i, o, d) => {
  const {
    placement: s = "bottom",
    strategy: b = "absolute",
    middleware: O = [],
    platform: p
  } = d, x = p.detectOverflow ? p : {
    ...p,
    detectOverflow: nv
  }, R = await (p.isRTL == null ? void 0 : p.isRTL(o));
  let m = await p.getElementRects({
    reference: i,
    floating: o,
    strategy: b
  }), {
    x: z,
    y: H
  } = $d(m, s, R), N = s, q = 0;
  const C = {};
  for (let Z = 0; Z < O.length; Z++) {
    const V = O[Z];
    if (!V)
      continue;
    const {
      name: $,
      fn: P
    } = V, {
      x: w,
      y: K,
      data: j,
      reset: tt
    } = await P({
      x: z,
      y: H,
      initialPlacement: s,
      placement: N,
      strategy: b,
      middlewareData: C,
      rects: m,
      platform: x,
      elements: {
        reference: i,
        floating: o
      }
    });
    z = w ?? z, H = K ?? H, C[$] = {
      ...C[$],
      ...j
    }, tt && q < fv && (q++, typeof tt == "object" && (tt.placement && (N = tt.placement), tt.rects && (m = tt.rects === !0 ? await p.getElementRects({
      reference: i,
      floating: o,
      strategy: b
    }) : tt.rects), {
      x: z,
      y: H
    } = $d(m, N, R)), Z = -1);
  }
  return {
    x: z,
    y: H,
    placement: N,
    strategy: b,
    middlewareData: C
  };
}, cv = (i) => ({
  name: "arrow",
  options: i,
  async fn(o) {
    const {
      x: d,
      y: s,
      placement: b,
      rects: O,
      platform: p,
      elements: x,
      middlewareData: R
    } = o, {
      element: m,
      padding: z = 0
    } = Fl(i, o) || {};
    if (m == null)
      return {};
    const H = i0(z), N = {
      x: d,
      y: s
    }, q = Qc(b), C = Gc(q), Z = await p.getDimensions(m), V = q === "y", $ = V ? "top" : "left", P = V ? "bottom" : "right", w = V ? "clientHeight" : "clientWidth", K = O.reference[C] + O.reference[q] - N[q] - O.floating[C], j = N[q] - O.reference[q], tt = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(m));
    let nt = tt ? tt[w] : 0;
    (!nt || !await (p.isElement == null ? void 0 : p.isElement(tt))) && (nt = x.floating[w] || O.floating[C]);
    const vt = K / 2 - j / 2, zt = nt / 2 - Z[C] / 2 - 1, Rt = ze(H[$], zt), Dt = ze(H[P], zt), dt = Rt, _t = nt - Z[C] - Dt, bt = nt / 2 - Z[C] / 2 + vt, At = qc(dt, bt, _t), E = !R.arrow && qu(b) != null && bt !== At && O.reference[C] / 2 - (bt < dt ? Rt : Dt) - Z[C] / 2 < 0, B = E ? bt < dt ? bt - dt : bt - _t : 0;
    return {
      [q]: N[q] + B,
      data: {
        [q]: At,
        centerOffset: bt - At - B,
        ...E && {
          alignmentOffset: B
        }
      },
      reset: E
    };
  }
}), sv = function(i) {
  return i === void 0 && (i = {}), {
    name: "flip",
    options: i,
    async fn(o) {
      var d, s;
      const {
        placement: b,
        middlewareData: O,
        rects: p,
        initialPlacement: x,
        platform: R,
        elements: m
      } = o, {
        mainAxis: z = !0,
        crossAxis: H = !0,
        fallbackPlacements: N,
        fallbackStrategy: q = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: Z = !0,
        ...V
      } = Fl(i, o);
      if ((d = O.arrow) != null && d.alignmentOffset)
        return {};
      const $ = Pl(b), P = Nl(x), w = Pl(x) === x, K = await (R.isRTL == null ? void 0 : R.isRTL(m.floating)), j = N || (w || !Z ? [ef(x)] : Iy(x)), tt = C !== "none";
      !N && tt && j.push(...uv(x, Z, C, K));
      const nt = [x, ...j], vt = await R.detectOverflow(o, V), zt = [];
      let Rt = ((s = O.flip) == null ? void 0 : s.overflows) || [];
      if (z && zt.push(vt[$]), H) {
        const bt = Py(b, p, K);
        zt.push(vt[bt[0]], vt[bt[1]]);
      }
      if (Rt = [...Rt, {
        placement: b,
        overflows: zt
      }], !zt.every((bt) => bt <= 0)) {
        var Dt, dt;
        const bt = (((Dt = O.flip) == null ? void 0 : Dt.index) || 0) + 1, At = nt[bt];
        if (At && (!(H === "alignment" ? P !== Nl(At) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Rt.every((Y) => Nl(Y.placement) === P ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: bt,
              overflows: Rt
            },
            reset: {
              placement: At
            }
          };
        let E = (dt = Rt.filter((B) => B.overflows[0] <= 0).sort((B, Y) => B.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : dt.placement;
        if (!E)
          switch (q) {
            case "bestFit": {
              var _t;
              const B = (_t = Rt.filter((Y) => {
                if (tt) {
                  const lt = Nl(Y.placement);
                  return lt === P || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  lt === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((lt) => lt > 0).reduce((lt, h) => lt + h, 0)]).sort((Y, lt) => Y[1] - lt[1])[0]) == null ? void 0 : _t[0];
              B && (E = B);
              break;
            }
            case "initialPlacement":
              E = x;
              break;
          }
        if (b !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function kd(i, o) {
  return {
    top: i.top - o.height,
    right: i.right - o.width,
    bottom: i.bottom - o.height,
    left: i.left - o.width
  };
}
function Fd(i) {
  return ky.some((o) => i[o] >= 0);
}
const ov = function(i) {
  return i === void 0 && (i = {}), {
    name: "hide",
    options: i,
    async fn(o) {
      const {
        rects: d,
        platform: s
      } = o, {
        strategy: b = "referenceHidden",
        ...O
      } = Fl(i, o);
      switch (b) {
        case "referenceHidden": {
          const p = await s.detectOverflow(o, {
            ...O,
            elementContext: "reference"
          }), x = kd(p, d.reference);
          return {
            data: {
              referenceHiddenOffsets: x,
              referenceHidden: Fd(x)
            }
          };
        }
        case "escaped": {
          const p = await s.detectOverflow(o, {
            ...O,
            altBoundary: !0
          }), x = kd(p, d.floating);
          return {
            data: {
              escapedOffsets: x,
              escaped: Fd(x)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, c0 = /* @__PURE__ */ new Set(["left", "top"]);
async function rv(i, o) {
  const {
    placement: d,
    platform: s,
    elements: b
  } = i, O = await (s.isRTL == null ? void 0 : s.isRTL(b.floating)), p = Pl(d), x = qu(d), R = Nl(d) === "y", m = c0.has(p) ? -1 : 1, z = O && R ? -1 : 1, H = Fl(o, i);
  let {
    mainAxis: N,
    crossAxis: q,
    alignmentAxis: C
  } = typeof H == "number" ? {
    mainAxis: H,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: H.mainAxis || 0,
    crossAxis: H.crossAxis || 0,
    alignmentAxis: H.alignmentAxis
  };
  return x && typeof C == "number" && (q = x === "end" ? C * -1 : C), R ? {
    x: q * z,
    y: N * m
  } : {
    x: N * m,
    y: q * z
  };
}
const dv = function(i) {
  return i === void 0 && (i = 0), {
    name: "offset",
    options: i,
    async fn(o) {
      var d, s;
      const {
        x: b,
        y: O,
        placement: p,
        middlewareData: x
      } = o, R = await rv(o, i);
      return p === ((d = x.offset) == null ? void 0 : d.placement) && (s = x.arrow) != null && s.alignmentOffset ? {} : {
        x: b + R.x,
        y: O + R.y,
        data: {
          ...R,
          placement: p
        }
      };
    }
  };
}, hv = function(i) {
  return i === void 0 && (i = {}), {
    name: "shift",
    options: i,
    async fn(o) {
      const {
        x: d,
        y: s,
        placement: b,
        platform: O
      } = o, {
        mainAxis: p = !0,
        crossAxis: x = !1,
        limiter: R = {
          fn: ($) => {
            let {
              x: P,
              y: w
            } = $;
            return {
              x: P,
              y: w
            };
          }
        },
        ...m
      } = Fl(i, o), z = {
        x: d,
        y: s
      }, H = await O.detectOverflow(o, m), N = Nl(Pl(b)), q = Xc(N);
      let C = z[q], Z = z[N];
      if (p) {
        const $ = q === "y" ? "top" : "left", P = q === "y" ? "bottom" : "right", w = C + H[$], K = C - H[P];
        C = qc(w, C, K);
      }
      if (x) {
        const $ = N === "y" ? "top" : "left", P = N === "y" ? "bottom" : "right", w = Z + H[$], K = Z - H[P];
        Z = qc(w, Z, K);
      }
      const V = R.fn({
        ...o,
        [q]: C,
        [N]: Z
      });
      return {
        ...V,
        data: {
          x: V.x - d,
          y: V.y - s,
          enabled: {
            [q]: p,
            [N]: x
          }
        }
      };
    }
  };
}, yv = function(i) {
  return i === void 0 && (i = {}), {
    options: i,
    fn(o) {
      const {
        x: d,
        y: s,
        placement: b,
        rects: O,
        middlewareData: p
      } = o, {
        offset: x = 0,
        mainAxis: R = !0,
        crossAxis: m = !0
      } = Fl(i, o), z = {
        x: d,
        y: s
      }, H = Nl(b), N = Xc(H);
      let q = z[N], C = z[H];
      const Z = Fl(x, o), V = typeof Z == "number" ? {
        mainAxis: Z,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...Z
      };
      if (R) {
        const w = N === "y" ? "height" : "width", K = O.reference[N] - O.floating[w] + V.mainAxis, j = O.reference[N] + O.reference[w] - V.mainAxis;
        q < K ? q = K : q > j && (q = j);
      }
      if (m) {
        var $, P;
        const w = N === "y" ? "width" : "height", K = c0.has(Pl(b)), j = O.reference[H] - O.floating[w] + (K && (($ = p.offset) == null ? void 0 : $[H]) || 0) + (K ? 0 : V.crossAxis), tt = O.reference[H] + O.reference[w] + (K ? 0 : ((P = p.offset) == null ? void 0 : P[H]) || 0) - (K ? V.crossAxis : 0);
        C < j ? C = j : C > tt && (C = tt);
      }
      return {
        [N]: q,
        [H]: C
      };
    }
  };
}, vv = function(i) {
  return i === void 0 && (i = {}), {
    name: "size",
    options: i,
    async fn(o) {
      var d, s;
      const {
        placement: b,
        rects: O,
        platform: p,
        elements: x
      } = o, {
        apply: R = () => {
        },
        ...m
      } = Fl(i, o), z = await p.detectOverflow(o, m), H = Pl(b), N = qu(b), q = Nl(b) === "y", {
        width: C,
        height: Z
      } = O.floating;
      let V, $;
      H === "top" || H === "bottom" ? (V = H, $ = N === (await (p.isRTL == null ? void 0 : p.isRTL(x.floating)) ? "start" : "end") ? "left" : "right") : ($ = H, V = N === "end" ? "top" : "bottom");
      const P = Z - z.top - z.bottom, w = C - z.left - z.right, K = ze(Z - z[V], P), j = ze(C - z[$], w), tt = !o.middlewareData.shift;
      let nt = K, vt = j;
      if ((d = o.middlewareData.shift) != null && d.enabled.x && (vt = w), (s = o.middlewareData.shift) != null && s.enabled.y && (nt = P), tt && !N) {
        const Rt = rl(z.left, 0), Dt = rl(z.right, 0), dt = rl(z.top, 0), _t = rl(z.bottom, 0);
        q ? vt = C - 2 * (Rt !== 0 || Dt !== 0 ? Rt + Dt : rl(z.left, z.right)) : nt = Z - 2 * (dt !== 0 || _t !== 0 ? dt + _t : rl(z.top, z.bottom));
      }
      await R({
        ...o,
        availableWidth: vt,
        availableHeight: nt
      });
      const zt = await p.getDimensions(x.floating);
      return C !== zt.width || Z !== zt.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function nf() {
  return typeof window < "u";
}
function Bu(i) {
  return s0(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function dl(i) {
  var o;
  return (i == null || (o = i.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function Bl(i) {
  var o;
  return (o = (s0(i) ? i.ownerDocument : i.document) || window.document) == null ? void 0 : o.documentElement;
}
function s0(i) {
  return nf() ? i instanceof Node || i instanceof dl(i).Node : !1;
}
function zl(i) {
  return nf() ? i instanceof Element || i instanceof dl(i).Element : !1;
}
function Il(i) {
  return nf() ? i instanceof HTMLElement || i instanceof dl(i).HTMLElement : !1;
}
function Pd(i) {
  return !nf() || typeof ShadowRoot > "u" ? !1 : i instanceof ShadowRoot || i instanceof dl(i).ShadowRoot;
}
function Ya(i) {
  const {
    overflow: o,
    overflowX: d,
    overflowY: s,
    display: b
  } = Rl(i);
  return /auto|scroll|overlay|hidden|clip/.test(o + s + d) && b !== "inline" && b !== "contents";
}
function mv(i) {
  return /^(table|td|th)$/.test(Bu(i));
}
function ff(i) {
  try {
    if (i.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return i.matches(":modal");
  } catch {
    return !1;
  }
}
const gv = /transform|translate|scale|rotate|perspective|filter/, Sv = /paint|layout|strict|content/, we = (i) => !!i && i !== "none";
let Uc;
function jc(i) {
  const o = zl(i) ? Rl(i) : i;
  return we(o.transform) || we(o.translate) || we(o.scale) || we(o.rotate) || we(o.perspective) || !Zc() && (we(o.backdropFilter) || we(o.filter)) || gv.test(o.willChange || "") || Sv.test(o.contain || "");
}
function bv(i) {
  let o = Re(i);
  for (; Il(o) && !Nu(o); ) {
    if (jc(o))
      return o;
    if (ff(o))
      return null;
    o = Re(o);
  }
  return null;
}
function Zc() {
  return Uc == null && (Uc = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Uc;
}
function Nu(i) {
  return /^(html|body|#document)$/.test(Bu(i));
}
function Rl(i) {
  return dl(i).getComputedStyle(i);
}
function cf(i) {
  return zl(i) ? {
    scrollLeft: i.scrollLeft,
    scrollTop: i.scrollTop
  } : {
    scrollLeft: i.scrollX,
    scrollTop: i.scrollY
  };
}
function Re(i) {
  if (Bu(i) === "html")
    return i;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    i.assignedSlot || // DOM Element detected.
    i.parentNode || // ShadowRoot detected.
    Pd(i) && i.host || // Fallback.
    Bl(i)
  );
  return Pd(o) ? o.host : o;
}
function o0(i) {
  const o = Re(i);
  return Nu(o) ? i.ownerDocument ? i.ownerDocument.body : i.body : Il(o) && Ya(o) ? o : o0(o);
}
function Ba(i, o, d) {
  var s;
  o === void 0 && (o = []), d === void 0 && (d = !0);
  const b = o0(i), O = b === ((s = i.ownerDocument) == null ? void 0 : s.body), p = dl(b);
  if (O) {
    const x = Yc(p);
    return o.concat(p, p.visualViewport || [], Ya(b) ? b : [], x && d ? Ba(x) : []);
  } else
    return o.concat(b, Ba(b, [], d));
}
function Yc(i) {
  return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function r0(i) {
  const o = Rl(i);
  let d = parseFloat(o.width) || 0, s = parseFloat(o.height) || 0;
  const b = Il(i), O = b ? i.offsetWidth : d, p = b ? i.offsetHeight : s, x = lf(d) !== O || lf(s) !== p;
  return x && (d = O, s = p), {
    width: d,
    height: s,
    $: x
  };
}
function Lc(i) {
  return zl(i) ? i : i.contextElement;
}
function Hu(i) {
  const o = Lc(i);
  if (!Il(o))
    return ql(1);
  const d = o.getBoundingClientRect(), {
    width: s,
    height: b,
    $: O
  } = r0(o);
  let p = (O ? lf(d.width) : d.width) / s, x = (O ? lf(d.height) : d.height) / b;
  return (!p || !Number.isFinite(p)) && (p = 1), (!x || !Number.isFinite(x)) && (x = 1), {
    x: p,
    y: x
  };
}
const Av = /* @__PURE__ */ ql(0);
function d0(i) {
  const o = dl(i);
  return !Zc() || !o.visualViewport ? Av : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function Tv(i, o, d) {
  return o === void 0 && (o = !1), !d || o && d !== dl(i) ? !1 : o;
}
function Ke(i, o, d, s) {
  o === void 0 && (o = !1), d === void 0 && (d = !1);
  const b = i.getBoundingClientRect(), O = Lc(i);
  let p = ql(1);
  o && (s ? zl(s) && (p = Hu(s)) : p = Hu(i));
  const x = Tv(O, d, s) ? d0(O) : ql(0);
  let R = (b.left + x.x) / p.x, m = (b.top + x.y) / p.y, z = b.width / p.x, H = b.height / p.y;
  if (O) {
    const N = dl(O), q = s && zl(s) ? dl(s) : s;
    let C = N, Z = Yc(C);
    for (; Z && s && q !== C; ) {
      const V = Hu(Z), $ = Z.getBoundingClientRect(), P = Rl(Z), w = $.left + (Z.clientLeft + parseFloat(P.paddingLeft)) * V.x, K = $.top + (Z.clientTop + parseFloat(P.paddingTop)) * V.y;
      R *= V.x, m *= V.y, z *= V.x, H *= V.y, R += w, m += K, C = dl(Z), Z = Yc(C);
    }
  }
  return uf({
    width: z,
    height: H,
    x: R,
    y: m
  });
}
function sf(i, o) {
  const d = cf(i).scrollLeft;
  return o ? o.left + d : Ke(Bl(i)).left + d;
}
function h0(i, o) {
  const d = i.getBoundingClientRect(), s = d.left + o.scrollLeft - sf(i, d), b = d.top + o.scrollTop;
  return {
    x: s,
    y: b
  };
}
function Ev(i) {
  let {
    elements: o,
    rect: d,
    offsetParent: s,
    strategy: b
  } = i;
  const O = b === "fixed", p = Bl(s), x = o ? ff(o.floating) : !1;
  if (s === p || x && O)
    return d;
  let R = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = ql(1);
  const z = ql(0), H = Il(s);
  if ((H || !H && !O) && ((Bu(s) !== "body" || Ya(p)) && (R = cf(s)), H)) {
    const q = Ke(s);
    m = Hu(s), z.x = q.x + s.clientLeft, z.y = q.y + s.clientTop;
  }
  const N = p && !H && !O ? h0(p, R) : ql(0);
  return {
    width: d.width * m.x,
    height: d.height * m.y,
    x: d.x * m.x - R.scrollLeft * m.x + z.x + N.x,
    y: d.y * m.y - R.scrollTop * m.y + z.y + N.y
  };
}
function Ov(i) {
  return Array.from(i.getClientRects());
}
function pv(i) {
  const o = Bl(i), d = cf(i), s = i.ownerDocument.body, b = rl(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), O = rl(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
  let p = -d.scrollLeft + sf(i);
  const x = -d.scrollTop;
  return Rl(s).direction === "rtl" && (p += rl(o.clientWidth, s.clientWidth) - b), {
    width: b,
    height: O,
    x: p,
    y: x
  };
}
const Id = 25;
function zv(i, o) {
  const d = dl(i), s = Bl(i), b = d.visualViewport;
  let O = s.clientWidth, p = s.clientHeight, x = 0, R = 0;
  if (b) {
    O = b.width, p = b.height;
    const z = Zc();
    (!z || z && o === "fixed") && (x = b.offsetLeft, R = b.offsetTop);
  }
  const m = sf(s);
  if (m <= 0) {
    const z = s.ownerDocument, H = z.body, N = getComputedStyle(H), q = z.compatMode === "CSS1Compat" && parseFloat(N.marginLeft) + parseFloat(N.marginRight) || 0, C = Math.abs(s.clientWidth - H.clientWidth - q);
    C <= Id && (O -= C);
  } else m <= Id && (O += m);
  return {
    width: O,
    height: p,
    x,
    y: R
  };
}
function Rv(i, o) {
  const d = Ke(i, !0, o === "fixed"), s = d.top + i.clientTop, b = d.left + i.clientLeft, O = Il(i) ? Hu(i) : ql(1), p = i.clientWidth * O.x, x = i.clientHeight * O.y, R = b * O.x, m = s * O.y;
  return {
    width: p,
    height: x,
    x: R,
    y: m
  };
}
function t0(i, o, d) {
  let s;
  if (o === "viewport")
    s = zv(i, d);
  else if (o === "document")
    s = pv(Bl(i));
  else if (zl(o))
    s = Rv(o, d);
  else {
    const b = d0(i);
    s = {
      x: o.x - b.x,
      y: o.y - b.y,
      width: o.width,
      height: o.height
    };
  }
  return uf(s);
}
function y0(i, o) {
  const d = Re(i);
  return d === o || !zl(d) || Nu(d) ? !1 : Rl(d).position === "fixed" || y0(d, o);
}
function Mv(i, o) {
  const d = o.get(i);
  if (d)
    return d;
  let s = Ba(i, [], !1).filter((x) => zl(x) && Bu(x) !== "body"), b = null;
  const O = Rl(i).position === "fixed";
  let p = O ? Re(i) : i;
  for (; zl(p) && !Nu(p); ) {
    const x = Rl(p), R = jc(p);
    !R && x.position === "fixed" && (b = null), (O ? !R && !b : !R && x.position === "static" && !!b && (b.position === "absolute" || b.position === "fixed") || Ya(p) && !R && y0(i, p)) ? s = s.filter((z) => z !== p) : b = x, p = Re(p);
  }
  return o.set(i, s), s;
}
function Dv(i) {
  let {
    element: o,
    boundary: d,
    rootBoundary: s,
    strategy: b
  } = i;
  const p = [...d === "clippingAncestors" ? ff(o) ? [] : Mv(o, this._c) : [].concat(d), s], x = t0(o, p[0], b);
  let R = x.top, m = x.right, z = x.bottom, H = x.left;
  for (let N = 1; N < p.length; N++) {
    const q = t0(o, p[N], b);
    R = rl(q.top, R), m = ze(q.right, m), z = ze(q.bottom, z), H = rl(q.left, H);
  }
  return {
    width: m - H,
    height: z - R,
    x: H,
    y: R
  };
}
function _v(i) {
  const {
    width: o,
    height: d
  } = r0(i);
  return {
    width: o,
    height: d
  };
}
function xv(i, o, d) {
  const s = Il(o), b = Bl(o), O = d === "fixed", p = Ke(i, !0, O, o);
  let x = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const R = ql(0);
  function m() {
    R.x = sf(b);
  }
  if (s || !s && !O)
    if ((Bu(o) !== "body" || Ya(b)) && (x = cf(o)), s) {
      const q = Ke(o, !0, O, o);
      R.x = q.x + o.clientLeft, R.y = q.y + o.clientTop;
    } else b && m();
  O && !s && b && m();
  const z = b && !s && !O ? h0(b, x) : ql(0), H = p.left + x.scrollLeft - R.x - z.x, N = p.top + x.scrollTop - R.y - z.y;
  return {
    x: H,
    y: N,
    width: p.width,
    height: p.height
  };
}
function Hc(i) {
  return Rl(i).position === "static";
}
function l0(i, o) {
  if (!Il(i) || Rl(i).position === "fixed")
    return null;
  if (o)
    return o(i);
  let d = i.offsetParent;
  return Bl(i) === d && (d = d.ownerDocument.body), d;
}
function v0(i, o) {
  const d = dl(i);
  if (ff(i))
    return d;
  if (!Il(i)) {
    let b = Re(i);
    for (; b && !Nu(b); ) {
      if (zl(b) && !Hc(b))
        return b;
      b = Re(b);
    }
    return d;
  }
  let s = l0(i, o);
  for (; s && mv(s) && Hc(s); )
    s = l0(s, o);
  return s && Nu(s) && Hc(s) && !jc(s) ? d : s || bv(i) || d;
}
const Uv = async function(i) {
  const o = this.getOffsetParent || v0, d = this.getDimensions, s = await d(i.floating);
  return {
    reference: xv(i.reference, await o(i.floating), i.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Hv(i) {
  return Rl(i).direction === "rtl";
}
const Nv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ev,
  getDocumentElement: Bl,
  getClippingRect: Dv,
  getOffsetParent: v0,
  getElementRects: Uv,
  getClientRects: Ov,
  getDimensions: _v,
  getScale: Hu,
  isElement: zl,
  isRTL: Hv
};
function m0(i, o) {
  return i.x === o.x && i.y === o.y && i.width === o.width && i.height === o.height;
}
function qv(i, o) {
  let d = null, s;
  const b = Bl(i);
  function O() {
    var x;
    clearTimeout(s), (x = d) == null || x.disconnect(), d = null;
  }
  function p(x, R) {
    x === void 0 && (x = !1), R === void 0 && (R = 1), O();
    const m = i.getBoundingClientRect(), {
      left: z,
      top: H,
      width: N,
      height: q
    } = m;
    if (x || o(), !N || !q)
      return;
    const C = In(H), Z = In(b.clientWidth - (z + N)), V = In(b.clientHeight - (H + q)), $ = In(z), w = {
      rootMargin: -C + "px " + -Z + "px " + -V + "px " + -$ + "px",
      threshold: rl(0, ze(1, R)) || 1
    };
    let K = !0;
    function j(tt) {
      const nt = tt[0].intersectionRatio;
      if (nt !== R) {
        if (!K)
          return p();
        nt ? p(!1, nt) : s = setTimeout(() => {
          p(!1, 1e-7);
        }, 1e3);
      }
      nt === 1 && !m0(m, i.getBoundingClientRect()) && p(), K = !1;
    }
    try {
      d = new IntersectionObserver(j, {
        ...w,
        // Handle <iframe>s
        root: b.ownerDocument
      });
    } catch {
      d = new IntersectionObserver(j, w);
    }
    d.observe(i);
  }
  return p(!0), O;
}
function kv(i, o, d, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: b = !0,
    ancestorResize: O = !0,
    elementResize: p = typeof ResizeObserver == "function",
    layoutShift: x = typeof IntersectionObserver == "function",
    animationFrame: R = !1
  } = s, m = Lc(i), z = b || O ? [...m ? Ba(m) : [], ...o ? Ba(o) : []] : [];
  z.forEach(($) => {
    b && $.addEventListener("scroll", d, {
      passive: !0
    }), O && $.addEventListener("resize", d);
  });
  const H = m && x ? qv(m, d) : null;
  let N = -1, q = null;
  p && (q = new ResizeObserver(($) => {
    let [P] = $;
    P && P.target === m && q && o && (q.unobserve(o), cancelAnimationFrame(N), N = requestAnimationFrame(() => {
      var w;
      (w = q) == null || w.observe(o);
    })), d();
  }), m && !R && q.observe(m), o && q.observe(o));
  let C, Z = R ? Ke(i) : null;
  R && V();
  function V() {
    const $ = Ke(i);
    Z && !m0(Z, $) && d(), Z = $, C = requestAnimationFrame(V);
  }
  return d(), () => {
    var $;
    z.forEach((P) => {
      b && P.removeEventListener("scroll", d), O && P.removeEventListener("resize", d);
    }), H?.(), ($ = q) == null || $.disconnect(), q = null, R && cancelAnimationFrame(C);
  };
}
const Bv = dv, Yv = hv, Cv = sv, Xv = vv, Gv = ov, e0 = cv, Qv = yv, jv = (i, o, d) => {
  const s = /* @__PURE__ */ new Map(), b = {
    platform: Nv,
    ...d
  }, O = {
    ...b.platform,
    _c: s
  };
  return iv(i, o, {
    ...b,
    platform: O
  });
};
var Zv = typeof document < "u", Lv = function() {
}, tf = Zv ? Xt.useLayoutEffect : Lv;
function af(i, o) {
  if (i === o)
    return !0;
  if (typeof i != typeof o)
    return !1;
  if (typeof i == "function" && i.toString() === o.toString())
    return !0;
  let d, s, b;
  if (i && o && typeof i == "object") {
    if (Array.isArray(i)) {
      if (d = i.length, d !== o.length) return !1;
      for (s = d; s-- !== 0; )
        if (!af(i[s], o[s]))
          return !1;
      return !0;
    }
    if (b = Object.keys(i), d = b.length, d !== Object.keys(o).length)
      return !1;
    for (s = d; s-- !== 0; )
      if (!{}.hasOwnProperty.call(o, b[s]))
        return !1;
    for (s = d; s-- !== 0; ) {
      const O = b[s];
      if (!(O === "_owner" && i.$$typeof) && !af(i[O], o[O]))
        return !1;
    }
    return !0;
  }
  return i !== i && o !== o;
}
function g0(i) {
  return typeof window > "u" ? 1 : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u0(i, o) {
  const d = g0(i);
  return Math.round(o * d) / d;
}
function Nc(i) {
  const o = Xt.useRef(i);
  return tf(() => {
    o.current = i;
  }), o;
}
function Fv(i) {
  i === void 0 && (i = {});
  const {
    placement: o = "bottom",
    strategy: d = "absolute",
    middleware: s = [],
    platform: b,
    elements: {
      reference: O,
      floating: p
    } = {},
    transform: x = !0,
    whileElementsMounted: R,
    open: m
  } = i, [z, H] = Xt.useState({
    x: 0,
    y: 0,
    strategy: d,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [N, q] = Xt.useState(s);
  af(N, s) || q(s);
  const [C, Z] = Xt.useState(null), [V, $] = Xt.useState(null), P = Xt.useCallback((Y) => {
    Y !== tt.current && (tt.current = Y, Z(Y));
  }, []), w = Xt.useCallback((Y) => {
    Y !== nt.current && (nt.current = Y, $(Y));
  }, []), K = O || C, j = p || V, tt = Xt.useRef(null), nt = Xt.useRef(null), vt = Xt.useRef(z), zt = R != null, Rt = Nc(R), Dt = Nc(b), dt = Nc(m), _t = Xt.useCallback(() => {
    if (!tt.current || !nt.current)
      return;
    const Y = {
      placement: o,
      strategy: d,
      middleware: N
    };
    Dt.current && (Y.platform = Dt.current), jv(tt.current, nt.current, Y).then((lt) => {
      const h = {
        ...lt,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: dt.current !== !1
      };
      bt.current && !af(vt.current, h) && (vt.current = h, f0.flushSync(() => {
        H(h);
      }));
    });
  }, [N, o, d, Dt, dt]);
  tf(() => {
    m === !1 && vt.current.isPositioned && (vt.current.isPositioned = !1, H((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [m]);
  const bt = Xt.useRef(!1);
  tf(() => (bt.current = !0, () => {
    bt.current = !1;
  }), []), tf(() => {
    if (K && (tt.current = K), j && (nt.current = j), K && j) {
      if (Rt.current)
        return Rt.current(K, j, _t);
      _t();
    }
  }, [K, j, _t, Rt, zt]);
  const At = Xt.useMemo(() => ({
    reference: tt,
    floating: nt,
    setReference: P,
    setFloating: w
  }), [P, w]), E = Xt.useMemo(() => ({
    reference: K,
    floating: j
  }), [K, j]), B = Xt.useMemo(() => {
    const Y = {
      position: d,
      left: 0,
      top: 0
    };
    if (!E.floating)
      return Y;
    const lt = u0(E.floating, z.x), h = u0(E.floating, z.y);
    return x ? {
      ...Y,
      transform: "translate(" + lt + "px, " + h + "px)",
      ...g0(E.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: d,
      left: lt,
      top: h
    };
  }, [d, x, E.floating, z.x, z.y]);
  return Xt.useMemo(() => ({
    ...z,
    update: _t,
    refs: At,
    elements: E,
    floatingStyles: B
  }), [z, _t, At, E, B]);
}
const Vv = (i) => {
  function o(d) {
    return {}.hasOwnProperty.call(d, "current");
  }
  return {
    name: "arrow",
    options: i,
    fn(d) {
      const {
        element: s,
        padding: b
      } = typeof i == "function" ? i(d) : i;
      return s && o(s) ? s.current != null ? e0({
        element: s.current,
        padding: b
      }).fn(d) : {} : s ? e0({
        element: s,
        padding: b
      }).fn(d) : {};
    }
  };
}, Pv = (i, o) => {
  const d = Bv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
}, Iv = (i, o) => {
  const d = Yv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
}, tm = (i, o) => ({
  fn: Qv(i).fn,
  options: [i, o]
}), lm = (i, o) => {
  const d = Cv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
}, em = (i, o) => {
  const d = Xv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
}, um = (i, o) => {
  const d = Gv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
}, am = (i, o) => {
  const d = Vv(i);
  return {
    name: d.name,
    fn: d.fn,
    options: [i, o]
  };
};
export {
  Zy as R,
  Cc as a,
  f0 as b,
  Kv as c,
  wv as d,
  em as e,
  lm as f,
  a0 as g,
  am as h,
  um as i,
  Wv as j,
  kv as k,
  tm as l,
  $v as m,
  Jv as n,
  Pv as o,
  Xt as r,
  Iv as s,
  Fv as u
};
