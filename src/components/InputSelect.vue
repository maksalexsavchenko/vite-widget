<template>
<div
    class="input-select"
    :class="{'has-select': selectData.length, 'error':error, 'input-select_opened': showSelectList}"
>
  <div class="text-input">
    <div v-if="waiting" class="loader">
      <loader-animation  />
    </div>
    <input type="text"
           :value="value"
           :placeholder="placeholder"
           @blur="$emit('blur')"
           @input="emit($event.target.value)"
           :readonly="readonly"
           class="input-wrapper"
           :class="{'has-label':label, 'focus': !!value}"
           @keyup="onlyNumbers"
    />
    <div v-if="isCursUpdate" class="icon" :style="{position: 'absolute', left: (4 + value.length) + 'ch'}">
      <curs-down-icon v-if="oldValue > newValue" />
      <curs-up-icon v-if="oldValue < newValue" />
    </div>
    <span class="input-label">{{ label }}</span>
    <div class="error-icon">
      <div class="error-tooltip" v-if="errorTooltip">{{ errorTooltip }}</div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
            fill="#FF783E"/>
      </svg>
    </div>
  </div>
  <div class="select-input" :class="{'open':showSelectList}" v-if="selectData.length"
       @click="dropSelectList()">
    <div class="select-input_block">
      <img v-if="selectedCoinData" class="selected-item_img" :src="selectedCoinData.image" alt="">
      <div class="select-input_coin">
        <div  class="select-input_name">{{ formatSelectedCoin(selectValue || defaultSelect) }}</div>
        <span class="select-input_network">{{ formatSelectNetwork(selectedNetwork) }}</span>
      </div>
    </div>
    <div class="select-input_arrow">
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7.3748L0 1.3748L1.075 0.299805L6 5.2498L10.925 0.324804L12 1.3998L6 7.3748Z" fill="white" fill-opacity="0.38"/>
      </svg>
    </div>
  </div>
  <div class="items" ref="items" v-if="showSelectList">
    <div class="items-header">
      <div class="text">
        {{ label }} coin
      </div>
      <close-button @click="dropSelectListClose" />
    </div>
    <div class="input-search_block">
      <div class="input-search">
        <search-icon class="input-search_icon"/>
        <input
            ref="search"
            v-model="search"
            type="text"
            :placeholder="'Search from' + exchangeStore.coinList.length + 'coins'"
        />
      </div>
    </div>
    <div class="items--list">
      <div class="coins-list_header coins-list_header-selected">
        Selected
      </div>
      <div
          v-if="selectedCoinData"
          class="coins-list_item coins-list_selected"
          @click="networksHandler(index, selectedCoinData)"
      >
        <div
            class="coins-list_item-block"
            :class="{'coins-list_item coins-list_selected-active': currentIndex === index}"
        >
          <div
              class="coins-list_item-block-info"
          >
            <div class="image image-active"><img :src="selectedCoinData.image" alt=""></div>
            <div class="info">
              <div class="coin-name">
                {{ selectedCoinData.shotName }}
                <span>
                    {{ selectedCoinData.name }}
                  </span>
              </div>
              <div class="networks">
                <div v-for="(network, index) in selectedCoinData.network" :key="index" class="item"
                     :class=" {'item-active': network.shotName === selectedNetwork}"
                >
                  {{ network.shotName }}
                </div>
              </div>
            </div>
          </div>
          <div class="arrow">
            <dropdown-arrow/>
          </div>
        </div>
        <div v-if="currentIndex === index">
          <div

              v-for="(network, index) in selectedCoinData.network" :key="index"
              class="coins-list_item--networks"
              :class=" {'coins-list_item--networks-active': network.shotName === selectedNetwork}"
          >
            <div @click="selectNetwork(network)">
              {{ network.name }} <br>
              <span>{{ network.shotName }}</span>
            </div>
            <selected-network-icon v-if="network.shotName === selectedNetwork" />
          </div>
        </div>

      </div>
      <div class="coins-list">
        <div class="coins-list_header">
          All coins
        </div>
        <div
            v-for="(item, index) in computedSelectData"
            :key="index"
            class="coins-list_item"
            @click="networksHandler(index, item)"
        >
          <div
              class="coins-list_item-block"
              :class="{'coins-list_item-block_active' : currentIndex === index}"
          >
            <div
                class="coins-list_item-block-info"
            >
              <div class="image"><img :src="item.image" alt=""></div>
              <div class="info">
                <div class="coin-name">
                  {{ item.shotName }}
                  <span>
                    {{ item.name }}
                  </span>
                </div>
                <div class="networks">
                  <div v-for="(network, index) in item.network" :key="index" class="item">
                    {{ network.shotName }}
                  </div>
                </div>
              </div>
            </div>
            <div class="arrow">
              <dropdown-arrow/>
            </div>
          </div>
          <div v-if="currentIndex === index">
            <div  v-for="(network, index) in item.network" :key="index"
                  class="coins-list_item--networks">
              <div class="" @click="selectNetwork(network)">
                {{ network.name }} <br>
                <span>{{ network.shotName }}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import DropdownArrow from "../assets/img/icons/dropdownArrow.vue";
