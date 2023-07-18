import { inject, unmanaged } from 'inversify';
import { ServerInteractionsUtils } from '../../../shared/helpers/serverInteractionUtins';
import { SERVICE_IDENTIFIER } from '../../inversify/inversifyTypes';
import { ITableRequestParams } from '../../types/table/ITableResponseDto';
import { BaseServerInteractionService } from './baseServiceInteractionService';

type IGetItemsParams = ITableRequestParams & {
    pageSize: number;
};

export class TableServerInteractionService extends BaseServerInteractionService {
    protected prefix: string;

    constructor(@unmanaged() entity: string, @inject(SERVICE_IDENTIFIER.ServerInteractionsUtils) serverInteractionUtils: ServerInteractionsUtils) {
        super(serverInteractionUtils);

        this.prefix = `table/${entity}`;
    }

    public getItems = (params: IGetItemsParams, filters?: {}, ): Promise<any> => {
        const { pageNumber, pageSize, ...sortParams } = params;

        const prefixedFilters = this.serverInteractionUtils.getFiltersWithPrefix(filters);

        return this.list(`${this.prefix}/items/${pageNumber}/${pageSize}`, {
            ...sortParams, ...prefixedFilters
        });
    };

    public getAllItems = (): Promise<any> => {
        return this.list(`${this.prefix}/items`);
    };

    public getItem = (id: string): Promise<any> => {
        return this.get(`${this.prefix}/item/${id}`);
    };

    public create = (data: any): Promise<any> => {
        return this.post(`${this.prefix}/item`, data);
    };

    public update = (data: any): Promise<any> => {
        return this.put(`${this.prefix}/item`, data);
    };

    public deleteItem = (id: string): Promise<any> => {
        return this.delete(`${this.prefix}/item/${id}`);
    };

    public getChildEntityItems = (id: string, childEntity: string): Promise<any> => {
        return this.get(`${this.prefix}/${id}/${childEntity}/items`);
    };
}