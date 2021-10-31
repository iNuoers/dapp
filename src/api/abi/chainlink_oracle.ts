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
    WETH():Promise<string>
    getAssetPrice(asset: string,):Promise<BN>
    getAssetsPrices(assets: string[],):Promise<BN[]>
    getFallbackOracle():Promise<string>
    getSourceOfAsset(asset: string,):Promise<string>
    owner():Promise<string>
    renounceOwnership():Promise<void>
    setAssetSources(assets: string[],sources: string[],):Promise<void>
    setFallbackOracle(fallbackOracle: string,):Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
}





export enum ChainlinkOracleEvents {
    AssetSourceUpdated = 'AssetSourceUpdated',
    FallbackOracleUpdated = 'FallbackOracleUpdated',
    OwnershipTransferred = 'OwnershipTransferred',
    WethSet = 'WethSet',
}

export interface ChainlinkOracleAssetSourceUpdatedEventArgs extends DecodedLogArgs {
    asset: string;
    source: string;
}

export interface ChainlinkOracleFallbackOracleUpdatedEventArgs extends DecodedLogArgs {
    fallbackOracle: string;
}

export interface ChainlinkOracleOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface ChainlinkOracleWethSetEventArgs extends DecodedLogArgs {
    weth: string;
}


export type ChainlinkOracleEventArgs =
    | ChainlinkOracleAssetSourceUpdatedEventArgs
    | ChainlinkOracleFallbackOracleUpdatedEventArgs
    | ChainlinkOracleOwnershipTransferredEventArgs
    | ChainlinkOracleWethSetEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class ChainlinkOracleContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'ChainlinkOracle';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<ChainlinkOracleEventArgs, ChainlinkOracleEvents>;


    public static Instance(): (ChainlinkOracleContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_ChainlinkOracle")) {
          // @ts-ignore
          const obj = window.__eth_contract_ChainlinkOracle
          if (obj instanceof ChainlinkOracleContract) {
            return (obj) as ChainlinkOracleContract
          } else {
            return (obj) as ChainlinkOracleContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<ChainlinkOracleContract>
    {
        const contractInstance = await new ChainlinkOracleContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["assets",
"sources",
"fallbackOracle",
"weth"
];

        if (window && !window.hasOwnProperty("__eth_contract_ChainlinkOracle")) {
            // @ts-ignore
            window.__eth_contract_ChainlinkOracle = contractInstance
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
                        name: 'assets',
                        type: 'address[]',
                    },
                    {
                        name: 'sources',
                        type: 'address[]',
                    },
                    {
                        name: 'fallbackOracle',
                        type: 'address',
                    },
                    {
                        name: 'weth',
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
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'source',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'AssetSourceUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'fallbackOracle',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'FallbackOracleUpdated',
                outputs: [
                ],
                type: 'event',
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
                anonymous: false,
                inputs: [
                    {
                        name: 'weth',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'WethSet',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                name: 'WETH',
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
                name: 'getAssetPrice',
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
                        name: 'assets',
                        type: 'address[]',
                    },
                ],
                name: 'getAssetsPrices',
                outputs: [
                    {
                        name: '',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'getFallbackOracle',
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
                name: 'getSourceOfAsset',
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
                        name: 'assets',
                        type: 'address[]',
                    },
                    {
                        name: 'sources',
                        type: 'address[]',
                    },
                ],
                name: 'setAssetSources',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'fallbackOracle',
                        type: 'address',
                    },
                ],
                name: 'setFallbackOracle',
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
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async WETH(): Promise<string> {
        const self = this as any as ChainlinkOracleContract;


        const promizz = self._contract.methods.WETH(
)


        const result = await promizz.call();

        return result;
    };


    public async WETHGas(): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.WETH().estimateGas();
        return gasAmount;
    };


    public async getAssetPrice(asset: string,): Promise<BN> {
        const self = this as any as ChainlinkOracleContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getAssetPrice(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getAssetPriceGas(asset: string,): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.getAssetPrice(asset,).estimateGas();
        return gasAmount;
    };


    public async getAssetsPrices(assets: string[],): Promise<BN[]> {
        const self = this as any as ChainlinkOracleContract;

            assert.isArray('assets', assets);

        const promizz = self._contract.methods.getAssetsPrices(
            assets,
        )


        const result = await promizz.call();

        return result;
    };


    public async getAssetsPricesGas(assets: string[],): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.getAssetsPrices(assets,).estimateGas();
        return gasAmount;
    };


    public async getFallbackOracle(): Promise<string> {
        const self = this as any as ChainlinkOracleContract;


        const promizz = self._contract.methods.getFallbackOracle(
)


        const result = await promizz.call();

        return result;
    };


    public async getFallbackOracleGas(): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.getFallbackOracle().estimateGas();
        return gasAmount;
    };


    public async getSourceOfAsset(asset: string,): Promise<string> {
        const self = this as any as ChainlinkOracleContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.getSourceOfAsset(
            asset,
        )


        const result = await promizz.call();

        return result;
    };


    public async getSourceOfAssetGas(asset: string,): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.getSourceOfAsset(asset,).estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as ChainlinkOracleContract;


        const promizz = self._contract.methods.owner(
)


        const result = await promizz.call();

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as ChainlinkOracleContract;


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
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async setAssetSources(assets: string[],sources: string[],): Promise<void> {
        const self = this as any as ChainlinkOracleContract;

            assert.isArray('assets', assets);
            assert.isArray('sources', sources);

        const promizz = self._contract.methods.setAssetSources(
            assets,
                    sources,
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


    public async setAssetSourcesGas(assets: string[],sources: string[],): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.setAssetSources(assets,sources,).estimateGas();
        return gasAmount;
    };


    public async setFallbackOracle(fallbackOracle: string,): Promise<void> {
        const self = this as any as ChainlinkOracleContract;

            assert.isString('fallbackOracle', fallbackOracle);

        const promizz = self._contract.methods.setFallbackOracle(
            fallbackOracle,
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


    public async setFallbackOracleGas(fallbackOracle: string,): Promise<number>{
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.setFallbackOracle(fallbackOracle,).estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as ChainlinkOracleContract;

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
        const self = this as any as ChainlinkOracleContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the ChainlinkOracle contract.
     * @param eventName The ChainlinkOracle contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends ChainlinkOracleEventArgs>(
        eventName: ChainlinkOracleEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, ChainlinkOracleEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            ChainlinkOracleContract.ABI(),
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
     * @param eventName The ChainlinkOracle contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends ChainlinkOracleEventArgs>(
        eventName: ChainlinkOracleEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, ChainlinkOracleEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            ChainlinkOracleContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('ChainlinkOracle', ChainlinkOracleContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            ChainlinkOracleContract.ABI(),
            supportedProvider,
        );

        ChainlinkOracleContract.ABI().forEach((item, index) => {
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
