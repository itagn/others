webpackJsonp([1],{"/K91":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(t){n("y9vr")},null,null).exports,a=n("/ocq"),s=n("Zrlr"),c=n.n(s),u=function t(e,n,i,r,o,a){c()(this,t),this.x=e,this.y=n,this.r=i,this.moveX=r,this.moveY=o,this.colors=a};function l(t,e,n,i,r,o){t.beginPath(),t.strokeStyle="rgba(255, 0, 0, "+o+")",t.moveTo(e,n),t.lineTo(i,r),t.closePath(),t.stroke()}function h(t,e){return Math.random()*(t-e)+e|0}var m={name:"VueLove",props:{pData:{call:{type:String},time:{type:String}}},data:function(){return{timeLen:[864e5,36e5,6e4,1e3]}},computed:{meetDom:function(){return document.querySelector("#meet")},initDate:function(){return new Date(this.pData.time).getTime()}},mounted:function(){this.initDom(),this.initEvent()},methods:{showTime:function(){var t=(new Date).getTime()-this.initDate,e=t/this.timeLen[0]|0,n=(t-e*this.timeLen[0])/this.timeLen[1]|0,i=(t-e*this.timeLen[0]-n*this.timeLen[1])/this.timeLen[2]|0,r=" "+e+"天 "+n+"时 "+i+"分 "+((t-e*this.timeLen[0]-n*this.timeLen[1]-i*this.timeLen[2])/this.timeLen[3]|0)+"秒";this.meetDom.innerText=r},loop:function(){var t=this;setTimeout(function(){t.initDom()},1e3)},initDom:function(){this.showTime(),this.loop()},loveing:function(t,e,n){var i=document.createElement("i");i.className="love",i.style.position="absolute",i.style.left=t+"px",i.style.top=e+"px",n.appendChild(i),setTimeout(function(){n.removeChild(i)},800)},initEvent:function(){var t=this,e=document.querySelector(".container");document.body.addEventListener("touchstart",function(n){var i=n.touches[0],r=i.pageX-50,o=i.pageY-50;t.loveing(r,o,e)}),document.body.addEventListener("touchend",function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}),document.body.addEventListener("click",function(t){var n=t.clientX,i=t.clientY;loveing(n-50,i-50,e)});var n=document.querySelector("#canvas"),i=window.innerWidth,r=window.innerHeight;n.width=i,n.height=r;var o=n.getContext("2d"),a=[],s=35;window.innerWidth<780?s=15:window.innerWidth<1280&&(s=25),function(t){for(var e=t.POINT,n=t.WIDTH,i=t.HEIGHT,r=t.maxR,o=t.minR,a=t.circleArr,s=0;s<e;s++){var c=new u(h(n,0),h(i,0),h(r,o),h(10,-10)/40,h(10,-10)/40,[255,0,0]);a.push(c)}}({POINT:s,WIDTH:i,HEIGHT:r,maxR:15,minR:5,circleArr:a}),requestAnimationFrame(function t(){!function(t){var e,n,i,r,o,a=t.context,s=t.canvas,c=t.POINT,u=t.WIDTH,h=t.HEIGHT,m=t.circleArr;a.clearRect(0,0,s.width,s.height);for(var v=0;v<c;v++){m[v].x+=m[v].moveX,m[v].y+=m[v].moveY,m[v].x>u?m[v].x=0:m[v].x<0&&(m[v].x=u),m[v].y>h?m[v].y=0:m[v].y<0&&(m[v].y=h),e=a,n=m[v].x,i=m[v].y,r=m[v].r,o=m[v].colors,e.fillStyle="rgba("+o[0]+", "+o[1]+", "+o[2]+", 0.15)",e.beginPath(),e.arc(n,i,r,0,2*Math.PI),e.closePath(),e.fill();for(var d=0;d<c-v;d++){var p=Math.abs(m[v+d].x-m[v].x),f=Math.abs(m[v+d].y-m[v].y),y=c/Math.sqrt(p*p+f*f)-.09,x=y>.15?.15:y;x>0&&l(a,m[v].x,m[v].y,m[v+d].x,m[v+d].y,x)}}}({context:o,canvas:n,POINT:s,WIDTH:i,HEIGHT:r,circleArr:a}),requestAnimationFrame(t)})}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"canvas"}}),this._v(" "),e("div",{staticClass:"container"},[e("i",{staticClass:"love heart"}),this._v(" "),e("div",{staticClass:"main"},[e("p",[this._v(this._s(this.pData.call))]),this._v(" "),e("p",{attrs:{id:"meet"}})])])])},staticRenderFns:[]};var d={name:"Demo",components:{Ilove:n("VU/8")(m,v,!1,function(t){n("/K91")},null,null).exports},data:function(){return{pData:{call:"杉原和zm相恋",time:"2017/12/25 00:00:00"}}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ilove",{attrs:{pData:this.pData}})],1)},staticRenderFns:[]};var f=n("VU/8")(d,p,!1,function(t){n("qh21")},"data-v-3fdf379f",null).exports;i.a.use(a.a);var y=new a.a({mode:"history",routes:[{path:"*",name:"demo",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:y,components:{App:o},template:"<App/>"})},qh21:function(t,e){},y9vr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92a3620e488b13bb722b.js.map