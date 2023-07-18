import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { inject, injectable } from 'inversify';
import { ServerInteractionsUtils } from '../../../shared/helpers/serverInteractionUtins';
import { SERVICE_IDENTIFIER } from '../../inversify/inversifyTypes';

@injectable()
export class BaseServerInteractionService {
    protected client: AxiosInstance;
    protected static readonly BASE_URL = process.env["API_URL"];

    public constructor(@inject(SERVICE_IDENTIFIER.ServerInteractionsUtils) protected readonly serverInteractionUtils: ServerInteractionsUtils) {
        this.client = Axios.create({
            baseURL: BaseServerInteractionService.BASE_URL,
            withCredentials: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 60000
        });
    }

    protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.client.get(url, config);
    }

    protected post<T>(url: string, body?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.client.post(url, body, config);
    }

    protected put<T>(url: string, body: any, config?: AxiosRequestConfig): Promise<T> {
        return this.client.put(url, body, config);
    }

    protected list<T>(url: string, parameters?: {}, config?: AxiosRequestConfig): Promise<T> {
        return this.get(url, { ...config, params: parameters });
    }

    protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.client.delete(url, config);
    }

    protected upload<T>(url: string, formDataFieldName: string, file: File, config?: AxiosRequestConfig): Promise<T> {
        return this.post<T>(
            url,
            this.serverInteractionUtils.getFileFormData(formDataFieldName, file),
            {
                ...config, headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
    }
}
