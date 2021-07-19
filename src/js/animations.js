document.addEventListener('DOMContentLoaded', () => {
    var tl = gsap.timeline();

    tl
        .from(".menu-1", {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: "power3.out",
        })
        .from(".menu-2", {
            duration: 1,
            opacity: 0,
            ease: "power3.out",
        }, "-=0.5")
        .from(".content-item.title", {
            duration: 1,
            y: 300,
            opacity: 0,
            stagger: { each: 0.2 },
            ease: "power3.out",
        }, "-=0.8")
        .from(".content-item.form", {
            duration: 1,
            y: 300,
            opacity: 0,
            ease: "power3.out",
        }, "-=0.8")
        .from(".bg-hero", {
            duration: 1,
            y: 300,
            opacity: 0,
            ease: "power3.out",
        }, "-=0.8")
})