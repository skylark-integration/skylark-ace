/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var t=function(t){this.$editor=t;var s=this,e=[],i=!1;this.onAfterExec=function(){i=!1,s.processRows(e),e=[]},this.onExec=function(){i=!0},this.onChange=function(t){i&&(-1==e.indexOf(t.start.row)&&e.push(t.start.row),t.end.row!=t.start.row&&e.push(t.end.row))}};(function(){this.processRows=function(t){this.$inChange=!0;for(var s=[],e=0,i=t.length;e<i;e++){var o=t[e];if(!(s.indexOf(o)>-1))for(var n=this.$findCellWidthsForBlock(o),r=this.$setBlockCellWidthsToMax(n.cellWidths),h=n.firstRow,a=0,l=r.length;a<l;a++){var c=r[a];s.push(h),this.$adjustRow(h,c),h++}}this.$inChange=!1},this.$findCellWidthsForBlock=function(t){for(var s,e=[],i=t;i>=0&&0!=(s=this.$cellWidthsForRow(i)).length;)e.unshift(s),i--;var o=i+1;i=t;for(var n=this.$editor.session.getLength();i<n-1&&(i++,0!=(s=this.$cellWidthsForRow(i)).length);)e.push(s);return{cellWidths:e,firstRow:o}},this.$cellWidthsForRow=function(t){for(var s=this.$selectionColumnsForRow(t),e=[-1].concat(this.$tabsForRow(t)),i=e.map(function(t){return 0}).slice(1),o=this.$editor.session.getLine(t),n=0,r=e.length-1;n<r;n++){var h=e[n]+1,a=e[n+1],l=this.$rightmostSelectionInCell(s,a),c=o.substring(h,a);i[n]=Math.max(c.replace(/\s+$/g,"").length,l-h)}return i},this.$selectionColumnsForRow=function(t){var s=[],e=this.$editor.getCursorPosition();return this.$editor.session.getSelection().isEmpty()&&t==e.row&&s.push(e.column),s},this.$setBlockCellWidthsToMax=function(t){for(var s,e,i,o=!0,n=this.$izip_longest(t),r=0,h=n.length;r<h;r++){var a=n[r];if(a.push){a.push(NaN);for(var l=0,c=a.length;l<c;l++){var u=a[l];if(o&&(s=l,i=0,o=!1),isNaN(u)){e=l;for(var f=s;f<e;f++)t[f][r]=i;o=!0}i=Math.max(i,u)}}else console.error(a)}return t},this.$rightmostSelectionInCell=function(t,s){var e=0;if(t.length){for(var i=[],o=0,n=t.length;o<n;o++)t[o]<=s?i.push(o):i.push(0);e=Math.max.apply(Math,i)}return e},this.$tabsForRow=function(t){for(var s,e=[],i=this.$editor.session.getLine(t),o=/\t/g;null!=(s=o.exec(i));)e.push(s.index);return e},this.$adjustRow=function(t,s){var e=this.$tabsForRow(t);if(0!=e.length)for(var i=0,o=-1,n=this.$izip(s,e),r=0,h=n.length;r<h;r++){var a=n[r][0],l=n[r][1],c=(o+=1+a)-(l+=i);if(0!=c){var u=this.$editor.session.getLine(t).substr(0,l),f=u.replace(/\s*$/g,""),g=u.length-f.length;c>0&&(this.$editor.session.getDocument().insertInLine({row:t,column:l+1},Array(c+1).join(" ")+"\t"),this.$editor.session.getDocument().removeInLine(t,l,l+1),i+=c),c<0&&g>=-c&&(this.$editor.session.getDocument().removeInLine(t,l+c,l),i+=c)}}},this.$izip_longest=function(t){if(!t[0])return[];for(var s=t[0].length,e=t.length,i=1;i<e;i++){var o=t[i].length;o>s&&(s=o)}for(var n=[],r=0;r<s;r++){var h=[];for(i=0;i<e;i++)""===t[i][r]?h.push(NaN):h.push(t[i][r]);n.push(h)}return n},this.$izip=function(t,s){for(var e=t.length>=s.length?s.length:t.length,i=[],o=0;o<e;o++){var n=[t[o],s[o]];i.push(n)}return i}}).call(t.prototype),exports.ElasticTabstopsLite=t;var s=require("../editor").Editor;require("../config").defineOptions(s.prototype,"editor",{useElasticTabstops:{set:function(s){s?(this.elasticTabstops||(this.elasticTabstops=new t(this)),this.commands.on("afterExec",this.elasticTabstops.onAfterExec),this.commands.on("exec",this.elasticTabstops.onExec),this.on("change",this.elasticTabstops.onChange)):this.elasticTabstops&&(this.commands.removeListener("afterExec",this.elasticTabstops.onAfterExec),this.commands.removeListener("exec",this.elasticTabstops.onExec),this.removeListener("change",this.elasticTabstops.onChange))}}})});
//# sourceMappingURL=../sourcemaps/ext/elastic_tabstops_lite.js.map
