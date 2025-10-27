import { ChildProcess, exec } from 'node:child_process'

const echoProcess: ChildProcess = exec(`\
	echo 'Hello World' &&\
	ssh localhost:22 mkdir testFolder
`)
echoProcess.stdout?.on('data', (data) => console.log(`stdout: ${data}`))
echoProcess.stderr?.on('data', (data) => console.error(`stderr: ${data}`))
echoProcess.on('close', (code) => {
	console.log(`child process exited with code ${code}`)
})
