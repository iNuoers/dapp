import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var MarginPoolCollateralManagerEvents;
(function (MarginPoolCollateralManagerEvents) {
    MarginPoolCollateralManagerEvents["LiquidationCall"] = "LiquidationCall";
    MarginPoolCollateralManagerEvents["ReserveUsedAsCollateralDisabled"] = "ReserveUsedAsCollateralDisabled";
    MarginPoolCollateralManagerEvents["ReserveUsedAsCollateralEnabled"] = "ReserveUsedAsCollateralEnabled";
})(MarginPoolCollateralManagerEvents || (MarginPoolCollateralManagerEvents = {}));
export class MarginPoolCollateralManagerContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('MarginPoolCollateralManager', MarginPoolCollateralManagerContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(MarginPoolCollateralManagerContract.ABI(), supportedProvider);
        MarginPoolCollateralManagerContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolCollateralManager")) {
            const obj = window.__eth_contract_MarginPoolCollateralManager;
            if (obj instanceof MarginPoolCollateralManagerContract) {
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
        const contractInstance = await new MarginPoolCollateralManagerContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolCollateralManager")) {
            window.__eth_contract_MarginPoolCollateralManager = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
        ];
        return abi;
    }
    async initialize(_uniswaper, _weth) {
        const self = this;
        assert.isString('_uniswaper', _uniswaper);
        assert.isString('_weth', _weth);
        const promizz = self._contract.methods.initialize(_uniswaper, _weth);
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
    async initializeGas(_uniswaper, _weth) {
        const self = this;
        const gasAmount = await self._contract.methods.initialize(_uniswaper, _weth).estimateGas();
        return gasAmount;
    }
    ;
    async liquidationCall(collateralAsset, debtAsset, user, debtToCover) {
        const self = this;
        assert.isString('collateralAsset', collateralAsset);
        assert.isString('debtAsset', debtAsset);
        assert.isString('user', user);
        assert.isNumberOrBigNumber('debtToCover', debtToCover);
        const promizz = self._contract.methods.liquidationCall(collateralAsset, debtAsset, user, debtToCover);
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
    async liquidationCallGas(collateralAsset, debtAsset, user, debtToCover) {
        const self = this;
        const gasAmount = await self._contract.methods.liquidationCall(collateralAsset, debtAsset, user, debtToCover).estimateGas();
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
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolCollateralManagerEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, MarginPoolCollateralManagerContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolCollateralManagerEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, MarginPoolCollateralManagerContract.ABI());
        return logs;
    }
}
MarginPoolCollateralManagerContract.contractName = 'MarginPoolCollateralManager';
