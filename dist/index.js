(()=>{var re=Object.defineProperty;var se=(e,t,i)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var F=(e,t,i)=>se(e,typeof t!="symbol"?t+"":t,i);(function(){function e(){for(var r=arguments.length,s=0;s<r;s++){var n=s<0||arguments.length<=s?void 0:arguments[s];n.nodeType===1||n.nodeType===11?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function i(){for(var r=this.parentNode,s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];var c=n.length;if(r)for(c||r.removeChild(this);c--;){var l=n[c];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),c?r.insertBefore(this.previousSibling,l):r.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=e,DocumentFragment.prototype.append=e),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=i,DocumentFragment.prototype.replaceWith=i))})();function ne(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tt(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bt(e,t,i){return t&&Tt(e.prototype,t),i&&Tt(e,i),e}function oe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function wt(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,r)}return i}function _t(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(i),!0).forEach(function(r){oe(e,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):wt(Object(i)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))})}return e}function Lt(e,t){return le(e)||ue(e,t)||xt(e,t)||de()}function W(e){return ae(e)||ce(e)||xt(e)||he()}function ae(e){if(Array.isArray(e))return lt(e)}function le(e){if(Array.isArray(e))return e}function ce(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function ue(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var i=[],r=!0,s=!1,n=void 0;try{for(var o=e[Symbol.iterator](),c;!(r=(c=o.next()).done)&&(i.push(c.value),!(t&&i.length===t));r=!0);}catch(l){s=!0,n=l}finally{try{!r&&o.return!=null&&o.return()}finally{if(s)throw n}}return i}}function xt(e,t){if(e){if(typeof e=="string")return lt(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return lt(e,t)}}function lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e,t){return Object.getOwnPropertyNames(Object(e)).reduce(function(i,r){var s=Object.getOwnPropertyDescriptor(Object(e),r),n=Object.getOwnPropertyDescriptor(Object(t),r);return Object.defineProperty(i,r,n||s)},{})}function Q(e){return typeof e=="string"}function dt(e){return Array.isArray(e)}function et(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=X(e),i;return t.types!==void 0?i=t.types:t.split!==void 0&&(i=t.split),i!==void 0&&(t.types=(Q(i)||dt(i)?String(i):"").split(",").map(function(r){return String(r).trim()}).filter(function(r){return/((line)|(word)|(char))/i.test(r)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(e.position)),t}function ft(e){var t=Q(e)||dt(e)?String(e):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function rt(e){return e!==null&&typeof e=="object"}function fe(e){return rt(e)&&/^(1|3|11)$/.test(e.nodeType)}function pe(e){return typeof e=="number"&&e>-1&&e%1===0}function ge(e){return rt(e)&&pe(e.length)}function K(e){return dt(e)?e:e==null?[]:ge(e)?Array.prototype.slice.call(e):[e]}function Ot(e){var t=e;return Q(e)&&(/^(#[a-z]\w+)$/.test(e.trim())?t=document.getElementById(e.trim().slice(1)):t=document.querySelectorAll(e)),K(t).reduce(function(i,r){return[].concat(W(i),W(K(r).filter(fe)))},[])}var ve=Object.entries,it="_splittype",j={},me=0;function Y(e,t,i){if(!rt(e))return console.warn("[data.set] owner is not an object"),null;var r=e[it]||(e[it]=++me),s=j[r]||(j[r]={});return i===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(j[r]=_t(_t({},s),t)):t!==void 0&&(s[t]=i),i}function V(e,t){var i=rt(e)?e[it]:null,r=i&&j[i]||{};return t===void 0?r:r[t]}function Ct(e){var t=e&&e[it];t&&(delete e[t],delete j[t])}function Se(){Object.keys(j).forEach(function(e){delete j[e]})}function Ee(){ve(j).forEach(function(e){var t=Lt(e,2),i=t[0],r=t[1],s=r.isRoot,n=r.isSplit;(!s||!n)&&(j[i]=null,delete j[i])})}function ye(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",i=e?String(e):"";return i.trim().replace(/\s+/g," ").split(t)}var pt="\\ud800-\\udfff",Nt="\\u0300-\\u036f\\ufe20-\\ufe23",Rt="\\u20d0-\\u20f0",It="\\ufe0e\\ufe0f",Ae="[".concat(pt,"]"),ct="[".concat(Nt).concat(Rt,"]"),ut="\\ud83c[\\udffb-\\udfff]",Te="(?:".concat(ct,"|").concat(ut,")"),Mt="[^".concat(pt,"]"),kt="(?:\\ud83c[\\udde6-\\uddff]){2}",Dt="[\\ud800-\\udbff][\\udc00-\\udfff]",Pt="\\u200d",Wt="".concat(Te,"?"),zt="[".concat(It,"]?"),be="(?:"+Pt+"(?:"+[Mt,kt,Dt].join("|")+")"+zt+Wt+")*",we=zt+Wt+be,_e="(?:".concat(["".concat(Mt).concat(ct,"?"),ct,kt,Dt,Ae].join("|"),`
)`),Oe=RegExp("".concat(ut,"(?=").concat(ut,")|").concat(_e).concat(we),"g"),Le=[Pt,pt,Nt,Rt,It],xe=RegExp("[".concat(Le.join(""),"]"));function Ce(e){return e.split("")}function Ht(e){return xe.test(e)}function Ne(e){return e.match(Oe)||[]}function Re(e){return Ht(e)?Ne(e):Ce(e)}function Ie(e){return e==null?"":String(e)}function Me(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return e=Ie(e),e&&Q(e)&&!t&&Ht(e)?Re(e):e.split(t)}function ht(e,t){var i=document.createElement(e);return t&&Object.keys(t).forEach(function(r){var s=t[r],n=Q(s)?s.trim():s;n===null||n===""||(r==="children"?i.append.apply(i,W(K(n))):i.setAttribute(r,n))}),i}var gt={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ke(e,t){t=X(gt,t);var i=ft(t.types),r=t.tagName,s=e.nodeValue,n=document.createDocumentFragment(),o=[],c=[];return/^\s/.test(s)&&n.append(" "),o=ye(s).reduce(function(l,u,p,h){var d,g;return i.chars&&(g=Me(u).map(function(w){var a=ht(r,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:w});return Y(a,"isChar",!0),c=[].concat(W(c),[a]),a})),i.words||i.lines?(d=ht(r,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(i.words&&t.absolute?"position: relative;":""),children:i.chars?g:u}),Y(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),n.appendChild(d)):g.forEach(function(w){n.appendChild(w)}),p<h.length-1&&n.append(" "),i.words?l.concat(d):l},[]),/\s$/.test(s)&&n.append(" "),e.replaceWith(n),{words:o,chars:c}}function Bt(e,t){var i=e.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(i))return r;if(i===3&&/\S/.test(e.nodeValue))return ke(e,t);var s=K(e.childNodes);if(s.length&&(Y(e,"isSplit",!0),!V(e).isRoot)){e.style.display="inline-block",e.style.position="relative";var n=e.nextSibling,o=e.previousSibling,c=e.textContent||"",l=n?n.textContent:" ",u=o?o.textContent:" ";Y(e,{isWordEnd:/\s$/.test(c)||/^\s/.test(l),isWordStart:/^\s/.test(c)||/\s$/.test(u)})}return s.reduce(function(p,h){var d=Bt(h,t),g=d.words,w=d.chars;return{words:[].concat(W(p.words),W(g)),chars:[].concat(W(p.chars),W(w))}},r)}function De(e,t,i,r){if(!i.absolute)return{top:t?e.offsetTop:null};var s=e.offsetParent,n=Lt(r,2),o=n[0],c=n[1],l=0,u=0;if(s&&s!==document.body){var p=s.getBoundingClientRect();l=p.x+o,u=p.y+c}var h=e.getBoundingClientRect(),d=h.width,g=h.height,w=h.x,a=h.y,A=a+c-u,b=w+o-l;return{width:d,height:g,top:A,left:b}}function qt(e){V(e).isWord?(Ct(e),e.replaceWith.apply(e,W(e.childNodes))):K(e.children).forEach(function(t){return qt(t)})}var Pe=function(){return document.createDocumentFragment()};function We(e,t,i){var r=ft(t.types),s=t.tagName,n=e.getElementsByTagName("*"),o=[],c=[],l=null,u,p,h,d=[],g=e.parentElement,w=e.nextElementSibling,a=Pe(),A=window.getComputedStyle(e),b=A.textAlign,_=parseFloat(A.fontSize),O=_*.2;return t.absolute&&(h={left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth},p=e.offsetWidth,u=e.offsetHeight,Y(e,{cssWidth:e.style.width,cssHeight:e.style.height})),K(n).forEach(function(y){var v=y.parentElement===e,T=De(y,v,t,i),C=T.width,I=T.height,x=T.top,R=T.left;/^br$/i.test(y.nodeName)||(r.lines&&v&&((l===null||x-l>=O)&&(l=x,o.push(c=[])),c.push(y)),t.absolute&&Y(y,{top:x,left:R,width:C,height:I}))}),g&&g.removeChild(e),r.lines&&(d=o.map(function(y){var v=ht(s,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(b,"; width: 100%;")});Y(v,"isLine",!0);var T={height:0,top:1e4};return a.appendChild(v),y.forEach(function(C,I,x){var R=V(C),z=R.isWordEnd,G=R.top,$=R.height,H=x[I+1];T.height=Math.max(T.height,$),T.top=Math.min(T.top,G),v.appendChild(C),z&&V(H).isWordStart&&v.append(" ")}),t.absolute&&Y(v,{height:T.height,top:T.top}),v}),r.words||qt(a),e.replaceChildren(a)),t.absolute&&(e.style.width="".concat(e.style.width||p,"px"),e.style.height="".concat(u,"px"),K(n).forEach(function(y){var v=V(y),T=v.isLine,C=v.top,I=v.left,x=v.width,R=v.height,z=V(y.parentElement),G=!T&&z.isLine;y.style.top="".concat(G?C-z.top:C,"px"),y.style.left=T?"".concat(h.left,"px"):"".concat(I-(G?h.left:0),"px"),y.style.height="".concat(R,"px"),y.style.width=T?"".concat(h.width,"px"):"".concat(x,"px"),y.style.position="absolute"})),g&&(w?g.insertBefore(e,w):g.appendChild(e)),d}var Z=X(gt,{}),Ut=function(){bt(e,null,[{key:"clearData",value:function(){Se()}},{key:"setDefaults",value:function(i){return Z=X(Z,et(i)),gt}},{key:"revert",value:function(i){Ot(i).forEach(function(r){var s=V(r),n=s.isSplit,o=s.html,c=s.cssWidth,l=s.cssHeight;n&&(r.innerHTML=o,r.style.width=c||"",r.style.height=l||"",Ct(r))})}},{key:"create",value:function(i,r){return new e(i,r)}},{key:"data",get:function(){return j}},{key:"defaults",get:function(){return Z},set:function(i){Z=X(Z,et(i))}}]);function e(t,i){ne(this,e),this.isSplit=!1,this.settings=X(Z,et(i)),this.elements=Ot(t),this.split()}return bt(e,[{key:"split",value:function(i){var r=this;this.revert(),this.elements.forEach(function(o){Y(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var s=[window.pageXOffset,window.pageYOffset];i!==void 0&&(this.settings=X(this.settings,et(i)));var n=ft(this.settings.types);n.none||(this.elements.forEach(function(o){Y(o,"isRoot",!0);var c=Bt(o,r.settings),l=c.words,u=c.chars;r.words=[].concat(W(r.words),W(l)),r.chars=[].concat(W(r.chars),W(u))}),this.elements.forEach(function(o){if(n.lines||r.settings.absolute){var c=We(o,r.settings,s);r.lines=[].concat(W(r.lines),W(c))}}),this.isSplit=!0,window.scrollTo(s[0],s[1]),Ee())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),e.revert(this.elements)}}]),e}();var m=function(e,t){let i=typeof e;return typeof t!="string"||t.trim()===""?e:t==="true"&&i==="boolean"?!0:t==="false"&&i==="boolean"?!1:isNaN(t)&&i==="string"?t:!isNaN(t)&&i==="number"?+t:e},N=function(e,t,i){let r=e.hasAttribute(t),s=m(i,e.getAttribute(t));if(r)return s},st=function(e,t="lines, words"){if(e)return typeSplit=new Ut(e,{types:t}),typeSplit},U=function(e,t,i){if(!e||!t||!i){console.error(`GSAP checkBreakpoints Error in ${t}`);return}let{isMobile:r,isTablet:s,isDesktop:n,reduceMotion:o}=i.conditions;if(r===void 0||s===void 0||n===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let c=`data-ix-${t}-desktop`,l=`data-ix-${t}-tablet`,u=`data-ix-${t}-mobile`,p=`data-ix-${t}-run`;return runAll=m(!0,e.getAttribute(p)),runMobile=m(!0,e.getAttribute(u)),runTablet=m(!0,e.getAttribute(l)),runDesktop=m(!0,e.getAttribute(c)),!(runAll===!1||runMobile===!1&&r||runTablet===!1&&s||runDesktop===!1&&n)},J=function(e){let t=e,i={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"};return e==="left"&&(t=i.left),e==="right"&&(t=i.right),e==="top"&&(t=i.top),e==="bottom"&&(t=i.bottom),e==="full"&&(t=i.full),t};var jt=function(e){let t="accordion",i='[data-ix-accordion="wrap"]',r='[data-ix-accordion="item"]',s='[data-ix-accordion="top"]',n="data-ix-accordion-first-open",o="data-ix-accordion-one-active",c="data-ix-accordion-keep-one-open",l="data-ix-accordion-hover",u="is-active",p=gsap.utils.toArray(i),h=function(d,g=!0){let w=Flip.getState(d,{props:"backgroundColor,margin",nested:!0,absolute:!1});g===!0?d.classList.add(u):d.classList.remove(u),Flip.from(w,{duration:.6,ease:"power1.out",onStart:()=>{d.style.overflow="hidden"},onComplete:()=>{g&&(d.style.overflow="visible"),ScrollTrigger.refresh()}})};p.length===0||p===void 0||p.forEach(d=>{if(U(d,t,e)===!1)return;let w=m(!1,d.getAttribute(n)),a=m(!1,d.getAttribute(o)),A=m(!1,d.getAttribute(c)),b=m(!1,d.getAttribute(l)),_=Array.from(d.querySelectorAll(r));if(_.length===0)return;let O=d.firstElementChild;w&&h(O),b||d.addEventListener("click",function(y){let v=y.target.closest(s);if(!v)return;let T=v.closest(r),C=T.classList.contains(u);C||(a&&_.forEach(I=>{I===T?h(I):h(I,!1)}),a||h(T)),C&&!A&&h(T,!1),C&&keepOneActive&&_.filter(function(x){return x.classList.contains(activeClass)}).length>1&&h(item,!1)}),b&&_.forEach(y=>{y.addEventListener("mouseover",function(){h(y)}),y.addEventListener("mouseout",function(){h(y,!1)})})})};var Gt=function(e){let t="hoveractive",i='[data-ix-hoveractive="wrap"]',r='[data-ix-hoveractive="item"]',s='[data-ix-hoveractive="target"]',n="data-ix-hoveractive-id",o="data-ix-hoveractive-class",c="data-ix-hoveractive-keep-active",l="is-active",u=function(h){let d=[...h.querySelectorAll(r)],g=m(l,h.getAttribute(o)),w=m(!1,h.getAttribute(c));function a(A,b=!0){let _=!0,O=A.getAttribute(n),y=h.querySelector(`${s}[${n}="${O}"]`);(!O||!y)&&(_=!1),b?(A.classList.add(g),_&&y.classList.add(g)):(A.classList.remove(g),_&&y.classList.remove(g))}d.forEach(A=>{A.addEventListener("mouseover",function(b){d.forEach(_=>{_===A?a(A,!0):a(_,!1)})}),A.addEventListener("mouseleave",function(b){w||a(A,!1)})})},p=[...document.querySelectorAll(i)];if(p.length>=0)p.forEach(h=>{U(h,t,e)!==!1&&u(h)});else{let h=document.querySelector("body");u(h)}};var Ft=function(e){let t="load",i="data-ix-load",r="heading",s="item",n="image",o="stagger",c="data-ix-load-position",l="<0.2",u=gsap.utils.toArray(`[${i}]`);if(u.length===0)return;let p=gsap.timeline({paused:!0,defaults:{ease:"power1.out",duration:.8}}),h=function(a){a.classList.contains("w-richtext")&&(a.style.opacity="1",a=a.firstChild);let A=st(a);if(!A)return;let b=m("<",a.getAttribute(c));p.set(a,{opacity:1}),p.fromTo(A.words,{opacity:0,y:"50%",rotateX:45},{opacity:1,y:"0%",rotateX:0,stagger:{each:.1,from:"left"}},b)},d=function(a){let A=m(l,a.getAttribute(c));p.fromTo(a,{opacity:0,scale:.7},{opacity:1,scale:1},A)},g=function(a){let A=m(l,a.getAttribute(c));p.fromTo(a,{opacity:0,y:"2rem"},{opacity:1,y:"0rem"},A)},w=function(a){if(!a)return;let A=gsap.utils.toArray(a.children);A.length!==0&&A.forEach((b,_)=>{_===0&&(a.style.opacity=1),g(b)})};return u.forEach(a=>{if(!a||U(a,t,e)===!1)return;let b=a.getAttribute(i);b===r&&h(a),b===n&&d(a),b===s&&g(a),b===o&&w(a)}),p.play(0),p};function $t(e,t,i){return Math.max(e,Math.min(t,i))}var vt=class{advance(t){if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(r=this.value,s=this.to,n=60*this.lerp,o=t,function(c,l,u){return(1-u)*c+u*l}(r,s,1-Math.exp(-n*o))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;let c=$t(0,this.currentTime/this.duration,1);i=c>=1;let l=i?1:this.easing(c);this.value=this.from+(this.to-this.from)*l}var r,s,n,o;this.onUpdate?.(this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,i,{lerp:r=.1,duration:s=1,easing:n=l=>l,onStart:o,onUpdate:c}){this.from=this.value=t,this.to=i,this.lerp=r,this.duration=s,this.easing=n,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=c}},mt=class{constructor({wrapper:t,content:i,autoResize:r=!0,debounce:s=250}={}){F(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});F(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});F(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=i,r&&(this.debouncedResize=function(n,o){let c;return function(){let l=arguments,u=this;clearTimeout(c),c=setTimeout(function(){n.apply(u,l)},o)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},nt=class{constructor(){this.events={}}emit(t,...i){let r=this.events[t]||[];for(let s=0,n=r.length;s<n;s++)r[s](...i)}on(t,i){return this.events[t]?.push(i)||(this.events[t]=[i]),()=>{this.events[t]=this.events[t]?.filter(r=>i!==r)}}off(t,i){this.events[t]=this.events[t]?.filter(r=>i!==r)}destroy(){this.events={}}},Yt=100/6,St=class{constructor(t,{wheelMultiplier:i=1,touchMultiplier:r=1}){F(this,"onTouchStart",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});F(this,"onTouchMove",t=>{let{clientX:i,clientY:r}=t.targetTouches?t.targetTouches[0]:t,s=-(i-this.touchStart.x)*this.touchMultiplier,n=-(r-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:s,y:n},this.emitter.emit("scroll",{deltaX:s,deltaY:n,event:t})});F(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});F(this,"onWheel",t=>{let{deltaX:i,deltaY:r,deltaMode:s}=t;i*=s===1?Yt:s===2?this.windowWidth:1,r*=s===1?Yt:s===2?this.windowHeight:1,i*=this.wheelMultiplier,r*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});F(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=i,this.touchMultiplier=r,this.touchStart={x:null,y:null},this.emitter=new nt,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}},ot=class{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:r=t,eventsTarget:s=r,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:l=35,duration:u,easing:p=O=>Math.min(1,1.001-Math.pow(2,-10*O)),lerp:h=!u&&.1,infinite:d=!1,orientation:g="vertical",gestureOrientation:w="vertical",touchMultiplier:a=1,wheelMultiplier:A=1,autoResize:b=!0,__experimental__naiveDimensions:_=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:O,deltaY:y,event:v})=>{if(v.ctrlKey)return;let T=v.type.includes("touch"),C=v.type.includes("wheel");if(this.options.syncTouch&&T&&v.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let I=O===0&&y===0,x=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&O===0;if(I||x)return;let R=v.composedPath();if(R=R.slice(0,R.indexOf(this.rootElement)),R.find(H=>{var f,S,E,k,P;return((f=H.hasAttribute)===null||f===void 0?void 0:f.call(H,"data-lenis-prevent"))||T&&((S=H.hasAttribute)===null||S===void 0?void 0:S.call(H,"data-lenis-prevent-touch"))||C&&((E=H.hasAttribute)===null||E===void 0?void 0:E.call(H,"data-lenis-prevent-wheel"))||((k=H.classList)===null||k===void 0?void 0:k.contains("lenis"))&&!(!((P=H.classList)===null||P===void 0)&&P.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void v.preventDefault();if(this.isSmooth=this.options.syncTouch&&T||this.options.smoothWheel&&C,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();v.preventDefault();let z=y;this.options.gestureOrientation==="both"?z=Math.abs(y)>Math.abs(O)?y:O:this.options.gestureOrientation==="horizontal"&&(z=O);let G=T&&this.options.syncTouch,$=T&&v.type==="touchend"&&Math.abs(z)>5;$&&(z=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+z,Object.assign({programmatic:!1},G?{lerp:$?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let O=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-O),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:r,eventsTarget:s,smoothWheel:n,syncTouch:o,syncTouchLerp:c,touchInertiaMultiplier:l,duration:u,easing:p,lerp:h,infinite:d,gestureOrientation:w,orientation:g,touchMultiplier:a,wheelMultiplier:A,autoResize:b,__experimental__naiveDimensions:_},this.animate=new vt,this.emitter=new nt,this.dimensions=new mt({wrapper:t,content:i,autoResize:b}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||n,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new St(s,{touchMultiplier:a,wheelMultiplier:A}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:r=!1,lock:s=!1,duration:n=this.options.duration,easing:o=this.options.easing,lerp:c=!n&&this.options.lerp,onComplete:l,force:u=!1,programmatic:p=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let h;if(typeof t=="string"?h=document.querySelector(t):t?.nodeType&&(h=t),h){if(this.options.wrapper!==window){let g=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?g.left:g.top}let d=h.getBoundingClientRect();t=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=i,t=Math.round(t),this.options.infinite?p&&(this.targetScroll=this.animatedScroll=this.scroll):t=$t(0,t,this.limit),r)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!p){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:n,easing:o,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,d)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),p&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,i=this.limit,(t%i+i)%i):this.animatedScroll;var t,i}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,i){this.rootElement.classList.toggle(t,i),this.emitter.emit("className change",this)}};var Xt=function(){let e=new ot({duration:1,easing:o=>o===1?1:1-Math.pow(2,-10*o),touchMultiplier:1.5});function t(o){e.raf(o),requestAnimationFrame(t)}requestAnimationFrame(t),e.on("scroll",()=>{ScrollTrigger&&ScrollTrigger.update()}),gsap.ticker.add(o=>{e.raf(o*1e3)}),gsap.ticker.lagSmoothing(0);function i(){let o=document.querySelectorAll("[scroll-to]");o?.forEach(c=>{let l=c.getAttribute("scroll-to"),u=document.getElementById(l);u&&c.addEventListener("click",p=>{e.scrollTo(u,{duration:1.85,easing:h=>h===1?1:1-Math.pow(2,-10*h)})})})}i();function r(){let o=document.querySelectorAll('[scroll="stop"]');o?.forEach(c=>{c.addEventListener("click",l=>{e.stop()})})}r();function s(){let o=document.querySelectorAll('[scroll="start"]');o?.forEach(c=>{c.addEventListener("click",l=>{e.start()})})}s();function n(){let o=document.querySelectorAll('[scroll="toggle"]');o?.forEach(c=>{let l=!1;c.addEventListener("click",u=>{l=!l,l?e.stop():e.start()})})}return n(),e};var Vt=function(e){let t="marquee",i='[data-ix-marquee="wrap"]',r='[data-ix-marquee="list"]',s="data-ix-marquee-reverse",n="data-ix-marquee-duration",o="data-ix-marquee-duration-dynamic",c="data-ix-marquee-duration-per-item",l="data-ix-marquee-hover",u="decelerate",p="decelerate",h="pause",w=document.querySelectorAll(i);w.length!==0&&w.forEach(a=>{if(U(a,t,e)===!1)return;let b=[...a.querySelectorAll(r)],_=m(!1,a.getAttribute(s)),O=m(30,a.getAttribute(n)),y=m(!1,a.getAttribute(o)),v=m(10,a.getAttribute(c)),T=b[0].childElementCount;T===1&&(T=b[0].firstElementChild.childElementCount),y&&(O=T*v);let C=m("none",a.getAttribute(l)),I=1;_&&(I=-1);let x=gsap.timeline({repeat:-1,defaults:{ease:"none"}});x.fromTo(b,{xPercent:0},{xPercent:-100*I,duration:O}),C===u&&(a.addEventListener("mouseenter",R=>{x.timeScale(2)}),a.addEventListener("mouseleave",R=>{x.timeScale(1)})),C===p&&(a.addEventListener("mouseenter",R=>{x.timeScale(.5)}),a.addEventListener("mouseleave",R=>{x.timeScale(1)})),C===h&&(a.addEventListener("mouseenter",R=>{x.pause()}),a.addEventListener("mouseleave",R=>{x.play()}))})};var Kt=function(e){let t="scrollin",i="data-ix-scrollin",r="heading",s="item",n="container",o="stagger",c="rich-text",l="image-wrap",u="image",p="line",h="data-ix-scrollin-toggle-actions",d="data-ix-scrollin-scrub",g="data-ix-scrollin-start",w="data-ix-scrollin-end",a="data-ix-scrollin-direction",A="data-ix-scrollin-stagger",y="power1.out",v=function(f){let S={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return S.toggleActions=m(S.toggleActions,f.getAttribute(h)),S.scrub=m(S.scrub,f.getAttribute(d)),S.start=m(S.start,f.getAttribute(g)),S.end=m(S.end,f.getAttribute(w)),gsap.timeline({defaults:{duration:.6,ease:y},scrollTrigger:{trigger:f,start:S.start,end:S.end,toggleActions:S.toggleActions,scrub:S.scrub}})},T=function(f,S,E={}){let k={opacity:0,y:"2rem"},P={opacity:1,y:"0rem"};return E.stagger&&(P.stagger={each:E.stagger,from:"start"}),E.stagger==="small"&&(P.stagger={each:.1,from:"start"}),E.stagger==="large"&&(P.stagger={each:.3,from:"start"}),S.fromTo(f,k,P)},C=function(f){f.classList.contains("w-richtext")&&(f=f.firstChild);let S=st(f);if(!S)return;let E=v(f),k=T(S.words,E,{stagger:"small"});ScrollTrigger.create({trigger:f,start:"top bottom",end:"bottom top",onLeave:P=>S.revert()})},I=function(f){if(f)if(f.classList.contains("w-richtext")){let S=gsap.utils.toArray(f.children);if(S.length===0)return;S.forEach(E=>{let k=v(E),P=T(E,k)})}else{let S=v(f),E=T(f,S)}},x=function(f){if(!f)return;let S=f.firstChild,E=v(f);E.fromTo(S,{scale:1.2},{scale:1,duration:1}),E.fromTo(f,{scale:.9},{scale:1,duration:1},"<")},R=function(f){if(!f)return;let S=m("left",f.getAttribute(a)),E=J(S),k=J("full");v(f).fromTo(f,{clipPath:E},{clipPath:k})},z=function(f){if(!f)return;let S=gsap.utils.toArray(f.children);S.length!==0&&S.forEach(E=>{let k=v(E),P=T(E,k)})},G=function(f){if(!f)return;let S=m(.3,f.getAttribute(A)),E=gsap.utils.toArray(f.children);if(E.length===0)return;let k=v(f),P=T(E,k,{stagger:S})},$=function(f){if(!f)return;let S=gsap.utils.toArray(f.children);S.length!==0&&S.forEach(E=>{let k=E.tagName;["H1","H2","H3","H4","H5","H6"].includes(k)&&C(E),k==="FIGURE"?x(E):I(E)})};gsap.utils.toArray(`[${i}]`).forEach(f=>{if(!f||U(f,t,e)===!1)return;let E=f.getAttribute(i);E===r&&C(f),E===s&&I(f),E===u&&x(f),E===p&&R(f),E===n&&z(f),E===o&&G(f),E===c&&$(f)})};var Zt=function(e){let t="scrolling",i='[data-ix-scrolling="wrap"]',r='[data-ix-scrolling="trigger"]',s='[data-ix-scrolling="layer"]',n="data-ix-scrolling-start",o="data-ix-scrolling-end",c="data-ix-scrolling-start-tablet",l="data-ix-scrolling-end-tablet",u="data-ix-scrolling-start-mobile",p="data-ix-scrolling-end-mobile",h="data-ix-scrolling-scrub",d="data-ix-scrolling-position",g="data-ix-scrolling-ease",w="data-ix-scrolling-x-start",a="data-ix-scrolling-x-end",A="data-ix-scrolling-y-start",b="data-ix-scrolling-y-end",_="data-ix-scrolling-scale-start",O="data-ix-scrolling-scale-end",y="data-ix-scrolling-width-start",v="data-ix-scrolling-width-end",T="data-ix-scrolling-height-start",C="data-ix-scrolling-height-end",I="data-ix-scrolling-rotate-x-start",x="data-ix-scrolling-rotate-x-end",R="data-ix-scrolling-rotate-y-start",z="data-ix-scrolling-rotate-y-end",G="data-ix-scrolling-rotate-z-start",$="data-ix-scrolling-rotate-z-end",H="data-ix-scrolling-opacity-start",f="data-ix-scrolling-opacity-end",S="data-ix-scrolling-radius-start",E="data-ix-scrolling-radius-end",k="data-ix-scrolling-clip-start",P="data-ix-scrolling-clip-end";gsap.utils.toArray(i).forEach(D=>{let Et=D.querySelectorAll(s);if(!D||Et.length===0)return;let at=D.querySelector(r);if(at||(at=D),U(D,t,e)===!1)return;let{isMobile:yt,isTablet:At,isDesktop:He,reduceMotion:Be}=e.conditions,M={scrub:.5,start:"top bottom",end:"bottom top",ease:"none"};M.start=m(M.start,D.getAttribute(n)),M.end=m(M.end,D.getAttribute(o)),M.scrub=m(M.scrub,D.getAttribute(h)),M.ease=m(M.ease,D.getAttribute(g)),At&&D.getAttribute(c)&&(M.start=m(M.start,D.getAttribute(c))),At&&D.getAttribute(l)&&(M.start=m(M.start,D.getAttribute(l))),yt&&D.getAttribute(u)&&(M.start=m(M.start,D.getAttribute(u))),yt&&D.getAttribute(p)&&(M.start=m(M.start,D.getAttribute(p)));let Qt=gsap.timeline({scrollTrigger:{trigger:at,start:M.start,end:M.end,scrub:M.scrub,markers:!1},defaults:{duration:1,ease:M.ease}});Et.forEach(L=>{if(!L)return;let q={},B={};q.x=N(L,w,"0%"),B.x=N(L,a,"0%"),q.y=N(L,A,"0%"),B.y=N(L,b,"0%"),q.scale=N(L,_,1),B.scale=N(L,O,1),q.width=N(L,y,"0%"),B.width=N(L,v,"0%"),q.height=N(L,T,"0%"),B.height=N(L,C,"0%"),q.rotateX=N(L,I,0),B.rotateX=N(L,x,0),q.rotateY=N(L,R,0),B.rotateY=N(L,z,0),q.rotateZ=N(L,G,0),B.rotateZ=N(L,$,0),q.opacity=N(L,H,0),B.opacity=N(L,f,0),q.borderRadius=N(L,S,"string"),B.borderRadius=N(L,E,"string");let te=N(L,k,"left"),ee=N(L,P,"full");q.clipPath=J(te),B.clipPath=J(ee);let ie=m("<",L.getAttribute(d));B.ease=m(L,g,"none");let qe=Qt.fromTo(L,q,B,ie)})})};var tt=function(e,t,i){let r=".swiper",s=".swiper-next",n=".swiper-prev",o=".swiper-bullet-wrapper",c=".swiper-scrollbar",l=".swiper-scrollbar-drag",u="is-active",p="is-disabled",h=[];return e.forEach(function(d){if(!d)return;let g=d.querySelector(r);if(!g)return;let w={speed:800,spaceBetween:16,direction:"horizontal",loop:!1,centeredSlides:!1,allowTouchMove:!0,slideActiveClass:u,slideDuplicateActiveClass:u},a={};if(i.navigation===!0){let _=d.querySelector(s),O=d.querySelector(n);a={...a,...{navigation:{nextEl:_,prevEl:O,disabledClass:p}}}}if(i.pagination===!0){let O={pagination:{type:"bullets",el:d.querySelector(o),bulletActiveClass:u,bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0}};a={...a,...O}}if(i.scrollbar===!0){let O={scrollbar:{el:d.querySelector(c),dragClass:l,draggable:!0,dragSize:"auto",snapOnRelease:!1}};a={...a,...O}}i.autoplay===!0&&(a={...a,...{autoplay:{delay:3e3,disableOnInteraction:!0,pauseOnMouseEnter:!1,stopOnLastSlide:!0}}});let A={...w,...a,...t},b=new Swiper(g,A);h.push(b)}),h};document.addEventListener("DOMContentLoaded",function(){gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let e,t=function(){let u=[...document.querySelectorAll(".stats_component")],d=tt(u,{slidesPerView:"auto",direction:"vertical",loop:!0},{navigation:!1,pagination:!0,scrollbar:!1,autoplay:!0})},i=function(){let u=[...document.querySelectorAll(".timeline_component")],d=tt(u,{slidesPerView:"auto",loop:!1},{navigation:!0,pagination:!1,scrollbar:!1,autoplay:!1})},r=function(){let u=[...document.querySelectorAll(".testimonial_component")],d=tt(u,{slidesPerView:1,speed:1200,loop:!1},{navigation:!0,pagination:!0,scrollbar:!1,autoplay:!1})},s=function(){let u=[...document.querySelectorAll(".card-slider_component")],d=tt(u,{slidesPerView:1,loop:!0},{navigation:!0,pagination:!1,scrollbar:!1,autoplay:!1})},n=function(){let l='[data-ix-partner="wrap"]',u='[data-ix-partner="number"]',p='[data-ix-partner="item"]',h=[...document.querySelectorAll(l)];!h.length!==0&&h.forEach(function(d,g){let w=[...d.querySelectorAll(u)],a=[...d.querySelectorAll(p)];!a.length!==0&&a.forEach(function(A,b){let _=w[b],O=w[b-1],y=w[b+1];if(b!==0){let v=gsap.timeline({defaults:{duration:1,ease:"power2.out"},scrollTrigger:{trigger:A,start:"top 90%",end:"top 50%",scrub:!0}});v.set(_,{opacity:1},"<"),v.to(O,{yPercent:-100},"<"),v.fromTo(_,{yPercent:100},{yPercent:0},"<")}})})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},u=>{let{isMobile:p,isTablet:h,isDesktop:d,reduceMotion:g}=u.conditions;e=Xt(),Ft(u),jt(u),Vt(u),t(),i(),r(),s(),Gt(u),n(),g||(Kt(u),Zt(u))})})(),function(){let l="[data-ix-reset]",u="data-ix-reset-time";document.querySelectorAll(l).forEach(function(h){h.addEventListener("click",function(d){if(ScrollTrigger.refresh(),h.hasAttribute(u)){let g=m(1e3,h.getAttribute(u));setTimeout(()=>{ScrollTrigger.refresh()},g)}})})}()});})();
