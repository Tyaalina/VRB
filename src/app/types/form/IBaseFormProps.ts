import { RouteComponentProps } from "react-router-dom";
import { IBaseFormState } from "../../reduxInfrastructure/state/IBaseFormState";
import { ISharedReduxProps } from "../ISharedReduxProps";

export interface IBaseFormProps<TDto, THelpers>
  extends IBaseFormState<TDto, THelpers>,
    ISharedReduxProps,
    RouteComponentProps {
  cancelBtn?: JSX.Element;
}