import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var VariableTokensHelperEvents;
(function (VariableTokensHelperEvents) {
    VariableTokensHelperEvents["OwnershipTransferred"] = "OwnershipTransferred";
    VariableTokensHelperEvents["deployedContracts"] = "deployedContracts";
})(VariableTokensHelperEvents || (VariableTokensHelperEvents = {}));
export class VariableTokensHelperContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('VariableTokensHelper', VariableTokensHelperContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(VariableTokensHelperContract.ABI(), supportedProvider);
        VariableTokensHelperContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_VariableTokensHelper")) {
            const obj = window.__eth_contract_VariableTokensHelper;
            if (obj instanceof VariableTokensHelperContract) {
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
        const contractInstance = await new VariableTokensHelperContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["_pool",
            "_addressesProvider"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_VariableTokensHelper")) {
            window.__eth_contract_VariableTokensHelper = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: '_pool',
                        type: 'address',
                    },
                    {
                        name: '_addressesProvider',
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
                        name: 'variableToken',
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
                        name: 'tokens',
                        type: 'address[]',
                    },
                    {
                        name: 'symbols',
                        type: 'string[]',
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
    async initDeployment(tokens, symbols, decimals) {
        const self = this;
        assert.isArray('tokens', tokens);
        assert.isArray('symbols', symbols);
        assert.isArray('decimals', decimals);
        const promizz = self._contract.methods.initDeployment(tokens, symbols, decimals);
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
    async initDeploymentGas(tokens, symbols, decimals) {
        const self = this;
        const gasAmount = await self._contract.methods.initDeployment(tokens, symbols, decimals).estimateGas();
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
        assert.doesBelongToStringEnum('eventName', eventName, VariableTokensHelperEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, VariableTokensHelperContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, VariableTokensHelperEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, VariableTokensHelperContract.ABI());
        return logs;
    }
}
VariableTokensHelperContract.contractName = 'VariableTokensHelper';
