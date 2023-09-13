import{j as t,a as $}from"./jsx-runtime-86dfebf6.js";import{c as u}from"./utils-111ae462.js";import{R as Oe,r as y}from"./index-1b03fe98.js";import{c as E}from"./constants-6f1e8c11.js";import{V as m}from"./vertical-layout-a7cca7b2.js";const o=Oe.forwardRef((a,e)=>{const{disabled:r,variant:c="base",appearance:ve="outline",size:l="medium",defaultValue:be,tooltip:we,marks:ke,min:s=0,max:i=100,step:f=1,track:Ve=!0,className:He="",...ze}=a,[p,A]=y.useState(be||0),[T,C]=y.useState(!1),[O,j]=y.useState(!1),F=y.useRef(null),D=(p-s)/(i-s)*100,Se=`calc(${D}% + (${p===s?0:p===i?"-1":"-0.5"}px))`,Re=n=>{A(Number(n.target.value))},Me=()=>{C(!0)},xe=()=>{C(!1)},P=n=>{var d;if(!r){const g=(d=F.current)==null?void 0:d.getBoundingClientRect();if(g){const N=(n.clientX-g.left)/g.width*(i-s)+s;A(Math.min(i,Math.max(s,Math.round(N/f)*f)))}}},Le=n=>{P(n),C(!0)};y.useEffect(()=>{let n;const d=g=>{if(T){const W=g;n=requestAnimationFrame(()=>P(W))}};return T&&window.addEventListener("mousemove",d),()=>{window.removeEventListener("mousemove",d),cancelAnimationFrame(n)}},[T]);const Te=()=>{j(!0)},Ce=()=>{j(!1)},De=Ue(r),We=qe(r,l),Ne=Be(r,ve,c,l),$e=Xe(r,E(c),l),Ee=Ye(O,l),w=[],Ae=Math.ceil((i-s)/f);for(let n=s;n<=i;n+=f)if(w.length<30){const d=n<=p?"bg-white":`bg-${E(c)}`,N=Ge(n===s,n===i,l,d);w.push(t("div",{className:N,style:{display:w.length&&Ae>30?"none":"block",left:`${(n-s)/(i-s)*100}%`,top:h[l]||h.medium,transform:"translate(-50%, -50%)"}},n))}return $("div",{className:Ie,children:[$("div",{className:De,ref:F,children:[t("input",{ref:e,type:"range",value:p,max:i,min:s,step:f,className:We,onChange:r?void 0:Re,disabled:r,...ze}),t("div",{className:Ne,style:Fe(Se,h[l]||h.medium),onMouseDown:r?void 0:Me,onMouseUp:r?void 0:xe,onMouseEnter:r?void 0:Te,onMouseLeave:r?void 0:Ce}),Ve&&t("div",{className:$e,onMouseDown:r?void 0:Le,style:Pe(D,h[l]||h.medium)}),ke&&w]}),we&&t("div",{className:Ee,style:_e(O,D),children:Math.round(p)})]})});o.displayName="Range";const je=(a,e)=>({filled:`bg-${a} border border-base`,outline:"bg-base border-4"})[e]||"bg-base border-4",L={small:"h-1",medium:"h-2",large:"h-3"},_={small:"w-4 h-4",medium:"w-5 h-5",large:"w-6 h-6"},h={small:"calc(50% + 4.5px)",medium:"calc(50% + 2.5px)",large:"calc(50% - -0.5px)"},Fe=(a,e)=>({left:a,top:e,transform:"translate(-50%, -50%)"}),Pe=(a,e)=>({width:`${a}%`,top:e,transform:"translateY(-50%)"}),I={small:"bottom-1",medium:"bottom-2",large:"bottom-3"},U={small:"w-0.5 h-0.5",medium:"w-1 h-1",large:"w-0.5 h-2"},_e=(a,e)=>({width:"32px",display:a?"flex":"none",left:`calc(${e}% + (${8-e*.15}px))`,transform:"translate(-50%, -100%)"}),Ie=u("flex w-full items-center"),Ue=a=>u("relative w-full transition-all",{"pointer-not-allowed opacity-50":a}),qe=(a,e)=>u("bg-surface2 w-full cursor-pointer appearance-none rounded-lg transition-all",L[e]||L.medium,{"cursor-not-allowed":a}),Be=(a,e,r,c)=>u(`absolute z-10 ${je(E(r),e)} cursor-pointer rounded-full`,_[c]||_.medium,{"border-overlay1 cursor-not-allowed":a&&e!=="filled","bg-overlay0":a&&e==="filled"}),Xe=(a,e,r)=>u(`absolute cursor-pointer rounded-lg bg-${e}`,L[r]||L.medium,{"bg-surface1 cursor-not-allowed":a}),Ye=(a,e)=>u("bg-mantle absolute flex w-4 justify-center rounded px-2 py-1 text-xs text-white",I[e]||I.medium,{"pointer-events-none opacity-0":!a,"pointer-events-auto opacity-100":a}),Ge=(a,e,r,c)=>u("absolute rounded",U[r]||U.medium,c,{"opacity-0":a||e}),aa={title:"Forms/Range",component:o,argTypes:{disabled:{control:"boolean",description:"Whether the range slider is disabled."},track:{control:"boolean",description:"Whether to show the track."},tooltip:{control:"boolean",description:"Whether to show the tooltip with the current value."},marks:{control:"boolean",description:"Whether to show marks on the track. Works only upto 30 marks."},appearance:{control:{type:"select"},description:"Determines the appearance style of the range slider."},variant:{control:{type:"select"},description:"Determines the color variant of the range slider."},size:{control:{type:"select"},description:"Determines the size of the range slider."},min:{control:"number",description:"The minimum value of the range slider."},max:{control:"number",description:"The maximum value of the range slider."},step:{control:"number",description:"The step value of the range slider."},defaultValue:{control:"number",description:"Determines the default value of the range slider."}}},ye=a=>t(o,{...a,style:{gap:12,width:"32rem"}}),v=ye.bind({});v.args={disabled:!1,appearance:"outline",variant:"base",min:0,marks:!1,max:100,step:1,track:!0,defaultValue:50,tooltip:!0,size:"medium"};const k=()=>t(m,{style:{gap:8,width:"32rem"},children:[{id:1,variant:"base"},{id:2,variant:"success"},{id:3,variant:"warning"},{id:4,variant:"info"},{id:5,variant:"danger"}].map(e=>t(o,{variant:e.variant,size:"medium",defaultValue:25},e.id))}),V=()=>t(m,{style:{gap:8,width:"32rem"},children:[{id:1,name:"filled"},{id:2,name:"outline"}].map(e=>t(o,{appearance:e.name,size:"medium",defaultValue:25},e.id))}),z=()=>t(m,{style:{gap:8,width:"32rem"},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"}].map(e=>t(o,{size:e.size,defaultValue:25},e.id))}),S=()=>t(m,{style:{gap:8,width:"32rem"},children:t(o,{size:"medium",tooltip:!0,step:5,defaultValue:25})}),R=()=>t(m,{style:{gap:8,width:"32rem"},children:t(o,{size:"medium",marks:!0,tooltip:!0,step:10,defaultValue:20})}),M=()=>t(m,{style:{gap:8,width:"32rem"},children:t(o,{size:"medium",tooltip:!0,defaultValue:25})}),x=()=>$(m,{style:{gap:8,width:"32rem"},children:[t(o,{size:"medium",track:!0,defaultValue:25}),t(o,{size:"medium",track:!1,defaultValue:25})]}),b=ye.bind({});b.args={disabled:!0,defaultValue:25};var q,B,X;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`args => <Range {...args} style={{
  gap: 12,
  width: "32rem"
}}></Range>`,...(X=(B=v.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var Y,G,H;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
    gap: 8,
    width: "32rem"
  }}>
      {variants.map(key => <Range key={key.id} variant={key.variant} size="medium" defaultValue={25}></Range>)}
    </VerticalLayout>;
}`,...(H=(G=k.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const appearances: any[] = [{
    id: 1,
    name: "filled"
  }, {
    id: 2,
    name: "outline"
  }];
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {appearances.map(key => <Range key={key.id} appearance={key.name} size="medium" defaultValue={25}></Range>)}
    </VerticalLayout>;
}`,...(Q=(K=V.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,ae;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      {sizes.map(key => <Range key={key.id} size={key.size} defaultValue={25}></Range>)}
    </VerticalLayout>;
}`,...(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      <Range size="medium" tooltip step={5} defaultValue={25}></Range>
    </VerticalLayout>;
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,oe,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      <Range size="medium" marks tooltip step={10} defaultValue={20}></Range>
    </VerticalLayout>;
}`,...(ie=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      <Range size="medium" tooltip defaultValue={25}></Range>
    </VerticalLayout>;
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <VerticalLayout style={{
    gap: 8,
    width: "32rem"
  }}>
      <Range size="medium" track defaultValue={25}></Range>
      <Range size="medium" track={false} defaultValue={25}></Range>
    </VerticalLayout>;
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,fe;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <Range {...args} style={{
  gap: 12,
  width: "32rem"
}}></Range>`,...(fe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const ta=["Default","Variants","Appearances","Sizes","WithAdjustedSteps","WithMarks","WithTooltip","TrackOnOrOff","DisabledState"];export{V as Appearances,v as Default,b as DisabledState,z as Sizes,x as TrackOnOrOff,k as Variants,S as WithAdjustedSteps,R as WithMarks,M as WithTooltip,ta as __namedExportsOrder,aa as default};
//# sourceMappingURL=range.stories-1fc643d0.js.map
