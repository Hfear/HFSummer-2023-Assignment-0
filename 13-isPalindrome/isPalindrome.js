function isPalindrome(word) {
    
  for(let i = 0; i <= word.length; i++ )
  {
      //console.log((word[i])+(word[word.length - (i+1)]));
     // console.log(word[word.length - (i+1)])
     if((word[i])!=(word[word.length - (i+1)]))
     {
      return false; 
     }
  }
  return true; 

}

// Do not edit this line;
module.exports = isPalindrome;