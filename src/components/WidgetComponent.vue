<template>
    <div class="container">
        <div class="widget"
             :style="{
                  'width': widgetWidth + 'px',
                  'margin': '0 auto'
            }"
        >
            <div class="title_block">
                <div class="text">
                    Create a simple exchange
                </div>
                <svg width="83" height="24" viewBox="0 0 83 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9.85238C0 5.20792 0 2.88569 1.44285 1.44285C2.88569 0 5.20792 0 9.85237 0H72.6063C77.2508 0 79.573 0 81.0158 1.44285C82.4587 2.88569 82.4587 5.20792 82.4587 9.85237V14.1476C82.4587 18.7921 82.4587 21.1143 81.0158 22.5572C79.573 24 77.2508 24 72.6063 24H9.85237C5.20792 24 2.88569 24 1.44285 22.5572C0 21.1143 0 18.7921 0 14.1476V9.85238Z"
                          fill="#29282A"/>
                    <path d="M74.8791 6.98315L74.6459 13.2988H72.6005L72.3672 6.98315H74.8791ZM73.6232 16.3131C73.2763 16.3131 72.9788 16.1919 72.7306 15.9497C72.4854 15.7045 72.3643 15.407 72.3672 15.0571C72.3643 14.7162 72.4854 14.4246 72.7306 14.1824C72.9788 13.9402 73.2763 13.8191 73.6232 13.8191C73.9521 13.8191 74.2422 13.9402 74.4934 14.1824C74.7476 14.4246 74.8761 14.7162 74.8791 15.0571C74.8761 15.2904 74.8148 15.5027 74.6952 15.6941C74.5786 15.8824 74.4261 16.0335 74.2377 16.1471C74.0493 16.2577 73.8445 16.3131 73.6232 16.3131Z"
                          fill="#02C076"/>
                    <path d="M29.8943 9.85693C29.8703 9.55789 29.7582 9.32465 29.5578 9.15719C29.3605 8.98973 29.0599 8.906 28.6562 8.906C28.3991 8.906 28.1883 8.9374 28.0238 9.00019C27.8623 9.06 27.7427 9.14223 27.6649 9.2469C27.5872 9.35156 27.5468 9.47117 27.5438 9.60574C27.5379 9.71638 27.5573 9.81656 27.6021 9.90627C27.65 9.99299 27.7248 10.0722 27.8264 10.144C27.9281 10.2128 28.0582 10.2756 28.2167 10.3324C28.3752 10.3892 28.5635 10.44 28.7818 10.4849L29.5354 10.6464C30.0438 10.754 30.4789 10.8961 30.8407 11.0725C31.2025 11.2489 31.4986 11.4568 31.7288 11.696C31.9591 11.9322 32.128 12.1984 32.2357 12.4944C32.3463 12.7905 32.4032 13.1134 32.4061 13.4633C32.4032 14.0673 32.2521 14.5787 31.9531 14.9973C31.6541 15.416 31.2265 15.7345 30.6702 15.9528C30.117 16.1711 29.4517 16.2802 28.6742 16.2802C27.8758 16.2802 27.179 16.1621 26.5839 15.9258C25.9918 15.6896 25.5313 15.3263 25.2024 14.8359C24.8764 14.3425 24.712 13.7115 24.709 12.943H27.0773C27.0923 13.2241 27.1626 13.4603 27.2882 13.6517C27.4138 13.8431 27.5902 13.9881 27.8175 14.0868C28.0477 14.1855 28.3213 14.2348 28.6383 14.2348C28.9044 14.2348 29.1272 14.2019 29.3066 14.1361C29.4861 14.0703 29.6221 13.9791 29.7148 13.8625C29.8075 13.7459 29.8554 13.6128 29.8584 13.4633C29.8554 13.3227 29.809 13.2001 29.7193 13.0955C29.6326 12.9878 29.4891 12.8921 29.2887 12.8084C29.0884 12.7217 28.8177 12.6409 28.4768 12.5662L27.5618 12.3688C26.7484 12.1924 26.107 11.8978 25.6375 11.4852C25.171 11.0695 24.9392 10.5028 24.9422 9.78516C24.9392 9.20204 25.0947 8.69219 25.4087 8.2556C25.7257 7.81601 26.1638 7.47362 26.723 7.22841C27.2852 6.9832 27.9296 6.8606 28.6562 6.8606C29.3979 6.8606 30.0393 6.9847 30.5805 7.23289C31.1218 7.48109 31.5389 7.83097 31.832 8.28251C32.128 8.73106 32.2776 9.25587 32.2806 9.85693H29.8943Z"
                          fill="white"/>
                    <path d="M33.9792 16.1726L32.2568 9.28278H34.7328L35.5222 13.4812H35.5761L36.4552 9.28278H38.8595L39.7745 13.4454H39.8283L40.5819 9.28278H43.0579L41.3355 16.1726H38.6621L37.6932 12.4765H37.6215L36.6526 16.1726H33.9792Z"
                          fill="white"/>
                    <path d="M45.0997 16.2802C44.6602 16.2802 44.2714 16.2084 43.9335 16.0649C43.5986 15.9184 43.3354 15.6971 43.1441 15.401C42.9527 15.105 42.857 14.7282 42.857 14.2707C42.857 13.8939 42.9213 13.5724 43.0499 13.3063C43.1784 13.0372 43.3579 12.8174 43.5881 12.6469C43.8184 12.4765 44.086 12.3464 44.391 12.2567C44.699 12.167 45.031 12.1087 45.3868 12.0818C45.7726 12.0518 46.0821 12.016 46.3153 11.9741C46.5516 11.9292 46.722 11.8679 46.8267 11.7902C46.9313 11.7095 46.9837 11.6033 46.9837 11.4717V11.4538C46.9837 11.2744 46.9149 11.1368 46.7773 11.0411C46.6398 10.9454 46.4633 10.8976 46.248 10.8976C46.0118 10.8976 45.8189 10.9499 45.6694 11.0546C45.5229 11.1562 45.4347 11.3132 45.4048 11.5255H43.1261C43.156 11.1069 43.2891 10.7211 43.5253 10.3683C43.7645 10.0124 44.1129 9.72834 44.5704 9.51603C45.028 9.30072 45.5991 9.19307 46.2839 9.19307C46.7773 9.19307 47.2199 9.25138 47.6116 9.36801C48.0034 9.48164 48.3368 9.64162 48.6119 9.84796C48.887 10.0513 49.0963 10.2905 49.2399 10.5656C49.3864 10.8378 49.4597 11.1338 49.4597 11.4538V16.1726H47.1451V15.2037H47.0913C46.9538 15.4608 46.7863 15.6687 46.5889 15.8272C46.3946 15.9857 46.1718 16.1008 45.9206 16.1726C45.6724 16.2443 45.3988 16.2802 45.0997 16.2802ZM45.9071 14.7192C46.0955 14.7192 46.272 14.6804 46.4364 14.6026C46.6039 14.5249 46.7399 14.4127 46.8446 14.2662C46.9493 14.1197 47.0016 13.9417 47.0016 13.7324V13.1583C46.9358 13.1852 46.8655 13.2106 46.7908 13.2345C46.719 13.2585 46.6413 13.2809 46.5575 13.3018C46.4768 13.3227 46.3901 13.3422 46.2974 13.3601C46.2077 13.3781 46.1135 13.3945 46.0148 13.4095C45.8234 13.4394 45.6664 13.4887 45.5438 13.5575C45.4242 13.6233 45.3345 13.7055 45.2747 13.8042C45.2179 13.8999 45.1895 14.0075 45.1895 14.1272C45.1895 14.3185 45.2567 14.4651 45.3913 14.5667C45.5259 14.6684 45.6978 14.7192 45.9071 14.7192Z"
                          fill="white"/>
                    <path d="M50.0694 18.7562V9.28278H52.5274V10.4849H52.5813C52.671 10.2517 52.8025 10.0378 52.976 9.84347C53.1494 9.64611 53.3647 9.48912 53.6219 9.37249C53.8791 9.25288 54.1781 9.19307 54.519 9.19307C54.9735 9.19307 55.4056 9.31418 55.8153 9.5564C56.228 9.79862 56.5629 10.1799 56.8201 10.7002C57.0802 11.2205 57.2103 11.8963 57.2103 12.7277C57.2103 13.5231 57.0862 14.1825 56.838 14.7058C56.5928 15.2291 56.2639 15.6193 55.8512 15.8765C55.4415 16.1337 54.9915 16.2623 54.5011 16.2623C54.1781 16.2623 53.8895 16.2099 53.6354 16.1053C53.3842 15.9976 53.1689 15.8526 52.9894 15.6702C52.813 15.4848 52.677 15.2754 52.5813 15.0422H52.5454V18.7562H50.0694ZM52.4916 12.7277C52.4916 13.0626 52.5349 13.3527 52.6216 13.5979C52.7113 13.8401 52.8369 14.0285 52.9984 14.163C53.1629 14.2946 53.3588 14.3604 53.586 14.3604C53.8133 14.3604 54.0062 14.2961 54.1647 14.1675C54.3261 14.0359 54.4487 13.849 54.5325 13.6068C54.6192 13.3616 54.6625 13.0686 54.6625 12.7277C54.6625 12.3868 54.6192 12.0952 54.5325 11.853C54.4487 11.6078 54.3261 11.4209 54.1647 11.2923C54.0062 11.1607 53.8133 11.0949 53.586 11.0949C53.3588 11.0949 53.1629 11.1607 52.9984 11.2923C52.8369 11.4209 52.7113 11.6078 52.6216 11.853C52.5349 12.0952 52.4916 12.3868 52.4916 12.7277Z"
                          fill="white"/>
                    <path d="M62.1767 13.1583V9.28278H64.6528V16.1726H62.3023V14.8628H62.2306C62.0811 15.3024 61.8194 15.6463 61.4456 15.8944C61.0718 16.1397 60.6277 16.2623 60.1134 16.2623C59.632 16.2623 59.2103 16.1516 58.8485 15.9303C58.4896 15.709 58.21 15.404 58.0097 15.0153C57.8123 14.6265 57.7122 14.181 57.7092 13.6786V9.28278H60.1852V13.1583C60.1882 13.4992 60.2749 13.7668 60.4453 13.9612C60.6188 14.1556 60.861 14.2527 61.172 14.2527C61.3783 14.2527 61.5562 14.2094 61.7058 14.1227C61.8583 14.033 61.9749 13.9074 62.0556 13.7459C62.1394 13.5814 62.1797 13.3855 62.1767 13.1583Z"
                          fill="white"/>
                    <path d="M65.2359 16.1726V14.809L68.2502 11.2026V11.1667H65.3435V9.28278H71.1747V10.7899L68.4296 14.2527V14.2886H71.2824V16.1726H65.2359Z"
                          fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.7365 3.89289C16.2055 3.60865 16.8064 3.93869 16.818 4.48697L16.8887 7.81014L20.3317 8.40366C20.8721 8.49682 21.109 9.14008 20.7581 9.56153L18.4671 12.3132L20.2069 13.7111C20.6344 14.0546 20.5298 14.7321 20.0186 14.9306L16.8745 16.1512L17.2599 18.0942C17.3666 18.6322 16.851 19.0839 16.3318 18.9073L14.0891 18.1447C11.5312 19.3869 8.46665 18.7428 6.61882 16.6352C9.35575 17.4254 11.5494 16.5994 12.5906 15.7457C12.8442 15.5378 12.8812 15.1638 12.6733 14.9102C12.4654 14.6567 12.0914 14.6197 11.8378 14.8275C10.9735 15.5362 8.6128 16.4678 5.55692 14.9484C4.34391 12.1126 5.37112 8.74359 8.08485 7.09886C9.27894 6.37515 10.6179 6.0954 11.9094 6.21242L15.7365 3.89289ZM10.648 11.0989C10.0872 11.4388 9.3571 11.2597 9.01722 10.6989C8.67734 10.1381 8.85642 9.40799 9.4172 9.06811C9.97799 8.72823 10.7081 8.90731 11.048 9.4681C11.3879 10.0289 11.2088 10.759 10.648 11.0989Z"
                          fill="#02C076"/>
                </svg>
            </div>
            <div v-if="coinList.length" class="calculate_form">
                <div class="fixed-rate">
                    <div class="fixed-rate_block">
                        <div
                                v-if="exchangeStore.transactionMode !== 'floating'"
                                @click="changeMode"
                                class="fixed-rate_text"
                        >
                            <div class="fixed-rate_text-container"
                                 @mouseover="rateLock = true"
                                 @mouseleave="rateLock = false">
                                <fixed-rate-unlock-icon v-if="rateLock"/>
                                <FixedRateIcon v-else/>
                                Fixed rate
                            </div>

                        </div>
                        <div
                                v-if="exchangeStore.transactionMode === 'floating'"
                                @click="changeMode"
                                class="fixed-rate_text "
                        >
                            <div class="fixed-rate_text-container"
                                 @mouseover="rateLock = true"
                                 @mouseleave="rateLock = false">
                                <FixedRateIcon v-if="rateLock"/>
                                <fixed-rate-unlock-icon v-else/>
                                Floating rate
                            </div>

                        </div>
                    </div>

                </div>
                <input-select
                        type="number"
                        @update:value="exchangeStore.setYouSendAmount($event)"
                        @update:select="exchangeStore.setYouSendCoinName($event)"
                        @update:network="exchangeStore.setYouSendNetwork($event)"
                        label="You send"
                        class="you-send"
                        :value="exchangeStore.youSendAmount"
                        :selectedNetwork="exchangeStore.youSendNetwork"
                        :selectData="coinList"
                        :defaultSelect="exchangeStore.youSendCoinName"
                        :selectSchema="{title:'shotName',value:'name',image:'image'}"
                        :error="!isValidYouSend"
                        :is-number="true"
                >
                </input-select>
                <div class="minimum-amount" :class="{'minimum-amount_error':!isValidYouSend}">
                    <div>
                        Amount range
                        <span>{{ minAmount.toFixed(5) }} - {{ maxAmount.toFixed(5) }} {{
                            exchangeStore.youSendCoinName
                            }}</span>
                    </div>
                </div>
                <div class="swap-coins">
                    <swap-coins @click="swapCoins"/>
                </div>
                <input-select
                        type="text"
                        :waiting="youGetFieldWaiting"
                        :value="exchangeStore.getYouGetAmount"
                        @update:select="exchangeStore.setYouGetCoinName($event)"
                        @update:network="exchangeStore.setYouGetNetwork($event)"
                        :selectedNetwork="exchangeStore.youGetNetwork"
                        label="You get"
                        class="you-get" readonly
                        :selectData="coinList"
                        :defaultSelect="exchangeStore.youGetCoinName"
                        :selectSchema="{title:'shotName',value:'name',image:'image'}">
                </input-select>
                <div class="exchange-rate" v-if="currentExchangeRates">
                    1 {{ exchangeStore.youSendCoinName }} <span> = </span>{{ currentExchangeRates }}
                    {{ exchangeStore.youGetCoinName }}
                </div>
                <div
                        v-if="isValidYouSend"
                        @click="exchangePath"
                        class="main_button"
                >
                    <span class="main_button-text">
                      Exchange now
                    </span>
                </div>
                <div v-if="!isValidYouSend"
                     @click="exchangePath"
                     class="main_button main_button-disabled"
                >
                    <span class="main_button-text">
                      Exchange now
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useExchangeStore} from "../store/exchange.js";
import FixedRateUnlockIcon from "../assets/img/icons/FixedRateUnlockIcon.vue";
import FixedRateIcon from "../assets/img/icons/FixedRateIcon.vue";
import CoinsService from "../services/coins.service.js";
import Cookies from 'js-cookie';
import {storeToRefs} from "pinia";
import InputSelect from "./InputSelect.vue";
import {API_URL} from "../store/config.js";
import SwapCoins from "../assets/img/icons/swapCoins.vue";

