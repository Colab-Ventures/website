! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = e.length,
      n = rt.type(e);
    return "function" === n || rt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
  }

  function i(e, t, n) {
    if (rt.isFunction(t)) return rt.grep(e, function(e, i) {
      return !!t.call(e, i, e) !== n
    });
    if (t.nodeType) return rt.grep(e, function(e) {
      return e === t !== n
    });
    if ("string" == typeof t) {
      if (ft.test(t)) return rt.filter(t, e, n);
      t = rt.filter(t, e)
    }
    return rt.grep(e, function(e) {
      return rt.inArray(e, t) >= 0 !== n
    })
  }

  function r(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e
  }

  function o(e) {
    var t = xt[e] = {};
    return rt.each(e.match(bt) || [], function(e, n) {
      t[n] = !0
    }), t
  }

  function a() {
    pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pt.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
  }

  function s() {
    (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (a(), rt.ready())
  }

  function u(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var i = "data-" + t.replace(Tt, "-$1").toLowerCase();
      if (n = e.getAttribute(i), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? rt.parseJSON(n) : n
        } catch (r) {}
        rt.data(e, t, n)
      } else n = void 0
    }
    return n
  }

  function l(e) {
    var t;
    for (t in e)
      if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0
  }

  function c(e, t, n, i) {
    if (rt.acceptData(e)) {
      var r, o, a = rt.expando,
        s = e.nodeType,
        u = s ? rt.cache : e,
        l = s ? e[a] : e[a] && a;
      if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = Q.pop() || rt.guid++ : a), u[l] || (u[l] = s ? {} : {
        toJSON: rt.noop
      }), ("object" == typeof t || "function" == typeof t) && (i ? u[l] = rt.extend(u[l], t) : u[l].data = rt.extend(u[l].data, t)), o = u[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[rt.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
    }
  }

  function d(e, t, n) {
    if (rt.acceptData(e)) {
      var i, r, o = e.nodeType,
        a = o ? rt.cache : e,
        s = o ? e[rt.expando] : rt.expando;
      if (a[s]) {
        if (t && (i = n ? a[s] : a[s].data)) {
          rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in i ? t = [t] : (t = rt.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
          for (; r--;) delete i[t[r]];
          if (n ? !l(i) : !rt.isEmptyObject(i)) return
        }(n || (delete a[s].data, l(a[s]))) && (o ? rt.cleanData([e], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
      }
    }
  }

  function f() {
    return !0
  }

  function h() {
    return !1
  }

  function p() {
    try {
      return pt.activeElement
    } catch (e) {}
  }

  function m(e) {
    var t = Ot.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement)
      for (; t.length;) n.createElement(t.pop());
    return n
  }

  function g(e, t) {
    var n, i, r = 0,
      o = typeof e.getElementsByTagName !== Ft ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ft ? e.querySelectorAll(t || "*") : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || rt.nodeName(i, t) ? o.push(i) : rt.merge(o, g(i, t));
    return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
  }

  function v(e) {
    At.test(e.type) && (e.defaultChecked = e.checked)
  }

  function y(e, t) {
    return rt.nodeName(e, "table") && rt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function b(e) {
    return e.type = (null !== rt.find.attr(e, "type")) + "/" + e.type, e
  }

  function x(e) {
    var t = Ut.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function w(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++) rt._data(n, "globalEval", !t || rt._data(t[i], "globalEval"))
  }

  function C(e, t) {
    if (1 === t.nodeType && rt.hasData(e)) {
      var n, i, r, o = rt._data(e),
        a = rt._data(t, o),
        s = o.events;
      if (s) {
        delete a.handle, a.events = {};
        for (n in s)
          for (i = 0, r = s[n].length; r > i; i++) rt.event.add(t, n, s[n][i])
      }
      a.data && (a.data = rt.extend({}, a.data))
    }
  }

  function F(e, t) {
    var n, i, r;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !nt.noCloneEvent && t[rt.expando]) {
        r = rt._data(t);
        for (i in r.events) rt.removeEvent(t, i, r.handle);
        t.removeAttribute(rt.expando)
      }
      "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), nt.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
  }

  function E(t, n) {
    var i, r = rt(n.createElement(t)).appendTo(n.body),
      o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : rt.css(r[0], "display");
    return r.detach(), o
  }

  function T(e) {
    var t = pt,
      n = Zt[e];
    return n || (n = E(e, t), "none" !== n && n || (Kt = (Kt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Kt[0].contentWindow || Kt[0].contentDocument).document, t.write(), t.close(), n = E(e, t), Kt.detach()), Zt[e] = n), n
  }

  function S(e, t) {
    return {
      get: function() {
        var n = e();
        return null != n ? n ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
      }
    }
  }

  function k(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = hn.length; r--;)
      if (t = hn[r] + n, t in e) return t;
    return i
  }

  function N(e, t) {
    for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = rt._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Nt(i) && (o[a] = rt._data(i, "olddisplay", T(i.nodeName)))) : (r = Nt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n : rt.css(i, "display"))));
    for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
    return e
  }

  function D(e, t, n) {
    var i = ln.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
  }

  function A(e, t, n, i, r) {
    for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += rt.css(e, n + kt[o], !0, r)), i ? ("content" === n && (a -= rt.css(e, "padding" + kt[o], !0, r)), "margin" !== n && (a -= rt.css(e, "border" + kt[o] + "Width", !0, r))) : (a += rt.css(e, "padding" + kt[o], !0, r), "padding" !== n && (a += rt.css(e, "border" + kt[o] + "Width", !0, r)));
    return a
  }

  function L(e, t, n) {
    var i = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = en(e),
      a = nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, o);
    if (0 >= r || null == r) {
      if (r = tn(e, t, o), (0 > r || null == r) && (r = e.style[t]), rn.test(r)) return r;
      i = a && (nt.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + A(e, t, n || (a ? "border" : "content"), i, o) + "px"
  }

  function j(e, t, n, i, r) {
    return new j.prototype.init(e, t, n, i, r)
  }

  function H() {
    return setTimeout(function() {
      pn = void 0
    }), pn = rt.now()
  }

  function q(e, t) {
    var n, i = {
        height: e
      },
      r = 0;
    for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = kt[r], i["margin" + n] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function M(e, t, n) {
    for (var i, r = (xn[t] || []).concat(xn["*"]), o = 0, a = r.length; a > o; o++)
      if (i = r[o].call(n, t, e)) return i
  }

  function O(e, t, n) {
    var i, r, o, a, s, u, l, c, d = this,
      f = {},
      h = e.style,
      p = e.nodeType && Nt(e),
      m = rt._data(e, "fxshow");
    n.queue || (s = rt._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
      s.unqueued || u()
    }), s.unqueued++, d.always(function() {
      d.always(function() {
        s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
      })
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = rt.css(e, "display"), c = "none" === l ? rt._data(e, "olddisplay") || T(e.nodeName) : l, "inline" === c && "none" === rt.css(e, "float") && (nt.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
      h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
    }));
    for (i in t)
      if (r = t[i], gn.exec(r)) {
        if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
          if ("show" !== r || !m || void 0 === m[i]) continue;
          p = !0
        }
        f[i] = m && m[i] || rt.style(e, i)
      } else l = void 0;
    if (rt.isEmptyObject(f)) "inline" === ("none" === l ? T(e.nodeName) : l) && (h.display = l);
    else {
      m ? "hidden" in m && (p = m.hidden) : m = rt._data(e, "fxshow", {}), o && (m.hidden = !p), p ? rt(e).show() : d.done(function() {
        rt(e).hide()
      }), d.done(function() {
        var t;
        rt._removeData(e, "fxshow");
        for (t in f) rt.style(e, t, f[t])
      });
      for (i in f) a = M(p ? m[i] : 0, i, d), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
    }
  }

  function P(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (i = rt.camelCase(n), r = t[i], o = e[n], rt.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = rt.cssHooks[i], a && "expand" in a) {
        o = a.expand(o), delete e[i];
        for (n in o) n in e || (e[n] = o[n], t[n] = r)
      } else t[i] = r
  }

  function _(e, t, n) {
    var i, r, o = 0,
      a = bn.length,
      s = rt.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (r) return !1;
        for (var t = pn || H(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
      },
      l = s.promise({
        elem: e,
        props: rt.extend({}, t),
        opts: rt.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: pn || H(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = rt.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(i), i
        },
        stop: function(t) {
          var n = 0,
            i = t ? l.tweens.length : 0;
          if (r) return this;
          for (r = !0; i > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
        }
      }),
      c = l.props;
    for (P(c, l.opts.specialEasing); a > o; o++)
      if (i = bn[o].call(l, e, c, l.opts)) return i;
    return rt.map(c, M, l), rt.isFunction(l.opts.start) && l.opts.start.call(e, l), rt.fx.timer(rt.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
  }

  function R(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, r = 0,
        o = t.toLowerCase().match(bt) || [];
      if (rt.isFunction(n))
        for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function $(e, t, n, i) {
    function r(s) {
      var u;
      return o[s] = !0, rt.each(e[s] || [], function(e, s) {
        var l = s(t, n, i);
        return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
      }), u
    }
    var o = {},
      a = e === In;
    return r(t.dataTypes[0]) || !o["*"] && r("*")
  }

  function z(e, t) {
    var n, i, r = rt.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && rt.extend(!0, e, n), e
  }

  function B(e, t, n) {
    for (var i, r, o, a, s = e.contents, u = e.dataTypes;
         "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (a in s)
        if (s[a] && s[a].test(r)) {
          u.unshift(a);
          break
        }
    if (u[0] in n) o = u[0];
    else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break
        }
        i || (i = a)
      }
      o = o || i
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
  }

  function W(e, t, n, i) {
    var r, o, a, s, u, l = {},
      c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (a = l[u + " " + o] || l["* " + o], !a)
            for (r in l)
              if (s = r.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[r] : l[r] !== !0 && (o = s[0], c.unshift(s[1]));
                break
              }
          if (a !== !0)
            if (a && e["throws"]) t = a(t);
            else try {
              t = a(t)
            } catch (d) {
              return {
                state: "parsererror",
                error: a ? d : "No conversion from " + u + " to " + o
              }
            }
        }
    return {
      state: "success",
      data: t
    }
  }

  function I(e, t, n, i) {
    var r;
    if (rt.isArray(t)) rt.each(t, function(t, r) {
      n || Qn.test(e) ? i(e, r) : I(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
    });
    else if (n || "object" !== rt.type(t)) i(e, t);
    else
      for (r in t) I(e + "[" + r + "]", t[r], n, i)
  }

  function X() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }

  function V() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }

  function U(e) {
    return rt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var Q = [],
    Y = Q.slice,
    J = Q.concat,
    G = Q.push,
    K = Q.indexOf,
    Z = {},
    et = Z.toString,
    tt = Z.hasOwnProperty,
    nt = {},
    it = "1.11.1",
    rt = function(e, t) {
      return new rt.fn.init(e, t)
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    st = /-([\da-z])/gi,
    ut = function(e, t) {
      return t.toUpperCase()
    };
  rt.fn = rt.prototype = {
    jquery: it,
    constructor: rt,
    selector: "",
    length: 0,
    toArray: function() {
      return Y.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
    },
    pushStack: function(e) {
      var t = rt.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return rt.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(rt.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    slice: function() {
      return this.pushStack(Y.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: G,
    sort: Q.sort,
    splice: Q.splice
  }, rt.extend = rt.fn.extend = function() {
    var e, t, n, i, r, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
      if (null != (r = arguments[s]))
        for (i in r) e = a[i], n = r[i], a !== n && (l && n && (rt.isPlainObject(n) || (t = rt.isArray(n))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, a[i] = rt.extend(l, o, n)) : void 0 !== n && (a[i] = n));
    return a
  }, rt.extend({
    expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === rt.type(e)
    },
    isArray: Array.isArray || function(e) {
      return "array" === rt.type(e)
    },
    isWindow: function(e) {
      return null != e && e == e.window
    },
    isNumeric: function(e) {
      return !rt.isArray(e) && e - parseFloat(e) >= 0
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== rt.type(e) || e.nodeType || rt.isWindow(e)) return !1;
      try {
        if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      if (nt.ownLast)
        for (t in e) return tt.call(e, t);
      for (t in e);
      return void 0 === t || tt.call(e, t)
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
    },
    globalEval: function(t) {
      t && rt.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(at, "ms-").replace(st, ut)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, i) {
      var r, o = 0,
        a = e.length,
        s = n(e);
      if (i) {
        if (s)
          for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
        else
          for (o in e)
            if (r = t.apply(e[o], i), r === !1) break
      } else if (s)
        for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
      else
        for (o in e)
          if (r = t.call(e[o], o, e[o]), r === !1) break; return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(ot, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (n(Object(e)) ? rt.merge(i, "string" == typeof e ? [e] : e) : G.call(i, e)), i
    },
    inArray: function(e, t, n) {
      var i;
      if (t) {
        if (K) return K.call(t, e, n);
        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
          if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, t) {
      for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
      if (n !== n)
        for (; void 0 !== t[i];) e[r++] = t[i++];
      return e.length = r, e
    },
    grep: function(e, t, n) {
      for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
      return r
    },
    map: function(e, t, i) {
      var r, o = 0,
        a = e.length,
        s = n(e),
        u = [];
      if (s)
        for (; a > o; o++) r = t(e[o], o, i), null != r && u.push(r);
      else
        for (o in e) r = t(e[o], o, i), null != r && u.push(r);
      return J.apply([], u)
    },
    guid: 1,
    proxy: function(e, t) {
      var n, i, r;
      return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (n = Y.call(arguments, 2), i = function() {
        return e.apply(t || this, n.concat(Y.call(arguments)))
      }, i.guid = e.guid = e.guid || rt.guid++, i) : void 0
    },
    now: function() {
      return +new Date
    },
    support: nt
  }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    Z["[object " + t + "]"] = t.toLowerCase()
  });
  var lt = function(e) {
    function t(e, t, n, i) {
      var r, o, a, s, u, l, d, h, p, m;
      if ((t ? t.ownerDocument || t : $) !== j && L(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (q && !i) {
        if (r = yt.exec(e))
          if (a = r[1]) {
            if (9 === s) {
              if (o = t.getElementById(a), !o || !o.parentNode) return n;
              if (o.id === a) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
          } else {
            if (r[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
            if ((a = r[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
          }
        if (w.qsa && (!M || !M.test(e))) {
          if (h = d = R, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (l = T(e), (d = t.getAttribute("id")) ? h = d.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + f(l[u]);
            p = bt.test(e) && c(t.parentNode) || t, m = l.join(",")
          }
          if (m) try {
            return Z.apply(n, p.querySelectorAll(m)), n
          } catch (g) {} finally {
            d || t.removeAttribute("id")
          }
        }
      }
      return k(e.replace(ut, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
      }
      var t = [];
      return e
    }

    function i(e) {
      return e[R] = !0, e
    }

    function r(e) {
      var t = j.createElement("div");
      try {
        return !!e(t)
      } catch (n) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
    }

    function a(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
      if (i) return i;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e
      }
    }

    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }

    function l(e) {
      return i(function(t) {
        return t = +t, i(function(n, i) {
          for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
        })
      })
    }

    function c(e) {
      return e && typeof e.getElementsByTagName !== U && e
    }

    function d() {}

    function f(e) {
      for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
      return i
    }

    function h(e, t, n) {
      var i = t.dir,
        r = n && "parentNode" === i,
        o = B++;
      return t.first ? function(t, n, o) {
        for (; t = t[i];)
          if (1 === t.nodeType || r) return e(t, n, o)
      } : function(t, n, a) {
        var s, u, l = [z, o];
        if (a) {
          for (; t = t[i];)
            if ((1 === t.nodeType || r) && e(t, n, a)) return !0
        } else
          for (; t = t[i];)
            if (1 === t.nodeType || r) {
              if (u = t[R] || (t[R] = {}), (s = u[i]) && s[0] === z && s[1] === o) return l[2] = s[2];
              if (u[i] = l, l[2] = e(t, n, a)) return !0
            }
      }
    }

    function p(e) {
      return e.length > 1 ? function(t, n, i) {
        for (var r = e.length; r--;)
          if (!e[r](t, n, i)) return !1;
        return !0
      } : e[0]
    }

    function m(e, n, i) {
      for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
      return i
    }

    function g(e, t, n, i, r) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
      return a
    }

    function v(e, t, n, r, o, a) {
      return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, a)), i(function(i, a, s, u) {
        var l, c, d, f = [],
          h = [],
          p = a.length,
          v = i || m(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !i && t ? v : g(v, f, e, s, u),
          b = n ? o || (i ? e : p || r) ? [] : a : y;
        if (n && n(y, b, s, u), r)
          for (l = g(b, h), r(l, [], s, u), c = l.length; c--;)(d = l[c]) && (b[h[c]] = !(y[h[c]] = d));
        if (i) {
          if (o || e) {
            if (o) {
              for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
              o(null, b = [], l, u)
            }
            for (c = b.length; c--;)(d = b[c]) && (l = o ? tt.call(i, d) : f[c]) > -1 && (i[l] = !(a[l] = d))
          }
        } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : Z.apply(a, b)
      })
    }

    function y(e) {
      for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
        return e === t
      }, a, !0), l = h(function(e) {
        return tt.call(t, e) > -1
      }, a, !0), c = [function(e, n, i) {
        return !o && (i || n !== N) || ((t = n).nodeType ? u(e, n, i) : l(e, n, i))
      }]; r > s; s++)
        if (n = C.relative[e[s].type]) c = [h(p(c), n)];
        else {
          if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
            for (i = ++s; r > i && !C.relative[e[i].type]; i++);
            return v(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(ut, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
          }
          c.push(n)
        }
      return p(c)
    }

    function b(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function(i, a, s, u, l) {
          var c, d, f, h = 0,
            p = "0",
            m = i && [],
            v = [],
            y = N,
            b = i || o && C.find.TAG("*", l),
            x = z += null == y ? 1 : Math.random() || .1,
            w = b.length;
          for (l && (N = a !== j && a); p !== w && null != (c = b[p]); p++) {
            if (o && c) {
              for (d = 0; f = e[d++];)
                if (f(c, a, s)) {
                  u.push(c);
                  break
                }
              l && (z = x)
            }
            r && ((c = !f && c) && h--, i && m.push(c))
          }
          if (h += p, r && p !== h) {
            for (d = 0; f = n[d++];) f(m, v, a, s);
            if (i) {
              if (h > 0)
                for (; p--;) m[p] || v[p] || (v[p] = G.call(u));
              v = g(v)
            }
            Z.apply(u, v), l && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
          }
          return l && (z = x, N = y), m
        };
      return r ? i(a) : a
    }
    var x, w, C, F, E, T, S, k, N, D, A, L, j, H, q, M, O, P, _, R = "sizzle" + -new Date,
      $ = e.document,
      z = 0,
      B = 0,
      W = n(),
      I = n(),
      X = n(),
      V = function(e, t) {
        return e === t && (A = !0), 0
      },
      U = "undefined",
      Q = 1 << 31,
      Y = {}.hasOwnProperty,
      J = [],
      G = J.pop,
      K = J.push,
      Z = J.push,
      et = J.slice,
      tt = J.indexOf || function(e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (this[t] === e) return t;
          return -1
        },
      nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      it = "[\\x20\\t\\r\\n\\f]",
      rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ot = rt.replace("w", "w#"),
      at = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
      st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
      ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
      lt = new RegExp("^" + it + "*," + it + "*"),
      ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
      dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
      ft = new RegExp(st),
      ht = new RegExp("^" + ot + "$"),
      pt = {
        ID: new RegExp("^#(" + rt + ")"),
        CLASS: new RegExp("^\\.(" + rt + ")"),
        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + at),
        PSEUDO: new RegExp("^" + st),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + nt + ")$", "i"),
        needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
      },
      mt = /^(?:input|select|textarea|button)$/i,
      gt = /^h\d$/i,
      vt = /^[^{]+\{\s*\[native \w/,
      yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      bt = /[+~]/,
      xt = /'|\\/g,
      wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
      Ct = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      };
    try {
      Z.apply(J = et.call($.childNodes), $.childNodes), J[$.childNodes.length].nodeType
    } catch (Ft) {
      Z = {
        apply: J.length ? function(e, t) {
          K.apply(e, et.call(t))
        } : function(e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, E = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1
    }, L = t.setDocument = function(e) {
      var t, n = e ? e.ownerDocument || e : $,
        i = n.defaultView;
      return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, H = n.documentElement, q = !E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
        L()
      }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
        L()
      })), w.attributes = r(function(e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = r(function(e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function(e) {
          return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
        }), w.getById = r(function(e) {
        return H.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
      }), w.getById ? (C.find.ID = function(e, t) {
        if (typeof t.getElementById !== U && q) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : []
        }
      }, C.filter.ID = function(e) {
        var t = e.replace(wt, Ct);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }) : (delete C.find.ID, C.filter.ID = function(e) {
        var t = e.replace(wt, Ct);
        return function(e) {
          var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
          return n && n.value === t
        }
      }), C.find.TAG = w.getElementsByTagName ? function(e, t) {
        return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
      } : function(e, t) {
        var n, i = [],
          r = 0,
          o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[r++];) 1 === n.nodeType && i.push(n);
          return i
        }
        return o
      }, C.find.CLASS = w.getElementsByClassName && function(e, t) {
          return typeof t.getElementsByClassName !== U && q ? t.getElementsByClassName(e) : void 0
        }, O = [], M = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
      }), r(function(e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
      })), (w.matchesSelector = vt.test(P = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
        w.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), O.push("!=", st)
      }), M = M.length && new RegExp(M.join("|")), O = O.length && new RegExp(O.join("|")), t = vt.test(H.compareDocumentPosition), _ = t || vt.test(H.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function(e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e) return !0;
        return !1
      }, V = t ? function(e, t) {
        if (e === t) return A = !0, 0;
        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === $ && _($, e) ? -1 : t === n || t.ownerDocument === $ && _($, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & i ? -1 : 1)
      } : function(e, t) {
        if (e === t) return A = !0, 0;
        var i, r = 0,
          o = e.parentNode,
          s = t.parentNode,
          u = [e],
          l = [t];
        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
        if (o === s) return a(e, t);
        for (i = e; i = i.parentNode;) u.unshift(i);
        for (i = t; i = i.parentNode;) l.unshift(i);
        for (; u[r] === l[r];) r++;
        return r ? a(u[r], l[r]) : u[r] === $ ? -1 : l[r] === $ ? 1 : 0
      }, n) : j
    }, t.matches = function(e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== j && L(e), n = n.replace(dt, "='$1']"), !(!w.matchesSelector || !q || O && O.test(n) || M && M.test(n))) try {
        var i = P.call(e, n);
        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
      } catch (r) {}
      return t(n, j, null, [e]).length > 0
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== j && L(e), _(e, t)
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== j && L(e);
      var n = C.attrHandle[t.toLowerCase()],
        i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
      return void 0 !== i ? i : w.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function(e) {
      var t, n = [],
        i = 0,
        r = 0;
      if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(V), A) {
        for (; t = e[r++];) t === e[r] && (i = n.push(r));
        for (; i--;) e.splice(n[i], 1)
      }
      return D = null, e
    }, F = t.getText = function(e) {
      var t, n = "",
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += F(e)
        } else if (3 === r || 4 === r) return e.nodeValue
      } else
        for (; t = e[i++];) n += F(t);
      return n
    }, C = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: pt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
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
        ATTR: function(e) {
          return e[1] = e[1].replace(wt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return pt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ft.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(wt, Ct).toLowerCase();
          return "*" === e ? function() {
            return !0
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        },
        CLASS: function(e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && W(e, function(e) {
              return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
            })
        },
        ATTR: function(e, n, i) {
          return function(r) {
            var o = t.attr(r, e);
            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
          }
        },
        CHILD: function(e, t, n, i, r) {
          var o = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === i && 0 === r ? function(e) {
            return !!e.parentNode
          } : function(t, n, u) {
            var l, c, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
              g = t.parentNode,
              v = s && t.nodeName.toLowerCase(),
              y = !u && !s;
            if (g) {
              if (o) {
                for (; m;) {
                  for (d = t; d = d[m];)
                    if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                  p = m = "only" === e && !p && "nextSibling"
                }
                return !0
              }
              if (p = [a ? g.firstChild : g.lastChild], a && y) {
                for (c = g[R] || (g[R] = {}), l = c[e] || [], h = l[0] === z && l[1], f = l[0] === z && l[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                  if (1 === d.nodeType && ++f && d === t) {
                    c[e] = [z, h, f];
                    break
                  }
              } else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === z) f = l[1];
              else
                for (;
                  (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[R] || (d[R] = {}))[e] = [z, f]), d !== t)););
              return f -= r, f === i || f % i === 0 && f / i >= 0
            }
          }
        },
        PSEUDO: function(e, n) {
          var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
            for (var i, r = o(e, n), a = r.length; a--;) i = tt.call(e, r[a]), e[i] = !(t[i] = r[a])
          }) : function(e) {
            return o(e, 0, r)
          }) : o
        }
      },
      pseudos: {
        not: i(function(e) {
          var t = [],
            n = [],
            r = S(e.replace(ut, "$1"));
          return r[R] ? i(function(e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
          }) : function(e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop()
          }
        }),
        has: i(function(e) {
          return function(n) {
            return t(e, n).length > 0
          }
        }),
        contains: i(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || F(t)).indexOf(e) > -1
          }
        }),
        lang: i(function(e) {
          return ht.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
            function(t) {
              var n;
              do
                if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
              while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function(e) {
          return e === H
        },
        focus: function(e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0
        },
        parent: function(e) {
          return !C.pseudos.empty(e)
        },
        header: function(e) {
          return gt.test(e.nodeName)
        },
        input: function(e) {
          return mt.test(e.nodeName)
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        },
        first: l(function() {
          return [0]
        }),
        last: l(function(e, t) {
          return [t - 1]
        }),
        eq: l(function(e, t, n) {
          return [0 > n ? n + t : n]
        }),
        even: l(function(e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: l(function(e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: l(function(e, t, n) {
          for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
          return e
        }),
        gt: l(function(e, t, n) {
          for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
          return e
        })
      }
    }, C.pseudos.nth = C.pseudos.eq;
    for (x in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) C.pseudos[x] = s(x);
    for (x in {
      submit: !0,
      reset: !0
    }) C.pseudos[x] = u(x);
    return d.prototype = C.filters = C.pseudos, C.setFilters = new d, T = t.tokenize = function(e, n) {
      var i, r, o, a, s, u, l, c = I[e + " "];
      if (c) return n ? 0 : c.slice(0);
      for (s = e, u = [], l = C.preFilter; s;) {
        (!i || (r = lt.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), i = !1, (r = ct.exec(s)) && (i = r.shift(), o.push({
          value: i,
          type: r[0].replace(ut, " ")
        }), s = s.slice(i.length));
        for (a in C.filter) !(r = pt[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
          value: i,
          type: a,
          matches: r
        }), s = s.slice(i.length));
        if (!i) break
      }
      return n ? s.length : s ? t.error(e) : I(e, u).slice(0)
    }, S = t.compile = function(e, t) {
      var n, i = [],
        r = [],
        o = X[e + " "];
      if (!o) {
        for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[R] ? i.push(o) : r.push(o);
        o = X(e, b(r, i)), o.selector = e
      }
      return o
    }, k = t.select = function(e, t, n, i) {
      var r, o, a, s, u, l = "function" == typeof e && e,
        d = !i && T(e = l.selector || e);
      if (n = n || [], 1 === d.length) {
        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && q && C.relative[o[1].type]) {
          if (t = (C.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (r = pt.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
          if ((u = C.find[s]) && (i = u(a.matches[0].replace(wt, Ct), bt.test(o[0].type) && c(t.parentNode) || t))) {
            if (o.splice(r, 1), e = i.length && f(o), !e) return Z.apply(n, i), n;
            break
          }
      }
      return (l || S(e, d))(i, t, !q, n, bt.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !!A, L(), w.sortDetached = r(function(e) {
      return 1 & e.compareDocumentPosition(j.createElement("div"))
    }), r(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function(e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && r(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function(e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), r(function(e) {
      return null == e.getAttribute("disabled")
    }) || o(nt, function(e, t, n) {
      var i;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  rt.find = lt, rt.expr = lt.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = lt.uniqueSort, rt.text = lt.getText, rt.isXMLDoc = lt.isXML, rt.contains = lt.contains;
  var ct = rt.expr.match.needsContext,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ft = /^.[^:#\[\.,]*$/;
  rt.filter = function(e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? rt.find.matchesSelector(i, e) ? [i] : [] : rt.find.matches(e, rt.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, rt.fn.extend({
    find: function(e) {
      var t, n = [],
        i = this,
        r = i.length;
      if ("string" != typeof e) return this.pushStack(rt(e).filter(function() {
        for (t = 0; r > t; t++)
          if (rt.contains(i[t], this)) return !0
      }));
      for (t = 0; r > t; t++) rt.find(e, i[t], n);
      return n = this.pushStack(r > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
      return this.pushStack(i(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(i(this, e || [], !0))
    },
    is: function(e) {
      return !!i(this, "string" == typeof e && ct.test(e) ? rt(e) : e || [], !1).length
    }
  });
  var ht, pt = e.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    gt = rt.fn.init = function(e, t) {
      var n, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : mt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
        if (n[1]) {
          if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pt, !0)), dt.test(n[1]) && rt.isPlainObject(t))
            for (n in t) rt.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this
        }
        if (i = pt.getElementById(n[2]), i && i.parentNode) {
          if (i.id !== n[2]) return ht.find(e);
          this.length = 1, this[0] = i
        }
        return this.context = pt, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(rt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
    };
  gt.prototype = rt.fn, ht = rt(pt);
  var vt = /^(?:parents|prev(?:Until|All))/,
    yt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  rt.extend({
    dir: function(e, t, n) {
      for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
      return i
    },
    sibling: function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  }), rt.fn.extend({
    has: function(e) {
      var t, n = rt(e, this),
        i = n.length;
      return this.filter(function() {
        for (t = 0; i > t; t++)
          if (rt.contains(this, n[t])) return !0
      })
    },
    closest: function(e, t) {
      for (var n, i = 0, r = this.length, o = [], a = ct.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > i; i++)
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, e))) {
            o.push(n);
            break
          }
      return this.pushStack(o.length > 1 ? rt.unique(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), rt.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return rt.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return rt.dir(e, "parentNode", n)
    },
    next: function(e) {
      return r(e, "nextSibling")
    },
    prev: function(e) {
      return r(e, "previousSibling")
    },
    nextAll: function(e) {
      return rt.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return rt.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return rt.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return rt.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return rt.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return rt.sibling(e.firstChild)
    },
    contents: function(e) {
      return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
    }
  }, function(e, t) {
    rt.fn[e] = function(n, i) {
      var r = rt.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = rt.filter(i, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
    }
  });
  var bt = /\S+/g,
    xt = {};
  rt.Callbacks = function(e) {
    e = "string" == typeof e ? xt[e] || o(e) : rt.extend({}, e);
    var t, n, i, r, a, s, u = [],
      l = !e.once && [],
      c = function(o) {
        for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = u.length, t = !0; u && r > a; a++)
          if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break
          }
        t = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
      },
      d = {
        add: function() {
          if (u) {
            var i = u.length;
            ! function o(t) {
              rt.each(t, function(t, n) {
                var i = rt.type(n);
                "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
              })
            }(arguments), t ? r = u.length : n && (s = i, c(n))
          }
          return this
        },
        remove: function() {
          return u && rt.each(arguments, function(e, n) {
            for (var i;
                 (i = rt.inArray(n, u, i)) > -1;) u.splice(i, 1), t && (r >= i && r--, a >= i && a--)
          }), this
        },
        has: function(e) {
          return e ? rt.inArray(e, u) > -1 : !(!u || !u.length)
        },
        empty: function() {
          return u = [], r = 0, this
        },
        disable: function() {
          return u = l = n = void 0, this
        },
        disabled: function() {
          return !u
        },
        lock: function() {
          return l = void 0, n || d.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, n) {
          return !u || i && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
        },
        fire: function() {
          return d.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return d
  }, rt.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
          ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
          ["notify", "progress", rt.Callbacks("memory")]
        ],
        n = "pending",
        i = {
          state: function() {
            return n
          },
          always: function() {
            return r.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return rt.Deferred(function(n) {
              rt.each(t, function(t, o) {
                var a = rt.isFunction(e[t]) && e[t];
                r[o[1]](function() {
                  var e = a && a.apply(this, arguments);
                  e && rt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? rt.extend(e, i) : i
          }
        },
        r = {};
      return i.pipe = i.then, rt.each(t, function(e, o) {
        var a = o[2],
          s = o[3];
        i[o[1]] = a.add, s && a.add(function() {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
          return r[o[0] + "With"](this === r ? i : this, arguments), this
        }, r[o[0] + "With"] = a.fireWith
      }), i.promise(r), e && e.call(r, r), r
    },
    when: function(e) {
      var t, n, i, r = 0,
        o = Y.call(arguments),
        a = o.length,
        s = 1 !== a || e && rt.isFunction(e.promise) ? a : 0,
        u = 1 === s ? e : rt.Deferred(),
        l = function(e, n, i) {
          return function(r) {
            n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
          }
        };
      if (a > 1)
        for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, t)) : --s;
      return s || u.resolveWith(i, o), u.promise()
    }
  });
  var wt;
  rt.fn.ready = function(e) {
    return rt.ready.promise().done(e), this
  }, rt.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? rt.readyWait++ : rt.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? !--rt.readyWait : !rt.isReady) {
        if (!pt.body) return setTimeout(rt.ready);
        rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (wt.resolveWith(pt, [rt]), rt.fn.triggerHandler && (rt(pt).triggerHandler("ready"), rt(pt).off("ready")))
      }
    }
  }), rt.ready.promise = function(t) {
    if (!wt)
      if (wt = rt.Deferred(), "complete" === pt.readyState) setTimeout(rt.ready);
      else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
      else {
        pt.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
        var n = !1;
        try {
          n = null == e.frameElement && pt.documentElement
        } catch (i) {}
        n && n.doScroll && ! function r() {
          if (!rt.isReady) {
            try {
              n.doScroll("left")
            } catch (e) {
              return setTimeout(r, 50)
            }
            a(), rt.ready()
          }
        }()
      }
    return wt.promise(t)
  };
  var Ct, Ft = "undefined";
  for (Ct in rt(nt)) break;
  nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, rt(function() {
    var e, t, n, i;
    n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ft && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
  }),
    function() {
      var e = pt.createElement("div");
      if (null == nt.deleteExpando) {
        nt.deleteExpando = !0;
        try {
          delete e.test
        } catch (t) {
          nt.deleteExpando = !1
        }
      }
      e = null
    }(), rt.acceptData = function(e) {
    var t = rt.noData[(e.nodeName + " ").toLowerCase()],
      n = +e.nodeType || 1;
    return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
  };
  var Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Tt = /([A-Z])/g;
  rt.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !l(e)
    },
    data: function(e, t, n) {
      return c(e, t, n)
    },
    removeData: function(e, t) {
      return d(e, t)
    },
    _data: function(e, t, n) {
      return c(e, t, n, !0)
    },
    _removeData: function(e, t) {
      return d(e, t, !0)
    }
  }), rt.fn.extend({
    data: function(e, t) {
      var n, i, r, o = this[0],
        a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
          for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), u(o, i, r[i])));
          rt._data(o, "parsedAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        rt.data(this, e)
      }) : arguments.length > 1 ? this.each(function() {
        rt.data(this, e, t)
      }) : o ? u(o, e, rt.data(o, e)) : void 0
    },
    removeData: function(e) {
      return this.each(function() {
        rt.removeData(this, e)
      })
    }
  }), rt.extend({
    queue: function(e, t, n) {
      var i;
      return e ? (t = (t || "fx") + "queue", i = rt._data(e, t), n && (!i || rt.isArray(n) ? i = rt._data(e, t, rt.makeArray(n)) : i.push(n)), i || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = rt.queue(e, t),
        i = n.length,
        r = n.shift(),
        o = rt._queueHooks(e, t),
        a = function() {
          rt.dequeue(e, t)
        };
      "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return rt._data(e, n) || rt._data(e, n, {
          empty: rt.Callbacks("once memory").add(function() {
            rt._removeData(e, t + "queue"), rt._removeData(e, n)
          })
        })
    }
  }), rt.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var n = rt.queue(this, e, t);
        rt._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && rt.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        rt.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, i = 1,
        r = rt.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --i || r.resolveWith(o, [o])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = rt._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
      return s(), r.promise(t)
    }
  });
  var St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    kt = ["Top", "Right", "Bottom", "Left"],
    Nt = function(e, t) {
      return e = t || e, "none" === rt.css(e, "display") || !rt.contains(e.ownerDocument, e)
    },
    Dt = rt.access = function(e, t, n, i, r, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === rt.type(n)) {
        r = !0;
        for (s in n) rt.access(e, t, s, n[s], !0, o, a)
      } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
          return l.call(rt(e), n)
        })), t))
        for (; u > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return r ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    At = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = pt.createElement("input"),
      t = pt.createElement("div"),
      n = pt.createDocumentFragment();
    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === t.firstChild.nodeType, nt.tbody = !t.getElementsByTagName("tbody").length, nt.htmlSerialize = !!t.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), nt.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
        nt.noCloneEvent = !1
      }), t.cloneNode(!0).click()), null == nt.deleteExpando) {
      nt.deleteExpando = !0;
      try {
        delete t.test
      } catch (i) {
        nt.deleteExpando = !1
      }
    }
  }(),
    function() {
      var t, n, i = pt.createElement("div");
      for (t in {
        submit: !0,
        change: !0,
        focusin: !0
      }) n = "on" + t, (nt[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), nt[t + "Bubbles"] = i.attributes[n].expando === !1);
      i = null
    }();
  var Lt = /^(?:input|select|textarea)$/i,
    jt = /^key/,
    Ht = /^(?:mouse|pointer|contextmenu)|click/,
    qt = /^(?:focusinfocus|focusoutblur)$/,
    Mt = /^([^.]*)(?:\.(.+)|)$/;
  rt.event = {
    global: {},
    add: function(e, t, n, i, r) {
      var o, a, s, u, l, c, d, f, h, p, m, g = rt._data(e);
      if (g) {
        for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
          return typeof rt === Ft || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
        }, c.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Mt.exec(t[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (l = rt.event.special[h] || {}, h = (r ? l.delegateType : l.bindType) || h, l = rt.event.special[h] || {}, d = rt.extend({
          type: h,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: r,
          needsContext: r && rt.expr.match.needsContext.test(r),
          namespace: p.join(".")
        }, u), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, l.setup && l.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(h, c, !1) : e.attachEvent && e.attachEvent("on" + h, c))), l.add && (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), rt.event.global[h] = !0);
        e = null
      }
    },
    remove: function(e, t, n, i, r) {
      var o, a, s, u, l, c, d, f, h, p, m, g = rt.hasData(e) && rt._data(e);
      if (g && (c = g.events)) {
        for (t = (t || "").match(bt) || [""], l = t.length; l--;)
          if (s = Mt.exec(t[l]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
            for (d = rt.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = c[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
            u && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || rt.removeEvent(e, h, g.handle), delete c[h])
          } else
            for (h in c) rt.event.remove(e, h + t[l], n, i, !0);
        rt.isEmptyObject(c) && (delete g.handle, rt._removeData(e, "events"))
      }
    },
    trigger: function(t, n, i, r) {
      var o, a, s, u, l, c, d, f = [i || pt],
        h = tt.call(t, "type") ? t.type : t,
        p = tt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !qt.test(h + rt.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[rt.expando] ? t : new rt.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : rt.makeArray(n, [t]), l = rt.event.special[h] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
        if (!r && !l.noBubble && !rt.isWindow(i)) {
          for (u = l.delegateType || h, qt.test(u + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
          c === (i.ownerDocument || pt) && f.push(c.defaultView || c.parentWindow || e)
        }
        for (d = 0;
             (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? u : l.bindType || h, o = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && rt.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
        if (t.type = h, !r && !t.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && rt.acceptData(i) && a && i[h] && !rt.isWindow(i)) {
          c = i[a], c && (i[a] = null), rt.event.triggered = h;
          try {
            i[h]()
          } catch (m) {}
          rt.event.triggered = void 0, c && (i[a] = c)
        }
        return t.result
      }
    },
    dispatch: function(e) {
      e = rt.event.fix(e);
      var t, n, i, r, o, a = [],
        s = Y.call(arguments),
        u = (rt._data(this, "events") || {})[e.type] || [],
        l = rt.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
        for (a = rt.event.handlers.call(this, e, u), t = 0;
             (r = a[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = r.elem, o = 0;
               (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var n, i, r, o, a = [],
        s = t.delegateCount,
        u = e.target;
      if (s && u.nodeType && (!e.button || "click" !== e.type))
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(u) >= 0 : rt.find(n, this, null, [u]).length), r[n] && r.push(i);
            r.length && a.push({
              elem: u,
              handlers: r
            })
          }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a
    },
    fix: function(e) {
      if (e[rt.expando]) return e;
      var t, n, i, r = e.type,
        o = e,
        a = this.fixHooks[r];
      for (a || (this.fixHooks[r] = a = Ht.test(r) ? this.mouseHooks : jt.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new rt.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
      return e.target || (e.target = o.srcElement || pt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, i, r, o = t.button,
          a = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pt, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== p() && this.focus) try {
            return this.focus(), !1
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === p() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return rt.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, n, i) {
      var r = rt.extend(new rt.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
    }
  }, rt.removeEvent = pt.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var i = "on" + t;
    e.detachEvent && (typeof e[i] === Ft && (e[i] = null), e.detachEvent(i, n))
  }, rt.Event = function(e, t) {
    return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(e, t)
  }, rt.Event.prototype = {
    isDefaultPrevented: h,
    isPropagationStopped: h,
    isImmediatePropagationStopped: h,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, rt.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    rt.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, i = this,
          r = e.relatedTarget,
          o = e.handleObj;
        return (!r || r !== i && !rt.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), nt.submitBubbles || (rt.event.special.submit = {
    setup: function() {
      return rt.nodeName(this, "form") ? !1 : void rt.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target,
          n = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
        n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), rt._data(n, "submitBubbles", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit")
    }
  }), nt.changeBubbles || (rt.event.special.change = {
    setup: function() {
      return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
      }), rt.event.add(this, "click._change", function(e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
      })), !1) : void rt.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Lt.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
        }), rt._data(t, "changeBubbles", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return rt.event.remove(this, "._change"), !Lt.test(this.nodeName)
    }
  }), nt.focusinBubbles || rt.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      rt.event.simulate(t, e.target, rt.event.fix(e), !0)
    };
    rt.event.special[t] = {
      setup: function() {
        var i = this.ownerDocument || this,
          r = rt._data(i, t);
        r || i.addEventListener(e, n, !0), rt._data(i, t, (r || 0) + 1)
      },
      teardown: function() {
        var i = this.ownerDocument || this,
          r = rt._data(i, t) - 1;
        r ? rt._data(i, t, r) : (i.removeEventListener(e, n, !0), rt._removeData(i, t))
      }
    }
  }), rt.fn.extend({
    on: function(e, t, n, i, r) {
      var o, a;
      if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);
        for (o in e) this.on(o, t, n, e[o], r);
        return this
      }
      if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
      else if (!i) return this;
      return 1 === r && (a = i, i = function(e) {
        return rt().off(e), a.apply(this, arguments)
      }, i.guid = a.guid || (a.guid = rt.guid++)), this.each(function() {
        rt.event.add(this, e, i, n, t)
      })
    },
    one: function(e, t, n, i) {
      return this.on(e, t, n, i, 1)
    },
    off: function(e, t, n) {
      var i, r;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, rt(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
        rt.event.remove(this, e, n, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        rt.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      return n ? rt.event.trigger(e, t, n, !0) : void 0
    }
  });
  var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Pt = / jQuery\d+="(?:null|\d+)"/g,
    _t = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
    Rt = /^\s+/,
    $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    zt = /<([\w:]+)/,
    Bt = /<tbody/i,
    Wt = /<|&#?\w+;/,
    It = /<(?:script|style|link)/i,
    Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Vt = /^$|\/(?:java|ecma)script/i,
    Ut = /^true\/(.*)/,
    Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Yt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Jt = m(pt),
    Gt = Jt.appendChild(pt.createElement("div"));
  Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, rt.extend({
    clone: function(e, t, n) {
      var i, r, o, a, s, u = rt.contains(e.ownerDocument, e);
      if (nt.html5Clone || rt.isXMLDoc(e) || !_t.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || rt.isXMLDoc(e)))
        for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && F(r, i[a]);
      if (t)
        if (n)
          for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) C(r, i[a]);
        else C(e, o);
      return i = g(o, "script"), i.length > 0 && w(i, !u && g(e, "script")), i = s = r = null, o
    },
    buildFragment: function(e, t, n, i) {
      for (var r, o, a, s, u, l, c, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
        if (o = e[p], o || 0 === o)
          if ("object" === rt.type(o)) rt.merge(h, o.nodeType ? [o] : o);
          else if (Wt.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), u = (zt.exec(o) || ["", ""])[1].toLowerCase(), c = Yt[u] || Yt._default, s.innerHTML = c[1] + o.replace($t, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild;
            if (!nt.leadingWhitespace && Rt.test(o) && h.push(t.createTextNode(Rt.exec(o)[0])), !nt.tbody)
              for (o = "table" !== u || Bt.test(o) ? "<table>" !== c[1] || Bt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
            for (rt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
            s = f.lastChild
          } else h.push(t.createTextNode(o));
      for (s && f.removeChild(s), nt.appendChecked || rt.grep(g(h, "input"), v), p = 0; o = h[p++];)
        if ((!i || -1 === rt.inArray(o, i)) && (a = rt.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
          for (r = 0; o = s[r++];) Vt.test(o.type || "") && n.push(o);
      return s = null, f
    },
    cleanData: function(e, t) {
      for (var n, i, r, o, a = 0, s = rt.expando, u = rt.cache, l = nt.deleteExpando, c = rt.event.special; null != (n = e[a]); a++)
        if ((t || rt.acceptData(n)) && (r = n[s], o = r && u[r])) {
          if (o.events)
            for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
          u[r] && (delete u[r], l ? delete n[s] : typeof n.removeAttribute !== Ft ? n.removeAttribute(s) : n[s] = null, Q.push(r))
        }
    }
  }), rt.fn.extend({
    text: function(e) {
      return Dt(this, function(e) {
        return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(e))
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.appendChild(e)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = y(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var n, i = e ? rt.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || rt.cleanData(g(n)), n.parentNode && (t && rt.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && rt.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && rt.nodeName(e, "select") && (e.options.length = 0)
      }
      return this
    },
    clone: function(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
        return rt.clone(this, e, t)
      })
    },
    html: function(e) {
      return Dt(this, function(e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
        if (!("string" != typeof e || It.test(e) || !nt.htmlSerialize && _t.test(e) || !nt.leadingWhitespace && Rt.test(e) || Yt[(zt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace($t, "<$1></$2>");
          try {
            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (rt.cleanData(g(t, !1)), t.innerHTML = e);
            t = 0
          } catch (r) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, rt.cleanData(g(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = J.apply([], e);
      var n, i, r, o, a, s, u = 0,
        l = this.length,
        c = this,
        d = l - 1,
        f = e[0],
        h = rt.isFunction(f);
      if (h || l > 1 && "string" == typeof f && !nt.checkClone && Xt.test(f)) return this.each(function(n) {
        var i = c.eq(n);
        h && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
      });
      if (l && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
        for (o = rt.map(g(s, "script"), b), r = o.length; l > u; u++) i = s, u !== d && (i = rt.clone(i, !0, !0), r && rt.merge(o, g(i, "script"))), t.call(this[u], i, u);
        if (r)
          for (a = o[o.length - 1].ownerDocument, rt.map(o, x), u = 0; r > u; u++) i = o[u], Vt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(a, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
        s = n = null
      }
      return this
    }
  }), rt.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    rt.fn[e] = function(e) {
      for (var n, i = 0, r = [], o = rt(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), rt(o[i])[t](n), G.apply(r, n.get());
      return this.pushStack(r)
    }
  });
  var Kt, Zt = {};
  ! function() {
    var e;
    nt.shrinkWrapBlocks = function() {
      if (null != e) return e;
      e = !1;
      var t, n, i;
      return n = pt.getElementsByTagName("body")[0], n && n.style ? (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ft && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pt.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
    }
  }();
  var en, tn, nn = /^margin/,
    rn = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
    on = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (en = function(e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null)
  }, tn = function(e, t, n) {
    var i, r, o, a, s = e.style;
    return n = n || en(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), rn.test(a) && nn.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
  }) : pt.documentElement.currentStyle && (en = function(e) {
    return e.currentStyle
  }, tn = function(e, t, n) {
    var i, r, o, a, s = e.style;
    return n = n || en(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rn.test(a) && !on.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
  }), ! function() {
    function t() {
      var t, n, i, r;
      n = pt.getElementsByTagName("body")[0], n && n.style && (t = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, u = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
          width: "4px"
        }).width, r = t.appendChild(pt.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
    }
    var n, i, r, o, a, s, u;
    n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
      reliableHiddenOffsets: function() {
        return null == s && t(), s
      },
      boxSizingReliable: function() {
        return null == a && t(), a
      },
      pixelPosition: function() {
        return null == o && t(), o
      },
      reliableMarginRight: function() {
        return null == u && t(), u
      }
    }))
  }(), rt.swap = function(e, t, n, i) {
    var r, o, a = {};
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    r = n.apply(e, i || []);
    for (o in t) e.style[o] = a[o];
    return r
  };
  var an = /alpha\([^)]*\)/i,
    sn = /opacity\s*=\s*([^)]*)/,
    un = /^(none|table(?!-c[ea]).+)/,
    ln = new RegExp("^(" + St + ")(.*)$", "i"),
    cn = new RegExp("^([+-])=(" + St + ")", "i"),
    dn = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    fn = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    hn = ["Webkit", "O", "Moz", "ms"];
  rt.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = tn(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
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
      "float": nt.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, o, a, s = rt.camelCase(t),
          u = e.style;
        if (t = rt.cssProps[s] || (rt.cssProps[s] = k(u, s)), a = rt.cssHooks[t] || rt.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
        if (o = typeof n, "string" === o && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
          u[t] = n
        } catch (l) {}
      }
    },
    css: function(e, t, n, i) {
      var r, o, a, s = rt.camelCase(t);
      return t = rt.cssProps[s] || (rt.cssProps[s] = k(e.style, s)), a = rt.cssHooks[t] || rt.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tn(e, t, i)), "normal" === o && t in fn && (o = fn[t]), "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
    }
  }), rt.each(["height", "width"], function(e, t) {
    rt.cssHooks[t] = {
      get: function(e, n, i) {
        return n ? un.test(rt.css(e, "display")) && 0 === e.offsetWidth ? rt.swap(e, dn, function() {
          return L(e, t, i)
        }) : L(e, t, i) : void 0
      },
      set: function(e, n, i) {
        var r = i && en(e);
        return D(e, n, i ? A(e, t, i, nt.boxSizing && "border-box" === rt.css(e, "boxSizing", !1, r), r) : 0)
      }
    }
  }), nt.opacity || (rt.cssHooks.opacity = {
    get: function(e, t) {
      return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        i = e.currentStyle,
        r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
        o = i && i.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === rt.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = an.test(o) ? o.replace(an, r) : o + " " + r)
    }
  }), rt.cssHooks.marginRight = S(nt.reliableMarginRight, function(e, t) {
    return t ? rt.swap(e, {
      display: "inline-block"
    }, tn, [e, "marginRight"]) : void 0
  }), rt.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    rt.cssHooks[e + t] = {
      expand: function(n) {
        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + kt[i] + t] = o[i] || o[i - 2] || o[0];
        return r
      }
    }, nn.test(e) || (rt.cssHooks[e + t].set = D)
  }), rt.fn.extend({
    css: function(e, t) {
      return Dt(this, function(e, t, n) {
        var i, r, o = {},
          a = 0;
        if (rt.isArray(t)) {
          for (i = en(e), r = t.length; r > a; a++) o[t[a]] = rt.css(e, t[a], !1, i);
          return o
        }
        return void 0 !== n ? rt.style(e, t, n) : rt.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return N(this, !0)
    },
    hide: function() {
      return N(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Nt(this) ? rt(this).show() : rt(this).hide()
      })
    }
  }), rt.Tween = j, j.prototype = {
    constructor: j,
    init: function(e, t, n, i, r, o) {
      this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (rt.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = j.propHooks[this.prop];
      return e && e.get ? e.get(this) : j.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = j.propHooks[this.prop];
      return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
    }
  }, j.prototype.init.prototype = j.prototype, j.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
      },
      set: function(e) {
        rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[rt.cssProps[e.prop]] || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, rt.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, rt.fx = j.prototype.init, rt.fx.step = {};
  var pn, mn, gn = /^(?:toggle|show|hide)$/,
    vn = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
    yn = /queueHooks$/,
    bn = [O],
    xn = {
      "*": [function(e, t) {
        var n = this.createTween(e, t),
          i = n.cur(),
          r = vn.exec(t),
          o = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
          a = (rt.cssNumber[e] || "px" !== o && +i) && vn.exec(rt.css(n.elem, e)),
          s = 1,
          u = 20;
        if (a && a[3] !== o) {
          o = o || a[3], r = r || [], a = +i || 1;
          do s = s || ".5", a /= s, rt.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --u)
        }
        return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
      }]
    };
  rt.Animation = rt.extend(_, {
    tweener: function(e, t) {
      rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      for (var n, i = 0, r = e.length; r > i; i++) n = e[i], xn[n] = xn[n] || [], xn[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? bn.unshift(e) : bn.push(e)
    }
  }), rt.speed = function(e, t, n) {
    var i = e && "object" == typeof e ? rt.extend({}, e) : {
      complete: n || !n && t || rt.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !rt.isFunction(t) && t
    };
    return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
      rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue)
    }, i
  }, rt.fn.extend({
    fadeTo: function(e, t, n, i) {
      return this.filter(Nt).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i)
    },
    animate: function(e, t, n, i) {
      var r = rt.isEmptyObject(e),
        o = rt.speed(t, n, i),
        a = function() {
          var t = _(this, rt.extend({}, e), o);
          (r || rt._data(this, "finish")) && t.stop(!0)
        };
      return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(e, t, n) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
          r = null != e && e + "queueHooks",
          o = rt.timers,
          a = rt._data(this);
        if (r) a[r] && a[r].stop && i(a[r]);
        else
          for (r in a) a[r] && a[r].stop && yn.test(r) && i(a[r]);
        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
        (t || !n) && rt.dequeue(this, e)
      })
    },
    finish: function(e) {
      return e !== !1 && (e = e || "fx"), this.each(function() {
        var t, n = rt._data(this),
          i = n[e + "queue"],
          r = n[e + "queueHooks"],
          o = rt.timers,
          a = i ? i.length : 0;
        for (n.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }), rt.each(["toggle", "show", "hide"], function(e, t) {
    var n = rt.fn[t];
    rt.fn[t] = function(e, i, r) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, r)
    }
  }), rt.each({
    slideDown: q("show"),
    slideUp: q("hide"),
    slideToggle: q("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    rt.fn[e] = function(e, n, i) {
      return this.animate(t, e, n, i)
    }
  }), rt.timers = [], rt.fx.tick = function() {
    var e, t = rt.timers,
      n = 0;
    for (pn = rt.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    t.length || rt.fx.stop(), pn = void 0
  }, rt.fx.timer = function(e) {
    rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
  }, rt.fx.interval = 13, rt.fx.start = function() {
    mn || (mn = setInterval(rt.fx.tick, rt.fx.interval))
  }, rt.fx.stop = function() {
    clearInterval(mn), mn = null
  }, rt.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, rt.fn.delay = function(e, t) {
    return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
      var i = setTimeout(t, e);
      n.stop = function() {
        clearTimeout(i)
      }
    })
  },
    function() {
      var e, t, n, i, r;
      t = pt.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pt.createElement("select"), r = n.appendChild(pt.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== t.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!e.value, nt.optSelected = r.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !r.disabled, e = pt.createElement("input"), e.setAttribute("value", ""), nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), nt.radioValue = "t" === e.value
    }();
  var wn = /\r/g;
  rt.fn.extend({
    val: function(e) {
      var t, n, i, r = this[0];
      return arguments.length ? (i = rt.isFunction(e), this.each(function(n) {
        var r;
        1 === this.nodeType && (r = i ? e.call(this, n, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function(e) {
          return null == e ? "" : e + ""
        })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
      })) : r ? (t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)) : void 0
    }
  }), rt.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = rt.find.attr(e, "value");
          return null != t ? t : rt.trim(rt.text(e))
        }
      },
      select: {
        get: function(e) {
          for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, u = 0 > r ? s : o ? r : 0; s > u; u++)
            if (n = i[u], !(!n.selected && u !== r || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
              if (t = rt(n).val(), o) return t;
              a.push(t)
            }
          return a
        },
        set: function(e, t) {
          for (var n, i, r = e.options, o = rt.makeArray(t), a = r.length; a--;)
            if (i = r[a], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
              i.selected = n = !0
            } catch (s) {
              i.scrollHeight
            } else i.selected = !1;
          return n || (e.selectedIndex = -1), r
        }
      }
    }
  }), rt.each(["radio", "checkbox"], function() {
    rt.valHooks[this] = {
      set: function(e, t) {
        return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
      }
    }, nt.checkOn || (rt.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Cn, Fn, En = rt.expr.attrHandle,
    Tn = /^(?:checked|selected)$/i,
    Sn = nt.getSetAttribute,
    kn = nt.input;
  rt.fn.extend({
    attr: function(e, t) {
      return Dt(this, rt.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        rt.removeAttr(this, e)
      })
    }
  }), rt.extend({
    attr: function(e, t, n) {
      var i, r, o = e.nodeType;
      return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ft ? rt.prop(e, t, n) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), i = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? Fn : Cn)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void rt.removeAttr(e, t)) : void 0
    },
    removeAttr: function(e, t) {
      var n, i, r = 0,
        o = t && t.match(bt);
      if (o && 1 === e.nodeType)
        for (; n = o[r++];) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? kn && Sn || !Tn.test(n) ? e[i] = !1 : e[rt.camelCase("default-" + n)] = e[i] = !1 : rt.attr(e, n, ""), e.removeAttribute(Sn ? n : i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!nt.radioValue && "radio" === t && rt.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }
  }), Fn = {
    set: function(e, t, n) {
      return t === !1 ? rt.removeAttr(e, n) : kn && Sn || !Tn.test(n) ? e.setAttribute(!Sn && rt.propFix[n] || n, n) : e[rt.camelCase("default-" + n)] = e[n] = !0, n
    }
  }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = En[t] || rt.find.attr;
    En[t] = kn && Sn || !Tn.test(t) ? function(e, t, i) {
      var r, o;
      return i || (o = En[t], En[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, En[t] = o), r
    } : function(e, t, n) {
      return n ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
    }
  }), kn && Sn || (rt.attrHooks.value = {
    set: function(e, t, n) {
      return rt.nodeName(e, "input") ? void(e.defaultValue = t) : Cn && Cn.set(e, t, n)
    }
  }), Sn || (Cn = {
    set: function(e, t, n) {
      var i = e.getAttributeNode(n);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
    }
  }, En.id = En.name = En.coords = function(e, t, n) {
    var i;
    return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
  }, rt.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      return n && n.specified ? n.value : void 0
    },
    set: Cn.set
  }, rt.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Cn.set(e, "" === t ? !1 : t, n)
    }
  }, rt.each(["width", "height"], function(e, t) {
    rt.attrHooks[t] = {
      set: function(e, n) {
        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
      }
    }
  })), nt.style || (rt.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || void 0
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  });
  var Nn = /^(?:input|select|textarea|button|object)$/i,
    Dn = /^(?:a|area)$/i;
  rt.fn.extend({
    prop: function(e, t) {
      return Dt(this, rt.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = rt.propFix[e] || e, this.each(function() {
        try {
          this[e] = void 0, delete this[e]
        } catch (t) {}
      })
    }
  }), rt.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(e, t, n) {
      var i, r, o, a = e.nodeType;
      return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]) : void 0
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = rt.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Nn.test(e.nodeName) || Dn.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }
  }), nt.hrefNormalized || rt.each(["href", "src"], function(e, t) {
    rt.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4)
      }
    }
  }), nt.optSelected || (rt.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    rt.propFix[this.toLowerCase()] = this
  }), nt.enctype || (rt.propFix.enctype = "encoding");
  var An = /[\t\r\n\f]/g;
  rt.fn.extend({
    addClass: function(e) {
      var t, n, i, r, o, a, s = 0,
        u = this.length,
        l = "string" == typeof e && e;
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).addClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(bt) || []; u > s; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            a = rt.trim(i), n.className !== a && (n.className = a)
          }
      return this
    },
    removeClass: function(e) {
      var t, n, i, r, o, a, s = 0,
        u = this.length,
        l = 0 === arguments.length || "string" == typeof e && e;
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).removeClass(e.call(this, t, this.className))
      });
      if (l)
        for (t = (e || "").match(bt) || []; u > s; s++)
          if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
            for (o = 0; r = t[o++];)
              for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
            a = e ? rt.trim(i) : "", n.className !== a && (n.className = a)
          }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(rt.isFunction(e) ? function(n) {
        rt(this).toggleClass(e.call(this, n, this.className, t), t)
      } : function() {
        if ("string" === n)
          for (var t, i = 0, r = rt(this), o = e.match(bt) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else(n === Ft || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    rt.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), rt.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, i) {
      return this.on(t, e, n, i)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  });
  var Ln = rt.now(),
    jn = /\?/,
    Hn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  rt.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, i = null,
      r = rt.trim(t + "");
    return r && !rt.trim(r.replace(Hn, function(e, t, r, o) {
      return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
    })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
  }, rt.parseXML = function(t) {
    var n, i;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
    } catch (r) {
      n = void 0
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), n
  };
  var qn, Mn, On = /#.*$/,
    Pn = /([?&])_=[^&]*/,
    _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    $n = /^(?:GET|HEAD)$/,
    zn = /^\/\//,
    Bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Wn = {},
    In = {},
    Xn = "*/".concat("*");
  try {
    Mn = location.href
  } catch (Vn) {
    Mn = pt.createElement("a"), Mn.href = "", Mn = Mn.href
  }
  qn = Bn.exec(Mn.toLowerCase()) || [], rt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Mn,
      type: "GET",
      isLocal: Rn.test(qn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Xn,
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
        "text json": rt.parseJSON,
        "text xml": rt.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? z(z(e, rt.ajaxSettings), t) : z(rt.ajaxSettings, e)
    },
    ajaxPrefilter: R(Wn),
    ajaxTransport: R(In),
    ajax: function(e, t) {
      function n(e, t, n, i) {
        var r, c, v, y, x, C = t;
        2 !== b && (b = 2, s && clearTimeout(s), l = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = B(d, w, n)), y = W(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, r = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", r ? p.resolveWith(f, [c, C, w]) : p.rejectWith(f, [w, C, v]), w.statusCode(g), g = void 0, u && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? c : v]), m.fireWith(f, [w, C]), u && (h.trigger("ajaxComplete", [w, d]), --rt.active || rt.event.trigger("ajaxStop")))
      }
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var i, r, o, a, s, u, l, c, d = rt.ajaxSetup({}, t),
        f = d.context || d,
        h = d.context && (f.nodeType || f.jquery) ? rt(f) : rt.event,
        p = rt.Deferred(),
        m = rt.Callbacks("once memory"),
        g = d.statusCode || {},
        v = {},
        y = {},
        b = 0,
        x = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === b) {
              if (!c)
                for (c = {}; t = _n.exec(a);) c[t[1].toLowerCase()] = t[2];
              t = c[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === b ? a : null
          },
          setRequestHeader: function(e, t) {
            var n = e.toLowerCase();
            return b || (e = y[n] = y[n] || e, v[e] = t), this
          },
          overrideMimeType: function(e) {
            return b || (d.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > b)
                for (t in e) g[t] = [g[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || x;
            return l && l.abort(t), n(0, t), this
          }
        };
      if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Mn) + "").replace(On, "").replace(zn, qn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Bn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === qn[1] && i[2] === qn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (qn[3] || ("http:" === qn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), $(Wn, d, t, w), 2 === b) return w;
      u = d.global, u && 0 === rt.active++ && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !$n.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (jn.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Pn.test(o) ? o.replace(Pn, "$1_=" + Ln++) : o + (jn.test(o) ? "&" : "?") + "_=" + Ln++)), d.ifModified && (rt.lastModified[o] && w.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && w.setRequestHeader("If-None-Match", rt.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
      for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
      if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
      x = "abort";
      for (r in {
        success: 1,
        error: 1,
        complete: 1
      }) w[r](d[r]);
      if (l = $(In, d, t, w)) {
        w.readyState = 1, u && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
          w.abort("timeout")
        }, d.timeout));
        try {
          b = 1, l.send(v, n)
        } catch (C) {
          if (!(2 > b)) throw C;
          n(-1, C)
        }
      } else n(-1, "No Transport");
      return w
    },
    getJSON: function(e, t, n) {
      return rt.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return rt.get(e, void 0, t, "script")
    }
  }), rt.each(["get", "post"], function(e, t) {
    rt[t] = function(e, n, i, r) {
      return rt.isFunction(n) && (r = r || i, i = n, n = void 0), rt.ajax({
        url: e,
        type: t,
        dataType: r,
        data: n,
        success: i
      })
    }
  }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    rt.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), rt._evalUrl = function(e) {
    return rt.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    })
  }, rt.fn.extend({
    wrapAll: function(e) {
      if (rt.isFunction(e)) return this.each(function(t) {
        rt(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return this.each(rt.isFunction(e) ? function(t) {
        rt(this).wrapInner(e.call(this, t))
      } : function() {
        var t = rt(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = rt.isFunction(e);
      return this.each(function(n) {
        rt(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
      }).end()
    }
  }), rt.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (e.style && e.style.display || rt.css(e, "display"))
  }, rt.expr.filters.visible = function(e) {
    return !rt.expr.filters.hidden(e)
  };
  var Un = /%20/g,
    Qn = /\[\]$/,
    Yn = /\r?\n/g,
    Jn = /^(?:submit|button|image|reset|file)$/i,
    Gn = /^(?:input|select|textarea|keygen)/i;
  rt.param = function(e, t) {
    var n, i = [],
      r = function(e, t) {
        t = rt.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function() {
      r(this.name, this.value)
    });
    else
      for (n in e) I(n, e[n], t, r);
    return i.join("&").replace(Un, "+")
  }, rt.fn.extend({
    serialize: function() {
      return rt.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = rt.prop(this, "elements");
        return e ? rt.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !rt(this).is(":disabled") && Gn.test(this.nodeName) && !Jn.test(e) && (this.checked || !At.test(e))
      }).map(function(e, t) {
        var n = rt(this).val();
        return null == n ? null : rt.isArray(n) ? rt.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Yn, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Yn, "\r\n")
        }
      }).get()
    }
  }), rt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
  } : X;
  var Kn = 0,
    Zn = {},
    ei = rt.ajaxSettings.xhr();
  e.ActiveXObject && rt(e).on("unload", function() {
    for (var e in Zn) Zn[e](void 0, !0)
  }), nt.cors = !!ei && "withCredentials" in ei, ei = nt.ajax = !!ei, ei && rt.ajaxTransport(function(e) {
    if (!e.crossDomain || nt.cors) {
      var t;
      return {
        send: function(n, i) {
          var r, o = e.xhr(),
            a = ++Kn;
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (r in e.xhrFields) o[r] = e.xhrFields[r];
          e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
          for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
          o.send(e.hasContent && e.data || null), t = function(n, r) {
            var s, u, l;
            if (t && (r || 4 === o.readyState))
              if (delete Zn[a], t = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
              else {
                l = {}, s = o.status, "string" == typeof o.responseText && (l.text = o.responseText);
                try {
                  u = o.statusText
                } catch (c) {
                  u = ""
                }
                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = l.text ? 200 : 404
              }
            l && i(s, u, l, o.getAllResponseHeaders())
          }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Zn[a] = t : t()
        },
        abort: function() {
          t && t(void 0, !0)
        }
      }
    }
  }), rt.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return rt.globalEval(e), e
      }
    }
  }), rt.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), rt.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = pt.head || rt("head")[0] || pt.documentElement;
      return {
        send: function(i, r) {
          t = pt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
          }, n.insertBefore(t, n.firstChild)
        },
        abort: function() {
          t && t.onload(void 0, !0)
        }
      }
    }
  });
  var ti = [],
    ni = /(=)\?(?=&|$)|\?\?/;
  rt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = ti.pop() || rt.expando + "_" + Ln++;
      return this[e] = !0, e
    }
  }), rt.ajaxPrefilter("json jsonp", function(t, n, i) {
    var r, o, a, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
    return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + r) : t.jsonp !== !1 && (t.url += (jn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return a || rt.error(r + " was not called"), a[0]
    }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
      a = arguments
    }, i.always(function() {
      e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, ti.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
    }), "script") : void 0
  }), rt.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || pt;
    var i = dt.exec(e),
      r = !n && [];
    return i ? [t.createElement(i[1])] : (i = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
  };
  var ii = rt.fn.load;
  rt.fn.load = function(e, t, n) {
    if ("string" != typeof e && ii) return ii.apply(this, arguments);
    var i, r, o, a = this,
      s = e.indexOf(" ");
    return s >= 0 && (i = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && rt.ajax({
      url: e,
      type: o,
      dataType: "html",
      data: t
    }).done(function(e) {
      r = arguments, a.html(i ? rt("<div>").append(rt.parseHTML(e)).find(i) : e)
    }).complete(n && function(e, t) {
        a.each(n, r || [e.responseText, t, e])
      }), this
  }, rt.expr.filters.animated = function(e) {
    return rt.grep(rt.timers, function(t) {
      return e === t.elem
    }).length
  };
  var ri = e.document.documentElement;
  rt.offset = {
    setOffset: function(e, t, n) {
      var i, r, o, a, s, u, l, c = rt.css(e, "position"),
        d = rt(e),
        f = {};
      "static" === c && (e.style.position = "relative"), s = d.offset(), o = rt.css(e, "top"), u = rt.css(e, "left"), l = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, u]) > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(u) || 0), rt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
    }
  }, rt.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        rt.offset.setOffset(this, e, t)
      });
      var t, n, i = {
          top: 0,
          left: 0
        },
        r = this[0],
        o = r && r.ownerDocument;
      return o ? (t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== Ft && (i = r.getBoundingClientRect()), n = U(o), {
        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : i) : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
            top: 0,
            left: 0
          },
          i = this[0];
        return "fixed" === rt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (n = e.offset()), n.top += rt.css(e[0], "borderTopWidth", !0), n.left += rt.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - rt.css(i, "marginTop", !0),
          left: t.left - n.left - rt.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || ri; e && !rt.nodeName(e, "html") && "static" === rt.css(e, "position");) e = e.offsetParent;
        return e || ri
      })
    }
  }), rt.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    rt.fn[e] = function(i) {
      return Dt(this, function(e, i, r) {
        var o = U(e);
        return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r : rt(o).scrollTop()) : e[i] = r)
      }, e, i, arguments.length, null)
    }
  }), rt.each(["top", "left"], function(e, t) {
    rt.cssHooks[t] = S(nt.pixelPosition, function(e, n) {
      return n ? (n = tn(e, t), rn.test(n) ? rt(e).position()[t] + "px" : n) : void 0
    })
  }), rt.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    rt.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, i) {
      rt.fn[i] = function(i, r) {
        var o = arguments.length && (n || "boolean" != typeof i),
          a = n || (i === !0 || r === !0 ? "margin" : "border");
        return Dt(this, function(t, n, i) {
          var r;
          return rt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? rt.css(t, n, a) : rt.style(t, n, i, a)
        }, t, o ? i : void 0, o, null)
      }
    })
  }), rt.fn.size = function() {
    return this.length
  }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return rt
  });
  var oi = e.jQuery,
    ai = e.$;
  return rt.noConflict = function(t) {
    return e.$ === rt && (e.$ = ai), t && e.jQuery === rt && (e.jQuery = oi), rt
  }, typeof t === Ft && (e.jQuery = e.$ = rt), rt
}),
  function(e) {
    e.extend(e.fn, {
      validate: function(t) {
        if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
        var n = e.data(this[0], "validator");
        return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
          n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
        }), this.submit(function(t) {
          function i() {
            var i;
            return n.settings.submitHandler ? (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), !1) : !0
          }
          return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
        })), n)
      },
      valid: function() {
        if (e(this[0]).is("form")) return this.validate().form();
        var t = !0,
          n = e(this[0].form).validate();
        return this.each(function() {
          t = t && n.element(this)
        }), t
      },
      removeAttrs: function(t) {
        var n = {},
          i = this;
        return e.each(t.split(/\s/), function(e, t) {
          n[t] = i.attr(t), i.removeAttr(t)
        }), n
      },
      rules: function(t, n) {
        var i = this[0];
        if (t) {
          var r = e.data(i.form, "validator").settings,
            o = r.rules,
            a = e.validator.staticRules(i);
          switch (t) {
            case "add":
              e.extend(a, e.validator.normalizeRule(n)), delete a.messages, o[i.name] = a, n.messages && (r.messages[i.name] = e.extend(r.messages[i.name], n.messages));
              break;
            case "remove":
              if (!n) return delete o[i.name], a;
              var s = {};
              return e.each(n.split(/\s/), function(e, t) {
                s[t] = a[t], delete a[t]
              }), s
          }
        }
        var u = e.validator.normalizeRules(e.extend({}, e.validator.classRules(i), e.validator.attributeRules(i), e.validator.dataRules(i), e.validator.staticRules(i)), i);
        if (u.required) {
          var l = u.required;
          delete u.required, u = e.extend({
            required: l
          }, u)
        }
        return u
      }
    }), e.extend(e.expr[":"], {
      blank: function(t) {
        return !e.trim("" + e(t).val())
      },
      filled: function(t) {
        return !!e.trim("" + e(t).val())
      },
      unchecked: function(t) {
        return !e(t).prop("checked")
      }
    }), e.validator = function(t, n) {
      this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
      return 1 === arguments.length ? function() {
        var n = e.makeArray(arguments);
        return n.unshift(t), e.validator.format.apply(this, n)
      } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
        t = t.replace(RegExp("\\{" + e + "\\}", "g"), function() {
          return n
        })
      }), t)
    }, e.extend(e.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: e([]),
        errorLabelContainer: e([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(e) {
          this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
        },
        onfocusout: function(e) {
          this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
        },
        onkeyup: function(e, t) {
          (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
        },
        onclick: function(e) {
          e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
        },
        highlight: function(t, n, i) {
          "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
        },
        unhighlight: function(t, n, i) {
          "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
        }
      },
      setDefaults: function(t) {
        e.extend(e.validator.defaults, t)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: e.validator.format("Please enter no more than {0} characters."),
        minlength: e.validator.format("Please enter at least {0} characters."),
        rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
        range: e.validator.format("Please enter a value between {0} and {1}."),
        max: e.validator.format("Please enter a value less than or equal to {0}."),
        min: e.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function t(t) {
            var n = e.data(this[0].form, "validator"),
              i = "on" + t.type.replace(/^validate/, "");
            n.settings[i] && n.settings[i].call(n, this[0], t)
          }
          this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
          var n = this.groups = {};
          e.each(this.settings.groups, function(t, i) {
            "string" == typeof i && (i = i.split(/\s/)), e.each(i, function(e, i) {
              n[i] = t
            })
          });
          var i = this.settings.rules;
          e.each(i, function(t, n) {
            i[t] = e.validator.normalizeRule(n)
          }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
          return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
          this.prepareForm();
          for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
          return this.valid()
        },
        element: function(t) {
          t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
          var n = this.check(t) !== !1;
          return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
        },
        showErrors: function(t) {
          if (t) {
            e.extend(this.errorMap, t), this.errorList = [];
            for (var n in t) this.errorList.push({
              message: t[n],
              element: this.findByName(n)[0]
            });
            this.successList = e.grep(this.successList, function(e) {
              return !(e.name in t)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
          e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid)
        },
        objectLength: function(e) {
          var t = 0;
          for (var n in e) t++;
          return t
        },
        hideErrors: function() {
          this.addWrapper(this.toHide).hide()
        },
        valid: function() {
          return 0 === this.size()
        },
        size: function() {
          return this.errorList.length
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid) try {
            e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (t) {}
        },
        findLastActive: function() {
          var t = this.lastActive;
          return t && 1 === e.grep(this.errorList, function(e) {
              return e.element.name === t.name
            }).length && t
        },
        elements: function() {
          var t = this,
            n = {};
          return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
          })
        },
        clean: function(t) {
          return e(t)[0]
        },
        errors: function() {
          var t = this.settings.errorClass.replace(" ", ".");
          return e(this.settings.errorElement + "." + t, this.errorContext)
        },
        reset: function() {
          this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
        },
        prepareForm: function() {
          this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(e) {
          this.reset(), this.toHide = this.errorsFor(e)
        },
        elementValue: function(t) {
          var n = e(t).attr("type"),
            i = e(t).val();
          return "radio" === n || "checkbox" === n ? e("input[name='" + e(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
        },
        check: function(t) {
          t = this.validationTargetFor(this.clean(t));
          var n, i = e(t).rules(),
            r = !1,
            o = this.elementValue(t);
          for (var a in i) {
            var s = {
              method: a,
              parameters: i[a]
            };
            try {
              if (n = e.validator.methods[a].call(this, o, t, s.parameters), "dependency-mismatch" === n) {
                r = !0;
                continue
              }
              if (r = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!n) return this.formatAndAdd(t, s), !1
            } catch (u) {
              throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + s.method + "' method.", u), u
            }
          }
          return r ? void 0 : (this.objectLength(i) && this.successList.push(t), !0)
        },
        customDataMessage: function(t, n) {
          return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
        },
        customMessage: function(e, t) {
          var n = this.settings.messages[e];
          return n && (n.constructor === String ? n : n[t])
        },
        findDefined: function() {
          for (var e = 0; arguments.length > e; e++)
            if (void 0 !== arguments[e]) return arguments[e];
          return void 0
        },
        defaultMessage: function(t, n) {
          return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
        },
        formatAndAdd: function(t, n) {
          var i = this.defaultMessage(t, n.method),
            r = /\$?\{(\d+)\}/g;
          "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
            message: i,
            element: t
          }), this.errorMap[t.name] = i, this.submitted[t.name] = i
        },
        addWrapper: function(e) {
          return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
        },
        defaultShowErrors: function() {
          var e, t;
          for (e = 0; this.errorList[e]; e++) {
            var n = this.errorList[e];
            this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
          }
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
          if (this.settings.unhighlight)
            for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
          return e(this.errorList).map(function() {
            return this.element
          })
        },
        showLabel: function(t, n) {
          var i = this.errorsFor(t);
          i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(n)) : (i = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t))), !n && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
        },
        errorsFor: function(t) {
          var n = this.idOrName(t);
          return this.errors().filter(function() {
            return e(this).attr("for") === n
          })
        },
        idOrName: function(e) {
          return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
        },
        validationTargetFor: function(e) {
          return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
        },
        checkable: function(e) {
          return /radio|checkbox/i.test(e.type)
        },
        findByName: function(t) {
          return e(this.currentForm).find("[name='" + t + "']")
        },
        getLength: function(t, n) {
          switch (n.nodeName.toLowerCase()) {
            case "select":
              return e("option:selected", n).length;
            case "input":
              if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
          }
          return t.length
        },
        depend: function(e, t) {
          return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
        },
        dependTypes: {
          "boolean": function(e) {
            return e
          },
          string: function(t, n) {
            return !!e(t, n.form).length
          },
          "function": function(e, t) {
            return e(t)
          }
        },
        optional: function(t) {
          var n = this.elementValue(t);
          return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
        },
        startRequest: function(e) {
          this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
        },
        stopRequest: function(t, n) {
          this.pendingRequest--, 0 > this.pendingRequest && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(t) {
          return e.data(t, "previousValue") || e.data(t, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(t, "remote")
            })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        number: {
          number: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function(t, n) {
        t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
      },
      classRules: function(t) {
        var n = {},
          i = e(t).attr("class");
        return i && e.each(i.split(" "), function() {
          this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
        }), n
      },
      attributeRules: function(t) {
        var n = {},
          i = e(t),
          r = i[0].getAttribute("type");
        for (var o in e.validator.methods) {
          var a;
          "required" === o ? (a = i.get(0).getAttribute(o), "" === a && (a = !0), a = !!a) : a = i.attr(o), /min|max/.test(o) && (null === r || /number|range|text/.test(r)) && (a = Number(a)), a ? n[o] = a : r === o && "range" !== r && (n[o] = !0)
        }
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
      },
      dataRules: function(t) {
        var n, i, r = {},
          o = e(t);
        for (n in e.validator.methods) i = o.data("rule-" + n.toLowerCase()), void 0 !== i && (r[n] = i);
        return r
      },
      staticRules: function(t) {
        var n = {},
          i = e.data(t.form, "validator");
        return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
      },
      normalizeRules: function(t, n) {
        return e.each(t, function(i, r) {
          if (r === !1) return void delete t[i];
          if (r.param || r.depends) {
            var o = !0;
            switch (typeof r.depends) {
              case "string":
                o = !!e(r.depends, n.form).length;
                break;
              case "function":
                o = r.depends.call(n, n)
            }
            o ? t[i] = void 0 !== r.param ? r.param : !0 : delete t[i]
          }
        }), e.each(t, function(i, r) {
          t[i] = e.isFunction(r) ? r(n) : r
        }), e.each(["minlength", "maxlength"], function() {
          t[this] && (t[this] = Number(t[this]))
        }), e.each(["rangelength", "range"], function() {
          var n;
          t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
        }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
      },
      normalizeRule: function(t) {
        if ("string" == typeof t) {
          var n = {};
          e.each(t.split(/\s/), function() {
            n[this] = !0
          }), t = n
        }
        return t
      },
      addMethod: function(t, n, i) {
        e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], 3 > n.length && e.validator.addClassRules(t, e.validator.normalizeRule(t))
      },
      methods: {
        required: function(t, n, i) {
          if (!this.depend(i, n)) return "dependency-mismatch";
          if ("select" === n.nodeName.toLowerCase()) {
            var r = e(n).val();
            return r && r.length > 0
          }
          return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
        },
        email: function(e, t) {
          return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
        },
        url: function(e, t) {
          return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
        },
        date: function(e, t) {
          return this.optional(t) || !/Invalid|NaN/.test("" + new Date(e))
        },
        dateISO: function(e, t) {
          return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
        },
        number: function(e, t) {
          return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
        },
        digits: function(e, t) {
          return this.optional(t) || /^\d+$/.test(e)
        },
        creditcard: function(e, t) {
          if (this.optional(t)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(e)) return !1;
          var n = 0,
            i = 0,
            r = !1;
          e = e.replace(/\D/g, "");
          for (var o = e.length - 1; o >= 0; o--) {
            var a = e.charAt(o);
            i = parseInt(a, 10), r && (i *= 2) > 9 && (i -= 9), n += i, r = !r
          }
          return 0 === n % 10
        },
        minlength: function(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || r >= i
        },
        maxlength: function(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || i >= r
        },
        rangelength: function(t, n, i) {
          var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
          return this.optional(n) || r >= i[0] && i[1] >= r
        },
        min: function(e, t, n) {
          return this.optional(t) || e >= n
        },
        max: function(e, t, n) {
          return this.optional(t) || n >= e
        },
        range: function(e, t, n) {
          return this.optional(t) || e >= n[0] && n[1] >= e
        },
        equalTo: function(t, n, i) {
          var r = e(i);
          return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            e(n).valid()
          }), t === r.val()
        },
        remote: function(t, n, i) {
          if (this.optional(n)) return "dependency-mismatch";
          var r = this.previousValue(n);
          if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), r.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = r.message, i = "string" == typeof i && {
                url: i
              } || i, r.old === t) return r.valid;
          r.old = t;
          var o = this;
          this.startRequest(n);
          var a = {};
          return a[n.name] = t, e.ajax(e.extend(!0, {
            url: i,
            mode: "abort",
            port: "validate" + n.name,
            dataType: "json",
            data: a,
            success: function(i) {
              o.settings.messages[n.name].remote = r.originalMessage;
              var a = i === !0 || "true" === i;
              if (a) {
                var s = o.formSubmitted;
                o.prepareElement(n), o.formSubmitted = s, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
              } else {
                var u = {},
                  l = i || o.defaultMessage(n, "remote");
                u[n.name] = r.message = e.isFunction(l) ? l(t) : l, o.invalid[n.name] = !0, o.showErrors(u)
              }
              r.valid = a, o.stopRequest(n, a)
            }
          }, i)), "pending"
        }
      }
    }), e.format = e.validator.format
  }(jQuery),
  function(e) {
    var t = {};
    if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, i) {
      var r = e.port;
      "abort" === e.mode && (t[r] && t[r].abort(), t[r] = i)
    });
    else {
      var n = e.ajax;
      e.ajax = function(i) {
        var r = ("mode" in i ? i : e.ajaxSettings).mode,
          o = ("port" in i ? i : e.ajaxSettings).port;
        return "abort" === r ? (t[o] && t[o].abort(), t[o] = n.apply(this, arguments), t[o]) : n.apply(this, arguments)
      }
    }
  }(jQuery),
  function(e) {
    e.extend(e.fn, {
      validateDelegate: function(t, n, i) {
        return this.bind(n, function(n) {
          var r = e(n.target);
          return r.is(t) ? i.apply(r, arguments) : void 0
        })
      }
    })
  }(jQuery);

