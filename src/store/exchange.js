import {defineStore} from "pinia";

export const useExchangeStore = defineStore("steps", {
    state: () => ({
        coinList: [],
        youSendAmount: 0.1,
        youGetAmount: null,
        youSendCoinName: 'BTC',
        youSendCoinNameFull: '',
        youGetCoinName: 'BNB',
        youGetCoinNameFull: '',
        youSendNetwork: '',
        youGetNetwork: '',
        transactionMode: 'floating',
    }),
    getters: {
        getYouGetAmount: (state) => {
            if (state.youGetAmount) {
                return state.transactionMode === 'floating' ? '~ ' + state.youGetAmount : state.youGetAmount;
            } else {
                return '';
            }
        },
    },
    actions: {
        setIsPreloader(n) {
            this.isPreload = n;
        },
        setYouSendCoinName(n) {
            this.youSendCoinName = n;
        },
        setYouGetCoinName(n) {
            this.youGetCoinName = n;
        },
        setYouSendCoinNameFull(n) {
            this.youSendCoinNameFull = n;
        },
        setYouGetCoinNameFull(n) {
            this.youGetCoinNameFull = n;
        },
        setYouSendNetwork(n) {
            this.youSendNetwork = n;
        },
        setYouGetNetwork(n) {
            this.youGetNetwork = n;
        },
        setYouSendAmount(n) {
            this.youSendAmount = n;
        },
        setYouGetAmount(n) {
            this.youGetAmount = n;
        },
        setTransactionMode(n) {
            this.transactionMode = n;
        },
        swapFields() {
            const tempCoin = this.youSendCoinName;
            const tempNetwork = this.youSendNetwork;
            this.setYouSendCoinName(this.youGetCoinName);
            this.setYouSendNetwork(this.youGetNetwork);
            this.setYouGetCoinName(tempCoin);
            this.setYouGetNetwork(tempNetwork);
            this.setYouSendAmount(this.youGetAmount);
        }
    }
});
