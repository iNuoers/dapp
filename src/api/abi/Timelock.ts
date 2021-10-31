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
    GRACE_PERIOD():Promise<BN>
    MAXIMUM_DELAY():Promise<BN>
    MINIMUM_DELAY():Promise<BN>
    acceptAdmin(pendingAdmin_: string,eta: BN,):Promise<void>
    admin():Promise<string>
    cancelTransaction(target: string,lev: string,amount: BN,eta: BN,):Promise<void>
    delay():Promise<BN>
    executeTransaction(target: string,lev: string,amount: BN,eta: BN,):Promise<void>
    queueTransaction(target: string,lev: string,amount: BN,eta: BN,):Promise<string>
    queuedTransactions(index_0: string,):Promise<boolean>
    setDelay(delay_: BN,):Promise<void>
    setPendingAdmin(pendingAdmin_: string,eta: BN,):Promise<void>
}





export enum TimelockEvents {
    CancelTransaction = 'CancelTransaction',
    ExecuteTransaction = 'ExecuteTransaction',
    NewAdmin = 'NewAdmin',
    NewDelay = 'NewDelay',
    NewPendingAdmin = 'NewPendingAdmin',
    QueueTransaction = 'QueueTransaction',
}

export interface TimelockCancelTransactionEventArgs extends DecodedLogArgs {
    txHash: string;
    target: string;
    lev: string;
    amount: BN;
    eta: BN;
}

export interface TimelockExecuteTransactionEventArgs extends DecodedLogArgs {
    txHash: string;
    target: string;
    lev: string;
    amount: BN;
    eta: BN;
}

export interface TimelockNewAdminEventArgs extends DecodedLogArgs {
    newAdmin: string;
}

export interface TimelockNewDelayEventArgs extends DecodedLogArgs {
    newDelay: BN;
}

export interface TimelockNewPendingAdminEventArgs extends DecodedLogArgs {
    newPendingAdmin: string;
}

export interface TimelockQueueTransactionEventArgs extends DecodedLogArgs {
    txHash: string;
    target: string;
    lev: string;
    amount: BN;
    eta: BN;
}


