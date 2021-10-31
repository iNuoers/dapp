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
    _become(unitroller: string,_oracle: string,_closeFactorMantissa: BN,_maxAssets: BN,reinitializing: boolean,):Promise<void>
    _setCloseFactor(newCloseFactorMantissa: BN,):Promise<BN>
    _setCollateralFactor(cToken: string,newCollateralFactorMantissa: BN,):Promise<BN>
    _setLiquidationIncentive(newLiquidationIncentiveMantissa: BN,):Promise<BN>
    _setMaxAssets(newMaxAssets: BN,):Promise<BN>
    _setPriceOracle(newOracle: string,):Promise<BN>
    _supportMarket(cToken: string,):Promise<BN>
    accountAssets(index_0: string,index_1: BN,):Promise<string>
    admin():Promise<string>
    borrowAllowed(cToken: string,borrower: string,borrowAmount: BN,):Promise<BN>
    borrowVerify(cToken: string,borrower: string,borrowAmount: BN,):Promise<void>
    checkMembership(account: string,cToken: string,):Promise<boolean>
    closeFactorMantissa():Promise<BN>
    comptrollerImplementation():Promise<string>
    enterMarkets(cTokens: string[],):Promise<BN[]>
    exitMarket(cTokenAddress: string,):Promise<BN>
    getAccountLiquidity(account: string,):Promise<[BN, BN, BN]>
    getAssetsIn(account: string,):Promise<string[]>
    isComptroller():Promise<boolean>
    liquidateBorrowAllowed(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,):Promise<BN>
    liquidateBorrowVerify(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,seizeTokens: BN,):Promise<void>
    liquidateCalculateSeizeTokens(cTokenBorrowed: string,cTokenCollateral: string,repayAmount: BN,):Promise<[BN, BN]>
    liquidationIncentiveMantissa():Promise<BN>
    markets(index_0: string,):Promise<[boolean, BN]>
    maxAssets():Promise<BN>
    mintAllowed(cToken: string,minter: string,mintAmount: BN,):Promise<BN>
    mintVerify(cToken: string,minter: string,mintAmount: BN,mintTokens: BN,):Promise<void>
    oracle():Promise<string>
    pendingAdmin():Promise<string>
    pendingComptrollerImplementation():Promise<string>
    redeemAllowed(cToken: string,redeemer: string,redeemTokens: BN,):Promise<BN>
    redeemVerify(cToken: string,redeemer: string,redeemAmount: BN,redeemTokens: BN,):Promise<void>
    repayBorrowAllowed(cToken: string,payer: string,borrower: string,repayAmount: BN,):Promise<BN>
    repayBorrowVerify(cToken: string,payer: string,borrower: string,repayAmount: BN,borrowerIndex: BN,):Promise<void>
    seizeAllowed(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,):Promise<BN>
    seizeVerify(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,):Promise<void>
    transferAllowed(cToken: string,src: string,dst: string,transferTokens: BN,):Promise<BN>
    transferVerify(cToken: string,src: string,dst: string,transferTokens: BN,):Promise<void>
}





export enum ComptrollerEvents {
    Failure = 'Failure',
    MarketEntered = 'MarketEntered',
    MarketExited = 'MarketExited',
    MarketListed = 'MarketListed',
    NewCloseFactor = 'NewCloseFactor',
    NewCollateralFactor = 'NewCollateralFactor',
    NewLiquidationIncentive = 'NewLiquidationIncentive',
    NewMaxAssets = 'NewMaxAssets',
    NewPriceOracle = 'NewPriceOracle',
}

export interface ComptrollerFailureEventArgs extends DecodedLogArgs {
    error: BN;
    info: BN;
    detail: BN;
}

export interface ComptrollerMarketEnteredEventArgs extends DecodedLogArgs {
    cToken: string;
    account: string;
}

export interface ComptrollerMarketExitedEventArgs extends DecodedLogArgs {
    cToken: string;
    account: string;
}

export interface ComptrollerMarketListedEventArgs extends DecodedLogArgs {
    cToken: string;
}

export interface ComptrollerNewCloseFactorEventArgs extends DecodedLogArgs {
    oldCloseFactorMantissa: BN;
    newCloseFactorMantissa: BN;
}

export interface ComptrollerNewCollateralFactorEventArgs extends DecodedLogArgs {
    cToken: string;
    oldCollateralFactorMantissa: BN;
    newCollateralFactorMantissa: BN;
}

