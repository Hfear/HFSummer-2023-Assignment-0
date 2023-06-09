class MySolution {
  countDownSum(num) {
       
    console.log(num);

    if(num == 1)
    {
        return num; 
    }
   
    if(num > 0) 
    {
      return num + this.countDownSum(num -1);  
    }
   

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;