/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(t,i,e){"use strict";var o=t("../lib/oop"),h=t("./text").Mode,l=t("./d_highlight_rules").DHighlightRules,s=t("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=l,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};o.inherits(n,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/d"}.call(n.prototype),i.Mode=n});
//# sourceMappingURL=../sourcemaps/mode/d.js.map
