
const arr = [8,5,4,9,6];

function sortB(){
      for(let i=0; i < arr.length -2; i++){
             for(let j= i + 1; j < arr.length -1; j++){
                   if(arr[i] > arr[j]){
                       swap(i, j)   
                   }
             }
      }
}

sortB()