const reverseString = function(word) {

    if(word.length < 0) return 'ERROR';
    let string = '';
    for(i = word.length -1; i >= 0; i--){
        string += word[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
