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
    DELEGATION_TYPEHASH():Promise<string>
    DOMAIN_TYPEHASH():Promise<string>
    PERMIT_TYPEHASH():Promise<string>
    allowance(account: string,spender: string,):Promise<BN>
    approve(spender: string,rawAmount: BN,):Promise<boolean>
    balanceOf(account: string,):Promise<BN>
    checkpoints(index_0: string,index_1: number|BN,):Promise<[BN, BN]>
    decimals():Promise<BN>
    delegate(delegatee: string,):Promise<void>
    delegateBySig(delegatee: string,nonce: BN,expiry: BN,v: number|BN,r: string,s: string,):Promise<void>
    delegates(index_0: string,):Promise<string>
    getCurrentVotes(account: string,):Promise<BN>
    getPriorVotes(account: string,blockNumber: BN,):Promise<BN>
    name():Promise<string>
    nonces(index_0: string,):Promise<BN>
    numCheckpoints(index_0: string,):Promise<BN>
    permit(owner: string,spender: string,rawAmount: BN,deadline: BN,v: number|BN,r: string,s: string,):Promise<void>
    symbol():Promise<string>
    totalSupply():Promise<BN>
    transfer(dst: string,rawAmount: BN,):Promise<boolean>
    transferFrom(src: string,dst: string,rawAmount: BN,):Promise<boolean>
}





export enum BalincerTokenEvents {
    Approval = 'Approval',
    DelegateChanged = 'DelegateChanged',
    DelegateVotesChanged = 'DelegateVotesChanged',
    Transfer = 'Transfer',
}

export interface BalincerTokenApprovalEventArgs extends DecodedLogArgs {
    owner: string;
    spender: string;
    amount: BN;
}

export interface BalincerTokenDelegateChangedEventArgs extends DecodedLogArgs {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}

export interface BalincerTokenDelegateVotesChangedEventArgs extends DecodedLogArgs {
    delegate: string;
    previousBalance: BN;
    newBalance: BN;
}

export interface BalincerTokenTransferEventArgs extends DecodedLogArgs {
    from: string;
    to: string;
    amount: BN;
}


