(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)o=s[d],i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n.r(e);var a=n("e2a1"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"0bcd":function(t,e,n){var a=n("d4fa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("76328265",a,!0,{sourceMap:!1,shadowMode:!1})},"2df2":function(t,e,n){"use strict";var a=n("f188"),i=n.n(a);i.a},"3e7b":function(t,e,n){"use strict";var a=n("adbc"),i=n.n(a);i.a},"3f8c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n*{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale\n}\nbody{background-color:#005662;margin:0\n}\nbody,html{height:100%;width:100%\n}\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}",""])},4059:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"\n.bar[data-v-71968c1a]{-webkit-transition:width .4s ease 0s,height .4s ease 0s;transition:width .4s ease 0s,height .4s ease 0s\n}\n.tooltip[data-v-71968c1a]{padding:10px;background-color:#000;color:#fff;text-align:center;border-radius:6px;font-size:.8em;position:absolute;z-index:1\n}",""])},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},r=[],o=n("2877"),s={};function c(t){var e=n("034f");e.__inject__&&e.__inject__(t)}var l=Object(o["a"])(s,i,r,!1,c,null,null,!0);l.options.__file="App.vue";var u=l.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("This is home")])},p=[],x={name:"home"},f=x,m=Object(o["a"])(f,h,p,!1,null,null,null,!0);m.options.__file="Home.vue";var v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("histogram",{staticStyle:{height:"600px"},attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,interval:.1}}),n("button",{staticStyle:{margin:"60px auto"},on:{click:t.add}},[t._v("Add")])],1)},b=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:-1!==t.activeIndex,expression:"activeIndex !== -1"}],ref:"tooltip",staticClass:"tooltip"},[n("div",[t._v("frequency: "+t._s(t.currentFreq))]),n("div",[t._v("range: "+t._s(t.currentRange))])]),n("svg",{ref:"plot",staticClass:"container"},[n("x-axis",{attrs:{ctx:this}}),n("y-axis",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("text",{attrs:{x:t.computeX(0),y:t.computeY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v("\n      "+t._s(t._f("round")(t.range[0]))+"\n    ")]),t._l(t.counter,function(e,a){return n("g",{key:a},[a%t.indexMultiplierX===0?n("text",{attrs:{x:t.computeX(a+1),y:t.computeY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v("\n        "+t._s(t._f("round")((a+1)*t.interval))+"\n      ")]):t._e(),n("text",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex === index"}],attrs:{x:t.computeX(0)-15,y:t.computeY(e)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v("\n        "+t._s(e)+"\n      ")]),n("rect",{staticClass:"bar hover",attrs:{transform:"scale(1,-1)",x:t.computeX(a),y:-t.computeY(0),width:t.scaleX,height:t.scaleY*e,fill:t.colorBar,"stroke-width":"1",stroke:"black"},on:{mouseover:function(e){t.activeIndex=a},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex===index"}],attrs:{x1:t.computeX(0),y1:t.computeY(e),x2:t.computeX(a),y2:t.computeY(e),stroke:t.colorHighlighter,"stroke-dasharray":"5,5"}})])})],2)])},_=[],Y=n("2909");n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("1c4c"),n("c5f6");function X(t){var e=480,n=10;return Math.floor(n*t/e)}var w={props:{labelX:String,labelY:String,dataX:{type:Array,required:!0},padding:{padding:Number,default:50},colorLabel:{type:String,default:"black"},colorAxes:{type:String,default:"black"},colorIndex:{type:String,default:"black"},sizeLabel:{type:String,default:"1em"},sizeAxes:{type:String,default:"2.2"},sizeIndex:{type:String,default:"1em"}},data(){return{containerHeight:0,containerWidth:0}},computed:{height(){},width(){},scaleX(){return(this.containerWidth-2*this.padding)/this.width},scaleY(){return(this.containerHeight-2*this.padding)/this.height},nIndexX(){return X(this.containerWidth)},nIndexY(){return X(this.containerHeight)}},methods:{resizeHandler(){var t=this.$refs.plot.getBoundingClientRect(),e=t.width,n=t.height;this.containerHeight=n,this.containerWidth=e},computeX(t){return this.padding+t*this.scaleX},computeY(t){return(this.height-t)*this.scaleY+this.padding},safe(t){return void 0===t||isNaN(t)||t===1/0||t===-1/0?0:t}},filters:{round(t){return Number.isInteger(t)?t:t.toPrecision(2)}},mounted(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.resizeHandler)}},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.containerWidth-t.ctx.padding,y2:t.ctx.containerHeight-t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},M=[],k={props:{ctx:Object}},z=k,j=Object(o["a"])(z,I,M,!1,null,null,null,!0);j.options.__file="XAxis.vue";var O=j.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("line",{attrs:{x1:t.ctx.padding,y1:t.ctx.containerHeight-t.ctx.padding,x2:t.ctx.padding,y2:t.ctx.padding,stroke:t.ctx.colorAxes,"stroke-width":t.ctx.sizeAxes}})},S=[],L={props:{ctx:Object}},A=L,P=Object(o["a"])(A,H,S,!1,null,null,null,!0);P.options.__file="YAxis.vue";var E=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.containerWidth/2,y:t.ctx.containerHeight-t.ctx.padding+45,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle"}},[t._v("\n    "+t._s(t.ctx.labelX)+"\n")])},N=[],C={props:{ctx:Object}},q=C,T=Object(o["a"])(q,$,N,!1,null,null,null,!0);T.options.__file="XLabel.vue";var W=T.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("text",{attrs:{x:t.ctx.padding-40,y:t.ctx.containerHeight/2,fill:t.ctx.colorLabel,"font-size":t.ctx.sizeLabel,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v("\n  "+t._s(t.ctx.labelY)+"\n")])},R=[],D={props:{ctx:Object}},F=D,J=Object(o["a"])(F,B,R,!1,null,null,null,!0);J.options.__file="YLabel.vue";var G=J.exports,K={mixins:[w],props:{range:{type:Array,default:function(){return[0,1]}},interval:{type:Number,required:!0},colorBar:{type:String,default:"green"},colorHighlighter:{type:String,default:"black"}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G},data:function(){return{activeIndex:-1}},computed:{counter:function(){var t=this,e=Math.floor((this.range[1]-this.range[0])/this.interval),n=Array.from({length:e},function(){return 0});if(void 0===this.dataX||0===this.dataX.length)return n;var a=function(n){var a=Math.floor(n/t.interval);return a===e?a-1:a},i=!0,r=!1,o=void 0;try{for(var s,c=this.dataX[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;n[a(l)]++}}catch(u){r=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}return n},currentFreq:function(){return this.activeIndex>=0?this.counter[this.activeIndex]:0},currentRange:function(){if(this.activeIndex<0)return"";var t=this.activeIndex*this.interval,e=t+this.interval;return"".concat(t.toPrecision(2)," - ").concat(e.toPrecision(2))},width:function(){return this.counter.length},height:function(){var t=Math.max.apply(Math,Object(Y["a"])(this.counter));return 0===t?1:t},indexMultiplierX:function(){return Math.ceil(this.counter.length/this.nIndexX)}},mounted:function(){window.addEventListener("mousemove",this.tooltipHandler)},beforeDestroy:function(){window.removeEventListener("mousemove",this.tooltipHandler)},methods:{tooltipHandler:function(t){this.$refs.tooltip.style.left=t.pageX+"px",this.$refs.tooltip.style.top=t.pageY+"px"}}},Q=K,U=(n("3e7b"),Object(o["a"])(Q,y,_,!1,null,"71968c1a",null));U.options.__file="Histogram.vue";var V=U.exports,Z={components:{Histogram:V},data(){return{xdata:[.9]}},methods:{add(){this.xdata.push(Math.random())}}},tt=Z,et=Object(o["a"])(tt,g,b,!1,null,null,null,!0);et.options.__file="Histogram.vue";var nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scatter-plot",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},it=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),t._l(t.dataX,function(e,a){return n("g",{key:a},[n("text",{attrs:{x:t.computeX(e),y:t.computeY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v("\n      "+t._s(e)+"\n    ")]),n("text",{attrs:{x:t.computeX(0)-15,y:t.computeY(t.dataY[a])+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v("\n      "+t._s(t.dataY[a])+"\n    ")]),n("circle",{staticClass:"hover",attrs:{cx:t.computeX(e),cy:t.computeY(t.dataY[a]),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=a},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex===index"}],attrs:{x1:t.computeX(0),y1:t.computeY(t.dataY[a]),x2:t.computeX(e),y2:t.computeY(t.dataY[a]),stroke:t.colorHighlighter,"stroke-dasharray":"5,5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex===index"}],attrs:{x1:t.computeX(e),y1:t.computeY(0),x2:t.computeX(e),y2:t.computeY(t.dataY[a]),stroke:t.colorHighlighter,"stroke-dasharray":"5,5"}})])})],2)},ot=[],st={mixins:[w],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data:function(){return{activeIndex:-1}},computed:{height:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataY))),e=this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataY))),n=t-e;return 0===n?1:n},width:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataX))),e=this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataX))),n=t-e;return 0===n?1:n}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G}},ct=st,lt=(n("2df2"),Object(o["a"])(ct,rt,ot,!1,null,"5c472ac3",null));lt.options.__file="Scatter.vue";var ut=lt.exports,dt={components:{ScatterPlot:ut},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},ht=dt,pt=Object(o["a"])(ht,at,it,!1,null,null,null,!0);pt.options.__file="ScatterPlot.vue";var xt=pt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("trendline",{attrs:{"label-x":"X Label","label-y":"Y Label","data-x":t.xdata,"data-y":t.ydata}})},mt=[],vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"plot",staticClass:"container"},[n("y-axis",{attrs:{ctx:this}}),n("x-axis",{attrs:{ctx:this}}),n("y-label",{attrs:{ctx:this}}),n("x-label",{attrs:{ctx:this}}),n("path",{attrs:{d:t.path,stroke:"black",fill:"transparent","stroke-width":"2"}}),t._l(t.dataX,function(e,a){return n("g",{key:a},[a%t.indexMultiplierX===0?n("text",{attrs:{x:t.computeX(e-t.minX),y:t.computeY(0)+20,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle"}},[t._v("\n      "+t._s(t._f("round")(e))+"\n    ")]):t._e(),a%t.indexMultiplierY===0?n("text",{attrs:{x:t.computeX(0)-15,y:t.computeY(t.dataY[a]-t.minY)+5,fill:t.colorIndex,"font-size":t.sizeIndex,"text-anchor":"middle","writing-mode":"tb-rl"}},[t._v("\n      "+t._s(t._f("round")(t.dataY[a]))+"\n    ")]):t._e(),n("circle",{staticClass:"hover",attrs:{cx:t.computeX(e-t.minX),cy:t.computeY(t.dataY[a]-t.minY),r:t.sizePoint,fill:t.colorPoint},on:{mouseover:function(e){t.activeIndex=a},mouseout:function(e){t.activeIndex=-1}}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex===index"}],attrs:{x1:t.computeX(0),y1:t.computeY(t.dataY[a]-t.minY),x2:t.computeX(e-t.minX),y2:t.computeY(t.dataY[a]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5,5"}}),n("line",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex===a,expression:"activeIndex===index"}],attrs:{x1:t.computeX(e-t.minX),y1:t.computeY(0),x2:t.computeX(e-t.minX),y2:t.computeY(t.dataY[a]-t.minY),stroke:t.colorHighlighter,"stroke-dasharray":"5,5"}})])})],2)},gt=[],bt={mixins:[w],props:{dataY:{type:Array,required:!0},colorPoint:{type:String,default:"black"},colorHighlighter:{type:String,default:"black"},sizePoint:{type:String,default:"5"}},data:function(){return{activeIndex:-1}},computed:{minX:function(){return this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataX)))},minY:function(){return this.safe(Math.min.apply(Math,Object(Y["a"])(this.dataY)))},height:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataY))),e=t-this.minY;return 0===e?1:e},width:function(){var t=this.safe(Math.max.apply(Math,Object(Y["a"])(this.dataX))),e=t-this.minX;return 0===e?1:e},path:function(){if(this.dataX.length<2)return"";var t=[],e=this.dataX,n=this.dataY;t.push("M".concat(this.computeX(e[0]-this.minX),",").concat(this.computeY(n[0]-this.minY)));for(var a=1;a<e.length;a++)t.push("L".concat(this.computeX(e[a]-this.minX),",").concat(this.computeY(n[a]-this.minY)));return t.join(" ")},indexMultiplierX:function(){return Math.ceil(this.dataX.length/this.nIndexX)},indexMultiplierY:function(){return Math.ceil(this.dataY.length/this.nIndexY)}},components:{YAxis:E,XAxis:O,XLabel:W,YLabel:G}},yt=bt,_t=(n("c7ae"),Object(o["a"])(yt,vt,gt,!1,null,"b3cb0588",null));_t.options.__file="Trendline.vue";var Yt=_t.exports,Xt={components:{Trendline:Yt},data(){return{xdata:[0,1,3,5],ydata:[0,7,3,5]}}},wt=Xt,It=Object(o["a"])(wt,ft,mt,!1,null,null,null,!0);It.options.__file="Trendline.vue";var Mt=It.exports;a["a"].use(d["a"]);var kt=new d["a"]({routes:[{path:"/",name:"home",component:v},{path:"/histogram",name:"histogram",component:nt},{path:"/scatter-plot",name:"scatter-plot",component:xt},{path:"/trendline",name:"trendline",component:Mt}]});a["a"].config.productionTip=!1,new a["a"]({router:kt,render:function(t){return t(u)}}).$mount("#app")},8524:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},a0fb:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.container{width:100%;height:100%\n}\n.hover:hover{opacity:.5;cursor:pointer\n}",""])},adbc:function(t,e,n){var a=n("4059");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("0ef93d24",a,!0,{sourceMap:!1,shadowMode:!1})},c7ae:function(t,e,n){"use strict";var a=n("0bcd"),i=n.n(a);i.a},d4fa:function(t,e,n){e=t.exports=n("2350")(!1),e.i(n("a0fb"),""),e.push([t.i,"",""])},e2a1:function(t,e,n){var a=n("3f8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("1f50beb8",a,!0,{sourceMap:!1,shadowMode:!1})},f188:function(t,e,n){var a=n("8524");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("c13563b8",a,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app-legacy.11ec2292.js.map