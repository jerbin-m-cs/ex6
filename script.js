
/* Question 1: Display Digital Clock */
function displayClock() {
    let d = new Date();

    document.getElementById("clock").innerHTML =
        d.getHours() + ":" +
        String(d.getMinutes()).padStart(2, "0") + ":" +
        String(d.getSeconds()).padStart(2, "0");
}

displayClock();
setInterval(displayClock, 1000);


/* Question 2: Change Background Colour */
function changeBackground() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = "rgb(" + red + "," + green + "," + blue + ")";

    document.body.style.backgroundColor = color;
}

document.getElementById("backgroundBtn").onclick = changeBackground;

// Automatically change background every 30 seconds
setInterval(changeBackground, 30000);


/* Question 3: Increase and Decrease Font Size */
let message = document.getElementById("movieMessage");

message.onmouseover = function() {
    message.style.fontSize = "28px";
};

message.onmouseout = function() {
    message.style.fontSize = "16px";
};


/* Question 4: Move and Stop Car Animation */
let car = document.getElementById("car");
let position = 0;
let animation;

function moveCar() {
    let road = document.getElementById("road");
    let maxPosition = road.clientWidth - car.offsetWidth;

    if (position >= maxPosition) {
        position = 0;
    }

    position += 2;
    car.style.left = position + "px";
}

document.getElementById("moveBtn").onclick = function() {
    if (!animation) {
        animation = setInterval(moveCar, 20);
    }
};

document.getElementById("stopBtn").onclick = function() {
    clearInterval(animation);
    animation = null;
};


/* Question 5: Array of Reviewer Objects */
let reviewers = [
    { name: "Arun", regno: "UR24CS101", year: 2001 },
    { name: "Priya", regno: "UR24CS102", year: 1999 },
    { name: "Kumar", regno: "UR24CS103", year: 2003 }
];

let output = "";

for (let i = 0; i < reviewers.length; i++) {
    output += "<p><b>Name:</b> " + reviewers[i].name +
              "<br><b>Register Number:</b> " + reviewers[i].regno +
              "<br><b>Birth Year:</b> " + reviewers[i].year;

    if (reviewers[i].year < 2000) {
        output += "<br>Category: Born before 2000";
    } else {
        output += "<br>Category: Born in or after 2000";
    }

    output += "</p><hr>";
}

document.getElementById("reviewerDetails").innerHTML = output;
