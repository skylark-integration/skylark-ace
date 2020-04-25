/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("../lib/oop"),t=require("../lib/lang"),r=require("./text_highlight_rules").TextHighlightRules,n=require("./html_highlight_rules").HtmlHighlightRules,o=function(){n.call(this);var e=t.arrayToMap("true|false|null".split("|")),r=t.arrayToMap("_DateTool|_DisplayTool|_EscapeTool|_FieldTool|_MathTool|_NumberTool|_SerializerTool|_SortTool|_StringTool|_XPathTool".split("|")),o=t.arrayToMap("$contentRoot|$foreach".split("|")),a=t.arrayToMap("#set|#macro|#include|#parse|#if|#elseif|#else|#foreach|#break|#end|#stop".split("|"));for(var s in this.$rules.start.push({token:"comment",regex:"##.*$"},{token:"comment.block",regex:"#\\*",next:"vm_comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(t){return a.hasOwnProperty(t)?"keyword":e.hasOwnProperty(t)?"constant.language":o.hasOwnProperty(t)?"variable.language":r.hasOwnProperty(t)||r.hasOwnProperty(t.substring(1))?"support.function":"debugger"==t?"invalid.deprecated":t.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*)$/)?"variable":"identifier"},regex:"[a-zA-Z$#][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}),this.$rules.vm_comment=[{token:"comment",regex:"\\*#|--\x3e",next:"start"},{defaultToken:"comment"}],this.$rules.vm_start=[{token:"variable",regex:"}",next:"pop"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(t){return a.hasOwnProperty(t)?"keyword":e.hasOwnProperty(t)?"constant.language":o.hasOwnProperty(t)?"variable.language":r.hasOwnProperty(t)||r.hasOwnProperty(t.substring(1))?"support.function":"debugger"==t?"invalid.deprecated":t.match(/^(\$[a-zA-Z_$][a-zA-Z0-9_]*)$/)?"variable":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],this.$rules)this.$rules[s].unshift({token:"variable",regex:"\\${",push:"vm_start"});this.normalizeRules()};e.inherits(o,r),exports.VelocityHighlightRules=o});
//# sourceMappingURL=../sourcemaps/mode/velocity_highlight_rules.js.map
