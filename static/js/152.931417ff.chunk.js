"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[152],{4673:function(n,e,r){r.d(e,{Z:function(){return c}});var t,a=r(168),i=r(5867).ZP.button(t||(t=(0,a.Z)(["\n  background-image: linear-gradient(\n    to right,\n    #485563 0%,\n    #29323c 51%,\n    #485563 100%\n  );\n  padding: 5px 25px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: white;\n  border-radius: 10px;\n  display: block;\n  cursor: pointer;\n\n  &:hover {\n    background-position: right center;\n    color: #fff;\n    text-decoration: none;\n  }\n"]))),s=r(184);var c=function(n){var e=n.children;return(0,s.jsx)(i,{children:e})}},2961:function(n,e,r){r.d(e,{Z:function(){return a}});r(2791);var t=r(184),a=function(n){var e=n.error;return(0,t.jsxs)("p",{className:"c-error",children:["Oops, some error occured. Please, try again later. Error: ",e]})}},1152:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,a,i,s,c,o,u,l,p,d,h,A,v,g=r(4165),f=r(5861),x=r(9439),m=r(2791),j=r(7689),b=r(1840),w=r(5354),Z=r(2961),y=r(2235),k=r(2804),P=r(168),H=r(5867),E=H.ZP.div(t||(t=(0,P.Z)(["\n  border-bottom: 1px solid #000000;\n  padding: 20px;\n  color: white;\n\n  @media (min-width: 768px) {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),\n      url(",");\n    background-size: cover;\n    background-position: center;\n\n    padding: 20px;\n    color: white;\n  }\n"])),(function(n){return n.backdropUrl})),B=H.ZP.div(a||(a=(0,P.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 20px;\n\n  img {\n    max-width: 100%;\n    border-radius: 5px;\n\n    @media (max-width: 767px) {\n      margin: 0 auto;\n      display: block;\n    }\n  }\n\n  @media (min-width: 768px) {\n    grid-template-columns: auto 1fr;\n    column-gap: 20px;\n    align-items: center;\n  }\n"]))),C=r(811),S=r(184),F=function(n){var e=n.movie,r=e.poster_path?"".concat(b.MH,"w300").concat(e.poster_path):y,t=e.backdrop_path?"".concat(b.MH,"w1280").concat(e.backdrop_path):null,a=e.release_date,i=Date.parse(a),s=(0,C.Z)(i)?(0,k.Z)(i,"yyyy"):"N/A",c=(0,C.Z)(i)?(0,k.Z)(i,"dd MMMM yyyy"):"N/A";return(0,S.jsxs)(E,{backdropUrl:t,children:[(0,S.jsxs)("h2",{children:[e.original_title," (",s,")"]}),(0,S.jsxs)(B,{children:[(0,S.jsx)("img",{src:r,alt:e.original_title}),(0,S.jsxs)("div",{children:[(0,S.jsx)("p",{children:(0,S.jsxs)("b",{children:["Rating: ",e.vote_average]})}),(0,S.jsx)("p",{children:(0,S.jsx)("i",{children:e.tagline})}),(0,S.jsx)("p",{children:(0,S.jsx)("strong",{children:"Overview"})}),(0,S.jsx)("p",{children:e.overview}),(0,S.jsx)("p",{children:(0,S.jsx)("strong",{children:"Genres"})}),(0,S.jsx)("ul",{children:e.genres.map((function(n){return(0,S.jsx)("li",{children:n.name},n.id)}))}),(0,S.jsxs)("p",{children:["Relise date:",c]}),(0,S.jsxs)("p",{children:["Duration: ",e.runtime," min"]})]})]})]})},O=H.ZP.div(i||(i=(0,P.Z)(["\n  padding: 0 20px;\n  color: white;\n"]))),U=H.ZP.ul(s||(s=(0,P.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 20px;\n  margin-top: 20px;\n  list-style: none;\n  padding: 0;\n"]))),z=H.ZP.li(c||(c=(0,P.Z)(["\n  text-align: center;\n"]))),I=H.ZP.div(o||(o=(0,P.Z)(["\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 5px;\n  }\n"]))),X=H.ZP.div(u||(u=(0,P.Z)(["\n  margin-top: 5px;\n"]))),D=function(){var n=(0,j.UO)().movieId,e=(0,m.useState)(!1),r=(0,x.Z)(e,2),t=r[0],a=r[1],i=(0,m.useState)(null),s=(0,x.Z)(i,2),c=s[0],o=s[1],u=(0,m.useState)(null),l=(0,x.Z)(u,2),p=l[0],d=l[1];return(0,m.useEffect)((function(){var e=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(){var r;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,a(!0),e.next=6,(0,b.Gc)(n);case 6:r=e.sent,d(r),console.log("castDetails",r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),o(e.t0.message);case 14:return e.prev=14,a(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,S.jsxs)(S.Fragment,{children:[t&&(0,S.jsx)(w.Z,{}),null!==c&&(0,S.jsx)(Z.Z,{error:c}),null!==p&&(0,S.jsxs)(O,{children:[(0,S.jsx)("h3",{children:"Cast"}),(0,S.jsx)(U,{children:p.cast.map((function(n){var e=n.profile_path?"".concat(b.MH,"w185").concat(n.profile_path):1===n.gender?"data:image/png;base64,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":"data:image/png;base64,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";return(0,S.jsxs)(z,{children:[(0,S.jsx)(I,{children:(0,S.jsx)("img",{src:e,alt:"actor"})}),(0,S.jsxs)(X,{children:[(0,S.jsx)("p",{children:(0,S.jsx)("b",{children:n.name})}),(0,S.jsxs)("p",{children:["Caracter: ",n.character]})]})]},n.id)}))})]})]})},G=H.ZP.div(l||(l=(0,P.Z)(["\n  padding: 0 20px;\n  color: white;\n"]))),K=function(){var n=(0,j.UO)().movieId,e=(0,m.useState)(!1),r=(0,x.Z)(e,2),t=r[0],a=r[1],i=(0,m.useState)(null),s=(0,x.Z)(i,2),c=s[0],o=s[1],u=(0,m.useState)(null),l=(0,x.Z)(u,2),p=l[0],d=l[1];(0,m.useEffect)((function(){var e=function(){var e=(0,f.Z)((0,g.Z)().mark((function e(){var r;return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,a(!0),e.next=6,(0,b.F)(n);case 6:r=e.sent,d(r),console.log("reviewDetails",r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),o(e.t0.message);case 14:return e.prev=14,a(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var h=null!==p&&Array.isArray(p.results)&&p.results.length>0;return(0,S.jsxs)(G,{children:[t&&(0,S.jsx)(w.Z,{}),null!==c&&(0,S.jsx)(Z.Z,{error:c}),(0,S.jsx)("h3",{children:"Reviews"}),h?(0,S.jsx)("ul",{children:p.results.map((function(n){return(0,S.jsxs)("li",{children:[(0,S.jsx)("p",{children:(0,S.jsx)("b",{children:n.author})}),(0,S.jsx)("p",{children:n.content}),(0,S.jsx)("p",{children:(0,k.Z)(Date.parse(n.updated_at),"dd MMMM yyyy")})]},n.id)}))}):(0,S.jsx)("p",{children:"We don`t have any reviews for this movie..."})]})},R=r(4673),M=r(1087),Y=H.ZP.div(p||(p=(0,P.Z)(["\n  padding: 0 20px;\n  color: white;\n"]))),W=H.ZP.ul(d||(d=(0,P.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  display: flex;\n  gap: 20px;\n  padding-bottom: 20px;\n"]))),N=(0,H.ZP)(M.OL)(h||(h=(0,P.Z)(["\n  display: block;\n  text-decoration: none;\n"]))),T=function(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Y,{children:[(0,S.jsx)("h2",{children:" Additional information"}),(0,S.jsxs)(W,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(N,{to:"cast",children:(0,S.jsx)(R.Z,{type:"button",children:"Cast"})})}),(0,S.jsx)("li",{children:(0,S.jsx)(N,{to:"reviews",children:(0,S.jsx)(R.Z,{type:"button",children:"Reviews"})})})]})]}),(0,S.jsxs)(j.Z5,{children:[(0,S.jsx)(j.AW,{path:"cast",element:(0,S.jsx)(D,{})}),(0,S.jsx)(j.AW,{path:"reviews",element:(0,S.jsx)(K,{})})]})]})},J=r(2363),Q=H.ZP.main(A||(A=(0,P.Z)(["\n  background-color: gray;\n  background-image: url('","');\n  background-position: center;\n  background-size: auto;\n"])),J),q=(0,H.ZP)(M.rU)(v||(v=(0,P.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  margin-left: 20px;\n  margin-bottom: 1em;\n"]))),L=function(){var n,e,r=(0,j.UO)().movieId,t=(0,m.useState)(!1),a=(0,x.Z)(t,2),i=a[0],s=a[1],c=(0,m.useState)(null),o=(0,x.Z)(c,2),u=o[0],l=o[1],p=(0,m.useState)(null),d=(0,x.Z)(p,2),h=d[0],A=d[1],v=(0,j.TH)(),y=(0,m.useRef)(null!==(n=null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,m.useEffect)((function(){var n=function(){var n=(0,f.Z)((0,g.Z)().mark((function n(){var e;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,s(!0),n.next=6,(0,b.Pg)(r);case 6:e=n.sent,A(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),l(n.t0.message);case 13:return n.prev=13,s(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,S.jsxs)(Q,{children:[i&&(0,S.jsx)(w.Z,{}),null!==u&&(0,S.jsx)(Z.Z,{error:u}),(0,S.jsx)(q,{to:y.current,children:(0,S.jsx)(R.Z,{type:"button",children:"Go back"})}),null!==h&&(0,S.jsx)(F,{movie:h}),(0,S.jsx)(T,{})]})}},1840:function(n,e,r){r.d(e,{F:function(){return p},Gc:function(){return l},MH:function(){return s},Pg:function(){return u},Ph:function(){return d},rj:function(){return o}});var t=r(4165),a=r(5861),i=r(1243),s="http://image.tmdb.org/t/p/",c="2a40eee025ae191ba82a449107daf37f";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/movie/day",{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("search/movie",{params:{api_key:c,language:"en-US",query:e}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},2235:function(n,e,r){n.exports=r.p+"static/media/affiche_nondisponible.b93b25a7a4e038e311d3.jpg"},2363:function(n,e,r){n.exports=r.p+"static/media/wallpaperbetter.com_2560x1440 (1).5ec474cb30f06f781cfd.jpg"}}]);
//# sourceMappingURL=152.931417ff.chunk.js.map