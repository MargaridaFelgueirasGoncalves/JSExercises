const functions = {

permuteChars: function (message) {

    if(typeof message !== "string" || !message) {
        
        return "This is not a string!";

    } else if (message.length < 2) {

        return message;
    }

    let permutations = [];

    for (let i=0; i<message.length; i++) {

        let actualChar = message[i];
        let remainingWord = functions.replace(i, message);
     
        for (let result of functions.permuteChars(remainingWord)) {

            permutations.push(actualChar + result);
        }

    }

    return functions.removeDuplicates(permutations);

},



replace: function (index, string) {

    return string.substring(0, index) + string.substring(index+1, string.length);
},


removeDuplicates: function (array) {

    return array.filter((position, duplicate) => array.indexOf(position) === duplicate);

}


};


module.exports=functions;




