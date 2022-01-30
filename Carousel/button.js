const container = document.querySelector(".container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const containerList = Array.from(container.children);
const carouselLength = container.children.length;
let centerCell =
  carouselLength % 2 !== 0 ? container.children[parseInt(carouselLength / 2)] : container.children[carouselLength / 2];

(function addEvent() {
  prevBtn.addEventListener("click", translateContainer.bind(this, 1));
  nextBtn.addEventListener("click", translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  const selectedBtn = direction === 1 ? "prev" : "next";
  container.style.transitionDuration = "500ms";
  container.style.transform = `translateX(${direction * (100 / 5)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
  centerCell = getCenterCell(selectedBtn);
  console.log(centerCell);
  centerCell.style.background = "skyblue";

  containerList.forEach((el) => {
    if (el.textContent !== centerCell.textContent) {
      el.style.background = "pink";
    }
  });
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute("style");
  selectedBtn === "prev"
    ? //parentNode.insertBefore(newNode, referenceNode);
      //referenceNode앞에 newNode를 삽입한다.
      //만약 이미 존재하는 노드를 참조하면 이동시킨다.(추가하기 전에 삭제할 필요가 없다.)
      container.insertBefore(container.lastElementChild, container.firstElementChild)
    : //appendChild : 파라미터(노드)를 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
      //이미 문서에 존재한다면, 새로운 위치로 이동시킨다.(노드를 다른 곳으로 붙이기 전에 삭제할 필요가 없다.->한 노드가 두 지점에 동시에 존재할 수 없다.)
      //첫번째 노드를 마지막으로 옮긴다.
      container.appendChild(container.firstElementChild);
}

function getCenterCell(selectedBtn) {
  if (selectedBtn === "next") {
    //next버튼
    console.log(selectedBtn);
    centerCell = container.children[parseInt(carouselLength / 2) + 1];
  } else {
    //prev버튼
    console.log(container.children[0]);
    centerCell = carouselLength % 2 !== 0 ? container.children[1] : container.children[carouselLength / 2 - 1];
  }
  return centerCell;
}
