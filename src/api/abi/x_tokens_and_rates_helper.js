import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var XTokensAndRatesHelperEvents;
(function (XTokensAndRatesHelperEvents) {
    XTokensAndRatesHelperEvents["OwnershipTransferred"] = "OwnershipTransferred";
    XTokensAndRatesHelperEvents["deployedContracts"] = "deployedContracts";
})(XTokensAndRatesHelperEvents || (XTokensAndRatesHelperEvents = {}));
export class XTokensAndRatesHelperContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('XTokensAndRatesHelper', XTokensAndRatesHelperContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(XTokensAndRatesHelperContract.ABI(), supportedProvider);
        XTokensAndRatesHelperContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_XTokensAndRatesHelper")) {
            const obj = window.__eth_contract_XTokensAndRatesHelper;
            if (obj instanceof XTokensAndRatesHelperContract) {
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
        const contractInstance = await new XTokensAndRatesHelperContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["_addressesProvider",
            "_poolConfigurator"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_XTokensAndRatesHelper")) {
            window.__eth_contract_XTokensAndRatesHelper = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
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
                outputs: [],
                stateMutability: 'nonpayable',
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
    async configureReserves(assets, baseLTVs, liquidationThresholds, liquidationBonuses, reserveFactors) {
        const self = this;
        assert.isArray('assets', assets);
        assert.isArray('baseLTVs', baseLTVs);
        assert.isArray('liquidationThresholds', liquidationThresholds);
        assert.isArray('liquidationBonuses', liquidationBonuses);
        assert.isArray('reserveFactors', reserveFactors);
        const promizz = self._contract.methods.configureReserves(assets, baseLTVs, liquidationThresholds, liquidationBonuses, reserveFactors);
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
    async configureReservesGas(assets, baseLTVs, liquidationThresholds, liquidationBonuses, reserveFactors) {
        const self = this;
        const gasAmount = await self._contract.methods.configureReserves(assets, baseLTVs, liquidationThresholds, liquidationBonuses, reserveFactors).estimateGas();
        return gasAmount;
    }
    ;
    async initDeployment(assets, symbols, rates, decimals) {
        const self = this;
        assert.isArray('assets', assets);
        assert.isArray('symbols', symbols);
        assert.isArray('rates', rates);
        assert.isArray('decimals', decimals);
        const promizz = self._contract.methods.initDeployment(assets, symbols, rates, decimals);
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
    async initDeploymentGas(assets, symbols, rates, decimals) {
        const self = this;
        const gasAmount = await self._contract.methods.initDeployment(assets, symbols, rates, decimals).estimateGas();
        return gasAmount;
    }
    ;
    async initReserve(variables, xTokens, strategies, reserveDecimals) {
        const self = this;
        assert.isArray('variables', variables);
        assert.isArray('xTokens', xTokens);
        assert.isArray('strategies', strategies);
        assert.isArray('reserveDecimals', reserveDecimals);
        const promizz = self._contract.methods.initReserve(variables, xTokens, strategies, reserveDecimals);
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
    async initReserveGas(variables, xTokens, strategies, reserveDecimals) {
        const self = this;
        const gasAmount = await self._contract.methods.initReserve(variables, xTokens, strategies, reserveDecimals).estimateGas();
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
        assert.doesBelongToStringEnum('eventName', eventName, XTokensAndRatesHelperEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, XTokensAndRatesHelperContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, XTokensAndRatesHelperEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, XTokensAndRatesHelperContract.ABI());
        return logs;
    }
}
XTokensAndRatesHelperContract.contractName = 'XTokensAndRatesHelper';
