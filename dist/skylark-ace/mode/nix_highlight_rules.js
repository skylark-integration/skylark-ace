/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("../lib/oop"),t=require("./text_highlight_rules").TextHighlightRules,n=function(){var e=this.createKeywordMapper({"constant.language.nix":"true|false","keyword.control.nix":"with|import|if|else|then|inherit","keyword.declaration.nix":"let|in|rec"},"identifier");this.$rules={start:[{token:"comment",regex:/#.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant",regex:"<[^>]+>"},{regex:"(==|!=|<=?|>=?)",token:["keyword.operator.comparison.nix"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.nix"]},{regex:"=",token:"keyword.operator.assignment.nix"},{token:"string",regex:"''",next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',push:"qqstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{regex:"}",token:function(e,t,n){return n[1]&&"q"==n[1].charAt(0)?"constant.language.escape":"text"},next:"pop"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqdoc:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"''",next:"pop"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:'"',next:"pop"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:/\$\{/,push:"start"},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},this.normalizeRules()};e.inherits(n,t),exports.NixHighlightRules=n});
//# sourceMappingURL=../sourcemaps/mode/nix_highlight_rules.js.map
