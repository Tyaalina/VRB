import { ITableRequestParams } from "../../../types/table/ITableResponseDto";
import { IItemSelectedPayload } from "../../payloads/IItemSelectdPayload";
import { ITableChangePageSizePayload } from "../../payloads/ITablwChangePageSizePayload";
import { IAction, IActionPayloaded } from "../shared/IAction";
import { IFilterActions } from "../shared/IFilterActions";
import { ISortActions } from "../shared/iSortActions";

export interface IBaseListActions extends IFilterActions, ISortActions {
    loadList(
        page: number,
    ): IActionPayloaded<ITableRequestParams>;

    pageSizeChanged(pageSize: number): IActionPayloaded<ITableChangePageSizePayload>;

    reloadList(
    ): IAction;

    deleteRecord?(itemId: string): IActionPayloaded<string>;

    //listLoaded<TDto>(items: TableResponseDto<TDto>): IActionPayloaded<TableResponseDto<TDto>>;

    selectedItemChanged(
        selectedRecords: string[]
    ): IActionPayloaded<IItemSelectedPayload>;
}