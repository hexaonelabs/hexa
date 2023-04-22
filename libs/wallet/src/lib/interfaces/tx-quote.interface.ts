export interface ITXQuote {
  chainId:              number;
  price:                string;
  guaranteedPrice:      string;
  estimatedPriceImpact: string;
  to:                   string;
  data:                 string;
  value:                string;
  gas:                  string;
  estimatedGas:         string;
  gasPrice:             string;
  protocolFee:          string;
  minimumProtocolFee:   string;
  buyTokenAddress:      string;
  sellTokenAddress:     string;
  buyAmount:            string;
  sellAmount:           string;
  sources:              ITXQuoteSource[];
  orders:               ITXQuoteOrder[];
  allowanceTarget:      string;
  sellTokenToEthRate:   string;
  buyTokenToEthRate:    string;
}

export interface ITXQuoteOrder {
  makerToken:   string;
  takerToken:   string;
  makerAmount:  string;
  takerAmount:  string;
  fillData:     ITXQuoteFillData;
  source:       string;
  sourcePathId: string;
  type:         number;
}

export interface ITXQuoteFillData {
  tokenAddressPath: string[];
  router:           string;
}

export interface ITXQuoteSource {
  name:       string;
  proportion: string;
}
