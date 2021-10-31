/* DO NOT EDIT THE BELOW FILE AS THIS IS LIKELY WILL BE GENERATED AGAIN AND REWRITE OVER IT */

// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable

import * as ethers from "ethers"
// eslint-disable-next-line import/named
import {
  assert,
  schemas,
  // eslint-disable-next-line import/named
  SubscriptionManager,
  // eslint-disable-next-line import/named
  BaseContract,
  // eslint-disable-next-line import/named
  EventCallback,
  // eslint-disable-next-line import/named
  IndexedFilterValues,
  // eslint-disable-next-line import/named
  BlockRange,
  // eslint-disable-next-line import/named
  DecodedLogArgs,
  // eslint-disable-next-line import/named
  LogWithDecodedArgs,
  // eslint-disable-next-line import/named
  MethodAbi
} from "vue-blocklink"

import {
  BatchRequest,
  Extension,
  Log,
  PromiEvent,
  provider,
  Providers,
  RLPEncodedTransaction,
  Transaction,
  TransactionConfig,
  TransactionReceipt,
  Common,
  hardfork,
  chain,
  BlockNumber,
  LogsOptions,
  PastLogsOptions
} from "web3-core"

import { Utils, AbiItem } from "web3-utils"
import Web3 from "web3"
import BN from "BN.js"

// tslint:enable:no-unused-variable
export interface ContractInterface {
    MARGINPOOL_REVISION():Promise<BN>
    MAX_NUMBER_RESERVES():Promise<BN>
    borrow(asset: string,amount: BN,onBehalfOf: string,):Promise<void>
    collateralManager():Promise<string>
    deposit(asset: string,amount: BN,onBehalfOf: string,):Promise<void>
    finalizeTransfer(asset: string,from: string,to: string,amount: BN,balanceFromBefore: BN,balanceToBefore: BN,):Promise<void>
    getAddressesProvider():Promise<string>
    getConfiguration(asset: string,):Promise<{data: BN}>
    getReserveData(asset: string,):Promise<{configuration: {data: BN};liquidityIndex: BN;variableBorrowIndex: BN;currentLiquidityRate: BN;currentVariableBorrowRate: BN;lastUpdateTimestamp: BN;xTokenAddress: string;variableDebtTokenAddress: string;interestRateStrategyAddress: string;id: BN}>
    getReserveNormalizedIncome(asset: string,):Promise<BN>
    getReserveNormalizedVariableDebt(asset: string,):Promise<BN>
    getReservesList():Promise<string[]>
    getUserAccountData(user: string,):Promise<[BN, BN, BN, BN, BN, BN]>
    getUserConfiguration(user: string,):Promise<{data: BN}>
    inchor():Promise<string>
    initReserve(asset: string,xTokenAddress: string,variableDebtAddress: string,interestRateStrategyAddress: string,):Promise<void>
    initialize(provider: string,_uniswaper: string,_sushiSwaper: string,_weth: string,):Promise<void>
    liquidationCall(collateralAsset: string,debtAsset: string,user: string,debtToCover: BN,):Promise<void>
    paused():Promise<boolean>
    releaseStuckAssets(_reserve: string,_to: string,amount: BN,):Promise<void>
    repay(asset: string,amount: BN,onBehalfOf: string,):Promise<BN>
    setBorrowFee(_fee: number|BN,):Promise<void>
    setCollateralManager(_collateralManager: string,):Promise<void>
    setConfiguration(asset: string,configuration: BN,):Promise<void>
    setPause(val: boolean,):Promise<void>
    setReserveInterestRateStrategyAddress(asset: string,rateStrategyAddress: string,):Promise<void>
    setUserUseReserveAsCollateral(asset: string,useAsCollateral: boolean,):Promise<void>
    setWithdrawFee(_fee: number|BN,):Promise<void>
    sushiSwaper():Promise<string>
    swapOrderWithAggregation(order: {maker: string;reserve: string;reserveTo: string;amountIn: BN;amountOut: BN;codes: string;gas: BN;swapType: number|BN;isOpenPosition: boolean},):Promise<boolean>
    swapOrderWithUni(user: string,amountIn: BN,amountOut: BN,path: string[],isOpenPosition: boolean,isUni: boolean,):Promise<boolean>
    swapTokensForTokens(amountIn: BN,amountOut: BN,path: string[],isExactIn: boolean,isOpenPosition: boolean,isUni: boolean,):Promise<void>
    swapWithAggregation(_reserve: string,amount: BN,_reserveTo: string,amountOut: BN,codes: string,gas: BN,swapType: number|BN,isOpenPosition: boolean,):Promise<void>
    uniswaper():Promise<string>
    wethAddress():Promise<string>
    withdraw(asset: string,amount: BN,to: string,):Promise<BN>
}





