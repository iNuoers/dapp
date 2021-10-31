import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var MarginPoolAddressesProviderEvents;
(function (MarginPoolAddressesProviderEvents) {
    MarginPoolAddressesProviderEvents["AddressSet"] = "AddressSet";
    MarginPoolAddressesProviderEvents["ConfigurationAdminUpdated"] = "ConfigurationAdminUpdated";
    MarginPoolAddressesProviderEvents["EmergencyAdminUpdated"] = "EmergencyAdminUpdated";
    MarginPoolAddressesProviderEvents["LeverTokenUpdated"] = "LeverTokenUpdated";
    MarginPoolAddressesProviderEvents["MarginPoolCollateralManagerUpdated"] = "MarginPoolCollateralManagerUpdated";
    MarginPoolAddressesProviderEvents["MarginPoolConfiguratorUpdated"] = "MarginPoolConfiguratorUpdated";
    MarginPoolAddressesProviderEvents["MarginPoolUpdated"] = "MarginPoolUpdated";
    MarginPoolAddressesProviderEvents["OrderBookUpdated"] = "OrderBookUpdated";
    MarginPoolAddressesProviderEvents["OwnershipTransferred"] = "OwnershipTransferred";
    MarginPoolAddressesProviderEvents["PriceOracleUpdated"] = "PriceOracleUpdated";
    MarginPoolAddressesProviderEvents["ProxyCreated"] = "ProxyCreated";
    MarginPoolAddressesProviderEvents["RewardsDistributionUpdated"] = "RewardsDistributionUpdated";
    MarginPoolAddressesProviderEvents["SwapMinerUpdated"] = "SwapMinerUpdated";
    MarginPoolAddressesProviderEvents["TreasuryAddressUpdated"] = "TreasuryAddressUpdated";
})(MarginPoolAddressesProviderEvents || (MarginPoolAddressesProviderEvents = {}));
export class MarginPoolAddressesProviderContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('MarginPoolAddressesProvider', MarginPoolAddressesProviderContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(MarginPoolAddressesProviderContract.ABI(), supportedProvider);
        MarginPoolAddressesProviderContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolAddressesProvider")) {
            const obj = window.__eth_contract_MarginPoolAddressesProvider;
            if (obj instanceof MarginPoolAddressesProviderContract) {
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
        const contractInstance = await new MarginPoolAddressesProviderContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolAddressesProvider")) {
            window.__eth_contract_MarginPoolAddressesProvider = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'hasProxy',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'AddressSet',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ConfigurationAdminUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'EmergencyAdminUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'LeverTokenUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolCollateralManagerUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolConfiguratorUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OrderBookUpdated',
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
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'PriceOracleUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ProxyCreated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'RewardsDistributionUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'SwapMinerUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'TreasuryAddressUpdated',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                    },
                ],
                name: 'getAddress',
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
                name: 'getEmergencyAdmin',
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
                name: 'getLeverToken',
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
                inputs: [],
                name: 'getMarginPoolConfigurator',
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
                name: 'getOrderBook',
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
                name: 'getPoolAdmin',
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
                name: 'getPriceOracle',
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
                name: 'getRewardsDistribution',
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
                name: 'getSwapMiner',
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
                name: 'getTreasuryAddress',
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
                        name: 'id',
                        type: 'bytes32',
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                    },
                ],
                name: 'setAddress',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                    },
                    {
                        name: 'implementationAddress',
                        type: 'address',
                    },
                ],
                name: 'setAddressAsProxy',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'emergencyAdmin',
                        type: 'address',
                    },
                ],
                name: 'setEmergencyAdmin',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'lever',
                        type: 'address',
                    },
                ],
                name: 'setLeverToken',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'configurator',
                        type: 'address',
                    },
                ],
                name: 'setMarginPoolConfiguratorImpl',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'pool',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: 'SushiswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'setMarginPoolImpl',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'orderBook',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'setOrderBookImpl',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'admin',
                        type: 'address',
                    },
                ],
                name: 'setPoolAdmin',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'priceOracle',
                        type: 'address',
                    },
                ],
                name: 'setPriceOracle',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'rewardsDistribution',
                        type: 'address',
                    },
                ],
                name: 'setRewardsDistribution',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'swapMiner',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_uniswapLevPairToken',
                        type: 'address',
                    },
                    {
                        name: 'LeverUsdOracle',
                        type: 'address',
                    },
                ],
                name: 'setSwapMinerImpl',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'treasuryAddress',
                        type: 'address',
                    },
                ],
                name: 'setTreasuryAddress',
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
    async getAddress(id) {
        const self = this;
        assert.isString('id', id);
        const promizz = self._contract.methods.getAddress(id);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAddressGas(id) {
        const self = this;
        const gasAmount = await self._contract.methods.getAddress(id).estimateGas();
        return gasAmount;
    }
    ;
    async getEmergencyAdmin() {
        const self = this;
        const promizz = self._contract.methods.getEmergencyAdmin();
        const result = await promizz.call();
        return result;
    }
    ;
    async getEmergencyAdminGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getEmergencyAdmin().estimateGas();
        return gasAmount;
    }
    ;
    async getLeverToken() {
        const self = this;
        const promizz = self._contract.methods.getLeverToken();
        const result = await promizz.call();
        return result;
    }
    ;
    async getLeverTokenGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getLeverToken().estimateGas();
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
    async getMarginPoolConfigurator() {
        const self = this;
        const promizz = self._contract.methods.getMarginPoolConfigurator();
        const result = await promizz.call();
        return result;
    }
    ;
    async getMarginPoolConfiguratorGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getMarginPoolConfigurator().estimateGas();
        return gasAmount;
    }
    ;
    async getOrderBook() {
        const self = this;
        const promizz = self._contract.methods.getOrderBook();
        const result = await promizz.call();
        return result;
    }
    ;
    async getOrderBookGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getOrderBook().estimateGas();
        return gasAmount;
    }
    ;
    async getPoolAdmin() {
        const self = this;
        const promizz = self._contract.methods.getPoolAdmin();
        const result = await promizz.call();
        return result;
    }
    ;
    async getPoolAdminGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getPoolAdmin().estimateGas();
        return gasAmount;
    }
    ;
    async getPriceOracle() {
        const self = this;
        const promizz = self._contract.methods.getPriceOracle();
        const result = await promizz.call();
        return result;
    }
    ;
    async getPriceOracleGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getPriceOracle().estimateGas();
        return gasAmount;
    }
    ;
    async getRewardsDistribution() {
        const self = this;
        const promizz = self._contract.methods.getRewardsDistribution();
        const result = await promizz.call();
        return result;
    }
    ;
    async getRewardsDistributionGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getRewardsDistribution().estimateGas();
        return gasAmount;
    }
    ;
    async getSwapMiner() {
        const self = this;
        const promizz = self._contract.methods.getSwapMiner();
        const result = await promizz.call();
        return result;
    }
    ;
    async getSwapMinerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getSwapMiner().estimateGas();
        return gasAmount;
    }
    ;
    async getTreasuryAddress() {
        const self = this;
        const promizz = self._contract.methods.getTreasuryAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async getTreasuryAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getTreasuryAddress().estimateGas();
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
    async setAddress(id, newAddress) {
        const self = this;
        assert.isString('id', id);
        assert.isString('newAddress', newAddress);
        const promizz = self._contract.methods.setAddress(id, newAddress);
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
    async setAddressGas(id, newAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.setAddress(id, newAddress).estimateGas();
        return gasAmount;
    }
    ;
    async setAddressAsProxy(id, implementationAddress) {
        const self = this;
        assert.isString('id', id);
        assert.isString('implementationAddress', implementationAddress);
        const promizz = self._contract.methods.setAddressAsProxy(id, implementationAddress);
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
    async setAddressAsProxyGas(id, implementationAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.setAddressAsProxy(id, implementationAddress).estimateGas();
        return gasAmount;
    }
    ;
    async setEmergencyAdmin(emergencyAdmin) {
        const self = this;
        assert.isString('emergencyAdmin', emergencyAdmin);
        const promizz = self._contract.methods.setEmergencyAdmin(emergencyAdmin);
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
    async setEmergencyAdminGas(emergencyAdmin) {
        const self = this;
        const gasAmount = await self._contract.methods.setEmergencyAdmin(emergencyAdmin).estimateGas();
        return gasAmount;
    }
    ;
    async setLeverToken(lever) {
        const self = this;
        assert.isString('lever', lever);
        const promizz = self._contract.methods.setLeverToken(lever);
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
    async setLeverTokenGas(lever) {
        const self = this;
        const gasAmount = await self._contract.methods.setLeverToken(lever).estimateGas();
        return gasAmount;
    }
    ;
    async setMarginPoolConfiguratorImpl(configurator) {
        const self = this;
        assert.isString('configurator', configurator);
        const promizz = self._contract.methods.setMarginPoolConfiguratorImpl(configurator);
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
    async setMarginPoolConfiguratorImplGas(configurator) {
        const self = this;
        const gasAmount = await self._contract.methods.setMarginPoolConfiguratorImpl(configurator).estimateGas();
        return gasAmount;
    }
    ;
    async setMarginPoolImpl(pool, UniswapRouter, SushiswapRouter, _weth) {
        const self = this;
        assert.isString('pool', pool);
        assert.isString('UniswapRouter', UniswapRouter);
        assert.isString('SushiswapRouter', SushiswapRouter);
        assert.isString('_weth', _weth);
        const promizz = self._contract.methods.setMarginPoolImpl(pool, UniswapRouter, SushiswapRouter, _weth);
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
    async setMarginPoolImplGas(pool, UniswapRouter, SushiswapRouter, _weth) {
        const self = this;
        const gasAmount = await self._contract.methods.setMarginPoolImpl(pool, UniswapRouter, SushiswapRouter, _weth).estimateGas();
        return gasAmount;
    }
    ;
    async setOrderBookImpl(orderBook, UniswapRouter, _weth) {
        const self = this;
        assert.isString('orderBook', orderBook);
        assert.isString('UniswapRouter', UniswapRouter);
        assert.isString('_weth', _weth);
        const promizz = self._contract.methods.setOrderBookImpl(orderBook, UniswapRouter, _weth);
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
    async setOrderBookImplGas(orderBook, UniswapRouter, _weth) {
        const self = this;
        const gasAmount = await self._contract.methods.setOrderBookImpl(orderBook, UniswapRouter, _weth).estimateGas();
        return gasAmount;
    }
    ;
    async setPoolAdmin(admin) {
        const self = this;
        assert.isString('admin', admin);
        const promizz = self._contract.methods.setPoolAdmin(admin);
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
    async setPoolAdminGas(admin) {
        const self = this;
        const gasAmount = await self._contract.methods.setPoolAdmin(admin).estimateGas();
        return gasAmount;
    }
    ;
    async setPriceOracle(priceOracle) {
        const self = this;
        assert.isString('priceOracle', priceOracle);
        const promizz = self._contract.methods.setPriceOracle(priceOracle);
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
    async setPriceOracleGas(priceOracle) {
        const self = this;
        const gasAmount = await self._contract.methods.setPriceOracle(priceOracle).estimateGas();
        return gasAmount;
    }
    ;
    async setRewardsDistribution(rewardsDistribution) {
        const self = this;
        assert.isString('rewardsDistribution', rewardsDistribution);
        const promizz = self._contract.methods.setRewardsDistribution(rewardsDistribution);
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
    async setRewardsDistributionGas(rewardsDistribution) {
        const self = this;
        const gasAmount = await self._contract.methods.setRewardsDistribution(rewardsDistribution).estimateGas();
        return gasAmount;
    }
    ;
    async setSwapMinerImpl(swapMiner, UniswapRouter, _uniswapLevPairToken, LeverUsdOracle) {
        const self = this;
        assert.isString('swapMiner', swapMiner);
        assert.isString('UniswapRouter', UniswapRouter);
        assert.isString('_uniswapLevPairToken', _uniswapLevPairToken);
        assert.isString('LeverUsdOracle', LeverUsdOracle);
        const promizz = self._contract.methods.setSwapMinerImpl(swapMiner, UniswapRouter, _uniswapLevPairToken, LeverUsdOracle);
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
    async setSwapMinerImplGas(swapMiner, UniswapRouter, _uniswapLevPairToken, LeverUsdOracle) {
        const self = this;
        const gasAmount = await self._contract.methods.setSwapMinerImpl(swapMiner, UniswapRouter, _uniswapLevPairToken, LeverUsdOracle).estimateGas();
        return gasAmount;
    }
    ;
    async setTreasuryAddress(treasuryAddress) {
        const self = this;
        assert.isString('treasuryAddress', treasuryAddress);
        const promizz = self._contract.methods.setTreasuryAddress(treasuryAddress);
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
    async setTreasuryAddressGas(treasuryAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.setTreasuryAddress(treasuryAddress).estimateGas();
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
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolAddressesProviderEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, MarginPoolAddressesProviderContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolAddressesProviderEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, MarginPoolAddressesProviderContract.ABI());
        return logs;
    }
}
MarginPoolAddressesProviderContract.contractName = 'MarginPoolAddressesProvider';
