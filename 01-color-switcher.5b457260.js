const e=document.querySelector("[data-start"),t=document.querySelector("[data-stop");e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,intervalId=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0}));
//# sourceMappingURL=01-color-switcher.5b457260.js.map
