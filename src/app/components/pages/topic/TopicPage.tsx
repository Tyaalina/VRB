import React, { Component } from "react";
import { TopicForm } from "./TopicForm";
import { RouteComponentProps } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import { Heading, Button, Box, Card } from 'grommet';
import MenuCompnent from "../../menu/Menu";
import { menuConfig } from "../../../../shared/constants/menuItems";
import { Add } from 'grommet-icons';
import { TopicActions } from "./TopicAction";

class TopicPage extends Component<RouteComponentProps>  {
  protected readonly actions: TopicActions | undefined;
  state = {};

  render(): JSX.Element {
    document.body.className = "";
    
    return (
      <Translation>
        {(t) => (
          <div>
            <MenuCompnent items={menuConfig} />
            <Heading level="2" fill textAlign="center">{t('Topic')}</Heading>
            <TopicForm {...this.props} />
          </div>
        )}
      </Translation>
    );
  }
}

export default TopicPage;