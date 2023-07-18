import { injectable } from "inversify";
import { APP__HIDE_LOADER, APP__INIT, } from "./appConstants";
import { IAction } from "./reduxInfrastructure/actions/shared/IAction";
@injectable()
export class AppActions {

    public init = (): IAction => ({
        type: APP__INIT
    });


    public hideLoader = (): IAction => ({
        type: APP__HIDE_LOADER
    });
}