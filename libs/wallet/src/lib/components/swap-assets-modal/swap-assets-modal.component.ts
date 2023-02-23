import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenInterface } from '../../interfaces/token.interface';

@Component({
  selector: 'd-workspace-swap-assets-modal',
  templateUrl: './swap-assets-modal.component.html',
  styleUrls: ['./swap-assets-modal.component.scss'],
})
export class SwapAssetsModalComponent {
  @Input() public fromAsset!: TokenInterface;
  @Input() public toAsset?: TokenInterface;
  public readonly fromAssetControl = new FormControl();
  public readonly fromAmountControl = new FormControl();
  public readonly toAssetControl = new FormControl();
  public readonly toAmountControl = new FormControl();
  public readonly assets = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
    },
    {
      name: 'Matic',
      symbol: 'MATIC',
    },
  ];
  constructor() {}

  onFromAssetChange() {
    console.log('onFromAssetChange', this.fromAssetControl.value);
  }

  onToAssetChange() {
    console.log('onToAssetChange', this.toAssetControl.value);
  }

  async reviewSwap() {
    console.log(
      'reviewSwap',
      this.fromAssetControl.value,
      this.fromAmountControl.value,
      this.toAssetControl.value,
      this.toAmountControl.value
    );
  }
}
