import{j as e}from"./jsx-runtime-86dfebf6.js";import{c as L}from"./utils-3450518e.js";import{A as z,a as N}from"./avatar-66c81d88.js";import{R as A}from"./index-1b03fe98.js";import{I as d}from"./indicator-styles-d02ac806.js";import{H as v}from"./horizontal-layout-d76e9e8d.js";import{C as P}from"./card-styles-1af7731f.js";import"./icons-30e71a13.js";import"./constants-6f1e8c11.js";const c=A.forwardRef((i,t)=>{const{className:n="",children:a,...y}=i,x=!isNaN(a)&&String(a).length>3;return e("span",{ref:t,className:L(n),...y,children:x?String(a).slice(0,3)+"+":a})});c.displayName="IndicatorLabel";const R={title:"Components/Indicator",component:d,argTypes:{isLegend:{control:"boolean",description:"Whether the indicator shows as legend (can be used in charts)."},position:{control:"object",description:"Determines the custom position of the indicator."},size:{control:{type:"select"},description:"Determines the size of the indicator."},status:{control:{type:"select"},description:"Determines the status color of the indicator."},positionPreset:{control:{type:"select"},description:"Determines the position preset of the indicator."},children:{control:"text",description:"Determines the children of the indicator, IndicatorLabel component can be used directly."}}},T=i=>e(v,{style:{gap:8},children:[{id:1,status:"active",pings:8},{id:2,status:"idle",pings:""},{id:3,status:"inactive",pings:""},{id:4,status:"info",pings:9999},{id:5,status:"invisible",pings:""}].map(n=>e(z,{image:N,shape:"rounded",size:"large",children:e(d,{...i,status:n.status,children:n.pings!==""&&e(c,{children:n.pings})})},n.id))}),s=T.bind({});s.args={children:"",size:"medium",status:"",isLegend:!1,positionPreset:"top-right",position:{}};const r=()=>e(v,{className:"",style:{gap:16},children:[{id:1,status:"active",text:"Active"},{id:2,status:"idle",text:"Idle"},{id:3,status:"inactive",text:"Inactive"},{id:4,status:"info",text:"Info"},{id:5,status:"invisible",text:"Invisible"}].map(t=>e(d,{size:"medium",status:t.status,isLegend:!0,children:e(c,{children:t.text})},t.id))}),o=()=>e(P,{appearance:"filled",className:"relative mx-auto inline-flex",style:{width:"16rem",height:"16rem"},children:[{id:1,name:"Top left",preset:"top-left"},{id:2,name:"Top center",preset:"top-center"},{id:3,name:"Top right",preset:"top-right"},{id:4,name:"Middle left",preset:"middle-left"},{id:5,name:"Middle center",preset:"middle-center"},{id:6,name:"Middle right",preset:"middle-right"},{id:7,name:"Bottom left",preset:"bottom-left"},{id:8,name:"Bottom center",preset:"bottom-center"},{id:9,name:"Bottom right",preset:"bottom-right"}].map(t=>e(d,{status:"info",size:"small",positionPreset:t.preset,children:e(c,{children:t.name})},t.id))});var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const people: any[] = [{
    id: 1,
    status: "active",
    pings: 8
  }, {
    id: 2,
    status: "idle",
    pings: ""
  }, {
    id: 3,
    status: "inactive",
    pings: ""
  }, {
    id: 4,
    status: "info",
    pings: 9999
  }, {
    id: 5,
    status: "invisible",
    pings: ""
  }];
  return <HorizontalLayout style={{
    gap: 8
  }}>
      {people.map(person => <Avatar image={avatar} shape="rounded" size="large" key={person.id}>
          <Indicator {...args} status={person.status}>
            {person.pings !== "" && <IndicatorLabel>{person.pings}</IndicatorLabel>}
          </Indicator>
        </Avatar>)}
    </HorizontalLayout>;
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const legends: any[] = [{
    id: 1,
    status: "active",
    text: "Active"
  }, {
    id: 2,
    status: "idle",
    text: "Idle"
  }, {
    id: 3,
    status: "inactive",
    text: "Inactive"
  }, {
    id: 4,
    status: "info",
    text: "Info"
  }, {
    id: 5,
    status: "invisible",
    text: "Invisible"
  }];
  return <HorizontalLayout className="" style={{
    gap: 16
  }}>
      {legends.map(legend => <Indicator key={legend.id} size="medium" status={legend.status} isLegend={true}>
          <IndicatorLabel>{legend.text}</IndicatorLabel>
        </Indicator>)}
    </HorizontalLayout>;
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const positions: any[] = [{
    id: 1,
    name: "Top left",
    preset: "top-left"
  }, {
    id: 2,
    name: "Top center",
    preset: "top-center"
  }, {
    id: 3,
    name: "Top right",
    preset: "top-right"
  }, {
    id: 4,
    name: "Middle left",
    preset: "middle-left"
  }, {
    id: 5,
    name: "Middle center",
    preset: "middle-center"
  }, {
    id: 6,
    name: "Middle right",
    preset: "middle-right"
  }, {
    id: 7,
    name: "Bottom left",
    preset: "bottom-left"
  }, {
    id: 8,
    name: "Bottom center",
    preset: "bottom-center"
  }, {
    id: 9,
    name: "Bottom right",
    preset: "bottom-right"
  }];
  return <Card appearance="filled" className="relative mx-auto inline-flex" style={{
    width: "16rem",
    height: "16rem"
  }}>
      {positions.map(position => <Indicator key={position.id} status="info" size="small" positionPreset={position.preset}>
          <IndicatorLabel>{position.name}</IndicatorLabel>
        </Indicator>)}
    </Card>;
}`,...(I=(b=o.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const _=["Default","AsLegend","PositionPresets"];export{r as AsLegend,s as Default,o as PositionPresets,_ as __namedExportsOrder,R as default};
//# sourceMappingURL=indicator.stories-5c467ae0.js.map
