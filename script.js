const FORMS = {
  newMember: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__VsQ9dNUMlBWVjVXSFdJOUUwU0ZOMUs2WFQ5Tk5ISy4u",
  currentMember: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__VsQ9dNUQ1g0S1k5SkFJNkM5WUxBUFBYTERSSjFBSC4u"
};
const GOVERNORATES = ["الإسكندرية","البحيرة","كفر الشيخ","مطروح","دمياط","بورسعيد","الغربية","الدقهلية","الإسماعيلية","الشرقية","المنوفية","القليوبية","السويس"];
const views = [...document.querySelectorAll(".view")];
function showView(name){views.forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>showView(btn.dataset.go)));
document.getElementById("homeBtn").addEventListener("click",()=>showView("home"));
function fillGovernorates(targetId, formUrl){const root=document.getElementById(targetId);GOVERNORATES.forEach(name=>{const b=document.createElement("button");b.className="gov-card";b.innerHTML=`<span>${name}</span><span>←</span>`;b.addEventListener("click",()=>window.open(formUrl,"_blank","noopener,noreferrer"));root.appendChild(b);});}
fillGovernorates("newGovGrid",FORMS.newMember);
fillGovernorates("currentGovGrid",FORMS.currentMember);
document.getElementById("newCentralLink").addEventListener("click",()=>window.open(FORMS.newMember,"_blank","noopener,noreferrer"));
document.getElementById("currentCentralLink").addEventListener("click",()=>window.open(FORMS.currentMember,"_blank","noopener,noreferrer"));
const dashboardGovs=document.getElementById("dashboardGovs");
GOVERNORATES.forEach(n=>{const s=document.createElement("span");s.textContent=n;dashboardGovs.appendChild(s);});
// Intentionally no collection or storage of personal data in this public front-end.
