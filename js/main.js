const numberOfColumn = 16;
const numberOfRow = 16;

var yellow = "#FEFF92";
var color = yellow;
var textStatingColor = document.querySelector('#color_output').innerText
var listPixels = document.getElementsByClassName('pixel')

document.querySelector('#button_white').addEventListener("click", makeColorWhite);
document.querySelector('#button_purple').addEventListener("click", makeColorPurple);
document.querySelector('#button_blue').addEventListener("click", makeColorBlue);
document.querySelector('#button_orange').addEventListener("click", makeColorOrange);
document.querySelector('#button_pink').addEventListener("click", makeColorPink);
document.querySelector('#button_green').addEventListener("click", makeColorGreen);

generateColumn(numberOfColumn);
generateScreen(numberOfColumn,numberOfRow);


//  *CHANGE COLOUR OF PIXEL* //


for (i = 0; i < listPixels.length; i++) {
  listPixels[i].addEventListener('click', changePixelColor);
};

function changePixelColor() {
  let textStatingColor = document.querySelector('#color_output').innerText
  color = textStatingColor.substr(textStatingColor.length - 7);
  console.log(color);
  this.style.backgroundColor = `${color}`;
};


//  *CHANGE SELECTED COLOUR* //


function makeColorWhite(color) {
  let white = "#FFFFFF"
  color = white
  document.getElementById('color_output').innerText = `Colour is: ${color}`
}

function makeColorPurple(color) {
  let purple = "#c8a2e8";
  color = purple;
  document.getElementById('color_output').innerText = `Colour is: ${color}`;
}

function makeColorBlue(color) {
  let blue = "#96b1fa";
  color = blue;
  document.getElementById('color_output').innerText = `Colour is: ${color}`;
}

function makeColorOrange(color) {
  let orange = "#FFA500";
  color = orange;
  document.getElementById('color_output').innerText = `Colour is: ${color}`;
}

function makeColorPink(color) {
  let pink = "#ffc0cb";
  color = pink;
  document.getElementById('color_output').innerText = `Colour is: ${color}`;
}

function makeColorGreen(color) {
  let green = "#b0e866";
  color = green;
  document.getElementById('color_output').innerText = `Colour is: ${color}`;
}


//  *GENERATE LED SCREEN* //


function generateColumn(x) {
  for (let num = 1; num <= x; num++) {
    //console.log(`Generating column ${num}`);
    let column = document.createElement('ul');
    let newId = "column" + num;
    document.getElementById('screen').appendChild(column);
    column.setAttribute('id', newId);
  };
}

function generateScreen(x,y) {
  for (let r = 1; r <= y; r++) {
    for (let c = 1; c <= x; c++) {
      //console.log(`Generating row ${r}.`);
      generateRow(x,c);
    };

    function generateRow(x,c) {
      //console.log(`Generating column ${c}.`);
      let pixel = document.createElement('li');
      let newId = r + "_" + c;
      let newClass = 'row' + r;
      document.getElementById('column' + c).appendChild(pixel);
      pixel.setAttribute('id', newId);
      pixel.setAttribute('class', newClass);
      pixel.setAttribute('class', 'pixel');
    };
   };
  //console.log(`All done.`);
}







