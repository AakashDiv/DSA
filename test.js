
function printN(input){
           if(input < 1) return
           printN(input - 1);
           console.log(input)
}



function factorial(input){
     if(input < 1) return
     return input * factorial(input - 1)     
}

let sum=1
function fac(i){
        if(i < 1)return
        console.log(sum);
        sum =  i * sum;
        fac(i - 1)
        
}

function f(input){
         if(input <= 1) return
         f(input - 1) + f(input - 2)
}


function main(){
    const input = 5;
   console.log(f(input))      
}

main()