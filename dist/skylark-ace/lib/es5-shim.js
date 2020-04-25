/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){function t(){}Function.prototype.bind||(Function.prototype.bind=function(e){var r=this;if("function"!=typeof r)throw new TypeError("Function.prototype.bind called on incompatible "+r);var n=f.call(arguments,1),o=function(){if(this instanceof o){var t=r.apply(this,n.concat(f.call(arguments)));return Object(t)===t?t:this}return r.apply(e,n.concat(f.call(arguments)))};return r.prototype&&(t.prototype=r.prototype,o.prototype=new t,t.prototype=null),o});var e,r,n,o,i,c=Function.prototype.call,p=Array.prototype,a=Object.prototype,f=p.slice,l=c.bind(a.toString),u=c.bind(a.hasOwnProperty);if((i=u(a,"__defineGetter__"))&&(e=c.bind(a.__defineGetter__),r=c.bind(a.__defineSetter__),n=c.bind(a.__lookupGetter__),o=c.bind(a.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function t(t){var e=new Array(t+2);return e[0]=e[1]=0,e}var e,r=[];if(r.splice.apply(r,t(20)),r.splice.apply(r,t(26)),e=r.length,r.splice(5,0,"XXX"),r.length,e+1==r.length)return!0}()){var y=Array.prototype.splice;Array.prototype.splice=function(t,e){return arguments.length?y.apply(this,[void 0===t?0:t,void 0===e?this.length-t:e].concat(f.call(arguments,2))):[]}}else Array.prototype.splice=function(t,e){var r=this.length;t>0?t>r&&(t=r):void 0==t?t=0:t<0&&(t=Math.max(r+t,0)),t+e<r||(e=r-t);var n=this.slice(t,t+e),o=f.call(arguments,2),i=o.length;if(t===r)i&&this.push.apply(this,o);else{var c=Math.min(e,r-t),p=t+c,a=p+i-c,l=r-p,u=r-c;if(a<p)for(var y=0;y<l;++y)this[a+y]=this[p+y];else if(a>p)for(y=l;y--;)this[a+y]=this[p+y];if(i&&t===u)this.length=u,this.push.apply(this,o);else for(this.length=u+i,y=0;y<i;++y)this[t+y]=o[y]}return n};Array.isArray||(Array.isArray=function(t){return"[object Array]"==l(t)});var s,h,b=Object("a"),v="a"!=b[0]||!(0 in b);if(Array.prototype.forEach||(Array.prototype.forEach=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=arguments[1],o=-1,i=r.length>>>0;if("[object Function]"!=l(t))throw new TypeError;for(;++o<i;)o in r&&t.call(n,r[o],o,e)}),Array.prototype.map||(Array.prototype.map=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=r.length>>>0,o=Array(n),i=arguments[1];if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");for(var c=0;c<n;c++)c in r&&(o[c]=t.call(i,r[c],c,e));return o}),Array.prototype.filter||(Array.prototype.filter=function(t){var e,r=x(this),n=v&&"[object String]"==l(this)?this.split(""):r,o=n.length>>>0,i=[],c=arguments[1];if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");for(var p=0;p<o;p++)p in n&&(e=n[p],t.call(c,e,p,r)&&i.push(e));return i}),Array.prototype.every||(Array.prototype.every=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=r.length>>>0,o=arguments[1];if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");for(var i=0;i<n;i++)if(i in r&&!t.call(o,r[i],i,e))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=r.length>>>0,o=arguments[1];if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");for(var i=0;i<n;i++)if(i in r&&t.call(o,r[i],i,e))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=r.length>>>0;if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;i<n;i++)i in r&&(o=t.call(void 0,o,r[i],i,e));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=x(this),r=v&&"[object String]"==l(this)?this.split(""):e,n=r.length>>>0;if("[object Function]"!=l(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=n-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}do{i in this&&(o=t.call(void 0,o,r[i],i,e))}while(i--);return o}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var e=v&&"[object String]"==l(this)?this.split(""):x(this),r=e.length>>>0;if(!r)return-1;var n=0;for(arguments.length>1&&(n=T(arguments[1])),n=n>=0?n:Math.max(0,r+n);n<r;n++)if(n in e&&e[n]===t)return n;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var e=v&&"[object String]"==l(this)?this.split(""):x(this),r=e.length>>>0;if(!r)return-1;var n=r-1;for(arguments.length>1&&(n=Math.min(n,T(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:a)}),!Object.getOwnPropertyDescriptor){Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(u(t,e)){var r;if(r={enumerable:!0,configurable:!0},i){var c=t.__proto__;t.__proto__=a;var p=n(t,e),f=o(t,e);if(t.__proto__=c,p||f)return p&&(r.get=p),f&&(r.set=f),r}return r.value=t[e],r}}}(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),Object.create)||(s=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var t={};for(var e in t)t[e]=null;return t.constructor=t.hasOwnProperty=t.propertyIsEnumerable=t.isPrototypeOf=t.toLocaleString=t.toString=t.valueOf=t.__proto__=null,t},Object.create=function(t,e){var r;if(null===t)r=s();else{if("object"!=typeof t)throw new TypeError("typeof prototype["+typeof t+"] != 'object'");var n=function(){};n.prototype=t,(r=new n).__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r});function j(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(t){}}if(Object.defineProperty){var O=j({}),g="undefined"==typeof document||j(document.createElement("div"));if(!O||!g)var _=Object.defineProperty}if(!Object.defineProperty||_){Object.defineProperty=function(t,c,p){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.defineProperty called on non-object: "+t);if("object"!=typeof p&&"function"!=typeof p||null===p)throw new TypeError("Property description must be an object: "+p);if(_)try{return _.call(Object,t,c,p)}catch(t){}if(u(p,"value"))if(i&&(n(t,c)||o(t,c))){var f=t.__proto__;t.__proto__=a,delete t[c],t[c]=p.value,t.__proto__=f}else t[c]=p.value;else{if(!i)throw new TypeError("getters & setters can not be defined on this javascript engine");u(p,"get")&&e(t,c,p.get),u(p,"set")&&r(t,c,p.set)}return t}}Object.defineProperties||(Object.defineProperties=function(t,e){for(var r in e)u(e,r)&&Object.defineProperty(t,r,e[r]);return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t});try{Object.freeze(function(){})}catch(t){Object.freeze=(h=Object.freeze,function(t){return"function"==typeof t?t:h(t)})}if(Object.preventExtensions||(Object.preventExtensions=function(t){return t}),Object.isSealed||(Object.isSealed=function(t){return!1}),Object.isFrozen||(Object.isFrozen=function(t){return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)===t)throw new TypeError;for(var e="";u(t,e);)e+="?";t[e]=!0;var r=u(t,e);return delete t[e],r}),!Object.keys){var w=!0,d=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],E=d.length;for(var A in{toString:null})w=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var e=[];for(var r in t)u(t,r)&&e.push(r);if(w)for(var n=0,o=E;n<o;n++){var i=d[n];u(t,i)&&e.push(i)}return e}}Date.now||(Date.now=function(){return(new Date).getTime()});var m="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";if(!String.prototype.trim||m.trim()){m="["+m+"]";var P=new RegExp("^"+m+m+"*"),S=new RegExp(m+m+"*$");String.prototype.trim=function(){return String(this).replace(P,"").replace(S,"")}}function T(t){return(t=+t)!=t?t=0:0!==t&&t!==1/0&&t!==-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t}var x=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)}});
//# sourceMappingURL=../sourcemaps/lib/es5-shim.js.map
