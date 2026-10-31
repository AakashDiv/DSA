const valn = 12;
function exdigi(n) {
  const collect = [];
  while (n > 0) {
    let res = n % 10;
    res = Math.floor(res);
    collect.push(res);
    n = Math.floor(n / 10);
  }
  const v = collect.join('');
  console.log(v);
}

//print all divisions
function division(n) {
  const sqr = Math.sqrt(n);
  const iteration = Math.floor(sqr);
  const collect = [];

  for (let i = 1; i <= iteration; i++) {
    if (n % i == 0) {
      collect.push(i);
      if (i !== n / i) {
        collect.push(n / i);
      }
    }
  }
  const sortedArr = bubbleSort(collect);
  console.log(sortedArr);
}

//sorting elemetns
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function main() {
  division(valn);
}

main();







const digit = 36;

function countDigit(N){
         let count = 0;
         let lastDigit= 0;
         let arr = []

         while(N > 0){
               lastDigit = N % 10;
               arr.push(lastDigit)
               N = Math.floor(N / 10);
               count++
         }
         console.log(count)
         console.log(arr)
}

function reverseDigit(digit){
       let lastDigit = 0;
       let reverse = 0;
       while(digit > 0){
               lastDigit = digit % 10;
               reverse = (reverse * 10) + lastDigit;
               digit = Math.floor(digit / 10) 
       }
       console.log(reverse)
}



function isPalindromeNumber(N){
        let lastDigit = 0;
        let reverNum = 0;
        let dupNumber = N;
        let isPalindrome = false

        while(N > 0){
            lastDigit = N % 10;
            reverNum = (reverNum * 10) + lastDigit;
            N = Math.floor(N / 10)
        }
       if(reverNum == dupNumber){
          isPalindrome = true
       }

       console.log(isPalindrome)
}

//print number that division of givin N
function division(digit){
    let diviN = []
        for(let i =1; i*i <= digit ; i++){
                if(digit % i == 0){
                   diviN.push(i)
                }

                if(digit / i !== i){
                     let upperval = Math.floor(digit / i)
                     diviN.push(upperval)
                }
        }

        console.log(diviN)

}

function main(digit){
      division(digit)
}

main(digit)