export default {
    name: 'WidgetComponent',
    components: {SwapCoins, InputSelect, FixedRateIcon, FixedRateUnlockIcon},
    setup() {
        const exchangeStore = useExchangeStore();

        const {youSendAmount} = storeToRefs(exchangeStore)
        const {youSendCoinName} = storeToRefs(exchangeStore)
        const {youGetCoinName} = storeToRefs(exchangeStore)

        return {
            exchangeStore,
            youSendAmount,
            youSendCoinName,
            youGetCoinName
        };
    },
    data() {
        return {
            coinFrom: '',
            widgetWidth: 0,
            url: API_URL,
            minAmount: 0,
            maxAmount: 0,
            backgroundColor: '',
            rateLock: false,
            youGetFieldWaiting: false,
            exchangeQueryTimer: '',
            currentExchangeRates: 0,
        }
    },
    async created() {

        const exchangeStore = useExchangeStore();
        const res = await CoinsService.getCoinsList();

        exchangeStore.coinList = res.data.result;
        this.coinsLength = exchangeStore.coinList.length

        console.log(this.coinsLength);

        await new Promise((resolve) => {
            const intervalId = setInterval(() => {
                if (exchangeStore.youSendNetwork && exchangeStore.youGetNetwork) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 100);
        });
        this.exchangeQuery();
        this.exchangeStore.isPreload = false;
    },
    watch: {
        transactionMode() {
            this.exchangeQuery();
        },
        youSendAmount() {
            this.exchangeQuery();
        },
        youSendCoinName() {
            this.exchangeQuery();
        },
        youGetCoinName() {
            this.exchangeQuery();
        }
    },
    computed: {
        coinList() {
            const exchangeStore = useExchangeStore();

            return exchangeStore.coinList;
        },
        isValidYouSend() {
            return !isNaN(parseFloat(this.exchangeStore.youSendAmount)) && parseFloat(this.exchangeStore.youSendAmount) >= parseFloat(this.minAmount) && parseFloat(this.exchangeStore.youSendAmount) <= parseFloat(this.maxAmount);
        },
    },
    mounted() {
        const searchParams = new URLSearchParams(window.location.search);
        this.coinFrom = searchParams.get('coin');
        this.widgetWidth = searchParams.get('width');
    },
    methods: {
        symbolEncrypt(el) {
            return el.replace('+', '%2B')
        },
        swapCoins() {
            this.youGetFieldWaiting = true;
            this.exchangeStore.swapFields();
        },
        exchangeQuery() {
            clearTimeout(this.exchangeQueryTimer);
            let query = '?from=' + this.symbolEncrypt(this.exchangeStore.youSendCoinName) + '&to=' + this.symbolEncrypt(this.exchangeStore.youGetCoinName) + '&amount=' + this
                .exchangeStore.youSendAmount + '&fromNetwork=' + this.exchangeStore.youSendNetwork + '&toNetwork=' + this.exchangeStore.youGetNetwork + '&mode=' + this.exchangeStore.transactionMode + (Cookies.get('ref') ? '&partnerId=' + Cookies.get('ref') : '');

            if (this.coinList.length) {
                this.exchangeQueryTimer = setTimeout(() => {
                    this.youGetFieldWaiting = true;

                    CoinsService.getCoinsRate(query).then((res) => {
                        console.log(res.data.result, 'getCoinsRate');
                        if (res.data.result) {
                            this.exchangeStore.setYouGetAmount(res.data.result.result);
                            this.currentExchangeRates = res.data.result.rate;

                            const coin = '?coin=' + this.exchangeStore.youSendCoinName
                            if (res.data.result.maxAmount === 0) {
                                CoinsService.getLimits(coin).then((res) => {
                                    console.log(res.data.result, 'getLimits');
                                    this.minAmount = res.data.result.minAmount;
                                    this.maxAmount = res.data.result.maxAmount;
                                })
                            } else {
                                this.minAmount = res.data.result.minAmount;
                                this.maxAmount = res.data.result.maxAmount;
                            }
                            this.youGetFieldWaiting = false;
                        }
                    })
                }, 500);
            }
        },
        changeMode() {
            if (this.exchangeStore.transactionMode === 'floating') {
                this.youGetFieldWaiting = true;
                this.exchangeStore.setTransactionMode('fix');
                this.exchangeQuery();
            } else {
                this.youGetFieldWaiting = true;
                this.exchangeStore.setTransactionMode('floating');
                this.exchangeQuery();
            }
        },
    }
}
</script>

<style lang="scss">
.widget {
  //max-width: 318px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;

  .title_block {
    padding: 16px 20px;
    box-sizing: border-box;
    background: #02C076;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .text {
      font-weight: 900;
      font-size: 28px;
      line-height: 30px;
      letter-spacing: -0.02em;
      color: #29282A;
    }
  }

  .calculate_form {
    background: #29282A;
    padding: 8px 16px 16px;
    box-sizing: border-box;

    .fixed-rate {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 0 8px;
      box-sizing: border-box;
      align-items: center;
      margin-bottom: 8px;

      &_text {
        &-container {
          font-weight: 700;
          font-size: 14px;
          line-height: 24px;
          display: flex;
          align-items: center;
          text-align: center;
          gap: 6px;
          color: #02C076;

          &:hover {
            cursor: pointer;
            color: #01AD6A;

            svg {
              path {
                fill: #01AD6A;
              }
            }
          }
        }

      }

      .title {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;

        @media (max-width: 1079px) {
          font-size: 16px;
        }
      }

      &_floating {
        color: rgba(255, 255, 255, 0.38);

        svg {
          path {
            fill: rgba(255, 255, 255, 0.38);
          }
        }
      }

      &_block {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;

        .info_icon {
          position: relative;
          display: grid;
          place-items: center;

          svg {
            path {
              transition: all .3s ease-in-out;
            }

            &:hover {
              cursor: pointer;

              path {
                fill: #02c076;
                fill-opacity: 1;
              }
            }
          }

          &--text {
            position: absolute;
            z-index: 999;
            top: calc(100% + 8px);
            left: -100px;
            width: 244px;
            background: #363537;
            box-shadow: 0 4px 12px rgba(27, 26, 28, 0.64);
            border-radius: 8px;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            color: #FFFFFF;
            padding: 12px;
            box-sizing: border-box;

            @media (max-width: 1079px) {
              right: -22px;
              left: unset;
            }
          }
        }
      }
    }

    .swap-coins {
      position: relative;
      height: 1px;
      width: 100%;

      svg {
        position: absolute;
        top: -32px;
        right: 6px;
        transition: all .3s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: rotate(180deg);

          path {
            fill: #01AD6A;
          }
        }
      }
    }

    .main_button {
      width: 100%;
      background: #02C076;
      border-radius: 8px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #29282A;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 14px;
      box-sizing: border-box;
      transition: all .3s ease-in-out;
      cursor: pointer;

      &:hover {
        background: #01AD6A;
      }

      &-text {
        position: relative;
        z-index: 4;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #29282A;
        user-select: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }

      &--icon {
        max-width: 64px;
      }

      &-disabled {
        background: rgba(255, 255, 255, 0.04);
        cursor: default;

        .main_button-text {
          color: rgba(255, 255, 255, 0.38);
        }

        &:hover {
          background: rgba(255, 255, 255, 0.04);
        }
      }

      &-transparent {
        background: none;

        .main_button-text {
          color: #02c076;
        }

        &:hover {
          background: #363537;
        }
      }
    }

    .minimum-amount {
      margin-top: 8px;
      padding-left: 12px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: rgba(255, 255, 255, 0.38);
      margin-bottom: 15px;

      span {
        color: white;
      }

      &_error {
        color: #ff783e;
      }
    }

    .exchange-rate {
      margin-top: 8px;
      padding-left: 12px;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: white;
      margin-bottom: 16px;

      span {
        color: rgba(255, 255, 255, 0.38);
      }
    }
  }
}
</style>
