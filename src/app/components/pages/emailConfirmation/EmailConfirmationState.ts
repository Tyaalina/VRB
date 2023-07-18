import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';
import { EmailConfirmationDto } from './../../../types/models/EmailConfirmationDto';

export type IEmailConfirmationState = IBaseFormState<EmailConfirmationDto, {}>;