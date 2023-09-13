import{j as e,a as s}from"./jsx-runtime-86dfebf6.js";import{c as p}from"./utils-111ae462.js";import{R as b}from"./index-1b03fe98.js";import{c as M,o as E}from"./constants-6f1e8c11.js";import{H as z}from"./horizontal-layout-44b18cc9.js";import{B as I}from"./badge-styles-346a5dfa.js";import{I as j}from"./indicator-styles-da8ef71d.js";import{I as H}from"./icon-styles-a61fba80.js";import{H as C}from"./icons-820e6342.js";import{V as K}from"./vertical-layout-a7cca7b2.js";const o=b.forwardRef((r,n)=>{const{className:t="",children:l,orientation:i,appearance:c,size:m,...N}=r,L=U(i,c);return e("div",{className:p({"rounded-md":c==="boxed"}),children:e("div",{ref:n,className:p(L,t),...N,children:b.Children.toArray(l).map((d,u)=>{if(d.type===a){const f=u===0,h=u===b.Children.count(l)-1;return c==="boxed"?e("div",{className:p("bg-mantle px-1 py-1",{"rounded-bl-md rounded-tl-md":f&&i!=="vertical","rounded-br-md rounded-tr-md":h&&i!=="vertical","rounded-tl-md rounded-tr-md":f&&i==="vertical","rounded-bl-md rounded-br-md":h&&i==="vertical"}),children:b.cloneElement(d,{size:m,appearance:c})},u):b.cloneElement(d,{size:m,appearance:c,orientation:i})}return d})})})});o.displayName="Tabs";const a=b.forwardRef((r,n)=>{const{className:t="",children:l,appearance:i="underline",leadingElement:c,trailingElement:m,size:N="medium",active:L,orientation:d="horizontal",variant:u="base",...f}=r,h=Q(N,i,L,u,d);return s("div",{ref:n,className:p(h,t),...f,children:[c&&e("div",{children:c}),l&&e("div",{className:"mx-1",children:l}),m&&e("div",{children:m})]})});a.displayName="Tab";const k={small:"text-sm px-1",medium:"text-md px-2",large:"text-lg px-3"},P=(r,n,t)=>({default:`text-surface2 ${r?"text-text font-semibold":"hover:text-overlay1"}`,underline:`text-surface2 border-transparent border-b-2 hover:border-b-2 hover:border-surface0 pb-0.5 text-center ${r?"text-text border-b-2 border-surface2 hover:border-overlay0 font-semibold":"hover:text-overlay1"}`,boxed:`bg-mantle text-surface1 rounded-md ${r?`bg-${M(t)} rounded-md text-mantle font-semibold`:"hover:text-overlay1"}`,lifted:`border-b border-surface0 text-surface1 ${r?"rounded-tr-xl rounded-tl-xl border-l border-r border-t border-surface0 border-b-0 text-text font-semibold":"hover:text-overlay1"}`})[n]||`text-surface2 border-transparent border-b-2 hover:border-b-2 hover:border-surface0 pb-0.5 text-center ${r?"text-text border-b-2 border-surface2 hover:border-overlay0 font-semibold":"hover:text-overlay1"}`,Q=(r,n,t,l,i)=>i==="vertical"&&n==="lifted"?"":p("w-fit h-fit items-center cursor-pointer transition-all inline-flex",k[r]||k.medium,P(t,n,l),{"px-1.5":n==="boxed","w-full":i==="vertical","border-b-0 border-l-2 hover:border-b-0 hover:border-l-2":i==="vertical"&&n==="underline"}),U=(r,n)=>p(E[r]||E.horizontal,{"rounded-md":n==="boxed"}),ce={title:"Components/Tabs",component:o,argTypes:{orientation:{control:{type:"select"},description:"Determines the orientation of the tabs."},size:{control:{type:"select"},description:"Determines the size of the tabs."},children:{control:"object",description:"Determines the tab components of the tabs, this means use Tab component to determine children"},appearance:{control:{type:"select"},description:"Determines the tab appearance of the tabs"}}},X=r=>s(o,{...r,children:[e(a,{children:"Tab 1"}),e(a,{active:!0,children:"Tab 2"}),e(a,{children:"Tab 3"})]}),T=X.bind({});T.args={children:{},size:"medium",orientation:"horizontal",appearance:"underline"};const v=()=>e(K,{className:"flex items-center justify-center",style:{gap:10},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(n=>s(o,{appearance:"underline",size:n.size,children:[e(a,{children:"Tab 1"}),e(a,{active:!0,children:"Tab 2"}),e(a,{children:"Tab 3"})]},n.id))}),y=()=>{const r=[{id:1,appearance:"default"},{id:2,appearance:"underline"},{id:3,appearance:"boxed"},{id:4,appearance:"lifted"}],n=r.filter(t=>t.appearance!=="lifted");return s(z,{className:"flex items-center justify-center",style:{gap:20},children:[e(K,{className:"flex items-center justify-center",style:{gap:10},children:r.map(t=>s(o,{appearance:t.appearance,children:[e(a,{children:"Tab 1"}),e(a,{active:!0,variant:t.appearance==="boxed"?"success":void 0,children:"Tab 2"}),e(a,{children:"Tab 3"})]},t.id))}),e(z,{className:"flex items-center justify-center",style:{gap:10},children:n.map(t=>s(o,{orientation:"vertical",appearance:t.appearance,children:[e(a,{children:"Tab 1"}),e(a,{active:!0,variant:t.appearance==="boxed"?"success":void 0,children:"Tab 2"}),e(a,{children:"Tab 3"})]},t.id))})]})},x=()=>s(z,{className:"flex items-center justify-center",style:{gap:20},children:[s(o,{appearance:"underline",children:[e(a,{children:"Tab 1"}),e(a,{active:!0,children:"Tab 2"}),e(a,{children:"Tab 3"})]}),s(o,{orientation:"vertical",appearance:"underline",children:[e(a,{children:"Tab 1"}),e(a,{active:!0,children:"Tab 2"}),e(a,{children:"Tab 3"})]})]}),g=()=>s(z,{className:"flex items-center justify-center",style:{gap:20},children:[s(o,{appearance:"underline",children:[e(a,{active:!0,trailingElement:e(I,{variant:"success",className:"font-normal",children:"New"}),children:"Tab 1"}),e(a,{trailingElement:e(j,{isLegend:!0,status:"active",size:"tiny"}),children:"Tab 2"}),e(a,{leadingElement:e(H,{color:"overlay2",size:"small",icon:e(C,{})}),children:"Tab 3"})]}),s(o,{orientation:"vertical",appearance:"underline",children:[e(a,{active:!0,trailingElement:e(I,{variant:"success",className:"font-normal",children:"New"}),children:"Tab 1"}),e(a,{trailingElement:e(j,{isLegend:!0,status:"active",size:"tiny"}),children:"Tab 2"}),e(a,{leadingElement:e(H,{color:"overlay2",size:"small",icon:e(C,{})}),children:"Tab 3"})]})]});var A,w,S;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab>Tab 1</Tab>
    <Tab active>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>`,...(S=(w=T.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var B,D,V;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
  return <VerticalLayout className="flex items-center justify-center" style={{
    gap: 10
  }}>
      {variants.map(variant => <Tabs key={variant.id} appearance="underline" size={variant.size}>
          <Tab>Tab 1</Tab>
          <Tab active>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </Tabs>)}
    </VerticalLayout>;
}`,...(V=(D=v.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var $,R,O;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const appearances: any[] = [{
    id: 1,
    appearance: "default"
  }, {
    id: 2,
    appearance: "underline"
  }, {
    id: 3,
    appearance: "boxed"
  }, {
    id: 4,
    appearance: "lifted"
  }];

  // Filter out the "lifted" appearance for the vertical orientation
  const filteredAppearances = appearances.filter(key => key.appearance !== "lifted");
  return <HorizontalLayout className="flex items-center justify-center" style={{
    gap: 20
  }}>
      <VerticalLayout className="flex items-center justify-center" style={{
      gap: 10
    }}>
        {appearances.map(key => <Tabs key={key.id} appearance={key.appearance}>
            <Tab>Tab 1</Tab>
            <Tab active variant={key.appearance === "boxed" ? "success" : undefined}>
              Tab 2
            </Tab>
            <Tab>Tab 3</Tab>
          </Tabs>)}
      </VerticalLayout>
      <HorizontalLayout className="flex items-center justify-center" style={{
      gap: 10
    }}>
        {filteredAppearances.map(key => <Tabs orientation="vertical" key={key.id} appearance={key.appearance}>
            <Tab>Tab 1</Tab>
            <Tab active variant={key.appearance === "boxed" ? "success" : undefined}>
              Tab 2
            </Tab>
            <Tab>Tab 3</Tab>
          </Tabs>)}
      </HorizontalLayout>
    </HorizontalLayout>;
}`,...(O=(R=y.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,F,W;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <HorizontalLayout className="flex items-center justify-center" style={{
    gap: 20
  }}>
      <Tabs appearance="underline">
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
      <Tabs orientation="vertical" appearance="underline">
        <Tab>Tab 1</Tab>
        <Tab active>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </HorizontalLayout>;
}`,...(W=(F=x.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var q,G,J;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <HorizontalLayout className="flex items-center justify-center" style={{
    gap: 20
  }}>
      <Tabs appearance="underline">
        <Tab active trailingElement={<Badge variant="success" className="font-normal">
              New
            </Badge>}>
          Tab 1
        </Tab>
        <Tab trailingElement={<Indicator isLegend status="active" size="tiny"></Indicator>}>Tab 2</Tab>
        <Tab leadingElement={<Icon color="overlay2" size="small" icon={<HeartIcon></HeartIcon>}></Icon>}>Tab 3</Tab>
      </Tabs>
      <Tabs orientation="vertical" appearance="underline">
        <Tab active trailingElement={<Badge variant="success" className="font-normal">
              New
            </Badge>}>
          Tab 1
        </Tab>
        <Tab trailingElement={<Indicator isLegend status="active" size="tiny"></Indicator>}>Tab 2</Tab>
        <Tab leadingElement={<Icon color="overlay2" size="small" icon={<HeartIcon></HeartIcon>}></Icon>}>Tab 3</Tab>
      </Tabs>
    </HorizontalLayout>;
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Default","Sizes","Appearances","Orientations","WithAddons"];export{y as Appearances,T as Default,x as Orientations,v as Sizes,g as WithAddons,le as __namedExportsOrder,ce as default};
//# sourceMappingURL=tabs.stories-7dfd683f.js.map
