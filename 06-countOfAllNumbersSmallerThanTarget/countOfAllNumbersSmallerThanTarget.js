function countOfAllNumbersSmallerThanTarget(nums, target) {
 
  let count = 0; 

    /**
     * for of , cant go thru objects properties, iterates thru arrays and strings
     * for in works with objects w properties
     */

    //item is "current index"
    for(item of nums)
    {
        if(item < target)
        {
            count++
        }
    }

    return (count);
    
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;