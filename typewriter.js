const sentence = "hello there from lighthouse labs";

for (const char in sentence) {
  let time = 50 * char;
   setTimeout(() => {
     process.stdout.write (sentence[char]);
   }, time) 
}

setTimeout(() => {
  console.log('\n');
}, 50 * sentence.length) 