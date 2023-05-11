import { Component, OnInit } from '@angular/core';
import { AAVEService } from '../../services/aave.service';
import { ReserveDataHumanized } from '@aave/contract-helpers';
import { ComputedUserReserve, FormatReserveUSDResponse } from '@aave/math-utils';
import { WalletService } from '../../services/wallet.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'hexa-defi-markets',
  templateUrl: './defi-markets.html',
  styleUrls: ['./defi-markets.scss']
})
export class DefiMarketsComponent implements OnInit {

  public readonly userSummary$ = this._aaveService.userSummary$;
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
    switch(true) {
      case type === 'supply': {
        const {reserve} = payload as ComputedUserReserve<ReserveDataHumanized & FormatReserveUSDResponse>;
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