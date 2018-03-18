const gulp = require('gulp')
const fs = require('fs')
const shell = require('shelljs')
const argv = require('yargs').argv
const configPath = `${process.cwd()}/src/data/config.json`
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
const filepath = config.deploy.path
const host = config.deploy.host

gulp.task('ssh-prod', (cb) => {
	const username = argv.u
	const files = argv.html ? 'index.html bundle.js' : '.'
	const configured = checkConfiguration(username)

	if (configured) {
		const command = `(cd dist/prod; scp -r ${files} ${username}@${host}:${filepath})`
		shell.exec(command, cb)
	} else {
		cb()
	}
})

const checkConfiguration = (username) => {
	if (!filepath) {
		console.log('*** setup ssh-config.js "path" to upload to your server ***')
	}
	if (!username) {
		console.log('*** enter your username with "gulp prod -u username" ***')
	}
	return username && typeof username === 'string' && filepath
}