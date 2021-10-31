import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var WETH9Events;
(function (WETH9Events) {
    WETH9Events["Approval"] = "Approval";
    WETH9Events["Deposit"] = "Deposit";
    WETH9Events["Transfer"] = "Transfer";
    WETH9Events["Withdrawal"] = "Withdrawal";
})(WETH9Events || (WETH9Events = {}));
export class WETH9Contract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('WETH9', WETH9Contract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(WETH9Contract.ABI(), supportedProvider);
        WETH9Contract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_WETH9")) {
            const obj = window.__eth_contract_WETH9;
            if (obj instanceof WETH9Contract) {
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
        const contractInstance = await new WETH9Contract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_WETH9")) {
            window.__eth_contract_WETH9 = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'guy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
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
                        name: 'dst',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Deposit',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'dst',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Transfer',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'wad',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Withdrawal',
                outputs: [],
                type: 'event',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                    {
                        name: 'index_1',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'guy',
                        type: 'address',
                    },
                    {
                        name: 'wad',
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
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'decimals',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'deposit',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'symbol',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'totalSupply',
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
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'wad',
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
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'wad',
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
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'wad',
                        type: 'uint256',
                    },
                ],
                name: 'withdraw',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async allowance(index_0, index_1) {
        const self = this;
        assert.isString('index_0', index_0);
        assert.isString('index_1', index_1);
        const promizz = self._contract.methods.allowance(index_0, index_1);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async allowanceGas(index_0, index_1) {
        const self = this;
        const gasAmount = await self._contract.methods.allowance(index_0, index_1).estimateGas();
        return gasAmount;
    }
    ;
    async approve(guy, wad) {
        const self = this;
        assert.isString('guy', guy);
        assert.isNumberOrBigNumber('wad', wad);
        const promizz = self._contract.methods.approve(guy, wad);
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
    async approveGas(guy, wad) {
        const self = this;
        const gasAmount = await self._contract.methods.approve(guy, wad).estimateGas();
        return gasAmount;
    }
    ;
    async balanceOf(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.balanceOf(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async balanceOfGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.balanceOf(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async decimals() {
        const self = this;
        const promizz = self._contract.methods.decimals();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async decimalsGas() {
        const self = this;
        const gasAmount = await self._contract.methods.decimals().estimateGas();
        return gasAmount;
    }
    ;
    async deposit() {
        const self = this;
        const promizz = self._contract.methods.deposit();
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
    async depositGas() {
        const self = this;
        const gasAmount = await self._contract.methods.deposit().estimateGas();
        return gasAmount;
    }
    ;
    async name() {
        const self = this;
        const promizz = self._contract.methods.name();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
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
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
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
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async totalSupplyGas() {
        const self = this;
        const gasAmount = await self._contract.methods.totalSupply().estimateGas();
        return gasAmount;
    }
    ;
    async transfer(dst, wad) {
        const self = this;
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('wad', wad);
        const promizz = self._contract.methods.transfer(dst, wad);
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
    async transferGas(dst, wad) {
        const self = this;
        const gasAmount = await self._contract.methods.transfer(dst, wad).estimateGas();
        return gasAmount;
    }
    ;
    async transferFrom(src, dst, wad) {
        const self = this;
        assert.isString('src', src);
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('wad', wad);
        const promizz = self._contract.methods.transferFrom(src, dst, wad);
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
    async transferFromGas(src, dst, wad) {
        const self = this;
        const gasAmount = await self._contract.methods.transferFrom(src, dst, wad).estimateGas();
        return gasAmount;
    }
    ;
    async withdraw(wad) {
        const self = this;
        assert.isNumberOrBigNumber('wad', wad);
        const promizz = self._contract.methods.withdraw(wad);
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
    async withdrawGas(wad) {
        const self = this;
        const gasAmount = await self._contract.methods.withdraw(wad).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, WETH9Events);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, WETH9Contract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, WETH9Events);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, WETH9Contract.ABI());
        return logs;
    }
}
WETH9Contract.contractName = 'WETH9';
