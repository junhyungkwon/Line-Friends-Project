const viewWidth = 1280;
const THREE_WIDTH = 405.3;
const FOUR_WIDTH = 299;
const ONE_WIDTH = 1280;


btnsGroup.forEach((btn) => {
  function findContents(btn) {
    const contents = btn.closest(".container").querySelector(".contents");
    return contents;
  }

  btn.addEventListener("click", (e) => {
    const clickedBtn = e.target;
    if (clickedBtn.classList.contains("next") || clickedBtn.classList.contains("prev")) {
      const contents = findContents(clickedBtn);
      let contentWidth, numOfContent, numOfViewContent, numOfSlides, remain, shiftWidth, currentSlides;
      if (contents.classList.contains("three")) { contentWidth = THREE_WIDTH; numOfViewContent = 3; }
      else if (contents.classList.contains("four")) { contentWidth = FOUR_WIDTH; numOfViewContent = 4; }
      else { contentWidth = ONE_WIDTH; numOfViewContent = 1; }

      const contentsProperty = {
        contentsWidth: contentWidth,
        numOfContent: countContent(contents),
        numOfViewContent: countViewContent(contents),
        numOfSlides: 0,
        remain: 0,
        shiftWidth: viewWidth + 28,
        currentSlides: 0,
      }

      contentsProperty.shiftWidth = viewWidth + 14;
      console.log(viewWidth, numOfViewContent);
      contentsProperty.remain = contentsProperty.numOfContent % contentsProperty.numOfViewContent;
      contentsProperty.numOfSlides = Math.floor(contentsProperty.numOfContent / contentsProperty.numOfViewContent);
      if (contentsProperty.remain === 0) contentsProperty.numOfSlides -= 1;
      if (contentsProperty.remain !== 0) contentsProperty.shiftWidth += (contentsProperty.remain) * 28;
      console.log(contentsProperty.shiftWidth);
      function nextClick() {
        contentsProperty.currentSlides += 1;
        if (contentsProperty.currentSlides > numOfSlides) {
          contentsProperty.currentSlides -= 1;
          return;
        }
        contents.classList.add("next-shift");
        contents.style.right = `${contentsProperty.shiftWidth}px`;
        console.log(contents.style);
      }

      if (clickedBtn.classList.contains("next")) {
        nextClick();
        console.log(contentsProperty);
      }

    }
  });
});














// function handleNextBtnClick(e) {
//   if (e.target.classList.contains("next")) {
//     contents.classList.add("next-shift");
//     console.log(slideNext(contents));
//   }
// }

// function fn() {
//   console.log("fn()");
//   new Promise((resolve) => {
//     btnsGroup = contents.closest(".container").querySelector(".btn-group");
//     console.log(btnsGroup);
//     resolve();
//   })
//   .then(()=> {
//     console.log(btnsGroup);
//     btnsGroup.addEventListener("click", (e) => {
//       if (e.target.classList.contains("next")) {
//         contents.classList.add("next-shift");
//         console.log(slideNext(contents));
//       }
//     });
//   });
// }
//}