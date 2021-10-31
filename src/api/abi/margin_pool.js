import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var MarginPoolEvents;
(function (MarginPoolEvents) {
    MarginPoolEvents["Borrow"] = "Borrow";
    MarginPoolEvents["Deposit"] = "Deposit";
    MarginPoolEvents["LiquidationCall"] = "LiquidationCall";
    MarginPoolEvents["Paused"] = "Paused";
    MarginPoolEvents["Repay"] = "Repay";
    MarginPoolEvents["ReserveDataUpdated"] = "ReserveDataUpdated";
    MarginPoolEvents["ReserveUsedAsCollateralDisabled"] = "ReserveUsedAsCollateralDisabled";
    MarginPoolEvents["ReserveUsedAsCollateralEnabled"] = "ReserveUsedAsCollateralEnabled";
    MarginPoolEvents["Swap"] = "Swap";
    MarginPoolEvents["Unpaused"] = "Unpaused";
    MarginPoolEvents["Withdraw"] = "Withdraw";
})(MarginPoolEvents || (MarginPoolEvents = {}));
export class MarginPoolContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('MarginPool', MarginPoolContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(MarginPoolContract.ABI(), supportedProvider);
        MarginPoolContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_MarginPool")) {
            const obj = window.__eth_contract_MarginPool;
            if (obj instanceof MarginPoolContract) {
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
        const contractInstance = await new MarginPoolContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_MarginPool")) {
            window.__eth_contract_MarginPool = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'borrowRate',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Borrow',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Deposit',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'collateralAsset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'debtAsset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'debtToCover',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidatedCollateralAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'LiquidationCall',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [],
                name: 'Paused',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'repayer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Repay',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'liquidityRate',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'variableBorrowRate',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidityIndex',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'variableBorrowIndex',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveDataUpdated',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUsedAsCollateralDisabled',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUsedAsCollateralEnabled',
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
                        name: 'srcReserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'dstReserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'srcAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'dstAmount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Swap',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [],
                name: 'Unpaused',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'reserve',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'user',
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
                name: 'Withdraw',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [],
                name: 'MARGINPOOL_REVISION',
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
                name: 'MAX_NUMBER_RESERVES',
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
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'borrow',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'collateralManager',
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
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'deposit',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'from',
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
                    {
                        name: 'balanceFromBefore',
                        type: 'uint256',
                    },
                    {
                        name: 'balanceToBefore',
                        type: 'uint256',
                    },
                ],
                name: 'finalizeTransfer',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'getAddressesProvider',
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
                ],
                name: 'getConfiguration',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'data',
                                type: 'uint256',
                            },
                        ]
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
                ],
                name: 'getReserveData',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'configuration',
                                type: 'tuple',
                                components: [
                                    {
                                        name: 'data',
                                        type: 'uint256',
                                    },
                                ]
                            },
                            {
                                name: 'liquidityIndex',
                                type: 'uint128',
                            },
                            {
                                name: 'variableBorrowIndex',
                                type: 'uint128',
                            },
                            {
                                name: 'currentLiquidityRate',
                                type: 'uint128',
                            },
                            {
                                name: 'currentVariableBorrowRate',
                                type: 'uint128',
                            },
                            {
                                name: 'lastUpdateTimestamp',
                                type: 'uint40',
                            },
                            {
                                name: 'xTokenAddress',
                                type: 'address',
                            },
                            {
                                name: 'variableDebtTokenAddress',
                                type: 'address',
                            },
                            {
                                name: 'interestRateStrategyAddress',
                                type: 'address',
                            },
                            {
                                name: 'id',
                                type: 'uint8',
                            },
                        ]
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
                ],
                name: 'getReserveNormalizedIncome',
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
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'getReserveNormalizedVariableDebt',
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
                name: 'getReservesList',
                outputs: [
                    {
                        name: '',
                        type: 'address[]',
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
                name: 'getUserAccountData',
                outputs: [
                    {
                        name: 'totalCollateralETH',
                        type: 'uint256',
                    },
                    {
                        name: 'totalDebtETH',
                        type: 'uint256',
                    },
                    {
                        name: 'availableBorrowsETH',
                        type: 'uint256',
                    },
                    {
                        name: 'currentLiquidationThreshold',
                        type: 'uint256',
                    },
                    {
                        name: 'ltv',
                        type: 'uint256',
                    },
                    {
                        name: 'healthFactor',
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
                name: 'getUserConfiguration',
                outputs: [
                    {
                        name: '',
                        type: 'tuple',
                        components: [
                            {
                                name: 'data',
                                type: 'uint256',
                            },
                        ]
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'inchor',
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
                        name: 'xTokenAddress',
                        type: 'address',
                    },
                    {
                        name: 'variableDebtAddress',
                        type: 'address',
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'initReserve',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
                    {
                        name: '_uniswaper',
                        type: 'address',
                    },
                    {
                        name: '_sushiSwaper',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'initialize',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'collateralAsset',
                        type: 'address',
                    },
                    {
                        name: 'debtAsset',
                        type: 'address',
                    },
                    {
                        name: 'user',
                        type: 'address',
                    },
                    {
                        name: 'debtToCover',
                        type: 'uint256',
                    },
                ],
                name: 'liquidationCall',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'paused',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_reserve',
                        type: 'address',
                    },
                    {
                        name: '_to',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'releaseStuckAssets',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'onBehalfOf',
                        type: 'address',
                    },
                ],
                name: 'repay',
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
                        name: '_fee',
                        type: 'uint8',
                    },
                ],
                name: 'setBorrowFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_collateralManager',
                        type: 'address',
                    },
                ],
                name: 'setCollateralManager',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'configuration',
                        type: 'uint256',
                    },
                ],
                name: 'setConfiguration',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'val',
                        type: 'bool',
                    },
                ],
                name: 'setPause',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'rateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'setReserveInterestRateStrategyAddress',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'useAsCollateral',
                        type: 'bool',
                    },
                ],
                name: 'setUserUseReserveAsCollateral',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_fee',
                        type: 'uint8',
                    },
                ],
                name: 'setWithdrawFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'sushiSwaper',
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
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'reserve',
                                type: 'address',
                            },
                            {
                                name: 'reserveTo',
                                type: 'address',
                            },
                            {
                                name: 'amountIn',
                                type: 'uint256',
                            },
                            {
                                name: 'amountOut',
                                type: 'uint256',
                            },
                            {
                                name: 'codes',
                                type: 'bytes',
                            },
                            {
                                name: 'gas',
                                type: 'uint256',
                            },
                            {
                                name: 'swapType',
                                type: 'uint8',
                            },
                            {
                                name: 'isOpenPosition',
                                type: 'bool',
                            },
                        ]
                    },
                ],
                name: 'swapOrderWithAggregation',
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
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                    {
                        name: 'isUni',
                        type: 'bool',
                    },
                ],
                name: 'swapOrderWithUni',
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
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'isExactIn',
                        type: 'bool',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                    {
                        name: 'isUni',
                        type: 'bool',
                    },
                ],
                name: 'swapTokensForTokens',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_reserve',
                        type: 'address',
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: '_reserveTo',
                        type: 'address',
                    },
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'codes',
                        type: 'bytes',
                    },
                    {
                        name: 'gas',
                        type: 'uint256',
                    },
                    {
                        name: 'swapType',
                        type: 'uint8',
                    },
                    {
                        name: 'isOpenPosition',
                        type: 'bool',
                    },
                ],
                name: 'swapWithAggregation',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'uniswaper',
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
                name: 'wethAddress',
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
                        name: 'amount',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                ],
                name: 'withdraw',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async MARGINPOOL_REVISION() {
        const self = this;
        const promizz = self._contract.methods.MARGINPOOL_REVISION();
        const result = await promizz.call();
        return result;
    }
    ;
    async MARGINPOOL_REVISIONGas() {
        const self = this;
        const gasAmount = await self._contract.methods.MARGINPOOL_REVISION().estimateGas();
        return gasAmount;
    }
    ;
    async MAX_NUMBER_RESERVES() {
        const self = this;
        const promizz = self._contract.methods.MAX_NUMBER_RESERVES();
        const result = await promizz.call();
        return result;
    }
    ;
    async MAX_NUMBER_RESERVESGas() {
        const self = this;
        const gasAmount = await self._contract.methods.MAX_NUMBER_RESERVES().estimateGas();
        return gasAmount;
    }
    ;
    async borrow(asset, amount, onBehalfOf) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('onBehalfOf', onBehalfOf);
        const promizz = self._contract.methods.borrow(asset, amount, onBehalfOf);
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
    async borrowGas(asset, amount, onBehalfOf) {
        const self = this;
        const gasAmount = await self._contract.methods.borrow(asset, amount, onBehalfOf).estimateGas();
        return gasAmount;
    }
    ;
    async collateralManager() {
        const self = this;
        const promizz = self._contract.methods.collateralManager();
        const result = await promizz.call();
        return result;
    }
    ;
    async collateralManagerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.collateralManager().estimateGas();
        return gasAmount;
    }
    ;
    async deposit(asset, amount, onBehalfOf) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('onBehalfOf', onBehalfOf);
        const promizz = self._contract.methods.deposit(asset, amount, onBehalfOf);
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
    async depositGas(asset, amount, onBehalfOf) {
        const self = this;
        const gasAmount = await self._contract.methods.deposit(asset, amount, onBehalfOf).estimateGas();
        return gasAmount;
    }
    ;
    async finalizeTransfer(asset, from, to, amount, balanceFromBefore, balanceToBefore) {
        const self = this;
        assert.isString('asset', asset);
        assert.isString('from', from);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isNumberOrBigNumber('balanceFromBefore', balanceFromBefore);
        assert.isNumberOrBigNumber('balanceToBefore', balanceToBefore);
        const promizz = self._contract.methods.finalizeTransfer(asset, from, to, amount, balanceFromBefore, balanceToBefore);
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
    async finalizeTransferGas(asset, from, to, amount, balanceFromBefore, balanceToBefore) {
        const self = this;
        const gasAmount = await self._contract.methods.finalizeTransfer(asset, from, to, amount, balanceFromBefore, balanceToBefore).estimateGas();
        return gasAmount;
    }
    ;
    async getAddressesProvider() {
        const self = this;
        const promizz = self._contract.methods.getAddressesProvider();
        const result = await promizz.call();
        return result;
    }
    ;
    async getAddressesProviderGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getAddressesProvider().estimateGas();
        return gasAmount;
    }
    ;
    async getConfiguration(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getConfiguration(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getConfigurationGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getConfiguration(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getReserveData(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getReserveData(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getReserveDataGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getReserveData(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getReserveNormalizedIncome(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getReserveNormalizedIncome(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getReserveNormalizedIncomeGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getReserveNormalizedIncome(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getReserveNormalizedVariableDebt(asset) {
        const self = this;
        assert.isString('asset', asset);
        const promizz = self._contract.methods.getReserveNormalizedVariableDebt(asset);
        const result = await promizz.call();
        return result;
    }
    ;
    async getReserveNormalizedVariableDebtGas(asset) {
        const self = this;
        const gasAmount = await self._contract.methods.getReserveNormalizedVariableDebt(asset).estimateGas();
        return gasAmount;
    }
    ;
    async getReservesList() {
        const self = this;
        const promizz = self._contract.methods.getReservesList();
        const result = await promizz.call();
        return result;
    }
    ;
    async getReservesListGas() {
        const self = this;
        const gasAmount = await self._contract.methods.getReservesList().estimateGas();
        return gasAmount;
    }
    ;
    async getUserAccountData(user) {
        const self = this;
        assert.isString('user', user);
        const promizz = self._contract.methods.getUserAccountData(user);
        const result = await promizz.call();
        return result;
    }
    ;
    async getUserAccountDataGas(user) {
        const self = this;
        const gasAmount = await self._contract.methods.getUserAccountData(user).estimateGas();
        return gasAmount;
    }
    ;
    async getUserConfiguration(user) {
        const self = this;
        assert.isString('user', user);
        const promizz = self._contract.methods.getUserConfiguration(user);
        const result = await promizz.call();
        return result;
    }
    ;
    async getUserConfigurationGas(user) {
        const self = this;
        const gasAmount = await self._contract.methods.getUserConfiguration(user).estimateGas();
        return gasAmount;
    }
    ;
    async inchor() {
        const self = this;
        const promizz = self._contract.methods.inchor();
        const result = await promizz.call();
        return result;
    }
    ;
    async inchorGas() {
        const self = this;
        const gasAmount = await self._contract.methods.inchor().estimateGas();
        return gasAmount;
    }
    ;
    async initReserve(asset, xTokenAddress, variableDebtAddress, interestRateStrategyAddress) {
        const self = this;
        assert.isString('asset', asset);
        assert.isString('xTokenAddress', xTokenAddress);
        assert.isString('variableDebtAddress', variableDebtAddress);
        assert.isString('interestRateStrategyAddress', interestRateStrategyAddress);
        const promizz = self._contract.methods.initReserve(asset, xTokenAddress, variableDebtAddress, interestRateStrategyAddress);
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
    async initReserveGas(asset, xTokenAddress, variableDebtAddress, interestRateStrategyAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.initReserve(asset, xTokenAddress, variableDebtAddress, interestRateStrategyAddress).estimateGas();
        return gasAmount;
    }
    ;
    async initialize(provider, _uniswaper, _sushiSwaper, _weth) {
        const self = this;
        assert.isString('provider', provider);
        assert.isString('_uniswaper', _uniswaper);
        assert.isString('_sushiSwaper', _sushiSwaper);
        assert.isString('_weth', _weth);
        const promizz = self._contract.methods.initialize(provider, _uniswaper, _sushiSwaper, _weth);
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
    async initializeGas(provider, _uniswaper, _sushiSwaper, _weth) {
        const self = this;
        const gasAmount = await self._contract.methods.initialize(provider, _uniswaper, _sushiSwaper, _weth).estimateGas();
        return gasAmount;
    }
    ;
    async liquidationCall(collateralAsset, debtAsset, user, debtToCover) {
        const self = this;
        assert.isString('collateralAsset', collateralAsset);
        assert.isString('debtAsset', debtAsset);
        assert.isString('user', user);
        assert.isNumberOrBigNumber('debtToCover', debtToCover);
        const promizz = self._contract.methods.liquidationCall(collateralAsset, debtAsset, user, debtToCover);
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
    async liquidationCallGas(collateralAsset, debtAsset, user, debtToCover) {
        const self = this;
        const gasAmount = await self._contract.methods.liquidationCall(collateralAsset, debtAsset, user, debtToCover).estimateGas();
        return gasAmount;
    }
    ;
    async paused() {
        const self = this;
        const promizz = self._contract.methods.paused();
        const result = await promizz.call();
        return result;
    }
    ;
    async pausedGas() {
        const self = this;
        const gasAmount = await self._contract.methods.paused().estimateGas();
        return gasAmount;
    }
    ;
    async releaseStuckAssets(_reserve, _to, amount) {
        const self = this;
        assert.isString('_reserve', _reserve);
        assert.isString('_to', _to);
        assert.isNumberOrBigNumber('amount', amount);
        const promizz = self._contract.methods.releaseStuckAssets(_reserve, _to, amount);
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
    async releaseStuckAssetsGas(_reserve, _to, amount) {
        const self = this;
        const gasAmount = await self._contract.methods.releaseStuckAssets(_reserve, _to, amount).estimateGas();
        return gasAmount;
    }
    ;
    async repay(asset, amount, onBehalfOf) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('onBehalfOf', onBehalfOf);
        const promizz = self._contract.methods.repay(asset, amount, onBehalfOf);
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
    async repayGas(asset, amount, onBehalfOf) {
        const self = this;
        const gasAmount = await self._contract.methods.repay(asset, amount, onBehalfOf).estimateGas();
        return gasAmount;
    }
    ;
    async setBorrowFee(_fee) {
        const self = this;
        assert.isNumberOrBigNumber('_fee', _fee);
        const promizz = self._contract.methods.setBorrowFee(_fee);
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
    async setBorrowFeeGas(_fee) {
        const self = this;
        const gasAmount = await self._contract.methods.setBorrowFee(_fee).estimateGas();
        return gasAmount;
    }
    ;
    async setCollateralManager(_collateralManager) {
        const self = this;
        assert.isString('_collateralManager', _collateralManager);
        const promizz = self._contract.methods.setCollateralManager(_collateralManager);
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
    async setCollateralManagerGas(_collateralManager) {
        const self = this;
        const gasAmount = await self._contract.methods.setCollateralManager(_collateralManager).estimateGas();
        return gasAmount;
    }
    ;
    async setConfiguration(asset, configuration) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('configuration', configuration);
        const promizz = self._contract.methods.setConfiguration(asset, configuration);
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
    async setConfigurationGas(asset, configuration) {
        const self = this;
        const gasAmount = await self._contract.methods.setConfiguration(asset, configuration).estimateGas();
        return gasAmount;
    }
    ;
    async setPause(val) {
        const self = this;
        assert.isBoolean('val', val);
        const promizz = self._contract.methods.setPause(val);
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
    async setPauseGas(val) {
        const self = this;
        const gasAmount = await self._contract.methods.setPause(val).estimateGas();
        return gasAmount;
    }
    ;
    async setReserveInterestRateStrategyAddress(asset, rateStrategyAddress) {
        const self = this;
        assert.isString('asset', asset);
        assert.isString('rateStrategyAddress', rateStrategyAddress);
        const promizz = self._contract.methods.setReserveInterestRateStrategyAddress(asset, rateStrategyAddress);
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
    async setReserveInterestRateStrategyAddressGas(asset, rateStrategyAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.setReserveInterestRateStrategyAddress(asset, rateStrategyAddress).estimateGas();
        return gasAmount;
    }
    ;
    async setUserUseReserveAsCollateral(asset, useAsCollateral) {
        const self = this;
        assert.isString('asset', asset);
        assert.isBoolean('useAsCollateral', useAsCollateral);
        const promizz = self._contract.methods.setUserUseReserveAsCollateral(asset, useAsCollateral);
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
    async setUserUseReserveAsCollateralGas(asset, useAsCollateral) {
        const self = this;
        const gasAmount = await self._contract.methods.setUserUseReserveAsCollateral(asset, useAsCollateral).estimateGas();
        return gasAmount;
    }
    ;
    async setWithdrawFee(_fee) {
        const self = this;
        assert.isNumberOrBigNumber('_fee', _fee);
        const promizz = self._contract.methods.setWithdrawFee(_fee);
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
    async setWithdrawFeeGas(_fee) {
        const self = this;
        const gasAmount = await self._contract.methods.setWithdrawFee(_fee).estimateGas();
        return gasAmount;
    }
    ;
    async sushiSwaper() {
        const self = this;
        const promizz = self._contract.methods.sushiSwaper();
        const result = await promizz.call();
        return result;
    }
    ;
    async sushiSwaperGas() {
        const self = this;
        const gasAmount = await self._contract.methods.sushiSwaper().estimateGas();
        return gasAmount;
    }
    ;
    async swapOrderWithAggregation(order) {
        const self = this;
        const promizz = self._contract.methods.swapOrderWithAggregation(order);
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
    async swapOrderWithAggregationGas(order) {
        const self = this;
        const gasAmount = await self._contract.methods.swapOrderWithAggregation(order).estimateGas();
        return gasAmount;
    }
    ;
    async swapOrderWithUni(user, amountIn, amountOut, path, isOpenPosition, isUni) {
        const self = this;
        assert.isString('user', user);
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isArray('path', path);
        assert.isBoolean('isOpenPosition', isOpenPosition);
        assert.isBoolean('isUni', isUni);
        const promizz = self._contract.methods.swapOrderWithUni(user, amountIn, amountOut, path, isOpenPosition, isUni);
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
    async swapOrderWithUniGas(user, amountIn, amountOut, path, isOpenPosition, isUni) {
        const self = this;
        const gasAmount = await self._contract.methods.swapOrderWithUni(user, amountIn, amountOut, path, isOpenPosition, isUni).estimateGas();
        return gasAmount;
    }
    ;
    async swapTokensForTokens(amountIn, amountOut, path, isExactIn, isOpenPosition, isUni) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isArray('path', path);
        assert.isBoolean('isExactIn', isExactIn);
        assert.isBoolean('isOpenPosition', isOpenPosition);
        assert.isBoolean('isUni', isUni);
        const promizz = self._contract.methods.swapTokensForTokens(amountIn, amountOut, path, isExactIn, isOpenPosition, isUni);
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
    async swapTokensForTokensGas(amountIn, amountOut, path, isExactIn, isOpenPosition, isUni) {
        const self = this;
        const gasAmount = await self._contract.methods.swapTokensForTokens(amountIn, amountOut, path, isExactIn, isOpenPosition, isUni).estimateGas();
        return gasAmount;
    }
    ;
    async swapWithAggregation(_reserve, amount, _reserveTo, amountOut, codes, gas, swapType, isOpenPosition) {
        const self = this;
        assert.isString('_reserve', _reserve);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('_reserveTo', _reserveTo);
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isString('codes', codes);
        assert.isNumberOrBigNumber('gas', gas);
        assert.isNumberOrBigNumber('swapType', swapType);
        assert.isBoolean('isOpenPosition', isOpenPosition);
        const promizz = self._contract.methods.swapWithAggregation(_reserve, amount, _reserveTo, amountOut, codes, gas, swapType, isOpenPosition);
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
    async swapWithAggregationGas(_reserve, amount, _reserveTo, amountOut, codes, gas, swapType, isOpenPosition) {
        const self = this;
        const gasAmount = await self._contract.methods.swapWithAggregation(_reserve, amount, _reserveTo, amountOut, codes, gas, swapType, isOpenPosition).estimateGas();
        return gasAmount;
    }
    ;
    async uniswaper() {
        const self = this;
        const promizz = self._contract.methods.uniswaper();
        const result = await promizz.call();
        return result;
    }
    ;
    async uniswaperGas() {
        const self = this;
        const gasAmount = await self._contract.methods.uniswaper().estimateGas();
        return gasAmount;
    }
    ;
    async wethAddress() {
        const self = this;
        const promizz = self._contract.methods.wethAddress();
        const result = await promizz.call();
        return result;
    }
    ;
    async wethAddressGas() {
        const self = this;
        const gasAmount = await self._contract.methods.wethAddress().estimateGas();
        return gasAmount;
    }
    ;
    async withdraw(asset, amount, to) {
        const self = this;
        assert.isString('asset', asset);
        assert.isNumberOrBigNumber('amount', amount);
        assert.isString('to', to);
        const promizz = self._contract.methods.withdraw(asset, amount, to);
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
    async withdrawGas(asset, amount, to) {
        const self = this;
        const gasAmount = await self._contract.methods.withdraw(asset, amount, to).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, MarginPoolContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, MarginPoolContract.ABI());
        return logs;
    }
}
MarginPoolContract.contractName = 'MarginPool';
