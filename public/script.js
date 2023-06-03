// Menu icon
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});
// End of menu icon

// Scroll effect and progress bar
let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");

const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;
  circles.forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
  bool = true;

  if (counter1 === sections.length) {
    sections.forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    sections.forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();
    bool = false;
  }

  progressCounter();
  return bool;
};

window.addEventListener("wheel", (event) => {
  const deltaY = event.deltaY > 0;

  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  pageController();

  if (bool) {
    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}`
    ).style.left = `${deltaY ? "-100vw" : "0"}`;

    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}-wrapper`
    ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;

    document.querySelector(
      `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
    ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
  }
});
// End of scroll effect and progress bar

// Page buttons
document.querySelector(".left-btn").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".grapes-img").addEventListener("mouseover", () => {
  document.querySelector(".section-3-wrapper").style.opacity = "0.5";
});

document.querySelector(".grapes-img").addEventListener("mouseout", () => {
  document.querySelector(".section-3-wrapper").style.opacity = "1";
});
// End of page buttons
