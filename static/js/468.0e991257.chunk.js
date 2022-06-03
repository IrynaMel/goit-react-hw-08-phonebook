"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[468],{5468:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a=t(885),i=t(2791),o=t(168),s=t(9958),c=s.Z.div(r||(r=(0,o.Z)(["\n  background-color: #da593e;\n  padding: 20px;\n  font-size: 20px;\n  border-radius: 10px;\n  width: 420px;\n  margin-right: auto;\n  margin-left: auto;\n"]))),u=t(4903),l=t(6170),d=t(7263),f=t(184);var p,h,m,g,b=function(){var n=(0,i.useState)(""),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,i.useState)(""),s=(0,a.Z)(o,2),p=s[0],h=s[1],m=(0,u.kj)(),g=(0,a.Z)(m,1)[0],b=(0,u.wY)().data;return(0,f.jsx)(c,{children:(0,f.jsxs)("form",{onSubmit:function(n){(n.preventDefault(),b.find((function(n){return n.name===t})))?alert("".concat(t," is already in contacts")):(g({name:t,number:p}),r(""),h(""))},children:[(0,f.jsx)("p",{children:"Name"}),(0,f.jsx)(d.Z,{color:"secondary",size:"small",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(n){r(n.currentTarget.value)}}),(0,f.jsx)("p",{children:"Number"}),(0,f.jsx)(d.Z,{color:"secondary",size:"small",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:function(n){h(n.currentTarget.value)}}),(0,f.jsx)(l.Z,{style:{margin:"20px auto",display:"block"},variant:"contained",color:"secondary",type:"submit",children:"Add Contact"})]})})},v=t(4808),x=t(5048),j=function(){var n=(0,x.v9)((function(n){return n.filter})),e=(0,x.I0)();return(0,f.jsx)("div",{children:(0,f.jsx)(d.Z,{label:"Find contacts by name",color:"secondary",type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(n){e((0,v.l)(n.currentTarget.value.trim().toLowerCase()))}})})},y=s.Z.li(p||(p=(0,o.Z)(["\n  margin-top: 20px;\n  height: 20px;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n"]))),_=s.Z.ul(h||(h=(0,o.Z)(["\n  margin-top: 20px;\n  align-item: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n  height: 250px;\n  min-width: 320px;\n  max-width: 1200px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),F=s.Z.p(m||(m=(0,o.Z)(["\n  font-weight: bold;\n  margin-right: 40px;\n"]))),w=s.Z.button(g||(g=(0,o.Z)(["\n  border-radius: 5px;\n  border: 2px;\n  margin-left: 20px;\n  height: 25px;\n  width: 60px;\n  background-color: #f18872;\n  &:hover {\n    background-color: #6f2c1e;\n  }\n"]))),O=t(2299),Z=t.n(O),k={display:"block",margin:"0 auto",height:"10px",width:"10px"},z=function(n){var e=n.id,t=(0,u.Nt)(),r=(0,a.Z)(t,2),i=r[0],o=r[1].isLoading;return(0,f.jsx)(w,{type:"button",onClick:function(){return i(e)},children:o?(0,f.jsx)(Z(),{css:k}):(0,f.jsx)("span",{children:"Delete"})})},C=function(){var n=(0,u.wY)(),e=n.data,t=n.isLoading,r=n.refetch;(0,i.useEffect)((function(){return r()}),[r]);var a=(0,x.v9)((function(n){return n.filter})),o=null===e||void 0===e?void 0:e.filter((function(n){return n.name.toLowerCase().includes(a)}));return(0,f.jsxs)("div",{children:[t&&(0,f.jsx)(Z(),{}),e&&(0,f.jsx)(_,{children:o.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,f.jsxs)(y,{children:[(0,f.jsxs)(F,{children:[t,":"]})," ",(0,f.jsx)("p",{children:r}),(0,f.jsx)(z,{id:e})]},e)}))}),0===(null===o||void 0===o?void 0:o.length)&&(0,f.jsx)("p",{children:"no contacts"})]})},P=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"PhoneBook"}),(0,f.jsx)(b,{}),(0,f.jsx)("h3",{children:"Contacts"}),(0,f.jsx)(j,{}),(0,f.jsx)(C,{})]})}},4923:function(n,e,t){t.r(e),t.d(e,{Fragment:function(){return i},jsx:function(){return o},jsxs:function(){return s}});t(2791),t(76);var r=t(8185),a=(t(2110),t(1346),t(184)),i=a.Fragment;function o(n,e,t){return r.h.call(e,"css")?(0,a.jsx)(r.E,(0,r.c)(n,e),t):(0,a.jsx)(n,e,t)}function s(n,e,t){return r.h.call(e,"css")?(0,a.jsxs)(r.E,(0,r.c)(n,e),t):(0,a.jsxs)(n,e,t)}},2299:function(n,e,t){var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},a=this&&this.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),i=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t),Object.defineProperty(n,r,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),s=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&i(e,n,t);return o(e,n),e};Object.defineProperty(e,"__esModule",{value:!0});var c,u,l=t(4923),d=s(t(2791)),f=t(2554),p=t(2098),h=(0,f.keyframes)(c||(c=r(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"],["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"]))),m=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.style=function(){var n=e.props,t=n.size,a=n.color,i=n.speedMultiplier;return(0,f.css)(u||(u=r(["\n      background: transparent !important;\n      width: ",";\n      height: ",";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ",";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: "," ","s 0s infinite linear;\n      animation-fill-mode: both;\n    "],["\n      background: transparent !important;\n      width: ",";\n      height: ",";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ",";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: "," ","s 0s infinite linear;\n      animation-fill-mode: both;\n    "])),(0,p.cssValue)(t),(0,p.cssValue)(t),a,h,.75/i)},e}return a(e,n),e.prototype.render=function(){var n=this.props,e=n.loading,t=n.css;return e?(0,l.jsx)("span",{css:[this.style(),t]},void 0):null},e.defaultProps=(0,p.sizeDefaults)(35),e}(d.PureComponent);e.default=m},779:function(n,e){var t;Object.defineProperty(e,"__esModule",{value:!0}),e.calculateRgba=void 0,function(n){n.maroon="#800000",n.red="#FF0000",n.orange="#FFA500",n.yellow="#FFFF00",n.olive="#808000",n.green="#008000",n.purple="#800080",n.fuchsia="#FF00FF",n.lime="#00FF00",n.teal="#008080",n.aqua="#00FFFF",n.blue="#0000FF",n.navy="#000080",n.black="#000000",n.gray="#808080",n.silver="#C0C0C0",n.white="#FFFFFF"}(t||(t={}));e.calculateRgba=function(n,e){if(Object.keys(t).includes(n)&&(n=t[n]),"#"===n[0]&&(n=n.slice(1)),3===n.length){var r="";n.split("").forEach((function(n){r+=n,r+=n})),n=r}return"rgba("+(n.match(/.{2}/g)||[]).map((function(n){return parseInt(n,16)})).join(", ")+", "+e+")"}},2098:function(n,e,t){var r=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t),Object.defineProperty(n,r,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),a=this&&this.__exportStar||function(n,e){for(var t in n)"default"===t||Object.prototype.hasOwnProperty.call(e,t)||r(e,n,t)};Object.defineProperty(e,"__esModule",{value:!0}),a(t(43),e),a(t(779),e),a(t(8945),e)},43:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.heightWidthRadiusDefaults=e.heightWidthDefaults=e.sizeMarginDefaults=e.sizeDefaults=void 0;var t={loading:!0,color:"#000000",css:"",speedMultiplier:1};function r(n){return Object.assign({},t,{size:n})}function a(n,e){return Object.assign({},t,{height:n,width:e})}e.sizeDefaults=r,e.sizeMarginDefaults=function(n){return Object.assign({},r(n),{margin:2})},e.heightWidthDefaults=a,e.heightWidthRadiusDefaults=function(n,e,t){return void 0===t&&(t=2),Object.assign({},a(n,e),{radius:t,margin:2})}},8945:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(n){if("number"===typeof n)return{value:n,unit:"px"};var e,r=(n.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(n.match(/[^0-9]*$/)||"").toString();return t[a]?{value:e,unit:a}:(console.warn("React Spinners: "+n+" is not a valid css value. Defaulting to "+e+"px."),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(n){var e=r(n);return""+e.value+e.unit}}}]);
//# sourceMappingURL=468.0e991257.chunk.js.map