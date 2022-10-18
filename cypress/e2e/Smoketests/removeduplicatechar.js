//Remove Duplicate words

// var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"
// const result = Array.from(new Set(x)).join('')

// console.log(result)

// Remove duplicate chars 
// function myFunction(str) {
//     var result = "";
//     var freq = [];
//     for(i=0;i<str.length;i++){
//        let char = str[i];
//        if(freq[char]) {
//         freq[char]++;      
//        } else {
//         freq[char] =1
//         result = result+char;
//        }
//     }
//     return result;
//   }

//   console.log(myFunction("Hello"))


// Remove duplicate element


// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);


// Merge arrays

// var arr1 = ["x","y","z","x","y","z"]

// var arr2 = ["1","2"]

// var  arr1len = arr1.length

// var arr2len = arr2.length

// var arr3=[]

// var len = arr1.length > arr2.length ? arr1.length : arr2.length

// console.log(len)

// for(let i=0; i<len; i++){

// if(i<arr1.length){

//     arr3.push(arr1[i])

// }
  
// if(i<arr2len){
//     arr3.push(arr2[i])
// }
  

// }

// console.log(arr3) 



//reverse string


// function reverseString(str) {
    
    
//     var splitString = str.split("");  
    
//     var reverseArray = splitString.reverse(); 
 
//     var joinArray = reverseArray.join(""); 

//     return joinArray; 
// }
 
// console.log(reverseString("hello"));



//Reverse String


//function reverseString(str) {
    // var  str ="Rafbwenfkjwenbfk;ju"
    // let newString = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }
    // //return newString;
    // console.log(newString)
//}


//two string anagrams i.e, Listen and Silent.


// function compare (a, b) {
//   y = a.split("").sort();
//   z = b.split("").sort();
//   for (i=0; i<y.length; i++) {
//     if(y.length===z.length) {
//       if (y[i]===z[i]){
//         console.log(a + " and " + b + " True");
     
//       }
//       else {
//         console.log(a + " and " + b + " False");
       
//       }
//     }
//     else {
//       console.log(a + " None of the above " + b);
//     }
   
//   }
// }

// compare("listen", "silent");


//Program :Number palindrome.  ...  // isPalNum(545)   -> true  - 

// function verifyPalindrom(givenNumber) {
//     const given = givenNumber.split('');
//     const reverseGivenNumber = given.reverse();
//     const reverseNumber = reverseGivenNumber.join('');
//     if(givenNumber == reverseNumber) {
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }
// verifyPalindrom('545');


const Ary = [4, 781, 8, 99, 103];
//console.log(Math.max(Ary));
console.log(Math.min(...Ary)); 
console.log(Math.max(...Ary));


