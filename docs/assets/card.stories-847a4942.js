import{j as a,a as S}from"./jsx-runtime-50e9c51e.js";import{C as r}from"./card-ccf8b20b.js";import{T as s}from"./text-6b785b20.js";import"./index-ebeaab24.js";import"./functions-dd876bee.js";const D={title:"Example/Card",component:r,argTypes:{appearance:{control:{type:"select",options:["filled","shadow","outline"]}},orientation:{control:{type:"select",options:["horizontal","vertical"]}}}},w=T=>S(r,{...T,style:{gap:4},children:[a(s,{children:"Card content"}),a(s,{children:"Card content"})]}),e=w.bind({});e.args={appearance:"outline",orientation:"vertical"};const t=()=>a(r,{appearance:"filled",children:"Card content"}),o=()=>a(r,{appearance:"outline",children:"Card content"}),n=()=>a(r,{appearance:"shadow",children:"Card content"});var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => <Card {...args} style={{
  gap: 4
}}>
    <Text>Card content</Text>
    <Text>Card content</Text>
  </Card>`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:'() => <Card appearance="filled">Card content</Card>',...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,C,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'() => <Card appearance="outline">Card content</Card>',...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'() => <Card appearance="shadow">Card content</Card>',...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const E=["Default","Filled","Outline","Shadow"];export{e as Default,t as Filled,o as Outline,n as Shadow,E as __namedExportsOrder,D as default};
//# sourceMappingURL=card.stories-847a4942.js.map
