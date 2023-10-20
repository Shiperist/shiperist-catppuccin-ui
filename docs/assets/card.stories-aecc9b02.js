import{j as e,a as y}from"./jsx-runtime-86dfebf6.js";import{R as x,r as A}from"./index-1b03fe98.js";import{c as b}from"./utils-3450518e.js";import{o as d}from"./constants-6f1e8c11.js";import{C as c}from"./card-styles-1af7731f.js";import{V as R}from"./vertical-layout-78c62444.js";import{T as i}from"./text-2fb250cc.js";import{S as M}from"./subtitle-42e37ca4.js";import{C as O}from"./caption-0d8799a8.js";import{B as Y}from"./button-styles-dcba7bb0.js";import"./icons-30e71a13.js";const V=x.forwardRef((r,t)=>{const{gap:a,orientation:l,className:p="",children:m,...n}=r,o=typeof a=="string"&&a.match(/[a-zA-Z]/)?a:`${a}px`,h=d[l]||d.vertical,u={gap:o||void 0,...n.style};return e("div",{ref:t,className:b(p,h),style:u,...n,children:m})});V.displayName="CardHeader";const L=x.forwardRef((r,t)=>{const{gap:a,orientation:l,className:p="",children:m,...n}=r,o=typeof a=="string"&&a.match(/[a-zA-Z]/)?a:`${a}px`,h=d[l]||d.vertical,u={gap:o||void 0,...n.style};return e("div",{ref:t,className:b(p,h),style:u,...n,children:m})});L.displayName="CardContent";const E=x.forwardRef((r,t)=>{const{gap:a,orientation:l,className:p="",children:m,...n}=r,o=typeof a=="string"&&a.match(/[a-zA-Z]/)?a:`${a}px`,h=d[l]||d.vertical,u={gap:o||void 0,...n.style};return e("div",{ref:t,className:b(p,h),style:u,...n,children:m})});E.displayName="CardFooter";const X={title:"Components/Card",component:c,argTypes:{appearance:{control:{type:"select"},description:"Determines the appearance style of the card."},orientation:{control:{type:"select"},description:"Determines the orientation of the card."},variant:{control:{type:"select"},description:"Determines the color variant of the card. Works only for embed option"},gap:{control:"text",description:"Determines the gap between elements in the card."},disabled:{control:"boolean",description:"Whether the card is disabled."}}},j=r=>y(c,{...r,gap:16,children:[y(V,{children:[e(M,{bold:!0,children:"Your plan"}),e(O,{children:"This plan is for those who have a team..."})]}),y(L,{children:[e(i,{children:"- File sharing"}),e(i,{children:"- 50 GB storage"}),e(i,{children:"- 16 GB of RAM"}),e(i,{children:"- ..."})]}),e(E,{children:e(Y,{size:"large",variant:"success",disabled:r.disabled,className:"w-full",children:"Choose plan"})})]}),s=j.bind({});s.args={appearance:"outline",orientation:"vertical",variant:"base",disabled:!1,gap:".5rem"};const g=()=>e(R,{style:{gap:8,width:"32rem"},children:[{id:1,appearance:"filled"},{id:2,appearance:"outline"},{id:3,appearance:"shadow"},{id:4,appearance:"embed"}].map(t=>A.createElement(c,{...s.args,key:t.id,appearance:t.appearance},"content"))}),f=()=>e(R,{style:{gap:8,width:"32rem"},children:[{id:1,orientation:"vertical"},{id:2,orientation:"horizontal"}].map(t=>A.createElement(c,{...s.args,key:t.id,orientation:t.orientation},e(c,{appearance:"filled",orientation:t.orientation,gap:8,children:e(i,{children:"content"})}),e(c,{appearance:"filled",gap:8,children:e(i,{children:"content"})})))}),C=j.bind({});C.args={...s.args,disabled:!0};var T,v,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Card {...args} gap={16}>
    <CardHeader>
      <Subtitle bold>Your plan</Subtitle>
      <Caption>This plan is for those who have a team...</Caption>
    </CardHeader>
    <CardContent>
      <Text>- File sharing</Text>
      <Text>- 50 GB storage</Text>
      <Text>- 16 GB of RAM</Text>
      <Text>- ...</Text>
    </CardContent>
    <CardFooter>
      <Button size="large" variant="success" disabled={args.disabled} className="w-full">
        Choose plan
      </Button>
    </CardFooter>
  </Card>`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,B,N;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const appearances = [{
    id: 1,
    appearance: "filled"
  }, {
    id: 2,
    appearance: "outline"
  }, {
    id: 3,
    appearance: "shadow"
  }, {
    id: 4,
    appearance: "embed"
  }];
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {appearances.map(key => <Card {...Default.args} key={key.id} appearance={key.appearance}>
          content
        </Card>)}
    </VerticalLayout>;
}`,...(N=(B=g.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var D,k,F;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const orientations: any[] = [{
    id: 1,
    orientation: "vertical"
  }, {
    id: 2,
    orientation: "horizontal"
  }];
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {orientations.map(key => <Card {...Default.args} key={key.id} orientation={key.orientation}>
          <Card appearance="filled" orientation={key.orientation} gap={8}>
            <Text>content</Text>
          </Card>
          <Card appearance="filled" gap={8}>
            <Text>content</Text>
          </Card>
        </Card>)}
    </VerticalLayout>;
}`,...(F=(k=f.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var G,H,z;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`args => <Card {...args} gap={16}>
    <CardHeader>
      <Subtitle bold>Your plan</Subtitle>
      <Caption>This plan is for those who have a team...</Caption>
    </CardHeader>
    <CardContent>
      <Text>- File sharing</Text>
      <Text>- 50 GB storage</Text>
      <Text>- 16 GB of RAM</Text>
      <Text>- ...</Text>
    </CardContent>
    <CardFooter>
      <Button size="large" variant="success" disabled={args.disabled} className="w-full">
        Choose plan
      </Button>
    </CardFooter>
  </Card>`,...(z=(H=C.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const ee=["Default","Appearances","Orientations","DisabledState"];export{g as Appearances,s as Default,C as DisabledState,f as Orientations,ee as __namedExportsOrder,X as default};
//# sourceMappingURL=card.stories-aecc9b02.js.map
