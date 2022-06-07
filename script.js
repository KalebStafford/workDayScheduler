// Date and Time.
let date = false;
let now = moment().format("LLLL");
let _12pm = moment().format("A");
let _12am = moment().format("a");
if (date) { _12pm = 13; _12am = 1; }
let currentDay = $("#currentDay");
currentDay.text(now);