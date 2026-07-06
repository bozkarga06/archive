/* ==========================================
   ŞİKE DOSYASI
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    /* Sticky Header */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    /* Mobile Menu */

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");
        menuButton.classList.toggle("active");

    });

});

/* Timeline */

const years=document.querySelectorAll(".timeline-year");

years.forEach(year=>{

    year.addEventListener("click",()=>{

        years.forEach(item=>item.classList.remove("active"));

        year.classList.add("active");

    });

});
/* ==========================================
   Video Playlist
========================================== */

const player=document.getElementById("featured-video");
const title=document.getElementById("video-title");
const description=document.getElementById("video-description");

document.querySelectorAll(".video-item").forEach(item=>{

    item.addEventListener("click",()=>{

        player.src=item.dataset.video;

        title.textContent=item.dataset.title;

        description.textContent=item.dataset.description;

    });

});