/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(e,t,a){"use strict";e("ace/lib/fixoldbrowsers");var s=e("../test/mockdom"),o=e("asyncjs").test,c=e("asyncjs"),r=0,n=0,i=document.getElementById("log"),d=document.createElement.bind(document),l=["ace/anchor_test","ace/autocomplete_test","ace/background_tokenizer_test","ace/commands/command_manager_test","ace/config_test","ace/document_test","ace/edit_session_test","ace/editor_change_document_test","ace/editor_highlight_selected_word_test","ace/editor_navigation_test","ace/editor_text_edit_test","ace/ext/static_highlight_test","ace/ext/whitespace_test","ace/ext/error_marker_test","ace/incremental_search_test","ace/keyboard/emacs_test","ace/keyboard/textinput_test","ace/keyboard/keybinding_test","ace/keyboard/vim_test","ace/keyboard/vim_ace_test","ace/keyboard/sublime_test","ace/layer/text_test","ace/lib/event_emitter_test","ace/mode/coffee/parser_test","ace/mode/coldfusion_test","ace/mode/css_test","ace/mode/css_worker","ace/mode/html_test","ace/mode/javascript_test","ace/mode/javascript_worker_test","ace/mode/logiql_test","ace/mode/python_test","ace/mode/text_test","ace/mode/xml_test","ace/mode/folding/fold_mode_test","ace/mode/folding/cstyle_test","ace/mode/folding/html_test","ace/mode/folding/pythonic_test","ace/mode/folding/xml_test","ace/mode/folding/coffee_test","ace/mode/behaviour/behaviour_test","ace/multi_select_test","ace/mouse/mouse_handler_test","ace/occur_test","ace/placeholder_test","ace/range_test","ace/range_list_test","ace/search_test","ace/selection_test","ace/snippets_test","ace/token_iterator_test","ace/tokenizer_test","ace/undomanager_test","ace/virtual_renderer_test"],_=["<a href='?'>all tests</a><br>"];for(var m in l){var h=l[m];_.push("<a href='?",h,"'>",h.replace(/^ace\//,""),"</a><br>")}var u=d("div");if(u.innerHTML=_.join(""),u.style.cssText="position:absolute;right:0;top:0",document.body.appendChild(u),-1!=location.search.indexOf("show=1")&&e(["ace/virtual_renderer","ace/test/mockrenderer"],function(e,t){var a=e.VirtualRenderer;t.MockRenderer=function(){var e=document.createElement("div");return e.style.position="fixed",e.style.left="20px",e.style.top="30px",e.style.width="500px",e.style.height="300px",document.body.appendChild(e),new a(e)}}),-1!=location.search.indexOf("mock=1")&&s.loadInBrowser(window),location.search){var f=location.search.split(/[&?]|\w+=\w+/).filter(Boolean);f[0]&&(l=f[0].split(","))}var p=location.hash.substr(1);window.onhashchange=function(){location.reload()},e(l,function(){var t=l.map(function(t){var a=e(t);return a.href=t,a});c.list(t).expand(function(e){return p&&Object.keys(e).forEach(function(t){t.match(/^>?test/)&&!t.match(p)&&(e[t]=void 0)}),o.testcase(e)},o.TestGenerator).run().each(function(e,t){if(1==e.index&&e.context.href){var a=e.context.href;(s=d("div")).innerHTML="<a href='?"+a+"'>"+a.replace(/^ace\//,"")+"</a>",i.appendChild(s)}var s;(s=d("div")).className=e.passed?"passed":"failed";var o=e.name;e.suiteName&&(o=e.suiteName+": "+e.name);var c="["+e.count+"/"+e.index+"] "+o+" "+(e.passed?"OK":"FAIL");if(e.passed)console.log(c);else{if(e.err.stack)var r=e.err.stack;else r=e.err;console.error(c),console.error(r),c+="<pre class='error'>"+r+"</pre>"}s.innerHTML=c,i.appendChild(s),t()}).each(function(e){e.passed?r+=1:n+=1}).end(function(){i.innerHTML+=["<div class='summary'>","<br>","Summary: <br>","<br>","Total number of tests: "+(r+n)+"<br>",r?"Passed tests: "+r+"<br>":"",n?"Failed tests: "+n+"<br>":""].join(""),console.log("Total number of tests: "+(r+n)),console.log("Passed tests: "+r),console.log("Failed tests: "+n)})})});
//# sourceMappingURL=../sourcemaps/test/all_browser.js.map
