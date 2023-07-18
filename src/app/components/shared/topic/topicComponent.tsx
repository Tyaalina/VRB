import React, { Props, useState } from "react";
import { TopicIconComponent } from "./topicIconComponent";
import { TopicTitleComponent } from "./topicTitleComponent";
import { TopicDescriptionComponent } from "./topicDescriptionComponent";
import "./topicComponent.css";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Grommet,
  Image,
  Paragraph,
} from 'grommet';
import { Edit, Trash } from 'grommet-icons';
import axios from "axios";
import { Button as SemanticUIButton } from 'semantic-ui-react'
import { Header, Modal, Icon, Input } from 'semantic-ui-react'
import { AuthService } from "../../../services/authService";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import container from "../../../inversify/inversifyContainer";
import { MESSAGE } from "../../../../shared/constants/routes";
import { Link } from "react-router-dom";

export type TopicProps = {
  id: any;
  imagelink: any;
  title: string;
  description: string;
  className: string;
  deleteTopic: () => void
  editTopic: (newTitle: string) => void
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

const ModalDelete: React.FC<{
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  deleteTopic: () => void
}> = ({ open, setOpen, deleteTopic }) => {

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    >
      <Header icon>
        <Icon name='trash' />
        Удаление темы
      </Header>
      <Modal.Content>
        <p className="descriptionModal">
          Вы уверены что хотите удалить эту тему?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <SemanticUIButton className="buttonModal" basic color='red' inverted onClick={() => { setOpen(false); }}>
          <Icon name='remove' /> Нет
        </SemanticUIButton>
        <SemanticUIButton className="buttonModal" color='green' inverted onClick={() => { setOpen(false); deleteTopic(); }}>
          <Icon name='checkmark' /> Да
        </SemanticUIButton>
      </Modal.Actions>
    </Modal>
  )
}

const ModalEdit: React.FC<{
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  oldTitle: string
  editTopic: (newTitle: string) => void
}> = ({ open, setOpen, oldTitle, editTopic }) => {
  const [newTitle, setNewTitle] = useState<string>(oldTitle)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    >
      <Header icon>
        <Icon name='edit' />
        Редактирование темы
      </Header>
      <Modal.Content>
        <p className="descriptionModal">
          Вы уверены что хотите отредактировать эту тему?
        </p>
        <Input className="inputModal" size='huge' icon='heading' iconPosition='left' placeholder='Titel' value={newTitle} onChange={(event) => {if(event.target.value.length < 64) setNewTitle(event.target.value)}} />
      </Modal.Content>
      <Modal.Actions>
        <SemanticUIButton className="buttonModal" basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Нет
        </SemanticUIButton>
        <SemanticUIButton className="buttonModal" color='green' inverted onClick={() => { setOpen(false); editTopic(newTitle) }}>
          <Icon name='checkmark' /> Да
        </SemanticUIButton>
      </Modal.Actions>
    </Modal>
  )
}

export const TopicComponent: (props: TopicProps) => JSX.Element = (
  props: TopicProps
) => {

  const [openDel, setOpenDel] = useState<boolean>(false)
  const [openEd, setOpenEd] = useState<boolean>(false)

  return (
    <Grommet theme={theme}>
      <ModalDelete open={openDel} setOpen={setOpenDel} deleteTopic={props.deleteTopic} />
      <ModalEdit open={openEd} setOpen={setOpenEd} oldTitle={props.title} editTopic={props.editTopic} />
      <Card elevation="large" width="medium">
        <CardBody height="small">
          <Image
            fit="cover"
            alignSelf="center"
            src={props.imagelink}
          />
        </CardBody>
        <Box pad={{ horizontal: 'medium' }} responsive={false}>
          <Heading level="2" alignSelf="center">
            {props.title}
          </Heading>
          <Paragraph color="white" size="small" margin={{ top: 'none' }}>
            {props.description}
          </Paragraph>
        </Box>
        <CardFooter>
          <Box direction="row" fill align="center" gap="small">
            <Link to={`/message=${props.id}`}>
              <Anchor
                label="MORE"
                size="medium"
                color="#ADFF0037"
              />
            </Link>
            <Box direction="row" fill align="end" alignContent="end" gap="small">
              <Button icon={<Edit />} focusIndicator={false} hoverIndicator onClick={() => { setOpenEd(true) }} />
              <Button icon={<Trash />} focusIndicator={false} hoverIndicator onClick={() => { setOpenDel(true) }} />
            </Box>
          </Box>
        </CardFooter>
      </Card>
    </Grommet>
  );
};

const _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

function editComponent(topicId: number, title: string) {
  axios.put(`http://185.209.31.106:55558/topic/${topicId}/edit`, { headers: { Authorization: `Bearer ${_authService.getAuthToken()}` } },)
    .then(result => console.log("Отредачили"))
}

