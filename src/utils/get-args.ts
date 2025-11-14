import { parseArgs } from 'util'
import type { ParseArgsConfig } from 'util'

const getArgs = <A extends Omit<ParseArgsConfig, 'args'>>(config?: A) =>
	parseArgs({
		args: process.argv,
		allowPositionals: config?.allowPositionals ?? true,
		...config,
	})

export default getArgs
