import{a as e,j as a,F as w}from"./jsx-runtime-86dfebf6.js";import"./utils-3450518e.js";import{A as r,a as H,b as d}from"./avatar-66c81d88.js";import{U as W}from"./icons-30e71a13.js";import{C as m}from"./card-styles-1af7731f.js";import{V as h}from"./vertical-layout-78c62444.js";import{T as u}from"./text-2fb250cc.js";import{C as g}from"./caption-0d8799a8.js";import{C as v}from"./caption2-badc0d11.js";import{H as X}from"./horizontal-layout-d76e9e8d.js";import"./index-1b03fe98.js";import"./constants-6f1e8c11.js";const $={title:"Components/Avatar",component:r,argTypes:{shape:{control:{type:"select"},description:"Determines the shape of the avatar."},size:{control:{type:"select"},description:"Determines the size of the avatar."},backgroundColor:{control:{type:"select"},description:"Determines the background color of the avatar if avatar/default avatar isn't set."},defaultImage:{control:"text",description:"Sets the default image of the avatar, that will be shown as a default."},isLoading:{control:"boolean",description:"Whether is avatar loading."},alt:{control:"text",description:"Determines the alt of the avatar's image."},image:{control:"text",description:"Sets the image of the avatar."},icon:{control:"object",description:"Determines the icon of the avatar, that will be shown if avatar/default avatar isn't set."}}},_=y=>a(w,{children:[{id:1,name:"Joseph Deor",job:"Developer, UI/UX",lastSeen:"2h"}].map(o=>e(m,{orientation:"horizontal",appearance:"outline",className:"p-4",gap:"1rem",children:[a(r,{...y,children:a(d,{name:o.name})}),e(h,{children:[a(u,{children:o.name}),a(g,{bold:!0,children:o.job}),e(v,{className:"text-overlay0",children:["Last activity: ",o.lastSeen," ago"]})]})]},o.id))}),n=_.bind({});n.args={shape:"rounded",size:"large",image:H,alt:"Pretty avatar",backgroundColor:"green",isLoading:!1,defaultImage:""};const s=()=>e(m,{orientation:"horizontal",appearance:"outline",className:"p-4",gap:"1rem",children:[a(r,{icon:a(W,{className:"h-9 w-9 stroke-overlay2"}),backgroundColor:"surface0",alt:"Pretty avatar",size:"large",children:a(d,{name:"Joseph Deor"})}),e(h,{children:[a(u,{children:"Joseph Deor"}),a(g,{bold:!0,children:"Developer, UI/UX"}),a(v,{className:"text-overlay0",children:"Last activity: 2h ago"})]})]}),i=()=>e(m,{orientation:"horizontal",appearance:"outline",className:"p-4",gap:"1rem",children:[a(r,{isLoading:!0,backgroundColor:"surface0",alt:"Pretty avatar",size:"large",children:a(d,{name:"Joseph Deor"})}),e(h,{children:[a(u,{children:"Joseph Deor"}),a(g,{bold:!0,children:"Developer, UI/UX"}),a(v,{className:"text-overlay0",children:"Last activity: 2h ago"})]})]}),l=()=>e(m,{orientation:"horizontal",appearance:"outline",className:"p-4",gap:"1rem",children:[a(r,{backgroundColor:"green",alt:"Pretty avatar",size:"large",children:a(d,{name:"Joseph Deor"})}),e(h,{children:[a(u,{children:"Joseph Deor"}),a(g,{bold:!0,children:"Developer, UI/UX"}),a(v,{className:"text-overlay0",children:"Last activity: 2h ago"})]})]}),c=()=>a(X,{style:{gap:8},children:[{id:1,size:"small"},{id:2,size:"medium"},{id:3,size:"large"},{id:4,size:"xlarge"}].map(t=>a(r,{alt:"Pretty avatar",size:t.size,backgroundColor:"green"},t.id))}),p=()=>a(X,{style:{gap:8},children:[{id:1,shape:"square"},{id:2,shape:"rounded"},{id:3,shape:"circular"}].map(t=>a(r,{alt:"Pretty avatar",size:"large",shape:t.shape,backgroundColor:"green"},t.id))});var z,C,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const people = [{
    id: 1,
    name: "Joseph Deor",
    job: "Developer, UI/UX",
    lastSeen: "2h"
  }];
  return <>
      {people.map(person => <Card key={person.id} orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
          <Avatar {...args}>
            <AvatarLabel name={person.name}></AvatarLabel>
          </Avatar>
          <VerticalLayout>
            <Text>{person.name}</Text>
            <Caption bold>{person.job}</Caption>
            <Caption2 className="text-overlay0">Last activity: {person.lastSeen} ago</Caption2>
          </VerticalLayout>
        </Card>)}
    </>;
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var L,f,D;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
      <Avatar icon={<UserCircleIcon className="h-9 w-9 stroke-overlay2" />} backgroundColor="surface0" alt="Pretty avatar" size="large">
        <AvatarLabel name="Joseph Deor"></AvatarLabel>
      </Avatar>
      <VerticalLayout>
        <Text>Joseph Deor</Text>
        <Caption bold>Developer, UI/UX</Caption>
        <Caption2 className="text-overlay0">Last activity: 2h ago</Caption2>
      </VerticalLayout>
    </Card>;
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var x,A,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
      <Avatar isLoading backgroundColor="surface0" alt="Pretty avatar" size="large">
        <AvatarLabel name="Joseph Deor"></AvatarLabel>
      </Avatar>
      <VerticalLayout>
        <Text>Joseph Deor</Text>
        <Caption bold>Developer, UI/UX</Caption>
        <Caption2 className="text-overlay0">Last activity: 2h ago</Caption2>
      </VerticalLayout>
    </Card>;
}`,...(k=(A=i.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var U,N,S;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Card orientation="horizontal" appearance="outline" className="p-4" gap="1rem">
      <Avatar backgroundColor="green" alt="Pretty avatar" size="large">
        <AvatarLabel name="Joseph Deor"></AvatarLabel>
      </Avatar>
      <VerticalLayout>
        <Text>Joseph Deor</Text>
        <Caption bold>Developer, UI/UX</Caption>
        <Caption2 className="text-overlay0">Last activity: 2h ago</Caption2>
      </VerticalLayout>
    </Card>;
}`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var I,J,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const sizes: any[] = [{
    id: 1,
    size: "small"
  }, {
    id: 2,
    size: "medium"
  }, {
    id: 3,
    size: "large"
  }, {
    id: 4,
    size: "xlarge"
  }];
  return <HorizontalLayout style={{
    gap: 8
  }}>
      {sizes.map(key => <Avatar key={key.id} alt="Pretty avatar" size={key.size} backgroundColor="green"></Avatar>)}
    </HorizontalLayout>;
}`,...(T=(J=c.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var P,V,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const sizes: any[] = [{
    id: 1,
    shape: "square"
  }, {
    id: 2,
    shape: "rounded"
  }, {
    id: 3,
    shape: "circular"
  }];
  return <HorizontalLayout style={{
    gap: 8
  }}>
      {sizes.map(key => <Avatar key={key.id} alt="Pretty avatar" size="large" shape={key.shape} backgroundColor="green"></Avatar>)}
    </HorizontalLayout>;
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const aa=["Default","WithIcon","LoadingState","Initials","Sizes","Shapes"];export{n as Default,l as Initials,i as LoadingState,p as Shapes,c as Sizes,s as WithIcon,aa as __namedExportsOrder,$ as default};
//# sourceMappingURL=avatar.stories-d021279f.js.map
