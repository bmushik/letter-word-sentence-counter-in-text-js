function textStats(text) {
    let letters=text.replace(/[^a-zA-Z0-9ğüşıöçĞÜŞİÖÇ]/g, '');
    console.log("Letter count: " + letters.length)
    let spaces=(text.match(/\s/g) || []);
    console.log("Word count: " + (spaces.length + 1))
    let singleDots= text.replace(/\.{2,}/g, '.');
    let lines=(singleDots.match(/\./g) || []);
    console.log("Sentence count: " + lines.length)
 
  return true
}

textStats("This is an example sentence... A simple application where you can see letter, word, and sentence counts.")

// Output:
// Letter count: 82
// Word count: 17
// Sentence count: 2
