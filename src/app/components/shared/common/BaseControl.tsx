import { Field, FieldInputProps, FieldProps, FormikProps } from 'formik';
import React from 'react';
import { Form } from 'semantic-ui-react';

export interface IBaseControlProps<TControlProps> {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    inputProps?: TControlProps;
}

export abstract class BaseControl<TProps extends IBaseControlProps<TControlProps>, TControlProps, TState = {}> extends React.Component<TProps, TState> {
    protected getFieldError = (form: FormikProps<any>): string | null => {
        const fieldName = this.props.name;
        const fieldError = (form.errors[fieldName]) as string;

        return form.touched[fieldName] && fieldError || null;
    };

    protected getFieldValue = (form: FormikProps<any>): boolean => {
        return form.values[this.props.name];
    }

    protected abstract getControl: (form: FormikProps<any>, field: FieldInputProps<any>, error: string | null) => JSX.Element;

    public render(): JSX.Element {
        return (
            <Field
                name={this.props.name}>
                {({ field, form }: FieldProps): JSX.Element => {
                    const error = this.getFieldError(form);
                    return (
                        <Form.Field
                            required={this.props.required}
                            error={!!this.getFieldError(form)}
                        >
                            {this.props.label &&
                                <label>{`${this.props.label}:`}</label>
                            }

                            {this.getControl(form, field, error)}
                            {error ?
                                    <span className='fields__error__text'>
                                    {error}
                                </span>
                                : <span></span>
                            }
                        </Form.Field >
                    )
                }
                }
            </Field>
        );
    }
}
