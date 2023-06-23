const outline = document.getElementById("p");
const para = document.getElementById("paragraph");
let open = true;


outline.addEventListener("click", () => {
  if (open){
    closebar();
  }
  else {
    navbar();
  }
});



function navbar() {
  para.style.opacity = 1;
  open = true;
  return;
};
function closebar(){
  para.style.opacity = 0
  open = false;
  return;
};

alert('hello');