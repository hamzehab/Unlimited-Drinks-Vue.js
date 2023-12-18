import{c as ce,a as de,g as ve,h as X,b as le,v as fe,u as ge,d as me,e as pe,Q as R,f as he,_ as ye,i as xe,j as _e,k as we}from"./FooterComponent.5b4c58bc.js";import{c as V,n as be,l as Ce,a as O,p as W,b as J,s as U,e as K,r as k,f as m,w as A,g as H,h as Pe,i as p,T as se,K as qe,o as Se,j as Y,k as ue,H as Z,m as ke,q as Ie,t as $,u as Q,v as _,x as ee,y as te,z as Te,F as ne,A as $e,B as Ae,C as Le,D as oe,E as Be}from"./index.4e908428.js";import{Q as Ee}from"./QSpinnerTail.891a303c.js";import{_ as Ne}from"./ProductCard.bdfb0041.js";const G={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Ve=Object.keys(G);G.all=!0;function ae(e){const n={};for(const l of Ve)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?G:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const ze=["INPUT","TEXTAREA"];function ie(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&ze.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function De(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,u)=>{const i=parseFloat(l);i&&(n[u]=i)}),n}var Fe=ce({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:u}){if(u.mouse!==!0&&V.has.touch!==!0)return;const i=u.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:De(l),direction:ae(u),noop:be,mouseStart(a){ie(a,t)&&Ce(a)&&(O(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(ie(a,t)){const s=a.target;O(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,s){V.is.firefox===!0&&W(e,!0);const v=J(a);t.event={x:v.left,y:v.top,time:Date.now(),mouse:s===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){U(a);return}const s=Date.now()-t.event.time;if(s===0)return;const v=J(a),d=v.left-t.event.x,r=Math.abs(d),h=v.top-t.event.y,f=Math.abs(h);if(t.event.mouse!==!0){if(r<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(r<t.sensitivity[2]&&f<t.sensitivity[2])return;const y=r/s,w=f/s;t.direction.vertical===!0&&r<f&&r<100&&w>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&r>f&&f<100&&y>t.sensitivity[0]&&(t.event.dir=d<0?"left":"right"),t.direction.up===!0&&r<f&&h<0&&r<100&&w>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&r<f&&h>0&&r<100&&w>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&r>f&&d<0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&r>f&&d>0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(U(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),de(),t.styleCleanup=I=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(b,50):b()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:r,y:f}})):t.end(a)},end(a){t.event!==void 0&&(K(t,"temp"),V.is.firefox===!0&&W(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&U(a),t.event=void 0)}};if(e.__qtouchswipe=t,u.mouse===!0){const a=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";O(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}V.has.touch===!0&&O(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=ae(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(K(n,"main"),K(n,"temp"),V.is.firefox===!0&&W(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function je(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const Me={name:{required:!0},disable:Boolean},re={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},X(n.default))}},Oe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Qe=["update:modelValue","beforeTransition","transition"];function Re(){const{props:e,emit:n,proxy:l}=H(),{getCacheWithFn:u}=je();let i,t;const a=k(null),s=k(null);function v(o){const c=e.vertical===!0?"up":"left";C((l.$q.lang.rtl===!0?-1:1)*(o.direction===c?1:-1))}const d=m(()=>[[Fe,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),r=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),w=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);A(()=>e.modelValue,(o,c)=>{const x=P(o)===!0?B(o):-1;t!==!0&&T(x===-1?0:x<B(c)?-1:1),a.value!==x&&(a.value=x,n("beforeTransition",o,c),Pe(()=>{n("transition",o,c)}))});function b(){C(1)}function F(){C(-1)}function L(o){n("update:modelValue",o)}function P(o){return o!=null&&o!==""}function B(o){return i.findIndex(c=>c.props.name===o&&c.props.disable!==""&&c.props.disable!==!0)}function j(){return i.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function T(o){const c=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?r.value:h.value):null;s.value!==c&&(s.value=c)}function C(o,c=a.value){let x=c+o;for(;x>-1&&x<i.length;){const S=i[x];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){T(o),t=!0,n("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}x+=o}e.infinite===!0&&i.length!==0&&c!==-1&&c!==i.length&&C(o,o===-1?i.length:-1)}function E(){const o=B(e.modelValue);return a.value!==o&&(a.value=o),!0}function M(){const o=P(e.modelValue)===!0&&E()&&i[a.value];return e.keepAlive===!0?[p(qe,w.value,[p(I.value===!0?u(y.value,()=>({...re,name:y.value})):re,{key:y.value,style:f.value},()=>o)])]:[p("div",{class:"q-panel scroll",style:f.value,key:y.value,role:"tabpanel"},[o])]}function g(){if(i.length!==0)return e.animated===!0?[p(se,{name:s.value},M)]:M()}function q(o){return i=ve(X(o.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&P(c.props.name)===!0),i.length}function N(){return i}return Object.assign(l,{next:b,previous:F,goTo:L}),{panelIndex:a,panelDirectives:d,updatePanelsList:q,updatePanelIndex:E,getPanelContent:g,getEnabledPanels:j,getPanels:N,isValidPanelName:P,keepAliveProps:w,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:C,goToPanel:L,nextPanel:b,previousPanel:F}}var z=le({name:"QCarouselSlide",props:{...Me,imgSrc:String},setup(e,{slots:n}){const l=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:l.value},X(n.default))}});let D=0;const We={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ue=["update:fullscreen","fullscreen"];function Ke(){const e=H(),{props:n,emit:l,proxy:u}=e;let i,t,a;const s=k(!1);fe(e)===!0&&A(()=>u.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&r()}),A(()=>n.fullscreen,h=>{s.value!==h&&v()}),A(s,h=>{l("update:fullscreen",h),l("fullscreen",h)});function v(){s.value===!0?r():d()}function d(){s.value!==!0&&(s.value=!0,a=u.$el.parentNode,a.replaceChild(t,u.$el),document.body.appendChild(u.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:r},Z.add(i))}function r(){s.value===!0&&(i!==void 0&&(Z.remove(i),i=void 0),a.replaceChild(u.$el,t),s.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),u.$el.scrollIntoView!==void 0&&setTimeout(()=>{u.$el.scrollIntoView()})))}return Se(()=>{t=document.createElement("span")}),Y(()=>{n.fullscreen===!0&&d()}),ue(r),Object.assign(u,{toggleFullscreen:v,setFullscreen:d,exitFullscreen:r}),{inFullscreen:s,toggleFullscreen:v}}const Xe=["top","right","bottom","left"],He=["regular","flat","outline","push","unelevated"];var Ye=le({name:"QCarousel",props:{...ge,...Oe,...We,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>He.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Xe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ue,...Qe],setup(e,{slots:n}){const{proxy:{$q:l}}=H(),u=me(e,l);let i=null,t;const{updatePanelsList:a,getPanelContent:s,panelDirectives:v,goToPanel:d,previousPanel:r,nextPanel:h,getEnabledPanels:f,panelIndex:y}=Re(),{inFullscreen:w}=Ke(),I=m(()=>w.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=m(()=>e.vertical===!0?"vertical":"horizontal"),F=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(w.value===!0?" fullscreen":"")+(u.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${j.value}`:"")),L=m(()=>{const g=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?g.reverse():g}),P=m(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),B=m(()=>e.navigationActiveIcon||P.value),j=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),T=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));A(()=>e.modelValue,()=>{e.autoplay&&C()}),A(()=>e.autoplay,g=>{g?C():i!==null&&(clearTimeout(i),i=null)});function C(){const g=ke(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,g>=0?h():r()},g)}Y(()=>{e.autoplay&&C()}),ue(()=>{i!==null&&clearTimeout(i)});function E(g,q){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${j.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(q))])}function M(){const g=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>p(R,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),N=t-1;g.push(E("buttons",(o,c)=>{const x=o.props.name,S=y.value===c;return q({index:c,maxIndex:N,name:x,active:S,btnProps:{icon:S===!0?B.value:P.value,size:"sm",...T.value},onClick:()=>{d(x)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(E("thumbnails",N=>{const o=N.props;return p("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+q,src:o.imgSrc||o["img-src"],onClick:()=>{d(o.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&g.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[p(R,{icon:L.value[0],...T.value,onClick:r})])),(e.infinite===!0||y.value<t-1)&&g.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[p(R,{icon:L.value[1],...T.value,onClick:h})]))),he(n.control,g)}return()=>(t=a(n),p("div",{class:F.value,style:I.value},[pe("div",{class:"q-carousel__slides-container"},s(),"sl-cont",e.swipeable,()=>v.value)].concat(M())))}});const Ge={class:"main"},Je=Ae('<div class="ys fade text-center text-bold text-h4 text-weight-light q-mt-xl"> Available Products </div><div class="q-ma-xl row justify-evenly"><img class="fade" src="static/logos/coca-cola.png" alt="Coca Cola Logo"><img class="fade" src="static/logos/sprite.png" alt="Sprite Logo"><img class="fade" src="static/logos/vitamin-water.png" alt="Vitamin Water Logo"><img class="fade" src="static/logos/redbull.png" alt="Red Bull Logo"><img class="fade" src="static/logos/lacroix.png" alt="Lacroix Logo"><img class="fade" src="static/logos/celcius.png" alt="Celcius Logo"><img class="fade" src="static/logos/snapple.png" alt="Snapple Logo"><img class="fade" src="static/logos/pellegrino.png" alt="Pellegrino Logo"></div>',2),Ze={class:"ys q-my-xl row justify-center text-bold text-h4 text-weight-light"},et={key:0,class:"slide q-mx-xl q-mb-xl row justify-evenly"},tt={key:1,class:"flex flex-center"},rt={__name:"IndexPage",setup(e){const n=k(window.innerWidth),l=k(1),u=k([]),i=k(!1),t=async()=>{i.value=!0;try{const s=await Le.get("/product/random/roulette");u.value=s.data,setTimeout(()=>{i.value=!1},1e3)}catch(s){console.error(s)}},a=()=>{n.value=window.innerWidth};return Y(async()=>{window.location.href===window.location.origin&&(window.location.href=window.location.origin+"/unlimiteddrinks-frontend/#/"),t(),window.addEventListener("resize",a);const s=document.querySelectorAll(".fade"),v=new IntersectionObserver(d=>{d.forEach(r=>{r.target.classList.toggle("animated",r.isIntersecting),r.target.classList.toggle("fadeIn",r.isIntersecting),r.target.classList.toggle("slower",r.isIntersecting),r.isIntersecting&&v.unobserve(r.target)})},{threshold:.7});s.forEach(d=>{v.observe(d)})}),Ie(()=>{window.removeEventListener("resize",a)}),(s,v)=>($(),Q(ne,null,[_(ye),ee("div",Ge,[_(Ye,{modelValue:l.value,"onUpdate:modelValue":v[0]||(v[0]=d=>l.value=d),"control-color":"dark",height:"50vh",animated:"",arrows:"",infinite:"",autoplay:""},{default:te(()=>[_(z,{name:1,"img-src":"static/landing_page/warehouse.jpg"}),_(z,{name:2,"img-src":"static/landing_page/vending.jpg"}),_(z,{name:3,"img-src":"static/landing_page/shelfDrinks.jpg"}),_(z,{name:4,"img-src":"static/landing_page/pepsi.jpg"}),_(z,{name:5,"img-src":"static/landing_page/shelfDrinks2.jpg"})]),_:1},8,["modelValue"]),Je,_(xe,{inset:""}),ee("div",Ze,[Te(" Try out Drink Roulette! "),_(se,{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"},{default:te(()=>[i.value?Be("",!0):($(),oe(we,{key:0,class:"on-right cursor-pointer",name:"replay",size:"40px",onClick:v[1]||(v[1]=d=>t())}))]),_:1})]),i.value?($(),Q("div",tt,[_(Ee,{color:"deep-purple-14 q-pb-xl",size:"20rem"})])):($(),Q("div",et,[($(!0),Q(ne,null,$e(u.value,(d,r)=>($(),oe(Ne,{class:"fade",key:r,product:d},null,8,["product"]))),128))]))]),_(_e)],64))}};export{rt as default};
