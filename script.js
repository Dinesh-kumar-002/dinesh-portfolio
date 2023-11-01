var typed = new Typed('#element2', {
    strings: ['<span class="text-success">FRONT-END WEB DEVELOPER</span>','<span class="text-danger">WEB DEVELOPER</span>','<span></span>'],
    typeSpeed: 100,
    loop:true,
    backSpeed: 10,
    cursorChar: ' ✍️',
  });

var dark_background="rgb(0, 21, 27)";
var light_text="rgb(207, 248, 255)";
var light_background="rgb(217, 245, 255)";
var dark_text="rgb(0, 57, 74)";

  const body=document.querySelector('body');
  const bulb=document.querySelector('.bulb');
  bulb.addEventListener('click', function(){
     const i=bulb.querySelector('i');
     if(i.getAttribute("class").includes("fa-regular")){
      console.log(i.getAttribute("class"));
      i.setAttribute("class"," fa-lightbulb fa-solid");
      body.style.backgroundColor=light_background;
      body.style.color=dark_text;
    }
    else if(i.getAttribute("class").includes("fa-solid")){
      i.setAttribute("class"," fa-lightbulb fa-regular")     
      console.log(i.getAttribute("class"));
var dark_background="rgb(25, 25, 25)";
body.style.backgroundColor=dark_background;
      body.style.color=light_text;
    }
  })
  
  window.addEventListener('scroll',()=>{
    var dinesh_image=document.querySelector('.dinesh-img');
    var dinesh_glass=document.querySelector('.dinesh-glass');
    var scroll=window.scrollY
    if(scroll<=25){
      console.log(scroll);
      // dinesh_image.style.transform=`translateX(${scroll}%)`
    }
    dinesh_glass.style.transform=`translateX(-${scroll}%)`
  })