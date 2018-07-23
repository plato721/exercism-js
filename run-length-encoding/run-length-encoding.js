'use strict'

function flushCurrent(curLetter, curCount) {
  if(curCount < 2){
    return curLetter
  } else {
    return curCount.toString() + curLetter
  }
}

function _encode(inWord, outWord, curLetter, curCount){
  if(inWord.length < 1){
    return (outWord + flushCurrent(curLetter, curCount))
  }

  if(inWord[0] === curLetter){
    return _encode(inWord.slice(1), outWord, curLetter, curCount + 1)
  }

  return _encode(inWord.slice(1),
                 outWord + flushCurrent(curLetter, curCount),
                 inWord.shift(),
                 1)

}

module.exports = {
  encode: (word)=>{ return _encode(word.split(''), '', '', 0) },
  decode: (word)=>{ return word }
}
