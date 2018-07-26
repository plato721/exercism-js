'use strict'

class Year {
  constructor () {
    this.key = this.generateKey()
  }

  generateKey () {
    return new Array(100).fill('a').map(min => {
      let offset = Math.floor(Math.random() * 26)
      let mappedAscii = min.charCodeAt(0) + offset
      return String.fromCharCode(mappedAscii)
    }).join('')
  }
}

module.exports = Year
