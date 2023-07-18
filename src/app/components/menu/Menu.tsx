import React, { useEffect } from "react";
import { LOGIN_PAGE } from "../../../shared/constants/routes";
import { ButtonComponent } from "../shared/buttons/buttonComponent";
import history from "../../utils/helpers/HistoryHelper";
import './Menu.css'
import { useTranslation } from "react-i18next";
import { Dropdown, DropdownProps, Select } from "semantic-ui-react";
import { AuthService } from "../../services/authService";
import { SERVICE_IDENTIFIER } from "../../inversify/inversifyTypes";
import container from "../../inversify/inversifyContainer";
import { ProfileHeader } from "../pages/profileHeader/ProfileHeaderForm";

export type MenuItemsProps = {
    items: MenuItemProps[]
}

export type MenuItemProps = {
    name: string,
    link: string
};

export const MenuCompnent: (props: MenuItemsProps) => JSX.Element = (props: MenuItemsProps) => {
    useEffect(() => {
        document.body.className = 'menuable_body';
    });
    
    const { t, i18n } = useTranslation();
    const _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const gotoLogin = () => {
        history.push(LOGIN_PAGE);
    }

    return (
    <>
        <div className="menu__row">
            <ul className="header">
                {props.items.map((item, i) => 
                    <li key={i}><a onClick={() => { history.push(item.link)}}>{t(item.name)}</a></li>
                )}
            </ul>
            <div className="menu__auth_panel">
                {(!_authService.userIsAutheticated())
                ? <ButtonComponent onClick={gotoLogin} isValidating={false} formSuccess={""} type="button" className="tologin__btn" value={t("Log in")}/>
                : <ProfileHeader />}
            </div>

            <div className="lang_dropdown">
                <ButtonComponent onClick={() => changeLang("ru")} isValidating={false} formSuccess={""} type="button" className="lang__btn"  value={"RU"}/>
                <ButtonComponent onClick={() => changeLang("en")} isValidating={false} formSuccess={""} type="button" className="lang__btn" value={"EN"}/>
            </div>
        </div>
    </>);
};

export default MenuCompnent;