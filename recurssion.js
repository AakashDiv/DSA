//first basic how work
let count = 0;
function first() {
  if (count == 2) {
    return;
  } else {
    count++;
    first();
  }
}

//print name 5 times
function two(count, n) {
  if (count > n) {
    return;
  }
  console.log('Aakash');
  two(count + 1, n);
}

//print linear from 1 to N
function three(count, n) {
  if (count > n) {
    return;
  }
  console.log(count);
  three(count + 1, n);
}

//print from N to 1
function four(count) {
  if (count == 0) {
    return;
  }
  console.log(count);
  four(count - 1);
}

//reverse array
function reverseArray (i, arr){
     const last = arr.length;

   if(i >= last / 2  ){
    return;
   }

//swap
      const temp = arr[i]
      arr[i] = arr[last - i - 1];
      arr[last - i - 1] = temp
     reverseArray(i + 1, arr )

}

//check pallidrome
function pallidrome (i, n){
 const dup = n;

 if( i >= n / 2){
     return
 }


 pallidrome(i+1, arr);


}

function main() {
  const n = 6;
  // two(1,n)
  // three(1,n)
  // four(n)
  // const list1 = [2, 4, 3];
  // const list2 = [5, 6, 4];
  // const result = mergeTwoLists(list1, list2);
  // console.log(result);

  // const arr = [2, 4, 3,9,10];
  // const start = 0;
  // reverseArray( start, arr);
  // console.log(arr)

  // const digit = 121
  // pallidrome(0,digit)

}

main();



//shallow copy ====
const person = {
    name: "aakash",
    address : {
      city: "london"
    }
}

const copy = {...person}

copy.name = "ali";
copy.address.city = "up";


console.log(copy.name);
console.log(person.name);
console.log(person.address.city, "shallow");
console.log(copy.address.city, "shallow");




//deep copy===

const person2 = {
    name: "aakash",
    address : {
      city: "london"
    }
}

const copy2 = structuredClone(person)

copy2.name = "ali";
copy2.address.city = "Delhi";


console.log(person2.address.city, "deep copy");
console.log(copy2.address.city, "deep copy");



