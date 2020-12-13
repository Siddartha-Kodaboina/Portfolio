const nav_burger=()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const links=document.querySelectorAll('.nav-link');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        links.forEach((link,index)=>{
            if(link.style.animation) link.style.animation = ``;
            else link.style.animation = `slide_nav_anime 0.5s ease-in forwards ${(index/5)+0.2}s`;
        });
        burger.classList.toggle('toggle');
    });
}

nav_burger();