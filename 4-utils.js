//share function
const sayHi = (name) => {
    console.log(`Hey there ${name}`);
}

module.exports = sayHi;

//alternative way of exporting

module.exports.items = [`item1`,`item2`];

const person = {
    fname : `bob`
}

module.exports.singlePerson = person;