var page_id = 1;
! function(e) {
  "use strict";

  function t(e) {
    return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
  }

  function n(e, t) {
    var n = i(e, t) ? o : r;
    n(e, t)
  }
  var i, r, o;
  "classList" in document.documentElement ? (i = function(e, t) {
    return e.classList.contains(t)
  }, r = function(e, t) {
    e.classList.add(t)
  }, o = function(e, t) {
    e.classList.remove(t)
  }) : (i = function(e, n) {
    return t(n).test(e.className)
  }, r = function(e, t) {
    i(e, t) || (e.className = e.className + " " + t)
  }, o = function(e, n) {
    e.className = e.className.replace(t(n), " ")
  });
  var a = {
    hasClass: i,
    addClass: r,
    removeClass: o,
    toggleClass: n,
    has: i,
    add: r,
    remove: o,
    toggle: n
  };
  "function" == typeof define && define.amd ? define(a) : e.classie = a
}(window);

var PageTransitions = function(e) {
  function t() {
    var e = document.body || document.documentElement,
      t = e.style,
      n = "animation";
    if ("string" == typeof t[n]) return "animation";
    v = ["Moz", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1);
    for (var i = 0; i < v.length; i++)
      if ("string" == typeof t[v[i] + n]) return v[i] + n;
    return !1
  }

  function n() {
    e(".et-page").each(function() {
      e(this).data("originalClassList", e(this).attr("class"))
    }), e(".et-wrapper").each(function() {
      e(this).data("current", 0), e(this).data("isAnimating", !1), e(this).children(".et-page").eq(u).addClass("et-page-current")
    }), e(".et-rotate").click(function() {
      i(e(this))
    })
  }

  function i(t, n) {
    page_id = t.data("page-id"), r(e(t).closest(".et-wrapper"), e(t).attr("et-out"), e(t).attr("et-in"), n)
  }

  function r(t, n, i, r) {
    t = e(t), i = s(i), n = s(n);
    var a = t.data("current"),
      u = t.children(".et-page"),
      l = u.length,
      c = !1,
      d = !1;
    if (t.data("isAnimating")) return !1;
    t.data("isAnimating", !0);
    var f = u.eq(a);
    l - 1 > a ? a++ : a = 0, a = page_id - 1, t.data("current", a);
    var h = u.eq(a).addClass("et-page-current");
    f.addClass(n).on(animEndEventName, function() {
      f.off(animEndEventName), c = !0, d && (jQuery.isFunction(r) && r(t, h, f), o(f, h, t))
    }), h.addClass(i).on(animEndEventName, function() {
      h.off(animEndEventName), d = !0, c && o(f, h, t)
    })
  }

  function o(e, t, n) {
    a(e, t), n.data("isAnimating", !1)
  }

  function a(e, t) {
    e.attr("class", e.data("originalClassList")), t.attr("class", t.data("originalClassList") + " et-page-current")
  }

  function s(e) {
    classes = e.split(" "), output = "";
    for (var t = 0; t < classes.length; t++) output += " pt-page-" + classes[t];
    return output
  }
  var u = 0,
    l = {
      WebkitAnimation: "webkitAnimationEnd",
      OAnimation: "oAnimationEnd",
      msAnimation: "MSAnimationEnd",
      animation: "animationend"
    };
  return animEndEventName = l[t()], {
    init: n,
    nextPage: r,
    animate: i
  }
}(jQuery);

