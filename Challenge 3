function LongestWord(sen) { 
 // removing all special characters using reg ex
 let charRemoved = sen.replace(/[^A-Za-z0-9\s]/g, '');
 let wordsOnly = charRemoved.split(" ");

 //sorts array from longest to shortest words 
 wordsOnly = wordsOnly.sort((a, b) => b.length - a.length);

 sen = wordsOnly[0]
 
 return sen;  

}
   
// keep this function call here 
console.log(LongestWord("ladksnflansdlf, a;ldskjf;adjvoi;aau4eijlg;kanm, iejfa;osduvjohjv'pokw3;lemfnwoiehfgofn, jdlafjsod, akjdlfjaooe."));