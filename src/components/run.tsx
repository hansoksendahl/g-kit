import { Text } from 'ink'
import { useEffect, useState, type ReactElement } from 'react'
import runCommand from '../utils/run-command'
import type { ProcessCommandArg } from '../utils/process-command'
import ErrorText from './error-text'

export type SuccessRenderProp = (response?: string) => ReactElement

export type RunProps<A extends SuccessRenderProp> = {
	command: [string, ...ProcessCommandArg[]]
	onSuccess?: A
}

const Run = <A extends SuccessRenderProp>({
	command,
	onSuccess,
}: RunProps<A>) => {
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
			<Text>{output.slice(0, -1)}</Text>
		)
	) : (
		error && <ErrorText>{error}</ErrorText>
	)
}

export default Run
