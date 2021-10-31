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

import { Utils, AbiItem } from "web3-utils"
import Web3 from "web3"
import BN from "BN.js"

// tslint:enable:no-unused-variable
export interface ContractInterface {
    activateReserve(asset: string,):Promise<void>
    addressesProvider():Promise<string>
    configureReserveAsCollateral(asset: string,ltv: BN,liquidationThreshold: BN,liquidationBonus: BN,):Promise<void>
    deactivateReserve(asset: string,):Promise<void>
    disableBorrowingOnReserve(asset: string,):Promise<void>
    enableBorrowingOnReserve(asset: string,):Promise<void>
    freezeReserve(asset: string,):Promise<void>
    initReserve(xTokenImpl: string,variableDebtTokenImpl: string,underlyingAssetDecimals: number|BN,interestRateStrategyAddress: string,):Promise<void>
    initialize(provider: string,):Promise<void>
    pool():Promise<string>
    setPoolPause(val: boolean,):Promise<void>
    setReserveFactor(asset: string,reserveFactor: BN,):Promise<void>
    setReserveInterestRateStrategyAddress(asset: string,rateStrategyAddress: string,):Promise<void>
    unfreezeReserve(asset: string,):Promise<void>
}





export enum MarginPoolConfiguratorEvents {
    BorrowingDisabledOnReserve = 'BorrowingDisabledOnReserve',
    CollateralConfigurationChanged = 'CollateralConfigurationChanged',
    ReserveActivated = 'ReserveActivated',
    ReserveDeactivated = 'ReserveDeactivated',
    ReserveDecimalsChanged = 'ReserveDecimalsChanged',
    ReserveFactorChanged = 'ReserveFactorChanged',
    ReserveFrozen = 'ReserveFrozen',
    ReserveInitialized = 'ReserveInitialized',
    ReserveInterestRateStrategyChanged = 'ReserveInterestRateStrategyChanged',
    ReserveUnfrozen = 'ReserveUnfrozen',
    VariableDebtTokenUpgraded = 'VariableDebtTokenUpgraded',
    XTokenUpgraded = 'XTokenUpgraded',
}

export interface MarginPoolConfiguratorBorrowingDisabledOnReserveEventArgs extends DecodedLogArgs {
    asset: string;
}

export interface MarginPoolConfiguratorCollateralConfigurationChangedEventArgs extends DecodedLogArgs {
    asset: string;
    ltv: BN;
    liquidationThreshold: BN;
    liquidationBonus: BN;
}

export interface MarginPoolConfiguratorReserveActivatedEventArgs extends DecodedLogArgs {
    asset: string;
}

export interface MarginPoolConfiguratorReserveDeactivatedEventArgs extends DecodedLogArgs {
    asset: string;
}

export interface MarginPoolConfiguratorReserveDecimalsChangedEventArgs extends DecodedLogArgs {
    asset: string;
    decimals: BN;
}

export interface MarginPoolConfiguratorReserveFactorChangedEventArgs extends DecodedLogArgs {
    asset: string;
    factor: BN;
}

export interface MarginPoolConfiguratorReserveFrozenEventArgs extends DecodedLogArgs {
    asset: string;
}

export interface MarginPoolConfiguratorReserveInitializedEventArgs extends DecodedLogArgs {
    asset: string;
    xToken: string;
    variableDebtToken: string;
    interestRateStrategyAddress: string;
}

export interface MarginPoolConfiguratorReserveInterestRateStrategyChangedEventArgs extends DecodedLogArgs {
    asset: string;
    strategy: string;
}

export interface MarginPoolConfiguratorReserveUnfrozenEventArgs extends DecodedLogArgs {
    asset: string;
}

export interface MarginPoolConfiguratorVariableDebtTokenUpgradedEventArgs extends DecodedLogArgs {
    asset: string;
    proxy: string;
    implementation: string;
}

export interface MarginPoolConfiguratorXTokenUpgradedEventArgs extends DecodedLogArgs {
    asset: string;
    proxy: string;
    implementation: string;
}


