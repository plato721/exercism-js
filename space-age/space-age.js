'use strict'

const earthYearLength = 31557600 // seconds

const planetsYearLength = {
  Mercury: 0.2408467 * earthYearLength,
  Venus: 0.6151972 * earthYearLength,
  Earth: 1 * earthYearLength,
  Mars: 1.8808158 * earthYearLength,
  Jupiter: 11.862615 * earthYearLength,
  Saturn: 29.447498 * earthYearLength,
  Uranus: 84.016846 * earthYearLength,
  Neptune: 164.79132 * earthYearLength
}

class SpaceAge {
  constructor (seconds) {
    this.seconds = seconds
  }

  ageInYears (planet) {
    return this.round2(this.seconds / planetsYearLength[planet])
  }

  round2 (num) {
    return Math.round((num * 100)) / 100
  }
}

Object.keys(planetsYearLength).forEach(planet => {
  SpaceAge.prototype['on' + planet] = function () {
    return this.ageInYears(planet)
  }
})

module.exports = SpaceAge
