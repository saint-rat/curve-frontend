const { exec } = require('child_process')

const Chains = require('./cypress/fixtures/chains.json')
const BASIC_PORT = 8545

const killNode = (chainId) => {
  return new Promise((resolve, reject) => {
    const port = BASIC_PORT + chainId
    const command = `lsof -ti tcp:${port} | xargs kill`

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error killing Chain ID '${chainId}' node at port ${port}: ${stderr}`)
        return
      }
      console.log(`Killed Chain ID '${chainId}' node at port ${port}`)
      resolve(stdout)
    })
  })
}

const main = async () => {
  const args = process.argv.slice(2)
  const networks = args.length > 0 ? args[0].split(',').map(Number) : Object.values(Chains).map(({ id }) => id)

  try {
    await Promise.all(networks.map(killNode))
    console.log('Selected nodes killed successfully.')
  } catch (error) {
    console.error(error)
  }
}

main()
