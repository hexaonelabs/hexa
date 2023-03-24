import { ILoadingService } from "@d-workspace/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { BehaviorSubject, debounceTime, distinctUntilChanged } from "rxjs";

export const LOADER_PROVIDER = [{
  provide: getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE),
  useFactory: (): ILoadingService => {
    // Create a loader service that can be used to show/hide 
    // a loading indicator in the UI. 
    // This is a simple example that uses a BehaviorSubject to
    // emit a boolean value that can be subscribed to by the UI.
    const LOADERCLIENT = new BehaviorSubject<boolean>(false);
    return {
      setStatus: (status: boolean) => {
        console.log('Loader status: ', status);
        LOADERCLIENT.next(status);
      },
      isVisible$: LOADERCLIENT.asObservable().pipe(
        debounceTime(250),
        distinctUntilChanged()
      ),
    };
  },
}];