import type { SelectInputOption } from '../../components/select-input'

export const TYPE_OPTIONS: SelectInputOption<'feat' | 'fix'>[] = [
	{ label: 'Feature', value: 'feat' },
	{ label: 'Fix', value: 'fix' },
]
