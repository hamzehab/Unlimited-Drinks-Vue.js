import{Q as $}from"./QImg.732cc812.js";import{_ as Q,i as p,p as x,Q as C,j as B,q as I}from"./FooterComponent.f2fbde6f.js";import{Q as S}from"./QRating.3d369874.js";import{a5 as M,ad as N,a8 as T,r as l,f as U,j as W,t as i,u as r,x as a,v as t,a6 as f,y as j,E as y,F as z,C as w}from"./index.37379c88.js";const A={class:"main"},E={class:"q-mx-auto q-my-lg",style:{width:"60%"}},F=a("div",{class:"ys text-h4 q-mb-lg"},"Create Review",-1),O={key:0},D={class:"flex items-center"},L={class:"text-h5 oswald text"},P=a("div",{class:"text-h5 ys q-mb-md"},"Overall Rating",-1),G=a("div",{class:"text-h6 ys q-mb-md"},"Add a headline or title",-1),H=a("div",{class:"text-h6 ys q-mb-md"},"Add a written review",-1),J={class:"q-mb-xl",align:"right"},K={key:0},X={key:1},Y={key:0,class:"text-positive text-body1 q-mt-md oswald"},Z={key:1,class:"text-negative text-body1 q-mt-md oswald"},oe={__name:"CreateReview",setup(ee){const b=M(),h=N(),k=T(),c=l(!1),g=l(!1),_=l(!1),u=l(null),n=l(null),q=U(()=>v.value===0||u.value===null||!u.value||n.value===null||!n.value),m=l(null),V=async()=>{c.value=!0,_.value=!1,m.value=null;try{const s={title:u.value,rating:v.value,comment:n.value},e=await w.post(`/review/${o.value.id}/${b.user.value.sub.split("|")[1]}`,s);e.status===200?(g.value=!0,setTimeout(()=>{c.value=!1},1e3),setTimeout(()=>{k.push(`/${h.params.category}/${h.params.id}`)},3e3)):e.status===202&&(_.value=!0,m.value=e.data.detail)}catch(s){console.error(s)}setTimeout(()=>{c.value=!1},1e3)},o=l(null),v=l(0),R=async()=>{try{const s=await w.get(`/product/${h.params.id}`);o.value=s.data}catch(s){console.error(s)}};return W(async()=>{await R()}),(s,e)=>(i(),r(z,null,[a("div",A,[t(Q),a("div",E,[F,o.value?(i(),r("div",O,[a("div",D,[t($,{class:"rounded-borders q-mr-lg",src:`static/products/${o.value.image}`,alt:o.value.name+"Image",style:{width:"150px",height:"150px"},ratio:1},null,8,["src","alt"]),a("div",L,f(o.value.name),1)]),t(p,{class:"q-my-md"}),P,t(S,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=d=>v.value=d),max:"5",size:"xl",color:"deep-purple-14",icon:"star_border","icon-selected":"star","icon-half":"star_half"},null,8,["modelValue"]),t(p,{class:"q-my-md"}),G,t(x,{standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=d=>u.value=d),modelModifiers:{trim:!0},placeholder:"What's most import to know?",autogrow:""},null,8,["modelValue"]),t(p,{class:"q-my-md"}),H,t(x,{standout:"bg-grey-3 text-deep-purple-14","input-class":"text-dark",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=d=>n.value=d),modelModifiers:{trim:!0},placeholder:"What did you like or dislike? What did you use this product for?",type:"textarea",height:"200px"},null,8,["modelValue"]),t(p,{class:"q-my-md"}),a("div",J,[t(C,{color:"deep-purple-14",disable:q.value,push:"",onClick:e[3]||(e[3]=d=>V())},{default:j(()=>[c.value?(i(),r("div",X,[t(I,{color:"white",size:"1em",thickness:8})])):(i(),r("div",K,"Submit"))]),_:1},8,["disable"]),g.value?(i(),r("div",Y," Created Review! Redirecting back to product page... ")):y("",!0),_.value&&m.value?(i(),r("div",Z,f(m.value)+"! ",1)):y("",!0)])])):y("",!0)])]),t(B)],64))}};export{oe as default};
