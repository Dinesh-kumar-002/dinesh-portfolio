// custom cursor 


var cursor=document.querySelector(".cursor-image");
window.addEventListener('mousemove', (e)=>{
  var x=e.pageX;
  var y=e.pageY;
  cursor.style.top=`${y+25}px`;
  cursor.style.left=`${x+10}px`;
})

var typed = new Typed('#element2', {
    strings: ['<span class="text-warning">FRONT-END WEB DEVELOPER</span>','<span class="text-warning">WEB DEVELOPER</span>','<span></span>'],
    typeSpeed: 100,
    loop:true,
    backSpeed: 10,
    cursorChar: ' ✍️',
  });

var dark_background="rgb(0, 21, 27)";
var light_text="rgb(207, 248, 255)";
var light_background="rgb(217, 245, 255)";
var dark_text="rgb(0, 67, 88)";

  const body=document.querySelector('body');
  const whole_nav=document.querySelector('.whole-nav');
  const a=document.querySelectorAll('a');
  const border=document.querySelectorAll('.border');
  const bulb=document.querySelector('.bulb');
  bulb.addEventListener('click', function(){
    const i=bulb.querySelector('i');
    if(i.getAttribute("class").includes("fa-regular")){
      console.log(i.getAttribute("class"));
      i.setAttribute("class"," fa-lightbulb fa-solid");
      body.style.backgroundColor=light_background;
      body.style.color=dark_text;
       a.forEach((value) => {
         value.style.color=dark_text;
       })
       border.forEach((value) => {
         value.style.borderColor=dark_text;
       })
    }
    else if(i.getAttribute("class").includes("fa-solid")){
      i.setAttribute("class"," fa-lightbulb fa-regular")     
      console.log(i.getAttribute("class"));
      body.style.backgroundColor=dark_background;
      body.style.color=light_text;
      a.forEach((value) => {
        value.style.color=light_text;
      })
      border.forEach((value) => {
        value.style.borderColor=light_text;
      })
      
    }
  })
  
  window.addEventListener('scroll',()=>{

    var dinesh_glass=document.querySelector('.dinesh-glass');
    var scroll=window.scrollY;
    console.log(scroll);
    if(scroll>100){
      whole_nav.style.display='block';
    }
    else{
      whole_nav.style.display='none';
    }
    dinesh_glass.style.transform=`translateX(-${scroll}%)`;
  })