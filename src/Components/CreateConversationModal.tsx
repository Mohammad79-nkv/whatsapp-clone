import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContactContext } from "../Context/ContactContext";

interface CreateConversationModalProps {
  isShow: boolean;
  closeModal: () => void;
}

export const CreateConversationModal = (
  props: CreateConversationModalProps
) => {
  const [id, setId] = useState<string>();
  const [name, setName] = useState<string>();
  const [selectedContactId, setSelectedContactId] = useState<string[]>([]);

  const { contacts } = useContactContext();

  const handlecreateCoversation = () => {
    props.closeModal();
  };

  const handleAddContact = (contactId: string) => {
    setSelectedContactId((prevContact) => {
      if (prevContact.includes(contactId)) {
        return prevContact.filter((id) => id !== contactId);
      } else {
        return [...prevContact, contactId];
      }
    });
  };

  const handleCreateConversation = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    props.closeModal()
  };

  return (
    <Modal show={props.isShow}>
      <Modal.Header>Create New Contact</Modal.Header>
      <Modal.Body>
        <Form>
          <>
            {contacts.map((contact) => {
              return (
                <Form.Group controlId={contact.id}>
                  <Form.Check
                    type="checkbox"
                    label={contact.name}
                    checked={selectedContactId.includes(contact.id)}
                    onChange={() => handleAddContact(contact.id)}
                  />
                </Form.Group>
              );
            })}
          </>
          <Button
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              handleCreateConversation(e)
            }
          >
            Craete
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
