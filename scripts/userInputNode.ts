#! node --disable-warning=ExperimentalWarning

// fails with Deno

import * as readline from 'node:readline/promises'
import process from 'node:process'

const terminal: readline.Interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const input: string = await terminal.question('input? > ')
console.log(`Hello ${input}`)

terminal.close()