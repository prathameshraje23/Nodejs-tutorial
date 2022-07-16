//Synchronous reading and writing

const {readFileSync, writeFileSync} = require(`fs`);

//reading file                path               encoding
const first = readFileSync(`./content/first.txt`,'utf8');
console.log(first);

const second = readFileSync(`./content/second.txt`,'utf8');
console.log(second);

//writing to file
//            path if file not created   content written to file  flag a-append
writeFileSync(`./content/result-sync.txt`,`Here is the result : `,{flag:`a`});


