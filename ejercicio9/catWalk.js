const cat = document.getElementById("myCat");

cat.style.left = "0px"; 
let moveRight = true;

function catWalk() {
  let currentLeft = parseInt(cat.style.left);

  if (moveRight) {
    
    cat.style.left = currentLeft + 10 + "px";

    if (currentLeft + cat.width >= window.innerWidth) {
      moveRight = false;
    }
  } else {
    cat.style.left = currentLeft - 10 + "px";

    if (currentLeft <= 0) {
      moveRight = true; 
    }
  }
}

setInterval(catWalk, 50);