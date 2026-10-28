const pages=["home","work","services","packages","about","contact"];
const drawer=document.getElementById("drawer");
function showPage(name){
  if(!pages.includes(name)) name="home";
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(name).classList.add("active");
  drawer.classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
  if(location.hash !== "#"+name) history.pushState({}, "", "#"+name);
}
document.querySelectorAll("[data-page]").forEach(a=>{
  a.addEventListener("click",e=>{e.preventDefault();showPage(a.dataset.page)});
});
document.getElementById("openMenu").onclick=()=>drawer.classList.add("open");
document.getElementById("closeMenu").onclick=()=>drawer.classList.remove("open");
window.addEventListener("popstate",()=>showPage(location.hash.slice(1)||"home"));
if(pages.includes(location.hash.slice(1))) showPage(location.hash.slice(1));

document.getElementById("enquiry").addEventListener("submit",e=>{
  e.preventDefault();
  const t=document.getElementById("toast");
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2600);
  e.target.reset();
});