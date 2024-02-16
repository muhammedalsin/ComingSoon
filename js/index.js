// var countDownDate = new Date();
// countDownDate = new Date(
//   countDownDate.getFullYear() + 1,
//   countDownDate.getMonth() - 9,
//   countDownDate.getSeconds()
// );
// var x = setInterval(function () {
//   var now = new Date();
//   var diff = countDownDate - now;

//   var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
//   var days = Math.floor(
//     (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
//   );
//   var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((diff % (1000 * 60)) / 1000);

//   document.getElementById("months").innerHTML = months;
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;
// }, 1000);


/////////////////////////////////////////////////////////////////////////


var countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 11,
  countDownDate.getSeconds()
);

function updateCountdown() {
  var now = new Date();
  var diff = countDownDate - now;

  var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  var days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // إعادة تحديث العد التنازلي بعد انتهاء الفترة المحددة
  if (diff <= 0) {
    clearInterval(x); // توقف عن تحديث العد التنازلي
    // إعادة ضبط العد التنازلي للفترة التالية
    countDownDate = new Date(
      countDownDate.getFullYear() + 1,
      countDownDate.getMonth() - 9,
      countDownDate.getSeconds()
    );
    // إعادة تحديث العد التنازلي مرة أخرى
    x = setInterval(updateCountdown, 1000);
  }
}

var x = setInterval(updateCountdown, 1000);


/////////////////////////////////////////////////////////////////////////


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()