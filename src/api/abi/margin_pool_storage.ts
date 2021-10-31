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
}



/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class MarginPoolStorageContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'MarginPoolStorage';
    private readonly _methodABIIndex: { [name: string]: number } = {};


    public static Instance(): (MarginPoolStorageContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_MarginPoolStorage")) {
          // @ts-ignore
          const obj = window.__eth_contract_MarginPoolStorage
          if (obj instanceof MarginPoolStorageContract) {
            return (obj) as MarginPoolStorageContract
          } else {
            return (obj) as MarginPoolStorageContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<MarginPoolStorageContract>
    {
        const contractInstance = await new MarginPoolStorageContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = [];

        if (window && !window.hasOwnProperty("__eth_contract_MarginPoolStorage")) {
            // @ts-ignore
            window.__eth_contract_MarginPoolStorage = contractInstance
        }

        return contractInstance
    }

    /**
     * @returns The contract ABI
     */
    public static ABI(): AbiItem[] {
        const abi = [
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/



    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('MarginPoolStorage', MarginPoolStorageContract.ABI(), address, supportedProvider,ww3);

        MarginPoolStorageContract.ABI().forEach((item, index) => {
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
