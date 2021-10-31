import { BaseContract } from "vue-blocklink";
export class ValidationLogicContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('ValidationLogic', ValidationLogicContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        ValidationLogicContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_ValidationLogic")) {
            const obj = window.__eth_contract_ValidationLogic;
            if (obj instanceof ValidationLogicContract) {
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
        const contractInstance = await new ValidationLogicContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_ValidationLogic")) {
            window.__eth_contract_ValidationLogic = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                name: 'REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD',
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
                name: 'REBALANCE_UP_USAGE_RATIO_THRESHOLD',
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
    async REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD() {
        const self = this;
        const promizz = self._contract.methods.REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD();
        const result = await promizz.call();
        return result;
    }
    ;
    async REBALANCE_UP_LIQUIDITY_RATE_THRESHOLDGas() {
        const self = this;
        const gasAmount = await self._contract.methods.REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD().estimateGas();
        return gasAmount;
    }
    ;
    async REBALANCE_UP_USAGE_RATIO_THRESHOLD() {
        const self = this;
        const promizz = self._contract.methods.REBALANCE_UP_USAGE_RATIO_THRESHOLD();
        const result = await promizz.call();
        return result;
    }
    ;
    async REBALANCE_UP_USAGE_RATIO_THRESHOLDGas() {
        const self = this;
        const gasAmount = await self._contract.methods.REBALANCE_UP_USAGE_RATIO_THRESHOLD().estimateGas();
        return gasAmount;
    }
    ;
}
ValidationLogicContract.contractName = 'ValidationLogic';
