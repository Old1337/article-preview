const btn = document.querySelector(".click");
const socialEl = document.querySelector(".social");

btn.onclick = function() {
   if(socialEl.classList.contains("active")) {
       socialEl.classList.remove("active")
   }
   else {
    socialEl.classList.add("active")
   }
}