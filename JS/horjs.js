var countDownDate = new Date("Aug 23, 2019 10:30:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";
  document.getElementById("D").innerHTML = days;
  document.getElementById("H").innerHTML = hours;
  document.getElementById("M").innerHTML = minutes;
  document.getElementById("S").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "BEGAN";
  }
}, 1000);