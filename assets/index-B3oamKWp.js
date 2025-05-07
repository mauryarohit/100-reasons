(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div>
      <img id="background-image" src="" alt="Background Image" />
      <p id="caption"></p>
      <button id="refresh-button">Refresh</button>
    </div>
  </div>
`;const i=[{src:"/publc/saree.jpg",caption:"You look absolutely stunning in saree 😍"},{src:"/public/smile.JPG",caption:"You have a wonderful smile 😊"}],d=document.getElementById("background-image"),a=document.getElementById("caption"),l=document.getElementById("refresh-button");function s(){const n=Math.floor(Math.random()*i.length),o=i[n];d.src=o.src,a.textContent=o.caption}l.addEventListener("click",s);s();