export type TimelockEventArgs =
    | TimelockCancelTransactionEventArgs
    | TimelockExecuteTransactionEventArgs
    | TimelockNewAdminEventArgs
    | TimelockNewDelayEventArgs
    | TimelockNewPendingAdminEventArgs
    | TimelockQueueTransactionEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class TimelockContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'Timelock';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<TimelockEventArgs, TimelockEvents>;


    public static Instance(): (TimelockContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_Timelock")) {
          // @ts-ignore
          const obj = window.__eth_contract_Timelock
          if (obj instanceof TimelockContract) {
            return (obj) as TimelockContract
          } else {
            return (obj) as TimelockContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<TimelockContract>
    {
        const contractInstance = await new TimelockContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["admin_",
"delay_"
];

        if (window && !window.hasOwnProperty("__eth_contract_Timelock")) {
            // @ts-ignore
            window.__eth_contract_Timelock = contractInstance
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
                        name: 'admin_',
                        type: 'address',
                    },
                    {
                        name: 'delay_',
                        type: 'uint256',
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
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'CancelTransaction',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ExecuteTransaction',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAdmin',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'NewAdmin',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newDelay',
                        type: 'uint256',
                        indexed: true,
                    },
                ],
                name: 'NewDelay',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newPendingAdmin',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'NewPendingAdmin',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'QueueTransaction',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                outputs: [
                ],
                payable: true,
                stateMutability: 'payable',
                type: 'fallback',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'GRACE_PERIOD',
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
                name: 'MAXIMUM_DELAY',
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
                name: 'MINIMUM_DELAY',
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
                        name: 'pendingAdmin_',
                        type: 'address',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'acceptAdmin',
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
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'cancelTransaction',
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
                name: 'delay',
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
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'executeTransaction',
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
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'queueTransaction',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
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
                        type: 'bytes32',
                    },
                ],
                name: 'queuedTransactions',
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
                        name: 'delay_',
                        type: 'uint256',
                    },
                ],
                name: 'setDelay',
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
                        name: 'pendingAdmin_',
                        type: 'address',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'setPendingAdmin',
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

    public async GRACE_PERIOD(): Promise<BN> {
        const self = this as any as TimelockContract;


        const promizz = self._contract.methods.GRACE_PERIOD(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async GRACE_PERIODGas(): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.GRACE_PERIOD().estimateGas();
        return gasAmount;
    };


    public async MAXIMUM_DELAY(): Promise<BN> {
        const self = this as any as TimelockContract;


        const promizz = self._contract.methods.MAXIMUM_DELAY(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async MAXIMUM_DELAYGas(): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.MAXIMUM_DELAY().estimateGas();
        return gasAmount;
    };


    public async MINIMUM_DELAY(): Promise<BN> {
        const self = this as any as TimelockContract;


        const promizz = self._contract.methods.MINIMUM_DELAY(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async MINIMUM_DELAYGas(): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.MINIMUM_DELAY().estimateGas();
        return gasAmount;
    };


    public async acceptAdmin(pendingAdmin_: string,eta: BN,): Promise<void> {
        const self = this as any as TimelockContract;

            assert.isString('pendingAdmin_', pendingAdmin_);
            assert.isNumberOrBigNumber('eta', eta);

        const promizz = self._contract.methods.acceptAdmin(
            pendingAdmin_,
                    eta,
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


    public async acceptAdminGas(pendingAdmin_: string,eta: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.acceptAdmin(pendingAdmin_,eta,).estimateGas();
        return gasAmount;
    };


    public async admin(): Promise<string> {
        const self = this as any as TimelockContract;


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
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.admin().estimateGas();
        return gasAmount;
    };


    public async cancelTransaction(target: string,lev: string,amount: BN,eta: BN,): Promise<void> {
        const self = this as any as TimelockContract;

            assert.isString('target', target);
            assert.isString('lev', lev);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('eta', eta);

        const promizz = self._contract.methods.cancelTransaction(
            target,
                    lev,
                    amount,
                    eta,
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


    public async cancelTransactionGas(target: string,lev: string,amount: BN,eta: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.cancelTransaction(target,lev,amount,eta,).estimateGas();
        return gasAmount;
    };


    public async delay(): Promise<BN> {
        const self = this as any as TimelockContract;


        const promizz = self._contract.methods.delay(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async delayGas(): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.delay().estimateGas();
        return gasAmount;
    };


    public async executeTransaction(target: string,lev: string,amount: BN,eta: BN,): Promise<void> {
        const self = this as any as TimelockContract;

            assert.isString('target', target);
            assert.isString('lev', lev);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('eta', eta);

        const promizz = self._contract.methods.executeTransaction(
            target,
                    lev,
                    amount,
                    eta,
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


    public async executeTransactionGas(target: string,lev: string,amount: BN,eta: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.executeTransaction(target,lev,amount,eta,).estimateGas();
        return gasAmount;
    };


    public async queueTransaction(target: string,lev: string,amount: BN,eta: BN,): Promise<string> {
        const self = this as any as TimelockContract;

            assert.isString('target', target);
            assert.isString('lev', lev);
            assert.isNumberOrBigNumber('amount', amount);
            assert.isNumberOrBigNumber('eta', eta);

        const promizz = self._contract.methods.queueTransaction(
            target,
                    lev,
                    amount,
                    eta,
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


    public async queueTransactionGas(target: string,lev: string,amount: BN,eta: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.queueTransaction(target,lev,amount,eta,).estimateGas();
        return gasAmount;
    };


    public async queuedTransactions(index_0: string,): Promise<boolean> {
        const self = this as any as TimelockContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.queuedTransactions(
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


    public async queuedTransactionsGas(index_0: string,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.queuedTransactions(index_0,).estimateGas();
        return gasAmount;
    };


    public async setDelay(delay_: BN,): Promise<void> {
        const self = this as any as TimelockContract;

            assert.isNumberOrBigNumber('delay_', delay_);

        const promizz = self._contract.methods.setDelay(
            delay_,
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


    public async setDelayGas(delay_: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.setDelay(delay_,).estimateGas();
        return gasAmount;
    };


    public async setPendingAdmin(pendingAdmin_: string,eta: BN,): Promise<void> {
        const self = this as any as TimelockContract;

            assert.isString('pendingAdmin_', pendingAdmin_);
            assert.isNumberOrBigNumber('eta', eta);

        const promizz = self._contract.methods.setPendingAdmin(
            pendingAdmin_,
                    eta,
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


    public async setPendingAdminGas(pendingAdmin_: string,eta: BN,): Promise<number>{
        const self = this as any as TimelockContract;
        const gasAmount = await self._contract.methods.setPendingAdmin(pendingAdmin_,eta,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the Timelock contract.
     * @param eventName The Timelock contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends TimelockEventArgs>(
        eventName: TimelockEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, TimelockEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            TimelockContract.ABI(),
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
     * @param eventName The Timelock contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends TimelockEventArgs>(
        eventName: TimelockEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, TimelockEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            TimelockContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('Timelock', TimelockContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            TimelockContract.ABI(),
            supportedProvider,
        );

        TimelockContract.ABI().forEach((item, index) => {
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
