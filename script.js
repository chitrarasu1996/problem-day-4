// Write a function to reverse an array in place.

let arr=[1,2,3,4,5,6,7,8,9,10]


for(let start=0,end=arr.length-1;start<end&&end>start;start++,end--){
let sum=arr[start]+arr[end]
arr[end]=sum-arr[end]
arr[start]=sum-arr[start]

}

  
console.log(arr,"Arr")

/Write a function to remove duplicates from an array.

const removeDublicate=(arr)=>{

for(let i=0;i<arr.length;i++){
    if(arr[i]!==-1){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                arr[j]=-1
            }
    
        }
    }
  
}
let index=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!==-1){
        arr[index++]=arr[i]
    }
}

arr.length=index
return arr  
}
const arrr1=[1,5,2,5,3,4,5,1,4]
console.log(removeDublicate(arrr1))

// /Write a function to find the common elements between two arrays.

const findCommonElements=(arr1,arr2)=>{

    

}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(arr1, arr2)); 
// Write a function to merge two sorted arrays into a single sorted array.

const sortingArr=(arr)=>{

for(let i=0;i<arr.length;i++){
let min=i;
    for(let j=i+1;j<arr.length;j++){
if(arr[j]<arr[min]){
    min=j
 
}
    }

    if(min!==i){
[arr[i],arr[min]]=[arr[min],arr[i]]
    }

}
return arr
}
let withoutSorted=[4,1,2,4,6,8,5]

console.log(sortingArr(withoutSorted))


// Write a function to rotate an array to the right by k steps.


const rotateArry=(arr,k)=>{

for(let i=0;i<k;i++){

let lastEle=arr.pop();
arr.unshift(lastEle)

}
return arr

}
let arr4=[1,2,3,4,5]
let k=6
console.log(rotateArry(arr4,k),"revesrd")