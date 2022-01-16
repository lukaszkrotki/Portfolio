const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 10,
    y: e.pageY - 10
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}


// const btn = document.getElementById("menu-toggle");
// const lines = btn.querySelectorAll(".line");
// const cls = { open: "open", close: "close" };
// let btnClass = cls.open;

// btn.addEventListener("click", () => {
//   if (btn.classList.contains(cls.open)) {
//     btn.classList.remove(btnClass);
//     btnClass = cls.close;
//   } else if (btn.classList.contains(cls.close)) {
//     btn.classList.remove(btnClass);
//     btnClass = cls.open;
//   }

//   void btn.offsetWidth;
//   btn.classList.add(btnClass);
// });
