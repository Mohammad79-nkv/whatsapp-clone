import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContactContext } from "../Context/ContactContext";

interface CreateContactModalProps {
  isShow: boolean;
  closeModal: () => void;
}

export const CreateContactModal = (props: CreateContactModalProps) => {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { createContact } = useContactContext();

  const handleCreateContact = () => {
    const newContact = { id, name };
    createContact(newContact);
    props.closeModal();
  };

  return (
    <Modal show={props.isShow}>
      <Modal.Header>Create New Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateContact}>
          <Form.Group>
            <Form.Label>Id :</Form.Label>
            <Form.Control
              value={id}
              onChange={(e: any) => setId(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name :</Form.Label>
            <Form.Control
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" onClick={handleCreateContact}>
            Craete
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
