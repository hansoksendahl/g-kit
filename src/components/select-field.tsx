import { Box, Text } from 'ink'
import SelectInput, { type SelectInputOption } from './select-input'

type SelectFieldProps<A> = {
	label: string
	onSubmit: (value: A) => void
	options: SelectInputOption<A>[]
}

const SelectField = <A,>({ label, onSubmit, options }: SelectFieldProps<A>) => (
	<Box flexDirection="column">
		<Text bold>{label}:</Text>
		<SelectInput<A> options={options} onSubmit={onSubmit} />
	</Box>
)

export default SelectField
