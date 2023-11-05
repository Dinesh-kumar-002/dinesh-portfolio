// custom cursor

var cursor = document.querySelector(".cursor-image");
window.addEventListener("mousemove", (e) => {
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.top = `${y + 25}px`;
  cursor.style.left = `${x + 10}px`;
});

var typed = new Typed("#element2", {
  strings: [
    '<span class="text-warning">FRONT-END WEB DEVELOPER</span>',
    '<span class="text-info">RESPONSIVE WEB DESIGN</span>',
    '<span class="text-warning">PSD TO WEBSITE</span>',
    '<span class="text-text-light-50">REACT APPLICATION</span>',
  ],
  typeSpeed: 100,
  loop: true,
  backSpeed: 10,
  cursorChar: " ✍️",
});

var dark_background = "rgb(0, 21, 27)";
var light_text = "rgb(207, 248, 255)";
var light_background = "rgb(217, 245, 255)";
var dark_text = "rgb(0, 60, 78)";

const body = document.querySelector("body");
const whole_nav = document.querySelector(".whole-nav");
const a = document.querySelectorAll("a");
const border = document.querySelectorAll(".border");
const bulb = document.querySelector(".bulb");
bulb.addEventListener("click", function () {
  const i = bulb.querySelector("i");
  if (i.getAttribute("class").includes("fa-regular")) {
    console.log(i.getAttribute("class"));
    i.setAttribute("class", " fa-lightbulb fa-solid");
    body.style.backgroundColor = light_background;
    body.style.color = dark_text;
    a.forEach((value) => {
      value.style.color = dark_text;
    });
    border.forEach((value) => {
      value.style.borderColor = dark_text;
    });
  } else if (i.getAttribute("class").includes("fa-solid")) {
    i.setAttribute("class", " fa-lightbulb fa-regular");
    console.log(i.getAttribute("class"));
    body.style.backgroundColor = dark_background;
    body.style.color = light_text;
    a.forEach((value) => {
      value.style.color = light_text;
    });
    border.forEach((value) => {
      value.style.borderColor = light_text;
    });
  }
});

window.addEventListener("scroll", () => {
  var dinesh_glass = document.querySelector(".dinesh-glass");
  var scroll = window.scrollY;
  // console.log(scroll);
  if (scroll > 100) {
    whole_nav.style.display = "block";
  } else {
    whole_nav.style.display = "none";
  }
  dinesh_glass.style.transform = `translateX(-${scroll}%)`;
});

var projects = document.querySelector(".pro");

var file ="https://raw.githubusercontent.com/Dinesh-kumar-002/showcase/main/script.json";
fetch(file)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach(element => {
      display(element);
    });
  });
  function display(elem){
    projects.innerHTML+=
    `
    <div class="col-project col-6 col-sm-6 col-md-4 col-lg-3 p-0">
    <div class="project m-3">
    <div class="project_image">
    <a href="${elem.link}" class="text-decoration-none">
      <img src="assets/${elem.image}" alt="" class="w-100" h-100/>
      </a>
      </div>
      <div class="project_details ">
        <h3 class="text text-decoration-none my-2 name">${elem.name}</h3>
        <p class="text text-decoration-none desc">${elem.desc}</p>
      </div>
    </div>
  </div>
    `
  }
