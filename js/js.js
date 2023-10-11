// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__cid"
            }],
            "tags": [{
                "function": "__rep",
                "once_per_event": true,
                "vtp_containerId": ["macro", 1],
                "tag_id": 1
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ]
            ]
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        ea = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = ea,
        la = function(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Zk = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function() {},
        pa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        qa = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        ra = Array.isArray,
        sa = function(a, b) {
            if (a && ra(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ta = function(a, b) {
            if (!qa(a) || !qa(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        va = function(a, b) {
            for (var c = new ua, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        ya = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function(a) {
            var b = [];
            if (ra(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ea = function() {
            return new Date(Date.now())
        },
        Fa = function() {
            return Ea().getTime()
        },
        ua = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    ua.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    ua.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ia = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ka = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        La = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Ma = /^\w{1,9}$/,
        Oa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                Ma.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Qa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ta() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Sa, Ua;

    function Va(a) {
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join("")
    }

    function Wa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ua[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Xa = {},
        Ya = function(a, b) {
            Xa[a] = Xa[a] || [];
            Xa[a][b] = !0
        },
        Za = function() {
            delete Xa.GA4_EVENT
        },
        $a = function(a) {
            var b = Xa[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Va(c.join("")).replace(/\.+$/, "")
        };
    var ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var bb, cb = function() {
        if (void 0 === bb) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                bb = a
            } else bb = a
        }
        return bb
    };
    var eb = function(a, b) {
        this.h = b === db ? a : ""
    };
    eb.prototype.toString = function() {
        return this.h + ""
    };
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function gb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function hb(a) {
        return -1 != gb().indexOf(a)
    };

    function ib() {
        return hb("Firefox") || hb("FxiOS")
    }

    function jb() {
        return (hb("Chrome") || hb("CriOS")) && !hb("Edge") || hb("Silk")
    };
    var kb = {},
        lb = function(a, b) {
            this.h = b === kb ? a : ""
        };
    lb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function mb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof lb && b.constructor === lb ? b.h : "type_error:SafeHtml"
    };

    function nb(a) {
        var b = a = ob(a),
            c = cb(),
            d = c ? c.createHTML(b) : b;
        return new lb(d, kb)
    }

    function ob(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var pb = {},
        A = window,
        D = document,
        qb = navigator,
        rb = D.currentScript && D.currentScript.src,
        sb = function(a, b) {
            var c = A[a];
            A[a] = void 0 === c ? b : c;
            return A[a]
        },
        tb = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        ub = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        vb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function wb(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var xb = function(a, b, c, d, e) {
            var f = D.createElement("script");
            wb(f, d, ub);
            f.type = "text/javascript";
            f.async = !0;
            var g, k = ob(a),
                m = cb(),
                n = m ? m.createScriptURL(k) : k;
            g = new eb(n, db);
            f.src = g instanceof eb && g.constructor === eb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, t, u = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
            (p = u ? u.nonce || u.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            tb(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var r = D.getElementsByTagName("script")[0] || D.body || D.head;
                r.parentNode.insertBefore(f, r)
            }
            return f
        },
        yb = function() {
            if (rb) {
                var a = rb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        zb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                k = !1;
            g || (g = D.createElement("iframe"), k = !0);
            wb(g, c, vb);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (k) {
                var m = D.body && D.body.lastChild || D.body ||
                    D.head;
                m.parentNode.insertBefore(g, m)
            }
            tb(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Ab = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror = function() {
                d.onerror = null;
                c && c()
            };
            d.src = a
        },
        Bb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Cb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        F = function(a) {
            A.setTimeout(a, 0)
        },
        Db = function(a, b) {
            return a && b && a.attributes &&
                a.attributes[b] ? a.attributes[b].value : null
        },
        Eb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Fb = function(a) {
            var b = D.createElement("div");
            mb(b, nb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Gb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Hb = function(a) {
            var b;
            try {
                b = qb.sendBeacon && qb.sendBeacon(a)
            } catch (c) {
                Ya("TAGGING", 15)
            }
            b || Ab(a)
        },
        Ib = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Jb = function() {
            var a = A.performance;
            if (a && pa(a.now)) return a.now()
        },
        Kb = function() {
            return A.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Lb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Mb = function(a) {
            if (null == a) return String(a);
            var b = Lb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Nb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ob = function(a) {
            if (!a || "object" != Mb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Nb(a, "constructor") && !Nb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Nb(a, b)
        },
        G = function(a, b) {
            var c = b || ("array" == Mb(a) ? [] : {}),
                d;
            for (d in a)
                if (Nb(a, d)) {
                    var e = a[d];
                    "array" == Mb(e) ? ("array" != Mb(c[d]) && (c[d] = []), c[d] = G(e, c[d])) : Ob(e) ? (Ob(c[d]) || (c[d] = {}), c[d] = G(e, c[d])) : c[d] = e
                }
            return c
        };
    var Pb = function(a) {
        if (void 0 === a || ra(a) || Ob(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var Qb = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            ai: a("consent"),
            Sf: a("convert_case_to"),
            Tf: a("convert_false_to"),
            Uf: a("convert_null_to"),
            Vf: a("convert_true_to"),
            Wf: a("convert_undefined_to"),
            Ik: a("debug_mode_metadata"),
            Na: a("function"),
            We: a("instance_name"),
            Ri: a("live_only"),
            Si: a("malware_disabled"),
            Ti: a("metadata"),
            Wi: a("original_activity_id"),
            Mk: a("original_vendor_template_id"),
            Lk: a("once_on_load"),
            Vi: a("once_per_event"),
            Xg: a("once_per_load"),
            Ok: a("priority_override"),
            Pk: a("respected_consent_types"),
            bh: a("setup_tags"),
            nb: a("tag_id"),
            hh: a("teardown_tags")
        }
    }();
    var mc;
    var nc = [],
        oc = [],
        pc = [],
        qc = [],
        rc = [],
        sc = {},
        tc, uc, wc = function() {
            var a = vc;
            uc = uc || a
        },
        xc, yc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = sc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.mh && d.mh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.lh && (f.vtp_gtmCachedValues = d.lh);
            if (b) {
                if (null == b.name) {
                    var k;
                    a: {
                        var m = b.index;
                        if (null == m) k = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = nc[m];
                                    break;
                                case 1:
                                    n = qc[m];
                                    break;
                                default:
                                    k = "";
                                    break a
                            }
                            var p = n && n[Qb.We];
                            k = p ? String(p) : ""
                        }
                    }
                    b.name = k
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : mc(c, f, b)
        },
        Ac = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = zc(a[e], b, c));
            return d
        },
        zc = function(a, b, c) {
            if (ra(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(zc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = nc[f];
                        if (!g || b.tf(g)) return;
                        c[f] = !0;
                        var k =
                            String(g[Qb.We]);
                        try {
                            var m = Ac(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = yc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            xc && (d = xc.mj(d, m))
                        } catch (x) {
                            b.zh && b.zh(x, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[zc(a[n], b, c)] = zc(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var t = zc(a[q], b, c);
                            uc && (p = p || t === uc.Rd);
                            d.push(t)
                        }
                        return uc && p ? uc.oj(d) : d.join("");
                    case "escape":
                        d = zc(a[1], b, c);
                        if (uc && ra(a[1]) && "macro" ===
                            a[1][0] && uc.Mj(a)) return uc.fk(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Rb[a[u]] && (d = Rb[a[u]](d));
                        return d;
                    case "tag":
                        var r = a[1];
                        if (!qc[r]) throw Error("Unable to resolve tag reference " + r + ".");
                        return d = {
                            rh: a[2],
                            index: r
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Bc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Bc = function(a, b, c) {
            try {
                return tc(Ac(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Ec = function(a) {
            function b(t) {
                for (var u = 0; u < t.length; u++) d[t[u]] = !0
            }
            for (var c = [], d = [], e = Cc(a), f = 0; f < oc.length; f++) {
                var g = oc[f],
                    k = Dc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < qc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Dc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1
            }
            return !0
        },
        Cc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Bc(pc[c], a));
                return b[c]
            }
        };
    var Fc = {
        mj: function(a, b) {
            b[Qb.Sf] && "string" === typeof a && (a = 1 == b[Qb.Sf] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Qb.Uf) && null === a && (a = b[Qb.Uf]);
            b.hasOwnProperty(Qb.Wf) && void 0 === a && (a = b[Qb.Wf]);
            b.hasOwnProperty(Qb.Vf) && !0 === a && (a = b[Qb.Vf]);
            b.hasOwnProperty(Qb.Tf) && !1 === a && (a = b[Qb.Tf]);
            return a
        }
    };
    var bd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function cd(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var ed = function(a) {
            return dd ? D.querySelectorAll(a) : null
        },
        id = function(a, b) {
            if (!dd) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!D.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        jd = !1;
    if (D.querySelectorAll) try {
        var kd = D.querySelectorAll(":root");
        kd && 1 == kd.length && kd[0] == D.documentElement && (jd = !0)
    } catch (a) {}
    var dd = jd;
    var J = function(a) {
        Ya("GTM", a)
    };
    var ld = function(a) {
            return null == a ? "" : h(a) ? Da(String(a)) : "e0"
        },
        nd = function(a) {
            return a.replace(md, "")
        },
        pd = function(a) {
            return od(a.replace(/\s/g, ""))
        },
        od = function(a) {
            return Da(a.replace(qd, "").toLowerCase())
        },
        sd = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return rd.test(a) ? a : "e0"
        },
        ud = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (td.test(c)) return c
            }
            return "e0"
        },
        xd = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== vd.indexOf(c.name) ? wd(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        wd = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (A.crypto && A.crypto.subtle) {
                if (yd.test(a)) return Promise.resolve(a);
                try {
                    var b = zd(a);
                    return A.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) {
                            return String.fromCharCode(e)
                        }).join("");
                        return A.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() {
                        return "e2"
                    })
                } catch (c) {
                    return Promise.resolve("e2")
                }
            } else return Promise.resolve("e1")
        },
        zd = function(a) {
            var b;
            if (A.TextEncoder) b = (new TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 |
                        e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        qd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        td = /^\S+@\S+\.\S+$/,
        rd = /^\+\d{10,15}$/,
        md = /[.~]/g,
        Ad = /^[0-9A-Za-z_-]{43}$/,
        yd = /^[0-9A-Fa-f]{64}$/,
        Bd = {},
        Cd = (Bd.email = "em", Bd.phone_number = "pn", Bd.first_name = "fn", Bd.last_name = "ln", Bd.street = "sa", Bd.city = "ct", Bd.region = "rg", Bd.country = "co", Bd.postal_code = "pc", Bd.error_code = "ec", Bd),
        Dd = {},
        Ed = (Dd.email = "sha256_email_address", Dd.phone_number = "sha256_phone_number", Dd.first_name = "sha256_first_name", Dd.last_name =
            "sha256_last_name", Dd.street = "sha256_street", Dd),
        Fd = function(a, b) {
            function c(u, r, v, w) {
                var y = ld(u);
                "" !== y && (yd.test(y) ? m.push({
                    name: r,
                    value: y,
                    index: w
                }) : m.push({
                    name: r,
                    value: v(y),
                    index: w
                }))
            }

            function d(u, r) {
                var v = u;
                if (h(v) || ra(v)) {
                    v = ra(u) ? u : [u];
                    for (var w = 0; w < v.length; ++w) {
                        var y = ld(v[w]),
                            x = yd.test(y);
                        r && !x && J(89);
                        !r && x && J(88)
                    }
                }
            }

            function e(u, r) {
                var v = u[r];
                d(v, !1);
                var w = Ed[r];
                u.hasOwnProperty(w) && (u.hasOwnProperty(r) && J(90), v = u[w], d(v, !0));
                return v
            }

            function f(u, r, v) {
                var w = e(u, r);
                w = ra(w) ? w : [w];
                for (var y =
                        0; y < w.length; ++y) c(w[y], r, v)
            }

            function g(u, r, v, w) {
                var y = e(u, r);
                c(y, r, v, w)
            }

            function k(u) {
                return function(r) {
                    J(64);
                    return u(r)
                }
            }
            var m = [];
            if ("https:" === A.location.protocol) {
                f(a, "email", ud);
                f(a, "phone_number", sd);
                f(a, "first_name", k(pd));
                f(a, "last_name", k(pd));
                var n = a.home_address || {};
                f(n, "street", k(od));
                f(n, "city", k(od));
                f(n, "postal_code", k(nd));
                f(n, "region", k(od));
                f(n, "country", k(nd));
                var p = a.address || {};
                p = ra(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var t = p[q];
                    g(t, "first_name", pd, q);
                    g(t, "last_name", pd, q);
                    g(t, "street", od, q);
                    g(t, "city", od, q);
                    g(t, "postal_code", nd, q);
                    g(t, "region", od, q);
                    g(t, "country", nd, q)
                }
                xd(m, b)
            } else m.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(m)
        },
        Gd = function(a, b) {
            Fd(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        m = c[f].index,
                        n = Cd[g];
                    n && k && (-1 === vd.indexOf(g) || /^e\d+$/.test(k) || Ad.test(k) || yd.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        Hd = function(a) {
            if (A.Promise) try {
                return new Promise(function(b) {
                    Gd(a,
                        function(c, d) {
                            b({
                                Bf: c,
                                dk: d
                            })
                        })
                })
            } catch (b) {}
        },
        vd = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var N = {
            g: {
                H: "ad_storage",
                O: "analytics_storage",
                Mf: "region",
                Nf: "consent_updated",
                Of: "wait_for_update",
                ei: "app_remove",
                fi: "app_store_refund",
                gi: "app_store_subscription_cancel",
                hi: "app_store_subscription_convert",
                ii: "app_store_subscription_renew",
                Xf: "add_payment_info",
                Yf: "add_shipping_info",
                mc: "add_to_cart",
                nc: "remove_from_cart",
                Zf: "view_cart",
                Kb: "begin_checkout",
                oc: "select_item",
                sb: "view_item_list",
                Lb: "select_promotion",
                tb: "view_promotion",
                Aa: "purchase",
                qc: "refund",
                Ba: "view_item",
                ag: "add_to_wishlist",
                ji: "first_open",
                ki: "first_visit",
                wa: "gtag.config",
                Ca: "gtag.get",
                li: "in_app_purchase",
                sc: "page_view",
                mi: "session_start",
                ue: "user_engagement",
                Mb: "gclid",
                fa: "ads_data_redaction",
                X: "allow_ad_personalization_signals",
                ve: "allow_custom_scripts",
                ni: "allow_display_features",
                od: "allow_enhanced_conversions",
                ub: "allow_google_signals",
                xa: "allow_interest_groups",
                pd: "auid",
                oi: "auto_detection_enabled",
                vb: "aw_remarketing",
                we: "aw_remarketing_only",
                qd: "discount",
                rd: "aw_feed_country",
                sd: "aw_feed_language",
                ba: "items",
                ud: "aw_merchant_id",
                cg: "aw_basket_type",
                vd: "campaign_content",
                wd: "campaign_id",
                xd: "campaign_medium",
                yd: "campaign_name",
                uc: "campaign",
                zd: "campaign_source",
                Ad: "campaign_term",
                fb: "client_id",
                ri: "content_group",
                si: "content_type",
                Da: "conversion_cookie_prefix",
                vc: "conversion_id",
                na: "conversion_linker",
                wc: "conversion_api",
                hb: "cookie_domain",
                Ia: "cookie_expires",
                ib: "cookie_flags",
                xc: "cookie_name",
                xe: "cookie_path",
                Sa: "cookie_prefix",
                Nb: "cookie_update",
                yc: "country",
                la: "currency",
                Bd: "customer_lifetime_value",
                zc: "custom_map",
                ui: "debug_mode",
                Z: "developer_id",
                vi: "disable_merchant_reported_purchases",
                wi: "dc_custom_params",
                xi: "dc_natural_search",
                ye: "dynamic_event_settings",
                yi: "affiliation",
                dg: "checkout_option",
                eg: "checkout_step",
                zi: "coupon",
                ze: "item_list_name",
                Ae: "list_name",
                Ai: "promotions",
                Cd: "shipping",
                fg: "tax",
                Dd: "engagement_time_msec",
                Ac: "enhanced_client_id",
                Bc: "enhanced_conversions",
                gg: "enhanced_conversions_automatic_settings",
                Ed: "estimated_delivery_date",
                Be: "euid_logged_in_state",
                Ob: "event_callback",
                Pb: "event_developer_id_string",
                hg: "event",
                Fd: "event_settings",
                Gd: "event_timeout",
                Bi: "experiments",
                Ce: "firebase_id",
                Hd: "first_party_collection",
                Id: "_x_20",
                wb: "_x_19",
                ig: "fledge",
                jg: "flight_error_code",
                kg: "flight_error_message",
                lg: "gac_gclid",
                Jd: "gac_wbraid",
                mg: "gac_wbraid_multiple_conversions",
                De: "ga_restrict_domain",
                Ee: "ga_temp_client_id",
                ng: "gdpr_applies",
                og: "geo_granularity",
                jb: "value_callback",
                Ta: "value_key",
                Jk: "google_ono",
                Ua: "google_signals",
                Cc: "google_tld",
                Kd: "groups",
                pg: "gsa_experiment_id",
                qg: "iframe_state",
                Ld: "ignore_referrer",
                Fe: "internal_traffic_results",
                Md: "is_legacy_loaded",
                rg: "is_passthrough",
                Ja: "language",
                Ge: "legacy_developer_id_string",
                oa: "linker",
                Rb: "accept_incoming",
                xb: "decorate_forms",
                N: "domains",
                Sb: "url_position",
                sg: "method",
                Dc: "new_customer",
                ug: "non_interaction",
                Ci: "optimize_id",
                He: "page_path",
                La: "page_referrer",
                Tb: "page_title",
                vg: "passengers",
                wg: "phone_conversion_callback",
                Di: "phone_conversion_country_code",
                xg: "phone_conversion_css_class",
                Ei: "phone_conversion_ids",
                yg: "phone_conversion_number",
                zg: "phone_conversion_options",
                Ag: "quantity",
                Ec: "redact_device_info",
                Ie: "redact_enhanced_user_id",
                Fi: "redact_ga_client_id",
                Gi: "redact_user_id",
                Nd: "referral_exclusion_definition",
                yb: "restricted_data_processing",
                Hi: "retoken",
                Bg: "screen_name",
                zb: "screen_resolution",
                Ii: "search_term",
                Ea: "send_page_view",
                Ab: "send_to",
                Fc: "session_duration",
                Od: "session_engaged",
                Je: "session_engaged_time",
                kb: "session_id",
                Pd: "session_number",
                Gc: "delivery_postal_code",
                Dg: "temporary_client_id",
                Ji: "tracking_id",
                Ke: "traffic_type",
                Ma: "transaction_id",
                qa: "transport_url",
                Eg: "trip_type",
                Hc: "update",
                lb: "url_passthrough",
                Le: "_user_agent_architecture",
                Me: "_user_agent_bitness",
                Ne: "_user_agent_full_version_list",
                Oe: "_user_agent_mobile",
                Pe: "_user_agent_model",
                Qe: "_user_agent_platform",
                Re: "_user_agent_platform_version",
                Fg: "_user_agent_wait",
                Se: "_user_agent_wow64",
                ma: "user_data",
                Gg: "user_data_auto_latency",
                Hg: "user_data_auto_meta",
                Ig: "user_data_auto_multi",
                Jg: "user_data_auto_selectors",
                Kg: "user_data_auto_status",
                Lg: "user_data_mode",
                Te: "user_data_settings",
                ra: "user_id",
                Fa: "user_properties",
                Mg: "us_privacy_string",
                ja: "value",
                Qd: "wbraid",
                Ng: "wbraid_multiple_conversions",
                Tg: "_host_name",
                Ug: "_in_page_command",
                Xe: "_is_linker_valid",
                Vg: "_is_passthrough_cid",
                Wg: "non_personalized_ads",
                Mc: "_sst_parameters",
                Ra: "conversion_label",
                Ka: "page_location",
                Qb: "global_developer_id_string",
                Cg: "tc_privacy_string"
            }
        },
        Id = {},
        Jd = Object.freeze((Id[N.g.X] = 1, Id[N.g.od] = 1, Id[N.g.ub] = 1, Id[N.g.ba] = 1, Id[N.g.hb] = 1, Id[N.g.Ia] = 1, Id[N.g.ib] = 1, Id[N.g.xc] = 1, Id[N.g.xe] = 1, Id[N.g.Sa] = 1, Id[N.g.Nb] =
            1, Id[N.g.zc] = 1, Id[N.g.Z] = 1, Id[N.g.ye] = 1, Id[N.g.Ob] = 1, Id[N.g.Fd] = 1, Id[N.g.Gd] = 1, Id[N.g.Hd] = 1, Id[N.g.De] = 1, Id[N.g.Ua] = 1, Id[N.g.Cc] = 1, Id[N.g.Kd] = 1, Id[N.g.Fe] = 1, Id[N.g.Md] = 1, Id[N.g.oa] = 1, Id[N.g.Ie] = 1, Id[N.g.Nd] = 1, Id[N.g.yb] = 1, Id[N.g.Ea] = 1, Id[N.g.Ab] = 1, Id[N.g.Fc] = 1, Id[N.g.Je] = 1, Id[N.g.Gc] = 1, Id[N.g.qa] = 1, Id[N.g.Hc] = 1, Id[N.g.Te] = 1, Id[N.g.Fa] = 1, Id[N.g.Mc] = 1, Id));
    Object.freeze([N.g.Ka, N.g.La, N.g.Tb, N.g.Ja, N.g.Bg, N.g.ra, N.g.Ce, N.g.ri]);
    var Kd = {},
        Ld = Object.freeze((Kd[N.g.ei] = 1, Kd[N.g.fi] = 1, Kd[N.g.gi] = 1, Kd[N.g.hi] = 1, Kd[N.g.ii] = 1, Kd[N.g.ji] = 1, Kd[N.g.ki] = 1, Kd[N.g.li] = 1, Kd[N.g.mi] = 1, Kd[N.g.ue] = 1, Kd)),
        Md = {},
        Nd = Object.freeze((Md[N.g.Xf] = 1, Md[N.g.Yf] = 1, Md[N.g.mc] = 1, Md[N.g.nc] = 1, Md[N.g.Zf] = 1, Md[N.g.Kb] = 1, Md[N.g.oc] = 1, Md[N.g.sb] = 1, Md[N.g.Lb] = 1, Md[N.g.tb] = 1, Md[N.g.Aa] = 1, Md[N.g.qc] = 1, Md[N.g.Ba] = 1, Md[N.g.ag] = 1, Md)),
        Od = Object.freeze([N.g.X, N.g.ub, N.g.Nb]),
        Pd = Object.freeze([].concat(Od)),
        Qd = Object.freeze([N.g.Ia, N.g.Gd, N.g.Fc, N.g.Je, N.g.Dd]),
        Rd = Object.freeze([].concat(Qd)),
        Td = {},
        Ud = (Td[N.g.H] = "1", Td[N.g.O] = "2", Td),
        Vd = {},
        Wd = Object.freeze((Vd[N.g.X] = 1, Vd[N.g.od] = 1, Vd[N.g.xa] = 1, Vd[N.g.vb] = 1, Vd[N.g.we] = 1, Vd[N.g.qd] = 1, Vd[N.g.rd] = 1, Vd[N.g.sd] = 1, Vd[N.g.ba] = 1, Vd[N.g.ud] = 1, Vd[N.g.Da] = 1, Vd[N.g.na] = 1, Vd[N.g.hb] = 1, Vd[N.g.Ia] = 1, Vd[N.g.ib] = 1, Vd[N.g.Sa] = 1, Vd[N.g.la] = 1, Vd[N.g.Bd] = 1, Vd[N.g.Z] = 1, Vd[N.g.vi] = 1, Vd[N.g.Bc] = 1, Vd[N.g.Ed] = 1, Vd[N.g.Ce] = 1, Vd[N.g.Hd] = 1, Vd[N.g.Md] = 1, Vd[N.g.Ja] = 1, Vd[N.g.Dc] = 1, Vd[N.g.Ka] = 1, Vd[N.g.La] = 1, Vd[N.g.wg] = 1, Vd[N.g.xg] = 1, Vd[N.g.yg] =
            1, Vd[N.g.zg] = 1, Vd[N.g.yb] = 1, Vd[N.g.Ea] = 1, Vd[N.g.Ab] = 1, Vd[N.g.Gc] = 1, Vd[N.g.Ma] = 1, Vd[N.g.qa] = 1, Vd[N.g.Hc] = 1, Vd[N.g.lb] = 1, Vd[N.g.ma] = 1, Vd[N.g.ra] = 1, Vd[N.g.ja] = 1, Vd));
    Object.freeze(N.g);
    var Xd = {},
        Yd = A.google_tag_manager = A.google_tag_manager || {},
        Zd = Math.random();
    Xd.Wb = "31p0";
    Xd.Lc = Number("0") || 0;
    Xd.ca = "dataLayer";
    Xd.ci = "ChAIgJXjngYQppagg5qE8ud4EiUAVM2xmCmOa9CHfmUl+zzpGdNLRkV2WkUDvP/HBx9Zot/QmuKdGgJblw\x3d\x3d";
    var $d = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        ae = {
            __paused: !0,
            __tg: !0
        },
        be;
    for (be in $d) $d.hasOwnProperty(be) && (ae[be] = !0);
    var ce = Ba(""),
        de, ee = !1;
    ee = !0;
    de = ee;
    var fe, ge = !1;
    fe = ge;
    var he, ie = !1;
    he = ie;
    var je, ke = !1;
    je = ke;
    Xd.nd = "www.googletagmanager.com";
    var le = "" + Xd.nd + (de ? "/gtag/js" : "/gtm.js"),
        me = null,
        ne = null,
        oe = {},
        pe = {},
        qe = {},
        re = function() {
            var a = Yd.sequence || 1;
            Yd.sequence = a + 1;
            return a
        };
    Xd.bi = "";
    var se = "";
    Xd.Vd = se;
    var te = new ua,
        ue = {},
        ve = {},
        ye = {
            name: Xd.ca,
            set: function(a, b) {
                G(La(a, b), ue);
                we()
            },
            get: function(a) {
                return xe(a, 2)
            },
            reset: function() {
                te = new ua;
                ue = {};
                we()
            }
        },
        xe = function(a, b) {
            return 2 != b ? te.get(a) : ze(a)
        },
        ze = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = ue, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ae = function(a, b) {
            ve.hasOwnProperty(a) || (te.set(a, b), G(La(a, b), ue), we())
        },
        we = function(a) {
            l(ve, function(b, c) {
                te.set(b, c);
                G(La(b), ue);
                G(La(b,
                    c), ue);
                a && delete ve[b]
            })
        },
        Be = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? ze(a) : te.get(a);
            "array" === Mb(d) || "object" === Mb(d) ? c = G(d) : c = d;
            return c
        };
    var Ce, De = !1,
        Ee = function(a) {
            if (!De) {
                De = !0;
                Ce = Ce || {}
            }
            return Ce[a]
        };
    var Fe = function() {
            var a = A.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        Ge = function(a) {
            if (D.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0;
            var c = A.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var k = g.indexOf("opacity(");
                    0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = A.getComputedStyle(d, null))
            }
            return !1
        };
    var Pe = /:[0-9]+$/,
        Qe = /^\d+\.fls\.doubleclick\.net$/,
        Te = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        We = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = Ue(a.protocol) || Ue(A.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : A.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || A.location.hostname).replace(Pe, "").toLowerCase());
            return Ve(a, b, c, d, e)
        },
        Ve = function(a, b, c, d, e) {
            var f, g = Ue(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Xe(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Pe, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || Ya("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Te(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        Ue = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        Xe = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        Ye = function(a) {
            var b = D.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ya("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(Pe, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Ze = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Ye(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        $e = function(a) {
            var b = Ye(A.location.href),
                c = We(b, "host", !1);
            if (c && c.match(Qe)) {
                var d = We(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var af = {};
    var cf = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        Ya: a.Ya,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = bf(d));
                c && (e.isVisible = !Ge(d));
                return e
            }
        },
        ff = function(a) {
            if (0 != a.length) {
                var b;
                b = df(a, function(c) {
                    return !ef.test(c.Ya)
                });
                b = df(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = df(b, function(c) {
                    return !Ge(c.element)
                });
                return b[0]
            }
        },
        df = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        bf = function(a) {
            var b;
            if (a === D.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = bf(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        gf = !0,
        hf = !1;
    af.Yh = "true";
    var jf = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        kf = /@(gmail|googlemail)\./i,
        ef = /support|noreply/i,
        lf = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        mf = ["BR"],
        nf = {},
        of = function(a) {
            a = a || {
                Uc: !0,
                Vc: !0
            };
            a.pb = a.pb || {
                email: !0,
                phone: !0,
                address: !0
            };
            var b, c = a,
                d = !!c.Uc + "." + !!c.Vc;
            c && c.be && c.be.length && (d += "." + c.be.join("."));
            c && c.pb && (d += "." + c.pb.email + "." + c.pb.phone + "." + c.pb.address);
            b = d;
            var e = nf[b];
            if (e && 200 > Fa() - e.timestamp) return e.result;
            var f;
            var g = [],
                k = D.body;
            if (k) {
                for (var m = k.querySelectorAll("*"),
                        n = 0; n < m.length && 1E4 > n; n++) {
                    var p = m[n];
                    if (!(0 <= lf.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, t = 0; t < p.childElementCount && 1E4 > t; t++)
                            if (!(0 <= mf.indexOf(p.children[t].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < m.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var u = f,
                r = u.status,
                v = [],
                w;
            if (a.pb && a.pb.email) {
                for (var y = u.elements, x = [], B = 0; B < y.length; B++) {
                    var z = y[B],
                        C = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() && z.value && (C = z.value);
                    if (C) {
                        var H = C.match(jf);
                        if (H) {
                            var I = H[0],
                                E;
                            if (A.location) {
                                var K = Ve(A.location, "host", !0);
                                E = 0 <= I.toLowerCase().indexOf(K)
                            } else E = !1;
                            E || x.push({
                                element: z,
                                Ya: I
                            })
                        }
                    }
                }
                var M = a && a.be;
                if (M && 0 !== M.length) {
                    for (var T = [], fa = 0; fa < x.length; fa++) {
                        for (var L = !0, O = 0; O < M.length; O++) {
                            var da = M[O];
                            if (da && id(x[fa].element, da)) {
                                L = !1;
                                break
                            }
                        }
                        L && T.push(x[fa])
                    }
                    v = T
                } else v = x;
                w = ff(v);
                10 < x.length && (r = "3")
            }
            var Y = [];
            !a.vk && w && (v = [w]);
            for (var U = 0; U < v.length; U++) Y.push(cf(v[U], a.Uc, a.Vc));
            var wa = {
                elements: Y.slice(0, 10),
                ek: cf(w, a.Uc,
                    a.Vc),
                status: r
            };
            nf[b] = {
                timestamp: Fa(),
                result: wa
            };
            return wa
        },
        pf = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Ya.length + ":" + kf.test(a.Ya)
        };
    var qf = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (var g = e.split(","), k = 0; k < g.length; k++) {
                    var m = g[k].trim();
                    if (m) {
                        if (0 === m.indexOf("dataLayer.")) f = xe(m.substring(10));
                        else {
                            var n = m.split(".");
                            f = A[n.shift()];
                            for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                        }
                        if (void 0 !== f) break
                    }
                }
            } else if ("css_selector" === d && dd) {
                var q = ed(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var t = 0; t < q.length && t < ("email" === b || "phone_number" === b ? 5 : 1); t++) f.push(Eb(q[t]) ||
                        Da(q[t].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        rf = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = qf(b, "email", a.email) || c;
                c = qf(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = qf(f, "first_name", d[e].first_name) || c;
                    c = qf(f, "last_name", d[e].last_name) || c;
                    c = qf(f, "street", d[e].street) || c;
                    c = qf(f, "city", d[e].city) || c;
                    c = qf(f, "region", d[e].region) || c;
                    c = qf(f, "country", d[e].country) || c;
                    c = qf(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        sf = function(a) {
            return a.B[N.g.Te]
        },
        tf = function(a) {
            var b = P(a, N.g.Bc) || {},
                c = !1;
            l(b, function(d, e) {
                var f = e.enhanced_conversions_mode;
                if ("automatic" === f || "manual" === f) c = !0
            });
            return c
        },
        uf = function(a) {
            if (!Ob(a)) return !1;
            var b = a.mode;
            return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
        },
        vf = function(a) {
            if (a) {
                if ("selectors" === a.mode || Ob(a.selectors)) return rf(a.selectors);
                if ("auto_detect" === a.mode || Ob(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = of ({
                                Uc: !1,
                                Vc: !1,
                                be: c.exclude_element_selectors,
                                pb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    address: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Ya;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var wf = function() {
        var a = qb && qb.userAgent || "";
        if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if ("" === b) return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (void 0 === c[e]) return !0;
            if (d[e] != c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };
    var xf = function(a) {
            var b = a && a[N.g.gg];
            return b && b[N.g.oi]
        },
        yf = function() {
            return -1 !== qb.userAgent.toLowerCase().indexOf("firefox")
        },
        zf = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) :
                        b.push("")
                }
                return b.join(",")
            }
        };
    var Af = {
        ff: "IN",
        lk: "IN-MH"
    };
    var Bf = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Cf = function(a) {
        Cf[" "](a);
        return a
    };
    Cf[" "] = function() {};
    var Ef = function() {
        var a = Df,
            b = "rf";
        if (a.rf && a.hasOwnProperty(b)) return a.rf;
        var c = new a;
        return a.rf = c
    };
    var Df = function() {
        var a = {};
        this.h = function() {
            var b = Bf.h,
                c = Bf.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Bf.h] = !0
        }
    };
    var Ff = [];

    function Gf() {
        var a = sb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Hf,
            update: If,
            addListener: Jf,
            notifyListeners: Kf,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Hf(a, b, c, d, e, f) {
        var g = Gf();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    t = {
                        region: p,
                        initial: "granted" === b,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) k[a] = t;
                q && A.setTimeout(function() {
                    k[a] === t && t.quiet && (t.quiet = !1, Lf(a), Kf(), Ya("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function If(a, b) {
        var c = Gf();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Mf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Mf(c, a);
            f.quiet ? (f.quiet = !1, Lf(a)) : g !== d && Lf(a)
        }
    }

    function Jf(a, b) {
        Ff.push({
            ef: a,
            wj: b
        })
    }

    function Lf(a) {
        for (var b = 0; b < Ff.length; ++b) {
            var c = Ff[b];
            ra(c.ef) && -1 !== c.ef.indexOf(a) && (c.Fh = !0)
        }
    }

    function Kf(a, b) {
        for (var c = 0; c < Ff.length; ++c) {
            var d = Ff[c];
            if (d.Fh) {
                d.Fh = !1;
                try {
                    d.wj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function Mf(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var Nf = function(a) {
            var b = Gf();
            b.accessedAny = !0;
            return Mf(b, a)
        },
        Of = function(a) {
            var b = Gf();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        Pf = function(a) {
            var b = Gf();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Qf = function() {
            if (!Ef().h()) return !1;
            var a = Gf();
            a.accessedAny = !0;
            return a.active
        },
        Rf = function() {
            var a = Gf();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Sf = function(a, b) {
            Gf().addListener(a, b)
        },
        Tf = function(a, b) {
            Gf().notifyListeners(a, b)
        },
        Uf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Pf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Sf(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Vf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Nf(k) || e[k] || (f.push(k), e[k] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && Sf(d, function(f) {
                var g = c();
                0 < g.length && (f.ef = g, a(f))
            })
        };

    function Wf() {}

    function Xf() {};

    function Yf(a) {
        for (var b = [], c = 0; c < Zf.length; c++) {
            var d = a(Zf[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Zf = [N.g.H, N.g.O],
        $f = function(a) {
            var b = a[N.g.Mf];
            b && J(40);
            var c = a[N.g.Of];
            c && J(41);
            for (var d = ra(b) ? b : [b], e = {
                    hc: 0
                }; e.hc < d.length; e = {
                    hc: e.hc
                }, ++e.hc) l(a, function(f) {
                return function(g, k) {
                    if (g !== N.g.Mf && g !== N.g.Of) {
                        var m = d[f.hc],
                            n = Af.ff,
                            p = Af.lk;
                        Gf().set(g, k, m, n, p, c)
                    }
                }
            }(e))
        },
        ag = function(a, b) {
            l(a, function(c, d) {
                Gf().update(c, d)
            });
            Tf(b.eventId, b.priorityId)
        },
        bg = function(a) {
            var b = Nf(a);
            return void 0 != b ? b : !0
        },
        cg = function() {
            return "G1" + Yf(Nf)
        },
        dg = function(a, b) {
            Vf(a, b)
        },
        eg = function(a, b) {
            Uf(a, b)
        };
    var fg = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var gg = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var hg = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        ig = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function jg(a) {
        return "null" !== a.origin
    };
    var mg = function(a, b, c, d) {
            return kg(d) ? gg(a, String(b || lg()), c) : []
        },
        pg = function(a, b, c, d, e) {
            if (kg(e)) {
                var f = ng(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = og(f, function(g) {
                        return g.ae
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = og(f, function(g) {
                        return g.Zc
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function qg(a, b, c, d) {
        var e = lg(),
            f = window;
        jg(f) && (f.document.cookie = a);
        var g = lg();
        return e != g || void 0 != c && 0 <= mg(b, g, !1, d).indexOf(c)
    }
    var ug = function(a, b, c) {
            function d(u, r, v) {
                if (null == v) return delete g[r], u;
                g[r] = v;
                return u + "; " + r + "=" + v
            }

            function e(u, r) {
                if (null == r) return delete g[r], u;
                g[r] = !0;
                return u + "; " + r
            }
            if (!kg(c.Xa)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = rg(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.Wk);
            f = d(f, "samesite",
                c.Xk);
            c.Yk && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = sg(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        t = d(f, "domain", q);
                    t = e(t, c.flags);
                    if (!tg(q, c.path) && qg(t, a, b, c.Xa)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return tg(m, c.path) ? 1 : qg(f, a, b, c.Xa) ? 0 : 1
        },
        vg = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return ug(a, b, c)
        };

    function og(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function ng(a, b, c) {
        for (var d = [], e = mg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    ae: 1 * m[0] || 1,
                    Zc: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var rg = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        wg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        xg = /(^|\.)doubleclick\.net$/i,
        tg = function(a, b) {
            return xg.test(window.document.location.hostname) || "/" === b && wg.test(a)
        },
        lg = function() {
            return jg(window) ? window.document.cookie : ""
        },
        sg = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            xg.test(e) || wg.test(e) || a.push("none");
            return a
        },
        kg = function(a) {
            if (!Ef().h() || !a || !Qf()) return !0;
            if (!Pf(a)) return !1;
            var b = Nf(a);
            return null == b ? !0 : !!b
        };
    var yg = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ fg(a) & 2147483647) : String(b)
        },
        zg = function(a) {
            return [yg(a), Math.round(Fa() / 1E3)].join(".")
        },
        Jg = function(a, b, c, d, e) {
            var f = Hg(b);
            return pg(a, f, Ig(c), d, e)
        },
        Kg = function(a, b, c, d) {
            var e = "" + Hg(c),
                f = Ig(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Hg = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Ig = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function Lg(a, b, c, d) {
        var e, f = Number(null != a.qb ? a.qb : void 0);
        0 !== f && (e = new Date((b || Fa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Xa: d
        }
    };
    var Mg;
    var Qg = function() {
            var a = Ng,
                b = Og,
                c = Pg(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Bb(D, "mousedown", d);
                Bb(D, "keyup", d);
                Bb(D, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Rg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Pg().decorators.push(f)
        },
        Sg = function(a, b, c) {
            for (var d = Pg().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    k;
                if (k = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== D.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    k = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        k = !0;
                        break a
                    }
                    k = !1
                }
                if (k) {
                    var t = g.placement;
                    void 0 == t && (t = g.fragment ? 2 : 1);
                    t === b && Ia(e, g.callback())
                }
            }
            return e
        };

    function Pg() {
        var a = sb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Tg = /(.*?)\*(.*?)\*(.*)/,
        Ug = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Vg = /^(?:www\.|m\.|amp\.)+/,
        Wg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Xg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Zg = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Va(String(d))))
            }
        var e = b.join("*");
        return ["1", Yg(e), e].join("*")
    };

    function Yg(a, b) {
        var c = [qb.userAgent, (new Date).getTimezoneOffset(), qb.userLanguage || qb.language, Math.floor(Fa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Mg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Mg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Mg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function $g() {
        return function(a) {
            var b = Ye(A.location.href),
                c = b.search.replace("?", ""),
                d = Te(c, "_gl", !0) || "";
            a.query = ah(d) || {};
            var e = We(b, "fragment").match(Xg("_gl"));
            a.fragment = ah(e && e[3] || "") || {}
        }
    }

    function bh(a, b) {
        var c = Xg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var ch = function(a, b) {
            b || (b = "_gl");
            var c = Wg.exec(a);
            if (!c) return "";
            var d = c[1],
                e = bh(b, (c[2] || "").slice(1)),
                f = bh(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        dh = function(a) {
            var b = $g(),
                c = Pg();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ia(d, e.query), a && Ia(d, e.fragment));
            return d
        },
        ah = function(a) {
            try {
                var b = eh(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Wa(d[e + 1]);
                        c[f] = g
                    }
                    Ya("TAGGING", 6);
                    return c
                }
            } catch (k) {
                Ya("TAGGING",
                    8)
            }
        };

    function eh(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Tg.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Yg(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Ya("TAGGING", 7)
            }
        }
    }

    function fh(a, b, c, d) {
        function e(p) {
            p = bh(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Wg.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
        return "" + g + k + m
    }

    function gh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Sg(b, 1, c),
            e = Sg(b, 2, c),
            f = Sg(b, 3, c);
        if (Ja(d)) {
            var g = Zg(d);
            c ? hh("_gl", g, a) : ih("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var k = Zg(e);
            ih("_gl", k, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        ih(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        hh(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && fh(n, p, q)
            }
    }

    function ih(a, b, c, d) {
        if (c.href) {
            var e = fh(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function hh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = D.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = fh(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    function Ng(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || gh(e, e.hostname)
            }
        } catch (g) {}
    }

    function Og(a) {
        try {
            if (a.action) {
                var b = We(Ye(a.action), "host");
                gh(a, b)
            }
        } catch (c) {}
    }
    var jh = function(a, b, c, d) {
            Qg();
            Rg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        kh = function(a, b) {
            Qg();
            Rg(a, [Ve(A.location, "host", !0)], b, !0, !0)
        },
        lh = function() {
            var a = D.location.hostname,
                b = Ug.exec(D.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var k = a.replace(Vg, ""),
                m = e.replace(Vg, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length,
                    k.length) === p
            }
            return n
        },
        mh = function(a, b) {
            return !1 === a ? !1 : a || b || lh()
        };
    var nh = {};
    var oh = ["1"],
        ph = {},
        qh = {},
        uh = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = rh(a.prefix);
            if (!ph[c] && !sh(c, a.path, a.domain)) {
                if (void 0 == nh.enable_auid_fl_iframe ? 0 : nh.enable_auid_fl_iframe) {
                    var d = $e("auiddc");
                    if (d) {
                        Ya("TAGGING", 17);
                        ph[c] = d;
                        return
                    }
                }
                if (b) {
                    var e = rh(a.prefix),
                        f = zg();
                    if (0 === th(e, f, a)) {
                        var g = sb("google_tag_data", {});
                        g._gcl_au || (g._gcl_au = f)
                    }
                    sh(c, a.path, a.domain)
                }
            }
        };

    function th(a, b, c, d) {
        var e = Kg(b, "1", c.domain, c.path),
            f = Lg(c, d);
        f.Xa = "ad_storage";
        return vg(a, e, f)
    }

    function sh(a, b, c) {
        var d = Jg(a, b, c, oh, "ad_storage");
        if (!d) return !1;
        vh(a, d);
        return !0
    }

    function vh(a, b) {
        var c = b.split(".");
        5 === c.length ? (ph[a] = c.slice(0, 2).join("."), qh[a] = {
            id: c.slice(2, 4).join("."),
            xh: Number(c[4]) || 0
        }) : 3 === c.length ? qh[a] = {
            id: c.slice(0, 2).join("."),
            xh: Number(c[2]) || 0
        } : ph[a] = b
    }

    function rh(a) {
        return (a || "_gcl") + "_au"
    }

    function wh(a) {
        Qf() || a();
        Uf(function() {
            Nf("ad_storage") && a();
            Vf(a, "ad_storage")
        }, ["ad_storage"])
    }

    function xh(a) {
        var b = dh(!0),
            c = rh(a.prefix);
        wh(function() {
            var d = b[c];
            if (d) {
                vh(c, d);
                var e = 1E3 * Number(ph[c].split(".")[1]);
                if (e) {
                    Ya("TAGGING", 16);
                    var f = Lg(a, e);
                    f.Xa = "ad_storage";
                    var g = Kg(d, "1", a.domain, a.path);
                    vg(c, g, f)
                }
            }
        })
    }

    function yh(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = rh(d.prefix),
                g = {},
                k = Jg(f, d.path, d.domain, oh, "ad_storage");
            if (!k) return g;
            g[f] = k;
            return g
        };
        wh(function() {
            jh(e, a, b, c)
        })
    };
    var zh = [];
    zh[7] = !0;
    zh[9] = !0;
    zh[27] = !0;
    zh[11] = !0;
    zh[13] = !0;
    zh[15] = !0;
    zh[25] = !0;
    zh[36] = !0;
    zh[38] = !0;
    zh[43] = !0;
    a: {
        for (var Ah, Bh, Ch = 0; Ah === Bh;)
            if (Ah = Math.floor(2 * Math.random()), Bh = Math.floor(2 * Math.random()), Ch++, 20 < Ch) break a;Ah ? zh[46] = !0 : zh[47] = !0
    }
    zh[57] = !0;
    zh[60] = !0;
    zh[65] = !0;
    zh[68] = !0;
    zh[72] = !0;
    var Q = function(a) {
        return !!zh[a]
    };
    var Dh = function() {
        Yd.dedupe_gclid || (Yd.dedupe_gclid = "" + zg());
        return Yd.dedupe_gclid
    };
    var Eh = function() {
        var a = !1;
        return a
    };
    var R = {
            D: "AW-605966560",
            eb: ""
        },
        Fh = {
            Dh: "AW-605966560",
            Eh: "AW-605966560"
        };
    R.Ye = Ba("");
    var Gh = function() {
            return Fh.Dh ? Fh.Dh.split("|") : [R.D]
        },
        Hh = function() {
            return Fh.Eh ? Fh.Eh.split("|") : []
        },
        Ih = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        Kh = function() {
            for (var a = Jh(), b = Gh(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                !d || qa(d) ? a.container[b[c]] = {
                    state: 2
                } : d.state = 2
            }
            for (var e = Hh(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && J(93);
                g ? g.state = 2 : a.destination[e[f]] = {
                    state: 2
                }
            }
            a.canonical[R.eb] = 2
        },
        Lh = function(a) {
            return !!Jh().container[a]
        },
        Mh = function() {
            var a =
                Jh().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if (qa(c)) {
                        if (1 === c) return !0
                    } else if (1 === c.state) return !0
                }
            return !1
        },
        Nh = function() {
            var a = {};
            l(Jh().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };

    function Jh() {
        var a = Yd.tidr;
        a || (a = new Ih, Yd.tidr = a);
        return a
    }
    var Oh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            GT: "t",
            HA: "h",
            MC: "m",
            GTM: "g",
            OPT: "o"
        },
        Ph = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        Qh = function(a) {
            var b = R.D.split("-"),
                c = b[0].toUpperCase();
            if (Q(45)) {
                var d = {};
                d.pj = R.D;
                d.qk = Xd.Lc;
                d.tk = Xd.Wb;
                d.Vj = R.Ye ? 2 : 1;
                de ? (d.me = Ph[c], d.me || (d.me = 0)) : d.me = je ? 13 : 10;
                he ? d.xf = 1 : Eh() ? d.xf = 2 : d.xf = 3;
                var e;
                var f = d.me,
                    g = d.xf;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + cd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var k = d.Qk,
                    m = 4 + e + (k ? "" + cd(2,
                        1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k] : ""),
                    n, p = d.tk;
                n = p && bd.test(p) ? "" + cd(3, 2) + p : "";
                var q, t = d.qk;
                q = t ? "" + cd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [t] : "";
                var u;
                var r = d.pj;
                if (r && a) {
                    var v = r.split("-"),
                        w = v[0].toUpperCase();
                    if ("GTM" !== w && "OPT" !== w) u = "";
                    else {
                        var y = v[1];
                        u = "" + cd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + y.length] + (d.Vj || 0) + y
                    }
                } else u = "";
                return m + n + q + u
            }
            var x = Oh[c] || "i",
                B = a && "GTM" === c ? b[1] : "OPT" ===
                c ? b[1] : "",
                z = "w";
            de && (z = Eh() ? "s" : "o");
            fe ? ("w" === z && (z = "x"), "o" === z && (z = "q")) : he ? ("w" === z && (z = "y"), "o" === z && (z = "r")) : je && (z = "z");
            return "2" + z + x + (4 === Xd.Wb.length ? Xd.Wb.slice(1) : Xd.Wb) + B
        };

    function Rh(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var Sh = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Th() {
        return hb("iPhone") && !hb("iPod") && !hb("iPad")
    }

    function Uh() {
        Th() || hb("iPad") || hb("iPod")
    };
    hb("Opera");
    hb("Trident") || hb("MSIE");
    hb("Edge");
    !hb("Gecko") || -1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") || hb("Trident") || hb("MSIE") || hb("Edge"); - 1 != gb().toLowerCase().indexOf("webkit") && !hb("Edge") && hb("Mobile");
    hb("Macintosh");
    hb("Windows");
    hb("Linux") || hb("CrOS");
    var Vh = ma.navigator || null;
    Vh && (Vh.appVersion || "").indexOf("X11");
    hb("Android");
    Th();
    hb("iPad");
    hb("iPod");
    Uh();
    gb().toLowerCase().indexOf("kaios");
    var Wh = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var k = a.charCodeAt(e + f);
                    if (!k || 61 == k || 38 == k || 35 == k) return e
                }
                e += f + 1
            }
            return -1
        },
        Xh = /#|$/,
        Yh = function(a, b) {
            var c = a.search(Xh),
                d = Wh(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        Zh = /[?&]($|#)/,
        $h = function(a, b, c) {
            for (var d, e = a.search(Xh), f = 0, g, k = []; 0 <= (g = Wh(a, f, b, e));) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Zh, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, t = d.indexOf("#");
                0 > t && (t = d.length);
                var u = d.indexOf("?"),
                    r;
                0 > u || u > t ? (u = t, r = "") : r = d.substring(u + 1, t);
                q = [d.slice(0, u), r, d.slice(t)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var ai = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

    function bi(a) {
        if (!a || !D.head) return null;
        var b = ci("META");
        D.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var di = function() {
            if (A.top == A) return 0;
            var a = A.location.ancestorOrigins;
            if (a) return a[a.length - 1] == A.location.origin ? 1 : 2;
            var b;
            var c = A.top;
            try {
                var d;
                if (d = !!c && null != c.location.href) b: {
                    try {
                        Cf(c.foo);
                        d = !0;
                        break b
                    } catch (e) {}
                    d = !1
                }
                b = d
            } catch (e) {
                b = !1
            }
            return b ? 1 : 2
        },
        ci = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function ei(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = ci("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = ab(g, e);
                    0 <= k && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            Sh(e, "load", f);
            Sh(e, "error", f)
        }
        d && (e.attributionsrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var gi = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            ai(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            fi(c, b)
        },
        fi = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else ei(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var hi = function() {};
    var ii = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        ji = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.rb = 0;
            var c;
            this.V = null != (c = b.Ck) ? c : 500;
            var d;
            this.I = null != (d = b.Rk) ? d : !1;
            this.B = null
        };
    la(ji, hi);
    ji.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = ig(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.V && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.V));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = ii(c), c.internalBlockOnErrors = b.I, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            ki(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    ji.prototype.removeEventListener = function(a) {
        a && a.listenerId && ki(this, "removeEventListener", null, a.listenerId)
    };
    var mi = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = li(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && li(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === k ? a.purpose && a.vendor ? li(a.purpose.legitimateInterests,
                b) && li(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        li = function(a, b) {
            return !(!a || !a[b])
        },
        ki = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (ni(a)) {
                oi(a);
                var f = ++a.rb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        ni = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        oi = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, Sh(a.m, "message", a.B))
        },
        pi = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = ii(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (gi({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var qi = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        ri = Rh('', 500);

    function si() {
        var a = Yd.tcf || {};
        return Yd.tcf = a
    }
    var wi = function() {
        var a = si(),
            b = new ji(A, {
                Ck: -1
            });
        if (!0 === A.gtag_enable_tcf_support && !a.active && ("function" === typeof A.__tcfapi || "function" === typeof b.m.__tcfapi || null != ni(b))) {
            a.active = !0;
            a.he = {};
            ti();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) ui(a), vi(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in qi) qi.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" ===
                            c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                k;
                            for (k in qi)
                                if (qi.hasOwnProperty(k))
                                    if ("1" === k) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = pi(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : mi(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[k] = mi(c, k, qi[k]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.he = d, vi(a))
                    }
                })
            } catch (c) {
                ui(a), vi(a)
            }
        }
    };

    function ui(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function ti() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = ri, a);
        $f(b)
    }

    function vi(a) {
        var b = {},
            c = (b.ad_storage = a.he["1"] ? "granted" : "denied", b);
        ag(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: xi()
        })
    }
    var xi = function() {
            var a = si();
            return a.active ? a.tcString || "" : ""
        },
        yi = function() {
            var a = si();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        zi = function(a) {
            if (!qi.hasOwnProperty(String(a))) return !0;
            var b = si();
            return b.active && b.he ? !!b.he[String(a)] : !0
        };
    var Ai = function(a) {
        var b = String(a[Qb.Na] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    };
    var Bi = ["L", "S", "Y"],
        Ci = ["S", "E"],
        Di = {
            sampleRate: "0.005000",
            Wh: "",
            Vh: Number("5"),
            Uh: Number("")
        },
        Ei = 0 <= D.location.search.indexOf("?gtm_latency=") || 0 <= D.location.search.indexOf("&gtm_latency="),
        Fi;
    if (!(Fi = Ei)) {
        var Gi = Math.random(),
            Hi = Di.sampleRate;
        Fi = Gi < Hi
    }
    var Ii = Fi,
        Ji = "https://www.googletagmanager.com/a?id=" + R.D + "&cv=1",
        Ki = {
            label: R.D + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function Li() {
        return [Ji, "&v=3&t=t", "&pid=" + ta(), "&rv=" + Xd.Wb].join("")
    }
    var Mi = Li();

    function Ni() {
        Mi = Li()
    }
    var Oi = {},
        Pi = "",
        Qi = "",
        Ri = "",
        Si = "",
        Ti = [],
        Ui = "",
        Vi = {},
        Wi = !1,
        Xi = {},
        Yi = {},
        Zi = {},
        $i = "",
        aj = void 0,
        bj = {},
        cj = {},
        dj = void 0,
        ej = 5;
    0 < Di.Vh && (ej = Di.Vh);
    var fj = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Nj: function() {
                    return c < a ? !1 : Fa() - d[c % a] < b
                },
                mk: function() {
                    var f = c++ % a;
                    d[f] = Fa()
                }
            }
        }(ej, 1E3),
        gj = 1E3,
        hj = "";

    function ij(a) {
        var b = aj;
        if (void 0 === b) return "";
        var c = $a("GTM"),
            d = $a("TAGGING"),
            e = $a("HEALTH"),
            f = Mi,
            g = Oi[b] ? "" : "&es=1",
            k = bj[b],
            m = jj(b),
            n = kj(),
            p = Pi,
            q = Qi,
            t = $i,
            u = lj(a),
            r = Ri,
            v = Si,
            w;
        return [f, g, k, m, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, t, u, r, v, w, Ui ? "&dl=" + encodeURIComponent(Ui) : "", 0 < Ti.length ? "&tdp=" + Ti.join(".") : "", Xd.Lc ?
            "&x=" + Xd.Lc : "", "&z=0"
        ].join("")
    }

    function nj() {
        dj && (A.clearTimeout(dj), dj = void 0);
        if (void 0 !== aj && (!Oi[aj] || Pi || Qi))
            if (cj[aj] || fj.Nj() || 0 >= gj--) J(1), cj[aj] = !0;
            else {
                fj.mk();
                var a = ij(!0);
                Ab(a);
                if (Si || Ui && 0 < Ti.length) {
                    var b = a.replace("/a?", "/td?");
                    Ab(b)
                }
                Oi[aj] = !0;
                Ui = Si = Ri = $i = Qi = Pi = "";
                Ti = []
            }
    }

    function oj() {
        dj || (dj = A.setTimeout(nj, 500))
    }

    function Gj(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function Hj() {
        2022 <= ij().length && nj()
    }

    function kj() {
        return "&tc=" + qc.filter(function(a) {
            return a
        }).length
    }
    var Jj = function(a, b) {
            if (Ii && !cj[a] && aj !== a) {
                nj();
                aj = a;
                Ri = Pi = "";
                bj[a] = "&e=" + Gj(b) + "&eid=" + a;
                oj();
            }
        },
        Kj = function(a, b, c, d) {
            if (Ii && b) {
                var e = Ai(b),
                    f = c + e;
                if (!cj[a]) {
                    a !== aj && (nj(), aj = a);
                    Pi = Pi ? Pi + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var k = (sc[g] ? "1" : "2") + e;
                    Ri = Ri ? Ri + "." + k : "&ti=" + k;
                    oj();
                    Hj()
                }
            }
        },
        Lj = function(a, b, c) {
            if (Ii && a && a[Qb.nb]) {
                var d = b + "." + a[Qb.nb];
                Zi[d] = c;
                "html" == Ai(a) && hj == d && (Pi += ":" + Math.floor(c))
            }
        };

    function lj(a) {}

    function jj(a) {}
    var Sj = function(a, b, c) {
            if (Ii && void 0 !== a && !cj[a]) {
                a !== aj && (nj(), aj = a);
                var d = c + b;
                Qi = Qi ? Qi + "." + d : "&epr=" + d;
                oj();
                Hj()
            }
        },
        Tj = function(a, b, c) {},
        mj = void 0;
    ib();
    Th() || hb("iPod");
    hb("iPad");
    !hb("Android") || jb() || ib() || hb("Opera") || hb("Silk");
    jb();
    !hb("Safari") || jb() || hb("Coast") || hb("Opera") || hb("Edge") || hb("Edg/") || hb("OPR") || ib() || hb("Silk") || hb("Android") || Uh();
    var Uj = {},
        Vj = null,
        Wj = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Vj) {
                Vj = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(k[m].split(""));
                    Uj[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Vj[q] && (Vj[q] = p)
                    }
                }
            }
            for (var t = Uj[f], u = Array(Math.floor(b.length / 3)), r = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    z = t[y >> 2],
                    C = t[(y & 3) << 4 | x >> 4],
                    H = t[(x & 15) << 2 | B >> 6],
                    I = t[B & 63];
                u[w++] = "" + z + C + H + I
            }
            var E = 0,
                K = r;
            switch (b.length - v) {
                case 2:
                    E = b[v + 1], K = t[(E & 15) << 2] || r;
                case 1:
                    var M = b[v];
                    u[w] = "" + t[M >> 2] + t[(M & 3) << 4 | E >> 4] + K + r
            }
            return u.join("")
        };
    var Xj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Yj() {
        var a;
        return null != (a = A.google_tag_data) ? a : A.google_tag_data = {}
    }

    function Zj() {
        var a = A.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function ak() {
        var a, b;
        return null != (b = null == (a = A.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function bk() {
        var a, b;
        return "function" === typeof(null == (a = A.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function ck() {
        if (!bk()) return null;
        var a = Yj();
        if (a.uach_promise) return a.uach_promise;
        var b = A.navigator.userAgentData.getHighEntropyValues(Xj).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var dk, ek = function() {
            if (bk() && (dk = Fa(), !ak())) {
                var a = ck();
                a && (a.then(function() {
                    J(95);
                }), a.catch(function() {
                    J(96)
                }))
            }
        },
        gk = function(a) {
            var b = fk.Gk,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = Zj();
            if (d) c(d);
            else {
                var e = ak();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = A.setTimeout(function() {
                        c.Wc || (c.Wc = !0, J(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Wc || (c.Wc = !0, J(104), A.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Wc || (c.Wc = !0, J(105), A.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        hk = function(a, b) {
            a && (b.m[N.g.Le] = a.architecture, b.m[N.g.Me] = a.bitness, a.fullVersionList && (b.m[N.g.Ne] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.m[N.g.Oe] = a.mobile ? "1" : "0", b.m[N.g.Pe] = a.model, b.m[N.g.Qe] = a.platform, b.m[N.g.Re] = a.platformVersion, b.m[N.g.Se] = a.wow64 ? "1" : "0")
        };
    var ik = function(a) {
        for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Jf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    };

    function jk(a, b) {
        var c = ik(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Jf] || (d[c[e].Jf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Jf].push(g)
            }
        }
        return d
    };
    var kk = /^\w+$/,
        lk = /^[\w-]+$/,
        mk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        nk = function() {
            if (!Ef().h() || !Qf()) return !0;
            var a = Nf("ad_storage");
            return null == a ? !0 : !!a
        },
        ok = function(a, b) {
            Pf("ad_storage") ? nk() ? a() : Vf(a, "ad_storage") : b ? Ya("TAGGING", 3) : Uf(function() {
                ok(a, !0)
            }, ["ad_storage"])
        },
        qk = function(a) {
            return pk(a).map(function(b) {
                return b.aa
            })
        },
        pk = function(a) {
            var b = [];
            if (!jg(A) || !D.cookie) return b;
            var c = mg(a, D.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    hd: d.hd
                }, e++) {
                var f = rk(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.hd = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = sa(b, function(q) {
                            return function(t) {
                                return t.aa === q.hd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = sk(p.labels, n || [])) : b.push({
                        version: k,
                        aa: d.hd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, t) {
                return t.timestamp - q.timestamp
            });
            return tk(b)
        };

    function sk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function uk(a) {
        return a && "string" == typeof a && a.match(kk) ? a : "_gcl"
    }
    var wk = function() {
            var a = Ye(A.location.href),
                b = We(a, "query", !1, void 0, "gclid"),
                c = We(a, "query", !1, void 0, "gclsrc"),
                d = We(a, "query", !1, void 0, "wbraid"),
                e = We(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Te(f, "gclid");
                c = c || Te(f, "gclsrc");
                d = d || Te(f, "wbraid")
            }
            return vk(b, c, e, d)
        },
        vk = function(a, b, c, d) {
            var e = {},
                f = function(g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && lk.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(lk)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        yk = function(a) {
            var b = wk();
            ok(function() {
                xk(b, !1, a)
            })
        };

    function xk(a, b, c, d, e) {
        function f(w, y) {
            var x = zk(w, g);
            x && (vg(x, y, k), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = uk(c.prefix);
        d = d || Fa();
        var k = Lg(c, d, !0);
        k.Xa = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                t = zk("gb", g),
                u = !1;
            if (!b)
                for (var r = pk(t), v = 0; v < r.length; v++) r[v].aa === q && r[v].labels &&
                    0 < r[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var Bk = function(a, b) {
            var c = dh(!0);
            ok(function() {
                for (var d = uk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== mk[f]) {
                        var g = zk(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(Ak(k), Fa()),
                                n;
                            b: {
                                var p = m;
                                if (jg(A))
                                    for (var q = mg(g, D.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                        if (Ak(q[t]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var u = Lg(b, m, !0);
                                u.Xa = "ad_storage";
                                vg(g, k, u)
                            }
                        }
                    }
                }
                xk(vk(c.gclid, c.gclsrc), !1, b)
            })
        },
        zk = function(a, b) {
            var c = mk[a];
            if (void 0 !== c) return b + c
        },
        Ak = function(a) {
            return 0 !== Ck(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function rk(a) {
        var b = Ck(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function Ck(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !lk.test(a[2]) ? [] : a
    }
    var Dk = function(a, b, c, d, e) {
            if (ra(b) && jg(A)) {
                var f = uk(e),
                    g = function() {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = zk(a[m], f);
                            if (n) {
                                var p = mg(n, D.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1])
                            }
                        }
                        return k
                    };
                ok(function() {
                    jh(g, b, c, d)
                })
            }
        },
        tk = function(a) {
            return a.filter(function(b) {
                return lk.test(b.aa)
            })
        },
        Ek = function(a, b) {
            if (jg(A)) {
                for (var c = uk(b.prefix), d = {}, e = 0; e < a.length; e++) mk[a[e]] && (d[a[e]] = mk[a[e]]);
                ok(function() {
                    l(d, function(f, g) {
                        var k = mg(c + g, D.cookie, void 0, "ad_storage");
                        k.sort(function(u,
                            r) {
                            return Ak(r) - Ak(u)
                        });
                        if (k.length) {
                            var m = k[0],
                                n = Ak(m),
                                p = 0 !== Ck(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                t;
                            t = 0 !== Ck(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [t];
                            xk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function Fk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var Gk = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Qf()) {
                var c = wk();
                if (Fk(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    kh(function() {
                        return d
                    }, 3);
                    kh(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        Hk = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!nk()) return e;
            var f = pk(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var k = f[0],
                    m = f[0].timestamp,
                    n = [k.version, Math.round(m /
                        1E3), k.aa].concat(k.labels || [], [b]).join("."),
                    p = Lg(c, m, !0);
                p.Xa = "ad_storage";
                vg(a, n, p)
            }
            return e
        };

    function Ik(a, b) {
        var c = uk(b),
            d = zk(a, c);
        if (!d) return 0;
        for (var e = pk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Jk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Kk = function(a) {
        var b = Math.max(Ik("aw", a), Jk(nk() ? jk() : {}));
        return Math.max(Ik("gb", a), Jk(nk() ? jk("_gac_gb", !0) : {})) > b
    };
    var Lk = function(a, b) {
            var c = a && !bg(N.g.H);
            return b && c ? "0" : b
        },
        Ok = function(a) {
            function b(r) {
                var v;
                Yd.reported_gclid || (Yd.reported_gclid = {});
                v = Yd.reported_gclid;
                var w, y = g;
                w = !g || Qf() && !bg(N.g.H) ? m + (r ? "gcu" : "gcs") : m + "." + (f.prefix || "_gcl") + (r ? "gcu" : "gcs");
                if (!v[w]) {
                    v[w] = !0;
                    var x = [],
                        B = {},
                        z = function(fa, L) {
                            L && (x.push(fa + "=" + encodeURIComponent(L)), B[fa] = !0)
                        },
                        C = "https://www.google.com";
                    if (Qf()) {
                        var H = bg(N.g.H);
                        z("gcs", cg());
                        r && z("gcu", "1");
                        Rf() && z("gcd", "G1" + Yf(Of));
                        z("rnd", Dh());
                        if ((!m || n && "aw.ds" !== n) && bg(N.g.H)) {
                            var I = qk("_gcl_aw");
                            z("gclaw", I.join("."))
                        }
                        z("url", String(A.location).split(/[?#]/)[0]);
                        z("dclid", Lk(d, p));
                        H || (C = "https://pagead2.googlesyndication.com")
                    }
                    z("gdpr_consent", xi());
                    z("gdpr", yi());
                    "1" === dh(!1)._up && z("gtm_up", "1");
                    z("gclid", Lk(d, m));
                    z("gclsrc", n);
                    if (!(B.gclid || B.dclid || B.gclaw) && (z("gbraid", Lk(d, q)), !B.gbraid && Qf() && bg(N.g.H))) {
                        var E = qk("_gcl_gb");
                        0 < E.length && z("gclgb", E.join("."))
                    }
                    z("gtm",
                        Qh(!e));
                    g && bg(N.g.H) && (uh(f || {}), y && z("auid", ph[rh(f.prefix)] || ""));
                    Nk || a.ph && z("did", a.ph);
                    a.pf && z("gdid", a.pf);
                    a.jf && z("edid", a.jf);
                    var K = Q(64) ? Zj() : null;
                    if (K) {
                        var M = function(fa, L) {
                            x.push(fa + "=" + encodeURIComponent(L));
                            B[fa] = !0
                        };
                        M("uaa", K.architecture);
                        M("uab", K.bitness);
                        K.fullVersionList && M("uafvl", K.fullVersionList.map(function(fa) {
                            return encodeURIComponent(fa.brand || "") + ";" + encodeURIComponent(fa.version || "")
                        }).join("|"));
                        M("uam", K.model);
                        M("uap", K.platform);
                        M("uapv", K.platformVersion);
                        M("uaw",
                            K.wow64 ? "1" : "0")
                    }
                    var T = C + "/pagead/landing?" + x.join("&");
                    Hb(T)
                }
            }
            var c = !!a.df,
                d = !!a.ke,
                e = a.W,
                f = void 0 === a.Yb ? {} : a.Yb,
                g = void 0 === a.fe ? !0 : a.fe,
                k = wk(),
                m = k.gclid || "",
                n = k.gclsrc,
                p = k.dclid || "",
                q = k.gbraid || "",
                t = !c && ((!m || n && "aw.ds" !== n ? !1 : !0) || q),
                u = Qf();
            if (t || u) u ? eg(function() {
                b();
                bg(N.g.H) || dg(function(r) {
                    return b(!0, r.consentEventId, r.consentPriorityId)
                }, N.g.H)
            }, [N.g.H]) : b()
        },
        Mk = function(a) {
            var b = String(A.location).split(/[?#]/)[0],
                c = Xd.ci || A._CONSENT_MODE_SALT;
            return a ? c ? String(fg(b + a + c)) : "0" : ""
        },
        Nk = !1;
    var Pk = /[A-Z]+/,
        Qk = /\s/,
        Rk = function(a) {
            if (h(a)) {
                a = Da(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Pk.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Qk.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            T: c + "-" + d[0],
                            K: d
                        }
                    }
                }
            }
        },
        Tk = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Rk(a[c]);
                d && (b[d.id] = d)
            }
            Sk(b);
            var e = [];
            l(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Sk(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.T)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Uk = function(a, b, c, d) {
        var e = yb(),
            f;
        if (1 === e) a: {
            var g = le;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var t = p[q].src;
                if (t) {
                    t = t.toLowerCase();
                    if (0 === t.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === t.indexOf(k) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != A.location.protocol ? a : b) + c
    };
    var Wk = function(a, b, c) {
            if (A[a.functionName]) return b.zf && F(b.zf), A[a.functionName];
            var d = Vk();
            A[a.functionName] = d;
            if (a.Xd)
                for (var e = 0; e < a.Xd.length; e++) A[a.Xd[e]] = A[a.Xd[e]] || Vk();
            a.ee && void 0 === A[a.ee] && (A[a.ee] = c);
            xb(Uk("https://", "http://", a.Hf), b.zf, b.Zj);
            return d
        },
        Vk = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Xk = {
            functionName: "_googWcmImpl",
            ee: "_googWcmAk",
            Hf: "www.gstatic.com/wcm/loader.js"
        },
        Yk = {
            functionName: "_gaPhoneImpl",
            ee: "ga_wpid",
            Hf: "www.gstatic.com/gaphone/loader.js"
        },
        Zk = {
            Zh: "",
            Yi: "5"
        },
        $k = {
            functionName: "_googCallTrackingImpl",
            Xd: [Yk.functionName, Xk.functionName],
            Hf: "www.gstatic.com/call-tracking/call-tracking_" + (Zk.Zh || Zk.Yi) + ".js"
        },
        al = {},
        bl = function(a, b, c, d) {
            J(22);
            if (c) {
                d = d || {};
                var e = Wk(Xk, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Wa && (f.autoreplace = c);
                e(2, d.Wa, f, c, 0, Ea(), d.options)
            }
        },
        cl = function(a, b, c, d) {
            J(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Ea()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    al[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length ? (e.adData = {
                            ak: g.K[0],
                            cl: g.K[1]
                        }, al[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.T
                        }, al[g.id] = !0))
                }(e.gaData || e.adData) && Wk($k, d)(d.Wa, e, d.options)
            }
        },
        dl = function() {
            var a = !1;
            return a
        },
        el = function(a, b) {
            if (a)
                if (Eh()) {} else {
                    if (h(a)) {
                        var c =
                            Rk(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = P(b, N.g.Ei);
                    if (f && ra(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Rk(f[g]);
                            k && (d.push(k), (a.id === k.id || a.id === a.T && a.T === k.T) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = P(b, N.g.yg),
                            n;
                        if (m) {
                            ra(m) ? n = m : n = [m];
                            var p = P(b, N.g.wg),
                                q = P(b, N.g.xg),
                                t = P(b, N.g.zg),
                                u = P(b, N.g.Di),
                                r = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) cl(d, n[w], u, {
                                        Wa: r,
                                        options: t
                                    });
                                    else if ("AW" === a.prefix && a.K[1]) dl() ? cl([a], n[w], u || "US", {
                                Wa: r,
                                options: t
                            }) : bl(a.K[0], a.K[1], n[w], {
                                Wa: r,
                                options: t
                            });
                            else if ("UA" === a.prefix)
                                if (dl()) cl([a], n[w], u || "US", {
                                    Wa: r
                                });
                                else {
                                    var y = a.T,
                                        x = n[w],
                                        B = {
                                            Wa: r
                                        };
                                    J(23);
                                    if (x) {
                                        B = B || {};
                                        var z = Wk(Yk, B, y),
                                            C = {};
                                        void 0 !== B.Wa ? C.receiver = B.Wa : C.replace = x;
                                        C.ga_wpid = y;
                                        C.destination = x;
                                        z(2, Ea(), C)
                                    }
                                }
                        }
                    }
                }
        };
    var fl = function(a, b, c) {
            this.target = a;
            this.eventName = b;
            this.h = c;
            this.m = {};
            this.metadata = G(c.eventMetadata || {});
            this.J = !1
        },
        gl = function(a, b, c) {
            var d = P(a.h, b);
            void 0 !== d ? a.m[b] = d : void 0 !== c && (a.m[b] = c)
        },
        hl = function(a, b, c) {
            var d = Ee(a.target.T);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function il(a) {
        return {
            getDestinationId: function() {
                return a.target.T
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                return void(a.m[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                gl(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.J = !0)
            },
            getProcessedEvent: function() {
                return a
            },
            getFromEventContext: function(b) {
                return P(a.h, b)
            }
        }
    };
    var kl = function(a) {
            var b = jl[a.target.T];
            if (!a.J && b)
                for (var c = il(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.J = !0
                    }
                    if (a.J) break
                }
        },
        jl = {};
    var nl = function(a) {
            a = a || {};
            var b;
            if (!Qf() || Nf(ll)) {
                (b = ml(a)) || (b = zg());
                var c = a,
                    d = rh(c.prefix),
                    e = rh(c.prefix),
                    f = ph[e];
                if (f) {
                    var g = f.split(".");
                    if (2 === g.length) {
                        var k = Number(g[1]) || 0;
                        if (k) {
                            var m = f;
                            b && (m = f + "." + b + "." + Math.floor(Fa() / 1E3));
                            th(e, m, c, 1E3 * k)
                        }
                    }
                }
                delete ph[d];
                delete qh[d];
                sh(d, c.path, c.domain);
                return ml(a)
            }
        },
        ml = function(a) {
            if (!Qf() || Nf(ll)) {
                a = a || {};
                uh(a, !1);
                var b = qh[rh(uk(a.prefix))];
                if (b && !(18E5 < Fa() - 1E3 * b.xh)) {
                    var c = b.id,
                        d = c.split(".");
                    if (2 === d.length && !(864E5 < Fa() - 1E3 * (Number(d[1]) || 0))) return c
                }
            }
        },
        ll = N.g.H;
    var ol = function(a) {
            var b = [];
            l(a, function(c, d) {
                d = tk(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        ql = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = $e("gcl" + a);
                if (d) return d.split(".")
            }
            var e = uk(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !bg(pl) && c,
                    g;
                g = wk()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var k = zk(a, e);
            return k ? qk(k) : []
        },
        rl = function(a, b) {
            Pf(pl) ? bg(pl) ? a() : Vf(a, pl) : b ? J(42) : eg(function() {
                rl(a, !0)
            }, [pl])
        },
        pl = N.g.H,
        sl = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        tl = function(a, b) {
            return ql("aw", a, b)
        },
        ul = function(a, b) {
            return ql("dc", a, b)
        },
        vl = function(a) {
            var b = $e("gac");
            return b ? !bg(pl) && a ? "0" : decodeURIComponent(b) : ol(nk() ? jk() : {})
        },
        wl = function(a) {
            var b = $e("gacgb");
            return b ? !bg(pl) && a ? "0" : decodeURIComponent(b) : ol(nk() ? jk("_gac_gb", !0) : {})
        },
        xl = function(a) {
            var b = wk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                aa: d,
                Rc: f
            });
            e && c.push({
                aa: e,
                Rc: "ds"
            });
            0 === c.length && b.gbraid && c.push({
                aa: b.gbraid,
                Rc: "gb"
            });
            Q(77) && 0 === c.length &&
                "aw.ds" === f && c.push({
                    aa: "",
                    Rc: "aw.ds"
                });
            rl(function() {
                uh(a);
                var g = ph[rh(a.prefix)];
                if (g) {
                    var k = ["auid=" + g];
                    if (Q(15)) {
                        var m = D.referrer ? We(Ye(D.referrer), "host") : "";
                        0 === c.length && sl.test(m) && c.push({
                            aa: "",
                            Rc: ""
                        });
                        if (0 === c.length) return;
                        m && k.push("ref=" + encodeURIComponent(m));
                        var n = 1 === di() ? A.top.location.href : A.location.href;
                        n = n.replace(/[\?#].*$/, "");
                        k.push("url=" + encodeURIComponent(n));
                        k.push("tft=" + Fa());
                        var p = Jb();
                        void 0 !== p && k.push("tfd=" + Math.round(p));
                        if (Q(76)) {
                            var q = di();
                            k.push("frm=" + q)
                        }
                    }
                    if (0 <
                        c.length)
                        for (var t = Yd.joined_auid = Yd.joined_auid || {}, u = 0; u < c.length; u++) {
                            var r = c[u],
                                v = r.aa,
                                w = r.Rc,
                                y = (a.prefix || "_gcl") + "." + w + "." + v;
                            if (!t[y]) {
                                var x = "https://adservice.google.com/pagead/regclk?" + k.join("&");
                                "" !== v ? x = "gb" === w ? x + "&wbraid=" + v : x + "&gclid=" + v + "&gclsrc=" + w : "aw.ds" === w && (x += "&gclsrc=aw.ds");
                                Hb(x);
                                t[y] = !0
                            }
                        }
                }
            })
        },
        yl = function(a) {
            return $e("gclaw") || $e("gac") || 0 < (wk().aw || []).length ? !1 : 0 < (wk().gb || []).length ? !0 : Kk(a)
        };
    var zl = function(a, b, c, d, e, f, g, k, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.I = f;
            this.V = g;
            this.B = k;
            this.eventMetadata = m;
            this.R = n;
            this.P = p;
            this.F = q
        },
        P = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            Ii && Al(a, a.I[b], a.V[b]) && (J(71), J(79));
            return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
        },
        Bl = function(a) {
            function b(g) {
                for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.I);
            if (Ii)
                for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        J(71);
                        J(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        Cl = function(a, b, c) {
            function d(m) {
                Ob(m) && l(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (Ii) {
                var g = f,
                    k = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || Al(a, e, k)) J(71), J(81);
                f = g;
                e = k
            }
            return f ? e : void 0
        },
        Dl = function(a) {
            var b = [N.g.uc, N.g.vd, N.g.wd, N.g.xd, N.g.yd, N.g.zd, N.g.Ad],
                c = {},
                d = !1,
                e = function(k) {
                    for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.I);
            if (Ii) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.V);
                Al(a, c, f) && (J(71), J(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.B);
            return c
        },
        Al = function(a, b, c) {
            if (!Ii) return !1;
            try {
                if (b === c) return !1;
                var d = Mb(b);
                if (d !== Mb(c) || !(Ob(b) && Ob(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Al(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Al(a, b[g], c[g])) return !0
                }
            } catch (k) {
                J(72)
            }
            return !1
        },
        El = function(a, b) {
            this.Mi = a;
            this.Ni = b;
            this.I = {};
            this.Rg = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Jc = {};
            this.B = {};
            this.kc = function() {};
            this.rb = function() {};
            this.V = !1
        },
        Fl = function(a, b) {
            a.I = b;
            return a
        },
        Gl = function(a, b) {
            a.Rg = b;
            return a
        },
        Hl = function(a, b) {
            a.h = b;
            return a
        },
        Il = function(a, b) {
            a.M = b;
            return a
        },
        Jl = function(a, b) {
            a.m = b;
            return a
        },
        Kl = function(a,
            b) {
            a.Jc = b;
            return a
        },
        Ll = function(a, b) {
            a.B = b || {};
            return a
        },
        Ml = function(a, b) {
            a.kc = b;
            return a
        },
        Nl = function(a, b) {
            a.rb = b;
            return a
        },
        Ol = function(a) {
            a.V = !0;
            return a
        },
        Pl = function(a) {
            return new zl(a.Mi, a.Ni, a.I, a.Rg, a.h, a.M, a.m, a.Jc, a.B, a.kc, a.rb, a.V)
        };
    var Rl = function(a, b) {
            var c = a.yh,
                d = a.Qh;
            a.nh && (mh(c[N.g.Rb], !!c[N.g.N]) && (Bk(Ql, b), Q(73) && xh(b)), yk(b), Ek(Ql, b), xl(b));
            c[N.g.N] && (Dk(Ql, c[N.g.N], c[N.g.Sb], !!c[N.g.xb], b.prefix), Q(73) && yh(c[N.g.N], c[N.g.Sb], !!c[N.g.xb], b));
            d && Gk(Ql)
        },
        Sl = function(a, b, c, d) {
            var e = a.Th,
                f = a.callback,
                g = a.Bh;
            if ("function" === typeof f)
                if (e === N.g.Mb && void 0 === g) {
                    var k = d(b.prefix, c);
                    0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k)
                } else e === N.g.pd ? (J(65), uh(b, !1), f(ph[rh(b.prefix)])) : f(g)
        },
        Ql = ["aw", "dc", "gb"];

    function Tl() {
        return "attribution-reporting"
    }

    function Ul(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Vl = !1;

    function Wl() {
        if (Ul("join-ad-interest-group") && pa(qb.joinAdInterestGroup)) return !0;
        Vl || (bi('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Vl = !0);
        return Ul("join-ad-interest-group") && pa(qb.joinAdInterestGroup)
    }

    function Xl(a, b) {
        var c = void 0;
        try {
            c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Fa() - d) {
                Ya("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ya("TAGGING", 10);
                return
            }
        } catch (e) {}
        zb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Fa()
        }, c)
    }

    function Yl() {
        return Q(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var Zl = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        $l = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        am = /^\d+\.fls\.doubleclick\.net$/,
        bm = /;gac=([^;?]+)/,
        cm = /;gacgb=([^;?]+)/,
        dm = /;gclaw=([^;?]+)/,
        em = /;gclgb=([^;?]+)/;

    function fm(a, b) {
        if (am.test(D.location.host)) {
            var c = D.location.href.match(b);
            return c && 2 == c.length && c[1].match(Zl) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var gm = function(a, b, c) {
        var d = nk() ? jk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var k = Hk("_gac_gb_" + g, a, b, c);
            f = f || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + k.join(","))
        }
        return {
            zj: f ? e.join(";") : "",
            yj: fm(d, cm)
        }
    };

    function hm(a, b, c) {
        if (am.test(D.location.host)) {
            var d = D.location.href.match(c);
            if (d && 2 == d.length && d[1].match($l)) return [{
                aa: d[1]
            }]
        } else return pk((a || "_gcl") + b);
        return []
    }
    var im = function(a) {
            return hm(a, "_aw", dm).map(function(b) {
                return b.aa
            }).join(".")
        },
        jm = function(a) {
            return hm(a, "_gb", em).map(function(b) {
                return b.aa
            }).join(".")
        },
        km = function(a, b) {
            var c = Hk((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var lm = function() {
        if (pa(A.__uspapi)) {
            var a = "";
            try {
                A.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var mm = function() {
            var a = D.title;
            if (void 0 == a || "" == a) return "";
            var b = function(d) {
                try {
                    return decodeURIComponent(d), !0
                } catch (e) {
                    return !1
                }
            };
            a = encodeURIComponent(a);
            for (var c = 256; !b(a.substr(0, c));) c--;
            return decodeURIComponent(a.substr(0, c))
        },
        nm = function(a, b) {
            ra(b) || (b = [b]);
            return 0 <= b.indexOf(a.metadata.hit_type)
        },
        om = function(a) {
            var b = a.target.K[0];
            if (b) {
                a.m[N.g.vc] = b;
                var c = a.target.K[1];
                c && (a.m[N.g.Ra] = c)
            } else a.J = !0
        },
        pm = function(a) {
            if (nm(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b =
                    a.m[N.g.Ra],
                    c = !0 === P(a.h, N.g.we);
                c && (a.metadata.remarketing_only = !0);
                switch (a.metadata.hit_type) {
                    case "conversion":
                        !c && b && (a.metadata.speculative = !1);
                        yf() && (a.metadata.is_gcp_conversion = !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.J = !0);
                        break;
                    case "remarketing":
                        if (c || !b) a.metadata.speculative = !1
                }
                a.m[N.g.Tg] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com"
            }
        },
        qm = function(a) {
            nm(a, ["conversion", "remarketing"])
        },
        rm = function(a) {
            if (nm(a, ["conversion", "remarketing"])) {
                var b =
                    di();
                a.m[N.g.qg] = b;
                var c = P(a.h, N.g.Ka);
                c || (c = 1 === b ? A.top.location.href : A.location.href);
                var d = a.m,
                    e = N.g.Ka,
                    f;
                if (null != c) {
                    var g = String(c).substring(0, 512),
                        k = g.indexOf("#");
                    f = -1 == k ? g : g.substring(0, k)
                } else f = "";
                d[e] = f;
                gl(a, N.g.La, D.referrer);
                a.m[N.g.Tb] = mm();
                gl(a, N.g.Ja);
                var m = Fe();
                a.m[N.g.zb] = m.width + "x" + m.height
            }
        },
        sm = function(a) {
            nm(a, ["conversion", "remarketing"]) && (gl(a, N.g.Ma), gl(a, N.g.ja), gl(a, N.g.la), "remarketing" === a.metadata.hit_type && gl(a, N.g.ra))
        },
        tm = function(a) {
            if (Q(13))
                if (!bk()) J(87);
                else if (void 0 !==
                dk) {
                J(85);
                var b = Zj();
                b ? hk(b, a) : J(86)
            }
        },
        vm = function(a) {
            nm(a, ["conversion"]) && (!0 === A._gtmpcm || wf() ? a.m[N.g.wc] = "2" : Q(7) && (um || Ul(Tl()) || (bi('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), um = !0), Ul(Tl()) && (a.m[N.g.wc] = "1")))
        },
        wm = function(a) {
            nm(a, ["conversion", "remarketing"]) && Q(9) && bg(N.g.H) && !1 !== P(a.h, N.g.xa) && !1 !== P(a.h, N.g.X) && !1 !== P(a.h, N.g.vb) && !1 !== P(a.h, N.g.Ea) && Wl() && (a.m[N.g.ig] = "1", a.metadata.send_fledge_experiment = !0)
        },
        xm = function(a) {
            var b = function(d) {
                return P(a.h, d)
            };
            a.metadata.conversion_linker_enabled = !1 !== b(N.g.na);
            var c = {
                prefix: b(N.g.Da) || b(N.g.Sa),
                domain: b(N.g.hb),
                qb: b(N.g.Ia),
                flags: b(N.g.ib)
            };
            a.metadata.cookie_options = c;
            a.metadata.redact_ads_data = null != b(N.g.fa) && !1 !== b(N.g.fa);
            a.metadata.allow_ad_personalization = !1 !== b(N.g.X)
        },
        ym = function(a) {
            if (hl(a, "ccd_add_1p_data", !1) && bg(N.g.H)) {
                var b = sf(a.h);
                if (uf(b)) {
                    if (b.enable_code) {
                        var c = P(a.h, N.g.ma);
                        if (Ob(c) || null === c) a.metadata.user_data_from_code = c
                    }
                    Ob(b.selectors) && (a.metadata.user_data_from_manual = rf(b.selectors))
                }
            }
        },
        zm = function(a) {
            var b = !a.metadata.send_user_data_hit &&
                nm(a, ["conversion", "user_data_web"]),
                c = !hl(a, "ccd_add_1p_data", !1) && nm(a, "user_data_lead");
            if ((b || c) && bg(N.g.H)) {
                var d = "conversion" === a.metadata.hit_type,
                    e = a.h,
                    f = void 0,
                    g = P(e, N.g.ma);
                if (d) {
                    var k = (P(e, N.g.Bc) || {})[a.m[N.g.Ra]];
                    if (!0 === P(e, N.g.od) || k) {
                        var m;
                        var n;
                        if (k) b: {
                            switch (k.enhanced_conversions_mode) {
                                case "manual":
                                    if (g && Ob(g)) {
                                        n = g;
                                        break b
                                    }
                                    var p = k.enhanced_conversions_manual_var;
                                    n = void 0 !== p ? p : A.enhanced_conversion_data;
                                    break b;
                                case "automatic":
                                    n = rf(k[N.g.gg]);
                                    break b
                            }
                            n = void 0
                        }
                        else n = A.enhanced_conversion_data;
                        var q = n,
                            t = (k || {}).enhanced_conversions_mode,
                            u;
                        if (q) {
                            if ("manual" === t) switch (q._tag_mode) {
                                case "CODE":
                                    u = "c";
                                    break;
                                case "AUTO":
                                    u = "a";
                                    break;
                                case "MANUAL":
                                    u = "m";
                                    break;
                                default:
                                    u = "c"
                            } else u = "automatic" === t ? xf(k) ? "a" : "m" : "c";
                            m = {
                                Ya: q,
                                Sh: u
                            }
                        } else m = {
                            Ya: q,
                            Sh: void 0
                        };
                        var r = m,
                            v = r.Sh;
                        f = r.Ya;
                        a.m[N.g.Lg] = v
                    }
                } else {
                    if (a.metadata.is_config_command || !a.h.F && !tf(a.h)) return;
                    uf(sf(a.h)) && null !== g && (Ob(g) ? f = g : f = vf(sf(a.h)), f && (a.metadata.speculative = !1))
                }
                a.metadata.user_data = f
            }
        },
        Am = function(a) {
            nm(a, ["conversion", "remarketing"]) &&
                (a.h.F ? "conversion" !== a.metadata.hit_type && a.eventName && (a.m[N.g.hg] = a.eventName) : a.m[N.g.hg] = a.eventName, l(a.h.h, function(b, c) {
                    Wd[b.split(".")[0]] || (a.m[b] = c)
                }))
        },
        Bm = function(a) {
            if (a.eventName === N.g.wa && (a.metadata.is_config_command = !0, nm(a, "conversion") && (a.metadata.speculative = !0), !nm(a, "remarketing") || !1 !== P(a.h, N.g.vb) && !1 !== P(a.h, N.g.Ea) || (a.metadata.speculative = !0), nm(a, "landing_page"))) {
                var b = P(a.h, N.g.Nb),
                    c = P(a.h, N.g.oa) || {},
                    d = P(a.h, N.g.lb),
                    e = a.metadata.conversion_linker_enabled,
                    f = a.metadata.cookie_options;
                Rl({
                    nh: e,
                    nj: b,
                    yh: c,
                    Qh: d
                }, f);
                el(a.target, a.h);
                Ok({
                    df: !1,
                    ke: a.metadata.redact_ads_data,
                    W: a.target.id,
                    eventId: a.h.eventId,
                    priorityId: a.h.priorityId,
                    Yb: e ? f : void 0,
                    fe: e,
                    ph: a.m[N.g.Ge],
                    pf: a.m[N.g.Qb],
                    jf: a.m[N.g.Pb]
                });
                a.J = !0
            }
        },
        Cm = function(a) {
            if (!hl(a, "hasPreAutoPiiCcdRule", !1)) {
                var b = Q(50);
                if ((!Q(49) || b || a.h.F) && nm(a, "conversion") && bg(N.g.H)) {
                    var c = (P(a.h, N.g.Bc) || {})[a.m[N.g.Ra]],
                        d = a.m[N.g.vc],
                        e;
                    if (!(e = xf(c)))
                        if ("false" !== af.Yh && gf)
                            if (hf) e = !0;
                            else {
                                var f = Ee("AW-" + d);
                                e = !!f && !!f.preAutoPii
                            }
                    else e = !1;
                    if (e) {
                        var g =
                            Fa(),
                            k = of ({
                                Uc: !0,
                                Vc: !0,
                                vk: !0
                            });
                        if (0 !== k.elements.length) {
                            for (var m = [], n = 0; n < k.elements.length; ++n) {
                                var p = k.elements[n];
                                m.push(p.querySelector + "*" + pf(p) + "*" + p.type)
                            }
                            a.m[N.g.Ig] = m.join("~");
                            var q = k.ek;
                            q && (a.m[N.g.Jg] = q.querySelector, a.m[N.g.Hg] = pf(q));
                            a.m[N.g.Gg] = String(Fa() - g);
                            a.m[N.g.Kg] = k.status
                        }
                    }
                }
            }
        },
        Dm = function(a) {
            if (a.eventName === N.g.Ca && !a.h.F) {
                if (!a.metadata.consent_updated && nm(a, "conversion")) {
                    var b = P(a.h, N.g.jb);
                    if ("function" !== typeof b) return;
                    var c = String(P(a.h, N.g.Ta)),
                        d = a.m[c],
                        e = P(a.h, c);
                    c === N.g.Mb || c === N.g.pd ? Sl({
                        Th: c,
                        callback: b,
                        Bh: e
                    }, a.metadata.cookie_options, a.metadata.redact_ads_data, tl) : b(d || e)
                }
                a.J = !0
            }
        },
        Em = function(a) {
            if (nm(a, "conversion") && bg(N.g.H) && (a.m[N.g.Qd] || a.m[N.g.Jd])) {
                var b = a.m[N.g.Ra],
                    c = G(a.metadata.cookie_options),
                    d = uk(c.prefix);
                c.prefix = "_gcl" === d ? "" : d;
                if (a.m[N.g.Qd]) {
                    var e = km(b, c);
                    e && (a.m[N.g.Ng] = e)
                }
                if (a.m[N.g.Jd]) {
                    var f = gm(b, c).zj;
                    f && (a.m[N.g.mg] = f)
                }
            }
        },
        Fm = function(a) {
            var b = Q(4),
                c = a.h,
                d, e, f;
            if (!b) {
                var g = Cl(c, N.g.Z);
                d = Oa(Ob(g) ? g : {})
            }
            var k = Cl(c, N.g.Z, 1),
                m = Cl(c, N.g.Z,
                    2);
            e = Oa(Ob(k) ? k : {}, ".");
            f = Oa(Ob(m) ? m : {}, ".");
            b || (a.m[N.g.Ge] = d);
            a.m[N.g.Qb] = e;
            a.m[N.g.Pb] = f
        },
        Gm = function(a) {
            if (nm(a, ["conversion", "remarketing"])) {
                var b = "conversion" === a.metadata.hit_type;
                b && a.eventName !== N.g.Aa || (gl(a, N.g.ba), b && (gl(a, N.g.ud), gl(a, N.g.rd), gl(a, N.g.sd), gl(a, N.g.qd), a.m[N.g.cg] = a.eventName))
            }
        },
        Hm = function(a) {
            if (nm(a, ["conversion", "remarketing"])) {
                var b = a.h,
                    c = P(b, N.g.yb);
                if (!0 === c || !1 === c) a.m[N.g.yb] = c;
                var d = P(b, N.g.X);
                if (!0 === d || !1 === d) a.m[N.g.Wg] = !d;
                !1 === d && nm(a, "remarketing") && (a.J = !0)
            }
        },
        Im = function(a) {
            nm(a, "conversion") && (gl(a, N.g.Dc), gl(a, N.g.Bd), gl(a, N.g.Gc), gl(a, N.g.Ed), gl(a, N.g.yc), gl(a, N.g.Cd))
        },
        Jm = function(a) {
            kl(a);
        },
        Km = function(a) {
            if (nm(a, ["conversion", "remarketing"]) && A.__gsaExp && A.__gsaExp.id) {
                var b = A.__gsaExp.id;
                if (pa(b)) try {
                    var c = Number(b());
                    isNaN(c) || (a.m[N.g.pg] = c)
                } catch (d) {}
            }
        },
        Lm = function(a) {
            if (nm(a, ["conversion", "remarketing"])) {
                var b = lm();
                void 0 !== b && (a.m[N.g.Mg] = b || "error");
                var c = yi();
                c && (a.m[N.g.ng] = c);
                var d = xi();
                d && (a.m[N.g.Cg] = d)
            }
        },
        Mm = function(a) {
            nm(a, ["conversion"]) && "1" === dh(!1)._up && (a.m[N.g.rg] = !0)
        },
        Nm = function(a) {
            nm(a, ["conversion"]) && (a.metadata.redact_click_ids = !!a.metadata.redact_ads_data && !bg(N.g.H))
        },
        Om = function(a) {
            if (nm(a, ["conversion", "user_data_lead", "user_data_web"]) && bg(N.g.H) && a.metadata.conversion_linker_enabled) {
                var b = a.metadata.cookie_options,
                    c = uk(b.prefix);
                "_gcl" === c && (c = "");
                var d = c;
                if (am.test(D.location.host) ? dm.test(D.location.href) || bm.test(D.location.href) :
                    !Kk(d)) {
                    var e = im(c);
                    e && (a.m[N.g.Mb] = e);
                    if (!c) {
                        var f = fm(nk() ? jk() : {}, bm);
                        f && (a.m[N.g.lg] = f)
                    }
                } else {
                    var g = jm(c);
                    g && (a.m[N.g.Qd] = g);
                    if (!c) {
                        var k = a.m[N.g.Ra];
                        b = G(b);
                        b.prefix = c;
                        var m = gm(k, b, !0).yj;
                        m && (a.m[N.g.Jd] = m)
                    }
                }
            }
        },
        Pm = function(a) {
            if (nm(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && bg(N.g.H)) {
                var b = !Q(3);
                if ("remarketing" !== a.metadata.hit_type || b) {
                    var c = a.metadata.cookie_options;
                    uh(c, "conversion" === a.metadata.hit_type && a.eventName !== N.g.Ca);
                    a.m[N.g.pd] =
                        ph[rh(c.prefix)]
                }
            }
        },
        Qm = function(a) {
            if (nm(a, ["conversion"])) {
                var b = ml(a.metadata.cookie_options);
                if (b && !a.m[N.g.Ma]) {
                    var c = zg(a.m[N.g.Ra]);
                    a.m[N.g.Ma] = c
                }
                b && (a.m[N.g.kb] = b, a.metadata.send_ccm_parallel_ping = !0)
            }
        },
        Rm = function(a) {
            var b = !bg(N.g.H);
            switch (a.metadata.hit_type) {
                case "user_data_lead":
                case "user_data_web":
                    a.J = !(!b && !a.metadata.consent_updated);
                    break;
                case "remarketing":
                    a.J = b;
                    break;
                case "conversion":
                    a.metadata.consent_updated && (a.m[N.g.Nf] = !0)
            }
        },
        Sm = function(a) {
            nm(a, ["conversion"]) && a.h.eventMetadata.is_external_event &&
                (a.m[N.g.Ug] = !0)
        },
        Tm = function(a) {
            var b;
            if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
                case "user_data_web":
                    b = 97;
                    a.metadata.speculative = !1;
                    break;
                case "user_data_lead":
                    b = 98;
                    a.metadata.speculative = !1;
                    break;
                case "conversion":
                    b = 99
            }!a.metadata.speculative && b && J(b);
            !0 === a.metadata.speculative && (a.J = !0)
        },
        um = !1;
    var Um = function(a) {
        if (bg(N.g.H)) return a;
        a = a.replace(/&url=([^&#]+)/, function(b, c) {
            var d = Ze(decodeURIComponent(c));
            return "&url=" + encodeURIComponent(d)
        });
        return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
            var d = Ze(decodeURIComponent(c));
            return "&ref=" + encodeURIComponent(d)
        })
    };
    var S = {
        C: {
            Lf: "ads_conversion_hit",
            Hk: "container_execute_start",
            Qf: "container_setup_end",
            jc: "container_setup_start",
            Pf: "container_execute_end",
            Rf: "container_yield_end",
            se: "container_yield_start",
            Og: "event_execute_end",
            Pg: "event_setup_end",
            Ic: "event_setup_start",
            Qg: "ga4_conversion_hit",
            Vb: "page_load",
            Nk: "pageview",
            Oa: "snippet_load",
            dh: "tag_callback_error",
            eh: "tag_callback_failure",
            fh: "tag_callback_success",
            gh: "tag_execute_end",
            Xb: "tag_execute_start"
        }
    };
    var Vm = !1,
        Wm = "L S Y E TC HTC".split(" "),
        Xm = ["S", "E"],
        Ym = ["TS", "TE"];
    var vn = function(a, b, c, d, e, f) {
            var g = {};
            return g
        },
        wn = function(a) {
            var b = !1;
            return b
        },
        xn = function(a, b) {},
        yn = function() {
            var a = {};
            return a
        },
        on = function() {
            var a = {};
            return a
        },
        zn = function() {},
        An = function(a, b, c) {},
        Bn = function() {
            function a(d) {
                return !qa(d) || 0 > d ? 0 : d
            }
            if (!Yd._li && Kb() && Kb().timing) {
                var b = Kb().timing.navigationStart,
                    c = qa(ye.get("gtm.start")) ? ye.get("gtm.start") :
                    0;
                Yd._li = {
                    cst: a(c - b),
                    cbt: a(ne - b)
                }
            }
        },
        Cn = function(a) {
            Kb() && Kb().mark(R.D + "_" + a + "_start")
        },
        Dn = function(a) {
            if (Kb()) {
                var b = Kb(),
                    c = R.D + "_" + a + "_start",
                    d = R.D + "_" + a + "_duration";
                b.measure(d, c);
                var e = Kb().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = Yd._p || {};
                void 0 === f[a] && (f[a] = e.duration, Yd._p = f);
                return e.duration
            }
        },
        En = function() {
            var a = vn("PAGEVIEW");
            if (fn(a.ob, "mark")[0]) {
                var b = Kb();
                b.clearMarks(a.ob);
                b.clearMeasures("GTM-" + S.C.Vb + ":to:PAGEVIEW")
            }
            var c = vn(S.C.Vb);
            wn(a) && xn(a, c)
        };
    var Fn = function(a, b) {
        var c, d = A.GooglebQhCsO;
        d || (d = {}, A.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var Gn = function(a, b) {
        var c = Yh(a, "fmt");
        if (b) {
            var d = Yh(a, "random"),
                e = Yh(a, "label") || "";
            if (!d) return !1;
            var f = Wj(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " ")));
            if (!Fn(f, b)) return !1
        }
        c && 4 != c && (a = $h(a, "rfmt", c));
        var g = $h(a, "fmt", 4);
        xb(g, function() {
            A.google_noFurtherRedirects && b && b.call && (A.google_noFurtherRedirects = null, b())
        }, void 0, void 0, D.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Hn = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical = e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    k;
                for (k in d) "google_business_vertical" !== k && (k in g || (g[k] = []), g[k].push(d[k]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        In = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d) {
                    var e = {};
                    b.push((e.id =
                        d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e))
                }
            }
            return b
        },
        Jn = function(a) {
            if (!a || !a.length) return [];
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && b.push({
                    item_id: d.id,
                    quantity: d.quantity,
                    value: d.price,
                    start_date: d.start_date,
                    end_date: d.end_date
                })
            }
            return b
        },
        Ln = function(a) {
            if (!a) return "";
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = [];
                d && (e.push(Kn(d.value)), e.push(Kn(d.quantity)),
                    e.push(Kn(d.item_id)), e.push(Kn(d.start_date)), e.push(Kn(d.end_date)), b.push("(" + e.join("*") + ")"))
            }
            return 0 < b.length ? b.join("") : ""
        },
        Kn = function(a) {
            return "number" !== typeof a && "string" !== typeof a ? "" : a.toString()
        },
        Nn = function(a, b) {
            var c = Mn(b);
            return "" + a + (a && c ? ";" : "") + c
        },
        Mn = function(a) {
            if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
            var b = [];
            l(a, function(c, d) {
                var e, f;
                if (ra(d)) {
                    for (var g = [], k = 0; k < d.length; ++k) {
                        var m = On(d[k]);
                        void 0 != m && g.push(m)
                    }
                    f = 0 !== g.length ? g.join(",") : void 0
                } else f =
                    On(d);
                e = f;
                var n = On(c);
                n && void 0 != e && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        On = function(a) {
            var b = typeof a;
            if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Pn = function(a, b) {
            var c = [],
                d = function(f, g) {
                    null != g && "" !== g && (!0 === g && (g = 1), !1 === g && (g = 0), c.push(f + "=" + encodeURIComponent(g)))
                },
                e = a.metadata.hit_type;
            "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
            l(b, d);
            return c.join("&")
        },
        Qn = function(a, b) {
            var c =
                a.metadata.hit_type,
                d = a.m[N.g.vc],
                e = bg(N.g.H),
                f = [],
                g, k = a.h.R,
                m, n = Eh() ? 2 : 3,
                p = 0,
                q = function(w) {
                    f.push(w);
                    w.Qa && p++
                };
            switch (c) {
                case "conversion":
                    m = "pagead/conversion";
                    var t = "";
                    e ? a.metadata.is_gcp_conversion ? (g = "https://www.google.com/", m = "pagead/1p-conversion") : g = "https://www.googleadservices.com/" : g = "https://pagead2.googlesyndication.com/";
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&sscte=1&ct_cookie_present=1");
                    q({
                        Va: "" + g + m + "/" + d + "/?" + Pn(a, b) + t,
                        format: n,
                        Qa: !0
                    });
                    a.metadata.send_ccm_parallel_ping && q({
                        Va: "" +
                            g + "ccm/conversion/" + d + "/?" + Pn(a, b) + t,
                        format: 2,
                        Qa: !0
                    });
                    a.metadata.is_gcp_conversion && (t = "&gcp=1&ct_cookie_present=1", q({
                        Va: "" + (e ? "https://googleads.g.doubleclick.net/" : g) + "pagead/viewthroughconversion/" + d + "/?" + Pn(a, b) + t,
                        format: n,
                        Qa: !0
                    }));
                    break;
                case "remarketing":
                    var u = b.data || "",
                        r = Hn(In(a.m[N.g.ba]));
                    if (r.length) {
                        for (var v = 0; v < r.length; v++) b.data = Nn(u, r[v]), q({
                            Va: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Pn(a, b),
                            format: n,
                            Qa: !0
                        }), a.metadata.send_fledge_experiment && q({
                            Va: Yl() +
                                "/td/rul/" + d + "?" + Pn(a, b),
                            format: 4,
                            Qa: !1
                        }), a.metadata.event_start_timestamp_ms += 1;
                        a.metadata.send_fledge_experiment = !1
                    } else q({
                        Va: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + Pn(a, b),
                        format: n,
                        Qa: !0
                    });
                    break;
                case "user_data_lead":
                    q({
                        Va: "https://google.com/pagead/form-data/" + d + "?" + Pn(a, b),
                        format: 1,
                        Qa: !0
                    });
                    break;
                case "user_data_web":
                    q({
                        Va: "https://google.com/ccm/form-data/" + d + "?" + Pn(a, b),
                        format: 1,
                        Qa: !0
                    })
            }
            1 < f.length && pa(a.h.R) && (k = Qa(a.h.R, p));
            Eh() || "conversion" !== c && "remarketing" !==
                c || !a.metadata.send_fledge_experiment || q({
                    Va: Yl() + "/td/rul/" + d + "?" + Pn(a, b),
                    format: 4,
                    Qa: !1
                });
            return {
                R: k,
                Gj: f
            }
        },
        Rn = function(a, b, c, d, e) {
            if (Q(70)) {
                var f = vn(S.C.Lf, R.eb, c.h.eventId, void 0, c.eventName);
                wn(f) && xn(f)
            }
            var g = function() {
                e && e()
            };
            switch (b) {
                case 1:
                    Hb(a);
                    e && e();
                    break;
                case 2:
                    Ab(a, g);
                    break;
                case 3:
                    var k = !1;
                    try {
                        k = Gn(a, g)
                    } catch (p) {
                        k = !1
                    }
                    k || Rn(a, 2, c, d, g);
                    break;
                case 4:
                    var m = "AW-" + c.m[N.g.vc],
                        n = c.m[N.g.Ra];
                    n && (m = m + "/" + n);
                    Xl(a, m)
            }
        },
        Sn = {},
        Tn = (Sn[N.g.Nf] = "gcu", Sn[N.g.Mb] = "gclaw", Sn[N.g.pd] = "auid", Sn[N.g.qd] =
            "dscnt", Sn[N.g.rd] = "fcntr", Sn[N.g.sd] = "flng", Sn[N.g.ud] = "mid", Sn[N.g.cg] = "bttype", Sn[N.g.Ra] = "label", Sn[N.g.wc] = "capi", Sn[N.g.la] = "currency_code", Sn[N.g.Bd] = "vdltv", Sn[N.g.ui] = "_dbg", Sn[N.g.Ed] = "oedeld", Sn[N.g.Pb] = "edid", Sn[N.g.ig] = "fledge", Sn[N.g.lg] = "gac", Sn[N.g.Jd] = "gacgb", Sn[N.g.mg] = "gacmcov", Sn[N.g.ng] = "gdpr", Sn[N.g.Qb] = "gdid", Sn[N.g.pg] = "gsaexp", Sn[N.g.qg] = "frm", Sn[N.g.rg] = "gtm_up", Sn[N.g.Ge] = "did", Sn[N.g.Dc] = void 0, Sn[N.g.Ka] = "url", Sn[N.g.La] = "ref", Sn[N.g.Tb] = "tiba", Sn[N.g.yb] = "rdp", Sn[N.g.kb] =
            "ecsid", Sn[N.g.Gc] = "delopc", Sn[N.g.Cg] = "gdpr_consent", Sn[N.g.Ma] = "oid", Sn[N.g.Gg] = "ec_lat", Sn[N.g.Hg] = "ec_meta", Sn[N.g.Ig] = "ec_m", Sn[N.g.Jg] = "ec_sel", Sn[N.g.Kg] = "ec_s", Sn[N.g.Lg] = "ec_mode", Sn[N.g.ra] = "userId", Sn[N.g.Mg] = "us_privacy", Sn[N.g.ja] = "value", Sn[N.g.Qd] = "gclgb", Sn[N.g.Ng] = "mcov", Sn[N.g.Tg] = "hn", Sn[N.g.Ug] = "gtm_ee", Sn[N.g.Wg] = "npa", Sn[N.g.vc] = null, Sn[N.g.zb] = null, Sn[N.g.Ja] = null, Sn[N.g.ba] = null, Sn),
        Vn = function(a) {
            Un(a, function(b) {
                for (var c = Qn(a, b), d = c.R, e = c.Gj, f = 0; f < e.length; f++) {
                    var g = e[f],
                        k = g.Va,
                        m = g.format,
                        n = g.Qa,
                        p = a.metadata.redact_ads_data ? Um(k) : k;
                    Rn(p, m, a, b, n ? d : void 0)
                }
            })
        },
        Un = function(a, b) {
            var c = a.metadata.hit_type,
                d = {},
                e = {},
                f = [],
                g = a.metadata.event_start_timestamp_ms;
            if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = g, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
            d.gtm = Qh();
            Qf() && "remarketing" !== c && (d.gcs = cg(), Rf() && (d.gcd = "G1" + Yf(Of)));
            if (a.m[N.g.zb]) {
                var k = a.m[N.g.zb].split("x");
                2 === k.length && (d.u_w = k[0], d.u_h = k[1])
            }
            if (a.m[N.g.Ja]) {
                var m = a.m[N.g.Ja];
                2 === m.length ? d.hl = m : 5 ===
                    m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5))
            }
            Q(13) && (Tn[N.g.Le] = "uaa", Tn[N.g.Me] = "uab", Tn[N.g.Ne] = "uafvl", Tn[N.g.Oe] = "uamb", Tn[N.g.Pe] = "uam", Tn[N.g.Qe] = "uap", Tn[N.g.Re] = "uapv", Tn[N.g.Se] = "uaw");
            l(a.m, function(r, v) {
                if (Tn.hasOwnProperty(r)) {
                    var w = Tn[r];
                    w && (d[w] = v)
                } else e[r] = v
            });
            var n = a.m[N.g.Dc];
            void 0 != n && "" !== n && (d.vdnc = String(n));
            var p = a.m[N.g.Cd];
            void 0 !== p && (d.shf = p);
            var q = a.m[N.g.yc];
            void 0 !== q && (d.delc = q);
            d.data = Mn(e);
            var t = a.m[N.g.ba];
            t && "conversion" === c && (d.iedeld = zf(t), d.item = Ln(Jn(t)));
            if (("conversion" === c || "user_data_lead" === c || "user_data_web" === c) && a.metadata.user_data && (!Q(68) || bg(N.g.H))) {
                var u = Hd(a.metadata.user_data);
                u && f.push(u.then(function(r) {
                    d.em = r.Bf;
                    if ("user_data_web" === c && 0 < r.dk) {
                        var v = nl(a.metadata.cookie_options);
                        d.ecsid = v
                    }
                }))
            }
            if (f.length) try {
                Promise.all(f).then(function() {
                    b(d)
                });
                return
            } catch (r) {}
            b(d)
        };
    var Wn = function() {
            this.h = {}
        },
        Xn = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Yn = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        $n = function(a, b, c, d) {
            if (!Qf()) {
                Zn(a, b, c, d);
                return
            }
            eg(function() {
                bg(N.g.H) ? Zn(a, b, c, d) : d && d()
            }, [N.g.H]);
        };
    var ao = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return ql("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return wl(c)
                    },
                    gclaw: function() {
                        return tl(b, c).join(".")
                    },
                    gac: function() {
                        return vl(c)
                    }
                },
                e = yl(b),
                f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                k = d[g],
                m = (0, d[f])(),
                n = "_gcl" !== b ? "" : k();
            m && Xn(a, f, m);
            n && Xn(a, g, n)
        },
        Zn = function(a, b, c, d) {
            c = c || {};
            var e = c.Yb || {},
                f = new Wn;
            Gd(b, function(g, k) {
                Xn(f, "em", g);
                Xn(f, "gtm", Qh());
                Qf() && (Xn(f, "gcs", cg()), Xn(f, "gcd", "G1" + Yf(Of)));
                ao(f, uk(e.prefix), c.ke);
                Xn(f, "auid", ph[rh(e.prefix)]);
                if (0 < k) {
                    var m = nl(e);
                    Xn(f, "ecsid", m)
                }
                var n = Yn(f);
                Hb("https://google.com/pagead/form-data/" + a + "?" + n);
                Hb("https://google.com/ccm/form-data/" + a + "?" + n);
                d && d()
            })
        };

    function bo(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Ye("" + c + b).href
        }
    }

    function co() {
        return !!Xd.Vd && "SGTM_TOKEN" !== Xd.Vd.split("@@").join("")
    };
    var fo = function(a, b, c, d) {
            if (!eo() && !Lh(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + Xd.ca,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var k = co();
                k && (f += "&sign=" + Xd.Vd);
                var m = fe || he ? bo(b, e + f) : void 0;
                if (!m) {
                    var n = Xd.nd + e;
                    k && rb && g && (n = rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = Uk("https://", "http://", n + f)
                }
                Jh().container[a] = {
                    state: 1,
                    context: d
                };
                xb(m)
            }
        },
        go = function(a, b, c) {
            var d;
            if (d = !eo()) {
                var e = Jh().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (Mh()) Jh().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Xd.ca + "&cx=c";
                    co() && (f += "&sign=" + Xd.Vd);
                    var g = fe || he ? bo(b, f) : void 0;
                    g || (g = Uk("https://", "http://", Xd.nd + f));
                    Jh().destination[a] = {
                        state: 1,
                        context: c
                    };
                    xb(g)
                }
        };

    function eo() {
        if (Eh()) {
            return !0
        }
        return !1
    };
    var ho = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        io = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        jo = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        ko = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        no = function(a) {
            var b = xe("gtm.allowlist") || xe("gtm.whitelist");
            b && J(9);
            de && (b = ["google", "gtagfl", "lcl", "zone"]);
            lo() && (de ?
                J(116) : J(117), mo && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && Ka(Ca(b), io),
                d = xe("gtm.blocklist") || xe("gtm.blacklist");
            d || (d = xe("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            lo() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ca(d).indexOf("google") && J(2);
            var e = d && Ka(Ca(d), jo),
                f = {};
            return function(g) {
                var k = g && g[Qb.Na];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = pe[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(k))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        J(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var t = !1;
                if (d) {
                    var u = 0 <= e.indexOf(k);
                    if (u) t = u;
                    else {
                        var r = va(e, m || []);
                        r && J(10);
                        t = r
                    }
                }
                var v = !n || t;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = va(e, ko));
                return f[k] = v
            }
        },
        mo = !1;
    var lo = function() {
        return ho.test(A.location && A.location.hostname)
    };
    var oo = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        po = {},
        qo = Object.freeze((po[N.g.Ea] = !0, po)),
        ro = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics="),
        to = function(a, b, c) {
            if (Ii && "config" === a && !(1 < Rk(b).K.length)) {
                var d, e = sb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = G(c.I);
                G(c.h, f);
                var g = [],
                    k;
                for (k in d) {
                    var m = so(d[k], f);
                    m.length && (ro && console.log(m), g.push(k))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        Si = Si ? Si + "!" + n : "&tdc=" + n
                    }
                    Ya("TAGGING",
                        oo[D.readyState] || 14)
                }
                d[b] = f
            }
        };

    function uo(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function so(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, t) {
                var u = t[q];
                return void 0 === u ? qo[q] : u
            },
            f;
        for (f in uo(a, b)) {
            var g = (d ? d + "." : "") + f,
                k = e(f, a),
                m = e(f, b),
                n = "object" === Mb(k) || "array" === Mb(k),
                p = "object" === Mb(m) || "array" === Mb(m);
            if (n && p) so(k, m, c, g);
            else if (n || p || k !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var vo = !1,
        wo = 0,
        xo = [];

    function yo(a) {
        if (!vo) {
            var b = D.createEventObject,
                c = "complete" == D.readyState,
                d = "interactive" == D.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                vo = !0;
                for (var e = 0; e < xo.length; e++) F(xo[e])
            }
            xo.push = function() {
                for (var f = 0; f < arguments.length; f++) F(arguments[f]);
                return 0
            }
        }
    }

    function zo() {
        if (!vo && 140 > wo) {
            wo++;
            try {
                D.documentElement.doScroll("left"), yo()
            } catch (a) {
                A.setTimeout(zo, 50)
            }
        }
    }
    var Ao = function(a) {
        vo ? a() : xo.push(a)
    };
    var Bo = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: R.D
        }
    };
    var Do = function(a, b) {
            this.h = !1;
            this.I = [];
            this.M = {
                tags: []
            };
            this.V = !1;
            this.m = this.B = 0;
            Co(this, a, b)
        },
        Eo = function(a, b, c, d) {
            if (ae.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Ob(d) && (e = G(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        Fo = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Go = function(a) {
            if (!a.h) {
                for (var b = a.I, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.I.length = 0
            }
        },
        Co = function(a, b, c) {
            void 0 !== b && Ho(a, b);
            c && A.setTimeout(function() {
                return Go(a)
            }, Number(c))
        },
        Ho =
        function(a, b) {
            var c = Ha(function() {
                return F(function() {
                    b(R.D, a.M)
                })
            });
            a.h ? c() : a.I.push(c)
        },
        Io = function(a) {
            a.B++;
            return Ha(function() {
                a.m++;
                a.V && a.m >= a.B && Go(a)
            })
        },
        Jo = function(a) {
            a.V = !0;
            a.m >= a.B && Go(a)
        };
    var Ko = {},
        Lo = function() {
            return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
        },
        Mo = !1;

    function Po() {
        return A.GoogleAnalyticsObject || "ga"
    }
    var Qo = function(a) {},
        Ro = function(a, b) {
            return function() {
                var c = Lo(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Wo(a, b, c, d) {
        var e = qc[a],
            f = Xo(a, b, c, d);
        if (!f) return null;
        var g = zc(e[Qb.bh], c, []);
        if (g && g.length) {
            var k = g[0];
            f = Wo(k.index, {
                R: f,
                P: 1 === k.rh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Xo(a, b, c, d) {
        function e() {
            if (f[Qb.Si]) k();
            else {
                var w = Ac(f, c, []),
                    y = w[Qb.ai];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!bg(y[x])) {
                            k();
                            return
                        }
                var B = Eo(c.Bb, String(f[Qb.Na]), Number(f[Qb.nb]), w[Qb.Ti]),
                    z = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!z) {
                        z = !0;
                        var E = Fa() - I;
                        Kj(c.id, qc[a], "5", E);
                        Fo(c.Bb, B, "success", E);
                        Q(70) && An(c, f, S.C.fh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!z) {
                        z = !0;
                        var E = Fa() - I;
                        Kj(c.id, qc[a], "6", E);
                        Fo(c.Bb, B, "failure", E);
                        Q(70) && An(c, f, S.C.eh);
                        k()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Kj(c.id, f, "1");
                var C = function() {
                    var E = Fa() - I;
                    Kj(c.id, f, "7", E);
                    Fo(c.Bb, B, "exception", E);
                    Q(70) && An(c, f, S.C.dh);
                    z || (z = !0, k())
                };
                if (Q(70)) {
                    var H = vn(S.C.Xb, R.D, c.id, Number(f[Qb.nb]), c.name, Ai(f));
                    wn(H)
                }
                var I = Fa();
                try {
                    yc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (E) {
                    C(E)
                }
                Q(70) && An(c, f, S.C.gh)
            }
        }
        var f = qc[a],
            g = b.R,
            k = b.P,
            m = b.terminate;
        if (c.tf(f)) return null;
        var n = zc(f[Qb.hh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Wo(p.index, {
                    R: g,
                    P: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.rh ? m : q
        }
        if (f[Qb.Xg] || f[Qb.Vi]) {
            var t = f[Qb.Xg] ? rc : c.Ak,
                u = g,
                r = k;
            if (!t[a]) {
                e = Ha(e);
                var v = Yo(a, t, e);
                g = v.R;
                k = v.P
            }
            return function() {
                t[a](u, r)
            }
        }
        return e
    }

    function Yo(a, b, c) {
        var d = [],
            e = [];
        b[a] = Zo(d, e, c);
        return {
            R: function() {
                b[a] = pp;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            P: function() {
                b[a] = Dp;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Zo(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function pp(a) {
        a()
    }

    function Dp(a, b) {
        b()
    };
    var Fp = function(a, b) {
            return 1 === arguments.length ? Ep("config", a) : Ep("config", a, b)
        },
        Gp = function(a, b, c) {
            c = c || {};
            c[N.g.Ab] = a;
            return Ep("event", b, c)
        };

    function Ep(a) {
        return arguments
    }
    var Hp = function() {
        this.h = [];
        this.m = []
    };
    Hp.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    Hp.prototype.listen = function(a) {
        this.m.push(a)
    };
    Hp.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Hp.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Jp = function(a, b, c) {
            Ip().enqueue(a, b, c)
        },
        Lp = function() {
            var a = Kp;
            Ip().listen(a)
        };

    function Ip() {
        var a = Yd.mb;
        a || (a = new Hp, Yd.mb = a);
        return a
    }
    var Tp = function(a) {
            var b = Yd.zones;
            return b ? b.getIsAllowedFn(Gh(), a) : function() {
                return !0
            }
        },
        Up = function(a) {
            var b = Yd.zones;
            return b ? b.isActive(Gh(), a) : !0
        };
    var Xp = function(a, b) {
        for (var c = [], d = 0; d < qc.length; d++)
            if (a[d]) {
                var e = qc[d];
                var f = Io(b.Bb);
                try {
                    var g = Wo(d, {
                        R: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = sc[p];
                        m.call(k, {
                            Oh: n,
                            Gh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Vp(d, b), f()
                } catch (u) {
                    f()
                }
            }
        c.sort(Wp);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length
    };

    function Wp(a, b) {
        var c, d = b.Gh,
            e = a.Gh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Oh,
                k = b.Oh;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function Vp(a, b) {
        if (Ii) {
            var c = function(d) {
                var e = b.tf(qc[d]) ? "3" : "4",
                    f = zc(qc[d][Qb.bh], b, []);
                f && f.length && c(f[0].index);
                Kj(b.id, qc[d], e);
                var g = zc(qc[d][Qb.hh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var $p = !1,
        Yp;
    var eq = function(a) {
        var b = Fa(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (Q(70)) {
            var f = vn(S.C.Ic, R.D, c, void 0, e);
            wn(f)
        }
        if ("gtm.js" === e) {
            if ($p) return !1;
            $p = !0;
        }
        var m, n = !1;
        if (Up(c)) m = Tp(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            m = Tp(Number.MAX_SAFE_INTEGER)
        }
        Jj(c,
            e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            t = {
                id: c,
                priorityId: d,
                name: e,
                tf: no(m),
                Ak: [],
                zh: function() {
                    J(6);
                    Ya("HEALTH", 0)
                },
                lh: aq(),
                mh: bq(c),
                Bb: new Do(function() {
                    if (Q(70)) {
                        var x = vn(S.C.Ic, R.D, c, void 0, e),
                            B = vn(S.C.Og, R.D, c, void 0, e);
                        wn(B);
                        xn(B, x);
                        if ("gtm.load" === e) {
                            var z = vn(S.C.jc, R.D),
                                C = vn(S.C.Pf, R.D);
                            wn(C);
                            xn(C, z);
                            zn();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            u = Ec(t);
        n && (u = cq(u));
        if (Q(70)) {
            var r = vn(S.C.Ic, R.D, c, void 0, e),
                v = vn(S.C.Pg, R.D, c, void 0, e);
            wn(v);
            xn(v, r)
        }
        var w = Xp(u, t),
            y = !1;
        Jo(t.Bb);
        "gtm.js" !== e && "gtm.sync" !== e || Qo(R.D);
        return dq(u, w) || y
    };

    function bq(a) {
        return function(b) {
            Ii && (Pb(b) || Tj(a, "input", b))
        }
    }

    function aq() {
        var a = {};
        a.event = Be("event", 1);
        a.ecommerce = Be("ecommerce", 1);
        a.gtm = Be("gtm");
        a.eventModel = Be("eventModel");
        return a
    }

    function cq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(qc[c][Qb.Na]);
                if ($d[d] || void 0 !== qc[c][Qb.Wi] || qe[d]) b[c] = !0;
                Q(58) || 0 !== qc[c][Qb.Na].indexOf("__ccd") && 0 !== qc[c][Qb.Na].indexOf("__ogt") && "__set_product_settings" !== qc[c][Qb.Na] || (b[c] = !0)
            }
        return b
    }

    function dq(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && qc[c] && !ae[String(qc[c][Qb.Na])]) return !0;
        return !1
    }
    var gq = function(a, b, c, d) {
            fq.push("event", [b, a], c, d)
        },
        hq = function(a, b, c, d) {
            fq.push("get", [a, b], c, d)
        },
        iq = function() {
            this.status = 1;
            this.I = {};
            this.h = {};
            this.M = {};
            this.V = null;
            this.B = {};
            this.m = !1
        },
        jq = function(a, b, c, d) {
            var e = Fa();
            this.type = a;
            this.m = e;
            this.W = b || "";
            this.h = c;
            this.messageContext = d
        },
        kq = function() {
            this.m = {};
            this.B = {};
            this.h = []
        },
        lq = function(a, b) {
            var c = Rk(b);
            return a.m[c.T] = a.m[c.T] || new iq
        },
        mq = function(a, b, c, d) {
            if (d.W) {
                var e = lq(a, d.W),
                    f = e.V;
                if (f) {
                    var g = G(c),
                        k = G(e.I[d.W]),
                        m = G(e.B),
                        n = G(e.h),
                        p = G(a.B),
                        q = {};
                    if (Ii) try {
                        q = G(ue)
                    } catch (v) {
                        J(72)
                    }
                    var t = Rk(d.W).prefix,
                        u = function(v) {
                            Sj(d.messageContext.eventId, t, v);
                            var w = g[N.g.Ob];
                            w && F(w)
                        },
                        r = Pl(Nl(Ml(Ll(Jl(Il(Kl(Hl(Gl(Fl(new El(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("2")
                            }
                        }), function() {
                            if (u) {
                                var v = u;
                                u = void 0;
                                v("3")
                            }
                        }));
                    try {
                        Sj(d.messageContext.eventId, t, "1"), to(d.type, d.W, r), f(d.W, b, d.m, r)
                    } catch (v) {
                        Sj(d.messageContext.eventId, t, "4")
                    }
                }
            }
        };
    kq.prototype.register = function(a, b, c) {
        var d = lq(this, a);
        3 !== d.status && (d.V = b, d.status = 3, c && (G(d.h, c), d.h = c), this.flush())
    };
    kq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Rk(c)) return;
            if (c) {
                var e = Rk(c);
                e && 1 === lq(this, c).status && (lq(this, c).status = 2, this.push("require", [{}], e.T, {}))
            }
            lq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new jq(a, c, b, d));
        d.deferrable || this.flush()
    };
    kq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.W || lq(this, f.W).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = lq(this, f.W);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.h[0], function(t, u) {
                            G(La(t, u), b.B)
                        });
                        break;
                    case "config":
                        g = lq(this, f.W);
                        e.Za = {};
                        l(f.h[0], function(t) {
                            return function(u, r) {
                                G(La(u, r), t.Za)
                            }
                        }(e));
                        var k = !!e.Za[N.g.Hc];
                        delete e.Za[N.g.Hc];
                        var m = Rk(f.W),
                            n = m.T === m.id;
                        k || (n ? g.B = {} : g.I[f.W] = {});
                        g.m && k || mq(this, N.g.wa, e.Za, f);
                        g.m = !0;
                        n ? G(e.Za, g.B) : (G(e.Za, g.I[f.W]), J(70));
                        d = !0;
                        break;
                    case "event":
                        g = lq(this, f.W);
                        e.gd = {};
                        l(f.h[0], function(t) {
                            return function(u, r) {
                                G(La(u, r), t.gd)
                            }
                        }(e));
                        mq(this, f.h[1], e.gd, f);
                        break;
                    case "get":
                        g = lq(this, f.W);
                        var p = {},
                            q = (p[N.g.Ta] = f.h[0], p[N.g.jb] = f.h[1], p);
                        mq(this, N.g.Ca, q, f)
                }
                this.h.shift();
                nq(this, f)
            }
            e = {
                Za: e.Za,
                gd: e.gd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var nq = function(a, b) {
            if ("require" !== b.type)
                if (b.W)
                    for (var c = lq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        oq = function(a, b) {
            var c = fq,
                d = G(b);
            G(lq(c, a).h, d);
            lq(c, a).h = d
        },
        fq = new kq;
    var pq = {},
        qq = {},
        rq = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    md: d.md,
                    jd: d.jd
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.md = Rk(f), d.md && (sa(Hh(), function(p) {
                    return function(q) {
                        return p.md.T === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = pq[f] || [];
                    d.jd = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.jd[q] = !0
                        }
                    }(d));
                    for (var k = Gh(), m = 0; m < k.length; m++)
                        if (d.jd[k[m]]) {
                            b = b.concat(Hh());
                            break
                        }
                    var n = qq[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                Wj: b,
                Yj: c
            }
        },
        sq = function(a) {
            l(pq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        tq = function(a) {
            l(qq, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var uq = "HA GF G UA AW DC MC".split(" "),
        vq = !1,
        wq = !1;

    function xq(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: re()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var yq = {
            config: function(a, b) {
                var c = xq(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Ob(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = Rk(a[1]);
                    if (e) {
                        Jj(c.eventId, "gtag.config");
                        var f = e.T,
                            g = e.id !== f;
                        if (g ? -1 === Hh().indexOf(f) : -1 === Gh().indexOf(f)) {
                            if (!Q(61) || !d[N.g.Md]) {
                                var k = d[N.g.qa] || fq.B[N.g.qa];
                                g ? go(f, k, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : fo(f, k, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (ce && !g && !d[N.g.Hc]) {
                                var m = wq;
                                wq = !0;
                                if (m) return
                            }
                            vq || J(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    tq(e.id);
                                    var n = e.id,
                                        p = d[N.g.Kd] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var t = qq[p[q]] || [];
                                        qq[p[q]] = t;
                                        0 > t.indexOf(n) && t.push(n)
                                    }
                                } else {
                                    sq(e.id);
                                    var u = e.id,
                                        r = d[N.g.Kd] || "default";
                                    r = r.toString().split(",");
                                    for (var v = 0; v < r.length; v++) {
                                        var w = pq[r[v]] || [];
                                        pq[r[v]] = w;
                                        0 > w.indexOf(u) && w.push(u)
                                    }
                                }
                            delete d[N.g.Kd];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[N.g.Ob];
                            for (var x = g ? [e.id] : Hh(), B = 0; B < x.length; B++) {
                                var z = G(b);
                                fq.push("config", [d], x[B], z)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = xq(a, b),
                        d = a[1];
                    "default" === d ? $f(a[2]) : "update" === d && ag(a[2], c)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Ob(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = G(e), e[N.g.Ob] && (g.eventCallback = e[N.g.Ob]), e[N.g.Gd] && (g.eventTimeout = e[N.g.Gd]));
                    var k = xq(a, b),
                        m = k.eventId,
                        n = k.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        t = q && q[N.g.Ab];
                    void 0 === t && (t = xe(N.g.Ab, 2), void 0 === t && (t = "default"));
                    if (h(t) || ra(t)) {
                        var u = t.toString().replace(/\s+/g, "").split(","),
                            r = rq(u),
                            v = r.Wj,
                            w = r.Yj;
                        if (w.length)
                            for (var y = q && q[N.g.qa] || fq.B[N.g.qa], x = 0; x < w.length; x++) {
                                var B = Rk(w[x]);
                                B && go(B.T, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = Tk(v)
                    } else p = void 0;
                    var z = p;
                    if (z) {
                        Jj(m,
                            c);
                        for (var C = [], H = 0; H < z.length; H++) {
                            var I = z[H],
                                E = G(b);
                            if (-1 !== uq.indexOf(I.prefix)) {
                                var K = G(d),
                                    M = E.eventMetadata || {};
                                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                                E.eventMetadata = M;
                                delete K[N.g.Ob];
                                gq(c, K, I.id, E)
                            }
                            C.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < z.length ? g.eventModel[N.g.Ab] = C.join() : delete g.eventModel[N.g.Ab];
                        vq || J(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
                    var c = Rk(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        vq || J(43);
                        var f = fq.B[N.g.qa];
                        if (!sa(Hh(), function(k) {
                                return c.T === k
                            })) go(c.T, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== uq.indexOf(c.prefix)) {
                            xq(a, b);
                            var g = {};
                            Wf(G((g[N.g.Ta] = d, g[N.g.jb] = e, g)));
                            hq(d, function(k) {
                                F(function() {
                                    return e(k)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    vq = !0;
                    var c = xq(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Ob(a[1]) ? c = G(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Ob(a[2]) || ra(a[2]) ? c[a[1]] = G(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = xq(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    G(c);
                    var g = G(c);
                    fq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    Q(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        zq = {
            policy: !0
        };
    var Aq = function(a) {
            var b = A[Xd.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Bq = function(a) {
            var b = A[Xd.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Cq = !1,
        Dq = [];

    function Eq() {
        if (!Cq) {
            Cq = !0;
            for (var a = 0; a < Dq.length; a++) F(Dq[a])
        }
    }
    var Fq = function(a) {
        Cq ? F(a) : Dq.push(a)
    };
    var Wq = function(a) {
        if (Vq(a)) return a;
        this.h = a
    };
    Wq.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Vq = function(a) {
        return !a || "object" !== Mb(a) || Ob(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Wq.prototype.getUntrustedMessageValue = Wq.prototype.getUntrustedMessageValue;
    var Xq = 0,
        Yq = {},
        Zq = [],
        $q = [],
        ar = !1,
        br = !1;

    function cr(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var dr = function(a) {
            return A[Xd.ca].push(a)
        },
        er = function(a, b) {
            var c = Yd[Xd.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = A.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (A.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function fr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Ae(e), Ae(e, f))
        });
        me || (me = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = re(), a["gtm.uniqueEventId"] = d, Ae("gtm.uniqueEventId", d));
        return eq(a)
    }

    function gr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (ya(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function hr() {
        var a;
        if ($q.length) a = $q.shift();
        else if (Zq.length) a = Zq.shift();
        else return;
        var b;
        var c = a;
        if (ar || !gr(c.message)) b = c;
        else {
            ar = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = re());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                k = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Zq.unshift(k, c);
            if (Ii && R.D) {
                var m;
                if (R.Ye) {
                    var n = R.D,
                        p = Jh().destination[n];
                    m = p && p.context
                } else {
                    var q = R.D,
                        t = Jh().container[q];
                    m = t && t.context
                }
                var u = m,
                    r, v = Ye(A.location.href);
                r = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    y = u && u.source,
                    x = R.D,
                    B = R.eb,
                    z = R.Ye;
                Ui || (Ui = r);
                Ti.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (z ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function ir() {
        for (var a = !1, b; !br && (b = hr());) {
            br = !0;
            delete ue.eventModel;
            we();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) br = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var k = f[g],
                            m = xe(k, 1);
                        if (ra(m) || Ob(m)) m = G(m);
                        ve[k] = m
                    }
                try {
                    if (pa(d)) try {
                        d.call(ye)
                    } catch (C) {} else if (ra(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                t = n.slice(1),
                                u = xe(p.join("."), 2);
                            if (null != u) try {
                                u[q].apply(u, t)
                            } catch (C) {}
                        }
                    } else {
                        var r = void 0,
                            v = !1;
                        if (ya(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = yq[d[0]];
                                    if (w && (!e.fromContainerExecution || !zq[d[0]])) {
                                        r = w(d, e);
                                        break a
                                    }
                                }
                                r = void 0
                            }(v = r && "set" === d[0] && !!r.event) && J(101)
                        }
                        else r = d;
                        if (r) {
                            var y = fr(r, e);
                            a = y || a;
                            v && y && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && we(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = Yq[String(x)] || [], z = 0; z < B.length; z++) $q.push(jr(B[z]));
                        B.length && $q.sort(cr);
                        delete Yq[String(x)];
                        x > Xq && (Xq = x)
                    }
                    br = !1
                }
            }
        }
        return !a
    }

    function kr() {
        if (Q(70) && lr()) {
            var b = vn(S.C.se, R.D),
                c = vn(S.C.Rf, R.D);
            wn(c) && xn(c, b)
        }
        var d = ir();
        try {
            Aq(R.D)
        } catch (e) {}
        return d
    }

    function Kp(a) {
        if (Xq < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Yq[b] = Yq[b] || [];
            Yq[b].push(a)
        } else $q.push(jr(a)), $q.sort(cr), F(function() {
            br || ir()
        })
    }

    function jr(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var mr = function() {
            function a(g) {
                var k = {};
                if (Vq(g)) {
                    var m = g;
                    g = Vq(m) ? m.getUntrustedMessageValue() : void 0;
                    k.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: k
                }
            }
            var b = sb(Xd.ca, []),
                c = Yd[Xd.ca] = Yd[Xd.ca] || {};
            !0 === c.pruned && J(83);
            Yq = Ip().get();
            Lp();
            Ao(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            Fq(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < Yd.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var k = 0; k < arguments.length; k++) g[k] = new Wq(arguments[k])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(t) {
                    return a(t)
                });
                Zq.push.apply(Zq, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (J(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return ir() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            Zq.push.apply(Zq, e);
            if (lr()) {
                if (Q(70)) {
                    var f = vn(S.C.se, R.D);
                    wn(f)
                }
                F(kr)
            }
        },
        lr = function() {
            var a = !0;
            return a
        };

    function nr(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Fa();
        return b < c + 3E5 && b > c - 9E5
    }

    function or(a) {
        return a && 0 === a.indexOf("pending:") ? nr(a.substr(8)) : !1
    };
    var vc = {};
    vc.Rd = new String("undefined");
    var Pr = A.clearTimeout,
        Qr = A.setTimeout,
        V = function(a, b, c, d) {
            if (Eh()) {
                b && F(b)
            } else return xb(a, b, c, d)
        },
        Rr = function() {
            return new Date
        },
        Sr = function() {
            return A.location.href
        },
        Tr = function(a) {
            return We(Ye(a), "fragment")
        },
        Ur = function(a) {
            return Xe(Ye(a))
        },
        Vr = function(a, b) {
            return xe(a, b || 2)
        },
        Wr = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = dr(a)) : d = dr(a);
            return d
        },
        Xr = function(a, b) {
            A[a] = b
        },
        W = function(a, b, c) {
            b &&
                (void 0 === A[a] || c && !A[a]) && (A[a] = b);
            return A[a]
        },
        Yr = function(a, b, c) {
            return mg(a, b, void 0 === c ? !0 : !!c)
        },
        Zr = function(a, b, c) {
            return 0 === vg(a, b, c)
        },
        $r = function(a, b) {
            if (Eh()) {
                b && F(b)
            } else zb(a, b)
        },
        as = function(a) {
            return !!vr(a, "init", !1)
        },
        bs = function(a) {
            tr(a, "init", !0)
        },
        cs = function(a, b, c) {
            Ii && (Pb(a) || Tj(c, b, a))
        };
    var As = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Bs(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Cs = new ua;

    function Ds(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Cs.get(e);
            f || (f = new RegExp(b, d), Cs.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Es(a, b) {
        function c(g) {
            var k = Ye(g),
                m = We(k, "protocol"),
                n = We(k, "host", !0),
                p = We(k, "port"),
                q = We(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Fs(a) {
        return Gs(a) ? 1 : 0
    }

    function Gs(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = G(a, {});
                G({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Fs(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < As.length; g++) {
                            var k = As[g];
                            if (b[k]) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Bs(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Ds(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Es(b, c)
        }
        return !1
    };
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);

    function bt() {
        return A.gaGlobal = A.gaGlobal || {}
    }
    var ct = function() {
            var a = bt();
            a.hid = a.hid || ta();
            return a.hid
        },
        dt = function(a, b) {
            var c = bt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var zt = function() {
            var a = !0;
            zi(7) && zi(9) && zi(10) || (a = !1);
            return a
        },
        At = function() {
            var a = !0;
            zi(3) && zi(4) || (a = !1);
            return a
        };
    var cu = window,
        du = document,
        eu = function(a) {
            var b = cu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === cu["ga-disable-" + a]) return !0;
            try {
                var c = cu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = gg("AMP_TOKEN", String(du.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return du.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function mu(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Fa] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var wu = function(a, b) {};

    function vu(a, b) {
        var c = function() {};
        return c
    }

    function xu(a, b, c) {};
    var yu = function(a, b) {
            var c;
            c = b ? [Lm, Mm, Om, ym, Cm, Qm, Dm, Pm, Jm, zm, Tm, Em, Nm, wm, Rm, tm] : [xm, om, Am, pm, qm, rm, sm, Fm, Gm, Im, Km, Bm, Hm, vm, Sm];
            for (var d = 0; d < c.length && (c[d](a), !a.J); d++);
        },
        zu = function(a, b, c, d) {
            var e = new fl(b, c, d);
            e.metadata.hit_type = a;
            e.metadata.speculative = !0;
            e.metadata.event_start_timestamp_ms = Fa();
            return e
        },
        Au = function(a) {
            var b = a.indexOf("/"),
                c = 3 <= b,
                d = a.substring(3, c ? b : a.length);
            return {
                id: a,
                prefix: "AW",
                T: "AW-" + d,
                K: [d, c ? a.substring(b + 1) : void 0]
            }
        },
        Bu = function(a, b, c, d) {
            function e() {
                for (var q = 0; q <
                    g.length; q++) {
                    var t = g[q];
                    t.J || (yu(g[q], !0), t.metadata.speculative || t.J || Vn(t))
                }
            }
            var f = Rk(a);
            !f && d.F && (f = Au(a));
            if (f) {
                var g = [];
                if (d.eventMetadata.hit_type_override) {
                    var k = d.eventMetadata.hit_type_override;
                    Array.isArray(k) || (k = [k]);
                    for (var m = 0; m < k.length; m++) {
                        var n = zu(k[m], f, b, d);
                        n.metadata.speculative = !1;
                        g.push(n)
                    }
                } else b === N.g.wa && g.push(zu("landing_page", f, b, d)), g.push(zu("conversion", f, b, d)), g.push(zu("user_data_lead", f, b, d)), g.push(zu("user_data_web", f, b, d)), g.push(zu("remarketing", f, b, d));
                for (var p =
                        0; p < g.length; p++) yu(g[p], !1);
                Uf(function() {
                    for (var q = [], t = [], u = 0; u < g.length; u++) {
                        var r = g[u];
                        q.push(r.J);
                        t.push(r.metadata.speculative)
                    }
                    e();
                    Nf(N.g.H) || Vf(function(v) {
                        for (var w = v.consentEventId, y = v.consentPriorityId, x = 0; x < g.length; x++) {
                            var B = g[x];
                            B.metadata.consent_updated = !0;
                            B.metadata.speculative = t[x];
                            B.metadata.event_start_timestamp_ms = Fa();
                            B.J = q[x];
                            B.metadata.consent_event_id = w;
                            B.metadata.consent_priority_id = y
                        }
                        e()
                    }, [N.g.H])
                }, [N.g.H])
            }
        };
    var Du = function() {
            var a = Yd.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Fa() - b) return Promise.resolve(c)
            }
            try {
                return Promise.race([D.interestCohort().then(function(d) {
                    Yd.floc = {
                        ts: Fa(),
                        floc: d
                    };
                    return d
                }), new Promise(function(d) {
                    A.setTimeout(function() {
                        return d()
                    }, Cu)
                })]).catch(function() {})
            } catch (d) {}
        },
        Cu = Number("200"),
        Eu = !1;
    var Vv = vu;
    var Xv = encodeURI,
        X = encodeURIComponent,
        Yv = function(a, b, c) {
            Ab(a, b, c)
        },
        Zv = function(a, b) {
            if (!a) return !1;
            var c = We(Ye(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        $v = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = {
        o: {}
    };
    Z.o.e = ["google"],
        function() {
            (function(a) {
                Z.__e = a;
                Z.__e.s = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Z.o.v = ["google"],
        function() {
            (function(a) {
                Z.__v = a;
                Z.__v.s = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = Vr(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                cs(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();

    Z.o.rep = ["google"],
        function() {
            (function(a) {
                Z.__rep = a;
                Z.__rep.s = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0;
                Z.__rep.isInfrastructure = !1
            })(function(a) {
                var b = Rk(a.vtp_containerId),
                    c;
                switch (b.prefix) {
                    case "AW":
                        c = Bu;
                        break;
                    case "DC":
                        c = Ou;
                        break;
                    case "GF":
                        c = Uu;
                        break;
                    case "HA":
                        c = Zu;
                        break;
                    case "UA":
                        c = vv;
                        break;
                    case "MC":
                        break;
                    default:
                        F(a.vtp_gtmOnFailure);
                        return
                }
                c ? (F(a.vtp_gtmOnSuccess), fq.register(a.vtp_containerId, c), a.vtp_remoteConfig && oq(a.vtp_containerId, a.vtp_remoteConfig || {})) : F(a.vtp_gtmOnFailure)
            })
        }();
    Z.o.cid = ["google"],
        function() {
            (function(a) {
                Z.__cid = a;
                Z.__cid.s = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0;
                Z.__cid.isInfrastructure = !1
            })(function() {
                return R.D
            })
        }();











    Z.o.get = ["google"],
        function() {
            (function(a) {
                Z.__get = a;
                Z.__get.s = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0;
                Z.__get.isInfrastructure = !1
            })(function(a) {
                var b = a.vtp_settings,
                    c = b.eventParameters || {},
                    d = String(a.vtp_eventName),
                    e = {};
                e.eventId = a.vtp_gtmEventId;
                e.priorityId = a.vtp_gtmPriorityId;
                a.vtp_deferrable && (e.deferrable = !0);
                var f = Gp(String(b.streamId), d, c);
                Jp(f, e.eventId, e);
                a.vtp_gtmOnSuccess()
            })
        }();





    var rx = {};
    rx.dataLayer = ye;
    rx.callback = function(a) {
        oe.hasOwnProperty(a) && pa(oe[a]) && oe[a]();
        delete oe[a]
    };
    rx.bootstrap = 0;
    rx._spx = !1;

    function sx() {
        Yd[R.D] = Yd[R.D] || rx;
        R.eb && (Yd["ctid_" + R.eb] = rx);
        Kh();
        Mh() || l(Nh(), function(a, b) {
            go(a, b.transportUrl, b.context);
            J(92)
        });
        Ia(pe, Z.o);
        xc = Fc
    }
    (function(a) {
        function b() {
            m = D.documentElement.getAttribute("data-tag-assistant-present");
            nr(m) && (k = g.Ki)
        }
        if (!A["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (D.referrer) {
                var d = Ye(D.referrer);
                c = "cct.google" === Ve(d, "host")
            }
            if (!c) {
                var e = mg("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (A["__TAGGY_INSTALLED"] = !0, xb("https://cct.google/taggy/agent.js"))
        }
        if (je) a();
        else {
            var f = function(r) {
                    var v = "GTM",
                        w = "GTM";
                    de ? (v = "OGT", w = "GTAG") : je && (w = v = "OPT");
                    var y = A["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        A["google.tagmanager.debugui2.queue"] = y, xb("https://" + Xd.nd + "/debug/bootstrap?id=" + R.D + "&src=" + w + "&cond=" + r + "&gtm=" + Qh()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: rb,
                            containerProduct: v,
                            debug: !1,
                            id: R.D,
                            isGte: ce
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    Xd.bi && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Kk: 1,
                    Li: 2,
                    Xi: 3,
                    di: 4,
                    Ki: 5
                },
                k = void 0,
                m = void 0,
                n = We(A.location, "query", !1, void 0, "gtm_debug");
            nr(n) && (k = g.Li);
            if (!k && D.referrer) {
                var p = Ye(D.referrer);
                "tagassistant.google.com" === Ve(p, "host") && (k = g.Xi)
            }
            if (!k) {
                var q =
                    mg("__TAG_ASSISTANT");
                q.length && q[0].length && (k = g.di)
            }
            k || b();
            if (!k && or(m)) {
                var t = function() {
                        if (u) return !0;
                        u = !0;
                        b();
                        k && rb ? f(k) : a()
                    },
                    u = !1;
                Bb(D, "TADebugSignal", function() {
                    t()
                }, !1);
                A.setTimeout(function() {
                    t()
                }, 200)
            } else k && rb ? f(k) : a()
        }
    })(function() {
        var a = !1;
        a && Cn("INIT");
        if (Q(70)) {
            var b =
                vn(S.C.jc, R.D);
            wn(b)
        }
        Ef().m();
        wi();
        if (R.eb ? Yd["ctid_" + R.eb] : Yd[R.D]) {
            var c = Yd.zones;
            c && c.unregisterChild(Gh());
        } else {
            (Q(11) || Q(13) || Q(55) || Q(48)) && ek();
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) nc.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) qc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) pc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                oc.push(u)
            }
            sc = Z;
            tc = Fs;
            sx();
            mr();
            vo = !1;
            wo = 0;
            if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) yo();
            else {
                Bb(D, "DOMContentLoaded", yo);
                Bb(D, "readystatechange", yo);
                if (D.createEventObject && D.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !A.frameElement
                    } catch (H) {}
                    v && zo()
                }
                Bb(A, "load", yo)
            }
            Cq = !1;
            "complete" === D.readyState ? Eq() : Bb(A, "load", Eq);
            Ii && A.setInterval(Ni, 864E5);
            Q(46) && (J(111), Ya("HEALTH", 1));
            Q(47) && (J(112), Ya("HEALTH", 2));
            ne = Fa();
            rx.bootstrap = ne;
            if (a) {
                var B = Dn("INIT");
            }
            if (Q(70)) {
                var z = vn(S.C.Qf, R.D);
                if (wn(z)) {
                    var C = vn(S.C.jc, R.D);
                    xn(z, C)
                }
            }
        }
    });

})()