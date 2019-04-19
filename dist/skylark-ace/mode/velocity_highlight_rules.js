/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,r){"use strict";var n=e("../lib/oop"),o=e("../lib/lang"),a=e("./text_highlight_rules").TextHighlightRules,s=e("./html_highlight_rules").HtmlHighlightRules,i=function(){s.call(this);var e=o.arrayToMap("true|false|null".split("|")),t=o.arrayToMap("_DateTool|_DisplayTool|_EscapeTool|_FieldTool|_MathTool|_NumberTool|_SerializerTool|_SortTool|_StringTool|_XPathTool".split("|")),r=o.arrayToMap("$contentRoot|$foreach".split("|")),n=o.arrayToMap("#set|#macro|#include|#parse|#if|#elseif|#else|#foreach|#break|#end|#stop".split("|"));for(var a in this.$rules.start.push({token:"comment",regex:"##.*$"},{token:"comment.block",regex:"#\\*",next:"vm_comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(o){return n.hasOwnProperty(o)?"keyword":e.hasOwnProperty(o)?"constant.language":r.hasOwnProperty(o)?"variable.language":t.hasOwnProperty(o)||t.hasOwnProperty(o.substring(1))?"support.function":"debugger"==o?"invalid.deprecated":o.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*)$/)?"variable":"identifier"},regex:"[a-zA-Z$#][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}),this.$rules.vm_comment=[{token:"comment",regex:"\\*#|--\x3e",next:"start"},{defaultToken:"comment"}],this.$rules.vm_start=[{token:"variable",regex:"}",next:"pop"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(o){return n.hasOwnProperty(o)?"keyword":e.hasOwnProperty(o)?"constant.language":r.hasOwnProperty(o)?"variable.language":t.hasOwnProperty(o)||t.hasOwnProperty(o.substring(1))?"support.function":"debugger"==o?"invalid.deprecated":o.match(/^(\$[a-zA-Z_$][a-zA-Z0-9_]*)$/)?"variable":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|&|\\*|\\-|\\+|=|!=|<=|>=|<|>|&&|\\|\\|"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],this.$rules)this.$rules[a].unshift({token:"variable",regex:"\\${",push:"vm_start"});this.normalizeRules()};n.inherits(i,a),t.VelocityHighlightRules=i});
//# sourceMappingURL=../sourcemaps/mode/velocity_highlight_rules.js.map
