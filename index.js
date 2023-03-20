// Write your solution here!

const cats =["Milo", "Otis", "Garfield"]//assign values  "Milo", "Otis", "Garfield"  to array cats

//adding an  element at the end of the array
function destructivelyAppendCat(name){
    cats.push(name)
}
//adding an element at the beginning of the array
function destructivelyPrependCat(name){
    cats.unshift(name)
}
//removing last cat(element) from the array
function destructivelyRemoveLastCat(){
    cats.pop()
}
//removes first cat(element) from the cats array
function destructivelyRemoveFirstCat(){
    cats.shift()
}
// append cats array to new array leaving cats array unchanged
function appendCat(name){
    const newcats = [...cats];
    newcats.push(name);
    return newcats
}
// Inserts new elements at the start of an array, and returns the new length of the array.
function prependCat(name){
    const newcats = [...cats];
    newcats.unshift(name)
    return newcats;
}
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
function removeLastCat(){
     const newcats= [...cats]
     newcats.pop()
     return newcats;
 }
 //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat(){
    const firstCat=[...cats]
    firstCat.shift()
    return firstCat;
}
