import {
  G as Vn,
  I as za,
  P as Ia,
  i as w,
  J as ft,
  f as v,
  g as de,
  L as oe,
  M as Pe,
  a as vl,
  e as An,
  N as Oe,
  b as Mn,
  r as R,
  k as _e,
  T as _t,
  s as pe,
  O as Le,
  Q as Be,
  H as Nl,
  R as Yt,
  h as fe,
  w as te,
  j as Xe,
  S as Hl,
  q as En,
  U as xl,
  V as Fa,
  c as ze,
  W as Pa,
  X as Na,
  Y as Ha,
  Z as $n,
  _ as Bn,
  $ as Tn,
  a0 as Da,
  a1 as Ln,
  n as ja,
  o as Wa,
  a2 as Ka,
  a3 as yt,
  a4 as Rn,
  a5 as On,
  t as ee,
  D as Ve,
  y as T,
  v as q,
  z as re,
  x as W,
  a6 as me,
  a7 as Ft,
  E as Ee,
  C as Fe,
  a8 as Ua,
  a9 as Qa,
  u as be,
  F as St,
  A as Pt,
  aa as Dl,
  ab as Ya,
  ac as jl,
} from "./index.365d9f13.js";
const ge = (e) => Vn(za(e)),
  zn = (e) => Vn(e);
function Ja() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0
      ? e.empty()
      : e.removeAllRanges !== void 0 &&
        (e.removeAllRanges(),
        Ia.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
function Ae(e, t) {
  return (e !== void 0 && e()) || t;
}
function Xa(e, t) {
  if (e !== void 0) {
    const l = e();
    if (l != null) return l.slice();
  }
  return t;
}
function Ke(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Za(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function Ga(e, t, l, n, a, u) {
  t.key = n + a;
  const o = w(e, t, l);
  return a === !0 ? ft(o, u()) : o;
}
function Nt(e) {
  if (Object(e.$parent) === e.$parent) return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy) return t.proxy;
    t = t.parent;
  }
}
function In(e, t) {
  typeof t.type == "symbol"
    ? Array.isArray(t.children) === !0 &&
      t.children.forEach((l) => {
        In(e, l);
      })
    : e.add(t);
}
function Wu(e) {
  const t = new Set();
  return (
    e.forEach((l) => {
      In(t, l);
    }),
    Array.from(t)
  );
}
function Fn(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Pn(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
const ml = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 },
  Sl = { size: String };
function kl(e, t = ml) {
  return v(() =>
    e.size !== void 0
      ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size }
      : null
  );
}
const Wl = "0 0 24 24",
  Kl = (e) => e,
  al = (e) => `ionicons ${e}`,
  Nn = {
    "mdi-": (e) => `mdi ${e}`,
    "icon-": Kl,
    "bt-": (e) => `bt ${e}`,
    "eva-": (e) => `eva ${e}`,
    "ion-md": al,
    "ion-ios": al,
    "ion-logo": al,
    "iconfont ": Kl,
    "ti-": (e) => `themify-icon ${e}`,
    "bi-": (e) => `bootstrap-icons ${e}`,
  },
  Hn = { o_: "-outlined", r_: "-round", s_: "-sharp" },
  Dn = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" },
  eo = new RegExp("^(" + Object.keys(Nn).join("|") + ")"),
  to = new RegExp("^(" + Object.keys(Hn).join("|") + ")"),
  Ul = new RegExp("^(" + Object.keys(Dn).join("|") + ")"),
  lo = /^[Mm]\s?[-+]?\.?\d/,
  no = /^img:/,
  ao = /^svguse:/,
  oo = /^ion-/,
  io = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var se = ge({
  name: "QIcon",
  props: {
    ...Sl,
    tag: { type: String, default: "i" },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean,
  },
  setup(e, { slots: t }) {
    const {
        proxy: { $q: l },
      } = de(),
      n = kl(e),
      a = v(
        () =>
          "q-icon" +
          (e.left === !0 ? " on-left" : "") +
          (e.right === !0 ? " on-right" : "") +
          (e.color !== void 0 ? ` text-${e.color}` : "")
      ),
      u = v(() => {
        let o,
          r = e.name;
        if (r === "none" || !r) return { none: !0 };
        if (l.iconMapFn !== null) {
          const s = l.iconMapFn(r);
          if (s !== void 0)
            if (s.icon !== void 0) {
              if (((r = s.icon), r === "none" || !r)) return { none: !0 };
            } else
              return {
                cls: s.cls,
                content: s.content !== void 0 ? s.content : " ",
              };
        }
        if (lo.test(r) === !0) {
          const [s, h = Wl] = r.split("|");
          return {
            svg: !0,
            viewBox: h,
            nodes: s.split("&&").map((g) => {
              const [d, y, N] = g.split("@@");
              return w("path", { style: y, d, transform: N });
            }),
          };
        }
        if (no.test(r) === !0) return { img: !0, src: r.substring(4) };
        if (ao.test(r) === !0) {
          const [s, h = Wl] = r.split("|");
          return { svguse: !0, src: s.substring(7), viewBox: h };
        }
        let m = " ";
        const b = r.match(eo);
        if (b !== null) o = Nn[b[1]](r);
        else if (io.test(r) === !0) o = r;
        else if (oo.test(r) === !0)
          o = `ionicons ion-${
            l.platform.is.ios === !0 ? "ios" : "md"
          }${r.substring(3)}`;
        else if (Ul.test(r) === !0) {
          o = "notranslate material-symbols";
          const s = r.match(Ul);
          s !== null && ((r = r.substring(6)), (o += Dn[s[1]])), (m = r);
        } else {
          o = "notranslate material-icons";
          const s = r.match(to);
          s !== null && ((r = r.substring(2)), (o += Hn[s[1]])), (m = r);
        }
        return { cls: o, content: m };
      });
    return () => {
      const o = {
        class: a.value,
        style: n.value,
        "aria-hidden": "true",
        role: "presentation",
      };
      return u.value.none === !0
        ? w(e.tag, o, Ae(t.default))
        : u.value.img === !0
        ? w("span", o, Ke(t.default, [w("img", { src: u.value.src })]))
        : u.value.svg === !0
        ? w(
            "span",
            o,
            Ke(t.default, [
              w(
                "svg",
                { viewBox: u.value.viewBox || "0 0 24 24" },
                u.value.nodes
              ),
            ])
          )
        : u.value.svguse === !0
        ? w(
            "span",
            o,
            Ke(t.default, [
              w("svg", { viewBox: u.value.viewBox }, [
                w("use", { "xlink:href": u.value.src }),
              ]),
            ])
          )
        : (u.value.cls !== void 0 && (o.class += " " + u.value.cls),
          w(e.tag, o, Ke(t.default, [u.value.content])));
    };
  },
});
const uo = { size: { type: [Number, String], default: "1em" }, color: String };
function ro(e) {
  return {
    cSize: v(() => (e.size in ml ? `${ml[e.size]}px` : e.size)),
    classes: v(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")),
  };
}
var jn = ge({
  name: "QSpinner",
  props: { ...uo, thickness: { type: Number, default: 5 } },
  setup(e) {
    const { cSize: t, classes: l } = ro(e);
    return () =>
      w(
        "svg",
        {
          class: l.value + " q-spinner-mat",
          width: t.value,
          height: t.value,
          viewBox: "25 25 50 50",
        },
        [
          w("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10",
          }),
        ]
      );
  },
});
function gl(e, t) {
  const l = e.style;
  for (const n in t) l[n] = t[n];
}
function so(e) {
  if (e == null) return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = oe(e);
  if (t) return t.$el || t;
}
function Wn(e, t) {
  if (e == null || e.contains(t) === !0) return !0;
  for (let l = e.nextElementSibling; l !== null; l = l.nextElementSibling)
    if (l.contains(t)) return !0;
  return !1;
}
function co(e, t = 250) {
  let l = !1,
    n;
  return function () {
    return (
      l === !1 &&
        ((l = !0),
        setTimeout(() => {
          l = !1;
        }, t),
        (n = e.apply(this, arguments))),
      n
    );
  };
}
function Ql(e, t, l, n) {
  l.modifiers.stop === !0 && Oe(e);
  const a = l.modifiers.color;
  let u = l.modifiers.center;
  u = u === !0 || n === !0;
  const o = document.createElement("span"),
    r = document.createElement("span"),
    m = Mn(e),
    { left: b, top: s, width: h, height: g } = t.getBoundingClientRect(),
    d = Math.sqrt(h * h + g * g),
    y = d / 2,
    N = `${(h - d) / 2}px`,
    S = u ? N : `${m.left - b - y}px`,
    B = `${(g - d) / 2}px`,
    V = u ? B : `${m.top - s - y}px`;
  (r.className = "q-ripple__inner"),
    gl(r, {
      height: `${d}px`,
      width: `${d}px`,
      transform: `translate3d(${S},${V},0) scale3d(.2,.2,1)`,
      opacity: 0,
    }),
    (o.className = `q-ripple${a ? " text-" + a : ""}`),
    o.setAttribute("dir", "ltr"),
    o.appendChild(r),
    t.appendChild(o);
  const z = () => {
    o.remove(), clearTimeout(U);
  };
  l.abort.push(z);
  let U = setTimeout(() => {
    r.classList.add("q-ripple__inner--enter"),
      (r.style.transform = `translate3d(${N},${B},0) scale3d(1,1,1)`),
      (r.style.opacity = 0.2),
      (U = setTimeout(() => {
        r.classList.remove("q-ripple__inner--enter"),
          r.classList.add("q-ripple__inner--leave"),
          (r.style.opacity = 0),
          (U = setTimeout(() => {
            o.remove(), l.abort.splice(l.abort.indexOf(z), 1);
          }, 275));
      }, 250));
  }, 50);
}
function Yl(e, { modifiers: t, value: l, arg: n }) {
  const a = Object.assign({}, e.cfg.ripple, t, l);
  e.modifiers = {
    early: a.early === !0,
    stop: a.stop === !0,
    center: a.center === !0,
    color: a.color || n,
    keyCodes: [].concat(a.keyCodes || 13),
  };
}
var Kn = zn({
  name: "ripple",
  beforeMount(e, t) {
    const l = t.instance.$.appContext.config.globalProperties.$q.config || {};
    if (l.ripple === !1) return;
    const n = {
      cfg: l,
      enabled: t.value !== !1,
      modifiers: {},
      abort: [],
      start(a) {
        n.enabled === !0 &&
          a.qSkipRipple !== !0 &&
          a.type === (n.modifiers.early === !0 ? "pointerdown" : "click") &&
          Ql(a, e, n, a.qKeyEvent === !0);
      },
      keystart: co((a) => {
        n.enabled === !0 &&
          a.qSkipRipple !== !0 &&
          Pe(a, n.modifiers.keyCodes) === !0 &&
          a.type === `key${n.modifiers.early === !0 ? "down" : "up"}` &&
          Ql(a, e, n, !0);
      }, 300),
    };
    Yl(n, t),
      (e.__qripple = n),
      vl(n, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"],
      ]);
  },
  updated(e, t) {
    if (t.oldValue !== t.value) {
      const l = e.__qripple;
      l !== void 0 &&
        ((l.enabled = t.value !== !1),
        l.enabled === !0 && Object(t.value) === t.value && Yl(l, t));
    }
  },
  beforeUnmount(e) {
    const t = e.__qripple;
    t !== void 0 &&
      (t.abort.forEach((l) => {
        l();
      }),
      An(t, "main"),
      delete e._qripple);
  },
});
const Un = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch",
  },
  fo = Object.keys(Un),
  Qn = { align: { type: String, validator: (e) => fo.includes(e) } };
