/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,r){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({"keyword.operator":"abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|srasrl|xnor|xor",keyword:"access|after|ailas|all|architecture|assert|attribute|begin|block|buffer|bus|case|component|configuration|disconnect|downto|else|elsif|end|entity|file|for|function|generate|generic|guarded|if|impure|in|inertial|inout|is|label|linkage|literal|loop|mapnew|next|of|on|open|others|out|port|process|pure|range|record|reject|report|return|select|shared|subtype|then|to|transport|type|unaffected|united|until|wait|when|while|with","constant.language":"true|false|null","storage.modifier":"array|constant","storage.type":"bit|bit_vector|boolean|character|integer|line|natural|positive|real|register|severity|signal|signed|std_logic|std_logic_vector|string||text|time|unsigned|variable"},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"keyword",regex:"\\s*(?:library|package|use)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"},{token:"punctuation.operator",regex:"\\'|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[(]"},{token:"paren.rparen",regex:"[\\])]"},{token:"text",regex:"\\s+"}]}};n.inherits(i,o),t.VHDLHighlightRules=i});
//# sourceMappingURL=../sourcemaps/mode/vhdl_highlight_rules.js.map
