var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("7Y9D8");function i(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{delay:t,step:r,amount:n}=e.target.elements;if(t=Number(t.value),r=Number(r.value),n=Number(n.value),t<0||r<0||n<=0)return void o.Notify.failure("Please enter correct number. The number must be greater than 0");for(let e=1;e<=n;e+=1)i(e,t).then((({position:e,delay:t})=>{o.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{o.Notify.failure(`Rejected promise ${e} in ${t}ms`)})),t+=r}));
//# sourceMappingURL=03-promises.91f02726.js.map
