/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){"use strict";require("./menu_tools/overlay_page").overlayPage;var e=require("../lib/dom"),t=require("../lib/oop"),i=require("../lib/event_emitter").EventEmitter,n=e.buildDom,a=require("./modelist"),o={Bright:[],Dark:[]};require("./themelist").themes.forEach(function(e){o[e.isDark?"Dark":"Bright"].push({caption:e.caption,value:e.theme})});var l={Main:{Mode:{path:"mode",type:"select",items:a.modes.map(function(e){return{caption:e.caption,value:e.mode}})},Theme:{path:"theme",type:"select",items:o},Keybinding:{type:"buttonBar",path:"keyboardHandler",items:[{caption:"Ace",value:null},{caption:"Vim",value:"ace/keyboard/vim"},{caption:"Emacs",value:"ace/keyboard/emacs"},{caption:"Sublime",value:"ace/keyboard/sublime"}]},"Font Size":{path:"fontSize",type:"number",defaultValue:12,defaults:[{caption:"12px",value:12},{caption:"24px",value:24}]},"Soft Wrap":{type:"buttonBar",path:"wrap",items:[{caption:"Off",value:"off"},{caption:"View",value:"free"},{caption:"margin",value:"printMargin"},{caption:"40",value:"40"}]},"Cursor Style":{path:"cursorStyle",items:[{caption:"Ace",value:"ace"},{caption:"Slim",value:"slim"},{caption:"Smooth",value:"smooth"},{caption:"Smooth And Slim",value:"smooth slim"},{caption:"Wide",value:"wide"}]},Folding:{path:"foldStyle",items:[{caption:"Manual",value:"manual"},{caption:"Mark begin",value:"markbegin"},{caption:"Mark begin and end",value:"markbeginend"}]},"Soft Tabs":[{path:"useSoftTabs"},{path:"tabSize",type:"number",values:[2,3,4,8,16]}],Overscroll:{type:"buttonBar",path:"scrollPastEnd",items:[{caption:"None",value:0},{caption:"Half",value:.5},{caption:"Full",value:1}]}},More:{"Atomic soft tabs":{path:"navigateWithinSoftTabs"},"Enable Behaviours":{path:"behavioursEnabled"},"Full Line Selection":{type:"checkbox",values:"text|line",path:"selectionStyle"},"Highlight Active Line":{path:"highlightActiveLine"},"Show Invisibles":{path:"showInvisibles"},"Show Indent Guides":{path:"displayIndentGuides"},"Persistent Scrollbar":[{path:"hScrollBarAlwaysVisible"},{path:"vScrollBarAlwaysVisible"}],"Animate scrolling":{path:"animatedScroll"},"Show Gutter":{path:"showGutter"},"Show Line Numbers":{path:"showLineNumbers"},"Relative Line Numbers":{path:"relativeLineNumbers"},"Fixed Gutter Width":{path:"fixedWidthGutter"},"Show Print Margin":[{path:"showPrintMargin"},{type:"number",path:"printMarginColumn"}],"Indented Soft Wrap":{path:"indentedSoftWrap"},"Highlight selected word":{path:"highlightSelectedWord"},"Fade Fold Widgets":{path:"fadeFoldWidgets"},"Use textarea for IME":{path:"useTextareaForIME"},"Merge Undo Deltas":{path:"mergeUndoDeltas",items:[{caption:"Always",value:"always"},{caption:"Never",value:"false"},{caption:"Timed",value:"true"}]},"Elastic Tabstops":{path:"useElasticTabstops"},"Incremental Search":{path:"useIncrementalSearch"},"Read-only":{path:"readOnly"},"Copy without selection":{path:"copyWithEmptySelection"},"Live Autocompletion":{path:"enableLiveAutocompletion"}}},r=function(e,t){this.editor=e,this.container=t||document.createElement("div"),this.groups=[],this.options={}};(function(){t.implement(this,i),this.add=function(e){e.Main&&t.mixin(l.Main,e.Main),e.More&&t.mixin(l.More,e.More)},this.render=function(){this.container.innerHTML="",n(["table",{id:"controls"},this.renderOptionGroup(l.Main),["tr",null,["td",{colspan:2},["table",{id:"more-controls"},this.renderOptionGroup(l.More)]]]],this.container)},this.renderOptionGroup=function(e){return Object.keys(e).map(function(t,i){var n=e[t];return n.position||(n.position=i/1e4),n.label||(n.label=t),n}).sort(function(e,t){return e.position-t.position}).map(function(e){return this.renderOption(e.label,e)},this)},this.renderOptionControl=function(e,t){var i,n=this;if(Array.isArray(t))return t.map(function(t){return n.renderOptionControl(e,t)});var a=n.getOption(t);if(t.values&&"checkbox"!=t.type&&("string"==typeof t.values&&(t.values=t.values.split("|")),t.items=t.values.map(function(e){return{value:e,name:e}})),"buttonBar"==t.type)i=["div",t.items.map(function(e){return["button",{value:e.value,ace_selected_button:a==e.value,onclick:function(){n.setOption(t,e.value);for(var i=this.parentNode.querySelectorAll("[ace_selected_button]"),a=0;a<i.length;a++)i[a].removeAttribute("ace_selected_button");this.setAttribute("ace_selected_button",!0)}},e.desc||e.caption||e.name]})];else if("number"==t.type)i=["input",{type:"number",value:a||t.defaultValue,style:"width:3em",oninput:function(){n.setOption(t,parseInt(this.value))}}],t.defaults&&(i=[i,t.defaults.map(function(e){return["button",{onclick:function(){var t=this.parentNode.firstChild;t.value=e.value,t.oninput()}},e.caption]})]);else if(t.items){var o=function(e){return e.map(function(e){return["option",{value:e.value||e.name},e.desc||e.caption||e.name]})},l=Array.isArray(t.items)?o(t.items):Object.keys(t.items).map(function(e){return["optgroup",{label:e},o(t.items[e])]});i=["select",{id:e,value:a,onchange:function(){n.setOption(t,this.value)}},l]}else"string"==typeof t.values&&(t.values=t.values.split("|")),t.values&&(a=a==t.values[1]),i=["input",{type:"checkbox",id:e,checked:a||null,onchange:function(){var e=this.checked;t.values&&(e=t.values[e?1:0]),n.setOption(t,e)}}],"checkedNumber"==t.type&&(i=[i,[]]);return i},this.renderOption=function(e,t){if(!t.path||t.onchange||this.editor.$options[t.path]){this.options[t.path]=t;var i="-"+t.path;return["tr",{class:"ace_optionsMenuEntry"},["td",["label",{for:i},e]],["td",this.renderOptionControl(i,t)]]}},this.setOption=function(e,t){"string"==typeof e&&(e=this.options[e]),"false"==t&&(t=!1),"true"==t&&(t=!0),"null"==t&&(t=null),"undefined"==t&&(t=void 0),"string"==typeof t&&parseFloat(t).toString()==t&&(t=parseFloat(t)),e.onchange?e.onchange(t):e.path&&this.editor.setOption(e.path,t),this._signal("setOption",{name:e.path,value:t})},this.getOption=function(e){return e.getValue?e.getValue():this.editor.getOption(e.path)}}).call(r.prototype),exports.OptionPanel=r});
//# sourceMappingURL=../sourcemaps/ext/options.js.map
