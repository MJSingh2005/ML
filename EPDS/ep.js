let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };
}

if (window) {
    window.onscroll = () => {
        if (menu && navbar) {
            menu.classList.remove('bx-x');
            navbar.classList.remove('open');
        }
    };
}
// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('open');
// };

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('open');
// };

gsap.from(".card", {
    scale: 0.8,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from(".elem", {
    scale: 0.8,
    duration: 4,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".elem",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    },
})

gsap.from(".comp-text h1", {
    y: 50,
    scrollTrigger: {
        trigger: ".comp-text h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});
gsap.from("#colon2", {
    x: 0,
    y: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    },
});