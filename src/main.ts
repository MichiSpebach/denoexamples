import { calculateSomething } from './otherSourceFile.ts'

console.log(`Result of 1 <something> 1 is ${calculateSomething(1, 1)}`)
console.log(`Result of 1 <something> 2 is ${calculateSomething(1, 2)}`)
console.log(`Result of 2 <something> 2 is ${calculateSomething(2, 2)}`)