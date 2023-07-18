import React from "react";
import { menuConfig } from "../../../../shared/constants/menuItems";
import { REGISTRATION_PAGE, SUBTOPIC, TOPIC } from "../../../../shared/constants/routes";
import { ButtonComponent } from "../../shared/buttons/buttonComponent";
import MenuCompnent from "../../menu/Menu";
import history from "../../../utils/helpers/HistoryHelper";
import './homePage.css'
import { useTranslation } from "react-i18next";
import { AuthService } from "../../../services/authService";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import container from "../../../inversify/inversifyContainer";
import { Box } from "grommet";

export type HomePageProps = {
	title: string
};

export const HomePage: (props: HomePageProps) => JSX.Element = (props: HomePageProps) => {
	const gotoSignUp = () => {
		history.push(REGISTRATION_PAGE);
	};
	const gotoTopic = () => {
		history.push(TOPIC);
	}
	const gotoSubTopic = () => {
		history.push(SUBTOPIC);
	}
	const _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);
	const { t } = useTranslation();
	return (
		<>
			<MenuCompnent items={menuConfig} />
				{(!_authService.userIsAutheticated())
					? <ButtonComponent onClick={() => { gotoSignUp() }} isValidating={false} formSuccess={""} type="button" className="tosignup__btn" value={t("Sign in")} />
					: <ButtonComponent onClick={() => { gotoTopic() }} isValidating={false} formSuccess={""} type="button" className="tosignup__btn" value={t("Topic")} />}
				{(_authService.userIsAutheticated())
					? <ButtonComponent onClick={() => { gotoSubTopic() }} isValidating={false} formSuccess={""} type="button" className="tosubTopic__btn" value={t("SubTopic")} />
					: <div></div>}
			<div className="home__maintext">ITFriends<i className="home__maintext--point">.</i></div>
			<div className="home__motivatetext">
				{t("DescriptionMainPage")}
			</div>
		</>
	);
};
