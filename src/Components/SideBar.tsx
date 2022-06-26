import React, { useState } from "react";
import { Button, Nav, Tab } from "react-bootstrap";
import { Contacts } from "./Contacts";
import { Conversations } from "./Conversations";
import { CreateContactModal } from "./CreateContactModal";
import { CreateConversationModal } from "./CreateConversationModal";

interface SideBarProps {
  id: string;
}

const CONVERSATIONS_KEY = "conversations";
const CONTACT_KEY = "contacts";

function SideBar(props: SideBarProps) {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATIONS_KEY);
  const [showModal, setShowModal] = useState<boolean>(false);
  const isConversationActive = activeKey === CONVERSATIONS_KEY;

  const handleChangeTab = (key: string | null) => {
    if (typeof key === "string") {
      setActiveKey(key);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div
      className="w-50 d-flex flex-column justify-content-between"
      style={{
        height: "100vh",
      }}
    >
      <Tab.Container
        activeKey={activeKey}
        onSelect={(key) => handleChangeTab(key)}
      >
        <Nav variant="tabs" activeKey={CONVERSATIONS_KEY}>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACT_KEY}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACT_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      <div>
        {props.id && <span>your id : {props.id}</span>}
        <Button
          className="w-100 border-top-1"
          onClick={() => setShowModal(true)}
        >
          Create New {isConversationActive ? "Conversation" : "Contact"}
        </Button>
        {isConversationActive ? (
          <CreateConversationModal isShow={showModal} closeModal={handleCloseModal}/>
        ) : (
          <CreateContactModal isShow={showModal} closeModal={handleCloseModal}/>
        )}
      </div>
    </div>
  );
}

export default SideBar;
