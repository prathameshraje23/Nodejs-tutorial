//Module
//CommonJS - Every file is module (by default)
//Module - Encapsulated Code (only share minimum)
//Through module we can access variables, objects, functions from another file

//Local
const secret = `Super Secret`;

//share
const john = `John`;
const peter = `Peter`;

//exporting multiple variables
module.exports = {john,peter};