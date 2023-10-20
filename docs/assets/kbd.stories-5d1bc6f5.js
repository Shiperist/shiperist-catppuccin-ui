import{j as e,a as l}from"./jsx-runtime-86dfebf6.js";import{c as N}from"./utils-3450518e.js";import{R as V}from"./index-1b03fe98.js";import{C as W}from"./icons-30e71a13.js";import{H as t}from"./horizontal-layout-d76e9e8d.js";import{I as E}from"./icon-styles-73ea26bc.js";const r=V.forwardRef((a,m)=>{const{className:A="",size:_="medium",appearance:w="filled",icon:p,children:M,...P}=a;return e("div",{ref:m,className:N(O(_,w),A),...P,children:p?e("div",{className:"stroke-overlay2",children:p}):e("div",{children:M})})});r.displayName="Kbd";const u={small:"text-xs px-2 py-1",medium:"text-sm px-3 py-1.5",large:"text-md px-4 py-2"},b={filled:"bg-mantle border-surface1 border-b-2",ghost:"bg-transparent",outline:"border-surface1 border-b-2"},O=(a,m)=>N("rounded-xl border text-text border-transparent w-fit h-fit flex items-center justify-center mx-1.5",u[a]||u.medium,b[m]||b.filled),X={title:"Components/Kbd",component:r,argTypes:{appearance:{control:{type:"select"},description:"Determines the appearance style of the kbd."},size:{control:{type:"select"},description:"Determines the size of the kbd."},children:{control:"text",description:"Determines the text of the kbd"}}},q=a=>e(r,{...a}),s=q.bind({});s.args={children:"Shift",size:"medium",appearance:"filled"};const o=()=>l(t,{children:[e(r,{size:"small",children:"Shift"}),e(r,{size:"medium",children:"Shift"}),e(r,{size:"large",children:"Shift"})]}),n=()=>l(t,{children:[e(r,{appearance:"filled",children:"Shift"}),e(r,{appearance:"ghost",children:"Shift"}),e(r,{appearance:"outline",children:"Shift"})]}),i=()=>l(t,{children:[e(r,{size:"small",children:"CTRL"}),"+",e(r,{size:"small",children:"C"}),"/",e(r,{size:"small",children:"CTRL"}),"+",e(r,{size:"small",children:"V"})]}),c=()=>l(t,{children:["Press ",e(r,{size:"small",children:"M"}),"to open a map"]}),d=()=>e(t,{children:e(r,{size:"small",icon:e(E,{icon:e(W,{})})})});var h,f,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Kbd {...args}></Kbd>",...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var K,y,S;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <HorizontalLayout>
      <Kbd size="small">Shift</Kbd>
      <Kbd size="medium">Shift</Kbd>
      <Kbd size="large">Shift</Kbd>
    </HorizontalLayout>;
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,g,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <HorizontalLayout>
      <Kbd appearance="filled">Shift</Kbd>
      <Kbd appearance="ghost">Shift</Kbd>
      <Kbd appearance="outline">Shift</Kbd>
    </HorizontalLayout>;
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var L,H,I;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <HorizontalLayout>
      <Kbd size="small">CTRL</Kbd>+<Kbd size="small">C</Kbd>/<Kbd size="small">CTRL</Kbd>+<Kbd size="small">V</Kbd>
    </HorizontalLayout>;
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var k,T,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <HorizontalLayout>
      Press <Kbd size="small">M</Kbd>to open a map
    </HorizontalLayout>;
}`,...(R=(T=c.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,j,v;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <HorizontalLayout>
      <Kbd size="small" icon={<Icon icon={<CommandIcon></CommandIcon>}></Icon>}></Kbd>
    </HorizontalLayout>;
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const Y=["Default","Sizes","Appearances","KeyCombinations","InText","WithIcon"];export{n as Appearances,s as Default,c as InText,i as KeyCombinations,o as Sizes,d as WithIcon,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=kbd.stories-5d1bc6f5.js.map
