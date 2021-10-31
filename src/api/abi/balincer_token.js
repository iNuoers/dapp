import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var BalincerTokenEvents;
(function (BalincerTokenEvents) {
    BalincerTokenEvents["Approval"] = "Approval";
    BalincerTokenEvents["DelegateChanged"] = "DelegateChanged";
    BalincerTokenEvents["DelegateVotesChanged"] = "DelegateVotesChanged";
    BalincerTokenEvents["Transfer"] = "Transfer";
})(BalincerTokenEvents || (BalincerTokenEvents = {}));
export class BalincerTokenContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('BalincerToken', BalincerTokenContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(BalincerTokenContract.ABI(), supportedProvider);
        BalincerTokenContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_BalincerToken")) {
            const obj = window.__eth_contract_BalincerToken;
            if (obj instanceof BalincerTokenContract) {
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
        const contractInstance = await new BalincerTokenContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["account"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_BalincerToken")) {
            window.__eth_contract_BalincerToken = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
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
                        name: 'amount',
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
                        name: 'delegator',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'fromDelegate',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'toDelegate',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'DelegateChanged',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'delegate',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'previousBalance',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newBalance',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'DelegateVotesChanged',
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
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Transfer',
                outputs: [],
                type: 'event',
            },
            {
                constant: true,
                inputs: [],
                name: 'DELEGATION_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'DOMAIN_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'PERMIT_TYPEHASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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
                    {
                        name: 'index_1',
                        type: 'uint32',
                    },
                ],
                name: 'checkpoints',
                outputs: [
                    {
                        name: 'fromBlock',
                        type: 'uint32',
                    },
                    {
                        name: 'votes',
                        type: 'uint96',
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
                inputs: [
                    {
                        name: 'delegatee',
                        type: 'address',
                    },
                ],
                name: 'delegate',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'delegatee',
                        type: 'address',
                    },
                    {
                        name: 'nonce',
                        type: 'uint256',
                    },
                    {
                        name: 'expiry',
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
                name: 'delegateBySig',
                outputs: [],
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
                name: 'delegates',
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
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'getCurrentVotes',
                outputs: [
                    {
                        name: '',
                        type: 'uint96',
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
                    {
                        name: 'blockNumber',
                        type: 'uint256',
                    },
                ],
                name: 'getPriorVotes',
                outputs: [
                    {
                        name: '',
                        type: 'uint96',
                    },
                ],
                payable: false,
                stateMutability: 'view',
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
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'nonces',
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
                name: 'numCheckpoints',
                outputs: [
                    {
                        name: '',
                        type: 'uint32',
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
                        name: 'owner',
                        type: 'address',
                    },
                    {
                        name: 'spender',
                        type: 'address',
                    },
                    {
                        name: 'rawAmount',
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
                payable: false,
                stateMutability: 'nonpayable',
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
                        name: 'rawAmount',
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
                        name: 'rawAmount',
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
        ];
        return abi;
    }
    async DELEGATION_TYPEHASH() {
        const self = this;
        const promizz = self._contract.methods.DELEGATION_TYPEHASH();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async DELEGATION_TYPEHASHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.DELEGATION_TYPEHASH().estimateGas();
        return gasAmount;
    }
    ;
    async DOMAIN_TYPEHASH() {
        const self = this;
        const promizz = self._contract.methods.DOMAIN_TYPEHASH();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async DOMAIN_TYPEHASHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.DOMAIN_TYPEHASH().estimateGas();
        return gasAmount;
    }
    ;
    async PERMIT_TYPEHASH() {
        const self = this;
        const promizz = self._contract.methods.PERMIT_TYPEHASH();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async PERMIT_TYPEHASHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.PERMIT_TYPEHASH().estimateGas();
        return gasAmount;
    }
    ;
    async allowance(account, spender) {
        const self = this;
        assert.isString('account', account);
        assert.isString('spender', spender);
        const promizz = self._contract.methods.allowance(account, spender);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async allowanceGas(account, spender) {
        const self = this;
        const gasAmount = await self._contract.methods.allowance(account, spender).estimateGas();
        return gasAmount;
    }
    ;
    async approve(spender, rawAmount) {
        const self = this;
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('rawAmount', rawAmount);
        const promizz = self._contract.methods.approve(spender, rawAmount);
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
    async approveGas(spender, rawAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.approve(spender, rawAmount).estimateGas();
        return gasAmount;
    }
    ;
    async balanceOf(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.balanceOf(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async balanceOfGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.balanceOf(account).estimateGas();
        return gasAmount;
    }
    ;
    async checkpoints(index_0, index_1) {
        const self = this;
        assert.isString('index_0', index_0);
        assert.isNumberOrBigNumber('index_1', index_1);
        const promizz = self._contract.methods.checkpoints(index_0, index_1);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async checkpointsGas(index_0, index_1) {
        const self = this;
        const gasAmount = await self._contract.methods.checkpoints(index_0, index_1).estimateGas();
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
    async delegate(delegatee) {
        const self = this;
        assert.isString('delegatee', delegatee);
        const promizz = self._contract.methods.delegate(delegatee);
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
    async delegateGas(delegatee) {
        const self = this;
        const gasAmount = await self._contract.methods.delegate(delegatee).estimateGas();
        return gasAmount;
    }
    ;
    async delegateBySig(delegatee, nonce, expiry, v, r, s) {
        const self = this;
        assert.isString('delegatee', delegatee);
        assert.isNumberOrBigNumber('nonce', nonce);
        assert.isNumberOrBigNumber('expiry', expiry);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.delegateBySig(delegatee, nonce, expiry, v, r, s);
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
    async delegateBySigGas(delegatee, nonce, expiry, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.delegateBySig(delegatee, nonce, expiry, v, r, s).estimateGas();
        return gasAmount;
    }
    ;
    async delegates(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.delegates(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async delegatesGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.delegates(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async getCurrentVotes(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.getCurrentVotes(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getCurrentVotesGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.getCurrentVotes(account).estimateGas();
        return gasAmount;
    }
    ;
    async getPriorVotes(account, blockNumber) {
        const self = this;
        assert.isString('account', account);
        assert.isNumberOrBigNumber('blockNumber', blockNumber);
        const promizz = self._contract.methods.getPriorVotes(account, blockNumber);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getPriorVotesGas(account, blockNumber) {
        const self = this;
        const gasAmount = await self._contract.methods.getPriorVotes(account, blockNumber).estimateGas();
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
    async nonces(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.nonces(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async noncesGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.nonces(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async numCheckpoints(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.numCheckpoints(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async numCheckpointsGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.numCheckpoints(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async permit(owner, spender, rawAmount, deadline, v, r, s) {
        const self = this;
        assert.isString('owner', owner);
        assert.isString('spender', spender);
        assert.isNumberOrBigNumber('rawAmount', rawAmount);
        assert.isNumberOrBigNumber('deadline', deadline);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.permit(owner, spender, rawAmount, deadline, v, r, s);
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
    async permitGas(owner, spender, rawAmount, deadline, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.permit(owner, spender, rawAmount, deadline, v, r, s).estimateGas();
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
    async transfer(dst, rawAmount) {
        const self = this;
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('rawAmount', rawAmount);
        const promizz = self._contract.methods.transfer(dst, rawAmount);
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
    async transferGas(dst, rawAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.transfer(dst, rawAmount).estimateGas();
        return gasAmount;
    }
    ;
    async transferFrom(src, dst, rawAmount) {
        const self = this;
        assert.isString('src', src);
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('rawAmount', rawAmount);
        const promizz = self._contract.methods.transferFrom(src, dst, rawAmount);
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
    async transferFromGas(src, dst, rawAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.transferFrom(src, dst, rawAmount).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerTokenEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, BalincerTokenContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerTokenEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, BalincerTokenContract.ABI());
        return logs;
    }
}
BalincerTokenContract.contractName = 'BalincerToken';
