const btnGroups = document.querySelectorAll(".btn-group");
const arrowGroups = document.querySelectorAll(".arrow");
console.log(btnGroups);
console.log(arrowGroups);

function btnEvent(e) {
  const btn = e.target;
  if(btn.classList.contains("prev"))
    prevBtnClick();
  else if(btn.classList.contains("next"))
    nextBtnClick();
}

arrowGroups[0].addEventListener("click", (e) => btnEvent(e));




// const $ = (top, selector) => top.querySelector(selector);

// const shoppingStory = $(document, "#shopping-story");
// const shoppingStoryContents = $(shoppingStory, ".contents");
// const shoppingStoryBtnGroup = $(shoppingStory, ".btn-group");
// const shoppingStoryArrowGroup = $(shoppingStoryBtnGroup, ".arrow");
// const shoppingStory_prev = $(shoppingStoryArrowGroup, ".prev");
// const shoppingStory_next = $(shoppingStoryArrowGroup, ".next");
// const shoppingStory_prev1 = $(shoppingStoryBtnGroup, ".dot .prev");
// const shoppingStory_next1 = $(shoppingStoryBtnGroup, ".dot .next");


// function mouseOverMainSection() {
//   shoppingStoryArrowGroup.classList.add("btn-block");
// }

// function mouseOutMainSection() {
//   shoppingStoryArrowGroup.classList.remove("btn-block");
// }

// function mouseOverArrowBtn(e) {
//   if (e.target.classList.contains("disabled"))
//     return;
//   e.target.classList.add("btn-hover");
// }

// function mouseOutArrowBtn(e) {
//   if (e.target.classList.contains("disabled"))
//     return;
//   e.target.classList.remove("btn-hover");
// }

// function transitionEvent(contents) {
//   const slideContent_count = contents.childElementCount % 3;
//   if (slideContent_count === 0) return;
//   if (contents.classList.contains("new-shift")) {
//     contents.style.right = 0;
//     return;
//   }
//   const content_width = contents.querySelector(".content").offsetWidth;
//   contents.style.right = `${slideContent_count * (30 + content_width)}px`;
// }

// function clickPrevBtn() {
//   if (shoppingStory_prev.classList.contains("disabled"))
//     return;
//   else {
//     shoppingStoryContents.classList.remove("old-shift");
//     shoppingStoryContents.classList.add("new-shift");
//     transitionEvent(shoppingStoryContents);
//     shoppingStory_prev.classList.add("disabled");
//     shoppingStory_prev1.classList.add("current");
//     shoppingStory_next.classList.remove("disabled");
//     shoppingStory_next1.classList.remove("current");
//   }
// }

// function clickNextBtn() {
//   if (shoppingStory_next.classList.contains("disabled"))
//     return;
//   else {
//     shoppingStoryContents.classList.remove("new-shift");
//     shoppingStoryContents.classList.add("old-shift");
//     transitionEvent(shoppingStoryContents);
//     shoppingStory_next.classList.add("disabled");
//     shoppingStory_next1.classList.add("current");
//     shoppingStory_prev.classList.remove("disabled");
//     shoppingStory_prev1.classList.remove("current");
//   }
// }


// function mouseEvent() {
//   shoppingStory.addEventListener("mouseover", mouseOverMainSection);
//   shoppingStory.addEventListener("mouseout", mouseOutMainSection);
//   shoppingStory_prev.addEventListener("mouseover", mouseOverArrowBtn);
//   shoppingStory_next.addEventListener("mouseover", mouseOverArrowBtn);
//   shoppingStory_prev.addEventListener("mouseout", mouseOutArrowBtn);
//   shoppingStory_next.addEventListener("mouseout", mouseOutArrowBtn);
// }

// function btnClickEvent() {
//   shoppingStory_prev.addEventListener("click", clickPrevBtn);
//   shoppingStory_next.addEventListener("click", clickNextBtn);
//   shoppingStory_prev1.addEventListener("click", clickPrevBtn);
//   shoppingStory_next1.addEventListener("click", clickNextBtn);
// }

// function init() {
//   shoppingStory_prev.classList.add("disabled");
//   shoppingStory_prev1.classList.add("current");
//   mouseEvent();
//   btnClickEvent();
// }

// init();