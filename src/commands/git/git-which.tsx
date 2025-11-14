import Run from '../../components/run'

const GitWhich = () => (
	<Run command={['git', 'branch', { 'show-current': true }]} />
)

export default GitWhich
