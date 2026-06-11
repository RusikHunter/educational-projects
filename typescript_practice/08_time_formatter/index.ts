type FormattedTimeObjectType = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

const SECONDS_OF_DAY: number = 86400
const SECONDS_OF_HOUR: number = 3600
const SECONDS_OF_MINUTE: number = 60

const formatTime = function (secondsValue: number): FormattedTimeObjectType {
    let countOfSeconds: number = secondsValue

    const days: number = Math.floor(countOfSeconds / SECONDS_OF_DAY)
    countOfSeconds -= SECONDS_OF_DAY * days

    const hours: number = Math.floor(countOfSeconds / SECONDS_OF_HOUR)
    countOfSeconds -= SECONDS_OF_HOUR * hours

    const minutes: number = Math.floor(countOfSeconds / SECONDS_OF_MINUTE)
    countOfSeconds -= SECONDS_OF_MINUTE * minutes

    const seconds: number = countOfSeconds

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

console.log(formatTime(912384))