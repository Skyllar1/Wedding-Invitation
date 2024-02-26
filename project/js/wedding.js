// --Countdown

var countDownDate = new Date("March 10, 2024 10:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);


// form

const submitBtn = document.getElementById('submitBtn');

const trueAnswers = ['A', 'A', 'C', 'A', 'B', 'A', 'A', 'B', 'C', 'A'];

submitBtn.addEventListener('click', () => {
    let answers = [];
    const classNames = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'];

    for (let i = 0; i < classNames.length; i++) {
        answers.push(getAnswers(classNames[i]));
    }

    let count = 0;
    for (let i = 0; i < trueAnswers.length; i++) {
        if (trueAnswers[i] === answers[i]) {
            count++;
        }
    }
    let result = `You are right ${count} questions`;
    let resultTag = document.getElementById('result');

    // resultTag.innerHTML = result;

    alert(result);
})

function getAnswers(className) {
    const radioTags = document.getElementsByClassName(className);

    for (let i = 0; i < radioTags.length; i++) {
        if (radioTags[i].checked === true) {
            return radioTags[i].value;
        }
    }
    return 'not found';
}