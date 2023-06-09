function productOfAnyAmountOfNumbers(...args) {
  
  let product;

  for(let i=0; i< arguments.length; i++)
  {
      if(i == 0)
      {
          product = arguments[i];
      }
      else
      {
      product  *= arguments[i]; 
      }
      
  }

return (product);

}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;