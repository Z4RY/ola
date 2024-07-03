function hero(){
    
    gsap.from("#load",{
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        x: -100,
    })
    
    gsap.to("#load",{
        x: 250,
        opacity: 0,
        duration: 0.5,
        ease: "linear",
        delay: 2.5,
    
    })
    
    gsap.from("#front",{
        x: 550,
        opacity: 0,
        duration: 1,
        delay:1,
    })
    
    gsap.to("#front",{
        x:-200,
        duration: 0.5,
        delay: 2.5,
        onStart: function(){
            gsap.to("#loader",{
                display: "none",
            })
        }
    })
    
    gsap.from("#sec1",{
        opacity: 0,
        x: 100,
        duration: 0.5,
        delay: 3,
        stagger: 0.1,
    })
    
    gsap.from("#starter,#select,#exp,.section2 h3",{
        opacity: 0,
        y: -100,
        duration: 0.5,
        delay: 3,
        stagger: 0.2,
    })
    
    // ******************************************************* Buttons ******************************************************\\
    
    document.getElementById("2").onclick = function(){
        document.getElementById("back").style.color = "#fbf7f6"
        document.getElementById("page1").style.backgroundColor = "#9a0002"
        document.getElementById("drop").style.color = "#9a0002"
        document.getElementById("sec1").style.backgroundImage = "url(./asset/red.png)"
        gsap.from("#sec1",{
            x: 40,
            duration: 0.7,
        })
        gsap.from(".section2",{
            y: -50,
            duration: 0.5,
            stagger: true
        })
        gsap.from("#back",{
            y: 70,
            duration: 0.5,
        })
    };
    document.getElementById("3").onclick = function(){
        document.getElementById("back").style.color = "#c9dcfc"
        document.getElementById("page1").style.backgroundColor = "#00246b"
        document.getElementById("drop").style.color = "#00246b"
        document.getElementById("sec1").style.backgroundImage = "url(./asset/blue.png)"
        gsap.from("#sec1",{
            x: 30,
            duration: 0.7
        })
        gsap.from(".section2",{
            y: 50,
            duration: 0.5,
            stagger: true
        })
        gsap.from("#back",{
            y: -70,
            duration: 0.4
        })
    };
    document.getElementById("1").onclick = function(){
        document.getElementById("back").style.color = "#b3eeff"
        document.getElementById("page1").style.backgroundColor = "#07d4ff"
        document.getElementById("drop").style.color = "#07d4ff"
        document.getElementById("sec1").style.backgroundImage = "url(./asset/sky.png)"
        gsap.from("#sec1",{
            x: 40,
            duration: 0.5
        })
        gsap.from(".section2",{
            y: 50,
            duration: 0.5,
            stagger: true
        })
        gsap.from("#back",{
            y: -70,
            duration: 0.4
        })
    };
    document.getElementById("4").onclick = function(){
        document.getElementById("back").style.color = "#a2d6e3"
        document.getElementById("page1").style.backgroundColor = "#1995ad"
        document.getElementById("drop").style.color = "#1995ad"
        document.getElementById("sec1").style.backgroundImage = "url(./asset/dim.png)"
        gsap.from("#sec1",{
            x: 40,
            duration: 0.5
        })
        gsap.from(".section2",{
            y: -50,
            duration: 0.5,
            stagger: true
        })
        gsap.from("#back",{
            y: 70,
            duration: 0.5
        })
    };
    document.getElementById("5").onclick = function(){
        document.getElementById("back").style.color = "#f8ee00"
        document.getElementById("page1").style.backgroundColor = "#111924"
        document.getElementById("drop").style.color = "#111924"
        document.getElementById("sec1").style.backgroundImage = "url(./asset/mustard.png)"
        gsap.from("#sec1",{
            x: 40,
            duration: 0.5
        })
        gsap.from(".section2",{
            y: 50,
            duration: 0.5,
            stagger: true
        })
        gsap.from("#back",{
            y: -70,
            duration: 0.5
        })
    };
    
    
    }
function nav(){
        gsap.from("#nav h4, #nav img, #nav i", {
          y: -100,
          duration: 0.5,
          delay: 3,
          opacity: 0,
          stagger: 0.1
        });
}

function stats(){
    gsap.from("#pc1 h1, #pc2 h1,#pc3 h1",{
        y: 100,
        opacity: 0,
        // delay: 4,
        duration: 0.5,
        // stagger: 1.5,
        scrollTrigger:{
            trigger: "#page4",
            // markers: true,
            start: "top 35%",
            end: "top 70%",
            // scrub:3,
            pin: true
        }
    })
    // gsap.from("#pc2 h1",{
    //     y: 100,
    //     opacity: 0,
    //     delay: 5,
    //     duration: 0.5
    // })
    // gsap.from("#pc3 h1",{
    //     y: 100,
    //     opacity: 0,
    //     delay: 6,
    //     duration: 0.5
    // })
}

function headings(){
    gsap.from("#p2-up h1",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page2",
            // markers: true,
            start: "top 70%",
            end: "top 90%",
            pin: true
        }
    });
    gsap.from("#p3-head h1",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page3",
            // markers: true,
            start: "top 70%",
            end: "top 90%",
            pin: true
        }
    });
    gsap.from("#p4-head h1",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
            trigger: "#page4",
            // markers: true,
            start: "top 70%",
            end: "top 90%",
            pin: true
        }
    });
    gsap.from(".upper-para",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
            trigger: ".upper-para",
            // markers: true,
            start: "top 70%",
            end: "top 90%",
            pin: true
        }
    });
    gsap.from(".third-upper-para",{
        y: 100,
        opacity: 0,
        scrollTrigger:{
            trigger: ".third",
            // markers: true,
            start: "top 70%",
            end: "top 90%",
            pin: true
        }
    });
}

function horizontal(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".all-first .first-page", {
        transform: "translateX(-300%)",
        // duration: 4,
        // delay: 5,
        scrollTrigger: {
            trigger: ".all-first",
            scroller: "body",
            // markers: true,
            scrub: 2,
            start: "top 0",
            end: "top -300%",
            pin: true,
     }
})

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
  document.addEventListener('DOMContentLoaded', function(){
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 25 },
        { id: "#card-4", endTranslateX: -1500, rotate: -10 }
    ];

    ScrollTrigger.create({
        trigger: "#wrapper",
        start: "top 20%",
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
            trigger: card.id,
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

olaAnimate()
nav()
stats()
headings()
horizontal()
hero()

