const checkForSpam = function(message) {
    const messageLowerCase = message.toLowerCase();
    if (messageLowerCase.includes('spam') || messageLowerCase.includes('sale')) {
        return true;
    }
    return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
