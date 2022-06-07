// Date and Time.
let date = false;
let now = moment().format("LLLL");
let _12pm = moment().format("A");
let _12am = moment().format("a");
if (date) { _12pm = 13; _12am = 1; }
let currentDay = $("#currentDay");
currentDay.text(now);

    // Stores the user input into local storage.
    $(".btn").click(function () {
        let _6am = document.getElementsById("6am").value;
        localStorage.setItem("in6am", _6am);
        let _7am = document.getElementsById("7am").value;
        localStorage.setItem("in7am", _7am);
        let _8am = document.getElementsById("8am").value;
        localStorage.setItem("in8am", _8am);
        let _9am = document.getElementById("9am").value;
        localStorage.setItem("in9am", _9am);
        let _10am = document.getElementById("10am").value;
        localStorage.setItem("in10am", _10am);
        let _11am = document.getElementById("11am").value;
        localStorage.setItem("in11am", _11am);
        let _12pm = document.getElementById("12pm").value;
        localStorage.setItem("in12pm", _12pm);
        let _1pm = document.getElementById("1pm").value;
        localStorage.setItem("in1pm", _1pm);
        let _2pm = document.getElementById("2pm").value;
        localStorage.setItem("in2pm", _2pm);
        let _3pm = document.getElementById("3pm").value;
        localStorage.setItem("in3pm", _3pm);
        let _4pm = document.getElementById("4pm").value;
        localStorage.setItem("in4pm", _4pm);
        let _5pm = document.getElementById("5pm").value;
        localStorage.setItem("in5pm", _5pm);
        let _6pm = document.getElementById("6pm").value;
        localStorage.setItem("in6pm", _6pm);
    });