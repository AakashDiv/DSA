
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321

const x = -123;

function reverseIn(n){

    let dup = n;
    let result= 0
    let isNeagative = false

      if(n < 0){
         isNeagative = true
         dup = Math.abs(dup)
         console.log(dup)
    }
   

    while(dup >= 1){
            let lastDigit = dup % 10;
            result = result * 10 + lastDigit;
            let div = dup / 10;
            dup =  Math.floor(div)

            if(result <= -(2**31) || result >= 2**31 - 1 ){
                result = 0
            }
    }

    if(isNeagative){
        result = result * -1
    }
   console.log(result)

}

// reverseIn(x)



//  ====================================================================================================
//                    Array Problem
//  ====================================================================================================

//Swap alternate array element
//input = [1,2, 5, 7, 3]
//output = [2,1,7,5,3]

const alArray = [1,2, 5, 7, 3];

function swap(first, second, arr){
        let temp = arr[first];
        arr[first] = arr[second]; 
        arr[second] = temp;
}


function swapAternativEl(arr){
     let dup = arr
     let len = dup.length - 1

     if(dup.length % 2 != 0){
        len = dup.length - 2
     }

     for(let i=0; i<= len ; i+= 2){
          swap(i, i + 1, dup)
     }
    return dup
}
// console.log(swapAternativEl(alArray))


// find unique element in array 
const unarr = [1,5,2,1,3,7,3,7]
function uniqueEl(arr){
      let ans = 0;
      for(let i =0; i<= arr.length  -1; i++){
         ans = ans^arr[i]
      }
    return ans
}
// uniqueEl(unarr)


const unarrOc = [1,2,2,1,1,3,3]
//Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
function uniElOc(arr){
      let uniarr = []
    for(let i=0; i<= arr.length - 1; i++){
          if(!uniarr.includes(arr[i])){
              uniarr.push(arr[i])
          }
          
    }

    let count = {}

    for(let i=0 ;i<= uniarr.length - 1; i++  ){
           for(let j=0; j<= arr.length - 1; j++){
                  if(uniarr[i] == arr[j]){
                       count[uniarr[i]] =  count[uniarr[i]] + 1 || 1
                  }
           }
    }

 
  let occ = [];
  let uniqueOccurenceValue = true;

    for(let item in count){
      if(!occ.includes(count[item])){
         occ.push(count[item]);

      }else{
        uniqueOccurenceValue = false
      }
        
    }

    return uniqueOccurenceValue

}

uniElOc(unarrOc)

 
// find duplicate of element occurences in array






//swap aternative in array

// find duplicate in array 

//array of intersection 

//input [1,2,3,4], [1,2,3,4], output [2,3] (jo elment two time arha hai vo print krna hai )

//pair of sum

//pair of triplth

//sort 0 & 1

//Find all duplicate in array

//Sort 



// 14. Longest Common Prefix
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string 
const strs = ["dog","racecar","car"]
function longComPre(strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let basestr = strs[0];
  let commonPrefix = [];

  for (let i = 1; i < strs.length; i++) {
    let tempPrefix = [];

    for (
      let j = 0;
      j < basestr.length && j < strs[i].length;
      j++
    ) {
      if (basestr.charAt(j) === strs[i].charAt(j)) {
        tempPrefix.push(strs[i].charAt(j));
      } else {
        break;
      }
    }

    commonPrefix = tempPrefix;

    if (commonPrefix.length === 0) {
      return ""; 
    }

    basestr = commonPrefix.join("");
  }

  return commonPrefix.join("");
}

// console.log(longComPre(strs))




// 26. Remove Duplicates from Sorted Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores

const nums = [0,0,1,1,1,2,2,3,3,4]
function removeDfromSortedARR(nums){
        let tempArr = []
         for(let i=0; i<= nums.length - 1; i++){
               if(nums[i] != nums[i + 1]){
                      tempArr.push(nums[i])
               }
         }
        
         for(let i=0 ; i <= tempArr.length - 1; i++){
             nums[i] = tempArr[i]
         }
         console.log(nums)
      return tempArr.length
}

