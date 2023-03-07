
function convertRomanToBaseTenVerOne(romanStr) {
    const romanDigits = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    if(romanStr.length <= 1) {
        return romanDigits[romanStr]
    }


    let first, second
    let total = 0
    for(let i = 0; i < romanStr.length; i++) {
        first = romanDigits[romanStr[i]]
        second = romanDigits[romanStr[i + 1]]

        if (second > first) {
            total += second - first
            i++
        } else {
            total += first
        }

    }
    return total
}
const num0 = convertRomanToBaseTenVerOne('X') //?
const num1 = convertRomanToBaseTenVerOne('MCMXCIX') //?.
const sillyRomanArr = []
for(let i = 0; i < 5e7; i++) {
    sillyRomanArr.push('I')
    sillyRomanArr.push('V')
}
const sillyRoman = sillyRomanArr.join('')
num2 = convertRomanToBaseTenVerOne(sillyRoman) //?.
console.log(num0)
console.log(num1)
console.log(num2)
