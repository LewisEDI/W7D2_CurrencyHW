import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      selectedCurrency: null,
      amount: 0,
      exchangeRate: 0,
      exchangedAmount: 0
    },

    mounted(){
      this.fetchRates();
      console.log("Rates fetched");
    },
    computed: {
    exchange: function() {
      return this.exchangedAmount = this.amount * this.exchangeRate;
      return this.exchangeAmount;
    },
    filteredAccounts: function(){
      return this.rates.filter((rate) => {
        return account.balance >= this.filterAmount;
      });
    }
  },
    methods: {
      fetchRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(data => data.json())
        .then(rates => this.rates = rates.rates )
      },
      currencyRate: function() {
        this.rate

      }
    }
  })
})
