import { RouteProps } from 'react-router-dom';
import { HomePage } from '../../app/components/pages/home/HomePage';
import  LoginPage  from '../../app/components/pages/login/LoginPage';
import RegistrationPage from '../../app/components/pages/registration/RegistrationPage';
import TopicPage from '../../app/components/pages/topic/TopicPage'
import { LOGIN_PAGE, REGISTRATION_PAGE, ROOT_ROUTE } from './routes';

export const routerConfig = [
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
        path:REGISTRATION_PAGE,
        component: RegistrationPage,
        exact: true
    },
    {
        path:BLOG_ROUTE_PAGE,
        component: TopicPage,
        exact: true
    }
];


export default routerConfig;
