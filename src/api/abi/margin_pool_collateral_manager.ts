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
    initialize(_uniswaper: string,_weth: string,):Promise<void>
    liquidationCall(collateralAsset: string,debtAsset: string,user: string,debtToCover: BN,):Promise<[BN, string]>
    uniswaper():Promise<string>
    wethAddress():Promise<string>
}





export enum MarginPoolCollateralManagerEvents {
    LiquidationCall = 'LiquidationCall',
    ReserveUsedAsCollateralDisabled = 'ReserveUsedAsCollateralDisabled',
    ReserveUsedAsCollateralEnabled = 'ReserveUsedAsCollateralEnabled',
}

export interface MarginPoolCollateralManagerLiquidationCallEventArgs extends DecodedLogArgs {
    collateral: string;
    principal: string;
    user: string;
    debtToCover: BN;
    liquidatedCollateralAmount: BN;
    liquidator: string;
}

export interface MarginPoolCollateralManagerReserveUsedAsCollateralDisabledEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
}

export interface MarginPoolCollateralManagerReserveUsedAsCollateralEnabledEventArgs extends DecodedLogArgs {
    reserve: string;
    user: string;
}


export type MarginPoolCollateralManagerEventArgs =
    | MarginPoolCollateralManagerLiquidationCallEventArgs
    | MarginPoolCollateralManagerReserveUsedAsCollateralDisabledEventArgs
    | MarginPoolCollateralManagerReserveUsedAsCollateralEnabledEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MarginPoolCollateralManagerContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'MarginPoolCollateralManager';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<MarginPoolCollateralManagerEventArgs, MarginPoolCollateralManagerEvents>;


    public static Instance(): (MarginPoolCollateralManagerContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolCollateralManager")) {
          // @ts-ignore
          const obj = window.__eth_contract_MarginPoolCollateralManager
          if (obj instanceof MarginPoolCollateralManagerContract) {
            return (obj) as MarginPoolCollateralManagerContract
          } else {
            return (obj) as MarginPoolCollateralManagerContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<MarginPoolCollateralManagerContract>
    {
        const contractInstance = await new MarginPoolCollateralManagerContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolCollateralManager")) {
            // @ts-ignore
            window.__eth_contract_MarginPoolCollateralManager = contractInstance
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
                        name: 'collateral',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'principal',
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
                inputs: [
                    {
                        name: '_uniswaper',
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
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'string',
                    },
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
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async initialize(_uniswaper: string,_weth: string,): Promise<void> {
        const self = this as any as MarginPoolCollateralManagerContract;

            assert.isString('_uniswaper', _uniswaper);
            assert.isString('_weth', _weth);

        const promizz = self._contract.methods.initialize(
            _uniswaper,
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


    public async initializeGas(_uniswaper: string,_weth: string,): Promise<number>{
        const self = this as any as MarginPoolCollateralManagerContract;
        const gasAmount = await self._contract.methods.initialize(_uniswaper,_weth,).estimateGas();
        return gasAmount;
    };


    public async liquidationCall(collateralAsset: string,debtAsset: string,user: string,debtToCover: BN,): Promise<[BN, string]> {
        const self = this as any as MarginPoolCollateralManagerContract;

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
        const self = this as any as MarginPoolCollateralManagerContract;
        const gasAmount = await self._contract.methods.liquidationCall(collateralAsset,debtAsset,user,debtToCover,).estimateGas();
        return gasAmount;
    };


    public async uniswaper(): Promise<string> {
        const self = this as any as MarginPoolCollateralManagerContract;


        const promizz = self._contract.methods.uniswaper(
)


        const result = await promizz.call();

        return result;
    };


    public async uniswaperGas(): Promise<number>{
        const self = this as any as MarginPoolCollateralManagerContract;
        const gasAmount = await self._contract.methods.uniswaper().estimateGas();
        return gasAmount;
    };


    public async wethAddress(): Promise<string> {
        const self = this as any as MarginPoolCollateralManagerContract;


        const promizz = self._contract.methods.wethAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async wethAddressGas(): Promise<number>{
        const self = this as any as MarginPoolCollateralManagerContract;
        const gasAmount = await self._contract.methods.wethAddress().estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the MarginPoolCollateralManager contract.
     * @param eventName The MarginPoolCollateralManager contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends MarginPoolCollateralManagerEventArgs>(
        eventName: MarginPoolCollateralManagerEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolCollateralManagerEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            MarginPoolCollateralManagerContract.ABI(),
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
     * @param eventName The MarginPoolCollateralManager contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends MarginPoolCollateralManagerEventArgs>(
        eventName: MarginPoolCollateralManagerEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolCollateralManagerEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            MarginPoolCollateralManagerContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('MarginPoolCollateralManager', MarginPoolCollateralManagerContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            MarginPoolCollateralManagerContract.ABI(),
            supportedProvider,
        );

        MarginPoolCollateralManagerContract.ABI().forEach((item, index) => {
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
