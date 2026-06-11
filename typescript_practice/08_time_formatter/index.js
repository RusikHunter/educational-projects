"use strict";
const SECONDS_OF_DAY = 86400;
const SECONDS_OF_HOUR = 3600;
const SECONDS_OF_MINUTE = 60;
const formatTime = function (secondsValue) {
    let countOfSeconds = secondsValue;
    const days = Math.floor(countOfSeconds / SECONDS_OF_DAY); // 2
    countOfSeconds -= SECONDS_OF_DAY * days; // 27 200
    const hours = Math.floor(countOfSeconds / SECONDS_OF_HOUR); // 7
    countOfSeconds -= SECONDS_OF_HOUR * hours; // 2000
    const minutes = Math.floor(countOfSeconds / SECONDS_OF_MINUTE); // 33
    countOfSeconds -= SECONDS_OF_MINUTE * minutes; // 1980
    const seconds = countOfSeconds; // 20
    return {
        days,
        hours,
        minutes,
        seconds
    };
};
console.log(formatTime(912384));
