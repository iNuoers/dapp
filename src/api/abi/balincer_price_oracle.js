import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var BalincerPriceOracleEvents;
(function (BalincerPriceOracleEvents) {
    BalincerPriceOracleEvents["ModuleInstall"] = "ModuleInstall";
    BalincerPriceOracleEvents["OwnershipTransferred"] = "OwnershipTransferred";
    BalincerPriceOracleEvents["PriceUpdate"] = "PriceUpdate";
    BalincerPriceOracleEvents["contractPaused"] = "contractPaused";
    BalincerPriceOracleEvents["traillock"] = "traillock";
})(BalincerPriceOracleEvents || (BalincerPriceOracleEvents = {}));
export class BalincerPriceOracleContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('BalincerPriceOracle', BalincerPriceOracleContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(BalincerPriceOracleContract.ABI(), supportedProvider);
        BalincerPriceOracleContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_BalincerPriceOracle")) {
            const obj = window.__eth_contract_BalincerPriceOracle;
            if (obj instanceof BalincerPriceOracleContract) {
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
        const contractInstance = await new BalincerPriceOracleContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_BalincerPriceOracle")) {
            window.__eth_contract_BalincerPriceOracle = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: '_z',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ModuleInstall',
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
                        name: 'confirm_address',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'price',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'PriceUpdate',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'contractPaused',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'traillock',
                outputs: [],
                type: 'event',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'addGovernor',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'addWhitelistAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'assetPrices',
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
                inputs: [
                    {
                        name: 'tokenAddress',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'getCoinInfo',
                outputs: [
                    {
                        name: 'price',
                        type: 'uint256',
                    },
                    {
                        name: 'update_time',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'getRate',
                outputs: [
                    {
                        name: 'coin_info',
                        type: 'uint256[2]',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: 'getUnderlyingPrice',
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
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'isGovernor',
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
                constant: true,
                inputs: [],
                name: 'isLocked',
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
                constant: true,
                inputs: [],
                name: 'isOwner',
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
                constant: true,
                inputs: [],
                name: 'isPaused',
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
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'isWhitelistAdmin',
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
                inputs: [],
                name: 'lock',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
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
                inputs: [],
                name: 'pauseSc',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'ptoken_last_rate',
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
                name: 'ptoken_rate',
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
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'rates',
                outputs: [
                    {
                        name: 'price',
                        type: 'uint256',
                    },
                    {
                        name: 'update_time',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'removeGovernor',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'removeWhitelistAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'unlock',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'unpauseSc',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'price_cod',
                        type: 'uint256',
                    },
                ],
                name: 'updateETHPrice',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'token_address',
                        type: 'address',
                    },
                    {
                        name: 'price_code',
                        type: 'uint256',
                    },
                ],
                name: 'updateUSDPrice',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async addGovernor(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.addGovernor(account);
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
    async addGovernorGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.addGovernor(account).estimateGas();
        return gasAmount;
    }
    ;
    async addWhitelistAdmin(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.addWhitelistAdmin(account);
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
    async addWhitelistAdminGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.addWhitelistAdmin(account).estimateGas();
        return gasAmount;
    }
    ;
    async assetPrices(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.assetPrices(asset);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async assetPricesGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.assetPrices(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getAssetPrice(tokenAddress) {
        const self = this;
        assert.isString('tokenAddress', tokenAddress);
        const promizz = self._contract.methods.getAssetPrice(tokenAddress);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getAssetPriceGas(tokenAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.getAssetPrice(tokenAddress).estimateGas();
        return gasAmount;
    }
    ;
    async getCoinInfo(tokenAddress) {
        const self = this;
        assert.isString('tokenAddress', tokenAddress);
        const promizz = self._contract.methods.getCoinInfo(tokenAddress);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getCoinInfoGas(tokenAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.getCoinInfo(tokenAddress).estimateGas();
        return gasAmount;
    }
    ;
    async getRate(tokenAddress) {
        const self = this;
        assert.isString('tokenAddress', tokenAddress);
        const promizz = self._contract.methods.getRate(tokenAddress);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getRateGas(tokenAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.getRate(tokenAddress).estimateGas();
        return gasAmount;
    }
    ;
    async getUnderlyingPrice(cToken) {
        const self = this;
        assert.isString('cToken', cToken);
        const promizz = self._contract.methods.getUnderlyingPrice(cToken);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getUnderlyingPriceGas(cToken) {
        const self = this;
        const gasAmount = await self._contract.methods.getUnderlyingPrice(cToken).estimateGas();
        return gasAmount;
    }
    ;
    async isGovernor(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.isGovernor(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isGovernorGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.isGovernor(account).estimateGas();
        return gasAmount;
    }
    ;
    async isLocked() {
        const self = this;
        const promizz = self._contract.methods.isLocked();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isLockedGas() {
        const self = this;
        const gasAmount = await self._contract.methods.isLocked().estimateGas();
        return gasAmount;
    }
    ;
    async isOwner() {
        const self = this;
        const promizz = self._contract.methods.isOwner();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isOwnerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.isOwner().estimateGas();
        return gasAmount;
    }
    ;
    async isPaused() {
        const self = this;
        const promizz = self._contract.methods.isPaused();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isPausedGas() {
        const self = this;
        const gasAmount = await self._contract.methods.isPaused().estimateGas();
        return gasAmount;
    }
    ;
    async isWhitelistAdmin(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.isWhitelistAdmin(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isWhitelistAdminGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.isWhitelistAdmin(account).estimateGas();
        return gasAmount;
    }
    ;
    async lock() {
        const self = this;
        const promizz = self._contract.methods.lock();
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
    async lockGas() {
        const self = this;
        const gasAmount = await self._contract.methods.lock().estimateGas();
        return gasAmount;
    }
    ;
    async owner() {
        const self = this;
        const promizz = self._contract.methods.owner();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async ownerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    }
    ;
    async pauseSc() {
        const self = this;
        const promizz = self._contract.methods.pauseSc();
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
    async pauseScGas() {
        const self = this;
        const gasAmount = await self._contract.methods.pauseSc().estimateGas();
        return gasAmount;
    }
    ;
    async ptoken_last_rate() {
        const self = this;
        const promizz = self._contract.methods.ptoken_last_rate();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async ptoken_last_rateGas() {
        const self = this;
        const gasAmount = await self._contract.methods.ptoken_last_rate().estimateGas();
        return gasAmount;
    }
    ;
    async ptoken_rate() {
        const self = this;
        const promizz = self._contract.methods.ptoken_rate();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async ptoken_rateGas() {
        const self = this;
        const gasAmount = await self._contract.methods.ptoken_rate().estimateGas();
        return gasAmount;
    }
    ;
    async rates(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.rates(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async ratesGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.rates(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async removeGovernor(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.removeGovernor(account);
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
    async removeGovernorGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.removeGovernor(account).estimateGas();
        return gasAmount;
    }
    ;
    async removeWhitelistAdmin(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.removeWhitelistAdmin(account);
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
    async removeWhitelistAdminGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.removeWhitelistAdmin(account).estimateGas();
        return gasAmount;
    }
    ;
    async renounceOwnership() {
        const self = this;
        const promizz = self._contract.methods.renounceOwnership();
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
    async transferOwnershipGas(newOwner) {
        const self = this;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner).estimateGas();
        return gasAmount;
    }
    ;
    async unlock() {
        const self = this;
        const promizz = self._contract.methods.unlock();
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
    async unlockGas() {
        const self = this;
        const gasAmount = await self._contract.methods.unlock().estimateGas();
        return gasAmount;
    }
    ;
    async unpauseSc() {
        const self = this;
        const promizz = self._contract.methods.unpauseSc();
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
    async unpauseScGas() {
        const self = this;
        const gasAmount = await self._contract.methods.unpauseSc().estimateGas();
        return gasAmount;
    }
    ;
    async updateETHPrice(price_cod) {
        const self = this;
        assert.isNumberOrBigNumber('price_cod', price_cod);
        const promizz = self._contract.methods.updateETHPrice(price_cod);
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
    async updateETHPriceGas(price_cod) {
        const self = this;
        const gasAmount = await self._contract.methods.updateETHPrice(price_cod).estimateGas();
        return gasAmount;
    }
    ;
    async updateUSDPrice(token_address, price_code) {
        const self = this;
        assert.isString('token_address', token_address);
        assert.isNumberOrBigNumber('price_code', price_code);
        const promizz = self._contract.methods.updateUSDPrice(token_address, price_code);
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
    async updateUSDPriceGas(token_address, price_code) {
        const self = this;
        const gasAmount = await self._contract.methods.updateUSDPrice(token_address, price_code).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerPriceOracleEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, BalincerPriceOracleContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerPriceOracleEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, BalincerPriceOracleContract.ABI());
        return logs;
    }
}
BalincerPriceOracleContract.contractName = 'BalincerPriceOracle';
