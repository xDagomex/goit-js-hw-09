const e=document.querySelector("[data-start"),t=document.querySelector("[data-stop");let d=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),10)})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.2f3e3468.js.map
