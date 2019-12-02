let clock = new Clock();
clock.time = new Date();
console.log(clock)

console.log(clock.time); // return time now
clock.displayTime(); // выведет время на экран

let extendedClock = new ExtendedClock();
extendedClock.time = new Date();
let alarmTime = new Date();
alarmTime.setSeconds(alarmTime.getSeconds() + 5)
extendedClock.alarm = alarmTime;
extendedClock.clearAlarm();
