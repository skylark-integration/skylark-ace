/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){"use strict";var r=e("../lib/oop"),o=e("./doc_comment_highlight_rules").DocCommentHighlightRules,a=e("./text_highlight_rules").TextHighlightRules,i=function(){var e="class|struct|union|template|interface|enum|macro",t={token:"constant.language.escape",regex:"\\\\(?:(?:x[0-9A-F]{2})|(?:[0-7]{1,3})|(?:['\"\\?0abfnrtv\\\\])|(?:u[0-9a-fA-F]{4})|(?:U[0-9a-fA-F]{8}))"},n="/|/\\=|&|&\\=|&&|\\|\\|\\=|\\|\\||\\-|\\-\\=|\\-\\-|\\+|\\+\\=|\\+\\+|\\<|\\<\\=|\\<\\<|\\<\\<\\=|\\<\\>|\\<\\>\\=|\\>|\\>\\=|\\>\\>\\=|\\>\\>\\>\\=|\\>\\>|\\>\\>\\>|\\!|\\!\\=|\\!\\<\\>|\\!\\<\\>\\=|\\!\\<|\\!\\<\\=|\\!\\>|\\!\\>\\=|\\?|\\$|\\=|\\=\\=|\\*|\\*\\=|%|%\\=|\\^|\\^\\=|\\^\\^|\\^\\^\\=|~|~\\=|\\=\\>|#",r=this.$keywords=this.createKeywordMapper({"keyword.modifier":"abstract|align|debug|deprecated|export|extern|const|final|in|inout|out|ref|immutable|lazy|nothrow|override|package|pragma|private|protected|public|pure|scope|shared|__gshared|synchronized|static|volatile","keyword.control":"break|case|continue|default|do|else|for|foreach|foreach_reverse|goto|if|return|switch|while|catch|try|throw|finally|version|assert|unittest|with","keyword.type":"auto|bool|char|dchar|wchar|byte|ubyte|float|double|real|cfloat|creal|cdouble|cent|ifloat|ireal|idouble|int|long|short|void|uint|ulong|ushort|ucent|function|delegate|string|wstring|dstring|size_t|ptrdiff_t|hash_t|Object",keyword:"this|super|import|module|body|mixin|__traits|invariant|alias|asm|delete|typeof|typeid|sizeof|cast|new|in|is|typedef|__vector|__parameters","keyword.storage":e,punctation:"\\.|\\,|;|\\.\\.|\\.\\.\\.","keyword.operator":n,"constant.language":"null|true|false|__DATE__|__EOF__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__"},"identifier"),a="[a-zA-Z_¡-￿][a-zA-Z\\d_¡-￿]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"star-comment"},{token:"comment.shebang",regex:"^\\s*#!.*"},{token:"comment",regex:"\\/\\+",next:"plus-comment"},{onMatch:function(e,t,n){return n.unshift(this.next,e.substr(2)),"string"},regex:'q"(?:[\\[\\(\\{\\<]+)',next:"operator-heredoc-string"},{onMatch:function(e,t,n){return n.unshift(this.next,e.substr(2)),"string"},regex:'q"(?:[a-zA-Z_]+)$',next:"identifier-heredoc-string"},{token:"string",regex:'[xr]?"',next:"quote-string"},{token:"string",regex:"[xr]?`",next:"backtick-string"},{token:"string",regex:"[xr]?['](?:(?:\\\\.)|(?:[^'\\\\]))*?['][cdw]?"},{token:["keyword","text","paren.lparen"],regex:/(asm)(\s*)({)/,next:"d-asm"},{token:["keyword","text","paren.lparen","constant.language"],regex:"(__traits)(\\s*)(\\()("+a+")"},{token:["keyword","text","variable.module"],regex:"(import|module)(\\s+)((?:"+a+"\\.?)*)"},{token:["keyword.storage","text","entity.name.type"],regex:"("+e+")(\\s*)("+a+")"},{token:["keyword","text","variable.storage","text"],regex:"(alias|typedef)(\\s*)("+a+")(\\s*)"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F_]+(l|ul|u|f|F|L|U|UL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d[\\d_]*(?:(?:\\.[\\d_]*)?(?:[eE][+-]?[\\d_]+)?)?(l|ul|u|f|F|L|U|UL)?\\b"},{token:"entity.other.attribute-name",regex:"@"+a},{token:r,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:n},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\.|\\:"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],"star-comment":[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],"plus-comment":[{token:"comment",regex:"\\+\\/",next:"start"},{defaultToken:"comment"}],"quote-string":[t,{token:"string",regex:'"[cdw]?',next:"start"},{defaultToken:"string"}],"backtick-string":[t,{token:"string",regex:"`[cdw]?",next:"start"},{defaultToken:"string"}],"operator-heredoc-string":[{onMatch:function(e,t,n){e=e.substring(e.length-2,e.length-1);var r={">":"<","]":"[",")":"(","}":"{"};return-1!=Object.keys(r).indexOf(e)&&(e=r[e]),e!=n[1]?"string":(n.shift(),n.shift(),"string")},regex:'(?:[\\]\\)}>]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"identifier-heredoc-string":[{onMatch:function(e,t,n){return(e=e.substring(0,e.length-1))!=n[1]?"string":(n.shift(),n.shift(),"string")},regex:'^(?:[A-Za-z_][a-zA-Z0-9]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"d-asm":[{token:"paren.rparen",regex:"\\}",next:"start"},{token:"keyword.instruction",regex:"[a-zA-Z]+",next:"d-asm-instruction"},{token:"text",regex:"\\s+"}],"d-asm-instruction":[{token:"constant.language",regex:/AL|AH|AX|EAX|BL|BH|BX|EBX|CL|CH|CX|ECX|DL|DH|DX|EDX|BP|EBP|SP|ESP|DI|EDI|SI|ESI/i},{token:"identifier",regex:"[a-zA-Z]+"},{token:"string",regex:'".*"'},{token:"comment",regex:"//.*$"},{token:"constant.numeric",regex:"[0-9.xA-F]+"},{token:"punctuation.operator",regex:"\\,"},{token:"punctuation.operator",regex:";",next:"d-asm"},{token:"text",regex:"\\s+"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};i.metaData={comment:"D language",fileTypes:["d","di"],firstLineMatch:"^#!.*\\b[glr]?dmd\\b.",foldingStartMarker:"(?x)/\\*\\*(?!\\*)|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))",foldingStopMarker:"(?<!\\*)\\*\\*/|^\\s*\\}",keyEquivalent:"^~D",name:"D",scopeName:"source.d"},r.inherits(i,a),t.DHighlightRules=i});
//# sourceMappingURL=../sourcemaps/mode/d_highlight_rules.js.map
