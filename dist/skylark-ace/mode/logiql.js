/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(t,e,n){"use strict";var i=t("../lib/oop"),o=t("./text").Mode,r=t("./logiql_highlight_rules").LogiQLHighlightRules,s=t("./folding/coffee").FoldMode,a=t("../token_iterator").TokenIterator,h=t("../range").Range,u=t("./behaviour/cstyle").CstyleBehaviour,g=t("./matching_brace_outdent").MatchingBraceOutdent,l=function(){this.HighlightRules=r,this.foldingRules=new s,this.$outdent=new g,this.$behaviour=new u};i.inherits(l,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,e,n){var i=this.$getIndent(e),o=this.getTokenizer().getLineTokens(e,t),r=o.tokens,s=o.state;if(/comment|string/.test(s))return i;if(r.length&&"comment.single"==r[r.length-1].type)return i;e.match();return/(-->|<--|<-|->|{)\s*$/.test(e)&&(i+=n),i},this.checkOutdent=function(t,e,n){return!!this.$outdent.checkOutdent(e,n)||("\n"===n||"\r\n"===n)&&!!/^\s+/.test(e)},this.autoOutdent=function(t,e,n){if(!this.$outdent.autoOutdent(e,n)){var i=e.getLine(n),o=i.match(/^\s+/),r=i.lastIndexOf(".")+1;if(!o||!n||!r)return 0;e.getLine(n+1);var s=this.getMatching(e,{row:n,column:r});if(!s||s.start.row==n)return 0;r=o[0].length;var a=this.$getIndent(e.getLine(s.start.row));e.replace(new h(n+1,0,n+1,r),a)}},this.getMatching=function(t,e,n){void 0==e&&(e=t.selection.lead),"object"==typeof e&&(n=e.column,e=e.row);var i,o=t.getTokenAt(e,n);if(o){if("keyword.start"==o.type){(r=new a(t,e,n)).step=r.stepForward}else{if("keyword.end"!=o.type)return;var r;(r=new a(t,e,n)).step=r.stepBackward}for(;(i=r.step())&&"keyword.start"!=i.type&&"keyword.end"!=i.type;);if(i&&i.type!=o.type){var s=r.getCurrentTokenColumn();e=r.getCurrentTokenRow();return new h(e,s,e,s+i.value.length)}}},this.$id="ace/mode/logiql"}.call(l.prototype),e.Mode=l});
//# sourceMappingURL=../sourcemaps/mode/logiql.js.map
