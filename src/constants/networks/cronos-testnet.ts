import { ChainId } from '@kyberswap/ks-sdk-core'

import CRONOS_DARK from 'assets/networks/cronos-network-dark.svg'
import CRONOS from 'assets/networks/cronos-network.svg'
import CronosLogo from 'assets/svg/cronos-token-logo.svg'
import { KS_SETTING_API } from 'constants/env'
import { EVMNetworkInfo } from 'constants/networks/type'
import { createClient } from 'utils/client'

const EMPTY = ''
const EMPTY_ARRAY: any[] = []
const NOT_SUPPORT = null

const cronosTestnetInfo: EVMNetworkInfo = {
  chainId: ChainId.CRONOSTESTNET,
  route: 'cronos-testnet',
  ksSettingRoute: 'cronos',
  priceRoute: 'cronos',
  poolFarmRoute: EMPTY,
  name: 'Cronos Testnet',
  icon: CRONOS,
  iconDark: CRONOS_DARK,
  iconDarkSelected: CRONOS,
  iconSelected: NOT_SUPPORT,
  classicClient: createClient(
    'https://testnet-cronos-subgraph.knstats.com/subgraphs/name/dynamic-amm/dmm-exchange-cronos-testnet',
  ),

  elasticClient: createClient(
    'https://cronos-graph.kyberengineering.io/subgraphs/name/kybernetwork/kyberswap-elastic-cronos',
  ), //todo: not exits yet
  blockClient: createClient(
    'https://testnet-cronos-subgraph.knstats.com/subgraphs/name/dynamic-amm/ethereum-blocks-cronos-testnet',
  ),
  etherscanUrl: 'https://cronos.org/explorer/testnet3',
  etherscanName: 'Cronos explorer',
  tokenListUrl: `${KS_SETTING_API}/v1/tokens?chainIds=${ChainId.CRONOSTESTNET}&isWhitelisted=${true}`,
  bridgeURL: 'https://cronos.crypto.org/docs/bridge/cdcapp.html',
  nativeToken: {
    symbol: 'CRO',
    name: 'CRO',
    logo: CronosLogo,
    decimal: 18,
    minForGas: 10 ** 16,
  },
  rpcUrl: 'https://cronos-testnet-3.crypto.org:8545',
  routerUri: EMPTY,
  multicall: '0x5AC76EDddf2590Af31dEE348A0d9e45e12511EB0',
  classic: {
    static: {
      zap: EMPTY,
      router: EMPTY,
      factory: EMPTY,
    },
    oldStatic: NOT_SUPPORT,
    dynamic: {
      zap: EMPTY,
      router: '0x548E585B17908D0387d16F9BFf46c4EDe7ca7746',
      factory: '0x9fE747AEA6173DD2c72e9D9BF4E2bCbbC0f8aD9e',
    },
    claimReward: NOT_SUPPORT,
    fairlaunch: EMPTY_ARRAY,
    fairlaunchV2: EMPTY_ARRAY,
  },
  elastic: {
    coreFactory: '0x5F1dddbf348aC2fbe22a163e30F99F9ECE3DD50a',
    nonfungiblePositionManager: '0x2B1c7b41f6A8F2b2bc45C3233a5d5FB3cD6dC9A8',
    tickReader: '0xe3AC3fd66EB31cAf4EE0831b262D837c479FFCe5',
    initCodeHash: '0xc597aba1bb02db42ba24a8878837965718c032f8b46be94a6e46452a9f89ca01',
    quoter: '0x0D125c15D54cA1F8a813C74A81aEe34ebB508C1f',
    routers: '0xC1e7dFE73E1598E3910EF4C7845B68A9Ab6F4c83',
    farms: [],
  },
  averageBlockTimeInSeconds: 5.6,
  coingeckoNetworkId: 'cronos',
  coingeckoNativeTokenId: 'crypto-com-chain',
  deBankSlug: EMPTY,
  trueSightId: NOT_SUPPORT,
  dexToCompare: NOT_SUPPORT,
}

export default cronosTestnetInfo
