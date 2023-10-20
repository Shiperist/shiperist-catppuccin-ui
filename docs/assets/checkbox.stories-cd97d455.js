import{a as p,j as e}from"./jsx-runtime-86dfebf6.js";import{c as C}from"./utils-3450518e.js";import{R as J,r as u}from"./index-1b03fe98.js";import{b as K}from"./icons-30e71a13.js";import{c as M}from"./constants-6f1e8c11.js";import{H as k}from"./horizontal-layout-d76e9e8d.js";import{C as c}from"./caption-0d8799a8.js";import{C as P}from"./card-styles-1af7731f.js";import{T as f}from"./text-2fb250cc.js";import{D as Q}from"./divider-styles-b25e09be.js";import{C as X}from"./caption2-badc0d11.js";const o=J.forwardRef((a,n)=>{const{disabled:r,variant:E="base",required:O,value:V,size:_="medium",checked:t,onChange:x,className:B="",children:F,...v}=a,i=t!==void 0,[l,b]=u.useState(i?t:!1),U=C(Y(r),B),W=Z(M(E),r,_),$=ee(r);u.useEffect(()=>{i&&b(t)},[i,t]);const A=G=>{const g=!l;b(g),i&&x&&x(G,g)};return p("label",{htmlFor:v.id,className:U,children:[e("input",{ref:n,checked:l,required:O,onClick:()=>b(!l),onChange:A,type:"checkbox",value:V,disabled:r,className:"peer sr-only",...v}),e("div",{className:W,children:l&&e(K,{className:$})}),F]})});o.displayName="Checkbox";const y={small:"w-3 h-3",medium:"w-4 h-4",large:"w-5 h-5"},Y=a=>C("group relative inline-flex cursor-pointer items-center",{"cursor-not-allowed opacity-50":a}),Z=(a,n,r)=>C("border-overlay0 bg-mantle border justify-center items-center flex transition-all peer-checked:border",`peer-checked:bg-${a} peer-checked:border-${a}`,y[r]||y.medium,{"group-hover:border-overlay2 active:translate-y-0.5":!n,"peer-checked:bg-surface2 peer-checked:border-surface2":n}),ee=a=>C("stroke-surface1 h-4 w-4 transition-all delay-200",{"stroke-overlay1":a}),pe={title:"Forms/Checkbox",component:o,argTypes:{disabled:{control:"boolean",description:"Whether the checkbox is disabled."},required:{control:"boolean",description:"Whether the checkbox is required."},variant:{control:{type:"select"},description:"Determines the color variant of the checkbox."},size:{control:{type:"select"},description:"Determines the size of the checkbox."},value:{control:"number",description:"Determines the value of the checkbox."},checked:{control:"boolean",description:"Determines if the checkbox is checked or not."},onChange:{control:"object",description:"Callback function triggered when the value of the checkbox changes."}}},ae=a=>{const[n,r]=u.useState(!1);return p(P,{style:{gap:16},children:[e(f,{children:"Uncontrolled checkboxes:"}),p(k,{style:{gap:16},children:[e(o,{...a,children:e(c,{className:"ml-2",children:"Checkbox"})}),e(o,{...a,checked:!0,children:e(c,{className:"ml-2",children:"Checkbox"})})]}),e(Q,{children:"OR"}),e(f,{children:"Controlled checkbox:"}),e(k,{style:{gap:16},children:e(o,{...a,checked:n,onChange:()=>r(!n),children:e(c,{className:"ml-2",children:"Checkbox"})})}),p(X,{children:["Checkbox is: ",n.toString()]})]})},s=ae.bind({});s.args={disabled:!1,variant:"success",required:!1,checked:!1,size:"medium",value:""};const d=()=>e(k,{style:{gap:10},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(n=>e(o,{variant:n.variant,checked:!0,children:e(c,{className:"ml-2",children:"Checkbox"})},n.id))}),h=()=>e(k,{style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(n=>e(o,{size:n.size,checked:!0,children:e(c,{className:"ml-2",children:"Checkbox"})},n.id))}),m=()=>e(o,{disabled:!0,children:e(c,{className:"ml-2",children:"Checkbox"})});var z,N,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(false);
  return <Card style={{
    gap: 16
  }}>
      <Text>Uncontrolled checkboxes:</Text>
      <HorizontalLayout style={{
      gap: 16
    }}>
        <Checkbox {...args}>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
        <Checkbox {...args} checked>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
      </HorizontalLayout>
      <Divider>OR</Divider>
      <Text>Controlled checkbox:</Text>
      <HorizontalLayout style={{
      gap: 16
    }}>
        <Checkbox {...args} checked={isChecked} onChange={() => setIsChecked(!isChecked)}>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>
      </HorizontalLayout>
      <Caption2>Checkbox is: {isChecked.toString()}</Caption2>
    </Card>;
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var D,w,H;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    variant: "base"
  }, {
    id: 2,
    variant: "success"
  }, {
    id: 3,
    variant: "warning"
  }, {
    id: 4,
    variant: "info"
  }, {
    id: 5,
    variant: "danger"
  }];
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Checkbox key={variant.id} variant={variant.variant} checked>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>)}
    </HorizontalLayout>;
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var L,T,I;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
      {variants.map(variant => <Checkbox key={variant.id} size={variant.size} checked>
          <Caption className="ml-2">Checkbox</Caption>
        </Checkbox>)}
    </HorizontalLayout>;
}`,...(I=(T=h.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var j,R,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Checkbox disabled>
      <Caption className="ml-2">Checkbox</Caption>
    </Checkbox>;
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ke=["Default","Variants","Sizes","DisabledState"];export{s as Default,m as DisabledState,h as Sizes,d as Variants,ke as __namedExportsOrder,pe as default};
//# sourceMappingURL=checkbox.stories-cd97d455.js.map
