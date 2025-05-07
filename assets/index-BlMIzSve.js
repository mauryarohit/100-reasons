(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div>
      <img id="background-image" src="" alt="Background Image" />
      <p id="caption"></p>
      <button id="refresh-button">Refresh</button>
    </div>
  </div>
`;const c=[{src:"/saree.jpg",caption:"You look absolutely stunning in saree 😍"},{src:"/smile.JPG",caption:"You have a wonderful smile 😊"},{src:"/weird.JPG",caption:"You're a beautiful kind of odd, and it's perfect. 💫✨💕"}],u=document.getElementById("background-image"),a=document.getElementById("caption"),l=document.getElementById("refresh-button");function s(){const n=Math.floor(Math.random()*c.length),o=c[n];u.src=o.src,a.textContent=o.caption}l.addEventListener("click",s);s();