function Yn(e) {
  return v(() => {
    const t =
      e.align === void 0 ? (e.vertical === !0 ? "stretch" : "left") : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${Un[t]}`;
  });
}
function Jl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
function Xl(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vo(e, t) {
  for (const l in t) {
    const n = t[l],
      a = e[l];
    if (typeof n == "string") {
      if (n !== a) return !1;
    } else if (
      Array.isArray(a) === !1 ||
      a.length !== n.length ||
      n.some((u, o) => u !== a[o])
    )
      return !1;
  }
  return !0;
}
function Zl(e, t) {
  return Array.isArray(t) === !0
    ? e.length === t.length && e.every((l, n) => l === t[n])
    : e.length === 1 && e[0] === t;
}
function mo(e, t) {
  return Array.isArray(e) === !0
    ? Zl(e, t)
    : Array.isArray(t) === !0
    ? Zl(t, e)
    : e === t;
}
function go(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const l in e) if (mo(e[l], t[l]) === !1) return !1;
  return !0;
}
const Jn = {
  to: [String, Object],
  replace: Boolean,
  exact: Boolean,
  activeClass: { type: String, default: "q-router-link--active" },
  exactActiveClass: { type: String, default: "q-router-link--exact-active" },
  href: String,
  target: String,
  disable: Boolean,
};
function Xn({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const l = de(),
    { props: n, proxy: a, emit: u } = l,
    o = Fn(l),
    r = v(() => n.disable !== !0 && n.href !== void 0),
    m =
      t === !0
        ? v(
            () =>
              o === !0 &&
              n.disable !== !0 &&
              r.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ""
          )
        : v(
            () =>
              o === !0 &&
              r.value !== !0 &&
              n.to !== void 0 &&
              n.to !== null &&
              n.to !== ""
          ),
    b = v(() => (m.value === !0 ? V(n.to) : null)),
    s = v(() => b.value !== null),
    h = v(() => r.value === !0 || s.value === !0),
    g = v(() => (n.type === "a" || h.value === !0 ? "a" : n.tag || e || "div")),
    d = v(() =>
      r.value === !0
        ? { href: n.href, target: n.target }
        : s.value === !0
        ? { href: b.value.href, target: n.target }
        : {}
    ),
    y = v(() => {
      if (s.value === !1) return -1;
      const { matched: $ } = b.value,
        { length: K } = $,
        D = $[K - 1];
      if (D === void 0) return -1;
      const J = a.$route.matched;
      if (J.length === 0) return -1;
      const x = J.findIndex(Xl.bind(null, D));
      if (x > -1) return x;
      const A = Jl($[K - 2]);
      return K > 1 && Jl(D) === A && J[J.length - 1].path !== A
        ? J.findIndex(Xl.bind(null, $[K - 2]))
        : x;
    }),
    N = v(
      () =>
        s.value === !0 && y.value !== -1 && vo(a.$route.params, b.value.params)
    ),
    S = v(
      () =>
        N.value === !0 &&
        y.value === a.$route.matched.length - 1 &&
        go(a.$route.params, b.value.params)
    ),
    B = v(() =>
      s.value === !0
        ? S.value === !0
          ? ` ${n.exactActiveClass} ${n.activeClass}`
          : n.exact === !0
          ? ""
          : N.value === !0
          ? ` ${n.activeClass}`
          : ""
        : ""
    );
  function V($) {
    try {
      return a.$router.resolve($);
    } catch {}
    return null;
  }
  function z(
    $,
    { returnRouterError: K, to: D = n.to, replace: J = n.replace } = {}
  ) {
    if (n.disable === !0) return $.preventDefault(), Promise.resolve(!1);
    if (
      $.metaKey ||
      $.altKey ||
      $.ctrlKey ||
      $.shiftKey ||
      ($.button !== void 0 && $.button !== 0) ||
      n.target === "_blank"
    )
      return Promise.resolve(!1);
    $.preventDefault();
    const x = a.$router[J === !0 ? "replace" : "push"](D);
    return K === !0 ? x : x.then(() => {}).catch(() => {});
  }
  function U($) {
    if (s.value === !0) {
      const K = (D) => z($, D);
      u("click", $, K), $.defaultPrevented !== !0 && K();
    } else u("click", $);
  }
  return {
    hasRouterLink: s,
    hasHrefLink: r,
    hasLink: h,
    linkTag: g,
    resolvedLink: b,
    linkIsActive: N,
    linkIsExactActive: S,
    linkClass: B,
    linkAttrs: d,
    getLink: V,
    navigateToRouterLink: z,
    navigateOnClick: U,
  };
}
const Gl = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  ho = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 },
  bo = ["button", "submit", "reset"],
  yo = /[^\s]\/[^\s]/,
  po = ["flat", "outline", "push", "unelevated"],
  wo = (e, t) =>
    e.flat === !0
      ? "flat"
      : e.outline === !0
      ? "outline"
      : e.push === !0
      ? "push"
      : e.unelevated === !0
      ? "unelevated"
      : t,
  xo = {
    ...Sl,
    ...Jn,
    type: { type: String, default: "button" },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...po.reduce((e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    round: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: { type: [Boolean, Object], default: !0 },
    align: { ...Qn.align, default: "center" },
    stack: Boolean,
    stretch: Boolean,
    loading: { type: Boolean, default: null },
    disable: Boolean,
  };
function So(e) {
  const t = kl(e, ho),
    l = Yn(e),
    {
      hasRouterLink: n,
      hasLink: a,
      linkTag: u,
      linkAttrs: o,
      navigateOnClick: r,
    } = Xn({ fallbackTag: "button" }),
    m = v(() => {
      const S = e.fab === !1 && e.fabMini === !1 ? t.value : {};
      return e.padding !== void 0
        ? Object.assign({}, S, {
            padding: e.padding
              .split(/\s+/)
              .map((B) => (B in Gl ? Gl[B] + "px" : B))
              .join(" "),
            minWidth: "0",
            minHeight: "0",
          })
        : S;
    }),
    b = v(() => e.rounded === !0 || e.fab === !0 || e.fabMini === !0),
    s = v(() => e.disable !== !0 && e.loading !== !0),
    h = v(() => (s.value === !0 ? e.tabindex || 0 : -1)),
    g = v(() => wo(e, "standard")),
    d = v(() => {
      const S = { tabindex: h.value };
      return (
        a.value === !0
          ? Object.assign(S, o.value)
          : bo.includes(e.type) === !0 && (S.type = e.type),
        u.value === "a"
          ? (e.disable === !0
              ? (S["aria-disabled"] = "true")
              : S.href === void 0 && (S.role = "button"),
            n.value !== !0 && yo.test(e.type) === !0 && (S.type = e.type))
          : e.disable === !0 &&
            ((S.disabled = ""), (S["aria-disabled"] = "true")),
        e.loading === !0 &&
          e.percentage !== void 0 &&
          Object.assign(S, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage,
          }),
        S
      );
    }),
    y = v(() => {
      let S;
      e.color !== void 0
        ? e.flat === !0 || e.outline === !0
          ? (S = `text-${e.textColor || e.color}`)
          : (S = `bg-${e.color} text-${e.textColor || "white"}`)
        : e.textColor && (S = `text-${e.textColor}`);
      const B =
        e.round === !0
          ? "round"
          : `rectangle${
              b.value === !0
                ? " q-btn--rounded"
                : e.square === !0
                ? " q-btn--square"
                : ""
            }`;
      return (
        `q-btn--${g.value} q-btn--${B}` +
        (S !== void 0 ? " " + S : "") +
        (s.value === !0
          ? " q-btn--actionable q-focusable q-hoverable"
          : e.disable === !0
          ? " disabled"
          : "") +
        (e.fab === !0
          ? " q-btn--fab"
          : e.fabMini === !0
          ? " q-btn--fab-mini"
          : "") +
        (e.noCaps === !0 ? " q-btn--no-uppercase" : "") +
        (e.dense === !0 ? " q-btn--dense" : "") +
        (e.stretch === !0 ? " no-border-radius self-stretch" : "") +
        (e.glossy === !0 ? " glossy" : "") +
        (e.square ? " q-btn--square" : "")
      );
    }),
    N = v(
      () =>
        l.value +
        (e.stack === !0 ? " column" : " row") +
        (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") +
        (e.loading === !0 ? " q-btn__content--hidden" : "")
    );
  return {
    classes: y,
    style: m,
    innerClasses: N,
    attributes: d,
    hasLink: a,
    linkTag: u,
    navigateOnClick: r,
    isActionable: s,
  };
}
const { passiveCapture: Me } = Be;
let ut = null,
  rt = null,
  st = null;
var xe = ge({
  name: "QBtn",
  props: {
    ...xo,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array],
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: l }) {
    const { proxy: n } = de(),
      {
        classes: a,
        style: u,
        innerClasses: o,
        attributes: r,
        hasLink: m,
        linkTag: b,
        navigateOnClick: s,
        isActionable: h,
      } = So(e),
      g = R(null),
      d = R(null);
    let y = null,
      N,
      S = null;
    const B = v(() => e.label !== void 0 && e.label !== null && e.label !== ""),
      V = v(() =>
        e.disable === !0 || e.ripple === !1
          ? !1
          : {
              keyCodes: m.value === !0 ? [13, 32] : [13],
              ...(e.ripple === !0 ? {} : e.ripple),
            }
      ),
      z = v(() => ({ center: e.round })),
      U = v(() => {
        const _ = Math.max(0, Math.min(100, e.percentage));
        return _ > 0
          ? {
              transition: "transform 0.6s",
              transform: `translateX(${_ - 100}%)`,
            }
          : {};
      }),
      $ = v(() => {
        if (e.loading === !0)
          return {
            onMousedown: k,
            onTouchstart: k,
            onClick: k,
            onKeydown: k,
            onKeyup: k,
          };
        if (h.value === !0) {
          const _ = { onClick: D, onKeydown: J, onMousedown: A };
          if (n.$q.platform.has.touch === !0) {
            const j = e.onTouchstart !== void 0 ? "" : "Passive";
            _[`onTouchstart${j}`] = x;
          }
          return _;
        }
        return { onClick: pe };
      }),
      K = v(() => ({
        ref: g,
        class: "q-btn q-btn-item non-selectable no-outline " + a.value,
        style: u.value,
        ...r.value,
        ...$.value,
      }));
    function D(_) {
      if (g.value !== null) {
        if (_ !== void 0) {
          if (_.defaultPrevented === !0) return;
          const j = document.activeElement;
          if (
            e.type === "submit" &&
            j !== document.body &&
            g.value.contains(j) === !1 &&
            j.contains(g.value) === !1
          ) {
            g.value.focus();
            const Q = () => {
              document.removeEventListener("keydown", pe, !0),
                document.removeEventListener("keyup", Q, Me),
                g.value !== null && g.value.removeEventListener("blur", Q, Me);
            };
            document.addEventListener("keydown", pe, !0),
              document.addEventListener("keyup", Q, Me),
              g.value.addEventListener("blur", Q, Me);
          }
        }
        s(_);
      }
    }
    function J(_) {
      g.value !== null &&
        (l("keydown", _),
        Pe(_, [13, 32]) === !0 &&
          rt !== g.value &&
          (rt !== null && c(),
          _.defaultPrevented !== !0 &&
            (g.value.focus(),
            (rt = g.value),
            g.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", p, !0),
            g.value.addEventListener("blur", p, Me)),
          pe(_)));
    }
    function x(_) {
      g.value !== null &&
        (l("touchstart", _),
        _.defaultPrevented !== !0 &&
          (ut !== g.value &&
            (ut !== null && c(),
            (ut = g.value),
            (y = _.target),
            y.addEventListener("touchcancel", p, Me),
            y.addEventListener("touchend", p, Me)),
          (N = !0),
          S !== null && clearTimeout(S),
          (S = setTimeout(() => {
            (S = null), (N = !1);
          }, 200))));
    }
    function A(_) {
      g.value !== null &&
        ((_.qSkipRipple = N === !0),
        l("mousedown", _),
        _.defaultPrevented !== !0 &&
          st !== g.value &&
          (st !== null && c(),
          (st = g.value),
          g.value.classList.add("q-btn--active"),
          document.addEventListener("mouseup", p, Me)));
    }
    function p(_) {
      if (
        g.value !== null &&
        !(
          _ !== void 0 &&
          _.type === "blur" &&
          document.activeElement === g.value
        )
      ) {
        if (_ !== void 0 && _.type === "keyup") {
          if (rt === g.value && Pe(_, [13, 32]) === !0) {
            const j = new MouseEvent("click", _);
            (j.qKeyEvent = !0),
              _.defaultPrevented === !0 && Le(j),
              _.cancelBubble === !0 && Oe(j),
              g.value.dispatchEvent(j),
              pe(_),
              (_.qKeyEvent = !0);
          }
          l("keyup", _);
        }
        c();
      }
    }
    function c(_) {
      const j = d.value;
      _ !== !0 &&
        (ut === g.value || st === g.value) &&
        j !== null &&
        j !== document.activeElement &&
        (j.setAttribute("tabindex", -1), j.focus()),
        ut === g.value &&
          (y !== null &&
            (y.removeEventListener("touchcancel", p, Me),
            y.removeEventListener("touchend", p, Me)),
          (ut = y = null)),
        st === g.value &&
          (document.removeEventListener("mouseup", p, Me), (st = null)),
        rt === g.value &&
          (document.removeEventListener("keyup", p, !0),
          g.value !== null && g.value.removeEventListener("blur", p, Me),
          (rt = null)),
        g.value !== null && g.value.classList.remove("q-btn--active");
    }
    function k(_) {
      pe(_), (_.qSkipRipple = !0);
    }
    return (
      _e(() => {
        c(!0);
      }),
      Object.assign(n, { click: D }),
      () => {
        let _ = [];
        e.icon !== void 0 &&
          _.push(
            w(se, {
              name: e.icon,
              left: e.stack === !1 && B.value === !0,
              role: "img",
              "aria-hidden": "true",
            })
          ),
          B.value === !0 && _.push(w("span", { class: "block" }, [e.label])),
          (_ = Ke(t.default, _)),
          e.iconRight !== void 0 &&
            e.round === !1 &&
            _.push(
              w(se, {
                name: e.iconRight,
                right: e.stack === !1 && B.value === !0,
                role: "img",
                "aria-hidden": "true",
              })
            );
        const j = [w("span", { class: "q-focus-helper", ref: d })];
        return (
          e.loading === !0 &&
            e.percentage !== void 0 &&
            j.push(
              w(
                "span",
                {
                  class:
                    "q-btn__progress absolute-full overflow-hidden" +
                    (e.darkPercentage === !0 ? " q-btn__progress--dark" : ""),
                },
                [
                  w("span", {
                    class: "q-btn__progress-indicator fit block",
                    style: U.value,
                  }),
                ]
              )
            ),
          j.push(
            w(
              "span",
              {
                class:
                  "q-btn__content text-center col items-center q-anchor--skip " +
                  o.value,
              },
              _
            )
          ),
          e.loading !== null &&
            j.push(
              w(_t, { name: "q-transition--fade" }, () =>
                e.loading === !0
                  ? [
                      w(
                        "span",
                        {
                          key: "loading",
                          class: "absolute-full flex flex-center",
                        },
                        t.loading !== void 0 ? t.loading() : [w(jn)]
                      ),
                    ]
                  : null
              )
            ),
          ft(w(b.value, K.value, j), [[Kn, V.value, void 0, z.value]])
        );
      }
    );
  },
});
const Ze = { dark: { type: Boolean, default: null } };
function Ge(e, t) {
  return v(() => (e.dark === null ? t.dark.isActive : e.dark));
}
const ko = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset",
  },
  ol = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var dt = ge({
    name: "QSeparator",
    props: {
      ...Ze,
      spaced: [Boolean, String],
      inset: [Boolean, String],
      vertical: Boolean,
      color: String,
      size: String,
    },
    setup(e) {
      const t = de(),
        l = Ge(e, t.proxy.$q),
        n = v(() => (e.vertical === !0 ? "vertical" : "horizontal")),
        a = v(() => ` q-separator--${n.value}`),
        u = v(() => (e.inset !== !1 ? `${a.value}-${ko[e.inset]}` : "")),
        o = v(
          () =>
            `q-separator${a.value}${u.value}` +
            (e.color !== void 0 ? ` bg-${e.color}` : "") +
            (l.value === !0 ? " q-separator--dark" : "")
        ),
        r = v(() => {
          const m = {};
          if (
            (e.size !== void 0 &&
              (m[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1)
          ) {
            const b =
                e.spaced === !0
                  ? `${ol.md}px`
                  : e.spaced in ol
                  ? `${ol[e.spaced]}px`
                  : e.spaced,
              s = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
            m[`margin${s[0]}`] = m[`margin${s[1]}`] = b;
          }
          return m;
        });
      return () =>
        w("hr", {
          class: o.value,
          style: r.value,
          "aria-orientation": n.value,
        });
    },
  }),
  ye = ge({
    name: "QCardSection",
    props: { tag: { type: String, default: "div" }, horizontal: Boolean },
    setup(e, { slots: t }) {
      const l = v(
        () =>
          `q-card__section q-card__section--${
            e.horizontal === !0 ? "horiz row no-wrap" : "vert"
          }`
      );
      return () => w(e.tag, { class: l.value }, Ae(t.default));
    },
  }),
  hl = ge({
    name: "QCardActions",
    props: { ...Qn, vertical: Boolean },
    setup(e, { slots: t }) {
      const l = Yn(e),
        n = v(
          () =>
            `q-card__actions ${l.value} q-card__actions--${
              e.vertical === !0 ? "vert column" : "horiz row"
            }`
        );
      return () => w("div", { class: n.value }, Ae(t.default));
    },
  }),
  bl = ge({
    name: "QCard",
    props: {
      ...Ze,
      tag: { type: String, default: "div" },
      square: Boolean,
      flat: Boolean,
      bordered: Boolean,
    },
    setup(e, { slots: t }) {
      const {
          proxy: { $q: l },
        } = de(),
        n = Ge(e, l),
        a = v(
          () =>
            "q-card" +
            (n.value === !0 ? " q-card--dark q-dark" : "") +
            (e.bordered === !0 ? " q-card--bordered" : "") +
            (e.square === !0 ? " q-card--square no-border-radius" : "") +
            (e.flat === !0 ? " q-card--flat no-shadow" : "")
        );
      return () => w(e.tag, { class: a.value }, Ae(t.default));
    },
  });
function _o(e, t, l) {
  let n;
  function a() {
    n !== void 0 && (Nl.remove(n), (n = void 0));
  }
  return (
    _e(() => {
      e.value === !0 && a();
    }),
    {
      removeFromHistory: a,
      addToHistory() {
        (n = { condition: () => l.value === !0, handler: t }), Nl.add(n);
      },
    }
  );
}
function Zn() {
  let e = null;
  const t = de();
  function l() {
    e !== null && (clearTimeout(e), (e = null));
  }
  return (
    Yt(l),
    _e(l),
    {
      removeTimeout: l,
      registerTimeout(n, a) {
        l(), Pn(t) === !1 && (e = setTimeout(n, a));
      },
    }
  );
}
function Gn() {
  let e;
  const t = de();
  function l() {
    e = void 0;
  }
  return (
    Yt(l),
    _e(l),
    {
      removeTick: l,
      registerTick(n) {
        (e = n),
          fe(() => {
            e === n && (Pn(t) === !1 && e(), (e = void 0));
          });
      },
    }
  );
}
const ea = {
    modelValue: { type: Boolean, default: null },
    "onUpdate:modelValue": [Function, Array],
  },
  ta = ["beforeShow", "show", "beforeHide", "hide"];
function la({
  showing: e,
  canShow: t,
  hideOnRouteChange: l,
  handleShow: n,
  handleHide: a,
  processOnMount: u,
}) {
  const o = de(),
    { props: r, emit: m, proxy: b } = o;
  let s;
  function h(V) {
    e.value === !0 ? y(V) : g(V);
  }
  function g(V) {
    if (
      r.disable === !0 ||
      (V !== void 0 && V.qAnchorHandled === !0) ||
      (t !== void 0 && t(V) !== !0)
    )
      return;
    const z = r["onUpdate:modelValue"] !== void 0;
    z === !0 &&
      (m("update:modelValue", !0),
      (s = V),
      fe(() => {
        s === V && (s = void 0);
      })),
      (r.modelValue === null || z === !1) && d(V);
  }
  function d(V) {
    e.value !== !0 &&
      ((e.value = !0), m("beforeShow", V), n !== void 0 ? n(V) : m("show", V));
  }
  function y(V) {
    if (r.disable === !0) return;
    const z = r["onUpdate:modelValue"] !== void 0;
    z === !0 &&
      (m("update:modelValue", !1),
      (s = V),
      fe(() => {
        s === V && (s = void 0);
      })),
      (r.modelValue === null || z === !1) && N(V);
  }
  function N(V) {
    e.value !== !1 &&
      ((e.value = !1), m("beforeHide", V), a !== void 0 ? a(V) : m("hide", V));
  }
  function S(V) {
    r.disable === !0 && V === !0
      ? r["onUpdate:modelValue"] !== void 0 && m("update:modelValue", !1)
      : (V === !0) !== e.value && (V === !0 ? d : N)(s);
  }
  te(() => r.modelValue, S),
    l !== void 0 &&
      Fn(o) === !0 &&
      te(
        () => b.$route.fullPath,
        () => {
          l.value === !0 && e.value === !0 && y();
        }
      ),
    u === !0 &&
      Xe(() => {
        S(r.modelValue);
      });
  const B = { show: g, hide: y, toggle: h };
  return Object.assign(b, B), B;
}
const na = {
  transitionShow: { type: String, default: "fade" },
  transitionHide: { type: String, default: "fade" },
  transitionDuration: { type: [String, Number], default: 300 },
};
function aa(e, t = () => {}, l = () => {}) {
  return {
    transitionProps: v(() => {
      const n = `q-transition--${e.transitionShow || t()}`,
        a = `q-transition--${e.transitionHide || l()}`;
      return {
        appear: !0,
        enterFromClass: `${n}-enter-from`,
        enterActiveClass: `${n}-enter-active`,
        enterToClass: `${n}-enter-to`,
        leaveFromClass: `${a}-leave-from`,
        leaveActiveClass: `${a}-leave-active`,
        leaveToClass: `${a}-leave-to`,
      };
    }),
    transitionStyle: v(
      () => `--q-transition-duration: ${e.transitionDuration}ms`
    ),
  };
}
let Ue = [],
  Ct = [];
function oa(e) {
  Ct = Ct.filter((t) => t !== e);
}
function Co(e) {
  oa(e), Ct.push(e);
}
function en(e) {
  oa(e), Ct.length === 0 && Ue.length !== 0 && (Ue[Ue.length - 1](), (Ue = []));
}
function Jt(e) {
  Ct.length === 0 ? e() : Ue.push(e);
}
function qo(e) {
  Ue = Ue.filter((t) => t !== e);
}
let Vo = 1,
  Ao = document.body;
function Mo(e, t) {
  const l = document.createElement("div");
  if (
    ((l.id = t !== void 0 ? `q-portal--${t}--${Vo++}` : e),
    Hl.globalNodes !== void 0)
  ) {
    const n = Hl.globalNodes.class;
    n !== void 0 && (l.className = n);
  }
  return Ao.appendChild(l), l;
}
function Eo(e) {
  e.remove();
}
const vt = [];
function $o(e) {
  return vt.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function ia(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if ((e.hide(t), e.$props.separateClosePopup === !0)) return Nt(e);
    } else if (e.__qPortal === !0) {
      const l = Nt(e);
      return l !== void 0 && l.$options.name === "QPopupProxy"
        ? (e.hide(t), l)
        : e;
    }
    e = Nt(e);
  } while (e != null);
}
function Bo(e, t, l) {
  for (; l !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if ((l--, e.$options.name === "QMenu")) {
        e = ia(e, t);
        continue;
      }
      e.hide(t);
    }
    e = Nt(e);
  }
}
function To(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog") return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu") return !1;
    e = e.parent;
  }
  return !1;
}
function ua(e, t, l, n) {
  const a = R(!1),
    u = R(!1);
  let o = null;
  const r = {},
    m = n === "dialog" && To(e);
  function b(h) {
    if (h === !0) {
      en(r), (u.value = !0);
      return;
    }
    (u.value = !1),
      a.value === !1 &&
        (m === !1 && o === null && (o = Mo(!1, n)),
        (a.value = !0),
        vt.push(e.proxy),
        Co(r));
  }
  function s(h) {
    if (((u.value = !1), h !== !0)) return;
    en(r), (a.value = !1);
    const g = vt.indexOf(e.proxy);
    g !== -1 && vt.splice(g, 1), o !== null && (Eo(o), (o = null));
  }
  return (
    En(() => {
      s(!0);
    }),
    (e.proxy.__qPortal = !0),
    xl(e.proxy, "contentEl", () => t.value),
    {
      showPortal: b,
      hidePortal: s,
      portalIsActive: a,
      portalIsAccessible: u,
      renderPortal: () =>
        m === !0 ? l() : a.value === !0 ? [w(Fa, { to: o }, l())] : void 0,
    }
  );
}
const Lo = [
  null,
  document,
  document.body,
  document.scrollingElement,
  document.documentElement,
];
function Ro(e, t) {
  let l = so(t);
  if (l === void 0) {
    if (e == null) return window;
    l = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Lo.includes(l) ? window : l;
}
function Oo(e) {
  return e === window
    ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0
    : e.scrollTop;
}
function zo(e) {
  return e === window
    ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0
    : e.scrollLeft;
}
let Tt;
function Io() {
  if (Tt !== void 0) return Tt;
  const e = document.createElement("p"),
    t = document.createElement("div");
  gl(e, { width: "100%", height: "200px" }),
    gl(t, {
      position: "absolute",
      top: "0px",
      left: "0px",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden",
    }),
    t.appendChild(e),
    document.body.appendChild(t);
  const l = e.offsetWidth;
  t.style.overflow = "scroll";
  let n = e.offsetWidth;
  return l === n && (n = t.clientWidth), t.remove(), (Tt = l - n), Tt;
}
function Fo(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE
    ? !1
    : t
    ? e.scrollHeight > e.clientHeight &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"]))
    : e.scrollWidth > e.clientWidth &&
      (e.classList.contains("scroll") ||
        e.classList.contains("overflow-auto") ||
        ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
let pt = 0,
  il,
  ul,
  kt,
  rl = !1,
  tn,
  ln,
  nn,
  We = null;
function Po(e) {
  No(e) && pe(e);
}
function No(e) {
  if (
    e.target === document.body ||
    e.target.classList.contains("q-layout__backdrop")
  )
    return !0;
  const t = Pa(e),
    l = e.shiftKey && !e.deltaX,
    n = !l && Math.abs(e.deltaX) <= Math.abs(e.deltaY),
    a = l || n ? e.deltaY : e.deltaX;
  for (let u = 0; u < t.length; u++) {
    const o = t[u];
    if (Fo(o, n))
      return n
        ? a < 0 && o.scrollTop === 0
          ? !0
          : a > 0 && o.scrollTop + o.clientHeight === o.scrollHeight
        : a < 0 && o.scrollLeft === 0
        ? !0
        : a > 0 && o.scrollLeft + o.clientWidth === o.scrollWidth;
  }
  return !0;
}
function an(e) {
  e.target === document &&
    (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Lt(e) {
  rl !== !0 &&
    ((rl = !0),
    requestAnimationFrame(() => {
      rl = !1;
      const { height: t } = e.target,
        { clientHeight: l, scrollTop: n } = document.scrollingElement;
      (kt === void 0 || t !== window.innerHeight) &&
        ((kt = l - t), (document.scrollingElement.scrollTop = n)),
        n > kt &&
          (document.scrollingElement.scrollTop -= Math.ceil((n - kt) / 8));
    }));
}
function on(e) {
  const t = document.body,
    l = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: n, overflowX: a } = window.getComputedStyle(t);
    (il = zo(window)),
      (ul = Oo(window)),
      (tn = t.style.left),
      (ln = t.style.top),
      (nn = window.location.href),
      (t.style.left = `-${il}px`),
      (t.style.top = `-${ul}px`),
      a !== "hidden" &&
        (a === "scroll" || t.scrollWidth > window.innerWidth) &&
        t.classList.add("q-body--force-scrollbar-x"),
      n !== "hidden" &&
        (n === "scroll" || t.scrollHeight > window.innerHeight) &&
        t.classList.add("q-body--force-scrollbar-y"),
      t.classList.add("q-body--prevent-scroll"),
      (document.qScrollPrevented = !0),
      ze.is.ios === !0 &&
        (l === !0
          ? (window.scrollTo(0, 0),
            window.visualViewport.addEventListener(
              "resize",
              Lt,
              Be.passiveCapture
            ),
            window.visualViewport.addEventListener(
              "scroll",
              Lt,
              Be.passiveCapture
            ),
            window.scrollTo(0, 0))
          : window.addEventListener("scroll", an, Be.passiveCapture));
  }
  ze.is.desktop === !0 &&
    ze.is.mac === !0 &&
    window[`${e}EventListener`]("wheel", Po, Be.notPassive),
    e === "remove" &&
      (ze.is.ios === !0 &&
        (l === !0
          ? (window.visualViewport.removeEventListener(
              "resize",
              Lt,
              Be.passiveCapture
            ),
            window.visualViewport.removeEventListener(
              "scroll",
              Lt,
              Be.passiveCapture
            ))
          : window.removeEventListener("scroll", an, Be.passiveCapture)),
      t.classList.remove("q-body--prevent-scroll"),
      t.classList.remove("q-body--force-scrollbar-x"),
      t.classList.remove("q-body--force-scrollbar-y"),
      (document.qScrollPrevented = !1),
      (t.style.left = tn),
      (t.style.top = ln),
      window.location.href === nn && window.scrollTo(il, ul),
      (kt = void 0));
}
function Ho(e) {
  let t = "add";
  if (e === !0) {
    if ((pt++, We !== null)) {
      clearTimeout(We), (We = null);
      return;
    }
    if (pt > 1) return;
  } else {
    if (pt === 0 || (pt--, pt > 0)) return;
    if (((t = "remove"), ze.is.ios === !0 && ze.is.nativeMobile === !0)) {
      We !== null && clearTimeout(We),
        (We = setTimeout(() => {
          on(t), (We = null);
        }, 100));
      return;
    }
  }
  on(t);
}
function Do() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && ((e = t), Ho(t));
    },
  };
}
const Qe = [];
let gt;
function jo(e) {
  gt = e.keyCode === 27;
}
function Wo() {
  gt === !0 && (gt = !1);
}
function Ko(e) {
  gt === !0 && ((gt = !1), Pe(e, 27) === !0 && Qe[Qe.length - 1](e));
}
function ra(e) {
  window[e]("keydown", jo),
    window[e]("blur", Wo),
    window[e]("keyup", Ko),
    (gt = !1);
}
function sa(e) {
  ze.is.desktop === !0 &&
    (Qe.push(e), Qe.length === 1 && ra("addEventListener"));
}
function Dt(e) {
  const t = Qe.indexOf(e);
  t > -1 && (Qe.splice(t, 1), Qe.length === 0 && ra("removeEventListener"));
}
const Ye = [];
function da(e) {
  Ye[Ye.length - 1](e);
}
function ca(e) {
  ze.is.desktop === !0 &&
    (Ye.push(e),
    Ye.length === 1 && document.body.addEventListener("focusin", da));
}
function yl(e) {
  const t = Ye.indexOf(e);
  t > -1 &&
    (Ye.splice(t, 1),
    Ye.length === 0 && document.body.removeEventListener("focusin", da));
}
let Rt = 0;
const Uo = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center",
  },
  un = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"],
  };
var jt = ge({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...ea,
    ...na,
    transitionShow: String,
    transitionHide: String,
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    position: {
      type: String,
      default: "standard",
      validator: (e) =>
        e === "standard" || ["top", "bottom", "left", "right"].includes(e),
    },
  },
  emits: [...ta, "shake", "click", "escapeKey"],
  setup(e, { slots: t, emit: l, attrs: n }) {
    const a = de(),
      u = R(null),
      o = R(!1),
      r = R(!1);
    let m = null,
      b = null,
      s,
      h;
    const g = v(
        () =>
          e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
      ),
      { preventBodyScroll: d } = Do(),
      { registerTimeout: y } = Zn(),
      { registerTick: N, removeTick: S } = Gn(),
      { transitionProps: B, transitionStyle: V } = aa(
        e,
        () => un[e.position][0],
        () => un[e.position][1]
      ),
      {
        showPortal: z,
        hidePortal: U,
        portalIsAccessible: $,
        renderPortal: K,
      } = ua(a, u, G, "dialog"),
      { hide: D } = la({
        showing: o,
        hideOnRouteChange: g,
        handleShow: _,
        handleHide: j,
        processOnMount: !0,
      }),
      { addToHistory: J, removeFromHistory: x } = _o(o, D, g),
      A = v(
        () =>
          `q-dialog__inner flex no-pointer-events q-dialog__inner--${
            e.maximized === !0 ? "maximized" : "minimized"
          } q-dialog__inner--${e.position} ${Uo[e.position]}` +
          (r.value === !0 ? " q-dialog__inner--animating" : "") +
          (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") +
          (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") +
          (e.square === !0 ? " q-dialog__inner--square" : "")
      ),
      p = v(() => o.value === !0 && e.seamless !== !0),
      c = v(() => (e.autoClose === !0 ? { onClick: E } : {})),
      k = v(() => [
        `q-dialog fullscreen no-pointer-events q-dialog--${
          p.value === !0 ? "modal" : "seamless"
        }`,
        n.class,
      ]);
    te(
      () => e.maximized,
      (H) => {
        o.value === !0 && C(H);
      }
    ),
      te(p, (H) => {
        d(H), H === !0 ? (ca(F), sa(X)) : (yl(F), Dt(X));
      });
    function _(H) {
      J(),
        (b =
          e.noRefocus === !1 && document.activeElement !== null
            ? document.activeElement
            : null),
        C(e.maximized),
        z(),
        (r.value = !0),
        e.noFocus !== !0
          ? (document.activeElement !== null && document.activeElement.blur(),
            N(Q))
          : S(),
        y(() => {
          if (a.proxy.$q.platform.is.ios === !0) {
            if (e.seamless !== !0 && document.activeElement) {
              const { top: I, bottom: Y } =
                  document.activeElement.getBoundingClientRect(),
                { innerHeight: ie } = window,
                L =
                  window.visualViewport !== void 0
                    ? window.visualViewport.height
                    : ie;
              I > 0 &&
                Y > L / 2 &&
                (document.scrollingElement.scrollTop = Math.min(
                  document.scrollingElement.scrollHeight - L,
                  Y >= ie
                    ? 1 / 0
                    : Math.ceil(document.scrollingElement.scrollTop + Y - L / 2)
                )),
                document.activeElement.scrollIntoView();
            }
            (h = !0), u.value.click(), (h = !1);
          }
          z(!0), (r.value = !1), l("show", H);
        }, e.transitionDuration);
    }
    function j(H) {
      S(),
        x(),
        ae(!0),
        (r.value = !0),
        U(),
        b !== null &&
          ((
            (H && H.type.indexOf("key") === 0
              ? b.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || b
          ).focus(),
          (b = null)),
        y(() => {
          U(!0), (r.value = !1), l("hide", H);
        }, e.transitionDuration);
    }
    function Q(H) {
      Jt(() => {
        let I = u.value;
        I === null ||
          I.contains(document.activeElement) === !0 ||
          ((I =
            (H !== "" ? I.querySelector(H) : null) ||
            I.querySelector(
              "[autofocus][tabindex], [data-autofocus][tabindex]"
            ) ||
            I.querySelector(
              "[autofocus] [tabindex], [data-autofocus] [tabindex]"
            ) ||
            I.querySelector("[autofocus], [data-autofocus]") ||
            I),
          I.focus({ preventScroll: !0 }));
      });
    }
    function M(H) {
      H && typeof H.focus == "function" ? H.focus({ preventScroll: !0 }) : Q(),
        l("shake");
      const I = u.value;
      I !== null &&
        (I.classList.remove("q-animate--scale"),
        I.classList.add("q-animate--scale"),
        m !== null && clearTimeout(m),
        (m = setTimeout(() => {
          (m = null),
            u.value !== null && (I.classList.remove("q-animate--scale"), Q());
        }, 170)));
    }
    function X() {
      e.seamless !== !0 &&
        (e.persistent === !0 || e.noEscDismiss === !0
          ? e.maximized !== !0 && e.noShake !== !0 && M()
          : (l("escapeKey"), D()));
    }
    function ae(H) {
      m !== null && (clearTimeout(m), (m = null)),
        (H === !0 || o.value === !0) &&
          (C(!1), e.seamless !== !0 && (d(!1), yl(F), Dt(X))),
        H !== !0 && (b = null);
    }
    function C(H) {
      H === !0
        ? s !== !0 &&
          (Rt < 1 && document.body.classList.add("q-body--dialog"),
          Rt++,
          (s = !0))
        : s === !0 &&
          (Rt < 2 && document.body.classList.remove("q-body--dialog"),
          Rt--,
          (s = !1));
    }
    function E(H) {
      h !== !0 && (D(H), l("click", H));
    }
    function f(H) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0
        ? D(H)
        : e.noShake !== !0 && M();
    }
    function F(H) {
      e.allowFocusOutside !== !0 &&
        $.value === !0 &&
        Wn(u.value, H.target) !== !0 &&
        Q('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(a.proxy, {
      focus: Q,
      shake: M,
      __updateRefocusTarget(H) {
        b = H || null;
      },
    }),
      _e(ae);
    function G() {
      return w(
        "div",
        {
          role: "dialog",
          "aria-modal": p.value === !0 ? "true" : "false",
          ...n,
          class: k.value,
        },
        [
          w(_t, { name: "q-transition--fade", appear: !0 }, () =>
            p.value === !0
              ? w("div", {
                  class: "q-dialog__backdrop fixed-full",
                  style: V.value,
                  "aria-hidden": "true",
                  tabindex: -1,
                  onClick: f,
                })
              : null
          ),
          w(_t, B.value, () =>
            o.value === !0
              ? w(
                  "div",
                  {
                    ref: u,
                    class: A.value,
                    style: V.value,
                    tabindex: -1,
                    ...c.value,
                  },
                  Ae(t.default)
                )
              : null
          ),
        ]
      );
    }
    return K;
  },
});
function Qo({ validate: e, resetValidation: t, requiresQForm: l }) {
  const n = Na(Ha, !1);
  if (n !== !1) {
    const { props: a, proxy: u } = de();
    Object.assign(u, { validate: e, resetValidation: t }),
      te(
        () => a.disable,
        (o) => {
          o === !0
            ? (typeof t == "function" && t(), n.unbindComponent(u))
            : n.bindComponent(u);
        }
      ),
      Xe(() => {
        a.disable !== !0 && n.bindComponent(u);
      }),
      _e(() => {
        a.disable !== !0 && n.unbindComponent(u);
      });
  } else l === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const rn = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  sn = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  dn = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  Ot =
    /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  zt =
    /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,
  sl = {
    date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: (e) =>
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      ),
    hexColor: (e) => rn.test(e),
    hexaColor: (e) => sn.test(e),
    hexOrHexaColor: (e) => dn.test(e),
    rgbColor: (e) => Ot.test(e),
    rgbaColor: (e) => zt.test(e),
    rgbOrRgbaColor: (e) => Ot.test(e) || zt.test(e),
    hexOrRgbColor: (e) => rn.test(e) || Ot.test(e),
    hexaOrRgbaColor: (e) => sn.test(e) || zt.test(e),
    anyColor: (e) => dn.test(e) || Ot.test(e) || zt.test(e),
  },
  Yo = [!0, !1, "ondemand"],
  Jo = {
    modelValue: {},
    error: { type: Boolean, default: null },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: { type: [Boolean, String], validator: (e) => Yo.includes(e) },
  };
function Xo(e, t) {
  const { props: l, proxy: n } = de(),
    a = R(!1),
    u = R(null),
    o = R(null);
  Qo({ validate: y, resetValidation: d });
  let r = 0,
    m;
  const b = v(
      () => l.rules !== void 0 && l.rules !== null && l.rules.length !== 0
    ),
    s = v(() => l.disable !== !0 && b.value === !0),
    h = v(() => l.error === !0 || a.value === !0),
    g = v(() =>
      typeof l.errorMessage == "string" && l.errorMessage.length !== 0
        ? l.errorMessage
        : u.value
    );
  te(
    () => l.modelValue,
    () => {
      N();
    }
  ),
    te(
      () => l.reactiveRules,
      (B) => {
        B === !0
          ? m === void 0 &&
            (m = te(
              () => l.rules,
              () => {
                N(!0);
              }
            ))
          : m !== void 0 && (m(), (m = void 0));
      },
      { immediate: !0 }
    ),
    te(e, (B) => {
      B === !0
        ? o.value === null && (o.value = !1)
        : o.value === !1 &&
          ((o.value = !0),
          s.value === !0 &&
            l.lazyRules !== "ondemand" &&
            t.value === !1 &&
            S());
    });
  function d() {
    r++,
      (t.value = !1),
      (o.value = null),
      (a.value = !1),
      (u.value = null),
      S.cancel();
  }
  function y(B = l.modelValue) {
    if (s.value !== !0) return !0;
    const V = ++r,
      z =
        t.value !== !0
          ? () => {
              o.value = !0;
            }
          : () => {},
      U = (K, D) => {
        K === !0 && z(), (a.value = K), (u.value = D || null), (t.value = !1);
      },
      $ = [];
    for (let K = 0; K < l.rules.length; K++) {
      const D = l.rules[K];
      let J;
      if (
        (typeof D == "function"
          ? (J = D(B, sl))
          : typeof D == "string" && sl[D] !== void 0 && (J = sl[D](B)),
        J === !1 || typeof J == "string")
      )
        return U(!0, J), !1;
      J !== !0 && J !== void 0 && $.push(J);
    }
    return $.length === 0
      ? (U(!1), !0)
      : ((t.value = !0),
        Promise.all($).then(
          (K) => {
            if (K === void 0 || Array.isArray(K) === !1 || K.length === 0)
              return V === r && U(!1), !0;
            const D = K.find((J) => J === !1 || typeof J == "string");
            return V === r && U(D !== void 0, D), D === void 0;
          },
          (K) => (V === r && (console.error(K), U(!0)), !1)
        ));
  }
  function N(B) {
    s.value === !0 &&
      l.lazyRules !== "ondemand" &&
      (o.value === !0 || (l.lazyRules !== !0 && B !== !0)) &&
      S();
  }
  const S = $n(y, 0);
  return (
    _e(() => {
      m !== void 0 && m(), S.cancel();
    }),
    Object.assign(n, { resetValidation: d, validate: y }),
    xl(n, "hasError", () => h.value),
    {
      isDirtyModel: o,
      hasRules: b,
      hasError: h,
      errorMessage: g,
      validate: y,
      resetValidation: d,
    }
  );
}
const cn = /^on[A-Z]/;
function Zo(e, t) {
  const l = { listeners: R({}), attributes: R({}) };
  function n() {
    const a = {},
      u = {};
    for (const o in e)
      o !== "class" && o !== "style" && cn.test(o) === !1 && (a[o] = e[o]);
    for (const o in t.props) cn.test(o) === !0 && (u[o] = t.props[o]);
    (l.attributes.value = a), (l.listeners.value = u);
  }
  return Bn(n), n(), l;
}
let dl,
  It = 0;
const he = new Array(256);
for (let e = 0; e < 256; e++) he[e] = (e + 256).toString(16).substring(1);
const Go = (() => {
    const e =
      typeof crypto != "undefined"
        ? crypto
        : typeof window != "undefined"
        ? window.crypto || window.msCrypto
        : void 0;
    if (e !== void 0) {
      if (e.randomBytes !== void 0) return e.randomBytes;
      if (e.getRandomValues !== void 0)
        return (t) => {
          const l = new Uint8Array(t);
          return e.getRandomValues(l), l;
        };
    }
    return (t) => {
      const l = [];
      for (let n = t; n > 0; n--) l.push(Math.floor(Math.random() * 256));
      return l;
    };
  })(),
  fn = 4096;
function ei() {
  (dl === void 0 || It + 16 > fn) && ((It = 0), (dl = Go(fn)));
  const e = Array.prototype.slice.call(dl, It, (It += 16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    he[e[0]] +
      he[e[1]] +
      he[e[2]] +
      he[e[3]] +
      "-" +
      he[e[4]] +
      he[e[5]] +
      "-" +
      he[e[6]] +
      he[e[7]] +
      "-" +
      he[e[8]] +
      he[e[9]] +
      "-" +
      he[e[10]] +
      he[e[11]] +
      he[e[12]] +
      he[e[13]] +
      he[e[14]] +
      he[e[15]]
  );
}
function pl(e) {
  return e === void 0 ? `f_${ei()}` : e;
}
function qt(e) {
  return e != null && ("" + e).length !== 0;
}
const Xt = {
    ...Ze,
    ...Jo,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String,
    maxlength: [Number, String],
  },
  _l = [
    "update:modelValue",
    "clear",
    "focus",
    "blur",
    "popupShow",
    "popupHide",
  ];
function Cl() {
  const { props: e, attrs: t, proxy: l, vnode: n } = de();
  return {
    isDark: Ge(e, l.$q),
    editable: v(() => e.disable !== !0 && e.readonly !== !0),
    innerLoading: R(!1),
    focused: R(!1),
    hasPopupOpen: !1,
    splitAttrs: Zo(t, n),
    targetUid: R(pl(e.for)),
    rootRef: R(null),
    targetRef: R(null),
    controlRef: R(null),
  };
}
function ql(e) {
  const { props: t, emit: l, slots: n, attrs: a, proxy: u } = de(),
    { $q: o } = u;
  let r = null;
  e.hasValue === void 0 && (e.hasValue = v(() => qt(t.modelValue))),
    e.emitValue === void 0 &&
      (e.emitValue = (M) => {
        l("update:modelValue", M);
      }),
    e.controlEvents === void 0 &&
      (e.controlEvents = { onFocusin: x, onFocusout: A }),
    Object.assign(e, {
      clearValue: p,
      onControlFocusin: x,
      onControlFocusout: A,
      focus: D,
    }),
    e.computedCounter === void 0 &&
      (e.computedCounter = v(() => {
        if (t.counter !== !1) {
          const M =
              typeof t.modelValue == "string" || typeof t.modelValue == "number"
                ? ("" + t.modelValue).length
                : Array.isArray(t.modelValue) === !0
                ? t.modelValue.length
                : 0,
            X = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
          return M + (X !== void 0 ? " / " + X : "");
        }
      }));
  const {
      isDirtyModel: m,
      hasRules: b,
      hasError: s,
      errorMessage: h,
      resetValidation: g,
    } = Xo(e.focused, e.innerLoading),
    d =
      e.floatingLabel !== void 0
        ? v(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.floatingLabel.value === !0
          )
        : v(
            () =>
              t.stackLabel === !0 ||
              e.focused.value === !0 ||
              e.hasValue.value === !0
          ),
    y = v(
      () =>
        t.bottomSlots === !0 ||
        t.hint !== void 0 ||
        b.value === !0 ||
        t.counter === !0 ||
        t.error !== null
    ),
    N = v(() =>
      t.filled === !0
        ? "filled"
        : t.outlined === !0
        ? "outlined"
        : t.borderless === !0
        ? "borderless"
        : t.standout
        ? "standout"
        : "standard"
    ),
    S = v(
      () =>
        `q-field row no-wrap items-start q-field--${N.value}` +
        (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") +
        (t.rounded === !0 ? " q-field--rounded" : "") +
        (t.square === !0 ? " q-field--square" : "") +
        (d.value === !0 ? " q-field--float" : "") +
        (V.value === !0 ? " q-field--labeled" : "") +
        (t.dense === !0 ? " q-field--dense" : "") +
        (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") +
        (e.isDark.value === !0 ? " q-field--dark" : "") +
        (e.getControl === void 0 ? " q-field--auto-height" : "") +
        (e.focused.value === !0 ? " q-field--focused" : "") +
        (s.value === !0 ? " q-field--error" : "") +
        (s.value === !0 || e.focused.value === !0
          ? " q-field--highlighted"
          : "") +
        (t.hideBottomSpace !== !0 && y.value === !0
          ? " q-field--with-bottom"
          : "") +
        (t.disable === !0
          ? " q-field--disabled"
          : t.readonly === !0
          ? " q-field--readonly"
          : "")
    ),
    B = v(
      () =>
        "q-field__control relative-position row no-wrap" +
        (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") +
        (s.value === !0
          ? " text-negative"
          : typeof t.standout == "string" &&
            t.standout.length !== 0 &&
            e.focused.value === !0
          ? ` ${t.standout}`
          : t.color !== void 0
          ? ` text-${t.color}`
          : "")
    ),
    V = v(() => t.labelSlot === !0 || t.label !== void 0),
    z = v(
      () =>
        "q-field__label no-pointer-events absolute ellipsis" +
        (t.labelColor !== void 0 && s.value !== !0
          ? ` text-${t.labelColor}`
          : "")
    ),
    U = v(() => ({
      id: e.targetUid.value,
      editable: e.editable.value,
      focused: e.focused.value,
      floatingLabel: d.value,
      modelValue: t.modelValue,
      emitValue: e.emitValue,
    })),
    $ = v(() => {
      const M = { for: e.targetUid.value };
      return (
        t.disable === !0
          ? (M["aria-disabled"] = "true")
          : t.readonly === !0 && (M["aria-readonly"] = "true"),
        M
      );
    });
  te(
    () => t.for,
    (M) => {
      e.targetUid.value = pl(M);
    }
  );
  function K() {
    const M = document.activeElement;
    let X = e.targetRef !== void 0 && e.targetRef.value;
    X &&
      (M === null || M.id !== e.targetUid.value) &&
      (X.hasAttribute("tabindex") === !0 || (X = X.querySelector("[tabindex]")),
      X && X !== M && X.focus({ preventScroll: !0 }));
  }
  function D() {
    Jt(K);
  }
  function J() {
    qo(K);
    const M = document.activeElement;
    M !== null && e.rootRef.value.contains(M) && M.blur();
  }
  function x(M) {
    r !== null && (clearTimeout(r), (r = null)),
      e.editable.value === !0 &&
        e.focused.value === !1 &&
        ((e.focused.value = !0), l("focus", M));
  }
  function A(M, X) {
    r !== null && clearTimeout(r),
      (r = setTimeout(() => {
        (r = null),
          !(
            document.hasFocus() === !0 &&
            (e.hasPopupOpen === !0 ||
              e.controlRef === void 0 ||
              e.controlRef.value === null ||
              e.controlRef.value.contains(document.activeElement) !== !1)
          ) &&
            (e.focused.value === !0 && ((e.focused.value = !1), l("blur", M)),
            X !== void 0 && X());
      }));
  }
  function p(M) {
    pe(M),
      o.platform.is.mobile !== !0
        ? (
            (e.targetRef !== void 0 && e.targetRef.value) ||
            e.rootRef.value
          ).focus()
        : e.rootRef.value.contains(document.activeElement) === !0 &&
          document.activeElement.blur(),
      t.type === "file" && (e.inputRef.value.value = null),
      l("update:modelValue", null),
      l("clear", t.modelValue),
      fe(() => {
        g(), o.platform.is.mobile !== !0 && (m.value = !1);
      });
  }
  function c() {
    const M = [];
    return (
      n.prepend !== void 0 &&
        M.push(
          w(
            "div",
            {
              class:
                "q-field__prepend q-field__marginal row no-wrap items-center",
              key: "prepend",
              onClick: Le,
            },
            n.prepend()
          )
        ),
      M.push(
        w(
          "div",
          {
            class:
              "q-field__control-container col relative-position row no-wrap q-anchor--skip",
          },
          k()
        )
      ),
      s.value === !0 &&
        t.noErrorIcon === !1 &&
        M.push(
          j("error", [
            w(se, { name: o.iconSet.field.error, color: "negative" }),
          ])
        ),
      t.loading === !0 || e.innerLoading.value === !0
        ? M.push(
            j(
              "inner-loading-append",
              n.loading !== void 0 ? n.loading() : [w(jn, { color: t.color })]
            )
          )
        : t.clearable === !0 &&
          e.hasValue.value === !0 &&
          e.editable.value === !0 &&
          M.push(
            j("inner-clearable-append", [
              w(se, {
                class: "q-field__focusable-action",
                tag: "button",
                name: t.clearIcon || o.iconSet.field.clear,
                tabindex: 0,
                type: "button",
                "aria-hidden": null,
                role: null,
                onClick: p,
              }),
            ])
          ),
      n.append !== void 0 &&
        M.push(
          w(
            "div",
            {
              class:
                "q-field__append q-field__marginal row no-wrap items-center",
              key: "append",
              onClick: Le,
            },
            n.append()
          )
        ),
      e.getInnerAppend !== void 0 &&
        M.push(j("inner-append", e.getInnerAppend())),
      e.getControlChild !== void 0 && M.push(e.getControlChild()),
      M
    );
  }
  function k() {
    const M = [];
    return (
      t.prefix !== void 0 &&
        t.prefix !== null &&
        M.push(
          w(
            "div",
            { class: "q-field__prefix no-pointer-events row items-center" },
            t.prefix
          )
        ),
      e.getShadowControl !== void 0 &&
        e.hasShadow.value === !0 &&
        M.push(e.getShadowControl()),
      e.getControl !== void 0
        ? M.push(e.getControl())
        : n.rawControl !== void 0
        ? M.push(n.rawControl())
        : n.control !== void 0 &&
          M.push(
            w(
              "div",
              {
                ref: e.targetRef,
                class: "q-field__native row",
                tabindex: -1,
                ...e.splitAttrs.attributes.value,
                "data-autofocus": t.autofocus === !0 || void 0,
              },
              n.control(U.value)
            )
          ),
      V.value === !0 &&
        M.push(w("div", { class: z.value }, Ae(n.label, t.label))),
      t.suffix !== void 0 &&
        t.suffix !== null &&
        M.push(
          w(
            "div",
            { class: "q-field__suffix no-pointer-events row items-center" },
            t.suffix
          )
        ),
      M.concat(Ae(n.default))
    );
  }
  function _() {
    let M, X;
    s.value === !0
      ? h.value !== null
        ? ((M = [w("div", { role: "alert" }, h.value)]),
          (X = `q--slot-error-${h.value}`))
        : ((M = Ae(n.error)), (X = "q--slot-error"))
      : (t.hideHint !== !0 || e.focused.value === !0) &&
        (t.hint !== void 0
          ? ((M = [w("div", t.hint)]), (X = `q--slot-hint-${t.hint}`))
          : ((M = Ae(n.hint)), (X = "q--slot-hint")));
    const ae = t.counter === !0 || n.counter !== void 0;
    if (t.hideBottomSpace === !0 && ae === !1 && M === void 0) return;
    const C = w("div", { key: X, class: "q-field__messages col" }, M);
    return w(
      "div",
      {
        class:
          "q-field__bottom row items-start q-field__bottom--" +
          (t.hideBottomSpace !== !0 ? "animated" : "stale"),
        onClick: Le,
      },
      [
        t.hideBottomSpace === !0
          ? C
          : w(_t, { name: "q-transition--field-message" }, () => C),
        ae === !0
          ? w(
              "div",
              { class: "q-field__counter" },
              n.counter !== void 0 ? n.counter() : e.computedCounter.value
            )
          : null,
      ]
    );
  }
  function j(M, X) {
    return X === null
      ? null
      : w(
          "div",
          {
            key: M,
            class:
              "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip",
          },
          X
        );
  }
  let Q = !1;
  return (
    Yt(() => {
      Q = !0;
    }),
    Tn(() => {
      Q === !0 && t.autofocus === !0 && u.focus();
    }),
    Xe(() => {
      Da.value === !0 && t.for === void 0 && (e.targetUid.value = pl()),
        t.autofocus === !0 && u.focus();
    }),
    _e(() => {
      r !== null && clearTimeout(r);
    }),
    Object.assign(u, { focus: D, blur: J }),
    function () {
      const X =
        e.getControl === void 0 && n.control === void 0
          ? {
              ...e.splitAttrs.attributes.value,
              "data-autofocus": t.autofocus === !0 || void 0,
              ...$.value,
            }
          : $.value;
      return w(
        "label",
        { ref: e.rootRef, class: [S.value, a.class], style: a.style, ...X },
        [
          n.before !== void 0
            ? w(
                "div",
                {
                  class:
                    "q-field__before q-field__marginal row no-wrap items-center",
                  onClick: Le,
                },
                n.before()
              )
            : null,
          w(
            "div",
            { class: "q-field__inner relative-position col self-stretch" },
            [
              w(
                "div",
                {
                  ref: e.controlRef,
                  class: B.value,
                  tabindex: -1,
                  ...e.controlEvents,
                },
                c()
              ),
              y.value === !0 ? _() : null,
            ]
          ),
          n.after !== void 0
            ? w(
                "div",
                {
                  class:
                    "q-field__after q-field__marginal row no-wrap items-center",
                  onClick: Le,
                },
                n.after()
              )
            : null,
        ]
      );
    }
  );
}
const vn = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####",
  },
  Wt = {
    "#": { pattern: "[\\d]", negate: "[^\\d]" },
    S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
    N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
    A: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    a: {
      pattern: "[a-zA-Z]",
      negate: "[^a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
    X: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleUpperCase(),
    },
    x: {
      pattern: "[0-9a-zA-Z]",
      negate: "[^0-9a-zA-Z]",
      transform: (e) => e.toLocaleLowerCase(),
    },
  },
  fa = Object.keys(Wt);
fa.forEach((e) => {
  Wt[e].regex = new RegExp(Wt[e].pattern);
});
const ti = new RegExp(
    "\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + fa.join("") + "])|(.)",
    "g"
  ),
  mn = /[.*+?^${}()|[\]\\]/g,
  ce = String.fromCharCode(1),
  li = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean,
  };
function ni(e, t, l, n) {
  let a, u, o, r, m, b;
  const s = R(null),
    h = R(d());
  function g() {
    return (
      e.autogrow === !0 ||
      ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    );
  }
  te(() => e.type + e.autogrow, N),
    te(
      () => e.mask,
      (x) => {
        if (x !== void 0) S(h.value, !0);
        else {
          const A = D(h.value);
          N(), e.modelValue !== A && t("update:modelValue", A);
        }
      }
    ),
    te(
      () => e.fillMask + e.reverseFillMask,
      () => {
        s.value === !0 && S(h.value, !0);
      }
    ),
    te(
      () => e.unmaskedValue,
      () => {
        s.value === !0 && S(h.value);
      }
    );
  function d() {
    if ((N(), s.value === !0)) {
      const x = $(D(e.modelValue));
      return e.fillMask !== !1 ? J(x) : x;
    }
    return e.modelValue;
  }
  function y(x) {
    if (x < a.length) return a.slice(-x);
    let A = "",
      p = a;
    const c = p.indexOf(ce);
    if (c > -1) {
      for (let k = x - p.length; k > 0; k--) A += ce;
      p = p.slice(0, c) + A + p.slice(c);
    }
    return p;
  }
  function N() {
    if (
      ((s.value = e.mask !== void 0 && e.mask.length !== 0 && g()),
      s.value === !1)
    ) {
      (r = void 0), (a = ""), (u = "");
      return;
    }
    const x = vn[e.mask] === void 0 ? e.mask : vn[e.mask],
      A =
        typeof e.fillMask == "string" && e.fillMask.length !== 0
          ? e.fillMask.slice(0, 1)
          : "_",
      p = A.replace(mn, "\\$&"),
      c = [],
      k = [],
      _ = [];
    let j = e.reverseFillMask === !0,
      Q = "",
      M = "";
    x.replace(ti, (E, f, F, G, H) => {
      if (G !== void 0) {
        const I = Wt[G];
        _.push(I),
          (M = I.negate),
          j === !0 &&
            (k.push(
              "(?:" +
                M +
                "+)?(" +
                I.pattern +
                "+)?(?:" +
                M +
                "+)?(" +
                I.pattern +
                "+)?"
            ),
            (j = !1)),
          k.push("(?:" + M + "+)?(" + I.pattern + ")?");
      } else if (F !== void 0)
        (Q = "\\" + (F === "\\" ? "" : F)),
          _.push(F),
          c.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const I = f !== void 0 ? f : H;
        (Q = I === "\\" ? "\\\\\\\\" : I.replace(mn, "\\\\$&")),
          _.push(I),
          c.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const X = new RegExp(
        "^" +
          c.join("") +
          "(" +
          (Q === "" ? "." : "[^" + Q + "]") +
          "+)?" +
          (Q === "" ? "" : "[" + Q + "]*") +
          "$"
      ),
      ae = k.length - 1,
      C = k.map((E, f) =>
        f === 0 && e.reverseFillMask === !0
          ? new RegExp("^" + p + "*" + E)
          : f === ae
          ? new RegExp(
              "^" +
                E +
                "(" +
                (M === "" ? "." : M) +
                "+)?" +
                (e.reverseFillMask === !0 ? "$" : p + "*")
            )
          : new RegExp("^" + E)
      );
    (o = _),
      (r = (E) => {
        const f = X.exec(
          e.reverseFillMask === !0 ? E : E.slice(0, _.length + 1)
        );
        f !== null && (E = f.slice(1).join(""));
        const F = [],
          G = C.length;
        for (let H = 0, I = E; H < G; H++) {
          const Y = C[H].exec(I);
          if (Y === null) break;
          (I = I.slice(Y.shift().length)), F.push(...Y);
        }
        return F.length !== 0 ? F.join("") : E;
      }),
      (a = _.map((E) => (typeof E == "string" ? E : ce)).join("")),
      (u = a.split(ce).join(A));
  }
  function S(x, A, p) {
    const c = n.value,
      k = c.selectionEnd,
      _ = c.value.length - k,
      j = D(x);
    A === !0 && N();
    const Q = $(j),
      M = e.fillMask !== !1 ? J(Q) : Q,
      X = h.value !== M;
    c.value !== M && (c.value = M),
      X === !0 && (h.value = M),
      document.activeElement === c &&
        fe(() => {
          if (M === u) {
            const C = e.reverseFillMask === !0 ? u.length : 0;
            c.setSelectionRange(C, C, "forward");
            return;
          }
          if (p === "insertFromPaste" && e.reverseFillMask !== !0) {
            const C = c.selectionEnd;
            let E = k - 1;
            for (let f = m; f <= E && f < C; f++) a[f] !== ce && E++;
            V.right(c, E);
            return;
          }
          if (
            ["deleteContentBackward", "deleteContentForward"].indexOf(p) > -1
          ) {
            const C =
              e.reverseFillMask === !0
                ? k === 0
                  ? M.length > Q.length
                    ? 1
                    : 0
                  : Math.max(
                      0,
                      M.length - (M === u ? 0 : Math.min(Q.length, _) + 1)
                    ) + 1
                : k;
            c.setSelectionRange(C, C, "forward");
            return;
          }
          if (e.reverseFillMask === !0)
            if (X === !0) {
              const C = Math.max(
                0,
                M.length - (M === u ? 0 : Math.min(Q.length, _ + 1))
              );
              C === 1 && k === 1
                ? c.setSelectionRange(C, C, "forward")
                : V.rightReverse(c, C);
            } else {
              const C = M.length - _;
              c.setSelectionRange(C, C, "backward");
            }
          else if (X === !0) {
            const C = Math.max(0, a.indexOf(ce), Math.min(Q.length, k) - 1);
            V.right(c, C);
          } else {
            const C = k - 1;
            V.right(c, C);
          }
        });
    const ae = e.unmaskedValue === !0 ? D(M) : M;
    String(e.modelValue) !== ae && l(ae, !0);
  }
  function B(x, A, p) {
    const c = $(D(x.value));
    (A = Math.max(0, a.indexOf(ce), Math.min(c.length, A))),
      (m = A),
      x.setSelectionRange(A, p, "forward");
  }
  const V = {
    left(x, A) {
      const p = a.slice(A - 1).indexOf(ce) === -1;
      let c = Math.max(0, A - 1);
      for (; c >= 0; c--)
        if (a[c] === ce) {
          (A = c), p === !0 && A++;
          break;
        }
      if (c < 0 && a[A] !== void 0 && a[A] !== ce) return V.right(x, 0);
      A >= 0 && x.setSelectionRange(A, A, "backward");
    },
    right(x, A) {
      const p = x.value.length;
      let c = Math.min(p, A + 1);
      for (; c <= p; c++)
        if (a[c] === ce) {
          A = c;
          break;
        } else a[c - 1] === ce && (A = c);
      if (c > p && a[A - 1] !== void 0 && a[A - 1] !== ce) return V.left(x, p);
      x.setSelectionRange(A, A, "forward");
    },
    leftReverse(x, A) {
      const p = y(x.value.length);
      let c = Math.max(0, A - 1);
      for (; c >= 0; c--)
        if (p[c - 1] === ce) {
          A = c;
          break;
        } else if (p[c] === ce && ((A = c), c === 0)) break;
      if (c < 0 && p[A] !== void 0 && p[A] !== ce) return V.rightReverse(x, 0);
      A >= 0 && x.setSelectionRange(A, A, "backward");
    },
    rightReverse(x, A) {
      const p = x.value.length,
        c = y(p),
        k = c.slice(0, A + 1).indexOf(ce) === -1;
      let _ = Math.min(p, A + 1);
      for (; _ <= p; _++)
        if (c[_ - 1] === ce) {
          (A = _), A > 0 && k === !0 && A--;
          break;
        }
      if (_ > p && c[A - 1] !== void 0 && c[A - 1] !== ce)
        return V.leftReverse(x, p);
      x.setSelectionRange(A, A, "forward");
    },
  };
  function z(x) {
    t("click", x), (b = void 0);
  }
  function U(x) {
    if ((t("keydown", x), Ln(x) === !0 || x.altKey === !0)) return;
    const A = n.value,
      p = A.selectionStart,
      c = A.selectionEnd;
    if ((x.shiftKey || (b = void 0), x.keyCode === 37 || x.keyCode === 39)) {
      x.shiftKey &&
        b === void 0 &&
        (b = A.selectionDirection === "forward" ? p : c);
      const k =
        V[
          (x.keyCode === 39 ? "right" : "left") +
            (e.reverseFillMask === !0 ? "Reverse" : "")
        ];
      if ((x.preventDefault(), k(A, b === p ? c : p), x.shiftKey)) {
        const _ = A.selectionStart;
        A.setSelectionRange(Math.min(b, _), Math.max(b, _), "forward");
      }
    } else
      x.keyCode === 8 && e.reverseFillMask !== !0 && p === c
        ? (V.left(A, p), A.setSelectionRange(A.selectionStart, c, "backward"))
        : x.keyCode === 46 &&
          e.reverseFillMask === !0 &&
          p === c &&
          (V.rightReverse(A, c),
          A.setSelectionRange(p, A.selectionEnd, "forward"));
  }
  function $(x) {
    if (x == null || x === "") return "";
    if (e.reverseFillMask === !0) return K(x);
    const A = o;
    let p = 0,
      c = "";
    for (let k = 0; k < A.length; k++) {
      const _ = x[p],
        j = A[k];
      if (typeof j == "string") (c += j), _ === j && p++;
      else if (_ !== void 0 && j.regex.test(_))
        (c += j.transform !== void 0 ? j.transform(_) : _), p++;
      else return c;
    }
    return c;
  }
  function K(x) {
    const A = o,
      p = a.indexOf(ce);
    let c = x.length - 1,
      k = "";
    for (let _ = A.length - 1; _ >= 0 && c > -1; _--) {
      const j = A[_];
      let Q = x[c];
      if (typeof j == "string") (k = j + k), Q === j && c--;
      else if (Q !== void 0 && j.regex.test(Q))
        do
          (k = (j.transform !== void 0 ? j.transform(Q) : Q) + k),
            c--,
            (Q = x[c]);
        while (p === _ && Q !== void 0 && j.regex.test(Q));
      else return k;
    }
    return k;
  }
  function D(x) {
    return typeof x != "string" || r === void 0
      ? typeof x == "number"
        ? r("" + x)
        : x
      : r(x);
  }
  function J(x) {
    return u.length - x.length <= 0
      ? x
      : e.reverseFillMask === !0 && x.length !== 0
      ? u.slice(0, -x.length) + x
      : x + u.slice(x.length);
  }
  return {
    innerValue: h,
    hasMask: s,
    moveCursorForPaste: B,
    updateMaskValue: S,
    onMaskedKeydown: U,
    onMaskedClick: z,
  };
}
const va = { name: String };
function Ku(e) {
  return v(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Uu(e = {}) {
  return (t, l, n) => {
    t[l](w("input", { class: "hidden" + (n || ""), ...e.value }));
  };
}
function ma(e) {
  return v(() => e.name || e.for);
}
function ai(e, t) {
  function l() {
    const n = e.modelValue;
    try {
      const a =
        "DataTransfer" in window
          ? new DataTransfer()
          : "ClipboardEvent" in window
          ? new ClipboardEvent("").clipboardData
          : void 0;
      return (
        Object(n) === n &&
          ("length" in n ? Array.from(n) : [n]).forEach((u) => {
            a.items.add(u);
          }),
        { files: a.files }
      );
    } catch {
      return { files: void 0 };
    }
  }
  return t === !0
    ? v(() => {
        if (e.type === "file") return l();
      })
    : v(l);
}
const oi =
    /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,
  ii =
    /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,
  ui = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,
  ri = /[a-z0-9_ -]$/i;
function ga(e) {
  return function (l) {
    if (l.type === "compositionend" || l.type === "change") {
      if (l.target.qComposing !== !0) return;
      (l.target.qComposing = !1), e(l);
    } else
      l.type === "compositionupdate" &&
        l.target.qComposing !== !0 &&
        typeof l.data == "string" &&
        (ze.is.firefox === !0
          ? ri.test(l.data) === !1
          : oi.test(l.data) === !0 ||
            ii.test(l.data) === !0 ||
            ui.test(l.data) === !0) === !0 &&
        (l.target.qComposing = !0);
  };
}
var $e = ge({
    name: "QInput",
    inheritAttrs: !1,
    props: {
      ...Xt,
      ...li,
      ...va,
      modelValue: { required: !1 },
      shadowText: String,
      type: { type: String, default: "text" },
      debounce: [String, Number],
      autogrow: Boolean,
      inputClass: [Array, String, Object],
      inputStyle: [Array, String, Object],
    },
    emits: [..._l, "paste", "change", "keydown", "click", "animationend"],
    setup(e, { emit: t, attrs: l }) {
      const { proxy: n } = de(),
        { $q: a } = n,
        u = {};
      let o = NaN,
        r,
        m,
        b = null,
        s;
      const h = R(null),
        g = ma(e),
        {
          innerValue: d,
          hasMask: y,
          moveCursorForPaste: N,
          updateMaskValue: S,
          onMaskedKeydown: B,
          onMaskedClick: V,
        } = ni(e, t, Q, h),
        z = ai(e, !0),
        U = v(() => qt(d.value)),
        $ = ga(_),
        K = Cl(),
        D = v(() => e.type === "textarea" || e.autogrow === !0),
        J = v(
          () =>
            D.value === !0 ||
            ["text", "search", "url", "tel", "password"].includes(e.type)
        ),
        x = v(() => {
          const f = {
            ...K.splitAttrs.listeners.value,
            onInput: _,
            onPaste: k,
            onChange: X,
            onBlur: ae,
            onFocus: Oe,
          };
          return (
            (f.onCompositionstart =
              f.onCompositionupdate =
              f.onCompositionend =
                $),
            y.value === !0 && ((f.onKeydown = B), (f.onClick = V)),
            e.autogrow === !0 && (f.onAnimationend = j),
            f
          );
        }),
        A = v(() => {
          const f = {
            tabindex: 0,
            "data-autofocus": e.autofocus === !0 || void 0,
            rows: e.type === "textarea" ? 6 : void 0,
            "aria-label": e.label,
            name: g.value,
            ...K.splitAttrs.attributes.value,
            id: K.targetUid.value,
            maxlength: e.maxlength,
            disabled: e.disable === !0,
            readonly: e.readonly === !0,
          };
          return (
            D.value === !1 && (f.type = e.type),
            e.autogrow === !0 && (f.rows = 1),
            f
          );
        });
      te(
        () => e.type,
        () => {
          h.value && (h.value.value = e.modelValue);
        }
      ),
        te(
          () => e.modelValue,
          (f) => {
            if (y.value === !0) {
              if (m === !0 && ((m = !1), String(f) === o)) return;
              S(f);
            } else
              d.value !== f &&
                ((d.value = f),
                e.type === "number" &&
                  u.hasOwnProperty("value") === !0 &&
                  (r === !0 ? (r = !1) : delete u.value));
            e.autogrow === !0 && fe(M);
          }
        ),
        te(
          () => e.autogrow,
          (f) => {
            f === !0
              ? fe(M)
              : h.value !== null &&
                l.rows > 0 &&
                (h.value.style.height = "auto");
          }
        ),
        te(
          () => e.dense,
          () => {
            e.autogrow === !0 && fe(M);
          }
        );
      function p() {
        Jt(() => {
          const f = document.activeElement;
          h.value !== null &&
            h.value !== f &&
            (f === null || f.id !== K.targetUid.value) &&
            h.value.focus({ preventScroll: !0 });
        });
      }
      function c() {
        h.value !== null && h.value.select();
      }
      function k(f) {
        if (y.value === !0 && e.reverseFillMask !== !0) {
          const F = f.target;
          N(F, F.selectionStart, F.selectionEnd);
        }
        t("paste", f);
      }
      function _(f) {
        if (!f || !f.target) return;
        if (e.type === "file") {
          t("update:modelValue", f.target.files);
          return;
        }
        const F = f.target.value;
        if (f.target.qComposing === !0) {
          u.value = F;
          return;
        }
        if (y.value === !0) S(F, !1, f.inputType);
        else if (
          (Q(F), J.value === !0 && f.target === document.activeElement)
        ) {
          const { selectionStart: G, selectionEnd: H } = f.target;
          G !== void 0 &&
            H !== void 0 &&
            fe(() => {
              f.target === document.activeElement &&
                F.indexOf(f.target.value) === 0 &&
                f.target.setSelectionRange(G, H);
            });
        }
        e.autogrow === !0 && M();
      }
      function j(f) {
        t("animationend", f), M();
      }
      function Q(f, F) {
        (s = () => {
          (b = null),
            e.type !== "number" &&
              u.hasOwnProperty("value") === !0 &&
              delete u.value,
            e.modelValue !== f &&
              o !== f &&
              ((o = f),
              F === !0 && (m = !0),
              t("update:modelValue", f),
              fe(() => {
                o === f && (o = NaN);
              })),
            (s = void 0);
        }),
          e.type === "number" && ((r = !0), (u.value = f)),
          e.debounce !== void 0
            ? (b !== null && clearTimeout(b),
              (u.value = f),
              (b = setTimeout(s, e.debounce)))
            : s();
      }
      function M() {
        requestAnimationFrame(() => {
          const f = h.value;
          if (f !== null) {
            const F = f.parentNode.style,
              { scrollTop: G } = f,
              { overflowY: H, maxHeight: I } =
                a.platform.is.firefox === !0 ? {} : window.getComputedStyle(f),
              Y = H !== void 0 && H !== "scroll";
            Y === !0 && (f.style.overflowY = "hidden"),
              (F.marginBottom = f.scrollHeight - 1 + "px"),
              (f.style.height = "1px"),
              (f.style.height = f.scrollHeight + "px"),
              Y === !0 &&
                (f.style.overflowY =
                  parseInt(I, 10) < f.scrollHeight ? "auto" : "hidden"),
              (F.marginBottom = ""),
              (f.scrollTop = G);
          }
        });
      }
      function X(f) {
        $(f),
          b !== null && (clearTimeout(b), (b = null)),
          s !== void 0 && s(),
          t("change", f.target.value);
      }
      function ae(f) {
        f !== void 0 && Oe(f),
          b !== null && (clearTimeout(b), (b = null)),
          s !== void 0 && s(),
          (r = !1),
          (m = !1),
          delete u.value,
          e.type !== "file" &&
            setTimeout(() => {
              h.value !== null &&
                (h.value.value = d.value !== void 0 ? d.value : "");
            });
      }
      function C() {
        return u.hasOwnProperty("value") === !0
          ? u.value
          : d.value !== void 0
          ? d.value
          : "";
      }
      _e(() => {
        ae();
      }),
        Xe(() => {
          e.autogrow === !0 && M();
        }),
        Object.assign(K, {
          innerValue: d,
          fieldClass: v(
            () =>
              `q-${D.value === !0 ? "textarea" : "input"}` +
              (e.autogrow === !0 ? " q-textarea--autogrow" : "")
          ),
          hasShadow: v(
            () =>
              e.type !== "file" &&
              typeof e.shadowText == "string" &&
              e.shadowText.length !== 0
          ),
          inputRef: h,
          emitValue: Q,
          hasValue: U,
          floatingLabel: v(
            () =>
              (U.value === !0 &&
                (e.type !== "number" || isNaN(d.value) === !1)) ||
              qt(e.displayValue)
          ),
          getControl: () =>
            w(D.value === !0 ? "textarea" : "input", {
              ref: h,
              class: ["q-field__native q-placeholder", e.inputClass],
              style: e.inputStyle,
              ...A.value,
              ...x.value,
              ...(e.type !== "file" ? { value: C() } : z.value),
            }),
          getShadowControl: () =>
            w(
              "div",
              {
                class:
                  "q-field__native q-field__shadow absolute-bottom no-pointer-events" +
                  (D.value === !0 ? "" : " text-no-wrap"),
              },
              [w("span", { class: "invisible" }, C()), w("span", e.shadowText)]
            ),
        });
      const E = ql(K);
      return (
        Object.assign(n, {
          focus: p,
          select: c,
          getNativeElement: () => h.value,
        }),
        xl(n, "nativeEl", () => h.value),
        E
      );
    },
  }),
  ke = ge({
    name: "QItemSection",
    props: {
      avatar: Boolean,
      thumbnail: Boolean,
      side: Boolean,
      top: Boolean,
      noWrap: Boolean,
    },
    setup(e, { slots: t }) {
      const l = v(
        () =>
          `q-item__section column q-item__section--${
            e.avatar === !0 || e.side === !0 || e.thumbnail === !0
              ? "side"
              : "main"
          }` +
          (e.top === !0
            ? " q-item__section--top justify-start"
            : " justify-center") +
          (e.avatar === !0 ? " q-item__section--avatar" : "") +
          (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") +
          (e.noWrap === !0 ? " q-item__section--nowrap" : "")
      );
      return () => w("div", { class: l.value }, Ae(t.default));
    },
  }),
  qe = ge({
    name: "QItem",
    props: {
      ...Ze,
      ...Jn,
      tag: { type: String, default: "div" },
      active: { type: Boolean, default: null },
      clickable: Boolean,
      dense: Boolean,
      insetLevel: Number,
      tabindex: [String, Number],
      focused: Boolean,
      manualFocus: Boolean,
    },
    emits: ["click", "keyup"],
    setup(e, { slots: t, emit: l }) {
      const {
          proxy: { $q: n },
        } = de(),
        a = Ge(e, n),
        {
          hasLink: u,
          linkAttrs: o,
          linkClass: r,
          linkTag: m,
          navigateOnClick: b,
        } = Xn(),
        s = R(null),
        h = R(null),
        g = v(() => e.clickable === !0 || u.value === !0 || e.tag === "label"),
        d = v(() => e.disable !== !0 && g.value === !0),
        y = v(
          () =>
            "q-item q-item-type row no-wrap" +
            (e.dense === !0 ? " q-item--dense" : "") +
            (a.value === !0 ? " q-item--dark" : "") +
            (u.value === !0 && e.active === null
              ? r.value
              : e.active === !0
              ? ` q-item--active${
                  e.activeClass !== void 0 ? ` ${e.activeClass}` : ""
                }`
              : "") +
            (e.disable === !0 ? " disabled" : "") +
            (d.value === !0
              ? " q-item--clickable q-link cursor-pointer " +
                (e.manualFocus === !0
                  ? "q-manual-focusable"
                  : "q-focusable q-hoverable") +
                (e.focused === !0 ? " q-manual-focusable--focused" : "")
              : "")
        ),
        N = v(() => {
          if (e.insetLevel === void 0) return null;
          const z = n.lang.rtl === !0 ? "Right" : "Left";
          return { ["padding" + z]: 16 + e.insetLevel * 56 + "px" };
        });
      function S(z) {
        d.value === !0 &&
          (h.value !== null &&
            (z.qKeyEvent !== !0 && document.activeElement === s.value
              ? h.value.focus()
              : document.activeElement === h.value && s.value.focus()),
          b(z));
      }
      function B(z) {
        if (d.value === !0 && Pe(z, 13) === !0) {
          pe(z), (z.qKeyEvent = !0);
          const U = new MouseEvent("click", z);
          (U.qKeyEvent = !0), s.value.dispatchEvent(U);
        }
        l("keyup", z);
      }
      function V() {
        const z = Xa(t.default, []);
        return (
          d.value === !0 &&
            z.unshift(
              w("div", { class: "q-focus-helper", tabindex: -1, ref: h })
            ),
          z
        );
      }
      return () => {
        const z = {
          ref: s,
          class: y.value,
          style: N.value,
          role: "listitem",
          onClick: S,
          onKeyup: B,
        };
        return (
          d.value === !0
            ? ((z.tabindex = e.tabindex || "0"), Object.assign(z, o.value))
            : g.value === !0 && (z["aria-disabled"] = "true"),
          w(m.value, z, V())
        );
      };
    },
  }),
  wt = ge({
    name: "QList",
    props: {
      ...Ze,
      bordered: Boolean,
      dense: Boolean,
      separator: Boolean,
      padding: Boolean,
      tag: { type: String, default: "div" },
    },
    setup(e, { slots: t }) {
      const l = de(),
        n = Ge(e, l.proxy.$q),
        a = v(
          () =>
            "q-list" +
            (e.bordered === !0 ? " q-list--bordered" : "") +
            (e.dense === !0 ? " q-list--dense" : "") +
            (e.separator === !0 ? " q-list--separator" : "") +
            (n.value === !0 ? " q-list--dark" : "") +
            (e.padding === !0 ? " q-list--padding" : "")
        );
      return () => w(e.tag, { class: a.value }, Ae(t.default));
    },
  });
const si = {
  target: { default: !0 },
  noParentEvent: Boolean,
  contextMenu: Boolean,
};
function di({ showing: e, avoidEmit: t, configureAnchorEl: l }) {
  const { props: n, proxy: a, emit: u } = de(),
    o = R(null);
  let r = null;
  function m(d) {
    return o.value === null
      ? !1
      : d === void 0 || d.touches === void 0 || d.touches.length <= 1;
  }
  const b = {};
  l === void 0 &&
    (Object.assign(b, {
      hide(d) {
        a.hide(d);
      },
      toggle(d) {
        a.toggle(d), (d.qAnchorHandled = !0);
      },
      toggleKey(d) {
        Pe(d, 13) === !0 && b.toggle(d);
      },
      contextClick(d) {
        a.hide(d),
          Le(d),
          fe(() => {
            a.show(d), (d.qAnchorHandled = !0);
          });
      },
      prevent: Le,
      mobileTouch(d) {
        if ((b.mobileCleanup(d), m(d) !== !0)) return;
        a.hide(d), o.value.classList.add("non-selectable");
        const y = d.target;
        vl(b, "anchor", [
          [y, "touchmove", "mobileCleanup", "passive"],
          [y, "touchend", "mobileCleanup", "passive"],
          [y, "touchcancel", "mobileCleanup", "passive"],
          [o.value, "contextmenu", "prevent", "notPassive"],
        ]),
          (r = setTimeout(() => {
            (r = null), a.show(d), (d.qAnchorHandled = !0);
          }, 300));
      },
      mobileCleanup(d) {
        o.value.classList.remove("non-selectable"),
          r !== null && (clearTimeout(r), (r = null)),
          e.value === !0 && d !== void 0 && Ja();
      },
    }),
    (l = function (d = n.contextMenu) {
      if (n.noParentEvent === !0 || o.value === null) return;
      let y;
      d === !0
        ? a.$q.platform.is.mobile === !0
          ? (y = [[o.value, "touchstart", "mobileTouch", "passive"]])
          : (y = [
              [o.value, "mousedown", "hide", "passive"],
              [o.value, "contextmenu", "contextClick", "notPassive"],
            ])
        : (y = [
            [o.value, "click", "toggle", "passive"],
            [o.value, "keyup", "toggleKey", "passive"],
          ]),
        vl(b, "anchor", y);
    }));
  function s() {
    An(b, "anchor");
  }
  function h(d) {
    for (o.value = d; o.value.classList.contains("q-anchor--skip"); )
      o.value = o.value.parentNode;
    l();
  }
  function g() {
    if (n.target === !1 || n.target === "" || a.$el.parentNode === null)
      o.value = null;
    else if (n.target === !0) h(a.$el.parentNode);
    else {
      let d = n.target;
      if (typeof n.target == "string")
        try {
          d = document.querySelector(n.target);
        } catch {
          d = void 0;
        }
      d != null
        ? ((o.value = d.$el || d), l())
        : ((o.value = null),
          console.error(`Anchor: target "${n.target}" not found`));
    }
  }
  return (
    te(
      () => n.contextMenu,
      (d) => {
        o.value !== null && (s(), l(d));
      }
    ),
    te(
      () => n.target,
      () => {
        o.value !== null && s(), g();
      }
    ),
    te(
      () => n.noParentEvent,
      (d) => {
        o.value !== null && (d === !0 ? s() : l());
      }
    ),
    Xe(() => {
      g(),
        t !== !0 &&
          n.modelValue === !0 &&
          o.value === null &&
          u("update:modelValue", !1);
    }),
    _e(() => {
      r !== null && clearTimeout(r), s();
    }),
    { anchorEl: o, canShow: m, anchorEvents: b }
  );
}
function ci(e, t) {
  const l = R(null);
  let n;
  function a(r, m) {
    const b = `${m !== void 0 ? "add" : "remove"}EventListener`,
      s = m !== void 0 ? m : n;
    r !== window && r[b]("scroll", s, Be.passive),
      window[b]("scroll", s, Be.passive),
      (n = m);
  }
  function u() {
    l.value !== null && (a(l.value), (l.value = null));
  }
  const o = te(
    () => e.noParentEvent,
    () => {
      l.value !== null && (u(), t());
    }
  );
  return (
    _e(o),
    { localScrollTarget: l, unconfigureScrollTarget: u, changeScrollEvent: a }
  );
}
const { notPassiveCapture: Kt } = Be,
  Je = [];
function Ut(e) {
  const t = e.target;
  if (
    t === void 0 ||
    t.nodeType === 8 ||
    t.classList.contains("no-pointer-events") === !0
  )
    return;
  let l = vt.length - 1;
  for (; l >= 0; ) {
    const n = vt[l].$;
    if (n.type.name === "QTooltip") {
      l--;
      continue;
    }
    if (n.type.name !== "QDialog") break;
    if (n.props.seamless !== !0) return;
    l--;
  }
  for (let n = Je.length - 1; n >= 0; n--) {
    const a = Je[n];
    if (
      (a.anchorEl.value === null || a.anchorEl.value.contains(t) === !1) &&
      (t === document.body ||
        (a.innerRef.value !== null && a.innerRef.value.contains(t) === !1))
    )
      (e.qClickOutside = !0), a.onClickOutside(e);
    else return;
  }
}
function fi(e) {
  Je.push(e),
    Je.length === 1 &&
      (document.addEventListener("mousedown", Ut, Kt),
      document.addEventListener("touchstart", Ut, Kt));
}
function gn(e) {
  const t = Je.findIndex((l) => l === e);
  t > -1 &&
    (Je.splice(t, 1),
    Je.length === 0 &&
      (document.removeEventListener("mousedown", Ut, Kt),
      document.removeEventListener("touchstart", Ut, Kt)));
}
let hn, bn;
function yn(e) {
  const t = e.split(" ");
  return t.length !== 2
    ? !1
    : ["top", "center", "bottom"].includes(t[0]) !== !0
    ? (console.error(
        "Anchor/Self position must start with one of top/center/bottom"
      ),
      !1)
    : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0
    ? (console.error(
        "Anchor/Self position must end with one of left/middle/right/start/end"
      ),
      !1)
    : !0;
}
function vi(e) {
  return e
    ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number")
    : !0;
}
const wl = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left",
};
["left", "middle", "right"].forEach((e) => {
  (wl[`${e}#ltr`] = e), (wl[`${e}#rtl`] = e);
});
function pn(e, t) {
  const l = e.split(" ");
  return {
    vertical: l[0],
    horizontal: wl[`${l[1]}#${t === !0 ? "rtl" : "ltr"}`],
  };
}
function mi(e, t) {
  let {
    top: l,
    left: n,
    right: a,
    bottom: u,
    width: o,
    height: r,
  } = e.getBoundingClientRect();
  return (
    t !== void 0 &&
      ((l -= t[1]),
      (n -= t[0]),
      (u += t[1]),
      (a += t[0]),
      (o += t[0]),
      (r += t[1])),
    {
      top: l,
      bottom: u,
      height: r,
      left: n,
      right: a,
      width: o,
      middle: n + (a - n) / 2,
      center: l + (u - l) / 2,
    }
  );
}
function gi(e, t, l) {
  let { top: n, left: a } = e.getBoundingClientRect();
  return (
    (n += t.top),
    (a += t.left),
    l !== void 0 && ((n += l[1]), (a += l[0])),
    {
      top: n,
      bottom: n + 1,
      height: 1,
      left: a,
      right: a + 1,
      width: 1,
      middle: a,
      center: n,
    }
  );
}
function hi(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function wn(e, t, l, n) {
  return {
    top: e[l.vertical] - t[n.vertical],
    left: e[l.horizontal] - t[n.horizontal],
  };
}
function ha(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5) return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      ha(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: l,
    offset: n,
    anchorEl: a,
    anchorOrigin: u,
    selfOrigin: o,
    absoluteOffset: r,
    fit: m,
    cover: b,
    maxHeight: s,
    maxWidth: h,
  } = e;
  if (ze.is.ios === !0 && window.visualViewport !== void 0) {
    const K = document.body.style,
      { offsetLeft: D, offsetTop: J } = window.visualViewport;
    D !== hn && (K.setProperty("--q-pe-left", D + "px"), (hn = D)),
      J !== bn && (K.setProperty("--q-pe-top", J + "px"), (bn = J));
  }
  const { scrollLeft: g, scrollTop: d } = l,
    y = r === void 0 ? mi(a, b === !0 ? [0, 0] : n) : gi(a, r, n);
  Object.assign(l.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: h || "100vw",
    maxHeight: s || "100vh",
    visibility: "visible",
  });
  const { offsetWidth: N, offsetHeight: S } = l,
    { elWidth: B, elHeight: V } =
      m === !0 || b === !0
        ? {
            elWidth: Math.max(y.width, N),
            elHeight: b === !0 ? Math.max(y.height, S) : S,
          }
        : { elWidth: N, elHeight: S };
  let z = { maxWidth: h, maxHeight: s };
  (m === !0 || b === !0) &&
    ((z.minWidth = y.width + "px"),
    b === !0 && (z.minHeight = y.height + "px")),
    Object.assign(l.style, z);
  const U = hi(B, V);
  let $ = wn(y, U, u, o);
  if (r === void 0 || n === void 0) cl($, y, U, u, o);
  else {
    const { top: K, left: D } = $;
    cl($, y, U, u, o);
    let J = !1;
    if ($.top !== K) {
      J = !0;
      const x = 2 * n[1];
      (y.center = y.top -= x), (y.bottom -= x + 2);
    }
    if ($.left !== D) {
      J = !0;
      const x = 2 * n[0];
      (y.middle = y.left -= x), (y.right -= x + 2);
    }
    J === !0 && (($ = wn(y, U, u, o)), cl($, y, U, u, o));
  }
  (z = { top: $.top + "px", left: $.left + "px" }),
    $.maxHeight !== void 0 &&
      ((z.maxHeight = $.maxHeight + "px"),
      y.height > $.maxHeight && (z.minHeight = z.maxHeight)),
    $.maxWidth !== void 0 &&
      ((z.maxWidth = $.maxWidth + "px"),
      y.width > $.maxWidth && (z.minWidth = z.maxWidth)),
    Object.assign(l.style, z),
    l.scrollTop !== d && (l.scrollTop = d),
    l.scrollLeft !== g && (l.scrollLeft = g);
}
function cl(e, t, l, n, a) {
  const u = l.bottom,
    o = l.right,
    r = Io(),
    m = window.innerHeight - r,
    b = document.body.clientWidth;
  if (e.top < 0 || e.top + u > m)
    if (a.vertical === "center")
      (e.top = t[n.vertical] > m / 2 ? Math.max(0, m - u) : 0),
        (e.maxHeight = Math.min(u, m));
    else if (t[n.vertical] > m / 2) {
      const s = Math.min(
        m,
        n.vertical === "center"
          ? t.center
          : n.vertical === a.vertical
          ? t.bottom
          : t.top
      );
      (e.maxHeight = Math.min(u, s)), (e.top = Math.max(0, s - u));
    } else
      (e.top = Math.max(
        0,
        n.vertical === "center"
          ? t.center
          : n.vertical === a.vertical
          ? t.top
          : t.bottom
      )),
        (e.maxHeight = Math.min(u, m - e.top));
  if (e.left < 0 || e.left + o > b)
    if (((e.maxWidth = Math.min(o, b)), a.horizontal === "middle"))
      e.left = t[n.horizontal] > b / 2 ? Math.max(0, b - o) : 0;
    else if (t[n.horizontal] > b / 2) {
      const s = Math.min(
        b,
        n.horizontal === "middle"
          ? t.middle
          : n.horizontal === a.horizontal
          ? t.right
          : t.left
      );
      (e.maxWidth = Math.min(o, s)), (e.left = Math.max(0, s - e.maxWidth));
    } else
      (e.left = Math.max(
        0,
        n.horizontal === "middle"
          ? t.middle
          : n.horizontal === a.horizontal
          ? t.left
          : t.right
      )),
        (e.maxWidth = Math.min(o, b - e.left));
}
var ct = ge({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...si,
    ...ea,
    ...Ze,
    ...na,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: { type: String, validator: yn },
    self: { type: String, validator: yn },
    offset: { type: Array, validator: vi },
    scrollTarget: { default: void 0 },
    touchPosition: Boolean,
    maxHeight: { type: String, default: null },
    maxWidth: { type: String, default: null },
  },
  emits: [...ta, "click", "escapeKey"],
  setup(e, { slots: t, emit: l, attrs: n }) {
    let a = null,
      u,
      o,
      r;
    const m = de(),
      { proxy: b } = m,
      { $q: s } = b,
      h = R(null),
      g = R(!1),
      d = v(() => e.persistent !== !0 && e.noRouteDismiss !== !0),
      y = Ge(e, s),
      { registerTick: N, removeTick: S } = Gn(),
      { registerTimeout: B } = Zn(),
      { transitionProps: V, transitionStyle: z } = aa(e),
      {
        localScrollTarget: U,
        changeScrollEvent: $,
        unconfigureScrollTarget: K,
      } = ci(e, F),
      { anchorEl: D, canShow: J } = di({ showing: g }),
      { hide: x } = la({
        showing: g,
        canShow: J,
        handleShow: C,
        handleHide: E,
        hideOnRouteChange: d,
        processOnMount: !0,
      }),
      { showPortal: A, hidePortal: p, renderPortal: c } = ua(m, h, ie, "menu"),
      k = {
        anchorEl: D,
        innerRef: h,
        onClickOutside(L) {
          if (e.persistent !== !0 && g.value === !0)
            return (
              x(L),
              (L.type === "touchstart" ||
                L.target.classList.contains("q-dialog__backdrop")) &&
                pe(L),
              !0
            );
        },
      },
      _ = v(() =>
        pn(
          e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
          s.lang.rtl
        )
      ),
      j = v(() =>
        e.cover === !0 ? _.value : pn(e.self || "top start", s.lang.rtl)
      ),
      Q = v(
        () =>
          (e.square === !0 ? " q-menu--square" : "") +
          (y.value === !0 ? " q-menu--dark q-dark" : "")
      ),
      M = v(() => (e.autoClose === !0 ? { onClick: G } : {})),
      X = v(() => g.value === !0 && e.persistent !== !0);
    te(X, (L) => {
      L === !0 ? (sa(I), fi(k)) : (Dt(I), gn(k));
    });
    function ae() {
      Jt(() => {
        let L = h.value;
        L &&
          L.contains(document.activeElement) !== !0 &&
          ((L =
            L.querySelector(
              "[autofocus][tabindex], [data-autofocus][tabindex]"
            ) ||
            L.querySelector(
              "[autofocus] [tabindex], [data-autofocus] [tabindex]"
            ) ||
            L.querySelector("[autofocus], [data-autofocus]") ||
            L),
          L.focus({ preventScroll: !0 }));
      });
    }
    function C(L) {
      if (
        ((a = e.noRefocus === !1 ? document.activeElement : null),
        ca(H),
        A(),
        F(),
        (u = void 0),
        L !== void 0 && (e.touchPosition || e.contextMenu))
      ) {
        const ve = Mn(L);
        if (ve.left !== void 0) {
          const { top: Ie, left: Ne } = D.value.getBoundingClientRect();
          u = { left: ve.left - Ne, top: ve.top - Ie };
        }
      }
      o === void 0 &&
        (o = te(
          () =>
            s.screen.width +
            "|" +
            s.screen.height +
            "|" +
            e.self +
            "|" +
            e.anchor +
            "|" +
            s.lang.rtl,
          Y
        )),
        e.noFocus !== !0 && document.activeElement.blur(),
        N(() => {
          Y(), e.noFocus !== !0 && ae();
        }),
        B(() => {
          s.platform.is.ios === !0 && ((r = e.autoClose), h.value.click()),
            Y(),
            A(!0),
            l("show", L);
        }, e.transitionDuration);
    }
    function E(L) {
      S(),
        p(),
        f(!0),
        a !== null &&
          (L === void 0 || L.qClickOutside !== !0) &&
          ((
            (L && L.type.indexOf("key") === 0
              ? a.closest('[tabindex]:not([tabindex^="-"])')
              : void 0) || a
          ).focus(),
          (a = null)),
        B(() => {
          p(!0), l("hide", L);
        }, e.transitionDuration);
    }
    function f(L) {
      (u = void 0),
        o !== void 0 && (o(), (o = void 0)),
        (L === !0 || g.value === !0) && (yl(H), K(), gn(k), Dt(I)),
        L !== !0 && (a = null);
    }
    function F() {
      (D.value !== null || e.scrollTarget !== void 0) &&
        ((U.value = Ro(D.value, e.scrollTarget)), $(U.value, Y));
    }
    function G(L) {
      r !== !0 ? (ia(b, L), l("click", L)) : (r = !1);
    }
    function H(L) {
      X.value === !0 &&
        e.noFocus !== !0 &&
        Wn(h.value, L.target) !== !0 &&
        ae();
    }
    function I(L) {
      l("escapeKey"), x(L);
    }
    function Y() {
      ha({
        targetEl: h.value,
        offset: e.offset,
        anchorEl: D.value,
        anchorOrigin: _.value,
        selfOrigin: j.value,
        absoluteOffset: u,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth,
      });
    }
    function ie() {
      return w(_t, V.value, () =>
        g.value === !0
          ? w(
              "div",
              {
                role: "menu",
                ...n,
                ref: h,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + Q.value, n.class],
                style: [n.style, z.value],
                ...M.value,
              },
              Ae(t.default)
            )
          : null
      );
    }
    return _e(f), Object.assign(b, { focus: ae, updatePosition: Y }), c;
  },
});
const bi = ["top", "middle", "bottom"];
var xn = ge({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: { type: String, validator: (e) => bi.includes(e) },
  },
  setup(e, { slots: t }) {
    const l = v(() => (e.align !== void 0 ? { verticalAlign: e.align } : null)),
      n = v(() => {
        const a = (e.outline === !0 && e.color) || e.textColor;
        return (
          `q-badge flex inline items-center no-wrap q-badge--${
            e.multiLine === !0 ? "multi" : "single"
          }-line` +
          (e.outline === !0
            ? " q-badge--outline"
            : e.color !== void 0
            ? ` bg-${e.color}`
            : "") +
          (a !== void 0 ? ` text-${a}` : "") +
          (e.floating === !0 ? " q-badge--floating" : "") +
          (e.rounded === !0 ? " q-badge--rounded" : "") +
          (e.transparent === !0 ? " q-badge--transparent" : "")
        );
      });
    return () =>
      w(
        "div",
        {
          class: n.value,
          style: l.value,
          role: "status",
          "aria-label": e.label,
        },
        Ke(t.default, e.label !== void 0 ? [e.label] : [])
      );
  },
});
function Sn(e) {
  if (e === !1) return 0;
  if (e === !0 || e === void 0) return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
var Ht = zn({
    name: "close-popup",
    beforeMount(e, { value: t }) {
      const l = {
        depth: Sn(t),
        handler(n) {
          l.depth !== 0 &&
            setTimeout(() => {
              const a = $o(e);
              a !== void 0 && Bo(a, n, l.depth);
            });
        },
        handlerKey(n) {
          Pe(n, 13) === !0 && l.handler(n);
        },
      };
      (e.__qclosepopup = l),
        e.addEventListener("click", l.handler),
        e.addEventListener("keyup", l.handlerKey);
    },
    updated(e, { value: t, oldValue: l }) {
      t !== l && (e.__qclosepopup.depth = Sn(t));
    },
    beforeUnmount(e) {
      const t = e.__qclosepopup;
      e.removeEventListener("click", t.handler),
        e.removeEventListener("keyup", t.handlerKey),
        delete e.__qclosepopup;
    },
  }),
  yi = ge({
    name: "QField",
    inheritAttrs: !1,
    props: Xt,
    emits: _l,
    setup() {
      return ql(Cl());
    },
  });
const pi = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var wi = ge({
    name: "QChip",
    props: {
      ...Ze,
      ...Sl,
      dense: Boolean,
      icon: String,
      iconRight: String,
      iconRemove: String,
      iconSelected: String,
      label: [String, Number],
      color: String,
      textColor: String,
      modelValue: { type: Boolean, default: !0 },
      selected: { type: Boolean, default: null },
      square: Boolean,
      outline: Boolean,
      clickable: Boolean,
      removable: Boolean,
      removeAriaLabel: String,
      tabindex: [String, Number],
      disable: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
    },
    emits: ["update:modelValue", "update:selected", "remove", "click"],
    setup(e, { slots: t, emit: l }) {
      const {
          proxy: { $q: n },
        } = de(),
        a = Ge(e, n),
        u = kl(e, pi),
        o = v(() => e.selected === !0 || e.icon !== void 0),
        r = v(() =>
          e.selected === !0 ? e.iconSelected || n.iconSet.chip.selected : e.icon
        ),
        m = v(() => e.iconRemove || n.iconSet.chip.remove),
        b = v(
          () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
        ),
        s = v(() => {
          const S = (e.outline === !0 && e.color) || e.textColor;
          return (
            "q-chip row inline no-wrap items-center" +
            (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") +
            (S ? ` text-${S} q-chip--colored` : "") +
            (e.disable === !0 ? " disabled" : "") +
            (e.dense === !0 ? " q-chip--dense" : "") +
            (e.outline === !0 ? " q-chip--outline" : "") +
            (e.selected === !0 ? " q-chip--selected" : "") +
            (b.value === !0
              ? " q-chip--clickable cursor-pointer non-selectable q-hoverable"
              : "") +
            (e.square === !0 ? " q-chip--square" : "") +
            (a.value === !0 ? " q-chip--dark q-dark" : "")
          );
        }),
        h = v(() => {
          const S =
              e.disable === !0
                ? { tabindex: -1, "aria-disabled": "true" }
                : { tabindex: e.tabindex || 0 },
            B = {
              ...S,
              role: "button",
              "aria-hidden": "false",
              "aria-label": e.removeAriaLabel || n.lang.label.remove,
            };
          return { chip: S, remove: B };
        });
      function g(S) {
        S.keyCode === 13 && d(S);
      }
      function d(S) {
        e.disable || (l("update:selected", !e.selected), l("click", S));
      }
      function y(S) {
        (S.keyCode === void 0 || S.keyCode === 13) &&
          (pe(S),
          e.disable === !1 && (l("update:modelValue", !1), l("remove")));
      }
      function N() {
        const S = [];
        b.value === !0 && S.push(w("div", { class: "q-focus-helper" })),
          o.value === !0 &&
            S.push(
              w(se, { class: "q-chip__icon q-chip__icon--left", name: r.value })
            );
        const B =
          e.label !== void 0
            ? [w("div", { class: "ellipsis" }, [e.label])]
            : void 0;
        return (
          S.push(
            w(
              "div",
              {
                class:
                  "q-chip__content col row no-wrap items-center q-anchor--skip",
              },
              Za(t.default, B)
            )
          ),
          e.iconRight &&
            S.push(
              w(se, {
                class: "q-chip__icon q-chip__icon--right",
                name: e.iconRight,
              })
            ),
          e.removable === !0 &&
            S.push(
              w(se, {
                class: "q-chip__icon q-chip__icon--remove cursor-pointer",
                name: m.value,
                ...h.value.remove,
                onClick: y,
                onKeyup: y,
              })
            ),
          S
        );
      }
      return () => {
        if (e.modelValue === !1) return;
        const S = { class: s.value, style: u.value };
        return (
          b.value === !0 &&
            Object.assign(S, h.value.chip, { onClick: d, onKeyup: g }),
          Ga(
            "div",
            S,
            N(),
            "ripple",
            e.ripple !== !1 && e.disable !== !0,
            () => [[Kn, e.ripple]]
          )
        );
      };
    },
  }),
  xi = ge({
    name: "QItemLabel",
    props: {
      overline: Boolean,
      caption: Boolean,
      header: Boolean,
      lines: [Number, String],
    },
    setup(e, { slots: t }) {
      const l = v(() => parseInt(e.lines, 10)),
        n = v(
          () =>
            "q-item__label" +
            (e.overline === !0
              ? " q-item__label--overline text-overline"
              : "") +
            (e.caption === !0 ? " q-item__label--caption text-caption" : "") +
            (e.header === !0 ? " q-item__label--header" : "") +
            (l.value === 1 ? " ellipsis" : "")
        ),
        a = v(() =>
          e.lines !== void 0 && l.value > 1
            ? {
                overflow: "hidden",
                display: "-webkit-box",
                "-webkit-box-orient": "vertical",
                "-webkit-line-clamp": l.value,
              }
            : null
        );
      return () => w("div", { style: a.value, class: n.value }, Ae(t.default));
    },
  });
let Qt = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"),
    Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  const t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }),
    document.body.appendChild(e),
    e.appendChild(t),
    (e.scrollLeft = -1e3),
    (Qt = e.scrollLeft >= 0),
    e.remove();
}
const Te = 1e3,
  Si = ["start", "center", "end", "start-force", "center-force", "end-force"],
  ba = Array.prototype.filter,
  ki =
    window.getComputedStyle(document.body).overflowAnchor === void 0
      ? ja
      : function (e, t) {
          e !== null &&
            (e._qOverflowAnimationFrame !== void 0 &&
              cancelAnimationFrame(e._qOverflowAnimationFrame),
            (e._qOverflowAnimationFrame = requestAnimationFrame(() => {
              if (e === null) return;
              e._qOverflowAnimationFrame = void 0;
              const l = e.children || [];
              ba.call(
                l,
                (a) => a.dataset && a.dataset.qVsAnchor !== void 0
              ).forEach((a) => {
                delete a.dataset.qVsAnchor;
              });
              const n = l[t];
              n && n.dataset && (n.dataset.qVsAnchor = "");
            })));
        };
