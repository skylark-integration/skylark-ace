/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(r,e,t){"use strict";var n,f,i,a,u={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},o=function(r){throw{name:"SyntaxError",message:r,at:n,text:i}},c=function(r){return r&&r!==f&&o("Expected '"+r+"' instead of '"+f+"'"),f=i.charAt(n),n+=1,f},s=function(){var r,e="";for("-"===f&&(e="-",c("-"));f>="0"&&f<="9";)e+=f,c();if("."===f)for(e+=".";c()&&f>="0"&&f<="9";)e+=f;if("e"===f||"E"===f)for(e+=f,c(),"-"!==f&&"+"!==f||(e+=f,c());f>="0"&&f<="9";)e+=f,c();if(r=+e,!isNaN(r))return r;o("Bad number")},l=function(){var r,e,t,n="";if('"'===f)for(;c();){if('"'===f)return c(),n;if("\\"===f)if(c(),"u"===f){for(t=0,e=0;e<4&&(r=parseInt(c(),16),isFinite(r));e+=1)t=16*t+r;n+=String.fromCharCode(t)}else{if("string"!=typeof u[f])break;n+=u[f]}else{if("\n"==f||"\r"==f)break;n+=f}}o("Bad string")},d=function(){for(;f&&f<=" ";)c()};return a=function(){switch(d(),f){case"{":return function(){var r,e={};if("{"===f){if(c("{"),d(),"}"===f)return c("}"),e;for(;f;){if(r=l(),d(),c(":"),Object.hasOwnProperty.call(e,r)&&o('Duplicate key "'+r+'"'),e[r]=a(),d(),"}"===f)return c("}"),e;c(","),d()}}o("Bad object")}();case"[":return function(){var r=[];if("["===f){if(c("["),d(),"]"===f)return c("]"),r;for(;f;){if(r.push(a()),d(),"]"===f)return c("]"),r;c(","),d()}}o("Bad array")}();case'"':return l();case"-":return s();default:return f>="0"&&f<="9"?s():function(){switch(f){case"t":return c("t"),c("r"),c("u"),c("e"),!0;case"f":return c("f"),c("a"),c("l"),c("s"),c("e"),!1;case"n":return c("n"),c("u"),c("l"),c("l"),null}o("Unexpected '"+f+"'")}()}},function(r,e){var t;return i=r,n=0,f=" ",t=a(),d(),f&&o("Syntax error"),"function"==typeof e?function r(t,n){var f,i,a=t[n];if(a&&"object"==typeof a)for(f in a)Object.hasOwnProperty.call(a,f)&&(void 0!==(i=r(a,f))?a[f]=i:delete a[f]);return e.call(t,n,a)}({"":t},""):t}});
//# sourceMappingURL=../../sourcemaps/mode/json/json_parse.js.map
