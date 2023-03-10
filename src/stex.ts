import axios from 'axios';

export class Stex {
  key: string;
  endpoint: 'https://api3.stex.com/';
  constructor() {}

  init(key: string) {
    this.key = key;
  }

  getCurrencies() {
    return axios.get(`${this.endpoint}public/currencies`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get currencies';
      }
    });
  }

  getCurrenciesById(id: number) {
    return axios
      .get(`${this.endpoint}public/currencies/${id.toString()}`)
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get currencies';
        }
      });
  }

  getMarkets() {
    return axios.get(`${this.endpoint}public/markets`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get markets';
      }
    });
  }

  getCurrentcyPairInfo(currencyPairId: number) {
    return axios
      .get(`${this.endpoint}public/currency_pairs/${currencyPairId}`)
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get pair';
        }
      });
  }

  getTickersList() {
    return axios.get(`${this.endpoint}public/ticker`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get pair';
      }
    });
  }

  getTickerForPair(currencyPairId: number) {
    return axios
      .get(`${this.endpoint}public/ticker/${currencyPairId}`)
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get ticker';
        }
      });
  }

  getOrderBook(currencyPairId: number) {
    return axios
      .get(`${this.endpoint}public/orderbook/${currencyPairId}`)
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get orderbook';
        }
      });
  }

  // profiles
  getWallets() {
    return axios
      .get(`${this.endpoint}profile/wallets?sort=DESC&sortBy=BALANCE`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get wallets';
        }
      });
  }

  getWalletById(id: number) {
    return axios
      .get(`${this.endpoint}profile/wallets/${id.toString()}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get wallet by id';
        }
      });
  }

  createWallet(id: number) {
    return axios
      .post(
        `${this.endpoint}profile/wallets/${id.toString()}`,
        {
          currencyId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${this.key}`,
            'Content-Type': `application/json`,
            'User-Agent': 'stocks.exchange-client',
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot create wallet';
        }
      });
  }

  getDepositAddress(walletId: number) {
    return axios
      .get(`${this.endpoint}profile/wallets/address/${walletId.toString()}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get wallet address';
        }
      });
  }

  createNewDepositAddress(walletId: number) {
    return axios
      .post(
        `${this.endpoint}profile/wallets/address/${walletId.toString}`,
        {
          walletId: walletId.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${this.key}`,
            'Content-Type': `application/json`,
            'User-Agent': 'stocks.exchange-client',
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot create wallet';
        }
      });
  }

  getOrders() {
    return axios
      .get(`${this.endpoint}trading/orders`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get orders';
        }
      });
  }

  getOrdersById(id: number) {
    return axios
      .get(`${this.endpoint}trading/orders/${id.toString()}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get orders';
        }
      });
  }

  cancelAllOrders() {
    return axios
      .delete(`${this.endpoint}trading/orders`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data;
        } else {
          throw 'Cannot cancel all orders';
        }
      });
  }

  cancelOrder(orderId: number) {
    return axios
      .delete(`${this.endpoint}trading/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data;
        } else {
          throw `Cannot cancel order ${orderId}`;
        }
      });
  }

  getDeposit(currencyId: number) {
    return axios
      .get(`${this.endpoint}profile/deposits?currencyId=${currencyId}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get deposits';
        }
      });
  }

  getWithdraw(currencyId: number) {
    return axios
      .get(`${this.endpoint}profile/withdrawals?currencyId=${currencyId}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get withdraw';
        }
      });
  }

  createWithdraw(currencyId: number, amount: number, address: number) {
    return axios
      .post(
        `${this.endpoint}profile/withdrawals`,
        {
          currency_id: currencyId,
          amount: amount,
          address: address,
        },
        {
          headers: {
            Authorization: `Bearer ${this.key}`,
            'Content-Type': `application/json`,
            'User-Agent': 'stocks.exchange-client',
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot create withdraw';
        }
      });
  }

  cancelWithdraw(withdrawalId: number) {
    return axios
      .delete(`${this.endpoint}profile/withdraw/${withdrawalId}`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
      })
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot cancel withdraw ';
        }
      });
  }
}
