/*
@title: Borderinator
@author: Devnol
@snapshot: border_sample1.png
*/

const width = 75;
const height = 75;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

//border padding from paper edge
const padding = 2;

// generate border
const border = [
    [0+padding, 0+padding],
    [0+padding, height-padding],
    [width-padding, height-padding],
    [width-padding, 0+padding],
    [0+padding, 0+padding]
]

// store all border polylines
let B = [border]
// let B = []
bt.resample([border], 0.1) //make border HD

// bt.rotate([border], 10)
// for (let i = 1; i<8; i+=2) {
  // B.push(bt.trim([border], i/10, (i+1)/10));
// }
drawLines(
    [bt.trim(bt.copy([border]), 0.1, 0.5),
    bt.trim(bt.copy([border]), 0.6, 0.9)]
     
)
B.push(border)
// draw it
drawLines(B);