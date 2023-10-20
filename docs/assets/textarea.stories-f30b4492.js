import{j as t}from"./jsx-runtime-86dfebf6.js";import{c as A}from"./utils-3450518e.js";import{R as G}from"./index-1b03fe98.js";import{V as N}from"./vertical-layout-78c62444.js";const s=G.forwardRef((e,r)=>{const{className:d="",value:_,resize:j="none",defaultValue:k,onChange:c,disabled:m,placeholder:H,size:P="medium",children:E,...F}=e,O=u=>{if(c){const B={value:u.target.value};c(u,B)}},q=A(I(P,j,m),d);return t("textarea",{ref:r,defaultValue:_||k,placeholder:H,disabled:m,onChange:O,className:q,...F,children:E})});s.displayName="Textarea";const p={small:"text-sm h-8",medium:"text-md h-12",large:"text-lg h-16"},h={none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},I=(e,r,d)=>A(p[e]||p.medium,h[r]||h.none,"bg-base border-overlay0 text-text focus:border-overlay1 hover:border-overlay1 form-control w-full appearance-none rounded-xl border px-4 pt-1 outline-none",{"cursor-not-allowed opacity-50":d}),U={title:"Forms/Textarea",component:s,argTypes:{disabled:{control:"boolean",description:"Whether the text area is disabled."},placeholder:{control:"text",description:"Determines the placeholder of the text area."},value:{control:"text",description:"Determines the value of the text area."},defaultValue:{control:"text",description:"Determines the default value of the text area."},size:{control:{type:"select"},description:"Determines the size of the text area."},resize:{control:{type:"select"},description:"Determines the size of the text area."}}},W=e=>t(s,{...e,style:{width:"32rem"}}),a=W.bind({});a.args={disabled:!1,placeholder:"",value:"",defaultValue:"",size:"medium",resize:"none"};const o=()=>t("div",{style:{width:"32rem"},children:t(s,{placeholder:"This is a placeholder"})}),n=()=>{const e=[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}];return t(N,{style:{gap:8,width:"32rem"},children:e==null?void 0:e.map(r=>t(s,{size:r.size,defaultValue:"Some text"},r.id))})},l=()=>{const e=[{id:1,resize:"none"},{id:2,resize:"vertical"},{id:3,resize:"horizontal"},{id:4,resize:"both"}];return t(N,{style:{gap:8,width:"32rem"},children:e==null?void 0:e.map(r=>t(s,{resize:r.resize,style:{minWidth:"32rem",minHeight:"4rem"},defaultValue:"Some text"},r.id))})},i=W.bind({});i.args={...a.args,disabled:!0};var z,x,y;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`args => <Textarea {...args} style={{
  width: "32rem"
}} />`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <div style={{
    width: "32rem"
  }}>
      <Textarea placeholder="This is a placeholder"></Textarea>
    </div>;
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,S,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const sizes: any[] = [{
    id: 1,
    size: "small"
  }, {
    id: 2,
    size: "medium"
  }, {
    id: 3,
    size: "large"
  }];
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {sizes?.map(size => <Textarea key={size.id} size={size.size} defaultValue="Some text"></Textarea>)}
    </VerticalLayout>;
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var V,w,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const resizes: any[] = [{
    id: 1,
    resize: "none"
  }, {
    id: 2,
    resize: "vertical"
  }, {
    id: 3,
    resize: "horizontal"
  }, {
    id: 4,
    resize: "both"
  }];
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {resizes?.map(resize => <Textarea key={resize.id} resize={resize.resize} style={{
      minWidth: "32rem",
      minHeight: "4rem"
    }} defaultValue="Some text"></Textarea>)}
    </VerticalLayout>;
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var C,R,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Textarea {...args} style={{
  width: "32rem"
}} />`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const X=["Default","Placeholder","Sizes","Resize","DisabledState"];export{a as Default,i as DisabledState,o as Placeholder,l as Resize,n as Sizes,X as __namedExportsOrder,U as default};
//# sourceMappingURL=textarea.stories-f30b4492.js.map
