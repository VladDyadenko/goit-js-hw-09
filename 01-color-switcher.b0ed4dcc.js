!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("body"),n=document.querySelector("button[data-stop]");n.disabled=!0;var a=null;t.addEventListener("click",(function(){a=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b0ed4dcc.js.map