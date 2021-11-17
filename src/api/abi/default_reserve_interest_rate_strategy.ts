/* DO NOT EDIT THE BELOW FILE AS THIS IS LIKELY WILL BE GENERATED AGAIN AND REWRITE OVER IT */

// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable

import * as ethers from "ethers"
// eslint-disable-next-line import/named
import {
    assert,
    schemas,
    // eslint-disable-next-line import/named
    SubscriptionManager,
    // eslint-disable-next-line import/named
    BaseContract,
    // eslint-disable-next-line import/named
    EventCallback,
    // eslint-disable-next-line import/named
    IndexedFilterValues,
    // eslint-disable-next-line import/named
    BlockRange,
    // eslint-disable-next-line import/named
    DecodedLogArgs,
    // eslint-disable-next-line import/named
    LogWithDecodedArgs,
    // eslint-disable-next-line import/named
    MethodAbi
} from "vue-blocklink"

import {
    BatchRequest,
    Extension,
    Log,
    PromiEvent,
    provider,
    Providers,
    RLPEncodedTransaction,
    Transaction,
    TransactionConfig,
    TransactionReceipt,
    Common,
    hardfork,
    chain,
    BlockNumber,
    LogsOptions,
    PastLogsOptions
} from "web3-core"

import {Utils, AbiItem} from "web3-utils"
import Web3 from "web3"
import BN from "BN.js"

// tslint:enable:no-unused-variable
export interface ContractInterface {
    EXCESS_UTILIZATION_RATE(): Promise<BN>

    OPTIMAL_UTILIZATION_RATE(): Promise<BN>

    addressesProvider(): Promise<string>

    baseVariableBorrowRate(): Promise<BN>

    calculateInterestRates(availableLiquidity: BN, totalVariableDebt: BN, reserveFactor: BN,): Promise<[BN, BN]>

    getMaxVariableBorrowRate(): Promise<BN>

    variableRateSlope1(): Promise<BN>

    variableRateSlope2(): Promise<BN>
}


/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class DefaultReserveInterestRateStrategyContract extends BaseContract implements ContractInterface {
    /**
     * @ignore
     */
    public static deployedBytecode: string | undefined;
    public static readonly contractName = 'DefaultReserveInterestRateStrategy';
    private readonly _methodABIIndex: { [name: string]: number } = {};


    public static Instance(): (DefaultReserveInterestRateStrategyContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_DefaultReserveInterestRateStrategy")) {
            // @ts-ignore
            const obj = window.__eth_contract_DefaultReserveInterestRateStrategy
            if (obj instanceof DefaultReserveInterestRateStrategyContract) {
                return (obj) as DefaultReserveInterestRateStrategyContract
            } else {
                return (obj) as DefaultReserveInterestRateStrategyContract
            }
        } else {
            return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
    ): Promise<DefaultReserveInterestRateStrategyContract> {
        const contractInstance = await new DefaultReserveInterestRateStrategyContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["provider",
            "optimalUtilizationRate",
            "baseVariableBorrowRate",
            "variableRateSlope1",
            "variableRateSlope2"
        ];

        if (window && !window.hasOwnProperty("__eth_contract_DefaultReserveInterestRateStrategy")) {
            // @ts-ignore
            window.__eth_contract_DefaultReserveInterestRateStrategy = contractInstance
        }

        return contractInstance
    }

    /**
     * @returns The contract ABI
     */
    public static ABI(): AbiItem[] {
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
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
     **/

    public async EXCESS_UTILIZATION_RATE(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.EXCESS_UTILIZATION_RATE(
        )


        const result = await promizz.call();

        return result;
    };


    public async EXCESS_UTILIZATION_RATEGas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.EXCESS_UTILIZATION_RATE().estimateGas();
        return gasAmount;
    };


    public async OPTIMAL_UTILIZATION_RATE(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.OPTIMAL_UTILIZATION_RATE(
        )


        const result = await promizz.call();

        return result;
    };


    public async OPTIMAL_UTILIZATION_RATEGas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.OPTIMAL_UTILIZATION_RATE().estimateGas();
        return gasAmount;
    };


    public async addressesProvider(): Promise<string> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.addressesProvider(
        )


        const result = await promizz.call();

        return result;
    };


    public async addressesProviderGas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.addressesProvider().estimateGas();
        return gasAmount;
    };


    public async baseVariableBorrowRate(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.baseVariableBorrowRate(
        )


        const result = await promizz.call();

        return result;
    };


    public async baseVariableBorrowRateGas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.baseVariableBorrowRate().estimateGas();
        return gasAmount;
    };


    public async calculateInterestRates(availableLiquidity: BN, totalVariableDebt: BN, reserveFactor: BN,): Promise<[BN, BN]> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;

        assert.isNumberOrBigNumber('availableLiquidity', availableLiquidity);
        assert.isNumberOrBigNumber('totalVariableDebt', totalVariableDebt);
        assert.isNumberOrBigNumber('reserveFactor', reserveFactor);

        const promizz = self._contract.methods.calculateInterestRates(
            availableLiquidity,
            totalVariableDebt,
            reserveFactor,
        )


        const result = await promizz.call();

        return result;
    };


    public async calculateInterestRatesGas(availableLiquidity: BN, totalVariableDebt: BN, reserveFactor: BN,): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.calculateInterestRates(availableLiquidity, totalVariableDebt, reserveFactor,).estimateGas();
        return gasAmount;
    };


    public async getMaxVariableBorrowRate(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.getMaxVariableBorrowRate(
        )


        const result = await promizz.call();

        return result;
    };


    public async getMaxVariableBorrowRateGas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.getMaxVariableBorrowRate().estimateGas();
        return gasAmount;
    };


    public async variableRateSlope1(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.variableRateSlope1(
        )


        const result = await promizz.call();

        return result;
    };


    public async variableRateSlope1Gas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.variableRateSlope1().estimateGas();
        return gasAmount;
    };


    public async variableRateSlope2(): Promise<BN> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;


        const promizz = self._contract.methods.variableRateSlope2(
        )


        const result = await promizz.call();

        return result;
    };


    public async variableRateSlope2Gas(): Promise<number> {
        const self = this as any as DefaultReserveInterestRateStrategyContract;
        const gasAmount = await self._contract.methods.variableRateSlope2().estimateGas();
        return gasAmount;
    };


    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('DefaultReserveInterestRateStrategy', DefaultReserveInterestRateStrategyContract.ABI(), address, supportedProvider, ww3);

        DefaultReserveInterestRateStrategyContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item as MethodAbi;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });


    }
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
