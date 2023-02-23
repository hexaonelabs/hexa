import { Observable } from "rxjs";

export interface ILoadingService {
  setStatus: (status: boolean) => void;
  isVisible$: Observable<boolean>;
}