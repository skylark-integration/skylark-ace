/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){return'\r\n<html lang="en">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\r\n  <title>Ace Unit Tests</title>\r\n  <style type="text/css" media="screen">\r\n\r\n    #log .passed {\r\n        color: green;\r\n    }\r\n    \r\n    #log .failed {\r\n        color: red;\r\n    }\r\n    \r\n    #log pre.error {\r\n        color: black;\r\n    }\r\n  </style>\r\n</head>\r\n<body>\r\n    \r\n<div id="log"></div>\r\n\r\n<script type="text/javascript">\r\n    var require = {\r\n        paths: {\r\n            ace: "../"\r\n        },\r\n        packages : [{\r\n            name: "asyncjs",\r\n            location: "./asyncjs",\r\n            main: "index"\r\n        }, {\r\n            name: "assert",\r\n            location: "./asyncjs",\r\n            main: "assert"\r\n        }]\r\n    };\r\n<\/script>\r\n<script src="../../../demo/kitchen-sink/require.js" data-main="all_browser" type="text/javascript" charset="utf-8"><\/script>\r\n\r\n\r\n</body>\r\n</html>\r\n'});
//# sourceMappingURL=../sourcemaps/test/tests.html.js.map
