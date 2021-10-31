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
    approveAllAsset():Promise<void>
    approveAsset(asset: string,):Promise<void>
    depositAToken(asset: string,amount: BN,):Promise<void>
    emergencyEtherTransfer(to: string,amount: BN,):Promise<void>
    emergencyTokenTransfer(token: string,to: string,amount: BN,):Promise<void>
    getMarginPoolAddress():Promise<string>
    getUserAccountData(user: string,):Promise<[BN, BN, BN]>
    owner():Promise<string>
    renounceOwnership():Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
}





export enum AAVEGatewayEvents {
    OwnershipTransferred = 'OwnershipTransferred',
}

export interface AAVEGatewayOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}


export type AAVEGatewayEventArgs =
    | AAVEGatewayOwnershipTransferredEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class AAVEGatewayContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'AAVEGateway';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<AAVEGatewayEventArgs, AAVEGatewayEvents>;


    public static Instance(): (AAVEGatewayContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_AAVEGateway")) {
          // @ts-ignore
          const obj = window.__eth_contract_AAVEGateway
          if (obj instanceof AAVEGatewayContract) {
            return (obj) as AAVEGatewayContract
          } else {
            return (obj) as AAVEGatewayContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<AAVEGatewayContract>
    {
        const contractInstance = await new AAVEGatewayContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["_pool",
"_AAVEPoolAddress"
];

        if (window && !window.hasOwnProperty("__eth_contract_AAVEGateway")) {
            // @ts-ignore
            window.__eth_contract_AAVEGateway = contractInstance
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
                        name: '_pool',
                        type: 'address',
                    },
                    {
                        name: '_AAVEPoolAddress',
                        type: 'address',
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
                        name: 'previousOwner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'newOwner',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OwnershipTransferred',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                outputs: [
                ],
                stateMutability: 'payable',
                type: 'fallback',
            },
            { 
                inputs: [
                ],
                name: 'approveAllAsset',
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
                ],
                name: 'approveAsset',
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
                ],
                name: 'depositAToken',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'emergencyEtherTransfer',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'token',
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
                ],
                name: 'emergencyTokenTransfer',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'getMarginPoolAddress',
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
                        name: 'ltv',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'owner',
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
                name: 'renounceOwnership',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                outputs: [
                ],
                stateMutability: 'payable',
                type: 'receive',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async approveAllAsset(): Promise<void> {
        const self = this as any as AAVEGatewayContract;


        const promizz = self._contract.methods.approveAllAsset(
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


    public async approveAllAssetGas(): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.approveAllAsset().estimateGas();
        return gasAmount;
    };


    public async approveAsset(asset: string,): Promise<void> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.approveAsset(
            asset,
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


    public async approveAssetGas(asset: string,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.approveAsset(asset,).estimateGas();
        return gasAmount;
    };


    public async depositAToken(asset: string,amount: BN,): Promise<void> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.depositAToken(
            asset,
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


    public async depositATokenGas(asset: string,amount: BN,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.depositAToken(asset,amount,).estimateGas();
        return gasAmount;
    };


    public async emergencyEtherTransfer(to: string,amount: BN,): Promise<void> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('to', to);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.emergencyEtherTransfer(
            to,
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


    public async emergencyEtherTransferGas(to: string,amount: BN,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.emergencyEtherTransfer(to,amount,).estimateGas();
        return gasAmount;
    };


    public async emergencyTokenTransfer(token: string,to: string,amount: BN,): Promise<void> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('token', token);
            assert.isString('to', to);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.emergencyTokenTransfer(
            token,
                    to,
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


    public async emergencyTokenTransferGas(token: string,to: string,amount: BN,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.emergencyTokenTransfer(token,to,amount,).estimateGas();
        return gasAmount;
    };


    public async getMarginPoolAddress(): Promise<string> {
        const self = this as any as AAVEGatewayContract;


        const promizz = self._contract.methods.getMarginPoolAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async getMarginPoolAddressGas(): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.getMarginPoolAddress().estimateGas();
        return gasAmount;
    };


    public async getUserAccountData(user: string,): Promise<[BN, BN, BN]> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('user', user);

        const promizz = self._contract.methods.getUserAccountData(
            user,
        )


        const result = await promizz.call();

        return result;
    };


    public async getUserAccountDataGas(user: string,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.getUserAccountData(user,).estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as AAVEGatewayContract;


        const promizz = self._contract.methods.owner(
)


        const result = await promizz.call();

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as AAVEGatewayContract;


        const promizz = self._contract.methods.renounceOwnership(
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


    public async renounceOwnershipGas(): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as AAVEGatewayContract;

            assert.isString('newOwner', newOwner);

        const promizz = self._contract.methods.transferOwnership(
            newOwner,
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


    public async transferOwnershipGas(newOwner: string,): Promise<number>{
        const self = this as any as AAVEGatewayContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the AAVEGateway contract.
     * @param eventName The AAVEGateway contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends AAVEGatewayEventArgs>(
        eventName: AAVEGatewayEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, AAVEGatewayEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            AAVEGatewayContract.ABI(),
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
     * @param eventName The AAVEGateway contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends AAVEGatewayEventArgs>(
        eventName: AAVEGatewayEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, AAVEGatewayEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            AAVEGatewayContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('AAVEGateway', AAVEGatewayContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            AAVEGatewayContract.ABI(),
            supportedProvider,
        );

        AAVEGatewayContract.ABI().forEach((item, index) => {
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
