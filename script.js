/* function to animate cursor, it shows a cursor along with mouse pointer 
and a blur oversized cursor along with it */

var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(details){
    cursor.style.left = details.x-12.5+"px"
    cursor.style.top = details.y-12.5+"px" 
    cursorBlur.style.left = details.x-150+"px"
    cursorBlur.style.top = details.y-150+"px"
});


/* function to animate navabar, basically on scrolling body,
the navbar sizes shrink and color change to black */

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "80px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
    //   markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

/* function to animate main component, on scrolling form page1 to page2,
the color of main changes from transparent to black */  
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -100%",
        scrub: 2
    }
});