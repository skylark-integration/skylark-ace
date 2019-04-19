/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){"use strict";var o=e("../../lib/oop"),r=(e("../../lib/lang"),e("../../range").Range),a=e("./fold_mode").FoldMode,l=e("../../token_iterator").TokenIterator,i=t.FoldMode=function(e,t){a.call(this),this.voidElements=e||{},this.optionalEndTags=o.mixin({},this.voidElements),t&&o.mixin(this.optionalEndTags,t)};o.inherits(i,a);var s=function(){this.tagName="",this.closing=!1,this.selfClosing=!1,this.start={row:0,column:0},this.end={row:0,column:0}};function g(e,t){return e.type.lastIndexOf(t+".xml")>-1}(function(){this.getFoldWidget=function(e,t,n){var o=this._getFirstTagInLine(e,n);return o?o.closing||!o.tagName&&o.selfClosing?"markbeginend"==t?"end":"":!o.tagName||o.selfClosing||this.voidElements.hasOwnProperty(o.tagName.toLowerCase())?"":this._findEndTagInLine(e,n,o.tagName,o.end.column)?"":"start":this.getCommentFoldWidget(e,n)},this.getCommentFoldWidget=function(e,t){return/comment/.test(e.getState(t))&&/<!-/.test(e.getLine(t))?"start":""},this._getFirstTagInLine=function(e,t){for(var n=e.getTokens(t),o=new s,r=0;r<n.length;r++){var a=n[r];if(g(a,"tag-open")){if(o.end.column=o.start.column+a.value.length,o.closing=g(a,"end-tag-open"),!(a=n[++r]))return null;for(o.tagName=a.value,o.end.column+=a.value.length,r++;r<n.length;r++)if(a=n[r],o.end.column+=a.value.length,g(a,"tag-close")){o.selfClosing="/>"==a.value;break}return o}if(g(a,"tag-close"))return o.selfClosing="/>"==a.value,o;o.start.column+=a.value.length}return null},this._findEndTagInLine=function(e,t,n,o){for(var r=e.getTokens(t),a=0,l=0;l<r.length;l++){var i=r[l];if(!((a+=i.value.length)<o)&&g(i,"end-tag-open")&&(i=r[l+1])&&i.value==n)return!0}return!1},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new s;do{if(g(t,"tag-open"))n.closing=g(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn();else if(g(t,"tag-name"))n.tagName=t.value;else if(g(t,"tag-close"))return n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length,e.stepForward(),n}while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=new s;do{if(g(t,"tag-open"))return n.closing=g(t,"end-tag-open"),n.start.row=e.getCurrentTokenRow(),n.start.column=e.getCurrentTokenColumn(),e.stepBackward(),n;g(t,"tag-name")?n.tagName=t.value:g(t,"tag-close")&&(n.selfClosing="/>"==t.value,n.end.row=e.getCurrentTokenRow(),n.end.column=e.getCurrentTokenColumn()+t.value.length)}while(t=e.stepBackward());return null},this._pop=function(e,t){for(;e.length;){var n=e[e.length-1];if(t&&n.tagName!=t.tagName){if(this.optionalEndTags.hasOwnProperty(n.tagName)){e.pop();continue}return null}return e.pop()}},this.getFoldWidgetRange=function(e,t,n){var o=this._getFirstTagInLine(e,n);if(!o)return this.getCommentFoldWidget(e,n)&&e.getCommentFoldRange(n,e.getLine(n).length);var a,i=[];if(o.closing||o.selfClosing){g=new l(e,n,o.end.column);for(var s={row:n,column:o.start.column};a=this._readTagBackward(g);){if(a.selfClosing){if(i.length)continue;return a.start.column+=a.tagName.length+2,a.end.column-=2,r.fromPoints(a.start,a.end)}if(a.closing)i.push(a);else if(this._pop(i,a),0==i.length)return a.start.column+=a.tagName.length+2,a.start.row==a.end.row&&a.start.column<a.end.column&&(a.start.column=a.end.column),r.fromPoints(a.start,s)}}else{var g=new l(e,n,o.start.column),u={row:n,column:o.start.column+o.tagName.length+2};for(o.start.row==o.end.row&&(u.column=o.end.column);a=this._readTagForward(g);){if(a.selfClosing){if(i.length)continue;return a.start.column+=a.tagName.length+2,a.end.column-=2,r.fromPoints(a.start,a.end)}if(a.closing){if(this._pop(i,a),0==i.length)return r.fromPoints(u,a.start)}else i.push(a)}}}}).call(i.prototype)});
//# sourceMappingURL=../../sourcemaps/mode/folding/xml.js.map
