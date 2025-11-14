export type ProcessCommandOptionValue = string | number | boolean

export type ProcessCommandOptionDirective = [
	' ' | '=',
	ProcessCommandOptionValue,
]

export type ProcessCommandOption = Record<
	string,
	ProcessCommandOptionValue | ProcessCommandOptionDirective
>

export type ProcessCommandArg = string | number | ProcessCommandOption

const processCommand = (command: string, ...args: ProcessCommandArg[]) => {
	const sequence: [string, ...string[]] = [command]

	for (const arg of args) {
		if (typeof arg === 'object') {
			for (const [key, value] of Object.entries(arg)) {
				const optionKey = key.length === 1 ? `-${key}` : `--${key}`

				if (Array.isArray(value)) {
					const [optionSeparator, optionValue] = value

					sequence.push(`${optionKey}${optionSeparator}${optionValue}`)
				} else {
					if (typeof value === 'boolean') {
						if (value) sequence.push(optionKey)
					} else {
						sequence.push(optionKey, `${value}`)
					}
				}
			}
		} else {
			sequence.push(`${arg}`)
		}
	}

	return sequence
}

export default processCommand
