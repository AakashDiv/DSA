// given n  print if n is between a -z print lower , A - Z print uppercase , 0 - 9 print number

// sum two number even 

// prime number find 

const input = "c"

function whichCh(n){
      
     if(n.toLowerCase() == n){
         console.log("charcter is lowercase")
     }else if(n.toUpperCase() == n){
        console.log("Charcter is upper case")
     }else{
         console.log("character is number")
     }

}

// whichCh(input);

const n = 5;

function sumTwo(n){
       let sum = 0;
       
       for(let i=0; i<= n; i++){
           if(i%2 == 0){
               sum = sum + i
           }
       }
       console.log(sum);
       
       return sum
}

// sumTwo(n)

const primeN = 7;
function findPrimeNumbers(n){

     let arr = [];

     for(let i=0; i <= n; i++){
          if(i%2 == 0){
              arr.push(i)
          }
     }


    console.log(arr)
}

// findPrimeNumbers(primeN)

// 05-Sep-2026
//sum of all elements in an array