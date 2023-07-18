import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import { Heading, Button, Box, Card } from 'grommet';
import MenuCompnent from "../../menu/Menu";
import { menuConfig } from "../../../../shared/constants/menuItems";
import { Add } from 'grommet-icons';
import { TopicActions } from "./TopicAction";
import { SubTopicForm } from "./SubTopicForm";

class SubTopicPage extends Component<RouteComponentProps>  {
    protected readonly actions: TopicActions | undefined;
    state = {};
  
    render(): JSX.Element {
      document.body.className = "";
      
      return (
        <Translation>
          {(t) => (
            <div>
              <MenuCompnent items={menuConfig} />
              <Heading level="2" fill textAlign="center">{t('SubTopic')}</Heading>
              <Box round="full" align="end" margin={{right:"medium"}}>
                <Button icon={<Add />} hoverIndicator onClick={() => {}} />
              </Box>
              <SubTopicForm {...this.props}/>
            </div>
          )}
        </Translation>
      );
    }
  }
  
  export default SubTopicPage;