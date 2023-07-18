import { injectable } from "inversify";

@injectable()
class UrlFabric {
    public _apiUrl: string  = "http://localhost/api";
    public _authUrl: string = "http://localhost/auth";

    public logIn(): string {
        return `${this._authUrl}/connect/token`;
    }

}
export default UrlFabric;