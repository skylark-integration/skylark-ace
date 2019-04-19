/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,n){"use strict";var s=e("../config").$modes,o=e("../lib/oop"),i=e("../lib/lang"),r=e("./text_highlight_rules").TextHighlightRules,l=e("./html_highlight_rules").HtmlHighlightRules,g=function(e){return"(?:[^"+i.escapeRegExp(e)+"\\\\]|\\\\.)*"},a=function(){l.call(this);var e={token:"support.function",regex:/^\s*(```+[^`]*|~~~+[^~]*)$/,onMatch:function(e,t,n,o){var i=e.match(/^(\s*)([`~]+)(.*)/),r=/[\w-]+|$/.exec(i[3])[0];return s[r]||(r=""),n.unshift("githubblock",[],[i[1],i[2],r],t),this.token},next:"githubblock"},t=[{token:"support.function",regex:".*",onMatch:function(e,t,n,o){var i=n[1],r=n[2][0],l=n[2][1],g=n[2][2],a=/^(\s*)(`+|~+)\s*$/.exec(e);if(a&&a[1].length<r.length+3&&a[2].length>=l.length&&a[2][0]==l[0])return n.splice(0,3),this.next=n.shift(),this.token;if(this.next="",g&&s[g]){var k=s[g].getTokenizer().getLineTokens(e,i.slice(0));return n[1]=k.state,k.tokens}return this.token}}];this.$rules.start.unshift({token:"empty_line",regex:"^$",next:"allowBlock"},{token:"markup.heading.1",regex:"^=+(?=\\s*$)"},{token:"markup.heading.2",regex:"^\\-+(?=\\s*$)"},{token:function(e){return"markup.heading."+e.length},regex:/^#{1,6}(?=\s|$)/,next:"header"},e,{token:"string.blockquote",regex:"^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",next:"blockquote"},{token:"constant",regex:"^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$",next:"allowBlock"},{token:"markup.list",regex:"^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",next:"listblock-start"},{include:"basic"}),this.addRules({basic:[{token:"constant.language.escape",regex:/\\[\\`*_{}\[\]()#+\-.!]/},{token:"support.function",regex:"(`+)(.*?[^`])(\\1)"},{token:["text","constant","text","url","string","text"],regex:'^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:["][^"]+["])?(\\s*))$'},{token:["text","string","text","constant","text"],regex:"(\\[)("+g("]")+")(\\]\\s*\\[)("+g("]")+")(\\])"},{token:["text","string","text","markup.underline","string","text"],regex:"(\\!?\\[)("+g("]")+')(\\]\\()((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)(\\s*"'+g('"')+'"\\s*)?(\\))'},{token:"string.strong",regex:"([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)"},{token:"string.emphasis",regex:"([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)"},{token:["text","url","text"],regex:"(<)((?:https?|ftp|dict):[^'\">\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(>)"}],allowBlock:[{token:"support.function",regex:"^ {4}.+",next:"allowBlock"},{token:"empty_line",regex:"^$",next:"allowBlock"},{token:"empty",regex:"",next:"start"}],header:[{regex:"$",next:"start"},{include:"basic"},{defaultToken:"heading"}],"listblock-start":[{token:"support.variable",regex:/(?:\[[ x]\])?/,next:"listblock"}],listblock:[{token:"empty_line",regex:"^$",next:"start"},{token:"markup.list",regex:"^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",next:"listblock-start"},{include:"basic",noEscape:!0},e,{defaultToken:"list"}],blockquote:[{token:"empty_line",regex:"^\\s*$",next:"start"},{token:"string.blockquote",regex:"^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+",next:"blockquote"},{include:"basic",noEscape:!0},{defaultToken:"string.blockquote"}],githubblock:t}),this.normalizeRules()};o.inherits(a,r),t.MarkdownHighlightRules=a});
//# sourceMappingURL=../sourcemaps/mode/markdown_highlight_rules.js.map
