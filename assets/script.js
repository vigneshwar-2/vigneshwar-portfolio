document.addEventListener("DOMContentLoaded",()=>{
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
if(menu){menu.onclick=()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"✕":"☰"}}
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>obs.observe(x));
const form=document.getElementById("contactForm");
if(form){form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);
const name=d.get("name"),email=d.get("email"),subject=d.get("subject"),message=d.get("message");
const body=`Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
window.location.href=`mailto:vigneshwarvicky248@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
document.getElementById("status").textContent="Opening your email app…";})}
});