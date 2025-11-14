import { useState } from 'react'
import { TYPE_OPTIONS } from './constants'
import SelectField from '../../components/select-field'
import TextField from '../../components/text-field'
import Run from '../../components/run'

export type BranchType = 'feat' | 'fix'

const GitBranch = () => {
	const [type, setType] = useState<BranchType>()
	const [scope, setScope] = useState<string>()
	const [description, setDescription] = useState<string>()

	if (type === undefined) {
		return (
			<SelectField options={TYPE_OPTIONS} onSubmit={setType} label="Type" />
		)
	}

	if (scope === undefined) {
		return <TextField onSubmit={setScope} label="Scope" />
	}

	if (description === undefined) {
		return <TextField onSubmit={setDescription} label="Description" />
	}

	const formattedDescription = description.toLowerCase().replace(/\s+/g, '-')
	const branchName = `${type}/${scope}/${formattedDescription}`

	return <Run command={['git', 'checkout', { b: branchName }]} />
}

export default GitBranch
