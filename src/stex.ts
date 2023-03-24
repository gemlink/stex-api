import axios from 'axios';
import {
  CancelOrders,
  CurencyInfo,
  CurrencyPair,
  Deposit,
  DepositAddress,
  Market,
  Order,
  OrderBook,
  TickerList,
  WalletInfo,
  Withdrawal,
} from './interface';
import { OrderType } from './enum';

export class Stex {
  key: string;
  endpoint = 'https://api3.stex.com/';
  constructor(key: string) {
    this.init(key);
  }

  private init(key: string) {
    this.key = key;
  }

  getCurrencies(): Promise<CurencyInfo[]> {
    return axios.get(`${this.endpoint}public/currencies`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get currencies';
      }
    });
  }

  getCurrencyById(id: number): Promise<CurencyInfo> {
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

  getMarkets(): Promise<Market[]> {
    return axios.get(`${this.endpoint}public/markets`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get markets';
      }
    });
  }

  getCurrencyPairs(code: string = 'empty'): Promise<CurrencyPair[]> {
    return axios
      .get(`${this.endpoint}public/currency_pairs/list/${code}`)
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get markets';
        }
      });
  }

  getCurrencyPairInfo(currencyPairId: number): Promise<CurrencyPair> {
    return axios
      .get(`${this.endpoint}public/currency_pairs/${currencyPairId}`)
      .then((res) => {
        if (res.data.success) {
          if (res.data.data.length == 0) {
            throw 'Cannot get pair';
          } else {
            return res.data.data[0];
          }
        } else {
          throw 'Cannot get pair';
        }
      });
  }

  getTickersList(): Promise<TickerList[]> {
    return axios.get(`${this.endpoint}public/ticker`).then((res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        throw 'Cannot get pair';
      }
    });
  }

  getTickerForPair(currencyPairId: number): Promise<TickerList> {
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

  getOrderBook(currencyPairId: number): Promise<OrderBook> {
    return axios
      .get(
        `${this.endpoint}public/orderbook/${currencyPairId}?limit_bids=-1&limit_asks=-1`
      )
      .then((res) => {
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot get orderbook';
        }
      });
  }

  // profiles
  getWallets(): Promise<WalletInfo[]> {
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

  getWalletById(id: number): Promise<WalletInfo> {
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

  createWallet(id: number): Promise<WalletInfo> {
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

  getDepositAddress(walletId: number): Promise<DepositAddress> {
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

  createNewDepositAddress(walletId: number): Promise<DepositAddress> {
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

  getOrders(): Promise<Order[]> {
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

  getOrdersByPairId(currencyPairId: number): Promise<Order[]> {
    return axios
      .get(`${this.endpoint}trading/orders/${currencyPairId.toString()}`, {
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

  getOrderById(orderId: number): Promise<Order> {
    return axios
      .get(`${this.endpoint}reports/orders/${orderId}`, {
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

  cancelAllOrders(): Promise<CancelOrders> {
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

  cancelOrdersByPair(currencyPairId: number): Promise<CancelOrders> {
    return axios
      .delete(`${this.endpoint}trading/orders/${currencyPairId}`, {
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
          throw `Cannot cancel order ${currencyPairId}`;
        }
      });
  }

  cancelOrdersByIds(
    currencyPairId: number,
    ids: number[]
  ): Promise<CancelOrders> {
    return axios
      .delete(`${this.endpoint}trading/orders/bulk`, {
        headers: {
          Authorization: `Bearer ${this.key}`,
          'Content-Type': `application/json`,
          'User-Agent': 'stocks.exchange-client',
        },
        data: ids,
      })
      .then((res) => {
        if (res.data.success) {
          return res.data;
        } else {
          throw `Cannot cancel order ${currencyPairId}`;
        }
      });
  }

  getDeposits(currencyId: number): Promise<Deposit[]> {
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

  getCoinWithdraw(currencyId: number): Promise<Withdrawal[]> {
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

  getWithdraw(withdrawalId: number): Promise<Withdrawal> {
    return axios
      .get(`${this.endpoint}profile/withdrawals/${withdrawalId}`, {
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

  createOrder(
    currencyPairId: number,
    type: OrderType,
    amount: number,
    price: string
  ): Promise<Order> {
    return axios
      .post(
        `${this.endpoint}trading/orders/${currencyPairId}`,
        {
          type,
          amount,
          price,
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
        console.log(res.data);
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot create withdraw';
        }
      });
  }

  createWithdraw(
    currencyId: number,
    protocolId: number,
    address: string,
    amount: number,
    withdrawApi?: string
  ): Promise<Withdrawal> {
    return axios
      .post(
        `${this.endpoint}profile/withdraw`,
        {
          currency_id: currencyId,
          amount: amount,
          address: address,
          protocol_id: protocolId,
        },
        {
          headers: {
            Authorization: `Bearer ${withdrawApi || this.key}`,
            'Content-Type': `application/json`,
            'User-Agent': 'stocks.exchange-client',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          return res.data.data;
        } else {
          throw 'Cannot create withdraw';
        }
      });
  }

  cancelWithdraw(withdrawalId: number): Promise<Withdrawal> {
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
