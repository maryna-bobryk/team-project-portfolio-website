import{S as s}from"./assets/vendor-C_rZkzgH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l=document.querySelector(".swiper-project-btn-next"),u=document.querySelector(".swiper-project-btn-prev"),i=new s(".swiper",{speed:400,spaceBetween:100});l.addEventListener("click",d);function d(){i.slideNext()}u.addEventListener("click",f);function f(){i.slidePrev()}
//# sourceMappingURL=index.js.map
