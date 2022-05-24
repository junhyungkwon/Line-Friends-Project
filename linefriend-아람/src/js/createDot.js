function createDotBtn(contents, numOfContent) {
  const numOfDot = countDot(contents, numOfContent);

  const dot = contents.closest(".container").querySelector(".dot");
  if (dot === null) return;

  for (let i = 0; i < numOfDot; i++) {
    const dotLi = document.createElement("li");
    const dotBtn = document.createElement("button");
    dotBtn.setAttribute("type", "button");
    dotBtn.setAttribute("class", `dot${i+1}`);
    dotLi.appendChild(dotBtn);
    dot.appendChild(dotLi);
  }
}

mainContentGroup.forEach((contents) => {
  createDotBtn(contents, countContent(contents));
});





