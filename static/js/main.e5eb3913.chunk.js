(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{128:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},129:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},130:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},134:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(72),o=a.n(c),u=a(23),i=a.n(u),s=a(38),l=a(120),d=a(121),p=a(132),f=a(131),m=a(273),v=a(277),h=a(274),b=a(275),y=a(49),g=a.n(y),E=a(79),C=a.n(E),x=a(80),_=a.n(x),k=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,o=t.lastUpdate;return a?n.a.createElement("div",{className:g.a.container},n.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(g.a.card,g.a.infected)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:a.value,duration:2,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of total COVID-19 cases"))),n.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(g.a.card,g.a.recovered)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:c.value,duration:2,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),n.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(g.a.card,g.a.deaths)},n.a.createElement(h.a,null,n.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(b.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:r.value,duration:2,separator:","})),n.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},w=a(78),O=a(65),j=a.n(O),D="https://covid19.mathdro.id/api",S=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,r,n,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(D);case 3:return t=e.sent,a=t.data,r=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:r,recovered:n,deaths:c,lastUpdate:o});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,r=a.map((function(e){return{confirmed:e.totalConfirmed,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://api.covid19api.com/countries");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return e.Country})).sort());case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://api.covid19api.com/total/dayone/country/".concat(t));case 3:return a=e.sent,r=a.data,n=r.map((function(e){return{confirmed:e.Confirmed,recovered:e.Recovered,deaths:e.Deaths,active:e.Active,date:e.Date}})),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),z=a(91),V=a(128),B=a.n(V),P=function(e){var t=e.data,a=e.country,c=Object(r.useState)([]),o=Object(w.a)(c,2),u=o[0],l=o[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=u.length?n.a.createElement(z.a,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(170, 0, 0, 1)",backgroundColor:"rgba(255 , 0, 0, .5)",fill:!0}]}}):null,p=t.length?n.a.createElement(z.a,{data:{labels:t.map((function(e){return e.date.split("T")[0]})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(170, 0, 0, 1)",backgroundColor:"rgba(255, 0, 0, .5)",fill:!0},{data:t.map((function(e){return e.active})),label:"Active",borderColor:"rgba(170, 170, 0, 1)",backgroundColor:"rgba(255, 255, 0, .5)",fill:!0},{data:t.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, .5)",fill:!0}]}}):n.a.createElement(b.a,{style:{fontSize:"24px"}},"We could not load data for this location, you can pick another one!");return n.a.createElement("div",{className:B.a.container},a?p:d)},U=a(278),G=a(276),R=a(129),J=a.n(R),M=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),n.a.createElement(U.a,{className:J.a.formControl},n.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},Q=a(279),T=a(93),q=a.n(T),L=a(130),W=a.n(L),Y=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:"",countryData:{}},e.handleCountryChange=function(){var t=Object(s.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a);case 2:r=t.sent,e.setState({countryData:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country,r=e.countryData;return n.a.createElement("div",{className:q.a.container},n.a.createElement("img",{className:q.a.image,src:W.a,alt:"COVID-19"}),n.a.createElement(k,{data:t}),n.a.createElement(M,{handleCountryChange:this.handleCountryChange}),n.a.createElement(P,{data:r,country:a}),n.a.createElement(b.a,{style:{marginTop:"20px",fontSize:"12px",color:"rgba(0, 0, 0, .5)"}},"Global data has been fetched from this ",n.a.createElement(Q.a,{href:"https://covid19.mathdro.id/api",target:"_blank"},"API"),", Country data has been fetched from this ",n.a.createElement(Q.a,{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest",target:"_blank"},"API"),"."))}}]),a}(n.a.Component);o.a.render(n.a.createElement(Y,null),document.getElementById("root"))},49:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},93:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}}},[[134,1,2]]]);
//# sourceMappingURL=main.e5eb3913.chunk.js.map