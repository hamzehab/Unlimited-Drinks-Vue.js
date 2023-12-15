import{Q as ne}from"./QSpinnerTail.c14a78bf.js";import{b as ie,u as ue,y as de,d as ce,A as ve,f as me,n as pe,_ as ye,k as T,i as N,p as fe,Q as H,r as J,j as _e,q as he,o as B}from"./FooterComponent.f2fbde6f.js";import{Q as E}from"./QRating.3d369874.js";import{f as p,i as U,g as Z,a5 as ge,ad as xe,a8 as we,r as v,w as ke,ae as qe,j as be,t as n,u as i,v as r,x as l,L as b,a6 as u,z as C,E as d,y as m,T as j,F as A,A as M,D,C as F}from"./index.37379c88.js";import{Q as $e}from"./QPagination.76b723dc.js";import{_ as Ce}from"./ProductCard.77eca215.js";const Se={xs:2,sm:4,md:6,lg:10,xl:14};function Y(o,x,y){return{transform:x===!0?`translateX(${y.lang.rtl===!0?"-":""}100%) scale3d(${-o},1,1)`:`scale3d(${o},1,1)`}}var ze=ie({name:"QLinearProgress",props:{...ue,...de,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(o,{slots:x}){const{proxy:y}=Z(),I=ce(o,y.$q),_=ve(o,Se),S=p(()=>o.indeterminate===!0||o.query===!0),z=p(()=>o.reverse!==o.query),h=p(()=>({..._.value!==null?_.value:{},"--q-linear-progress-speed":`${o.animationSpeed}ms`})),c=p(()=>"q-linear-progress"+(o.color!==void 0?` text-${o.color}`:"")+(o.reverse===!0||o.query===!0?" q-linear-progress--reverse":"")+(o.rounded===!0?" rounded-borders":"")),$=p(()=>Y(o.buffer!==void 0?o.buffer:1,z.value,y.$q)),w=p(()=>`with${o.instantFeedback===!0?"out":""}-transition`),k=p(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${w.value} q-linear-progress__track--${I.value===!0?"dark":"light"}`+(o.trackColor!==void 0?` bg-${o.trackColor}`:"")),Q=p(()=>Y(S.value===!0?1:o.value,z.value,y.$q)),L=p(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${w.value} q-linear-progress__model--${S.value===!0?"in":""}determinate`),q=p(()=>({width:`${o.value*100}%`})),a=p(()=>`q-linear-progress__stripe absolute-${o.reverse===!0?"right":"left"} q-linear-progress__stripe--${w.value}`);return()=>{const g=[U("div",{class:k.value,style:$.value}),U("div",{class:L.value,style:Q.value})];return o.stripe===!0&&S.value===!1&&g.push(U("div",{class:a.value,style:q.value})),U("div",{class:c.value,style:h.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":o.indeterminate===!0?void 0:o.value},me(x.default,g))}}});const Qe={key:0,class:"main flex flex-center"},Ve={key:1},Re={class:"q-mx-xl"},Te={class:"fade q-ma-xl cursor-pointer row items-center text-deep-purple-14"},Be={key:0,class:"row justify-evenly",style:{width:"100%"}},De=["src"],Fe={key:0,class:"fade oswald q-mt-xl",style:{width:"100%","max-width":"800px"}},Ie={class:"text-caption fade"},Le={class:"text-h4 ys fade"},Oe={class:"text-caption"},Pe={class:"q-mr-xs"},Ue={class:"on-right text-caption"},je={class:"text-h3 ys q-mb-xl"},Ae={class:"text-body1 q-mb-xl"},Ne={class:"row justify-end items-center q-mr-md q-mb-md no-wrap"},Ee={key:0},Me={key:1},Ke={key:2},We={class:"row justify-end items-center q-mr-md text-body1"},Xe={key:0,class:"text-warning animated zoomIn"},Ge={key:0},He={key:0},Je={key:0,class:"text-positive animated zoomIn"},Ye={key:0,class:"text-negative animated zoomIn slow"},Ze={key:0,class:"text-amber-8"},et={class:"row justify-around"},tt=l("div",{class:"ys text-h5"},"Customer Reviews",-1),at={class:"row items-center q-py-md"},st={class:"on-right text-h6"},lt={key:0,class:"q-ml-sm q-mb-md"},ot=["onClick"],rt={class:"on-left text-body2 cursor-pointer text-bold"},nt={class:"on-right text-body2 cursor-pointer text-bold"},it={key:0,style:{width:"100%","max-width":"70%"}},ut={class:"text-overline on-right"},dt={class:"flex flex-center q-my-xl"},ct=l("div",{class:"ys fade text-center text-bold text-h4 text-weight-light q-ma-xl"}," Recommended Beverages ",-1),vt={class:"q-mx-xl q-mb-xl row justify-evenly"},gt={__name:"DrinksDetails",setup(o){const x=ge(),y=xe(),I=we(),_=pe(),{ctx:S}=Z(),z=v([]),h=v(0),c=v(1),$=v(1),w=v(!1),k=v(null),Q=v(null),L=v(null),q=y.params.id,a=v(null),g=v([null,null,null,null,null]),K=v(null),W=async s=>{try{const e=await F.get(`/product/${s}`);a.value=e.data,h.value=e.data.rating,K.value=e.data.reviews}catch(e){console.error(e)}},X=async s=>{try{const e=await F.get(`/review/rating/${s}`);Object.keys(e.data).forEach(t=>{g.value[t-1]=e.data[t]})}catch(e){console.error(e)}},ee=async()=>{w.value=!0;const s=c.value+(_.items.find(e=>e.product_id===a.value.id)?_.items.find(e=>e.product_id===a.value.id).quantity:0);try{const e=await F.get(`product/cart/${a.value.id}?quantity=${s}`);e.data.can_add===!0?(_.addItem(a.value.id,c.value),k.value=!0,Q.value=!1):(Q.value=!0,L.value=e.data.quantity)}catch(e){console.error(e)}setTimeout(()=>{w.value=!1},1e3),setTimeout(()=>{k.value=null},3e3)},te=()=>{c.value>1&&(c.value=parseInt(c.value)-1)},ae=()=>{c.value<25&&(c.value=parseInt(c.value)+1)},se=async()=>{try{const s=await F.get("/product/random/roulette");z.value=s.data}catch(s){console.error(s)}},le=s=>{const e=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).format(new Date(s)).split(",");return`${e[0]}, ${e[1]} @ ${e[2]}`},oe=()=>{const s=S.$refs.reviews;if(s){const t=s.offsetTop-100;window.scrollTo({top:t,behavior:"smooth",passive:!0})}},f=v(null),O=p(()=>{if(f.value===null)return a.value.reviews;const s=a.value.reviews.filter(e=>e.rating===f.value);return s.length===0?a.value.reviews:s}),re=s=>{s===null||a.value.reviews.filter(t=>t.rating===s).length===0?f.value=null:f.value=s},V=v(!1),G=async()=>{if(x.isAuthenticated.value&&!x.isLoading.value)try{(await F.get(`/review/${y.params.id}/${x.user.value.sub.split("|")[1]}`)).data?V.value=!0:I.push(`/${y.params.category}/${y.params.id}/review`)}catch(s){console.error(s)}else await x.loginWithRedirect()};ke(f,s=>{re(s)}),qe(async(s,e)=>{s.params.id!==e.params.id&&(R.value=!0,await W(s.params.id),await X(s.params.id),R.value=!1,V.value=!1,g.value=[null,null,null,null,null])});const R=v(!1);return be(async()=>{R.value=!0,await se(),await W(q),await X(q),R.value=!1}),(s,e)=>(n(),i(A,null,[r(ye),R.value?(n(),i("div",Qe,[r(ne,{color:"deep-purple-14 q-pb-xl",size:"20rem"})])):(n(),i("div",Ve,[l("div",Re,[l("div",Te,[r(T,{name:"keyboard_arrow_left",size:"30px"}),l("div",{class:"text-h6 underline ys",onClick:e[0]||(e[0]=t=>b(I).back())},"Back")]),a.value?(n(),i("div",Be,[l("img",{src:`static/products/${a.value.image}`,style:{width:"100%","max-width":"800px",height:"100%"},alt:""},null,8,De),a.value?(n(),i("div",Fe,[l("div",Ie,u(a.value.category_name[0].toUpperCase()+a.value.category_name.substring(1)),1),l("div",Le,[C(u(a.value.name)+" ",1),l("span",Oe,"by "+u(a.value.brand),1)]),l("div",{class:"cursor-pointer row items-center oswald q-py-md",onClick:oe},[l("div",Pe,u(h.value.toFixed(1)),1),r(E,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),max:"5",size:"sm",color:"deep-purple-14",icon:"star_border","icon-selected":"star","icon-half":"star_half",readonly:""},null,8,["modelValue"]),l("div",Ue,u(a.value.reviews.length)+" rating"+u(a.value.reviews.length===1?"":"s"),1)]),a.value.reviews.length===0?(n(),i("div",{key:0,class:"text-deep-purple-14 cursor-pointer",onClick:e[2]||(e[2]=t=>G())}," Be the first to review! ")):d("",!0),r(N,{class:"q-my-md"}),l("div",je,"$ "+u(a.value.price.toFixed(2)),1),l("div",Ae,u(a.value.description),1),l("div",Ne,[r(T,{class:"cursor-pointer on-left",name:"remove",size:"20px",onClick:e[3]||(e[3]=t=>te())}),r(fe,{class:"rounded-borders","input-class":"ys text-bold text-h6 text-center",style:{width:"5rem"},modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=t=>c.value=t),mask:"##",dense:"",borderless:"","unmasked-value":"",readonly:""},null,8,["modelValue"]),r(T,{class:"cursor-pointer on-right",name:"add",size:"20px",onClick:e[5]||(e[5]=t=>ae())}),r(H,{class:"q-ml-xl oswald",style:{width:"80%"},color:a.value.quantity===0?"negative":"deep-purple-14",rounded:"",push:"",disable:a.value.quantity===0,onClick:e[6]||(e[6]=t=>ee())},{default:m(()=>[a.value.quantity===0?(n(),i("div",Ee,"OUT OF STOCK")):a.value.quantity!==0&&!w.value?(n(),i("div",Me,[C(" ADD TO CART "),a.value.quantity!==0?(n(),D(T,{key:0,name:"mdi-cart-outline on-right"})):d("",!0)])):w.value?(n(),i("div",Ke,[r(he,{color:"white",size:"1em",thickness:8})])):d("",!0)]),_:1},8,["color","disable"])]),l("div",We,[r(j,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:m(()=>[Q.value?(n(),i("div",Xe," Cannot add to cart. Only "+u(L.value)+" left in stock! ",1)):d("",!0)]),_:1}),b(_).items.find(t=>t.product_id===b(q))?(n(),i("div",Ge,[b(_).items.find(t=>t.product_id===b(q)).quantity+c.value<=25?(n(),i("div",He,[r(j,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:m(()=>[k.value?(n(),i("div",Je,u(a.value.name)+" successfully added to cart! ",1)):d("",!0)]),_:1}),r(j,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:m(()=>[k.value==!1?(n(),i("div",Ye," Something went wrong adding item to cart! ")):d("",!0)]),_:1})])):d("",!0),r(j,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:m(()=>[b(_).items.find(t=>t.product_id===b(q)).quantity+c.value>25&&k.value===null?(n(),i("div",Ze," Quantity exceeds limit ")):d("",!0)]),_:1})])):d("",!0)])])):d("",!0)])):d("",!0)]),r(N,{class:"q-my-xl",inset:""}),l("div",et,[l("div",{class:"q-ma-xl",ref_key:"reviews",ref:K},[tt,l("div",at,[r(E,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=t=>h.value=t),max:"5",size:"md",color:"deep-purple-14",icon:"star_border","icon-selected":"star","icon-half":"star_half",readonly:""},null,8,["modelValue"]),l("div",st,u(h.value.toFixed(1))+" out of 5 ",1)]),a.value?(n(),i("div",lt,u(a.value.reviews.length)+" customer "+u(a.value.reviews.length===1?" rating":"ratings"),1)):d("",!0),(n(),i(A,null,M(5,t=>l("div",{key:t,class:"q-ml-sm"},[l("div",{class:"row items-center progress-bar",onClick:P=>f.value=t},[l("div",rt,u(t)+" star ",1),r(ze,{size:"20px",style:{width:"200px"},value:g.value[t-1]?parseFloat((g.value[t-1].percentage/100).toFixed(2)):0,color:"deep-purple-14",class:"q-my-sm cursor-pointer"},null,8,["value"]),l("div",nt,u(g.value[t-1]?g.value[t-1].percentage.toFixed(1):0)+" % ",1)],8,ot)])),64)),l("div",{class:"text-center progress-bar cursor-pointer oswald text-body1",onClick:e[8]||(e[8]=t=>f.value=null)}," All Reviews "),r(H,{class:"q-mt-md full-width",label:V.value?"Already left review":"Leave a review",color:"deep-purple-14",push:"",rounded:"",disable:V.value,onClick:e[9]||(e[9]=t=>G())},{default:m(()=>[V.value?d("",!0):(n(),D(T,{key:0,class:"on-right",name:"chat"}))]),_:1},8,["label","disable"])],512),a.value&&O.value.length>0?(n(),i("div",it,[r(J,{class:"q-px-md q-py-md"},{default:m(()=>[r(B,{class:"ys text-h6"},{default:m(()=>[C(u(f.value?f.value.toFixed(1)+" Star Rated Reviews":"All customer reviews"),1)]),_:1}),(n(!0),i(A,null,M(O.value.slice(($.value-1)*5,$.value*5),t=>(n(),D(J,{key:t,bordered:""},{default:m(()=>[r(B,{class:"ys text-bold q-pb-none"},{default:m(()=>[C(u(t.title),1)]),_:2},1024),r(B,{class:"q-pt-none oswald"},{default:m(()=>[r(E,{modelValue:t.rating,"onUpdate:modelValue":P=>t.rating=P,max:"5",size:"xs",color:"deep-purple-14",icon:"star_border","icon-selected":"star","icon-half":"star_half",readonly:""},null,8,["modelValue","onUpdate:modelValue"]),l("span",ut,u(t.rating.toFixed(1)),1)]),_:2},1024),r(B,{class:"oswald"},{default:m(()=>[C(u(t.comment),1)]),_:2},1024),r(B,{class:"text-grey oswald"},{default:m(()=>[C(u(le(t.created_at)),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),l("div",dt,[O.value.length>5?(n(),D($e,{key:0,modelValue:$.value,"onUpdate:modelValue":e[10]||(e[10]=t=>$.value=t),max:Math.ceil(O.value.length/5),"max-pages":5,"boundary-numbers":"",color:"deep-purple-14","active-design":"push","active-color":"deep-purple-14","direction-links":""},null,8,["modelValue","max"])):d("",!0)])])):d("",!0)]),r(N,{class:"q-my-xl",inset:""}),ct,l("div",vt,[(n(!0),i(A,null,M(z.value,(t,P)=>(n(),D(Ce,{class:"fade",key:P,product:t},null,8,["product"]))),128))])])),r(_e)],64))}};export{gt as default};
