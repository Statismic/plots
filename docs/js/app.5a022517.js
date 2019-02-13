(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)o=s[u],i[o]&&h.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/plots/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n.r(e);var r=n("e2a1"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"0bd2":function(t,e,n){var r=n("b8b4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("499e").default;i("50c7188d",r,!0,{sourceMap:!1,shadowMode:!1})},1070:function(t,e,n){var r=n("5c97");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("499e").default;i("12b3216a",r,!0,{sourceMap:!1,shadowMode:!1})},"20ba":function(t,e,n){"use strict";var r=n("b5cc"),i=n.n(r);i.a},"2e81":function(t,e,n){"use strict";var r=n("1070"),i=n.n(r);i.a},"3f8c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n*{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\nbody{background-color:#005662;margin:0\n}\nbody,html{height:100%;width:100%\n}\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}",""])},5050:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},a=[],o=n("2877"),s={};function l(t){var e=n("034f");e.__inject__&&e.__inject__(t)}var c=Object(o["a"])(s,i,a,!1,l,null,null,!0);c.options.__file="App.vue";var d=c.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("This is home")])},x=[],v={name:"home"},f=v,p=Object(o["a"])(f,h,x,!1,null,null,null,!0);p.options.__file="Home.vue";var m=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("histogram",{staticStyle:{height:"600px"},attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,interval:.1}}),n("button",{staticStyle:{margin:"60px auto"},on:{click:t.add}},[t._v("Add")])],1)},b=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.activeIndex,expression:"activeIndex !== -1"}],ref:"tooltip",staticClass:"tooltip"},[n("div",[t._v("frequency: "+t._s(t.currentFreq))]),n("div",[t._v("range: "+t._s(t.currentRange))])]),n("svg",{ref:"plot",staticClass:"container"},[n("x-axis",{attrs:{ctx:this}}),n("y-axis",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("text",{attrs:{x:t.convertX(0),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")(t.range[0])))]),t._l(t.counter,function(e,r){return n("g",{key:r},[r%t.indexMultiplierX===0?n("text",{attrs:{x:t.convertX(r+1),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")((r+1)*t.interval)))]):t._e(),n("text",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex === index"}],attrs:{x:t.convertX(0)-15,y:t.convertY(e)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(e))]),n("rect",{staticClass:"bar hover",attrs:{transform:"scale(1,-1)",x:t.convertX(r),y:-t.convertY(0),width:t.scaleX,height:t.scaleY*e,fill:t.colorBar,"stroke-width":"1",stroke:"black"},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(e),x2:t.convertX(r),y2:t.convertY(e),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)])},_=[];function Y(t){const e=480,n=10;return Math.floor(n*t/e)}var X={props:{labelX:String,labelY:String,dataX:{type:Array,required:!0},padding:{padding:Number,default:50},colorLabel:{type:String,default:"black"},colorAxes:{type:String,default:"black"},colorIndex:{type:String,default:"black"},sizeLabel:{type:String,default:"1em"},sizeAxes:{type:String,default:"2.2"},sizeIndex:{type:String,default:"1em"}},data(){return{containerHeight:0,containerWidth:0}},computed:{height(){},width(){},scaleX(){return(this.containerWidth-2*this.padding)/this.width},scaleY(){return(this.containerHeight-2*this.padding)/this.height},nIndexX(){return Y(this.containerWidth)},nIndexY(){return Y(this.containerHeight)}},methods:{resizeHandler(){const t=this.$refs.plot.getBoundingClientRect(),e=t.width,n=t.height;this.containerHeight=n,this.containerWidth=e},convertX(t){return this.padding+t*this.scaleX},convertY(t){return(this.height-t)*this.scaleY+this.padding},safe(t){return void 0===t||isNaN(t)||t===1/0||t===-1/0?0:t}},filters:{round(t){return Number.isInteger(t)?t:t.toPrecision(2)}},mounted(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}},w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.containerWidth-t.ctx.padding,y2:t.ctx.containerHeight-t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},I=[],k={props:{ctx:Object}},z=k,M=Object(o["a"])(z,w,I,!1,null,null,null);M.options.__file="XAxis.vue";var H=M.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.padding,y2:t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},S=[],L={props:{ctx:Object}},O=L,A=Object(o["a"])(O,j,S,!1,null,null,null);A.options.__file="YAxis.vue";var $=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.containerWidth/2,y:t.ctx.containerHeight-t.ctx.padding+45,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle"}},[t._v(t._s(t.ctx.labelX))])},E=[],N={props:{ctx:Object}},C=N,q=Object(o["a"])(C,P,E,!1,null,null,null);q.options.__file="XLabel.vue";var T=q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.padding-40,y:t.ctx.containerHeight/2,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t.ctx.labelY))])},B=[],R={props:{ctx:Object}},D=R,F=Object(o["a"])(D,W,B,!1,null,null,null);F.options.__file="YLabel.vue";var J=F.exports,G={mixins:[X],props:{range:{type:Array,default:()=>[0,1]},interval:{type:Number,required:!0},colorBar:{type:String,default:"green"},colorHighlighter:{type:String,default:"black"}},components:{YAxis:$,XAxis:H,XLabel:T,YLabel:J},data(){return{activeIndex:-1}},computed:{counter(){const t=Math.floor((this.range[1]-this.range[0])/this.interval);let e=Array.from({length:t},()=>0);if(void 0===this.dataX||0===this.dataX.length)return e;const n=e=>{const n=Math.floor(e/this.interval);return n===t?n-1:n};for(let r of this.dataX)e[n(r)]++;return e},currentFreq(){return this.activeIndex>=0?this.counter[this.activeIndex]:0},currentRange(){if(this.activeIndex<0)return"";const t=this.activeIndex*this.interval,e=t+this.interval;return`${t.toPrecision(2)} - ${e.toPrecision(2)}`},width(){return this.counter.length},height(){const t=Math.max(...this.counter);return 0===t?1:t},indexMultiplierX(){return Math.ceil(this.counter.length/this.nIndexX)}},mounted(){window.addEventListener("mousemove",this.tooltipHandler)},beforeDestroy(){window.removeEventListener("mousemove",this.tooltipHandler)},methods:{tooltipHandler(t){this.$refs.tooltip.style.left=t.pageX+"px",this.$refs.tooltip.style.top=t.pageY+"px"}}},K=G,Q=(n("a3bf"),Object(o["a"])(K,y,_,!1,null,"3cd7dcf7",null));Q.options.__file="Histogram.vue";var U=Q.exports,V={components:{Histogram:U},data(){return{xdata:[.9]}},methods:{add(){this.xdata.push(Math.random())}}},Z=V,tt=Object(o["a"])(Z,g,b,!1,null,null,null,!0);tt.options.__file="Histogram.vue";var et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scatter-plot",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},rt=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),t._l(t.dataX,function(e,r){return n("g",{key:r},[n("text",{attrs:{x:t.convertX(e),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(e))]),n("text",{attrs:{x:t.convertX(0)-15,y:t.convertY(t.dataY[r])+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t.dataY[r]))]),n("circle",{staticClass:"hover",attrs:{cx:t.convertX(e),cy:t.convertY(t.dataY[r]),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(t.dataY[r]),x2:t.convertX(e),y2:t.convertY(t.dataY[r]),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(e),y1:t.convertY(0),x2:t.convertX(e),y2:t.convertY(t.dataY[r]),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)},at=[],ot={mixins:[X],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data(){return{activeIndex:-1}},computed:{height(){const t=this.safe(Math.max(...this.dataY)),e=this.safe(Math.min(...this.dataY)),n=t-e;return 0===n?1:n},width(){const t=this.safe(Math.max(...this.dataX)),e=this.safe(Math.min(...this.dataX)),n=t-e;return 0===n?1:n}},components:{YAxis:$,XAxis:H,XLabel:T,YLabel:J}},st=ot,lt=(n("2e81"),Object(o["a"])(st,it,at,!1,null,"ff8eae92",null));lt.options.__file="Scatter.vue";var ct=lt.exports,dt={components:{ScatterPlot:ct},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},ut=dt,ht=Object(o["a"])(ut,nt,rt,!1,null,null,null,!0);ht.options.__file="ScatterPlot.vue";var xt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("trendline",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},ft=[],pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("path",{attrs:{d:t.path,stroke:"black",fill:"transparent","stroke-width":"2"}}),t._l(t.dataX,function(e,r){return n("g",{key:r},[r%t.indexMultiplierX===0?n("text",{attrs:{x:t.convertX(e-t.minX),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")(e)))]):t._e(),r%t.indexMultiplierY===0?n("text",{attrs:{x:t.convertX(0)-15,y:t.convertY(t.dataY[r]-t.minY)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t._f("round")(t.dataY[r])))]):t._e(),n("circle",{staticClass:"hover",attrs:{cx:t.convertX(e-t.minX),cy:t.convertY(t.dataY[r]-t.minY),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(t.dataY[r]-t.minY),x2:t.convertX(e-t.minX),y2:t.convertY(t.dataY[r]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(e-t.minX),y1:t.convertY(0),x2:t.convertX(e-t.minX),y2:t.convertY(t.dataY[r]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)},mt=[],gt={mixins:[X],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data(){return{activeIndex:-1}},computed:{minX(){return this.safe(Math.min(...this.dataX))},minY(){return this.safe(Math.min(...this.dataY))},height(){const t=this.safe(Math.max(...this.dataY)),e=t-this.minY;return 0===e?1:e},width(){const t=this.safe(Math.max(...this.dataX)),e=t-this.minX;return 0===e?1:e},path(){if(this.dataX.length<2)return"";let t=[];const e=this.dataX,n=this.dataY;t.push(`M${this.convertX(e[0]-this.minX)},${this.convertY(n[0]-this.minY)}`);for(let r=1;r<e.length;r++)t.push(`L${this.convertX(e[r]-this.minX)},${this.convertY(n[r]-this.minY)}`);return t.join(" ")},indexMultiplierX(){return Math.ceil(this.dataX.length/this.nIndexX)},indexMultiplierY(){return Math.ceil(this.dataY.length/this.nIndexY)}},components:{YAxis:$,XAxis:H,XLabel:T,YLabel:J}},bt=gt,yt=(n("20ba"),Object(o["a"])(bt,pt,mt,!1,null,"a0cb7c06",null));yt.options.__file="Trendline.vue";var _t=yt.exports,Yt={components:{Trendline:_t},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},Xt=Yt,wt=Object(o["a"])(Xt,vt,ft,!1,null,null,null,!0);wt.options.__file="Trendline.vue";var It=wt.exports;r["a"].use(u["a"]);var kt=new u["a"]({routes:[{path:"/",name:"home",component:m},{path:"/histogram",name:"histogram",component:et},{path:"/scatter-plot",name:"scatter-plot",component:xt},{path:"/trendline",name:"trendline",component:It}]});r["a"].config.productionTip=!1,new r["a"]({router:kt,render:t=>t(d)}).$mount("#app")},"5c97":function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},a0fb:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.container{width:100%;height:100%\n}\n.hover:hover{opacity:.5;cursor:pointer\n}",""])},a3bf:function(t,e,n){"use strict";var r=n("0bd2"),i=n.n(r);i.a},b5cc:function(t,e,n){var r=n("5050");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("499e").default;i("3bad591a",r,!0,{sourceMap:!1,shadowMode:!1})},b8b4:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"\n.bar[data-v-3cd7dcf7]{-webkit-transition:width .4s ease 0s,height .4s ease 0s;transition:width .4s ease 0s,height .4s ease 0s\n}\n.tooltip[data-v-3cd7dcf7]{padding:10px;background-color:#000;color:#fff;text-align:center;border-radius:6px;font-size:.8em;position:absolute;z-index:1\n}",""])},e2a1:function(t,e,n){var r=n("3f8c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("499e").default;i("1f50beb8",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.5a022517.js.map