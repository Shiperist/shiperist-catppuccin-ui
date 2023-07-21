import { a as p, j as e } from "./jsx-runtime-50e9c51e.js";
import "./index-ebeaab24.js";
const o = ({
    leadingElement: a,
    trailingElement: t,
    appearance: x = "outline",
    isLoading: g = !1,
    disabled: r = !1,
    error: y = !1,
    caption: l,
    className: b = "",
    ...v
  }) => {
    const h = {
        outline: "ring-0 border-1 border-overlay1 rounded-lg",
        underline: "ring-0 border-0 border-b border-overlay1",
      }[x],
      C = `flex flex-col ${b}`,
      N = `bg-transparent outline-none flex-grow placeholdersubtext2 text-text mx-1 ${r ? "cursor-not-allowed" : ""}`,
      w = `flex w-full h-full flex-row px-4 bg-transparent ${h} h-12 py-2 ${
        y ? "border-red hover:border-red" : `${r ? "" : "hover:border-lavender"}`
      } ${r ? "opacity-50 cursor-not-allowed" : ""}`,
      s = "textoverlay1",
      _ = "pt-2 text-sm text-text",
      i = g
        ? e("svg", {
            className: "animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: e("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }),
          })
        : t && (typeof t == "string" ? t : e(t, { className: "" })),
      c = typeof a == "string" ? a : a && e(a, { className: "" });
    return p("div", {
      className: C,
      children: [
        p("div", {
          className: w,
          children: [
            c && e("div", { className: s, children: c }),
            e("input", { className: N, disabled: r, ...v }),
            i && e("div", { className: s, children: i }),
          ],
        }),
        l && e("p", { className: _, children: l }),
      ],
    });
  },
  f = o;
o.displayName = "TextInput";
try {
  (o.displayName = "TextInput"),
    (o.__docgenInfo = {
      description: "",
      displayName: "TextInput",
      props: {
        leadingElement: {
          defaultValue: null,
          description: "",
          name: "leadingElement",
          required: !1,
          type: { name: "string | ComponentClass<any, any> | FunctionComponent<any>" },
        },
        trailingElement: {
          defaultValue: null,
          description: "",
          name: "trailingElement",
          required: !1,
          type: { name: "string | ComponentClass<any, any> | FunctionComponent<any>" },
        },
        isLoading: {
          defaultValue: { value: "false" },
          description: "",
          name: "isLoading",
          required: !1,
          type: { name: "boolean" },
        },
        disabled: {
          defaultValue: { value: "false" },
          description: "",
          name: "disabled",
          required: !1,
          type: { name: "boolean" },
        },
        error: {
          defaultValue: { value: "false" },
          description: "",
          name: "error",
          required: !1,
          type: { name: "boolean" },
        },
        caption: { defaultValue: null, description: "", name: "caption", required: !1, type: { name: "string" } },
        appearance: {
          defaultValue: { value: "outline" },
          description: "",
          name: "appearance",
          required: !1,
          type: { name: "enum", value: [{ value: '"outline"' }, { value: '"underline"' }] },
        },
      },
    });
} catch {}
const V = {
    title: "Example/TextInput",
    component: f,
    argTypes: {
      isLoading: { control: "boolean" },
      error: { control: "boolean" },
      disabled: { control: "boolean" },
      caption: { control: "text" },
      appearance: { control: { type: "select", options: ["outline", "underline"] } },
      leadingElement: { control: "object" },
      trailingElement: { control: "object" },
    },
  },
  I = (a) => e(f, { ...a }),
  n = I.bind({});
n.args = { isLoading: !1, error: !1, disabled: !1, caption: "This is a caption", appearance: "outline" };
var d, u, m;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((d = n.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: "args => <TextInput {...args} />",
      ...((m = (u = n.parameters) == null ? void 0 : u.docs) == null ? void 0 : m.source),
    },
  },
};
const $ = ["Default"];
export { n as Default, $ as __namedExportsOrder, V as default };
//# sourceMappingURL=textinput.stories-763a897a.js.map
