import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Translation } from "react-i18next";
import { menuConfig } from '../../../shared/constants/menuItems';
import MenuCompnent from '../menu/Menu';
import { Box, Button, Card, CardBody, Grommet, Heading, Paragraph } from 'grommet';
import { ButtonComponent } from '../shared/buttons/buttonComponent';

export type TopicProps = {
  id: any;
  imagelink: any;
  title: string;
  description: string;
  className: string;
};

const theme = {
  global: {
    font: {
      family: 'Prosto One',
    },
  },
  card: {
    container: {
      background: '#1a3a39',
      elevation: 'none',
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
    },
  },
  heading: {
    color: '#ADFF0037',
    level: {
      2: {
        medium: {
          size: "24px",
          height: "30px",
        }
      }
    }
  },
};

class PersonalAccounPage extends Component<RouteComponentProps>  {
  render(): JSX.Element {

    return (
      <div>
        <MenuCompnent items={menuConfig} />
        <Grommet theme={theme}>
          <Box alignContent="center" align="center" alignSelf="center" margin="xlarge">
            <Card elevation="large" width="large">
              <CardBody height="small">
              </CardBody>
              <Box pad={{ horizontal: 'medium' }} responsive={false}>
                <Heading level="2" alignSelf="center">
                  Личный кабинет
              </Heading>
                <Paragraph color="white" size="small" margin={{ top: 'none' }}>
                </Paragraph>
                <Button margin="small" alignSelf="center" href="https://t.me/ITFriendsBot?start=666">Перейти в телеграмм</Button>
              </Box>
            </Card>
          </Box>
        </Grommet>
      </div>
    );
  }
}

export default PersonalAccounPage;