import { assert, schemas, SubscriptionManager, BaseContract } from "vue-blocklink";
export var ReserveLogicEvents;
(function (ReserveLogicEvents) {
    ReserveLogicEvents["ReserveDataUpdated"] = "ReserveDataUpdated";
})(ReserveLogicEvents || (ReserveLogicEvents = {}));
export class ReserveLogicContract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('ReserveLogic', ReserveLogicContract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        this._subscriptionManager = new SubscriptionManager(ReserveLogicContract.ABI(), supportedProvider);
        ReserveLogicContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_ReserveLogic")) {
            const obj = window.__eth_contract_ReserveLogic;
            if (obj instanceof ReserveLogicContract) {
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
        const contractInstance = await new ReserveLogicContract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = [];
        if (window && !window.hasOwnProperty("__eth_contract_ReserveLogic")) {
            window.__eth_contract_ReserveLogic = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'asset',
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
        ];
        return abi;
    }
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert.doesBelongToStringEnum('eventName', eventName, ReserveLogicEvents);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        assert.isFunction('callback', callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this._address, eventName, indexFilterValues, ReserveLogicContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    async getLogsAsync(eventName, blockRange, indexFilterValues) {
        assert.doesBelongToStringEnum('eventName', eventName, ReserveLogicEvents);
        assert.doesConformToSchema('blockRange', blockRange, schemas.blockRangeSchema);
        assert.doesConformToSchema('indexFilterValues', indexFilterValues, schemas.indexFilterValuesSchema);
        const logs = await this._subscriptionManager.getLogsAsync(this._address, eventName, blockRange, indexFilterValues, ReserveLogicContract.ABI());
        return logs;
    }
}
ReserveLogicContract.contractName = 'ReserveLogic';
