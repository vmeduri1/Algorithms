/*
Phone Screen/ Phone Interview likely

"ABCA" -> 'A'
"BCABA" -> 'B'
"ABC" -> null
*/

/*
    "ABCA"
    charCount = { A:2, B:1, C:1}
*/

// hash table
const firstRecurringChar = (chars) => {
    let charCount = {};
    for (let i = 0; i < chars.length; i++) {
        if (charCount[chars[i]] === undefined) {
            charCount[chars[i]] = 1;
        } else {
            return chars[i];
        }
    } 
    return null;
}

// Doesn't work for JavaScript, but works in other languages
// const firstRecurringCharSimpler = (string) => {
//     let counts = {};
//     for (char in string) { <== specifically the 'in' character for strings
//         if (char in counts) { <=== here too, the 'in' character for strings
//             return char;
//         }
//         counts[char] = 1;
//     }
//     return null;
// }

console.log(firstRecurringChar("ABCA"));
console.log(firstRecurringChar("BCABA"));
console.log(firstRecurringChar("ABC"));
console.log(firstRecurringChar("DBCABA"));

/*
    O(n) time complexity? => Yes
    naive sol'n vs

*/

console.log(firstRecurringCharSimpler("ABCA"));
console.log(firstRecurringCharSimpler("BCABA"));
console.log(firstRecurringCharSimpler("ABC"));
console.log(firstRecurringCharSimpler("DBCABA"));
