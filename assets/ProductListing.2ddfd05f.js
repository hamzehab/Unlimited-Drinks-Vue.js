import{n as D,o as b,i as z,k as C,p as V,Q as _,q as P,r as E}from"./FooterComponent.3c5fab1b.js";import{Q as A}from"./QRating.1d074b0f.js";import{a8 as B,r as g,j as N,t as o,D as $,y as c,v as i,x as n,a6 as m,L as v,af as R,u as d,z as Q,T as k,E as u,C as F}from"./index.daeb3ba5.js";const M=["src"],U={class:"text-grey-6 text-caption row oswald"},H={class:"q-mr-xs text-overline"},K={class:"on-right"},X={key:0},G={key:1,class:"on-right"},J={class:"row justify-between"},W={class:"ys row items-start text-body1"},Y={class:"oswald text-h5"},Z={class:"row justify-end items-center q-pr-sm"},tt={key:0,class:"text-warning animated zoomIn"},et={key:0,class:"q-py-none on-left"},at={key:0,class:"row justify-end"},st={key:0},ot={key:0,class:"text-positive animated zoomIn"},it={key:0,class:"text-negative animated zoomIn slow"},nt={key:0,class:"text-amber-8"},dt={key:0},rt={key:1},lt={key:2},ct={key:3,class:"row items-center justify-evenly"},pt={__name:"ProductListing",props:{product:{type:Object,required:!0}},setup(a){const p=a,O=B(),l=D(),r=g(1),w=p.product.rating,h=g(!1),x=g(null),q=g(null),I=g(null),L=s=>{s&&s.stopPropagation&&s.stopPropagation(),r.value>1&&(r.value=parseInt(r.value)-1)},T=s=>{s&&s.stopPropagation&&s.stopPropagation(),r.value<25&&(r.value=parseInt(r.value)+1)},y=()=>{const s=p.product.category_name.toLowerCase().split(" ").join("-");O.push(`/${s}/${p.product.id}`)},S=async s=>{s&&s.stopPropagation&&s.stopPropagation(),h.value=!0;const e=r.value+(l.items.find(t=>t.product_id===p.product.id)?l.items.find(t=>t.product_id===p.product.id).quantity:0);try{const t=await F.get(`product/cart/${p.product.id}?quantity=${e}`);t.data.can_add===!0?(l.addItem(p.product.id,r.value),x.value=!0,q.value=!1,r.value=1):(q.value=!0,I.value=t.data.quantity)}catch(t){console.error(t)}setTimeout(()=>{h.value=!1},1e3),setTimeout(()=>{x.value=null},3e3)},j=s=>`${new Date(s).toLocaleDateString("en-US",{month:"short",day:"numeric"})}`;return N(()=>{const s=document.querySelectorAll(".fade-left"),e=new IntersectionObserver(t=>{t.forEach(f=>{f.target.classList.toggle("animated",f.isIntersecting),f.target.classList.toggle("fadeInLeft",f.isIntersecting),f.target.classList.toggle("slow",f.isIntersecting)})});s.forEach(t=>{e.observe(t)})}),(s,e)=>(o(),$(E,{class:"fade-left q-mx-auto q-my-md",style:{"max-width":"70%"},bordered:""},{default:c(()=>[i(b,{class:"q-mx-xl q-my-md",horizontal:""},{default:c(()=>[n("img",{class:"cursor-pointer",src:`static/products/${a.product.image}`,style:{width:"200px",height:"200px"},onClick:e[0]||(e[0]=t=>y())},null,8,M),i(z,{class:"bg-deep-purple-14",style:{"padding-right":"1px","padding-left":"1px"},vertical:""}),i(b,{class:"q-pb-none",style:{width:"100%"}},{default:c(()=>[n("div",{class:"ys text-h6 cursor-pointer",style:{width:"fit-content"},onClick:e[1]||(e[1]=t=>y())},m(a.product.name),1),n("div",U,[n("span",null,m(j(a.product.created_at)),1),i(z,{vertical:"",class:"on-right on-left"}),n("span",{class:"on-left cursor-pointer",style:{width:"fit-content"},onClick:e[2]||(e[2]=t=>y())}," by \xA0 "+m(a.product.brand),1)]),n("div",{class:"row items-center oswald cursor-pointer",style:{width:"fit-content"},onClick:e[4]||(e[4]=t=>y())},[n("div",H,m(v(w).toFixed(1)),1),i(A,{modelValue:v(w),"onUpdate:modelValue":e[3]||(e[3]=t=>R(w)?w.value=t:null),max:"5",size:"sm",color:"deep-purple-14",icon:"star_border","icon-selected":"star","icon-half":"star_half",readonly:""},null,8,["modelValue"]),n("div",K,[a.product.reviews.length>0?(o(),d("div",X,m(a.product.reviews.length===1?a.product.reviews.length+" review":a.product.reviews.length+" reviews"),1)):(o(),d("div",G,"No reviews"))])]),n("div",J,[n("div",{class:"q-mt-md cursor-pointer",onClick:e[5]||(e[5]=t=>y())},[n("span",W,[Q(" $"),n("span",Y,m(a.product.price.toFixed(2)),1)])]),n("div",Z,[i(C,{class:"cursor-pointer on-left",name:"remove",size:"20px",onClick:e[6]||(e[6]=t=>L())}),i(V,{class:"rounded-borders","input-class":"ys text-bold text-h6 text-center",style:{width:"2.5rem"},modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=t=>r.value=t),modelModifiers:{trim:!0},mask:"##",dense:"",borderless:"","unmasked-value":"",readonly:""},null,8,["modelValue"]),i(C,{class:"cursor-pointer on-right",name:"add",size:"20px",onClick:e[8]||(e[8]=t=>T())})])]),i(b,{class:"oswald row justify-end items-center q-px-none q-pb-none"},{default:c(()=>[i(k,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:c(()=>[q.value?(o(),d("div",tt," Cannot add to cart. Only "+m(I.value)+" left in stock! ",1)):u("",!0)]),_:1}),v(l).items.find(t=>t.product_id===a.product.id)?(o(),d("div",et,[v(l).items.find(t=>t.product_id===a.product.id)?(o(),d("div",at,[v(l).items.find(t=>t.product_id===a.product.id).quantity+r.value<=25?(o(),d("div",st,[i(k,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:c(()=>[x.value?(o(),d("div",ot,m(a.product.name)+" successfully added to cart! ",1)):u("",!0)]),_:1}),i(k,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:c(()=>[x.value==!1?(o(),d("div",it," Something went wrong adding item to cart! ")):u("",!0)]),_:1})])):u("",!0),i(k,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:c(()=>[v(l).items.find(t=>t.product_id===a.product.id).quantity===25?(o(),d("div",nt," Quantity exceeds limit ")):u("",!0)]),_:1})])):u("",!0)])):u("",!0),i(_,{color:a.product.quantity===0?"negative":"deep-purple-14",rounded:"",push:"",disable:a.product.quantity===0||v(l).items.some(t=>t.product_id===a.product.id&&t.quantity===25),onClick:e[9]||(e[9]=t=>S())},{default:c(()=>[a.product.quantity===0?(o(),d("div",dt,"OUT OF STOCK")):v(l).items.some(t=>t.product_id===a.product.id&&t.quantity===25)?(o(),d("div",rt," MAX LIMIT REACHED ")):a.product.quantity!==0&&!h.value?(o(),d("div",lt,[Q(" ADD TO CART "),a.product.quantity!==0?(o(),$(C,{key:0,name:"mdi-cart-outline on-right"})):u("",!0)])):h.value?(o(),d("div",ct,[i(P,{color:"white",size:"1em",thickness:8})])):u("",!0)]),_:1},8,["color","disable"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{pt as _};
