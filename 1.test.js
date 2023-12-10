const { getNumberFromLine } = require("./1")

const data = require("./1-input.js")
const lines = data.split("\n")

test('Part 1: Find the first and last number in each string, concat them, then sum them.', async () => {
  let total = 0
  lines.forEach((line) => {
    let val = getNumberFromLine(line, false)
    total += val
    expect(val).toBeGreaterThan(9)
    expect(val).toBeLessThan(100)
  })
  console.log(`Day 1, Part 1 answer = ${total}`)
})

test('Part 2: Same as part one, but also include numbers as words.', async () => {
  let total = 0
  lines.forEach((line) => {
    let val = getNumberFromLine(line, true)
    total += val
    expect(val).toBeGreaterThan(9)
    expect(val).toBeLessThan(100)
  })
  console.log(`Day 1, Part 2 answer = ${total}`)
})

