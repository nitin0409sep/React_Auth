import { lazy } from 'react';
import Loader from './components/common/Loader';

export const Login = lazy(() => import('./components/auth/Login'));
export const Register = lazy(() => import('./components/auth/Register'));
export const Public = lazy(() => import('./components/common/Public'));
export const Core = lazy(() => import('./components/core/Core'));
export const Auth = lazy(() => import('./components/auth/Auth'));
export const User = lazy(() => import('./components/core/User'));
export const Header = lazy(() => import('./components/common/Header'));
export const Layout = lazy(() => import('./components/layout/Layout'));
export const CreateUser = lazy(() => import('./components/core/admin/CreateUser'));
export const ViewUsers = lazy(() => import('./components/core/admin/ViewUsers'));
export const ViewPost = lazy(() => import('./components/core/user/ViewPost'));
export { Loader }