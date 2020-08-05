var tl = gsap.timeline();
const tabs = document.querySelector(".tabs");
const wrapperContent = document.querySelector(".wrapper-content");
const buttons = tabs.children;

tl.from(tabs, { height: -2, opacity: 0, duration: 1, ease: "power1.out" })
  .from(buttons, {
    opacity: 0,
    duration: 0.3,
  })
  .from(wrapperContent, {
    y: "10px",
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
