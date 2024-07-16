import Safe from '@safe-global/protocol-kit'

export async function createSafes(safeConfigurations) {
  const safes = []
  for (const config of safeConfigurations) {
    let safe = await Safe.create({
      ethAdapter: config.ethAdapter,
      safeAddress: config.safeAddress,
    })
    if (config.contractNetworks) {
      safe = await Safe.create({
        ethAdapter: config.ethAdapter,
        safeAddress: config.safeAddress,
        contractNetworks: config.contractNetworks,
      })
    }
    safes.push(safe)
  }
  return safes
}
