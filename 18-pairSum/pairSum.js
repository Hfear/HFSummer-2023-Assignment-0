function pairSum(nums, target) {
    
  let compliment; 

  if(nums.length <= 1)
{
  throw new Error('array length too small');
}
  for (let i of nums)
  {

      compliment = target - i; 
      //let sum = parseInt(i) + parseInt(compliment);

      //console.log(i + " + " + compliment + " = " +  sum);

      if(nums.includes(compliment))
      {
           return (true);
           
      }

  }

  return (false);
}

// Do not edit this line;
module.exports = pairSum;