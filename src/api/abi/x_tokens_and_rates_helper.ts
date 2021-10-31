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
    configureReserves(assets: string[],baseLTVs: BN[],liquidationThresholds: BN[],liquidationBonuses: BN[],reserveFactors: BN[],):Promise<void>
    initDeployment(assets: string[],symbols: string[],rates: BN[][],decimals: Array<number|BN>,):Promise<void>
    initReserve(variables: string[],xTokens: string[],strategies: string[],reserveDecimals: Array<number|BN>,):Promise<void>
    owner():Promise<string>
    renounceOwnership():Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
}





export enum XTokensAndRatesHelperEvents {
    OwnershipTransferred = 'OwnershipTransferred',
    deployedContracts = 'deployedContracts',
}

export interface XTokensAndRatesHelperOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface XTokensAndRatesHelperdeployedContractsEventArgs extends DecodedLogArgs {
    xToken: string;
    strategy: string;
}


export type XTokensAndRatesHelperEventArgs =
    | XTokensAndRatesHelperOwnershipTransferredEventArgs
    | XTokensAndRatesHelperdeployedContractsEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class XTokensAndRatesHelperContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'XTokensAndRatesHelper';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<XTokensAndRatesHelperEventArgs, XTokensAndRatesHelperEvents>;


    public static Instance(): (XTokensAndRatesHelperContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_XTokensAndRatesHelper")) {
          // @ts-ignore
          const obj = window.__eth_contract_XTokensAndRatesHelper
          if (obj instanceof XTokensAndRatesHelperContract) {
            return (obj) as XTokensAndRatesHelperContract
          } else {
            return (obj) as XTokensAndRatesHelperContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<XTokensAndRatesHelperContract>
    {
        const contractInstance = await new XTokensAndRatesHelperContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["_addressesProvider",
"_poolConfigurator"
];

        if (window && !window.hasOwnProperty("__eth_contract_XTokensAndRatesHelper")) {
            // @ts-ignore
            window.__eth_contract_XTokensAndRatesHelper = contractInstance
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
                        name: '_poolConfigurator',
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
                anonymous: false,
                inputs: [
                    {
                        name: 'xToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'strategy',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'deployedContracts',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                    {
                        name: 'assets',
                        type: 'address[]',
                    },
                    {
                        name: 'baseLTVs',
                        type: 'uint256[]',
                    },
                    {
                        name: 'liquidationThresholds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'liquidationBonuses',
                        type: 'uint256[]',
                    },
                    {
                        name: 'reserveFactors',
                        type: 'uint256[]',
                    },
                ],
                name: 'configureReserves',
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
                        name: 'symbols',
                        type: 'string[]',
                    },
                    {
                        name: 'rates',
                        type: 'uint256[4][]',
                    },
                    {
                        name: 'decimals',
                        type: 'uint8[]',
                    },
                ],
                name: 'initDeployment',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'variables',
                        type: 'address[]',
                    },
                    {
                        name: 'xTokens',
                        type: 'address[]',
                    },
                    {
                        name: 'strategies',
                        type: 'address[]',
                    },
                    {
                        name: 'reserveDecimals',
                        type: 'uint8[]',
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
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async configureReserves(assets: string[],baseLTVs: BN[],liquidationThresholds: BN[],liquidationBonuses: BN[],reserveFactors: BN[],): Promise<void> {
        const self = this as any as XTokensAndRatesHelperContract;

            assert.isArray('assets', assets);
            assert.isArray('baseLTVs', baseLTVs);
            assert.isArray('liquidationThresholds', liquidationThresholds);
            assert.isArray('liquidationBonuses', liquidationBonuses);
            assert.isArray('reserveFactors', reserveFactors);

        const promizz = self._contract.methods.configureReserves(
            assets,
                    baseLTVs,
                    liquidationThresholds,
                    liquidationBonuses,
                    reserveFactors,
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


    public async configureReservesGas(assets: string[],baseLTVs: BN[],liquidationThresholds: BN[],liquidationBonuses: BN[],reserveFactors: BN[],): Promise<number>{
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.configureReserves(assets,baseLTVs,liquidationThresholds,liquidationBonuses,reserveFactors,).estimateGas();
        return gasAmount;
    };


    public async initDeployment(assets: string[],symbols: string[],rates: BN[][],decimals: Array<number|BN>,): Promise<void> {
        const self = this as any as XTokensAndRatesHelperContract;

            assert.isArray('assets', assets);
            assert.isArray('symbols', symbols);
            assert.isArray('rates', rates);
            assert.isArray('decimals', decimals);

        const promizz = self._contract.methods.initDeployment(
            assets,
                    symbols,
                    rates,
                    decimals,
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


    public async initDeploymentGas(assets: string[],symbols: string[],rates: BN[][],decimals: Array<number|BN>,): Promise<number>{
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.initDeployment(assets,symbols,rates,decimals,).estimateGas();
        return gasAmount;
    };


    public async initReserve(variables: string[],xTokens: string[],strategies: string[],reserveDecimals: Array<number|BN>,): Promise<void> {
        const self = this as any as XTokensAndRatesHelperContract;

            assert.isArray('variables', variables);
            assert.isArray('xTokens', xTokens);
            assert.isArray('strategies', strategies);
            assert.isArray('reserveDecimals', reserveDecimals);

        const promizz = self._contract.methods.initReserve(
            variables,
                    xTokens,
                    strategies,
                    reserveDecimals,
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


    public async initReserveGas(variables: string[],xTokens: string[],strategies: string[],reserveDecimals: Array<number|BN>,): Promise<number>{
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.initReserve(variables,xTokens,strategies,reserveDecimals,).estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as XTokensAndRatesHelperContract;


        const promizz = self._contract.methods.owner(
)


        const result = await promizz.call();

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as XTokensAndRatesHelperContract;


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
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as XTokensAndRatesHelperContract;

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
        const self = this as any as XTokensAndRatesHelperContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the XTokensAndRatesHelper contract.
     * @param eventName The XTokensAndRatesHelper contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends XTokensAndRatesHelperEventArgs>(
        eventName: XTokensAndRatesHelperEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, XTokensAndRatesHelperEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            XTokensAndRatesHelperContract.ABI(),
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
     * @param eventName The XTokensAndRatesHelper contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends XTokensAndRatesHelperEventArgs>(
        eventName: XTokensAndRatesHelperEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, XTokensAndRatesHelperEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            XTokensAndRatesHelperContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('XTokensAndRatesHelper', XTokensAndRatesHelperContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            XTokensAndRatesHelperContract.ABI(),
            supportedProvider,
        );

        XTokensAndRatesHelperContract.ABI().forEach((item, index) => {
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
