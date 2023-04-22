"use strict";
(self["webpackChunkbrowser"] = self["webpackChunkbrowser"] || []).push([[5861],{

/***/ 35861:
/*!*******************************************************!*\
  !*** ./node_modules/jazzicon-ts/dist/index.modern.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ F)
/* harmony export */ });
var t = function (t) {
  null == t && (t = new Date().getTime()), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, t.constructor == Array ? this.init_by_array(t, t.length) : this.init_seed(t);
};
t.prototype.init_seed = function (t) {
  for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) this.mt[this.mti] = (1812433253 * ((4294901760 & (t = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30)) >>> 16) << 16) + 1812433253 * (65535 & t) + this.mti, this.mt[this.mti] >>>= 0;
}, t.prototype.init_by_array = function (t, r) {
  var n, i, s;
  for (this.init_seed(19650218), n = 1, i = 0, s = this.N > r ? this.N : r; s; s--) this.mt[n] = (this.mt[n] ^ (1664525 * ((4294901760 & (e = this.mt[n - 1] ^ this.mt[n - 1] >>> 30)) >>> 16) << 16) + 1664525 * (65535 & e)) + t[i] + i, this.mt[n] >>>= 0, i++, ++n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1), i >= r && (i = 0);
  for (s = this.N - 1; s; s--) {
    var e;
    this.mt[n] = (this.mt[n] ^ (1566083941 * ((4294901760 & (e = this.mt[n - 1] ^ this.mt[n - 1] >>> 30)) >>> 16) << 16) + 1566083941 * (65535 & e)) - n, this.mt[n] >>>= 0, ++n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1);
  }
  this.mt[0] = 2147483648;
}, t.prototype.random_int = function () {
  var t,
    r = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var n;
    for (this.mti == this.N + 1 && this.init_seed(5489), n = 0; n < this.N - this.M; n++) this.mt[n] = this.mt[n + this.M] ^ (t = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK) >>> 1 ^ r[1 & t];
    for (; n < this.N - 1; n++) this.mt[n] = this.mt[n + (this.M - this.N)] ^ (t = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK) >>> 1 ^ r[1 & t];
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ (t = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK) >>> 1 ^ r[1 & t], this.mti = 0;
  }
  return t = this.mt[this.mti++], t ^= t >>> 11, t ^= t << 7 & 2636928640, t ^= t << 15 & 4022730752, (t ^= t >>> 18) >>> 0;
}, t.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
}, t.prototype.random_incl = function () {
  return this.random_int() * (1 / 4294967295);
}, t.prototype.random = function () {
  return this.random_int() * (1 / 4294967296);
}, t.prototype.random_excl = function () {
  return (this.random_int() + .5) * (1 / 4294967296);
}, t.prototype.random_long = function () {
  return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992);
};
var r = t;
const n = "http://www.w3.org/2000/svg",
  i = ["#01888C", "#FC7500", "#034F5D", "#F73F01", "#FC1960", "#C7144C", "#F3C100", "#1598F2", "#2465E1", "#F19E02"];
