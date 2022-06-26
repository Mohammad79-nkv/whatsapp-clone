import React from "react";
import { ListGroup } from "react-bootstrap";
import { ContactType, useContactContext } from "../Context/ContactContext";

export const Contacts = () => {
  const {contacts} = useContactContext();

  return (
    <ListGroup>
        {contacts.map((contact: ContactType) => {
            return <ListGroup.Item>{contact.name}</ListGroup.Item>
        })}
    </ListGroup>
  );
};
