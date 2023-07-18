import { ChagnePasswordDto } from './../../types/models/ChagePasswordDto';
import { EmailConfirmationDto } from './../../types/models/EmailConfirmationDto';
import { injectable } from "inversify";
import { BaseServerInteractionService } from "./baseServiceInteractionService";
import { TopicDto } from '../../types/models/TopicDto';
import { AuthService } from "../authService";
import container from "../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../inversify/inversifyTypes";

@injectable()
export class AccountServerInteractionService extends BaseServerInteractionService {
    private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

    public login = (payload: any): Promise<any> => {
        return this.post('/login', payload);
    }

    public getUser = (): Promise<any> => {
        return this.get('/account/self');
    }

    public logOut = (): Promise<any> => {
        return this.delete('/logout');
    }

    public register = (payload: any): Promise<any> => {
        return this.post('/register', payload);
    }

    public changePassword = (payload: ChagnePasswordDto): Promise<any> => {
        return this.post("/account/password/change");
    }
   
    public emailConfirmation = (payload: EmailConfirmationDto): Promise<any> => {
        return this.post("/account/emailconfirm");
    }

    public getTopic = (): Promise<TopicDto[]> => {
        return this.get("http://185.209.31.106:55558/topics",{headers: {'Authorization': 'Bearer '+ this._authService.getAuthToken()}})
    }

}