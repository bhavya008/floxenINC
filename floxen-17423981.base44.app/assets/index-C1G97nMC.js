var Zh = r => {
    throw TypeError(r)
};
var Au = (r, n, s) => n.has(r) || Zh("Cannot " + s);
var N = (r, n, s) => (Au(r, n, "read from private field"), s ? s.call(r) : n.get(r)),
    me = (r, n, s) => n.has(r) ? Zh("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, s),
    X = (r, n, s, i) => (Au(r, n, "write to private field"), i ? i.call(r, s) : n.set(r, s), s),
    Ee = (r, n, s) => (Au(r, n, "access private method"), s);
var ol = (r, n, s, i) => ({
    set _(a) {
        X(r, n, a, s)
    },
    get _() {
        return N(r, n, i)
    }
});
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const d of a)
            if (d.type === "childList")
                for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && i(h)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(a) {
        const d = {};
        return a.integrity && (d.integrity = a.integrity), a.referrerPolicy && (d.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? d.credentials = "include" : a.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const d = s(a);
        fetch(a.href, d)
    }
})();

function cv(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Lu = {
        exports: {}
    },
    ko = {},
    Mu = {
        exports: {}
    },
    Se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;

function dv() {
    if (ep) return Se;
    ep = 1;
    var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        d = Symbol.for("react.provider"),
        h = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        w = Symbol.iterator;

    function R(_) {
        return _ === null || typeof _ != "object" ? null : (_ = w && _[w] || _["@@iterator"], typeof _ == "function" ? _ : null)
    }
    var T = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        k = Object.assign,
        E = {};

    function b(_, U, le) {
        this.props = _, this.context = U, this.refs = E, this.updater = le || T
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(_, U) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, U, "setState")
    }, b.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate")
    };

    function M() {}
    M.prototype = b.prototype;

    function q(_, U, le) {
        this.props = _, this.context = U, this.refs = E, this.updater = le || T
    }
    var I = q.prototype = new M;
    I.constructor = q, k(I, b.prototype), I.isPureReactComponent = !0;
    var z = Array.isArray,
        G = Object.prototype.hasOwnProperty,
        ce = {
            current: null
        },
        ge = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function F(_, U, le) {
        var ue, be = {},
            Ne = null,
            ve = null;
        if (U != null)
            for (ue in U.ref !== void 0 && (ve = U.ref), U.key !== void 0 && (Ne = "" + U.key), U) G.call(U, ue) && !ge.hasOwnProperty(ue) && (be[ue] = U[ue]);
        var Te = arguments.length - 2;
        if (Te === 1) be.children = le;
        else if (1 < Te) {
            for (var Le = Array(Te), tt = 0; tt < Te; tt++) Le[tt] = arguments[tt + 2];
            be.children = Le
        }
        if (_ && _.defaultProps)
            for (ue in Te = _.defaultProps, Te) be[ue] === void 0 && (be[ue] = Te[ue]);
        return {
            $$typeof: r,
            type: _,
            key: Ne,
            ref: ve,
            props: be,
            _owner: ce.current
        }
    }

    function V(_, U) {
        return {
            $$typeof: r,
            type: _.type,
            key: U,
            ref: _.ref,
            props: _.props,
            _owner: _._owner
        }
    }

    function K(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === r
    }

    function Z(_) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + _.replace(/[=:]/g, function(le) {
            return U[le]
        })
    }
    var B = /\/+/g;

    function se(_, U) {
        return typeof _ == "object" && _ !== null && _.key != null ? Z("" + _.key) : U.toString(36)
    }

    function _e(_, U, le, ue, be) {
        var Ne = typeof _;
        (Ne === "undefined" || Ne === "boolean") && (_ = null);
        var ve = !1;
        if (_ === null) ve = !0;
        else switch (Ne) {
            case "string":
            case "number":
                ve = !0;
                break;
            case "object":
                switch (_.$$typeof) {
                    case r:
                    case n:
                        ve = !0
                }
        }
        if (ve) return ve = _, be = be(ve), _ = ue === "" ? "." + se(ve, 0) : ue, z(be) ? (le = "", _ != null && (le = _.replace(B, "$&/") + "/"), _e(be, U, le, "", function(tt) {
            return tt
        })) : be != null && (K(be) && (be = V(be, le + (!be.key || ve && ve.key === be.key ? "" : ("" + be.key).replace(B, "$&/") + "/") + _)), U.push(be)), 1;
        if (ve = 0, ue = ue === "" ? "." : ue + ":", z(_))
            for (var Te = 0; Te < _.length; Te++) {
                Ne = _[Te];
                var Le = ue + se(Ne, Te);
                ve += _e(Ne, U, le, Le, be)
            } else if (Le = R(_), typeof Le == "function")
                for (_ = Le.call(_), Te = 0; !(Ne = _.next()).done;) Ne = Ne.value, Le = ue + se(Ne, Te++), ve += _e(Ne, U, le, Le, be);
            else if (Ne === "object") throw U = String(_), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
        return ve
    }

    function pe(_, U, le) {
        if (_ == null) return _;
        var ue = [],
            be = 0;
        return _e(_, ue, "", "", function(Ne) {
            return U.call(le, Ne, be++)
        }), ue
    }

    function de(_) {
        if (_._status === -1) {
            var U = _._result;
            U = U(), U.then(function(le) {
                (_._status === 0 || _._status === -1) && (_._status = 1, _._result = le)
            }, function(le) {
                (_._status === 0 || _._status === -1) && (_._status = 2, _._result = le)
            }), _._status === -1 && (_._status = 0, _._result = U)
        }
        if (_._status === 1) return _._result.default;
        throw _._result
    }
    var we = {
            current: null
        },
        D = {
            transition: null
        },
        ae = {
            ReactCurrentDispatcher: we,
            ReactCurrentBatchConfig: D,
            ReactCurrentOwner: ce
        };

    function Y() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Se.Children = {
        map: pe,
        forEach: function(_, U, le) {
            pe(_, function() {
                U.apply(this, arguments)
            }, le)
        },
        count: function(_) {
            var U = 0;
            return pe(_, function() {
                U++
            }), U
        },
        toArray: function(_) {
            return pe(_, function(U) {
                return U
            }) || []
        },
        only: function(_) {
            if (!K(_)) throw Error("React.Children.only expected to receive a single React element child.");
            return _
        }
    }, Se.Component = b, Se.Fragment = s, Se.Profiler = a, Se.PureComponent = q, Se.StrictMode = i, Se.Suspense = g, Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ae, Se.act = Y, Se.cloneElement = function(_, U, le) {
        if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
        var ue = k({}, _.props),
            be = _.key,
            Ne = _.ref,
            ve = _._owner;
        if (U != null) {
            if (U.ref !== void 0 && (Ne = U.ref, ve = ce.current), U.key !== void 0 && (be = "" + U.key), _.type && _.type.defaultProps) var Te = _.type.defaultProps;
            for (Le in U) G.call(U, Le) && !ge.hasOwnProperty(Le) && (ue[Le] = U[Le] === void 0 && Te !== void 0 ? Te[Le] : U[Le])
        }
        var Le = arguments.length - 2;
        if (Le === 1) ue.children = le;
        else if (1 < Le) {
            Te = Array(Le);
            for (var tt = 0; tt < Le; tt++) Te[tt] = arguments[tt + 2];
            ue.children = Te
        }
        return {
            $$typeof: r,
            type: _.type,
            key: be,
            ref: Ne,
            props: ue,
            _owner: ve
        }
    }, Se.createContext = function(_) {
        return _ = {
            $$typeof: h,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, _.Provider = {
            $$typeof: d,
            _context: _
        }, _.Consumer = _
    }, Se.createElement = F, Se.createFactory = function(_) {
        var U = F.bind(null, _);
        return U.type = _, U
    }, Se.createRef = function() {
        return {
            current: null
        }
    }, Se.forwardRef = function(_) {
        return {
            $$typeof: p,
            render: _
        }
    }, Se.isValidElement = K, Se.lazy = function(_) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: _
            },
            _init: de
        }
    }, Se.memo = function(_, U) {
        return {
            $$typeof: y,
            type: _,
            compare: U === void 0 ? null : U
        }
    }, Se.startTransition = function(_) {
        var U = D.transition;
        D.transition = {};
        try {
            _()
        } finally {
            D.transition = U
        }
    }, Se.unstable_act = Y, Se.useCallback = function(_, U) {
        return we.current.useCallback(_, U)
    }, Se.useContext = function(_) {
        return we.current.useContext(_)
    }, Se.useDebugValue = function() {}, Se.useDeferredValue = function(_) {
        return we.current.useDeferredValue(_)
    }, Se.useEffect = function(_, U) {
        return we.current.useEffect(_, U)
    }, Se.useId = function() {
        return we.current.useId()
    }, Se.useImperativeHandle = function(_, U, le) {
        return we.current.useImperativeHandle(_, U, le)
    }, Se.useInsertionEffect = function(_, U) {
        return we.current.useInsertionEffect(_, U)
    }, Se.useLayoutEffect = function(_, U) {
        return we.current.useLayoutEffect(_, U)
    }, Se.useMemo = function(_, U) {
        return we.current.useMemo(_, U)
    }, Se.useReducer = function(_, U, le) {
        return we.current.useReducer(_, U, le)
    }, Se.useRef = function(_) {
        return we.current.useRef(_)
    }, Se.useState = function(_) {
        return we.current.useState(_)
    }, Se.useSyncExternalStore = function(_, U, le) {
        return we.current.useSyncExternalStore(_, U, le)
    }, Se.useTransition = function() {
        return we.current.useTransition()
    }, Se.version = "18.3.1", Se
}
var tp;

function Pc() {
    return tp || (tp = 1, Mu.exports = dv()), Mu.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;

function fv() {
    if (np) return ko;
    np = 1;
    var r = Pc(),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function h(p, g, y) {
        var v, w = {},
            R = null,
            T = null;
        y !== void 0 && (R = "" + y), g.key !== void 0 && (R = "" + g.key), g.ref !== void 0 && (T = g.ref);
        for (v in g) i.call(g, v) && !d.hasOwnProperty(v) && (w[v] = g[v]);
        if (p && p.defaultProps)
            for (v in g = p.defaultProps, g) w[v] === void 0 && (w[v] = g[v]);
        return {
            $$typeof: n,
            type: p,
            key: R,
            ref: T,
            props: w,
            _owner: a.current
        }
    }
    return ko.Fragment = s, ko.jsx = h, ko.jsxs = h, ko
}
var rp;

function hv() {
    return rp || (rp = 1, Lu.exports = fv()), Lu.exports
}
var c = hv(),
    C = Pc(),
    il = {},
    Fu = {
        exports: {}
    },
    Et = {},
    Du = {
        exports: {}
    },
    Iu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;

function pv() {
    return sp || (sp = 1, (function(r) {
        function n(D, ae) {
            var Y = D.length;
            D.push(ae);
            e: for (; 0 < Y;) {
                var _ = Y - 1 >>> 1,
                    U = D[_];
                if (0 < a(U, ae)) D[_] = ae, D[Y] = U, Y = _;
                else break e
            }
        }

        function s(D) {
            return D.length === 0 ? null : D[0]
        }

        function i(D) {
            if (D.length === 0) return null;
            var ae = D[0],
                Y = D.pop();
            if (Y !== ae) {
                D[0] = Y;
                e: for (var _ = 0, U = D.length, le = U >>> 1; _ < le;) {
                    var ue = 2 * (_ + 1) - 1,
                        be = D[ue],
                        Ne = ue + 1,
                        ve = D[Ne];
                    if (0 > a(be, Y)) Ne < U && 0 > a(ve, be) ? (D[_] = ve, D[Ne] = Y, _ = Ne) : (D[_] = be, D[ue] = Y, _ = ue);
                    else if (Ne < U && 0 > a(ve, Y)) D[_] = ve, D[Ne] = Y, _ = Ne;
                    else break e
                }
            }
            return ae
        }

        function a(D, ae) {
            var Y = D.sortIndex - ae.sortIndex;
            return Y !== 0 ? Y : D.id - ae.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            r.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date,
                p = h.now();
            r.unstable_now = function() {
                return h.now() - p
            }
        }
        var g = [],
            y = [],
            v = 1,
            w = null,
            R = 3,
            T = !1,
            k = !1,
            E = !1,
            b = typeof setTimeout == "function" ? setTimeout : null,
            M = typeof clearTimeout == "function" ? clearTimeout : null,
            q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function I(D) {
            for (var ae = s(y); ae !== null;) {
                if (ae.callback === null) i(y);
                else if (ae.startTime <= D) i(y), ae.sortIndex = ae.expirationTime, n(g, ae);
                else break;
                ae = s(y)
            }
        }

        function z(D) {
            if (E = !1, I(D), !k)
                if (s(g) !== null) k = !0, de(G);
                else {
                    var ae = s(y);
                    ae !== null && we(z, ae.startTime - D)
                }
        }

        function G(D, ae) {
            k = !1, E && (E = !1, M(F), F = -1), T = !0;
            var Y = R;
            try {
                for (I(ae), w = s(g); w !== null && (!(w.expirationTime > ae) || D && !Z());) {
                    var _ = w.callback;
                    if (typeof _ == "function") {
                        w.callback = null, R = w.priorityLevel;
                        var U = _(w.expirationTime <= ae);
                        ae = r.unstable_now(), typeof U == "function" ? w.callback = U : w === s(g) && i(g), I(ae)
                    } else i(g);
                    w = s(g)
                }
                if (w !== null) var le = !0;
                else {
                    var ue = s(y);
                    ue !== null && we(z, ue.startTime - ae), le = !1
                }
                return le
            } finally {
                w = null, R = Y, T = !1
            }
        }
        var ce = !1,
            ge = null,
            F = -1,
            V = 5,
            K = -1;

        function Z() {
            return !(r.unstable_now() - K < V)
        }

        function B() {
            if (ge !== null) {
                var D = r.unstable_now();
                K = D;
                var ae = !0;
                try {
                    ae = ge(!0, D)
                } finally {
                    ae ? se() : (ce = !1, ge = null)
                }
            } else ce = !1
        }
        var se;
        if (typeof q == "function") se = function() {
            q(B)
        };
        else if (typeof MessageChannel < "u") {
            var _e = new MessageChannel,
                pe = _e.port2;
            _e.port1.onmessage = B, se = function() {
                pe.postMessage(null)
            }
        } else se = function() {
            b(B, 0)
        };

        function de(D) {
            ge = D, ce || (ce = !0, se())
        }

        function we(D, ae) {
            F = b(function() {
                D(r.unstable_now())
            }, ae)
        }
        r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(D) {
            D.callback = null
        }, r.unstable_continueExecution = function() {
            k || T || (k = !0, de(G))
        }, r.unstable_forceFrameRate = function(D) {
            0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < D ? Math.floor(1e3 / D) : 5
        }, r.unstable_getCurrentPriorityLevel = function() {
            return R
        }, r.unstable_getFirstCallbackNode = function() {
            return s(g)
        }, r.unstable_next = function(D) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                    var ae = 3;
                    break;
                default:
                    ae = R
            }
            var Y = R;
            R = ae;
            try {
                return D()
            } finally {
                R = Y
            }
        }, r.unstable_pauseExecution = function() {}, r.unstable_requestPaint = function() {}, r.unstable_runWithPriority = function(D, ae) {
            switch (D) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    D = 3
            }
            var Y = R;
            R = D;
            try {
                return ae()
            } finally {
                R = Y
            }
        }, r.unstable_scheduleCallback = function(D, ae, Y) {
            var _ = r.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? _ + Y : _) : Y = _, D) {
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3
            }
            return U = Y + U, D = {
                id: v++,
                callback: ae,
                priorityLevel: D,
                startTime: Y,
                expirationTime: U,
                sortIndex: -1
            }, Y > _ ? (D.sortIndex = Y, n(y, D), s(g) === null && D === s(y) && (E ? (M(F), F = -1) : E = !0, we(z, Y - _))) : (D.sortIndex = U, n(g, D), k || T || (k = !0, de(G))), D
        }, r.unstable_shouldYield = Z, r.unstable_wrapCallback = function(D) {
            var ae = R;
            return function() {
                var Y = R;
                R = ae;
                try {
                    return D.apply(this, arguments)
                } finally {
                    R = Y
                }
            }
        }
    })(Iu)), Iu
}
var op;

function mv() {
    return op || (op = 1, Du.exports = pv()), Du.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ip;

function gv() {
    if (ip) return Et;
    ip = 1;
    var r = Pc(),
        n = mv();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++) t += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set,
        a = {};

    function d(e, t) {
        h(e, t), h(e + "Capture", t)
    }

    function h(e, t) {
        for (a[e] = t, e = 0; e < t.length; e++) i.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        g = Object.prototype.hasOwnProperty,
        y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        v = {},
        w = {};

    function R(e) {
        return g.call(w, e) ? !0 : g.call(v, e) ? !1 : y.test(e) ? w[e] = !0 : (v[e] = !0, !1)
    }

    function T(e, t, o, l) {
        if (o !== null && o.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return l ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function k(e, t, o, l) {
        if (t === null || typeof t > "u" || T(e, t, o, l)) return !0;
        if (l) return !1;
        if (o !== null) switch (o.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function E(e, t, o, l, u, f, m) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = l, this.attributeNamespace = u, this.mustUseProperty = o, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = m
    }
    var b = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        b[e] = new E(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        b[t] = new E(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        b[e] = new E(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        b[e] = new E(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        b[e] = new E(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        b[e] = new E(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        b[e] = new E(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        b[e] = new E(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        b[e] = new E(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var M = /[\-:]([a-z])/g;

    function q(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(M, q);
        b[t] = new E(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(M, q);
        b[t] = new E(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(M, q);
        b[t] = new E(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        b[e] = new E(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), b.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        b[e] = new E(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function I(e, t, o, l) {
        var u = b.hasOwnProperty(t) ? b[t] : null;
        (u !== null ? u.type !== 0 : l || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (k(t, o, u, l) && (o = null), l || u === null ? R(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : u.mustUseProperty ? e[u.propertyName] = o === null ? u.type === 3 ? !1 : "" : o : (t = u.attributeName, l = u.attributeNamespace, o === null ? e.removeAttribute(t) : (u = u.type, o = u === 3 || u === 4 && o === !0 ? "" : "" + o, l ? e.setAttributeNS(l, t, o) : e.setAttribute(t, o))))
    }
    var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        G = Symbol.for("react.element"),
        ce = Symbol.for("react.portal"),
        ge = Symbol.for("react.fragment"),
        F = Symbol.for("react.strict_mode"),
        V = Symbol.for("react.profiler"),
        K = Symbol.for("react.provider"),
        Z = Symbol.for("react.context"),
        B = Symbol.for("react.forward_ref"),
        se = Symbol.for("react.suspense"),
        _e = Symbol.for("react.suspense_list"),
        pe = Symbol.for("react.memo"),
        de = Symbol.for("react.lazy"),
        we = Symbol.for("react.offscreen"),
        D = Symbol.iterator;

    function ae(e) {
        return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Y = Object.assign,
        _;

    function U(e) {
        if (_ === void 0) try {
            throw Error()
        } catch (o) {
            var t = o.stack.trim().match(/\n( *(at )?)/);
            _ = t && t[1] || ""
        }
        return `
` + _ + e
    }
    var le = !1;

    function ue(e, t) {
        if (!e || le) return "";
        le = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (A) {
                        var l = A
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (A) {
                        l = A
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (A) {
                    l = A
                }
                e()
            }
        } catch (A) {
            if (A && l && typeof A.stack == "string") {
                for (var u = A.stack.split(`
`), f = l.stack.split(`
`), m = u.length - 1, x = f.length - 1; 1 <= m && 0 <= x && u[m] !== f[x];) x--;
                for (; 1 <= m && 0 <= x; m--, x--)
                    if (u[m] !== f[x]) {
                        if (m !== 1 || x !== 1)
                            do
                                if (m--, x--, 0 > x || u[m] !== f[x]) {
                                    var S = `
` + u[m].replace(" at new ", " at ");
                                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), S
                                }
                        while (1 <= m && 0 <= x);
                        break
                    }
            }
        } finally {
            le = !1, Error.prepareStackTrace = o
        }
        return (e = e ? e.displayName || e.name : "") ? U(e) : ""
    }

    function be(e) {
        switch (e.tag) {
            case 5:
                return U(e.type);
            case 16:
                return U("Lazy");
            case 13:
                return U("Suspense");
            case 19:
                return U("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ue(e.type, !1), e;
            case 11:
                return e = ue(e.type.render, !1), e;
            case 1:
                return e = ue(e.type, !0), e;
            default:
                return ""
        }
    }

    function Ne(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ge:
                return "Fragment";
            case ce:
                return "Portal";
            case V:
                return "Profiler";
            case F:
                return "StrictMode";
            case se:
                return "Suspense";
            case _e:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Z:
                return (e.displayName || "Context") + ".Consumer";
            case K:
                return (e._context.displayName || "Context") + ".Provider";
            case B:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case pe:
                return t = e.displayName || null, t !== null ? t : Ne(e.type) || "Memo";
            case de:
                t = e._payload, e = e._init;
                try {
                    return Ne(e(t))
                } catch {}
        }
        return null
    }

    function ve(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Ne(t);
            case 8:
                return t === F ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function Te(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Le(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function tt(e) {
        var t = Le(e) ? "checked" : "value",
            o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var u = o.get,
                f = o.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(m) {
                    l = "" + m, f.call(this, m)
                }
            }), Object.defineProperty(e, t, {
                enumerable: o.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(m) {
                    l = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function An(e) {
        e._valueTracker || (e._valueTracker = tt(e))
    }

    function hr(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var o = t.getValue(),
            l = "";
        return e && (l = Le(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== o ? (t.setValue(e), !0) : !1
    }

    function Yo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function Ul(e, t) {
        var o = t.checked;
        return Y({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ? ? e._wrapperState.initialChecked
        })
    }

    function od(e, t) {
        var o = t.defaultValue == null ? "" : t.defaultValue,
            l = t.checked != null ? t.checked : t.defaultChecked;
        o = Te(t.value != null ? t.value : o), e._wrapperState = {
            initialChecked: l,
            initialValue: o,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function id(e, t) {
        t = t.checked, t != null && I(e, "checked", t, !1)
    }

    function Bl(e, t) {
        id(e, t);
        var o = Te(t.value),
            l = t.type;
        if (o != null) l === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
        else if (l === "submit" || l === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? $l(e, t.type, o) : t.hasOwnProperty("defaultValue") && $l(e, t.type, Te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function ld(e, t, o) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var l = t.type;
            if (!(l !== "submit" && l !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, o || t === e.value || (e.value = t), e.defaultValue = t
        }
        o = e.name, o !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, o !== "" && (e.name = o)
    }

    function $l(e, t, o) {
        (t !== "number" || Yo(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o))
    }
    var Fs = Array.isArray;

    function $r(e, t, o, l) {
        if (e = e.options, t) {
            t = {};
            for (var u = 0; u < o.length; u++) t["$" + o[u]] = !0;
            for (o = 0; o < e.length; o++) u = t.hasOwnProperty("$" + e[o].value), e[o].selected !== u && (e[o].selected = u), u && l && (e[o].defaultSelected = !0)
        } else {
            for (o = "" + Te(o), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === o) {
                    e[u].selected = !0, l && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Wl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return Y({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function ad(e, t) {
        var o = t.value;
        if (o == null) {
            if (o = t.children, t = t.defaultValue, o != null) {
                if (t != null) throw Error(s(92));
                if (Fs(o)) {
                    if (1 < o.length) throw Error(s(93));
                    o = o[0]
                }
                t = o
            }
            t == null && (t = ""), o = t
        }
        e._wrapperState = {
            initialValue: Te(o)
        }
    }

    function ud(e, t) {
        var o = Te(t.value),
            l = Te(t.defaultValue);
        o != null && (o = "" + o, o !== e.value && (e.value = o), t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)), l != null && (e.defaultValue = "" + l)
    }

    function cd(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function dd(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Vl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Jo, fd = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, l, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, o, l, u)
            })
        } : e
    })(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Jo = Jo || document.createElement("div"), Jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Ds(e, t) {
        if (t) {
            var o = e.firstChild;
            if (o && o === e.lastChild && o.nodeType === 3) {
                o.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Is = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        py = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Is).forEach(function(e) {
        py.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Is[t] = Is[e]
        })
    });

    function hd(e, t, o) {
        return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || Is.hasOwnProperty(e) && Is[e] ? ("" + t).trim() : t + "px"
    }

    function pd(e, t) {
        e = e.style;
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var l = o.indexOf("--") === 0,
                    u = hd(o, t[o], l);
                o === "float" && (o = "cssFloat"), l ? e.setProperty(o, u) : e[o] = u
            }
    }
    var my = Y({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Hl(e, t) {
        if (t) {
            if (my[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function ql(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
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
                return !0
        }
    }
    var Ql = null;

    function Kl(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Gl = null,
        Wr = null,
        Vr = null;

    function md(e) {
        if (e = io(e)) {
            if (typeof Gl != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = wi(t), Gl(e.stateNode, e.type, t))
        }
    }

    function gd(e) {
        Wr ? Vr ? Vr.push(e) : Vr = [e] : Wr = e
    }

    function yd() {
        if (Wr) {
            var e = Wr,
                t = Vr;
            if (Vr = Wr = null, md(e), t)
                for (e = 0; e < t.length; e++) md(t[e])
        }
    }

    function vd(e, t) {
        return e(t)
    }

    function xd() {}
    var Yl = !1;

    function wd(e, t, o) {
        if (Yl) return e(t, o);
        Yl = !0;
        try {
            return vd(e, t, o)
        } finally {
            Yl = !1, (Wr !== null || Vr !== null) && (xd(), yd())
        }
    }

    function zs(e, t) {
        var o = e.stateNode;
        if (o === null) return null;
        var l = wi(o);
        if (l === null) return null;
        o = l[t];
        e: switch (t) {
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
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (o && typeof o != "function") throw Error(s(231, t, typeof o));
        return o
    }
    var Jl = !1;
    if (p) try {
        var Us = {};
        Object.defineProperty(Us, "passive", {
            get: function() {
                Jl = !0
            }
        }), window.addEventListener("test", Us, Us), window.removeEventListener("test", Us, Us)
    } catch {
        Jl = !1
    }

    function gy(e, t, o, l, u, f, m, x, S) {
        var A = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(o, A)
        } catch (W) {
            this.onError(W)
        }
    }
    var Bs = !1,
        Xo = null,
        Zo = !1,
        Xl = null,
        yy = {
            onError: function(e) {
                Bs = !0, Xo = e
            }
        };

    function vy(e, t, o, l, u, f, m, x, S) {
        Bs = !1, Xo = null, gy.apply(yy, arguments)
    }

    function xy(e, t, o, l, u, f, m, x, S) {
        if (vy.apply(this, arguments), Bs) {
            if (Bs) {
                var A = Xo;
                Bs = !1, Xo = null
            } else throw Error(s(198));
            Zo || (Zo = !0, Xl = A)
        }
    }

    function pr(e) {
        var t = e,
            o = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (o = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? o : null
    }

    function bd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function kd(e) {
        if (pr(e) !== e) throw Error(s(188))
    }

    function wy(e) {
        var t = e.alternate;
        if (!t) {
            if (t = pr(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var o = e, l = t;;) {
            var u = o.return;
            if (u === null) break;
            var f = u.alternate;
            if (f === null) {
                if (l = u.return, l !== null) {
                    o = l;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f;) {
                    if (f === o) return kd(u), e;
                    if (f === l) return kd(u), t;
                    f = f.sibling
                }
                throw Error(s(188))
            }
            if (o.return !== l.return) o = u, l = f;
            else {
                for (var m = !1, x = u.child; x;) {
                    if (x === o) {
                        m = !0, o = u, l = f;
                        break
                    }
                    if (x === l) {
                        m = !0, l = u, o = f;
                        break
                    }
                    x = x.sibling
                }
                if (!m) {
                    for (x = f.child; x;) {
                        if (x === o) {
                            m = !0, o = f, l = u;
                            break
                        }
                        if (x === l) {
                            m = !0, l = f, o = u;
                            break
                        }
                        x = x.sibling
                    }
                    if (!m) throw Error(s(189))
                }
            }
            if (o.alternate !== l) throw Error(s(190))
        }
        if (o.tag !== 3) throw Error(s(188));
        return o.stateNode.current === o ? e : t
    }

    function Sd(e) {
        return e = wy(e), e !== null ? Nd(e) : null
    }

    function Nd(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = Nd(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Ed = n.unstable_scheduleCallback,
        jd = n.unstable_cancelCallback,
        by = n.unstable_shouldYield,
        ky = n.unstable_requestPaint,
        He = n.unstable_now,
        Sy = n.unstable_getCurrentPriorityLevel,
        Zl = n.unstable_ImmediatePriority,
        Cd = n.unstable_UserBlockingPriority,
        ei = n.unstable_NormalPriority,
        Ny = n.unstable_LowPriority,
        _d = n.unstable_IdlePriority,
        ti = null,
        tn = null;

    function Ey(e) {
        if (tn && typeof tn.onCommitFiberRoot == "function") try {
            tn.onCommitFiberRoot(ti, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var Vt = Math.clz32 ? Math.clz32 : _y,
        jy = Math.log,
        Cy = Math.LN2;

    function _y(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (jy(e) / Cy | 0) | 0
    }
    var ni = 64,
        ri = 4194304;

    function $s(e) {
        switch (e & -e) {
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
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function si(e, t) {
        var o = e.pendingLanes;
        if (o === 0) return 0;
        var l = 0,
            u = e.suspendedLanes,
            f = e.pingedLanes,
            m = o & 268435455;
        if (m !== 0) {
            var x = m & ~u;
            x !== 0 ? l = $s(x) : (f &= m, f !== 0 && (l = $s(f)))
        } else m = o & ~u, m !== 0 ? l = $s(m) : f !== 0 && (l = $s(f));
        if (l === 0) return 0;
        if (t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, f = t & -t, u >= f || u === 16 && (f & 4194240) !== 0)) return t;
        if ((l & 4) !== 0 && (l |= o & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= l; 0 < t;) o = 31 - Vt(t), u = 1 << o, l |= e[o], t &= ~u;
        return l
    }

    function Ry(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ty(e, t) {
        for (var o = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f;) {
            var m = 31 - Vt(f),
                x = 1 << m,
                S = u[m];
            S === -1 ? ((x & o) === 0 || (x & l) !== 0) && (u[m] = Ry(x, t)) : S <= t && (e.expiredLanes |= x), f &= ~x
        }
    }

    function ea(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function Rd() {
        var e = ni;
        return ni <<= 1, (ni & 4194240) === 0 && (ni = 64), e
    }

    function ta(e) {
        for (var t = [], o = 0; 31 > o; o++) t.push(e);
        return t
    }

    function Ws(e, t, o) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Vt(t), e[t] = o
    }

    function Py(e, t) {
        var o = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var l = e.eventTimes;
        for (e = e.expirationTimes; 0 < o;) {
            var u = 31 - Vt(o),
                f = 1 << u;
            t[u] = 0, l[u] = -1, e[u] = -1, o &= ~f
        }
    }

    function na(e, t) {
        var o = e.entangledLanes |= t;
        for (e = e.entanglements; o;) {
            var l = 31 - Vt(o),
                u = 1 << l;
            u & t | e[l] & t && (e[l] |= t), o &= ~u
        }
    }
    var Me = 0;

    function Td(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Pd, ra, Od, Ad, Ld, sa = !1,
        oi = [],
        Ln = null,
        Mn = null,
        Fn = null,
        Vs = new Map,
        Hs = new Map,
        Dn = [],
        Oy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function Md(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Ln = null;
                break;
            case "dragenter":
            case "dragleave":
                Mn = null;
                break;
            case "mouseover":
            case "mouseout":
                Fn = null;
                break;
            case "pointerover":
            case "pointerout":
                Vs.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Hs.delete(t.pointerId)
        }
    }

    function qs(e, t, o, l, u, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: t,
            domEventName: o,
            eventSystemFlags: l,
            nativeEvent: f,
            targetContainers: [u]
        }, t !== null && (t = io(t), t !== null && ra(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e)
    }

    function Ay(e, t, o, l, u) {
        switch (t) {
            case "focusin":
                return Ln = qs(Ln, e, t, o, l, u), !0;
            case "dragenter":
                return Mn = qs(Mn, e, t, o, l, u), !0;
            case "mouseover":
                return Fn = qs(Fn, e, t, o, l, u), !0;
            case "pointerover":
                var f = u.pointerId;
                return Vs.set(f, qs(Vs.get(f) || null, e, t, o, l, u)), !0;
            case "gotpointercapture":
                return f = u.pointerId, Hs.set(f, qs(Hs.get(f) || null, e, t, o, l, u)), !0
        }
        return !1
    }

    function Fd(e) {
        var t = mr(e.target);
        if (t !== null) {
            var o = pr(t);
            if (o !== null) {
                if (t = o.tag, t === 13) {
                    if (t = bd(o), t !== null) {
                        e.blockedOn = t, Ld(e.priority, function() {
                            Od(o)
                        });
                        return
                    }
                } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function ii(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var o = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (o === null) {
                o = e.nativeEvent;
                var l = new o.constructor(o.type, o);
                Ql = l, o.target.dispatchEvent(l), Ql = null
            } else return t = io(o), t !== null && ra(t), e.blockedOn = o, !1;
            t.shift()
        }
        return !0
    }

    function Dd(e, t, o) {
        ii(e) && o.delete(t)
    }

    function Ly() {
        sa = !1, Ln !== null && ii(Ln) && (Ln = null), Mn !== null && ii(Mn) && (Mn = null), Fn !== null && ii(Fn) && (Fn = null), Vs.forEach(Dd), Hs.forEach(Dd)
    }

    function Qs(e, t) {
        e.blockedOn === t && (e.blockedOn = null, sa || (sa = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Ly)))
    }

    function Ks(e) {
        function t(u) {
            return Qs(u, e)
        }
        if (0 < oi.length) {
            Qs(oi[0], e);
            for (var o = 1; o < oi.length; o++) {
                var l = oi[o];
                l.blockedOn === e && (l.blockedOn = null)
            }
        }
        for (Ln !== null && Qs(Ln, e), Mn !== null && Qs(Mn, e), Fn !== null && Qs(Fn, e), Vs.forEach(t), Hs.forEach(t), o = 0; o < Dn.length; o++) l = Dn[o], l.blockedOn === e && (l.blockedOn = null);
        for (; 0 < Dn.length && (o = Dn[0], o.blockedOn === null);) Fd(o), o.blockedOn === null && Dn.shift()
    }
    var Hr = z.ReactCurrentBatchConfig,
        li = !0;

    function My(e, t, o, l) {
        var u = Me,
            f = Hr.transition;
        Hr.transition = null;
        try {
            Me = 1, oa(e, t, o, l)
        } finally {
            Me = u, Hr.transition = f
        }
    }

    function Fy(e, t, o, l) {
        var u = Me,
            f = Hr.transition;
        Hr.transition = null;
        try {
            Me = 4, oa(e, t, o, l)
        } finally {
            Me = u, Hr.transition = f
        }
    }

    function oa(e, t, o, l) {
        if (li) {
            var u = ia(e, t, o, l);
            if (u === null) Sa(e, t, l, ai, o), Md(e, l);
            else if (Ay(u, e, t, o, l)) l.stopPropagation();
            else if (Md(e, l), t & 4 && -1 < Oy.indexOf(e)) {
                for (; u !== null;) {
                    var f = io(u);
                    if (f !== null && Pd(f), f = ia(e, t, o, l), f === null && Sa(e, t, l, ai, o), f === u) break;
                    u = f
                }
                u !== null && l.stopPropagation()
            } else Sa(e, t, l, null, o)
        }
    }
    var ai = null;

    function ia(e, t, o, l) {
        if (ai = null, e = Kl(l), e = mr(e), e !== null)
            if (t = pr(e), t === null) e = null;
            else if (o = t.tag, o === 13) {
            if (e = bd(t), e !== null) return e;
            e = null
        } else if (o === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return ai = e, null
    }

    function Id(e) {
        switch (e) {
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
                return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Sy()) {
                    case Zl:
                        return 1;
                    case Cd:
                        return 4;
                    case ei:
                    case Ny:
                        return 16;
                    case _d:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var In = null,
        la = null,
        ui = null;

    function zd() {
        if (ui) return ui;
        var e, t = la,
            o = t.length,
            l, u = "value" in In ? In.value : In.textContent,
            f = u.length;
        for (e = 0; e < o && t[e] === u[e]; e++);
        var m = o - e;
        for (l = 1; l <= m && t[o - l] === u[f - l]; l++);
        return ui = u.slice(e, 1 < l ? 1 - l : void 0)
    }

    function ci(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function di() {
        return !0
    }

    function Ud() {
        return !1
    }

    function Pt(e) {
        function t(o, l, u, f, m) {
            this._reactName = o, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = m, this.currentTarget = null;
            for (var x in e) e.hasOwnProperty(x) && (o = e[x], this[x] = o ? o(f) : f[x]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? di : Ud, this.isPropagationStopped = Ud, this
        }
        return Y(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = di)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = di)
            },
            persist: function() {},
            isPersistent: di
        }), t
    }
    var qr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        aa = Pt(qr),
        Gs = Y({}, qr, {
            view: 0,
            detail: 0
        }),
        Dy = Pt(Gs),
        ua, ca, Ys, fi = Y({}, Gs, {
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
            getModifierState: fa,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ys && (Ys && e.type === "mousemove" ? (ua = e.screenX - Ys.screenX, ca = e.screenY - Ys.screenY) : ca = ua = 0, Ys = e), ua)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ca
            }
        }),
        Bd = Pt(fi),
        Iy = Y({}, fi, {
            dataTransfer: 0
        }),
        zy = Pt(Iy),
        Uy = Y({}, Gs, {
            relatedTarget: 0
        }),
        da = Pt(Uy),
        By = Y({}, qr, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        $y = Pt(By),
        Wy = Y({}, qr, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Vy = Pt(Wy),
        Hy = Y({}, qr, {
            data: 0
        }),
        $d = Pt(Hy),
        qy = {
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
        },
        Qy = {
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
        },
        Ky = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Gy(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ky[e]) ? !!t[e] : !1
    }

    function fa() {
        return Gy
    }
    var Yy = Y({}, Gs, {
            key: function(e) {
                if (e.key) {
                    var t = qy[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qy[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: fa,
            charCode: function(e) {
                return e.type === "keypress" ? ci(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Jy = Pt(Yy),
        Xy = Y({}, fi, {
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
        }),
        Wd = Pt(Xy),
        Zy = Y({}, Gs, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: fa
        }),
        e0 = Pt(Zy),
        t0 = Y({}, qr, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        n0 = Pt(t0),
        r0 = Y({}, fi, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        s0 = Pt(r0),
        o0 = [9, 13, 27, 32],
        ha = p && "CompositionEvent" in window,
        Js = null;
    p && "documentMode" in document && (Js = document.documentMode);
    var i0 = p && "TextEvent" in window && !Js,
        Vd = p && (!ha || Js && 8 < Js && 11 >= Js),
        Hd = " ",
        qd = !1;

    function Qd(e, t) {
        switch (e) {
            case "keyup":
                return o0.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Kd(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Qr = !1;

    function l0(e, t) {
        switch (e) {
            case "compositionend":
                return Kd(t);
            case "keypress":
                return t.which !== 32 ? null : (qd = !0, Hd);
            case "textInput":
                return e = t.data, e === Hd && qd ? null : e;
            default:
                return null
        }
    }

    function a0(e, t) {
        if (Qr) return e === "compositionend" || !ha && Qd(e, t) ? (e = zd(), ui = la = In = null, Qr = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Vd && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var u0 = {
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

    function Gd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!u0[e.type] : t === "textarea"
    }

    function Yd(e, t, o, l) {
        gd(l), t = yi(t, "onChange"), 0 < t.length && (o = new aa("onChange", "change", null, o, l), e.push({
            event: o,
            listeners: t
        }))
    }
    var Xs = null,
        Zs = null;

    function c0(e) {
        mf(e, 0)
    }

    function hi(e) {
        var t = Xr(e);
        if (hr(t)) return e
    }

    function d0(e, t) {
        if (e === "change") return t
    }
    var Jd = !1;
    if (p) {
        var pa;
        if (p) {
            var ma = "oninput" in document;
            if (!ma) {
                var Xd = document.createElement("div");
                Xd.setAttribute("oninput", "return;"), ma = typeof Xd.oninput == "function"
            }
            pa = ma
        } else pa = !1;
        Jd = pa && (!document.documentMode || 9 < document.documentMode)
    }

    function Zd() {
        Xs && (Xs.detachEvent("onpropertychange", ef), Zs = Xs = null)
    }

    function ef(e) {
        if (e.propertyName === "value" && hi(Zs)) {
            var t = [];
            Yd(t, Zs, e, Kl(e)), wd(c0, t)
        }
    }

    function f0(e, t, o) {
        e === "focusin" ? (Zd(), Xs = t, Zs = o, Xs.attachEvent("onpropertychange", ef)) : e === "focusout" && Zd()
    }

    function h0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return hi(Zs)
    }

    function p0(e, t) {
        if (e === "click") return hi(t)
    }

    function m0(e, t) {
        if (e === "input" || e === "change") return hi(t)
    }

    function g0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Ht = typeof Object.is == "function" ? Object.is : g0;

    function eo(e, t) {
        if (Ht(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var o = Object.keys(e),
            l = Object.keys(t);
        if (o.length !== l.length) return !1;
        for (l = 0; l < o.length; l++) {
            var u = o[l];
            if (!g.call(t, u) || !Ht(e[u], t[u])) return !1
        }
        return !0
    }

    function tf(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function nf(e, t) {
        var o = tf(e);
        e = 0;
        for (var l; o;) {
            if (o.nodeType === 3) {
                if (l = e + o.textContent.length, e <= t && l >= t) return {
                    node: o,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; o;) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = tf(o)
        }
    }

    function rf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function sf() {
        for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement;) {
            try {
                var o = typeof t.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o) e = t.contentWindow;
            else break;
            t = Yo(e.document)
        }
        return t
    }

    function ga(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function y0(e) {
        var t = sf(),
            o = e.focusedElem,
            l = e.selectionRange;
        if (t !== o && o && o.ownerDocument && rf(o.ownerDocument.documentElement, o)) {
            if (l !== null && ga(o)) {
                if (t = l.start, e = l.end, e === void 0 && (e = t), "selectionStart" in o) o.selectionStart = t, o.selectionEnd = Math.min(e, o.value.length);
                else if (e = (t = o.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var u = o.textContent.length,
                        f = Math.min(l.start, u);
                    l = l.end === void 0 ? f : Math.min(l.end, u), !e.extend && f > l && (u = l, l = f, f = u), u = nf(o, f);
                    var m = nf(o, l);
                    u && m && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), f > l ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)))
                }
            }
            for (t = [], e = o; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++) e = t[o], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var v0 = p && "documentMode" in document && 11 >= document.documentMode,
        Kr = null,
        ya = null,
        to = null,
        va = !1;

    function of (e, t, o) {
        var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        va || Kr == null || Kr !== Yo(l) || (l = Kr, "selectionStart" in l && ga(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), to && eo(to, l) || (to = l, l = yi(ya, "onSelect"), 0 < l.length && (t = new aa("onSelect", "select", null, t, o), e.push({
            event: t,
            listeners: l
        }), t.target = Kr)))
    }

    function pi(e, t) {
        var o = {};
        return o[e.toLowerCase()] = t.toLowerCase(), o["Webkit" + e] = "webkit" + t, o["Moz" + e] = "moz" + t, o
    }
    var Gr = {
            animationend: pi("Animation", "AnimationEnd"),
            animationiteration: pi("Animation", "AnimationIteration"),
            animationstart: pi("Animation", "AnimationStart"),
            transitionend: pi("Transition", "TransitionEnd")
        },
        xa = {},
        lf = {};
    p && (lf = document.createElement("div").style, "AnimationEvent" in window || (delete Gr.animationend.animation, delete Gr.animationiteration.animation, delete Gr.animationstart.animation), "TransitionEvent" in window || delete Gr.transitionend.transition);

    function mi(e) {
        if (xa[e]) return xa[e];
        if (!Gr[e]) return e;
        var t = Gr[e],
            o;
        for (o in t)
            if (t.hasOwnProperty(o) && o in lf) return xa[e] = t[o];
        return e
    }
    var af = mi("animationend"),
        uf = mi("animationiteration"),
        cf = mi("animationstart"),
        df = mi("transitionend"),
        ff = new Map,
        hf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function zn(e, t) {
        ff.set(e, t), d(t, [e])
    }
    for (var wa = 0; wa < hf.length; wa++) {
        var ba = hf[wa],
            x0 = ba.toLowerCase(),
            w0 = ba[0].toUpperCase() + ba.slice(1);
        zn(x0, "on" + w0)
    }
    zn(af, "onAnimationEnd"), zn(uf, "onAnimationIteration"), zn(cf, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(df, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var no = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        b0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));

    function pf(e, t, o) {
        var l = e.type || "unknown-event";
        e.currentTarget = o, xy(l, t, void 0, e), e.currentTarget = null
    }

    function mf(e, t) {
        t = (t & 4) !== 0;
        for (var o = 0; o < e.length; o++) {
            var l = e[o],
                u = l.event;
            l = l.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var m = l.length - 1; 0 <= m; m--) {
                        var x = l[m],
                            S = x.instance,
                            A = x.currentTarget;
                        if (x = x.listener, S !== f && u.isPropagationStopped()) break e;
                        pf(u, x, A), f = S
                    } else
                        for (m = 0; m < l.length; m++) {
                            if (x = l[m], S = x.instance, A = x.currentTarget, x = x.listener, S !== f && u.isPropagationStopped()) break e;
                            pf(u, x, A), f = S
                        }
            }
        }
        if (Zo) throw e = Xl, Zo = !1, Xl = null, e
    }

    function De(e, t) {
        var o = t[Ra];
        o === void 0 && (o = t[Ra] = new Set);
        var l = e + "__bubble";
        o.has(l) || (gf(t, e, 2, !1), o.add(l))
    }

    function ka(e, t, o) {
        var l = 0;
        t && (l |= 4), gf(o, e, l, t)
    }
    var gi = "_reactListening" + Math.random().toString(36).slice(2);

    function ro(e) {
        if (!e[gi]) {
            e[gi] = !0, i.forEach(function(o) {
                o !== "selectionchange" && (b0.has(o) || ka(o, !1, e), ka(o, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[gi] || (t[gi] = !0, ka("selectionchange", !1, t))
        }
    }

    function gf(e, t, o, l) {
        switch (Id(t)) {
            case 1:
                var u = My;
                break;
            case 4:
                u = Fy;
                break;
            default:
                u = oa
        }
        o = u.bind(null, t, o, e), u = void 0, !Jl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, o, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, o, !0) : u !== void 0 ? e.addEventListener(t, o, {
            passive: u
        }) : e.addEventListener(t, o, !1)
    }

    function Sa(e, t, o, l, u) {
        var f = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var m = l.tag;
            if (m === 3 || m === 4) {
                var x = l.stateNode.containerInfo;
                if (x === u || x.nodeType === 8 && x.parentNode === u) break;
                if (m === 4)
                    for (m = l.return; m !== null;) {
                        var S = m.tag;
                        if ((S === 3 || S === 4) && (S = m.stateNode.containerInfo, S === u || S.nodeType === 8 && S.parentNode === u)) return;
                        m = m.return
                    }
                for (; x !== null;) {
                    if (m = mr(x), m === null) return;
                    if (S = m.tag, S === 5 || S === 6) {
                        l = f = m;
                        continue e
                    }
                    x = x.parentNode
                }
            }
            l = l.return
        }
        wd(function() {
            var A = f,
                W = Kl(o),
                H = [];
            e: {
                var $ = ff.get(e);
                if ($ !== void 0) {
                    var J = aa,
                        te = e;
                    switch (e) {
                        case "keypress":
                            if (ci(o) === 0) break e;
                        case "keydown":
                        case "keyup":
                            J = Jy;
                            break;
                        case "focusin":
                            te = "focus", J = da;
                            break;
                        case "focusout":
                            te = "blur", J = da;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            J = da;
                            break;
                        case "click":
                            if (o.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            J = Bd;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            J = zy;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            J = e0;
                            break;
                        case af:
                        case uf:
                        case cf:
                            J = $y;
                            break;
                        case df:
                            J = n0;
                            break;
                        case "scroll":
                            J = Dy;
                            break;
                        case "wheel":
                            J = s0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            J = Vy;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            J = Wd
                    }
                    var oe = (t & 4) !== 0,
                        qe = !oe && e === "scroll",
                        P = oe ? $ !== null ? $ + "Capture" : null : $;
                    oe = [];
                    for (var j = A, O; j !== null;) {
                        O = j;
                        var Q = O.stateNode;
                        if (O.tag === 5 && Q !== null && (O = Q, P !== null && (Q = zs(j, P), Q != null && oe.push(so(j, Q, O)))), qe) break;
                        j = j.return
                    }
                    0 < oe.length && ($ = new J($, te, null, o, W), H.push({
                        event: $,
                        listeners: oe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if ($ = e === "mouseover" || e === "pointerover", J = e === "mouseout" || e === "pointerout", $ && o !== Ql && (te = o.relatedTarget || o.fromElement) && (mr(te) || te[gn])) break e;
                    if ((J || $) && ($ = W.window === W ? W : ($ = W.ownerDocument) ? $.defaultView || $.parentWindow : window, J ? (te = o.relatedTarget || o.toElement, J = A, te = te ? mr(te) : null, te !== null && (qe = pr(te), te !== qe || te.tag !== 5 && te.tag !== 6) && (te = null)) : (J = null, te = A), J !== te)) {
                        if (oe = Bd, Q = "onMouseLeave", P = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Wd, Q = "onPointerLeave", P = "onPointerEnter", j = "pointer"), qe = J == null ? $ : Xr(J), O = te == null ? $ : Xr(te), $ = new oe(Q, j + "leave", J, o, W), $.target = qe, $.relatedTarget = O, Q = null, mr(W) === A && (oe = new oe(P, j + "enter", te, o, W), oe.target = O, oe.relatedTarget = qe, Q = oe), qe = Q, J && te) t: {
                            for (oe = J, P = te, j = 0, O = oe; O; O = Yr(O)) j++;
                            for (O = 0, Q = P; Q; Q = Yr(Q)) O++;
                            for (; 0 < j - O;) oe = Yr(oe),
                            j--;
                            for (; 0 < O - j;) P = Yr(P),
                            O--;
                            for (; j--;) {
                                if (oe === P || P !== null && oe === P.alternate) break t;
                                oe = Yr(oe), P = Yr(P)
                            }
                            oe = null
                        }
                        else oe = null;
                        J !== null && yf(H, $, J, oe, !1), te !== null && qe !== null && yf(H, qe, te, oe, !0)
                    }
                }
                e: {
                    if ($ = A ? Xr(A) : window, J = $.nodeName && $.nodeName.toLowerCase(), J === "select" || J === "input" && $.type === "file") var ie = d0;
                    else if (Gd($))
                        if (Jd) ie = m0;
                        else {
                            ie = h0;
                            var fe = f0
                        }
                    else(J = $.nodeName) && J.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ie = p0);
                    if (ie && (ie = ie(e, A))) {
                        Yd(H, ie, o, W);
                        break e
                    }
                    fe && fe(e, $, A),
                    e === "focusout" && (fe = $._wrapperState) && fe.controlled && $.type === "number" && $l($, "number", $.value)
                }
                switch (fe = A ? Xr(A) : window, e) {
                    case "focusin":
                        (Gd(fe) || fe.contentEditable === "true") && (Kr = fe, ya = A, to = null);
                        break;
                    case "focusout":
                        to = ya = Kr = null;
                        break;
                    case "mousedown":
                        va = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        va = !1, of (H, o, W);
                        break;
                    case "selectionchange":
                        if (v0) break;
                    case "keydown":
                    case "keyup":
                        of (H, o, W)
                }
                var he;
                if (ha) e: {
                    switch (e) {
                        case "compositionstart":
                            var ye = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ye = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ye = "onCompositionUpdate";
                            break e
                    }
                    ye = void 0
                }
                else Qr ? Qd(e, o) && (ye = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (ye = "onCompositionStart");ye && (Vd && o.locale !== "ko" && (Qr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Qr && (he = zd()) : (In = W, la = "value" in In ? In.value : In.textContent, Qr = !0)), fe = yi(A, ye), 0 < fe.length && (ye = new $d(ye, e, null, o, W), H.push({
                    event: ye,
                    listeners: fe
                }), he ? ye.data = he : (he = Kd(o), he !== null && (ye.data = he)))),
                (he = i0 ? l0(e, o) : a0(e, o)) && (A = yi(A, "onBeforeInput"), 0 < A.length && (W = new $d("onBeforeInput", "beforeinput", null, o, W), H.push({
                    event: W,
                    listeners: A
                }), W.data = he))
            }
            mf(H, t)
        })
    }

    function so(e, t, o) {
        return {
            instance: e,
            listener: t,
            currentTarget: o
        }
    }

    function yi(e, t) {
        for (var o = t + "Capture", l = []; e !== null;) {
            var u = e,
                f = u.stateNode;
            u.tag === 5 && f !== null && (u = f, f = zs(e, o), f != null && l.unshift(so(e, f, u)), f = zs(e, t), f != null && l.push(so(e, f, u))), e = e.return
        }
        return l
    }

    function Yr(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function yf(e, t, o, l, u) {
        for (var f = t._reactName, m = []; o !== null && o !== l;) {
            var x = o,
                S = x.alternate,
                A = x.stateNode;
            if (S !== null && S === l) break;
            x.tag === 5 && A !== null && (x = A, u ? (S = zs(o, f), S != null && m.unshift(so(o, S, x))) : u || (S = zs(o, f), S != null && m.push(so(o, S, x)))), o = o.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var k0 = /\r\n?/g,
        S0 = /\u0000|\uFFFD/g;

    function vf(e) {
        return (typeof e == "string" ? e : "" + e).replace(k0, `
`).replace(S0, "")
    }

    function vi(e, t, o) {
        if (t = vf(t), vf(e) !== t && o) throw Error(s(425))
    }

    function xi() {}
    var Na = null,
        Ea = null;

    function ja(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ca = typeof setTimeout == "function" ? setTimeout : void 0,
        N0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        xf = typeof Promise == "function" ? Promise : void 0,
        E0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof xf < "u" ? function(e) {
            return xf.resolve(null).then(e).catch(j0)
        } : Ca;

    function j0(e) {
        setTimeout(function() {
            throw e
        })
    }

    function _a(e, t) {
        var o = t,
            l = 0;
        do {
            var u = o.nextSibling;
            if (e.removeChild(o), u && u.nodeType === 8)
                if (o = u.data, o === "/$") {
                    if (l === 0) {
                        e.removeChild(u), Ks(t);
                        return
                    }
                    l--
                } else o !== "$" && o !== "$?" && o !== "$!" || l++;
            o = u
        } while (o);
        Ks(t)
    }

    function Un(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function wf(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var o = e.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (t === 0) return e;
                    t--
                } else o === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Jr = Math.random().toString(36).slice(2),
        nn = "__reactFiber$" + Jr,
        oo = "__reactProps$" + Jr,
        gn = "__reactContainer$" + Jr,
        Ra = "__reactEvents$" + Jr,
        C0 = "__reactListeners$" + Jr,
        _0 = "__reactHandles$" + Jr;

    function mr(e) {
        var t = e[nn];
        if (t) return t;
        for (var o = e.parentNode; o;) {
            if (t = o[gn] || o[nn]) {
                if (o = t.alternate, t.child !== null || o !== null && o.child !== null)
                    for (e = wf(e); e !== null;) {
                        if (o = e[nn]) return o;
                        e = wf(e)
                    }
                return t
            }
            e = o, o = e.parentNode
        }
        return null
    }

    function io(e) {
        return e = e[nn] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function Xr(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function wi(e) {
        return e[oo] || null
    }
    var Ta = [],
        Zr = -1;

    function Bn(e) {
        return {
            current: e
        }
    }

    function Ie(e) {
        0 > Zr || (e.current = Ta[Zr], Ta[Zr] = null, Zr--)
    }

    function Fe(e, t) {
        Zr++, Ta[Zr] = e.current, e.current = t
    }
    var $n = {},
        ct = Bn($n),
        wt = Bn(!1),
        gr = $n;

    function es(e, t) {
        var o = e.type.contextTypes;
        if (!o) return $n;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t) return l.__reactInternalMemoizedMaskedChildContext;
        var u = {},
            f;
        for (f in o) u[f] = t[f];
        return l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u
    }

    function bt(e) {
        return e = e.childContextTypes, e != null
    }

    function bi() {
        Ie(wt), Ie(ct)
    }

    function bf(e, t, o) {
        if (ct.current !== $n) throw Error(s(168));
        Fe(ct, t), Fe(wt, o)
    }

    function kf(e, t, o) {
        var l = e.stateNode;
        if (t = t.childContextTypes, typeof l.getChildContext != "function") return o;
        l = l.getChildContext();
        for (var u in l)
            if (!(u in t)) throw Error(s(108, ve(e) || "Unknown", u));
        return Y({}, o, l)
    }

    function ki(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $n, gr = ct.current, Fe(ct, e), Fe(wt, wt.current), !0
    }

    function Sf(e, t, o) {
        var l = e.stateNode;
        if (!l) throw Error(s(169));
        o ? (e = kf(e, t, gr), l.__reactInternalMemoizedMergedChildContext = e, Ie(wt), Ie(ct), Fe(ct, e)) : Ie(wt), Fe(wt, o)
    }
    var yn = null,
        Si = !1,
        Pa = !1;

    function Nf(e) {
        yn === null ? yn = [e] : yn.push(e)
    }

    function R0(e) {
        Si = !0, Nf(e)
    }

    function Wn() {
        if (!Pa && yn !== null) {
            Pa = !0;
            var e = 0,
                t = Me;
            try {
                var o = yn;
                for (Me = 1; e < o.length; e++) {
                    var l = o[e];
                    do l = l(!0); while (l !== null)
                }
                yn = null, Si = !1
            } catch (u) {
                throw yn !== null && (yn = yn.slice(e + 1)), Ed(Zl, Wn), u
            } finally {
                Me = t, Pa = !1
            }
        }
        return null
    }
    var ts = [],
        ns = 0,
        Ni = null,
        Ei = 0,
        Mt = [],
        Ft = 0,
        yr = null,
        vn = 1,
        xn = "";

    function vr(e, t) {
        ts[ns++] = Ei, ts[ns++] = Ni, Ni = e, Ei = t
    }

    function Ef(e, t, o) {
        Mt[Ft++] = vn, Mt[Ft++] = xn, Mt[Ft++] = yr, yr = e;
        var l = vn;
        e = xn;
        var u = 32 - Vt(l) - 1;
        l &= ~(1 << u), o += 1;
        var f = 32 - Vt(t) + u;
        if (30 < f) {
            var m = u - u % 5;
            f = (l & (1 << m) - 1).toString(32), l >>= m, u -= m, vn = 1 << 32 - Vt(t) + u | o << u | l, xn = f + e
        } else vn = 1 << f | o << u | l, xn = e
    }

    function Oa(e) {
        e.return !== null && (vr(e, 1), Ef(e, 1, 0))
    }

    function Aa(e) {
        for (; e === Ni;) Ni = ts[--ns], ts[ns] = null, Ei = ts[--ns], ts[ns] = null;
        for (; e === yr;) yr = Mt[--Ft], Mt[Ft] = null, xn = Mt[--Ft], Mt[Ft] = null, vn = Mt[--Ft], Mt[Ft] = null
    }
    var Ot = null,
        At = null,
        ze = !1,
        qt = null;

    function jf(e, t) {
        var o = Ut(5, null, null, 0);
        o.elementType = "DELETED", o.stateNode = t, o.return = e, t = e.deletions, t === null ? (e.deletions = [o], e.flags |= 16) : t.push(o)
    }

    function Cf(e, t) {
        switch (e.tag) {
            case 5:
                var o = e.type;
                return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ot = e, At = Un(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ot = e, At = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (o = yr !== null ? {
                    id: vn,
                    overflow: xn
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: o,
                    retryLane: 1073741824
                }, o = Ut(18, null, null, 0), o.stateNode = t, o.return = e, e.child = o, Ot = e, At = null, !0) : !1;
            default:
                return !1
        }
    }

    function La(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function Ma(e) {
        if (ze) {
            var t = At;
            if (t) {
                var o = t;
                if (!Cf(e, t)) {
                    if (La(e)) throw Error(s(418));
                    t = Un(o.nextSibling);
                    var l = Ot;
                    t && Cf(e, t) ? jf(l, o) : (e.flags = e.flags & -4097 | 2, ze = !1, Ot = e)
                }
            } else {
                if (La(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, ze = !1, Ot = e
            }
        }
    }

    function _f(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Ot = e
    }

    function ji(e) {
        if (e !== Ot) return !1;
        if (!ze) return _f(e), ze = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ja(e.type, e.memoizedProps)), t && (t = At)) {
            if (La(e)) throw Rf(), Error(s(418));
            for (; t;) jf(e, t), t = Un(t.nextSibling)
        }
        if (_f(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var o = e.data;
                        if (o === "/$") {
                            if (t === 0) {
                                At = Un(e.nextSibling);
                                break e
                            }
                            t--
                        } else o !== "$" && o !== "$!" && o !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                At = null
            }
        } else At = Ot ? Un(e.stateNode.nextSibling) : null;
        return !0
    }

    function Rf() {
        for (var e = At; e;) e = Un(e.nextSibling)
    }

    function rs() {
        At = Ot = null, ze = !1
    }

    function Fa(e) {
        qt === null ? qt = [e] : qt.push(e)
    }
    var T0 = z.ReactCurrentBatchConfig;

    function lo(e, t, o) {
        if (e = o.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (o._owner) {
                if (o = o._owner, o) {
                    if (o.tag !== 1) throw Error(s(309));
                    var l = o.stateNode
                }
                if (!l) throw Error(s(147, e));
                var u = l,
                    f = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(m) {
                    var x = u.refs;
                    m === null ? delete x[f] : x[f] = m
                }, t._stringRef = f, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!o._owner) throw Error(s(290, e))
        }
        return e
    }

    function Ci(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function Tf(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Pf(e) {
        function t(P, j) {
            if (e) {
                var O = P.deletions;
                O === null ? (P.deletions = [j], P.flags |= 16) : O.push(j)
            }
        }

        function o(P, j) {
            if (!e) return null;
            for (; j !== null;) t(P, j), j = j.sibling;
            return null
        }

        function l(P, j) {
            for (P = new Map; j !== null;) j.key !== null ? P.set(j.key, j) : P.set(j.index, j), j = j.sibling;
            return P
        }

        function u(P, j) {
            return P = Jn(P, j), P.index = 0, P.sibling = null, P
        }

        function f(P, j, O) {
            return P.index = O, e ? (O = P.alternate, O !== null ? (O = O.index, O < j ? (P.flags |= 2, j) : O) : (P.flags |= 2, j)) : (P.flags |= 1048576, j)
        }

        function m(P) {
            return e && P.alternate === null && (P.flags |= 2), P
        }

        function x(P, j, O, Q) {
            return j === null || j.tag !== 6 ? (j = Cu(O, P.mode, Q), j.return = P, j) : (j = u(j, O), j.return = P, j)
        }

        function S(P, j, O, Q) {
            var ie = O.type;
            return ie === ge ? W(P, j, O.props.children, Q, O.key) : j !== null && (j.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === de && Tf(ie) === j.type) ? (Q = u(j, O.props), Q.ref = lo(P, j, O), Q.return = P, Q) : (Q = Ji(O.type, O.key, O.props, null, P.mode, Q), Q.ref = lo(P, j, O), Q.return = P, Q)
        }

        function A(P, j, O, Q) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== O.containerInfo || j.stateNode.implementation !== O.implementation ? (j = _u(O, P.mode, Q), j.return = P, j) : (j = u(j, O.children || []), j.return = P, j)
        }

        function W(P, j, O, Q, ie) {
            return j === null || j.tag !== 7 ? (j = jr(O, P.mode, Q, ie), j.return = P, j) : (j = u(j, O), j.return = P, j)
        }

        function H(P, j, O) {
            if (typeof j == "string" && j !== "" || typeof j == "number") return j = Cu("" + j, P.mode, O), j.return = P, j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case G:
                        return O = Ji(j.type, j.key, j.props, null, P.mode, O), O.ref = lo(P, null, j), O.return = P, O;
                    case ce:
                        return j = _u(j, P.mode, O), j.return = P, j;
                    case de:
                        var Q = j._init;
                        return H(P, Q(j._payload), O)
                }
                if (Fs(j) || ae(j)) return j = jr(j, P.mode, O, null), j.return = P, j;
                Ci(P, j)
            }
            return null
        }

        function $(P, j, O, Q) {
            var ie = j !== null ? j.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number") return ie !== null ? null : x(P, j, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case G:
                        return O.key === ie ? S(P, j, O, Q) : null;
                    case ce:
                        return O.key === ie ? A(P, j, O, Q) : null;
                    case de:
                        return ie = O._init, $(P, j, ie(O._payload), Q)
                }
                if (Fs(O) || ae(O)) return ie !== null ? null : W(P, j, O, Q, null);
                Ci(P, O)
            }
            return null
        }

        function J(P, j, O, Q, ie) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number") return P = P.get(O) || null, x(j, P, "" + Q, ie);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case G:
                        return P = P.get(Q.key === null ? O : Q.key) || null, S(j, P, Q, ie);
                    case ce:
                        return P = P.get(Q.key === null ? O : Q.key) || null, A(j, P, Q, ie);
                    case de:
                        var fe = Q._init;
                        return J(P, j, O, fe(Q._payload), ie)
                }
                if (Fs(Q) || ae(Q)) return P = P.get(O) || null, W(j, P, Q, ie, null);
                Ci(j, Q)
            }
            return null
        }

        function te(P, j, O, Q) {
            for (var ie = null, fe = null, he = j, ye = j = 0, st = null; he !== null && ye < O.length; ye++) {
                he.index > ye ? (st = he, he = null) : st = he.sibling;
                var Pe = $(P, he, O[ye], Q);
                if (Pe === null) {
                    he === null && (he = st);
                    break
                }
                e && he && Pe.alternate === null && t(P, he), j = f(Pe, j, ye), fe === null ? ie = Pe : fe.sibling = Pe, fe = Pe, he = st
            }
            if (ye === O.length) return o(P, he), ze && vr(P, ye), ie;
            if (he === null) {
                for (; ye < O.length; ye++) he = H(P, O[ye], Q), he !== null && (j = f(he, j, ye), fe === null ? ie = he : fe.sibling = he, fe = he);
                return ze && vr(P, ye), ie
            }
            for (he = l(P, he); ye < O.length; ye++) st = J(he, P, ye, O[ye], Q), st !== null && (e && st.alternate !== null && he.delete(st.key === null ? ye : st.key), j = f(st, j, ye), fe === null ? ie = st : fe.sibling = st, fe = st);
            return e && he.forEach(function(Xn) {
                return t(P, Xn)
            }), ze && vr(P, ye), ie
        }

        function oe(P, j, O, Q) {
            var ie = ae(O);
            if (typeof ie != "function") throw Error(s(150));
            if (O = ie.call(O), O == null) throw Error(s(151));
            for (var fe = ie = null, he = j, ye = j = 0, st = null, Pe = O.next(); he !== null && !Pe.done; ye++, Pe = O.next()) {
                he.index > ye ? (st = he, he = null) : st = he.sibling;
                var Xn = $(P, he, Pe.value, Q);
                if (Xn === null) {
                    he === null && (he = st);
                    break
                }
                e && he && Xn.alternate === null && t(P, he), j = f(Xn, j, ye), fe === null ? ie = Xn : fe.sibling = Xn, fe = Xn, he = st
            }
            if (Pe.done) return o(P, he), ze && vr(P, ye), ie;
            if (he === null) {
                for (; !Pe.done; ye++, Pe = O.next()) Pe = H(P, Pe.value, Q), Pe !== null && (j = f(Pe, j, ye), fe === null ? ie = Pe : fe.sibling = Pe, fe = Pe);
                return ze && vr(P, ye), ie
            }
            for (he = l(P, he); !Pe.done; ye++, Pe = O.next()) Pe = J(he, P, ye, Pe.value, Q), Pe !== null && (e && Pe.alternate !== null && he.delete(Pe.key === null ? ye : Pe.key), j = f(Pe, j, ye), fe === null ? ie = Pe : fe.sibling = Pe, fe = Pe);
            return e && he.forEach(function(uv) {
                return t(P, uv)
            }), ze && vr(P, ye), ie
        }

        function qe(P, j, O, Q) {
            if (typeof O == "object" && O !== null && O.type === ge && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case G:
                        e: {
                            for (var ie = O.key, fe = j; fe !== null;) {
                                if (fe.key === ie) {
                                    if (ie = O.type, ie === ge) {
                                        if (fe.tag === 7) {
                                            o(P, fe.sibling), j = u(fe, O.props.children), j.return = P, P = j;
                                            break e
                                        }
                                    } else if (fe.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === de && Tf(ie) === fe.type) {
                                        o(P, fe.sibling), j = u(fe, O.props), j.ref = lo(P, fe, O), j.return = P, P = j;
                                        break e
                                    }
                                    o(P, fe);
                                    break
                                } else t(P, fe);
                                fe = fe.sibling
                            }
                            O.type === ge ? (j = jr(O.props.children, P.mode, Q, O.key), j.return = P, P = j) : (Q = Ji(O.type, O.key, O.props, null, P.mode, Q), Q.ref = lo(P, j, O), Q.return = P, P = Q)
                        }
                        return m(P);
                    case ce:
                        e: {
                            for (fe = O.key; j !== null;) {
                                if (j.key === fe)
                                    if (j.tag === 4 && j.stateNode.containerInfo === O.containerInfo && j.stateNode.implementation === O.implementation) {
                                        o(P, j.sibling), j = u(j, O.children || []), j.return = P, P = j;
                                        break e
                                    } else {
                                        o(P, j);
                                        break
                                    }
                                else t(P, j);
                                j = j.sibling
                            }
                            j = _u(O, P.mode, Q),
                            j.return = P,
                            P = j
                        }
                        return m(P);
                    case de:
                        return fe = O._init, qe(P, j, fe(O._payload), Q)
                }
                if (Fs(O)) return te(P, j, O, Q);
                if (ae(O)) return oe(P, j, O, Q);
                Ci(P, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, j !== null && j.tag === 6 ? (o(P, j.sibling), j = u(j, O), j.return = P, P = j) : (o(P, j), j = Cu(O, P.mode, Q), j.return = P, P = j), m(P)) : o(P, j)
        }
        return qe
    }
    var ss = Pf(!0),
        Of = Pf(!1),
        _i = Bn(null),
        Ri = null,
        os = null,
        Da = null;

    function Ia() {
        Da = os = Ri = null
    }

    function za(e) {
        var t = _i.current;
        Ie(_i), e._currentValue = t
    }

    function Ua(e, t, o) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === o) break;
            e = e.return
        }
    }

    function is(e, t) {
        Ri = e, Da = os = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (kt = !0), e.firstContext = null)
    }

    function Dt(e) {
        var t = e._currentValue;
        if (Da !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, os === null) {
                if (Ri === null) throw Error(s(308));
                os = e, Ri.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else os = os.next = e;
        return t
    }
    var xr = null;

    function Ba(e) {
        xr === null ? xr = [e] : xr.push(e)
    }

    function Af(e, t, o, l) {
        var u = t.interleaved;
        return u === null ? (o.next = o, Ba(t)) : (o.next = u.next, u.next = o), t.interleaved = o, wn(e, l)
    }

    function wn(e, t) {
        e.lanes |= t;
        var o = e.alternate;
        for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null;) e.childLanes |= t, o = e.alternate, o !== null && (o.childLanes |= t), o = e, e = e.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var Vn = !1;

    function $a(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function Lf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function bn(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Hn(e, t, o) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Re & 2) !== 0) {
            var u = l.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, wn(e, o)
        }
        return u = l.interleaved, u === null ? (t.next = t, Ba(l)) : (t.next = u.next, u.next = t), l.interleaved = t, wn(e, o)
    }

    function Ti(e, t, o) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (o & 4194240) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, o |= l, t.lanes = o, na(e, o)
        }
    }

    function Mf(e, t) {
        var o = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, o === l)) {
            var u = null,
                f = null;
            if (o = o.firstBaseUpdate, o !== null) {
                do {
                    var m = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    f === null ? u = f = m : f = f.next = m, o = o.next
                } while (o !== null);
                f === null ? u = f = t : f = f.next = t
            } else u = f = t;
            o = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: l.shared,
                effects: l.effects
            }, e.updateQueue = o;
            return
        }
        e = o.lastBaseUpdate, e === null ? o.firstBaseUpdate = t : e.next = t, o.lastBaseUpdate = t
    }

    function Pi(e, t, o, l) {
        var u = e.updateQueue;
        Vn = !1;
        var f = u.firstBaseUpdate,
            m = u.lastBaseUpdate,
            x = u.shared.pending;
        if (x !== null) {
            u.shared.pending = null;
            var S = x,
                A = S.next;
            S.next = null, m === null ? f = A : m.next = A, m = S;
            var W = e.alternate;
            W !== null && (W = W.updateQueue, x = W.lastBaseUpdate, x !== m && (x === null ? W.firstBaseUpdate = A : x.next = A, W.lastBaseUpdate = S))
        }
        if (f !== null) {
            var H = u.baseState;
            m = 0, W = A = S = null, x = f;
            do {
                var $ = x.lane,
                    J = x.eventTime;
                if ((l & $) === $) {
                    W !== null && (W = W.next = {
                        eventTime: J,
                        lane: 0,
                        tag: x.tag,
                        payload: x.payload,
                        callback: x.callback,
                        next: null
                    });
                    e: {
                        var te = e,
                            oe = x;
                        switch ($ = t, J = o, oe.tag) {
                            case 1:
                                if (te = oe.payload, typeof te == "function") {
                                    H = te.call(J, H, $);
                                    break e
                                }
                                H = te;
                                break e;
                            case 3:
                                te.flags = te.flags & -65537 | 128;
                            case 0:
                                if (te = oe.payload, $ = typeof te == "function" ? te.call(J, H, $) : te, $ == null) break e;
                                H = Y({}, H, $);
                                break e;
                            case 2:
                                Vn = !0
                        }
                    }
                    x.callback !== null && x.lane !== 0 && (e.flags |= 64, $ = u.effects, $ === null ? u.effects = [x] : $.push(x))
                } else J = {
                    eventTime: J,
                    lane: $,
                    tag: x.tag,
                    payload: x.payload,
                    callback: x.callback,
                    next: null
                }, W === null ? (A = W = J, S = H) : W = W.next = J, m |= $;
                if (x = x.next, x === null) {
                    if (x = u.shared.pending, x === null) break;
                    $ = x, x = $.next, $.next = null, u.lastBaseUpdate = $, u.shared.pending = null
                }
            } while (!0);
            if (W === null && (S = H), u.baseState = S, u.firstBaseUpdate = A, u.lastBaseUpdate = W, t = u.shared.interleaved, t !== null) {
                u = t;
                do m |= u.lane, u = u.next; while (u !== t)
            } else f === null && (u.shared.lanes = 0);
            kr |= m, e.lanes = m, e.memoizedState = H
        }
    }

    function Ff(e, t, o) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var l = e[t],
                    u = l.callback;
                if (u !== null) {
                    if (l.callback = null, l = o, typeof u != "function") throw Error(s(191, u));
                    u.call(l)
                }
            }
    }
    var ao = {},
        rn = Bn(ao),
        uo = Bn(ao),
        co = Bn(ao);

    function wr(e) {
        if (e === ao) throw Error(s(174));
        return e
    }

    function Wa(e, t) {
        switch (Fe(co, t), Fe(uo, e), Fe(rn, ao), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Vl(t, e)
        }
        Ie(rn), Fe(rn, t)
    }

    function ls() {
        Ie(rn), Ie(uo), Ie(co)
    }

    function Df(e) {
        wr(co.current);
        var t = wr(rn.current),
            o = Vl(t, e.type);
        t !== o && (Fe(uo, e), Fe(rn, o))
    }

    function Va(e) {
        uo.current === e && (Ie(rn), Ie(uo))
    }
    var Ue = Bn(0);

    function Oi(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var o = t.memoizedState;
                if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Ha = [];

    function qa() {
        for (var e = 0; e < Ha.length; e++) Ha[e]._workInProgressVersionPrimary = null;
        Ha.length = 0
    }
    var Ai = z.ReactCurrentDispatcher,
        Qa = z.ReactCurrentBatchConfig,
        br = 0,
        Be = null,
        Je = null,
        nt = null,
        Li = !1,
        fo = !1,
        ho = 0,
        P0 = 0;

    function dt() {
        throw Error(s(321))
    }

    function Ka(e, t) {
        if (t === null) return !1;
        for (var o = 0; o < t.length && o < e.length; o++)
            if (!Ht(e[o], t[o])) return !1;
        return !0
    }

    function Ga(e, t, o, l, u, f) {
        if (br = f, Be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ai.current = e === null || e.memoizedState === null ? M0 : F0, e = o(l, u), fo) {
            f = 0;
            do {
                if (fo = !1, ho = 0, 25 <= f) throw Error(s(301));
                f += 1, nt = Je = null, t.updateQueue = null, Ai.current = D0, e = o(l, u)
            } while (fo)
        }
        if (Ai.current = Di, t = Je !== null && Je.next !== null, br = 0, nt = Je = Be = null, Li = !1, t) throw Error(s(300));
        return e
    }

    function Ya() {
        var e = ho !== 0;
        return ho = 0, e
    }

    function sn() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return nt === null ? Be.memoizedState = nt = e : nt = nt.next = e, nt
    }

    function It() {
        if (Je === null) {
            var e = Be.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Je.next;
        var t = nt === null ? Be.memoizedState : nt.next;
        if (t !== null) nt = t, Je = e;
        else {
            if (e === null) throw Error(s(310));
            Je = e, e = {
                memoizedState: Je.memoizedState,
                baseState: Je.baseState,
                baseQueue: Je.baseQueue,
                queue: Je.queue,
                next: null
            }, nt === null ? Be.memoizedState = nt = e : nt = nt.next = e
        }
        return nt
    }

    function po(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ja(e) {
        var t = It(),
            o = t.queue;
        if (o === null) throw Error(s(311));
        o.lastRenderedReducer = e;
        var l = Je,
            u = l.baseQueue,
            f = o.pending;
        if (f !== null) {
            if (u !== null) {
                var m = u.next;
                u.next = f.next, f.next = m
            }
            l.baseQueue = u = f, o.pending = null
        }
        if (u !== null) {
            f = u.next, l = l.baseState;
            var x = m = null,
                S = null,
                A = f;
            do {
                var W = A.lane;
                if ((br & W) === W) S !== null && (S = S.next = {
                    lane: 0,
                    action: A.action,
                    hasEagerState: A.hasEagerState,
                    eagerState: A.eagerState,
                    next: null
                }), l = A.hasEagerState ? A.eagerState : e(l, A.action);
                else {
                    var H = {
                        lane: W,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    };
                    S === null ? (x = S = H, m = l) : S = S.next = H, Be.lanes |= W, kr |= W
                }
                A = A.next
            } while (A !== null && A !== f);
            S === null ? m = l : S.next = x, Ht(l, t.memoizedState) || (kt = !0), t.memoizedState = l, t.baseState = m, t.baseQueue = S, o.lastRenderedState = l
        }
        if (e = o.interleaved, e !== null) {
            u = e;
            do f = u.lane, Be.lanes |= f, kr |= f, u = u.next; while (u !== e)
        } else u === null && (o.lanes = 0);
        return [t.memoizedState, o.dispatch]
    }

    function Xa(e) {
        var t = It(),
            o = t.queue;
        if (o === null) throw Error(s(311));
        o.lastRenderedReducer = e;
        var l = o.dispatch,
            u = o.pending,
            f = t.memoizedState;
        if (u !== null) {
            o.pending = null;
            var m = u = u.next;
            do f = e(f, m.action), m = m.next; while (m !== u);
            Ht(f, t.memoizedState) || (kt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), o.lastRenderedState = f
        }
        return [f, l]
    }

    function If() {}

    function zf(e, t) {
        var o = Be,
            l = It(),
            u = t(),
            f = !Ht(l.memoizedState, u);
        if (f && (l.memoizedState = u, kt = !0), l = l.queue, Za($f.bind(null, o, l, e), [e]), l.getSnapshot !== t || f || nt !== null && nt.memoizedState.tag & 1) {
            if (o.flags |= 2048, mo(9, Bf.bind(null, o, l, u, t), void 0, null), rt === null) throw Error(s(349));
            (br & 30) !== 0 || Uf(o, t, u)
        }
        return u
    }

    function Uf(e, t, o) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: o
        }, t = Be.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Be.updateQueue = t, t.stores = [e]) : (o = t.stores, o === null ? t.stores = [e] : o.push(e))
    }

    function Bf(e, t, o, l) {
        t.value = o, t.getSnapshot = l, Wf(t) && Vf(e)
    }

    function $f(e, t, o) {
        return o(function() {
            Wf(t) && Vf(e)
        })
    }

    function Wf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var o = t();
            return !Ht(e, o)
        } catch {
            return !0
        }
    }

    function Vf(e) {
        var t = wn(e, 1);
        t !== null && Yt(t, e, 1, -1)
    }

    function Hf(e) {
        var t = sn();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: po,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = L0.bind(null, Be, e), [t.memoizedState, e]
    }

    function mo(e, t, o, l) {
        return e = {
            tag: e,
            create: t,
            destroy: o,
            deps: l,
            next: null
        }, t = Be.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Be.updateQueue = t, t.lastEffect = e.next = e) : (o = t.lastEffect, o === null ? t.lastEffect = e.next = e : (l = o.next, o.next = e, e.next = l, t.lastEffect = e)), e
    }

    function qf() {
        return It().memoizedState
    }

    function Mi(e, t, o, l) {
        var u = sn();
        Be.flags |= e, u.memoizedState = mo(1 | t, o, void 0, l === void 0 ? null : l)
    }

    function Fi(e, t, o, l) {
        var u = It();
        l = l === void 0 ? null : l;
        var f = void 0;
        if (Je !== null) {
            var m = Je.memoizedState;
            if (f = m.destroy, l !== null && Ka(l, m.deps)) {
                u.memoizedState = mo(t, o, f, l);
                return
            }
        }
        Be.flags |= e, u.memoizedState = mo(1 | t, o, f, l)
    }

    function Qf(e, t) {
        return Mi(8390656, 8, e, t)
    }

    function Za(e, t) {
        return Fi(2048, 8, e, t)
    }

    function Kf(e, t) {
        return Fi(4, 2, e, t)
    }

    function Gf(e, t) {
        return Fi(4, 4, e, t)
    }

    function Yf(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Jf(e, t, o) {
        return o = o != null ? o.concat([e]) : null, Fi(4, 4, Yf.bind(null, t, e), o)
    }

    function eu() {}

    function Xf(e, t) {
        var o = It();
        t = t === void 0 ? null : t;
        var l = o.memoizedState;
        return l !== null && t !== null && Ka(t, l[1]) ? l[0] : (o.memoizedState = [e, t], e)
    }

    function Zf(e, t) {
        var o = It();
        t = t === void 0 ? null : t;
        var l = o.memoizedState;
        return l !== null && t !== null && Ka(t, l[1]) ? l[0] : (e = e(), o.memoizedState = [e, t], e)
    }

    function eh(e, t, o) {
        return (br & 21) === 0 ? (e.baseState && (e.baseState = !1, kt = !0), e.memoizedState = o) : (Ht(o, t) || (o = Rd(), Be.lanes |= o, kr |= o, e.baseState = !0), t)
    }

    function O0(e, t) {
        var o = Me;
        Me = o !== 0 && 4 > o ? o : 4, e(!0);
        var l = Qa.transition;
        Qa.transition = {};
        try {
            e(!1), t()
        } finally {
            Me = o, Qa.transition = l
        }
    }

    function th() {
        return It().memoizedState
    }

    function A0(e, t, o) {
        var l = Gn(e);
        if (o = {
                lane: l,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, nh(e)) rh(t, o);
        else if (o = Af(e, t, o, l), o !== null) {
            var u = yt();
            Yt(o, e, l, u), sh(o, t, l)
        }
    }

    function L0(e, t, o) {
        var l = Gn(e),
            u = {
                lane: l,
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (nh(e)) rh(t, u);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
                var m = t.lastRenderedState,
                    x = f(m, o);
                if (u.hasEagerState = !0, u.eagerState = x, Ht(x, m)) {
                    var S = t.interleaved;
                    S === null ? (u.next = u, Ba(t)) : (u.next = S.next, S.next = u), t.interleaved = u;
                    return
                }
            } catch {} finally {}
            o = Af(e, t, u, l), o !== null && (u = yt(), Yt(o, e, l, u), sh(o, t, l))
        }
    }

    function nh(e) {
        var t = e.alternate;
        return e === Be || t !== null && t === Be
    }

    function rh(e, t) {
        fo = Li = !0;
        var o = e.pending;
        o === null ? t.next = t : (t.next = o.next, o.next = t), e.pending = t
    }

    function sh(e, t, o) {
        if ((o & 4194240) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, o |= l, t.lanes = o, na(e, o)
        }
    }
    var Di = {
            readContext: Dt,
            useCallback: dt,
            useContext: dt,
            useEffect: dt,
            useImperativeHandle: dt,
            useInsertionEffect: dt,
            useLayoutEffect: dt,
            useMemo: dt,
            useReducer: dt,
            useRef: dt,
            useState: dt,
            useDebugValue: dt,
            useDeferredValue: dt,
            useTransition: dt,
            useMutableSource: dt,
            useSyncExternalStore: dt,
            useId: dt,
            unstable_isNewReconciler: !1
        },
        M0 = {
            readContext: Dt,
            useCallback: function(e, t) {
                return sn().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Dt,
            useEffect: Qf,
            useImperativeHandle: function(e, t, o) {
                return o = o != null ? o.concat([e]) : null, Mi(4194308, 4, Yf.bind(null, t, e), o)
            },
            useLayoutEffect: function(e, t) {
                return Mi(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return Mi(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var o = sn();
                return t = t === void 0 ? null : t, e = e(), o.memoizedState = [e, t], e
            },
            useReducer: function(e, t, o) {
                var l = sn();
                return t = o !== void 0 ? o(t) : t, l.memoizedState = l.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, l.queue = e, e = e.dispatch = A0.bind(null, Be, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = sn();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: Hf,
            useDebugValue: eu,
            useDeferredValue: function(e) {
                return sn().memoizedState = e
            },
            useTransition: function() {
                var e = Hf(!1),
                    t = e[0];
                return e = O0.bind(null, e[1]), sn().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, o) {
                var l = Be,
                    u = sn();
                if (ze) {
                    if (o === void 0) throw Error(s(407));
                    o = o()
                } else {
                    if (o = t(), rt === null) throw Error(s(349));
                    (br & 30) !== 0 || Uf(l, t, o)
                }
                u.memoizedState = o;
                var f = {
                    value: o,
                    getSnapshot: t
                };
                return u.queue = f, Qf($f.bind(null, l, f, e), [e]), l.flags |= 2048, mo(9, Bf.bind(null, l, f, o, t), void 0, null), o
            },
            useId: function() {
                var e = sn(),
                    t = rt.identifierPrefix;
                if (ze) {
                    var o = xn,
                        l = vn;
                    o = (l & ~(1 << 32 - Vt(l) - 1)).toString(32) + o, t = ":" + t + "R" + o, o = ho++, 0 < o && (t += "H" + o.toString(32)), t += ":"
                } else o = P0++, t = ":" + t + "r" + o.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        F0 = {
            readContext: Dt,
            useCallback: Xf,
            useContext: Dt,
            useEffect: Za,
            useImperativeHandle: Jf,
            useInsertionEffect: Kf,
            useLayoutEffect: Gf,
            useMemo: Zf,
            useReducer: Ja,
            useRef: qf,
            useState: function() {
                return Ja(po)
            },
            useDebugValue: eu,
            useDeferredValue: function(e) {
                var t = It();
                return eh(t, Je.memoizedState, e)
            },
            useTransition: function() {
                var e = Ja(po)[0],
                    t = It().memoizedState;
                return [e, t]
            },
            useMutableSource: If,
            useSyncExternalStore: zf,
            useId: th,
            unstable_isNewReconciler: !1
        },
        D0 = {
            readContext: Dt,
            useCallback: Xf,
            useContext: Dt,
            useEffect: Za,
            useImperativeHandle: Jf,
            useInsertionEffect: Kf,
            useLayoutEffect: Gf,
            useMemo: Zf,
            useReducer: Xa,
            useRef: qf,
            useState: function() {
                return Xa(po)
            },
            useDebugValue: eu,
            useDeferredValue: function(e) {
                var t = It();
                return Je === null ? t.memoizedState = e : eh(t, Je.memoizedState, e)
            },
            useTransition: function() {
                var e = Xa(po)[0],
                    t = It().memoizedState;
                return [e, t]
            },
            useMutableSource: If,
            useSyncExternalStore: zf,
            useId: th,
            unstable_isNewReconciler: !1
        };

    function Qt(e, t) {
        if (e && e.defaultProps) {
            t = Y({}, t), e = e.defaultProps;
            for (var o in e) t[o] === void 0 && (t[o] = e[o]);
            return t
        }
        return t
    }

    function tu(e, t, o, l) {
        t = e.memoizedState, o = o(l, t), o = o == null ? t : Y({}, t, o), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o)
    }
    var Ii = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? pr(e) === e : !1
        },
        enqueueSetState: function(e, t, o) {
            e = e._reactInternals;
            var l = yt(),
                u = Gn(e),
                f = bn(l, u);
            f.payload = t, o != null && (f.callback = o), t = Hn(e, f, u), t !== null && (Yt(t, e, u, l), Ti(t, e, u))
        },
        enqueueReplaceState: function(e, t, o) {
            e = e._reactInternals;
            var l = yt(),
                u = Gn(e),
                f = bn(l, u);
            f.tag = 1, f.payload = t, o != null && (f.callback = o), t = Hn(e, f, u), t !== null && (Yt(t, e, u, l), Ti(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var o = yt(),
                l = Gn(e),
                u = bn(o, l);
            u.tag = 2, t != null && (u.callback = t), t = Hn(e, u, l), t !== null && (Yt(t, e, l, o), Ti(t, e, l))
        }
    };

    function oh(e, t, o, l, u, f, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, m) : t.prototype && t.prototype.isPureReactComponent ? !eo(o, l) || !eo(u, f) : !0
    }

    function ih(e, t, o) {
        var l = !1,
            u = $n,
            f = t.contextType;
        return typeof f == "object" && f !== null ? f = Dt(f) : (u = bt(t) ? gr : ct.current, l = t.contextTypes, f = (l = l != null) ? es(e, u) : $n), t = new t(o, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ii, e.stateNode = t, t._reactInternals = e, l && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = f), t
    }

    function lh(e, t, o, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, l), t.state !== e && Ii.enqueueReplaceState(t, t.state, null)
    }

    function nu(e, t, o, l) {
        var u = e.stateNode;
        u.props = o, u.state = e.memoizedState, u.refs = {}, $a(e);
        var f = t.contextType;
        typeof f == "object" && f !== null ? u.context = Dt(f) : (f = bt(t) ? gr : ct.current, u.context = es(e, f)), u.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (tu(e, t, f, o), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Ii.enqueueReplaceState(u, u.state, null), Pi(e, o, u, l), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function as(e, t) {
        try {
            var o = "",
                l = t;
            do o += be(l), l = l.return; while (l);
            var u = o
        } catch (f) {
            u = `
Error generating stack: ` + f.message + `
` + f.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }

    function ru(e, t, o) {
        return {
            value: e,
            source: null,
            stack: o ? ? null,
            digest: t ? ? null
        }
    }

    function su(e, t) {
        try {
            console.error(t.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var I0 = typeof WeakMap == "function" ? WeakMap : Map;

    function ah(e, t, o) {
        o = bn(-1, o), o.tag = 3, o.payload = {
            element: null
        };
        var l = t.value;
        return o.callback = function() {
            Hi || (Hi = !0, xu = l), su(e, t)
        }, o
    }

    function uh(e, t, o) {
        o = bn(-1, o), o.tag = 3;
        var l = e.type.getDerivedStateFromError;
        if (typeof l == "function") {
            var u = t.value;
            o.payload = function() {
                return l(u)
            }, o.callback = function() {
                su(e, t)
            }
        }
        var f = e.stateNode;
        return f !== null && typeof f.componentDidCatch == "function" && (o.callback = function() {
            su(e, t), typeof l != "function" && (Qn === null ? Qn = new Set([this]) : Qn.add(this));
            var m = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: m !== null ? m : ""
            })
        }), o
    }

    function ch(e, t, o) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new I0;
            var u = new Set;
            l.set(t, u)
        } else u = l.get(t), u === void 0 && (u = new Set, l.set(t, u));
        u.has(o) || (u.add(o), e = X0.bind(null, e, t, o), t.then(e, e))
    }

    function dh(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function fh(e, t, o, l, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = bn(-1, 1), t.tag = 2, Hn(o, t, 1))), o.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e)
    }
    var z0 = z.ReactCurrentOwner,
        kt = !1;

    function gt(e, t, o, l) {
        t.child = e === null ? Of(t, null, o, l) : ss(t, e.child, o, l)
    }

    function hh(e, t, o, l, u) {
        o = o.render;
        var f = t.ref;
        return is(t, u), l = Ga(e, t, o, l, f, u), o = Ya(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, kn(e, t, u)) : (ze && o && Oa(t), t.flags |= 1, gt(e, t, l, u), t.child)
    }

    function ph(e, t, o, l, u) {
        if (e === null) {
            var f = o.type;
            return typeof f == "function" && !ju(f) && f.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15, t.type = f, mh(e, t, f, l, u)) : (e = Ji(o.type, null, l, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (f = e.child, (e.lanes & u) === 0) {
            var m = f.memoizedProps;
            if (o = o.compare, o = o !== null ? o : eo, o(m, l) && e.ref === t.ref) return kn(e, t, u)
        }
        return t.flags |= 1, e = Jn(f, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function mh(e, t, o, l, u) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (eo(f, l) && e.ref === t.ref)
                if (kt = !1, t.pendingProps = l = f, (e.lanes & u) !== 0)(e.flags & 131072) !== 0 && (kt = !0);
                else return t.lanes = e.lanes, kn(e, t, u)
        }
        return ou(e, t, o, l, u)
    }

    function gh(e, t, o) {
        var l = t.pendingProps,
            u = l.children,
            f = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden")
            if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, Fe(cs, Lt), Lt |= o;
            else {
                if ((o & 1073741824) === 0) return e = f !== null ? f.baseLanes | o : o, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, Fe(cs, Lt), Lt |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, l = f !== null ? f.baseLanes : o, Fe(cs, Lt), Lt |= l
            }
        else f !== null ? (l = f.baseLanes | o, t.memoizedState = null) : l = o, Fe(cs, Lt), Lt |= l;
        return gt(e, t, u, o), t.child
    }

    function yh(e, t) {
        var o = t.ref;
        (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512, t.flags |= 2097152)
    }

    function ou(e, t, o, l, u) {
        var f = bt(o) ? gr : ct.current;
        return f = es(t, f), is(t, u), o = Ga(e, t, o, l, f, u), l = Ya(), e !== null && !kt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, kn(e, t, u)) : (ze && l && Oa(t), t.flags |= 1, gt(e, t, o, u), t.child)
    }

    function vh(e, t, o, l, u) {
        if (bt(o)) {
            var f = !0;
            ki(t)
        } else f = !1;
        if (is(t, u), t.stateNode === null) Ui(e, t), ih(t, o, l), nu(t, o, l, u), l = !0;
        else if (e === null) {
            var m = t.stateNode,
                x = t.memoizedProps;
            m.props = x;
            var S = m.context,
                A = o.contextType;
            typeof A == "object" && A !== null ? A = Dt(A) : (A = bt(o) ? gr : ct.current, A = es(t, A));
            var W = o.getDerivedStateFromProps,
                H = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            H || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== l || S !== A) && lh(t, m, l, A), Vn = !1;
            var $ = t.memoizedState;
            m.state = $, Pi(t, l, m, u), S = t.memoizedState, x !== l || $ !== S || wt.current || Vn ? (typeof W == "function" && (tu(t, o, W, l), S = t.memoizedState), (x = Vn || oh(t, o, x, l, $, S, A)) ? (H || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = S), m.props = l, m.state = S, m.context = A, l = x) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            m = t.stateNode, Lf(e, t), x = t.memoizedProps, A = t.type === t.elementType ? x : Qt(t.type, x), m.props = A, H = t.pendingProps, $ = m.context, S = o.contextType, typeof S == "object" && S !== null ? S = Dt(S) : (S = bt(o) ? gr : ct.current, S = es(t, S));
            var J = o.getDerivedStateFromProps;
            (W = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== H || $ !== S) && lh(t, m, l, S), Vn = !1, $ = t.memoizedState, m.state = $, Pi(t, l, m, u);
            var te = t.memoizedState;
            x !== H || $ !== te || wt.current || Vn ? (typeof J == "function" && (tu(t, o, J, l), te = t.memoizedState), (A = Vn || oh(t, o, A, l, $, te, S) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(l, te, S), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(l, te, S)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = te), m.props = l, m.state = te, m.context = S, l = A) : (typeof m.componentDidUpdate != "function" || x === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return iu(e, t, o, l, f, u)
    }

    function iu(e, t, o, l, u, f) {
        yh(e, t);
        var m = (t.flags & 128) !== 0;
        if (!l && !m) return u && Sf(t, o, !1), kn(e, t, f);
        l = t.stateNode, z0.current = t;
        var x = m && typeof o.getDerivedStateFromError != "function" ? null : l.render();
        return t.flags |= 1, e !== null && m ? (t.child = ss(t, e.child, null, f), t.child = ss(t, null, x, f)) : gt(e, t, x, f), t.memoizedState = l.state, u && Sf(t, o, !0), t.child
    }

    function xh(e) {
        var t = e.stateNode;
        t.pendingContext ? bf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bf(e, t.context, !1), Wa(e, t.containerInfo)
    }

    function wh(e, t, o, l, u) {
        return rs(), Fa(u), t.flags |= 256, gt(e, t, o, l), t.child
    }
    var lu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function au(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function bh(e, t, o) {
        var l = t.pendingProps,
            u = Ue.current,
            f = !1,
            m = (t.flags & 128) !== 0,
            x;
        if ((x = m) || (x = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), x ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), Fe(Ue, u & 1), e === null) return Ma(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = l.children, e = l.fallback, f ? (l = t.mode, f = t.child, m = {
            mode: "hidden",
            children: m
        }, (l & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = m) : f = Xi(m, l, 0, null), e = jr(e, l, o, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = au(o), t.memoizedState = lu, e) : uu(t, m));
        if (u = e.memoizedState, u !== null && (x = u.dehydrated, x !== null)) return U0(e, t, m, l, x, u, o);
        if (f) {
            f = l.fallback, m = t.mode, u = e.child, x = u.sibling;
            var S = {
                mode: "hidden",
                children: l.children
            };
            return (m & 1) === 0 && t.child !== u ? (l = t.child, l.childLanes = 0, l.pendingProps = S, t.deletions = null) : (l = Jn(u, S), l.subtreeFlags = u.subtreeFlags & 14680064), x !== null ? f = Jn(x, f) : (f = jr(f, m, o, null), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, l = f, f = t.child, m = e.child.memoizedState, m = m === null ? au(o) : {
                baseLanes: m.baseLanes | o,
                cachePool: null,
                transitions: m.transitions
            }, f.memoizedState = m, f.childLanes = e.childLanes & ~o, t.memoizedState = lu, l
        }
        return f = e.child, e = f.sibling, l = Jn(f, {
            mode: "visible",
            children: l.children
        }), (t.mode & 1) === 0 && (l.lanes = o), l.return = t, l.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = l, t.memoizedState = null, l
    }

    function uu(e, t) {
        return t = Xi({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function zi(e, t, o, l) {
        return l !== null && Fa(l), ss(t, e.child, null, o), e = uu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function U0(e, t, o, l, u, f, m) {
        if (o) return t.flags & 256 ? (t.flags &= -257, l = ru(Error(s(422))), zi(e, t, m, l)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = l.fallback, u = t.mode, l = Xi({
            mode: "visible",
            children: l.children
        }, u, 0, null), f = jr(f, u, m, null), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, (t.mode & 1) !== 0 && ss(t, e.child, null, m), t.child.memoizedState = au(m), t.memoizedState = lu, f);
        if ((t.mode & 1) === 0) return zi(e, t, m, null);
        if (u.data === "$!") {
            if (l = u.nextSibling && u.nextSibling.dataset, l) var x = l.dgst;
            return l = x, f = Error(s(419)), l = ru(f, l, void 0), zi(e, t, m, l)
        }
        if (x = (m & e.childLanes) !== 0, kt || x) {
            if (l = rt, l !== null) {
                switch (m & -m) {
                    case 4:
                        u = 2;
                        break;
                    case 16:
                        u = 8;
                        break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        u = 32;
                        break;
                    case 536870912:
                        u = 268435456;
                        break;
                    default:
                        u = 0
                }
                u = (u & (l.suspendedLanes | m)) !== 0 ? 0 : u, u !== 0 && u !== f.retryLane && (f.retryLane = u, wn(e, u), Yt(l, e, u, -1))
            }
            return Eu(), l = ru(Error(s(421))), zi(e, t, m, l)
        }
        return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Z0.bind(null, e), u._reactRetry = t, null) : (e = f.treeContext, At = Un(u.nextSibling), Ot = t, ze = !0, qt = null, e !== null && (Mt[Ft++] = vn, Mt[Ft++] = xn, Mt[Ft++] = yr, vn = e.id, xn = e.overflow, yr = t), t = uu(t, l.children), t.flags |= 4096, t)
    }

    function kh(e, t, o) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), Ua(e.return, t, o)
    }

    function cu(e, t, o, l, u) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: o,
            tailMode: u
        } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = l, f.tail = o, f.tailMode = u)
    }

    function Sh(e, t, o) {
        var l = t.pendingProps,
            u = l.revealOrder,
            f = l.tail;
        if (gt(e, t, l.children, o), l = Ue.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && kh(e, o, t);
                else if (e.tag === 19) kh(e, o, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        if (Fe(Ue, l), (t.mode & 1) === 0) t.memoizedState = null;
        else switch (u) {
            case "forwards":
                for (o = t.child, u = null; o !== null;) e = o.alternate, e !== null && Oi(e) === null && (u = o), o = o.sibling;
                o = u, o === null ? (u = t.child, t.child = null) : (u = o.sibling, o.sibling = null), cu(t, !1, u, o, f);
                break;
            case "backwards":
                for (o = null, u = t.child, t.child = null; u !== null;) {
                    if (e = u.alternate, e !== null && Oi(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling, u.sibling = o, o = u, u = e
                }
                cu(t, !0, o, null, f);
                break;
            case "together":
                cu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Ui(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function kn(e, t, o) {
        if (e !== null && (t.dependencies = e.dependencies), kr |= t.lanes, (o & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, o = Jn(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null;) e = e.sibling, o = o.sibling = Jn(e, e.pendingProps), o.return = t;
            o.sibling = null
        }
        return t.child
    }

    function B0(e, t, o) {
        switch (t.tag) {
            case 3:
                xh(t), rs();
                break;
            case 5:
                Df(t);
                break;
            case 1:
                bt(t.type) && ki(t);
                break;
            case 4:
                Wa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var l = t.type._context,
                    u = t.memoizedProps.value;
                Fe(_i, l._currentValue), l._currentValue = u;
                break;
            case 13:
                if (l = t.memoizedState, l !== null) return l.dehydrated !== null ? (Fe(Ue, Ue.current & 1), t.flags |= 128, null) : (o & t.child.childLanes) !== 0 ? bh(e, t, o) : (Fe(Ue, Ue.current & 1), e = kn(e, t, o), e !== null ? e.sibling : null);
                Fe(Ue, Ue.current & 1);
                break;
            case 19:
                if (l = (o & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (l) return Sh(e, t, o);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Fe(Ue, Ue.current), l) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, gh(e, t, o)
        }
        return kn(e, t, o)
    }
    var Nh, du, Eh, jh;
    Nh = function(e, t) {
        for (var o = t.child; o !== null;) {
            if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === t) break;
            for (; o.sibling === null;) {
                if (o.return === null || o.return === t) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }, du = function() {}, Eh = function(e, t, o, l) {
        var u = e.memoizedProps;
        if (u !== l) {
            e = t.stateNode, wr(rn.current);
            var f = null;
            switch (o) {
                case "input":
                    u = Ul(e, u), l = Ul(e, l), f = [];
                    break;
                case "select":
                    u = Y({}, u, {
                        value: void 0
                    }), l = Y({}, l, {
                        value: void 0
                    }), f = [];
                    break;
                case "textarea":
                    u = Wl(e, u), l = Wl(e, l), f = [];
                    break;
                default:
                    typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = xi)
            }
            Hl(o, l);
            var m;
            o = null;
            for (A in u)
                if (!l.hasOwnProperty(A) && u.hasOwnProperty(A) && u[A] != null)
                    if (A === "style") {
                        var x = u[A];
                        for (m in x) x.hasOwnProperty(m) && (o || (o = {}), o[m] = "")
                    } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (a.hasOwnProperty(A) ? f || (f = []) : (f = f || []).push(A, null));
            for (A in l) {
                var S = l[A];
                if (x = u != null ? u[A] : void 0, l.hasOwnProperty(A) && S !== x && (S != null || x != null))
                    if (A === "style")
                        if (x) {
                            for (m in x) !x.hasOwnProperty(m) || S && S.hasOwnProperty(m) || (o || (o = {}), o[m] = "");
                            for (m in S) S.hasOwnProperty(m) && x[m] !== S[m] && (o || (o = {}), o[m] = S[m])
                        } else o || (f || (f = []), f.push(A, o)), o = S;
                else A === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, x = x ? x.__html : void 0, S != null && x !== S && (f = f || []).push(A, S)) : A === "children" ? typeof S != "string" && typeof S != "number" || (f = f || []).push(A, "" + S) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (a.hasOwnProperty(A) ? (S != null && A === "onScroll" && De("scroll", e), f || x === S || (f = [])) : (f = f || []).push(A, S))
            }
            o && (f = f || []).push("style", o);
            var A = f;
            (t.updateQueue = A) && (t.flags |= 4)
        }
    }, jh = function(e, t, o, l) {
        o !== l && (t.flags |= 4)
    };

    function go(e, t) {
        if (!ze) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var o = null; t !== null;) t.alternate !== null && (o = t), t = t.sibling;
                o === null ? e.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = e.tail;
                for (var l = null; o !== null;) o.alternate !== null && (l = o), o = o.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function ft(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            o = 0,
            l = 0;
        if (t)
            for (var u = e.child; u !== null;) o |= u.lanes | u.childLanes, l |= u.subtreeFlags & 14680064, l |= u.flags & 14680064, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;) o |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= l, e.childLanes = o, t
    }

    function $0(e, t, o) {
        var l = t.pendingProps;
        switch (Aa(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return ft(t), null;
            case 1:
                return bt(t.type) && bi(), ft(t), null;
            case 3:
                return l = t.stateNode, ls(), Ie(wt), Ie(ct), qa(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ji(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qt !== null && (ku(qt), qt = null))), du(e, t), ft(t), null;
            case 5:
                Va(t);
                var u = wr(co.current);
                if (o = t.type, e !== null && t.stateNode != null) Eh(e, t, o, l, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(s(166));
                        return ft(t), null
                    }
                    if (e = wr(rn.current), ji(t)) {
                        l = t.stateNode, o = t.type;
                        var f = t.memoizedProps;
                        switch (l[nn] = t, l[oo] = f, e = (t.mode & 1) !== 0, o) {
                            case "dialog":
                                De("cancel", l), De("close", l);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                De("load", l);
                                break;
                            case "video":
                            case "audio":
                                for (u = 0; u < no.length; u++) De(no[u], l);
                                break;
                            case "source":
                                De("error", l);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                De("error", l), De("load", l);
                                break;
                            case "details":
                                De("toggle", l);
                                break;
                            case "input":
                                od(l, f), De("invalid", l);
                                break;
                            case "select":
                                l._wrapperState = {
                                    wasMultiple: !!f.multiple
                                }, De("invalid", l);
                                break;
                            case "textarea":
                                ad(l, f), De("invalid", l)
                        }
                        Hl(o, f), u = null;
                        for (var m in f)
                            if (f.hasOwnProperty(m)) {
                                var x = f[m];
                                m === "children" ? typeof x == "string" ? l.textContent !== x && (f.suppressHydrationWarning !== !0 && vi(l.textContent, x, e), u = ["children", x]) : typeof x == "number" && l.textContent !== "" + x && (f.suppressHydrationWarning !== !0 && vi(l.textContent, x, e), u = ["children", "" + x]) : a.hasOwnProperty(m) && x != null && m === "onScroll" && De("scroll", l)
                            }
                        switch (o) {
                            case "input":
                                An(l), ld(l, f, !0);
                                break;
                            case "textarea":
                                An(l), cd(l);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof f.onClick == "function" && (l.onclick = xi)
                        }
                        l = u, t.updateQueue = l, l !== null && (t.flags |= 4)
                    } else {
                        m = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dd(o)), e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = m.createElement(o, {
                            is: l.is
                        }) : (e = m.createElement(o), o === "select" && (m = e, l.multiple ? m.multiple = !0 : l.size && (m.size = l.size))) : e = m.createElementNS(e, o), e[nn] = t, e[oo] = l, Nh(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (m = ql(o, l), o) {
                                case "dialog":
                                    De("cancel", e), De("close", e), u = l;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    De("load", e), u = l;
                                    break;
                                case "video":
                                case "audio":
                                    for (u = 0; u < no.length; u++) De(no[u], e);
                                    u = l;
                                    break;
                                case "source":
                                    De("error", e), u = l;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    De("error", e), De("load", e), u = l;
                                    break;
                                case "details":
                                    De("toggle", e), u = l;
                                    break;
                                case "input":
                                    od(e, l), u = Ul(e, l), De("invalid", e);
                                    break;
                                case "option":
                                    u = l;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!l.multiple
                                    }, u = Y({}, l, {
                                        value: void 0
                                    }), De("invalid", e);
                                    break;
                                case "textarea":
                                    ad(e, l), u = Wl(e, l), De("invalid", e);
                                    break;
                                default:
                                    u = l
                            }
                            Hl(o, u),
                            x = u;
                            for (f in x)
                                if (x.hasOwnProperty(f)) {
                                    var S = x[f];
                                    f === "style" ? pd(e, S) : f === "dangerouslySetInnerHTML" ? (S = S ? S.__html : void 0, S != null && fd(e, S)) : f === "children" ? typeof S == "string" ? (o !== "textarea" || S !== "") && Ds(e, S) : typeof S == "number" && Ds(e, "" + S) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (a.hasOwnProperty(f) ? S != null && f === "onScroll" && De("scroll", e) : S != null && I(e, f, S, m))
                                }
                            switch (o) {
                                case "input":
                                    An(e), ld(e, l, !1);
                                    break;
                                case "textarea":
                                    An(e), cd(e);
                                    break;
                                case "option":
                                    l.value != null && e.setAttribute("value", "" + Te(l.value));
                                    break;
                                case "select":
                                    e.multiple = !!l.multiple, f = l.value, f != null ? $r(e, !!l.multiple, f, !1) : l.defaultValue != null && $r(e, !!l.multiple, l.defaultValue, !0);
                                    break;
                                default:
                                    typeof u.onClick == "function" && (e.onclick = xi)
                            }
                            switch (o) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l = !!l.autoFocus;
                                    break e;
                                case "img":
                                    l = !0;
                                    break e;
                                default:
                                    l = !1
                            }
                        }
                        l && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return ft(t), null;
            case 6:
                if (e && t.stateNode != null) jh(e, t, e.memoizedProps, l);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
                    if (o = wr(co.current), wr(rn.current), ji(t)) {
                        if (l = t.stateNode, o = t.memoizedProps, l[nn] = t, (f = l.nodeValue !== o) && (e = Ot, e !== null)) switch (e.tag) {
                            case 3:
                                vi(l.nodeValue, o, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && vi(l.nodeValue, o, (e.mode & 1) !== 0)
                        }
                        f && (t.flags |= 4)
                    } else l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l), l[nn] = t, t.stateNode = l
                }
                return ft(t), null;
            case 13:
                if (Ie(Ue), l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ze && At !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Rf(), rs(), t.flags |= 98560, f = !1;
                    else if (f = ji(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!f) throw Error(s(318));
                            if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(s(317));
                            f[nn] = t
                        } else rs(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        ft(t), f = !1
                    } else qt !== null && (ku(qt), qt = null), f = !0;
                    if (!f) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = o, t) : (l = l !== null, l !== (e !== null && e.memoizedState !== null) && l && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? Xe === 0 && (Xe = 3) : Eu())), t.updateQueue !== null && (t.flags |= 4), ft(t), null);
            case 4:
                return ls(), du(e, t), e === null && ro(t.stateNode.containerInfo), ft(t), null;
            case 10:
                return za(t.type._context), ft(t), null;
            case 17:
                return bt(t.type) && bi(), ft(t), null;
            case 19:
                if (Ie(Ue), f = t.memoizedState, f === null) return ft(t), null;
                if (l = (t.flags & 128) !== 0, m = f.rendering, m === null)
                    if (l) go(f, !1);
                    else {
                        if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (m = Oi(e), m !== null) {
                                    for (t.flags |= 128, go(f, !1), l = m.updateQueue, l !== null && (t.updateQueue = l, t.flags |= 4), t.subtreeFlags = 0, l = o, o = t.child; o !== null;) f = o, e = l, f.flags &= 14680066, m = f.alternate, m === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = m.childLanes, f.lanes = m.lanes, f.child = m.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = m.memoizedProps, f.memoizedState = m.memoizedState, f.updateQueue = m.updateQueue, f.type = m.type, e = m.dependencies, f.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), o = o.sibling;
                                    return Fe(Ue, Ue.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        f.tail !== null && He() > ds && (t.flags |= 128, l = !0, go(f, !1), t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (e = Oi(m), e !== null) {
                            if (t.flags |= 128, l = !0, o = e.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), go(f, !0), f.tail === null && f.tailMode === "hidden" && !m.alternate && !ze) return ft(t), null
                        } else 2 * He() - f.renderingStartTime > ds && o !== 1073741824 && (t.flags |= 128, l = !0, go(f, !1), t.lanes = 4194304);
                    f.isBackwards ? (m.sibling = t.child, t.child = m) : (o = f.last, o !== null ? o.sibling = m : t.child = m, f.last = m)
                }
                return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = He(), t.sibling = null, o = Ue.current, Fe(Ue, l ? o & 1 | 2 : o & 1), t) : (ft(t), null);
            case 22:
            case 23:
                return Nu(), l = t.memoizedState !== null, e !== null && e.memoizedState !== null !== l && (t.flags |= 8192), l && (t.mode & 1) !== 0 ? (Lt & 1073741824) !== 0 && (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function W0(e, t) {
        switch (Aa(t), t.tag) {
            case 1:
                return bt(t.type) && bi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ls(), Ie(wt), Ie(ct), qa(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Va(t), null;
            case 13:
                if (Ie(Ue), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    rs()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Ie(Ue), null;
            case 4:
                return ls(), null;
            case 10:
                return za(t.type._context), null;
            case 22:
            case 23:
                return Nu(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Bi = !1,
        ht = !1,
        V0 = typeof WeakSet == "function" ? WeakSet : Set,
        ee = null;

    function us(e, t) {
        var o = e.ref;
        if (o !== null)
            if (typeof o == "function") try {
                o(null)
            } catch (l) {
                We(e, t, l)
            } else o.current = null
    }

    function fu(e, t, o) {
        try {
            o()
        } catch (l) {
            We(e, t, l)
        }
    }
    var Ch = !1;

    function H0(e, t) {
        if (Na = li, e = sf(), ga(e)) {
            if ("selectionStart" in e) var o = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                o = (o = e.ownerDocument) && o.defaultView || window;
                var l = o.getSelection && o.getSelection();
                if (l && l.rangeCount !== 0) {
                    o = l.anchorNode;
                    var u = l.anchorOffset,
                        f = l.focusNode;
                    l = l.focusOffset;
                    try {
                        o.nodeType, f.nodeType
                    } catch {
                        o = null;
                        break e
                    }
                    var m = 0,
                        x = -1,
                        S = -1,
                        A = 0,
                        W = 0,
                        H = e,
                        $ = null;
                    t: for (;;) {
                        for (var J; H !== o || u !== 0 && H.nodeType !== 3 || (x = m + u), H !== f || l !== 0 && H.nodeType !== 3 || (S = m + l), H.nodeType === 3 && (m += H.nodeValue.length), (J = H.firstChild) !== null;) $ = H, H = J;
                        for (;;) {
                            if (H === e) break t;
                            if ($ === o && ++A === u && (x = m), $ === f && ++W === l && (S = m), (J = H.nextSibling) !== null) break;
                            H = $, $ = H.parentNode
                        }
                        H = J
                    }
                    o = x === -1 || S === -1 ? null : {
                        start: x,
                        end: S
                    }
                } else o = null
            }
            o = o || {
                start: 0,
                end: 0
            }
        } else o = null;
        for (Ea = {
                focusedElem: e,
                selectionRange: o
            }, li = !1, ee = t; ee !== null;)
            if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
            else
                for (; ee !== null;) {
                    t = ee;
                    try {
                        var te = t.alternate;
                        if ((t.flags & 1024) !== 0) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (te !== null) {
                                    var oe = te.memoizedProps,
                                        qe = te.memoizedState,
                                        P = t.stateNode,
                                        j = P.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : Qt(t.type, oe), qe);
                                    P.__reactInternalSnapshotBeforeUpdate = j
                                }
                                break;
                            case 3:
                                var O = t.stateNode.containerInfo;
                                O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (Q) {
                        We(t, t.return, Q)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, ee = e;
                        break
                    }
                    ee = t.return
                }
        return te = Ch, Ch = !1, te
    }

    function yo(e, t, o) {
        var l = t.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
            var u = l = l.next;
            do {
                if ((u.tag & e) === e) {
                    var f = u.destroy;
                    u.destroy = void 0, f !== void 0 && fu(t, o, f)
                }
                u = u.next
            } while (u !== l)
        }
    }

    function $i(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var o = t = t.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.create;
                    o.destroy = l()
                }
                o = o.next
            } while (o !== t)
        }
    }

    function hu(e) {
        var t = e.ref;
        if (t !== null) {
            var o = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = o;
                    break;
                default:
                    e = o
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function _h(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, _h(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nn], delete t[oo], delete t[Ra], delete t[C0], delete t[_0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Rh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function Th(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Rh(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function pu(e, t, o) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode, t.insertBefore(e, o)) : (t = o, t.appendChild(e)), o = o._reactRootContainer, o != null || t.onclick !== null || (t.onclick = xi));
        else if (l !== 4 && (e = e.child, e !== null))
            for (pu(e, t, o), e = e.sibling; e !== null;) pu(e, t, o), e = e.sibling
    }

    function mu(e, t, o) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? o.insertBefore(e, t) : o.appendChild(e);
        else if (l !== 4 && (e = e.child, e !== null))
            for (mu(e, t, o), e = e.sibling; e !== null;) mu(e, t, o), e = e.sibling
    }
    var it = null,
        Kt = !1;

    function qn(e, t, o) {
        for (o = o.child; o !== null;) Ph(e, t, o), o = o.sibling
    }

    function Ph(e, t, o) {
        if (tn && typeof tn.onCommitFiberUnmount == "function") try {
            tn.onCommitFiberUnmount(ti, o)
        } catch {}
        switch (o.tag) {
            case 5:
                ht || us(o, t);
            case 6:
                var l = it,
                    u = Kt;
                it = null, qn(e, t, o), it = l, Kt = u, it !== null && (Kt ? (e = it, o = o.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : it.removeChild(o.stateNode));
                break;
            case 18:
                it !== null && (Kt ? (e = it, o = o.stateNode, e.nodeType === 8 ? _a(e.parentNode, o) : e.nodeType === 1 && _a(e, o), Ks(e)) : _a(it, o.stateNode));
                break;
            case 4:
                l = it, u = Kt, it = o.stateNode.containerInfo, Kt = !0, qn(e, t, o), it = l, Kt = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ht && (l = o.updateQueue, l !== null && (l = l.lastEffect, l !== null))) {
                    u = l = l.next;
                    do {
                        var f = u,
                            m = f.destroy;
                        f = f.tag, m !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && fu(o, t, m), u = u.next
                    } while (u !== l)
                }
                qn(e, t, o);
                break;
            case 1:
                if (!ht && (us(o, t), l = o.stateNode, typeof l.componentWillUnmount == "function")) try {
                    l.props = o.memoizedProps, l.state = o.memoizedState, l.componentWillUnmount()
                } catch (x) {
                    We(o, t, x)
                }
                qn(e, t, o);
                break;
            case 21:
                qn(e, t, o);
                break;
            case 22:
                o.mode & 1 ? (ht = (l = ht) || o.memoizedState !== null, qn(e, t, o), ht = l) : qn(e, t, o);
                break;
            default:
                qn(e, t, o)
        }
    }

    function Oh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var o = e.stateNode;
            o === null && (o = e.stateNode = new V0), t.forEach(function(l) {
                var u = ev.bind(null, e, l);
                o.has(l) || (o.add(l), l.then(u, u))
            })
        }
    }

    function Gt(e, t) {
        var o = t.deletions;
        if (o !== null)
            for (var l = 0; l < o.length; l++) {
                var u = o[l];
                try {
                    var f = e,
                        m = t,
                        x = m;
                    e: for (; x !== null;) {
                        switch (x.tag) {
                            case 5:
                                it = x.stateNode, Kt = !1;
                                break e;
                            case 3:
                                it = x.stateNode.containerInfo, Kt = !0;
                                break e;
                            case 4:
                                it = x.stateNode.containerInfo, Kt = !0;
                                break e
                        }
                        x = x.return
                    }
                    if (it === null) throw Error(s(160));
                    Ph(f, m, u), it = null, Kt = !1;
                    var S = u.alternate;
                    S !== null && (S.return = null), u.return = null
                } catch (A) {
                    We(u, t, A)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) Ah(t, e), t = t.sibling
    }

    function Ah(e, t) {
        var o = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Gt(t, e), on(e), l & 4) {
                    try {
                        yo(3, e, e.return), $i(3, e)
                    } catch (oe) {
                        We(e, e.return, oe)
                    }
                    try {
                        yo(5, e, e.return)
                    } catch (oe) {
                        We(e, e.return, oe)
                    }
                }
                break;
            case 1:
                Gt(t, e), on(e), l & 512 && o !== null && us(o, o.return);
                break;
            case 5:
                if (Gt(t, e), on(e), l & 512 && o !== null && us(o, o.return), e.flags & 32) {
                    var u = e.stateNode;
                    try {
                        Ds(u, "")
                    } catch (oe) {
                        We(e, e.return, oe)
                    }
                }
                if (l & 4 && (u = e.stateNode, u != null)) {
                    var f = e.memoizedProps,
                        m = o !== null ? o.memoizedProps : f,
                        x = e.type,
                        S = e.updateQueue;
                    if (e.updateQueue = null, S !== null) try {
                        x === "input" && f.type === "radio" && f.name != null && id(u, f), ql(x, m);
                        var A = ql(x, f);
                        for (m = 0; m < S.length; m += 2) {
                            var W = S[m],
                                H = S[m + 1];
                            W === "style" ? pd(u, H) : W === "dangerouslySetInnerHTML" ? fd(u, H) : W === "children" ? Ds(u, H) : I(u, W, H, A)
                        }
                        switch (x) {
                            case "input":
                                Bl(u, f);
                                break;
                            case "textarea":
                                ud(u, f);
                                break;
                            case "select":
                                var $ = u._wrapperState.wasMultiple;
                                u._wrapperState.wasMultiple = !!f.multiple;
                                var J = f.value;
                                J != null ? $r(u, !!f.multiple, J, !1) : $ !== !!f.multiple && (f.defaultValue != null ? $r(u, !!f.multiple, f.defaultValue, !0) : $r(u, !!f.multiple, f.multiple ? [] : "", !1))
                        }
                        u[oo] = f
                    } catch (oe) {
                        We(e, e.return, oe)
                    }
                }
                break;
            case 6:
                if (Gt(t, e), on(e), l & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    u = e.stateNode, f = e.memoizedProps;
                    try {
                        u.nodeValue = f
                    } catch (oe) {
                        We(e, e.return, oe)
                    }
                }
                break;
            case 3:
                if (Gt(t, e), on(e), l & 4 && o !== null && o.memoizedState.isDehydrated) try {
                    Ks(t.containerInfo)
                } catch (oe) {
                    We(e, e.return, oe)
                }
                break;
            case 4:
                Gt(t, e), on(e);
                break;
            case 13:
                Gt(t, e), on(e), u = e.child, u.flags & 8192 && (f = u.memoizedState !== null, u.stateNode.isHidden = f, !f || u.alternate !== null && u.alternate.memoizedState !== null || (vu = He())), l & 4 && Oh(e);
                break;
            case 22:
                if (W = o !== null && o.memoizedState !== null, e.mode & 1 ? (ht = (A = ht) || W, Gt(t, e), ht = A) : Gt(t, e), on(e), l & 8192) {
                    if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !W && (e.mode & 1) !== 0)
                        for (ee = e, W = e.child; W !== null;) {
                            for (H = ee = W; ee !== null;) {
                                switch ($ = ee, J = $.child, $.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        yo(4, $, $.return);
                                        break;
                                    case 1:
                                        us($, $.return);
                                        var te = $.stateNode;
                                        if (typeof te.componentWillUnmount == "function") {
                                            l = $, o = $.return;
                                            try {
                                                t = l, te.props = t.memoizedProps, te.state = t.memoizedState, te.componentWillUnmount()
                                            } catch (oe) {
                                                We(l, o, oe)
                                            }
                                        }
                                        break;
                                    case 5:
                                        us($, $.return);
                                        break;
                                    case 22:
                                        if ($.memoizedState !== null) {
                                            Fh(H);
                                            continue
                                        }
                                }
                                J !== null ? (J.return = $, ee = J) : Fh(H)
                            }
                            W = W.sibling
                        }
                    e: for (W = null, H = e;;) {
                        if (H.tag === 5) {
                            if (W === null) {
                                W = H;
                                try {
                                    u = H.stateNode, A ? (f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (x = H.stateNode, S = H.memoizedProps.style, m = S != null && S.hasOwnProperty("display") ? S.display : null, x.style.display = hd("display", m))
                                } catch (oe) {
                                    We(e, e.return, oe)
                                }
                            }
                        } else if (H.tag === 6) {
                            if (W === null) try {
                                H.stateNode.nodeValue = A ? "" : H.memoizedProps
                            } catch (oe) {
                                We(e, e.return, oe)
                            }
                        } else if ((H.tag !== 22 && H.tag !== 23 || H.memoizedState === null || H === e) && H.child !== null) {
                            H.child.return = H, H = H.child;
                            continue
                        }
                        if (H === e) break e;
                        for (; H.sibling === null;) {
                            if (H.return === null || H.return === e) break e;
                            W === H && (W = null), H = H.return
                        }
                        W === H && (W = null), H.sibling.return = H.return, H = H.sibling
                    }
                }
                break;
            case 19:
                Gt(t, e), on(e), l & 4 && Oh(e);
                break;
            case 21:
                break;
            default:
                Gt(t, e), on(e)
        }
    }

    function on(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var o = e.return; o !== null;) {
                        if (Rh(o)) {
                            var l = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(s(160))
                }
                switch (l.tag) {
                    case 5:
                        var u = l.stateNode;
                        l.flags & 32 && (Ds(u, ""), l.flags &= -33);
                        var f = Th(e);
                        mu(e, f, u);
                        break;
                    case 3:
                    case 4:
                        var m = l.stateNode.containerInfo,
                            x = Th(e);
                        pu(e, x, m);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (S) {
                We(e, e.return, S)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function q0(e, t, o) {
        ee = e, Lh(e)
    }

    function Lh(e, t, o) {
        for (var l = (e.mode & 1) !== 0; ee !== null;) {
            var u = ee,
                f = u.child;
            if (u.tag === 22 && l) {
                var m = u.memoizedState !== null || Bi;
                if (!m) {
                    var x = u.alternate,
                        S = x !== null && x.memoizedState !== null || ht;
                    x = Bi;
                    var A = ht;
                    if (Bi = m, (ht = S) && !A)
                        for (ee = u; ee !== null;) m = ee, S = m.child, m.tag === 22 && m.memoizedState !== null ? Dh(u) : S !== null ? (S.return = m, ee = S) : Dh(u);
                    for (; f !== null;) ee = f, Lh(f), f = f.sibling;
                    ee = u, Bi = x, ht = A
                }
                Mh(e)
            } else(u.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = u, ee = f) : Mh(e)
        }
    }

    function Mh(e) {
        for (; ee !== null;) {
            var t = ee;
            if ((t.flags & 8772) !== 0) {
                var o = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ht || $i(5, t);
                            break;
                        case 1:
                            var l = t.stateNode;
                            if (t.flags & 4 && !ht)
                                if (o === null) l.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? o.memoizedProps : Qt(t.type, o.memoizedProps);
                                    l.componentDidUpdate(u, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                                }
                            var f = t.updateQueue;
                            f !== null && Ff(t, f, l);
                            break;
                        case 3:
                            var m = t.updateQueue;
                            if (m !== null) {
                                if (o = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        o = t.child.stateNode;
                                        break;
                                    case 1:
                                        o = t.child.stateNode
                                }
                                Ff(t, m, o)
                            }
                            break;
                        case 5:
                            var x = t.stateNode;
                            if (o === null && t.flags & 4) {
                                o = x;
                                var S = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        S.autoFocus && o.focus();
                                        break;
                                    case "img":
                                        S.src && (o.src = S.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var A = t.alternate;
                                if (A !== null) {
                                    var W = A.memoizedState;
                                    if (W !== null) {
                                        var H = W.dehydrated;
                                        H !== null && Ks(H)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    ht || t.flags & 512 && hu(t)
                } catch ($) {
                    We(t, t.return, $)
                }
            }
            if (t === e) {
                ee = null;
                break
            }
            if (o = t.sibling, o !== null) {
                o.return = t.return, ee = o;
                break
            }
            ee = t.return
        }
    }

    function Fh(e) {
        for (; ee !== null;) {
            var t = ee;
            if (t === e) {
                ee = null;
                break
            }
            var o = t.sibling;
            if (o !== null) {
                o.return = t.return, ee = o;
                break
            }
            ee = t.return
        }
    }

    function Dh(e) {
        for (; ee !== null;) {
            var t = ee;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var o = t.return;
                        try {
                            $i(4, t)
                        } catch (S) {
                            We(t, o, S)
                        }
                        break;
                    case 1:
                        var l = t.stateNode;
                        if (typeof l.componentDidMount == "function") {
                            var u = t.return;
                            try {
                                l.componentDidMount()
                            } catch (S) {
                                We(t, u, S)
                            }
                        }
                        var f = t.return;
                        try {
                            hu(t)
                        } catch (S) {
                            We(t, f, S)
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            hu(t)
                        } catch (S) {
                            We(t, m, S)
                        }
                }
            } catch (S) {
                We(t, t.return, S)
            }
            if (t === e) {
                ee = null;
                break
            }
            var x = t.sibling;
            if (x !== null) {
                x.return = t.return, ee = x;
                break
            }
            ee = t.return
        }
    }
    var Q0 = Math.ceil,
        Wi = z.ReactCurrentDispatcher,
        gu = z.ReactCurrentOwner,
        zt = z.ReactCurrentBatchConfig,
        Re = 0,
        rt = null,
        Ke = null,
        lt = 0,
        Lt = 0,
        cs = Bn(0),
        Xe = 0,
        vo = null,
        kr = 0,
        Vi = 0,
        yu = 0,
        xo = null,
        St = null,
        vu = 0,
        ds = 1 / 0,
        Sn = null,
        Hi = !1,
        xu = null,
        Qn = null,
        qi = !1,
        Kn = null,
        Qi = 0,
        wo = 0,
        wu = null,
        Ki = -1,
        Gi = 0;

    function yt() {
        return (Re & 6) !== 0 ? He() : Ki !== -1 ? Ki : Ki = He()
    }

    function Gn(e) {
        return (e.mode & 1) === 0 ? 1 : (Re & 2) !== 0 && lt !== 0 ? lt & -lt : T0.transition !== null ? (Gi === 0 && (Gi = Rd()), Gi) : (e = Me, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Id(e.type)), e)
    }

    function Yt(e, t, o, l) {
        if (50 < wo) throw wo = 0, wu = null, Error(s(185));
        Ws(e, o, l), ((Re & 2) === 0 || e !== rt) && (e === rt && ((Re & 2) === 0 && (Vi |= o), Xe === 4 && Yn(e, lt)), Nt(e, l), o === 1 && Re === 0 && (t.mode & 1) === 0 && (ds = He() + 500, Si && Wn()))
    }

    function Nt(e, t) {
        var o = e.callbackNode;
        Ty(e, t);
        var l = si(e, e === rt ? lt : 0);
        if (l === 0) o !== null && jd(o), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = l & -l, e.callbackPriority !== t) {
            if (o != null && jd(o), t === 1) e.tag === 0 ? R0(zh.bind(null, e)) : Nf(zh.bind(null, e)), E0(function() {
                (Re & 6) === 0 && Wn()
            }), o = null;
            else {
                switch (Td(l)) {
                    case 1:
                        o = Zl;
                        break;
                    case 4:
                        o = Cd;
                        break;
                    case 16:
                        o = ei;
                        break;
                    case 536870912:
                        o = _d;
                        break;
                    default:
                        o = ei
                }
                o = Qh(o, Ih.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = o
        }
    }

    function Ih(e, t) {
        if (Ki = -1, Gi = 0, (Re & 6) !== 0) throw Error(s(327));
        var o = e.callbackNode;
        if (fs() && e.callbackNode !== o) return null;
        var l = si(e, e === rt ? lt : 0);
        if (l === 0) return null;
        if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Yi(e, l);
        else {
            t = l;
            var u = Re;
            Re |= 2;
            var f = Bh();
            (rt !== e || lt !== t) && (Sn = null, ds = He() + 500, Nr(e, t));
            do try {
                Y0();
                break
            } catch (x) {
                Uh(e, x)
            }
            while (!0);
            Ia(), Wi.current = f, Re = u, Ke !== null ? t = 0 : (rt = null, lt = 0, t = Xe)
        }
        if (t !== 0) {
            if (t === 2 && (u = ea(e), u !== 0 && (l = u, t = bu(e, u))), t === 1) throw o = vo, Nr(e, 0), Yn(e, l), Nt(e, He()), o;
            if (t === 6) Yn(e, l);
            else {
                if (u = e.current.alternate, (l & 30) === 0 && !K0(u) && (t = Yi(e, l), t === 2 && (f = ea(e), f !== 0 && (l = f, t = bu(e, f))), t === 1)) throw o = vo, Nr(e, 0), Yn(e, l), Nt(e, He()), o;
                switch (e.finishedWork = u, e.finishedLanes = l, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Er(e, St, Sn);
                        break;
                    case 3:
                        if (Yn(e, l), (l & 130023424) === l && (t = vu + 500 - He(), 10 < t)) {
                            if (si(e, 0) !== 0) break;
                            if (u = e.suspendedLanes, (u & l) !== l) {
                                yt(), e.pingedLanes |= e.suspendedLanes & u;
                                break
                            }
                            e.timeoutHandle = Ca(Er.bind(null, e, St, Sn), t);
                            break
                        }
                        Er(e, St, Sn);
                        break;
                    case 4:
                        if (Yn(e, l), (l & 4194240) === l) break;
                        for (t = e.eventTimes, u = -1; 0 < l;) {
                            var m = 31 - Vt(l);
                            f = 1 << m, m = t[m], m > u && (u = m), l &= ~f
                        }
                        if (l = u, l = He() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * Q0(l / 1960)) - l, 10 < l) {
                            e.timeoutHandle = Ca(Er.bind(null, e, St, Sn), l);
                            break
                        }
                        Er(e, St, Sn);
                        break;
                    case 5:
                        Er(e, St, Sn);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return Nt(e, He()), e.callbackNode === o ? Ih.bind(null, e) : null
    }

    function bu(e, t) {
        var o = xo;
        return e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256), e = Yi(e, t), e !== 2 && (t = St, St = o, t !== null && ku(t)), e
    }

    function ku(e) {
        St === null ? St = e : St.push.apply(St, e)
    }

    function K0(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var o = t.updateQueue;
                if (o !== null && (o = o.stores, o !== null))
                    for (var l = 0; l < o.length; l++) {
                        var u = o[l],
                            f = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Ht(f(), u)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = t.child, t.subtreeFlags & 16384 && o !== null) o.return = t, t = o;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Yn(e, t) {
        for (t &= ~yu, t &= ~Vi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var o = 31 - Vt(t),
                l = 1 << o;
            e[o] = -1, t &= ~l
        }
    }

    function zh(e) {
        if ((Re & 6) !== 0) throw Error(s(327));
        fs();
        var t = si(e, 0);
        if ((t & 1) === 0) return Nt(e, He()), null;
        var o = Yi(e, t);
        if (e.tag !== 0 && o === 2) {
            var l = ea(e);
            l !== 0 && (t = l, o = bu(e, l))
        }
        if (o === 1) throw o = vo, Nr(e, 0), Yn(e, t), Nt(e, He()), o;
        if (o === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Er(e, St, Sn), Nt(e, He()), null
    }

    function Su(e, t) {
        var o = Re;
        Re |= 1;
        try {
            return e(t)
        } finally {
            Re = o, Re === 0 && (ds = He() + 500, Si && Wn())
        }
    }

    function Sr(e) {
        Kn !== null && Kn.tag === 0 && (Re & 6) === 0 && fs();
        var t = Re;
        Re |= 1;
        var o = zt.transition,
            l = Me;
        try {
            if (zt.transition = null, Me = 1, e) return e()
        } finally {
            Me = l, zt.transition = o, Re = t, (Re & 6) === 0 && Wn()
        }
    }

    function Nu() {
        Lt = cs.current, Ie(cs)
    }

    function Nr(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var o = e.timeoutHandle;
        if (o !== -1 && (e.timeoutHandle = -1, N0(o)), Ke !== null)
            for (o = Ke.return; o !== null;) {
                var l = o;
                switch (Aa(l), l.tag) {
                    case 1:
                        l = l.type.childContextTypes, l != null && bi();
                        break;
                    case 3:
                        ls(), Ie(wt), Ie(ct), qa();
                        break;
                    case 5:
                        Va(l);
                        break;
                    case 4:
                        ls();
                        break;
                    case 13:
                        Ie(Ue);
                        break;
                    case 19:
                        Ie(Ue);
                        break;
                    case 10:
                        za(l.type._context);
                        break;
                    case 22:
                    case 23:
                        Nu()
                }
                o = o.return
            }
        if (rt = e, Ke = e = Jn(e.current, null), lt = Lt = t, Xe = 0, vo = null, yu = Vi = kr = 0, St = xo = null, xr !== null) {
            for (t = 0; t < xr.length; t++)
                if (o = xr[t], l = o.interleaved, l !== null) {
                    o.interleaved = null;
                    var u = l.next,
                        f = o.pending;
                    if (f !== null) {
                        var m = f.next;
                        f.next = u, l.next = m
                    }
                    o.pending = l
                }
            xr = null
        }
        return e
    }

    function Uh(e, t) {
        do {
            var o = Ke;
            try {
                if (Ia(), Ai.current = Di, Li) {
                    for (var l = Be.memoizedState; l !== null;) {
                        var u = l.queue;
                        u !== null && (u.pending = null), l = l.next
                    }
                    Li = !1
                }
                if (br = 0, nt = Je = Be = null, fo = !1, ho = 0, gu.current = null, o === null || o.return === null) {
                    Xe = 1, vo = t, Ke = null;
                    break
                }
                e: {
                    var f = e,
                        m = o.return,
                        x = o,
                        S = t;
                    if (t = lt, x.flags |= 32768, S !== null && typeof S == "object" && typeof S.then == "function") {
                        var A = S,
                            W = x,
                            H = W.tag;
                        if ((W.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
                            var $ = W.alternate;
                            $ ? (W.updateQueue = $.updateQueue, W.memoizedState = $.memoizedState, W.lanes = $.lanes) : (W.updateQueue = null, W.memoizedState = null)
                        }
                        var J = dh(m);
                        if (J !== null) {
                            J.flags &= -257, fh(J, m, x, f, t), J.mode & 1 && ch(f, A, t), t = J, S = A;
                            var te = t.updateQueue;
                            if (te === null) {
                                var oe = new Set;
                                oe.add(S), t.updateQueue = oe
                            } else te.add(S);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                ch(f, A, t), Eu();
                                break e
                            }
                            S = Error(s(426))
                        }
                    } else if (ze && x.mode & 1) {
                        var qe = dh(m);
                        if (qe !== null) {
                            (qe.flags & 65536) === 0 && (qe.flags |= 256), fh(qe, m, x, f, t), Fa(as(S, x));
                            break e
                        }
                    }
                    f = S = as(S, x),
                    Xe !== 4 && (Xe = 2),
                    xo === null ? xo = [f] : xo.push(f),
                    f = m;do {
                        switch (f.tag) {
                            case 3:
                                f.flags |= 65536, t &= -t, f.lanes |= t;
                                var P = ah(f, S, t);
                                Mf(f, P);
                                break e;
                            case 1:
                                x = S;
                                var j = f.type,
                                    O = f.stateNode;
                                if ((f.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (Qn === null || !Qn.has(O)))) {
                                    f.flags |= 65536, t &= -t, f.lanes |= t;
                                    var Q = uh(f, x, t);
                                    Mf(f, Q);
                                    break e
                                }
                        }
                        f = f.return
                    } while (f !== null)
                }
                Wh(o)
            } catch (ie) {
                t = ie, Ke === o && o !== null && (Ke = o = o.return);
                continue
            }
            break
        } while (!0)
    }

    function Bh() {
        var e = Wi.current;
        return Wi.current = Di, e === null ? Di : e
    }

    function Eu() {
        (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), rt === null || (kr & 268435455) === 0 && (Vi & 268435455) === 0 || Yn(rt, lt)
    }

    function Yi(e, t) {
        var o = Re;
        Re |= 2;
        var l = Bh();
        (rt !== e || lt !== t) && (Sn = null, Nr(e, t));
        do try {
            G0();
            break
        } catch (u) {
            Uh(e, u)
        }
        while (!0);
        if (Ia(), Re = o, Wi.current = l, Ke !== null) throw Error(s(261));
        return rt = null, lt = 0, Xe
    }

    function G0() {
        for (; Ke !== null;) $h(Ke)
    }

    function Y0() {
        for (; Ke !== null && !by();) $h(Ke)
    }

    function $h(e) {
        var t = qh(e.alternate, e, Lt);
        e.memoizedProps = e.pendingProps, t === null ? Wh(e) : Ke = t, gu.current = null
    }

    function Wh(e) {
        var t = e;
        do {
            var o = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (o = $0(o, t, Lt), o !== null) {
                    Ke = o;
                    return
                }
            } else {
                if (o = W0(o, t), o !== null) {
                    o.flags &= 32767, Ke = o;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Xe = 6, Ke = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                Ke = t;
                return
            }
            Ke = t = e
        } while (t !== null);
        Xe === 0 && (Xe = 5)
    }

    function Er(e, t, o) {
        var l = Me,
            u = zt.transition;
        try {
            zt.transition = null, Me = 1, J0(e, t, o, l)
        } finally {
            zt.transition = u, Me = l
        }
        return null
    }

    function J0(e, t, o, l) {
        do fs(); while (Kn !== null);
        if ((Re & 6) !== 0) throw Error(s(327));
        o = e.finishedWork;
        var u = e.finishedLanes;
        if (o === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, o === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var f = o.lanes | o.childLanes;
        if (Py(e, f), e === rt && (Ke = rt = null, lt = 0), (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || qi || (qi = !0, Qh(ei, function() {
                return fs(), null
            })), f = (o.flags & 15990) !== 0, (o.subtreeFlags & 15990) !== 0 || f) {
            f = zt.transition, zt.transition = null;
            var m = Me;
            Me = 1;
            var x = Re;
            Re |= 4, gu.current = null, H0(e, o), Ah(o, e), y0(Ea), li = !!Na, Ea = Na = null, e.current = o, q0(o), ky(), Re = x, Me = m, zt.transition = f
        } else e.current = o;
        if (qi && (qi = !1, Kn = e, Qi = u), f = e.pendingLanes, f === 0 && (Qn = null), Ey(o.stateNode), Nt(e, He()), t !== null)
            for (l = e.onRecoverableError, o = 0; o < t.length; o++) u = t[o], l(u.value, {
                componentStack: u.stack,
                digest: u.digest
            });
        if (Hi) throw Hi = !1, e = xu, xu = null, e;
        return (Qi & 1) !== 0 && e.tag !== 0 && fs(), f = e.pendingLanes, (f & 1) !== 0 ? e === wu ? wo++ : (wo = 0, wu = e) : wo = 0, Wn(), null
    }

    function fs() {
        if (Kn !== null) {
            var e = Td(Qi),
                t = zt.transition,
                o = Me;
            try {
                if (zt.transition = null, Me = 16 > e ? 16 : e, Kn === null) var l = !1;
                else {
                    if (e = Kn, Kn = null, Qi = 0, (Re & 6) !== 0) throw Error(s(331));
                    var u = Re;
                    for (Re |= 4, ee = e.current; ee !== null;) {
                        var f = ee,
                            m = f.child;
                        if ((ee.flags & 16) !== 0) {
                            var x = f.deletions;
                            if (x !== null) {
                                for (var S = 0; S < x.length; S++) {
                                    var A = x[S];
                                    for (ee = A; ee !== null;) {
                                        var W = ee;
                                        switch (W.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                yo(8, W, f)
                                        }
                                        var H = W.child;
                                        if (H !== null) H.return = W, ee = H;
                                        else
                                            for (; ee !== null;) {
                                                W = ee;
                                                var $ = W.sibling,
                                                    J = W.return;
                                                if (_h(W), W === A) {
                                                    ee = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = J, ee = $;
                                                    break
                                                }
                                                ee = J
                                            }
                                    }
                                }
                                var te = f.alternate;
                                if (te !== null) {
                                    var oe = te.child;
                                    if (oe !== null) {
                                        te.child = null;
                                        do {
                                            var qe = oe.sibling;
                                            oe.sibling = null, oe = qe
                                        } while (oe !== null)
                                    }
                                }
                                ee = f
                            }
                        }
                        if ((f.subtreeFlags & 2064) !== 0 && m !== null) m.return = f, ee = m;
                        else e: for (; ee !== null;) {
                            if (f = ee, (f.flags & 2048) !== 0) switch (f.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yo(9, f, f.return)
                            }
                            var P = f.sibling;
                            if (P !== null) {
                                P.return = f.return, ee = P;
                                break e
                            }
                            ee = f.return
                        }
                    }
                    var j = e.current;
                    for (ee = j; ee !== null;) {
                        m = ee;
                        var O = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && O !== null) O.return = m, ee = O;
                        else e: for (m = j; ee !== null;) {
                            if (x = ee, (x.flags & 2048) !== 0) try {
                                switch (x.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $i(9, x)
                                }
                            } catch (ie) {
                                We(x, x.return, ie)
                            }
                            if (x === m) {
                                ee = null;
                                break e
                            }
                            var Q = x.sibling;
                            if (Q !== null) {
                                Q.return = x.return, ee = Q;
                                break e
                            }
                            ee = x.return
                        }
                    }
                    if (Re = u, Wn(), tn && typeof tn.onPostCommitFiberRoot == "function") try {
                        tn.onPostCommitFiberRoot(ti, e)
                    } catch {}
                    l = !0
                }
                return l
            } finally {
                Me = o, zt.transition = t
            }
        }
        return !1
    }

    function Vh(e, t, o) {
        t = as(o, t), t = ah(e, t, 1), e = Hn(e, t, 1), t = yt(), e !== null && (Ws(e, 1, t), Nt(e, t))
    }

    function We(e, t, o) {
        if (e.tag === 3) Vh(e, e, o);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Vh(t, e, o);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Qn === null || !Qn.has(l))) {
                        e = as(o, e), e = uh(t, e, 1), t = Hn(t, e, 1), e = yt(), t !== null && (Ws(t, 1, e), Nt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function X0(e, t, o) {
        var l = e.pingCache;
        l !== null && l.delete(t), t = yt(), e.pingedLanes |= e.suspendedLanes & o, rt === e && (lt & o) === o && (Xe === 4 || Xe === 3 && (lt & 130023424) === lt && 500 > He() - vu ? Nr(e, 0) : yu |= o), Nt(e, t)
    }

    function Hh(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ri, ri <<= 1, (ri & 130023424) === 0 && (ri = 4194304)));
        var o = yt();
        e = wn(e, t), e !== null && (Ws(e, t, o), Nt(e, o))
    }

    function Z0(e) {
        var t = e.memoizedState,
            o = 0;
        t !== null && (o = t.retryLane), Hh(e, o)
    }

    function ev(e, t) {
        var o = 0;
        switch (e.tag) {
            case 13:
                var l = e.stateNode,
                    u = e.memoizedState;
                u !== null && (o = u.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        l !== null && l.delete(t), Hh(e, o)
    }
    var qh;
    qh = function(e, t, o) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || wt.current) kt = !0;
            else {
                if ((e.lanes & o) === 0 && (t.flags & 128) === 0) return kt = !1, B0(e, t, o);
                kt = (e.flags & 131072) !== 0
            }
        else kt = !1, ze && (t.flags & 1048576) !== 0 && Ef(t, Ei, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var l = t.type;
                Ui(e, t), e = t.pendingProps;
                var u = es(t, ct.current);
                is(t, o), u = Ga(null, t, l, e, u, o);
                var f = Ya();
                return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, bt(l) ? (f = !0, ki(t)) : f = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, $a(t), u.updater = Ii, t.stateNode = u, u._reactInternals = t, nu(t, l, e, o), t = iu(null, t, l, !0, f, o)) : (t.tag = 0, ze && f && Oa(t), gt(null, t, u, o), t = t.child), t;
            case 16:
                l = t.elementType;
                e: {
                    switch (Ui(e, t), e = t.pendingProps, u = l._init, l = u(l._payload), t.type = l, u = t.tag = nv(l), e = Qt(l, e), u) {
                        case 0:
                            t = ou(null, t, l, e, o);
                            break e;
                        case 1:
                            t = vh(null, t, l, e, o);
                            break e;
                        case 11:
                            t = hh(null, t, l, e, o);
                            break e;
                        case 14:
                            t = ph(null, t, l, Qt(l.type, e), o);
                            break e
                    }
                    throw Error(s(306, l, ""))
                }
                return t;
            case 0:
                return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), ou(e, t, l, u, o);
            case 1:
                return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), vh(e, t, l, u, o);
            case 3:
                e: {
                    if (xh(t), e === null) throw Error(s(387));l = t.pendingProps,
                    f = t.memoizedState,
                    u = f.element,
                    Lf(e, t),
                    Pi(t, l, null, o);
                    var m = t.memoizedState;
                    if (l = m.element, f.isDehydrated)
                        if (f = {
                                element: l,
                                isDehydrated: !1,
                                cache: m.cache,
                                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                                transitions: m.transitions
                            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                            u = as(Error(s(423)), t), t = wh(e, t, l, o, u);
                            break e
                        } else if (l !== u) {
                        u = as(Error(s(424)), t), t = wh(e, t, l, o, u);
                        break e
                    } else
                        for (At = Un(t.stateNode.containerInfo.firstChild), Ot = t, ze = !0, qt = null, o = Of(t, null, l, o), t.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
                    else {
                        if (rs(), l === u) {
                            t = kn(e, t, o);
                            break e
                        }
                        gt(e, t, l, o)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return Df(t), e === null && Ma(t), l = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, m = u.children, ja(l, u) ? m = null : f !== null && ja(l, f) && (t.flags |= 32), yh(e, t), gt(e, t, m, o), t.child;
            case 6:
                return e === null && Ma(t), null;
            case 13:
                return bh(e, t, o);
            case 4:
                return Wa(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = ss(t, null, l, o) : gt(e, t, l, o), t.child;
            case 11:
                return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), hh(e, t, l, u, o);
            case 7:
                return gt(e, t, t.pendingProps, o), t.child;
            case 8:
                return gt(e, t, t.pendingProps.children, o), t.child;
            case 12:
                return gt(e, t, t.pendingProps.children, o), t.child;
            case 10:
                e: {
                    if (l = t.type._context, u = t.pendingProps, f = t.memoizedProps, m = u.value, Fe(_i, l._currentValue), l._currentValue = m, f !== null)
                        if (Ht(f.value, m)) {
                            if (f.children === u.children && !wt.current) {
                                t = kn(e, t, o);
                                break e
                            }
                        } else
                            for (f = t.child, f !== null && (f.return = t); f !== null;) {
                                var x = f.dependencies;
                                if (x !== null) {
                                    m = f.child;
                                    for (var S = x.firstContext; S !== null;) {
                                        if (S.context === l) {
                                            if (f.tag === 1) {
                                                S = bn(-1, o & -o), S.tag = 2;
                                                var A = f.updateQueue;
                                                if (A !== null) {
                                                    A = A.shared;
                                                    var W = A.pending;
                                                    W === null ? S.next = S : (S.next = W.next, W.next = S), A.pending = S
                                                }
                                            }
                                            f.lanes |= o, S = f.alternate, S !== null && (S.lanes |= o), Ua(f.return, o, t), x.lanes |= o;
                                            break
                                        }
                                        S = S.next
                                    }
                                } else if (f.tag === 10) m = f.type === t.type ? null : f.child;
                                else if (f.tag === 18) {
                                    if (m = f.return, m === null) throw Error(s(341));
                                    m.lanes |= o, x = m.alternate, x !== null && (x.lanes |= o), Ua(m, o, t), m = f.sibling
                                } else m = f.child;
                                if (m !== null) m.return = f;
                                else
                                    for (m = f; m !== null;) {
                                        if (m === t) {
                                            m = null;
                                            break
                                        }
                                        if (f = m.sibling, f !== null) {
                                            f.return = m.return, m = f;
                                            break
                                        }
                                        m = m.return
                                    }
                                f = m
                            }
                    gt(e, t, u.children, o),
                    t = t.child
                }
                return t;
            case 9:
                return u = t.type, l = t.pendingProps.children, is(t, o), u = Dt(u), l = l(u), t.flags |= 1, gt(e, t, l, o), t.child;
            case 14:
                return l = t.type, u = Qt(l, t.pendingProps), u = Qt(l.type, u), ph(e, t, l, u, o);
            case 15:
                return mh(e, t, t.type, t.pendingProps, o);
            case 17:
                return l = t.type, u = t.pendingProps, u = t.elementType === l ? u : Qt(l, u), Ui(e, t), t.tag = 1, bt(l) ? (e = !0, ki(t)) : e = !1, is(t, o), ih(t, l, u), nu(t, l, u, o), iu(null, t, l, !0, e, o);
            case 19:
                return Sh(e, t, o);
            case 22:
                return gh(e, t, o)
        }
        throw Error(s(156, t.tag))
    };

    function Qh(e, t) {
        return Ed(e, t)
    }

    function tv(e, t, o, l) {
        this.tag = e, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ut(e, t, o, l) {
        return new tv(e, t, o, l)
    }

    function ju(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function nv(e) {
        if (typeof e == "function") return ju(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === B) return 11;
            if (e === pe) return 14
        }
        return 2
    }

    function Jn(e, t) {
        var o = e.alternate;
        return o === null ? (o = Ut(e.tag, t, e.key, e.mode), o.elementType = e.elementType, o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.type = e.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = e.flags & 14680064, o.childLanes = e.childLanes, o.lanes = e.lanes, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, t = e.dependencies, o.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o
    }

    function Ji(e, t, o, l, u, f) {
        var m = 2;
        if (l = e, typeof e == "function") ju(e) && (m = 1);
        else if (typeof e == "string") m = 5;
        else e: switch (e) {
            case ge:
                return jr(o.children, u, f, t);
            case F:
                m = 8, u |= 8;
                break;
            case V:
                return e = Ut(12, o, t, u | 2), e.elementType = V, e.lanes = f, e;
            case se:
                return e = Ut(13, o, t, u), e.elementType = se, e.lanes = f, e;
            case _e:
                return e = Ut(19, o, t, u), e.elementType = _e, e.lanes = f, e;
            case we:
                return Xi(o, u, f, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case K:
                        m = 10;
                        break e;
                    case Z:
                        m = 9;
                        break e;
                    case B:
                        m = 11;
                        break e;
                    case pe:
                        m = 14;
                        break e;
                    case de:
                        m = 16, l = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = Ut(m, o, t, u), t.elementType = e, t.type = l, t.lanes = f, t
    }

    function jr(e, t, o, l) {
        return e = Ut(7, e, l, t), e.lanes = o, e
    }

    function Xi(e, t, o, l) {
        return e = Ut(22, e, l, t), e.elementType = we, e.lanes = o, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Cu(e, t, o) {
        return e = Ut(6, e, null, t), e.lanes = o, e
    }

    function _u(e, t, o) {
        return t = Ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = o, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function rv(e, t, o, l, u) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ta(0), this.expirationTimes = ta(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ta(0), this.identifierPrefix = l, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null
    }

    function Ru(e, t, o, l, u, f, m, x, S) {
        return e = new rv(e, t, o, x, S), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Ut(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = {
            element: l,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, $a(f), e
    }

    function sv(e, t, o) {
        var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ce,
            key: l == null ? null : "" + l,
            children: e,
            containerInfo: t,
            implementation: o
        }
    }

    function Kh(e) {
        if (!e) return $n;
        e = e._reactInternals;
        e: {
            if (pr(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (bt(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var o = e.type;
            if (bt(o)) return kf(e, o, t)
        }
        return t
    }

    function Gh(e, t, o, l, u, f, m, x, S) {
        return e = Ru(o, l, !0, e, u, f, m, x, S), e.context = Kh(null), o = e.current, l = yt(), u = Gn(o), f = bn(l, u), f.callback = t ? ? null, Hn(o, f, u), e.current.lanes = u, Ws(e, u, l), Nt(e, l), e
    }

    function Zi(e, t, o, l) {
        var u = t.current,
            f = yt(),
            m = Gn(u);
        return o = Kh(o), t.context === null ? t.context = o : t.pendingContext = o, t = bn(f, m), t.payload = {
            element: e
        }, l = l === void 0 ? null : l, l !== null && (t.callback = l), e = Hn(u, t, m), e !== null && (Yt(e, u, m, f), Ti(e, u, m)), m
    }

    function el(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Yh(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var o = e.retryLane;
            e.retryLane = o !== 0 && o < t ? o : t
        }
    }

    function Tu(e, t) {
        Yh(e, t), (e = e.alternate) && Yh(e, t)
    }

    function ov() {
        return null
    }
    var Jh = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function Pu(e) {
        this._internalRoot = e
    }
    tl.prototype.render = Pu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        Zi(e, t, null, null)
    }, tl.prototype.unmount = Pu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Sr(function() {
                Zi(null, e, null, null)
            }), t[gn] = null
        }
    };

    function tl(e) {
        this._internalRoot = e
    }
    tl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ad();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var o = 0; o < Dn.length && t !== 0 && t < Dn[o].priority; o++);
            Dn.splice(o, 0, e), o === 0 && Fd(e)
        }
    };

    function Ou(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function nl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Xh() {}

    function iv(e, t, o, l, u) {
        if (u) {
            if (typeof l == "function") {
                var f = l;
                l = function() {
                    var A = el(m);
                    f.call(A)
                }
            }
            var m = Gh(t, l, e, 0, null, !1, !1, "", Xh);
            return e._reactRootContainer = m, e[gn] = m.current, ro(e.nodeType === 8 ? e.parentNode : e), Sr(), m
        }
        for (; u = e.lastChild;) e.removeChild(u);
        if (typeof l == "function") {
            var x = l;
            l = function() {
                var A = el(S);
                x.call(A)
            }
        }
        var S = Ru(e, 0, !1, null, null, !1, !1, "", Xh);
        return e._reactRootContainer = S, e[gn] = S.current, ro(e.nodeType === 8 ? e.parentNode : e), Sr(function() {
            Zi(t, S, o, l)
        }), S
    }

    function rl(e, t, o, l, u) {
        var f = o._reactRootContainer;
        if (f) {
            var m = f;
            if (typeof u == "function") {
                var x = u;
                u = function() {
                    var S = el(m);
                    x.call(S)
                }
            }
            Zi(t, m, e, u)
        } else m = iv(o, t, e, u, l);
        return el(m)
    }
    Pd = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var o = $s(t.pendingLanes);
                    o !== 0 && (na(t, o | 1), Nt(t, He()), (Re & 6) === 0 && (ds = He() + 500, Wn()))
                }
                break;
            case 13:
                Sr(function() {
                    var l = wn(e, 1);
                    if (l !== null) {
                        var u = yt();
                        Yt(l, e, 1, u)
                    }
                }), Tu(e, 1)
        }
    }, ra = function(e) {
        if (e.tag === 13) {
            var t = wn(e, 134217728);
            if (t !== null) {
                var o = yt();
                Yt(t, e, 134217728, o)
            }
            Tu(e, 134217728)
        }
    }, Od = function(e) {
        if (e.tag === 13) {
            var t = Gn(e),
                o = wn(e, t);
            if (o !== null) {
                var l = yt();
                Yt(o, e, t, l)
            }
            Tu(e, t)
        }
    }, Ad = function() {
        return Me
    }, Ld = function(e, t) {
        var o = Me;
        try {
            return Me = e, t()
        } finally {
            Me = o
        }
    }, Gl = function(e, t, o) {
        switch (t) {
            case "input":
                if (Bl(e, o), t = o.name, o.type === "radio" && t != null) {
                    for (o = e; o.parentNode;) o = o.parentNode;
                    for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < o.length; t++) {
                        var l = o[t];
                        if (l !== e && l.form === e.form) {
                            var u = wi(l);
                            if (!u) throw Error(s(90));
                            hr(l), Bl(l, u)
                        }
                    }
                }
                break;
            case "textarea":
                ud(e, o);
                break;
            case "select":
                t = o.value, t != null && $r(e, !!o.multiple, t, !1)
        }
    }, vd = Su, xd = Sr;
    var lv = {
            usingClientEntryPoint: !1,
            Events: [io, Xr, wi, gd, yd, Su]
        },
        bo = {
            findFiberByHostInstance: mr,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        av = {
            bundleType: bo.bundleType,
            version: bo.version,
            rendererPackageName: bo.rendererPackageName,
            rendererConfig: bo.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: z.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Sd(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: bo.findFiberByHostInstance || ov,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!sl.isDisabled && sl.supportsFiber) try {
            ti = sl.inject(av), tn = sl
        } catch {}
    }
    return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lv, Et.createPortal = function(e, t) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ou(t)) throw Error(s(200));
        return sv(e, t, null, o)
    }, Et.createRoot = function(e, t) {
        if (!Ou(e)) throw Error(s(299));
        var o = !1,
            l = "",
            u = Jh;
        return t != null && (t.unstable_strictMode === !0 && (o = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Ru(e, 1, !1, null, null, o, !1, l, u), e[gn] = t.current, ro(e.nodeType === 8 ? e.parentNode : e), new Pu(t)
    }, Et.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = Sd(t), e = e === null ? null : e.stateNode, e
    }, Et.flushSync = function(e) {
        return Sr(e)
    }, Et.hydrate = function(e, t, o) {
        if (!nl(t)) throw Error(s(200));
        return rl(null, e, t, !0, o)
    }, Et.hydrateRoot = function(e, t, o) {
        if (!Ou(e)) throw Error(s(405));
        var l = o != null && o.hydratedSources || null,
            u = !1,
            f = "",
            m = Jh;
        if (o != null && (o.unstable_strictMode === !0 && (u = !0), o.identifierPrefix !== void 0 && (f = o.identifierPrefix), o.onRecoverableError !== void 0 && (m = o.onRecoverableError)), t = Gh(t, null, e, 1, o ? ? null, u, !1, f, m), e[gn] = t.current, ro(e), l)
            for (e = 0; e < l.length; e++) o = l[e], u = o._getVersion, u = u(o._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, u] : t.mutableSourceEagerHydrationData.push(o, u);
        return new tl(t)
    }, Et.render = function(e, t, o) {
        if (!nl(t)) throw Error(s(200));
        return rl(null, e, t, !1, o)
    }, Et.unmountComponentAtNode = function(e) {
        if (!nl(e)) throw Error(s(40));
        return e._reactRootContainer ? (Sr(function() {
            rl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[gn] = null
            })
        }), !0) : !1
    }, Et.unstable_batchedUpdates = Su, Et.unstable_renderSubtreeIntoContainer = function(e, t, o, l) {
        if (!nl(o)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return rl(e, t, o, !1, l)
    }, Et.version = "18.3.1-next-f1338f8080-20240426", Et
}
var lp;

function bm() {
    if (lp) return Fu.exports;
    lp = 1;

    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
        } catch (n) {
            console.error(n)
        }
    }
    return r(), Fu.exports = gv(), Fu.exports
}
var ap;

function yv() {
    if (ap) return il;
    ap = 1;
    var r = bm();
    return il.createRoot = r.createRoot, il.hydrateRoot = r.hydrateRoot, il
}
var vv = yv();
const xv = cv(vv),
    wv = 20,
    bv = 1e6,
    _n = {
        ADD_TOAST: "ADD_TOAST",
        UPDATE_TOAST: "UPDATE_TOAST",
        DISMISS_TOAST: "DISMISS_TOAST",
        REMOVE_TOAST: "REMOVE_TOAST"
    };
let zu = 0;

function kv() {
    return zu = (zu + 1) % Number.MAX_VALUE, zu.toString()
}
const Uu = new Map,
    up = r => {
        if (Uu.has(r)) return;
        const n = setTimeout(() => {
            Uu.delete(r), Oo({
                type: _n.REMOVE_TOAST,
                toastId: r
            })
        }, bv);
        Uu.set(r, n)
    },
    Sv = (r, n) => {
        switch (n.type) {
            case _n.ADD_TOAST:
                return { ...r,
                    toasts: [n.toast, ...r.toasts].slice(0, wv)
                };
            case _n.UPDATE_TOAST:
                return { ...r,
                    toasts: r.toasts.map(s => s.id === n.toast.id ? { ...s,
                        ...n.toast
                    } : s)
                };
            case _n.DISMISS_TOAST:
                {
                    const {
                        toastId: s
                    } = n;
                    return s ? up(s) : r.toasts.forEach(i => {
                        up(i.id)
                    }),
                    { ...r,
                        toasts: r.toasts.map(i => i.id === s || s === void 0 ? { ...i,
                            open: !1
                        } : i)
                    }
                }
            case _n.REMOVE_TOAST:
                return n.toastId === void 0 ? { ...r,
                    toasts: []
                } : { ...r,
                    toasts: r.toasts.filter(s => s.id !== n.toastId)
                }
        }
    },
    pl = [];
let ml = {
    toasts: []
};

function Oo(r) {
    ml = Sv(ml, r), pl.forEach(n => {
        n(ml)
    })
}

function Nv({ ...r
}) {
    const n = kv(),
        s = a => Oo({
            type: _n.UPDATE_TOAST,
            toast: { ...a,
                id: n
            }
        }),
        i = () => Oo({
            type: _n.DISMISS_TOAST,
            toastId: n
        });
    return Oo({
        type: _n.ADD_TOAST,
        toast: { ...r,
            id: n,
            open: !0,
            onOpenChange: a => {
                a || i()
            }
        }
    }), {
        id: n,
        dismiss: i,
        update: s
    }
}

function Ev() {
    const [r, n] = C.useState(ml);
    return C.useEffect(() => (pl.push(n), () => {
        const s = pl.indexOf(n);
        s > -1 && pl.splice(s, 1)
    }), [r]), { ...r,
        toast: Nv,
        dismiss: s => Oo({
            type: _n.DISMISS_TOAST,
            toastId: s
        })
    }
}

function km(r) {
    var n, s, i = "";
    if (typeof r == "string" || typeof r == "number") i += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var a = r.length;
            for (n = 0; n < a; n++) r[n] && (s = km(r[n])) && (i && (i += " "), i += s)
        } else
            for (s in r) r[s] && (i && (i += " "), i += s);
    return i
}

function Sm() {
    for (var r, n, s = 0, i = "", a = arguments.length; s < a; s++)(r = arguments[s]) && (n = km(r)) && (i && (i += " "), i += n);
    return i
}
const cp = r => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r,
    dp = Sm,
    Oc = (r, n) => s => {
        var i;
        if ((n == null ? void 0 : n.variants) == null) return dp(r, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
        const {
            variants: a,
            defaultVariants: d
        } = n, h = Object.keys(a).map(y => {
            const v = s == null ? void 0 : s[y],
                w = d == null ? void 0 : d[y];
            if (v === null) return null;
            const R = cp(v) || cp(w);
            return a[y][R]
        }), p = s && Object.entries(s).reduce((y, v) => {
            let [w, R] = v;
            return R === void 0 || (y[w] = R), y
        }, {}), g = n == null || (i = n.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((y, v) => {
            let {
                class: w,
                className: R,
                ...T
            } = v;
            return Object.entries(T).every(k => {
                let [E, b] = k;
                return Array.isArray(b) ? b.includes({ ...d,
                    ...p
                }[E]) : { ...d,
                    ...p
                }[E] === b
            }) ? [...y, w, R] : y
        }, []);
        return dp(r, h, g, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
    };
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Nm = (...r) => r.filter((n, s, i) => !!n && n.trim() !== "" && i.indexOf(n) === s).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Cv = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = C.forwardRef(({
    color: r = "currentColor",
    size: n = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: i,
    className: a = "",
    children: d,
    iconNode: h,
    ...p
}, g) => C.createElement("svg", {
    ref: g,
    ...Cv,
    width: n,
    height: n,
    stroke: r,
    strokeWidth: i ? Number(s) * 24 / Number(n) : s,
    className: Nm("lucide", a),
    ...p
}, [...h.map(([y, v]) => C.createElement(y, v)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = (r, n) => {
    const s = C.forwardRef(({
        className: i,
        ...a
    }, d) => C.createElement(_v, {
        ref: d,
        iconNode: n,
        className: Nm(`lucide-${jv(r)}`, i),
        ...a
    }));
    return s.displayName = `${r}`, s
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rv = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    fr = Oe("ArrowRight", Rv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tv = [
        ["path", {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }],
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }]
    ],
    Ac = Oe("Award", Tv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pv = [
        ["path", {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }],
        ["path", {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }]
    ],
    Ct = Oe("CircleCheckBig", Pv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ],
    Rl = Oe("Clock", Ov);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = [
        ["path", {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir"
        }]
    ],
    Lv = Oe("Cloud", Av);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = [
        ["path", {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }],
        ["path", {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }],
        ["path", {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }]
    ],
    Ao = Oe("CodeXml", Mv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = [
        ["polyline", {
            points: "16 18 22 12 16 6",
            key: "z7tu5w"
        }],
        ["polyline", {
            points: "8 6 2 12 8 18",
            key: "1eg1df"
        }]
    ],
    Dv = Oe("Code", Fv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = [
        ["path", {
            d: "M10 2v2",
            key: "7u0qdc"
        }],
        ["path", {
            d: "M14 2v2",
            key: "6buw04"
        }],
        ["path", {
            d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
            key: "pwadti"
        }],
        ["path", {
            d: "M6 2v2",
            key: "colzsn"
        }]
    ],
    zv = Oe("Coffee", Iv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uv = [
        ["ellipse", {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }],
        ["path", {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }],
        ["path", {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }]
    ],
    Bv = Oe("Database", Uv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $v = [
        ["path", {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }]
    ],
    Em = Oe("Heart", $v);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wv = [
        ["path", {
            d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
            key: "tarvll"
        }]
    ],
    Vv = Oe("Laptop", Wv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hv = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    qv = Oe("Lock", Hv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qv = [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ],
    Lc = Oe("Mail", Qv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kv = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    Mc = Oe("MapPin", Kv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gv = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    Yv = Oe("Menu", Gv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jv = [
        ["path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }]
    ],
    Xv = Oe("MessageSquare", Jv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zv = [
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["path", {
            d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
            key: "12rzf8"
        }]
    ],
    Tl = Oe("Palette", Zv);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]
    ],
    jm = Oe("Phone", ex);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = [
        ["path", {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }],
        ["path", {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }],
        ["path", {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }],
        ["path", {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }]
    ],
    Cm = Oe("Rocket", tx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = [
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }],
        ["path", {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }]
    ],
    rx = Oe("Search", nx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    ox = Oe("Send", sx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ],
    lx = Oe("Shield", ix);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = [
        ["circle", {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }],
        ["circle", {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }],
        ["path", {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }]
    ],
    _m = Oe("ShoppingCart", ax);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ux = [
        ["rect", {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3"
        }],
        ["path", {
            d: "M12 18h.01",
            key: "mhygvu"
        }]
    ],
    Fc = Oe("Smartphone", ux);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = [
        ["path", {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }],
        ["path", {
            d: "M20 3v4",
            key: "1olli1"
        }],
        ["path", {
            d: "M22 5h-4",
            key: "1gvqau"
        }],
        ["path", {
            d: "M4 17v2",
            key: "vumght"
        }],
        ["path", {
            d: "M5 18H3",
            key: "zchphs"
        }]
    ],
    Dc = Oe("Sparkles", cx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dx = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]
    ],
    fx = Oe("Target", dx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hx = [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ],
    px = Oe("TrendingUp", hx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["path", {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }]
    ],
    Ic = Oe("Users", mx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [
        ["path", {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi"
        }]
    ],
    zc = Oe("Wrench", gx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    Rm = Oe("X", yx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vx = [
        ["path", {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }]
    ],
    Tm = Oe("Zap", vx),
    Uc = "-",
    xx = r => {
        const n = bx(r),
            {
                conflictingClassGroups: s,
                conflictingClassGroupModifiers: i
            } = r;
        return {
            getClassGroupId: h => {
                const p = h.split(Uc);
                return p[0] === "" && p.length !== 1 && p.shift(), Pm(p, n) || wx(h)
            },
            getConflictingClassGroupIds: (h, p) => {
                const g = s[h] || [];
                return p && i[h] ? [...g, ...i[h]] : g
            }
        }
    },
    Pm = (r, n) => {
        var h;
        if (r.length === 0) return n.classGroupId;
        const s = r[0],
            i = n.nextPart.get(s),
            a = i ? Pm(r.slice(1), i) : void 0;
        if (a) return a;
        if (n.validators.length === 0) return;
        const d = r.join(Uc);
        return (h = n.validators.find(({
            validator: p
        }) => p(d))) == null ? void 0 : h.classGroupId
    },
    fp = /^\[(.+)\]$/,
    wx = r => {
        if (fp.test(r)) {
            const n = fp.exec(r)[1],
                s = n == null ? void 0 : n.substring(0, n.indexOf(":"));
            if (s) return "arbitrary.." + s
        }
    },
    bx = r => {
        const {
            theme: n,
            classGroups: s
        } = r, i = {
            nextPart: new Map,
            validators: []
        };
        for (const a in s) ec(s[a], i, a, n);
        return i
    },
    ec = (r, n, s, i) => {
        r.forEach(a => {
            if (typeof a == "string") {
                const d = a === "" ? n : hp(n, a);
                d.classGroupId = s;
                return
            }
            if (typeof a == "function") {
                if (kx(a)) {
                    ec(a(i), n, s, i);
                    return
                }
                n.validators.push({
                    validator: a,
                    classGroupId: s
                });
                return
            }
            Object.entries(a).forEach(([d, h]) => {
                ec(h, hp(n, d), s, i)
            })
        })
    },
    hp = (r, n) => {
        let s = r;
        return n.split(Uc).forEach(i => {
            s.nextPart.has(i) || s.nextPart.set(i, {
                nextPart: new Map,
                validators: []
            }), s = s.nextPart.get(i)
        }), s
    },
    kx = r => r.isThemeGetter,
    Sx = r => {
        if (r < 1) return {
            get: () => {},
            set: () => {}
        };
        let n = 0,
            s = new Map,
            i = new Map;
        const a = (d, h) => {
            s.set(d, h), n++, n > r && (n = 0, i = s, s = new Map)
        };
        return {
            get(d) {
                let h = s.get(d);
                if (h !== void 0) return h;
                if ((h = i.get(d)) !== void 0) return a(d, h), h
            },
            set(d, h) {
                s.has(d) ? s.set(d, h) : a(d, h)
            }
        }
    },
    tc = "!",
    nc = ":",
    Nx = nc.length,
    Ex = r => {
        const {
            prefix: n,
            experimentalParseClassName: s
        } = r;
        let i = a => {
            const d = [];
            let h = 0,
                p = 0,
                g = 0,
                y;
            for (let k = 0; k < a.length; k++) {
                let E = a[k];
                if (h === 0 && p === 0) {
                    if (E === nc) {
                        d.push(a.slice(g, k)), g = k + Nx;
                        continue
                    }
                    if (E === "/") {
                        y = k;
                        continue
                    }
                }
                E === "[" ? h++ : E === "]" ? h-- : E === "(" ? p++ : E === ")" && p--
            }
            const v = d.length === 0 ? a : a.substring(g),
                w = jx(v),
                R = w !== v,
                T = y && y > g ? y - g : void 0;
            return {
                modifiers: d,
                hasImportantModifier: R,
                baseClassName: w,
                maybePostfixModifierPosition: T
            }
        };
        if (n) {
            const a = n + nc,
                d = i;
            i = h => h.startsWith(a) ? d(h.substring(a.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: h,
                maybePostfixModifierPosition: void 0
            }
        }
        if (s) {
            const a = i;
            i = d => s({
                className: d,
                parseClassName: a
            })
        }
        return i
    },
    jx = r => r.endsWith(tc) ? r.substring(0, r.length - 1) : r.startsWith(tc) ? r.substring(1) : r,
    Cx = r => {
        const n = Object.fromEntries(r.orderSensitiveModifiers.map(i => [i, !0]));
        return i => {
            if (i.length <= 1) return i;
            const a = [];
            let d = [];
            return i.forEach(h => {
                h[0] === "[" || n[h] ? (a.push(...d.sort(), h), d = []) : d.push(h)
            }), a.push(...d.sort()), a
        }
    },
    _x = r => ({
        cache: Sx(r.cacheSize),
        parseClassName: Ex(r),
        sortModifiers: Cx(r),
        ...xx(r)
    }),
    Rx = /\s+/,
    Tx = (r, n) => {
        const {
            parseClassName: s,
            getClassGroupId: i,
            getConflictingClassGroupIds: a,
            sortModifiers: d
        } = n, h = [], p = r.trim().split(Rx);
        let g = "";
        for (let y = p.length - 1; y >= 0; y -= 1) {
            const v = p[y],
                {
                    isExternal: w,
                    modifiers: R,
                    hasImportantModifier: T,
                    baseClassName: k,
                    maybePostfixModifierPosition: E
                } = s(v);
            if (w) {
                g = v + (g.length > 0 ? " " + g : g);
                continue
            }
            let b = !!E,
                M = i(b ? k.substring(0, E) : k);
            if (!M) {
                if (!b) {
                    g = v + (g.length > 0 ? " " + g : g);
                    continue
                }
                if (M = i(k), !M) {
                    g = v + (g.length > 0 ? " " + g : g);
                    continue
                }
                b = !1
            }
            const q = d(R).join(":"),
                I = T ? q + tc : q,
                z = I + M;
            if (h.includes(z)) continue;
            h.push(z);
            const G = a(M, b);
            for (let ce = 0; ce < G.length; ++ce) {
                const ge = G[ce];
                h.push(I + ge)
            }
            g = v + (g.length > 0 ? " " + g : g)
        }
        return g
    };

function Px() {
    let r = 0,
        n, s, i = "";
    for (; r < arguments.length;)(n = arguments[r++]) && (s = Om(n)) && (i && (i += " "), i += s);
    return i
}
const Om = r => {
    if (typeof r == "string") return r;
    let n, s = "";
    for (let i = 0; i < r.length; i++) r[i] && (n = Om(r[i])) && (s && (s += " "), s += n);
    return s
};

function Ox(r, ...n) {
    let s, i, a, d = h;

    function h(g) {
        const y = n.reduce((v, w) => w(v), r());
        return s = _x(y), i = s.cache.get, a = s.cache.set, d = p, p(g)
    }

    function p(g) {
        const y = i(g);
        if (y) return y;
        const v = Tx(g, s);
        return a(g, v), v
    }
    return function() {
        return d(Px.apply(null, arguments))
    }
}
const Ze = r => {
        const n = s => s[r] || [];
        return n.isThemeGetter = !0, n
    },
    Am = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Lm = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    Ax = /^\d+\/\d+$/,
    Lx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    Mx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Fx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    Dx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Ix = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    hs = r => Ax.test(r),
    ke = r => !!r && !Number.isNaN(Number(r)),
    Zn = r => !!r && Number.isInteger(Number(r)),
    Bu = r => r.endsWith("%") && ke(r.slice(0, -1)),
    Nn = r => Lx.test(r),
    zx = () => !0,
    Ux = r => Mx.test(r) && !Fx.test(r),
    Mm = () => !1,
    Bx = r => Dx.test(r),
    $x = r => Ix.test(r),
    Wx = r => !ne(r) && !re(r),
    Vx = r => Rs(r, Im, Mm),
    ne = r => Am.test(r),
    Cr = r => Rs(r, zm, Ux),
    $u = r => Rs(r, Gx, ke),
    pp = r => Rs(r, Fm, Mm),
    Hx = r => Rs(r, Dm, $x),
    ll = r => Rs(r, Um, Bx),
    re = r => Lm.test(r),
    So = r => Ts(r, zm),
    qx = r => Ts(r, Yx),
    mp = r => Ts(r, Fm),
    Qx = r => Ts(r, Im),
    Kx = r => Ts(r, Dm),
    al = r => Ts(r, Um, !0),
    Rs = (r, n, s) => {
        const i = Am.exec(r);
        return i ? i[1] ? n(i[1]) : s(i[2]) : !1
    },
    Ts = (r, n, s = !1) => {
        const i = Lm.exec(r);
        return i ? i[1] ? n(i[1]) : s : !1
    },
    Fm = r => r === "position" || r === "percentage",
    Dm = r => r === "image" || r === "url",
    Im = r => r === "length" || r === "size" || r === "bg-size",
    zm = r => r === "length",
    Gx = r => r === "number",
    Yx = r => r === "family-name",
    Um = r => r === "shadow",
    Jx = () => {
        const r = Ze("color"),
            n = Ze("font"),
            s = Ze("text"),
            i = Ze("font-weight"),
            a = Ze("tracking"),
            d = Ze("leading"),
            h = Ze("breakpoint"),
            p = Ze("container"),
            g = Ze("spacing"),
            y = Ze("radius"),
            v = Ze("shadow"),
            w = Ze("inset-shadow"),
            R = Ze("text-shadow"),
            T = Ze("drop-shadow"),
            k = Ze("blur"),
            E = Ze("perspective"),
            b = Ze("aspect"),
            M = Ze("ease"),
            q = Ze("animate"),
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            z = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            G = () => [...z(), re, ne],
            ce = () => ["auto", "hidden", "clip", "visible", "scroll"],
            ge = () => ["auto", "contain", "none"],
            F = () => [re, ne, g],
            V = () => [hs, "full", "auto", ...F()],
            K = () => [Zn, "none", "subgrid", re, ne],
            Z = () => ["auto", {
                span: ["full", Zn, re, ne]
            }, Zn, re, ne],
            B = () => [Zn, "auto", re, ne],
            se = () => ["auto", "min", "max", "fr", re, ne],
            _e = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            pe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            de = () => ["auto", ...F()],
            we = () => [hs, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...F()],
            D = () => [r, re, ne],
            ae = () => [...z(), mp, pp, {
                position: [re, ne]
            }],
            Y = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            _ = () => ["auto", "cover", "contain", Qx, Vx, {
                size: [re, ne]
            }],
            U = () => [Bu, So, Cr],
            le = () => ["", "none", "full", y, re, ne],
            ue = () => ["", ke, So, Cr],
            be = () => ["solid", "dashed", "dotted", "double"],
            Ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ve = () => [ke, Bu, mp, pp],
            Te = () => ["", "none", k, re, ne],
            Le = () => ["none", ke, re, ne],
            tt = () => ["none", ke, re, ne],
            An = () => [ke, re, ne],
            hr = () => [hs, "full", ...F()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Nn],
                breakpoint: [Nn],
                color: [zx],
                container: [Nn],
                "drop-shadow": [Nn],
                ease: ["in", "out", "in-out"],
                font: [Wx],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Nn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Nn],
                shadow: [Nn],
                spacing: ["px", ke],
                text: [Nn],
                "text-shadow": [Nn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", hs, ne, re, b]
                }],
                container: ["container"],
                columns: [{
                    columns: [ke, ne, re, p]
                }],
                "break-after": [{
                    "break-after": I()
                }],
                "break-before": [{
                    "break-before": I()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: G()
                }],
                overflow: [{
                    overflow: ce()
                }],
                "overflow-x": [{
                    "overflow-x": ce()
                }],
                "overflow-y": [{
                    "overflow-y": ce()
                }],
                overscroll: [{
                    overscroll: ge()
                }],
                "overscroll-x": [{
                    "overscroll-x": ge()
                }],
                "overscroll-y": [{
                    "overscroll-y": ge()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: V()
                }],
                "inset-x": [{
                    "inset-x": V()
                }],
                "inset-y": [{
                    "inset-y": V()
                }],
                start: [{
                    start: V()
                }],
                end: [{
                    end: V()
                }],
                top: [{
                    top: V()
                }],
                right: [{
                    right: V()
                }],
                bottom: [{
                    bottom: V()
                }],
                left: [{
                    left: V()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [Zn, "auto", re, ne]
                }],
                basis: [{
                    basis: [hs, "full", "auto", p, ...F()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [ke, hs, "auto", "initial", "none", ne]
                }],
                grow: [{
                    grow: ["", ke, re, ne]
                }],
                shrink: [{
                    shrink: ["", ke, re, ne]
                }],
                order: [{
                    order: [Zn, "first", "last", "none", re, ne]
                }],
                "grid-cols": [{
                    "grid-cols": K()
                }],
                "col-start-end": [{
                    col: Z()
                }],
                "col-start": [{
                    "col-start": B()
                }],
                "col-end": [{
                    "col-end": B()
                }],
                "grid-rows": [{
                    "grid-rows": K()
                }],
                "row-start-end": [{
                    row: Z()
                }],
                "row-start": [{
                    "row-start": B()
                }],
                "row-end": [{
                    "row-end": B()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": se()
                }],
                "auto-rows": [{
                    "auto-rows": se()
                }],
                gap: [{
                    gap: F()
                }],
                "gap-x": [{
                    "gap-x": F()
                }],
                "gap-y": [{
                    "gap-y": F()
                }],
                "justify-content": [{
                    justify: [..._e(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...pe(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...pe()]
                }],
                "align-content": [{
                    content: ["normal", ..._e()]
                }],
                "align-items": [{
                    items: [...pe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...pe(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": _e()
                }],
                "place-items": [{
                    "place-items": [...pe(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...pe()]
                }],
                p: [{
                    p: F()
                }],
                px: [{
                    px: F()
                }],
                py: [{
                    py: F()
                }],
                ps: [{
                    ps: F()
                }],
                pe: [{
                    pe: F()
                }],
                pt: [{
                    pt: F()
                }],
                pr: [{
                    pr: F()
                }],
                pb: [{
                    pb: F()
                }],
                pl: [{
                    pl: F()
                }],
                m: [{
                    m: de()
                }],
                mx: [{
                    mx: de()
                }],
                my: [{
                    my: de()
                }],
                ms: [{
                    ms: de()
                }],
                me: [{
                    me: de()
                }],
                mt: [{
                    mt: de()
                }],
                mr: [{
                    mr: de()
                }],
                mb: [{
                    mb: de()
                }],
                ml: [{
                    ml: de()
                }],
                "space-x": [{
                    "space-x": F()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": F()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: we()
                }],
                w: [{
                    w: [p, "screen", ...we()]
                }],
                "min-w": [{
                    "min-w": [p, "screen", "none", ...we()]
                }],
                "max-w": [{
                    "max-w": [p, "screen", "none", "prose", {
                        screen: [h]
                    }, ...we()]
                }],
                h: [{
                    h: ["screen", "lh", ...we()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...we()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...we()]
                }],
                "font-size": [{
                    text: ["base", s, So, Cr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [i, re, $u]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Bu, ne]
                }],
                "font-family": [{
                    font: [qx, ne, n]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [a, re, ne]
                }],
                "line-clamp": [{
                    "line-clamp": [ke, "none", re, $u]
                }],
                leading: [{
                    leading: [d, ...F()]
                }],
                "list-image": [{
                    "list-image": ["none", re, ne]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", re, ne]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: D()
                }],
                "text-color": [{
                    text: D()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...be(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [ke, "from-font", "auto", re, Cr]
                }],
                "text-decoration-color": [{
                    decoration: D()
                }],
                "underline-offset": [{
                    "underline-offset": [ke, "auto", re, ne]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: F()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", re, ne]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", re, ne]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: ae()
                }],
                "bg-repeat": [{
                    bg: Y()
                }],
                "bg-size": [{
                    bg: _()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, Zn, re, ne],
                        radial: ["", re, ne],
                        conic: [Zn, re, ne]
                    }, Kx, Hx]
                }],
                "bg-color": [{
                    bg: D()
                }],
                "gradient-from-pos": [{
                    from: U()
                }],
                "gradient-via-pos": [{
                    via: U()
                }],
                "gradient-to-pos": [{
                    to: U()
                }],
                "gradient-from": [{
                    from: D()
                }],
                "gradient-via": [{
                    via: D()
                }],
                "gradient-to": [{
                    to: D()
                }],
                rounded: [{
                    rounded: le()
                }],
                "rounded-s": [{
                    "rounded-s": le()
                }],
                "rounded-e": [{
                    "rounded-e": le()
                }],
                "rounded-t": [{
                    "rounded-t": le()
                }],
                "rounded-r": [{
                    "rounded-r": le()
                }],
                "rounded-b": [{
                    "rounded-b": le()
                }],
                "rounded-l": [{
                    "rounded-l": le()
                }],
                "rounded-ss": [{
                    "rounded-ss": le()
                }],
                "rounded-se": [{
                    "rounded-se": le()
                }],
                "rounded-ee": [{
                    "rounded-ee": le()
                }],
                "rounded-es": [{
                    "rounded-es": le()
                }],
                "rounded-tl": [{
                    "rounded-tl": le()
                }],
                "rounded-tr": [{
                    "rounded-tr": le()
                }],
                "rounded-br": [{
                    "rounded-br": le()
                }],
                "rounded-bl": [{
                    "rounded-bl": le()
                }],
                "border-w": [{
                    border: ue()
                }],
                "border-w-x": [{
                    "border-x": ue()
                }],
                "border-w-y": [{
                    "border-y": ue()
                }],
                "border-w-s": [{
                    "border-s": ue()
                }],
                "border-w-e": [{
                    "border-e": ue()
                }],
                "border-w-t": [{
                    "border-t": ue()
                }],
                "border-w-r": [{
                    "border-r": ue()
                }],
                "border-w-b": [{
                    "border-b": ue()
                }],
                "border-w-l": [{
                    "border-l": ue()
                }],
                "divide-x": [{
                    "divide-x": ue()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": ue()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...be(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...be(), "hidden", "none"]
                }],
                "border-color": [{
                    border: D()
                }],
                "border-color-x": [{
                    "border-x": D()
                }],
                "border-color-y": [{
                    "border-y": D()
                }],
                "border-color-s": [{
                    "border-s": D()
                }],
                "border-color-e": [{
                    "border-e": D()
                }],
                "border-color-t": [{
                    "border-t": D()
                }],
                "border-color-r": [{
                    "border-r": D()
                }],
                "border-color-b": [{
                    "border-b": D()
                }],
                "border-color-l": [{
                    "border-l": D()
                }],
                "divide-color": [{
                    divide: D()
                }],
                "outline-style": [{
                    outline: [...be(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [ke, re, ne]
                }],
                "outline-w": [{
                    outline: ["", ke, So, Cr]
                }],
                "outline-color": [{
                    outline: D()
                }],
                shadow: [{
                    shadow: ["", "none", v, al, ll]
                }],
                "shadow-color": [{
                    shadow: D()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", w, al, ll]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": D()
                }],
                "ring-w": [{
                    ring: ue()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: D()
                }],
                "ring-offset-w": [{
                    "ring-offset": [ke, Cr]
                }],
                "ring-offset-color": [{
                    "ring-offset": D()
                }],
                "inset-ring-w": [{
                    "inset-ring": ue()
                }],
                "inset-ring-color": [{
                    "inset-ring": D()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", R, al, ll]
                }],
                "text-shadow-color": [{
                    "text-shadow": D()
                }],
                opacity: [{
                    opacity: [ke, re, ne]
                }],
                "mix-blend": [{
                    "mix-blend": [...Ne(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": Ne()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [ke]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ve()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ve()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": D()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": D()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ve()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ve()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": D()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": D()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ve()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ve()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": D()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": D()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ve()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ve()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": D()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": D()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ve()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ve()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": D()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": D()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ve()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ve()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": D()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": D()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ve()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ve()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": D()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": D()
                }],
                "mask-image-radial": [{
                    "mask-radial": [re, ne]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ve()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ve()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": D()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": D()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": z()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [ke]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ve()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ve()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": D()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": D()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: ae()
                }],
                "mask-repeat": [{
                    mask: Y()
                }],
                "mask-size": [{
                    mask: _()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", re, ne]
                }],
                filter: [{
                    filter: ["", "none", re, ne]
                }],
                blur: [{
                    blur: Te()
                }],
                brightness: [{
                    brightness: [ke, re, ne]
                }],
                contrast: [{
                    contrast: [ke, re, ne]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", T, al, ll]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": D()
                }],
                grayscale: [{
                    grayscale: ["", ke, re, ne]
                }],
                "hue-rotate": [{
                    "hue-rotate": [ke, re, ne]
                }],
                invert: [{
                    invert: ["", ke, re, ne]
                }],
                saturate: [{
                    saturate: [ke, re, ne]
                }],
                sepia: [{
                    sepia: ["", ke, re, ne]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", re, ne]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": Te()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [ke, re, ne]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [ke, re, ne]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", ke, re, ne]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [ke, re, ne]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", ke, re, ne]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [ke, re, ne]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [ke, re, ne]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", ke, re, ne]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": F()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": F()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": F()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", re, ne]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [ke, "initial", re, ne]
                }],
                ease: [{
                    ease: ["linear", "initial", M, re, ne]
                }],
                delay: [{
                    delay: [ke, re, ne]
                }],
                animate: [{
                    animate: ["none", q, re, ne]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [E, re, ne]
                }],
                "perspective-origin": [{
                    "perspective-origin": G()
                }],
                rotate: [{
                    rotate: Le()
                }],
                "rotate-x": [{
                    "rotate-x": Le()
                }],
                "rotate-y": [{
                    "rotate-y": Le()
                }],
                "rotate-z": [{
                    "rotate-z": Le()
                }],
                scale: [{
                    scale: tt()
                }],
                "scale-x": [{
                    "scale-x": tt()
                }],
                "scale-y": [{
                    "scale-y": tt()
                }],
                "scale-z": [{
                    "scale-z": tt()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: An()
                }],
                "skew-x": [{
                    "skew-x": An()
                }],
                "skew-y": [{
                    "skew-y": An()
                }],
                transform: [{
                    transform: [re, ne, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: G()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: hr()
                }],
                "translate-x": [{
                    "translate-x": hr()
                }],
                "translate-y": [{
                    "translate-y": hr()
                }],
                "translate-z": [{
                    "translate-z": hr()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: D()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: D()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re, ne]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": F()
                }],
                "scroll-mx": [{
                    "scroll-mx": F()
                }],
                "scroll-my": [{
                    "scroll-my": F()
                }],
                "scroll-ms": [{
                    "scroll-ms": F()
                }],
                "scroll-me": [{
                    "scroll-me": F()
                }],
                "scroll-mt": [{
                    "scroll-mt": F()
                }],
                "scroll-mr": [{
                    "scroll-mr": F()
                }],
                "scroll-mb": [{
                    "scroll-mb": F()
                }],
                "scroll-ml": [{
                    "scroll-ml": F()
                }],
                "scroll-p": [{
                    "scroll-p": F()
                }],
                "scroll-px": [{
                    "scroll-px": F()
                }],
                "scroll-py": [{
                    "scroll-py": F()
                }],
                "scroll-ps": [{
                    "scroll-ps": F()
                }],
                "scroll-pe": [{
                    "scroll-pe": F()
                }],
                "scroll-pt": [{
                    "scroll-pt": F()
                }],
                "scroll-pr": [{
                    "scroll-pr": F()
                }],
                "scroll-pb": [{
                    "scroll-pb": F()
                }],
                "scroll-pl": [{
                    "scroll-pl": F()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", re, ne]
                }],
                fill: [{
                    fill: ["none", ...D()]
                }],
                "stroke-w": [{
                    stroke: [ke, So, Cr, $u]
                }],
                stroke: [{
                    stroke: ["none", ...D()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Bm = Ox(Jx);

function Pn(...r) {
    return Bm(Sm(r))
}
const Xx = window.self !== window.top,
    $m = C.forwardRef(({ ...r
    }, n) => c.jsx("div", {
        ref: n,
        className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        ...r
    }));
$m.displayName = "ToastProvider";
const Wm = C.forwardRef(({ ...r
}, n) => c.jsx("div", {
    ref: n,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...r
}));
Wm.displayName = "ToastViewport";
const Zx = Oc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    Vm = C.forwardRef(({
        className: r,
        variant: n,
        ...s
    }, i) => c.jsx("div", {
        ref: i,
        className: Pn(Zx({
            variant: n
        }), r),
        ...s
    }));
Vm.displayName = "Toast";
const ew = C.forwardRef(({
    className: r,
    ...n
}, s) => c.jsx("div", {
    ref: s,
    className: Pn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
    ...n
}));
ew.displayName = "ToastAction";
const Hm = C.forwardRef(({
    className: r,
    ...n
}, s) => c.jsx("button", {
    ref: s,
    className: Pn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
    "toast-close": "",
    ...n,
    children: c.jsx(Rm, {
        className: "h-4 w-4"
    })
}));
Hm.displayName = "ToastClose";
const qm = C.forwardRef(({
    className: r,
    ...n
}, s) => c.jsx("div", {
    ref: s,
    className: Pn("text-sm font-semibold", r),
    ...n
}));
qm.displayName = "ToastTitle";
const Qm = C.forwardRef(({
    className: r,
    ...n
}, s) => c.jsx("div", {
    ref: s,
    className: Pn("text-sm opacity-90", r),
    ...n
}));
Qm.displayName = "ToastDescription";

function tw() {
    const {
        toasts: r
    } = Ev();
    return c.jsxs($m, {
        children: [r.map(function({
            id: n,
            title: s,
            description: i,
            action: a,
            ...d
        }) {
            return c.jsxs(Vm, { ...d,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [s && c.jsx(qm, {
                        children: s
                    }), i && c.jsx(Qm, {
                        children: i
                    })]
                }), a, c.jsx(Hm, {})]
            }, n)
        }), c.jsx(Wm, {})]
    })
}
var $o = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(r) {
            return this.listeners.add(r), this.onSubscribe(), () => {
                this.listeners.delete(r), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    nw = {
        setTimeout: (r, n) => setTimeout(r, n),
        clearTimeout: r => clearTimeout(r),
        setInterval: (r, n) => setInterval(r, n),
        clearInterval: r => clearInterval(r)
    },
    nr, Tc, dm, rw = (dm = class {
        constructor() {
            me(this, nr, nw);
            me(this, Tc, !1)
        }
        setTimeoutProvider(r) {
            X(this, nr, r)
        }
        setTimeout(r, n) {
            return N(this, nr).setTimeout(r, n)
        }
        clearTimeout(r) {
            N(this, nr).clearTimeout(r)
        }
        setInterval(r, n) {
            return N(this, nr).setInterval(r, n)
        }
        clearInterval(r) {
            N(this, nr).clearInterval(r)
        }
    }, nr = new WeakMap, Tc = new WeakMap, dm),
    _r = new rw;

function sw(r) {
    setTimeout(r, 0)
}
var Ur = typeof window > "u" || "Deno" in globalThis;

function _t() {}

function ow(r, n) {
    return typeof r == "function" ? r(n) : r
}

function rc(r) {
    return typeof r == "number" && r >= 0 && r !== 1 / 0
}

function Km(r, n) {
    return Math.max(r + (n || 0) - Date.now(), 0)
}

function cr(r, n) {
    return typeof r == "function" ? r(n) : r
}

function $t(r, n) {
    return typeof r == "function" ? r(n) : r
}

function gp(r, n) {
    const {
        type: s = "all",
        exact: i,
        fetchStatus: a,
        predicate: d,
        queryKey: h,
        stale: p
    } = r;
    if (h) {
        if (i) {
            if (n.queryHash !== Bc(h, n.options)) return !1
        } else if (!Mo(n.queryKey, h)) return !1
    }
    if (s !== "all") {
        const g = n.isActive();
        if (s === "active" && !g || s === "inactive" && g) return !1
    }
    return !(typeof p == "boolean" && n.isStale() !== p || a && a !== n.state.fetchStatus || d && !d(n))
}

function yp(r, n) {
    const {
        exact: s,
        status: i,
        predicate: a,
        mutationKey: d
    } = r;
    if (d) {
        if (!n.options.mutationKey) return !1;
        if (s) {
            if (Lo(n.options.mutationKey) !== Lo(d)) return !1
        } else if (!Mo(n.options.mutationKey, d)) return !1
    }
    return !(i && n.state.status !== i || a && !a(n))
}

function Bc(r, n) {
    return ((n == null ? void 0 : n.queryKeyHashFn) || Lo)(r)
}

function Lo(r) {
    return JSON.stringify(r, (n, s) => oc(s) ? Object.keys(s).sort().reduce((i, a) => (i[a] = s[a], i), {}) : s)
}

function Mo(r, n) {
    return r === n ? !0 : typeof r != typeof n ? !1 : r && n && typeof r == "object" && typeof n == "object" ? Object.keys(n).every(s => Mo(r[s], n[s])) : !1
}
var iw = Object.prototype.hasOwnProperty;

function Gm(r, n) {
    if (r === n) return r;
    const s = vp(r) && vp(n);
    if (!s && !(oc(r) && oc(n))) return n;
    const a = (s ? r : Object.keys(r)).length,
        d = s ? n : Object.keys(n),
        h = d.length,
        p = s ? new Array(h) : {};
    let g = 0;
    for (let y = 0; y < h; y++) {
        const v = s ? y : d[y],
            w = r[v],
            R = n[v];
        if (w === R) {
            p[v] = w, (s ? y < a : iw.call(r, v)) && g++;
            continue
        }
        if (w === null || R === null || typeof w != "object" || typeof R != "object") {
            p[v] = R;
            continue
        }
        const T = Gm(w, R);
        p[v] = T, T === w && g++
    }
    return a === h && g === a ? r : p
}

function sc(r, n) {
    if (!n || Object.keys(r).length !== Object.keys(n).length) return !1;
    for (const s in r)
        if (r[s] !== n[s]) return !1;
    return !0
}

function vp(r) {
    return Array.isArray(r) && r.length === Object.keys(r).length
}

function oc(r) {
    if (!xp(r)) return !1;
    const n = r.constructor;
    if (n === void 0) return !0;
    const s = n.prototype;
    return !(!xp(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype)
}

function xp(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}

function lw(r) {
    return new Promise(n => {
        _r.setTimeout(n, r)
    })
}

function ic(r, n, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(r, n) : s.structuralSharing !== !1 ? Gm(r, n) : n
}

function aw(r, n, s = 0) {
    const i = [...r, n];
    return s && i.length > s ? i.slice(1) : i
}

function uw(r, n, s = 0) {
    const i = [n, ...r];
    return s && i.length > s ? i.slice(0, -1) : i
}
var $c = Symbol();

function Ym(r, n) {
    return !r.queryFn && (n != null && n.initialPromise) ? () => n.initialPromise : !r.queryFn || r.queryFn === $c ? () => Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)) : r.queryFn
}

function cw(r, n) {
    return typeof r == "function" ? r(...n) : !!r
}
var Tr, rr, gs, fm, dw = (fm = class extends $o {
        constructor() {
            super();
            me(this, Tr);
            me(this, rr);
            me(this, gs);
            X(this, gs, n => {
                if (!Ur && window.addEventListener) {
                    const s = () => n();
                    return window.addEventListener("visibilitychange", s, !1), () => {
                        window.removeEventListener("visibilitychange", s)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, rr) || this.setEventListener(N(this, gs))
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || ((n = N(this, rr)) == null || n.call(this), X(this, rr, void 0))
        }
        setEventListener(n) {
            var s;
            X(this, gs, n), (s = N(this, rr)) == null || s.call(this), X(this, rr, n(i => {
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
            }))
        }
        setFocused(n) {
            N(this, Tr) !== n && (X(this, Tr, n), this.onFocus())
        }
        onFocus() {
            const n = this.isFocused();
            this.listeners.forEach(s => {
                s(n)
            })
        }
        isFocused() {
            var n;
            return typeof N(this, Tr) == "boolean" ? N(this, Tr) : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !== "hidden"
        }
    }, Tr = new WeakMap, rr = new WeakMap, gs = new WeakMap, fm),
    Wc = new dw;

function lc() {
    let r, n;
    const s = new Promise((a, d) => {
        r = a, n = d
    });
    s.status = "pending", s.catch(() => {});

    function i(a) {
        Object.assign(s, a), delete s.resolve, delete s.reject
    }
    return s.resolve = a => {
        i({
            status: "fulfilled",
            value: a
        }), r(a)
    }, s.reject = a => {
        i({
            status: "rejected",
            reason: a
        }), n(a)
    }, s
}
var fw = sw;

function hw() {
    let r = [],
        n = 0,
        s = p => {
            p()
        },
        i = p => {
            p()
        },
        a = fw;
    const d = p => {
            n ? r.push(p) : a(() => {
                s(p)
            })
        },
        h = () => {
            const p = r;
            r = [], p.length && a(() => {
                i(() => {
                    p.forEach(g => {
                        s(g)
                    })
                })
            })
        };
    return {
        batch: p => {
            let g;
            n++;
            try {
                g = p()
            } finally {
                n--, n || h()
            }
            return g
        },
        batchCalls: p => (...g) => {
            d(() => {
                p(...g)
            })
        },
        schedule: d,
        setNotifyFunction: p => {
            s = p
        },
        setBatchNotifyFunction: p => {
            i = p
        },
        setScheduler: p => {
            a = p
        }
    }
}
var ut = hw(),
    ys, sr, vs, hm, pw = (hm = class extends $o {
        constructor() {
            super();
            me(this, ys, !0);
            me(this, sr);
            me(this, vs);
            X(this, vs, n => {
                if (!Ur && window.addEventListener) {
                    const s = () => n(!0),
                        i = () => n(!1);
                    return window.addEventListener("online", s, !1), window.addEventListener("offline", i, !1), () => {
                        window.removeEventListener("online", s), window.removeEventListener("offline", i)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, sr) || this.setEventListener(N(this, vs))
        }
        onUnsubscribe() {
            var n;
            this.hasListeners() || ((n = N(this, sr)) == null || n.call(this), X(this, sr, void 0))
        }
        setEventListener(n) {
            var s;
            X(this, vs, n), (s = N(this, sr)) == null || s.call(this), X(this, sr, n(this.setOnline.bind(this)))
        }
        setOnline(n) {
            N(this, ys) !== n && (X(this, ys, n), this.listeners.forEach(i => {
                i(n)
            }))
        }
        isOnline() {
            return N(this, ys)
        }
    }, ys = new WeakMap, sr = new WeakMap, vs = new WeakMap, hm),
    jl = new pw;

function mw(r) {
    return Math.min(1e3 * 2 ** r, 3e4)
}

function Jm(r) {
    return (r ? ? "online") === "online" ? jl.isOnline() : !0
}
var ac = class extends Error {
    constructor(r) {
        super("CancelledError"), this.revert = r == null ? void 0 : r.revert, this.silent = r == null ? void 0 : r.silent
    }
};

function Xm(r) {
    let n = !1,
        s = 0,
        i;
    const a = lc(),
        d = () => a.status !== "pending",
        h = E => {
            var b;
            if (!d()) {
                const M = new ac(E);
                R(M), (b = r.onCancel) == null || b.call(r, M)
            }
        },
        p = () => {
            n = !0
        },
        g = () => {
            n = !1
        },
        y = () => Wc.isFocused() && (r.networkMode === "always" || jl.isOnline()) && r.canRun(),
        v = () => Jm(r.networkMode) && r.canRun(),
        w = E => {
            d() || (i == null || i(), a.resolve(E))
        },
        R = E => {
            d() || (i == null || i(), a.reject(E))
        },
        T = () => new Promise(E => {
            var b;
            i = M => {
                (d() || y()) && E(M)
            }, (b = r.onPause) == null || b.call(r)
        }).then(() => {
            var E;
            i = void 0, d() || (E = r.onContinue) == null || E.call(r)
        }),
        k = () => {
            if (d()) return;
            let E;
            const b = s === 0 ? r.initialPromise : void 0;
            try {
                E = b ? ? r.fn()
            } catch (M) {
                E = Promise.reject(M)
            }
            Promise.resolve(E).then(w).catch(M => {
                var ce;
                if (d()) return;
                const q = r.retry ? ? (Ur ? 0 : 3),
                    I = r.retryDelay ? ? mw,
                    z = typeof I == "function" ? I(s, M) : I,
                    G = q === !0 || typeof q == "number" && s < q || typeof q == "function" && q(s, M);
                if (n || !G) {
                    R(M);
                    return
                }
                s++, (ce = r.onFail) == null || ce.call(r, s, M), lw(z).then(() => y() ? void 0 : T()).then(() => {
                    n ? R(M) : k()
                })
            })
        };
    return {
        promise: a,
        status: () => a.status,
        cancel: h,
        continue: () => (i == null || i(), a),
        cancelRetry: p,
        continueRetry: g,
        canStart: v,
        start: () => (v() ? k() : T().then(k), a)
    }
}
var Pr, pm, Zm = (pm = class {
        constructor() {
            me(this, Pr)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), rc(this.gcTime) && X(this, Pr, _r.setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(r) {
            this.gcTime = Math.max(this.gcTime || 0, r ? ? (Ur ? 1 / 0 : 300 * 1e3))
        }
        clearGcTimeout() {
            N(this, Pr) && (_r.clearTimeout(N(this, Pr)), X(this, Pr, void 0))
        }
    }, Pr = new WeakMap, pm),
    Or, xs, Bt, Ar, ot, Do, Lr, Jt, En, mm, gw = (mm = class extends Zm {
        constructor(n) {
            super();
            me(this, Jt);
            me(this, Or);
            me(this, xs);
            me(this, Bt);
            me(this, Ar);
            me(this, ot);
            me(this, Do);
            me(this, Lr);
            X(this, Lr, !1), X(this, Do, n.defaultOptions), this.setOptions(n.options), this.observers = [], X(this, Ar, n.client), X(this, Bt, N(this, Ar).getQueryCache()), this.queryKey = n.queryKey, this.queryHash = n.queryHash, X(this, Or, wp(this.options)), this.state = n.state ? ? N(this, Or), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var n;
            return (n = N(this, ot)) == null ? void 0 : n.promise
        }
        setOptions(n) {
            if (this.options = { ...N(this, Do),
                    ...n
                }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const s = wp(this.options);
                s.data !== void 0 && (this.setData(s.data, {
                    updatedAt: s.dataUpdatedAt,
                    manual: !0
                }), X(this, Or, s))
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && N(this, Bt).remove(this)
        }
        setData(n, s) {
            const i = ic(this.state.data, n, this.options);
            return Ee(this, Jt, En).call(this, {
                data: i,
                type: "success",
                dataUpdatedAt: s == null ? void 0 : s.updatedAt,
                manual: s == null ? void 0 : s.manual
            }), i
        }
        setState(n, s) {
            Ee(this, Jt, En).call(this, {
                type: "setState",
                state: n,
                setStateOptions: s
            })
        }
        cancel(n) {
            var i, a;
            const s = (i = N(this, ot)) == null ? void 0 : i.promise;
            return (a = N(this, ot)) == null || a.cancel(n), s ? s.then(_t).catch(_t) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(N(this, Or))
        }
        isActive() {
            return this.observers.some(n => $t(n.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === $c || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(n => cr(n.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(n = 0) {
            return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !Km(this.state.dataUpdatedAt, n)
        }
        onFocus() {
            var s;
            const n = this.observers.find(i => i.shouldFetchOnWindowFocus());
            n == null || n.refetch({
                cancelRefetch: !1
            }), (s = N(this, ot)) == null || s.continue()
        }
        onOnline() {
            var s;
            const n = this.observers.find(i => i.shouldFetchOnReconnect());
            n == null || n.refetch({
                cancelRefetch: !1
            }), (s = N(this, ot)) == null || s.continue()
        }
        addObserver(n) {
            this.observers.includes(n) || (this.observers.push(n), this.clearGcTimeout(), N(this, Bt).notify({
                type: "observerAdded",
                query: this,
                observer: n
            }))
        }
        removeObserver(n) {
            this.observers.includes(n) && (this.observers = this.observers.filter(s => s !== n), this.observers.length || (N(this, ot) && (N(this, Lr) ? N(this, ot).cancel({
                revert: !0
            }) : N(this, ot).cancelRetry()), this.scheduleGc()), N(this, Bt).notify({
                type: "observerRemoved",
                query: this,
                observer: n
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ee(this, Jt, En).call(this, {
                type: "invalidate"
            })
        }
        async fetch(n, s) {
            var g, y, v, w, R, T, k, E, b, M, q, I;
            if (this.state.fetchStatus !== "idle" && ((g = N(this, ot)) == null ? void 0 : g.status()) !== "rejected") {
                if (this.state.data !== void 0 && (s != null && s.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (N(this, ot)) return N(this, ot).continueRetry(), N(this, ot).promise
            }
            if (n && this.setOptions(n), !this.options.queryFn) {
                const z = this.observers.find(G => G.options.queryFn);
                z && this.setOptions(z.options)
            }
            const i = new AbortController,
                a = z => {
                    Object.defineProperty(z, "signal", {
                        enumerable: !0,
                        get: () => (X(this, Lr, !0), i.signal)
                    })
                },
                d = () => {
                    const z = Ym(this.options, s),
                        ce = (() => {
                            const ge = {
                                client: N(this, Ar),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return a(ge), ge
                        })();
                    return X(this, Lr, !1), this.options.persister ? this.options.persister(z, ce, this) : z(ce)
                },
                p = (() => {
                    const z = {
                        fetchOptions: s,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: N(this, Ar),
                        state: this.state,
                        fetchFn: d
                    };
                    return a(z), z
                })();
            (y = this.options.behavior) == null || y.onFetch(p, this), X(this, xs, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((v = p.fetchOptions) == null ? void 0 : v.meta)) && Ee(this, Jt, En).call(this, {
                type: "fetch",
                meta: (w = p.fetchOptions) == null ? void 0 : w.meta
            }), X(this, ot, Xm({
                initialPromise: s == null ? void 0 : s.initialPromise,
                fn: p.fetchFn,
                onCancel: z => {
                    z instanceof ac && z.revert && this.setState({ ...N(this, xs),
                        fetchStatus: "idle"
                    }), i.abort()
                },
                onFail: (z, G) => {
                    Ee(this, Jt, En).call(this, {
                        type: "failed",
                        failureCount: z,
                        error: G
                    })
                },
                onPause: () => {
                    Ee(this, Jt, En).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ee(this, Jt, En).call(this, {
                        type: "continue"
                    })
                },
                retry: p.options.retry,
                retryDelay: p.options.retryDelay,
                networkMode: p.options.networkMode,
                canRun: () => !0
            }));
            try {
                const z = await N(this, ot).start();
                if (z === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(z), (T = (R = N(this, Bt).config).onSuccess) == null || T.call(R, z, this), (E = (k = N(this, Bt).config).onSettled) == null || E.call(k, z, this.state.error, this), z
            } catch (z) {
                if (z instanceof ac) {
                    if (z.silent) return N(this, ot).promise;
                    if (z.revert) {
                        if (this.state.data === void 0) throw z;
                        return this.state.data
                    }
                }
                throw Ee(this, Jt, En).call(this, {
                    type: "error",
                    error: z
                }), (M = (b = N(this, Bt).config).onError) == null || M.call(b, z, this), (I = (q = N(this, Bt).config).onSettled) == null || I.call(q, this.state.data, z, this), z
            } finally {
                this.scheduleGc()
            }
        }
    }, Or = new WeakMap, xs = new WeakMap, Bt = new WeakMap, Ar = new WeakMap, ot = new WeakMap, Do = new WeakMap, Lr = new WeakMap, Jt = new WeakSet, En = function(n) {
        const s = i => {
            switch (n.type) {
                case "failed":
                    return { ...i,
                        fetchFailureCount: n.failureCount,
                        fetchFailureReason: n.error
                    };
                case "pause":
                    return { ...i,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...i,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...i,
                        ...eg(i.data, this.options),
                        fetchMeta: n.meta ? ? null
                    };
                case "success":
                    const a = { ...i,
                        data: n.data,
                        dataUpdateCount: i.dataUpdateCount + 1,
                        dataUpdatedAt: n.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!n.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    return X(this, xs, n.manual ? a : void 0), a;
                case "error":
                    const d = n.error;
                    return { ...i,
                        error: d,
                        errorUpdateCount: i.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: i.fetchFailureCount + 1,
                        fetchFailureReason: d,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...i,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...i,
                        ...n.state
                    }
            }
        };
        this.state = s(this.state), ut.batch(() => {
            this.observers.forEach(i => {
                i.onQueryUpdate()
            }), N(this, Bt).notify({
                query: this,
                type: "updated",
                action: n
            })
        })
    }, mm);

function eg(r, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Jm(n.networkMode) ? "fetching" : "paused",
        ...r === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function wp(r) {
    const n = typeof r.initialData == "function" ? r.initialData() : r.initialData,
        s = n !== void 0,
        i = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? i ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jt, je, Io, vt, Mr, ws, jn, or, zo, bs, ks, Fr, Dr, ir, Ss, Ae, _o, uc, cc, dc, fc, hc, pc, mc, tg, gm, yw = (gm = class extends $o {
    constructor(n, s) {
        super();
        me(this, Ae);
        me(this, jt);
        me(this, je);
        me(this, Io);
        me(this, vt);
        me(this, Mr);
        me(this, ws);
        me(this, jn);
        me(this, or);
        me(this, zo);
        me(this, bs);
        me(this, ks);
        me(this, Fr);
        me(this, Dr);
        me(this, ir);
        me(this, Ss, new Set);
        this.options = s, X(this, jt, n), X(this, or, null), X(this, jn, lc()), this.bindMethods(), this.setOptions(s)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (N(this, je).addObserver(this), bp(N(this, je), this.options) ? Ee(this, Ae, _o).call(this) : this.updateResult(), Ee(this, Ae, fc).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return gc(N(this, je), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return gc(N(this, je), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set, Ee(this, Ae, hc).call(this), Ee(this, Ae, pc).call(this), N(this, je).removeObserver(this)
    }
    setOptions(n) {
        const s = this.options,
            i = N(this, je);
        if (this.options = N(this, jt).defaultQueryOptions(n), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof $t(this.options.enabled, N(this, je)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Ee(this, Ae, mc).call(this), N(this, je).setOptions(this.options), s._defaulted && !sc(this.options, s) && N(this, jt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: N(this, je),
            observer: this
        });
        const a = this.hasListeners();
        a && kp(N(this, je), i, this.options, s) && Ee(this, Ae, _o).call(this), this.updateResult(), a && (N(this, je) !== i || $t(this.options.enabled, N(this, je)) !== $t(s.enabled, N(this, je)) || cr(this.options.staleTime, N(this, je)) !== cr(s.staleTime, N(this, je))) && Ee(this, Ae, uc).call(this);
        const d = Ee(this, Ae, cc).call(this);
        a && (N(this, je) !== i || $t(this.options.enabled, N(this, je)) !== $t(s.enabled, N(this, je)) || d !== N(this, ir)) && Ee(this, Ae, dc).call(this, d)
    }
    getOptimisticResult(n) {
        const s = N(this, jt).getQueryCache().build(N(this, jt), n),
            i = this.createResult(s, n);
        return xw(this, i) && (X(this, vt, i), X(this, ws, this.options), X(this, Mr, N(this, je).state)), i
    }
    getCurrentResult() {
        return N(this, vt)
    }
    trackResult(n, s) {
        return new Proxy(n, {
            get: (i, a) => (this.trackProp(a), s == null || s(a), a === "promise" && !this.options.experimental_prefetchInRender && N(this, jn).status === "pending" && N(this, jn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), Reflect.get(i, a))
        })
    }
    trackProp(n) {
        N(this, Ss).add(n)
    }
    getCurrentQuery() {
        return N(this, je)
    }
    refetch({ ...n
    } = {}) {
        return this.fetch({ ...n
        })
    }
    fetchOptimistic(n) {
        const s = N(this, jt).defaultQueryOptions(n),
            i = N(this, jt).getQueryCache().build(N(this, jt), s);
        return i.fetch().then(() => this.createResult(i, s))
    }
    fetch(n) {
        return Ee(this, Ae, _o).call(this, { ...n,
            cancelRefetch: n.cancelRefetch ? ? !0
        }).then(() => (this.updateResult(), N(this, vt)))
    }
    createResult(n, s) {
        var V;
        const i = N(this, je),
            a = this.options,
            d = N(this, vt),
            h = N(this, Mr),
            p = N(this, ws),
            y = n !== i ? n.state : N(this, Io),
            {
                state: v
            } = n;
        let w = { ...v
            },
            R = !1,
            T;
        if (s._optimisticResults) {
            const K = this.hasListeners(),
                Z = !K && bp(n, s),
                B = K && kp(n, i, s, a);
            (Z || B) && (w = { ...w,
                ...eg(v.data, n.options)
            }), s._optimisticResults === "isRestoring" && (w.fetchStatus = "idle")
        }
        let {
            error: k,
            errorUpdatedAt: E,
            status: b
        } = w;
        T = w.data;
        let M = !1;
        if (s.placeholderData !== void 0 && T === void 0 && b === "pending") {
            let K;
            d != null && d.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData) ? (K = d.data, M = !0) : K = typeof s.placeholderData == "function" ? s.placeholderData((V = N(this, ks)) == null ? void 0 : V.state.data, N(this, ks)) : s.placeholderData, K !== void 0 && (b = "success", T = ic(d == null ? void 0 : d.data, K, s), R = !0)
        }
        if (s.select && T !== void 0 && !M)
            if (d && T === (h == null ? void 0 : h.data) && s.select === N(this, zo)) T = N(this, bs);
            else try {
                X(this, zo, s.select), T = s.select(T), T = ic(d == null ? void 0 : d.data, T, s), X(this, bs, T), X(this, or, null)
            } catch (K) {
                X(this, or, K)
            }
        N(this, or) && (k = N(this, or), T = N(this, bs), E = Date.now(), b = "error");
        const q = w.fetchStatus === "fetching",
            I = b === "pending",
            z = b === "error",
            G = I && q,
            ce = T !== void 0,
            F = {
                status: b,
                fetchStatus: w.fetchStatus,
                isPending: I,
                isSuccess: b === "success",
                isError: z,
                isInitialLoading: G,
                isLoading: G,
                data: T,
                dataUpdatedAt: w.dataUpdatedAt,
                error: k,
                errorUpdatedAt: E,
                failureCount: w.fetchFailureCount,
                failureReason: w.fetchFailureReason,
                errorUpdateCount: w.errorUpdateCount,
                isFetched: w.dataUpdateCount > 0 || w.errorUpdateCount > 0,
                isFetchedAfterMount: w.dataUpdateCount > y.dataUpdateCount || w.errorUpdateCount > y.errorUpdateCount,
                isFetching: q,
                isRefetching: q && !I,
                isLoadingError: z && !ce,
                isPaused: w.fetchStatus === "paused",
                isPlaceholderData: R,
                isRefetchError: z && ce,
                isStale: Vc(n, s),
                refetch: this.refetch,
                promise: N(this, jn),
                isEnabled: $t(s.enabled, n) !== !1
            };
        if (this.options.experimental_prefetchInRender) {
            const K = se => {
                    F.status === "error" ? se.reject(F.error) : F.data !== void 0 && se.resolve(F.data)
                },
                Z = () => {
                    const se = X(this, jn, F.promise = lc());
                    K(se)
                },
                B = N(this, jn);
            switch (B.status) {
                case "pending":
                    n.queryHash === i.queryHash && K(B);
                    break;
                case "fulfilled":
                    (F.status === "error" || F.data !== B.value) && Z();
                    break;
                case "rejected":
                    (F.status !== "error" || F.error !== B.reason) && Z();
                    break
            }
        }
        return F
    }
    updateResult() {
        const n = N(this, vt),
            s = this.createResult(N(this, je), this.options);
        if (X(this, Mr, N(this, je).state), X(this, ws, this.options), N(this, Mr).data !== void 0 && X(this, ks, N(this, je)), sc(s, n)) return;
        X(this, vt, s);
        const i = () => {
            if (!n) return !0;
            const {
                notifyOnChangeProps: a
            } = this.options, d = typeof a == "function" ? a() : a;
            if (d === "all" || !d && !N(this, Ss).size) return !0;
            const h = new Set(d ? ? N(this, Ss));
            return this.options.throwOnError && h.add("error"), Object.keys(N(this, vt)).some(p => {
                const g = p;
                return N(this, vt)[g] !== n[g] && h.has(g)
            })
        };
        Ee(this, Ae, tg).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Ee(this, Ae, fc).call(this)
    }
}, jt = new WeakMap, je = new WeakMap, Io = new WeakMap, vt = new WeakMap, Mr = new WeakMap, ws = new WeakMap, jn = new WeakMap, or = new WeakMap, zo = new WeakMap, bs = new WeakMap, ks = new WeakMap, Fr = new WeakMap, Dr = new WeakMap, ir = new WeakMap, Ss = new WeakMap, Ae = new WeakSet, _o = function(n) {
    Ee(this, Ae, mc).call(this);
    let s = N(this, je).fetch(this.options, n);
    return n != null && n.throwOnError || (s = s.catch(_t)), s
}, uc = function() {
    Ee(this, Ae, hc).call(this);
    const n = cr(this.options.staleTime, N(this, je));
    if (Ur || N(this, vt).isStale || !rc(n)) return;
    const i = Km(N(this, vt).dataUpdatedAt, n) + 1;
    X(this, Fr, _r.setTimeout(() => {
        N(this, vt).isStale || this.updateResult()
    }, i))
}, cc = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(N(this, je)) : this.options.refetchInterval) ? ? !1
}, dc = function(n) {
    Ee(this, Ae, pc).call(this), X(this, ir, n), !(Ur || $t(this.options.enabled, N(this, je)) === !1 || !rc(N(this, ir)) || N(this, ir) === 0) && X(this, Dr, _r.setInterval(() => {
        (this.options.refetchIntervalInBackground || Wc.isFocused()) && Ee(this, Ae, _o).call(this)
    }, N(this, ir)))
}, fc = function() {
    Ee(this, Ae, uc).call(this), Ee(this, Ae, dc).call(this, Ee(this, Ae, cc).call(this))
}, hc = function() {
    N(this, Fr) && (_r.clearTimeout(N(this, Fr)), X(this, Fr, void 0))
}, pc = function() {
    N(this, Dr) && (_r.clearInterval(N(this, Dr)), X(this, Dr, void 0))
}, mc = function() {
    const n = N(this, jt).getQueryCache().build(N(this, jt), this.options);
    if (n === N(this, je)) return;
    const s = N(this, je);
    X(this, je, n), X(this, Io, n.state), this.hasListeners() && (s == null || s.removeObserver(this), n.addObserver(this))
}, tg = function(n) {
    ut.batch(() => {
        n.listeners && this.listeners.forEach(s => {
            s(N(this, vt))
        }), N(this, jt).getQueryCache().notify({
            query: N(this, je),
            type: "observerResultsUpdated"
        })
    })
}, gm);

function vw(r, n) {
    return $t(n.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && n.retryOnMount === !1)
}

function bp(r, n) {
    return vw(r, n) || r.state.data !== void 0 && gc(r, n, n.refetchOnMount)
}

function gc(r, n, s) {
    if ($t(n.enabled, r) !== !1 && cr(n.staleTime, r) !== "static") {
        const i = typeof s == "function" ? s(r) : s;
        return i === "always" || i !== !1 && Vc(r, n)
    }
    return !1
}

function kp(r, n, s, i) {
    return (r !== n || $t(i.enabled, r) === !1) && (!s.suspense || r.state.status !== "error") && Vc(r, s)
}

function Vc(r, n) {
    return $t(n.enabled, r) !== !1 && r.isStaleByTime(cr(n.staleTime, r))
}

function xw(r, n) {
    return !sc(r.getCurrentResult(), n)
}

function Sp(r) {
    return {
        onFetch: (n, s) => {
            var v, w, R, T, k;
            const i = n.options,
                a = (R = (w = (v = n.fetchOptions) == null ? void 0 : v.meta) == null ? void 0 : w.fetchMore) == null ? void 0 : R.direction,
                d = ((T = n.state.data) == null ? void 0 : T.pages) || [],
                h = ((k = n.state.data) == null ? void 0 : k.pageParams) || [];
            let p = {
                    pages: [],
                    pageParams: []
                },
                g = 0;
            const y = async () => {
                let E = !1;
                const b = I => {
                        Object.defineProperty(I, "signal", {
                            enumerable: !0,
                            get: () => (n.signal.aborted ? E = !0 : n.signal.addEventListener("abort", () => {
                                E = !0
                            }), n.signal)
                        })
                    },
                    M = Ym(n.options, n.fetchOptions),
                    q = async (I, z, G) => {
                        if (E) return Promise.reject();
                        if (z == null && I.pages.length) return Promise.resolve(I);
                        const ge = (() => {
                                const Z = {
                                    client: n.client,
                                    queryKey: n.queryKey,
                                    pageParam: z,
                                    direction: G ? "backward" : "forward",
                                    meta: n.options.meta
                                };
                                return b(Z), Z
                            })(),
                            F = await M(ge),
                            {
                                maxPages: V
                            } = n.options,
                            K = G ? uw : aw;
                        return {
                            pages: K(I.pages, F, V),
                            pageParams: K(I.pageParams, z, V)
                        }
                    };
                if (a && d.length) {
                    const I = a === "backward",
                        z = I ? ww : Np,
                        G = {
                            pages: d,
                            pageParams: h
                        },
                        ce = z(i, G);
                    p = await q(G, ce, I)
                } else {
                    const I = r ? ? d.length;
                    do {
                        const z = g === 0 ? h[0] ? ? i.initialPageParam : Np(i, p);
                        if (g > 0 && z == null) break;
                        p = await q(p, z), g++
                    } while (g < I)
                }
                return p
            };
            n.options.persister ? n.fetchFn = () => {
                var E, b;
                return (b = (E = n.options).persister) == null ? void 0 : b.call(E, y, {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal
                }, s)
            } : n.fetchFn = y
        }
    }
}

function Np(r, {
    pages: n,
    pageParams: s
}) {
    const i = n.length - 1;
    return n.length > 0 ? r.getNextPageParam(n[i], n, s[i], s) : void 0
}

function ww(r, {
    pages: n,
    pageParams: s
}) {
    var i;
    return n.length > 0 ? (i = r.getPreviousPageParam) == null ? void 0 : i.call(r, n[0], n, s[0], s) : void 0
}
var Uo, an, xt, Ir, un, er, ym, bw = (ym = class extends Zm {
    constructor(n) {
        super();
        me(this, un);
        me(this, Uo);
        me(this, an);
        me(this, xt);
        me(this, Ir);
        X(this, Uo, n.client), this.mutationId = n.mutationId, X(this, xt, n.mutationCache), X(this, an, []), this.state = n.state || kw(), this.setOptions(n.options), this.scheduleGc()
    }
    setOptions(n) {
        this.options = n, this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        N(this, an).includes(n) || (N(this, an).push(n), this.clearGcTimeout(), N(this, xt).notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        X(this, an, N(this, an).filter(s => s !== n)), this.scheduleGc(), N(this, xt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        N(this, an).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, xt).remove(this))
    }
    continue () {
        var n;
        return ((n = N(this, Ir)) == null ? void 0 : n.continue()) ? ? this.execute(this.state.variables)
    }
    async execute(n) {
        var h, p, g, y, v, w, R, T, k, E, b, M, q, I, z, G, ce, ge, F, V;
        const s = () => {
                Ee(this, un, er).call(this, {
                    type: "continue"
                })
            },
            i = {
                client: N(this, Uo),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
        X(this, Ir, Xm({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (K, Z) => {
                Ee(this, un, er).call(this, {
                    type: "failed",
                    failureCount: K,
                    error: Z
                })
            },
            onPause: () => {
                Ee(this, un, er).call(this, {
                    type: "pause"
                })
            },
            onContinue: s,
            retry: this.options.retry ? ? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, xt).canRun(this)
        }));
        const a = this.state.status === "pending",
            d = !N(this, Ir).canStart();
        try {
            if (a) s();
            else {
                Ee(this, un, er).call(this, {
                    type: "pending",
                    variables: n,
                    isPaused: d
                }), await ((p = (h = N(this, xt).config).onMutate) == null ? void 0 : p.call(h, n, this, i));
                const Z = await ((y = (g = this.options).onMutate) == null ? void 0 : y.call(g, n, i));
                Z !== this.state.context && Ee(this, un, er).call(this, {
                    type: "pending",
                    context: Z,
                    variables: n,
                    isPaused: d
                })
            }
            const K = await N(this, Ir).start();
            return await ((w = (v = N(this, xt).config).onSuccess) == null ? void 0 : w.call(v, K, n, this.state.context, this, i)), await ((T = (R = this.options).onSuccess) == null ? void 0 : T.call(R, K, n, this.state.context, i)), await ((E = (k = N(this, xt).config).onSettled) == null ? void 0 : E.call(k, K, null, this.state.variables, this.state.context, this, i)), await ((M = (b = this.options).onSettled) == null ? void 0 : M.call(b, K, null, n, this.state.context, i)), Ee(this, un, er).call(this, {
                type: "success",
                data: K
            }), K
        } catch (K) {
            try {
                throw await ((I = (q = N(this, xt).config).onError) == null ? void 0 : I.call(q, K, n, this.state.context, this, i)), await ((G = (z = this.options).onError) == null ? void 0 : G.call(z, K, n, this.state.context, i)), await ((ge = (ce = N(this, xt).config).onSettled) == null ? void 0 : ge.call(ce, void 0, K, this.state.variables, this.state.context, this, i)), await ((V = (F = this.options).onSettled) == null ? void 0 : V.call(F, void 0, K, n, this.state.context, i)), K
            } finally {
                Ee(this, un, er).call(this, {
                    type: "error",
                    error: K
                })
            }
        } finally {
            N(this, xt).runNext(this)
        }
    }
}, Uo = new WeakMap, an = new WeakMap, xt = new WeakMap, Ir = new WeakMap, un = new WeakSet, er = function(n) {
    const s = i => {
        switch (n.type) {
            case "failed":
                return { ...i,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return { ...i,
                    isPaused: !0
                };
            case "continue":
                return { ...i,
                    isPaused: !1
                };
            case "pending":
                return { ...i,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return { ...i,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return { ...i,
                    data: void 0,
                    error: n.error,
                    failureCount: i.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
        }
    };
    this.state = s(this.state), ut.batch(() => {
        N(this, an).forEach(i => {
            i.onMutationUpdate(n)
        }), N(this, xt).notify({
            mutation: this,
            type: "updated",
            action: n
        })
    })
}, ym);

function kw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Cn, Xt, Bo, vm, Sw = (vm = class extends $o {
    constructor(n = {}) {
        super();
        me(this, Cn);
        me(this, Xt);
        me(this, Bo);
        this.config = n, X(this, Cn, new Set), X(this, Xt, new Map), X(this, Bo, 0)
    }
    build(n, s, i) {
        const a = new bw({
            client: n,
            mutationCache: this,
            mutationId: ++ol(this, Bo)._,
            options: n.defaultMutationOptions(s),
            state: i
        });
        return this.add(a), a
    }
    add(n) {
        N(this, Cn).add(n);
        const s = ul(n);
        if (typeof s == "string") {
            const i = N(this, Xt).get(s);
            i ? i.push(n) : N(this, Xt).set(s, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (N(this, Cn).delete(n)) {
            const s = ul(n);
            if (typeof s == "string") {
                const i = N(this, Xt).get(s);
                if (i)
                    if (i.length > 1) {
                        const a = i.indexOf(n);
                        a !== -1 && i.splice(a, 1)
                    } else i[0] === n && N(this, Xt).delete(s)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const s = ul(n);
        if (typeof s == "string") {
            const i = N(this, Xt).get(s),
                a = i == null ? void 0 : i.find(d => d.state.status === "pending");
            return !a || a === n
        } else return !0
    }
    runNext(n) {
        var i;
        const s = ul(n);
        if (typeof s == "string") {
            const a = (i = N(this, Xt).get(s)) == null ? void 0 : i.find(d => d !== n && d.state.isPaused);
            return (a == null ? void 0 : a.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        ut.batch(() => {
            N(this, Cn).forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }), N(this, Cn).clear(), N(this, Xt).clear()
        })
    }
    getAll() {
        return Array.from(N(this, Cn))
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(i => yp(s, i))
    }
    findAll(n = {}) {
        return this.getAll().filter(s => yp(n, s))
    }
    notify(n) {
        ut.batch(() => {
            this.listeners.forEach(s => {
                s(n)
            })
        })
    }
    resumePausedMutations() {
        const n = this.getAll().filter(s => s.state.isPaused);
        return ut.batch(() => Promise.all(n.map(s => s.continue().catch(_t))))
    }
}, Cn = new WeakMap, Xt = new WeakMap, Bo = new WeakMap, vm);

function ul(r) {
    var n;
    return (n = r.options.scope) == null ? void 0 : n.id
}
var cn, xm, Nw = (xm = class extends $o {
        constructor(n = {}) {
            super();
            me(this, cn);
            this.config = n, X(this, cn, new Map)
        }
        build(n, s, i) {
            const a = s.queryKey,
                d = s.queryHash ? ? Bc(a, s);
            let h = this.get(d);
            return h || (h = new gw({
                client: n,
                queryKey: a,
                queryHash: d,
                options: n.defaultQueryOptions(s),
                state: i,
                defaultOptions: n.getQueryDefaults(a)
            }), this.add(h)), h
        }
        add(n) {
            N(this, cn).has(n.queryHash) || (N(this, cn).set(n.queryHash, n), this.notify({
                type: "added",
                query: n
            }))
        }
        remove(n) {
            const s = N(this, cn).get(n.queryHash);
            s && (n.destroy(), s === n && N(this, cn).delete(n.queryHash), this.notify({
                type: "removed",
                query: n
            }))
        }
        clear() {
            ut.batch(() => {
                this.getAll().forEach(n => {
                    this.remove(n)
                })
            })
        }
        get(n) {
            return N(this, cn).get(n)
        }
        getAll() {
            return [...N(this, cn).values()]
        }
        find(n) {
            const s = {
                exact: !0,
                ...n
            };
            return this.getAll().find(i => gp(s, i))
        }
        findAll(n = {}) {
            const s = this.getAll();
            return Object.keys(n).length > 0 ? s.filter(i => gp(n, i)) : s
        }
        notify(n) {
            ut.batch(() => {
                this.listeners.forEach(s => {
                    s(n)
                })
            })
        }
        onFocus() {
            ut.batch(() => {
                this.getAll().forEach(n => {
                    n.onFocus()
                })
            })
        }
        onOnline() {
            ut.batch(() => {
                this.getAll().forEach(n => {
                    n.onOnline()
                })
            })
        }
    }, cn = new WeakMap, xm),
    Ve, lr, ar, Ns, Es, ur, js, Cs, wm, Ew = (wm = class {
        constructor(r = {}) {
            me(this, Ve);
            me(this, lr);
            me(this, ar);
            me(this, Ns);
            me(this, Es);
            me(this, ur);
            me(this, js);
            me(this, Cs);
            X(this, Ve, r.queryCache || new Nw), X(this, lr, r.mutationCache || new Sw), X(this, ar, r.defaultOptions || {}), X(this, Ns, new Map), X(this, Es, new Map), X(this, ur, 0)
        }
        mount() {
            ol(this, ur)._++, N(this, ur) === 1 && (X(this, js, Wc.subscribe(async r => {
                r && (await this.resumePausedMutations(), N(this, Ve).onFocus())
            })), X(this, Cs, jl.subscribe(async r => {
                r && (await this.resumePausedMutations(), N(this, Ve).onOnline())
            })))
        }
        unmount() {
            var r, n;
            ol(this, ur)._--, N(this, ur) === 0 && ((r = N(this, js)) == null || r.call(this), X(this, js, void 0), (n = N(this, Cs)) == null || n.call(this), X(this, Cs, void 0))
        }
        isFetching(r) {
            return N(this, Ve).findAll({ ...r,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(r) {
            return N(this, lr).findAll({ ...r,
                status: "pending"
            }).length
        }
        getQueryData(r) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: r
            });
            return (s = N(this, Ve).get(n.queryHash)) == null ? void 0 : s.state.data
        }
        ensureQueryData(r) {
            const n = this.defaultQueryOptions(r),
                s = N(this, Ve).build(this, n),
                i = s.state.data;
            return i === void 0 ? this.fetchQuery(r) : (r.revalidateIfStale && s.isStaleByTime(cr(n.staleTime, s)) && this.prefetchQuery(n), Promise.resolve(i))
        }
        getQueriesData(r) {
            return N(this, Ve).findAll(r).map(({
                queryKey: n,
                state: s
            }) => {
                const i = s.data;
                return [n, i]
            })
        }
        setQueryData(r, n, s) {
            const i = this.defaultQueryOptions({
                    queryKey: r
                }),
                a = N(this, Ve).get(i.queryHash),
                d = a == null ? void 0 : a.state.data,
                h = ow(n, d);
            if (h !== void 0) return N(this, Ve).build(this, i).setData(h, { ...s,
                manual: !0
            })
        }
        setQueriesData(r, n, s) {
            return ut.batch(() => N(this, Ve).findAll(r).map(({
                queryKey: i
            }) => [i, this.setQueryData(i, n, s)]))
        }
        getQueryState(r) {
            var s;
            const n = this.defaultQueryOptions({
                queryKey: r
            });
            return (s = N(this, Ve).get(n.queryHash)) == null ? void 0 : s.state
        }
        removeQueries(r) {
            const n = N(this, Ve);
            ut.batch(() => {
                n.findAll(r).forEach(s => {
                    n.remove(s)
                })
            })
        }
        resetQueries(r, n) {
            const s = N(this, Ve);
            return ut.batch(() => (s.findAll(r).forEach(i => {
                i.reset()
            }), this.refetchQueries({
                type: "active",
                ...r
            }, n)))
        }
        cancelQueries(r, n = {}) {
            const s = {
                    revert: !0,
                    ...n
                },
                i = ut.batch(() => N(this, Ve).findAll(r).map(a => a.cancel(s)));
            return Promise.all(i).then(_t).catch(_t)
        }
        invalidateQueries(r, n = {}) {
            return ut.batch(() => (N(this, Ve).findAll(r).forEach(s => {
                s.invalidate()
            }), (r == null ? void 0 : r.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...r,
                type: (r == null ? void 0 : r.refetchType) ? ? (r == null ? void 0 : r.type) ? ? "active"
            }, n)))
        }
        refetchQueries(r, n = {}) {
            const s = { ...n,
                    cancelRefetch: n.cancelRefetch ? ? !0
                },
                i = ut.batch(() => N(this, Ve).findAll(r).filter(a => !a.isDisabled() && !a.isStatic()).map(a => {
                    let d = a.fetch(void 0, s);
                    return s.throwOnError || (d = d.catch(_t)), a.state.fetchStatus === "paused" ? Promise.resolve() : d
                }));
            return Promise.all(i).then(_t)
        }
        fetchQuery(r) {
            const n = this.defaultQueryOptions(r);
            n.retry === void 0 && (n.retry = !1);
            const s = N(this, Ve).build(this, n);
            return s.isStaleByTime(cr(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
        }
        prefetchQuery(r) {
            return this.fetchQuery(r).then(_t).catch(_t)
        }
        fetchInfiniteQuery(r) {
            return r.behavior = Sp(r.pages), this.fetchQuery(r)
        }
        prefetchInfiniteQuery(r) {
            return this.fetchInfiniteQuery(r).then(_t).catch(_t)
        }
        ensureInfiniteQueryData(r) {
            return r.behavior = Sp(r.pages), this.ensureQueryData(r)
        }
        resumePausedMutations() {
            return jl.isOnline() ? N(this, lr).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return N(this, Ve)
        }
        getMutationCache() {
            return N(this, lr)
        }
        getDefaultOptions() {
            return N(this, ar)
        }
        setDefaultOptions(r) {
            X(this, ar, r)
        }
        setQueryDefaults(r, n) {
            N(this, Ns).set(Lo(r), {
                queryKey: r,
                defaultOptions: n
            })
        }
        getQueryDefaults(r) {
            const n = [...N(this, Ns).values()],
                s = {};
            return n.forEach(i => {
                Mo(r, i.queryKey) && Object.assign(s, i.defaultOptions)
            }), s
        }
        setMutationDefaults(r, n) {
            N(this, Es).set(Lo(r), {
                mutationKey: r,
                defaultOptions: n
            })
        }
        getMutationDefaults(r) {
            const n = [...N(this, Es).values()],
                s = {};
            return n.forEach(i => {
                Mo(r, i.mutationKey) && Object.assign(s, i.defaultOptions)
            }), s
        }
        defaultQueryOptions(r) {
            if (r._defaulted) return r;
            const n = { ...N(this, ar).queries,
                ...this.getQueryDefaults(r.queryKey),
                ...r,
                _defaulted: !0
            };
            return n.queryHash || (n.queryHash = Bc(n.queryKey, n)), n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"), n.throwOnError === void 0 && (n.throwOnError = !!n.suspense), !n.networkMode && n.persister && (n.networkMode = "offlineFirst"), n.queryFn === $c && (n.enabled = !1), n
        }
        defaultMutationOptions(r) {
            return r != null && r._defaulted ? r : { ...N(this, ar).mutations,
                ...(r == null ? void 0 : r.mutationKey) && this.getMutationDefaults(r.mutationKey),
                ...r,
                _defaulted: !0
            }
        }
        clear() {
            N(this, Ve).clear(), N(this, lr).clear()
        }
    }, Ve = new WeakMap, lr = new WeakMap, ar = new WeakMap, Ns = new WeakMap, Es = new WeakMap, ur = new WeakMap, js = new WeakMap, Cs = new WeakMap, wm),
    ng = C.createContext(void 0),
    jw = r => {
        const n = C.useContext(ng);
        if (!n) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return n
    },
    Cw = ({
        client: r,
        children: n
    }) => (C.useEffect(() => (r.mount(), () => {
        r.unmount()
    }), [r]), c.jsx(ng.Provider, {
        value: r,
        children: n
    })),
    rg = C.createContext(!1),
    _w = () => C.useContext(rg);
rg.Provider;

function Rw() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        },
        reset: () => {
            r = !0
        },
        isReset: () => r
    }
}
var Tw = C.createContext(Rw()),
    Pw = () => C.useContext(Tw),
    Ow = (r, n) => {
        (r.suspense || r.throwOnError || r.experimental_prefetchInRender) && (n.isReset() || (r.retryOnMount = !1))
    },
    Aw = r => {
        C.useEffect(() => {
            r.clearReset()
        }, [r])
    },
    Lw = ({
        result: r,
        errorResetBoundary: n,
        throwOnError: s,
        query: i,
        suspense: a
    }) => r.isError && !n.isReset() && !r.isFetching && i && (a && r.data === void 0 || cw(s, [r.error, i])),
    Mw = r => {
        if (r.suspense) {
            const s = a => a === "static" ? a : Math.max(a ? ? 1e3, 1e3),
                i = r.staleTime;
            r.staleTime = typeof i == "function" ? (...a) => s(i(...a)) : s(i), typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3))
        }
    },
    Fw = (r, n) => r.isLoading && r.isFetching && !n,
    Dw = (r, n) => (r == null ? void 0 : r.suspense) && n.isPending,
    Ep = (r, n, s) => n.fetchOptimistic(r).catch(() => {
        s.clearReset()
    });

function Iw(r, n, s) {
    var w, R, T, k, E;
    const i = _w(),
        a = Pw(),
        d = jw(),
        h = d.defaultQueryOptions(r);
    (R = (w = d.getDefaultOptions().queries) == null ? void 0 : w._experimental_beforeQuery) == null || R.call(w, h), h._optimisticResults = i ? "isRestoring" : "optimistic", Mw(h), Ow(h, a), Aw(a);
    const p = !d.getQueryCache().get(h.queryHash),
        [g] = C.useState(() => new n(d, h)),
        y = g.getOptimisticResult(h),
        v = !i && r.subscribed !== !1;
    if (C.useSyncExternalStore(C.useCallback(b => {
            const M = v ? g.subscribe(ut.batchCalls(b)) : _t;
            return g.updateResult(), M
        }, [g, v]), () => g.getCurrentResult(), () => g.getCurrentResult()), C.useEffect(() => {
            g.setOptions(h)
        }, [h, g]), Dw(h, y)) throw Ep(h, g, a);
    if (Lw({
            result: y,
            errorResetBoundary: a,
            throwOnError: h.throwOnError,
            query: d.getQueryCache().get(h.queryHash),
            suspense: h.suspense
        })) throw y.error;
    if ((k = (T = d.getDefaultOptions().queries) == null ? void 0 : T._experimental_afterQuery) == null || k.call(T, h, y), h.experimental_prefetchInRender && !Ur && Fw(y, i)) {
        const b = p ? Ep(h, g, a) : (E = d.getQueryCache().get(h.queryHash)) == null ? void 0 : E.promise;
        b == null || b.catch(_t).finally(() => {
            g.updateResult()
        })
    }
    return h.notifyOnChangeProps ? y : g.trackResult(y)
}

function zw(r, n) {
    return Iw(r, yw)
}
const Uw = new Ew({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});

function Bw() {
    const [r, n] = C.useState(!1), s = C.useRef(!1), [i, a] = C.useState(!1), d = C.useRef(!1), [h, p] = C.useState(!1), g = C.useRef(!1), y = C.useRef([]), v = C.useRef([]), w = C.useRef([]), R = C.useRef(null), T = (F = !1) => {
        const V = document.createElement("div");
        return V.style.position = "absolute", V.style.pointerEvents = "none", V.style.transition = "all 0.1s ease-in-out", V.style.zIndex = "9999", F ? V.style.border = "2px solid #2563EB" : (V.style.border = "2px solid #95a5fc", V.style.backgroundColor = "rgba(99, 102, 241, 0.05)"), V
    }, k = (F, V, K = !1) => {
        if (!V || !s.current) return;
        V.offsetWidth;
        const Z = V.getBoundingClientRect();
        F.style.top = `${Z.top+window.scrollY}px`, F.style.left = `${Z.left+window.scrollX}px`, F.style.width = `${Z.width}px`, F.style.height = `${Z.height}px`;
        let B = F.querySelector("div");
        B || (B = document.createElement("div"), B.textContent = V.tagName.toLowerCase(), B.style.position = "absolute", B.style.top = "-27px", B.style.left = "-2px", B.style.padding = "2px 8px", B.style.fontSize = "11px", B.style.fontWeight = K ? "500" : "400", B.style.color = K ? "#ffffff" : "#526cff", B.style.backgroundColor = K ? "#526cff" : "#DBEAFE", B.style.borderRadius = "3px", B.style.boxShadow = "none", B.style.minWidth = "24px", B.style.textAlign = "center", F.appendChild(B))
    }, E = F => {
        if (!F) return [];
        const V = [...document.querySelectorAll(`[data-source-location="${F}"]`)];
        return V.length > 0 ? V : [...document.querySelectorAll(`[data-visual-selector-id="${F}"]`)]
    }, b = () => {
        y.current.forEach(F => {
            F && F.parentNode && F.remove()
        }), y.current = [], w.current = []
    }, M = F => {
        if (!s.current || d.current) return;
        if (g.current) {
            b();
            return
        }
        if (F.target.tagName.toLowerCase() === "path") {
            b();
            return
        }
        const V = F.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!V) {
            b();
            return
        }
        const K = V.dataset.sourceLocation || V.dataset.visualSelectorId;
        if (V.dataset.sourceLocation, R.current === K) {
            b();
            return
        }
        const Z = E(K);
        b(), Z.forEach(B => {
            const se = T(!1);
            document.body.appendChild(se), y.current.push(se), k(se, B)
        }), w.current = Z
    }, q = () => {
        d.current || b()
    }, I = F => {
        var pe;
        if (!s.current) return;
        if (g.current) {
            F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation(), window.parent.postMessage({
                type: "close-dropdowns"
            }, "*");
            return
        }
        if (F.target.tagName.toLowerCase() === "path") return;
        F.preventDefault(), F.stopPropagation(), F.stopImmediatePropagation();
        const V = F.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!V) return;
        const K = V.dataset.sourceLocation || V.dataset.visualSelectorId;
        V.dataset.sourceLocation, v.current.forEach(de => {
            de && de.parentNode && de.remove()
        }), v.current = [], E(K).forEach(de => {
            const we = T(!0);
            document.body.appendChild(we), v.current.push(we), k(we, de, !0)
        }), R.current = K, b();
        const B = V.getBoundingClientRect(),
            se = {
                top: B.top,
                left: B.left,
                right: B.right,
                bottom: B.bottom,
                width: B.width,
                height: B.height,
                centerX: B.left + B.width / 2,
                centerY: B.top + B.height / 2
            },
            _e = {
                type: "element-selected",
                tagName: V.tagName,
                classes: ((pe = V.className) == null ? void 0 : pe.baseVal) || V.className || "",
                visualSelectorId: K,
                content: V.innerText,
                dataSourceLocation: V.dataset.sourceLocation,
                isDynamicContent: V.dataset.dynamicContent === "true",
                linenumber: V.dataset.linenumber,
                filename: V.dataset.filename,
                position: se
            };
        window.parent.postMessage(_e, "*")
    }, z = () => {
        v.current.forEach(F => {
            F && F.parentNode && F.remove()
        }), v.current = [], R.current = null
    }, G = (F, V, K = !1) => {
        const Z = E(F);
        Z.length !== 0 && (Z.forEach(B => {
            var se;
            if (K) B.className = V;
            else {
                const _e = ((se = B.className) == null ? void 0 : se.baseVal) || B.className || "";
                B.className = Bm(_e, V)
            }
        }), setTimeout(() => {
            var B, se;
            R.current === F && v.current.forEach((_e, pe) => {
                pe < Z.length && k(_e, Z[pe])
            }), w.current.length > 0 && ((se = (B = w.current[0]) == null ? void 0 : B.dataset) == null ? void 0 : se.visualSelectorId) === F && y.current.forEach((pe, de) => {
                de < w.current.length && k(pe, w.current[de])
            })
        }, 50))
    }, ce = (F, V) => {
        const K = E(F);
        K.length !== 0 && (K.forEach(Z => {
            Z.innerText = V
        }), setTimeout(() => {
            R.current === F && v.current.forEach((Z, B) => {
                B < K.length && k(Z, K[B])
            })
        }, 50))
    }, ge = F => {
        n(F), s.current = F, F ? (document.body.style.cursor = "crosshair", document.addEventListener("mouseover", M), document.addEventListener("mouseout", q), document.addEventListener("click", I, !0)) : (b(), v.current.forEach(V => {
            V && V.parentNode && V.remove()
        }), v.current = [], w.current = [], R.current = null, document.body.style.cursor = "default", document.removeEventListener("mouseover", M), document.removeEventListener("mouseout", q), document.removeEventListener("click", I, !0))
    };
    return C.useEffect(() => {
        document.querySelectorAll("[data-linenumber]:not([data-visual-selector-id])").forEach((Z, B) => {
            const se = `visual-id-${Z.dataset.filename}-${Z.dataset.linenumber}-${B}`;
            Z.dataset.visualSelectorId = se
        });
        const V = () => {
                if (R.current) {
                    const Z = E(R.current);
                    if (Z.length > 0) {
                        const se = Z[0].getBoundingClientRect(),
                            _e = window.innerHeight,
                            pe = window.innerWidth,
                            de = se.top < _e && se.bottom > 0 && se.left < pe && se.right > 0,
                            we = {
                                top: se.top,
                                left: se.left,
                                right: se.right,
                                bottom: se.bottom,
                                width: se.width,
                                height: se.height,
                                centerX: se.left + se.width / 2,
                                centerY: se.top + se.height / 2
                            };
                        window.parent.postMessage({
                            type: "element-position-update",
                            position: we,
                            isInViewport: de,
                            visualSelectorId: R.current
                        }, "*")
                    }
                }
            },
            K = Z => {
                const B = Z.data;
                switch (B.type) {
                    case "toggle-visual-edit-mode":
                        ge(B.data.enabled);
                        break;
                    case "update-classes":
                        B.data && B.data.classes !== void 0 ? G(B.data.visualSelectorId, B.data.classes, B.data.replace || !1) : console.warn("[Agent] Invalid update-classes message:", B);
                        break;
                    case "unselect-element":
                        z();
                        break;
                    case "refresh-page":
                        window.location.reload();
                        break;
                    case "update-content":
                        B.data && B.data.content !== void 0 ? ce(B.data.visualSelectorId, B.data.content) : console.warn("[Agent] Invalid update-content message:", B);
                        break;
                    case "request-element-position":
                        if (R.current) {
                            const se = E(R.current);
                            if (se.length > 0) {
                                const pe = se[0].getBoundingClientRect(),
                                    de = window.innerHeight,
                                    we = window.innerWidth,
                                    D = pe.top < de && pe.bottom > 0 && pe.left < we && pe.right > 0,
                                    ae = {
                                        top: pe.top,
                                        left: pe.left,
                                        right: pe.right,
                                        bottom: pe.bottom,
                                        width: pe.width,
                                        height: pe.height,
                                        centerX: pe.left + pe.width / 2,
                                        centerY: pe.top + pe.height / 2
                                    };
                                window.parent.postMessage({
                                    type: "element-position-update",
                                    position: ae,
                                    isInViewport: D,
                                    visualSelectorId: R.current
                                }, "*")
                            }
                        }
                        break;
                    case "popover-drag-state":
                        B.data && B.data.isDragging !== void 0 && (a(B.data.isDragging), d.current = B.data.isDragging, B.data.isDragging && b());
                        break;
                    case "dropdown-state":
                        B.data && B.data.isOpen !== void 0 && (p(B.data.isOpen), g.current = B.data.isOpen, B.data.isOpen && b());
                        break
                }
            };
        return window.addEventListener("message", K), window.addEventListener("scroll", V, !0), document.addEventListener("scroll", V, !0), window.parent.postMessage({
            type: "visual-edit-agent-ready"
        }, "*"), () => {
            window.removeEventListener("message", K), window.removeEventListener("scroll", V, !0), document.removeEventListener("scroll", V, !0), document.removeEventListener("mouseover", M), document.removeEventListener("mouseout", q), document.removeEventListener("click", I, !0), b(), v.current.forEach(Z => {
                Z && Z.parentNode && Z.remove()
            })
        }
    }, []), C.useEffect(() => {
        s.current = r
    }, [r]), C.useEffect(() => {
        d.current = i
    }, [i]), C.useEffect(() => {
        g.current = h
    }, [h]), C.useEffect(() => {
        const F = () => {
                if (R.current) {
                    const K = E(R.current);
                    v.current.forEach((Z, B) => {
                        B < K.length && k(Z, K[B])
                    })
                }
                w.current.length > 0 && y.current.forEach((K, Z) => {
                    Z < w.current.length && k(K, w.current[Z])
                })
            },
            V = new MutationObserver(K => {
                K.some(B => {
                    const se = pe => {
                        if (pe.nodeType === Node.ELEMENT_NODE) {
                            if (pe.dataset && pe.dataset.visualSelectorId) return !0;
                            for (let de = 0; de < pe.children.length; de++)
                                if (se(pe.children[de])) return !0
                        }
                        return !1
                    };
                    return B.type === "attributes" && (B.attributeName === "style" || B.attributeName === "class" || B.attributeName === "width" || B.attributeName === "height") && se(B.target)
                }) && setTimeout(F, 50)
            });
        return V.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class", "width", "height"]
        }), window.addEventListener("resize", F), window.addEventListener("scroll", F), () => {
            window.removeEventListener("resize", F), window.removeEventListener("scroll", F), V.disconnect()
        }
    }, []), null
}
/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var jp = "popstate";

function $w(r = {}) {
    function n(i, a) {
        let {
            pathname: d,
            search: h,
            hash: p
        } = i.location;
        return yc("", {
            pathname: d,
            search: h,
            hash: p
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }

    function s(i, a) {
        return typeof a == "string" ? a : Fo(a)
    }
    return Vw(n, s, null, r)
}

function $e(r, n) {
    if (r === !1 || r === null || typeof r > "u") throw new Error(n)
}

function fn(r, n) {
    if (!r) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}

function Ww() {
    return Math.random().toString(36).substring(2, 10)
}

function Cp(r, n) {
    return {
        usr: r.state,
        key: r.key,
        idx: n
    }
}

function yc(r, n, s = null, i) {
    return {
        pathname: typeof r == "string" ? r : r.pathname,
        search: "",
        hash: "",
        ...typeof n == "string" ? Ps(n) : n,
        state: s,
        key: n && n.key || i || Ww()
    }
}

function Fo({
    pathname: r = "/",
    search: n = "",
    hash: s = ""
}) {
    return n && n !== "?" && (r += n.charAt(0) === "?" ? n : "?" + n), s && s !== "#" && (r += s.charAt(0) === "#" ? s : "#" + s), r
}

function Ps(r) {
    let n = {};
    if (r) {
        let s = r.indexOf("#");
        s >= 0 && (n.hash = r.substring(s), r = r.substring(0, s));
        let i = r.indexOf("?");
        i >= 0 && (n.search = r.substring(i), r = r.substring(0, i)), r && (n.pathname = r)
    }
    return n
}

function Vw(r, n, s, i = {}) {
    let {
        window: a = document.defaultView,
        v5Compat: d = !1
    } = i, h = a.history, p = "POP", g = null, y = v();
    y == null && (y = 0, h.replaceState({ ...h.state,
        idx: y
    }, ""));

    function v() {
        return (h.state || {
            idx: null
        }).idx
    }

    function w() {
        p = "POP";
        let b = v(),
            M = b == null ? null : b - y;
        y = b, g && g({
            action: p,
            location: E.location,
            delta: M
        })
    }

    function R(b, M) {
        p = "PUSH";
        let q = yc(E.location, b, M);
        y = v() + 1;
        let I = Cp(q, y),
            z = E.createHref(q);
        try {
            h.pushState(I, "", z)
        } catch (G) {
            if (G instanceof DOMException && G.name === "DataCloneError") throw G;
            a.location.assign(z)
        }
        d && g && g({
            action: p,
            location: E.location,
            delta: 1
        })
    }

    function T(b, M) {
        p = "REPLACE";
        let q = yc(E.location, b, M);
        y = v();
        let I = Cp(q, y),
            z = E.createHref(q);
        h.replaceState(I, "", z), d && g && g({
            action: p,
            location: E.location,
            delta: 0
        })
    }

    function k(b) {
        return Hw(b)
    }
    let E = {
        get action() {
            return p
        },
        get location() {
            return r(a, h)
        },
        listen(b) {
            if (g) throw new Error("A history only accepts one active listener");
            return a.addEventListener(jp, w), g = b, () => {
                a.removeEventListener(jp, w), g = null
            }
        },
        createHref(b) {
            return n(a, b)
        },
        createURL: k,
        encodeLocation(b) {
            let M = k(b);
            return {
                pathname: M.pathname,
                search: M.search,
                hash: M.hash
            }
        },
        push: R,
        replace: T,
        go(b) {
            return h.go(b)
        }
    };
    return E
}

function Hw(r, n = !1) {
    let s = "http://localhost";
    typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), $e(s, "No window.location.(origin|href) available to create URL");
    let i = typeof r == "string" ? r : Fo(r);
    return i = i.replace(/ $/, "%20"), !n && i.startsWith("//") && (i = s + i), new URL(i, s)
}

function sg(r, n, s = "/") {
    return qw(r, n, s, !1)
}

function qw(r, n, s, i) {
    let a = typeof n == "string" ? Ps(n) : n,
        d = Tn(a.pathname || "/", s);
    if (d == null) return null;
    let h = og(r);
    Qw(h);
    let p = null;
    for (let g = 0; p == null && g < h.length; ++g) {
        let y = s1(d);
        p = n1(h[g], y, i)
    }
    return p
}

function og(r, n = [], s = [], i = "", a = !1) {
    let d = (h, p, g = a, y) => {
        let v = {
            relativePath: y === void 0 ? h.path || "" : y,
            caseSensitive: h.caseSensitive === !0,
            childrenIndex: p,
            route: h
        };
        if (v.relativePath.startsWith("/")) {
            if (!v.relativePath.startsWith(i) && g) return;
            $e(v.relativePath.startsWith(i), `Absolute route path "${v.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), v.relativePath = v.relativePath.slice(i.length)
        }
        let w = Rn([i, v.relativePath]),
            R = s.concat(v);
        h.children && h.children.length > 0 && ($e(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${w}".`), og(h.children, n, R, w, g)), !(h.path == null && !h.index) && n.push({
            path: w,
            score: e1(w, h.index),
            routesMeta: R
        })
    };
    return r.forEach((h, p) => {
        var g;
        if (h.path === "" || !((g = h.path) != null && g.includes("?"))) d(h, p);
        else
            for (let y of ig(h.path)) d(h, p, !0, y)
    }), n
}

function ig(r) {
    let n = r.split("/");
    if (n.length === 0) return [];
    let [s, ...i] = n, a = s.endsWith("?"), d = s.replace(/\?$/, "");
    if (i.length === 0) return a ? [d, ""] : [d];
    let h = ig(i.join("/")),
        p = [];
    return p.push(...h.map(g => g === "" ? d : [d, g].join("/"))), a && p.push(...h), p.map(g => r.startsWith("/") && g === "" ? "/" : g)
}

function Qw(r) {
    r.sort((n, s) => n.score !== s.score ? s.score - n.score : t1(n.routesMeta.map(i => i.childrenIndex), s.routesMeta.map(i => i.childrenIndex)))
}
var Kw = /^:[\w-]+$/,
    Gw = 3,
    Yw = 2,
    Jw = 1,
    Xw = 10,
    Zw = -2,
    _p = r => r === "*";

function e1(r, n) {
    let s = r.split("/"),
        i = s.length;
    return s.some(_p) && (i += Zw), n && (i += Yw), s.filter(a => !_p(a)).reduce((a, d) => a + (Kw.test(d) ? Gw : d === "" ? Jw : Xw), i)
}

function t1(r, n) {
    return r.length === n.length && r.slice(0, -1).every((i, a) => i === n[a]) ? r[r.length - 1] - n[n.length - 1] : 0
}

function n1(r, n, s = !1) {
    let {
        routesMeta: i
    } = r, a = {}, d = "/", h = [];
    for (let p = 0; p < i.length; ++p) {
        let g = i[p],
            y = p === i.length - 1,
            v = d === "/" ? n : n.slice(d.length) || "/",
            w = Cl({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: y
            }, v),
            R = g.route;
        if (!w && y && s && !i[i.length - 1].route.index && (w = Cl({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: !1
            }, v)), !w) return null;
        Object.assign(a, w.params), h.push({
            params: a,
            pathname: Rn([d, w.pathname]),
            pathnameBase: a1(Rn([d, w.pathnameBase])),
            route: R
        }), w.pathnameBase !== "/" && (d = Rn([d, w.pathnameBase]))
    }
    return h
}

function Cl(r, n) {
    typeof r == "string" && (r = {
        path: r,
        caseSensitive: !1,
        end: !0
    });
    let [s, i] = r1(r.path, r.caseSensitive, r.end), a = n.match(s);
    if (!a) return null;
    let d = a[0],
        h = d.replace(/(.)\/+$/, "$1"),
        p = a.slice(1);
    return {
        params: i.reduce((y, {
            paramName: v,
            isOptional: w
        }, R) => {
            if (v === "*") {
                let k = p[R] || "";
                h = d.slice(0, d.length - k.length).replace(/(.)\/+$/, "$1")
            }
            const T = p[R];
            return w && !T ? y[v] = void 0 : y[v] = (T || "").replace(/%2F/g, "/"), y
        }, {}),
        pathname: d,
        pathnameBase: h,
        pattern: r
    }
}

function r1(r, n = !1, s = !0) {
    fn(r === "*" || !r.endsWith("*") || r.endsWith("/*"), `Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);
    let i = [],
        a = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, p, g) => (i.push({
            paramName: p,
            isOptional: g != null
        }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return r.endsWith("*") ? (i.push({
        paramName: "*"
    }), a += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? a += "\\/*$" : r !== "" && r !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, n ? void 0 : "i"), i]
}

function s1(r) {
    try {
        return r.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return fn(!1, `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`), r
    }
}

function Tn(r, n) {
    if (n === "/") return r;
    if (!r.toLowerCase().startsWith(n.toLowerCase())) return null;
    let s = n.endsWith("/") ? n.length - 1 : n.length,
        i = r.charAt(s);
    return i && i !== "/" ? null : r.slice(s) || "/"
}

function o1(r, n = "/") {
    let {
        pathname: s,
        search: i = "",
        hash: a = ""
    } = typeof r == "string" ? Ps(r) : r;
    return {
        pathname: s ? s.startsWith("/") ? s : i1(s, n) : n,
        search: u1(i),
        hash: c1(a)
    }
}

function i1(r, n) {
    let s = n.replace(/\/+$/, "").split("/");
    return r.split("/").forEach(a => {
        a === ".." ? s.length > 1 && s.pop() : a !== "." && s.push(a)
    }), s.length > 1 ? s.join("/") : "/"
}

function Wu(r, n, s, i) {
    return `Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function l1(r) {
    return r.filter((n, s) => s === 0 || n.route.path && n.route.path.length > 0)
}

function lg(r) {
    let n = l1(r);
    return n.map((s, i) => i === n.length - 1 ? s.pathname : s.pathnameBase)
}

function ag(r, n, s, i = !1) {
    let a;
    typeof r == "string" ? a = Ps(r) : (a = { ...r
    }, $e(!a.pathname || !a.pathname.includes("?"), Wu("?", "pathname", "search", a)), $e(!a.pathname || !a.pathname.includes("#"), Wu("#", "pathname", "hash", a)), $e(!a.search || !a.search.includes("#"), Wu("#", "search", "hash", a)));
    let d = r === "" || a.pathname === "",
        h = d ? "/" : a.pathname,
        p;
    if (h == null) p = s;
    else {
        let w = n.length - 1;
        if (!i && h.startsWith("..")) {
            let R = h.split("/");
            for (; R[0] === "..";) R.shift(), w -= 1;
            a.pathname = R.join("/")
        }
        p = w >= 0 ? n[w] : "/"
    }
    let g = o1(a, p),
        y = h && h !== "/" && h.endsWith("/"),
        v = (d || h === ".") && s.endsWith("/");
    return !g.pathname.endsWith("/") && (y || v) && (g.pathname += "/"), g
}
var Rn = r => r.join("/").replace(/\/\/+/g, "/"),
    a1 = r => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
    u1 = r => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r,
    c1 = r => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;

function d1(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r
}
var ug = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ug);
var f1 = ["GET", ...ug];
new Set(f1);
var Os = C.createContext(null);
Os.displayName = "DataRouter";
var Pl = C.createContext(null);
Pl.displayName = "DataRouterState";
C.createContext(!1);
var cg = C.createContext({
    isTransitioning: !1
});
cg.displayName = "ViewTransition";
var h1 = C.createContext(new Map);
h1.displayName = "Fetchers";
var p1 = C.createContext(null);
p1.displayName = "Await";
var pn = C.createContext(null);
pn.displayName = "Navigation";
var Wo = C.createContext(null);
Wo.displayName = "Location";
var On = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
On.displayName = "Route";
var Hc = C.createContext(null);
Hc.displayName = "RouteError";

function m1(r, {
    relative: n
} = {}) {
    $e(Vo(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: s,
        navigator: i
    } = C.useContext(pn), {
        hash: a,
        pathname: d,
        search: h
    } = Ho(r, {
        relative: n
    }), p = d;
    return s !== "/" && (p = d === "/" ? s : Rn([s, d])), i.createHref({
        pathname: p,
        search: h,
        hash: a
    })
}

function Vo() {
    return C.useContext(Wo) != null
}

function mn() {
    return $e(Vo(), "useLocation() may be used only in the context of a <Router> component."), C.useContext(Wo).location
}
var dg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function fg(r) {
    C.useContext(pn).static || C.useLayoutEffect(r)
}

function g1() {
    let {
        isDataRoute: r
    } = C.useContext(On);
    return r ? R1() : y1()
}

function y1() {
    $e(Vo(), "useNavigate() may be used only in the context of a <Router> component.");
    let r = C.useContext(Os),
        {
            basename: n,
            navigator: s
        } = C.useContext(pn),
        {
            matches: i
        } = C.useContext(On),
        {
            pathname: a
        } = mn(),
        d = JSON.stringify(lg(i)),
        h = C.useRef(!1);
    return fg(() => {
        h.current = !0
    }), C.useCallback((g, y = {}) => {
        if (fn(h.current, dg), !h.current) return;
        if (typeof g == "number") {
            s.go(g);
            return
        }
        let v = ag(g, JSON.parse(d), a, y.relative === "path");
        r == null && n !== "/" && (v.pathname = v.pathname === "/" ? n : Rn([n, v.pathname])), (y.replace ? s.replace : s.push)(v, y.state, y)
    }, [n, s, d, a, r])
}
C.createContext(null);

function Ho(r, {
    relative: n
} = {}) {
    let {
        matches: s
    } = C.useContext(On), {
        pathname: i
    } = mn(), a = JSON.stringify(lg(s));
    return C.useMemo(() => ag(r, JSON.parse(a), i, n === "path"), [r, a, i, n])
}

function v1(r, n) {
    return hg(r, n)
}

function hg(r, n, s, i, a) {
    var q;
    $e(Vo(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: d
    } = C.useContext(pn), {
        matches: h
    } = C.useContext(On), p = h[h.length - 1], g = p ? p.params : {}, y = p ? p.pathname : "/", v = p ? p.pathnameBase : "/", w = p && p.route; {
        let I = w && w.path || "";
        pg(y, !w || I.endsWith("*") || I.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I==="/"?"*":`${I}/*`}">.`)
    }
    let R = mn(),
        T;
    if (n) {
        let I = typeof n == "string" ? Ps(n) : n;
        $e(v === "/" || ((q = I.pathname) == null ? void 0 : q.startsWith(v)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${I.pathname}" was given in the \`location\` prop.`), T = I
    } else T = R;
    let k = T.pathname || "/",
        E = k;
    if (v !== "/") {
        let I = v.replace(/^\//, "").split("/");
        E = "/" + k.replace(/^\//, "").split("/").slice(I.length).join("/")
    }
    let b = sg(r, {
        pathname: E
    });
    fn(w || b != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), fn(b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let M = S1(b && b.map(I => Object.assign({}, I, {
        params: Object.assign({}, g, I.params),
        pathname: Rn([v, d.encodeLocation ? d.encodeLocation(I.pathname).pathname : I.pathname]),
        pathnameBase: I.pathnameBase === "/" ? v : Rn([v, d.encodeLocation ? d.encodeLocation(I.pathnameBase).pathname : I.pathnameBase])
    })), h, s, i, a);
    return n && M ? C.createElement(Wo.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...T
            },
            navigationType: "POP"
        }
    }, M) : M
}

function x1() {
    let r = _1(),
        n = d1(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r),
        s = r instanceof Error ? r.stack : null,
        i = "rgba(200,200,200, 0.5)",
        a = {
            padding: "0.5rem",
            backgroundColor: i
        },
        d = {
            padding: "2px 4px",
            backgroundColor: i
        },
        h = null;
    return console.error("Error handled by React Router default ErrorBoundary:", r), h = C.createElement(C.Fragment, null, C.createElement("p", null, "💿 Hey developer 👋"), C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", C.createElement("code", {
        style: d
    }, "ErrorBoundary"), " or", " ", C.createElement("code", {
        style: d
    }, "errorElement"), " prop on your route.")), C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), s ? C.createElement("pre", {
        style: a
    }, s) : null, h)
}
var w1 = C.createElement(x1, null),
    b1 = class extends C.Component {
        constructor(r) {
            super(r), this.state = {
                location: r.location,
                revalidation: r.revalidation,
                error: r.error
            }
        }
        static getDerivedStateFromError(r) {
            return {
                error: r
            }
        }
        static getDerivedStateFromProps(r, n) {
            return n.location !== r.location || n.revalidation !== "idle" && r.revalidation === "idle" ? {
                error: r.error,
                location: r.location,
                revalidation: r.revalidation
            } : {
                error: r.error !== void 0 ? r.error : n.error,
                location: n.location,
                revalidation: r.revalidation || n.revalidation
            }
        }
        componentDidCatch(r, n) {
            this.props.unstable_onError ? this.props.unstable_onError(r, n) : console.error("React Router caught the following error during render", r)
        }
        render() {
            return this.state.error !== void 0 ? C.createElement(On.Provider, {
                value: this.props.routeContext
            }, C.createElement(Hc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function k1({
    routeContext: r,
    match: n,
    children: s
}) {
    let i = C.useContext(Os);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), C.createElement(On.Provider, {
        value: r
    }, s)
}

function S1(r, n = [], s = null, i = null, a = null) {
    if (r == null) {
        if (!s) return null;
        if (s.errors) r = s.matches;
        else if (n.length === 0 && !s.initialized && s.matches.length > 0) r = s.matches;
        else return null
    }
    let d = r,
        h = s == null ? void 0 : s.errors;
    if (h != null) {
        let y = d.findIndex(v => v.route.id && (h == null ? void 0 : h[v.route.id]) !== void 0);
        $e(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), d = d.slice(0, Math.min(d.length, y + 1))
    }
    let p = !1,
        g = -1;
    if (s)
        for (let y = 0; y < d.length; y++) {
            let v = d[y];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (g = y), v.route.id) {
                let {
                    loaderData: w,
                    errors: R
                } = s, T = v.route.loader && !w.hasOwnProperty(v.route.id) && (!R || R[v.route.id] === void 0);
                if (v.route.lazy || T) {
                    p = !0, g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight((y, v, w) => {
        let R, T = !1,
            k = null,
            E = null;
        s && (R = h && v.route.id ? h[v.route.id] : void 0, k = v.route.errorElement || w1, p && (g < 0 && w === 0 ? (pg("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), T = !0, E = null) : g === w && (T = !0, E = v.route.hydrateFallbackElement || null)));
        let b = n.concat(d.slice(0, w + 1)),
            M = () => {
                let q;
                return R ? q = k : T ? q = E : v.route.Component ? q = C.createElement(v.route.Component, null) : v.route.element ? q = v.route.element : q = y, C.createElement(k1, {
                    match: v,
                    routeContext: {
                        outlet: y,
                        matches: b,
                        isDataRoute: s != null
                    },
                    children: q
                })
            };
        return s && (v.route.ErrorBoundary || v.route.errorElement || w === 0) ? C.createElement(b1, {
            location: s.location,
            revalidation: s.revalidation,
            component: k,
            error: R,
            children: M(),
            routeContext: {
                outlet: null,
                matches: b,
                isDataRoute: !0
            },
            unstable_onError: i
        }) : M()
    }, null)
}

function qc(r) {
    return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function N1(r) {
    let n = C.useContext(Os);
    return $e(n, qc(r)), n
}

function E1(r) {
    let n = C.useContext(Pl);
    return $e(n, qc(r)), n
}

function j1(r) {
    let n = C.useContext(On);
    return $e(n, qc(r)), n
}

function Qc(r) {
    let n = j1(r),
        s = n.matches[n.matches.length - 1];
    return $e(s.route.id, `${r} can only be used on routes that contain a unique "id"`), s.route.id
}

function C1() {
    return Qc("useRouteId")
}

function _1() {
    var i;
    let r = C.useContext(Hc),
        n = E1("useRouteError"),
        s = Qc("useRouteError");
    return r !== void 0 ? r : (i = n.errors) == null ? void 0 : i[s]
}

function R1() {
    let {
        router: r
    } = N1("useNavigate"), n = Qc("useNavigate"), s = C.useRef(!1);
    return fg(() => {
        s.current = !0
    }), C.useCallback(async (a, d = {}) => {
        fn(s.current, dg), s.current && (typeof a == "number" ? r.navigate(a) : await r.navigate(a, {
            fromRouteId: n,
            ...d
        }))
    }, [r, n])
}
var Rp = {};

function pg(r, n, s) {
    !n && !Rp[r] && (Rp[r] = !0, fn(!1, s))
}
C.memo(T1);

function T1({
    routes: r,
    future: n,
    state: s,
    unstable_onError: i
}) {
    return hg(r, void 0, s, i, n)
}

function gl(r) {
    $e(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function P1({
    basename: r = "/",
    children: n = null,
    location: s,
    navigationType: i = "POP",
    navigator: a,
    static: d = !1
}) {
    $e(!Vo(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = r.replace(/^\/*/, "/"),
        p = C.useMemo(() => ({
            basename: h,
            navigator: a,
            static: d,
            future: {}
        }), [h, a, d]);
    typeof s == "string" && (s = Ps(s));
    let {
        pathname: g = "/",
        search: y = "",
        hash: v = "",
        state: w = null,
        key: R = "default"
    } = s, T = C.useMemo(() => {
        let k = Tn(g, h);
        return k == null ? null : {
            location: {
                pathname: k,
                search: y,
                hash: v,
                state: w,
                key: R
            },
            navigationType: i
        }
    }, [h, g, y, v, w, R, i]);
    return fn(T != null, `<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`), T == null ? null : C.createElement(pn.Provider, {
        value: p
    }, C.createElement(Wo.Provider, {
        children: n,
        value: T
    }))
}

function O1({
    children: r,
    location: n
}) {
    return v1(vc(r), n)
}

function vc(r, n = []) {
    let s = [];
    return C.Children.forEach(r, (i, a) => {
        if (!C.isValidElement(i)) return;
        let d = [...n, a];
        if (i.type === C.Fragment) {
            s.push.apply(s, vc(i.props.children, d));
            return
        }
        $e(i.type === gl, `[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), $e(!i.props.index || !i.props.children, "An index route cannot have child routes.");
        let h = {
            id: i.props.id || d.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            hydrateFallbackElement: i.props.hydrateFallbackElement,
            HydrateFallback: i.props.HydrateFallback,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (h.children = vc(i.props.children, d)), s.push(h)
    }), s
}
var yl = "get",
    vl = "application/x-www-form-urlencoded";

function Ol(r) {
    return r != null && typeof r.tagName == "string"
}

function A1(r) {
    return Ol(r) && r.tagName.toLowerCase() === "button"
}

function L1(r) {
    return Ol(r) && r.tagName.toLowerCase() === "form"
}

function M1(r) {
    return Ol(r) && r.tagName.toLowerCase() === "input"
}

function F1(r) {
    return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}

function D1(r, n) {
    return r.button === 0 && (!n || n === "_self") && !F1(r)
}
var cl = null;

function I1() {
    if (cl === null) try {
        new FormData(document.createElement("form"), 0), cl = !1
    } catch {
        cl = !0
    }
    return cl
}
var z1 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Vu(r) {
    return r != null && !z1.has(r) ? (fn(!1, `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vl}"`), null) : r
}

function U1(r, n) {
    let s, i, a, d, h;
    if (L1(r)) {
        let p = r.getAttribute("action");
        i = p ? Tn(p, n) : null, s = r.getAttribute("method") || yl, a = Vu(r.getAttribute("enctype")) || vl, d = new FormData(r)
    } else if (A1(r) || M1(r) && (r.type === "submit" || r.type === "image")) {
        let p = r.form;
        if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let g = r.getAttribute("formaction") || p.getAttribute("action");
        if (i = g ? Tn(g, n) : null, s = r.getAttribute("formmethod") || p.getAttribute("method") || yl, a = Vu(r.getAttribute("formenctype")) || Vu(p.getAttribute("enctype")) || vl, d = new FormData(p, r), !I1()) {
            let {
                name: y,
                type: v,
                value: w
            } = r;
            if (v === "image") {
                let R = y ? `${y}.` : "";
                d.append(`${R}x`, "0"), d.append(`${R}y`, "0")
            } else y && d.append(y, w)
        }
    } else {
        if (Ol(r)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = yl, i = null, a = vl, h = r
    }
    return d && a === "text/plain" && (h = d, d = void 0), {
        action: i,
        method: s.toLowerCase(),
        encType: a,
        formData: d,
        body: h
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function Kc(r, n) {
    if (r === !1 || r === null || typeof r > "u") throw new Error(n)
}

function B1(r, n, s) {
    let i = typeof r == "string" ? new URL(r, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : r;
    return i.pathname === "/" ? i.pathname = `_root.${s}` : n && Tn(i.pathname, n) === "/" ? i.pathname = `${n.replace(/\/$/,"")}/_root.${s}` : i.pathname = `${i.pathname.replace(/\/$/,"")}.${s}`, i
}
async function $1(r, n) {
    if (r.id in n) return n[r.id];
    try {
        let s = await
        import (r.module);
        return n[r.id] = s, s
    } catch (s) {
        return console.error(`Error loading route module \`${r.module}\`, reloading page...`), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function W1(r) {
    return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string"
}
async function V1(r, n, s) {
    let i = await Promise.all(r.map(async a => {
        let d = n.routes[a.route.id];
        if (d) {
            let h = await $1(d, s);
            return h.links ? h.links() : []
        }
        return []
    }));
    return K1(i.flat(1).filter(W1).filter(a => a.rel === "stylesheet" || a.rel === "preload").map(a => a.rel === "stylesheet" ? { ...a,
        rel: "prefetch",
        as: "style"
    } : { ...a,
        rel: "prefetch"
    }))
}

function Tp(r, n, s, i, a, d) {
    let h = (g, y) => s[y] ? g.route.id !== s[y].route.id : !0,
        p = (g, y) => {
            var v;
            return s[y].pathname !== g.pathname || ((v = s[y].route.path) == null ? void 0 : v.endsWith("*")) && s[y].params["*"] !== g.params["*"]
        };
    return d === "assets" ? n.filter((g, y) => h(g, y) || p(g, y)) : d === "data" ? n.filter((g, y) => {
        var w;
        let v = i.routes[g.route.id];
        if (!v || !v.hasLoader) return !1;
        if (h(g, y) || p(g, y)) return !0;
        if (g.route.shouldRevalidate) {
            let R = g.route.shouldRevalidate({
                currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
                currentParams: ((w = s[0]) == null ? void 0 : w.params) || {},
                nextUrl: new URL(r, window.origin),
                nextParams: g.params,
                defaultShouldRevalidate: !0
            });
            if (typeof R == "boolean") return R
        }
        return !0
    }) : []
}

function H1(r, n, {
    includeHydrateFallback: s
} = {}) {
    return q1(r.map(i => {
        let a = n.routes[i.route.id];
        if (!a) return [];
        let d = [a.module];
        return a.clientActionModule && (d = d.concat(a.clientActionModule)), a.clientLoaderModule && (d = d.concat(a.clientLoaderModule)), s && a.hydrateFallbackModule && (d = d.concat(a.hydrateFallbackModule)), a.imports && (d = d.concat(a.imports)), d
    }).flat(1))
}

function q1(r) {
    return [...new Set(r)]
}

function Q1(r) {
    let n = {},
        s = Object.keys(r).sort();
    for (let i of s) n[i] = r[i];
    return n
}

function K1(r, n) {
    let s = new Set;
    return new Set(n), r.reduce((i, a) => {
        let d = JSON.stringify(Q1(a));
        return s.has(d) || (s.add(d), i.push({
            key: d,
            link: a
        })), i
    }, [])
}

function mg() {
    let r = C.useContext(Os);
    return Kc(r, "You must render this element inside a <DataRouterContext.Provider> element"), r
}

function G1() {
    let r = C.useContext(Pl);
    return Kc(r, "You must render this element inside a <DataRouterStateContext.Provider> element"), r
}
var Gc = C.createContext(void 0);
Gc.displayName = "FrameworkContext";

function gg() {
    let r = C.useContext(Gc);
    return Kc(r, "You must render this element inside a <HydratedRouter> element"), r
}

function Y1(r, n) {
    let s = C.useContext(Gc),
        [i, a] = C.useState(!1),
        [d, h] = C.useState(!1),
        {
            onFocus: p,
            onBlur: g,
            onMouseEnter: y,
            onMouseLeave: v,
            onTouchStart: w
        } = n,
        R = C.useRef(null);
    C.useEffect(() => {
        if (r === "render" && h(!0), r === "viewport") {
            let E = M => {
                    M.forEach(q => {
                        h(q.isIntersecting)
                    })
                },
                b = new IntersectionObserver(E, {
                    threshold: .5
                });
            return R.current && b.observe(R.current), () => {
                b.disconnect()
            }
        }
    }, [r]), C.useEffect(() => {
        if (i) {
            let E = setTimeout(() => {
                h(!0)
            }, 100);
            return () => {
                clearTimeout(E)
            }
        }
    }, [i]);
    let T = () => {
            a(!0)
        },
        k = () => {
            a(!1), h(!1)
        };
    return s ? r !== "intent" ? [d, R, {}] : [d, R, {
        onFocus: No(p, T),
        onBlur: No(g, k),
        onMouseEnter: No(y, T),
        onMouseLeave: No(v, k),
        onTouchStart: No(w, T)
    }] : [!1, R, {}]
}

function No(r, n) {
    return s => {
        r && r(s), s.defaultPrevented || n(s)
    }
}

function J1({
    page: r,
    ...n
}) {
    let {
        router: s
    } = mg(), i = C.useMemo(() => sg(s.routes, r, s.basename), [s.routes, r, s.basename]);
    return i ? C.createElement(Z1, {
        page: r,
        matches: i,
        ...n
    }) : null
}

function X1(r) {
    let {
        manifest: n,
        routeModules: s
    } = gg(), [i, a] = C.useState([]);
    return C.useEffect(() => {
        let d = !1;
        return V1(r, n, s).then(h => {
            d || a(h)
        }), () => {
            d = !0
        }
    }, [r, n, s]), i
}

function Z1({
    page: r,
    matches: n,
    ...s
}) {
    let i = mn(),
        {
            manifest: a,
            routeModules: d
        } = gg(),
        {
            basename: h
        } = mg(),
        {
            loaderData: p,
            matches: g
        } = G1(),
        y = C.useMemo(() => Tp(r, n, g, a, i, "data"), [r, n, g, a, i]),
        v = C.useMemo(() => Tp(r, n, g, a, i, "assets"), [r, n, g, a, i]),
        w = C.useMemo(() => {
            if (r === i.pathname + i.search + i.hash) return [];
            let k = new Set,
                E = !1;
            if (n.forEach(M => {
                    var I;
                    let q = a.routes[M.route.id];
                    !q || !q.hasLoader || (!y.some(z => z.route.id === M.route.id) && M.route.id in p && ((I = d[M.route.id]) != null && I.shouldRevalidate) || q.hasClientLoader ? E = !0 : k.add(M.route.id))
                }), k.size === 0) return [];
            let b = B1(r, h, "data");
            return E && k.size > 0 && b.searchParams.set("_routes", n.filter(M => k.has(M.route.id)).map(M => M.route.id).join(",")), [b.pathname + b.search]
        }, [h, p, i, a, y, n, r, d]),
        R = C.useMemo(() => H1(v, a), [v, a]),
        T = X1(v);
    return C.createElement(C.Fragment, null, w.map(k => C.createElement("link", {
        key: k,
        rel: "prefetch",
        as: "fetch",
        href: k,
        ...s
    })), R.map(k => C.createElement("link", {
        key: k,
        rel: "modulepreload",
        href: k,
        ...s
    })), T.map(({
        key: k,
        link: E
    }) => C.createElement("link", {
        key: k,
        nonce: s.nonce,
        ...E
    })))
}

function eb(...r) {
    return n => {
        r.forEach(s => {
            typeof s == "function" ? s(n) : s != null && (s.current = n)
        })
    }
}
var yg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    yg && (window.__reactRouterVersion = "7.9.1")
} catch {}

function tb({
    basename: r,
    children: n,
    window: s
}) {
    let i = C.useRef();
    i.current == null && (i.current = $w({
        window: s,
        v5Compat: !0
    }));
    let a = i.current,
        [d, h] = C.useState({
            action: a.action,
            location: a.location
        }),
        p = C.useCallback(g => {
            C.startTransition(() => h(g))
        }, [h]);
    return C.useLayoutEffect(() => a.listen(p), [a, p]), C.createElement(P1, {
        basename: r,
        children: n,
        location: d.location,
        navigationType: d.action,
        navigator: a
    })
}
var vg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    et = C.forwardRef(function({
        onClick: n,
        discover: s = "render",
        prefetch: i = "none",
        relative: a,
        reloadDocument: d,
        replace: h,
        state: p,
        target: g,
        to: y,
        preventScrollReset: v,
        viewTransition: w,
        ...R
    }, T) {
        let {
            basename: k
        } = C.useContext(pn), E = typeof y == "string" && vg.test(y), b, M = !1;
        if (typeof y == "string" && E && (b = y, yg)) try {
            let V = new URL(window.location.href),
                K = y.startsWith("//") ? new URL(V.protocol + y) : new URL(y),
                Z = Tn(K.pathname, k);
            K.origin === V.origin && Z != null ? y = Z + K.search + K.hash : M = !0
        } catch {
            fn(!1, `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
        let q = m1(y, {
                relative: a
            }),
            [I, z, G] = Y1(i, R),
            ce = ob(y, {
                replace: h,
                state: p,
                target: g,
                preventScrollReset: v,
                relative: a,
                viewTransition: w
            });

        function ge(V) {
            n && n(V), V.defaultPrevented || ce(V)
        }
        let F = C.createElement("a", { ...R,
            ...G,
            href: b || q,
            onClick: M || d ? n : ge,
            ref: eb(T, z),
            target: g,
            "data-discover": !E && s === "render" ? "true" : void 0
        });
        return I && !E ? C.createElement(C.Fragment, null, F, C.createElement(J1, {
            page: q
        })) : F
    });
et.displayName = "Link";
var nb = C.forwardRef(function({
    "aria-current": n = "page",
    caseSensitive: s = !1,
    className: i = "",
    end: a = !1,
    style: d,
    to: h,
    viewTransition: p,
    children: g,
    ...y
}, v) {
    let w = Ho(h, {
            relative: y.relative
        }),
        R = mn(),
        T = C.useContext(Pl),
        {
            navigator: k,
            basename: E
        } = C.useContext(pn),
        b = T != null && cb(w) && p === !0,
        M = k.encodeLocation ? k.encodeLocation(w).pathname : w.pathname,
        q = R.pathname,
        I = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    s || (q = q.toLowerCase(), I = I ? I.toLowerCase() : null, M = M.toLowerCase()), I && E && (I = Tn(I, E) || I);
    const z = M !== "/" && M.endsWith("/") ? M.length - 1 : M.length;
    let G = q === M || !a && q.startsWith(M) && q.charAt(z) === "/",
        ce = I != null && (I === M || !a && I.startsWith(M) && I.charAt(M.length) === "/"),
        ge = {
            isActive: G,
            isPending: ce,
            isTransitioning: b
        },
        F = G ? n : void 0,
        V;
    typeof i == "function" ? V = i(ge) : V = [i, G ? "active" : null, ce ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
    let K = typeof d == "function" ? d(ge) : d;
    return C.createElement(et, { ...y,
        "aria-current": F,
        className: V,
        ref: v,
        style: K,
        to: h,
        viewTransition: p
    }, typeof g == "function" ? g(ge) : g)
});
nb.displayName = "NavLink";
var rb = C.forwardRef(({
    discover: r = "render",
    fetcherKey: n,
    navigate: s,
    reloadDocument: i,
    replace: a,
    state: d,
    method: h = yl,
    action: p,
    onSubmit: g,
    relative: y,
    preventScrollReset: v,
    viewTransition: w,
    ...R
}, T) => {
    let k = ab(),
        E = ub(p, {
            relative: y
        }),
        b = h.toLowerCase() === "get" ? "get" : "post",
        M = typeof p == "string" && vg.test(p),
        q = I => {
            if (g && g(I), I.defaultPrevented) return;
            I.preventDefault();
            let z = I.nativeEvent.submitter,
                G = (z == null ? void 0 : z.getAttribute("formmethod")) || h;
            k(z || I.currentTarget, {
                fetcherKey: n,
                method: G,
                navigate: s,
                replace: a,
                state: d,
                relative: y,
                preventScrollReset: v,
                viewTransition: w
            })
        };
    return C.createElement("form", {
        ref: T,
        method: b,
        action: E,
        onSubmit: i ? g : q,
        ...R,
        "data-discover": !M && r === "render" ? "true" : void 0
    })
});
rb.displayName = "Form";

function sb(r) {
    return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function xg(r) {
    let n = C.useContext(Os);
    return $e(n, sb(r)), n
}

function ob(r, {
    target: n,
    replace: s,
    state: i,
    preventScrollReset: a,
    relative: d,
    viewTransition: h
} = {}) {
    let p = g1(),
        g = mn(),
        y = Ho(r, {
            relative: d
        });
    return C.useCallback(v => {
        if (D1(v, n)) {
            v.preventDefault();
            let w = s !== void 0 ? s : Fo(g) === Fo(y);
            p(r, {
                replace: w,
                state: i,
                preventScrollReset: a,
                relative: d,
                viewTransition: h
            })
        }
    }, [g, p, y, s, i, n, r, a, d, h])
}
var ib = 0,
    lb = () => `__${String(++ib)}__`;

function ab() {
    let {
        router: r
    } = xg("useSubmit"), {
        basename: n
    } = C.useContext(pn), s = C1();
    return C.useCallback(async (i, a = {}) => {
        let {
            action: d,
            method: h,
            encType: p,
            formData: g,
            body: y
        } = U1(i, n);
        if (a.navigate === !1) {
            let v = a.fetcherKey || lb();
            await r.fetch(v, s, a.action || d, {
                preventScrollReset: a.preventScrollReset,
                formData: g,
                body: y,
                formMethod: a.method || h,
                formEncType: a.encType || p,
                flushSync: a.flushSync
            })
        } else await r.navigate(a.action || d, {
            preventScrollReset: a.preventScrollReset,
            formData: g,
            body: y,
            formMethod: a.method || h,
            formEncType: a.encType || p,
            replace: a.replace,
            state: a.state,
            fromRouteId: s,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
        })
    }, [r, n, s])
}

function ub(r, {
    relative: n
} = {}) {
    let {
        basename: s
    } = C.useContext(pn), i = C.useContext(On);
    $e(i, "useFormAction must be used inside a RouteContext");
    let [a] = i.matches.slice(-1), d = { ...Ho(r || ".", {
            relative: n
        })
    }, h = mn();
    if (r == null) {
        d.search = h.search;
        let p = new URLSearchParams(d.search),
            g = p.getAll("index");
        if (g.some(v => v === "")) {
            p.delete("index"), g.filter(w => w).forEach(w => p.append("index", w));
            let v = p.toString();
            d.search = v ? `?${v}` : ""
        }
    }
    return (!r || r === ".") && a.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : Rn([s, d.pathname])), Fo(d)
}

function cb(r, {
    relative: n
} = {}) {
    let s = C.useContext(cg);
    $e(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: i
    } = xg("useViewTransitionState"), a = Ho(r, {
        relative: n
    });
    if (!s.isTransitioning) return !1;
    let d = Tn(s.currentLocation.pathname, i) || s.currentLocation.pathname,
        h = Tn(s.nextLocation.pathname, i) || s.nextLocation.pathname;
    return Cl(a.pathname, h) != null || Cl(a.pathname, d) != null
}
bm();

function wg(r, n) {
    return function() {
        return r.apply(n, arguments)
    }
}
const {
    toString: db
} = Object.prototype, {
    getPrototypeOf: Yc
} = Object, {
    iterator: Al,
    toStringTag: bg
} = Symbol, Ll = (r => n => {
    const s = db.call(n);
    return r[s] || (r[s] = s.slice(8, -1).toLowerCase())
})(Object.create(null)), en = r => (r = r.toLowerCase(), n => Ll(n) === r), Ml = r => n => typeof n === r, {
    isArray: As
} = Array, _s = Ml("undefined");

function qo(r) {
    return r !== null && !_s(r) && r.constructor !== null && !_s(r.constructor) && Rt(r.constructor.isBuffer) && r.constructor.isBuffer(r)
}
const kg = en("ArrayBuffer");

function fb(r) {
    let n;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(r) : n = r && r.buffer && kg(r.buffer), n
}
const hb = Ml("string"),
    Rt = Ml("function"),
    Sg = Ml("number"),
    Qo = r => r !== null && typeof r == "object",
    pb = r => r === !0 || r === !1,
    xl = r => {
        if (Ll(r) !== "object") return !1;
        const n = Yc(r);
        return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(bg in r) && !(Al in r)
    },
    mb = r => {
        if (!Qo(r) || qo(r)) return !1;
        try {
            return Object.keys(r).length === 0 && Object.getPrototypeOf(r) === Object.prototype
        } catch {
            return !1
        }
    },
    gb = en("Date"),
    yb = en("File"),
    vb = en("Blob"),
    xb = en("FileList"),
    wb = r => Qo(r) && Rt(r.pipe),
    bb = r => {
        let n;
        return r && (typeof FormData == "function" && r instanceof FormData || Rt(r.append) && ((n = Ll(r)) === "formdata" || n === "object" && Rt(r.toString) && r.toString() === "[object FormData]"))
    },
    kb = en("URLSearchParams"),
    [Sb, Nb, Eb, jb] = ["ReadableStream", "Request", "Response", "Headers"].map(en),
    Cb = r => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Ko(r, n, {
    allOwnKeys: s = !1
} = {}) {
    if (r === null || typeof r > "u") return;
    let i, a;
    if (typeof r != "object" && (r = [r]), As(r))
        for (i = 0, a = r.length; i < a; i++) n.call(null, r[i], i, r);
    else {
        if (qo(r)) return;
        const d = s ? Object.getOwnPropertyNames(r) : Object.keys(r),
            h = d.length;
        let p;
        for (i = 0; i < h; i++) p = d[i], n.call(null, r[p], p, r)
    }
}

function Ng(r, n) {
    if (qo(r)) return null;
    n = n.toLowerCase();
    const s = Object.keys(r);
    let i = s.length,
        a;
    for (; i-- > 0;)
        if (a = s[i], n === a.toLowerCase()) return a;
    return null
}
const Rr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
    Eg = r => !_s(r) && r !== Rr;

function xc() {
    const {
        caseless: r,
        skipUndefined: n
    } = Eg(this) && this || {}, s = {}, i = (a, d) => {
        const h = r && Ng(s, d) || d;
        xl(s[h]) && xl(a) ? s[h] = xc(s[h], a) : xl(a) ? s[h] = xc({}, a) : As(a) ? s[h] = a.slice() : (!n || !_s(a)) && (s[h] = a)
    };
    for (let a = 0, d = arguments.length; a < d; a++) arguments[a] && Ko(arguments[a], i);
    return s
}
const _b = (r, n, s, {
        allOwnKeys: i
    } = {}) => (Ko(n, (a, d) => {
        s && Rt(a) ? r[d] = wg(a, s) : r[d] = a
    }, {
        allOwnKeys: i
    }), r),
    Rb = r => (r.charCodeAt(0) === 65279 && (r = r.slice(1)), r),
    Tb = (r, n, s, i) => {
        r.prototype = Object.create(n.prototype, i), r.prototype.constructor = r, Object.defineProperty(r, "super", {
            value: n.prototype
        }), s && Object.assign(r.prototype, s)
    },
    Pb = (r, n, s, i) => {
        let a, d, h;
        const p = {};
        if (n = n || {}, r == null) return n;
        do {
            for (a = Object.getOwnPropertyNames(r), d = a.length; d-- > 0;) h = a[d], (!i || i(h, r, n)) && !p[h] && (n[h] = r[h], p[h] = !0);
            r = s !== !1 && Yc(r)
        } while (r && (!s || s(r, n)) && r !== Object.prototype);
        return n
    },
    Ob = (r, n, s) => {
        r = String(r), (s === void 0 || s > r.length) && (s = r.length), s -= n.length;
        const i = r.indexOf(n, s);
        return i !== -1 && i === s
    },
    Ab = r => {
        if (!r) return null;
        if (As(r)) return r;
        let n = r.length;
        if (!Sg(n)) return null;
        const s = new Array(n);
        for (; n-- > 0;) s[n] = r[n];
        return s
    },
    Lb = (r => n => r && n instanceof r)(typeof Uint8Array < "u" && Yc(Uint8Array)),
    Mb = (r, n) => {
        const i = (r && r[Al]).call(r);
        let a;
        for (;
            (a = i.next()) && !a.done;) {
            const d = a.value;
            n.call(r, d[0], d[1])
        }
    },
    Fb = (r, n) => {
        let s;
        const i = [];
        for (;
            (s = r.exec(n)) !== null;) i.push(s);
        return i
    },
    Db = en("HTMLFormElement"),
    Ib = r => r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, i, a) {
        return i.toUpperCase() + a
    }),
    Pp = (({
        hasOwnProperty: r
    }) => (n, s) => r.call(n, s))(Object.prototype),
    zb = en("RegExp"),
    jg = (r, n) => {
        const s = Object.getOwnPropertyDescriptors(r),
            i = {};
        Ko(s, (a, d) => {
            let h;
            (h = n(a, d, r)) !== !1 && (i[d] = h || a)
        }), Object.defineProperties(r, i)
    },
    Ub = r => {
        jg(r, (n, s) => {
            if (Rt(r) && ["arguments", "caller", "callee"].indexOf(s) !== -1) return !1;
            const i = r[s];
            if (Rt(i)) {
                if (n.enumerable = !1, "writable" in n) {
                    n.writable = !1;
                    return
                }
                n.set || (n.set = () => {
                    throw Error("Can not rewrite read-only method '" + s + "'")
                })
            }
        })
    },
    Bb = (r, n) => {
        const s = {},
            i = a => {
                a.forEach(d => {
                    s[d] = !0
                })
            };
        return As(r) ? i(r) : i(String(r).split(n)), s
    },
    $b = () => {},
    Wb = (r, n) => r != null && Number.isFinite(r = +r) ? r : n;

function Vb(r) {
    return !!(r && Rt(r.append) && r[bg] === "FormData" && r[Al])
}
const Hb = r => {
        const n = new Array(10),
            s = (i, a) => {
                if (Qo(i)) {
                    if (n.indexOf(i) >= 0) return;
                    if (qo(i)) return i;
                    if (!("toJSON" in i)) {
                        n[a] = i;
                        const d = As(i) ? [] : {};
                        return Ko(i, (h, p) => {
                            const g = s(h, a + 1);
                            !_s(g) && (d[p] = g)
                        }), n[a] = void 0, d
                    }
                }
                return i
            };
        return s(r, 0)
    },
    qb = en("AsyncFunction"),
    Qb = r => r && (Qo(r) || Rt(r)) && Rt(r.then) && Rt(r.catch),
    Cg = ((r, n) => r ? setImmediate : n ? ((s, i) => (Rr.addEventListener("message", ({
        source: a,
        data: d
    }) => {
        a === Rr && d === s && i.length && i.shift()()
    }, !1), a => {
        i.push(a), Rr.postMessage(s, "*")
    }))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", Rt(Rr.postMessage)),
    Kb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rr) : typeof process < "u" && process.nextTick || Cg,
    Gb = r => r != null && Rt(r[Al]),
    L = {
        isArray: As,
        isArrayBuffer: kg,
        isBuffer: qo,
        isFormData: bb,
        isArrayBufferView: fb,
        isString: hb,
        isNumber: Sg,
        isBoolean: pb,
        isObject: Qo,
        isPlainObject: xl,
        isEmptyObject: mb,
        isReadableStream: Sb,
        isRequest: Nb,
        isResponse: Eb,
        isHeaders: jb,
        isUndefined: _s,
        isDate: gb,
        isFile: yb,
        isBlob: vb,
        isRegExp: zb,
        isFunction: Rt,
        isStream: wb,
        isURLSearchParams: kb,
        isTypedArray: Lb,
        isFileList: xb,
        forEach: Ko,
        merge: xc,
        extend: _b,
        trim: Cb,
        stripBOM: Rb,
        inherits: Tb,
        toFlatObject: Pb,
        kindOf: Ll,
        kindOfTest: en,
        endsWith: Ob,
        toArray: Ab,
        forEachEntry: Mb,
        matchAll: Fb,
        isHTMLForm: Db,
        hasOwnProperty: Pp,
        hasOwnProp: Pp,
        reduceDescriptors: jg,
        freezeMethods: Ub,
        toObjectSet: Bb,
        toCamelCase: Ib,
        noop: $b,
        toFiniteNumber: Wb,
        findKey: Ng,
        global: Rr,
        isContextDefined: Eg,
        isSpecCompliantForm: Vb,
        toJSONObject: Hb,
        isAsyncFn: qb,
        isThenable: Qb,
        setImmediate: Cg,
        asap: Kb,
        isIterable: Gb
    };

function xe(r, n, s, i, a) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = r, this.name = "AxiosError", n && (this.code = n), s && (this.config = s), i && (this.request = i), a && (this.response = a, this.status = a.status ? a.status : null)
}
L.inherits(xe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const _g = xe.prototype,
    Rg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(r => {
    Rg[r] = {
        value: r
    }
});
Object.defineProperties(xe, Rg);
Object.defineProperty(_g, "isAxiosError", {
    value: !0
});
xe.from = (r, n, s, i, a, d) => {
    const h = Object.create(_g);
    L.toFlatObject(r, h, function(v) {
        return v !== Error.prototype
    }, y => y !== "isAxiosError");
    const p = r && r.message ? r.message : "Error",
        g = n == null && r ? r.code : n;
    return xe.call(h, p, g, s, i, a), r && h.cause == null && Object.defineProperty(h, "cause", {
        value: r,
        configurable: !0
    }), h.name = r && r.name || "Error", d && Object.assign(h, d), h
};
const Yb = null;

function wc(r) {
    return L.isPlainObject(r) || L.isArray(r)
}

function Tg(r) {
    return L.endsWith(r, "[]") ? r.slice(0, -2) : r
}

function Op(r, n, s) {
    return r ? r.concat(n).map(function(a, d) {
        return a = Tg(a), !s && d ? "[" + a + "]" : a
    }).join(s ? "." : "") : n
}

function Jb(r) {
    return L.isArray(r) && !r.some(wc)
}
const Xb = L.toFlatObject(L, {}, null, function(n) {
    return /^is[A-Z]/.test(n)
});

function Fl(r, n, s) {
    if (!L.isObject(r)) throw new TypeError("target must be an object");
    n = n || new FormData, s = L.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(E, b) {
        return !L.isUndefined(b[E])
    });
    const i = s.metaTokens,
        a = s.visitor || v,
        d = s.dots,
        h = s.indexes,
        g = (s.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(n);
    if (!L.isFunction(a)) throw new TypeError("visitor must be a function");

    function y(k) {
        if (k === null) return "";
        if (L.isDate(k)) return k.toISOString();
        if (L.isBoolean(k)) return k.toString();
        if (!g && L.isBlob(k)) throw new xe("Blob is not supported. Use a Buffer instead.");
        return L.isArrayBuffer(k) || L.isTypedArray(k) ? g && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k
    }

    function v(k, E, b) {
        let M = k;
        if (k && !b && typeof k == "object") {
            if (L.endsWith(E, "{}")) E = i ? E : E.slice(0, -2), k = JSON.stringify(k);
            else if (L.isArray(k) && Jb(k) || (L.isFileList(k) || L.endsWith(E, "[]")) && (M = L.toArray(k))) return E = Tg(E), M.forEach(function(I, z) {
                !(L.isUndefined(I) || I === null) && n.append(h === !0 ? Op([E], z, d) : h === null ? E : E + "[]", y(I))
            }), !1
        }
        return wc(k) ? !0 : (n.append(Op(b, E, d), y(k)), !1)
    }
    const w = [],
        R = Object.assign(Xb, {
            defaultVisitor: v,
            convertValue: y,
            isVisitable: wc
        });

    function T(k, E) {
        if (!L.isUndefined(k)) {
            if (w.indexOf(k) !== -1) throw Error("Circular reference detected in " + E.join("."));
            w.push(k), L.forEach(k, function(M, q) {
                (!(L.isUndefined(M) || M === null) && a.call(n, M, L.isString(q) ? q.trim() : q, E, R)) === !0 && T(M, E ? E.concat(q) : [q])
            }), w.pop()
        }
    }
    if (!L.isObject(r)) throw new TypeError("data must be an object");
    return T(r), n
}

function Ap(r) {
    const n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(i) {
        return n[i]
    })
}

function Jc(r, n) {
    this._pairs = [], r && Fl(r, this, n)
}
const Pg = Jc.prototype;
Pg.append = function(n, s) {
    this._pairs.push([n, s])
};
Pg.toString = function(n) {
    const s = n ? function(i) {
        return n.call(this, i, Ap)
    } : Ap;
    return this._pairs.map(function(a) {
        return s(a[0]) + "=" + s(a[1])
    }, "").join("&")
};

function Zb(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}

function Og(r, n, s) {
    if (!n) return r;
    const i = s && s.encode || Zb;
    L.isFunction(s) && (s = {
        serialize: s
    });
    const a = s && s.serialize;
    let d;
    if (a ? d = a(n, s) : d = L.isURLSearchParams(n) ? n.toString() : new Jc(n, s).toString(i), d) {
        const h = r.indexOf("#");
        h !== -1 && (r = r.slice(0, h)), r += (r.indexOf("?") === -1 ? "?" : "&") + d
    }
    return r
}
class Lp {
    constructor() {
        this.handlers = []
    }
    use(n, s, i) {
        return this.handlers.push({
            fulfilled: n,
            rejected: s,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }), this.handlers.length - 1
    }
    eject(n) {
        this.handlers[n] && (this.handlers[n] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(n) {
        L.forEach(this.handlers, function(i) {
            i !== null && n(i)
        })
    }
}
const Ag = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    ek = typeof URLSearchParams < "u" ? URLSearchParams : Jc,
    tk = typeof FormData < "u" ? FormData : null,
    nk = typeof Blob < "u" ? Blob : null,
    rk = {
        isBrowser: !0,
        classes: {
            URLSearchParams: ek,
            FormData: tk,
            Blob: nk
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Xc = typeof window < "u" && typeof document < "u",
    bc = typeof navigator == "object" && navigator || void 0,
    sk = Xc && (!bc || ["ReactNative", "NativeScript", "NS"].indexOf(bc.product) < 0),
    ok = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
    ik = Xc && window.location.href || "http://localhost",
    lk = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Xc,
        hasStandardBrowserEnv: sk,
        hasStandardBrowserWebWorkerEnv: ok,
        navigator: bc,
        origin: ik
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pt = { ...lk,
        ...rk
    };

function ak(r, n) {
    return Fl(r, new pt.classes.URLSearchParams, {
        visitor: function(s, i, a, d) {
            return pt.isNode && L.isBuffer(s) ? (this.append(i, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments)
        },
        ...n
    })
}

function uk(r) {
    return L.matchAll(/\w+|\[(\w*)]/g, r).map(n => n[0] === "[]" ? "" : n[1] || n[0])
}

function ck(r) {
    const n = {},
        s = Object.keys(r);
    let i;
    const a = s.length;
    let d;
    for (i = 0; i < a; i++) d = s[i], n[d] = r[d];
    return n
}

function Lg(r) {
    function n(s, i, a, d) {
        let h = s[d++];
        if (h === "__proto__") return !0;
        const p = Number.isFinite(+h),
            g = d >= s.length;
        return h = !h && L.isArray(a) ? a.length : h, g ? (L.hasOwnProp(a, h) ? a[h] = [a[h], i] : a[h] = i, !p) : ((!a[h] || !L.isObject(a[h])) && (a[h] = []), n(s, i, a[h], d) && L.isArray(a[h]) && (a[h] = ck(a[h])), !p)
    }
    if (L.isFormData(r) && L.isFunction(r.entries)) {
        const s = {};
        return L.forEachEntry(r, (i, a) => {
            n(uk(i), a, s, 0)
        }), s
    }
    return null
}

function dk(r, n, s) {
    if (L.isString(r)) try {
        return (n || JSON.parse)(r), L.trim(r)
    } catch (i) {
        if (i.name !== "SyntaxError") throw i
    }
    return (s || JSON.stringify)(r)
}
const Go = {
    transitional: Ag,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(n, s) {
        const i = s.getContentType() || "",
            a = i.indexOf("application/json") > -1,
            d = L.isObject(n);
        if (d && L.isHTMLForm(n) && (n = new FormData(n)), L.isFormData(n)) return a ? JSON.stringify(Lg(n)) : n;
        if (L.isArrayBuffer(n) || L.isBuffer(n) || L.isStream(n) || L.isFile(n) || L.isBlob(n) || L.isReadableStream(n)) return n;
        if (L.isArrayBufferView(n)) return n.buffer;
        if (L.isURLSearchParams(n)) return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), n.toString();
        let p;
        if (d) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1) return ak(n, this.formSerializer).toString();
            if ((p = L.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
                const g = this.env && this.env.FormData;
                return Fl(p ? {
                    "files[]": n
                } : n, g && new g, this.formSerializer)
            }
        }
        return d || a ? (s.setContentType("application/json", !1), dk(n)) : n
    }],
    transformResponse: [function(n) {
        const s = this.transitional || Go.transitional,
            i = s && s.forcedJSONParsing,
            a = this.responseType === "json";
        if (L.isResponse(n) || L.isReadableStream(n)) return n;
        if (n && L.isString(n) && (i && !this.responseType || a)) {
            const h = !(s && s.silentJSONParsing) && a;
            try {
                return JSON.parse(n, this.parseReviver)
            } catch (p) {
                if (h) throw p.name === "SyntaxError" ? xe.from(p, xe.ERR_BAD_RESPONSE, this, null, this.response) : p
            }
        }
        return n
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: pt.classes.FormData,
        Blob: pt.classes.Blob
    },
    validateStatus: function(n) {
        return n >= 200 && n < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], r => {
    Go.headers[r] = {}
});
const fk = L.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    hk = r => {
        const n = {};
        let s, i, a;
        return r && r.split(`
`).forEach(function(h) {
            a = h.indexOf(":"), s = h.substring(0, a).trim().toLowerCase(), i = h.substring(a + 1).trim(), !(!s || n[s] && fk[s]) && (s === "set-cookie" ? n[s] ? n[s].push(i) : n[s] = [i] : n[s] = n[s] ? n[s] + ", " + i : i)
        }), n
    },
    Mp = Symbol("internals");

function Eo(r) {
    return r && String(r).trim().toLowerCase()
}

function wl(r) {
    return r === !1 || r == null ? r : L.isArray(r) ? r.map(wl) : String(r)
}

function pk(r) {
    const n = Object.create(null),
        s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = s.exec(r);) n[i[1]] = i[2];
    return n
}
const mk = r => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());

function Hu(r, n, s, i, a) {
    if (L.isFunction(i)) return i.call(this, n, s);
    if (a && (n = s), !!L.isString(n)) {
        if (L.isString(i)) return n.indexOf(i) !== -1;
        if (L.isRegExp(i)) return i.test(n)
    }
}

function gk(r) {
    return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, s, i) => s.toUpperCase() + i)
}

function yk(r, n) {
    const s = L.toCamelCase(" " + n);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(r, i + s, {
            value: function(a, d, h) {
                return this[i].call(this, n, a, d, h)
            },
            configurable: !0
        })
    })
}
let Tt = class {
    constructor(n) {
        n && this.set(n)
    }
    set(n, s, i) {
        const a = this;

        function d(p, g, y) {
            const v = Eo(g);
            if (!v) throw new Error("header name must be a non-empty string");
            const w = L.findKey(a, v);
            (!w || a[w] === void 0 || y === !0 || y === void 0 && a[w] !== !1) && (a[w || g] = wl(p))
        }
        const h = (p, g) => L.forEach(p, (y, v) => d(y, v, g));
        if (L.isPlainObject(n) || n instanceof this.constructor) h(n, s);
        else if (L.isString(n) && (n = n.trim()) && !mk(n)) h(hk(n), s);
        else if (L.isObject(n) && L.isIterable(n)) {
            let p = {},
                g, y;
            for (const v of n) {
                if (!L.isArray(v)) throw TypeError("Object iterator must return a key-value pair");
                p[y = v[0]] = (g = p[y]) ? L.isArray(g) ? [...g, v[1]] : [g, v[1]] : v[1]
            }
            h(p, s)
        } else n != null && d(s, n, i);
        return this
    }
    get(n, s) {
        if (n = Eo(n), n) {
            const i = L.findKey(this, n);
            if (i) {
                const a = this[i];
                if (!s) return a;
                if (s === !0) return pk(a);
                if (L.isFunction(s)) return s.call(this, a, i);
                if (L.isRegExp(s)) return s.exec(a);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(n, s) {
        if (n = Eo(n), n) {
            const i = L.findKey(this, n);
            return !!(i && this[i] !== void 0 && (!s || Hu(this, this[i], i, s)))
        }
        return !1
    }
    delete(n, s) {
        const i = this;
        let a = !1;

        function d(h) {
            if (h = Eo(h), h) {
                const p = L.findKey(i, h);
                p && (!s || Hu(i, i[p], p, s)) && (delete i[p], a = !0)
            }
        }
        return L.isArray(n) ? n.forEach(d) : d(n), a
    }
    clear(n) {
        const s = Object.keys(this);
        let i = s.length,
            a = !1;
        for (; i--;) {
            const d = s[i];
            (!n || Hu(this, this[d], d, n, !0)) && (delete this[d], a = !0)
        }
        return a
    }
    normalize(n) {
        const s = this,
            i = {};
        return L.forEach(this, (a, d) => {
            const h = L.findKey(i, d);
            if (h) {
                s[h] = wl(a), delete s[d];
                return
            }
            const p = n ? gk(d) : String(d).trim();
            p !== d && delete s[d], s[p] = wl(a), i[p] = !0
        }), this
    }
    concat(...n) {
        return this.constructor.concat(this, ...n)
    }
    toJSON(n) {
        const s = Object.create(null);
        return L.forEach(this, (i, a) => {
            i != null && i !== !1 && (s[a] = n && L.isArray(i) ? i.join(", ") : i)
        }), s
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([n, s]) => n + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(n) {
        return n instanceof this ? n : new this(n)
    }
    static concat(n, ...s) {
        const i = new this(n);
        return s.forEach(a => i.set(a)), i
    }
    static accessor(n) {
        const i = (this[Mp] = this[Mp] = {
                accessors: {}
            }).accessors,
            a = this.prototype;

        function d(h) {
            const p = Eo(h);
            i[p] || (yk(a, h), i[p] = !0)
        }
        return L.isArray(n) ? n.forEach(d) : d(n), this
    }
};
Tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Tt.prototype, ({
    value: r
}, n) => {
    let s = n[0].toUpperCase() + n.slice(1);
    return {
        get: () => r,
        set(i) {
            this[s] = i
        }
    }
});
L.freezeMethods(Tt);

function qu(r, n) {
    const s = this || Go,
        i = n || s,
        a = Tt.from(i.headers);
    let d = i.data;
    return L.forEach(r, function(p) {
        d = p.call(s, d, a.normalize(), n ? n.status : void 0)
    }), a.normalize(), d
}

function Mg(r) {
    return !!(r && r.__CANCEL__)
}

function Ls(r, n, s) {
    xe.call(this, r ? ? "canceled", xe.ERR_CANCELED, n, s), this.name = "CanceledError"
}
L.inherits(Ls, xe, {
    __CANCEL__: !0
});

function Fg(r, n, s) {
    const i = s.config.validateStatus;
    !s.status || !i || i(s.status) ? r(s) : n(new xe("Request failed with status code " + s.status, [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4], s.config, s.request, s))
}

function vk(r) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return n && n[1] || ""
}

function xk(r, n) {
    r = r || 10;
    const s = new Array(r),
        i = new Array(r);
    let a = 0,
        d = 0,
        h;
    return n = n !== void 0 ? n : 1e3,
        function(g) {
            const y = Date.now(),
                v = i[d];
            h || (h = y), s[a] = g, i[a] = y;
            let w = d,
                R = 0;
            for (; w !== a;) R += s[w++], w = w % r;
            if (a = (a + 1) % r, a === d && (d = (d + 1) % r), y - h < n) return;
            const T = v && y - v;
            return T ? Math.round(R * 1e3 / T) : void 0
        }
}

function wk(r, n) {
    let s = 0,
        i = 1e3 / n,
        a, d;
    const h = (y, v = Date.now()) => {
        s = v, a = null, d && (clearTimeout(d), d = null), r(...y)
    };
    return [(...y) => {
        const v = Date.now(),
            w = v - s;
        w >= i ? h(y, v) : (a = y, d || (d = setTimeout(() => {
            d = null, h(a)
        }, i - w)))
    }, () => a && h(a)]
}
const _l = (r, n, s = 3) => {
        let i = 0;
        const a = xk(50, 250);
        return wk(d => {
            const h = d.loaded,
                p = d.lengthComputable ? d.total : void 0,
                g = h - i,
                y = a(g),
                v = h <= p;
            i = h;
            const w = {
                loaded: h,
                total: p,
                progress: p ? h / p : void 0,
                bytes: g,
                rate: y || void 0,
                estimated: y && p && v ? (p - h) / y : void 0,
                event: d,
                lengthComputable: p != null,
                [n ? "download" : "upload"]: !0
            };
            r(w)
        }, s)
    },
    Fp = (r, n) => {
        const s = r != null;
        return [i => n[0]({
            lengthComputable: s,
            total: r,
            loaded: i
        }), n[1]]
    },
    Dp = r => (...n) => L.asap(() => r(...n)),
    bk = pt.hasStandardBrowserEnv ? ((r, n) => s => (s = new URL(s, pt.origin), r.protocol === s.protocol && r.host === s.host && (n || r.port === s.port)))(new URL(pt.origin), pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)) : () => !0,
    kk = pt.hasStandardBrowserEnv ? {
        write(r, n, s, i, a, d) {
            const h = [r + "=" + encodeURIComponent(n)];
            L.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()), L.isString(i) && h.push("path=" + i), L.isString(a) && h.push("domain=" + a), d === !0 && h.push("secure"), document.cookie = h.join("; ")
        },
        read(r) {
            const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
            return n ? decodeURIComponent(n[3]) : null
        },
        remove(r) {
            this.write(r, "", Date.now() - 864e5)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    };

function Sk(r) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}

function Nk(r, n) {
    return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r
}

function Dg(r, n, s) {
    let i = !Sk(n);
    return r && (i || s == !1) ? Nk(r, n) : n
}
const Ip = r => r instanceof Tt ? { ...r
} : r;

function Br(r, n) {
    n = n || {};
    const s = {};

    function i(y, v, w, R) {
        return L.isPlainObject(y) && L.isPlainObject(v) ? L.merge.call({
            caseless: R
        }, y, v) : L.isPlainObject(v) ? L.merge({}, v) : L.isArray(v) ? v.slice() : v
    }

    function a(y, v, w, R) {
        if (L.isUndefined(v)) {
            if (!L.isUndefined(y)) return i(void 0, y, w, R)
        } else return i(y, v, w, R)
    }

    function d(y, v) {
        if (!L.isUndefined(v)) return i(void 0, v)
    }

    function h(y, v) {
        if (L.isUndefined(v)) {
            if (!L.isUndefined(y)) return i(void 0, y)
        } else return i(void 0, v)
    }

    function p(y, v, w) {
        if (w in n) return i(y, v);
        if (w in r) return i(void 0, y)
    }
    const g = {
        url: d,
        method: d,
        data: d,
        baseURL: h,
        transformRequest: h,
        transformResponse: h,
        paramsSerializer: h,
        timeout: h,
        timeoutMessage: h,
        withCredentials: h,
        withXSRFToken: h,
        adapter: h,
        responseType: h,
        xsrfCookieName: h,
        xsrfHeaderName: h,
        onUploadProgress: h,
        onDownloadProgress: h,
        decompress: h,
        maxContentLength: h,
        maxBodyLength: h,
        beforeRedirect: h,
        transport: h,
        httpAgent: h,
        httpsAgent: h,
        cancelToken: h,
        socketPath: h,
        responseEncoding: h,
        validateStatus: p,
        headers: (y, v, w) => a(Ip(y), Ip(v), w, !0)
    };
    return L.forEach(Object.keys({ ...r,
        ...n
    }), function(v) {
        const w = g[v] || a,
            R = w(r[v], n[v], v);
        L.isUndefined(R) && w !== p || (s[v] = R)
    }), s
}
const Ig = r => {
        const n = Br({}, r);
        let {
            data: s,
            withXSRFToken: i,
            xsrfHeaderName: a,
            xsrfCookieName: d,
            headers: h,
            auth: p
        } = n;
        if (n.headers = h = Tt.from(h), n.url = Og(Dg(n.baseURL, n.url, n.allowAbsoluteUrls), r.params, r.paramsSerializer), p && h.set("Authorization", "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))), L.isFormData(s)) {
            if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv) h.setContentType(void 0);
            else if (L.isFunction(s.getHeaders)) {
                const g = s.getHeaders(),
                    y = ["content-type", "content-length"];
                Object.entries(g).forEach(([v, w]) => {
                    y.includes(v.toLowerCase()) && h.set(v, w)
                })
            }
        }
        if (pt.hasStandardBrowserEnv && (i && L.isFunction(i) && (i = i(n)), i || i !== !1 && bk(n.url))) {
            const g = a && d && kk.read(d);
            g && h.set(a, g)
        }
        return n
    },
    Ek = typeof XMLHttpRequest < "u",
    jk = Ek && function(r) {
        return new Promise(function(s, i) {
            const a = Ig(r);
            let d = a.data;
            const h = Tt.from(a.headers).normalize();
            let {
                responseType: p,
                onUploadProgress: g,
                onDownloadProgress: y
            } = a, v, w, R, T, k;

            function E() {
                T && T(), k && k(), a.cancelToken && a.cancelToken.unsubscribe(v), a.signal && a.signal.removeEventListener("abort", v)
            }
            let b = new XMLHttpRequest;
            b.open(a.method.toUpperCase(), a.url, !0), b.timeout = a.timeout;

            function M() {
                if (!b) return;
                const I = Tt.from("getAllResponseHeaders" in b && b.getAllResponseHeaders()),
                    G = {
                        data: !p || p === "text" || p === "json" ? b.responseText : b.response,
                        status: b.status,
                        statusText: b.statusText,
                        headers: I,
                        config: r,
                        request: b
                    };
                Fg(function(ge) {
                    s(ge), E()
                }, function(ge) {
                    i(ge), E()
                }, G), b = null
            }
            "onloadend" in b ? b.onloadend = M : b.onreadystatechange = function() {
                !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(M)
            }, b.onabort = function() {
                b && (i(new xe("Request aborted", xe.ECONNABORTED, r, b)), b = null)
            }, b.onerror = function(z) {
                const G = z && z.message ? z.message : "Network Error",
                    ce = new xe(G, xe.ERR_NETWORK, r, b);
                ce.event = z || null, i(ce), b = null
            }, b.ontimeout = function() {
                let z = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
                const G = a.transitional || Ag;
                a.timeoutErrorMessage && (z = a.timeoutErrorMessage), i(new xe(z, G.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED, r, b)), b = null
            }, d === void 0 && h.setContentType(null), "setRequestHeader" in b && L.forEach(h.toJSON(), function(z, G) {
                b.setRequestHeader(G, z)
            }), L.isUndefined(a.withCredentials) || (b.withCredentials = !!a.withCredentials), p && p !== "json" && (b.responseType = a.responseType), y && ([R, k] = _l(y, !0), b.addEventListener("progress", R)), g && b.upload && ([w, T] = _l(g), b.upload.addEventListener("progress", w), b.upload.addEventListener("loadend", T)), (a.cancelToken || a.signal) && (v = I => {
                b && (i(!I || I.type ? new Ls(null, r, b) : I), b.abort(), b = null)
            }, a.cancelToken && a.cancelToken.subscribe(v), a.signal && (a.signal.aborted ? v() : a.signal.addEventListener("abort", v)));
            const q = vk(a.url);
            if (q && pt.protocols.indexOf(q) === -1) {
                i(new xe("Unsupported protocol " + q + ":", xe.ERR_BAD_REQUEST, r));
                return
            }
            b.send(d || null)
        })
    },
    Ck = (r, n) => {
        const {
            length: s
        } = r = r ? r.filter(Boolean) : [];
        if (n || s) {
            let i = new AbortController,
                a;
            const d = function(y) {
                if (!a) {
                    a = !0, p();
                    const v = y instanceof Error ? y : this.reason;
                    i.abort(v instanceof xe ? v : new Ls(v instanceof Error ? v.message : v))
                }
            };
            let h = n && setTimeout(() => {
                h = null, d(new xe(`timeout ${n} of ms exceeded`, xe.ETIMEDOUT))
            }, n);
            const p = () => {
                r && (h && clearTimeout(h), h = null, r.forEach(y => {
                    y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d)
                }), r = null)
            };
            r.forEach(y => y.addEventListener("abort", d));
            const {
                signal: g
            } = i;
            return g.unsubscribe = () => L.asap(p), g
        }
    },
    _k = function*(r, n) {
        let s = r.byteLength;
        if (s < n) {
            yield r;
            return
        }
        let i = 0,
            a;
        for (; i < s;) a = i + n, yield r.slice(i, a), i = a
    },
    Rk = async function*(r, n) {
        for await (const s of Tk(r)) yield* _k(s, n)
    },
    Tk = async function*(r) {
        if (r[Symbol.asyncIterator]) {
            yield* r;
            return
        }
        const n = r.getReader();
        try {
            for (;;) {
                const {
                    done: s,
                    value: i
                } = await n.read();
                if (s) break;
                yield i
            }
        } finally {
            await n.cancel()
        }
    },
    zp = (r, n, s, i) => {
        const a = Rk(r, n);
        let d = 0,
            h, p = g => {
                h || (h = !0, i && i(g))
            };
        return new ReadableStream({
            async pull(g) {
                try {
                    const {
                        done: y,
                        value: v
                    } = await a.next();
                    if (y) {
                        p(), g.close();
                        return
                    }
                    let w = v.byteLength;
                    if (s) {
                        let R = d += w;
                        s(R)
                    }
                    g.enqueue(new Uint8Array(v))
                } catch (y) {
                    throw p(y), y
                }
            },
            cancel(g) {
                return p(g), a.return()
            }
        }, {
            highWaterMark: 2
        })
    },
    Up = 64 * 1024,
    {
        isFunction: dl
    } = L,
    Pk = (({
        Request: r,
        Response: n
    }) => ({
        Request: r,
        Response: n
    }))(L.global),
    {
        ReadableStream: Bp,
        TextEncoder: $p
    } = L.global,
    Wp = (r, ...n) => {
        try {
            return !!r(...n)
        } catch {
            return !1
        }
    },
    Ok = r => {
        r = L.merge.call({
            skipUndefined: !0
        }, Pk, r);
        const {
            fetch: n,
            Request: s,
            Response: i
        } = r, a = n ? dl(n) : typeof fetch == "function", d = dl(s), h = dl(i);
        if (!a) return !1;
        const p = a && dl(Bp),
            g = a && (typeof $p == "function" ? (k => E => k.encode(E))(new $p) : async k => new Uint8Array(await new s(k).arrayBuffer())),
            y = d && p && Wp(() => {
                let k = !1;
                const E = new s(pt.origin, {
                    body: new Bp,
                    method: "POST",
                    get duplex() {
                        return k = !0, "half"
                    }
                }).headers.has("Content-Type");
                return k && !E
            }),
            v = h && p && Wp(() => L.isReadableStream(new i("").body)),
            w = {
                stream: v && (k => k.body)
            };
        a && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(k => {
            !w[k] && (w[k] = (E, b) => {
                let M = E && E[k];
                if (M) return M.call(E);
                throw new xe(`Response type '${k}' is not supported`, xe.ERR_NOT_SUPPORT, b)
            })
        });
        const R = async k => {
                if (k == null) return 0;
                if (L.isBlob(k)) return k.size;
                if (L.isSpecCompliantForm(k)) return (await new s(pt.origin, {
                    method: "POST",
                    body: k
                }).arrayBuffer()).byteLength;
                if (L.isArrayBufferView(k) || L.isArrayBuffer(k)) return k.byteLength;
                if (L.isURLSearchParams(k) && (k = k + ""), L.isString(k)) return (await g(k)).byteLength
            },
            T = async (k, E) => {
                const b = L.toFiniteNumber(k.getContentLength());
                return b ? ? R(E)
            };
        return async k => {
            let {
                url: E,
                method: b,
                data: M,
                signal: q,
                cancelToken: I,
                timeout: z,
                onDownloadProgress: G,
                onUploadProgress: ce,
                responseType: ge,
                headers: F,
                withCredentials: V = "same-origin",
                fetchOptions: K
            } = Ig(k), Z = n || fetch;
            ge = ge ? (ge + "").toLowerCase() : "text";
            let B = Ck([q, I && I.toAbortSignal()], z),
                se = null;
            const _e = B && B.unsubscribe && (() => {
                B.unsubscribe()
            });
            let pe;
            try {
                if (ce && y && b !== "get" && b !== "head" && (pe = await T(F, M)) !== 0) {
                    let _ = new s(E, {
                            method: "POST",
                            body: M,
                            duplex: "half"
                        }),
                        U;
                    if (L.isFormData(M) && (U = _.headers.get("content-type")) && F.setContentType(U), _.body) {
                        const [le, ue] = Fp(pe, _l(Dp(ce)));
                        M = zp(_.body, Up, le, ue)
                    }
                }
                L.isString(V) || (V = V ? "include" : "omit");
                const de = d && "credentials" in s.prototype,
                    we = { ...K,
                        signal: B,
                        method: b.toUpperCase(),
                        headers: F.normalize().toJSON(),
                        body: M,
                        duplex: "half",
                        credentials: de ? V : void 0
                    };
                se = d && new s(E, we);
                let D = await (d ? Z(se, K) : Z(E, we));
                const ae = v && (ge === "stream" || ge === "response");
                if (v && (G || ae && _e)) {
                    const _ = {};
                    ["status", "statusText", "headers"].forEach(be => {
                        _[be] = D[be]
                    });
                    const U = L.toFiniteNumber(D.headers.get("content-length")),
                        [le, ue] = G && Fp(U, _l(Dp(G), !0)) || [];
                    D = new i(zp(D.body, Up, le, () => {
                        ue && ue(), _e && _e()
                    }), _)
                }
                ge = ge || "text";
                let Y = await w[L.findKey(w, ge) || "text"](D, k);
                return !ae && _e && _e(), await new Promise((_, U) => {
                    Fg(_, U, {
                        data: Y,
                        headers: Tt.from(D.headers),
                        status: D.status,
                        statusText: D.statusText,
                        config: k,
                        request: se
                    })
                })
            } catch (de) {
                throw _e && _e(), de && de.name === "TypeError" && /Load failed|fetch/i.test(de.message) ? Object.assign(new xe("Network Error", xe.ERR_NETWORK, k, se), {
                    cause: de.cause || de
                }) : xe.from(de, de && de.code, k, se)
            }
        }
    },
    Ak = new Map,
    zg = r => {
        let n = r ? r.env : {};
        const {
            fetch: s,
            Request: i,
            Response: a
        } = n, d = [i, a, s];
        let h = d.length,
            p = h,
            g, y, v = Ak;
        for (; p--;) g = d[p], y = v.get(g), y === void 0 && v.set(g, y = p ? new Map : Ok(n)), v = y;
        return y
    };
zg();
const kc = {
    http: Yb,
    xhr: jk,
    fetch: {
        get: zg
    }
};
L.forEach(kc, (r, n) => {
    if (r) {
        try {
            Object.defineProperty(r, "name", {
                value: n
            })
        } catch {}
        Object.defineProperty(r, "adapterName", {
            value: n
        })
    }
});
const Vp = r => `- ${r}`,
    Lk = r => L.isFunction(r) || r === null || r === !1,
    Ug = {
        getAdapter: (r, n) => {
            r = L.isArray(r) ? r : [r];
            const {
                length: s
            } = r;
            let i, a;
            const d = {};
            for (let h = 0; h < s; h++) {
                i = r[h];
                let p;
                if (a = i, !Lk(i) && (a = kc[(p = String(i)).toLowerCase()], a === void 0)) throw new xe(`Unknown adapter '${p}'`);
                if (a && (L.isFunction(a) || (a = a.get(n)))) break;
                d[p || "#" + h] = a
            }
            if (!a) {
                const h = Object.entries(d).map(([g, y]) => `adapter ${g} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build"));
                let p = s ? h.length > 1 ? `since :
` + h.map(Vp).join(`
`) : " " + Vp(h[0]) : "as no adapter specified";
                throw new xe("There is no suitable adapter to dispatch the request " + p, "ERR_NOT_SUPPORT")
            }
            return a
        },
        adapters: kc
    };

function Qu(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted) throw new Ls(null, r)
}

function Hp(r) {
    return Qu(r), r.headers = Tt.from(r.headers), r.data = qu.call(r, r.transformRequest), ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1), Ug.getAdapter(r.adapter || Go.adapter, r)(r).then(function(i) {
        return Qu(r), i.data = qu.call(r, r.transformResponse, i), i.headers = Tt.from(i.headers), i
    }, function(i) {
        return Mg(i) || (Qu(r), i && i.response && (i.response.data = qu.call(r, r.transformResponse, i.response), i.response.headers = Tt.from(i.response.headers))), Promise.reject(i)
    })
}
const Bg = "1.12.2",
    Dl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((r, n) => {
    Dl[r] = function(i) {
        return typeof i === r || "a" + (n < 1 ? "n " : " ") + r
    }
});
const qp = {};
Dl.transitional = function(n, s, i) {
    function a(d, h) {
        return "[Axios v" + Bg + "] Transitional option '" + d + "'" + h + (i ? ". " + i : "")
    }
    return (d, h, p) => {
        if (n === !1) throw new xe(a(h, " has been removed" + (s ? " in " + s : "")), xe.ERR_DEPRECATED);
        return s && !qp[h] && (qp[h] = !0, console.warn(a(h, " has been deprecated since v" + s + " and will be removed in the near future"))), n ? n(d, h, p) : !0
    }
};
Dl.spelling = function(n) {
    return (s, i) => (console.warn(`${i} is likely a misspelling of ${n}`), !0)
};

function Mk(r, n, s) {
    if (typeof r != "object") throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(r);
    let a = i.length;
    for (; a-- > 0;) {
        const d = i[a],
            h = n[d];
        if (h) {
            const p = r[d],
                g = p === void 0 || h(p, d, r);
            if (g !== !0) throw new xe("option " + d + " must be " + g, xe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0) throw new xe("Unknown option " + d, xe.ERR_BAD_OPTION)
    }
}
const bl = {
        assertOptions: Mk,
        validators: Dl
    },
    ln = bl.validators;
let zr = class {
    constructor(n) {
        this.defaults = n || {}, this.interceptors = {
            request: new Lp,
            response: new Lp
        }
    }
    async request(n, s) {
        try {
            return await this._request(n, s)
        } catch (i) {
            if (i instanceof Error) {
                let a = {};
                Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error;
                const d = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? d && !String(i.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + d) : i.stack = d
                } catch {}
            }
            throw i
        }
    }
    _request(n, s) {
        typeof n == "string" ? (s = s || {}, s.url = n) : s = n || {}, s = Br(this.defaults, s);
        const {
            transitional: i,
            paramsSerializer: a,
            headers: d
        } = s;
        i !== void 0 && bl.assertOptions(i, {
            silentJSONParsing: ln.transitional(ln.boolean),
            forcedJSONParsing: ln.transitional(ln.boolean),
            clarifyTimeoutError: ln.transitional(ln.boolean)
        }, !1), a != null && (L.isFunction(a) ? s.paramsSerializer = {
            serialize: a
        } : bl.assertOptions(a, {
            encode: ln.function,
            serialize: ln.function
        }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), bl.assertOptions(s, {
            baseUrl: ln.spelling("baseURL"),
            withXsrfToken: ln.spelling("withXSRFToken")
        }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let h = d && L.merge(d.common, d[s.method]);
        d && L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], k => {
            delete d[k]
        }), s.headers = Tt.concat(h, d);
        const p = [];
        let g = !0;
        this.interceptors.request.forEach(function(E) {
            typeof E.runWhen == "function" && E.runWhen(s) === !1 || (g = g && E.synchronous, p.unshift(E.fulfilled, E.rejected))
        });
        const y = [];
        this.interceptors.response.forEach(function(E) {
            y.push(E.fulfilled, E.rejected)
        });
        let v, w = 0,
            R;
        if (!g) {
            const k = [Hp.bind(this), void 0];
            for (k.unshift(...p), k.push(...y), R = k.length, v = Promise.resolve(s); w < R;) v = v.then(k[w++], k[w++]);
            return v
        }
        R = p.length;
        let T = s;
        for (; w < R;) {
            const k = p[w++],
                E = p[w++];
            try {
                T = k(T)
            } catch (b) {
                E.call(this, b);
                break
            }
        }
        try {
            v = Hp.call(this, T)
        } catch (k) {
            return Promise.reject(k)
        }
        for (w = 0, R = y.length; w < R;) v = v.then(y[w++], y[w++]);
        return v
    }
    getUri(n) {
        n = Br(this.defaults, n);
        const s = Dg(n.baseURL, n.url, n.allowAbsoluteUrls);
        return Og(s, n.params, n.paramsSerializer)
    }
};
L.forEach(["delete", "get", "head", "options"], function(n) {
    zr.prototype[n] = function(s, i) {
        return this.request(Br(i || {}, {
            method: n,
            url: s,
            data: (i || {}).data
        }))
    }
});
L.forEach(["post", "put", "patch"], function(n) {
    function s(i) {
        return function(d, h, p) {
            return this.request(Br(p || {}, {
                method: n,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: d,
                data: h
            }))
        }
    }
    zr.prototype[n] = s(), zr.prototype[n + "Form"] = s(!0)
});
let Fk = class $g {
    constructor(n) {
        if (typeof n != "function") throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(d) {
            s = d
        });
        const i = this;
        this.promise.then(a => {
            if (!i._listeners) return;
            let d = i._listeners.length;
            for (; d-- > 0;) i._listeners[d](a);
            i._listeners = null
        }), this.promise.then = a => {
            let d;
            const h = new Promise(p => {
                i.subscribe(p), d = p
            }).then(a);
            return h.cancel = function() {
                i.unsubscribe(d)
            }, h
        }, n(function(d, h, p) {
            i.reason || (i.reason = new Ls(d, h, p), s(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(n) {
        if (this.reason) {
            n(this.reason);
            return
        }
        this._listeners ? this._listeners.push(n) : this._listeners = [n]
    }
    unsubscribe(n) {
        if (!this._listeners) return;
        const s = this._listeners.indexOf(n);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const n = new AbortController,
            s = i => {
                n.abort(i)
            };
        return this.subscribe(s), n.signal.unsubscribe = () => this.unsubscribe(s), n.signal
    }
    static source() {
        let n;
        return {
            token: new $g(function(a) {
                n = a
            }),
            cancel: n
        }
    }
};

function Dk(r) {
    return function(s) {
        return r.apply(null, s)
    }
}

function Ik(r) {
    return L.isObject(r) && r.isAxiosError === !0
}
const Sc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Sc).forEach(([r, n]) => {
    Sc[n] = r
});

function Wg(r) {
    const n = new zr(r),
        s = wg(zr.prototype.request, n);
    return L.extend(s, zr.prototype, n, {
        allOwnKeys: !0
    }), L.extend(s, n, null, {
        allOwnKeys: !0
    }), s.create = function(a) {
        return Wg(Br(r, a))
    }, s
}
const Qe = Wg(Go);
Qe.Axios = zr;
Qe.CanceledError = Ls;
Qe.CancelToken = Fk;
Qe.isCancel = Mg;
Qe.VERSION = Bg;
Qe.toFormData = Fl;
Qe.AxiosError = xe;
Qe.Cancel = Qe.CanceledError;
Qe.all = function(n) {
    return Promise.all(n)
};
Qe.spread = Dk;
Qe.isAxiosError = Ik;
Qe.mergeConfig = Br;
Qe.AxiosHeaders = Tt;
Qe.formToJSON = r => Lg(L.isHTMLForm(r) ? new FormData(r) : r);
Qe.getAdapter = Ug.getAdapter;
Qe.HttpStatusCode = Sc;
Qe.default = Qe;
const {
    Axios: Q2,
    AxiosError: K2,
    CanceledError: G2,
    isCancel: Y2,
    CancelToken: J2,
    VERSION: X2,
    all: Z2,
    Cancel: eN,
    isAxiosError: tN,
    spread: nN,
    toFormData: rN,
    AxiosHeaders: sN,
    HttpStatusCode: oN,
    formToJSON: iN,
    getAdapter: lN,
    mergeConfig: aN
} = Qe, zk = typeof window > "u", Qp = !zk && window.self !== window.top, at = [];
for (let r = 0; r < 256; ++r) at.push((r + 256).toString(16).slice(1));

function Uk(r, n = 0) {
    return (at[r[n + 0]] + at[r[n + 1]] + at[r[n + 2]] + at[r[n + 3]] + "-" + at[r[n + 4]] + at[r[n + 5]] + "-" + at[r[n + 6]] + at[r[n + 7]] + "-" + at[r[n + 8]] + at[r[n + 9]] + "-" + at[r[n + 10]] + at[r[n + 11]] + at[r[n + 12]] + at[r[n + 13]] + at[r[n + 14]] + at[r[n + 15]]).toLowerCase()
}
let Ku;
const Bk = new Uint8Array(16);

function $k() {
    if (!Ku) {
        if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Ku = crypto.getRandomValues.bind(crypto)
    }
    return Ku(Bk)
}
const Wk = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    Kp = {
        randomUUID: Wk
    };

function Vk(r, n, s) {
    var a;
    r = r || {};
    const i = r.random ? ? ((a = r.rng) == null ? void 0 : a.call(r)) ? ? $k();
    if (i.length < 16) throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Uk(i)
}

function Hk(r, n, s) {
    return Kp.randomUUID && !r ? Kp.randomUUID() : Vk(r)
}
class qk extends Error {
    constructor(n, s, i, a, d) {
        super(n), this.name = "Base44Error", this.status = s, this.code = i, this.data = a, this.originalError = d
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}

function Ro({
    baseURL: r,
    headers: n = {},
    token: s,
    interceptResponses: i = !0,
    onError: a
}) {
    const d = Qe.create({
        baseURL: r,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...n
        }
    });
    return s && (d.defaults.headers.common.Authorization = `Bearer ${s}`), d.interceptors.request.use(h => {
        typeof window < "u" && h.headers.set("X-Origin-URL", window.location.href);
        const p = Hk();
        if (h.requestId = p, Qp) try {
            window.parent.postMessage({
                type: "api-request-start",
                requestId: p,
                data: {
                    url: r + h.url,
                    method: h.method,
                    body: h.data instanceof FormData ? "[FormData object]" : h.data
                }
            }, "*")
        } catch {}
        return h
    }), i && d.interceptors.response.use(h => {
        var p;
        const g = (p = h.config) === null || p === void 0 ? void 0 : p.requestId;
        try {
            Qp && g && window.parent.postMessage({
                type: "api-request-end",
                requestId: g,
                data: {
                    statusCode: h.status,
                    response: h.data
                }
            }, "*")
        } catch {}
        return h.data
    }, h => {
        var p, g, y, v, w, R, T, k;
        const E = ((g = (p = h.response) === null || p === void 0 ? void 0 : p.data) === null || g === void 0 ? void 0 : g.message) || ((v = (y = h.response) === null || y === void 0 ? void 0 : y.data) === null || v === void 0 ? void 0 : v.detail) || h.message,
            b = new qk(E, (w = h.response) === null || w === void 0 ? void 0 : w.status, (T = (R = h.response) === null || R === void 0 ? void 0 : R.data) === null || T === void 0 ? void 0 : T.code, (k = h.response) === null || k === void 0 ? void 0 : k.data, h);
        return a == null || a(b), Promise.reject(b)
    }), d
}

function Gp(r, n) {
    return new Proxy({}, {
        get(s, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_"))) return Qk(r, n, i)
        }
    })
}

function Qk(r, n, s) {
    const i = `/apps/${n}/entities/${s}`;
    return {
        async list(a, d, h, p) {
            const g = {};
            return a && (g.sort = a), d && (g.limit = d), h && (g.skip = h), p && (g.fields = Array.isArray(p) ? p.join(",") : p), r.get(i, {
                params: g
            })
        },
        async filter(a, d, h, p, g) {
            const y = {
                q: JSON.stringify(a)
            };
            return d && (y.sort = d), h && (y.limit = h), p && (y.skip = p), g && (y.fields = Array.isArray(g) ? g.join(",") : g), r.get(i, {
                params: y
            })
        },
        async get(a) {
            return r.get(`${i}/${a}`)
        },
        async create(a) {
            return r.post(i, a)
        },
        async update(a, d) {
            return r.put(`${i}/${a}`, d)
        },
        async delete(a) {
            return r.delete(`${i}/${a}`)
        },
        async deleteMany(a) {
            return r.delete(i, {
                data: a
            })
        },
        async bulkCreate(a) {
            return r.post(`${i}/bulk`, a)
        },
        async importEntities(a) {
            const d = new FormData;
            return d.append("file", a, a.name), r.post(`${i}/import`, d, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    }
}

function Yp(r, n) {
    return new Proxy({}, {
        get(s, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_"))) return new Proxy({}, {
                get(a, d) {
                    if (!(typeof d != "string" || d === "then" || d.startsWith("_"))) return async h => {
                        if (typeof h == "string") throw new Error(`Integration ${d} must receive an object with named parameters, received: ${h}`);
                        let p, g;
                        return h instanceof FormData || h && Object.values(h).some(y => y instanceof File) ? (p = new FormData, Object.keys(h).forEach(y => {
                            h[y] instanceof File ? p.append(y, h[y], h[y].name) : typeof h[y] == "object" && h[y] !== null ? p.append(y, JSON.stringify(h[y])) : p.append(y, h[y])
                        }), g = "multipart/form-data") : (p = h, g = "application/json"), i === "Core" ? r.post(`/apps/${n}/integration-endpoints/Core/${d}`, p || h, {
                            headers: {
                                "Content-Type": g
                            }
                        }) : r.post(`/apps/${n}/integration-endpoints/installable/${i}/integration-endpoints/${d}`, p || h, {
                            headers: {
                                "Content-Type": g
                            }
                        })
                    }
                }
            })
        }
    })
}

function Kk(r, n, s, i) {
    return {
        async me() {
            return r.get(`/apps/${s}/entities/User/me`)
        },
        async updateMe(a) {
            return r.put(`/apps/${s}/entities/User/me`, a)
        },
        redirectToLogin(a) {
            var d;
            if (typeof window > "u") throw new Error("Login method can only be used in a browser environment");
            const h = a ? new URL(a, window.location.origin).toString() : window.location.href,
                p = `${(d=i.appBaseUrl)!==null&&d!==void 0?d:""}/login?from_url=${encodeURIComponent(h)}`;
            window.location.href = p
        },
        logout(a) {
            if (delete r.defaults.headers.common.Authorization, typeof window < "u" && window.localStorage) try {
                window.localStorage.removeItem("base44_access_token"), window.localStorage.removeItem("token")
            } catch (d) {
                console.error("Failed to remove token from localStorage:", d)
            }
            typeof window < "u" && (a ? window.location.href = a : window.location.reload())
        },
        setToken(a, d = !0) {
            if (a && (r.defaults.headers.common.Authorization = `Bearer ${a}`, n.defaults.headers.common.Authorization = `Bearer ${a}`, d && typeof window < "u" && window.localStorage)) try {
                window.localStorage.setItem("base44_access_token", a), window.localStorage.setItem("token", a)
            } catch (h) {
                console.error("Failed to save token to localStorage:", h)
            }
        },
        async loginViaEmailPassword(a, d, h) {
            var p;
            try {
                const g = await r.post(`/apps/${s}/auth/login`, {
                        email: a,
                        password: d,
                        ...h && {
                            turnstile_token: h
                        }
                    }),
                    {
                        access_token: y,
                        user: v
                    } = g;
                return y && this.setToken(y), {
                    access_token: y,
                    user: v
                }
            } catch (g) {
                throw ((p = g.response) === null || p === void 0 ? void 0 : p.status) === 401 && await this.logout(), g
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(), !0
            } catch {
                return !1
            }
        },
        inviteUser(a, d) {
            return r.post(`/apps/${s}/users/invite-user`, {
                user_email: a,
                role: d
            })
        },
        register(a) {
            return r.post(`/apps/${s}/auth/register`, a)
        },
        verifyOtp({
            email: a,
            otpCode: d
        }) {
            return r.post(`/apps/${s}/auth/verify-otp`, {
                email: a,
                otp_code: d
            })
        },
        resendOtp(a) {
            return r.post(`/apps/${s}/auth/resend-otp`, {
                email: a
            })
        },
        resetPasswordRequest(a) {
            return r.post(`/apps/${s}/auth/reset-password-request`, {
                email: a
            })
        },
        resetPassword({
            resetToken: a,
            newPassword: d
        }) {
            return r.post(`/apps/${s}/auth/reset-password`, {
                reset_token: a,
                new_password: d
            })
        },
        changePassword({
            userId: a,
            currentPassword: d,
            newPassword: h
        }) {
            return r.post(`/apps/${s}/auth/change-password`, {
                user_id: a,
                current_password: d,
                new_password: h
            })
        }
    }
}

function Gk(r, n, s) {
    return {
        async getAccessToken(i) {
            const a = `/apps/${n}/auth/sso/accesstoken/${i}`,
                d = {};
            return s && (d["on-behalf-of"] = `Bearer ${s}`), r.get(a, {
                headers: d
            })
        }
    }
}

function Zc(r = {}) {
    const {
        storageKey: n = "base44_access_token",
        paramName: s = "access_token",
        saveToStorage: i = !0,
        removeFromUrl: a = !0
    } = r;
    let d = null;
    if (typeof window < "u" && window.location) try {
        const h = new URLSearchParams(window.location.search);
        if (d = h.get(s), d) {
            if (i && Yk(d, {
                    storageKey: n
                }), a) {
                h.delete(s);
                const p = `${window.location.pathname}${h.toString()?`?${h.toString()}`:""}${window.location.hash}`;
                window.history.replaceState({}, document.title, p)
            }
            return d
        }
    } catch (h) {
        console.error("Error retrieving token from URL:", h)
    }
    if (typeof window < "u" && window.localStorage) try {
        return d = window.localStorage.getItem(n), d
    } catch (h) {
        console.error("Error retrieving token from localStorage:", h)
    }
    return null
}

function Yk(r, n) {
    const {
        storageKey: s = "base44_access_token"
    } = n;
    if (typeof window > "u" || !window.localStorage || !r) return !1;
    try {
        return window.localStorage.setItem(s, r), window.localStorage.setItem("token", r), !0
    } catch (i) {
        return console.error("Error saving token to localStorage:", i), !1
    }
}

function Jp(r, n) {
    return {
        async invoke(s, i) {
            if (typeof i == "string") throw new Error(`Function ${s} must receive an object with named parameters, received: ${i}`);
            let a, d;
            return i instanceof FormData || i && Object.values(i).some(h => h instanceof File) ? (a = new FormData, Object.keys(i).forEach(h => {
                i[h] instanceof File ? a.append(h, i[h], i[h].name) : typeof i[h] == "object" && i[h] !== null ? a.append(h, JSON.stringify(i[h])) : a.append(h, i[h])
            }), d = "multipart/form-data") : (a = i, d = "application/json"), r.post(`/apps/${n}/functions/${s}`, a || i, {
                headers: {
                    "Content-Type": d
                }
            })
        }
    }
}

function Xp({
    axios: r,
    socket: n,
    appId: s,
    serverUrl: i,
    token: a
}) {
    const d = `/apps/${s}/agents`;
    return {
        getConversations: () => r.get(`${d}/conversations`),
        getConversation: T => r.get(`${d}/conversations/${T}`),
        listConversations: T => r.get(`${d}/conversations`, {
            params: T
        }),
        createConversation: T => r.post(`${d}/conversations`, T),
        addMessage: async (T, k) => {
            const E = `/agent-conversations/${T.id}`;
            return await n.updateModel(E, { ...T,
                messages: [...T.messages || [], k]
            }), r.post(`${d}/conversations/${T.id}/messages`, k)
        },
        subscribeToConversation: (T, k) => {
            const E = `/agent-conversations/${T}`;
            return n.subscribeToRoom(E, {
                connect: () => {},
                update_model: ({
                    data: b
                }) => {
                    const M = JSON.parse(b);
                    k == null || k(M)
                }
            })
        },
        getWhatsAppConnectURL: T => {
            const k = `${i}/api/apps/${s}/agents/${encodeURIComponent(T)}/whatsapp`,
                E = a ? ? Zc();
            return E ? `${k}?token=${E}` : k
        }
    }
}

function Zp(r, n) {
    const s = `/app-logs/${n}`;
    return {
        async logUserInApp(i) {
            await r.post(`${s}/log-user-in-app/${i}`)
        },
        async fetchLogs(i = {}) {
            return await r.get(s, {
                params: i
            })
        },
        async getStats(i = {}) {
            return await r.get(`${s}/stats`, {
                params: i
            })
        }
    }
}
const hn = Object.create(null);
hn.open = "0";
hn.close = "1";
hn.ping = "2";
hn.pong = "3";
hn.message = "4";
hn.upgrade = "5";
hn.noop = "6";
const kl = Object.create(null);
Object.keys(hn).forEach(r => {
    kl[hn[r]] = r
});
const Nc = {
        type: "error",
        data: "parser error"
    },
    Vg = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]",
    Hg = typeof ArrayBuffer == "function",
    qg = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer,
    ed = ({
        type: r,
        data: n
    }, s, i) => Vg && n instanceof Blob ? s ? i(n) : em(n, i) : Hg && (n instanceof ArrayBuffer || qg(n)) ? s ? i(n) : em(new Blob([n]), i) : i(hn[r] + (n || "")),
    em = (r, n) => {
        const s = new FileReader;
        return s.onload = function() {
            const i = s.result.split(",")[1];
            n("b" + (i || ""))
        }, s.readAsDataURL(r)
    };

function tm(r) {
    return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer, r.byteOffset, r.byteLength)
}
let Gu;

function Jk(r, n) {
    if (Vg && r.data instanceof Blob) return r.data.arrayBuffer().then(tm).then(n);
    if (Hg && (r.data instanceof ArrayBuffer || qg(r.data))) return n(tm(r.data));
    ed(r, !1, s => {
        Gu || (Gu = new TextEncoder), n(Gu.encode(s))
    })
}
const nm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    To = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < nm.length; r++) To[nm.charCodeAt(r)] = r;
const Xk = r => {
        let n = r.length * .75,
            s = r.length,
            i, a = 0,
            d, h, p, g;
        r[r.length - 1] === "=" && (n--, r[r.length - 2] === "=" && n--);
        const y = new ArrayBuffer(n),
            v = new Uint8Array(y);
        for (i = 0; i < s; i += 4) d = To[r.charCodeAt(i)], h = To[r.charCodeAt(i + 1)], p = To[r.charCodeAt(i + 2)], g = To[r.charCodeAt(i + 3)], v[a++] = d << 2 | h >> 4, v[a++] = (h & 15) << 4 | p >> 2, v[a++] = (p & 3) << 6 | g & 63;
        return y
    },
    Zk = typeof ArrayBuffer == "function",
    td = (r, n) => {
        if (typeof r != "string") return {
            type: "message",
            data: Qg(r, n)
        };
        const s = r.charAt(0);
        return s === "b" ? {
            type: "message",
            data: eS(r.substring(1), n)
        } : kl[s] ? r.length > 1 ? {
            type: kl[s],
            data: r.substring(1)
        } : {
            type: kl[s]
        } : Nc
    },
    eS = (r, n) => {
        if (Zk) {
            const s = Xk(r);
            return Qg(s, n)
        } else return {
            base64: !0,
            data: r
        }
    },
    Qg = (r, n) => {
        switch (n) {
            case "blob":
                return r instanceof Blob ? r : new Blob([r]);
            case "arraybuffer":
            default:
                return r instanceof ArrayBuffer ? r : r.buffer
        }
    },
    Kg = "",
    tS = (r, n) => {
        const s = r.length,
            i = new Array(s);
        let a = 0;
        r.forEach((d, h) => {
            ed(d, !1, p => {
                i[h] = p, ++a === s && n(i.join(Kg))
            })
        })
    },
    nS = (r, n) => {
        const s = r.split(Kg),
            i = [];
        for (let a = 0; a < s.length; a++) {
            const d = td(s[a], n);
            if (i.push(d), d.type === "error") break
        }
        return i
    };

function rS() {
    return new TransformStream({
        transform(r, n) {
            Jk(r, s => {
                const i = s.length;
                let a;
                if (i < 126) a = new Uint8Array(1), new DataView(a.buffer).setUint8(0, i);
                else if (i < 65536) {
                    a = new Uint8Array(3);
                    const d = new DataView(a.buffer);
                    d.setUint8(0, 126), d.setUint16(1, i)
                } else {
                    a = new Uint8Array(9);
                    const d = new DataView(a.buffer);
                    d.setUint8(0, 127), d.setBigUint64(1, BigInt(i))
                }
                r.data && typeof r.data != "string" && (a[0] |= 128), n.enqueue(a), n.enqueue(s)
            })
        }
    })
}
let Yu;

function fl(r) {
    return r.reduce((n, s) => n + s.length, 0)
}

function hl(r, n) {
    if (r[0].length === n) return r.shift();
    const s = new Uint8Array(n);
    let i = 0;
    for (let a = 0; a < n; a++) s[a] = r[0][i++], i === r[0].length && (r.shift(), i = 0);
    return r.length && i < r[0].length && (r[0] = r[0].slice(i)), s
}

function sS(r, n) {
    Yu || (Yu = new TextDecoder);
    const s = [];
    let i = 0,
        a = -1,
        d = !1;
    return new TransformStream({
        transform(h, p) {
            for (s.push(h);;) {
                if (i === 0) {
                    if (fl(s) < 1) break;
                    const g = hl(s, 1);
                    d = (g[0] & 128) === 128, a = g[0] & 127, a < 126 ? i = 3 : a === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (fl(s) < 2) break;
                    const g = hl(s, 2);
                    a = new DataView(g.buffer, g.byteOffset, g.length).getUint16(0), i = 3
                } else if (i === 2) {
                    if (fl(s) < 8) break;
                    const g = hl(s, 8),
                        y = new DataView(g.buffer, g.byteOffset, g.length),
                        v = y.getUint32(0);
                    if (v > Math.pow(2, 21) - 1) {
                        p.enqueue(Nc);
                        break
                    }
                    a = v * Math.pow(2, 32) + y.getUint32(4), i = 3
                } else {
                    if (fl(s) < a) break;
                    const g = hl(s, a);
                    p.enqueue(td(d ? g : Yu.decode(g), n)), i = 0
                }
                if (a === 0 || a > r) {
                    p.enqueue(Nc);
                    break
                }
            }
        }
    })
}
const Gg = 4;

function Ye(r) {
    if (r) return oS(r)
}

function oS(r) {
    for (var n in Ye.prototype) r[n] = Ye.prototype[n];
    return r
}
Ye.prototype.on = Ye.prototype.addEventListener = function(r, n) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(n), this
};
Ye.prototype.once = function(r, n) {
    function s() {
        this.off(r, s), n.apply(this, arguments)
    }
    return s.fn = n, this.on(r, s), this
};
Ye.prototype.off = Ye.prototype.removeListener = Ye.prototype.removeAllListeners = Ye.prototype.removeEventListener = function(r, n) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var s = this._callbacks["$" + r];
    if (!s) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + r], this;
    for (var i, a = 0; a < s.length; a++)
        if (i = s[a], i === n || i.fn === n) {
            s.splice(a, 1);
            break
        }
    return s.length === 0 && delete this._callbacks["$" + r], this
};
Ye.prototype.emit = function(r) {
    this._callbacks = this._callbacks || {};
    for (var n = new Array(arguments.length - 1), s = this._callbacks["$" + r], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
    if (s) {
        s = s.slice(0);
        for (var i = 0, a = s.length; i < a; ++i) s[i].apply(this, n)
    }
    return this
};
Ye.prototype.emitReserved = Ye.prototype.emit;
Ye.prototype.listeners = function(r) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + r] || []
};
Ye.prototype.hasListeners = function(r) {
    return !!this.listeners(r).length
};
const Il = typeof Promise == "function" && typeof Promise.resolve == "function" ? n => Promise.resolve().then(n) : (n, s) => s(n, 0),
    Wt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(),
    iS = "arraybuffer";

function Yg(r, ...n) {
    return n.reduce((s, i) => (r.hasOwnProperty(i) && (s[i] = r[i]), s), {})
}
const lS = Wt.setTimeout,
    aS = Wt.clearTimeout;

function zl(r, n) {
    n.useNativeTimers ? (r.setTimeoutFn = lS.bind(Wt), r.clearTimeoutFn = aS.bind(Wt)) : (r.setTimeoutFn = Wt.setTimeout.bind(Wt), r.clearTimeoutFn = Wt.clearTimeout.bind(Wt))
}
const uS = 1.33;

function cS(r) {
    return typeof r == "string" ? dS(r) : Math.ceil((r.byteLength || r.size) * uS)
}

function dS(r) {
    let n = 0,
        s = 0;
    for (let i = 0, a = r.length; i < a; i++) n = r.charCodeAt(i), n < 128 ? s += 1 : n < 2048 ? s += 2 : n < 55296 || n >= 57344 ? s += 3 : (i++, s += 4);
    return s
}

function Jg() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}

function fS(r) {
    let n = "";
    for (let s in r) r.hasOwnProperty(s) && (n.length && (n += "&"), n += encodeURIComponent(s) + "=" + encodeURIComponent(r[s]));
    return n
}

function hS(r) {
    let n = {},
        s = r.split("&");
    for (let i = 0, a = s.length; i < a; i++) {
        let d = s[i].split("=");
        n[decodeURIComponent(d[0])] = decodeURIComponent(d[1])
    }
    return n
}
class pS extends Error {
    constructor(n, s, i) {
        super(n), this.description = s, this.context = i, this.type = "TransportError"
    }
}
class nd extends Ye {
    constructor(n) {
        super(), this.writable = !1, zl(this, n), this.opts = n, this.query = n.query, this.socket = n.socket, this.supportsBinary = !n.forceBase64
    }
    onError(n, s, i) {
        return super.emitReserved("error", new pS(n, s, i)), this
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }
    send(n) {
        this.readyState === "open" && this.write(n)
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open")
    }
    onData(n) {
        const s = td(n, this.socket.binaryType);
        this.onPacket(s)
    }
    onPacket(n) {
        super.emitReserved("packet", n)
    }
    onClose(n) {
        this.readyState = "closed", super.emitReserved("close", n)
    }
    pause(n) {}
    createUri(n, s = {}) {
        return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(s)
    }
    _hostname() {
        const n = this.opts.hostname;
        return n.indexOf(":") === -1 ? n : "[" + n + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(n) {
        const s = fS(n);
        return s.length ? "?" + s : ""
    }
}
class mS extends nd {
    constructor() {
        super(...arguments), this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(n) {
        this.readyState = "pausing";
        const s = () => {
            this.readyState = "paused", n()
        };
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++, this.once("pollComplete", function() {
                --i || s()
            })), this.writable || (i++, this.once("drain", function() {
                --i || s()
            }))
        } else s()
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll")
    }
    onData(n) {
        const s = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(), i.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(i)
        };
        nS(n, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll())
    }
    doClose() {
        const n = () => {
            this.write([{
                type: "close"
            }])
        };
        this.readyState === "open" ? n() : this.once("open", n)
    }
    write(n) {
        this.writable = !1, tS(n, s => {
            this.doWrite(s, () => {
                this.writable = !0, this.emitReserved("drain")
            })
        })
    }
    uri() {
        const n = this.opts.secure ? "https" : "http",
            s = this.query || {};
        return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Jg()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(n, s)
    }
}
let Xg = !1;
try {
    Xg = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {}
const gS = Xg;

function yS() {}
class vS extends mS {
    constructor(n) {
        if (super(n), typeof location < "u") {
            const s = location.protocol === "https:";
            let i = location.port;
            i || (i = s ? "443" : "80"), this.xd = typeof location < "u" && n.hostname !== location.hostname || i !== n.port
        }
    }
    doWrite(n, s) {
        const i = this.request({
            method: "POST",
            data: n
        });
        i.on("success", s), i.on("error", (a, d) => {
            this.onError("xhr post error", a, d)
        })
    }
    doPoll() {
        const n = this.request();
        n.on("data", this.onData.bind(this)), n.on("error", (s, i) => {
            this.onError("xhr poll error", s, i)
        }), this.pollXhr = n
    }
}
class dn extends Ye {
    constructor(n, s, i) {
        super(), this.createRequest = n, zl(this, i), this._opts = i, this._method = i.method || "GET", this._uri = s, this._data = i.data !== void 0 ? i.data : null, this._create()
    }
    _create() {
        var n;
        const s = Yg(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        s.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(s);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let a in this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(a) && i.setRequestHeader(a, this._opts.extraHeaders[a])
                }
            } catch {}
            if (this._method === "POST") try {
                i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
            } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}(n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(i), "withCredentials" in i && (i.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout), i.onreadystatechange = () => {
                var a;
                i.readyState === 3 && ((a = this._opts.cookieJar) === null || a === void 0 || a.parseCookies(i.getResponseHeader("set-cookie"))), i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }, 0))
            }, i.send(this._data)
        } catch (a) {
            this.setTimeoutFn(() => {
                this._onError(a)
            }, 0);
            return
        }
        typeof document < "u" && (this._index = dn.requestsCount++, dn.requests[this._index] = this)
    }
    _onError(n) {
        this.emitReserved("error", n, this._xhr), this._cleanup(!0)
    }
    _cleanup(n) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = yS, n) try {
                this._xhr.abort()
            } catch {}
            typeof document < "u" && delete dn.requests[this._index], this._xhr = null
        }
    }
    _onLoad() {
        const n = this._xhr.responseText;
        n !== null && (this.emitReserved("data", n), this.emitReserved("success"), this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
dn.requestsCount = 0;
dn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", rm);
    else if (typeof addEventListener == "function") {
        const r = "onpagehide" in Wt ? "pagehide" : "unload";
        addEventListener(r, rm, !1)
    }
}

function rm() {
    for (let r in dn.requests) dn.requests.hasOwnProperty(r) && dn.requests[r].abort()
}
const xS = (function() {
    const r = Zg({
        xdomain: !1
    });
    return r && r.responseType !== null
})();
class wS extends vS {
    constructor(n) {
        super(n);
        const s = n && n.forceBase64;
        this.supportsBinary = xS && !s
    }
    request(n = {}) {
        return Object.assign(n, {
            xd: this.xd
        }, this.opts), new dn(Zg, this.uri(), n)
    }
}

function Zg(r) {
    const n = r.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!n || gS)) return new XMLHttpRequest
    } catch {}
    if (!n) try {
        return new Wt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
    } catch {}
}
const ey = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class bS extends nd {
    get name() {
        return "websocket"
    }
    doOpen() {
        const n = this.uri(),
            s = this.opts.protocols,
            i = ey ? {} : Yg(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(n, s, i)
        } catch (a) {
            return this.emitReserved("error", a)
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
        }, this.ws.onclose = n => this.onClose({
            description: "websocket connection closed",
            context: n
        }), this.ws.onmessage = n => this.onData(n.data), this.ws.onerror = n => this.onError("websocket error", n)
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const i = n[s],
                a = s === n.length - 1;
            ed(i, this.supportsBinary, d => {
                try {
                    this.doWrite(i, d)
                } catch {}
                a && Il(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}, this.ws.close(), this.ws = null)
    }
    uri() {
        const n = this.opts.secure ? "wss" : "ws",
            s = this.query || {};
        return this.opts.timestampRequests && (s[this.opts.timestampParam] = Jg()), this.supportsBinary || (s.b64 = 1), this.createUri(n, s)
    }
}
const Ju = Wt.WebSocket || Wt.MozWebSocket;
class kS extends bS {
    createSocket(n, s, i) {
        return ey ? new Ju(n, s, i) : s ? new Ju(n, s) : new Ju(n)
    }
    doWrite(n, s) {
        this.ws.send(s)
    }
}
class SS extends nd {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name])
        } catch (n) {
            return this.emitReserved("error", n)
        }
        this._transport.closed.then(() => {
            this.onClose()
        }).catch(n => {
            this.onError("webtransport error", n)
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(n => {
                const s = sS(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                    i = n.readable.pipeThrough(s).getReader(),
                    a = rS();
                a.readable.pipeTo(n.writable), this._writer = a.writable.getWriter();
                const d = () => {
                    i.read().then(({
                        done: p,
                        value: g
                    }) => {
                        p || (this.onPacket(g), d())
                    }).catch(p => {})
                };
                d();
                const h = {
                    type: "open"
                };
                this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`), this._writer.write(h).then(() => this.onOpen())
            })
        })
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const i = n[s],
                a = s === n.length - 1;
            this._writer.write(i).then(() => {
                a && Il(() => {
                    this.writable = !0, this.emitReserved("drain")
                }, this.setTimeoutFn)
            })
        }
    }
    doClose() {
        var n;
        (n = this._transport) === null || n === void 0 || n.close()
    }
}
const NS = {
        websocket: kS,
        webtransport: SS,
        polling: wS
    },
    ES = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    jS = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

function Ec(r) {
    if (r.length > 8e3) throw "URI too long";
    const n = r,
        s = r.indexOf("["),
        i = r.indexOf("]");
    s != -1 && i != -1 && (r = r.substring(0, s) + r.substring(s, i).replace(/:/g, ";") + r.substring(i, r.length));
    let a = ES.exec(r || ""),
        d = {},
        h = 14;
    for (; h--;) d[jS[h]] = a[h] || "";
    return s != -1 && i != -1 && (d.source = n, d.host = d.host.substring(1, d.host.length - 1).replace(/;/g, ":"), d.authority = d.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), d.ipv6uri = !0), d.pathNames = CS(d, d.path), d.queryKey = _S(d, d.query), d
}

function CS(r, n) {
    const s = /\/{2,9}/g,
        i = n.replace(s, "/").split("/");
    return (n.slice(0, 1) == "/" || n.length === 0) && i.splice(0, 1), n.slice(-1) == "/" && i.splice(i.length - 1, 1), i
}

function _S(r, n) {
    const s = {};
    return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, a, d) {
        a && (s[a] = d)
    }), s
}
const jc = typeof addEventListener == "function" && typeof removeEventListener == "function",
    Sl = [];
jc && addEventListener("offline", () => {
    Sl.forEach(r => r())
}, !1);
class dr extends Ye {
    constructor(n, s) {
        if (super(), this.binaryType = iS, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, n && typeof n == "object" && (s = n, n = null), n) {
            const i = Ec(n);
            s.hostname = i.host, s.secure = i.protocol === "https" || i.protocol === "wss", s.port = i.port, i.query && (s.query = i.query)
        } else s.host && (s.hostname = Ec(s.host).host);
        zl(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach(i => {
            const a = i.prototype.name;
            this.transports.push(a), this._transportsByName[a] = i
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = hS(this.opts.query)), jc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close())
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }, Sl.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open()
    }
    createTransport(n) {
        const s = Object.assign({}, this.opts.query);
        s.EIO = Gg, s.transport = n, this.id && (s.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: s,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[n]);
        return new this._transportsByName[n](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available")
            }, 0);
            return
        }
        const n = this.opts.rememberUpgrade && dr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const s = this.createTransport(n);
        s.open(), this.setTransport(s)
    }
    setTransport(n) {
        this.transport && this.transport.removeAllListeners(), this.transport = n, n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", s => this._onClose("transport close", s))
    }
    onOpen() {
        this.readyState = "open", dr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush()
    }
    _onPacket(n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (this.emitReserved("packet", n), this.emitReserved("heartbeat"), n.type) {
            case "open":
                this.onHandshake(JSON.parse(n.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                const s = new Error("server error");
                s.code = n.data, this._onError(s);
                break;
            case "message":
                this.emitReserved("data", n.data), this.emitReserved("message", n.data);
                break
        }
    }
    onHandshake(n) {
        this.emitReserved("handshake", n), this.id = n.sid, this.transport.query.sid = n.sid, this._pingInterval = n.pingInterval, this._pingTimeout = n.pingTimeout, this._maxPayload = n.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const n = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + n, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout")
        }, n), this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const n = this._getWritablePackets();
            this.transport.send(n), this._prevBufferLen = n.length, this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let s = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const a = this.writeBuffer[i].data;
            if (a && (s += cS(a)), i > 0 && s > this._maxPayload) return this.writeBuffer.slice(0, i);
            s += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        const n = Date.now() > this._pingTimeoutTime;
        return n && (this._pingTimeoutTime = 0, Il(() => {
            this._onClose("ping timeout")
        }, this.setTimeoutFn)), n
    }
    write(n, s, i) {
        return this._sendPacket("message", n, s, i), this
    }
    send(n, s, i) {
        return this._sendPacket("message", n, s, i), this
    }
    _sendPacket(n, s, i, a) {
        if (typeof s == "function" && (a = s, s = void 0), typeof i == "function" && (a = i, i = null), this.readyState === "closing" || this.readyState === "closed") return;
        i = i || {}, i.compress = i.compress !== !1;
        const d = {
            type: n,
            data: s,
            options: i
        };
        this.emitReserved("packetCreate", d), this.writeBuffer.push(d), a && this.once("flush", a), this.flush()
    }
    close() {
        const n = () => {
                this._onClose("forced close"), this.transport.close()
            },
            s = () => {
                this.off("upgrade", s), this.off("upgradeError", s), n()
            },
            i = () => {
                this.once("upgrade", s), this.once("upgradeError", s)
            };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : n()
        }) : this.upgrading ? i() : n()), this
    }
    _onError(n) {
        if (dr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", n), this._onClose("transport error", n)
    }
    _onClose(n, s) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), jc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const i = Sl.indexOf(this._offlineEventListener);
                i !== -1 && Sl.splice(i, 1)
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", n, s), this.writeBuffer = [], this._prevBufferLen = 0
        }
    }
}
dr.protocol = Gg;
class RS extends dr {
    constructor() {
        super(...arguments), this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let n = 0; n < this._upgrades.length; n++) this._probe(this._upgrades[n])
    }
    _probe(n) {
        let s = this.createTransport(n),
            i = !1;
        dr.priorWebsocketSuccess = !1;
        const a = () => {
            i || (s.send([{
                type: "ping",
                data: "probe"
            }]), s.once("packet", w => {
                if (!i)
                    if (w.type === "pong" && w.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", s), !s) return;
                        dr.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
                            i || this.readyState !== "closed" && (v(), this.setTransport(s), s.send([{
                                type: "upgrade"
                            }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush())
                        })
                    } else {
                        const R = new Error("probe error");
                        R.transport = s.name, this.emitReserved("upgradeError", R)
                    }
            }))
        };

        function d() {
            i || (i = !0, v(), s.close(), s = null)
        }
        const h = w => {
            const R = new Error("probe error: " + w);
            R.transport = s.name, d(), this.emitReserved("upgradeError", R)
        };

        function p() {
            h("transport closed")
        }

        function g() {
            h("socket closed")
        }

        function y(w) {
            s && w.name !== s.name && d()
        }
        const v = () => {
            s.removeListener("open", a), s.removeListener("error", h), s.removeListener("close", p), this.off("close", g), this.off("upgrading", y)
        };
        s.once("open", a), s.once("error", h), s.once("close", p), this.once("close", g), this.once("upgrading", y), this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn(() => {
            i || s.open()
        }, 200) : s.open()
    }
    onHandshake(n) {
        this._upgrades = this._filterUpgrades(n.upgrades), super.onHandshake(n)
    }
    _filterUpgrades(n) {
        const s = [];
        for (let i = 0; i < n.length; i++) ~this.transports.indexOf(n[i]) && s.push(n[i]);
        return s
    }
}
let TS = class extends RS {
    constructor(n, s = {}) {
        const i = typeof n == "object" ? n : s;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(a => NS[a]).filter(a => !!a)), super(n, i)
    }
};

function PS(r, n = "", s) {
    let i = r;
    s = s || typeof location < "u" && location, r == null && (r = s.protocol + "//" + s.host), typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = s.protocol + r : r = s.host + r), /^(https?|wss?):\/\//.test(r) || (typeof s < "u" ? r = s.protocol + "//" + r : r = "https://" + r), i = Ec(r)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/";
    const d = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + d + ":" + i.port + n, i.href = i.protocol + "://" + d + (s && s.port === i.port ? "" : ":" + i.port), i
}
const OS = typeof ArrayBuffer == "function",
    AS = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer,
    ty = Object.prototype.toString,
    LS = typeof Blob == "function" || typeof Blob < "u" && ty.call(Blob) === "[object BlobConstructor]",
    MS = typeof File == "function" || typeof File < "u" && ty.call(File) === "[object FileConstructor]";

function rd(r) {
    return OS && (r instanceof ArrayBuffer || AS(r)) || LS && r instanceof Blob || MS && r instanceof File
}

function Nl(r, n) {
    if (!r || typeof r != "object") return !1;
    if (Array.isArray(r)) {
        for (let s = 0, i = r.length; s < i; s++)
            if (Nl(r[s])) return !0;
        return !1
    }
    if (rd(r)) return !0;
    if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1) return Nl(r.toJSON(), !0);
    for (const s in r)
        if (Object.prototype.hasOwnProperty.call(r, s) && Nl(r[s])) return !0;
    return !1
}

function FS(r) {
    const n = [],
        s = r.data,
        i = r;
    return i.data = Cc(s, n), i.attachments = n.length, {
        packet: i,
        buffers: n
    }
}

function Cc(r, n) {
    if (!r) return r;
    if (rd(r)) {
        const s = {
            _placeholder: !0,
            num: n.length
        };
        return n.push(r), s
    } else if (Array.isArray(r)) {
        const s = new Array(r.length);
        for (let i = 0; i < r.length; i++) s[i] = Cc(r[i], n);
        return s
    } else if (typeof r == "object" && !(r instanceof Date)) {
        const s = {};
        for (const i in r) Object.prototype.hasOwnProperty.call(r, i) && (s[i] = Cc(r[i], n));
        return s
    }
    return r
}

function DS(r, n) {
    return r.data = _c(r.data, n), delete r.attachments, r
}

function _c(r, n) {
    if (!r) return r;
    if (r && r._placeholder === !0) {
        if (typeof r.num == "number" && r.num >= 0 && r.num < n.length) return n[r.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(r))
        for (let s = 0; s < r.length; s++) r[s] = _c(r[s], n);
    else if (typeof r == "object")
        for (const s in r) Object.prototype.hasOwnProperty.call(r, s) && (r[s] = _c(r[s], n));
    return r
}
const IS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
    zS = 5;
var Ce;
(function(r) {
    r[r.CONNECT = 0] = "CONNECT", r[r.DISCONNECT = 1] = "DISCONNECT", r[r.EVENT = 2] = "EVENT", r[r.ACK = 3] = "ACK", r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR", r[r.BINARY_EVENT = 5] = "BINARY_EVENT", r[r.BINARY_ACK = 6] = "BINARY_ACK"
})(Ce || (Ce = {}));
class US {
    constructor(n) {
        this.replacer = n
    }
    encode(n) {
        return (n.type === Ce.EVENT || n.type === Ce.ACK) && Nl(n) ? this.encodeAsBinary({
            type: n.type === Ce.EVENT ? Ce.BINARY_EVENT : Ce.BINARY_ACK,
            nsp: n.nsp,
            data: n.data,
            id: n.id
        }) : [this.encodeAsString(n)]
    }
    encodeAsString(n) {
        let s = "" + n.type;
        return (n.type === Ce.BINARY_EVENT || n.type === Ce.BINARY_ACK) && (s += n.attachments + "-"), n.nsp && n.nsp !== "/" && (s += n.nsp + ","), n.id != null && (s += n.id), n.data != null && (s += JSON.stringify(n.data, this.replacer)), s
    }
    encodeAsBinary(n) {
        const s = FS(n),
            i = this.encodeAsString(s.packet),
            a = s.buffers;
        return a.unshift(i), a
    }
}

function sm(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
class sd extends Ye {
    constructor(n) {
        super(), this.reviver = n
    }
    add(n) {
        let s;
        if (typeof n == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            s = this.decodeString(n);
            const i = s.type === Ce.BINARY_EVENT;
            i || s.type === Ce.BINARY_ACK ? (s.type = i ? Ce.EVENT : Ce.ACK, this.reconstructor = new BS(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s)
        } else if (rd(n) || n.base64)
            if (this.reconstructor) s = this.reconstructor.takeBinaryData(n), s && (this.reconstructor = null, super.emitReserved("decoded", s));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + n)
    }
    decodeString(n) {
        let s = 0;
        const i = {
            type: Number(n.charAt(0))
        };
        if (Ce[i.type] === void 0) throw new Error("unknown packet type " + i.type);
        if (i.type === Ce.BINARY_EVENT || i.type === Ce.BINARY_ACK) {
            const d = s + 1;
            for (; n.charAt(++s) !== "-" && s != n.length;);
            const h = n.substring(d, s);
            if (h != Number(h) || n.charAt(s) !== "-") throw new Error("Illegal attachments");
            i.attachments = Number(h)
        }
        if (n.charAt(s + 1) === "/") {
            const d = s + 1;
            for (; ++s && !(n.charAt(s) === "," || s === n.length););
            i.nsp = n.substring(d, s)
        } else i.nsp = "/";
        const a = n.charAt(s + 1);
        if (a !== "" && Number(a) == a) {
            const d = s + 1;
            for (; ++s;) {
                const h = n.charAt(s);
                if (h == null || Number(h) != h) {
                    --s;
                    break
                }
                if (s === n.length) break
            }
            i.id = Number(n.substring(d, s + 1))
        }
        if (n.charAt(++s)) {
            const d = this.tryParse(n.substr(s));
            if (sd.isPayloadValid(i.type, d)) i.data = d;
            else throw new Error("invalid payload")
        }
        return i
    }
    tryParse(n) {
        try {
            return JSON.parse(n, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(n, s) {
        switch (n) {
            case Ce.CONNECT:
                return sm(s);
            case Ce.DISCONNECT:
                return s === void 0;
            case Ce.CONNECT_ERROR:
                return typeof s == "string" || sm(s);
            case Ce.EVENT:
            case Ce.BINARY_EVENT:
                return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && IS.indexOf(s[0]) === -1);
            case Ce.ACK:
            case Ce.BINARY_ACK:
                return Array.isArray(s)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
    }
}
class BS {
    constructor(n) {
        this.packet = n, this.buffers = [], this.reconPack = n
    }
    takeBinaryData(n) {
        if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) {
            const s = DS(this.reconPack, this.buffers);
            return this.finishedReconstruction(), s
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = []
    }
}
const $S = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: sd,
    Encoder: US,
    get PacketType() {
        return Ce
    },
    protocol: zS
}, Symbol.toStringTag, {
    value: "Module"
}));

function Zt(r, n, s) {
    return r.on(n, s),
        function() {
            r.off(n, s)
        }
}
const WS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class ny extends Ye {
    constructor(n, s, i) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = n, this.nsp = s, i && i.auth && (this.auth = i.auth), this._opts = Object.assign({}, i), this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs) return;
        const n = this.io;
        this.subs = [Zt(n, "open", this.onopen.bind(this)), Zt(n, "packet", this.onpacket.bind(this)), Zt(n, "error", this.onerror.bind(this)), Zt(n, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this)
    }
    open() {
        return this.connect()
    }
    send(...n) {
        return n.unshift("message"), this.emit.apply(this, n), this
    }
    emit(n, ...s) {
        var i, a, d;
        if (WS.hasOwnProperty(n)) throw new Error('"' + n.toString() + '" is a reserved event name');
        if (s.unshift(n), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(s), this;
        const h = {
            type: Ce.EVENT,
            data: s
        };
        if (h.options = {}, h.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
            const v = this.ids++,
                w = s.pop();
            this._registerAckCallback(v, w), h.id = v
        }
        const p = (a = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || a === void 0 ? void 0 : a.writable,
            g = this.connected && !(!((d = this.io.engine) === null || d === void 0) && d._hasPingExpired());
        return this.flags.volatile && !p || (g ? (this.notifyOutgoingListeners(h), this.packet(h)) : this.sendBuffer.push(h)), this.flags = {}, this
    }
    _registerAckCallback(n, s) {
        var i;
        const a = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (a === void 0) {
            this.acks[n] = s;
            return
        }
        const d = this.io.setTimeoutFn(() => {
                delete this.acks[n];
                for (let p = 0; p < this.sendBuffer.length; p++) this.sendBuffer[p].id === n && this.sendBuffer.splice(p, 1);
                s.call(this, new Error("operation has timed out"))
            }, a),
            h = (...p) => {
                this.io.clearTimeoutFn(d), s.apply(this, p)
            };
        h.withError = !0, this.acks[n] = h
    }
    emitWithAck(n, ...s) {
        return new Promise((i, a) => {
            const d = (h, p) => h ? a(h) : i(p);
            d.withError = !0, s.push(d), this.emit(n, ...s)
        })
    }
    _addToQueue(n) {
        let s;
        typeof n[n.length - 1] == "function" && (s = n.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: n,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        n.push((a, ...d) => i !== this._queue[0] ? void 0 : (a !== null ? i.tryCount > this._opts.retries && (this._queue.shift(), s && s(a)) : (this._queue.shift(), s && s(null, ...d)), i.pending = !1, this._drainQueue())), this._queue.push(i), this._drainQueue()
    }
    _drainQueue(n = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const s = this._queue[0];
        s.pending && !n || (s.pending = !0, s.tryCount++, this.flags = s.flags, this.emit.apply(this, s.args))
    }
    packet(n) {
        n.nsp = this.nsp, this.io._packet(n)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(n => {
            this._sendConnectPacket(n)
        }) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(n) {
        this.packet({
            type: Ce.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, n) : n
        })
    }
    onerror(n) {
        this.connected || this.emitReserved("connect_error", n)
    }
    onclose(n, s) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", n, s), this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(n => {
            if (!this.sendBuffer.some(i => String(i.id) === n)) {
                const i = this.acks[n];
                delete this.acks[n], i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        })
    }
    onpacket(n) {
        if (n.nsp === this.nsp) switch (n.type) {
            case Ce.CONNECT:
                n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case Ce.EVENT:
            case Ce.BINARY_EVENT:
                this.onevent(n);
                break;
            case Ce.ACK:
            case Ce.BINARY_ACK:
                this.onack(n);
                break;
            case Ce.DISCONNECT:
                this.ondisconnect();
                break;
            case Ce.CONNECT_ERROR:
                this.destroy();
                const i = new Error(n.data.message);
                i.data = n.data.data, this.emitReserved("connect_error", i);
                break
        }
    }
    onevent(n) {
        const s = n.data || [];
        n.id != null && s.push(this.ack(n.id)), this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s))
    }
    emitEvent(n) {
        if (this._anyListeners && this._anyListeners.length) {
            const s = this._anyListeners.slice();
            for (const i of s) i.apply(this, n)
        }
        super.emit.apply(this, n), this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1])
    }
    ack(n) {
        const s = this;
        let i = !1;
        return function(...a) {
            i || (i = !0, s.packet({
                type: Ce.ACK,
                id: n,
                data: a
            }))
        }
    }
    onack(n) {
        const s = this.acks[n.id];
        typeof s == "function" && (delete this.acks[n.id], s.withError && n.data.unshift(null), s.apply(this, n.data))
    }
    onconnect(n, s) {
        this.id = n, this.recovered = s && this._pid === s, this._pid = s, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(n => this.emitEvent(n)), this.receiveBuffer = [], this.sendBuffer.forEach(n => {
            this.notifyOutgoingListeners(n), this.packet(n)
        }), this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(n => n()), this.subs = void 0), this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: Ce.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }
    close() {
        return this.disconnect()
    }
    compress(n) {
        return this.flags.compress = n, this
    }
    get volatile() {
        return this.flags.volatile = !0, this
    }
    timeout(n) {
        return this.flags.timeout = n, this
    }
    onAny(n) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(n), this
    }
    prependAny(n) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(n), this
    }
    offAny(n) {
        if (!this._anyListeners) return this;
        if (n) {
            const s = this._anyListeners;
            for (let i = 0; i < s.length; i++)
                if (n === s[i]) return s.splice(i, 1), this
        } else this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(n), this
    }
    prependAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(n), this
    }
    offAnyOutgoing(n) {
        if (!this._anyOutgoingListeners) return this;
        if (n) {
            const s = this._anyOutgoingListeners;
            for (let i = 0; i < s.length; i++)
                if (n === s[i]) return s.splice(i, 1), this
        } else this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(n) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const s = this._anyOutgoingListeners.slice();
            for (const i of s) i.apply(this, n.data)
        }
    }
}

function Ms(r) {
    r = r || {}, this.ms = r.min || 100, this.max = r.max || 1e4, this.factor = r.factor || 2, this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0, this.attempts = 0
}
Ms.prototype.duration = function() {
    var r = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var n = Math.random(),
            s = Math.floor(n * this.jitter * r);
        r = (Math.floor(n * 10) & 1) == 0 ? r - s : r + s
    }
    return Math.min(r, this.max) | 0
};
Ms.prototype.reset = function() {
    this.attempts = 0
};
Ms.prototype.setMin = function(r) {
    this.ms = r
};
Ms.prototype.setMax = function(r) {
    this.max = r
};
Ms.prototype.setJitter = function(r) {
    this.jitter = r
};
class Rc extends Ye {
    constructor(n, s) {
        var i;
        super(), this.nsps = {}, this.subs = [], n && typeof n == "object" && (s = n, n = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, zl(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((i = s.randomizationFactor) !== null && i !== void 0 ? i : .5), this.backoff = new Ms({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = n;
        const a = s.parser || $S;
        this.encoder = new a.Encoder, this.decoder = new a.Decoder, this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open()
    }
    reconnection(n) {
        return arguments.length ? (this._reconnection = !!n, n || (this.skipReconnect = !0), this) : this._reconnection
    }
    reconnectionAttempts(n) {
        return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n, this)
    }
    reconnectionDelay(n) {
        var s;
        return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n, (s = this.backoff) === null || s === void 0 || s.setMin(n), this)
    }
    randomizationFactor(n) {
        var s;
        return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n, (s = this.backoff) === null || s === void 0 || s.setJitter(n), this)
    }
    reconnectionDelayMax(n) {
        var s;
        return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n, (s = this.backoff) === null || s === void 0 || s.setMax(n), this)
    }
    timeout(n) {
        return arguments.length ? (this._timeout = n, this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(n) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new TS(this.uri, this.opts);
        const s = this.engine,
            i = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const a = Zt(s, "open", function() {
                i.onopen(), n && n()
            }),
            d = p => {
                this.cleanup(), this._readyState = "closed", this.emitReserved("error", p), n ? n(p) : this.maybeReconnectOnOpen()
            },
            h = Zt(s, "error", d);
        if (this._timeout !== !1) {
            const p = this._timeout,
                g = this.setTimeoutFn(() => {
                    a(), d(new Error("timeout")), s.close()
                }, p);
            this.opts.autoUnref && g.unref(), this.subs.push(() => {
                this.clearTimeoutFn(g)
            })
        }
        return this.subs.push(a), this.subs.push(h), this
    }
    connect(n) {
        return this.open(n)
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const n = this.engine;
        this.subs.push(Zt(n, "ping", this.onping.bind(this)), Zt(n, "data", this.ondata.bind(this)), Zt(n, "error", this.onerror.bind(this)), Zt(n, "close", this.onclose.bind(this)), Zt(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(n) {
        try {
            this.decoder.add(n)
        } catch (s) {
            this.onclose("parse error", s)
        }
    }
    ondecoded(n) {
        Il(() => {
            this.emitReserved("packet", n)
        }, this.setTimeoutFn)
    }
    onerror(n) {
        this.emitReserved("error", n)
    }
    socket(n, s) {
        let i = this.nsps[n];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new ny(this, n, s), this.nsps[n] = i), i
    }
    _destroy(n) {
        const s = Object.keys(this.nsps);
        for (const i of s)
            if (this.nsps[i].active) return;
        this._close()
    }
    _packet(n) {
        const s = this.encoder.encode(n);
        for (let i = 0; i < s.length; i++) this.engine.write(s[i], n.options)
    }
    cleanup() {
        this.subs.forEach(n => n()), this.subs.length = 0, this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(n, s) {
        var i;
        this.cleanup(), (i = this.engine) === null || i === void 0 || i.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", n, s), this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const n = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const s = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
                n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts), !n.skipReconnect && n.open(a => {
                    a ? (n._reconnecting = !1, n.reconnect(), this.emitReserved("reconnect_error", a)) : n.onreconnect()
                }))
            }, s);
            this.opts.autoUnref && i.unref(), this.subs.push(() => {
                this.clearTimeoutFn(i)
            })
        }
    }
    onreconnect() {
        const n = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", n)
    }
}
const jo = {};

function El(r, n) {
    typeof r == "object" && (n = r, r = void 0), n = n || {};
    const s = PS(r, n.path || "/socket.io"),
        i = s.source,
        a = s.id,
        d = s.path,
        h = jo[a] && d in jo[a].nsps,
        p = n.forceNew || n["force new connection"] || n.multiplex === !1 || h;
    let g;
    return p ? g = new Rc(i, n) : (jo[a] || (jo[a] = new Rc(i, n)), g = jo[a]), s.query && !n.query && (n.query = s.queryKey), g.socket(s.path, n)
}
Object.assign(El, {
    Manager: Rc,
    Socket: ny,
    io: El,
    connect: El
});

function om(r, n) {
    var s;
    const i = El(r.serverUrl, {
        path: r.mountPath,
        transports: r.transports,
        query: {
            app_id: r.appId,
            token: (s = r.token) !== null && s !== void 0 ? s : Zc()
        }
    });
    return i.on("connect", async () => {
        var a;
        return console.log("connect", i.id), (a = n.connect) === null || a === void 0 ? void 0 : a.call(n)
    }), i.on("update_model", async a => {
        var d;
        return (d = n.update_model) === null || d === void 0 ? void 0 : d.call(n, a)
    }), i.on("error", async a => {
        var d;
        return (d = n.error) === null || d === void 0 ? void 0 : d.call(n, a)
    }), i.on("connect_error", async a => {
        var d;
        return console.error("connect_error", a), (d = n.error) === null || d === void 0 ? void 0 : d.call(n, a)
    }), i
}

function VS({
    config: r
}) {
    let n = { ...r
    };
    const s = {},
        i = {
            connect: async () => {
                const T = [];
                Object.keys(s).forEach(k => {
                    g(k);
                    const E = w(k);
                    E == null || E.forEach(({
                        connect: b
                    }) => {
                        const M = async () => b == null ? void 0 : b();
                        T.push(M())
                    })
                }), await Promise.all(T)
            },
            update_model: async T => {
                const E = w(T.room).map(b => {
                    var M;
                    return (M = b.update_model) === null || M === void 0 ? void 0 : M.call(b, T)
                });
                await Promise.all(E)
            },
            error: async T => {
                console.error("error", T);
                const k = Object.values(s).flat().map(E => {
                    var b;
                    return (b = E.error) === null || b === void 0 ? void 0 : b.call(E, T)
                });
                await Promise.all(k)
            }
        };
    let a = om(r, i);

    function d() {
        h()
    }

    function h() {
        a && a.disconnect()
    }

    function p(T) {
        d(), n = { ...n,
            ...T
        }, a = om(n, i)
    }

    function g(T) {
        a.emit("join", T)
    }

    function y(T) {
        a.emit("leave", T)
    }
    async function v(T, k) {
        var E;
        const b = JSON.stringify(k);
        return (E = i.update_model) === null || E === void 0 ? void 0 : E.call(i, {
            room: T,
            data: b
        })
    }

    function w(T) {
        return s[T]
    }
    return {
        socket: a,
        subscribeToRoom: (T, k) => (s[T] || (g(T), s[T] = []), s[T].push(k), () => {
            var E, b;
            s[T] = (b = (E = s[T]) === null || E === void 0 ? void 0 : E.filter(M => M !== k)) !== null && b !== void 0 ? b : [], s[T].length === 0 && y(T)
        }),
        updateConfig: p,
        updateModel: v,
        disconnect: h
    }
}

function HS(r) {
    const {
        serverUrl: n = "https://base44.app",
        appId: s,
        token: i,
        serviceToken: a,
        requiresAuth: d = !1,
        appBaseUrl: h,
        options: p,
        functionsVersion: g,
        headers: y
    } = r, w = VS({
        config: {
            serverUrl: n,
            mountPath: "/ws-user-apps/socket.io/",
            transports: ["websocket"],
            appId: s,
            token: i
        }
    }), R = { ...y,
        "X-App-Id": String(s)
    }, T = g ? { ...R,
        "Base44-Functions-Version": g
    } : R, k = Ro({
        baseURL: `${n}/api`,
        headers: R,
        token: i,
        onError: p == null ? void 0 : p.onError
    }), E = Ro({
        baseURL: `${n}/api`,
        headers: T,
        token: i,
        interceptResponses: !1,
        onError: p == null ? void 0 : p.onError
    }), b = Ro({
        baseURL: `${n}/api`,
        headers: R,
        token: a,
        onError: p == null ? void 0 : p.onError
    }), M = Ro({
        baseURL: `${n}/api`,
        headers: T,
        token: a,
        interceptResponses: !1
    }), q = {
        entities: Gp(k, s),
        integrations: Yp(k, s),
        auth: Kk(k, E, s, {
            appBaseUrl: h
        }),
        functions: Jp(E, s),
        agents: Xp({
            axios: k,
            socket: w,
            appId: s,
            serverUrl: n,
            token: i
        }),
        appLogs: Zp(k, s),
        cleanup: () => {
            w.disconnect()
        }
    }, I = {
        entities: Gp(b, s),
        integrations: Yp(b, s),
        sso: Gk(b, s, i),
        functions: Jp(M, s),
        agents: Xp({
            axios: b,
            socket: w,
            appId: s,
            serverUrl: n,
            token: i
        }),
        appLogs: Zp(b, s),
        cleanup: () => {
            w.disconnect()
        }
    };
    if (typeof window < "u") {
        const G = i || Zc();
        G && q.auth.setToken(G)
    }
    return d && typeof window < "u" && setTimeout(async () => {
        try {
            await q.auth.isAuthenticated() || q.auth.redirectToLogin(window.location.href)
        } catch (G) {
            console.error("Authentication check failed:", G), q.auth.redirectToLogin(window.location.href)
        }
    }, 0), { ...q,
        setToken(G) {
            q.auth.setToken(G), w.updateConfig({
                token: G
            })
        },
        getConfig() {
            return {
                serverUrl: n,
                appId: s,
                requiresAuth: d
            }
        },
        get asServiceRole() {
            if (!a) throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return I
        }
    }
}
const ry = typeof window > "u",
    qS = ry ? {
        localStorage: new Map
    } : window,
    Xu = qS.localStorage,
    QS = r => r.replace(/([A-Z])/g, "_$1").toLowerCase(),
    Co = (r, {
        defaultValue: n = void 0,
        removeFromUrl: s = !1
    } = {}) => {
        if (ry) return n;
        const i = `base44_${QS(r)}`,
            a = new URLSearchParams(window.location.search),
            d = a.get(r);
        if (s) {
            a.delete(r);
            const p = `${window.location.pathname}${a.toString()?`?${a.toString()}`:""}${window.location.hash}`;
            window.history.replaceState({}, document.title, p)
        }
        if (d) return Xu.setItem(i, d), d;
        if (n) return Xu.setItem(i, n), n;
        const h = Xu.getItem(i);
        return h || null
    },
    KS = () => ({
        appId: Co("app_id", {
            defaultValue: "6907b1925aac94c417423981"
        }),
        serverUrl: Co("server_url", {
            defaultValue: "https://app.base44.com"
        }),
        token: Co("access_token", {
            removeFromUrl: !0
        }),
        fromUrl: Co("from_url", {
            defaultValue: window.location.href
        }),
        functionsVersion: Co("functions_version")
    }),
    ps = { ...KS()
    },
    {
        appId: GS,
        serverUrl: YS,
        token: JS,
        functionsVersion: XS
    } = ps,
    ms = HS({
        appId: GS,
        serverUrl: YS,
        token: JS,
        functionsVersion: XS,
        requiresAuth: !1
    }),
    sy = C.createContext(),
    ZS = ({
        children: r
    }) => {
        const [n, s] = C.useState(null), [i, a] = C.useState(!1), [d, h] = C.useState(!0), [p, g] = C.useState(!0), [y, v] = C.useState(null), [w, R] = C.useState(null);
        C.useEffect(() => {
            T()
        }, []);
        const T = async () => {
                var M, q;
                try {
                    g(!0), v(null);
                    const I = Ro({
                        baseURL: `${ps.serverUrl}/api/apps/public`,
                        headers: {
                            "X-App-Id": ps.appId
                        },
                        token: ps.token,
                        interceptResponses: !0
                    });
                    try {
                        const z = await I.get(`/prod/public-settings/by-id/${ps.appId}`);
                        R(z), ps.token ? await k() : (h(!1), a(!1)), g(!1)
                    } catch (z) {
                        if (console.error("App state check failed:", z), z.status === 403 && ((q = (M = z.data) == null ? void 0 : M.extra_data) != null && q.reason)) {
                            const G = z.data.extra_data.reason;
                            v(G === "auth_required" ? {
                                type: "auth_required",
                                message: "Authentication required"
                            } : G === "user_not_registered" ? {
                                type: "user_not_registered",
                                message: "User not registered for this app"
                            } : {
                                type: G,
                                message: z.message
                            })
                        } else v({
                            type: "unknown",
                            message: z.message || "Failed to load app"
                        });
                        g(!1), h(!1)
                    }
                } catch (I) {
                    console.error("Unexpected error:", I), v({
                        type: "unknown",
                        message: I.message || "An unexpected error occurred"
                    }), g(!1), h(!1)
                }
            },
            k = async () => {
                try {
                    h(!0);
                    const M = await ms.auth.me();
                    s(M), a(!0), h(!1)
                } catch (M) {
                    console.error("User auth check failed:", M), h(!1), a(!1), (M.status === 401 || M.status === 403) && v({
                        type: "auth_required",
                        message: "Authentication required"
                    })
                }
            },
            E = (M = !0) => {
                s(null), a(!1), M ? ms.auth.logout(window.location.href) : ms.auth.logout()
            },
            b = () => {
                ms.auth.redirectToLogin(window.location.href)
            };
        return c.jsx(sy.Provider, {
            value: {
                user: n,
                isAuthenticated: i,
                isLoadingAuth: d,
                isLoadingPublicSettings: p,
                authError: y,
                appPublicSettings: w,
                logout: E,
                navigateToLogin: b,
                checkAppState: T
            },
            children: r
        })
    },
    oy = () => {
        const r = C.useContext(sy);
        if (!r) throw new Error("useAuth must be used within an AuthProvider");
        return r
    };

function Ge(r) {
    return "/" + r.toLowerCase().replace(/ /g, "-")
}

function im(r, n) {
    if (typeof r == "function") return r(n);
    r != null && (r.current = n)
}

function e2(...r) {
    return n => {
        let s = !1;
        const i = r.map(a => {
            const d = im(a, n);
            return !s && typeof d == "function" && (s = !0), d
        });
        if (s) return () => {
            for (let a = 0; a < i.length; a++) {
                const d = i[a];
                typeof d == "function" ? d() : im(r[a], null)
            }
        }
    }
}

function iy(r) {
    const n = n2(r),
        s = C.forwardRef((i, a) => {
            const {
                children: d,
                ...h
            } = i, p = C.Children.toArray(d), g = p.find(s2);
            if (g) {
                const y = g.props.children,
                    v = p.map(w => w === g ? C.Children.count(y) > 1 ? C.Children.only(null) : C.isValidElement(y) ? y.props.children : null : w);
                return c.jsx(n, { ...h,
                    ref: a,
                    children: C.isValidElement(y) ? C.cloneElement(y, void 0, v) : null
                })
            }
            return c.jsx(n, { ...h,
                ref: a,
                children: d
            })
        });
    return s.displayName = `${r}.Slot`, s
}
var t2 = iy("Slot");

function n2(r) {
    const n = C.forwardRef((s, i) => {
        const {
            children: a,
            ...d
        } = s;
        if (C.isValidElement(a)) {
            const h = i2(a),
                p = o2(d, a.props);
            return a.type !== C.Fragment && (p.ref = i ? e2(i, h) : h), C.cloneElement(a, p)
        }
        return C.Children.count(a) > 1 ? C.Children.only(null) : null
    });
    return n.displayName = `${r}.SlotClone`, n
}
var r2 = Symbol("radix.slottable");

function s2(r) {
    return C.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === r2
}

function o2(r, n) {
    const s = { ...n
    };
    for (const i in n) {
        const a = r[i],
            d = n[i];
        /^on[A-Z]/.test(i) ? a && d ? s[i] = (...p) => {
            const g = d(...p);
            return a(...p), g
        } : a && (s[i] = a) : i === "style" ? s[i] = { ...a,
            ...d
        } : i === "className" && (s[i] = [a, d].filter(Boolean).join(" "))
    }
    return { ...r,
        ...s
    }
}

function i2(r) {
    var i, a;
    let n = (i = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : i.get,
        s = n && "isReactWarning" in n && n.isReactWarning;
    return s ? r.ref : (n = (a = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : a.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? r.props.ref : r.props.ref || r.ref)
}
const l2 = Oc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    mt = C.forwardRef(({
        className: r,
        variant: n,
        size: s,
        asChild: i = !1,
        ...a
    }, d) => {
        const h = i ? t2 : "button";
        return c.jsx(h, {
            className: Pn(l2({
                variant: n,
                size: s,
                className: r
            })),
            ref: d,
            ...a
        })
    });
mt.displayName = "Button";

function a2() {
    const r = C.useRef(null);
    return C.useEffect(() => {
        const n = r.current;
        if (!n) return;
        const s = n.getContext("2d");
        let i, a = [];
        const d = () => {
            n.width = n.offsetWidth, n.height = n.offsetHeight
        };
        d(), window.addEventListener("resize", d);
        for (let p = 0; p < 50; p++) a.push({
            x: Math.random() * n.width,
            y: Math.random() * n.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - .5) * .5,
            vy: (Math.random() - .5) * .5,
            opacity: Math.random() * .5 + .2
        });
        const h = () => {
            s.clearRect(0, 0, n.width, n.height), a.forEach(p => {
                p.x += p.vx, p.y += p.vy, (p.x < 0 || p.x > n.width) && (p.vx *= -1), (p.y < 0 || p.y > n.height) && (p.vy *= -1), s.beginPath(), s.arc(p.x, p.y, p.radius, 0, Math.PI * 2), s.fillStyle = `rgba(253, 185, 19, ${p.opacity})`, s.fill()
            }), i = requestAnimationFrame(h)
        };
        return h(), () => {
            window.removeEventListener("resize", d), cancelAnimationFrame(i)
        }
    }, []), c.jsxs("section", {
        className: "relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-50",
        children: [c.jsx("canvas", {
            ref: r,
            className: "absolute inset-0 w-full h-full",
            style: {
                opacity: .4
            }
        }), c.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5"
        }), c.jsx("div", {
            className: "container mx-auto px-6 relative z-10",
            children: c.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [c.jsxs("div", {
                    className: "space-y-8",
                    children: [c.jsxs("div", {
                        className: "inline-flex items-center gap-2 bg-yellow-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium",
                        children: [c.jsx(Dc, {
                            className: "w-4 h-4"
                        }), c.jsx("span", {
                            children: "Sudbury's Premier Software Development Team"
                        })]
                    }), c.jsxs("h1", {
                        className: "text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight",
                        children: ["Innovative Software.", " ", c.jsx("span", {
                            className: "bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent",
                            children: "Intelligent Design."
                        }), " ", "Impactful Results."]
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-700 leading-relaxed",
                        children: "We transform your ideas into scalable digital solutions that drive growth and efficiency. From custom software to stunning websites — we build what matters."
                    }), c.jsx("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: c.jsx(et, {
                            to: Ge("Contact"),
                            children: c.jsxs(mt, {
                                size: "lg",
                                className: "text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-xl shadow-yellow-500/30 group font-semibold",
                                children: ["Let's Build Something Great", c.jsx(fr, {
                                    className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                })]
                            })
                        })
                    }), c.jsxs("div", {
                        className: "flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200",
                        children: [c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "10+"
                            }), c.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Projects Completed"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "5+"
                            }), c.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Expert Developers"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "100%"
                            }), c.jsx("div", {
                                className: "text-sm text-gray-600",
                                children: "Client Satisfaction"
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "relative lg:h-[600px] hidden lg:block",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-10 blur-3xl"
                    }), c.jsx("div", {
                        className: "relative h-full flex items-center justify-center",
                        children: c.jsxs("div", {
                            className: "grid grid-cols-2 gap-4 w-full max-w-md",
                            children: [c.jsxs("div", {
                                className: "bg-white rounded-2xl p-6 shadow-xl space-y-3 transform hover:scale-105 transition-transform",
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-3/4"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                })]
                            }), c.jsxs("div", {
                                className: "bg-white rounded-2xl p-6 shadow-xl space-y-3 transform hover:scale-105 transition-transform mt-12",
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-3/4"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                })]
                            }), c.jsxs("div", {
                                className: "bg-white rounded-2xl p-6 shadow-xl space-y-3 transform hover:scale-105 transition-transform",
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-xl"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-3/4"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                })]
                            }), c.jsxs("div", {
                                className: "bg-white rounded-2xl p-6 shadow-xl space-y-3 transform hover:scale-105 transition-transform mt-12",
                                children: [c.jsx("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-3/4"
                                }), c.jsx("div", {
                                    className: "h-3 bg-gray-200 rounded w-1/2"
                                })]
                            })]
                        })
                    })]
                })]
            })
        }), c.jsx("div", {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
            children: c.jsx("div", {
                className: "w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1",
                children: c.jsx("div", {
                    className: "w-1.5 h-3 bg-gray-400 rounded-full"
                })
            })
        })]
    })
}
const u2 = {
    blue: "from-yellow-400 to-yellow-500 hover:shadow-yellow-500/30",
    teal: "from-gray-800 to-gray-900 hover:shadow-gray-500/30",
    purple: "from-yellow-500 to-yellow-600 hover:shadow-yellow-500/30",
    orange: "from-gray-700 to-gray-800 hover:shadow-gray-500/30",
    pink: "from-yellow-300 to-yellow-400 hover:shadow-yellow-400/30",
    green: "from-gray-900 to-black hover:shadow-gray-500/30"
};

function c2({
    icon: r,
    title: n,
    description: s,
    color: i,
    index: a
}) {
    return c.jsxs("div", {
        className: "group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2",
        style: {
            animationDelay: `${a*100}ms`,
            animation: "fadeInUp 0.6s ease-out forwards",
            opacity: 0
        },
        children: [c.jsx("style", {
            children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
        }), c.jsx("div", {
            className: `w-16 h-16 bg-gradient-to-br ${u2[i]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`,
            children: c.jsx(r, {
                className: "w-8 h-8 text-white"
            })
        }), c.jsx("h3", {
            className: "text-xl font-bold text-gray-900 mb-3",
            children: n
        }), c.jsx("p", {
            className: "text-gray-600 leading-relaxed",
            children: s
        })]
    })
}
const d2 = [{
    icon: px,
    label: "Business Growth",
    value: "2x Average",
    color: "yellow"
}, {
    icon: Ic,
    label: "Happy Clients",
    value: "50+",
    color: "gray"
}, {
    icon: Rl,
    label: "Average Delivery",
    value: "6-8 Weeks",
    color: "yellow"
}, {
    icon: Ac,
    label: "Client Satisfaction",
    value: "100%",
    color: "gray"
}];

function f2() {
    return c.jsxs("section", {
        className: "py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden",
        children: [c.jsxs("div", {
            className: "absolute inset-0 opacity-10",
            children: [c.jsx("div", {
                className: "absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
            }), c.jsx("div", {
                className: "absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            })]
        }), c.jsx("div", {
            className: "container mx-auto px-6 relative z-10",
            children: c.jsx("div", {
                className: "grid md:grid-cols-4 gap-8",
                children: d2.map((r, n) => c.jsxs("div", {
                    className: "text-center text-gray-900",
                    children: [c.jsx("div", {
                        className: "flex justify-center mb-4",
                        children: c.jsx("div", {
                            className: "w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center",
                            children: c.jsx(r.icon, {
                                className: "w-8 h-8"
                            })
                        })
                    }), c.jsx("div", {
                        className: "text-4xl font-bold mb-2",
                        children: r.value
                    }), c.jsx("div", {
                        className: "text-gray-800",
                        children: r.label
                    })]
                }, n))
            })
        })]
    })
}

function h2() {
    return c.jsxs("section", {
        className: "py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden",
        children: [c.jsxs("div", {
            className: "absolute inset-0 opacity-10",
            children: [c.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
            }), c.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
            })]
        }), c.jsx("div", {
            className: "container mx-auto px-6 relative z-10",
            children: c.jsxs("div", {
                className: "max-w-4xl mx-auto text-center text-gray-900",
                children: [c.jsx("h2", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
                    children: "Ready to Start Your Project?"
                }), c.jsx("p", {
                    className: "text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed",
                    children: "Let's discuss how we can help transform your business with custom software solutions. Get a free consultation and project quote today."
                }), c.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [c.jsx(et, {
                        to: Ge("Contact"),
                        children: c.jsxs(mt, {
                            size: "lg",
                            className: "text-lg px-8 py-6 bg-gray-900 text-white hover:bg-gray-800 shadow-2xl group",
                            children: [c.jsx(Lc, {
                                className: "w-5 h-5 mr-2"
                            }), "Get a Free Quote", c.jsx(fr, {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    }), c.jsx(et, {
                        to: Ge("Process"),
                        children: c.jsx(mt, {
                            size: "lg",
                            variant: "outline",
                            className: "text-lg px-8 py-6 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
                            children: "See How We Work"
                        })
                    })]
                }), c.jsxs("div", {
                    className: "mt-12 pt-12 border-t border-gray-800/20",
                    children: [c.jsx("p", {
                        className: "text-gray-800 mb-4",
                        children: "Or reach out directly:"
                    }), c.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-6 justify-center text-gray-900 font-medium",
                        children: [c.jsx("a", {
                            href: "mailto:hello@floxen.ca",
                            className: "hover:text-gray-700 transition-colors",
                            children: "hello@floxen.ca"
                        }), c.jsx("span", {
                            className: "hidden sm:block",
                            children: "•"
                        }), c.jsx("a", {
                            href: "tel:+15551234567",
                            className: "hover:text-gray-700 transition-colors",
                            children: "(555) 123-4567"
                        })]
                    })]
                })]
            })
        })]
    })
}
const p2 = [{
    icon: Ao,
    title: "Custom Software Development",
    description: "Web apps, business systems, and automation tools built to scale with your business.",
    color: "blue"
}, {
    icon: Tl,
    title: "Web Design & Development",
    description: "Fast, responsive, SEO-friendly websites that convert visitors into customers.",
    color: "teal"
}, {
    icon: _m,
    title: "E-commerce Development",
    description: "Custom online stores with seamless payment integrations and user experiences.",
    color: "purple"
}, {
    icon: Fc,
    title: "Mobile App Development",
    description: "Native iOS and Android apps that engage users and drive business growth.",
    color: "orange"
}, {
    icon: Dc,
    title: "UI/UX Design",
    description: "Modern, intuitive interfaces designed with your users' needs at the center.",
    color: "pink"
}, {
    icon: zc,
    title: "Maintenance & Support",
    description: "Ongoing updates, bug fixes, and technical support to keep you running smoothly.",
    color: "green"
}];

function m2() {
    return c.jsxs("div", {
        children: [c.jsx(a2, {}), c.jsx(f2, {}), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "What We Do Best"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                        children: "From concept to launch, we deliver end-to-end software solutions designed for modern businesses"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: p2.map((r, n) => c.jsx(c2, { ...r,
                        index: n
                    }, n))
                }), c.jsx("div", {
                    className: "text-center mt-12",
                    children: c.jsx(et, {
                        to: Ge("Services"),
                        children: c.jsxs(mt, {
                            variant: "outline",
                            size: "lg",
                            className: "group border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white",
                            children: ["View All Services", c.jsx(fr, {
                                className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-50 to-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Why Choose Floxen?"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "We're not just developers — we're your partners in digital transformation"
                    })]
                }), c.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [c.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow",
                        children: [c.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6",
                            children: c.jsx(Cm, {
                                className: "w-8 h-8 text-gray-900"
                            })
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Fast & Agile"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "We move quickly without compromising quality. Your project launches faster, giving you a competitive edge."
                        })]
                    }), c.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow",
                        children: [c.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6",
                            children: c.jsx(Ic, {
                                className: "w-8 h-8 text-white"
                            })
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Collaborative Approach"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "You're part of the process. We work closely with you to ensure the final product exceeds expectations."
                        })]
                    }), c.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow",
                        children: [c.jsx("div", {
                            className: "w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl flex items-center justify-center mb-6",
                            children: c.jsx(Ac, {
                                className: "w-8 h-8 text-gray-900"
                            })
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-4",
                            children: "Quality First"
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: "Every line of code is crafted with care. We build scalable, maintainable solutions that stand the test of time."
                        })]
                    })]
                })]
            })
        }), c.jsx(h2, {})]
    })
}
const g2 = [{
        name: "Bhavya Shah",
        role: "Software Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        bio: "With 5+ years of experience in full-stack development, Bhavya specializes in building scalable web applications using modern frameworks. Expert in React, Node.js, and cloud architecture.",
        skills: ["React", "Node.js", "AWS", "MongoDB"]
    }, {
        name: "Meet Lathiya",
        role: "Web Designer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
        bio: "Meet brings creativity and technical precision to every project. Specializing in UI/UX design and front-end development, creating interfaces that users love.",
        skills: ["Figma", "CSS/Tailwind", "Adobe XD", "Animation"]
    }, {
        name: "Dev Thakkar",
        role: "Data Analyst",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
        bio: "Dev transforms raw data into actionable insights. Expert in analytics, performance optimization, and helping businesses make data-driven decisions.",
        skills: ["Python", "SQL", "Analytics", "Visualization"]
    }],
    y2 = [{
        icon: fx,
        title: "Purpose-Driven",
        description: "Every line of code serves a business goal. We build solutions that deliver measurable impact."
    }, {
        icon: Em,
        title: "Client-Centered",
        description: "Your success is our success. We partner closely with you throughout the entire journey."
    }, {
        icon: Tm,
        title: "Innovation First",
        description: "We stay ahead of tech trends to deliver cutting-edge solutions that give you an edge."
    }, {
        icon: lx,
        title: "Quality & Security",
        description: "We never compromise on code quality, security, or performance. Your trust matters."
    }],
    v2 = [{
        name: "React",
        icon: Ao
    }, {
        name: "Node.js",
        icon: Bv
    }, {
        name: "UI/UX Design",
        icon: Tl
    }, {
        name: "Cloud Services",
        icon: Lv
    }, {
        name: "Security",
        icon: qv
    }, {
        name: "Mobile Dev",
        icon: Fc
    }];

function x2() {
    return c.jsxs("div", {
        children: [c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-6",
                        children: "Building the Future, One Line of Code at a Time"
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-800 leading-relaxed",
                        children: "We're a close-knit team of passionate developers and designers based in Sudbury, Ontario. We believe technology should empower businesses, not complicate them."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [c.jsxs("div", {
                        children: [c.jsx("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                            children: "Our Mission"
                        }), c.jsx("p", {
                            className: "text-xl text-gray-600 leading-relaxed mb-6",
                            children: "At Floxen, we're on a mission to help businesses in Northern Ontario and beyond unlock their full potential through innovative software solutions."
                        }), c.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed mb-6",
                            children: "We combine technical excellence with a deep understanding of business needs. Whether you're a startup building your first MVP or an established company seeking digital transformation, we're here to turn your vision into reality."
                        }), c.jsx("p", {
                            className: "text-lg text-gray-600 leading-relaxed",
                            children: "We're not just developers — we're problem solvers, strategic partners, and advocates for your success."
                        })]
                    }), c.jsxs("div", {
                        className: "relative",
                        children: [c.jsx("img", {
                            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
                            alt: "Team collaboration",
                            className: "rounded-2xl shadow-2xl"
                        }), c.jsxs("div", {
                            className: "absolute -bottom-6 -left-6 bg-yellow-500 text-gray-900 p-6 rounded-xl shadow-xl",
                            children: [c.jsx("div", {
                                className: "text-4xl font-bold",
                                children: "5+"
                            }), c.jsx("div", {
                                className: "text-sm",
                                children: "Experts, One Team"
                            })]
                        })]
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-gray-50",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Our Values"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "The principles that guide everything we do"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: y2.map((r, n) => c.jsxs("div", {
                        className: "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4",
                            children: c.jsx(r.icon, {
                                className: "w-7 h-7 text-gray-900"
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: r.title
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: r.description
                        })]
                    }, n))
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Meet Our Team"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Three experts, endless possibilities"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: g2.map((r, n) => c.jsxs("div", {
                        className: "group",
                        children: [c.jsxs("div", {
                            className: "relative mb-6 overflow-hidden rounded-2xl",
                            children: [c.jsx("img", {
                                src: r.image,
                                alt: r.name,
                                className: "w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            }), c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                            })]
                        }), c.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-1",
                            children: r.name
                        }), c.jsx("p", {
                            className: "text-yellow-600 font-semibold mb-4",
                            children: r.role
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed mb-4",
                            children: r.bio
                        }), c.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: r.skills.map((s, i) => c.jsx("span", {
                                className: "bg-yellow-100 text-gray-900 px-3 py-1 rounded-full text-sm font-medium",
                                children: s
                            }, i))
                        })]
                    }, n))
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-4",
                        children: "Our Technology Stack"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-400",
                        children: "Modern tools for modern solutions"
                    })]
                }), c.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
                    children: v2.map((r, n) => c.jsxs("div", {
                        className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors",
                        children: [c.jsx(r.icon, {
                            className: "w-10 h-10 mx-auto mb-3 text-yellow-400"
                        }), c.jsx("div", {
                            className: "font-medium",
                            children: r.name
                        })]
                    }, n))
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center text-gray-900",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-6",
                        children: "Let's Work Together"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-800 mb-8 max-w-2xl mx-auto",
                        children: "Ready to bring your project to life? Get in touch and let's discuss how we can help."
                    }), c.jsx(et, {
                        to: Ge("Contact"),
                        children: c.jsxs(mt, {
                            size: "lg",
                            className: "bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 group",
                            children: ["Start Your Project", c.jsx(fr, {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
const w2 = [{
    icon: Ao,
    title: "Custom Software Development",
    description: "Transform your business operations with tailored software solutions",
    color: "from-yellow-400 to-yellow-500",
    features: ["Custom web applications and dashboards", "Business process automation tools", "API development and integration", "Legacy system modernization", "Cloud-native application development", "Database design and optimization"],
    benefits: "Streamline operations, reduce manual work, and scale your business with software built specifically for your needs.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
}, {
    icon: Tl,
    title: "Web Design & Development",
    description: "Beautiful, fast, and SEO-optimized websites that convert",
    color: "from-gray-800 to-gray-900",
    features: ["Responsive website design", "Landing pages that convert", "Content management systems", "SEO optimization", "Performance optimization", "Ongoing maintenance and updates"],
    benefits: "Establish credibility, attract customers, and grow your online presence with a professionally designed website.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
}, {
    icon: _m,
    title: "E-commerce Development",
    description: "Complete online store solutions with seamless shopping experiences",
    color: "from-yellow-500 to-yellow-600",
    features: ["Custom e-commerce platforms", "Payment gateway integration", "Inventory management systems", "Shopping cart optimization", "Product catalog management", "Analytics and reporting"],
    benefits: "Start selling online with a robust, secure platform that handles everything from browsing to checkout.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
}, {
    icon: Fc,
    title: "Mobile App Development",
    description: "Native iOS and Android apps that engage and delight users",
    color: "from-gray-700 to-gray-800",
    features: ["iOS and Android native apps", "Cross-platform development", "App Store deployment", "Push notifications", "Offline functionality", "In-app purchases"],
    benefits: "Reach your customers wherever they are with mobile apps that drive engagement and loyalty.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
}, {
    icon: Dc,
    title: "UI/UX Design",
    description: "User-centered design that creates memorable experiences",
    color: "from-yellow-300 to-yellow-400",
    features: ["User research and personas", "Wireframing and prototyping", "Visual design and branding", "Usability testing", "Design systems", "Accessibility compliance"],
    benefits: "Delight your users with intuitive, beautiful interfaces that make complex tasks simple.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
}, {
    icon: zc,
    title: "Maintenance & Support",
    description: "Keep your software running smoothly with ongoing care",
    color: "from-gray-900 to-black",
    features: ["Bug fixes and troubleshooting", "Security updates and patches", "Performance monitoring", "Feature enhancements", "Technical support", "Backup and disaster recovery"],
    benefits: "Focus on your business while we handle the technical details and keep everything running perfectly.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
}];

function b2() {
    return c.jsxs("div", {
        children: [c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-6",
                        children: "Services That Drive Results"
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-800 leading-relaxed",
                        children: "End-to-end software solutions tailored to your unique business needs. From initial concept to ongoing support, we're with you every step of the way."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsx("div", {
                    className: "space-y-20",
                    children: w2.map((r, n) => c.jsxs("div", {
                        className: `grid lg:grid-cols-2 gap-12 items-center ${n%2===1?"lg:flex-row-reverse":""}`,
                        children: [c.jsxs("div", {
                            className: n % 2 === 1 ? "lg:order-2" : "",
                            children: [c.jsx("div", {
                                className: `w-20 h-20 bg-gradient-to-br ${r.color} rounded-2xl flex items-center justify-center mb-6`,
                                children: c.jsx(r.icon, {
                                    className: "w-10 h-10 text-white"
                                })
                            }), c.jsx("h2", {
                                className: "text-4xl font-bold text-gray-900 mb-4",
                                children: r.title
                            }), c.jsx("p", {
                                className: "text-xl text-gray-600 mb-6 leading-relaxed",
                                children: r.description
                            }), c.jsxs("div", {
                                className: "bg-gray-50 rounded-xl p-6 mb-6",
                                children: [c.jsx("h3", {
                                    className: "font-semibold text-gray-900 mb-3",
                                    children: "What We Deliver:"
                                }), c.jsx("ul", {
                                    className: "space-y-2",
                                    children: r.features.map((s, i) => c.jsxs("li", {
                                        className: "flex items-start gap-2",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            className: "text-gray-700",
                                            children: s
                                        })]
                                    }, i))
                                })]
                            }), c.jsx("div", {
                                className: "bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500",
                                children: c.jsxs("p", {
                                    className: "text-gray-700 leading-relaxed",
                                    children: [c.jsx("strong", {
                                        className: "text-gray-900",
                                        children: "The Impact:"
                                    }), " ", r.benefits]
                                })
                            })]
                        }), c.jsx("div", {
                            className: n % 2 === 1 ? "lg:order-1" : "",
                            children: c.jsxs("div", {
                                className: "relative",
                                children: [c.jsx("div", {
                                    className: `absolute inset-0 bg-gradient-to-br ${r.color} rounded-3xl opacity-10 blur-3xl`
                                }), c.jsx("img", {
                                    src: r.image,
                                    alt: r.title,
                                    className: "relative rounded-2xl shadow-2xl"
                                })]
                            })
                        })]
                    }, n))
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-50 to-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "text-center max-w-3xl mx-auto",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                        children: "How We Work"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600 mb-8",
                        children: "Our proven process ensures your project is delivered on time, on budget, and exceeds expectations."
                    }), c.jsx(et, {
                        to: Ge("Process"),
                        children: c.jsxs(mt, {
                            size: "lg",
                            className: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold group",
                            children: ["See Our Development Process", c.jsx(fr, {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-6",
                        children: "Let's Discuss Your Project"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-800 mb-8",
                        children: "Ready to get started? Schedule a free consultation to discuss your needs and get a custom quote."
                    }), c.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [c.jsx(et, {
                            to: Ge("Contact"),
                            children: c.jsx(mt, {
                                size: "lg",
                                className: "bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6",
                                children: "Get a Free Quote"
                            })
                        }), c.jsx(et, {
                            to: Ge("About"),
                            children: c.jsx(mt, {
                                size: "lg",
                                variant: "outline",
                                className: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6",
                                children: "Learn About Us"
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
const lm = [{
        number: "01",
        icon: rx,
        title: "Discovery & Planning",
        duration: "1-2 weeks",
        description: "We start by understanding your business, goals, and challenges. This phase is all about gathering requirements and defining project scope.",
        activities: ["Initial consultation and needs assessment", "Define project goals and success metrics", "Create technical specifications", "Develop project timeline and milestones", "Establish communication protocols"],
        deliverables: ["Project roadmap", "Technical specification document", "Timeline and budget"]
    }, {
        number: "02",
        icon: Tl,
        title: "Design & Prototyping",
        duration: "2-3 weeks",
        description: "Our designers create wireframes and mockups that bring your vision to life. We iterate based on your feedback until it's perfect.",
        activities: ["User research and persona development", "Wireframe creation", "Visual design and branding", "Interactive prototypes", "Design review sessions"],
        deliverables: ["Wireframes", "High-fidelity mockups", "Interactive prototype", "Design system"]
    }, {
        number: "03",
        icon: Dv,
        title: "Development & Building",
        duration: "4-8 weeks",
        description: "This is where the magic happens. Our developers build your solution using modern technologies and best practices.",
        activities: ["Set up development environment", "Sprint-based development cycles", "Regular code reviews", "Integration of third-party services", "Progress demos every 2 weeks"],
        deliverables: ["Working software", "API documentation", "Admin panel", "Test environment"]
    }, {
        number: "04",
        icon: Cm,
        title: "Testing & Launch",
        duration: "1-2 weeks",
        description: "Before going live, we thoroughly test everything to ensure a smooth, bug-free launch that delights users.",
        activities: ["Quality assurance testing", "Performance optimization", "Security audits", "User acceptance testing", "Deployment to production"],
        deliverables: ["Deployed application", "User documentation", "Training materials", "Launch checklist"]
    }, {
        number: "05",
        icon: zc,
        title: "Support & Optimization",
        duration: "Ongoing",
        description: "Post-launch, we monitor performance, fix any issues, and continuously improve based on user feedback and data.",
        activities: ["24/7 monitoring and maintenance", "Bug fixes and patches", "Performance optimization", "Feature enhancements", "Regular check-ins"],
        deliverables: ["Monthly reports", "Updates and patches", "Analytics insights", "Ongoing support"]
    }],
    k2 = [{
        title: "Transparent Communication",
        description: "You're always in the loop with regular updates, demos, and open channels."
    }, {
        title: "Agile & Flexible",
        description: "We adapt to changes and new insights as your project evolves."
    }, {
        title: "Quality First",
        description: "Every line of code is reviewed, tested, and optimized for performance."
    }, {
        title: "Your Success Metrics",
        description: "We measure success by your business goals, not just technical milestones."
    }];

function S2() {
    return c.jsxs("div", {
        children: [c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-6",
                        children: "How We Work"
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-800 leading-relaxed",
                        children: "A proven, transparent process that turns your ideas into reality. From discovery to deployment and beyond — we're with you every step of the way."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsx("div", {
                    className: "space-y-24",
                    children: lm.map((r, n) => c.jsxs("div", {
                        className: "relative",
                        children: [n < lm.length - 1 && c.jsx("div", {
                            className: "hidden lg:block absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-yellow-400 to-yellow-500"
                        }), c.jsxs("div", {
                            className: "grid lg:grid-cols-12 gap-8 items-start",
                            children: [c.jsx("div", {
                                className: "lg:col-span-2 flex flex-col items-center lg:items-start",
                                children: c.jsxs("div", {
                                    className: "relative mb-4",
                                    children: [c.jsx("div", {
                                        className: "w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl",
                                        children: c.jsx(r.icon, {
                                            className: "w-14 h-14 text-gray-900"
                                        })
                                    }), c.jsx("div", {
                                        className: "absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-500",
                                        children: c.jsx("span", {
                                            className: "text-sm font-bold text-gray-900",
                                            children: r.number
                                        })
                                    })]
                                })
                            }), c.jsxs("div", {
                                className: "lg:col-span-10",
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-4 mb-4",
                                    children: [c.jsx("h3", {
                                        className: "text-3xl md:text-4xl font-bold text-gray-900",
                                        children: r.title
                                    }), c.jsx("span", {
                                        className: "bg-yellow-100 text-gray-900 px-4 py-1 rounded-full text-sm font-medium",
                                        children: r.duration
                                    })]
                                }), c.jsx("p", {
                                    className: "text-xl text-gray-600 mb-8 leading-relaxed",
                                    children: r.description
                                }), c.jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [c.jsxs("div", {
                                        children: [c.jsxs("h4", {
                                            className: "font-semibold text-gray-900 mb-4 flex items-center gap-2",
                                            children: [c.jsx("div", {
                                                className: "w-2 h-2 bg-yellow-500 rounded-full"
                                            }), "Key Activities"]
                                        }), c.jsx("ul", {
                                            className: "space-y-2",
                                            children: r.activities.map((s, i) => c.jsxs("li", {
                                                className: "flex items-start gap-2 text-gray-600",
                                                children: [c.jsx(Ct, {
                                                    className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                                }), c.jsx("span", {
                                                    children: s
                                                })]
                                            }, i))
                                        })]
                                    }), c.jsxs("div", {
                                        children: [c.jsxs("h4", {
                                            className: "font-semibold text-gray-900 mb-4 flex items-center gap-2",
                                            children: [c.jsx("div", {
                                                className: "w-2 h-2 bg-yellow-500 rounded-full"
                                            }), "Deliverables"]
                                        }), c.jsx("div", {
                                            className: "space-y-2",
                                            children: r.deliverables.map((s, i) => c.jsx("div", {
                                                className: "bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-3 border-l-4 border-yellow-500",
                                                children: c.jsx("span", {
                                                    className: "text-gray-700 font-medium",
                                                    children: s
                                                })
                                            }, i))
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }, n))
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-50 to-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Our Core Principles"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "What guides us in every project we take on"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: k2.map((r, n) => c.jsxs("div", {
                        className: "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow",
                        children: [c.jsx("div", {
                            className: "w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4",
                            children: c.jsx(Ct, {
                                className: "w-6 h-6 text-gray-900"
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: r.title
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: r.description
                        })]
                    }, n))
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-6",
                        children: "Typical Project Timeline"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600 mb-12",
                        children: "Most projects are completed within 6-12 weeks from kickoff to launch"
                    }), c.jsx("div", {
                        className: "bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 md:p-12",
                        children: c.jsxs("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-8",
                            children: [c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-5xl font-bold text-yellow-600 mb-2",
                                    children: "Day 1"
                                }), c.jsx("div", {
                                    className: "text-gray-700",
                                    children: "Project Kickoff"
                                })]
                            }), c.jsx("div", {
                                className: "hidden md:block flex-1 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                            }), c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-5xl font-bold text-yellow-600 mb-2",
                                    children: "6-8 weeks"
                                }), c.jsx("div", {
                                    className: "text-gray-700",
                                    children: "Development"
                                })]
                            }), c.jsx("div", {
                                className: "hidden md:block flex-1 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                            }), c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-5xl font-bold text-yellow-600 mb-2",
                                    children: "Launch! 🚀"
                                }), c.jsx("div", {
                                    className: "text-gray-700",
                                    children: "Go Live"
                                })]
                            })]
                        })
                    }), c.jsx("p", {
                        className: "text-gray-600 mt-8",
                        children: "* Timeline varies based on project scope and complexity. We'll provide a detailed timeline during the discovery phase."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-3xl mx-auto text-center",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-6",
                        children: "Ready to Get Started?"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-800 mb-8",
                        children: "Let's schedule a free consultation to discuss your project and create a custom roadmap."
                    }), c.jsx(et, {
                        to: Ge("Contact"),
                        children: c.jsxs(mt, {
                            size: "lg",
                            className: "bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 group",
                            children: ["Start Your Project Today", c.jsx(fr, {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
const Po = C.forwardRef(({
    className: r,
    type: n,
    ...s
}, i) => c.jsx("input", {
    type: n,
    className: Pn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
    ref: i,
    ...s
}));
Po.displayName = "Input";
const ly = C.forwardRef(({
    className: r,
    ...n
}, s) => c.jsx("textarea", {
    className: Pn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
    ref: s,
    ...n
}));
ly.displayName = "Textarea";
var N2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    E2 = N2.reduce((r, n) => {
        const s = iy(`Primitive.${n}`),
            i = C.forwardRef((a, d) => {
                const {
                    asChild: h,
                    ...p
                } = a, g = h ? s : n;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), c.jsx(g, { ...p,
                    ref: d
                })
            });
        return i.displayName = `Primitive.${n}`, { ...r,
            [n]: i
        }
    }, {}),
    j2 = "Label",
    ay = C.forwardRef((r, n) => c.jsx(E2.label, { ...r,
        ref: n,
        onMouseDown: s => {
            var a;
            s.target.closest("button, input, select, textarea") || ((a = r.onMouseDown) == null || a.call(r, s), !s.defaultPrevented && s.detail > 1 && s.preventDefault())
        }
    }));
ay.displayName = j2;
var uy = ay;
const C2 = Oc("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    tr = C.forwardRef(({
        className: r,
        ...n
    }, s) => c.jsx(uy, {
        ref: s,
        className: Pn(C2(), r),
        ...n
    }));
tr.displayName = uy.displayName;
const _2 = [{
    icon: Lc,
    title: "Email Us",
    detail: "floxeninc@gmail.com",
    link: "mailto:floxeninc@gmail.com"
}, {
    icon: jm,
    title: "Call Us",
    detail: "647-535-9928",
    link: "tel:+16475359928"
}, {
    icon: Mc,
    title: "Visit Us",
    detail: "Sudbury, Ontario, Canada",
    link: "https://maps.google.com/?q=Sudbury,Ontario"
}];

function R2() {
    const [r, n] = C.useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: ""
    }), [s, i] = C.useState(!1), [a, d] = C.useState(!1), h = async g => {
        g.preventDefault(), d(!0), await new Promise(y => setTimeout(y, 1500)), i(!0), d(!1)
    }, p = g => {
        n({ ...r,
            [g.target.name]: g.target.value
        })
    };
    return s ? c.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100",
        children: c.jsxs("div", {
            className: "text-center max-w-2xl mx-auto px-6",
            children: [c.jsx("div", {
                className: "w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6",
                children: c.jsx(Ct, {
                    className: "w-12 h-12 text-white"
                })
            }), c.jsx("h2", {
                className: "text-4xl font-bold text-gray-900 mb-4",
                children: "Thank You!"
            }), c.jsx("p", {
                className: "text-xl text-gray-600 mb-8",
                children: "We've received your message and will get back to you within 24 hours. We're excited to learn more about your project!"
            }), c.jsx(mt, {
                onClick: () => i(!1),
                className: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold",
                children: "Send Another Message"
            })]
        })
    }) : c.jsxs("div", {
        children: [c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-6",
                        children: "Let's Build Something Great Together"
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-800 leading-relaxed",
                        children: "Ready to transform your business with custom software? Get in touch for a free consultation and project quote. We typically respond within 24 hours."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-12 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsx("div", {
                    className: "grid md:grid-cols-3 gap-6 -mt-16 relative z-10",
                    children: _2.map((g, y) => c.jsx("a", {
                        href: g.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1",
                        children: c.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [c.jsx("div", {
                                className: "w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0",
                                children: c.jsx(g.icon, {
                                    className: "w-7 h-7 text-gray-900"
                                })
                            }), c.jsxs("div", {
                                children: [c.jsx("h3", {
                                    className: "font-semibold text-gray-900 mb-1",
                                    children: g.title
                                }), c.jsx("p", {
                                    className: "text-gray-600",
                                    children: g.detail
                                })]
                            })]
                        })
                    }, y))
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto",
                    children: [c.jsxs("div", {
                        children: [c.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Get a Free Quote"
                        }), c.jsx("p", {
                            className: "text-lg text-gray-600 mb-8",
                            children: "Fill out the form below and we'll get back to you with a custom proposal for your project."
                        }), c.jsxs("form", {
                            onSubmit: h,
                            className: "space-y-6",
                            children: [c.jsxs("div", {
                                children: [c.jsx(tr, {
                                    htmlFor: "name",
                                    children: "Full Name *"
                                }), c.jsx(Po, {
                                    id: "name",
                                    name: "name",
                                    required: !0,
                                    value: r.name,
                                    onChange: p,
                                    placeholder: "John Doe",
                                    className: "mt-2"
                                })]
                            }), c.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-4",
                                children: [c.jsxs("div", {
                                    children: [c.jsx(tr, {
                                        htmlFor: "email",
                                        children: "Email Address *"
                                    }), c.jsx(Po, {
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                        required: !0,
                                        value: r.email,
                                        onChange: p,
                                        placeholder: "john@company.com",
                                        className: "mt-2"
                                    })]
                                }), c.jsxs("div", {
                                    children: [c.jsx(tr, {
                                        htmlFor: "phone",
                                        children: "Phone Number"
                                    }), c.jsx(Po, {
                                        id: "phone",
                                        name: "phone",
                                        type: "tel",
                                        value: r.phone,
                                        onChange: p,
                                        placeholder: "647-535-9928",
                                        className: "mt-2"
                                    })]
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx(tr, {
                                    htmlFor: "company",
                                    children: "Company Name"
                                }), c.jsx(Po, {
                                    id: "company",
                                    name: "company",
                                    value: r.company,
                                    onChange: p,
                                    placeholder: "Your Company Inc.",
                                    className: "mt-2"
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx(tr, {
                                    htmlFor: "service",
                                    children: "What service are you interested in? *"
                                }), c.jsxs("select", {
                                    id: "service",
                                    name: "service",
                                    required: !0,
                                    value: r.service,
                                    onChange: p,
                                    className: "mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                    children: [c.jsx("option", {
                                        value: "",
                                        children: "Select a service"
                                    }), c.jsx("option", {
                                        value: "custom-software",
                                        children: "Custom Software Development"
                                    }), c.jsx("option", {
                                        value: "web-design",
                                        children: "Web Design & Development"
                                    }), c.jsx("option", {
                                        value: "ecommerce",
                                        children: "E-commerce Development"
                                    }), c.jsx("option", {
                                        value: "mobile",
                                        children: "Mobile App Development"
                                    }), c.jsx("option", {
                                        value: "uiux",
                                        children: "UI/UX Design"
                                    }), c.jsx("option", {
                                        value: "maintenance",
                                        children: "Maintenance & Support"
                                    }), c.jsx("option", {
                                        value: "other",
                                        children: "Other / Not Sure"
                                    })]
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx(tr, {
                                    htmlFor: "budget",
                                    children: "Estimated Budget"
                                }), c.jsxs("select", {
                                    id: "budget",
                                    name: "budget",
                                    value: r.budget,
                                    onChange: p,
                                    className: "mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500",
                                    children: [c.jsx("option", {
                                        value: "",
                                        children: "Select a range"
                                    }), c.jsx("option", {
                                        value: "under-10k",
                                        children: "Under $10,000"
                                    }), c.jsx("option", {
                                        value: "10k-25k",
                                        children: "$10,000 - $25,000"
                                    }), c.jsx("option", {
                                        value: "25k-50k",
                                        children: "$25,000 - $50,000"
                                    }), c.jsx("option", {
                                        value: "50k-plus",
                                        children: "$50,000+"
                                    }), c.jsx("option", {
                                        value: "not-sure",
                                        children: "Not sure yet"
                                    })]
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx(tr, {
                                    htmlFor: "message",
                                    children: "Tell us about your project *"
                                }), c.jsx(ly, {
                                    id: "message",
                                    name: "message",
                                    required: !0,
                                    value: r.message,
                                    onChange: p,
                                    placeholder: "Describe your project goals, timeline, and any specific requirements...",
                                    rows: 6,
                                    className: "mt-2"
                                })]
                            }), c.jsx(mt, {
                                type: "submit",
                                size: "lg",
                                disabled: a,
                                className: "w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 text-lg py-6 font-semibold",
                                children: a ? c.jsxs(c.Fragment, {
                                    children: [c.jsx("div", {
                                        className: "animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"
                                    }), "Sending..."]
                                }) : c.jsxs(c.Fragment, {
                                    children: [c.jsx(ox, {
                                        className: "w-5 h-5 mr-2"
                                    }), "Send Message"]
                                })
                            }), c.jsx("p", {
                                className: "text-sm text-gray-500 text-center",
                                children: "By submitting this form, you agree to our privacy policy."
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "space-y-8",
                        children: [c.jsxs("div", {
                            className: "bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8",
                            children: [c.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-6",
                                children: "What Happens Next?"
                            }), c.jsxs("div", {
                                className: "space-y-4",
                                children: [c.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [c.jsx("div", {
                                        className: "w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold",
                                        children: "1"
                                    }), c.jsxs("div", {
                                        children: [c.jsx("h4", {
                                            className: "font-semibold text-gray-900 mb-1",
                                            children: "We Review Your Request"
                                        }), c.jsx("p", {
                                            className: "text-gray-600",
                                            children: "Our team carefully reviews your project details to understand your needs."
                                        })]
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [c.jsx("div", {
                                        className: "w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold",
                                        children: "2"
                                    }), c.jsxs("div", {
                                        children: [c.jsx("h4", {
                                            className: "font-semibold text-gray-900 mb-1",
                                            children: "Schedule a Consultation"
                                        }), c.jsx("p", {
                                            className: "text-gray-600",
                                            children: "We'll reach out to schedule a free 30-minute call to discuss your project in detail."
                                        })]
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [c.jsx("div", {
                                        className: "w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold",
                                        children: "3"
                                    }), c.jsxs("div", {
                                        children: [c.jsx("h4", {
                                            className: "font-semibold text-gray-900 mb-1",
                                            children: "Receive Your Proposal"
                                        }), c.jsx("p", {
                                            className: "text-gray-600",
                                            children: "Get a detailed project proposal with timeline, deliverables, and pricing."
                                        })]
                                    })]
                                })]
                            })]
                        }), c.jsxs("div", {
                            className: "bg-white rounded-2xl p-8 shadow-lg",
                            children: [c.jsxs("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [c.jsx(Rl, {
                                    className: "w-6 h-6 text-yellow-600"
                                }), c.jsx("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Quick Response Time"
                                })]
                            }), c.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "We typically respond to all inquiries within 24 hours during business days."
                            }), c.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: "Monday - Friday: 9:00 AM - 6:00 PM EST"
                            })]
                        }), c.jsxs("div", {
                            className: "bg-white rounded-2xl p-8 shadow-lg",
                            children: [c.jsxs("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [c.jsx(Xv, {
                                    className: "w-6 h-6 text-yellow-600"
                                }), c.jsx("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Prefer to Talk?"
                                })]
                            }), c.jsxs("p", {
                                className: "text-gray-600 mb-4",
                                children: ["Give us a call directly at ", c.jsx("strong", {
                                    children: "647-535-9928"
                                }), " or send us an email at ", c.jsx("strong", {
                                    children: "floxeninc@gmail.com"
                                })]
                            })]
                        }), c.jsx("div", {
                            className: "rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200",
                            children: c.jsx("iframe", {
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177304.5405834384!2d-81.12326685!3d46.491049699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2eff4497163b8d%3A0x10526a34e93a6c5e!2sSudbury%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890",
                                width: "100%",
                                height: "100%",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: !0,
                                loading: "lazy",
                                title: "Floxen Location"
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
const T2 = [{
        icon: Vv,
        title: "Remote Flexibility",
        description: "Work from anywhere — we value results over location"
    }, {
        icon: Rl,
        title: "Flexible Hours",
        description: "Balance work and life with flexible scheduling that fits your lifestyle"
    }, {
        icon: Tm,
        title: "Growth Opportunities",
        description: "Learn new technologies and advance your career with challenging projects"
    }, {
        icon: Ac,
        title: "Competitive Compensation",
        description: "Fair pay based on your skills and contribution"
    }, {
        icon: zv,
        title: "Great Culture",
        description: "Collaborative, supportive team that celebrates wins and learns from challenges"
    }, {
        icon: Em,
        title: "Work-Life Balance",
        description: "We believe in sustainable work practices that prevent burnout"
    }],
    P2 = [{
        title: "Innovation",
        description: "We embrace new technologies and creative solutions"
    }, {
        title: "Collaboration",
        description: "We work together and support each other"
    }, {
        title: "Quality",
        description: "We take pride in delivering exceptional work"
    }, {
        title: "Growth",
        description: "We invest in continuous learning and improvement"
    }];

function O2() {
    return c.jsxs("div", {
        children: [c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx("h1", {
                        className: "text-5xl md:text-6xl font-bold mb-6",
                        children: "Join Our Team"
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-gray-800 leading-relaxed",
                        children: "Help us build innovative software solutions while growing your career in a supportive, collaborative environment. Work on exciting projects that make a real impact."
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Why Floxen?"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "More than just a job — it's a place to thrive"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: T2.map((r, n) => c.jsxs("div", {
                        className: "bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all",
                        children: [c.jsx("div", {
                            className: "w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4",
                            children: c.jsx(r.icon, {
                                className: "w-7 h-7 text-gray-900"
                            })
                        }), c.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-2",
                            children: r.title
                        }), c.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: r.description
                        })]
                    }, n))
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-50 to-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [c.jsxs("div", {
                        className: "text-center mb-16",
                        children: [c.jsx("h2", {
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: "Our Values"
                        }), c.jsx("p", {
                            className: "text-xl text-gray-600",
                            children: "What drives us every day"
                        })]
                    }), c.jsx("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: P2.map((r, n) => c.jsxs("div", {
                            className: "bg-white rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg",
                            children: [c.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: r.title
                            }), c.jsx("p", {
                                className: "text-gray-600 leading-relaxed",
                                children: r.description
                            })]
                        }, n))
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsxs("div", {
                className: "container mx-auto px-6",
                children: [c.jsxs("div", {
                    className: "text-center mb-16",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                        children: "Open Position"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Join our team and make an impact"
                    })]
                }), c.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: c.jsxs("div", {
                        className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100",
                        children: [c.jsxs("div", {
                            className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6",
                            children: [c.jsxs("div", {
                                children: [c.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [c.jsx("h3", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: "Web Developer"
                                    }), c.jsx("span", {
                                        className: "bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium",
                                        children: "Open Now"
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex flex-wrap gap-4 text-sm text-gray-600 mb-4",
                                    children: [c.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [c.jsx(Rl, {
                                            className: "w-4 h-4"
                                        }), "Contract-Based"]
                                    }), c.jsxs("span", {
                                        className: "flex items-center gap-1",
                                        children: [c.jsx(Mc, {
                                            className: "w-4 h-4"
                                        }), "Remote (Work from Anywhere)"]
                                    })]
                                })]
                            }), c.jsx(et, {
                                to: Ge("Contact"),
                                children: c.jsxs(mt, {
                                    className: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold whitespace-nowrap",
                                    children: ["Apply Now", c.jsx(fr, {
                                        className: "w-4 h-4 ml-2"
                                    })]
                                })
                            })]
                        }), c.jsxs("div", {
                            className: "space-y-6",
                            children: [c.jsxs("div", {
                                children: [c.jsx("h4", {
                                    className: "text-xl font-semibold text-gray-900 mb-3",
                                    children: "About the Role"
                                }), c.jsx("p", {
                                    className: "text-gray-600 leading-relaxed",
                                    children: "We're looking for a talented Web Developer to join our team on a contract basis. You'll work on exciting client projects, building modern web applications using cutting-edge technologies. This is a fully remote position with flexible hours."
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx("h4", {
                                    className: "text-xl font-semibold text-gray-900 mb-3",
                                    children: "Requirements"
                                }), c.jsxs("ul", {
                                    className: "space-y-2",
                                    children: [c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "3+ years of experience in web development"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "Strong proficiency in React, JavaScript/TypeScript, and modern web technologies"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "Experience with responsive design and mobile-first development"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "Knowledge of backend technologies (Node.js, databases) is a plus"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "Excellent problem-solving and communication skills"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                                        }), c.jsx("span", {
                                            children: "Self-motivated and able to work independently in a remote environment"
                                        })]
                                    })]
                                })]
                            }), c.jsxs("div", {
                                children: [c.jsx("h4", {
                                    className: "text-xl font-semibold text-gray-900 mb-3",
                                    children: "What You'll Do"
                                }), c.jsxs("ul", {
                                    className: "space-y-2",
                                    children: [c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"
                                        }), c.jsx("span", {
                                            children: "Build responsive, user-friendly web applications"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"
                                        }), c.jsx("span", {
                                            children: "Collaborate with designers and project managers"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"
                                        }), c.jsx("span", {
                                            children: "Write clean, maintainable, and well-documented code"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"
                                        }), c.jsx("span", {
                                            children: "Participate in code reviews and contribute to team knowledge"
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-start gap-2 text-gray-600",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"
                                        }), c.jsx("span", {
                                            children: "Stay up-to-date with the latest web development trends"
                                        })]
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500",
                                children: [c.jsx("h4", {
                                    className: "text-xl font-semibold text-gray-900 mb-3",
                                    children: "Contract Details"
                                }), c.jsxs("ul", {
                                    className: "space-y-2 text-gray-700",
                                    children: [c.jsxs("li", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-600"
                                        }), c.jsxs("span", {
                                            children: [c.jsx("strong", {
                                                children: "Type:"
                                            }), " Contract-based (project-by-project)"]
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-600"
                                        }), c.jsxs("span", {
                                            children: [c.jsx("strong", {
                                                children: "Location:"
                                            }), " Fully remote"]
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-600"
                                        }), c.jsxs("span", {
                                            children: [c.jsx("strong", {
                                                children: "Hours:"
                                            }), " Flexible schedule"]
                                        })]
                                    }), c.jsxs("li", {
                                        className: "flex items-center gap-2",
                                        children: [c.jsx(Ct, {
                                            className: "w-5 h-5 text-yellow-600"
                                        }), c.jsxs("span", {
                                            children: [c.jsx("strong", {
                                                children: "Compensation:"
                                            }), " Competitive rates based on experience"]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        }), c.jsx("section", {
            className: "py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: [c.jsx(Ic, {
                        className: "w-16 h-16 mx-auto mb-6 text-yellow-400"
                    }), c.jsx("h2", {
                        className: "text-4xl font-bold mb-6",
                        children: "Our Team Culture"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-300 mb-8 leading-relaxed",
                        children: "We're a small, tight-knit team that values collaboration, creativity, and continuous learning. Every team member has a voice, and we celebrate both individual and collective wins."
                    }), c.jsx("blockquote", {
                        className: "text-2xl italic text-yellow-200 border-l-4 border-yellow-500 pl-6 my-12",
                        children: '"The best part about working at Floxen is the autonomy to solve problems creatively while knowing you have a supportive team behind you."'
                    }), c.jsx("p", {
                        className: "text-gray-400",
                        children: "— Team Member, Floxen"
                    })]
                })
            })
        }), c.jsx("section", {
            className: "py-20 bg-white",
            children: c.jsx("div", {
                className: "container mx-auto px-6",
                children: c.jsxs("div", {
                    className: "bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-12 text-center text-gray-900",
                    children: [c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-bold mb-6",
                        children: "Ready to Join Us?"
                    }), c.jsx("p", {
                        className: "text-xl text-gray-800 mb-8 max-w-2xl mx-auto",
                        children: "Send us your resume and portfolio. We'd love to hear from you and learn more about how you can contribute to Floxen."
                    }), c.jsx(et, {
                        to: Ge("Contact"),
                        children: c.jsxs(mt, {
                            size: "lg",
                            className: "bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 group",
                            children: ["Apply Now", c.jsx(fr, {
                                className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
const Zu = [{
    title: "Home",
    url: Ge("Home")
}, {
    title: "About",
    url: Ge("About")
}, {
    title: "Services",
    url: Ge("Services")
}, {
    title: "Process",
    url: Ge("Process")
}, {
    title: "Careers",
    url: Ge("Careers")
}, {
    title: "Contact",
    url: Ge("Contact")
}];

function A2({
    children: r
}) {
    const n = mn(),
        [s, i] = C.useState(!1),
        [a, d] = C.useState(!1),
        [h, p] = C.useState(0),
        [g, y] = C.useState(!0);
    return C.useEffect(() => {
        const v = () => {
            const w = window.scrollY;
            d(w > 20), y(h > w || w < 10), p(w)
        };
        return window.addEventListener("scroll", v), () => window.removeEventListener("scroll", v)
    }, [h]), c.jsxs("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        children: [c.jsx("style", {
            children: `
        :root {
          --primary-yellow: #FDB913;
          --primary-yellow-dark: #E5A50B;
          --charcoal: #1A1A1A;
          --warm-white: #FAFAF9;
        }
      `
        }), c.jsx("header", {
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${a?"bg-white/95 backdrop-blur-lg shadow-lg":"bg-transparent"} ${g?"translate-y-0":"-translate-y-full"}`,
            children: c.jsxs("nav", {
                className: "container mx-auto px-6 py-4",
                children: [c.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [c.jsxs(et, {
                        to: Ge("Home"),
                        className: "flex items-center gap-2 group",
                        children: [c.jsxs("div", {
                            className: "relative",
                            children: [c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"
                            }), c.jsx("div", {
                                className: "relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-2 rounded-lg",
                                children: c.jsx(Ao, {
                                    className: "w-6 h-6 text-gray-900"
                                })
                            })]
                        }), c.jsx("span", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Floxen"
                        })]
                    }), c.jsxs("div", {
                        className: "hidden lg:flex items-center gap-8",
                        children: [Zu.map(v => c.jsx(et, {
                            to: v.url,
                            className: `text-sm font-medium transition-colors hover:text-yellow-500 ${n.pathname===v.url?"text-yellow-600":a?"text-gray-700":"text-gray-600"}`,
                            children: v.title
                        }, v.title)), c.jsx(et, {
                            to: Ge("Contact"),
                            children: c.jsx(mt, {
                                className: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 shadow-lg shadow-yellow-500/30 font-semibold",
                                children: "Get a Free Quote"
                            })
                        })]
                    }), c.jsx("button", {
                        className: "lg:hidden p-2 text-gray-700",
                        onClick: () => i(!s),
                        children: s ? c.jsx(Rm, {
                            className: "w-6 h-6"
                        }) : c.jsx(Yv, {
                            className: "w-6 h-6"
                        })
                    })]
                }), s && c.jsx("div", {
                    className: "lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t",
                    children: c.jsxs("div", {
                        className: "flex flex-col p-6 gap-4",
                        children: [Zu.map(v => c.jsx(et, {
                            to: v.url,
                            onClick: () => i(!1),
                            className: `text-base font-medium py-2 transition-colors ${n.pathname===v.url?"text-yellow-600":"text-gray-700 hover:text-yellow-500"}`,
                            children: v.title
                        }, v.title)), c.jsx(et, {
                            to: Ge("Contact"),
                            onClick: () => i(!1),
                            children: c.jsx(mt, {
                                className: "w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-semibold",
                                children: "Get a Free Quote"
                            })
                        })]
                    })
                })]
            })
        }), c.jsx("main", {
            className: "pt-20",
            children: r
        }), c.jsx("footer", {
            className: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20",
            children: c.jsxs("div", {
                className: "container mx-auto px-6 py-16",
                children: [c.jsxs("div", {
                    className: "grid md:grid-cols-4 gap-12",
                    children: [c.jsxs("div", {
                        className: "space-y-4",
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [c.jsx("div", {
                                className: "bg-gradient-to-br from-yellow-400 to-yellow-500 p-2 rounded-lg",
                                children: c.jsx(Ao, {
                                    className: "w-5 h-5 text-gray-900"
                                })
                            }), c.jsx("span", {
                                className: "text-xl font-bold",
                                children: "Floxen"
                            })]
                        }), c.jsx("p", {
                            className: "text-gray-400 text-sm leading-relaxed",
                            children: "Building digital solutions that drive real results. From idea to launch — we code your vision."
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx("h3", {
                            className: "font-semibold mb-4 text-yellow-400",
                            children: "Quick Links"
                        }), c.jsx("ul", {
                            className: "space-y-2",
                            children: Zu.slice(0, 4).map(v => c.jsx("li", {
                                children: c.jsx(et, {
                                    to: v.url,
                                    className: "text-gray-400 hover:text-yellow-400 transition-colors text-sm",
                                    children: v.title
                                })
                            }, v.title))
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx("h3", {
                            className: "font-semibold mb-4 text-yellow-400",
                            children: "Services"
                        }), c.jsxs("ul", {
                            className: "space-y-2 text-sm text-gray-400",
                            children: [c.jsx("li", {
                                children: "Custom Software Development"
                            }), c.jsx("li", {
                                children: "Web Design & Development"
                            }), c.jsx("li", {
                                children: "E-commerce Solutions"
                            }), c.jsx("li", {
                                children: "Mobile App Development"
                            })]
                        })]
                    }), c.jsxs("div", {
                        children: [c.jsx("h3", {
                            className: "font-semibold mb-4 text-yellow-400",
                            children: "Contact Us"
                        }), c.jsxs("ul", {
                            className: "space-y-3 text-sm",
                            children: [c.jsxs("li", {
                                className: "flex items-start gap-2 text-gray-400",
                                children: [c.jsx(Mc, {
                                    className: "w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0"
                                }), c.jsx("span", {
                                    children: "Sudbury, Ontario, Canada"
                                })]
                            }), c.jsxs("li", {
                                className: "flex items-center gap-2 text-gray-400",
                                children: [c.jsx(Lc, {
                                    className: "w-4 h-4 text-yellow-500 flex-shrink-0"
                                }), c.jsx("a", {
                                    href: "mailto:floxeninc@gmail.com",
                                    className: "hover:text-yellow-400 transition-colors",
                                    children: "floxeninc@gmail.com"
                                })]
                            }), c.jsxs("li", {
                                className: "flex items-center gap-2 text-gray-400",
                                children: [c.jsx(jm, {
                                    className: "w-4 h-4 text-yellow-500 flex-shrink-0"
                                }), c.jsx("a", {
                                    href: "tel:+16475359928",
                                    className: "hover:text-yellow-400 transition-colors",
                                    children: "647-535-9928"
                                })]
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",
                    children: [c.jsx("p", {
                        className: "text-gray-400 text-sm",
                        children: "© 2025 Floxen. All rights reserved."
                    }), c.jsxs("div", {
                        className: "flex gap-6 text-sm text-gray-400",
                        children: [c.jsx("a", {
                            href: "#",
                            className: "hover:text-yellow-400 transition-colors",
                            children: "Privacy Policy"
                        }), c.jsx("a", {
                            href: "#",
                            className: "hover:text-yellow-400 transition-colors",
                            children: "Terms of Service"
                        })]
                    })]
                })]
            })
        })]
    })
}
const L2 = {
        Home: m2,
        About: x2,
        Services: b2,
        Process: S2,
        Contact: R2,
        Careers: O2
    },
    cy = {
        mainPage: "Home",
        Pages: L2,
        Layout: A2
    };

function M2() {
    const r = mn(),
        {
            isAuthenticated: n
        } = oy(),
        {
            Pages: s,
            mainPage: i
        } = cy,
        a = i;
    return C.useEffect(() => {
        var d;
        (d = window.parent) == null || d.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, "*")
    }, [r]), C.useEffect(() => {
        const d = r.pathname;
        let h;
        if (d === "/" || d === "") h = a;
        else {
            const p = d.replace(/^\//, "").split("/")[0];
            h = Object.keys(s).find(v => v.toLowerCase() === p.toLowerCase()) || null
        }
        n && h && ms.appLogs.logUserInApp(h).catch(() => {})
    }, [r, n, s, a]), null
}

function F2() {
    Xx && (window.removeEventListener("unhandledrejection", am), window.removeEventListener("error", um), window.addEventListener("unhandledrejection", am), window.addEventListener("error", um))
}

function dy({
    title: r,
    details: n,
    componentName: s,
    originalError: i
}) {
    var a, d;
    ((a = i == null ? void 0 : i.response) == null ? void 0 : a.status) !== 402 && ((d = window.parent) == null || d.postMessage({
        type: "app_error",
        error: {
            title: r.toString(),
            details: n == null ? void 0 : n.toString(),
            componentName: s == null ? void 0 : s.toString()
        }
    }, "*"))
}

function am(r) {
    var a;
    const s = (a = r.reason.stack.match(/at\s+(\w+)\s+\(eval/)) == null ? void 0 : a[1],
        i = s ? `Error in ${s}: ${r.reason.toString()}` : r.reason.toString();
    dy({
        title: i,
        details: r.reason.toString(),
        componentName: s,
        originalError: r.reason
    })
}

function um(r) {
    var a, d;
    let s = (d = ((a = r.error) == null ? void 0 : a.stack).match(/at\s+(\w+)\s+\(eval/)) == null ? void 0 : d[1];
    s === "eval" && (s = null);
    const i = s ? `in ${s}: ${r.error.toString()}` : r.error.toString();
    dy({
        title: i,
        details: r.error.toString(),
        componentName: s,
        originalError: r.error
    })
}

function D2({}) {
    var a;
    const n = mn().pathname.substring(1),
        {
            data: s,
            isFetched: i
        } = zw({
            queryKey: ["user"],
            queryFn: async () => {
                try {
                    return {
                        user: await ms.auth.me(),
                        isAuthenticated: !0
                    }
                } catch {
                    return {
                        user: null,
                        isAuthenticated: !1
                    }
                }
            }
        });
    return c.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: c.jsx("div", {
            className: "max-w-md w-full",
            children: c.jsxs("div", {
                className: "text-center space-y-6",
                children: [c.jsxs("div", {
                    className: "space-y-2",
                    children: [c.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), c.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), c.jsxs("div", {
                    className: "space-y-3",
                    children: [c.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), c.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", c.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', n, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && s.isAuthenticated && ((a = s.user) == null ? void 0 : a.role) === "admin" && c.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: c.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [c.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: c.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), c.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [c.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), c.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), c.jsx("div", {
                    className: "pt-6",
                    children: c.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [c.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: c.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const I2 = () => c.jsx("div", {
        className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
        children: c.jsx("div", {
            className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
            children: c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("div", {
                    className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                    children: c.jsx("svg", {
                        className: "w-8 h-8 text-orange-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: c.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), c.jsx("h1", {
                    className: "text-3xl font-bold text-slate-900 mb-4",
                    children: "Access Restricted"
                }), c.jsx("p", {
                    className: "text-slate-600 mb-8",
                    children: "You are not registered to use this application. Please contact the app administrator to request access."
                }), c.jsxs("div", {
                    className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                    children: [c.jsx("p", {
                        children: "If you believe this is an error, you can:"
                    }), c.jsxs("ul", {
                        className: "list-disc list-inside mt-2 space-y-1",
                        children: [c.jsx("li", {
                            children: "Verify you are logged in with the correct account"
                        }), c.jsx("li", {
                            children: "Contact the app administrator for access"
                        }), c.jsx("li", {
                            children: "Try logging out and back in again"
                        })]
                    })]
                })]
            })
        })
    }),
    {
        Pages: fy,
        Layout: cm,
        mainPage: z2
    } = cy,
    hy = z2,
    U2 = fy[hy];
F2();
const B2 = ({
        children: r,
        currentPageName: n
    }) => cm ? c.jsx(cm, {
        currentPageName: n,
        children: r
    }) : c.jsx(c.Fragment, {
        children: r
    }),
    $2 = () => {
        const {
            isLoadingAuth: r,
            isLoadingPublicSettings: n,
            authError: s,
            isAuthenticated: i,
            navigateToLogin: a
        } = oy();
        if (n || r) return c.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: c.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
        if (s) {
            if (s.type === "user_not_registered") return c.jsx(I2, {});
            if (s.type === "auth_required") return a(), null
        }
        return c.jsx(B2, {
            currentPageName: hy,
            children: c.jsxs(O1, {
                children: [c.jsx(gl, {
                    path: "/",
                    element: c.jsx(U2, {})
                }), Object.entries(fy).map(([d, h]) => c.jsx(gl, {
                    path: `/${d}`,
                    element: c.jsx(h, {})
                }, d)), c.jsx(gl, {
                    path: "*",
                    element: c.jsx(D2, {})
                })]
            })
        })
    };

function W2() {
    return c.jsx(ZS, {
        children: c.jsxs(Cw, {
            client: Uw,
            children: [c.jsxs(tb, {
                children: [c.jsx(M2, {}), c.jsx($2, {})]
            }), c.jsx(tw, {}), c.jsx(Bw, {})]
        })
    })
}
xv.createRoot(document.getElementById("root")).render(c.jsx(W2, {}));