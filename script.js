$(document).ready(function () {
 
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
 
    // Retrieves the user input from local storage.
    // You can refresh and the information is still in the textbox.
    let out6am = localStorage.getItem("in6am");
    document.getElementById("6am").value = out6am;
    let out7am = localStorage.getItem("in7am");
    document.getElementById("7am").value = out7am;
    let out8am = localStorage.getItem("in8am");
    document.getElementById("8am").value = out8am;
    let out9am = localStorage.getItem("in9am");
    document.getElementById("9am").value = out9am;
    let out10am = localStorage.getItem("in10am");
    document.getElementById("10am").value = out10am;
    let out11am = localStorage.getItem("in11am");
    document.getElementById("11am").value = out11am;
    let out12pm = localStorage.getItem("in12pm");
    document.getElementById("12pm").value = out12pm;
    let out1pm = localStorage.getItem("in1pm");
    document.getElementById("1pm").value = out1pm;
    let out2pm = localStorage.getItem("in2pm");
    document.getElementById("2pm").value = out2pm;
    let out3pm = localStorage.getItem("in3pm");
    document.getElementById("3pm").value = out3pm;
    let out4pm = localStorage.getItem("in4pm");
    document.getElementById("4pm").value = out4pm;
    let out5pm = localStorage.getItem("in5pm");
    document.getElementById("5pm").value = out5pm;
    let out6pm = localStorage.getItem("in6pm");
    document.getElementById("6pm").value = out6pm;
});
