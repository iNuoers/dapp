(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1067:function(t,e,n){"use strict";const r=n(1068),{stdout:o,stderr:c}=n(1072),{stringReplaceAll:l,stringEncaseCRLFWithFirstIndex:h}=n(1073),{isArray:f}=Array,d=["ansi","ansi","ansi256","ansi16m"],m=Object.create(null);class y{constructor(t){return v(t)}}const v=t=>{const e={};return((object,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const e=o?o.level:0;object.level=void 0===t.level?e:t.level})(e,t),e.template=(...t)=>j(e.template,...t),Object.setPrototypeOf(e,w.prototype),Object.setPrototypeOf(e.template,e),e.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},e.template.Instance=y,e.template};function w(t){return v(t)}for(const[t,style]of Object.entries(r))m[t]={get(){const e=M(this,C(style.open,style.close,this._styler),this._isEmpty);return Object.defineProperty(this,t,{value:e}),e}};m.visible={get(){const t=M(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:t}),t}};const k=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(const t of k)m[t]={get(){const{level:e}=this;return function(...n){const o=C(r.color[d[e]][t](...n),r.color.close,this._styler);return M(this,o,this._isEmpty)}}};for(const t of k){m["bg"+t[0].toUpperCase()+t.slice(1)]={get(){const{level:e}=this;return function(...n){const o=C(r.bgColor[d[e]][t](...n),r.bgColor.close,this._styler);return M(this,o,this._isEmpty)}}}}const x=Object.defineProperties((()=>{}),{...m,level:{enumerable:!0,get(){return this._generator.level},set(t){this._generator.level=t}}}),C=(t,e,n)=>{let r,o;return void 0===n?(r=t,o=e):(r=n.openAll+t,o=e+n.closeAll),{open:t,close:e,openAll:r,closeAll:o,parent:n}},M=(t,e,n)=>{const r=(...t)=>f(t[0])&&f(t[0].raw)?_(r,j(r,...t)):_(r,1===t.length?""+t[0]:t.join(" "));return Object.setPrototypeOf(r,x),r._generator=t,r._styler=e,r._isEmpty=n,r},_=(t,e)=>{if(t.level<=0||!e)return t._isEmpty?"":e;let n=t._styler;if(void 0===n)return e;const{openAll:r,closeAll:o}=n;if(-1!==e.indexOf(""))for(;void 0!==n;)e=l(e,n.close,n.open),n=n.parent;const c=e.indexOf("\n");return-1!==c&&(e=h(e,o,r,c)),r+e+o};let template;const j=(t,...e)=>{const[r]=e;if(!f(r)||!f(r.raw))return e.join(" ");const o=e.slice(1),c=[r.raw[0]];for(let i=1;i<r.length;i++)c.push(String(o[i-1]).replace(/[{}\\]/g,"\\$&"),String(r.raw[i]));return void 0===template&&(template=n(1074)),template(t,c.join(""))};Object.defineProperties(w.prototype,m);const O=w();O.supportsColor=o,O.stderr=w({level:c?c.level:0}),O.stderr.supportsColor=c,t.exports=O},1069:function(t,e,n){const r=n(827),o=n(1071),c={};Object.keys(r).forEach((t=>{c[t]={},Object.defineProperty(c[t],"channels",{value:r[t].channels}),Object.defineProperty(c[t],"labels",{value:r[t].labels});const e=o(t);Object.keys(e).forEach((n=>{const r=e[n];c[t][n]=function(t){const e=function(...e){const n=e[0];if(null==n)return n;n.length>1&&(e=n);const r=t(e);if("object"==typeof r)for(let t=r.length,i=0;i<t;i++)r[i]=Math.round(r[i]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(r),c[t][n].raw=function(t){const e=function(...e){const n=e[0];return null==n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(r)}))})),t.exports=c},1070:function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},1071:function(t,e,n){const r=n(827);function o(t){const e=function(){const t={},e=Object.keys(r);for(let n=e.length,i=0;i<n;i++)t[e[i]]={distance:-1,parent:null};return t}(),n=[t];for(e[t].distance=0;n.length;){const t=n.pop(),o=Object.keys(r[t]);for(let r=o.length,i=0;i<r;i++){const r=o[i],c=e[r];-1===c.distance&&(c.distance=e[t].distance+1,c.parent=t,n.unshift(r))}}return e}function link(t,e){return function(n){return e(t(n))}}function c(t,e){const path=[e[t].parent,t];let n=r[e[t].parent][t],o=e[t].parent;for(;e[o].parent;)path.unshift(e[o].parent),n=link(r[e[o].parent][o],n),o=e[o].parent;return n.conversion=path,n}t.exports=function(t){const e=o(t),n={},r=Object.keys(e);for(let t=r.length,i=0;i<t;i++){const t=r[i];null!==e[t].parent&&(n[t]=c(t,e))}return n}},1073:function(t,e,n){"use strict";t.exports={stringReplaceAll:(t,e,n)=>{let r=t.indexOf(e);if(-1===r)return t;const o=e.length;let c=0,l="";do{l+=t.substr(c,r-c)+e+n,c=r+o,r=t.indexOf(e,c)}while(-1!==r);return l+=t.substr(c),l},stringEncaseCRLFWithFirstIndex:(t,e,n,r)=>{let o=0,c="";do{const l="\r"===t[r-1];c+=t.substr(o,(l?r-1:r)-o)+e+(l?"\r\n":"\n")+n,o=r+1,r=t.indexOf("\n",o)}while(-1!==r);return c+=t.substr(o),c}}},1074:function(t,e,n){"use strict";const r=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,o=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,c=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,l=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,h=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function f(t){const u="u"===t[0],e="{"===t[1];return u&&!e&&5===t.length||"x"===t[0]&&3===t.length?String.fromCharCode(parseInt(t.slice(1),16)):u&&e?String.fromCodePoint(parseInt(t.slice(2,-1),16)):h.get(t)||t}function d(t,e){const n=[],r=e.trim().split(/\s*,\s*/g);let o;for(const e of r){const r=Number(e);if(Number.isNaN(r)){if(!(o=e.match(c)))throw new Error(`Invalid Chalk template style argument: ${e} (in style '${t}')`);n.push(o[2].replace(l,((t,e,n)=>e?f(e):n)))}else n.push(r)}return n}function m(style){o.lastIndex=0;const t=[];let e;for(;null!==(e=o.exec(style));){const n=e[1];if(e[2]){const r=d(n,e[2]);t.push([n].concat(r))}else t.push([n])}return t}function y(t,e){const n={};for(const t of e)for(const style of t.styles)n[style[0]]=t.inverse?null:style.slice(1);let r=t;for(const[t,e]of Object.entries(n))if(Array.isArray(e)){if(!(t in r))throw new Error(`Unknown Chalk style: ${t}`);r=e.length>0?r[t](...e):r[t]}return r}t.exports=(t,e)=>{const n=[],o=[];let c=[];if(e.replace(r,((e,r,l,style,h,d)=>{if(r)c.push(f(r));else if(style){const e=c.join("");c=[],o.push(0===n.length?e:y(t,n)(e)),n.push({inverse:l,styles:m(style)})}else if(h){if(0===n.length)throw new Error("Found extraneous } in Chalk template literal");o.push(y(t,n)(c.join(""))),c=[],n.pop()}else c.push(d)})),o.push(c.join("")),n.length>0){const t=`Chalk template literal is missing ${n.length} closing bracket${1===n.length?"":"s"} (\`}\`)`;throw new Error(t)}return o.join("")}},1138:function(t,e){!function(){"use strict";function t(e,path,n,script){return this instanceof t?(this.domain=e||void 0,this.path=path||"/",this.secure=!!n,this.script=!!script,this):new t(e,path,n,script)}function n(t,e,r){return t instanceof n?t:this instanceof n?(this.name=null,this.value=null,this.expiration_date=1/0,this.path=String(r||"/"),this.explicit_path=!1,this.domain=e||null,this.explicit_domain=!1,this.secure=!1,this.noscript=!1,t&&this.parse(t,e,r),this):new n(t,e,r)}t.All=Object.freeze(Object.create(null)),e.CookieAccessInfo=t,e.Cookie=n,n.prototype.toString=function(){var t=[this.name+"="+this.value];return this.expiration_date!==1/0&&t.push("expires="+new Date(this.expiration_date).toGMTString()),this.domain&&t.push("domain="+this.domain),this.path&&t.push("path="+this.path),this.secure&&t.push("secure"),this.noscript&&t.push("httponly"),t.join("; ")},n.prototype.toValueString=function(){return this.name+"="+this.value};var r=/[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;function o(){var t,e;return this instanceof o?(t=Object.create(null),this.setCookie=function(r,o,c){var l,i;if(l=(r=new n(r,o,c)).expiration_date<=Date.now(),void 0!==t[r.name]){for(e=t[r.name],i=0;i<e.length;i+=1)if(e[i].collidesWith(r))return l?(e.splice(i,1),0===e.length&&delete t[r.name],!1):(e[i]=r,r);return!l&&(e.push(r),r)}return!l&&(t[r.name]=[r],t[r.name])},this.getCookie=function(n,r){var o,i;if(e=t[n])for(i=0;i<e.length;i+=1)if((o=e[i]).expiration_date<=Date.now())0===e.length&&delete t[o.name];else if(o.matches(r))return o},this.getCookies=function(e){var n,r,o=[];for(n in t)(r=this.getCookie(n,e))&&o.push(r);return o.toString=function(){return o.join(":")},o.toValueString=function(){return o.map((function(t){return t.toValueString()})).join("; ")},o},this):new o}n.prototype.parse=function(t,e,r){if(this instanceof n){var i,o=t.split(";").filter((function(t){return!!t})),c=o[0].match(/([^=]+)=([\s\S]*)/);if(!c)return void console.warn("Invalid cookie header encountered. Header: '"+t+"'");var l=c[1],h=c[2];if("string"!=typeof l||0===l.length||"string"!=typeof h)return void console.warn("Unable to extract values from cookie header. Cookie: '"+t+"'");for(this.name=l,this.value=h,i=1;i<o.length;i+=1)switch(l=(c=o[i].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(),h=c[2],l){case"httponly":this.noscript=!0;break;case"expires":this.expiration_date=h?Number(Date.parse(h)):1/0;break;case"path":this.path=h?h.trim():"",this.explicit_path=!0;break;case"domain":this.domain=h?h.trim():"",this.explicit_domain=!!this.domain;break;case"secure":this.secure=!0}return this.explicit_path||(this.path=r||"/"),this.explicit_domain||(this.domain=e),this}return(new n).parse(t,e,r)},n.prototype.matches=function(e){return e===t.All||!(this.noscript&&e.script||this.secure&&!e.secure||!this.collidesWith(e))},n.prototype.collidesWith=function(t){if(this.path&&!t.path||this.domain&&!t.domain)return!1;if(this.path&&0!==t.path.indexOf(this.path))return!1;if(this.explicit_path&&0!==t.path.indexOf(this.path))return!1;var e=t.domain&&t.domain.replace(/^[\.]/,""),n=this.domain&&this.domain.replace(/^[\.]/,"");if(n===e)return!0;if(n){if(!this.explicit_domain)return!1;var r=e.indexOf(n);return-1!==r&&r===e.length-n.length}return!0},e.CookieJar=o,o.prototype.setCookies=function(t,e,o){var i,c,l=[];for(t=(t=Array.isArray(t)?t:t.split(r)).map((function(t){return new n(t,e,o)})),i=0;i<t.length;i+=1)c=t[i],this.setCookie(c,e,o)&&l.push(c);return l}}()},1154:function(t,e,n){const r=n(1155),{hexStringToBuffer:o,profiles:c}=n(1163),{cidV0ToV1Base32:l}=n(1184);t.exports={helpers:{cidV0ToV1Base32:l},decode:function(t){const e=o(t),n=r.getCodec(e),l=r.rmPrefix(e);let h=c[n];return h||(h=c.default),h.decode(l)},fromIpfs:function(t){return this.encode("ipfs-ns",t)},fromSwarm:function(t){return this.encode("swarm-ns",t)},encode:function(t,e){let n=c[t];n||(n=c.default);const o=n.encode(e);return r.addPrefix(t,o).toString("hex")},getCodec:function(t){let e=o(t);return r.getCodec(e)}}},1163:function(t,e,n){(function(t){const r=n(851),o=n(744),c=t=>{let e=t.slice(0,2),n=t.slice(2),r="";return r="0x"===e?n:t,o.fromHexString(r)},l={swarm:t=>{const e=o.encode(c(t),"keccak-256");return new r(1,"swarm-manifest",e).buffer},ipfs:t=>{const e=o.fromB58String(t);return new r(1,"dag-pb",e).buffer},utf8:e=>t.from(e,"utf8")},h={hexMultiHash:t=>{const e=new r(t);return o.decode(e.multihash).digest.toString("hex")},b58MultiHash:t=>{const e=new r(t);return o.toB58String(e.multihash)},utf8:t=>t.toString("utf8")},f={"swarm-ns":{encode:l.swarm,decode:h.hexMultiHash},"ipfs-ns":{encode:l.ipfs,decode:h.b58MultiHash},"ipns-ns":{encode:l.ipfs,decode:h.b58MultiHash},default:{encode:l.utf8,decode:h.utf8}};e.hexStringToBuffer=c,e.profiles=f}).call(this,n(609).Buffer)},1182:function(t,e,n){"use strict";const r=n(744),{Buffer:o}=n(609);var c={checkCIDComponents:function(t){if(null==t)return"null values are not valid CIDs";if(0!==t.version&&1!==t.version)return"Invalid version, must be a number equal to 1 or 0";if("string"!=typeof t.codec)return"codec must be string";if(0===t.version){if("dag-pb"!==t.codec)return"codec must be 'dag-pb' for CIDv0";if("base58btc"!==t.multibaseName)return"multibaseName must be 'base58btc' for CIDv0"}if(!o.isBuffer(t.multihash))return"multihash must be a Buffer";try{r.validate(t.multihash)}catch(t){let e=t.message;return e||(e="Multihash validation failed"),e}}};t.exports=c},1183:function(t,e,n){"use strict";t.exports=function(t,{className:e,symbolName:n}){const symbol=Symbol.for(n),r={[e]:class extends t{constructor(...t){super(...t),Object.defineProperty(this,symbol,{value:!0})}get[Symbol.toStringTag](){return e}}}[e];return r[`is${e}`]=t=>!(!t||!t[symbol]),r},t.exports.proto=function(t,{className:e,symbolName:n,withoutNew:r}){const symbol=Symbol.for(n),o={[e]:function(...e){if(r&&!(this instanceof o))return new o(...e);const n=t.call(this,...e)||this;return n&&!n[symbol]&&Object.defineProperty(n,symbol,{value:!0}),n}}[e];return o.prototype=Object.create(t.prototype),o.prototype.constructor=o,Object.defineProperty(o.prototype,Symbol.toStringTag,{get:()=>e}),o[`is${e}`]=t=>!(!t||!t[symbol]),o}},1184:function(t,e,n){const r=n(851);e.cidV0ToV1Base32=t=>{let e=new r(t);return 0===e.version&&(e=e.toV1()),e.toString("base32")}},1195:function(t,e,n){var r;r=function(t){t.version="1.2.0";var e=function(){for(var t=0,table=new Array(256),e=0;256!=e;++e)t=1&(t=1&(t=1&(t=1&(t=1&(t=1&(t=1&(t=1&(t=e)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1)?-306674912^t>>>1:t>>>1,table[e]=t;return"undefined"!=typeof Int32Array?new Int32Array(table):table}();t.table=e,t.bstr=function(t,n){for(var r=-1^n,o=t.length-1,i=0;i<o;)r=(r=r>>>8^e[255&(r^t.charCodeAt(i++))])>>>8^e[255&(r^t.charCodeAt(i++))];return i===o&&(r=r>>>8^e[255&(r^t.charCodeAt(i))]),-1^r},t.buf=function(t,n){if(t.length>1e4)return function(t,n){for(var r=-1^n,o=t.length-7,i=0;i<o;)r=(r=(r=(r=(r=(r=(r=(r=r>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])];for(;i<o+7;)r=r>>>8^e[255&(r^t[i++])];return-1^r}(t,n);for(var r=-1^n,o=t.length-3,i=0;i<o;)r=(r=(r=(r=r>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])])>>>8^e[255&(r^t[i++])];for(;i<o+3;)r=r>>>8^e[255&(r^t[i++])];return-1^r},t.str=function(t,n){for(var r,o,c=-1^n,i=0,l=t.length;i<l;)(r=t.charCodeAt(i++))<128?c=c>>>8^e[255&(c^r)]:r<2048?c=(c=c>>>8^e[255&(c^(192|r>>6&31))])>>>8^e[255&(c^(128|63&r))]:r>=55296&&r<57344?(r=64+(1023&r),o=1023&t.charCodeAt(i++),c=(c=(c=(c=c>>>8^e[255&(c^(240|r>>8&7))])>>>8^e[255&(c^(128|r>>2&63))])>>>8^e[255&(c^(128|o>>6&15|(3&r)<<4))])>>>8^e[255&(c^(128|63&o))]):c=(c=(c=c>>>8^e[255&(c^(224|r>>12&15))])>>>8^e[255&(c^(128|r>>6&63))])>>>8^e[255&(c^(128|63&r))];return-1^c}},"undefined"==typeof DO_NOT_EXPORT_CRC?r(e):r({})},638:function(t,e,n){var r=n(612).Buffer,o=n(1013).Transform,c=n(660).StringDecoder;function l(t){o.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}n(611)(l,o),l.prototype.update=function(data,t,e){"string"==typeof data&&(data=r.from(data,t));var n=this._update(data);return this.hashMode?this:(e&&(n=this._toString(n,e)),n)},l.prototype.setAutoPadding=function(){},l.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},l.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},l.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},l.prototype._transform=function(data,t,e){var n;try{this.hashMode?this._update(data):this.push(this._update(data))}catch(t){n=t}finally{e(n)}},l.prototype._flush=function(t){var e;try{this.push(this.__final())}catch(t){e=t}t(e)},l.prototype._finalOrDigest=function(t){var e=this.__final()||r.alloc(0);return t&&(e=this._toString(e,t,!0)),e},l.prototype._toString=function(t,e,n){if(this._decoder||(this._decoder=new c(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var r=this._decoder.write(t);return n&&(r+=this._decoder.end()),r},t.exports=l},662:function(t,e,n){function r(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===r(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===r(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===r(t)},e.isError=function(t){return"[object Error]"===r(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(609).Buffer.isBuffer},827:function(t,e,n){const r=n(1070),o={};for(const t of Object.keys(r))o[r[t]]=t;const c={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=c;for(const t of Object.keys(c)){if(!("channels"in c[t]))throw new Error("missing channels property: "+t);if(!("labels"in c[t]))throw new Error("missing channel labels property: "+t);if(c[t].labels.length!==c[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=c[t];delete c[t].channels,delete c[t].labels,Object.defineProperty(c[t],"channels",{value:e}),Object.defineProperty(c[t],"labels",{value:n})}c.rgb.hsl=function(t){const e=t[0]/255,g=t[1]/255,b=t[2]/255,n=Math.min(e,g,b),r=Math.max(e,g,b),o=r-n;let c,s;r===n?c=0:e===r?c=(g-b)/o:g===r?c=2+(b-e)/o:b===r&&(c=4+(e-g)/o),c=Math.min(60*c,360),c<0&&(c+=360);const l=(n+r)/2;return s=r===n?0:l<=.5?o/(r+n):o/(2-r-n),[c,100*s,100*l]},c.rgb.hsv=function(t){let e,n,r,o,s;const c=t[0]/255,g=t[1]/255,b=t[2]/255,l=Math.max(c,g,b),h=l-Math.min(c,g,b),f=function(t){return(l-t)/6/h+.5};return 0===h?(o=0,s=0):(s=h/l,e=f(c),n=f(g),r=f(b),c===l?o=r-n:g===l?o=1/3+e-r:b===l&&(o=2/3+n-e),o<0?o+=1:o>1&&(o-=1)),[360*o,100*s,100*l]},c.rgb.hwb=function(t){const e=t[0],g=t[1];let b=t[2];const n=c.rgb.hsl(t)[0],r=1/255*Math.min(e,Math.min(g,b));return b=1-1/255*Math.max(e,Math.max(g,b)),[n,100*r,100*b]},c.rgb.cmyk=function(t){const e=t[0]/255,g=t[1]/255,b=t[2]/255,n=Math.min(1-e,1-g,1-b);return[100*((1-e-n)/(1-n)||0),100*((1-g-n)/(1-n)||0),100*((1-b-n)/(1-n)||0),100*n]},c.rgb.keyword=function(t){const e=o[t];if(e)return e;let n,c=1/0;for(const e of Object.keys(r)){const o=r[e],f=(h=o,((l=t)[0]-h[0])**2+(l[1]-h[1])**2+(l[2]-h[2])**2);f<c&&(c=f,n=e)}var l,h;return n},c.keyword.rgb=function(t){return r[t]},c.rgb.xyz=function(t){let e=t[0]/255,g=t[1]/255,b=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,g=g>.04045?((g+.055)/1.055)**2.4:g/12.92,b=b>.04045?((b+.055)/1.055)**2.4:b/12.92;return[100*(.4124*e+.3576*g+.1805*b),100*(.2126*e+.7152*g+.0722*b),100*(.0193*e+.1192*g+.9505*b)]},c.rgb.lab=function(t){const e=c.rgb.xyz(t);let n=e[0],r=e[1],o=e[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;return[116*r-16,500*(n-r),200*(r-o)]},c.hsl.rgb=function(t){const e=t[0]/360,s=t[1]/100,n=t[2]/100;let r,o,c;if(0===s)return c=255*n,[c,c,c];r=n<.5?n*(1+s):n+s-n*s;const l=2*n-r,h=[0,0,0];for(let i=0;i<3;i++)o=e+1/3*-(i-1),o<0&&o++,o>1&&o--,c=6*o<1?l+6*(r-l)*o:2*o<1?r:3*o<2?l+(r-l)*(2/3-o)*6:l,h[i]=255*c;return h},c.hsl.hsv=function(t){const e=t[0];let s=t[1]/100,n=t[2]/100,r=s;const o=Math.max(n,.01);n*=2,s*=n<=1?n:2-n,r*=o<=1?o:2-o;return[e,100*(0===n?2*r/(o+r):2*s/(n+s)),100*((n+s)/2)]},c.hsv.rgb=function(t){const e=t[0]/60,s=t[1]/100;let n=t[2]/100;const r=Math.floor(e)%6,o=e-Math.floor(e),p=255*n*(1-s),q=255*n*(1-s*o),c=255*n*(1-s*(1-o));switch(n*=255,r){case 0:return[n,c,p];case 1:return[q,n,p];case 2:return[p,n,c];case 3:return[p,q,n];case 4:return[c,p,n];case 5:return[n,p,q]}},c.hsv.hsl=function(t){const e=t[0],s=t[1]/100,n=t[2]/100,r=Math.max(n,.01);let o,c;c=(2-s)*n;const l=(2-s)*r;return o=s*r,o/=l<=1?l:2-l,o=o||0,c/=2,[e,100*o,100*c]},c.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const o=n+r;let c;o>1&&(n/=o,r/=o);const i=Math.floor(6*e),l=1-r;c=6*e-i,0!=(1&i)&&(c=1-c);const h=n+c*(l-n);let f,g,b;switch(i){default:f=l,g=h,b=n;break;case 1:f=h,g=l,b=n;break;case 2:f=n,g=l,b=h;break;case 3:f=n,g=h,b=l;break;case 4:f=h,g=n,b=l;break;case 5:f=l,g=n,b=h}return[255*f,255*g,255*b]},c.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,o=t[3]/100;return[255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},c.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let o,g,b;return o=3.2406*e+-1.5372*n+-.4986*r,g=-.9689*e+1.8758*n+.0415*r,b=.0557*e+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,b=b>.0031308?1.055*b**(1/2.4)-.055:12.92*b,o=Math.min(Math.max(0,o),1),g=Math.min(Math.max(0,g),1),b=Math.min(Math.max(0,b),1),[255*o,255*g,255*b]},c.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(e-n),200*(n-r)]},c.lab.xyz=function(t){let e,n,r;n=(t[0]+16)/116,e=t[1]/500+n,r=n-t[2]/200;const o=n**3,c=e**3,l=r**3;return n=o>.008856?o:(n-16/116)/7.787,e=c>.008856?c:(e-16/116)/7.787,r=l>.008856?l:(r-16/116)/7.787,e*=95.047,n*=100,r*=108.883,[e,n,r]},c.lab.lch=function(t){const e=t[0],a=t[1],b=t[2];let n;n=360*Math.atan2(b,a)/2/Math.PI,n<0&&(n+=360);return[e,Math.sqrt(a*a+b*b),n]},c.lch.lab=function(t){const e=t[0],n=t[1],hr=t[2]/360*2*Math.PI;return[e,n*Math.cos(hr),n*Math.sin(hr)]},c.rgb.ansi16=function(t,e=null){const[n,g,b]=t;let r=null===e?c.rgb.hsv(t)[2]:e;if(r=Math.round(r/50),0===r)return 30;let o=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(n/255));return 2===r&&(o+=60),o},c.hsv.ansi16=function(t){return c.rgb.ansi16(c.hsv.rgb(t),t[2])},c.rgb.ansi256=function(t){const e=t[0],g=t[1],b=t[2];if(e===g&&g===b)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},c.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},c.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},c.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},c.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map((t=>t+t)).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},c.rgb.hcg=function(t){const e=t[0]/255,g=t[1]/255,b=t[2]/255,n=Math.max(Math.max(e,g),b),r=Math.min(Math.min(e,g),b),o=n-r;let c,l;return c=o<1?r/(1-o):0,l=o<=0?0:n===e?(g-b)/o%6:n===g?2+(b-e)/o:4+(e-g)/o,l/=6,l%=1,[360*l,100*o,100*c]},c.hsl.hcg=function(t){const s=t[1]/100,e=t[2]/100,n=e<.5?2*s*e:2*s*(1-e);let r=0;return n<1&&(r=(e-.5*n)/(1-n)),[t[0],100*n,100*r]},c.hsv.hcg=function(t){const s=t[1]/100,e=t[2]/100,n=s*e;let r=0;return n<1&&(r=(e-n)/(1-n)),[t[0],100*n,100*r]},c.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,g=t[2]/100;if(0===n)return[255*g,255*g,255*g];const r=[0,0,0],o=e%1*6,c=o%1,l=1-c;let h=0;switch(Math.floor(o)){case 0:r[0]=1,r[1]=c,r[2]=0;break;case 1:r[0]=l,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=c;break;case 3:r[0]=0,r[1]=l,r[2]=1;break;case 4:r[0]=c,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=l}return h=(1-n)*g,[255*(n*r[0]+h),255*(n*r[1]+h),255*(n*r[2]+h)]},c.hcg.hsv=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);let r=0;return n>0&&(r=e/n),[t[0],100*r,100*n]},c.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100*(1-e)+.5*e;let s=0;return n>0&&n<.5?s=e/(2*n):n>=.5&&n<1&&(s=e/(2*(1-n))),[t[0],100*s,100*n]},c.hcg.hwb=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},c.hwb.hcg=function(t){const e=t[1]/100,n=1-t[2]/100,r=n-e;let g=0;return r<1&&(g=(n-r)/(1-r)),[t[0],100*r,100*g]},c.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},c.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},c.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},c.gray.hsl=function(t){return[0,0,t[0]]},c.gray.hsv=c.gray.hsl,c.gray.hwb=function(t){return[0,100,t[0]]},c.gray.cmyk=function(t){return[0,0,0,t[0]]},c.gray.lab=function(t){return[t[0],0,0]},c.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},c.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},851:function(t,e,n){"use strict";const{Buffer:r}=n(609),o=n(744),c=n(1171),l=n(1177),h=n(669),f=n(1182),d=n(1183);class m{constructor(t,e,n,h){if(y.isCID(t)){const e=t;return this.version=e.version,this.codec=e.codec,this.multihash=r.from(e.multihash),void(this.multibaseName=e.multibaseName||(0===e.version?"base58btc":"base32"))}if("string"==typeof t){const e=c.isEncoded(t);if(e){const n=c.decode(t);this.version=parseInt(n.slice(0,1).toString("hex"),16),this.codec=l.getCodec(n.slice(1)),this.multihash=l.rmPrefix(n.slice(1)),this.multibaseName=e}else this.version=0,this.codec="dag-pb",this.multihash=o.fromB58String(t),this.multibaseName="base58btc";return m.validateCID(this),void Object.defineProperty(this,"string",{value:t})}if(r.isBuffer(t)){const e=t.slice(0,1),n=parseInt(e.toString("hex"),16);if(1===n){const e=t;this.version=n,this.codec=l.getCodec(e.slice(1)),this.multihash=l.rmPrefix(e.slice(1)),this.multibaseName="base32"}else this.version=0,this.codec="dag-pb",this.multihash=t,this.multibaseName="base58btc";m.validateCID(this)}else this.version=t,this.codec=e,this.multihash=n,this.multibaseName=h||(0===t?"base58btc":"base32"),m.validateCID(this)}get buffer(){let t=this._buffer;if(!t){if(0===this.version)t=this.multihash;else{if(1!==this.version)throw new Error("unsupported version");t=r.concat([r.from("01","hex"),l.getCodeVarint(this.codec),this.multihash])}Object.defineProperty(this,"_buffer",{value:t})}return t}get prefix(){return r.concat([r.from(`0${this.version}`,"hex"),l.getCodeVarint(this.codec),o.prefix(this.multihash)])}toV0(){if("dag-pb"!==this.codec)throw new Error("Cannot convert a non dag-pb CID to CIDv0");const{name:t,length:e}=o.decode(this.multihash);if("sha2-256"!==t)throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");if(32!==e)throw new Error("Cannot convert non 32 byte multihash CID to CIDv0");return new y(0,this.codec,this.multihash)}toV1(){return new y(1,this.codec,this.multihash)}toBaseEncodedString(base=this.multibaseName){if(this.string&&base===this.multibaseName)return this.string;let t=null;if(0===this.version){if("base58btc"!==base)throw new Error("not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()");t=o.toB58String(this.multihash)}else{if(1!==this.version)throw new Error("unsupported version");t=c.encode(base,this.buffer).toString()}return base===this.multibaseName&&Object.defineProperty(this,"string",{value:t}),t}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}toString(base){return this.toBaseEncodedString(base)}toJSON(){return{codec:this.codec,version:this.version,hash:this.multihash}}equals(t){return this.codec===t.codec&&this.version===t.version&&this.multihash.equals(t.multihash)}static validateCID(t){const e=f.checkCIDComponents(t);if(e)throw new Error(e)}}const y=d(m,{className:"CID",symbolName:"@ipld/js-cid/CID"});y.codecs=h,t.exports=y}}]);