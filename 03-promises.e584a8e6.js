!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t),t("6JpON");var i=t("h6c0i"),r={form:document.querySelector(".form")}.form;r.addEventListener("submit",(function(e){e.preventDefault();for(var n=+r.delay.value,o=+r.step.value,t=+r.amount.value,c=1;c<=t;c+=1)a.push(u(c,n)),n+=o;a.forEach((function(e){e.then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))})),a.length=0,r.reset()}));var a=[];function u(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.e584a8e6.js.map
