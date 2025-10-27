try {
	await new Deno.Command('echo', {args: ['Hello World']}).spawn().output()
} catch (error: unknown) {
	console.log(String(error))
}

await new Deno.Command('ssh', {
	args: ['localhost:22', `mkdir testFolder`],
	stdout: 'piped'
}).spawn().output()
