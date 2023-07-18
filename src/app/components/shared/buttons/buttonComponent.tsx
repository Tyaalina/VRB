import React, { Props } from "react";
import { Button } from "semantic-ui-react";
import "./buttonComponent.css";

export type ButtonProps = {
  isValidating: any,
  formSuccess?:string | undefined,
  className: string,
  value: string,
  type: string,
  onClick?: any
};

export const ButtonComponent: (props: ButtonProps) => JSX.Element = (props: ButtonProps) => {
  return (
    <>
        <Button
          basic
          content={props.value}
          className={props.className + " btn"}
          disabled={props.isValidating || !!props.formSuccess}
          type={props.type}
          onClick={props.onClick}
          color="green"
        />
    </>
  );
};