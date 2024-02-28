(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const g="bc352b594baa41b0a25225550242702",v=async n=>{const c=await(await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${g}&q=${n}`)).json();return console.log("searchCities:",c),c.length||window.alert("Nenhuma cidade encontrada"),c},x=async n=>{const c=await(await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${g}&q=${n}`)).json(),{current:i,location:e}=c;return{name:e.name,country:e.country,temp:i.temp_c,condition:i.condition.text,icon:i.condition.icon,url:n}},k=async n=>(await(await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${g}&q=${n}&days=7`)).json()).forecast.forecastday.map(e=>({date:e.date,maxTemp:e.day.maxtemp_c,minTemp:e.day.mintemp_c,condition:e.day.condition.text,icon:e.day.condition.icon}));function t(n,o,c=""){const i=document.createElement(n);return i.classList.add(...o.split(" ")),i.textContent=c,i}function I(n){const{date:o,maxTemp:c,minTemp:i,condition:e,icon:a}=n,s=new Date(o);s.setDate(s.getDate()+1);const r=s.toLocaleDateString("pt-BR",{weekday:"short"}),d=t("div","forecast"),h=t("p","forecast-weekday",r),y=t("span","forecast-temp max","max"),C=t("span","forecast-temp max",`${c}\xBA`),E=t("span","forecast-temp min","min"),p=t("span","forecast-temp min",`${i}\xBA`),l=t("div","forecast-temp-container");l.appendChild(y),l.appendChild(E),l.appendChild(C),l.appendChild(p);const m=t("p","forecast-condition",e),f=t("img","forecast-icon");f.src=a.replace("64x64","128x128");const u=t("div","forecast-middle-container");return u.appendChild(l),u.appendChild(f),d.appendChild(h),d.appendChild(u),d.appendChild(m),d}function w(n){const o=document.getElementById(n);for(;o.firstChild;)o.removeChild(o.firstChild)}function L(n){const o=document.getElementById("forecast-container"),c=document.getElementById("weekdays");w("weekdays"),n.forEach(i=>{const e=I(i);c.appendChild(e)}),o.classList.remove("hidden")}function B(n){const{name:o,country:c,temp:i,condition:e,icon:a,url:s}=n,r=t("li","city"),d=t("div","city-heading"),h=t("h2","city-name",o),y=t("p","city-country",c);d.appendChild(h),d.appendChild(y);const C=t("p","city-temp",`${i}\xBA`),E=t("p","city-condition",e),p=t("div","city-temp-container");p.appendChild(E),p.appendChild(C);const l=t("img","condition-icon");l.src=a.replace("64x64","128x128");const m=t("div","city-info-container");m.appendChild(p),m.appendChild(l),r.appendChild(d),r.appendChild(m);const f=t("button","forecast-button","Ver previs\xE3o");return r.appendChild(f),f.addEventListener("click",async()=>{const u=await k(s);await L(u)}),r}async function b(n){n.preventDefault(),w("cities");const c=document.getElementById("search-input").value;if(!c)return;const i=await v(c),e=document.getElementById("cities");i.forEach(async a=>{const s=await x(a.url),r=B(s);e.appendChild(r)})}document.getElementById("search-form").addEventListener("submit",b);document.getElementById("close-forecast").addEventListener("click",()=>{document.getElementById("forecast-container").classList.add("hidden")});