export interface ComptrollerNewLiquidationIncentiveEventArgs extends DecodedLogArgs {
    oldLiquidationIncentiveMantissa: BN;
    newLiquidationIncentiveMantissa: BN;
}

export interface ComptrollerNewMaxAssetsEventArgs extends DecodedLogArgs {
    oldMaxAssets: BN;
    newMaxAssets: BN;
}

export interface ComptrollerNewPriceOracleEventArgs extends DecodedLogArgs {
    oldPriceOracle: string;
    newPriceOracle: string;
}


export type ComptrollerEventArgs =
    | ComptrollerFailureEventArgs
    | ComptrollerMarketEnteredEventArgs
    | ComptrollerMarketExitedEventArgs
    | ComptrollerMarketListedEventArgs
    | ComptrollerNewCloseFactorEventArgs
    | ComptrollerNewCollateralFactorEventArgs
    | ComptrollerNewLiquidationIncentiveEventArgs
    | ComptrollerNewMaxAssetsEventArgs
    | ComptrollerNewPriceOracleEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ComptrollerContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'Comptroller';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<ComptrollerEventArgs, ComptrollerEvents>;


    public static Instance(): (ComptrollerContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_Comptroller")) {
          // @ts-ignore
          const obj = window.__eth_contract_Comptroller
          if (obj instanceof ComptrollerContract) {
            return (obj) as ComptrollerContract
          } else {
            return (obj) as ComptrollerContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<ComptrollerContract>
    {
        const contractInstance = await new ComptrollerContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_Comptroller")) {
            // @ts-ignore
            window.__eth_contract_Comptroller = contractInstance
        }

        return contractInstance
    }

    /**
     * @returns The contract ABI
     */
    public static ABI(): AbiItem[] {
        const abi = [
            { 
                inputs: [
                ],
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'error',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'info',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'detail',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Failure',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'account',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketEntered',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'account',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketExited',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketListed',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'oldCloseFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newCloseFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewCloseFactor',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'oldCollateralFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newCollateralFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewCollateralFactor',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'oldLiquidationIncentiveMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newLiquidationIncentiveMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewLiquidationIncentive',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'oldMaxAssets',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newMaxAssets',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewMaxAssets',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'oldPriceOracle',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'newPriceOracle',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'NewPriceOracle',
                outputs: [
                ],
                type: 'event',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'unitroller',
                        type: 'address',
                    },
                    {
                        name: '_oracle',
                        type: 'address',
                    },
                    {
                        name: '_closeFactorMantissa',
                        type: 'uint256',
                    },
                    {
                        name: '_maxAssets',
                        type: 'uint256',
                    },
                    {
                        name: 'reinitializing',
                        type: 'bool',
                    },
                ],
                name: '_become',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'newCloseFactorMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setCloseFactor',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'newCollateralFactorMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setCollateralFactor',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'newLiquidationIncentiveMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setLiquidationIncentive',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'newMaxAssets',
                        type: 'uint256',
                    },
                ],
                name: '_setMaxAssets',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'newOracle',
                        type: 'address',
                    },
                ],
                name: '_setPriceOracle',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: '_supportMarket',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                    {
                        name: 'index_1',
                        type: 'uint256',
                    },
                ],
                name: 'accountAssets',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'admin',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'borrowAmount',
                        type: 'uint256',
                    },
                ],
                name: 'borrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'borrowAmount',
                        type: 'uint256',
                    },
                ],
                name: 'borrowVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: 'checkMembership',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'closeFactorMantissa',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'comptrollerImplementation',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokens',
                        type: 'address[]',
                    },
                ],
                name: 'enterMarkets',
                outputs: [
                    {
                        name: '',
                        type: 'uint256[]',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokenAddress',
                        type: 'address',
                    },
                ],
                name: 'exitMarket',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'getAccountLiquidity',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'getAssetsIn',
                outputs: [
                    {
                        name: '',
                        type: 'address[]',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'isComptroller',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateBorrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateBorrowVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateCalculateSeizeTokens',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'liquidationIncentiveMantissa',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'markets',
                outputs: [
                    {
                        name: 'isListed',
                        type: 'bool',
                    },
                    {
                        name: 'collateralFactorMantissa',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'maxAssets',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'minter',
                        type: 'address',
                    },
                    {
                        name: 'mintAmount',
                        type: 'uint256',
                    },
                ],
                name: 'mintAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'minter',
                        type: 'address',
                    },
                    {
                        name: 'mintAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'mintTokens',
                        type: 'uint256',
                    },
                ],
                name: 'mintVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'oracle',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'pendingAdmin',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'pendingComptrollerImplementation',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'redeemer',
                        type: 'address',
                    },
                    {
                        name: 'redeemTokens',
                        type: 'uint256',
                    },
                ],
                name: 'redeemAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'redeemer',
                        type: 'address',
                    },
                    {
                        name: 'redeemAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'redeemTokens',
                        type: 'uint256',
                    },
                ],
                name: 'redeemVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'payer',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'repayBorrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'payer',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'borrowerIndex',
                        type: 'uint256',
                    },
                ],
                name: 'repayBorrowVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'seizeAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'seizeVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'transferTokens',
                        type: 'uint256',
                    },
                ],
                name: 'transferAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'transferTokens',
                        type: 'uint256',
                    },
                ],
                name: 'transferVerify',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async _become(unitroller: string,_oracle: string,_closeFactorMantissa: BN,_maxAssets: BN,reinitializing: boolean,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('unitroller', unitroller);
            assert.isString('_oracle', _oracle);
            assert.isNumberOrBigNumber('_closeFactorMantissa', _closeFactorMantissa);
            assert.isNumberOrBigNumber('_maxAssets', _maxAssets);
            assert.isBoolean('reinitializing', reinitializing);

        const promizz = self._contract.methods._become(
            unitroller,
                    _oracle,
                    _closeFactorMantissa,
                    _maxAssets,
                    reinitializing,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _becomeGas(unitroller: string,_oracle: string,_closeFactorMantissa: BN,_maxAssets: BN,reinitializing: boolean,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._become(unitroller,_oracle,_closeFactorMantissa,_maxAssets,reinitializing,).estimateGas();
        return gasAmount;
    };


    public async _setCloseFactor(newCloseFactorMantissa: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isNumberOrBigNumber('newCloseFactorMantissa', newCloseFactorMantissa);

        const promizz = self._contract.methods._setCloseFactor(
            newCloseFactorMantissa,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _setCloseFactorGas(newCloseFactorMantissa: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._setCloseFactor(newCloseFactorMantissa,).estimateGas();
        return gasAmount;
    };


    public async _setCollateralFactor(cToken: string,newCollateralFactorMantissa: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isNumberOrBigNumber('newCollateralFactorMantissa', newCollateralFactorMantissa);

        const promizz = self._contract.methods._setCollateralFactor(
            cToken,
                    newCollateralFactorMantissa,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _setCollateralFactorGas(cToken: string,newCollateralFactorMantissa: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._setCollateralFactor(cToken,newCollateralFactorMantissa,).estimateGas();
        return gasAmount;
    };


    public async _setLiquidationIncentive(newLiquidationIncentiveMantissa: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isNumberOrBigNumber('newLiquidationIncentiveMantissa', newLiquidationIncentiveMantissa);

        const promizz = self._contract.methods._setLiquidationIncentive(
            newLiquidationIncentiveMantissa,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _setLiquidationIncentiveGas(newLiquidationIncentiveMantissa: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._setLiquidationIncentive(newLiquidationIncentiveMantissa,).estimateGas();
        return gasAmount;
    };


    public async _setMaxAssets(newMaxAssets: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isNumberOrBigNumber('newMaxAssets', newMaxAssets);

        const promizz = self._contract.methods._setMaxAssets(
            newMaxAssets,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _setMaxAssetsGas(newMaxAssets: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._setMaxAssets(newMaxAssets,).estimateGas();
        return gasAmount;
    };


    public async _setPriceOracle(newOracle: string,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('newOracle', newOracle);

        const promizz = self._contract.methods._setPriceOracle(
            newOracle,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _setPriceOracleGas(newOracle: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._setPriceOracle(newOracle,).estimateGas();
        return gasAmount;
    };


    public async _supportMarket(cToken: string,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);

        const promizz = self._contract.methods._supportMarket(
            cToken,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async _supportMarketGas(cToken: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods._supportMarket(cToken,).estimateGas();
        return gasAmount;
    };


    public async accountAssets(index_0: string,index_1: BN,): Promise<string> {
        const self = this as any as ComptrollerContract;

            assert.isString('index_0', index_0);
            assert.isNumberOrBigNumber('index_1', index_1);

        const promizz = self._contract.methods.accountAssets(
            index_0,
                    index_1,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async accountAssetsGas(index_0: string,index_1: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.accountAssets(index_0,index_1,).estimateGas();
        return gasAmount;
    };


    public async admin(): Promise<string> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.admin(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async adminGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.admin().estimateGas();
        return gasAmount;
    };


    public async borrowAllowed(cToken: string,borrower: string,borrowAmount: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('borrowAmount', borrowAmount);

        const promizz = self._contract.methods.borrowAllowed(
            cToken,
                    borrower,
                    borrowAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async borrowAllowedGas(cToken: string,borrower: string,borrowAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.borrowAllowed(cToken,borrower,borrowAmount,).estimateGas();
        return gasAmount;
    };


    public async borrowVerify(cToken: string,borrower: string,borrowAmount: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('borrowAmount', borrowAmount);

        const promizz = self._contract.methods.borrowVerify(
            cToken,
                    borrower,
                    borrowAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async borrowVerifyGas(cToken: string,borrower: string,borrowAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.borrowVerify(cToken,borrower,borrowAmount,).estimateGas();
        return gasAmount;
    };


    public async checkMembership(account: string,cToken: string,): Promise<boolean> {
        const self = this as any as ComptrollerContract;

            assert.isString('account', account);
            assert.isString('cToken', cToken);

        const promizz = self._contract.methods.checkMembership(
            account,
                    cToken,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async checkMembershipGas(account: string,cToken: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.checkMembership(account,cToken,).estimateGas();
        return gasAmount;
    };


    public async closeFactorMantissa(): Promise<BN> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.closeFactorMantissa(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async closeFactorMantissaGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.closeFactorMantissa().estimateGas();
        return gasAmount;
    };


    public async comptrollerImplementation(): Promise<string> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.comptrollerImplementation(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async comptrollerImplementationGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.comptrollerImplementation().estimateGas();
        return gasAmount;
    };


    public async enterMarkets(cTokens: string[],): Promise<BN[]> {
        const self = this as any as ComptrollerContract;

            assert.isArray('cTokens', cTokens);

        const promizz = self._contract.methods.enterMarkets(
            cTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async enterMarketsGas(cTokens: string[],): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.enterMarkets(cTokens,).estimateGas();
        return gasAmount;
    };


    public async exitMarket(cTokenAddress: string,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenAddress', cTokenAddress);

        const promizz = self._contract.methods.exitMarket(
            cTokenAddress,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async exitMarketGas(cTokenAddress: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.exitMarket(cTokenAddress,).estimateGas();
        return gasAmount;
    };


    public async getAccountLiquidity(account: string,): Promise<[BN, BN, BN]> {
        const self = this as any as ComptrollerContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.getAccountLiquidity(
            account,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getAccountLiquidityGas(account: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.getAccountLiquidity(account,).estimateGas();
        return gasAmount;
    };


    public async getAssetsIn(account: string,): Promise<string[]> {
        const self = this as any as ComptrollerContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.getAssetsIn(
            account,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getAssetsInGas(account: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.getAssetsIn(account,).estimateGas();
        return gasAmount;
    };


    public async isComptroller(): Promise<boolean> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.isComptroller(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isComptrollerGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.isComptroller().estimateGas();
        return gasAmount;
    };


    public async liquidateBorrowAllowed(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenBorrowed', cTokenBorrowed);
            assert.isString('cTokenCollateral', cTokenCollateral);
            assert.isString('liquidator', liquidator);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('repayAmount', repayAmount);

        const promizz = self._contract.methods.liquidateBorrowAllowed(
            cTokenBorrowed,
                    cTokenCollateral,
                    liquidator,
                    borrower,
                    repayAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async liquidateBorrowAllowedGas(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.liquidateBorrowAllowed(cTokenBorrowed,cTokenCollateral,liquidator,borrower,repayAmount,).estimateGas();
        return gasAmount;
    };


    public async liquidateBorrowVerify(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,seizeTokens: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenBorrowed', cTokenBorrowed);
            assert.isString('cTokenCollateral', cTokenCollateral);
            assert.isString('liquidator', liquidator);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('repayAmount', repayAmount);
            assert.isNumberOrBigNumber('seizeTokens', seizeTokens);

        const promizz = self._contract.methods.liquidateBorrowVerify(
            cTokenBorrowed,
                    cTokenCollateral,
                    liquidator,
                    borrower,
                    repayAmount,
                    seizeTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async liquidateBorrowVerifyGas(cTokenBorrowed: string,cTokenCollateral: string,liquidator: string,borrower: string,repayAmount: BN,seizeTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.liquidateBorrowVerify(cTokenBorrowed,cTokenCollateral,liquidator,borrower,repayAmount,seizeTokens,).estimateGas();
        return gasAmount;
    };


    public async liquidateCalculateSeizeTokens(cTokenBorrowed: string,cTokenCollateral: string,repayAmount: BN,): Promise<[BN, BN]> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenBorrowed', cTokenBorrowed);
            assert.isString('cTokenCollateral', cTokenCollateral);
            assert.isNumberOrBigNumber('repayAmount', repayAmount);

        const promizz = self._contract.methods.liquidateCalculateSeizeTokens(
            cTokenBorrowed,
                    cTokenCollateral,
                    repayAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async liquidateCalculateSeizeTokensGas(cTokenBorrowed: string,cTokenCollateral: string,repayAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.liquidateCalculateSeizeTokens(cTokenBorrowed,cTokenCollateral,repayAmount,).estimateGas();
        return gasAmount;
    };


    public async liquidationIncentiveMantissa(): Promise<BN> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.liquidationIncentiveMantissa(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async liquidationIncentiveMantissaGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.liquidationIncentiveMantissa().estimateGas();
        return gasAmount;
    };


    public async markets(index_0: string,): Promise<[boolean, BN]> {
        const self = this as any as ComptrollerContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.markets(
            index_0,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async marketsGas(index_0: string,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.markets(index_0,).estimateGas();
        return gasAmount;
    };


    public async maxAssets(): Promise<BN> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.maxAssets(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async maxAssetsGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.maxAssets().estimateGas();
        return gasAmount;
    };


    public async mintAllowed(cToken: string,minter: string,mintAmount: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('minter', minter);
            assert.isNumberOrBigNumber('mintAmount', mintAmount);

        const promizz = self._contract.methods.mintAllowed(
            cToken,
                    minter,
                    mintAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async mintAllowedGas(cToken: string,minter: string,mintAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.mintAllowed(cToken,minter,mintAmount,).estimateGas();
        return gasAmount;
    };


    public async mintVerify(cToken: string,minter: string,mintAmount: BN,mintTokens: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('minter', minter);
            assert.isNumberOrBigNumber('mintAmount', mintAmount);
            assert.isNumberOrBigNumber('mintTokens', mintTokens);

        const promizz = self._contract.methods.mintVerify(
            cToken,
                    minter,
                    mintAmount,
                    mintTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async mintVerifyGas(cToken: string,minter: string,mintAmount: BN,mintTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.mintVerify(cToken,minter,mintAmount,mintTokens,).estimateGas();
        return gasAmount;
    };


    public async oracle(): Promise<string> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.oracle(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async oracleGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.oracle().estimateGas();
        return gasAmount;
    };


    public async pendingAdmin(): Promise<string> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.pendingAdmin(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async pendingAdminGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.pendingAdmin().estimateGas();
        return gasAmount;
    };


    public async pendingComptrollerImplementation(): Promise<string> {
        const self = this as any as ComptrollerContract;


        const promizz = self._contract.methods.pendingComptrollerImplementation(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async pendingComptrollerImplementationGas(): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.pendingComptrollerImplementation().estimateGas();
        return gasAmount;
    };


    public async redeemAllowed(cToken: string,redeemer: string,redeemTokens: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('redeemer', redeemer);
            assert.isNumberOrBigNumber('redeemTokens', redeemTokens);

        const promizz = self._contract.methods.redeemAllowed(
            cToken,
                    redeemer,
                    redeemTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async redeemAllowedGas(cToken: string,redeemer: string,redeemTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.redeemAllowed(cToken,redeemer,redeemTokens,).estimateGas();
        return gasAmount;
    };


    public async redeemVerify(cToken: string,redeemer: string,redeemAmount: BN,redeemTokens: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('redeemer', redeemer);
            assert.isNumberOrBigNumber('redeemAmount', redeemAmount);
            assert.isNumberOrBigNumber('redeemTokens', redeemTokens);

        const promizz = self._contract.methods.redeemVerify(
            cToken,
                    redeemer,
                    redeemAmount,
                    redeemTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async redeemVerifyGas(cToken: string,redeemer: string,redeemAmount: BN,redeemTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.redeemVerify(cToken,redeemer,redeemAmount,redeemTokens,).estimateGas();
        return gasAmount;
    };


    public async repayBorrowAllowed(cToken: string,payer: string,borrower: string,repayAmount: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('payer', payer);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('repayAmount', repayAmount);

        const promizz = self._contract.methods.repayBorrowAllowed(
            cToken,
                    payer,
                    borrower,
                    repayAmount,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async repayBorrowAllowedGas(cToken: string,payer: string,borrower: string,repayAmount: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.repayBorrowAllowed(cToken,payer,borrower,repayAmount,).estimateGas();
        return gasAmount;
    };


    public async repayBorrowVerify(cToken: string,payer: string,borrower: string,repayAmount: BN,borrowerIndex: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('payer', payer);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('repayAmount', repayAmount);
            assert.isNumberOrBigNumber('borrowerIndex', borrowerIndex);

        const promizz = self._contract.methods.repayBorrowVerify(
            cToken,
                    payer,
                    borrower,
                    repayAmount,
                    borrowerIndex,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async repayBorrowVerifyGas(cToken: string,payer: string,borrower: string,repayAmount: BN,borrowerIndex: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.repayBorrowVerify(cToken,payer,borrower,repayAmount,borrowerIndex,).estimateGas();
        return gasAmount;
    };


    public async seizeAllowed(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenCollateral', cTokenCollateral);
            assert.isString('cTokenBorrowed', cTokenBorrowed);
            assert.isString('liquidator', liquidator);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('seizeTokens', seizeTokens);

        const promizz = self._contract.methods.seizeAllowed(
            cTokenCollateral,
                    cTokenBorrowed,
                    liquidator,
                    borrower,
                    seizeTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async seizeAllowedGas(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.seizeAllowed(cTokenCollateral,cTokenBorrowed,liquidator,borrower,seizeTokens,).estimateGas();
        return gasAmount;
    };


    public async seizeVerify(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cTokenCollateral', cTokenCollateral);
            assert.isString('cTokenBorrowed', cTokenBorrowed);
            assert.isString('liquidator', liquidator);
            assert.isString('borrower', borrower);
            assert.isNumberOrBigNumber('seizeTokens', seizeTokens);

        const promizz = self._contract.methods.seizeVerify(
            cTokenCollateral,
                    cTokenBorrowed,
                    liquidator,
                    borrower,
                    seizeTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async seizeVerifyGas(cTokenCollateral: string,cTokenBorrowed: string,liquidator: string,borrower: string,seizeTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.seizeVerify(cTokenCollateral,cTokenBorrowed,liquidator,borrower,seizeTokens,).estimateGas();
        return gasAmount;
    };


    public async transferAllowed(cToken: string,src: string,dst: string,transferTokens: BN,): Promise<BN> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('src', src);
            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('transferTokens', transferTokens);

        const promizz = self._contract.methods.transferAllowed(
            cToken,
                    src,
                    dst,
                    transferTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async transferAllowedGas(cToken: string,src: string,dst: string,transferTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.transferAllowed(cToken,src,dst,transferTokens,).estimateGas();
        return gasAmount;
    };


    public async transferVerify(cToken: string,src: string,dst: string,transferTokens: BN,): Promise<void> {
        const self = this as any as ComptrollerContract;

            assert.isString('cToken', cToken);
            assert.isString('src', src);
            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('transferTokens', transferTokens);

        const promizz = self._contract.methods.transferVerify(
            cToken,
                    src,
                    dst,
                    transferTokens,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


const result = await promizz.send(_essence)
        .on('transactionHash', (hash) => {
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


    public async transferVerifyGas(cToken: string,src: string,dst: string,transferTokens: BN,): Promise<number>{
        const self = this as any as ComptrollerContract;
        const gasAmount = await self._contract.methods.transferVerify(cToken,src,dst,transferTokens,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the Comptroller contract.
     * @param eventName The Comptroller contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends ComptrollerEventArgs>(
        eventName: ComptrollerEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, ComptrollerEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            ComptrollerContract.ABI(),
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
     * @param eventName The Comptroller contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends ComptrollerEventArgs>(
        eventName: ComptrollerEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, ComptrollerEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            ComptrollerContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('Comptroller', ComptrollerContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            ComptrollerContract.ABI(),
            supportedProvider,
        );

        ComptrollerContract.ABI().forEach((item, index) => {
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
