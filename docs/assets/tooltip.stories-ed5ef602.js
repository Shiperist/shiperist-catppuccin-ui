import{a as S,j as e}from"./jsx-runtime-86dfebf6.js";import{c as C}from"./utils-111ae462.js";import{r as l}from"./index-1b03fe98.js";import{B as v}from"./button-styles-68fe0f1f.js";import{V as I}from"./vertical-layout-a7cca7b2.js";import{T as M}from"./text-b69a6b5d.js";import{L as _}from"./link-52bdc655.js";import"./constants-6f1e8c11.js";import"./icons-820e6342.js";const c=i=>{const{className:r="",children:n,text:s,visible:t,showDelay:o=250,hideDelay:P=250,position:x="top",...R}=i,[u,w]=l.useState(t||!1),[p,$]=l.useState(null),d=l.useRef(null),f=l.useRef(null);l.useEffect(()=>{if(u&&d.current&&f.current){const y=O(d,f,x);Object.assign(d.current.style,y)}},[u,x]);const V=()=>{p&&clearTimeout(p);const y=window.setTimeout(()=>{w(t||!0)},o);$(y)},E=()=>{p&&clearTimeout(p),window.setTimeout(()=>{w(t||!1)},P)},H=C(A,r);return S("div",{ref:f,onMouseEnter:V,onMouseLeave:E,children:[u&&e("div",{ref:d,className:H,style:{...R.style},children:s}),n]})};c.displayName="Tooltip";const A=C("bg-mantle max-w-16 border-surface0 absolute z-10 h-fit max-h-48 w-full overflow-y-auto rounded-xl border px-2 py-1 text-center text-sm"),O=(i,r,n)=>{if(!i.current||!r.current)return;const s=i.current.getBoundingClientRect(),t=r.current.getBoundingClientRect(),o={};switch(n){case"top":o.bottom=`${t.height+8}px`,o.left=`calc(50% - ${s.width/2}px)`;break;case"bottom":o.top=`${t.height+8}px`,o.left=`calc(50% - ${s.width/2}px)`;break;case"left":o.right=`${t.width+8}px`,o.top=`calc(50% - ${s.height/2}px)`;break;case"right":o.left=`${t.width+8}px`,o.top=`calc(50% - ${s.height/2}px)`;break}return o},Y={title:"Components/Tooltip",component:c,argTypes:{position:{control:{type:"select"},description:"Determines the custom position of the tooltip."},text:{control:"object",description:"Determines the text of the tooltip, you can use a div with many text components, for example mix of text and links"},showDelay:{control:"number",description:"Determines the delay in milliseconds before the tooltip is displayed. The tooltip will become visible after hovering over the element for this duration."},hideDelay:{control:"number",description:"Determines the delay in milliseconds before the tooltip is hidden. The tooltip will be hidden after moving the cursor away from the element for this duration."},children:{control:"object",description:"Determines the children of the tooltip, for example a button."},visible:{control:"boolean",description:"Whether is the tooltip visible, if not set - default will be used. If set to true the tooltip on hover will be shown all the time"}}},z=i=>e("div",{className:"flex h-16 items-center justify-center",style:{width:"32rem"},children:e("div",{style:{position:"relative"},children:e(c,{text:i.text,...i,children:e(v,{children:"Hover me"})})})}),a=z.bind({});a.args={children:{},position:"top",visible:!1,text:"Tooltip text",showDelay:250,hideDelay:250};const m=()=>{const i=[{id:1,position:"Left"},{id:2,position:"Top"},{id:3,position:"Bottom"},{id:4,position:"Right"}],r=[];for(let n=0;n<i.length;n+=2)r.push(i.slice(n,n+2));return e("div",{className:"flex h-96 items-center justify-center",style:{width:"32rem"},children:e(I,{style:{gap:8},children:r.map((n,s)=>e("div",{className:"flex",style:{gap:8},children:n.map(t=>e("div",{style:{position:"relative"},children:e(c,{text:t.position.toLowerCase(),position:t.position.toLowerCase(),visible:!0,children:e(v,{className:"w-32",children:t.position})})},t.id))},s))})})},h=()=>e("div",{className:"flex h-96 items-center justify-center",style:{width:"32rem"},children:e("div",{style:{position:"relative"},children:e(c,{text:S(M,{children:["This tooltip contains a hyperlink. Visit ",e(_,{className:"text-blue",children:"google.com"})]}),visible:!0,children:e(v,{className:"w-32",children:"Hover me"})})})});var b,g,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return <div className="flex h-16 items-center justify-center" style={{
    width: "32rem"
  }}>
      <div style={{
      position: "relative"
    }}>
        <Tooltip text={args.text} {...args}>
          <Button>Hover me</Button>
        </Tooltip>
      </div>
    </div>;
}`,...(T=(g=a.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var N,k,L;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const positions: any[] = [{
    id: 1,
    position: "Left"
  }, {
    id: 2,
    position: "Top"
  }, {
    id: 3,
    position: "Bottom"
  }, {
    id: 4,
    position: "Right"
  }];
  const chunkedPositions: any[] = [];
  for (let i = 0; i < positions.length; i += 2) {
    chunkedPositions.push(positions.slice(i, i + 2));
  }
  return <div className="flex h-96 items-center justify-center" style={{
    width: "32rem"
  }}>
      <VerticalLayout style={{
      gap: 8
    }}>
        {chunkedPositions.map((row, rowIndex) => <div className="flex" key={rowIndex} style={{
        gap: 8
      }}>
            {row.map(item => <div key={item.id} style={{
          position: "relative"
        }}>
                <Tooltip text={item.position.toLowerCase()} position={item.position.toLowerCase()} visible>
                  <Button className="w-32">{item.position}</Button>
                </Tooltip>
              </div>)}
          </div>)}
      </VerticalLayout>
    </div>;
}`,...(L=(k=m.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var D,j,B;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <div className="flex h-96 items-center justify-center" style={{
    width: "32rem"
  }}>
      <div style={{
      position: "relative"
    }}>
        <Tooltip text={<Text>
              This tooltip contains a hyperlink. Visit <Link className="text-blue">google.com</Link>
            </Text>} visible>
          <Button className="w-32">Hover me</Button>
        </Tooltip>
      </div>
    </div>;
}`,...(B=(j=h.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const Z=["Default","Positions","AdvancedTooltip"];export{h as AdvancedTooltip,a as Default,m as Positions,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=tooltip.stories-ed5ef602.js.map
