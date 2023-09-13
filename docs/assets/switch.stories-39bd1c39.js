import{a as C,j as t}from"./jsx-runtime-86dfebf6.js";import{c as j}from"./utils-111ae462.js";import{R as O,r as h}from"./index-1b03fe98.js";import{c as M}from"./constants-6f1e8c11.js";import{H as E}from"./horizontal-layout-44b18cc9.js";import{C as u}from"./caption-5071ddbe.js";import{V as q}from"./vertical-layout-a7cca7b2.js";import{C as B}from"./caption2-5f22c948.js";const i=O.forwardRef(({disabled:e,variant:a="base",size:r="medium",value:s,checked:o,appearance:T="alternative",onChange:S,className:P="",children:W,...g},_)=>{const l=o!==void 0,[f,w]=h.useState(l?o:!1);h.useEffect(()=>{l&&w(o)},[l,o]);const A=F=>{const k=!f;w(k),l&&S&&S(F,k)};return C("label",{htmlFor:g.id,className:G(e),children:[t("input",{ref:_,type:"checkbox",value:s,onClick:()=>w(!f),onChange:A,checked:f,disabled:e,className:"peer sr-only",...g}),t("div",{className:J(r,T,M(a),e)}),W]})});i.displayName="Switch";const n={small:4,medium:5,large:6},y={small:3,medium:4,large:5},G=e=>j("relative inline-flex items-center",{"cursor-not-allowed opacity-50":e,"cursor-pointer":!e}),J=(e,a,r,s)=>j(`bg-mantle after:bg-overlay0 rounded-full transition-all after:absolute after:left-[1.5px] after:top-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] peer-checked:border peer-checked:after:translate-x-full after:h-${n[e]-1||n.medium-1} after:w-${n[e]-1||n.medium-1} after:transition-all after:duration-300`,"h-"+n[e],`w-${(n[e]||n.medium)+(y[e]||y.medium)}`,a==="alternative"?`peer-checked:border-${r} peer-checked:after:bg-${r} after:items-center`:`peer-checked:bg-${r} peer-checked:after:bg-white`,{"peer-checked:after:bg-surface2 peer-checked:border-surface2":s}),re={title:"Forms/Switch",component:i,argTypes:{disabled:{control:"boolean",description:"Whether the switch is disabled."},variant:{control:{type:"select"},description:"Determines the color variant of the switch."},appearance:{control:{type:"select"},description:"Determines the appearance style of the switch."},size:{control:{type:"select"},description:"Determines the size of the switch."},checked:{control:"boolean",description:"Whether is the switch checked or not."},value:{control:"text",description:"Determines the value of the switch."},onChange:{control:"object",description:"Callback function triggered when the value of the switch changes."}}},K=e=>{const[a,r]=h.useState(!1),s=h.useRef(null);return C(q,{style:{gap:8},children:[t(i,{ref:s,...e,onClick:()=>{s.current&&r(s.current.checked)},children:t(u,{className:"ml-2",children:"Switch"})}),C(B,{children:["Switch is: ",a.toString()]})]})},c=K.bind({});c.args={disabled:!1,variant:"success",appearance:"alternative",size:"medium",checked:!1};const d=()=>t(E,{style:{gap:10},children:[{id:1,appearance:"filled"},{id:2,appearance:"alternative"}].map(a=>t(i,{appearance:a.appearance,size:"medium",children:t(u,{className:"ml-2",children:"Switch"})},a.id))}),p=()=>t(E,{style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(a=>t(i,{size:a.size,children:t(u,{className:"ml-2",children:"Switch"})},a.id))}),m=()=>t(i,{disabled:!0,children:t(u,{className:"ml-2",children:"Switch"})});var v,b,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  const switchRef = useRef<HTMLInputElement | null>(null);
  return <VerticalLayout style={{
    gap: 8
  }}>
      <Switch ref={switchRef} {...args} onClick={() => {
      switchRef.current && setIsChecked(switchRef.current.checked);
    }}>
        <Caption className="ml-2">Switch</Caption>
      </Switch>
      <Caption2>Switch is: {isChecked.toString()}</Caption2>
    </VerticalLayout>;
}`,...(z=(b=c.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var N,x,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    appearance: "filled"
  }, {
    id: 2,
    appearance: "alternative"
  }];
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Switch key={variant.id} appearance={variant.appearance} size="medium">
          <Caption className="ml-2">Switch</Caption>
        </Switch>)}
    </HorizontalLayout>;
}`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var L,D,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Switch key={variant.id} size={variant.size}>
          <Caption className="ml-2">Switch</Caption>
        </Switch>)}
    </HorizontalLayout>;
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var $,I,V;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Switch disabled>
      <Caption className="ml-2">Switch</Caption>
    </Switch>;
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const se=["Default","Appearances","Sizes","DisabledState"];export{d as Appearances,c as Default,m as DisabledState,p as Sizes,se as __namedExportsOrder,re as default};
//# sourceMappingURL=switch.stories-39bd1c39.js.map
