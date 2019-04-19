/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,o){"use strict";var n=e("../lib/dom"),i=e("../lib/oop"),s=e("../lib/event"),r=e("../tooltip").Tooltip;function l(e){r.call(this,e)}i.inherits(l,r),function(){this.setPosition=function(e,t){var o=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight,i=this.getWidth(),s=this.getHeight();t+=15,(e+=15)+i>o&&(e-=e+i-o),t+s>n&&(t-=20+s),r.prototype.setPosition.call(this,e,t)}}.call(l.prototype),t.GutterHandler=function(e){var t,o,i,r=e.editor,u=r.renderer.$gutterLayer,c=new l(r.container);function d(){t&&(t=clearTimeout(t)),i&&(c.hide(),i=null,r._signal("hideGutterTooltip",c),r.removeEventListener("mousewheel",d))}function a(e){c.setPosition(e.x,e.y)}e.editor.setDefaultHandler("guttermousedown",function(t){if(r.isFocused()&&0==t.getButton()&&"foldWidgets"!=u.getRegion(t)){var o=t.getDocumentPosition().row,n=r.session.selection;if(t.getShiftKey())n.selectTo(o,0);else{if(2==t.domEvent.detail)return r.selectAll(),t.preventDefault();e.$clickSelection=r.selection.getLineRange(o)}return e.setState("selectByLines"),e.captureMouse(t),t.preventDefault()}}),e.editor.setDefaultHandler("guttermousemove",function(s){var l=s.domEvent.target||s.domEvent.srcElement;if(n.hasCssClass(l,"ace_fold-widget"))return d();i&&e.$tooltipFollowsMouse&&a(s),o=s,t||(t=setTimeout(function(){t=null,o&&!e.isMousePressed?function(){var t=o.getDocumentPosition().row,n=u.$annotations[t];if(!n)return d();if(t==r.session.getLength()){var s=r.renderer.pixelToScreenCoordinates(0,o.y).row,l=o.$pos;if(s>r.session.documentToScreenRow(l.row,l.column))return d()}if(i!=n)if(i=n.text.join("<br/>"),c.setHtml(i),c.show(),r._signal("showGutterTooltip",c),r.on("mousewheel",d),e.$tooltipFollowsMouse)a(o);else{var f=o.domEvent.target.getBoundingClientRect(),g=c.getElement().style;g.left=f.right+"px",g.top=f.bottom+"px"}}():d()},50))}),s.addListener(r.renderer.$gutter,"mouseout",function(e){o=null,i&&!t&&(t=setTimeout(function(){t=null,d()},50))}),r.on("changeSession",d)}});
//# sourceMappingURL=../sourcemaps/mouse/default_gutter_handler.js.map
