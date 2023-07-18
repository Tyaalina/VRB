import { Box, Button, Grommet, Text } from "grommet";
import { Edit, Trash } from "grommet-icons";
import React, { useState } from "react";
import { Form, Header, Icon, Input, Modal, TextArea } from "semantic-ui-react";
import { Button as SemanticUIButton } from 'semantic-ui-react'
import "./MessageComponent.css"

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
                    size: "30px",
                    height: "40px",
                }
            }
        }
    },
};

export type MessageProps = {
    id: any;
    title: string;
    createdAt: string;
    authorUserName: string;
    deleteMessage: () => void
    editMessage: (newTitle: string) => void
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
          Удаление сообщения
        </Header>
            <Modal.Content>
                <p className="descriptionModal">
                    Вы уверены что хотите удалить это сообщение?
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
          Редактирование сообщения
        </Header>
            <Modal.Content>
                <p className="descriptionModal">
                    Вы уверены что хотите отредактировать это сообщение?
          </p>
                <Form>
                    <Input className="inputModal" size='huge' icon='heading' iconPosition='left' placeholder='Titel' value={newTitle} onChange={(event) => {setNewTitle(event.target.value)}} />
                </Form>
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

export const MessageComponent: (props: MessageProps) => JSX.Element = (
    props: MessageProps
) => {
    const [openDel, setOpenDel] = useState<boolean>(false)
    const [openEd, setOpenEd] = useState<boolean>(false)

    return (
        <Grommet theme={theme}>
            <ModalDelete open={openDel} setOpen={setOpenDel} deleteTopic={props.deleteMessage} />
            <ModalEdit open={openEd} setOpen={setOpenEd} oldTitle={props.title} editTopic={props.editMessage} />
            <Box margin={{ vertical: "small", horizontal: "medium" }} border={{ color: "#E9FFE1" }} round="small">
                <Box direction="row">
                    <Text alignSelf="center" size="medium" margin={{ horizontal: "small" }} color="#ADFF00">{props.authorUserName}</Text>
                    <Button icon={<Edit color="#ADFF0037" />} size="small" focusIndicator={false} hoverIndicator onClick={() => { setOpenEd(true) }} />
                    <Button icon={<Trash color="#ADFF0037" />} size="small" focusIndicator={false} hoverIndicator onClick={() => { setOpenDel(true) }} />
                </Box>
                <Text size="small" margin={{ horizontal: "small" }}>{props.title}</Text>
            </Box>
        </Grommet>)
}