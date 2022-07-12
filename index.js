let button = document.querySelector(".btn");
let color = document.querySelectorAll(".color");


function colorGenerator(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}


button.addEventListener("click",()=>{
    for(let x of color){
        let randomColor = colorGenerator();
        x.style.backgroundColor = randomColor;
        x.textContent = randomColor;
    }
})