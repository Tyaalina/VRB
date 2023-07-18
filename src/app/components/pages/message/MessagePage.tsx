import axios from "axios";
import { Box, Button, Card, CardBody, CardFooter, Form, Grommet, Heading, TextArea } from "grommet";
import React, { useState } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { menuConfig } from "../../../../shared/constants/menuItems";
import container from "../../../inversify/inversifyContainer";
import { SERVICE_IDENTIFIER } from "../../../inversify/inversifyTypes";
import { IRootState } from "../../../reduxInfrastructure/RootState";
import { AuthService } from "../../../services/authService";
import { IBaseFormProps } from "../../../types/form/IBaseFormProps";
import { TopicMessageDto } from "../../../types/models/TopicMessageDto";
import MenuCompnent from "../../menu/Menu";
import { MessageActions } from "./MessageActions";
import { MessageComponent } from "./MessageComponent";
import { MESSAGE } from "./MessageConstants";
import { IMessageState } from "./MessageState";
import "./MessagePage.css";

const theme = {
  global: {
    font: {
      family: 'Prosto One',
    },
    focus: {
      border: {
        color: "#E9FFE1"
      }
    },
    control: {
      border: {
        radius: "20px"
      }
    }
  },
  button: {
    active: {
      border: {
        color: "#E9FFE1"
      }
    },
    border: {
      color: "#E9FFE1"
    }
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
          size: "30px",
          height: "40px",
        }
      }
    }
  },
};

type IFormState = TopicMessageDto[];
type IMessageProps = IBaseFormProps<IFormState, {}>;

export const MessageArea : React.FC<{createNewMessage: (newMessage: string) => void}> = ({createNewMessage}) => {
  const [newMessage, setNewMessage] = useState('');

  return (
  <div className="messageArea">
    <TextArea placeholder="Новое сообщение" value={newMessage} onChange={(event) => {if(event.target.value.length < 200) {setNewMessage(event.target.value)}}}>
    </TextArea >
    <Button type="submit" label="Отправить" onClick={() => { createNewMessage(newMessage); setNewMessage('') }} />
  </div>
  )
}

class messagePage extends Component<IMessageProps>  {
  protected readonly actions: MessageActions;
  private readonly _authService: AuthService = container.get<AuthService>(SERVICE_IDENTIFIER.AuthService);

  public constructor(props: IMessageProps) {
    super(props);
    this.actions = container.get<MessageActions>(SERVICE_IDENTIFIER.MessageAction);
    props.dispatch(this.actions.initForm());
  }

  componentDidMount() {
    this.props.dispatch({ type: MESSAGE });
    this.getMessage()
  }

  getMessage() {
    // @ts-ignore
    axios.get(`http://185.209.31.106:55558/topic/${this.props.match.params.id}`, { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } },)
      .then(result => this.props.dispatch(this.actions.setMessage(result.data.topic.topicMessageInfos)))
  }

  deleteMessage(topicMessageId: number) {
    // @ts-ignore
    axios.delete(`http://185.209.31.106:55558/message/${topicMessageId}/delete`, { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } },)
      .then(result => this.getMessage())
  }

  editMessage(topicMessageId: number, title: string) {
    // @ts-ignore
    axios.put(`http://185.209.31.106:55558/message/${topicMessageId}/title/edit`, { title: title }, { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } },)
      .then(result => this.getMessage())
  }
  createMessage(newMessage: string) {
    axios.post(`http://185.209.31.106:55558/message/create`,
      // @ts-ignore
      { TopicId: this.props.match.params.id, Title: newMessage, Html: `<h1>${newMessage}</h1>`},
      { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } })
      .then(result => this.getMessage())
  }

  subcribe() {
    // @ts-ignore
    axios.post(`http://185.209.31.106:55558/topic/${this.props.match.params.id}/subscribe`,
      {},
      { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } })
      .then(result => {this.getMessage(); console.log("Pfkdnk")})
  }

  unsubcribe() {
    // @ts-ignore
    axios.delete(`http://185.209.31.106:55558/topic/${this.props.match.params.id}/unsubscribe`,
      { headers: { Authorization: `Bearer ${this._authService.getAuthToken()}` } })
      .then(result => this.getMessage())
  }

  render(): JSX.Element {
    document.body.className = "";

    return (<div>
      <MenuCompnent items={menuConfig} />
      <Grommet theme={theme}>
        <Box
          margin="xlarge"
          pad="medium"
          alignSelf='center'
          alignContent="center"
          align="center"
        >
          <Card elevation="large" width="large">
            <CardBody height="small">
              <Heading level="2" alignSelf="center">
                Сообщения темы
              </Heading>
              <Button label="Подписаться" onClick={()=> this.subcribe()}></Button>
              <Button label="Отписаться" onClick={()=> this.unsubcribe()}></Button>
              {this.props.form.record.map(element => (
                <MessageComponent
                  id={element.topicMessageId}
                  title={element.title}
                  createdAt={element.createdAt}
                  authorUserName={element.authorUserName}
                  deleteMessage={() => this.deleteMessage(element.topicMessageId)}
                  editMessage={(newTitle: string) => this.editMessage(element.topicMessageId, newTitle)}
                ></MessageComponent>
              ))}
            </CardBody>
            <CardFooter>
              <MessageArea createNewMessage={(newMessage:string) => this.createMessage(newMessage)}/>
            </CardFooter>
          </Card>
        </Box>
      </Grommet>
    </div>)
  }
}

function mapStateToProps(state: IRootState): IMessageState {
  return { ...state.message }
}

export const MessagePage = connect(mapStateToProps)(messagePage);

export default MessagePage;