
//simple calculator--switch statement

const a = 3;
const b = 4;
const expression = "*";

function cal(expression){
     let result = 0;
    switch(expression){
        case "+":  result = a + b;
                break;
         case "-":  result = a - b;
                break;
        case "/":  result = a / b;
                break;

                case "*":  result = a * b;
                           break;

           default: "no input"     
    }

    console.log(result)
}

// cal(expression)


//given amount tell how many 100 rupee note require, 50, 20, 1 note rquired

const amount = 60;
const note = '100';

function findNotes(n, note){
     let hunderendNote = 0;
     let fiftydNote = 0;
     let tweentyNote = 0;
     let oneNote = 0;
     let remainingAmount = 0
    switch(note){
       case '100': if(100 <= n){
                     hunderendNote = Math.floor(n / 100);
                     remainingAmount = n - (hunderendNote * 100)
                     console.log(hunderendNote);
                   } 
                                

       case '50':  if(50 <= (remainingAmount || n)){
                     fiftydNote = Math.floor((remainingAmount || n) / 50);
                     remainingAmount = (remainingAmount || n) - (fiftydNote * 50)
                      console.log(fiftydNote);
                      
                   } 
                     
                   

       case '20': if(20 <= (remainingAmount || n)){
                       tweentyNote = Math.floor((remainingAmount || n) / 20);
                       remainingAmount = (remainingAmount || n) - (tweentyNote * 20)
                        console.log(tweentyNote);
                       
                   } 

                    case '1': if(1 <= (remainingAmount || n)){
                      oneNote = Math.floor((remainingAmount || n) / 1);
                      remainingAmount = (remainingAmount || n) - (oneNote * 1)
                      console.log(oneNote);
                     
                   } 
                   
    }


}

findNotes(amount, note)


