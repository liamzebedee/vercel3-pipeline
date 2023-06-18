module.exports = {
    "TakeMarket": {
        "version": 1,
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "destination",
                        "type": "address"
                    }
                ],
                "name": "CacheUpdated",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "a",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getDependencies",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "addresses",
                        "type": "bytes32[]"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMessage",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "takeId",
                        "type": "uint256"
                    }
                ],
                "name": "getOrCreateTakeSharesContract",
                "outputs": [
                    {
                        "internalType": "contract ITakeMarketShares",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "takeId",
                        "type": "uint256"
                    }
                ],
                "name": "getTakeSharesContract",
                "outputs": [
                    {
                        "internalType": "contract ITakeMarketShares",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_a",
                        "type": "uint256"
                    }
                ],
                "name": "initialize",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isAddressCacheFresh",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "rebuildAddressCache",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    }
                ],
                "name": "setHello",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "address": "0xa7AdbF0538C022C3a1805f16b3a6eF74bDD58A37",
        "deployBlock": 161
    },
    "TakeMarketShares": {
        "version": 1,
        "abi": [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "name",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "destination",
                        "type": "address"
                    }
                ],
                "name": "CacheUpdated",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "getDependencies",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "addresses",
                        "type": "bytes32[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isAddressCacheFresh",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "rebuildAddressCache",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "address": "0x6166169180C5426902BE92e879feBEE0Ae280978",
        "deployBlock": 163
    },
    "Curve3Pool": {
        "abi": [
            {
                "name": "Transfer",
                "inputs": [
                    {
                        "name": "sender",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "receiver",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "Approval",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "spender",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "value",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "TokenExchange",
                "inputs": [
                    {
                        "name": "buyer",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "sold_id",
                        "type": "int128",
                        "indexed": false
                    },
                    {
                        "name": "tokens_sold",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "bought_id",
                        "type": "int128",
                        "indexed": false
                    },
                    {
                        "name": "tokens_bought",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "AddLiquidity",
                "inputs": [
                    {
                        "name": "provider",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "token_amounts",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "fees",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "invariant",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "token_supply",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "RemoveLiquidity",
                "inputs": [
                    {
                        "name": "provider",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "token_amounts",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "fees",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "token_supply",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "RemoveLiquidityOne",
                "inputs": [
                    {
                        "name": "provider",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "token_amount",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "coin_amount",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "token_supply",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "RemoveLiquidityImbalance",
                "inputs": [
                    {
                        "name": "provider",
                        "type": "address",
                        "indexed": true
                    },
                    {
                        "name": "token_amounts",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "fees",
                        "type": "uint256[3]",
                        "indexed": false
                    },
                    {
                        "name": "invariant",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "token_supply",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "CommitNewAdmin",
                "inputs": [
                    {
                        "name": "deadline",
                        "type": "uint256",
                        "indexed": true
                    },
                    {
                        "name": "admin",
                        "type": "address",
                        "indexed": true
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "NewAdmin",
                "inputs": [
                    {
                        "name": "admin",
                        "type": "address",
                        "indexed": true
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "CommitNewFee",
                "inputs": [
                    {
                        "name": "deadline",
                        "type": "uint256",
                        "indexed": true
                    },
                    {
                        "name": "fee",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "admin_fee",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "NewFee",
                "inputs": [
                    {
                        "name": "fee",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "admin_fee",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "RampA",
                "inputs": [
                    {
                        "name": "old_A",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "new_A",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "initial_time",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "future_time",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "name": "StopRampA",
                "inputs": [
                    {
                        "name": "A",
                        "type": "uint256",
                        "indexed": false
                    },
                    {
                        "name": "t",
                        "type": "uint256",
                        "indexed": false
                    }
                ],
                "anonymous": false,
                "type": "event"
            },
            {
                "stateMutability": "nonpayable",
                "type": "constructor",
                "inputs": [
                    {
                        "name": "_coins",
                        "type": "address[3]"
                    },
                    {
                        "name": "_A",
                        "type": "uint256"
                    },
                    {
                        "name": "_fee",
                        "type": "uint256"
                    },
                    {
                        "name": "_admin_fee",
                        "type": "uint256"
                    },
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "decimals",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 360
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "transfer",
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "gas": 78945
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "transferFrom",
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "gas": 116925
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "approve",
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "gas": 39181
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "get_balances",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[3]"
                    }
                ],
                "gas": 6834
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "A",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 10358
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "A_precise",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 10358
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "get_virtual_price",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 947474
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "calc_token_amount",
                "inputs": [
                    {
                        "name": "_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_is_deposit",
                        "type": "bool"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1879145
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "add_liquidity",
                "inputs": [
                    {
                        "name": "_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_min_mint_amount",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3098855
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "add_liquidity",
                "inputs": [
                    {
                        "name": "_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_min_mint_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "_receiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3098855
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "get_dy",
                "inputs": [
                    {
                        "name": "i",
                        "type": "int128"
                    },
                    {
                        "name": "j",
                        "type": "int128"
                    },
                    {
                        "name": "dx",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1294964
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "exchange",
                "inputs": [
                    {
                        "name": "i",
                        "type": "int128"
                    },
                    {
                        "name": "j",
                        "type": "int128"
                    },
                    {
                        "name": "_dx",
                        "type": "uint256"
                    },
                    {
                        "name": "_min_dy",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1453628
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "exchange",
                "inputs": [
                    {
                        "name": "i",
                        "type": "int128"
                    },
                    {
                        "name": "j",
                        "type": "int128"
                    },
                    {
                        "name": "_dx",
                        "type": "uint256"
                    },
                    {
                        "name": "_min_dy",
                        "type": "uint256"
                    },
                    {
                        "name": "_receiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1453628
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity",
                "inputs": [
                    {
                        "name": "_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "_min_amounts",
                        "type": "uint256[3]"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[3]"
                    }
                ],
                "gas": 292198
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity",
                "inputs": [
                    {
                        "name": "_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "_min_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_receiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256[3]"
                    }
                ],
                "gas": 292198
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity_imbalance",
                "inputs": [
                    {
                        "name": "_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_max_burn_amount",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3098883
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity_imbalance",
                "inputs": [
                    {
                        "name": "_amounts",
                        "type": "uint256[3]"
                    },
                    {
                        "name": "_max_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "_receiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3098883
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "calc_withdraw_one_coin",
                "inputs": [
                    {
                        "name": "_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "i",
                        "type": "int128"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1151
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity_one_coin",
                "inputs": [
                    {
                        "name": "_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "i",
                        "type": "int128"
                    },
                    {
                        "name": "_min_received",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1840077
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "remove_liquidity_one_coin",
                "inputs": [
                    {
                        "name": "_burn_amount",
                        "type": "uint256"
                    },
                    {
                        "name": "i",
                        "type": "int128"
                    },
                    {
                        "name": "_min_received",
                        "type": "uint256"
                    },
                    {
                        "name": "_receiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 1840077
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "ramp_A",
                "inputs": [
                    {
                        "name": "_future_A",
                        "type": "uint256"
                    },
                    {
                        "name": "_future_time",
                        "type": "uint256"
                    }
                ],
                "outputs": [],
                "gas": 158694
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "stop_ramp_A",
                "inputs": [],
                "outputs": [],
                "gas": 154917
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "commit_new_fee",
                "inputs": [
                    {
                        "name": "_new_fee",
                        "type": "uint256"
                    },
                    {
                        "name": "_new_admin_fee",
                        "type": "uint256"
                    }
                ],
                "outputs": [],
                "gas": 113448
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "apply_new_fee",
                "inputs": [],
                "outputs": [],
                "gas": 103771
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "revert_new_parameters",
                "inputs": [],
                "outputs": [],
                "gas": 23051
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "commit_transfer_ownership",
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "outputs": [],
                "gas": 78686
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "apply_transfer_ownership",
                "inputs": [],
                "outputs": [],
                "gas": 66954
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "revert_transfer_ownership",
                "inputs": [],
                "outputs": [],
                "gas": 23141
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "admin_balances",
                "inputs": [
                    {
                        "name": "i",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 7919
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "withdraw_admin_fees",
                "inputs": [],
                "outputs": [],
                "gas": 45837
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "donate_admin_fees",
                "inputs": [],
                "outputs": [],
                "gas": 122256
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "kill_me",
                "inputs": [],
                "outputs": [],
                "gas": 40454
            },
            {
                "stateMutability": "nonpayable",
                "type": "function",
                "name": "unkill_me",
                "inputs": [],
                "outputs": [],
                "gas": 23291
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "coins",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "gas": 3375
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "balances",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3405
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "fee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3390
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "admin_fee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3420
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "gas": 3450
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "initial_A",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3480
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "future_A",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3510
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "initial_A_time",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3540
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "future_A_time",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3570
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "admin_actions_deadline",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3600
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "transfer_ownership_deadline",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3630
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "future_fee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3660
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "future_admin_fee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3690
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "future_owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "gas": 3720
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "name",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "gas": 14039
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "symbol",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "gas": 11798
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "balanceOf",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 4076
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "allowance",
                "inputs": [
                    {
                        "name": "arg0",
                        "type": "address"
                    },
                    {
                        "name": "arg1",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 4372
            },
            {
                "stateMutability": "view",
                "type": "function",
                "name": "totalSupply",
                "inputs": [],
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "gas": 3870
            }
        ],
        "address": "0x1337BedC9D22ecbe766dF105c9623922A27963EC"
    },
    "WETH": {
        "abi": [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "guy",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Deposit",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "Withdrawal",
                "type": "event"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "guy",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "deposit",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "src",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "dst",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "wad",
                        "type": "uint256"
                    }
                ],
                "name": "withdraw",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "address": "0x4200000000000000000000000000000000000006"
    }
}
