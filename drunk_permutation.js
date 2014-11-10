permutateNodeTuples = function(numberOfNodes) {

  nodeTuples = [[]];
  if (numberOfNodes == 0)
    return nodeTuples;

  for(i = numberOfNodes; i>0; i--) {
    nodeTuples[0].push(i);
  }

  console.log("fac: " + fac(numberOfNodes));

  // drunk permutation!
  while(nodeTuples.length < fac(numberOfNodes)) {
    // randomize array
    // if not yet in nodeTuples, add it!

    setTimeout(function() {
      nodeTuples.push(randomizeArray(nodeTuples[nodeTuples.length-1]));
    }, 1);
  }

  return nodeTuples;

  //return [[[1], [2], [3]]];
}

fac = function(n) {
  if(n <= 1)
    return n;
  return n * fac(n-1);
}

ensureUniqueness = function(array) {
  uniqueArray = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
  })
  return uniqueArray;
}

// random() : between 0..1
// * 10     : get an integer plus decimal value
// %2       : get 0 v 1
randomSort = function(a, b) {
  miliseconds = Date.now();
  return miliseconds % 2;
  //return (parseInt( Math.random() * 10) %2);
}

randomizeArray = function(arr) {
  return arr.sort(randomSort);
}

module.exports = {
  permutateNodeTuples: permutateNodeTuples,
  ensureUniqueness: ensureUniqueness,
  randomizeArray: randomizeArray,
}


