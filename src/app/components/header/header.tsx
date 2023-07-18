import i18next from "i18next";
import React from "react";

export type HeaderProps = {

};

export const Header: (props: HeaderProps) => JSX.Element = (props: HeaderProps) => {
    return (
    <>
        <header>
            {i18next.t("main.header")}
        </header>
    </>);
};

export default Header;