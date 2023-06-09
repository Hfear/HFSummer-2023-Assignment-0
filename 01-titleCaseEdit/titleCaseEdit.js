function titleCaseEdit(title) {

    // breaking up the title into an array of strings, between every space
  let titleparts = title.split(" ")

  /** going through the new string array and editing so the first letter of 
   * every word is capitalized
   *  */ 

  for(let i =0 ; i< titleparts.length; i++)
  {
      // titleparts[i][0] means the first character of this index element of my array
      // ie first letter of the word
      
  titleparts[i] = (titleparts[i][0].toUpperCase() + titleparts[i].substring(1))
  // this combines th new first letter with the rest of the string 
  }

  //now all the words are correct but in an array,, gotta make it a string again
  //join combines an array into a string and the argument tells you what to put inbetween 
  // join returns a string but doesnt modify the original***
  title = titleparts.join(" ");

  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;