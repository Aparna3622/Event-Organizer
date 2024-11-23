let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggle = document.querySelector('.theme-toggle');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeToggle.classList.toggle('active');
}

window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggle.classList.remove('active');
}

document.querySelectorAll('.theme-toggle .theme-btn').forEach(btn =>{

    btn.onclick = () =>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color',color);
    }
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
  });

  var swiper = new Swiper(".review-slide", {
    slidesPerView:1,
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
  });