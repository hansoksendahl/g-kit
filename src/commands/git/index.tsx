import { render } from 'ink'
import getArgs from '../../utils/get-args'
import GitWhich from './git-which'
import GitAddAll from './git-add-all'
import GitCommit from './git-commit'
import GitBranch from './git-branch'

const {
	positionals: [_dir, _file, command],
} = getArgs()

const Git = () => {
	switch (command) {
		case 'add-all': {
			return <GitAddAll />
		}
		case 'commit': {
			return <GitCommit />
		}
		case 'branch': {
			return <GitBranch />
		}
		case 'which': {
			return <GitWhich />
		}
		default: {
			return null
		}
	}
}

render(<Git />)
