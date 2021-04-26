const palindrome = {
     
    verifyPalindrome: function (message) {

        if(typeof message !== "string" || !message) {
        
            return "This is not a string!";

        }

        let newWord= "";

        for (let i=(message.length-1); i>=0; i--) {
            
            newWord=newWord+message[i];
        }

        if (newWord === message) {

            return true;

        } else {

            return false;
        }
    }

}


module.exports = palindrome;
