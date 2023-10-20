import{j as o}from"./jsx-runtime-86dfebf6.js";import"./utils-3450518e.js";import{I as r}from"./icon-styles-73ea26bc.js";import{H as z}from"./horizontal-layout-d76e9e8d.js";import{H as d}from"./icons-30e71a13.js";import"./index-1b03fe98.js";const h={title:"Components/Icon",component:r,argTypes:{size:{control:{type:"select"},description:"Determines the size of the icon."},icon:{control:{type:"object"},description:"Determines the icon of the icon component."},color:{control:{type:"select"},description:"Determines the color of the icon."}}},u=i=>o(r,{...i,icon:o(d,{}),size:"medium"}),e=u.bind({});e.args={size:"",icon:"",color:"overlay2"};const n=()=>o(z,{style:{gap:10},children:[{id:1,size:"tiny"},{id:2,size:"small"},{id:3,size:"medium"},{id:4,size:"large"},{id:5,size:"xlarge"}].map(t=>o(r,{icon:o(d,{}),color:"overlay2",size:t.size},t.id))});var s,a,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return <Icon {...args} icon={<HeartIcon />} size="medium"></Icon>;
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const variants: any[] = [{
    id: 1,
    size: "tiny"
  }, {
    id: 2,
    size: "small"
  }, {
    id: 3,
    size: "medium"
  }, {
    id: 4,
    size: "large"
  }, {
    id: 5,
    size: "xlarge"
  }];
  return <HorizontalLayout style={{
    gap: 10
  }}>
      {variants.map(variant => <Icon icon={<HeartIcon />} key={variant.id} color="overlay2" size={variant.size}></Icon>)}
    </HorizontalLayout>;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Default","Sizes"];export{e as Default,n as Sizes,x as __namedExportsOrder,h as default};
//# sourceMappingURL=icon.stories-72d32922.js.map
