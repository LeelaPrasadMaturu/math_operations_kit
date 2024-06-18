const gcd = require('./greatest_cd.js');

function least_common_multiple(a,b){
    const gcdValue = gcd(a, b); 
    return (a * b) / gcdValue; 
}

module.exports = least_common_multiple; 


//Mistake: Using incorrect paths in require statements (/module instead of ./module) can lead to MODULE_NOT_FOUND errors.
//Solution: Always use relative paths (./module) for modules within the same directory structure.