export type BalincerTokenEventArgs =
    | BalincerTokenApprovalEventArgs
    | BalincerTokenDelegateChangedEventArgs
    | BalincerTokenDelegateVotesChangedEventArgs
    | BalincerTokenTransferEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class BalincerTokenContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'BalincerToken';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<BalincerTokenEventArgs, BalincerTokenEvents>;


    public static Instance(): (BalincerTokenContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_BalincerToken")) {
          // @ts-ignore
          const obj = window.__eth_contract_BalincerToken
          if (obj instanceof BalincerTokenContract) {
            return (obj) as BalincerTokenContract
          } else {
            return (obj) as BalincerTokenContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<BalincerTokenContract>
    {
        const contractInstance = await new BalincerTokenContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["account"
];

        if (window && !window.hasOwnProperty("__eth_contract_BalincerToken")) {
            // @ts-ignore
            window.__eth_contract_BalincerToken = contractInstance
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
                        name: 'account',
                        type: 'address',
                    },
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
                        name: 'amount',
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
                        name: 'delegator',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'fromDelegate',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'toDelegate',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'DelegateChanged',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'delegate',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'previousBalance',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newBalance',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'DelegateVotesChanged',
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
                        name: 'amount',
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
                constant: true,
                inputs: [
                ],
                name: 'DELEGATION_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
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
                name: 'DOMAIN_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
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
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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
                name: 'balanceOf',
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
                    {
                        name: 'index_1',
                        type: 'uint32',
                    },
                ],
                name: 'checkpoints',
                outputs: [
                    {
                        name: 'fromBlock',
                        type: 'uint32',
                    },
                    {
                        name: 'votes',
                        type: 'uint96',
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
                name: 'decimals',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
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
                        name: 'delegatee',
                        type: 'address',
                    },
                ],
                name: 'delegate',
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
                        name: 'delegatee',
                        type: 'address',
                    },
                    {
                        name: 'nonce',
                        type: 'uint256',
                    },
                    {
                        name: 'expiry',
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
                name: 'delegateBySig',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'delegates',
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
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'getCurrentVotes',
                outputs: [
                    {
                        name: '',
                        type: 'uint96',
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
                    {
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                ],
                name: 'getPriorVotes',
                outputs: [
                    {
                        name: '',
                        type: 'uint96',
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
                name: 'name',
                outputs: [
                    {
                        name: '',
                        type: 'string',
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
                name: 'nonces',
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
                name: 'numCheckpoints',
                outputs: [
                    {
                        name: '',
                        type: 'uint32',
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
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'symbol',
                outputs: [
                    {
                        name: '',
                        type: 'string',
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
                name: 'totalSupply',
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
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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

    public async DELEGATION_TYPEHASH(): Promise<string> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.DELEGATION_TYPEHASH(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async DELEGATION_TYPEHASHGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.DELEGATION_TYPEHASH().estimateGas();
        return gasAmount;
    };


    public async DOMAIN_TYPEHASH(): Promise<string> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.DOMAIN_TYPEHASH(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async DOMAIN_TYPEHASHGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.DOMAIN_TYPEHASH().estimateGas();
        return gasAmount;
    };


    public async PERMIT_TYPEHASH(): Promise<string> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.PERMIT_TYPEHASH(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async PERMIT_TYPEHASHGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.PERMIT_TYPEHASH().estimateGas();
        return gasAmount;
    };


    public async allowance(account: string,spender: string,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('account', account);
            assert.isString('spender', spender);

        const promizz = self._contract.methods.allowance(
            account,
                    spender,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async allowanceGas(account: string,spender: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.allowance(account,spender,).estimateGas();
        return gasAmount;
    };


    public async approve(spender: string,rawAmount: BN,): Promise<boolean> {
        const self = this as any as BalincerTokenContract;

            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('rawAmount', rawAmount);

        const promizz = self._contract.methods.approve(
            spender,
                    rawAmount,
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


    public async approveGas(spender: string,rawAmount: BN,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.approve(spender,rawAmount,).estimateGas();
        return gasAmount;
    };


    public async balanceOf(account: string,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.balanceOf(
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


    public async balanceOfGas(account: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.balanceOf(account,).estimateGas();
        return gasAmount;
    };


    public async checkpoints(index_0: string,index_1: number|BN,): Promise<[BN, BN]> {
        const self = this as any as BalincerTokenContract;

            assert.isString('index_0', index_0);
            assert.isNumberOrBigNumber('index_1', index_1);

        const promizz = self._contract.methods.checkpoints(
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


    public async checkpointsGas(index_0: string,index_1: number|BN,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.checkpoints(index_0,index_1,).estimateGas();
        return gasAmount;
    };


    public async decimals(): Promise<BN> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.decimals(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async decimalsGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.decimals().estimateGas();
        return gasAmount;
    };


    public async delegate(delegatee: string,): Promise<void> {
        const self = this as any as BalincerTokenContract;

            assert.isString('delegatee', delegatee);

        const promizz = self._contract.methods.delegate(
            delegatee,
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


    public async delegateGas(delegatee: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.delegate(delegatee,).estimateGas();
        return gasAmount;
    };


    public async delegateBySig(delegatee: string,nonce: BN,expiry: BN,v: number|BN,r: string,s: string,): Promise<void> {
        const self = this as any as BalincerTokenContract;

            assert.isString('delegatee', delegatee);
            assert.isNumberOrBigNumber('nonce', nonce);
            assert.isNumberOrBigNumber('expiry', expiry);
            assert.isNumberOrBigNumber('v', v);
            assert.isString('r', r);
            assert.isString('s', s);

        const promizz = self._contract.methods.delegateBySig(
            delegatee,
                    nonce,
                    expiry,
                    v,
                    r,
                    s,
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


    public async delegateBySigGas(delegatee: string,nonce: BN,expiry: BN,v: number|BN,r: string,s: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.delegateBySig(delegatee,nonce,expiry,v,r,s,).estimateGas();
        return gasAmount;
    };


    public async delegates(index_0: string,): Promise<string> {
        const self = this as any as BalincerTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.delegates(
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


    public async delegatesGas(index_0: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.delegates(index_0,).estimateGas();
        return gasAmount;
    };


    public async getCurrentVotes(account: string,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.getCurrentVotes(
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


    public async getCurrentVotesGas(account: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.getCurrentVotes(account,).estimateGas();
        return gasAmount;
    };


    public async getPriorVotes(account: string,blockNumber: BN,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('account', account);
            assert.isNumberOrBigNumber('blockNumber', blockNumber);

        const promizz = self._contract.methods.getPriorVotes(
            account,
                    blockNumber,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getPriorVotesGas(account: string,blockNumber: BN,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.getPriorVotes(account,blockNumber,).estimateGas();
        return gasAmount;
    };


    public async name(): Promise<string> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.name(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async nameGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.name().estimateGas();
        return gasAmount;
    };


    public async nonces(index_0: string,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.nonces(
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


    public async noncesGas(index_0: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.nonces(index_0,).estimateGas();
        return gasAmount;
    };


    public async numCheckpoints(index_0: string,): Promise<BN> {
        const self = this as any as BalincerTokenContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.numCheckpoints(
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


    public async numCheckpointsGas(index_0: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.numCheckpoints(index_0,).estimateGas();
        return gasAmount;
    };


    public async permit(owner: string,spender: string,rawAmount: BN,deadline: BN,v: number|BN,r: string,s: string,): Promise<void> {
        const self = this as any as BalincerTokenContract;

            assert.isString('owner', owner);
            assert.isString('spender', spender);
            assert.isNumberOrBigNumber('rawAmount', rawAmount);
            assert.isNumberOrBigNumber('deadline', deadline);
            assert.isNumberOrBigNumber('v', v);
            assert.isString('r', r);
            assert.isString('s', s);

        const promizz = self._contract.methods.permit(
            owner,
                    spender,
                    rawAmount,
                    deadline,
                    v,
                    r,
                    s,
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


    public async permitGas(owner: string,spender: string,rawAmount: BN,deadline: BN,v: number|BN,r: string,s: string,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.permit(owner,spender,rawAmount,deadline,v,r,s,).estimateGas();
        return gasAmount;
    };


    public async symbol(): Promise<string> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.symbol(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async symbolGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.symbol().estimateGas();
        return gasAmount;
    };


    public async totalSupply(): Promise<BN> {
        const self = this as any as BalincerTokenContract;


        const promizz = self._contract.methods.totalSupply(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async totalSupplyGas(): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.totalSupply().estimateGas();
        return gasAmount;
    };


    public async transfer(dst: string,rawAmount: BN,): Promise<boolean> {
        const self = this as any as BalincerTokenContract;

            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('rawAmount', rawAmount);

        const promizz = self._contract.methods.transfer(
            dst,
                    rawAmount,
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


    public async transferGas(dst: string,rawAmount: BN,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.transfer(dst,rawAmount,).estimateGas();
        return gasAmount;
    };


    public async transferFrom(src: string,dst: string,rawAmount: BN,): Promise<boolean> {
        const self = this as any as BalincerTokenContract;

            assert.isString('src', src);
            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('rawAmount', rawAmount);

        const promizz = self._contract.methods.transferFrom(
            src,
                    dst,
                    rawAmount,
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


    public async transferFromGas(src: string,dst: string,rawAmount: BN,): Promise<number>{
        const self = this as any as BalincerTokenContract;
        const gasAmount = await self._contract.methods.transferFrom(src,dst,rawAmount,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the BalincerToken contract.
     * @param eventName The BalincerToken contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends BalincerTokenEventArgs>(
        eventName: BalincerTokenEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerTokenEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            BalincerTokenContract.ABI(),
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
     * @param eventName The BalincerToken contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends BalincerTokenEventArgs>(
        eventName: BalincerTokenEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerTokenEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            BalincerTokenContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('BalincerToken', BalincerTokenContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            BalincerTokenContract.ABI(),
            supportedProvider,
        );

        BalincerTokenContract.ABI().forEach((item, index) => {
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
