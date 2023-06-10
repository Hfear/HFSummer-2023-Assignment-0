class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
   
       
   // console.log(nums);

    //first or last two 
    if(nums.length == 2)
    {
        if((nums[0] == target) || (nums[1] == target))
        {
            //console.log("true");
            return true; 
        }
        console.log("false");
        return false;
    }
    

    let middle = nums[(nums.length-1)/2];

    if(middle == undefined)
    {
        //console.log("false, middle undefined");
        return false;
    }
    //console.log(middle);

    //if middle element of array == target
    if ( middle == target )
    {
        return true; 
    }
    

    //console.log("target = "+ target);

    //if target greater than the "middle"
    if(middle < target )
    {
        //console.log("greater");
        this.binarySearch((nums.splice( ((nums.length-1)/2) ,nums.length)), target);
    }
    //if target is less than middle element 
    else if(middle > target)
    {
        //console.log("less");
        this.binarySearch((nums.splice(0,((nums.length-1)/2) )), target);

    }
    
    console.log("missingcase");
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;