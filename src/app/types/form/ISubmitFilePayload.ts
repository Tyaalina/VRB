import { FormikProps } from 'formik';
import { IFormHelperPayload } from './IFormHelperPaload';

export interface ISubmitFilePayload<TDto = File> extends IFormHelperPayload<TDto, {}, FormikProps<any>> {
    file: TDto;
    fieldName: string;
    setProgress: (value: number) => void;
}