import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var IncentivizedERC20Events;
(function (IncentivizedERC20Events) {
    IncentivizedERC20Events["Approval"] = "Approval";
    IncentivizedERC20Events["Transfer"] = "Transfer";
})(IncentivizedERC20Events || (IncentivizedERC20Events = {}));
export class IncentivizedERC20Contract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('IncentivizedERC20', IncentivizedERC20Contract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(IncentivizedERC20Contract.ABI(), supportedProvider);
        IncentivizedERC20Contract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_IncentivizedERC20")) {
            const obj = window.__eth_contract_IncentivizedERC20;
            if (obj instanceof IncentivizedERC20Contract) {
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
        const contractInstance = await new IncentivizedERC20Contract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["name",
            "symbol",
            "decimals"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_IncentivizedERC20")) {
            window.__eth_contract_IncentivizedERC20 = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'name',
                        type: 'string',
                    },
                    {
                        name: 'symbol',
                        type: 'string',
                    },
                    {
                        name: 'decimals',
                        type: 'uint8',
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
                        name: 'owner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'spender',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Approval',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'to',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Transfer',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [
                    {
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                ],
                name: 'allowance',
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
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'approve',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'balanceOf',
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
                inputs: [],
                name: 'decimals',
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
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'subtractedValue',
                        type: 'uint256',
                    },
                ],
                name: 'decreaseAllowance',
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
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'addedValue',
                        type: 'uint256',
                    },
                ],
                name: 'increaseAllowance',
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
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'symbol',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'totalSupply',
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
                        name: 'recipient',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transfer',
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
                        name: 'sender',
                        type: 'address',
                    },
                    {
                        name: 'recipient',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transferFrom',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async allowance(owner, spender) {
        const self = this;
        assert.isString('owner', owner);
        assert.isString('spender', spender);
        const promizz = self._contract.methods.allowance(owner, spender);
        const result = await promizz.call();
        return result;
    }
    ;
    async allowanceGas(owner, spender) {
        const self = this;
        const gasAmount = await self._contract.methods.allowance(owner, spender).estimateGas();
        return gasAmount;
    }
    ;
    async approve(spender, amount) {
        const self = this;
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.approve(spender, amount);
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
    async approveGas(spender, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.approve(spender, amount).estimateGas();
        return gasAmount;
    }
    ;
    async balanceOf(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.balanceOf(account);
        const result = await promizz.call();
        return result;
    }
    ;
    async balanceOfGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.balanceOf(account).estimateGas();
        return gasAmount;
    }
    ;
    async decimals() {
        const self = this;
        const promizz = self._contract.methods.decimals();
        const result = await promizz.call();
        return result;
    }
    ;
    async decimalsGas() {
        const self = this;
        const gasAmount = await self._contract.methods.decimals().estimateGas();
        return gasAmount;
    }
    ;
    async decreaseAllowance(spender, subtractedValue) {
        const self = this;
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('subtractedValue', subtractedValue);
        const promizz = self._contract.methods.decreaseAllowance(spender, subtractedValue);
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
    async decreaseAllowanceGas(spender, subtractedValue) {
        const self = this;
        const gasAmount = await self._contract.methods.decreaseAllowance(spender, subtractedValue).estimateGas();
        return gasAmount;
    }
    ;
    async increaseAllowance(spender, addedValue) {
        const self = this;
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('addedValue', addedValue);
        const promizz = self._contract.methods.increaseAllowance(spender, addedValue);
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
    async increaseAllowanceGas(spender, addedValue) {
        const self = this;
        const gasAmount = await self._contract.methods.increaseAllowance(spender, addedValue).estimateGas();
        return gasAmount;
    }
    ;
    async name() {
        const self = this;
        const promizz = self._contract.methods.name();
        const result = await promizz.call();
        return result;
    }
    ;
    async nameGas() {
        const self = this;
        const gasAmount = await self._contract.methods.name().estimateGas();
        return gasAmount;
    }
    ;
    async symbol() {
        const self = this;
        const promizz = self._contract.methods.symbol();
        const result = await promizz.call();
        return result;
    }
    ;
    async symbolGas() {
        const self = this;
        const gasAmount = await self._contract.methods.symbol().estimateGas();
        return gasAmount;
    }
    ;
    async totalSupply() {
        const self = this;
        const promizz = self._contract.methods.totalSupply();
        const result = await promizz.call();
        return result;
    }
    ;
    async totalSupplyGas() {
        const self = this;
        const gasAmount = await self._contract.methods.totalSupply().estimateGas();
        return gasAmount;
    }
    ;
    async transfer(recipient, amount) {
        const self = this;
        assert.isString('recipient', recipient);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.transfer(recipient, amount);
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
    async transferGas(recipient, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.transfer(recipient, amount).estimateGas();
        return gasAmount;
    }
    ;
    async transferFrom(sender, recipient, amount) {
        const self = this;
        assert.isString('sender', sender);
        assert.isString('recipient', recipient);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.transferFrom(sender, recipient, amount);
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
    async transferFromGas(sender, recipient, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.transferFrom(sender, recipient, amount).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, IncentivizedERC20Events);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, IncentivizedERC20Contract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, IncentivizedERC20Events);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, IncentivizedERC20Contract.ABI());
        return logs;
    }
}
IncentivizedERC20Contract.contractName = 'IncentivizedERC20';
