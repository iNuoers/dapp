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
    DOMAIN_SEPARATOR():Promise<string>
    EIP712_REVISION():Promise<string>
    PERMIT_TYPEHASH():Promise<string>
    POOL():Promise<string>
    RESERVE_TREASURY_ADDRESS():Promise<string>
    UINT_MAX_VALUE():Promise<BN>
    UNDERLYING_ASSET_ADDRESS():Promise<string>
    _nonces(index_0: string,):Promise<BN>
    addressesProvider():Promise<string>
    allowance(owner: string,spender: string,):Promise<BN>
    approve(spender: string,amount: BN,):Promise<boolean>
    balanceOf(user: string,):Promise<BN>
    burn(user: string,receiverOfUnderlying: string,amount: BN,index: BN,):Promise<void>
    decimals():Promise<BN>
    decreaseAllowance(spender: string,subtractedValue: BN,):Promise<boolean>
    earned(account: string,):Promise<BN>
    getReward():Promise<void>
    getRewardForDuration():Promise<BN>
    getScaledUserBalanceAndSupply(user: string,):Promise<[BN, BN]>
    increaseAllowance(spender: string,addedValue: BN,):Promise<boolean>
    lastTimeRewardApplicable():Promise<BN>
    lastUpdateTime():Promise<BN>
    mint(user: string,amount: BN,index: BN,):Promise<boolean>
    mintToTreasury(amount: BN,index: BN,):Promise<void>
    name():Promise<string>
    notifyRewardAmount(reward: BN,_rewardsDuration: BN,):Promise<void>
    periodFinish():Promise<BN>
    permit(owner: string,spender: string,value: BN,deadline: BN,v: number|BN,r: string,s: string,):Promise<void>
    rewardPerToken():Promise<BN>
    rewardPerTokenStored():Promise<BN>
    rewardRate():Promise<BN>
    rewards(index_0: string,):Promise<BN>
    rewardsDistribution():Promise<string>
    rewardsDuration():Promise<BN>
    rewardsToken():Promise<string>
    scaledBalanceOf(user: string,):Promise<BN>
    scaledTotalSupply():Promise<BN>
    symbol():Promise<string>
    totalSupply():Promise<BN>
    transfer(recipient: string,amount: BN,):Promise<boolean>
    transferFrom(sender: string,recipient: string,amount: BN,):Promise<boolean>
    transferOnLiquidation(from: string,to: string,value: BN,):Promise<void>
    transferUnderlyingTo(target: string,amount: BN,):Promise<BN>
    userRewardPerTokenPaid(index_0: string,):Promise<BN>
}





export enum XTokenEvents {
    Approval = 'Approval',
    BalanceTransfer = 'BalanceTransfer',
    Burn = 'Burn',
    Mint = 'Mint',
    RewardAdded = 'RewardAdded',
    RewardPaid = 'RewardPaid',
    Transfer = 'Transfer',
}

export interface XTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    value: BN;
}

export interface XTokenBalanceTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BN;
    index: BN;
}

export interface XTokenBurnEventArgs extends DecodedLogArgs {
    from: string;
    target: string;
    value: BN;
    index: BN;
}

export interface XTokenMintEventArgs extends DecodedLogArgs {
    from: string;
    value: BN;
    index: BN;
}

export interface XTokenRewardAddedEventArgs extends DecodedLogArgs {
    reward: BN;
    _rewardsDuration: BN;
}

export interface XTokenRewardPaidEventArgs extends DecodedLogArgs {
    user: string;
    reward: BN;
}

export interface XTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    value: BN;
}


