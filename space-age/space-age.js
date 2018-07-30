'use strict'

const earthSecondsYear = 31557600

const secondsYear = {
  Mercury: 0.2408467 * earthSecondsYear,
  Venus: 0.6151972 * earthSecondsYear,
  Earth: 1 * earthSecondsYear,
  Mars: 1.8808158 * earthSecondsYear,
  Jupiter: 11.862615 * earthSecondsYear,
  Saturn: 29.447498 * earthSecondsYear,
  Uranus: 84.016846 * earthSecondsYear,
  Neptune: 164.79132 * earthSecondsYear
}

class SpaceAge {
  constructor (seconds) {
    this.seconds = seconds
  }

  ageInYears (planet) {
    return this.round2(this.seconds / secondsYear[planet])
  }

  round2 (num) {
    return Math.round((num * 100)) / 100
  }
}

Object.keys(secondsYear).forEach(planet => {
  SpaceAge.prototype['on' + planet] = function () {
    return this.ageInYears(planet)
  }
})

module.exports = SpaceAge
