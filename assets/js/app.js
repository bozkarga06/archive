/* ==========================================
   ŞİKE DOSYASI
========================================== */
/* ==========================================
   Scroll Progress
========================================== */

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const height=document.documentElement.scrollHeight-window.innerHeight;

const scrolled=(window.scrollY/height)*100;

progress.style.width=scrolled+"%";

});

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

/* ==========================================
   Reveal Animation
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".section,.breaking,.timeline,.video-section").forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});


/* ==========================================
   POSTS
========================================== */

async function loadPosts(){

    const response = await fetch("data/posts.json");

    const posts = await response.json();

    const container = document.getElementById("latest-posts");

    if(!container) return;

    container.innerHTML = "";

    posts.forEach(post=>{

        container.innerHTML += `

<article class="card">

<div class="card-image">

<img src="${post.image}" alt="${post.title}">

<span class="card-category">

${post.category}

</span>

</div>

<div class="card-body">

<h3 class="card-title">

${post.title}

</h3>

<p class="card-text">

${post.description}

</p>

<div class="card-footer">

<span>${post.date}</span>

<span>${post.readTime}</span>

</div>

</div>

</article>

`;

    });

}

loadPosts();

/* ==========================================
   SEARCH + FILTER
========================================== */

let allPosts=[];

async function loadPosts(){

    const response=await fetch("data/posts.json");

    allPosts=await response.json();

    renderPosts(allPosts);

}

function renderPosts(posts){

    const container=document.getElementById("latest-posts");

    container.innerHTML="";

    posts.forEach(post=>{

        container.innerHTML+=`

<article class="card">

<div class="card-image">

<img src="${post.image}" alt="${post.title}">

<span class="card-category">

${post.category}

</span>

</div>

<div class="card-body">

<h3 class="card-title">${post.title}</h3>

<p class="card-text">${post.description}</p>

<div class="card-footer">

<span>${post.date}</span>

<span>${post.readTime}</span>

</div>

</div>

</article>

`;

    });

}

document.addEventListener("input",(e)=>{

    if(e.target.id!=="searchInput") return;

    const value=e.target.value.toLowerCase();

    renderPosts(

        allPosts.filter(post=>

            post.title.toLowerCase().includes(value) ||

            post.description.toLowerCase().includes(value)

        )

    );

});

document.querySelectorAll(".filter-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.querySelectorAll(".filter-btn")

        .forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        const filter=btn.dataset.filter;

        if(filter==="all"){

            renderPosts(allPosts);

            return;

        }

        renderPosts(

            allPosts.filter(post=>post.category===filter)

        );

    });

});

loadPosts();

/* ==========================================
   LIGHTBOX
========================================== */

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightbox-image");

document.querySelectorAll(".gallery-item img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

});

});

document.querySelector(".lightbox-close").addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});