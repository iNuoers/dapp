import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var MarginPoolConfiguratorEvents;
(function (MarginPoolConfiguratorEvents) {
    MarginPoolConfiguratorEvents["BorrowingDisabledOnReserve"] = "BorrowingDisabledOnReserve";
    MarginPoolConfiguratorEvents["CollateralConfigurationChanged"] = "CollateralConfigurationChanged";
    MarginPoolConfiguratorEvents["ReserveActivated"] = "ReserveActivated";
    MarginPoolConfiguratorEvents["ReserveDeactivated"] = "ReserveDeactivated";
    MarginPoolConfiguratorEvents["ReserveDecimalsChanged"] = "ReserveDecimalsChanged";
    MarginPoolConfiguratorEvents["ReserveFactorChanged"] = "ReserveFactorChanged";
    MarginPoolConfiguratorEvents["ReserveFrozen"] = "ReserveFrozen";
    MarginPoolConfiguratorEvents["ReserveInitialized"] = "ReserveInitialized";
    MarginPoolConfiguratorEvents["ReserveInterestRateStrategyChanged"] = "ReserveInterestRateStrategyChanged";
    MarginPoolConfiguratorEvents["ReserveUnfrozen"] = "ReserveUnfrozen";
    MarginPoolConfiguratorEvents["VariableDebtTokenUpgraded"] = "VariableDebtTokenUpgraded";
    MarginPoolConfiguratorEvents["XTokenUpgraded"] = "XTokenUpgraded";
})(MarginPoolConfiguratorEvents || (MarginPoolConfiguratorEvents = {}));
export class MarginPoolConfiguratorContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('MarginPoolConfigurator', MarginPoolConfiguratorContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(MarginPoolConfiguratorContract.ABI(), supportedProvider);
        MarginPoolConfiguratorContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolConfigurator")) {
            const obj = window.__eth_contract_MarginPoolConfigurator;
            if (obj instanceof MarginPoolConfiguratorContract) {
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
        const contractInstance = await new MarginPoolConfiguratorContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolConfigurator")) {
            window.__eth_contract_MarginPoolConfigurator = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'BorrowingDisabledOnReserve',
                outputs: [],
                type: 'event',
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
                        name: 'ltv',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidationThreshold',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidationBonus',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'CollateralConfigurationChanged',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveActivated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveDeactivated',
                outputs: [],
                type: 'event',
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
                        name: 'decimals',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveDecimalsChanged',
                outputs: [],
                type: 'event',
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
                        name: 'factor',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveFactorChanged',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveFrozen',
                outputs: [],
                type: 'event',
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
                        name: 'xToken',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'variableDebtToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ReserveInitialized',
                outputs: [],
                type: 'event',
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
                        name: 'strategy',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ReserveInterestRateStrategyChanged',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUnfrozen',
                outputs: [],
                type: 'event',
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
                        name: 'proxy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'implementation',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'VariableDebtTokenUpgraded',
                outputs: [],
                type: 'event',
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
                        name: 'proxy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'implementation',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'XTokenUpgraded',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'activateReserve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'addressesProvider',
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
                        name: 'ltv',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidationThreshold',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidationBonus',
                        type: 'uint256',
                    },
                ],
                name: 'configureReserveAsCollateral',
                outputs: [],
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
                name: 'deactivateReserve',
                outputs: [],
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
                name: 'disableBorrowingOnReserve',
                outputs: [],
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
                name: 'enableBorrowingOnReserve',
                outputs: [],
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
                name: 'freezeReserve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'xTokenImpl',
                        type: 'address',
                    },
                    {
                        name: 'variableDebtTokenImpl',
                        type: 'address',
                    },
                    {
                        name: 'underlyingAssetDecimals',
                        type: 'uint8',
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'initReserve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
                ],
                name: 'initialize',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'pool',
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
                        name: 'val',
                        type: 'bool',
                    },
                ],
                name: 'setPoolPause',
                outputs: [],
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
                        name: 'reserveFactor',
                        type: 'uint256',
                    },
                ],
                name: 'setReserveFactor',
                outputs: [],
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
                        name: 'rateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'setReserveInterestRateStrategyAddress',
                outputs: [],
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
                name: 'unfreezeReserve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async activateReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.activateReserve(asset);
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
    async activateReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.activateReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    async addressesProvider() {
        const self = this;
        const promizz = self._contract.methods.addressesProvider();
        const result = await promizz.call();
        return result;
    }
    ;
    async addressesProviderGas() {
        const self = this;
        const gasAmount = await self._contract.methods.addressesProvider().estimateGas();
        return gasAmount;
    }
    ;
    async configureReserveAsCollateral(asset, ltv, liquidationThreshold, liquidationBonus) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('ltv', ltv);
        assert.isNumberOrBigNumber('liquidationThreshold', liquidationThreshold);
        assert.isNumberOrBigNumber('liquidationBonus', liquidationBonus);
        const promizz = self._contract.methods.configureReserveAsCollateral(asset, ltv, liquidationThreshold, liquidationBonus);
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
    async configureReserveAsCollateralGas(asset, ltv, liquidationThreshold, liquidationBonus) {
        const self = this;
        const gasAmount = await self._contract.methods.configureReserveAsCollateral(asset, ltv, liquidationThreshold, liquidationBonus).estimateGas();
        return gasAmount;
    }
    ;
    async deactivateReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.deactivateReserve(asset);
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
    async deactivateReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.deactivateReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    async disableBorrowingOnReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.disableBorrowingOnReserve(asset);
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
    async disableBorrowingOnReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.disableBorrowingOnReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    async enableBorrowingOnReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.enableBorrowingOnReserve(asset);
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
    async enableBorrowingOnReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.enableBorrowingOnReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    async freezeReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.freezeReserve(asset);
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
    async freezeReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.freezeReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    async initReserve(xTokenImpl, variableDebtTokenImpl, underlyingAssetDecimals, interestRateStrategyAddress) {
        const self = this;
        assert.isString('xTokenImpl', xTokenImpl);
        assert.isString('variableDebtTokenImpl', variableDebtTokenImpl);
        assert.isNumberOrBigNumber('underlyingAssetDecimals', underlyingAssetDecimals);
        assert.isString('interestRateStrategyAddress', interestRateStrategyAddress);
        const promizz = self._contract.methods.initReserve(xTokenImpl, variableDebtTokenImpl, underlyingAssetDecimals, interestRateStrategyAddress);
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
    async initReserveGas(xTokenImpl, variableDebtTokenImpl, underlyingAssetDecimals, interestRateStrategyAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.initReserve(xTokenImpl, variableDebtTokenImpl, underlyingAssetDecimals, interestRateStrategyAddress).estimateGas();
        return gasAmount;
    }
    ;
    async initialize(provider) {
        const self = this;
        assert.isString('provider', provider);
        const promizz = self._contract.methods.initialize(provider);
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
    async initializeGas(provider) {
        const self = this;
        const gasAmount = await self._contract.methods.initialize(provider).estimateGas();
        return gasAmount;
    }
    ;
    async pool() {
        const self = this;
        const promizz = self._contract.methods.pool();
        const result = await promizz.call();
        return result;
    }
    ;
    async poolGas() {
        const self = this;
        const gasAmount = await self._contract.methods.pool().estimateGas();
        return gasAmount;
    }
    ;
    async setPoolPause(val) {
        const self = this;
        assert.isBoolean('val', val);
        const promizz = self._contract.methods.setPoolPause(val);
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
    async setPoolPauseGas(val) {
        const self = this;
        const gasAmount = await self._contract.methods.setPoolPause(val).estimateGas();
        return gasAmount;
    }
    ;
    async setReserveFactor(asset, reserveFactor) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('reserveFactor', reserveFactor);
        const promizz = self._contract.methods.setReserveFactor(asset, reserveFactor);
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
    async setReserveFactorGas(asset, reserveFactor) {
        const self = this;
        const gasAmount = await self._contract.methods.setReserveFactor(asset, reserveFactor).estimateGas();
        return gasAmount;
    }
    ;
    async setReserveInterestRateStrategyAddress(asset, rateStrategyAddress) {
        const self = this;
        assert.isString('asset', asset);
        assert.isString('rateStrategyAddress', rateStrategyAddress);
        const promizz = self._contract.methods.setReserveInterestRateStrategyAddress(asset, rateStrategyAddress);
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
    async setReserveInterestRateStrategyAddressGas(asset, rateStrategyAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.setReserveInterestRateStrategyAddress(asset, rateStrategyAddress).estimateGas();
        return gasAmount;
    }
    ;
    async unfreezeReserve(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.unfreezeReserve(asset);
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
    async unfreezeReserveGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.unfreezeReserve(asset).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolConfiguratorEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, MarginPoolConfiguratorContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolConfiguratorEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, MarginPoolConfiguratorContract.ABI());
        return logs;
    }
}
MarginPoolConfiguratorContract.contractName = 'MarginPoolConfigurator';
