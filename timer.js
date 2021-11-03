import refs from "./ref.js"
const {daysC, hoursC, minsC, secsC} = refs

class CountdownTimer {
    constructor({ selector, targetDate }) {
    this.selector = selector
    this.targetDate = targetDate
    this.intervalID = null
    this.time = 0
   }
start(){
    this.intervalID = setInterval(() => {
        let currentTime = Date.now()
        this.time = this.targetDate - currentTime
        const days = this.pad(Math.floor(this.time / (1000 * 60 * 60 * 24)))
        const hours = this.pad(Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((this.time % (1000 * 60)) / 1000))
        this.insertValues(days, hours, mins, secs)
    }, 1000);
  }
  stop(){
      clearInterval(this.intervalID)
  }
pad(valeu) {
    return String(valeu).padStart(2, '0')
}
insertValues(d, h, m, s) {
    daysC.textContent = d
    hoursC.textContent = h
    minsC.textContent = m
    secsC.textContent = s
}

}

const myTimer = new CountdownTimer ({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021'),
  });
myTimer.start();




