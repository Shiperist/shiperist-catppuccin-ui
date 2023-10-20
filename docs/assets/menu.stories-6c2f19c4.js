import{a as d,j as e}from"./jsx-runtime-86dfebf6.js";import{c as i}from"./utils-3450518e.js";import{R as l,r as $}from"./index-1b03fe98.js";import{D as ee}from"./divider-styles-b25e09be.js";import{B as ne}from"./badge-styles-34607c67.js";import{V as te}from"./vertical-layout-78c62444.js";import{I as U}from"./icon-styles-73ea26bc.js";import{H as re,d as ie}from"./icons-30e71a13.js";import"./constants-6f1e8c11.js";const u=l.forwardRef((n,r)=>{const{className:s="",children:m,disabled:a,text:b,leadingElement:c,trailingElement:N,onHover:z,size:h="medium",...f}=n,[j,X]=$.useState(!1),H=()=>{X(M=>!M)},Y=i(se(a,h,j),s),Z=me(l.Children.toArray(m).filter(M=>l.isValidElement(M)),h);return d("div",{className:i(""),children:[e("div",{className:Y,onClick:a?void 0:H,onMouseEnter:!a&&z?H:void 0,...f,style:{...f.style},children:d("div",{ref:r,className:ae,children:[c&&e("div",{className:i("stroke-overlay1 pr-2"),children:c}),e("div",{className:"flex w-full items-center justify-center",style:{marginLeft:c?"0.2rem":0},children:b}),N&&e("div",{className:i("stroke-overlay1 pr-2"),children:N})]})}),j&&e("div",{className:Z,children:l.Children.toArray(m).map(M=>l.cloneElement(M,{size:h}))})]})});u.displayName="Menu";const w={small:"text-sm h-7",medium:"text-md h-8",large:"text-lg h-9"},C={small:"min-w-32",medium:"min-w-48",large:"min-w-64"},se=(n,r,s)=>i("flex border-overlay0 w-full flex-row items-center px-4 transition-all cursor-pointer duration-150 ease-in-out",w[r]||w.medium,{"cursor-not-allowed opacity-50":n,"hover:bg-surface0 hover:border-overlay2 active:translate-y-0.5":!n,"outline-none border-l border-r border-t rounded-tr-xl rounded-tl-xl":s,"border rounded-xl border-b":!s}),me=(n,r)=>i("absolute z-50 flex max-h-[250px] w-full py-1 flex-col overflow-y-auto rounded-bl-xl rounded-br-xl rounded-tr-xl max-w-[300px]",C[r]||C.medium,{"border-overlay0 border":n.length>0,"border-none border-transparent":n.length===0}),ae=i("w-full flex-grow bg-transparent outline-none flex justify-center items-center"),le=(n,r)=>i("bg-base text-text flex w-full cursor-pointer max-w-full items-center pl-4 pr-2 text-left transition duration-150 ease-in-out",w[r]||w.medium,{"cursor-not-allowed opacity-50":n,"hover:bg-surface0":!n}),oe=()=>i("cursor-text font-bold text-sm w-full text-overlay2 px-3"),t=l.forwardRef((n,r)=>{const{leadingElement:s,trailingElement:m,size:a,disabled:b,className:c="",value:N,children:z,...h}=n,f=i(le(b,a),c);return d("div",{ref:r,className:f,...h,children:[s&&e("div",{className:i("stroke-overlay1 pr-2"),children:s}),e("div",{className:"flex-grow",style:{marginLeft:s?"0.2rem":0},children:z}),m&&e("div",{className:i("stroke-overlay1 pr-2"),children:m})]})});t.displayName="MenuItem";const E=l.forwardRef((n,r)=>{const{className:s="",children:m,...a}=n;return e("div",{className:i(oe(),s),children:e("span",{ref:r,...a,children:m})})});E.displayName="MenuItemHeader";const ve={title:"Components/Menu",component:u,argTypes:{disabled:{control:"boolean",description:"Whether the menu is disabled."},onHover:{control:"boolean",description:"Whether the menu is set to open when hovering."},text:{control:"text",description:"Determines the text of the menu."},size:{control:{type:"select"},description:"Determines the size of the menu."}}},I=e(U,{icon:e(re,{}),size:"small"}),de=e(U,{icon:e(ie,{}),size:"small"}),S=n=>e("div",{className:"flex h-96 items-center justify-center",children:d(u,{...n,style:{width:"10rem"},children:[e(t,{id:"item1",children:"Menu one"}),e(t,{id:"item2",children:"Menu two"}),e(t,{id:"item3",children:"Menu three"})]})}),o=S.bind({});o.args={disabled:!1,size:"medium",onHover:!1,text:"Toggle menu"};const p=S.bind({});p.args={...o.args,disabled:!0};const g=S.bind({});g.args={...o.args,onHover:!0};const y=()=>e("div",{className:"mt-8 flex h-96 justify-center",children:d(u,{text:"Toggle menu",style:{width:"10rem"},children:[e(E,{children:"Items"}),e(t,{id:"item1",children:"Menu one"}),e(t,{id:"item2",disabled:!0,children:"Menu two"}),e(t,{id:"item3",children:"Menu three"}),e(ee,{className:"mb-3"}),e(E,{children:"Cars"}),e(t,{id:"item4",trailingElement:e(ne,{variant:"success",children:"New"}),children:"Audi"}),e(t,{id:"item5",children:"Mercedes-Benz"}),e(t,{id:"item6",children:"BMW"})]})}),v=()=>e("div",{className:"flex h-96 items-center justify-center",children:d(u,{text:"Toggle menu",style:{width:"10rem"},trailingElement:de,children:[e(t,{leadingElement:I,id:"item2",children:"Menu one"}),e(t,{trailingElement:I,id:"item3",children:"Menu two"}),e(t,{leadingElement:I,trailingElement:I,id:"item4",children:"Menu three"})]})}),x=()=>e("div",{className:"flex h-96 items-center justify-center",children:e(te,{style:{gap:8},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(r=>d(u,{text:"Toggle menu",size:r.size,style:{width:"10rem"},children:[e(t,{id:"item1",children:"Menu one"}),e(t,{id:"item2",children:"Menu two"}),e(t,{id:"item3",children:"Menu three"})]},r.id))})});var T,D,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Menu {...args} style={{
      width: "10rem"
    }}>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2">Menu two</MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
      </Menu>
    </div>;
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var B,W,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Menu {...args} style={{
      width: "10rem"
    }}>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2">Menu two</MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
      </Menu>
    </div>;
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var L,O,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Menu {...args} style={{
      width: "10rem"
    }}>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2">Menu two</MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
      </Menu>
    </div>;
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,_,q;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <div className="mt-8 flex h-96 justify-center">
      <Menu text="Toggle menu" style={{
      width: "10rem"
    }}>
        <MenuItemHeader>Items</MenuItemHeader>
        <MenuItem id="item1">Menu one</MenuItem>
        <MenuItem id="item2" disabled>
          Menu two
        </MenuItem>
        <MenuItem id="item3">Menu three</MenuItem>
        <Divider className="mb-3" />
        <MenuItemHeader>Cars</MenuItemHeader>
        <MenuItem id="item4" trailingElement={<Badge variant="success">New</Badge>}>
          Audi
        </MenuItem>
        <MenuItem id="item5">Mercedes-Benz</MenuItem>
        <MenuItem id="item6">BMW</MenuItem>
      </Menu>
    </div>;
}`,...(q=(_=y.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var F,G,J;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <div className="flex h-96 items-center justify-center">
      <Menu text="Toggle menu" style={{
      width: "10rem"
    }} trailingElement={chvrn}>
        <MenuItem leadingElement={icon} id="item2">
          Menu one
        </MenuItem>
        <MenuItem trailingElement={icon} id="item3">
          Menu two
        </MenuItem>
        <MenuItem leadingElement={icon} trailingElement={icon} id="item4">
          Menu three
        </MenuItem>
      </Menu>
    </div>;
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const sizes: any[] = [{
    id: 1,
    size: "small"
  }, {
    id: 2,
    size: "medium"
  }, {
    id: 3,
    size: "large"
  }];
  return <div className="flex h-96 items-center justify-center">
      <VerticalLayout style={{
      gap: 8
    }}>
        {sizes.map(key => <Menu text="Toggle menu" key={key.id} size={key.size} style={{
        width: "10rem"
      }}>
            <MenuItem id="item1">Menu one</MenuItem>
            <MenuItem id="item2">Menu two</MenuItem>
            <MenuItem id="item3">Menu three</MenuItem>
          </Menu>)}
      </VerticalLayout>
    </div>;
}`,...(Q=(P=x.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const xe=["Default","DisabledState","HoverOpen","WithTitledMenuItem","WithIcons","Sizes"];export{o as Default,p as DisabledState,g as HoverOpen,x as Sizes,v as WithIcons,y as WithTitledMenuItem,xe as __namedExportsOrder,ve as default};
//# sourceMappingURL=menu.stories-6c2f19c4.js.map
