window.onload = function () {
  let heading = document.getElementById("heading");
  let arrow = document.getElementById("arrow");
  let content = document.getElementById("content");
  setTimeout(() => {
    heading.style.opacity = "1";
    setTimeout(() => {
      arrow.style.opacity = "1";
      heading.style.transform = "translateY(10%)";
      arrow.style.transform = "translateY(0%)";
    }, 1500);
  }, 750);

}

window.onscroll = function (e) {
  console.log(e);
}

function toContent() {
  document.querySelector("#landing").style.transform = `translateY(-100vh)`
  document.querySelector("#main-content").style.transform = `translateY(-100vh)`
  document.body.style.backgroundPosition = `0 100%`
}