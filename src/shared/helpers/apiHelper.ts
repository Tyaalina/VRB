import { ROOT_ROUTE } from './../constants/routes';
import { AxiosResponse } from 'axios';
import { push } from 'connected-react-router';
import { inject, injectable } from 'inversify';
import NProgress from 'nprogress';
import { put } from 'redux-saga/effects';
import { AppActions } from '../../app/appActions';
import { SERVICE_IDENTIFIER } from '../../app/inversify/inversifyTypes';
import { NotificationService } from './notificationService';
@injectable()
export class ApiHelper {
    private readonly criticalResponseStatus = [401];
    public constructor(
        @inject(SERVICE_IDENTIFIER.NotificationService) protected readonly notificationService: NotificationService,
        @inject(SERVICE_IDENTIFIER.AppActions) protected readonly appActions: AppActions) {
        this.doApiRequest = this.doApiRequest.bind(this);
        this.createError = this.createError.bind(this);
    }

    public *doApiRequest(apiRequest: Promise<any>, successCallback?: (response: AxiosResponse<any>) => Generator, errorCallback?: (response: AxiosResponse<any>) => Generator): Generator {
        try {
            NProgress.start();

            const response: any = yield apiRequest;

            if (response && response.data && successCallback) {
                yield successCallback(response);
            }

        } catch (e) {
            if (!this.criticalResponseStatus.includes(e.response.status) && errorCallback) {
                yield errorCallback(e.response);
            }
            else {
                throw e;
            }
        }
        finally {
            NProgress.done();
        }
    }

    public *createError(axiosResponse: any): Generator {
        if (!axiosResponse.response) {
            this.notificationService.createNotification('error', 'common:serverUnavailable');
            return;
        }

        switch (axiosResponse.response.status) {
            case 400: {
                this.notificationService.createNotification('error', axiosResponse.response.data.message || 'common:400Error');
                break;
            }
            case 401: {
                //yield put(this.appActions.clearUser());
                break;
            }
            case 403: {
                this.notificationService.createNotification('error', 'common:403Error');
                break;
            }
            case 404: {
                this.notificationService.createNotification('error', 'common:404Error');
                yield put(push(ROOT_ROUTE));
                break;
            }
            case 500: {
                this.notificationService.createNotification('error', 'common:500Error');
                break;
            }

            default: {
                this.notificationService.createNotification('error', 'common:unknownError');
                break;
            }
        }
    }
}