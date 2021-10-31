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
    allowance(index_0: string,index_1: string,):Promise<BN>
    approve(guy: string,wad: BN,):Promise<boolean>
    balanceOf(index_0: string,):Promise<BN>
    decimals():Promise<BN>
    deposit():Promise<void>
    name():Promise<string>
    symbol():Promise<string>
    totalSupply():Promise<BN>
    transfer(dst: string,wad: BN,):Promise<boolean>
    transferFrom(src: string,dst: string,wad: BN,):Promise<boolean>
    withdraw(wad: BN,):Promise<void>
}





export enum WETH9Events {
    Approval = 'Approval',
    Deposit = 'Deposit',
    Transfer = 'Transfer',
    Withdrawal = 'Withdrawal',
}

export interface WETH9ApprovalEventArgs extends DecodedLogArgs {
    src: string;
    guy: string;
    wad: BN;
}

export interface WETH9DepositEventArgs extends DecodedLogArgs {
    dst: string;
    wad: BN;
}

export interface WETH9TransferEventArgs extends DecodedLogArgs {
    src: string;
    dst: string;
    wad: BN;
}

export interface WETH9WithdrawalEventArgs extends DecodedLogArgs {
    src: string;
    wad: BN;
}


export type WETH9EventArgs =
    | WETH9ApprovalEventArgs
    | WETH9DepositEventArgs
    | WETH9TransferEventArgs
    | WETH9WithdrawalEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class WETH9Contract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'WETH9';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<WETH9EventArgs, WETH9Events>;


    public static Instance(): (WETH9Contract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_WETH9")) {
          // @ts-ignore
          const obj = window.__eth_contract_WETH9
          if (obj instanceof WETH9Contract) {
            return (obj) as WETH9Contract
          } else {
            return (obj) as WETH9Contract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<WETH9Contract>
    {
        const contractInstance = await new WETH9Contract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_WETH9")) {
            // @ts-ignore
            window.__eth_contract_WETH9 = contractInstance
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
                payable: true,
                stateMutability: 'payable',
                type: 'constructor',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'guy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
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
                        name: 'dst',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
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
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'dst',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
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
                anonymous: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Withdrawal',
                outputs: [
                ],
                type: 'event',
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
                        name: 'guy',
                        type: 'address',
                    },
                    {
                        name: 'wad',
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
                        name: 'index_0',
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
                ],
                name: 'deposit',
                outputs: [
                ],
                payable: true,
                stateMutability: 'payable',
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
                        name: 'wad',
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
                        name: 'wad',
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
            { 
                constant: false,
                inputs: [
                    {
                        name: 'wad',
                        type: 'uint256',
                    },
                ],
                name: 'withdraw',
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

    public async allowance(index_0: string,index_1: string,): Promise<BN> {
        const self = this as any as WETH9Contract;

            assert.isString('index_0', index_0);
            assert.isString('index_1', index_1);

        const promizz = self._contract.methods.allowance(
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


    public async allowanceGas(index_0: string,index_1: string,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.allowance(index_0,index_1,).estimateGas();
        return gasAmount;
    };


    public async approve(guy: string,wad: BN,): Promise<boolean> {
        const self = this as any as WETH9Contract;

            assert.isString('guy', guy);
            assert.isNumberOrBigNumber('wad', wad);

        const promizz = self._contract.methods.approve(
            guy,
                    wad,
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


    public async approveGas(guy: string,wad: BN,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.approve(guy,wad,).estimateGas();
        return gasAmount;
    };


    public async balanceOf(index_0: string,): Promise<BN> {
        const self = this as any as WETH9Contract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.balanceOf(
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


    public async balanceOfGas(index_0: string,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.balanceOf(index_0,).estimateGas();
        return gasAmount;
    };


    public async decimals(): Promise<BN> {
        const self = this as any as WETH9Contract;


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
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.decimals().estimateGas();
        return gasAmount;
    };


    public async deposit(): Promise<void> {
        const self = this as any as WETH9Contract;


        const promizz = self._contract.methods.deposit(
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


    public async depositGas(): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.deposit().estimateGas();
        return gasAmount;
    };


    public async name(): Promise<string> {
        const self = this as any as WETH9Contract;


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
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.name().estimateGas();
        return gasAmount;
    };


    public async symbol(): Promise<string> {
        const self = this as any as WETH9Contract;


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
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.symbol().estimateGas();
        return gasAmount;
    };


    public async totalSupply(): Promise<BN> {
        const self = this as any as WETH9Contract;


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
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.totalSupply().estimateGas();
        return gasAmount;
    };


    public async transfer(dst: string,wad: BN,): Promise<boolean> {
        const self = this as any as WETH9Contract;

            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('wad', wad);

        const promizz = self._contract.methods.transfer(
            dst,
                    wad,
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


    public async transferGas(dst: string,wad: BN,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.transfer(dst,wad,).estimateGas();
        return gasAmount;
    };


    public async transferFrom(src: string,dst: string,wad: BN,): Promise<boolean> {
        const self = this as any as WETH9Contract;

            assert.isString('src', src);
            assert.isString('dst', dst);
            assert.isNumberOrBigNumber('wad', wad);

        const promizz = self._contract.methods.transferFrom(
            src,
                    dst,
                    wad,
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


    public async transferFromGas(src: string,dst: string,wad: BN,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.transferFrom(src,dst,wad,).estimateGas();
        return gasAmount;
    };


    public async withdraw(wad: BN,): Promise<void> {
        const self = this as any as WETH9Contract;

            assert.isNumberOrBigNumber('wad', wad);

        const promizz = self._contract.methods.withdraw(
            wad,
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


    public async withdrawGas(wad: BN,): Promise<number>{
        const self = this as any as WETH9Contract;
        const gasAmount = await self._contract.methods.withdraw(wad,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the WETH9 contract.
     * @param eventName The WETH9 contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends WETH9EventArgs>(
        eventName: WETH9Events,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, WETH9Events);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            WETH9Contract.ABI(),
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
     * @param eventName The WETH9 contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends WETH9EventArgs>(
        eventName: WETH9Events,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, WETH9Events);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            WETH9Contract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('WETH9', WETH9Contract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            WETH9Contract.ABI(),
            supportedProvider,
        );

        WETH9Contract.ABI().forEach((item, index) => {
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
