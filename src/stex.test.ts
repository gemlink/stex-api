import { OrderType } from './enum';
import { Stex } from './stex';

describe('Test stex', () => {
  const stex = new Stex(process.env.STEX_TOKEN);

  // it('should get balance ok', async () => {
  //   let data = await getWallets();
  //   // console.log(data);
  //   // glink
  //   data = await getWalletById(161);
  //   // console.log(data);
  // });

  // it('should get orders ok', async () => {
  //   // btc-glink
  //   const data = await getOrdersById(250);
  //   // console.log(data);
  // });

  it('should get deposit ok', async () => {
    // btc-glink
    const data = await stex.getDeposits(161);
    // console.log(data);
  });

  it('should get withdraw ok', async () => {
    // btc-glink
    const data = await stex.getWithdraw(161);
    // console.log(data);
  });

  // it('should get pair ok', async () => {
  //   // btc-glink
  //   const data = await stex.getCurrencyPairs('BTC');
  //   console.log(data);
  // });

  it('should get pair ok', async () => {
    // btc-glink
    const data = await stex.getCurrencyPairInfo(250);
    console.log(data);
  });

  // it('should create order ok', async () => {
  //   // btc-glink
  //   const data = await stex.createOrder(250, OrderType.Sell, 5, '0.0001');
  //   console.log(data);
  // });

  // it('should get order ok', async () => {
  //   // btc-glink
  //   const data = await stex.getOrderById(1030377230);
  //   console.log(data);
  // });

  // it('should create withdraw ok', async () => {
  //   // btc-glink
  //   const data = await stex.createWithdraw(
  //     161,
  //     10,
  //     's1VoST1wgYKwe3EcRu8DBWdJRbuWioDHUCM',
  //     161
  //   );
  //   console.log(data);
  // });
});
