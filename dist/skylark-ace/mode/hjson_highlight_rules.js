/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,n,t){"use strict";var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{include:"#comments"},{include:"#rootObject"},{include:"#value"}],"#array":[{token:"paren.lparen",regex:/\[/,push:[{token:"paren.rparen",regex:/\]/,next:"pop"},{include:"#value"},{include:"#comments"},{token:"text",regex:/,|$/},{token:"invalid.illegal",regex:/[^\s\]]/},{defaultToken:"array"}]}],"#comments":[{token:["comment.punctuation","comment.line"],regex:/(#)(.*$)/},{token:"comment.punctuation",regex:/\/\*/,push:[{token:"comment.punctuation",regex:/\*\//,next:"pop"},{defaultToken:"comment.block"}]},{token:["comment.punctuation","comment.line"],regex:/(\/\/)(.*$)/}],"#constant":[{token:"constant",regex:/\b(?:true|false|null)\b/}],"#keyname":[{token:"keyword",regex:/(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*(?=:)/}],"#mstring":[{token:"string",regex:/'''/,push:[{token:"string",regex:/'''/,next:"pop"},{defaultToken:"string"}]}],"#number":[{token:"constant.numeric",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/,comment:"handles integer and decimal numbers"}],"#object":[{token:"paren.lparen",regex:/\{/,push:[{token:"paren.rparen",regex:/\}/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#rootObject":[{token:"paren",regex:/(?=\s*(?:[^,\{\[\}\]\s]+|"(?:[^"\\]|\\.)*")\s*:)/,push:[{token:"paren.rparen",regex:/---none---/,next:"pop"},{include:"#keyname"},{include:"#value"},{token:"text",regex:/:/},{token:"text",regex:/,/},{defaultToken:"paren"}]}],"#string":[{token:"string",regex:/"/,push:[{token:"string",regex:/"/,next:"pop"},{token:"constant.language.escape",regex:/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/},{token:"invalid.illegal",regex:/\\./},{defaultToken:"string"}]}],"#ustring":[{token:"string",regex:/\b[^:,0-9\-\{\[\}\]\s].*$/}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"},{include:"#mstring"},{include:"#ustring"}]},this.normalizeRules()};a.metaData={fileTypes:["hjson"],foldingStartMarker:"(?x:     # turn on extended mode\n              ^    # a line beginning with\n              \\s*    # some optional space\n              [{\\[]  # the start of an object or array\n              (?!    # but not followed by\n              .*   # whatever\n              [}\\]]  # and the close of an object or array\n              ,?   # an optional comma\n              \\s*  # some optional space\n              $    # at the end of the line\n              )\n              |    # ...or...\n              [{\\[]  # the start of an object or array\n              \\s*    # some optional space\n              $    # at the end of the line\n            )",foldingStopMarker:"(?x:   # turn on extended mode\n             ^    # a line beginning with\n             \\s*  # some optional space\n             [}\\]]  # and the close of an object or array\n             )",keyEquivalent:"^~J",name:"Hjson",scopeName:"source.hjson"},o.inherits(a,r),n.HjsonHighlightRules=a});
//# sourceMappingURL=../sourcemaps/mode/hjson_highlight_rules.js.map
