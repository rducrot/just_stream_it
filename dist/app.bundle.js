/*! For license information please see app.bundle.js.LICENSE.txt */
(()=>{"use strict";var t;function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n="http://localhost:8000/api/v1/titles/",r="Films les mieux notés",o=(e(t={},"",r),e(t,"Sci-Fi","Science-Fiction"),e(t,"Adventure","Aventure"),e(t,"Comedy","Comédie"),t);function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var r=document.createElement("div");r.classList.add("movie"),r.id=e.id;var o=document.createElement("img");o.classList.add("movie__img"),o.src=e.image_url,o.alt=e.title;var i=document.createElement("div");i.classList.add("movie__overlay");var a=document.createElement("p");a.classList.add("movie__title"),a.textContent=e.title,r.onclick=function(){!function(t){var e=document.getElementById("modal"),r=document.getElementById("modal-content");fetch(n+t).then((function(t){return t.json()})).then((function(t){r.innerHTML='\n    <img class="movie__img" src='.concat(t.image_url,"></img>\n    <div>\n      <p>Titre : ").concat(t.title,"</p>\n      <p>Genre(s) : ").concat(t.genres,"</p>\n      <p>Date de publication : ").concat(t.date_published,"</p>\n      <p>Score : ").concat(t.rated,"</p>\n      <p>Score Imbd : ").concat(t.imdb_score,"</p>\n      <p>Directeur(s) : ").concat(t.directors,"</p>\n      <p>Acteurs : ").concat(t.actors,"</p>\n      <p>Durée : ").concat(t.duration," minutes</p>\n      <p>Pays : ").concat(t.countries,"</p>\n      <p>Box office mondial : ").concat(t.worldwide_gross_income,"</p>\n      <p>Description : ").concat(t.description,"</p>\n    </dev>"),e.style.display="block"}))}(e.id)},i.appendChild(a),r.appendChild(o),r.appendChild(i),t.appendChild(r)}function u(t,e){var n=e.getElementsByClassName("movies-container")[0],o=e.getElementsByClassName("category__title")[0],a=e.getElementsByClassName("left-button")[0],u=e.getElementsByClassName("right-button")[0],l=0;fetch(t).then((function(t){return t.json()})).then((function(t){var f,h=i(t.results);try{for(h.s();!(f=h.n()).done;){var d=f.value;c(n,d),l+=1}}catch(t){h.e(t)}finally{h.f()}t.previous&&(a.onclick=function(){s(t.previous,e)}),t.previous||o.textContent!=r||(n.removeChild(n.firstChild),l-=1),t.next&&(u.onclick=function(){s(t.next,e)},fetch(t.next).then((function(t){return t.json()})).then((function(t){var e,r=i(t.results);try{for(r.s();!(e=r.n()).done;){var o=e.value;l<7&&(c(n,o),l+=1)}}catch(t){r.e(t)}finally{r.f()}})))}))}function l(t,e,n){var r=document.createElement("div");r.classList.add("category");var o=document.createElement("h2");o.classList.add("category__title"),o.textContent=e;var i=document.createElement("div");i.classList.add("movies-container");var a=document.createElement("button");a.classList.add("left-button","button"),a.textContent="<";var c=document.createElement("button");c.classList.add("right-button","button"),c.textContent=">",r.appendChild(o),r.appendChild(a),r.appendChild(c),r.appendChild(i),n.appendChild(r),u("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score&genre="+t,r)}function s(t,e){for(var n=e.getElementsByClassName("movies-container")[0];n.firstChild;)n.removeChild(n.firstChild);u(t,e)}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function d(){}function p(){}function v(){}var m={};c(m,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==e&&n.call(g,o)&&(m=g);var b=v.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==f(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v,c(b,"constructor",v),c(v,"constructor",p),p.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),c(b,a,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)}))}}function v(){return(v=p(h().mark((function t(){var e,r,o;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("best-movie-img"),r=document.getElementById("best-movie-title"),o=document.getElementById("best-movie-description"),fetch("http://localhost:8000/api/v1/titles/?format=json&sort_by=-imdb_score").then((function(t){return t.json()})).then((function(t){var i=t.results[0];fetch(n+i.id).then((function(t){return t.json()})).then((function(t){r.textContent=t.title,o.textContent=t.description,c(e,t)}))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=document.getElementById("categories");for(var y in function(){v.apply(this,arguments)}(),o)l(y,o[y],m);window.onclick=function(t){t.target==modal&&(modal.style.display="none")}})();