const navLink = document.getElementsByClassName("nav-link");
const modalLink = document.getElementById("main-video-link");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const menuIcon = document.getElementById("menu-icon");
const navTab = document.getElementById("nav");


menuIcon.addEventListener("click", ()=>{
    navTab.classList.toggle("show");
});


function closeModal() {
    modal.style.display = "none";
}

modal.addEventListener("click", closeModal);
modalLink.addEventListener("click", () =>{
    modal.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);

