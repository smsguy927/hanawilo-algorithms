function convertRomanToBaseTenVerZero (roman) {
    const ROMAN_NUMS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const ARABIC_NUMS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let total = 0;
    let romanIndex = 0;
    for(let i = 0; i < roman.length; i++) {
        if(i < (roman.length - 1)){
            romanIndex = ROMAN_NUMS.indexOf(roman[i] + roman[i+1]);
            if(romanIndex >= 0) {
                total += ARABIC_NUMS [romanIndex];
                i++;
            } else {
                romanIndex = ROMAN_NUMS.indexOf(roman[i])
                total += ARABIC_NUMS [romanIndex];
            }
        } else {
            romanIndex = ROMAN_NUMS.indexOf(roman[i])
            total += ARABIC_NUMS [romanIndex];
        }
    }
    return total
}

const num0 = convertRomanToBaseTenVerZero('MCMXCIX') //?.

console.log(num0)

const sillyRomanArr = []
for(let i = 0; i < 5e7; i++) {
    sillyRomanArr.push('I')
    sillyRomanArr.push('V')
}
const sillyRoman = sillyRomanArr.join('')
let num2 = convertRomanToBaseTenVerZero(sillyRoman) //?.