function sumOfAllEvenNumbers(nums) {
  let count = 0;
  for(item of nums)
  {
      if(item % 2 == 0 )
      {
      count++; 
      }
  }
  return (count);
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;