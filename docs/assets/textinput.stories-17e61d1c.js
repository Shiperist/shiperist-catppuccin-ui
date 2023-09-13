import{j as e,a as c}from"./jsx-runtime-86dfebf6.js";import{c as o}from"./utils-111ae462.js";import{R as Ce,r as C}from"./index-1b03fe98.js";import{E as Ee,V as q,a as We,L as Pe}from"./icons-820e6342.js";import{V as z}from"./vertical-layout-a7cca7b2.js";const a=Ce.forwardRef((s,r)=>{const{leadingElement:n,trailingElement:I,appearance:L="outline",labelStyle:D="default",errorIcon:xe,required:E,size:W="medium",type:l="text",placeholder:ge,isLoading:fe,disabled:p,error:u,caption:P,label:i,className:be="",...S}=s,[ye,A]=C.useState(!1),[N,Ie]=C.useState(!1),[Se,Te]=C.useState(l),we=o(Ae,be),Ve=qe(W,p,u,ye,L),ve=je(p,u),m=F[W]||F.medium,ze=ke(i,D);let h=I;fe?h=e(Pe,{className:m}):u&&xe?h=e(Ee,{className:o(m,"stroke-red")}):l==="password"&&(h=e(q,{className:m}));const Le=()=>{A(!0)},De=()=>{A(!1)},Ne=()=>{Ie(!N),Te(N?l:"text")};return c("div",{className:we,style:i&&i.length>0?{...S.style,gap:2}:void 0,...S,children:[c("label",{htmlFor:S.id,className:i&&D==="border"?ze:"cursor-text",children:[e("span",{className:D==="border"?"text-xs":"text-sm",children:i})," ",i&&E&&e("span",{className:"text-red",children:"*"})]}),c("div",{className:Ve,children:[n&&e("div",{className:o("stroke-overlay1"),children:n}),e("input",{ref:r,className:ve,type:Se,placeholder:ge,disabled:p,required:E,onFocus:Le,onBlur:De,...S}),h&&e("div",{onClick:!p&&l==="password"?Ne:void 0,className:o("stroke-overlay1",{"cursor-pointer":l==="password","cursor-not-allowed":p}),children:l==="password"?N?e(q,{className:m}):e(We,{className:m}):h})]}),P&&e("p",{className:o("pt-2 text-sm",{"text-red":u,"text-text":!u}),children:P})]})});a.displayName="TextInput";const j={outline:"ring-0 border rounded-xl",underline:"ring-0 border-b",filled:"ring-0 border-b rounded-xl bg-surface0"},k={small:"text-xs h-7",medium:"text-sm h-8",large:"text-md h-9"},F={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6",xlarge:"h-7 w-7"},Ae="relative flex flex-col transition",qe=(s,r,n,I,L)=>o("flex h-full w-full flex-row items-center px-4 transition-all duration-150 ease-in-out",k[s]||k.medium,j[L]||j.outline,{"cursor-not-allowed opacity-50":r,"hover:border-overlay2 focus:border-overlay2":!r&&!I&&!n,"border-red":n,"border-overlay0":!n,"border-overlay2":I&&!n}),je=(s,r)=>o("mx-1 flex-grow bg-transparent outline-none",{"cursor-not-allowed":s,"text-red":r,"text-text":!r}),ke=(s,r)=>s&&r&&o("z-10 left-2 -top-3 bg-base absolute cursor-text px-2"),He={title:"Forms/TextInput",component:a,argTypes:{isLoading:{control:"boolean",description:"Whether the text input is loading."},error:{control:"boolean",description:"Whether the text input has error."},disabled:{control:"boolean",description:"Whether the text input is disabled."},errorIcon:{control:"boolean",description:"Whether to show the error icon when error is set to true."},required:{control:"boolean",description:"Whether the text input is required."},caption:{control:"text",description:"Determines the caption text of the text input. Shown red if error is set to true"},placeholder:{control:"text",description:"Determines the placeholder of the text input."},label:{control:"text",description:"Determines the label of the text input."},type:{control:{type:"select"},description:"Determines the type of the text input."},size:{control:{type:"select"},description:"Determines the size of the text input."},appearance:{control:{type:"select"},description:"Determines the appearance style of the text input."},labelStyle:{control:{type:"select"},description:"Determines the label style of the text input."},leadingElement:{control:"object",description:"Sets an element/s on the left side of the text input."},trailingElement:{control:"object",description:"Sets an element/s on the right side of the text input."}}},d=s=>e(a,{...s,style:{width:"32rem"}}),t=d.bind({});t.args={isLoading:!1,error:!1,disabled:!1,caption:"",appearance:"outline",required:!1,size:"medium",label:"",type:"text",placeholder:"",errorIcon:!1,labelStyle:"default"};const x=d.bind({});x.args={...t.args,isLoading:!0};const g=d.bind({});g.args={...t.args,error:!0,caption:"This is a error/caption message",errorIcon:!0};const f=d.bind({});f.args={...t.args,caption:"This is a caption"};const b=d.bind({});b.args={...t.args,placeholder:"This is a placeholder"};const T=()=>c(z,{style:{gap:16,width:"32rem"},children:[e(a,{...t.args,label:"This is a label",defaultValue:"Some text"}),e(a,{...t.args,labelStyle:"border",label:"This is a label",defaultValue:"Some text"}),e(a,{...t.args,required:!0,label:"This is a label",defaultValue:"Some text"})]}),w=()=>c(z,{style:{gap:12,width:"32rem"},children:[e(a,{...t.args,defaultValue:"Some text"}),e(a,{...t.args,appearance:"underline",defaultValue:"Some text"}),e(a,{...t.args,appearance:"filled",defaultValue:"Some text"})]}),V=()=>e(z,{style:{gap:10,width:"32rem"},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(r=>e(a,{size:r.size,defaultValue:"Some text"},r.id))}),v=()=>c(z,{style:{gap:12,width:"32rem"},children:[e(a,{...t.args,placeholder:"Text"}),e(a,{...t.args,type:"password",placeholder:"Password"})]}),y=d.bind({});y.args={...t.args,disabled:!0};var B,R,_;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...(_=(R=t.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var O,H,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 16,
    width: "32rem"
  }}>
      <TextInput {...Default.args} label="This is a label" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} labelStyle="border" label="This is a label" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} required label="This is a label" defaultValue="Some text"></TextInput>
    </VerticalLayout>;
}`,...(re=(te=T.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,oe;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 12,
    width: "32rem"
  }}>
      <TextInput {...Default.args} defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} appearance="underline" defaultValue="Some text"></TextInput>
      <TextInput {...Default.args} appearance="filled" defaultValue="Some text"></TextInput>
    </VerticalLayout>;
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const variants: any[] = [{
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
    gap: 10,
    width: "32rem"
  }}>
      {variants.map(variant => <TextInput key={variant.id} size={variant.size} defaultValue="Some text"></TextInput>)}
    </VerticalLayout>;
}`,...(ie=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 12,
    width: "32rem"
  }}>
      <TextInput {...Default.args} placeholder="Text"></TextInput>
      <TextInput {...Default.args} type="password" placeholder="Password"></TextInput>
    </VerticalLayout>;
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,me,he;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`args => <TextInput {...args} style={{
  width: "32rem"
}} />`,...(he=(me=y.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Ge=["Default","LoadingState","Error","WithCaption","WithPlaceholder","LabelAppearence","Appearences","Sizes","Types","DisabledState"];export{w as Appearences,t as Default,y as DisabledState,g as Error,T as LabelAppearence,x as LoadingState,V as Sizes,v as Types,f as WithCaption,b as WithPlaceholder,Ge as __namedExportsOrder,He as default};
//# sourceMappingURL=textinput.stories-17e61d1c.js.map
