import { Text } from 'ink'
import { useEffect, useState, type ReactNode } from 'react'
import runCommand from '../utils/run-command'
import type { ProcessCommandArg } from '../utils/process-command'
import ErrorText from './error-text'

export type SuccessRenderProp = (response?: string) => ReactNode

export type RunProps = {
	command: [string, ...ProcessCommandArg[]]
	onSuccess?: SuccessRenderProp
}

const Run = ({ command, onSuccess }: RunProps) => {
	const [output, setOutput] = useState<string | null>(null)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const exec = async () => {
			try {
				const response = await runCommand(...command)

				setOutput(response)
			} catch (errorMessage) {
				setError(errorMessage as Error)
			}
		}

		exec()
	}, [])

	return output ? (
		onSuccess ? (
			onSuccess(output)
		) : (
			<Text>{output}</Text>
		)
	) : (
		error && <ErrorText>{error}</ErrorText>
	)
}

export default Run
