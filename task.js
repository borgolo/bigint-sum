let bigintSum = (a, b) => {
  if (Number(a) < Number(b)) { let interim = a; a = b; b = interim }

  let zeroes = ''
  let lengthDiff = a.length - b.length
  for (let i = 0; i < lengthDiff; i++) {
    zeroes += '0'
  }
  b = zeroes + b

  let c = ''
  needPlus1 = false

  for (let k = a.length - 1; k > 0; k--) { 
    let sum = 0;
    if (needPlus1) sum = Number(a[k]) + Number(b[k]) + 1
    else sum = Number(a[k]) + Number(b[k])

    if (sum > 9) {
      c += sum % 10
      needPlus1 = true
    } else {
      c += sum % 10
      needPlus1 = false
    }
  }

  let lastSum = 0
  if (needPlus1) lastSum = Number(a[0]) + Number(b[0]) + 1
  else lastSum = Number(a[0]) + Number(b[0])

  c = lastSum + c.split('').reverse().join('')
  return c
}