jQuery(function() {
  PageTransitions.init()
}),
  function() {
    var e, t, n, i, r, o = function(e, t) {
        return function() {
          return e.apply(t, arguments)
        }
      },
      a = [].indexOf || function(e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === e) return t;
          return -1
        };
    t = function() {
      function e() {}
      return e.prototype.extend = function(e, t) {
        var n, i;
        for (n in t) i = t[n], null == e[n] && (e[n] = i);
        return e
      }, e.prototype.isMobile = function(e) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
      }, e.prototype.addEvent = function(e, t, n) {
        return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
      }, e.prototype.removeEvent = function(e, t, n) {
        return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
      }, e.prototype.innerHeight = function() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
      }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
          this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
          var t, n, i, r, o;
          for (o = this.keys, t = i = 0, r = o.length; r > i; t = ++i)
            if (n = o[t], n === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
          var n, i, r, o, a;
          for (a = this.keys, n = r = 0, o = a.length; o > r; n = ++r)
            if (i = a[n], i === e) return void(this.values[n] = t);
          return this.keys.push(e), this.values.push(t)
        }, e
      }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
          "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
      }()), i = this.getComputedStyle || function(e) {
        return this.getPropertyValue = function(t) {
          var n;
          return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
            return t.toUpperCase()
          }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
        }, this
      }, r = /(\-([a-z]){1})/g, this.WOW = function() {
      function r(e) {
        null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n
      }
      return r.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
      }, r.prototype.init = function() {
        var e;
        return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
      }, r.prototype.start = function() {
        var t, n, i, r;
        if (this.stopped = !1, this.boxes = function() {
            var e, n, i, r;
            for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
            return r
          }.call(this), this.all = function() {
            var e, n, i, r;
            for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
            return r
          }.call(this), this.boxes.length)
          if (this.disabled()) this.resetStyle();
          else
            for (r = this.boxes, n = 0, i = r.length; i > n; n++) t = r[n], this.applyStyle(t, !0);
        return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new e(function(e) {
          return function(t) {
            var n, i, r, o, a;
            for (a = [], r = 0, o = t.length; o > r; r++) i = t[r], a.push(function() {
              var e, t, r, o;
              for (r = i.addedNodes || [], o = [], e = 0, t = r.length; t > e; e++) n = r[e], o.push(this.doSync(n));
              return o
            }.call(e));
            return a
          }
        }(this)).observe(document.body, {
          childList: !0,
          subtree: !0
        }) : void 0
      }, r.prototype.stop = function() {
        return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
      }, r.prototype.sync = function() {
        return e.notSupported ? this.doSync(this.element) : void 0
      }, r.prototype.doSync = function(e) {
        var t, n, i, r, o;
        if (null == e && (e = this.element), 1 === e.nodeType) {
          for (e = e.parentNode || e, r = e.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; i > n; n++) t = r[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
          return o
        }
      }, r.prototype.show = function(e) {
        return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass
      }, r.prototype.applyStyle = function(e, t) {
        var n, i, r;
        return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
          return function() {
            return o.customStyle(e, t, i, n, r)
          }
        }(this))
      }, r.prototype.animate = function() {
        return "requestAnimationFrame" in window ? function(e) {
          return window.requestAnimationFrame(e)
        } : function(e) {
          return e()
        }
      }(), r.prototype.resetStyle = function() {
        var e, t, n, i, r;
        for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.style.visibility = "visible");
        return r
      }, r.prototype.customStyle = function(e, t, n, i, r) {
        return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
          animationDuration: n
        }), i && this.vendorSet(e.style, {
          animationDelay: i
        }), r && this.vendorSet(e.style, {
          animationIterationCount: r
        }), this.vendorSet(e.style, {
          animationName: t ? "none" : this.cachedAnimationName(e)
        }), e
      }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
        var n, i, r, o;
        o = [];
        for (n in t) i = t[n], e["" + n] = i, o.push(function() {
          var t, o, a, s;
          for (a = this.vendors, s = [], t = 0, o = a.length; o > t; t++) r = a[t], s.push(e["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = i);
          return s
        }.call(this));
        return o
      }, r.prototype.vendorCSS = function(e, t) {
        var n, r, o, a, s, u;
        for (r = i(e), n = r.getPropertyCSSValue(t), u = this.vendors, a = 0, s = u.length; s > a; a++) o = u[a], n = n || r.getPropertyCSSValue("-" + o + "-" + t);
        return n
      }, r.prototype.animationName = function(e) {
        var t;
        try {
          t = this.vendorCSS(e, "animation-name").cssText
        } catch (n) {
          t = i(e).getPropertyValue("animation-name")
        }
        return "none" === t ? "" : t
      }, r.prototype.cacheAnimationName = function(e) {
        return this.animationNameCache.set(e, this.animationName(e))
      }, r.prototype.cachedAnimationName = function(e) {
        return this.animationNameCache.get(e)
      }, r.prototype.scrollHandler = function() {
        return this.scrolled = !0
      }, r.prototype.scrollCallback = function() {
        var e;
        return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
          var t, n, i, r;
          for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
          return r
        }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
      }, r.prototype.offsetTop = function(e) {
        for (var t; void 0 === e.offsetTop;) e = e.parentNode;
        for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
        return t
      }, r.prototype.isVisible = function(e) {
        var t, n, i, r, o;
        return n = e.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, r >= i && t >= o
      }, r.prototype.util = function() {
        return null != this._util ? this._util : this._util = new t
      }, r.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
      }, r
    }()
  }.call(this),
  function(e, t, n) {
    "use strict";
    if (!t.history.pushState) return e.fn.smoothState = function() {
      return this
    }, void(e.fn.smoothState.options = {});
    if (!e.fn.smoothState) {
      var i = e("html, body"),
        r = t.console || !1,
        o = {
          anchors: "a",
          prefetch: !1,
          blacklist: ".no-smoothstate, [target]",
          development: !1,
          pageCacheSize: 0,
          alterRequestUrl: function(e) {
            return e
          },
          onStart: {
            duration: 0,
            render: function() {
              i.scrollTop(0)
            }
          },
          onProgress: {
            duration: 0,
            render: function() {
              i.css("cursor", "wait"), i.find("a").css("cursor", "wait")
            }
          },
          onEnd: {
            duration: 0,
            render: function(e, t, n) {
              i.css("cursor", "auto"), i.find("a").css("cursor", "auto"), t.html(n)
            }
          },
          callback: function() {}
        },
        a = {
          isExternal: function(e) {
            var n = e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
            return "string" == typeof n[1] && n[1].length > 0 && n[1].toLowerCase() !== t.location.protocol ? !0 : "string" == typeof n[2] && n[2].length > 0 && n[2].replace(new RegExp(":(" + {
                "http:": 80,
                "https:": 443
              }[t.location.protocol] + ")?$"), "") !== t.location.host ? !0 : !1
          },
          isHash: function(e, n) {
            n = n || t.location.href;
            var i = e.indexOf("#") > -1 ? !0 : !1,
              r = e.replace(/#.*/, "") === n.replace(/#.*/, "") ? !0 : !1;
            return i && r
          },
          shouldLoad: function(e, t) {
            var n = e.prop("href");
            return !a.isExternal(n) && !a.isHash(n) && !e.is(t)
          },
          htmlDoc: function(t) {
            var n, i = e(),
              r = /<(\/?)(html|head|body|title|base|meta)(\s+[^>]*)?>/gi,
              o = "ss" + Math.round(1e5 * Math.random()),
              a = t.replace(r, function(t, n, r, a) {
                var s = {};
                return n || (e.merge(i, e("<" + r + "/>")), a && e.each(e("<div" + a + "/>")[0].attributes, function(e, t) {
                  s[t.name] = t.value
                }), i.eq(-1).attr(s)), "<" + n + "div" + (n ? "" : ' id="' + o + (i.length - 1) + '"') + ">"
              });
            return i.length ? (n || (n = e("<div/>")), n.html(a), e.each(i, function(e) {
              var t = n.find("#" + o + e).before(i[e]);
              i.eq(e).html(t.contents()), t.remove()
            }), n.children().unwrap()) : e(t)
          },
          clearIfOverCapacity: function(e, t) {
            return Object.keys || (Object.keys = function(e) {
              var t, n = [];
              for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
              return n
            }), Object.keys(e).length > t && (e = {}), e
          },
          getContentById: function(t, n) {
            n = n instanceof jQuery ? n : a.htmlDoc(n);
            var i = n.find(t),
              r = i.length ? e.trim(i.html()) : n.filter(t).html(),
              o = r.length ? e(r) : null;
            return o
          },
          storePageIn: function(e, t, n) {
            return n = n instanceof jQuery ? n : a.htmlDoc(n), e[t] = {
              status: "loaded",
              title: n.find("title").text(),
              html: n
            }, e
          },
          triggerAllAnimationEndEvent: function(t, n) {
            n = " " + n || "";
            var i = 0,
              r = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
              o = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
              s = "allanimationend",
              u = function(n) {
                e(n.delegateTarget).is(t) && (n.stopPropagation(), i++)
              },
              l = function(n) {
                e(n.delegateTarget).is(t) && (n.stopPropagation(), i--, 0 === i && t.trigger(s))
              };
            t.on(r, u), t.on(o, l), t.on("allanimationend" + n, function() {
              i = 0, a.redraw(t)
            })
          },
          redraw: function(e) {
            e.height()
          }
        },
        s = function(n) {
          if (null !== n.state) {
            var i = t.location.href,
              r = e("#" + n.state.id),
              o = r.data("smoothState");
            o.href === i || a.isHash(i, o.href) || o.load(i, !0)
          }
        },
        u = function(i, o) {
          var s = e(i),
            u = {},
            l = t.location.href,
            c = function(t, n) {
              if (n = n || null, !u.hasOwnProperty(t)) {
                u = a.clearIfOverCapacity(u, o.pageCacheSize), u[t] = {
                  status: "fetching"
                };
                var i = o.alterRequestUrl(t) || t,
                  r = e.ajax(i, {
                    dataType: "html"
                  });
                r.success(function(e) {
                  a.storePageIn(u, t, e), s.data("smoothState").cache = u
                }), r.error(function() {
                  u[t].status = "error"
                }), n && r.complete(n)
              }
            },
            d = function(e) {
              var i = "#" + s.prop("id"),
                l = u[e] ? a.getContentById(i, u[e].html) : null;
              l ? (n.title = u[e].title, s.data("smoothState").href = e, o.onEnd.render(e, s, l, u[e].html), s.one("ss.onEndEnd", function() {
                o.callback(e, s, l, u[e].html)
              }), t.setTimeout(function() {
                s.trigger("ss.onEndEnd")
              }, o.onEnd.duration)) : !l && o.development && r ? r.warn("No element with an id of " + i + " in response from " + e + " in " + u) : t.location = e
            },
            f = function(e, n) {
              n = n || !1;
              var i = !1,
                a = !1,
                l = {
                  loaded: function() {
                    var r = i ? "ss.onProgressEnd" : "ss.onStartEnd";
                    a && i ? a && d(e) : s.one(r, function() {
                      d(e)
                    }), n || t.history.pushState({
                      id: s.prop("id")
                    }, u[e].title, e)
                  },
                  fetching: function() {
                    i || (i = !0, s.one("ss.onStartEnd", function() {
                      o.onProgress.render(e, s, null), t.setTimeout(function() {
                        s.trigger("ss.onProgressEnd"), a = !0
                      }, o.onStart.duration)
                    })), t.setTimeout(function() {
                      u.hasOwnProperty(e) && l[u[e].status]()
                    }, 10)
                  },
                  error: function() {
                    o.development && r ? r.log("There was an error loading: " + e) : t.location = e
                  }
                };
              u.hasOwnProperty(e) || c(e), o.onStart.render(e, s, null), t.setTimeout(function() {
                s.trigger("ss.onStartEnd")
              }, o.onStart.duration), l[u[e].status]()
            },
            h = function(t) {
              var n = e(t.currentTarget),
                i = n.prop("href");
              a.shouldLoad(n, o.blacklist) && (t.stopPropagation(), c(i))
            },
            p = function(t) {
              var n = e(t.currentTarget),
                i = n.prop("href");
              t.metaKey || t.ctrlKey || !a.shouldLoad(n, o.blacklist) || (t.stopPropagation(), t.preventDefault(), f(i))
            },
            m = function(e) {
              e.on("click", o.anchors, p), o.prefetch && e.on("mouseover touchstart", o.anchors, h)
            },
            g = function(e) {
              var n = s.addClass(e).prop("class");
              s.removeClass(n), t.setTimeout(function() {
                s.addClass(n)
              }, 0), s.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd", function() {
                s.removeClass(e)
              })
            },
            v = function() {
              var e = s.prop("class");
              s.removeClass(e), a.redraw(s), s.addClass(e)
            };
          return o = e.extend({}, e.fn.smoothState.options, o), null === t.history.state && t.history.replaceState({
            id: s.prop("id")
          }, n.title, l), a.storePageIn(u, l, n.documentElement.outerHTML), a.triggerAllAnimationEndEvent(s, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), m(s), {
            href: l,
            cache: u,
            load: f,
            fetch: c,
            toggleAnimationClass: g,
            restartCSSAnimations: v
          }
        },
        l = function(t) {
          return this.each(function() {
            this.id && !e.data(this, "smoothState") ? e.data(this, "smoothState", new u(this, t)) : !this.id && r && r.warn("Every smoothState container needs an id but the following one does not have one:", this)
          })
        };
      t.onpopstate = s, e.smoothStateUtility = a, e.fn.smoothState = l, e.fn.smoothState.options = o
    }
  }(jQuery, window, document),
  function(e) {
    "use strict";
    var t = e("html, body"),
      n = e("#main"),
      i = {
        prefetch: !0,
        pageCacheSize: 4,
        onStart: {
          duration: 350,
          render: function() {
            t.animate({
              scrollTop: 0
            }), n.addClass("is-exiting"), r.restartCSSAnimations()
          }
        },
        onEnd: {
          duration: 0,
          render: function(i, r, o) {
            n.removeClass("is-exiting"), n.html(o), t.css("cursor", "auto"), t.find("a").css("cursor", "auto"), e("#nav-icon").click(function() {
              return e(this).toggleClass("open"), e(".menu-trigger").toggleClass("opened"), !1
            }), e("ul.menu").click(function() {
              e(".menu-trigger").removeClass("opened"), e("#nav-icon").removeClass("open")
            }), e(".menu-trigger button").click(function() {
              d.parents(".menu-trigger").removeClass("opened"), e("#nav-icon").removeClass("open")
            });
            var a = e("#back-top"),
              s = e("#back-top a");
            a.hide(), e(".wow").css("visibility", "hidden");
            var u = new WOW({
              boxClass: "wow",
              animateClass: "animated",
              offset: 0,
              mobile: !0,
              live: !0,
              callback: function() {}
            });
            e(".trigger").click(function() {
              e(".wow").removeClass("wow animated").removeAttr("style")
            }), e(window).width() <= 979 && e(".wow").removeClass("wow animated").removeAttr("style"), setTimeout(function() {
              u.init()
            }, 1650), PageTransitions.init(), e(function() {
              e(window).scroll(function() {
                e(this).scrollTop() > 100 ? a.fadeIn() : a.fadeOut()
              }), s.click(function() {
                return e("body,html").animate({
                  scrollTop: 0
                }, 550, "swing"), !1
              }), setTimeout(function() {
                e("body").addClass("loaded")
              }, 1350), e("body").removeClass("loaded"), e("li.trigger").click(function() {
                e("li.trigger").addClass("clicked")
              })
            })
          }
        }
      },
      r = n.smoothState(i).data("smoothState");
    window.smoothstate = r
  }(jQuery), $(document).ready(function() {
  var e = $(this);
  $("#nav-icon").click(function() {
    return $(this).toggleClass("open"), $(".menu-trigger").toggleClass("opened"), !1
  }), $("ul.menu").click(function() {
    $(".menu-trigger").removeClass("opened"), $("#nav-icon").removeClass("open")
  }), $(".menu-trigger button").click(function() {
    e.parents(".menu-trigger").removeClass("opened"), $("#nav-icon").removeClass("open")
  });
  var t = $("#back-top"),
    n = $("#back-top a");
  t.hide(), $(function() {
    $(window).scroll(function() {
      e.scrollTop() > 100 ? t.fadeIn() : t.fadeOut()
    }), n.click(function() {
      return $("body,html").animate({
        scrollTop: 0
      }, 550, "swing"), !1
    }), $(".wow").css("visibility", "hidden");
    var i = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function() {}
    });
    setTimeout(function() {
      i.init()
    }, 1650), $(".trigger").click(function() {
      $(".wow").removeClass("wow animated").removeAttr("style")
    })
  }), $("li.trigger").click(function() {
    $("li.trigger").addClass("clicked")
  }), $(window).width() <= 979 && $(".wow").removeClass("wow animated").removeAttr("style"), $("body").removeClass("loaded"), setTimeout(function() {
    $("body").addClass("loaded")
  }, 1350)
});