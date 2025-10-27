import * as fs from 'node:fs/promises'

await fs.writeFile('./file.txt', 'Hello Node World')
const result: string = await fs.readFile('./file.txt', {encoding: 'utf-8'})
console.log(result)
await fs.copyFile('./file.txt', './fileCopy.txt')
