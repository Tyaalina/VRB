import { FormikBag } from "formik";

export interface IFormHelperPayload<TDto, TProps, TFormProps = FormikBag<TProps, TDto>> {
    formHelpers: TFormProps;
}