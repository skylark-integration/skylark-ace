/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){var r,o,i,s;r="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",t.Mode=o=function(t){var n,o=function(e,t){function n(){}n.prototype=(e.superclass=t).prototype,(e.prototype=new n).constructor=e,"function"==typeof t.extended&&t.extended(e);return e}(((function(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}(i,t)).displayName="LiveScriptMode",i),t).prototype;function i(){var t;this.$tokenizer=new(e("../tokenizer").Tokenizer)(i.Rules),(t=e("../mode/matching_brace_outdent"))&&(this.$outdent=new t.MatchingBraceOutdent),this.$id="ace/mode/livescript",this.$behaviour=new(e("./behaviour/cstyle").CstyleBehaviour)}return n=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+r+")?))\\s*$"),o.getNextLineIndent=function(e,t,r){var o,i;return o=this.$getIndent(t),(i=this.$tokenizer.getLineTokens(t,e).tokens).length&&"comment"===i[i.length-1].type||"start"===e&&n.test(t)&&(o+=r),o},o.lineCommentStart="#",o.blockComment={start:"###",end:"###"},o.checkOutdent=function(e,t,n){var r;return null!=(r=this.$outdent)?r.checkOutdent(t,n):void 0},o.autoOutdent=function(e,t,n){var r;return null!=(r=this.$outdent)?r.autoOutdent(t,n):void 0},i}(e("../mode/text").Mode),i="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",s={defaultToken:"string"},o.Rules={start:[{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+i},{token:"constant.language",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+i},{token:"invalid.illegal",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+i},{token:"language.support.class",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+i},{token:"language.support.function",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+i},{token:"variable.language",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+i},{token:"identifier",regex:r+"\\s*:(?![:=])"},{token:"variable",regex:r},{token:"keyword.operator",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword.variable",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"keyword.operator",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"string.doc",regex:"'''",next:"qdoc"},{token:"string.doc",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"string.regex",regex:"//",next:"heregex"},{token:"comment.doc",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"string.regex",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"constant.numeric",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"lparen",regex:"[({[]"},{token:"rparen",regex:"[)}\\]]",next:"key"},{token:"keyword.operator",regex:"[\\^!|&%+\\-]+"},{token:"text",regex:"\\s+"}],heregex:[{token:"string.regex",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"string.regex",regex:"\\s*#{"},{token:"comment.regex",regex:"\\s+(?:#.*)?"},{defaultToken:"string.regex"}],key:[{token:"keyword.operator",regex:"[.?@!]+"},{token:"identifier",regex:r,next:"start"},{token:"text",regex:"",next:"start"}],comment:[{token:"comment.doc",regex:".*?\\*/",next:"start"},{defaultToken:"comment.doc"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},s],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},s],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},s],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},s],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},s],words:[{token:"string",regex:".*?\\]>",next:"key"},s]}});
//# sourceMappingURL=../sourcemaps/mode/livescript.js.map
