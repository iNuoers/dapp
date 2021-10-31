import { BaseContract } from "vue-blocklink";
export class GenericLogicContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('GenericLogic', GenericLogicContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        GenericLogicContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_GenericLogic")) {
            const obj = window.__eth_contract_GenericLogic;
            if (obj instanceof GenericLogicContract) {
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
        const contractInstance = await new GenericLogicContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_GenericLogic")) {
            window.__eth_contract_GenericLogic = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                name: 'HEALTH_FACTOR_LIQUIDATION_THRESHOLD',
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
    async HEALTH_FACTOR_LIQUIDATION_THRESHOLD() {
        const self = this;
        const promizz = self._contract.methods.HEALTH_FACTOR_LIQUIDATION_THRESHOLD();
        const result = await promizz.call();
        return result;
    }
    ;
    async HEALTH_FACTOR_LIQUIDATION_THRESHOLDGas() {
        const self = this;
        const gasAmount = await self._contract.methods.HEALTH_FACTOR_LIQUIDATION_THRESHOLD().estimateGas();
        return gasAmount;
    }
    ;
}
GenericLogicContract.contractName = 'GenericLogic';
