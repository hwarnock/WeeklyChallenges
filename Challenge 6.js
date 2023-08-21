
function charCounter(char, string){
    stringArray = string.split('')
    count = 0
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === char){
            count = count + 1
        }
    }
    console.log(count);
}

charCounter("a", "edabit");
charCounter("c", "Chamber of seCrets");
charCounter("b", "big fat bubble");

// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4