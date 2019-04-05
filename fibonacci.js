function getSequence(n) {
  // TODO: Implement your code to replace the line below
	var first = 0;
	var second = 1;
	var result = second;
	var numbers =[];
  for(i=0;i<20;i++)
  {
	  
	  numbers.push(result);
	 result = first+second;
	 first = second;
	 second = result;
	  
  }
  return numbers.slice(0,n); 
  //return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55].slice(0, n);
}

module.exports = {
  getSequence
};
