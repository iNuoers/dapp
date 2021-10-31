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
    getAddress(id: string,):Promise<string>
    getEmergencyAdmin():Promise<string>
    getLeverToken():Promise<string>
    getMarginPool():Promise<string>
    getMarginPoolConfigurator():Promise<string>
    getOrderBook():Promise<string>
    getPoolAdmin():Promise<string>
    getPriceOracle():Promise<string>
    getRewardsDistribution():Promise<string>
    getSwapMiner():Promise<string>
    getTreasuryAddress():Promise<string>
    owner():Promise<string>
    renounceOwnership():Promise<void>
    setAddress(id: string,newAddress: string,):Promise<void>
    setAddressAsProxy(id: string,implementationAddress: string,):Promise<void>
    setEmergencyAdmin(emergencyAdmin: string,):Promise<void>
    setLeverToken(lever: string,):Promise<void>
    setMarginPoolConfiguratorImpl(configurator: string,):Promise<void>
    setMarginPoolImpl(pool: string,UniswapRouter: string,SushiswapRouter: string,_weth: string,):Promise<void>
    setOrderBookImpl(orderBook: string,UniswapRouter: string,_weth: string,):Promise<void>
    setPoolAdmin(admin: string,):Promise<void>
    setPriceOracle(priceOracle: string,):Promise<void>
    setRewardsDistribution(rewardsDistribution: string,):Promise<void>
    setSwapMinerImpl(swapMiner: string,UniswapRouter: string,_uniswapLevPairToken: string,LeverUsdOracle: string,):Promise<void>
    setTreasuryAddress(treasuryAddress: string,):Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
}





export enum MarginPoolAddressesProviderEvents {
    AddressSet = 'AddressSet',
    ConfigurationAdminUpdated = 'ConfigurationAdminUpdated',
    EmergencyAdminUpdated = 'EmergencyAdminUpdated',
    LeverTokenUpdated = 'LeverTokenUpdated',
    MarginPoolCollateralManagerUpdated = 'MarginPoolCollateralManagerUpdated',
    MarginPoolConfiguratorUpdated = 'MarginPoolConfiguratorUpdated',
    MarginPoolUpdated = 'MarginPoolUpdated',
    OrderBookUpdated = 'OrderBookUpdated',
    OwnershipTransferred = 'OwnershipTransferred',
    PriceOracleUpdated = 'PriceOracleUpdated',
    ProxyCreated = 'ProxyCreated',
    RewardsDistributionUpdated = 'RewardsDistributionUpdated',
    SwapMinerUpdated = 'SwapMinerUpdated',
    TreasuryAddressUpdated = 'TreasuryAddressUpdated',
}

export interface MarginPoolAddressesProviderAddressSetEventArgs extends DecodedLogArgs {
    id: string;
    newAddress: string;
    hasProxy: boolean;
}

export interface MarginPoolAddressesProviderConfigurationAdminUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderEmergencyAdminUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderLeverTokenUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderMarginPoolCollateralManagerUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderMarginPoolConfiguratorUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderMarginPoolUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderOrderBookUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface MarginPoolAddressesProviderPriceOracleUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderProxyCreatedEventArgs extends DecodedLogArgs {
    id: string;
    newAddress: string;
}

export interface MarginPoolAddressesProviderRewardsDistributionUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderSwapMinerUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}

export interface MarginPoolAddressesProviderTreasuryAddressUpdatedEventArgs extends DecodedLogArgs {
    newAddress: string;
}


