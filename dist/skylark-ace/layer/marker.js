/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(t,e,i){"use strict";var r=t("../range").Range,s=t("../lib/dom"),n=function(t){this.element=s.createElement("div"),this.element.className="ace_layer ace_marker-layer",t.appendChild(this.element)};(function(){this.$padding=0,this.setPadding=function(t){this.$padding=t},this.setSession=function(t){this.session=t},this.setMarkers=function(t){this.markers=t},this.elt=function(t,e){var i=-1!=this.i&&this.element.childNodes[this.i];i?this.i++:(i=document.createElement("div"),this.element.appendChild(i),this.i=-1),i.style.cssText=e,i.className=t},this.update=function(t){if(t){var e;for(var i in this.config=t,this.i=0,this.markers){var r=this.markers[i];if(r.range){var s=r.range.clipRows(t.firstRow,t.lastRow);if(!s.isEmpty())if(s=s.toScreenRange(this.session),r.renderer){var n=this.$getTop(s.start.row,t),a=this.$padding+s.start.column*t.characterWidth;r.renderer(e,s,a,n,t)}else"fullLine"==r.type?this.drawFullLineMarker(e,s,r.clazz,t):"screenLine"==r.type?this.drawScreenLineMarker(e,s,r.clazz,t):s.isMultiLine()?"text"==r.type?this.drawTextMarker(e,s,r.clazz,t):this.drawMultiLineMarker(e,s,r.clazz,t):this.drawSingleLineMarker(e,s,r.clazz+" ace_start ace_br15",t)}else r.update(e,this,this.session,t)}if(-1!=this.i)for(;this.i<this.element.childElementCount;)this.element.removeChild(this.element.lastChild)}},this.$getTop=function(t,e){return(t-e.firstRowScreen)*e.lineHeight},this.drawTextMarker=function(t,e,i,s,n){for(var a=this.session,h=e.start.row,o=e.end.row,l=h,d=0,c=0,p=a.getScreenLastRowColumn(l),w=new r(l,e.start.column,l,c);l<=o;l++)w.start.row=w.end.row=l,w.start.column=l==h?e.start.column:a.getRowWrapIndent(l),w.end.column=p,d=c,c=p,p=l+1<o?a.getScreenLastRowColumn(l+1):l==o?0:e.end.column,this.drawSingleLineMarker(t,w,i+(l==h?" ace_start":"")+" ace_br"+((l==h||l==h+1&&e.start.column?1:0)|(d<c?2:0)|(c>p?4:0)|(l==o?8:0)),s,l==o?0:1,n)},this.drawMultiLineMarker=function(t,e,i,r,s){var n=this.$padding,a=r.lineHeight,h=this.$getTop(e.start.row,r),o=n+e.start.column*r.characterWidth;(s=s||"",this.session.$bidiHandler.isBidiRow(e.start.row))?((l=e.clone()).end.row=l.start.row,l.end.column=this.session.getLine(l.start.row).length,this.drawBidiSingleLineMarker(t,l,i+" ace_br1 ace_start",r,null,s)):this.elt(i+" ace_br1 ace_start","height:"+a+"px;right:0;top:"+h+"px;left:"+o+"px;"+(s||""));if(this.session.$bidiHandler.isBidiRow(e.end.row)){var l;(l=e.clone()).start.row=l.end.row,l.start.column=0,this.drawBidiSingleLineMarker(t,l,i+" ace_br12",r,null,s)}else{h=this.$getTop(e.end.row,r);var d=e.end.column*r.characterWidth;this.elt(i+" ace_br12","height:"+a+"px;width:"+d+"px;top:"+h+"px;left:"+n+"px;"+(s||""))}if(!((a=(e.end.row-e.start.row-1)*r.lineHeight)<=0)){h=this.$getTop(e.start.row+1,r);var c=(e.start.column?1:0)|(e.end.column?0:8);this.elt(i+(c?" ace_br"+c:""),"height:"+a+"px;right:0;top:"+h+"px;left:"+n+"px;"+(s||""))}},this.drawSingleLineMarker=function(t,e,i,r,s,n){if(this.session.$bidiHandler.isBidiRow(e.start.row))return this.drawBidiSingleLineMarker(t,e,i,r,s,n);var a=r.lineHeight,h=(e.end.column+(s||0)-e.start.column)*r.characterWidth,o=this.$getTop(e.start.row,r),l=this.$padding+e.start.column*r.characterWidth;this.elt(i,"height:"+a+"px;width:"+h+"px;top:"+o+"px;left:"+l+"px;"+(n||""))},this.drawBidiSingleLineMarker=function(t,e,i,r,s,n){var a=r.lineHeight,h=this.$getTop(e.start.row,r),o=this.$padding;this.session.$bidiHandler.getSelections(e.start.column,e.end.column).forEach(function(t){this.elt(i,"height:"+a+"px;width:"+t.width+(s||0)+"px;top:"+h+"px;left:"+(o+t.left)+"px;"+(n||""))},this)},this.drawFullLineMarker=function(t,e,i,r,s){var n=this.$getTop(e.start.row,r),a=r.lineHeight;e.start.row!=e.end.row&&(a+=this.$getTop(e.end.row,r)-n),this.elt(i,"height:"+a+"px;top:"+n+"px;left:0;right:0;"+(s||""))},this.drawScreenLineMarker=function(t,e,i,r,s){var n=this.$getTop(e.start.row,r),a=r.lineHeight;this.elt(i,"height:"+a+"px;top:"+n+"px;left:0;right:0;"+(s||""))}}).call(n.prototype),e.Marker=n});
//# sourceMappingURL=../sourcemaps/layer/marker.js.map
