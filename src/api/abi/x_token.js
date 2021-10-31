import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var XTokenEvents;
(function (XTokenEvents) {
    XTokenEvents["Approval"] = "Approval";
    XTokenEvents["BalanceTransfer"] = "BalanceTransfer";
    XTokenEvents["Burn"] = "Burn";
    XTokenEvents["Mint"] = "Mint";
    XTokenEvents["RewardAdded"] = "RewardAdded";
    XTokenEvents["RewardPaid"] = "RewardPaid";
    XTokenEvents["Transfer"] = "Transfer";
})(XTokenEvents || (XTokenEvents = {}));
export class XTokenContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('XToken', XTokenContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(XTokenContract.ABI(), supportedProvider);
        XTokenContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_XToken")) {
            const obj = window.__eth_contract_XToken;
            if (obj instanceof XTokenContract) {
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
        const contractInstance = await new XTokenContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["_addressesProvider",
            "underlyingAssetAddress",
            "tokenName",
            "tokenSymbol",
            "decimals"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_XToken")) {
            window.__eth_contract_XToken = contractInstance;
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
                        name: 'underlyingAssetAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenName',
                        type: 'string',
                    },
                    {
                        name: 'tokenSymbol',
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
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'BalanceTransfer',
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
                        name: 'target',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Burn',
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
                        name: 'value',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Mint',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reward',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: '_rewardsDuration',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'RewardAdded',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'reward',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'RewardPaid',
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
                inputs: [],
                name: 'DOMAIN_SEPARATOR',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'EIP712_REVISION',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'POOL',
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
                name: 'RESERVE_TREASURY_ADDRESS',
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
                name: 'UINT_MAX_VALUE',
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
                name: 'UNDERLYING_ASSET_ADDRESS',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: '_nonces',
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
                        name: 'user',
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
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'receiverOfUnderlying',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'burn',
                outputs: [],
                stateMutability: 'nonpayable',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'earned',
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
                name: 'getReward',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getRewardForDuration',
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
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'getScaledUserBalanceAndSupply',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
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
                name: 'lastTimeRewardApplicable',
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
                name: 'lastUpdateTime',
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
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'mint',
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
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'index',
                        type: 'uint256',
                    },
                ],
                name: 'mintToTreasury',
                outputs: [],
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
                inputs: [
                    {
                        name: 'reward',
                        type: 'uint256',
                    },
                    {
                        name: '_rewardsDuration',
                        type: 'uint256',
                    },
                ],
                name: 'notifyRewardAmount',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'periodFinish',
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
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'permit',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'rewardPerToken',
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
                name: 'rewardPerTokenStored',
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
                name: 'rewardRate',
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
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'rewards',
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
                name: 'rewardsDistribution',
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
                name: 'rewardsDuration',
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
                name: 'rewardsToken',
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
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'scaledBalanceOf',
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
                name: 'scaledTotalSupply',
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
            {
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'value',
                        type: 'uint256',
                    },
                ],
                name: 'transferOnLiquidation',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'transferUnderlyingTo',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'userRewardPerTokenPaid',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
        ];
        return abi;
    }
    async DOMAIN_SEPARATOR() {
        const self = this;
        const promizz = self._contract.methods.DOMAIN_SEPARATOR();
        const result = await promizz.call();
        return result;
    }
    ;
    async DOMAIN_SEPARATORGas() {
        const self = this;
        const gasAmount = await self._contract.methods.DOMAIN_SEPARATOR().estimateGas();
        return gasAmount;
    }
    ;
    async EIP712_REVISION() {
        const self = this;
        const promizz = self._contract.methods.EIP712_REVISION();
        const result = await promizz.call();
        return result;
    }
    ;
    async EIP712_REVISIONGas() {
        const self = this;
        const gasAmount = await self._contract.methods.EIP712_REVISION().estimateGas();
        return gasAmount;
    }
    ;
    async PERMIT_TYPEHASH() {
        const self = this;
        const promizz = self._contract.methods.PERMIT_TYPEHASH();
        const result = await promizz.call();
        return result;
    }
    ;
    async PERMIT_TYPEHASHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.PERMIT_TYPEHASH().estimateGas();
        return gasAmount;
    }
    ;
    async POOL() {
        const self = this;
        const promizz = self._contract.methods.POOL();
        const result = await promizz.call();
        return result;
    }
    ;
    async POOLGas() {
        const self = this;
        const gasAmount = await self._contract.methods.POOL().estimateGas();
        return gasAmount;
    }
    ;
    async RESERVE_TREASURY_ADDRESS() {
        const self = this;
        const promizz = self._contract.methods.RESERVE_TREASURY_ADDRESS();
        const result = await promizz.call();
        return result;
    }
    ;
    async RESERVE_TREASURY_ADDRESSGas() {
        const self = this;
        const gasAmount = await self._contract.methods.RESERVE_TREASURY_ADDRESS().estimateGas();
        return gasAmount;
    }
    ;
    async UINT_MAX_VALUE() {
        const self = this;
        const promizz = self._contract.methods.UINT_MAX_VALUE();
        const result = await promizz.call();
        return result;
    }
    ;
    async UINT_MAX_VALUEGas() {
        const self = this;
        const gasAmount = await self._contract.methods.UINT_MAX_VALUE().estimateGas();
        return gasAmount;
    }
    ;
    async UNDERLYING_ASSET_ADDRESS() {
        const self = this;
        const promizz = self._contract.methods.UNDERLYING_ASSET_ADDRESS();
        const result = await promizz.call();
        return result;
    }
    ;
    async UNDERLYING_ASSET_ADDRESSGas() {
        const self = this;
        const gasAmount = await self._contract.methods.UNDERLYING_ASSET_ADDRESS().estimateGas();
        return gasAmount;
    }
    ;
    async _nonces(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods._nonces(index_0);
        const result = await promizz.call();
        return result;
    }
    ;
    async _noncesGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods._nonces(index_0).estimateGas();
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
    async balanceOf(user) {
        const self = this;
        assert.isString('user', user);
        const promizz = self._contract.methods.balanceOf(user);
        const result = await promizz.call();
        return result;
    }
    ;
    async balanceOfGas(user) {
        const self = this;
        const gasAmount = await self._contract.methods.balanceOf(user).estimateGas();
        return gasAmount;
    }
    ;
    async burn(user, receiverOfUnderlying, amount, index) {
        const self = this;
        assert.isString('user', user);
        assert.isString('receiverOfUnderlying', receiverOfUnderlying);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('index', index);
        const promizz = self._contract.methods.burn(user, receiverOfUnderlying, amount, index);
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
    async burnGas(user, receiverOfUnderlying, amount, index) {
        const self = this;
        const gasAmount = await self._contract.methods.burn(user, receiverOfUnderlying, amount, index).estimateGas();
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
    async earned(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.earned(account);
        const result = await promizz.call();
        return result;
    }
    ;
    async earnedGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.earned(account).estimateGas();
        return gasAmount;
    }
    ;
    async getReward() {
        const self = this;
        const promizz = self._contract.methods.getReward();
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
    async getRewardGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getReward().estimateGas();
        return gasAmount;
    }
    ;
    async getRewardForDuration() {
        const self = this;
        const promizz = self._contract.methods.getRewardForDuration();
        const result = await promizz.call();
        return result;
    }
    ;
    async getRewardForDurationGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getRewardForDuration().estimateGas();
        return gasAmount;
    }
    ;
    async getScaledUserBalanceAndSupply(user) {
        const self = this;
        assert.isString('user', user);
        const promizz = self._contract.methods.getScaledUserBalanceAndSupply(user);
        const result = await promizz.call();
        return result;
    }
    ;
    async getScaledUserBalanceAndSupplyGas(user) {
        const self = this;
        const gasAmount = await self._contract.methods.getScaledUserBalanceAndSupply(user).estimateGas();
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
    async lastTimeRewardApplicable() {
        const self = this;
        const promizz = self._contract.methods.lastTimeRewardApplicable();
        const result = await promizz.call();
        return result;
    }
    ;
    async lastTimeRewardApplicableGas() {
        const self = this;
        const gasAmount = await self._contract.methods.lastTimeRewardApplicable().estimateGas();
        return gasAmount;
    }
    ;
    async lastUpdateTime() {
        const self = this;
        const promizz = self._contract.methods.lastUpdateTime();
        const result = await promizz.call();
        return result;
    }
    ;
    async lastUpdateTimeGas() {
        const self = this;
        const gasAmount = await self._contract.methods.lastUpdateTime().estimateGas();
        return gasAmount;
    }
    ;
    async mint(user, amount, index) {
        const self = this;
        assert.isString('user', user);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('index', index);
        const promizz = self._contract.methods.mint(user, amount, index);
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
    async mintGas(user, amount, index) {
        const self = this;
        const gasAmount = await self._contract.methods.mint(user, amount, index).estimateGas();
        return gasAmount;
    }
    ;
    async mintToTreasury(amount, index) {
        const self = this;
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('index', index);
        const promizz = self._contract.methods.mintToTreasury(amount, index);
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
    async mintToTreasuryGas(amount, index) {
        const self = this;
        const gasAmount = await self._contract.methods.mintToTreasury(amount, index).estimateGas();
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
    async notifyRewardAmount(reward, _rewardsDuration) {
        const self = this;
        assert.isNumberOrBigNumber('reward', reward);
        assert.isNumberOrBigNumber('_rewardsDuration', _rewardsDuration);
        const promizz = self._contract.methods.notifyRewardAmount(reward, _rewardsDuration);
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
    async notifyRewardAmountGas(reward, _rewardsDuration) {
        const self = this;
        const gasAmount = await self._contract.methods.notifyRewardAmount(reward, _rewardsDuration).estimateGas();
        return gasAmount;
    }
    ;
    async periodFinish() {
        const self = this;
        const promizz = self._contract.methods.periodFinish();
        const result = await promizz.call();
        return result;
    }
    ;
    async periodFinishGas() {
        const self = this;
        const gasAmount = await self._contract.methods.periodFinish().estimateGas();
        return gasAmount;
    }
    ;
    async permit(owner, spender, value, deadline, v, r, s) {
        const self = this;
        assert.isString('owner', owner);
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('value', value);
        assert.isNumberOrBigNumber('deadline', deadline);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.permit(owner, spender, value, deadline, v, r, s);
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
    async permitGas(owner, spender, value, deadline, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.permit(owner, spender, value, deadline, v, r, s).estimateGas();
        return gasAmount;
    }
    ;
    async rewardPerToken() {
        const self = this;
        const promizz = self._contract.methods.rewardPerToken();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardPerTokenGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardPerToken().estimateGas();
        return gasAmount;
    }
    ;
    async rewardPerTokenStored() {
        const self = this;
        const promizz = self._contract.methods.rewardPerTokenStored();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardPerTokenStoredGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardPerTokenStored().estimateGas();
        return gasAmount;
    }
    ;
    async rewardRate() {
        const self = this;
        const promizz = self._contract.methods.rewardRate();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardRateGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardRate().estimateGas();
        return gasAmount;
    }
    ;
    async rewards(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.rewards(index_0);
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardsGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.rewards(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async rewardsDistribution() {
        const self = this;
        const promizz = self._contract.methods.rewardsDistribution();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardsDistributionGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardsDistribution().estimateGas();
        return gasAmount;
    }
    ;
    async rewardsDuration() {
        const self = this;
        const promizz = self._contract.methods.rewardsDuration();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardsDurationGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardsDuration().estimateGas();
        return gasAmount;
    }
    ;
    async rewardsToken() {
        const self = this;
        const promizz = self._contract.methods.rewardsToken();
        const result = await promizz.call();
        return result;
    }
    ;
    async rewardsTokenGas() {
        const self = this;
        const gasAmount = await self._contract.methods.rewardsToken().estimateGas();
        return gasAmount;
    }
    ;
    async scaledBalanceOf(user) {
        const self = this;
        assert.isString('user', user);
        const promizz = self._contract.methods.scaledBalanceOf(user);
        const result = await promizz.call();
        return result;
    }
    ;
    async scaledBalanceOfGas(user) {
        const self = this;
        const gasAmount = await self._contract.methods.scaledBalanceOf(user).estimateGas();
        return gasAmount;
    }
    ;
    async scaledTotalSupply() {
        const self = this;
        const promizz = self._contract.methods.scaledTotalSupply();
        const result = await promizz.call();
        return result;
    }
    ;
    async scaledTotalSupplyGas() {
        const self = this;
        const gasAmount = await self._contract.methods.scaledTotalSupply().estimateGas();
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
    async transferOnLiquidation(from, to, value) {
        const self = this;
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('value', value);
        const promizz = self._contract.methods.transferOnLiquidation(from, to, value);
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
    async transferOnLiquidationGas(from, to, value) {
        const self = this;
        const gasAmount = await self._contract.methods.transferOnLiquidation(from, to, value).estimateGas();
        return gasAmount;
    }
    ;
    async transferUnderlyingTo(target, amount) {
        const self = this;
        assert.isString('target', target);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.transferUnderlyingTo(target, amount);
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
    async transferUnderlyingToGas(target, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.transferUnderlyingTo(target, amount).estimateGas();
        return gasAmount;
    }
    ;
    async userRewardPerTokenPaid(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.userRewardPerTokenPaid(index_0);
        const result = await promizz.call();
        return result;
    }
    ;
    async userRewardPerTokenPaidGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.userRewardPerTokenPaid(index_0).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, XTokenEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, XTokenContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, XTokenEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, XTokenContract.ABI());
        return logs;
    }
}
XTokenContract.contractName = 'XToken';
