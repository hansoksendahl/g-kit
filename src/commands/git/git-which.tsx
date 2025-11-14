import Run, { type RunProps } from '../../components/run'

type GitWhichProps = Omit<RunProps, 'command'>

const GitWhich = (props: GitWhichProps) => (
	<Run {...props} command={['git', 'branch', { 'show-current': true }]} />
)

export default GitWhich
