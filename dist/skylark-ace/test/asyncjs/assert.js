/**
 * skylark-ace - A version of ace v1.4.3 that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(function(require,exports,module){var t=require("ace/lib/oop"),e=Array.prototype.slice,r=exports;function n(t,e,n,o,i){throw new r.AssertionError({message:n,actual:t,expected:e,operator:o,stackStartFunction:i})}function o(t,r){if(t===r)return!0;if("undefined"!=typeof Buffer&&Buffer.isBuffer(t)&&Buffer.isBuffer(r)){if(t.length!=r.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0}return t instanceof Date&&r instanceof Date?t.getTime()===r.getTime():"object"!=typeof t&&"object"!=typeof r?t==r:function(t,r){if(i(t)||i(r))return!1;if(t.prototype!==r.prototype)return!1;if(a(t))return!!a(r)&&(t=e.call(t),r=e.call(r),o(t,r));try{var n,c,u=Object.keys(t),f=Object.keys(r)}catch(t){return!1}if(u.length!=f.length)return!1;for(u.sort(),f.sort(),c=u.length-1;c>=0;c--)if(u[c]!=f[c])return!1;for(c=u.length-1;c>=0;c--)if(n=u[c],!o(t[n],r[n]))return!1;return!0}(t,r)}function i(t){return null===t||void 0===t}function a(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function c(t,e){return!(!t||!e)&&(e instanceof RegExp?e.test(t):t instanceof e||!0===e.call({},t))}function u(t,e,r,o){var i;"string"==typeof r&&(o=r,r=null);try{e()}catch(t){i=t}if(o=(r&&r.name?" ("+r.name+").":".")+(o?" "+o:"."),t&&!i&&n("Missing expected exception"+o),!t&&c(i,r)&&n("Got unwanted exception"+o),t&&i&&r&&!c(i,r)||!t&&i)throw i}r.AssertionError=function(t){this.name="AssertionError",this.message=t.message,this.actual=t.actual,this.expected=t.expected,this.operator=t.operator;var e=t.stackStartFunction||n;Error.captureStackTrace&&Error.captureStackTrace(this,e)},t.inherits(r.AssertionError,Error),toJSON=function(t){return"undefined"!=typeof JSON?JSON.stringify(t):t.toString()},r.AssertionError.prototype.toString=function(){return this.message?[this.name+":",this.message].join(" "):[this.name+":",toJSON(this.expected),this.operator,toJSON(this.actual)].join(" ")},r.AssertionError.__proto__=Error.prototype,r.fail=n,r.ok=function(t,e){t||n(t,!0,e,"==",r.ok)},r.equal=function(t,e,o){t!=e&&n(t,e,o,"==",r.equal)},r.notEqual=function(t,e,o){t==e&&n(t,e,o,"!=",r.notEqual)},r.deepEqual=function(t,e,i){o(t,e)||n(t,e,i,"deepEqual",r.deepEqual)},r.notDeepEqual=function(t,e,i){o(t,e)&&n(t,e,i,"notDeepEqual",r.notDeepEqual)},r.strictEqual=function(t,e,o){t!==e&&n(t,e,o,"===",r.strictEqual)},r.notStrictEqual=function(t,e,o){t===e&&n(t,e,o,"!==",r.notStrictEqual)},r.throws=function(t,r,n){u.apply(this,[!0].concat(e.call(arguments)))},r.doesNotThrow=function(t,r,n){u.apply(this,[!1].concat(e.call(arguments)))},r.ifError=function(t){if(t)throw t}});
//# sourceMappingURL=../../sourcemaps/test/asyncjs/assert.js.map
