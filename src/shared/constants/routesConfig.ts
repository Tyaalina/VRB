import { AboutPage } from './../../app/components/pages/about/aboutComponent';
import { BlogPage } from "../../app/components/pages/blogComponent/blogComponent";
import { FaqPage } from "../../app/components/pages/faq/faqComponent";
import { HomePage } from "../../app/components/pages/home/HomePage";
import  LoginPage from "../../app/components/pages/login/LoginPage";
import RegistrationPage from "../../app/components/pages/registration/RegistrationPage";
import { ABOUT_ROUTE_PAGE, EMAILCONFIRMATION_PAGE, BLOG_ROUTE_PAGE, CHANGEPASSWORD_PAGE, FAQ_ROUTE_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, ROOT_ROUTE, SEARCH_BAR, PROFILE_HEADER, TOPIC, PROFILE, MESSAGE, SUBTOPIC } from "./routes";
import ChangePasswordPage from '../../app/components/pages/changePassword/ChangePasswordPage';
import EmailConfirmationPage from '../../app/components/pages/emailConfirmation/EmailConfirmationPage';
import SearchBarPage from '../../app/components/pages/searchBar/SearchBarPage';
import ProfileHeaderPage from '../../app/components/pages/profileHeader/ProfileHeaderPage';
import TopicPage from '../../app/components/pages/topic/TopicPage';
import PersonalAccounPage from '../../app/components/PersonalAccount/PersonalAccountPage';
import MessagePage from '../../app/components/pages/message/MessagePage';
import SubTopicPage from '../../app/components/pages/topic/SubTopicPage';

export type IRouteConfig = {
    path: string,
    component: any,
    exact: boolean
}


export const routerConfig: IRouteConfig[] = [
    {
        path: ROOT_ROUTE,
        component: HomePage,
        exact: true
    },
    {
        path: LOGIN_PAGE,
        component: LoginPage,
        exact: true
    },
    {
        path: REGISTRATION_PAGE,
        component: RegistrationPage,
        exact: true
    },
    {
        path: CHANGEPASSWORD_PAGE,
        component: ChangePasswordPage,
        exact: true
    },
    {
        path: EMAILCONFIRMATION_PAGE,
        component: EmailConfirmationPage,
        exact: true
    },
    {
        path:SEARCH_BAR,
        component:SearchBarPage,
        exact: true
    },
    {
        path: PROFILE_HEADER,
        component: ProfileHeaderPage,
        exact: true
    },
    {
        path: TOPIC,
        component: TopicPage,
        exact: true
    },
    {
        path: SUBTOPIC,
        component: SubTopicPage,
        exact: true
    },
    {
        path: ABOUT_ROUTE_PAGE,
        component: AboutPage,
        exact: true
    },
    {
        path: FAQ_ROUTE_PAGE,
        component: FaqPage,
        exact: true
    },
    {
        path: BLOG_ROUTE_PAGE,
        component: BlogPage,
        exact: true
    },
    {
        path: PROFILE,
        component: PersonalAccounPage,
        exact: true
    },
    {
        path: MESSAGE,
        component: MessagePage,
        exact: true
    },
];


export default routerConfig;
