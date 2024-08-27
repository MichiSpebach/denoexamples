import { Secret } from 'https://deno.land/x/cliffy@v1.0.0-rc.4/prompt/secret.ts'
import { exec, IExecResponse, OutputMode } from 'https://deno.land/x/exec@0.0.5/mod.ts'

const serverUrl: string = await Secret.prompt('Enter serverUrl') // like in browsers there is no window.prompt(...) for passwords, so we use the library cliffy
const serverFolder: string|null = prompt('Enter serverFolder:') // for normal fields Deno comes with window.prompt(...) like browsers do

await new Deno.Command('ssh', {args: [serverUrl, `mkdir ${serverFolder}`], stdout: 'piped'}).spawn().output() // without library
console.log(await exec(`scp ./sshAndPrompt.run.ts ${serverUrl}:${serverFolder}/sshAndPrompt.run.ts`))

const response: IExecResponse = await exec(`ssh ${serverUrl} "echo $(<${serverFolder}/sshAndPrompt.run.ts)"`, {output: OutputMode.Capture})
console.log(response)
console.log(`There are ${countLineBreaks(response.output)} linebreaks in this file.`)

function countLineBreaks(text: string): number {
	return Array.from(text.matchAll(/\r/g)).length
}