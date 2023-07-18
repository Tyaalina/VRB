import { Formik, FormikBag, FormikHelpers, FormikProps } from "formik";
import React, { Dispatch } from 'react';
import { connect } from "react-redux";
import { Form, Icon } from "semantic-ui-react";
import { IRootState } from "../../../reduxInfrastructure/RootState";
import { IBaseFormProps } from "../../../types/form/IBaseFormProps";
import { Translation, useTranslation } from "react-i18next";
import { TopicDto } from "../../../types/models/TopicDto";
import { ITopicState } from "./TopicState";
import "./TopicPage.css";
import { TopicComponent } from "../../shared/topic/topicComponent";
import Pic1 from "../../../../img/palm_tree_PNG93263.png"
import { Grommet, ResponsiveContext, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';
import { ISharedReduxProps } from "../../../types/ISharedReduxProps";
import { TOPIC } from "./TopicConstants";
import axios from "axios";
import { AuthService } from "../../../services/authService";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { TopicActions } from "./TopicAction";
import { bindActionCreators } from "redux";


type IFormState = TopicDto[];
type ITopicProps = IBaseFormProps<IFormState, {}>;

class SubTopic extends React.Component<ITopicProps> {
  protected readonly actions: TopicActions;
  private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);


  public constructor(props: ITopicProps) {
    super(props);
    this.actions = container.get<TopicActions>(SERVICE_IDENTIFIER.TopicAction);
    props.dispatch(this.actions.initForm());
  }

  componentDidMount() {
    this.props.dispatch({ type: TOPIC });
    this.getTopics()
  }

  getTopics() {
    axios.get('http://185.209.31.106:55558/subscriptions', { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } },)
      .then(result => {
          this.props.dispatch(this.actions.setTopics(result.data.subscriptions));
        })
  }

  deleteTopic(topicId: number) {
    
  }

  editComponent(topicId: number, title: string) {
    
  }

  public render(): JSX.Element {
    return (
      <Translation>
        {(t) => (
          <Grommet>
            <Box pad="large">
              <Grid columns='medium' gap="small" align="center" alignSelf="stretch">
                {this.props.form.record.map(element => (
                  <TopicComponent
                    key={element.topicId}
                    id={element.topicId}
                    imagelink={Pic1}
                    className="1"
                    title={element.topicTitle}
                    description={"Данная тема посвящена языку " + element.topicTitle}
                    deleteTopic={() => this.deleteTopic(element.topicId)}
                    editTopic={(newTitle: string) => this.editComponent(element.topicId, newTitle)}
                  />
                ))}
              </Grid>
            </Box>
          </Grommet>
        )}
      </Translation>
    );
  }
}

function mapStateToProps(state: IRootState): ITopicState {
  return { ...state.topic }
}


export const SubTopicForm = connect(mapStateToProps)(SubTopic);
