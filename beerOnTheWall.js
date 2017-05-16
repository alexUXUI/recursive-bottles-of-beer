/**
 Big-O notation for this is o(n)
 becasue the time it takes to take all the beers down and pass all of them around
 is directly proportional to the number of beers.

 @param { Array } beer
 @return { Side effect } console log
*/

let beer = [...Array(100)].map((_, i) => i++).reverse();

function howManyBeersOnTheWall(beer) {

  console.log(`
    ${ beer.length } bottle of beer on the wall
    ${ beer.length } bottles of beer.
    Take one down, pass it around,
    ${ beer.length - 1 } bottles of beer on the wall.
  `); // sing the song

  if(beer.length <= 1) {
    return beer // no more beers left, return!
  } else {
    beer.shift(); // this gets us closer to the `base case` of beer.length <= 1
    howManyBeersOnTheWall(beer); // this recursively calls itself with one less beer
  }
  return
}

howManyBeersOnTheWall(beer); // call the recursive function
