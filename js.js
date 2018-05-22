// I really appreciate you looking at this source code to find the answer.
// The Correct Answer is "Sea"

let CorrectAnswer = "Sea";
let session = {}
let key;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDVtQZDxCN2h19POptmaRVPA0NAr4869XU",
    authDomain: "c-19-5-1.firebaseapp.com",
    databaseURL: "https://c-19-5-1.firebaseio.com",
    projectId: "c-19-5-1",
    storageBucket: "c-19-5-1.appspot.com",
    messagingSenderId: "671289254200"
};

function drawSymbol() {
    let canvas = document.getElementById("symbol");
    let ctx = canvas.getContext("2d");

    let w = canvas.width;
    let h = canvas.height;

    ctx.fillStyle = "rgb(100, 100, 100)";
    ctx.strokeStyle = "rgb(100, 100, 100)";

    ctx.beginPath();

    ctx.moveTo(w/2, 0);
    ctx.lineTo(4*w/5, h);
    ctx.lineTo(w/5, h);

    ctx.closePath();

    ctx.stroke();
}

function logVisit() {
    let d = new Date();

    session.date = d.getDate() + "-" + (parseInt(d.getMonth()) + 1) + "-" + d.getFullYear();
    session.time = d.getHours() + ":" + d.getMinutes();
    session.answers = [];

    fire.child("Day 4").push(session).then((snap) => { key = snap.key});
}

function logSuccess() {
    session.id = key;
    session.name = prompt("You have been Authorised. What is your name ?");
    fire.child("Correct Answers").push(session);
}

function submit() {
    let tb = document.getElementById("textbox");
    let input = tb.value;
    let formattedInput = tb.value.toLowerCase();

    // Push the input to the DB
    fire.child("Day 4").child(key).child("answers").push(input);

    // Checking the Correct Answer
    if (formattedInput == "c") {
        document.getElementsByClassName("title")[0].innerHTML = "Authorisation Granted";
        document.getElementsByClassName("subtitle")[0].innerHTML = "Delta Shadow will be Notified";
        logSuccess(); // If it's correct then place a copy of this session in another field "Correct Answers"
    } else {
        alert("Wrong Answer. Authorisation Declined.");
    }

}

firebase.initializeApp(config);
let fire = firebase.database().ref();

drawSymbol();
logVisit();
