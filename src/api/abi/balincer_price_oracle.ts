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
    addGovernor(account: string,):Promise<void>
    addWhitelistAdmin(account: string,):Promise<void>
    assetPrices(asset: string,):Promise<BN>
    getAssetPrice(tokenAddress: string,):Promise<BN>
    getCoinInfo(tokenAddress: string,):Promise<[BN, BN]>
    getRate(tokenAddress: string,):Promise<BN[]>
    getUnderlyingPrice(cToken: string,):Promise<BN>
    isGovernor(account: string,):Promise<boolean>
    isLocked():Promise<boolean>
    isOwner():Promise<boolean>
    isPaused():Promise<boolean>
    isWhitelistAdmin(account: string,):Promise<boolean>
    lock():Promise<void>
    owner():Promise<string>
    pauseSc():Promise<void>
    ptoken_last_rate():Promise<BN>
    ptoken_rate():Promise<BN>
    rates(index_0: string,):Promise<[BN, BN]>
    removeGovernor(account: string,):Promise<void>
    removeWhitelistAdmin(account: string,):Promise<void>
    renounceOwnership():Promise<void>
    transferOwnership(newOwner: string,):Promise<void>
    unlock():Promise<void>
    unpauseSc():Promise<void>
    updateETHPrice(price_cod: BN,):Promise<void>
    updateUSDPrice(token_address: string,price_code: BN,):Promise<void>
}





export enum BalincerPriceOracleEvents {
    ModuleInstall = 'ModuleInstall',
    OwnershipTransferred = 'OwnershipTransferred',
    PriceUpdate = 'PriceUpdate',
    contractPaused = 'contractPaused',
    traillock = 'traillock',
}

export interface BalincerPriceOracleModuleInstallEventArgs extends DecodedLogArgs {
    _z: string;
}

export interface BalincerPriceOracleOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}

export interface BalincerPriceOraclePriceUpdateEventArgs extends DecodedLogArgs {
    confirm_address: string;
    price: BN;
}

export interface BalincerPriceOraclecontractPausedEventArgs extends DecodedLogArgs {
    value: boolean;
}

export interface BalincerPriceOracletraillockEventArgs extends DecodedLogArgs {
    value: BN;
}


export type BalincerPriceOracleEventArgs =
    | BalincerPriceOracleModuleInstallEventArgs
    | BalincerPriceOracleOwnershipTransferredEventArgs
    | BalincerPriceOraclePriceUpdateEventArgs
    | BalincerPriceOraclecontractPausedEventArgs
    | BalincerPriceOracletraillockEventArgs;




