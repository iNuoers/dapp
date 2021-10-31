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
    approveAsset(asset: string,CToken: string,):Promise<void>
    cETH():Promise<string>
    depositCToken(CToken: string,amount: BN,):Promise<BN>
    emergencyEtherTransfer(to: string,amount: BN,):Promise<void>
    emergencyTokenTransfer(token: string,to: string,amount: BN,):Promise<void>
    getMarginPoolAddress():Promise<string>
    owner():Promise<string>
    renounceOwnership():Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
}





export enum CompoundGatewayEvents {
    OwnershipTransferred = 'OwnershipTransferred',
}

export interface CompoundGatewayOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}


export type CompoundGatewayEventArgs =
    | CompoundGatewayOwnershipTransferredEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class CompoundGatewayContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'CompoundGateway';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<CompoundGatewayEventArgs, CompoundGatewayEvents>;


    public static Instance(): (CompoundGatewayContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_CompoundGateway")) {
          // @ts-ignore
          const obj = window.__eth_contract_CompoundGateway
          if (obj instanceof CompoundGatewayContract) {
            return (obj) as CompoundGatewayContract
          } else {
            return (obj) as CompoundGatewayContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<CompoundGatewayContract>
    {
        const contractInstance = await new CompoundGatewayContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["_pool",
"_weth",
"_ceth",
"_wethGateway"
];

        if (window && !window.hasOwnProperty("__eth_contract_CompoundGateway")) {
            // @ts-ignore
            window.__eth_contract_CompoundGateway = contractInstance
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
                        name: '_weth',
                        type: 'address',
                    },
                    {
                        name: '_ceth',
                        type: 'address',
                    },
                    {
                        name: '_wethGateway',
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
                    {
                        name: 'CToken',
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
                ],
                name: 'cETH',
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
                        name: 'CToken',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'depositCToken',
                outputs: [
                    {
                        name: 'ret',
                        type: 'uint256',
                    },
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

    public async WETH(): Promise<string> {
        const self = this as any as CompoundGatewayContract;


        const promizz = self._contract.methods.WETH(
)


        const result = await promizz.call();

        return result;
    };


    public async WETHGas(): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.WETH().estimateGas();
        return gasAmount;
    };


    public async approveAsset(asset: string,CToken: string,): Promise<void> {
        const self = this as any as CompoundGatewayContract;

            assert.isString('asset', asset);
            assert.isString('CToken', CToken);

        const promizz = self._contract.methods.approveAsset(
            asset,
                    CToken,
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


    public async approveAssetGas(asset: string,CToken: string,): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.approveAsset(asset,CToken,).estimateGas();
        return gasAmount;
    };


    public async cETH(): Promise<string> {
        const self = this as any as CompoundGatewayContract;


        const promizz = self._contract.methods.cETH(
)


        const result = await promizz.call();

        return result;
    };


    public async cETHGas(): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.cETH().estimateGas();
        return gasAmount;
    };


    public async depositCToken(CToken: string,amount: BN,): Promise<BN> {
        const self = this as any as CompoundGatewayContract;

            assert.isString('CToken', CToken);
            assert.isNumberOrBigNumber('amount', amount);

        const promizz = self._contract.methods.depositCToken(
            CToken,
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


    public async depositCTokenGas(CToken: string,amount: BN,): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.depositCToken(CToken,amount,).estimateGas();
        return gasAmount;
    };


    public async emergencyEtherTransfer(to: string,amount: BN,): Promise<void> {
        const self = this as any as CompoundGatewayContract;

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
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.emergencyEtherTransfer(to,amount,).estimateGas();
        return gasAmount;
    };


    public async emergencyTokenTransfer(token: string,to: string,amount: BN,): Promise<void> {
        const self = this as any as CompoundGatewayContract;

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
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.emergencyTokenTransfer(token,to,amount,).estimateGas();
        return gasAmount;
    };


    public async getMarginPoolAddress(): Promise<string> {
        const self = this as any as CompoundGatewayContract;


        const promizz = self._contract.methods.getMarginPoolAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async getMarginPoolAddressGas(): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.getMarginPoolAddress().estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as CompoundGatewayContract;


        const promizz = self._contract.methods.owner(
)


        const result = await promizz.call();

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as CompoundGatewayContract;


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
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as CompoundGatewayContract;

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
        const self = this as any as CompoundGatewayContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the CompoundGateway contract.
     * @param eventName The CompoundGateway contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends CompoundGatewayEventArgs>(
        eventName: CompoundGatewayEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, CompoundGatewayEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            CompoundGatewayContract.ABI(),
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
     * @param eventName The CompoundGateway contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends CompoundGatewayEventArgs>(
        eventName: CompoundGatewayEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, CompoundGatewayEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            CompoundGatewayContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('CompoundGateway', CompoundGatewayContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            CompoundGatewayContract.ABI(),
            supportedProvider,
        );

        CompoundGatewayContract.ABI().forEach((item, index) => {
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
