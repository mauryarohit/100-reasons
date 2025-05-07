(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div>
      <img id="background-image" src="" alt="Background Image" />
      <p id="caption"></p>
    </div>
  </div>
`;const r=[{src:"./saree.jpg",caption:"You look absolutely stunning in saree 😍"},{src:"./smile.JPG",caption:"You have a wonderful smile 😊"},{src:"./weird.JPG",caption:"You're a beautiful kind of odd, and it's perfect. 💫✨💕"}],a=document.getElementById("background-image"),d=document.getElementById("caption");let c=0;function l(){c=(c+1)%r.length;const o=r[c];a.src=o.src,d.textContent=o.caption}a.src=r[0].src;d.textContent=r[0].caption;setInterval(l,1e4);
