


// DESCRIPTION:
// write a JavaScript function that removes all the vowels from the word
//
// AUTHOR(S): Logan Blackstad
// DATE:      Jun 08 2021
// 

// to run in the terminal, simply type "node <fileName.js>"
// 

function removeVowels(str1) {
     return str1.replace(/[aeiou]/gi, '');
    // g is for global; i is for insensitive

    /* 
    // similarly, if you had an array of strings, use the .map() function 
    // with the same regex
    
    var strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone","piano"];                          

    return strings.map(x=>x.replace( /[aeiou]/g, '' ));
    */

}
  

console.log(removeVowels('test'))
