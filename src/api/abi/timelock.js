import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var TimelockEvents;
(function (TimelockEvents) {
    TimelockEvents["CancelTransaction"] = "CancelTransaction";
    TimelockEvents["ExecuteTransaction"] = "ExecuteTransaction";
    TimelockEvents["NewAdmin"] = "NewAdmin";
    TimelockEvents["NewDelay"] = "NewDelay";
    TimelockEvents["NewPendingAdmin"] = "NewPendingAdmin";
    TimelockEvents["QueueTransaction"] = "QueueTransaction";
})(TimelockEvents || (TimelockEvents = {}));
export class TimelockContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('Timelock', TimelockContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(TimelockContract.ABI(), supportedProvider);
        TimelockContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_Timelock")) {
            const obj = window.__eth_contract_Timelock;
            if (obj instanceof TimelockContract) {
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
        const contractInstance = await new TimelockContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["admin_",
            "delay_"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_Timelock")) {
            window.__eth_contract_Timelock = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'admin_',
                        type: 'address',
                    },
                    {
                        name: 'delay_',
                        type: 'uint256',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'CancelTransaction',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ExecuteTransaction',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newAdmin',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'NewAdmin',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newDelay',
                        type: 'uint256',
                        indexed: true,
                    },
                ],
                name: 'NewDelay',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'newPendingAdmin',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'NewPendingAdmin',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'txHash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'lev',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'QueueTransaction',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [],
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'fallback',
            },
            {
                constant: true,
                inputs: [],
                name: 'GRACE_PERIOD',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'MAXIMUM_DELAY',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'MINIMUM_DELAY',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'pendingAdmin_',
                        type: 'address',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'acceptAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'admin',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'cancelTransaction',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'delay',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'executeTransaction',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'lev',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'queueTransaction',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'queuedTransactions',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'delay_',
                        type: 'uint256',
                    },
                ],
                name: 'setDelay',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'pendingAdmin_',
                        type: 'address',
                    },
                    {
                        name: 'eta',
                        type: 'uint256',
                    },
                ],
                name: 'setPendingAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async GRACE_PERIOD() {
        const self = this;
        const promizz = self._contract.methods.GRACE_PERIOD();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async GRACE_PERIODGas() {
        const self = this;
        const gasAmount = await self._contract.methods.GRACE_PERIOD().estimateGas();
        return gasAmount;
    }
    ;
    async MAXIMUM_DELAY() {
        const self = this;
        const promizz = self._contract.methods.MAXIMUM_DELAY();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async MAXIMUM_DELAYGas() {
        const self = this;
        const gasAmount = await self._contract.methods.MAXIMUM_DELAY().estimateGas();
        return gasAmount;
    }
    ;
    async MINIMUM_DELAY() {
        const self = this;
        const promizz = self._contract.methods.MINIMUM_DELAY();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async MINIMUM_DELAYGas() {
        const self = this;
        const gasAmount = await self._contract.methods.MINIMUM_DELAY().estimateGas();
        return gasAmount;
    }
    ;
    async acceptAdmin(pendingAdmin_, eta) {
        const self = this;
        assert.isString('pendingAdmin_', pendingAdmin_);
        assert.isNumberOrBigNumber('eta', eta);
        const promizz = self._contract.methods.acceptAdmin(pendingAdmin_, eta);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async acceptAdminGas(pendingAdmin_, eta) {
        const self = this;
        const gasAmount = await self._contract.methods.acceptAdmin(pendingAdmin_, eta).estimateGas();
        return gasAmount;
    }
    ;
    async admin() {
        const self = this;
        const promizz = self._contract.methods.admin();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async adminGas() {
        const self = this;
        const gasAmount = await self._contract.methods.admin().estimateGas();
        return gasAmount;
    }
    ;
    async cancelTransaction(target, lev, amount, eta) {
        const self = this;
        assert.isString('target', target);
        assert.isString('lev', lev);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('eta', eta);
        const promizz = self._contract.methods.cancelTransaction(target, lev, amount, eta);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async cancelTransactionGas(target, lev, amount, eta) {
        const self = this;
        const gasAmount = await self._contract.methods.cancelTransaction(target, lev, amount, eta).estimateGas();
        return gasAmount;
    }
    ;
    async delay() {
        const self = this;
        const promizz = self._contract.methods.delay();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async delayGas() {
        const self = this;
        const gasAmount = await self._contract.methods.delay().estimateGas();
        return gasAmount;
    }
    ;
    async executeTransaction(target, lev, amount, eta) {
        const self = this;
        assert.isString('target', target);
        assert.isString('lev', lev);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('eta', eta);
        const promizz = self._contract.methods.executeTransaction(target, lev, amount, eta);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async executeTransactionGas(target, lev, amount, eta) {
        const self = this;
        const gasAmount = await self._contract.methods.executeTransaction(target, lev, amount, eta).estimateGas();
        return gasAmount;
    }
    ;
    async queueTransaction(target, lev, amount, eta) {
        const self = this;
        assert.isString('target', target);
        assert.isString('lev', lev);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('eta', eta);
        const promizz = self._contract.methods.queueTransaction(target, lev, amount, eta);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async queueTransactionGas(target, lev, amount, eta) {
        const self = this;
        const gasAmount = await self._contract.methods.queueTransaction(target, lev, amount, eta).estimateGas();
        return gasAmount;
    }
    ;
    async queuedTransactions(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.queuedTransactions(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async queuedTransactionsGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.queuedTransactions(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async setDelay(delay_) {
        const self = this;
        assert.isNumberOrBigNumber('delay_', delay_);
        const promizz = self._contract.methods.setDelay(delay_);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async setDelayGas(delay_) {
        const self = this;
        const gasAmount = await self._contract.methods.setDelay(delay_).estimateGas();
        return gasAmount;
    }
    ;
    async setPendingAdmin(pendingAdmin_, eta) {
        const self = this;
        assert.isString('pendingAdmin_', pendingAdmin_);
        assert.isNumberOrBigNumber('eta', eta);
        const promizz = self._contract.methods.setPendingAdmin(pendingAdmin_, eta);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.send(_essence)
            .on('transactionHash', (hash) => {
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
    async setPendingAdminGas(pendingAdmin_, eta) {
        const self = this;
        const gasAmount = await self._contract.methods.setPendingAdmin(pendingAdmin_, eta).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, TimelockEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, TimelockContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, TimelockEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, TimelockContract.ABI());
        return logs;
    }
}
TimelockContract.contractName = 'Timelock';
