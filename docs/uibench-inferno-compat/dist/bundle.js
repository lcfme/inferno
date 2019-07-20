!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"==n||"number"==n}function w(e){return h(e)||$(e)}function C(e){return $(e)||false===e||true===e||h(e)}function x(e){return"function"==typeof e}function p(e){return"string"==typeof e}function $(e){return null===e}function h(e){return void 0===e}function S(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}var L={},n="$F";function v(e){return e.substr(2).toLowerCase()}function N(e,n){e.appendChild(n)}function m(e,n,t){$(t)?N(e,n):e.insertBefore(n,t)}function U(e,n){e.removeChild(n)}function i(e){for(var n;void 0!==(n=e.shift());)n()}function P(e,n){for(var t,r;e;){if(2033&(t=e.flags))return e.dom;r=e.children,e=8192&t?2===e.childFlags?r:r[n?0:r.length-1]:4&t?r.$LI:r}return null}function F(e,n){var t=e.flags;if(2033&t)U(n,e.dom);else{var r=e.children;if(4&t)F(r.$LI,n);else if(8&t)F(r,n);else if(8192&t)if(2===e.childFlags)F(r,n);else for(var o=0,l=r.length;o<l;++o)F(r[o],n)}}function M(e,n,t){var r=e.flags;if(2033&r)m(n,e.dom,t);else{var o=e.children;if(4&r)M(o.$LI,n,t);else if(8&r)M(o,n,t);else if(8192&r)if(2===e.childFlags)M(o,n,t);else for(var l=0,i=o.length;l<i;++l)M(o[l],n,t)}}function b(e,n,t){return e.constructor.getDerivedStateFromProps?S(t,e.constructor.getDerivedStateFromProps(n,t)):t}var a={v:false},g={componentComparator:null,createVNode:null,renderComplete:null};function k(e,n){e.textContent=n}function y(e,n){return e&&n&&typeof e==typeof n&&e.event===n.event&&e.data===n.data}var V="$";function I(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function T(e,n,t,r,o,l,i,a){var u=void 0===o?1:o,s=new I(u,r,t,e,i,l,a,n);return g.createVNode&&g.createVNode(s),0===u&&W(s,s.children),s}function _(e,n,t,r,o){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var l=n.defaultProps;if(!w(l))for(var i in t=t||{},l)h(t[i])&&(t[i]=l[i]);if(0<(8&e)&&0==(32768&e)){var a=n.defaultHooks;if(!w(a))if(o)for(var u in a)h(o[u])&&(o[u]=a[u]);else o=a}var s=new I(1,null,null,e,r,t,o,n),c=g.createVNode;return x(c)&&c(s),s}function A(e,n){return new I(1,w(e)?"":e,null,16,n,null,null,null)}function D(e,n,t){var r=T(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=O(),r.childFlags=2;break;case 16:r.children=[A(e)],r.childFlags=4}return r}function c(e){var n=e.props;if(n){var t=e.flags;481&t&&(void 0!==n.children&&w(e.children)&&W(e,n.children),void 0!==n.className&&(e.className=n.className||null,n.className=void 0)),void 0!==n.key&&(e.key=n.key,n.key=void 0),void 0!==n.ref&&(e.ref=8&t?S(e.ref,n.ref):n.ref,n.ref=void 0)}return e}function E(e){var n=-16385&e.flags,t=e.props;if(14&n&&!$(t)){var r=t;for(var o in t={},r)t[o]=r[o]}return 0==(8192&n)?new I(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,r=e.childFlags;if(2===r)n=E(t);else if(12&r){n=[];for(var o=0,l=t.length;o<l;++o)n.push(E(t[o]))}return D(n,r,e.key)}(e)}function O(){return A("",null)}function B(e,n,t,r){for(var o=e.length;t<o;t++){var l=e[t];if(!C(l)){var i=r+V+t;if(f(l))B(l,n,0,i);else{if(d(l))l=A(l,i);else{var a=l.key,u=p(a)&&a[0]===V;(81920&l.flags||u)&&(l=E(l)),l.flags|=65536,u?a.substring(0,r.length)!==r&&(l.key=r+a):$(a)?l.key=i:l.key=r+a}n.push(l)}}}}function R(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case n:return 8192;default:return 1}}function W(e,n){var t,r=1;if(C(n))t=n;else if(d(n))r=16,t=n;else if(f(n)){for(var o=n.length,l=0;l<o;++l){var i=n[l];if(C(i)||f(i)){t=t||n.slice(0,l),B(n,t,l,"");break}if(d(i))(t=t||n.slice(0,l)).push(A(i,V+l));else{var a=i.key,u=0<(81920&i.flags),s=$(a),c=p(a)&&a[0]===V;u||s||c?(t=t||n.slice(0,l),(u||c)&&(i=E(i)),(s||c)&&(i.key=V+l),t.push(i)):t&&t.push(i),i.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=E(n)),r=2;return e.children=t,e.childFlags=r,e}function t(e,n){return x(n)?{data:e,event:n}:null}var e="http://www.w3.org/1999/xlink",r="http://www.w3.org/XML/1998/namespace",j={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":r,"xml:lang":r,"xml:space":r};function u(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var s=u(0),H=u(null),z=u(true);function Q(e,n,t){var r,o,l,i,a=t.$EV;n?(0===s[e]&&(H[e]=(i="onClick"===(r=e)||"onDblClick"===r?(l=r,function(e){0===e.button?X(e,e.target,true,l,G(e)):e.stopPropagation()}):(o=r,function(e){X(e,e.target,false,o,G(e))}),document.addEventListener(v(r),i),i)),(a=a||(t.$EV=u(null)))[e]||++s[e],a[e]=n):a&&a[e]&&(0==--s[e]&&(document.removeEventListener(v(e),H[e]),H[e]=null),a[e]=null)}function X(e,n,t,r,o){var l=n;do{if(t&&l.disabled)return;var i=l.$EV;if(i){var a=i[r];if(a&&(o.dom=l,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}l=l.parentNode}while(!$(l))}function o(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function l(){return this.defaultPrevented}function q(){return this.cancelBubble}function G(e){var n={dom:document};return Object.defineProperties(e,{currentTarget:{get:function(){return n.dom}},isDefaultPrevented:{value:l},isPropagationStopped:{value:q},stopPropagation:{value:o}}),n}function K(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function J(a,u){function e(e){var n=this.$V;if(n){var t=n.props||L,r=n.dom;if(p(a))K(t,a,e);else for(var o=0;o<a.length;++o)K(t,a[o],e);if(x(u)){var l=this.$V,i=l.props||L;u(i,r,false,l)}}}return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener.apply(e,o),e[r]=null}x(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Z(e){return"checkbox"===e||"radio"===e}var ee=J("onInput",re),ne=J(["onClick","onChange"],re);function te(e){e.stopPropagation()}function re(e,n){var t=e.type,r=e.value,o=e.checked,l=e.multiple,i=e.defaultValue,a=!w(r);t&&t!==n.type&&n.setAttribute("type",t),w(l)||l===n.multiple||(n.multiple=l),w(i)||a||(n.defaultValue=i+""),Z(t)?(a&&(n.value=r),w(o)||(n.checked=o)):a&&n.value!==r?(n.defaultValue=r,n.value=r):w(o)||(n.checked=o)}te.wrapped=true;var oe=J("onChange",le);function le(e,n,t,r){var o=Boolean(e.multiple);w(e.multiple)||o===n.multiple||(n.multiple=o);var l=e.selectedIndex;if(-1===l&&(n.selectedIndex=-1),1!==r.childFlags){var i=e.value;"number"==typeof l&&-1<l&&n.options[l]&&(i=n.options[l].value),t&&w(i)&&(i=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(a=n).props||L,(c=a.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:w(u)&&w(s.selected)||(c.selected=s.selected||false);else{var r=n.children,o=n.flags;if(4&o)e(r.$LI,t);else if(8&o)e(r,t);else if(2===n.childFlags)e(r,t);else if(12&n.childFlags)for(var l=0,i=r.length;l<i;++l)e(r[l],t)}var a,u,s,c}(r,i)}}var ie,ae,ue=J("onInput",ce),se=J("onChange");function ce(e,n,t){var r=e.value,o=n.value;if(w(r)){if(t){var l=e.defaultValue;w(l)||l===o||(n.defaultValue=l,n.value=l)}}else o!==r&&(n.defaultValue=r,n.value=r)}function fe(e,n,t,r,o,l){64&e?re(r,t):256&e?le(r,t,o,n):128&e&&ce(r,t,o),l&&(t.$V=n)}function de(e){return e.type&&Z(e.type)?!w(e.checked):!w(e.value)}function pe(e){e&&(x(e)?e(null):e.current&&(e.current=null))}function he(e,n,t){e&&(x(e)||void 0!==e.current)&&t.push(function(){x(e)?e(n):void 0!==e.current&&(e.current=n)})}function ve(e,n){me(e),n&&F(e,n)}function me(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var o=e.props;pe(n);var l=e.childFlags;if(!$(o))for(var i=Object.keys(o),a=0,u=i.length;a<u;a++){var s=i[a];z[s]&&Q(s,null,e.dom)}12&l?ge(r):2===l&&me(r)}else r&&(4&t?(x(r.componentWillUnmount)&&r.componentWillUnmount(),pe(e.ref),r.$UN=true,me(r.$LI)):8&t?(!w(n=e.ref)&&x(n.onComponentWillUnmount)&&n.onComponentWillUnmount(P(e,true),e.props||L),me(r)):1024&t?ve(r,e.ref):8192&t&&12&e.childFlags&&ge(r))}function ge(e){for(var n=0,t=e.length;n<t;++n)me(e[n])}function ye(e){e.textContent=""}function be(e,n,t){ge(t),8192&n.flags?F(n,e):ye(e)}function ke(e,n,t,r,o,l,i){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===e)break;var a=w(t)?"":t;r[e]!==a&&(r[e]=a);break;case"style":!function(e,n,t){if(w(n))t.removeAttribute("style");else{var r,o,l=t.style;if(p(n))l.cssText=n;else if(w(e)||p(e))for(r in n)o=n[r],l.setProperty(r,o);else{for(r in n)(o=n[r])!==e[r]&&l.setProperty(r,o);for(r in e)w(n[r])&&l.removeProperty(r)}}}(n,t,r);break;case"dangerouslySetInnerHTML":var u=n&&n.__html||"",s=t&&t.__html||"";u!==s&&(w(s)||(c=r,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||($(i)||(12&i.childFlags?ge(i.children):2===i.childFlags&&me(i.children),i.children=null,i.childFlags=1),r.innerHTML=s));break;default:z[e]?y(n,t)||Q(e,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if("object"!=typeof t||$(t))Y(r,v(e),t);else{var o=t.event;y(n,t)||Y(r,v(e),(l=o,i=t,function(e){l(i.data,e)}))}var l,i}(e,n,t,r):w(t)?r.removeAttribute(e):o&&j[e]?r.setAttributeNS(j[e],e,t):r.setAttribute(e,t)}var c,f,d}function Ce(e,n,t,r,o){var l,i,a,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=de(t))&&(i=r,a=t,c=s=u=void 0,64&(l=n)?(c=i,Z(a.type)?(Y(c,"change",ne),Y(c,"click",te)):Y(c,"input",ee)):256&l?Y(i,"change",oe):128&l&&(s=a,Y(u=i,"input",ue),s.onChange&&Y(u,"change",se))),t)ke(p,null,t[p],r,o,f,null);d&&fe(n,e,r,t,true,f)}function xe(e,n,t){var r=$e(e.render(n,e.state,t)),o=t;return x(e.getChildContext)&&(o=S(t,e.getChildContext())),e.$CX=o,r}function we(e,n,t,r,o,l){var i=new n(t,r),a=i.$N=Boolean(n.getDerivedStateFromProps||i.getSnapshotBeforeUpdate);if(i.$SVG=o,i.$L=l,(e.children=i).$BS=false,i.context=r,i.props===L&&(i.props=t),a)i.state=b(i,t,i.state);else if(x(i.componentWillMount)){i.$BR=true,i.componentWillMount();var u=i.$PS;if(!$(u)){var s=i.state;if($(s))i.state=u;else for(var c in u)s[c]=u[c];i.$PS=null}i.$BR=false}return i.$LI=xe(i,t,r),i}function $e(e){return C(e)?O():d(e)?A(e,null):f(e)?D(e,0,null):16384&e.flags?E(e):e}function Se(e,n,t,r,o,l){var i,a,u,s,c,f,d,p,h,v,m,g,y,b,k,C,x,w,$,S,N,U,P,F,M,V=e.flags|=16384;481&V?Ue(e,n,t,r,o,l):4&V?(S=n,N=t,U=r,P=o,F=l,Se((M=we($=e,$.type,$.props||L,N,U,F)).$LI,S,M.$CX,U,P,F),Fe($.ref,M,F)):8&V?(v=n,m=t,g=r,y=o,b=l,k=(h=e).type,C=h.props||L,x=h.ref,w=$e(32768&h.flags?k(C,x,m):k(C,m)),Se(h.children=w,v,m,g,y,b),Me(C,x,h,b)):512&V||16&V?Ne(e,n,o):8192&V?(a=n,u=t,s=r,c=o,f=l,d=(i=e).children,12&(p=i.childFlags)&&0===d.length&&(p=i.childFlags=2,d=i.children=O()),2===p?Se(d,a,c,s,c,f):Pe(d,a,u,s,c,f)):1024&V&&function(e,n,t,r,o){Se(e.children,e.ref,n,false,null,o);var l=O();Ne(l,t,r),e.dom=l.dom}(e,t,n,o,l)}function Ne(e,n,t){var r=e.dom=document.createTextNode(e.children);$(n)||m(n,r,t)}function Ue(e,n,t,r,o,l){var i,a=e.flags,u=e.props,s=e.className,c=e.children,f=e.childFlags,d=e.dom=(i=e.type,(r=r||0<(32&a))?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i));if(w(s)||""===s||(r?d.setAttribute("class",s):d.className=s),16===f)k(d,c);else if(1!==f){var p=r&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=E(c)),Se(c,d,t,p,null,l)):8!==f&&4!==f||Pe(c,d,t,p,null,l)}$(n)||m(n,d,o),$(u)||Ce(e,a,u,d,r),he(e.ref,d,l)}function Pe(e,n,t,r,o,l){for(var i=0,a=e.length;i<a;++i){var u=e[i];16384&u.flags&&(e[i]=u=E(u)),Se(u,n,t,r,o,l)}}function Fe(e,n,t){var r;he(e,n,t),x(n.componentDidMount)&&t.push((r=n,function(){r.componentDidMount()}))}function Me(e,n,t,r){var o,l,i;w(n)||(x(n.onComponentWillMount)&&n.onComponentWillMount(e),x(n.onComponentDidMount)&&r.push((o=n,l=t,i=e,function(){o.onComponentDidMount(P(l,true),i)})))}function Ve(e,n,t,r,o,l,i){var a,u,s,c,f,d,p,h,v,m,g,y,b,k=n.flags|=16384;e.flags!==k||e.type!==n.type||e.key!==n.key||0!=(2048&k)?16384&e.flags?(d=n,p=t,h=r,v=o,m=i,me(f=e),0!=(d.flags&f.flags&2033)?(Se(d,null,h,v,null,m),g=p,y=d.dom,b=f.dom,g.replaceChild(y,b)):(Se(d,p,h,v,P(f,true),m),F(f,p))):Se(n,t,r,o,l,i):481&k?function(e,n,t,r,o,l){var i,a=n.dom=e.dom,u=e.props,s=n.props,c=false,f=false;if(r=r||0<(32&o),u!==s){var d=u||L;if((i=s||L)!==L)for(var p in(c=0<(448&o))&&(f=de(i)),i){var h=d[p],v=i[p];h!==v&&ke(p,h,v,a,r,f,e)}if(d!==L)for(var m in d)w(i[m])&&!w(d[m])&&ke(m,d[m],null,a,r,f,e)}var g,y,b=n.children,k=n.className;e.className!==k&&(w(k)?a.removeAttribute("class"):r?a.setAttribute("class",k):a.className=k),4096&o?(y=b,(g=a).textContent!==y&&(g.textContent=y)):Le(e.childFlags,n.childFlags,e.children,b,a,t,r&&"foreignObject"!==n.type,null,e,l),c&&fe(o,n,a,i,false,f);var C=n.ref,x=e.ref;x!==C&&(pe(x),he(C,a,l))}(e,n,r,o,k,i):4&k?function(e,n,t,r,o,l,i){var a=n.children=e.children;if(!$(a)){a.$L=i;var u=n.props||L,s=n.ref,c=e.ref,f=a.state;if(!a.$N){if(x(a.componentWillReceiveProps)){if(a.$BR=true,a.componentWillReceiveProps(u,r),a.$UN)return;a.$BR=false}$(a.$PS)||(f=S(f,a.$PS),a.$PS=null)}Ie(a,f,u,t,r,o,false,l,i),c!==s&&(pe(c),he(s,a,i))}}(e,n,t,r,o,l,i):8&k?function(e,n,t,r,o,l,i){var a=true,u=n.props||L,s=n.ref,c=e.props,f=!w(s),d=e.children;if(f&&x(s.onComponentShouldUpdate)&&(a=s.onComponentShouldUpdate(c,u)),false!==a){f&&x(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,h=$e(32768&n.flags?p(u,s,r):p(u,r));Ve(d,h,t,r,o,l,i),n.children=h,f&&x(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,t,r,o,l,i):16&k?(a=e,s=(u=n).children,c=u.dom=a.dom,s!==a.children&&(c.nodeValue=s)):512&k?n.dom=e.dom:8192&k?function(e,n,t,r,o,l){var i=e.children,a=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===a.length&&(s=n.childFlags=2,a=n.children=O());var f=0!=(2&s);if(12&u){var d=i.length;(8&u&&8&s||f||!f&&a.length>d)&&(c=P(i[d-1],false).nextSibling)}Le(u,s,i,a,t,r,o,c,e,l)}(e,n,t,r,o,i):function(e,n,t,r){var o=e.ref,l=n.ref,i=n.children;if(Le(e.childFlags,n.childFlags,e.children,i,o,t,false,null,e,r),n.dom=e.dom,o!==l&&!C(i)){var a=i.dom;U(o,a),N(l,a)}}(e,n,r,i)}function Le(e,n,t,r,o,l,i,a,u,s){switch(e){case 2:switch(n){case 2:Ve(t,r,o,l,i,a,s);break;case 1:ve(t,o);break;case 16:me(t),k(o,r);break;default:v=r,m=o,g=l,y=i,b=s,me(h=t),Pe(v,m,g,y,P(h,true),b),F(h,m)}break;case 1:switch(n){case 2:Se(r,o,l,i,a,s);break;case 1:break;case 16:k(o,r);break;default:Pe(r,o,l,i,a,s)}break;case 16:switch(n){case 16:p=o,t!==(d=r)&&(""!==t?p.firstChild.nodeValue=d:k(p,d));break;case 2:ye(o),Se(r,o,l,i,a,s);break;case 1:ye(o);break;default:ye(o),Pe(r,o,l,i,a,s)}break;default:switch(n){case 16:ge(t),k(o,r);break;case 2:be(o,u,t),Se(r,o,l,i,a,s);break;case 1:be(o,u,t);break;default:var c=0|t.length,f=0|r.length;0==c?0<f&&Pe(r,o,l,i,a,s):0==f?be(o,u,t):8===n&&8===e?function(e,n,t,r,o,l,i,a,u,s){var c,f,d=l-1,p=i-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=E(m)),Ve(v,m,t,r,o,a,s),e[h]=m,d<++h||p<h)break e;v=e[h],m=n[h]}for(v=e[d],m=n[p];v.key===m.key;){if(16384&m.flags&&(n[p]=m=E(m)),Ve(v,m,t,r,o,a,s),e[d]=m,p--,--d<h||p<h)break e;v=e[d],m=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<i?P(n[c],true):a;h<=p;)16384&(m=n[h]).flags&&(n[h]=m=E(m)),++h,Se(m,t,r,o,f,s)}else if(p<h)for(;h<=d;)ve(e[h++],t);else!function(e,n,t,r,o,l,i,a,u,s,c,f,d){var p,h=e[a],v=n[a],m=0,g=a,y=a,b=l-a+1,k=i-a+1,C=new Int32Array(k-m+1),x=b==r,w=false,$=0,S=0;if(o<4||(b|k)<32)for(m=g;m<=l;++m)if(h=e[m],S<k){for(a=y;a<=i;a++)if(v=n[a],h.key===v.key){if(C[a-y]=m+1,x)for(x=false;g<m;)ve(e[g++],u);a<$?w=true:$=a,16384&v.flags&&(n[a]=v=E(v)),Ve(h,v,u,t,s,c,d),++S;break}!x&&i<a&&ve(h,u)}else x||ve(h,u);else{var N={};for(m=y;m<=i;++m)N[n[m].key]=m;for(m=g;m<=l;++m)if(h=e[m],S<k)if(void 0!==(a=N[h.key])){if(x)for(x=false;g<m;)ve(e[g++],u);v=n[a],C[a-y]=m+1,a<$?w=true:$=a,16384&v.flags&&(n[a]=v=E(v)),Ve(h,v,u,t,s,c,d),++S}else x||ve(h,u);else x||ve(h,u)}if(x)be(u,f,e),Pe(n,u,t,s,c,d);else if(w){var U=function(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(Te<u&&(ie=new Int32Array(Te=u),ae=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=ie[o]]<n){ae[t]=r,ie[++o]=t;continue}for(l=0,i=o;l<i;)e[ie[a=l+i>>1]]<n?l=a+1:i=a;n<e[ie[l]]&&(0<l&&(ae[t]=ie[l-1]),ie[l]=t)}l=o+1;var s=new Int32Array(l);for(i=ie[l-1];0<l--;)s[l]=i,i=ae[i],ie[l]=0;return s}(C);for(a=U.length-1,m=k-1;0<=m;m--)0===C[m]?(16384&(v=n[$=m+y]).flags&&(n[$]=v=E(v)),Se(v,u,t,s,(p=$+1)<o?P(n[p],true):c,d)):a<0||m!==U[a]?M(v=n[$=m+y],u,(p=$+1)<o?P(n[p],true):c):a--}else if(S!==k)for(m=k-1;0<=m;m--)0===C[m]&&(16384&(v=n[$=m+y]).flags&&(n[$]=v=E(v)),Se(v,u,t,s,(p=$+1)<o?P(n[p],true):c,d))}(e,n,r,l,i,d,p,h,t,o,a,u,s)}(t,r,o,l,i,c,f,a,u,s):function(e,n,t,r,o,l,i,a,u){for(var s,c,f=i<l?i:l,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=E(s)),Ve(c,s,t,r,o,a,u),e[d]=s;if(l<i)for(d=f;d<i;++d)16384&(s=n[d]).flags&&(s=n[d]=E(s)),Se(s,t,r,o,a,u);else if(i<l)for(d=f;d<l;++d)ve(e[d],t)}(t,r,o,l,i,c,f,a,s)}}var d,p,h,v,m,g,y,b}function Ie(e,n,t,r,o,l,i,a,u){var s,c,f,d,p=e.state,h=e.props,v=Boolean(e.$N),m=x(e.shouldComponentUpdate);if(v&&(n=b(e,t,n!==p?S(p,n):n)),i||!m||m&&e.shouldComponentUpdate(t,n,o)){!v&&x(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var g=null,y=xe(e,t,o);v&&x(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(h,p)),Ve(e.$LI,y,r,e.$CX,l,a,u),e.$LI=y,x(e.componentDidUpdate)&&(s=e,c=h,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=t,e.state=n,e.context=o}var Te=0;function _e(e,n,t,r){var o=[],l=n.$V;a.v=true,w(l)?w(e)||(16384&e.flags&&(e=E(e)),Se(e,n,r,false,null,o),l=n.$V=e):w(e)?(ve(l,n),n.$V=null):(16384&e.flags&&(e=E(e)),Ve(l,e,n,r,false,null,o),l=n.$V=e),0<o.length&&i(o),a.v=false,x(t)&&t(),x(g.renderComplete)&&g.renderComplete(l,n)}function Ae(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=L),_e(e,n,t,r)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null);var De=[],Ee="undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),Oe=false;function Be(e,n,t,r){var o=e.$PS;if(x(n)&&(n=n(o?S(e.state,o):e.state,e.props,e.context)),w(o))e.$PS=n;else for(var l in n)o[l]=n[l];if(e.$BR)x(t)&&e.$L.push(t.bind(e));else{if(!a.v&&0===De.length)return void je(e,r,t);if(-1===De.indexOf(e)&&De.push(e),Oe||(Oe=true,Ee(We)),x(t)){var i=e.$QU;(i=i||(e.$QU=[])).push(t)}}}function Re(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function We(){var e;for(Oe=false;e=De.pop();)je(e,false,e.$QU?Re.bind(null,e):null)}function je(e,n,t){if(!e.$UN){if(n||!e.$BR){var r=e.$PS;e.$PS=null;var o=[];a.v=true,Ie(e,S(e.state,r),e.props,P(e.$LI,true).parentNode,e.context,e.$SVG,n,null,o),0<o.length&&i(o),a.v=false}else e.state=e.$PS,e.$PS=null;x(t)&&t.call(e)}}function He(e,n){this.state=null,this.$BR=false,this.$BS=true,this.$PS=null,this.$LI=null,this.$UN=false,this.$CX=null,this.$QU=null,this.$N=false,this.$L=null,this.$SVG=false,this.props=e||L,this.context=n||L}function ze(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function Qe(e,n,t){var r=arguments,o=e.flags,l=14&o?e.props&&e.props.children:e.children,i=arguments.length-2,a=e.className,u=e.key,s=e.ref;if(n?(void 0!==n.className&&(a=n.className),void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=n.key),void 0!==n.children&&(l=n.children)):n={},1===i)l=t;else if(1<i)for(l=[];0<i--;)l[i]=r[i+2];return n.children=l,14&o?_(o,e.type,e.props||n?ze(e.props,n):L,u,s):16&o?A(l):8192&o?D(1===i?[l]:l,0,u):c(T(o,e.type,a,null,1,ze(e.props,n),u,s))}He.prototype.forceUpdate=function(e){this.$UN||Be(this,{},e,true)},He.prototype.setState=function(e,n){this.$UN||this.$BS||Be(this,e,n,false)},He.prototype.render=function(e,n,t){return null};var Xe="a runtime error occured! Use Inferno in development environment to find the error.";function qe(e){throw e=e||Xe,new Error("Inferno Error: "+e)}var Ge={componentDidMount:1,componentDidUnmount:1,componentDidUpdate:1,componentWillMount:1,componentWillUnmount:1,componentWillUpdate:1,constructor:1,render:1,shouldComponentUpdate:1};function Ke(e,n){for(var t in n)e[t]=n[t];return e}function Je(e,n){void 0===n&&(n={});for(var t=0,r=e.length;t<r;++t){var o=e[t];for(var l in o.mixins&&Je(o.mixins,n),o)o.hasOwnProperty(l)&&"function"==typeof o[l]&&(n[l]||(n[l]=[])).push(o[l])}return n}function Ye(l,i){return function(){for(var e,n=arguments,t=0,r=l.length;t<r;++t){var o=l[t].apply(this,n);i?e=i(e,o):o&&(e=o)}return e}}function Ze(e,n){if(n)for(var t in"object"==typeof n||qe("Expected Mixin to return value to be an object or null."),e=e||{},n)n.hasOwnProperty(t)&&(e.hasOwnProperty(t)&&qe("Mixins return duplicate key "+t+" in their return values"),e[t]=n[t]);return e}function en(e){return nn(e)||null===e}function nn(e){return void 0===e}var tn={onComponentDidMount:1,onComponentDidUpdate:1,onComponentShouldUpdate:1,onComponentWillMount:1,onComponentWillUnmount:1,onComponentWillUpdate:1};function rn(e,n,t){var r,o,l=arguments,i=null,a=null,u=null,s=0,c=arguments.length-2;if(1===c)r=t;else if(1<c)for(r=[];0<c--;)r[c]=l[c+2];if(!("string"==typeof e)){if(s=2,nn(r)||((n=n||{}).children=r),!en(n))for(var f in o={},n)"key"===f?a=n.key:"ref"===f?i=n.ref:1===tn[f]?(i=i||{})[f]=n[f]:o[f]=n[f];return _(s,e,o,a,i)}if(s=R(e),!en(n))for(var d in o={},n)"className"===d||"class"===d?u=n[d]:"key"===d?a=n.key:"children"===d&&nn(r)?r=n.children:"ref"===d?i=n.ref:("contenteditable"===d&&(s|=4096),o[d]=n[d]);return 8192&s?D(1===c?[r]:r,0,a):T(s,e,u,r,0,o,a,i)}var on="a runtime error occured! Use Inferno in development environment to find the error.";function ln(e){return null===e}function an(e){return void 0===e}function un(e,n,t,r,o,l){var i,a,u,s,c,f=e.childFlags,d=e.children,p=e.props,h=e.flags;if(1!==f){if(2===f)ln(t)?Se(d,n,r,o,null,l):t=(t=cn(d,n,t,r,o,l))?t.nextSibling:null;else if(16===f)ln(t)?n.appendChild(document.createTextNode(d)):1!==n.childNodes.length||3!==t.nodeType?n.textContent=d:t.nodeValue!==d&&(t.nodeValue=d),t=null;else if(12&f)for(var v=false,m=0,g=d.length;m<g;++m){var y=d[m];ln(t)||v&&0<(16&y.flags)?Se(y,n,r,o,t,l):t=(t=cn(y,n,t,r,o,l))?t.nextSibling:null,v=0<(16&y.flags)}if(0==(8192&h))for(var b=null;t;)b=t.nextSibling,n.removeChild(t),t=b}else ln(n.firstChild)||(i=n,a=p,Boolean(a&&a.dangerouslySetInnerHTML&&a.dangerouslySetInnerHTML.__html&&(u=i,s=a.dangerouslySetInnerHTML.__html,(c=document.createElement("i")).innerHTML=s,c.innerHTML===u.innerHTML)))||(n.textContent="",448&h&&(n.defaultValue=""))}function sn(e,n,t){if(3!==t.nodeType)Ne(e,null,null),n.replaceChild(e.dom,t);else{var r=e.children;t.nodeValue!==r&&(t.nodeValue=r),e.dom=t}return e.dom}function cn(e,n,t,r,o,l){var i,a,u,s,c,f,d,p,h,v,m,g,y,b,k,C,x,w,$=e.flags|=16384;return 14&$?function(e,n,t,r,o,l,i){var a,u=e.type,s=e.ref,c=e.props||{};if(l){var f=we(e,u,c,r,o,i);a=cn(f.$LI,n,t,f.$CX,o,i),Fe(s,f,i)}else{var d=$e(u(c,r));a=cn(d,n,t,r,o,i),e.children=d,Me(c,s,e,i)}return a}(e,n,t,r,o,0<(4&$),l):481&$?(h=n,v=t,m=r,g=o,y=l,k=(p=e).props,C=p.className,x=p.flags,w=p.ref,g=g||0<(32&x),1!==v.nodeType||v.tagName.toLowerCase()!==p.type?(Ue(p,null,m,g,null,y),h.replaceChild(p.dom,v)):(p.dom=v,un(p,v,v.firstChild,m,g,y),ln(k)||Ce(p,x,k,v,g),an(b=C)||ln(b)?""!==v.className&&v.removeAttribute("class"):g?v.setAttribute("class",C):v.className=C,he(w,v,y)),p.dom):16&$?sn(e,n,t):512&$?e.dom=t:8192&$?(a=n,u=t,s=r,c=o,f=l,d=(i=e).children,2===i.childFlags?(sn(d,a,u),d.dom):(un(i,a,u,s,c,f),function(e){for(var n,t;e;){if(2033&(n=e.flags))return e.dom;t=e.children,e=8192&n?2===e.childFlags?t:t[t.length-1]:4&n?t.$LI:t}return null}(d[d.length-1]))):(function(e){throw e=e||on,new Error("Inferno Error: "+e)}(),null)}var fn=Array.isArray;function dn(e){return vn(e)||hn(e)}function pn(e){return"string"==typeof e}function hn(e){return null===e}function vn(e){return void 0===e}function mn(){}function gn(){return mn}function yn(e){return e[1].toUpperCase()}var bn={any:gn,array:mn.isRequired=mn,arrayOf:gn,bool:mn,checkPropTypes:function(){return null},element:gn,func:mn,instanceOf:gn,node:gn,number:mn,object:mn,objectOf:gn,oneOf:gn,oneOfType:gn,shape:gn,string:mn,symbol:mn},kn={htmlFor:"for",onDoubleClick:"onDblClick"},Cn=/[\-\:]([a-z])/g;function xn(e,n){switch(e){case"animation-iteration-count":case"border-image-outset":case"border-image-slice":case"border-image-width":case"box-flex":case"box-flex-group":case"box-ordinal-group":case"column-count":case"fill-opacity":case"flex":case"flex-grow":case"flex-negative":case"flex-order":case"flex-positive":case"flex-shrink":case"flood-opacity":case"font-weight":case"grid-column":case"grid-row":case"line-clamp":case"line-height":case"opacity":case"order":case"orphans":case"stop-opacity":case"stroke-dasharray":case"stroke-dashoffset":case"stroke-miterlimit":case"stroke-opacity":case"stroke-width":case"tab-size":case"widows":case"z-index":case"zoom":return n;default:return n+"px"}}["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-constiant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","x-height","xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xmlns:xlink","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Cn,yn);kn[n]=e});var wn=/[A-Z]/g;g.reactStyles=true;var $n=[],Sn={map:function(e,n,t){return dn(e)?e:(e=Sn.toArray(e),t&&t!==e&&(n=n.bind(t)),e.map(n))},forEach:function(e,n,t){if(!dn(e)){e=Sn.toArray(e),t&&t!==e&&(n=n.bind(t));for(var r=0,o=e.length;r<o;++r)n(hn(l=e[r])||false===l||true===l||vn(l)?null:e[r],r,e);var l}},count:function(e){return(e=Sn.toArray(e)).length},only:function(e){if(1!==(e=Sn.toArray(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){if(dn(e))return[];if(fn(e)){var n=[];return function e(n,t){for(var r=0,o=n.length;r<o;++r){var l=n[r];fn(l)?e(l,t):t.push(l)}return t}(e,n),n}return $n.concat(e)}};He.prototype.isReactComponent={};var Nn={date:true,"datetime-local":true,email:true,month:true,number:true,password:true,search:true,tel:true,text:true,time:true,url:true,week:true};if("undefined"!=typeof Event){var Un=Event.prototype;Un.persist||(Un.persist=function(){})}var Pn="undefined"==typeof window?global:window,Fn=void 0!==Pn.Symbol,Mn=Fn?Pn.Symbol.iterator:"",Vn=g.createVNode;function Ln(e,n){var t;for(t in e)if(!(t in n))return true;for(t in n)if(e[t]!==n[t])return true;return false}g.createVNode=function(e){var n=e.children,t=e.props;dn(t)&&(t=e.props={}),!Fn||hn(n)||"object"!=typeof n||fn(n)||"function"!=typeof n[Mn]||(e.children=function(e){for(var n,t=[];n=e.next(),t.push(n.value),!n.done;);return t}(n[Mn]())),!dn(n)&&dn(t.children)&&(t.children=n),14&e.flags&&pn(e.type)&&(e.flags=R(e.type),t&&c(e));var r=e.flags;448&r&&function(e,n){if(("input"===e||"textarea"===e)&&"radio"!==n.type&&n.onChange){var t,r=n.type&&n.type.toLowerCase();r&&!Nn[r]||(t="oninput"),t&&!n[t]&&(n[t]=n.onChange,n.onChange=void 0)}}(e.type,t),481&r&&(e.className&&(t.className=e.className),function(e){for(var n in e){var t=kn[n];if(t&&e[n]&&t!==n&&(e[t]=e[n],e[n]=void 0),g.reactStyles&&"style"===n){var r=e.style;if(r&&!pn(r)){var o={};for(var l in r){var i=r[l],a=l.replace(wn,"-$&").toLowerCase();o[a]="number"==typeof i?xn(a,i):i}e.style=o}}}}(t)),Vn&&Vn(e)};var In=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),((n.prototype=Object.create(e&&e.prototype)).constructor=n).prototype.shouldComponentUpdate=function(e,n){return Ln(this.props,e)||Ln(this.state,n)},n}(He),Tn=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),((n.prototype=Object.create(e&&e.prototype)).constructor=n).prototype.getChildContext=function(){return this.props.context},n.prototype.render=function(e){return e.children},n}(He);function _n(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=L),_e(e,n,t,r);var o=n.$V;if(o&&14&o.flags)return o.children}if("undefined"!=typeof window&&void 0===window.React){var An={Children:Sn,Component:He,EMPTY_OBJ:L,Fragment:n,PropTypes:bn,PureComponent:In,_CI:we,_HI:$e,_M:Se,_MCCC:Fe,_ME:Ue,_MFCC:Me,_MP:Ce,_MR:he,_MT:Ne,__render:_e,cloneElement:Qe,cloneVNode:Qe,createClass:function(e){var n=function(t){function e(e,n){t.call(this,e,n),function(e){for(var n in e){var t=e[n];"function"!=typeof t||t.__bound||Ge[n]||((e[n]=t.bind(e)).__bound=true)}}(this),this.getInitialState&&(this.state=this.getInitialState())}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.replaceState=function(e,n){this.setState(e,n)},e.prototype.isMounted=function(){return null!==this.$LI&&!this.$UN},e}(He);return n.displayName=e.name||e.displayName||"Component",n.propTypes=e.propTypes,n.mixins=e.mixins&&Je(e.mixins),n.getDefaultProps=e.getDefaultProps,Ke(n.prototype,e),e.statics&&Ke(n,e.statics),e.mixins&&function(e,n){for(var t in n)if(n.hasOwnProperty(t)){var r=n[t],o=void 0;o="getDefaultProps"===t?e:e.prototype,"function"==typeof r[0]?(a=r,u=void 0!==(i=o)[l=t]?a.concat(i[l]):a,i[l]="getDefaultProps"===l||"getInitialState"===l||"getChildContext"===l?Ye(u,Ze):Ye(u)):o[t]=r}var l,i,a,u}(n,Je(e.mixins)),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),n},createComponentVNode:_,createElement:rn,createFactory:function(e){return rn.bind(null,e)},createFragment:D,createPortal:function(e,n){return T(1024,1024,null,e,0,null,C(e)?null:e.key,n)},createRef:function(){return{current:null}},createRenderer:function(o){return function(e,n,t,r){Ae(n,o=o||e,t,r)}},createTextVNode:A,createVNode:T,directClone:E,findDOMNode:function(e){return e&&e.nodeType?e:!e||e.$UN?null:e.$LI?P(e.$LI,true):e.flags?P(e,true):null},findDOMfromVNode:P,forwardRef:function(e){return{render:e}},getFlagsForElementVnode:R,hydrate:function(e,n,t){var r,o=n.firstChild;if(ln(o))Ae(e,n,t);else{var l=[];for(ln(r=e)||false===r||true===r||an(r)||(o=cn(e,n,o,{},false,l));o=o&&o.nextSibling;)n.removeChild(o);if(0<l.length)for(var i;void 0!==(i=l.shift());)i()}n.$V=e,"function"==typeof t&&t()},isValidElement:function(e){return false!=("object"==typeof e&&false===hn(e))&&0<(495&e.flags)},linkEvent:t,normalizeProps:c,options:g,render:_n,rerender:We,unmountComponentAtNode:function(e){return _e(null,e,null,null),true},unstable_renderSubtreeIntoContainer:function(e,n,t,r){_n(_(4,Tn,{children:n,context:e.context}),t,null);var o=n.children;return r&&r.call(o),o},version:"15.4.2"};window.React=An,window.ReactDOM=An}function Dn(e){return T(1,"li","TreeLeaf",A(e.children),0,null,null,null)}function En(e,n){return e!==n}function On(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=_(2,On,{data:l},i,{onComponentShouldUpdate:En}):r[o]=_(2,Dn,{children:i},i,{onComponentShouldUpdate:En})}return T(1,"ul","TreeNode",r,0,null,null,null)}function Bn(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return T(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Rn(e,n){console.log("Clicked",e),n.stopPropagation()}function Wn(e){var n=e.children;return T(1,"td","TableCell",A(n),0,{onClick:t(n,Rn)},null,null)}function jn(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,o=r.length+1,l=new Array(o);l[0]=_(2,Wn,{children:"#"+n.id},null,{onComponentShouldUpdate:En});for(var i=1;i<o;i++)l[i]=_(2,Wn,{children:r[i-1]},null,{onComponentShouldUpdate:En});return T(1,"tr",t,l,0,{"data-id":n.id},null,null)}uibench.init("Inferno compat (simple)","15.4.2"),document.addEventListener("DOMContentLoaded",function(e){var r=document.querySelector("#App");uibench.run(function(e){var l,n,t;_n(("table"===(t=(l=e).location)?n=function(){for(var e=l.table.items,n=e.length,t=new Array(n),r=0;r<n;r++){var o=e[r];t[r]=_(2,jn,{data:o,children:o},o.id,{onComponentShouldUpdate:En})}return T(1,"table","Table",t,0,null,null,null)}():"anim"===t?n=function(){for(var e=l.anim.items,n=e.length,t=new Array(n),r=0;r<n;r++){var o=e[r];t[r]=_(2,Bn,{data:o},o.id,{onComponentShouldUpdate:En})}return T(1,"div","Anim",t,0,null,null,null)}():"tree"===t&&(n=T(1,"div","Tree",_(2,On,{data:l.tree.root},null,{onComponentShouldUpdate:En}),2,null,null,null)),T(1,"div","Main",n,0,null,null,null)),r)},function(e){_n(T(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),r)})})}();
