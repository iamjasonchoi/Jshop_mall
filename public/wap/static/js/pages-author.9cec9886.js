(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-author"],{"690c":function(t,e,i){var n=i("f791");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7ca84542",n,!0,{sourceMap:!1,shadowMode:!1})},8198:function(t,e,i){"use strict";i.r(e);var n=i("a7a2"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},9627:function(t,e,i){"use strict";i.r(e);var n=i("a3b0"),a=i("8198");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("ce7d");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"19351b7f",null,!1,n["a"],o);e["default"]=c.exports},a3b0:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-c"},[i("v-uni-image",{staticClass:"load-img",attrs:{src:"/static/image/loading.gif",mode:""}}),i("v-uni-view",{staticClass:"load-text color-9"},[t._v("信息加载中.....")])],1)],1)},r=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return r}),i.d(e,"a",function(){return n})},a7a2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("6b54");var n={data:function(){return{code:"",type:"",state:""}},onLoad:function(t){this.code=this.getUrlParam("code"),this.state=this.getUrlParam("state"),this.type=t.type;var e=this;setTimeout(function(){e.userTrustLogin()},100)},methods:{getUrlParam:function(t){var e=window.location.toString(),i=e.split("?");if(i.length>1){for(var n,a=i[1].split("&"),r=0;r<a.length;r++)if(n=a[r].split("="),null!=n&&n[0]==t){if(n[1].indexOf("#")){var o=void 0;return o=n[1].split("#"),o[0]}return n[1]}return""}return""},userTrustLogin:function(){var t=this,e={scope:1,code:this.code,state:this.state,invitecode:this.$db.get("invitecode")||""};this.$api.getOpenId(e,function(e){e.status?e.data.token?(t.$db.set("userToken",e.data.token),t.redirectHandler()):e.data.user_wx_id&&uni.redirectTo({url:"/pages/login/login/index?user_wx_id="+e.data.user_wx_id}):t.$common.errorToShow(e.msg)})},redirectHandler:function(){this.$db.del("invitecode");var t=this.$db.get("redirectPage");t?(this.$db.del("redirectPage"),this.$common.redirectTo(t)):uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},ce7d:function(t,e,i){"use strict";var n=i("690c"),a=i.n(n);a.a},f791:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-19351b7f]{position:relative;height:80vh}.content-c[data-v-19351b7f]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.load-img[data-v-19351b7f]{width:%?100?%;height:%?100?%}.load-text[data-v-19351b7f]{font-size:%?26?%}",""])}}]);