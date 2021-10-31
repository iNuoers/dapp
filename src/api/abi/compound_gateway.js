import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var CompoundGatewayEvents;
(function (CompoundGatewayEvents) {
    CompoundGatewayEvents["OwnershipTransferred"] = "OwnershipTransferred";
})(CompoundGatewayEvents || (CompoundGatewayEvents = {}));
export class CompoundGatewayContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('CompoundGateway', CompoundGatewayContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(CompoundGatewayContract.ABI(), supportedProvider);
        CompoundGatewayContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_CompoundGateway")) {
            const obj = window.__eth_contract_CompoundGateway;
            if (obj instanceof CompoundGatewayContract) {
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
        const contractInstance = await new CompoundGatewayContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["_pool",
            "_weth",
            "_ceth",
            "_wethGateway"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_CompoundGateway")) {
            window.__eth_contract_CompoundGateway = contractInstance;
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
                        name: '_weth',
                        type: 'address',
                    },
                    {
                        name: '_ceth',
                        type: 'address',
                    },
                    {
                        name: '_wethGateway',
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
                    {
                        name: 'CToken',
                        type: 'address',
                    },
                ],
                name: 'approveAsset',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'cETH',
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
                        name: 'CToken',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'depositCToken',
                outputs: [
                    {
                        name: 'ret',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
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
                inputs: [],
                outputs: [],
                stateMutability: 'payable',
                type: 'receive',
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
    async approveAsset(asset, CToken) {
        const self = this;
        assert.isString('asset', asset);
        assert.isString('CToken', CToken);
        const promizz = self._contract.methods.approveAsset(asset, CToken);
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
    async approveAssetGas(asset, CToken) {
        const self = this;
        const gasAmount = await self._contract.methods.approveAsset(asset, CToken).estimateGas();
        return gasAmount;
    }
    ;
    async cETH() {
        const self = this;
        const promizz = self._contract.methods.cETH();
        const result = await promizz.call();
        return result;
    }
    ;
    async cETHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.cETH().estimateGas();
        return gasAmount;
    }
    ;
    async depositCToken(CToken, amount) {
        const self = this;
        assert.isString('CToken', CToken);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.depositCToken(CToken, amount);
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
    async depositCTokenGas(CToken, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.depositCToken(CToken, amount).estimateGas();
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
        assert.doesBelongToStringEnum('eventName', eventName, CompoundGatewayEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, CompoundGatewayContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, CompoundGatewayEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, CompoundGatewayContract.ABI());
        return logs;
    }
}
CompoundGatewayContract.contractName = 'CompoundGateway';
