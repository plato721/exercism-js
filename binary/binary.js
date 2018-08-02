'use strict'

class Binary {
  constructor (binNum) {
    this.binNum = binNum
  }

  isValid () {
    return this.binNum.match(/^[01]+$/)
  }

  toDecimal () {
    if (!this.isValid()) { return 0 }

    let maxPower = this.binNum.length - 1
    return this.binNum.split('').reduce((sum, digitChar, index) => {
      let power = maxPower - index
      let digit = Number.parseInt(digitChar)
      return sum += digit * Math.pow(2, power)
    }, 0)
  }
}

module.exports = Binary
