/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var t=require("../lib/oop"),i=require("./text").Mode,e=require("./applescript_highlight_rules").AppleScriptHighlightRules,l=require("./folding/cstyle").FoldMode,o=function(){this.HighlightRules=e,this.foldingRules=new l,this.$behaviour=this.$defaultBehaviour};t.inherits(o,i),function(){this.lineCommentStart="--",this.blockComment={start:"(*",end:"*)"},this.$id="ace/mode/applescript"}.call(o.prototype),exports.Mode=o});
//# sourceMappingURL=../sourcemaps/mode/applescript.js.map
