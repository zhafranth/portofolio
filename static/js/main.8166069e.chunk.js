(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{104:function(e,a,t){e.exports=t(162)},109:function(e,a,t){},162:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(18),c=t.n(r),o=t(86),i=t(87),m=t(102),s=t(101),p=t(164),E=t(166),d=t(167),u=t(45),g=t(28),h=t(165),f=t(69),v=t.n(f),N=(t(109),t(52)),k=t.n(N),y=t(32),b=t.n(y),w=t(88),I=t.n(w),x=t(89),S=t.n(x),D=t(90),C=t.n(D),L=t(44),T=t(76),O=t(75),j=t(53),J=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l)))._handleScrollSkill=function(){window.scrollTo({behavior:"smooth",top:650})},e._handleScrollPortofolio=function(){window.scrollTo({behavior:"smooth",top:1050})},e._handleScrollExperience=function(){window.scrollTo({behavior:"smooth",top:1820})},e._handleScrollContact=function(){window.scrollTo({behavior:"smooth",top:2290})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=p.a.Header,a=p.a.Content,t=p.a.Footer,n=E.a.Meta;return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,{style:{backgroundColor:"transparent"}},l.a.createElement(e,{className:"header"},l.a.createElement(k.a,{top:!0},l.a.createElement("img",{src:v.a,alt:""})),l.a.createElement(b.a,{top:!0,delay:300},l.a.createElement(d.a,{mode:"horizontal"},l.a.createElement(d.a.Item,{key:"1"},l.a.createElement("button",{type:"button",onClick:this._handleScrollSkill},"Skills")),l.a.createElement(d.a.Item,{key:"2"},l.a.createElement("button",{type:"button",onClick:this._handleScrollPortofolio},"Portofolio")),l.a.createElement(d.a.Item,{key:"3"},l.a.createElement("button",{type:"button",onClick:this._handleScrollExperience},"Experience")),l.a.createElement(d.a.Item,{key:"4"},l.a.createElement("button",{type:"button",onClick:this._handleScrollContact},"Contact"))))),l.a.createElement(a,{className:"content"},l.a.createElement(u.a,{justify:"space-between"},l.a.createElement(g.a,{md:10,sm:20},l.a.createElement("div",{className:"content-hero"},l.a.createElement(b.a,{delay:300,left:!0},l.a.createElement("h1",null,"Zhafran Tharif.")),l.a.createElement(b.a,{delay:300,left:!0},l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"content-icon "},l.a.createElement(b.a,{delay:300,left:!0},l.a.createElement(O.a,null)),l.a.createElement(b.a,{delay:350,left:!0},l.a.createElement(T.a,null)),l.a.createElement(b.a,{delay:400,left:!0},l.a.createElement(L.a,null))))),l.a.createElement(g.a,{md:10,sm:20},l.a.createElement("div",{className:"content-hero-right"},l.a.createElement(b.a,{delay:300,right:!0},l.a.createElement("p",null,"-Introduction"),l.a.createElement("h2",null,"Frontend Developer, UI/UX Designer, based in"," ",l.a.createElement("span",null,"Jakarta")))))),l.a.createElement("div",{className:"lingkaran"},l.a.createElement(k.a,{right:!0,delay:300,speed:"2000s"},l.a.createElement("div",{className:"lingkaran1"},l.a.createElement("img",{src:I.a,alt:"Lingkarang Hero 1"}))),l.a.createElement(k.a,{right:!0,delay:500,speed:"2000s"},l.a.createElement("div",{className:"lingkaran2"},l.a.createElement("img",{src:S.a,alt:"Lingkarang Hero 2"}))),l.a.createElement(k.a,{right:!0,delay:700,speed:"2000s"},l.a.createElement("div",{className:"lingkaran3"},l.a.createElement("img",{src:C.a,alt:"Lingkarang Hero 3"})))),l.a.createElement("section",{className:"skill-content"},l.a.createElement("h1",null,"Skills"),l.a.createElement("div",{className:"line-skills"}),l.a.createElement("div",{className:"cards-skill"},l.a.createElement(u.a,{justify:"space-between"},j.skills.map((function(e,a){return l.a.createElement(g.a,{md:7,sm:18},l.a.createElement(b.a,{delay:300*a,bottom:!0},l.a.createElement(E.a,{key:"item-".concat(a),className:"card-skills",hoverable:!0,cover:l.a.createElement("img",{src:e.image,alt:"Web Development"})},l.a.createElement(n,{description:e.description,title:e.title}))))}))))),l.a.createElement("section",{className:"portofolio"},l.a.createElement("h1",null,"Portofolio"),l.a.createElement("div",{className:"line-skills"}),l.a.createElement("div",{className:"portofolio-content"},l.a.createElement(u.a,null,j.portofolio.map((function(e,a){return l.a.createElement(g.a,{span:24,className:"colom-portofolio"},l.a.createElement(u.a,{justify:"space-between"},l.a.createElement(g.a,{md:14,sm:15},l.a.createElement(h.a,{autoplay:!0},e.image.map((function(e,a){return l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{src:e.img,alt:"kattamata",className:"img-cover"}))})))),l.a.createElement(g.a,{md:8,sm:10},l.a.createElement("div",{className:"meta-portofolio"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.role),l.a.createElement("h3",null,e.description)))))}))))),l.a.createElement("section",{className:"experience"},l.a.createElement("h1",null,"Experience"),l.a.createElement("div",{className:"line-skills"}),l.a.createElement("div",{className:"experience-content"},l.a.createElement(u.a,{justify:"space-between"},j.experience.map((function(e,a){return l.a.createElement(g.a,{md:7,sm:24,key:"experience-".concat(a)},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"card-experience"},l.a.createElement("h2",null,e.year),l.a.createElement("h3",null,e.month),l.a.createElement("p",null,e.status),l.a.createElement("h4",null,e.role),l.a.createElement("h5",null,e.office)),l.a.createElement("div",{className:"circle"})))}))))),l.a.createElement("section",{className:"contact"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"line-skills"}),l.a.createElement("div",{className:"contact-content"},j.contact.map((function(e,a){return l.a.createElement("div",{className:"contact-item"},l.a.createElement("img",{src:e.image,alt:"item-".concat(a)}),l.a.createElement("h2",null,e.description))}))))),l.a.createElement(t,{className:"footer"},l.a.createElement("div",{className:"content-footer"},l.a.createElement("div",{className:"head-footer"},l.a.createElement("img",{src:v.a,alt:"Logo"}),l.a.createElement("h2",null,"Zhafran Tharif.")),l.a.createElement(u.a,{md:18,sm:10},l.a.createElement(g.a,null,l.a.createElement("div",{className:"content-icon-footer"},l.a.createElement("a",{href:"/"},l.a.createElement(O.a,null)),l.a.createElement("a",{href:"/"},l.a.createElement(L.a,null)),l.a.createElement("a",{href:"/"},l.a.createElement(T.a,null)),l.a.createElement("a",{href:"/"},l.a.createElement(L.c,null)),l.a.createElement("a",{href:"/"},l.a.createElement(L.d,null)),l.a.createElement("a",{href:"/"},l.a.createElement(L.b,null))))),l.a.createElement("p",null,"Copyright 2020 \xa9 Zhafran Tharif")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e){e.exports=JSON.parse('{"skills":[{"image":"./images/skills1.png","title":"Web Development","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus velit. "},{"image":"./images/skills2.png","title":"Graphic Designer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus velit. "},{"image":"./images/skills3.png","title":"UI/UX Designer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus velit. "}],"portofolio":[{"image":[{"img":"./images/portofolio1.png"},{"img":"./images/portofolio2.png"},{"img":"./images/portofolio1.png"}],"title":"Kattamata","role":"Web Development","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus velit. "},{"image":[{"img":"./images/portofolio2.png"},{"img":"./images/portofolio1.png"},{"img":"./images/portofolio2.png"}],"title":"Furnihome","role":"Web Development","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at purus velit. "}],"experience":[{"year":"2018","month":"Mei - July","status":"Internship","role":"UI/UX Designer","office":"PT.TELKOM INDONESIA"},{"year":"2019","month":"June - December","status":"Internship","role":"QA Engineer","office":"PT.TELKOM INDONESIA"},{"year":"2020","month":"July - Now","status":"Fulltime","role":"UI/UX Designer","office":"Ekselen.id"}],"contact":[{"image":"./images/icon1.svg","description":"www.zhafranth.com"},{"image":"./images/icon2.svg","description":"zhafranth@gmail.com"},{"image":"./images/icon3.svg","description":"Jakarta, Indonesia"},{"image":"./images/icon4.svg","description":"0821-9134-0616"}]}')},69:function(e,a,t){e.exports=t.p+"static/media/logo.271abda6.svg"},88:function(e,a,t){e.exports=t.p+"static/media/lingkaran1.e1b87887.png"},89:function(e,a,t){e.exports=t.p+"static/media/lingkaran2.6e2b8a0c.png"},90:function(e,a,t){e.exports=t.p+"static/media/lingkaran3.d3fc01ff.png"}},[[104,1,2]]]);
//# sourceMappingURL=main.8166069e.chunk.js.map