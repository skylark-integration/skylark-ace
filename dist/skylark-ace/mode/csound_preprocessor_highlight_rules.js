/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,a=function(){this.semicolonComments={token:"comment.line.semicolon.csound",regex:";.*$"},this.comments=[{token:"punctuation.definition.comment.begin.csound",regex:"/\\*",push:[{token:"punctuation.definition.comment.end.csound",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.csound"}]},{token:"comment.line.double-slash.csound",regex:"//.*$"},this.semicolonComments],this.macroUses=[{token:["entity.name.function.preprocessor.csound","punctuation.definition.macro-parameter-value-list.begin.csound"],regex:/(\$[A-Z_a-z]\w*\.?)(\()/,next:"macro parameter value list"},{token:"entity.name.function.preprocessor.csound",regex:/\$[A-Z_a-z]\w*(?:\.|\b)/}],this.numbers=[{token:"constant.numeric.float.csound",regex:/(?:\d+[Ee][+-]?\d+)|(?:\d+\.\d*|\d*\.\d+)(?:[Ee][+-]?\d+)?/},{token:["storage.type.number.csound","constant.numeric.integer.hexadecimal.csound"],regex:/(0[Xx])([0-9A-Fa-f]+)/},{token:"constant.numeric.integer.decimal.csound",regex:/\d+/}],this.bracedStringContents=[{token:"constant.character.escape.csound",regex:/\\(?:[\\abnrt"]|[0-7]{1,3})/},{token:"constant.character.placeholder.csound",regex:/%[#0\- +]*\d*(?:\.\d+)?[diuoxXfFeEgGaAcs]/},{token:"constant.character.escape.csound",regex:/%%/}],this.quotedStringContents=[this.macroUses,this.bracedStringContents];var e=[this.comments,{token:"keyword.preprocessor.csound",regex:/#(?:e(?:nd(?:if)?|lse)\b|##)|@@?[ \t]*\d+/},{token:"keyword.preprocessor.csound",regex:/#include/,push:[this.comments,{token:"string.csound",regex:/([^ \t])(?:.*?\1)/,next:"pop"}]},{token:"keyword.preprocessor.csound",regex:/#[ \t]*define/,next:"define directive"},{token:"keyword.preprocessor.csound",regex:/#(?:ifn?def|undef)\b/,next:"macro directive"},this.macroUses];this.$rules={start:e,"define directive":[this.comments,{token:"entity.name.function.preprocessor.csound",regex:/[A-Z_a-z]\w*/},{token:"punctuation.definition.macro-parameter-name-list.begin.csound",regex:/\(/,next:"macro parameter name list"},{token:"punctuation.definition.macro.begin.csound",regex:/#/,next:"macro body"}],"macro parameter name list":[{token:"variable.parameter.preprocessor.csound",regex:/[A-Z_a-z]\w*/},{token:"punctuation.definition.macro-parameter-name-list.end.csound",regex:/\)/,next:"define directive"}],"macro body":[{token:"constant.character.escape.csound",regex:/\\#/},{token:"punctuation.definition.macro.end.csound",regex:/#/,next:"start"},e],"macro directive":[this.comments,{token:"entity.name.function.preprocessor.csound",regex:/[A-Z_a-z]\w*/,next:"start"}],"macro parameter value list":[{token:"punctuation.definition.macro-parameter-value-list.end.csound",regex:/\)/,next:"start"},{token:"punctuation.definition.string.begin.csound",regex:/"/,next:"macro parameter value quoted string"},this.pushRule({token:"punctuation.macro-parameter-value-parenthetical.begin.csound",regex:/\(/,next:"macro parameter value parenthetical"}),{token:"punctuation.macro-parameter-value-separator.csound",regex:"[#']"}],"macro parameter value quoted string":[{token:"constant.character.escape.csound",regex:/\\[#'()]/},{token:"invalid.illegal.csound",regex:/[#'()]/},{token:"punctuation.definition.string.end.csound",regex:/"/,next:"macro parameter value list"},this.quotedStringContents,{defaultToken:"string.quoted.csound"}],"macro parameter value parenthetical":[{token:"constant.character.escape.csound",regex:/\\\)/},this.popRule({token:"punctuation.macro-parameter-value-parenthetical.end.csound",regex:/\)/}),this.pushRule({token:"punctuation.macro-parameter-value-parenthetical.begin.csound",regex:/\(/,next:"macro parameter value parenthetical"}),e]}};r.inherits(a,o),function(){this.pushRule=function(e){return{regex:e.regex,onMatch:function(t,n,r,o){if(0===r.length&&r.push(n),Array.isArray(e.next))for(var a=0;a<e.next.length;a++)r.push(e.next[a]);else r.push(e.next);return this.next=r[r.length-1],e.token},get next(){return Array.isArray(e.next)?e.next[e.next.length-1]:e.next},set next(t){if(Array.isArray(e.next)){var n=e.next[e.next.length-1],r=n.length-1,o=t.length-1;if(o>r)for(;r>=0&&o>=0;){if(n.charAt(r)!==t.charAt(o)){for(var a=t.substr(0,o),c=0;c<e.next.length;c++)e.next[c]=a+e.next[c];break}r--,o--}}else e.next=t},get token(){return e.token}}},this.popRule=function(e){return{regex:e.regex,onMatch:function(t,n,r,o){return r.pop(),e.next?(r.push(e.next),this.next=r[r.length-1]):this.next=r.length>1?r[r.length-1]:r.pop(),e.token}}}}.call(a.prototype),t.CsoundPreprocessorHighlightRules=a});
//# sourceMappingURL=../sourcemaps/mode/csound_preprocessor_highlight_rules.js.map
