/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,n,t){"use strict";var o=e("../lib/dom");e("../incremental_search");var s=e("../commands/incremental_search_commands"),a=e("./hash_handler").HashHandler;n.handler=new a,n.handler.isEmacs=!0,n.handler.$id="ace/keyboard/emacs";var r,c,i=!1;n.handler.attach=function(e){i||(i=!0,o.importCssString("            .emacs-mode .ace_cursor{                border: 1px rgba(50,250,50,0.8) solid!important;                box-sizing: border-box!important;                background-color: rgba(0,250,0,0.9);                opacity: 0.5;            }            .emacs-mode .ace_hidden-cursors .ace_cursor{                opacity: 1;                background-color: transparent;            }            .emacs-mode .ace_overwrite-cursors .ace_cursor {                opacity: 1;                background-color: transparent;                border-width: 0 0 2px 2px !important;            }            .emacs-mode .ace_text-layer {                z-index: 4            }            .emacs-mode .ace_cursor-layer {                z-index: 2            }","emacsMode")),r=e.session.$selectLongWords,e.session.$selectLongWords=!0,c=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.$emacsMark=null,e.session.$emacsMarkRing=e.session.$emacsMarkRing||[],e.emacsMark=function(){return this.session.$emacsMark},e.setEmacsMark=function(e){this.session.$emacsMark=e},e.pushEmacsMark=function(e,n){var t=this.session.$emacsMark;t&&this.session.$emacsMarkRing.push(t),!e||n?this.setEmacsMark(e):this.session.$emacsMarkRing.push(e)},e.popEmacsMark=function(){var e=this.emacsMark();return e?(this.setEmacsMark(null),e):this.session.$emacsMarkRing.pop()},e.getLastEmacsMark=function(e){return this.session.$emacsMark||this.session.$emacsMarkRing.slice(-1)[0]},e.emacsMarkForSelection=function(e){var n=this.selection,t=this.multiSelect?this.multiSelect.getAllRanges().length:1,o=n.index||0,s=this.session.$emacsMarkRing,a=s.length-(t-o),r=s[a]||n.anchor;return e&&s.splice(a,1,"row"in e&&"column"in e?e:void 0),r},e.on("click",d),e.on("changeSession",l),e.renderer.$blockCursor=!0,e.setStyle("emacs-mode"),e.commands.addCommands(g),n.handler.platform=e.commands.platform,e.$emacsModeHandler=this,e.addEventListener("copy",this.onCopy),e.addEventListener("paste",this.onPaste)},n.handler.detach=function(e){e.renderer.$blockCursor=!1,e.session.$selectLongWords=r,e.session.$useEmacsStyleLineStart=c,e.removeEventListener("click",d),e.removeEventListener("changeSession",l),e.unsetStyle("emacs-mode"),e.commands.removeCommands(g),e.removeEventListener("copy",this.onCopy),e.removeEventListener("paste",this.onPaste),e.$emacsModeHandler=null};var l=function(e){e.oldSession&&(e.oldSession.$selectLongWords=r,e.oldSession.$useEmacsStyleLineStart=c),r=e.session.$selectLongWords,e.session.$selectLongWords=!0,c=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.hasOwnProperty("$emacsMark")||(e.session.$emacsMark=null),e.session.hasOwnProperty("$emacsMarkRing")||(e.session.$emacsMarkRing=[])},d=function(e){e.editor.session.$emacsMark=null},m=e("../lib/keys").KEY_MODS,u={C:"ctrl",S:"shift",M:"alt",CMD:"command"};["C-S-M-CMD","S-M-CMD","C-M-CMD","C-S-CMD","C-S-M","M-CMD","S-CMD","S-M","C-CMD","C-M","C-S","CMD","M","S","C"].forEach(function(e){var n=0;e.split("-").forEach(function(e){n|=m[u[e]]}),u[n]=e.toLowerCase()+"-"}),n.handler.onCopy=function(e,t){t.$handlesEmacsOnCopy||(t.$handlesEmacsOnCopy=!0,n.handler.commands.killRingSave.exec(t),t.$handlesEmacsOnCopy=!1)},n.handler.onPaste=function(e,n){n.pushEmacsMark(n.getCursorPosition())},n.handler.bindKey=function(e,n){if("object"==typeof e&&(e=e[this.platform]),e){var t=this.commandKeyBinding;e.split("|").forEach(function(e){e=e.toLowerCase(),t[e]=n,e.split(" ").slice(0,-1).reduce(function(e,n,t){var o=e[t-1]?e[t-1]+" ":"";return e.concat([o+n])},[]).forEach(function(e){t[e]||(t[e]="null")})},this)}},n.handler.getStatusText=function(e,n){var t="";return n.count&&(t+=n.count),n.keyChain&&(t+=" "+n.keyChain),t},n.handler.handleKeyboard=function(e,n,t,o){if(-1!==o){var s=e.editor;if(s._signal("changeStatus"),-1==n&&(s.pushEmacsMark(),e.count)){var a=new Array(e.count+1).join(t);return e.count=null,{command:"insertstring",args:a}}var r=u[n];if("c-"==r||e.count)if("number"==typeof(l=parseInt(t[t.length-1]))&&!isNaN(l))return e.count=Math.max(e.count,0)||0,e.count=10*e.count+l,{command:"null"};r&&(t=r+t),e.keyChain&&(t=e.keyChain+=" "+t);var c=this.commandKeyBinding[t];if(e.keyChain="null"==c?t:"",c){if("null"===c)return{command:"null"};if("universalArgument"===c)return e.count=-4,{command:"null"};var i;if("string"!=typeof c&&(i=c.args,c.command&&(c=c.command),"goorselect"===c&&(c=s.emacsMark()?i[1]:i[0],i=null)),"string"!=typeof c||("insertstring"!==c&&"splitline"!==c&&"togglecomment"!==c||s.pushEmacsMark(),c=this.commands[c]||s.commands.commands[c])){if(c.readOnly||c.isYank||(e.lastCommand=null),!c.readOnly&&s.emacsMark()&&s.setEmacsMark(null),e.count){var l=e.count;if(e.count=0,!c||!c.handlesCount)return{args:i,command:{exec:function(e,n){for(var t=0;t<l;t++)c.exec(e,n)},multiSelectAction:c.multiSelectAction}};i||(i={}),"object"==typeof i&&(i.count=l)}return{command:c,args:i}}}}},n.emacsKeys={"Up|C-p":{command:"goorselect",args:["golineup","selectup"]},"Down|C-n":{command:"goorselect",args:["golinedown","selectdown"]},"Left|C-b":{command:"goorselect",args:["gotoleft","selectleft"]},"Right|C-f":{command:"goorselect",args:["gotoright","selectright"]},"C-Left|M-b":{command:"goorselect",args:["gotowordleft","selectwordleft"]},"C-Right|M-f":{command:"goorselect",args:["gotowordright","selectwordright"]},"Home|C-a":{command:"goorselect",args:["gotolinestart","selecttolinestart"]},"End|C-e":{command:"goorselect",args:["gotolineend","selecttolineend"]},"C-Home|S-M-,":{command:"goorselect",args:["gotostart","selecttostart"]},"C-End|S-M-.":{command:"goorselect",args:["gotoend","selecttoend"]},"S-Up|S-C-p":"selectup","S-Down|S-C-n":"selectdown","S-Left|S-C-b":"selectleft","S-Right|S-C-f":"selectright","S-C-Left|S-M-b":"selectwordleft","S-C-Right|S-M-f":"selectwordright","S-Home|S-C-a":"selecttolinestart","S-End|S-C-e":"selecttolineend","S-C-Home":"selecttostart","S-C-End":"selecttoend","C-l":"recenterTopBottom","M-s":"centerselection","M-g":"gotoline","C-x C-p":"selectall","C-Down":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"C-Up":{command:"goorselect",args:["gotopageup","selectpageup"]},"PageDown|C-v":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"PageUp|M-v":{command:"goorselect",args:["gotopageup","selectpageup"]},"S-C-Down":"selectpagedown","S-C-Up":"selectpageup","C-s":"iSearch","C-r":"iSearchBackwards","M-C-s":"findnext","M-C-r":"findprevious","S-M-5":"replace",Backspace:"backspace","Delete|C-d":"del","Return|C-m":{command:"insertstring",args:"\n"},"C-o":"splitline","M-d|C-Delete":{command:"killWord",args:"right"},"C-Backspace|M-Backspace|M-Delete":{command:"killWord",args:"left"},"C-k":"killLine","C-y|S-Delete":"yank","M-y":"yankRotate","C-g":"keyboardQuit","C-w|C-S-W":"killRegion","M-w":"killRingSave","C-Space":"setMark","C-x C-x":"exchangePointAndMark","C-t":"transposeletters","M-u":"touppercase","M-l":"tolowercase","M-/":"autocomplete","C-u":"universalArgument","M-;":"togglecomment","C-/|C-x u|S-C--|C-z":"undo","S-C-/|S-C-x u|C--|S-C-z":"redo","C-x r":"selectRectangularRegion","M-x":{command:"focusCommandLine",args:"M-x "}},n.handler.bindKeys(n.emacsKeys),n.handler.addCommands({recenterTopBottom:function(e){var n=e.renderer,t=n.$cursorLayer.getPixelPosition(),o=n.$size.scrollerHeight-n.lineHeight,s=n.scrollTop;s=Math.abs(t.top-s)<2?t.top-o:Math.abs(t.top-s-.5*o)<2?t.top:t.top-.5*o,e.session.setScrollTop(s)},selectRectangularRegion:function(e){e.multiSelect.toggleBlockSelection()},setMark:{exec:function(e,n){if(n&&n.count)return e.inMultiSelectMode?e.forEachSelection(r):r(),void r();var t=e.emacsMark(),o=e.selection.getAllRanges(),s=o.map(function(e){return{row:e.start.row,column:e.start.column}}),a=o.every(function(e){return e.isEmpty()});if(t||!a)return e.inMultiSelectMode?e.forEachSelection({exec:e.clearSelection.bind(e)}):e.clearSelection(),void(t&&e.pushEmacsMark(null));if(!t)return s.forEach(function(n){e.pushEmacsMark(n)}),void e.setEmacsMark(s[s.length-1]);function r(){var n=e.popEmacsMark();n&&e.moveCursorToPosition(n)}},readOnly:!0,handlesCount:!0},exchangePointAndMark:{exec:function(e,n){var t=e.selection;if(n.count||t.isEmpty())if(n.count){var o={row:t.lead.row,column:t.lead.column};t.clearSelection(),t.moveCursorToPosition(e.emacsMarkForSelection(o))}else t.selectToPosition(e.emacsMarkForSelection());else t.setSelectionRange(t.getRange(),!t.isBackwards())},readOnly:!0,handlesCount:!0,multiSelectAction:"forEach"},killWord:{exec:function(e,t){e.clearSelection(),"left"==t?e.selection.selectWordLeft():e.selection.selectWordRight();var o=e.getSelectionRange(),s=e.session.getTextRange(o);n.killRing.add(s),e.session.remove(o),e.clearSelection()},multiSelectAction:"forEach"},killLine:function(e){e.pushEmacsMark(null),e.clearSelection();var t=e.getSelectionRange(),o=e.session.getLine(t.start.row);t.end.column=o.length,o=o.substr(t.start.column);var s=e.session.getFoldLine(t.start.row);s&&t.end.row!=s.end.row&&(t.end.row=s.end.row,o="x"),/^\s*$/.test(o)&&(t.end.row++,o=e.session.getLine(t.end.row),t.end.column=/^\s*$/.test(o)?o.length:0);var a=e.session.getTextRange(t);e.prevOp.command==this?n.killRing.append(a):n.killRing.add(a),e.session.remove(t),e.clearSelection()},yank:function(e){e.onPaste(n.killRing.get()||""),e.keyBinding.$data.lastCommand="yank"},yankRotate:function(e){"yank"==e.keyBinding.$data.lastCommand&&(e.undo(),e.session.$emacsMarkRing.pop(),e.onPaste(n.killRing.rotate()),e.keyBinding.$data.lastCommand="yank")},killRegion:{exec:function(e){n.killRing.add(e.getCopyText()),e.commands.byName.cut.exec(e),e.setEmacsMark(null)},readOnly:!0,multiSelectAction:"forEach"},killRingSave:{exec:function(e){e.$handlesEmacsOnCopy=!0;var t=e.session.$emacsMarkRing.slice(),o=[];n.killRing.add(e.getCopyText()),setTimeout(function(){function n(){var n=e.selection,t=n.getRange(),s=n.isBackwards()?t.end:t.start;o.push({row:s.row,column:s.column}),n.clearSelection()}e.$handlesEmacsOnCopy=!1,e.inMultiSelectMode?e.forEachSelection({exec:n}):n(),e.setEmacsMark(null),e.session.$emacsMarkRing=t.concat(o.reverse())},0)},readOnly:!0},keyboardQuit:function(e){e.selection.clearSelection(),e.setEmacsMark(null),e.keyBinding.$data.count=null},focusCommandLine:function(e,n){e.showCommandLine&&e.showCommandLine(n)}}),n.handler.addCommands(s.iSearchStartCommands);var g=n.handler.commands;g.yank.isYank=!0,g.yankRotate.isYank=!0,n.killRing={$data:[],add:function(e){e&&this.$data.push(e),this.$data.length>30&&this.$data.shift()},append:function(e){var n=this.$data.length-1,t=this.$data[n]||"";e&&(t+=e),t&&(this.$data[n]=t)},get:function(e){return e=e||1,this.$data.slice(this.$data.length-e,this.$data.length).reverse().join("\n")},pop:function(){return this.$data.length>1&&this.$data.pop(),this.get()},rotate:function(){return this.$data.unshift(this.$data.pop()),this.get()}}});
//# sourceMappingURL=../sourcemaps/keyboard/emacs.js.map
