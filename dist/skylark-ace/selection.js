/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var t=require("./lib/oop"),s=require("./lib/lang"),e=require("./lib/event_emitter").EventEmitter,o=require("./range").Range,i=function(t){this.session=t,this.doc=t.getDocument(),this.clearSelection(),this.cursor=this.lead=this.doc.createAnchor(0,0),this.anchor=this.doc.createAnchor(0,0),this.$silent=!1;var s=this;this.cursor.on("change",function(t){s.$cursorChanged=!0,s.$silent||s._emit("changeCursor"),s.$isEmpty||s.$silent||s._emit("changeSelection"),s.$keepDesiredColumnOnChange||t.old.column==t.value.column||(s.$desiredColumn=null)}),this.anchor.on("change",function(){s.$anchorChanged=!0,s.$isEmpty||s.$silent||s._emit("changeSelection")})};(function(){t.implement(this,e),this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column},this.isMultiLine=function(){return!this.$isEmpty&&this.anchor.row!=this.cursor.row},this.getCursor=function(){return this.lead.getPosition()},this.setSelectionAnchor=function(t,s){this.$isEmpty=!1,this.anchor.setPosition(t,s)},this.getAnchor=this.getSelectionAnchor=function(){return this.$isEmpty?this.getSelectionLead():this.anchor.getPosition()},this.getSelectionLead=function(){return this.lead.getPosition()},this.isBackwards=function(){var t=this.anchor,s=this.lead;return t.row>s.row||t.row==s.row&&t.column>s.column},this.getRange=function(){var t=this.anchor,s=this.lead;return this.$isEmpty?o.fromPoints(s,s):this.isBackwards()?o.fromPoints(s,t):o.fromPoints(t,s)},this.clearSelection=function(){this.$isEmpty||(this.$isEmpty=!0,this._emit("changeSelection"))},this.selectAll=function(){this.$setSelection(0,0,Number.MAX_VALUE,Number.MAX_VALUE)},this.setRange=this.setSelectionRange=function(t,s){var e=s?t.end:t.start,o=s?t.start:t.end;this.$setSelection(e.row,e.column,o.row,o.column)},this.$setSelection=function(t,s,e,i){var n=this.$isEmpty,r=this.inMultiSelectMode;this.$silent=!0,this.$cursorChanged=this.$anchorChanged=!1,this.anchor.setPosition(t,s),this.cursor.setPosition(e,i),this.$isEmpty=!o.comparePoints(this.anchor,this.cursor),this.$silent=!1,this.$cursorChanged&&this._emit("changeCursor"),(this.$cursorChanged||this.$anchorChanged||n!=this.$isEmpty||r)&&this._emit("changeSelection")},this.$moveSelection=function(t){var s=this.lead;this.$isEmpty&&this.setSelectionAnchor(s.row,s.column),t.call(this)},this.selectTo=function(t,s){this.$moveSelection(function(){this.moveCursorTo(t,s)})},this.selectToPosition=function(t){this.$moveSelection(function(){this.moveCursorToPosition(t)})},this.moveTo=function(t,s){this.clearSelection(),this.moveCursorTo(t,s)},this.moveToPosition=function(t){this.clearSelection(),this.moveCursorToPosition(t)},this.selectUp=function(){this.$moveSelection(this.moveCursorUp)},this.selectDown=function(){this.$moveSelection(this.moveCursorDown)},this.selectRight=function(){this.$moveSelection(this.moveCursorRight)},this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)},this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)},this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)},this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)},this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)},this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)},this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)},this.getWordRange=function(t,s){if(void 0===s){var e=t||this.lead;t=e.row,s=e.column}return this.session.getWordRange(t,s)},this.selectWord=function(){this.setSelectionRange(this.getWordRange())},this.selectAWord=function(){var t=this.getCursor(),s=this.session.getAWordRange(t.row,t.column);this.setSelectionRange(s)},this.getLineRange=function(t,s){var e,i="number"==typeof t?t:this.lead.row,n=this.session.getFoldLine(i);return n?(i=n.start.row,e=n.end.row):e=i,!0===s?new o(i,0,e,this.session.getLine(e).length):new o(i,0,e+1,0)},this.selectLine=function(){this.setSelectionRange(this.getLineRange())},this.moveCursorUp=function(){this.moveCursorBy(-1,0)},this.moveCursorDown=function(){this.moveCursorBy(1,0)},this.wouldMoveIntoSoftTab=function(t,s,e){var o=t.column,i=t.column+s;return e<0&&(o=t.column-s,i=t.column),this.session.isTabStop(t)&&this.doc.getLine(t.row).slice(o,i).split(" ").length-1==s},this.moveCursorLeft=function(){var t,s=this.lead.getPosition();if(t=this.session.getFoldAt(s.row,s.column,-1))this.moveCursorTo(t.start.row,t.start.column);else if(0===s.column)s.row>0&&this.moveCursorTo(s.row-1,this.doc.getLine(s.row-1).length);else{var e=this.session.getTabSize();this.wouldMoveIntoSoftTab(s,e,-1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,-e):this.moveCursorBy(0,-1)}},this.moveCursorRight=function(){var t,s=this.lead.getPosition();if(t=this.session.getFoldAt(s.row,s.column,1))this.moveCursorTo(t.end.row,t.end.column);else if(this.lead.column==this.doc.getLine(this.lead.row).length)this.lead.row<this.doc.getLength()-1&&this.moveCursorTo(this.lead.row+1,0);else{var e=this.session.getTabSize();s=this.lead;this.wouldMoveIntoSoftTab(s,e,1)&&!this.session.getNavigateWithinSoftTabs()?this.moveCursorBy(0,e):this.moveCursorBy(0,1)}},this.moveCursorLineStart=function(){var t=this.lead.row,s=this.lead.column,e=this.session.documentToScreenRow(t,s),o=this.session.screenToDocumentPosition(e,0),i=this.session.getDisplayLine(t,null,o.row,o.column).match(/^\s*/);i[0].length==s||this.session.$useEmacsStyleLineStart||(o.column+=i[0].length),this.moveCursorToPosition(o)},this.moveCursorLineEnd=function(){var t=this.lead,s=this.session.getDocumentLastRowColumnPosition(t.row,t.column);if(this.lead.column==s.column){var e=this.session.getLine(s.row);if(s.column==e.length){var o=e.search(/\s+$/);o>0&&(s.column=o)}}this.moveCursorTo(s.row,s.column)},this.moveCursorFileEnd=function(){var t=this.doc.getLength()-1,s=this.doc.getLine(t).length;this.moveCursorTo(t,s)},this.moveCursorFileStart=function(){this.moveCursorTo(0,0)},this.moveCursorLongWordRight=function(){var t=this.lead.row,s=this.lead.column,e=this.doc.getLine(t),o=e.substring(s);this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0;var i=this.session.getFoldAt(t,s,1);if(i)this.moveCursorTo(i.end.row,i.end.column);else{if(this.session.nonTokenRe.exec(o)&&(s+=this.session.nonTokenRe.lastIndex,this.session.nonTokenRe.lastIndex=0,o=e.substring(s)),s>=e.length)return this.moveCursorTo(t,e.length),this.moveCursorRight(),void(t<this.doc.getLength()-1&&this.moveCursorWordRight());this.session.tokenRe.exec(o)&&(s+=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(t,s)}},this.moveCursorLongWordLeft=function(){var t,e=this.lead.row,o=this.lead.column;if(t=this.session.getFoldAt(e,o,-1))this.moveCursorTo(t.start.row,t.start.column);else{var i=this.session.getFoldStringAt(e,o,-1);null==i&&(i=this.doc.getLine(e).substring(0,o));var n=s.stringReverse(i);if(this.session.nonTokenRe.lastIndex=0,this.session.tokenRe.lastIndex=0,this.session.nonTokenRe.exec(n)&&(o-=this.session.nonTokenRe.lastIndex,n=n.slice(this.session.nonTokenRe.lastIndex),this.session.nonTokenRe.lastIndex=0),o<=0)return this.moveCursorTo(e,0),this.moveCursorLeft(),void(e>0&&this.moveCursorWordLeft());this.session.tokenRe.exec(n)&&(o-=this.session.tokenRe.lastIndex,this.session.tokenRe.lastIndex=0),this.moveCursorTo(e,o)}},this.$shortWordEndIndex=function(t){var s,e=0,o=/\s/,i=this.session.tokenRe;if(i.lastIndex=0,this.session.tokenRe.exec(t))e=this.session.tokenRe.lastIndex;else{for(;(s=t[e])&&o.test(s);)e++;if(e<1)for(i.lastIndex=0;(s=t[e])&&!i.test(s);)if(i.lastIndex=0,e++,o.test(s)){if(e>2){e--;break}for(;(s=t[e])&&o.test(s);)e++;if(e>2)break}}return i.lastIndex=0,e},this.moveCursorShortWordRight=function(){var t=this.lead.row,s=this.lead.column,e=this.doc.getLine(t),o=e.substring(s),i=this.session.getFoldAt(t,s,1);if(i)return this.moveCursorTo(i.end.row,i.end.column);if(s==e.length){var n=this.doc.getLength();do{t++,o=this.doc.getLine(t)}while(t<n&&/^\s*$/.test(o));/^\s+/.test(o)||(o=""),s=0}var r=this.$shortWordEndIndex(o);this.moveCursorTo(t,s+r)},this.moveCursorShortWordLeft=function(){var t,e=this.lead.row,o=this.lead.column;if(t=this.session.getFoldAt(e,o,-1))return this.moveCursorTo(t.start.row,t.start.column);var i=this.session.getLine(e).substring(0,o);if(0===o){do{e--,i=this.doc.getLine(e)}while(e>0&&/^\s*$/.test(i));o=i.length,/\s+$/.test(i)||(i="")}var n=s.stringReverse(i),r=this.$shortWordEndIndex(n);return this.moveCursorTo(e,o-r)},this.moveCursorWordRight=function(){this.session.$selectLongWords?this.moveCursorLongWordRight():this.moveCursorShortWordRight()},this.moveCursorWordLeft=function(){this.session.$selectLongWords?this.moveCursorLongWordLeft():this.moveCursorShortWordLeft()},this.moveCursorBy=function(t,s){var e,o=this.session.documentToScreenPosition(this.lead.row,this.lead.column);0===s&&(0!==t&&(this.session.$bidiHandler.isBidiRow(o.row,this.lead.row)?(e=this.session.$bidiHandler.getPosLeft(o.column),o.column=Math.round(e/this.session.$bidiHandler.charWidths[0])):e=o.column*this.session.$bidiHandler.charWidths[0]),this.$desiredColumn?o.column=this.$desiredColumn:this.$desiredColumn=o.column);var i=this.session.screenToDocumentPosition(o.row+t,o.column,e);0!==t&&0===s&&i.row===this.lead.row&&i.column===this.lead.column&&this.session.lineWidgets&&this.session.lineWidgets[i.row]&&(i.row>0||t>0)&&i.row++,this.moveCursorTo(i.row,i.column+s,0===s)},this.moveCursorToPosition=function(t){this.moveCursorTo(t.row,t.column)},this.moveCursorTo=function(t,s,e){var o=this.session.getFoldAt(t,s,1);o&&(t=o.start.row,s=o.start.column),this.$keepDesiredColumnOnChange=!0;var i=this.session.getLine(t);/[\uDC00-\uDFFF]/.test(i.charAt(s))&&i.charAt(s-1)&&(this.lead.row==t&&this.lead.column==s+1?s-=1:s+=1),this.lead.setPosition(t,s),this.$keepDesiredColumnOnChange=!1,e||(this.$desiredColumn=null)},this.moveCursorToScreen=function(t,s,e){var o=this.session.screenToDocumentPosition(t,s);this.moveCursorTo(o.row,o.column,e)},this.detach=function(){this.lead.detach(),this.anchor.detach(),this.session=this.doc=null},this.fromOrientedRange=function(t){this.setSelectionRange(t,t.cursor==t.start),this.$desiredColumn=t.desiredColumn||this.$desiredColumn},this.toOrientedRange=function(t){var s=this.getRange();return t?(t.start.column=s.start.column,t.start.row=s.start.row,t.end.column=s.end.column,t.end.row=s.end.row):t=s,t.cursor=this.isBackwards()?t.start:t.end,t.desiredColumn=this.$desiredColumn,t},this.getRangeOfMovements=function(t){var s=this.getCursor();try{t(this);var e=this.getCursor();return o.fromPoints(s,e)}catch(t){return o.fromPoints(s,s)}finally{this.moveCursorToPosition(s)}},this.toJSON=function(){if(this.rangeCount)var t=this.ranges.map(function(t){var s=t.clone();return s.isBackwards=t.cursor==t.start,s});else(t=this.getRange()).isBackwards=this.isBackwards();return t},this.fromJSON=function(t){if(void 0==t.start){if(this.rangeList){this.toSingleRange(t[0]);for(var s=t.length;s--;){var e=o.fromPoints(t[s].start,t[s].end);t[s].isBackwards&&(e.cursor=e.start),this.addRange(e,!0)}return}t=t[0]}this.rangeList&&this.toSingleRange(t),this.setSelectionRange(t,t.isBackwards)},this.isEqual=function(t){if((t.length||this.rangeCount)&&t.length!=this.rangeCount)return!1;if(!t.length||!this.ranges)return this.getRange().isEqual(t);for(var s=this.ranges.length;s--;)if(!this.ranges[s].isEqual(t[s]))return!1;return!0}}).call(i.prototype),exports.Selection=i});
//# sourceMappingURL=sourcemaps/selection.js.map
