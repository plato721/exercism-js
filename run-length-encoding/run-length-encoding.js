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

function isInt(char){
  return !isNaN(parseInt(char))
}

function expandGroup(letter, count) {
  let expansion = ''
  for(let i=0; i<parseInt(count); i++){
    expansion += letter
  }
  return expansion
}

function _decode(inWord, outWord, currentCount=''){
  if(inWord.length < 1){ return outWord }

  let letterOrCount = inWord.shift()

  if( isInt(letterOrCount) ){
    return _decode(inWord, outWord, currentCount + letterOrCount)
  } else {
    if(currentCount.length < 1){ currentCount = '1' }
    return _decode(inWord, outWord + expandGroup(letterOrCount, currentCount))
  }
}

module.exports = {
  encode: (word)=>{ return _encode(word.split(''), '', '', 0) },
  decode: (word)=>{ return _decode(word.split(''), '') }
}
