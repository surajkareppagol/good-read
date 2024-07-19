/* Remove all visual blocks */

const article_bottom_text = document.querySelector(".article_bottom_text");
const article_meta = document.querySelector(".article-meta");
const article_author_details = document.querySelector(
  ".article-meta-author-details"
);
const bottom_recommendations = document.querySelector(".article--recommended");
const bottom_wrapper = document.querySelector(".bottom-wrap");
const main_navigation_bar = document.querySelector("nav");
const manual_left_panel = document.querySelector(".manual_leftbar");
const main_footer = document.querySelector("footer");
const right_block = document.querySelector(".rightBar");

/* Add styles to these visual blocks */

const article_container = document.querySelector(".article-page_flex");
const scroll_button = document.querySelector("#scrollTopBtn");

/* Click buttons */
const read_more_button = document.querySelector(".read-more-container");

/* Store these variables in array */

const remove_visual_panels = [
  article_bottom_text,
  article_meta,
  article_author_details,
  bottom_recommendations,
  bottom_wrapper,
  main_navigation_bar,
  manual_left_panel,
  main_footer,
  right_block,
];

/* Remove elements from DOM */

remove_visual_panels.forEach((element) => {
  if (element) {
    element.remove();
  }
});

/* Add styles to some elements */

if (article_container) {
  article_container.classList.add("center-container");
}

if (scroll_button) {
  scroll_button.classList.add("right-button");
  scroll_button.textContent = "🔼";
}

/* Click buttons */

if (read_more_button) {
  read_more_button.click();
}
