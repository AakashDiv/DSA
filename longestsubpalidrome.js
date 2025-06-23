 
  const s = "babad";

  function checkPal(string, i, j){
       while( i < j){
           if(string[i] != string[j]){
               return false
           }
           i++;
           j--;
       }
           return true
  }
  
  
  function main(s){
    let len = s.length;
    let maxLen = 1;  let start = 0; let end = 0;
    
    for(let i=0; i< len; i++){
        for(let j = i; j < len; j++){
            if(checkPal(s, i, j) == true && (j - i + 1) > maxLen ){
                start = i
                maxLen = j - i + 1;

            }
        }
    }


  return  s.substring(start, start + maxLen )


  }
  
  console.log(main(s))
  