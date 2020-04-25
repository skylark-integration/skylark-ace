/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("../lib/oop"),t=require("./text_highlight_rules").TextHighlightRules,n=(require("./markdown_highlight_rules").MarkdownHighlightRules,require("./scss_highlight_rules").ScssHighlightRules,require("./less_highlight_rules").LessHighlightRules,require("./coffee_highlight_rules").CoffeeHighlightRules,require("./javascript_highlight_rules").JavaScriptHighlightRules);function i(e,t){return{token:"entity.name.function.jade",regex:"^\\s*\\:"+e,next:t+"start"}}var r=function(){var e="\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)";this.$rules={start:[{token:"keyword.control.import.include.jade",regex:"\\s*\\binclude\\b"},{token:"keyword.other.doctype.jade",regex:"^!!!\\s*(?:[a-zA-Z0-9-_]+)?"},{onMatch:function(e,t,n){return n.unshift(this.next,e.length-2,t),"comment"},regex:/^\s*\/\//,next:"comment_block"},i("markdown","markdown-"),i("sass","sass-"),i("less","less-"),i("coffee","coffee-"),{token:["storage.type.function.jade","entity.name.function.jade","punctuation.definition.parameters.begin.jade","variable.parameter.function.jade","punctuation.definition.parameters.end.jade"],regex:"^(\\s*mixin)( [\\w\\-]+)(\\s*\\()(.*?)(\\))"},{token:["storage.type.function.jade","entity.name.function.jade"],regex:"^(\\s*mixin)( [\\w\\-]+)"},{token:"source.js.embedded.jade",regex:"^\\s*(?:-|=|!=)",next:"js-start"},{token:"string.interpolated.jade",regex:"[#!]\\{[^\\}]+\\}"},{token:"meta.tag.any.jade",regex:/^\s*(?!\w+:)(?:[\w-]+|(?=\.|#)])/,next:"tag_single"},{token:"suport.type.attribute.id.jade",regex:"#\\w+"},{token:"suport.type.attribute.class.jade",regex:"\\.\\w+"},{token:"punctuation",regex:"\\s*(?:\\()",next:"tag_attributes"}],comment_block:[{regex:/^\s*(?:\/\/)?/,onMatch:function(e,t,n){return e.length<=n[1]?"/"==e.slice(-1)?(n[1]=e.length-2,this.next="","comment"):(n.shift(),n.shift(),this.next=n.shift(),"text"):(this.next="","comment")},next:"start"},{defaultToken:"comment"}],tag_single:[{token:"entity.other.attribute-name.class.jade",regex:"\\.[\\w-]+"},{token:"entity.other.attribute-name.id.jade",regex:"#[\\w-]+"},{token:["text","punctuation"],regex:"($)|((?!\\.|#|=|-))",next:"start"}],tag_attributes:[{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:["entity.other.attribute-name.jade","punctuation"],regex:"([a-zA-Z:\\.-]+)(=)?",next:"attribute_strings"},{token:"punctuation",regex:"\\)",next:"start"}],attribute_strings:[{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"string",regex:"(?=\\S)",next:"tag_attributes"}],qqstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"tag_attributes"}],qstring:[{token:"constant.language.escape",regex:e},{token:"string",regex:"[^'\\\\]+"},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"tag_attributes"}]},this.embedRules(n,"js-",[{token:"text",regex:".$",next:"start"}])};e.inherits(r,t),exports.JadeHighlightRules=r});
//# sourceMappingURL=../sourcemaps/mode/jade_highlight_rules.js.map
