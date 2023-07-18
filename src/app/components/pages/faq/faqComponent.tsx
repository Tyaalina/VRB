import React from "react";
import { menuConfig } from "../../../../shared/constants/menuItems";
import MenuCompnent from "../../menu/Menu";

export type FaqProps = {

};


export const  FaqPage: (props: FaqProps) => JSX.Element = (props: FaqProps) =>
<>
    <MenuCompnent items={menuConfig} />
    <div>
        Тут форма информация о функциональности
    </div>
</>;