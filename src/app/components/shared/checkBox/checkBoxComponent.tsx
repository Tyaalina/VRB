import { FieldInputProps, FormikProps } from 'formik';
import React from 'react';
import { Checkbox, CheckboxProps, StrictCheckboxProps } from 'semantic-ui-react';
import { IBaseControlProps, BaseControl } from '../common/BaseControl';
import './CheckBoxComponent.css'

type ICheckboxControlProps = IBaseControlProps<StrictCheckboxProps>;

export class CheckBoxComponent extends BaseControl<ICheckboxControlProps, CheckboxProps> {
    protected getControl = (form: FormikProps<any>, field: FieldInputProps<any>): JSX.Element => {
        return (
            <Checkbox
                name={field.name}
                className = {"custom-checkbox"}
                checked={field.value}
                label={this.props.placeholder}
                onChange={(evt, data): void =>
                    form.setFieldValue(field.name, data.checked)}
                onBlur={field.onBlur}
                {...this.props.inputProps}
            />
        );
    }
}
