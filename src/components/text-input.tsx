import { Box, type Key, Text, useInput } from 'ink'
import { useCallback, useState } from 'react'
import Cursor from './cursor'

export type TextInputProps = {
	/**
	 * Function to call when the input value changes.
	 */
	onChange: (_: string) => void
	/**
	 * The current value of the input.
	 */
	value: string
	/**
	 * Function to call when the input is submitted.
	 */
	onSubmit?: (_: string) => void
	/**
	 * Function to call on input change with key information.
	 */
	onInput?: (_: string, key: Key) => void
}

/**
 * TextInput component that captures user input and displays a cursor.
 */
const TextInput = ({ value, onChange, onSubmit, onInput }: TextInputProps) => {
	const [cursorPos, setCursorPos] = useState(value.length)
	const prefix = value.slice(0, cursorPos <= value.length ? cursorPos : 0)
	const char = cursorPos < value.length ? value[cursorPos] : undefined
	const suffix = value.slice(cursorPos + 1)

	useInput(
		useCallback(
			(input, key) => {
				if (onInput) onInput(input, key)

				if (key.backspace || key.delete) {
					onChange(`${prefix.slice(0, -1)}${char ?? ''}${suffix}`)
					setCursorPos((prev) => prev - 1)
				} else if (key.return) {
					if (onSubmit) {
						onSubmit(value)
					}
					onChange('')
					setCursorPos(0)
				} else if (key.rightArrow) {
					setCursorPos((prev) => (prev < value.length ? prev + 1 : prev))
				} else if (key.leftArrow) {
					setCursorPos((prev) => (prev > 0 ? prev - 1 : prev))
				} else {
					onChange(`${prefix}${input}${char ?? ''}${suffix}`)
					setCursorPos((prev) => prev + 1)
				}
			},
			[prefix, suffix, char],
		),
	)

	return (
		<Box>
			<Text>{prefix}</Text>
			<Cursor color="white" char={char} />
			<Text>{suffix}</Text>
		</Box>
	)
}

export default TextInput
