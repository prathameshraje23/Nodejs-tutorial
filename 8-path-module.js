//allow us to interact with file path easily

const path =  require(`path`);

//to know platform separator property -->  \ here
console.log(path.sep);

//join method which joins a sequence of path segments using that platform specific separator (\) and
//returns resulting normalized path
const filePath = path.join(`\content`,`subfolder`,`test.txt`);
console.log(filePath);

//To know only end part i.e. basename property
const base = path.basename(filePath);
console.log(base);

//resolve property  for absolute path
const absolute = path.resolve(__dirname,`content`,`subfolder`,`test.txt`);
console.log(absolute);