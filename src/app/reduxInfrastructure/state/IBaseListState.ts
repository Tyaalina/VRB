import { IBaseFilterState } from "./shared/IBaseFilterState";
import { IBaseSortState } from "./shared/IBaseSortState";

export const BaseListInitialState = {
    items: undefined,
    pageNumber: 1,
    pageSize: 10,
    totalItems: 1,
    filters: {
        isDeleted: false
    },
    sortBy: 'id',
    sortDir: 'asc',
    selectedRecords: []
} as IBaseListState<any>;

export interface IBaseListState<TDto> extends IBaseFilterState, IBaseSortState {
    items?: TDto[];
    pageNumber: number;
    totalItems: number;
    pageSize: number;
    selectedRecords: [];
}