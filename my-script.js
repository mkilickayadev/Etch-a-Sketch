let necessaryTools = [];

let numberLabel = document.createElement("label");
numberLabel.textContent = "Enter number of squares per side";
necessaryTools.push(numberLabel);

let inputBox = document.createElement("input");
inputBox.type = "number";
necessaryTools.push(inputBox);

let numberButton = document.createElement("button");
numberButton.textContent = "Enter";
necessaryTools.push(numberButton);

let outputPara = document.createElement("p");
necessaryTools.push(outputPara);

let container = document.createElement("div");
container.classList.add("container");
necessaryTools.push(container);

necessaryTools.forEach((item)=>document.body.appendChild(item));

let number;
//-------------------------------MOUSE CLICKING------------------------------------------
numberButton.addEventListener("click", callback1);
function callback1(){
    if(number)  //if a grid has already been created, reset it
        container.innerHTML = "";
                //dimensions of a square
    let width = calculateLength();
    let height = width;
                //number should be in [0, 100)
        
    if( checkRange() )
        { }
    else{
        outputPara.textContent = "Input should be in [0, 100)";
        return;
    }
                //create squares one-by-one
    createSquares(width);
}
/***************************************************************************************/
function calculateLength(){
    number = inputBox.value;
    let length = 800 / number;
    return length;
}
/***************************************************************************************/
function checkRange(){
    let is_bw;
    if( 0<=number && number<100 )
        is_bw = true;
    else
        is_bw = false;
    return is_bw;
}
/***************************************************************************************/
function createSquares(length){
    for(let i=0; i<number*number; i++){
        let square = document.createElement("div");
        square.style.height = `${length}px`
        square.style.width = `${length}px`;
        square.style.border = "1px solid black";
        square.classList.add("square");
        square.dataset.index = 0;
        container.appendChild(square);
    }
}
//-------------------------------MOUSE CLICKING------------------------------------------
//-------------------------------MOUSE OVER----------------------------------------------
container.addEventListener("mouseover", callback2);
function callback2(event){
    let targetSquare = event.target;
            //adjust opacity
    updateOpacity(targetSquare);
            //adjust randomized color
    let rgb1 = updateColor();
    let rgb2 = updateColor();
    let rgb3 = updateColor();
            //if the element firing event is a square, carry out the processes
    if(targetSquare.classList.contains("square")){
        adjustOpacity(targetSquare);
        adjustColor(targetSquare, rgb1, rgb2, rgb3);
    }
    else
        return;
}
/***************************************************************************************/
function updateOpacity(target){
                //first clear the current opacity
    let opacitySelector = `opacity${target.dataset.index}`;
    target.classList.remove(opacitySelector);
                //then update it
    target.dataset.index++;
    if(target.dataset.index >= 10)
        target.dataset.index = 10;

}
/***************************************************************************************/
function updateColor(){
    return Math.floor((Math.random() * 255));
}
/***************************************************************************************/
function adjustOpacity(target){
    let opacitySelector = `opacity${target.dataset.index}`;
    target.classList.add(opacitySelector);
}
/***************************************************************************************/
function adjustColor(target, r1, r2, r3){
    target.style.background = `rgb(${r1}, ${r2}, ${r3})`;
}
//-------------------------------MOUSE OVER----------------------------------------------