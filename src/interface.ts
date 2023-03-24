export interface ProtocolSpecificSettings {
  protocol_name: string;
  protocol_id: number;
  active: boolean;
  disable_deposits: boolean;
  disable_withdrawals: boolean;
  withdrawal_limit: number;
  deposit_fee_currency_id: number;
  deposit_fee_currency_code: string;
  deposit_fee_percent: number;
  deposit_fee_const: number;
  withdrawal_fee_currency_id: number;
  withdrawal_fee_currency_code: string;
  withdrawal_fee_const: number;
  withdrawal_fee_percent: number;
  block_explorer_url: string;
  withdrawal_additional_field_name: string;
}

export interface CurencyInfo {
  id: number;
  code: string;
  name: string;
  active: boolean;
  delisted: boolean;
  precision: number;
  minimum_tx_confirmations: number;
  minimum_withdrawal_amount: string;
  minimum_deposit_amount: string;
  deposit_fee_currency_id: number;
  deposit_fee_currency_code: string;
  deposit_fee_type: number;
  deposit_fee_const: string;
  deposit_fee_percent: string;
  withdrawal_fee_currency_id: number;
  withdrawal_fee_currency_code: string;
  withdrawal_fee_type: number;
  withdrawal_fee_const: string;
  withdrawal_fee_percent: string;
  withdrawal_limit: string;
  block_explorer_url: string;
  protocol_specific_settings: ProtocolSpecificSettings[];
}

export interface Market {
  code: string;
  name: string;
}

export interface CurrencyPair {
  id: number;
  currency_id: number;
  currency_code: string;
  currency_name: string;
  market_currency_id: number;
  market_code: string;
  market_name: string;
  min_order_amount: string;
  min_buy_price: string;
  min_sell_price: string;
  buy_fee_percent: string;
  sell_fee_percent: string;
  active: boolean;
  delisted: boolean;
  message: string;
  currency_precision: number;
  market_precision: number;
  symbol: string;
  group_name: string;
  group_id: number;
  amount_multiplier: number;
  trading_precision: number;
}

export interface TickerList {
  id: number;
  amount_multiplier: number;
  currency_code: string;
  market_code: string;
  currency_name: string;
  market_name: string;
  symbol: string;
  group_name: string;
  group_id: number;
  ask: string;
  bid: string;
  last: string;
  low: string;
  high: string;
  open: string;
  volume: string;
  volumeQuote: string;
  timestamp: number;
  group_position: number;
  trading_precision: number;
}

export interface OrderBookAskBid {
  currency_pair_id: number;
  amount: string;
  price: string;
  amount2: string;
  count: number;
  cumulative_amount: number;
}

export interface OrderBook {
  ask: OrderBookAskBid[];
  bid: OrderBookAskBid[];
  ask_total_amount: number;
  bid_total_amount: number;
}

export interface DepositAddress {
  address: string;
  address_name: string;
  additional_address_parameter: string;
  additional_address_parameter_name: string;
  notification: string;
  protocol_id: number;
  protocol_name: string;
  supports_new_address_creation: boolean;
}

export interface WalletInfo {
  id: number;
  currency_id: number;
  currency_code: string;
  currency_name: string;
  balance: string;
  frozen_balance: string;
  bonus_balance: string;
  hold_balance: string;
  total_balance: string;
  disable_deposits: boolean;
  disable_withdrawals: boolean;
  withdrawal_limit: string;
  delisted: boolean;
  disabled: boolean;
  deposit_address: DepositAddress;
  multi_deposit_addresses: DepositAddress[];
  currency_type_id: number;
}

export interface TradingFee {
  id: number;
  currency_id: number;
  amount: string;
  timestamp: string;
}

export interface Order {
  id: number;
  currency_pair_id: number;
  currency_pair_name: string;
  price: string;
  trigger_price: number;
  initial_amount: string;
  processed_amount: string;
  type: string;
  original_type: string;
  created: string;
  timestamp: string;
  status: string;
  fees: TradingFee[];
}

export interface CancelOrders {
  put_into_processing_queue: Order[];
  not_put_into_processing_queue: Order[];
}

export interface Deposit {
  id: number;
  currency_id: number;
  currency_code: string;
  deposit_fee_currency_id: number;
  deposit_fee_currency_code: string;
  amount: number;
  fee: number;
  txid: string;
  protocol_id: number;
  deposit_status_id: number;
  status: string;
  status_color: string;
  created_at: string;
  timestamp: string;
  confirmations: string;
}

export interface WithdrawalAddress {
  address: string;
  address_name: string;
  additional_address_parameter: string;
  additional_address_parameter_name: string;
  notification: string;
  protocol_id: number;
  protocol_name: string;
  supports_new_address_creation: boolean;
}

export interface Withdrawal {
  id: number;
  amount: string;
  currency_id: number;
  currency_code: string;
  fee: string;
  fee_currency_id: number;
  fee_currency_code: string;
  withdrawal_status_id: number;
  status: string;
  status_color: number;
  created_at: string;
  created_ts: string;
  updated_at: string;
  updated_ts: string;
  reason: string;
  txid: string;
  protocol_id: number;
  withdrawal_address: WithdrawalAddress;
}
