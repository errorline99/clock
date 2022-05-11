setInterval(timer ,1000)

var secoundHand = document.getElementById('secound-hand')
var hourHand = document.getElementById('hour-hand')
var minuteHand = document.getElementById('minute-hand')
function timer(){
    var d = new Date();
    var secound = d.getSeconds() * 6
    var minute = d.getMinutes() * 6
    var hour = d.getHours() * 30
    secoundHand.style.transform = 'rotate(' + secound + 'deg)'
    hourHand.style.transform = 'rotate(' + hour + 'deg)'
    minuteHand.style.transform = 'rotate(' + minute + 'deg)'
    
}