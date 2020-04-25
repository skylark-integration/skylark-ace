/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";var e=require("../lib/oop"),t=require("./text_highlight_rules").TextHighlightRules,n=function(){var e=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":"abs|divmod|input|open|staticmethod|all|enumerate|int|ord|str|any|eval|isinstance|pow|sum|basestring|execfile|issubclass|print|super|binfile|bin|iter|property|tuple|bool|filter|len|range|type|bytearray|float|list|raw_input|unichr|callable|format|locals|reduce|unicode|chr|frozenset|long|reload|vars|classmethod|getattr|map|repr|xrange|cmp|globals|max|reversed|zip|compile|hasattr|memoryview|round|__import__|complex|hash|min|apply|delattr|help|next|setattr|set|buffer|dict|hex|object|slice|coerce|dir|id|oct|sorted|intern|ascii|breakpoint|bytes","variable.language":"self|cls","constant.language":"True|False|None|NotImplemented|Ellipsis|__debug__",keyword:"and|as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|not|or|pass|print|raise|return|try|while|with|yield|async|await|nonlocal"},"identifier"),t="(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))",n="(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))",r="(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|"+n+")",s="\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"string",regex:'[uU]?"{3}',next:"qqstring3"},{token:"string",regex:'[uU]?"(?=.)',next:"qqstring"},{token:"string",regex:"[uU]?'{3}",next:"qstring3"},{token:"string",regex:"[uU]?'(?=.)",next:"qstring"},{token:"string",regex:'[rR]"{3}',next:"rawqqstring3"},{token:"string",regex:'[rR]"(?=.)',next:"rawqqstring"},{token:"string",regex:"[rR]'{3}",next:"rawqstring3"},{token:"string",regex:"[rR]'(?=.)",next:"rawqstring"},{token:"string",regex:'[fF]"{3}',next:"fqqstring3"},{token:"string",regex:'[fF]"(?=.)',next:"fqqstring"},{token:"string",regex:"[fF]'{3}",next:"fqstring3"},{token:"string",regex:"[fF]'(?=.)",next:"fqstring"},{token:"string",regex:'(?:[rR][fF]|[fF][rR])"{3}',next:"rfqqstring3"},{token:"string",regex:'(?:[rR][fF]|[fF][rR])"(?=.)',next:"rfqqstring"},{token:"string",regex:"(?:[rR][fF]|[fF][rR])'{3}",next:"rfqstring3"},{token:"string",regex:"(?:[rR][fF]|[fF][rR])'(?=.)",next:"rfqstring"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|@|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"punctuation",regex:",|:|;|\\->|\\+=|\\-=|\\*=|\\/=|\\/\\/=|%=|@=|&=|\\|=|^=|>>=|<<=|\\*\\*="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"},{include:"constants"}],qqstring3:[{token:"constant.language.escape",regex:s},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:s},{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],rawqqstring3:[{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],rawqstring3:[{token:"string",regex:"'{3}",next:"start"},{defaultToken:"string"}],rawqqstring:[{token:"string",regex:"\\\\$",next:"rawqqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],rawqstring:[{token:"string",regex:"\\\\$",next:"rawqstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}],fqqstring3:[{token:"constant.language.escape",regex:s},{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring3:[{token:"constant.language.escape",regex:s},{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqqstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"\\\\$",next:"fqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstring:[{token:"constant.language.escape",regex:s},{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring3:[{token:"string",regex:'"{3}',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring3:[{token:"string",regex:"'{3}",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqqstring:[{token:"string",regex:"\\\\$",next:"rfqqstring"},{token:"string",regex:'"|$',next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],rfqstring:[{token:"string",regex:"'|$",next:"start"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"},{defaultToken:"string"}],fqstringParRules:[{token:"paren.lparen",regex:"[\\[\\(]"},{token:"paren.rparen",regex:"[\\]\\)]"},{token:"string",regex:"\\s+"},{token:"string",regex:"'(.)*'"},{token:"string",regex:'"(.)*"'},{token:"function.support",regex:"(!s|!r|!a)"},{include:"constants"},{token:"paren.rparen",regex:"}",next:"pop"},{token:"paren.lparen",regex:"{",push:"fqstringParRules"}],constants:[{token:"constant.numeric",regex:"(?:"+r+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:r},{token:"constant.numeric",regex:t+"[lL]\\b"},{token:"constant.numeric",regex:t+"\\b"},{token:["punctuation","function.support"],regex:"(\\.)([a-zA-Z_]+)\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};e.inherits(n,t),exports.PythonHighlightRules=n});
//# sourceMappingURL=../sourcemaps/mode/python_highlight_rules.js.map
