function sumOfNumsWithinARange(nums, start, end) {
  
  let count = 0; 

  for(item of nums)
  {
      if((item >= start)&&(item <= end))
      {
          count++;
      }
  }

  return(count);

}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;