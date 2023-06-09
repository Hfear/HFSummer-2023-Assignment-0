function setUnionOfAnyAmountOfSets(...args) {

  let combined = new Set();

  for(let i = 0; i <args.length ; i++)
  {
//console.log(args[i]);
//combined.add(args[i]);

    for(let j of args[i])
    {
      combined.add(j);
    }

  }
   
  return (combined);
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;