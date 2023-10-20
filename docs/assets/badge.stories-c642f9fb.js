import{a as D,j as e}from"./jsx-runtime-86dfebf6.js";import{r as H}from"./index-1b03fe98.js";import"./utils-3450518e.js";import{B as n}from"./badge-styles-34607c67.js";import{H as d}from"./horizontal-layout-d76e9e8d.js";import{I as z}from"./icon-styles-73ea26bc.js";import{H as x}from"./icons-30e71a13.js";import"./constants-6f1e8c11.js";const V={title:"Components/Badge",component:n,argTypes:{variant:{control:{type:"select"},description:"Determines the color variant of the badge."},appearance:{control:{type:"select"},description:"Determines the appearance style of the badge."},leadingElement:{control:"object",description:"Sets an element/s on the left side of the badge."},trailingElement:{control:"object",description:"Sets an element/s on the right side of the badge."},children:{control:"text",description:"Determines the children of the badge. In this scenario it's the text."}}},r=e(z,{icon:e(x,{}),size:"tiny"}),L=c=>e(n,{leadingElement:r,...c,children:"Badge"}),a=L.bind({});a.args={variant:"base",appearance:"filled",children:""};const i=()=>D(d,{style:{gap:8},children:[e(n,{...a.args,leadingElement:r,children:"Badge"}),e(n,{...a.args,trailingElement:r,children:"Badge"}),e(n,{...a.args,leadingElement:r,trailingElement:r,children:"Badge"}),e(n,{...a.args,leadingElement:r})]}),o=()=>e(d,{style:{gap:8},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(t=>e(n,{appearance:"outline",variant:t.variant,children:"Badge"},t.id))}),s=()=>e(d,{style:{gap:8},children:[{id:1,appearance:"filled"},{id:2,appearance:"outline"},{id:3,appearance:"ghost"}].map(t=>H.createElement(n,{...a.args,key:t.id,leadingElement:r,appearance:t.appearance},"Badge"))});var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Badge leadingElement={icon} {...args}>
    Badge
  </Badge>`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,u,B;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <HorizontalLayout style={{
    gap: 8
  }}>
      <Badge {...Default.args} leadingElement={icon}>
        Badge
      </Badge>
      <Badge {...Default.args} trailingElement={icon}>
        Badge
      </Badge>
      <Badge {...Default.args} leadingElement={icon} trailingElement={icon}>
        Badge
      </Badge>
      <Badge {...Default.args} leadingElement={icon}></Badge>
    </HorizontalLayout>;
}`,...(B=(u=i.parameters)==null?void 0:u.docs)==null?void 0:B.source}}};var h,f,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
    gap: 8
  }}>
      {variants.map(variant => <Badge key={variant.id} appearance="outline" variant={variant.variant}>
          Badge
        </Badge>)}
    </HorizontalLayout>;
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,E,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const appearances: any[] = [{
    id: 1,
    appearance: "filled"
  }, {
    id: 2,
    appearance: "outline"
  }, {
    id: 3,
    appearance: "ghost"
  }
  /* { id: 4, appearance: "tint" }, */];

  return <HorizontalLayout style={{
    gap: 8
  }}>
      {appearances.map(appearance => <Badge {...Default.args} key={appearance.id} leadingElement={icon} appearance={appearance.appearance}>
          Badge
        </Badge>)}
    </HorizontalLayout>;
}`,...(b=(E=s.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const W=["Default","WithIcons","Variants","Appearances"];export{s as Appearances,a as Default,o as Variants,i as WithIcons,W as __namedExportsOrder,V as default};
//# sourceMappingURL=badge.stories-c642f9fb.js.map
