'use strict'

class Year {
  constructor (key) {
    this.key = key || this.generateKey()
    this.baselineCode = 'a'.charCodeAt(0)
  }

  generateKey () {
    return new Array(100).fill('a').map(min => {
      let offset = Math.floor(Math.random() * 26)
      let mappedAscii = min.charCodeAt(0) + offset
      return String.fromCharCode(mappedAscii)
    }).join('')
  }

  keyOffset (index) {
    let adjustedIndex = index % this.key.length
    return this.key.charCodeAt(adjustedIndex) - this.baselineCode
  }

  encodeLetter (letter, index) {
    let rawEncoded = letter.charCodeAt(0) + this.keyOffset(index)
    while (rawEncoded - this.baselineCode > 25) { rawEncoded -= 26 }
    return String.fromCharCode(rawEncoded)
  }

  decodeLetter (letter, index) {
    let rawDecoded = letter.charCodeAt(0) - this.keyOffset(index)
    while (rawDecoded < this.baselineCode) { rawDecoded += 26 }
    return String.fromCharCode(rawDecoded)
  }

  encode (plain) {
    return plain.split('').map((char, i) => this.encodeLetter(char, i))
      .join('')
  }

  decode (encoded) {
    return encoded.split('').map((char, i) => this.decodeLetter(char, i))
      .join('')
  }
}

module.exports = Year
