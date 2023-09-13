import{a as R,j as n,F as L}from"./jsx-runtime-86dfebf6.js";import{R as c,r as z}from"./index-1b03fe98.js";import{c as p}from"./utils-111ae462.js";import{c as M,o as w}from"./constants-6f1e8c11.js";import{C as f}from"./caption-5071ddbe.js";import{C as P}from"./caption2-5f22c948.js";const i=c.forwardRef((a,e)=>{const{disabled:r,variant:s="base",required:o,name:b,size:v="medium",checked:g,value:k,onChange:t,className:W="",children:A,...y}=a,B=C=>{const{checked:J,value:K}=C.target;t&&t(K,J,C)},H=p(Q(r,M(s),v),W),I=U(r);return R("label",{htmlFor:y.id,className:I,children:[n("input",{name:b,ref:e,required:o,checked:g,onChange:B,type:"radio",value:k,disabled:r,className:H,...y}),A]})});i.displayName="Radio";const h=c.forwardRef((a,e)=>{const{orientation:r,className:s="",disabled:o,name:b,children:v,...g}=a,k=w[r]||w.vertical;return n("div",{className:p(`${k} ${s}`),ref:e,...g,children:c.Children.map(v,t=>c.isValidElement(t)&&t.type===i?c.cloneElement(t,{name:b,disabled:o}):t)})});h.displayName="RadioGroup";const N={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},S={small:"before:w-3 before:h-3 after:w-3 after:h-3 checked:after:h-1.5 checked:after:w-1.5",medium:"before:w-4 before:h-4 after:w-4 after:h-4 checked:after:h-2.5 checked:after:w-2.5",large:"before:w-5 before:h-5 after:w-5 after:h-5 checked:after:h-3.5 checked:after:w-3.5"},Q=(a,e,r)=>p({"checked:border-surface2 checked:after:border-surface2 checked:after:bg-surface2 checked:focus:border-surface2 border-surface0":a},`relative float-left appearance-none rounded-full border-2 before:pointer-events-none before:absolute before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] after:absolute after:z-[1] after:block after:rounded-full after:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:rounded-full checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] checked:focus:before:scale-100 checked:border-${e} checked:after:border-${e} checked:after:bg-${e} checked:focus:border-${e} border-surface0`,N[r]||N.medium,S[r]||S.medium),U=a=>p("relative inline-flex items-center",{"cursor-not-allowed opacity-50":a,"cursor-pointer":!a}),oe={title:"Forms/Radio",component:i,argTypes:{disabled:{control:"boolean",description:"Whether the radio is disabled."},required:{control:"boolean",description:"Whether the radio is required."},variant:{control:{type:"select"},description:"Determines the color variant of the radio."},size:{control:{type:"select"},description:"Determines the size of the radio."},value:{control:"number",description:"Determines the value of the radio."},checked:{control:"boolean",description:"Determines if the radio is checked or not."},onChange:{control:"object",description:"Callback function triggered when the value of the radio changes."},name:{control:"name",description:"Determines the name of the radio, it's recommended to use the RadioGroup component directly."}}},X=a=>{const e=[{value:"radio1",label:"Radio 1"},{value:"radio2",label:"Radio 2"}],[r,s]=z.useState("");return R(L,{children:[n(h,{name:"radios",className:"w-32",style:{gap:8},disabled:a.disabled,children:e.map(o=>z.createElement(i,{...a,key:o.value,value:o.value,checked:r===o.value,onChange:()=>s(o.value)},n(f,{className:"ml-2",children:o.label})))}),R(P,{className:"mt-2",children:["Selected value: ",r||"none"]})]})},d=X.bind({});d.args={disabled:!1,variant:"success",required:!1,checked:!1,size:"medium",name:"",value:""};const l=()=>n(h,{orientation:"vertical",style:{gap:10},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(e=>n(i,{size:"medium",variant:e.variant,checked:!0,children:n(f,{className:"ml-2",children:"Radio"})},e.id))}),u=()=>n(h,{orientation:"vertical",name:"sizes",style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(e=>n(i,{size:e.size,children:n(f,{className:"ml-2",children:"Radio"})},e.id))}),m=()=>n(i,{disabled:!0,children:n(f,{className:"ml-2",children:"Radio"})});var V,D,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  type RadioOption = {
    value: string;
    label: string;
  };
  const radioOptions: RadioOption[] = [{
    value: "radio1",
    label: "Radio 1"
  }, {
    value: "radio2",
    label: "Radio 2"
  }];
  const [selectedValue, setSelectedValue] = useState<string>("");
  return <>
      <RadioGroup name="radios" className="w-32" style={{
      gap: 8
    }} disabled={args.disabled}>
        {radioOptions.map(option => <Radio {...args} key={option.value} value={option.value} checked={selectedValue === option.value} onChange={() => setSelectedValue(option.value)}>
            <Caption className="ml-2">{option.label}</Caption>
          </Radio>)}
      </RadioGroup>
      <Caption2 className="mt-2">Selected value: {selectedValue ? selectedValue : "none"}</Caption2>
    </>;
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var x,O,$;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
  return <RadioGroup orientation="vertical" style={{
    gap: 10
  }}>
      {variants.map(variant => <Radio key={variant.id} size="medium" variant={variant.variant} checked>
          <Caption className="ml-2">Radio</Caption>
        </Radio>)}
    </RadioGroup>;
}`,...($=(O=l.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var E,j,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
  return <RadioGroup orientation="vertical" name="sizes" style={{
    gap: 10
  }}>
      {variants.map(variant => <Radio key={variant.id} size={variant.size}>
          <Caption className="ml-2">Radio</Caption>
        </Radio>)}
    </RadioGroup>;
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,_,T;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <Radio disabled>
      <Caption className="ml-2">Radio</Caption>
    </Radio>;
}`,...(T=(_=m.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};const te=["Default","Variants","Sizes","DisabledState"];export{d as Default,m as DisabledState,u as Sizes,l as Variants,te as __namedExportsOrder,oe as default};
//# sourceMappingURL=radio.stories-e870789a.js.map
