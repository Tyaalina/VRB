import { LoginDto } from './../../../types/models/LoginDto';
import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';

export type ILoginState = IBaseFormState<LoginDto, { reveal: boolean, isLoading: boolean}>;