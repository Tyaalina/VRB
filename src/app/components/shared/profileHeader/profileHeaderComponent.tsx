import React, { Props } from "react";
import { Button } from "semantic-ui-react";
import "./profileHeaderComponent.css";

export type ProfileComponentProps = {
  isValidating: any,
  formSuccess?:string | undefined,
  className: string,
  value?: string,
  type: string,
  onClick?: any,
  children?: any
};

export const ProfileHeaderComponent: (props: ProfileComponentProps) => JSX.Element = (props: ProfileComponentProps) => {
  return (
    <>
        <Button
          basic
          content={props.children}
          className={props.className + " profileHeader"}
          disabled={props.isValidating || !!props.formSuccess}
          type={props.type}
          onClick={props.onClick}
        />
    </>
  );
};