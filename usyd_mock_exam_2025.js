function q1() {
  const a = 5
  const b = 10
  console.log(`The sum of ${a} and ${b} is ${a + b}.`)
}

function q2() {
  // a = not (False or False) and (True or False)
  const a = !(false || false) && (true || false)

  // b = True and (not False and (True or False))
  const b = true && (!false && (true || false))

  // c = (True or (False and True)) and (not False or True)
  const c = (true || (false && true)) && (!false || true)

  console.log(a, b, c)
}

function q4() {
  const number = 14

  // Check if the remainder when number is divided by 2 is 0
  const is_even = number % 2 === 0

  console.log(is_even)
  console.log(`The number is even: ${is_even}`)
}

function q5() {
  const score = 10
  const total = 20
  // console.log(`The score is ${score} out of ${total}`)
  console.log('The score is', score, 'out of', total)
}

function q6() {
  const numbers = [3, 1, 2]
  let sum = 0

  for (let i = 0; i < 3; i++) {
    sum = sum + numbers[i]
    numbers[i] = sum
  }

  console.log(numbers)
}

function q7() {
  const cities = ['Sydney', 'Melbourne', 'Perth']
  const indices = [1, 2, 0]

  // for i in indices:
  //   console.log(cities[i])

  // for (let j = 0; j < indices.length; j++) {
  //   const i = indices[j]
  //   console.log(cities[i])
  // }

  for (const i of indices) {
    console.log(cities[i])
  }
}

function count_letter_a(word) {
  let counter = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      counter++
    }
  }

  return counter
}

function q8() {
  all_words = ['apple', 'attack', 'aaaah']
  frequencies = [0, 0, 0]

  for (let i = 0; i < all_words.length; i++) {
    const word = all_words[i]
    frequencies[i] = count_letter_a(word)
  }

  console.log(frequencies)
}

function q9() {
  let i = 10
  while (i > 0) {
    i = Math.floor(i / 2)
    if (i === 5) {
      continue
    }
    console.log(i)
  }
}

q9()