import SelectedNetworkIcon from "../assets/img/icons/selectedNetworkIcon.vue";
import SearchIcon from "../assets/img/icons/searchIcon.vue";
import CloseButton from "../assets/img/icons/closeButton.vue";
import LoaderAnimation from "../assets/img/icons/loaderAnimation.vue";
import CursUpIcon from "../assets/img/icons/cursUpIcon.vue";
import CursDownIcon from "../assets/img/icons/cursDownIcon.vue";
import {useExchangeStore} from "../store/exchange.js";

export default {
  name: 'InputSelect',
  components: {CursDownIcon, CursUpIcon, LoaderAnimation, CloseButton, SearchIcon, SelectedNetworkIcon, DropdownArrow},
  setup() {
      const exchangeStore = useExchangeStore();

      return {
          exchangeStore,
      };
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    selectData: {
      type: Array,
      default: null
    },
    defaultSelect: {
      type: [Number, String, Boolean],
      default: null
    },
    selectValue: {
      type: [String, Number, Boolean],
      default: null
    },
    value: {
      type: [String, Number]
    },
    waiting: {
      type: Boolean,
      default: false
    },
    error: {
      type: [Boolean, Number],
      default: false
    },
    errorTooltip: {
      type: String,
      default: ''
    },
    isNumber: {
      type: Boolean,
      default: false,
      required: false,
    },
    selectedNetwork: {
      type: String,
      default: null
    },
    oldValue: {
      type: Number,
      default: null
    },
    newValue: {
      type: Number,
      default: null
    },
    isCursUpdate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSelectList: false,
      search: '',
      currentIndex: false,
      currentItem: null,
      defaultNetwork: null,
      selectedCoin: this.defaultSelect,
      coinsLength: 100,
      selectedCoinData: null
    }
  },
  watch: {
    defaultSelect(val) {
      this.selectedCoinData = this.selectData.find((item) => {

        return item.shotName === val
      })
    }
  },
  computed: {
    computedSelectData() {
      if (this.search) {
        return this.selectData.filter(item => {
          if (item.name.toLowerCase().indexOf(this.search.toLowerCase()) === 0 || item.shotName
              .toLowerCase().indexOf(this.search.toLowerCase()) === 0) return item;
        });
      } else {
        return this.selectData.filter((item, index) => index < this.coinsLength && item.shotName !== this.selectedCoinData.shotName);
      }
    },

  },
  mounted() {
    if (this.defaultSelect && !this.selectedNetwork) {
      this.defaultCoinNetwork();
      this.selectedData();
    } else {
      this.selectedData();
    }
  },
  methods: {
    formatSelectedCoin(coin) {
        if (coin && coin.length > 5) {
            return coin.slice(0, 4) + '..'
        } else {
            return coin
        }
    },
    formatSelectNetwork(network) {
      if (network.length > 5) {
        return network.slice(0, 4) + '..'
      } else {
        return network
      }
    },
    selectedData() {
      this.selectedCoinData = this.selectData.find((item) => {
        return item.shotName === this.selectedCoin
      })
    },
    addCoinsLength() {
      const coinsLength = this.selectData.length
      const n = this.selectData.length / 5
      this.timerCoins = setInterval(() => {
        if (this.coinsLength < coinsLength) {
          this.coinsLength = this.coinsLength + n
        }
      }, 3000)
    },
    dropSelectList() {
      this.currentIndex = false
      this.showSelectList = !this.showSelectList
      this.addCoinsLength()
      if (this.showSelectList) {
        this.$nextTick(() => {
          this.$refs.search.focus();
        })
      }
    },
    dropSelectListClose() {
      this.showSelectList = false
    },
    defaultCoinNetwork() {
        console.log(this.selectData);
        const defaultCoin = this.selectData.find((item) => {
        return item.shotName === this.defaultSelect
      })
      this.defaultNetwork = defaultCoin.network.find((item) => item.isDefault)
      this.$emit('update:network', this.defaultNetwork.shotName);
      this.selectedData();
    },
    emit(value) {
      if (!value) {
        value = null;
      }

      if (this.isNumber) {
        value = this.replaceValueToNumber(value);
      }
      this.$emit('update:value', value);
    },
    select(e) {
      this.showSelectList = false;
      this.search = ''
      this.$emit('update:select', e.target.dataset.value);
    },
    selectNetwork(item) {
      this.$emit('update:select', this.selectedCoin);
      this.$emit('update:network', item.shotName);
      this.showSelectList = false;
      this.search = ''
      this.selectedData();
    },
    replaceValueToNumber(value) {
      if (value) {
        let regex = /[^\d.]/g;
        return value.replace(regex, "");
      } else {
        return value = ''
      }
    },
    onlyNumbers(e) {
      if (this.isNumber) {
        e.target.value = this.replaceValueToNumber(e.target.value);
      }
    },
    networksHandler(index, item) {
      if (this.currentIndex !== false && this.currentIndex === index) {
        this.currentIndex = false
      } else {
        this.currentIndex = index
        this.selectedCoin = item.shotName
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/components/input-select';
</style>
