/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,a){"use strict";var r=e("../lib/oop"),n=e("./html_highlight_rules").HtmlHighlightRules,o=function(){n.call(this);var e={start:[{include:"#comments"},{include:"#blocks"}],"#blocks":[{token:"punctuation.section.embedded.begin.smarty",regex:"\\{%?",push:[{token:"punctuation.section.embedded.end.smarty",regex:"%?\\}",next:"pop"},{include:"#strings"},{include:"#variables"},{include:"#lang"},{defaultToken:"source.smarty"}]}],"#comments":[{token:["punctuation.definition.comment.smarty","comment.block.smarty"],regex:"(\\{%?)(\\*)",push:[{token:"comment.block.smarty",regex:"\\*%?\\}",next:"pop"},{defaultToken:"comment.block.smarty"}]}],"#lang":[{token:"keyword.operator.smarty",regex:"(?:!=|!|<=|>=|<|>|===|==|%|&&|\\|\\|)|\\b(?:and|or|eq|neq|ne|gte|gt|ge|lte|lt|le|not|mod)\\b"},{token:"constant.language.smarty",regex:"\\b(?:TRUE|FALSE|true|false)\\b"},{token:"keyword.control.smarty",regex:"\\b(?:if|else|elseif|foreach|foreachelse|section|switch|case|break|default)\\b"},{token:"variable.parameter.smarty",regex:"\\b[a-zA-Z]+="},{token:"support.function.built-in.smarty",regex:"\\b(?:capture|config_load|counter|cycle|debug|eval|fetch|include_php|include|insert|literal|math|strip|rdelim|ldelim|assign|constant|block|html_[a-z_]*)\\b"},{token:"support.function.variable-modifier.smarty",regex:"\\|(?:capitalize|cat|count_characters|count_paragraphs|count_sentences|count_words|date_format|default|escape|indent|lower|nl2br|regex_replace|replace|spacify|string_format|strip_tags|strip|truncate|upper|wordwrap)"}],"#strings":[{token:"punctuation.definition.string.begin.smarty",regex:"'",push:[{token:"punctuation.definition.string.end.smarty",regex:"'",next:"pop"},{token:"constant.character.escape.smarty",regex:"\\\\."},{defaultToken:"string.quoted.single.smarty"}]},{token:"punctuation.definition.string.begin.smarty",regex:'"',push:[{token:"punctuation.definition.string.end.smarty",regex:'"',next:"pop"},{token:"constant.character.escape.smarty",regex:"\\\\."},{defaultToken:"string.quoted.double.smarty"}]}],"#variables":[{token:["punctuation.definition.variable.smarty","variable.other.global.smarty"],regex:"\\b(\\$)(Smarty\\.)"},{token:["punctuation.definition.variable.smarty","variable.other.smarty"],regex:"(\\$)([a-zA-Z_][a-zA-Z0-9_]*)\\b"},{token:["keyword.operator.smarty","variable.other.property.smarty"],regex:"(->)([a-zA-Z_][a-zA-Z0-9_]*)\\b"},{token:["keyword.operator.smarty","meta.function-call.object.smarty","punctuation.definition.variable.smarty","variable.other.smarty","punctuation.definition.variable.smarty"],regex:"(->)([a-zA-Z_][a-zA-Z0-9_]*)(\\()(.*?)(\\))"}]},t=e.start;for(var a in this.$rules)this.$rules[a].unshift.apply(this.$rules[a],t);Object.keys(e).forEach(function(t){this.$rules[t]||(this.$rules[t]=e[t])},this),this.normalizeRules()};o.metaData={fileTypes:["tpl"],foldingStartMarker:"\\{%?",foldingStopMarker:"%?\\}",name:"Smarty",scopeName:"text.html.smarty"},r.inherits(o,n),t.SmartyHighlightRules=o});
//# sourceMappingURL=../sourcemaps/mode/smarty_highlight_rules.js.map
