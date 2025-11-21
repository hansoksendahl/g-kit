import Run from '../../components/run'
import GitWhich from './git-which'

const onSuccess = (branchName?: string) => {
	console.log(branchName)
	return branchName ? (
		<Run command={['git', 'push', 'origin', branchName]} />
	) : null
}

const GitPush = () => <GitWhich onSuccess={onSuccess} />

export default GitPush
