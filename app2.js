var countdown = () => {
    var countDate = new Date("Jan 1, 2024 00:00:00").getTime();
    var now = new Date().getTime();
    var remainingTime = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day  = hour * 24;

    var textDay = Math.floor(remainingTime / day);
    var textHour = Math.floor((remainingTime % day) / hour);
    var textMinute = Math.floor((remainingTime % hour) / minute);
    var textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector(".day").innerText = textDay > 0 ? textDay: 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour: 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute: 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond: 0;
};

setInterval(countdown,500);



// const countdown = () => {
//     // Specify the date and time we are counting down to.
//     const countDate = new Date("Jan 1, 2035 00:00:00").getTime();
//     const now = new Date().getTime();
//     const remainingTime = countDate - now;
  
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const textDay = Math.floor(remainingTime / day);
//     const textHour = Math.floor((remainingTime % day) / hour);
//     const textMinute = Math.floor((remainingTime % hour) / minute);
//     const textSecond = Math.floor((remainingTime % minute) / second);
  
//     document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
//     document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
//     document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
//     document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
//   };
  
//   // should use 500 as setInterval won't always run on time.
//   setInterval(countdown, 500);

// // var targetTime;
// // var interval;

// // function startCountdown() {
// //     clearInterval(interval);
// //     var seconds = parseInt(document.getElementById("text").value);
// //     targetTime = new Date(new Date().getTime() + (seconds * 1000))
// //     interval = setInterval(countdown, 1000);
// //     countdown();
// // }

// // function countdown() {
// //     var msLeft = targetTime - new Date();
// //     var secondsLeft = Math.floor(msLeft / 1000);
// //     displayTime.innerHTML = secondsLeft;
// // }  