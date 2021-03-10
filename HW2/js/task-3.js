const findLongestWord = function(string) {
    const words = string.split(' ');
    let theLongestWord = words[0];
    for (let i = 1; i < words.length; i += 1) {

        if (words[i].length > theLongestWord.length) {
            theLongestWord = words[i];
        }
    }

    return theLongestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));  // 'jumped'

console.log(findLongestWord('Google do a roll'));  // 'jumped'

console.log(findLongestWord('May the force be with you')); // 'force'
