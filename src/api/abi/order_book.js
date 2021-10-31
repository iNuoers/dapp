import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var OrderBookEvents;
(function (OrderBookEvents) {
    OrderBookEvents["OrderCancelled"] = "OrderCancelled";
    OrderBookEvents["OrderExecuted"] = "OrderExecuted";
    OrderBookEvents["OrderPlaced"] = "OrderPlaced";
})(OrderBookEvents || (OrderBookEvents = {}));
export class OrderBookContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('OrderBook', OrderBookContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(OrderBookContract.ABI(), supportedProvider);
        OrderBookContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_OrderBook")) {
            const obj = window.__eth_contract_OrderBook;
            if (obj instanceof OrderBookContract) {
                return (obj);
            }
            else {
                return (obj);
            }
        }
        else {
            return false;
        }
    }
    static async init(contract_address, supportedProvider, ww3) {
        const contractInstance = await new OrderBookContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_OrderBook")) {
            window.__eth_contract_OrderBook = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
                type: 'event',
            },
            {
                inputs: [],
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
                outputs: [],
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
                outputs: [],
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
                inputs: [],
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
                outputs: [],
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
                inputs: [],
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
                inputs: [],
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
                inputs: [],
                outputs: [],
                stateMutability: 'payable',
                type: 'receive',
            },
        ];
        return abi;
    }
    async MARGINPOOL_REVISION() {
        const self = this;
        const promizz = self._contract.methods.MARGINPOOL_REVISION();
        const result = await promizz.call();
        return result;
    }
    ;
    async MARGINPOOL_REVISIONGas() {
        const self = this;
        const gasAmount = await self._contract.methods.MARGINPOOL_REVISION().estimateGas();
        return gasAmount;
    }
    ;
    async cancelOrder(order) {
        const self = this;
        const promizz = self._contract.methods.cancelOrder(order);
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
            this.catchErro(e);
        });
        return result;
    }
    ;
    async cancelOrderGas(order) {
        const self = this;
        const gasAmount = await self._contract.methods.cancelOrder(order).estimateGas();
        return gasAmount;
    }
    ;
    async executeOrderWithAggregation(order, codes, gas, swapType) {
        const self = this;
        assert.isString('codes', codes);
        assert.isNumberOrBigNumber('gas', gas);
        assert.isNumberOrBigNumber('swapType', swapType);
        const promizz = self._contract.methods.executeOrderWithAggregation(order, codes, gas, swapType);
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
            this.catchErro(e);
        });
        return result;
    }
    ;
    async executeOrderWithAggregationGas(order, codes, gas, swapType) {
        const self = this;
        const gasAmount = await self._contract.methods.executeOrderWithAggregation(order, codes, gas, swapType).estimateGas();
        return gasAmount;
    }
    ;
    async executeOrderWithUni(order) {
        const self = this;
        const promizz = self._contract.methods.executeOrderWithUni(order);
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
            this.catchErro(e);
        });
        return result;
    }
    ;
    async executeOrderWithUniGas(order) {
        const self = this;
        const gasAmount = await self._contract.methods.executeOrderWithUni(order).estimateGas();
        return gasAmount;
    }
    ;
    async g_status(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.g_status(index_0);
        const result = await promizz.call();
        return result;
    }
    ;
    async g_statusGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.g_status(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async getMarginPool() {
        const self = this;
        const promizz = self._contract.methods.getMarginPool();
        const result = await promizz.call();
        return result;
    }
    ;
    async getMarginPoolGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getMarginPool().estimateGas();
        return gasAmount;
    }
    ;
    async getOrderStates(orderHashes) {
        const self = this;
        assert.isArray('orderHashes', orderHashes);
        const promizz = self._contract.methods.getOrderStates(orderHashes);
        const result = await promizz.call();
        return result;
    }
    ;
    async getOrderStatesGas(orderHashes) {
        const self = this;
        const gasAmount = await self._contract.methods.getOrderStates(orderHashes).estimateGas();
        return gasAmount;
    }
    ;
    async initialize(provider, _uniswaper, _weth) {
        const self = this;
        assert.isString('provider', provider);
        assert.isString('_uniswaper', _uniswaper);
        assert.isString('_weth', _weth);
        const promizz = self._contract.methods.initialize(provider, _uniswaper, _weth);
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
            this.catchErro(e);
        });
        return result;
    }
    ;
    async initializeGas(provider, _uniswaper, _weth) {
        const self = this;
        const gasAmount = await self._contract.methods.initialize(provider, _uniswaper, _weth).estimateGas();
        return gasAmount;
    }
    ;
    async isTradeable(order) {
        const self = this;
        const promizz = self._contract.methods.isTradeable(order);
        const result = await promizz.call();
        return result;
    }
    ;
    async isTradeableGas(order) {
        const self = this;
        const gasAmount = await self._contract.methods.isTradeable(order).estimateGas();
        return gasAmount;
    }
    ;
    async placeOrder(order) {
        const self = this;
        const promizz = self._contract.methods.placeOrder(order);
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
            this.catchErro(e);
        });
        return result;
    }
    ;
    async placeOrderGas(order) {
        const self = this;
        const gasAmount = await self._contract.methods.placeOrder(order).estimateGas();
        return gasAmount;
    }
    ;
    async uniswaper() {
        const self = this;
        const promizz = self._contract.methods.uniswaper();
        const result = await promizz.call();
        return result;
    }
    ;
    async uniswaperGas() {
        const self = this;
        const gasAmount = await self._contract.methods.uniswaper().estimateGas();
        return gasAmount;
    }
    ;
    async wethAddress() {
        const self = this;
        const promizz = self._contract.methods.wethAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async wethAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.wethAddress().estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, OrderBookEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, OrderBookContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, OrderBookEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, OrderBookContract.ABI());
        return logs;
    }
}
OrderBookContract.contractName = 'OrderBook';