var s = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
  },
  e = function (t) {
    return "string" == typeof t ? t.length > 0 : "number" == typeof t;
  },
  o = function (t, r, n) {
    return void 0 === r && (r = 0), void 0 === n && (n = Math.pow(10, r)), Math.round(n * t) / n + 0;
  },
  u = function (t, r, n) {
    return void 0 === r && (r = 0), void 0 === n && (n = 1), t > n ? n : t > r ? t : r;
  },
  a = function (t) {
    return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360;
  },
  h = function (t) {
    return {
      r: u(t.r, 0, 255),
      g: u(t.g, 0, 255),
      b: u(t.b, 0, 255),
      a: u(t.a)
    };
  },
  l = function (t) {
    return {
      r: o(t.r),
      g: o(t.g),
      b: o(t.b),
      a: o(t.a, 3)
    };
  },
  d = /^#([0-9a-f]{3,8})$/i,
  m = function (t) {
    var r = t.toString(16);
    return r.length < 2 ? "0" + r : r;
  },
  c = function (t) {
    var r = t.r,
      n = t.g,
      i = t.b,
      s = t.a,
      e = Math.max(r, n, i),
      o = e - Math.min(r, n, i),
      u = o ? e === r ? (n - i) / o : e === n ? 2 + (i - r) / o : 4 + (r - n) / o : 0;
    return {
      h: 60 * (u < 0 ? u + 6 : u),
      s: e ? o / e * 100 : 0,
      v: e / 255 * 100,
      a: s
    };
  },
  b = function (t) {
    var r = t.h,
      n = t.s,
      i = t.v,
      s = t.a;
    r = r / 360 * 6, n /= 100, i /= 100;
    var e = Math.floor(r),
      o = i * (1 - n),
      u = i * (1 - (r - e) * n),
      a = i * (1 - (1 - r + e) * n),
      h = e % 6;
    return {
      r: 255 * [i, u, o, o, a, i][h],
      g: 255 * [a, i, i, u, o, o][h],
      b: 255 * [o, o, a, i, i, u][h],
      a: s
    };
  },
  p = function (t) {
    return {
      h: a(t.h),
      s: u(t.s, 0, 100),
      l: u(t.l, 0, 100),
      a: u(t.a)
    };
  },
  f = function (t) {
    return {
      h: o(t.h),
      s: o(t.s),
      l: o(t.l),
      a: o(t.a, 3)
    };
  },
  g = function (t) {
    return b((n = (r = t).s, {
      h: r.h,
      s: (n *= ((i = r.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * n / (i + n) * 100 : 0,
      v: i + n,
      a: r.a
    }));
    var r, n, i;
  },
  v = function (t) {
    return {
      h: (r = c(t)).h,
      s: (s = (200 - (n = r.s)) * (i = r.v) / 100) > 0 && s < 200 ? n * i / 100 / (s <= 100 ? s : 200 - s) * 100 : 0,
      l: s / 2,
      a: r.a
    };
    var r, n, i, s;
  },
  y = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  N = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  _ = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  S = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
  A = {
    string: [[function (t) {
      var r = d.exec(t);
      return r ? (t = r[1]).length <= 4 ? {
        r: parseInt(t[0] + t[0], 16),
        g: parseInt(t[1] + t[1], 16),
        b: parseInt(t[2] + t[2], 16),
        a: 4 === t.length ? o(parseInt(t[3] + t[3], 16) / 255, 2) : 1
      } : 6 === t.length || 8 === t.length ? {
        r: parseInt(t.substr(0, 2), 16),
        g: parseInt(t.substr(2, 2), 16),
        b: parseInt(t.substr(4, 2), 16),
        a: 8 === t.length ? o(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
      } : null : null;
    }, "hex"], [function (t) {
      var r = _.exec(t) || S.exec(t);
      return r ? r[2] !== r[4] || r[4] !== r[6] ? null : h({
        r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
        g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
        b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
        a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)
      }) : null;
    }, "rgb"], [function (t) {
      var r = y.exec(t) || N.exec(t);
      if (!r) return null;
      var n,
        i,
        e = p({
          h: (n = r[1], i = r[2], void 0 === i && (i = "deg"), Number(n) * (s[i] || 1)),
          s: Number(r[3]),
          l: Number(r[4]),
          a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
        });
      return g(e);
    }, "hsl"]],
    object: [[function (t) {
      var r = t.r,
        n = t.g,
        i = t.b,
        s = t.a,
        o = void 0 === s ? 1 : s;
      return e(r) && e(n) && e(i) ? h({
        r: Number(r),
        g: Number(n),
        b: Number(i),
        a: Number(o)
      }) : null;
    }, "rgb"], [function (t) {
      var r = t.h,
        n = t.s,
        i = t.l,
        s = t.a,
        o = void 0 === s ? 1 : s;
      if (!e(r) || !e(n) || !e(i)) return null;
      var u = p({
        h: Number(r),
        s: Number(n),
        l: Number(i),
        a: Number(o)
      });
      return g(u);
    }, "hsl"], [function (t) {
      var r = t.h,
        n = t.s,
        i = t.v,
        s = t.a,
        o = void 0 === s ? 1 : s;
      if (!e(r) || !e(n) || !e(i)) return null;
      var h = function (t) {
        return {
          h: a(t.h),
          s: u(t.s, 0, 100),
          v: u(t.v, 0, 100),
          a: u(t.a)
        };
      }({
        h: Number(r),
        s: Number(n),
        v: Number(i),
        a: Number(o)
      });
      return b(h);
    }, "hsv"]]
  },
  M = function (t, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n][0](t);
      if (i) return [i, r[n][1]];
    }
    return [null, void 0];
  },
  x = function (t, r) {
    var n = v(t);
    return {
      h: n.h,
      s: u(n.s + 100 * r, 0, 100),
      l: n.l,
      a: n.a
    };
  },
  w = function (t) {
    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255;
  },
  E = function (t, r) {
    var n = v(t);
    return {
      h: n.h,
      s: n.s,
      l: u(n.l + 100 * r, 0, 100),
      a: n.a
    };
  },
  R = function () {
    function t(t) {
      this.parsed = function (t) {
        return "string" == typeof t ? M(t.trim(), A.string) : "object" == typeof t && null !== t ? M(t, A.object) : [null, void 0];
      }(t)[0], this.rgba = this.parsed || {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
    }
    return t.prototype.isValid = function () {
      return null !== this.parsed;
    }, t.prototype.brightness = function () {
      return o(w(this.rgba), 2);
    }, t.prototype.isDark = function () {
      return w(this.rgba) < .5;
    }, t.prototype.isLight = function () {
      return w(this.rgba) >= .5;
    }, t.prototype.toHex = function () {
      return r = (t = l(this.rgba)).r, n = t.g, i = t.b, e = (s = t.a) < 1 ? m(o(255 * s)) : "", "#" + m(r) + m(n) + m(i) + e;
      var t, r, n, i, s, e;
    }, t.prototype.toRgb = function () {
      return l(this.rgba);
    }, t.prototype.toRgbString = function () {
      return r = (t = l(this.rgba)).r, n = t.g, i = t.b, (s = t.a) < 1 ? "rgba(" + r + ", " + n + ", " + i + ", " + s + ")" : "rgb(" + r + ", " + n + ", " + i + ")";
      var t, r, n, i, s;
    }, t.prototype.toHsl = function () {
      return f(v(this.rgba));
    }, t.prototype.toHslString = function () {
      return r = (t = f(v(this.rgba))).h, n = t.s, i = t.l, (s = t.a) < 1 ? "hsla(" + r + ", " + n + "%, " + i + "%, " + s + ")" : "hsl(" + r + ", " + n + "%, " + i + "%)";
      var t, r, n, i, s;
    }, t.prototype.toHsv = function () {
      return t = c(this.rgba), {
        h: o(t.h),
        s: o(t.s),
        v: o(t.v),
        a: o(t.a, 3)
      };
      var t;
    }, t.prototype.invert = function () {
      return I({
        r: 255 - (t = this.rgba).r,
        g: 255 - t.g,
        b: 255 - t.b,
        a: t.a
      });
      var t;
    }, t.prototype.saturate = function (t) {
      return void 0 === t && (t = .1), I(x(this.rgba, t));
    }, t.prototype.desaturate = function (t) {
      return void 0 === t && (t = .1), I(x(this.rgba, -t));
    }, t.prototype.grayscale = function () {
      return I(x(this.rgba, -1));
    }, t.prototype.lighten = function (t) {
      return void 0 === t && (t = .1), I(E(this.rgba, t));
    }, t.prototype.darken = function (t) {
      return void 0 === t && (t = .1), I(E(this.rgba, -t));
    }, t.prototype.rotate = function (t) {
      return void 0 === t && (t = 15), this.hue(this.hue() + t);
    }, t.prototype.alpha = function (t) {
      return "number" == typeof t ? I({
        r: (r = this.rgba).r,
        g: r.g,
        b: r.b,
        a: t
      }) : o(this.rgba.a, 3);
      var r;
    }, t.prototype.hue = function (t) {
      var r = v(this.rgba);
      return "number" == typeof t ? I({
        h: t,
        s: r.s,
        l: r.l,
        a: r.a
      }) : o(r.h);
    }, t.prototype.isEqual = function (t) {
      return this.toHex() === I(t).toHex();
    }, t;
  }(),
  I = function (t) {
    return t instanceof R ? t : new R(t);
  };
let $;
function F(t, s) {
  $ = new r(s);
  const e = function (t, r) {
      const n = 30 * r.random() - 15;
      return t.map(t => I(t).rotate(n).toHex());
    }(i.slice(), $),
    o = function (t, r) {
      const n = document.createElement("div");
      return n.style.borderRadius = "9999px", n.style.overflow = "hidden", n.style.padding = "0px", n.style.margin = "0px", n.style.width = `${t}px`, n.style.height = `${t}px`, n.style.display = "inline-block", n.style.background = r, n;
    }(t, C(e)),
    u = document.createElementNS(n, "svg");
  u.setAttributeNS(null, "x", "0"), u.setAttributeNS(null, "y", "0"), u.setAttributeNS(null, "width", String(t)), u.setAttributeNS(null, "height", String(t)), o.appendChild(u);
  for (var a = 0; a < 3; a++) P(e, t, a, 3, u);
  return o;
}
function P(t, r, i, s, e) {
  const o = r / 2,
    u = document.createElementNS(n, "rect");
  u.setAttributeNS(null, "x", "0"), u.setAttributeNS(null, "y", "0"), u.setAttributeNS(null, "width", String(r)), u.setAttributeNS(null, "height", String(r));
  const a = $.random(),
    h = 2 * Math.PI * a,
    l = r / s * $.random() + i * r / s,
    d = `translate(${Math.cos(h) * l} ${Math.sin(h) * l})`,
    m = `rotate(${(360 * a + 180 * $.random()).toFixed(1)} ${o} ${o})`;
  u.setAttributeNS(null, "transform", d + " " + m);
  const c = C(t);
  u.setAttributeNS(null, "fill", c), e.appendChild(u);
}
function C(t) {
  $.random();
  const r = Math.floor(t.length * $.random());
  return t.splice(r, 1)[0];
}


/***/ })

}]);
//# sourceMappingURL=5861.80c55f1b83af0d09.js.map