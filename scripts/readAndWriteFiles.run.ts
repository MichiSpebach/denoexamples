import * as fsDeno from 'https://deno.land/std@0.224.0/fs/mod.ts'
import * as fsNode from 'node:fs'
import { Buffer } from 'node:buffer'

await writeAndReadFileDeno()
//writeAndReadFileNode()

async function writeAndReadFileDeno(): Promise<void> {
	await Deno.writeTextFile('./file.txt', 'Hello Deno World')
	const result: string = await Deno.readTextFile('./file.txt')
	console.log(result)
	await fsDeno.copy('./file.txt', './fileCopy.txt')
}

function writeAndReadFileNode(): void {
	fsNode.writeFileSync('./file.txt', 'Hello Node World')
	const result: Buffer = fsNode.readFileSync('./file.txt')
	console.log(result.toString())
	fsNode.copyFileSync('./file.txt', './fileCopy.txt')
}
