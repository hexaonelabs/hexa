import { ErrorHandler } from "@angular/core";
import { environment } from "../../environments/environment";
import { GlobalErrorHandlerService } from "../services";

export const ERROR_PROVIDER = environment.production
  ? [
      {
        provide: ErrorHandler,
        useClass: GlobalErrorHandlerService,
      },
    ]
  : [];