import { Component, OnInit } from '@angular/core';
import { BigNumber, ethers } from 'ethers';
import { LidoService } from '../../services/lido.service';
import { AAVEService } from '../../services/aave.service';
import { BehaviorSubject, firstValueFrom, map, of } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
// import Web3 from 'web3';
// Sample RPC address for querying ETH mainnet
const provider = new ethers.providers.Web3Provider(
  (window as any)?.ethereum,
  'any'
);

@Component({
  selector: 'hexa-st',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit {

  public readonly ethAmountControl = new FormControl<number>(null as any);

  public readonly lidoBalance$ = this._lidoService.balance$;
  public readonly userSummary$ = this._aaveService.userSummary$;
  public readonly step$ = new BehaviorSubject<number>(0);
  public readonly aaveETH_address$ = this._aaveService.formattedPoolReserves$.pipe(
    map((reserves) => reserves?.find((r) => r.symbol === 'ETH' || r.symbol === 'WETH')?.underlyingAsset || undefined)
  );
  public readonly stethAssetBalance$ = of(0);
  public readonly ethAssetBalance$ = this._aaveService.formatedWalletBallance$.pipe(
    // TODO: fix this
    // map((tokensBalances) => 
    //     tokensBalances?.find((t) => t.symbol === 'ETH' || t.symbol === 'WETH')?.balance || 0
    // )
  );
  // public readonly stethAssetBalance$ = this._walletService.tokensBalances$.pipe(
  //   map((tokensBalances) => 
  //       tokensBalances?.find((t) => t.symbol === 'stETH')?.balance || 0
  //   )
  // );

  constructor(
    private readonly _lidoService: LidoService,
    private readonly _aaveService: AAVEService,
    public readonly modalCtrl: ModalController,
    // private readonly _walletService: any,
  ) {}

  async ngOnInit() {
    await provider.send('eth_requestAccounts', []);
    await Promise.all([
      this._aaveService.loadData(provider),
      this._lidoService.loadData(provider)
    ]);
    // get ETH address from aave service 
   
  }

  async actions(type: string, payload?: any) {
    const ethAddress = await firstValueFrom(this.aaveETH_address$);
    console.log({ethAddress});
    
    switch (true) {
      case type === 'swap': {
        const {event, value} = payload;
        console.log({event, value});
        
        if (event.target.classList?.contains('continue')) {
          this.step$.next(1);
          event.target.classList?.remove('continue');
          event.target.innerHTML = 'swap';
          break;
        } else {
          await this._lidoService.swapToLSToken(provider, value);
          event.target.classList?.add('continue');
          event.target.innerHTML = 'continue';
        }
    
        break;
      }
      case type === 'swapToLSToken': {
        // get token contract from network
        await this._lidoService.swapToLSToken(provider, payload);
        break;
      }
      case type === 'swapToWLSToken': {
        await this._lidoService.swapToLSToken(provider, payload);
        break;
      }
      case type === 'supply': {
        break;
      }

      case type === 'borrow': {
        this.step$.next(3)
        break;
      }
    }
  }

  // async stackWithLido(
  //   amount: string,
  // ) {
  //   const stETH_address = TOKENS_BY_NETWORK[5]?.STETH;
  //   if (!stETH_address) {
  //     throw new Error('Contract address not found.');
  //   }
  //   const signer = provider.getSigner();
  //   const send_account = await signer.getAddress();

  //   // Contracts
  //   const poolContract = new ethers.Contract(stETH_address, stETHabi, signer);
  //   const [symbol = undefined] = await poolContract.functions?.['symbol']()||[];
  //   const [decimals = undefined] = await poolContract.functions?.['decimals']()||[];

  //   // // check token `approval` with desired amount
  //   // const txApprove = await poolContract.functions?.['approve'](
  //   //   '',
  //   //   ethers.utils.parseUnits(amount, decimals),
  //   // );
  //   // await txApprove?.wait();

  //   // send transaction
  //   const tx = {
  //     from: send_account,
  //     to: stETH_address,
  //     value: ethers.utils.parseEther(`0.0001`),
  //   }
  //   const receipt = await signer
  //     .sendTransaction(tx)
  //     .then((tx) => tx.wait());
  //   console.log({receipt});
  // }

  // request connect wallet
  // await provider.send('eth_requestAccounts', []);
  // console.log({type, payload});
  // const stETH_address = TOKENS_BY_NETWORK[5]?.STETH;
  // const wstETH_address = TOKENS_BY_NETWORK[5]?.WSTETH;
  // const eth_address = `0x${'0'.repeat(40)}`;

  // if (!stETH_address) {
  //   throw new Error('Contract address not found.');
  // }
  // // request connect wallet
  // await provider.send('eth_requestAccounts', []);
  // console.log('connected');

  // const signer = provider.getSigner();
  // const send_account = await signer.getAddress();
  // console.log({signer});

  // // const contract = getERC20Contract(
  // //   stETH_address,
  // //   provider,
  // // );
  // //Contracts

  // const ethContract = new ethers.Contract(eth_address, stETHabi, signer);
  // const poolContract = new ethers.Contract(stETH_address, stETHabi, signer);
  // const [symbol = undefined] = await poolContract.functions?.['symbol']()||[];
  // const [decimals = undefined] = await poolContract.functions?.['decimals']()||[];
  // console.log({symbol, decimals });
  // console.log(poolContract);

  // // const symbol = await contract.symbol();
  // // const decimals = await contract.decimals();
  // // console.log({symbol, decimals });

  // // // const res = getSTETHContract(address, provider);
  // // const txApprove = await poolContract.functions?.['approve'](
  // //   '0x779d1b5315df083e3F9E94cB495983500bA8E907',
  // //   `${1000000000000000}`
  // // );
  // // await txApprove?.wait();
  // // console.log({txApprove});
  // const tx = {
  //   from: send_account,
  //   to: stETH_address,
  //   value: ethers.utils.parseEther(`0.0001`),
  // }
  // signer.sendTransaction(tx).then((transaction) => {
  //   console.dir(transaction)
  //   alert("Send finished!")
  // })
  // // const txTransfer = await ethContract.functions?.['transfer'](
  // //   eth_address,
  // //   `${1000000000000000}`
  // // );
  // // console.log({txTransfer});
}
