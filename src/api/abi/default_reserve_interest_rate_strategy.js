import { assert, BaseContract } from "vue-blocklink";
export class DefaultReserveInterestRateStrategyContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('DefaultReserveInterestRateStrategy', DefaultReserveInterestRateStrategyContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        DefaultReserveInterestRateStrategyContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_DefaultReserveInterestRateStrategy")) {
            const obj = window.__eth_contract_DefaultReserveInterestRateStrategy;
            if (obj instanceof DefaultReserveInterestRateStrategyContract) {
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
        const contractInstance = await new DefaultReserveInterestRateStrategyContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["provider",
            "optimalUtilizationRate",
            "baseVariableBorrowRate",
            "variableRateSlope1",
            "variableRateSlope2"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_DefaultReserveInterestRateStrategy")) {
            window.__eth_contract_DefaultReserveInterestRateStrategy = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
                    {
                        name: 'optimalUtilizationRate',
                        type: 'uint256',
                    },
                    {
                        name: 'baseVariableBorrowRate',
                        type: 'uint256',
                    },
                    {
                        name: 'variableRateSlope1',
                        type: 'uint256',
                    },
                    {
                        name: 'variableRateSlope2',
                        type: 'uint256',
                    },
                ],
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                inputs: [],
                name: 'EXCESS_UTILIZATION_RATE',
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
                name: 'OPTIMAL_UTILIZATION_RATE',
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
                inputs: [],
                name: 'baseVariableBorrowRate',
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
                        name: 'availableLiquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'totalVariableDebt',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveFactor',
                        type: 'uint256',
                    },
                ],
                name: 'calculateInterestRates',
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
                inputs: [],
                name: 'getMaxVariableBorrowRate',
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
                name: 'variableRateSlope1',
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
                name: 'variableRateSlope2',
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
    async EXCESS_UTILIZATION_RATE() {
        const self = this;
        const promizz = self._contract.methods.EXCESS_UTILIZATION_RATE();
        const result = await promizz.call();
        return result;
    }
    ;
    async EXCESS_UTILIZATION_RATEGas() {
        const self = this;
        const gasAmount = await self._contract.methods.EXCESS_UTILIZATION_RATE().estimateGas();
        return gasAmount;
    }
    ;
    async OPTIMAL_UTILIZATION_RATE() {
        const self = this;
        const promizz = self._contract.methods.OPTIMAL_UTILIZATION_RATE();
        const result = await promizz.call();
        return result;
    }
    ;
    async OPTIMAL_UTILIZATION_RATEGas() {
        const self = this;
        const gasAmount = await self._contract.methods.OPTIMAL_UTILIZATION_RATE().estimateGas();
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
    async baseVariableBorrowRate() {
        const self = this;
        const promizz = self._contract.methods.baseVariableBorrowRate();
        const result = await promizz.call();
        return result;
    }
    ;
    async baseVariableBorrowRateGas() {
        const self = this;
        const gasAmount = await self._contract.methods.baseVariableBorrowRate().estimateGas();
        return gasAmount;
    }
    ;
    async calculateInterestRates(availableLiquidity, totalVariableDebt, reserveFactor) {
        const self = this;
        assert.isNumberOrBigNumber('availableLiquidity', availableLiquidity);
        assert.isNumberOrBigNumber('totalVariableDebt', totalVariableDebt);
        assert.isNumberOrBigNumber('reserveFactor', reserveFactor);
        const promizz = self._contract.methods.calculateInterestRates(availableLiquidity, totalVariableDebt, reserveFactor);
        const result = await promizz.call();
        return result;
    }
    ;
    async calculateInterestRatesGas(availableLiquidity, totalVariableDebt, reserveFactor) {
        const self = this;
        const gasAmount = await self._contract.methods.calculateInterestRates(availableLiquidity, totalVariableDebt, reserveFactor).estimateGas();
        return gasAmount;
    }
    ;
    async getMaxVariableBorrowRate() {
        const self = this;
        const promizz = self._contract.methods.getMaxVariableBorrowRate();
        const result = await promizz.call();
        return result;
    }
    ;
    async getMaxVariableBorrowRateGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getMaxVariableBorrowRate().estimateGas();
        return gasAmount;
    }
    ;
    async variableRateSlope1() {
        const self = this;
        const promizz = self._contract.methods.variableRateSlope1();
        const result = await promizz.call();
        return result;
    }
    ;
    async variableRateSlope1Gas() {
        const self = this;
        const gasAmount = await self._contract.methods.variableRateSlope1().estimateGas();
        return gasAmount;
    }
    ;
    async variableRateSlope2() {
        const self = this;
        const promizz = self._contract.methods.variableRateSlope2();
        const result = await promizz.call();
        return result;
    }
    ;
    async variableRateSlope2Gas() {
        const self = this;
        const gasAmount = await self._contract.methods.variableRateSlope2().estimateGas();
        return gasAmount;
    }
    ;
}
DefaultReserveInterestRateStrategyContract.contractName = 'DefaultReserveInterestRateStrategy';
