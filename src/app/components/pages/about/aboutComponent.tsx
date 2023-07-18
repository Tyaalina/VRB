import React from "react";
import { menuConfig } from "../../../../shared/constants/menuItems";
import MenuCompnent from "../../menu/Menu";

export type AboutProps = {

};


export const AboutPage: (props: AboutProps) => JSX.Element = (props: AboutProps) =>
    <>
        <MenuCompnent items={menuConfig} />
        <div>
            Тут форма страница о нас
        </div>
    </>;