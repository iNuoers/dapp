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
    MARGINPOOL_REVISION():Promise<BN>
    cancelOrder(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},):Promise<boolean>
    executeOrderWithAggregation(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},codes: string,gas: BN,swapType: number|BN,):Promise<void>
    executeOrderWithUni(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},):Promise<void>
    g_status(index_0: string,):Promise<BN>
    getMarginPool():Promise<string>
    getOrderStates(orderHashes: string[],):Promise<BN[]>
    initialize(provider: string,_uniswaper: string,_weth: string,):Promise<void>
    isTradeable(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},):Promise<boolean>
    placeOrder(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},):Promise<string>
    uniswaper():Promise<string>
    wethAddress():Promise<string>
}





export enum OrderBookEvents {
    OrderCancelled = 'OrderCancelled',
    OrderExecuted = 'OrderExecuted',
    OrderPlaced = 'OrderPlaced',
}

export interface OrderBookOrderCancelledEventArgs extends DecodedLogArgs {
    orderHash: string;
}

export interface OrderBookOrderExecutedEventArgs extends DecodedLogArgs {
    orderHash: string;
    executor: string;
}

export interface OrderBookOrderPlacedEventArgs extends DecodedLogArgs {
    orderHash: string;
    orderType: BN;
    maker: string;
    tokenIn: string;
    tokenOut: string;
    targetPrice: BN;
    amountInOffered: BN;
    amountOutExpected: BN;
    executorFee: BN;
    makeTime: BN;
}


