function locoMotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function nav(){
  gsap.from("#nav h4, #nav img, #nav i", {
    y: -100,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1
  });

  gsap.from('.r1 , .upper-para , .third-upper-para , .topheading , #p3-head, #p4-head, .bottomheading ',{
    y: 100,
    duration: 1,
    delay: 5,
    opacity: 0,
  });

}
function olaAnimate(){
  gsap.from("#ola3",{
    opacity: 0,
    scale: 0,
    duration: 0.5,
    delay: 0.8,
    stagger: 0.1
  })

  gsap.from("#ola1",{
    y: 100,
    duration: 0.5,
    delay:1.4,
    opacity: 0,
  })
  gsap.from("#ola2",{
    y: -100,
    duration: 0.5,
    delay:1.4,
    opacity: 0,
  })
}
function horizontalScroll(){
  gsap.to("#card-1 img", {
    transform: "translateX(-300%)",
    duration: 5,
    scrollTrigger:{
      trigger: "#card-1",
      scroller: "body",
      start: "top 30%",
      markers: true,
      end: "top 100%",
      scrub:2,
      pin: true
    }
  })
}
function scroll(){
  ScrollReveal({ reset: true,
    distance: "60px",
    duration: 2.5,
    delay: 4
   });
   ScrollReveal().reveal('.r1', { delay: 500 });
}
document.addEventListener('DOMContentLoaded', function(){
  const cards = [
      { id: "#card-1", endTranslateX: -2000, rotate: 45 },
      { id: "#card-2", endTranslateX: -1000, rotate: -30 },
      { id: "#card-3", endTranslateX: -2000, rotate: 25 },
      { id: "#card-4", endTranslateX: -1500, rotate: -10 }
  ];

  ScrollTrigger.create({
      trigger: "#wrapper",
      start: "top top",
      end: "+=1200vh",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
          gsap.to("#wrapper", {
              x: `${-350 * self.progress}vw`,
              duration: 0.5,
              ease: "power3.out",
          });
      },
  });
  cards.forEach ((card) => {
      ScrollTrigger.create({
          trigger: "card.id",
          start: "top top",
          end: "+=1200vh",
          scrub: 1,
          onUpdate: (self) => {
              gsap.to(card.id,{
                  x: `${card.endTranslateX * self.progress}px`,
                  rotate: `${card.rotate * self.progress * 2}`,
                  duration: 0.5,
                  ease: "power3.out",
              });
          },
      });
  });
});


// scroll()
// horizontalScroll()
// olaAnimate()
nav()
locoMotive()

// gsap.registerPlugin(ScrollTrigger);
