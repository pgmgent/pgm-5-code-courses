"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9514],{47670:(st,v,t)=>{t.r(v),t.d(v,{default:()=>X});var e=t(27279),B=t(27997),N=t(73354),z=t(27875),I=t(48102),O=t(74758),r=t(23604),W=t(76827),h=t(59082),b=t(6078),P=t.n(b),$=t(70627),d=t.n($),y=t(61020),G=t(4396),c=t(18206),o=t(93593),H=t(93415),U=t(23298),E=t(74577),p=t(5627),C=t(78955),D=t(11727);const Z=({sort:s="",pageSize:l=10,onChange:n})=>{const{formatMessage:i}=(0,y.Z)();return e.createElement(H.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(U.r,{gap:4},e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.entries.title"),defaultMessage:"Entries per page"}),hint:i({id:(0,o.Z)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>n({target:{name:"pageSize",value:a}}),name:"pageSize",value:l},D.ay.map(a=>e.createElement(C.W,{key:a,value:a},a)))),e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.sort.title"),defaultMessage:"Default sort order"}),hint:i({id:(0,o.Z)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>n({target:{name:"sort",value:a}}),name:"sort",value:s,"test-sort":s,"data-testid":"sort-select"},D.Fo.map(a=>e.createElement(C.W,{"data-testid":`sort-option-${a.value}`,key:a.key,value:a.value},i({id:(0,o.Z)(a.key),defaultMessage:`${a.value}`})))))))};Z.propTypes={sort:d().string.isRequired,pageSize:d().number.isRequired,onChange:d().func.isRequired};const S=`${c.Z}/ON_CHANGE`,M=`${c.Z}/SET_LOADED`,x=({name:s,value:l})=>({type:S,keys:s,value:l}),F=()=>({type:M}),m={initialData:{},modifiedData:{}},L=s=>({...m,initialData:s,modifiedData:s});var V=t(61815),Q=t(98934),Y=t.n(Q),j=t(43433),J=t.n(j);const K=(s=m,l)=>(0,V.ZP)(s,n=>{switch(l.type){case S:{J()(n,["modifiedData",...l.keys.split(".")],l.value);break}case M:{const i=L(Y()(n,["modifiedData"],{}));n.initialData=i.initialData,n.modifiedData=i.modifiedData;break}default:return n}}),T=({config:s})=>{const{trackUsage:l}=(0,r.rS)(),{formatMessage:n}=(0,y.Z)(),i=(0,r.lm)(),{mutateConfig:a}=(0,G.Z)(),{isLoading:A}=a,[k,w]=(0,e.useState)(!1),f=()=>w(g=>!g),[q,R]=(0,e.useReducer)(K,m,()=>L(s)),{initialData:_,modifiedData:u}=q,tt=g=>{g.preventDefault(),f()},et=async()=>{l("willEditMediaLibraryConfig"),await a.mutateAsync(u),f(),R(F()),i({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},at=({target:{name:g,value:nt}})=>{R(x({name:g,value:nt}))};return(0,r.go)(),e.createElement(B.A,null,e.createElement(N.o,{"aria-busy":A},e.createElement("form",{onSubmit:tt},e.createElement(z.T,{navigationAction:e.createElement(r.rU,{startIcon:e.createElement(W.Z,null),to:`/plugins/${c.Z}`,id:"go-back"},n({id:(0,o.Z)("config.back"),defaultMessage:"Back"})),primaryAction:e.createElement(I.z,{size:"S",startIcon:e.createElement(h.Z,null),disabled:P()(u,_),type:"submit"},n({id:"global.save",defaultMessage:"Save"})),subtitle:n({id:(0,o.Z)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:n({id:(0,o.Z)("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.createElement(O.D,null,e.createElement(Z,{"data-testid":"settings",pageSize:u.pageSize||"",sort:u.sort||"",onChange:at})),e.createElement(r.QH,{bodyText:{id:(0,o.Z)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(h.Z,null),isConfirmButtonLoading:A,isOpen:k,onToggleDialog:f,onConfirm:et,variantRightButton:"success-light"}))))};T.propTypes={config:d().shape({pageSize:d().number,sort:d().string}).isRequired};const X=T}}]);