function mt(e, t) {
  return e + t;
}
function fl(e, t, l, n, a, u, o, r) {
  const m =
      e === window ? document.scrollingElement || document.documentElement : e,
    b = a === !0 ? "offsetWidth" : "offsetHeight",
    s = {
      scrollStart: 0,
      scrollViewSize: -o - r,
      scrollMaxSize: 0,
      offsetStart: -o,
      offsetEnd: -r,
    };
  if (
    (a === !0
      ? (e === window
          ? ((s.scrollStart =
              window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0),
            (s.scrollViewSize += document.documentElement.clientWidth))
          : ((s.scrollStart = m.scrollLeft),
            (s.scrollViewSize += m.clientWidth)),
        (s.scrollMaxSize = m.scrollWidth),
        u === !0 &&
          (s.scrollStart =
            (Qt === !0 ? s.scrollMaxSize - s.scrollViewSize : 0) -
            s.scrollStart))
      : (e === window
          ? ((s.scrollStart =
              window.pageYOffset ||
              window.scrollY ||
              document.body.scrollTop ||
              0),
            (s.scrollViewSize += document.documentElement.clientHeight))
          : ((s.scrollStart = m.scrollTop),
            (s.scrollViewSize += m.clientHeight)),
        (s.scrollMaxSize = m.scrollHeight)),
    l !== null)
  )
    for (
      let h = l.previousElementSibling;
      h !== null;
      h = h.previousElementSibling
    )
      h.classList.contains("q-virtual-scroll--skip") === !1 &&
        (s.offsetStart += h[b]);
  if (n !== null)
    for (let h = n.nextElementSibling; h !== null; h = h.nextElementSibling)
      h.classList.contains("q-virtual-scroll--skip") === !1 &&
        (s.offsetEnd += h[b]);
  if (t !== e) {
    const h = m.getBoundingClientRect(),
      g = t.getBoundingClientRect();
    a === !0
      ? ((s.offsetStart += g.left - h.left), (s.offsetEnd -= g.width))
      : ((s.offsetStart += g.top - h.top), (s.offsetEnd -= g.height)),
      e !== window && (s.offsetStart += s.scrollStart),
      (s.offsetEnd += s.scrollMaxSize - s.offsetStart);
  }
  return s;
}
function kn(e, t, l, n) {
  t === "end" &&
    (t = (e === window ? document.body : e)[
      l === !0 ? "scrollWidth" : "scrollHeight"
    ]),
    e === window
      ? l === !0
        ? (n === !0 &&
            (t =
              (Qt === !0
                ? document.body.scrollWidth -
                  document.documentElement.clientWidth
                : 0) - t),
          window.scrollTo(
            t,
            window.pageYOffset || window.scrollY || document.body.scrollTop || 0
          ))
        : window.scrollTo(
            window.pageXOffset ||
              window.scrollX ||
              document.body.scrollLeft ||
              0,
            t
          )
      : l === !0
      ? (n === !0 && (t = (Qt === !0 ? e.scrollWidth - e.offsetWidth : 0) - t),
        (e.scrollLeft = t))
      : (e.scrollTop = t);
}
function xt(e, t, l, n) {
  if (l >= n) return 0;
  const a = t.length,
    u = Math.floor(l / Te),
    o = Math.floor((n - 1) / Te) + 1;
  let r = e.slice(u, o).reduce(mt, 0);
  return (
    l % Te !== 0 && (r -= t.slice(u * Te, l).reduce(mt, 0)),
    n % Te !== 0 && n !== a && (r -= t.slice(n, o * Te).reduce(mt, 0)),
    r
  );
}
const _i = {
    virtualScrollSliceSize: { type: [Number, String], default: null },
    virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 },
    virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 },
    virtualScrollItemSize: { type: [Number, String], default: 24 },
    virtualScrollStickySizeStart: { type: [Number, String], default: 0 },
    virtualScrollStickySizeEnd: { type: [Number, String], default: 0 },
    tableColspan: [Number, String],
  },
  Ci = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ..._i };
