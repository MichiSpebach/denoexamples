Deno.env.set('TEST_ENV', 'test')
console.log(Deno.env.get('TEST_ENV')) // `Deno requests env access to "TEST_ENV".`
console.log(Deno.env.toObject()) // `Deno requests env access.` to all environment variables
