import { injectable } from "inversify";
import { ApiHelper } from '../../../shared/helpers/apiHelper';

@injectable()
export abstract class BaseSaga<TActions, TServerInteractionService> {
    protected _actions: TActions | undefined;
    protected _serverInteractionService: TServerInteractionService | undefined;
    protected apiHelper: ApiHelper | undefined;

    public abstract watch(): void;

    public constructor() {
        this.watch = this.watch.bind(this);
        this.doApiRequest = this.doApiRequest.bind(this);
    }

    protected *doApiRequest(
        apiRequest: Promise<any>, successCallback?: (response: any) => any, errorCallback?: (response: any) => any
    ): Generator {
        try {
            yield this.apiHelper?.doApiRequest(apiRequest, successCallback, errorCallback);
        }
        catch (e) {
            yield this.apiHelper?.createError(e);
        }
    }
}