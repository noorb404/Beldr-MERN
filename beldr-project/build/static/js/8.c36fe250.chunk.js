(this["webpackJsonpbeldr-project"]=this["webpackJsonpbeldr-project"]||[]).push([[8],{183:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(181),n=c.n(a),r=c(182),s=c(58),i=c(0),o=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(),l=Object(s.a)(o,2),j=l[0],d=l[1],u=Object(i.useRef)([]),b=Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,o,l,j=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j.length>1&&void 0!==j[1]?j[1]:"GET",r=j.length>2&&void 0!==j[2]?j[2]:null,s=j.length>3&&void 0!==j[3]?j[3]:{},a(!0),i=new AbortController,u.current.push(i),e.prev=6,e.next=9,fetch(t,{method:c,body:r,headers:s,signal:i.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(l=e.sent,u.current=u.current.filter((function(e){return e!==i})),o.ok){e.next=16;break}throw new Error(l.message);case 16:return a(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:c,error:j,sendRequest:b}}},184:function(e,t,c){"use strict";var a=c(2);c(0),c(185);t.a=function(e){return Object(a.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(a.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})}},185:function(e,t,c){},186:function(e,t,c){"use strict";var a=c(1),n=c(6),r=c(13),s=c.n(r),i=c(0),o=c.n(i),l=c(17),j=o.a.forwardRef((function(e,t){var c=e.bsPrefix,r=e.fluid,i=e.as,j=void 0===i?"div":i,d=e.className,u=Object(n.a)(e,["bsPrefix","fluid","as","className"]),b=Object(l.a)(c,"container"),h="string"===typeof r?"-"+r:"-fluid";return o.a.createElement(j,Object(a.a)({ref:t},u,{className:s()(d,r?""+b+h:b)}))}));j.displayName="Container",j.defaultProps={fluid:!1},t.a=j},191:function(e,t,c){},192:function(e,t,c){},193:function(e,t,c){"use strict";var a=c(1),n=c(6),r=c(13),s=c.n(r),i=c(0),o=c.n(i),l=c(17),j=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var c=e.bsPrefix,r=e.className,i=e.noGutters,d=e.as,u=void 0===d?"div":d,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(l.a)(c,"row"),O=h+"-cols",p=[];return j.forEach((function(e){var t,c=b[e];delete b[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=c&&"object"===typeof c?c.cols:c)&&p.push(""+O+a+"-"+t)})),o.a.createElement(u,Object(a.a)({ref:t},b,{className:s.a.apply(void 0,[r,h,i&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},194:function(e,t,c){"use strict";var a=c(1),n=c(6),r=c(13),s=c.n(r),i=c(0),o=c.n(i),l=c(17),j=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,t){var c=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"div":i,u=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(l.a)(c,"col"),h=[],O=[];return j.forEach((function(e){var t,c,a,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var r=n.span;t=void 0===r||r,c=n.offset,a=n.order}else t=n;var s="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+b+s:""+b+s+"-"+t),null!=a&&O.push("order"+s+"-"+a),null!=c&&O.push("offset"+s+"-"+c)})),h.length||h.push(b),o.a.createElement(d,Object(a.a)({},u,{ref:t,className:s.a.apply(void 0,[r].concat(h,O))}))}));d.displayName="Col",t.a=d},199:function(e,t,c){"use strict";var a=c(2),n=c(0),r=c.n(n),s=c(181),i=c.n(s),o=c(182),l=c(203),j=c(233),d=c(10),u=c(81),b=c(183),h=c(59),O=c(91),p=(c(191),function(e){var t=Object(n.useContext)(h.a),c=Object(d.g)(),r=Object(b.a)(),s=r.isLoading,p=r.sendRequest,m=function(){var a=Object(o.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p("https://bledr.herokuapp.com/api"+"/jobs/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 3:c.push("/".concat(t.userId,"/profile")),e.onDelete(e.id),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();return Object(a.jsx)("li",{className:"jobs-item",children:Object(a.jsxs)(l.a,{id:"ere2",children:[s&&Object(a.jsx)(O.a,{asOverlay:!0}),Object(a.jsxs)(l.a.Content,{children:[Object(a.jsxs)(l.a.Header,{children:[e.title," Job"]}),Object(a.jsx)(l.a.Meta,{style:{color:"#f7aa67"},children:e.address}),Object(a.jsxs)(l.a.Description,{children:[e.description," ",Object(a.jsxs)("strong",{children:[e.price,"\u20aa"]})]})]}),Object(a.jsx)(l.a.Content,{extra:!0,children:t.userId===e.creator&&Object(a.jsxs)("div",{id:"ere",className:"ui two buttons",children:[Object(a.jsx)(j.a,{basic:!0,color:"orange",children:Object(a.jsx)(u.b,{className:"updateDelete",to:"/".concat(t.userId,"/profile/update-job/").concat(e.id),children:"Update"})}),Object(a.jsx)(j.a,{onClick:m,basic:!0,color:"orange",children:Object(a.jsx)(u.b,{className:"updateDelete",children:"Delete"})})]})})]})})}),m=(c(192),function(e){return Object(a.jsx)(l.a,{children:Object(a.jsxs)(l.a.Content,{children:[Object(a.jsx)(l.a.Header,{style:{color:"orange"},children:e.title}),Object(a.jsx)(l.a.Meta,{children:e.address}),Object(a.jsxs)(l.a.Description,{children:[e.description,"  ",Object(a.jsxs)("strong",{style:{color:"green"},children:[" ",e.price,"\u20aa"]})]})]})})});t.a=function(e){return 0===e.items.length?Object(a.jsx)("div",{className:"text-center p-3 mt-5",children:Object(a.jsx)("h2",{children:"No Jobs found."})}):Object(a.jsx)(r.a.Fragment,{children:"PROFILE"===e.position?Object(a.jsx)("ul",{className:"jobs-list",children:e.items.map((function(t){return Object(a.jsx)(p,{id:t.id,image:t.image,title:t.title,price:t.price,description:t.description,address:t.address,creator:t.creator,onDelete:e.onDeleteJob},t.id)}))}):Object(a.jsx)(l.a.Group,{children:e.items.slice(0,3).map((function(e){return Object(a.jsx)(m,{id:e.id,image:e.image,title:e.title,price:e.price,description:e.description,address:e.address,creator:e.creator},e.id)}))})})}},203:function(e,t,c){"use strict";c.d(t,"a",(function(){return E}));var a=c(1),n=c(5),r=c(3),s=(c(7),c(0)),i=c.n(s),o=c(15),l=c(69),j=c(70),d=c(4),u=c(126),b=c(115);function h(e){var t=e.children,c=e.className,n=e.content,s=e.textAlign,u=Object(r.a)(Object(o.d)(s),"description",c),b=Object(l.a)(h,e),O=Object(j.a)(h,e);return i.a.createElement(O,Object(a.a)({},b,{className:u}),d.a.isNil(t)?n:t)}h.handledProps=["as","children","className","content","textAlign"],h.propTypes={};var O=h;function p(e){var t=e.children,c=e.className,n=e.content,s=e.textAlign,u=Object(r.a)(Object(o.d)(s),"header",c),b=Object(l.a)(p,e),h=Object(j.a)(p,e);return i.a.createElement(h,Object(a.a)({},b,{className:u}),d.a.isNil(t)?n:t)}p.handledProps=["as","children","className","content","textAlign"],p.propTypes={};var m=p;function f(e){var t=e.children,c=e.className,n=e.content,s=e.textAlign,u=Object(r.a)(Object(o.d)(s),"meta",c),b=Object(l.a)(f,e),h=Object(j.a)(f,e);return i.a.createElement(h,Object(a.a)({},b,{className:u}),d.a.isNil(t)?n:t)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var x=f;function v(e){var t=e.children,c=e.className,n=e.content,s=e.description,u=e.extra,h=e.header,p=e.meta,f=e.textAlign,g=Object(r.a)(Object(o.a)(u,"extra"),Object(o.d)(f),"content",c),N=Object(l.a)(v,e),y=Object(j.a)(v,e);return d.a.isNil(t)?d.a.isNil(n)?i.a.createElement(y,Object(a.a)({},N,{className:g}),Object(b.d)(m,(function(e){return{content:e}}),h,{autoGenerateKey:!1}),Object(b.d)(x,(function(e){return{content:e}}),p,{autoGenerateKey:!1}),Object(b.d)(O,(function(e){return{content:e}}),s,{autoGenerateKey:!1})):i.a.createElement(y,Object(a.a)({},N,{className:g}),n):i.a.createElement(y,Object(a.a)({},N,{className:g}),t)}v.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],v.propTypes={};var g=v,N=c(92);function y(e){var t=e.centered,c=e.children,n=e.className,s=e.content,u=e.doubling,b=e.items,h=e.itemsPerRow,O=e.stackable,p=e.textAlign,m=Object(r.a)("ui",Object(o.a)(t,"centered"),Object(o.a)(u,"doubling"),Object(o.a)(O,"stackable"),Object(o.d)(p),Object(o.g)(h),"cards",n),f=Object(l.a)(y,e),x=Object(j.a)(y,e);if(!d.a.isNil(c))return i.a.createElement(x,Object(a.a)({},f,{className:m}),c);if(!d.a.isNil(s))return i.a.createElement(x,Object(a.a)({},f,{className:m}),s);var v=Object(N.a)(b,(function(e){var t=e.key||[e.header,e.description].join("-");return i.a.createElement(E,Object(a.a)({key:t},e))}));return i.a.createElement(x,Object(a.a)({},f,{className:m}),v)}y.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],y.propTypes={};var k=y,E=function(e){function t(){for(var t,c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){var c=t.props.onClick;c&&c(e,t.props)},t}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,c=e.centered,n=e.children,s=e.className,b=e.color,h=e.content,O=e.description,p=e.extra,m=e.fluid,f=e.header,x=e.href,v=e.image,N=e.link,y=e.meta,k=e.onClick,E=e.raised,w=Object(r.a)("ui",b,Object(o.a)(c,"centered"),Object(o.a)(m,"fluid"),Object(o.a)(N,"link"),Object(o.a)(E,"raised"),"card",s),C=Object(l.a)(t,this.props),P=Object(j.a)(t,this.props,(function(){if(k)return"a"}));return d.a.isNil(n)?d.a.isNil(h)?i.a.createElement(P,Object(a.a)({},C,{className:w,href:x,onClick:this.handleClick}),u.a.create(v,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(O||f||y)&&i.a.createElement(g,{description:O,header:f,meta:y}),p&&i.a.createElement(g,{extra:!0},p)):i.a.createElement(P,Object(a.a)({},C,{className:w,href:x,onClick:this.handleClick}),h):i.a.createElement(P,Object(a.a)({},C,{className:w,href:x,onClick:this.handleClick}),n)},t}(s.Component);E.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],E.propTypes={},E.Content=g,E.Description=O,E.Group=k,E.Header=m,E.Meta=x},208:function(e,t,c){},234:function(e,t,c){"use strict";c.r(t);var a=c(181),n=c.n(a),r=c(182),s=c(58),i=c(2),o=c(0),l=c(91),j=c(183),d=c(10),u=c(186),b=c(193),h=c(194),O=c(184),p=(c(208),c(81)),m=c(199),f=function(e){var t=Object(o.useState)(),c=Object(s.a)(t,2),a=c[0],b=c[1],h=Object(j.a)(),O=h.isLoading,p=h.sendRequest,f=Object(d.h)().userId;Object(o.useEffect)((function(){try{(function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("https://bledr.herokuapp.com/api"+"/jobs/user/".concat(f));case 2:t=e.sent,b(t.jobs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){console.log(e.message)}}),[p,f]);return Object(i.jsxs)(u.a,{children:[O&&Object(i.jsxs)("div",{className:"text-center",children:[" ",Object(i.jsx)(l.a,{})]}),!O&&a&&Object(i.jsx)(m.a,{position:e.position,onDeleteJob:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))},items:a})]})},x=c(233),v=c(55),g=c(59),N=function(e){var t=Object(o.useContext)(g.a);return Object(i.jsxs)(u.a,{className:"form-container p-3",children:[Object(i.jsxs)(b.a,{children:[Object(i.jsx)(h.a,{}),Object(i.jsx)(h.a,{sm:12,children:Object(i.jsx)("div",{className:"user-profile__info text-center",children:Object(i.jsx)("h2",{children:e.user.name.slice(0,1).toUpperCase()+e.user.name.slice(1,e.user.name.length)})})}),Object(i.jsx)(h.a,{})]}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(h.a,{}),Object(i.jsxs)(h.a,{children:[Object(i.jsx)("div",{className:"user-profile__image",children:Object(i.jsx)(O.a,{image:"".concat("https://bledr.herokuapp.com","/").concat(e.user.image),alt:e.user.name})}),e.user.id===t.userId&&Object(i.jsxs)(b.a,{className:"text-center",children:[Object(i.jsx)(x.a,{onClick:function(){},title:"Settings",size:"mini",circular:!0,icon:"settings"}),Object(i.jsx)("h5",{id:"h5css",className:"h5css pt-1",children:"Edit Profile Settings"})]})]}),Object(i.jsx)(h.a,{})]}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(h.a,{}),Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"user-profile__info text-center",children:[Object(i.jsx)("hr",{}),Object(i.jsxs)("h3",{children:[Object(i.jsxs)("strong",{style:{color:"green"},children:[" ",e.user.phone," "]})," "]}),Object(i.jsxs)("h3",{children:[Object(i.jsxs)("strong",{children:[" ",e.user.address.slice(0,1).toUpperCase()+e.user.address.slice(1,e.user.address.length)]}),"  "]})]})}),Object(i.jsx)(h.a,{})]}),Object(i.jsx)(b.a,{children:Object(i.jsxs)("div",{className:"text-center pt-3",style:{width:"100%"},children:[Object(i.jsxs)(x.a,{size:"mini",color:"facebook",children:[Object(i.jsx)(v.a,{name:"facebook"})," Facebook"]}),Object(i.jsxs)(x.a,{size:"mini",color:"instagram",children:[Object(i.jsx)(v.a,{name:"instagram"})," Instagram"]}),Object(i.jsxs)(x.a,{size:"mini",color:"youtube",children:[Object(i.jsx)(v.a,{name:"youtube"})," Youtube"]})]})}),Object(i.jsx)("hr",{}),e.user.jobs.length>0?Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{children:Object(i.jsx)(h.a,{children:Object(i.jsxs)("h3",{className:"h3css pb-3 text-center",children:["Open Jobs (",e.user.jobs.length,")"]})})}),Object(i.jsx)(b.a,{children:Object(i.jsx)(f,{position:"PROFILE"})})," "]}):Object(i.jsx)("h3",{className:"h3css pb-3 text-center",children:"there is no current open Jobs"}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(h.a,{}),Object(i.jsx)(h.a,{md:3,sm:6,xs:6,className:"p-4",children:e.user.id===t.userId&&Object(i.jsx)(p.b,{to:"/".concat(e.user.id,"/profile/add-job"),children:Object(i.jsx)("button",{style:{width:"100%"},className:"btn btn-primary text-center",children:"Add a job"})})}),Object(i.jsx)(h.a,{})]})]})};t.default=function(e){var t=Object(o.useState)(),c=Object(s.a)(t,2),a=c[0],u=c[1],b=Object(j.a)(),h=b.isLoading,O=b.sendRequest,p=Object(d.h)().userId;return Object(o.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("https://bledr.herokuapp.com/api"+"/users/".concat(p));case 3:t=e.sent,u(t.userById),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[O,p]),Object(i.jsxs)("main",{style:{background:"lightgray",paddingBottom:"5em"},children:[h&&Object(i.jsxs)("div",{className:"text-center",children:[" ",Object(i.jsx)(l.a,{})]}),!h&&a&&Object(i.jsx)(N,{user:a})]})}}}]);
//# sourceMappingURL=8.c36fe250.chunk.js.map