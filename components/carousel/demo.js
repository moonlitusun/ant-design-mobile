webpackJsonp([43,157],{461:function(n,s){n.exports={content:[["p","\u4f7f\u7528\u8d70\u9a6c\u706f\u65f6\uff0c\u4f1a\u9047\u5230\u201c\u6bcf\u4e2a\u9879\u76ee\u201c\u7684\u201d\u9ad8\u5ea6\u53d8\u5316\u201c\u65f6\u5982\u4f55\u5904\u7406\u7684\u95ee\u9898\uff1a"],["blockquote",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/1002#issuecomment-287301262"},"issues/1002"],"\u3001",["a",{title:null,href:"https://github.com/FormidableLabs/nuka-carousel/issues/103"},"nuka-carousel/issues/103"]]],["ul",["li",["p","\u6bcf\u4e2a\u9879\u76ee\u7684\u9ad8\u5ea6\u5982\u679c\u4f1a\u968f\u7740\u4e0d\u540c\u72b6\u6001\u800c\u53d8\u5316\uff08\u4f8b\u5982 img \u52a0\u8f7d\u524d\u4e2d\u540e\u72b6\u6001\uff09"],["ul",["li",["p","\u9879\u76ee\u7684\u9ad8\u5ea6\u53d8\u5316\u540e\uff0c\u9700\u8981\u901a\u8fc7\u8bbe\u7f6e\u65b0\u7684 props (\u5373\u89e6\u53d1\u7ec4\u4ef6\u7684",["code","componentWillReceiveProps"],"\u65b9\u6cd5) \u6216\u89e6\u53d1 window resize \u4e8b\u4ef6\u80fd\u591f\u6539\u53d8\u9ad8\u5ea6\uff0c\u6700\u7ec8\u7684\u9ad8\u5ea6\u5927\u5c0f\u7531\u4f60\u4f20\u5165\u7684\u201c\u6bcf\u4e2a\u9879\u76ee\u81ea\u8eab\u7684\u9ad8\u5ea6\u201d\u5927\u5c0f\u786e\u5b9a\u3002"]],["li",["p","\u56e0\u6b64\u5e95\u5c42\u4f9d\u8d56\u63d0\u4f9b\u7684",["code","initialSlideHeight"],"\u5b9e\u9645\u7528\u5904\u4e0d\u5927\uff0c\u53ea\u662f\u8bbe\u7f6e\u4e86\u6700\u5f00\u59cb\u7684\u9ad8\u5ea6\u503c\uff0c\u4f46\u9a6c\u4e0a\u5728",["code","componentDidMount"],"\u751f\u547d\u5468\u671f\u91cc\u53bb\u53d6\u201c\u6bcf\u4e2a\u9879\u76ee\u7684\u9ad8\u5ea6\u201d\u6765\u505a\u4fee\u6539\uff0c\u968f\u540e\u4e5f\u4f1a\u56e0\u4e3a img \u7684\u52a0\u8f7d\u6210\u529f\u6216\u5931\u8d25\u800c\u518d\u6b21\u4fee\u6539\u3002(\u5c11\u6570\u60c5\u51b5\u3001\u5982\u679c",["code","componentDidMount"],"\u6bd4\u8f83\u665a\u624d\u6267\u884c\uff0c",["code","initialSlideHeight"],"\u624d\u7b97\u6709\u7528)"]]]],["li",["p","\u6bcf\u4e2a\u9879\u76ee\u7684\u9ad8\u5ea6\u5404\u4e0d\u76f8\u540c\uff0c\u9ed8\u8ba4\u4f7f\u7528\u6700\u5927\u9ad8\u5ea6\uff08",["code","fixedHeight"],"\u5c5e\u6027\u53ef\u63a7\u5236\u4f7f\u7528\u53ef\u53d8\u9ad8\u5ea6\u3001\u6682\u4e0d\u652f\u6301\u8bbe\u7f6e\uff09"]]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/carousel/demo/basic.md",id:"components-carousel-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    initialHeight<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// simulate img loading</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'AiyWuByWklrrUDlFignR\'</span><span class="token punctuation">,</span> <span class="token string">\'TekJlZRVCjLFexlOCuWn\'</span><span class="token punctuation">,</span> <span class="token string">\'AiyWuByWklrrUDlFignR\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hProp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>initialHeight <span class="token operator">?</span> <span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>initialHeight <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>normal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-carousel<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">infinite</span> <span class="token attr-name">selectedIndex</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">beforeChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">,</span> to<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`slide from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">from</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>to<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">afterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'slide to\'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>ii <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.baidu.com<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ii<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hProp<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n              <span class="token operator">&lt;</span>img\n                src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`https://zos.alipayobjects.com/rmsportal/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ii<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png`</span></span><span class="token punctuation">}</span>\n                onLoad<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n                  <span class="token comment" spellcheck="true">// fire window resize event to change height</span>\n                  window<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">\'resize\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    initialHeight<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">}</span>\n              <span class="token operator">/</span><span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>vertical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-carousel<span class="token punctuation">"</span></span>\n          <span class="token attr-name">dots</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">dragging</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">swiping</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">infinite</span> <span class="token attr-name">vertical</span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>v-item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Carousel <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],style:".my-carousel {\n  background: #fff;\n}\n.my-carousel a {\n  display: inline-block;\n  width: 100%;\n  margin: 0; padding: 0;\n}\n.my-carousel a img {\n  width: 100%;\n  vertical-align: top;\n}\n.my-carousel .v-item {\n  height: 0.72rem;\n  line-height: 0.72rem;\n  padding-left: 0.2rem;\n}\n.sub-title {\n  color: #888;\n  font-size: .28rem;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-carousel</span> </span><span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> a </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> a img </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.my-carousel</span> <span class="token class">.v-item</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">0.72</span>rem<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">0.72</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token number">0.2</span>rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">.28</span>rem<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},638:function(n,s,a){n.exports={basic:a(461)}}});