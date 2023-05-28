import { Injectable } from "@angular/core";
import { IPiningService, Strategy } from "@hexa/interfaces";


/**
 * Strategy pattern for IPFS Pinning services
 */
@Injectable()
export class IPFSPinningStrategy extends Strategy<IPiningService> {
  public readonly strategyType = 'ipfs-pinning';
  private AVAILABLE_STRATEGY!: Map<string, IPiningService>;

  constructor(libs: Map<string, IPiningService>) {
    super();
    this.AVAILABLE_STRATEGY = libs;
  }

  override setStrategy<T>(name: T|'pinata'|'web3.storage'): void {
    const lib = this.AVAILABLE_STRATEGY.get(name as string);
    if (!lib) {
      throw new Error(`Unsupported strategy: [${name}]. Please check the available strategies and try again.`);
    }
    super.setStrategy(lib);
  }
  
  async pin(hash: string): Promise<void> {
    return this._lib.pin(hash);
  }

  async unpin(hash: string): Promise<void> {
    return this._lib.unpin(hash);
  }

}