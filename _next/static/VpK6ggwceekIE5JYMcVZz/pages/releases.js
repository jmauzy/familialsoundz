(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4b1o":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/releases",function(){var t=e("ZuQ+");return{page:t.default||t}}])},Wgwc:function(t,n,e){t.exports=function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",a="week",u="month",s="quarter",o="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},h={s:f,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,a=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:o,w:a,d:i,h:r,m:e,s:n,ms:t,Q:s}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",v={};v[m]=d;var $=function(t){return t instanceof b},p=function(t,n,e){var r;if(!t)return m;if("string"==typeof t)v[t]&&(r=t),n&&(v[t]=n,r=t);else{var i=t.name;v[i]=t,r=i}return e||(m=r),r},g=function(t,n,e){if($(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new b(r)},y=h;y.l=p,y.i=$,y.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var b=function(){function f(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(y.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(c);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},h.isAfter=function(t,n){return g(t)<this.startOf(n)},h.isBefore=function(t,n){return this.endOf(n)<g(t)},h.$g=function(t,n,e){return y.u(t)?this[n]:this.set(e,t)},h.year=function(t){return this.$g(t,"$y",o)},h.month=function(t){return this.$g(t,"$M",u)},h.day=function(t){return this.$g(t,"$W",i)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",e)},h.second=function(t){return this.$g(t,"$s",n)},h.millisecond=function(n){return this.$g(n,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var c=this,l=!!y.u(s)||s,f=y.p(t),h=function(t,n){var e=y.w(c.$u?Date.UTC(c.$y,n,t):new Date(c.$y,n,t),c);return l?e:e.endOf(i)},d=function(t,n){return y.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(n)),c)},m=this.$W,v=this.$M,$=this.$D,p="set"+(this.$u?"UTC":"");switch(f){case o:return l?h(1,0):h(31,11);case u:return l?h(1,v):h(0,v+1);case a:var g=this.$locale().weekStart||0,b=(m<g?m+7:m)-g;return h(l?$-b:$+(6-b),v);case i:case"date":return d(p+"Hours",0);case r:return d(p+"Minutes",1);case e:return d(p+"Seconds",2);case n:return d(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(a,s){var c,l=y.p(a),f="set"+(this.$u?"UTC":""),h=(c={},c[i]=f+"Date",c.date=f+"Date",c[u]=f+"Month",c[o]=f+"FullYear",c[r]=f+"Hours",c[e]=f+"Minutes",c[n]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],d=l===i?this.$D+(s-this.$W):s;if(l===u||l===o){var m=this.clone().set("date",1);m.$d[h](d),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else h&&this.$d[h](d);return this.init(),this},h.set=function(t,n){return this.clone().$set(t,n)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,s){var c,l=this;t=Number(t);var f=y.p(s),h=function(n){var e=g(l);return y.w(e.date(e.date()+Math.round(n*t)),l)};if(f===u)return this.set(u,this.$M+t);if(f===o)return this.set(o,this.$y+t);if(f===i)return h(1);if(f===a)return h(7);var d=(c={},c[e]=6e4,c[r]=36e5,c[n]=1e3,c)[f]||1,m=this.valueOf()+t*d;return y.w(m,this)},h.subtract=function(t,n){return this.add(-1*t,n)},h.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),a=this.$H,u=this.$m,s=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,a){return t&&(t[r]||t(n,e))||i[r].substr(0,a)},h=function(t){return y.s(a%12||12,t,"0")},d=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:y.s(s+1,2,"0"),MMM:f(i.monthsShort,s,c,3),MMMM:c[s]||c(this,e),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:y.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,u,!0),A:d(a,u,!1),m:String(u),mm:y.s(u,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return e.replace(l,function(t,n){return n||m[t]||r.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,c,l){var f,h=y.p(c),d=g(t),m=6e4*(d.utcOffset()-this.utcOffset()),v=this-d,$=y.m(this,d);return $=(f={},f[o]=$/12,f[u]=$,f[s]=$/3,f[a]=(v-m)/6048e5,f[i]=(v-m)/864e5,f[r]=v/36e5,f[e]=v/6e4,f[n]=v/1e3,f)[h]||v,l?$:y.a($)},h.daysInMonth=function(){return this.endOf(u).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=p(t,n,!0),e},h.clone=function(){return y.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.toISOString()},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}();return g.prototype=b.prototype,g.extend=function(t,n){return t(n,b,g),g},g.locale=p,g.isDayjs=$,g.unix=function(t){return g(1e3*t)},g.en=v[m],g.Ls=v,g}()},"ZuQ+":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),i=e.n(r),a=e("rt45"),u=e("nOHt"),s=e("vOnD"),o=e("ZHh6");function c(){var t=Object(a.a)(["\n\tpadding: 10px;\n\tmargin: auto;\n\tmax-width: 800px;\n"]);return c=function(){return t},t}function l(){var t=Object(a.a)(['\n\tfont-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n']);return l=function(){return t},t}function f(t){var n=t.children;return i.a.createElement(h,null,i.a.createElement(o.a,null),i.a.createElement(d,null,n))}var h=s.a.div(l()),d=s.a.div(c()),m=e("LcVh"),v=e("doui"),$=e("Wgwc"),p=e.n($);function g(){var t=Object(a.a)(["\n\tcursor: pointer;\n\tcolor: black;\n"]);return g=function(){return t},t}function y(t){var n=t.release,e="https://discogs.com/release/".concat(n);return i.a.createElement(b,{href:e},"View Release on Discogs")}var b=s.a.a(g());function w(){var t=Object(a.a)(["\n\tposition: absolute;\n\ttransform: rotate(90deg) translate(0, -100%);\n\ttransform-origin: 100% 0;\n\tmargin-right: -42px;\n\tmargin-top: 130px;\n\twidth: 230px;\n\theight: 32px;\n"]);return w=function(){return t},t}function M(){var t=Object(a.a)(["\n\ttext-align: center;\t\n\tpadding: 3px;\n"]);return M=function(){return t},t}function O(){var t=Object(a.a)(["\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n"]);return O=function(){return t},t}function D(){var t=Object(a.a)(["\n\tmargin: auto;\n\theight: 210px;\n\twidth: 210px;\n"]);return D=function(){return t},t}function x(){var t=Object(a.a)(["\n\tflex: none;\n\tfont-style: italic;\n\tfont-weight: 400;\n\tposition: relative;\n\tdisplay: flex;\n\tcolor: white;\n\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: ",";\n\tcolor: white;\n\theight: 300px;\n\twidth: 300px;\n"]);return x=function(){return t},t}function S(){var t=Object(a.a)(["\n\tmargin: auto;\n\tmargin-bottom: 10px;\n\n\t@media only screen and (min-width: 900px) {\n\t\tmargin: 0;\n\t}\n"]);return S=function(){return t},t}function j(t){var n=t.issue,e=Object(r.useState)(null),a=Object(v.default)(e,2),u=(a[0],a[1],"#000000"),s=Object(m.b)(n);s.color&&(u=s.color);var o=p()(s.date).format("M.YY");return i.a.createElement(E,null,i.a.createElement(_,{surround_color:u},i.a.createElement(Y,{src:"/static/covers/".concat(n,".jpg")}),i.a.createElement(H,null,o),i.a.createElement(T,null,s.title.toUpperCase())),i.a.createElement(k,null,i.a.createElement(y,{release:s.discogs_release})))}var E=s.a.div(S()),_=s.a.div(x(),function(t){return t.surround_color}),Y=s.a.img(D()),H=s.a.div(O()),k=s.a.div(M()),T=s.a.div(w());function I(){var t=Object(a.a)(["\n\tline-height: 20px;\n"]);return I=function(){return t},t}function W(){var t=Object(a.a)(["\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n"]);return W=function(){return t},t}function C(){var t=Object(a.a)(["\n\t@media only screen and (min-width: 900px) {\n\t\twidth: 300px;\n\t}\n\n\tfont-size: 14px;\n"]);return C=function(){return t},t}function L(t){var n=t.issue,e=Object(m.b)(n),r=p()(e.date).format("MMMM YYYY");return i.a.createElement(N,null,i.a.createElement(A,null,i.a.createElement("div",null,"Issue ",e.issue," - ",r),i.a.createElement("div",null,e.title," - ",e.artist)),i.a.createElement(Z,null,e.description))}var N=s.a.div(C()),A=s.a.div(W()),Z=s.a.div(I());function J(){var t=Object(a.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: auto;\n\n\t@media only screen and (min-width: 900px) {\n\t\tflex-direction: row;\n\t\twidth: 620px;\n\t\tjustify-content: space-between;\n\t}\n\n\t@media\n"]);return J=function(){return t},t}function U(t){var n=t.issue;return Object(m.b)(n)?i.a.createElement(q,null,i.a.createElement(j,{issue:n}),i.a.createElement(L,{issue:n})):i.a.createElement("div",null,"not found")}var q=s.a.div(J()),F=e("YFqc"),z=e.n(F);function V(){var t=Object(a.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 10px;\n\n\t& a {\n\t\tcolor: black;\n\t\ttext-decoration: none;\n\t\tcursor: pointer;\n\t}\n\n\t& a:visited {\n\t\tcolor: black;\n\t}\n"]);return V=function(){return t},t}function G(t){var n=t.issue;if(!Object(m.b)(n))return null;var e=Number(Object(m.a)());function r(t,n){return i.a.createElement(z.a,{href:"/releases?issue=".concat(t)},n)}return i.a.createElement(P,null,1===n?i.a.createElement("div",null):r(n-1,"<< Issue ".concat(n-1)),n===e?i.a.createElement("div",null):r(n+1," Issue ".concat(n+1," >>")))}var P=s.a.div(V());function Q(){var t=Object(u.useRouter)(),n=t.query.issue?Number(t.query.issue):Object(m.a)();return n?i.a.createElement(f,null,i.a.createElement(G,{issue:n}),i.a.createElement(U,{issue:n})):null}e.d(n,"default",function(){return Q})}},[["4b1o",1,0]]]);