export type MarginPoolConfiguratorEventArgs =
    | MarginPoolConfiguratorBorrowingDisabledOnReserveEventArgs
    | MarginPoolConfiguratorCollateralConfigurationChangedEventArgs
    | MarginPoolConfiguratorReserveActivatedEventArgs
    | MarginPoolConfiguratorReserveDeactivatedEventArgs
    | MarginPoolConfiguratorReserveDecimalsChangedEventArgs
    | MarginPoolConfiguratorReserveFactorChangedEventArgs
    | MarginPoolConfiguratorReserveFrozenEventArgs
    | MarginPoolConfiguratorReserveInitializedEventArgs
    | MarginPoolConfiguratorReserveInterestRateStrategyChangedEventArgs
    | MarginPoolConfiguratorReserveUnfrozenEventArgs
    | MarginPoolConfiguratorVariableDebtTokenUpgradedEventArgs
    | MarginPoolConfiguratorXTokenUpgradedEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MarginPoolConfiguratorContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'MarginPoolConfigurator';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<MarginPoolConfiguratorEventArgs, MarginPoolConfiguratorEvents>;


    public static Instance(): (MarginPoolConfiguratorContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolConfigurator")) {
          // @ts-ignore
          const obj = window.__eth_contract_MarginPoolConfigurator
          if (obj instanceof MarginPoolConfiguratorContract) {
            return (obj) as MarginPoolConfiguratorContract
          } else {
            return (obj) as MarginPoolConfiguratorContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<MarginPoolConfiguratorContract>
    {
        const contractInstance = await new MarginPoolConfiguratorContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolConfigurator")) {
            // @ts-ignore
            window.__eth_contract_MarginPoolConfigurator = contractInstance
        }

        return contractInstance
    }

    /**
     * @returns The contract ABI
     */
    public static ABI(): AbiItem[] {
        const abi = [
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'BorrowingDisabledOnReserve',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'ltv',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidationThreshold',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'liquidationBonus',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'CollateralConfigurationChanged',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveActivated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveDeactivated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'decimals',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveDecimalsChanged',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'factor',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'ReserveFactorChanged',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveFrozen',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'xToken',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'variableDebtToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ReserveInitialized',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'strategy',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ReserveInterestRateStrategyChanged',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ReserveUnfrozen',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'proxy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'implementation',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'VariableDebtTokenUpgraded',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'proxy',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'implementation',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'XTokenUpgraded',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'activateReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
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
                        name: 'asset',
                        type: 'address',
                    },
                    {
                        name: 'ltv',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidationThreshold',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidationBonus',
                        type: 'uint256',
                    },
                ],
                name: 'configureReserveAsCollateral',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'deactivateReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'disableBorrowingOnReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'enableBorrowingOnReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'freezeReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'xTokenImpl',
                        type: 'address',
                    },
                    {
                        name: 'variableDebtTokenImpl',
                        type: 'address',
                    },
                    {
                        name: 'underlyingAssetDecimals',
                        type: 'uint8',
                    },
                    {
                        name: 'interestRateStrategyAddress',
                        type: 'address',
                    },
                ],
                name: 'initReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'provider',
                        type: 'address',
                    },
                ],
                name: 'initialize',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                ],
                name: 'pool',
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
                        name: 'val',
                        type: 'bool',
                    },
                ],
                name: 'setPoolPause',
                outputs: [
                ],
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
                        name: 'reserveFactor',
                        type: 'uint256',
                    },
                ],
                name: 'setReserveFactor',
                outputs: [
                ],
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
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'unfreezeReserve',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async activateReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.activateReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async activateReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.activateReserve(asset,).estimateGas();
        return gasAmount;
    };


    public async addressesProvider(): Promise<string> {
        const self = this as any as MarginPoolConfiguratorContract;


        const promizz = self._contract.methods.addressesProvider(
)


        const result = await promizz.call();

        return result;
    };


    public async addressesProviderGas(): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.addressesProvider().estimateGas();
        return gasAmount;
    };


    public async configureReserveAsCollateral(asset: string,ltv: BN,liquidationThreshold: BN,liquidationBonus: BN,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('ltv', ltv);
            assert.isNumberOrBigNumber('liquidationThreshold', liquidationThreshold);
            assert.isNumberOrBigNumber('liquidationBonus', liquidationBonus);

        const promizz = self._contract.methods.configureReserveAsCollateral(
            asset,
                    ltv,
                    liquidationThreshold,
                    liquidationBonus,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async configureReserveAsCollateralGas(asset: string,ltv: BN,liquidationThreshold: BN,liquidationBonus: BN,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.configureReserveAsCollateral(asset,ltv,liquidationThreshold,liquidationBonus,).estimateGas();
        return gasAmount;
    };


    public async deactivateReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.deactivateReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async deactivateReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.deactivateReserve(asset,).estimateGas();
        return gasAmount;
    };


    public async disableBorrowingOnReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.disableBorrowingOnReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async disableBorrowingOnReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.disableBorrowingOnReserve(asset,).estimateGas();
        return gasAmount;
    };


    public async enableBorrowingOnReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.enableBorrowingOnReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async enableBorrowingOnReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.enableBorrowingOnReserve(asset,).estimateGas();
        return gasAmount;
    };


    public async freezeReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.freezeReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async freezeReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.freezeReserve(asset,).estimateGas();
        return gasAmount;
    };


    public async initReserve(xTokenImpl: string,variableDebtTokenImpl: string,underlyingAssetDecimals: number|BN,interestRateStrategyAddress: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('xTokenImpl', xTokenImpl);
            assert.isString('variableDebtTokenImpl', variableDebtTokenImpl);
            assert.isNumberOrBigNumber('underlyingAssetDecimals', underlyingAssetDecimals);
            assert.isString('interestRateStrategyAddress', interestRateStrategyAddress);

        const promizz = self._contract.methods.initReserve(
            xTokenImpl,
                    variableDebtTokenImpl,
                    underlyingAssetDecimals,
                    interestRateStrategyAddress,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async initReserveGas(xTokenImpl: string,variableDebtTokenImpl: string,underlyingAssetDecimals: number|BN,interestRateStrategyAddress: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.initReserve(xTokenImpl,variableDebtTokenImpl,underlyingAssetDecimals,interestRateStrategyAddress,).estimateGas();
        return gasAmount;
    };


    public async initialize(provider: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('provider', provider);

        const promizz = self._contract.methods.initialize(
            provider,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async initializeGas(provider: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.initialize(provider,).estimateGas();
        return gasAmount;
    };


    public async pool(): Promise<string> {
        const self = this as any as MarginPoolConfiguratorContract;


        const promizz = self._contract.methods.pool(
)


        const result = await promizz.call();

        return result;
    };


    public async poolGas(): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.pool().estimateGas();
        return gasAmount;
    };


    public async setPoolPause(val: boolean,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isBoolean('val', val);

        const promizz = self._contract.methods.setPoolPause(
            val,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async setPoolPauseGas(val: boolean,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.setPoolPause(val,).estimateGas();
        return gasAmount;
    };


    public async setReserveFactor(asset: string,reserveFactor: BN,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);
            assert.isNumberOrBigNumber('reserveFactor', reserveFactor);

        const promizz = self._contract.methods.setReserveFactor(
            asset,
                    reserveFactor,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async setReserveFactorGas(asset: string,reserveFactor: BN,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.setReserveFactor(asset,reserveFactor,).estimateGas();
        return gasAmount;
    };


    public async setReserveInterestRateStrategyAddress(asset: string,rateStrategyAddress: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);
            assert.isString('rateStrategyAddress', rateStrategyAddress);

        const promizz = self._contract.methods.setReserveInterestRateStrategyAddress(
            asset,
                    rateStrategyAddress,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async setReserveInterestRateStrategyAddressGas(asset: string,rateStrategyAddress: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.setReserveInterestRateStrategyAddress(asset,rateStrategyAddress,).estimateGas();
        return gasAmount;
    };


    public async unfreezeReserve(asset: string,): Promise<void> {
        const self = this as any as MarginPoolConfiguratorContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.unfreezeReserve(
            asset,
        )


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
            this.catchErro(e)
        });

        return result;
    };


    public async unfreezeReserveGas(asset: string,): Promise<number>{
        const self = this as any as MarginPoolConfiguratorContract;
        const gasAmount = await self._contract.methods.unfreezeReserve(asset,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the MarginPoolConfigurator contract.
     * @param eventName The MarginPoolConfigurator contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends MarginPoolConfiguratorEventArgs>(
        eventName: MarginPoolConfiguratorEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolConfiguratorEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            MarginPoolConfiguratorContract.ABI(),
            callback,
            isVerbose,
            blockPollingIntervalMs,
        );
        return subscriptionToken;
    }

    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    public unsubscribe(subscriptionToken: string): void {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }

    /**
     * Cancels all existing subscriptions
     */
    public unsubscribeAll(): void {
        this._subscriptionManager.unsubscribeAll();
    }


    /**
     * Gets historical logs without creating a subscription
     * @param eventName The MarginPoolConfigurator contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends MarginPoolConfiguratorEventArgs>(
        eventName: MarginPoolConfiguratorEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolConfiguratorEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            MarginPoolConfiguratorContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('MarginPoolConfigurator', MarginPoolConfiguratorContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            MarginPoolConfiguratorContract.ABI(),
            supportedProvider,
        );

        MarginPoolConfiguratorContract.ABI().forEach((item, index) => {
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
