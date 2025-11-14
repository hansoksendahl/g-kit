import { Text } from 'ink'

type ErrorTextProps = {
	children: Error
}

const ErrorText = ({ children }: ErrorTextProps) => (
	<>
		<Text color="brightRed" bold>
			{children.name}
		</Text>
		<Text color="red">{children.message}</Text>
	</>
)

export default ErrorText
