import * as fs from 'https://deno.land/std@0.224.0/fs/mod.ts'

await Deno.writeTextFile('./file.txt', 'Hello Deno World')
const result: string = await Deno.readTextFile('./file.txt')
console.log(result)
await fs.copy('./file.txt', './fileCopy.txt')
