import * as Yup from 'yup';

export interface IValidationSchema {
    [key: string]: Yup.Schema<any>;
}