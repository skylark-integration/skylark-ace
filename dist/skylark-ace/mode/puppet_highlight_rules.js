/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){"use strict";var p=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:["keyword.type.puppet","constant.class.puppet","keyword.inherits.puppet","constant.class.puppet"],regex:'^\\s*(class)(\\s+(?:[-_A-Za-z0-9".]+::)*[-_A-Za-z0-9".]+\\s*)(?:(inherits\\s*)(\\s+(?:[-_A-Za-z0-9".]+::)*[-_A-Za-z0-9".]+\\s*))?'},{token:["storage.function.puppet","name.function.puppet","punctuation.lpar"],regex:"(^\\s*define)(\\s+[a-zA-Z0-9_:]+\\s*)(\\()",push:[{token:"punctuation.rpar.puppet",regex:"\\)",next:"pop"},{include:"constants"},{include:"variable"},{include:"strings"},{include:"operators"},{defaultToken:"string"}]},{token:["language.support.class","keyword.operator"],regex:"\\b([a-zA-Z_]+)(\\s+=>)"},{token:["exported.resource.puppet","keyword.name.resource.puppet","paren.lpar"],regex:"(\\@\\@)?(\\s*[a-zA-Z_]*)(\\s*\\{)"},{token:"qualified.variable.puppet",regex:"(\\$([a-z][a-z0-9_]*)?(::[a-z][a-z0-9_]*)*::[a-z0-9_][a-zA-Z0-9_]*)"},{token:"singleline.comment.puppet",regex:"#(.)*$"},{token:"multiline.comment.begin.puppet",regex:"^\\s*\\/\\*\\s*$",push:"blockComment"},{token:"keyword.control.puppet",regex:"\\b(case|if|unless|else|elsif|in|default:|and|or)\\s+(?!::)"},{token:"keyword.control.puppet",regex:"\\b(import|default|inherits|include|require|contain|node|application|consumes|environment|site|function|produces)\\b"},{token:"support.function.puppet",regex:"\\b(lest|str2bool|escape|gsub|Timestamp|Timespan|with|alert|crit|debug|notice|sprintf|split|step|strftime|slice|shellquote|type|sha1|defined|scanf|reverse_each|regsubst|return|emerg|reduce|err|failed|fail|versioncmp|file|generate|then|info|realize|search|tag|tagged|template|epp|warning|hiera_include|each|assert_type|binary_file|create_resources|dig|digest|filter|lookup|find_file|fqdn_rand|hiera_array|hiera_hash|inline_epp|inline_template|map|match|md5|new|next)\\b"},{token:"constant.types.puppet",regex:"\\b(String|File|Package|Service|Class|Integer|Array|Catalogentry|Variant|Boolean|Undef|Number|Hash|Float|Numeric|NotUndef|Callable|Optional|Any|Regexp|Sensitive|Sensitive.new|Type|Resource|Default|Enum|Scalar|Collection|Data|Pattern|Tuple|Struct)\\b"},{token:"paren.lpar",regex:"[[({]"},{token:"paren.rpar",regex:"[\\])}]"},{include:"variable"},{include:"constants"},{include:"strings"},{include:"operators"},{token:"regexp.begin.string.puppet",regex:"\\s*(\\/(\\S)+)\\/"}],blockComment:[{regex:"^\\s*\\/\\*\\s*$",token:"multiline.comment.begin.puppet",push:"blockComment"},{regex:"^\\s*\\*\\/\\s*$",token:"multiline.comment.end.puppet",next:"pop"},{defaultToken:"comment"}],constants:[{token:"constant.language.puppet",regex:"\\b(false|true|running|stopped|installed|purged|latest|file|directory|held|undef|present|absent|link|mounted|unmounted)\\b"}],variable:[{token:"variable.puppet",regex:"(\\$[a-z0-9_{][a-zA-Z0-9_]*)"}],strings:[{token:"punctuation.quote.puppet",regex:"'",push:[{token:"punctuation.quote.puppet",regex:"'",next:"pop"},{include:"escaped_chars"},{defaultToken:"string"}]},{token:"punctuation.quote.puppet",regex:'"',push:[{token:"punctuation.quote.puppet",regex:'"',next:"pop"},{include:"escaped_chars"},{include:"variable"},{defaultToken:"string"}]}],escaped_chars:[{token:"constant.escaped_char.puppet",regex:"\\\\."}],operators:[{token:"keyword.operator",regex:"\\+\\.|\\-\\.|\\*\\.|\\/\\.|#|;;|\\+|\\-|\\*|\\*\\*\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|<-|=|::|,"}]},this.normalizeRules()};p.inherits(a,r),t.PuppetHighlightRules=a});
//# sourceMappingURL=../sourcemaps/mode/puppet_highlight_rules.js.map
