import { Box, Text } from 'ink'
import { useCallback, useState } from 'react'
import TextInput from './text-input'

type FieldProps = {
	defaultValue?: string
	label: string
	onSubmit?: (value: string) => void
}

const TextField = ({ defaultValue = '', label, onSubmit }: FieldProps) => {
	const [value, setValue] = useState(defaultValue)

	const handleSubmit = useCallback(
		(newValue: string) => {
			if (onSubmit) onSubmit(newValue)
		},
		[onSubmit],
	)

	return (
		<Box flexDirection="row">
			<Text bold>{label}: </Text>
			<TextInput value={value} onChange={setValue} onSubmit={handleSubmit} />
		</Box>
	)
}

export default TextField