// removeDfromSortedARR(nums)



// 88. Merge Sorted Array
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const nums1 = [1,2,3,0,0,0];
 const m = 3 ;
  const nums2 = [2,5,6]; 
  const n = 3



function mergeSortArray(nums1, m, nums2, n){
      let endFirst = m - 1;
      let endSecond = n - 1;
      let endPostion = nums1.length - 1;

 
          while(endSecond >=0){
              if(endFirst >= 0 && nums1[endFirst] > nums2[endSecond]){
                  nums1[endPostion] = nums1[endFirst];
               endFirst--;
               
           }else {
               nums1[endPostion] = nums2[endSecond];
                 endSecond--;
           }
           endPostion--
            
      }
          
        
      console.log(nums1)
}

// mergeSortArray(nums1, m, nums2, n)



// find the pviot element
const parr = [7,9, 1, 2, 3,4,9];

function pviotEl(parr){
    let start = 0;
    let end = parr.length - 1;
    let pviotFind;

    if(start <= end){
        if(parr[mid] < parr[mid - 1]){
             pviotFind = parr[mid]
        }else if(parr[start] <= parr[mid]){
               start = mid + 1;
        }else{
          end = mid - 1
        }
    }
}

// pviotEl(parr)


// 108. Convert Sorted Array to Binary Search Tree
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

const numsBST = [-10,-3,0,5,9];


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}


function sortedArrayToBST(nums){
      
   if(nums.length == 1) return new TreeNode(nums[0])
    if(nums.length == 0) return null;

   let mid = Math.floor(nums.length / 2)
     let  root =  new TreeNode(nums[mid])


    let leftSubtree = nums.slice(0, mid);
    root.left = sortedArrayToBST(leftSubtree)


     let rightSubtree = nums.slice(mid +1, nums.length);
     root.right = sortedArrayToBST(rightSubtree);

     return root

}

// console.log(sortedArrayToBST(numsBST));



//=========== Date 11-Sep-2026 ===============
// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

const numsFindFisrtLastEl = [1], target = 1
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109
// searchRange(numsar, targetel)


function firstEl(arr, key){
       let start = 0;
       let end = arr.length - 1;
       let cal = (start + end) / 2
       let mid = Math.floor(cal);
       let ans ;

       if(arr.length == 0){
           return -1
       }

       while(start <= end){
               if(arr[mid]  == key){
               ans = mid;
               end = mid - 1;
          }
          else if(key < arr[mid]){
                 end = mid - 1 ;
          }else {
              start = mid + 1
          }

          cal = (start + end) / 2
          mid = Math.floor(cal);
       }
       if(ans == undefined){
        return -1
       }
       return ans
    // console.log("first", ans)
     
}


function lastEl(arr, key){
       let start = 0;
       let end = arr.length - 1;
       let cal = (start + end) / 2
       let mid = Math.floor(cal);
       let ans ;

       if(arr.length == 0){
           return -1
       }

       while(start <= end){
               if(arr[mid] == key){
               ans = mid;
               start = mid + 1;
          }
          else if(key < arr[mid]){
                 end = mid - 1 ;
          }else {
              start = mid + 1
          }

          cal = (start + end) / 2
          mid = Math.floor(cal);
       }
        if(ans == undefined){
        return -1
       }
       return ans
    // console.log("last", ans)
     
}

function searchRange (nums, target) {
       const firstPostion = firstEl(nums, target)
       const lastPostion = lastEl(nums, target);
       
       console.log(firstPostion, lastPostion)

      return [firstPostion, lastPostion] 

};

// searchRange(numsFindFisrtLastEl, target)

//=========== End Date 11-Sep-2026 ===========

//=========== End Date 12-Sep-2026 ===========
// 852. Peak Index in a Mountain Array
// Medium
// Topics
// premium lock icon
// Companies
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

 

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

//=========== End Date 12-Sep-2026 ===========

