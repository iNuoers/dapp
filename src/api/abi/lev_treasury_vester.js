import { assert, BaseContract } from "vue-blocklink";
export class LevTreasuryVesterContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('LevTreasuryVester', LevTreasuryVesterContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        LevTreasuryVesterContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_LevTreasuryVester")) {
            const obj = window.__eth_contract_LevTreasuryVester;
            if (obj instanceof LevTreasuryVesterContract) {
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
        const contractInstance = await new LevTreasuryVesterContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["lev_",
            "recipient_",
            "vestingAmount_",
            "vestingBegin_",
            "vestingFirst_",
            "vestingShare_"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_LevTreasuryVester")) {
            window.__eth_contract_LevTreasuryVester = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'lev_',
                        type: 'address',
                    },
                    {
                        name: 'recipient_',
                        type: 'address',
                    },
                    {
                        name: 'vestingAmount_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingBegin_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingFirst_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingShare_',
                        type: 'uint256',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                constant: false,
                inputs: [],
                name: 'claim',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'lev',
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
                inputs: [],
                name: 'nextTime',
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
                name: 'recipient',
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
                        name: 'recipient_',
                        type: 'address',
                    },
                ],
                name: 'setRecipient',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'vestingAmount',
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
                name: 'vestingBegin',
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
                name: 'vestingCycle',
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
                name: 'vestingFirst',
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
                name: 'vestingShare',
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
        ];
        return abi;
    }
    async claim() {
        const self = this;
        const promizz = self._contract.methods.claim();
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
    async claimGas() {
        const self = this;
        const gasAmount = await self._contract.methods.claim().estimateGas();
        return gasAmount;
    }
    ;
    async lev() {
        const self = this;
        const promizz = self._contract.methods.lev();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async levGas() {
        const self = this;
        const gasAmount = await self._contract.methods.lev().estimateGas();
        return gasAmount;
    }
    ;
    async nextTime() {
        const self = this;
        const promizz = self._contract.methods.nextTime();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async nextTimeGas() {
        const self = this;
        const gasAmount = await self._contract.methods.nextTime().estimateGas();
        return gasAmount;
    }
    ;
    async recipient() {
        const self = this;
        const promizz = self._contract.methods.recipient();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async recipientGas() {
        const self = this;
        const gasAmount = await self._contract.methods.recipient().estimateGas();
        return gasAmount;
    }
    ;
    async setRecipient(recipient_) {
        const self = this;
        assert.isString('recipient_', recipient_);
        const promizz = self._contract.methods.setRecipient(recipient_);
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
    async setRecipientGas(recipient_) {
        const self = this;
        const gasAmount = await self._contract.methods.setRecipient(recipient_).estimateGas();
        return gasAmount;
    }
    ;
    async vestingAmount() {
        const self = this;
        const promizz = self._contract.methods.vestingAmount();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async vestingAmountGas() {
        const self = this;
        const gasAmount = await self._contract.methods.vestingAmount().estimateGas();
        return gasAmount;
    }
    ;
    async vestingBegin() {
        const self = this;
        const promizz = self._contract.methods.vestingBegin();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async vestingBeginGas() {
        const self = this;
        const gasAmount = await self._contract.methods.vestingBegin().estimateGas();
        return gasAmount;
    }
    ;
    async vestingCycle() {
        const self = this;
        const promizz = self._contract.methods.vestingCycle();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async vestingCycleGas() {
        const self = this;
        const gasAmount = await self._contract.methods.vestingCycle().estimateGas();
        return gasAmount;
    }
    ;
    async vestingFirst() {
        const self = this;
        const promizz = self._contract.methods.vestingFirst();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async vestingFirstGas() {
        const self = this;
        const gasAmount = await self._contract.methods.vestingFirst().estimateGas();
        return gasAmount;
    }
    ;
    async vestingShare() {
        const self = this;
        const promizz = self._contract.methods.vestingShare();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async vestingShareGas() {
        const self = this;
        const gasAmount = await self._contract.methods.vestingShare().estimateGas();
        return gasAmount;
    }
    ;
}
LevTreasuryVesterContract.contractName = 'LevTreasuryVester';