export type MarginPoolAddressesProviderEventArgs =
    | MarginPoolAddressesProviderAddressSetEventArgs
    | MarginPoolAddressesProviderConfigurationAdminUpdatedEventArgs
    | MarginPoolAddressesProviderEmergencyAdminUpdatedEventArgs
    | MarginPoolAddressesProviderLeverTokenUpdatedEventArgs
    | MarginPoolAddressesProviderMarginPoolCollateralManagerUpdatedEventArgs
    | MarginPoolAddressesProviderMarginPoolConfiguratorUpdatedEventArgs
    | MarginPoolAddressesProviderMarginPoolUpdatedEventArgs
    | MarginPoolAddressesProviderOrderBookUpdatedEventArgs
    | MarginPoolAddressesProviderOwnershipTransferredEventArgs
    | MarginPoolAddressesProviderPriceOracleUpdatedEventArgs
    | MarginPoolAddressesProviderProxyCreatedEventArgs
    | MarginPoolAddressesProviderRewardsDistributionUpdatedEventArgs
    | MarginPoolAddressesProviderSwapMinerUpdatedEventArgs
    | MarginPoolAddressesProviderTreasuryAddressUpdatedEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MarginPoolAddressesProviderContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'MarginPoolAddressesProvider';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<MarginPoolAddressesProviderEventArgs, MarginPoolAddressesProviderEvents>;


    public static Instance(): (MarginPoolAddressesProviderContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolAddressesProvider")) {
          // @ts-ignore
          const obj = window.__eth_contract_MarginPoolAddressesProvider
          if (obj instanceof MarginPoolAddressesProviderContract) {
            return (obj) as MarginPoolAddressesProviderContract
          } else {
            return (obj) as MarginPoolAddressesProviderContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<MarginPoolAddressesProviderContract>
    {
        const contractInstance = await new MarginPoolAddressesProviderContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolAddressesProvider")) {
            // @ts-ignore
            window.__eth_contract_MarginPoolAddressesProvider = contractInstance
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
                ],
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'hasProxy',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'AddressSet',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ConfigurationAdminUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'EmergencyAdminUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'LeverTokenUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolCollateralManagerUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolConfiguratorUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'MarginPoolUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OrderBookUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'previousOwner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'newOwner',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OwnershipTransferred',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'PriceOracleUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'ProxyCreated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'RewardsDistributionUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'SwapMinerUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'newAddress',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'TreasuryAddressUpdated',
                outputs: [
                ],
                type: 'event',
            },
            { 
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                    },
                ],
                name: 'getAddress',
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
                ],
                name: 'getEmergencyAdmin',
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
                ],
                name: 'getLeverToken',
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
                ],
                name: 'getMarginPool',
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
                ],
                name: 'getMarginPoolConfigurator',
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
                ],
                name: 'getOrderBook',
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
                ],
                name: 'getPoolAdmin',
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
                ],
                name: 'getPriceOracle',
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
                ],
                name: 'getRewardsDistribution',
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
                ],
                name: 'getSwapMiner',
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
                ],
                name: 'getTreasuryAddress',
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
                ],
                name: 'owner',
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
                ],
                name: 'renounceOwnership',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                    },
                    {
                        name: 'newAddress',
                        type: 'address',
                    },
                ],
                name: 'setAddress',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'id',
                        type: 'bytes32',
                    },
                    {
                        name: 'implementationAddress',
                        type: 'address',
                    },
                ],
                name: 'setAddressAsProxy',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'emergencyAdmin',
                        type: 'address',
                    },
                ],
                name: 'setEmergencyAdmin',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'lever',
                        type: 'address',
                    },
                ],
                name: 'setLeverToken',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'configurator',
                        type: 'address',
                    },
                ],
                name: 'setMarginPoolConfiguratorImpl',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'pool',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: 'SushiswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'setMarginPoolImpl',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'orderBook',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_weth',
                        type: 'address',
                    },
                ],
                name: 'setOrderBookImpl',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'admin',
                        type: 'address',
                    },
                ],
                name: 'setPoolAdmin',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'priceOracle',
                        type: 'address',
                    },
                ],
                name: 'setPriceOracle',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'rewardsDistribution',
                        type: 'address',
                    },
                ],
                name: 'setRewardsDistribution',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'swapMiner',
                        type: 'address',
                    },
                    {
                        name: 'UniswapRouter',
                        type: 'address',
                    },
                    {
                        name: '_uniswapLevPairToken',
                        type: 'address',
                    },
                    {
                        name: 'LeverUsdOracle',
                        type: 'address',
                    },
                ],
                name: 'setSwapMinerImpl',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'treasuryAddress',
                        type: 'address',
                    },
                ],
                name: 'setTreasuryAddress',
                outputs: [
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
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

    public async getAddress(id: string,): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('id', id);

        const promizz = self._contract.methods.getAddress(
            id,
        )


        const result = await promizz.call();

        return result;
    };


    public async getAddressGas(id: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getAddress(id,).estimateGas();
        return gasAmount;
    };


    public async getEmergencyAdmin(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getEmergencyAdmin(
)


        const result = await promizz.call();

        return result;
    };


    public async getEmergencyAdminGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getEmergencyAdmin().estimateGas();
        return gasAmount;
    };


    public async getLeverToken(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getLeverToken(
)


        const result = await promizz.call();

        return result;
    };


    public async getLeverTokenGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getLeverToken().estimateGas();
        return gasAmount;
    };


    public async getMarginPool(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getMarginPool(
)


        const result = await promizz.call();

        return result;
    };


    public async getMarginPoolGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getMarginPool().estimateGas();
        return gasAmount;
    };


    public async getMarginPoolConfigurator(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getMarginPoolConfigurator(
)


        const result = await promizz.call();

        return result;
    };


    public async getMarginPoolConfiguratorGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getMarginPoolConfigurator().estimateGas();
        return gasAmount;
    };


    public async getOrderBook(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getOrderBook(
)


        const result = await promizz.call();

        return result;
    };


    public async getOrderBookGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getOrderBook().estimateGas();
        return gasAmount;
    };


    public async getPoolAdmin(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getPoolAdmin(
)


        const result = await promizz.call();

        return result;
    };


    public async getPoolAdminGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getPoolAdmin().estimateGas();
        return gasAmount;
    };


    public async getPriceOracle(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getPriceOracle(
)


        const result = await promizz.call();

        return result;
    };


    public async getPriceOracleGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getPriceOracle().estimateGas();
        return gasAmount;
    };


    public async getRewardsDistribution(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getRewardsDistribution(
)


        const result = await promizz.call();

        return result;
    };


    public async getRewardsDistributionGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getRewardsDistribution().estimateGas();
        return gasAmount;
    };


    public async getSwapMiner(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getSwapMiner(
)


        const result = await promizz.call();

        return result;
    };


    public async getSwapMinerGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getSwapMiner().estimateGas();
        return gasAmount;
    };


    public async getTreasuryAddress(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.getTreasuryAddress(
)


        const result = await promizz.call();

        return result;
    };


    public async getTreasuryAddressGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.getTreasuryAddress().estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.owner(
)


        const result = await promizz.call();

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;


        const promizz = self._contract.methods.renounceOwnership(
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


    public async renounceOwnershipGas(): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async setAddress(id: string,newAddress: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('id', id);
            assert.isString('newAddress', newAddress);

        const promizz = self._contract.methods.setAddress(
            id,
                    newAddress,
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


    public async setAddressGas(id: string,newAddress: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setAddress(id,newAddress,).estimateGas();
        return gasAmount;
    };


    public async setAddressAsProxy(id: string,implementationAddress: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('id', id);
            assert.isString('implementationAddress', implementationAddress);

        const promizz = self._contract.methods.setAddressAsProxy(
            id,
                    implementationAddress,
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


    public async setAddressAsProxyGas(id: string,implementationAddress: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setAddressAsProxy(id,implementationAddress,).estimateGas();
        return gasAmount;
    };


    public async setEmergencyAdmin(emergencyAdmin: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('emergencyAdmin', emergencyAdmin);

        const promizz = self._contract.methods.setEmergencyAdmin(
            emergencyAdmin,
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


    public async setEmergencyAdminGas(emergencyAdmin: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setEmergencyAdmin(emergencyAdmin,).estimateGas();
        return gasAmount;
    };


    public async setLeverToken(lever: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('lever', lever);

        const promizz = self._contract.methods.setLeverToken(
            lever,
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


    public async setLeverTokenGas(lever: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setLeverToken(lever,).estimateGas();
        return gasAmount;
    };


    public async setMarginPoolConfiguratorImpl(configurator: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('configurator', configurator);

        const promizz = self._contract.methods.setMarginPoolConfiguratorImpl(
            configurator,
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


    public async setMarginPoolConfiguratorImplGas(configurator: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setMarginPoolConfiguratorImpl(configurator,).estimateGas();
        return gasAmount;
    };


    public async setMarginPoolImpl(pool: string,UniswapRouter: string,SushiswapRouter: string,_weth: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('pool', pool);
            assert.isString('UniswapRouter', UniswapRouter);
            assert.isString('SushiswapRouter', SushiswapRouter);
            assert.isString('_weth', _weth);

        const promizz = self._contract.methods.setMarginPoolImpl(
            pool,
                    UniswapRouter,
                    SushiswapRouter,
                    _weth,
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


    public async setMarginPoolImplGas(pool: string,UniswapRouter: string,SushiswapRouter: string,_weth: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setMarginPoolImpl(pool,UniswapRouter,SushiswapRouter,_weth,).estimateGas();
        return gasAmount;
    };


    public async setOrderBookImpl(orderBook: string,UniswapRouter: string,_weth: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('orderBook', orderBook);
            assert.isString('UniswapRouter', UniswapRouter);
            assert.isString('_weth', _weth);

        const promizz = self._contract.methods.setOrderBookImpl(
            orderBook,
                    UniswapRouter,
                    _weth,
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


    public async setOrderBookImplGas(orderBook: string,UniswapRouter: string,_weth: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setOrderBookImpl(orderBook,UniswapRouter,_weth,).estimateGas();
        return gasAmount;
    };


    public async setPoolAdmin(admin: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('admin', admin);

        const promizz = self._contract.methods.setPoolAdmin(
            admin,
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


    public async setPoolAdminGas(admin: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setPoolAdmin(admin,).estimateGas();
        return gasAmount;
    };


    public async setPriceOracle(priceOracle: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('priceOracle', priceOracle);

        const promizz = self._contract.methods.setPriceOracle(
            priceOracle,
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


    public async setPriceOracleGas(priceOracle: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setPriceOracle(priceOracle,).estimateGas();
        return gasAmount;
    };


    public async setRewardsDistribution(rewardsDistribution: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('rewardsDistribution', rewardsDistribution);

        const promizz = self._contract.methods.setRewardsDistribution(
            rewardsDistribution,
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


    public async setRewardsDistributionGas(rewardsDistribution: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setRewardsDistribution(rewardsDistribution,).estimateGas();
        return gasAmount;
    };


    public async setSwapMinerImpl(swapMiner: string,UniswapRouter: string,_uniswapLevPairToken: string,LeverUsdOracle: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('swapMiner', swapMiner);
            assert.isString('UniswapRouter', UniswapRouter);
            assert.isString('_uniswapLevPairToken', _uniswapLevPairToken);
            assert.isString('LeverUsdOracle', LeverUsdOracle);

        const promizz = self._contract.methods.setSwapMinerImpl(
            swapMiner,
                    UniswapRouter,
                    _uniswapLevPairToken,
                    LeverUsdOracle,
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


    public async setSwapMinerImplGas(swapMiner: string,UniswapRouter: string,_uniswapLevPairToken: string,LeverUsdOracle: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setSwapMinerImpl(swapMiner,UniswapRouter,_uniswapLevPairToken,LeverUsdOracle,).estimateGas();
        return gasAmount;
    };


    public async setTreasuryAddress(treasuryAddress: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('treasuryAddress', treasuryAddress);

        const promizz = self._contract.methods.setTreasuryAddress(
            treasuryAddress,
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


    public async setTreasuryAddressGas(treasuryAddress: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.setTreasuryAddress(treasuryAddress,).estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as MarginPoolAddressesProviderContract;

            assert.isString('newOwner', newOwner);

        const promizz = self._contract.methods.transferOwnership(
            newOwner,
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


    public async transferOwnershipGas(newOwner: string,): Promise<number>{
        const self = this as any as MarginPoolAddressesProviderContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the MarginPoolAddressesProvider contract.
     * @param eventName The MarginPoolAddressesProvider contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends MarginPoolAddressesProviderEventArgs>(
        eventName: MarginPoolAddressesProviderEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolAddressesProviderEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            MarginPoolAddressesProviderContract.ABI(),
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
     * @param eventName The MarginPoolAddressesProvider contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends MarginPoolAddressesProviderEventArgs>(
        eventName: MarginPoolAddressesProviderEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, MarginPoolAddressesProviderEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            MarginPoolAddressesProviderContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('MarginPoolAddressesProvider', MarginPoolAddressesProviderContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            MarginPoolAddressesProviderContract.ABI(),
            supportedProvider,
        );

        MarginPoolAddressesProviderContract.ABI().forEach((item, index) => {
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
