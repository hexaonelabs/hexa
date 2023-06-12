import { Component, Input, OnInit } from '@angular/core';
import { AAVEService } from '../../services/aave.service';
import { ReserveDataHumanized } from '@aave/contract-helpers';
import { ComputedUserReserve, FormatReserveUSDResponse } from '@aave/math-utils';
import { WalletService } from '../../services/wallet.service';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, combineLatest, filter, map } from 'rxjs';

@Component({
  selector: 'hexa-defi-markets',
  templateUrl: './defi-markets.html',
  styleUrls: ['./defi-markets.scss']
})
export class DefiMarketsComponent implements OnInit {

  @Input() public readonly chain!: {id: number, name: string};
  public readonly walletbalances = combineLatest([
    this._aaveService.formatedWalletBallance$,
    this._walletService.tokensBalances$
  ]).pipe(
    map(([reserves, walletBalance]) => reserves?.map(reserve => {
      const { aTokenAddress } = reserve;
      const supplyBalance = walletBalance.find(
        token => token.address?.toLocaleLowerCase() === aTokenAddress?.toLocaleLowerCase()
      )?.balance||0;
      const borrowBalance = walletBalance.find(
        token => token.address?.toLocaleLowerCase() === reserve.variableDebtTokenAddress?.toLocaleLowerCase()
      )?.balance||0;
      let logo = './assets/cryptocurrency-icons/' + reserve?.symbol?.toLowerCase() + '.svg';
      if (reserve.symbol === 'MATIC') {
        logo = `./assets/wallet/icons/matic.svg`;
      }
      if (reserve.symbol === 'WMATIC') {
        logo = `./assets/wallet/icons/wmatic.svg`;
      }
      if (reserve.symbol === 'aPolWMATIC') {
        logo = `./assets/wallet/icons/awmatic.svg`;
      }
      if (reserve.symbol === 'stMATIC') {
        logo = `./assets/wallet/icons/stmatic.svg`;
      }
      if (reserve.symbol === 'wstETH') {
        logo = `./assets/wallet/icons/wsteth.svg`;
      }
      return {
        ...reserve,
        borrowBalance,
        supplyBalance,
        logo
      }
    })));
  public readonly userSummary$ = this._aaveService.userSummary$;
  public readonly depositSummary$ = this.walletbalances.pipe(
    map(reserves => reserves
      ?.filter((reserve) => reserve.supplyBalance > 0)
      ?.sort((a, b) => b.supplyBalance - a.supplyBalance)),
  );
  public readonly borrowingSummary$ = this.walletbalances.pipe(
    map(reserves => reserves
      ?.filter((reserve) => reserve.borrowingEnabled)
      // ?.filter((reserve) => reserve.borrowBalance > 0)
      ?.sort((a, b) => b.borrowBalance - a.borrowBalance)),
  );
  public readonly markets$ = this._aaveService.markets$;

  constructor(
    private readonly _aaveService: AAVEService,
    private readonly _walletService: WalletService,
    private readonly _alertCtrl: AlertController,
  ) {}

  async ngOnInit() {
    if (!this.userSummary$.value) {
      const provider = this._walletService.ethereumProvider$.value;
      this._aaveService.loadData(provider);
    }
  }

  async actions(type: string, payload?: any) {
    console.log('type: ', {type, payload});
    
    switch(true) {
      case type === 'supply': {
        const reserve = payload as ReserveDataHumanized & FormatReserveUSDResponse;
        // get amount by prompt alert with input field 
        const ionAlert = await this._alertCtrl.create({
          header: 'Supply',
          inputs: [
            { name: 'amount', type: 'number', placeholder: 'Amount' },
          ],
          buttons: [
            { text: 'Cancel', role: 'cancel' },
            { text: 'Ok', role: 'ok' },
          ]
        });
        await ionAlert.present();
        const { data, role } = await ionAlert.onDidDismiss();
        // handle cancel action 
        if (role === 'cancel') {
          return;
        }
        // formating amount
        const amount = Number(data.values.amount);
        // handle invalid amount
        if (isNaN(amount) || amount <= 0) {
          throw new Error('Invalid amount. Value must be greater than 0.');
        }
        const provider = this._walletService.ethereumProvider$.value;
        const MARKET = this.markets$.value;
        // call method
        const txs = await this._aaveService.supplyWithPermit(
          {
            provider,
            reserve,
            amount: amount.toString(),
            onBehalfOf: undefined,
            poolAddress: MARKET.POOL,
            gatewayAddress: MARKET.WETH_GATEWAY
          }
        );
        console.log('txs: ', txs); 
        break;
      }
      // case type === 'borrow': {
      //   const {reserve} = payload as ComputedUserReserve<ReserveDataHumanized & FormatReserveUSDResponse>;
      //   // get amount
      //   const amount = 1;
      //   // call method
      //   this._aaveService.borrow({
      //     provider: this.ethersProvider,
      //     reserve,
      //     amount: amount.toString(),
      //     debtTokenAddress: reserve.variableDebtTokenAddress,
      //     onBehalfOf: undefined,
      //     poolAddress: MARKET.POOL,
      //     gatewayAddress: MARKET.WETH_GATEWAY,
      //   }); 
      //   break;
      // }
    }

  }
}