export enum MarginPoolEvents {
    Borrow = 'Borrow',
    Deposit = 'Deposit',
    LiquidationCall = 'LiquidationCall',
    Paused = 'Paused',
    Repay = 'Repay',
    ReserveDataUpdated = 'ReserveDataUpdated',
    ReserveUsedAsCollateralDisabled = 'ReserveUsedAsCollateralDisabled',
    ReserveUsedAsCollateralEnabled = 'ReserveUsedAsCollateralEnabled',
    Swap = 'Swap',
    Unpaused = 'Unpaused',
    Withdraw = 'Withdraw',
}

export interface MarginPoolBorrowEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BN;
    borrowRate: BN;
}

export interface MarginPoolDepositEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BN;
}

export interface MarginPoolLiquidationCallEventArgs extends DecodedLogArgs {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BN;
    liquidatedCollateralAmount: BN;
    liquidator: string;
}

export interface MarginPoolPausedEventArgs extends DecodedLogArgs {
}

export interface MarginPoolRepayEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
    repayer: string;
    amount: BN;
}

export interface MarginPoolReserveDataUpdatedEventArgs extends DecodedLogArgs {
    reserve: string;
    liquidityRate: BN;
    variableBorrowRate: BN;
    liquidityIndex: BN;
    variableBorrowIndex: BN;
}

export interface MarginPoolReserveUsedAsCollateralDisabledEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
}

export interface MarginPoolReserveUsedAsCollateralEnabledEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
}

export interface MarginPoolSwapEventArgs extends DecodedLogArgs {
    user: string;
    srcReserve: string;
    dstReserve: string;
    srcAmount: BN;
    dstAmount: BN;
}

export interface MarginPoolUnpausedEventArgs extends DecodedLogArgs {
}

export interface MarginPoolWithdrawEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
    to: string;
    amount: BN;
}