function qi({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: l,
  virtualScrollItemSizeComputed: n,
}) {
  const a = de(),
    { props: u, emit: o, proxy: r } = a,
    { $q: m } = r;
  let b,
    s,
    h,
    g = [],
    d;
  const y = R(0),
    N = R(0),
    S = R({}),
    B = R(null),
    V = R(null),
    z = R(null),
    U = R({ from: 0, to: 0 }),
    $ = v(() => (u.tableColspan !== void 0 ? u.tableColspan : 100));
  n === void 0 && (n = v(() => u.virtualScrollItemSize));
  const K = v(() => n.value + ";" + u.virtualScrollHorizontal),
    D = v(
      () =>
        K.value +
        ";" +
        u.virtualScrollSliceRatioBefore +
        ";" +
        u.virtualScrollSliceRatioAfter
    );
  te(D, () => {
    Q();
  }),
    te(K, J);
  function J() {
    j(s, !0);
  }
  function x(E) {
    j(E === void 0 ? s : E);
  }
  function A(E, f) {
    const F = t();
    if (F == null || F.nodeType === 8) return;
    const G = fl(
      F,
      l(),
      B.value,
      V.value,
      u.virtualScrollHorizontal,
      m.lang.rtl,
      u.virtualScrollStickySizeStart,
      u.virtualScrollStickySizeEnd
    );
    h !== G.scrollViewSize && Q(G.scrollViewSize),
      c(
        F,
        G,
        Math.min(e.value - 1, Math.max(0, parseInt(E, 10) || 0)),
        0,
        Si.indexOf(f) > -1 ? f : s > -1 && E > s ? "end" : "start"
      );
  }
  function p() {
    const E = t();
    if (E == null || E.nodeType === 8) return;
    const f = fl(
        E,
        l(),
        B.value,
        V.value,
        u.virtualScrollHorizontal,
        m.lang.rtl,
        u.virtualScrollStickySizeStart,
        u.virtualScrollStickySizeEnd
      ),
      F = e.value - 1,
      G = f.scrollMaxSize - f.offsetStart - f.offsetEnd - N.value;
    if (b === f.scrollStart) return;
    if (f.scrollMaxSize <= 0) {
      c(E, f, 0, 0);
      return;
    }
    h !== f.scrollViewSize && Q(f.scrollViewSize), k(U.value.from);
    const H = Math.floor(
      f.scrollMaxSize -
        Math.max(f.scrollViewSize, f.offsetEnd) -
        Math.min(d[F], f.scrollViewSize / 2)
    );
    if (H > 0 && Math.ceil(f.scrollStart) >= H) {
      c(E, f, F, f.scrollMaxSize - f.offsetEnd - g.reduce(mt, 0));
      return;
    }
    let I = 0,
      Y = f.scrollStart - f.offsetStart,
      ie = Y;
    if (Y <= G && Y + f.scrollViewSize >= y.value)
      (Y -= y.value), (I = U.value.from), (ie = Y);
    else for (let L = 0; Y >= g[L] && I < F; L++) (Y -= g[L]), (I += Te);
    for (; Y > 0 && I < F; )
      (Y -= d[I]), Y > -f.scrollViewSize ? (I++, (ie = Y)) : (ie = d[I] + Y);
    c(E, f, I, ie);
  }
  function c(E, f, F, G, H) {
    const I = typeof H == "string" && H.indexOf("-force") > -1,
      Y = I === !0 ? H.replace("-force", "") : H,
      ie = Y !== void 0 ? Y : "start";
    let L = Math.max(0, F - S.value[ie]),
      ve = L + S.value.total;
    ve > e.value && ((ve = e.value), (L = Math.max(0, ve - S.value.total))),
      (b = f.scrollStart);
    const Ie = L !== U.value.from || ve !== U.value.to;
    if (Ie === !1 && Y === void 0) {
      X(F);
      return;
    }
    const { activeElement: Ne } = document,
      Re = z.value;
    Ie === !0 &&
      Re !== null &&
      Re !== Ne &&
      Re.contains(Ne) === !0 &&
      (Re.addEventListener("focusout", _),
      setTimeout(() => {
        Re !== null && Re.removeEventListener("focusout", _);
      })),
      ki(Re, F - L);
    const At = Y !== void 0 ? d.slice(L, F).reduce(mt, 0) : 0;
    if (Ie === !0) {
      const He = ve >= U.value.from && L <= U.value.to ? U.value.to : ve;
      (U.value = { from: L, to: He }),
        (y.value = xt(g, d, 0, L)),
        (N.value = xt(g, d, ve, e.value)),
        requestAnimationFrame(() => {
          U.value.to !== ve &&
            b === f.scrollStart &&
            ((U.value = { from: U.value.from, to: ve }),
            (N.value = xt(g, d, ve, e.value)));
        });
    }
    requestAnimationFrame(() => {
      if (b !== f.scrollStart) return;
      Ie === !0 && k(L);
      const He = d.slice(L, F).reduce(mt, 0),
        et = He + f.offsetStart + y.value,
        Mt = et + d[F];
      let ht = et + G;
      if (Y !== void 0) {
        const Zt = He - At,
          Se = f.scrollStart + Zt;
        ht =
          I !== !0 && Se < et && Mt < Se + f.scrollViewSize
            ? Se
            : Y === "end"
            ? Mt - f.scrollViewSize
            : et -
              (Y === "start" ? 0 : Math.round((f.scrollViewSize - d[F]) / 2));
      }
      (b = ht), kn(E, ht, u.virtualScrollHorizontal, m.lang.rtl), X(F);
    });
  }
  function k(E) {
    const f = z.value;
    if (f) {
      const F = ba.call(
          f.children,
          (L) =>
            L.classList && L.classList.contains("q-virtual-scroll--skip") === !1
        ),
        G = F.length,
        H =
          u.virtualScrollHorizontal === !0
            ? (L) => L.getBoundingClientRect().width
            : (L) => L.offsetHeight;
      let I = E,
        Y,
        ie;
      for (let L = 0; L < G; ) {
        for (
          Y = H(F[L]), L++;
          L < G &&
          F[L].classList.contains("q-virtual-scroll--with-prev") === !0;

        )
          (Y += H(F[L])), L++;
        (ie = Y - d[I]),
          ie !== 0 && ((d[I] += ie), (g[Math.floor(I / Te)] += ie)),
          I++;
      }
    }
  }
  function _() {
    z.value !== null && z.value !== void 0 && z.value.focus();
  }
  function j(E, f) {
    const F = 1 * n.value;
    (f === !0 || Array.isArray(d) === !1) && (d = []);
    const G = d.length;
    d.length = e.value;
    for (let I = e.value - 1; I >= G; I--) d[I] = F;
    const H = Math.floor((e.value - 1) / Te);
    g = [];
    for (let I = 0; I <= H; I++) {
      let Y = 0;
      const ie = Math.min((I + 1) * Te, e.value);
      for (let L = I * Te; L < ie; L++) Y += d[L];
      g.push(Y);
    }
    (s = -1),
      (b = void 0),
      (y.value = xt(g, d, 0, U.value.from)),
      (N.value = xt(g, d, U.value.to, e.value)),
      E >= 0
        ? (k(U.value.from),
          fe(() => {
            A(E);
          }))
        : ae();
  }
  function Q(E) {
    if (E === void 0 && typeof window != "undefined") {
      const Y = t();
      Y != null &&
        Y.nodeType !== 8 &&
        (E = fl(
          Y,
          l(),
          B.value,
          V.value,
          u.virtualScrollHorizontal,
          m.lang.rtl,
          u.virtualScrollStickySizeStart,
          u.virtualScrollStickySizeEnd
        ).scrollViewSize);
    }
    h = E;
    const f = parseFloat(u.virtualScrollSliceRatioBefore) || 0,
      F = parseFloat(u.virtualScrollSliceRatioAfter) || 0,
      G = 1 + f + F,
      H = E === void 0 || E <= 0 ? 1 : Math.ceil(E / n.value),
      I = Math.max(
        1,
        H,
        Math.ceil(
          (u.virtualScrollSliceSize > 0 ? u.virtualScrollSliceSize : 10) / G
        )
      );
    S.value = {
      total: Math.ceil(I * G),
      start: Math.ceil(I * f),
      center: Math.ceil(I * (0.5 + f)),
      end: Math.ceil(I * (1 + f)),
      view: H,
    };
  }
  function M(E, f) {
    const F = u.virtualScrollHorizontal === !0 ? "width" : "height",
      G = { ["--q-virtual-scroll-item-" + F]: n.value + "px" };
    return [
      E === "tbody"
        ? w(E, { class: "q-virtual-scroll__padding", key: "before", ref: B }, [
            w("tr", [
              w("td", {
                style: { [F]: `${y.value}px`, ...G },
                colspan: $.value,
              }),
            ]),
          ])
        : w(E, {
            class: "q-virtual-scroll__padding",
            key: "before",
            ref: B,
            style: { [F]: `${y.value}px`, ...G },
          }),
      w(
        E,
        {
          class: "q-virtual-scroll__content",
          key: "content",
          ref: z,
          tabindex: -1,
        },
        f.flat()
      ),
      E === "tbody"
        ? w(E, { class: "q-virtual-scroll__padding", key: "after", ref: V }, [
            w("tr", [
              w("td", {
                style: { [F]: `${N.value}px`, ...G },
                colspan: $.value,
              }),
            ]),
          ])
        : w(E, {
            class: "q-virtual-scroll__padding",
            key: "after",
            ref: V,
            style: { [F]: `${N.value}px`, ...G },
          }),
    ];
  }
  function X(E) {
    s !== E &&
      (u.onVirtualScroll !== void 0 &&
        o("virtualScroll", {
          index: E,
          from: U.value.from,
          to: U.value.to - 1,
          direction: E < s ? "decrease" : "increase",
          ref: r,
        }),
      (s = E));
  }
  Q();
  const ae = $n(p, m.platform.is.ios === !0 ? 120 : 35);
  Wa(() => {
    Q();
  });
  let C = !1;
  return (
    Yt(() => {
      C = !0;
    }),
    Tn(() => {
      if (C !== !0) return;
      const E = t();
      b !== void 0 && E !== void 0 && E !== null && E.nodeType !== 8
        ? kn(E, b, u.virtualScrollHorizontal, m.lang.rtl)
        : A(s);
    }),
    _e(() => {
      ae.cancel();
    }),
    Object.assign(r, { scrollTo: A, reset: J, refresh: x }),
    {
      virtualScrollSliceRange: U,
      virtualScrollSliceSizeComputed: S,
      setVirtualScrollSize: Q,
      onVirtualScrollEvt: ae,
      localResetVirtualScroll: j,
      padVirtualScroll: M,
      scrollTo: A,
      reset: J,
      refresh: x,
    }
  );
}
function Qu(e, t, l) {
  return l <= t ? t : Math.min(l, Math.max(t, e));
}
function _n(e, t, l) {
  if (l <= t) return t;
  const n = l - t + 1;
  let a = t + ((e - t) % n);
  return a < t && (a = n + a), a === 0 ? 0 : a;
}
const Cn = (e) => ["add", "add-unique", "toggle"].includes(e),
  Vi = ".*+?^${}()|[]\\",
  Ai = Object.keys(Xt);
