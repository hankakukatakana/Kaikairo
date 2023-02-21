const pics_src = ["image/works/work (1).png","image/works/work (2).png","image/works/work (3).png"];
let num = -1;

function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}

setInterval(slideshow_timer, 1000);