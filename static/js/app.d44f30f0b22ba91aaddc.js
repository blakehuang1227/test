webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-items"},[a("div",{class:{"active-router":"/Home"===t.$router.currentRoute.fullPath},on:{click:function(e){return t.$router.push("/Home")}}},[t._v("首頁")]),t._v(" "),a("div",{class:{"active-router":"/Favorate"===t.$router.currentRoute.fullPath},on:{click:function(e){return t.$router.push("/Favorate")}}},[t._v("收藏")])])])},staticRenderFns:[]};var o={name:"app",components:{vHead:a("VU/8")({name:"vHead",data:function(){return{}},methods:{}},i,!1,function(t){a("oIZS")},"data-v-7f2c9006",null).exports},data:function(){return{}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-head",{key:this.$router.currentRoute.meta.title}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")(o,r,!1,function(t){a("RU+i")},null,null).exports,c=a("/ocq"),l={name:"Home",data:function(){return{fullscreenLoading:!0,originData:[],videos:[],totalVideos:0,nextPageToken:"",layoutSetting:"total, prev, pager, next, jumper",pageSize:12,currentPage:0,screenWidth:window.innerWidth}},methods:{onResize:function(){this.screenWidth=window.innerWidth,this.screenWidth<500?this.layoutSetting="prev, pager, next":this.layoutSetting="total, prev, pager, next, jumper"},createBeforeunloadHandler:function(){window.addEventListener("resize",this.onResize)},destroyedBeforeunloadHandler:function(){window.removeEventListener("resize",this.onResize)},favor:function(t){event.stopPropagation();var e=localStorage.getItem("favor");e?(e=JSON.parse(e),!1===e.some(function(e){return console.log(e),e===t.id})?(e.push(t.id),this.$set(t,"favor",!0)):(e=e.filter(function(e){return e!=t.id}),this.$set(t,"favor",!1))):(this.$set(t,"favor",!0),e=[t.id]);localStorage.setItem("favor",JSON.stringify(e))},handleCurrentChange:function(t){var e=this;void 0!=t&&(this.currentPage=t),this.videos=this.originData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize),this.$nextTick(function(){console.log(e.$refs.item),e.$refs.item.scrollTop=0})},getData:function(){var t=this;return this.$axios({method:"get",url:"https://www.googleapis.com/youtube/v3/videos?maxResults=50&chart=mostPopular&part=snippet%2CcontentDetails%2Cstatistics&regionCode=TW&key=AIzaSyCpF5pvKi5cN-2fnmXZUV1dMLYkDT5DjBo",responseType:"json"}).then(function(e){t.originData=e.data.items,t.nextPageToken=e.data.nextPageToken,t.$axios({method:"get",url:"https://www.googleapis.com/youtube/v3/videos?maxResults=50&chart=mostPopular&part=snippet%2CcontentDetails%2Cstatistics&regionCode=TW&key=AIzaSyCpF5pvKi5cN-2fnmXZUV1dMLYkDT5DjBo&pageToken="+t.nextPageToken,responseType:"json"}).then(function(e){t.originData=t.originData.concat(e.data.items),t.totalVideos=t.originData.length;var a=localStorage.getItem("favor");if(a){a=JSON.parse(a);var n=t;a.forEach(function(e){t.originData.forEach(function(t){e===t.id&&n.$set(t,"favor",!0)})})}t.videos=t.originData.slice(0,t.pageSize),t.fullscreenLoading=!1}).catch(function(t){console.error(t)})})},convertDuration:function(t){return t.replace("PT","").replace("M","分").replace("S","秒")},subString:function(t){return t.substring(0,50)}},computed:{},created:function(){this.createBeforeunloadHandler(),this.getData()},beforeDestroy:function(){this.destroyedBeforeunloadHandler()}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"video-wrap"},[a("div",{ref:"item",staticClass:"flex-row"},t._l(t.videos,function(e){return a("div",{key:e.id,staticClass:"item",on:{click:function(a){return t.$router.push({name:"Player",params:{data:e}})}}},[a("div",{staticClass:"flex-col"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.snippet.thumbnails.high.url}}),t._v(" "),a("font-awesome-icon",{staticClass:"heart",class:{favor:e.favor},attrs:{icon:["fas","heart"]},on:{click:function(a){return t.favor(e)}}}),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.convertDuration(e.contentDetails.duration)))])],1),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.snippet.title))]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(t.subString(e.snippet.description)))])])])}),0)]),t._v(" "),a("div",[a("el-pagination",{staticClass:"page",attrs:{"page-sizes":[5,10,50,100],"page-size":t.pageSize,layout:t.layoutSetting,total:t.totalVideos},on:{"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]};var d=a("VU/8")(l,u,!1,function(t){a("lG6R")},"data-v-1641694d",null).exports,v=(a("63pp"),a("Jg0P"),a("g3Gj"),{data:function(){return{}},props:["data"],methods:{},created:function(){console.log(this.data)}}),f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"text-wrap"},[a("div",{staticClass:"title"},[t._v("影片標題:"+t._s(t.data.snippet.title||""))]),t._v(" "),a("div",{staticClass:"desc"},[t._v("介紹:"+t._s(t.data.snippet.description||""))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-wrap"},[e("video",{staticClass:"video-js vjs-default-skin vjs-16-9",attrs:{id:"my-video",controls:"",preload:"auto",width:"auto",height:"auto","data-setup":"{}"}},[e("source",{attrs:{id:"source",src:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",type:"application/x-mpegURL"}})])])}]};var p=a("VU/8")(v,f,!1,function(t){a("obMi")},"data-v-663c331f",null).exports,h={name:"Home",data:function(){return{originData:[],videos:[],totalVideos:0,layoutSetting:"total, prev, pager, next, jumper",pageSize:12,currentPage:0,screenWidth:window.innerWidth,noFavor:!1}},methods:{onResize:function(){this.screenWidth=window.innerWidth,this.screenWidth<500?this.layoutSetting="prev, pager, next":this.layoutSetting="total, prev, pager, next, jumper"},createBeforeunloadHandler:function(){window.addEventListener("resize",this.onResize)},destroyedBeforeunloadHandler:function(){window.removeEventListener("resize",this.onResize)},favor:function(t){event.stopPropagation();var e=localStorage.getItem("favor");e?(e=JSON.parse(e),!1===e.some(function(e){return console.log(e),e===t.id})?(e.push(t.id),t.favor=!0):(e=e.filter(function(e){return e!=t.id}),t.favor=!1)):(this.$set(t,"favor",!0),e=[t.id]);localStorage.setItem("favor",JSON.stringify(e))},handleCurrentChange:function(t){void 0!=t&&(this.currentPage=t),this.videos=this.originData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)},getData:function(){var t=this,e=localStorage.getItem("favor");if(e){if(0===(e=JSON.parse(e)).length)return this.noFavor=!0,"";e.forEach(function(e){t.$axios({method:"get",url:"https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+e+"&key=AIzaSyCpF5pvKi5cN-2fnmXZUV1dMLYkDT5DjBo",responseType:"json"}).then(function(e){t.originData=t.originData.concat(e.data.items),t.totalVideos=t.originData.length;var a=localStorage.getItem("favor");if(a){a=JSON.parse(a);var n=t;a.forEach(function(e){t.originData.forEach(function(t){e===t.id&&n.$set(t,"favor",!0)})})}t.videos=t.originData.slice(0,t.pageSize)})}),this.noFavor=!1}else this.noFavor=!0},convertDuration:function(t){return t.replace("PT","").replace("M","分").replace("S","秒")},subString:function(t){return t.substring(0,50)}},computed:{},created:function(){this.createBeforeunloadHandler(),this.getData()},beforeDestroy:function(){this.destroyedBeforeunloadHandler()}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"favorate"}},[t.noFavor?a("div",{staticClass:"notData"},[a("font-awesome-icon",{attrs:{icon:["fas","exclamation-circle"]}}),t._v("沒有收藏\n  ")],1):a("div",[a("div",{staticClass:"video-wrap"},[a("div",{staticClass:"flex-row"},t._l(t.videos,function(e){return a("div",{key:e.id,staticClass:"item",on:{click:function(a){return t.$router.push({name:"Player",params:{data:e}})}}},[a("div",{staticClass:"flex-col"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:e.snippet.thumbnails.high.url}}),t._v(" "),a("font-awesome-icon",{staticClass:"heart",class:{favor:e.favor},attrs:{icon:["fas","heart"]},on:{click:function(a){return t.favor(e)}}}),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.convertDuration(e.contentDetails.duration)))])],1),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(e.snippet.title))]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(t.subString(e.snippet.description)))])])])}),0)]),t._v(" "),a("div",[a("el-pagination",{staticClass:"page",attrs:{"page-sizes":[5,10,50,100],"page-size":t.pageSize,layout:t.layoutSetting,total:t.totalVideos},on:{"current-change":t.handleCurrentChange}})],1)])])},staticRenderFns:[]};var m=a("VU/8")(h,g,!1,function(t){a("wQBm")},"data-v-5cdaa95e",null).exports;n.default.use(c.a);var _=new c.a({routes:[{path:"/",redirect:"Home"},{name:"Home",path:"/Home",component:d,meta:{title:"Home"}},{name:"Player",path:"/Player",component:p,meta:{title:"Player"},props:!0},{name:"Favorate",path:"/Favorate",component:m,meta:{title:"Favorate"}}],scrollBehavior:function(t,e,a){return{x:0,y:0}}}),C=a("mtWM"),w=a.n(C),y=a("C/JF"),S=a("fhbW"),D=a("Yu89"),x=a("1e6/"),z=a("zL8q"),P=a.n(z),k=a("gwsl"),$=a.n(k);a("tvR6");n.default.use(P.a,{locale:$.a}),y.c.add(S.a,D.a),n.default.component("font-awesome-icon",x.a),n.default.prototype.$axios=w.a,new n.default({el:"#app",router:_,render:function(t){return t(s)}})},"RU+i":function(t,e){},g3Gj:function(t,e){},lG6R:function(t,e){},oIZS:function(t,e){},obMi:function(t,e){},tvR6:function(t,e){},wQBm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d44f30f0b22ba91aaddc.js.map