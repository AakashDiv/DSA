
//3 2 1
//3 2 1
//3 2 1
const n = 5;
function pattern1(n){
     
    let row = 1;
    
    while(row <= n){
        let col = 1;
        let print = ''
        while(col <= n){
              let c = n - (col - 1) ;
              print += c
              col = col + 1;
            }
            
        console.log(print);
        row = row + 1
    }

}

// pattern1(n)

//*
//**
//***

function pattern2(n){
    
    let row = 1;
    while(row <= n){
          let col = 1;
          let star = ""
          while(col <= row){
                star +=  "*"
                col = col + 1;
          }
          console.log(star);
          row = row + 1
          
    }

}

// pattern2(n)



//1
//22
//333
//4444

function pattern3(n){
      
     let row = 1;

     while(row <= n){
      let col = 1;
      let print = ""
      while(col <= row){
          print += row;
          col = col + 1
      }      
     
        console.log(print);
        row = row + 1
        
     }

}

// pattern3(n)



//1
//21
//321
//4321

function pattern4(n){
      let row = 1
      while(row <= n){
        let col = 1;
        let print = ""
        while(col <= row){
              let c = row - col + 1;
              print += c
              col = col + 1;
        }
        console.log(print)
        row = row + 1
      }

}

// pattern4(n)



//A A A
//B B B
//C C C

function pattern5(n){

     let row = 1;
     while(row<= n){
        let col = 1;
        let print = "";
        while(col <= n){
            
            col = col + 1
        }

        row = row + 1
     }

}

pattern5(n)


//ABC
//ABC
//ABC

//ABC
//DEF
//GHI

//ABC
//BCD
//CDE


//A
//BC
//CDE
//DEFG

//   *
//  **
// ***
//****

function startPrint1(n){
     let row = 1;
    while(row <= n){
          let space = n - row;
          let ans = ""
          while(space){
                  ans += " "
                  space = space - 1
          }
          let col = 1;
          while(col <= row){
            ans += "*"
               col = col + 1
          }
          console.log(ans)
          row = row + 1
    }
      
}

// startPrint1(n)

// ****
// ***
// **
// *


function startPrint2(n){
    let row = 1;
     while(row <= n){
        let ans = ""
        //print star 
        let star = n - (row - 1);
        while(star){
            ans += "*";
            star = star - 1;
        }

        //print space 
        let col = 1;
        while(col <= row){
            ans += " ";
            col = col + 1
        }

        console.log(ans)
        row = row + 1
     }

}

// startPrint2(n)


//    *
//   ***
//  *****
// *******

// 3 1 3
// 2 3 2
// 1 5 1
// 0 7 0

function startPrint3(n){

     let row = 1;
     while(row <= n){
        
          let ans = ""

          //print space
           let space = n - row
           while(space){
              ans += " ";
              space = space - 1
           }
          
          //print star
           let star =  2 * row - 1;
           while(star){
                ans += "*";
                star = star - 1
           }


           console.log(ans)

        row = row + 1
     }

}

// startPrint3(n)


//   1
//  121
// 12321
//1234321

// 3 1 3
// 2 3 2
// 1 5 1
// 0 7 0


function printN(n){
      
     let row = 1;
     while(row<= n){
       
        let ans = ''
        //left side
         let space = n - row;
         while(space){
            ans += " ";
            space = space - 1
         }

        //right side
        let num = 2 * row - 1
        let col = 1;
      
            let i = 1;
            while(i <= row){
                ans += i;
                i++
            }
            let j = row - 1
            while(j >= 1){
                 ans += j;
                 j--
            }
          
        

       console.log(ans)
        row++ 
     }

}

// printN(n)

//1234554321
//1234**4321
//123****321
//12******21
//1********1

// 5 0 5
// 4 2 4
// 3 4 3
// 2 6 2
// 1 8 1

function printN2(n){

    let row = 1;
    while(row <= n){

        let ans = ""
        //increase triangle
        let t1 = n -  (row - 1)
        let i = 1
        while(t1){
            ans += i;
            i++;
            t1--
        }

        //star triangle
         let star = 2 * (row - 1);
         while(star){
            ans += "*";
            star--
         }

        //decrease triangle
         let t2 = n - (row - 1);
         while(t2){
               ans += t2;
               t2--
         }


       console.log(ans)
        row++
    }

}

// printN2(n)


//fibonacci series 0 1 1 2 3 5 8

function fibon(n){
       let a = 0;
       let b = 1;
       let nextN
       console.log(a);
       console.log(b);
       
       for(let i = 2; i< 10; i++){
            nextN = a + b;
             a = b;
             b = nextN
             console.log(nextN);
             
       }
}

// fibon(n)


//given number n return difference between product of its digit and sum of digits
//eg- n = 234, product of digit = 2*3*4 = 24, sum = 2+3+4=9, result=15

const value = 234

function diffVal(val){
    let proD = 1
    let sum = 0;
    let dup = val
  
       while(dup >= 1){
            let   lastDigit = dup % 10;
              proD *= lastDigit;
              sum += lastDigit;
              let div = dup / 10
              dup = Math.floor(div);
       }
        let result = proD - sum
       console.log(result)
}

diffVal(value)