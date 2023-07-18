import React from "react";
import { menuConfig } from "../../../../shared/constants/menuItems";
import MenuCompnent from "../../menu/Menu";

export type BlogProps = {

};


export const BlogPage: (props: BlogProps) => JSX.Element = (props: BlogProps) =>
<>
    <MenuCompnent items={menuConfig} />
    <div>
        Тут форма страница о нас
    </div>
</>;