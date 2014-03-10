//
// ChemDoodle Web Components 6.0.0
//
// http://web.chemdoodle.com
//
// Copyright 2009-2013 iChemLabs, LLC.  All rights reserved.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// As a special exception to the GPL, any HTML file in a public website
// or any free web service which merely makes function calls to this
// code, and for that purpose includes it by reference, shall be deemed
// a separate work for copyright law purposes. If you modify this code,
// you may extend this exception to your version of the code, but you
// are not obligated to do so. If you do not wish to do so, delete this
// exception statement from your version.
//
// As an additional exception to the GPL, you may distribute this
// packed form of the code without the copy of the GPL license normally
// required, provided you include this license notice and a URL through
// which recipients can access the corresponding unpacked source code.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// Please contact iChemLabs <http://www.ichemlabs.com/contact-us> for
// alternate licensing options.
//
var ChemDoodle = function() {
    var b = {
        iChemLabs: {},
        informatics: {},
        io: {},
        lib: {},
        structures: {}
    };
    b.structures.d2 = {};
    b.structures.d3 = {};
    b.getVersion = function() {
        return "6.0.0"
    };
    return b
}();
(function(b, j, m) {
        function l(x) {
            var a = x.length,
                c = o.type(x);
            return o.isWindow(x) ? !1 : 1 === x.nodeType && a ? !0 : "array" === c || "function" !== c && (0 === a || "number" === typeof a && 0 < a && a - 1 in x)
        }

        function g(x, a, c, h) {
            if (o.acceptData(x)) {
                var e = o.expando,
                    f = x.nodeType,
                    d = f ? o.cache : x,
                    b = f ? x[e] : x[e] && e;
                if (b && d[b] && (h || d[b].data) || !(c === m && "string" === typeof a)) {
                    b || (b = f ? x[e] = ha.pop() || o.guid++ : e);
                    d[b] || (d[b] = f ? {} : {
                            toJSON: o.noop
                        });
                    if ("object" === typeof a || "function" === typeof a) h ? d[b] = o.extend(d[b], a) : d[b].data = o.extend(d[b].data,
                            a);
                    x = d[b];
                    h || (x.data || (x.data = {}), x = x.data);
                    c !== m && (x[o.camelCase(a)] = c);
                    "string" === typeof a ? (c = x[a], null == c && (c = x[o.camelCase(a)])) : c = x;
                    return c
                }
            }
        }

        function d(x, c, h) {
            if (o.acceptData(x)) {
                var e, d, f = x.nodeType,
                    b = f ? o.cache : x,
                    k = f ? x[o.expando] : o.expando;
                if (b[k]) {
                    if (c && (e = h ? b[k] : b[k].data)) {
                        o.isArray(c) ? c = c.concat(o.map(c, o.camelCase)) : c in e ? c = [c] : (c = o.camelCase(c), c = c in e ? [c] : c.split(" "));
                        for (d = c.length; d--;) delete e[c[d]];
                        if (h ? !a(e) : !o.isEmptyObject(e)) return
                    }
                    if (!h && (delete b[k].data, !a(b[k]))) return;
                    f ? o.cleanData([x], !0) : o.support.deleteExpando || b != b.window ? delete b[k] : b[k] = null
                }
            }
        }

        function f(x, a, c) {
            if (c === m && 1 === x.nodeType) if (c = "data-" + a.replace(zc, "-$1").toLowerCase(), c = x.getAttribute(c), "string" === typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ac.test(c) ? o.parseJSON(c) : c
                    } catch (h) {}
                    o.data(x, a, c)
                } else c = m;
            return c
        }

        function a(x) {
            for (var c in x) if (!("data" === c && o.isEmptyObject(x[c])) && "toJSON" !== c) return !1;
            return !0
        }

        function e() {
            return !0
        }

        function t() {
            return !1
        }

        function k() {
            try {
                return J.activeElement
            } catch (x) {}
        }

        function q(x, c) {
            do x = x[c]; while (x && 1 !== x.nodeType);
            return x
        }

        function n(x, c, a) {
            if (o.isFunction(c)) return o.grep(x, function(x, h) {
                        return !!c.call(x, h, x) !== a
                    });
            if (c.nodeType) return o.grep(x, function(x) {
                        return x === c !== a
                    });
            if ("string" === typeof c) {
                if (Bc.test(c)) return o.filter(c, x, a);
                c = o.filter(c, x)
            }
            return o.grep(x, function(x) {
                    return 0 <= o.inArray(x, c) !== a
                })
        }

        function y(x) {
            var c = Ob.split("|");
            x = x.createDocumentFragment();
            if (x.createElement) for (; c.length;) x.createElement(c.pop());
            return x
        }

        function z(x, c) {
            return o.nodeName(x,
                "table") && o.nodeName(1 === c.nodeType ? c : c.firstChild, "tr") ? x.getElementsByTagName("tbody")[0] || x.appendChild(x.ownerDocument.createElement("tbody")) : x
        }

        function p(x) {
            x.type = (null !== o.find.attr(x, "type")) + "/" + x.type;
            return x
        }

        function u(x) {
            var c = Cc.exec(x.type);
            c ? x.type = c[1] : x.removeAttribute("type");
            return x
        }

        function r(x, c) {
            for (var a, h = 0; null != (a = x[h]); h++) o._data(a, "globalEval", !c || o._data(c[h], "globalEval"))
        }

        function v(x, c) {
            if (1 === c.nodeType && o.hasData(x)) {
                var a, h, e;
                h = o._data(x);
                var d = o._data(c, h),
                    f = h.events;
                if (f) for (a in delete d.handle, d.events = {}, f) {
                        h = 0;
                        for (e = f[a].length; h < e; h++) o.event.add(c, a, f[a][h])
                }
                d.data && (d.data = o.extend({}, d.data))
            }
        }

        function w(x, c) {
            var a, h, e = 0,
                d = typeof x.getElementsByTagName !== $ ? x.getElementsByTagName(c || "*") : typeof x.querySelectorAll !== $ ? x.querySelectorAll(c || "*") : m;
            if (!d) {
                d = [];
                for (a = x.childNodes || x; null != (h = a[e]); e++)!c || o.nodeName(h, c) ? d.push(h) : o.merge(d, w(h, c))
            }
            return c === m || c && o.nodeName(x, c) ? o.merge([x], d) : d
        }

        function A(x) {
            nb.test(x.type) && (x.defaultChecked =
                x.checked)
        }

        function B(x, c) {
            if (c in x) return c;
            for (var a = c.charAt(0).toUpperCase() + c.slice(1), h = c, e = Pb.length; e--;) if (c = Pb[e] + a, c in x) return c;
            return h
        }

        function c(x, c) {
            x = c || x;
            return "none" === o.css(x, "display") || !o.contains(x.ownerDocument, x)
        }

        function h(x, a) {
            for (var h, e, d, f = [], b = 0, k = x.length; b < k; b++) if (e = x[b], e.style) if (f[b] = o._data(e, "olddisplay"), h = e.style.display, a)!f[b] && "none" === h && (e.style.display = ""), "" === e.style.display && c(e) && (f[b] = o._data(e, "olddisplay", F(e.nodeName)));
            else if (!f[b] && (d = c(e),
                    h && "none" !== h || !d)) o._data(e, "olddisplay", d ? h : o.css(e, "display"));
            for (b = 0; b < k; b++) if (e = x[b], e.style && (!a || "none" === e.style.display || "" === e.style.display)) e.style.display = a ? f[b] || "" : "none";
            return x
        }

        function D(x, c, a) {
            return (x = Dc.exec(c)) ? Math.max(0, x[1] - (a || 0)) + (x[2] || "px") : c
        }

        function C(x, c, a, h, e) {
            c = a === (h ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
            for (var d = 0; 4 > c; c += 2) "margin" === a && (d += o.css(x, a + Aa[c], !0, e)), h ? ("content" === a && (d -= o.css(x, "padding" + Aa[c], !0, e)), "margin" !== a && (d -= o.css(x, "border" + Aa[c] + "Width", !0, e))) : (d += o.css(x, "padding" + Aa[c], !0, e), "padding" !== a && (d += o.css(x, "border" + Aa[c] + "Width", !0, e)));
            return d
        }

        function H(x, c, a) {
            var h = !0,
                e = "width" === c ? x.offsetWidth : x.offsetHeight,
                d = Ba(x),
                f = o.support.boxSizing && "border-box" === o.css(x, "boxSizing", !1, d);
            if (0 >= e || null == e) {
                e = Ca(x, c, d);
                if (0 > e || null == e) e = x.style[c];
                if (Wa.test(e)) return e;
                h = f && (o.support.boxSizingReliable || e === x.style[c]);
                e = parseFloat(e) || 0
            }
            return e + C(x, c, a || (f ? "border" : "content"), h, d) + "px"
        }

        function F(x) {
            var c = J,
                a = Qb[x];
            if (!a) {
                a = G(x, c);
                if ("none" ===
                    a || !a) Qa = (Qa || o("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e").css("cssText", "display:block !important")).appendTo(c.documentElement), c = (Qa[0].contentWindow || Qa[0].contentDocument).document, c.write("\x3c!doctype html\x3e\x3chtml\x3e\x3cbody\x3e"), c.close(), a = G(x, c), Qa.detach();
                Qb[x] = a
            }
            return a
        }

        function G(x, c) {
            var a = o(c.createElement(x)).appendTo(c.body),
                h = o.css(a[0], "display");
            a.remove();
            return h
        }

        function K(x, c, a, h) {
            var e;
            if (o.isArray(c)) o.each(c, function(c, e) {
                        a || Ec.test(x) ? h(x,
                            e) : K(x + "[" + ("object" === typeof e ? c : "") + "]", e, a, h)
                    });
            else if (!a && "object" === o.type(c)) for (e in c) K(x + "[" + e + "]", c[e], a, h);
            else h(x, c)
        }

        function I(x) {
            return function(c, a) {
                "string" !== typeof c && (a = c, c = "*");
                var h, e = 0,
                    d = c.toLowerCase().match(pa) || [];
                if (o.isFunction(a)) for (; h = d[e++];) "+" === h[0] ? (h = h.slice(1) || "*", (x[h] = x[h] || []).unshift(a)) : (x[h] = x[h] || []).push(a)
            }
        }

        function W(x, c, a, h) {
            function e(b) {
                var k;
                d[b] = !0;
                o.each(x[b] || [], function(x, b) {
                        var n = b(c, a, h);
                        if ("string" === typeof n && !f && !d[n]) return c.dataTypes.unshift(n),
                        e(n), !1;
                        if (f) return !(k = n)
                    });
                return k
            }
            var d = {}, f = x === ob;
            return e(c.dataTypes[0]) || !d["*"] && e("*")
        }

        function E(x, c) {
            var a, h, e = o.ajaxSettings.flatOptions || {};
            for (h in c) c[h] !== m && ((e[h] ? x : a || (a = {}))[h] = c[h]);
            a && o.extend(!0, x, a);
            return x
        }

        function N() {
            try {
                return new b.XMLHttpRequest
            } catch (x) {}
        }

        function P() {
            setTimeout(function() {
                    Ka = m
                });
            return Ka = o.now()
        }

        function ca(x, c, a) {
            for (var h, e = (Ra[c] || []).concat(Ra["*"]), d = 0, f = e.length; d < f; d++) if (h = e[d].call(a, c, x)) return h
        }

        function da(x, c, a) {
            var h, e, d = 0,
                f = Xa.length,
                b = o.Deferred().always(function() {
                        delete k.elem
                    }),
                k = function() {
                    if (e) return !1;
                    for (var c = Ka || P(), c = Math.max(0, n.startTime + n.duration - c), a = 1 - (c / n.duration || 0), h = 0, d = n.tweens.length; h < d; h++) n.tweens[h].run(a);
                    b.notifyWith(x, [n, a, c]);
                    if (1 > a && d) return c;
                    b.resolveWith(x, [n]);
                    return !1
                }, n = b.promise({
                        elem: x,
                        props: o.extend({}, c),
                        opts: o.extend(!0, {
                                specialEasing: {}
                            }, a),
                        originalProperties: c,
                        originalOptions: a,
                        startTime: Ka || P(),
                        duration: a.duration,
                        tweens: [],
                        createTween: function(c, a) {
                            var h = o.Tween(x, n.opts, c, a, n.opts.specialEasing[c] ||
                                n.opts.easing);
                            n.tweens.push(h);
                            return h
                        },
                        stop: function(c) {
                            var a = 0,
                                h = c ? n.tweens.length : 0;
                            if (e) return this;
                            for (e = !0; a < h; a++) n.tweens[a].run(1);
                            c ? b.resolveWith(x, [n, c]) : b.rejectWith(x, [n, c]);
                            return this
                        }
                    });
            c = n.props;
            a = n.opts.specialEasing;
            var g, q, t, j;
            for (h in c) if (g = o.camelCase(h), q = a[g], t = c[h], o.isArray(t) && (q = t[1], t = c[h] = t[0]), h !== g && (c[g] = t, delete c[h]), (j = o.cssHooks[g]) && "expand" in j) for (h in t = j.expand(t), delete c[g], t) h in c || (c[h] = t[h], a[h] = q);
                else a[g] = q;
            for (; d < f; d++) if (h = Xa[d].call(n, x, c, n.opts)) return h;
            o.map(c, ca, n);
            o.isFunction(n.opts.start) && n.opts.start.call(x, n);
            o.fx.timer(o.extend(k, {
                        elem: x,
                        anim: n,
                        queue: n.opts.queue
                    }));
            return n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always)
        }

        function U(x, c, a, h, e) {
            return new U.prototype.init(x, c, a, h, e)
        }

        function S(x, c) {
            var a, h = {
                    height: x
                }, e = 0;
            for (c = c ? 1 : 0; 4 > e; e += 2 - c) a = Aa[e], h["margin" + a] = h["padding" + a] = x;
            c && (h.opacity = h.width = x);
            return h
        }

        function ja(x) {
            return o.isWindow(x) ? x : 9 === x.nodeType ? x.defaultView || x.parentWindow : !1
        }
        var aa, Sa, $ = typeof m,
            Gc = b.location,
            J = b.document,
            ba = J.documentElement,
            ea = b.jQuery,
            fa = b.$,
            X = {}, ha = [],
            sa = ha.concat,
            qa = ha.push,
            R = ha.slice,
            Rb = ha.indexOf,
            Hc = X.toString,
            La = X.hasOwnProperty,
            pb = "1.10.2".trim,
            o = function(x, c) {
                return new o.fn.init(x, c, Sa)
            }, Ya = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pa = /\S+/g,
            Ic = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            Jc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            Sb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Kc = /^[\],:{}\s]*$/,
            Lc = /(?:^|:|,)(?:\s*\[)+/g,
            Mc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            Nc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            Oc = /^-ms-/,
            Pc = /-([\da-z])/gi,
            Qc = function(x, c) {
                return c.toUpperCase()
            }, ta = function(x) {
                if (J.addEventListener || "load" === x.type || "complete" === J.readyState) Tb(), o.ready()
            }, Tb = function() {
                J.addEventListener ? (J.removeEventListener("DOMContentLoaded", ta, !1), b.removeEventListener("load", ta, !1)) : (J.detachEvent("onreadystatechange", ta), b.detachEvent("onload", ta))
            };
        o.fn = o.prototype = {
            jquery: "1.10.2",
            constructor: o,
            init: function(x, c, a) {
                var h;
                if (!x) return this;
                if ("string" === typeof x) {
                    if ((h = "\x3c" === x.charAt(0) && "\x3e" === x.charAt(x.length - 1) && 3 <= x.length ? [null, x, null] : Jc.exec(x)) && (h[1] || !c)) {
                        if (h[1]) {
                            if (c = c instanceof o ? c[0] : c, o.merge(this, o.parseHTML(h[1], c && c.nodeType ? c.ownerDocument || c : J, !0)), Sb.test(h[1]) && o.isPlainObject(c)) for (h in c) if (o.isFunction(this[h])) this[h](c[h]);
                                    else this.attr(h, c[h])
                        } else {
                            if ((c = J.getElementById(h[2])) && c.parentNode) {
                                if (c.id !== h[2]) return a.find(x);
                                this.length = 1;
                                this[0] = c
                            }
                            this.context = J;
                            this.selector = x
                        }
                        return this
                    }
                    return !c ||
                        c.jquery ? (c || a).find(x) : this.constructor(c).find(x)
                }
                if (x.nodeType) return this.context = this[0] = x, this.length = 1, this;
                if (o.isFunction(x)) return a.ready(x);
                x.selector !== m && (this.selector = x.selector, this.context = x.context);
                return o.makeArray(x, this)
            },
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(x) {
                return null == x ? this.toArray() : 0 > x ? this[this.length + x] : this[x]
            },
            pushStack: function(x) {
                x = o.merge(this.constructor(), x);
                x.prevObject = this;
                x.context = this.context;
                return x
            },
            each: function(x,
                c) {
                return o.each(this, x, c)
            },
            ready: function(x) {
                o.ready.promise().done(x);
                return this
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(x) {
                var c = this.length;
                x = +x + (0 > x ? c : 0);
                return this.pushStack(0 <= x && x < c ? [this[x]] : [])
            },
            map: function(x) {
                return this.pushStack(o.map(this, function(c, a) {
                            return x.call(c, a, c)
                        }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: qa,
            sort: [].sort,
            splice: [].splice
        };
        o.fn.init.prototype = o.fn;
        o.extend = o.fn.extend = function() {
            var x, c, a, h, e, d = arguments[0] || {}, f = 1,
                b = arguments.length,
                k = !1;
            "boolean" === typeof d && (k = d, d = arguments[1] || {}, f = 2);
            "object" !== typeof d && !o.isFunction(d) && (d = {});
            b === f && (d = this, --f);
            for (; f < b; f++) if (null != (e = arguments[f])) for (h in e) x = d[h], a = e[h], d !== a && (k && a && (o.isPlainObject(a) || (c = o.isArray(a))) ? (c ? (c = !1, x = x && o.isArray(x) ? x : []) : x = x && o.isPlainObject(x) ? x : {}, d[h] = o.extend(k, x, a)) : a !== m && (d[h] = a));
            return d
        };
        o.extend({
                expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g,
                    ""),
                noConflict: function(x) {
                    b.$ === o && (b.$ = fa);
                    x && b.jQuery === o && (b.jQuery = ea);
                    return o
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(x) {
                    x ? o.readyWait++ : o.ready(!0)
                },
                ready: function(x) {
                    if (!(!0 === x ? --o.readyWait : o.isReady)) {
                        if (!J.body) return setTimeout(o.ready);
                        o.isReady = !0;
                        !0 !== x && 0 < --o.readyWait || (aa.resolveWith(J, [o]), o.fn.trigger && o(J).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(x) {
                    return "function" === o.type(x)
                },
                isArray: Array.isArray || function(x) {
                    return "array" === o.type(x)
                },
                isWindow: function(x) {
                    return null !=
                        x && x == x.window
                },
                isNumeric: function(x) {
                    return !isNaN(parseFloat(x)) && isFinite(x)
                },
                type: function(x) {
                    return null == x ? String(x) : "object" === typeof x || "function" === typeof x ? X[Hc.call(x)] || "object" : typeof x
                },
                isPlainObject: function(x) {
                    var c;
                    if (!x || "object" !== o.type(x) || x.nodeType || o.isWindow(x)) return !1;
                    try {
                        if (x.constructor && !La.call(x, "constructor") && !La.call(x.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (a) {
                        return !1
                    }
                    if (o.support.ownLast) for (c in x) return La.call(x, c);
                    for (c in x);
                    return c === m || La.call(x,
                        c)
                },
                isEmptyObject: function(x) {
                    for (var c in x) return !1;
                    return !0
                },
                error: function(x) {
                    throw Error(x);
                },
                parseHTML: function(x, c, a) {
                    if (!x || "string" !== typeof x) return null;
                    "boolean" === typeof c && (a = c, c = !1);
                    c = c || J;
                    var h = Sb.exec(x);
                    a = !a && [];
                    if (h) return [c.createElement(h[1])];
                    h = o.buildFragment([x], c, a);
                    a && o(a).remove();
                    return o.merge([], h.childNodes)
                },
                parseJSON: function(x) {
                    if (b.JSON && b.JSON.parse) return b.JSON.parse(x);
                    if (null === x) return x;
                    if ("string" === typeof x && (x = o.trim(x)) && Kc.test(x.replace(Mc, "@").replace(Nc,
                                "]").replace(Lc, ""))) return (new Function("return " + x))();
                    o.error("Invalid JSON: " + x)
                },
                parseXML: function(x) {
                    var c, a;
                    if (!x || "string" !== typeof x) return null;
                    try {
                        b.DOMParser ? (a = new DOMParser, c = a.parseFromString(x, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(x))
                    } catch (h) {
                        c = m
                    }(!c || !c.documentElement || c.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + x);
                    return c
                },
                noop: function() {},
                globalEval: function(c) {
                    c && o.trim(c) && (b.execScript || function(c) {
                            b.eval.call(b,
                                c)
                        })(c)
                },
                camelCase: function(c) {
                    return c.replace(Oc, "ms-").replace(Pc, Qc)
                },
                nodeName: function(c, a) {
                    return c.nodeName && c.nodeName.toLowerCase() === a.toLowerCase()
                },
                each: function(c, a, h) {
                    var e, d = 0,
                        f = c.length;
                    e = l(c);
                    if (h) if (e) for (; d < f && !(e = a.apply(c[d], h), !1 === e); d++);
                        else for (d in c) {
                                if (e = a.apply(c[d], h), !1 === e) break
                        } else if (e) for (; d < f && !(e = a.call(c[d], d, c[d]), !1 === e); d++);
                    else for (d in c) if (e = a.call(c[d], d, c[d]), !1 === e) break; return c
                },
                trim: pb && !pb.call("\ufeff\u00a0") ? function(c) {
                    return null == c ? "" : pb.call(c)
                } : function(c) {
                    return null == c ? "" : (c + "").replace(Ic, "")
                },
                makeArray: function(c, a) {
                    var h = a || [];
                    null != c && (l(Object(c)) ? o.merge(h, "string" === typeof c ? [c] : c) : qa.call(h, c));
                    return h
                },
                inArray: function(c, a, h) {
                    var e;
                    if (a) {
                        if (Rb) return Rb.call(a, c, h);
                        e = a.length;
                        for (h = h ? 0 > h ? Math.max(0, e + h) : h : 0; h < e; h++) if (h in a && a[h] === c) return h
                    }
                    return -1
                },
                merge: function(c, a) {
                    var h = a.length,
                        e = c.length,
                        d = 0;
                    if ("number" === typeof h) for (; d < h; d++) c[e++] = a[d];
                    else for (; a[d] !== m;) c[e++] = a[d++];
                    c.length = e;
                    return c
                },
                grep: function(c, a, h) {
                    var e,
                        d = [],
                        f = 0,
                        b = c.length;
                    for (h = !! h; f < b; f++) e = !! a(c[f], f), h !== e && d.push(c[f]);
                    return d
                },
                map: function(c, a, h) {
                    var e, d = 0,
                        f = c.length,
                        b = [];
                    if (l(c)) for (; d < f; d++) e = a(c[d], d, h), null != e && (b[b.length] = e);
                    else for (d in c) e = a(c[d], d, h), null != e && (b[b.length] = e);
                    return sa.apply([], b)
                },
                guid: 1,
                proxy: function(c, a) {
                    var h, e;
                    "string" === typeof a && (e = c[a], a = c, c = e);
                    if (!o.isFunction(c)) return m;
                    h = R.call(arguments, 2);
                    e = function() {
                        return c.apply(a || this, h.concat(R.call(arguments)))
                    };
                    e.guid = c.guid = c.guid || o.guid++;
                    return e
                },
                access: function(c,
                    a, h, e, d, f, b) {
                    var k = 0,
                        n = c.length,
                        g = null == h;
                    if ("object" === o.type(h)) for (k in d = !0, h) o.access(c, a, k, h[k], !0, f, b);
                    else if (e !== m && (d = !0, o.isFunction(e) || (b = !0), g && (b ? (a.call(c, e), a = null) : (g = a, a = function(c, a, x) {
                                        return g.call(o(c), x)
                                    })), a)) for (; k < n; k++) a(c[k], h, b ? e : e.call(c[k], k, a(c[k], h)));
                    return d ? c : g ? a.call(c) : n ? a(c[0], h) : f
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(c, a, h, e) {
                    var d, f = {};
                    for (d in a) f[d] = c.style[d], c.style[d] = a[d];
                    h = h.apply(c, e || []);
                    for (d in a) c.style[d] = f[d];
                    return h
                }
            });
        o.ready.promise = function(c) {
            if (!aa) if (aa = o.Deferred(), "complete" === J.readyState) setTimeout(o.ready);
                else if (J.addEventListener) J.addEventListener("DOMContentLoaded", ta, !1), b.addEventListener("load", ta, !1);
            else {
                J.attachEvent("onreadystatechange", ta);
                b.attachEvent("onload", ta);
                var a = !1;
                try {
                    a = null == b.frameElement && J.documentElement
                } catch (h) {}
                a && a.doScroll && function yc() {
                    if (!o.isReady) {
                        try {
                            a.doScroll("left")
                        } catch (c) {
                            return setTimeout(yc, 50)
                        }
                        Tb();
                        o.ready()
                    }
                }()
            }
            return aa.promise(c)
        };
        o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(c, a) {
                X["[object " + a + "]"] = a.toLowerCase()
            });
        Sa = o(J);
        var qb = b,
            Q = function(c, a, h, e) {
                var d, f, b, k, n;
                (a ? a.ownerDocument || a : ra) !== Y && Da(a);
                a = a || Y;
                h = h || [];
                if (!c || "string" !== typeof c) return h;
                if (1 !== (k = a.nodeType) && 9 !== k) return [];
                if (ma && !e) {
                    if (d = Rc.exec(c)) if (b = d[1]) if (9 === k) if ((f = a.getElementById(b)) && f.parentNode) {
                                    if (f.id === b) return h.push(f), h
                                } else return h;
                                else {
                                    if (a.ownerDocument && (f = a.ownerDocument.getElementById(b)) && Ta(a, f) && f.id === b) return h.push(f), h
                                } else {
                                    if (d[2]) return ua.apply(h, a.getElementsByTagName(c)),
                                    h;
                                    if ((b = d[3]) && T.getElementsByClassName && a.getElementsByClassName) return ua.apply(h, a.getElementsByClassName(b)), h
                                }
                    if (T.qsa && (!ga || !ga.test(c))) {
                        f = d = V;
                        b = a;
                        n = 9 === k && c;
                        if (1 === k && "object" !== a.nodeName.toLowerCase()) {
                            k = Za(c);
                            (d = a.getAttribute("id")) ? f = d.replace(Sc, "\\$\x26") : a.setAttribute("id", f);
                            f = "[id\x3d'" + f + "'] ";
                            for (b = k.length; b--;) k[b] = f + $a(k[b]);
                            b = rb.test(c) && a.parentNode || a;
                            n = k.join(",")
                        }
                        if (n) try {
                                return ua.apply(h, b.querySelectorAll(n)), h
                        } catch (g) {} finally {
                            d || a.removeAttribute("id")
                        }
                    }
                }
                var q;
                a: {
                    c = c.replace(ab, "$1");
                    f = Za(c);
                    if (!e && 1 === f.length) {
                        d = f[0] = f[0].slice(0);
                        if (2 < d.length && "ID" === (q = d[0]).type && T.getById && 9 === a.nodeType && ma && O.relative[d[1].type]) {
                            a = (O.find.ID(q.matches[0].replace(va, wa), a) || [])[0];
                            if (!a) {
                                q = h;
                                break a
                            }
                            c = c.slice(d.shift().value.length)
                        }
                        for (k = bb.needsContext.test(c) ? 0 : d.length; k--;) {
                            q = d[k];
                            if (O.relative[b = q.type]) break;
                            if (b = O.find[b]) if (e = b(q.matches[0].replace(va, wa), rb.test(d[0].type) && a.parentNode || a)) {
                                    d.splice(k, 1);
                                    c = e.length && $a(d);
                                    if (!c) {
                                        ua.apply(h, e);
                                        q = h;
                                        break a
                                    }
                                    break
                                }
                        }
                    }
                    sb(c,
                        f)(e, a, !ma, h, rb.test(c));
                    q = h
                }
                return q
            }, tb = function() {
                function c(h, e) {
                    a.push(h += " ") > O.cacheLength && delete c[a.shift()];
                    return c[h] = e
                }
                var a = [];
                return c
            }, ka = function(c) {
                c[V] = !0;
                return c
            }, la = function(c) {
                var a = Y.createElement("div");
                try {
                    return !!c(a)
                } catch (h) {
                    return !1
                } finally {
                    a.parentNode && a.parentNode.removeChild(a)
                }
            }, ub = function(c, a) {
                for (var h = c.split("|"), e = c.length; e--;) O.attrHandle[h[e]] = a
            }, Vb = function(c, a) {
                var h = a && c,
                    e = h && 1 === c.nodeType && 1 === a.nodeType && (~a.sourceIndex || Ub) - (~c.sourceIndex || Ub);
                if (e) return e;
                if (h) for (; h = h.nextSibling;) if (h === a) return -1;
                return c ? 1 : -1
            }, Tc = function(c) {
                return function(a) {
                    return "input" === a.nodeName.toLowerCase() && a.type === c
                }
            }, Uc = function(c) {
                return function(a) {
                    var h = a.nodeName.toLowerCase();
                    return ("input" === h || "button" === h) && a.type === c
                }
            }, Ea = function(c) {
                return ka(function(a) {
                        a = +a;
                        return ka(function(h, e) {
                                for (var d, f = c([], h.length, a), b = f.length; b--;) if (h[d = f[b]]) h[d] = !(e[d] = h[d])
                            })
                    })
            }, Wb = function() {}, Za = function(c, a) {
                var h, e, d, f, b, k, n;
                if (b = Xb[c + " "]) return a ? 0 : b.slice(0);
                b = c;
                k = [];
                for (n = O.preFilter; b;) {
                    if (!h || (e = Vc.exec(b))) e && (b = b.slice(e[0].length) || b), k.push(d = []);
                    h = !1;
                    if (e = Wc.exec(b)) h = e.shift(), d.push({
                                value: h,
                                type: e[0].replace(ab, " ")
                            }), b = b.slice(h.length);
                    for (f in O.filter) if ((e = bb[f].exec(b)) && (!n[f] || (e = n[f](e)))) h = e.shift(), d.push({
                                    value: h,
                                    type: f,
                                    matches: e
                                }), b = b.slice(h.length);
                    if (!h) break
                }
                return a ? b.length : b ? Q.error(c) : Xb(c, k).slice(0)
            }, $a = function(c) {
                for (var a = 0, h = c.length, e = ""; a < h; a++) e += c[a].value;
                return e
            }, vb = function(c, a, h) {
                var e = a.dir,
                    d = h && "parentNode" ===
                        e,
                    f = Xc++;
                return a.first ? function(a, h, f) {
                    for (; a = a[e];) if (1 === a.nodeType || d) return c(a, h, f)
                } : function(a, h, b) {
                    var k, n, g, q = na + " " + f;
                    if (b) for (; a = a[e];) {
                            if ((1 === a.nodeType || d) && c(a, h, b)) return !0
                    } else for (; a = a[e];) if (1 === a.nodeType || d) if (g = a[V] || (a[V] = {}), (n = g[e]) && n[0] === q) {
                                    if (!0 === (k = n[1]) || k === cb) return !0 === k
                                } else if (n = g[e] = [q], n[1] = c(a, h, b) || cb, !0 === n[1]) return !0
                }
            }, wb = function(c) {
                return 1 < c.length ? function(a, h, e) {
                    for (var d = c.length; d--;) if (!c[d](a, h, e)) return !1;
                    return !0
                } : c[0]
            }, db = function(c, a, h, e, d) {
                for (var f,
                        b = [], k = 0, n = c.length, g = null != a; k < n; k++) if (f = c[k]) if (!h || h(f, e, d)) b.push(f), g && a.push(k);
                return b
            }, xb = function(c, a, h, e, d, f) {
                e && !e[V] && (e = xb(e));
                d && !d[V] && (d = xb(d, f));
                return ka(function(f, b, k, n) {
                        var g, q, t = [],
                            j = [],
                            l = b.length,
                            D;
                        if (!(D = f)) {
                            D = a || "*";
                            for (var o = k.nodeType ? [k] : k, y = [], m = 0, p = o.length; m < p; m++) Q(D, o[m], y);
                            D = y
                        }
                        D = c && (f || !a) ? db(D, t, c, k, n) : D;
                        o = h ? d || (f ? c : l || e) ? [] : b : D;
                        h && h(D, o, k, n);
                        if (e) {
                            g = db(o, j);
                            e(g, [], k, n);
                            for (k = g.length; k--;) if (q = g[k]) o[j[k]] = !(D[j[k]] = q)
                        }
                        if (f) {
                            if (d || c) {
                                if (d) {
                                    g = [];
                                    for (k = o.length; k--;) if (q =
                                            o[k]) g.push(D[k] = q);
                                    d(null, o = [], g, n)
                                }
                                for (k = o.length; k--;) if ((q = o[k]) && -1 < (g = d ? Fa.call(f, q) : t[k])) f[g] = !(b[g] = q)
                            }
                        } else o = db(o === b ? o.splice(l, o.length) : o), d ? d(null, b, o, n) : ua.apply(b, o)
                    })
            }, yb = function(c) {
                var a, h, e, d = c.length,
                    f = O.relative[c[0].type];
                h = f || O.relative[" "];
                for (var b = f ? 1 : 0, k = vb(function(c) {
                                return c === a
                            }, h, !0), n = vb(function(c) {
                                return -1 < Fa.call(a, c)
                            }, h, !0), g = [
                            function(c, x, h) {
                                return !f && (h || x !== eb) || ((a = x).nodeType ? k(c, x, h) : n(c, x, h))
                            }
                        ]; b < d; b++) if (h = O.relative[c[b].type]) g = [vb(wb(g), h)];
                    else {
                        h =
                            O.filter[c[b].type].apply(null, c[b].matches);
                        if (h[V]) {
                            for (e = ++b; e < d && !O.relative[c[e].type]; e++);
                            return xb(1 < b && wb(g), 1 < b && $a(c.slice(0, b - 1).concat({
                                            value: " " === c[b - 2].type ? "*" : ""
                                        })).replace(ab, "$1"), h, b < e && yb(c.slice(b, e)), e < d && yb(c = c.slice(e)), e < d && $a(c))
                        }
                        g.push(h)
                    }
                return wb(g)
            }, Ma, T, cb, O, fb, Yb, sb, eb, Ga, Da, Y, oa, ma, ga, Ha, gb, Ta, V = "sizzle" + -new Date,
            ra = qb.document,
            na = 0,
            Xc = 0,
            Zb = tb(),
            Xb = tb(),
            $b = tb(),
            Na = !1,
            zb = function(c, a) {
                c === a && (Na = !0);
                return 0
            }, Ub = -2147483648,
            Yc = {}.hasOwnProperty,
            xa = [],
            Zc = xa.pop,
            $c =
                xa.push,
            ua = xa.push,
            ac = xa.slice,
            Fa = xa.indexOf || function(c) {
                for (var a = 0, h = this.length; a < h; a++) if (this[a] === c) return a;
                return -1
            }, bc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + bc + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            Ab = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + cc.replace(3, 8) + ")*)|.*)\\)|)",
            ab = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            Vc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Wc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            rb = /[\x20\t\r\n\f]*[+~]/,
            ad = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            bd = RegExp(Ab),
            cd = RegExp("^" + bc + "$"),
            bb = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: RegExp("^" + cc),
                PSEUDO: RegExp("^" +
                    Ab),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?\x3d[^-]|$)",
                    "i")
            }, Bb = /^[^{]+\{\s*\[native \w/,
            Rc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dd = /^(?:input|select|textarea|button)$/i,
            ed = /^h\d$/i,
            Sc = /'|\\/g,
            va = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            wa = function(c, a, h) {
                c = "0x" + a - 65536;
                return c !== c || h ? a : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320)
            };
        try {
            ua.apply(xa = ac.call(ra.childNodes), ra.childNodes), xa[ra.childNodes.length].nodeType
        } catch (Hd) {
            ua = {
                apply: xa.length ? function(c, a) {
                    $c.apply(c, ac.call(a))
                } : function(c, a) {
                    for (var h = c.length, e = 0; c[h++] = a[e++];);
                    c.length = h - 1
                }
            }
        }
        Yb = Q.isXML = function(c) {
            return (c = c && (c.ownerDocument || c).documentElement) ? "HTML" !== c.nodeName : !1
        };
        T = Q.support = {};
        Da = Q.setDocument = function(c) {
            var a = c ? c.ownerDocument || c : ra;
            c = a.defaultView;
            if (a === Y || 9 !== a.nodeType || !a.documentElement) return Y;
            Y = a;
            oa = a.documentElement;
            ma = !Yb(a);
            c && (c.attachEvent && c !== c.top) && c.attachEvent("onbeforeunload", function() {
                    Da()
                });
            T.attributes = la(function(c) {
                    c.className = "i";
                    return !c.getAttribute("className")
                });
            T.getElementsByTagName = la(function(c) {
                    c.appendChild(a.createComment(""));
                    return !c.getElementsByTagName("*").length
                });
            T.getElementsByClassName = la(function(c) {
                    c.innerHTML = "\x3cdiv class\x3d'a'\x3e\x3c/div\x3e\x3cdiv class\x3d'a i'\x3e\x3c/div\x3e";
                    c.firstChild.className = "i";
                    return 2 === c.getElementsByClassName("i").length
                });
            T.getById = la(function(c) {
                    oa.appendChild(c).id = V;
                    return !a.getElementsByName || !a.getElementsByName(V).length
                });
            T.getById ? (O.find.ID = function(c, a) {
                    if ("undefined" !== typeof a.getElementById &&
                        ma) {
                        var x = a.getElementById(c);
                        return x && x.parentNode ? [x] : []
                    }
                }, O.filter.ID = function(c) {
                    var a = c.replace(va, wa);
                    return function(c) {
                        return c.getAttribute("id") === a
                    }
                }) : (delete O.find.ID, O.filter.ID = function(c) {
                    var a = c.replace(va, wa);
                    return function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === a
                    }
                });
            O.find.TAG = T.getElementsByTagName ? function(c, a) {
                if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(c)
            } : function(c, a) {
                var x, h = [],
                    e = 0,
                    d = a.getElementsByTagName(c);
                if ("*" === c) {
                    for (; x = d[e++];) 1 === x.nodeType && h.push(x);
                    return h
                }
                return d
            };
            O.find.CLASS = T.getElementsByClassName && function(c, a) {
                if ("undefined" !== typeof a.getElementsByClassName && ma) return a.getElementsByClassName(c)
            };
            Ha = [];
            ga = [];
            if (T.qsa = Bb.test(a.querySelectorAll)) la(function(c) {
                        c.innerHTML = "\x3cselect\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                        c.querySelectorAll("[selected]").length || ga.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        c.querySelectorAll(":checked").length || ga.push(":checked")
                    }), la(function(c) {
                        var x = a.createElement("input");
                        x.setAttribute("type", "hidden");
                        c.appendChild(x).setAttribute("t", "");
                        c.querySelectorAll("[t^\x3d'']").length && ga.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        c.querySelectorAll(":enabled").length || ga.push(":enabled", ":disabled");
                        c.querySelectorAll("*,:x");
                        ga.push(",.*:")
                    });
            (T.matchesSelector = Bb.test(gb = oa.webkitMatchesSelector || oa.mozMatchesSelector || oa.oMatchesSelector || oa.msMatchesSelector)) &&
                la(function(c) {
                    T.disconnectedMatch = gb.call(c, "div");
                    gb.call(c, "[s!\x3d'']:x");
                    Ha.push("!\x3d", Ab)
                });
            ga = ga.length && RegExp(ga.join("|"));
            Ha = Ha.length && RegExp(Ha.join("|"));
            Ta = Bb.test(oa.contains) || oa.compareDocumentPosition ? function(c, a) {
                var x = 9 === c.nodeType ? c.documentElement : c,
                    h = a && a.parentNode;
                return c === h || !(!h || !(1 === h.nodeType && (x.contains ? x.contains(h) : c.compareDocumentPosition && c.compareDocumentPosition(h) & 16)))
            } : function(c, a) {
                if (a) for (; a = a.parentNode;) if (a === c) return !0;
                return !1
            };
            zb = oa.compareDocumentPosition ? function(c, x) {
                if (c === x) return Na = !0, 0;
                var h = x.compareDocumentPosition && c.compareDocumentPosition && c.compareDocumentPosition(x);
                return h ? h & 1 || !T.sortDetached && x.compareDocumentPosition(c) === h ? c === a || Ta(ra, c) ? -1 : x === a || Ta(ra, x) ? 1 : Ga ? Fa.call(Ga, c) - Fa.call(Ga, x) : 0 : h & 4 ? -1 : 1 : c.compareDocumentPosition ? -1 : 1
            } : function(c, x) {
                var h, e = 0;
                h = c.parentNode;
                var d = x.parentNode,
                    f = [c],
                    b = [x];
                if (c === x) return Na = !0, 0;
                if (!h || !d) return c === a ? -1 : x === a ? 1 : h ? -1 : d ? 1 : Ga ? Fa.call(Ga, c) - Fa.call(Ga, x) : 0;
                if (h === d) return Vb(c, x);
                for (h =
                    c; h = h.parentNode;) f.unshift(h);
                for (h = x; h = h.parentNode;) b.unshift(h);
                for (; f[e] === b[e];) e++;
                return e ? Vb(f[e], b[e]) : f[e] === ra ? -1 : b[e] === ra ? 1 : 0
            };
            return a
        };
        Q.matches = function(c, a) {
            return Q(c, null, null, a)
        };
        Q.matchesSelector = function(c, a) {
            (c.ownerDocument || c) !== Y && Da(c);
            a = a.replace(ad, "\x3d'$1']");
            if (T.matchesSelector && ma && (!Ha || !Ha.test(a)) && (!ga || !ga.test(a))) try {
                    var h = gb.call(c, a);
                    if (h || T.disconnectedMatch || c.document && 11 !== c.document.nodeType) return h
            } catch (e) {}
            return 0 < Q(a, Y, null, [c]).length
        };
        Q.contains = function(c, a) {
            (c.ownerDocument || c) !== Y && Da(c);
            return Ta(c, a)
        };
        Q.attr = function(c, a) {
            (c.ownerDocument || c) !== Y && Da(c);
            var h = O.attrHandle[a.toLowerCase()],
                h = h && Yc.call(O.attrHandle, a.toLowerCase()) ? h(c, a, !ma) : void 0;
            return void 0 === h ? T.attributes || !ma ? c.getAttribute(a) : (h = c.getAttributeNode(a)) && h.specified ? h.value : null : h
        };
        Q.error = function(c) {
            throw Error("Syntax error, unrecognized expression: " + c);
        };
        Q.uniqueSort = function(c) {
            var a, h = [],
                e = 0,
                d = 0;
            Na = !T.detectDuplicates;
            Ga = !T.sortStable && c.slice(0);
            c.sort(zb);
            if (Na) {
                for (; a = c[d++];) a === c[d] && (e = h.push(d));
                for (; e--;) c.splice(h[e], 1)
            }
            return c
        };
        fb = Q.getText = function(c) {
            var a, h = "",
                e = 0;
            if (a = c.nodeType) if (1 === a || 9 === a || 11 === a) {
                    if ("string" === typeof c.textContent) return c.textContent;
                    for (c = c.firstChild; c; c = c.nextSibling) h += fb(c)
                } else {
                    if (3 === a || 4 === a) return c.nodeValue
                } else for (; a = c[e]; e++) h += fb(a);
            return h
        };
        O = Q.selectors = {
            cacheLength: 50,
            createPseudo: ka,
            match: bb,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(c) {
                    c[1] = c[1].replace(va, wa);
                    c[3] = (c[4] || c[5] || "").replace(va, wa);
                    "~\x3d" === c[2] && (c[3] = " " + c[3] + " ");
                    return c.slice(0, 4)
                },
                CHILD: function(c) {
                    c[1] = c[1].toLowerCase();
                    "nth" === c[1].slice(0, 3) ? (c[3] || Q.error(c[0]), c[4] = +(c[4] ? c[5] + (c[6] || 1) : 2 * ("even" === c[3] || "odd" === c[3])), c[5] = +(c[7] + c[8] || "odd" === c[3])) : c[3] && Q.error(c[0]);
                    return c
                },
                PSEUDO: function(c) {
                    var a, h = !c[5] && c[2];
                    if (bb.CHILD.test(c[0])) return null;
                    if (c[3] && void 0 !== c[4]) c[2] = c[4];
                    else if (h && bd.test(h) && (a = Za(h, !0)) && (a = h.indexOf(")", h.length - a) - h.length)) c[0] = c[0].slice(0, a), c[2] = h.slice(0, a);
                    return c.slice(0, 3)
                }
            },
            filter: {
                TAG: function(c) {
                    var a = c.replace(va, wa).toLowerCase();
                    return "*" === c ? function() {
                        return !0
                    } : function(c) {
                        return c.nodeName && c.nodeName.toLowerCase() === a
                    }
                },
                CLASS: function(c) {
                    var a = Zb[c + " "];
                    return a || (a = RegExp("(^|[\\x20\\t\\r\\n\\f])" + c + "([\\x20\\t\\r\\n\\f]|$)")) && Zb(c, function(c) {
                            return a.test("string" === typeof c.className && c.className || "undefined" !== typeof c.getAttribute &&
                                c.getAttribute("class") || "")
                        })
                },
                ATTR: function(c, a, h) {
                    return function(e) {
                        e = Q.attr(e, c);
                        if (null == e) return "!\x3d" === a;
                        if (!a) return !0;
                        e += "";
                        return "\x3d" === a ? e === h : "!\x3d" === a ? e !== h : "^\x3d" === a ? h && 0 === e.indexOf(h) : "*\x3d" === a ? h && -1 < e.indexOf(h) : "$\x3d" === a ? h && e.slice(-h.length) === h : "~\x3d" === a ? -1 < (" " + e + " ").indexOf(h) : "|\x3d" === a ? e === h || e.slice(0, h.length + 1) === h + "-" : !1
                    }
                },
                CHILD: function(c, a, h, e, d) {
                    var f = "nth" !== c.slice(0, 3),
                        b = "last" !== c.slice(-4),
                        k = "of-type" === a;
                    return 1 === e && 0 === d ? function(c) {
                        return !!c.parentNode
                    } : function(a, h, n) {
                        var g, q, t, j, l;
                        h = f !== b ? "nextSibling" : "previousSibling";
                        var o = a.parentNode,
                            D = k && a.nodeName.toLowerCase();
                        n = !n && !k;
                        if (o) {
                            if (f) {
                                for (; h;) {
                                    for (q = a; q = q[h];) if (k ? q.nodeName.toLowerCase() === D : 1 === q.nodeType) return !1;
                                    l = h = "only" === c && !l && "nextSibling"
                                }
                                return !0
                            }
                            l = [b ? o.firstChild : o.lastChild];
                            if (b && n) {
                                n = o[V] || (o[V] = {});
                                g = n[c] || [];
                                j = g[0] === na && g[1];
                                t = g[0] === na && g[2];
                                for (q = j && o.childNodes[j]; q = ++j && q && q[h] || (t = j = 0) || l.pop();) if (1 === q.nodeType && ++t && q === a) {
                                        n[c] = [na, j, t];
                                        break
                                    }
                            } else if (n && (g = (a[V] ||
                                        (a[V] = {}))[c]) && g[0] === na) t = g[1];
                            else for (; q = ++j && q && q[h] || (t = j = 0) || l.pop();) if ((k ? q.nodeName.toLowerCase() === D : 1 === q.nodeType) && ++t) if (n && ((q[V] || (q[V] = {}))[c] = [na, t]), q === a) break; t -= d;
                            return t === e || 0 === t % e && 0 <= t / e
                        }
                    }
                },
                PSEUDO: function(c, a) {
                    var h, e = O.pseudos[c] || O.setFilters[c.toLowerCase()] || Q.error("unsupported pseudo: " + c);
                    return e[V] ? e(a) : 1 < e.length ? (h = [c, c, "", a], O.setFilters.hasOwnProperty(c.toLowerCase()) ? ka(function(c, h) {
                                for (var x, d = e(c, a), f = d.length; f--;) x = Fa.call(c, d[f]), c[x] = !(h[x] = d[f])
                            }) : function(c) {
                            return e(c, 0, h)
                        }) : e
                }
            },
            pseudos: {
                not: ka(function(c) {
                        var a = [],
                            h = [],
                            e = sb(c.replace(ab, "$1"));
                        return e[V] ? ka(function(c, a, h, x) {
                                x = e(c, null, x, []);
                                for (var d = c.length; d--;) if (h = x[d]) c[d] = !(a[d] = h)
                            }) : function(c, x, d) {
                            a[0] = c;
                            e(a, null, d, h);
                            return !h.pop()
                        }
                    }),
                has: ka(function(c) {
                        return function(a) {
                            return 0 < Q(c, a).length
                        }
                    }),
                contains: ka(function(c) {
                        return function(a) {
                            return -1 < (a.textContent || a.innerText || fb(a)).indexOf(c)
                        }
                    }),
                lang: ka(function(c) {
                        cd.test(c || "") || Q.error("unsupported lang: " + c);
                        c = c.replace(va,
                            wa).toLowerCase();
                        return function(a) {
                            var h;
                            do if (h = ma ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return h = h.toLowerCase(), h === c || 0 === h.indexOf(c + "-"); while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                    }),
                target: function(c) {
                    var a = qb.location && qb.location.hash;
                    return a && a.slice(1) === c.id
                },
                root: function(c) {
                    return c === oa
                },
                focus: function(c) {
                    return c === Y.activeElement && (!Y.hasFocus || Y.hasFocus()) && !(!c.type && !c.href && !~c.tabIndex)
                },
                enabled: function(c) {
                    return !1 === c.disabled
                },
                disabled: function(c) {
                    return !0 ===
                        c.disabled
                },
                checked: function(c) {
                    var a = c.nodeName.toLowerCase();
                    return "input" === a && !! c.checked || "option" === a && !! c.selected
                },
                selected: function(c) {
                    c.parentNode && c.parentNode.selectedIndex;
                    return !0 === c.selected
                },
                empty: function(c) {
                    for (c = c.firstChild; c; c = c.nextSibling) if ("@" < c.nodeName || 3 === c.nodeType || 4 === c.nodeType) return !1;
                    return !0
                },
                parent: function(c) {
                    return !O.pseudos.empty(c)
                },
                header: function(c) {
                    return ed.test(c.nodeName)
                },
                input: function(c) {
                    return dd.test(c.nodeName)
                },
                button: function(c) {
                    var a = c.nodeName.toLowerCase();
                    return "input" === a && "button" === c.type || "button" === a
                },
                text: function(c) {
                    var a;
                    return "input" === c.nodeName.toLowerCase() && "text" === c.type && (null == (a = c.getAttribute("type")) || a.toLowerCase() === c.type)
                },
                first: Ea(function() {
                        return [0]
                    }),
                last: Ea(function(c, a) {
                        return [a - 1]
                    }),
                eq: Ea(function(c, a, h) {
                        return [0 > h ? h + a : h]
                    }),
                even: Ea(function(c, a) {
                        for (var h = 0; h < a; h += 2) c.push(h);
                        return c
                    }),
                odd: Ea(function(c, a) {
                        for (var h = 1; h < a; h += 2) c.push(h);
                        return c
                    }),
                lt: Ea(function(c, a, h) {
                        for (a = 0 > h ? h + a : h; 0 <= --a;) c.push(a);
                        return c
                    }),
                gt: Ea(function(c,
                        a, h) {
                        for (h = 0 > h ? h + a : h; ++h < a;) c.push(h);
                        return c
                    })
            }
        };
        O.pseudos.nth = O.pseudos.eq;
        for (Ma in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) O.pseudos[Ma] = Tc(Ma);
        for (Ma in {
                submit: !0,
                reset: !0
            }) O.pseudos[Ma] = Uc(Ma);
        Wb.prototype = O.filters = O.pseudos;
        O.setFilters = new Wb;
        sb = Q.compile = function(c, a) {
            var h, e = [],
                d = [],
                f = $b[c + " "];
            if (!f) {
                a || (a = Za(c));
                for (h = a.length; h--;) f = yb(a[h]), f[V] ? e.push(f) : d.push(f);
                var b = 0,
                    k = 0 < e.length,
                    n = 0 < d.length;
                h = function(c, a, h, x, f) {
                    var g, q, t = [],
                        j = 0,
                        l = "0",
                        o = c && [],
                        D = null != f,
                        y = eb,
                        mb = c ||
                            n && O.find.TAG("*", f && a.parentNode || a),
                        m = na += null == y ? 1 : Math.random() || 0.1;
                    D && (eb = a !== Y && a, cb = b);
                    for (; null != (f = mb[l]); l++) {
                        if (n && f) {
                            for (g = 0; q = d[g++];) if (q(f, a, h)) {
                                    x.push(f);
                                    break
                                }
                            D && (na = m, cb = ++b)
                        }
                        k && ((f = !q && f) && j--, c && o.push(f))
                    }
                    j += l;
                    if (k && l !== j) {
                        for (g = 0; q = e[g++];) q(o, t, a, h);
                        if (c) {
                            if (0 < j) for (; l--;)!o[l] && !t[l] && (t[l] = Zc.call(x));
                            t = db(t)
                        }
                        ua.apply(x, t);
                        D && (!c && 0 < t.length && 1 < j + e.length) && Q.uniqueSort(x)
                    }
                    D && (na = m, eb = y);
                    return o
                };
                h = k ? ka(h) : h;
                f = $b(c, h)
            }
            return f
        };
        T.sortStable = V.split("").sort(zb).join("") ===
            V;
        T.detectDuplicates = Na;
        Da();
        T.sortDetached = la(function(c) {
                return c.compareDocumentPosition(Y.createElement("div")) & 1
            });
        la(function(c) {
                c.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                return "#" === c.firstChild.getAttribute("href")
            }) || ub("type|href|height|width", function(c, a, h) {
                if (!h) return c.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2)
            });
        (!T.attributes || !la(function(c) {
                    c.innerHTML = "\x3cinput/\x3e";
                    c.firstChild.setAttribute("value", "");
                    return "" === c.firstChild.getAttribute("value")
                })) && ub("value", function(c,
                a, h) {
                if (!h && "input" === c.nodeName.toLowerCase()) return c.defaultValue
            });
        la(function(c) {
                return null == c.getAttribute("disabled")
            }) || ub("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(c, a, h) {
                var e;
                if (!h) return (e = c.getAttributeNode(a)) && e.specified ? e.value : !0 === c[a] ? a.toLowerCase() : null
            });
        o.find = Q;
        o.expr = Q.selectors;
        o.expr[":"] = o.expr.pseudos;
        o.unique = Q.uniqueSort;
        o.text = Q.getText;
        o.isXMLDoc = Q.isXML;
        o.contains = Q.contains;
        var dc = {};
        o.Callbacks = function(c) {
            var a;
            if ("string" === typeof c) {
                if (!(a = dc[c])) {
                    a = c;
                    var h = dc[a] = {};
                    o.each(a.match(pa) || [], function(c, a) {
                            h[a] = !0
                        });
                    a = h
                }
            } else a = o.extend({}, c);
            c = a;
            var e, d, f, b, k, n, g = [],
                q = !c.once && [],
                t = function(a) {
                    d = c.memory && a;
                    f = !0;
                    k = n || 0;
                    n = 0;
                    b = g.length;
                    for (e = !0; g && k < b; k++) if (!1 === g[k].apply(a[0], a[1]) && c.stopOnFalse) {
                            d = !1;
                            break
                        }
                    e = !1;
                    g && (q ? q.length && t(q.shift()) : d ? g = [] : j.disable())
                }, j = {
                    add: function() {
                        if (g) {
                            var a = g.length;
                            (function Fc(a) {
                                    o.each(a, function(a, h) {
                                            var e = o.type(h);
                                            "function" ===
                                                e ? (!c.unique || !j.has(h)) && g.push(h) : h && (h.length && "string" !== e) && Fc(h)
                                        })
                                })(arguments);
                            e ? b = g.length : d && (n = a, t(d))
                        }
                        return this
                    },
                    remove: function() {
                        g && o.each(arguments, function(c, a) {
                                for (var h; - 1 < (h = o.inArray(a, g, h));) g.splice(h, 1), e && (h <= b && b--, h <= k && k--)
                            });
                        return this
                    },
                    has: function(c) {
                        return c ? -1 < o.inArray(c, g) : !(!g || !g.length)
                    },
                    empty: function() {
                        g = [];
                        b = 0;
                        return this
                    },
                    disable: function() {
                        g = q = d = m;
                        return this
                    },
                    disabled: function() {
                        return !g
                    },
                    lock: function() {
                        q = m;
                        d || j.disable();
                        return this
                    },
                    locked: function() {
                        return !q
                    },
                    fireWith: function(c, a) {
                        if (g && (!f || q)) a = a || [], a = [c, a.slice ? a.slice() : a], e ? q.push(a) : t(a);
                        return this
                    },
                    fire: function() {
                        j.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!f
                    }
                };
            return j
        };
        o.extend({
                Deferred: function(c) {
                    var a = [
                        ["resolve", "done", o.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", o.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", o.Callbacks("memory")]
                    ],
                        h = "pending",
                        e = {
                            state: function() {
                                return h
                            },
                            always: function() {
                                d.done(arguments).fail(arguments);
                                return this
                            },
                            then: function() {
                                var c =
                                    arguments;
                                return o.Deferred(function(h) {
                                        o.each(a, function(a, x) {
                                                var f = x[0],
                                                    b = o.isFunction(c[a]) && c[a];
                                                d[x[1]](function() {
                                                        var c = b && b.apply(this, arguments);
                                                        if (c && o.isFunction(c.promise)) c.promise().done(h.resolve).fail(h.reject).progress(h.notify);
                                                        else h[f + "With"](this === e ? h.promise() : this, b ? [c] : arguments)
                                                    })
                                            });
                                        c = null
                                    }).promise()
                            },
                            promise: function(c) {
                                return null != c ? o.extend(c, e) : e
                            }
                        }, d = {};
                    e.pipe = e.then;
                    o.each(a, function(c, x) {
                            var f = x[2],
                                b = x[3];
                            e[x[1]] = f.add;
                            b && f.add(function() {
                                    h = b
                                }, a[c ^ 1][2].disable, a[2][2].lock);
                            d[x[0]] = function() {
                                d[x[0] + "With"](this === d ? e : this, arguments);
                                return this
                            };
                            d[x[0] + "With"] = f.fireWith
                        });
                    e.promise(d);
                    c && c.call(d, d);
                    return d
                },
                when: function(c) {
                    var a = 0,
                        h = R.call(arguments),
                        e = h.length,
                        d = 1 !== e || c && o.isFunction(c.promise) ? e : 0,
                        f = 1 === d ? c : o.Deferred(),
                        b = function(c, a, h) {
                            return function(e) {
                                a[c] = this;
                                h[c] = 1 < arguments.length ? R.call(arguments) : e;
                                h === k ? f.notifyWith(a, h) : --d || f.resolveWith(a, h)
                            }
                        }, k, n, g;
                    if (1 < e) {
                        k = Array(e);
                        n = Array(e);
                        for (g = Array(e); a < e; a++) h[a] && o.isFunction(h[a].promise) ? h[a].promise().done(b(a,
                                    g, h)).fail(f.reject).progress(b(a, n, k)) : --d
                    }
                    d || f.resolveWith(g, h);
                    return f.promise()
                }
            });
        var fd = o;
        var L = {}, Cb, ya, Z, hb, ib, jb, Db, ec, Ua, M = J.createElement("div");
        M.setAttribute("className", "t");
        M.innerHTML = "  \x3clink/\x3e\x3ctable\x3e\x3c/table\x3e\x3ca href\x3d'/a'\x3ea\x3c/a\x3e\x3cinput type\x3d'checkbox'/\x3e";
        Cb = M.getElementsByTagName("*") || [];
        if ((ya = M.getElementsByTagName("a")[0]) && ya.style && Cb.length) {
            hb = J.createElement("select");
            jb = hb.appendChild(J.createElement("option"));
            Z = M.getElementsByTagName("input")[0];
            ya.style.cssText = "top:1px;float:left;opacity:.5";
            L.getSetAttribute = "t" !== M.className;
            L.leadingWhitespace = 3 === M.firstChild.nodeType;
            L.tbody = !M.getElementsByTagName("tbody").length;
            L.htmlSerialize = !! M.getElementsByTagName("link").length;
            L.style = /top/.test(ya.getAttribute("style"));
            L.hrefNormalized = "/a" === ya.getAttribute("href");
            L.opacity = /^0.5/.test(ya.style.opacity);
            L.cssFloat = !! ya.style.cssFloat;
            L.checkOn = !! Z.value;
            L.optSelected = jb.selected;
            L.enctype = !! J.createElement("form").enctype;
            L.html5Clone =
                "\x3c:nav\x3e\x3c/:nav\x3e" !== J.createElement("nav").cloneNode(!0).outerHTML;
            L.inlineBlockNeedsLayout = !1;
            L.shrinkWrapBlocks = !1;
            L.pixelPosition = !1;
            L.deleteExpando = !0;
            L.noCloneEvent = !0;
            L.reliableMarginRight = !0;
            L.boxSizingReliable = !0;
            Z.checked = !0;
            L.noCloneChecked = Z.cloneNode(!0).checked;
            hb.disabled = !0;
            L.optDisabled = !jb.disabled;
            try {
                delete M.test
            } catch (Id) {
                L.deleteExpando = !1
            }
            Z = J.createElement("input");
            Z.setAttribute("value", "");
            L.input = "" === Z.getAttribute("value");
            Z.value = "t";
            Z.setAttribute("type", "radio");
            L.radioValue = "t" === Z.value;
            Z.setAttribute("checked", "t");
            Z.setAttribute("name", "t");
            ib = J.createDocumentFragment();
            ib.appendChild(Z);
            L.appendChecked = Z.checked;
            L.checkClone = ib.cloneNode(!0).cloneNode(!0).lastChild.checked;
            M.attachEvent && (M.attachEvent("onclick", function() {
                        L.noCloneEvent = !1
                    }), M.cloneNode(!0).click());
            for (Ua in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) M.setAttribute(Db = "on" + Ua, "t"), L[Ua + "Bubbles"] = Db in b || !1 === M.attributes[Db].expando;
            M.style.backgroundClip = "content-box";
            M.cloneNode(!0).style.backgroundClip =
                "";
            L.clearCloneStyle = "content-box" === M.style.backgroundClip;
            for (Ua in o(L)) break;
            L.ownLast = "0" !== Ua;
            o(function() {
                    var c, a, h = J.getElementsByTagName("body")[0];
                    h && (c = J.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", h.appendChild(c).appendChild(M), M.innerHTML = "\x3ctable\x3e\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3et\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e", a = M.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        ec = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", L.reliableHiddenOffsets = ec && 0 === a[0].offsetHeight, M.innerHTML = "", M.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", o.swap(h, null != h.style.zoom ? {
                                zoom: 1
                            } : {}, function() {
                                L.boxSizing = 4 === M.offsetWidth
                            }), b.getComputedStyle && (L.pixelPosition = "1%" !== (b.getComputedStyle(M, null) || {}).top, L.boxSizingReliable =
                            "4px" === (b.getComputedStyle(M, null) || {
                                    width: "4px"
                                }).width, a = M.appendChild(J.createElement("div")), a.style.cssText = M.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a.style.marginRight = a.style.width = "0", M.style.width = "1px", L.reliableMarginRight = !parseFloat((b.getComputedStyle(a, null) || {}).marginRight)), typeof M.style.zoom !== $ && (M.innerHTML = "", M.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1",
                            L.inlineBlockNeedsLayout = 3 === M.offsetWidth, M.style.display = "block", M.innerHTML = "\x3cdiv\x3e\x3c/div\x3e", M.firstChild.style.width = "5px", L.shrinkWrapBlocks = 3 !== M.offsetWidth, L.inlineBlockNeedsLayout && (h.style.zoom = 1)), h.removeChild(c), c = M = a = a = null)
                });
            Cb = hb = ib = jb = ya = Z = null
        }
        fd.support = L;
        var Ac = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            zc = /([A-Z])/g;
        o.extend({
                cache: {},
                noData: {
                    applet: !0,
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(c) {
                    c = c.nodeType ? o.cache[c[o.expando]] : c[o.expando];
                    return !!c && !a(c)
                },
                data: function(c, a, h) {
                    return g(c, a, h)
                },
                removeData: function(c, a) {
                    return d(c, a)
                },
                _data: function(c, a, h) {
                    return g(c, a, h, !0)
                },
                _removeData: function(c, a) {
                    return d(c, a, !0)
                },
                acceptData: function(c) {
                    if (c.nodeType && 1 !== c.nodeType && 9 !== c.nodeType) return !1;
                    var a = c.nodeName && o.noData[c.nodeName.toLowerCase()];
                    return !a || !0 !== a && c.getAttribute("classid") === a
                }
            });
        o.fn.extend({
                data: function(c, a) {
                    var h, e, d = null,
                        b = 0,
                        k = this[0];
                    if (c === m) {
                        if (this.length && (d = o.data(k), 1 === k.nodeType && !o._data(k, "parsedAttrs"))) {
                            for (h =
                                k.attributes; b < h.length; b++) e = h[b].name, 0 === e.indexOf("data-") && (e = o.camelCase(e.slice(5)), f(k, e, d[e]));
                            o._data(k, "parsedAttrs", !0)
                        }
                        return d
                    }
                    return "object" === typeof c ? this.each(function() {
                            o.data(this, c)
                        }) : 1 < arguments.length ? this.each(function() {
                            o.data(this, c, a)
                        }) : k ? f(k, c, o.data(k, c)) : null
                },
                removeData: function(c) {
                    return this.each(function() {
                            o.removeData(this, c)
                        })
                }
            });
        o.extend({
                queue: function(c, a, h) {
                    var e;
                    if (c) return a = (a || "fx") + "queue", e = o._data(c, a), h && (!e || o.isArray(h) ? e = o._data(c, a, o.makeArray(h)) :
                            e.push(h)), e || []
                },
                dequeue: function(c, a) {
                    a = a || "fx";
                    var h = o.queue(c, a),
                        e = h.length,
                        d = h.shift(),
                        f = o._queueHooks(c, a),
                        b = function() {
                            o.dequeue(c, a)
                        };
                    "inprogress" === d && (d = h.shift(), e--);
                    d && ("fx" === a && h.unshift("inprogress"), delete f.stop, d.call(c, b, f));
                    !e && f && f.empty.fire()
                },
                _queueHooks: function(c, a) {
                    var h = a + "queueHooks";
                    return o._data(c, h) || o._data(c, h, {
                            empty: o.Callbacks("once memory").add(function() {
                                    o._removeData(c, a + "queue");
                                    o._removeData(c, h)
                                })
                        })
                }
            });
        o.fn.extend({
                queue: function(c, a) {
                    var h = 2;
                    "string" !==
                        typeof c && (a = c, c = "fx", h--);
                    return arguments.length < h ? o.queue(this[0], c) : a === m ? this : this.each(function() {
                            var h = o.queue(this, c, a);
                            o._queueHooks(this, c);
                            "fx" === c && "inprogress" !== h[0] && o.dequeue(this, c)
                        })
                },
                dequeue: function(c) {
                    return this.each(function() {
                            o.dequeue(this, c)
                        })
                },
                delay: function(c, a) {
                    c = o.fx ? o.fx.speeds[c] || c : c;
                    return this.queue(a || "fx", function(a, h) {
                            var e = setTimeout(a, c);
                            h.stop = function() {
                                clearTimeout(e)
                            }
                        })
                },
                clearQueue: function(c) {
                    return this.queue(c || "fx", [])
                },
                promise: function(c, a) {
                    var h, e =
                            1,
                        d = o.Deferred(),
                        f = this,
                        b = this.length,
                        k = function() {
                            --e || d.resolveWith(f, [f])
                        };
                    "string" !== typeof c && (a = c, c = m);
                    for (c = c || "fx"; b--;) if ((h = o._data(f[b], c + "queueHooks")) && h.empty) e++, h.empty.add(k);
                    k();
                    return d.promise(a)
                }
            });
        var Oa, fc, Eb = /[\t\r\n\f]/g,
            gd = /\r/g,
            hd = /^(?:input|select|textarea|button|object)$/i,
            id = /^(?:a|area)$/i,
            Fb = /^(?:checked|selected)$/i,
            Ia = o.support.getSetAttribute,
            kb = o.support.input;
        o.fn.extend({
                attr: function(c, a) {
                    return o.access(this, o.attr, c, a, 1 < arguments.length)
                },
                removeAttr: function(c) {
                    return this.each(function() {
                            o.removeAttr(this,
                                c)
                        })
                },
                prop: function(c, a) {
                    return o.access(this, o.prop, c, a, 1 < arguments.length)
                },
                removeProp: function(c) {
                    c = o.propFix[c] || c;
                    return this.each(function() {
                            try {
                                this[c] = m, delete this[c]
                            } catch (a) {}
                        })
                },
                addClass: function(c) {
                    var a, h, e, d, f, b = 0,
                        k = this.length;
                    a = "string" === typeof c && c;
                    if (o.isFunction(c)) return this.each(function(a) {
                                o(this).addClass(c.call(this, a, this.className))
                            });
                    if (a) for (a = (c || "").match(pa) || []; b < k; b++) if (h = this[b], e = 1 === h.nodeType && (h.className ? (" " + h.className + " ").replace(Eb, " ") : " ")) {
                                for (f =
                                    0; d = a[f++];) 0 > e.indexOf(" " + d + " ") && (e += d + " ");
                                h.className = o.trim(e)
                            }
                    return this
                },
                removeClass: function(c) {
                    var a, h, e, d, f, b = 0,
                        k = this.length;
                    a = 0 === arguments.length || "string" === typeof c && c;
                    if (o.isFunction(c)) return this.each(function(a) {
                                o(this).removeClass(c.call(this, a, this.className))
                            });
                    if (a) for (a = (c || "").match(pa) || []; b < k; b++) if (h = this[b], e = 1 === h.nodeType && (h.className ? (" " + h.className + " ").replace(Eb, " ") : "")) {
                                for (f = 0; d = a[f++];) for (; 0 <= e.indexOf(" " + d + " ");) e = e.replace(" " + d + " ", " ");
                                h.className =
                                    c ? o.trim(e) : ""
                            }
                    return this
                },
                toggleClass: function(c, a) {
                    var h = typeof c;
                    return "boolean" === typeof a && "string" === h ? a ? this.addClass(c) : this.removeClass(c) : o.isFunction(c) ? this.each(function(h) {
                            o(this).toggleClass(c.call(this, h, this.className, a), a)
                        }) : this.each(function() {
                            if ("string" === h) for (var a, e = 0, d = o(this), f = c.match(pa) || []; a = f[e++];) d.hasClass(a) ? d.removeClass(a) : d.addClass(a);
                            else if (h === $ || "boolean" === h) this.className && o._data(this, "__className__", this.className), this.className = this.className || !1 ===
                                    c ? "" : o._data(this, "__className__") || ""
                        })
                },
                hasClass: function(c) {
                    c = " " + c + " ";
                    for (var a = 0, h = this.length; a < h; a++) if (1 === this[a].nodeType && 0 <= (" " + this[a].className + " ").replace(Eb, " ").indexOf(c)) return !0;
                    return !1
                },
                val: function(c) {
                    var a, h, e, d = this[0];
                    if (arguments.length) return e = o.isFunction(c), this.each(function(a) {
                                if (1 === this.nodeType && (a = e ? c.call(this, a, o(this).val()) : c, null == a ? a = "" : "number" === typeof a ? a += "" : o.isArray(a) && (a = o.map(a, function(c) {
                                                    return null == c ? "" : c + ""
                                                })), h = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], !h || !("set" in h) || h.set(this, a, "value") === m)) this.value = a
                            });
                    if (d) {
                        if ((h = o.valHooks[d.type] || o.valHooks[d.nodeName.toLowerCase()]) && "get" in h && (a = h.get(d, "value")) !== m) return a;
                        a = d.value;
                        return "string" === typeof a ? a.replace(gd, "") : null == a ? "" : a
                    }
                }
            });
        o.extend({
                valHooks: {
                    option: {
                        get: function(c) {
                            var a = o.find.attr(c, "value");
                            return null != a ? a : c.text
                        }
                    },
                    select: {
                        get: function(c) {
                            for (var a, h = c.options, e = c.selectedIndex, d = (c = "select-one" === c.type || 0 > e) ? null : [], f = c ? e + 1 : h.length, b = 0 > e ? f : c ? e : 0; b < f; b++) if (a = h[b], (a.selected ||
                                        b === e) && (o.support.optDisabled ? !a.disabled : null === a.getAttribute("disabled")) && (!a.parentNode.disabled || !o.nodeName(a.parentNode, "optgroup"))) {
                                    a = o(a).val();
                                    if (c) return a;
                                    d.push(a)
                                }
                            return d
                        },
                        set: function(c, a) {
                            for (var h, e, d = c.options, f = o.makeArray(a), b = d.length; b--;) if (e = d[b], e.selected = 0 <= o.inArray(o(e).val(), f)) h = !0;
                            h || (c.selectedIndex = -1);
                            return f
                        }
                    }
                },
                attr: function(c, a, h) {
                    var e, d, f = c.nodeType;
                    if (c && !(3 === f || 8 === f || 2 === f)) {
                        if (typeof c.getAttribute === $) return o.prop(c, a, h);
                        if (1 !== f || !o.isXMLDoc(c)) a =
                                a.toLowerCase(), e = o.attrHooks[a] || (o.expr.match.bool.test(a) ? fc : Oa);
                        if (h !== m) if (null === h) o.removeAttr(c, a);
                            else {
                                if (e && "set" in e && (d = e.set(c, h, a)) !== m) return d;
                                c.setAttribute(a, h + "");
                                return h
                            } else {
                                if (e && "get" in e && null !== (d = e.get(c, a))) return d;
                                d = o.find.attr(c, a);
                                return null == d ? m : d
                            }
                    }
                },
                removeAttr: function(c, a) {
                    var h, e, d = 0,
                        f = a && a.match(pa);
                    if (f && 1 === c.nodeType) for (; h = f[d++];) e = o.propFix[h] || h, o.expr.match.bool.test(h) ? kb && Ia || !Fb.test(h) ? c[e] = !1 : c[o.camelCase("default-" + h)] = c[e] = !1 : o.attr(c, h, ""), c.removeAttribute(Ia ?
                                h : e)
                },
                attrHooks: {
                    type: {
                        set: function(c, a) {
                            if (!o.support.radioValue && "radio" === a && o.nodeName(c, "input")) {
                                var h = c.value;
                                c.setAttribute("type", a);
                                h && (c.value = h);
                                return a
                            }
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(c, a, h) {
                    var e, d, f;
                    f = c.nodeType;
                    if (c && !(3 === f || 8 === f || 2 === f)) {
                        if (f = 1 !== f || !o.isXMLDoc(c)) a = o.propFix[a] || a, d = o.propHooks[a];
                        return h !== m ? d && "set" in d && (e = d.set(c, h, a)) !== m ? e : c[a] = h : d && "get" in d && null !== (e = d.get(c, a)) ? e : c[a]
                    }
                },
                propHooks: {
                    tabIndex: {
                        get: function(c) {
                            var a = o.find.attr(c,
                                "tabindex");
                            return a ? parseInt(a, 10) : hd.test(c.nodeName) || id.test(c.nodeName) && c.href ? 0 : -1
                        }
                    }
                }
            });
        fc = {
            set: function(c, a, h) {
                !1 === a ? o.removeAttr(c, h) : kb && Ia || !Fb.test(h) ? c.setAttribute(!Ia && o.propFix[h] || h, h) : c[o.camelCase("default-" + h)] = c[h] = !0;
                return h
            }
        };
        o.each(o.expr.match.bool.source.match(/\w+/g), function(c, a) {
                var h = o.expr.attrHandle[a] || o.find.attr;
                o.expr.attrHandle[a] = kb && Ia || !Fb.test(a) ? function(c, a, e) {
                    var d = o.expr.attrHandle[a];
                    c = e ? m : (o.expr.attrHandle[a] = m) != h(c, a, e) ? a.toLowerCase() : null;
                    o.expr.attrHandle[a] =
                        d;
                    return c
                } : function(c, a, h) {
                    return h ? m : c[o.camelCase("default-" + a)] ? a.toLowerCase() : null
                }
            });
        if (!kb || !Ia) o.attrHooks.value = {
                set: function(c, a, h) {
                    if (o.nodeName(c, "input")) c.defaultValue = a;
                    else return Oa && Oa.set(c, a, h)
                }
        };
        Ia || (Oa = {
                set: function(c, a, h) {
                    var e = c.getAttributeNode(h);
                    e || c.setAttributeNode(e = c.ownerDocument.createAttribute(h));
                    e.value = a += "";
                    return "value" === h || a === c.getAttribute(h) ? a : m
                }
            }, o.expr.attrHandle.id = o.expr.attrHandle.name = o.expr.attrHandle.coords = function(c, a, h) {
                var e;
                return h ? m : (e = c.getAttributeNode(a)) &&
                    "" !== e.value ? e.value : null
            }, o.valHooks.button = {
                get: function(c, a) {
                    var h = c.getAttributeNode(a);
                    return h && h.specified ? h.value : m
                },
                set: Oa.set
            }, o.attrHooks.contenteditable = {
                set: function(c, a, h) {
                    Oa.set(c, "" === a ? !1 : a, h)
                }
            }, o.each(["width", "height"], function(c, a) {
                    o.attrHooks[a] = {
                        set: function(c, h) {
                            if ("" === h) return c.setAttribute(a, "auto"), h
                        }
                    }
                }));
        o.support.hrefNormalized || o.each(["href", "src"], function(c, a) {
                o.propHooks[a] = {
                    get: function(c) {
                        return c.getAttribute(a, 4)
                    }
                }
            });
        o.support.style || (o.attrHooks.style = {
                get: function(c) {
                    return c.style.cssText ||
                        m
                },
                set: function(c, a) {
                    return c.style.cssText = a + ""
                }
            });
        o.support.optSelected || (o.propHooks.selected = {
                get: function(c) {
                    if (c = c.parentNode) c.selectedIndex, c.parentNode && c.parentNode.selectedIndex;
                    return null
                }
            });
        o.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
                o.propFix[this.toLowerCase()] = this
            });
        o.support.enctype || (o.propFix.enctype = "encoding");
        o.each(["radio", "checkbox"], function() {
                o.valHooks[this] = {
                    set: function(c, a) {
                        if (o.isArray(a)) return c.checked =
                                0 <= o.inArray(o(c).val(), a)
                    }
                };
                o.support.checkOn || (o.valHooks[this].get = function(c) {
                        return null === c.getAttribute("value") ? "on" : c.value
                    })
            });
        var Gb = /^(?:input|select|textarea)$/i,
            jd = /^key/,
            kd = /^(?:mouse|contextmenu)|click/,
            gc = /^(?:focusinfocus|focusoutblur)$/,
            hc = /^([^.]*)(?:\.(.+)|)$/;
        o.event = {
            global: {},
            add: function(c, a, h, e, d) {
                var f, b, k, n, g, q, t, j, l;
                if (k = o._data(c)) {
                    h.handler && (n = h, h = n.handler, d = n.selector);
                    h.guid || (h.guid = o.guid++);
                    if (!(b = k.events)) b = k.events = {};
                    if (!(g = k.handle)) g = k.handle = function(c) {
                            return typeof o !==
                                $ && (!c || o.event.triggered !== c.type) ? o.event.dispatch.apply(g.elem, arguments) : m
                    }, g.elem = c;
                    a = (a || "").match(pa) || [""];
                    for (k = a.length; k--;) if (f = hc.exec(a[k]) || [], j = q = f[1], l = (f[2] || "").split(".").sort(), j) {
                            f = o.event.special[j] || {};
                            j = (d ? f.delegateType : f.bindType) || j;
                            f = o.event.special[j] || {};
                            q = o.extend({
                                    type: j,
                                    origType: q,
                                    data: e,
                                    handler: h,
                                    guid: h.guid,
                                    selector: d,
                                    needsContext: d && o.expr.match.needsContext.test(d),
                                    namespace: l.join(".")
                                }, n);
                            if (!(t = b[j])) if (t = b[j] = [], t.delegateCount = 0, !f.setup || !1 === f.setup.call(c,
                                        e, l, g)) c.addEventListener ? c.addEventListener(j, g, !1) : c.attachEvent && c.attachEvent("on" + j, g);
                            f.add && (f.add.call(c, q), q.handler.guid || (q.handler.guid = h.guid));
                            d ? t.splice(t.delegateCount++, 0, q) : t.push(q);
                            o.event.global[j] = !0
                        }
                    c = null
                }
            },
            remove: function(c, a, h, e, d) {
                var f, b, k, n, g, q, t, j, l, D, y, m = o.hasData(c) && o._data(c);
                if (m && (q = m.events)) {
                    a = (a || "").match(pa) || [""];
                    for (g = a.length; g--;) if (k = hc.exec(a[g]) || [], l = y = k[1], D = (k[2] || "").split(".").sort(), l) {
                            t = o.event.special[l] || {};
                            l = (e ? t.delegateType : t.bindType) ||
                                l;
                            j = q[l] || [];
                            k = k[2] && RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            for (n = f = j.length; f--;) if (b = j[f], (d || y === b.origType) && (!h || h.guid === b.guid) && (!k || k.test(b.namespace)) && (!e || e === b.selector || "**" === e && b.selector)) j.splice(f, 1), b.selector && j.delegateCount--, t.remove && t.remove.call(c, b);
                            n && !j.length && ((!t.teardown || !1 === t.teardown.call(c, D, m.handle)) && o.removeEvent(c, l, m.handle), delete q[l])
                        } else for (l in q) o.event.remove(c, l + a[g], h, e, !0);
                    o.isEmptyObject(q) && (delete m.handle, o._removeData(c, "events"))
                }
            },
            trigger: function(c, a, h, e) {
                var d, f, k, n, g, q, t = [h || J],
                    j = La.call(c, "type") ? c.type : c;
                g = La.call(c, "namespace") ? c.namespace.split(".") : [];
                k = d = h = h || J;
                if (!(3 === h.nodeType || 8 === h.nodeType) && !gc.test(j + o.event.triggered)) if (0 <= j.indexOf(".") && (g = j.split("."), j = g.shift(), g.sort()), f = 0 > j.indexOf(":") && "on" + j, c = c[o.expando] ? c : new o.Event(j, "object" === typeof c && c), c.isTrigger = e ? 2 : 3, c.namespace = g.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = m, c.target || (c.target =
                            h), a = null == a ? [c] : o.makeArray(a, [c]), g = o.event.special[j] || {}, e || !(g.trigger && !1 === g.trigger.apply(h, a))) {
                        if (!e && !g.noBubble && !o.isWindow(h)) {
                            n = g.delegateType || j;
                            gc.test(n + j) || (k = k.parentNode);
                            for (; k; k = k.parentNode) t.push(k), d = k;
                            if (d === (h.ownerDocument || J)) t.push(d.defaultView || d.parentWindow || b)
                        }
                        for (q = 0;
                            (k = t[q++]) && !c.isPropagationStopped();) c.type = 1 < q ? n : g.bindType || j, (d = (o._data(k, "events") || {})[c.type] && o._data(k, "handle")) && d.apply(k, a), (d = f && k[f]) && (o.acceptData(k) && d.apply && !1 === d.apply(k, a)) &&
                                c.preventDefault();
                        c.type = j;
                        if (!e && !c.isDefaultPrevented() && (!g._default || !1 === g._default.apply(t.pop(), a)) && o.acceptData(h) && f && h[j] && !o.isWindow(h)) {
                            (d = h[f]) && (h[f] = null);
                            o.event.triggered = j;
                            try {
                                h[j]()
                            } catch (l) {}
                            o.event.triggered = m;
                            d && (h[f] = d)
                        }
                        return c.result
                    }
            },
            dispatch: function(c) {
                c = o.event.fix(c);
                var a, h, e, d, f = [],
                    b = R.call(arguments);
                a = (o._data(this, "events") || {})[c.type] || [];
                var k = o.event.special[c.type] || {};
                b[0] = c;
                c.delegateTarget = this;
                if (!(k.preDispatch && !1 === k.preDispatch.call(this, c))) {
                    f =
                        o.event.handlers.call(this, c, a);
                    for (a = 0;
                        (e = f[a++]) && !c.isPropagationStopped();) {
                        c.currentTarget = e.elem;
                        for (d = 0;
                            (h = e.handlers[d++]) && !c.isImmediatePropagationStopped();) if (!c.namespace_re || c.namespace_re.test(h.namespace)) if (c.handleObj = h, c.data = h.data, h = ((o.event.special[h.origType] || {}).handle || h.handler).apply(e.elem, b), h !== m && !1 === (c.result = h)) c.preventDefault(), c.stopPropagation()
                    }
                    k.postDispatch && k.postDispatch.call(this, c);
                    return c.result
                }
            },
            handlers: function(c, a) {
                var h, e, d, f, b = [],
                    k = a.delegateCount,
                    n = c.target;
                if (k && n.nodeType && (!c.button || "click" !== c.type)) for (; n != this; n = n.parentNode || this) if (1 === n.nodeType && (!0 !== n.disabled || "click" !== c.type)) {
                            d = [];
                            for (f = 0; f < k; f++) e = a[f], h = e.selector + " ", d[h] === m && (d[h] = e.needsContext ? 0 <= o(h, this).index(n) : o.find(h, this, null, [n]).length), d[h] && d.push(e);
                            d.length && b.push({
                                    elem: n,
                                    handlers: d
                                })
                        }
                k < a.length && b.push({
                        elem: this,
                        handlers: a.slice(k)
                    });
                return b
            },
            fix: function(c) {
                if (c[o.expando]) return c;
                var a, h, e;
                a = c.type;
                var d = c,
                    f = this.fixHooks[a];
                f || (this.fixHooks[a] =
                    f = kd.test(a) ? this.mouseHooks : jd.test(a) ? this.keyHooks : {});
                e = f.props ? this.props.concat(f.props) : this.props;
                c = new o.Event(d);
                for (a = e.length; a--;) h = e[a], c[h] = d[h];
                c.target || (c.target = d.srcElement || J);
                3 === c.target.nodeType && (c.target = c.target.parentNode);
                c.metaKey = !! c.metaKey;
                return f.filter ? f.filter(c, d) : c
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function(c, a) {
                    null == c.which && (c.which = null != a.charCode ? a.charCode : a.keyCode);
                    return c
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(c, a) {
                    var h, e, d = a.button,
                        f = a.fromElement;
                    null == c.pageX && null != a.clientX && (h = c.target.ownerDocument || J, e = h.documentElement, h = h.body, c.pageX = a.clientX + (e && e.scrollLeft || h && h.scrollLeft || 0) - (e && e.clientLeft || h && h.clientLeft || 0), c.pageY = a.clientY + (e && e.scrollTop || h &&
                            h.scrollTop || 0) - (e && e.clientTop || h && h.clientTop || 0));
                    !c.relatedTarget && f && (c.relatedTarget = f === c.target ? a.toElement : f);
                    !c.which && d !== m && (c.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0);
                    return c
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus) try {
                                return this.focus(), !1
                        } catch (c) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (o.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(c) {
                        return o.nodeName(c.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(c) {
                        c.result !== m && (c.originalEvent.returnValue = c.result)
                    }
                }
            },
            simulate: function(c, a, h, e) {
                c = o.extend(new o.Event, h, {
                        type: c,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                e ? o.event.trigger(c, null, a) : o.event.dispatch.call(a, c);
                c.isDefaultPrevented() && h.preventDefault()
            }
        };
        o.removeEvent = J.removeEventListener ? function(c, a, h) {
            c.removeEventListener && c.removeEventListener(a, h, !1)
        } : function(c, a, h) {
            a = "on" + a;
            c.detachEvent && (typeof c[a] ===
                $ && (c[a] = null), c.detachEvent(a, h))
        };
        o.Event = function(c, a) {
            if (!(this instanceof o.Event)) return new o.Event(c, a);
            c && c.type ? (this.originalEvent = c, this.type = c.type, this.isDefaultPrevented = c.defaultPrevented || !1 === c.returnValue || c.getPreventDefault && c.getPreventDefault() ? e : t) : this.type = c;
            a && o.extend(this, a);
            this.timeStamp = c && c.timeStamp || o.now();
            this[o.expando] = !0
        };
        o.Event.prototype = {
            isDefaultPrevented: t,
            isPropagationStopped: t,
            isImmediatePropagationStopped: t,
            preventDefault: function() {
                var c = this.originalEvent;
                this.isDefaultPrevented = e;
                c && (c.preventDefault ? c.preventDefault() : c.returnValue = !1)
            },
            stopPropagation: function() {
                var c = this.originalEvent;
                this.isPropagationStopped = e;
                c && (c.stopPropagation && c.stopPropagation(), c.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = e;
                this.stopPropagation()
            }
        };
        o.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(c, a) {
                o.event.special[c] = {
                    delegateType: a,
                    bindType: a,
                    handle: function(c) {
                        var h, e = c.relatedTarget,
                            d = c.handleObj;
                        if (!e ||
                            e !== this && !o.contains(this, e)) c.type = d.origType, h = d.handler.apply(this, arguments), c.type = a;
                        return h
                    }
                }
            });
        o.support.submitBubbles || (o.event.special.submit = {
                setup: function() {
                    if (o.nodeName(this, "form")) return !1;
                    o.event.add(this, "click._submit keypress._submit", function(c) {
                            c = c.target;
                            if ((c = o.nodeName(c, "input") || o.nodeName(c, "button") ? c.form : m) && !o._data(c, "submitBubbles")) o.event.add(c, "submit._submit", function(c) {
                                        c._submit_bubble = !0
                                    }), o._data(c, "submitBubbles", !0)
                        })
                },
                postDispatch: function(c) {
                    c._submit_bubble &&
                    (delete c._submit_bubble, this.parentNode && !c.isTrigger && o.event.simulate("submit", this.parentNode, c, !0))
                },
                teardown: function() {
                    if (o.nodeName(this, "form")) return !1;
                    o.event.remove(this, "._submit")
                }
            });
        o.support.changeBubbles || (o.event.special.change = {
                setup: function() {
                    if (Gb.test(this.nodeName)) {
                        if ("checkbox" === this.type || "radio" === this.type) o.event.add(this, "propertychange._change", function(c) {
                                    "checked" === c.originalEvent.propertyName && (this._just_changed = !0)
                                }), o.event.add(this, "click._change", function(c) {
                                    this._just_changed && !c.isTrigger && (this._just_changed = !1);
                                    o.event.simulate("change", this, c, !0)
                                });
                        return !1
                    }
                    o.event.add(this, "beforeactivate._change", function(c) {
                            c = c.target;
                            Gb.test(c.nodeName) && !o._data(c, "changeBubbles") && (o.event.add(c, "change._change", function(c) {
                                        this.parentNode && (!c.isSimulated && !c.isTrigger) && o.event.simulate("change", this.parentNode, c, !0)
                                    }), o._data(c, "changeBubbles", !0))
                        })
                },
                handle: function(c) {
                    var a = c.target;
                    if (this !== a || c.isSimulated || c.isTrigger || "radio" !== a.type && "checkbox" !== a.type) return c.handleObj.handler.apply(this,
                            arguments)
                },
                teardown: function() {
                    o.event.remove(this, "._change");
                    return !Gb.test(this.nodeName)
                }
            });
        o.support.focusinBubbles || o.each({
                focus: "focusin",
                blur: "focusout"
            }, function(c, a) {
                var h = 0,
                    e = function(c) {
                        o.event.simulate(a, c.target, o.event.fix(c), !0)
                    };
                o.event.special[a] = {
                    setup: function() {
                        0 === h++ && J.addEventListener(c, e, !0)
                    },
                    teardown: function() {
                        0 === --h && J.removeEventListener(c, e, !0)
                    }
                }
            });
        o.fn.extend({
                on: function(c, a, h, e, d) {
                    var f, b;
                    if ("object" === typeof c) {
                        "string" !== typeof a && (h = h || a, a = m);
                        for (f in c) this.on(f,
                                a, h, c[f], d);
                        return this
                    }
                    null == h && null == e ? (e = a, h = a = m) : null == e && ("string" === typeof a ? (e = h, h = m) : (e = h, h = a, a = m));
                    if (!1 === e) e = t;
                    else if (!e) return this;
                    1 === d && (b = e, e = function(c) {
                            o().off(c);
                            return b.apply(this, arguments)
                        }, e.guid = b.guid || (b.guid = o.guid++));
                    return this.each(function() {
                            o.event.add(this, c, e, h, a)
                        })
                },
                one: function(c, a, h, e) {
                    return this.on(c, a, h, e, 1)
                },
                off: function(c, a, h) {
                    var e;
                    if (c && c.preventDefault && c.handleObj) return e = c.handleObj, o(c.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType,
                            e.selector, e.handler), this;
                    if ("object" === typeof c) {
                        for (e in c) this.off(e, a, c[e]);
                        return this
                    }
                    if (!1 === a || "function" === typeof a) h = a, a = m;
                    !1 === h && (h = t);
                    return this.each(function() {
                            o.event.remove(this, c, h, a)
                        })
                },
                trigger: function(c, a) {
                    return this.each(function() {
                            o.event.trigger(c, a, this)
                        })
                },
                triggerHandler: function(c, a) {
                    var h = this[0];
                    if (h) return o.event.trigger(c, a, h, !0)
                }
            });
        var Bc = /^.[^:#\[\.,]*$/,
            ld = /^(?:parents|prev(?:Until|All))/,
            ic = o.expr.match.needsContext,
            md = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        o.fn.extend({
                find: function(c) {
                    var a, h = [],
                        e = this,
                        d = e.length;
                    if ("string" !== typeof c) return this.pushStack(o(c).filter(function() {
                                    for (a = 0; a < d; a++) if (o.contains(e[a], this)) return !0
                                }));
                    for (a = 0; a < d; a++) o.find(c, e[a], h);
                    h = this.pushStack(1 < d ? o.unique(h) : h);
                    h.selector = this.selector ? this.selector + " " + c : c;
                    return h
                },
                has: function(c) {
                    var a, h = o(c, this),
                        e = h.length;
                    return this.filter(function() {
                            for (a = 0; a < e; a++) if (o.contains(this, h[a])) return !0
                        })
                },
                not: function(c) {
                    return this.pushStack(n(this, c || [], !0))
                },
                filter: function(c) {
                    return this.pushStack(n(this,
                            c || [], !1))
                },
                is: function(c) {
                    return !!n(this, "string" === typeof c && ic.test(c) ? o(c) : c || [], !1).length
                },
                closest: function(c, a) {
                    for (var h, e = 0, d = this.length, f = [], b = ic.test(c) || "string" !== typeof c ? o(c, a || this.context) : 0; e < d; e++) for (h = this[e]; h && h !== a; h = h.parentNode) if (11 > h.nodeType && (b ? -1 < b.index(h) : 1 === h.nodeType && o.find.matchesSelector(h, c))) {
                                f.push(h);
                                break
                            }
                    return this.pushStack(1 < f.length ? o.unique(f) : f)
                },
                index: function(c) {
                    return !c ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof c ?
                        o.inArray(this[0], o(c)) : o.inArray(c.jquery ? c[0] : c, this)
                },
                add: function(c, a) {
                    var h = "string" === typeof c ? o(c, a) : o.makeArray(c && c.nodeType ? [c] : c),
                        h = o.merge(this.get(), h);
                    return this.pushStack(o.unique(h))
                },
                addBack: function(c) {
                    return this.add(null == c ? this.prevObject : this.prevObject.filter(c))
                }
            });
        o.each({
                parent: function(c) {
                    return (c = c.parentNode) && 11 !== c.nodeType ? c : null
                },
                parents: function(c) {
                    return o.dir(c, "parentNode")
                },
                parentsUntil: function(c, a, h) {
                    return o.dir(c, "parentNode", h)
                },
                next: function(c) {
                    return q(c,
                        "nextSibling")
                },
                prev: function(c) {
                    return q(c, "previousSibling")
                },
                nextAll: function(c) {
                    return o.dir(c, "nextSibling")
                },
                prevAll: function(c) {
                    return o.dir(c, "previousSibling")
                },
                nextUntil: function(c, a, h) {
                    return o.dir(c, "nextSibling", h)
                },
                prevUntil: function(c, a, h) {
                    return o.dir(c, "previousSibling", h)
                },
                siblings: function(c) {
                    return o.sibling((c.parentNode || {}).firstChild, c)
                },
                children: function(c) {
                    return o.sibling(c.firstChild)
                },
                contents: function(c) {
                    return o.nodeName(c, "iframe") ? c.contentDocument || c.contentWindow.document :
                        o.merge([], c.childNodes)
                }
            }, function(c, a) {
                o.fn[c] = function(h, e) {
                    var d = o.map(this, a, h);
                    "Until" !== c.slice(-5) && (e = h);
                    e && "string" === typeof e && (d = o.filter(e, d));
                    1 < this.length && (md[c] || (d = o.unique(d)), ld.test(c) && (d = d.reverse()));
                    return this.pushStack(d)
                }
            });
        o.extend({
                filter: function(c, a, h) {
                    var e = a[0];
                    h && (c = ":not(" + c + ")");
                    return 1 === a.length && 1 === e.nodeType ? o.find.matchesSelector(e, c) ? [e] : [] : o.find.matches(c, o.grep(a, function(c) {
                                return 1 === c.nodeType
                            }))
                },
                dir: function(c, a, h) {
                    var e = [];
                    for (c = c[a]; c && 9 !== c.nodeType &&
                        (h === m || 1 !== c.nodeType || !o(c).is(h));) 1 === c.nodeType && e.push(c), c = c[a];
                    return e
                },
                sibling: function(c, a) {
                    for (var h = []; c; c = c.nextSibling) 1 === c.nodeType && c !== a && h.push(c);
                    return h
                }
            });
        var Ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            nd = / jQuery\d+="(?:null|\d+)"/g,
            jc = RegExp("\x3c(?:" + Ob + ")[\\s/\x3e]", "i"),
            Hb = /^\s+/,
            kc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            lc = /<([\w:]+)/,
            mc = /<tbody/i,
            od = /<|&#?\w+;/,
            pd = /<(?:script|style|link)/i,
            nb = /^(?:checkbox|radio)$/i,
            qd = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nc = /^$|\/(?:java|ecma)script/i,
            Cc = /^true\/(.*)/,
            rd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ia = {
                option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
                legend: [1, "\x3cfieldset\x3e", "\x3c/fieldset\x3e"],
                area: [1, "\x3cmap\x3e", "\x3c/map\x3e"],
                param: [1, "\x3cobject\x3e", "\x3c/object\x3e"],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e",
                    "\x3c/tbody\x3e\x3c/table\x3e"
                ],
                col: [2, "\x3ctable\x3e\x3ctbody\x3e\x3c/tbody\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                _default: o.support.htmlSerialize ? [0, "", ""] : [1, "X\x3cdiv\x3e", "\x3c/div\x3e"]
            }, Ib = y(J).appendChild(J.createElement("div"));
        ia.optgroup = ia.option;
        ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
        ia.th = ia.td;
        o.fn.extend({
                text: function(c) {
                    return o.access(this, function(c) {
                            return c ===
                                m ? o.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(c))
                        }, null, c, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(c) {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && z(this, c).appendChild(c)
                        })
                },
                prepend: function() {
                    return this.domManip(arguments, function(c) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var a = z(this, c);
                                a.insertBefore(c, a.firstChild)
                            }
                        })
                },
                before: function() {
                    return this.domManip(arguments, function(c) {
                            this.parentNode &&
                                this.parentNode.insertBefore(c, this)
                        })
                },
                after: function() {
                    return this.domManip(arguments, function(c) {
                            this.parentNode && this.parentNode.insertBefore(c, this.nextSibling)
                        })
                },
                remove: function(c, a) {
                    for (var h, e = c ? o.filter(c, this) : this, d = 0; null != (h = e[d]); d++)!a && 1 === h.nodeType && o.cleanData(w(h)), h.parentNode && (a && o.contains(h.ownerDocument, h) && r(w(h, "script")), h.parentNode.removeChild(h));
                    return this
                },
                empty: function() {
                    for (var c, a = 0; null != (c = this[a]); a++) {
                        for (1 === c.nodeType && o.cleanData(w(c, !1)); c.firstChild;) c.removeChild(c.firstChild);
                        c.options && o.nodeName(c, "select") && (c.options.length = 0)
                    }
                    return this
                },
                clone: function(c, a) {
                    c = null == c ? !1 : c;
                    a = null == a ? c : a;
                    return this.map(function() {
                            return o.clone(this, c, a)
                        })
                },
                html: function(c) {
                    return o.access(this, function(c) {
                            var a = this[0] || {}, h = 0,
                                e = this.length;
                            if (c === m) return 1 === a.nodeType ? a.innerHTML.replace(nd, "") : m;
                            if ("string" === typeof c && !pd.test(c) && (o.support.htmlSerialize || !jc.test(c)) && (o.support.leadingWhitespace || !Hb.test(c)) && !ia[(lc.exec(c) || ["", ""])[1].toLowerCase()]) {
                                c = c.replace(kc, "\x3c$1\x3e\x3c/$2\x3e");
                                try {
                                    for (; h < e; h++) a = this[h] || {}, 1 === a.nodeType && (o.cleanData(w(a, !1)), a.innerHTML = c);
                                    a = 0
                                } catch (d) {}
                            }
                            a && this.empty().append(c)
                        }, null, c, arguments.length)
                },
                replaceWith: function() {
                    var c = o.map(this, function(c) {
                            return [c.nextSibling, c.parentNode]
                        }),
                        a = 0;
                    this.domManip(arguments, function(h) {
                            var e = c[a++],
                                d = c[a++];
                            d && (e && e.parentNode !== d && (e = this.nextSibling), o(this).remove(), d.insertBefore(h, e))
                        }, !0);
                    return a ? this : this.remove()
                },
                detach: function(c) {
                    return this.remove(c, !0)
                },
                domManip: function(c, a, h) {
                    c = sa.apply([],
                        c);
                    var e, d, f, b, k = 0,
                        n = this.length,
                        g = this,
                        q = n - 1,
                        t = c[0],
                        j = o.isFunction(t);
                    if (j || !(1 >= n || "string" !== typeof t || o.support.checkClone || !qd.test(t))) return this.each(function(e) {
                                var d = g.eq(e);
                                j && (c[0] = t.call(this, e, d.html()));
                                d.domManip(c, a, h)
                            });
                    if (n && (b = o.buildFragment(c, this[0].ownerDocument, !1, !h && this), e = b.firstChild, 1 === b.childNodes.length && (b = e), e)) {
                        f = o.map(w(b, "script"), p);
                        for (d = f.length; k < n; k++) e = b, k !== q && (e = o.clone(e, !0, !0), d && o.merge(f, w(e, "script"))), a.call(this[k], e, k);
                        if (d) {
                            b = f[f.length - 1].ownerDocument;
                            o.map(f, u);
                            for (k = 0; k < d; k++) if (e = f[k], nc.test(e.type || "") && !o._data(e, "globalEval") && o.contains(b, e)) e.src ? o._evalUrl(e.src) : o.globalEval((e.text || e.textContent || e.innerHTML || "").replace(rd, ""))
                        }
                        b = e = null
                    }
                    return this
                }
            });
        o.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(c, a) {
                o.fn[c] = function(c) {
                    for (var h = 0, e = [], d = o(c), f = d.length - 1; h <= f; h++) c = h === f ? this : this.clone(!0), o(d[h])[a](c), qa.apply(e, c.get());
                    return this.pushStack(e)
                }
            });
        o.extend({
                clone: function(c, a, h) {
                    var e, d, f, b, k, n = o.contains(c.ownerDocument, c);
                    o.support.html5Clone || o.isXMLDoc(c) || !jc.test("\x3c" + c.nodeName + "\x3e") ? f = c.cloneNode(!0) : (Ib.innerHTML = c.outerHTML, Ib.removeChild(f = Ib.firstChild));
                    if ((!o.support.noCloneEvent || !o.support.noCloneChecked) && (1 === c.nodeType || 11 === c.nodeType) && !o.isXMLDoc(c)) {
                        e = w(f);
                        k = w(c);
                        for (b = 0; null != (d = k[b]); ++b) if (e[b]) {
                                var g = e[b],
                                    q = void 0,
                                    t = void 0,
                                    j = void 0;
                                if (1 === g.nodeType) {
                                    q = g.nodeName.toLowerCase();
                                    if (!o.support.noCloneEvent && g[o.expando]) {
                                        j =
                                            o._data(g);
                                        for (t in j.events) o.removeEvent(g, t, j.handle);
                                        g.removeAttribute(o.expando)
                                    }
                                    if ("script" === q && g.text !== d.text) p(g).text = d.text, u(g);
                                    else if ("object" === q) g.parentNode && (g.outerHTML = d.outerHTML), o.support.html5Clone && (d.innerHTML && !o.trim(g.innerHTML)) && (g.innerHTML = d.innerHTML);
                                    else if ("input" === q && nb.test(d.type)) g.defaultChecked = g.checked = d.checked, g.value !== d.value && (g.value = d.value);
                                    else if ("option" === q) g.defaultSelected = g.selected = d.defaultSelected;
                                    else if ("input" === q || "textarea" === q) g.defaultValue =
                                            d.defaultValue
                                }
                            }
                    }
                    if (a) if (h) {
                            k = k || w(c);
                            e = e || w(f);
                            for (b = 0; null != (d = k[b]); b++) v(d, e[b])
                        } else v(c, f);
                    e = w(f, "script");
                    0 < e.length && r(e, !n && w(c, "script"));
                    return f
                },
                buildFragment: function(c, a, h, e) {
                    for (var d, f, b, k, g, n, q = c.length, t = y(a), j = [], l = 0; l < q; l++) if ((f = c[l]) || 0 === f) if ("object" === o.type(f)) o.merge(j, f.nodeType ? [f] : f);
                            else if (od.test(f)) {
                        b = b || t.appendChild(a.createElement("div"));
                        k = (lc.exec(f) || ["", ""])[1].toLowerCase();
                        n = ia[k] || ia._default;
                        b.innerHTML = n[1] + f.replace(kc, "\x3c$1\x3e\x3c/$2\x3e") + n[2];
                        for (d = n[0]; d--;) b = b.lastChild;
                        !o.support.leadingWhitespace && Hb.test(f) && j.push(a.createTextNode(Hb.exec(f)[0]));
                        if (!o.support.tbody) for (d = (f = "table" === k && !mc.test(f) ? b.firstChild : "\x3ctable\x3e" === n[1] && !mc.test(f) ? b : 0) && f.childNodes.length; d--;) o.nodeName(g = f.childNodes[d], "tbody") && !g.childNodes.length && f.removeChild(g);
                        o.merge(j, b.childNodes);
                        for (b.textContent = ""; b.firstChild;) b.removeChild(b.firstChild);
                        b = t.lastChild
                    } else j.push(a.createTextNode(f));
                    b && t.removeChild(b);
                    o.support.appendChecked ||
                        o.grep(w(j, "input"), A);
                    for (l = 0; f = j[l++];) if (!(e && -1 !== o.inArray(f, e)) && (c = o.contains(f.ownerDocument, f), b = w(t.appendChild(f), "script"), c && r(b), h)) for (d = 0; f = b[d++];) nc.test(f.type || "") && h.push(f);
                    return t
                },
                cleanData: function(c, a) {
                    for (var h, e, d, f, b = 0, k = o.expando, g = o.cache, n = o.support.deleteExpando, q = o.event.special; null != (h = c[b]); b++) if (a || o.acceptData(h)) if (f = (d = h[k]) && g[d]) {
                                if (f.events) for (e in f.events) q[e] ? o.event.remove(h, e) : o.removeEvent(h, e, f.handle);
                                g[d] && (delete g[d], n ? delete h[k] : typeof h.removeAttribute !==
                                    $ ? h.removeAttribute(k) : h[k] = null, ha.push(d))
                            }
                },
                _evalUrl: function(c) {
                    return o.ajax({
                            url: c,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        })
                }
            });
        o.fn.extend({
                wrapAll: function(c) {
                    if (o.isFunction(c)) return this.each(function(a) {
                                o(this).wrapAll(c.call(this, a))
                            });
                    if (this[0]) {
                        var a = o(c, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && a.insertBefore(this[0]);
                        a.map(function() {
                                for (var c = this; c.firstChild && 1 === c.firstChild.nodeType;) c = c.firstChild;
                                return c
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(c) {
                    return o.isFunction(c) ?
                        this.each(function(a) {
                            o(this).wrapInner(c.call(this, a))
                        }) : this.each(function() {
                            var a = o(this),
                                h = a.contents();
                            h.length ? h.wrapAll(c) : a.append(c)
                        })
                },
                wrap: function(c) {
                    var a = o.isFunction(c);
                    return this.each(function(h) {
                            o(this).wrapAll(a ? c.call(this, h) : c)
                        })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                            o.nodeName(this, "body") || o(this).replaceWith(this.childNodes)
                        }).end()
                }
            });
        var Qa, Ba, Ca, Jb = /alpha\([^)]*\)/i,
            sd = /opacity\s*=\s*([^)]*)/,
            td = /^(top|right|bottom|left)$/,
            ud = /^(none|table(?!-c[ea]).+)/,
            oc = /^margin/,
            Dc = RegExp("^(" + Ya + ")(.*)$", "i"),
            Wa = RegExp("^(" + Ya + ")(?!px)[a-z%]+$", "i"),
            vd = RegExp("^([+-])\x3d(" + Ya + ")", "i"),
            Qb = {
                BODY: "block"
            }, wd = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, pc = {
                letterSpacing: 0,
                fontWeight: 400
            }, Aa = ["Top", "Right", "Bottom", "Left"],
            Pb = ["Webkit", "O", "Moz", "ms"];
        o.fn.extend({
                css: function(c, a) {
                    return o.access(this, function(c, a, h) {
                            var e, d = {}, f = 0;
                            if (o.isArray(a)) {
                                e = Ba(c);
                                for (h = a.length; f < h; f++) d[a[f]] = o.css(c, a[f], !1, e);
                                return d
                            }
                            return h !== m ? o.style(c, a, h) : o.css(c,
                                a)
                        }, c, a, 1 < arguments.length)
                },
                show: function() {
                    return h(this, !0)
                },
                hide: function() {
                    return h(this)
                },
                toggle: function(a) {
                    return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                            c(this) ? o(this).show() : o(this).hide()
                        })
                }
            });
        o.extend({
                cssHooks: {
                    opacity: {
                        get: function(c, a) {
                            if (a) {
                                var h = Ca(c, "opacity");
                                return "" === h ? "1" : h
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": o.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(c, a, h, e) {
                    if (c && !(3 === c.nodeType || 8 === c.nodeType || !c.style)) {
                        var d, f, b, k = o.camelCase(a),
                            g = c.style;
                        a = o.cssProps[k] || (o.cssProps[k] = B(g, k));
                        b = o.cssHooks[a] || o.cssHooks[k];
                        if (h !== m) {
                            f = typeof h;
                            if ("string" === f && (d = vd.exec(h))) h = (d[1] + 1) * d[2] + parseFloat(o.css(c, a)), f = "number";
                            if (!(null == h || "number" === f && isNaN(h))) if ("number" === f && !o.cssNumber[k] && (h += "px"), !o.support.clearCloneStyle && ("" === h && 0 === a.indexOf("background")) && (g[a] = "inherit"), !b || !("set" in b) || (h = b.set(c, h, e)) !==
                                    m) try {
                                        g[a] = h
                                } catch (n) {}
                        } else return b && "get" in b && (d = b.get(c, !1, e)) !== m ? d : g[a]
                    }
                },
                css: function(c, a, h, e) {
                    var d, f;
                    f = o.camelCase(a);
                    a = o.cssProps[f] || (o.cssProps[f] = B(c.style, f));
                    (f = o.cssHooks[a] || o.cssHooks[f]) && "get" in f && (d = f.get(c, !0, h));
                    d === m && (d = Ca(c, a, e));
                    "normal" === d && a in pc && (d = pc[a]);
                    return "" === h || h ? (c = parseFloat(d), !0 === h || o.isNumeric(c) ? c || 0 : d) : d
                }
            });
        b.getComputedStyle ? (Ba = function(c) {
                return b.getComputedStyle(c, null)
            }, Ca = function(c, a, h) {
                var e, d = (h = h || Ba(c)) ? h.getPropertyValue(a) || h[a] : m,
                    f =
                        c.style;
                h && ("" === d && !o.contains(c.ownerDocument, c) && (d = o.style(c, a)), Wa.test(d) && oc.test(a) && (c = f.width, a = f.minWidth, e = f.maxWidth, f.minWidth = f.maxWidth = f.width = d, d = h.width, f.width = c, f.minWidth = a, f.maxWidth = e));
                return d
            }) : J.documentElement.currentStyle && (Ba = function(c) {
                return c.currentStyle
            }, Ca = function(c, a, h) {
                var e, d, f = (h = h || Ba(c)) ? h[a] : m,
                    b = c.style;
                null == f && (b && b[a]) && (f = b[a]);
                if (Wa.test(f) && !td.test(a)) {
                    h = b.left;
                    if (d = (e = c.runtimeStyle) && e.left) e.left = c.currentStyle.left;
                    b.left = "fontSize" === a ? "1em" :
                        f;
                    f = b.pixelLeft + "px";
                    b.left = h;
                    d && (e.left = d)
                }
                return "" === f ? "auto" : f
            });
        o.each(["height", "width"], function(c, a) {
                o.cssHooks[a] = {
                    get: function(c, h, e) {
                        if (h) return 0 === c.offsetWidth && ud.test(o.css(c, "display")) ? o.swap(c, wd, function() {
                                    return H(c, a, e)
                                }) : H(c, a, e)
                    },
                    set: function(c, h, e) {
                        var d = e && Ba(c);
                        return D(c, h, e ? C(c, a, e, o.support.boxSizing && "border-box" === o.css(c, "boxSizing", !1, d), d) : 0)
                    }
                }
            });
        o.support.opacity || (o.cssHooks.opacity = {
                get: function(c, a) {
                    return sd.test((a && c.currentStyle ? c.currentStyle.filter : c.style.filter) ||
                        "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
                },
                set: function(c, a) {
                    var h = c.style,
                        e = c.currentStyle,
                        d = o.isNumeric(a) ? "alpha(opacity\x3d" + 100 * a + ")" : "",
                        f = e && e.filter || h.filter || "";
                    h.zoom = 1;
                    if ((1 <= a || "" === a) && "" === o.trim(f.replace(Jb, "")) && h.removeAttribute) if (h.removeAttribute("filter"), "" === a || e && !e.filter) return;
                    h.filter = Jb.test(f) ? f.replace(Jb, d) : f + " " + d
                }
            });
        o(function() {
                o.support.reliableMarginRight || (o.cssHooks.marginRight = {
                        get: function(c, a) {
                            if (a) return o.swap(c, {
                                        display: "inline-block"
                                    }, Ca, [c, "marginRight"])
                        }
                    });
                !o.support.pixelPosition && o.fn.position && o.each(["top", "left"], function(c, a) {
                        o.cssHooks[a] = {
                            get: function(c, h) {
                                if (h) return h = Ca(c, a), Wa.test(h) ? o(c).position()[a] + "px" : h
                            }
                        }
                    })
            });
        o.expr && o.expr.filters && (o.expr.filters.hidden = function(c) {
                return 0 >= c.offsetWidth && 0 >= c.offsetHeight || !o.support.reliableHiddenOffsets && "none" === (c.style && c.style.display || o.css(c, "display"))
            }, o.expr.filters.visible = function(c) {
                return !o.expr.filters.hidden(c)
            });
        o.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(c, a) {
                o.cssHooks[c +
                a] = {
                    expand: function(h) {
                        var e = 0,
                            d = {};
                        for (h = "string" === typeof h ? h.split(" ") : [h]; 4 > e; e++) d[c + Aa[e] + a] = h[e] || h[e - 2] || h[0];
                        return d
                    }
                };
                oc.test(c) || (o.cssHooks[c + a].set = D)
            });
        var xd = /%20/g,
            Ec = /\[\]$/,
            qc = /\r?\n/g,
            yd = /^(?:submit|button|image|reset|file)$/i,
            zd = /^(?:input|select|textarea|keygen)/i;
        o.fn.extend({
                serialize: function() {
                    return o.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                            var c = o.prop(this, "elements");
                            return c ? o.makeArray(c) : this
                        }).filter(function() {
                            var c = this.type;
                            return this.name && !o(this).is(":disabled") && zd.test(this.nodeName) && !yd.test(c) && (this.checked || !nb.test(c))
                        }).map(function(c, a) {
                            var h = o(this).val();
                            return null == h ? null : o.isArray(h) ? o.map(h, function(c) {
                                    return {
                                        name: a.name,
                                        value: c.replace(qc, "\r\n")
                                    }
                                }) : {
                                name: a.name,
                                value: h.replace(qc, "\r\n")
                            }
                        }).get()
                }
            });
        o.param = function(c, a) {
            var h, e = [],
                d = function(c, a) {
                    a = o.isFunction(a) ? a() : null == a ? "" : a;
                    e[e.length] = encodeURIComponent(c) + "\x3d" + encodeURIComponent(a)
                };
            a === m && (a = o.ajaxSettings && o.ajaxSettings.traditional);
            if (o.isArray(c) || c.jquery && !o.isPlainObject(c)) o.each(c, function() {
                        d(this.name, this.value)
                    });
            else for (h in c) K(h, c[h], a, d);
            return e.join("\x26").replace(xd, "+")
        };
        o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(c, a) {
                o.fn[a] = function(c, h) {
                    return 0 < arguments.length ? this.on(a, null, c, h) : this.trigger(a)
                }
            });
        o.fn.extend({
                hover: function(c,
                    a) {
                    return this.mouseenter(c).mouseleave(a || c)
                },
                bind: function(c, a, h) {
                    return this.on(c, null, a, h)
                },
                unbind: function(c, a) {
                    return this.off(c, null, a)
                },
                delegate: function(c, a, h, e) {
                    return this.on(a, c, h, e)
                },
                undelegate: function(c, a, h) {
                    return 1 === arguments.length ? this.off(c, "**") : this.off(a, c || "**", h)
                }
            });
        var Ja, za, Kb = o.now(),
            Lb = /\?/,
            Ad = /#.*$/,
            rc = /([?&])_=[^&]*/,
            Bd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
            Cd = /^(?:GET|HEAD)$/,
            Dd = /^\/\//,
            sc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            tc = o.fn.load,
            uc = {}, ob = {}, vc = "*/".concat("*");
        try {
            za = Gc.href
        } catch (Jd) {
            za = J.createElement("a"), za.href = "", za = za.href
        }
        Ja = sc.exec(za.toLowerCase()) || [];
        o.fn.load = function(c, a, h) {
            if ("string" !== typeof c && tc) return tc.apply(this, arguments);
            var e, d, f, b = this,
                k = c.indexOf(" ");
            0 <= k && (e = c.slice(k, c.length), c = c.slice(0, k));
            o.isFunction(a) ? (h = a, a = m) : a && "object" === typeof a && (f = "POST");
            0 < b.length && o.ajax({
                    url: c,
                    type: f,
                    dataType: "html",
                    data: a
                }).done(function(c) {
                    d = arguments;
                    b.html(e ? o("\x3cdiv\x3e").append(o.parseHTML(c)).find(e) : c)
                }).complete(h && function(c,
                    a) {
                    b.each(h, d || [c.responseText, a, c])
                });
            return this
        };
        o.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(c, a) {
                o.fn[a] = function(c) {
                    return this.on(a, c)
                }
            });
        o.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: za,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ja[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
                    accepts: {
                        "*": vc,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": o.parseJSON,
                        "text xml": o.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(c, a) {
                    return a ? E(E(c, o.ajaxSettings), a) : E(o.ajaxSettings, c)
                },
                ajaxPrefilter: I(uc),
                ajaxTransport: I(ob),
                ajax: function(c, a) {
                    function h(c, a, e, d) {
                        var q, x, u, C;
                        C = a;
                        if (2 !== r) {
                            r = 2;
                            k && clearTimeout(k);
                            n = m;
                            b = d ||
                                "";
                            v.readyState = 0 < c ? 4 : 0;
                            d = 200 <= c && 300 > c || 304 === c;
                            if (e) {
                                u = t;
                                for (var z = v, w, H, F, G, A = u.contents, E = u.dataTypes;
                                    "*" === E[0];) E.shift(), H === m && (H = u.mimeType || z.getResponseHeader("Content-Type"));
                                if (H) for (G in A) if (A[G] && A[G].test(H)) {
                                            E.unshift(G);
                                            break
                                        }
                                if (E[0] in e) F = E[0];
                                else {
                                    for (G in e) {
                                        if (!E[0] || u.converters[G + " " + E[0]]) {
                                            F = G;
                                            break
                                        }
                                        w || (w = G)
                                    }
                                    F = F || w
                                }
                                F ? (F !== E[0] && E.unshift(F), u = e[F]) : u = void 0
                            }
                            a: {
                                e = t;
                                w = u;
                                H = v;
                                F = d;
                                var B, K, I, z = {}, A = e.dataTypes.slice();
                                if (A[1]) for (K in e.converters) z[K.toLowerCase()] = e.converters[K];
                                for (G = A.shift(); G;) if (e.responseFields[G] && (H[e.responseFields[G]] = w), !I && (F && e.dataFilter) && (w = e.dataFilter(w, e.dataType)), I = G, G = A.shift()) if ("*" === G) G = I;
                                        else if ("*" !== I && I !== G) {
                                    K = z[I + " " + G] || z["* " + G];
                                    if (!K) for (B in z) if (u = B.split(" "), u[1] === G && (K = z[I + " " + u[0]] || z["* " + u[0]])) {
                                                !0 === K ? K = z[B] : !0 !== z[B] && (G = u[0], A.unshift(u[1]));
                                                break
                                            }
                                    if (!0 !== K) if (K && e["throws"]) w = K(w);
                                        else try {
                                                w = K(w)
                                        } catch (mb) {
                                        u = {
                                            state: "parsererror",
                                            error: K ? mb : "No conversion from " + I + " to " + G
                                        };
                                        break a
                                    }
                                }
                                u = {
                                    state: "success",
                                    data: w
                                }
                            }
                            if (d) t.ifModified &&
                                ((C = v.getResponseHeader("Last-Modified")) && (o.lastModified[f] = C), (C = v.getResponseHeader("etag")) && (o.etag[f] = C)), 204 === c || "HEAD" === t.type ? C = "nocontent" : 304 === c ? C = "notmodified" : (C = u.state, q = u.data, x = u.error, d = !x);
                            else if (x = C, c || !C) C = "error", 0 > c && (c = 0);
                            v.status = c;
                            v.statusText = (a || C) + "";
                            d ? D.resolveWith(j, [q, C, v]) : D.rejectWith(j, [v, C, x]);
                            v.statusCode(p);
                            p = m;
                            g && l.trigger(d ? "ajaxSuccess" : "ajaxError", [v, t, d ? q : x]);
                            y.fireWith(j, [v, C]);
                            g && (l.trigger("ajaxComplete", [v, t]), --o.active || o.event.trigger("ajaxStop"))
                        }
                    }
                    "object" === typeof c && (a = c, c = m);
                    a = a || {};
                    var e, d, f, b, k, g, n, q, t = o.ajaxSetup({}, a),
                        j = t.context || t,
                        l = t.context && (j.nodeType || j.jquery) ? o(j) : o.event,
                        D = o.Deferred(),
                        y = o.Callbacks("once memory"),
                        p = t.statusCode || {}, u = {}, C = {}, r = 0,
                        z = "canceled",
                        v = {
                            readyState: 0,
                            getResponseHeader: function(c) {
                                var a;
                                if (2 === r) {
                                    if (!q) for (q = {}; a = Bd.exec(b);) q[a[1].toLowerCase()] = a[2];
                                    a = q[c.toLowerCase()]
                                }
                                return null == a ? null : a
                            },
                            getAllResponseHeaders: function() {
                                return 2 === r ? b : null
                            },
                            setRequestHeader: function(c, a) {
                                var h = c.toLowerCase();
                                r || (c = C[h] = C[h] || c, u[c] = a);
                                return this
                            },
                            overrideMimeType: function(c) {
                                r || (t.mimeType = c);
                                return this
                            },
                            statusCode: function(c) {
                                var a;
                                if (c) if (2 > r) for (a in c) p[a] = [p[a], c[a]];
                                    else v.always(c[v.status]);
                                return this
                            },
                            abort: function(c) {
                                c = c || z;
                                n && n.abort(c);
                                h(0, c);
                                return this
                            }
                        };
                    D.promise(v).complete = y.add;
                    v.success = v.done;
                    v.error = v.fail;
                    t.url = ((c || t.url || za) + "").replace(Ad, "").replace(Dd, Ja[1] + "//");
                    t.type = a.method || a.type || t.method || t.type;
                    t.dataTypes = o.trim(t.dataType || "*").toLowerCase().match(pa) || [""];
                    null == t.crossDomain && (e = sc.exec(t.url.toLowerCase()), t.crossDomain = !(!e || !(e[1] !== Ja[1] || e[2] !== Ja[2] || (e[3] || ("http:" === e[1] ? "80" : "443")) !== (Ja[3] || ("http:" === Ja[1] ? "80" : "443")))));
                    t.data && (t.processData && "string" !== typeof t.data) && (t.data = o.param(t.data, t.traditional));
                    W(uc, t, a, v);
                    if (2 === r) return v;
                    (g = t.global) && 0 === o.active++ && o.event.trigger("ajaxStart");
                    t.type = t.type.toUpperCase();
                    t.hasContent = !Cd.test(t.type);
                    f = t.url;
                    t.hasContent || (t.data && (f = t.url += (Lb.test(f) ? "\x26" : "?") + t.data, delete t.data), !1 === t.cache && (t.url = rc.test(f) ? f.replace(rc, "$1_\x3d" + Kb++) : f + (Lb.test(f) ? "\x26" : "?") + "_\x3d" + Kb++));
                    t.ifModified && (o.lastModified[f] && v.setRequestHeader("If-Modified-Since", o.lastModified[f]), o.etag[f] && v.setRequestHeader("If-None-Match", o.etag[f]));
                    (t.data && t.hasContent && !1 !== t.contentType || a.contentType) && v.setRequestHeader("Content-Type", t.contentType);
                    v.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + vc + "; q\x3d0.01" : "") :
                        t.accepts["*"]);
                    for (d in t.headers) v.setRequestHeader(d, t.headers[d]);
                    if (t.beforeSend && (!1 === t.beforeSend.call(j, v, t) || 2 === r)) return v.abort();
                    z = "abort";
                    for (d in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) v[d](t[d]);
                    if (n = W(ob, t, a, v)) {
                        v.readyState = 1;
                        g && l.trigger("ajaxSend", [v, t]);
                        t.async && 0 < t.timeout && (k = setTimeout(function() {
                                    v.abort("timeout")
                                }, t.timeout));
                        try {
                            r = 1, n.send(u, h)
                        } catch (w) {
                            if (2 > r) h(-1, w);
                            else throw w;
                        }
                    } else h(-1, "No Transport");
                    return v
                },
                getJSON: function(c, a, h) {
                    return o.get(c, a, h, "json")
                },
                getScript: function(c,
                    a) {
                    return o.get(c, m, a, "script")
                }
            });
        o.each(["get", "post"], function(c, a) {
                o[a] = function(c, h, e, d) {
                    o.isFunction(h) && (d = d || e, e = h, h = m);
                    return o.ajax({
                            url: c,
                            type: a,
                            dataType: d,
                            data: h,
                            success: e
                        })
                }
            });
        o.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(c) {
                        o.globalEval(c);
                        return c
                    }
                }
            });
        o.ajaxPrefilter("script", function(c) {
                c.cache === m && (c.cache = !1);
                c.crossDomain && (c.type =
                    "GET", c.global = !1)
            });
        o.ajaxTransport("script", function(c) {
                if (c.crossDomain) {
                    var a, h = J.head || o("head")[0] || J.documentElement;
                    return {
                        send: function(e, d) {
                            a = J.createElement("script");
                            a.async = !0;
                            c.scriptCharset && (a.charset = c.scriptCharset);
                            a.src = c.url;
                            a.onload = a.onreadystatechange = function(c, h) {
                                if (h || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a), a = null, h || d(200, "success")
                            };
                            h.insertBefore(a, h.firstChild)
                        },
                        abort: function() {
                            if (a) a.onload(m, !0)
                        }
                    }
                }
            });
        var wc = [],
            Mb = /(=)\?(?=&|$)|\?\?/;
        o.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var c = wc.pop() || o.expando + "_" + Kb++;
                    this[c] = !0;
                    return c
                }
            });
        o.ajaxPrefilter("json jsonp", function(c, a, h) {
                var e, d, f, k = !1 !== c.jsonp && (Mb.test(c.url) ? "url" : "string" === typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Mb.test(c.data) && "data");
                if (k || "jsonp" === c.dataTypes[0]) return e = c.jsonpCallback = o.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, k ? c[k] = c[k].replace(Mb,
                        "$1" + e) : !1 !== c.jsonp && (c.url += (Lb.test(c.url) ? "\x26" : "?") + c.jsonp + "\x3d" + e), c.converters["script json"] = function() {
                        f || o.error(e + " was not called");
                        return f[0]
                }, c.dataTypes[0] = "json", d = b[e], b[e] = function() {
                    f = arguments
                }, h.always(function() {
                        b[e] = d;
                        c[e] && (c.jsonpCallback = a.jsonpCallback, wc.push(e));
                        f && o.isFunction(d) && d(f[0]);
                        f = d = m
                    }), "script"
            });
        var Pa, Va, Ed = 0,
            Nb = b.ActiveXObject && function() {
                for (var c in Pa) Pa[c](m, !0)
            };
        o.ajaxSettings.xhr = b.ActiveXObject ? function() {
            var c;
            if (!(c = !this.isLocal && N())) a: {
                    try {
                        c =
                            new b.ActiveXObject("Microsoft.XMLHTTP");
                        break a
                    } catch (a) {}
                    c = void 0
            }
            return c
        } : N;
        Va = o.ajaxSettings.xhr();
        o.support.cors = !! Va && "withCredentials" in Va;
        (Va = o.support.ajax = !! Va) && o.ajaxTransport(function(c) {
                if (!c.crossDomain || o.support.cors) {
                    var a;
                    return {
                        send: function(h, e) {
                            var d, f, k = c.xhr();
                            c.username ? k.open(c.type, c.url, c.async, c.username, c.password) : k.open(c.type, c.url, c.async);
                            if (c.xhrFields) for (f in c.xhrFields) k[f] = c.xhrFields[f];
                            c.mimeType && k.overrideMimeType && k.overrideMimeType(c.mimeType);
                            !c.crossDomain && !h["X-Requested-With"] && (h["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (f in h) k.setRequestHeader(f, h[f])
                            } catch (g) {}
                            k.send(c.hasContent && c.data || null);
                            a = function(h, f) {
                                var b, g, n, q;
                                try {
                                    if (a && (f || 4 === k.readyState)) if (a = m, d && (k.onreadystatechange = o.noop, Nb && delete Pa[d]), f) 4 !== k.readyState && k.abort();
                                        else {
                                            q = {};
                                            b = k.status;
                                            g = k.getAllResponseHeaders();
                                            "string" === typeof k.responseText && (q.text = k.responseText);
                                            try {
                                                n = k.statusText
                                            } catch (t) {
                                                n = ""
                                            }!b && c.isLocal && !c.crossDomain ? b = q.text ? 200 : 404 : 1223 === b && (b = 204)
                                        }
                                } catch (j) {
                                    f ||
                                        e(-1, j)
                                }
                                q && e(b, n, q, g)
                            };
                            c.async ? 4 === k.readyState ? setTimeout(a) : (d = ++Ed, Nb && (Pa || (Pa = {}, o(b).unload(Nb)), Pa[d] = a), k.onreadystatechange = a) : a()
                        },
                        abort: function() {
                            a && a(m, !0)
                        }
                    }
                }
            });
        var Ka, lb, Fd = /^(?:toggle|show|hide)$/,
            xc = RegExp("^(?:([+-])\x3d|)(" + Ya + ")([a-z%]*)$", "i"),
            Gd = /queueHooks$/,
            Xa = [
                function(a, h, e) {
                    var d, f, b, k, g, n = this,
                        q = {}, t = a.style,
                        j = a.nodeType && c(a),
                        l = o._data(a, "fxshow");
                    e.queue || (k = o._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, g = k.empty.fire, k.empty.fire = function() {
                                k.unqueued || g()
                            }),
                        k.unqueued++, n.always(function() {
                                n.always(function() {
                                        k.unqueued--;
                                        o.queue(a, "fx").length || k.empty.fire()
                                    })
                            }));
                    if (1 === a.nodeType && ("height" in h || "width" in h)) e.overflow = [t.overflow, t.overflowX, t.overflowY], "inline" === o.css(a, "display") && "none" === o.css(a, "float") && (!o.support.inlineBlockNeedsLayout || "inline" === F(a.nodeName) ? t.display = "inline-block" : t.zoom = 1);
                    e.overflow && (t.overflow = "hidden", o.support.shrinkWrapBlocks || n.always(function() {
                                t.overflow = e.overflow[0];
                                t.overflowX = e.overflow[1];
                                t.overflowY =
                                    e.overflow[2]
                            }));
                    for (d in h) if (f = h[d], Fd.exec(f) && (delete h[d], b = b || "toggle" === f, f !== (j ? "hide" : "show"))) q[d] = l && l[d] || o.style(a, d);
                    if (!o.isEmptyObject(q)) for (d in l ? "hidden" in l && (j = l.hidden) : l = o._data(a, "fxshow", {}), b && (l.hidden = !j), j ? o(a).show() : n.done(function() {
                                    o(a).hide()
                                }), n.done(function() {
                                    var c;
                                    o._removeData(a, "fxshow");
                                    for (c in q) o.style(a, c, q[c])
                                }), q) h = ca(j ? l[d] : 0, d, n), d in l || (l[d] = h.start, j && (h.end = h.start, h.start = "width" === d || "height" === d ? 1 : 0))
                }
            ],
            Ra = {
                "*": [
                    function(c, a) {
                        var h = this.createTween(c,
                            a),
                            e = h.cur(),
                            d = xc.exec(a),
                            f = d && d[3] || (o.cssNumber[c] ? "" : "px"),
                            b = (o.cssNumber[c] || "px" !== f && +e) && xc.exec(o.css(h.elem, c)),
                            k = 1,
                            g = 20;
                        if (b && b[3] !== f) {
                            f = f || b[3];
                            d = d || [];
                            b = +e || 1;
                            do k = k || ".5", b /= k, o.style(h.elem, c, b + f); while (k !== (k = h.cur() / e) && 1 !== k && --g)
                        }
                        d && (b = h.start = +b || +e || 0, h.unit = f, h.end = d[1] ? b + (d[1] + 1) * d[2] : +d[2]);
                        return h
                    }
                ]
            };
        o.Animation = o.extend(da, {
                tweener: function(c, a) {
                    o.isFunction(c) ? (a = c, c = ["*"]) : c = c.split(" ");
                    for (var h, e = 0, d = c.length; e < d; e++) h = c[e], Ra[h] = Ra[h] || [], Ra[h].unshift(a)
                },
                prefilter: function(c,
                    a) {
                    a ? Xa.unshift(c) : Xa.push(c)
                }
            });
        o.Tween = U;
        U.prototype = {
            constructor: U,
            init: function(c, a, h, e, d, f) {
                this.elem = c;
                this.prop = h;
                this.easing = d || "swing";
                this.options = a;
                this.start = this.now = this.cur();
                this.end = e;
                this.unit = f || (o.cssNumber[h] ? "" : "px")
            },
            cur: function() {
                var c = U.propHooks[this.prop];
                return c && c.get ? c.get(this) : U.propHooks._default.get(this)
            },
            run: function(c) {
                var a, h = U.propHooks[this.prop];
                this.pos = this.options.duration ? a = o.easing[this.easing](c, this.options.duration * c, 0, 1, this.options.duration) : a =
                    c;
                this.now = (this.end - this.start) * a + this.start;
                this.options.step && this.options.step.call(this.elem, this.now, this);
                h && h.set ? h.set(this) : U.propHooks._default.set(this);
                return this
            }
        };
        U.prototype.init.prototype = U.prototype;
        U.propHooks = {
            _default: {
                get: function(c) {
                    if (null != c.elem[c.prop] && (!c.elem.style || null == c.elem.style[c.prop])) return c.elem[c.prop];
                    c = o.css(c.elem, c.prop, "");
                    return !c || "auto" === c ? 0 : c
                },
                set: function(c) {
                    if (o.fx.step[c.prop]) o.fx.step[c.prop](c);
                    else c.elem.style && (null != c.elem.style[o.cssProps[c.prop]] ||
                            o.cssHooks[c.prop]) ? o.style(c.elem, c.prop, c.now + c.unit) : c.elem[c.prop] = c.now
                }
            }
        };
        U.propHooks.scrollTop = U.propHooks.scrollLeft = {
            set: function(c) {
                c.elem.nodeType && c.elem.parentNode && (c.elem[c.prop] = c.now)
            }
        };
        o.each(["toggle", "show", "hide"], function(c, a) {
                var h = o.fn[a];
                o.fn[a] = function(c, e, d) {
                    return null == c || "boolean" === typeof c ? h.apply(this, arguments) : this.animate(S(a, !0), c, e, d)
                }
            });
        o.fn.extend({
                fadeTo: function(a, h, e, d) {
                    return this.filter(c).css("opacity", 0).show().end().animate({
                            opacity: h
                        }, a, e, d)
                },
                animate: function(c,
                    a, h, e) {
                    var d = o.isEmptyObject(c),
                        f = o.speed(a, h, e);
                    a = function() {
                        var a = da(this, o.extend({}, c), f);
                        (d || o._data(this, "finish")) && a.stop(!0)
                    };
                    a.finish = a;
                    return d || !1 === f.queue ? this.each(a) : this.queue(f.queue, a)
                },
                stop: function(c, a, h) {
                    var e = function(c) {
                        var a = c.stop;
                        delete c.stop;
                        a(h)
                    };
                    "string" !== typeof c && (h = a, a = c, c = m);
                    a && !1 !== c && this.queue(c || "fx", []);
                    return this.each(function() {
                            var a = !0,
                                d = null != c && c + "queueHooks",
                                f = o.timers,
                                b = o._data(this);
                            if (d) b[d] && b[d].stop && e(b[d]);
                            else for (d in b) b[d] && (b[d].stop && Gd.test(d)) &&
                                        e(b[d]);
                            for (d = f.length; d--;) if (f[d].elem === this && (null == c || f[d].queue === c)) f[d].anim.stop(h), a = !1, f.splice(d, 1);
                                (a || !h) && o.dequeue(this, c)
                        })
                },
                finish: function(c) {
                    !1 !== c && (c = c || "fx");
                    return this.each(function() {
                            var a, h = o._data(this),
                                e = h[c + "queue"];
                            a = h[c + "queueHooks"];
                            var d = o.timers,
                                f = e ? e.length : 0;
                            h.finish = !0;
                            o.queue(this, c, []);
                            a && a.stop && a.stop.call(this, !0);
                            for (a = d.length; a--;) d[a].elem === this && d[a].queue === c && (d[a].anim.stop(!0), d.splice(a, 1));
                            for (a = 0; a < f; a++) e[a] && e[a].finish && e[a].finish.call(this);
                            delete h.finish
                        })
                }
            });
        o.each({
                slideDown: S("show"),
                slideUp: S("hide"),
                slideToggle: S("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(c, a) {
                o.fn[c] = function(c, h, e) {
                    return this.animate(a, c, h, e)
                }
            });
        o.speed = function(c, a, h) {
            var e = c && "object" === typeof c ? o.extend({}, c) : {
                complete: h || !h && a || o.isFunction(c) && c,
                duration: c,
                easing: h && a || a && !o.isFunction(a) && a
            };
            e.duration = o.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in o.fx.speeds ? o.fx.speeds[e.duration] :
                o.fx.speeds._default;
            if (null == e.queue || !0 === e.queue) e.queue = "fx";
            e.old = e.complete;
            e.complete = function() {
                o.isFunction(e.old) && e.old.call(this);
                e.queue && o.dequeue(this, e.queue)
            };
            return e
        };
        o.easing = {
            linear: function(c) {
                return c
            },
            swing: function(c) {
                return 0.5 - Math.cos(c * Math.PI) / 2
            }
        };
        o.timers = [];
        o.fx = U.prototype.init;
        o.fx.tick = function() {
            var c, a = o.timers,
                h = 0;
            for (Ka = o.now(); h < a.length; h++) c = a[h], !c() && a[h] === c && a.splice(h--, 1);
            a.length || o.fx.stop();
            Ka = m
        };
        o.fx.timer = function(c) {
            c() && o.timers.push(c) && o.fx.start()
        };
        o.fx.interval = 13;
        o.fx.start = function() {
            lb || (lb = setInterval(o.fx.tick, o.fx.interval))
        };
        o.fx.stop = function() {
            clearInterval(lb);
            lb = null
        };
        o.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        o.fx.step = {};
        o.expr && o.expr.filters && (o.expr.filters.animated = function(c) {
                return o.grep(o.timers, function(a) {
                        return c === a.elem
                    }).length
            });
        o.fn.offset = function(c) {
            if (arguments.length) return c === m ? this : this.each(function(a) {
                        o.offset.setOffset(this, c, a)
                    });
            var a, h, e = {
                    top: 0,
                    left: 0
                }, d = (h = this[0]) && h.ownerDocument;
            if (d) {
                a = d.documentElement;
                if (!o.contains(a, h)) return e;
                typeof h.getBoundingClientRect !== $ && (e = h.getBoundingClientRect());
                h = ja(d);
                return {
                    top: e.top + (h.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                    left: e.left + (h.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
                }
            }
        };
        o.offset = {
            setOffset: function(c, a, h) {
                var e = o.css(c, "position");
                "static" === e && (c.style.position = "relative");
                var d = o(c),
                    f = d.offset(),
                    b = o.css(c, "top"),
                    k = o.css(c, "left"),
                    g = {}, n = {};
                ("absolute" === e || "fixed" === e) && -1 < o.inArray("auto", [b, k]) ? (n = d.position(), e = n.top, k = n.left) : (e = parseFloat(b) ||
                    0, k = parseFloat(k) || 0);
                o.isFunction(a) && (a = a.call(c, h, f));
                null != a.top && (g.top = a.top - f.top + e);
                null != a.left && (g.left = a.left - f.left + k);
                "using" in a ? a.using.call(c, g) : d.css(g)
            }
        };
        o.fn.extend({
                position: function() {
                    if (this[0]) {
                        var c, a, h = {
                                top: 0,
                                left: 0
                            }, e = this[0];
                        "fixed" === o.css(e, "position") ? a = e.getBoundingClientRect() : (c = this.offsetParent(), a = this.offset(), o.nodeName(c[0], "html") || (h = c.offset()), h.top += o.css(c[0], "borderTopWidth", !0), h.left += o.css(c[0], "borderLeftWidth", !0));
                        return {
                            top: a.top - h.top - o.css(e,
                                "marginTop", !0),
                            left: a.left - h.left - o.css(e, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                            for (var c = this.offsetParent || ba; c && !o.nodeName(c, "html") && "static" === o.css(c, "position");) c = c.offsetParent;
                            return c || ba
                        })
                }
            });
        o.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(c, a) {
                var h = /Y/.test(a);
                o.fn[c] = function(e) {
                    return o.access(this, function(c, e, d) {
                            var f = ja(c);
                            if (d === m) return f ? a in f ? f[a] : f.document.documentElement[e] : c[e];
                            f ? f.scrollTo(!h ? d : o(f).scrollLeft(), h ?
                                d : o(f).scrollTop()) : c[e] = d
                        }, c, e, arguments.length, null)
                }
            });
        o.each({
                Height: "height",
                Width: "width"
            }, function(c, a) {
                o.each({
                        padding: "inner" + c,
                        content: a,
                        "": "outer" + c
                    }, function(h, e) {
                        o.fn[e] = function(e, d) {
                            var f = arguments.length && (h || "boolean" !== typeof e),
                                b = h || (!0 === e || !0 === d ? "margin" : "border");
                            return o.access(this, function(a, h, e) {
                                    return o.isWindow(a) ? a.document.documentElement["client" + c] : 9 === a.nodeType ? (h = a.documentElement, Math.max(a.body["scroll" + c], h["scroll" + c], a.body["offset" + c], h["offset" + c], h["client" +
                                            c])) : e === m ? o.css(a, h, b) : o.style(a, h, e, b)
                                }, a, f ? e : m, f, null)
                        }
                    })
            });
        o.fn.size = function() {
            return this.length
        };
        o.fn.andSelf = o.fn.addBack;
        j.jQuery = o
    })(window, ChemDoodle.lib);
(function(b) {
        "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b : b(ChemDoodle.lib.jQuery)
    })(function(b) {
        function j(k) {
            var g = k || window.event,
                t = d.call(arguments, 1),
                j = 0,
                l = 0,
                u = 0,
                r = 0;
            k = b.event.fix(g);
            k.type = "mousewheel";
            "detail" in g && (u = -1 * g.detail);
            "wheelDelta" in g && (u = g.wheelDelta);
            "wheelDeltaY" in g && (u = g.wheelDeltaY);
            "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX);
            "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * u, u = 0);
            j = 0 === u ? l : u;
            "deltaY" in g && (j = u = -1 * g.deltaY);
            "deltaX" in g && (l = g.deltaX, 0 === u && (j = -1 * l));
            if (!(0 === u && 0 === l)) {
                1 === g.deltaMode ? (g = b.data(this, "mousewheel-line-height"), j *= g, u *= g, l *= g) : 2 === g.deltaMode && (g = b.data(this, "mousewheel-page-height"), j *= g, u *= g, l *= g);
                r = Math.max(Math.abs(u), Math.abs(l));
                if (!e || r < e) e = r, 120 === e && (f = !0, e /= 40);
                f && (j /= 40, l /= 40, u /= 40);
                j = Math[1 <= j ? "floor" : "ceil"](j / e);
                l = Math[1 <= l ? "floor" : "ceil"](l / e);
                u = Math[1 <= u ? "floor" : "ceil"](u / e);
                k.deltaX = l;
                k.deltaY = u;
                k.deltaFactor = e;
                k.deltaMode = 0;
                t.unshift(k, j, l, u);
                a && clearTimeout(a);
                a = setTimeout(m,
                    200);
                return (b.event.dispatch || b.event.handle).apply(this, t)
            }
        }

        function m() {
            f = e = null
        }
        var l = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            g = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            d = Array.prototype.slice,
            f, a, e;
        if (b.event.fixHooks) for (var t = l.length; t;) b.event.fixHooks[l[--t]] = b.event.mouseHooks;
        var k = b.event.special.mousewheel = {
            version: "3.1.8",
            setup: function() {
                if (this.addEventListener) for (var a = g.length; a;) this.addEventListener(g[--a],
                            j, !1);
                else this.onmousewheel = j;
                b.data(this, "mousewheel-line-height", k.getLineHeight(this));
                b.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener) for (var a = g.length; a;) this.removeEventListener(g[--a], j, !1);
                else this.onmousewheel = null
            },
            getLineHeight: function(a) {
                return parseInt(b(a)["offsetParent" in b.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
            },
            getPageHeight: function(a) {
                return b(a).height()
            }
        };
        b.fn.extend({
                mousewheel: function(a) {
                    return a ? this.bind("mousewheel",
                        a) : this.trigger("mousewheel")
                },
                unmousewheel: function(a) {
                    return this.unbind("mousewheel", a)
                }
            })
    });
(function(b, j) {
        "object" === typeof exports ? module.exports = j(global) : "function" === typeof define && define.amd ? define([], function() {
                return j(b)
            }) : j(b)
    })(ChemDoodle.lib, function(b) {
        function j(c) {
            return f = c
        }

        function m() {
            return f = "undefined" !== typeof Float32Array ? Float32Array : Array
        }
        var l = {};
        if ("undefined" != typeof Float32Array) {
            var g = new Float32Array(1),
                d = new Int32Array(g.buffer);
            l.invsqrt = function(c) {
                g[0] = c;
                d[0] = 1597463007 - (d[0] >> 1);
                var a = g[0];
                return a * (1.5 - 0.5 * c * a * a)
            }
        } else l.invsqrt = function(c) {
                return 1 /
                    Math.sqrt(c)
        };
        var f = null;
        m();
        var a = {
            create: function(c) {
                var a = new f(3);
                c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2]) : a[0] = a[1] = a[2] = 0;
                return a
            },
            createFrom: function(c, a, e) {
                var d = new f(3);
                d[0] = c;
                d[1] = a;
                d[2] = e;
                return d
            },
            set: function(c, a) {
                a[0] = c[0];
                a[1] = c[1];
                a[2] = c[2];
                return a
            },
            equal: function(c, a) {
                return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2])
            },
            add: function(c, a, e) {
                if (!e || c === e) return c[0] += a[0], c[1] += a[1], c[2] += a[2], c;
                e[0] = c[0] + a[0];
                e[1] = c[1] + a[1];
                e[2] = c[2] + a[2];
                return e
            },
            subtract: function(c, a, e) {
                if (!e || c === e) return c[0] -= a[0], c[1] -= a[1], c[2] -= a[2], c;
                e[0] = c[0] - a[0];
                e[1] = c[1] - a[1];
                e[2] = c[2] - a[2];
                return e
            },
            multiply: function(c, a, e) {
                if (!e || c === e) return c[0] *= a[0], c[1] *= a[1], c[2] *= a[2], c;
                e[0] = c[0] * a[0];
                e[1] = c[1] * a[1];
                e[2] = c[2] * a[2];
                return e
            },
            negate: function(c, a) {
                a || (a = c);
                a[0] = -c[0];
                a[1] = -c[1];
                a[2] = -c[2];
                return a
            },
            scale: function(c, a, e) {
                if (!e || c === e) return c[0] *= a, c[1] *= a, c[2] *= a, c;
                e[0] = c[0] * a;
                e[1] = c[1] * a;
                e[2] = c[2] * a;
                return e
            },
            normalize: function(c, a) {
                a || (a = c);
                var e = c[0],
                    d = c[1],
                    f = c[2],
                    b = Math.sqrt(e * e + d * d + f * f);
                if (b) {
                    if (1 === b) return a[0] = e, a[1] = d, a[2] = f, a
                } else return a[0] = 0, a[1] = 0, a[2] = 0, a;
                b = 1 / b;
                a[0] = e * b;
                a[1] = d * b;
                a[2] = f * b;
                return a
            },
            cross: function(c, a, e) {
                e || (e = c);
                var d = c[0],
                    f = c[1];
                c = c[2];
                var b = a[0],
                    k = a[1];
                a = a[2];
                e[0] = f * a - c * k;
                e[1] = c * b - d * a;
                e[2] = d * k - f * b;
                return e
            },
            length: function(c) {
                var a = c[0],
                    e = c[1];
                c = c[2];
                return Math.sqrt(a * a + e * e + c * c)
            },
            squaredLength: function(c) {
                var a = c[0],
                    e = c[1];
                c = c[2];
                return a * a + e * e + c * c
            },
            dot: function(c, a) {
                return c[0] * a[0] + c[1] * a[1] + c[2] * a[2]
            },
            direction: function(c,
                a, e) {
                e || (e = c);
                var d = c[0] - a[0],
                    f = c[1] - a[1];
                c = c[2] - a[2];
                a = Math.sqrt(d * d + f * f + c * c);
                if (!a) return e[0] = 0, e[1] = 0, e[2] = 0, e;
                a = 1 / a;
                e[0] = d * a;
                e[1] = f * a;
                e[2] = c * a;
                return e
            },
            lerp: function(c, a, e, d) {
                d || (d = c);
                d[0] = c[0] + e * (a[0] - c[0]);
                d[1] = c[1] + e * (a[1] - c[1]);
                d[2] = c[2] + e * (a[2] - c[2]);
                return d
            },
            dist: function(c, a) {
                var e = a[0] - c[0],
                    d = a[1] - c[1],
                    f = a[2] - c[2];
                return Math.sqrt(e * e + d * d + f * f)
            }
        }, e = null,
            t = new f(4);
        a.unproject = function(c, a, d, f, b) {
            b || (b = c);
            e || (e = p.create());
            var k = e;
            t[0] = 2 * (c[0] - f[0]) / f[2] - 1;
            t[1] = 2 * (c[1] - f[1]) / f[3] - 1;
            t[2] =
                2 * c[2] - 1;
            t[3] = 1;
            p.multiply(d, a, k);
            if (!p.inverse(k)) return null;
            p.multiplyVec4(k, t);
            if (0 === t[3]) return null;
            b[0] = t[0] / t[3];
            b[1] = t[1] / t[3];
            b[2] = t[2] / t[3];
            return b
        };
        var k = a.createFrom(1, 0, 0),
            q = a.createFrom(0, 1, 0),
            n = a.createFrom(0, 0, 1),
            y = a.create();
        a.rotationTo = function(c, h, e) {
            e || (e = u.create());
            var d = a.dot(c, h);
            if (1 <= d) u.set(r, e);
            else if (-0.999999 > d) a.cross(k, c, y), 1E-6 > a.length(y) && a.cross(q, c, y), 1E-6 > a.length(y) && a.cross(n, c, y), a.normalize(y), u.fromAngleAxis(Math.PI, y, e);
            else {
                var d = Math.sqrt(2 * (1 + d)),
                    f = 1 / d;
                a.cross(c, h, y);
                e[0] = y[0] * f;
                e[1] = y[1] * f;
                e[2] = y[2] * f;
                e[3] = 0.5 * d;
                u.normalize(e)
            }
            1 < e[3] ? e[3] = 1 : -1 > e[3] && (e[3] = -1);
            return e
        };
        a.str = function(c) {
            return "[" + c[0] + ", " + c[1] + ", " + c[2] + "]"
        };
        var z = {
            create: function(c) {
                var a = new f(9);
                c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8]) : a[0] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = 0;
                return a
            },
            createFrom: function(c, a, e, d, b, k, g, n, t) {
                var q = new f(9);
                q[0] = c;
                q[1] = a;
                q[2] = e;
                q[3] = d;
                q[4] = b;
                q[5] = k;
                q[6] = g;
                q[7] = n;
                q[8] = t;
                return q
            },
            determinant: function(c) {
                var a = c[3],
                    e = c[4],
                    d = c[5],
                    f = c[6],
                    b = c[7],
                    k = c[8];
                return c[0] * (k * e - d * b) + c[1] * (-k * a + d * f) + c[2] * (b * a - e * f)
            },
            inverse: function(c, a) {
                var e = c[0],
                    d = c[1],
                    f = c[2],
                    b = c[3],
                    k = c[4],
                    g = c[5],
                    n = c[6],
                    t = c[7],
                    q = c[8],
                    j = q * k - g * t,
                    l = -q * b + g * n,
                    y = t * b - k * n,
                    m = e * j + d * l + f * y;
                if (!m) return null;
                m = 1 / m;
                a || (a = z.create());
                a[0] = j * m;
                a[1] = (-q * d + f * t) * m;
                a[2] = (g * d - f * k) * m;
                a[3] = l * m;
                a[4] = (q * e - f * n) * m;
                a[5] = (-g * e + f * b) * m;
                a[6] = y * m;
                a[7] = (-t * e + d * n) * m;
                a[8] = (k * e - d * b) * m;
                return a
            },
            multiply: function(c, a, e) {
                e || (e = c);
                var d = c[0],
                    f = c[1],
                    b = c[2],
                    k = c[3],
                    g = c[4],
                    n = c[5],
                    t = c[6],
                    q = c[7];
                c = c[8];
                var j = a[0],
                    l = a[1],
                    y = a[2],
                    m = a[3],
                    u = a[4],
                    p = a[5],
                    r = a[6],
                    z = a[7];
                a = a[8];
                e[0] = j * d + l * k + y * t;
                e[1] = j * f + l * g + y * q;
                e[2] = j * b + l * n + y * c;
                e[3] = m * d + u * k + p * t;
                e[4] = m * f + u * g + p * q;
                e[5] = m * b + u * n + p * c;
                e[6] = r * d + z * k + a * t;
                e[7] = r * f + z * g + a * q;
                e[8] = r * b + z * n + a * c;
                return e
            },
            multiplyVec2: function(c, a, e) {
                e || (e = a);
                var d = a[0];
                a = a[1];
                e[0] = d * c[0] + a * c[3] + c[6];
                e[1] = d * c[1] + a * c[4] + c[7];
                return e
            },
            multiplyVec3: function(c, a, e) {
                e || (e = a);
                var d = a[0],
                    f = a[1];
                a = a[2];
                e[0] = d * c[0] + f * c[3] + a * c[6];
                e[1] = d * c[1] + f * c[4] + a * c[7];
                e[2] = d * c[2] + f * c[5] + a * c[8];
                return e
            },
            set: function(c, a) {
                a[0] = c[0];
                a[1] = c[1];
                a[2] = c[2];
                a[3] = c[3];
                a[4] = c[4];
                a[5] = c[5];
                a[6] = c[6];
                a[7] = c[7];
                a[8] = c[8];
                return a
            },
            equal: function(c, a) {
                return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3]) && 1E-6 > Math.abs(c[4] - a[4]) && 1E-6 > Math.abs(c[5] - a[5]) && 1E-6 > Math.abs(c[6] - a[6]) && 1E-6 > Math.abs(c[7] - a[7]) && 1E-6 > Math.abs(c[8] - a[8])
            },
            identity: function(c) {
                c || (c = z.create());
                c[0] = 1;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 1;
                c[5] =
                    0;
                c[6] = 0;
                c[7] = 0;
                c[8] = 1;
                return c
            },
            transpose: function(c, a) {
                if (!a || c === a) {
                    var e = c[1],
                        d = c[2],
                        f = c[5];
                    c[1] = c[3];
                    c[2] = c[6];
                    c[3] = e;
                    c[5] = c[7];
                    c[6] = d;
                    c[7] = f;
                    return c
                }
                a[0] = c[0];
                a[1] = c[3];
                a[2] = c[6];
                a[3] = c[1];
                a[4] = c[4];
                a[5] = c[7];
                a[6] = c[2];
                a[7] = c[5];
                a[8] = c[8];
                return a
            },
            toMat4: function(c, a) {
                a || (a = p.create());
                a[15] = 1;
                a[14] = 0;
                a[13] = 0;
                a[12] = 0;
                a[11] = 0;
                a[10] = c[8];
                a[9] = c[7];
                a[8] = c[6];
                a[7] = 0;
                a[6] = c[5];
                a[5] = c[4];
                a[4] = c[3];
                a[3] = 0;
                a[2] = c[2];
                a[1] = c[1];
                a[0] = c[0];
                return a
            },
            str: function(c) {
                return "[" + c[0] + ", " + c[1] + ", " + c[2] +
                    ", " + c[3] + ", " + c[4] + ", " + c[5] + ", " + c[6] + ", " + c[7] + ", " + c[8] + "]"
            }
        }, p = {
                create: function(c) {
                    var a = new f(16);
                    c && (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3], a[4] = c[4], a[5] = c[5], a[6] = c[6], a[7] = c[7], a[8] = c[8], a[9] = c[9], a[10] = c[10], a[11] = c[11], a[12] = c[12], a[13] = c[13], a[14] = c[14], a[15] = c[15]);
                    return a
                },
                createFrom: function(c, a, e, d, b, k, g, n, t, q, j, l, y, m, u, p) {
                    var r = new f(16);
                    r[0] = c;
                    r[1] = a;
                    r[2] = e;
                    r[3] = d;
                    r[4] = b;
                    r[5] = k;
                    r[6] = g;
                    r[7] = n;
                    r[8] = t;
                    r[9] = q;
                    r[10] = j;
                    r[11] = l;
                    r[12] = y;
                    r[13] = m;
                    r[14] = u;
                    r[15] = p;
                    return r
                },
                set: function(c,
                    a) {
                    a[0] = c[0];
                    a[1] = c[1];
                    a[2] = c[2];
                    a[3] = c[3];
                    a[4] = c[4];
                    a[5] = c[5];
                    a[6] = c[6];
                    a[7] = c[7];
                    a[8] = c[8];
                    a[9] = c[9];
                    a[10] = c[10];
                    a[11] = c[11];
                    a[12] = c[12];
                    a[13] = c[13];
                    a[14] = c[14];
                    a[15] = c[15];
                    return a
                },
                equal: function(c, a) {
                    return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] - a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3]) && 1E-6 > Math.abs(c[4] - a[4]) && 1E-6 > Math.abs(c[5] - a[5]) && 1E-6 > Math.abs(c[6] - a[6]) && 1E-6 > Math.abs(c[7] - a[7]) && 1E-6 > Math.abs(c[8] - a[8]) && 1E-6 > Math.abs(c[9] - a[9]) && 1E-6 > Math.abs(c[10] - a[10]) && 1E-6 > Math.abs(c[11] - a[11]) && 1E-6 > Math.abs(c[12] - a[12]) && 1E-6 > Math.abs(c[13] - a[13]) && 1E-6 > Math.abs(c[14] - a[14]) && 1E-6 > Math.abs(c[15] - a[15])
                },
                identity: function(c) {
                    c || (c = p.create());
                    c[0] = 1;
                    c[1] = 0;
                    c[2] = 0;
                    c[3] = 0;
                    c[4] = 0;
                    c[5] = 1;
                    c[6] = 0;
                    c[7] = 0;
                    c[8] = 0;
                    c[9] = 0;
                    c[10] = 1;
                    c[11] = 0;
                    c[12] = 0;
                    c[13] = 0;
                    c[14] = 0;
                    c[15] = 1;
                    return c
                },
                transpose: function(c, a) {
                    if (!a || c === a) {
                        var e = c[1],
                            d = c[2],
                            f = c[3],
                            b = c[6],
                            k = c[7],
                            g = c[11];
                        c[1] = c[4];
                        c[2] = c[8];
                        c[3] = c[12];
                        c[4] = e;
                        c[6] = c[9];
                        c[7] = c[13];
                        c[8] = d;
                        c[9] = b;
                        c[11] = c[14];
                        c[12] = f;
                        c[13] = k;
                        c[14] = g;
                        return c
                    }
                    a[0] = c[0];
                    a[1] = c[4];
                    a[2] = c[8];
                    a[3] = c[12];
                    a[4] = c[1];
                    a[5] = c[5];
                    a[6] = c[9];
                    a[7] = c[13];
                    a[8] = c[2];
                    a[9] = c[6];
                    a[10] = c[10];
                    a[11] = c[14];
                    a[12] = c[3];
                    a[13] = c[7];
                    a[14] = c[11];
                    a[15] = c[15];
                    return a
                },
                determinant: function(c) {
                    var a = c[0],
                        e = c[1],
                        d = c[2],
                        f = c[3],
                        b = c[4],
                        k = c[5],
                        g = c[6],
                        n = c[7],
                        t = c[8],
                        q = c[9],
                        j = c[10],
                        l = c[11],
                        y = c[12],
                        m = c[13],
                        u = c[14];
                    c = c[15];
                    return y * q * g * f - t * m * g * f - y * k * j * f + b * m * j * f + t * k * u * f - b * q * u * f - y * q * d * n + t * m * d * n + y * e * j * n - a * m * j * n - t * e * u * n + a * q * u * n + y * k * d * l - b * m * d * l - y * e * g * l + a * m * g * l + b * e * u * l - a * k * u * l - t * k * d * c + b * q * d *
                        c + t * e * g * c - a * q * g * c - b * e * j * c + a * k * j * c
                },
                inverse: function(c, a) {
                    a || (a = c);
                    var e = c[0],
                        d = c[1],
                        f = c[2],
                        b = c[3],
                        k = c[4],
                        g = c[5],
                        n = c[6],
                        t = c[7],
                        q = c[8],
                        j = c[9],
                        l = c[10],
                        y = c[11],
                        m = c[12],
                        u = c[13],
                        p = c[14],
                        r = c[15],
                        z = e * g - d * k,
                        v = e * n - f * k,
                        w = e * t - b * k,
                        A = d * n - f * g,
                        B = d * t - b * g,
                        ba = f * t - b * n,
                        ea = q * u - j * m,
                        fa = q * p - l * m,
                        X = q * r - y * m,
                        ha = j * p - l * u,
                        sa = j * r - y * u,
                        qa = l * r - y * p,
                        R = z * qa - v * sa + w * ha + A * X - B * fa + ba * ea;
                    if (!R) return null;
                    R = 1 / R;
                    a[0] = (g * qa - n * sa + t * ha) * R;
                    a[1] = (-d * qa + f * sa - b * ha) * R;
                    a[2] = (u * ba - p * B + r * A) * R;
                    a[3] = (-j * ba + l * B - y * A) * R;
                    a[4] = (-k * qa + n * X - t * fa) * R;
                    a[5] = (e * qa - f *
                        X + b * fa) * R;
                    a[6] = (-m * ba + p * w - r * v) * R;
                    a[7] = (q * ba - l * w + y * v) * R;
                    a[8] = (k * sa - g * X + t * ea) * R;
                    a[9] = (-e * sa + d * X - b * ea) * R;
                    a[10] = (m * B - u * w + r * z) * R;
                    a[11] = (-q * B + j * w - y * z) * R;
                    a[12] = (-k * ha + g * fa - n * ea) * R;
                    a[13] = (e * ha - d * fa + f * ea) * R;
                    a[14] = (-m * A + u * v - p * z) * R;
                    a[15] = (q * A - j * v + l * z) * R;
                    return a
                },
                toRotationMat: function(c, a) {
                    a || (a = p.create());
                    a[0] = c[0];
                    a[1] = c[1];
                    a[2] = c[2];
                    a[3] = c[3];
                    a[4] = c[4];
                    a[5] = c[5];
                    a[6] = c[6];
                    a[7] = c[7];
                    a[8] = c[8];
                    a[9] = c[9];
                    a[10] = c[10];
                    a[11] = c[11];
                    a[12] = 0;
                    a[13] = 0;
                    a[14] = 0;
                    a[15] = 1;
                    return a
                },
                toMat3: function(c, a) {
                    a || (a = z.create());
                    a[0] = c[0];
                    a[1] = c[1];
                    a[2] = c[2];
                    a[3] = c[4];
                    a[4] = c[5];
                    a[5] = c[6];
                    a[6] = c[8];
                    a[7] = c[9];
                    a[8] = c[10];
                    return a
                },
                toInverseMat3: function(c, a) {
                    var e = c[0],
                        d = c[1],
                        f = c[2],
                        b = c[4],
                        k = c[5],
                        g = c[6],
                        n = c[8],
                        t = c[9],
                        q = c[10],
                        j = q * k - g * t,
                        l = -q * b + g * n,
                        y = t * b - k * n,
                        m = e * j + d * l + f * y;
                    if (!m) return null;
                    m = 1 / m;
                    a || (a = z.create());
                    a[0] = j * m;
                    a[1] = (-q * d + f * t) * m;
                    a[2] = (g * d - f * k) * m;
                    a[3] = l * m;
                    a[4] = (q * e - f * n) * m;
                    a[5] = (-g * e + f * b) * m;
                    a[6] = y * m;
                    a[7] = (-t * e + d * n) * m;
                    a[8] = (k * e - d * b) * m;
                    return a
                },
                multiply: function(c, a, e) {
                    e || (e = c);
                    var d = c[0],
                        f = c[1],
                        b = c[2],
                        k = c[3],
                        g = c[4],
                        n =
                            c[5],
                        t = c[6],
                        q = c[7],
                        j = c[8],
                        l = c[9],
                        y = c[10],
                        m = c[11],
                        u = c[12],
                        p = c[13],
                        r = c[14];
                    c = c[15];
                    var z = a[0],
                        v = a[1],
                        w = a[2],
                        A = a[3];
                    e[0] = z * d + v * g + w * j + A * u;
                    e[1] = z * f + v * n + w * l + A * p;
                    e[2] = z * b + v * t + w * y + A * r;
                    e[3] = z * k + v * q + w * m + A * c;
                    z = a[4];
                    v = a[5];
                    w = a[6];
                    A = a[7];
                    e[4] = z * d + v * g + w * j + A * u;
                    e[5] = z * f + v * n + w * l + A * p;
                    e[6] = z * b + v * t + w * y + A * r;
                    e[7] = z * k + v * q + w * m + A * c;
                    z = a[8];
                    v = a[9];
                    w = a[10];
                    A = a[11];
                    e[8] = z * d + v * g + w * j + A * u;
                    e[9] = z * f + v * n + w * l + A * p;
                    e[10] = z * b + v * t + w * y + A * r;
                    e[11] = z * k + v * q + w * m + A * c;
                    z = a[12];
                    v = a[13];
                    w = a[14];
                    A = a[15];
                    e[12] = z * d + v * g + w * j + A * u;
                    e[13] = z * f + v * n + w * l + A * p;
                    e[14] = z * b + v * t + w * y + A * r;
                    e[15] = z * k + v * q + w * m + A * c;
                    return e
                },
                multiplyVec3: function(c, a, e) {
                    e || (e = a);
                    var d = a[0],
                        f = a[1];
                    a = a[2];
                    e[0] = c[0] * d + c[4] * f + c[8] * a + c[12];
                    e[1] = c[1] * d + c[5] * f + c[9] * a + c[13];
                    e[2] = c[2] * d + c[6] * f + c[10] * a + c[14];
                    return e
                },
                multiplyVec4: function(c, a, e) {
                    e || (e = a);
                    var d = a[0],
                        f = a[1],
                        b = a[2];
                    a = a[3];
                    e[0] = c[0] * d + c[4] * f + c[8] * b + c[12] * a;
                    e[1] = c[1] * d + c[5] * f + c[9] * b + c[13] * a;
                    e[2] = c[2] * d + c[6] * f + c[10] * b + c[14] * a;
                    e[3] = c[3] * d + c[7] * f + c[11] * b + c[15] * a;
                    return e
                },
                translate: function(c, a, e) {
                    var d = a[0],
                        f = a[1];
                    a = a[2];
                    var b, k,
                        g, n, t, q, j, l, y, m, u, p;
                    if (!e || c === e) return c[12] = c[0] * d + c[4] * f + c[8] * a + c[12], c[13] = c[1] * d + c[5] * f + c[9] * a + c[13], c[14] = c[2] * d + c[6] * f + c[10] * a + c[14], c[15] = c[3] * d + c[7] * f + c[11] * a + c[15], c;
                    b = c[0];
                    k = c[1];
                    g = c[2];
                    n = c[3];
                    t = c[4];
                    q = c[5];
                    j = c[6];
                    l = c[7];
                    y = c[8];
                    m = c[9];
                    u = c[10];
                    p = c[11];
                    e[0] = b;
                    e[1] = k;
                    e[2] = g;
                    e[3] = n;
                    e[4] = t;
                    e[5] = q;
                    e[6] = j;
                    e[7] = l;
                    e[8] = y;
                    e[9] = m;
                    e[10] = u;
                    e[11] = p;
                    e[12] = b * d + t * f + y * a + c[12];
                    e[13] = k * d + q * f + m * a + c[13];
                    e[14] = g * d + j * f + u * a + c[14];
                    e[15] = n * d + l * f + p * a + c[15];
                    return e
                },
                scale: function(c, a, e) {
                    var d = a[0],
                        f = a[1];
                    a = a[2];
                    if (!e || c === e) return c[0] *= d, c[1] *= d, c[2] *= d, c[3] *= d, c[4] *= f, c[5] *= f, c[6] *= f, c[7] *= f, c[8] *= a, c[9] *= a, c[10] *= a, c[11] *= a, c;
                    e[0] = c[0] * d;
                    e[1] = c[1] * d;
                    e[2] = c[2] * d;
                    e[3] = c[3] * d;
                    e[4] = c[4] * f;
                    e[5] = c[5] * f;
                    e[6] = c[6] * f;
                    e[7] = c[7] * f;
                    e[8] = c[8] * a;
                    e[9] = c[9] * a;
                    e[10] = c[10] * a;
                    e[11] = c[11] * a;
                    e[12] = c[12];
                    e[13] = c[13];
                    e[14] = c[14];
                    e[15] = c[15];
                    return e
                },
                rotate: function(c, a, e, d) {
                    var f = e[0],
                        b = e[1];
                    e = e[2];
                    var k = Math.sqrt(f * f + b * b + e * e),
                        g, n, t, q, j, l, y, m, u, p, r, z, v, w, A, B, ba, ea, fa, X;
                    if (!k) return null;
                    1 !== k && (k = 1 / k, f *= k, b *= k, e *= k);
                    g = Math.sin(a);
                    n = Math.cos(a);
                    t = 1 - n;
                    a = c[0];
                    k = c[1];
                    q = c[2];
                    j = c[3];
                    l = c[4];
                    y = c[5];
                    m = c[6];
                    u = c[7];
                    p = c[8];
                    r = c[9];
                    z = c[10];
                    v = c[11];
                    w = f * f * t + n;
                    A = b * f * t + e * g;
                    B = e * f * t - b * g;
                    ba = f * b * t - e * g;
                    ea = b * b * t + n;
                    fa = e * b * t + f * g;
                    X = f * e * t + b * g;
                    f = b * e * t - f * g;
                    b = e * e * t + n;
                    d ? c !== d && (d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]) : d = c;
                    d[0] = a * w + l * A + p * B;
                    d[1] = k * w + y * A + r * B;
                    d[2] = q * w + m * A + z * B;
                    d[3] = j * w + u * A + v * B;
                    d[4] = a * ba + l * ea + p * fa;
                    d[5] = k * ba + y * ea + r * fa;
                    d[6] = q * ba + m * ea + z * fa;
                    d[7] = j * ba + u * ea + v * fa;
                    d[8] = a * X + l * f + p * b;
                    d[9] = k * X + y * f + r * b;
                    d[10] = q * X + m * f + z * b;
                    d[11] = j * X + u * f + v * b;
                    return d
                },
                rotateX: function(c, a, e) {
                    var d = Math.sin(a);
                    a = Math.cos(a);
                    var f = c[4],
                        b = c[5],
                        k = c[6],
                        g = c[7],
                        n = c[8],
                        t = c[9],
                        q = c[10],
                        j = c[11];
                    e ? c !== e && (e[0] = c[0], e[1] = c[1], e[2] = c[2], e[3] = c[3], e[12] = c[12], e[13] = c[13], e[14] = c[14], e[15] = c[15]) : e = c;
                    e[4] = f * a + n * d;
                    e[5] = b * a + t * d;
                    e[6] = k * a + q * d;
                    e[7] = g * a + j * d;
                    e[8] = f * -d + n * a;
                    e[9] = b * -d + t * a;
                    e[10] = k * -d + q * a;
                    e[11] = g * -d + j * a;
                    return e
                },
                rotateY: function(c, a, e) {
                    var d = Math.sin(a);
                    a = Math.cos(a);
                    var f = c[0],
                        b = c[1],
                        k = c[2],
                        g = c[3],
                        n = c[8],
                        t = c[9],
                        q = c[10],
                        j = c[11];
                    e ? c !== e && (e[4] = c[4], e[5] = c[5], e[6] = c[6], e[7] =
                        c[7], e[12] = c[12], e[13] = c[13], e[14] = c[14], e[15] = c[15]) : e = c;
                    e[0] = f * a + n * -d;
                    e[1] = b * a + t * -d;
                    e[2] = k * a + q * -d;
                    e[3] = g * a + j * -d;
                    e[8] = f * d + n * a;
                    e[9] = b * d + t * a;
                    e[10] = k * d + q * a;
                    e[11] = g * d + j * a;
                    return e
                },
                rotateZ: function(c, a, e) {
                    var d = Math.sin(a);
                    a = Math.cos(a);
                    var f = c[0],
                        b = c[1],
                        k = c[2],
                        g = c[3],
                        n = c[4],
                        t = c[5],
                        q = c[6],
                        j = c[7];
                    e ? c !== e && (e[8] = c[8], e[9] = c[9], e[10] = c[10], e[11] = c[11], e[12] = c[12], e[13] = c[13], e[14] = c[14], e[15] = c[15]) : e = c;
                    e[0] = f * a + n * d;
                    e[1] = b * a + t * d;
                    e[2] = k * a + q * d;
                    e[3] = g * a + j * d;
                    e[4] = f * -d + n * a;
                    e[5] = b * -d + t * a;
                    e[6] = k * -d + q * a;
                    e[7] = g * -d + j * a;
                    return e
                },
                frustum: function(c, a, e, d, f, b, k) {
                    k || (k = p.create());
                    var g = a - c,
                        n = d - e,
                        t = b - f;
                    k[0] = 2 * f / g;
                    k[1] = 0;
                    k[2] = 0;
                    k[3] = 0;
                    k[4] = 0;
                    k[5] = 2 * f / n;
                    k[6] = 0;
                    k[7] = 0;
                    k[8] = (a + c) / g;
                    k[9] = (d + e) / n;
                    k[10] = -(b + f) / t;
                    k[11] = -1;
                    k[12] = 0;
                    k[13] = 0;
                    k[14] = -(2 * b * f) / t;
                    k[15] = 0;
                    return k
                },
                perspective: function(c, a, e, d, f) {
                    c = e * Math.tan(c * Math.PI / 360);
                    a *= c;
                    return p.frustum(-a, a, -c, c, e, d, f)
                },
                ortho: function(c, a, e, d, f, b, k) {
                    k || (k = p.create());
                    var g = a - c,
                        n = d - e,
                        t = b - f;
                    k[0] = 2 / g;
                    k[1] = 0;
                    k[2] = 0;
                    k[3] = 0;
                    k[4] = 0;
                    k[5] = 2 / n;
                    k[6] = 0;
                    k[7] = 0;
                    k[8] = 0;
                    k[9] = 0;
                    k[10] = -2 / t;
                    k[11] = 0;
                    k[12] = -(c + a) / g;
                    k[13] = -(d + e) / n;
                    k[14] = -(b + f) / t;
                    k[15] = 1;
                    return k
                },
                lookAt: function(c, a, e, d) {
                    d || (d = p.create());
                    var f, b, k, g, n, t, q, j, l = c[0],
                        y = c[1];
                    c = c[2];
                    k = e[0];
                    g = e[1];
                    b = e[2];
                    q = a[0];
                    e = a[1];
                    f = a[2];
                    if (l === q && y === e && c === f) return p.identity(d);
                    a = l - q;
                    e = y - e;
                    q = c - f;
                    j = 1 / Math.sqrt(a * a + e * e + q * q);
                    a *= j;
                    e *= j;
                    q *= j;
                    f = g * q - b * e;
                    b = b * a - k * q;
                    k = k * e - g * a;
                    (j = Math.sqrt(f * f + b * b + k * k)) ? (j = 1 / j, f *= j, b *= j, k *= j) : k = b = f = 0;
                    g = e * k - q * b;
                    n = q * f - a * k;
                    t = a * b - e * f;
                    (j = Math.sqrt(g * g + n * n + t * t)) ? (j = 1 / j, g *= j, n *= j, t *= j) : t = n = g = 0;
                    d[0] = f;
                    d[1] = g;
                    d[2] =
                        a;
                    d[3] = 0;
                    d[4] = b;
                    d[5] = n;
                    d[6] = e;
                    d[7] = 0;
                    d[8] = k;
                    d[9] = t;
                    d[10] = q;
                    d[11] = 0;
                    d[12] = -(f * l + b * y + k * c);
                    d[13] = -(g * l + n * y + t * c);
                    d[14] = -(a * l + e * y + q * c);
                    d[15] = 1;
                    return d
                },
                fromRotationTranslation: function(c, a, e) {
                    e || (e = p.create());
                    var d = c[0],
                        f = c[1],
                        b = c[2],
                        k = c[3],
                        g = d + d,
                        n = f + f,
                        t = b + b;
                    c = d * g;
                    var q = d * n,
                        d = d * t,
                        j = f * n,
                        f = f * t,
                        b = b * t,
                        g = k * g,
                        n = k * n,
                        k = k * t;
                    e[0] = 1 - (j + b);
                    e[1] = q + k;
                    e[2] = d - n;
                    e[3] = 0;
                    e[4] = q - k;
                    e[5] = 1 - (c + b);
                    e[6] = f + g;
                    e[7] = 0;
                    e[8] = d + n;
                    e[9] = f - g;
                    e[10] = 1 - (c + j);
                    e[11] = 0;
                    e[12] = a[0];
                    e[13] = a[1];
                    e[14] = a[2];
                    e[15] = 1;
                    return e
                },
                str: function(c) {
                    return "[" +
                        c[0] + ", " + c[1] + ", " + c[2] + ", " + c[3] + ", " + c[4] + ", " + c[5] + ", " + c[6] + ", " + c[7] + ", " + c[8] + ", " + c[9] + ", " + c[10] + ", " + c[11] + ", " + c[12] + ", " + c[13] + ", " + c[14] + ", " + c[15] + "]"
                }
            }, u = {
                create: function(c) {
                    var a = new f(4);
                    c ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a[0] = a[1] = a[2] = a[3] = 0;
                    return a
                },
                createFrom: function(c, a, e, d) {
                    var b = new f(4);
                    b[0] = c;
                    b[1] = a;
                    b[2] = e;
                    b[3] = d;
                    return b
                },
                set: function(c, a) {
                    a[0] = c[0];
                    a[1] = c[1];
                    a[2] = c[2];
                    a[3] = c[3];
                    return a
                },
                equal: function(c, a) {
                    return c === a || 1E-6 > Math.abs(c[0] - a[0]) && 1E-6 > Math.abs(c[1] -
                        a[1]) && 1E-6 > Math.abs(c[2] - a[2]) && 1E-6 > Math.abs(c[3] - a[3])
                },
                identity: function(c) {
                    c || (c = u.create());
                    c[0] = 0;
                    c[1] = 0;
                    c[2] = 0;
                    c[3] = 1;
                    return c
                }
            }, r = u.identity();
        u.calculateW = function(c, a) {
            var e = c[0],
                d = c[1],
                f = c[2];
            if (!a || c === a) return c[3] = -Math.sqrt(Math.abs(1 - e * e - d * d - f * f)), c;
            a[0] = e;
            a[1] = d;
            a[2] = f;
            a[3] = -Math.sqrt(Math.abs(1 - e * e - d * d - f * f));
            return a
        };
        u.dot = function(c, a) {
            return c[0] * a[0] + c[1] * a[1] + c[2] * a[2] + c[3] * a[3]
        };
        u.inverse = function(c, a) {
            var e = c[0],
                d = c[1],
                f = c[2],
                b = c[3],
                e = (e = e * e + d * d + f * f + b * b) ? 1 / e : 0;
            if (!a || c ===
                a) return c[0] *= -e, c[1] *= -e, c[2] *= -e, c[3] *= e, c;
            a[0] = -c[0] * e;
            a[1] = -c[1] * e;
            a[2] = -c[2] * e;
            a[3] = c[3] * e;
            return a
        };
        u.conjugate = function(c, a) {
            if (!a || c === a) return c[0] *= -1, c[1] *= -1, c[2] *= -1, c;
            a[0] = -c[0];
            a[1] = -c[1];
            a[2] = -c[2];
            a[3] = c[3];
            return a
        };
        u.length = function(c) {
            var a = c[0],
                e = c[1],
                d = c[2];
            c = c[3];
            return Math.sqrt(a * a + e * e + d * d + c * c)
        };
        u.normalize = function(c, a) {
            a || (a = c);
            var e = c[0],
                d = c[1],
                f = c[2],
                b = c[3],
                k = Math.sqrt(e * e + d * d + f * f + b * b);
            if (0 === k) return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a;
            k = 1 / k;
            a[0] = e * k;
            a[1] = d * k;
            a[2] = f * k;
            a[3] =
                b * k;
            return a
        };
        u.add = function(c, a, e) {
            if (!e || c === e) return c[0] += a[0], c[1] += a[1], c[2] += a[2], c[3] += a[3], c;
            e[0] = c[0] + a[0];
            e[1] = c[1] + a[1];
            e[2] = c[2] + a[2];
            e[3] = c[3] + a[3];
            return e
        };
        u.multiply = function(c, a, e) {
            e || (e = c);
            var d = c[0],
                f = c[1],
                b = c[2];
            c = c[3];
            var k = a[0],
                g = a[1],
                n = a[2];
            a = a[3];
            e[0] = d * a + c * k + f * n - b * g;
            e[1] = f * a + c * g + b * k - d * n;
            e[2] = b * a + c * n + d * g - f * k;
            e[3] = c * a - d * k - f * g - b * n;
            return e
        };
        u.multiplyVec3 = function(c, a, e) {
            e || (e = a);
            var d = a[0],
                f = a[1],
                b = a[2];
            a = c[0];
            var k = c[1],
                g = c[2];
            c = c[3];
            var n = c * d + k * b - g * f,
                t = c * f + g * d - a * b,
                q = c * b +
                    a * f - k * d,
                d = -a * d - k * f - g * b;
            e[0] = n * c + d * -a + t * -g - q * -k;
            e[1] = t * c + d * -k + q * -a - n * -g;
            e[2] = q * c + d * -g + n * -k - t * -a;
            return e
        };
        u.scale = function(c, a, e) {
            if (!e || c === e) return c[0] *= a, c[1] *= a, c[2] *= a, c[3] *= a, c;
            e[0] = c[0] * a;
            e[1] = c[1] * a;
            e[2] = c[2] * a;
            e[3] = c[3] * a;
            return e
        };
        u.toMat3 = function(a, e) {
            e || (e = z.create());
            var d = a[0],
                f = a[1],
                b = a[2],
                k = a[3],
                g = d + d,
                n = f + f,
                t = b + b,
                q = d * g,
                j = d * n,
                d = d * t,
                l = f * n,
                f = f * t,
                b = b * t,
                g = k * g,
                n = k * n,
                k = k * t;
            e[0] = 1 - (l + b);
            e[1] = j + k;
            e[2] = d - n;
            e[3] = j - k;
            e[4] = 1 - (q + b);
            e[5] = f + g;
            e[6] = d + n;
            e[7] = f - g;
            e[8] = 1 - (q + l);
            return e
        };
        u.toMat4 = function(a,
            e) {
            e || (e = p.create());
            var d = a[0],
                f = a[1],
                b = a[2],
                k = a[3],
                g = d + d,
                n = f + f,
                t = b + b,
                q = d * g,
                j = d * n,
                d = d * t,
                l = f * n,
                f = f * t,
                b = b * t,
                g = k * g,
                n = k * n,
                k = k * t;
            e[0] = 1 - (l + b);
            e[1] = j + k;
            e[2] = d - n;
            e[3] = 0;
            e[4] = j - k;
            e[5] = 1 - (q + b);
            e[6] = f + g;
            e[7] = 0;
            e[8] = d + n;
            e[9] = f - g;
            e[10] = 1 - (q + l);
            e[11] = 0;
            e[12] = 0;
            e[13] = 0;
            e[14] = 0;
            e[15] = 1;
            return e
        };
        u.slerp = function(a, e, d, f) {
            f || (f = a);
            var b = a[0] * e[0] + a[1] * e[1] + a[2] * e[2] + a[3] * e[3],
                k, g;
            if (1 <= Math.abs(b)) return f !== a && (f[0] = a[0], f[1] = a[1], f[2] = a[2], f[3] = a[3]), f;
            k = Math.acos(b);
            g = Math.sqrt(1 - b * b);
            if (0.001 > Math.abs(g)) return f[0] =
                    0.5 * a[0] + 0.5 * e[0], f[1] = 0.5 * a[1] + 0.5 * e[1], f[2] = 0.5 * a[2] + 0.5 * e[2], f[3] = 0.5 * a[3] + 0.5 * e[3], f;
            b = Math.sin((1 - d) * k) / g;
            d = Math.sin(d * k) / g;
            f[0] = a[0] * b + e[0] * d;
            f[1] = a[1] * b + e[1] * d;
            f[2] = a[2] * b + e[2] * d;
            f[3] = a[3] * b + e[3] * d;
            return f
        };
        u.fromRotationMatrix = function(a, e) {
            e || (e = u.create());
            var d = a[0] + a[4] + a[8],
                f;
            if (0 < d) f = Math.sqrt(d + 1), e[3] = 0.5 * f, f = 0.5 / f, e[0] = (a[7] - a[5]) * f, e[1] = (a[2] - a[6]) * f, e[2] = (a[3] - a[1]) * f;
            else {
                f = u.fromRotationMatrix.s_iNext = u.fromRotationMatrix.s_iNext || [1, 2, 0];
                d = 0;
                a[4] > a[0] && (d = 1);
                a[8] > a[3 * d + d] &&
                (d = 2);
                var b = f[d],
                    k = f[b];
                f = Math.sqrt(a[3 * d + d] - a[3 * b + b] - a[3 * k + k] + 1);
                e[d] = 0.5 * f;
                f = 0.5 / f;
                e[3] = (a[3 * k + b] - a[3 * b + k]) * f;
                e[b] = (a[3 * b + d] + a[3 * d + b]) * f;
                e[k] = (a[3 * k + d] + a[3 * d + k]) * f
            }
            return e
        };
        z.toQuat4 = u.fromRotationMatrix;
        var v = z.create();
        u.fromAxes = function(a, e, d, f) {
            v[0] = e[0];
            v[3] = e[1];
            v[6] = e[2];
            v[1] = d[0];
            v[4] = d[1];
            v[7] = d[2];
            v[2] = a[0];
            v[5] = a[1];
            v[8] = a[2];
            return u.fromRotationMatrix(v, f)
        };
        u.identity = function(a) {
            a || (a = u.create());
            a[0] = 0;
            a[1] = 0;
            a[2] = 0;
            a[3] = 1;
            return a
        };
        u.fromAngleAxis = function(a, e, d) {
            d || (d = u.create());
            a *= 0.5;
            var f = Math.sin(a);
            d[3] = Math.cos(a);
            d[0] = f * e[0];
            d[1] = f * e[1];
            d[2] = f * e[2];
            return d
        };
        u.toAngleAxis = function(a, e) {
            e || (e = a);
            var d = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
            0 < d ? (e[3] = 2 * Math.acos(a[3]), d = l.invsqrt(d), e[0] = a[0] * d, e[1] = a[1] * d, e[2] = a[2] * d) : (e[3] = 0, e[0] = 1, e[1] = 0, e[2] = 0);
            return e
        };
        u.str = function(a) {
            return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
        };
        var w = {
            create: function(a) {
                var e = new f(2);
                a ? (e[0] = a[0], e[1] = a[1]) : (e[0] = 0, e[1] = 0);
                return e
            },
            createFrom: function(a, e) {
                var d = new f(2);
                d[0] = a;
                d[1] = e;
                return d
            },
            add: function(a, e, d) {
                d || (d = e);
                d[0] = a[0] + e[0];
                d[1] = a[1] + e[1];
                return d
            },
            subtract: function(a, e, d) {
                d || (d = e);
                d[0] = a[0] - e[0];
                d[1] = a[1] - e[1];
                return d
            },
            multiply: function(a, e, d) {
                d || (d = e);
                d[0] = a[0] * e[0];
                d[1] = a[1] * e[1];
                return d
            },
            divide: function(a, e, d) {
                d || (d = e);
                d[0] = a[0] / e[0];
                d[1] = a[1] / e[1];
                return d
            },
            scale: function(a, e, d) {
                d || (d = a);
                d[0] = a[0] * e;
                d[1] = a[1] * e;
                return d
            },
            dist: function(a, e) {
                var d = e[0] - a[0],
                    f = e[1] - a[1];
                return Math.sqrt(d * d + f * f)
            },
            set: function(a, e) {
                e[0] = a[0];
                e[1] = a[1];
                return e
            },
            equal: function(a, e) {
                return a ===
                    e || 1E-6 > Math.abs(a[0] - e[0]) && 1E-6 > Math.abs(a[1] - e[1])
            },
            negate: function(a, e) {
                e || (e = a);
                e[0] = -a[0];
                e[1] = -a[1];
                return e
            },
            normalize: function(a, e) {
                e || (e = a);
                var d = a[0] * a[0] + a[1] * a[1];
                0 < d ? (d = Math.sqrt(d), e[0] = a[0] / d, e[1] = a[1] / d) : e[0] = e[1] = 0;
                return e
            },
            cross: function(a, e, d) {
                a = a[0] * e[1] - a[1] * e[0];
                if (!d) return a;
                d[0] = d[1] = 0;
                d[2] = a;
                return d
            },
            length: function(a) {
                var e = a[0];
                a = a[1];
                return Math.sqrt(e * e + a * a)
            },
            squaredLength: function(a) {
                var e = a[0];
                a = a[1];
                return e * e + a * a
            },
            dot: function(a, e) {
                return a[0] * e[0] + a[1] * e[1]
            },
            direction: function(a, e, d) {
                d || (d = a);
                var f = a[0] - e[0];
                a = a[1] - e[1];
                e = f * f + a * a;
                if (!e) return d[0] = 0, d[1] = 0, d[2] = 0, d;
                e = 1 / Math.sqrt(e);
                d[0] = f * e;
                d[1] = a * e;
                return d
            },
            lerp: function(a, e, d, f) {
                f || (f = a);
                f[0] = a[0] + d * (e[0] - a[0]);
                f[1] = a[1] + d * (e[1] - a[1]);
                return f
            },
            str: function(a) {
                return "[" + a[0] + ", " + a[1] + "]"
            }
        }, A = {
                create: function(a) {
                    var e = new f(4);
                    a ? (e[0] = a[0], e[1] = a[1], e[2] = a[2], e[3] = a[3]) : e[0] = e[1] = e[2] = e[3] = 0;
                    return e
                },
                createFrom: function(a, e, d, b) {
                    var k = new f(4);
                    k[0] = a;
                    k[1] = e;
                    k[2] = d;
                    k[3] = b;
                    return k
                },
                set: function(a,
                    e) {
                    e[0] = a[0];
                    e[1] = a[1];
                    e[2] = a[2];
                    e[3] = a[3];
                    return e
                },
                equal: function(a, e) {
                    return a === e || 1E-6 > Math.abs(a[0] - e[0]) && 1E-6 > Math.abs(a[1] - e[1]) && 1E-6 > Math.abs(a[2] - e[2]) && 1E-6 > Math.abs(a[3] - e[3])
                },
                identity: function(a) {
                    a || (a = A.create());
                    a[0] = 1;
                    a[1] = 0;
                    a[2] = 0;
                    a[3] = 1;
                    return a
                },
                transpose: function(a, e) {
                    if (!e || a === e) {
                        var d = a[1];
                        a[1] = a[2];
                        a[2] = d;
                        return a
                    }
                    e[0] = a[0];
                    e[1] = a[2];
                    e[2] = a[1];
                    e[3] = a[3];
                    return e
                },
                determinant: function(a) {
                    return a[0] * a[3] - a[2] * a[1]
                },
                inverse: function(a, e) {
                    e || (e = a);
                    var d = a[0],
                        f = a[1],
                        b = a[2],
                        k = a[3],
                        g = d * k - b * f;
                    if (!g) return null;
                    g = 1 / g;
                    e[0] = k * g;
                    e[1] = -f * g;
                    e[2] = -b * g;
                    e[3] = d * g;
                    return e
                },
                multiply: function(a, e, d) {
                    d || (d = a);
                    var f = a[0],
                        b = a[1],
                        k = a[2];
                    a = a[3];
                    d[0] = f * e[0] + b * e[2];
                    d[1] = f * e[1] + b * e[3];
                    d[2] = k * e[0] + a * e[2];
                    d[3] = k * e[1] + a * e[3];
                    return d
                },
                rotate: function(a, e, d) {
                    d || (d = a);
                    var f = a[0],
                        b = a[1],
                        k = a[2];
                    a = a[3];
                    var g = Math.sin(e);
                    e = Math.cos(e);
                    d[0] = f * e + b * g;
                    d[1] = f * -g + b * e;
                    d[2] = k * e + a * g;
                    d[3] = k * -g + a * e;
                    return d
                },
                multiplyVec2: function(a, e, d) {
                    d || (d = e);
                    var f = e[0];
                    e = e[1];
                    d[0] = f * a[0] + e * a[1];
                    d[1] = f * a[2] + e * a[3];
                    return d
                },
                scale: function(a, e, d) {
                    d || (d = a);
                    var f = a[1],
                        b = a[2],
                        k = a[3],
                        g = e[0];
                    e = e[1];
                    d[0] = a[0] * g;
                    d[1] = f * e;
                    d[2] = b * g;
                    d[3] = k * e;
                    return d
                },
                str: function(a) {
                    return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
                }
            }, B = {
                create: function(a) {
                    var e = new f(4);
                    a ? (e[0] = a[0], e[1] = a[1], e[2] = a[2], e[3] = a[3]) : (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0);
                    return e
                },
                createFrom: function(a, e, d, b) {
                    var k = new f(4);
                    k[0] = a;
                    k[1] = e;
                    k[2] = d;
                    k[3] = b;
                    return k
                },
                add: function(a, e, d) {
                    d || (d = e);
                    d[0] = a[0] + e[0];
                    d[1] = a[1] + e[1];
                    d[2] = a[2] + e[2];
                    d[3] = a[3] + e[3];
                    return d
                },
                subtract: function(a,
                    e, d) {
                    d || (d = e);
                    d[0] = a[0] - e[0];
                    d[1] = a[1] - e[1];
                    d[2] = a[2] - e[2];
                    d[3] = a[3] - e[3];
                    return d
                },
                multiply: function(a, e, d) {
                    d || (d = e);
                    d[0] = a[0] * e[0];
                    d[1] = a[1] * e[1];
                    d[2] = a[2] * e[2];
                    d[3] = a[3] * e[3];
                    return d
                },
                divide: function(a, e, d) {
                    d || (d = e);
                    d[0] = a[0] / e[0];
                    d[1] = a[1] / e[1];
                    d[2] = a[2] / e[2];
                    d[3] = a[3] / e[3];
                    return d
                },
                scale: function(a, e, d) {
                    d || (d = a);
                    d[0] = a[0] * e;
                    d[1] = a[1] * e;
                    d[2] = a[2] * e;
                    d[3] = a[3] * e;
                    return d
                },
                set: function(a, e) {
                    e[0] = a[0];
                    e[1] = a[1];
                    e[2] = a[2];
                    e[3] = a[3];
                    return e
                },
                equal: function(a, e) {
                    return a === e || 1E-6 > Math.abs(a[0] - e[0]) && 1E-6 > Math.abs(a[1] - e[1]) && 1E-6 > Math.abs(a[2] - e[2]) && 1E-6 > Math.abs(a[3] - e[3])
                },
                negate: function(a, e) {
                    e || (e = a);
                    e[0] = -a[0];
                    e[1] = -a[1];
                    e[2] = -a[2];
                    e[3] = -a[3];
                    return e
                },
                length: function(a) {
                    var e = a[0],
                        d = a[1],
                        f = a[2];
                    a = a[3];
                    return Math.sqrt(e * e + d * d + f * f + a * a)
                },
                squaredLength: function(a) {
                    var e = a[0],
                        d = a[1],
                        f = a[2];
                    a = a[3];
                    return e * e + d * d + f * f + a * a
                },
                lerp: function(a, e, d, f) {
                    f || (f = a);
                    f[0] = a[0] + d * (e[0] - a[0]);
                    f[1] = a[1] + d * (e[1] - a[1]);
                    f[2] = a[2] + d * (e[2] - a[2]);
                    f[3] = a[3] + d * (e[3] - a[3]);
                    return f
                },
                str: function(a) {
                    return "[" + a[0] + ", " +
                        a[1] + ", " + a[2] + ", " + a[3] + "]"
                }
            };
        b && (b.glMatrixArrayType = f, b.MatrixArray = f, b.setMatrixArrayType = j, b.determineMatrixArrayType = m, b.glMath = l, b.vec2 = w, b.vec3 = a, b.vec4 = B, b.mat2 = A, b.mat3 = z, b.mat4 = p, b.quat4 = u);
        return {
            glMatrixArrayType: f,
            MatrixArray: f,
            setMatrixArrayType: j,
            determineMatrixArrayType: m,
            glMath: l,
            vec2: w,
            vec3: a,
            vec4: B,
            mat2: A,
            mat3: z,
            mat4: p,
            quat4: u
        }
    });
ChemDoodle.animations = function(b) {
    var j = {};
    b.requestAnimFrame = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(j) {
        b.setTimeout(j, 1E3 / 60)
    };
    j.requestInterval = function(j, l) {
        function g() {
            (new Date).getTime() - d >= l && (j.call(), d = (new Date).getTime());
            f.value = b.requestAnimFrame(g)
        }
        if (!b.requestAnimationFrame && !b.webkitRequestAnimationFrame && (!b.mozRequestAnimationFrame || !b.mozCancelRequestAnimationFrame) && !b.oRequestAnimationFrame && !b.msRequestAnimationFrame) return b.setInterval(j, l);
        var d = (new Date).getTime(),
            f = {};
        f.value = b.requestAnimFrame(g);
        return f
    };
    j.clearRequestInterval = function(j) {
        b.cancelAnimationFrame ? b.cancelAnimationFrame(j.value) : b.webkitCancelAnimationFrame ? b.webkitCancelAnimationFrame(j.value) : b.webkitCancelRequestAnimationFrame ? b.webkitCancelRequestAnimationFrame(j.value) : b.mozCancelRequestAnimationFrame ? b.mozCancelRequestAnimationFrame(j.value) : b.oCancelRequestAnimationFrame ? b.oCancelRequestAnimationFrame(j.value) :
            b.msCancelRequestAnimationFrame ? b.msCancelRequestAnimationFrame(j.value) : clearInterval(j)
    };
    j.requestTimeout = function(j, l) {
        function g() {
            (new Date).getTime() - d >= l ? j.call() : f.value = b.requestAnimFrame(g)
        }
        if (!b.requestAnimationFrame && !b.webkitRequestAnimationFrame && (!b.mozRequestAnimationFrame || !b.mozCancelRequestAnimationFrame) && !b.oRequestAnimationFrame && !b.msRequestAnimationFrame) return b.setTimeout(j, l);
        var d = (new Date).getTime(),
            f = {};
        f.value = b.requestAnimFrame(g);
        return f
    };
    j.clearRequestTimeout = function(j) {
        b.cancelAnimationFrame ?
            b.cancelAnimationFrame(j.value) : b.webkitCancelAnimationFrame ? b.webkitCancelAnimationFrame(j.value) : b.webkitCancelRequestAnimationFrame ? b.webkitCancelRequestAnimationFrame(j.value) : b.mozCancelRequestAnimationFrame ? b.mozCancelRequestAnimationFrame(j.value) : b.oCancelRequestAnimationFrame ? b.oCancelRequestAnimationFrame(j.value) : b.msCancelRequestAnimationFrame ? b.msCancelRequestAnimationFrame(j.value) : clearTimeout(j)
    };
    return j
}(window);
ChemDoodle.extensions = function(b, j, m) {
    return {
        stringStartsWith: function(b, g) {
            return b.slice(0, g.length) === g
        },
        vec3AngleFrom: function(b, g) {
            var d = j.length(b),
                f = j.length(g),
                d = j.dot(b, g) / d / f;
            return m.acos(d)
        },
        contextHashTo: function(j, g, d, f, a, e, t) {
            var k = 0,
                q = (new b.Point(g, d)).distance(new b.Point(f, a)),
                n = !1,
                y = g,
                m = d;
            g = f - g;
            for (d = a - d; k < q;) {
                if (n) if (k + t > q) {
                        j.moveTo(f, a);
                        break
                    } else {
                        var p = t / q,
                            y = y + p * g,
                            m = m + p * d;
                        j.moveTo(y, m);
                        k += t
                    } else if (k + e > q) {
                    j.lineTo(f, a);
                    break
                } else p = e / q, y += p * g, m += p * d, j.lineTo(y, m), k += e;
                n = !n
            }
        },
        contextRoundRect: function(b, g, d, f, a, e) {
            b.beginPath();
            b.moveTo(g + e, d);
            b.lineTo(g + f - e, d);
            b.quadraticCurveTo(g + f, d, g + f, d + e);
            b.lineTo(g + f, d + a - e);
            b.quadraticCurveTo(g + f, d + a, g + f - e, d + a);
            b.lineTo(g + e, d + a);
            b.quadraticCurveTo(g, d + a, g, d + a - e);
            b.lineTo(g, d + e);
            b.quadraticCurveTo(g, d, g + e, d);
            b.closePath()
        },
        contextEllipse: function(b, g, d, f, a) {
            var e = 0.5522848 * (f / 2),
                t = 0.5522848 * (a / 2),
                k = g + f,
                q = d + a;
            f = g + f / 2;
            a = d + a / 2;
            b.beginPath();
            b.moveTo(g, a);
            b.bezierCurveTo(g, a - t, f - e, d, f, d);
            b.bezierCurveTo(f + e, d, k, a - t, k, a);
            b.bezierCurveTo(k,
                a + t, f + e, q, f, q);
            b.bezierCurveTo(f - e, q, g, a + t, g, a);
            b.closePath()
        },
        getFontString: function(b, g, d, f) {
            var a = [];
            d && a.push("bold ");
            f && a.push("italic ");
            a.push(b + "px ");
            b = 0;
            for (d = g.length; b < d; b++) f = g[b], -1 !== f.indexOf(" ") && (f = '"' + f + '"'), a.push((0 !== b ? "," : "") + f);
            return a.join("")
        }
    }
}(ChemDoodle.structures, ChemDoodle.lib.vec3, Math);
ChemDoodle.math = function(b, j, m) {
    var l = {}, g = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo ": "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
    l.angleBetweenLargest = function(d) {
        if (0 === d.length) return {
                angle: 0,
                largest: 2 * m.PI
        };
        if (1 === d.length) return {
                angle: d[0] + m.PI,
                largest: 2 * m.PI
        };
        for (var f = 0, a = 0, e = 0, b = d.length - 1; e < b; e++) {
            var k = d[e + 1] - d[e];
            k > f && (f = k, a = (d[e + 1] + d[e]) / 2)
        }
        e = d[0] + 2 * m.PI - d[d.length - 1];
        e > f && (a = d[0] - e / 2, f = e, 0 > a && (a += 2 * m.PI));
        return {
            angle: a,
            largest: f
        }
    };
    l.isBetween = function(d, f, a) {
        if (f > a) {
            var e = f;
            f = a;
            a = e
        }
        return d >= f && d <= a
    };
    l.getRGB = function(d, f) {
        var a = [0, 0, 0];
        g[d.toLowerCase()] && (d = g[d.toLowerCase()]);
        if ("#" === d.charAt(0)) return 4 === d.length && (d = "#" + d.charAt(1) + d.charAt(1) + d.charAt(2) + d.charAt(2) + d.charAt(3) + d.charAt(3)), [parseInt(d.substring(1, 3), 16) / 255 * f, parseInt(d.substring(3, 5), 16) / 255 * f, parseInt(d.substring(5, 7), 16) / 255 *
                f
            ];
        if (b.stringStartsWith(d, "rgb")) {
            var e = d.replace(/rgb\(|\)/g, "").split(",");
            return 3 !== e.length ? a : [parseInt(e[0]) / 255 * f, parseInt(e[1]) / 255 * f, parseInt(e[2]) / 255 * f]
        }
        return a
    };
    l.idx2color = function(d) {
        d = d.toString(16);
        for (var f = 0, a = 6 - d.length; f < a; f++) d = "0" + d;
        return "#" + d
    };
    l.distanceFromPointToLineInclusive = function(d, f, a) {
        var e = f.distance(a);
        a = f.angle(a);
        a = m.PI / 2 - a;
        a = f.angle(d) + a;
        d = f.distance(d);
        d = new j.Point(d * m.cos(a), -d * m.sin(a));
        return l.isBetween(-d.y, 0, e) ? m.abs(d.x) : -1
    };
    l.calculateDistanceInterior = function(d, f, a) {
        if (this.isBetween(f.x, a.x, a.x + a.w) && this.isBetween(f.y, a.y, a.y + a.w)) return d.distance(f);
        var e = [];
        e.push({
                x1: a.x,
                y1: a.y,
                x2: a.x + a.w,
                y2: a.y
            });
        e.push({
                x1: a.x,
                y1: a.y + a.h,
                x2: a.x + a.w,
                y2: a.y + a.h
            });
        e.push({
                x1: a.x,
                y1: a.y,
                x2: a.x,
                y2: a.y + a.h
            });
        e.push({
                x1: a.x + a.w,
                y1: a.y,
                x2: a.x + a.w,
                y2: a.y + a.h
            });
        a = [];
        for (var b = 0; 4 > b; b++) {
            var k = e[b];
            (k = this.intersectLines(f.x, f.y, d.x, d.y, k.x1, k.y1, k.x2, k.y2)) && a.push(k)
        }
        if (0 === a.length) return 0;
        b = f = 0;
        for (e = a.length; b < e; b++) {
            var k = a[b],
                g = d.x - k.x,
                k = d.y - k.y;
            f = m.max(f,
                m.sqrt(g * g + k * k))
        }
        return f
    };
    l.intersectLines = function(d, f, a, e, b, k, g, n) {
        a -= d;
        e -= f;
        g -= b;
        n -= k;
        var j = e * g - a * n;
        if (0 === j) return !1;
        g = (n * (d - b) - g * (f - k)) / j;
        b = (e * (d - b) - a * (f - k)) / j;
        return 0 <= b && 1 >= b && 0 <= g && 1 >= g ? {
            x: d + g * a,
            y: f + g * e
        } : !1
    };
    l.hsl2rgb = function(d, f, a) {
        var e = function(a, e, d) {
            0 > d ? d += 1 : 1 < d && (d -= 1);
            return d < 1 / 6 ? a + 6 * (e - a) * d : 0.5 > d ? e : d < 2 / 3 ? a + 6 * (e - a) * (2 / 3 - d) : a
        };
        if (0 === f) a = f = d = a;
        else {
            var b = 0.5 > a ? a * (1 + f) : a + f - a * f,
                k = 2 * a - b;
            a = e(k, b, d + 1 / 3);
            f = e(k, b, d);
            d = e(k, b, d - 1 / 3)
        }
        return [255 * a, 255 * f, 255 * d]
    };
    l.isPointInPoly = function(d, f) {
        for (var a = !1, e = -1, b = d.length, k = b - 1; ++e < b; k = e)(d[e].y <= f.y && f.y < d[k].y || d[k].y <= f.y && f.y < d[e].y) && f.x < (d[k].x - d[e].x) * (f.y - d[e].y) / (d[k].y - d[e].y) + d[e].x && (a = !a);
        return a
    };
    l.clamp = function(d, f, a) {
        return d < f ? f : d > a ? a : d
    };
    l.rainbowAt = function(d, f, a) {
        1 > a.length ? a.push("#000000", "#FFFFFF") : 2 > a.length && a.push("#FFFFFF");
        var e = f / (a.length - 1);
        f = m.floor(d / e);
        d = (d - f * e) / e;
        e = l.getRGB(a[f], 1);
        a = l.getRGB(a[f + 1], 1);
        return "rgb(" + [255 * (e[0] + (a[0] - e[0]) * d), 255 * (e[1] + (a[1] - e[1]) * d), 255 * (e[2] + (a[2] - e[2]) * d)].join() + ")"
    };
    l.angleBounds = function(d, f, a) {
        for (var e = 2 * m.PI; 0 > d;) d += e;
        for (; d > e;) d -= e;
        a && d > m.PI && (d = 2 * m.PI - d);
        f && (d = 180 * d / m.PI);
        return d
    };
    return l
}(ChemDoodle.extensions, ChemDoodle.structures, Math);
(function(b, j) {
        b.Bounds = function() {};
        var m = b.Bounds.prototype;
        m.minX = m.minY = m.minZ = Infinity;
        m.maxX = m.maxY = m.maxZ = -Infinity;
        m.expand = function(l, g, d, f) {
            l instanceof b.Bounds ? (this.minX = j.min(this.minX, l.minX), this.minY = j.min(this.minY, l.minY), this.maxX = j.max(this.maxX, l.maxX), this.maxY = j.max(this.maxY, l.maxY), Infinity !== l.maxZ && (this.minZ = j.min(this.minZ, l.minZ), this.maxZ = j.max(this.maxZ, l.maxZ))) : (this.minX = j.min(this.minX, l), this.maxX = j.max(this.maxX, l), this.minY = j.min(this.minY, g), this.maxY = j.max(this.maxY,
                    g), void 0 !== d && void 0 !== f && (this.minX = j.min(this.minX, d), this.maxX = j.max(this.maxX, d), this.minY = j.min(this.minY, f), this.maxY = j.max(this.maxY, f)))
        };
        m.expand3D = function(b, g, d, f, a, e) {
            this.minX = j.min(this.minX, b);
            this.maxX = j.max(this.maxX, b);
            this.minY = j.min(this.minY, g);
            this.maxY = j.max(this.maxY, g);
            this.minZ = j.min(this.minZ, d);
            this.maxZ = j.max(this.maxZ, d);
            void 0 !== f && (void 0 !== a && void 0 !== e) && (this.minX = j.min(this.minX, f), this.maxX = j.max(this.maxX, f), this.minY = j.min(this.minY, a), this.maxY = j.max(this.maxY,
                    a), this.minZ = j.min(this.minZ, e), this.maxZ = j.max(this.maxZ, e))
        }
    })(ChemDoodle.math, Math);
(function() {
        var b = {
            subtract: function(a, e) {
                return {
                    x: a.x - e.x,
                    y: a.y - e.y
                }
            },
            dotProduct: function(a, e) {
                return a.x * e.x + a.y * e.y
            },
            square: function(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y)
            },
            scale: function(a, e) {
                return {
                    x: a.x * e,
                    y: a.y * e
                }
            }
        }, j = Math.pow(2, -65),
            m = function(a, e) {
                for (var d = [], f = e.length - 1, t = 2 * f - 1, j = [], m = [], r = [], v = [], w = [
                            [1, 0.6, 0.3, 0.1],
                            [0.4, 0.6, 0.6, 0.4],
                            [0.1, 0.3, 0.6, 1]
                        ], A = 0; A <= f; A++) j[A] = b.subtract(e[A], a);
                for (A = 0; A <= f - 1; A++) m[A] = b.subtract(e[A + 1], e[A]), m[A] = b.scale(m[A], 3);
                for (A = 0; A <= f - 1; A++) for (var B = 0; B <=
                        f; B++) r[A] || (r[A] = []), r[A][B] = b.dotProduct(m[A], j[B]);
                for (A = 0; A <= t; A++) v[A] || (v[A] = []), v[A].y = 0, v[A].x = parseFloat(A) / t;
                t = f - 1;
                for (j = 0; j <= f + t; j++) {
                    A = Math.max(0, j - t);
                    for (m = Math.min(j, f); A <= m; A++) B = j - A, v[A + B].y += r[B][A] * w[B][A]
                }
                f = e.length - 1;
                v = l(v, 2 * f - 1, d, 0);
                t = b.subtract(a, e[0]);
                r = b.square(t);
                for (A = w = 0; A < v; A++) t = b.subtract(a, g(e, f, d[A], null, null)), t = b.square(t), t < r && (r = t, w = d[A]);
                t = b.subtract(a, e[f]);
                t = b.square(t);
                t < r && (r = t, w = 1);
                return {
                    location: w,
                    distance: r
                }
            }, l = function(a, e, d, f) {
                var b = [],
                    t = [],
                    m = [],
                    r = [],
                    v = 0,
                    w, A;
                A = 0 == a[0].y ? 0 : 0 < a[0].y ? 1 : -1;
                for (var B = 1; B <= e; B++) w = 0 == a[B].y ? 0 : 0 < a[B].y ? 1 : -1, w != A && v++, A = w;
                switch (v) {
                    case 0:
                        return 0;
                    case 1:
                        if (64 <= f) return d[0] = (a[0].x + a[e].x) / 2, 1;
                        var c, h, D, v = a[0].y - a[e].y;
                        w = a[e].x - a[0].x;
                        A = a[0].x * a[e].y - a[e].x * a[0].y;
                        B = c = 0;
                        for (h = 1; h < e; h++) D = v * a[h].x + w * a[h].y + A, D > c ? c = D : D < B && (B = D);
                        D = w;
                        h = 0 * D - 1 * v;
                        c = (1 * (A - c) - 0 * D) * (1 / h);
                        D = w;
                        h = 0 * D - 1 * v;
                        v = (1 * (A - B) - 0 * D) * (1 / h);
                        w = Math.min(c, v);
                        if (Math.max(c, v) - w < j) return m = a[e].x - a[0].x, r = a[e].y - a[0].y, d[0] = 0 + 1 * (m * (a[0].y - 0) - r * (a[0].x - 0)) * (1 / (0 * m -
                                    1 * r)), 1
                }
                g(a, e, 0.5, b, t);
                a = l(b, e, m, f + 1);
                e = l(t, e, r, f + 1);
                for (f = 0; f < a; f++) d[f] = m[f];
                for (f = 0; f < e; f++) d[f + a] = r[f];
                return a + e
            }, g = function(a, e, d, f, b) {
                for (var g = [
                        []
                    ], t = 0; t <= e; t++) g[0][t] = a[t];
                for (a = 1; a <= e; a++) for (t = 0; t <= e - a; t++) g[a] || (g[a] = []), g[a][t] || (g[a][t] = {}), g[a][t].x = (1 - d) * g[a - 1][t].x + d * g[a - 1][t + 1].x, g[a][t].y = (1 - d) * g[a - 1][t].y + d * g[a - 1][t + 1].y;
                if (null != f) for (t = 0; t <= e; t++) f[t] = g[t][0];
                if (null != b) for (t = 0; t <= e; t++) b[t] = g[e - t][t];
                return g[e][0]
            }, d = {}, f = function(a, e) {
                var f, b = a.length - 1;
                f = d[b];
                if (!f) {
                    f = [];
                    var g = function(a) {
                        return function() {
                            return a
                        }
                    }, t = function() {
                            return function(a) {
                                return a
                            }
                        }, j = function() {
                            return function(a) {
                                return 1 - a
                            }
                        }, l = function(a) {
                            return function(c) {
                                for (var e = 1, d = 0; d < a.length; d++) e *= a[d](c);
                                return e
                            }
                        };
                    f.push(new function() {
                            return function(a) {
                                return Math.pow(a, b)
                            }
                        });
                    for (var m = 1; m < b; m++) {
                        for (var w = [new g(b)], A = 0; A < b - m; A++) w.push(new t);
                        for (A = 0; A < m; A++) w.push(new j);
                        f.push(new l(w))
                    }
                    f.push(new function() {
                            return function(a) {
                                return Math.pow(1 - a, b)
                            }
                        });
                    d[b] = f
                }
                for (j = t = g = 0; j < a.length; j++) g +=
                        a[j].x * f[j](e), t += a[j].y * f[j](e);
                return {
                    x: g,
                    y: t
                }
            }, a = function(a, e) {
                return Math.sqrt(Math.pow(a.x - e.x, 2) + Math.pow(a.y - e.y, 2))
            }, e = function(e, d, b) {
                for (var g = f(e, d), t = 0, j = 0 < b ? 1 : -1, l = null; t < Math.abs(b);) d += 0.005 * j, l = f(e, d), t += a(l, g), g = l;
                return {
                    point: l,
                    location: d
                }
            }, t = function(a, e) {
                var d = f(a, e),
                    b = f(a.slice(0, a.length - 1), e),
                    g = b.y - d.y,
                    d = b.x - d.x;
                return 0 == g ? Infinity : Math.atan(g / d)
            };
        ChemDoodle.math.jsBezier = {
            distanceFromCurve: m,
            gradientAtPoint: t,
            gradientAtPointAlongCurveFrom: function(a, d, f) {
                d = e(a, d, f);
                1 < d.location &&
                (d.location = 1);
                0 > d.location && (d.location = 0);
                return t(a, d.location)
            },
            nearestPointOnCurve: function(a, e) {
                var d = m(a, e);
                return {
                    point: g(e, e.length - 1, d.location, null, null),
                    location: d.location
                }
            },
            pointOnCurve: f,
            pointAlongCurveFrom: function(a, d, f) {
                return e(a, d, f).point
            },
            perpendicularToCurveAt: function(a, d, f, b) {
                d = e(a, d, null == b ? 0 : b);
                a = t(a, d.location);
                b = Math.atan(-1 / a);
                a = f / 2 * Math.sin(b);
                f = f / 2 * Math.cos(b);
                return [{
                    x: d.point.x + f,
                    y: d.point.y + a
                }, {
                    x: d.point.x - f,
                    y: d.point.y - a
                }]
            },
            locationAlongCurveFrom: function(a, d, f) {
                return e(a,
                    d, f).location
            },
            getLength: function(e) {
                for (var d = f(e, 0), b = 0, g = 0, t = null; 1 > g;) g += 0.005, t = f(e, g), b += a(t, d), d = t;
                return b
            }
        }
    })(ChemDoodle.math);
ChemDoodle.featureDetection = function(b, j, m, l) {
    var g = {
        supports_canvas: function() {
            return !!m.createElement("canvas").getContext
        },
        supports_canvas_text: function() {
            return !g.supports_canvas() ? !1 : "function" === typeof m.createElement("canvas").getContext("2d").fillText
        },
        supports_webgl: function() {
            var d = m.createElement("canvas");
            try {
                if (d.getContext("webgl") || d.getContext("experimental-webgl")) return !0
            } catch (f) {}
            return !1
        },
        supports_xhr2: function() {
            return j.support.cors
        },
        supports_touch: function() {
            return "ontouchstart" in
                l && navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|BB10/i)
        },
        supports_gesture: function() {
            return "ongesturestart" in l
        }
    };
    return g
}(ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document, window);
ChemDoodle.SYMBOLS = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Uut Uuq Uup Uuh Uus Uuo".split(" ");
ChemDoodle.ELEMENT = function() {
    function b(b, j, g, d, f, a, e, t, k) {
        this.symbol = b;
        this.name = j;
        this.atomicNumber = g;
        this.addH = d;
        this.jmolColor = this.pymolColor = f;
        this.covalentRadius = a;
        this.vdWRadius = e;
        this.valency = t;
        this.mass = k
    }
    var j = [];
    j.H = new b("H", "Hydrogen", 1, !1, "#FFFFFF", 0.31, 1.2, 1, 1);
    j.He = new b("He", "Helium", 2, !1, "#D9FFFF", 0.28, 1.4, 0, 4);
    j.Li = new b("Li", "Lithium", 3, !1, "#CC80FF", 1.28, 1.82, 1, 7);
    j.Be = new b("Be", "Beryllium", 4, !1, "#C2FF00", 0.96, 0, 2, 9);
    j.B = new b("B", "Boron", 5, !0, "#FFB5B5", 0.84, 0, 3, 11);
    j.C = new b("C",
        "Carbon", 6, !0, "#909090", 0.76, 1.7, 4, 12);
    j.N = new b("N", "Nitrogen", 7, !0, "#3050F8", 0.71, 1.55, 3, 14);
    j.O = new b("O", "Oxygen", 8, !0, "#FF0D0D", 0.66, 1.52, 2, 16);
    j.F = new b("F", "Fluorine", 9, !0, "#90E050", 0.57, 1.47, 1, 19);
    j.Ne = new b("Ne", "Neon", 10, !1, "#B3E3F5", 0.58, 1.54, 0, 20);
    j.Na = new b("Na", "Sodium", 11, !1, "#AB5CF2", 1.66, 2.27, 1, 23);
    j.Mg = new b("Mg", "Magnesium", 12, !1, "#8AFF00", 1.41, 1.73, 0, 24);
    j.Al = new b("Al", "Aluminum", 13, !1, "#BFA6A6", 1.21, 0, 0, 27);
    j.Si = new b("Si", "Silicon", 14, !0, "#F0C8A0", 1.11, 2.1, 4, 28);
    j.P = new b("P",
        "Phosphorus", 15, !0, "#FF8000", 1.07, 1.8, 3, 31);
    j.S = new b("S", "Sulfur", 16, !0, "#FFFF30", 1.05, 1.8, 2, 32);
    j.Cl = new b("Cl", "Chlorine", 17, !0, "#1FF01F", 1.02, 1.75, 1, 35);
    j.Ar = new b("Ar", "Argon", 18, !1, "#80D1E3", 1.06, 1.88, 0, 40);
    j.K = new b("K", "Potassium", 19, !1, "#8F40D4", 2.03, 2.75, 0, 39);
    j.Ca = new b("Ca", "Calcium", 20, !1, "#3DFF00", 1.76, 0, 0, 40);
    j.Sc = new b("Sc", "Scandium", 21, !1, "#E6E6E6", 1.7, 0, 0, 45);
    j.Ti = new b("Ti", "Titanium", 22, !1, "#BFC2C7", 1.6, 0, 1, 48);
    j.V = new b("V", "Vanadium", 23, !1, "#A6A6AB", 1.53, 0, 1, 51);
    j.Cr = new b("Cr",
        "Chromium", 24, !1, "#8A99C7", 1.39, 0, 2, 52);
    j.Mn = new b("Mn", "Manganese", 25, !1, "#9C7AC7", 1.39, 0, 3, 55);
    j.Fe = new b("Fe", "Iron", 26, !1, "#E06633", 1.32, 0, 2, 56);
    j.Co = new b("Co", "Cobalt", 27, !1, "#F090A0", 1.26, 0, 1, 59);
    j.Ni = new b("Ni", "Nickel", 28, !1, "#50D050", 1.24, 1.63, 1, 58);
    j.Cu = new b("Cu", "Copper", 29, !1, "#C88033", 1.32, 1.4, 0, 63);
    j.Zn = new b("Zn", "Zinc", 30, !1, "#7D80B0", 1.22, 1.39, 0, 64);
    j.Ga = new b("Ga", "Gallium", 31, !1, "#C28F8F", 1.22, 1.87, 0, 69);
    j.Ge = new b("Ge", "Germanium", 32, !1, "#668F8F", 1.2, 0, 4, 74);
    j.As = new b("As",
        "Arsenic", 33, !0, "#BD80E3", 1.19, 1.85, 3, 75);
    j.Se = new b("Se", "Selenium", 34, !0, "#FFA100", 1.2, 1.9, 2, 80);
    j.Br = new b("Br", "Bromine", 35, !0, "#A62929", 1.2, 1.85, 1, 79);
    j.Kr = new b("Kr", "Krypton", 36, !1, "#5CB8D1", 1.16, 2.02, 0, 84);
    j.Rb = new b("Rb", "Rubidium", 37, !1, "#702EB0", 2.2, 0, 0, 85);
    j.Sr = new b("Sr", "Strontium", 38, !1, "#00FF00", 1.95, 0, 0, 88);
    j.Y = new b("Y", "Yttrium", 39, !1, "#94FFFF", 1.9, 0, 0, 89);
    j.Zr = new b("Zr", "Zirconium", 40, !1, "#94E0E0", 1.75, 0, 0, 90);
    j.Nb = new b("Nb", "Niobium", 41, !1, "#73C2C9", 1.64, 0, 1, 93);
    j.Mo = new b("Mo",
        "Molybdenum", 42, !1, "#54B5B5", 1.54, 0, 2, 98);
    j.Tc = new b("Tc", "Technetium", 43, !1, "#3B9E9E", 1.47, 0, 3, 0);
    j.Ru = new b("Ru", "Ruthenium", 44, !1, "#248F8F", 1.46, 0, 2, 102);
    j.Rh = new b("Rh", "Rhodium", 45, !1, "#0A7D8C", 1.42, 0, 1, 103);
    j.Pd = new b("Pd", "Palladium", 46, !1, "#006985", 1.39, 1.63, 0, 106);
    j.Ag = new b("Ag", "Silver", 47, !1, "#C0C0C0", 1.45, 1.72, 0, 107);
    j.Cd = new b("Cd", "Cadmium", 48, !1, "#FFD98F", 1.44, 1.58, 0, 114);
    j.In = new b("In", "Indium", 49, !1, "#A67573", 1.42, 1.93, 0, 115);
    j.Sn = new b("Sn", "Tin", 50, !1, "#668080", 1.39, 2.17, 4, 120);
    j.Sb = new b("Sb", "Antimony", 51, !1, "#9E63B5", 1.39, 0, 3, 121);
    j.Te = new b("Te", "Tellurium", 52, !0, "#D47A00", 1.38, 2.06, 2, 130);
    j.I = new b("I", "Iodine", 53, !0, "#940094", 1.39, 1.98, 1, 127);
    j.Xe = new b("Xe", "Xenon", 54, !1, "#429EB0", 1.4, 2.16, 0, 132);
    j.Cs = new b("Cs", "Cesium", 55, !1, "#57178F", 2.44, 0, 0, 133);
    j.Ba = new b("Ba", "Barium", 56, !1, "#00C900", 2.15, 0, 0, 138);
    j.La = new b("La", "Lanthanum", 57, !1, "#70D4FF", 2.07, 0, 0, 139);
    j.Ce = new b("Ce", "Cerium", 58, !1, "#FFFFC7", 2.04, 0, 0, 140);
    j.Pr = new b("Pr", "Praseodymium", 59, !1, "#D9FFC7", 2.03,
        0, 0, 141);
    j.Nd = new b("Nd", "Neodymium", 60, !1, "#C7FFC7", 2.01, 0, 0, 142);
    j.Pm = new b("Pm", "Promethium", 61, !1, "#A3FFC7", 1.99, 0, 0, 0);
    j.Sm = new b("Sm", "Samarium", 62, !1, "#8FFFC7", 1.98, 0, 0, 152);
    j.Eu = new b("Eu", "Europium", 63, !1, "#61FFC7", 1.98, 0, 0, 153);
    j.Gd = new b("Gd", "Gadolinium", 64, !1, "#45FFC7", 1.96, 0, 0, 158);
    j.Tb = new b("Tb", "Terbium", 65, !1, "#30FFC7", 1.94, 0, 0, 159);
    j.Dy = new b("Dy", "Dysprosium", 66, !1, "#1FFFC7", 1.92, 0, 0, 164);
    j.Ho = new b("Ho", "Holmium", 67, !1, "#00FF9C", 1.92, 0, 0, 165);
    j.Er = new b("Er", "Erbium", 68, !1, "#00E675",
        1.89, 0, 0, 166);
    j.Tm = new b("Tm", "Thulium", 69, !1, "#00D452", 1.9, 0, 0, 169);
    j.Yb = new b("Yb", "Ytterbium", 70, !1, "#00BF38", 1.87, 0, 0, 174);
    j.Lu = new b("Lu", "Lutetium", 71, !1, "#00AB24", 1.87, 0, 0, 175);
    j.Hf = new b("Hf", "Hafnium", 72, !1, "#4DC2FF", 1.75, 0, 0, 180);
    j.Ta = new b("Ta", "Tantalum", 73, !1, "#4DA6FF", 1.7, 0, 1, 181);
    j.W = new b("W", "Tungsten", 74, !1, "#2194D6", 1.62, 0, 2, 184);
    j.Re = new b("Re", "Rhenium", 75, !1, "#267DAB", 1.51, 0, 3, 187);
    j.Os = new b("Os", "Osmium", 76, !1, "#266696", 1.44, 0, 2, 192);
    j.Ir = new b("Ir", "Iridium", 77, !1, "#175487",
        1.41, 0, 3, 193);
    j.Pt = new b("Pt", "Platinum", 78, !1, "#D0D0E0", 1.36, 1.75, 0, 195);
    j.Au = new b("Au", "Gold", 79, !1, "#FFD123", 1.36, 1.66, 1, 197);
    j.Hg = new b("Hg", "Mercury", 80, !1, "#B8B8D0", 1.32, 1.55, 0, 202);
    j.Tl = new b("Tl", "Thallium", 81, !1, "#A6544D", 1.45, 1.96, 0, 205);
    j.Pb = new b("Pb", "Lead", 82, !1, "#575961", 1.46, 2.02, 4, 208);
    j.Bi = new b("Bi", "Bismuth", 83, !1, "#9E4FB5", 1.48, 0, 3, 209);
    j.Po = new b("Po", "Polonium", 84, !1, "#AB5C00", 1.4, 0, 2, 0);
    j.At = new b("At", "Astatine", 85, !0, "#754F45", 1.5, 0, 1, 0);
    j.Rn = new b("Rn", "Radon", 86, !1, "#428296",
        1.5, 0, 0, 0);
    j.Fr = new b("Fr", "Francium", 87, !1, "#420066", 2.6, 0, 0, 0);
    j.Ra = new b("Ra", "Radium", 88, !1, "#007D00", 2.21, 0, 0, 0);
    j.Ac = new b("Ac", "Actinium", 89, !1, "#70ABFA", 2.15, 0, 0, 0);
    j.Th = new b("Th", "Thorium", 90, !1, "#00BAFF", 2.06, 0, 0, 232);
    j.Pa = new b("Pa", "Protactinium", 91, !1, "#00A1FF", 2, 0, 0, 231);
    j.U = new b("U", "Uranium", 92, !1, "#008FFF", 1.96, 1.86, 0, 238);
    j.Np = new b("Np", "Neptunium", 93, !1, "#0080FF", 1.9, 0, 0, 0);
    j.Pu = new b("Pu", "Plutonium", 94, !1, "#006BFF", 1.87, 0, 0, 0);
    j.Am = new b("Am", "Americium", 95, !1, "#545CF2", 1.8,
        0, 0, 0);
    j.Cm = new b("Cm", "Curium", 96, !1, "#785CE3", 1.69, 0, 0, 0);
    j.Bk = new b("Bk", "Berkelium", 97, !1, "#8A4FE3", 0, 0, 0, 0);
    j.Cf = new b("Cf", "Californium", 98, !1, "#A136D4", 0, 0, 0, 0);
    j.Es = new b("Es", "Einsteinium", 99, !1, "#B31FD4", 0, 0, 0, 0);
    j.Fm = new b("Fm", "Fermium", 100, !1, "#B31FBA", 0, 0, 0, 0);
    j.Md = new b("Md", "Mendelevium", 101, !1, "#B30DA6", 0, 0, 0, 0);
    j.No = new b("No", "Nobelium", 102, !1, "#BD0D87", 0, 0, 0, 0);
    j.Lr = new b("Lr", "Lawrencium", 103, !1, "#C70066", 0, 0, 0, 0);
    j.Rf = new b("Rf", "Rutherfordium", 104, !1, "#CC0059", 0, 0, 0, 0);
    j.Db =
        new b("Db", "Dubnium", 105, !1, "#D1004F", 0, 0, 0, 0);
    j.Sg = new b("Sg", "Seaborgium", 106, !1, "#D90045", 0, 0, 0, 0);
    j.Bh = new b("Bh", "Bohrium", 107, !1, "#E00038", 0, 0, 0, 0);
    j.Hs = new b("Hs", "Hassium", 108, !1, "#E6002E", 0, 0, 0, 0);
    j.Mt = new b("Mt", "Meitnerium", 109, !1, "#EB0026", 0, 0, 0, 0);
    j.Ds = new b("Ds", "Darmstadtium", 110, !1, "#000000", 0, 0, 0, 0);
    j.Rg = new b("Rg", "Roentgenium", 111, !1, "#000000", 0, 0, 0, 0);
    j.Cn = new b("Cn", "Copernicium", 112, !1, "#000000", 0, 0, 0, 0);
    j.Uut = new b("Uut", "Ununtrium", 113, !1, "#000000", 0, 0, 0, 0);
    j.Uuq = new b("Uuq",
        "Ununquadium", 114, !1, "#000000", 0, 0, 0, 0);
    j.Uup = new b("Uup", "Ununpentium", 115, !1, "#000000", 0, 0, 0, 0);
    j.Uuh = new b("Uuh", "Ununhexium", 116, !1, "#000000", 0, 0, 0, 0);
    j.Uus = new b("Uus", "Ununseptium", 117, !1, "#000000", 0, 0, 0, 0);
    j.Uuo = new b("Uuo", "Ununoctium", 118, !1, "#000000", 0, 0, 0, 0);
    j.H.pymolColor = "#E6E6E6";
    j.C.pymolColor = "#33FF33";
    j.N.pymolColor = "#3333FF";
    j.O.pymolColor = "#FF4D4D";
    j.F.pymolColor = "#B3FFFF";
    j.S.pymolColor = "#E6C640";
    return j
}(ChemDoodle.SYMBOLS);
ChemDoodle.RESIDUE = function() {
    function b(b, j, g, d, f, a) {
        this.symbol = b;
        this.name = j;
        this.polar = g;
        this.aminoColor = d;
        this.shapelyColor = f;
        this.acidity = a
    }
    var j = [];
    j.Ala = new b("Ala", "Alanine", !1, "#C8C8C8", "#8CFF8C", 0);
    j.Arg = new b("Arg", "Arginine", !0, "#145AFF", "#00007C", 1);
    j.Asn = new b("Asn", "Asparagine", !0, "#00DCDC", "#FF7C70", 0);
    j.Asp = new b("Asp", "Aspartic Acid", !0, "#E60A0A", "#A00042", -1);
    j.Cys = new b("Cys", "Cysteine", !0, "#E6E600", "#FFFF70", 0);
    j.Gln = new b("Gln", "Glutamine", !0, "#00DCDC", "#FF4C4C", 0);
    j.Glu = new b("Glu",
        "Glutamic Acid", !0, "#E60A0A", "#660000", -1);
    j.Gly = new b("Gly", "Glycine", !1, "#EBEBEB", "#FFFFFF", 0);
    j.His = new b("His", "Histidine", !0, "#8282D2", "#7070FF", 1);
    j.Ile = new b("Ile", "Isoleucine", !1, "#0F820F", "#004C00", 0);
    j.Leu = new b("Leu", "Leucine", !1, "#0F820F", "#455E45", 0);
    j.Lys = new b("Lys", "Lysine", !0, "#145AFF", "#4747B8", 1);
    j.Met = new b("Met", "Methionine", !1, "#E6E600", "#B8A042", 0);
    j.Phe = new b("Phe", "Phenylalanine", !1, "#3232AA", "#534C52", 0);
    j.Pro = new b("Pro", "Proline", !1, "#DC9682", "#525252", 0);
    j.Ser = new b("Ser",
        "Serine", !0, "#FA9600", "#FF7042", 0);
    j.Thr = new b("Thr", "Threonine", !0, "#FA9600", "#B84C00", 0);
    j.Trp = new b("Trp", "Tryptophan", !0, "#B45AB4", "#4F4600", 0);
    j.Tyr = new b("Tyr", "Tyrosine", !0, "#3232AA", "#8C704C", 0);
    j.Val = new b("Val", "Valine", !1, "#0F820F", "#FF8CFF", 0);
    j.Asx = new b("Asx", "Asparagine/Aspartic Acid", !0, "#FF69B4", "#FF00FF", 0);
    j.Glx = new b("Glx", "Glutamine/Glutamic Acid", !0, "#FF69B4", "#FF00FF", 0);
    j["*"] = new b("*", "Other", !1, "#BEA06E", "#FF00FF", 0);
    j.A = new b("A", "Adenine", !1, "#BEA06E", "#A0A0FF", 0);
    j.G =
        new b("G", "Guanine", !1, "#BEA06E", "#FF7070", 0);
    j.I = new b("I", "", !1, "#BEA06E", "#80FFFF", 0);
    j.C = new b("C", "Cytosine", !1, "#BEA06E", "#FF8C4B", 0);
    j.T = new b("T", "Thymine", !1, "#BEA06E", "#A0FFA0", 0);
    j.U = new b("U", "Uracil", !1, "#BEA06E", "#FF8080", 0);
    return j
}();
(function(b) {
        b.Queue = function() {
            this.queue = []
        };
        b = b.Queue.prototype;
        b.queueSpace = 0;
        b.getSize = function() {
            return this.queue.length - this.queueSpace
        };
        b.isEmpty = function() {
            return 0 === this.queue.length
        };
        b.enqueue = function(b) {
            this.queue.push(b)
        };
        b.dequeue = function() {
            var b;
            this.queue.length && (b = this.queue[this.queueSpace], 2 * ++this.queueSpace >= this.queue.length && (this.queue = this.queue.slice(this.queueSpace), this.queueSpace = 0));
            return b
        };
        b.getOldestElement = function() {
            var b;
            this.queue.length && (b = this.queue[this.queueSpace]);
            return b
        }
    })(ChemDoodle.structures);
(function(b, j) {
        b.Point = function(b, g) {
            this.x = b ? b : 0;
            this.y = g ? g : 0
        };
        var m = b.Point.prototype;
        m.sub = function(b) {
            this.x -= b.x;
            this.y -= b.y
        };
        m.add = function(b) {
            this.x += b.x;
            this.y += b.y
        };
        m.distance = function(b) {
            var g = b.x - this.x;
            b = b.y - this.y;
            return j.sqrt(g * g + b * b)
        };
        m.angleForStupidCanvasArcs = function(b) {
            var g = b.x - this.x;
            b = b.y - this.y;
            for (var d = 0, d = 0 === g ? 0 === b ? 0 : 0 < b ? j.PI / 2 : 3 * j.PI / 2 : 0 === b ? 0 < g ? 0 : j.PI : 0 > g ? j.atan(b / g) + j.PI : 0 > b ? j.atan(b / g) + 2 * j.PI : j.atan(b / g); 0 > d;) d += 2 * j.PI;
            return d %= 2 * j.PI
        };
        m.angle = function(b) {
            var g = b.x -
                this.x;
            b = this.y - b.y;
            for (var d = 0, d = 0 === g ? 0 === b ? 0 : 0 < b ? j.PI / 2 : 3 * j.PI / 2 : 0 === b ? 0 < g ? 0 : j.PI : 0 > g ? j.atan(b / g) + j.PI : 0 > b ? j.atan(b / g) + 2 * j.PI : j.atan(b / g); 0 > d;) d += 2 * j.PI;
            return d %= 2 * j.PI
        }
    })(ChemDoodle.structures, Math);
(function(b, j, m, l, g, d) {
        l.Atom = function(d, a, e, g) {
            this.label = d ? d.replace(/\s/g, "") : "C";
            b[this.label] || (this.label = "C");
            this.x = a ? a : 0;
            this.y = e ? e : 0;
            this.z = g ? g : 0
        };
        l = l.Atom.prototype = new l.Point(0, 0);
        l.charge = 0;
        l.numLonePair = 0;
        l.numRadical = 0;
        l.mass = -1;
        l.coordinationNumber = 0;
        l.bondNumber = 0;
        l.angleOfLeastInterference = 0;
        l.isHidden = !1;
        l.altLabel = void 0;
        l.any = !1;
        l.rgroup = -1;
        l.isLone = !1;
        l.isHover = !1;
        l.isSelected = !1;
        l.add3D = function(d) {
            this.x += d.x;
            this.y += d.y;
            this.z += d.z
        };
        l.sub3D = function(d) {
            this.x -= d.x;
            this.y -=
                d.y;
            this.z -= d.z
        };
        l.distance3D = function(d) {
            var a = d.x - this.x,
                e = d.y - this.y;
            d = d.z - this.z;
            return g.sqrt(a * a + e * e + d * d)
        };
        l.draw = function(d, a) {
            if (this.isLassoed) {
                var e = d.createRadialGradient(this.x - 1, this.y - 1, 0, this.x, this.y, 7);
                e.addColorStop(0, "rgba(212, 99, 0, 0)");
                e.addColorStop(0.7, "rgba(212, 99, 0, 0.8)");
                d.fillStyle = e;
                d.beginPath();
                d.arc(this.x, this.y, 5, 0, 2 * g.PI, !1);
                d.fill()
            }
            this.textBounds = [];
            this.specs && (a = this.specs);
            var b = j.getFontString(a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D,
                a.atoms_font_italic_2D);
            d.font = b;
            d.fillStyle = this.getElementColor(a.atoms_useJMOLColors, a.atoms_usePYMOLColors, a.atoms_color, 2);
            "H" === this.label && a.atoms_HBlack_2D && (d.fillStyle = "black");
            var k;
            if (this.isLone && !a.atoms_displayAllCarbonLabels_2D || a.atoms_circles_2D) d.beginPath(), d.arc(this.x, this.y, a.atoms_circleDiameter_2D / 2, 0, 2 * g.PI, !1), d.fill(), 0 < a.atoms_circleBorderWidth_2D && (d.lineWidth = a.atoms_circleBorderWidth_2D, d.strokeStyle = "black", d.stroke(this.x, this.y, 0, 2 * g.PI, a.atoms_circleDiameter_2D /
                        2));
            else if (this.isLabelVisible(a)) if (d.textAlign = "center", d.textBaseline = "middle", void 0 !== this.altLabel) {
                    d.fillText(this.altLabel, this.x, this.y);
                    var q = d.measureText(this.altLabel).width;
                    this.textBounds.push({
                            x: this.x - q / 2,
                            y: this.y - a.atoms_font_size_2D / 2 + 1,
                            w: q,
                            h: a.atoms_font_size_2D - 2
                        })
                } else if (this.any) d.font = j.getFontString(a.atoms_font_size_2D + 5, a.atoms_font_families_2D, !0), d.fillText("*", this.x + 1, this.y + 3), q = d.measureText("*").width, this.textBounds.push({
                        x: this.x - q / 2,
                        y: this.y - a.atoms_font_size_2D / 2 + 1,
                        w: q,
                        h: a.atoms_font_size_2D - 2
                    });
            else if (-1 !== this.rgroup) e = "R" + this.rgroup, d.fillText(e, this.x, this.y), q = d.measureText(e).width, this.textBounds.push({
                        x: this.x - q / 2,
                        y: this.y - a.atoms_font_size_2D / 2 + 1,
                        w: q,
                        h: a.atoms_font_size_2D - 2
                    });
            else {
                d.fillText(this.label, this.x, this.y);
                q = d.measureText(this.label).width;
                this.textBounds.push({
                        x: this.x - q / 2,
                        y: this.y - a.atoms_font_size_2D / 2 + 1,
                        w: q,
                        h: a.atoms_font_size_2D - 2
                    });
                var n = 0;
                if (-1 !== this.mass) {
                    var l = j.getFontString(0.7 * a.atoms_font_size_2D, a.atoms_font_families_2D,
                        a.atoms_font_bold_2D, a.atoms_font_italic_2D),
                        e = d.font;
                    d.font = j.getFontString(0.7 * a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                    n = d.measureText(this.mass).width;
                    d.fillText(this.mass, this.x - n - 0.5, this.y - a.atoms_font_size_2D / 2 + 1);
                    this.textBounds.push({
                            x: this.x - q / 2 - n - 0.5,
                            y: this.y - 1.7 * a.atoms_font_size_2D / 2 + 1,
                            w: n,
                            h: a.atoms_font_size_2D / 2 - 1
                        });
                    d.font = e
                }
                var e = q / 2,
                    z = this.getImplicitHydrogenCount();
                if (a.atoms_implicitHydrogens_2D && 0 < z) {
                    k = 0;
                    var p = d.measureText("H").width,
                        u = !0;
                    if (1 < z) {
                        var r = q / 2 + p / 2,
                            v = 0,
                            l = j.getFontString(0.8 * a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                        d.font = l;
                        var w = d.measureText(z).width;
                        1 === this.bondNumber ? this.angleOfLeastInterference > g.PI / 2 && this.angleOfLeastInterference < 3 * g.PI / 2 && (r = -q / 2 - w - p / 2 - n / 2, u = !1, k = g.PI) : this.angleOfLeastInterference <= g.PI / 4 || (this.angleOfLeastInterference < 3 * g.PI / 4 ? (r = 0, v = 0.9 * -a.atoms_font_size_2D, 0 !== this.charge && (v -= 0.3 * a.atoms_font_size_2D), u = !1, k = g.PI / 2) : this.angleOfLeastInterference <=
                            5 * g.PI / 4 ? (r = -q / 2 - w - p / 2 - n / 2, u = !1, k = g.PI) : this.angleOfLeastInterference < 7 * g.PI / 4 && (r = 0, v = 0.9 * a.atoms_font_size_2D, u = !1, k = 3 * g.PI / 2));
                        d.font = b;
                        d.fillText("H", this.x + r, this.y + v);
                        d.font = l;
                        d.fillText(z, this.x + r + p / 2 + w / 2, this.y + v + 0.3 * a.atoms_font_size_2D);
                        this.textBounds.push({
                                x: this.x + r - p / 2,
                                y: this.y + v - a.atoms_font_size_2D / 2 + 1,
                                w: p,
                                h: a.atoms_font_size_2D - 2
                            });
                        this.textBounds.push({
                                x: this.x + r + p / 2,
                                y: this.y + v + 0.3 * a.atoms_font_size_2D - a.atoms_font_size_2D / 2 + 1,
                                w: w,
                                h: 0.8 * a.atoms_font_size_2D - 2
                            })
                    } else r = q / 2 + p / 2, v =
                            0, 1 === this.bondNumber ? this.angleOfLeastInterference > g.PI / 2 && this.angleOfLeastInterference < 3 * g.PI / 2 && (r = -q / 2 - p / 2 - n / 2, u = !1, k = g.PI) : this.angleOfLeastInterference <= g.PI / 4 || (this.angleOfLeastInterference < 3 * g.PI / 4 ? (r = 0, v = 0.9 * -a.atoms_font_size_2D, u = !1, k = g.PI / 2) : this.angleOfLeastInterference <= 5 * g.PI / 4 ? (r = -q / 2 - p / 2 - n / 2, u = !1, k = g.PI) : this.angleOfLeastInterference < 7 * g.PI / 4 && (r = 0, v = 0.9 * a.atoms_font_size_2D, u = !1, k = 3 * g.PI / 2)), d.fillText("H", this.x + r, this.y + v), this.textBounds.push({
                                x: this.x + r - p / 2,
                                y: this.y + v - a.atoms_font_size_2D / 2 + 1,
                                w: p,
                                h: a.atoms_font_size_2D - 2
                            });
                    u && (e += p)
                }
                0 !== this.charge && (b = this.charge.toFixed(0), b = "1" === b ? "+" : "-1" === b ? "\u2013" : j.stringStartsWith(b, "-") ? b.substring(1) + "\u2013" : b + "+", q = d.measureText(b).width, e += q / 2, d.textAlign = "center", d.textBaseline = "middle", d.font = j.getFontString(g.floor(0.8 * a.atoms_font_size_2D), a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D), d.fillText(b, this.x + e - 1, this.y - a.atoms_font_size_2D / 2 + 1), this.textBounds.push({
                            x: this.x + e - q / 2 - 1,
                            y: this.y - 1.8 * a.atoms_font_size_2D / 2 + 5,
                            w: q,
                            h: a.atoms_font_size_2D / 2 - 1
                        }))
            } if (0 < this.numLonePair || 0 < this.numRadical) {
                d.fillStyle = "black";
                l = this.angles.slice(0);
                e = this.angleOfLeastInterference;
                b = this.largestAngle;
                void 0 !== k && (l.push(k), l.sort(), b = m.angleBetweenLargest(l), e = b.angle % (2 * g.PI), b = b.largest);
                q = [];
                for (n = 0; n < this.numLonePair; n++) q.push({
                            t: 2
                        });
                for (n = 0; n < this.numRadical; n++) q.push({
                            t: 1
                        });
                if (void 0 === k && g.abs(b - 2 * g.PI / l.length) < g.PI / 60) {
                    l = g.ceil(q.length / l.length);
                    n = 0;
                    for (z = q.length; n < z; n += l, e += b) this.drawElectrons(d, a, q.slice(n,
                                g.min(q.length, n + l)), e, b, k)
                } else this.drawElectrons(d, a, q, e, b, k)
            }
        };
        l.drawElectrons = function(d, a, e, b, k, j) {
            j = k / (e.length + (0 === this.bonds.length && void 0 === j ? 0 : 1));
            k = b - k / 2 + j;
            for (var n = 0; n < e.length; n++) {
                var l = e[n];
                b = k + n * j;
                var m = this.x + Math.cos(b) * a.atoms_lonePairDistance_2D,
                    p = this.y - Math.sin(b) * a.atoms_lonePairDistance_2D;
                2 === l.t ? (l = b + Math.PI / 2, b = Math.cos(l) * a.atoms_lonePairSpread_2D / 2, l = -Math.sin(l) * a.atoms_lonePairSpread_2D / 2, d.beginPath(), d.arc(m + b, p + l, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), d.fill(),
                    d.beginPath(), d.arc(m - b, p - l, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), d.fill()) : 1 === l.t && (d.beginPath(), d.arc(m, p, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), d.fill())
            }
        };
        l.drawDecorations = function(d) {
            if (this.isHover || this.isSelected) d.strokeStyle = this.isHover ? "#885110" : "#0060B2", d.lineWidth = 1.2, d.beginPath(), d.arc(this.x, this.y, this.isHover ? 7 : 15, 0, 2 * g.PI, !1), d.stroke();
            this.isOverlap && (d.strokeStyle = "#C10000", d.lineWidth = 1.2, d.beginPath(), d.arc(this.x, this.y, 7, 0, 2 * g.PI, !1), d.stroke())
        };
        l.render = function(f,
            a, e) {
            this.specs && (a = this.specs);
            var g = d.translate(f.modelViewMatrix, [this.x, this.y, this.z], []),
                k = a.atoms_useVDWDiameters_3D ? b[this.label].vdWRadius * a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D / 2;
            0 === k && (k = 1);
            d.scale(g, [k, k, k]);
            e || (e = a.atoms_color, a.atoms_useJMOLColors ? e = b[this.label].jmolColor : a.atoms_usePYMOLColors && (e = b[this.label].pymolColor), f.material.setDiffuseColor(e));
            f.setMatrixUniforms(g);
            f.drawElements(f.TRIANGLES, (this.renderAsStar ? f.starBuffer : f.sphereBuffer).vertexIndexBuffer.numItems,
                f.UNSIGNED_SHORT, 0)
        };
        l.renderHighlight = function(f, a) {
            if (this.isSelected || this.isHover) {
                this.specs && (a = this.specs);
                var e = d.translate(f.modelViewMatrix, [this.x, this.y, this.z], []),
                    g = a.atoms_useVDWDiameters_3D ? b[this.label].vdWRadius * a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D / 2;
                0 === g && (g = 1);
                g *= 1.3;
                d.scale(e, [g, g, g]);
                f.setMatrixUniforms(e);
                f.material.setDiffuseColor(this.isHover ? "#885110" : "#0060B2");
                f.drawElements(f.TRIANGLES, (this.renderAsStar ? f.starBuffer : f.sphereBuffer).vertexIndexBuffer.numItems,
                    f.UNSIGNED_SHORT, 0)
            }
        };
        l.isLabelVisible = function(d) {
            return d.atoms_displayAllCarbonLabels_2D || "C" !== this.label || this.altLabel || (this.any || -1 !== this.rgroup) || (-1 !== this.mass || 0 !== this.charge) || d.atoms_showAttributedCarbons_2D && (0 !== this.numRadical || 0 !== this.numLonePair) || this.isHidden && d.atoms_showHiddenCarbons_2D || d.atoms_displayTerminalCarbonLabels_2D && 1 === this.bondNumber ? !0 : !1
        };
        l.getImplicitHydrogenCount = function() {
            if ("H" === this.label || !b[this.label] || !b[this.label].addH) return 0;
            var d = b[this.label].valency,
                a = d - this.coordinationNumber;
            0 < this.numRadical && (a = g.max(0, a - this.numRadical));
            0 < this.charge ? (d = 4 - d, a = this.charge <= d ? a + this.charge : 4 - this.coordinationNumber - this.charge + d) : a += this.charge;
            return 0 > a ? 0 : g.floor(a)
        };
        l.getBounds = function() {
            var d = new m.Bounds;
            d.expand(this.x, this.y);
            if (this.textBounds) for (var a = 0, e = this.textBounds.length; a < e; a++) {
                    var b = this.textBounds[a];
                    d.expand(b.x, b.y, b.x + b.w, b.y + b.h)
            }
            return d
        };
        l.getBounds3D = function() {
            var d = new m.Bounds;
            d.expand3D(this.x, this.y, this.z);
            return d
        };
        l.getElementColor = function(d, a, e, g) {
            if (2 == g && this.any || -1 !== this.rgroup) return e;
            d ? e = b[this.label].jmolColor : a && (e = b[this.label].pymolColor);
            return e
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, Math, ChemDoodle.lib.mat4);
(function(b, j, m, l, g, d, f) {
        m.Bond = function(a, e, d) {
            this.a1 = a;
            this.a2 = e;
            this.bondOrder = void 0 !== d ? d : 1
        };
        m.Bond.STEREO_NONE = "none";
        m.Bond.STEREO_PROTRUDING = "protruding";
        m.Bond.STEREO_RECESSED = "recessed";
        m.Bond.STEREO_AMBIGUOUS = "ambiguous";
        b = m.Bond.prototype;
        b.stereo = m.Bond.STEREO_NONE;
        b.isHover = !1;
        b.ring = void 0;
        b.getCenter = function() {
            return new m.Point((this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2)
        };
        b.getLength = function() {
            return this.a1.distance(this.a2)
        };
        b.getLength3D = function() {
            return this.a1.distance3D(this.a2)
        };
        b.contains = function(a) {
            return a === this.a1 || a === this.a2
        };
        b.getNeighbor = function(a) {
            if (a === this.a1) return this.a2;
            if (a === this.a2) return this.a1
        };
        b.draw = function(a, e) {
            if (!(this.a1.x === this.a2.x && this.a1.y === this.a2.y)) {
                this.specs && (e = this.specs);
                var d = this.a1.x,
                    b = this.a2.x,
                    f = this.a1.y,
                    n = this.a2.y,
                    y = this.a1.distance(this.a2),
                    z = b - d,
                    p = n - f;
                if (this.a1.isLassoed && this.a2.isLassoed) {
                    var u = a.createLinearGradient(d, f, b, n);
                    u.addColorStop(0, "rgba(212, 99, 0, 0)");
                    u.addColorStop(0.5, "rgba(212, 99, 0, 0.8)");
                    u.addColorStop(1,
                        "rgba(212, 99, 0, 0)");
                    var r = 2.5,
                        v = this.a1.angle(this.a2) + g.PI / 2,
                        w = g.cos(v),
                        v = g.sin(v),
                        A = d - w * r,
                        B = f + v * r,
                        c = d + w * r,
                        h = f - v * r,
                        D = b + w * r,
                        C = n - v * r,
                        w = b - w * r,
                        v = n + v * r;
                    a.fillStyle = u;
                    a.beginPath();
                    a.moveTo(A, B);
                    a.lineTo(c, h);
                    a.lineTo(D, C);
                    a.lineTo(w, v);
                    a.closePath();
                    a.fill()
                }
                if (e.atoms_display && !e.atoms_circles_2D && this.a1.isLabelVisible(e) && this.a1.textBounds) {
                    r = w = 0;
                    for (A = this.a1.textBounds.length; r < A; r++) w = Math.max(w, l.calculateDistanceInterior(this.a1, this.a2, this.a1.textBounds[r]));
                    w += e.bonds_atomLabelBuffer_2D;
                    w /= y;
                    d += z * w;
                    f += p * w
                }
                if (e.atoms_display && !e.atoms_circles_2D && this.a2.isLabelVisible(e) && this.a2.textBounds) {
                    r = w = 0;
                    for (A = this.a2.textBounds.length; r < A; r++) w = Math.max(w, l.calculateDistanceInterior(this.a2, this.a1, this.a2.textBounds[r]));
                    w += e.bonds_atomLabelBuffer_2D;
                    w /= y;
                    b -= z * w;
                    n -= p * w
                }
                e.bonds_clearOverlaps_2D && (w = d + 0.15 * z, v = f + 0.15 * p, r = b - 0.15 * z, y = n - 0.15 * p, a.strokeStyle = e.backgroundColor, a.lineWidth = e.bonds_width_2D + 2 * e.bonds_overlapClearWidth_2D, a.lineCap = "round", a.beginPath(), a.moveTo(w, v), a.lineTo(r,
                        y), a.closePath(), a.stroke());
                a.strokeStyle = e.bonds_color;
                a.fillStyle = e.bonds_color;
                a.lineWidth = e.bonds_width_2D;
                a.lineCap = e.bonds_ends_2D;
                if (e.bonds_useJMOLColors || e.bonds_usePYMOLColors) w = a.createLinearGradient(d, f, b, n), v = this.a1.getElementColor(e.bonds_useJMOLColors, e.bonds_usePYMOLColors, e.atoms_color, 2), r = this.a2.getElementColor(e.bonds_useJMOLColors, e.bonds_usePYMOLColors, e.atoms_color, 2), w.addColorStop(0, v), e.bonds_colorGradient || (w.addColorStop(0.5, v), w.addColorStop(0.51, r)), w.addColorStop(1,
                        r), a.strokeStyle = w, a.fillStyle = w;
                if (e.bonds_lewisStyle_2D && 0 === this.bondOrder % 1) this.drawLewisStyle(a, e, d, f, b, n);
                else switch (this.bondOrder) {
                        case 0:
                            b -= d;
                            n -= f;
                            b = g.sqrt(b * b + n * n);
                            n = g.floor(b / e.bonds_dotSize_2D);
                            b = (b - (n - 1) * e.bonds_dotSize_2D) / 2;
                            1 === n % 2 ? b += e.bonds_dotSize_2D / 4 : (b -= e.bonds_dotSize_2D / 4, n += 2);
                            n /= 2;
                            p = this.a1.angle(this.a2);
                            w = d + b * Math.cos(p);
                            v = f - b * Math.sin(p);
                            a.beginPath();
                            for (r = 0; r < n; r++) a.arc(w, v, e.bonds_dotSize_2D / 2, 0, 2 * g.PI, !1), w += 2 * e.bonds_dotSize_2D * Math.cos(p), v -= 2 * e.bonds_dotSize_2D *
                                    Math.sin(p);
                            a.fill();
                            break;
                        case 0.5:
                            a.beginPath();
                            a.moveTo(d, f);
                            j.contextHashTo(a, d, f, b, n, e.bonds_hashSpacing_2D, e.bonds_hashSpacing_2D);
                            a.stroke();
                            break;
                        case 1:
                            if (this.stereo === m.Bond.STEREO_PROTRUDING || this.stereo === m.Bond.STEREO_RECESSED) p = e.bonds_width_2D / 2, r = this.a1.distance(this.a2) * e.bonds_wedgeThickness_2D / 2, v = this.a1.angle(this.a2) + g.PI / 2, w = g.cos(v), v = g.sin(v), A = d - w * p, B = f + v * p, c = d + w * p, h = f - v * p, D = b + w * r, C = n - v * r, w = b - w * r, v = n + v * r, a.beginPath(), a.moveTo(A, B), a.lineTo(c, h), a.lineTo(D, C), a.lineTo(w,
                                    v), a.closePath(), this.stereo === m.Bond.STEREO_PROTRUDING ? a.fill() : (a.save(), a.clip(), a.lineWidth = 2 * r, a.lineCap = "butt", a.beginPath(), a.moveTo(d, f), j.contextHashTo(a, d, f, b, n, e.bonds_hashWidth_2D, e.bonds_hashSpacing_2D), a.stroke(), a.restore());
                            else if (this.stereo === m.Bond.STEREO_AMBIGUOUS) {
                                a.beginPath();
                                a.moveTo(d, f);
                                b = g.floor(g.sqrt(z * z + p * p) / e.bonds_wavyLength_2D);
                                v = this.a1.angle(this.a2) + g.PI / 2;
                                w = g.cos(v);
                                v = g.sin(v);
                                n = z / b;
                                p /= b;
                                r = 0;
                                for (A = b; r < A; r++) d += n, f += p, b = e.bonds_wavyLength_2D * w + d - 0.5 * n, y = e.bonds_wavyLength_2D * -v + f - 0.5 * p, z = e.bonds_wavyLength_2D * -w + d - 0.5 * n, B = e.bonds_wavyLength_2D * v + f - 0.5 * p, 0 === r % 2 ? a.quadraticCurveTo(b, y, d, f) : a.quadraticCurveTo(z, B, d, f);
                                a.stroke();
                                break
                            } else a.beginPath(), a.moveTo(d, f), a.lineTo(b, n), a.stroke();
                            break;
                        case 1.5:
                        case 2:
                            this.stereo === m.Bond.STEREO_AMBIGUOUS ? (r = this.a1.distance(this.a2) * e.bonds_saturationWidth_2D / 2, v = this.a1.angle(this.a2) + g.PI / 2, w = g.cos(v), v = g.sin(v), A = d - w * r, B = f + v * r, c = d + w * r, h = f - v * r, D = b + w * r, C = n - v * r, w = b - w * r, v = n + v * r, a.beginPath(), a.moveTo(A, B), a.lineTo(D, C), a.moveTo(c,
                                    h), a.lineTo(w, v), a.stroke()) : !e.bonds_symmetrical_2D && (this.ring || "C" === this.a1.label && "C" === this.a2.label) ? (a.beginPath(), a.moveTo(d, f), a.lineTo(b, n), w = 0, y = this.a1.distance(this.a2), p = this.a1.angle(this.a2), v = p + g.PI / 2, r = y * e.bonds_saturationWidth_2D, z = e.bonds_saturationAngle_2D, z < g.PI / 2 && (w = -(r / g.tan(z))), g.abs(w) < y / 2 && (z = d - g.cos(p) * w, d = b + g.cos(p) * w, b = f + g.sin(p) * w, f = n - g.sin(p) * w, w = g.cos(v), v = g.sin(v), A = z - w * r, B = b + v * r, c = z + w * r, h = b - v * r, D = d - w * r, C = f + v * r, w = d + w * r, v = f - v * r, !this.ring || this.ring.center.angle(this.a1) >
                                    this.ring.center.angle(this.a2) && !(this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) > g.PI) || this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) < -g.PI ? (a.moveTo(A, B), 2 === this.bondOrder ? a.lineTo(D, C) : j.contextHashTo(a, A, B, D, C, e.bonds_hashSpacing_2D, e.bonds_hashSpacing_2D)) : (a.moveTo(c, h), 2 === this.bondOrder ? a.lineTo(w, v) : j.contextHashTo(a, c, h, w, v, e.bonds_hashSpacing_2D, e.bonds_hashSpacing_2D)), a.stroke())) : (r = this.a1.distance(this.a2) * e.bonds_saturationWidth_2D / 2, v = this.a1.angle(this.a2) +
                                g.PI / 2, w = g.cos(v), v = g.sin(v), A = d - w * r, B = f + v * r, c = d + w * r, h = f - v * r, D = b + w * r, C = n - v * r, w = b - w * r, v = n + v * r, a.beginPath(), a.moveTo(A, B), a.lineTo(w, v), a.moveTo(c, h), 2 === this.bondOrder ? a.lineTo(D, C) : j.contextHashTo(a, c, h, D, C, e.bonds_hashSpacing_2D, e.bonds_hashSpacing_2D), a.stroke());
                            break;
                        case 3:
                            r = this.a1.distance(this.a2) * e.bonds_saturationWidth_2D, v = this.a1.angle(this.a2) + g.PI / 2, w = g.cos(v), v = g.sin(v), A = d - w * r, B = f + v * r, c = d + w * r, h = f - v * r, D = b + w * r, C = n - v * r, w = b - w * r, v = n + v * r, a.beginPath(), a.moveTo(A, B), a.lineTo(w, v), a.moveTo(c,
                                h), a.lineTo(D, C), a.moveTo(d, f), a.lineTo(b, n), a.stroke()
                }
            }
        };
        b.drawDecorations = function(a) {
            if (this.isHover || this.isSelected) {
                var e = 2 * g.PI,
                    d = (this.a1.angleForStupidCanvasArcs(this.a2) + g.PI / 2) % e;
                a.strokeStyle = this.isHover ? "#885110" : "#0060B2";
                a.lineWidth = 1.2;
                a.beginPath();
                var b = (d + g.PI) % e,
                    b = b % (2 * g.PI);
                a.arc(this.a1.x, this.a1.y, 7, d, b, !1);
                a.stroke();
                a.beginPath();
                d += g.PI;
                b = (d + g.PI) % e;
                a.arc(this.a2.x, this.a2.y, 7, d, b, !1);
                a.stroke()
            }
        };
        b.drawLewisStyle = function(a, e, d, b, f, n) {
            var j = this.a1.angle(this.a2),
                l = j +
                    g.PI / 2;
            f -= d;
            n -= b;
            f = g.sqrt(f * f + n * n) / (this.bondOrder + 1);
            n = f * g.cos(j);
            j = -f * g.sin(j);
            d += n;
            b += j;
            for (f = 0; f < this.bondOrder; f++) {
                var m = e.atoms_lonePairSpread_2D / 2,
                    u = d - g.cos(l) * m,
                    r = b + g.sin(l) * m,
                    v = d + g.cos(l) * m,
                    m = b - g.sin(l) * m;
                a.beginPath();
                a.arc(u - e.atoms_lonePairDiameter_2D / 2, r - e.atoms_lonePairDiameter_2D / 2, e.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1);
                a.fill();
                a.beginPath();
                a.arc(v - e.atoms_lonePairDiameter_2D / 2, m - e.atoms_lonePairDiameter_2D / 2, e.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1);
                a.fill();
                d += n;
                b += j
            }
        };
        b.render = function(a, e, b) {
            this.specs && (e = this.specs);
            var k = this.a1.distance3D(this.a2);
            if (0 !== k) {
                var q = e.bonds_cylinderDiameter_3D / 2,
                    n = e.bonds_color,
                    l, m = d.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []),
                    p, u = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                    r = [0, 1, 0],
                    v = 0;
                this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (r = [0, 0, 1], this.a2.y < this.a1.y && (v = g.PI)) : (v = j.vec3AngleFrom(r, u), r = f.cross(r, u, []));
                var w = e.bonds_useJMOLColors,
                    A = e.bonds_usePYMOLColors;
                if (w || A) n = this.a1.getElementColor(w,
                        A, n), l = this.a2.getElementColor(w, A, e.bonds_color), n != l && (p = d.translate(a.modelViewMatrix, [this.a2.x, this.a2.y, this.a2.z], []));
                var w = [0],
                    B;
                if (b) {
                    e.bonds_showBondOrders_3D && 1 < this.bondOrder && (w = [e.bonds_cylinderDiameter_3D], B = [0, 0, 1], b = d.inverse(a.rotationMatrix, []), d.multiplyVec3(b, B), B = f.cross(u, B, []), f.normalize(B));
                    var q = 1,
                        c = e.bonds_pillSpacing_3D,
                        u = e.bonds_pillHeight_3D;
                    0 == this.bondOrder && (e.bonds_renderAsLines_3D ? u = c : (u = e.bonds_pillDiameter_3D, u < e.bonds_cylinderDiameter_3D && (u /= 2), q = u / 2, k /= q,
                            c /= q / 2));
                    b = u + c;
                    var A = g.floor(k / b),
                        h = (c + e.bonds_pillDiameter_3D + (k - b * A)) / 2,
                        D = A;
                    p && (D = g.floor(A / 2));
                    k = 0;
                    for (c = w.length; k < c; k++) {
                        var C = d.set(m, []);
                        0 !== w[k] && d.translate(C, f.scale(B, w[k], []));
                        0 !== v && d.rotate(C, v, r);
                        1 != q && d.scale(C, [q, q, q]);
                        n && a.material.setDiffuseColor(n);
                        d.translate(C, [0, h, 0]);
                        for (var H = 0; H < D; H++) e.bonds_renderAsLines_3D ? 0 == this.bondOrder ? (a.setMatrixUniforms(C), a.drawArrays(a.POINTS, 0, 1)) : (d.scale(C, [1, u, 1]), a.setMatrixUniforms(C), a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems),
                                d.scale(C, [1, 1 / u, 1])) : (a.setMatrixUniforms(C), 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)), d.translate(C, [0, b, 0]);
                        if (p) {
                            var F, G;
                            e.bonds_renderAsLines_3D ? (F = u, F /= 2, G = 0) : (F = 2 / 3, G = (1 - F) / 2);
                            0 != A % 2 && (d.scale(C, [1, F, 1]), a.setMatrixUniforms(C), e.bonds_renderAsLines_3D ? 0 == this.bondOrder ? a.drawArrays(a.POINTS, 0, 1) : a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) :
                                0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0), d.translate(C, [0, b * (1 + G), 0]), d.scale(C, [1, 1 / F, 1]));
                            d.set(p, C);
                            0 !== w[k] && d.translate(C, f.scale(B, w[k], []));
                            d.rotate(C, v + g.PI, r);
                            1 != q && d.scale(C, [q, q, q]);
                            l && a.material.setDiffuseColor(l);
                            d.translate(C, [0, h, 0]);
                            for (H = 0; H < D; H++) e.bonds_renderAsLines_3D ? 0 == this.bondOrder ? (a.setMatrixUniforms(C), a.drawArrays(a.POINTS,
                                        0, 1)) : (d.scale(C, [1, u, 1]), a.setMatrixUniforms(C), a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems), d.scale(C, [1, 1 / u, 1])) : (a.setMatrixUniforms(C), 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)), d.translate(C, [0, b, 0]);
                            0 != A % 2 && (d.scale(C, [1, F, 1]), a.setMatrixUniforms(C), e.bonds_renderAsLines_3D ? 0 == this.bondOrder ? a.drawArrays(a.POINTS, 0, 1) :
                                a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : 0 == this.bondOrder ? a.drawElements(a.TRIANGLES, a.sphereBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0) : a.drawElements(a.TRIANGLES, a.pillBuffer.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0), d.translate(C, [0, b * (1 + G), 0]), d.scale(C, [1, 1 / F, 1]))
                        }
                    }
                } else {
                    if (e.bonds_showBondOrders_3D) {
                        switch (this.bondOrder) {
                            case 1.5:
                                w = [-e.bonds_cylinderDiameter_3D];
                                break;
                            case 2:
                                w = [-e.bonds_cylinderDiameter_3D, e.bonds_cylinderDiameter_3D];
                                break;
                            case 3:
                                w = [-1.2 * e.bonds_cylinderDiameter_3D, 0, 1.2 * e.bonds_cylinderDiameter_3D]
                        }
                        1 < this.bondOrder && (B = [0, 0, 1], b = d.inverse(a.rotationMatrix, []), d.multiplyVec3(b, B), B = f.cross(u, B, []), f.normalize(B))
                    } else switch (this.bondOrder) {
                            case 0:
                                q *= 0.25;
                                break;
                            case 0.5:
                            case 1.5:
                                q *= 0.5
                    }
                    p && (k /= 2);
                    q = [q, k, q];
                    k = 0;
                    for (c = w.length; k < c; k++) C = d.set(m, []), 0 !== w[k] && d.translate(C, f.scale(B, w[k], [])), 0 !== v && d.rotate(C, v, r), d.scale(C, q), n && a.material.setDiffuseColor(n), a.setMatrixUniforms(C), e.bonds_renderAsLines_3D ? a.drawArrays(a.LINES,
                            0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems), p && (d.set(p, C), 0 !== w[k] && d.translate(C, f.scale(B, w[k], [])), d.rotate(C, v + g.PI, r), d.scale(C, q), l && a.material.setDiffuseColor(l), a.setMatrixUniforms(C), e.bonds_renderAsLines_3D ? a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems))
                }
            }
        };
        b.renderHighlight = function(a, e) {
            if (this.isSelected ||
                this.isHover) {
                this.specs && (e = this.specs);
                this.specs && (e = this.specs);
                var b = this.a1.distance3D(this.a2);
                if (0 !== b) {
                    var k = e.bonds_cylinderDiameter_3D / 1.2,
                        q = d.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []),
                        n = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                        l = [0, 1, 0],
                        m = 0;
                    this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (n = [0, 0, 1], this.a2.y < this.a1.y && (m = g.PI)) : (m = j.vec3AngleFrom(l, n), n = f.cross(l, n, []));
                    b = [k, b, k];
                    0 !== m && d.rotate(q, m, n);
                    d.scale(q, b);
                    a.setMatrixUniforms(q);
                    a.material.setDiffuseColor(this.isHover ?
                        "#885110" : "#0060B2");
                    a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems)
                }
            }
        };
        b.renderPicker = function(a, e) {
            this.specs && (e = this.specs);
            var b = this.a1.distance3D(this.a2);
            if (0 !== b) {
                var k = e.bonds_cylinderDiameter_3D / 2,
                    q = d.translate(a.modelViewMatrix, [this.a1.x, this.a1.y, this.a1.z], []),
                    n = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                    l = [0, 1, 0],
                    m = 0;
                this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (l = [0, 0, 1], this.a2.y < this.a1.y && (m = g.PI)) : (m = j.vec3AngleFrom(l, n), l = f.cross(l,
                        n, []));
                var p = [0],
                    u;
                if (e.bonds_showBondOrders_3D) if (e.bonds_renderAsLines_3D) {
                        switch (this.bondOrder) {
                            case 1.5:
                            case 2:
                                p = [-e.bonds_cylinderDiameter_3D, e.bonds_cylinderDiameter_3D];
                                break;
                            case 3:
                                p = [-1.2 * e.bonds_cylinderDiameter_3D, 0, 1.2 * e.bonds_cylinderDiameter_3D]
                        }
                        if (1 < this.bondOrder) {
                            u = [0, 0, 1];
                            var r = d.inverse(a.rotationMatrix, []);
                            d.multiplyVec3(r, u);
                            u = f.cross(n, u, []);
                            f.normalize(u)
                        }
                    } else switch (this.bondOrder) {
                            case 1.5:
                            case 2:
                                k *= 3;
                                break;
                            case 3:
                                k *= 3.4
                    } else switch (this.bondOrder) {
                            case 0:
                                k *= 0.25;
                                break;
                            case 0.5:
                            case 1.5:
                                k *= 0.5
                    }
                b = [k, b, k];
                k = 0;
                for (n = p.length; k < n; k++) r = d.set(q, []), 0 !== p[k] && d.translate(r, f.scale(u, p[k], [])), 0 !== m && d.rotate(r, m, l), d.scale(r, b), a.setMatrixUniforms(r), e.bonds_renderAsLines_3D ? a.drawArrays(a.LINES, 0, a.lineBuffer.vertexPositionBuffer.numItems) : a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderBuffer.vertexPositionBuffer.numItems)
            }
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(b, j) {
        b.Ring = function() {
            this.atoms = [];
            this.bonds = []
        };
        var m = b.Ring.prototype;
        m.center = void 0;
        m.setupBonds = function() {
            for (var b = 0, g = this.bonds.length; b < g; b++) this.bonds[b].ring = this;
            this.center = this.getCenter()
        };
        m.getCenter = function() {
            for (var l = Infinity, g = Infinity, d = -Infinity, f = -Infinity, a = 0, e = this.atoms.length; a < e; a++) l = j.min(this.atoms[a].x, l), g = j.min(this.atoms[a].y, g), d = j.max(this.atoms[a].x, d), f = j.max(this.atoms[a].y, f);
            return new b.Point((d + l) / 2, (f + g) / 2)
        }
    })(ChemDoodle.structures, Math);
(function(b, j, m, l, g) {
        m.Molecule = function() {
            this.atoms = [];
            this.bonds = [];
            this.rings = []
        };
        var d = m.Molecule.prototype;
        d.findRings = !0;
        d.draw = function(d, a) {
            this.specs && (a = this.specs);
            if (a.atoms_display && !a.atoms_circles_2D) for (var e = 0, b = this.atoms.length; e < b; e++) this.atoms[e].draw(d, a);
            if (a.bonds_display) {
                e = 0;
                for (b = this.bonds.length; e < b; e++) this.bonds[e].draw(d, a)
            }
            if (a.atoms_display && a.atoms_circles_2D) {
                e = 0;
                for (b = this.atoms.length; e < b; e++) this.atoms[e].draw(d, a)
            }
        };
        d.render = function(d, a) {
            this.specs && (a = this.specs);
            var e = 0 < this.atoms.length && void 0 !== this.atoms[0].hetatm;
            if (e) {
                if (a.macro_displayBonds) {
                    0 < this.bonds.length && (a.bonds_renderAsLines_3D && !this.residueSpecs || this.residueSpecs && this.residueSpecs.bonds_renderAsLines_3D ? (d.lineWidth(this.residueSpecs ? this.residueSpecs.bonds_width_2D : a.bonds_width_2D), d.lineBuffer.bindBuffers(d)) : d.cylinderBuffer.bindBuffers(d), d.material.setTempColors(a.bonds_materialAmbientColor_3D, void 0, a.bonds_materialSpecularColor_3D, a.bonds_materialShininess_3D));
                    for (var b = 0, k =
                            this.bonds.length; b < k; b++) {
                        var g = this.bonds[b];
                        if (!g.a1.hetatm && (-1 === a.macro_atomToLigandDistance || void 0 !== g.a1.closestDistance && a.macro_atomToLigandDistance >= g.a1.closestDistance && a.macro_atomToLigandDistance >= g.a2.closestDistance)) g.render(d, this.residueSpecs ? this.residueSpecs : a)
                    }
                }
                if (a.macro_displayAtoms) {
                    0 < this.atoms.length && (d.sphereBuffer.bindBuffers(d), d.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, a.atoms_materialSpecularColor_3D, a.atoms_materialShininess_3D));
                    b = 0;
                    for (k =
                        this.atoms.length; b < k; b++) if (g = this.atoms[b], !g.hetatm && (-1 === a.macro_atomToLigandDistance || void 0 !== g.closestDistance && a.macro_atomToLigandDistance >= g.closestDistance)) g.render(d, this.residueSpecs ? this.residueSpecs : a)
                }
            }
            if (a.bonds_display) {
                var n = [],
                    y = [];
                0 < this.bonds.length && (a.bonds_renderAsLines_3D ? (d.lineWidth(a.bonds_width_2D), d.lineBuffer.bindBuffers(d)) : d.cylinderBuffer.bindBuffers(d), d.material.setTempColors(a.bonds_materialAmbientColor_3D, void 0, a.bonds_materialSpecularColor_3D, a.bonds_materialShininess_3D));
                b = 0;
                for (k = this.bonds.length; b < k; b++) if (g = this.bonds[b], !e || g.a1.hetatm) a.bonds_showBondOrders_3D ? 0 == g.bondOrder ? y.push(g) : 0.5 == g.bondOrder ? n.push(g) : (1.5 == g.bondOrder && n.push(g), g.render(d, a)) : g.render(d, a);
                if (0 < n.length) {
                    a.bonds_renderAsLines_3D || d.pillBuffer.bindBuffers(d);
                    b = 0;
                    for (k = n.length; b < k; b++) n[b].render(d, a, !0)
                }
                if (0 < y.length) {
                    a.bonds_renderAsLines_3D || d.sphereBuffer.bindBuffers(d);
                    b = 0;
                    for (k = y.length; b < k; b++) y[b].render(d, a, !0)
                }
            }
            if (a.atoms_display) {
                b = 0;
                for (k = this.atoms.length; b < k; b++) g = this.atoms[b],
                g.bondNumber = 0, g.renderAsStar = !1;
                b = 0;
                for (k = this.bonds.length; b < k; b++) g = this.bonds[b], g.a1.bondNumber++, g.a2.bondNumber++;
                0 < this.atoms.length && (d.sphereBuffer.bindBuffers(d), d.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, a.atoms_materialSpecularColor_3D, a.atoms_materialShininess_3D));
                n = [];
                b = 0;
                for (k = this.atoms.length; b < k; b++) if (g = this.atoms[b], !e || g.hetatm && (a.macro_showWater || !g.isWater)) a.atoms_nonBondedAsStars_3D && 0 === g.bondNumber ? (g.renderAsStar = !0, n.push(g)) : g.render(d, a);
                if (0 <
                    n.length) {
                    d.starBuffer.bindBuffers(d);
                    b = 0;
                    for (k = n.length; b < k; b++) n[b].render(d, a)
                }
            }
            if (this.chains) {
                d.setMatrixUniforms(d.modelViewMatrix);
                if (a.proteins_displayRibbon) {
                    d.material.setTempColors(a.proteins_materialAmbientColor_3D, void 0, a.proteins_materialSpecularColor_3D, a.proteins_materialShininess_3D);
                    e = 0;
                    for (n = this.ribbons.length; e < n; e++) if (g = a.proteins_ribbonCartoonize ? this.cartoons[e] : this.ribbons[e], "none" !== a.proteins_residueColor) {
                            g.front.bindBuffers(d);
                            y = "rainbow" === a.proteins_residueColor;
                            b = 0;
                            for (k = g.front.segments.length; b < k; b++) y && d.material.setDiffuseColor(j.rainbowAt(b, k, a.macro_rainbowColors)), g.front.segments[b].render(d, a);
                            g.back.bindBuffers(d);
                            b = 0;
                            for (k = g.back.segments.length; b < k; b++) y && d.material.setDiffuseColor(j.rainbowAt(b, k, a.macro_rainbowColors)), g.back.segments[b].render(d, a)
                        } else if (a.proteins_ribbonCartoonize) {
                        g.front.bindBuffers(d);
                        b = 0;
                        for (k = g.front.cartoonSegments.length; b < k; b++) g.front.cartoonSegments[b].render(d, a);
                        g.back.bindBuffers(d);
                        b = 0;
                        for (k = g.back.cartoonSegments.length; b <
                            k; b++) g.back.cartoonSegments[b].render(d, a)
                    } else g.front.render(d, a), g.back.render(d, a)
                }
                if (a.proteins_displayBackbone) {
                    if (!this.alphaCarbonTrace) {
                        this.alphaCarbonTrace = {
                            nodes: [],
                            edges: []
                        };
                        e = 0;
                        for (n = this.chains.length; e < n; e++) if (y = this.chains[e], !(2 < y.length && l[y[2].name] && "#BEA06E" === l[y[2].name].aminoColor) && 0 < y.length) {
                                b = 1;
                                for (k = y.length - 2; b < k; b++) g = y[b].cp1, g.chainColor = y.chainColor, this.alphaCarbonTrace.nodes.push(g), g = new m.Bond(y[b].cp1, y[b + 1].cp1), g.residueName = y[b].name, g.chainColor = y.chainColor,
                                this.alphaCarbonTrace.edges.push(g), b === y.length - 3 && (g = y[b + 1].cp1, g.chainColor = y.chainColor, this.alphaCarbonTrace.nodes.push(g))
                            }
                    }
                    if (0 < this.alphaCarbonTrace.nodes.length) {
                        e = new m.VisualSpecifications;
                        e.atoms_display = !0;
                        e.bonds_display = !0;
                        e.atoms_sphereDiameter_3D = a.proteins_backboneThickness;
                        e.bonds_cylinderDiameter_3D = a.proteins_backboneThickness;
                        e.bonds_useJMOLColors = !1;
                        e.atoms_color = a.proteins_backboneColor;
                        e.bonds_color = a.proteins_backboneColor;
                        e.atoms_useVDWDiameters_3D = !1;
                        d.material.setTempColors(a.proteins_materialAmbientColor_3D,
                            void 0, a.proteins_materialSpecularColor_3D, a.proteins_materialShininess_3D);
                        d.material.setDiffuseColor(a.proteins_backboneColor);
                        b = 0;
                        for (k = this.alphaCarbonTrace.nodes.length; b < k; b++) g = this.alphaCarbonTrace.nodes[b], a.macro_colorByChain && (e.atoms_color = g.chainColor), d.sphereBuffer.bindBuffers(d), g.render(d, e);
                        b = 0;
                        for (k = this.alphaCarbonTrace.edges.length; b < k; b++) {
                            var g = this.alphaCarbonTrace.edges[b],
                                z, n = l[g.residueName] ? l[g.residueName] : l["*"];
                            a.macro_colorByChain ? z = g.chainColor : "shapely" === a.proteins_residueColor ?
                                z = n.shapelyColor : "amino" === a.proteins_residueColor ? z = n.aminoColor : "polarity" === a.proteins_residueColor ? z = n.polar ? "#C10000" : "#FFFFFF" : "acidity" === a.proteins_residueColor ? z = 1 === n.acidity ? "#0000FF" : -1 === n.acidity ? "#FF0000" : n.polar ? "#FFFFFF" : "#773300" : "rainbow" === a.proteins_residueColor && (z = j.rainbowAt(b, k, a.macro_rainbowColors));
                            z && (e.bonds_color = z);
                            d.cylinderBuffer.bindBuffers(d);
                            g.render(d, e)
                        }
                    }
                }
                if (a.nucleics_display) {
                    d.material.setTempColors(a.nucleics_materialAmbientColor_3D, void 0, a.nucleics_materialSpecularColor_3D,
                        a.nucleics_materialShininess_3D);
                    e = 0;
                    for (n = this.tubes.length; e < n; e++) d.setMatrixUniforms(d.modelViewMatrix), g = this.tubes[e], g.render(d, a)
                }
            }
            a.crystals_displayUnitCell && this.unitCell && (d.setMatrixUniforms(d.modelViewMatrix), this.unitCell.bindBuffers(d), d.material.setDiffuseColor(a.crystals_unitCellColor), d.lineWidth(a.crystals_unitCellLineWidth), d.drawElements(d.LINES, this.unitCell.vertexIndexBuffer.numItems, d.UNSIGNED_SHORT, 0));
            if (a.atoms_display) {
                z = !1;
                b = 0;
                for (k = this.atoms.length; b < k; b++) if (g = this.atoms[b],
                        g.isHover || g.isSelected) {
                        z = !0;
                        break
                    }
                if (!z) {
                    b = 0;
                    for (k = this.bonds.length; b < k; b++) if (g = this.bonds[b], g.isHover || g.isSelected) {
                            z = !0;
                            break
                        }
                }
                if (z) {
                    d.sphereBuffer.bindBuffers(d);
                    d.blendFunc(d.SRC_ALPHA, d.ONE);
                    d.material.setTempColors(a.atoms_materialAmbientColor_3D, void 0, "#000000", 0);
                    d.enable(d.BLEND);
                    d.depthMask(!1);
                    d.material.setAlpha(0.4);
                    d.sphereBuffer.bindBuffers(d);
                    b = 0;
                    for (k = this.atoms.length; b < k; b++) g = this.atoms[b], (g.isHover || g.isSelected) && g.renderHighlight(d, a);
                    d.cylinderBuffer.bindBuffers(d);
                    b = 0;
                    for (k = this.bonds.length; b < k; b++) g = this.bonds[b], (g.isHover || g.isSelected) && g.renderHighlight(d, a);
                    d.depthMask(!0);
                    d.disable(d.BLEND);
                    d.blendFuncSeparate(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA, d.ONE, d.ONE_MINUS_SRC_ALPHA)
                }
            }
            this.surface && a.surfaces_display && (d.setMatrixUniforms(d.modelViewMatrix), this.surface.bindBuffers(d), d.material.setTempColors(a.surfaces_materialAmbientColor_3D, a.surfaces_color, a.surfaces_materialSpecularColor_3D, a.surfaces_materialShininess_3D), "Dot" === a.surfaces_style ? d.drawArrays(d.POINTS,
                    0, this.surface.vertexPositionBuffer.numItems) : d.drawElements(d.TRIANGLES, this.surface.vertexIndexBuffer.numItems, d.UNSIGNED_SHORT, 0))
        };
        d.renderPickFrame = function(d, a, e) {
            this.specs && (a = this.specs);
            var b = 0 < this.atoms.length && void 0 !== this.atoms[0].hetatm;
            if (a.bonds_display) {
                0 < this.bonds.length && (a.bonds_renderAsLines_3D ? (d.lineWidth(a.bonds_width_2D), d.lineBuffer.bindBuffers(d)) : d.cylinderBuffer.bindBuffers(d));
                for (var g = 0, l = this.bonds.length; g < l; g++) {
                    var n = this.bonds[g];
                    if (!b || n.a1.hetatm) d.material.setDiffuseColor(j.idx2color(e.length)),
                    n.renderPicker(d, a), e.push(n)
                }
            }
            if (a.atoms_display) {
                g = 0;
                for (l = this.atoms.length; g < l; g++) n = this.atoms[g], n.bondNumber = 0, n.renderAsStar = !1;
                g = 0;
                for (l = this.bonds.length; g < l; g++) n = this.bonds[g], n.a1.bondNumber++, n.a2.bondNumber++;
                0 < this.atoms.length && d.sphereBuffer.bindBuffers(d);
                for (var m = [], g = 0, l = this.atoms.length; g < l; g++) if (n = this.atoms[g], !b || n.hetatm && (a.macro_showWater || !n.isWater)) a.atoms_nonBondedAsStars_3D && 0 === n.bondNumber ? (n.renderAsStar = !0, m.push(n)) : (d.material.setDiffuseColor(j.idx2color(e.length)),
                            n.render(d, a, !0), e.push(n));
                if (0 < m.length) {
                    d.starBuffer.bindBuffers(d);
                    g = 0;
                    for (l = m.length; g < l; g++) n = m[g], d.material.setDiffuseColor(j.idx2color(e.length)), n.render(d, a, !0), e.push(n)
                }
            }
        };
        d.getCenter3D = function() {
            if (1 === this.atoms.length) return new m.Atom("C", this.atoms[0].x, this.atoms[0].y, this.atoms[0].z);
            var d = Infinity,
                a = Infinity,
                e = Infinity,
                b = -Infinity,
                k = -Infinity,
                j = -Infinity;
            if (this.chains) for (var n = 0, l = this.chains.length; n < l; n++) for (var z = this.chains[n], p = 0, u = z.length; p < u; p++) var r = z[p],
            d = g.min(r.cp1.x,
                r.cp2.x, d), a = g.min(r.cp1.y, r.cp2.y, a), e = g.min(r.cp1.z, r.cp2.z, e), b = g.max(r.cp1.x, r.cp2.x, b), k = g.max(r.cp1.y, r.cp2.y, k), j = g.max(r.cp1.z, r.cp2.z, j);
            n = 0;
            for (l = this.atoms.length; n < l; n++) d = g.min(this.atoms[n].x, d), a = g.min(this.atoms[n].y, a), e = g.min(this.atoms[n].z, e), b = g.max(this.atoms[n].x, b), k = g.max(this.atoms[n].y, k), j = g.max(this.atoms[n].z, j);
            return new m.Atom("C", (b + d) / 2, (k + a) / 2, (j + e) / 2)
        };
        d.getCenter = function() {
            if (1 === this.atoms.length) return new m.Point(this.atoms[0].x, this.atoms[0].y);
            for (var d =
                Infinity, a = Infinity, e = -Infinity, b = -Infinity, k = 0, j = this.atoms.length; k < j; k++) d = g.min(this.atoms[k].x, d), a = g.min(this.atoms[k].y, a), e = g.max(this.atoms[k].x, e), b = g.max(this.atoms[k].y, b);
            return new m.Point((e + d) / 2, (b + a) / 2)
        };
        d.getDimension = function() {
            if (1 === this.atoms.length) return new m.Point(0, 0);
            var d = Infinity,
                a = Infinity,
                e = -Infinity,
                b = -Infinity;
            if (this.chains) {
                for (var k = 0, j = this.chains.length; k < j; k++) for (var n = this.chains[k], l = 0, z = n.length; l < z; l++) var p = n[l],
                d = g.min(p.cp1.x, p.cp2.x, d), a = g.min(p.cp1.y,
                    p.cp2.y, a), e = g.max(p.cp1.x, p.cp2.x, e), b = g.max(p.cp1.y, p.cp2.y, b);
                d -= 30;
                a -= 30;
                e += 30;
                b += 30
            }
            k = 0;
            for (j = this.atoms.length; k < j; k++) d = g.min(this.atoms[k].x, d), a = g.min(this.atoms[k].y, a), e = g.max(this.atoms[k].x, e), b = g.max(this.atoms[k].y, b);
            return new m.Point(e - d, b - a)
        };
        d.check = function(d) {
            if (d && this.doChecks) {
                if (this.findRings) if (this.bonds.length - this.atoms.length !== this.fjNumCache) {
                        this.rings = (new b.informatics.SSSRFinder(this)).rings;
                        for (var a = 0, e = this.bonds.length; a < e; a++) this.bonds[a].ring = void 0;
                        a =
                            0;
                        for (e = this.rings.length; a < e; a++) this.rings[a].setupBonds()
                    } else {
                        a = 0;
                        for (e = this.rings.length; a < e; a++) {
                            var g = this.rings[a];
                            g.center = g.getCenter()
                        }
                    }
                a = 0;
                for (e = this.atoms.length; a < e; a++) if (this.atoms[a].isLone = !1, "C" === this.atoms[a].label) {
                        for (var k = g = 0, j = this.bonds.length; k < j; k++)(this.bonds[k].a1 === this.atoms[a] || this.bonds[k].a2 === this.atoms[a]) && g++;
                        0 === g && (this.atoms[a].isLone = !0)
                    }
                g = !1;
                a = 0;
                for (e = this.atoms.length; a < e; a++) 0 !== this.atoms[a].z && (g = !0);
                g && (this.sortAtomsByZ(), this.sortBondsByZ());
                this.setupMetaData();
                this.atomNumCache = this.atoms.length;
                this.bondNumCache = this.bonds.length;
                this.fjNumCache = this.bonds.length - this.atoms.length
            }
            this.doChecks = !d
        };
        d.getAngles = function(d) {
            for (var a = [], e = 0, b = this.bonds.length; e < b; e++) this.bonds[e].contains(d) && a.push(d.angle(this.bonds[e].getNeighbor(d)));
            a.sort();
            return a
        };
        d.getCoordinationNumber = function(d) {
            for (var a = 0, e = 0, b = d.length; e < b; e++) a += d[e].bondOrder;
            return a
        };
        d.getBonds = function(d) {
            for (var a = [], e = 0, b = this.bonds.length; e < b; e++) this.bonds[e].contains(d) && a.push(this.bonds[e]);
            return a
        };
        d.sortAtomsByZ = function() {
            for (var d = 1, a = this.atoms.length; d < a; d++) for (var e = d; 0 < e && this.atoms[e].z < this.atoms[e - 1].z;) {
                    var b = this.atoms[e];
                    this.atoms[e] = this.atoms[e - 1];
                    this.atoms[e - 1] = b;
                    e--
            }
        };
        d.sortBondsByZ = function() {
            for (var d = 1, a = this.bonds.length; d < a; d++) for (var e = d; 0 < e && this.bonds[e].a1.z + this.bonds[e].a2.z < this.bonds[e - 1].a1.z + this.bonds[e - 1].a2.z;) {
                    var b = this.bonds[e];
                    this.bonds[e] = this.bonds[e - 1];
                    this.bonds[e - 1] = b;
                    e--
            }
        };
        d.setupMetaData = function() {
            for (var d = this.getCenter(), a = 0, e =
                    this.atoms.length; a < e; a++) {
                var b = this.atoms[a];
                b.bonds = this.getBonds(b);
                b.angles = this.getAngles(b);
                b.isHidden = 2 === b.bonds.length && g.abs(g.abs(b.angles[1] - b.angles[0]) - g.PI) < g.PI / 30 && b.bonds[0].bondOrder === b.bonds[1].bondOrder;
                var k = j.angleBetweenLargest(b.angles);
                b.angleOfLeastInterference = k.angle % (2 * g.PI);
                b.largestAngle = k.largest;
                b.coordinationNumber = this.getCoordinationNumber(b.bonds);
                b.bondNumber = b.bonds.length;
                b.molCenter = d
            }
            a = 0;
            for (e = this.bonds.length; a < e; a++) this.bonds[a].molCenter = d
        };
        d.scaleToAverageBondLength = function(d) {
            var a = this.getAverageBondLength();
            if (0 !== a) {
                d /= a;
                for (var a = 0, e = this.atoms.length; a < e; a++) this.atoms[a].x *= d, this.atoms[a].y *= d
            }
        };
        d.getAverageBondLength = function() {
            if (0 === this.bonds.length) return 0;
            for (var d = 0, a = 0, e = this.bonds.length; a < e; a++) d += this.bonds[a].getLength();
            return d /= this.bonds.length
        };
        d.getBounds = function() {
            for (var d = new j.Bounds, a = 0, e = this.atoms.length; a < e; a++) d.expand(this.atoms[a].getBounds());
            if (this.chains) {
                a = 0;
                for (e = this.chains.length; a < e; a++) for (var b = this.chains[a],
                            g = 0, l = b.length; g < l; g++) {
                        var n = b[g];
                        d.expand(n.cp1.x, n.cp1.y);
                        d.expand(n.cp2.x, n.cp2.y)
                }
                d.minX -= 30;
                d.minY -= 30;
                d.maxX += 30;
                d.maxY += 30
            }
            return d
        };
        d.getBounds3D = function() {
            for (var d = new j.Bounds, a = 0, e = this.atoms.length; a < e; a++) d.expand(this.atoms[a].getBounds3D());
            if (this.chains) {
                a = 0;
                for (e = this.chains.length; a < e; a++) for (var b = this.chains[a], g = 0, l = b.length; g < l; g++) {
                        var n = b[g];
                        d.expand3D(n.cp1.x, n.cp1.y, n.cp1.z);
                        d.expand3D(n.cp2.x, n.cp2.y, n.cp2.z)
                }
            }
            return d
        }
    })(ChemDoodle, ChemDoodle.math, ChemDoodle.structures,
    ChemDoodle.RESIDUE, Math);
(function(b, j, m, l) {
        var g, d = -1;
        b.Residue = function(a) {
            this.resSeq = a
        };
        var f = b.Residue.prototype;
        f.setup = function(a, e) {
            this.horizontalResolution = e;
            var d = [a.x - this.cp1.x, a.y - this.cp1.y, a.z - this.cp1.z],
                f = l.cross(d, [this.cp2.x - this.cp1.x, this.cp2.y - this.cp1.y, this.cp2.z - this.cp1.z], []);
            this.D = l.cross(f, d, []);
            l.normalize(f);
            l.normalize(this.D);
            this.guidePointsSmall = [];
            this.guidePointsLarge = [];
            d = [(a.x + this.cp1.x) / 2, (a.y + this.cp1.y) / 2, (a.z + this.cp1.z) / 2];
            this.helix && (l.scale(f, 1.5), l.add(d, f));
            this.guidePointsSmall[0] =
                new b.Atom("", d[0] - this.D[0] / 2, d[1] - this.D[1] / 2, d[2] - this.D[2] / 2);
            for (f = 1; f < e; f++) this.guidePointsSmall[f] = new b.Atom("", this.guidePointsSmall[0].x + this.D[0] * f / e, this.guidePointsSmall[0].y + this.D[1] * f / e, this.guidePointsSmall[0].z + this.D[2] * f / e);
            l.scale(this.D, 4);
            this.guidePointsLarge[0] = new b.Atom("", d[0] - this.D[0] / 2, d[1] - this.D[1] / 2, d[2] - this.D[2] / 2);
            for (f = 1; f < e; f++) this.guidePointsLarge[f] = new b.Atom("", this.guidePointsLarge[0].x + this.D[0] * f / e, this.guidePointsLarge[0].y + this.D[1] * f / e, this.guidePointsLarge[0].z +
                    this.D[2] * f / e)
        };
        f.getGuidePointSet = function(a) {
            if (0 === a) return this.helix || this.sheet ? this.guidePointsLarge : this.guidePointsSmall;
            if (1 === a) return this.guidePointsSmall;
            if (2 === a) return this.guidePointsLarge
        };
        f.computeLineSegments = function(a, e, b, f, j) {
            if (j !== d) {
                var n = j * j,
                    l = j * j * j;
                g = m.multiply([-1 / 6, 0.5, -0.5, 1 / 6, 0.5, -1, 0.5, 0, -0.5, 0, 0.5, 0, 1 / 6, 2 / 3, 1 / 6, 0], [6 / l, 0, 0, 0, 6 / l, 2 / n, 0, 0, 1 / l, 1 / n, 1 / j, 0, 0, 0, 0, 1], []);
                d = j
            }
            this.split = e.helix !== this.helix || e.sheet !== this.sheet;
            this.lineSegments = this.innerCompute(0, a, e, b, !1, j);
            f && (this.lineSegmentsCartoon = this.innerCompute(e.helix || e.sheet ? 2 : 1, a, e, b, !0, j))
        };
        f.innerCompute = function(a, e, d, f, q, n) {
            var y = [],
                z = this.getGuidePointSet(a);
            e = e.getGuidePointSet(a);
            d = d.getGuidePointSet(a);
            for (var p = f.getGuidePointSet(a), u = 0, r = this.guidePointsLarge.length; u < r; u++) {
                for (var v = m.multiply([e[u].x, e[u].y, e[u].z, 1, z[u].x, z[u].y, z[u].z, 1, d[u].x, d[u].y, d[u].z, 1, p[u].x, p[u].y, p[u].z, 1], g, []), w = [], A = 0; A < n; A++) {
                    for (a = 3; 0 < a; a--) for (f = 0; 4 > f; f++) v[4 * a + f] += v[4 * (a - 1) + f];
                    w[A] = new b.Atom("", v[12] /
                        v[15], v[13] / v[15], v[14] / v[15])
                }
                y[u] = w
            }
            if (q && this.arrow) for (a = 0; a < n; a++) {
                    q = 1.5 - 1.3 * a / n;
                    z = j.floor(this.horizontalResolution / 2);
                    e = y[z];
                    f = 0;
                    for (d = y.length; f < d; f++) f !== z && (p = e[a], u = y[f][a], r = [u.x - p.x, u.y - p.y, u.z - p.z], l.scale(r, q), u.x = p.x + r[0], u.y = p.y + r[1], u.z = p.z + r[2])
            }
            return y
        }
    })(ChemDoodle.structures, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(b, j, m, l, g) {
        j.Spectrum = function() {
            this.data = [];
            this.metadata = [];
            this.dataDisplay = [];
            this.memory = {
                offsetTop: 0,
                offsetLeft: 0,
                offsetBottom: 0,
                flipXAxis: !1,
                scale: 1,
                width: 0,
                height: 0
            }
        };
        l = j.Spectrum.prototype;
        l.title = void 0;
        l.xUnit = void 0;
        l.yUnit = void 0;
        l.continuous = !0;
        l.integrationSensitivity = 0.01;
        l.draw = function(d, f, a, e) {
            this.specs && (f = this.specs);
            var j = 5,
                k = 0,
                l = 0;
            d.fillStyle = f.text_color;
            d.textAlign = "center";
            d.textBaseline = "alphabetic";
            d.font = b.getFontString(f.text_font_size, f.text_font_families);
            this.xUnit && (l += f.text_font_size, d.fillText(this.xUnit, a / 2, e - 2));
            this.yUnit && f.plots_showYAxis && (k += f.text_font_size, d.save(), d.translate(f.text_font_size, e / 2), d.rotate(-g.PI / 2), d.fillText(this.yUnit, 0, 0), d.restore());
            this.title && (j += f.text_font_size, d.fillText(this.title, a / 2, f.text_font_size));
            l += 5 + f.text_font_size;
            f.plots_showYAxis && (k += 5 + d.measureText("1000").width);
            f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth = f.plots_gridLineWidth, d.strokeRect(k, j, a - k, e - l - j));
            d.textAlign = "center";
            d.textBaseline = "top";
            for (var n = this.maxX - this.minX, m = n / 100, z = 0.001; z < m || 25 < n / z;) z *= 10;
            for (var p = 0, u = f.plots_flipXAxis ? a : 0, n = g.round(this.minX / z) * z; n <= this.maxX; n += z / 2) {
                var r = this.getTransformedX(n, f, a, k);
                if (r > k) if (d.strokeStyle = "black", d.lineWidth = 1, 0 === p % 2) {
                        d.beginPath();
                        d.moveTo(r, e - l);
                        d.lineTo(r, e - l + 2);
                        d.stroke();
                        for (m = n.toFixed(5);
                            "0" === m.charAt(m.length - 1);) m = m.substring(0, m.length - 1);
                        "." === m.charAt(m.length - 1) && (m = m.substring(0, m.length - 1));
                        var v = d.measureText(m).width;
                        f.plots_flipXAxis && (v *= -1);
                        var w = r - v / 2;
                        if (f.plots_flipXAxis ? w < u : w > u) d.fillText(m, r, e - l + 2), u = r + v / 2;
                        f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth = f.plots_gridLineWidth, d.beginPath(), d.moveTo(r, e - l), d.lineTo(r, j), d.stroke())
                    } else d.beginPath(), d.moveTo(r, e - l), d.lineTo(r, e - l + 2), d.stroke();
                p++
            }
            if (f.plots_showYAxis || f.plots_showGrid) {
                z = 1 / f.scale;
                d.textAlign = "right";
                d.textBaseline = "middle";
                for (n = 0; 10 >= n; n++) if (m = z / 10 * n, p = j + (e - l - j) * (1 - m * f.scale), f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth = f.plots_gridLineWidth,
                            d.beginPath(), d.moveTo(k, p), d.lineTo(a, p), d.stroke()), f.plots_showYAxis) {
                        d.strokeStyle = "black";
                        d.lineWidth = 1;
                        d.beginPath();
                        d.moveTo(k, p);
                        d.lineTo(k - 3, p);
                        d.stroke();
                        m *= 100;
                        u = g.max(0, 3 - g.floor(m).toString().length);
                        m = m.toFixed(u);
                        if (0 < u) for (;
                                "0" === m.charAt(m.length - 1);) m = m.substring(0, m.length - 1);
                        "." === m.charAt(m.length - 1) && (m = m.substring(0, m.length - 1));
                        d.fillText(m, k - 3, p)
                    }
            }
            d.strokeStyle = "black";
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(a, e - l);
            d.lineTo(k, e - l);
            f.plots_showYAxis && d.lineTo(k, j);
            d.stroke();
            if (0 < this.dataDisplay.length) {
                d.textAlign = "left";
                d.textBaseline = "top";
                n = m = 0;
                for (z = this.dataDisplay.length; n < z; n++) if (this.dataDisplay[n].value) d.fillText([this.dataDisplay[n].display, ": ", this.dataDisplay[n].value].join(""), k + 10, j + 10 + m * (f.text_font_size + 5)), m++;
                    else if (this.dataDisplay[n].tag) {
                    p = 0;
                    for (u = this.metadata.length; p < u; p++) if (b.stringStartsWith(this.metadata[p], this.dataDisplay[n].tag)) {
                            u = this.metadata[p];
                            this.dataDisplay[n].display && (u = this.metadata[p].indexOf("\x3d"), u = [this.dataDisplay[n].display,
                                    ": ", -1 < u ? this.metadata[p].substring(u + 2) : this.metadata[p]
                                ].join(""));
                            d.fillText(u, k + 10, j + 10 + m * (f.text_font_size + 5));
                            m++;
                            break
                        }
                }
            }
            this.drawPlot(d, f, a, e, j, k, l);
            this.memory.offsetTop = j;
            this.memory.offsetLeft = k;
            this.memory.offsetBottom = l;
            this.memory.flipXAxis = f.plots_flipXAxis;
            this.memory.scale = f.scale;
            this.memory.width = a;
            this.memory.height = e
        };
        l.drawPlot = function(d, b, a, e, l, k, q) {
            this.specs && (b = this.specs);
            d.strokeStyle = b.plots_color;
            d.lineWidth = b.plots_width;
            var n = [];
            d.beginPath();
            if (this.continuous) for (var m = !1, z = 0, p = !1, u = 0, r = this.data.length; u < r; u++) {
                    var v = this.getTransformedX(this.data[u].x, b, a, k),
                        w;
                    u < r && !m && (w = this.getTransformedX(this.data[u + 1].x, b, a, k));
                    if (v >= k && v < a || void 0 !== w && w >= k && w < a) {
                        var A = this.getTransformedY(this.data[u].y, b, e, q, l);
                        b.plots_showIntegration && g.abs(this.data[u].y) > this.integrationSensitivity && n.push(new j.Point(this.data[u].x, this.data[u].y));
                        m || (d.moveTo(v, A), m = !0);
                        d.lineTo(v, A);
                        z++;
                        0 === z % 1E3 && (d.stroke(), d.beginPath(), d.moveTo(v, A));
                        if (p) break
                    } else m && (p = !0)
            } else {
                u = 0;
                for (r =
                    this.data.length; u < r; u++) v = this.getTransformedX(this.data[u].x, b, a, k), v >= k && v < a && (d.moveTo(v, e - q), d.lineTo(v, this.getTransformedY(this.data[u].y, b, e, q, l)))
            }
            d.stroke();
            if (b.plots_showIntegration && 1 < n.length) {
                d.strokeStyle = b.plots_integrationColor;
                d.lineWidth = b.plots_integrationLineWidth;
                d.beginPath();
                u = n[1].x > n[0].x;
                if (this.flipXAxis && !u || !this.flipXAxis && u) {
                    for (u = n.length - 2; 0 <= u; u--) n[u].y += n[u + 1].y;
                    m = n[0].y
                } else {
                    u = 1;
                    for (r = n.length; u < r; u++) n[u].y += n[u - 1].y;
                    m = n[n.length - 1].y
                }
                u = 0;
                for (r = n.length; u < r; u++) v =
                        this.getTransformedX(n[u].x, b, a, k), A = this.getTransformedY(n[u].y / b.scale / m, b, e, q, l), 0 === u ? d.moveTo(v, A) : d.lineTo(v, A);
                d.stroke()
            }
        };
        l.getTransformedY = function(d, b, a, e, g) {
            return g + (a - e - g) * (1 - d * b.scale)
        };
        l.getInverseTransformedY = function(d) {
            return 100 * ((1 - (d - this.memory.offsetTop) / (this.memory.height - this.memory.offsetBottom - this.memory.offsetTop)) / this.memory.scale)
        };
        l.getTransformedX = function(d, b, a, e) {
            d = e + (d - this.minX) / (this.maxX - this.minX) * (a - e);
            b.plots_flipXAxis && (d = a + e - d);
            return d
        };
        l.getInverseTransformedX = function(d) {
            this.memory.flipXAxis && (d = this.memory.width + this.memory.offsetLeft - d);
            return (d - this.memory.offsetLeft) * (this.maxX - this.minX) / (this.memory.width - this.memory.offsetLeft) + this.minX
        };
        l.setup = function() {
            for (var d = Number.MAX_VALUE, b = Number.MIN_VALUE, a = Number.MIN_VALUE, e = 0, j = this.data.length; e < j; e++) d = g.min(d, this.data[e].x), b = g.max(b, this.data[e].x), a = g.max(a, this.data[e].y);
            this.continuous ? (this.minX = d, this.maxX = b) : (this.minX = d - 1, this.maxX = b + 1);
            e = 0;
            for (j = this.data.length; e < j; e++) this.data[e].y /=
                    a
        };
        l.zoom = function(d, b, a, e) {
            d = this.getInverseTransformedX(d);
            b = this.getInverseTransformedX(b);
            this.minX = g.min(d, b);
            this.maxX = g.max(d, b);
            if (e) {
                e = Number.MIN_VALUE;
                b = 0;
                for (d = this.data.length; b < d; b++) m.isBetween(this.data[b].x, this.minX, this.maxX) && (e = g.max(e, this.data[b].y));
                return 1 / e
            }
        };
        l.translate = function(d, b) {
            var a = d / (b - this.memory.offsetLeft) * (this.maxX - this.minX) * (this.memory.flipXAxis ? 1 : -1);
            this.minX += a;
            this.maxX += a
        };
        l.alertMetadata = function() {
            alert(this.metadata.join("\n"))
        };
        l.getInternalCoordinates = function(d, b) {
            return new ChemDoodle.structures.Point(this.getInverseTransformedX(d), this.getInverseTransformedY(b))
        };
        l.getClosestPlotInternalCoordinates = function(d) {
            var b = this.getInverseTransformedX(d - 1);
            d = this.getInverseTransformedX(d + 1);
            if (b > d) {
                var a = b,
                    b = d;
                d = a
            }
            for (var a = -1, e = -Infinity, g = !1, k = 0, j = this.data.length; k < j; k++) {
                var n = this.data[k];
                if (m.isBetween(n.x, b, d)) n.y > e && (g = !0, e = n.y, a = k);
                else if (g) break
            }
            if (-1 !== a) return n = this.data[a], new ChemDoodle.structures.Point(n.x, 100 * n.y)
        };
        l.getClosestPeakInternalCoordinates = function(d) {
            var b = this.getInverseTransformedX(d);
            d = 0;
            for (var a = Infinity, e = 0, j = this.data.length; e < j; e++) {
                var k = g.abs(this.data[e].x - b);
                if (k <= a) a = k, d = e;
                else break
            }
            b = highestRight = d;
            a = maxRight = this.data[d].y;
            e = d + 1;
            for (j = this.data.length; e < j; e++) if (this.data[e].y + 0.05 > maxRight) maxRight = this.data[e].y, highestRight = e;
                else break;
            for (e = d - 1; 0 <= e; e--) if (this.data[e].y + 0.05 > a) a = this.data[e].y, b = e;
                else break;
            d = this.data[b - d > highestRight - d ? highestRight : b];
            return new ChemDoodle.structures.Point(d.x, 100 * d.y)
        }
    })(ChemDoodle.extensions,
    ChemDoodle.structures, ChemDoodle.math, ChemDoodle.lib.jQuery, Math);
(function(b, j, m) {
        j._Shape = function() {};
        j = j._Shape.prototype;
        j.drawDecorations = function(b, g) {
            if (this.isHover) for (var d = this.getPoints(), f = 0, a = d.length; f < a; f++) {
                    var e = d[f];
                    this.drawAnchor(b, g, e, e === this.hoverPoint)
            }
        };
        j.getBounds = function() {
            for (var j = new b.Bounds, g = this.getPoints(), d = 0, f = g.length; d < f; d++) {
                var a = g[d];
                j.expand(a.x, a.y)
            }
            return j
        };
        j.drawAnchor = function(b, g, d, f) {
            b.save();
            b.translate(d.x, d.y);
            b.rotate(m.PI / 4);
            b.scale(1 / g.scale, 1 / g.scale);
            b.beginPath();
            b.moveTo(-4, -4);
            b.lineTo(4, -4);
            b.lineTo(4,
                4);
            b.lineTo(-4, 4);
            b.closePath();
            b.fillStyle = f ? "#885110" : "white";
            b.fill();
            b.beginPath();
            b.moveTo(-4, -2);
            b.lineTo(-4, -4);
            b.lineTo(-2, -4);
            b.moveTo(2, -4);
            b.lineTo(4, -4);
            b.lineTo(4, -2);
            b.moveTo(4, 2);
            b.lineTo(4, 4);
            b.lineTo(2, 4);
            b.moveTo(-2, 4);
            b.lineTo(-4, 4);
            b.lineTo(-4, 2);
            b.moveTo(-4, -2);
            b.strokeStyle = "rgba(0,0,0,.2)";
            b.lineWidth = 5;
            b.stroke();
            b.strokeStyle = "blue";
            b.lineWidth = 1;
            b.stroke();
            b.restore()
        }
    })(ChemDoodle.math, ChemDoodle.structures.d2, Math);
(function(b, j, m, l, g) {
        l.Bracket = function(d, b) {
            this.p1 = d ? d : new m.Point;
            this.p2 = b ? b : new m.Point
        };
        l = l.Bracket.prototype = new l._Shape;
        l.charge = 0;
        l.mult = 0;
        l.repeat = 0;
        l.draw = function(d, f) {
            var a = g.min(this.p1.x, this.p2.x),
                e = g.max(this.p1.x, this.p2.x),
                j = g.min(this.p1.y, this.p2.y),
                k = g.max(this.p1.y, this.p2.y),
                l = k - j,
                n = l / 10;
            d.beginPath();
            d.moveTo(a + n, j);
            d.lineTo(a, j);
            d.lineTo(a, k);
            d.lineTo(a + n, k);
            d.moveTo(e - n, k);
            d.lineTo(e, k);
            d.lineTo(e, j);
            d.lineTo(e - n, j);
            this.isLassoed && (n = d.createLinearGradient(this.p1.x, this.p1.y,
                    this.p2.x, this.p2.y), n.addColorStop(0, "rgba(212, 99, 0, 0)"), n.addColorStop(0.5, "rgba(212, 99, 0, 0.8)"), n.addColorStop(1, "rgba(212, 99, 0, 0)"), d.lineWidth = f.shapes_lineWidth_2D + 5, d.strokeStyle = n, d.lineJoin = "miter", d.lineCap = "square", d.stroke());
            d.strokeStyle = f.shapes_color;
            d.lineWidth = f.shapes_lineWidth_2D;
            d.lineJoin = "miter";
            d.lineCap = "butt";
            d.stroke();
            0 !== this.charge && (d.fillStyle = f.text_color, d.textAlign = "left", d.textBaseline = "alphabetic", d.font = b.getFontString(f.text_font_size, f.text_font_families),
                n = this.charge.toFixed(0), n = "1" === n ? "+" : "-1" === n ? "\u2013" : b.stringStartsWith(n, "-") ? n.substring(1) + "\u2013" : n + "+", d.fillText(n, e + 5, j + 5));
            0 !== this.mult && (d.fillStyle = f.text_color, d.textAlign = "right", d.textBaseline = "middle", d.font = b.getFontString(f.text_font_size, f.text_font_families), d.fillText(this.mult.toFixed(0), a - 5, j + l / 2));
            0 !== this.repeat && (d.fillStyle = f.text_color, d.textAlign = "left", d.textBaseline = "top", d.font = b.getFontString(f.text_font_size, f.text_font_families), n = this.repeat.toFixed(0), d.fillText(n,
                    e + 5, k - 5))
        };
        l.getPoints = function() {
            return [this.p1, this.p2]
        };
        l.isOver = function(d) {
            return j.isBetween(d.x, this.p1.x, this.p2.x) && j.isBetween(d.y, this.p1.y, this.p2.y)
        }
    })(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(b, j, m, l) {
        m.Line = function(d, b) {
            this.p1 = d ? d : new j.Point;
            this.p2 = b ? b : new j.Point
        };
        m.Line.ARROW_SYNTHETIC = "synthetic";
        m.Line.ARROW_RETROSYNTHETIC = "retrosynthetic";
        m.Line.ARROW_RESONANCE = "resonance";
        m.Line.ARROW_EQUILIBRIUM = "equilibrium";
        var g = m.Line.prototype = new m._Shape;
        g.arrowType = void 0;
        g.topText = void 0;
        g.bottomText = void 0;
        g.draw = function(d, b) {
            if (this.isLassoed) {
                var a = d.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
                a.addColorStop(0, "rgba(212, 99, 0, 0)");
                a.addColorStop(0.5,
                    "rgba(212, 99, 0, 0.8)");
                a.addColorStop(1, "rgba(212, 99, 0, 0)");
                var e = 2.5,
                    g = this.p1.angle(this.p2) + l.PI / 2,
                    k = l.cos(g),
                    g = l.sin(g),
                    j = this.p1.x - k * e,
                    n = this.p1.y + g * e,
                    y = this.p1.x + k * e,
                    z = this.p1.y - g * e,
                    p = this.p2.x + k * e,
                    u = this.p2.y - g * e,
                    r = this.p2.x - k * e,
                    v = this.p2.y + g * e;
                d.fillStyle = a;
                d.beginPath();
                d.moveTo(j, n);
                d.lineTo(y, z);
                d.lineTo(p, u);
                d.lineTo(r, v);
                d.closePath();
                d.fill()
            }
            d.strokeStyle = b.shapes_color;
            d.fillStyle = b.shapes_color;
            d.lineWidth = b.shapes_lineWidth_2D;
            d.lineJoin = "miter";
            d.lineCap = "butt";
            if (this.p1.x !==
                this.p2.x || this.p1.y !== this.p2.y) {
                if (this.arrowType === m.Line.ARROW_RETROSYNTHETIC) {
                    var a = 2 * l.sqrt(2),
                        e = b.shapes_arrowLength_2D / a,
                        k = this.p1.angle(this.p2),
                        g = k + l.PI / 2,
                        a = b.shapes_arrowLength_2D / a,
                        w = l.cos(k),
                        A = l.sin(k),
                        k = l.cos(g),
                        g = l.sin(g),
                        j = this.p1.x - k * e,
                        n = this.p1.y + g * e,
                        y = this.p1.x + k * e,
                        z = this.p1.y - g * e,
                        p = this.p2.x + k * e - w * a,
                        u = this.p2.y - g * e + A * a,
                        r = this.p2.x - k * e - w * a,
                        v = this.p2.y + g * e + A * a,
                        B = this.p2.x + 2 * k * e - 2 * w * a,
                        c = this.p2.y - 2 * g * e + 2 * A * a,
                        h = this.p2.x - 2 * k * e - 2 * w * a,
                        e = this.p2.y + 2 * g * e + 2 * A * a;
                    d.beginPath();
                    d.moveTo(y,
                        z);
                    d.lineTo(p, u);
                    d.moveTo(B, c);
                    d.lineTo(this.p2.x, this.p2.y);
                    d.lineTo(h, e);
                    d.moveTo(r, v);
                    d.lineTo(j, n)
                } else this.arrowType === m.Line.ARROW_EQUILIBRIUM ? (a = 2 * l.sqrt(2), e = b.shapes_arrowLength_2D / a / 2, k = this.p1.angle(this.p2), g = k + l.PI / 2, a = 2 * b.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(k), A = l.sin(k), k = l.cos(g), g = l.sin(g), j = this.p1.x - k * e, n = this.p1.y + g * e, y = this.p1.x + k * e, z = this.p1.y - g * e, p = this.p2.x + k * e, u = this.p2.y - g * e, r = this.p2.x - k * e, v = this.p2.y + g * e, d.beginPath(), d.moveTo(y, z), d.lineTo(p, u), d.moveTo(r, v), d.lineTo(j,
                            n), d.stroke(), y = p - 0.8 * w * a, z = u + 0.8 * A * a, B = p + k * b.shapes_arrowLength_2D / 3 - w * a, c = u - g * b.shapes_arrowLength_2D / 3 + A * a, d.beginPath(), d.moveTo(p, u), d.lineTo(B, c), d.lineTo(y, z), d.closePath(), d.fill(), d.stroke(), y = j + 0.8 * w * a, z = n - 0.8 * A * a, B = j - k * b.shapes_arrowLength_2D / 3 + w * a, c = n + g * b.shapes_arrowLength_2D / 3 - A * a, d.beginPath(), d.moveTo(j, n), d.lineTo(B, c), d.lineTo(y, z), d.closePath(), d.fill()) : this.arrowType === m.Line.ARROW_SYNTHETIC ? (k = this.p1.angle(this.p2), g = k + l.PI / 2, a = 2 * b.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(k),
                        A = l.sin(k), k = l.cos(g), g = l.sin(g), d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(this.p2.x - w * a / 2, this.p2.y + A * a / 2), d.stroke(), y = this.p2.x - 0.8 * w * a, z = this.p2.y + 0.8 * A * a, B = this.p2.x + k * b.shapes_arrowLength_2D / 3 - w * a, c = this.p2.y - g * b.shapes_arrowLength_2D / 3 + A * a, h = this.p2.x - k * b.shapes_arrowLength_2D / 3 - w * a, e = this.p2.y + g * b.shapes_arrowLength_2D / 3 + A * a, d.beginPath(), d.moveTo(this.p2.x, this.p2.y), d.lineTo(h, e), d.lineTo(y, z), d.lineTo(B, c), d.closePath(), d.fill()) : this.arrowType === m.Line.ARROW_RESONANCE ? (k = this.p1.angle(this.p2),
                        g = k + l.PI / 2, a = 2 * b.shapes_arrowLength_2D / l.sqrt(3), w = l.cos(k), A = l.sin(k), k = l.cos(g), g = l.sin(g), d.beginPath(), d.moveTo(this.p1.x + w * a / 2, this.p1.y - A * a / 2), d.lineTo(this.p2.x - w * a / 2, this.p2.y + A * a / 2), d.stroke(), y = this.p2.x - 0.8 * w * a, z = this.p2.y + 0.8 * A * a, B = this.p2.x + k * b.shapes_arrowLength_2D / 3 - w * a, c = this.p2.y - g * b.shapes_arrowLength_2D / 3 + A * a, h = this.p2.x - k * b.shapes_arrowLength_2D / 3 - w * a, e = this.p2.y + g * b.shapes_arrowLength_2D / 3 + A * a, d.beginPath(), d.moveTo(this.p2.x, this.p2.y), d.lineTo(h, e), d.lineTo(y, z), d.lineTo(B,
                            c), d.closePath(), d.fill(), d.stroke(), y = this.p1.x + 0.8 * w * a, z = this.p1.y - 0.8 * A * a, B = this.p1.x - k * b.shapes_arrowLength_2D / 3 + w * a, c = this.p1.y + g * b.shapes_arrowLength_2D / 3 - A * a, h = this.p1.x + k * b.shapes_arrowLength_2D / 3 + w * a, e = this.p1.y - g * b.shapes_arrowLength_2D / 3 - A * a, d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(h, e), d.lineTo(y, z), d.lineTo(B, c), d.closePath(), d.fill()) : (d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(this.p2.x, this.p2.y));
                d.stroke();
                this.topText && (d.textAlign = "center", d.textBaseline =
                    "bottom", d.fillText(this.topText, (this.p1.x + this.p2.x) / 2, this.p1.y - 5));
                this.bottomText && (d.textAlign = "center", d.textBaseline = "top", d.fillText(this.bottomText, (this.p1.x + this.p2.x) / 2, this.p1.y + 5))
            }
        };
        g.getPoints = function() {
            return [this.p1, this.p2]
        };
        g.isOver = function(d, f) {
            var a = b.distanceFromPointToLineInclusive(d, this.p1, this.p2);
            return -1 !== a && a < f
        }
    })(ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(b, j, m, l, g) {
        var d = function(a) {
            var d = [];
            if (a instanceof m.Atom) if (0 === a.bondNumber) d.push(g.PI);
                else {
                    if (a.angles) {
                        if (1 === a.angles.length) d.push(a.angles[0] + g.PI);
                        else {
                            for (var b = 1, f = a.angles.length; b < f; b++) d.push(a.angles[b - 1] + (a.angles[b] - a.angles[b - 1]) / 2);
                            b = a.angles[a.angles.length - 1];
                            d.push(b + (a.angles[0] + 2 * g.PI - b) / 2)
                        }
                        a.largestAngle > g.PI && (d = [a.angleOfLeastInterference]);
                        if (a.bonds) {
                            b = 0;
                            for (f = a.bonds.length; b < f; b++) {
                                var j = a.bonds[b];
                                if (2 === j.bondOrder && (j = j.getNeighbor(a), "O" === j.label)) {
                                    d = [j.angle(a)];
                                    break
                                }
                            }
                        }
                    }
                } else a = a.a1.angle(a.a2), d.push(a + g.PI / 2), d.push(a + 3 * g.PI / 2);
            b = 0;
            for (f = d.length; b < f; b++) {
                for (; d[b] > 2 * g.PI;) d[b] -= 2 * g.PI;
                for (; 0 > d[b];) d[b] += 2 * g.PI
            }
            return d
        }, f = function(a, d) {
                var b = 3;
                if (a instanceof m.Atom) {
                    if (a.isLabelVisible(d) && (b = 8), 0 !== a.charge || 0 !== a.numRadical || 0 !== a.numLonePair) b = 13
                } else a instanceof m.Point ? b = 0 : 1 < a.bondOrder && (b = 5);
                return b
            }, a = function(a, d, b, j, n, l, z, p, u, r) {
                var v = l.angle(n),
                    w = z.angle(p),
                    A = v + g.PI / 2,
                    B = g.cos(v),
                    v = g.sin(v),
                    A = f(b, d);
                n.x -= B * A;
                n.y += v * A;
                A = w + g.PI /
                    2;
                b = 2 * d.shapes_arrowLength_2D / g.sqrt(3);
                var B = g.cos(w),
                    v = g.sin(w),
                    c = g.cos(A),
                    h = g.sin(A);
                p.x -= 5 * B;
                p.y += 5 * v;
                w = new m.Point(p.x, p.y);
                A = f(j, d) / 3;
                w.x -= B * A;
                w.y += v * A;
                p.x -= B * (0.8 * b + A);
                p.y += v * (0.8 * b + A);
                j = w.x - 0.8 * B * b;
                var A = w.y + 0.8 * v * b,
                    D = new m.Point(w.x + c * d.shapes_arrowLength_2D / 3 - B * b, w.y - h * d.shapes_arrowLength_2D / 3 + v * b);
                d = new m.Point(w.x - c * d.shapes_arrowLength_2D / 3 - B * b, w.y + h * d.shapes_arrowLength_2D / 3 + v * b);
                v = B = !0;
                1 === u && (D.distance(l) > d.distance(l) ? v = !1 : B = !1);
                a.beginPath();
                a.moveTo(w.x, w.y);
                v && a.lineTo(d.x, d.y);
                a.lineTo(j, A);
                B && a.lineTo(D.x, D.y);
                a.closePath();
                a.fill();
                a.stroke();
                a.beginPath();
                a.moveTo(n.x, n.y);
                a.bezierCurveTo(l.x, l.y, z.x, z.y, p.x, p.y);
                a.stroke();
                r.push([n, l, z, p])
            };
        l.Pusher = function(a, d, b) {
            this.o1 = a;
            this.o2 = d;
            this.numElectron = b ? b : 1
        };
        l = l.Pusher.prototype = new l._Shape;
        l.drawDecorations = function(a, d) {
            if (this.isHover) for (var b = this.o1 instanceof m.Atom ? new m.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), f = this.o2 instanceof m.Atom ? new m.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), b = [b, f],
                        f = 0, g = b.length; f < g; f++) {
                    var j = b[f];
                    this.drawAnchor(a, d, j, j === this.hoverPoint)
            }
        };
        l.draw = function(e, f) {
            if (this.o1 && this.o2) {
                e.strokeStyle = f.shapes_color;
                e.fillStyle = f.shapes_color;
                e.lineWidth = f.shapes_lineWidth_2D;
                e.lineJoin = "miter";
                e.lineCap = "butt";
                for (var k = this.o1 instanceof m.Atom ? new m.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), j = this.o2 instanceof m.Atom ? new m.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), n = d(this.o1), l = d(this.o2), z, p, u = Infinity, r = 0, v = n.length; r < v; r++) for (var w = 0, A = l.length; w <
                        A; w++) {
                        var B = new m.Point(k.x + 35 * g.cos(n[r]), k.y - 35 * g.sin(n[r])),
                            c = new m.Point(j.x + 35 * g.cos(l[w]), j.y - 35 * g.sin(l[w])),
                            h = B.distance(c);
                        h < u && (u = h, z = B, p = c)
                }
                this.caches = []; - 1 === this.numElectron ? (r = k.distance(j) / 2, l = k.angle(j), n = l + g.PI / 2, v = g.cos(l), w = g.sin(l), l = new m.Point(k.x + (r - 1) * v, k.y - (r - 1) * w), u = new m.Point(l.x + 35 * g.cos(n + g.PI / 6), l.y - 35 * g.sin(n + g.PI / 6)), r = new m.Point(k.x + (r + 1) * v, k.y - (r + 1) * w), n = new m.Point(r.x + 35 * g.cos(n - g.PI / 6), r.y - 35 * g.sin(n - g.PI / 6)), a(e, f, this.o1, l, k, z, u, l, 1, this.caches), a(e, f, this.o2,
                        r, j, p, n, r, 1, this.caches)) : (b.intersectLines(k.x, k.y, z.x, z.y, j.x, j.y, p.x, p.y) && (n = z, z = p, p = n), n = z.angle(k), l = p.angle(j), u = g.max(n, l) - g.min(n, l), 0.001 > g.abs(u - g.PI) && this.o1.molCenter === this.o2.molCenter && (n += g.PI / 2, l -= g.PI / 2, z.x = k.x + 35 * g.cos(n + g.PI), z.y = k.y - 35 * g.sin(n + g.PI), p.x = j.x + 35 * g.cos(l + g.PI), p.y = j.y - 35 * g.sin(l + g.PI)), a(e, f, this.o1, this.o2, k, z, p, j, this.numElectron, this.caches))
            }
        };
        l.getPoints = function() {
            return []
        };
        l.isOver = function(a, d) {
            for (var b = 0, f = this.caches.length; b < f; b++) if (j.distanceFromCurve(a,
                        this.caches[b]).distance < d) return !0;
            return !1
        }
    })(ChemDoodle.math, ChemDoodle.math.jsBezier, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(b) {
        b._Mesh = function() {};
        b = b._Mesh.prototype;
        b.storeData = function(b, m, l) {
            this.positionData = b;
            this.normalData = m;
            this.indexData = l
        };
        b.setupBuffers = function(b) {
            this.vertexPositionBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.positionData), b.STATIC_DRAW);
            this.vertexPositionBuffer.itemSize = 3;
            this.vertexPositionBuffer.numItems = this.positionData.length / 3;
            this.vertexNormalBuffer = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER,
                this.vertexNormalBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.normalData), b.STATIC_DRAW);
            this.vertexNormalBuffer.itemSize = 3;
            this.vertexNormalBuffer.numItems = this.normalData.length / 3;
            this.indexData && (this.vertexIndexBuffer = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), b.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexData.length);
            if (this.partitions) for (var m =
                    0, l = this.partitions.length; m < l; m++) {
                    var g = this.partitions[m],
                        d = this.generateBuffers(b, g.positionData, g.normalData, g.indexData);
                    g.vertexPositionBuffer = d[0];
                    g.vertexNormalBuffer = d[1];
                    g.vertexIndexBuffer = d[2]
            }
        };
        b.generateBuffers = function(b, m, l, g) {
            var d = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, d);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(m), b.STATIC_DRAW);
            d.itemSize = 3;
            d.numItems = m.length / 3;
            m = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, m);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(l), b.STATIC_DRAW);
            m.itemSize = 3;
            m.numItems = l.length / 3;
            var f;
            g && (f = b.createBuffer(), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, f), b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(g), b.STATIC_DRAW), f.itemSize = 1, f.numItems = g.length);
            return [d, m, f]
        };
        b.bindBuffers = function(b) {
            this.vertexPositionBuffer || this.setupBuffers(b);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer);
            b.vertexAttribPointer(b.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, b.FLOAT, !1, 0, 0);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexNormalBuffer);
            b.vertexAttribPointer(b.shader.vertexNormalAttribute, this.vertexNormalBuffer.itemSize, b.FLOAT, !1, 0, 0);
            this.vertexIndexBuffer && b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer)
        }
    })(ChemDoodle.structures.d3, Math);
(function(b) {
        b._Measurement = function() {};
        (b._Measurement.prototype = new b._Mesh).render = function(b, m) {
            b.setMatrixUniforms(b.modelViewMatrix);
            m.measurement_update_3D && (this.text = this.vertexPositionBuffer = void 0);
            this.vertexPositionBuffer || this.calculateData(m);
            this.bindBuffers(b);
            b.material.setDiffuseColor(m.shapes_color);
            b.lineWidth(1);
            b.drawElements(b.LINES, this.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0);
            if (m.measurement_displayText_3D) {
                this.text || (this.text = this.getText(m));
                var l = {
                    position: [],
                    texCoord: [],
                    translation: []
                };
                b.textImage.pushVertexData(this.text.value, this.text.pos, 0, l);
                b.textMesh.storeData(b, l.position, l.texCoord, l.translation);
                b.enable(b.BLEND);
                b.depthMask(!1);
                b.enableVertexAttribArray(b.shader.vertexTexCoordAttribute);
                b.textImage.useTexture(b);
                b.textMesh.render(b);
                b.disableVertexAttribArray(b.shader.vertexTexCoordAttribute);
                b.disable(b.BLEND);
                b.depthMask(!0)
            }
        }
    })(ChemDoodle.structures.d3);
(function(b, j, m, l, g, d, f) {
        m.Angle = function(a, d, b) {
            this.a1 = a;
            this.a2 = d;
            this.a3 = b
        };
        b = m.Angle.prototype = new m._Measurement;
        b.calculateData = function(a) {
            var d = [],
                b = [],
                k = [],
                l = this.a2.distance3D(this.a1),
                n = this.a2.distance3D(this.a3);
            this.distUse = g.min(l, n) / 2;
            this.vec1 = f.normalize([this.a1.x - this.a2.x, this.a1.y - this.a2.y, this.a1.z - this.a2.z]);
            this.vec2 = f.normalize([this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z]);
            this.angle = j.vec3AngleFrom(this.vec1, this.vec2);
            l = f.normalize(f.cross(this.vec1,
                    this.vec2, []));
            l = f.normalize(f.cross(l, this.vec1, []));
            a = a.measurement_angleBands_3D;
            for (n = 0; n <= a; ++n) {
                var m = this.angle * n / a,
                    z = f.scale(this.vec1, g.cos(m), []),
                    m = f.scale(l, g.sin(m), []),
                    z = f.scale(f.normalize(f.add(z, m, [])), this.distUse);
                d.push(this.a2.x + z[0], this.a2.y + z[1], this.a2.z + z[2]);
                b.push(0, 0, 0);
                n < a && k.push(n, n + 1)
            }
            this.storeData(d, b, k)
        };
        b.getText = function() {
            var a = f.scale(f.normalize(f.add(this.vec1, this.vec2, [])), this.distUse + 0.3);
            return {
                pos: [this.a2.x + a[0], this.a2.y + a[1], this.a2.z + a[2]],
                value: [l.angleBounds(this.angle, !0).toFixed(2), " \u00b0"].join("")
            }
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures.d3, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(b, j) {
        b.Arrow = function(b, l) {
            for (var g = [], d = [], f = 0; f <= l; f++) {
                var a = 2 * f * j.PI / l,
                    e = j.sin(a),
                    a = j.cos(a);
                d.push(0, 0, -1, 0, 0, -1, a, e, 0, a, e, 0, 0, 0, -1, 0, 0, -1, a, e, 1, a, e, 1);
                g.push(0, 0, 0, b * a, b * e, 0, b * a, b * e, 0, b * a, b * e, 2, b * a, b * e, 2, 2 * b * a, 2 * b * e, 2, 2 * b * a, 2 * b * e, 2, 0, 0, 3)
            }
            f = [];
            for (e = 0; e < l; e++) for (var a = 8 * e, t = 0; 7 > t; t++) {
                    var k = t + a,
                        q = k + 7 + 2;
                    f.push(k, q, k + 1, q, k, q - 1)
            }
            this.storeData(g, d, f)
        };
        b.Arrow.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, Math);
(function(b, j, m) {
        b.LineArrow = function() {
            this.storeData([0, 0, -3, 0.1, 0, -2.8, 0, 0, -3, -0.1, 0, -2.8, 0, 0, -3, 0, 0, 3, 0, 0, 3, 0.1, 0, 2.8, 0, 0, 3, -0.1, 0, 2.8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        };
        b.LineArrow.prototype = new b._Mesh;
        b.Compass = function(g, d) {
            this.textImage = new b.TextImage;
            this.textImage.init(g);
            this.textImage.updateFont(g, d.text_font_size, d.text_font_families, d.text_font_bold, d.text_font_italic, d.text_font_stroke_3D);
            this.textMesh = new b.TextMesh;
            this.textMesh.init(g);
            var f = 3 / (d.compass_size_3D /
                g.canvas.clientHeight),
                a = j.tan(d.projectionPerspectiveVerticalFieldOfView_3D / 360 * j.PI),
                e = f / a,
                l = j.max(e - f, 0.1),
                k = g.canvas.clientWidth / g.canvas.clientHeight,
                q, n;
            d.projectionPerspective_3D ? (n = l, q = m.frustum) : (n = e, q = m.ortho);
            var y = 2 * (n / g.canvas.clientHeight) * a,
                a = a * n;
            n = -a;
            var z = k * n,
                k = k * a;
            if (0 === d.compass_type_3D) {
                var p = (-(g.canvas.clientWidth - d.compass_size_3D) / 2 + this.textImage.charHeight) * y,
                    y = (-(g.canvas.clientHeight - d.compass_size_3D) / 2 + this.textImage.charHeight) * y,
                    z = z - p,
                    k = k - p;
                n -= y;
                a -= y
            }
            this.projectionMatrix =
                q(z, k, n, a, l, e + f);
            this.translationMatrix = m.translate(m.identity([]), [0, 0, -e]);
            f = {
                position: [],
                texCoord: [],
                translation: []
            };
            this.textImage.pushVertexData("X", [3.5, 0, 0], 0, f);
            this.textImage.pushVertexData("Y", [0, 3.5, 0], 0, f);
            this.textImage.pushVertexData("Z", [0, 0, 3.5], 0, f);
            this.textMesh.storeData(g, f.position, f.texCoord, f.translation)
        };
        var l = b.Compass.prototype;
        l.renderArrow = function(b, d, f, a) {
            b.material.setDiffuseColor(f);
            b.setMatrixUniforms(a);
            1 === d ? b.drawArrays(b.LINES, 0, b.lineArrowBuffer.vertexPositionBuffer.numItems) :
                b.drawElements(b.TRIANGLES, b.arrowBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
        };
        l.render = function(b, d) {
            1 === d.compass_type_3D ? b.lineArrowBuffer.bindBuffers(b) : b.arrowBuffer.bindBuffers(b);
            b.material.setTempColors(d.bonds_materialAmbientColor_3D, void 0, d.bonds_materialSpecularColor_3D, d.bonds_materialShininess_3D);
            var f = m.multiply(this.translationMatrix, b.rotationMatrix, []),
                a = j.PI / 2;
            b.fogging.setMode(0);
            this.renderArrow(b, d.compass_type_3D, d.compass_axisXColor_3D, m.rotateY(f, a, []));
            this.renderArrow(b,
                d.compass_type_3D, d.compass_axisYColor_3D, m.rotateX(f, -a, []));
            this.renderArrow(b, d.compass_type_3D, d.compass_axisZColor_3D, f)
        };
        l.renderAxis = function(b) {
            var d = m.multiply(this.translationMatrix, b.rotationMatrix, []);
            b.setMatrixUniforms(d);
            this.textImage.useTexture(b);
            this.textMesh.render(b)
        }
    })(ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4);
(function(b, j) {
        b.Cylinder = function(b, l, g) {
            for (var d = [], f = [], a = 0; a < g; a++) {
                var e = 2 * a * j.PI / g,
                    t = j.cos(e),
                    e = j.sin(e);
                f.push(t, 0, e);
                d.push(b * t, 0, b * e);
                f.push(t, 0, e);
                d.push(b * t, l, b * e)
            }
            f.push(1, 0, 0);
            d.push(b, 0, 0);
            f.push(1, 0, 0);
            d.push(b, l, 0);
            this.storeData(d, f)
        };
        b.Cylinder.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, Math);
(function(b, j, m, l) {
        j.Distance = function(b, d, f, a) {
            this.a1 = b;
            this.a2 = d;
            this.node = f;
            this.offset = a ? a : 0
        };
        j = j.Distance.prototype = new j._Measurement;
        j.calculateData = function(g) {
            var d = [this.a1.x, this.a1.y, this.a1.z, this.a2.x, this.a2.y, this.a2.z];
            this.node && (this.move = this.offset + m.max(g.atoms_useVDWDiameters_3D ? b[this.a1.label].vdWRadius * g.atoms_vdwMultiplier_3D : g.atoms_sphereDiameter_3D / 2, g.atoms_useVDWDiameters_3D ? b[this.a2.label].vdWRadius * g.atoms_vdwMultiplier_3D : g.atoms_sphereDiameter_3D / 2), this.displacement = [(this.a1.x + this.a2.x) / 2 - this.node.x, (this.a1.y + this.a2.y) / 2 - this.node.y, (this.a1.z + this.a2.z) / 2 - this.node.z], l.normalize(this.displacement), g = l.scale(this.displacement, this.move, []), d[0] += g[0], d[1] += g[1], d[2] += g[2], d[3] += g[0], d[4] += g[1], d[5] += g[2]);
            this.storeData(d, [0, 0, 0, 0, 0, 0], [0, 1])
        };
        j.getText = function() {
            var b = this.a1.distance3D(this.a2),
                d = [(this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2, (this.a1.z + this.a2.z) / 2];
            if (this.node) {
                var f = l.scale(this.displacement, this.move + 0.1, []);
                d[0] += f[0];
                d[1] +=
                    f[1];
                d[2] += f[2]
            }
            return {
                pos: d,
                value: [b.toFixed(2), " \u212b"].join("")
            }
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(b, j) {
        j.Fog = function(b) {
            this.gl = b;
            this.mUL = b.getUniformLocation(b.program, "u_fog.mode");
            this.cUL = b.getUniformLocation(b.program, "u_fog.color");
            this.sUL = b.getUniformLocation(b.program, "u_fog.start");
            this.eUL = b.getUniformLocation(b.program, "u_fog.end");
            this.dUL = b.getUniformLocation(b.program, "u_fog.density")
        };
        var m = j.Fog.prototype;
        m.setTempParameter = function(j, g, d, f) {
            if (!this.cCache || this.cCache !== j) this.cCache = j, j = b.getRGB(j, 1), this.gl.uniform3f(this.cUL, j[0], j[1], j[2]);
            if (!this.sCache || this.sCache !==
                g) this.sCache = g, this.gl.uniform1f(this.sUL, g);
            if (!this.eCache || this.eCache !== d) this.eCache = d, this.gl.uniform1f(this.eUL, d);
            if (!this.dCache || this.dCache !== f) this.dCache = f, this.gl.uniform1f(this.dUL, f)
        };
        m.setMode = function(b) {
            if (!this.mCache || this.mCache !== b) this.mCache = b, this.gl.uniform1i(this.mUL, b)
        }
    })(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(b, j) {
        j.Label = function() {
            this.textImage = new j.TextImage
        };
        var m = j.Label.prototype;
        m.init = function(b, g) {
            this.textImage.init(b);
            this.textImage.updateFont(b, g.atoms_font_size_2D, g.atoms_font_families_2D, g.atoms_font_bold_2D, g.atoms_font_italic_2D, g.text_font_stroke_3D)
        };
        m.updateVerticesBuffer = function(j, g, d) {
            for (var f = 0, a = g.length; f < a; f++) {
                for (var e = g[f], m = e.labelMesh, k = e.atoms, q = this.textImage, n = {
                            position: [],
                            texCoord: [],
                            translation: []
                        }, y = 0 < k.length && void 0 != k[0].hetatm, z = 0, p = k.length; z < p; z++) {
                    var u =
                        k[z],
                        r = u.label,
                        v = 0.05;
                    if (d.atoms_useVDWDiameters_3D) {
                        var w = b[r].vdWRadius * d.atoms_vdwMultiplier_3D;
                        0 === w && (w = 1);
                        v += w
                    } else d.atoms_sphereDiameter_3D && (v += 1.5 * (d.atoms_sphereDiameter_3D / 2)); if (y) if (u.hetatm) {
                            if (u.isWater && !d.macro_showWaters) continue
                        } else if (!d.macro_displayAtoms) continue;
                    q.pushVertexData(r, [u.x, u.y, u.z], v, n)
                }
                if ((e = e.chains) && (d.proteins_displayRibbon || d.proteins_displayBackbone)) {
                    z = 0;
                    for (p = e.length; z < p; z++) {
                        k = e[z];
                        y = 0;
                        for (r = k.length; y < r; y++) v = k[y], v.name && (u = v.cp1, q.pushVertexData(v.name, [u.x, u.y, u.z], 2, n))
                    }
                }
                m.storeData(j, n.position, n.texCoord, n.translation, n.zDepth)
            }
        };
        m.render = function(b, g, d) {
            b.setMatrixUniforms(b.modelViewMatrix);
            this.textImage.useTexture(b);
            g = 0;
            for (var f = d.length; g < f; g++) d[g].labelMesh && d[g].labelMesh.render(b)
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.structures.d3);
(function(b, j) {
        b.Sphere = function(b, l, g) {
            for (var d = [], f = [], a = 0; a <= l; a++) for (var e = a * j.PI / l, t = j.sin(e), k = j.cos(e), e = 0; e <= g; e++) {
                    var q = 2 * e * j.PI / g,
                        n = j.sin(q),
                        q = j.cos(q) * t,
                        y = k,
                        n = n * t;
                    f.push(q, y, n);
                    d.push(b * q, b * y, b * n)
            }
            b = [];
            g += 1;
            for (a = 0; a < l; a++) for (e = 0; e < g; e++) t = a * g + e % g, k = t + g, b.push(t, t + 1, k), e < g - 1 && b.push(k, t + 1, k + 1);
            this.storeData(d, f, b)
        };
        b.Sphere.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, Math);
(function(b, j, m, l) {
        function g(a, d, b, f) {
            this.entire = a;
            this.name = d;
            this.indexes = b;
            this.pi = f
        }
        var d = function(a, d) {
            a.bindBuffer(a.ARRAY_BUFFER, d.vertexPositionBuffer);
            a.vertexAttribPointer(a.shader.vertexPositionAttribute, d.vertexPositionBuffer.itemSize, a.FLOAT, !1, 0, 0);
            a.bindBuffer(a.ARRAY_BUFFER, d.vertexNormalBuffer);
            a.vertexAttribPointer(a.shader.vertexNormalAttribute, d.vertexNormalBuffer.itemSize, a.FLOAT, !1, 0, 0);
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, d.vertexIndexBuffer)
        }, f = g.prototype;
        f.getColor = function(a) {
            return a.macro_colorByChain ?
                this.chainColor : this.name ? this.getResidueColor(b[this.name] ? this.name : "*", a) : this.helix ? this.entire.front ? a.proteins_ribbonCartoonHelixPrimaryColor : a.proteins_ribbonCartoonHelixSecondaryColor : this.sheet ? a.proteins_ribbonCartoonSheetColor : this.entire.front ? a.proteins_primaryColor : a.proteins_secondaryColor
        };
        f.getResidueColor = function(a, d) {
            var f = b[a];
            if ("shapely" === d.proteins_residueColor) return f.shapelyColor;
            if ("amino" === d.proteins_residueColor) return f.aminoColor;
            if ("polarity" === d.proteins_residueColor) {
                if (f.polar) return "#C10000"
            } else if ("acidity" ===
                d.proteins_residueColor) {
                if (1 === f.acidity) return "#0000FF";
                if (-1 === f.acidity) return "#FF0000";
                if (!f.polar) return "#773300"
            }
            return "#FFFFFF"
        };
        f.render = function(a, e, b) {
            this.entire.partitions && this.pi !== this.entire.partitions.lastRender && (d(a, this.entire.partitions[this.pi]), this.entire.partitions.lastRender = this.pi);
            this.vertexIndexBuffer || (this.vertexIndexBuffer = a.createBuffer(), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexes),
                    a.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexes.length);
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
            !b && "rainbow" !== e.proteins_residueColor && a.material.setDiffuseColor(this.getColor(e));
            a.drawElements(a.TRIANGLES, this.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)
        };
        j.Ribbon = function(a, d, b) {
            var f = a[0].lineSegments.length,
                j = a[0].lineSegments[0].length;
            this.partitions = [];
            this.partitions.lastRender = 0;
            var n;
            this.front = 0 < d;
            for (var y = 0, z = a.length -
                    1; y < z; y++) {
                if (!n || 65E3 < n.positionData.length) 0 < this.partitions.length && y--, n = {
                        count: 0,
                        positionData: [],
                        normalData: [],
                        indexData: []
                }, this.partitions.push(n);
                var p = a[y];
                n.count++;
                for (var u = 0; u < f; u++) for (var r = b ? p.lineSegmentsCartoon[u] : p.lineSegments[u], v = 0 === u, w = !1, A = 0; A < j; A++) {
                        var B = r[A],
                            c = y,
                            h = A + 1;
                        y === a.length - 2 && A === j - 1 ? h-- : A === j - 1 && (c++, h = 0);
                        var h = b ? a[c].lineSegmentsCartoon[u][h] : a[c].lineSegments[u][h],
                            c = !1,
                            D = u + 1;
                        u === f - 1 && (D -= 2, c = !0);
                        var D = b ? p.lineSegmentsCartoon[D][A] : p.lineSegments[D][A],
                            h = [h.x -
                                B.x, h.y - B.y, h.z - B.z
                            ],
                            D = [D.x - B.x, D.y - B.y, D.z - B.z],
                            C = l.cross(h, D, []);
                        0 === A && (l.normalize(h), l.scale(h, -1), n.normalData.push(h[0], h[1], h[2]), n.positionData.push(B.x, B.y, B.z));
                        v || w ? (l.normalize(D), l.scale(D, -1), n.normalData.push(D[0], D[1], D[2]), n.positionData.push(B.x, B.y, B.z), v && A === j - 1 && (v = !1, A = -1)) : (l.normalize(C), (c && !this.front || !c && this.front) && l.scale(C, -1), n.normalData.push(C[0], C[1], C[2]), l.scale(C, m.abs(d)), n.positionData.push(B.x + C[0], B.y + C[1], B.z + C[2]), u === f - 1 && A === j - 1 && (w = !0, A = -1));
                        if (-1 ===
                            A || A === j - 1) l.normalize(h), n.normalData.push(h[0], h[1], h[2]), n.positionData.push(B.x, B.y, B.z)
                }
            }
            f += 2;
            j += 2;
            b && (this.cartoonSegments = []);
            this.segments = [];
            d = 0;
            for (p = this.partitions.length; d < p; d++) {
                n = this.partitions[d];
                var H;
                b && (H = []);
                y = 0;
                for (z = n.count - 1; y < z; y++) {
                    r = y;
                    for (u = 0; u < d; u++) r += this.partitions[u].count - 1;
                    u = a[r];
                    0 < y && (b && u.split) && (A = new g(this, void 0, H, d), u.helix && (A.helix = !0), u.sheet && (A.sheet = !0), this.cartoonSegments.push(A), H = []);
                    v = y * f * j;
                    w = [];
                    u = 0;
                    for (B = f - 1; u < B; u++) {
                        c = v + u * j;
                        for (A = 0; A < j; A++) h =
                                1, y === n.count - 1 ? h = 0 : A === j - 1 && (h = f * j - A), h = [c + A, c + j + A, c + j + A + h, c + A, c + A + h, c + j + A + h], A !== j - 1 && (this.front ? w.push(h[0], h[1], h[2], h[3], h[5], h[4]) : w.push(h[0], h[2], h[1], h[3], h[4], h[5])), A === j - 2 && y < n.count - 1 && (D = f * j - A, h[2] += D, h[4] += D, h[5] += D), this.front ? n.indexData.push(h[0], h[1], h[2], h[3], h[5], h[4]) : n.indexData.push(h[0], h[2], h[1], h[3], h[4], h[5]), b && (this.front ? H.push(h[0], h[1], h[2], h[3], h[5], h[4]) : H.push(h[0], h[2], h[1], h[3], h[4], h[5]))
                    }
                    this.segments.push(new g(this, a[r + 1].name, w, d))
                }
                if (b) {
                    A = new g(this, void 0,
                        H, d);
                    r = n.count - 1;
                    for (u = 0; u < d; u++) r += this.partitions[u].count - 1;
                    u = a[r];
                    u.helix && (A.helix = !0);
                    u.sheet && (A.sheet = !0);
                    this.cartoonSegments.push(A)
                }
            }
            this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData);
            1 === this.partitions.length && (this.partitions = void 0)
        };
        (j.Ribbon.prototype = new j._Mesh).render = function(a, e) {
            this.bindBuffers(a);
            var b = e.macro_colorByChain ? this.chainColor : void 0;
            b || (b = this.front ? e.proteins_primaryColor : e.proteins_secondaryColor);
            a.material.setDiffuseColor(b);
            a.drawElements(a.TRIANGLES, this.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0);
            if (this.partitions) for (var b = 1, f = this.partitions.length; b < f; b++) {
                    var g = this.partitions[b];
                    d(a, g);
                    a.drawElements(a.TRIANGLES, g.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)
            }
        }
    })(ChemDoodle.RESIDUE, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(b, j, m) {
        j.Light = function(j, g, d) {
            this.diffuseRGB = b.getRGB(j, 1);
            this.specularRGB = b.getRGB(g, 1);
            this.direction = d
        };
        j.Light.prototype.lightScene = function(b) {
            b.uniform3f(b.getUniformLocation(b.program, "u_light.diffuse_color"), this.diffuseRGB[0], this.diffuseRGB[1], this.diffuseRGB[2]);
            b.uniform3f(b.getUniformLocation(b.program, "u_light.specular_color"), this.specularRGB[0], this.specularRGB[1], this.specularRGB[2]);
            var g = m.create(this.direction);
            m.normalize(g);
            m.negate(g);
            b.uniform3f(b.getUniformLocation(b.program,
                    "u_light.direction"), g[0], g[1], g[2]);
            var d = [0, 0, 0],
                g = [d[0] + g[0], d[1] + g[1], d[2] + g[2]],
                d = m.length(g);
            0 === d ? g = [0, 0, 1] : m.scale(1 / d);
            b.uniform3f(b.getUniformLocation(b.program, "u_light.half_vector"), g[0], g[1], g[2])
        }
    })(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(b) {
        b.Line = function() {
            this.storeData([0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0])
        };
        b.Line.prototype = new b._Mesh
    })(ChemDoodle.structures.d3);
(function(b, j) {
        j.Material = function(b) {
            this.gl = b;
            this.aUL = b.getUniformLocation(b.program, "u_material.ambient_color");
            this.dUL = b.getUniformLocation(b.program, "u_material.diffuse_color");
            this.sUL = b.getUniformLocation(b.program, "u_material.specular_color");
            this.snUL = b.getUniformLocation(b.program, "u_material.shininess");
            this.alUL = b.getUniformLocation(b.program, "u_material.alpha")
        };
        var m = j.Material.prototype;
        m.setTempColors = function(j, g, d, f) {
            if (!this.aCache || this.aCache !== j) this.aCache = j, j = b.getRGB(j,
                    1), this.gl.uniform3f(this.aUL, j[0], j[1], j[2]);
            if (g && (!this.dCache || this.dCache !== g)) this.dCache = g, j = b.getRGB(g, 1), this.gl.uniform3f(this.dUL, j[0], j[1], j[2]);
            if (!this.sCache || this.sCache !== d) this.sCache = d, j = b.getRGB(d, 1), this.gl.uniform3f(this.sUL, j[0], j[1], j[2]);
            if (!this.snCache || this.snCache !== f) this.snCache = f, this.gl.uniform1f(this.snUL, f);
            this.alCache = 1;
            this.gl.uniform1f(this.alUL, 1)
        };
        m.setDiffuseColor = function(j) {
            if (!this.dCache || this.dCache !== j) this.dCache = j, j = b.getRGB(j, 1), this.gl.uniform3f(this.dUL,
                    j[0], j[1], j[2])
        };
        m.setAlpha = function(b) {
            if (!this.alCache || this.alCache !== b) this.alCache = b, this.gl.uniform1f(this.alUL, b)
        }
    })(ChemDoodle.math, ChemDoodle.structures.d3);
(function(b, j, m, l) {
        j.MolecularSurface = function(g, d, f, a, e) {
            function j(a, c, d, e) {
                var b = a.index;
                if (a.contained) for (var b = -1, f = Infinity, g = 0, k = c.length; g < k; g++) for (var h = c[g], n = 0, l = h.length; n < l; n++) {
                            var q = h[n];
                            if (!q.contained && q.index !== d && q.index !== e) {
                                var m = q.distance3D(a);
                                m < f && (b = q.index, f = m)
                            }
                }
                return b
            }
            for (var k = [], q = [], n = [], y = [], z = 0; z <= d; z++) for (var p = z * l.PI / d, u = l.sin(p), r = l.cos(p), p = 0; p <= f; p++) {
                    var v = 2 * p * l.PI / f;
                    y.push(l.cos(v) * u, r, l.sin(v) * u)
            }
            u = [];
            z = 0;
            for (p = g.atoms.length; z < p; z++) {
                for (var r = [], w = g.atoms[z],
                        A = m[w.label][e] + a, B = [], v = 0, c = g.atoms.length; v < c; v++) if (v !== z) {
                        var h = g.atoms[v];
                        h.index = v;
                        w.distance3D(h) < A + m[h.label][e] + a && B.push(h)
                    }
                v = 0;
                for (c = y.length; v < c; v += 3) {
                    for (var D = new b.Atom("C", w.x + A * y[v], w.y + A * y[v + 1], w.z + A * y[v + 2]), C = 0, H = B.length; C < H; C++) if (h = B[C], D.distance3D(h) < m[h.label][e] + a) {
                            D.contained = !0;
                            break
                        }
                    r.push(D)
                }
                u.push(r)
            }
            g = [];
            f++;
            for (z = 0; z < d; z++) for (p = 0; p < f; p++) e = z * f + p % f, a = e + f, g.push(e), g.push(a), g.push(e + 1), p < f - 1 && (g.push(a), g.push(a + 1), g.push(e + 1));
            z = C = 0;
            for (p = u.length; z < p; z++) {
                r = u[z];
                v = 0;
                for (c = r.length; v < c; v++) D = r[v], D.contained || (D.index = C, C++, k.push(D.x, D.y, D.z), q.push(y[3 * v], y[3 * v + 1], y[3 * v + 2]));
                v = 0;
                for (c = g.length; v < c; v += 3) e = r[g[v]], a = r[g[v + 1]], D = r[g[v + 2]], !e.contained && (!a.contained && !D.contained) && n.push(e.index, a.index, D.index)
            }
            y = [];
            z = 0;
            for (p = u.length; z < p; z++) {
                r = u[z];
                v = 0;
                for (c = g.length; v < c; v += 3) {
                    e = r[g[v]];
                    a = r[g[v + 1]];
                    D = r[g[v + 2]];
                    B = [];
                    C = 0;
                    for (H = u.length; C < H; C++) C !== z && B.push(u[C]);
                    if ((!e.contained || !a.contained || !D.contained) && (e.contained || a.contained || D.contained)) if (d =
                            j(e, B, -1, -1), f = j(a, B, d, -1), B = j(D, B, d, f), -1 !== d && -1 !== f && -1 !== B) {
                            a = !1;
                            C = 0;
                            for (H = y.length; C < H; C += 3) if (e = y[C], D = y[C + 1], w = y[C + 2], A = f === e || f === D || f === w, h = B === e || B === D || B === w, (d === e || d === D || d === w) && A && h) {
                                    a = !0;
                                    break
                                }
                            a || y.push(d, f, B)
                        }
                }
            }
            n = n.concat(y);
            this.storeData(k, q, n)
        };
        j.MolecularSurface.prototype = new j._Mesh
    })(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function(b) {
        b.Picker = function() {};
        b = b.Picker.prototype;
        b.init = function(b) {
            this.framebuffer = b.createFramebuffer();
            var m = b.createTexture(),
                l = b.createRenderbuffer();
            b.bindTexture(b.TEXTURE_2D, m);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
            b.bindRenderbuffer(b.RENDERBUFFER, l);
            b.bindFramebuffer(b.FRAMEBUFFER,
                this.framebuffer);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, m, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, l);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER, null)
        };
        b.setDimension = function(b, m, l) {
            b.bindFramebuffer(b.FRAMEBUFFER, this.framebuffer);
            var g = b.getFramebufferAttachmentParameter(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME);
            b.isRenderbuffer(g) && (b.bindRenderbuffer(b.RENDERBUFFER,
                    g), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, m, l), b.bindRenderbuffer(b.RENDERBUFFER, null));
            g = b.getFramebufferAttachmentParameter(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME);
            b.isTexture(g) && (b.bindTexture(b.TEXTURE_2D, g), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, m, l, 0, b.RGBA, b.UNSIGNED_BYTE, null), b.bindTexture(b.TEXTURE_2D, null));
            b.bindFramebuffer(b.FRAMEBUFFER, null)
        };
        b.pick = function(b, m, l, g, d) {
            var f = void 0,
                a = b.getParameter(b.COLOR_CLEAR_VALUE);
            b.bindFramebuffer(b.FRAMEBUFFER,
                this.framebuffer);
            b.clearColor(1, 1, 1, 0);
            b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
            b.fogging.setMode(0);
            b.disableVertexAttribArray(b.shader.vertexNormalAttribute);
            var e = [];
            b.material.setAlpha(255);
            for (var t = 0, k = m.length; t < k; t++) m[t].renderPickFrame(b, l, e);
            b.flush();
            m = new Uint8Array(4);
            b.readPixels(g - 2, d + 2, 1, 1, b.RGBA, b.UNSIGNED_BYTE, m);
            0 < m[3] && (f = e[m[2] | m[1] << 8 | m[0] << 16]);
            b.enableVertexAttribArray(b.shader.vertexNormalAttribute);
            b.fogging.setMode(l.fog_mode_3D);
            b.bindFramebuffer(b.FRAMEBUFFER,
                null);
            b.clearColor(a[0], a[1], a[2], a[3]);
            return f
        }
    })(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function(b, j) {
        b.Pill = function(b, l, g, d) {
            var f = 1,
                a = 2 * b;
            l -= a;
            0 > l ? (f = 0, l += a) : l < a && (f = l / a, l = a);
            for (var a = [], e = [], t = 0; t <= g; t++) for (var k = t * j.PI / g, q = j.sin(k), n = j.cos(k) * f, k = 0; k <= d; k++) {
                    var y = 2 * k * j.PI / d,
                        z = j.sin(y),
                        y = j.cos(y) * q,
                        p = n,
                        z = z * q;
                    e.push(y, p, z);
                    a.push(b * y, b * p + (t < g / 2 ? l : 0), b * z)
            }
            b = [];
            d += 1;
            for (t = 0; t < g; t++) for (k = 0; k < d; k++) l = t * d + k % d, f = l + d, b.push(l, l + 1, f), k < d - 1 && b.push(f, l + 1, f + 1);
            this.storeData(a, e, b)
        };
        b.Pill.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, Math);
(function(b, j) {
        b.Shader = function() {};
        var m = b.Shader.prototype;
        m.init = function(b) {
            var g = this.getShader(b, "vertex-shader");
            g || (g = this.loadDefaultVertexShader(b));
            var d = this.getShader(b, "fragment-shader");
            d || (d = this.loadDefaultFragmentShader(b));
            b.attachShader(b.program, g);
            b.attachShader(b.program, d);
            this.vertexPositionAttribute = 0;
            b.bindAttribLocation(b.program, this.vertexPositionAttribute, "a_vertex_position");
            b.linkProgram(b.program);
            b.getProgramParameter(b.program, b.LINK_STATUS) || alert("Could not initialize shaders: " +
                b.getProgramInfoLog(b.program));
            b.useProgram(b.program);
            b.enableVertexAttribArray(this.vertexPositionAttribute);
            this.vertexTexCoordAttribute = b.getAttribLocation(b.program, "a_vertex_texcoord");
            this.vertexNormalAttribute = b.getAttribLocation(b.program, "a_vertex_normal");
            b.enableVertexAttribArray(this.vertexNormalAttribute);
            this.dimensionUniform = b.getUniformLocation(b.program, "u_dimension")
        };
        m.getShader = function(b, g) {
            var d = j.getElementById(g);
            if (d) {
                for (var f = [], a = d.firstChild; a;) 3 === a.nodeType && f.push(a.textContent),
                a = a.nextSibling;
                if ("x-shader/x-fragment" === d.type) a = b.createShader(b.FRAGMENT_SHADER);
                else if ("x-shader/x-vertex" === d.type) a = b.createShader(b.VERTEX_SHADER);
                else return;
                b.shaderSource(a, f.join(""));
                b.compileShader(a);
                if (b.getShaderParameter(a, b.COMPILE_STATUS)) return a;
                alert(d.type + " " + b.getShaderInfoLog(a))
            }
        };
        m.loadDefaultVertexShader = function(b) {
            var g = b.createShader(b.VERTEX_SHADER);
            b.shaderSource(g, "precision mediump float;struct Light{vec3 diffuse_color;vec3 specular_color;vec3 direction;vec3 half_vector;};struct Material{vec3 ambient_color;vec3 diffuse_color;vec3 specular_color;float shininess;float alpha;};attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;attribute vec2 a_vertex_texcoord;uniform Light u_light;uniform Material u_material;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;uniform vec2 u_dimension;varying vec2 v_texcoord;varying vec3 v_diffuse;varying vec4 v_ambient;varying vec3 v_normal;void main() {v_texcoord \x3d a_vertex_texcoord;if(length(a_vertex_texcoord) !\x3d 0.0) {gl_Position \x3d u_model_view_matrix * vec4(a_vertex_position, 1.0);vec4 depth_pos \x3d vec4(gl_Position);depth_pos.z +\x3d a_vertex_normal.z;gl_Position \x3d u_projection_matrix * gl_Position;depth_pos \x3d u_projection_matrix * depth_pos;gl_Position /\x3d gl_Position.w;gl_Position.xy +\x3d a_vertex_normal.xy / u_dimension * 2.0;gl_Position.z \x3d depth_pos.z / depth_pos.w;} else {v_normal \x3d length(a_vertex_normal)\x3d\x3d0.0 ? a_vertex_normal : normalize(u_normal_matrix * a_vertex_normal);v_ambient \x3d vec4(u_material.ambient_color, 1.0);v_diffuse \x3d u_material.diffuse_color * u_light.diffuse_color;gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.0);gl_Position /\x3d gl_Position.w;gl_PointSize \x3d 2.0;}}");
            b.compileShader(g);
            if (b.getShaderParameter(g, b.COMPILE_STATUS)) return g;
            alert("Vertex shader failed to compile: " + b.getShaderInfoLog(g))
        };
        m.loadDefaultFragmentShader = function(b) {
            var g = b.createShader(b.FRAGMENT_SHADER);
            b.shaderSource(g, "precision mediump float;\nstruct Light{vec3 diffuse_color;vec3 specular_color;vec3 direction;vec3 half_vector;};struct Material{vec3 ambient_color;vec3 diffuse_color;vec3 specular_color;float shininess;float alpha;};struct Fog{int mode;vec3 color;float density;float start;float end;};uniform Light u_light;uniform Material u_material;uniform Fog u_fog;uniform sampler2D u_image;varying vec2 v_texcoord;varying vec3 v_diffuse;varying vec4 v_ambient;varying vec3 v_normal;void main(void){if(length(v_texcoord)!\x3d0.0) {gl_FragColor \x3d texture2D(u_image, v_texcoord);}else if(length(v_normal)\x3d\x3d0.0){gl_FragColor \x3d vec4(vec3(v_diffuse.rgb),u_material.alpha);}else{float nDotL \x3d max(dot(v_normal, u_light.direction), 0.0);vec4 color \x3d vec4(v_diffuse*nDotL, 1.0);float nDotHV \x3d max(dot(v_normal, u_light.half_vector), 0.0);vec3 specular \x3d u_material.specular_color * u_light.specular_color;color+\x3dvec4(specular * pow(nDotHV, u_material.shininess), 1.0);gl_FragColor \x3d color+v_ambient;gl_FragColor.a*\x3du_material.alpha;float fogCoord \x3d gl_FragCoord.z/gl_FragCoord.w;float fogFactor \x3d 1.;if(u_fog.mode \x3d\x3d 1){if(fogCoord \x3c u_fog.start){fogFactor \x3d 1.;}else if(fogCoord \x3e u_fog.end){fogFactor \x3d 0.;}else{fogFactor \x3d clamp((u_fog.end - fogCoord) / (u_fog.end - u_fog.start), 0.0, 1.0);}}else if(u_fog.mode \x3d\x3d 2) {fogFactor \x3d clamp(exp(-u_fog.density*fogCoord), 0.0, 1.0);}else if(u_fog.mode \x3d\x3d 3) {fogFactor \x3d clamp(exp(-pow(u_fog.density*fogCoord, 2.0)), 0.0, 1.0);}gl_FragColor \x3d mix(vec4(vec3(u_fog.color), 1.), gl_FragColor, fogFactor);}}");
            b.compileShader(g);
            if (b.getShaderParameter(g, b.COMPILE_STATUS)) return g;
            alert("Fragment shader failed to compile: " + b.getShaderInfoLog(g))
        }
    })(ChemDoodle.structures.d3, document);
(function(b, j, m) {
        j.Shape = function(j, g) {
            for (var d = j.length, f = [], a = [], e = new b.Point, t = 0, k = d; t < k; t++) {
                var q = t + 1;
                t === k - 1 && (q = 0);
                for (var n = j[t], q = j[q], y = m.cross([0, 0, 1], [q.x - n.x, q.y - n.y, 0]), z = 0; 2 > z; z++) f.push(n.x, n.y, g / 2), f.push(n.x, n.y, -g / 2), f.push(q.x, q.y, g / 2), f.push(q.x, q.y, -g / 2);
                for (z = 0; 4 > z; z++) a.push(y[0], y[1], y[2]);
                a.push(0, 0, 1);
                a.push(0, 0, -1);
                a.push(0, 0, 1);
                a.push(0, 0, -1);
                e.add(n)
            }
            e.x /= d;
            e.y /= d;
            a.push(0, 0, 1);
            f.push(e.x, e.y, g / 2);
            a.push(0, 0, -1);
            f.push(e.x, e.y, -g / 2);
            e = [];
            n = 8 * d;
            t = 0;
            for (k = d; t < k; t++) d =
                    8 * t, e.push(d), e.push(d + 3), e.push(d + 1), e.push(d), e.push(d + 2), e.push(d + 3), e.push(d + 4), e.push(n), e.push(d + 6), e.push(d + 5), e.push(d + 7), e.push(n + 1);
            this.storeData(f, a, e)
        };
        j.Shape.prototype = new j._Mesh
    })(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(b, j, m) {
        b.Star = function() {
            for (var b = [0.8944, 0.4472, 0, 0.2764, 0.4472, 0.8506, 0.2764, 0.4472, -0.8506, -0.7236, 0.4472, 0.5257, -0.7236, 0.4472, -0.5257, -0.3416, 0.4472, 0, -0.1056, 0.4472, 0.3249, -0.1056, 0.4472, -0.3249, 0.2764, 0.4472, 0.2008, 0.2764, 0.4472, -0.2008, -0.8944, -0.4472, 0, -0.2764, -0.4472, 0.8506, -0.2764, -0.4472, -0.8506, 0.7236, -0.4472, 0.5257, 0.7236, -0.4472, -0.5257, 0.3416, -0.4472, 0, 0.1056, -0.4472, 0.3249, 0.1056, -0.4472, -0.3249, -0.2764, -0.4472, 0.2008, -0.2764, -0.4472, -0.2008, -0.5527, 0.1058, 0, -0.1708, 0.1058,
                    0.5527, -0.1708, 0.1058, -0.5527, 0.4471, 0.1058, 0.3249, 0.4471, 0.1058, -0.3249, 0.5527, -0.1058, 0, 0.1708, -0.1058, 0.5527, 0.1708, -0.1058, -0.5527, -0.4471, -0.1058, 0.3249, -0.4471, -0.1058, -0.3249, 0, 1, 0, 0, -1, 0
                ], g = [0, 9, 8, 2, 7, 9, 4, 5, 7, 3, 6, 5, 1, 8, 6, 0, 8, 23, 30, 6, 8, 3, 21, 6, 11, 26, 21, 13, 23, 26, 2, 9, 24, 30, 8, 9, 1, 23, 8, 13, 25, 23, 14, 24, 25, 4, 7, 22, 30, 9, 7, 0, 24, 9, 14, 27, 24, 12, 22, 27, 3, 5, 20, 30, 7, 5, 2, 22, 7, 12, 29, 22, 10, 20, 29, 1, 6, 21, 30, 5, 6, 4, 20, 5, 10, 28, 20, 11, 21, 28, 10, 19, 18, 12, 17, 19, 14, 15, 17, 13, 16, 15, 11, 18, 16, 31, 19, 17, 14, 17, 27, 2, 27, 22, 4, 22, 29,
                        10, 29, 19, 31, 18, 19, 12, 19, 29, 4, 29, 20, 3, 20, 28, 11, 28, 18, 31, 16, 18, 10, 18, 28, 3, 28, 21, 1, 21, 26, 13, 26, 16, 31, 15, 16, 11, 16, 26, 1, 26, 23, 0, 23, 25, 14, 25, 15, 31, 17, 15, 13, 15, 25, 0, 25, 24, 2, 24, 27, 12, 27, 17
                    ], d = [], f = [], a = [], e = 0, j = g.length; e < j; e += 3) {
                var k = 3 * g[e],
                    q = 3 * g[e + 1],
                    n = 3 * g[e + 2],
                    k = [b[k], b[k + 1], b[k + 2]],
                    q = [b[q], b[q + 1], b[q + 2]],
                    n = [b[n], b[n + 1], b[n + 2]],
                    y = m.cross([n[0] - q[0], n[1] - q[1], n[2] - q[2]], [k[0] - q[0], k[1] - q[1], k[2] - q[2]], []);
                m.normalize(y);
                d.push(k[0], k[1], k[2], q[0], q[1], q[2], n[0], n[1], n[2]);
                f.push(y[0], y[1], y[2], y[0], y[1],
                    y[2], y[0], y[1], y[2]);
                a.push(e, e + 1, e + 2)
            }
            this.storeData(d, f, a)
        };
        b.Star.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(b, j, m) {
        b.TextImage = function() {
            this.ctx = m.createElement("canvas").getContext("2d");
            this.data = [];
            this.text = "";
            this.charHeight = 0
        };
        b = b.TextImage.prototype;
        b.init = function(b) {
            this.textureImage = b.createTexture();
            b.bindTexture(b.TEXTURE_2D, this.textureImage);
            b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
            b.texParameteri(b.TEXTURE_2D,
                b.TEXTURE_MAG_FILTER, b.NEAREST);
            b.bindTexture(b.TEXTURE_2D, null);
            this.updateFont(b, 12, ["Sans-serif"], !1, !1, !1)
        };
        b.charData = function(b) {
            b = this.text.indexOf(b);
            return 0 <= b ? this.data[b] : null
        };
        b.updateFont = function(b, g, d, f, a, e) {
            var m = this.ctx,
                k = this.ctx.canvas,
                q = [],
                n = "";
            a = j.getFontString(g, d, f, a);
            m.font = a;
            m.save();
            var y = 0;
            g *= 1.5;
            d = 32;
            for (f = 127; d < f; d++) {
                var z = String.fromCharCode(d),
                    p = m.measureText(z).width;
                q.push({
                        text: z,
                        width: p,
                        height: g
                    });
                y += 2 * p
            }
            var u = ["\u00b0", "\u212b", "\u00ae"];
            d = 0;
            for (f = u.length; d <
                f; d++) z = u[d], p = m.measureText(z).width, q.push({
                        text: z,
                        width: p,
                        height: g
                    }), y += 2 * p;
            d = Math.sqrt(y * g);
            d = Math.ceil(d / g);
            y = Math.ceil(y / (d - 1));
            k.width = y;
            k.height = d * g;
            m.font = a;
            m.textAlign = "left";
            m.textBaseline = "middle";
            m.strokeStyle = "#000";
            m.lineWidth = 1.4;
            m.fillStyle = "#fff";
            d = z = a = 0;
            for (f = q.length; d < f; d++) {
                p = q[d];
                u = 2 * p.width;
                g = p.height;
                var r = p.text;
                z + u > y && (a++, z = 0);
                var v = a * g;
                e && m.strokeText(r, z, v + g / 2);
                m.fillText(r, z, v + g / 2);
                p.x = z;
                p.y = v;
                n += r;
                z += u
            }
            this.text = n;
            this.data = q;
            this.charHeight = g;
            b.bindTexture(b.TEXTURE_2D,
                this.textureImage);
            b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, k);
            b.bindTexture(b.TEXTURE_2D, null)
        };
        b.pushVertexData = function(b, g, d, f) {
            var a = b.toString().split(""),
                e = this.getHeight(),
                j = this.getWidth();
            b = -this.textWidth(b) / 2;
            for (var k = -this.charHeight / 2, q = 0, n = a.length; q < n; q++) {
                var m = this.charData(a[q]),
                    z = m.width,
                    p = m.x / j,
                    u = p + 1.8 * m.width / j,
                    r = m.y / e,
                    m = r + m.height / e,
                    v = b + 1.8 * z,
                    w = this.charHeight / 2;
                f.position.push(g[0], g[1], g[2], g[0], g[1], g[2], g[0], g[1], g[2], g[0], g[1], g[2], g[0], g[1], g[2], g[0],
                    g[1], g[2]);
                f.texCoord.push(p, r, u, m, u, r, p, r, p, m, u, m);
                f.translation.push(b, w, d, v, k, d, v, w, d, b, w, d, b, k, d, v, k, d);
                b = v + z - 1.8 * z
            }
        };
        b.getCanvas = function() {
            return this.ctx.canvas
        };
        b.getHeight = function() {
            return this.getCanvas().height
        };
        b.getWidth = function() {
            return this.getCanvas().width
        };
        b.textWidth = function(b) {
            return this.ctx.measureText(b).width
        };
        b.test = function() {
            m.body.appendChild(this.getCanvas())
        };
        b.useTexture = function(b) {
            b.bindTexture(b.TEXTURE_2D, this.textureImage)
        }
    })(ChemDoodle.structures.d3, ChemDoodle.extensions,
    document);
(function(b) {
        b.TextMesh = function() {};
        b = b.TextMesh.prototype;
        b.init = function(b) {
            this.vertexPositionBuffer = b.createBuffer();
            this.vertexTexCoordBuffer = b.createBuffer();
            this.vertexTranslationBuffer = b.createBuffer()
        };
        b.setVertexData = function(b, m, l, g) {
            b.bindBuffer(b.ARRAY_BUFFER, m);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(l), b.STATIC_DRAW);
            m.itemSize = g;
            m.numItems = l.length / g
        };
        b.storeData = function(b, m, l, g) {
            this.setVertexData(b, this.vertexPositionBuffer, m, 3);
            this.setVertexData(b, this.vertexTexCoordBuffer, l,
                2);
            this.setVertexData(b, this.vertexTranslationBuffer, g, 3)
        };
        b.bindBuffers = function(b) {
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexPositionBuffer);
            b.vertexAttribPointer(b.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, b.FLOAT, !1, 0, 0);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexTexCoordBuffer);
            b.vertexAttribPointer(b.shader.vertexTexCoordAttribute, this.vertexTexCoordBuffer.itemSize, b.FLOAT, !1, 0, 0);
            b.bindBuffer(b.ARRAY_BUFFER, this.vertexTranslationBuffer);
            b.vertexAttribPointer(b.shader.vertexNormalAttribute,
                this.vertexTranslationBuffer.itemSize, b.FLOAT, !1, 0, 0)
        };
        b.render = function(b) {
            var m = this.vertexPositionBuffer.numItems;
            m && (this.bindBuffers(b), b.drawArrays(b.TRIANGLES, 0, m))
        }
    })(ChemDoodle.structures.d3, Math);
(function(b, j, m, l, g, d, f) {
        l.Torsion = function(a, b, d, f) {
            this.a1 = a;
            this.a2 = b;
            this.a3 = d;
            this.a4 = f
        };
        b = l.Torsion.prototype = new l._Measurement;
        b.calculateData = function(a) {
            var b = [],
                d = [],
                k = [],
                j = this.a2.distance3D(this.a1),
                n = this.a2.distance3D(this.a3);
            this.distUse = g.min(j, n) / 2;
            var n = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                j = [this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z],
                l = [this.a4.x - this.a3.x, this.a4.y - this.a3.y, this.a4.z - this.a3.z],
                m = f.cross(n, j, []),
                l = f.cross(j, l, []);
            f.scale(n,
                f.length(j));
            this.torsion = g.atan2(f.dot(n, l), f.dot(m, l));
            n = f.normalize(f.cross(m, j, []));
            m = f.normalize(f.cross(j, n, []));
            this.pos = f.add([this.a2.x, this.a2.y, this.a2.z], f.scale(f.normalize(j, []), this.distUse));
            var l = [],
                p = a.measurement_angleBands_3D;
            for (a = 0; a <= p; ++a) {
                var u = this.torsion * a / p,
                    r = f.scale(n, g.cos(u), []),
                    u = f.scale(m, g.sin(u), []),
                    r = f.scale(f.normalize(f.add(r, u, [])), this.distUse);
                0 == a && (l = r);
                b.push(this.pos[0] + r[0], this.pos[1] + r[1], this.pos[2] + r[2]);
                d.push(0, 0, 0);
                a < p && k.push(a, a + 1)
            }
            this.vecText =
                f.normalize(f.add(l, r, []));
            j = f.normalize(j, []);
            f.scale(j, 0.0625);
            u = this.torsion - 2 * g.asin(0.125) * this.torsion / g.abs(this.torsion);
            r = f.scale(n, g.cos(u), []);
            u = f.scale(m, g.sin(u), []);
            r = f.scale(f.normalize(f.add(r, u, [])), this.distUse);
            b.push(this.pos[0] + j[0] + r[0], this.pos[1] + j[1] + r[1], this.pos[2] + j[2] + r[2]);
            d.push(0, 0, 0);
            b.push(this.pos[0] - j[0] + r[0], this.pos[1] - j[1] + r[1], this.pos[2] - j[2] + r[2]);
            d.push(0, 0, 0);
            k.push(--a, a + 1, a, a + 2);
            this.storeData(b, d, k)
        };
        b.getText = function() {
            f.add(this.pos, f.scale(this.vecText,
                    this.distUse + 0.3, []));
            return {
                pos: this.pos,
                value: [j.angleBounds(this.torsion, !0, !0).toFixed(2), " \u00b0"].join("")
            }
        }
    })(ChemDoodle.ELEMENT, ChemDoodle.math, ChemDoodle.extensions, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(b, j, m, l, g, d, f, a) {
        var e = function(a, b, e) {
            var f = g.sqrt(b[1] * b[1] + b[2] * b[2]),
                j = [1, 0, 0, 0, 0, b[2] / f, -b[1] / f, 0, 0, b[1] / f, b[2] / f, 0, 0, 0, 0, 1],
                l = [1, 0, 0, 0, 0, b[2] / f, b[1] / f, 0, 0, -b[1] / f, b[2] / f, 0, 0, 0, 0, 1],
                m = [f, 0, -b[0], 0, 0, 1, 0, 0, b[0], 0, f, 0, 0, 0, 0, 1];
            b = [f, 0, b[0], 0, 0, 1, 0, 0, -b[0], 0, f, 0, 0, 0, 0, 1];
            e = [g.cos(e), -g.sin(e), 0, 0, g.sin(e), g.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            var u = d.multiply(j, d.multiply(m, d.multiply(e, d.multiply(b, l, []))));
            this.rotate = function() {
                return d.multiplyVec3(u, a)
            }
        };
        l.Tube = function(l, k, q) {
            var n = l[0].lineSegments[0].length;
            this.partitions = [];
            var y;
            this.ends = [];
            this.ends.push(l[0].lineSegments[0][0]);
            this.ends.push(l[l.length - 2].lineSegments[0][0]);
            for (var z = [1, 0, 0], p = 0, u = l.length - 1; p < u; p++) {
                if (!y || 65E3 < y.positionData.length) 0 < this.partitions.length && p--, y = {
                        count: 0,
                        positionData: [],
                        normalData: [],
                        indexData: []
                }, this.partitions.push(y);
                var r = l[p];
                y.count++;
                for (var v = Infinity, w = new m.Atom("", l[p + 1].cp1.x, l[p + 1].cp1.y, l[p + 1].cp1.z), A = 0; A < n; A++) {
                    var B = r.lineSegments[0][A],
                        c;
                    c = A === n - 1 ? p === l.length - 2 ? r.lineSegments[0][A - 1] : l[p +
                    1].lineSegments[0][0] : r.lineSegments[0][A + 1];
                    c = [c.x - B.x, c.y - B.y, c.z - B.z];
                    f.normalize(c);
                    p === l.length - 2 && A === n - 1 && f.scale(c, -1);
                    var h = f.cross(c, z, []);
                    f.normalize(h);
                    f.scale(h, k / 2);
                    h = new e(h, c, 2 * Math.PI / q);
                    c = 0;
                    for (var D = q; c < D; c++) {
                        var C = h.rotate();
                        c === g.floor(q / 4) && (z = [C[0], C[1], C[2]]);
                        y.normalData.push(C[0], C[1], C[2]);
                        y.positionData.push(B.x + C[0], B.y + C[1], B.z + C[2])
                    }
                    w && (c = B.distance3D(w), c < v && (v = c, l[p + 1].pPoint = B))
                }
            }
            z = 0;
            for (r = this.partitions.length; z < r; z++) {
                y = this.partitions[z];
                p = 0;
                for (u = y.count - 1; p <
                    u; p++) {
                    v = p * n * q;
                    A = 0;
                    for (w = n; A < w; A++) {
                        B = v + A * q;
                        for (c = 0; c < q; c++) h = B + c, y.indexData.push(h), y.indexData.push(h + q), y.indexData.push(h + q + 1), y.indexData.push(h), y.indexData.push(h + q + 1), y.indexData.push(h + 1)
                    }
                }
            }
            this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData);
            q = [new m.Point(2, 0)];
            for (p = 0; 60 > p; p++) n = p / 60 * g.PI, q.push(new m.Point(2 * g.cos(n), -2 * g.sin(n)));
            q.push(new m.Point(-2, 0), new m.Point(-2, 4), new m.Point(2, 4));
            var H = new m.d3.Shape(q, 1);
            this.render = function(c,
                e) {
                this.bindBuffers(c);
                c.material.setDiffuseColor(e.macro_colorByChain ? this.chainColor : e.nucleics_tubeColor);
                c.drawElements(c.TRIANGLES, this.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0);
                if (this.partitions) for (var h = 1, n = this.partitions.length; h < n; h++) {
                        var q = this.partitions[h],
                            u = c,
                            p = q;
                        u.bindBuffer(u.ARRAY_BUFFER, p.vertexPositionBuffer);
                        u.vertexAttribPointer(u.shader.vertexPositionAttribute, p.vertexPositionBuffer.itemSize, u.FLOAT, !1, 0, 0);
                        u.bindBuffer(u.ARRAY_BUFFER, p.vertexNormalBuffer);
                        u.vertexAttribPointer(u.shader.vertexNormalAttribute,
                            p.vertexNormalBuffer.itemSize, u.FLOAT, !1, 0, 0);
                        u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, p.vertexIndexBuffer);
                        c.drawElements(c.TRIANGLES, q.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
                }
                c.sphereBuffer.bindBuffers(c);
                for (h = 0; 2 > h; h++) q = this.ends[h], q = d.translate(c.modelViewMatrix, [q.x, q.y, q.z], []), n = k / 2, d.scale(q, [n, n, n]), c.setMatrixUniforms(q), c.drawElements(c.TRIANGLES, c.sphereBuffer.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0);
                c.cylinderBuffer.bindBuffers(c);
                h = 1;
                for (n = l.length - 1; h < n; h++) {
                    var p = l[h],
                        r =
                            p.pPoint,
                        y = new m.Atom("", p.cp2.x, p.cp2.y, p.cp2.z),
                        q = 1.001 * r.distance3D(y),
                        p = [k / 4, q, k / 4],
                        q = d.translate(c.modelViewMatrix, [r.x, r.y, r.z], []),
                        v = [0, 1, 0],
                        w = 0,
                        u = [y.x - r.x, y.y - r.y, y.z - r.z];
                    r.x === y.x && r.z === y.z ? (v = [0, 0, 1], r.y < r.y && (w = g.PI)) : (w = b.vec3AngleFrom(v, u), v = f.cross(v, u, []));
                    0 !== w && d.rotate(q, w, v);
                    d.scale(q, p);
                    c.setMatrixUniforms(q);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, c.cylinderBuffer.vertexPositionBuffer.numItems)
                }
                H.bindBuffers(c);
                "none" === e.nucleics_residueColor && !e.macro_colorByChain && c.material.setDiffuseColor(e.nucleics_baseColor);
                h = 1;
                for (n = l.length - 1; h < n; h++) p = l[h], y = p.cp2, q = d.translate(c.modelViewMatrix, [y.x, y.y, y.z], []), v = [0, 1, 0], w = 0, r = p.cp3, u = [r.x - y.x, r.y - y.y, r.z - y.z], y.x === r.x && y.z === r.z ? (v = [0, 0, 1], y.y < y.y && (w = g.PI)) : (w = b.vec3AngleFrom(v, u), v = f.cross(v, u, [])), 0 !== w && d.rotate(q, w, v), y = [1, 0, 0], w = d.rotate(d.identity([]), w, v), d.multiplyVec3(w, y), w = p.cp4, r = p.cp5, w.y === r.y && w.z === r.z || (w = [r.x - w.x, r.y - w.y, r.z - w.z], r = b.vec3AngleFrom(y, w), 0 > f.dot(u, f.cross(y, w)) && (r *= -1), d.rotateY(q, r)), e.macro_colorByChain || ("shapely" === e.nucleics_residueColor ?
                        j[p.name] ? c.material.setDiffuseColor(j[p.name].shapelyColor) : c.material.setDiffuseColor(j["*"].shapelyColor) : "rainbow" === e.nucleics_residueColor && c.material.setDiffuseColor(a.rainbowAt(h, n, e.macro_rainbowColors))), c.setMatrixUniforms(q), c.drawElements(c.TRIANGLES, H.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
            }
        };
        l.Tube.prototype = new l._Mesh
    })(ChemDoodle.extensions, ChemDoodle.RESIDUE, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3, ChemDoodle.math);
(function(b) {
        b.UnitCell = function(b) {
            var m = [],
                l = [],
                g = function(b, a, d, g) {
                    m.push(b[0], b[1], b[2]);
                    m.push(a[0], a[1], a[2]);
                    m.push(d[0], d[1], d[2]);
                    m.push(g[0], g[1], g[2]);
                    for (b = 0; 4 > b; b++) l.push(0, 0, 0)
                };
            g(b.o, b.x, b.xy, b.y);
            g(b.o, b.y, b.yz, b.z);
            g(b.o, b.z, b.xz, b.x);
            g(b.yz, b.y, b.xy, b.xyz);
            g(b.xyz, b.xz, b.z, b.yz);
            g(b.xy, b.x, b.xz, b.xyz);
            b = [];
            for (g = 0; 6 > g; g++) {
                var d = 4 * g;
                b.push(d, d + 1, d + 1, d + 2, d + 2, d + 3, d + 3, d)
            }
            this.storeData(m, l, b)
        };
        b.UnitCell.prototype = new b._Mesh
    })(ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(b, j, m) {
        b.Plate = function(b) {
            this.lanes = Array(b);
            i = 0;
            for (ii = b; i < ii; i++) this.lanes[i] = []
        };
        var l = b.Plate.prototype;
        l.sort = function() {
            i = 0;
            for (ii = this.lanes.length; i < ii; i++) this.lanes[i].sort(function(b, d) {
                        return b - d
                    })
        };
        l.draw = function(b) {
            var d = b.canvas.width,
                f = b.canvas.height;
            this.origin = 9 * f / 10;
            this.front = f / 10;
            this.laneLength = this.origin - this.front;
            b.strokeStyle = "#000000";
            b.beginPath();
            b.moveTo(0, this.front);
            j.contextHashTo(b, 0, this.front, d, this.front, 3, 3);
            b.closePath();
            b.stroke();
            b.beginPath();
            b.moveTo(0, this.origin);
            b.lineTo(d, this.origin);
            b.closePath();
            b.stroke();
            i = 0;
            for (ii = this.lanes.length; i < ii; i++) {
                f = (i + 1) * d / (ii + 1);
                b.beginPath();
                b.moveTo(f, this.origin);
                b.lineTo(f, this.origin + 3);
                b.closePath();
                b.stroke();
                s = 0;
                for (ss = this.lanes[i].length; s < ss; s++) {
                    var a = this.origin - this.laneLength * this.lanes[i][s].rf;
                    switch (this.lanes[i][s].type) {
                        case "compact":
                            b.beginPath();
                            b.arc(f, a, 3, 0, 2 * m.PI, !1);
                            b.closePath();
                            break;
                        case "expanded":
                            b.beginPath();
                            b.arc(f, a, 7, 0, 2 * m.PI, !1);
                            b.closePath();
                            break;
                        case "widened":
                            j.contextOval(b,
                                f - 18, a - 10, 36, 10);
                            break;
                        case "cresent":
                            b.beginPath(), b.arc(f, a, 9, 0, m.PI, !0), b.closePath()
                    }
                    switch (this.lanes[i][s].style) {
                        case "solid":
                            b.fillStyle = "#000000";
                            b.fill();
                            break;
                        case "transparent":
                            b.stroke()
                    }
                }
            }
        };
        b.Plate.Spot = function(b, d, f) {
            this.type = b;
            this.rf = d;
            this.style = f ? f : "solid"
        }
    })(ChemDoodle.structures, ChemDoodle.extensions, Math);
(function(b, j, m) {
        b.default_backgroundColor = "#FFFFFF";
        b.default_scale = 1;
        b.default_rotateAngle = 0;
        b.default_bondLength_2D = 20;
        b.default_angstromsPerBondLength = 1.25;
        b.default_lightDirection_3D = [-0.1, -0.1, -1];
        b.default_lightDiffuseColor_3D = "#FFFFFF";
        b.default_lightSpecularColor_3D = "#FFFFFF";
        b.default_projectionPerspective_3D = !0;
        b.default_projectionPerspectiveVerticalFieldOfView_3D = 45;
        b.default_projectionOrthoWidth_3D = 40;
        b.default_projectionWidthHeightRatio_3D = void 0;
        b.default_projectionFrontCulling_3D =
            0.1;
        b.default_projectionBackCulling_3D = 1E4;
        b.default_cullBackFace_3D = !0;
        b.default_fog_mode_3D = 0;
        b.default_fog_color_3D = "#000000";
        b.default_fog_start_3D = 0;
        b.default_fog_end_3D = 1;
        b.default_fog_density_3D = 1;
        b.default_atoms_display = !0;
        b.default_atoms_color = "#000000";
        b.default_atoms_font_size_2D = 12;
        b.default_atoms_font_families_2D = ["Helvetica", "Arial", "Dialog"];
        b.default_atoms_font_bold_2D = !1;
        b.default_atoms_font_italic_2D = !1;
        b.default_atoms_circles_2D = !1;
        b.default_atoms_circleDiameter_2D = 10;
        b.default_atoms_circleBorderWidth_2D =
            1;
        b.default_atoms_lonePairDistance_2D = 8;
        b.default_atoms_lonePairSpread_2D = 4;
        b.default_atoms_lonePairDiameter_2D = 1;
        b.default_atoms_useJMOLColors = !1;
        b.default_atoms_usePYMOLColors = !1;
        b.default_atoms_resolution_3D = 60;
        b.default_atoms_sphereDiameter_3D = 0.8;
        b.default_atoms_useVDWDiameters_3D = !1;
        b.default_atoms_vdwMultiplier_3D = 1;
        b.default_atoms_materialAmbientColor_3D = "#000000";
        b.default_atoms_materialSpecularColor_3D = "#555555";
        b.default_atoms_materialShininess_3D = 32;
        b.default_atoms_implicitHydrogens_2D = !0;
        b.default_atoms_displayTerminalCarbonLabels_2D = !1;
        b.default_atoms_showHiddenCarbons_2D = !0;
        b.default_atoms_showAttributedCarbons_2D = !0;
        b.default_atoms_displayAllCarbonLabels_2D = !1;
        b.default_atoms_nonBondedAsStars_3D = !1;
        b.default_atoms_displayLabels_3D = !1;
        b.default_atoms_HBlack_2D = !0;
        b.default_bonds_display = !0;
        b.default_bonds_color = "#000000";
        b.default_bonds_width_2D = 1;
        b.default_bonds_saturationWidth_2D = 0.2;
        b.default_bonds_ends_2D = "round";
        b.default_bonds_useJMOLColors = !1;
        b.default_bonds_usePYMOLColors = !1;
        b.default_bonds_colorGradient = !1;
        b.default_bonds_saturationAngle_2D = m.PI / 3;
        b.default_bonds_symmetrical_2D = !1;
        b.default_bonds_clearOverlaps_2D = !1;
        b.default_bonds_overlapClearWidth_2D = 0.5;
        b.default_bonds_atomLabelBuffer_2D = 1;
        b.default_bonds_wedgeThickness_2D = 0.22;
        b.default_bonds_hashWidth_2D = 1;
        b.default_bonds_hashSpacing_2D = 2.5;
        b.default_bonds_dotSize_2D = 2;
        b.default_bonds_lewisStyle_2D = !1;
        b.default_bonds_showBondOrders_3D = !1;
        b.default_bonds_resolution_3D = 60;
        b.default_bonds_renderAsLines_3D = !1;
        b.default_bonds_cylinderDiameter_3D =
            0.3;
        b.default_bonds_pillLatitudeResolution_3D = 10;
        b.default_bonds_pillLongitudeResolution_3D = 20;
        b.default_bonds_pillHeight_3D = 0.3;
        b.default_bonds_pillSpacing_3D = 0.1;
        b.default_bonds_pillDiameter_3D = 0.3;
        b.default_bonds_materialAmbientColor_3D = "#222222";
        b.default_bonds_materialSpecularColor_3D = "#555555";
        b.default_bonds_materialShininess_3D = 32;
        b.default_proteins_displayRibbon = !0;
        b.default_proteins_displayBackbone = !1;
        b.default_proteins_backboneThickness = 1.5;
        b.default_proteins_backboneColor = "#CCCCCC";
        b.default_proteins_ribbonCartoonize = !1;
        b.default_proteins_residueColor = "none";
        b.default_proteins_primaryColor = "#FF0D0D";
        b.default_proteins_secondaryColor = "#FFFF30";
        b.default_proteins_ribbonCartoonHelixPrimaryColor = "#00E740";
        b.default_proteins_ribbonCartoonHelixSecondaryColor = "#9905FF";
        b.default_proteins_ribbonCartoonSheetColor = "#E8BB99";
        b.default_proteins_ribbonThickness = 0.2;
        b.default_proteins_verticalResolution = 10;
        b.default_proteins_horizontalResolution = 9;
        b.default_proteins_materialAmbientColor_3D = "#222222";
        b.default_proteins_materialSpecularColor_3D =
            "#555555";
        b.default_proteins_materialShininess_3D = 32;
        b.default_nucleics_display = !0;
        b.default_nucleics_tubeColor = "#CCCCCC";
        b.default_nucleics_baseColor = "#C10000";
        b.default_nucleics_residueColor = "none";
        b.default_nucleics_tubeThickness = 1.5;
        b.default_nucleics_tubeResolution_3D = 60;
        b.default_nucleics_verticalResolution = 10;
        b.default_nucleics_materialAmbientColor_3D = "#222222";
        b.default_nucleics_materialSpecularColor_3D = "#555555";
        b.default_nucleics_materialShininess_3D = 32;
        b.default_macro_displayAtoms = !1;
        b.default_macro_displayBonds = !1;
        b.default_macro_atomToLigandDistance = -1;
        b.default_macro_showWater = !1;
        b.default_macro_colorByChain = !1;
        b.default_macro_rainbowColors = ["#0000FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF0000"];
        b.default_surfaces_display = !0;
        b.default_surfaces_style = "Dot";
        b.default_surfaces_color = "#E9B862";
        b.default_surfaces_materialAmbientColor_3D = "#000000";
        b.default_surfaces_materialSpecularColor_3D = "#000000";
        b.default_surfaces_materialShininess_3D = 32;
        b.default_crystals_displayUnitCell = !0;
        b.default_crystals_unitCellColor =
            "green";
        b.default_crystals_unitCellLineWidth = 1;
        b.default_plots_color = "#000000";
        b.default_plots_width = 1;
        b.default_plots_showIntegration = !1;
        b.default_plots_integrationColor = "#c10000";
        b.default_plots_integrationLineWidth = 1;
        b.default_plots_showGrid = !1;
        b.default_plots_gridColor = "gray";
        b.default_plots_gridLineWidth = 0.5;
        b.default_plots_showYAxis = !0;
        b.default_plots_flipXAxis = !1;
        b.default_text_font_size = 12;
        b.default_text_font_families = ["Helvetica", "Arial", "Dialog"];
        b.default_text_font_bold = !0;
        b.default_text_font_italic = !1;
        b.default_text_font_stroke_3D = !0;
        b.default_text_color = "#000000";
        b.default_shapes_color = "#000000";
        b.default_shapes_lineWidth_2D = 1;
        b.default_shapes_arrowLength_2D = 8;
        b.default_compass_display = !1;
        b.default_compass_axisXColor_3D = "#FF0000";
        b.default_compass_axisYColor_3D = "#00FF00";
        b.default_compass_axisZColor_3D = "#0000FF";
        b.default_compass_size_3D = 50;
        b.default_compass_resolution_3D = 10;
        b.default_compass_displayText_3D = !0;
        b.default_compass_type_3D = 0;
        b.default_measurement_update_3D = !1;
        b.default_measurement_angleBands_3D =
            10;
        b.default_measurement_displayText_3D = !0;
        j.VisualSpecifications = function() {
            this.backgroundColor = b.default_backgroundColor;
            this.scale = b.default_scale;
            this.rotateAngle = b.default_rotateAngle;
            this.bondLength = b.default_bondLength_2D;
            this.angstromsPerBondLength = b.default_angstromsPerBondLength;
            this.lightDirection_3D = b.default_lightDirection_3D.slice(0);
            this.lightDiffuseColor_3D = b.default_lightDiffuseColor_3D;
            this.lightSpecularColor_3D = b.default_lightSpecularColor_3D;
            this.projectionPerspective_3D = b.default_projectionPerspective_3D;
            this.projectionPerspectiveVerticalFieldOfView_3D = b.default_projectionPerspectiveVerticalFieldOfView_3D;
            this.projectionOrthoWidth_3D = b.default_projectionOrthoWidth_3D;
            this.projectionWidthHeightRatio_3D = b.default_projectionWidthHeightRatio_3D;
            this.projectionFrontCulling_3D = b.default_projectionFrontCulling_3D;
            this.projectionBackCulling_3D = b.default_projectionBackCulling_3D;
            this.cullBackFace_3D = b.default_cullBackFace_3D;
            this.fog_mode_3D = b.default_fog_mode_3D;
            this.fog_color_3D = b.default_fog_color_3D;
            this.fog_start_3D =
                b.default_fog_start_3D;
            this.fog_end_3D = b.default_fog_end_3D;
            this.fog_density_3D = b.default_fog_density_3D;
            this.atoms_display = b.default_atoms_display;
            this.atoms_color = b.default_atoms_color;
            this.atoms_font_size_2D = b.default_atoms_font_size_2D;
            this.atoms_font_families_2D = b.default_atoms_font_families_2D.slice(0);
            this.atoms_font_bold_2D = b.default_atoms_font_bold_2D;
            this.atoms_font_italic_2D = b.default_atoms_font_italic_2D;
            this.atoms_circles_2D = b.default_atoms_circles_2D;
            this.atoms_circleDiameter_2D = b.default_atoms_circleDiameter_2D;
            this.atoms_circleBorderWidth_2D = b.default_atoms_circleBorderWidth_2D;
            this.atoms_lonePairDistance_2D = b.default_atoms_lonePairDistance_2D;
            this.atoms_lonePairSpread_2D = b.default_atoms_lonePairSpread_2D;
            this.atoms_lonePairDiameter_2D = b.default_atoms_lonePairDiameter_2D;
            this.atoms_useJMOLColors = b.default_atoms_useJMOLColors;
            this.atoms_usePYMOLColors = b.default_atoms_usePYMOLColors;
            this.atoms_resolution_3D = b.default_atoms_resolution_3D;
            this.atoms_sphereDiameter_3D = b.default_atoms_sphereDiameter_3D;
            this.atoms_useVDWDiameters_3D =
                b.default_atoms_useVDWDiameters_3D;
            this.atoms_vdwMultiplier_3D = b.default_atoms_vdwMultiplier_3D;
            this.atoms_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D;
            this.atoms_materialSpecularColor_3D = b.default_atoms_materialSpecularColor_3D;
            this.atoms_materialShininess_3D = b.default_atoms_materialShininess_3D;
            this.atoms_implicitHydrogens_2D = b.default_atoms_implicitHydrogens_2D;
            this.atoms_displayTerminalCarbonLabels_2D = b.default_atoms_displayTerminalCarbonLabels_2D;
            this.atoms_showHiddenCarbons_2D =
                b.default_atoms_showHiddenCarbons_2D;
            this.atoms_showAttributedCarbons_2D = b.default_atoms_showAttributedCarbons_2D;
            this.atoms_displayAllCarbonLabels_2D = b.default_atoms_displayAllCarbonLabels_2D;
            this.atoms_nonBondedAsStars_3D = b.default_atoms_nonBondedAsStars_3D;
            this.atoms_displayLabels_3D = b.default_atoms_displayLabels_3D;
            this.atoms_HBlack_2D = b.default_atoms_HBlack_2D;
            this.bonds_display = b.default_bonds_display;
            this.bonds_color = b.default_bonds_color;
            this.bonds_width_2D = b.default_bonds_width_2D;
            this.bonds_saturationWidth_2D =
                b.default_bonds_saturationWidth_2D;
            this.bonds_ends_2D = b.default_bonds_ends_2D;
            this.bonds_useJMOLColors = b.default_bonds_useJMOLColors;
            this.bonds_usePYMOLColors = b.default_bonds_usePYMOLColors;
            this.bonds_colorGradient = b.default_bonds_colorGradient;
            this.bonds_saturationAngle_2D = b.default_bonds_saturationAngle_2D;
            this.bonds_symmetrical_2D = b.default_bonds_symmetrical_2D;
            this.bonds_clearOverlaps_2D = b.default_bonds_clearOverlaps_2D;
            this.bonds_overlapClearWidth_2D = b.default_bonds_overlapClearWidth_2D;
            this.bonds_atomLabelBuffer_2D =
                b.default_bonds_atomLabelBuffer_2D;
            this.bonds_wedgeThickness_2D = b.default_bonds_wedgeThickness_2D;
            this.bonds_hashWidth_2D = b.default_bonds_hashWidth_2D;
            this.bonds_hashSpacing_2D = b.default_bonds_hashSpacing_2D;
            this.bonds_dotSize_2D = b.default_bonds_dotSize_2D;
            this.bonds_lewisStyle_2D = b.default_bonds_lewisStyle_2D;
            this.bonds_showBondOrders_3D = b.default_bonds_showBondOrders_3D;
            this.bonds_resolution_3D = b.default_bonds_resolution_3D;
            this.bonds_renderAsLines_3D = b.default_bonds_renderAsLines_3D;
            this.bonds_cylinderDiameter_3D =
                b.default_bonds_cylinderDiameter_3D;
            this.bonds_pillHeight_3D = b.default_bonds_pillHeight_3D;
            this.bonds_pillLatitudeResolution_3D = b.default_bonds_pillLatitudeResolution_3D;
            this.bonds_pillLongitudeResolution_3D = b.default_bonds_pillLongitudeResolution_3D;
            this.bonds_pillSpacing_3D = b.default_bonds_pillSpacing_3D;
            this.bonds_pillDiameter_3D = b.default_bonds_pillDiameter_3D;
            this.bonds_materialAmbientColor_3D = b.default_bonds_materialAmbientColor_3D;
            this.bonds_materialSpecularColor_3D = b.default_bonds_materialSpecularColor_3D;
            this.bonds_materialShininess_3D = b.default_bonds_materialShininess_3D;
            this.proteins_displayRibbon = b.default_proteins_displayRibbon;
            this.proteins_displayBackbone = b.default_proteins_displayBackbone;
            this.proteins_backboneThickness = b.default_proteins_backboneThickness;
            this.proteins_backboneColor = b.default_proteins_backboneColor;
            this.proteins_ribbonCartoonize = b.default_proteins_ribbonCartoonize;
            this.proteins_residueColor = b.default_proteins_residueColor;
            this.proteins_primaryColor = b.default_proteins_primaryColor;
            this.proteins_secondaryColor = b.default_proteins_secondaryColor;
            this.proteins_ribbonCartoonHelixPrimaryColor = b.default_proteins_ribbonCartoonHelixPrimaryColor;
            this.proteins_ribbonCartoonHelixSecondaryColor = b.default_proteins_ribbonCartoonHelixSecondaryColor;
            this.proteins_ribbonCartoonSheetColor = b.default_proteins_ribbonCartoonSheetColor;
            this.proteins_ribbonThickness = b.default_proteins_ribbonThickness;
            this.proteins_verticalResolution = b.default_proteins_verticalResolution;
            this.proteins_horizontalResolution =
                b.default_proteins_horizontalResolution;
            this.proteins_materialAmbientColor_3D = b.default_proteins_materialAmbientColor_3D;
            this.proteins_materialSpecularColor_3D = b.default_proteins_materialSpecularColor_3D;
            this.proteins_materialShininess_3D = b.default_proteins_materialShininess_3D;
            this.macro_displayAtoms = b.default_macro_displayAtoms;
            this.macro_displayBonds = b.default_macro_displayBonds;
            this.macro_atomToLigandDistance = b.default_macro_atomToLigandDistance;
            this.nucleics_display = b.default_nucleics_display;
            this.nucleics_tubeColor = b.default_nucleics_tubeColor;
            this.nucleics_baseColor = b.default_nucleics_baseColor;
            this.nucleics_residueColor = b.default_nucleics_residueColor;
            this.nucleics_tubeThickness = b.default_nucleics_tubeThickness;
            this.nucleics_tubeResolution_3D = b.default_nucleics_tubeResolution_3D;
            this.nucleics_verticalResolution = b.default_nucleics_verticalResolution;
            this.nucleics_materialAmbientColor_3D = b.default_nucleics_materialAmbientColor_3D;
            this.nucleics_materialSpecularColor_3D = b.default_nucleics_materialSpecularColor_3D;
            this.nucleics_materialShininess_3D = b.default_nucleics_materialShininess_3D;
            this.macro_showWater = b.default_macro_showWater;
            this.macro_colorByChain = b.default_macro_colorByChain;
            this.macro_rainbowColors = b.default_macro_rainbowColors.slice(0);
            this.surfaces_display = b.default_surfaces_display;
            this.surfaces_style = b.default_surfaces_style;
            this.surfaces_color = b.default_surfaces_color;
            this.surfaces_materialAmbientColor_3D = b.default_surfaces_materialAmbientColor_3D;
            this.surfaces_materialSpecularColor_3D = b.default_surfaces_materialSpecularColor_3D;
            this.surfaces_materialShininess_3D = b.default_surfaces_materialShininess_3D;
            this.crystals_displayUnitCell = b.default_crystals_displayUnitCell;
            this.crystals_unitCellColor = b.default_crystals_unitCellColor;
            this.crystals_unitCellLineWidth = b.default_crystals_unitCellLineWidth;
            this.plots_color = b.default_plots_color;
            this.plots_width = b.default_plots_width;
            this.plots_showIntegration = b.default_plots_showIntegration;
            this.plots_integrationColor = b.default_plots_integrationColor;
            this.plots_integrationLineWidth = b.default_plots_integrationLineWidth;
            this.plots_showGrid = b.default_plots_showGrid;
            this.plots_gridColor = b.default_plots_gridColor;
            this.plots_gridLineWidth = b.default_plots_gridLineWidth;
            this.plots_showYAxis = b.default_plots_showYAxis;
            this.plots_flipXAxis = b.default_plots_flipXAxis;
            this.text_font_size = b.default_text_font_size;
            this.text_font_families = b.default_text_font_families.slice(0);
            this.text_font_bold = b.default_text_font_bold;
            this.text_font_italic = b.default_text_font_italic;
            this.text_font_stroke_3D = b.default_text_font_stroke_3D;
            this.text_color =
                b.default_text_color;
            this.shapes_color = b.default_shapes_color;
            this.shapes_lineWidth_2D = b.default_shapes_lineWidth_2D;
            this.shapes_arrowLength_2D = b.default_shapes_arrowLength_2D;
            this.compass_display = b.default_compass_display;
            this.compass_axisXColor_3D = b.default_compass_axisXColor_3D;
            this.compass_axisYColor_3D = b.default_compass_axisYColor_3D;
            this.compass_axisZColor_3D = b.default_compass_axisZColor_3D;
            this.compass_size_3D = b.default_compass_size_3D;
            this.compass_resolution_3D = b.default_compass_resolution_3D;
            this.compass_displayText_3D = b.default_compass_displayText_3D;
            this.compass_type_3D = b.default_compass_type_3D;
            this.measurement_update_3D = b.default_measurement_update_3D;
            this.measurement_angleBands_3D = b.default_measurement_angleBands_3D;
            this.measurement_displayText_3D = b.default_measurement_displayText_3D
        };
        j.VisualSpecifications.prototype.set3DRepresentation = function(j) {
            this.bonds_display = this.atoms_display = !0;
            this.bonds_color = "#777777";
            this.bonds_showBondOrders_3D = this.bonds_useJMOLColors = this.atoms_useJMOLColors =
                this.atoms_useVDWDiameters_3D = !0;
            this.bonds_renderAsLines_3D = !1;
            "Ball and Stick" === j ? (this.atoms_vdwMultiplier_3D = 0.3, this.bonds_useJMOLColors = !1, this.bonds_cylinderDiameter_3D = 0.3, this.bonds_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D, this.bonds_pillDiameter_3D = 0.15) : "van der Waals Spheres" === j ? (this.bonds_display = !1, this.atoms_vdwMultiplier_3D = 1) : "Stick" === j ? (this.bonds_showBondOrders_3D = this.atoms_useVDWDiameters_3D = !1, this.bonds_cylinderDiameter_3D = this.atoms_sphereDiameter_3D =
                0.8, this.bonds_materialAmbientColor_3D = this.atoms_materialAmbientColor_3D) : "Wireframe" === j ? (this.atoms_useVDWDiameters_3D = !1, this.bonds_cylinderDiameter_3D = this.bonds_pillDiameter_3D = 0.05, this.atoms_sphereDiameter_3D = 0.15, this.bonds_materialAmbientColor_3D = b.default_atoms_materialAmbientColor_3D) : "Line" === j ? (this.atoms_display = !1, this.bonds_renderAsLines_3D = !0, this.bonds_width_2D = 1, this.bonds_cylinderDiameter_3D = 0.05) : alert('"' + j + '" is not recognized. Use one of the following strings:\n\n1. Ball and Stick\n2. van der Waals Spheres\n3. Stick\n4. Wireframe\n5. Line\n')
        }
    })(ChemDoodle,
    ChemDoodle.structures, Math);
(function(b, j, m, l) {
        m.getPointsPerAngstrom = function() {
            return b.default_bondLength_2D / b.default_angstromsPerBondLength
        };
        m.BondDeducer = function() {};
        var g = m.BondDeducer.prototype;
        g.margin = 1.1;
        g.deduceCovalentBonds = function(b, f) {
            var a = m.getPointsPerAngstrom();
            f && (a = f);
            for (var e = 0, g = b.atoms.length; e < g; e++) for (var k = e + 1; k < g; k++) {
                    var q = b.atoms[e],
                        n = b.atoms[k];
                    q.distance3D(n) < (j[q.label].covalentRadius + j[n.label].covalentRadius) * a * this.margin && b.bonds.push(new l.Bond(q, n, 1))
            }
        }
    })(ChemDoodle, ChemDoodle.ELEMENT,
    ChemDoodle.informatics, ChemDoodle.structures);
(function(b) {
        b.HydrogenDeducer = function() {};
        b.HydrogenDeducer.prototype.removeHydrogens = function(b) {
            for (var m = [], l = [], g = 0, d = b.bonds.length; g < d; g++) "H" !== b.bonds[g].a1.label && "H" !== b.bonds[g].a2.label && l.push(b.bonds[g]);
            g = 0;
            for (d = b.atoms.length; g < d; g++) "H" !== b.atoms[g].label && m.push(b.atoms[g]);
            b.atoms = m;
            b.bonds = l
        }
    })(ChemDoodle.informatics);
(function(b, j, m) {
        j.MolecularSurfaceGenerator = function() {};
        j.MolecularSurfaceGenerator.prototype.generateSurface = function(b, g, d, f, a) {
            return new m.MolecularSurface(b, g, d, f, a)
        }
    })(ChemDoodle, ChemDoodle.informatics, ChemDoodle.structures.d3);
(function(b, j) {
        b.Splitter = function() {};
        b.Splitter.prototype.split = function(b) {
            for (var l = [], g = 0, d = b.atoms.length; g < d; g++) b.atoms[g].visited = !1;
            g = 0;
            for (d = b.bonds.length; g < d; g++) b.bonds[g].visited = !1;
            g = 0;
            for (d = b.atoms.length; g < d; g++) {
                var f = b.atoms[g];
                if (!f.visited) {
                    var a = new j.Molecule;
                    a.atoms.push(f);
                    f.visited = !0;
                    var e = new j.Queue;
                    for (e.enqueue(f); !e.isEmpty();) for (var f = e.dequeue(), t = 0, k = b.bonds.length; t < k; t++) {
                            var q = b.bonds[t];
                            q.contains(f) && !q.visited && (q.visited = !0, a.bonds.push(q), q = q.getNeighbor(f),
                                q.visited || (q.visited = !0, a.atoms.push(q), e.enqueue(q)))
                    }
                    l.push(a)
                }
            }
            return l
        }
    })(ChemDoodle.informatics, ChemDoodle.structures);
(function(b, j) {
        b.StructureBuilder = function() {};
        b.StructureBuilder.prototype.copy = function(b) {
            var l = new j.JSONInterpreter;
            return l.molFrom(l.molTo(b))
        }
    })(ChemDoodle.informatics, ChemDoodle.io, ChemDoodle.structures);
(function(b) {
        b._Counter = function() {};
        b = b._Counter.prototype;
        b.value = 0;
        b.molecule = void 0;
        b.setMolecule = function(b) {
            this.value = 0;
            this.molecule = b;
            this.innerCalculate && this.innerCalculate()
        }
    })(ChemDoodle.informatics);
(function(b) {
        b.FrerejacqueNumberCounter = function(b) {
            this.setMolecule(b)
        };
        (b.FrerejacqueNumberCounter.prototype = new b._Counter).innerCalculate = function() {
            this.value = this.molecule.bonds.length - this.molecule.atoms.length + (new b.NumberOfMoleculesCounter(this.molecule)).value
        }
    })(ChemDoodle.informatics);
(function(b, j) {
        j.NumberOfMoleculesCounter = function(b) {
            this.setMolecule(b)
        };
        (j.NumberOfMoleculesCounter.prototype = new j._Counter).innerCalculate = function() {
            for (var j = 0, l = this.molecule.atoms.length; j < l; j++) this.molecule.atoms[j].visited = !1;
            j = 0;
            for (l = this.molecule.atoms.length; j < l; j++) if (!this.molecule.atoms[j].visited) {
                    this.value++;
                    var g = new b.Queue;
                    this.molecule.atoms[j].visited = !0;
                    for (g.enqueue(this.molecule.atoms[j]); !g.isEmpty();) for (var d = g.dequeue(), f = 0, a = this.molecule.bonds.length; f < a; f++) {
                            var e =
                                this.molecule.bonds[f];
                            e.contains(d) && (e = e.getNeighbor(d), e.visited || (e.visited = !0, g.enqueue(e)))
                    }
                }
        }
    })(ChemDoodle.structures, ChemDoodle.informatics);
(function(b) {
        b._RingFinder = function() {};
        b = b._RingFinder.prototype;
        b.atoms = void 0;
        b.bonds = void 0;
        b.rings = void 0;
        b.reduce = function(b) {
            for (var m = 0, l = b.atoms.length; m < l; m++) b.atoms[m].visited = !1;
            m = 0;
            for (l = b.bonds.length; m < l; m++) b.bonds[m].visited = !1;
            for (var g = !0; g;) {
                g = !1;
                m = 0;
                for (l = b.atoms.length; m < l; m++) {
                    for (var d = 0, f, a = 0, e = b.bonds.length; a < e; a++) if (b.bonds[a].contains(b.atoms[m]) && !b.bonds[a].visited) {
                            d++;
                            if (2 === d) break;
                            f = b.bonds[a]
                        }
                    1 === d && (g = !0, f.visited = !0, b.atoms[m].visited = !0)
                }
            }
            m = 0;
            for (l = b.atoms.length; m <
                l; m++) b.atoms[m].visited || this.atoms.push(b.atoms[m]);
            m = 0;
            for (l = b.bonds.length; m < l; m++) b.bonds[m].visited || this.bonds.push(b.bonds[m]);
            0 === this.bonds.length && 0 !== this.atoms.length && (this.atoms = [])
        };
        b.setMolecule = function(b) {
            this.atoms = [];
            this.bonds = [];
            this.rings = [];
            this.reduce(b);
            2 < this.atoms.length && this.innerGetRings && this.innerGetRings()
        };
        b.fuse = function() {
            for (var b = 0, m = this.rings.length; b < m; b++) for (var l = 0, g = this.bonds.length; l < g; l++) - 1 !== this.rings[b].atoms.indexOf(this.bonds[l].a1) && -1 !== this.rings[b].atoms.indexOf(this.bonds[l].a2) &&
                    this.rings[b].bonds.push(this.bonds[l])
        }
    })(ChemDoodle.informatics);
(function(b, j) {
        function m(b, d) {
            this.atoms = [];
            if (d) for (var f = 0, a = d.atoms.length; f < a; f++) this.atoms[f] = d.atoms[f];
            this.atoms.push(b)
        }
        var l = m.prototype;
        l.grow = function(b, d) {
            for (var f = this.atoms[this.atoms.length - 1], a = [], e = 0, j = b.length; e < j; e++) if (b[e].contains(f)) {
                    var k = b[e].getNeighbor(f); - 1 === d.indexOf(k) && a.push(k)
                }
            f = [];
            e = 0;
            for (j = a.length; e < j; e++) f.push(new m(a[e], this));
            return f
        };
        l.check = function(b, d, f) {
            for (var a = 0, e = d.atoms.length - 1; a < e; a++) if (-1 !== this.atoms.indexOf(d.atoms[a])) return;
            var l;
            if (d.atoms[d.atoms.length -
                1] === this.atoms[this.atoms.length - 1]) {
                l = new j.Ring;
                l.atoms[0] = f;
                a = 0;
                for (e = this.atoms.length; a < e; a++) l.atoms.push(this.atoms[a]);
                for (a = d.atoms.length - 2; 0 <= a; a--) l.atoms.push(d.atoms[a])
            } else {
                for (var k = [], a = 0, e = b.length; a < e; a++) b[a].contains(d.atoms[d.atoms.length - 1]) && k.push(b[a]);
                a = 0;
                for (e = k.length; a < e; a++) if ((1 === d.atoms.length || !k[a].contains(d.atoms[d.atoms.length - 2])) && k[a].contains(this.atoms[this.atoms.length - 1])) {
                        l = new j.Ring;
                        l.atoms[0] = f;
                        b = 0;
                        for (f = this.atoms.length; b < f; b++) l.atoms.push(this.atoms[b]);
                        for (b = d.atoms.length - 1; 0 <= b; b--) l.atoms.push(d.atoms[b]);
                        break
                    }
            }
            return l
        };
        b.EulerFacetRingFinder = function(b) {
            this.setMolecule(b)
        };
        l = b.EulerFacetRingFinder.prototype = new b._RingFinder;
        l.fingerBreak = 5;
        l.innerGetRings = function() {
            for (var b = 0, d = this.atoms.length; b < d; b++) {
                for (var f = [], a = 0, e = this.bonds.length; a < e; a++) this.bonds[a].contains(this.atoms[b]) && f.push(this.bonds[a].getNeighbor(this.atoms[b]));
                a = 0;
                for (e = f.length; a < e; a++) for (var j = a + 1; j < f.length; j++) {
                        var k = [];
                        k[0] = new m(f[a]);
                        k[1] = new m(f[j]);
                        var l = [];
                        l[0] = this.atoms[b];
                        for (var n = 0, y = f.length; n < y; n++) n !== a && n !== j && l.push(f[n]);
                        var z = [];
                        for ((n = k[0].check(this.bonds, k[1], this.atoms[b])) && (z[0] = n); 0 === z.length && 0 < k.length && k[0].atoms.length < this.fingerBreak;) {
                            for (var p = [], n = 0, y = k.length; n < y; n++) for (var u = k[n].grow(this.bonds, l), r = 0, v = u.length; r < v; r++) p.push(u[r]);
                            k = p;
                            n = 0;
                            for (y = k.length; n < y; n++) for (r = n + 1; r < y; r++)(v = k[n].check(this.bonds, k[r], this.atoms[b])) && z.push(v);
                            if (0 === z.length) {
                                p = [];
                                n = 0;
                                for (y = l.length; n < y; n++) {
                                    r = 0;
                                    for (v = this.bonds.length; r <
                                        v; r++) this.bonds[r].contains(l[n]) && (f = this.bonds[r].getNeighbor(l[n]), -1 === l.indexOf(f) && -1 === p.indexOf(f) && p.push(f))
                                }
                                n = 0;
                                for (y = p.length; n < y; n++) l.push(p[n])
                            }
                        }
                        if (0 < z.length) {
                            k = void 0;
                            n = 0;
                            for (y = z.length; n < y; n++) if (!k || k.atoms.length > z[n].atoms.length) k = z[n];
                            z = !1;
                            n = 0;
                            for (y = this.rings.length; n < y; n++) {
                                l = !0;
                                r = 0;
                                for (v = k.atoms.length; r < v; r++) if (-1 === this.rings[n].atoms.indexOf(k.atoms[r])) {
                                        l = !1;
                                        break
                                    }
                                if (l) {
                                    z = !0;
                                    break
                                }
                            }
                            z || this.rings.push(k)
                        }
                }
            }
            this.fuse()
        }
    })(ChemDoodle.informatics, ChemDoodle.structures);
(function(b) {
        b.SSSRFinder = function(j) {
            this.rings = [];
            if (0 < j.atoms.length) {
                var m = (new b.FrerejacqueNumberCounter(j)).value,
                    l = (new b.EulerFacetRingFinder(j)).rings;
                l.sort(function(a, b) {
                        return a.atoms.length - b.atoms.length
                    });
                for (var g = 0, d = j.bonds.length; g < d; g++) j.bonds[g].visited = !1;
                g = 0;
                for (d = l.length; g < d; g++) {
                    j = !1;
                    for (var f = 0, a = l[g].bonds.length; f < a; f++) if (!l[g].bonds[f].visited) {
                            j = !0;
                            break
                        }
                    if (j) {
                        f = 0;
                        for (a = l[g].bonds.length; f < a; f++) l[g].bonds[f].visited = !0;
                        this.rings.push(l[g])
                    }
                    if (this.rings.length ===
                        m) break
                }
            }
        }
    })(ChemDoodle.informatics);
(function(b) {
        b._Interpreter = function() {};
        b._Interpreter.prototype.fit = function(b, m, l) {
            for (var g = b.length, d = [], f = 0; f < m - g; f++) d.push(" ");
            return l ? b + d.join("") : d.join("") + b
        }
    })(ChemDoodle.io);
(function(b, j, m, l, g, d) {
        var f = /\s+/g,
            a = /\(|\)|\s+/g,
            e = /\'|\s+/g,
            t = /,|\'|\s+/g,
            k = /^\s+/,
            q = /[0-9]/g,
            n = /[0-9]|\+|\-/g,
            y = function(a) {
                return 0 !== a.length
            }, z = {
                P: [],
                A: [
                    [0, 0.5, 0.5]
                ],
                B: [
                    [0.5, 0, 0.5]
                ],
                C: [
                    [0.5, 0.5, 0]
                ],
                I: [
                    [0.5, 0.5, 0.5]
                ],
                R: [
                    [2 / 3, 1 / 3, 1 / 3],
                    [1 / 3, 2 / 3, 2 / 3]
                ],
                S: [
                    [1 / 3, 1 / 3, 2 / 3],
                    [2 / 3, 2 / 3, 1 / 3]
                ],
                T: [
                    [1 / 3, 2 / 3, 1 / 3],
                    [2 / 3, 1 / 3, 2 / 3]
                ],
                F: [
                    [0, 0.5, 0.5],
                    [0.5, 0, 0.5],
                    [0.5, 0.5, 0]
                ]
            }, p = function(a) {
                var b = 0,
                    d = 0,
                    e = 0,
                    f = 0,
                    c = a.indexOf("x"),
                    g = a.indexOf("y"),
                    k = a.indexOf("z"); - 1 !== c && (d++, 0 < c && "+" !== a.charAt(c - 1) && (d *= -1)); - 1 !== g &&
                (e++, 0 < g && "+" !== a.charAt(g - 1) && (e *= -1)); - 1 !== k && (f++, 0 < k && "+" !== a.charAt(k - 1) && (f *= -1));
                if (2 < a.length) {
                    c = "+";
                    g = 0;
                    for (k = a.length; g < k; g++) {
                        var n = a.charAt(g);
                        if (("-" === n || "/" === n) && (g === a.length - 1 || a.charAt(g + 1).match(q))) c = n;
                        n.match(q) && ("+" === c ? b += parseInt(n) : "-" === c ? b -= parseInt(n) : "/" === c && (b /= parseInt(n)))
                    }
                }
                return [b, d, e, f]
            };
        m.CIFInterpreter = function() {};
        (m.CIFInterpreter.prototype = new m._Interpreter).read = function(q, m, u, A) {
            m = m ? m : 1;
            u = u ? u : 1;
            A = A ? A : 1;
            var B = new l.Molecule;
            if (!q) return B;
            for (var c = q.split("\n"),
                    h = 0, D = 0, C = 0, H = q = 0, F = 0, G = "P", K, I, W, E, N = !0; 0 < c.length;) if (N ? E = c.shift() : N = !0, 0 < E.length) if (j.stringStartsWith(E, "_cell_length_a")) h = parseFloat(E.split(a)[1]);
                    else if (j.stringStartsWith(E, "_cell_length_b")) D = parseFloat(E.split(a)[1]);
            else if (j.stringStartsWith(E, "_cell_length_c")) C = parseFloat(E.split(a)[1]);
            else if (j.stringStartsWith(E, "_cell_angle_alpha")) q = g.PI * parseFloat(E.split(a)[1]) / 180;
            else if (j.stringStartsWith(E, "_cell_angle_beta")) H = g.PI * parseFloat(E.split(a)[1]) / 180;
            else if (j.stringStartsWith(E,
                    "_cell_angle_gamma")) F = g.PI * parseFloat(E.split(a)[1]) / 180;
            else if (j.stringStartsWith(E, "_symmetry_space_group_name_H-M")) G = E.split(e)[1];
            else if (j.stringStartsWith(E, "loop_")) {
                for (var P = {
                        fields: [],
                        lines: []
                    }, ca = !1; void 0 !== (E = c.shift()) && !j.stringStartsWith(E = E.replace(k, ""), "loop_") && 0 < E.length;) if (j.stringStartsWith(E, "_")) {
                        if (ca) break;
                        P.fields = P.fields.concat(E.split(f).filter(y))
                    } else ca = !0, P.lines.push(E);
                if (0 !== c.length && (j.stringStartsWith(E, "loop_") || j.stringStartsWith(E, "_"))) N = !1; - 1 !== P.fields.indexOf("_symmetry_equiv_pos_as_xyz") || -1 !== P.fields.indexOf("_space_group_symop_operation_xyz") ? K = P : -1 !== P.fields.indexOf("_atom_site_label") ? I = P : -1 !== P.fields.indexOf("_geom_bond_atom_site_label_1") && (W = P)
            }
            E = h;
            q = (g.cos(q) - g.cos(F) * g.cos(H)) / g.sin(F);
            q = [E, 0, 0, 0, D * g.cos(F), D * g.sin(F), 0, 0, C * g.cos(H), C * q, C * g.sqrt(1 - g.pow(g.cos(H), 2) - q * q), 0, 0, 0, 0, 1];
            if (I) {
                P = N = h = c = C = -1;
                F = 0;
                for (H = I.fields.length; F < H; F++) E = I.fields[F], "_atom_site_type_symbol" === E ? C = F : "_atom_site_label" === E ? c = F : "_atom_site_fract_x" === E ? h = F : "_atom_site_fract_y" === E ? N = F : "_atom_site_fract_z" ===
                        E && (P = F);
                F = 0;
                for (H = I.lines.length; F < H; F++) E = I.lines[F], D = E.split(f).filter(y), E = new l.Atom(D[-1 === C ? c : C].split(n)[0], parseFloat(D[h]), parseFloat(D[N]), parseFloat(D[P])), B.atoms.push(E), -1 !== c && (E.cifId = D[c], E.cifPart = 0)
            }
            if (K && !W) {
                F = D = 0;
                for (H = K.fields.length; F < H; F++) if (E = K.fields[F], "_symmetry_equiv_pos_as_xyz" === E || "_space_group_symop_operation_xyz" === E) D = F;
                N = z[G];
                c = [];
                F = 0;
                for (H = K.lines.length; F < H; F++) {
                    E = K.lines[F].split(t).filter(y);
                    for (var P = p(E[D]), ca = p(E[D + 1]), da = p(E[D + 2]), G = 0, h = B.atoms.length; G <
                        h; G++) {
                        E = B.atoms[G];
                        var U = E.x * P[1] + E.y * P[2] + E.z * P[3] + P[0],
                            S = E.x * ca[1] + E.y * ca[2] + E.z * ca[3] + ca[0],
                            ja = E.x * da[1] + E.y * da[2] + E.z * da[3] + da[0];
                        I = new l.Atom(E.label, U, S, ja);
                        c.push(I);
                        void 0 !== E.cifId && (I.cifId = E.cifId, I.cifPart = F + 1);
                        if (N) {
                            I = 0;
                            for (C = N.length; I < C; I++) {
                                var aa = N[I],
                                    aa = new l.Atom(E.label, U + aa[0], S + aa[1], ja + aa[2]);
                                c.push(aa);
                                void 0 !== E.cifId && (aa.cifId = E.cifId, aa.cifPart = F + 1)
                            }
                        }
                    }
                }
                F = 0;
                for (H = c.length; F < H; F++) {
                    for (E = c[F]; 1 <= E.x;) E.x--;
                    for (; 0 > E.x;) E.x++;
                    for (; 1 <= E.y;) E.y--;
                    for (; 0 > E.y;) E.y++;
                    for (; 1 <= E.z;) E.z--;
                    for (; 0 > E.z;) E.z++
                }
                I = [];
                F = 0;
                for (H = c.length; F < H; F++) {
                    C = !1;
                    E = c[F];
                    G = 0;
                    for (h = B.atoms.length; G < h; G++) if (1E-4 > B.atoms[G].distance3D(E)) {
                            C = !0;
                            break
                        }
                    if (!C) {
                        G = 0;
                        for (h = I.length; G < h; G++) if (1E-4 > I[G].distance3D(E)) {
                                C = !0;
                                break
                            }
                        C || I.push(E)
                    }
                }
                B.atoms = B.atoms.concat(I)
            }
            H = [];
            for (F = 0; F < m; F++) for (G = 0; G < u; G++) for (I = 0; I < A; I++) if (!(0 === F && 0 === G && 0 === I)) {
                            C = 0;
                            for (D = B.atoms.length; C < D; C++) E = B.atoms[C], c = new l.Atom(E.label, E.x + F, E.y + G, E.z + I), H.push(c), void 0 !== E.cifId && (c.cifId = E.cifId, c.cifPart = E.cifPart + (K ? K.lines.length :
                                        0) + F + 10 * G + 100 * I)
                        }
            B.atoms = B.atoms.concat(H);
            F = 0;
            for (H = B.atoms.length; F < H; F++) E = B.atoms[F], K = d.multiplyVec3(q, [E.x, E.y, E.z]), E.x = K[0], E.y = K[1], E.z = K[2];
            if (W) {
                c = K = -1;
                F = 0;
                for (H = W.fields.length; F < H; F++) E = W.fields[F], "_geom_bond_atom_site_label_1" === E ? K = F : "_geom_bond_atom_site_label_2" === E && (c = F);
                I = 0;
                for (C = W.lines.length; I < C; I++) {
                    D = W.lines[I].split(f).filter(y);
                    E = D[K];
                    D = D[c];
                    F = 0;
                    for (H = B.atoms.length; F < H; F++) for (G = F + 1; G < H; G++) {
                            h = B.atoms[F];
                            N = B.atoms[G];
                            if (h.cifPart !== N.cifPart) break;
                            (h.cifId === E && N.cifId ===
                                D || h.cifId === D && N.cifId === E) && B.bonds.push(new l.Bond(h, N))
                    }
                }
            } else(new b.informatics.BondDeducer).deduceCovalentBonds(B, 1);
            m = [-m / 2, -u / 2, -A / 2];
            B.unitCellVectors = {
                o: d.multiplyVec3(q, m, []),
                x: d.multiplyVec3(q, [m[0] + 1, m[1], m[2]]),
                y: d.multiplyVec3(q, [m[0], m[1] + 1, m[2]]),
                z: d.multiplyVec3(q, [m[0], m[1], m[2] + 1]),
                xy: d.multiplyVec3(q, [m[0] + 1, m[1] + 1, m[2]]),
                xz: d.multiplyVec3(q, [m[0] + 1, m[1], m[2] + 1]),
                yz: d.multiplyVec3(q, [m[0], m[1] + 1, m[2] + 1]),
                xyz: d.multiplyVec3(q, [m[0] + 1, m[1] + 1, m[2] + 1])
            };
            return B
        };
        var u = new m.CIFInterpreter;
        b.readCIF = function(a, b, d, e) {
            return u.read(a, b, d, e)
        }
    })(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(b, j, m, l) {
        j.CMLInterpreter = function() {};
        var g = j.CMLInterpreter.prototype = new j._Interpreter;
        g.read = function(b) {
            var a = [];
            b = l.parseXML(b);
            b = l(b).find("cml");
            for (var d = 0, g = b.length; d < g; d++) for (var k = l(b[d]).find("molecule"), j = 0, n = k.length; j < n; j++) {
                    for (var y = a[j] = new m.Molecule, z = [], p = l(k[j]).find("atom"), u = 0, r = p.length; u < r; u++) {
                        var v = l(p[u]),
                            w = v.attr("elementType"),
                            A, B, c;
                        void 0 == v.attr("x2") ? (A = v.attr("x3"), B = v.attr("y3"), c = v.attr("z3")) : (A = v.attr("x2"), B = v.attr("y2"), c = 0);
                        w = a[j].atoms[u] = new m.Atom(w,
                            A, B, c);
                        z[u] = v.attr("id");
                        void 0 != v.attr("formalCharge") && (w.charge = v.attr("formalCharge"))
                    }
                    p = l(k[j]).find("bond");
                    u = 0;
                    for (r = p.length; u < r; u++) {
                        v = l(p[u]);
                        A = v.attr("atomRefs2").split(" ");
                        w = y.atoms[l.inArray(A[0], z)];
                        A = y.atoms[l.inArray(A[1], z)];
                        switch (v.attr("order")) {
                            case "2":
                            case "D":
                                B = 2;
                                break;
                            case "3":
                            case "T":
                                B = 3;
                                break;
                            case "A":
                                B = 1.5;
                                break;
                            default:
                                B = 1
                        }
                        w = a[j].bonds[u] = new m.Bond(w, A, B);
                        switch (v.find("bondStereo").text()) {
                            case "W":
                                w.stereo = m.Bond.STEREO_PROTRUDING;
                                break;
                            case "H":
                                w.stereo = m.Bond.STEREO_RECESSED
                        }
                    }
            }
            return a
        };
        g.write = function(b) {
            var a = [];
            a.push('\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n');
            a.push('\x3ccml convention\x3d"conventions:molecular" xmlns\x3d"http://www.xml-cml.org/schema" xmlns:conventions\x3d"http://www.xml-cml.org/convention/" xmlns:dc\x3d"http://purl.org/dc/elements/1.1/"\x3e\n');
            for (var d = 0, g = b.length; d < g; d++) {
                a.push('\x3cmolecule id\x3d"m');
                a.push(d);
                a.push('"\x3e');
                a.push("\x3catomArray\x3e");
                for (var k = 0, j = b[d].atoms.length; k < j; k++) {
                    var n = b[d].atoms[k];
                    a.push('\x3catom elementType\x3d"');
                    a.push(n.label);
                    a.push('" id\x3d"a');
                    a.push(k);
                    a.push('" ');
                    a.push('x3\x3d"');
                    a.push(n.x);
                    a.push('" y3\x3d"');
                    a.push(n.y);
                    a.push('" z3\x3d"');
                    a.push(n.z);
                    a.push('" ');
                    0 != n.charge && (a.push('formalCharge\x3d"'), a.push(n.charge), a.push('" '));
                    a.push("/\x3e")
                }
                a.push("\x3c/atomArray\x3e");
                a.push("\x3cbondArray\x3e");
                k = 0;
                for (j = b[d].bonds.length; k < j; k++) {
                    n = b[d].bonds[k];
                    a.push('\x3cbond atomRefs2\x3d"a');
                    a.push(b[d].atoms.indexOf(n.a1));
                    a.push(" a");
                    a.push(b[d].atoms.indexOf(n.a2));
                    a.push('" order\x3d"');
                    switch (n.bondOrder) {
                        case 1.5:
                            a.push("A");
                            break;
                        case 1:
                        case 2:
                        case 3:
                            a.push(n.bondOrder);
                            break;
                        default:
                            a.push("S")
                    }
                    a.push('"/\x3e')
                }
                a.push("\x3c/bondArray\x3e");
                a.push("\x3c/molecule\x3e")
            }
            a.push("\x3c/cml\x3e");
            return a.join("")
        };
        var d = new j.CMLInterpreter;
        b.readCML = function(b) {
            return d.read(b)
        };
        b.writeCML = function(b) {
            return d.write(b)
        }
    })(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function(b, j, m, l) {
        m.MOLInterpreter = function() {};
        var g = m.MOLInterpreter.prototype = new m._Interpreter;
        g.read = function(d, a) {
            a || (a = b.default_bondLength_2D);
            var e = new l.Molecule;
            if (!d) return e;
            for (var g = d.split("\n"), k = g[3], m = parseInt(k.substring(0, 3)), k = parseInt(k.substring(3, 6)), n = 0; n < m; n++) {
                var y = g[4 + n];
                e.atoms[n] = new l.Atom(y.substring(31, 34), parseFloat(y.substring(0, 10)) * a, (1 === a ? 1 : -1) * parseFloat(y.substring(10, 20)) * a, parseFloat(y.substring(20, 30)) * a);
                var z = parseInt(y.substring(34, 36));
                0 !== z && j[e.atoms[n].label] &&
                (e.atoms[n].mass = j[e.atoms[n].label].mass + z);
                switch (parseInt(y.substring(36, 39))) {
                    case 1:
                        e.atoms[n].charge = 3;
                        break;
                    case 2:
                        e.atoms[n].charge = 2;
                        break;
                    case 3:
                        e.atoms[n].charge = 1;
                        break;
                    case 5:
                        e.atoms[n].charge = -1;
                        break;
                    case 6:
                        e.atoms[n].charge = -2;
                        break;
                    case 7:
                        e.atoms[n].charge = -3
                }
            }
            for (n = 0; n < k; n++) {
                var y = g[4 + m + n],
                    p = parseInt(y.substring(6, 9)),
                    z = parseInt(y.substring(9, 12));
                if (3 < p) switch (p) {
                        case 4:
                            p = 1.5;
                            break;
                        default:
                            p = 1
                }
                y = new l.Bond(e.atoms[parseInt(y.substring(0, 3)) - 1], e.atoms[parseInt(y.substring(3, 6)) -
                    1], p);
                switch (z) {
                    case 3:
                        y.stereo = l.Bond.STEREO_AMBIGUOUS;
                        break;
                    case 1:
                        y.stereo = l.Bond.STEREO_PROTRUDING;
                        break;
                    case 6:
                        y.stereo = l.Bond.STEREO_RECESSED
                }
                e.bonds[n] = y
            }
            return e
        };
        g.write = function(d) {
            var a = [];
            a.push("Molecule from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n");
            a.push(this.fit(d.atoms.length.toString(), 3));
            a.push(this.fit(d.bonds.length.toString(), 3));
            a.push("  0  0  0  0            999 V2000\n");
            for (var e = d.getCenter(), g = 0, k = d.atoms.length; g < k; g++) {
                var m = d.atoms[g],
                    n = " 0";
                if (-1 !==
                    m.mass && j[m.label]) {
                    var y = m.mass - j[m.label].mass;
                    5 > y && -4 < y && (n = (-1 < y ? " " : "") + y)
                }
                y = "  0";
                if (0 !== m.charge) switch (m.charge) {
                        case 3:
                            y = "  1";
                            break;
                        case 2:
                            y = "  2";
                            break;
                        case 1:
                            y = "  3";
                            break;
                        case -1:
                            y = "  5";
                            break;
                        case -2:
                            y = "  6";
                            break;
                        case -3:
                            y = "  7"
                }
                a.push(this.fit(((m.x - e.x) / b.default_bondLength_2D).toFixed(4), 10));
                a.push(this.fit((-(m.y - e.y) / b.default_bondLength_2D).toFixed(4), 10));
                a.push(this.fit((m.z / b.default_bondLength_2D).toFixed(4), 10));
                a.push(" ");
                a.push(this.fit(m.label, 3, !0));
                a.push(n);
                a.push(y);
                a.push("  0  0  0  0\n")
            }
            g = 0;
            for (k = d.bonds.length; g < k; g++) {
                m = d.bonds[g];
                e = 0;
                m.stereo === l.Bond.STEREO_AMBIGUOUS ? e = 3 : m.stereo === l.Bond.STEREO_PROTRUDING ? e = 1 : m.stereo === l.Bond.STEREO_RECESSED && (e = 6);
                a.push(this.fit((d.atoms.indexOf(m.a1) + 1).toString(), 3));
                a.push(this.fit((d.atoms.indexOf(m.a2) + 1).toString(), 3));
                m = m.bondOrder;
                if (1.5 == m) m = 4;
                else if (3 < m || 0 != m % 1) m = 1;
                a.push(this.fit(m, 3));
                a.push("  ");
                a.push(e);
                a.push("     0  0\n")
            }
            a.push("M  END");
            return a.join("")
        };
        var d = new m.MOLInterpreter;
        b.readMOL = function(b, a) {
            return d.read(b, a)
        };
        b.writeMOL = function(b) {
            return d.write(b)
        }
    })(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.io, ChemDoodle.structures);
(function(b, j, m, l, g, d, f) {
        function a(a, b, d, e, f) {
            for (var g = 0, j = b.length; g < j; g++) {
                var l = b[g];
                if (l.id === d && e >= l.start && e <= l.end) {
                    f ? a.helix = !0 : a.sheet = !0;
                    e + 1 === l.end && (a.arrow = !0);
                    break
                }
            }
        }
        m.PDBInterpreter = function() {};
        var e = m.PDBInterpreter.prototype = new m._Interpreter;
        e.calculateRibbonDistances = !1;
        e.deduceResidueBonds = !1;
        e.read = function(e, m) {
            var n = new l.Molecule;
            n.chains = [];
            if (!e) return n;
            var t = e.split("\n");
            m || (m = 1);
            for (var z = [], p = [], u, r = [], v = [], w = [], A = 0, B = t.length; A < B; A++) {
                var c = t[A];
                if (j.stringStartsWith(c,
                        "HELIX")) z.push({
                            id: c.substring(19, 20),
                            start: parseInt(c.substring(21, 25)),
                            end: parseInt(c.substring(33, 37))
                        });
                else if (j.stringStartsWith(c, "SHEET")) p.push({
                            id: c.substring(21, 22),
                            start: parseInt(c.substring(22, 26)),
                            end: parseInt(c.substring(33, 37))
                        });
                else if (j.stringStartsWith(c, "ATOM")) {
                    var h = c.substring(16, 17);
                    if (" " === h || "A" === h) {
                        h = d(c.substring(76, 78));
                        if (0 === h.length) {
                            var D = d(c.substring(12, 14));
                            "HD" === D ? h = "H" : 0 < D.length && (h = 1 < D.length ? D.charAt(0) + D.substring(1).toLowerCase() : D)
                        }
                        D = new l.Atom(h, parseFloat(c.substring(30,
                                    38)) * m, parseFloat(c.substring(38, 46)) * m, parseFloat(c.substring(46, 54)) * m);
                        D.hetatm = !1;
                        v.push(D);
                        var C = parseInt(c.substring(22, 26));
                        if (0 === r.length) for (h = 0; 2 > h; h++) {
                                var H = new l.Residue(-1);
                                H.cp1 = D;
                                H.cp2 = D;
                                r.push(H)
                        }
                        C !== Number.NaN && r[r.length - 1].resSeq !== C && (h = new l.Residue(C), h.name = d(c.substring(17, 20)), 3 === h.name.length ? h.name = h.name.substring(0, 1) + h.name.substring(1).toLowerCase() : 2 === h.name.length && "D" === h.name.charAt(0) && (h.name = h.name.substring(1)), r.push(h), H = c.substring(21, 22), a(h, z, H, C, !0),
                            a(h, p, H, C, !1));
                        c = d(c.substring(12, 16));
                        h = r[r.length - 1];
                        if ("CA" === c || "P" === c || "O5'" === c) h.cp1 || (h.cp1 = D);
                        else if ("N3" === c && ("C" === h.name || "U" === h.name || "T" === h.name) || "N1" === c && ("A" === h.name || "G" === h.name)) h.cp3 = D;
                        else if ("C2" === c) h.cp4 = D;
                        else if ("C4" === c && ("C" === h.name || "U" === h.name || "T" === h.name) || "C6" === c && ("A" === h.name || "G" === h.name)) h.cp5 = D;
                        else if ("O" === c || "C6" === c && ("C" === h.name || "U" === h.name || "T" === h.name) || "N9" === c) {
                            if (!r[r.length - 1].cp2) {
                                if ("C6" === c || "N9" === c) u = D;
                                h.cp2 = D
                            }
                        } else "C" === c && (u =
                                D)
                    }
                } else if (j.stringStartsWith(c, "HETATM")) h = d(c.substring(76, 78)), 0 === h.length && (h = d(c.substring(12, 16))), 1 < h.length && (h = h.substring(0, 1) + h.substring(1).toLowerCase()), h = new l.Atom(h, parseFloat(c.substring(30, 38)) * m, parseFloat(c.substring(38, 46)) * m, parseFloat(c.substring(46, 54)) * m), h.hetatm = !0, "HOH" === d(c.substring(17, 20)) && (h.isWater = !0), n.atoms.push(h), w[parseInt(d(c.substring(6, 11)))] = h;
                else if (j.stringStartsWith(c, "CONECT")) {
                    if (h = parseInt(d(c.substring(6, 11))), w[h]) {
                        D = w[h];
                        for (C = 0; 4 > C; C++) if (h =
                                d(c.substring(11 + 5 * C, 16 + 5 * C)), 0 !== h.length && (h = parseInt(h), w[h])) {
                                for (var H = w[h], F = !1, h = 0, G = n.bonds.length; h < G; h++) {
                                    var K = n.bonds[h];
                                    if (K.a1 === D && K.a2 === H || K.a1 === H && K.a2 === D) {
                                        F = !0;
                                        break
                                    }
                                }
                                F || n.bonds.push(new l.Bond(D, H))
                            }
                    }
                } else if (j.stringStartsWith(c, "TER")) this.endChain(n, r, u, v), r = [];
                else if (j.stringStartsWith(c, "ENDMDL")) break
            }
            this.endChain(n, r, u, v);
            0 === n.bonds.size && (new b.informatics.BondDeducer).deduceCovalentBonds(n, m);
            if (this.deduceResidueBonds) {
                A = 0;
                for (B = v.length; A < B; A++) {
                    t = f.min(B, A + 20);
                    for (h = A + 1; h < t; h++) z = v[A], p = v[h], z.distance3D(p) < 1.1 * (g[z.label].covalentRadius + g[p.label].covalentRadius) && n.bonds.push(new l.Bond(z, p, 1))
                }
            }
            n.atoms = n.atoms.concat(v);
            this.calculateRibbonDistances && this.calculateDistances(n, v);
            return n
        };
        e.endChain = function(a, b, d, e) {
            if (0 < b.length) {
                var f = b[b.length - 1];
                f.cp1 || (f.cp1 = e[e.length - 2]);
                f.cp2 || (f.cp2 = e[e.length - 1]);
                for (e = 0; 4 > e; e++) f = new l.Residue(-1), f.cp1 = d, f.cp2 = b[b.length - 1].cp2, b.push(f);
                a.chains.push(b)
            }
        };
        e.calculateDistances = function(a, b) {
            for (var d = [],
                    e = 0, f = a.atoms.length; e < f; e++) {
                var g = a.atoms[e];
                g.hetatm && (g.isWater || d.push(g))
            }
            e = 0;
            for (f = b.length; e < f; e++) if (g = b[e], g.closestDistance = Number.POSITIVE_INFINITY, 0 === d.length) g.closestDistance = 0;
                else for (var j = 0, l = d.length; j < l; j++) g.closestDistance = Math.min(g.closestDistance, g.distance3D(d[j]))
        };
        var t = new m.PDBInterpreter;
        b.readPDB = function(a, b) {
            return t.read(a, b)
        }
    })(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.ELEMENT, ChemDoodle.lib.jQuery.trim, Math);
(function(b, j, m, l, g, d) {
        var f = {
            "@": 0,
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            I: 9,
            a: -1,
            b: -2,
            c: -3,
            d: -4,
            e: -5,
            f: -6,
            g: -7,
            h: -8,
            i: -9
        }, a = {
                "%": 0,
                J: 1,
                K: 2,
                L: 3,
                M: 4,
                N: 5,
                O: 6,
                P: 7,
                Q: 8,
                R: 9,
                j: -1,
                k: -2,
                l: -3,
                m: -4,
                n: -5,
                o: -6,
                p: -7,
                q: -8,
                r: -9
            }, e = {
                S: 1,
                T: 2,
                U: 3,
                V: 4,
                W: 5,
                X: 6,
                Y: 7,
                Z: 8,
                s: 9
            };
        m.JCAMPInterpreter = function() {};
        g = m.JCAMPInterpreter.prototype = new m._Interpreter;
        g.convertHZ2PPM = !1;
        g.read = function(b) {
            this.isBreak = function(c) {
                return void 0 !== f[c] || void 0 !== a[c] || void 0 !== e[c] || " " === c || "-" === c || "+" === c
            };
            this.getValue = function(c, b) {
                var d =
                    c.charAt(0),
                    e = c.substring(1);
                return void 0 !== f[d] ? parseFloat(f[d] + e) : void 0 !== a[d] ? parseFloat(a[d] + e) + b : parseFloat(e)
            };
            var g = new l.Spectrum;
            if (void 0 === b || 0 === b.length) return g;
            b = b.split("\n");
            for (var n = [], m, t, p, u, r = 1, v = 1, w = 1, A = -1, B = -1, c = -1, h = !0, D = !1, C = 0, H = b.length; C < H; C++) {
                var F = d(b[C]),
                    G = F.indexOf("$$"); - 1 !== G && (F = F.substring(0, G));
                if (0 === n.length || !j.stringStartsWith(b[C], "##")) 0 !== n.length && n.push("\n"), n.push(d(F));
                else if (G = n.join(""), h && 100 > G.length && g.metadata.push(G), n = [F], j.stringStartsWith(G,
                        "##TITLE\x3d")) g.title = d(G.substring(8));
                else if (j.stringStartsWith(G, "##XUNITS\x3d")) g.xUnit = d(G.substring(9)), this.convertHZ2PPM && "HZ" === g.xUnit.toUpperCase() && (g.xUnit = "PPM", D = !0);
                else if (j.stringStartsWith(G, "##YUNITS\x3d")) g.yUnit = d(G.substring(9));
                else if (!j.stringStartsWith(G, "##XYPAIRS\x3d")) if (j.stringStartsWith(G, "##FIRSTX\x3d")) t = parseFloat(d(G.substring(9)));
                    else if (j.stringStartsWith(G, "##LASTX\x3d")) m = parseFloat(d(G.substring(8)));
                else if (j.stringStartsWith(G, "##FIRSTY\x3d")) p = parseFloat(d(G.substring(9)));
                else if (j.stringStartsWith(G, "##NPOINTS\x3d")) u = parseFloat(d(G.substring(10)));
                else if (j.stringStartsWith(G, "##XFACTOR\x3d")) r = parseFloat(d(G.substring(10)));
                else if (j.stringStartsWith(G, "##YFACTOR\x3d")) v = parseFloat(d(G.substring(10)));
                else if (j.stringStartsWith(G, "##DELTAX\x3d")) A = parseFloat(d(G.substring(9)));
                else if (j.stringStartsWith(G, "##.OBSERVE FREQUENCY\x3d")) this.convertHZ2PPM && (w = parseFloat(d(G.substring(21))));
                else if (j.stringStartsWith(G, "##.SHIFT REFERENCE\x3d")) this.convertHZ2PPM &&
                    (c = G.substring(19).split(","), B = parseInt(d(c[2])), c = parseFloat(d(c[3])));
                else if (j.stringStartsWith(G, "##XYDATA\x3d")) {
                    D || (w = 1);
                    var F = h = !1,
                        G = G.split("\n"),
                        K = (m - t) / (u - 1);
                    if (-1 !== A) for (var I = 1, W = G.length; I < W; I++) if ("|" === G[I].charAt(0)) {
                                K = A;
                                break
                            }
                    for (var E = t - K, N = p, P = 0, ca, I = 1, W = G.length; I < W; I++) {
                        for (var da = [], E = d(G[I]), n = [], U = !1, S = 0, ja = E.length; S < ja; S++) this.isBreak(E.charAt(S)) ? (0 < n.length && !(1 === n.length && " " === n[0]) && da.push(n.join("")), n = [E.charAt(S)]) : "|" === E.charAt(S) ? U = !0 : n.push(E.charAt(S));
                        da.push(n.join(""));
                        E = parseFloat(da[0]) * r - K;
                        S = 1;
                        for (ja = da.length; S < ja; S++) if (N = da[S], void 0 !== e[N.charAt(0)]) for (var aa = parseInt(e[N.charAt(0)] + N.substring(1)) - 1, Sa = 0; Sa < aa; Sa++) E += K, P = this.getValue(ca, P), N = P * v, $++, g.data[g.data.length - 1] = new l.Point(E / w, N);
                            else void 0 !== f[N.charAt(0)] && F ? (N = this.getValue(N, P) * v, U && (E += K, g.data.push(new l.Point(E / w, N)))) : (F = void 0 !== a[N.charAt(0)], ca = N, E += K, P = this.getValue(N, P), N = P * v, $++, g.data.push(new l.Point(E / w, N)))
                    }
                    if (-1 !== B) {
                        F = c - g.data[B - 1].x;
                        C = 0;
                        for (H = g.data.length; C <
                            H; C++) g.data[C].x += F
                    }
                } else if (j.stringStartsWith(G, "##PEAK TABLE\x3d")) {
                    h = !1;
                    g.continuous = !1;
                    for (var G = G.split("\n"), $ = 0, I = 1, W = G.length; I < W; I++) {
                        F = G[I].split(/[\s,]+/);
                        $ += F.length / 2;
                        S = 0;
                        for (ja = F.length; S + 1 < ja; S += 2) g.data.push(new l.Point(parseFloat(d(F[S])), parseFloat(d(F[S + 1]))))
                    }
                }
            }
            g.setup();
            return g
        };
        var t = new m.JCAMPInterpreter;
        t.convertHZ2PPM = !0;
        b.readJCAMP = function(a) {
            return t.read(a)
        }
    })(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery, ChemDoodle.lib.jQuery.trim);
(function(b, j, m, l, g, d) {
        j.JSONInterpreter = function() {};
        var f = j.JSONInterpreter.prototype;
        f.contentTo = function(a, b) {
            for (var d = 0, f = 0, g = 0, j = a.length; g < j; g++) {
                for (var l = a[g], m = 0, u = l.atoms.length; m < u; m++) l.atoms[m].tmpid = "a" + d++;
                m = 0;
                for (u = l.bonds.length; m < u; m++) l.bonds[m].tmpid = "b" + f++
            }
            g = d = 0;
            for (j = b.length; g < j; g++) b[g].tmpid = "s" + d++;
            d = {};
            if (a && 0 < a.length) {
                d.m = [];
                g = 0;
                for (j = a.length; g < j; g++) d.m.push(this.molTo(a[g]))
            }
            if (b && 0 < b.length) {
                d.s = [];
                g = 0;
                for (j = b.length; g < j; g++) d.s.push(this.shapeTo(b[g]))
            }
            g = 0;
            for (j =
                a.length; g < j; g++) {
                l = a[g];
                m = 0;
                for (u = l.atoms.length; m < u; m++) l.atoms[m].tmpid = void 0;
                m = 0;
                for (u = l.bonds.length; m < u; m++) l.bonds[m].tmpid = void 0
            }
            g = 0;
            for (j = b.length; g < j; g++) b[g].tmpid = void 0;
            return d
        };
        f.contentFrom = function(a) {
            var b = {
                molecules: [],
                shapes: []
            };
            if (a.m) for (var d = 0, f = a.m.length; d < f; d++) b.molecules.push(this.molFrom(a.m[d]));
            if (a.s) {
                d = 0;
                for (f = a.s.length; d < f; d++) b.shapes.push(this.shapeFrom(a.s[d], b.molecules))
            }
            d = 0;
            for (f = b.molecules.length; d < f; d++) {
                a = b.molecules[d];
                for (var g = 0, j = a.atoms.length; g <
                    j; g++) a.atoms[g].tmpid = void 0;
                g = 0;
                for (j = a.bonds.length; g < j; g++) a.bonds[g].tmpid = void 0
            }
            d = 0;
            for (f = b.shapes.length; d < f; d++) b.shapes[d].tmpid = void 0;
            return b
        };
        f.molTo = function(a) {
            for (var b = {
                    a: []
                }, d = 0, f = a.atoms.length; d < f; d++) {
                var g = a.atoms[d],
                    j = {
                        x: g.x,
                        y: g.y
                    };
                g.tmpid && (j.i = g.tmpid);
                "C" !== g.label && (j.l = g.label);
                0 !== g.z && (j.z = g.z);
                0 !== g.charge && (j.c = g.charge); - 1 !== g.mass && (j.m = g.mass);
                0 !== g.numRadical && (j.r = g.numRadical);
                0 !== g.numLonePair && (j.p = g.numLonePair);
                g.any && (j.q = !0); - 1 !== g.rgroup && (j.rg = g.rgroup);
                b.a.push(j)
            }
            if (0 < a.bonds.length) {
                b.b = [];
                d = 0;
                for (f = a.bonds.length; d < f; d++) g = a.bonds[d], j = {
                        b: a.atoms.indexOf(g.a1),
                        e: a.atoms.indexOf(g.a2)
                }, g.tmpid && (j.i = g.tmpid), 1 !== g.bondOrder && (j.o = g.bondOrder), g.stereo !== m.Bond.STEREO_NONE && (j.s = g.stereo), b.b.push(j)
            }
            return b
        };
        f.molFrom = function(a) {
            for (var b = new m.Molecule, d = 0, f = a.a.length; d < f; d++) {
                var g = a.a[d],
                    j = new m.Atom(g.l ? g.l : "C", g.x, g.y);
                g.i && (j.tmpid = g.i);
                g.z && (j.z = g.z);
                g.c && (j.charge = g.c);
                g.m && (j.mass = g.m);
                g.r && (j.numRadical = g.r);
                g.p && (j.numLonePair = g.p);
                g.q && (j.any = !0);
                g.rg && (j.rgroup = g.rg);
                void 0 !== g.p_h && (j.hetatm = g.p_h);
                void 0 !== g.p_w && (j.isWater = g.p_w);
                void 0 !== g.p_d && (j.closestDistance = g.p_d);
                b.atoms.push(j)
            }
            if (a.b) {
                d = 0;
                for (f = a.b.length; d < f; d++) g = a.b[d], j = new m.Bond(b.atoms[g.b], b.atoms[g.e], void 0 === g.o ? 1 : g.o), g.i && (j.tmpid = g.i), g.s && (j.stereo = g.s), b.bonds.push(j)
            }
            return b
        };
        f.shapeTo = function(a) {
            var b = {};
            a.tmpid && (b.i = a.tmpid);
            a instanceof l.Line ? (b.t = "Line", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, b.a = a.arrowType) : a instanceof l.Pusher ?
            (b.t = "Pusher", b.o1 = a.o1.tmpid, b.o2 = a.o2.tmpid, 1 !== a.numElectron && (b.e = a.numElectron)) : a instanceof l.Bracket ? (b.t = "Bracket", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, 0 !== a.charge && (b.c = a.charge), 0 !== a.mult && (b.m = a.mult), 0 !== a.repeat && (b.r = a.repeat)) : a instanceof g.Distance ? (b.t = "Distance", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, a.node && (b.n = a.node, b.o = a.offset)) : a instanceof g.Angle ? (b.t = "Angle", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid) : a instanceof g.Torsion && (b.t = "Torsion", b.a1 = a.a1.tmpid,
                b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid, b.a4 = a.a4.tmpid);
            return b
        };
        f.shapeFrom = function(a, b) {
            var d;
            if ("Line" === a.t) d = new l.Line(new m.Point(a.x1, a.y1), new m.Point(a.x2, a.y2)), d.arrowType = a.a;
            else if ("Pusher" === a.t) {
                var f, j;
                d = 0;
                for (var y = b.length; d < y; d++) {
                    for (var z = b[d], p = 0, u = z.atoms.length; p < u; p++) {
                        var r = z.atoms[p];
                        r.tmpid === a.o1 ? f = r : r.tmpid === a.o2 && (j = r)
                    }
                    p = 0;
                    for (u = z.bonds.length; p < u; p++) {
                        var v = z.bonds[p];
                        v.tmpid === a.o1 ? f = v : v.tmpid === a.o2 && (j = v)
                    }
                }
                d = new l.Pusher(f, j);
                a.e && (d.numElectron = a.e)
            } else if ("Bracket" ===
                a.t) d = new l.Bracket(new m.Point(a.x1, a.y1), new m.Point(a.x2, a.y2)), void 0 !== a.c && (d.charge = a.c), void 0 !== a.m && (d.mult = a.m), void 0 !== a.r && (d.repeat = a.r);
            else if ("Distance" === a.t) {
                var w;
                d = 0;
                for (y = b.length; d < y; d++) {
                    z = b[d];
                    p = 0;
                    for (u = z.atoms.length; p < u; p++) r = z.atoms[p], r.tmpid === a.a1 ? v = r : r.tmpid === a.a2 && (w = r)
                }
                d = new g.Distance(v, w, a.n, a.o)
            } else if ("Angle" === a.t) {
                var A;
                d = 0;
                for (y = b.length; d < y; d++) {
                    z = b[d];
                    p = 0;
                    for (u = z.atoms.length; p < u; p++) r = z.atoms[p], r.tmpid === a.a1 ? v = r : r.tmpid === a.a2 ? w = r : r.tmpid === a.a3 && (A =
                            r)
                }
                d = new g.Angle(v, w, A)
            } else if ("Torsion" === a.t) {
                var B;
                d = 0;
                for (y = b.length; d < y; d++) {
                    z = b[d];
                    p = 0;
                    for (u = z.atoms.length; p < u; p++) r = z.atoms[p], r.tmpid === a.a1 ? v = r : r.tmpid === a.a2 ? w = r : r.tmpid === a.a3 ? A = r : r.tmpid === a.a4 && (B = r)
                }
                d = new g.Torsion(v, w, A, B)
            }
            return d
        };
        f.pdbFrom = function(a) {
            var b = this.molFrom(a.mol);
            b.findRings = !1;
            b.fromJSON = !0;
            b.chains = this.chainsFrom(a.ribbons);
            return b
        };
        f.chainsFrom = function(a) {
            for (var b = [], d = 0, f = a.cs.length; d < f; d++) {
                for (var g = a.cs[d], j = [], l = 0, p = g.length; l < p; l++) {
                    var u = g[l],
                        r = new m.Residue;
                    r.name = u.n;
                    r.cp1 = new m.Atom("", u.x1, u.y1, u.z1);
                    r.cp2 = new m.Atom("", u.x2, u.y2, u.z2);
                    u.x3 && (r.cp3 = new m.Atom("", u.x3, u.y3, u.z3), r.cp4 = new m.Atom("", u.x4, u.y4, u.z4), r.cp5 = new m.Atom("", u.x5, u.y5, u.z5));
                    r.helix = u.h;
                    r.sheet = u.s;
                    r.arrow = u.a;
                    j.push(r)
                }
                b.push(j)
            }
            return b
        };
        var a = new j.JSONInterpreter;
        b.readJSON = function(b) {
            var f;
            try {
                f = d.parse(b)
            } catch (g) {
                return
            }
            if (f) return f.m || f.s ? a.contentFrom(f) : f.a ? {
                    molecules: [a.molFrom(f)],
                    shapes: []
            }: {
                molecules: [],
                shapes: []
            }
        };
        b.writeJSON = function(b, f) {
            return d.stringify(a.contentTo(b,
                    f))
        }
    })(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.structures.d2, ChemDoodle.structures.d3, JSON);
(function(b, j, m) {
        j.RXNInterpreter = function() {};
        var l = j.RXNInterpreter.prototype = new j._Interpreter;
        l.read = function(d, f) {
            f || (f = b.default_bondLength_2D);
            var a = [],
                e;
            if (d) {
                e = d.split("$MOL\n");
                for (var g = e[0].split("\n")[4], j = parseInt(g.substring(0, 3)), g = parseInt(g.substring(3, 6)), l = 1, n = 0, y = 0, z = j + g; y < z; y++) {
                    a[y] = b.readMOL(e[l], f);
                    var p = a[y].getBounds(),
                        p = p.maxX - p.minX,
                        n = n - (p + 40);
                    l++
                }
                y = 0;
                for (z = j; y < z; y++) {
                    var p = a[y].getBounds(),
                        p = p.maxX - p.minX,
                        l = a[y].getCenter(),
                        u = 0;
                    for (e = a[y].atoms.length; u < e; u++) {
                        var r =
                            a[y].atoms[u];
                        r.x += n + p / 2 - l.x;
                        r.y -= l.y
                    }
                    n += p + 40
                }
                e = new m.d2.Line(new m.Point(n, 0), new m.Point(n + 40, 0));
                n += 80;
                y = j;
                for (z = j + g; y < z; y++) {
                    p = a[y].getBounds();
                    p = p.maxX - p.minX;
                    l = a[y].getCenter();
                    for (u = 0; u < a[y].atoms.length; u++) r = a[y].atoms[u], r.x += n + p / 2 - l.x, r.y -= l.y;
                    n += p + 40
                }
            } else a.push(new m.Molecule), e = new m.d2.Line(new m.Point(-20, 0), new m.Point(20, 0));
            e.arrowType = m.d2.Line.ARROW_SYNTHETIC;
            return {
                molecules: a,
                shapes: [e]
            }
        };
        l.write = function(d, f) {
            var a = [
                [],
                []
            ],
                e = void 0;
            if (d && f) {
                g = 0;
                for (j = f.length; g < j; g++) if (f[g] instanceof m.d2.Line) {
                        e = f[g].getPoints();
                        break
                    }
                if (!e) return "";
                for (var g = 0, j = d.length; g < j; g++) d[g].getCenter().x < e[1].x ? a[0].push(d[g]) : a[1].push(d[g]);
                e = [];
                e.push("$RXN\nReaction from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n");
                e.push(this.fit(a[0].length.toString(), 3));
                e.push(this.fit(a[1].length.toString(), 3));
                e.push("\n");
                for (g = 0; 2 > g; g++) for (var j = 0, l = a[g].length; j < l; j++) e.push("$MOL\n"), e.push(b.writeMOL(a[g][j])), e.push("\n");
                return e.join("")
            }
        };
        var g = new j.RXNInterpreter;
        b.readRXN = function(b,
            f) {
            return g.read(b, f)
        };
        b.writeRXN = function(b, f) {
            return g.write(b, f)
        }
    })(ChemDoodle, ChemDoodle.io, ChemDoodle.structures);
(function(b, j, m, l, g, d) {
        l.XYZInterpreter = function() {};
        j = l.XYZInterpreter.prototype = new l._Interpreter;
        j.deduceCovalentBonds = !0;
        j.read = function(a) {
            var e = new g.Molecule;
            if (!a) return e;
            a = a.split("\n");
            for (var f = parseInt(d(a[0])), j = 0; j < f; j++) {
            	console.log(a[j + 2])
                var l = a[j + 2].split(/\s+/g);
                // If the first guy is empty (format differences), then we remove it.
                if (l[0]==""){
                	l.shift();
                }
                e.atoms[j] = new g.Atom(isNaN(l[0]) ? l[0] : m[parseInt(l[0]) - 1], parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3]))
            }
            this.deduceCovalentBonds && (new b.informatics.BondDeducer).deduceCovalentBonds(e, 1);
            return e
        };
        var f = new l.XYZInterpreter;
        b.readXYZ = function(a) {
            return f.read(a)
        }
    })(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.SYMBOLS, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery.trim);
ChemDoodle.monitor = function(b, j, m) {
    var l = {
        CANVAS_DRAGGING: void 0,
        CANVAS_OVER: void 0,
        ALT: !1,
        SHIFT: !1,
        META: !1
    };
    b.supports_touch() || j(m).ready(function() {
            j(m).mousemove(function(b) {
                    l.CANVAS_DRAGGING && l.CANVAS_DRAGGING.drag && (l.CANVAS_DRAGGING.prehandleEvent(b), l.CANVAS_DRAGGING.drag(b))
                });
            j(m).mouseup(function(b) {
                    l.CANVAS_DRAGGING && l.CANVAS_DRAGGING !== l.CANVAS_OVER && l.CANVAS_DRAGGING.mouseup && (l.CANVAS_DRAGGING.prehandleEvent(b), l.CANVAS_DRAGGING.mouseup(b));
                    l.CANVAS_DRAGGING = void 0
                });
            j(m).keydown(function(b) {
                    l.SHIFT =
                        b.shiftKey;
                    l.ALT = b.altKey;
                    l.META = b.metaKey || b.ctrlKey;
                    var d = l.CANVAS_OVER;
                    l.CANVAS_DRAGGING && (d = l.CANVAS_DRAGGING);
                    d && d.keydown && (d.prehandleEvent(b), d.keydown(b))
                });
            j(m).keypress(function(b) {
                    var d = l.CANVAS_OVER;
                    l.CANVAS_DRAGGING && (d = l.CANVAS_DRAGGING);
                    d && d.keypress && (d.prehandleEvent(b), d.keypress(b))
                });
            j(m).keyup(function(b) {
                    l.SHIFT = b.shiftKey;
                    l.ALT = b.altKey;
                    l.META = b.metaKey || b.ctrlKey;
                    var d = l.CANVAS_OVER;
                    l.CANVAS_DRAGGING && (d = l.CANVAS_DRAGGING);
                    d && d.keyup && (d.prehandleEvent(b), d.keyup(b))
                })
        });
    return l
}(ChemDoodle.featureDetection, ChemDoodle.lib.jQuery, document);
(function(b, j, m, l, g, d, f, a, e, t) {
        b._Canvas = function() {};
        var k = b._Canvas.prototype;
        k.molecules = void 0;
        k.shapes = void 0;
        k.emptyMessage = void 0;
        k.image = void 0;
        k.repaint = function() {
            if (!this.test) {
                var a = e.getElementById(this.id);
                if (a.getContext) {
                    var b = a.getContext("2d");
                    1 !== this.pixelRatio && a.width === this.width && (a.width = this.width * this.pixelRatio, a.height = this.height * this.pixelRatio, b.scale(this.pixelRatio, this.pixelRatio));
                    this.image ? b.drawImage(this.image, 0, 0) : (this.specs.backgroundColor && this.bgCache !==
                        a.style.backgroundColor && (a.style.backgroundColor = this.specs.backgroundColor, this.bgCache = a.style.backgroundColor), b.fillStyle = this.specs.backgroundColor, b.fillRect(0, 0, this.width, this.height));
                    if (this.innerRepaint) this.innerRepaint(b);
                    else if (0 !== this.molecules.length || 0 !== this.shapes.length) {
                        b.save();
                        b.translate(this.width / 2, this.height / 2);
                        b.rotate(this.specs.rotateAngle);
                        b.scale(this.specs.scale, this.specs.scale);
                        b.translate(-this.width / 2, -this.height / 2);
                        for (var a = 0, d = this.molecules.length; a < d; a++) this.molecules[a].check(!0),
                        this.molecules[a].draw(b, this.specs);
                        a = 0;
                        for (d = this.shapes.length; a < d; a++) this.shapes[a].draw(b, this.specs);
                        b.restore()
                    } else this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline = "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage, this.width / 2, this.height / 2));
                    this.drawChildExtras && this.drawChildExtras(b)
                }
            }
        };
        k.resize = function(a, e) {
            var f = d("#" + this.id);
            f.attr({
                    width: a,
                    height: e
                });
            f.css("width", a);
            f.css("height", e);
            this.width = a;
            this.height =
                e;
            if (b._Canvas3D && this instanceof b._Canvas3D) this.gl.viewport(0, 0, a, e), this.setupScene();
            else if (0 < this.molecules.length) {
                this.center();
                for (var f = 0, g = this.molecules.length; f < g; f++) this.molecules[f].check()
            }
            this.repaint()
        };
        k.setBackgroundImage = function(a) {
            this.image = new Image;
            var b = this;
            this.image.onload = function() {
                b.repaint()
            };
            this.image.src = a
        };
        k.loadMolecule = function(a) {
            this.clear();
            this.molecules.push(a);
            this.center();
            b._Canvas3D && this instanceof b._Canvas3D || a.check();
            this.afterLoadContent && this.afterLoadContent();
            this.repaint()
        };
        k.loadContent = function(a, d) {
            this.molecules = a ? a : [];
            this.shapes = d ? d : [];
            this.center();
            if (!(b._Canvas3D && this instanceof b._Canvas3D)) for (var e = 0, f = this.molecules.length; e < f; e++) this.molecules[e].check();
            this.afterLoadContent && this.afterLoadContent();
            this.repaint()
        };
        k.addMolecule = function(a) {
            this.molecules.push(a);
            b._Canvas3D && this instanceof b._Canvas3D || a.check();
            this.repaint()
        };
        k.removeMolecule = function(a) {
            this.molecules = d.grep(this.molecules, function(b) {
                    return b !== a
                });
            this.repaint()
        };
        k.getMolecule = function() {
            return 0 < this.molecules.length ? this.molecules[0] : void 0
        };
        k.getMolecules = function() {
            return this.molecules
        };
        k.addShape = function(a) {
            this.shapes.push(a);
            this.repaint()
        };
        k.removeShape = function(a) {
            this.shapes = d.grep(this.shapes, function(b) {
                    return b !== a
                });
            this.repaint()
        };
        k.getShapes = function() {
            return this.shapes
        };
        k.clear = function() {
            this.molecules = [];
            this.shapes = [];
            this.specs.scale = 1;
            this.repaint()
        };
        k.center = function() {
            for (var b = this.getContentBounds(), d = new g.Point((this.width - b.minX -
                            b.maxX) / 2, (this.height - b.minY - b.maxY) / 2), e = 0, f = this.molecules.length; e < f; e++) for (var j = this.molecules[e], k = 0, l = j.atoms.length; k < l; k++) j.atoms[k].add(d);
            e = 0;
            for (f = this.shapes.length; e < f; e++) {
                j = this.shapes[e].getPoints();
                k = 0;
                for (l = j.length; k < l; k++) j[k].add(d)
            }
            this.specs.scale = 1;
            d = b.maxX - b.minX;
            b = b.maxY - b.minY;
            if (d > this.width || b > this.height) this.specs.scale = 0.85 * a.min(this.width / d, this.height / b)
        };
        k.bondExists = function(a, b) {
            for (var d = 0, e = this.molecules.length; d < e; d++) for (var f = this.molecules[d], g = 0, j =
                        f.bonds.length; g < j; g++) {
                    var k = f.bonds[g];
                    if (k.contains(a) && k.contains(b)) return !0
            }
            return !1
        };
        k.getBond = function(a, b) {
            for (var d = 0, e = this.molecules.length; d < e; d++) for (var f = this.molecules[d], g = 0, j = f.bonds.length; g < j; g++) {
                    var k = f.bonds[g];
                    if (k.contains(a) && k.contains(b)) return k
            }
        };
        k.getMoleculeByAtom = function(a) {
            for (var b = 0, d = this.molecules.length; b < d; b++) {
                var e = this.molecules[b];
                if (-1 !== e.atoms.indexOf(a)) return e
            }
        };
        k.getAllAtoms = function() {
            for (var a = [], b = 0, d = this.molecules.length; b < d; b++) a = a.concat(this.molecules[b].atoms);
            return a
        };
        k.getAllPoints = function() {
            for (var a = [], b = 0, d = this.molecules.length; b < d; b++) a = a.concat(this.molecules[b].atoms);
            b = 0;
            for (d = this.shapes.length; b < d; b++) a = a.concat(this.shapes[b].getPoints());
            return a
        };
        k.getContentBounds = function() {
            for (var a = new m.Bounds, b = 0, d = this.molecules.length; b < d; b++) a.expand(this.molecules[b].getBounds());
            b = 0;
            for (d = this.shapes.length; b < d; b++) a.expand(this.shapes[b].getBounds());
            return a
        };
        k.create = function(k, n, m) {
            this.id = k;
            this.width = n;
            this.height = m;
            this.molecules = [];
            this.shapes = [];
            if (e.getElementById(k)) {
                var z = d("#" + k);
                n ? z.attr("width", n) : this.width = z.attr("width");
                m ? z.attr("height", m) : this.height = z.attr("height");
                z.attr("class", "ChemDoodleWebComponent")
            } else {
                if (!b.featureDetection.supports_canvas_text() && f.msie && "6" <= f.version) {
                    e.writeln('\x3cdiv style\x3d"border: 1px solid black;" width\x3d"' + n + '" height\x3d"' + m + '"\x3ePlease install \x3ca href\x3d"http://code.google.com/chrome/chromeframe/"\x3eGoogle Chrome Frame\x3c/a\x3e, then restart Internet Explorer.\x3c/div\x3e');
                    return
                }
                e.writeln('\x3ccanvas class\x3d"ChemDoodleWebComponent" id\x3d"' + k + '" width\x3d"' + n + '" height\x3d"' + m + '" alt\x3d"ChemDoodle Web Component"\x3eThis browser does not support HTML5/Canvas.\x3c/canvas\x3e')
            }
            k = d("#" + k);
            k.css("width", this.width);
            k.css("height", this.height);
            this.pixelRatio = t.devicePixelRatio ? t.devicePixelRatio : 1;
            this.specs = new g.VisualSpecifications;
            var p = this;
            j.supports_touch() ? (k.bind("touchstart", function(a) {
                        var b = (new Date).getTime();
                        if (!j.supports_gesture() && 2 === a.originalEvent.touches.length) {
                            var d =
                                a.originalEvent.touches,
                                e = new g.Point(d[0].pageX, d[0].pageY),
                                d = new g.Point(d[1].pageX, d[1].pageY);
                            p.implementedGestureDist = e.distance(d);
                            p.implementedGestureAngle = e.angle(d);
                            p.gesturestart && (p.prehandleEvent(a), p.gesturestart(a))
                        }
                        p.lastTouch && 1 === a.originalEvent.touches.length && 500 > b - p.lastTouch ? p.dbltap ? (p.prehandleEvent(a), p.dbltap(a)) : p.dblclick ? (p.prehandleEvent(a), p.dblclick(a)) : p.touchstart ? (p.prehandleEvent(a), p.touchstart(a)) : p.mousedown && (p.prehandleEvent(a), p.mousedown(a)) : p.touchstart ?
                        (p.prehandleEvent(a), p.touchstart(a), this.hold && clearTimeout(this.hold), this.touchhold && (this.hold = setTimeout(function() {
                                        p.touchhold(a)
                                    }, 1E3))) : p.mousedown && (p.prehandleEvent(a), p.mousedown(a));
                        p.lastTouch = b
                    }), k.bind("touchmove", function(b) {
                        this.hold && (clearTimeout(this.hold), this.hold = void 0);
                        if (!j.supports_gesture() && 2 === b.originalEvent.touches.length && p.gesturechange) {
                            var d = b.originalEvent.touches,
                                e = new g.Point(d[0].pageX, d[0].pageY),
                                f = new g.Point(d[1].pageX, d[1].pageY),
                                d = e.distance(f),
                                e = e.angle(f);
                            b.originalEvent.scale = d / p.implementedGestureDist;
                            b.originalEvent.rotation = 180 * (p.implementedGestureAngle - e) / a.PI;
                            p.prehandleEvent(b);
                            p.gesturechange(b)
                        }
                        if (1 < b.originalEvent.touches.length && p.multitouchmove) {
                            e = b.originalEvent.touches.length;
                            p.prehandleEvent(b);
                            d = new g.Point(-b.offset.left * e, -b.offset.top * e);
                            for (f = 0; f < e; f++) d.x += b.originalEvent.changedTouches[f].pageX, d.y += b.originalEvent.changedTouches[f].pageY;
                            d.x /= e;
                            d.y /= e;
                            b.p = d;
                            p.multitouchmove(b, e)
                        } else p.touchmove ? (p.prehandleEvent(b), p.touchmove(b)) :
                                p.drag && (p.prehandleEvent(b), p.drag(b))
                    }), k.bind("touchend", function(a) {
                        this.hold && (clearTimeout(this.hold), this.hold = void 0);
                        !j.supports_gesture() && p.implementedGestureDist && (p.implementedGestureDist = void 0, p.implementedGestureAngle = void 0, p.gestureend && (p.prehandleEvent(a), p.gestureend(a)));
                        p.touchend ? (p.prehandleEvent(a), p.touchend(a)) : p.mouseup && (p.prehandleEvent(a), p.mouseup(a));
                        250 > (new Date).getTime() - p.lastTouch && (p.tap ? (p.prehandleEvent(a), p.tap(a)) : p.click && (p.prehandleEvent(a), p.click(a)))
                    }),
                k.bind("gesturestart", function(a) {
                        p.gesturestart && (p.prehandleEvent(a), p.gesturestart(a))
                    }), k.bind("gesturechange", function(a) {
                        p.gesturechange && (p.prehandleEvent(a), p.gesturechange(a))
                    }), k.bind("gestureend", function(a) {
                        p.gestureend && (p.prehandleEvent(a), p.gestureend(a))
                    })) : (k.click(function(a) {
                        switch (a.which) {
                            case 1:
                                p.click && (p.prehandleEvent(a), p.click(a));
                                break;
                            case 2:
                                p.middleclick && (p.prehandleEvent(a), p.middleclick(a));
                                break;
                            case 3:
                                p.rightclick && (p.prehandleEvent(a), p.rightclick(a))
                        }
                    }), k.dblclick(function(a) {
                        p.dblclick &&
                        (p.prehandleEvent(a), p.dblclick(a))
                    }), k.mousedown(function(a) {
                        switch (a.which) {
                            case 1:
                                l.CANVAS_DRAGGING = p;
                                p.mousedown && (p.prehandleEvent(a), p.mousedown(a));
                                break;
                            case 2:
                                p.middlemousedown && (p.prehandleEvent(a), p.middlemousedown(a));
                                break;
                            case 3:
                                p.rightmousedown && (p.prehandleEvent(a), p.rightmousedown(a))
                        }
                    }), k.mousemove(function(a) {
                        !l.CANVAS_DRAGGING && p.mousemove && (p.prehandleEvent(a), p.mousemove(a))
                    }), k.mouseout(function(a) {
                        l.CANVAS_OVER = void 0;
                        p.mouseout && (p.prehandleEvent(a), p.mouseout(a))
                    }), k.mouseover(function(a) {
                        l.CANVAS_OVER =
                            p;
                        p.mouseover && (p.prehandleEvent(a), p.mouseover(a))
                    }), k.mouseup(function(a) {
                        switch (a.which) {
                            case 1:
                                p.mouseup && (p.prehandleEvent(a), p.mouseup(a));
                                break;
                            case 2:
                                p.middlemouseup && (p.prehandleEvent(a), p.middlemouseup(a));
                                break;
                            case 3:
                                p.rightmouseup && (p.prehandleEvent(a), p.rightmouseup(a))
                        }
                    }), k.mousewheel(function(a, b) {
                        p.mousewheel && (p.prehandleEvent(a), p.mousewheel(a, b))
                    }));
            this.subCreate && this.subCreate()
        };
        k.prehandleEvent = function(a) {
            a.originalEvent.changedTouches && (a.pageX = a.originalEvent.changedTouches[0].pageX,
                a.pageY = a.originalEvent.changedTouches[0].pageY);
            a.preventDefault();
            a.offset = d("#" + this.id).offset();
            a.p = new g.Point(a.pageX - a.offset.left, a.pageY - a.offset.top)
        }
    })(ChemDoodle, ChemDoodle.featureDetection, ChemDoodle.math, ChemDoodle.monitor, ChemDoodle.structures, ChemDoodle.lib.jQuery, ChemDoodle.lib.jQuery.browser, Math, document, window);
(function(b, j) {
        b._AnimatorCanvas = function(b, g, d) {
            b && this.create(b, g, d)
        };
        var m = b._AnimatorCanvas.prototype = new b._Canvas;
        m.timeout = 33;
        m.startAnimation = function() {
            this.stopAnimation();
            this.lastTime = (new Date).getTime();
            var b = this;
            this.nextFrame && (this.handle = j.requestInterval(function() {
                        var g = (new Date).getTime();
                        b.nextFrame(g - b.lastTime);
                        b.repaint();
                        b.lastTime = g
                    }, this.timeout))
        };
        m.stopAnimation = function() {
            this.handle && (j.clearRequestInterval(this.handle), this.handle = void 0)
        };
        m.isRunning = function() {
            return void 0 !==
                this.handle
        }
    })(ChemDoodle, ChemDoodle.animations);
(function(b, j) {
        b.FileCanvas = function(b, l, g, d) {
            b && this.create(b, l, g);
            j.writeln('\x3cbr\x3e\x3cform name\x3d"FileForm" enctype\x3d"multipart/form-data" method\x3d"POST" action\x3d"' + d + '" target\x3d"HiddenFileFrame"\x3e\x3cinput type\x3d"file" name\x3d"f" /\x3e\x3cinput type\x3d"submit" name\x3d"submitbutton" value\x3d"Show File" /\x3e\x3c/form\x3e\x3ciframe id\x3d"HFF-' + b + '" name\x3d"HiddenFileFrame" height\x3d"0" width\x3d"0" style\x3d"display:none;" onLoad\x3d"GetMolFromFrame(\'HFF-' + b + "', " + b + ')"\x3e\x3c/iframe\x3e');
            this.emptyMessage = "Click below to load file";
            this.repaint()
        };
        b.FileCanvas.prototype = new b._Canvas
    })(ChemDoodle, document);
(function(b) {
        b.HyperlinkCanvas = function(b, m, l, g, d, f) {
            b && this.create(b, m, l);
            this.urlOrFunction = g;
            this.color = d ? d : "blue";
            this.size = f ? f : 2
        };
        b = b.HyperlinkCanvas.prototype = new b._Canvas;
        b.openInNewWindow = !0;
        b.hoverImage = void 0;
        b.drawChildExtras = function(b) {
            this.e && (this.hoverImage ? b.drawImage(this.hoverImage, 0, 0) : (b.strokeStyle = this.color, b.lineWidth = 2 * this.size, b.strokeRect(0, 0, this.width, this.height)))
        };
        b.setHoverImage = function(b) {
            this.hoverImage = new Image;
            this.hoverImage.src = b
        };
        b.click = function() {
            this.e =
                void 0;
            this.repaint();
            this.urlOrFunction instanceof Function ? this.urlOrFunction() : this.openInNewWindow ? window.open(this.urlOrFunction) : location.href = this.urlOrFunction
        };
        b.mouseout = function() {
            this.e = void 0;
            this.repaint()
        };
        b.mouseover = function(b) {
            this.e = b;
            this.repaint()
        }
    })(ChemDoodle);
(function(b, j, m, l) {
        b.MolGrabberCanvas = function(b, d, f) {
            b && this.create(b, d, f);
            d = [];
            d.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
            d.push(b);
            d.push('_query" size\x3d"32" value\x3d"" /\x3e');
            d.push("\x3cbr\x3e\x3cnobr\x3e");
            d.push('\x3cselect id\x3d"');
            d.push(b);
            d.push('_select"\x3e');
            d.push('\x3coption value\x3d"chemexper"\x3eChemExper');
            d.push('\x3coption value\x3d"chemspider"\x3eChemSpider');
            d.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
            d.push("\x3c/select\x3e");
            d.push('\x3cbutton id\x3d"');
            d.push(b);
            d.push('_submit"\x3eShow Molecule\x3c/button\x3e');
            d.push("\x3c/nobr\x3e");
            l.getElementById(b);
            m("#" + b).after(d.join(""));
            var a = this;
            m("#" + b + "_submit").click(function() {
                    a.search()
                });
            m("#" + b + "_query").keypress(function(b) {
                    13 === b.which && a.search()
                });
            this.emptyMessage = "Enter search term below";
            this.repaint()
        };
        b = b.MolGrabberCanvas.prototype = new b._Canvas;
        b.setSearchTerm = function(b) {
            m("#" + this.id + "_query").val(b);
            this.search()
        };
        b.search = function() {
            this.emptyMessage = "Searching...";
            this.clear();
            var b = this;
            j.getMoleculeFromDatabase(m("#" + this.id + "_query").val(), {
                    database: m("#" + this.id + "_select").val()
                }, function(d) {
                    b.loadMolecule(d)
                })
        }
    })(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function(b, j, m) {
        var l = [],
            g = [1, 0, 0],
            d = [0, 1, 0],
            f = [0, 0, 1];
        b.RotatorCanvas = function(a, b, d, f) {
            a && this.create(a, b, d);
            this.rotate3D = f
        };
        b = b.RotatorCanvas.prototype = new b._AnimatorCanvas;
        j = j.PI / 15;
        b.xIncrement = j;
        b.yIncrement = j;
        b.zIncrement = j;
        b.nextFrame = function(a) {
            if (0 === this.molecules.length && 0 === this.shapes.length) this.stopAnimation();
            else if (a /= 1E3, this.rotate3D) {
                m.identity(l);
                m.rotate(l, this.xIncrement * a, g);
                m.rotate(l, this.yIncrement * a, d);
                m.rotate(l, this.zIncrement * a, f);
                a = 0;
                for (var b = this.molecules.length; a <
                    b; a++) {
                    for (var j = this.molecules[a], k = 0, q = j.atoms.length; k < q; k++) {
                        var n = j.atoms[k],
                            y = [n.x - this.width / 2, n.y - this.height / 2, n.z];
                        m.multiplyVec3(l, y);
                        n.x = y[0] + this.width / 2;
                        n.y = y[1] + this.height / 2;
                        n.z = y[2]
                    }
                    k = 0;
                    for (q = j.rings.length; k < q; k++) j.rings[k].center = j.rings[k].getCenter();
                    this.specs.atoms_display && this.specs.atoms_circles_2D && j.sortAtomsByZ();
                    this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && j.sortBondsByZ()
                }
                a = 0;
                for (b = this.shapes.length; a < b; a++) {
                    j = this.shapes[a].getPoints();
                    k = 0;
                    for (q = j.length; k <
                        q; k++) n = j[k], y = [n.x - this.width / 2, n.y - this.height / 2, 0], m.multiplyVec3(l, y), n.x = y[0] + this.width / 2, n.y = y[1] + this.height / 2
                }
            } else this.specs.rotateAngle += this.zIncrement * a
        };
        b.dblclick = function() {
            this.isRunning() ? this.stopAnimation() : this.startAnimation()
        }
    })(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function(b, j, m) {
        b.SlideshowCanvas = function(b, g, d) {
            b && this.create(b, g, d)
        };
        b = b.SlideshowCanvas.prototype = new b._AnimatorCanvas;
        b.frames = [];
        b.curIndex = 0;
        b.timeout = 5E3;
        b.alpha = 0;
        b.innerHandle = void 0;
        b.phase = 0;
        b.drawChildExtras = function(b) {
            var g = m.getRGB(this.specs.backgroundColor, 255);
            b.fillStyle = "rgba(" + g[0] + ", " + g[1] + ", " + g[2] + ", " + this.alpha + ")";
            b.fillRect(0, 0, this.width, this.height)
        };
        b.nextFrame = function() {
            if (0 === this.frames.length) this.stopAnimation();
            else {
                this.phase = 0;
                var b = this,
                    g = 1;
                this.innerHandle =
                    setInterval(function() {
                        b.alpha = g / 15;
                        b.repaint();
                        15 === g && b.breakInnerHandle();
                        g++
                    }, 33)
            }
        };
        b.breakInnerHandle = function() {
            this.innerHandle && (clearInterval(this.innerHandle), this.innerHandle = void 0);
            if (0 === this.phase) {
                this.curIndex++;
                this.curIndex > this.frames.length - 1 && (this.curIndex = 0);
                this.alpha = 1;
                var b = this.frames[this.curIndex];
                this.loadContent(b.mols, b.shapes);
                this.phase = 1;
                var g = this,
                    d = 1;
                this.innerHandle = setInterval(function() {
                        g.alpha = (15 - d) / 15;
                        g.repaint();
                        15 === d && g.breakInnerHandle();
                        d++
                    }, 33)
            } else 1 ===
                    this.phase && (this.alpha = 0, this.repaint())
        };
        b.addFrame = function(b, g) {
            0 === this.frames.length && this.loadContent(b, g);
            this.frames.push({
                    mols: b,
                    shapes: g
                })
        }
    })(ChemDoodle, ChemDoodle.animations, ChemDoodle.math);
(function(b, j, m, l, g) {
        b.TransformCanvas = function(b, f, a, e) {
            b && this.create(b, f, a);
            this.rotate3D = e
        };
        b = b.TransformCanvas.prototype = new b._Canvas;
        b.lastPoint = void 0;
        b.rotationMultMod = 1.3;
        b.lastPinchScale = 1;
        b.lastGestureRotate = 0;
        b.mousedown = function(b) {
            this.lastPoint = b.p
        };
        b.dblclick = function() {
            this.center();
            this.repaint()
        };
        b.drag = function(b) {
            if (!this.lastPoint.multi) {
                if (j.ALT) {
                    var f = new m.Point(b.p.x, b.p.y);
                    f.sub(this.lastPoint);
                    for (var a = 0, e = this.molecules.length; a < e; a++) {
                        for (var t = this.molecules[a], k =
                                0, q = t.atoms.length; k < q; k++) t.atoms[k].add(f);
                        t.check()
                    }
                    a = 0;
                    for (e = this.shapes.length; a < e; a++) {
                        t = this.shapes[a].getPoints();
                        k = 0;
                        for (q = t.length; k < q; k++) t[k].add(f)
                    }
                    this.lastPoint = b.p
                } else if (!0 === this.rotate3D) {
                    q = l.max(this.width / 4, this.height / 4);
                    k = (b.p.x - this.lastPoint.x) / q * this.rotationMultMod;
                    q = -(b.p.y - this.lastPoint.y) / q * this.rotationMultMod;
                    f = [];
                    g.identity(f);
                    g.rotate(f, q, [1, 0, 0]);
                    g.rotate(f, k, [0, 1, 0]);
                    a = 0;
                    for (e = this.molecules.length; a < e; a++) {
                        t = this.molecules[a];
                        k = 0;
                        for (q = t.atoms.length; k < q; k++) a =
                                t.atoms[k], e = [a.x - this.width / 2, a.y - this.height / 2, a.z], g.multiplyVec3(f, e), a.x = e[0] + this.width / 2, a.y = e[1] + this.height / 2, a.z = e[2];
                        a = 0;
                        for (e = t.rings.length; a < e; a++) t.rings[a].center = t.rings[a].getCenter();
                        this.lastPoint = b.p;
                        this.specs.atoms_display && this.specs.atoms_circles_2D && t.sortAtomsByZ();
                        this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && t.sortBondsByZ()
                    }
                } else q = new m.Point(this.width / 2, this.height / 2), k = q.angle(this.lastPoint), q = q.angle(b.p), this.specs.rotateAngle -= q - k, this.lastPoint =
                        b.p;
                this.repaint()
            }
        };
        b.mousewheel = function(b, f) {
            this.specs.scale += f / 50;
            0.01 > this.specs.scale && (this.specs.scale = 0.01);
            this.repaint()
        };
        b.multitouchmove = function(b, f) {
            if (2 === f) if (this.lastPoint.multi) {
                    var a = new m.Point(b.p.x, b.p.y);
                    a.sub(this.lastPoint);
                    for (var e = 0, g = this.molecules.length; e < g; e++) {
                        for (var j = this.molecules[e], l = 0, n = j.atoms.length; l < n; l++) j.atoms[l].add(a);
                        j.check()
                    }
                    e = 0;
                    for (g = this.shapes.length; e < g; e++) {
                        j = this.shapes[e].getPoints();
                        l = 0;
                        for (n = j.length; l < n; l++) j[l].add(a)
                    }
                    this.lastPoint =
                        b.p;
                    this.lastPoint.multi = !0;
                    this.repaint()
                } else this.lastPoint = b.p, this.lastPoint.multi = !0
        };
        b.gesturechange = function(b) {
            0 !== b.originalEvent.scale - this.lastPinchScale && (this.specs.scale *= b.originalEvent.scale / this.lastPinchScale, 0.01 > this.specs.scale && (this.specs.scale = 0.01), this.lastPinchScale = b.originalEvent.scale);
            if (0 !== this.lastGestureRotate - b.originalEvent.rotation) {
                for (var f = (this.lastGestureRotate - b.originalEvent.rotation) / 180 * j.PI, a = new m.Point(this.width / 2, this.height / 2), e = 0, g = this.molecules.length; e <
                    g; e++) {
                    for (var j = this.molecules[e], l = 0, n = j.atoms.length; l < n; l++) {
                        var y = j.atoms[l],
                            z = a.distance(y),
                            p = a.angle(y) + f;
                        y.x = a.x + z * j.cos(p);
                        y.y = a.y - z * j.sin(p)
                    }
                    j.check()
                }
                this.lastGestureRotate = b.originalEvent.rotation
            }
            this.repaint()
        };
        b.gestureend = function() {
            this.lastPinchScale = 1;
            this.lastGestureRotate = 0
        }
    })(ChemDoodle, ChemDoodle.monitor, ChemDoodle.structures, Math, ChemDoodle.lib.mat4);
(function(b) {
        b.ViewerCanvas = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b.ViewerCanvas.prototype = new b._Canvas
    })(ChemDoodle);
(function(b) {
        b._SpectrumCanvas = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b = b._SpectrumCanvas.prototype = new b._Canvas;
        b.spectrum = void 0;
        b.emptyMessage = "No Spectrum Loaded or Recognized";
        b.loadMolecule = void 0;
        b.getMolecule = void 0;
        b.innerRepaint = function(b) {
            this.spectrum && 0 < this.spectrum.data.length ? this.spectrum.draw(b, this.specs, this.width, this.height) : this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline = "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage,
                    this.width / 2, this.height / 2))
        };
        b.loadSpectrum = function(b) {
            this.spectrum = b;
            this.repaint()
        };
        b.getSpectrum = function() {
            return this.spectrum
        };
        b.getSpectrumCoordinates = function(b, m) {
            return spectrum.getInternalCoordinates(b, m, this.width, this.height)
        }
    })(ChemDoodle, document);
(function(b) {
        b.ObserverCanvas = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b.ObserverCanvas.prototype = new b._SpectrumCanvas
    })(ChemDoodle);
(function(b) {
        b.OverlayCanvas = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b = b.OverlayCanvas.prototype = new b._SpectrumCanvas;
        b.overlaySpectra = [];
        b.superRepaint = b.innerRepaint;
        b.innerRepaint = function(b) {
            this.superRepaint(b);
            if (this.spectrum && 0 < this.spectrum.data.length) for (var m = 0, l = this.overlaySpectra.length; m < l; m++) {
                    var g = this.overlaySpectra[m];
                    g && 0 < g.data.length && (g.minX = this.spectrum.minX, g.maxX = this.spectrum.maxX, g.drawPlot(b, this.specs, this.width, this.height, this.spectrum.memory.offsetTop, this.spectrum.memory.offsetLeft,
                            this.spectrum.memory.offsetBottom))
            }
        };
        b.addSpectrum = function(b) {
            this.spectrum ? this.overlaySpectra.push(b) : this.spectrum = b
        }
    })(ChemDoodle);
(function(b, j, m) {
        b.PerspectiveCanvas = function(b, d, f) {
            b && this.create(b, d, f)
        };
        var l = b.PerspectiveCanvas.prototype = new b._SpectrumCanvas;
        l.dragRange = void 0;
        l.rescaleYAxisOnZoom = !0;
        l.lastPinchScale = 1;
        l.mousedown = function(g) {
            this.dragRange = new b.structures.Point(g.p.x, g.p.x)
        };
        l.mouseup = function(b) {
            this.dragRange && this.dragRange.x !== this.dragRange.y && (this.dragRange.multi || (b = this.spectrum.zoom(this.dragRange.x, b.p.x, this.width, this.rescaleYAxisOnZoom), this.rescaleYAxisOnZoom && (this.specs.scale = b)), this.dragRange =
                void 0, this.repaint())
        };
        l.drag = function(b) {
            this.dragRange && (this.dragRange.multi ? this.dragRange = void 0 : (j.SHIFT && (this.spectrum.translate(b.p.x - this.dragRange.x, this.width), this.dragRange.x = b.p.x), this.dragRange.y = b.p.x), this.repaint())
        };
        l.drawChildExtras = function(b) {
            if (this.dragRange) {
                var d = m.min(this.dragRange.x, this.dragRange.y),
                    f = m.max(this.dragRange.x, this.dragRange.y);
                b.strokeStyle = "gray";
                b.lineStyle = 1;
                b.beginPath();
                for (b.moveTo(d, this.height / 2); d <= f; d++) 5 > d % 10 ? b.lineTo(d, m.round(this.height /
                            2)) : b.moveTo(d, m.round(this.height / 2));
                b.stroke()
            }
        };
        l.mousewheel = function(b, d) {
            this.specs.scale += d / 10;
            0.01 > this.specs.scale && (this.specs.scale = 0.01);
            this.repaint()
        };
        l.dblclick = function() {
            this.spectrum.setup();
            this.specs.scale = 1;
            this.repaint()
        };
        l.multitouchmove = function(g, d) {
            2 === d && (!this.dragRange || !this.dragRange.multi ? (this.dragRange = new b.structures.Point(g.p.x, g.p.x), this.dragRange.multi = !0) : (this.spectrum.translate(g.p.x - this.dragRange.x, this.width), this.dragRange.x = g.p.x, this.dragRange.y = g.p.x,
                    this.repaint()))
        };
        l.gesturechange = function(b) {
            this.specs.scale *= b.originalEvent.scale / this.lastPinchScale;
            0.01 > this.specs.scale && (this.specs.scale = 0.01);
            this.lastPinchScale = b.originalEvent.scale;
            this.repaint()
        };
        l.gestureend = function() {
            this.lastPinchScale = 1
        }
    })(ChemDoodle, ChemDoodle.monitor, Math);
(function(b, j, m) {
        b.SeekerCanvas = function(b, d, f, a) {
            b && this.create(b, d, f);
            this.seekType = a
        };
        var l = b.SeekerCanvas.prototype = new b._SpectrumCanvas;
        l.superRepaint = l.innerRepaint;
        l.innerRepaint = function(g) {
            this.superRepaint(g);
            if (this.spectrum && 0 < this.spectrum.data.length && this.p) {
                var d, f;
                if (this.seekType === b.SeekerCanvas.SEEK_POINTER) d = this.p, f = this.spectrum.getInternalCoordinates(d.x, d.y);
                else if (this.seekType === b.SeekerCanvas.SEEK_PLOT || this.seekType === b.SeekerCanvas.SEEK_PEAK) {
                    f = this.seekType === b.SeekerCanvas.SEEK_PLOT ?
                        this.spectrum.getClosestPlotInternalCoordinates(this.p.x) : this.spectrum.getClosestPeakInternalCoordinates(this.p.x);
                    if (!f) return;
                    d = {
                        x: this.spectrum.getTransformedX(f.x, this.specs, this.width, this.spectrum.memory.offsetLeft),
                        y: this.spectrum.getTransformedY(f.y / 100, this.specs, this.height, this.spectrum.memory.offsetBottom, this.spectrum.memory.offsetTop)
                    }
                }
                g.fillStyle = "white";
                g.strokeStyle = this.specs.plots_color;
                g.lineWidth = this.specs.plots_width;
                g.beginPath();
                g.arc(d.x, d.y, 3, 0, 2 * m.PI, !1);
                g.fill();
                g.stroke();
                g.font = j.getFontString(this.specs.text_font_size, this.specs.text_font_families);
                g.textAlign = "left";
                g.textBaseline = "bottom";
                f = "x:" + f.x.toFixed(3) + ", y:" + f.y.toFixed(3);
                var a = d.x + 3,
                    e = g.measureText(f).width;
                a + e > this.width - 2 && (a -= 6 + e);
                d = d.y;
                0 > d - this.specs.text_font_size - 2 && (d += this.specs.text_font_size);
                g.fillRect(a, d - this.specs.text_font_size, e, this.specs.text_font_size);
                g.fillStyle = "black";
                g.fillText(f, a, d)
            }
        };
        l.mouseout = function() {
            this.p = void 0;
            this.repaint()
        };
        l.mousemove = function(b) {
            this.p = {
                x: b.p.x - 2,
                y: b.p.y - 3
            };
            this.repaint()
        };
        l.touchstart = function(b) {
            this.mousemove(b)
        };
        l.touchmove = function(b) {
            this.mousemove(b)
        };
        l.touchend = function(b) {
            this.mouseout(b)
        };
        b.SeekerCanvas.SEEK_POINTER = "pointer";
        b.SeekerCanvas.SEEK_PLOT = "plot";
        b.SeekerCanvas.SEEK_PEAK = "peak"
    })(ChemDoodle, ChemDoodle.extensions, Math);
(function(b, j, m, l, g, d, f, a, e, t, k) {
        b._Canvas3D = function(a, b, d) {
            a && this.create(a, b, d)
        };
        var q = b._Canvas3D.prototype = new b._Canvas;
        q.rotationMatrix = void 0;
        q.translationMatrix = void 0;
        q.lastPoint = void 0;
        q.emptyMessage = "WebGL is Unavailable!";
        q.lastPinchScale = 1;
        q.lastGestureRotate = 0;
        q.afterLoadContent = function() {
            for (var a = new m.Bounds, b = 0, d = this.molecules.length; b < d; b++) a.expand(this.molecules[b].getBounds3D());
            var g = k.dist([a.maxX, a.maxY, a.maxZ], [a.minX, a.minY, a.minZ]) / 2 + 1.5,
                b = 45,
                d = Math.tan(b / 360 * Math.PI) /
                    0.8;
            this.depth = g / d;
            var d = f.max(this.depth - g, 0.1),
                g = this.depth + g,
                j = this.gl.canvas.clientWidth / this.gl.canvas.clientHeight;
            1 > j && (b /= j);
            this.specs.projectionOrthoWidth_3D = 2 * (Math.tan(b / 360 * Math.PI) * this.depth) * j;
            this.specs.projectionPerspectiveVerticalFieldOfView_3D = b;
            this.specs.projectionFrontCulling_3D = d;
            this.specs.projectionBackCulling_3D = g;
            this.specs.projectionWidthHeightRatio_3D = j;
            this.translationMatrix = e.translate(e.identity([]), [0, 0, -this.depth]);
            this.maxDimension = f.max(a.maxX - a.minX, a.maxY - a.minY);
            this.setupScene()
        };
        q.setViewDistance = function(a) {
            this.specs.projectionPerspectiveVerticalFieldOfView_3D = m.clamp(this.specs.projectionPerspectiveVerticalFieldOfView_3D / a, 0.1, 179.9);
            this.specs.projectionOrthoWidth_3D = 2 * (f.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D;
            this.updateScene()
        };
        q.repaint = function() {
            if (this.gl) {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
                this.gl.modelViewMatrix = e.multiply(this.translationMatrix,
                    this.rotationMatrix, []);
                this.gl.rotationMatrix = this.rotationMatrix;
                var a = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix");
                this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix);
                this.gl.fogging.setMode(this.specs.fog_mode_3D);
                for (var b = 0, d = this.molecules.length; b < d; b++) this.molecules[b].render(this.gl, this.specs);
                b = 0;
                for (d = this.shapes.length; b < d; b++) this.shapes[b].render(this.gl, this.specs);
                this.specs.compass_display && (this.gl.uniformMatrix4fv(a, !1, this.compass.projectionMatrix),
                    this.compass.render(this.gl, this.specs), this.gl.setMatrixUniforms(this.gl.modelViewMatrix), this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix));
                this.gl.enable(this.gl.BLEND);
                this.gl.depthMask(!1);
                this.gl.enableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute);
                this.specs.atoms_displayLabels_3D && this.label3D.render(this.gl, this.specs, this.getMolecules());
                this.specs.compass_display && this.specs.compass_displayText_3D && (this.gl.uniformMatrix4fv(a, !1, this.compass.projectionMatrix), this.compass.renderAxis(this.gl),
                    this.gl.setMatrixUniforms(this.gl.modelViewMatrix), this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix));
                this.gl.disableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute);
                this.gl.disable(this.gl.BLEND);
                this.gl.depthMask(!0);
                this.gl.disable(this.gl.DEPTH_TEST);
                this.drawChildExtras && this.drawChildExtras(this.gl);
                this.gl.enable(this.gl.DEPTH_TEST);
                this.gl.flush()
            }
        };
        q.pick = function(a, b) {
            if (this.gl) {
                e.multiply(this.translationMatrix, this.rotationMatrix, this.gl.modelViewMatrix);
                this.gl.rotationMatrix =
                    this.rotationMatrix;
                var d = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix");
                this.gl.uniformMatrix4fv(d, !1, this.gl.projectionMatrix);
                return this.picker.pick(this.gl, this.molecules, this.specs, a, this.height - b)
            }
        };
        q.center = function() {
            a.getElementById(this.id);
            for (var b = new l.Atom, d = 0, e = this.molecules.length; d < e; d++) {
                var f = this.molecules[d];
                b.add3D(f.getCenter3D())
            }
            b.x /= this.molecules.length;
            b.y /= this.molecules.length;
            d = 0;
            for (e = this.molecules.length; d < e; d++) {
                for (var f = this.molecules[d],
                        g = 0, j = f.atoms.length; g < j; g++) f.atoms[g].sub3D(b);
                if (f.chains && f.fromJSON) {
                    g = 0;
                    for (j = f.chains.length; g < j; g++) for (var k = f.chains[g], m = 0, q = k.length; m < q; m++) {
                            var t = k[m];
                            t.cp1.sub3D(b);
                            t.cp2.sub3D(b);
                            t.cp3 && (t.cp3.sub3D(b), t.cp4.sub3D(b), t.cp5.sub3D(b))
                    }
                }
            }
        };
        q.subCreate = function() {
            try {
                var b = a.getElementById(this.id);
                this.gl = b.getContext("webgl");
                this.gl || (this.gl = b.getContext("experimental-webgl"))
            } catch (d) {}
            this.gl ? (this.rotationMatrix = e.identity([]), this.translationMatrix = e.identity([]), this.gl.viewport(0,
                    0, this.width, this.height), this.gl.program = this.gl.createProgram(), this.gl.shader = new g.Shader, this.gl.shader.init(this.gl), this.gl.programLabel = this.gl.createProgram(), this.setupScene()) : this.displayMessage()
        };
        b._Canvas.prototype.displayMessage = function() {
            var b = a.getElementById(this.id);
            b.getContext && (b = b.getContext("2d"), this.specs.backgroundColor && (b.fillStyle = this.specs.backgroundColor, b.fillRect(0, 0, this.width, this.height)), this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline =
                    "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage, this.width / 2, this.height / 2)))
        };
        q.renderText = function(a, b) {
            if (this.gl) {
                var d = {
                    position: [],
                    texCoord: [],
                    translation: []
                };
                this.gl.textImage.pushVertexData(a, b, 0, d);
                this.gl.textMesh.storeData(this.gl, d.position, d.texCoord, d.translation);
                this.gl.enable(this.gl.BLEND);
                this.gl.depthMask(!1);
                this.gl.enableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute);
                this.gl.textImage.useTexture(this.gl);
                this.gl.textMesh.render(this.gl);
                this.gl.disableVertexAttribArray(this.gl.shader.vertexTexCoordAttribute);
                this.gl.disable(this.gl.BLEND);
                this.gl.depthMask(!0)
            }
        };
        q.setupScene = function() {
            if (this.gl) {
                var a = m.getRGB(this.specs.backgroundColor, 1);
                this.gl.clearColor(a[0], a[1], a[2], 1);
                this.gl.clearDepth(1);
                this.gl.enable(this.gl.DEPTH_TEST);
                this.gl.depthFunc(this.gl.LEQUAL);
                this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
                this.specs.cullBackFace_3D && this.gl.enable(this.gl.CULL_FACE);
                this.gl.sphereBuffer = new g.Sphere(1, this.specs.atoms_resolution_3D, this.specs.atoms_resolution_3D);
                this.gl.starBuffer = new g.Star;
                this.gl.cylinderBuffer = new g.Cylinder(1, 1, this.specs.bonds_resolution_3D);
                this.gl.pillBuffer = new g.Pill(this.specs.bonds_pillDiameter_3D / 2, this.specs.bonds_pillHeight_3D, this.specs.bonds_pillLatitudeResolution_3D, this.specs.bonds_pillLongitudeResolution_3D);
                this.gl.lineBuffer = new g.Line;
                this.gl.lineArrowBuffer = new g.LineArrow;
                this.gl.arrowBuffer = new g.Arrow(0.3, this.specs.compass_resolution_3D);
                this.gl.textMesh = new g.TextMesh;
                this.gl.textMesh.init(this.gl);
                this.gl.textImage = new g.TextImage;
                this.gl.textImage.init(this.gl);
                this.gl.textImage.updateFont(this.gl, this.specs.text_font_size, this.specs.text_font_families, this.specs.text_font_bold, this.specs.text_font_italic, this.specs.text_font_stroke_3D);
                this.label3D = new g.Label;
                this.label3D.init(this.gl, this.specs);
                for (var q = 0, z = this.molecules.length; q < z; q++) if (a = this.molecules[q], a.labelMesh instanceof g.TextMesh || (a.labelMesh = new g.TextMesh,
                            a.labelMesh.init(this.gl)), a.unitCellVectors && (a.unitCell = new g.UnitCell(a.unitCellVectors)), a.chains) {
                        a.ribbons = [];
                        a.cartoons = [];
                        a.tubes = [];
                        for (var p = 0, u = a.chains.length; p < u; p++) {
                            var r = a.chains[p],
                                v = 2 < r.length && d[r[2].name] && "#BEA06E" === d[r[2].name].aminoColor;
                            if (0 < r.length && !r[0].lineSegments) {
                                for (var w = 0, A = r.length - 1; w < A; w++) r[w].setup(r[w + 1].cp1, v ? 1 : this.specs.proteins_horizontalResolution);
                                if (!v) {
                                    w = 1;
                                    for (A = r.length - 1; w < A; w++) j.vec3AngleFrom(r[w - 1].D, r[w].D) > f.PI / 2 && (r[w].guidePointsSmall.reverse(),
                                            r[w].guidePointsLarge.reverse(), k.scale(r[w].D, -1))
                                }
                                w = 1;
                                for (A = r.length - 3; w < A; w++) r[w].computeLineSegments(r[w - 1], r[w + 1], r[w + 2], !v, v ? this.specs.nucleics_verticalResolution : this.specs.proteins_verticalResolution);
                                r.pop();
                                r.pop();
                                r.pop();
                                r.shift()
                            }
                            var w = m.hsl2rgb(1 === u ? 0.5 : p / u, 1, 0.5),
                                B = "rgb(" + w[0] + "," + w[1] + "," + w[2] + ")";
                            r.chainColor = B;
                            if (v) w = new g.Tube(r, this.specs.nucleics_tubeThickness, this.specs.nucleics_tubeResolution_3D), w.chainColor = B, a.tubes.push(w);
                            else {
                                v = {
                                    front: new g.Ribbon(r, this.specs.proteins_ribbonThickness, !1),
                                    back: new g.Ribbon(r, -this.specs.proteins_ribbonThickness, !1)
                                };
                                v.front.chainColor = B;
                                v.back.chainColor = B;
                                w = 0;
                                for (A = v.front.segments.length; w < A; w++) v.front.segments[w].chainColor = B;
                                w = 0;
                                for (A = v.back.segments.length; w < A; w++) v.back.segments[w].chainColor = B;
                                a.ribbons.push(v);
                                r = {
                                    front: new g.Ribbon(r, this.specs.proteins_ribbonThickness, !0),
                                    back: new g.Ribbon(r, -this.specs.proteins_ribbonThickness, !0)
                                };
                                r.front.chainColor = B;
                                r.back.chainColor = B;
                                w = 0;
                                for (A = r.front.segments.length; w < A; w++) r.front.segments[w].chainColor =
                                        B;
                                w = 0;
                                for (A = r.back.segments.length; w < A; w++) r.back.segments[w].chainColor = B;
                                w = 0;
                                for (A = r.front.cartoonSegments.length; w < A; w++) r.front.cartoonSegments[w].chainColor = B;
                                w = 0;
                                for (A = r.back.cartoonSegments.length; w < A; w++) r.back.cartoonSegments[w].chainColor = B;
                                a.cartoons.push(r)
                            }
                        }
                    }
                this.label3D.updateVerticesBuffer(this.gl, this.getMolecules(), this.specs);
                if (this instanceof b.MovieCanvas3D && this.frames) {
                    w = 0;
                    for (A = this.frames.length; w < A; w++) {
                        q = this.frames[w];
                        p = 0;
                        for (u = q.mols.length; p < u; p++) a = q.mols[p], a.labelMesh instanceof
                        l.d3.TextMesh || (a.labelMesh = new l.d3.TextMesh, a.labelMesh.init(this.gl));
                        this.label3D.updateVerticesBuffer(this.gl, q.mols, this.specs)
                    }
                }
                this.gl.lighting = new g.Light(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D, this.specs.lightDirection_3D);
                this.gl.lighting.lightScene(this.gl);
                this.gl.material = new g.Material(this.gl);
                this.gl.fogging = new g.Fog(this.gl);
                this.gl.fogging.setTempParameter(this.specs.fog_color_3D || this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D,
                    this.specs.fog_density_3D);
                this.compass = new g.Compass(this.gl, this.specs);
                a = this.width / this.height;
                this.specs.projectionWidthHeightRatio_3D && (a = this.specs.projectionWidthHeightRatio_3D);
                this.gl.projectionMatrix = this.specs.projectionPerspective_3D ? e.perspective(this.specs.projectionPerspectiveVerticalFieldOfView_3D, a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D) : e.ortho(-this.specs.projectionOrthoWidth_3D / 2, this.specs.projectionOrthoWidth_3D / 2, -this.specs.projectionOrthoWidth_3D /
                    2 / a, this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D);
                a = this.gl.getUniformLocation(this.gl.program, "u_projection_matrix");
                this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix);
                var c = this.gl.getUniformLocation(this.gl.program, "u_model_view_matrix"),
                    h = this.gl.getUniformLocation(this.gl.program, "u_normal_matrix");
                this.gl.setMatrixUniforms = function(a) {
                    this.uniformMatrix4fv(c, !1, a);
                    a = t.transpose(e.toInverseMat3(a, []));
                    this.uniformMatrix3fv(h, !1, a)
                };
                p = this.gl.getUniformLocation(this.gl.program, "u_dimension");
                this.gl.uniformMatrix4fv(a, !1, this.gl.projectionMatrix);
                this.gl.uniform2f(p, this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);
                this.picker = new g.Picker;
                this.picker.init(this.gl);
                this.picker.setDimension(this.gl, this.width, this.height)
            }
        };
        q.updateScene = function() {
            this.gl.fogging.setTempParameter(this.specs.fog_color_3D || this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D);
            var a = this.width /
                this.height;
            this.specs.projectionWidthHeightRatio_3D && (a = this.specs.projectionWidthHeightRatio_3D);
            this.gl.projectionMatrix = this.specs.projectionPerspective_3D ? e.perspective(this.specs.projectionPerspectiveVerticalFieldOfView_3D, a, this.specs.projectionFrontCulling_3D, this.specs.projectionBackCulling_3D) : e.ortho(-this.specs.projectionOrthoWidth_3D / 2, this.specs.projectionOrthoWidth_3D / 2, -this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionOrthoWidth_3D / 2 / a, this.specs.projectionFrontCulling_3D,
                this.specs.projectionBackCulling_3D);
            this.repaint()
        };
        q.mousedown = function(a) {
            this.lastPoint = a.p
        };
        q.mouseup = function() {
            this.lastPoint = void 0
        };
        q.rightmousedown = function(a) {
            this.lastPoint = a.p
        };
        q.drag = function(a) {
            if (b.monitor.ALT) {
                var d = new l.Point(a.p.x, a.p.y);
                d.sub(this.lastPoint);
                var g = f.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * f.PI),
                    g = this.depth / (this.height / 2 / g);
                e.translate(this.translationMatrix, [d.x * g, -d.y * g, 0])
            } else g = a.p.x - this.lastPoint.x, d = a.p.y - this.lastPoint.y, g = e.rotate(e.identity([]),
                    g * f.PI / 180, [0, 1, 0]), e.rotate(g, d * f.PI / 180, [1, 0, 0]), this.rotationMatrix = e.multiply(g, this.rotationMatrix);
            this.lastPoint = a.p;
            this.repaint()
        };
        q.mousewheel = function(a, b) {
            var d = this.specs.projectionPerspectiveVerticalFieldOfView_3D + b;
            this.specs.projectionPerspectiveVerticalFieldOfView_3D = 0.1 > d ? 0.1 : 179.9 < d ? 179.9 : d;
            this.specs.projectionOrthoWidth_3D = 2 * (Math.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D;
            this.updateScene()
        };
        q.multitouchmove = function(a, b) {
            if (2 === b) if (this.lastPoint.multi) {
                    var d = new l.Point(a.p.x, a.p.y);
                    d.sub(this.lastPoint);
                    var g = f.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * f.PI),
                        g = this.depth / (this.height / 2 / g);
                    e.translate(this.translationMatrix, [d.x * g, -d.y * g, 0]);
                    this.lastPoint = a.p;
                    this.repaint()
                } else this.lastPoint = a.p, this.lastPoint.multi = !0
        };
        q.gesturechange = function(a) {
            if (0 !== a.originalEvent.scale - this.lastPinchScale) {
                var b = this.specs.projectionPerspectiveVerticalFieldOfView_3D + 30 * -(a.originalEvent.scale /
                    this.lastPinchScale - 1);
                this.specs.projectionPerspectiveVerticalFieldOfView_3D = 0.1 > b ? 0.1 : 179.9 < b ? 179.9 : b;
                this.specs.projectionOrthoWidth_3D = 2 * (Math.tan(this.specs.projectionPerspectiveVerticalFieldOfView_3D / 360 * Math.PI) * this.depth) * this.specs.projectionWidthHeightRatio_3D;
                this.updateScene();
                this.lastPinchScale = a.originalEvent.scale
            }
            this.repaint()
        };
        q.gestureend = function() {
            this.lastPinchScale = 1;
            this.lastGestureRotate = 0
        }
    })(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d3,
    ChemDoodle.RESIDUE, Math, document, ChemDoodle.lib.mat4, ChemDoodle.lib.mat3, ChemDoodle.lib.vec3, window);
(function(b, j, m, l) {
        b.MolGrabberCanvas3D = function(b, d, f) {
            b && this.create(b, d, f);
            d = [];
            d.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
            d.push(b);
            d.push('_query" size\x3d"32" value\x3d"" /\x3e');
            d.push("\x3cbr\x3e\x3cnobr\x3e");
            d.push('\x3cselect id\x3d"');
            d.push(b);
            d.push('_select"\x3e');
            d.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
            d.push("\x3c/select\x3e");
            d.push('\x3cbutton id\x3d"');
            d.push(b);
            d.push('_submit"\x3eShow Molecule\x3c/button\x3e');
            d.push("\x3c/nobr\x3e");
            l.writeln(d.join(""));
            var a = this;
            m("#" + b + "_submit").click(function() {
                    a.search()
                });
            m("#" + b + "_query").keypress(function(b) {
                    13 === b.which && a.search()
                })
        };
        b = b.MolGrabberCanvas3D.prototype = new b._Canvas3D;
        b.setSearchTerm = function(b) {
            m("#" + this.id + "_query").val(b);
            this.search()
        };
        b.search = function() {
            var b = this;
            j.getMoleculeFromDatabase(m("#" + this.id + "_query").val(), {
                    database: m("#" + this.id + "_select").val(),
                    dimension: 3
                }, function(d) {
                    b.loadMolecule(d)
                })
        }
    })(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function(b, j) {
        b.MovieCanvas3D = function(b, g, d) {
            b && this.create(b, g, d);
            this.frames = []
        };
        b.MovieCanvas3D.PLAY_ONCE = 0;
        b.MovieCanvas3D.PLAY_LOOP = 1;
        b.MovieCanvas3D.PLAY_SPRING = 2;
        var m = b.MovieCanvas3D.prototype = new b._Canvas3D;
        m.timeout = 50;
        m.frameNumber = 0;
        m.playMode = 2;
        m.reverse = !1;
        m.startAnimation = b._AnimatorCanvas.prototype.startAnimation;
        m.stopAnimation = b._AnimatorCanvas.prototype.stopAnimation;
        m.isRunning = b._AnimatorCanvas.prototype.isRunning;
        m.dblclick = b.RotatorCanvas.prototype.dblclick;
        m.nextFrame = function() {
            var b =
                this.frames[this.frameNumber];
            this.molecules = b.mols;
            this.shapes = b.shapes;
            2 === this.playMode && this.reverse ? (this.frameNumber--, 0 > this.frameNumber && (this.frameNumber = 1, this.reverse = !1)) : (this.frameNumber++, this.frameNumber >= this.frames.length && (2 === this.playMode ? (this.frameNumber -= 2, this.reverse = !0) : (this.frameNumber = 0, 0 === this.playMode && this.stopAnimation())))
        };
        m.center = function() {
            for (var b = new j.Atom, g = this.frames[0], d = 0, f = g.mols.length; d < f; d++) b.add3D(g.mols[d].getCenter3D());
            b.x /= g.mols.length;
            b.y /=
                g.mols.length;
            g = new j.Atom;
            g.sub3D(b);
            for (var b = 0, a = this.frames.length; b < a; b++) for (var e = this.frames[b], d = 0, f = e.mols.length; d < f; d++) for (var m = e.mols[d], k = 0, q = m.atoms.length; k < q; k++) m.atoms[k].add3D(g)
        };
        m.addFrame = function(b, g) {
            this.frames.push({
                    mols: b,
                    shapes: g
                })
        }
    })(ChemDoodle, ChemDoodle.structures);
(function(b, j, m) {
        var l = [],
            g = [1, 0, 0],
            d = [0, 1, 0],
            f = [0, 0, 1];
        b.RotatorCanvas3D = function(a, b, d) {
            a && this.create(a, b, d)
        };
        var a = b.RotatorCanvas3D.prototype = new b._Canvas3D;
        a.timeout = 33;
        j = j.PI / 15;
        a.xIncrement = j;
        a.yIncrement = j;
        a.zIncrement = j;
        a.startAnimation = b._AnimatorCanvas.prototype.startAnimation;
        a.stopAnimation = b._AnimatorCanvas.prototype.stopAnimation;
        a.isRunning = b._AnimatorCanvas.prototype.isRunning;
        a.dblclick = b.RotatorCanvas.prototype.dblclick;
        a.mousedown = void 0;
        a.rightmousedown = void 0;
        a.drag = void 0;
        a.mousewheel = void 0;
        a.nextFrame = function(a) {
            0 === this.molecules.length && 0 === this.shapes.length ? this.stopAnimation() : (m.identity(l), a /= 1E3, m.rotate(l, this.xIncrement * a, g), m.rotate(l, this.yIncrement * a, d), m.rotate(l, this.zIncrement * a, f), m.multiply(this.rotationMatrix, l))
        }
    })(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function(b) {
        b.TransformCanvas3D = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b.TransformCanvas3D.prototype = new b._Canvas3D
    })(ChemDoodle);
(function(b) {
        b.ViewerCanvas3D = function(b, m, l) {
            b && this.create(b, m, l)
        };
        b = b.ViewerCanvas3D.prototype = new b._Canvas3D;
        b.mousedown = void 0;
        b.rightmousedown = void 0;
        b.drag = void 0;
        b.mousewheel = void 0
    })(ChemDoodle);
(function(b, j, m) {
        function l(b, f, a, e) {
            this.element = b;
            this.x = f;
            this.y = a;
            this.dimension = e
        }
        b.PeriodicTableCanvas = function(b, f) {
            this.padding = 5;
            b && this.create(b, 18 * f + 2 * this.padding, 10 * f + 2 * this.padding);
            this.cellDimension = f ? f : 20;
            this.setupTable();
            this.repaint()
        };
        var g = b.PeriodicTableCanvas.prototype = new b._Canvas;
        g.loadMolecule = void 0;
        g.getMolecule = void 0;
        g.getHoveredElement = function() {
            if (this.hovered) return this.hovered.element
        };
        g.innerRepaint = function(b) {
            for (var f = 0, a = this.cells.length; f < a; f++) this.drawCell(b,
                    this.specs, this.cells[f]);
            this.hovered && this.drawCell(b, this.specs, this.hovered);
            this.selected && this.drawCell(b, this.specs, this.selected)
        };
        g.setupTable = function() {
            this.cells = [];
            for (var d = this.padding, f = this.padding, a = 0, e = 0, g = b.SYMBOLS.length; e < g; e++) {
                18 === a && (a = 0, f += this.cellDimension, d = this.padding);
                var j = b.ELEMENT[b.SYMBOLS[e]];
                if (2 === j.atomicNumber) d += 16 * this.cellDimension, a += 16;
                else if (5 === j.atomicNumber || 13 === j.atomicNumber) d += 10 * this.cellDimension, a += 10;
                if ((58 > j.atomicNumber || 71 < j.atomicNumber &&
                        90 > j.atomicNumber || 103 < j.atomicNumber) && 113 > j.atomicNumber) this.cells.push(new l(j, d, f, this.cellDimension)), d += this.cellDimension, a++
            }
            f += 2 * this.cellDimension;
            d = 3 * this.cellDimension + this.padding;
            for (e = 57; 104 > e; e++) if (j = b.ELEMENT[b.SYMBOLS[e]], 90 === j.atomicNumber && (f += this.cellDimension, d = 3 * this.cellDimension + this.padding), 58 <= j.atomicNumber && 71 >= j.atomicNumber || 90 <= j.atomicNumber && 103 >= j.atomicNumber) this.cells.push(new l(j, d, f, this.cellDimension)), d += this.cellDimension
        };
        g.drawCell = function(b, f, a) {
            var e =
                b.createRadialGradient(a.x + a.dimension / 3, a.y + a.dimension / 3, 1.5 * a.dimension, a.x + a.dimension / 3, a.y + a.dimension / 3, a.dimension / 10);
            e.addColorStop(0, "#000000");
            e.addColorStop(0.7, a.element.jmolColor);
            e.addColorStop(1, "#FFFFFF");
            b.fillStyle = e;
            j.contextRoundRect(b, a.x, a.y, a.dimension, a.dimension, a.dimension / 8);
            if (a === this.hovered || a === this.selected) b.lineWidth = 2, b.strokeStyle = "#c10000", b.stroke(), b.fillStyle = "white";
            b.fill();
            b.font = j.getFontString(f.text_font_size, f.text_font_families);
            b.fillStyle = f.text_color;
            b.textAlign = "center";
            b.textBaseline = "middle";
            b.fillText(a.element.symbol, a.x + a.dimension / 2, a.y + a.dimension / 2)
        };
        g.click = function() {
            this.hovered && (this.selected = this.hovered, this.repaint())
        };
        g.touchstart = function(b) {
            this.mousemove(b)
        };
        g.mousemove = function(b) {
            var f = b.p.x;
            b = b.p.y;
            this.hovered = void 0;
            for (var a = 0, e = this.cells.length; a < e; a++) {
                var g = this.cells[a];
                if (m.isBetween(f, g.x, g.x + g.dimension) && m.isBetween(b, g.y, g.y + g.dimension)) {
                    this.hovered = g;
                    break
                }
            }
            this.repaint()
        };
        g.mouseout = function() {
            this.hovered =
                void 0;
            this.repaint()
        }
    })(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, document);
(function(b, j, m) {
        b.png = {};
        b.png.create = function(b) {
            m.open(j.getElementById(b.id).toDataURL("image/png"))
        }
    })(ChemDoodle.io, document, window);
(function(b, j) {
        b.file = {};
        b.file.content = function(b, l) {
            j.get(b, "", l)
        }
    })(ChemDoodle.io, ChemDoodle.lib.jQuery);
(function(b, j, m, l, g) {
        j.SERVER_URL = "http://ichemlabs.cloud.chemdoodle.com/icl_cdc_v050000/WebHQ";
        j.inRelay = !1;
        j.asynchronous = !0;
        j.INFO = {
            userAgent: navigator.userAgent,
            v_cwc: b.getVersion(),
            v_jQuery: g.version,
            v_jQuery_ui: g.ui ? g.ui.version : "N/A"
        };
        var d = new m.JSONInterpreter;
        j._contactServer = function(b, a, d, l, k) {
            this.inRelay ? alert("Already connecting to the server, please wait for the first request to finish.") : (j.inRelay = !0, g.ajax({
                        dataType: "text",
                        type: "POST",
                        data: JSON.stringify({
                                call: b,
                                content: a,
                                options: d,
                                info: j.INFO
                            }),
                        url: this.SERVER_URL,
                        success: function(a) {
                            j.inRelay = !1;
                            a = JSON.parse(a);
                            a.message && alert(a.message);
                            l && (a.content && !a.stop) && l(a.content);
                            a.stop && k && k()
                        },
                        error: function() {
                            j.inRelay = !1;
                            alert("Call failed. Please try again. If you continue to see this message, please contact iChemLabs customer support.");
                            k && k()
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        async: j.asynchronous
                    }))
        };
        j.authenticate = function(b, a, d, g) {
            this._contactServer("authenticate", {
                    credential: b
                }, a, function(a) {
                    d(a)
                }, g)
        };
        j.calculate = function(b,
            a, e, g) {
            this._contactServer("calculate", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(a)
                }, g)
        };
        j.createLewisDotStructure = function(b, a, e, g) {
            this._contactServer("createLewisDot", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(d.molFrom(a.mol))
                }, g)
        };
        j.generateImage = function(b, a, e, g) {
            this._contactServer("generateImage", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(a.link)
                }, g)
        };
        j.generateIUPACName = function(b, a, e, g) {
            this._contactServer("generateIUPACName", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(a.iupac)
                }, g)
        };
        j.getAd = function(b, a) {
            this._contactServer("getAd", {}, {}, function(a) {
                    b(a.image_url, a.target_url)
                }, a)
        };
        j.getMoleculeFromContent = function(b, a, e, g) {
            this._contactServer("getMoleculeFromContent", {
                    content: b
                }, a, function(a) {
                    for (var b = !1, f = 0, g = a.mol.a.length; f < g; f++) if (0 !== a.mol.a[f].z) {
                            b = !0;
                            break
                        }
                    if (b) {
                        f = 0;
                        for (g = a.mol.a.length; f < g; f++) a.mol.a[f].x /= 20, a.mol.a[f].y /= 20, a.mol.a[f].z /= 20
                    }
                    e(d.molFrom(a.mol))
                }, g)
        };
        j.getMoleculeFromDatabase = function(b, a, e, g) {
            this._contactServer("getMoleculeFromDatabase", {
                    query: b
                }, a, function(b) {
                    if (3 === a.dimension) for (var f = 0, g =
                                b.mol.a.length; f < g; f++) b.mol.a[f].x /= 20, b.mol.a[f].y /= -20, b.mol.a[f].z /= 20;
                    e(d.molFrom(b.mol))
                }, g)
        };
        j.getOptimizedPDBStructure = function(b, a, e, g) {
            this._contactServer("getOptimizedPDBStructure", {
                    id: b
                }, a, function(a) {
                    var b;
                    b = a.mol ? d.molFrom(a.mol) : new l.Molecule;
                    b.chains = d.chainsFrom(a.ribbons);
                    b.fromJSON = !0;
                    e(b)
                }, g)
        };
        j.getZeoliteFromIZA = function(b, a, d, g) {
            this._contactServer("getZeoliteFromIZA", {
                    query: b
                }, a, function(b) {
                    d(ChemDoodle.readCIF(b.cif, a.xSuper, a.ySuper, a.zSuper))
                }, g)
        };
        j.isGraphIsomorphism = function(b,
            a, e, g, j) {
            this._contactServer("isGraphIsomorphism", {
                    arrow: d.molTo(b),
                    target: d.molTo(a)
                }, e, function(a) {
                    g(a.value)
                }, j)
        };
        j.isSubgraphIsomorphism = function(b, a, e, g, j) {
            this._contactServer("isSubgraphIsomorphism", {
                    arrow: d.molTo(b),
                    target: d.molTo(a)
                }, e, function(a) {
                    g(a.value)
                }, j)
        };
        j.kekulize = function(b, a, e, g) {
            this._contactServer("kekulize", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(d.molFrom(a.mol))
                }, g)
        };
        j.optimize = function(b, a, e, g) {
            this._contactServer("optimize", {
                    mol: d.molTo(b)
                }, a, function(g) {
                    g = d.molFrom(g.mol);
                    if (2 ===
                        a.dimension) {
                        for (var j = 0, l = g.atoms.length; j < l; j++) b.atoms[j].x = g.atoms[j].x, b.atoms[j].y = g.atoms[j].y;
                        e()
                    } else if (3 === a.dimension) {
                        j = 0;
                        for (l = g.atoms.length; j < l; j++) g.atoms[j].x /= 20, g.atoms[j].y /= -20, g.atoms[j].z /= 20;
                        e(g)
                    }
                }, g)
        };
        j.readIUPACName = function(b, a, e, g) {
            this._contactServer("readIUPACName", {
                    iupac: b
                }, a, function(a) {
                    e(d.molFrom(a.mol))
                }, g)
        };
        j.readSMILES = function(b, a, e, g) {
            this._contactServer("readSMILES", {
                    smiles: b
                }, a, function(a) {
                    e(d.molFrom(a.mol))
                }, g)
        };
        j.saveFile = function(b, a, e, g) {
            this._contactServer("saveFile", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(a.link)
                }, g)
        };
        j.simulate13CNMR = function(f, a, e, g) {
            a.nucleus = "C";
            a.isotope = 13;
            this._contactServer("simulateNMR", {
                    mol: d.molTo(f)
                }, a, function(a) {
                    e(b.readJCAMP(a.jcamp))
                }, g)
        };
        j.simulate1HNMR = function(f, a, e, g) {
            a.nucleus = "H";
            a.isotope = 1;
            this._contactServer("simulateNMR", {
                    mol: d.molTo(f)
                }, a, function(a) {
                    e(b.readJCAMP(a.jcamp))
                }, g)
        };
        j.simulateMassParentPeak = function(f, a, e, g) {
            this._contactServer("simulateMassParentPeak", {
                    mol: d.molTo(f)
                }, a, function(a) {
                    e(b.readJCAMP(a.jcamp))
                }, g)
        };
        j.writeSMILES = function(b, a, e, g) {
            this._contactServer("writeSMILES", {
                    mol: d.molTo(b)
                }, a, function(a) {
                    e(a.smiles)
                }, g)
        };
        j.version = function(b, a, d) {
            this._contactServer("version", {}, b, function(b) {
                    a(b.value)
                }, d)
        }
    })(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);