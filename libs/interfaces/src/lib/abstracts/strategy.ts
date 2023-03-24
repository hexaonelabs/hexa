import { IStrategy } from "../services/strategy.interface";

export abstract class Strategy<T> implements IStrategy<T> {
  abstract readonly strategyType: string;
  protected _lib!: T;

  setStrategy(lib: T) {
    this._lib = lib;
  }
}