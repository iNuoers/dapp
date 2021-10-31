import { BaseContract } from "vue-blocklink";
export class MarginPoolStorageContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('MarginPoolStorage', MarginPoolStorageContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        MarginPoolStorageContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolStorage")) {
            const obj = window.__eth_contract_MarginPoolStorage;
            if (obj instanceof MarginPoolStorageContract) {
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
        const contractInstance = await new MarginPoolStorageContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolStorage")) {
            window.__eth_contract_MarginPoolStorage = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [];
        return abi;
    }
}
MarginPoolStorageContract.contractName = 'MarginPoolStorage';
