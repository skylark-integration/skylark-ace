/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("./lib/lang"),t=require("./lib/oop"),r=require("./range").Range,n=function(){this.$options={}};(function(){this.set=function(e){return t.mixin(this.$options,e),this},this.getOptions=function(){return e.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$options,n=this.$matchIterator(e,t);if(!n)return!1;var i=null;return n.forEach(function(e,n,s,a){return i=new r(e,n,s,a),!(n==a&&t.start&&t.start.start&&0!=t.skipCurrent&&i.isEqual(t.start))||(i=null,!1)}),i},this.findAll=function(t){var n=this.$options;if(!n.needle)return[];this.$assembleRegExp(n);var i=n.range,s=i?t.getLines(i.start.row,i.end.row):t.doc.getAllLines(),a=[],o=n.re;if(n.$isMultiLine){var f,l=o.length,u=s.length-l;e:for(var h=o.offset||0;h<=u;h++){for(var c=0;c<l;c++)if(-1==s[h+c].search(o[c]))continue e;var g=s[h],p=s[h+l-1],v=g.length-g.match(o[0])[0].length,d=p.match(o[l-1])[0].length;f&&f.end.row===h&&f.end.column>v||(a.push(f=new r(h,v,h+l-1,d)),l>2&&(h=h+l-2))}}else for(var w=0;w<s.length;w++){var m=e.getMatchOffsets(s[w],o);for(c=0;c<m.length;c++){var x=m[c];a.push(new r(w,x.offset,w,x.offset+x.length))}}if(i){var $=i.start.column,E=i.start.column;for(w=0,c=a.length-1;w<c&&a[w].start.column<$&&a[w].start.row==i.start.row;)w++;for(;w<c&&a[c].end.column>E&&a[c].end.row==i.end.row;)c--;for(a=a.slice(w,c+1),w=0,c=a.length;w<c;w++)a[w].start.row+=i.start.row,a[w].end.row+=i.start.row}return a},this.replace=function(e,t){var r=this.$options,n=this.$assembleRegExp(r);if(r.$isMultiLine)return t;if(n){var i=n.exec(e);if(!i||i[0].length!=e.length)return null;if(t=e.replace(n,t),r.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var a=e[s];a&&a.toLowerCase()!=a?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase()}t=t.join("")}return t}},this.$assembleRegExp=function(t,r){if(t.needle instanceof RegExp)return t.re=t.needle;var n=t.needle;if(!t.needle)return t.re=!1;t.regExp||(n=e.escapeRegExp(n)),t.wholeWord&&(n=function(e,t){function r(e){return/\w/.test(e)||t.regExp?"\\b":""}return r(e[0])+e+r(e[e.length-1])}(n,t));var i=t.caseSensitive?"gm":"gmi";if(t.$isMultiLine=!r&&/[\n\r]/.test(n),t.$isMultiLine)return t.re=this.$assembleMultilineRegExp(n,i);try{var s=new RegExp(n,i)}catch(e){s=!1}return t.re=s},this.$assembleMultilineRegExp=function(e,t){for(var r=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),n=[],i=0;i<r.length;i++)try{n.push(new RegExp(r[i],t))}catch(e){return!1}return n},this.$matchIterator=function(e,t){var r=this.$assembleRegExp(t);if(!r)return!1;var n=1==t.backwards,i=0!=t.skipCurrent,s=t.range,a=t.start;a||(a=s?s[n?"end":"start"]:e.selection.getRange()),a.start&&(a=a[i!=n?"end":"start"]);var o=s?s.start.row:0,f=s?s.end.row:e.getLength()-1;if(n)var l=function(e){var r=a.row;if(!h(r,a.column,e)){for(r--;r>=o;r--)if(h(r,Number.MAX_VALUE,e))return;if(0!=t.wrap)for(r=f,o=a.row;r>=o;r--)if(h(r,Number.MAX_VALUE,e))return}};else l=function(e){var r=a.row;if(!h(r,a.column,e)){for(r+=1;r<=f;r++)if(h(r,0,e))return;if(0!=t.wrap)for(r=o,f=a.row;r<=f;r++)if(h(r,0,e))return}};if(t.$isMultiLine)var u=r.length,h=function(t,i,s){var a=n?t-u+1:t;if(!(a<0)){var o=e.getLine(a),f=o.search(r[0]);if(!(!n&&f<i||-1===f)){for(var l=1;l<u;l++)if(-1==(o=e.getLine(a+l)).search(r[l]))return;var h=o.match(r[u-1])[0].length;if(!(n&&h>i))return!!s(a,f,a+u-1,h)||void 0}}};else if(n)h=function(t,n,i){var s,a=e.getLine(t),o=[],f=0;for(r.lastIndex=0;s=r.exec(a);){var l=s[0].length;if(f=s.index,!l){if(f>=a.length)break;r.lastIndex=f+=1}if(s.index+l>n)break;o.push(s.index,l)}for(var u=o.length-1;u>=0;u-=2){var h=o[u-1];if(i(t,h,t,h+(l=o[u])))return!0}};else h=function(t,n,i){var s,a,o=e.getLine(t);for(r.lastIndex=n;a=r.exec(o);){var f=a[0].length;if(i(t,s=a.index,t,s+f))return!0;if(!f&&(r.lastIndex=s+=1,s>=o.length))return!1}};return{forEach:l}}}).call(n.prototype),exports.Search=n});
//# sourceMappingURL=sourcemaps/search.js.map
