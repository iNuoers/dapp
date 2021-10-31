import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var ChainlinkOracleEvents;
(function (ChainlinkOracleEvents) {
    ChainlinkOracleEvents["AssetSourceUpdated"] = "AssetSourceUpdated";
    ChainlinkOracleEvents["FallbackOracleUpdated"] = "FallbackOracleUpdated";
    ChainlinkOracleEvents["OwnershipTransferred"] = "OwnershipTransferred";
    ChainlinkOracleEvents["WethSet"] = "WethSet";
})(ChainlinkOracleEvents || (ChainlinkOracleEvents = {}));
export class ChainlinkOracleContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('ChainlinkOracle', ChainlinkOracleContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(ChainlinkOracleContract.ABI(), supportedProvider);
        ChainlinkOracleContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_ChainlinkOracle")) {
            const obj = window.__eth_contract_ChainlinkOracle;
            if (obj instanceof ChainlinkOracleContract) {
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
        const contractInstance = await new ChainlinkOracleContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["assets",
            "sources",
            "fallbackOracle",
            "weth"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_ChainlinkOracle")) {
            window.__eth_contract_ChainlinkOracle = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
                type: 'event',
            },
            {
                inputs: [],
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
                inputs: [],
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
                inputs: [],
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
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async WETH() {
        const self = this;
        const promizz = self._contract.methods.WETH();
        const result = await promizz.call();
        return result;
    }
    ;
    async WETHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.WETH().estimateGas();
        return gasAmount;
    }
    ;
    async getAssetPrice(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getAssetPrice(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAssetPriceGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getAssetPrice(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getAssetsPrices(assets) {
        const self = this;
        assert.isArray('assets', assets);
        const promizz = self._contract.methods.getAssetsPrices(assets);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAssetsPricesGas(assets) {
        const self = this;
        const gasAmount = await self._contract.methods.getAssetsPrices(assets).estimateGas();
        return gasAmount;
    }
    ;
    async getFallbackOracle() {
        const self = this;
        const promizz = self._contract.methods.getFallbackOracle();
        const result = await promizz.call();
        return result;
    }
    ;
    async getFallbackOracleGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getFallbackOracle().estimateGas();
        return gasAmount;
    }
    ;
    async getSourceOfAsset(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getSourceOfAsset(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getSourceOfAssetGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getSourceOfAsset(asset).estimateGas();
        return gasAmount;
    }
    ;
    async owner() {
        const self = this;
        const promizz = self._contract.methods.owner();
        const result = await promizz.call();
        return result;
    }
    ;
    async ownerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    }
    ;
    async renounceOwnership() {
        const self = this;
        const promizz = self._contract.methods.renounceOwnership();
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
    async renounceOwnershipGas() {
        const self = this;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    }
    ;
    async setAssetSources(assets, sources) {
        const self = this;
        assert.isArray('assets', assets);
        assert.isArray('sources', sources);
        const promizz = self._contract.methods.setAssetSources(assets, sources);
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
    async setAssetSourcesGas(assets, sources) {
        const self = this;
        const gasAmount = await self._contract.methods.setAssetSources(assets, sources).estimateGas();
        return gasAmount;
    }
    ;
    async setFallbackOracle(fallbackOracle) {
        const self = this;
        assert.isString('fallbackOracle', fallbackOracle);
        const promizz = self._contract.methods.setFallbackOracle(fallbackOracle);
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
    async setFallbackOracleGas(fallbackOracle) {
        const self = this;
        const gasAmount = await self._contract.methods.setFallbackOracle(fallbackOracle).estimateGas();
        return gasAmount;
    }
    ;
    async transferOwnership(newOwner) {
        const self = this;
        assert.isString('newOwner', newOwner);
        const promizz = self._contract.methods.transferOwnership(newOwner);
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
    async transferOwnershipGas(newOwner) {
        const self = this;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, ChainlinkOracleEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, ChainlinkOracleContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, ChainlinkOracleEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, ChainlinkOracleContract.ABI());
        return logs;
    }
}
ChainlinkOracleContract.contractName = 'ChainlinkOracle';
