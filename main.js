document.addEventListener("DOMContentLoaded", () => {

    /*Play audio on scroll */
    var audio = new Audio('./audio/Turtle-Sound-Effect-instrumentalfx.mp3');
    userHasScrolled = false;
    window.onscroll = function(e) {
        userHasScrolled = true;
        if (userHasScrolled) {
            audio.play();
            userHasScrolled = false;
        }
    }



    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop: true,

        /*bottom pagination */
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        /*breakpoints for responsive screen, reducing slides images for smaller screen*/
        breakpoints: {

            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });


    /*animation on send button - changes send to progressbar to success-check*/
    let tl = gsap.timeline()

    tl.to(".cta", { x: -50, duration: 2 });
    var basicTimeline = anime.timeline({
        autoplay: false
    });

    var pathEls = document.getElementsByClassName("check")
    for (var i = 0; i < pathEls.length; i++) {
        var pathEl = pathEls[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute("stroke-dashoffset", offset);
    }

    basicTimeline
        .add({
            targets: ".text",
            duration: 1,
            opacity: "0"
        })
        .add({
            targets: ".button",
            duration: 1300,
            height: 10,
            width: 300,
            backgroundColor: "#2B2D2F",
            border: "0",
            borderRadius: 100
        })
        .add({
            targets: ".progress-bar",
            duration: 2000,
            width: 300,
            easing: "linear"
        })
        .add({
            targets: ".button",
            width: 0,
            duration: 1
        })
        .add({
            targets: ".progress-bar",
            width: 40,
            height: 40,
            delay: 500,
            duration: 750,
            borderRadius: 80,
            backgroundColor: "#71DFBE"
        })
        .add({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: 200,
            easing: "easeInOutSine"
        });
    $(".button").click(function() {
        basicTimeline.play();
    });

    $(".text").click(function() {
        basicTimeline.play();
    });

    /*Background change on scroll to calltoaction section */
    gsap.to("#call-to-actionn", {
        scrollTrigger: {
            trigger: "#call-to-actionn",
            toggleActions: "restart pause reverse pause"
        },
        duration: 1,
        backgroundColor: "#ffb3007a",
        ease: "none"
    });
    gsap.to(".reef", {
        scrollTrigger: {
            trigger: ".reef",
            toggleActions: "restart pause reverse pause"
        },
        duration: 1,
        backgroundColor: "#ffb3007a",
        ease: "none"
    });



});

const closeModal = () => {
    let modal = document.getElementById('acknowledge')
    modal.style.display = "none"

}