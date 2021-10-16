import refs from "./ref.js"
const {daysC, hoursC, minsC, secsC} = refs
// const curDate = document.getElementById('currentDate')
// let d = new Date()

// const localeD = d.toLocaleString('Uk-uk', options)
// console.log(localeD)
// curDate.textContent = localeD

class CountdownTimer {
constructor(targetDate, markup) {
    this.markup = markup
    this.targetDate = targetDate
    this.intervalID = null
    this.time = 0
   }
start(){
    console.log(`timer started`)
    this.intervalID = setInterval(() => {
        let currentTime = Date.now()
        // console.log('currentTime', currentTime)
        this.time = this.targetDate - currentTime
        // console.log('time', this.time )
        const days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)))
        const hours = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000))
        // console.log('days', days)
        // console.log('hours',hours)
        // console.log('mins', mins)
        // console.log('secs', secs)
        this.insertValues(days, hours, mins, secs)
    }, 1000);
  }
  stop(){
      console.log(this.intervalID)
      clearInterval(this.intervalID)
  }
pad(valeu) {
    return String(valeu).padStart(2, '0')
}
insertValues(d, h, m, s) {
    const {daysC, hoursC, minsC, secsC} = this.markup
    daysC.textContent = d
    hoursC.textContent = h
    minsC.textContent = m
    secsC.textContent = s
}

}

const myTimer = new CountdownTimer (
        new Date('Jul 17, 2022'), {
        daysC,
        hoursC,
        minsC,
        secsC,
        })
console.log(myTimer)
myTimer.start()
// myTimer.stop()



