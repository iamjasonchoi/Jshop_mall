(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-agreement"],{"2c1a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5"),a("3b2b"),a("a481"),a("4917");var n=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,i=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,o=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),c=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),d=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function f(t,e){var a,f,h,p=[],m=t;p.last=function(){return this[this.length-1]};while(t){if(f=!0,p.last()&&u[p.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+p.last()+"[^>]*>"),function(t,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(a),""}),g("",p.last());else if(0==t.indexOf("\x3c!--")?(a=t.indexOf("--\x3e"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),f=!1)):0==t.indexOf("</")?(h=t.match(r),h&&(t=t.substring(h[0].length),h[0].replace(r,g),f=!1)):0==t.indexOf("<")&&(h=t.match(n),h&&(t=t.substring(h[0].length),h[0].replace(n,b),f=!1)),f){a=t.indexOf("<");var v=a<0?t:t.substring(0,a);t=a<0?"":t.substring(a),e.chars&&e.chars(v)}if(t==m)throw"Parse Error: "+t;m=t}function b(t,a,n,r){if(a=a.toLowerCase(),s[a])while(p.last()&&c[p.last()])g("",p.last());if(l[a]&&p.last()==a&&g("",a),r=o[a]||!!r,r||p.push(a),e.start){var u=[];n.replace(i,function(t,e){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:d[e]?e:"";u.push({name:e,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})}),e.start&&e.start(a,u,r)}}function g(t,a){if(a){for(n=p.length-1;n>=0;n--)if(p[n]==a)break}else var n=0;if(n>=0){for(var r=p.length-1;r>=n;r--)e.end&&e.end(p[r]);p.length=n}}g()}function h(t){for(var e={},a=t.split(","),n=0;n<a.length;n++)e[a[n]]=!0;return e}function p(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function m(t){return t.reduce(function(t,e){var a=e.value,n=e.name;return t[n]?t[n]=t[n]+" "+a:t[n]=a,t},{})}function v(t){t=p(t);var e=[],a={node:"root",children:[]};return f(t,{start:function(t,n,r){var i={name:t};if(0!==n.length&&(i.attrs=m(n)),r){var o=e[0]||a;o.children||(o.children=[]),o.children.push(i)}else e.unshift(i)},end:function(t){var n=e.shift();if(n.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)a.children.push(n);else{var r=e[0];r.children||(r.children=[]),r.children.push(n)}},chars:function(t){var n={type:"text",text:t};if(0===e.length)a.children.push(n);else{var r=e[0];r.children||(r.children=[]),r.children.push(n)}},comment:function(t){var a={node:"comment",text:t},n=e[0];n.children||(n.children=[]),n.children.push(a)}}),a.children}var b=v;e.default=b},4092:function(t,e,a){"use strict";var n=a("c559"),r=a.n(n);r.a},"49c5":function(t,e,a){"use strict";a.r(e);var n=a("ad72"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},"5c2a":function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"article"},[a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:t.content}})],1)],1)],1)},i=[];a.d(e,"b",function(){return r}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})},6204:function(t,e,a){"use strict";a.r(e);var n=a("5c2a"),r=a("49c5");for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);a("4092");var o,s=a("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"383a6a59",null,!1,n["a"],o);e["default"]=c.exports},"7ba5":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".content[data-v-383a6a59]{\n\theight:calc(100vh - %?90?%);\n\t\n\tbackground-color:#fff}.article[data-v-383a6a59]{padding:%?20?%}.article-title[data-v-383a6a59]{font-size:%?32?%;color:#333;margin-bottom:%?20?%;position:relative;height:%?100?%}.article-time[data-v-383a6a59]{margin-left:%?20?%}.article-content[data-v-383a6a59]{font-size:%?28?%!important;color:#666;line-height:1.6;margin-top:%?20?%}.article-content p img[data-v-383a6a59]{width:100%!important}.shop-logo[data-v-383a6a59]{width:%?60?%;height:%?60?%;border-radius:50%;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.shop-name[data-v-383a6a59]{line-height:%?100?%;margin-left:%?80?%}",""])},ad72:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(a("2c1a"));var r={data:function(){return{content:this.$store.state.config.distribution_agreement}},onLoad:function(t){},computed:{},methods:{}};e.default=r},c559:function(t,e,a){var n=a("7ba5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("1b8d7fc2",n,!0,{sourceMap:!1,shadowMode:!1})}}]);