export interface IStrategy<T> {
  strategyType: string;
  setStrategy(lib: T): void;
}