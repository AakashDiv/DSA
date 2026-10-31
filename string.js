
//find max occurring charcter
//input - "javascript"
//output - "a"

const st = "javaScript";

function maxchst(st){
      let temp = {}
      let maxCount = 0;
      let maxChar = ""
    for(let i=0; i< st.length; i++){
            temp[st[i]] = (temp[st[i]] || 0) + 1
    }


     for(let item in temp){
          
        if(temp[item] > maxCount){
               maxCount = temp[item];
               maxChar = item
        }

     }

    console.log(maxChar, ":", maxCount)
}

maxchst(st)