/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(t,e,n){"use strict";var i=t("../lib/oop"),h=t("./text").Mode,o=t("./perl_highlight_rules").PerlHighlightRules,u=t("./matching_brace_outdent").MatchingBraceOutdent,s=t("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=o,this.$outdent=new u,this.foldingRules=new s({start:"^=(begin|item)\\b",end:"^=(cut)\\b"}),this.$behaviour=this.$defaultBehaviour};i.inherits(r,h),function(){this.lineCommentStart="#",this.blockComment=[{start:"=begin",end:"=cut",lineStartOnly:!0},{start:"=item",end:"=cut",lineStartOnly:!0}],this.getNextLineIndent=function(t,e,n){var i=this.$getIndent(e),h=this.getTokenizer().getLineTokens(e,t).tokens;if(h.length&&"comment"==h[h.length-1].type)return i;"start"==t&&(e.match(/^.*[\{\(\[:]\s*$/)&&(i+=n));return i},this.checkOutdent=function(t,e,n){return this.$outdent.checkOutdent(e,n)},this.autoOutdent=function(t,e,n){this.$outdent.autoOutdent(e,n)},this.$id="ace/mode/perl"}.call(r.prototype),e.Mode=r});
//# sourceMappingURL=../sourcemaps/mode/perl.js.map
