import{j as r,a as g}from"./jsx-runtime-86dfebf6.js";import{c as a}from"./utils-111ae462.js";import{R as H}from"./index-1b03fe98.js";import{c as J}from"./constants-6f1e8c11.js";import{V as i}from"./vertical-layout-a7cca7b2.js";const t=H.forwardRef((s,e)=>{const{thickness:n="medium",variant:W="success",showPercent:c,percentPosition:l="left",percentBoundary:d="outside",className:_="",shape:f="circular",progress:$=0,...k}=s,P=Math.min(100,Math.max(0,$)).toFixed(2),I=K(n),E=a(Q(f,n),_),F=U(J(W),f),A=X(d,l),G={width:`${P}%`,...k.style},x=r("div",{children:g("span",{className:a(w[n]||w.medium),children:[P,"%"]})});return g("div",{ref:e,className:I,style:{gap:c?8:void 0},...k,children:[c&&d==="outside"&&l==="left"&&x,r("div",{className:E,children:r("div",{className:F,style:{...G},children:c&&n==="xlarge"&&d==="inside"&&r("div",{className:a("px-2"),style:A,children:g("span",{className:a("text-mantle text-xs",`text-${l}`),children:[P,"%"]})})})}),c&&d==="outside"&&l==="right"&&x]})});t.displayName="Progress";const y={circular:"rounded-full",square:"rounded-none"},w={small:"text-xs",medium:"text-sm",large:"text-sm",xlarge:"text-md"},v={small:"h-1.5",medium:"h-2.5",large:"h-3.5",xlarge:"h-4"},K=s=>a("flex w-full flex-row items-center transition-all duration-150",v[s]||v.medium),Q=(s,e)=>a("bg-overlay0 w-full items-center transition-all duration-150",y[s]||y.circular,v[e]||v.medium),U=(s,e)=>a(`h-full transition-all duration-150 bg-${s}`,y[e]||y.circular),X=(s,e)=>s==="inside"?{justifyContent:e,alignItems:e,display:"flex"}:{alignItems:"center",display:"flex"},te={title:"Components/Progress",component:t,argTypes:{thickness:{control:{type:"select"},description:"Determines the size of the progress bar."},shape:{control:{type:"select"},description:"Determines the shape of the progress bar."},percentBoundary:{control:{type:"select"},description:"Determines whether to display the percentage outside or inside the progress bar."},percentPosition:{control:{type:"select"},description:"Outside boundary allows only left/right, inside boundary allows all positions listed."},variant:{control:{type:"select"},description:"Determines the color variant of the progress bar."},showPercent:{control:"boolean",description:"Whether to show the percentage."},progress:{control:{type:"range",min:0,max:100,step:.01},description:"Determines the progress of progress bar."}}},Y=s=>r("div",{style:{width:"32rem"},children:r(t,{...s})}),o=Y.bind({});o.args={progress:25,thickness:"medium",shape:"circular",showPercent:!1,variant:"success",percentBoundary:"outside",percentPosition:"left"};const p=()=>r(i,{style:{gap:10,width:"32rem"},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(e=>r(t,{progress:25,shape:"circular",variant:e.variant,thickness:"medium",children:"Click me"},e.id))}),m=()=>r(i,{style:{gap:10,width:"32rem"},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"},{id:4,size:"xlarge"}].map(e=>r(t,{progress:25,shape:"circular",variant:"success",thickness:e.size,children:"Click me"},e.id))}),u=()=>r(i,{style:{gap:10,width:"32rem"},children:[{id:1,shape:"square"},{id:2,shape:"circular"}].map(e=>r(t,{progress:25,shape:e.shape,variant:"success",thickness:"medium",children:"Click me"},e.id))}),h=()=>{const s=[{id:1,pos:"left"},{id:2,pos:"right"}],e=[{id:1,pos:"left"},{id:2,pos:"center"},{id:3,pos:"right"}];return g(i,{style:{gap:10,width:"32rem"},children:[r(i,{style:{gap:10},children:s.map(n=>r(t,{showPercent:!0,progress:25,percentBoundary:"outside",percentPosition:n.pos,shape:"circular",variant:"success",thickness:"large",children:"Click me"},n.id))}),r(i,{style:{gap:10},children:e.map(n=>r(t,{showPercent:!0,className:"text-base",progress:25,percentBoundary:"inside",percentPosition:n.pos,shape:"circular",variant:"success",thickness:"xlarge",children:"Click me"},n.id))})]})};var C,b,S;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  width: "32rem"
}}>
    <Progress {...args} />
  </div>`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var V,L,z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
  return <VerticalLayout style={{
    gap: 10,
    width: "32rem"
  }}>
      {variants.map(variant => <Progress key={variant.id} progress={25} shape="circular" variant={variant.variant} thickness="medium">
          Click me
        </Progress>)}
    </VerticalLayout>;
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var N,B,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    size: "small"
  }, {
    id: 2,
    size: "medium"
  }, {
    id: 3,
    size: "large"
  }, {
    id: 4,
    size: "xlarge"
  }];
  return <VerticalLayout style={{
    gap: 10,
    width: "32rem"
  }}>
      {variants.map(variant => <Progress key={variant.id} progress={25} shape="circular" variant="success" thickness={variant.size}>
          Click me
        </Progress>)}
    </VerticalLayout>;
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var T,j,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    shape: "square"
  }, {
    id: 2,
    shape: "circular"
  }];
  return <VerticalLayout style={{
    gap: 10,
    width: "32rem"
  }}>
      {variants.map(variant => <Progress key={variant.id} progress={25} shape={variant.shape} variant="success" thickness="medium">
          Click me
        </Progress>)}
    </VerticalLayout>;
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var M,O,R;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const outsidePercent: any[] = [{
    id: 1,
    pos: "left"
  }, {
    id: 2,
    pos: "right"
  }];
  const insidePercent: any[] = [{
    id: 1,
    pos: "left"
  }, {
    id: 2,
    pos: "center"
  }, {
    id: 3,
    pos: "right"
  }];
  return <VerticalLayout style={{
    gap: 10,
    width: "32rem"
  }}>
      <VerticalLayout style={{
      gap: 10
    }}>
        {outsidePercent.map(key => <Progress key={key.id} showPercent progress={25} percentBoundary="outside" percentPosition={key.pos} shape="circular" variant="success" thickness="large">
            Click me
          </Progress>)}
      </VerticalLayout>
      <VerticalLayout style={{
      gap: 10
    }}>
        {insidePercent.map(key => <Progress key={key.id} showPercent className="text-base" progress={25} percentBoundary="inside" percentPosition={key.pos} shape="circular" variant="success" thickness="xlarge">
            Click me
          </Progress>)}
      </VerticalLayout>
    </VerticalLayout>;
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const ae=["Default","Variants","Sizes","Shapes","WithPercentage"];export{o as Default,u as Shapes,m as Sizes,p as Variants,h as WithPercentage,ae as __namedExportsOrder,te as default};
//# sourceMappingURL=progress.stories-c1df1444.js.map
