
// Function to generate a random color
function getRoundomColor(){

  const letter = '0123456789ABCDEF';
  let color = "#";

  for(let i = 0 ; i <6 ; i++){

    color += letter[Math.floor(Math.random ()* 16)];
  }

   return color;
}

const color = document.getElementById("colorButton");

color.addEventListener("click" , function(){

document.body.style.backgroundColor = getRoundomColor();
});