/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class BalincerPriceOracleContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'BalincerPriceOracle';
    private readonly _methodABIIndex: { [name: string]: number } = {};
    //todo: we will come back and fix it later not generic Error @https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
    // @ts-ignore
    private readonly _subscriptionManager: SubscriptionManager<BalincerPriceOracleEventArgs, BalincerPriceOracleEvents>;


    public static Instance(): (BalincerPriceOracleContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_BalincerPriceOracle")) {
          // @ts-ignore
          const obj = window.__eth_contract_BalincerPriceOracle
          if (obj instanceof BalincerPriceOracleContract) {
            return (obj) as BalincerPriceOracleContract
          } else {
            return (obj) as BalincerPriceOracleContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<BalincerPriceOracleContract>
    {
        const contractInstance = await new BalincerPriceOracleContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_BalincerPriceOracle")) {
            // @ts-ignore
            window.__eth_contract_BalincerPriceOracle = contractInstance
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
                        name: '_z',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'ModuleInstall',
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
                        name: 'confirm_address',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'price',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'PriceUpdate',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'contractPaused',
                outputs: [
                ],
                type: 'event',
            },
            { 
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'traillock',
                outputs: [
                ],
                type: 'event',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'addGovernor',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'addWhitelistAdmin',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                    {
                        name: 'asset',
                        type: 'address',
                    },
                ],
                name: 'assetPrices',
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
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'getAssetPrice',
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
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'getCoinInfo',
                outputs: [
                    {
                        name: 'price',
                        type: 'uint256',
                    },
                    {
                        name: 'update_time',
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
                        name: 'tokenAddress',
                        type: 'address',
                    },
                ],
                name: 'getRate',
                outputs: [
                    {
                        name: 'coin_info',
                        type: 'uint256[2]',
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
                        name: 'cToken',
                        type: 'address',
                    },
                ],
                name: 'getUnderlyingPrice',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'isGovernor',
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
                inputs: [
                ],
                name: 'isLocked',
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
                inputs: [
                ],
                name: 'isOwner',
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
                inputs: [
                ],
                name: 'isPaused',
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
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'isWhitelistAdmin',
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
                ],
                name: 'lock',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'owner',
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
                ],
                name: 'pauseSc',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: true,
                inputs: [
                ],
                name: 'ptoken_last_rate',
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
                ],
                name: 'ptoken_rate',
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
                name: 'rates',
                outputs: [
                    {
                        name: 'price',
                        type: 'uint256',
                    },
                    {
                        name: 'update_time',
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
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'removeGovernor',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'removeWhitelistAdmin',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                ],
                name: 'renounceOwnership',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                ],
                name: 'unlock',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                ],
                name: 'unpauseSc',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'price_cod',
                        type: 'uint256',
                    },
                ],
                name: 'updateETHPrice',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            { 
                constant: false,
                inputs: [
                    {
                        name: 'token_address',
                        type: 'address',
                    },
                    {
                        name: 'price_code',
                        type: 'uint256',
                    },
                ],
                name: 'updateUSDPrice',
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async addGovernor(account: string,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.addGovernor(
            account,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async addGovernorGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.addGovernor(account,).estimateGas();
        return gasAmount;
    };


    public async addWhitelistAdmin(account: string,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.addWhitelistAdmin(
            account,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async addWhitelistAdminGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.addWhitelistAdmin(account,).estimateGas();
        return gasAmount;
    };


    public async assetPrices(asset: string,): Promise<BN> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('asset', asset);

        const promizz = self._contract.methods.assetPrices(
            asset,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async assetPricesGas(asset: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.assetPrices(asset,).estimateGas();
        return gasAmount;
    };


    public async getAssetPrice(tokenAddress: string,): Promise<BN> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('tokenAddress', tokenAddress);

        const promizz = self._contract.methods.getAssetPrice(
            tokenAddress,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getAssetPriceGas(tokenAddress: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.getAssetPrice(tokenAddress,).estimateGas();
        return gasAmount;
    };


    public async getCoinInfo(tokenAddress: string,): Promise<[BN, BN]> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('tokenAddress', tokenAddress);

        const promizz = self._contract.methods.getCoinInfo(
            tokenAddress,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getCoinInfoGas(tokenAddress: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.getCoinInfo(tokenAddress,).estimateGas();
        return gasAmount;
    };


    public async getRate(tokenAddress: string,): Promise<BN[]> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('tokenAddress', tokenAddress);

        const promizz = self._contract.methods.getRate(
            tokenAddress,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getRateGas(tokenAddress: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.getRate(tokenAddress,).estimateGas();
        return gasAmount;
    };


    public async getUnderlyingPrice(cToken: string,): Promise<BN> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('cToken', cToken);

        const promizz = self._contract.methods.getUnderlyingPrice(
            cToken,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async getUnderlyingPriceGas(cToken: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.getUnderlyingPrice(cToken,).estimateGas();
        return gasAmount;
    };


    public async isGovernor(account: string,): Promise<boolean> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.isGovernor(
            account,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isGovernorGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.isGovernor(account,).estimateGas();
        return gasAmount;
    };


    public async isLocked(): Promise<boolean> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.isLocked(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isLockedGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.isLocked().estimateGas();
        return gasAmount;
    };


    public async isOwner(): Promise<boolean> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.isOwner(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isOwnerGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.isOwner().estimateGas();
        return gasAmount;
    };


    public async isPaused(): Promise<boolean> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.isPaused(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isPausedGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.isPaused().estimateGas();
        return gasAmount;
    };


    public async isWhitelistAdmin(account: string,): Promise<boolean> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.isWhitelistAdmin(
            account,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async isWhitelistAdminGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.isWhitelistAdmin(account,).estimateGas();
        return gasAmount;
    };


    public async lock(): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.lock(
)

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
            this.catchErro(e)
        });

        return result;
    };


    public async lockGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.lock().estimateGas();
        return gasAmount;
    };


    public async owner(): Promise<string> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.owner(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async ownerGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.owner().estimateGas();
        return gasAmount;
    };


    public async pauseSc(): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.pauseSc(
)

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
            this.catchErro(e)
        });

        return result;
    };


    public async pauseScGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.pauseSc().estimateGas();
        return gasAmount;
    };


    public async ptoken_last_rate(): Promise<BN> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.ptoken_last_rate(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async ptoken_last_rateGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.ptoken_last_rate().estimateGas();
        return gasAmount;
    };


    public async ptoken_rate(): Promise<BN> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.ptoken_rate(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async ptoken_rateGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.ptoken_rate().estimateGas();
        return gasAmount;
    };


    public async rates(index_0: string,): Promise<[BN, BN]> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('index_0', index_0);

        const promizz = self._contract.methods.rates(
            index_0,
        )

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async ratesGas(index_0: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.rates(index_0,).estimateGas();
        return gasAmount;
    };


    public async removeGovernor(account: string,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.removeGovernor(
            account,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async removeGovernorGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.removeGovernor(account,).estimateGas();
        return gasAmount;
    };


    public async removeWhitelistAdmin(account: string,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('account', account);

        const promizz = self._contract.methods.removeWhitelistAdmin(
            account,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async removeWhitelistAdminGas(account: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.removeWhitelistAdmin(account,).estimateGas();
        return gasAmount;
    };


    public async renounceOwnership(): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.renounceOwnership(
)

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
            this.catchErro(e)
        });

        return result;
    };


    public async renounceOwnershipGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.renounceOwnership().estimateGas();
        return gasAmount;
    };


    public async transferOwnership(newOwner: string,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('newOwner', newOwner);

        const promizz = self._contract.methods.transferOwnership(
            newOwner,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async transferOwnershipGas(newOwner: string,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.transferOwnership(newOwner,).estimateGas();
        return gasAmount;
    };


    public async unlock(): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.unlock(
)

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
            this.catchErro(e)
        });

        return result;
    };


    public async unlockGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.unlock().estimateGas();
        return gasAmount;
    };


    public async unpauseSc(): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;


        const promizz = self._contract.methods.unpauseSc(
)

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
            this.catchErro(e)
        });

        return result;
    };


    public async unpauseScGas(): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.unpauseSc().estimateGas();
        return gasAmount;
    };


    public async updateETHPrice(price_cod: BN,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isNumberOrBigNumber('price_cod', price_cod);

        const promizz = self._contract.methods.updateETHPrice(
            price_cod,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async updateETHPriceGas(price_cod: BN,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.updateETHPrice(price_cod,).estimateGas();
        return gasAmount;
    };


    public async updateUSDPrice(token_address: string,price_code: BN,): Promise<void> {
        const self = this as any as BalincerPriceOracleContract;

            assert.isString('token_address', token_address);
            assert.isNumberOrBigNumber('price_code', price_code);

        const promizz = self._contract.methods.updateUSDPrice(
            token_address,
                    price_code,
        )

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
            this.catchErro(e)
        });

        return result;
    };


    public async updateUSDPriceGas(token_address: string,price_code: BN,): Promise<number>{
        const self = this as any as BalincerPriceOracleContract;
        const gasAmount = await self._contract.methods.updateUSDPrice(token_address,price_code,).estimateGas();
        return gasAmount;
    };


    /**
     * Subscribe to an event type emitted by the BalincerPriceOracle contract.
     * @param eventName The BalincerPriceOracle contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    public subscribe<ArgsType extends BalincerPriceOracleEventArgs>(
        eventName: BalincerPriceOracleEvents,
        indexFilterValues: IndexedFilterValues,
        callback: EventCallback<ArgsType>,
        isVerbose: boolean = false,
        blockPollingIntervalMs?: number,
    ): string {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerPriceOracleEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe<ArgsType>(
            this._address,
            eventName,
            indexFilterValues,
            BalincerPriceOracleContract.ABI(),
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
     * @param eventName The BalincerPriceOracle contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    public async getLogsAsync<ArgsType extends BalincerPriceOracleEventArgs>(
        eventName: BalincerPriceOracleEvents,
        blockRange: BlockRange,
        indexFilterValues: IndexedFilterValues,
    ): Promise<Array<LogWithDecodedArgs<ArgsType>>> {
        assert.doesBelongToStringEnum('eventName', eventName, BalincerPriceOracleEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync<ArgsType>(
            this._address,
            eventName,
            blockRange,
            indexFilterValues,
            BalincerPriceOracleContract.ABI(),
        );
        return logs;
    }

    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('BalincerPriceOracle', BalincerPriceOracleContract.ABI(), address, supportedProvider,ww3);
        this._subscriptionManager = new SubscriptionManager(
            BalincerPriceOracleContract.ABI(),
            supportedProvider,
        );

        BalincerPriceOracleContract.ABI().forEach((item, index) => {
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