export type OrderBookEventArgs =
    | OrderBookOrderCancelledEventArgs
    | OrderBookOrderExecutedEventArgs
    | OrderBookOrderPlacedEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class OrderBookContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'OrderBook';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<OrderBookEventArgs, OrderBookEvents>;


    public static Instance(): (OrderBookContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_OrderBook")) {
          // @ts-ignore
          const obj = window.__eth_contract_OrderBook
          if (obj instanceof OrderBookContract) {
            return (obj) as OrderBookContract
          } else {
            return (obj) as OrderBookContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<OrderBookContract>
    {
        const contractInstance = await new OrderBookContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_OrderBook")) {
            // @ts-ignore
            window.__eth_contract_OrderBook = contractInstance
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
                        name: 'orderHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                ],
                name: 'OrderCancelled',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'orderHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'executor',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OrderExecuted',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'orderHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'orderType',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'maker',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'tokenIn',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'tokenOut',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'targetPrice',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'amountInOffered',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'amountOutExpected',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'executorFee',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'makeTime',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'OrderPlaced',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                ],
                name: 'MARGINPOOL_REVISION',
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
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderType',
                                type: 'uint8',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'tokenIn',
                                type: 'address',
                            },
                            {
                                name: 'tokenOut',
                                type: 'address',
                            },
                            {
                                name: 'targetPrice',
                                type: 'uint256',
                            },
                            {
                                name: 'amountInOffered',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOutExpected',
                                type: 'uint256',
                            },
                            {
                                name: 'executorFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makeTime',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                name: 'cancelOrder',
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
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderType',
                                type: 'uint8',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'tokenIn',
                                type: 'address',
                            },
                            {
                                name: 'tokenOut',
                                type: 'address',
                            },
                            {
                                name: 'targetPrice',
                                type: 'uint256',
                            },
                            {
                                name: 'amountInOffered',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOutExpected',
                                type: 'uint256',
                            },
                            {
                                name: 'executorFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makeTime',
                                type: 'uint256',
                            },
                        ]
                    },
                    {
                        name: 'codes',
                        type: 'bytes',
                    },
                    {
                        name: 'gas',
                        type: 'uint256',
                    },
                    {
                        name: 'swapType',
                        type: 'uint8',
                    },
                ],
                name: 'executeOrderWithAggregation',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderType',
                                type: 'uint8',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'tokenIn',
                                type: 'address',
                            },
                            {
                                name: 'tokenOut',
                                type: 'address',
                            },
                            {
                                name: 'targetPrice',
                                type: 'uint256',
                            },
                            {
                                name: 'amountInOffered',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOutExpected',
                                type: 'uint256',
                            },
                            {
                                name: 'executorFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makeTime',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                name: 'executeOrderWithUni',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'g_status',
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
                ],
                name: 'getMarginPool',
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
                        name: 'orderHashes',
                        type: 'bytes32[]',
                    },
                ],
                name: 'getOrderStates',
                outputs: [
                    {
                        name: '',
                        type: 'uint8[]',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
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
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderType',
                                type: 'uint8',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'tokenIn',
                                type: 'address',
                            },
                            {
                                name: 'tokenOut',
                                type: 'address',
                            },
                            {
                                name: 'targetPrice',
                                type: 'uint256',
                            },
                            {
                                name: 'amountInOffered',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOutExpected',
                                type: 'uint256',
                            },
                            {
                                name: 'executorFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makeTime',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                name: 'isTradeable',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'orderType',
                                type: 'uint8',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'tokenIn',
                                type: 'address',
                            },
                            {
                                name: 'tokenOut',
                                type: 'address',
                            },
                            {
                                name: 'targetPrice',
                                type: 'uint256',
                            },
                            {
                                name: 'amountInOffered',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOutExpected',
                                type: 'uint256',
                            },
                            {
                                name: 'executorFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makeTime',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                name: 'placeOrder',
                outputs: [
                    {
                        name: 'orderId',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'payable',
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

    public async MARGINPOOL_REVISION(): Promise<BN> {
        const self = this as any as OrderBookContract;


        const promizz = self._contract.methods.MARGINPOOL_REVISION(
)


        const result = await promizz.call();

        return result;
    };


    public async MARGINPOOL_REVISIONGas(): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.MARGINPOOL_REVISION().estimateGas();
        return gasAmount;
    };


    public async cancelOrder(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<boolean> {
        const self = this as any as OrderBookContract;

            

        const promizz = self._contract.methods.cancelOrder(
            order,
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


    public async cancelOrderGas(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.cancelOrder(order,).estimateGas();
        return gasAmount;
    };


    public async executeOrderWithAggregation(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},codes: string,gas: BN,swapType: number|BN,): Promise<void> {
        const self = this as any as OrderBookContract;

            
            assert.isString('codes', codes);
            assert.isNumberOrBigNumber('gas', gas);
            assert.isNumberOrBigNumber('swapType', swapType);

        const promizz = self._contract.methods.executeOrderWithAggregation(
            order,
                    codes,
                    gas,
                    swapType,
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


    public async executeOrderWithAggregationGas(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},codes: string,gas: BN,swapType: number|BN,): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.executeOrderWithAggregation(order,codes,gas,swapType,).estimateGas();
        return gasAmount;
    };


    public async executeOrderWithUni(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<void> {
        const self = this as any as OrderBookContract;

            

        const promizz = self._contract.methods.executeOrderWithUni(
            order,
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


    public async executeOrderWithUniGas(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.executeOrderWithUni(order,).estimateGas();
        return gasAmount;
    };


    public async g_status(index_0: string,): Promise<BN> {
        const self = this as any as OrderBookContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.g_status(
            index_0,
        )


        const result = await promizz.call();

        return result;
    };


    public async g_statusGas(index_0: string,): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.g_status(index_0,).estimateGas();
        return gasAmount;
    };


    public async getMarginPool(): Promise<string> {
        const self = this as any as OrderBookContract;


        const promizz = self._contract.methods.getMarginPool(
)


        const result = await promizz.call();

        return result;
    };


    public async getMarginPoolGas(): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.getMarginPool().estimateGas();
        return gasAmount;
    };


    public async getOrderStates(orderHashes: string[],): Promise<BN[]> {
        const self = this as any as OrderBookContract;

            assert.isArray('orderHashes', orderHashes);

        const promizz = self._contract.methods.getOrderStates(
            orderHashes,
        )


        const result = await promizz.call();

        return result;
    };


    public async getOrderStatesGas(orderHashes: string[],): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.getOrderStates(orderHashes,).estimateGas();
        return gasAmount;
    };


    public async initialize(provider: string,_uniswaper: string,_weth: string,): Promise<void> {
        const self = this as any as OrderBookContract;

            assert.isString('provider', provider);
            assert.isString('_uniswaper', _uniswaper);
            assert.isString('_weth', _weth);

        const promizz = self._contract.methods.initialize(
            provider,
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


    public async initializeGas(provider: string,_uniswaper: string,_weth: string,): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.initialize(provider,_uniswaper,_weth,).estimateGas();
        return gasAmount;
    };


    public async isTradeable(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<boolean> {
        const self = this as any as OrderBookContract;

            

        const promizz = self._contract.methods.isTradeable(
            order,
        )


        const result = await promizz.call();

        return result;
    };


    public async isTradeableGas(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.isTradeable(order,).estimateGas();
        return gasAmount;
    };


    public async placeOrder(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<string> {
        const self = this as any as OrderBookContract;

            

        const promizz = self._contract.methods.placeOrder(
            order,
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


    public async placeOrderGas(order: {orderType: number|BN;maker: string;tokenIn: string;tokenOut: string;targetPrice: BN;amountInOffered: BN;amountOutExpected: BN;executorFee: BN;makeTime: BN},): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.placeOrder(order,).estimateGas();
        return gasAmount;
    };


    public async uniswaper(): Promise<string> {
        const self = this as any as OrderBookContract;


        const promizz = self._contract.methods.uniswaper(
)


        const result = await promizz.call();

        return result;
    };


    public async uniswaperGas(): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.uniswaper().estimateGas();
        return gasAmount;
    };


    public async wethAddress(): Promise<string> {
        const self = this as any as OrderBookContract;


        const promizz = self._contract.methods.wethAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async wethAddressGas(): Promise<number>{
        const self = this as any as OrderBookContract;
        const gasAmount = await self._contract.methods.wethAddress().estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the OrderBook contract.
     * @param eventName The OrderBook contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends OrderBookEventArgs>(
        eventName: OrderBookEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, OrderBookEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            OrderBookContract.ABI(),
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
     * @param eventName The OrderBook contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends OrderBookEventArgs>(
        eventName: OrderBookEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, OrderBookEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            OrderBookContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('OrderBook', OrderBookContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            OrderBookContract.ABI(),
            supportedProvider,
        );

        OrderBookContract.ABI().forEach((item, index) => {
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