export type MarginPoolEventArgs =
    | MarginPoolBorrowEventArgs
    | MarginPoolDepositEventArgs
    | MarginPoolLiquidationCallEventArgs
    | MarginPoolPausedEventArgs
    | MarginPoolRepayEventArgs
    | MarginPoolReserveDataUpdatedEventArgs
    | MarginPoolReserveUsedAsCollateralDisabledEventArgs
    | MarginPoolReserveUsedAsCollateralEnabledEventArgs
    | MarginPoolSwapEventArgs
    | MarginPoolUnpausedEventArgs
    | MarginPoolWithdrawEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MarginPoolContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'MarginPool';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<MarginPoolEventArgs, MarginPoolEvents>;


    public static Instance(): (MarginPoolContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_MarginPool")) {
          // @ts-ignore
          const obj = window.__eth_contract_MarginPool
          if (obj instanceof MarginPoolContract) {
            return (obj) as MarginPoolContract
          } else {
            return (obj) as MarginPoolContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<MarginPoolContract>
    {
        const contractInstance = await new MarginPoolContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_MarginPool")) {
            // @ts-ignore
            window.__eth_contract_MarginPool = contractInstance
        }

        return contractInstance
    }

    /**
     * @returns The contract ABI
     */
    public static ABI(): AbiItem[] {
        const abi = [
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'borrowRate',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Borrow',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Deposit',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'collateralAsset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'debtAsset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'debtToCover',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidatedCollateralAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'LiquidationCall',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                ],
                name: 'Paused',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'repayer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Repay',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'liquidityRate',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'variableBorrowRate',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidityIndex',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'variableBorrowIndex',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveDataUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUsedAsCollateralDisabled',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUsedAsCollateralEnabled',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'srcReserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'dstReserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'srcAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'dstAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Swap',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                ],
                name: 'Unpaused',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Withdraw',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                name: 'MARGINPOOL_REVISION',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'MAX_NUMBER_RESERVES',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'borrow',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'collateralManager',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'deposit',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'from',
                        type: 'address',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'balanceFromBefore',
                        type: 'uint256',
                    },
                    {
                        name: 'balanceToBefore',
                        type: 'uint256',
                    },
                ],
                name: 'finalizeTransfer',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'getAddressesProvider',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'getConfiguration',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'data',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'getReserveData',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'configuration',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'data',
                                        type: 'uint256',
                                    },
                                ]
                            },
                            {
                                name: 'liquidityIndex',
                                type: 'uint128',
                            },
                            {
                                name: 'variableBorrowIndex',
                                type: 'uint128',
                            },
                            {
                                name: 'currentLiquidityRate',
                                type: 'uint128',
                            },
                            {
                                name: 'currentVariableBorrowRate',
                                type: 'uint128',
                            },
                            {
                                name: 'lastUpdateTimestamp',
                                type: 'uint40',
                            },
                            {
                                name: 'xTokenAddress',
                                type: 'address',
                            },
                            {
                                name: 'variableDebtTokenAddress',
                                type: 'address',
                            },
                            {
                                name: 'interestRateStrategyAddress',
                                type: 'address',
                            },
                            {
                                name: 'id',
                                type: 'uint8',
                            },
                        ]
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'getReserveNormalizedIncome',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'getReserveNormalizedVariableDebt',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'getReservesList',
                outputs: [
                    {
                        name: '',
                        type: 'address[]',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'getUserAccountData',
                outputs: [
                    {
                        name: 'totalCollateralETH',
                        type: 'uint256',
                    },
                    {
                        name: 'totalDebtETH',
                        type: 'uint256',
                    },
                    {
                        name: 'availableBorrowsETH',
                        type: 'uint256',
                    },
                    {
                        name: 'currentLiquidationThreshold',
                        type: 'uint256',
                    },
                    {
                        name: 'ltv',
                        type: 'uint256',
                    },
                    {
                        name: 'healthFactor',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'getUserConfiguration',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'data',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'inchor',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'xTokenAddress',
                        type: 'address',
                    },
                    {
                        name: 'variableDebtAddress',
                        type: 'address',
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'initReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
                    {
                        name: '_uniswaper',
                        type: 'address',
                    },
                    {
                        name: '_sushiSwaper',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'initialize',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'collateralAsset',
                        type: 'address',
                    },
                    {
                        name: 'debtAsset',
                        type: 'address',
                    },
                    {
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'debtToCover',
                        type: 'uint256',
                    },
                ],
                name: 'liquidationCall',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'paused',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: '_reserve',
                        type: 'address',
                    },
                    {
                        name: '_to',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'releaseStuckAssets',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'repay',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: '_fee',
                        type: 'uint8',
                    },
                ],
                name: 'setBorrowFee',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: '_collateralManager',
                        type: 'address',
                    },
                ],
                name: 'setCollateralManager',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'configuration',
                        type: 'uint256',
                    },
                ],
                name: 'setConfiguration',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'val',
                        type: 'bool',
                    },
                ],
                name: 'setPause',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'rateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'setReserveInterestRateStrategyAddress',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'useAsCollateral',
                        type: 'bool',
                    },
                ],
                name: 'setUserUseReserveAsCollateral',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: '_fee',
                        type: 'uint8',
                    },
                ],
                name: 'setWithdrawFee',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'sushiSwaper',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'reserve',
                                type: 'address',
                            },
                            {
                                name: 'reserveTo',
                                type: 'address',
                            },
                            {
                                name: 'amountIn',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOut',
                                type: 'uint256',
                            },
                            {
                                name: 'codes',
                                type: 'bytes',
                            },
                            {
                                name: 'gas',
                                type: 'uint256',
                            },
                            {
                                name: 'swapType',
                                type: 'uint8',
                            },
                            {
                                name: 'isOpenPosition',
                                type: 'bool',
                            },
                        ]
                    },
                ],
                name: 'swapOrderWithAggregation',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                    {
                        name: 'isUni',
                        type: 'bool',
                    },
                ],
                name: 'swapOrderWithUni',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'isExactIn',
                        type: 'bool',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                    {
                        name: 'isUni',
                        type: 'bool',
                    },
                ],
                name: 'swapTokensForTokens',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: '_reserve',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: '_reserveTo',
                        type: 'address',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'codes',
                        type: 'bytes',
                    },
                    {
                        name: 'gas',
                        type: 'uint256',
                    },
                    {
                        name: 'swapType',
                        type: 'uint8',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                ],
                name: 'swapWithAggregation',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'uniswaper',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'wethAddress',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                ],
                name: 'withdraw',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async MARGINPOOL_REVISION(): Promise<BN> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.MARGINPOOL_REVISION(
)


        const result = await promizz.call();

        return result;
    };


    public async MARGINPOOL_REVISIONGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.MARGINPOOL_REVISION().estimateGas();
        return gasAmount;
    };


    public async MAX_NUMBER_RESERVES(): Promise<BN> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.MAX_NUMBER_RESERVES(
)


        const result = await promizz.call();

        return result;
    };


    public async MAX_NUMBER_RESERVESGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.MAX_NUMBER_RESERVES().estimateGas();
        return gasAmount;
    };


    public async borrow(asset: string,amount: BN,onBehalfOf: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isString('onBehalfOf', onBehalfOf);

        const promizz = self._contract.methods.borrow(
            asset,
                    amount,
                    onBehalfOf,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async borrowGas(asset: string,amount: BN,onBehalfOf: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.borrow(asset,amount,onBehalfOf,).estimateGas();
        return gasAmount;
    };


    public async collateralManager(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.collateralManager(
)


        const result = await promizz.call();

        return result;
    };


    public async collateralManagerGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.collateralManager().estimateGas();
        return gasAmount;
    };


    public async deposit(asset: string,amount: BN,onBehalfOf: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isString('onBehalfOf', onBehalfOf);

        const promizz = self._contract.methods.deposit(
            asset,
                    amount,
                    onBehalfOf,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async depositGas(asset: string,amount: BN,onBehalfOf: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.deposit(asset,amount,onBehalfOf,).estimateGas();
        return gasAmount;
    };


    public async finalizeTransfer(asset: string,from: string,to: string,amount: BN,balanceFromBefore: BN,balanceToBefore: BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isString('from', from);
            assert.isString('to', to);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('balanceFromBefore', balanceFromBefore);
            assert.isNumberOrBigNumber('balanceToBefore', balanceToBefore);

        const promizz = self._contract.methods.finalizeTransfer(
            asset,
                    from,
                    to,
                    amount,
                    balanceFromBefore,
                    balanceToBefore,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async finalizeTransferGas(asset: string,from: string,to: string,amount: BN,balanceFromBefore: BN,balanceToBefore: BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.finalizeTransfer(asset,from,to,amount,balanceFromBefore,balanceToBefore,).estimateGas();
        return gasAmount;
    };


    public async getAddressesProvider(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.getAddressesProvider(
)


        const result = await promizz.call();

        return result;
    };


    public async getAddressesProviderGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getAddressesProvider().estimateGas();
        return gasAmount;
    };


    public async getConfiguration(asset: string,): Promise<{data: BN}> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getConfiguration(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getConfigurationGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getConfiguration(asset,).estimateGas();
        return gasAmount;
    };


    public async getReserveData(asset: string,): Promise<{configuration: {data: BN};liquidityIndex: BN;variableBorrowIndex: BN;currentLiquidityRate: BN;currentVariableBorrowRate: BN;lastUpdateTimestamp: BN;xTokenAddress: string;variableDebtTokenAddress: string;interestRateStrategyAddress: string;id: BN}> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getReserveData(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getReserveDataGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getReserveData(asset,).estimateGas();
        return gasAmount;
    };


    public async getReserveNormalizedIncome(asset: string,): Promise<BN> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getReserveNormalizedIncome(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getReserveNormalizedIncomeGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getReserveNormalizedIncome(asset,).estimateGas();
        return gasAmount;
    };


    public async getReserveNormalizedVariableDebt(asset: string,): Promise<BN> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getReserveNormalizedVariableDebt(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getReserveNormalizedVariableDebtGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getReserveNormalizedVariableDebt(asset,).estimateGas();
        return gasAmount;
    };


    public async getReservesList(): Promise<string[]> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.getReservesList(
)


        const result = await promizz.call();

        return result;
    };


    public async getReservesListGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getReservesList().estimateGas();
        return gasAmount;
    };


    public async getUserAccountData(user: string,): Promise<[BN, BN, BN, BN, BN, BN]> {
        const self = this as any as MarginPoolContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.getUserAccountData(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async getUserAccountDataGas(user: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getUserAccountData(user,).estimateGas();
        return gasAmount;
    };


    public async getUserConfiguration(user: string,): Promise<{data: BN}> {
        const self = this as any as MarginPoolContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.getUserConfiguration(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async getUserConfigurationGas(user: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.getUserConfiguration(user,).estimateGas();
        return gasAmount;
    };


    public async inchor(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.inchor(
)


        const result = await promizz.call();

        return result;
    };


    public async inchorGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.inchor().estimateGas();
        return gasAmount;
    };


    public async initReserve(asset: string,xTokenAddress: string,variableDebtAddress: string,interestRateStrategyAddress: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isString('xTokenAddress', xTokenAddress);
            assert.isString('variableDebtAddress', variableDebtAddress);
            assert.isString('interestRateStrategyAddress', interestRateStrategyAddress);

        const promizz = self._contract.methods.initReserve(
            asset,
                    xTokenAddress,
                    variableDebtAddress,
                    interestRateStrategyAddress,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async initReserveGas(asset: string,xTokenAddress: string,variableDebtAddress: string,interestRateStrategyAddress: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.initReserve(asset,xTokenAddress,variableDebtAddress,interestRateStrategyAddress,).estimateGas();
        return gasAmount;
    };


    public async initialize(provider: string,_uniswaper: string,_sushiSwaper: string,_weth: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('provider', provider);
            assert.isString('_uniswaper', _uniswaper);
            assert.isString('_sushiSwaper', _sushiSwaper);
            assert.isString('_weth', _weth);

        const promizz = self._contract.methods.initialize(
            provider,
                    _uniswaper,
                    _sushiSwaper,
                    _weth,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async initializeGas(provider: string,_uniswaper: string,_sushiSwaper: string,_weth: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.initialize(provider,_uniswaper,_sushiSwaper,_weth,).estimateGas();
        return gasAmount;
    };


    public async liquidationCall(collateralAsset: string,debtAsset: string,user: string,debtToCover: BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('collateralAsset', collateralAsset);
            assert.isString('debtAsset', debtAsset);
            assert.isString('user', user);
            assert.isNumberOrBigNumber('debtToCover', debtToCover);

        const promizz = self._contract.methods.liquidationCall(
            collateralAsset,
                    debtAsset,
                    user,
                    debtToCover,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async liquidationCallGas(collateralAsset: string,debtAsset: string,user: string,debtToCover: BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.liquidationCall(collateralAsset,debtAsset,user,debtToCover,).estimateGas();
        return gasAmount;
    };


    public async paused(): Promise<boolean> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.paused(
)


        const result = await promizz.call();

        return result;
    };


    public async pausedGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.paused().estimateGas();
        return gasAmount;
    };


    public async releaseStuckAssets(_reserve: string,_to: string,amount: BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('_reserve', _reserve);
            assert.isString('_to', _to);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.releaseStuckAssets(
            _reserve,
                    _to,
                    amount,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async releaseStuckAssetsGas(_reserve: string,_to: string,amount: BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.releaseStuckAssets(_reserve,_to,amount,).estimateGas();
        return gasAmount;
    };


    public async repay(asset: string,amount: BN,onBehalfOf: string,): Promise<BN> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isString('onBehalfOf', onBehalfOf);

        const promizz = self._contract.methods.repay(
            asset,
                    amount,
                    onBehalfOf,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async repayGas(asset: string,amount: BN,onBehalfOf: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.repay(asset,amount,onBehalfOf,).estimateGas();
        return gasAmount;
    };


    public async setBorrowFee(_fee: number|BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isNumberOrBigNumber('_fee', _fee);

        const promizz = self._contract.methods.setBorrowFee(
            _fee,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setBorrowFeeGas(_fee: number|BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setBorrowFee(_fee,).estimateGas();
        return gasAmount;
    };


    public async setCollateralManager(_collateralManager: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('_collateralManager', _collateralManager);

        const promizz = self._contract.methods.setCollateralManager(
            _collateralManager,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setCollateralManagerGas(_collateralManager: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setCollateralManager(_collateralManager,).estimateGas();
        return gasAmount;
    };


    public async setConfiguration(asset: string,configuration: BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('configuration', configuration);

        const promizz = self._contract.methods.setConfiguration(
            asset,
                    configuration,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setConfigurationGas(asset: string,configuration: BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setConfiguration(asset,configuration,).estimateGas();
        return gasAmount;
    };


    public async setPause(val: boolean,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isBoolean('val', val);

        const promizz = self._contract.methods.setPause(
            val,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setPauseGas(val: boolean,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setPause(val,).estimateGas();
        return gasAmount;
    };


    public async setReserveInterestRateStrategyAddress(asset: string,rateStrategyAddress: string,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isString('rateStrategyAddress', rateStrategyAddress);

        const promizz = self._contract.methods.setReserveInterestRateStrategyAddress(
            asset,
                    rateStrategyAddress,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setReserveInterestRateStrategyAddressGas(asset: string,rateStrategyAddress: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setReserveInterestRateStrategyAddress(asset,rateStrategyAddress,).estimateGas();
        return gasAmount;
    };


    public async setUserUseReserveAsCollateral(asset: string,useAsCollateral: boolean,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isBoolean('useAsCollateral', useAsCollateral);

        const promizz = self._contract.methods.setUserUseReserveAsCollateral(
            asset,
                    useAsCollateral,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setUserUseReserveAsCollateralGas(asset: string,useAsCollateral: boolean,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setUserUseReserveAsCollateral(asset,useAsCollateral,).estimateGas();
        return gasAmount;
    };


    public async setWithdrawFee(_fee: number|BN,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isNumberOrBigNumber('_fee', _fee);

        const promizz = self._contract.methods.setWithdrawFee(
            _fee,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async setWithdrawFeeGas(_fee: number|BN,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.setWithdrawFee(_fee,).estimateGas();
        return gasAmount;
    };


    public async sushiSwaper(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.sushiSwaper(
)


        const result = await promizz.call();

        return result;
    };


    public async sushiSwaperGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.sushiSwaper().estimateGas();
        return gasAmount;
    };


    public async swapOrderWithAggregation(order: {maker: string;reserve: string;reserveTo: string;amountIn: BN;amountOut: BN;codes: string;gas: BN;swapType: number|BN;isOpenPosition: boolean},): Promise<boolean> {
        const self = this as any as MarginPoolContract;

            

        const promizz = self._contract.methods.swapOrderWithAggregation(
            order,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async swapOrderWithAggregationGas(order: {maker: string;reserve: string;reserveTo: string;amountIn: BN;amountOut: BN;codes: string;gas: BN;swapType: number|BN;isOpenPosition: boolean},): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.swapOrderWithAggregation(order,).estimateGas();
        return gasAmount;
    };


    public async swapOrderWithUni(user: string,amountIn: BN,amountOut: BN,path: string[],isOpenPosition: boolean,isUni: boolean,): Promise<boolean> {
        const self = this as any as MarginPoolContract;

            assert.isString('user', user);
            assert.isNumberOrBigNumber('amountIn', amountIn);
            assert.isNumberOrBigNumber('amountOut', amountOut);
            assert.isArray('path', path);
            assert.isBoolean('isOpenPosition', isOpenPosition);
            assert.isBoolean('isUni', isUni);

        const promizz = self._contract.methods.swapOrderWithUni(
            user,
                    amountIn,
                    amountOut,
                    path,
                    isOpenPosition,
                    isUni,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async swapOrderWithUniGas(user: string,amountIn: BN,amountOut: BN,path: string[],isOpenPosition: boolean,isUni: boolean,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.swapOrderWithUni(user,amountIn,amountOut,path,isOpenPosition,isUni,).estimateGas();
        return gasAmount;
    };


    public async swapTokensForTokens(amountIn: BN,amountOut: BN,path: string[],isExactIn: boolean,isOpenPosition: boolean,isUni: boolean,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isNumberOrBigNumber('amountIn', amountIn);
            assert.isNumberOrBigNumber('amountOut', amountOut);
            assert.isArray('path', path);
            assert.isBoolean('isExactIn', isExactIn);
            assert.isBoolean('isOpenPosition', isOpenPosition);
            assert.isBoolean('isUni', isUni);

        const promizz = self._contract.methods.swapTokensForTokens(
            amountIn,
                    amountOut,
                    path,
                    isExactIn,
                    isOpenPosition,
                    isUni,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async swapTokensForTokensGas(amountIn: BN,amountOut: BN,path: string[],isExactIn: boolean,isOpenPosition: boolean,isUni: boolean,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.swapTokensForTokens(amountIn,amountOut,path,isExactIn,isOpenPosition,isUni,).estimateGas();
        return gasAmount;
    };


    public async swapWithAggregation(_reserve: string,amount: BN,_reserveTo: string,amountOut: BN,codes: string,gas: BN,swapType: number|BN,isOpenPosition: boolean,): Promise<void> {
        const self = this as any as MarginPoolContract;

            assert.isString('_reserve', _reserve);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isString('_reserveTo', _reserveTo);
            assert.isNumberOrBigNumber('amountOut', amountOut);
            assert.isString('codes', codes);
            assert.isNumberOrBigNumber('gas', gas);
            assert.isNumberOrBigNumber('swapType', swapType);
            assert.isBoolean('isOpenPosition', isOpenPosition);

        const promizz = self._contract.methods.swapWithAggregation(
            _reserve,
                    amount,
                    _reserveTo,
                    amountOut,
                    codes,
                    gas,
                    swapType,
                    isOpenPosition,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async swapWithAggregationGas(_reserve: string,amount: BN,_reserveTo: string,amountOut: BN,codes: string,gas: BN,swapType: number|BN,isOpenPosition: boolean,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.swapWithAggregation(_reserve,amount,_reserveTo,amountOut,codes,gas,swapType,isOpenPosition,).estimateGas();
        return gasAmount;
    };


    public async uniswaper(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.uniswaper(
)


        const result = await promizz.call();

        return result;
    };


    public async uniswaperGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.uniswaper().estimateGas();
        return gasAmount;
    };


    public async wethAddress(): Promise<string> {
        const self = this as any as MarginPoolContract;


        const promizz = self._contract.methods.wethAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async wethAddressGas(): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.wethAddress().estimateGas();
        return gasAmount;
    };


    public async withdraw(asset: string,amount: BN,to: string,): Promise<BN> {
        const self = this as any as MarginPoolContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isString('to', to);

        const promizz = self._contract.methods.withdraw(
            asset,
                    amount,
                    to,
        )


const result = await promizz.send({
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        }).on('transactionHash', (hash) => {
            this.onBroadcast(hash);
        }).on('confirmation', (confirmationNumber, receipt) => {
            this.onConfirmation(receipt);
        }).on('receipt', (r) => {
            this.pushReceiptSuccess(r);
        }).on('error', (error, receipt) => {
            this.onError(receipt, error);
        }).catch((e) => {
            this.catchErro(e)
        });

        return result;
    };


    public async withdrawGas(asset: string,amount: BN,to: string,): Promise<number>{
        const self = this as any as MarginPoolContract;
        const gasAmount = await self._contract.methods.withdraw(asset,amount,to,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the MarginPool contract.
     * @param eventName The MarginPool contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends MarginPoolEventArgs>(
        eventName: MarginPoolEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            MarginPoolContract.ABI(),
            callback,
            isVerbose,
            blockPollingIntervalMs,
        );
        return subscriptionToken;
    }

    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    public unsubscribe(subscriptionToken: string): void {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }

    /**
     * Cancels all existing subscriptions
     */
    public unsubscribeAll(): void {
        this._subscriptionManager.unsubscribeAll();
    }


    /**
     * Gets historical logs without creating a subscription
     * @param eventName The MarginPool contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends MarginPoolEventArgs>(
        eventName: MarginPoolEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            MarginPoolContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('MarginPool', MarginPoolContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            MarginPoolContract.ABI(),
            supportedProvider,
        );

        MarginPoolContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item as MethodAbi;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });


    }
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
