const path = require('path');
const config = require('../.fantasticonrc.js');

async function run() {
	const { generateFonts } = await import('fantasticon');
	await generateFonts(config);
}

run().catch(err => {
	console.error(err);
	process.exit(1);
});
