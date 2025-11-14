import { Box, Text, useInput } from 'ink'
import { useState } from 'react'

export type SelectInputOption<A> = { label: string; value: A }

export type SelectInputProps<A> = {
	isLooping?: boolean
	options: SelectInputOption<A>[]
	onChange?: (value: A) => void
	onSubmit?: (value: A) => void
}

const SelectInput = <A,>({
	isLooping,
	options,
	onChange,
	onSubmit,
}: SelectInputProps<A>) => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const len = options.length
	const lastIndex = len - 1

	useInput((_, key) => {
		if (key.downArrow) {
			setSelectedIndex((prevIndex) => {
				const prevIndexPlusOne = prevIndex + 1
				const nextIndex = isLooping
					? prevIndexPlusOne % len
					: prevIndex < lastIndex
						? prevIndexPlusOne
						: lastIndex

				if (onChange) {
					onChange(options[nextIndex]!.value)
				}

				return nextIndex
			})
		} else if (key.upArrow) {
			setSelectedIndex((prevIndex) => {
				const prevIndexMinusOne = prevIndex - 1
				const nextIndex =
					prevIndexMinusOne < 0
						? isLooping
							? lastIndex
							: 0
						: prevIndexMinusOne

				if (onChange) {
					onChange(options[nextIndex]!.value)
				}

				return nextIndex
			})
		} else if (key.return && onSubmit) {
			onSubmit(options[selectedIndex]!.value)
		}
	})

	return (
		<Box flexDirection="column">
			{options.map(({ label }, index) => (
				<Box key={label} flexDirection="row">
					<Text color="greenBright">
						{index === selectedIndex ? '✓' : ' '}{' '}
					</Text>
					<Text>{label}</Text>
				</Box>
			))}
		</Box>
	)
}

export default SelectInput
