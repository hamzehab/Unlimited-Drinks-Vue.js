import {
  _ as q,
  r as S,
  j as U,
  o as i,
  i as M,
  k as Q,
  p as u,
  G as $,
  Q as V,
  K as z,
} from "./FooterComponent.6ccc6239.js";
import {
  a5 as N,
  a8 as E,
  r as a,
  f as I,
  j,
  C as w,
  a9 as A,
  t as B,
  u as D,
  x as o,
  v as t,
  y as s,
  F,
  ab as L,
  L as P,
  a6 as R,
} from "./index.365d9f13.js";
const G = { style: { "pointer-events": "none" } },
  K = { class: "main animated fadeInDown slower" },
  T = { class: "q-mx-auto q-my-xl", style: { width: "60%" } },
  Z = o(
    "img",
    {
      src: "static/logo.png",
      alt: "Unlimited Drinks Logo",
      style: { width: "100%", "max-width": "400px" },
    },
    null,
    -1
  ),
  H = o("span", { class: "on-right" }, "Create Profile", -1),
  J = { class: "row justify-between" },
  O = { class: "text-dark" },
  W = { style: { "pointer-events": "none" } },
  te = {
    __name: "SetupAccount",
    setup(X) {
      const r = N(),
        b = E(),
        _ = z,
        g = a(!1),
        k = I(
          () =>
            !(
              m.value &&
              p.value &&
              v.value &&
              f.value &&
              x.value &&
              (d.value === null ? d.value : d.value.length === 5)
            )
        ),
        c = a(r.user.value.email),
        m = a(null),
        p = a(null),
        v = a(null),
        y = a(null),
        f = a(null),
        x = a(null),
        d = a(null),
        h = async () => {
          g.value = !0;
          try {
            const e = {
              customer: {
                id: r.user.value.sub.split("|")[1],
                first_name: m.value,
                last_name: p.value,
                email: c.value,
              },
              address: {
                first_name: m.value,
                last_name: p.value,
                street: v.value,
                street2: y.value,
                city: f.value,
                state: x.value,
                zip_code: d.value,
              },
            };
            await w.post("/customer/create", e), b.push("/");
          } catch (n) {
            console.error(n);
          }
          g.value = !1;
        },
        C = async () => {
          await r.logout({
            logoutParams: { returnTo: "https://unlimiteddrinks.net" },
          }),
            sessionStorage.removeItem("customer");
        };
      return (
        j(async () => {
          (await w.get(`/customer/exists/${r.user.value.sub.split("|")[1]}`))
            .data && b.back();
        }),
        A(() => {
          c.value = r.user.value.email;
        }),
        (n, e) => (
          B(),
          D(
            F,
            null,
            [
              o("div", G, [t(q)]),
              o("div", K, [
                o("div", T, [
                  t(
                    S,
                    { class: "q-pa-md" },
                    {
                      default: s(() => [
                        t(
                          i,
                          { horizontal: !n.$q.platform.is.mobile },
                          {
                            default: s(() => [
                              t(
                                i,
                                {
                                  class:
                                    "row items-center justify-center q-mx-auto",
                                  style: { width: "50%" },
                                },
                                { default: s(() => [Z]), _: 1 }
                              ),
                              t(M, { vertical: "", inset: "" }),
                              t(
                                i,
                                {
                                  style: L(
                                    n.$q.platform.is.mobile ? "" : "width: 70%"
                                  ),
                                },
                                {
                                  default: s(() => [
                                    t(
                                      i,
                                      {
                                        class:
                                          "ys text-h4 flex nowrap items-center",
                                      },
                                      {
                                        default: s(() => [
                                          t(Q, {
                                            name: "mdi-account-circle-outline",
                                            size: "50px",
                                          }),
                                          H,
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    t(
                                      i,
                                      { class: "q-mx-auto" },
                                      {
                                        default: s(() => [
                                          t(
                                            u,
                                            {
                                              label: "Email",
                                              standout:
                                                "bg-grey-3 text-deep-purple-14",
                                              modelValue: c.value,
                                              "onUpdate:modelValue":
                                                e[0] ||
                                                (e[0] = (l) => (c.value = l)),
                                              modelModifiers: { trim: !0 },
                                              "input-class": "text-dark ",
                                              rounded: "",
                                              disable: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          t(
                                            u,
                                            {
                                              class: "q-my-md",
                                              label: "First Name",
                                              modelValue: m.value,
                                              "onUpdate:modelValue":
                                                e[1] ||
                                                (e[1] = (l) => (m.value = l)),
                                              modelModifiers: { trim: !0 },
                                              standout:
                                                "bg-grey-3 text-deep-purple-14",
                                              "input-class": "text-dark",
                                              rounded: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          t(
                                            u,
                                            {
                                              label: "Last Name",
                                              modelValue: p.value,
                                              "onUpdate:modelValue":
                                                e[2] ||
                                                (e[2] = (l) => (p.value = l)),
                                              modelModifiers: { trim: !0 },
                                              standout:
                                                "bg-grey-3 text-deep-purple-14 ",
                                              "input-class": "text-dark",
                                              rounded: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          t(
                                            u,
                                            {
                                              class: "q-my-md",
                                              label: "Street Address",
                                              modelValue: v.value,
                                              "onUpdate:modelValue":
                                                e[3] ||
                                                (e[3] = (l) => (v.value = l)),
                                              modelModifiers: { trim: !0 },
                                              standout:
                                                "bg-grey-3 text-deep-purple-14",
                                              "input-class": "text-dark",
                                              rounded: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          t(
                                            u,
                                            {
                                              label:
                                                "Apt, suite, unit, building, floor, etc.",
                                              standout:
                                                "bg-grey-3 text-deep-purple-14",
                                              "input-class": "text-dark",
                                              modelValue: y.value,
                                              "onUpdate:modelValue":
                                                e[4] ||
                                                (e[4] = (l) => (y.value = l)),
                                              modelModifiers: { trim: !0 },
                                              rounded: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          t(
                                            u,
                                            {
                                              class: "q-my-md",
                                              label: "City",
                                              standout:
                                                "bg-grey-3 text-deep-purple-14",
                                              "input-class": "text-dark",
                                              modelValue: f.value,
                                              "onUpdate:modelValue":
                                                e[5] ||
                                                (e[5] = (l) => (f.value = l)),
                                              modelModifiers: { trim: !0 },
                                              rounded: "",
                                              dense: "",
                                            },
                                            null,
                                            8,
                                            ["modelValue"]
                                          ),
                                          o("div", J, [
                                            t(
                                              $,
                                              {
                                                standout:
                                                  "bg-grey-3 text-deep-purple-14",
                                                style: {
                                                  width: "100%",
                                                  "max-width": "49%",
                                                },
                                                label: "State",
                                                "emit-value": "",
                                                "map-options": "",
                                                "options-dense": "",
                                                modelValue: x.value,
                                                "onUpdate:modelValue":
                                                  e[6] ||
                                                  (e[6] = (l) => (x.value = l)),
                                                options: P(_),
                                                rounded: "",
                                                dense: "",
                                              },
                                              {
                                                "selected-item": s((l) => [
                                                  o(
                                                    "span",
                                                    O,
                                                    R(l.opt.label),
                                                    1
                                                  ),
                                                ]),
                                                _: 1,
                                              },
                                              8,
                                              ["modelValue", "options"]
                                            ),
                                            t(
                                              u,
                                              {
                                                label: "ZIP Code",
                                                modelValue: d.value,
                                                "onUpdate:modelValue":
                                                  e[7] ||
                                                  (e[7] = (l) => (d.value = l)),
                                                modelModifiers: { trim: !0 },
                                                standout:
                                                  "bg-grey-3 text-deep-purple-14",
                                                "input-class": "text-dark",
                                                mask: "#####",
                                                rounded: "",
                                                dense: "",
                                                style: {
                                                  width: "100%",
                                                  "max-width": "49%",
                                                },
                                              },
                                              null,
                                              8,
                                              ["modelValue"]
                                            ),
                                          ]),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    t(
                                      i,
                                      { align: "center" },
                                      {
                                        default: s(() => [
                                          t(V, {
                                            class: "text-bold",
                                            label: "Cancel",
                                            color: "dark",
                                            flat: "",
                                            style: {
                                              width: "100%",
                                              "max-width": "250px",
                                            },
                                            onClick:
                                              e[8] || (e[8] = (l) => C()),
                                          }),
                                          t(
                                            V,
                                            {
                                              loading: g.value,
                                              disabled: k.value,
                                              class: "text-bold",
                                              label: "Complete Registration",
                                              color: "deep-purple-14",
                                              push: "",
                                              style: {
                                                width: "100%",
                                                "max-width": "250px",
                                              },
                                              onClick:
                                                e[9] || (e[9] = (l) => h()),
                                            },
                                            null,
                                            8,
                                            ["loading", "disabled"]
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["style"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["horizontal"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              o("div", W, [t(U)]),
            ],
            64
          )
        )
      );
    },
  };
export { te as default };
