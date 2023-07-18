import { PropertyError } from './../../../types/IServerError';
import { AxiosResponse } from "axios";
import { FormikBag } from "formik";
import { inject } from "inversify";
import { put } from "redux-saga/effects";
import { ApiHelper } from "../../../../shared/helpers/apiHelper";
import { NotificationService } from "../../../../shared/helpers/notificationService";
import container from "../../../inversify/inversifyContainer";
import { ObjectHelper } from "../../../services/objectHelper";
import { IFormHelperPayload } from "../../../types/form/IFormHelperPaload";
import { IServerErrors } from "../../../types/IServerError";
import { IBaseFormActions } from "../../actions/form/IBaseFormActions";
import { IActionPayloaded } from "../../actions/shared/IAction";
import { BaseSaga } from "../BaseSaga";
import { SERVICE_IDENTIFIER } from "./../../../inversify/inversifyTypes";

export abstract class BaseFormSaga<TDto, TActions extends IBaseFormActions, TServerInteractionService> extends BaseSaga<TActions, TServerInteractionService> {
  private readonly _objectHelper: ObjectHelper;
  protected actions: TActions | undefined;
  protected serverInteractionService: TServerInteractionService | undefined;
  protected apiHelper: ApiHelper = container.get<ApiHelper>(SERVICE_IDENTIFIER.ApiHelper)

  public constructor(
  ) {
    super();

    this.handleServerError = this.handleServerError.bind(this);
    this.doSubmitApiRequest = this.doSubmitApiRequest.bind(this);
    this._setFormError = this._setFormError.bind(this);

    this._objectHelper = container.get(SERVICE_IDENTIFIER.ObjectHelper);
  }

  private *handleServerError(error: any): Generator {
    const serverError = this._createFormError(error.response);

    if (serverError.message || serverError.errors?.length) {
      yield this._setFormError(serverError);
    } else {
      yield this.apiHelper.createError(error);
    }
  }

  private _createFormError = (response: AxiosResponse<any>): IServerErrors => {
    const serverError: IServerErrors = {
    } as IServerErrors;

    if (response?.data?.error === "invalid_grant") {
      serverError.message = response?.data?.errorDescription;
    } else {
      
      serverError.message = response?.data?.globalStatusCode;
      let commonError = response?.data?.errors?.filter(t => !t.propertyName);
      if (commonError?.length > 0) {
        serverError.message = commonError[0].description;
      }

      serverError.errors = response.data.errors.filter(t => t.propertyName).map(t => new PropertyError(
        t.message,
        t.propertyName,
      ));
    }

    return serverError;
  }

  private *_setFormError(serverError: IServerErrors): Generator {
    if (serverError.message && this.actions) {
      yield put(this.actions.setFormError(serverError));
    }

    serverError.errors?.map((item) => {
      const fieldCamelCased = this._objectHelper.transformDtoFieldToCamelCase(item.fieldName);
    });
  }

  protected *doSubmitApiRequest(action: IActionPayloaded<IFormHelperPayload<TDto, any, any>>, apiRequest: Promise<any>, successCallback?: (response: AxiosResponse<any>) => any, errorCallback?: (response: AxiosResponse<any>) => Generator): Generator {
    try {
      yield this.apiHelper.doApiRequest(apiRequest, successCallback, errorCallback);
    } catch (e) {
      yield this.handleServerError(e);
    }
  }
}
