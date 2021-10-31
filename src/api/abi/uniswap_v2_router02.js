import { assert, BaseContract } from "vue-blocklink";
export class UniswapV2Router02Contract extends BaseContract {
    constructor(address, supportedProvider, ww3) {
        super('UniswapV2Router02', UniswapV2Router02Contract.ABI(), address, supportedProvider, ww3);
        this._methodABIIndex = {};
        UniswapV2Router02Contract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static Instance() {
        if (window && window.hasOwnProperty("__eth_contract_UniswapV2Router02")) {
            const obj = window.__eth_contract_UniswapV2Router02;
            if (obj instanceof UniswapV2Router02Contract) {
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
        const contractInstance = await new UniswapV2Router02Contract(contract_address, supportedProvider, ww3);
        contractInstance.constructorArgs = ["_factory",
            "_WETH"
        ];
        if (window && !window.hasOwnProperty("__eth_contract_UniswapV2Router02")) {
            window.__eth_contract_UniswapV2Router02 = contractInstance;
        }
        return contractInstance;
    }
    static ABI() {
        const abi = [
            {
                inputs: [
                    {
                        name: '_factory',
                        type: 'address',
                    },
                    {
                        name: '_WETH',
                        type: 'address',
                    },
                ],
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                inputs: [],
                name: 'WETH',
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
                        name: 'tokenA',
                        type: 'address',
                    },
                    {
                        name: 'tokenB',
                        type: 'address',
                    },
                    {
                        name: 'amountADesired',
                        type: 'uint256',
                    },
                    {
                        name: 'amountBDesired',
                        type: 'uint256',
                    },
                    {
                        name: 'amountAMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountBMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'addLiquidity',
                outputs: [
                    {
                        name: 'amountA',
                        type: 'uint256',
                    },
                    {
                        name: 'amountB',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'token',
                        type: 'address',
                    },
                    {
                        name: 'amountTokenDesired',
                        type: 'uint256',
                    },
                    {
                        name: 'amountTokenMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETHMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'addLiquidityETH',
                outputs: [
                    {
                        name: 'amountToken',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETH',
                        type: 'uint256',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [],
                name: 'factory',
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
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveIn',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveOut',
                        type: 'uint256',
                    },
                ],
                name: 'getAmountIn',
                outputs: [
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'pure',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveIn',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveOut',
                        type: 'uint256',
                    },
                ],
                name: 'getAmountOut',
                outputs: [
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'pure',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                ],
                name: 'getAmountsIn',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                ],
                name: 'getAmountsOut',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountA',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveA',
                        type: 'uint256',
                    },
                    {
                        name: 'reserveB',
                        type: 'uint256',
                    },
                ],
                name: 'quote',
                outputs: [
                    {
                        name: 'amountB',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'pure',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'tokenA',
                        type: 'address',
                    },
                    {
                        name: 'tokenB',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountAMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountBMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'removeLiquidity',
                outputs: [
                    {
                        name: 'amountA',
                        type: 'uint256',
                    },
                    {
                        name: 'amountB',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'token',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountTokenMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETHMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'removeLiquidityETH',
                outputs: [
                    {
                        name: 'amountToken',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETH',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'token',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountTokenMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETHMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'removeLiquidityETHSupportingFeeOnTransferTokens',
                outputs: [
                    {
                        name: 'amountETH',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'token',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountTokenMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETHMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        name: 'approveMax',
                        type: 'bool',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'removeLiquidityETHWithPermit',
                outputs: [
                    {
                        name: 'amountToken',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETH',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'token',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountTokenMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountETHMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        name: 'approveMax',
                        type: 'bool',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens',
                outputs: [
                    {
                        name: 'amountETH',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'tokenA',
                        type: 'address',
                    },
                    {
                        name: 'tokenB',
                        type: 'address',
                    },
                    {
                        name: 'liquidity',
                        type: 'uint256',
                    },
                    {
                        name: 'amountAMin',
                        type: 'uint256',
                    },
                    {
                        name: 'amountBMin',
                        type: 'uint256',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                    {
                        name: 'approveMax',
                        type: 'bool',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'removeLiquidityWithPermit',
                outputs: [
                    {
                        name: 'amountA',
                        type: 'uint256',
                    },
                    {
                        name: 'amountB',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapETHForExactTokens',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactETHForTokens',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
                outputs: [],
                stateMutability: 'payable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountIn',
                        type: 'uint256',
                    },
                    {
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactTokensForETH',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
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
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
                outputs: [],
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
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactTokensForTokens',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
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
                        name: 'amountOutMin',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'amountInMax',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapTokensForExactETH',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'amountOut',
                        type: 'uint256',
                    },
                    {
                        name: 'amountInMax',
                        type: 'uint256',
                    },
                    {
                        name: 'path',
                        type: 'address[]',
                    },
                    {
                        name: 'to',
                        type: 'address',
                    },
                    {
                        name: 'deadline',
                        type: 'uint256',
                    },
                ],
                name: 'swapTokensForExactTokens',
                outputs: [
                    {
                        name: 'amounts',
                        type: 'uint256[]',
                    },
                ],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [],
                outputs: [],
                stateMutability: 'payable',
                type: 'receive',
            },
        ];
        return abi;
    }
    async WETH() {
        const self = this;
        const promizz = self._contract.methods.WETH();
        const result = await promizz.call();
        return result;
    }
    ;
    async WETHGas() {
        const self = this;
        const gasAmount = await self._contract.methods.WETH().estimateGas();
        return gasAmount;
    }
    ;
    async addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline) {
        const self = this;
        assert.isString('tokenA', tokenA);
        assert.isString('tokenB', tokenB);
        assert.isNumberOrBigNumber('amountADesired', amountADesired);
        assert.isNumberOrBigNumber('amountBDesired', amountBDesired);
        assert.isNumberOrBigNumber('amountAMin', amountAMin);
        assert.isNumberOrBigNumber('amountBMin', amountBMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline);
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
    async addLiquidityGas(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.addLiquidity(tokenA, tokenB, amountADesired, amountBDesired, amountAMin, amountBMin, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        assert.isString('token', token);
        assert.isNumberOrBigNumber('amountTokenDesired', amountTokenDesired);
        assert.isNumberOrBigNumber('amountTokenMin', amountTokenMin);
        assert.isNumberOrBigNumber('amountETHMin', amountETHMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline);
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
    async addLiquidityETHGas(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.addLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async factory() {
        const self = this;
        const promizz = self._contract.methods.factory();
        const result = await promizz.call();
        return result;
    }
    ;
    async factoryGas() {
        const self = this;
        const gasAmount = await self._contract.methods.factory().estimateGas();
        return gasAmount;
    }
    ;
    async getAmountIn(amountOut, reserveIn, reserveOut) {
        const self = this;
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isNumberOrBigNumber('reserveIn', reserveIn);
        assert.isNumberOrBigNumber('reserveOut', reserveOut);
        const promizz = self._contract.methods.getAmountIn(amountOut, reserveIn, reserveOut);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAmountInGas(amountOut, reserveIn, reserveOut) {
        const self = this;
        const gasAmount = await self._contract.methods.getAmountIn(amountOut, reserveIn, reserveOut).estimateGas();
        return gasAmount;
    }
    ;
    async getAmountOut(amountIn, reserveIn, reserveOut) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('reserveIn', reserveIn);
        assert.isNumberOrBigNumber('reserveOut', reserveOut);
        const promizz = self._contract.methods.getAmountOut(amountIn, reserveIn, reserveOut);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAmountOutGas(amountIn, reserveIn, reserveOut) {
        const self = this;
        const gasAmount = await self._contract.methods.getAmountOut(amountIn, reserveIn, reserveOut).estimateGas();
        return gasAmount;
    }
    ;
    async getAmountsIn(amountOut, path) {
        const self = this;
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isArray('path', path);
        const promizz = self._contract.methods.getAmountsIn(amountOut, path);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAmountsInGas(amountOut, path) {
        const self = this;
        const gasAmount = await self._contract.methods.getAmountsIn(amountOut, path).estimateGas();
        return gasAmount;
    }
    ;
    async getAmountsOut(amountIn, path) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isArray('path', path);
        const promizz = self._contract.methods.getAmountsOut(amountIn, path);
        const result = await promizz.call();
        return result;
    }
    ;
    async getAmountsOutGas(amountIn, path) {
        const self = this;
        const gasAmount = await self._contract.methods.getAmountsOut(amountIn, path).estimateGas();
        return gasAmount;
    }
    ;
    async quote(amountA, reserveA, reserveB) {
        const self = this;
        assert.isNumberOrBigNumber('amountA', amountA);
        assert.isNumberOrBigNumber('reserveA', reserveA);
        assert.isNumberOrBigNumber('reserveB', reserveB);
        const promizz = self._contract.methods.quote(amountA, reserveA, reserveB);
        const result = await promizz.call();
        return result;
    }
    ;
    async quoteGas(amountA, reserveA, reserveB) {
        const self = this;
        const gasAmount = await self._contract.methods.quote(amountA, reserveA, reserveB).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline) {
        const self = this;
        assert.isString('tokenA', tokenA);
        assert.isString('tokenB', tokenB);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountAMin', amountAMin);
        assert.isNumberOrBigNumber('amountBMin', amountBMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline);
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
    async removeLiquidityGas(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidity(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        assert.isString('token', token);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountTokenMin', amountTokenMin);
        assert.isNumberOrBigNumber('amountETHMin', amountETHMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline);
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
    async removeLiquidityETHGas(token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidityETHSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        assert.isString('token', token);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountTokenMin', amountTokenMin);
        assert.isNumberOrBigNumber('amountETHMin', amountETHMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.removeLiquidityETHSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline);
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
    async removeLiquidityETHSupportingFeeOnTransferTokensGas(token, liquidity, amountTokenMin, amountETHMin, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidityETHSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidityETHWithPermit(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        assert.isString('token', token);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountTokenMin', amountTokenMin);
        assert.isNumberOrBigNumber('amountETHMin', amountETHMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        assert.isBoolean('approveMax', approveMax);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.removeLiquidityETHWithPermit(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s);
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
    async removeLiquidityETHWithPermitGas(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidityETHWithPermit(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        assert.isString('token', token);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountTokenMin', amountTokenMin);
        assert.isNumberOrBigNumber('amountETHMin', amountETHMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        assert.isBoolean('approveMax', approveMax);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s);
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
    async removeLiquidityETHWithPermitSupportingFeeOnTransferTokensGas(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token, liquidity, amountTokenMin, amountETHMin, to, deadline, approveMax, v, r, s).estimateGas();
        return gasAmount;
    }
    ;
    async removeLiquidityWithPermit(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        assert.isString('tokenA', tokenA);
        assert.isString('tokenB', tokenB);
        assert.isNumberOrBigNumber('liquidity', liquidity);
        assert.isNumberOrBigNumber('amountAMin', amountAMin);
        assert.isNumberOrBigNumber('amountBMin', amountBMin);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        assert.isBoolean('approveMax', approveMax);
        assert.isNumberOrBigNumber('v', v);
        assert.isString('r', r);
        assert.isString('s', s);
        const promizz = self._contract.methods.removeLiquidityWithPermit(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline, approveMax, v, r, s);
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
    async removeLiquidityWithPermitGas(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline, approveMax, v, r, s) {
        const self = this;
        const gasAmount = await self._contract.methods.removeLiquidityWithPermit(tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline, approveMax, v, r, s).estimateGas();
        return gasAmount;
    }
    ;
    async swapETHForExactTokens(amountOut, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapETHForExactTokens(amountOut, path, to, deadline);
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
    async swapETHForExactTokensGas(amountOut, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapETHForExactTokens(amountOut, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactETHForTokens(amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactETHForTokens(amountOutMin, path, to, deadline);
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
    async swapExactETHForTokensGas(amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactETHForTokens(amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin, path, to, deadline);
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
    async swapExactETHForTokensSupportingFeeOnTransferTokensGas(amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactTokensForETH(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactTokensForETH(amountIn, amountOutMin, path, to, deadline);
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
    async swapExactTokensForETHGas(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactTokensForETH(amountIn, amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline);
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
    async swapExactTokensForETHSupportingFeeOnTransferTokensGas(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline);
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
    async swapExactTokensForTokensGas(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountIn', amountIn);
        assert.isNumberOrBigNumber('amountOutMin', amountOutMin);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline);
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
    async swapExactTokensForTokensSupportingFeeOnTransferTokensGas(amountIn, amountOutMin, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn, amountOutMin, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapTokensForExactETH(amountOut, amountInMax, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isNumberOrBigNumber('amountInMax', amountInMax);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapTokensForExactETH(amountOut, amountInMax, path, to, deadline);
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
    async swapTokensForExactETHGas(amountOut, amountInMax, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapTokensForExactETH(amountOut, amountInMax, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
    async swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline) {
        const self = this;
        assert.isNumberOrBigNumber('amountOut', amountOut);
        assert.isNumberOrBigNumber('amountInMax', amountInMax);
        assert.isArray('path', path);
        assert.isString('to', to);
        assert.isNumberOrBigNumber('deadline', deadline);
        const promizz = self._contract.methods.swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline);
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
    async swapTokensForExactTokensGas(amountOut, amountInMax, path, to, deadline) {
        const self = this;
        const gasAmount = await self._contract.methods.swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline).estimateGas();
        return gasAmount;
    }
    ;
}
UniswapV2Router02Contract.deployedBytecode = '60c060405234801561001057600080fd5b50604051620046e7380380620046e78339818101604052604081101561003557600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c614562620001856000398061015f5280610ce45280610d1f5280610e16528061103452806113be528061152452806118d352806119ae5280611a885280611b565280611c9c5280611d245280611f605280611fdb528061208f528061215b52806121f05280612264528061274752806129b15280612a075280612a3b5280612aaf5280612c3d5280612d805280612e08525080610ea45280610f7b52806110fa5280611133528061126e528061144c528061150252806116725280611be95280611d565280611eb0528061229652806124d452806126cc52806126f55280612725528061289252806129e55280612cd05280612e3a52806136c0528061370352806139dd5280613b535280613f445280613ffd52806140b052506145626000f3fe60806040526004361061014f5760003560e01c80638803dbee116100b6578063c45a01551161006f578063c45a015514610a10578063d06ca61f14610a25578063ded9382a14610ada578063e8e3370014610b4d578063f305d71914610bcd578063fb3bdb4114610c1357610188565b80638803dbee146107df578063ad5c464814610875578063ad615dec146108a6578063af2979eb146108dc578063b6f9de951461092f578063baa2abde146109b357610188565b80634a25d94a116101085780634a25d94a146104f05780635b0d5984146105865780635c11d795146105f9578063791ac9471461068f5780637ff36ab51461072557806385f8c259146107a957610188565b806302751cec1461018d578063054d50d4146101f957806318cbafe5146102415780631f00ca74146103275780632195995c146103dc57806338ed17391461045a57610188565b3661018857336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461018657fe5b005b600080fd5b34801561019957600080fd5b506101e0600480360360c08110156101b057600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135610c97565b6040805192835260208301919091528051918290030190f35b34801561020557600080fd5b5061022f6004803603606081101561021c57600080fd5b5080359060208101359060400135610db1565b60408051918252519081900360200190f35b34801561024d57600080fd5b506102d7600480360360a081101561026457600080fd5b813591602081013591810190606081016040820135600160201b81111561028a57600080fd5b82018360208201111561029c57600080fd5b803590602001918460208302840111600160201b831117156102bd57600080fd5b91935091506001600160a01b038135169060200135610dc6565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156103135781810151838201526020016102fb565b505050509050019250505060405180910390f35b34801561033357600080fd5b506102d76004803603604081101561034a57600080fd5b81359190810190604081016020820135600160201b81111561036b57600080fd5b82018360208201111561037d57600080fd5b803590602001918460208302840111600160201b8311171561039e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506110f3945050505050565b3480156103e857600080fd5b506101e0600480360361016081101561040057600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c08101359060e081013515159060ff6101008201351690610120810135906101400135611129565b34801561046657600080fd5b506102d7600480360360a081101561047d57600080fd5b813591602081013591810190606081016040820135600160201b8111156104a357600080fd5b8201836020820111156104b557600080fd5b803590602001918460208302840111600160201b831117156104d657600080fd5b91935091506001600160a01b038135169060200135611223565b3480156104fc57600080fd5b506102d7600480360360a081101561051357600080fd5b813591602081013591810190606081016040820135600160201b81111561053957600080fd5b82018360208201111561054b57600080fd5b803590602001918460208302840111600160201b8311171561056c57600080fd5b91935091506001600160a01b03813516906020013561136e565b34801561059257600080fd5b5061022f60048036036101408110156105aa57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e082013516906101008101359061012001356114fa565b34801561060557600080fd5b50610186600480360360a081101561061c57600080fd5b813591602081013591810190606081016040820135600160201b81111561064257600080fd5b82018360208201111561065457600080fd5b803590602001918460208302840111600160201b8311171561067557600080fd5b91935091506001600160a01b038135169060200135611608565b34801561069b57600080fd5b50610186600480360360a08110156106b257600080fd5b813591602081013591810190606081016040820135600160201b8111156106d857600080fd5b8201836020820111156106ea57600080fd5b803590602001918460208302840111600160201b8311171561070b57600080fd5b91935091506001600160a01b038135169060200135611885565b6102d76004803603608081101561073b57600080fd5b81359190810190604081016020820135600160201b81111561075c57600080fd5b82018360208201111561076e57600080fd5b803590602001918460208302840111600160201b8311171561078f57600080fd5b91935091506001600160a01b038135169060200135611b0e565b3480156107b557600080fd5b5061022f600480360360608110156107cc57600080fd5b5080359060208101359060400135611e58565b3480156107eb57600080fd5b506102d7600480360360a081101561080257600080fd5b813591602081013591810190606081016040820135600160201b81111561082857600080fd5b82018360208201111561083a57600080fd5b803590602001918460208302840111600160201b8311171561085b57600080fd5b91935091506001600160a01b038135169060200135611e65565b34801561088157600080fd5b5061088a611f5e565b604080516001600160a01b039092168252519081900360200190f35b3480156108b257600080fd5b5061022f600480360360608110156108c957600080fd5b5080359060208101359060400135611f82565b3480156108e857600080fd5b5061022f600480360360c08110156108ff57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135611f8f565b6101866004803603608081101561094557600080fd5b81359190810190604081016020820135600160201b81111561096657600080fd5b82018360208201111561097857600080fd5b803590602001918460208302840111600160201b8311171561099957600080fd5b91935091506001600160a01b038135169060200135612115565b3480156109bf57600080fd5b506101e0600480360360e08110156109d657600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359091169060c00135612486565b348015610a1c57600080fd5b5061088a6126ca565b348015610a3157600080fd5b506102d760048036036040811015610a4857600080fd5b81359190810190604081016020820135600160201b811115610a6957600080fd5b820183602082011115610a7b57600080fd5b803590602001918460208302840111600160201b83111715610a9c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506126ee945050505050565b348015610ae657600080fd5b506101e06004803603610140811015610afe57600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a08101359060c081013515159060ff60e0820135169061010081013590610120013561271b565b348015610b5957600080fd5b50610baf6004803603610100811015610b7157600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160808201359160a08101359160c0820135169060e0013561282f565b60408051938452602084019290925282820152519081900360600190f35b610baf600480360360c0811015610be357600080fd5b506001600160a01b0381358116916020810135916040820135916060810135916080820135169060a00135612962565b6102d760048036036080811015610c2957600080fd5b81359190810190604081016020820135600160201b811115610c4a57600080fd5b820183602082011115610c5c57600080fd5b803590602001918460208302840111600160201b83111715610c7d57600080fd5b91935091506001600160a01b038135169060200135612bf5565b6000808242811015610cde576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b610d0d897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a612486565b9093509150610d1d898685612f6e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610d8357600080fd5b505af1158015610d97573d6000803e3d6000fd5b50505050610da585836130d8565b50965096945050505050565b6000610dbe8484846131d0565b949350505050565b60608142811015610e0c576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686866000198101818110610e4657fe5b905060200201356001600160a01b03166001600160a01b031614610e9f576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b610efd7f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506132a892505050565b91508682600184510381518110610f1057fe5b60200260200101511015610f555760405162461bcd60e51b815260040180806020018281038252602b815260200180614493602b913960400191505060405180910390fd5b610ff386866000818110610f6557fe5b905060200201356001600160a01b031633610fd97f00000000000000000000000000000000000000000000000000000000000000008a8a6000818110610fa757fe5b905060200201356001600160a01b03168b8b6001818110610fc457fe5b905060200201356001600160a01b03166133f4565b85600081518110610fe657fe5b60200260200101516134b4565b61103282878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250613611915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d8360018551038151811061107157fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156110af57600080fd5b505af11580156110c3573d6000803e3d6000fd5b505050506110e884836001855103815181106110db57fe5b60200260200101516130d8565b509695505050505050565b60606111207f0000000000000000000000000000000000000000000000000000000000000000848461384e565b90505b92915050565b60008060006111597f00000000000000000000000000000000000000000000000000000000000000008f8f6133f4565b9050600087611168578c61116c565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156111e257600080fd5b505af11580156111f6573d6000803e3d6000fd5b505050506112098f8f8f8f8f8f8f612486565b809450819550505050509b509b9950505050505050505050565b60608142811015611269576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6112c77f0000000000000000000000000000000000000000000000000000000000000000898888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506132a892505050565b915086826001845103815181106112da57fe5b6020026020010151101561131f5760405162461bcd60e51b815260040180806020018281038252602b815260200180614493602b913960400191505060405180910390fd5b61132f86866000818110610f6557fe5b6110e882878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613611915050565b606081428110156113b4576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868660001981018181106113ee57fe5b905060200201356001600160a01b03166001600160a01b031614611447576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b6114a57f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061384e92505050565b915086826000815181106114b557fe5b60200260200101511115610f555760405162461bcd60e51b81526004018080602001828103825260278152602001806144036027913960400191505060405180910390fd5b6000806115487f00000000000000000000000000000000000000000000000000000000000000008d7f00000000000000000000000000000000000000000000000000000000000000006133f4565b9050600086611557578b61155b565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018b905260ff8916608482015260a4810188905260c4810187905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156115d157600080fd5b505af11580156115e5573d6000803e3d6000fd5b505050506115f78d8d8d8d8d8d611f8f565b9d9c50505050505050505050505050565b804281101561164c576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6116c18585600081811061165c57fe5b905060200201356001600160a01b0316336116bb7f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b905060200201356001600160a01b03168a8a6001818110610fc457fe5b8a6134b4565b6000858560001981018181106116d357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561172f57600080fd5b505afa158015611743573d6000803e3d6000fd5b505050506040513d602081101561175957600080fd5b5051604080516020888102828101820190935288825292935061179b929091899189918291850190849080828437600092019190915250889250613986915050565b8661183e82888860001981018181106117b057fe5b905060200201356001600160a01b03166001600160a01b03166370a08231886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561180c57600080fd5b505afa158015611820573d6000803e3d6000fd5b505050506040513d602081101561183657600080fd5b505190613c88565b101561187b5760405162461bcd60e51b815260040180806020018281038252602b815260200180614493602b913960400191505060405180910390fd5b5050505050505050565b80428110156118c9576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585600019810181811061190357fe5b905060200201356001600160a01b03166001600160a01b03161461195c576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b61196c8585600081811061165c57fe5b6119aa858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250309250613986915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611a1957600080fd5b505afa158015611a2d573d6000803e3d6000fd5b505050506040513d6020811015611a4357600080fd5b5051905086811015611a865760405162461bcd60e51b815260040180806020018281038252602b815260200180614493602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611aec57600080fd5b505af1158015611b00573d6000803e3d6000fd5b5050505061187b84826130d8565b60608142811015611b54576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110611b8b57fe5b905060200201356001600160a01b03166001600160a01b031614611be4576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b611c427f0000000000000000000000000000000000000000000000000000000000000000348888808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152506132a892505050565b91508682600184510381518110611c5557fe5b60200260200101511015611c9a5760405162461bcd60e51b815260040180806020018281038252602b815260200180614493602b913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110611cd657fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015611d0957600080fd5b505af1158015611d1d573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb611d827f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b84600081518110611d8f57fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611ddd57600080fd5b505af1158015611df1573d6000803e3d6000fd5b505050506040513d6020811015611e0757600080fd5b5051611e0f57fe5b611e4e82878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613611915050565b5095945050505050565b6000610dbe848484613cd8565b60608142811015611eab576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b611f097f00000000000000000000000000000000000000000000000000000000000000008988888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061384e92505050565b91508682600081518110611f1957fe5b6020026020010151111561131f5760405162461bcd60e51b81526004018080602001828103825260278152602001806144036027913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610dbe848484613db0565b60008142811015611fd5576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b612004887f00000000000000000000000000000000000000000000000000000000000000008989893089612486565b90508092505061208d88858a6001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561205c57600080fd5b505afa158015612070573d6000803e3d6000fd5b505050506040513d602081101561208657600080fd5b5051612f6e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156120f357600080fd5b505af1158015612107573d6000803e3d6000fd5b505050506110e884836130d8565b8042811015612159576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168585600081811061219057fe5b905060200201356001600160a01b03166001600160a01b0316146121e9576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b60003490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561224957600080fd5b505af115801561225d573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb6122c27f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561230957600080fd5b505af115801561231d573d6000803e3d6000fd5b505050506040513d602081101561233357600080fd5b505161233b57fe5b60008686600019810181811061234d57fe5b905060200201356001600160a01b03166001600160a01b03166370a08231866040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156123a957600080fd5b505afa1580156123bd573d6000803e3d6000fd5b505050506040513d60208110156123d357600080fd5b505160408051602089810282810182019093528982529293506124159290918a918a918291850190849080828437600092019190915250899250613986915050565b8761183e828989600019810181811061242a57fe5b905060200201356001600160a01b03166001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561180c57600080fd5b60008082428110156124cd576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b60006124fa7f00000000000000000000000000000000000000000000000000000000000000008c8c6133f4565b604080516323b872dd60e01b81523360048201526001600160a01b03831660248201819052604482018d9052915192935090916323b872dd916064808201926020929091908290030181600087803b15801561255557600080fd5b505af1158015612569573d6000803e3d6000fd5b505050506040513d602081101561257f57600080fd5b50506040805163226bf2d160e21b81526001600160a01b03888116600483015282516000938493928616926389afcb44926024808301939282900301818787803b1580156125cc57600080fd5b505af11580156125e0573d6000803e3d6000fd5b505050506040513d60408110156125f657600080fd5b508051602090910151909250905060006126108e8e613e56565b509050806001600160a01b03168e6001600160a01b031614612633578183612636565b82825b90975095508a87101561267a5760405162461bcd60e51b815260040180806020018281038252602681526020018061444a6026913960400191505060405180910390fd5b898610156126b95760405162461bcd60e51b81526004018080602001828103825260268152602001806143906026913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606111207f000000000000000000000000000000000000000000000000000000000000000084846132a8565b600080600061276b7f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006133f4565b905060008761277a578c61277e565b6000195b6040805163d505accf60e01b815233600482015230602482015260448101839052606481018c905260ff8a16608482015260a4810189905260c4810188905290519192506001600160a01b0384169163d505accf9160e48082019260009290919082900301818387803b1580156127f457600080fd5b505af1158015612808573d6000803e3d6000fd5b5050505061281a8e8e8e8e8e8e610c97565b909f909e509c50505050505050505050505050565b60008060008342811015612878576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6128868c8c8c8c8c8c613f34565b909450925060006128b87f00000000000000000000000000000000000000000000000000000000000000008e8e6133f4565b90506128c68d3383886134b4565b6128d28c3383876134b4565b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050602060405180830381600087803b15801561292157600080fd5b505af1158015612935573d6000803e3d6000fd5b505050506040513d602081101561294b57600080fd5b5051949d939c50939a509198505050505050505050565b600080600083428110156129ab576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b6129d98a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c613f34565b90945092506000612a2b7f00000000000000000000000000000000000000000000000000000000000000008c7f00000000000000000000000000000000000000000000000000000000000000006133f4565b9050612a398b3383886134b4565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b158015612a9457600080fd5b505af1158015612aa8573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb82866040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612b2457600080fd5b505af1158015612b38573d6000803e3d6000fd5b505050506040513d6020811015612b4e57600080fd5b5051612b5657fe5b806001600160a01b0316636a627842886040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050602060405180830381600087803b158015612ba557600080fd5b505af1158015612bb9573d6000803e3d6000fd5b505050506040513d6020811015612bcf57600080fd5b5051925034841015612be757612be7338534036130d8565b505096509650969350505050565b60608142811015612c3b576040805162461bcd60e51b8152602060048201526018602482015260008051602061450d833981519152604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031686866000818110612c7257fe5b905060200201356001600160a01b03166001600160a01b031614612ccb576040805162461bcd60e51b815260206004820152601d602482015260008051602061442a833981519152604482015290519081900360640190fd5b612d297f00000000000000000000000000000000000000000000000000000000000000008888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061384e92505050565b91503482600081518110612d3957fe5b60200260200101511115612d7e5760405162461bcd60e51b81526004018080602001828103825260278152602001806144036027913960400191505060405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0e30db083600081518110612dba57fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612ded57600080fd5b505af1158015612e01573d6000803e3d6000fd5b50505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb612e667f00000000000000000000000000000000000000000000000000000000000000008989600081811061169e57fe5b84600081518110612e7357fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015612ec157600080fd5b505af1158015612ed5573d6000803e3d6000fd5b505050506040513d6020811015612eeb57600080fd5b5051612ef357fe5b612f3282878780806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250899250613611915050565b81600081518110612f3f57fe5b6020026020010151341115611e4e57611e4e3383600081518110612f5f57fe5b602002602001015134036130d8565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310612feb5780518252601f199092019160209182019101612fcc565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461304d576040519150601f19603f3d011682016040523d82523d6000602084013e613052565b606091505b5091509150818015613080575080511580613080575080806020019051602081101561307d57600080fd5b50515b6130d1576040805162461bcd60e51b815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c454400604482015290519081900360640190fd5b5050505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b602083106131245780518252601f199092019160209182019101613105565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613186576040519150601f19603f3d011682016040523d82523d6000602084013e61318b565b606091505b50509050806131cb5760405162461bcd60e51b81526004018080602001828103825260238152602001806144706023913960400191505060405180910390fd5b505050565b60008084116132105760405162461bcd60e51b815260040180806020018281038252602b8152602001806144e2602b913960400191505060405180910390fd5b6000831180156132205750600082115b61325b5760405162461bcd60e51b81526004018080602001828103825260288152602001806143b66028913960400191505060405180910390fd5b6000613269856103e56141c5565b9050600061327782856141c5565b905060006132918361328b886103e86141c5565b90614228565b905080828161329c57fe5b04979650505050505050565b6060600282511015613301576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff8111801561331957600080fd5b50604051908082528060200260200182016040528015613343578160200160208202803683370190505b509050828160008151811061335457fe5b60200260200101818152505060005b60018351038110156133ec576000806133a68786858151811061338257fe5b602002602001015187866001018151811061339957fe5b6020026020010151614277565b915091506133c88484815181106133b957fe5b602002602001015183836131d0565b8484600101815181106133d757fe5b60209081029190910101525050600101613363565b509392505050565b60008060006134038585613e56565b604080516bffffffffffffffffffffffff19606094851b811660208084019190915293851b81166034830152825160288184030181526048830184528051908501206001600160f81b031960688401529a90941b9093166069840152607d8301989098527f96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f609d808401919091528851808403909101815260bd909201909752805196019590952095945050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17815292518251600094606094938a169392918291908083835b602083106135395780518252601f19909201916020918201910161351a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461359b576040519150601f19603f3d011682016040523d82523d6000602084013e6135a0565b606091505b50915091508180156135ce5750805115806135ce57508080602001905160208110156135cb57600080fd5b50515b6136095760405162461bcd60e51b81526004018080602001828103825260248152602001806144be6024913960400191505060405180910390fd5b505050505050565b60005b60018351038110156138485760008084838151811061362f57fe5b602002602001015185846001018151811061364657fe5b602002602001015191509150600061365e8383613e56565b509050600087856001018151811061367257fe5b60200260200101519050600080836001600160a01b0316866001600160a01b0316146136a0578260006136a4565b6000835b91509150600060028a510388106136bb57886136fc565b6136fc7f0000000000000000000000000000000000000000000000000000000000000000878c8b600201815181106136ef57fe5b60200260200101516133f4565b90506137297f000000000000000000000000000000000000000000000000000000000000000088886133f4565b6001600160a01b031663022c0d9f84848460006040519080825280601f01601f191660200182016040528015613766576020820181803683370190505b506040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156137ce5781810151838201526020016137b6565b50505050905090810190601f1680156137fb5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561381d57600080fd5b505af1158015613831573d6000803e3d6000fd5b505060019099019850613614975050505050505050565b50505050565b60606002825110156138a7576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a20494e56414c49445f504154480000604482015290519081900360640190fd5b815167ffffffffffffffff811180156138bf57600080fd5b506040519080825280602002602001820160405280156138e9578160200160208202803683370190505b50905082816001835103815181106138fd57fe5b60209081029190910101528151600019015b80156133ec5760008061393f8786600186038151811061392b57fe5b602002602001015187868151811061339957fe5b9150915061396184848151811061395257fe5b60200260200101518383613cd8565b84600185038151811061397057fe5b602090810291909101015250506000190161390f565b60005b60018351038110156131cb576000808483815181106139a457fe5b60200260200101518584600101815181106139bb57fe5b60200260200101519150915060006139d38383613e56565b5090506000613a037f000000000000000000000000000000000000000000000000000000000000000085856133f4565b9050600080600080846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015613a4457600080fd5b505afa158015613a58573d6000803e3d6000fd5b505050506040513d6060811015613a6e57600080fd5b5080516020909101516001600160701b0391821693501690506000806001600160a01b038a811690891614613aa4578284613aa7565b83835b91509150613afc828b6001600160a01b03166370a082318a6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561180c57600080fd5b9550613b098683836131d0565b945050505050600080856001600160a01b0316886001600160a01b031614613b3357826000613b37565b6000835b91509150600060028c51038a10613b4e578a613b82565b613b827f0000000000000000000000000000000000000000000000000000000000000000898e8d600201815181106136ef57fe5b604080516000808252602082019283905263022c0d9f60e01b835260248201878152604483018790526001600160a01b038086166064850152608060848501908152845160a48601819052969750908c169563022c0d9f958a958a958a9591949193919260c486019290918190849084905b83811015613c0c578181015183820152602001613bf4565b50505050905090810190601f168015613c395780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015613c5b57600080fd5b505af1158015613c6f573d6000803e3d6000fd5b50506001909b019a506139899950505050505050505050565b80820382811115611123576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6000808411613d185760405162461bcd60e51b815260040180806020018281038252602c81526020018061433f602c913960400191505060405180910390fd5b600083118015613d285750600082115b613d635760405162461bcd60e51b81526004018080602001828103825260288152602001806143b66028913960400191505060405180910390fd5b6000613d7b6103e8613d7586886141c5565b906141c5565b90506000613d8f6103e5613d758689613c88565b9050613da66001828481613d9f57fe5b0490614228565b9695505050505050565b6000808411613df05760405162461bcd60e51b81526004018080602001828103825260258152602001806143de6025913960400191505060405180910390fd5b600083118015613e005750600082115b613e3b5760405162461bcd60e51b81526004018080602001828103825260288152602001806143b66028913960400191505060405180910390fd5b82613e4685846141c5565b81613e4d57fe5b04949350505050565b600080826001600160a01b0316846001600160a01b03161415613eaa5760405162461bcd60e51b815260040180806020018281038252602581526020018061436b6025913960400191505060405180910390fd5b826001600160a01b0316846001600160a01b031610613eca578284613ecd565b83835b90925090506001600160a01b038216613f2d576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015290519081900360640190fd5b9250929050565b60008060006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a439058a8a6040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b158015613fc057600080fd5b505afa158015613fd4573d6000803e3d6000fd5b505050506040513d6020811015613fea57600080fd5b50516001600160a01b031614156140a8577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c9c6539689896040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050602060405180830381600087803b15801561407b57600080fd5b505af115801561408f573d6000803e3d6000fd5b505050506040513d60208110156140a557600080fd5b50505b6000806140d67f00000000000000000000000000000000000000000000000000000000000000008b8b614277565b915091508160001480156140e8575080155b156140f8578793508692506141b8565b6000614105898484613db0565b9050878111614158578581101561414d5760405162461bcd60e51b81526004018080602001828103825260268152602001806143906026913960400191505060405180910390fd5b8894509250826141b6565b6000614165898486613db0565b90508981111561417157fe5b878110156141b05760405162461bcd60e51b815260040180806020018281038252602681526020018061444a6026913960400191505060405180910390fd5b94508793505b505b5050965096945050505050565b60008115806141e0575050808202828282816141dd57fe5b04145b611123576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820182811015611123576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b60008060006142868585613e56565b5090506000806142978888886133f4565b6001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156142cf57600080fd5b505afa1580156142e3573d6000803e3d6000fd5b505050506040513d60608110156142f957600080fd5b5080516020909101516001600160701b0391821693501690506001600160a01b038781169084161461432c57808261432f565b81815b9099909850965050505050505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a204558434553534956455f494e5055545f414d4f554e54556e69737761705632526f757465723a20494e56414c49445f50415448000000556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e545472616e7366657248656c7065723a204554485f5452414e534645525f4641494c4544556e69737761705632526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54556e69737761705632526f757465723a20455850495245440000000000000000a264697066735822122037e6235ab5e315c62fc667007d202de0b3cdd96250765b3c31f79bfc6cbef68d64736f6c634300060c0033';
UniswapV2Router02Contract.contractName = 'UniswapV2Router02';
