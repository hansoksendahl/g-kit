import { useState } from 'react'
import SelectField from '../../components/select-field'
import TextField from '../../components/text-field'

import type { SelectInputOption } from '../../components/select-input'
import Run from '../../components/run'
import { TYPE_OPTIONS } from './constants'

const IS_BREAKING_CHANGE_OPTIONS: SelectInputOption<boolean>[] = [
	{ label: 'Yes', value: true },
	{ label: 'No', value: false },
]

const GitCommit = () => {
	const [type, setType] = useState<'feat' | 'fix'>()
	const [scope, setScope] = useState<string>()
	const [isBreakingChange, setIsBreakingChange] = useState<boolean>()
	const [description, setDescription] = useState<string>()

	if (type === undefined) {
		return (
			<SelectField options={TYPE_OPTIONS} onSubmit={setType} label="Type" />
		)
	}

	if (scope === undefined) {
		return <TextField onSubmit={setScope} label="Scope" />
	}

	if (isBreakingChange === undefined) {
		return (
			<SelectField
				options={IS_BREAKING_CHANGE_OPTIONS}
				onSubmit={setIsBreakingChange}
				label="Is breaking change?"
			/>
		)
	}

	if (description === undefined) {
		return <TextField onSubmit={setDescription} label="Description" />
	}

	let commitMessage = `${type}(${scope})`

	if (isBreakingChange) commitMessage += '!'

	commitMessage = `'${commitMessage}: ${description}'`

	return <Run command={['git', 'commit', { m: commitMessage }]} />
}

export default GitCommit
