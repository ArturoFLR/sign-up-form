(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();let a="";const c=document.getElementById("main_container"),i=document.getElementById("message"),d=document.getElementById("form"),n=document.getElementById("input"),y=document.getElementById("message_usermail"),l=document.getElementById("message_button"),s=document.getElementById("error"),p=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;function f(){c==null||c.classList.toggle("hidden"),i==null||i.classList.toggle("hidden")}d==null||d.addEventListener("submit",u=>{u.preventDefault(),p.test(n==null?void 0:n.value)?(s==null||s.classList.add("hidden"),a=n==null?void 0:n.value,y.textContent=a,n.value="",f()):s==null||s.classList.remove("hidden")});l==null||l.addEventListener("click",()=>{f()});