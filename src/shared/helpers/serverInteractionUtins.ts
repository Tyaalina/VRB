import { injectable } from 'inversify';

@injectable()
export class ServerInteractionsUtils {
    public getFileFormData(name: string, file: File): FormData {
        const formData = new FormData();

        formData.append(name, file);

        return formData;
    }

    public getFiltersWithPrefix(filters?: any): {} {
        const prefixedFilters: {
            [key: string]: any;
        } = {};

        for (const key in filters) {
            const prefixedFilterName = 'filter_' + key;
            prefixedFilters[prefixedFilterName] = filters[key];
        }

        return prefixedFilters;
    }
}