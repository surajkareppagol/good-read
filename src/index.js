console.log("Good Read - Distraction free reading");

/* Select visual blocks */
const main_navigation_bar = document.querySelector("nav");
const right_block = document.querySelector(".rightBar");
const main_footer = document.querySelector("footer");

const read_more_button = document.querySelector(".read-more-container");

/* Set display to none */
if (main_navigation_bar) {
  main_navigation_bar.style.display = "none";
}

if (right_block) {
  right_block.style.display = "none";
}

if (main_footer) {
  main_footer.style.display = "none";
}

if (read_more_button) {
  read_more_button.click();
}

console.log("Read without any distractions 😄");
