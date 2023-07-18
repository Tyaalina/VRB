import { injectable } from 'inversify';
import { AuthResponseDto } from './../types/models/AuthResponseDto';

@injectable()
export class AuthService {

    private readonly authTokenKey: string = "AuthToken";
    private readonly refreshToken: string = "RefreshToken";
    private readonly authTokenRefreshTimeKey: string = "RefreshTime";

    public getAuthToken(): string | null
    {
        return localStorage.getItem(this.authTokenKey);
    }

    public getRefreshTokenToken() : string | null
    {
        return localStorage.getItem(this.refreshToken);
    }

    public setTokens(authDto: AuthResponseDto) {
        localStorage.setItem(this.authTokenKey, authDto.token);
        localStorage.setItem(this.refreshToken, authDto.refreshToken);
        localStorage.setItem(this.authTokenRefreshTimeKey, authDto.expirationTokenDateTime);
    }

    public userIsAutheticated() : boolean {
        return localStorage.getItem(this.authTokenKey) != null;
    }

    public logout() {
        localStorage.clear();
    }
}