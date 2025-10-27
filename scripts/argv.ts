import process from 'node:process'

console.log(JSON.stringify(process.argv))
console.log(`Hello ${process.argv[2]}`)
