import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';
import { RegistrationDto } from './../../../types/models/RegistrationDto';

export type IRegistrationState = IBaseFormState<RegistrationDto, {}>;