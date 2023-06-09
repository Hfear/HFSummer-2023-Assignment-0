function frequencyCounter(word) {
     
    //object of key pairs to return
    let letterfreqs = {};

    let lowerW = word.toLowerCase(); 

    for(let i = 0 ; i < word.length; i++)
    {
        
        if(letterfreqs[word(i)]) // if there has been this letter before add 1 to current val
        {
            letterfreqs[word[i]] = letterfreqs[word[i]]+1;
        }
        else // if you havent seen this letter before make the freq val 1
        {
            letterfreqs[word[i]] = 1;
        }

        //adding key val pair using brackets in one line
        //assign "this" letter/key 1 + its current frquency/val,, and if there is no val make it 1 ? 
        //letterfreqs[word[i]] = letterfreqs[word[i]]+1 || 1;
    }

    return (letterfreqs);
}

// Do not edit this line;
module.exports = frequencyCounter;