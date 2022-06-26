import React, { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export interface ContactType {
  id: string;
  name: string;
}

interface PropsTypes {
  children: JSX.Element;
}

interface contextType {
  contacts: ContactType[];
  createContact: (contact: ContactType) => void;
}

const contactContext = createContext<contextType>({
  contacts: [],
  createContact: (contact: ContactType) => {},
});

export const useContactContext = () => {
  return useContext(contactContext);
};
const ContactContextprider = (props: PropsTypes) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (contact: ContactType) => {
    setContacts((prevContact: ContactType[]) => {
      return [...prevContact, contact];
    });
  };

  return (
    <contactContext.Provider value={{ contacts, createContact }}>
      {props.children}
    </contactContext.Provider>
  );
};
export default ContactContextprider;
