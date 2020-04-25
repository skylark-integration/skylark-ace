/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var t=require("../lib/oop"),e=require("./text").Mode,i=require("./turtle_highlight_rules").TurtleHighlightRules,l=require("./folding/cstyle").FoldMode,o=function(){this.HighlightRules=i,this.foldingRules=new l};t.inherits(o,e),function(){this.$id="ace/mode/turtle"}.call(o.prototype),exports.Mode=o});
//# sourceMappingURL=../sourcemaps/mode/turtle.js.map
