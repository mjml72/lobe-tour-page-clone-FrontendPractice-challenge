const navLink = document.getElementsByClassName("nav-link");
const modalLink = document.getElementById("main-video-link");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const menuIcon = document.getElementById("menu-icon");
const navTab = document.getElementById("nav");
const video = document.getElementById("video");


menuIcon.addEventListener("click", ()=>{
    navTab.classList.toggle("show");
});


function closeModal() {
    video.src = "https://www.youtube.com/embed/Mdcw3Sb98DA?si=_dv8Nqsxt8myYEEX";
    modal.style.display = "none";
}

modal.addEventListener("click", closeModal);
modalLink.addEventListener("click", () =>{
    modal.style.display = "block";
});

closeBtn.addEventListener("click", closeModal);

