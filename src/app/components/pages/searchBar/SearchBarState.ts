import { IBaseFormState } from '../../../reduxInfrastructure/state/IBaseFormState';
import { SearchBarDto } from '../../../types/models/SearchBarDto';

export type ISearchBarState = IBaseFormState<SearchBarDto, {}>;