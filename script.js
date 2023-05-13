// Scroll effect
let counter1 = 0;
let counter2 = 1;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;
  circles.forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
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

  if (counter1 === sections.length) {
    sections.forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    progressCounter();
    return;
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
    progressCounter();
  }

  progressCounter();

  document.querySelector(`.section-${deltaY ? counter1 : counter2}`).style.left = `${deltaY ? "-100vw" : "0"}`;
});
// End of scroll effect