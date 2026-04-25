let x = "You're a wonderful person and whatever you're going through is really tough but I think you'll get thorugh it";
let y = "Remember, You're a strong person and never give up"
document.getElementById("btn").onclick = function() {
  document.getElementById("myh1").textContent = x;
  document.getElementById("myh2").textContent = y;
  const gif = document.getElementById("gif");
  gif.style.display = "block";
    
}