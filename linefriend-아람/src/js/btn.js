const mainContentGroup = document.querySelectorAll(".main-section .contents");
const btnsGroup = document.querySelectorAll(".btn-group");
function countContent(contents) {
  return contents.childElementCount;
}

function getContentWidth(contents) {
  return childWidth = contents.childNodes[1].offsetWidth;
}

function countViewContent(contents) {
  if(contents.classList.contains("three"))
    return 3;
  else if(contents.classList.contains("four"))
    return 4;
  else
    return 1;
}

function countDot(contents, numOfContent) {
  const numOfViewContent = countViewContent(contents);
  return numOfContent / numOfViewContent;
}

