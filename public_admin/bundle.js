var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let p;function m(t){p=t}const b=[],h=[],g=[],v=[],$=Promise.resolve();let y=!1;function x(t){g.push(t)}function k(){const t=new Set;do{for(;b.length;){const t=b.shift();m(t),w(t.$$)}for(;h.length;)h.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];t.has(n)||(n(),t.add(n))}g.length=0}while(b.length);for(;v.length;)v.pop()();y=!1}function w(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(x))}const P=new Set;let S;function _(t,e){t&&t.i&&(P.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(P.has(t))return;P.add(t),S.c.push(()=>{P.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function E(t,n){const o=n.token={};function a(t,a,i,l){if(n.token!==o)return;n.resolved=i&&{[i]:l};const c=e(e({},n.ctx),n.resolved),u=t&&(n.current=t)(c);n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==a&&t&&(S={r:0,c:[],p:S},T(t,1,1,()=>{n.blocks[e]=null}),S.r||r(S.c),S=S.p)}):n.block.d(1),u.c(),_(u,1),u.m(n.mount(),n.anchor),k()),n.block=u,n.blocks&&(n.blocks[a]=u)}if((i=t)&&"object"==typeof i&&"function"==typeof i.then){if(t.then(t=>{a(n.then,1,n.value,t)},t=>{a(n.catch,2,n.error,t)}),n.current!==n.pending)return a(n.pending,0),!0}else{if(n.current!==n.then)return a(n.then,1,n.value,t),!0;n.resolved={[n.value]:t}}var i}function M(t,e,o){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=t.$$;i.m(e,o),x(()=>{const e=l.map(n).filter(a);c?c.push(...e):r(e),t.$$.on_mount=[]}),u.forEach(x)}function C(t,e){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function O(t,e){t.$$.dirty||(b.push(t),y||(y=!0,$.then(k)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function Z(e,n,a,i,l,c){const u=p;m(e);const s=n.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:null};let d=!1;var b;f.ctx=a?a(e,s,(t,n)=>{f.ctx&&l(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),d&&O(e,t))}):s,f.update(),d=!0,r(f.before_update),f.fragment=i(f.ctx),n.target&&(n.hydrate?f.fragment.l((b=n.target,Array.from(b.childNodes))):f.fragment.c(),n.intro&&_(e.$$.fragment),M(e,n.target,n.anchor),k()),m(u)}class B{$destroy(){C(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function L(e){var n,o;return{c(){var t,r,a,i,l;(n=s("form")).innerHTML='<label>\n\t\t\t    Name:\n\t\t\t    <input type="text" name="name" autocomplete="off"></label> <label id="gender" class="svelte-1pwxu70">\n\t\t\t    Gender:\n\t\t\t    <label class="svelte-1pwxu70"><input type="radio" name="gender" value="girl" id="girl">\n\t\t\t      Girl\n\t\t\t    </label> <label class="svelte-1pwxu70"><input type="radio" name="gender" value="boy" id="boy">\n\t\t\t      Boy\n\t\t\t    </label></label> <label>\n\t\t\t    Time of birth:\n\t\t\t    <input type="text" name="timeOfBirth" autocomplete="off"></label> <label>\n\t\t\t    Weight:\n\t\t\t    <input type="text" name="weight" autocomplete="off"></label> <label>\n\t\t\t    Update:\n\t\t\t    <input type="text" name="update" autocomplete="off"></label> <label>\n\t\t\t    Image:\n\t\t\t    <input type="text" name="image" autocomplete="off"></label> <label>\n\t\t\t    Password:\n\t\t\t    <input type="text" name="password" autocomplete="off"></label> <input type="submit" name="submit" value="submit">',t=n,r="submit",l=e.handleSubmit,a=function(t){return t.preventDefault(),l.call(this,t)},t.addEventListener(r,a,i),o=(()=>t.removeEventListener(r,a,i))},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n),o()}}}function I(t,e,n){let{onSubmit:o=(()=>{})}=e;return t.$set=(t=>{"onSubmit"in t&&n("onSubmit",o=t.onSubmit)}),{onSubmit:o,handleSubmit:t=>{const e=t.target.elements;let n="???";e.girl.checked?n="girl":e.boy.checked&&(n="boy"),o({gender:n,name:e.name.value||"???",timeOfBirth:e.timeOfBirth.value||"???",weight:e.weight.value||"???",update:e.update.value||"",image:e.image.value||"https://lh3.googleusercontent.com/LwiuTYx1m3si_q3tICuY69MxMx2Z-DtpiPvkzG9xVQ9eN5ONiCdNp18MlgkKtpoKmd3nMgQEbbPS4xdpB0tTKMUTudaM3k-KZtiXHbB6HFQjloPueO_Lpmx3n4wh0qTnwIIWwfR0hVyHYwcZWM6zpP5cG6CoCcGEXyMqeL-NI5xPUVaYQbfqPsVDE1ipGrcrHF3UgCE9Uv7cKjpIgdvD9yHE5hoyeoGj2BevyaWn2fng6KH0HfBZUQVay45VPpYV7DVk6_IF3wivn-M3QVa-Mr4vqq60D-aE3kGhil1aYnZM0fFIsIg3hEcX57VZdKm15T6LrENMi5xbUKFSUvw01JEYN2_NDkhs36UGPMOqZ1rwB6VLfW2TL13zGBilJZadZdSm9xWTw6u1r2fL2iCF7CoA4YoZ7nNFUmmSz9mkbuquP80ZAH7wjT3ZQ8pmo0OixB_bJ72gJ-F9a0RHdKkkMr_PsDmu2Me34I7UvnpRStHdfeDVBjAPqZKwW0UHqPAGtbBBQmFT3TQMKC24bjoFxTWWh96kZsbZoS2tR9O-IT1ELgKh4yb8rIOYLhSvn8gPzDCqmWOembSFU7LsfQ5A2h4nd6kba_P44OD4TioRTR6TEC4ZhEboKTKql_wQIEnlULRRf2MG2IfxwabOvjzrt7Rrc1pG-zOj=w2542-h1908-no",password:e.password.value||""})}}}class K extends B{constructor(t){super(),Z(this,t,I,L,i,["onSubmit"])}}function U(e){var n,o,r,a=e.error.message;return{c(){n=s("h2"),o=f("oops "),r=f(a)},m(t,e){c(t,n,e),l(n,o),l(n,r)},p(t,e){var n,o;t.configPromise&&a!==(a=e.error.message)&&(o=""+(o=a),(n=r).data!==o&&(n.data=o))},i:t,o:t,d(t){t&&u(n)}}}function j(t){var e,n=new K({props:{onSubmit:t.postConfig}});return{c(){n.$$.fragment.c()},m(t,o){M(n,t,o),e=!0},p(t,e){var o={};t.postConfig&&(o.onSubmit=e.postConfig),n.$set(o)},i(t){e||(_(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){C(n,t)}}}function q(e){var n;return{c(){(n=s("h2")).textContent="Loading..."},m(t,e){c(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function G(t){var n,o,r;let a={ctx:t,current:null,token:null,pending:q,then:j,catch:U,value:"null",error:"error",blocks:[,,,]};return E(o=t.configPromise,a),{c(){n=s("div"),a.block.c(),d(n,"id","main-container"),d(n,"class","svelte-xdusjd")},m(t,e){c(t,n,e),a.block.m(n,a.anchor=null),a.mount=(()=>n),a.anchor=null,r=!0},p(n,r){t=r,a.ctx=t,"configPromise"in n&&o!==(o=t.configPromise)&&E(o,a)||a.block.p(n,e(e({},t),a.resolved))},i(t){r||(_(a.block),r=!0)},o(t){for(let t=0;t<3;t+=1){T(a.blocks[t])}r=!1},d(t){t&&u(n),a.block.d(),a.token=null,a=null}}}function N(t,e,n){let o=Promise.resolve();return{configPromise:o,postConfig:t=>{n("configPromise",o=fetch("http://localhost:1337/config",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))}}}return new class extends B{constructor(t){super(),Z(this,t,N,G,i,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
