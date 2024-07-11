/*
@title: Borderinator
@author: Devnol
@snapshot: border_sample1.png
*/

const width = 75; //size of a post-it note because blot can't fit a real piece of paper :(
const height = 75;

setDocDimensions(width, height);

//border padding from paper edge
const padding = 2;

// generate basic border
const border = [
  [0, 0],
  [0, height],
  [width, height],
  [width, 0],
  [0, 0]
]

bt.resample([border], 0.1); //make border HD

//function to add padding to a border, pad is distance in units from the edge of the doc
function padBorder(border, pad) {
  bt.scale(border, [(width - 2 * pad) / width, (height - 2 * pad) / height], [height / 2, width / 2]);
}

function frameMod(thickness, color) {
  return 
}

/*
generate border of n unit segments, 
of which the line segments are of dashLen and 
the gaps between them of gapLen relative length
*/
function dashedFrame(n, dashLen, gapLen) {
  let frame = [];
  for (let i = 0; i < n; i += (gapLen + dashLen)) {
    bt.join(frame, bt.trim(bt.copy([border]), i / n, (i + dashLen) / n));
  }
  return frame;
}
/*
function zigzagFrame(n, angle) {
  let frame = [];
  for (let i = 0; i < n; i++) {
    let segment = bt.trim(bt.copy([border], i/n, (i+2)/n));
    if (n%2) {
      bt.rotate(segment, angle);
    }
    else {
      bt.rotate(segment, -angle);
    }
  }
}
*/
const frame1 = dashedFrame(100,1,1);
padBorder(frame1, 2);
drawLines(frame1);

const frame2 = zigzagFrame(100,30);
padBorder(frame2, 4);
drawLines(frame2, {width:4, stroke:"#7289da"});