//=========== End Date 13-Sep-2026 ===========
// 33. Search in Rotated Sorted Array
// Medium
// Topics
// premium lock icon
// Companies
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
//=========== End Date 13-Sep-2026 ===========


//===========  Date 14-Sep-2026 ==============
// 69. Sqrt(x)
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

const sqNumber = 8;
function mySqrt(x) {
         let s = 0;
         let e = x;
         let cal = (s + e)/2
         let mid = Math.floor(cal);
         let ans = 0;

         while(s <= e){
           
             if((mid * mid) <= x){
               ans = mid;
              s = mid + 1;
             }else{
                  e = mid - 1
             }
             cal = (s + e)/2
            mid = Math.floor(cal);
         }

         console.log("check me", Math.floor(ans));
         return ans
         
}

// mySqrt(sqNumber)



//===========  Date 14-Sep-2026 ==============

//===========  Date 15-Sep-2026 ==============
// 268. Missing Number
// Easy
// Topics
// premium lock icon
// Companies
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

const missN = [1];

function missingNumber (nums){
  let ans = 0;
     for(let i=0;  i<= nums.length; i++){
     ans = ans ^ (i ^ nums[i])  
     }

return ans

      
}

// missingNumber(missN)

//===========  Date 15-Sep-2026 ==============




//===========  Date 16-Sep-2026 ==============
// 350. Intersection of Two Arrays II
// Easy
// Topics
// premium lock icon
// Companies
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const numsarr = [4,9,5]
const numsarr2 = [9,4,9,8,4];

function countFrequency( arr){
       let obj = {}

       for(let i in arr){
            obj[arr[i]] =  (obj[arr[i]] || 0) +  1
       }

       return obj
}

function intersect (nums1, nums2){
        
  const arr1 =      countFrequency( nums1)
  const arr2 =      countFrequency( nums2);

  // console.log(arr1)
  // console.log(arr2)
let result = []
for(let i in arr1){
   if(arr2[i] != undefined){
        let frequency = Math.min(arr1[i], arr2[i])

        for(let j=0; j< frequency ; j++){
          if(!result.includes(i)){
            result.push(Number(i))
          }
          
   }
   }

   
}
     
console.log(result)

     return result
}

// intersect(numsarr, numsarr2)


//===========  Date 16-Sep-2026 ==============

//===========  Date 17-Sep-2026 ==============
// 441. Arranging Coins
// Easy
// Topics
// premium lock icon
// Companies
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.
const arrageN = 8

//brute force
// arrangeCoins = function(n) {
//       let sum = 0;
//     let updateN = n;
//     let completeRow = 0;
//     for(let i=1; i<= n; i++){
//           sum = i + sum;
//           if(i <= updateN){
//             updateN = updateN - i
//               completeRow = i
//           }
        
//     }

//     console.log(completeRow)
//     return completeRow
// };
//brute force



function arrangeCoins(n){
   let s =0;
   let e = n;
   let cal = (s + e)/2;
   let mid = Math.floor(cal)

let ans = 0
  while(s <= e){
       if(mid * (mid + 1)/2  <= n){
           ans = mid
           s = mid + 1
       }else{
        e = mid - 1
       }


    cal = (s + e)/2;
    mid = Math.floor(cal)

  }
   
  console.log(ans)
  return ans

}
// arrangeCoins(arrageN)




const obj1 = {
  name: "Alice",
  details: { age: 30, skills: ["JS", "CSS"], coordinate:{x:1, y:1} }
};
const obj2 = {
  details: { age: 31, location: "NY", coordinate:{x:2} },
  hobbies: ["Coding"]
};
 

// Output:
// {
//   name: 'Alice',
//   details: { age: 31, skills: [ 'JS', 'CSS' ], location: 'NY', coordinate:{x:2 , y:1}  },
//   hobbies: [ 'Coding' ]
// }


function deepMerge(obj1, obj2){
     
  let mergeObj = {obj1, obj2}

     Object.keys(mergeObj).forEach((item, index)=>{
         Object.keys(`obj${index +1}`).forEach((childItem)=>{
                 console.log(mergeObj[item], "===", `obj${index}[childItem]`)
         })
     })
   

    //  console.log(mergeObj)
}


