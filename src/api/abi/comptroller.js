import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var ComptrollerEvents;
(function (ComptrollerEvents) {
    ComptrollerEvents["Failure"] = "Failure";
    ComptrollerEvents["MarketEntered"] = "MarketEntered";
    ComptrollerEvents["MarketExited"] = "MarketExited";
    ComptrollerEvents["MarketListed"] = "MarketListed";
    ComptrollerEvents["NewCloseFactor"] = "NewCloseFactor";
    ComptrollerEvents["NewCollateralFactor"] = "NewCollateralFactor";
    ComptrollerEvents["NewLiquidationIncentive"] = "NewLiquidationIncentive";
    ComptrollerEvents["NewMaxAssets"] = "NewMaxAssets";
    ComptrollerEvents["NewPriceOracle"] = "NewPriceOracle";
})(ComptrollerEvents || (ComptrollerEvents = {}));
export class ComptrollerContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('Comptroller', ComptrollerContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(ComptrollerContract.ABI(), supportedProvider);
        ComptrollerContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_Comptroller")) {
            const obj = window.__eth_contract_Comptroller;
            if (obj instanceof ComptrollerContract) {
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
        const contractInstance = await new ComptrollerContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_Comptroller")) {
            window.__eth_contract_Comptroller = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'error',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'info',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'detail',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Failure',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'account',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketEntered',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'account',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketExited',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'MarketListed',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'oldCloseFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newCloseFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewCloseFactor',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'oldCollateralFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newCollateralFactorMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewCollateralFactor',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'oldLiquidationIncentiveMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newLiquidationIncentiveMantissa',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewLiquidationIncentive',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'oldMaxAssets',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'newMaxAssets',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'NewMaxAssets',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'oldPriceOracle',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'newPriceOracle',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'NewPriceOracle',
                outputs: [],
                type: 'event',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'unitroller',
                        type: 'address',
                    },
                    {
                        name: '_oracle',
                        type: 'address',
                    },
                    {
                        name: '_closeFactorMantissa',
                        type: 'uint256',
                    },
                    {
                        name: '_maxAssets',
                        type: 'uint256',
                    },
                    {
                        name: 'reinitializing',
                        type: 'bool',
                    },
                ],
                name: '_become',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newCloseFactorMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setCloseFactor',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'newCollateralFactorMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setCollateralFactor',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'newLiquidationIncentiveMantissa',
                        type: 'uint256',
                    },
                ],
                name: '_setLiquidationIncentive',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'newMaxAssets',
                        type: 'uint256',
                    },
                ],
                name: '_setMaxAssets',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'newOracle',
                        type: 'address',
                    },
                ],
                name: '_setPriceOracle',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: '_supportMarket',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'index_0',
                        type: 'address',
                    },
                    {
                        name: 'index_1',
                        type: 'uint256',
                    },
                ],
                name: 'accountAssets',
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
                name: 'admin',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'borrowAmount',
                        type: 'uint256',
                    },
                ],
                name: 'borrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'borrowAmount',
                        type: 'uint256',
                    },
                ],
                name: 'borrowVerify',
                outputs: [],
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
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: 'checkMembership',
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
                name: 'closeFactorMantissa',
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
                name: 'comptrollerImplementation',
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
                        name: 'cTokens',
                        type: 'address[]',
                    },
                ],
                name: 'enterMarkets',
                outputs: [
                    {
                        name: '',
                        type: 'uint256[]',
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
                        name: 'cTokenAddress',
                        type: 'address',
                    },
                ],
                name: 'exitMarket',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                name: 'getAccountLiquidity',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                    {
                        name: '',
                        type: 'uint256',
                    },
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
                name: 'getAssetsIn',
                outputs: [
                    {
                        name: '',
                        type: 'address[]',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'isComptroller',
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
                inputs: [
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateBorrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateBorrowVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'liquidateCalculateSeizeTokens',
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
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'liquidationIncentiveMantissa',
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
                name: 'markets',
                outputs: [
                    {
                        name: 'isListed',
                        type: 'bool',
                    },
                    {
                        name: 'collateralFactorMantissa',
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
                name: 'maxAssets',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'minter',
                        type: 'address',
                    },
                    {
                        name: 'mintAmount',
                        type: 'uint256',
                    },
                ],
                name: 'mintAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'minter',
                        type: 'address',
                    },
                    {
                        name: 'mintAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'mintTokens',
                        type: 'uint256',
                    },
                ],
                name: 'mintVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'oracle',
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
                name: 'pendingAdmin',
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
                name: 'pendingComptrollerImplementation',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'redeemer',
                        type: 'address',
                    },
                    {
                        name: 'redeemTokens',
                        type: 'uint256',
                    },
                ],
                name: 'redeemAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'redeemer',
                        type: 'address',
                    },
                    {
                        name: 'redeemAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'redeemTokens',
                        type: 'uint256',
                    },
                ],
                name: 'redeemVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'payer',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                ],
                name: 'repayBorrowAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'payer',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'repayAmount',
                        type: 'uint256',
                    },
                    {
                        name: 'borrowerIndex',
                        type: 'uint256',
                    },
                ],
                name: 'repayBorrowVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'seizeAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cTokenCollateral',
                        type: 'address',
                    },
                    {
                        name: 'cTokenBorrowed',
                        type: 'address',
                    },
                    {
                        name: 'liquidator',
                        type: 'address',
                    },
                    {
                        name: 'borrower',
                        type: 'address',
                    },
                    {
                        name: 'seizeTokens',
                        type: 'uint256',
                    },
                ],
                name: 'seizeVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'transferTokens',
                        type: 'uint256',
                    },
                ],
                name: 'transferAllowed',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
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
                        name: 'cToken',
                        type: 'address',
                    },
                    {
                        name: 'src',
                        type: 'address',
                    },
                    {
                        name: 'dst',
                        type: 'address',
                    },
                    {
                        name: 'transferTokens',
                        type: 'uint256',
                    },
                ],
                name: 'transferVerify',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ];
        return abi;
    }
    async _become(unitroller, _oracle, _closeFactorMantissa, _maxAssets, reinitializing) {
        const self = this;
        assert.isString('unitroller', unitroller);
        assert.isString('_oracle', _oracle);
        assert.isNumberOrBigNumber('_closeFactorMantissa', _closeFactorMantissa);
        assert.isNumberOrBigNumber('_maxAssets', _maxAssets);
        assert.isBoolean('reinitializing', reinitializing);
        const promizz = self._contract.methods._become(unitroller, _oracle, _closeFactorMantissa, _maxAssets, reinitializing);
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
    async _becomeGas(unitroller, _oracle, _closeFactorMantissa, _maxAssets, reinitializing) {
        const self = this;
        const gasAmount = await self._contract.methods._become(unitroller, _oracle, _closeFactorMantissa, _maxAssets, reinitializing).estimateGas();
        return gasAmount;
    }
    ;
    async _setCloseFactor(newCloseFactorMantissa) {
        const self = this;
        assert.isNumberOrBigNumber('newCloseFactorMantissa', newCloseFactorMantissa);
        const promizz = self._contract.methods._setCloseFactor(newCloseFactorMantissa);
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
    async _setCloseFactorGas(newCloseFactorMantissa) {
        const self = this;
        const gasAmount = await self._contract.methods._setCloseFactor(newCloseFactorMantissa).estimateGas();
        return gasAmount;
    }
    ;
    async _setCollateralFactor(cToken, newCollateralFactorMantissa) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isNumberOrBigNumber('newCollateralFactorMantissa', newCollateralFactorMantissa);
        const promizz = self._contract.methods._setCollateralFactor(cToken, newCollateralFactorMantissa);
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
    async _setCollateralFactorGas(cToken, newCollateralFactorMantissa) {
        const self = this;
        const gasAmount = await self._contract.methods._setCollateralFactor(cToken, newCollateralFactorMantissa).estimateGas();
        return gasAmount;
    }
    ;
    async _setLiquidationIncentive(newLiquidationIncentiveMantissa) {
        const self = this;
        assert.isNumberOrBigNumber('newLiquidationIncentiveMantissa', newLiquidationIncentiveMantissa);
        const promizz = self._contract.methods._setLiquidationIncentive(newLiquidationIncentiveMantissa);
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
    async _setLiquidationIncentiveGas(newLiquidationIncentiveMantissa) {
        const self = this;
        const gasAmount = await self._contract.methods._setLiquidationIncentive(newLiquidationIncentiveMantissa).estimateGas();
        return gasAmount;
    }
    ;
    async _setMaxAssets(newMaxAssets) {
        const self = this;
        assert.isNumberOrBigNumber('newMaxAssets', newMaxAssets);
        const promizz = self._contract.methods._setMaxAssets(newMaxAssets);
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
    async _setMaxAssetsGas(newMaxAssets) {
        const self = this;
        const gasAmount = await self._contract.methods._setMaxAssets(newMaxAssets).estimateGas();
        return gasAmount;
    }
    ;
    async _setPriceOracle(newOracle) {
        const self = this;
        assert.isString('newOracle', newOracle);
        const promizz = self._contract.methods._setPriceOracle(newOracle);
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
    async _setPriceOracleGas(newOracle) {
        const self = this;
        const gasAmount = await self._contract.methods._setPriceOracle(newOracle).estimateGas();
        return gasAmount;
    }
    ;
    async _supportMarket(cToken) {
        const self = this;
        assert.isString('cToken', cToken);
        const promizz = self._contract.methods._supportMarket(cToken);
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
    async _supportMarketGas(cToken) {
        const self = this;
        const gasAmount = await self._contract.methods._supportMarket(cToken).estimateGas();
        return gasAmount;
    }
    ;
    async accountAssets(index_0, index_1) {
        const self = this;
        assert.isString('index_0', index_0);
        assert.isNumberOrBigNumber('index_1', index_1);
        const promizz = self._contract.methods.accountAssets(index_0, index_1);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async accountAssetsGas(index_0, index_1) {
        const self = this;
        const gasAmount = await self._contract.methods.accountAssets(index_0, index_1).estimateGas();
        return gasAmount;
    }
    ;
    async admin() {
        const self = this;
        const promizz = self._contract.methods.admin();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async adminGas() {
        const self = this;
        const gasAmount = await self._contract.methods.admin().estimateGas();
        return gasAmount;
    }
    ;
    async borrowAllowed(cToken, borrower, borrowAmount) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('borrowAmount', borrowAmount);
        const promizz = self._contract.methods.borrowAllowed(cToken, borrower, borrowAmount);
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
    async borrowAllowedGas(cToken, borrower, borrowAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.borrowAllowed(cToken, borrower, borrowAmount).estimateGas();
        return gasAmount;
    }
    ;
    async borrowVerify(cToken, borrower, borrowAmount) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('borrowAmount', borrowAmount);
        const promizz = self._contract.methods.borrowVerify(cToken, borrower, borrowAmount);
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
    async borrowVerifyGas(cToken, borrower, borrowAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.borrowVerify(cToken, borrower, borrowAmount).estimateGas();
        return gasAmount;
    }
    ;
    async checkMembership(account, cToken) {
        const self = this;
        assert.isString('account', account);
        assert.isString('cToken', cToken);
        const promizz = self._contract.methods.checkMembership(account, cToken);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async checkMembershipGas(account, cToken) {
        const self = this;
        const gasAmount = await self._contract.methods.checkMembership(account, cToken).estimateGas();
        return gasAmount;
    }
    ;
    async closeFactorMantissa() {
        const self = this;
        const promizz = self._contract.methods.closeFactorMantissa();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async closeFactorMantissaGas() {
        const self = this;
        const gasAmount = await self._contract.methods.closeFactorMantissa().estimateGas();
        return gasAmount;
    }
    ;
    async comptrollerImplementation() {
        const self = this;
        const promizz = self._contract.methods.comptrollerImplementation();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async comptrollerImplementationGas() {
        const self = this;
        const gasAmount = await self._contract.methods.comptrollerImplementation().estimateGas();
        return gasAmount;
    }
    ;
    async enterMarkets(cTokens) {
        const self = this;
        assert.isArray('cTokens', cTokens);
        const promizz = self._contract.methods.enterMarkets(cTokens);
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
    async enterMarketsGas(cTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.enterMarkets(cTokens).estimateGas();
        return gasAmount;
    }
    ;
    async exitMarket(cTokenAddress) {
        const self = this;
        assert.isString('cTokenAddress', cTokenAddress);
        const promizz = self._contract.methods.exitMarket(cTokenAddress);
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
    async exitMarketGas(cTokenAddress) {
        const self = this;
        const gasAmount = await self._contract.methods.exitMarket(cTokenAddress).estimateGas();
        return gasAmount;
    }
    ;
    async getAccountLiquidity(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.getAccountLiquidity(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getAccountLiquidityGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.getAccountLiquidity(account).estimateGas();
        return gasAmount;
    }
    ;
    async getAssetsIn(account) {
        const self = this;
        assert.isString('account', account);
        const promizz = self._contract.methods.getAssetsIn(account);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async getAssetsInGas(account) {
        const self = this;
        const gasAmount = await self._contract.methods.getAssetsIn(account).estimateGas();
        return gasAmount;
    }
    ;
    async isComptroller() {
        const self = this;
        const promizz = self._contract.methods.isComptroller();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async isComptrollerGas() {
        const self = this;
        const gasAmount = await self._contract.methods.isComptroller().estimateGas();
        return gasAmount;
    }
    ;
    async liquidateBorrowAllowed(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount) {
        const self = this;
        assert.isString('cTokenBorrowed', cTokenBorrowed);
        assert.isString('cTokenCollateral', cTokenCollateral);
        assert.isString('liquidator', liquidator);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('repayAmount', repayAmount);
        const promizz = self._contract.methods.liquidateBorrowAllowed(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount);
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
    async liquidateBorrowAllowedGas(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.liquidateBorrowAllowed(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount).estimateGas();
        return gasAmount;
    }
    ;
    async liquidateBorrowVerify(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount, seizeTokens) {
        const self = this;
        assert.isString('cTokenBorrowed', cTokenBorrowed);
        assert.isString('cTokenCollateral', cTokenCollateral);
        assert.isString('liquidator', liquidator);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('repayAmount', repayAmount);
        assert.isNumberOrBigNumber('seizeTokens', seizeTokens);
        const promizz = self._contract.methods.liquidateBorrowVerify(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount, seizeTokens);
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
    async liquidateBorrowVerifyGas(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount, seizeTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.liquidateBorrowVerify(cTokenBorrowed, cTokenCollateral, liquidator, borrower, repayAmount, seizeTokens).estimateGas();
        return gasAmount;
    }
    ;
    async liquidateCalculateSeizeTokens(cTokenBorrowed, cTokenCollateral, repayAmount) {
        const self = this;
        assert.isString('cTokenBorrowed', cTokenBorrowed);
        assert.isString('cTokenCollateral', cTokenCollateral);
        assert.isNumberOrBigNumber('repayAmount', repayAmount);
        const promizz = self._contract.methods.liquidateCalculateSeizeTokens(cTokenBorrowed, cTokenCollateral, repayAmount);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async liquidateCalculateSeizeTokensGas(cTokenBorrowed, cTokenCollateral, repayAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.liquidateCalculateSeizeTokens(cTokenBorrowed, cTokenCollateral, repayAmount).estimateGas();
        return gasAmount;
    }
    ;
    async liquidationIncentiveMantissa() {
        const self = this;
        const promizz = self._contract.methods.liquidationIncentiveMantissa();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async liquidationIncentiveMantissaGas() {
        const self = this;
        const gasAmount = await self._contract.methods.liquidationIncentiveMantissa().estimateGas();
        return gasAmount;
    }
    ;
    async markets(index_0) {
        const self = this;
        assert.isString('index_0', index_0);
        const promizz = self._contract.methods.markets(index_0);
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async marketsGas(index_0) {
        const self = this;
        const gasAmount = await self._contract.methods.markets(index_0).estimateGas();
        return gasAmount;
    }
    ;
    async maxAssets() {
        const self = this;
        const promizz = self._contract.methods.maxAssets();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async maxAssetsGas() {
        const self = this;
        const gasAmount = await self._contract.methods.maxAssets().estimateGas();
        return gasAmount;
    }
    ;
    async mintAllowed(cToken, minter, mintAmount) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('minter', minter);
        assert.isNumberOrBigNumber('mintAmount', mintAmount);
        const promizz = self._contract.methods.mintAllowed(cToken, minter, mintAmount);
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
    async mintAllowedGas(cToken, minter, mintAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.mintAllowed(cToken, minter, mintAmount).estimateGas();
        return gasAmount;
    }
    ;
    async mintVerify(cToken, minter, mintAmount, mintTokens) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('minter', minter);
        assert.isNumberOrBigNumber('mintAmount', mintAmount);
        assert.isNumberOrBigNumber('mintTokens', mintTokens);
        const promizz = self._contract.methods.mintVerify(cToken, minter, mintAmount, mintTokens);
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
    async mintVerifyGas(cToken, minter, mintAmount, mintTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.mintVerify(cToken, minter, mintAmount, mintTokens).estimateGas();
        return gasAmount;
    }
    ;
    async oracle() {
        const self = this;
        const promizz = self._contract.methods.oracle();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async oracleGas() {
        const self = this;
        const gasAmount = await self._contract.methods.oracle().estimateGas();
        return gasAmount;
    }
    ;
    async pendingAdmin() {
        const self = this;
        const promizz = self._contract.methods.pendingAdmin();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async pendingAdminGas() {
        const self = this;
        const gasAmount = await self._contract.methods.pendingAdmin().estimateGas();
        return gasAmount;
    }
    ;
    async pendingComptrollerImplementation() {
        const self = this;
        const promizz = self._contract.methods.pendingComptrollerImplementation();
        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };
        const result = await promizz.call(_essence);
        return result;
    }
    ;
    async pendingComptrollerImplementationGas() {
        const self = this;
        const gasAmount = await self._contract.methods.pendingComptrollerImplementation().estimateGas();
        return gasAmount;
    }
    ;
    async redeemAllowed(cToken, redeemer, redeemTokens) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('redeemer', redeemer);
        assert.isNumberOrBigNumber('redeemTokens', redeemTokens);
        const promizz = self._contract.methods.redeemAllowed(cToken, redeemer, redeemTokens);
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
    async redeemAllowedGas(cToken, redeemer, redeemTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.redeemAllowed(cToken, redeemer, redeemTokens).estimateGas();
        return gasAmount;
    }
    ;
    async redeemVerify(cToken, redeemer, redeemAmount, redeemTokens) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('redeemer', redeemer);
        assert.isNumberOrBigNumber('redeemAmount', redeemAmount);
        assert.isNumberOrBigNumber('redeemTokens', redeemTokens);
        const promizz = self._contract.methods.redeemVerify(cToken, redeemer, redeemAmount, redeemTokens);
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
    async redeemVerifyGas(cToken, redeemer, redeemAmount, redeemTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.redeemVerify(cToken, redeemer, redeemAmount, redeemTokens).estimateGas();
        return gasAmount;
    }
    ;
    async repayBorrowAllowed(cToken, payer, borrower, repayAmount) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('payer', payer);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('repayAmount', repayAmount);
        const promizz = self._contract.methods.repayBorrowAllowed(cToken, payer, borrower, repayAmount);
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
    async repayBorrowAllowedGas(cToken, payer, borrower, repayAmount) {
        const self = this;
        const gasAmount = await self._contract.methods.repayBorrowAllowed(cToken, payer, borrower, repayAmount).estimateGas();
        return gasAmount;
    }
    ;
    async repayBorrowVerify(cToken, payer, borrower, repayAmount, borrowerIndex) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('payer', payer);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('repayAmount', repayAmount);
        assert.isNumberOrBigNumber('borrowerIndex', borrowerIndex);
        const promizz = self._contract.methods.repayBorrowVerify(cToken, payer, borrower, repayAmount, borrowerIndex);
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
    async repayBorrowVerifyGas(cToken, payer, borrower, repayAmount, borrowerIndex) {
        const self = this;
        const gasAmount = await self._contract.methods.repayBorrowVerify(cToken, payer, borrower, repayAmount, borrowerIndex).estimateGas();
        return gasAmount;
    }
    ;
    async seizeAllowed(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens) {
        const self = this;
        assert.isString('cTokenCollateral', cTokenCollateral);
        assert.isString('cTokenBorrowed', cTokenBorrowed);
        assert.isString('liquidator', liquidator);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('seizeTokens', seizeTokens);
        const promizz = self._contract.methods.seizeAllowed(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens);
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
    async seizeAllowedGas(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.seizeAllowed(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens).estimateGas();
        return gasAmount;
    }
    ;
    async seizeVerify(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens) {
        const self = this;
        assert.isString('cTokenCollateral', cTokenCollateral);
        assert.isString('cTokenBorrowed', cTokenBorrowed);
        assert.isString('liquidator', liquidator);
        assert.isString('borrower', borrower);
        assert.isNumberOrBigNumber('seizeTokens', seizeTokens);
        const promizz = self._contract.methods.seizeVerify(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens);
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
    async seizeVerifyGas(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.seizeVerify(cTokenCollateral, cTokenBorrowed, liquidator, borrower, seizeTokens).estimateGas();
        return gasAmount;
    }
    ;
    async transferAllowed(cToken, src, dst, transferTokens) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('src', src);
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('transferTokens', transferTokens);
        const promizz = self._contract.methods.transferAllowed(cToken, src, dst, transferTokens);
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
    async transferAllowedGas(cToken, src, dst, transferTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.transferAllowed(cToken, src, dst, transferTokens).estimateGas();
        return gasAmount;
    }
    ;
    async transferVerify(cToken, src, dst, transferTokens) {
        const self = this;
        assert.isString('cToken', cToken);
        assert.isString('src', src);
        assert.isString('dst', dst);
        assert.isNumberOrBigNumber('transferTokens', transferTokens);
        const promizz = self._contract.methods.transferVerify(cToken, src, dst, transferTokens);
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
    async transferVerifyGas(cToken, src, dst, transferTokens) {
        const self = this;
        const gasAmount = await self._contract.methods.transferVerify(cToken, src, dst, transferTokens).estimateGas();
        return gasAmount;
    }
    ;
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, ComptrollerEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, ComptrollerContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, ComptrollerEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, ComptrollerContract.ABI());
        return logs;
    }
}
ComptrollerContract.contractName = 'Comptroller';
