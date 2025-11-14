import { spawn } from 'bun'
import type { ProcessCommandArg } from './process-command'
import processCommand from './process-command'

/**
 * Run a command.
 */
const runCommand = async (command: string, ...args: ProcessCommandArg[]) => {
	const commandSequence = processCommand(command, ...args)
	const { exitCode, stdout, stderr } = spawn({
		cmd: commandSequence,
		cwd: process.cwd(),
		env: process.env,
		stdout: 'pipe',
		stderr: 'pipe',
	})

	if (exitCode === null || exitCode === 0) {
		return await new Response(stdout).text()
	} else {
		const error = await new Response(stderr).text()

		throw new Error(error)
	}
}

export default runCommand