// deepMerge(obj1, obj2)


//===========  Date 17-Sep-2026 ==============

//===========  Date 18-Sep-2026 ==============
// 189. Rotate Array
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// const Rnums = [-1,-100,3,99]
const Rnums = [1,2,3,4,5,6,7]
// const kn = 2
const kn = 3
    
function swapRarr(s, e , nums){
      let temp = nums[e];
      nums[e] = nums[s]
      nums[s] = temp
}

function reverse(s, e, nums){
 while(s< e){
         swapRarr(s, e, nums)
         s++;
         e--
    }
      
}

function rotate(nums, k){
   k = k % nums.length;
  reverse(0, nums.length - 1, nums)
  reverse(0, k - 1, nums)
  reverse(k, nums.length - 1, nums)
          
console.log(nums)
return nums;

}


// rotate(Rnums, kn)

//===========  Date 18-Sep-2026 ==============

//===========  Date 19-Sep-2026 ==============
// 283. Move Zeroes
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


 
const MZnums = [0,1,0,3,12]


function moveZeroes(nums){
      let j = 0;
      
      for(let i=0; i<= nums.length - 1; i++){
           let temp = nums[i]
           if(nums[i] != 0){
             
             nums[i] = nums[j];
             nums[j] = temp
             j++
           }
      }

      console.log(nums);
      return nums
}

// moveZeroes(MZnums)

//===========  Date 19-Sep-2026 ==============

//===========  Date 20-Sep-2026 ==============

// 189 roatate array right by k step 

// 1752 check if array sorted and rotated

const cnums = [3,4,5,1,2]

function check(nums){
   let count = 0;

    for (let i = 0; i < nums.length; i++) {

        let next = (i + 1) % nums.length;

        if (nums[i] > nums[next]) {
            count++;
        }

        if (count > 1) {
            return false;
        }
    }

    return true;
}

// check(cnums)


//SUM OF TWO ARRAY

//===========  Date 20-Sep-2026 ==============

//===========  Date 23-Sep-2026 ==============
// 217. Contains Duplicate
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const Dnums = [1,2,3,4]
function containsDuplicate (nums){
  let obj = {}

   for(let i=0; i<= nums.length - 1; i++){
        obj[nums[i]] = (obj[nums[i]] + 1) || 1   
   }

   let dup = false;

   for(let i in obj){
      if(obj[i] > 1){
        dup = true
         
      }
        
   }

  console.log(dup)
  return dup
       
}

// containsDuplicate(Dnums)


//===========  Date 23-Sep-2026 ==============

//===========  Date 24-Sep-2026 ==============



// Code
// Testcase
// Test Result
// Test Result
// 344. Reverse String
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

const s = ["h","e","l","l","o"];

function swapSting(i,j,s){
      let temp = s[j];
       s[j] = s[i];
       s[i] = temp
       
}

function reverseString(s){
     let start = 0;
     let end = s.length - 1;

     while(start <= end){
          swapSting(start, end,s);
          start++
          end--
     }
 
     console.log(s)
     return s
}

// reverseString(s)

//===========  Date 24-Sep-2026 ==============

//===========  Date 25-Sep-2026 ==============
// 151. Reverse Words in a String
// Medium
// Topics
// premium lock icon
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.


//Replace spaces =====

//===========  Date 25-Sep-2026 ==============



// 2265. Count Nodes Equal to Average of Subtree
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

// Note:

// The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
// A subtree of root is a tree consisting of root and all of its descendants.



//Book allocation problem
// 410. Split Array Largest Sum
// Hard
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

// Return the minimized largest sum of the split.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [7,2,5,10,8], k = 2
// Output: 18
// Explanation: There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.




//painter partition problem


//aggresive cows
// 1552. Magnetic Force Between Two Balls
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

// Given the integer array position and the integer m. Return the required force.


//  ====================================================================================================
//                    Array Problem
//  ====================================================================================================