export type XTokenEventArgs =
    | XTokenApprovalEventArgs
    | XTokenBalanceTransferEventArgs
    | XTokenBurnEventArgs
    | XTokenMintEventArgs
    | XTokenRewardAddedEventArgs
    | XTokenRewardPaidEventArgs
    | XTokenTransferEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class XTokenContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'XToken';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<XTokenEventArgs, XTokenEvents>;


    public static Instance(): (XTokenContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_XToken")) {
          // @ts-ignore
          const obj = window.__eth_contract_XToken
          if (obj instanceof XTokenContract) {
            return (obj) as XTokenContract
          } else {
            return (obj) as XTokenContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<XTokenContract>
    {
        const contractInstance = await new XTokenContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["_addressesProvider",
"underlyingAssetAddress",
"tokenName",
"tokenSymbol",
"decimals"
];

        if (window && !window.hasOwnProperty("__eth_contract_XToken")) {
            // @ts-ignore
            window.__eth_contract_XToken = contractInstance
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
                    {
                        name: '_addressesProvider',
                        type: 'address',
                    },
                    {
                        name: 'underlyingAssetAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenName',
                        type: 'string',
                    },
                    {
                        name: 'tokenSymbol',
                        type: 'string',
                    },
                    {
                        name: 'decimals',
                        type: 'uint8',
                    },
                ],
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'owner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'spender',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Approval',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'BalanceTransfer',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Burn',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Mint',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'reward',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: '_rewardsDuration',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'RewardAdded',
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
                        name: 'reward',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'RewardPaid',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Transfer',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                name: 'DOMAIN_SEPARATOR',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'EIP712_REVISION',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'POOL',
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
                name: 'RESERVE_TREASURY_ADDRESS',
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
                name: 'UINT_MAX_VALUE',
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
                name: 'UNDERLYING_ASSET_ADDRESS',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: '_nonces',
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
                name: 'addressesProvider',
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
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                ],
                name: 'allowance',
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
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'approve',
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
                ],
                name: 'balanceOf',
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
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'receiverOfUnderlying',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'burn',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'decimals',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'subtractedValue',
                        type: 'uint256',
                    },
                ],
                name: 'decreaseAllowance',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'earned',
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
                name: 'getReward',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'getRewardForDuration',
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
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'getScaledUserBalanceAndSupply',
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
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'addedValue',
                        type: 'uint256',
                    },
                ],
                name: 'increaseAllowance',
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
                ],
                name: 'lastTimeRewardApplicable',
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
                name: 'lastUpdateTime',
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
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'mint',
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
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'mintToTreasury',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'name',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'reward',
                        type: 'uint256',
                    },
                    {
                        name: '_rewardsDuration',
                        type: 'uint256',
                    },
                ],
                name: 'notifyRewardAmount',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'periodFinish',
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
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'permit',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'rewardPerToken',
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
                name: 'rewardPerTokenStored',
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
                name: 'rewardRate',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'rewards',
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
                name: 'rewardsDistribution',
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
                name: 'rewardsDuration',
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
                name: 'rewardsToken',
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
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'scaledBalanceOf',
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
                name: 'scaledTotalSupply',
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
                name: 'symbol',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'totalSupply',
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
                        name: 'recipient',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transfer',
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
                        name: 'sender',
                        type: 'address',
                    },
                    {
                        name: 'recipient',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transferFrom',
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
                        name: 'from',
                        type: 'address',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                    },
                ],
                name: 'transferOnLiquidation',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transferUnderlyingTo',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'userRewardPerTokenPaid',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async DOMAIN_SEPARATOR(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.DOMAIN_SEPARATOR(
)


        const result = await promizz.call();

        return result;
    };


    public async DOMAIN_SEPARATORGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.DOMAIN_SEPARATOR().estimateGas();
        return gasAmount;
    };


    public async EIP712_REVISION(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.EIP712_REVISION(
)


        const result = await promizz.call();

        return result;
    };


    public async EIP712_REVISIONGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.EIP712_REVISION().estimateGas();
        return gasAmount;
    };


    public async PERMIT_TYPEHASH(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.PERMIT_TYPEHASH(
)


        const result = await promizz.call();

        return result;
    };


    public async PERMIT_TYPEHASHGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.PERMIT_TYPEHASH().estimateGas();
        return gasAmount;
    };


    public async POOL(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.POOL(
)


        const result = await promizz.call();

        return result;
    };


    public async POOLGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.POOL().estimateGas();
        return gasAmount;
    };


    public async RESERVE_TREASURY_ADDRESS(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.RESERVE_TREASURY_ADDRESS(
)


        const result = await promizz.call();

        return result;
    };


    public async RESERVE_TREASURY_ADDRESSGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.RESERVE_TREASURY_ADDRESS().estimateGas();
        return gasAmount;
    };


    public async UINT_MAX_VALUE(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.UINT_MAX_VALUE(
)


        const result = await promizz.call();

        return result;
    };


    public async UINT_MAX_VALUEGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.UINT_MAX_VALUE().estimateGas();
        return gasAmount;
    };


    public async UNDERLYING_ASSET_ADDRESS(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.UNDERLYING_ASSET_ADDRESS(
)


        const result = await promizz.call();

        return result;
    };


    public async UNDERLYING_ASSET_ADDRESSGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.UNDERLYING_ASSET_ADDRESS().estimateGas();
        return gasAmount;
    };


    public async _nonces(index_0: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods._nonces(
            index_0,
        )


        const result = await promizz.call();

        return result;
    };


    public async _noncesGas(index_0: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods._nonces(index_0,).estimateGas();
        return gasAmount;
    };


    public async addressesProvider(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.addressesProvider(
)


        const result = await promizz.call();

        return result;
    };


    public async addressesProviderGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.addressesProvider().estimateGas();
        return gasAmount;
    };


    public async allowance(owner: string,spender: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('owner', owner);
            assert.isString('spender', spender);

        const promizz = self._contract.methods.allowance(
            owner,
                    spender,
        )


        const result = await promizz.call();

        return result;
    };


    public async allowanceGas(owner: string,spender: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.allowance(owner,spender,).estimateGas();
        return gasAmount;
    };


    public async approve(spender: string,amount: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.approve(
            spender,
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


    public async approveGas(spender: string,amount: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.approve(spender,amount,).estimateGas();
        return gasAmount;
    };


    public async balanceOf(user: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.balanceOf(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async balanceOfGas(user: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.balanceOf(user,).estimateGas();
        return gasAmount;
    };


    public async burn(user: string,receiverOfUnderlying: string,amount: BN,index: BN,): Promise<void> {
        const self = this as any as XTokenContract;

            assert.isString('user', user);
            assert.isString('receiverOfUnderlying', receiverOfUnderlying);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('index', index);

        const promizz = self._contract.methods.burn(
            user,
                    receiverOfUnderlying,
                    amount,
                    index,
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


    public async burnGas(user: string,receiverOfUnderlying: string,amount: BN,index: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.burn(user,receiverOfUnderlying,amount,index,).estimateGas();
        return gasAmount;
    };


    public async decimals(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.decimals(
)


        const result = await promizz.call();

        return result;
    };


    public async decimalsGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.decimals().estimateGas();
        return gasAmount;
    };


    public async decreaseAllowance(spender: string,subtractedValue: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('subtractedValue', subtractedValue);

        const promizz = self._contract.methods.decreaseAllowance(
            spender,
                    subtractedValue,
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


    public async decreaseAllowanceGas(spender: string,subtractedValue: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.decreaseAllowance(spender,subtractedValue,).estimateGas();
        return gasAmount;
    };


    public async earned(account: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.earned(
            account,
        )


        const result = await promizz.call();

        return result;
    };


    public async earnedGas(account: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.earned(account,).estimateGas();
        return gasAmount;
    };


    public async getReward(): Promise<void> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.getReward(
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


    public async getRewardGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.getReward().estimateGas();
        return gasAmount;
    };


    public async getRewardForDuration(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.getRewardForDuration(
)


        const result = await promizz.call();

        return result;
    };


    public async getRewardForDurationGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.getRewardForDuration().estimateGas();
        return gasAmount;
    };


    public async getScaledUserBalanceAndSupply(user: string,): Promise<[BN, BN]> {
        const self = this as any as XTokenContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.getScaledUserBalanceAndSupply(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async getScaledUserBalanceAndSupplyGas(user: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.getScaledUserBalanceAndSupply(user,).estimateGas();
        return gasAmount;
    };


    public async increaseAllowance(spender: string,addedValue: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('addedValue', addedValue);

        const promizz = self._contract.methods.increaseAllowance(
            spender,
                    addedValue,
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


    public async increaseAllowanceGas(spender: string,addedValue: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.increaseAllowance(spender,addedValue,).estimateGas();
        return gasAmount;
    };


    public async lastTimeRewardApplicable(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.lastTimeRewardApplicable(
)


        const result = await promizz.call();

        return result;
    };


    public async lastTimeRewardApplicableGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.lastTimeRewardApplicable().estimateGas();
        return gasAmount;
    };


    public async lastUpdateTime(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.lastUpdateTime(
)


        const result = await promizz.call();

        return result;
    };


    public async lastUpdateTimeGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.lastUpdateTime().estimateGas();
        return gasAmount;
    };


    public async mint(user: string,amount: BN,index: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('user', user);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('index', index);

        const promizz = self._contract.methods.mint(
            user,
                    amount,
                    index,
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


    public async mintGas(user: string,amount: BN,index: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.mint(user,amount,index,).estimateGas();
        return gasAmount;
    };


    public async mintToTreasury(amount: BN,index: BN,): Promise<void> {
        const self = this as any as XTokenContract;

            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('index', index);

        const promizz = self._contract.methods.mintToTreasury(
            amount,
                    index,
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


    public async mintToTreasuryGas(amount: BN,index: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.mintToTreasury(amount,index,).estimateGas();
        return gasAmount;
    };


    public async name(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.name(
)


        const result = await promizz.call();

        return result;
    };


    public async nameGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.name().estimateGas();
        return gasAmount;
    };


    public async notifyRewardAmount(reward: BN,_rewardsDuration: BN,): Promise<void> {
        const self = this as any as XTokenContract;

            assert.isNumberOrBigNumber('reward', reward);
            assert.isNumberOrBigNumber('_rewardsDuration', _rewardsDuration);

        const promizz = self._contract.methods.notifyRewardAmount(
            reward,
                    _rewardsDuration,
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


    public async notifyRewardAmountGas(reward: BN,_rewardsDuration: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.notifyRewardAmount(reward,_rewardsDuration,).estimateGas();
        return gasAmount;
    };


    public async periodFinish(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.periodFinish(
)


        const result = await promizz.call();

        return result;
    };


    public async periodFinishGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.periodFinish().estimateGas();
        return gasAmount;
    };


    public async permit(owner: string,spender: string,value: BN,deadline: BN,v: number|BN,r: string,s: string,): Promise<void> {
        const self = this as any as XTokenContract;

            assert.isString('owner', owner);
            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('value', value);
            assert.isNumberOrBigNumber('deadline', deadline);
            assert.isNumberOrBigNumber('v', v);
            assert.isString('r', r);
            assert.isString('s', s);

        const promizz = self._contract.methods.permit(
            owner,
                    spender,
                    value,
                    deadline,
                    v,
                    r,
                    s,
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


    public async permitGas(owner: string,spender: string,value: BN,deadline: BN,v: number|BN,r: string,s: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.permit(owner,spender,value,deadline,v,r,s,).estimateGas();
        return gasAmount;
    };


    public async rewardPerToken(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardPerToken(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardPerTokenGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardPerToken().estimateGas();
        return gasAmount;
    };


    public async rewardPerTokenStored(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardPerTokenStored(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardPerTokenStoredGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardPerTokenStored().estimateGas();
        return gasAmount;
    };


    public async rewardRate(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardRate(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardRateGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardRate().estimateGas();
        return gasAmount;
    };


    public async rewards(index_0: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.rewards(
            index_0,
        )


        const result = await promizz.call();

        return result;
    };


    public async rewardsGas(index_0: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewards(index_0,).estimateGas();
        return gasAmount;
    };


    public async rewardsDistribution(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardsDistribution(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardsDistributionGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardsDistribution().estimateGas();
        return gasAmount;
    };


    public async rewardsDuration(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardsDuration(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardsDurationGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardsDuration().estimateGas();
        return gasAmount;
    };


    public async rewardsToken(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.rewardsToken(
)


        const result = await promizz.call();

        return result;
    };


    public async rewardsTokenGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.rewardsToken().estimateGas();
        return gasAmount;
    };


    public async scaledBalanceOf(user: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.scaledBalanceOf(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async scaledBalanceOfGas(user: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.scaledBalanceOf(user,).estimateGas();
        return gasAmount;
    };


    public async scaledTotalSupply(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.scaledTotalSupply(
)


        const result = await promizz.call();

        return result;
    };


    public async scaledTotalSupplyGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.scaledTotalSupply().estimateGas();
        return gasAmount;
    };


    public async symbol(): Promise<string> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.symbol(
)


        const result = await promizz.call();

        return result;
    };


    public async symbolGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.symbol().estimateGas();
        return gasAmount;
    };


    public async totalSupply(): Promise<BN> {
        const self = this as any as XTokenContract;


        const promizz = self._contract.methods.totalSupply(
)


        const result = await promizz.call();

        return result;
    };


    public async totalSupplyGas(): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.totalSupply().estimateGas();
        return gasAmount;
    };


    public async transfer(recipient: string,amount: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('recipient', recipient);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.transfer(
            recipient,
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


    public async transferGas(recipient: string,amount: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.transfer(recipient,amount,).estimateGas();
        return gasAmount;
    };


    public async transferFrom(sender: string,recipient: string,amount: BN,): Promise<boolean> {
        const self = this as any as XTokenContract;

            assert.isString('sender', sender);
            assert.isString('recipient', recipient);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.transferFrom(
            sender,
                    recipient,
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


    public async transferFromGas(sender: string,recipient: string,amount: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.transferFrom(sender,recipient,amount,).estimateGas();
        return gasAmount;
    };


    public async transferOnLiquidation(from: string,to: string,value: BN,): Promise<void> {
        const self = this as any as XTokenContract;

            assert.isString('from', from);
            assert.isString('to', to);
            assert.isNumberOrBigNumber('value', value);

        const promizz = self._contract.methods.transferOnLiquidation(
            from,
                    to,
                    value,
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


    public async transferOnLiquidationGas(from: string,to: string,value: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.transferOnLiquidation(from,to,value,).estimateGas();
        return gasAmount;
    };


    public async transferUnderlyingTo(target: string,amount: BN,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('target', target);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.transferUnderlyingTo(
            target,
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


    public async transferUnderlyingToGas(target: string,amount: BN,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.transferUnderlyingTo(target,amount,).estimateGas();
        return gasAmount;
    };


    public async userRewardPerTokenPaid(index_0: string,): Promise<BN> {
        const self = this as any as XTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.userRewardPerTokenPaid(
            index_0,
        )


        const result = await promizz.call();

        return result;
    };


    public async userRewardPerTokenPaidGas(index_0: string,): Promise<number>{
        const self = this as any as XTokenContract;
        const gasAmount = await self._contract.methods.userRewardPerTokenPaid(index_0,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the XToken contract.
     * @param eventName The XToken contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends XTokenEventArgs>(
        eventName: XTokenEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, XTokenEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            XTokenContract.ABI(),
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
     * @param eventName The XToken contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends XTokenEventArgs>(
        eventName: XTokenEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, XTokenEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            XTokenContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('XToken', XTokenContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            XTokenContract.ABI(),
            supportedProvider,
        );

        XTokenContract.ABI().forEach((item, index) => {
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
