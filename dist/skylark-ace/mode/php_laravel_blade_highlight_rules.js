/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,n,t){"use strict";var i=e("../lib/oop"),a=e("./php_highlight_rules").PhpHighlightRules,o=function(){a.call(this);var e={start:[{include:"comments"},{include:"directives"},{include:"parenthesis"}],comments:[{token:"punctuation.definition.comment.blade",regex:"(\\/\\/(.)*)|(\\#(.)*)",next:"pop"},{token:"punctuation.definition.comment.begin.php",regex:"(?:\\/\\*)",push:[{token:"punctuation.definition.comment.end.php",regex:"(?:\\*\\/)",next:"pop"},{defaultToken:"comment.block.blade"}]},{token:"punctuation.definition.comment.begin.blade",regex:"(?:\\{\\{\\-\\-)",push:[{token:"punctuation.definition.comment.end.blade",regex:"(?:\\-\\-\\}\\})",next:"pop"},{defaultToken:"comment.block.blade"}]}],parenthesis:[{token:"parenthesis.begin.blade",regex:"\\(",push:[{token:"parenthesis.end.blade",regex:"\\)",next:"pop"},{include:"strings"},{include:"variables"},{include:"lang"},{include:"parenthesis"},{defaultToken:"source.blade"}]}],directives:[{token:["directive.declaration.blade","keyword.directives.blade"],regex:"(@)(endunless|endisset|endempty|endauth|endguest|endcomponent|endslot|endalert|endverbatim|endsection|show|php|endphp|endpush|endprepend|endenv|endforelse|isset|empty|component|slot|alert|json|verbatim|section|auth|guest|hasSection|forelse|includeIf|includeWhen|includeFirst|each|push|stack|prepend|inject|env|elseenv|unless|yield|extends|parent|include|acfrepeater|block|can|cannot|choice|debug|elsecan|elsecannot|embed|hipchat|lang|layout|macro|macrodef|minify|partial|render|servers|set|slack|story|task|unset|wpposts|acfend|after|append|breakpoint|endafter|endcan|endcannot|endembed|endmacro|endmarkdown|endminify|endpartial|endsetup|endstory|endtask|endunless|markdown|overwrite|setup|stop|wpempty|wpend|wpquery)"},{token:["directive.declaration.blade","keyword.control.blade"],regex:"(@)(if|else|elseif|endif|foreach|endforeach|switch|case|break|default|endswitch|for|endfor|while|endwhile|continue)"},{token:["directive.ignore.blade","injections.begin.blade"],regex:"(@?)(\\{\\{)",push:[{token:"injections.end.blade",regex:"\\}\\}",next:"pop"},{include:"strings"},{include:"variables"},{defaultToken:"source.blade"}]},{token:"injections.unescaped.begin.blade",regex:"\\{\\!\\!",push:[{token:"injections.unescaped.end.blade",regex:"\\!\\!\\}",next:"pop"},{include:"strings"},{include:"variables"},{defaultToken:"source.blade"}]}],lang:[{token:"keyword.operator.blade",regex:"(?:!=|!|<=|>=|<|>|===|==|=|\\+\\+|\\;|\\,|%|&&|\\|\\|)|\\b(?:and|or|eq|neq|ne|gte|gt|ge|lte|lt|le|not|mod|as)\\b"},{token:"constant.language.blade",regex:"\\b(?:TRUE|FALSE|true|false)\\b"}],strings:[{token:"punctuation.definition.string.begin.blade",regex:'"',push:[{token:"punctuation.definition.string.end.blade",regex:'"',next:"pop"},{token:"string.character.escape.blade",regex:"\\\\."},{defaultToken:"string.quoted.single.blade"}]},{token:"punctuation.definition.string.begin.blade",regex:"'",push:[{token:"punctuation.definition.string.end.blade",regex:"'",next:"pop"},{token:"string.character.escape.blade",regex:"\\\\."},{defaultToken:"string.quoted.double.blade"}]}],variables:[{token:"variable.blade",regex:"\\$([a-zA-Z_][a-zA-Z0-9_]*)\\b"},{token:["keyword.operator.blade","constant.other.property.blade"],regex:"(->)([a-zA-Z_][a-zA-Z0-9_]*)\\b"},{token:["keyword.operator.blade","meta.function-call.object.blade","punctuation.definition.variable.blade","variable.blade","punctuation.definition.variable.blade"],regex:"(->)([a-zA-Z_][a-zA-Z0-9_]*)(\\()(.*?)(\\))"}]},n=e.start;for(var t in this.$rules)this.$rules[t].unshift.apply(this.$rules[t],n);Object.keys(e).forEach(function(n){this.$rules[n]||(this.$rules[n]=e[n])},this),this.normalizeRules()};i.inherits(o,a),n.PHPLaravelBladeHighlightRules=o});
//# sourceMappingURL=../sourcemaps/mode/php_laravel_blade_highlight_rules.js.map
