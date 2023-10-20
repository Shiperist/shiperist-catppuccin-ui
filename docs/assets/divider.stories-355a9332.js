import{a as i,j as e}from"./jsx-runtime-86dfebf6.js";import"./utils-3450518e.js";import{D as a}from"./divider-styles-b25e09be.js";import{V as x}from"./vertical-layout-78c62444.js";import{C as t}from"./card-styles-1af7731f.js";import{T as n}from"./text-2fb250cc.js";import{B as g}from"./badge-styles-34607c67.js";import"./index-1b03fe98.js";import"./constants-6f1e8c11.js";const w={title:"Components/Divider",component:a,argTypes:{children:{control:"text",description:"Determines the children of the divider. In this scenario it's the text."},thickness:{control:{type:"select"},description:"Determines the thickness of the divider."},orientation:{control:{type:"select"},description:"Determines the orientation of the divider."},labelPosition:{control:{type:"select"},description:"Determines the label position of the divider."}}},T=C=>i(t,{appearance:"outline",orientation:"vertical",style:{gap:16,width:"32rem"},children:[e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})}),e(a,{...C}),e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})})]}),r=T.bind({});r.args={children:"",orientation:"horizontal",labelPosition:"center",thickness:"tiny"};const c=()=>i(x,{style:{gap:16,width:"32rem"},children:[i(t,{orientation:"horizontal",className:"items-center",gap:32,children:[e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})}),e(a,{orientation:"vertical",thickness:"tiny",labelPosition:"center",style:{height:"6rem"},children:e(n,{children:"OR"})}),e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})})]}),i(t,{gap:16,children:[e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})}),e(a,{orientation:"horizontal",thickness:"tiny",labelPosition:"center",children:e(n,{children:"OR"})}),e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})})]})]}),s=()=>i(t,{style:{width:"32rem",gap:20},children:[e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})}),e(a,{orientation:"horizontal",thickness:"tiny",labelPosition:"center",children:e(g,{children:"Badge"})}),e(t,{appearance:"filled",className:"items-center justify-center",children:e(n,{children:"content"})})]});var o,l,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`args => <Card appearance="outline" orientation="vertical" style={{
  gap: 16,
  width: "32rem"
}}>
    <Card appearance="filled" className="items-center justify-center">
      <Text>content</Text>
    </Card>
    <Divider {...args}></Divider>
    <Card appearance="filled" className="items-center justify-center">
      <Text>content</Text>
    </Card>
  </Card>`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 16,
    width: "32rem"
  }}>
      <Card orientation="horizontal" className="items-center" gap={32}>
        <Card appearance="filled" className="items-center justify-center">
          <Text>content</Text>
        </Card>
        <Divider orientation="vertical" thickness="tiny" labelPosition="center" style={{
        height: "6rem"
      }}>
          <Text>OR</Text>
        </Divider>
        <Card appearance="filled" className="items-center justify-center">
          <Text>content</Text>
        </Card>
      </Card>
      <Card gap={16}>
        <Card appearance="filled" className="items-center justify-center">
          <Text>content</Text>
        </Card>
        <Divider orientation="horizontal" thickness="tiny" labelPosition="center">
          <Text>OR</Text>
        </Divider>
        <Card appearance="filled" className="items-center justify-center">
          <Text>content</Text>
        </Card>
      </Card>
    </VerticalLayout>;
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,u,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Card style={{
    width: "32rem",
    gap: 20
  }}>
      <Card appearance="filled" className="items-center justify-center">
        <Text>content</Text>
      </Card>
      <Divider orientation="horizontal" thickness="tiny" labelPosition="center">
        <Badge>Badge</Badge>
      </Divider>
      <Card appearance="filled" className="items-center justify-center">
        <Text>content</Text>
      </Card>
    </Card>;
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const B=["Default","Orientations","CustomLabel"];export{s as CustomLabel,r as Default,c as Orientations,B as __namedExportsOrder,w as default};
//# sourceMappingURL=divider.stories-355a9332.js.map
