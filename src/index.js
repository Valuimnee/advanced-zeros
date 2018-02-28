module.exports = function getZerosCount(number, base) {
  // your implementation
  var primes=[];
  var degrees=[];
  var numberDegrees=[];
  var i=2;
  while(base>1){
      if(base%i==0){
        primes.push(i);
        var degree=1;
        base=base/i | 0;
        while(base%i==0){
          base=base/i | 0;
          degree++;
        }
        degrees.push(degree);
      }
      i++;
  }
  console.log(primes);
  console.log(degrees);
  var currNumber;
  var degree;
  for(var j=0; j<primes.length; j++){
    currNumber=number;
    degree=0;
    while(currNumber/primes[j] | 0 >0){
      currNumber= currNumber/primes[j] | 0;
      degree+=currNumber;
    }
    numberDegrees.push(degree/degrees[j] | 0);
  }
  console.log(numberDegrees);
  return Math.min(...numberDegrees);
}