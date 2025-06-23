
function pattern1(input){
    for(let i =0 ; i < input; i++){
        let star = " "
         for(let j=0; j < input; j++){
            star += "*"
         }
         console.log(star);
    }
}

function pattern2(row, column){
      for(let i =0; i< row; i++){
        let star = " ";
        for(let j=0; j < i; j++){
            star += "*"
        }
        console.log(star)
      
      }
}

function pattern3(row, column){
    for(let i=1; i <= row; i++){
        let number = " ";
        for(let j = 1; j <= i; j++){
            number += j
        }
        console.log(number)
    }
}

function pattern4(row, column){
      for(let i = 1; i<= row; i++){
        let number = " ";
        for(let j= 1; j <= i; j++){
            number += i
        }
        console.log(number);
        
      }
}

function pattern5(row, column){
        for(let i = 1; i <= row; i++){
            let star = " ";
            for(let j = 0; j <= column - i; j++){
               star += "*"
            }
            console.log(star);
            
        }
}

function pattern6(row, column){
    for(let i=0; i < row; i++){
        let number = " ";
        for(let j=1; j <= column - i; j++){
             number += j;
        }
        console.log(number)
    }
}

function pattern7(row, column){
   for(let i=0; i< row; i++){
    let star= " ";
    let space = "";
//print star
for(let j = 1; j <= 2*i +1 ; j++ ){
    star += "*"
}

//print space1
for(let k= 0; k <= column - i + 1; k++){
   space += " "
}
   console.log(`${space} ${star} ${space}`);
    
}
}
// 4 1 4
// 3 3 3
// 2 5 2
// 1 7 1
// 0 9 0
function pattern8(row){
     for(let i = 0; i< row; i++){
        let star = "";
        let space ="";
        //star
        for(let j =0; j<   2*row - (2*i + 1) ; j++){
             star += "*"
        }
        //space
        for(let k = 0; k < i; k++){
            space += " ";
        }
        console.log(`${space} ${star} ${space}`);
     }
}
// 0 9 0
// 1 7 1
// 2 5 2
// 3 3 3
// 4 1 4

function pattern9(row){
   
}

// 4 1 4
// 3 3 3
// 2 5 2
// 1 7 1
// 0 9 0
// 0 9 0
// 1 9 1
// 1 7 1
// 2 5 2
// 3 3 3
// 4 1 4

function pattern10(row){
     for(let i = 1; i<= 2*row; i++){
        let star = "";
        let limit = i;
        if(limit > row){
            let chekc = 2*row - i;
            limit = chekc
        }
         for(let j = 1; j < limit; j++){
            star += "*"
         }
       console.log(star);    

     }
}

function pattern11(row) {
    for (let i = 1; i <= row; i++) {
        let start = i % 2 === 0 ? 0 : 1;
        let pat = "";

        for (let j = 0; j < i; j++) {
            pat += start;
            start = 1 - start; 
        }
        console.log(pat);
    }
}

function pattern12(row){
    for(let i = 1; i<= row; i++){
        
    }
}

function main(){
    const input = 5;
    const row= 5;
    // const column = 5;
    // pattern1(input);
    // pattern2(row, column);
    // pattern3(row, column);
    // pattern4(row, column);
    // pattern5(row, column);
    // pattern6(row, column);
    // pattern7(row, column);
    // pattern8(row);
    // pattern9(row);
    // pattern10(row);
    // pattern11(row);
    pattern12(row);
}

main()