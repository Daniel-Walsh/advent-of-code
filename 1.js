const wordNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

/**
  * @param line {string}
  * @return {number}
  */
function getNumberFromLine(line, includeWords) {
  const foundNumbers = []

  if (includeWords) {
    Object.keys(wordNumbers).forEach((key) => {
      let currentPos = line.indexOf(key)
      do {
        if (currentPos > -1) {
          foundNumbers.push(
            {
              indexOf: currentPos,
              word: key,
              value: wordNumbers[key]
            }
          )
          currentPos = line.indexOf(key, currentPos + 1)
        }
      } while (currentPos > -1);
    })
  }

  for (let j = 0; j < line.length; ++j) {
    if (!isNaN(parseInt(line[j]))) {
      foundNumbers.push(
        {
          indexOf: j,
          word: null,
          value: parseInt(line[j])
        }
      )
    }
  }

  foundNumbers.sort((a, b) => a.indexOf - b.indexOf)

  if (foundNumbers.length === 1) {
    foundNumbers[1] = foundNumbers[0]
  }

  const firstNumber = foundNumbers.shift().value.toString()
  const lastNumber = foundNumbers.pop().value.toString()
  const subtotal = parseInt(firstNumber.toString() + lastNumber.toString())

  return subtotal
}

module.exports = {
  getNumberFromLine
}
