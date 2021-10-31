import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var WETHGatewayEvents;
(function (WETHGatewayEvents) {
    WETHGatewayEvents["OwnershipTransferred"] = "OwnershipTransferred";
})(WETHGatewayEvents || (WETHGatewayEvents = {}));
export class WETHGatewayContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('WETHGateway', WETHGatewayContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(WETHGatewayContract.ABI(), supportedProvider);
        WETHGatewayContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_WETHGateway")) {
            const obj = window.__eth_contract_WETHGateway;
            if (obj instanceof WETHGatewayContract) {
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
        const contractInstance = await new WETHGatewayContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["weth",
            "pool"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_WETHGateway")) {
            window.__eth_contract_WETHGateway = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'weth',
                        type: 'address',
                    },
                    {
                        name: 'pool',
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
                inputs: [],
                outputs: [],
                stateMutability: 'payable',
                type: 'fallback',
            },
            {
                inputs: [
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'borrowETH',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'depositETH',
                outputs: [],
                stateMutability: 'payable',
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
                outputs: [],
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
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
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
                inputs: [],
                name: 'getWETHAddress',
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
                name: 'getXWETHAddress',
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
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                ],
                name: 'withdrawETH',
                outputs: [],
                stateMutability: 'nonpayable',
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
    async borrowETH(amount) {
        const self = this;
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.borrowETH(amount);
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
    async borrowETHGas(amount) {
        const self = this;
        const gasAmount = await self._contract.methods.borrowETH(amount).estimateGas();
        return gasAmount;
    }
    ;
    async depositETH(onBehalfOf) {
        const self = this;
        assert.isString('onBehalfOf', onBehalfOf);
        const promizz = self._contract.methods.depositETH(onBehalfOf);
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
    async depositETHGas(onBehalfOf) {
        const self = this;
        const gasAmount = await self._contract.methods.depositETH(onBehalfOf).estimateGas();
        return gasAmount;
    }
    ;
    async emergencyEtherTransfer(to, amount) {
        const self = this;
        assert.isString('to', to);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.emergencyEtherTransfer(to, amount);
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
    async emergencyEtherTransferGas(to, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.emergencyEtherTransfer(to, amount).estimateGas();
        return gasAmount;
    }
    ;
    async emergencyTokenTransfer(token, to, amount) {
        const self = this;
        assert.isString('token', token);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.emergencyTokenTransfer(token, to, amount);
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
    async emergencyTokenTransferGas(token, to, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.emergencyTokenTransfer(token, to, amount).estimateGas();
        return gasAmount;
    }
    ;
    async getMarginPoolAddress() {
        const self = this;
        const promizz = self._contract.methods.getMarginPoolAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async getMarginPoolAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getMarginPoolAddress().estimateGas();
        return gasAmount;
    }
    ;
    async getWETHAddress() {
        const self = this;
        const promizz = self._contract.methods.getWETHAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async getWETHAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getWETHAddress().estimateGas();
        return gasAmount;
    }
    ;
    async getXWETHAddress() {
        const self = this;
        const promizz = self._contract.methods.getXWETHAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async getXWETHAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getXWETHAddress().estimateGas();
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
    async withdrawETH(amount, to) {
        const self = this;
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('to', to);
        const promizz = self._contract.methods.withdrawETH(amount, to);
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
    async withdrawETHGas(amount, to) {
        const self = this;
        const gasAmount = await self._contract.methods.withdrawETH(amount, to).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, WETHGatewayEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, WETHGatewayContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, WETHGatewayEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, WETHGatewayContract.ABI());
        return logs;
    }
}
WETHGatewayContract.contractName = 'WETHGateway';
