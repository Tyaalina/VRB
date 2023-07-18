
import { injectable } from 'inversify';
import { ReactNode } from 'react';
import { toast, ToastOptions, TypeOptions } from 'react-toastify';

@injectable()
export class NotificationService {
    private static readonly config: ToastOptions = {
        draggable: false,
        position: 'top-right',
        autoClose: 5000,
        progressClassName: 'notification-progress-bar'
    }

    public createNotification = (
        type: TypeOptions,
        message: ReactNode
    ): void => {
        toast(message, { ...NotificationService.config, type });
    };
}