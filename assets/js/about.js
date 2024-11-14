console.log("connected!!!");

// register scrollToPlugin
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
// create match media (for different animations on different screensizes)
let mm = gsap.matchMedia();

// ---------- Table of contents and scrollTo animation ----------
// get all of the table of contents link
const tocLinkArr = document.querySelectorAll(".table-of-contents-link");

// loop through the table of contents links and add an eventlistener
for(let i = 0; i < tocLinkArr.length; i++) {
  // get the section id to scroll to and define the scrollTrigger target
  let sectionId = tocLinkArr[i].dataset.section;
  let scrollTriggerTarget = `.table-of-contents-link[data-section='${sectionId}']`;

  // add event listener
  tocLinkArr[i].addEventListener("click", () => {
    // when user clicks on the link, scroll to that section
    gsap.to(window, { duration: 1, scrollTo: `#${sectionId}` });
  });

  // add the scrollTrigger "active" link animation
  gsap.to(scrollTriggerTarget, {
    scrollTrigger: {
      trigger: `#${sectionId}`,
      start: "top 35%",
      end: "bottom 50%",
      toggleClass: {targets: scrollTriggerTarget, className: "active"}
    }
  });
};


// ----- scrollTo animation:  992px and below -----
mm.add("(max-width: 992px", () => {
  // get all of the table of contents link
  const tocLinkArr = document.querySelectorAll(".table-of-contents-link");

  // loop through the table of contents links and add an eventlistener
  for(let i = 0; i < tocLinkArr.length; i++) {
    // get the section id to scroll to and define the scrollTrigger target
    let sectionId = tocLinkArr[i].dataset.section;
    let scrollTriggerTarget = `.table-of-contents-link[data-section='${sectionId}']`;

    // add event listener
    tocLinkArr[i].addEventListener("click", () => {
      // when user clicks on the link, scroll to that section
      gsap.to(window, { duration: 1, scrollTo: {y: `#${sectionId}`, offsetY: 240} });
    });

    // add the scrollTrigger "active" link animation
    gsap.to(scrollTriggerTarget, {
      scrollTrigger: {
        trigger: `#${sectionId}`,
        start: "top 35%",
        end: "bottom 50%",
        toggleClass: {targets: scrollTriggerTarget, className: "active"}
      }
    });
  };
});






// ---------- Hamburger menu functionality ----------
let body = document.querySelector("body");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let closeIcon = document.querySelector(".close-icon");
let mobileNavMenu = document.getElementById("mobile-nav-menu");

// hamburger icon
hamburgerIcon.addEventListener("click", function() {
  console.log("you clicked me!");

  // hide hamburger icon, show close icon
  hamburgerIcon.classList.add("hide");
  closeIcon.classList.remove("hide");

  // show mobile nav
  mobileNavMenu.classList.remove("hide");

  // prevent user from scrolling when the menu is up
  body.style.overflow = "hidden";
});

// close icon
closeIcon.addEventListener("click", function() {
  // alert("you clicked close!");

  // show hamburger icon, hide close icon
  closeIcon.classList.add("hide");
  hamburgerIcon.classList.remove("hide");

  // hide mobile nav
  mobileNavMenu.classList.add("hide");

  // resume scrolling when menu is hidden
  body.style.overflow = "scroll";
});