var Mi = ge({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...Ci,
    ...va,
    ...Xt,
    modelValue: { required: !0 },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: { type: Array, default: () => [] },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: { type: Boolean, default: null },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: { type: String, validator: Cn },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: { type: [Number, String], default: 500 },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: { type: [String, Number], default: 0 },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default",
    },
    virtualScrollItemSize: { type: [Number, String], default: void 0 },
    onNewValue: Function,
    onFilter: Function,
  },
  emits: [
    ..._l,
    "add",
    "remove",
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort",
  ],
  setup(e, { slots: t, emit: l }) {
    const { proxy: n } = de(),
      { $q: a } = n,
      u = R(!1),
      o = R(!1),
      r = R(-1),
      m = R(""),
      b = R(!1),
      s = R(!1);
    let h = null,
      g,
      d,
      y,
      N = null,
      S,
      B,
      V,
      z;
    const U = R(null),
      $ = R(null),
      K = R(null),
      D = R(null),
      J = R(null),
      x = ma(e),
      A = ga(Ol),
      p = v(() => (Array.isArray(e.options) ? e.options.length : 0)),
      c = v(() =>
        e.virtualScrollItemSize === void 0
          ? e.optionsDense === !0
            ? 24
            : 48
          : e.virtualScrollItemSize
      ),
      {
        virtualScrollSliceRange: k,
        virtualScrollSliceSizeComputed: _,
        localResetVirtualScroll: j,
        padVirtualScroll: Q,
        onVirtualScrollEvt: M,
        scrollTo: X,
        setVirtualScrollSize: ae,
      } = qi({
        virtualScrollLength: p,
        getVirtualScrollTarget: _a,
        getVirtualScrollEl: Ll,
        virtualScrollItemSizeComputed: c,
      }),
      C = Cl(),
      E = v(() => {
        const i = e.mapOptions === !0 && e.multiple !== !0,
          P =
            e.modelValue !== void 0 && (e.modelValue !== null || i === !0)
              ? e.multiple === !0 && Array.isArray(e.modelValue)
                ? e.modelValue
                : [e.modelValue]
              : [];
        if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
          const O = e.mapOptions === !0 && g !== void 0 ? g : [],
            Z = P.map((ne) => ka(ne, O));
          return e.modelValue === null && i === !0
            ? Z.filter((ne) => ne !== null)
            : Z;
        }
        return P;
      }),
      f = v(() => {
        const i = {};
        return (
          Ai.forEach((P) => {
            const O = e[P];
            O !== void 0 && (i[P] = O);
          }),
          i
        );
      }),
      F = v(() => (e.optionsDark === null ? C.isDark.value : e.optionsDark)),
      G = v(() => qt(E.value)),
      H = v(() => {
        let i = "q-field__input q-placeholder col";
        return e.hideSelected === !0 || E.value.length === 0
          ? [i, e.inputClass]
          : ((i += " q-field__input--padding"),
            e.inputClass === void 0 ? i : [i, e.inputClass]);
      }),
      I = v(
        () =>
          (e.virtualScrollHorizontal === !0
            ? "q-virtual-scroll--horizontal"
            : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
      ),
      Y = v(() => p.value === 0),
      ie = v(() => E.value.map((i) => Ce.value(i)).join(", ")),
      L = v(() => (e.displayValue !== void 0 ? e.displayValue : ie.value)),
      ve = v(() =>
        e.optionsHtml === !0 ? () => !0 : (i) => i != null && i.html === !0
      ),
      Ie = v(
        () =>
          e.displayValueHtml === !0 ||
          (e.displayValue === void 0 &&
            (e.optionsHtml === !0 || E.value.some(ve.value)))
      ),
      Ne = v(() => (C.focused.value === !0 ? e.tabindex : -1)),
      Re = v(() => {
        const i = {
          tabindex: e.tabindex,
          role: "combobox",
          "aria-label": e.label,
          "aria-readonly": e.readonly === !0 ? "true" : "false",
          "aria-autocomplete": e.useInput === !0 ? "list" : "none",
          "aria-expanded": u.value === !0 ? "true" : "false",
          "aria-controls": `${C.targetUid.value}_lb`,
        };
        return (
          r.value >= 0 &&
            (i["aria-activedescendant"] = `${C.targetUid.value}_${r.value}`),
          i
        );
      }),
      At = v(() => ({
        id: `${C.targetUid.value}_lb`,
        role: "listbox",
        "aria-multiselectable": e.multiple === !0 ? "true" : "false",
      })),
      He = v(() =>
        E.value.map((i, P) => ({
          index: P,
          opt: i,
          html: ve.value(i),
          selected: !0,
          removeAtIndex: Sa,
          toggleOption: De,
          tabindex: Ne.value,
        }))
      ),
      et = v(() => {
        if (p.value === 0) return [];
        const { from: i, to: P } = k.value;
        return e.options.slice(i, P).map((O, Z) => {
          const ne = tt.value(O) === !0,
            le = i + Z,
            ue = {
              clickable: !0,
              active: !1,
              activeClass: Zt.value,
              manualFocus: !0,
              focused: !1,
              disable: ne,
              tabindex: -1,
              dense: e.optionsDense,
              dark: F.value,
              role: "option",
              id: `${C.targetUid.value}_${le}`,
              onClick: () => {
                De(O);
              },
            };
          return (
            ne !== !0 &&
              (tl(O) === !0 && (ue.active = !0),
              r.value === le && (ue.focused = !0),
              (ue["aria-selected"] = ue.active === !0 ? "true" : "false"),
              a.platform.is.desktop === !0 &&
                (ue.onMousemove = () => {
                  u.value === !0 && lt(le);
                })),
            {
              index: le,
              opt: O,
              html: ve.value(O),
              label: Ce.value(O),
              selected: ue.active,
              focused: ue.focused,
              toggleOption: De,
              setOptionIndex: lt,
              itemProps: ue,
            }
          );
        });
      }),
      Mt = v(() =>
        e.dropdownIcon !== void 0 ? e.dropdownIcon : a.iconSet.arrow.dropdown
      ),
      ht = v(
        () =>
          e.optionsCover === !1 &&
          e.outlined !== !0 &&
          e.standout !== !0 &&
          e.borderless !== !0 &&
          e.rounded !== !0
      ),
      Zt = v(() =>
        e.optionsSelectedClass !== void 0
          ? e.optionsSelectedClass
          : e.color !== void 0
          ? `text-${e.color}`
          : ""
      ),
      Se = v(() => el(e.optionValue, "value")),
      Ce = v(() => el(e.optionLabel, "label")),
      tt = v(() => el(e.optionDisable, "disable")),
      Et = v(() => E.value.map((i) => Se.value(i))),
      xa = v(() => {
        const i = {
          onInput: Ol,
          onChange: A,
          onKeydown: Tl,
          onKeyup: $l,
          onKeypress: Bl,
          onFocus: Ml,
          onClick(P) {
            d === !0 && Oe(P);
          },
        };
        return (
          (i.onCompositionstart =
            i.onCompositionupdate =
            i.onCompositionend =
              A),
          i
        );
      });
    te(
      E,
      (i) => {
        (g = i),
          e.useInput === !0 &&
            e.fillInput === !0 &&
            e.multiple !== !0 &&
            C.innerLoading.value !== !0 &&
            ((o.value !== !0 && u.value !== !0) || G.value !== !0) &&
            (y !== !0 && it(), (o.value === !0 || u.value === !0) && nt(""));
      },
      { immediate: !0 }
    ),
      te(() => e.fillInput, it),
      te(u, ll),
      te(p, Oa);
    function Vl(i) {
      return e.emitValue === !0 ? Se.value(i) : i;
    }
    function Gt(i) {
      if (i > -1 && i < E.value.length)
        if (e.multiple === !0) {
          const P = e.modelValue.slice();
          l("remove", { index: i, value: P.splice(i, 1)[0] }),
            l("update:modelValue", P);
        } else l("update:modelValue", null);
    }
    function Sa(i) {
      Gt(i), C.focus();
    }
    function Al(i, P) {
      const O = Vl(i);
      if (e.multiple !== !0) {
        e.fillInput === !0 && bt(Ce.value(i), !0, !0),
          l("update:modelValue", O);
        return;
      }
      if (E.value.length === 0) {
        l("add", { index: 0, value: O }),
          l("update:modelValue", e.multiple === !0 ? [O] : O);
        return;
      }
      if (
        (P === !0 && tl(i) === !0) ||
        (e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
      )
        return;
      const Z = e.modelValue.slice();
      l("add", { index: Z.length, value: O }),
        Z.push(O),
        l("update:modelValue", Z);
    }
    function De(i, P) {
      if (C.editable.value !== !0 || i === void 0 || tt.value(i) === !0) return;
      const O = Se.value(i);
      if (e.multiple !== !0) {
        P !== !0 && (bt(e.fillInput === !0 ? Ce.value(i) : "", !0, !0), je()),
          $.value !== null && $.value.focus(),
          (E.value.length === 0 || yt(Se.value(E.value[0]), O) !== !0) &&
            l("update:modelValue", e.emitValue === !0 ? O : i);
        return;
      }
      if (
        ((d !== !0 || b.value === !0) && C.focus(), Ml(), E.value.length === 0)
      ) {
        const le = e.emitValue === !0 ? O : i;
        l("add", { index: 0, value: le }),
          l("update:modelValue", e.multiple === !0 ? [le] : le);
        return;
      }
      const Z = e.modelValue.slice(),
        ne = Et.value.findIndex((le) => yt(le, O));
      if (ne > -1) l("remove", { index: ne, value: Z.splice(ne, 1)[0] });
      else {
        if (e.maxValues !== void 0 && Z.length >= e.maxValues) return;
        const le = e.emitValue === !0 ? O : i;
        l("add", { index: Z.length, value: le }), Z.push(le);
      }
      l("update:modelValue", Z);
    }
    function lt(i) {
      if (a.platform.is.desktop !== !0) return;
      const P = i > -1 && i < p.value ? i : -1;
      r.value !== P && (r.value = P);
    }
    function $t(i = 1, P) {
      if (u.value === !0) {
        let O = r.value;
        do O = _n(O + i, -1, p.value - 1);
        while (O !== -1 && O !== r.value && tt.value(e.options[O]) === !0);
        r.value !== O &&
          (lt(O),
          X(O),
          P !== !0 &&
            e.useInput === !0 &&
            e.fillInput === !0 &&
            Bt(O >= 0 ? Ce.value(e.options[O]) : S));
      }
    }
    function ka(i, P) {
      const O = (Z) => yt(Se.value(Z), i);
      return e.options.find(O) || P.find(O) || i;
    }
    function el(i, P) {
      const O = i !== void 0 ? i : P;
      return typeof O == "function"
        ? O
        : (Z) => (Z !== null && typeof Z == "object" && O in Z ? Z[O] : Z);
    }
    function tl(i) {
      const P = Se.value(i);
      return Et.value.find((O) => yt(O, P)) !== void 0;
    }
    function Ml(i) {
      e.useInput === !0 &&
        $.value !== null &&
        (i === void 0 ||
          ($.value === i.target && i.target.value === ie.value)) &&
        $.value.select();
    }
    function El(i) {
      Pe(i, 27) === !0 && u.value === !0 && (Oe(i), je(), it()), l("keyup", i);
    }
    function $l(i) {
      const { value: P } = i.target;
      if (i.keyCode !== void 0) {
        El(i);
        return;
      }
      if (
        ((i.target.value = ""),
        h !== null && (clearTimeout(h), (h = null)),
        it(),
        typeof P == "string" && P.length !== 0)
      ) {
        const O = P.toLocaleLowerCase(),
          Z = (le) => {
            const ue = e.options.find(
              (we) => le.value(we).toLocaleLowerCase() === O
            );
            return ue === void 0
              ? !1
              : (E.value.indexOf(ue) === -1 ? De(ue) : je(), !0);
          },
          ne = (le) => {
            Z(Se) !== !0 &&
              (Z(Ce) === !0 || le === !0 || nt(P, !0, () => ne(!0)));
          };
        ne();
      } else C.clearValue(i);
    }
    function Bl(i) {
      l("keypress", i);
    }
    function Tl(i) {
      if ((l("keydown", i), Ln(i) === !0)) return;
      const P =
          m.value.length !== 0 &&
          (e.newValueMode !== void 0 || e.onNewValue !== void 0),
        O =
          i.shiftKey !== !0 && e.multiple !== !0 && (r.value > -1 || P === !0);
      if (i.keyCode === 27) {
        Le(i);
        return;
      }
      if (i.keyCode === 9 && O === !1) {
        at();
        return;
      }
      if (
        i.target === void 0 ||
        i.target.id !== C.targetUid.value ||
        C.editable.value !== !0
      )
        return;
      if (i.keyCode === 40 && C.innerLoading.value !== !0 && u.value === !1) {
        pe(i), ot();
        return;
      }
      if (i.keyCode === 8 && e.hideSelected !== !0 && m.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0
          ? Gt(e.modelValue.length - 1)
          : e.multiple !== !0 &&
            e.modelValue !== null &&
            l("update:modelValue", null);
        return;
      }
      (i.keyCode === 35 || i.keyCode === 36) &&
        (typeof m.value != "string" || m.value.length === 0) &&
        (pe(i), (r.value = -1), $t(i.keyCode === 36 ? 1 : -1, e.multiple)),
        (i.keyCode === 33 || i.keyCode === 34) &&
          _.value !== void 0 &&
          (pe(i),
          (r.value = Math.max(
            -1,
            Math.min(
              p.value,
              r.value + (i.keyCode === 33 ? -1 : 1) * _.value.view
            )
          )),
          $t(i.keyCode === 33 ? 1 : -1, e.multiple)),
        (i.keyCode === 38 || i.keyCode === 40) &&
          (pe(i), $t(i.keyCode === 38 ? -1 : 1, e.multiple));
      const Z = p.value;
      if (
        ((V === void 0 || z < Date.now()) && (V = ""),
        Z > 0 &&
          e.useInput !== !0 &&
          i.key !== void 0 &&
          i.key.length === 1 &&
          i.altKey === !1 &&
          i.ctrlKey === !1 &&
          i.metaKey === !1 &&
          (i.keyCode !== 32 || V.length !== 0))
      ) {
        u.value !== !0 && ot(i);
        const ne = i.key.toLocaleLowerCase(),
          le = V.length === 1 && V[0] === ne;
        (z = Date.now() + 1500), le === !1 && (pe(i), (V += ne));
        const ue = new RegExp(
          "^" +
            V.split("")
              .map((nl) => (Vi.indexOf(nl) > -1 ? "\\" + nl : nl))
              .join(".*"),
          "i"
        );
        let we = r.value;
        if (le === !0 || we < 0 || ue.test(Ce.value(e.options[we])) !== !0)
          do we = _n(we + 1, -1, Z - 1);
          while (
            we !== r.value &&
            (tt.value(e.options[we]) === !0 ||
              ue.test(Ce.value(e.options[we])) !== !0)
          );
        r.value !== we &&
          fe(() => {
            lt(we),
              X(we),
              we >= 0 &&
                e.useInput === !0 &&
                e.fillInput === !0 &&
                Bt(Ce.value(e.options[we]));
          });
        return;
      }
      if (
        !(
          i.keyCode !== 13 &&
          (i.keyCode !== 32 || e.useInput === !0 || V !== "") &&
          (i.keyCode !== 9 || O === !1)
        )
      ) {
        if ((i.keyCode !== 9 && pe(i), r.value > -1 && r.value < Z)) {
          De(e.options[r.value]);
          return;
        }
        if (P === !0) {
          const ne = (le, ue) => {
            if (ue) {
              if (Cn(ue) !== !0) return;
            } else ue = e.newValueMode;
            if ((bt("", e.multiple !== !0, !0), le == null)) return;
            (ue === "toggle" ? De : Al)(le, ue === "add-unique"),
              e.multiple !== !0 && ($.value !== null && $.value.focus(), je());
          };
          if (
            (e.onNewValue !== void 0 ? l("newValue", m.value, ne) : ne(m.value),
            e.multiple !== !0)
          )
            return;
        }
        u.value === !0 ? at() : C.innerLoading.value !== !0 && ot();
      }
    }
    function Ll() {
      return d === !0
        ? J.value
        : K.value !== null && K.value.contentEl !== null
        ? K.value.contentEl
        : void 0;
    }
    function _a() {
      return Ll();
    }
    function Ca() {
      return e.hideSelected === !0
        ? []
        : t["selected-item"] !== void 0
        ? He.value.map((i) => t["selected-item"](i)).slice()
        : t.selected !== void 0
        ? [].concat(t.selected())
        : e.useChips === !0
        ? He.value.map((i, P) =>
            w(
              wi,
              {
                key: "option-" + P,
                removable: C.editable.value === !0 && tt.value(i.opt) !== !0,
                dense: !0,
                textColor: e.color,
                tabindex: Ne.value,
                onRemove() {
                  i.removeAtIndex(P);
                },
              },
              () =>
                w("span", {
                  class: "ellipsis",
                  [i.html === !0 ? "innerHTML" : "textContent"]: Ce.value(
                    i.opt
                  ),
                })
            )
          )
        : [
            w("span", {
              [Ie.value === !0 ? "innerHTML" : "textContent"]: L.value,
            }),
          ];
    }
    function Rl() {
      if (Y.value === !0)
        return t["no-option"] !== void 0
          ? t["no-option"]({ inputValue: m.value })
          : void 0;
      const i =
        t.option !== void 0
          ? t.option
          : (O) =>
              w(qe, { key: O.index, ...O.itemProps }, () =>
                w(ke, () =>
                  w(xi, () =>
                    w("span", {
                      [O.html === !0 ? "innerHTML" : "textContent"]: O.label,
                    })
                  )
                )
              );
      let P = Q("div", et.value.map(i));
      return (
        t["before-options"] !== void 0 && (P = t["before-options"]().concat(P)),
        Ke(t["after-options"], P)
      );
    }
    function qa(i, P) {
      const O =
          P === !0 ? { ...Re.value, ...C.splitAttrs.attributes.value } : void 0,
        Z = {
          ref: P === !0 ? $ : void 0,
          key: "i_t",
          class: H.value,
          style: e.inputStyle,
          value: m.value !== void 0 ? m.value : "",
          type: "search",
          ...O,
          id: P === !0 ? C.targetUid.value : void 0,
          maxlength: e.maxlength,
          autocomplete: e.autocomplete,
          "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
          disabled: e.disable === !0,
          readonly: e.readonly === !0,
          ...xa.value,
        };
      return (
        i !== !0 &&
          d === !0 &&
          (Array.isArray(Z.class) === !0
            ? (Z.class = [...Z.class, "no-pointer-events"])
            : (Z.class += " no-pointer-events")),
        w("input", Z)
      );
    }
    function Ol(i) {
      h !== null && (clearTimeout(h), (h = null)),
        !(i && i.target && i.target.qComposing === !0) &&
          (Bt(i.target.value || ""),
          (y = !0),
          (S = m.value),
          C.focused.value !== !0 && (d !== !0 || b.value === !0) && C.focus(),
          e.onFilter !== void 0 &&
            (h = setTimeout(() => {
              (h = null), nt(m.value);
            }, e.inputDebounce)));
    }
    function Bt(i) {
      m.value !== i && ((m.value = i), l("inputValue", i));
    }
    function bt(i, P, O) {
      (y = O !== !0),
        e.useInput === !0 &&
          (Bt(i), (P === !0 || O !== !0) && (S = i), P !== !0 && nt(i));
    }
    function nt(i, P, O) {
      if (e.onFilter === void 0 || (P !== !0 && C.focused.value !== !0)) return;
      C.innerLoading.value === !0
        ? l("filterAbort")
        : ((C.innerLoading.value = !0), (s.value = !0)),
        i !== "" &&
          e.multiple !== !0 &&
          E.value.length !== 0 &&
          y !== !0 &&
          i === Ce.value(E.value[0]) &&
          (i = "");
      const Z = setTimeout(() => {
        u.value === !0 && (u.value = !1);
      }, 10);
      N !== null && clearTimeout(N),
        (N = Z),
        l(
          "filter",
          i,
          (ne, le) => {
            (P === !0 || C.focused.value === !0) &&
              N === Z &&
              (clearTimeout(N),
              typeof ne == "function" && ne(),
              (s.value = !1),
              fe(() => {
                (C.innerLoading.value = !1),
                  C.editable.value === !0 &&
                    (P === !0
                      ? u.value === !0 && je()
                      : u.value === !0
                      ? ll(!0)
                      : (u.value = !0)),
                  typeof le == "function" &&
                    fe(() => {
                      le(n);
                    }),
                  typeof O == "function" &&
                    fe(() => {
                      O(n);
                    });
              }));
          },
          () => {
            C.focused.value === !0 &&
              N === Z &&
              (clearTimeout(N), (C.innerLoading.value = !1), (s.value = !1)),
              u.value === !0 && (u.value = !1);
          }
        );
    }
    function Va() {
      return w(
        ct,
        {
          ref: K,
          class: I.value,
          style: e.popupContentStyle,
          modelValue: u.value,
          fit: e.menuShrink !== !0,
          cover: e.optionsCover === !0 && Y.value !== !0 && e.useInput !== !0,
          anchor: e.menuAnchor,
          self: e.menuSelf,
          offset: e.menuOffset,
          dark: F.value,
          noParentEvent: !0,
          noRefocus: !0,
          noFocus: !0,
          square: ht.value,
          transitionShow: e.transitionShow,
          transitionHide: e.transitionHide,
          transitionDuration: e.transitionDuration,
          separateClosePopup: !0,
          ...At.value,
          onScrollPassive: M,
          onBeforeShow: Il,
          onBeforeHide: Aa,
          onShow: Ma,
        },
        Rl
      );
    }
    function Aa(i) {
      Fl(i), at();
    }
    function Ma() {
      ae();
    }
    function Ea(i) {
      Oe(i),
        $.value !== null && $.value.focus(),
        (b.value = !0),
        window.scrollTo(
          window.pageXOffset || window.scrollX || document.body.scrollLeft || 0,
          0
        );
    }
    function $a(i) {
      Oe(i),
        fe(() => {
          b.value = !1;
        });
    }
    function Ba() {
      const i = [
        w(
          yi,
          {
            class: `col-auto ${C.fieldClass.value}`,
            ...f.value,
            for: C.targetUid.value,
            dark: F.value,
            square: !0,
            loading: s.value,
            itemAligned: !1,
            filled: !0,
            stackLabel: m.value.length !== 0,
            ...C.splitAttrs.listeners.value,
            onFocus: Ea,
            onBlur: $a,
          },
          {
            ...t,
            rawControl: () => C.getControl(!0),
            before: void 0,
            after: void 0,
          }
        ),
      ];
      return (
        u.value === !0 &&
          i.push(
            w(
              "div",
              {
                ref: J,
                class: I.value + " scroll",
                style: e.popupContentStyle,
                ...At.value,
                onClick: Le,
                onScrollPassive: M,
              },
              Rl()
            )
          ),
        w(
          jt,
          {
            ref: D,
            modelValue: o.value,
            position: e.useInput === !0 ? "top" : void 0,
            transitionShow: B,
            transitionHide: e.transitionHide,
            transitionDuration: e.transitionDuration,
            onBeforeShow: Il,
            onBeforeHide: Ta,
            onHide: La,
            onShow: Ra,
          },
          () =>
            w(
              "div",
              {
                class:
                  "q-select__dialog" +
                  (F.value === !0 ? " q-select__dialog--dark q-dark" : "") +
                  (b.value === !0 ? " q-select__dialog--focused" : ""),
              },
              i
            )
        )
      );
    }
    function Ta(i) {
      Fl(i),
        D.value !== null &&
          D.value.__updateRefocusTarget(
            C.rootRef.value.querySelector(
              ".q-field__native > [tabindex]:last-child"
            )
          ),
        (C.focused.value = !1);
    }
    function La(i) {
      je(), C.focused.value === !1 && l("blur", i), it();
    }
    function Ra() {
      const i = document.activeElement;
      (i === null || i.id !== C.targetUid.value) &&
        $.value !== null &&
        $.value !== i &&
        $.value.focus(),
        ae();
    }
    function at() {
      o.value !== !0 &&
        ((r.value = -1),
        u.value === !0 && (u.value = !1),
        C.focused.value === !1 &&
          (N !== null && (clearTimeout(N), (N = null)),
          C.innerLoading.value === !0 &&
            (l("filterAbort"), (C.innerLoading.value = !1), (s.value = !1))));
    }
    function ot(i) {
      C.editable.value === !0 &&
        (d === !0
          ? (C.onControlFocusin(i),
            (o.value = !0),
            fe(() => {
              C.focus();
            }))
          : C.focus(),
        e.onFilter !== void 0
          ? nt(m.value)
          : (Y.value !== !0 || t["no-option"] !== void 0) && (u.value = !0));
    }
    function je() {
      (o.value = !1), at();
    }
    function it() {
      e.useInput === !0 &&
        bt(
          (e.multiple !== !0 &&
            e.fillInput === !0 &&
            E.value.length !== 0 &&
            Ce.value(E.value[0])) ||
            "",
          !0,
          !0
        );
    }
    function ll(i) {
      let P = -1;
      if (i === !0) {
        if (E.value.length !== 0) {
          const O = Se.value(E.value[0]);
          P = e.options.findIndex((Z) => yt(Se.value(Z), O));
        }
        j(P);
      }
      lt(P);
    }
    function Oa(i, P) {
      u.value === !0 &&
        C.innerLoading.value === !1 &&
        (j(-1, !0),
        fe(() => {
          u.value === !0 &&
            C.innerLoading.value === !1 &&
            (i > P ? j() : ll(!0));
        }));
    }
    function zl() {
      o.value === !1 && K.value !== null && K.value.updatePosition();
    }
    function Il(i) {
      i !== void 0 && Oe(i),
        l("popupShow", i),
        (C.hasPopupOpen = !0),
        C.onControlFocusin(i);
    }
    function Fl(i) {
      i !== void 0 && Oe(i),
        l("popupHide", i),
        (C.hasPopupOpen = !1),
        C.onControlFocusout(i);
    }
    function Pl() {
      (d =
        a.platform.is.mobile !== !0 && e.behavior !== "dialog"
          ? !1
          : e.behavior !== "menu" &&
            (e.useInput === !0
              ? t["no-option"] !== void 0 ||
                e.onFilter !== void 0 ||
                Y.value === !1
              : !0)),
        (B =
          a.platform.is.ios === !0 && d === !0 && e.useInput === !0
            ? "fade"
            : e.transitionShow);
    }
    return (
      Bn(Pl),
      Ka(zl),
      Pl(),
      _e(() => {
        h !== null && clearTimeout(h);
      }),
      Object.assign(n, {
        showPopup: ot,
        hidePopup: je,
        removeAtIndex: Gt,
        add: Al,
        toggleOption: De,
        getOptionIndex: () => r.value,
        setOptionIndex: lt,
        moveOptionSelection: $t,
        filter: nt,
        updateMenuPosition: zl,
        updateInputValue: bt,
        isOptionSelected: tl,
        getEmittingOptionValue: Vl,
        isOptionDisabled: (...i) => tt.value.apply(null, i) === !0,
        getOptionValue: (...i) => Se.value.apply(null, i),
        getOptionLabel: (...i) => Ce.value.apply(null, i),
      }),
      Object.assign(C, {
        innerValue: E,
        fieldClass: v(
          () =>
            `q-select q-field--auto-height q-select--with${
              e.useInput !== !0 ? "out" : ""
            }-input q-select--with${
              e.useChips !== !0 ? "out" : ""
            }-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
        ),
        inputRef: U,
        targetRef: $,
        hasValue: G,
        showPopup: ot,
        floatingLabel: v(
          () =>
            (e.hideSelected !== !0 && G.value === !0) ||
            typeof m.value == "number" ||
            m.value.length !== 0 ||
            qt(e.displayValue)
        ),
        getControlChild: () => {
          if (
            C.editable.value !== !1 &&
            (o.value === !0 || Y.value !== !0 || t["no-option"] !== void 0)
          )
            return d === !0 ? Ba() : Va();
          C.hasPopupOpen === !0 && (C.hasPopupOpen = !1);
        },
        controlEvents: {
          onFocusin(i) {
            C.onControlFocusin(i);
          },
          onFocusout(i) {
            C.onControlFocusout(i, () => {
              it(), at();
            });
          },
          onClick(i) {
            if ((Le(i), d !== !0 && u.value === !0)) {
              at(), $.value !== null && $.value.focus();
              return;
            }
            ot(i);
          },
        },
        getControl: (i) => {
          const P = Ca(),
            O = i === !0 || o.value !== !0 || d !== !0;
          if (e.useInput === !0) P.push(qa(i, O));
          else if (C.editable.value === !0) {
            const ne = O === !0 ? Re.value : void 0;
            P.push(
              w("input", {
                ref: O === !0 ? $ : void 0,
                key: "d_t",
                class: "q-select__focus-target",
                id: O === !0 ? C.targetUid.value : void 0,
                value: L.value,
                readonly: !0,
                "data-autofocus": i === !0 || e.autofocus === !0 || void 0,
                ...ne,
                onKeydown: Tl,
                onKeyup: El,
                onKeypress: Bl,
              })
            ),
              O === !0 &&
                typeof e.autocomplete == "string" &&
                e.autocomplete.length !== 0 &&
                P.push(
                  w("input", {
                    class: "q-select__autocomplete-input",
                    autocomplete: e.autocomplete,
                    tabindex: -1,
                    onKeyup: $l,
                  })
                );
          }
          if (x.value !== void 0 && e.disable !== !0 && Et.value.length !== 0) {
            const ne = Et.value.map((le) =>
              w("option", { value: le, selected: !0 })
            );
            P.push(
              w(
                "select",
                { class: "hidden", name: x.value, multiple: e.multiple },
                ne
              )
            );
          }
          const Z =
            e.useInput === !0 || O !== !0
              ? void 0
              : C.splitAttrs.attributes.value;
          return w(
            "div",
            {
              class: "q-field__native row items-center",
              ...Z,
              ...C.splitAttrs.listeners.value,
            },
            P
          );
        },
        getInnerAppend: () =>
          e.loading !== !0 && s.value !== !0 && e.hideDropdownIcon !== !0
            ? [
                w(se, {
                  class:
                    "q-select__dropdown-icon" +
                    (u.value === !0 ? " rotate-180" : ""),
                  name: Mt.value,
                }),
              ]
            : null,
      }),
      ql(C)
    );
  },
});
const ya = Rn("customerStore", {
    state: () => ({
      customer: {
        firstName: sessionStorage.getItem("customer")
          ? JSON.parse(sessionStorage.getItem("customer")).firstName
          : null,
        lastName: sessionStorage.getItem("customer")
          ? JSON.parse(sessionStorage.getItem("customer")).lastName
          : null,
        email: sessionStorage.getItem("customer")
          ? JSON.parse(sessionStorage.getItem("customer")).email
          : null,
        addresses: sessionStorage.getItem("customer")
          ? JSON.parse(sessionStorage.getItem("customer")).addresses
          : [],
        memberSince: sessionStorage.getItem("customer")
          ? JSON.parse(sessionStorage.getItem("customer")).memberSince
          : null,
      },
      selectedAddress: sessionStorage.getItem("selectedAddress")
        ? JSON.parse(sessionStorage.getItem("selectedAddress"))
        : null,
    }),
    getters: {
      getFullName: (e) => `${e.customer.firstName} ${e.customer.lastName}`,
      getAddresses: (e) => e.customer.addresses,
      getSelectedAddress: (e) => e.selectedAddress,
    },
    actions: {
      initCustomer(e) {
        (this.customer.firstName = e.first_name),
          (this.customer.lastName = e.last_name),
          (this.customer.email = e.email),
          (this.customer.addresses = e.addresses.addresses),
          (this.selectedAddress = e.addresses.main_address);
        const l = `${new Date(e.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}`;
        (this.customer.memberSince = l),
          sessionStorage.setItem("customer", JSON.stringify(this.customer)),
          sessionStorage.setItem(
            "selectedAddress",
            JSON.stringify(this.selectedAddress)
          );
      },
      updateName(e, t) {
        (this.customer.firstName = e),
          (this.customer.lastName = t),
          sessionStorage.setItem("customer", JSON.stringify(this.customer));
      },
      addAddress(e) {
        this.customer.addresses.push(e),
          sessionStorage.setItem("customer", JSON.stringify(this.customer));
      },
      deleteAddress(e) {
        const t = this.customer.addresses.findIndex((l) => l.id === e);
        this.customer.addresses.splice(t, 1),
          sessionStorage.setItem("customer", JSON.stringify(this.customer));
      },
      changeSelectedAddress(e) {
        (this.selectedAddress = e),
          sessionStorage.setItem(
            "selectedAddress",
            JSON.stringify(this.selectedAddress)
          );
      },
      updateAddress(e) {
        if (this.selectedAddress.id == e.id)
          (this.selectedAddress = e),
            sessionStorage.setItem(
              "selectedAddress",
              JSON.stringify(this.selectedAddress)
            );
        else {
          const t = this.customer.addresses.findIndex((l) => l.id === e.id);
          (t !== void 0 || t !== null) &&
            ((this.customer.addresses[t] = e),
            sessionStorage.setItem("customer", JSON.stringify(this.customer)));
        }
      },
    },
  }),
  Ei = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ],
  $i = W("div", { class: "q-mb-sm" }, "First Name", -1),
  Bi = W("div", { class: "q-mb-sm" }, "Last Name", -1),
  Ti = W("div", { class: "q-mb-sm" }, "Street Address", -1),
  Li = W("div", { class: "q-mb-sm" }, "Apt, suite, etc. (optional)", -1),
  Ri = W("div", { class: "q-mb-sm" }, "City", -1),
  Oi = { class: "row justify-between" },
  zi = { style: { width: "100%", "max-width": "45%" } },
  Ii = W("div", { class: "q-mb-sm" }, "State", -1),
  Fi = { class: "text-dark" },
  Pi = { style: { width: "100%", "max-width": "45%" } },
  Ni = W("div", { class: "q-mb-sm" }, "ZIP Code", -1),
  Hi = {
    __name: "AddressModal",
    emits: ["add-address"],
    setup(e, { emit: t }) {
      const l = On(),
        n = ya(),
        a = R(null),
        u = R(null),
        o = R(null),
        r = R(null),
        m = R(null),
        b = R(null),
        s = R(null),
        h = R(null),
        g = R(null),
        d = Ei,
        y = v(
          () =>
            !(
              o.value &&
              r.value &&
              m.value &&
              s.value &&
              h.value &&
              (g.value === null ? g.value : g.value.length === 5)
            )
        ),
        N = async () => {
          const S = {
            first_name: o.value,
            last_name: r.value,
            street: m.value,
            state: h.value,
            city: s.value,
            zip_code: g.value,
          };
          try {
            const B = await Fe.post(
              `/address/add/${l.user.value.sub.split("|")[1]}`,
              S
            );
            n.addAddress(B.data),
              (u.value = !0),
              (a.value = !1),
              t("add-address", B.data);
          } catch (B) {
            (a.value = !0), (u.value = !1), console.error(B);
          }
          setTimeout(() => {
            u.value = null;
          }, 2e3);
        };
      return (S, B) => (
        ee(),
        Ve(jt, null, {
          default: T(() => [
            q(
              bl,
              { style: { width: "100%", "max-width": "600px" } },
              {
                default: T(() => [
                  q(
                    ye,
                    { class: "ys text-h6 bg-dark text-white" },
                    { default: T(() => [re(" Add a new address ")]), _: 1 }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-pb-none q-mx-md" },
                    {
                      default: T(() => [
                        $i,
                        q(
                          $e,
                          {
                            standout: "bg-grey-3 text-deep-purple-14",
                            "input-class": "text-dark",
                            modelValue: o.value,
                            "onUpdate:modelValue":
                              B[0] || (B[0] = (V) => (o.value = V)),
                            modelModifiers: { trim: !0 },
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-pb-none q-mx-md" },
                    {
                      default: T(() => [
                        Bi,
                        q(
                          $e,
                          {
                            standout: "bg-grey-3 text-deep-purple-14",
                            "input-class": "text-dark",
                            modelValue: r.value,
                            "onUpdate:modelValue":
                              B[1] || (B[1] = (V) => (r.value = V)),
                            modelModifiers: { trim: !0 },
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-pb-none q-mx-md" },
                    {
                      default: T(() => [
                        Ti,
                        q(
                          $e,
                          {
                            standout: "bg-grey-3 text-deep-purple-14",
                            "input-class": "text-dark",
                            modelValue: m.value,
                            "onUpdate:modelValue":
                              B[2] || (B[2] = (V) => (m.value = V)),
                            modelModifiers: { trim: !0 },
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-pb-none q-mx-md" },
                    {
                      default: T(() => [
                        Li,
                        q(
                          $e,
                          {
                            standout: "bg-grey-3 text-deep-purple-14",
                            "input-class": "text-dark",
                            modelValue: b.value,
                            "onUpdate:modelValue":
                              B[3] || (B[3] = (V) => (b.value = V)),
                            modelModifiers: { trim: !0 },
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-pb-none q-mx-md" },
                    {
                      default: T(() => [
                        Ri,
                        q(
                          $e,
                          {
                            standout: "bg-grey-3 text-deep-purple-14",
                            "input-class": "text-dark",
                            modelValue: s.value,
                            "onUpdate:modelValue":
                              B[4] || (B[4] = (V) => (s.value = V)),
                            modelModifiers: { trim: !0 },
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    ye,
                    { class: "oswald text-body1 q-mx-md" },
                    {
                      default: T(() => [
                        W("div", Oi, [
                          W("div", zi, [
                            Ii,
                            q(
                              Mi,
                              {
                                standout: "bg-grey-3 text-deep-purple-14",
                                modelValue: h.value,
                                "onUpdate:modelValue":
                                  B[5] || (B[5] = (V) => (h.value = V)),
                                modelModifiers: { trim: !0 },
                                options: oe(d),
                                label: "State",
                                "emit-value": "",
                                "map-options": "",
                                "options-dense": "",
                              },
                              {
                                "selected-item": T((V) => [
                                  W("span", Fi, me(V.opt.label), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue", "options"]
                            ),
                          ]),
                          W("div", Pi, [
                            Ni,
                            q(
                              $e,
                              {
                                standout: "bg-grey-3 text-deep-purple-14",
                                "input-class": "text-dark",
                                modelValue: g.value,
                                "onUpdate:modelValue":
                                  B[6] || (B[6] = (V) => (g.value = V)),
                                modelModifiers: { trim: !0 },
                                mask: "#####",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  q(
                    hl,
                    { class: "q-mr-lg q-pb-md", align: "right" },
                    {
                      default: T(() => [
                        ft(q(xe, { label: "Close", flat: "" }, null, 512), [
                          [Ht],
                        ]),
                        q(
                          xe,
                          {
                            class: Ft(a.value ? "animated shakeX slower" : ""),
                            label: "Confirm",
                            color: "deep-purple-14",
                            disable: y.value,
                            push: "",
                            onClick: B[7] || (B[7] = (V) => N()),
                          },
                          null,
                          8,
                          ["class", "disable"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  a.value
                    ? (ee(),
                      Ve(
                        ye,
                        {
                          key: 0,
                          class:
                            "text-red text-bold text-caption q-mr-lg q-pt-none",
                          align: "right",
                        },
                        {
                          default: T(() => [re(" Something went wrong ")]),
                          _: 1,
                        }
                      ))
                    : Ee("", !0),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        })
      );
    },
  },
  Di = Rn("cart", {
    state: () => ({ items: JSON.parse(sessionStorage.getItem("cart")) || [] }),
    getters: {
      totalQuantity: (e) => e.items.reduce((t, l) => t + l.quantity, 0),
    },
    actions: {
      async update(e, t) {
        try {
          (
            await Fe.get(
              `product/cart/${this.items[e].product_id}?quantity=${t}`
            )
          ).data.can_add === !0 && (this.items[e].quantity = t);
        } catch (l) {
          console.error(l);
        }
        sessionStorage.setItem("cart", JSON.stringify(this.items));
      },
      async addItem(e, t) {
        const l = this.items.find((n) => n.product_id === e);
        if (l)
          try {
            const n = await Fe.get(
              `product/cart/${e}?quantity=${t + l.quantity}`
            );
            n.data.can_add === !0
              ? (l.quantity = l.quantity + t <= 25 ? l.quantity + t : 25)
              : (l.quantity = n.data.quantity);
          } catch (n) {
            console.error(n);
          }
        else this.items.push({ product_id: e, quantity: t });
        sessionStorage.setItem("cart", JSON.stringify(this.items));
      },
      removeItem(e) {
        const t = this.items.find((l) => l.product_id === e);
        this.items.splice(this.items.indexOf(t), 1),
          sessionStorage.setItem("cart", JSON.stringify(this.items));
      },
    },
  }),
  ji = {
    class:
      "animated fadeInDown slower oswald bg-dark text-white fixed full-width",
    style: { "z-index": "1" },
  },
  Wi = { class: "row justify-between items-center q-mx-xl" },
  Ki = { class: "row items-center q-gutter-x-lg" },
  Ui = { key: 0, class: "row items-center no-wrap" },
  Qi = { class: "text-center" },
  Yi = { class: "text-caption" },
  Ji = { class: "text-bold text-subtitle1" },
  Xi = { class: "text-center" },
  Zi = W("div", null, "Add Address", -1),
  Gi = ["onClick"],
  eu = { class: "text-body1" },
  tu = { class: "text-bold" },
  lu = { key: 0, style: { width: "100%", "max-width": "40%" } },
  nu = { key: 1, class: "row justify-end q-gutter-x-lg items-center" },
  au = { class: "row items-center" },
  ou = { class: "on-right" },
  iu = W("span", { class: "text-body1 text-bold" }, "Hello, ", -1),
  uu = { class: "text-body2" },
  ru = W("div", { class: "text-body2 text-weight-medium" }, "Account", -1),
  su = W(
    "span",
    { class: "text-caption text-bold vertical-bottom" },
    "Cart",
    -1
  ),
  du = { key: 2 },
  cu = { class: "row items-center flex flex-center" },
  fu = { class: "on-right" },
  vu = W("span", { class: "text-body1 text-bold" }, "Hello, ", -1),
  mu = { class: "text-body2" },
  gu = W("div", { class: "text-body2 text-weight-medium" }, "Account", -1),
  hu = { class: "text-center" },
  bu = W(
    "span",
    { class: "text-caption text-bold vertical-bottom" },
    " Cart ",
    -1
  ),
  yu = {
    key: 0,
    class: "q-mx-auto",
    style: { width: "100%", "max-width": "50%" },
  },
  pu = { class: "row items-center no-wrap" },
  wu = { class: "text-center" },
  xu = { class: "text-caption" },
  Su = W("div", { class: "text-bold text-subtitle1" }, "Ridgewood 07450", -1),
  ku = { class: "text-center" },
  _u = W("div", null, "Add Address", -1),
  Yu = {
    __name: "NavBar",
    setup(e) {
      const t = On(),
        l = Ua(),
        n = R([]),
        a = Di(),
        u = R(a.totalQuantity),
        o = ya(),
        r = R(null),
        m = R([]),
        b = R(""),
        s = R(!1),
        h = R(window.innerWidth),
        g = R(!1),
        d = R(!1),
        y = R(!1),
        N = R(!1),
        S = async () => {
          if (b.value.trim().length > 0) {
            const p = b.value.trim();
            l.push({ path: "/search", query: { q: p } });
          } else
            (s.value = !0),
              setTimeout(() => {
                s.value = !1;
              }, 1e3);
        },
        B = () => {
          h.value = window.innerWidth;
        },
        V = (p) =>
          p
            .toLowerCase()
            .split(" ")
            .map((k) => k[0].toUpperCase() + k.substring(1))
            .join(" "),
        z = async () => {
          try {
            const p = await Fe.get("/category");
            n.value = p.data;
          } catch (p) {
            console.error(p);
          }
        },
        U = async () => {
          await t.loginWithRedirect();
        },
        $ = async () => {
          await t.logout({
            logoutParams: { returnTo: "https://unlimiteddrinks.net" },
          }),
            sessionStorage.removeItem("customer");
        },
        K = async () => {
          try {
            return (
              await Fe.get(`/customer/exists/${t.user.value.sub.split("|")[1]}`)
            ).data;
          } catch (p) {
            return console.error(p), !1;
          }
        },
        D = async () => {
          if (t.isAuthenticated.value && !t.isLoading.value)
            try {
              const p = await K();
              if (((N.value = p), !p)) l.push("/setup");
              else
                try {
                  const c = await Fe.get(
                    `/customer/${t.user.value.sub.split("|")[1]}`
                  );
                  o.initCustomer(c.data),
                    (r.value = o.getSelectedAddress.id),
                    (m.value = [o.getSelectedAddress, ...o.getAddresses]);
                } catch (c) {
                  console.error(c);
                }
            } catch (p) {
              console.error(p);
            }
        },
        J = (p) =>
          `${p.street}, ${p.city} ${p.state} ${p.zip_code} ${p.country}`,
        x = async () => {
          try {
            const p = await Fe.post(
              `address/updateMain/${t.user.value.sub.split("|")[1]}/${r.value}`
            );
            o.changeSelectedAddress(p.data), location.reload(!0);
          } catch (p) {
            console.error(p);
          }
        },
        A = () => {
          d.value = !1;
        };
      return (
        Xe(async () => {
          window.addEventListener("resize", B), await z();
        }),
        En(() => {
          window.removeEventListener("resize", B);
        }),
        Qa(async () => {
          (u.value = a.totalQuantity), await D();
        }),
        (p, c) => (
          ee(),
          be(
            St,
            null,
            [
              W("div", ji, [
                W("div", Wi, [
                  W("div", Ki, [
                    q(
                      xe,
                      { flat: "", class: "q-pa-none" },
                      {
                        default: T(() => [
                          W("img", {
                            class: "cursor-pointer row",
                            src: "static/logo.png",
                            alt: "Logo",
                            width: "80",
                            height: "80",
                            onClick: c[0] || (c[0] = (k) => oe(l).push("/")),
                          }),
                        ]),
                        _: 1,
                      }
                    ),
                    oe(t).isAuthenticated.value && N.value && h.value >= 465
                      ? (ee(),
                        Ve(
                          xe,
                          {
                            key: 0,
                            "no-caps": "",
                            push: "",
                            flat: "",
                            onClick: c[5] || (c[5] = (k) => (g.value = !0)),
                          },
                          {
                            default: T(() => [
                              oe(o).selectedAddress && oe(o).getAddresses
                                ? (ee(),
                                  be("div", Ui, [
                                    q(se, {
                                      left: "",
                                      name: "mdi-map-marker-outline",
                                    }),
                                    W("div", Qi, [
                                      W(
                                        "div",
                                        Yi,
                                        " Deliver to " +
                                          me(oe(o).selectedAddress.first_name),
                                        1
                                      ),
                                      W(
                                        "div",
                                        Ji,
                                        me(oe(o).selectedAddress.city) +
                                          " " +
                                          me(oe(o).selectedAddress.zip_code),
                                        1
                                      ),
                                    ]),
                                  ]))
                                : Ee("", !0),
                              q(
                                jt,
                                {
                                  modelValue: g.value,
                                  "onUpdate:modelValue":
                                    c[4] || (c[4] = (k) => (g.value = k)),
                                },
                                {
                                  default: T(() => [
                                    q(bl, null, {
                                      default: T(() => [
                                        q(
                                          ye,
                                          {
                                            class:
                                              "bg-dark text-white text-bold ys",
                                          },
                                          {
                                            default: T(() => [
                                              re(" Choose your location "),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        q(
                                          ye,
                                          {
                                            class: "oswald text-bold q-pb-none",
                                          },
                                          {
                                            default: T(() => [
                                              q(
                                                xe,
                                                {
                                                  class: "full-width",
                                                  style: {
                                                    border: "2px solid grey",
                                                    "border-radius": "1rem",
                                                  },
                                                  flat: "",
                                                  color: "grey-6",
                                                  onClick:
                                                    c[1] ||
                                                    (c[1] = (k) =>
                                                      (d.value = !0)),
                                                },
                                                {
                                                  default: T(() => [
                                                    W("div", Xi, [
                                                      q(se, {
                                                        name: "add",
                                                        size: "30px",
                                                      }),
                                                      Zi,
                                                    ]),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        q(
                                          ye,
                                          {
                                            class:
                                              "oswald text-body2 text-grey-6 q-pb-none",
                                          },
                                          {
                                            default: T(() => [
                                              re(
                                                " Delivery options and delivery speeds may vary for different locations "
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        q(
                                          ye,
                                          {
                                            class: "oswald text-bold q-py-none",
                                          },
                                          {
                                            default: T(() => [
                                              (ee(!0),
                                              be(
                                                St,
                                                null,
                                                Pt(
                                                  m.value.slice(
                                                    0,
                                                    y.value ? m.value.length : 3
                                                  ),
                                                  (k, _) => (
                                                    ee(),
                                                    be(
                                                      "div",
                                                      {
                                                        class: Ft([
                                                          "cursor-pointer q-my-md q-pa-lg",
                                                          k && k.id === r.value
                                                            ? "selected-address"
                                                            : "address",
                                                        ]),
                                                        key: _,
                                                        onClick: (j) =>
                                                          (r.value = k.id),
                                                      },
                                                      [
                                                        W("div", eu, [
                                                          W(
                                                            "div",
                                                            tu,
                                                            me(k.first_name) +
                                                              " " +
                                                              me(k.last_name),
                                                            1
                                                          ),
                                                          re(" " + me(J(k)), 1),
                                                        ]),
                                                      ],
                                                      10,
                                                      Gi
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        m.value.length > 3
                                          ? (ee(),
                                            Ve(
                                              ye,
                                              {
                                                key: 0,
                                                class: "q-pt-none",
                                                align: "right",
                                              },
                                              {
                                                default: T(() => [
                                                  W(
                                                    "div",
                                                    {
                                                      class:
                                                        "q-pa-sm text-grey-6 text-caption cursor-pointer",
                                                      style: {
                                                        width: "fit-content",
                                                      },
                                                      onClick:
                                                        c[2] ||
                                                        (c[2] = (k) =>
                                                          (y.value = !y.value)),
                                                    },
                                                    me(
                                                      y.value
                                                        ? "View Less"
                                                        : "View More..."
                                                    ),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              }
                                            ))
                                          : Ee("", !0),
                                        q(dt, { inset: "" }),
                                        q(
                                          hl,
                                          { class: "oswald", align: "right" },
                                          {
                                            default: T(() => [
                                              ft(
                                                q(
                                                  xe,
                                                  {
                                                    label: "Done",
                                                    color: "deep-purple-14",
                                                    onClick:
                                                      c[3] ||
                                                      (c[3] = (k) => x()),
                                                  },
                                                  null,
                                                  512
                                                ),
                                                [[Ht]]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue"]
                              ),
                            ]),
                            _: 1,
                          }
                        ))
                      : Ee("", !0),
                  ]),
                  h.value > 698
                    ? (ee(),
                      be("div", lu, [
                        q(
                          $e,
                          {
                            class: Ft(s.value ? "animated shakeX slower" : ""),
                            label: "Search",
                            type: "search",
                            standout: "text-deep-purple-14",
                            modelValue: b.value,
                            "onUpdate:modelValue":
                              c[7] || (c[7] = (k) => (b.value = k)),
                            modelModifiers: { trim: !0 },
                            dense: "",
                            dark: "",
                            rounded: "",
                            onKeydown: Dl(jl(S, ["prevent"]), ["enter"]),
                          },
                          {
                            append: T(() => [
                              q(se, {
                                name: "search",
                                onClick: c[6] || (c[6] = (k) => S()),
                                class:
                                  "search-btn bg-deep-purple-14 q-pa-sm text-white",
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class", "modelValue", "onKeydown"]
                        ),
                      ]))
                    : Ee("", !0),
                  h.value >= 1300
                    ? (ee(),
                      be("div", nu, [
                        q(
                          xe,
                          {
                            label: "Products",
                            padding: "md",
                            push: "",
                            flat: "",
                          },
                          {
                            default: T(() => [
                              q(se, {
                                name: "keyboard_arrow_down",
                                class: "on-right",
                              }),
                              q(
                                ct,
                                {
                                  class:
                                    "bg-dark text-white oswald text-body1 text-center",
                                  style: { width: "200px" },
                                  "transition-show": "jump-down",
                                  "transition-hide": "jump-up",
                                  offset: [0, 15],
                                },
                                {
                                  default: T(() => [
                                    q(wt, null, {
                                      default: T(() => [
                                        (ee(!0),
                                        be(
                                          St,
                                          null,
                                          Pt(
                                            n.value,
                                            (k, _) => (
                                              ee(),
                                              be("div", { key: k.id }, [
                                                q(
                                                  qe,
                                                  {
                                                    clickable: "",
                                                    onClick: (j) =>
                                                      oe(l).push(
                                                        `/${k.name.replace(
                                                          " ",
                                                          "-"
                                                        )}`
                                                      ),
                                                  },
                                                  {
                                                    default: T(() => [
                                                      q(
                                                        ke,
                                                        null,
                                                        {
                                                          default: T(() => [
                                                            re(
                                                              me(V(k.name)),
                                                              1
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1032,
                                                  ["onClick"]
                                                ),
                                                _ < n.value.length - 1
                                                  ? (ee(),
                                                    Ve(dt, {
                                                      key: 0,
                                                      dark: "",
                                                    }))
                                                  : Ee("", !0),
                                              ])
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                        oe(t).isAuthenticated.value
                          ? (ee(),
                            Ve(
                              xe,
                              { key: 0, "no-caps": "", flat: "" },
                              {
                                default: T(() => [
                                  W("div", au, [
                                    q(se, {
                                      size: "30px",
                                      name: "mdi-account-circle-outline",
                                    }),
                                    W("div", ou, [
                                      W("div", null, [
                                        iu,
                                        W(
                                          "span",
                                          uu,
                                          me(oe(o).customer.firstName),
                                          1
                                        ),
                                      ]),
                                      ru,
                                    ]),
                                  ]),
                                  q(
                                    ct,
                                    {
                                      fit: "",
                                      class:
                                        "bg-dark text-white oswald text-body1",
                                      "transition-show": "jump-down",
                                      "transition-hide": "jump-up",
                                      offset: [0, 15],
                                    },
                                    {
                                      default: T(() => [
                                        q(wt, null, {
                                          default: T(() => [
                                            q(
                                              qe,
                                              {
                                                clickable: "",
                                                onClick:
                                                  c[8] ||
                                                  (c[8] = (k) =>
                                                    oe(l).push("/orders")),
                                              },
                                              {
                                                default: T(() => [
                                                  q(ke, null, {
                                                    default: T(() => [
                                                      re("Orders"),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            q(
                                              qe,
                                              {
                                                clickable: "",
                                                onClick:
                                                  c[9] ||
                                                  (c[9] = (k) =>
                                                    oe(l).push("/account")),
                                              },
                                              {
                                                default: T(() => [
                                                  q(ke, null, {
                                                    default: T(() => [
                                                      re("Account Settings"),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            q(
                                              qe,
                                              {
                                                clickable: "",
                                                onClick:
                                                  c[10] || (c[10] = (k) => $()),
                                              },
                                              {
                                                default: T(() => [
                                                  q(ke, null, {
                                                    default: T(() => [
                                                      re("Logout"),
                                                    ]),
                                                    _: 1,
                                                  }),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                            q(dt, { dark: "" }),
                                          ]),
                                          _: 1,
                                        }),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ))
                          : (ee(),
                            Ve(xe, {
                              key: 1,
                              flat: "",
                              label: "Login",
                              onClick: c[11] || (c[11] = (k) => U()),
                            })),
                        q(
                          xe,
                          {
                            padding: "md",
                            "no-caps": "",
                            flat: "",
                            onClick:
                              c[12] || (c[12] = (k) => oe(l).push("/cart")),
                          },
                          {
                            default: T(() => [
                              W("div", null, [
                                q(
                                  se,
                                  { size: "30px", name: "mdi-cart-outline" },
                                  {
                                    default: T(() => [
                                      q(
                                        xn,
                                        {
                                          class: "text-bold",
                                          color: "deep-purple-14",
                                          floating: "",
                                          rounded: "",
                                        },
                                        {
                                          default: T(() => [
                                            re(me(u.value), 1),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                su,
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                      ]))
                    : (ee(),
                      be("div", du, [
                        q(
                          xe,
                          { flat: "" },
                          {
                            default: T(() => [
                              q(se, {
                                name: "menu",
                                size: "30px",
                                class: "cursor-pointer",
                              }),
                              q(
                                ct,
                                {
                                  style: { width: "200px" },
                                  class: "bg-dark text-white oswald text-body1",
                                  "transition-show": "jump-down",
                                  "transition-hide": "jump-up",
                                  offset: [48, 20],
                                },
                                {
                                  default: T(() => [
                                    q(
                                      wt,
                                      { dense: "" },
                                      {
                                        default: T(() => [
                                          q(
                                            qe,
                                            { clickable: "" },
                                            {
                                              default: T(() => [
                                                q(
                                                  ke,
                                                  { side: "" },
                                                  {
                                                    default: T(() => [
                                                      q(se, {
                                                        name: "keyboard_arrow_left",
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                q(
                                                  ke,
                                                  { class: "q-py-md q-ml-lg" },
                                                  {
                                                    default: T(() => [
                                                      re(" Products "),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                                q(
                                                  ct,
                                                  {
                                                    fit: "",
                                                    class:
                                                      "bg-dark text-white oswald text-center text-body1",
                                                    anchor: "top end",
                                                    self: "top start",
                                                    offset: [0, -3],
                                                  },
                                                  {
                                                    default: T(() => [
                                                      q(wt, null, {
                                                        default: T(() => [
                                                          (ee(!0),
                                                          be(
                                                            St,
                                                            null,
                                                            Pt(
                                                              n.value,
                                                              (k, _) => (
                                                                ee(),
                                                                be(
                                                                  "div",
                                                                  { key: k.id },
                                                                  [
                                                                    q(
                                                                      qe,
                                                                      {
                                                                        clickable:
                                                                          "",
                                                                        onClick:
                                                                          (j) =>
                                                                            oe(
                                                                              l
                                                                            ).push(
                                                                              `/${k.name.replace(
                                                                                " ",
                                                                                "-"
                                                                              )}`
                                                                            ),
                                                                      },
                                                                      {
                                                                        default:
                                                                          T(
                                                                            () => [
                                                                              q(
                                                                                ke,
                                                                                null,
                                                                                {
                                                                                  default:
                                                                                    T(
                                                                                      () => [
                                                                                        re(
                                                                                          me(
                                                                                            V(
                                                                                              k.name
                                                                                            )
                                                                                          ),
                                                                                          1
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  _: 2,
                                                                                },
                                                                                1024
                                                                              ),
                                                                            ]
                                                                          ),
                                                                        _: 2,
                                                                      },
                                                                      1032,
                                                                      [
                                                                        "onClick",
                                                                      ]
                                                                    ),
                                                                    _ <
                                                                    n.value
                                                                      .length -
                                                                      1
                                                                      ? (ee(),
                                                                        Ve(dt, {
                                                                          key: 0,
                                                                          dark: "",
                                                                        }))
                                                                      : Ee(
                                                                          "",
                                                                          !0
                                                                        ),
                                                                  ]
                                                                )
                                                              )
                                                            ),
                                                            128
                                                          )),
                                                        ]),
                                                        _: 1,
                                                      }),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          oe(t).isAuthenticated.value
                                            ? (ee(),
                                              Ve(
                                                qe,
                                                { key: 0, clickable: "" },
                                                {
                                                  default: T(() => [
                                                    q(
                                                      ke,
                                                      { class: "q-py-md" },
                                                      {
                                                        default: T(() => [
                                                          W("div", cu, [
                                                            q(se, {
                                                              size: "30px",
                                                              name: "mdi-account-circle-outline",
                                                            }),
                                                            W("div", fu, [
                                                              W("div", null, [
                                                                vu,
                                                                W(
                                                                  "span",
                                                                  mu,
                                                                  me(
                                                                    oe(o)
                                                                      .customer
                                                                      .firstName
                                                                  ),
                                                                  1
                                                                ),
                                                              ]),
                                                              gu,
                                                            ]),
                                                          ]),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                    q(
                                                      ct,
                                                      {
                                                        fit: "",
                                                        class:
                                                          "bg-dark text-white text-center oswald text-body1",
                                                        "transition-show":
                                                          "jump-down",
                                                        "transition-hide":
                                                          "jump-up",
                                                        anchor: "top end",
                                                        self: "top start",
                                                      },
                                                      {
                                                        default: T(() => [
                                                          q(wt, null, {
                                                            default: T(() => [
                                                              q(
                                                                qe,
                                                                {
                                                                  clickable: "",
                                                                  onClick:
                                                                    c[13] ||
                                                                    (c[13] = (
                                                                      k
                                                                    ) =>
                                                                      oe(
                                                                        l
                                                                      ).push(
                                                                        "/orders"
                                                                      )),
                                                                },
                                                                {
                                                                  default: T(
                                                                    () => [
                                                                      q(
                                                                        ke,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            T(
                                                                              () => [
                                                                                re(
                                                                                  "Orders"
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 1,
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ),
                                                              q(
                                                                qe,
                                                                {
                                                                  clickable: "",
                                                                  onClick:
                                                                    c[14] ||
                                                                    (c[14] = (
                                                                      k
                                                                    ) =>
                                                                      oe(
                                                                        l
                                                                      ).push(
                                                                        "/account"
                                                                      )),
                                                                },
                                                                {
                                                                  default: T(
                                                                    () => [
                                                                      q(
                                                                        ke,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            T(
                                                                              () => [
                                                                                re(
                                                                                  "Account Settings"
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 1,
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ),
                                                              q(
                                                                qe,
                                                                {
                                                                  clickable: "",
                                                                  onClick:
                                                                    c[15] ||
                                                                    (c[15] = (
                                                                      k
                                                                    ) => $()),
                                                                },
                                                                {
                                                                  default: T(
                                                                    () => [
                                                                      q(
                                                                        ke,
                                                                        null,
                                                                        {
                                                                          default:
                                                                            T(
                                                                              () => [
                                                                                re(
                                                                                  "Logout"
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          _: 1,
                                                                        }
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ),
                                                              q(dt, {
                                                                dark: "",
                                                              }),
                                                            ]),
                                                            _: 1,
                                                          }),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              ))
                                            : (ee(),
                                              Ve(
                                                qe,
                                                {
                                                  key: 1,
                                                  clickable: "",
                                                  onClick:
                                                    c[16] ||
                                                    (c[16] = (k) => U()),
                                                },
                                                {
                                                  default: T(() => [
                                                    q(
                                                      ke,
                                                      {
                                                        class:
                                                          "text-center q-py-md",
                                                      },
                                                      {
                                                        default: T(() => [
                                                          re(" Login "),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              )),
                                          ft(
                                            (ee(),
                                            Ve(
                                              qe,
                                              {
                                                clickable: "",
                                                onClick:
                                                  c[17] ||
                                                  (c[17] = (k) =>
                                                    oe(l).push("/cart")),
                                              },
                                              {
                                                default: T(() => [
                                                  q(
                                                    ke,
                                                    { class: "q-py-md" },
                                                    {
                                                      default: T(() => [
                                                        W("div", hu, [
                                                          q(
                                                            se,
                                                            {
                                                              size: "30px",
                                                              name: "mdi-cart-outline",
                                                            },
                                                            {
                                                              default: T(() => [
                                                                q(
                                                                  xn,
                                                                  {
                                                                    class:
                                                                      "text-bold",
                                                                    color:
                                                                      "deep-purple-14",
                                                                    floating:
                                                                      "",
                                                                    rounded: "",
                                                                  },
                                                                  {
                                                                    default: T(
                                                                      () => [
                                                                        re(
                                                                          me(
                                                                            u.value
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ]
                                                                    ),
                                                                    _: 1,
                                                                  }
                                                                ),
                                                              ]),
                                                              _: 1,
                                                            }
                                                          ),
                                                          bu,
                                                        ]),
                                                      ]),
                                                      _: 1,
                                                    }
                                                  ),
                                                ]),
                                                _: 1,
                                              }
                                            )),
                                            [[Ht]]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ])),
                ]),
                h.value < 699
                  ? (ee(),
                    be("div", yu, [
                      oe(t).isAuthenticated.value && N.value && h.value < 465
                        ? (ee(),
                          Ve(
                            xe,
                            {
                              key: 0,
                              "no-caps": "",
                              push: "",
                              flat: "",
                              onClick: c[21] || (c[21] = (k) => (g.value = !0)),
                            },
                            {
                              default: T(() => [
                                W("div", pu, [
                                  q(se, {
                                    left: "",
                                    name: "mdi-map-marker-outline",
                                  }),
                                  W("div", wu, [
                                    W(
                                      "div",
                                      xu,
                                      " Deliver to " +
                                        me(oe(o).selectedAddress.first_name),
                                      1
                                    ),
                                    Su,
                                  ]),
                                ]),
                                q(
                                  jt,
                                  {
                                    modelValue: g.value,
                                    "onUpdate:modelValue":
                                      c[20] || (c[20] = (k) => (g.value = k)),
                                  },
                                  {
                                    default: T(() => [
                                      q(bl, null, {
                                        default: T(() => [
                                          q(
                                            ye,
                                            {
                                              class:
                                                "bg-dark text-white text-bold ys",
                                            },
                                            {
                                              default: T(() => [
                                                re(" Choose your location "),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          q(
                                            ye,
                                            {
                                              class:
                                                "oswald text-bold q-pb-none",
                                            },
                                            {
                                              default: T(() => [
                                                q(
                                                  xe,
                                                  {
                                                    class: "full-width",
                                                    style: {
                                                      border: "2px solid grey",
                                                      "border-radius": "1rem",
                                                    },
                                                    flat: "",
                                                    color: "grey-6",
                                                    onClick:
                                                      c[18] ||
                                                      (c[18] = (k) =>
                                                        (d.value = !0)),
                                                  },
                                                  {
                                                    default: T(() => [
                                                      W("div", ku, [
                                                        q(se, {
                                                          name: "add",
                                                          size: "30px",
                                                        }),
                                                        _u,
                                                      ]),
                                                    ]),
                                                    _: 1,
                                                  }
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          q(
                                            ye,
                                            {
                                              class:
                                                "oswald text-body2 text-grey-6 q-pb-none",
                                            },
                                            {
                                              default: T(() => [
                                                re(
                                                  " Delivery options and delivery speeds may vary for different locations "
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          m.value.length > 3
                                            ? (ee(),
                                              Ve(
                                                ye,
                                                {
                                                  key: 0,
                                                  class: "q-pt-none",
                                                  align: "right",
                                                },
                                                {
                                                  default: T(() => [
                                                    W(
                                                      "div",
                                                      {
                                                        class:
                                                          "q-pa-sm text-grey-6 text-caption cursor-pointer",
                                                        style: {
                                                          width: "fit-content",
                                                        },
                                                        onClick:
                                                          c[19] ||
                                                          (c[19] = (k) =>
                                                            (y.value =
                                                              !y.value)),
                                                      },
                                                      me(
                                                        y.value
                                                          ? "View Less"
                                                          : "View More..."
                                                      ),
                                                      1
                                                    ),
                                                  ]),
                                                  _: 1,
                                                }
                                              ))
                                            : Ee("", !0),
                                          q(dt, { inset: "" }),
                                          q(
                                            hl,
                                            { class: "oswald", align: "right" },
                                            {
                                              default: T(() => [
                                                ft(
                                                  q(
                                                    xe,
                                                    {
                                                      label: "Done",
                                                      color: "deep-purple-14",
                                                    },
                                                    null,
                                                    512
                                                  ),
                                                  [[Ht]]
                                                ),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      }),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["modelValue"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : Ee("", !0),
                      q(
                        $e,
                        {
                          class: Ft([
                            "q-mb-lg",
                            s.value ? "animated shakeX slower" : "",
                          ]),
                          label: "Search",
                          type: "search",
                          standout: "text-deep-purple-14",
                          modelValue: b.value,
                          "onUpdate:modelValue":
                            c[22] || (c[22] = (k) => (b.value = k)),
                          modelModifiers: { trim: !0 },
                          dense: "",
                          dark: "",
                          rounded: "",
                          onKeydown: Dl(jl(S, ["prevent"]), ["enter"]),
                        },
                        {
                          append: T(() => [
                            q(se, {
                              name: "search",
                              onClick: S,
                              class:
                                "search-btn bg-deep-purple-14 q-pa-sm text-white",
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class", "modelValue", "onKeydown"]
                      ),
                    ]))
                  : Ee("", !0),
              ]),
              q(
                Hi,
                {
                  modelValue: d.value,
                  "onUpdate:modelValue":
                    c[23] || (c[23] = (k) => (d.value = k)),
                  onAddAddress: c[24] || (c[24] = (k) => A()),
                },
                null,
                8,
                ["modelValue"]
              ),
              W(
                "div",
                {
                  style: Ya(
                    h.value > 470
                      ? "padding-bottom: 6rem"
                      : "padding-bottom: 10rem"
                  ),
                },
                null,
                4
              ),
            ],
            64
          )
        )
      );
    },
  },
  Vt = { _origin: "https://api.emailjs.com" },
  Cu = (e, t = "https://api.emailjs.com") => {
    (Vt._userID = e), (Vt._origin = t);
  },
  pa = (e, t, l) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!l)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class qn {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const wa = (e, t, l = {}) =>
    new Promise((n, a) => {
      const u = new XMLHttpRequest();
      u.addEventListener("load", ({ target: o }) => {
        const r = new qn(o);
        r.status === 200 || r.text === "OK" ? n(r) : a(r);
      }),
        u.addEventListener("error", ({ target: o }) => {
          a(new qn(o));
        }),
        u.open("POST", Vt._origin + e, !0),
        Object.keys(l).forEach((o) => {
          u.setRequestHeader(o, l[o]);
        }),
        u.send(t);
    }),
  qu = (e, t, l, n) => {
    const a = n || Vt._userID;
    pa(a, e, t);
    const u = {
      lib_version: "3.11.0",
      user_id: a,
      service_id: e,
      template_id: t,
      template_params: l,
    };
    return wa("/api/v1.0/email/send", JSON.stringify(u), {
      "Content-type": "application/json",
    });
  },
  Vu = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Au = (e, t, l, n) => {
    const a = n || Vt._userID,
      u = Vu(l);
    pa(a, e, t);
    const o = new FormData(u);
    return (
      o.append("lib_version", "3.11.0"),
      o.append("service_id", e),
      o.append("template_id", t),
      o.append("user_id", a),
      wa("/api/v1.0/email/send-form", o)
    );
  };
var Mu = { init: Cu, send: qu, sendForm: Au };
const Eu = { class: "text-white bg-dark" },
  $u = { class: "q-pa-xl q-mx-xl" },
  Bu = W(
    "div",
    { class: "ys text-weight-bolder text-h3 text-center" },
    [
      re(
        " Quenching Convenience: Simplifying Student Life, One Sip at a Time "
      ),
      W("img", { src: "static/footerCola.png", alt: "Pastel Cola" }),
    ],
    -1
  ),
  Tu = { class: "row justify-between q-mt-xl items-center" },
  Lu = { class: "oswald text-center", style: { width: "20%" } },
  Ru = W("div", { class: "ys text-h6 q-mb-md" }, "SHOP", -1),
  Ou = ["onClick"],
  zu = W(
    "div",
    { style: { width: "35%" } },
    [
      W("div", { class: "ys text-h5 q-mb-md" }, "About Unlimited Drinks"),
      W(
        "div",
        { class: "oswald text-h6 text-weight-regular" },
        " Unlimited Drinks is a beverage company that provides convenience and pleasure on the go. We provide a variety of drinks for our customers to choose from. We work hard to fullfill our customers. Our mission is to provide our custoemrs with a refreshing beverage that can be purchased in bulk or individually. We began our journey during the pandemic in the year 2020 and we are striving and pushing to provide the best services. "
      ),
    ],
    -1
  ),
  Iu = { style: { width: "35%" } },
  Fu = W("div", { class: "ys text-h6" }, "Contact Us", -1),
  Pu = { class: "oswald" },
  Nu = { key: 0, class: "oswald text-center text-positive q-mt-sm" },
  Hu = W("span", { class: "text-h6" }, "\u{1F44D}\u{1F601}", -1),
  Du = { key: 1, class: "oswald text-center text-negative q-mt-sm" },
  Ju = {
    __name: "FooterComponent",
    setup(e) {
      const t = R(null),
        l = R(null),
        n = R(null),
        a = R(null),
        u = R(!1),
        o = R(null),
        r = R([]),
        m = R(""),
        b = async () => {
          if (
            !t.value.trim() ||
            !l.value.trim() ||
            !n.value.trim() ||
            !a.value.trim()
          ) {
            (m.value = "Please fill in all the fields"), (o.value = !1);
            return;
          }
          u.value = !0;
          try {
            const g = {
                from_name: t.value.trim(),
                message: a.value.trim(),
                subject: n.value.trim(),
                email: l.value.trim(),
              },
              d = await Mu.send(
                "service_t1v57jf",
                "template_r5gh23z",
                g,
                "LONOwLZJYS63ujYp5"
              );
            o.value = d.status === 200;
          } catch (g) {
            (o.value = !1),
              (m.value = "Something went wrong! Please try again later"),
              console.error(g);
          }
          setTimeout(() => {
            u.value = !1;
          }, 1e3),
            setTimeout(() => {
              o.value = null;
            }, 2e3);
        },
        s = (g) =>
          g
            .toLowerCase()
            .split(" ")
            .map((y) => y[0].toUpperCase() + y.substring(1))
            .join(" "),
        h = async () => {
          try {
            const g = await Fe.get("/category");
            r.value = g.data;
          } catch {
            console.error(m);
          }
        };
      return (
        Xe(async () => {
          h();
        }),
        (g, d) => (
          ee(),
          be("div", Eu, [
            W("div", $u, [
              Bu,
              W("div", Tu, [
                W("div", Lu, [
                  Ru,
                  (ee(!0),
                  be(
                    St,
                    null,
                    Pt(
                      r.value,
                      (y) => (
                        ee(),
                        be(
                          "div",
                          {
                            key: y.id,
                            class: "text-body1 q-my-md cursor-pointer",
                            onClick: (N) =>
                              g.$router.push(`/${y.name.replace(" ", "-")}`),
                          },
                          me(s(y.name)),
                          9,
                          Ou
                        )
                      )
                    ),
                    128
                  )),
                ]),
                zu,
                W("div", Iu, [
                  Fu,
                  W("div", Pu, [
                    q(
                      $e,
                      {
                        class: "q-my-lg",
                        type: "text",
                        label: "Preferred Name",
                        modelValue: t.value,
                        "onUpdate:modelValue":
                          d[0] || (d[0] = (y) => (t.value = y)),
                        modelModifiers: { trim: !0, trim: !0 },
                        dense: "",
                        standout: "text-deep-purple-14",
                        dark: "",
                        rounded: "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    q(
                      $e,
                      {
                        class: "q-my-lg",
                        type: "text",
                        label: "Email",
                        modelValue: l.value,
                        "onUpdate:modelValue":
                          d[1] || (d[1] = (y) => (l.value = y)),
                        modelModifiers: { trim: !0 },
                        dense: "",
                        dark: "",
                        rounded: "",
                        standout: "text-deep-purple-14",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    q(
                      $e,
                      {
                        class: "q-my-lg",
                        type: "text",
                        label: "Subject",
                        modelValue: n.value,
                        "onUpdate:modelValue":
                          d[2] || (d[2] = (y) => (n.value = y)),
                        modelModifiers: { trim: !0 },
                        dense: "",
                        dark: "",
                        rounded: "",
                        standout: "text-deep-purple-14",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    q(
                      $e,
                      {
                        class: "q-my-lg",
                        label: "Your Message",
                        modelValue: a.value,
                        "onUpdate:modelValue":
                          d[3] || (d[3] = (y) => (a.value = y)),
                        modelModifiers: { trim: !0 },
                        autogrow: "",
                        standout: "text-deep-purple-14",
                        dark: "",
                        rounded: "",
                        dense: "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    q(
                      xe,
                      {
                        loading: u.value,
                        class: "full-width",
                        label: "Contact Us",
                        color: "deep-purple-14",
                        rounded: "",
                        push: "",
                        onClick: d[4] || (d[4] = (y) => b()),
                      },
                      null,
                      8,
                      ["loading"]
                    ),
                  ]),
                  o.value
                    ? (ee(),
                      be("div", Nu, [
                        re(
                          " Thank you for contacting us! We will get back to you shortly "
                        ),
                        Hu,
                      ]))
                    : Ee("", !0),
                  o.value === !1
                    ? (ee(), be("div", Du, me(m.value), 1))
                    : Ee("", !0),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  };
export {
  gn as $,
  kl as A,
  Ku as B,
  Uu as C,
  ya as D,
  jt as E,
  Hi as F,
  Mi as G,
  ke as H,
  qe as I,
  hl as J,
  Ei as K,
  Ht as L,
  si as M,
  ea as N,
  na as O,
  yn as P,
  xe as Q,
  vi as R,
  ta as S,
  Gn as T,
  Zn as U,
  aa as V,
  ci as W,
  di as X,
  la as Y,
  ua as Z,
  Yu as _,
  Ja as a,
  ha as a0,
  Ro as a1,
  pn as a2,
  fi as a3,
  ge as b,
  zn as c,
  Ge as d,
  Ga as e,
  Ke as f,
  Wu as g,
  Ae as h,
  dt as i,
  Ju as j,
  se as k,
  uo as l,
  ro as m,
  Di as n,
  ye as o,
  $e as p,
  jn as q,
  bl as r,
  po as s,
  Qu as t,
  Ze as u,
  Fn as v,
  Gl as w,
  wo as x,
  Sl as y,
  va as z,
};
