import { AxiosResponse } from 'axios';
import { inject } from 'inversify';
import { SagaIterator } from 'redux-saga';
import { select, put } from 'redux-saga/effects';
import { ApiHelper } from '../../../../shared/helpers/apiHelper';
import { NotificationService } from '../../../../shared/helpers/notificationService';
import { SERVICE_IDENTIFIER } from '../../../inversify/inversifyTypes';
import { TableServerInteractionService } from '../../../services/serverInteraction/tableServerInteractionService';
import { ITableRequestParams } from '../../../types/table/ITableResponseDto';
import { IBaseListActions } from '../../actions/list/IBaseListActions';
import { IActionPayloaded } from '../../actions/shared/IAction';
import { IRootState } from '../../RootState';
import { BaseSaga } from '../BaseSaga';


export abstract class BaseListSaga<TActions extends IBaseListActions, TServerInteractionService extends TableServerInteractionService> extends BaseSaga<TActions, TServerInteractionService> {
  protected readonly abstract stateName: keyof IRootState;
  protected readonly filterDebounceMs = 500;

  protected *getTableState(): SagaIterator {
    return yield select(
      (state: IRootState) => state[this.stateName]
    );
  }

  public constructor(
  ) {
    super();

    this.loadData = this.loadData.bind(this);
    this.handleSuccessLoadData = this.handleSuccessLoadData.bind(this);
    this.handleFailedLoadData = this.handleFailedLoadData.bind(this);
    this.handleSuccessAction = this.handleSuccessAction.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.pageSizeChanged = this.pageSizeChanged.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.getTableState = this.getTableState.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
    this.sortChanged = this.sortChanged.bind(this);
  }

  protected *loadData(action: IActionPayloaded<ITableRequestParams>): Generator {
    const { pageSize, filters, sortDir, sortBy }: any = yield this.getTableState();

    if (this._serverInteractionService)
      yield this.doApiRequest(this._serverInteractionService.getItems({ pageNumber: action.payload.pageNumber, pageSize }, filters), this.handleSuccessLoadData, this.handleFailedLoadData);
  }

  protected *pageSizeChanged(): Generator {
    yield this.reloadData();
  }

  protected *reloadData(): Generator {
    const { pageNumber, pageSize, filters, sortDir, sortBy }: any = yield this.getTableState();

    if (this._serverInteractionService)
      yield this.doApiRequest(this._serverInteractionService.getItems({ pageNumber, pageSize }, filters), this.handleSuccessLoadData);
  }

  protected *sortChanged(): Generator {
    yield this.reloadData();
  }

  protected *filterChanged(): Generator {
    yield this.reloadData();
  }

  protected *handleSuccessLoadData(response: AxiosResponse<any>): Generator {
    if (this._actions) {
      yield put(this._actions.selectedItemChanged([]));
      //yield put(this._actions.listLoaded(response.data.result));
    }
  }

  protected *handleFailedLoadData(response: AxiosResponse<any>): Generator {
    if (this._actions) {
      yield put(this._actions.selectedItemChanged([]));
      //yield put(this._actions.listLoaded({ totalItems: 0, items: [] }));
    }
  }

  protected *handleSuccessAction(response: AxiosResponse<any>): Generator {
    if (this._actions) {
      yield put(this._actions.reloadList());
    }
  }

  protected *deleteRecord(action: IActionPayloaded<string>): Generator {
    if (this._serverInteractionService)
      yield this.doApiRequest(this._serverInteractionService.deleteItem(action.payload), this.handleSuccessAction);
  }
}
