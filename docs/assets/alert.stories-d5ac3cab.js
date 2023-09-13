import{a as O,j as e}from"./jsx-runtime-86dfebf6.js";import{c as d}from"./utils-111ae462.js";import{R as q}from"./index-1b03fe98.js";import{c as T}from"./constants-6f1e8c11.js";import{E as $,H as j,c as F,W as G,D as J}from"./icons-820e6342.js";import{V as m}from"./vertical-layout-a7cca7b2.js";import{I as p}from"./icon-styles-a61fba80.js";import{B as K}from"./button-styles-68fe0f1f.js";import{T as M}from"./text-b69a6b5d.js";const i=q.forwardRef((n,a)=>{const{variant:r="base",leadingElement:u,trailingElement:g,appearance:v="outline",size:B="medium",className:H="",children:h,style:R,...W}=n,y=Q(v,T(r)),_=d(U(B,v,r),H);return O("div",{ref:a,className:_,style:{...R},...W,children:[u&&e("div",{className:d(y),children:u}),h&&e("div",{className:"w-full",children:h}),g&&e("div",{className:d(y),children:g})]})});i.displayName="Alert";const f={small:"text-sm py-1",medium:"text-md py-2",large:"text-lg py-3"},P=(n,a)=>({outline:`text-${a} border-${a}`,filled:`text-surface0 bg-${a}`})[n]||`text-${a} border-${a}`,Q=(n,a)=>n==="filled"?"stroke-base":`stroke-${a}`,U=(n,a,r)=>d("flex flex-row items-center rounded-xl border border-transparent pl-4 pr-2 transition-all",f[n]||f.medium,P(a,T(r))),ce={title:"Components/Alert",component:i,argTypes:{variant:{control:{type:"select"},description:"Determines the color variant of the alert."},size:{control:{type:"select"},description:"Determines the size of the alert."},appearance:{control:{type:"select"},description:"Determines the appearance style of the alert."},leadingElement:{control:"object",description:"Sets an element/s on the left side of the alert."},trailingElement:{control:"object",description:"Sets an element/s on the right side of the alert."},children:{control:"text",description:"Determines the children of the alert. In this scenario it's the text."}}},Y=n=>e(i,{leadingElement:e(p,{icon:e(j,{}),size:n.size}),...n,style:{gap:12,width:"32rem"}}),t=Y.bind({});t.args={variant:"base",size:"medium",appearance:"outline",children:"X unread messages."};const s=()=>e(m,{style:{gap:10},children:[{id:1,variant:"base",icon:e(j,{})},{id:2,variant:"success",icon:e(F,{})},{id:3,variant:"warning",icon:e(G,{})},{id:4,variant:"info",icon:e($,{})},{id:5,variant:"danger",icon:e(J,{})}].map(a=>{var r;return e(i,{leadingElement:e(p,{icon:a.icon,size:((r=t.args)==null?void 0:r.size)||"medium"}),appearance:"outline",variant:a.variant,size:"medium",style:{gap:16,width:"32rem"},children:"X unread messages."},a.id)})}),o=()=>e(m,{style:{gap:10},children:[{id:1,appearance:"filled"},{id:2,appearance:"outline"}].map(a=>e(i,{appearance:a.appearance,variant:"base",size:"medium",style:{gap:16,width:"32rem"},children:"X unread messages."},a.id))}),c=()=>e(m,{style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(a=>e(i,{appearance:"outline",variant:"base",size:a.size,style:{gap:16,width:"32rem"},children:"X unread messages."},a.id))}),l=()=>{var n;return e(m,{style:{gap:10},children:e(i,{leadingElement:e(p,{icon:e($,{}),size:((n=t.args)==null?void 0:n.size)||"medium"}),variant:"base",size:"medium",appearance:"outline",trailingElement:e(K,{size:"small",variant:"info",appearance:"ghost",children:e(M,{bold:!0,className:"text-info",children:"View"})}),style:{gap:16,width:"32rem"},children:"X unread messages."})})};var z,b,x;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`args => <Alert leadingElement={<Icon icon={<HeartIcon />} size={args.size} />} {...args} style={{
  gap: 12,
  width: "32rem"
}}></Alert>`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var A,I,w;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    variant: "base",
    icon: <HeartIcon />
  }, {
    id: 2,
    variant: "success",
    icon: <CheckCircleIcon />
  }, {
    id: 3,
    variant: "warning",
    icon: <WarningIcon />
  }, {
    id: 4,
    variant: "info",
    icon: <ErrorCircleIcon />
  }, {
    id: 5,
    variant: "danger",
    icon: <DangerIcon />
  }];
  return <VerticalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Alert leadingElement={<Icon icon={variant.icon} size={Default.args?.size || "medium"} />} key={variant.id} appearance="outline" variant={variant.variant} size="medium" style={{
      gap: 16,
      width: "32rem"
    }}>
          X unread messages.
        </Alert>)}
    </VerticalLayout>;
}`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var E,V,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    appearance: "filled"
  }, {
    id: 2,
    appearance: "outline"
  }
  /* { id: 3, appearance: "tint" }, */];

  return <VerticalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Alert key={variant.id} appearance={variant.appearance} variant="base" size="medium" style={{
      gap: 16,
      width: "32rem"
    }}>
          X unread messages.
        </Alert>)}
    </VerticalLayout>;
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var S,C,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
    gap: 10
  }}>
      {variants.map(variant => <Alert key={variant.id} appearance="outline" variant="base" size={variant.size} style={{
      gap: 16,
      width: "32rem"
    }}>
          X unread messages.
        </Alert>)}
    </VerticalLayout>;
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var X,N,k;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 10
  }}>
      <Alert leadingElement={<Icon icon={<ErrorCircleIcon />} size={Default.args?.size || "medium"} />} variant="base" size="medium" appearance="outline" trailingElement={<Button size="small" variant="info" appearance="ghost">
            <Text bold className="text-info">
              View
            </Text>
          </Button>} style={{
      gap: 16,
      width: "32rem"
    }}>
        X unread messages.
      </Alert>
    </VerticalLayout>;
}`,...(k=(N=l.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const le=["Default","Variants","Appearances","Sizes","AdvancedAlert"];export{l as AdvancedAlert,o as Appearances,t as Default,c as Sizes,s as Variants,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=alert.stories-d5ac3cab.js.map
