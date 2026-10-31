
//find max elment of array and min element of array 

const arr = [55,2,78,4,9,10]

function maxminEl(arr){
    
    let max = 0;
    let min = 0;

    for(let i=0; i< arr.length; i++){
        
                if(arr[i] > arr[max]){
                      max = i
                }

                if(arr[i] < arr[min]){
                     min = i
                }
          

        }
        console.log(arr[max])
        console.log(arr[min])


}

maxminEl(arr)


//find dup el in array 

function dupel(){
      
}
