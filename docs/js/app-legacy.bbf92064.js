(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)o=s[u],a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/plots/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n.r(e);var r=n("e2a1"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=a.a},"0bd2":function(t,e,n){var r=n("b8b4");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("50c7188d",r,!0,{sourceMap:!1,shadowMode:!1})},1070:function(t,e,n){var r=n("5c97");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("12b3216a",r,!0,{sourceMap:!1,shadowMode:!1})},"20ba":function(t,e,n){"use strict";var r=n("b5cc"),a=n.n(r);a.a},"2e81":function(t,e,n){"use strict";var r=n("1070"),a=n.n(r);a.a},"3f8c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n*{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\nbody{background-color:#005662;margin:0\n}\nbody,html{height:100%;width:100%\n}\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}",""])},5050:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},i=[],o=n("2877"),s={};function c(t){var e=n("034f");e.__inject__&&e.__inject__(t)}var l=Object(o["a"])(s,a,i,!1,c,null,null,!0);l.options.__file="App.vue";var d=l.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("This is home")])},f=[],x={name:"home"},v=x,p=Object(o["a"])(v,h,f,!1,null,null,null,!0);p.options.__file="Home.vue";var b=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("histogram",{staticStyle:{height:"600px"},attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,interval:.1}}),n("button",{staticStyle:{margin:"60px auto"},on:{click:t.add}},[t._v("Add")])],1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.activeIndex,expression:"activeIndex !== -1"}],ref:"tooltip",staticClass:"tooltip"},[n("div",[t._v("frequency: "+t._s(t.currentFreq))]),n("div",[t._v("range: "+t._s(t.currentRange))])]),n("svg",{ref:"plot",staticClass:"container"},[n("x-axis",{attrs:{ctx:this}}),n("y-axis",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("text",{attrs:{x:t.convertX(0),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")(t.range[0])))]),t._l(t.counter,function(e,r){return n("g",{key:r},[r%t.indexMultiplierX===0?n("text",{attrs:{x:t.convertX(r+1),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")((r+1)*t.interval)))]):t._e(),n("text",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex === index"}],attrs:{x:t.convertX(0)-15,y:t.convertY(e)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(e))]),n("rect",{staticClass:"bar hover",attrs:{transform:"scale(1,-1)",x:t.convertX(r),y:-t.convertY(0),width:t.scaleX,height:t.scaleY*e,fill:t.colorBar,"stroke-width":"1",stroke:"black"},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(e),x2:t.convertX(r),y2:t.convertY(e),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)])},_=[],Y=n("2909");n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("1c4c"),n("c5f6"),n("7cdf");function X(t){var e=480,n=10;return Math.floor(n*t/e)}var w={props:{labelX:String,labelY:String,dataX:{type:Array,required:!0},padding:{padding:Number,default:50},colorLabel:{type:String,default:"black"},colorAxes:{type:String,default:"black"},colorIndex:{type:String,default:"black"},sizeLabel:{type:String,default:"1em"},sizeAxes:{type:String,default:"2.2"},sizeIndex:{type:String,default:"1em"}},data:function(){return{containerHeight:0,containerWidth:0}},computed:{height:function(){},width:function(){},scaleX:function(){return(this.containerWidth-2*this.padding)/this.width},scaleY:function(){return(this.containerHeight-2*this.padding)/this.height},nIndexX:function(){return X(this.containerWidth)},nIndexY:function(){return X(this.containerHeight)}},methods:{resizeHandler:function(){var t=this.$refs.plot.getBoundingClientRect(),e=t.width,n=t.height;this.containerHeight=n,this.containerWidth=e},convertX:function(t){return this.padding+t*this.scaleX},convertY:function(t){return(this.height-t)*this.scaleY+this.padding},safe:function(t){return void 0===t||isNaN(t)||t===1/0||t===-1/0?0:t}},filters:{round:function(t){return Number.isInteger(t)?t:t.toPrecision(2)}},mounted:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeHandler)}},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.containerWidth-t.ctx.padding,y2:t.ctx.containerHeight-t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},M=[],k={props:{ctx:Object}},z=k,j=Object(o["a"])(z,I,M,!1,null,null,null);j.options.__file="XAxis.vue";var O=j.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.padding,y2:t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},S=[],L={props:{ctx:Object}},A=L,P=Object(o["a"])(A,H,S,!1,null,null,null);P.options.__file="YAxis.vue";var E=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.containerWidth/2,y:t.ctx.containerHeight-t.ctx.padding+45,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle"}},[t._v(t._s(t.ctx.labelX))])},N=[],C={props:{ctx:Object}},q=C,T=Object(o["a"])(q,$,N,!1,null,null,null);T.options.__file="XLabel.vue";var W=T.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.padding-40,y:t.ctx.containerHeight/2,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t.ctx.labelY))])},R=[],D={props:{ctx:Object}},F=D,J=Object(o["a"])(F,B,R,!1,null,null,null);J.options.__file="YLabel.vue";var G=J.exports,K={mixins:[w],props:{range:{type:Array,default:function(){return[0,1]}},interval:{type:Number,required:!0},colorBar:{type:String,default:"green"},colorHighlighter:{type:String,default:"black"}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G},data:function(){return{activeIndex:-1}},computed:{counter:function(){var t=this,e=Math.floor((this.range[1]-this.range[0])/this.interval),n=Array.from({length:e},function(){return 0});if(void 0===this.dataX||0===this.dataX.length)return n;var r=function(n){var r=Math.floor(n/t.interval);return r===e?r-1:r},a=!0,i=!1,o=void 0;try{for(var s,c=this.dataX[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value;n[r(l)]++}}catch(d){i=!0,o=d}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return n},currentFreq:function(){return this.activeIndex>=0?this.counter[this.activeIndex]:0},currentRange:function(){if(this.activeIndex<0)return"";var t=this.activeIndex*this.interval,e=t+this.interval;return"".concat(t.toPrecision(2)," - ").concat(e.toPrecision(2))},width:function(){return this.counter.length},height:function(){var t=Math.max.apply(Math,Object(Y["a"])(this.counter));return 0===t?1:t},indexMultiplierX:function(){return Math.ceil(this.counter.length/this.nIndexX)}},mounted:function(){window.addEventListener("mousemove",this.tooltipHandler)},beforeDestroy:function(){window.removeEventListener("mousemove",this.tooltipHandler)},methods:{tooltipHandler:function(t){this.$refs.tooltip.style.left=t.pageX+"px",this.$refs.tooltip.style.top=t.pageY+"px"}}},Q=K,U=(n("a3bf"),Object(o["a"])(Q,y,_,!1,null,"3cd7dcf7",null));U.options.__file="Histogram.vue";var V=U.exports,Z={components:{Histogram:V},data(){return{xdata:[.9]}},methods:{add(){this.xdata.push(Math.random())}}},tt=Z,et=Object(o["a"])(tt,m,g,!1,null,null,null,!0);et.options.__file="Histogram.vue";var nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scatter-plot",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},at=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),t._l(t.dataX,function(e,r){return n("g",{key:r},[n("text",{attrs:{x:t.convertX(e),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(e))]),n("text",{attrs:{x:t.convertX(0)-15,y:t.convertY(t.dataY[r])+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t.dataY[r]))]),n("circle",{staticClass:"hover",attrs:{cx:t.convertX(e),cy:t.convertY(t.dataY[r]),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(t.dataY[r]),x2:t.convertX(e),y2:t.convertY(t.dataY[r]),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(e),y1:t.convertY(0),x2:t.convertX(e),y2:t.convertY(t.dataY[r]),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)},ot=[],st={mixins:[w],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data:function(){return{activeIndex:-1}},computed:{height:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataY))),e=this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataY))),n=t-e;return 0===n?1:n},width:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataX))),e=this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataX))),n=t-e;return 0===n?1:n}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G}},ct=st,lt=(n("2e81"),Object(o["a"])(ct,it,ot,!1,null,"ff8eae92",null));lt.options.__file="Scatter.vue";var dt=lt.exports,ut={components:{ScatterPlot:dt},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},ht=ut,ft=Object(o["a"])(ht,rt,at,!1,null,null,null,!0);ft.options.__file="ScatterPlot.vue";var xt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("trendline",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},pt=[],bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("path",{attrs:{d:t.path,stroke:"black",fill:"transparent","stroke-width":"2"}}),t._l(t.dataX,function(e,r){return n("g",{key:r},[r%t.indexMultiplierX===0?n("text",{attrs:{x:t.convertX(e-t.minX),y:t.convertY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v(t._s(t._f("round")(e)))]):t._e(),r%t.indexMultiplierY===0?n("text",{attrs:{x:t.convertX(0)-15,y:t.convertY(t.dataY[r]-t.minY)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v(t._s(t._f("round")(t.dataY[r])))]):t._e(),n("circle",{staticClass:"hover",attrs:{cx:t.convertX(e-t.minX),cy:t.convertY(t.dataY[r]-t.minY),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=r},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(0),y1:t.convertY(t.dataY[r]-t.minY),x2:t.convertX(e-t.minX),y2:t.convertY(t.dataY[r]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===r,expression:"activeIndex===index"}],attrs:{x1:t.convertX(e-t.minX),y1:t.convertY(0),x2:t.convertX(e-t.minX),y2:t.convertY(t.dataY[r]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5 5"}})])})],2)},mt=[],gt={mixins:[w],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data:function(){return{activeIndex:-1}},computed:{minX:function(){return this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataX)))},minY:function(){return this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataY)))},height:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataY))),e=t-this.minY;return 0===e?1:e},width:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataX))),e=t-this.minX;return 0===e?1:e},path:function(){if(this.dataX.length<2)return"";var t=[],e=this.dataX,n=this.dataY;t.push("M".concat(this.convertX(e[0]-this.minX),",").concat(this.convertY(n[0]-this.minY)));for(var r=1;r<e.length;r++)t.push("L".concat(this.convertX(e[r]-this.minX),",").concat(this.convertY(n[r]-this.minY)));return t.join(" ")},indexMultiplierX:function(){return Math.ceil(this.dataX.length/this.nIndexX)},indexMultiplierY:function(){return Math.ceil(this.dataY.length/this.nIndexY)}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G}},yt=gt,_t=(n("20ba"),Object(o["a"])(yt,bt,mt,!1,null,"a0cb7c06",null));_t.options.__file="Trendline.vue";var Yt=_t.exports,Xt={components:{Trendline:Yt},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},wt=Xt,It=Object(o["a"])(wt,vt,pt,!1,null,null,null,!0);It.options.__file="Trendline.vue";var Mt=It.exports;r["a"].use(u["a"]);var kt=new u["a"]({routes:[{path:"/",name:"home",component:b},{path:"/histogram",name:"histogram",component:nt},{path:"/scatter-plot",name:"scatter-plot",component:xt},{path:"/trendline",name:"trendline",component:Mt}]});r["a"].config.productionTip=!1,new r["a"]({router:kt,render:function(t){return t(d)}}).$mount("#app")},"5c97":function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},a0fb:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.container{width:100%;height:100%\n}\n.hover:hover{opacity:.5;cursor:pointer\n}",""])},a3bf:function(t,e,n){"use strict";var r=n("0bd2"),a=n.n(r);a.a},b5cc:function(t,e,n){var r=n("5050");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("3bad591a",r,!0,{sourceMap:!1,shadowMode:!1})},b8b4:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"\n.bar[data-v-3cd7dcf7]{-webkit-transition:width .4s ease 0s,height .4s ease 0s;transition:width .4s ease 0s,height .4s ease 0s\n}\n.tooltip[data-v-3cd7dcf7]{padding:10px;background-color:#000;color:#fff;text-align:center;border-radius:6px;font-size:.8em;position:absolute;z-index:1\n}",""])},e2a1:function(t,e,n){var r=n("3f8c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("1f50beb8",r,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app-legacy.bbf92064.js.map