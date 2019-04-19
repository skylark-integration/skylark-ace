/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,r){"use strict";var n=e("./lib/lang"),i=e("./lib/oop"),s=e("./range").Range,a=function(){this.$options={}};(function(){this.set=function(e){return i.mixin(this.$options,e),this},this.getOptions=function(){return n.copyObject(this.$options)},this.setOptions=function(e){this.$options=e},this.find=function(e){var t=this.$options,r=this.$matchIterator(e,t);if(!r)return!1;var n=null;return r.forEach(function(e,r,i,a){return n=new s(e,r,i,a),!(r==a&&t.start&&t.start.start&&0!=t.skipCurrent&&n.isEqual(t.start))||(n=null,!1)}),n},this.findAll=function(e){var t=this.$options;if(!t.needle)return[];this.$assembleRegExp(t);var r=t.range,i=r?e.getLines(r.start.row,r.end.row):e.doc.getAllLines(),a=[],o=t.re;if(t.$isMultiLine){var f,l=o.length,u=i.length-l;e:for(var h=o.offset||0;h<=u;h++){for(var c=0;c<l;c++)if(-1==i[h+c].search(o[c]))continue e;var g=i[h],p=i[h+l-1],v=g.length-g.match(o[0])[0].length,d=p.match(o[l-1])[0].length;f&&f.end.row===h&&f.end.column>v||(a.push(f=new s(h,v,h+l-1,d)),l>2&&(h=h+l-2))}}else for(var w=0;w<i.length;w++){var m=n.getMatchOffsets(i[w],o);for(c=0;c<m.length;c++){var x=m[c];a.push(new s(w,x.offset,w,x.offset+x.length))}}if(r){var $=r.start.column,E=r.start.column;for(w=0,c=a.length-1;w<c&&a[w].start.column<$&&a[w].start.row==r.start.row;)w++;for(;w<c&&a[c].end.column>E&&a[c].end.row==r.end.row;)c--;for(a=a.slice(w,c+1),w=0,c=a.length;w<c;w++)a[w].start.row+=r.start.row,a[w].end.row+=r.start.row}return a},this.replace=function(e,t){var r=this.$options,n=this.$assembleRegExp(r);if(r.$isMultiLine)return t;if(n){var i=n.exec(e);if(!i||i[0].length!=e.length)return null;if(t=e.replace(n,t),r.preserveCase){t=t.split("");for(var s=Math.min(e.length,e.length);s--;){var a=e[s];a&&a.toLowerCase()!=a?t[s]=t[s].toUpperCase():t[s]=t[s].toLowerCase()}t=t.join("")}return t}},this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle;var r=e.needle;if(!e.needle)return e.re=!1;e.regExp||(r=n.escapeRegExp(r)),e.wholeWord&&(r=function(e,t){function r(e){return/\w/.test(e)||t.regExp?"\\b":""}return r(e[0])+e+r(e[e.length-1])}(r,e));var i=e.caseSensitive?"gm":"gmi";if(e.$isMultiLine=!t&&/[\n\r]/.test(r),e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(r,i);try{var s=new RegExp(r,i)}catch(e){s=!1}return e.re=s},this.$assembleMultilineRegExp=function(e,t){for(var r=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n"),n=[],i=0;i<r.length;i++)try{n.push(new RegExp(r[i],t))}catch(e){return!1}return n},this.$matchIterator=function(e,t){var r=this.$assembleRegExp(t);if(!r)return!1;var n=1==t.backwards,i=0!=t.skipCurrent,s=t.range,a=t.start;a||(a=s?s[n?"end":"start"]:e.selection.getRange()),a.start&&(a=a[i!=n?"end":"start"]);var o=s?s.start.row:0,f=s?s.end.row:e.getLength()-1;if(n)var l=function(e){var r=a.row;if(!h(r,a.column,e)){for(r--;r>=o;r--)if(h(r,Number.MAX_VALUE,e))return;if(0!=t.wrap)for(r=f,o=a.row;r>=o;r--)if(h(r,Number.MAX_VALUE,e))return}};else l=function(e){var r=a.row;if(!h(r,a.column,e)){for(r+=1;r<=f;r++)if(h(r,0,e))return;if(0!=t.wrap)for(r=o,f=a.row;r<=f;r++)if(h(r,0,e))return}};if(t.$isMultiLine)var u=r.length,h=function(t,i,s){var a=n?t-u+1:t;if(!(a<0)){var o=e.getLine(a),f=o.search(r[0]);if(!(!n&&f<i||-1===f)){for(var l=1;l<u;l++)if(-1==(o=e.getLine(a+l)).search(r[l]))return;var h=o.match(r[u-1])[0].length;if(!(n&&h>i))return!!s(a,f,a+u-1,h)||void 0}}};else if(n)h=function(t,n,i){var s,a=e.getLine(t),o=[],f=0;for(r.lastIndex=0;s=r.exec(a);){var l=s[0].length;if(f=s.index,!l){if(f>=a.length)break;r.lastIndex=f+=1}if(s.index+l>n)break;o.push(s.index,l)}for(var u=o.length-1;u>=0;u-=2){var h=o[u-1];if(i(t,h,t,h+(l=o[u])))return!0}};else h=function(t,n,i){var s,a,o=e.getLine(t);for(r.lastIndex=n;a=r.exec(o);){var f=a[0].length;if(i(t,s=a.index,t,s+f))return!0;if(!f&&(r.lastIndex=s+=1,s>=o.length))return!1}};return{forEach:l}}}).call(a.prototype),t.Search=a});
//# sourceMappingURL=sourcemaps/search.js.map
