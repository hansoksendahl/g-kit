import { render, Text } from 'ink'

const Index = () => (
	<>
		<Text color="black">black: █</Text>
		<Text color="red">red: █</Text>
		<Text color="green">green: █</Text>
		<Text color="yellow">yellow: █</Text>
		<Text color="blue">blue: █</Text>
		<Text color="cyan">cyan: █</Text>
		<Text color="magenta">magenta: █</Text>
		<Text color="white">white: █</Text>
		<Text color="gray">gray: █</Text>
		<Text color="grey">grey: █</Text>
		<Text color="blackBright">blackBright: █</Text>
		<Text color="redBright">redBright: █</Text>
		<Text color="greenBright">greenBright: █</Text>
		<Text color="yellowBright">yellowBright: █</Text>
		<Text color="blueBright">blueBright: █</Text>
		<Text color="cyanBright">cyanBright: █</Text>
		<Text color="magentaBright">magentaBright: █</Text>
		<Text color="whiteBright">whiteBright: █</Text>
	</>
)

render(<Index />)
