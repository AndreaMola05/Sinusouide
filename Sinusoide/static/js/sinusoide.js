let w = 400;
let h = 400;
let amp = 50;
let freq = 0.5;
let fase = 0;
let angolo = 0;
let incremento = 0.005;

function reset() {
    angolo = 0;
    background(220);
    stroke(0, 0, 0);
    line(0, 200, 400, 200);
}


function setup() {
    createCanvas(400, 400);
    background(220);
    line(0, 200, 400, 200);
}

function draw() {
    let x = map(angolo, 0, 2 * PI, 0, 400);
    let y = amp * sin(2 * PI * freq * angolo + fase);
    stroke(0, 0, 255);
    strokeWeight(3);
    point(x, y + h / 2);
    let y2 = amp * cos(2 * PI * freq * angolo + fase);
    stroke(255, 0, 0);
    strokeWeight(3);
    point(x, y2 + h / 2);
    angolo += incremento;

    if (x >= 400) {
        reset();
    }
}