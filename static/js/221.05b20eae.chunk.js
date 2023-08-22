"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{2961:function(e,r,n){n.d(r,{Z:function(){return a}});n(2791);var t=n(184),a=function(e){var r=e.error;return(0,t.jsxs)("p",{className:"c-error",children:["Oops, some error occured. Please, try again later. Error: ",r]})}},2178:function(e,r,n){n.d(r,{Z:function(){return x}});n(2791);var t,a,s,u=n(7689),c=n(1840),o=n(2804),i=n(2235),p=n(168),l=n(1087),d=n(5867),f=d.ZP.li(t||(t=(0,p.Z)(["\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #000000;\n  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  p {\n    color: white;\n  }\n"]))),h=(0,d.ZP)(l.rU)(a||(a=(0,p.Z)(["\n  text-decoration: none;\n"]))),v=n(184),m=function(e){var r=e.movie,n=r.poster_path?"".concat(c.MH,"w300").concat(r.poster_path):i,t=r.release_date?(0,v.jsx)("p",{children:(0,o.Z)(Date.parse(r.release_date),"dd MMMM yyyy")}):null,a=(0,u.TH)();return(0,v.jsxs)(f,{children:[(0,v.jsxs)(h,{state:{from:a},to:"/movies/".concat(r.id),children:[(0,v.jsx)("img",{src:n,alt:r.original_title}),(0,v.jsx)("p",{children:(0,v.jsx)("strong",{children:r.original_title})})]},r.id),t]})},g=d.ZP.ul(s||(s=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n  list-style: none;\n  padding: 0 40px;\n"]))),x=function(e){var r=e.movies,n=Array.isArray(r)&&r.length>0;return(0,v.jsx)(g,{children:n&&r.map((function(e){return(0,v.jsx)(m,{movie:e},e.id)}))})}},9221:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t,a=n(4165),s=n(5861),u=n(9439),c=n(2791),o=n(1840),i=n(5354),p=n(2961),l=n(2178),d=n(168),f=n(5867).ZP.h1(t||(t=(0,d.Z)(["\n  padding: 0 40px;\n  color: white;\n"]))),h=n(184),v=function(){var e=(0,c.useState)(!1),r=(0,u.Z)(e,2),n=r[0],t=r[1],d=(0,c.useState)(null),v=(0,u.Z)(d,2),m=v[0],g=v[1],x=(0,c.useState)(null),Z=(0,u.Z)(x,2),w=Z[0],y=Z[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(!0),e.next=4,(0,o.rj)();case 4:r=e.sent,y(r.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),g(e.t0.message);case 11:return e.prev=11,t(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,h.jsxs)("main",{children:[(0,h.jsx)(f,{children:"Trending today"}),null!==m&&(0,h.jsx)(p.Z,{error:m}),n&&(0,h.jsx)(i.Z,{}),(0,h.jsx)(l.Z,{movies:w})]})}},1840:function(e,r,n){n.d(r,{F:function(){return l},Gc:function(){return p},MH:function(){return u},Pg:function(){return i},Ph:function(){return d},rj:function(){return o}});var t=n(4165),a=n(5861),s=n(1243),u="http://image.tmdb.org/t/p/",c="2a40eee025ae191ba82a449107daf37f";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day",{params:{api_key:c,language:"en-US"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("search/movie",{params:{api_key:c,language:"en-US",query:r}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},2235:function(e,r,n){e.exports=n.p+"static/media/affiche_nondisponible.b93b25a7a4e038e311d3.jpg"}}]);
//# sourceMappingURL=221.05b20eae.chunk.js.map