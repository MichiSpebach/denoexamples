import * as esbuild from 'https://deno.land/x/esbuild@v0.21.2/mod.js'
import { BuildResult } from 'https://deno.land/x/esbuild@v0.21.2/mod.js'
import { denoPlugins } from 'https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts'

await buildForChromeExtension()
await buildForWeb()
esbuild.stop()

async function buildForChromeExtension(): Promise<void> {
	const result: BuildResult = await build({outfile: '../out/chromeExtension/main.js'})
	console.log('buildForChromeExtension result:', result)
}

async function buildForWeb(): Promise<void> {
	const result: BuildResult = await build({outfile: '../out/web/index.js'})
	console.log('buildForWeb result:', result)
}

async function build(options: {outdir?: string, outfile?: string}): Promise<BuildResult> {
	return await esbuild.build({
		plugins: [...denoPlugins()],
		entryPoints: ['../src/main.ts'],
		bundle: true,
		...options
	})
}