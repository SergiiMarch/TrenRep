!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,o,a,l,u,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,s=t,l=e.apply(r,n)}function j(e){return s=e,u=setTimeout(S,t),c?y(e):l}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function S(){var e=p();if(O(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function w(e){return u=void 0,d&&i?y(e):(i=o=void 0,l)}function T(){var e=p(),n=O(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(m)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),l}return t=h(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(h(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=f=o=u=void 0},T.flush=function(){return void 0===u?l:w(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=l.test(t);return r||u.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O="feedback-form-state";!function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e),n=t.email,i=t.message;j.elements.email.value=n||"",j.elements.message.value=i||""}}(),j.addEventListener("input",e(t)((function(){var e={email:j.elements.email.value,message:j.elements.message.value};localStorage.setItem(O,JSON.stringify(e))}),1e3)),j.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.elements.email.value||""===j.elements.message.value)return alert("Please fill in all the fields!");var t={email:j.elements.email.value,message:j.elements.message.value};localStorage.setItem(O,JSON.stringify(t)),console.log(t),e.currentTarget.reset(),localStorage.removeItem(O)})),console.log("hello world")}();
//# sourceMappingURL=03-feedback.16b24e38.js.map
