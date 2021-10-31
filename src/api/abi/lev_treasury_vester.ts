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
    claim():Promise<void>
    lev():Promise<string>
    nextTime():Promise<BN>
    recipient():Promise<string>
    setRecipient(recipient_: string,):Promise<void>
    vestingAmount():Promise<BN>
    vestingBegin():Promise<BN>
    vestingCycle():Promise<BN>
    vestingFirst():Promise<BN>
    vestingShare():Promise<BN>
}



/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class LevTreasuryVesterContract extends BaseContract implements ContractInterface{
    /**
     * @ignore
     */
public static deployedBytecode: string | undefined;
public static readonly contractName = 'LevTreasuryVester';
    private readonly _methodABIIndex: { [name: string]: number } = {};


    public static Instance(): (LevTreasuryVesterContract | any | boolean) {
        if (window && window.hasOwnProperty("__eth_contract_LevTreasuryVester")) {
          // @ts-ignore
          const obj = window.__eth_contract_LevTreasuryVester
          if (obj instanceof LevTreasuryVesterContract) {
            return (obj) as LevTreasuryVesterContract
          } else {
            return (obj) as LevTreasuryVesterContract
          }
        } else {
          return false
        }
    }

    static async init(
        contract_address: string,
        supportedProvider: provider,
        ww3: Web3
        ):Promise<LevTreasuryVesterContract>
    {
        const contractInstance = await new LevTreasuryVesterContract(
            contract_address,
            supportedProvider,
            ww3
        );

        contractInstance.constructorArgs = ["lev_",
"recipient_",
"vestingAmount_",
"vestingBegin_",
"vestingFirst_",
"vestingShare_"
];

        if (window && !window.hasOwnProperty("__eth_contract_LevTreasuryVester")) {
            // @ts-ignore
            window.__eth_contract_LevTreasuryVester = contractInstance
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
                        name: 'lev_',
                        type: 'address',
                    },
                    {
                        name: 'recipient_',
                        type: 'address',
                    },
                    {
                        name: 'vestingAmount_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingBegin_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingFirst_',
                        type: 'uint256',
                    },
                    {
                        name: 'vestingShare_',
                        type: 'uint256',
                    },
                ],
                outputs: [
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            { 
                constant: false,
                inputs: [
                ],
                name: 'claim',
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
                name: 'lev',
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
                inputs: [
                ],
                name: 'nextTime',
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
                name: 'recipient',
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
                        name: 'recipient_',
                        type: 'address',
                    },
                ],
                name: 'setRecipient',
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
                name: 'vestingAmount',
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
                name: 'vestingBegin',
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
                name: 'vestingCycle',
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
                name: 'vestingFirst',
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
                name: 'vestingShare',
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
        ] as AbiItem[];
        return abi;
    }

    /**
     the listed content for the contract functions
    **/

    public async claim(): Promise<void> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.claim(
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


    public async claimGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.claim().estimateGas();
        return gasAmount;
    };


    public async lev(): Promise<string> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.lev(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async levGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.lev().estimateGas();
        return gasAmount;
    };


    public async nextTime(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.nextTime(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async nextTimeGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.nextTime().estimateGas();
        return gasAmount;
    };


    public async recipient(): Promise<string> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.recipient(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async recipientGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.recipient().estimateGas();
        return gasAmount;
    };


    public async setRecipient(recipient_: string,): Promise<void> {
        const self = this as any as LevTreasuryVesterContract;

            assert.isString('recipient_', recipient_);

        const promizz = self._contract.methods.setRecipient(
            recipient_,
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


    public async setRecipientGas(recipient_: string,): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.setRecipient(recipient_,).estimateGas();
        return gasAmount;
    };


    public async vestingAmount(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.vestingAmount(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async vestingAmountGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.vestingAmount().estimateGas();
        return gasAmount;
    };


    public async vestingBegin(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.vestingBegin(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async vestingBeginGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.vestingBegin().estimateGas();
        return gasAmount;
    };


    public async vestingCycle(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.vestingCycle(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async vestingCycleGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.vestingCycle().estimateGas();
        return gasAmount;
    };


    public async vestingFirst(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.vestingFirst(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async vestingFirstGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.vestingFirst().estimateGas();
        return gasAmount;
    };


    public async vestingShare(): Promise<BN> {
        const self = this as any as LevTreasuryVesterContract;


        const promizz = self._contract.methods.vestingShare(
)

        const _essence = {
            from: this._blockwrap.getAccountAddress(),
            gas: this.gas,
            gasPrice: this.gasPrice
        };


        const result = await promizz.call(_essence);

        return result;
    };


    public async vestingShareGas(): Promise<number>{
        const self = this as any as LevTreasuryVesterContract;
        const gasAmount = await self._contract.methods.vestingShare().estimateGas();
        return gasAmount;
    };




    constructor(
        address: string,
        supportedProvider: provider,
        ww3: Web3
    ) {
        super('LevTreasuryVester', LevTreasuryVesterContract.ABI(), address, supportedProvider,ww3);

        LevTreasuryVesterContract.ABI().forEach((item, index) => {
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
