webpackJsonp([17,141],{2:function(n,t,a){"use strict";a(13),a(12)},12:function(n,t){},13:function(n,t){},15:function(n,t,a){"use strict";a(2),a(23)},23:function(n,t){},36:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(4),o=e(s),p=a(5),c=e(p),u=a(7),l=e(u),r=a(6),i=e(r),f=a(1),d=e(f),k=a(3),h=e(k),y=function(n){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.direction,e=t.wrap,s=t.justify,p=t.align,c=t.alignContent,u=t.className,l=t.children,r=t.prefixCls,i=t.style,f=t.onClick,k=(0,h["default"])((n={},(0,o["default"])(n,r,!0),(0,o["default"])(n,r+"-dir-row","row"===a),(0,o["default"])(n,r+"-dir-row-reverse","row-reverse"===a),(0,o["default"])(n,r+"-dir-column","column"===a),(0,o["default"])(n,r+"-dir-column-reverse","column-reverse"===a),(0,o["default"])(n,r+"-nowrap","nowrap"===e),(0,o["default"])(n,r+"-wrap","wrap"===e),(0,o["default"])(n,r+"-wrap-reverse","wrap-reverse"===e),(0,o["default"])(n,r+"-justify-start","start"===s),(0,o["default"])(n,r+"-justify-end","end"===s),(0,o["default"])(n,r+"-justify-center","center"===s),(0,o["default"])(n,r+"-justify-between","between"===s),(0,o["default"])(n,r+"-justify-around","around"===s),(0,o["default"])(n,r+"-align-top","top"===p||"start"===p),(0,o["default"])(n,r+"-align-middle","middle"===p||"center"===p),(0,o["default"])(n,r+"-align-bottom","bottom"===p||"end"===p),(0,o["default"])(n,r+"-align-baseline","baseline"===p),(0,o["default"])(n,r+"-align-stretch","stretch"===p),(0,o["default"])(n,r+"-align-content-start","start"===c),(0,o["default"])(n,r+"-align-content-end","end"===c),(0,o["default"])(n,r+"-align-content-center","center"===c),(0,o["default"])(n,r+"-align-content-between","between"===c),(0,o["default"])(n,r+"-align-content-around","around"===c),(0,o["default"])(n,r+"-align-content-stretch","stretch"===c),(0,o["default"])(n,u,u),n));return d["default"].createElement("div",{className:k,style:i,onClick:f},l)},t}(d["default"].Component);t["default"]=y,y.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},37:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(4),o=e(s),p=a(5),c=e(p),u=a(7),l=e(u),r=a(6),i=e(r),f=a(1),d=e(f),k=a(3),h=e(k),y=function(n){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.children,e=t.className,s=t.prefixCls,p=t.style,c=t.onClick,u=(0,h["default"])((n={},(0,o["default"])(n,s+"-item",!0),(0,o["default"])(n,e,e),n));return d["default"].createElement("div",{className:u,style:p,onClick:c},a)},t}(d["default"].Component);t["default"]=y,y.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},38:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(36),o=e(s),p=a(37),c=e(p);o["default"].Item=c["default"],t["default"]=o["default"],n.exports=t["default"]},39:function(n,t,a){"use strict";a(2),a(40)},40:function(n,t){},104:function(n,t,a){"use strict";var e=a(133);n.exports=function(n,t,a,s){var o=a?a.call(s,n,t):void 0;if(void 0!==o)return!!o;if(n===t)return!0;if("object"!=typeof n||null===n||"object"!=typeof t||null===t)return!1;var p=e(n),c=e(t),u=p.length;if(u!==c.length)return!1;s=s||null;for(var l=Object.prototype.hasOwnProperty.bind(t),r=0;r<u;r++){var i=p[r];if(!l(i))return!1;var f=n[i],d=t[i],k=a?a.call(s,f,d,i):void 0;if(k===!1||void 0===k&&f!==d)return!1}return!0}},113:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(n){return Object.keys(n).reduce(function(t,a){return"aria-"!==a.substr(0,5)&&"data-"!==a.substr(0,5)&&"role"!==a||(t[a]=n[a]),t},{})},n.exports=t["default"]},130:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return p(a)?a:void 0}function s(n){return o(n)&&f.call(n)==c}function o(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function p(n){return null!=n&&(s(n)?d.test(r.call(n)):a(n)&&u.test(n))}var c="[object Function]",u=/^\[object .+?Constructor\]$/,l=Object.prototype,r=Function.prototype.toString,i=l.hasOwnProperty,f=l.toString,d=RegExp("^"+r.call(i).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=e},131:function(n,t){function a(n){return s(n)&&k.call(n,"callee")&&(!y.call(n,"callee")||h.call(n)==r)}function e(n){return null!=n&&p(n.length)&&!o(n)}function s(n){return u(n)&&e(n)}function o(n){var t=c(n)?h.call(n):"";return t==i||t==f}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=l}function c(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function u(n){return!!n&&"object"==typeof n}var l=9007199254740991,r="[object Arguments]",i="[object Function]",f="[object GeneratorFunction]",d=Object.prototype,k=d.hasOwnProperty,h=d.toString,y=d.propertyIsEnumerable;n.exports=a},132:function(n,t){function a(n){return!!n&&"object"==typeof n}function e(n,t){var a=null==n?void 0:n[t];return c(a)?a:void 0}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=b}function o(n){return p(n)&&k.call(n)==l}function p(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function c(n){return null!=n&&(o(n)?h.test(f.call(n)):a(n)&&r.test(n))}var u="[object Array]",l="[object Function]",r=/^\[object .+?Constructor\]$/,i=Object.prototype,f=Function.prototype.toString,d=i.hasOwnProperty,k=i.toString,h=RegExp("^"+f.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=e(Array,"isArray"),b=9007199254740991,g=y||function(n){return a(n)&&s(n.length)&&k.call(n)==u};n.exports=g},133:function(n,t,a){function e(n){return function(t){return null==t?void 0:t[n]}}function s(n){return null!=n&&p(g(n))}function o(n,t){return n="number"==typeof n||d.test(n)?+n:-1,t=null==t?b:t,n>-1&&n%1==0&&n<t}function p(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=b}function c(n){for(var t=l(n),a=t.length,e=a&&n.length,s=!!e&&p(e)&&(f(n)||i(n)),c=-1,u=[];++c<a;){var r=t[c];(s&&o(r,e)||h.call(n,r))&&u.push(r)}return u}function u(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function l(n){if(null==n)return[];u(n)||(n=Object(n));var t=n.length;t=t&&p(t)&&(f(n)||i(n))&&t||0;for(var a=n.constructor,e=-1,s="function"==typeof a&&a.prototype===n,c=Array(t),l=t>0;++e<t;)c[e]=e+"";for(var r in n)l&&o(r,t)||"constructor"==r&&(s||!h.call(n,r))||c.push(r);return c}var r=a(130),i=a(131),f=a(132),d=/^\d+$/,k=Object.prototype,h=k.hasOwnProperty,y=r(Object,"keys"),b=9007199254740991,g=e("length"),m=y?function(n){var t=null==n?void 0:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&s(n)?c(n):u(n)?y(n):[]}:c;n.exports=m},187:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):s(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},r=a(1),i=e(r),f=a(195),d=e(f),k=a(3),h=e(k),y=function(n){function t(a){p(this,t);var e=c(this,n.call(this,a));b.call(e);var s="checked"in a?a.checked:a.defaultChecked;return e.state={checked:s},e}return u(t,n),t.prototype.componentWillReceiveProps=function(n){"checked"in n&&this.setState({checked:n.checked})},t.prototype.shouldComponentUpdate=function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];return d["default"].shouldComponentUpdate.apply(this,t)},t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.name,c=t.type,u=t.disabled,l=t.readOnly,r=t.tabIndex,f=t.onClick,d=t.onFocus,k=t.onBlur,y=this.state.checked,b=(0,h["default"])(a,e,(n={},o(n,a+"-checked",y),o(n,a+"-disabled",u),n));return i["default"].createElement("span",{className:b,style:s},i["default"].createElement("input",{name:p,type:c,readOnly:l,disabled:u,tabIndex:r,className:a+"-input",checked:!!y,onClick:f,onFocus:d,onBlur:k,onChange:this.handleChange}),i["default"].createElement("span",{className:a+"-inner"}))},t}(i["default"].Component);y.propTypes={prefixCls:r.PropTypes.string,className:r.PropTypes.string,style:r.PropTypes.object,name:r.PropTypes.string,type:r.PropTypes.string,defaultChecked:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.bool]),checked:r.PropTypes.oneOfType([r.PropTypes.number,r.PropTypes.bool]),disabled:r.PropTypes.bool,onFocus:r.PropTypes.func,onBlur:r.PropTypes.func,onChange:r.PropTypes.func,onClick:r.PropTypes.func,tabIndex:r.PropTypes.string,readOnly:r.PropTypes.bool},y.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var b=function(){var n=this;this.handleChange=function(t){var a=n.props;a.disabled||("checked"in a||n.setState({checked:t.target.checked}),a.onChange({target:l({},a,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}};t["default"]=y,n.exports=t["default"]},188:function(n,t,a){"use strict";n.exports=a(187)},195:function(n,t,a){"use strict";function e(n,t,a){return!s(n.props,t)||!s(n.state,a)}var s=a(104),o={shouldComponentUpdate:function(n,t){return e(this,n,t)}};n.exports=o},228:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(4),o=e(s),p=a(5),c=e(p),u=a(7),l=e(u),r=a(6),i=e(r),f=a(1),d=e(f),k=a(188),h=e(k),y=a(59),b=e(y),g=a(3),m=e(g),v=function(n){function t(){return(0,c["default"])(this,t),(0,l["default"])(this,n.apply(this,arguments))}return(0,i["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.style,p=t.children,c=(0,m["default"])((n={},(0,o["default"])(n,e,!!e),(0,o["default"])(n,a+"-wrapper",!0),n)),u=d["default"].createElement("label",{className:c,style:s},d["default"].createElement(h["default"],(0,b["default"])(this.props,["className","style"])),p);return this.props.wrapLabel?u:d["default"].createElement(h["default"],this.props)},t}(d["default"].Component);t["default"]=v,v.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},n.exports=t["default"]},229:function(n,t,a){"use strict";a(2),a(15),a(272)},272:function(n,t){},384:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=a(10),o=e(s),p=a(4),c=e(p),u=a(5),l=e(u),r=a(7),i=e(r),f=a(6),d=e(f),k=a(1),h=e(k),y=a(3),b=e(y),g=a(228),m=e(g),v=a(113),C=e(v),x=a(59),j=e(x),P=function(n){function t(){return(0,l["default"])(this,t),(0,i["default"])(this,n.apply(this,arguments))}return(0,d["default"])(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.style,s=t.className,p=(0,b["default"])((n={},(0,c["default"])(n,a+"-agree",!0),(0,c["default"])(n,s,s),n));return h["default"].createElement("div",(0,o["default"])({},(0,C["default"])(this.props),{className:p,style:e}),h["default"].createElement(m["default"],(0,o["default"])({},(0,j["default"])(this.props,["style"]),{className:a+"-agree-label"})))},t}(h["default"].Component);t["default"]=P,P.defaultProps={prefixCls:"am-checkbox"},n.exports=t["default"]},385:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=a(10),p=e(o),c=a(4),u=e(c),l=a(5),r=e(l),i=a(7),f=e(i),d=a(6),k=e(d),h=a(1),y=e(h),b=a(3),g=e(b),m=a(28),v=e(m),C=a(228),x=e(C),j=a(59),P=e(j),w=v["default"].Item,O=function(n){function t(){return(0,r["default"])(this,t),(0,f["default"])(this,n.apply(this,arguments))}return(0,k["default"])(t,n),t.prototype.render=function(){var n,t=this,a=this.props,e=a.prefixCls,o=a.listPrefixCls,c=a.className,l=a.children,r=a.disabled,i=a.checkboxProps,f=void 0===i?{}:i,d=(0,g["default"])((n={},(0,u["default"])(n,e+"-item",!0),(0,u["default"])(n,e+"-item-disabled",r===!0),(0,u["default"])(n,c,c),n)),k=(0,P["default"])(this.props,["listPrefixCls","onChange","disabled","checkboxProps"]);r?delete k.onClick:k.onClick=k.onClick||s;var h={};return["name","defaultChecked","checked","onChange","disabled"].forEach(function(n){n in t.props&&(h[n]=t.props[n])}),y["default"].createElement(w,(0,p["default"])({},k,{prefixCls:o,className:d,thumb:y["default"].createElement(x["default"],(0,p["default"])({},f,h))}),l)},t}(y["default"].Component);t["default"]=O,O.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list"},n.exports=t["default"]},386:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(228),o=e(s),p=a(385),c=e(p),u=a(384),l=e(u);o["default"].CheckboxItem=c["default"],o["default"].AgreeItem=l["default"],t["default"]=o["default"],n.exports=t["default"]},477:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/checkbox/demo/basic.md",id:"components-checkbox-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Flex <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> CheckboxItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>CheckboxItem<span class="token punctuation">;</span>\n<span class="token keyword">const</span> AgreeItem <span class="token operator">=</span> Checkbox<span class="token punctuation">.</span>AgreeItem<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'\u535a\u58eb\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'\u672c\u79d1\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'\u9ad8\u4e2d\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'CheckboxItem \u6f14\u793a\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>i <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>i<span class="token punctuation">.</span>label<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CheckboxItem</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">multipleLine</span><span class="token punctuation">></span></span>\n          \u521d\u4e2d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item.Brief</span><span class="token punctuation">></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item.Brief</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CheckboxItem</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Flex.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AgreeItem</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'checkbox\'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            \u5df2\u9605\u8bfb\u534f\u8bae<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'\u6253\u5f00\u534f\u8bae\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u300a\u534f\u8bae\u94fe\u63a5\u300b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AgreeItem</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Flex</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Test</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function t(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):t(n,a))}var p=a(1),c=(a(8),a(39),a(38)),u=n(c),l=(a(15),a(28)),r=n(l),i=(a(229),a(386)),f=n(i),d=f["default"].CheckboxItem,k=f["default"].AgreeItem,h=function(n){function t(){var a,o,p;e(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return a=o=s(this,n.call.apply(n,[this].concat(u))),o.onChange=function(n){console.log(n)},p=a,s(o,p)}return o(t,n),t.prototype.render=function(){var n=this,t=[{value:0,label:"\u535a\u58eb"},{value:1,label:"\u672c\u79d1"},{value:2,label:"\u9ad8\u4e2d"}];return p.createElement("div",null,p.createElement(r["default"],{renderHeader:function(){return"CheckboxItem \u6f14\u793a"}},t.map(function(t){return p.createElement(d,{key:t.value,onChange:function(){return n.onChange(t.value)}},t.label)}),p.createElement(d,{key:"disabled","data-seed":"logId",disabled:!0,defaultChecked:!0,multipleLine:!0},"\u521d\u4e2d",p.createElement(r["default"].Item.Brief,null,"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),p.createElement(u["default"],null,p.createElement(u["default"].Item,null,p.createElement(k,{"data-seed":"logId",onChange:function(n){return console.log("checkbox",n)}},"\u5df2\u9605\u8bfb\u534f\u8bae",p.createElement("a",{onClick:function(n){n.preventDefault(),alert("\u6253\u5f00\u534f\u8bae")}},"\u300a\u534f\u8bae\u94fe\u63a5\u300b")))))},t}(p.Component);return p.createElement(h,null)}}},639:function(n,t,a){n.exports={basic:a(477)}}});