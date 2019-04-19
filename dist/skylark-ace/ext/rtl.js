/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,i,t){"use strict";e("ace/lib/dom"),e("ace/lib/lang");var n=[{name:"leftToRight",bindKey:{win:"Ctrl-Alt-Shift-L",mac:"Command-Alt-Shift-L"},exec:function(e){e.session.$bidiHandler.setRtlDirection(e,!1)},readOnly:!0},{name:"rightToLeft",bindKey:{win:"Ctrl-Alt-Shift-R",mac:"Command-Alt-Shift-R"},exec:function(e){e.session.$bidiHandler.setRtlDirection(e,!0)},readOnly:!0}],r=e("../editor").Editor;function o(e,i){var t=i.getSelection().lead;i.session.$bidiHandler.isRtlLine(t.row)&&0===t.column&&(i.session.$bidiHandler.isMoveLeftOperation&&t.row>0?i.getSelection().moveCursorTo(t.row-1,i.session.getLine(t.row-1).length):i.getSelection().isEmpty()?t.column+=1:t.setPosition(t.row,t.column+1))}function s(e){e.editor.session.$bidiHandler.isMoveLeftOperation=/gotoleft|selectleft|backspace|removewordleft/.test(e.command.name)}function d(e,i){var t=i.session;if(t.$bidiHandler.currentRow=null,t.$bidiHandler.isRtlLine(e.start.row)&&"insert"===e.action&&e.lines.length>1)for(var n=e.start.row;n<e.end.row;n++)t.getLine(n+1).charAt(0)!==t.$bidiHandler.RLE&&(t.doc.$lines[n+1]=t.$bidiHandler.RLE+t.getLine(n+1))}function l(e,i){var t=i.session.$bidiHandler,n=i.$textLayer.$lines.cells,r=i.layerConfig.width-i.layerConfig.padding+"px";n.forEach(function(e){var i=e.element.style;t&&t.isRtlLine(e.row)?(i.direction="rtl",i.textAlign="right",i.width=r):(i.direction="",i.textAlign="",i.width="")})}function a(e){var i=e.$textLayer.$lines;function t(e){var i=e.element.style;i.direction=i.textAlign=i.width=""}i.cells.forEach(t),i.cellCache.forEach(t)}e("../config").defineOptions(r.prototype,"editor",{rtlText:{set:function(e){e?(this.on("change",d),this.on("changeSelection",o),this.renderer.on("afterRender",l),this.commands.on("exec",s),this.commands.addCommands(n)):(this.off("change",d),this.off("changeSelection",o),this.renderer.off("afterRender",l),this.commands.off("exec",s),this.commands.removeCommands(n),a(this.renderer)),this.renderer.updateFull()}},rtl:{set:function(e){this.session.$bidiHandler.$isRtl=e,e?(this.setOption("rtlText",!1),this.renderer.on("afterRender",l),this.session.$bidiHandler.seenBidi=!0):(this.renderer.off("afterRender",l),a(this.renderer)),this.renderer.updateFull()}}})});
//# sourceMappingURL=../sourcemaps/ext/rtl.js.map
