function sumOfMinimumAndMaximum(nums) {

  //setting both min and max to the first element
let min = max = nums[0];

for(item of nums)
{
    if(item < min)
    {
        min = item; 
    }
    else if(item >max)
    {
        max = item; 
    }
}

return (min+max);

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;