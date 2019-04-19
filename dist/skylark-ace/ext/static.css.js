/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){return".ace_static_highlight {\r\n    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;\r\n    font-size: 12px;\r\n    white-space: pre-wrap\r\n}\r\n\r\n.ace_static_highlight .ace_gutter {\r\n    width: 2em;\r\n    text-align: right;\r\n    padding: 0 3px 0 0;\r\n    margin-right: 3px;\r\n    contain: none;\r\n}\r\n\r\n.ace_static_highlight.ace_show_gutter .ace_line {\r\n    padding-left: 2.6em;\r\n}\r\n\r\n.ace_static_highlight .ace_line { position: relative; }\r\n\r\n.ace_static_highlight .ace_gutter-cell {\r\n    -moz-user-select: -moz-none;\r\n    -khtml-user-select: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n\r\n\r\n.ace_static_highlight .ace_gutter-cell:before {\r\n    content: counter(ace_line, decimal);\r\n    counter-increment: ace_line;\r\n}\r\n.ace_static_highlight {\r\n    counter-reset: ace_line;\r\n}\r\n"});
//# sourceMappingURL=../sourcemaps/ext/static.css.js.map
