console.log("connected to kumiko music redesign!");

// ---------- Fade in section animation (767px and below) ----------
mm.add("(max-width: 767px", () => {
  // scrollTrigger fadeIn animation (for mobile)
  const allSections = document.querySelectorAll(".main-content-section");

  allSections.forEach(section => {
    // get the section's h2 and section id
    const sectionHeader = document.querySelector(`#${section.id} h2`).textContent;
    const sectionId = section.id;

    // fade in animation function
    const fadeInLeft = () => {
      console.log(sectionHeader, "line 17")
      // get current section
      const currentSectionTitle = document.querySelector(".current-section");

      // change it's textcontent
      currentSectionTitle.textContent = sectionHeader;

      // fade in animation
      gsap.timeline()
        .set(".current-section", {opacity: 0, x: -10})
        .to(".current-section", {opacity: 1, x: 0, duration: 0.8})
    };

    // create a scrollTrigger for each of the sections
    ScrollTrigger.create({
      trigger: `#${sectionId}`,
      markers: true,
      start: "top 26.4%",
      end: "bottom 75%",
      onEnter: fadeInLeft,
      onEnterBack: fadeInLeft
    });
  });
}); 


// for(let i = 0; i < allSections.lengt)

// ScrollTrigger.create({
//   trigger: ".main-content-section",
//   markers: true,
//   start: "top 26.4%"
// })

// scrollTrigger function
// const changeSectionTitle = () => {
//   // get the current section title
//   // const currentSection = document.querySelector(".current-section");


//   // console.log(currentSection);
// }

// gsap.to(".current-section", {
//   scrollTrigger: {
//     trigger: ".main-content-section",
//     markers: true,
//     start: "top 16.4%",
//     onEnter: () => console.log(section)
//   },
//   color: "red",
//   duration: 1
// })