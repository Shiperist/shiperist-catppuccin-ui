import{j as e,a as o}from"./jsx-runtime-86dfebf6.js";import{R as S,r as d}from"./index-1b03fe98.js";import{c}from"./utils-111ae462.js";import{d as ze,H as Ce,T as Ee}from"./icons-820e6342.js";import{D as Te}from"./divider-styles-a498f302.js";import{B as je}from"./badge-styles-346a5dfa.js";import{V as ve}from"./vertical-layout-a7cca7b2.js";import{T as q}from"./text-b69a6b5d.js";import{I as ye}from"./icon-styles-a61fba80.js";import{B as Ve}from"./button-styles-68fe0f1f.js";import"./constants-6f1e8c11.js";const m=S.forwardRef((l,i)=>{const{disabled:s,defaultValue:r,variant:u="button",size:f="medium",placeholder:I,value:h,onChange:p,className:R="",children:v,...L}=l,[O,H]=d.useState(!1),[W,P]=d.useState(!1),M=d.useRef(null),ge=d.useRef(null),[y,z]=d.useState(h!==void 0?h:r);d.useEffect(()=>{z(h!==void 0?h:r)},[h,r]);const _=()=>{H(n=>!n),P(!1)},be=n=>{var a;p&&p(n),z(n),H(!1),P(!0),(a=M.current)==null||a.focus()},xe=n=>{const a=n.target.value;z(a),p&&p(a)};d.useEffect(()=>{const n=a=>{var b;(b=M.current)!=null&&b.contains(a.target)||(H(!1),W&&P(!1))};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[W]);const C=e(ze,{}),A=u==="button"?"button":"input",g=d.useMemo(()=>u==="input"?S.Children.toArray(v).filter(n=>{if(S.isValidElement(n)){const a=String(n.props.children).toLowerCase(),b=String(y||"").toLowerCase();return a.includes(b)}return!1}):S.Children.toArray(v),[u,v,y]);u==="input"&&g.length===0&&g.push(e(t,{size:f,disabled:!0,children:"Nothing found."},"nothing-found"));const F=c(Be(s,W,f,O),R),we=ke(g.filter(n=>S.isValidElement(n)));return o("div",{className:c("relative"),ref:M,children:[A==="input"?o("div",{className:F,...L,style:{...L.style},children:[e(A,{ref:i,type:"text",disabled:s,onClick:s?void 0:_,onChange:xe,placeholder:I,defaultValue:h!==void 0?h:y||r||"",className:De}),C&&e("div",{className:c("stroke-overlay2"),children:C})]}):o(A,{ref:ge,disabled:s,onClick:s?void 0:_,className:F,...L,children:[e("div",{className:"flex-grow text-left",children:I&&!y&&!r?e("p",{className:"text-overlay2",children:I}):e("p",{children:y||r})}),C&&e("div",{className:c("stroke-overlay2 py-1"),children:C})]}),O&&e("div",{className:we,children:g.map((n,a)=>{const Ne=a===g.length-1?{borderBottom:0}:{};return S.cloneElement(n,{onClick:()=>!n.props.disabled&&n.type!==k?be(String(n.props.children)):void 0,style:Ne,size:f})})})]})});m.displayName="Select";const t=S.forwardRef((l,i)=>{const{leadingElement:s,trailingElement:r,size:u,disabled:f,className:I="",value:h,children:p,...R}=l,v=c(Re(f,u),I);return o("div",{ref:i,className:v,...R,children:[s&&e("div",{className:c("stroke-overlay1 pr-2"),children:s}),e("div",{className:"flex-grow",style:{marginLeft:s?"0.2rem":0},children:p}),r&&e("div",{className:c("stroke-overlay1 pr-2"),children:r})]})});t.displayName="SelectItem";const D={small:"text-sm h-7",medium:"text-md h-8",large:"text-lg h-9"},Be=(l,i,s,r)=>c("flex border-overlay0 w-full flex-row items-center px-4 transition-all duration-150 ease-in-out",D[s]||D.medium,{"cursor-not-allowed opacity-50":l,"hover:border-overlay2":!l,"ring-overlay2 ring":i,"outline-none border-l border-r border-t rounded-tr-xl rounded-tl-xl border-b":r,"border rounded-xl":!r}),De=c("w-full flex-grow bg-transparent outline-none"),ke=l=>c("absolute z-50  flex max-h-[250px] w-full py-1 flex-col overflow-y-auto rounded-bl-xl rounded-br-xl",{"border-overlay0 border-l border-b border-r":l.length>0,"border-none border-transparent":l.length===0}),Re=(l,i)=>c("bg-base text-text flex w-full cursor-pointer max-w-full items-center pl-4 pr-2 text-left transition duration-150 ease-in-out",D[i]||D.medium,{"cursor-not-allowed opacity-50":l,"hover:bg-surface0":!l}),Le=()=>c("cursor-text font-bold text-sm px-3 text-overlay2"),k=S.forwardRef((l,i)=>{const{className:s="",children:r,...u}=l;return e("div",{className:c(Le(),s),children:e("span",{ref:i,...u,children:r})})});k.displayName="SelectItemHeader";const Je={title:"Forms/Select",component:m,argTypes:{disabled:{control:"boolean",description:"Whether the select is disabled."},placeholder:{control:"text",description:"Determines the placeholder of the select."},defaultValue:{control:"text",description:"Determines the default value of the select."},value:{control:"text",description:"Determines the value of the select."},onChange:{control:"function",description:"Callback function triggered when the value of the select changes."},variant:{control:{type:"select"},description:"Determines the type of the select."},size:{control:{type:"select"},description:"Determines the size of the select."}}},G=e(ye,{icon:e(Ce,{}),size:"small"}),J=e(Ve,{size:"small",appearance:"ghost",className:"z-20",leadingElement:e(ye,{icon:e(Ee,{}),size:"small"})}),K=l=>e("div",{className:"flex h-96 items-center justify-center",children:o(m,{...l,style:{width:"32rem"},children:[e(t,{id:"item1",children:"Select one"}),e(t,{id:"item2",children:"Select two"}),e(t,{id:"item3",children:"Select three"})]})}),x=K.bind({});x.args={disabled:!1,placeholder:"Select items...",defaultValue:"",value:"",variant:"button",size:"medium"};const E=()=>{const l=[{id:1,name:"Durward Reynolds",disabled:!1},{id:2,name:"Kenton Towne",disabled:!1},{id:3,name:"Therese Wunsch",disabled:!1},{id:4,name:"Benedict Kessler",disabled:!0}],[i,s]=d.useState(l[0].name);return e("div",{className:"flex h-96 items-center justify-center",children:e(m,{placeholder:"Select items...",variant:"button",defaultValue:i,onChange:s,style:{width:"32rem"},children:l.map(r=>e(t,{value:r.name,disabled:r.disabled,children:r.name},r.id))})})},w=K.bind({});w.args={disabled:!0,placeholder:"Select items..."};const N=K.bind({});N.args={placeholder:"Select items...",variant:"button"};const T=()=>e("div",{className:"mt-8 flex h-96 justify-center",children:o(m,{placeholder:"Select items...",style:{width:"32rem"},children:[e(k,{children:"Items"}),e(t,{id:"item1",children:"Select one"}),e(t,{id:"item2",children:"Select two"}),e(t,{id:"item3",children:"Select three"}),e(Te,{className:"mb-3"}),e(k,{children:"Cars"}),e(t,{id:"item4",trailingElement:e(je,{variant:"success",children:"New"}),children:"Audi"}),e(t,{id:"item5",children:"Mercedes-Benz"}),e(t,{id:"item6",children:"BMW"})]})}),j=()=>e("div",{className:"flex h-96 items-center justify-center",children:o(m,{placeholder:"Select items...",style:{width:"32rem"},children:[e(t,{leadingElement:G,id:"item2",children:"Select one"}),e(t,{trailingElement:J,id:"item3",children:"Select two"}),e(t,{leadingElement:G,trailingElement:J,id:"item4",children:"Select three"})]})}),V=()=>e("div",{className:"flex h-96 items-center justify-center",children:e(ve,{style:{gap:8},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(i=>o(m,{size:i.size,placeholder:"Select items...",variant:"button",style:{width:"32rem"},children:[e(t,{id:"item1",children:"Select one"}),e(t,{id:"item2",children:"Select two"}),e(t,{id:"item3",children:"Select three"})]},i.id))})}),B=()=>e("div",{className:"flex h-96 items-center justify-center",children:o(ve,{style:{gap:4,width:"32rem"},children:[e(q,{bold:!0,children:"Button"}),o(m,{variant:"button",placeholder:"Select items...",children:[e(t,{id:"item1",children:"Select one"}),e(t,{id:"item2",children:"Select two"}),e(t,{id:"item3",children:"Select three"})]}),e(q,{bold:!0,children:"Input"}),o(m,{variant:"input",placeholder:"Select/search items...",children:[e(t,{id:"item1",children:"Select one"}),e(t,{id:"item2",children:"Select two"}),e(t,{id:"item3",children:"Select three"})]})]})});var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Select {...args} style={{
      width: "32rem"
    }}>
        <SelectItem id="item1">Select one</SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem id="item3">Select three</SelectItem>
      </Select>
    </div>;
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const people = [{
    id: 1,
    name: "Durward Reynolds",
    disabled: false
  }, {
    id: 2,
    name: "Kenton Towne",
    disabled: false
  }, {
    id: 3,
    name: "Therese Wunsch",
    disabled: false
  }, {
    id: 4,
    name: "Benedict Kessler",
    disabled: true
  }];
  const [selectedPerson, setSelectedPerson] = useState(people[0].name);
  return <div className="flex h-96 items-center justify-center">
      <Select placeholder="Select items..." variant="button" defaultValue={selectedPerson} onChange={setSelectedPerson} style={{
      width: "32rem"
    }}>
        {people.map(person => <SelectItem key={person.id} value={person.name} disabled={person.disabled}>
            {person.name}
          </SelectItem>)}
      </Select>
    </div>;
}`,...($=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,le;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Select {...args} style={{
      width: "32rem"
    }}>
        <SelectItem id="item1">Select one</SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem id="item3">Select three</SelectItem>
      </Select>
    </div>;
}`,...(le=(te=w.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,re,se;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  return <div className="flex h-96 items-center justify-center">
      <Select {...args} style={{
      width: "32rem"
    }}>
        <SelectItem id="item1">Select one</SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem id="item3">Select three</SelectItem>
      </Select>
    </div>;
}`,...(se=(re=N.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,ae;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <div className="mt-8 flex h-96 justify-center">
      <Select placeholder="Select items..." style={{
      width: "32rem"
    }}>
        <SelectItemHeader>Items</SelectItemHeader>
        <SelectItem id="item1">Select one</SelectItem>
        <SelectItem id="item2">Select two</SelectItem>
        <SelectItem id="item3">Select three</SelectItem>
        <Divider className="mb-3" />
        <SelectItemHeader>Cars</SelectItemHeader>
        <SelectItem id="item4" trailingElement={<Badge variant="success">New</Badge>}>
          Audi
        </SelectItem>
        <SelectItem id="item5">Mercedes-Benz</SelectItem>
        <SelectItem id="item6">BMW</SelectItem>
      </Select>
    </div>;
}`,...(ae=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var oe,de,me;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <div className="flex h-96 items-center justify-center">
      <Select placeholder="Select items..." style={{
      width: "32rem"
    }}>
        <SelectItem leadingElement={icon} id="item2">
          Select one
        </SelectItem>
        <SelectItem trailingElement={trashIcon} id="item3">
          Select two
        </SelectItem>
        <SelectItem leadingElement={icon} trailingElement={trashIcon} id="item4">
          Select three
        </SelectItem>
      </Select>
    </div>;
}`,...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ue,he,Se;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
        {sizes.map(key => <Select key={key.id} size={key.size} placeholder="Select items..." variant="button" style={{
        width: "32rem"
      }}>
            <SelectItem id="item1">Select one</SelectItem>
            <SelectItem id="item2">Select two</SelectItem>
            <SelectItem id="item3">Select three</SelectItem>
          </Select>)}
      </VerticalLayout>
    </div>;
}`,...(Se=(he=V.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var pe,fe,Ie;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <div className="flex h-96 items-center justify-center">
      <VerticalLayout style={{
      gap: 4,
      width: "32rem"
    }}>
        <Text bold>Button</Text>
        <Select variant="button" placeholder="Select items...">
          <SelectItem id="item1">Select one</SelectItem>
          <SelectItem id="item2">Select two</SelectItem>
          <SelectItem id="item3">Select three</SelectItem>
        </Select>
        <Text bold>Input</Text>
        <Select variant="input" placeholder="Select/search items...">
          <SelectItem id="item1">Select one</SelectItem>
          <SelectItem id="item2">Select two</SelectItem>
          <SelectItem id="item3">Select three</SelectItem>
        </Select>
      </VerticalLayout>
    </div>;
}`,...(Ie=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};const Qe=["Default","ControlledSelection","DisabledState","Placeholder","WithTitledSelectItem","WithIconsInSelectItem","Sizes","Types"];export{E as ControlledSelection,x as Default,w as DisabledState,N as Placeholder,V as Sizes,B as Types,j as WithIconsInSelectItem,T as WithTitledSelectItem,Qe as __namedExportsOrder,Je as default};
//# sourceMappingURL=select.stories-f0dfabaa.js.map
