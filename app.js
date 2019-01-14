let regExp;

regExp = /hello/
// regExp = /hello/i //case insensitive
// regExp = /hello/g //global search - will search all instances of the word

console.log(regExp)
console.log(regExp.source)

//exec() - will return result in an array or null
// const result = regExp.exec('hello world')
// console.log(result)

//test() - will return true or false
// const result = regExp.test('Hello')
// console.log(result)
//result will eval to false because case sensitive
// using the i flag on the Reg Expression like regExp = /hello/i
// this makes it case insensitive
// will eval to true.


//match() - will return an array or null
// const str = 'Hello there'
// const result = str.match(regExp)
// console.log(result)

//search() will return the index of the first match and if not found -1
// const str = 'hello there'
// const result = str.search(regExp)
// console.log(result)

//replace() will return a new string with some or all matches of a pattern
const str = 'Hello There'
const newStr = str.replace(regExp, 'Hi')
console.log(newStr)
