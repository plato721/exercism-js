'use strict'

module.exports = {
  encode: (word) => { return _encode(word.split('')) },
  decode: (word) => { return _decode(word.split('')) }
}

// inWord - an Array of characters to be encoding
// outWord - the encoded String to recursively assembled and eventually returned
// curLetter - a way to track the current letter from call to call - when the next letter
//    differs from this one, we flush it to the output String and set a new one on the next
//    call
// curCount - the count of the current letter
function _encode (inWord, outWord = '', curLetter = '', curCount = 0) {
  // base case - nothing left to encode, except possibly a current letter/count
  //   which will be flushed
  if (inWord.length < 1) {
    return outWord + flushCurrent(curLetter, curCount)
  }

  // next letter matches current - increment count and keep going
  if (inWord[0] === curLetter) {
    return _encode(inWord.slice(1), outWord, curLetter, curCount + 1)
  }

  // next letter differs from current - append flushing of current to output and keep going
  return _encode(inWord.slice(1),
    outWord + flushCurrent(curLetter, curCount),
    inWord.shift(),
    1)
}

// expands an encoded word to a decoded one
// inWord - the word to be decoded, like '3A4QP' => 'AAAQQQQP'
// outWord - used by recursive calls as the expanded word is assembled
// currentCount - the number-as-String, under assembly, current encoding modifier.
//    so when the function encounters '13P' as it is parsing, it will first make
//    currentCount '1', then '13'. Then when it sees the 'P', will pass the currentCount
//    of '13' along with the 'P' to be expanded to 'PPPP...P'.
function _decode (inWord, outWord = '', currentCount = '') {
  if (inWord.length < 1) { return outWord }

  let letterOrCount = inWord.shift()

  if (isInt(letterOrCount)) {
    return _decode(inWord, outWord, currentCount + letterOrCount)
  } else {
    if (currentCount.length < 1) { currentCount = '1' }
    return _decode(inWord, outWord + expandGroup(letterOrCount, currentCount))
  }
}

function flushCurrent (curLetter, curCount) {
  return curCount < 2 ? curLetter : curCount.toString() + curLetter
}

function isInt (char) {
  return !isNaN(parseInt(char))
}

// once it is known the letter to write and how many of them, we call this
// simple function to perform the expansion.
// e.g. expandGroup('W', 2) => 'WW'
function expandGroup (letter, count) {
  let expansion = ''
  for (let i = 0; i < parseInt(count); i++) {
    expansion += letter
  }

  return expansion
}
