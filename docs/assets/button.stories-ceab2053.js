import { j as r, F as f } from "./jsx-runtime-50e9c51e.js";
import { B as u } from "./button-7d36c7fe.js";
import "./index-ebeaab24.js";
const w = {
    title: "Example/Button",
    component: u,
    argTypes: {
      onClick: { action: "clicked" },
      icon: { control: "object" },
      iconPosition: { control: { type: "select", options: ["left", "right"] } },
      isLoading: { control: "boolean" },
      disabled: { control: "boolean" },
      tooltip: { control: "text" },
      variant: { control: { type: "select", options: ["success", "warning", "danger", "info"] } },
      size: { control: { type: "select", options: ["small", "medium", "large", "xlarge"] } },
      children: { control: "text" },
    },
  },
  s = (h) => r(u, { ...h }),
  o = s.bind({});
o.args = {
  icon: r(f, {
    children: r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "lucide lucide-heart",
      children: r("path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      }),
    }),
  }),
  iconPosition: "left",
  isLoading: !1,
  tooltip: "",
  variant: "success",
  size: "medium",
  disabled: !1,
  children: "Click Me",
};
const t = s.bind({});
t.args = { ...o.args, iconPosition: "right" };
const e = s.bind({});
e.args = { ...o.args, isLoading: !0 };
var a, n, i;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((a = o.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: "args => <Button {...args} />",
      ...((i = (n = o.parameters) == null ? void 0 : n.docs) == null ? void 0 : i.source),
    },
  },
};
var c, l, d;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((c = t.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: "args => <Button {...args} />",
      ...((d = (l = t.parameters) == null ? void 0 : l.docs) == null ? void 0 : d.source),
    },
  },
};
var g, p, m;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((g = e.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: "args => <Button {...args} />",
      ...((m = (p = e.parameters) == null ? void 0 : p.docs) == null ? void 0 : m.source),
    },
  },
};
const B = ["Default", "WithIconOnRight", "LoadingState"];
export { o as Default, e as LoadingState, t as WithIconOnRight, B as __namedExportsOrder, w as default };
//# sourceMappingURL=button.stories-ceab2053.js.map
