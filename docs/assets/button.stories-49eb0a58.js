import{j as e,a as G}from"./jsx-runtime-86dfebf6.js";import{r as J}from"./index-1b03fe98.js";import"./utils-111ae462.js";import{B as t}from"./button-styles-68fe0f1f.js";import{I as O}from"./icon-styles-a61fba80.js";import{H as F}from"./icons-820e6342.js";import{H as c}from"./horizontal-layout-44b18cc9.js";import"./constants-6f1e8c11.js";const Y={title:"Components/Button",component:t,argTypes:{isLoading:{control:"boolean",description:"Whether the button is loading."},disabled:{control:"boolean",description:"Whether the button is disabled."},variant:{control:{type:"select"},description:"Determines the color variant of the button."},shape:{control:{type:"select"},description:"Determines the shape of the button."},appearance:{control:{type:"select"},description:"Determines the appearance style of the button."},size:{control:{type:"select"},description:"Determines the size of the button."},leadingElement:{control:"object",description:"Sets an element/s on the left side of the button."},trailingElement:{control:"object",description:"Sets an element/s on the right side of the button."},children:{control:"text",description:"Determines the children of the button. In this scenario it's the text."}}},g=r=>e(t,{leadingElement:e(O,{icon:e(F,{}),size:r.size}),...r,children:"Click me"}),n=g.bind({});n.args={isLoading:!1,variant:"base",size:"medium",disabled:!1,children:"",appearance:"outline",shape:"rounded"};const i=e(O,{icon:e(F,{}),size:n.args.size}),l=()=>G(c,{style:{gap:8},children:[e(t,{...n.args,leadingElement:i,children:"Click me"}),e(t,{...n.args,trailingElement:i,children:"Click me"}),e(t,{...n.args,leadingElement:i,trailingElement:i,children:"Click me"}),e(t,{...n.args,leadingElement:i})]}),d=()=>e(c,{style:{gap:10},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(a=>e(t,{appearance:"outline",variant:a.variant,children:"Click me"},a.id))}),p=()=>e(c,{style:{gap:8},children:[{id:2,name:"ghost"},{id:4,name:"outline"},{id:5,name:"shadow"}].map(a=>J.createElement(t,{...n.args,key:a.id,leadingElement:i,appearance:a.name},"Click me"))}),m=()=>e(c,{style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"},{id:4,size:"xlarge"}].map(a=>e(t,{appearance:"outline",variant:"base",size:a.size,children:"Click me"},a.id))}),u=()=>e(c,{style:{gap:10},children:[{id:1,shape:"square"},{id:2,shape:"rounded"},{id:3,shape:"circular"}].map(a=>e(t,{appearance:"outline",variant:"base",shape:a.shape,children:"Click me"},a.id))}),s=g.bind({});s.args={...n.args,isLoading:!0};const o=g.bind({});o.args={...n.args,disabled:!0};var h,v,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Button leadingElement={<Icon icon={<HeartIcon />} size={args.size} />} {...args}>
    Click me
  </Button>`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <HorizontalLayout style={{
    gap: 8
  }}>
      <Button {...Default.args} leadingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} trailingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} leadingElement={icon} trailingElement={icon}>
        Click me
      </Button>
      <Button {...Default.args} leadingElement={icon}></Button>
    </HorizontalLayout>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,k,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
      {variants.map(variant => <Button key={variant.id} appearance="outline" variant={variant.variant}>
          Click me
        </Button>)}
    </HorizontalLayout>;
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,S,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const appearances: any[] = [/* { id: 1, name: "filled" }, */
  {
    id: 2,
    name: "ghost"
  }, /* { id: 3, name: "tint" }, */
  {
    id: 4,
    name: "outline"
  }, {
    id: 5,
    name: "shadow"
  }];
  return <HorizontalLayout style={{
    gap: 8
  }}>
      {appearances.map(appearance => <Button {...Default.args} key={appearance.id} leadingElement={icon} appearance={appearance.name}>
          Click me
        </Button>)}
    </HorizontalLayout>;
}`,...(H=(S=p.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var L,D,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Button key={variant.id} appearance="outline" variant="base" size={variant.size}>
          Click me
        </Button>)}
    </HorizontalLayout>;
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var x,j,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    shape: "square"
  }, {
    id: 2,
    shape: "rounded"
  }, {
    id: 3,
    shape: "circular"
  }];
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Button key={variant.id} appearance="outline" variant="base" shape={variant.shape}>
          Click me
        </Button>)}
    </HorizontalLayout>;
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var W,_,q;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`args => <Button leadingElement={<Icon icon={<HeartIcon />} size={args.size} />} {...args}>
    Click me
  </Button>`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,T,V;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Button leadingElement={<Icon icon={<HeartIcon />} size={args.size} />} {...args}>
    Click me
  </Button>`,...(V=(T=o.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};const Z=["Default","WithIcons","Variants","Appearances","Sizes","Shapes","LoadingState","DisabledState"];export{p as Appearances,n as Default,o as DisabledState,s as LoadingState,u as Shapes,m as Sizes,d as Variants,l as WithIcons,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=button.stories-49eb0a58.js.map
