'use strict'

class Year {
  constructor (year) {
    this.year = year
  }

  isLeap () {
    return (this.standardLeap() && !this.century()) ||
            this.quadCentury()
  }

  century () {
    return this.year % 100 === 0
  }

  quadCentury () {
    return this.year % 400 === 0
  }

  standardLeap () {
    return this.year % 4 === 0
  }
}

module.exports = Year
