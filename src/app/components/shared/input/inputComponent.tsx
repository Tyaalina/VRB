import { FieldInputProps, FormikProps } from 'formik';
import React, { RefObject } from 'react';
import { Input, InputProps, StrictInputProps } from 'semantic-ui-react';
import { IBaseControlProps, BaseControl } from '../common/BaseControl';
import "./inputComponent.css";

type IInputControlProps = IBaseControlProps<StrictInputProps> & {
    autoFocus?: boolean;
};

export class InputComponent extends BaseControl<IInputControlProps, InputProps> {
    private _inputRef?: RefObject<Input> = React.createRef();

    public componentDidMount(): void {
        if (this.props.autoFocus) {
            this._inputRef?.current?.focus();
        }
    }

    protected getControl = (form: FormikProps<any>, field: FieldInputProps<any>, error: string | null): JSX.Element => {
        return (
          <>
            <h1>{this.props.placeholder}</h1>
            <p>
                <Input
                    className={`inputComponent ${error ? "error" : ""}`}
                    ref={this._inputRef}
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    {...this.props.inputProps}
                />
                </p>
            </>
        );
    }
}
