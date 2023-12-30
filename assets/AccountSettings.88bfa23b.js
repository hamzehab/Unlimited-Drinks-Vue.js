import {
  D as de,
  _ as ne,
  k as _,
  i as P,
  r as E,
  Q as f,
  E as re,
  F as ie,
  j as me,
  o as m,
  p as c,
  G as R,
  H as X,
  I as G,
  J as ce,
  K as ve,
  L as H,
} from "./FooterComponent.6ccc6239.js";
import {
  a5 as pe,
  r as u,
  f as J,
  t as v,
  u as K,
  v as l,
  x as a,
  a6 as d,
  L as I,
  y as o,
  F as fe,
  af as be,
  E as g,
  T as ye,
  D as w,
  z as h,
  a7 as N,
  J as O,
  C as U,
} from "./index.365d9f13.js";
const xe = { class: "main" },
  _e = { class: "q-mx-auto q-my-xl", style: { width: "70%" } },
  ge = { class: "ys text-h4 row items-center" },
  we = { class: "on-right" },
  he = a("div", null, "Your Account", -1),
  Ve = { class: "text-body1 on-right" },
  ke = { class: "text-caption on-right" },
  Ae = a("div", { class: "ys text-h6 q-mb-sm" }, "Email", -1),
  qe = a(
    "div",
    { class: "row justify-end text-grey-6 text-body2" },
    " Email cannot be edited ",
    -1
  ),
  Se = { class: "oswald", style: { width: "100%", "max-width": "60%" } },
  Ce = { class: "row ys q-mb-md" },
  $e = a("div", { class: "text-h6 on-left" }, "Name", -1),
  Ne = {
    class: "oswald underline row items-center text-deep-purple-14 text-body2",
  },
  Ue = a(
    "div",
    { class: "q-mb-sm row items-center" },
    [a("div", { class: "ys text-h6 on-left" }, "Addresses")],
    -1
  ),
  ze = { class: "row justify-between" },
  Me = { class: "text-bold text-body2" },
  Qe = { class: "text-caption" },
  Te = { class: "text-bold text-body1" },
  Ee = { class: "text-body2" },
  Ie = { class: "text-center" },
  je = a("div", null, "Add Address", -1),
  Be = { class: "row justify-between" },
  De = { class: "text-dark" },
  Fe = { class: "row justify-end q-mt-xl" },
  Ye = a("div", null, "By deleting your account:", -1),
  Le = { class: "q-ml-md" },
  Ge = {
    __name: "AccountSettings",
    setup(Pe) {
      const n = de(),
        V = pe(),
        b = u(!1),
        j = u(!1),
        z = u(!1),
        r = u(null),
        y = u(null),
        p = u(null),
        B = n.customer.email,
        M = u(n.customer.firstName),
        Q = u(n.customer.lastName),
        k = u(""),
        A = u(""),
        q = u(""),
        S = u(""),
        C = u(""),
        $ = u(""),
        x = u(""),
        W = J(
          () =>
            !(
              k.value &&
              A.value &&
              q.value &&
              C.value &&
              $.value &&
              (x.value === null ? x.value : x.value.length === 5)
            )
        ),
        Z = J(() => !(M.value && Q.value)),
        i = u(null),
        ee = async () => {
          const s = { first_name: M.value, last_name: Q.value };
          try {
            const e = await U.post(
              `/customer/editName/${V.user.value.sub.split("|")[1]}`,
              s
            );
            e.status === 204
              ? ((r.value = !0),
                (y.value =
                  "No changes were made since there were no edits made!"))
              : e.status === 200
              ? ((r.value = !1),
                (y.value = "Name changed successfully"),
                n.updateName(e.data.first_name, e.data.last_name),
                setTimeout(() => {
                  (r.value = null), (y.value = null);
                }, 2e3),
                (b.value = !1))
              : ((r.value = !0), (y.value = "Something went wrong!"));
          } catch (e) {
            (r.value = !0),
              (y.value = "Something went wrong!"),
              console.error(e);
          }
        },
        D = u(!1),
        F = async () => {
          try {
            (
              await U.delete(
                `customer/delete/${V.user.value.sub.split("|")[1]}`
              )
            ).data
              ? (await V.logout({
                  logoutParams: { returnTo: "https://unlimiteddrinks.net" },
                }),
                sessionStorage.clear())
              : ((D.value = !0),
                setTimeout(() => {
                  F.value = !1;
                }, 2e3));
          } catch (s) {
            (D.value = !0),
              setTimeout(() => {
                F.value = !1;
              }, 2e3),
              console.error(s);
          }
        },
        T = u(
          sessionStorage.getItem("customer")
            ? [n.getSelectedAddress, ...n.getAddresses]
            : []
        ),
        te = J(() =>
          T.value.map((s) => ({
            id: s.id,
            label: { first_name: s.first_name, last_name: s.last_name },
            value: {
              street: s.street,
              apt: s.street2 ? s.street2 : null,
              city: s.city,
              state: s.state,
              zip_code: s.zip_code,
            },
          }))
        ),
        Y = u(!1),
        le = async (s) => {
          (i.value = s),
            (k.value = s.label.first_name),
            (A.value = s.label.last_name),
            (q.value = s.value.street),
            (S.value = s.value.apt),
            (C.value = s.value.city),
            ($.value = s.value.state),
            (x.value = s.value.zip_code);
          try {
            (
              await U.get(
                `/address/isMain/${V.user.value.sub.split("|")[1]}/${s.id}`
              )
            ).data
              ? (Y.value = !0)
              : (Y.value = !1);
          } catch (e) {
            console.error(e);
          }
        },
        ae = (s) => {
          T.value.push(s), (z.value = !1);
        },
        se = async () => {
          const s = {
            first_name: k.value,
            last_name: A.value,
            street: q.value,
            street2: S.value !== "" ? S.value : void 0,
            city: C.value,
            state: $.value,
            zip_code: x.value,
          };
          try {
            const e = await U.post(
              `/address/update/${V.user.value.sub.split("|")[1]}/${i.value.id}`,
              s
            );
            e.status === 200
              ? ((r.value = !1),
                (p.value = "Address Updated!"),
                n.updateAddress(e.data),
                (T.value = [n.getSelectedAddress, ...n.getAddresses]),
                (i.value = null),
                setTimeout(() => {
                  (r.value = null), (p.value = null);
                }, 2e3))
              : e.status === 204
              ? ((r.value = !0),
                (p.value =
                  "Address not updated were made since there were no changes!"))
              : ((r.value = !0), (p.value = "Something went wrong!"));
          } catch (e) {
            (r.value = !0),
              (p.value = "Something went wrong!"),
              console.error(e);
          }
        },
        L = u(!1),
        oe = async () => {
          try {
            (
              await U.delete(
                `/address/delete/${V.user.value.sub.split("|")[1]}/${
                  i.value.id
                }`
              )
            ).data
              ? (n.deleteAddress(i.value),
                (T.value = [n.getSelectedAddress, ...n.getAddresses]),
                (i.value = null))
              : ((L.value = !0),
                setTimeout(() => {
                  L.value = !1;
                }, 1e3));
          } catch (s) {
            console.error(s);
          }
        },
        ue = ve;
      return (s, e) => (
        v(),
        K(
          fe,
          null,
          [
            l(ne),
            a("div", xe, [
              a("div", _e, [
                a("div", ge, [
                  l(_, { name: "mdi-account-circle-outline", size: "50px" }),
                  a("div", we, [
                    he,
                    a("div", Ve, " Welcome, " + d(I(n).getFullName), 1),
                    a(
                      "div",
                      ke,
                      " Member Since: " + d(I(n).customer.memberSince),
                      1
                    ),
                  ]),
                ]),
                l(P, { class: "q-mt-lg q-mb-xl" }),
                l(
                  E,
                  { class: "q-pa-md" },
                  {
                    default: o(() => [
                      l(
                        m,
                        {
                          class: "oswald",
                          style: { width: "100%", "max-width": "60%" },
                        },
                        {
                          default: o(() => [
                            Ae,
                            l(
                              c,
                              {
                                class: "q-mb-sm",
                                label: "Email Address",
                                modelValue: I(B),
                                "onUpdate:modelValue":
                                  e[0] ||
                                  (e[0] = (t) =>
                                    be(B) ? (B.value = t) : null),
                                modelModifiers: { trim: !0 },
                                standout: "bg-grey-3 text-deep-purple-14",
                                "input-class": "text-dark",
                                disable: "",
                              },
                              null,
                              8,
                              ["modelValue"]
                            ),
                            qe,
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
                l(P, { class: "q-my-xl" }),
                l(
                  E,
                  { class: "q-pa-lg" },
                  {
                    default: o(() => [
                      l(
                        m,
                        { class: "row justify-between" },
                        {
                          default: o(() => [
                            a("div", Se, [
                              a("div", Ce, [
                                $e,
                                a("div", Ne, [
                                  b.value
                                    ? g("", !0)
                                    : (v(),
                                      K(
                                        "div",
                                        {
                                          key: 0,
                                          class: "cursor-pointer",
                                          onClick:
                                            e[1] ||
                                            (e[1] = (t) => (b.value = !0)),
                                        },
                                        " Edit Name "
                                      )),
                                ]),
                              ]),
                              l(
                                ye,
                                {
                                  appear: "",
                                  "enter-active-class": "animated zoomIn",
                                  "leave-active-class": "animated zoomOut",
                                },
                                {
                                  default: o(() => [
                                    y.value
                                      ? (v(),
                                        w(
                                          m,
                                          {
                                            key: 0,
                                            class: N([
                                              "q-pa-none q-pb-md",
                                              r.value
                                                ? "text-red"
                                                : "text-green",
                                            ]),
                                          },
                                          {
                                            default: o(() => [
                                              h(d(y.value), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"]
                                        ))
                                      : g("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                              l(
                                c,
                                {
                                  class: "q-mb-lg",
                                  label: "First Name",
                                  standout: "bg-grey-3 text-deep-purple-14",
                                  "input-class": "text-dark",
                                  modelValue: M.value,
                                  "onUpdate:modelValue":
                                    e[2] || (e[2] = (t) => (M.value = t)),
                                  modelModifiers: { trim: !0 },
                                  disable: !b.value,
                                },
                                null,
                                8,
                                ["modelValue", "disable"]
                              ),
                              l(
                                c,
                                {
                                  label: "Last Name",
                                  standout: "bg-grey-3 text-deep-purple-14",
                                  "input-class": "text-dark",
                                  modelValue: Q.value,
                                  "onUpdate:modelValue":
                                    e[3] || (e[3] = (t) => (Q.value = t)),
                                  modelModifiers: { trim: !0 },
                                  disable: !b.value,
                                },
                                null,
                                8,
                                ["modelValue", "disable"]
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      b.value
                        ? (v(),
                          w(
                            m,
                            { key: 0, class: "row justify-center oswald" },
                            {
                              default: o(() => [
                                l(f, {
                                  class: "q-mt-lg on-left",
                                  label: "Cancel",
                                  color: "dark",
                                  flat: "",
                                  onClick:
                                    e[4] || (e[4] = (t) => (b.value = !1)),
                                }),
                                l(
                                  f,
                                  {
                                    class: "q-mt-lg on-right",
                                    label: "Confirm Changes",
                                    color: "deep-purple-14",
                                    push: "",
                                    disable: Z.value,
                                    onClick: e[5] || (e[5] = (t) => ee()),
                                  },
                                  null,
                                  8,
                                  ["disable"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : g("", !0),
                    ]),
                    _: 1,
                  }
                ),
                l(P, { class: "q-my-xl" }),
                l(
                  E,
                  { class: "q-pa-md" },
                  {
                    default: o(() => [
                      l(
                        m,
                        { class: "oswald" },
                        {
                          default: o(() => [
                            Ue,
                            a("div", ze, [
                              l(
                                R,
                                {
                                  ref: "addressSelect",
                                  outlined: "",
                                  modelValue: i.value,
                                  "onUpdate:modelValue":
                                    e[6] || (e[6] = (t) => (i.value = t)),
                                  modelModifiers: { trim: !0 },
                                  options: te.value,
                                  label: "Select Address",
                                  style: { width: "60%" },
                                },
                                {
                                  option: o((t) => [
                                    O(
                                      (v(),
                                      w(
                                        G,
                                        {
                                          clickable: "",
                                          onClick: (Je) => le(t.opt),
                                        },
                                        {
                                          default: o(() => [
                                            l(
                                              X,
                                              null,
                                              {
                                                default: o(() => [
                                                  a(
                                                    "div",
                                                    Me,
                                                    d(t.opt.label.first_name) +
                                                      " " +
                                                      d(t.opt.label.last_name),
                                                    1
                                                  ),
                                                  a(
                                                    "span",
                                                    Qe,
                                                    d(t.opt.value.street) +
                                                      d(
                                                        t.opt.value.apt
                                                          ? " " +
                                                              t.opt.value.apt
                                                          : ""
                                                      ) +
                                                      ", " +
                                                      d(t.opt.value.city) +
                                                      " " +
                                                      d(t.opt.value.state) +
                                                      " " +
                                                      d(t.opt.value.zip_code),
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
                                      )),
                                      [[H]]
                                    ),
                                  ]),
                                  "selected-item": o((t) => [
                                    l(
                                      G,
                                      { class: "q-pa-none" },
                                      {
                                        default: o(() => [
                                          l(
                                            X,
                                            null,
                                            {
                                              default: o(() => [
                                                a(
                                                  "div",
                                                  Te,
                                                  d(t.opt.label.first_name) +
                                                    " " +
                                                    d(t.opt.label.last_name),
                                                  1
                                                ),
                                                a(
                                                  "span",
                                                  Ee,
                                                  d(t.opt.value.street) +
                                                    d(
                                                      t.opt.value.apt
                                                        ? " " + t.opt.value.apt
                                                        : ""
                                                    ) +
                                                    ", " +
                                                    d(t.opt.value.city) +
                                                    " " +
                                                    d(t.opt.value.state) +
                                                    " " +
                                                    d(t.opt.value.zip_code),
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
                                      1024
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["modelValue", "options"]
                              ),
                              l(
                                f,
                                {
                                  flat: "",
                                  color: "deep-purple-14",
                                  onClick:
                                    e[7] || (e[7] = (t) => (z.value = !0)),
                                },
                                {
                                  default: o(() => [
                                    a("div", Ie, [
                                      l(_, { name: "add", size: "30px" }),
                                      je,
                                    ]),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            i.value
                              ? (v(),
                                w(
                                  m,
                                  { key: 0, class: "q-pa-none q-pt-lg" },
                                  {
                                    default: o(() => [
                                      l(
                                        c,
                                        {
                                          class: "q-my-md",
                                          label: "First Name",
                                          modelValue: k.value,
                                          "onUpdate:modelValue":
                                            e[8] ||
                                            (e[8] = (t) => (k.value = t)),
                                          modelModifiers: { trim: !0 },
                                          standout:
                                            "bg-grey-3 text-deep-purple-14",
                                          "input-class": "text-dark",
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      l(
                                        c,
                                        {
                                          label: "Last Name",
                                          modelValue: A.value,
                                          "onUpdate:modelValue":
                                            e[9] ||
                                            (e[9] = (t) => (A.value = t)),
                                          modelModifiers: { trim: !0 },
                                          standout:
                                            "bg-grey-3 text-deep-purple-14 ",
                                          "input-class": "text-dark",
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      l(
                                        c,
                                        {
                                          class: "q-my-md",
                                          label: "Street Address",
                                          modelValue: q.value,
                                          "onUpdate:modelValue":
                                            e[10] ||
                                            (e[10] = (t) => (q.value = t)),
                                          modelModifiers: { trim: !0 },
                                          standout:
                                            "bg-grey-3 text-deep-purple-14",
                                          "input-class": "text-dark",
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      l(
                                        c,
                                        {
                                          label:
                                            "Apt, suite, unit, building, floor, etc.",
                                          standout:
                                            "bg-grey-3 text-deep-purple-14",
                                          "input-class": "text-dark",
                                          modelValue: S.value,
                                          "onUpdate:modelValue":
                                            e[11] ||
                                            (e[11] = (t) => (S.value = t)),
                                          modelModifiers: { trim: !0 },
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      l(
                                        c,
                                        {
                                          class: "q-my-md",
                                          label: "City",
                                          standout:
                                            "bg-grey-3 text-deep-purple-14",
                                          "input-class": "text-dark",
                                          modelValue: C.value,
                                          "onUpdate:modelValue":
                                            e[12] ||
                                            (e[12] = (t) => (C.value = t)),
                                          modelModifiers: { trim: !0 },
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      a("div", Be, [
                                        l(
                                          R,
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
                                            modelValue: $.value,
                                            "onUpdate:modelValue":
                                              e[13] ||
                                              (e[13] = (t) => ($.value = t)),
                                            options: I(ue),
                                          },
                                          {
                                            "selected-item": o((t) => [
                                              a("span", De, d(t.opt.label), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["modelValue", "options"]
                                        ),
                                        l(
                                          c,
                                          {
                                            label: "ZIP Code",
                                            modelValue: x.value,
                                            "onUpdate:modelValue":
                                              e[14] ||
                                              (e[14] = (t) => (x.value = t)),
                                            modelModifiers: { trim: !0 },
                                            standout:
                                              "bg-grey-3 text-deep-purple-14",
                                            "input-class": "text-dark",
                                            mask: "#####",
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
                                ))
                              : g("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                      i.value && !Y.value
                        ? (v(),
                          w(
                            m,
                            { key: 0, class: "q-pb-none flex flex-center" },
                            {
                              default: o(() => [
                                l(
                                  f,
                                  {
                                    class: N(
                                      L.value ? "animated shakeX slower" : ""
                                    ),
                                    label: "Remove from account",
                                    flat: "",
                                    color: "red",
                                    onClick: e[15] || (e[15] = (t) => oe()),
                                  },
                                  null,
                                  8,
                                  ["class"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : g("", !0),
                      i.value
                        ? (v(),
                          w(
                            m,
                            { key: 1, class: "flex flex-center oswald" },
                            {
                              default: o(() => [
                                a(
                                  "div",
                                  {
                                    class:
                                      "text-center text-body1 cursor-pointer underline",
                                    style: { width: "200px" },
                                    onClick:
                                      e[16] ||
                                      (e[16] = (t) => (
                                        (i.value = null), (p.value = null)
                                      )),
                                  },
                                  " Cancel "
                                ),
                                l(
                                  f,
                                  {
                                    label: "Save Changes",
                                    color: "deep-purple-14",
                                    style: { width: "200px" },
                                    push: "",
                                    disable: W.value,
                                    onClick: e[17] || (e[17] = (t) => se()),
                                  },
                                  null,
                                  8,
                                  ["disable"]
                                ),
                              ]),
                              _: 1,
                            }
                          ))
                        : g("", !0),
                      p.value
                        ? (v(),
                          w(
                            m,
                            {
                              key: 2,
                              class: N(r.value ? "q-pb-none" : "q-py-none"),
                            },
                            {
                              default: o(() => [
                                a(
                                  "div",
                                  {
                                    class: N([
                                      "text-body2 oswald",
                                      r.value
                                        ? "text-red text-center"
                                        : "text-green",
                                    ]),
                                  },
                                  d(p.value),
                                  3
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"]
                          ))
                        : g("", !0),
                    ]),
                    _: 1,
                  }
                ),
                a("div", Fe, [
                  l(f, {
                    class: "q-pa-md",
                    flat: "",
                    label: "Delete Account",
                    color: "negative",
                    onClick: e[18] || (e[18] = (t) => (j.value = !0)),
                  }),
                ]),
              ]),
              l(
                re,
                {
                  modelValue: j.value,
                  "onUpdate:modelValue":
                    e[20] || (e[20] = (t) => (j.value = t)),
                },
                {
                  default: o(() => [
                    l(
                      E,
                      { style: { width: "100%", "max-width": "700px" } },
                      {
                        default: o(() => [
                          l(
                            m,
                            {
                              class: "text-h6 ys bg-deep-purple-14 text-white",
                            },
                            {
                              default: o(() => [
                                h(
                                  " Are you sure you want to permanently delete your account? "
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          l(
                            m,
                            { class: "oswald text-body1 q-mx-xl" },
                            {
                              default: o(() => [
                                Ye,
                                a("div", Le, [
                                  a("div", null, [
                                    l(_, { name: "remove" }),
                                    h(
                                      " You will lose access to your order history and any saved cart items. "
                                    ),
                                  ]),
                                  a("div", null, [
                                    l(_, { name: "remove" }),
                                    h(
                                      " Any active subscriptions or membership benefits will be canceled. "
                                    ),
                                  ]),
                                  a("div", null, [
                                    l(_, { name: "remove" }),
                                    h(
                                      " You will lose access to your order history and any saved cart items. "
                                    ),
                                  ]),
                                  a("div", null, [
                                    l(_, { name: "remove" }),
                                    h(
                                      " You won't be able to track the status of current or future orders. "
                                    ),
                                  ]),
                                  a("div", null, [
                                    l(_, { name: "remove" }),
                                    h(
                                      " Your personal information will be permanently removed from our system and will not be used for future transactions. "
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          l(
                            ce,
                            { class: "q-pb-md", align: "right" },
                            {
                              default: o(() => [
                                O(
                                  l(
                                    f,
                                    {
                                      label: "cancel",
                                      push: "",
                                      color: "dark",
                                      style: {
                                        width: "100%",
                                        "max-width": "150px",
                                      },
                                    },
                                    null,
                                    512
                                  ),
                                  [[H]]
                                ),
                                l(
                                  f,
                                  {
                                    class: N(
                                      D.value ? "animated shakeX slower" : ""
                                    ),
                                    label: "delete",
                                    style: {
                                      width: "100%",
                                      "max-width": "150px",
                                    },
                                    flat: "",
                                    color: "negative",
                                    onClick: e[19] || (e[19] = (t) => F()),
                                  },
                                  null,
                                  8,
                                  ["class"]
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
                },
                8,
                ["modelValue"]
              ),
              l(
                ie,
                {
                  modelValue: z.value,
                  "onUpdate:modelValue":
                    e[21] || (e[21] = (t) => (z.value = t)),
                  onAddAddress: ae,
                },
                null,
                8,
                ["modelValue"]
              ),
            ]),
            l(me),
          ],
          64
        )
      );
    },
  };
export { Ge as default };
