/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

// const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
//   result[shortName] = chainId.toString()
//   return result
// }, {})

const chains: Record<string, string> = {
  eth: '1',
  matic: '137',
  algen: '8911',
  algenL2: '8921',
  algenTest: '8912',
  algenL2Test: '8922',
}

export default chains
